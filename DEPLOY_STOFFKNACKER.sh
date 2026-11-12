#!/usr/bin/env bash
# Stoffknacker: sicherer Upload im Codespace (Fassung 2, Re-Audit MN4-003).
# - Ändert NUR ein Repository, dessen Name «stoffknacker» (oder den früheren Namen «mnemika») enthält (Schutz für curvescout, nestlyzer und alle anderen).
# - Fremde Dateien (README, .github, eigene Notizen …) bleiben unangetastet. Entfernt wird nur, was eine frühere
#   Stoffknacker-Fassung laut ihrer DATEILISTE.txt selbst geliefert hat und in der neuen Fassung nicht mehr vorkommt.
# - Prüft alles, bevor etwas geändert wird. Nie force-push.
# Aufruf (vom Einzeiler): bash /tmp/m/DEPLOY_STOFFKNACKER.sh <zip>
set -euo pipefail
Z="${1:-}"; SRC=/tmp/m; SELF=DEPLOY_STOFFKNACKER.sh
stopp(){ echo; echo "ABBRUCH: $*"; echo "Am Repository wurde nichts geändert."; exit 1; }
liste(){ tail -n +2 "$1" | awk 'NF{print $1}' | sort -u; }

# 1. Richtiges Repository?
ROOT=$(git rev-parse --show-toplevel 2>/dev/null) || stopp "Kein Git-Repository. Bitte im Codespace des Stoffknacker-Repositorys ausführen."
cd "$ROOT"
URL=$(git remote get-url origin 2>/dev/null) || stopp "Kein origin-Remote."
NAME=$(basename "$URL" .git | tr 'A-Z' 'a-z')
case "$NAME" in *curvescout*|*nestlyzer*) stopp "Dies ist das Repository «$NAME», nicht Stoffknacker.";; esac
ZUSATZ=$(sed -n 's/.*"repo_slug_zusatz": *"\([a-z0-9-]*\)".*/\1/p' "$SRC/build-info.json" 2>/dev/null | head -1)   # neuer Name (nach umbenennen.py)
case "$NAME" in *stoffknacker*|*mnemika*) ;; *) if [ -z "$ZUSATZ" ] || [ "${NAME#*$ZUSATZ}" = "$NAME" ]; then stopp "Repository «$NAME» ist nicht das Repository von Stoffknacker."; fi;; esac
# Neues Repository: nur README/LICENSE/.gitignore/.gitattributes erlaubt (werden nie angefasst)
if [ -n "$(git ls-files | grep -viE '^(readme(\.[a-z]+)?|license(\.[a-z]+)?|\.gitignore|\.gitattributes)$' | head -1)" ]; then
  git ls-files | grep -qx 'DATEILISTE.txt' || grep -qiE 'stoffknacker|mnemika' index.html 2>/dev/null || stopp "Das Repository enthält keine frühere Stoffknacker-Fassung."
fi

