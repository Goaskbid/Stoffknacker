#!/usr/bin/env python3
"""r211 SEO and visibility pass (brief of 2026-11-17, sections 0 and C). Idempotent, deterministic, HTML only.
Runs after seo_enhance and before build_sitemap. No URL is removed or renamed; no consent, disclaimer or
licence text is touched. Changes:
 C1  chapter links on track pages (#read/<id>) and life links (?life=<id>) point to the real crawlable pages;
     the remaining app buttons keep their hash links and carry data-app="1".
 C2/R1 meta, og and twitter descriptions are complete sentences of 70-155 characters; hub excerpts are whole sentences.
 R2  titles <= 60 characters and unique; og:title follows.
 C3  track pages say when a listed chapter comes from another track; labels start with a capital letter.
 C8  float artefacts in table cells (10+ decimals) are rounded.
 C10 life hubs list each lesson with its summary.
 C11 the unused, empty mnemika-ki-endpoint meta tag is removed (runtime treats a missing tag as "no endpoint").
 C12 footer links to the full content index (/inhalt/) and the press page (/presse/).
 C13 BreadcrumbList on every page that shows a breadcrumb trail.
 0.6 "Weiter lernen" block on chapter, life and language pages (previous, next, related).
 0.7 /presse/ (facts, how to cite, press contact) and /inhalt/ (every page, grouped).
 R7  pages that still have fewer than 150 words get noindex,follow (they leave the sitemap, links stay followable).
"""
import html, json, os, re, sys, urllib.parse as UP, collections
from pathlib import Path
R = Path(sys.argv[1]).resolve(); B = 'https://stoffknacker.com/'
SKIP = ('tools/', 'assets/', '.git', '.github', 'app/')
n = collections.Counter()

def rd(p): return p.read_text(encoding='utf-8')
def attrs(tag): return {k.lower(): html.unescape(v) for k, v in re.findall(r'([\w:-]+)="([^"]*)"', tag)}
def tags(s, name): return [(m.group(0), attrs(m.group(0))) for m in re.finditer(r'<' + name + r'\b[^>]*>', s)]
def esc(t): return html.escape(t, quote=True)
def url_of(rel): return B + (rel[:-len('index.html')] if rel.endswith('index.html') else rel)
def rel_link(src_rel, dst_rel):
    a = os.path.dirname(src_rel) or '.'; b = os.path.dirname(dst_rel)
    r = os.path.relpath(b, a); return ('' if r == '.' else r + '/') if r != '.' else './'
def set_attr_meta(s, key, val, content):
    """Set content of every <meta key="val"> (any attribute order)."""
    def f(m):
        t = m.group(0); a = attrs(t)
        if a.get(key) != val: return t
        return re.sub(r'content="[^"]*"', 'content="%s"' % esc(content), t, count=1)
    return re.sub(r'<meta\b[^>]*>', f, s)
def get_meta(s, key, val):
    for t, a in tags(s, 'meta'):
        if a.get(key) == val: return a.get('content', '')
    return None
def visible_words(s):
    b = re.search(r'<body\b.*</body>', s, re.S); b = b.group(0) if b else s
    b = re.sub(r'<(script|style|svg|noscript)\b.*?</\1>', ' ', b, flags=re.S)
    return re.findall(r'\w+', html.unescape(re.sub(r'<[^>]+>', ' ', b)))
def sentences(t): return [x for x in re.split(r'(?<=[.!?»])\s+(?=[A-ZÄÖÜ0-9«])', t.strip()) if x]
def cap(t): return t[:1].upper() + t[1:] if t and t[0].islower() else t

pages = {}
for f in sorted(R.rglob('*.html')):
    rel = f.relative_to(R).as_posix()
    if rel.startswith(SKIP) or rel == '404.html': continue
    pages[rel] = rd(f)
orig = dict(pages)

# ---------- indexes ----------
chap = {}   # chapter id -> rel
for rel in pages:
    m = re.fullmatch(r'lernen/([^/]+)/([^/]+)/index\.html', rel)
    if m: chap.setdefault(m.group(2), rel)
life = {}
for rel in pages:
    m = re.fullmatch(r'schule-fuers-leben/(?:grundlagen|themen|vertiefung)/([^/]+)/index\.html', rel)
    if m: life[m.group(1)] = rel
