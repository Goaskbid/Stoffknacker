#!/usr/bin/env python3
"""Stoffknacker Rechts-Scan: blockiert jede Veröffentlichung, wenn Lehrbuch- oder Altprüfungsmaterial auftaucht.
Regel des Inhabers: keine Texte, Abbildungen oder Aufgaben aus Lehrbüchern, Lehrmitteln oder Prüfungen früherer Jahre.
Erlaubt: amtliche Reglemente, Richtlinien und Rahmenlehrpläne (Art. 5 URG), dort verbindlich genannte Werke nur mit Titel/Autor/ISBN,
kurze Zitate mit Quellenangabe zur Textanalyse (Art. 25 URG). Aufruf: python3 rechtsscan.py <ordner>  (Exit 1 = Fund)"""
import os, re, sys, json
R = sys.argv[1] if len(sys.argv) > 1 else '.'
VERBOTEN = [
    (r'"source_type":"(restricted_exam_archive|public_local_exam_sample|public_exam_archive|public_school_final_exam_archive|public_pathway_sample_archive|publisher_metadata)"', 'Quelle aus Prüfungsarchiv oder Verlag'),
    (r'(?i)\b(compendio|hep[ -]verlag|cornelsen|westermann|schroedel|orell f(ü|u)ssli|verlag skv|lehrmittelverlag zürich)\b', 'Lehrmittelverlag als Quelle'),
    (r'(?i)(aufgabe|aufgaben|text|abbildung|grafik)\s+(aus|nach)\s+(dem|einem)\s+(lehrbuch|lehrmittel|schulbuch)\b', 'Inhalt aus Lehrbuch'),
    (r'(?i)(prüfungsaufgabe|originalaufgabe|aufgabe)\s+(der|aus der)\s+(passerelle|maturitäts?|bm|fms|smp|ebmp)[-\s]?prüfung\s+(19|20)\d\d', 'Aufgabe aus früherer Prüfung'),
    (r'(?i)(serie|prüfungsserie)\s+(19|20)\d\d\s+(aufgabe|nr\.)', 'Aufgabe aus früherer Prüfung'),
    (r'(?i)(übernommen|kopiert|abgeschrieben)\s+aus\s+(dem|einem)?\s*(lehrbuch|lehrmittel|schulbuch|prüfung)', 'übernommenes Material'),
]
# ISBN nur dort, wo eine amtliche Liste verbindliche Werke nennt (Literaturlisten der Reglemente)
ISBN_OK = re.compile(r'(?i)(verbindlich vorgegebene werke|literatur für die (winter|sommer)session|literaturliste)')
funde = []
for d, _, fs in os.walk(R):
    if '/.git' in d or d.endswith('.git'): continue
    for f in fs:
        if not re.search(r'\.(js|html|json|txt|xml)$', f) or f == 'rechtsscan.py': continue
        p = os.path.join(d, f); s = open(p, encoding='utf-8', errors='ignore').read()
        for rx, was in VERBOTEN:
            for m in re.finditer(rx, s):
                funde.append((os.path.relpath(p, R), was, s[max(0, m.start() - 60):m.end() + 40].replace('\n', ' ')))
        for m in re.finditer(r'ISBN[\s:-]*[0-9X-]{10,}', s):
            if not ISBN_OK.search(s[max(0, m.start() - 300):m.end() + 300]):
                funde.append((os.path.relpath(p, R), 'ISBN ausserhalb einer amtlichen Werkliste', s[max(0, m.start() - 60):m.end() + 40]))
if funde:
    print('RECHTS-SCAN: %d Fund(e). Veröffentlichung gestoppt.' % len(funde))
    for x in funde[:30]: print(' -', x[0], '|', x[1], '|', x[2][:160])
    sys.exit(1)
print('RECHTS-SCAN: sauber (keine Lehrbuch- oder Altprüfungsquellen gefunden).')