# 2. Paket vollständig und GitHub-tauglich?
[ -n "$Z" ] && [ -f "$ROOT/$Z" ] || stopp "ZIP nicht gefunden."
case "$(basename "$Z")" in stoffknacker_github_beta_r*.zip|mnemika_github_beta_r*.zip) ;; *) stopp "Falsche ZIP: $Z";; esac
for f in index.html DATEILISTE.txt CNAME sw.js; do [ -f "$SRC/$f" ] || stopp "Im Paket fehlt $f."; done
tr -d ' \r\n' < "$SRC/CNAME" | grep -Eq '^([a-z0-9]([a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,}$' || stopp "CNAME im Paket ist keine gültige Domain."  # Eintrag siehe 2b
[ ! -e "$SRC/.github" ] || stopp "Paket enthält .github (Workflows sind nicht erlaubt)."
# Rechts-Scan (Vorgabe Inhaber): keine Lehrbuch- oder Altprüfungsinhalte. Fund -> Abbruch, nichts wird verändert.
if [ -f "$SRC/rechtsscan.py" ] && command -v python3 >/dev/null 2>&1; then python3 -I "$SRC/rechtsscan.py" "$SRC" || stopp "Rechts-Scan hat Lehrbuch- oder Altprüfungsmaterial gefunden (siehe oben)."; fi
# GitHub-Grenzen (mit Reserve): jede Datei <= 20 MB (Browser-Upload erlaubt 25 MB, Warnung ab 50 MB, Sperre ab 100 MB),
# höchstens 900 Einträge je Ordner (GitHub zeigt ab 1000 nicht mehr alle), Paket <= 500 MB (Pages-Site max. 1 GB), keine Workflows.
GROSS=$(find "$SRC" -type f -size +20M | head -1); [ -z "$GROSS" ] || stopp "Datei über 20 MB (GitHub-Grenze mit Reserve): $GROSS"
VOLL=$(find "$SRC" -type d | while read -r D; do N=$(ls -A "$D" | wc -l); if [ "$N" -gt 900 ]; then echo "$D ($N)"; fi; done | head -1 || true); [ -z "$VOLL" ] || stopp "Ordner mit über 900 Einträgen: $VOLL"
SUMME=$(du -sm "$SRC" | cut -f1); [ "$SUMME" -le 500 ] || stopp "Paket über 500 MB ($SUMME MB)."
[ ! -d "$SRC/.github/workflows" ] || stopp "Paket enthält GitHub-Workflows; nicht erlaubt."
NEU=$(liste "$SRC/DATEILISTE.txt")
IST=$(cd "$SRC" && find . -type f ! -name "$SELF" ! -name fotos_holen.py ! -name fotos_themen.json ! -name rechtsscan.py | sed 's|^\./||' | sort -u)
[ "$NEU" = "$IST" ] || stopp "Paketinhalt stimmt nicht mit DATEILISTE.txt überein."
if echo "$NEU" | grep -Eq '(^|/)\.\.(/|$)|^/'; then stopp "Unsicherer Pfad im Paket."; fi

# 2b. Ziel (r161, Audit 2): der Inhaber wählt das Ziel ausdrücklich. Eine gemeinsame GitHub-IP beweist keine Domain-Kontrolle.
#     STOFFKNACKER_ZIEL=vorschau  -> ohne eigene Domain (<konto>.github.io/<repository>/), noindex (nicht privat!)
#     STOFFKNACKER_ZIEL=produktion -> eigene Domain aus CNAME; nur wenn die Domain im GitHub-Konto verifiziert ist (TXT-Eintrag)
#     und auf GitHub Pages zeigt. DNS unklar oder fehlend -> Abbruch «Ziel unbekannt», nie eine stille Wahl.
DOMAIN=$(tr -d ' \r\n' < "$SRC/CNAME")
ZIEL="${STOFFKNACKER_ZIEL:-${MNEMIKA_ZIEL:-}}"
if [ -z "$ZIEL" ] && [ -t 0 ]; then read -r -p "Ziel? Tippe vorschau oder produktion und Enter: " ZIEL || true; fi
case "$ZIEL" in vorschau|produktion) ;; *) stopp "Ziel unbekannt. Bitte ausdrücklich wählen: STOFFKNACKER_ZIEL=vorschau oder STOFFKNACKER_ZIEL=produktion." ;; esac
IPS=$( (getent ahostsv4 "$DOMAIN" 2>/dev/null || true) | awk '{print $1}' | sort -u | tr '\n' ' ')
if [ "$ZIEL" = produktion ]; then
  [ -n "$IPS" ] || stopp "Ziel unbekannt: $DOMAIN lässt sich nicht auflösen. Domain prüfen, nichts geändert."
  echo "$IPS" | tr ' ' '\n' | sed '/^$/d' | grep -Evq '^185\.199\.(108|109|110|111)\.153$' && stopp "Ziel unbekannt: $DOMAIN zeigt nicht nur auf GitHub Pages ($IPS). Nichts geändert."
  [ "${STOFFKNACKER_DOMAIN_VERIFIZIERT:-${MNEMIKA_DOMAIN_VERIFIZIERT:-}}" = ja ] || { A=""; [ -t 0 ] && read -r -p "Ist $DOMAIN in deinem GitHub-Konto verifiziert (Settings > Pages > Verified domains)? Tippe ja: " A || true; [ "$A" = ja ] || stopp "Domain-Verifizierung nicht bestätigt. Nichts geändert."; }
  echo "Ziel: Produktion $DOMAIN (vom Inhaber bestätigt)."