def lr_desc(s):
    for m in re.finditer(r'<script type="application/ld\+json"[^>]*>(.*?)</script>', s, re.S):
        try: d = json.loads(m.group(1))
        except Exception: continue
        if isinstance(d, dict) and d.get('@type') == 'LearningResource' and d.get('description'): return d['description']
    return None

# ---------- descriptions (R1/C2) ----------
def fix_desc(d):
    d = re.sub(r'\s+', ' ', (d or '')).strip()
    if len(d) > 155 and d.endswith(' Kostenlos.'): d = d[:-len(' Kostenlos.')]
    if len(d) > 155:
        acc = ''
        for x in sentences(d):
            if len((acc + ' ' + x).strip()) <= 155: acc = (acc + ' ' + x).strip()
            else: break
        if len(acc) >= 70: d = acc
        else:
            first = sentences(d)[0] if sentences(d) else d
            cut = first[:154]; cut = cut[:max(cut.rfind(', '), cut.rfind(' – '), cut.rfind('; '))] if max(cut.rfind(', '), cut.rfind(' – '), cut.rfind('; ')) > 70 else cut.rsplit(' ', 1)[0]
            d = cut.rstrip(',;:– ') + '.'; n['desc_hardcut'] += 1
    if d and not d.endswith(('.', '!', '?')):
        d = d.rstrip(',;:–… ') + '.'
    if len(d) < 70:
        for add in (' Kostenlos lernen bei Stoffknacker, ohne Konto.', ' Kostenlos bei Stoffknacker.'):
            if len(d + add) <= 155: d += add; break
    return d

# ---------- titles (R2) ----------
TITLE_FIX = {
    'berufsmaturitaet/index.html': 'Berufsmaturität (BM) lernen: alle Ausrichtungen',
    'ebmp/index.html': 'EBMP lernen: Berufsmaturitätsprüfung | Stoffknacker',
    'fms/index.html': 'FMS und Fachmaturität lernen | Stoffknacker',
    'gymnasiale-maturitaet/index.html': 'Gymnasiale Maturität lernen: alle Fächer | Stoffknacker',
    'index.html': 'Stoffknacker: Passerelle, Matura, BM und FMS gratis lernen',
    'lehrpersonen/index.html': 'Für Lehrpersonen: Klassenlinks und Ergebnis-Codes',
    'passerelle/index.html': 'Passerelle-Ergänzungsprüfung lernen | Stoffknacker',
    'schule-fuers-leben/index.html': 'Schule fürs Leben: Lohn, Steuern, Miete | Stoffknacker',
    'ueber/index.html': 'Über Stoffknacker: Gespräch mit Torsten Sauter',
    'schule-fuers-leben/vertiefung/ga-02-05/index.html': 'Lohnbeleg und Zahlung passen nicht auf den ersten Blick',
}
def title_cands(t):
    BR = ' | Stoffknacker'; main = t[:-len(BR)] if t.endswith(BR) else t
    parts = main.split(' – '); p0 = cap(parts[0]); rest = ' – '.join(parts[1:])
    p0n = p0.replace(' einfach erklärt', '')
    restn = rest.replace('Grundlagen Schule fürs Leben', 'Schule fürs Leben')
    c = [cap(t)]
    if rest:
        c += [p0n + ' – ' + restn + BR, p0 + BR, p0n + BR, p0n + ' – ' + restn, p0n]
    else:
        c += [main, p0n]
    short = re.split(r' \(|: |, ', p0n)[0]
    c += [short + ' – ' + restn + BR if rest else short + BR, short + BR, short + (' – ' + restn if rest else ''), short]
    return c

def get_title(s):
    m = re.search(r'<title>(.*?)</title>', s, re.S); return html.unescape(m.group(1).strip()) if m else None
def set_title(s, t):
    s = re.sub(r'<title>.*?</title>', '<title>%s</title>' % esc(t), s, count=1, flags=re.S)
    og = t[:-len(' | Stoffknacker')] if t.endswith(' | Stoffknacker') else t
    return set_attr_meta(s, 'property', 'og:title', og)

def noindexed(s):
    v = get_meta(s, 'name', 'robots'); return bool(v and 'noindex' in v)

