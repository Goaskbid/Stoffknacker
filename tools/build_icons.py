#!/usr/bin/env python3
"""Puts Stoffknacker's own subject icons and flags on reading pages (subject list, subject and chapter headings,
language pages, Schule fürs Leben). Decorative only (aria-hidden), text unchanged. Usage: build_icons.py SITE"""
import re, sys
from pathlib import Path
R = Path(sys.argv[1]).resolve(); sys.path.insert(0, str(R / 'tools'))
from icons import ICONS
DIR = {'mathematik':'math','biologie':'biology','chemie':'chemistry','physik':'physics','geschichte':'history','geografie':'geography','deutsch':'german','englisch':'english','franzoesisch':'french','italienisch':'italian','spanisch':'spanish','raetoromanisch':'romansh','latein':'latin','russisch':'russian','griechisch':'greek','informatik':'informatics','wirtschaft-und-recht':'economics','rechnungswesen':'accounting','sozialwissenschaften':'social','kunst-und-musik':'arts','information-und-kommunikation':'communication','technik-und-umwelt':'technology','projektarbeiten':'projects','orientierung':'orientation','sport':'sport'}
COL = {'math':'#2563eb','biology':'#059669','chemistry':'#7c3aed','physics':'#0891b2','history':'#b45309','geography':'#0d9488','german':'#dc2626','informatics':'#0284c7','economics':'#4f46e5','accounting':'#4338ca','social':'#c026d3','arts':'#c026d3','communication':'#0891b2','technology':'#475569','projects':'#7c3aed','orientation':'#64748b','sport':'#16a34a','romansh':'#7c3aed','latin':'#9f1239','field':'#ea580c','leben':'#ea580c','default':'#4f46e5'}
SPR = {'en':'english','fr':'french','it':'italian','es':'spanish'}
def key(d): return DIR.get(d) or ('field' if d.startswith('fms-') else 'default')
def tile(k, size='1.6em'):
    if 'skflag' in ICONS[k]:
        return '<span class="skic" aria-hidden="true" style="display:inline-flex;vertical-align:-.12em;margin-right:.4em;font-size:%s">%s</span>' % ('.8em', ICONS[k])
    c = COL.get(k, '#4f46e5')
    return ('<span class="skic" aria-hidden="true" style="display:inline-flex;align-items:center;justify-content:center;width:%s;height:%s;margin-right:.4em;vertical-align:-.32em;'
            'border-radius:.45em;background:color-mix(in srgb,%s 14%%,#fff);color:%s;font-size:1em">%s</span>') % (size, size, c, c, ICONS[k].replace('width="1em" height="1em"', 'width="62%" height="62%"'))
def strip(s): return re.sub(r'<span class="skic" aria-hidden="true"[^>]*><svg class="ski.*?</svg></span>', '', s, flags=re.S)
def h1(s, k):
    return re.sub(r'<h1([^>]*)>', lambda m: '<h1%s>%s' % (m.group(1), tile(k)), s, count=1)
n = 0
def write(f, s, orig):
    global n
    if s != orig: f.write_text(s, encoding='utf-8'); n += 1
for f in R.glob('lernen/*/index.html'):
    s = orig = f.read_text(encoding='utf-8'); s = h1(strip(s), key(f.parent.name)); write(f, s, orig)
for f in R.glob('lernen/*/*/index.html'):
    s = orig = f.read_text(encoding='utf-8')
    if 'noindex' in s[:3000]: continue
    s = h1(strip(s), key(f.parent.parent.name)); write(f, s, orig)
f = R / 'lernen/index.html'; s = orig = strip(f.read_text(encoding='utf-8'))
s = re.sub(r'<li><a href="([a-z-]+)/">', lambda m: '<li>%s<a href="%s/">' % (tile(key(m.group(1)), '1.5em'), m.group(1)), s); write(f, s, orig)
for code, k in SPR.items():
    for f in [R / 'sprachen' / code / 'index.html'] + sorted((R / 'sprachen' / code).glob('*/index.html')):
        if not f.exists(): continue
        s = orig = f.read_text(encoding='utf-8')
        if 'noindex' in s[:3000]: continue
        s = h1(strip(s), k); write(f, s, orig)
f = R / 'sprachen/index.html'
if f.exists():
    s = orig = strip(f.read_text(encoding='utf-8'))
    s = re.sub(r'<span class="code">([A-Z]{2})</span>', lambda m: '<span class="code">%s%s</span>' % (tile(SPR.get(m.group(1).lower(), 'languages')) if m.group(1).lower() in SPR else '', m.group(1)), s); write(f, s, orig)
for f in list(R.glob('schule-fuers-leben/*/*/index.html')) + [R / 'schule-fuers-leben/index.html']:
    if not f.exists(): continue
    s = orig = f.read_text(encoding='utf-8')
    if 'noindex' in s[:3000]: continue
    s = h1(strip(s), 'leben'); write(f, s, orig)
print('build_icons: %d pages' % n)
