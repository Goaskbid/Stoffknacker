#!/usr/bin/env python3
"""Stoffknacker Fotos holen (r161). Läuft beim Hochladen im Codespace (dort gibt es Internet), nicht auf der Website.
Wählt je Thema ein Foto aus Wikimedia Commons nach denselben Regeln wie die Bildprüfung in der App (assets/js/bilder.js):
nur gemeinfrei/CC0/CC BY/CC BY-SA, nichts mit NC/ND, keine Einschränkungen, keine Personen/Logos/Marken, Thema erkennbar,
mindestens 800 px breit, Querformat 1:1 bis 2.4:1. Speichert das verkleinerte Bild (960 px) unverändert unter assets/fotos/
und schreibt assets/fotos/fotos.json mit Urheber, Lizenz, Quelle und SHA-256 als Quittung. Nur Python-Standardbibliothek.
Aufruf: python3 fotos_holen.py <fotos_themen.json> <zielordner>"""
import json, re, sys, os, time, hashlib, html, urllib.request, urllib.parse
API = os.environ.get('MNEMIKA_FOTO_API', 'https://commons.wikimedia.org/w/api.php')
ERLAUBT = re.compile(os.environ.get('MNEMIKA_FOTO_HOSTS', r'^https://upload\.wikimedia\.org/'))
UA = 'stoffknacker-fotopruefung/1.0 (Lern-App; Bildauswahl beim Veroeffentlichen)'
LIZ = re.compile(r'^(cc0|cc[- ]zero|public domain|pd\b|pd-|cc[- ]by([- ]sa)?[- ]?(1\.0|2\.0|2\.5|3\.0|4\.0)?( [a-z]{2,})?$)', re.I | re.A)
BAD = re.compile(r'\b(portrait|porträt|selfie|people|person|personen|man|men|woman|women|girl|boy|child|children|kid|kinder|frau|mann|face|gesicht|crowd|menschen|family|wedding|nude|naked|erotic|weapon|waffe|gun|blood|corpse|war|krieg|logo|trademark|®|™|advert|werbung|screenshot|meme|cartoon|drawing|diagram|map|karte von|flag|coat of arms|wappen|signature|unterschrift|id card|passport|ausweis|credit card number)\b', re.I | re.A)
ENDUNG = {'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp'}

def txt(s):
    return re.sub(r'\s+', ' ', html.unescape(re.sub(r'<[^>]+>', '', str(s or '')))).strip()

def pruefe(p, gut_muster):
    """Gleiche Regeln und Reihenfolge wie pruefe() in bilder.js."""
    ii = (p.get('imageinfo') or [None])[0]
    if not ii: return {'ok': False, 'grund': 'ohne Bildangaben'}
    x = ii.get('extmetadata') or {}
    g = lambda k: txt((x.get(k) or {}).get('value'))
    lic, titel, besch = g('LicenseShortName'), str(p.get('title') or ''), g('ImageDescription')
    autor = g('Artist') or g('Credit'); rest = g('Restrictions'); unfrei = str((x.get('NonFree') or {}).get('value') or '').lower() == 'true'
    if not re.match(r'^image/(jpeg|png|webp)$', ii.get('mime') or ''): return {'ok': False, 'grund': 'Dateityp'}
    if unfrei: return {'ok': False, 'grund': 'unfrei'}
    if not lic or not LIZ.search(re.sub(r'\s+', ' ', lic).strip()) or re.search(r'\b(nc|nd)\b', lic, re.I | re.A):
        return {'ok': False, 'grund': 'Lizenz ' + (lic or 'unbekannt')}
    if rest: return {'ok': False, 'grund': 'Einschränkung (' + rest[:40] + ')'}
    w = ii.get('width') or 0; h = ii.get('height') or 1; r = w / h
    if w < 800: return {'ok': False, 'grund': 'zu klein'}
    if r < 1.0 or r > 2.4: return {'ok': False, 'grund': 'Seitenverhältnis'}
    hay = titel + ' ' + besch
    if BAD.search(hay): return {'ok': False, 'grund': 'Inhalt (Person/Marke/Unpassendes)'}
    gut = re.compile('(' + gut_muster + ')', re.I)
    if not gut.search(hay): return {'ok': False, 'grund': 'Thema nicht erkennbar'}
    if not autor and not re.search(r'public domain|cc0|pd', lic, re.I): return {'ok': False, 'grund': 'Urheber fehlt'}
    score = (3 if gut.search(titel) else 1) + (1 if w >= 1600 else 0) + (1 if re.search(r'cc0|public domain', lic, re.I) else 0) + (1 if 1.3 <= r <= 1.8 else 0)
    return {'ok': True, 'score': score, 'bild': {'titel': re.sub(r'^File:', '', titel), 'url': ii.get('thumburl') or ii.get('url'), 'mime': ii.get('thumbmime') or ii.get('mime'),
            'seite': ii.get('descriptionurl') or ('https://commons.wikimedia.org/wiki/' + urllib.parse.quote(titel)), 'lizenz': lic, 'lizenzUrl': g('LicenseUrl'),
            'autor': autor or 'unbekannt (gemeinfrei)', 'alt': besch[:180] or re.sub(r'^File:|\.\w+$', '', titel), 'b': w, 'h': h}}