used = collections.Counter(get_title(s) for s in pages.values() if get_title(s))
for rel in sorted(pages):
    s = pages[rel]; t = get_title(s)
    if not t: continue
    want = TITLE_FIX.get(rel)
    if want:
        assert len(want) <= 60, want
        if t != want: used[t] -= 1; used[want] += 1; s = set_title(s, want); n['title'] += 1
    elif len(t) > 60 or (t[:1].islower()):
        for c in title_cands(t):
            if len(c) <= 60 and (c == t or used[c] == 0):
                if c != t: used[t] -= 1; used[c] += 1; s = set_title(s, c); n['title'] += 1
                break
    pages[rel] = s

# ---------- per page link / meta work ----------
TRACK = {'passerelle': 'pass', 'smp': 'smp', 'berufsmaturitaet': 'bm', 'fms': 'fms', 'gymnasiale-maturitaet': 'gym', 'ebmp': 'ebmp'}
TRACKNAME = {'pass': 'Passerelle', 'smp': 'SMP', 'bm': 'Berufsmaturität', 'fms': 'FMS', 'gym': 'Gymnasiale Maturität', 'ebmp': 'EBMP'}
def track_of(cid):
    m = re.match(r'v76-(pass|smp|bm|fms|gym|ebmp)-', cid); return m.group(1) if m else None

APP = re.compile(r'#/|#read/|#lesson|\?life=|#uebung|#pruefung|#home')
for rel in sorted(pages):
    s = pages[rel]; tr = TRACK.get(rel.split('/')[0]) if rel.count('/') == 1 else None
    def fix_a(m):
        tag, label = m.group(1), m.group(2)
        a = attrs(tag); href = a.get('href', '')
        mm = re.search(r'#read/([^"/?#]+)$', href) or re.search(r'\?life=([\w-]+)$', href)
        tgt = None
        if mm:
            tgt = chap.get(mm.group(1)) if '#read/' in href else life.get(mm.group(1))
            if tgt == rel: tgt = None  # a page's own "open in the app" button
        if tgt:
            tag = tag.replace('href="%s"' % href, 'href="%s"' % rel_link(rel, tgt)); n['hash_to_page'] += 1
            if tr and '#read/' in href:
                ct = track_of(mm.group(1)); label2 = cap(label)
                if label2 != label: n['label_cap'] += 1
                if ct and ct != tr and 'sk-x' not in label:
                    return tag + label2 + '</a><span class="sk-x" style="color:#475569;font-size:.9em"> · aus %s</span>' % TRACKNAME[ct]
                return tag + label2 + '</a>'
            return tag + label + '</a>'
        if APP.search(href) and 'data-app=' not in tag:
            tag = tag[:-1] + ' data-app="1">'; n['app_marked'] += 1
        return tag + label + '</a>'
    s = re.sub(r'(<a\b[^>]*>)(.*?)</a>', fix_a, s, flags=re.S)
    # C11
    s2 = re.sub(r'<meta\b[^>]*name="mnemika-ki-endpoint"[^>]*>', '', s)
    if s2 != s: n['ki_meta_removed'] += 1; s = s2
    # descriptions
    d = get_meta(s, 'name', 'description')
    if d is not None:
        nd = fix_desc(d)
        if nd != d: s = set_attr_meta(s, 'name', 'description', nd); n['desc'] += 1
        for k, v in (('property', 'og:description'), ('name', 'twitter:description')):
            if get_meta(s, k, v) is not None and get_meta(s, k, v) != nd: s = set_attr_meta(s, k, v, nd); n['og_desc'] += 1
    # C8 float artefacts in table cells
    def rnd(m):
        x = float(m.group(1)); y = ('%.2f' % x if abs(x) >= 1 else '%.4f' % x).rstrip('0').rstrip('.'); n['float_round'] += 1
        return m.group(0).replace(m.group(1), y)
    s = re.sub(r'<td>(-?\d+\.\d{10,})</td>', rnd, s)
    pages[rel] = s

# ---------- hub excerpts (C2, C10) ----------
def excerpt(dst_rel):
    s = orig.get(dst_rel) or ''
    t = lr_desc(s) or get_meta(pages.get(dst_rel, ''), 'name', 'description') or ''
    t = re.sub(r'\s+', ' ', t).strip(); acc = ''
    for x in sentences(t):
        if not acc or len(acc + ' ' + x) <= 240: acc = (acc + ' ' + x).strip()
        else: break
        if len(acc) >= 150: break
    if acc and not acc.endswith(('.', '!', '?', '»', '“')): acc = ''
    if acc and len(acc) < 120:
        m = re.search(r'<h2[^>]*>(?:Erklärung|Worum es geht)</h2>\s*(?:<[^p][^>]*>\s*)*<p[^>]*>(.*?)</p>', s, re.S)
        if m:
            first = sentences(html.unescape(re.sub(r'<[^>]+>', '', m.group(1))).strip())
            if first and first[0].endswith(('.', '!', '?')) and len(first[0]) <= 220 and first[0] not in acc: acc += ' ' + first[0]
    return acc
