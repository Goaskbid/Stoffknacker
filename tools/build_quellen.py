#!/usr/bin/env python3
"""Adds «Quellen und Prüfung» to every chapter reading page:
1) the sources the KI-Prüfung relied on for corrections and teaching cases (tools/source/quellen.json), and
2) the official curriculum or exam guideline the chapter is aligned with (chapter sourceRefs/pageRefs from the
   content packs, resolved in tools/source/lehrplan-quellen.json; chapters of the original Passerelle set
   without refs use the Passerelle guidelines). Usage: build_quellen.py SITE"""
import html, json, re, sys
from pathlib import Path
R = Path(sys.argv[1]).resolve()
Q = json.loads((R / 'tools/source/quellen.json').read_text(encoding='utf-8'))
L = json.loads((R / 'tools/source/lehrplan-quellen.json').read_text(encoding='utf-8'))
E = lambda s: html.escape(s or '', quote=True)
def datum(d): return '%s.%s.%s' % (d[8:10], d[5:7], d[:4]) if re.match(r'\d{4}-\d\d-\d\d', d or '') else ''
man = json.loads((R / 'assets/content/manifest.json').read_text(encoding='utf-8'))
REFS = {}
for k, v in man['subjects'].items():
    d = json.loads((R / v['file']).read_text(encoding='utf-8'))
    for c in (d.get('chapters') or []) if isinstance(d, dict) else []:
        if isinstance(c, dict) and c.get('id'):
            refs = [x for x in (c.get('sourceRefs') or []) if x in L]
            REFS[c['id']] = [(x, (c.get('pageRefs') or {}).get(x) or []) for x in refs]
DEFAULT = 'sbfi-passerelle-guidelines-2023'
def li(x, extra=''):
    meta = ', '.join(y for y in (x.get('herausgeber'), x.get('fundstelle') or extra) if y)
    d = datum(x.get('geprueft'))
    return '<li><a href="%s" rel="noopener">%s</a>%s%s</li>' % (E(x['url']), E(x['titel'] or x['url']), (' – ' + E(meta)) if meta else '', (' (geprüft am %s)' % d) if d else '')
n = m = k = 0
for f in sorted(R.glob('lernen/*/*/index.html')):
    s = orig = f.read_text(encoding='utf-8')
    s = re.sub(r'<section class="sk-quellen">.*?</section>', '', s, count=1, flags=re.S)
    cid = f.parent.name; q = Q.get(cid) or []
    refs = REFS.get(cid)
    if refs is None: continue
    if not refs: refs = [(DEFAULT, [])]
    parts = ['<section class="sk-quellen"><h2>Quellen und Prüfung</h2>']
    if q:
        parts.append('<p>Die fachlichen Korrekturen und Fallbeispiele dieses Kapitels stützen sich auf die folgenden Quellen. Fallbeispiele mit Zahlen sind eigene, fiktive Lehrfälle.</p><ul>%s</ul>' % ''.join(li(x) for x in q))
    parts.append('<h3>Lehrplangrundlage</h3><p>Das Kapitel ist an diesen amtlichen Lehrplänen und Richtlinien ausgerichtet. Die Erklärungen sind eigene Texte von Stoffknacker; aus den Dokumenten werden keine Texte oder Aufgaben übernommen.</p><ul>%s</ul>'
                 % ''.join(li(L[r], '; '.join(p[:3]) if isinstance(p, list) else str(p)) for r, p in refs))
    parts.append('<p>Der Text wurde in einer KI-Prüfung abgeglichen; das ist keine Freigabe durch Lehrpersonen oder Fachleute. Massgebend sind die verlinkten Originale.</p></section>')
    block = ''.join(parts)
    main_end = s.index('</main>') if '</main>' in s else len(s)
    pos = s.rfind('<footer', 0, main_end)
    pos = pos if pos > 0 else main_end
    s = s[:pos] + block + s[pos:]; n += 1; m += len(q); k += len(refs)
    if s != orig: f.write_text(s, encoding='utf-8')
print('build_quellen: %d chapters, %d content sources, %d curriculum references' % (n, m, k))