else
  KONTO=$(echo "$URL" | sed -E 's#^.*github\.com[:/]([^/]+)/.*$#\1#' | tr 'A-Z' 'a-z')
  echo "Ziel: Vorschau https://$KONTO.github.io/$NAME/ (ohne eigene Domain)."
  rm -f "$SRC/CNAME"; grep -v '^CNAME[[:space:]]' "$SRC/DATEILISTE.txt" > "$SRC/DATEILISTE.tmp" && mv "$SRC/DATEILISTE.tmp" "$SRC/DATEILISTE.txt"
  NEU=$(liste "$SRC/DATEILISTE.txt")
  command -v python3 >/dev/null 2>&1 || stopp "python3 fehlt: Vorschau-Schutz (noindex) kann nicht gesetzt werden."
  # r179: parsed noindex assertions, repository-base links, and no tracking on previews.
  python3 -I "$SRC/tools/prepare_preview.py" "$SRC" --prefix "/$NAME/" || stopp "Vorschau-Schutz oder Pfade unvollstaendig."
  # Regenerate the preview shell hashes after transforming its served bytes.
  python3 "$SRC/tools/finalize_release180.py" "$SRC" --out "$SRC/build-evidence" || stopp "Vorschau-Build fehlgeschlagen."
  NEU=$(liste "$SRC/DATEILISTE.txt")
  echo "        noindex gesetzt. Achtung: noindex macht die Vorschau NICHT privat, die Adresse ist öffentlich erreichbar."
  VORSCHAU=1
fi

# 3. Repository sauber und aktuell?
ANDERES=$(git status --porcelain | grep -v -E '^\?\? "?(stoffknacker|mnemika)_github_beta_r[^/]*\.zip"?$' || true)   # hochgeladene Paket-ZIPs (auch «(2)») zählen nicht
[ -z "$ANDERES" ] || stopp "Im Codespace gibt es ungespeicherte Änderungen:
$ANDERES"
ZWEIG=$(git symbolic-ref --short HEAD 2>/dev/null || echo main)
if [ -n "$(git ls-remote --heads origin 2>/dev/null)" ]; then git pull -q --ff-only || stopp "git pull ging nicht sauber (Zweig $ZWEIG)."; fi
ALT=$(git rev-parse --short HEAD 2>/dev/null || echo leer)
ALTLISTE=""
if [ -f DATEILISTE.txt ] && git ls-files --error-unmatch DATEILISTE.txt >/dev/null 2>&1; then ALTLISTE=$(liste DATEILISTE.txt); fi
WEG=$(comm -23 <(printf '%s\n' "$ALTLISTE" | sed '/^$/d') <(printf '%s\n' "$NEU"))
FREMD=$(comm -23 <(git ls-files | sort -u) <(printf '%s\n%s\n' "$ALTLISTE" "$NEU" | sed '/^$/d' | sort -u))