KD = '<span class="sk-kd" style="display:block;font-size:.92em;color:#475569;margin:.15em 0 .5em">%s</span>'
for rel in sorted(pages):
    s = pages[rel]
    hub = re.fullmatch(r'lernen/[^/]+/index\.html|schule-fuers-leben/(?:themen/[^/]+/|grundlagen/|themen/)?index\.html', rel)
    if not hub: continue
    def kd(m):
        href, label, rest = m.group(1), m.group(2), m.group(3) or ''
        dst = os.path.normpath(os.path.join(os.path.dirname(rel), href.split('#')[0], 'index.html'))
        if dst not in pages: return m.group(0)
        e = excerpt(dst)
        if not e: return m.group(0) if not rest else '<li><a href="%s">%s</a></li>' % (href, label)
        new = '<li><a href="%s">%s</a>%s</li>' % (href, label, KD % esc(e))
        if new != m.group(0): n['hub_excerpt'] += 1
        return new
    s = re.sub(r'<li><a href="([^"#?:]+/)">([^<]+)</a>(<span class="sk-kd"[^>]*>[^<]*</span>)?</li>', kd, s)
    pages[rel] = s

# ---------- language landing pages: real samples instead of a repeated line ----------
def film_terms(s):
    m = re.search(r'"type":"terms"[^\]]*?"items":(\[\[.*?\]\])', s)
    try: return json.loads(m.group(1)) if m else []
    except Exception: return []
for lang in ('en', 'fr', 'it', 'es'):
    rel = 'sprachen/%s/index.html' % lang
    if rel not in pages: continue
    s = pages[rel]
    def sample(m):
        href = m.group(1); dst = href.strip('/') + '/index.html'
        items = film_terms(pages.get(dst, ''))[:3]
        if not items: return m.group(0)
        n['lang_sample'] += 1
        return m.group(0).replace('<p>Acht Wörter, vier Modellsätze, eine Grammatikfrage und ein Gespräch.</p>',
            '<p>Acht Wörter, vier Modellsätze, eine Grammatikfrage und ein Gespräch, zum Beispiel <span lang="%s">%s</span>.</p>' % (lang, esc(', '.join('%s (%s)' % (a, b) for a, b in items))))
    s = re.sub(r'<a class="card" href="(/sprachen/%s/[a-z]+/)">.*?</a>' % lang, sample, s, flags=re.S)
    pages[rel] = s

# ---------- "Weiter lernen" blocks (0.6 internal linking) ----------
def label_of(dst):
    t = get_title(pages[dst]) or dst
    t = t[:-len(' | Stoffknacker')] if t.endswith(' | Stoffknacker') else t
    return re.split(r' – ', t)[0].replace(' einfach erklärt', '')
def block(rel, heading, items):
    items = [d for d in dict.fromkeys(items) if d and d != rel and d in pages]
    if not items: return None
    lis = ''.join('<li><a href="%s">%s</a></li>' % (rel_link(rel, d), esc(label_of(d))) for d in items)
    return '<nav class="sk-rel" aria-label="Weiter lernen" style="margin:2em 0 1em"><h2>%s</h2><ul>%s</ul></nav>' % (esc(heading), lis)
subj_order = {}
for rel in sorted(pages):
    m = re.fullmatch(r'lernen/([^/]+)/index\.html', rel)
    if not m: continue
    seq = []
    for href in re.findall(r'<li><a href="([^"/][^"]*/)">', pages[rel]):
        d = os.path.normpath(os.path.join('lernen', m.group(1), href, 'index.html'))
        if d in pages and d not in seq: seq.append(d)
    subj_order[m.group(1)] = seq
