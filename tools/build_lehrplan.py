#!/usr/bin/env python3
"""Public curriculum page /passerelle/lehrplan/: official Passerelle requirements (own paraphrase, with source and
locator) next to the chapter passage that teaches them. Only rows whose evidence sentence is still found verbatim
in the current chapter are published; anything else is left out, never shown as covered.
Usage: build_lehrplan.py SITE"""
import html, json, re, sys
from pathlib import Path
R = Path(sys.argv[1]).resolve()
D = json.loads((R / 'tools/source/curriculum/evidence-passerelle.json').read_text(encoding='utf-8'))
E = lambda s: html.escape(s, quote=True)
T = lambda s: re.sub(r'\s+', ' ', html.unescape(re.sub(r'<[^>]+>', ' ', s))).strip()
pages = {f.parent.name: f for f in R.glob('lernen/*/*/index.html')}
keep, drop = [], []
for r in D['rows']:
    f = pages.get(r['chapter'])
    s = f.read_text(encoding='utf-8') if f else ''
    title = T((re.search(r'<h1>(.*?)</h1>', s, re.S) or [None, ''])[1])
    if f and r['evidence'] in T(s): keep.append(dict(r, title=title, href='../../' + str(f.parent.relative_to(R)) + '/'))
    else: drop.append(r['id'])
tpl = (R / 'passerelle/index.html').read_text(encoding='utf-8')
tpl = re.sub(r'<section class="skf[^"]*".*?</section>', '', tpl, flags=re.S)
head = tpl[:tpl.index('<main')]
head = re.sub(r'<link rel="stylesheet" href="[./]*assets/film/[^>]*><script defer src="[./]*assets/film/[^>]*></script>', '', head)
head = re.sub(r'<script type="application/ld\+json">.*?</script>', '', head, flags=re.S)
url = 'https://stoffknacker.com/passerelle/lehrplan/'
ttl = 'Passerelle-Richtlinien: wo du was lernst'
desc = 'Anforderungen der Passerelle-Richtlinien 2023 neben der Kapitelstelle, die sie erklärt. Nur geprüfte Zuordnungen, mit Quelle und Fundstelle.'
head = re.sub(r'<title>.*?</title>', '<title>%s | Stoffknacker</title>' % E(ttl), head)
for a, b in (('name="description"', desc), ('property="og:title"', ttl), ('property="og:description"', desc)):
    head = re.sub(r'<meta content="[^"]*" %s/>' % re.escape(a), '<meta content="%s" %s/>' % (E(b), a), head)
head = head.replace('https://stoffknacker.com/passerelle/"', url + '"').replace('href="../', 'href="../../').replace('src="../', 'src="../../')
head = head.replace('</style>', 'table{border-collapse:collapse;width:100%;margin:8px 0 18px;font-size:15px}th,td{border-bottom:1px solid #e2e8f0;padding:8px 6px;vertical-align:top;text-align:left}th{font-size:13px;color:#475569}blockquote{margin:4px 0 0;padding:0 0 0 10px;border-left:3px solid #94a3b8;color:#334155}.hinweis{font-size:14px;color:#475569;background:#f1f5f9;border-radius:10px;padding:10px 12px}@media(max-width:600px){table,thead,tbody,tr,th,td{display:block}thead{display:none}td{border:0;padding:4px 0}tr{border-bottom:1px solid #e2e8f0;padding:8px 0}}</style>')
fach = {}
for r in keep: fach.setdefault(r['subject'], []).append(r)
body = ['<main><p class="eyebrow">Passerelle (Ergänzungsprüfung)</p><h1>%s</h1>' % E(ttl),
        '<p class="lead">Hier stehen Anforderungen aus den Passerelle-Richtlinien neben dem Kapitel, das sie erklärt, jeweils mit der Textstelle als Beleg. So siehst du selbst, wo du was lernst.</p>',
        '<p class="hinweis">Die Anforderungen sind eigene, kurze Umschreibungen der <a href="%s" rel="noopener">Richtlinien 2023 von SBFI und SMK</a>; massgebend ist allein das Original. Aufgeführt sind nur Zuordnungen, deren Textstelle im aktuellen Kapitel geprüft wurde (KI-Prüfung, %s). Weitere Anforderungen kommen dazu, sobald ihr Beleg geprüft ist. Diese Seite ist keine amtliche Bestätigung und keine Garantie für das Bestehen.</p>' % (E(D['rows'][0]['source_url']), E(D['rows'][0]['review_date'][8:10] + '.' + D['rows'][0]['review_date'][5:7] + '.' + D['rows'][0]['review_date'][:4]))]
for sub in sorted(fach):
    body.append('<h2>%s</h2><table><thead><tr><th>Anforderung</th><th>Hier lernst du es</th></tr></thead><tbody>' % E(sub.replace('Geographie', 'Geografie')))
    for r in fach[sub]:
        body.append('<tr><td>%s<br><small>Richtlinien 2023, %s</small></td><td><a href="%s">%s</a>, Abschnitt «%s»<blockquote>%s</blockquote></td></tr>' % (E(r['requirement']), E(r['locator']), E(r['href']), E(r['title']), E(r['section']), E(r['evidence'])))
    body.append('</tbody></table>')
body.append('<p><a class="cta" href="../">Zur Passerelle-Übersicht</a></p>')
foot = tpl[tpl.index('</main>') + 7:] if '<footer' not in tpl else tpl[tpl.index('<footer'):]
foot = foot.replace('href="../', 'href="../../')
out = R / 'passerelle/lehrplan/index.html'; out.parent.mkdir(exist_ok=True)
out.write_text(head + ''.join(body) + '</main>' + foot, encoding='utf-8')
# link from the Passerelle page
p = R / 'passerelle/index.html'; t = p.read_text(encoding='utf-8')
if 'href="lehrplan/"' not in t:
    m = re.search(r'<section class="skf".*?</section>', t, re.S) or re.search(r'<p class="lead">.*?</p>', t, re.S)
    t = t[:m.end()] + '<p><a href="lehrplan/">Passerelle-Richtlinien: wo du was lernst</a></p>' + t[m.end():]
    p.write_text(t, encoding='utf-8')
print('build_lehrplan: %d requirements published with verified passage%s' % (len(keep), (', left out (passage changed): ' + ', '.join(drop)) if drop else ''))