# 4. Nur Stoffknacker-Dateien ersetzen, prüfen, hochladen
for f in $WEG; do if git ls-files --error-unmatch -- "$f" >/dev/null 2>&1; then git rm -q -- "$f"; fi; done
(cd "$SRC" && tar cf - --exclude="./$SELF" --exclude=./fotos_holen.py --exclude=./fotos_themen.json --exclude=./rechtsscan.py .) | tar xf -
mkdir -p "$HOME/stoffknacker-pakete" && mv -f "$ROOT/$Z" "$HOME/stoffknacker-pakete/" || rm -f "$ROOT/$Z"   # Paket aufbewahren (ausserhalb des Repositorys)
printf '%s\n' $NEU | git add --pathspec-from-file=-
zurueck(){ if [ "$ALT" != leer ]; then git reset -q --hard "$ALT" 2>/dev/null || true; fi; stopp "$1 Zurückgesetzt."; }
for f in $NEU; do cmp -s "$f" "$SRC/$f" || zurueck "Datei $f stimmt nach dem Kopieren nicht."; done
NACHFREMD=$(comm -23 <(git ls-files | sort -u) <(printf '%s\n' "$NEU"))
[ "$NACHFREMD" = "$(printf '%s\n' "$FREMD" | sed '/^$/d')" ] || zurueck "Fremde Dateien wären verändert worden."
GEAENDERT=$(git diff --cached --name-only | sort -u)
ERLAUBT=$(printf '%s\n%s\n' "$NEU" "$WEG" | sed '/^$/d' | sort -u)
[ -z "$(comm -23 <(printf '%s\n' "$GEAENDERT" | sed '/^$/d') <(printf '%s\n' "$ERLAUBT"))" ] || zurueck "Änderung ausserhalb der Stoffknacker-Dateien erkannt."
echo "Änderungen: $(git diff --cached --shortstat)"
if [ -n "$FREMD" ]; then echo "Unverändert gelassen (nicht von Stoffknacker): $(printf '%s\n' "$FREMD" | sed '/^$/d' | wc -l) Datei(en)."; fi
git commit -qm "Stoffknacker $(basename "$Z" .zip | sed -E 's/(stoffknacker|mnemika)_github_beta_//')" || stopp "Nichts zu ändern (gleiche Fassung schon online)."
# 5. Fotos (r161): im Codespace aus Wikimedia Commons holen, nach den Regeln der Bildprüfung auswählen und in assets/fotos/
#    speichern (mit SHA-256-Quittung in fotos.json). Danach zeigt die Website die Fotos selbst, ohne Anfrage an Dritte.
#    Klappt etwas nicht, bleiben die bisherigen Fotos; die Website funktioniert so oder so. Ändert nur assets/fotos/.
#    Audit 2: automatisch gewählte Fotos sind keine redaktionelle Freigabe. Darum nur auf ausdrücklichen Wunsch (STOFFKNACKER_FOTOS=ja),
#    nach Sichtprüfung in #bilder. Ohne «ja» bleibt assets/fotos unverändert; die Website zeigt die Schaubilder.
FOTOS="${STOFFKNACKER_FOTOS:-${MNEMIKA_FOTOS:-}}"
if [ "$FOTOS" != ja ]; then echo "Fotos: nicht geholt (nur mit STOFFKNACKER_FOTOS=ja nach Sichtprüfung)."; fi
if [ "$FOTOS" = ja ] && command -v python3 >/dev/null 2>&1 && [ -f "$SRC/fotos_holen.py" ] && [ -f "$SRC/fotos_themen.json" ]; then
  echo "Fotos werden geprüft und gespeichert (1-3 Minuten) ..."
  timeout 900 python3 "$SRC/fotos_holen.py" "$SRC/fotos_themen.json" assets/fotos || echo "Fotos: nicht alle erreichbar, bisherige bleiben."
  ANDERS=$(git status --porcelain | grep -v ' assets/fotos/' || true)
  if [ -n "$ANDERS" ]; then git checkout -q -- . 2>/dev/null || true; git clean -fdq -- assets/fotos 2>/dev/null || true; echo "Fotos: unerwartete Änderung ausserhalb assets/fotos, Fotos übersprungen."
  else git add -A -- assets/fotos 2>/dev/null || true; git diff --cached --quiet || git commit -qm "Stoffknacker Fotos (geprüft, mit Quittung)"; fi
fi
# 6. Freigabe (r161, Audit R161A-02): ohne ausdrückliches «ja» wird nichts veröffentlicht. Die Änderung bleibt lokal gespeichert.
echo; echo "Bereit: $(git log --oneline "$ALT"..HEAD 2>/dev/null | wc -l) neue Fassung(en) lokal gespeichert."
if [ "${VORSCHAU:-0}" = 1 ]; then echo "Ziel: Vorschau-Adresse (github.io), nicht $DOMAIN."; else echo "Ziel: $DOMAIN (Produktion, vom Inhaber bestätigt)."; fi
ANTWORT="${STOFFKNACKER_FREIGABE:-${MNEMIKA_FREIGABE:-}}"
if [ -z "$ANTWORT" ] && [ -t 0 ]; then read -r -p "Jetzt veröffentlichen? Tippe ja und Enter: " ANTWORT || true; fi
if [ "$ANTWORT" != "ja" ]; then
  echo "NICHT veröffentlicht. Online bleibt die bisherige Fassung. Später veröffentlichen: im selben Codespace  git push origin $ZWEIG"
  echo "Rückgängig machen statt veröffentlichen:  git reset --hard $ALT"; exit 0; fi
git push -q origin "$ZWEIG" || { echo "ABBRUCH beim Hochladen. Lokal gespeichert, NICHT online. Keine Gewalt-Optionen verwenden; Fehlermeldung an Claude schicken."; exit 1; }
echo; echo "FERTIG: Stoffknacker $(git rev-parse --short HEAD) ist hochgeladen ($ZWEIG, vorher $ALT, $(printf '%s\n' $NEU | wc -l) Stoffknacker-Dateien)."
echo "GitHub Pages veröffentlicht in 1-3 Minuten."