for subj, seq in subj_order.items():
    hubname = (get_title(pages['lernen/%s/index.html' % subj]) or subj).split(' lernen')[0].split(':')[0]
    for i, rel in enumerate(seq):
        cid = rel.split('/')[2]; pre = re.match(r'(v76-[a-z]+-[a-z]+)', cid); pre = pre.group(1) if pre else cid.split('-')[0]
        same = [d for d in seq if d != rel and d.split('/')[2].startswith(pre)]
        k = same.index(seq[i + 1]) if i + 1 < len(seq) and seq[i + 1] in same else 0
        rel_items = [seq[i - 1] if i else None, seq[i + 1] if i + 1 < len(seq) else None] + (same[k:] + same[:k])[:3]
        b = block(rel, 'Weiter lernen in ' + hubname, rel_items)
        if b and 'class="sk-rel"' not in pages[rel] and '</main>' in pages[rel]:
            pages[rel] = pages[rel].replace('</main>', b + '</main>', 1); n['rel_chapter'] += 1
# life
gl = sorted(r for r in pages if re.fullmatch(r'schule-fuers-leben/grundlagen/[^/]+/index\.html', r))
th = sorted(r for r in pages if re.fullmatch(r'schule-fuers-leben/themen/[^/]+/index\.html', r))
vt = sorted(r for r in pages if re.fullmatch(r'schule-fuers-leben/vertiefung/[^/]+/index\.html', r))
def add_rel(rel, heading, items, key):
    b = block(rel, heading, items)
    if b and 'class="sk-rel"' not in pages[rel] and '</main>' in pages[rel]:
        pages[rel] = pages[rel].replace('</main>', b + '</main>', 1); n[key] += 1
for i, rel in enumerate(gl):
    add_rel(rel, 'Weiter mit den Grundlagen', [gl[i - 1] if i else None, gl[i + 1] if i + 1 < len(gl) else None, 'schule-fuers-leben/grundlagen/index.html'], 'rel_life')
for rel in vt:
    tid = rel.split('/')[2].rsplit('-', 1)[0]; sib = [v for v in vt if v.split('/')[2].rsplit('-', 1)[0] == tid]; j = sib.index(rel)
    hub = 'schule-fuers-leben/themen/%s/index.html' % tid
    nxt_theme = [t for t in th if t > hub][:1]
    add_rel(rel, 'Weiter in diesem Thema', [sib[j - 1] if j else None, sib[j + 1] if j + 1 < len(sib) else None, hub] + nxt_theme, 'rel_life')
for i, rel in enumerate(th):
    add_rel(rel, 'Weitere Themen', [th[i - 1] if i else None, th[i + 1] if i + 1 < len(th) else None, 'schule-fuers-leben/themen/index.html', 'schule-fuers-leben/grundlagen/index.html'], 'rel_life')
for lang in ('en', 'fr', 'it', 'es'):
    rel = 'sprachen/%s/index.html' % lang
    if rel in pages: add_rel(rel, 'Weitere Sprachen', ['sprachen/%s/index.html' % l for l in ('en', 'fr', 'it', 'es') if l != lang] + ['sprachen/index.html'], 'rel_lang')
# languages: same situation in the other languages, and the next situation
for rel in sorted(pages):
    m = re.fullmatch(r'sprachen/(en|fr|it|es)/([a-z]+)/index\.html', rel)
    if not m: continue
    lang, topic = m.groups()
    seq = sorted(r for r in pages if re.fullmatch(r'sprachen/%s/[a-z]+/index\.html' % lang, r)); i = seq.index(rel)
    others = ['sprachen/%s/%s/index.html' % (l, topic) for l in ('en', 'fr', 'it', 'es') if l != lang]
    add_rel(rel, 'Weiter üben', [seq[i - 1] if i else None, seq[i + 1] if i + 1 < len(seq) else None] + others, 'rel_lang')

# ---------- BreadcrumbList where a visible trail exists (C13) ----------
for rel in sorted(pages):
    s = pages[rel]
    if 'BreadcrumbList' in s: continue
    m = re.search(r'<nav\b[^>]*aria-label="Pfad"[^>]*>(.*?)</nav>', s, re.S)
    if not m: continue
    items = [(UP.urljoin(url_of(rel), h), html.unescape(re.sub(r'<[^>]+>', '', l)).strip()) for h, l in re.findall(r'<a href="([^"]+)"[^>]*>(.*?)</a>', m.group(1))]
    tail = html.unescape(re.sub(r'<[^>]+>', '', re.split(r'</a>', m.group(1))[-1])).strip(' ›/')
    if tail: items.append((url_of(rel), tail))
    elif items and items[-1][0] != url_of(rel): items.append((url_of(rel), label_of(rel)))
    ld = {'@context': 'https://schema.org', '@type': 'BreadcrumbList', 'itemListElement': [{'@type': 'ListItem', 'position': i + 1, 'name': nm, 'item': u} for i, (u, nm) in enumerate(items)]}
    pages[rel] = s.replace('</head>', '<script type="application/ld+json">%s</script></head>' % json.dumps(ld, ensure_ascii=False), 1); n['breadcrumb_ld'] += 1

