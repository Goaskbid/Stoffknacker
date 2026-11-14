#!/usr/bin/env python3
"""r185 SEO layer: idempotent, meta/markup only. No visible feature, score, content or URL change except
short chapter summaries under links on subject hub pages (taken from each chapter's own description)."""
import html, json, re, sys
from pathlib import Path
R = Path(sys.argv[1]).resolve(); B = 'https://stoffknacker.com/'; DATE = '2026-11-14'
LANG = {'en': 'Englisch', 'fr': 'Französisch', 'it': 'Italienisch', 'es': 'Spanisch'}
attrs = lambda s: [dict(re.findall(r'([\w:-]+)="([^"]*)"', m)) for m in re.findall(r'<(?:meta|link)\b([^>]*)>', s)]
def meta(s, **k):
    for a in attrs(s):
        if all(a.get(x) == y for x, y in k.items()): return a
    return None
def esc(t): return html.escape(html.unescape(t), quote=True)
def setdesc(s, new):
    return re.sub(r'(<meta\b[^>]*name="description"[^>]*>)', lambda m: re.sub(r'content="[^"]*"', 'content="%s"' % esc(new), m.group(1)), s, count=1)
n = {'og': 0, 'desc_lang': 0, 'desc_short': 0, 'hub': 0, 'home_ld': 0}
for f in sorted(R.rglob('*.html')):
    rel = str(f.relative_to(R))
    if rel.startswith(('tools/', '.git')): continue
    s = f.read_text(encoding='utf-8'); o = s
    rb = meta(s, name='robots')
    if rb and 'noindex' in rb.get('content', ''): continue
    t = re.search(r'<title>(.*?)</title>', s, re.S); d = meta(s, name='description'); c = meta(s, rel='canonical')
    if not (t and d and c): continue
    title = html.unescape(t.group(1).strip()); desc = html.unescape(d['content']); url = c['href']
    def cut(x, n):
        if len(x) <= n: return x
        x = x[:n].rsplit(' ', 1)[0].rstrip(',;:–-')
        return x + '…'
    def settitle(s, new): return re.sub(r'<title>.*?</title>', '<title>%s</title>' % esc(new), s, count=1, flags=re.S)
    mc = re.fullmatch(r'lernen/([^/]+)/([^/]+)/index\.html', rel)
    mh = re.fullmatch(r'lernen/([^/]+)/index\.html', rel)
    tm = re.fullmatch(r'(.+?) – (.+?) \| Stoffknacker', title)
    if mc and tm and 'einfach erklärt' not in title:
        topic, fach = tm.group(1), tm.group(2)
        for cand in ('%s einfach erklärt – %s | Stoffknacker' % (topic, fach), '%s – %s | Stoffknacker' % (topic, fach), '%s – %s' % (topic, fach)):
            if len(cand) <= 62: break
        title = cand; s = settitle(s, title); n['title_ctr'] = n.get('title_ctr', 0) + 1
        first = re.split(r'(?<=[.!?])\s', desc.strip())[0]
        nd = '%s einfach erklärt: %s Mit Beispiel, Übungen und Lösungsweg. Kostenlos.' % (topic, first if len(first) < 95 else cut(first, 90))
        if len(nd) > 158: nd = '%s (%s) einfach erklärt, mit Beispiel, Übungen und Lösungsweg. Kostenlos.' % (topic, fach)
        if len(nd) <= 158: desc = nd; s = setdesc(s, desc); n['desc_ctr'] = n.get('desc_ctr', 0) + 1
    hm = re.fullmatch(r'(.+?): alle Kapitel \| Stoffknacker', title)
    if mh and hm:
        k = re.search(r'(\d+) Kapitel', desc)
        title = '%s lernen: %s kostenlos erklärt | Stoffknacker' % (hm.group(1), (k.group(1) + ' Kapitel') if k else 'alle Kapitel')
        if len(title) > 62: title = '%s lernen: alle Kapitel | Stoffknacker' % hm.group(1)
        s = settitle(s, title); n['title_hub'] = n.get('title_hub', 0) + 1
    m = re.match(r'sprachen/(en|fr|it|es)/', rel)
    if m and not desc.startswith(LANG[m.group(1)]):
        desc = LANG[m.group(1)] + ': ' + desc; s = setdesc(s, desc); n['desc_lang'] += 1
    if len(desc) < 70 and 'kostenlos' not in desc:
        desc = desc.rstrip('.') + '. Stoffknacker – kostenlos lernen, ohne Konto.'; s = setdesc(s, desc); n['desc_short'] += 1
    FIX = {'index.html': 'Kostenloser Lern- und Prüfungstrainer für Passerelle, Matura, BM, SMP, EBMP und FMS: Lektionen Schritt für Schritt, Übungen mit Lösungsweg. Ohne Konto.',
           'passerelle/index.html': 'Passerelle kostenlos vorbereiten: alle Kapitel in Mathematik, Naturwissenschaften, Geschichte, Geografie, Deutsch und Sprachen, mit Übungen und Lösungsweg.'}
    if rel in FIX and desc != FIX[rel]: desc = FIX[rel]; s = setdesc(s, desc); n['desc_fix'] = n.get('desc_fix', 0) + 1
    if len(desc) > 165:
        cut = desc[:160].rfind('. ')
        if cut >= 90: desc = desc[:cut + 1]; s = setdesc(s, desc); n['desc_long'] = n.get('desc_long', 0) + 1
    if re.fullmatch(r'lernen/[^/]+/index\.html', rel) and 'sk-kd' not in s:
        def add(mm):
            href, label = mm.group(1), mm.group(2); p = f.parent / href / 'index.html'
            if not p.exists(): return mm.group(0)
            cd = meta(p.read_text(encoding='utf-8'), name='description')
            if not cd: return mm.group(0)
            return '<li><a href="%s">%s</a><span class="sk-kd" style="display:block;font-size:.92em;color:#475569;margin:.15em 0 .5em">%s</span></li>' % (href, label, esc(cd['content']))
        s2 = re.sub(r'<li><a href="([^"/][^"]*/)">([^<]+)</a></li>', add, s)
        if s2 != s:
            items = re.findall(r'<li><a href="([^"]+)">([^<]+)</a><span class="sk-kd"', s2)
            ld = {'@context': 'https://schema.org', '@type': 'CollectionPage', 'name': title, 'url': url, 'inLanguage': 'de-CH',
                  'mainEntity': {'@type': 'ItemList', 'itemListElement': [{'@type': 'ListItem', 'position': i + 1, 'url': url + h, 'name': html.unescape(l)} for i, (h, l) in enumerate(items)]}}
            s = s2.replace('</head>', '<script type="application/ld+json" id="sk-seo-hub">%s</script></head>' % json.dumps(ld, ensure_ascii=False, separators=(',', ':')), 1); n['hub'] += 1
    if not meta(s, property='og:title'):
        typ = 'article' if rel.count('/') >= 3 or rel.startswith('schule-fuers-leben/') and rel.count('/') >= 2 else 'website'
        tags = [('og:type', typ), ('og:site_name', 'Stoffknacker'), ('og:locale', 'de_CH'), ('og:title', title), ('og:description', desc), ('og:url', url),
                ('og:image', B + 'og-image.png'), ('og:image:width', '1200'), ('og:image:height', '630')]
        block = ''.join('<meta property="%s" content="%s">' % (k, esc(v)) for k, v in tags) + '<meta name="twitter:card" content="summary_large_image">'
        s = s.replace('</head>', block + '</head>', 1); n['og'] += 1
    if rel == 'index.html' and 'id="sk-seo-site"' not in s:
        ld = {'@context': 'https://schema.org', '@graph': [
            {'@type': 'EducationalOrganization', '@id': B + '#org', 'name': 'Stoffknacker', 'url': B, 'logo': B + 'og-image.png'},
            {'@type': 'WebSite', '@id': B + '#website', 'name': 'Stoffknacker', 'url': B, 'inLanguage': 'de-CH', 'publisher': {'@id': B + '#org'},
             'description': html.unescape(meta(s, name='description')['content'])}]}
        s = s.replace('</head>', '<script type="application/ld+json" id="sk-seo-site">%s</script></head>' % json.dumps(ld, ensure_ascii=False, separators=(',', ':')), 1); n['home_ld'] += 1
    if s != o: f.write_text(s, encoding='utf-8')
print('seo_enhance', n)