def url(q):
    base = '?action=query&format=json&prop=imageinfo&iiprop=url|size|mime|extmetadata&iiurlwidth=960'
    if q.startswith('File:'): return API + base + '&titles=' + urllib.parse.quote(q)
    return API + base + '&generator=search&gsrnamespace=6&gsrlimit=24&gsrsearch=' + urllib.parse.quote(q + ' filetype:bitmap')

def hole(u, binaer=False):
    req = urllib.request.Request(u, headers={'User-Agent': UA})
    with urllib.request.urlopen(req, timeout=25) as r:
        d = r.read(8_000_000 + 1)
        if len(d) > 8_000_000: raise ValueError('zu gross')
        return d if binaer else json.loads(d.decode('utf-8'))

def bild_echt(d, mime):
    sig = {'image/jpeg': d[:3] == b'\xff\xd8\xff', 'image/png': d[:8] == b'\x89PNG\r\n\x1a\n', 'image/webp': d[:4] == b'RIFF' and d[8:12] == b'WEBP'}
    return sig.get(mime, False) and 5_000 < len(d) <= 8_000_000

def main():
    themen = json.load(open(sys.argv[1], encoding='utf-8')); ziel = sys.argv[2]; os.makedirs(ziel, exist_ok=True)
    alt = {}
    try: alt = json.load(open(os.path.join(ziel, 'fotos.json'), encoding='utf-8')).get('themen', {})
    except Exception: pass
    aus = {'version': 1, 'erstellt': time.strftime('%Y-%m-%d'), 'quelle': 'Wikimedia Commons', 'regeln': 'wie Bildprüfung in assets/js/bilder.js', 'themen': {}}
    ok = fehl = 0
    neu = os.environ.get('MNEMIKA_FOTO_NEU') == '1'; gepinnt = 0
    for thema, (suche, muster) in themen.items():
        if not re.match(r'^[a-z0-9-]+$', thema): continue
        a = alt.get(thema) or {}
        # Gepinnt: ein einmal gewähltes und gespeichertes Foto bleibt genau diese Datei (SHA-256 geprüft), bis bewusst neu gewählt wird.
        if not neu and a.get('datei') and a.get('suche') == suche and os.path.isfile(os.path.join(ziel, a['datei'])) \
           and hashlib.sha256(open(os.path.join(ziel, a['datei']), 'rb').read()).hexdigest() == a.get('sha256'):
            a['gepinnt'] = True; aus['themen'][thema] = a; gepinnt += 1; continue
        try:
            d = hole(url(suche)); pages = sorted((d.get('query') or {}).get('pages', {}).values(), key=lambda p: p.get('index', 0))
            gruende, beste = {}, None
            for p in pages:
                r = pruefe(p, muster)
                if not r['ok']:
                    k = re.sub(r' \(.*$', '', r['grund']); k = 'Lizenz' if k.startswith('Lizenz') else k; gruende[k] = gruende.get(k, 0) + 1; continue
                if not beste or r['score'] > beste['score']: beste = r
            e = {'suche': suche, 'geprueft': len(pages), 'abgelehnt': gruende, 'datei': None}
            if beste:
                b = beste['bild']
                if not ERLAUBT.search(b['url'] or ''): raise ValueError('Bildadresse nicht erlaubt')
                daten = hole(b['url'], True); mime = b['mime'] if b['mime'] in ENDUNG else 'image/jpeg'
                if not bild_echt(daten, mime): raise ValueError('keine gültige Bilddatei')
                name = thema + '.' + ENDUNG[mime]
                for f in os.listdir(ziel):
                    if f.startswith(thema + '.') and f != name and f != 'fotos.json': os.remove(os.path.join(ziel, f))
                open(os.path.join(ziel, name), 'wb').write(daten)
                e.update({k: b[k] for k in ('titel', 'seite', 'lizenz', 'lizenzUrl', 'autor', 'alt', 'b', 'h')})
                e.update({'datei': name, 'sha256': hashlib.sha256(daten).hexdigest(), 'bytes': len(daten), 'quelleBild': b['url']}); ok += 1
            aus['themen'][thema] = e
        except Exception as x:
            fehl += 1
            if thema in alt: aus['themen'][thema] = alt[thema]   # bisheriges geprüftes Foto behalten
            else: aus['themen'][thema] = {'suche': suche, 'datei': None, 'fehler': str(x)[:120]}
        time.sleep(float(os.environ.get('MNEMIKA_FOTO_PAUSE', '0.3')))
    for f in os.listdir(ziel):   # Dateien entfernen, die zu keinem Thema mehr gehören
        if f != 'fotos.json' and f not in {t.get('datei') for t in aus['themen'].values()}: os.remove(os.path.join(ziel, f))
    aus['hinweis'] = 'Automatisch nach Regeln geprüft; Sichtprüfung durch einen Menschen in #bilder empfohlen.'
    if not any(t.get('datei') for t in aus['themen'].values()):
        print('Fotos: keine Datei erreichbar; nichts gespeichert (die Website zeigt dann die Schaubilder ohne Fotos).'); return 2
    json.dump(aus, open(os.path.join(ziel, 'fotos.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
    print('Fotos: %d neu geprüft und gespeichert, %d unverändert (gepinnt), %d Themen ohne Antwort (bisherige bleiben).' % (ok, gepinnt, fehl))
    return 0 if ok or gepinnt or not fehl else 2

if __name__ == '__main__': sys.exit(main())