# ---------- /inhalt/ and /presse/ (0.7, C12) ----------
tpl = orig['impressum/index.html']
def page(rel, title, desc, h1, body, ldtype):
    u = url_of(rel); depth = '../' * rel.count('/')
    head = ('<head><meta charset="utf-8"/><meta content="width=device-width,initial-scale=1" name="viewport"/><title>%s</title>'
            '<meta content="%s" name="description"/><meta content="index,follow" name="robots"/><link href="%s" rel="canonical"/>'
            '<link href="%sassets/icon-192.png" rel="icon"/>%s'
            '<script type="application/ld+json">%s</script>'
            '<meta property="og:type" content="website"><meta property="og:site_name" content="Stoffknacker"><meta property="og:locale" content="de_CH">'
            '<meta property="og:title" content="%s"><meta property="og:description" content="%s"><meta property="og:url" content="%s">'
            '<meta property="og:image" content="https://stoffknacker.com/og-image.png"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">'
            '<meta name="twitter:card" content="summary_large_image"></head>') % (
        esc(title), esc(desc), u, depth, re.search(r'<link href="[./]*assets/lesen\.css[^"]*" rel="stylesheet"/>', tpl).group(0).replace('../', depth),
        json.dumps([{'@context': 'https://schema.org', '@type': ldtype, 'name': h1, 'url': u, 'inLanguage': 'de-CH', 'description': desc},
                    {'@context': 'https://schema.org', '@type': 'BreadcrumbList', 'itemListElement': [{'@type': 'ListItem', 'position': 1, 'name': 'Start', 'item': B}, {'@type': 'ListItem', 'position': 2, 'name': h1, 'item': u}]}], ensure_ascii=False),
        esc(title.replace(' | Stoffknacker', '')), esc(desc), u)
    hdr = re.search(r'<header class="k">.*?</header>', tpl, re.S).group(0).replace('../', depth)
    ftr = re.search(r'<footer>.*?</footer>', tpl, re.S).group(0).replace('../', depth)
    return '<!DOCTYPE html>\n<html lang="de-CH">\n%s\n<body>%s<main><nav aria-label="Pfad" class="bc"><a href="%s">Start</a> › %s</nav><article><h1>%s</h1>%s</article></main>%s</body>\n</html>\n' % (head, hdr, depth, esc(h1), esc(h1), body, ftr)

def li(src, dst): return '<li><a href="%s">%s</a></li>' % (rel_link(src, dst), esc(label_of(dst)))
IR = 'inhalt/index.html'; body = '<p class="lead">Jede Seite von Stoffknacker auf einen Blick: Lernkapitel nach Fach, Schule fürs Leben, Sprachen und Abschlüsse. Alle Inhalte sind kostenlos und ohne Konto lesbar.</p>'
body += '<h2>Abschlüsse</h2><ul class="liste">' + ''.join(li(IR, t + '/index.html') for t in TRACK if t + '/index.html' in pages) + '</ul>'
body += '<h2>Übersichten</h2><ul class="liste">' + ''.join(li(IR, r) for r in ('lernen/index.html', 'passerelle/lehrplan/index.html', 'schule-fuers-leben/index.html', 'schule-fuers-leben/grundlagen/index.html', 'schule-fuers-leben/themen/index.html', 'sprachen/index.html', 'sprachtrainer/index.html') if r in pages and not noindexed(pages[r])) + '</ul>'
for subj in sorted(subj_order, key=lambda x: label_of('lernen/%s/index.html' % x)):
    hub = 'lernen/%s/index.html' % subj
    body += '<h2><a href="%s">%s</a></h2><ul class="liste">%s</ul>' % (rel_link(IR, hub), esc(label_of(hub).split(' lernen')[0].split(':')[0]), ''.join(li(IR, d) for d in subj_order[subj]))
