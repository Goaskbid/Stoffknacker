#!/usr/bin/env python3
"""Fails (exit 1) unless the sitemaps are valid and match the site exactly. Usage: validate_sitemap.py SITE"""
import datetime, re, sys, xml.etree.ElementTree as ET
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent))
R = Path(sys.argv[1]).resolve(); B = 'https://stoffknacker.com/'; NS = '{http://www.sitemaps.org/schemas/sitemap/0.9}'
err = []
def e(m): err.append(m)
robots = (R / 'robots.txt').read_text() if (R / 'robots.txt').exists() else ''
if 'Sitemap: ' + B + 'sitemap.xml' not in robots: e('robots.txt does not reference ' + B + 'sitemap.xml')
if re.search(r'^\s*Disallow:\s*/\s*$', robots, re.M): e('robots.txt blocks the whole site')
try: idx = ET.parse(R / 'sitemap.xml').getroot()
except Exception as x: print('FAIL sitemap.xml:', x); sys.exit(1)
if idx.tag != NS + 'sitemapindex': e('sitemap.xml is not a sitemap index')
today = datetime.date.today().isoformat(); seen = set(); listed = set()
for sm in idx.findall(NS + 'sitemap'):
    loc = sm.findtext(NS + 'loc'); name = loc[len(B):] if loc and loc.startswith(B) else None
    if not name or '/' in name or not (R / name).exists(): e('index points to missing child ' + str(loc)); continue
    if (R / name).stat().st_size > 50 * 1024 * 1024: e(name + ' over 50 MB')
    try: root = ET.parse(R / name).getroot()
    except Exception as x: e(name + ' not well-formed: %s' % x); continue
    us = root.findall(NS + 'url')
    if len(us) > 50000: e(name + ' over 50,000 URLs')
    for u in us:
        loc = u.findtext(NS + 'loc'); lm = u.findtext(NS + 'lastmod')
        if loc in seen: e('duplicate ' + loc)
        seen.add(loc)
        if not loc.startswith(B): e('foreign URL ' + loc); continue
        if not lm or not re.fullmatch(r'\d{4}-\d{2}-\d{2}', lm) or lm > today: e('bad lastmod %s %s' % (loc, lm))
        p = loc[len(B):]; f = R / (p + 'index.html' if p == '' or p.endswith('/') else p)
        if not f.exists(): e('listed URL has no page ' + loc); continue
        listed.add(loc)
src = (Path(__file__).resolve().parent / 'build_sitemap.py').read_text()
ns = {}; exec(src.split('def main():')[0], ns)  # reuse page rules without running the generator
expected = set()
for f in sorted(R.rglob('*.html')):
    rel = f.relative_to(R).as_posix()
    if rel.startswith(ns['SKIP_DIRS']) or rel == '404.html': continue
    s = f.read_text(encoding='utf-8', errors='replace')
    ok = ns['indexable'](rel, s); u = ns['page_url'](rel)
    if ok: expected.add(u)
    elif u in seen: e('listed but noindex/non-canonical/redirect ' + u)
for u in sorted(expected - seen)[:20]: e('indexable page missing from sitemap ' + u)
if err:
    print('SITEMAP CHECK FAILED (%d):' % len(err)); [print(' -', x) for x in err[:40]]; sys.exit(1)
print('sitemap OK: %d URLs, all indexable pages listed, no noindex/duplicate/non-canonical URLs' % len(seen))
