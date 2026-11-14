#!/usr/bin/env python3
"""Generates sitemap.xml (index) and its four child sitemaps from the actual HTML files on every build.
Included: every .html page whose canonical points to itself and that is not noindex and not a redirect.
lastmod changes only when the page's visible main content (title, description, headings, text) changes;
state lives in tools/source/sitemap-state.json. Usage: build_sitemap.py SITE --date YYYY-MM-DD"""
import hashlib, html, json, re, sys
from pathlib import Path
B = 'https://stoffknacker.com/'
GROUPS = [('sitemap-academic.xml', 'lernen/'), ('sitemap-life.xml', 'schule-fuers-leben/'), ('sitemap-languages.xml', 'sprachen/'), ('sitemap-core.xml', '')]
SKIP_DIRS = ('tools/', '.git/', '.github/', 'assets/')
def attrs(s): return [dict(re.findall(r'([\w:-]+)="([^"]*)"', m)) for m in re.findall(r'<(?:meta|link)\b([^>]*)>', s)]
def page_url(rel): return B + (rel[:-len('index.html')] if rel.endswith('index.html') else rel)
def indexable(rel, s):
    A = attrs(s)
    if any(a.get('name') == 'robots' and 'noindex' in a.get('content', '').lower() for a in A): return False
    if any(a.get('http-equiv', '').lower() == 'refresh' for a in A): return False
    can = next((a.get('href') for a in A if a.get('rel') == 'canonical'), None)
    return can == page_url(rel)
def fingerprint(s):
    t = re.search(r'<title>(.*?)</title>', s, re.S); d = next((a.get('content') for a in attrs(s) if a.get('name') == 'description'), '')
    m = re.search(r'<main\b.*?</main>', s, re.S) or re.search(r'<body\b.*?</body>', s, re.S)
    body = re.sub(r'<(script|style|noscript)\b.*?</\1>', ' ', m.group(0) if m else s, flags=re.S)
    heads = ' '.join(re.findall(r'<h[1-3]\b[^>]*>(.*?)</h[1-3]>', body, re.S))
    text = html.unescape(re.sub(r'<[^>]+>', ' ', body))
    norm = lambda x: re.sub(r'\s+', ' ', html.unescape(re.sub(r'<[^>]+>', ' ', x or ''))).strip()
    return hashlib.sha256('\n'.join([norm(t.group(1) if t else ''), norm(d), norm(heads), norm(text)]).encode()).hexdigest()
def main():
    global R, DATE, STATE
    R = Path(sys.argv[1]).resolve(); DATE = sys.argv[sys.argv.index('--date') + 1]; STATE = R / 'tools/source/sitemap-state.json'
    state = json.loads(STATE.read_text()) if STATE.exists() else {}
    urls = {}
    for f in sorted(R.rglob('*.html')):
        rel = f.relative_to(R).as_posix()
        if rel.startswith(SKIP_DIRS) or rel == '404.html': continue
        s = f.read_text(encoding='utf-8', errors='replace')
        if not indexable(rel, s): continue
        u = page_url(rel); h = fingerprint(s); old = state.get(u)
        lm = old['lastmod'] if old and old['h'] == h else DATE
        urls[u] = {'h': h, 'lastmod': lm}
    new_state = dict(sorted(urls.items()))
    STATE.write_text(json.dumps(new_state, ensure_ascii=False, indent=0, sort_keys=True) + '\n')
    files = {}
    for u in new_state:
        path = u[len(B):]
        name = next(n for n, p in GROUPS if path.startswith(p))
        files.setdefault(name, []).append(u)
    head = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    for name, _ in GROUPS:
        body = ''.join('<url><loc>%s</loc><lastmod>%s</lastmod></url>\n' % (html.escape(u), new_state[u]['lastmod']) for u in files.get(name, []))
        (R / name).write_text(head + body + '</urlset>\n', encoding='utf-8')
    idx = '<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    for name, _ in GROUPS:
        lm = max((new_state[u]['lastmod'] for u in files.get(name, [])), default=DATE)
        idx += '<sitemap><loc>%s%s</loc><lastmod>%s</lastmod></sitemap>\n' % (B, name, lm)
    (R / 'sitemap.xml').write_text(idx + '</sitemapindex>\n', encoding='utf-8')
    changed = sum(1 for u in new_state if new_state[u]['lastmod'] == DATE and (u not in state or state[u]['h'] != new_state[u]['h']))
    removed = len(set(state) - set(new_state))
    print('sitemap: %d URLs, %d new/changed (lastmod %s), %d removed' % (len(new_state), changed, DATE, removed))
if __name__ == '__main__':
    main()