body += '<h2><a href="%s">Schule fürs Leben</a></h2><h3>Grundlagen</h3><ul class="liste">%s</ul>' % (rel_link(IR, 'schule-fuers-leben/index.html'), ''.join(li(IR, d) for d in gl))
for t in th:
    tid = t.split('/')[2]
    body += '<h3><a href="%s">%s</a></h3><ul class="liste">%s</ul>' % (rel_link(IR, t), esc(label_of(t)), ''.join(li(IR, v) for v in vt if v.split('/')[2].rsplit('-', 1)[0] == tid))
for lang, nm in (('en', 'Englisch'), ('fr', 'Französisch'), ('it', 'Italienisch'), ('es', 'Spanisch')):
    hub = 'sprachen/%s/index.html' % lang
    if hub in pages: body += '<h2><a href="%s">%s</a></h2><ul class="liste">%s</ul>' % (rel_link(IR, hub), nm, ''.join(li(IR, r) for r in sorted(pages) if re.fullmatch(r'sprachen/%s/[a-z]+/index\.html' % lang, r)))
info = [r for r in ('ueber/index.html', 'lehrpersonen/index.html', 'lernqualitaet/index.html', 'barrierefreiheit/index.html', 'impressum/index.html', 'datenschutz/index.html', 'nutzungsbedingungen/index.html') if r in pages]
body += '<h2>Über das Angebot</h2><ul class="liste">%s<li><a href="../presse/">Presse und Zitieren</a></li></ul><p>Maschinenlesbar: <a href="../sitemap.xml">sitemap.xml</a>.</p>' % ''.join(li(IR, r) for r in info)
nchap = sum(len(v) for v in subj_order.values())
pages[IR] = page(IR, 'Alle Inhalte von Stoffknacker | Stoffknacker', 'Alle %d Lernkapitel, %d Lektionen aus Schule fürs Leben und die Sprachkurse von Stoffknacker auf einer Seite, nach Fach geordnet.' % (nchap, len(gl) + len(vt)), 'Alle Inhalte', body, 'CollectionPage')

# facts for /presse/ come from the build itself
cat = json.loads((R / 'assets/content/language-catalog.json').read_text())
PR = 'presse/index.html'; nsubj = len(subj_order)
pbody = ('<p class="lead">Fakten, Zitierhinweise und Kontakt für Medien, Lehrpersonen und alle, die auf Stoffknacker verweisen möchten.</p>'
 '<h2>Stoffknacker in Kürze</h2><ul>'
 '<li>Kostenloser Lern- und Prüfungstrainer für Schweizer Abschlüsse: Passerelle, Gymnasiale Maturität, Schweizerische Maturitätsprüfung (SMP), Berufsmaturität, eidgenössische Berufsmaturitätsprüfung (EBMP) und Fachmittelschule (FMS).</li>'
 '<li>%d Lernkapitel in %d Fächern, jedes als lesbare Seite und als interaktive Lektion mit Übungen und Lösungsweg.</li>'
 '<li>Schule fürs Leben: %d Lektionen zu Lohn, Rechnungen, Krankenkasse, Miete und Steuern.</li>'
 '<li>Sprachkurse in %s mit je vier Niveaustufen von A1 bis B2.</li>'
 '<li>Ohne Konto und ohne Anmeldung nutzbar. Der Lernstand bleibt im Browser. Derzeit keine Werbung und keine Analysedienste.</li>'
 '<li>Ein privates Angebot von Torsten Sauter, Meilen. Keine Verbindung zu einer Behörde, einem Kanton oder einer Schule.</li></ul>'
 '<h2>Wie die Inhalte entstehen</h2><p>Die Kapitel folgen den offiziellen Rahmenlehrplänen und Prüfungsreglementen. Jede Kapitelseite nennt unter «Quellen und Prüfung» die Lehrplangrundlage. '
 'Teile der Inhalte wurden mit Unterstützung von KI-Werkzeugen erstellt und redaktionell sowie mit einer KI-Prüfung kontrolliert. Fehlerhinweise nehmen wir über die Box «Fehler entdeckt?» auf jeder Kapitelseite entgegen. '
 'Mehr dazu auf der Seite <a href="../lernqualitaet/">Lernqualität</a>. Wie die Passerelle-Richtlinien Punkt für Punkt abgedeckt sind, zeigt die <a href="../passerelle/lehrplan/">Lehrplan-Übersicht zur Passerelle</a>.</p>'
 '<h2>So zitieren Sie Stoffknacker</h2><p>Für ein einzelnes Kapitel:</p><p><code>Stoffknacker (2026): Titel des Kapitels. https://stoffknacker.com/lernen/fach/kapitel/ (abgerufen am TT.MM.JJJJ).</code></p>'
 '<p>Für das Angebot als Ganzes: <code>Stoffknacker – kostenloser Lern- und Prüfungstrainer. https://stoffknacker.com/</code></p>'
 '<p>Links auf einzelne Seiten sind ausdrücklich willkommen. Kurze Zitate mit Quellenangabe sind im Rahmen des Zitatrechts erlaubt. Für weitergehende Nutzung von Texten, Aufgaben oder Grafiken fragen Sie bitte vorher an; alle Rechte liegen beim Betreiber.</p>'
 '<h2>Bild und Logo</h2><p>Das Vorschaubild <a href="../og-image.png">og-image.png</a> (1200 × 630 Pixel) erscheint automatisch, wenn ein Link auf Stoffknacker geteilt wird. Für andere Verwendungen fragen Sie bitte vorher an.</p>'
 '<h2>Kontakt</h2><p>Torsten Sauter, Gründer. Kontaktangaben im <a href="../impressum/">Impressum</a>. Ein Gespräch über die Idee hinter Stoffknacker finden Sie unter <a href="../ueber/">Über Stoffknacker</a>.</p>'
 '<p>Übersicht aller Seiten: <a href="../inhalt/">Alle Inhalte</a>.</p>') % (
    nchap, nsubj, len(gl) + len(vt), ', '.join(v['name'] for v in cat.values()).rsplit(', ', 1)[0] + ' und ' + list(cat.values())[-1]['name'])
