#!/usr/bin/env python3
"""Adds «Quellen und Prüfung» to chapter reading pages: the sources the KI-Prüfung relied on for the chapter's
corrections and teaching cases (title, publisher, locator, date checked), plus an honest review note.
Usage: build_quellen.py SITE"""
import html, json, re, sys
from pathlib import Path
R = Path(sys.argv[1]).resolve()
Q = json.loads((R / 'tools/source/quellen.json').read_text(encoding='utf-8'))
E = lambda s: html.escape(s or '', quote=True)
def datum(d): return '%s.%s.%s' % (d[8:10], d[5:7], d[:4]) if re.match(r'\d{4}-\d\d-\d\d', d or '') else ''
n = m = 0
for f in sorted(R.glob('lernen/*/*/index.html')):
    s = orig = f.read_text(encoding='utf-8')
    s = re.sub(r'<section class="sk-quellen">.*?</section>', '', s, count=1, flags=re.S)
    q = Q.get(f.parent.name)
    if q:
        li = []
        for x in q:
            meta = ', '.join(y for y in (x.get('herausgeber'), x.get('fundstelle')) if y)
            d = datum(x.get('geprueft'))
            li.append('<li><a href="%s" rel="noopener">%s</a>%s%s</li>' % (E(x['url']), E(x['titel'] or x['url']), (' – ' + E(meta)) if meta else '', (' (geprüft am %s)' % d) if d else ''))
        block = ('<section class="sk-quellen"><h2>Quellen und Prüfung</h2><p>Die fachlichen Korrekturen und Fallbeispiele dieses Kapitels stützen sich auf die folgenden Quellen. '
                 'Fallbeispiele mit Zahlen sind eigene, fiktive Lehrfälle. Der Text wurde in einer KI-Prüfung abgeglichen; das ist keine Freigabe durch Lehrpersonen oder Fachleute. '
                 'Massgebend sind die verlinkten Originale.</p><ul>%s</ul></section>' % ''.join(li))
        main_end = s.index('</main>') if '</main>' in s else len(s)
        pos = s.rfind('<footer', 0, main_end)
        pos = pos if pos > 0 else main_end
        s = s[:pos] + block + s[pos:]; n += 1; m += len(q)
    if s != orig: f.write_text(s, encoding='utf-8')
print('build_quellen: %d chapters with %d sources' % (n, m))