pages[PR] = page(PR, 'Presse und Zitieren | Stoffknacker', 'Fakten zu Stoffknacker, Zitierhinweise für Kapitel und Kontakt für Medien: kostenloser Lerntrainer für Passerelle, Matura, BM und FMS.', 'Presse und Zitieren', pbody, 'WebPage')

# ---------- footer links (C12) ----------
for rel in sorted(pages):
    s = pages[rel]
    if '<footer' not in s or 'data-sk-foot' in s: continue
    d = '../' * rel.count('/')
    add = ' · <a data-sk-foot="1" href="%sinhalt/">Alle Inhalte</a> · <a href="%spresse/">Presse</a>' % (d, d)
    s2 = re.sub(r'(<footer\b[^>]*>.*?)(</footer>)', lambda m: m.group(1) + add + m.group(2) if 'impressum/' in m.group(1) else m.group(0), s, count=1, flags=re.S)
    if s2 != s: n['footer'] += 1; pages[rel] = s2

# ---------- thin pages (R7) ----------
NOINDEX = []
for rel in sorted(pages):
    s = pages[rel]
    if noindexed(s) or rel in ('index.html',): continue
    w = len(visible_words(s))
    if w < 150:
        reason = '%d Wörter sichtbarer Text (unter 150)' % w
        if get_meta(s, 'name', 'robots') is not None: s = set_attr_meta(s, 'name', 'robots', 'noindex,follow')
        else: s = s.replace('<head>', '<head><meta name="robots" content="noindex,follow">', 1)
        s = re.sub(r'(<meta\b[^>]*name="robots"[^>]*?)(/?>)', lambda m: m.group(1) + ('' if 'data-sk-thin' in m.group(1) else ' data-sk-thin="1"') + m.group(2), s, count=1)
        pages[rel] = s; n['noindex'] += 1
NOINDEX = [(url_of(r), '%d Wörter sichtbarer Text (unter 150)' % len(visible_words(s))) for r, s in sorted(pages.items())
           if re.search(r'<meta\b[^>]*data-sk-thin="1"', s)]

for rel, s in pages.items():
    p = R / rel
    if orig.get(rel) != s: p.parent.mkdir(parents=True, exist_ok=True); p.write_text(s, encoding='utf-8')
(R / 'tools/source').mkdir(parents=True, exist_ok=True)
(R / 'tools/source/noindex211.json').write_text(json.dumps(NOINDEX, ensure_ascii=False, indent=1) + '\n', encoding='utf-8')
print('seo_brief211', dict(sorted(n.items())))
