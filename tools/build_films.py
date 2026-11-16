#!/usr/bin/env python3
"""Adds an «Erklärfilm» (animated short explanation, presented by a Stoffknacker teacher) to reading pages.
Page kinds: chapter pages, Schule-fürs-Leben lessons and document pages, subject overviews,
exam-path pages and the language situations of the four active courses.
Quality rules (enforced, the build fails otherwise):
- every text shown is a whole sentence or list item from the page's own published text, never cut or re-labelled;
- a scene is left out rather than shortened; no scene repeats an earlier one; generic sentences that
  appear in many chapters are not used as a chapter's warning;
- mistakes are shown with the page's own framing (warning sign, «Falsch»/«Besser», «Vermeide»), never as advice;
- worked examples only with their real steps.
Usage: build_films.py SITE"""
import html, json, re, sys, hashlib
from collections import Counter
from pathlib import Path
R = Path(sys.argv[1]).resolve()
FILMV = hashlib.sha256((R/'assets/film/film.js').read_bytes()+(R/'assets/film/film.css').read_bytes()).hexdigest()[:10]
COL = {'mathematik':'#2563eb','biologie':'#059669','chemie':'#7c3aed','physik':'#0891b2','geschichte':'#b45309','geografie':'#0d9488','deutsch':'#dc2626','englisch':'#1d4ed8','franzoesisch':'#be123c','italienisch':'#15803d','spanisch':'#d97706','wirtschaft-und-recht':'#4f46e5','informatik':'#0284c7','rechnungswesen':'#4338ca','latein':'#9f1239','griechisch':'#1e40af','kunst-und-musik':'#c026d3','sport':'#16a34a','leben':'#ea580c'}
LEHRER = {'mathematik':'lena','informatik':'lena','physik':'sophie','biologie':'sophie','chemie':'sophie','sport':'sophie','technik-und-umwelt':'sophie','fms-gesundheit':'sophie','geschichte':'alex','geografie':'alex','wirtschaft-und-recht':'alex','rechnungswesen':'alex','sozialwissenschaften':'alex','orientierung':'alex','fms-soziale-arbeit':'alex','deutsch':'marco','latein':'marco','griechisch':'marco','kunst-und-musik':'marco','projektarbeiten':'marco','information-und-kommunikation':'marco','fms-kommunikation':'marco','fms-gestaltung':'marco','fms-musik-und-theater':'marco','fms-paedagogik':'marco','englisch':'maya','franzoesisch':'maya','italienisch':'maya','spanisch':'maya','raetoromanisch':'maya','russisch':'maya','sprachen':'maya'}
LEBEN = {'ga-05':'sophie','ga-22':'marco','ga-23':'marco','ga-24':'marco','ga-33':'marco','ga-28':'lena','ga-29':'lena','ga-30':'lena'}
WEG = {'passerelle':'lena','gymnasiale-maturitaet':'marco','berufsmaturitaet':'alex','fms':'sophie','ebmp':'maya','smp':'alex'}
SPR = {'en':('englisch','en'),'fr':('franzoesisch','fr'),'it':('italienisch','it'),'es':('spanisch','es')}
NAMEN = {'lena': 'Lena', 'marco': 'Marco', 'sophie': 'Sophie', 'alex': 'Alex', 'maya': 'Maya'}
T = lambda s: re.sub(r'\s+', ' ', html.unescape(re.sub(r'<[^>]+>', ' ', s or ''))).strip()
TT = lambda s: re.sub(r'\s+([,.;:!?)])', r'\1', T(s))
END = re.compile(r'[.!?:)»"“]$')
def sec(s, name):
    m = re.search(r'<section(?: [^>]*)?><h2[^>]*>%s</h2>(.*?)</section>' % re.escape(name), s, re.S); return m.group(1) if m else ''
def saetze(t):
    return [x.strip() for x in re.split(r'(?<=[.!?])\s+(?=[A-ZÄÖÜ0-9«„(])', T(t)) if x.strip()]
def ganz(t, n):
    """Whole sentences up to n characters; '' if the first sentence alone is longer."""
    out = ''
    for x in saetze(t):
        if len(out) + len(x) + 1 > n: break
        out = (out + ' ' + x).strip()
    return out if out and END.search(out) else ''
def norm(t): return set(re.findall(r'\w{4,}', t.lower()))
def sprech(t):
    """Spoken form only (never shown): reads symbols the way a teacher says them."""
    t = re.sub(r'\s+', ' ', t)
    for a, b in ((' · ', ' mal '), ('²', ' hoch zwei'), ('³', ' hoch drei'), (' = ', ' gleich '), ('≈', ' ungefähr '), ('‰', ' Promille'), ('→', ' ergibt '), ('CHF ', 'Franken ')):
        t = t.replace(a, b)
    t = re.sub(r'(?<=\d) : (?=[\d(])', ' geteilt durch ', t)
    t = re.sub(r'(^|[\s(=])−\s?(?=\d)', r'\1minus ', t)
    t = re.sub(r'(?<=[\d)]) − (?=[\d(])', ' minus ', t)
    return t
def li(h): return [T(x) for x in re.findall(r'<li[^>]*>(.*?)</li>', h, re.S)]
def h1(s): return T((re.search(r'<h1>(.*?)</h1>', s, re.S) or [None, ''])[1])
def lead(s, n): return ganz((re.search(r'<p class="lead">(.*?)</p>', s, re.S) or [None, ''])[1], n)
FIG = {}
_cap = R / 'assets/film/diagramme/diagramme.json'
if _cap.exists():
    for x in json.loads(_cap.read_text(encoding='utf-8')): FIG[x['chapter']] = x
# sentences used as «Irrtum» in many chapters are generic, not chapter-specific
GEN = Counter()
for f in R.glob('lernen/*/*/index.html'):
    s = f.read_text(encoding='utf-8')
    GEN[ganz(sec(s, 'Ein verbreiteter Irrtum') or sec(s, 'Typischer Fehler'), 280)] += 1

# Schule fürs Leben: «Typischer Denkfehler» and «Erklär es selbst» are written per theme and repeated on its
# four lessons; the film uses them only on the lesson whose own text fits them best.
BEST = {}
def _fit(f, s, txt):
    own = norm(h1(s) + ' ' + lead(s, 400) + ' ' + T(sec(s, 'Erklärung')) + ' ' + T(sec(s, 'Beispiel'))); w = norm(txt)
    return len(own & w) / (len(w) or 1)
for f in sorted(R.glob('schule-fuers-leben/vertiefung/*/index.html')):
    s = f.read_text(encoding='utf-8'); d = sec(s, 'Typischer Denkfehler')
    for key in (T(d), T(sec(s, 'Erklär es selbst'))):
        if key:
            sc = _fit(f, s, key)
            if key not in BEST or sc > BEST[key][0]: BEST[key] = (sc, f)

class Film:
    def __init__(self): self.sc = []; self.seen = []
    def add(self, scene, text, force=False):
        w = norm(text)
        if not text or not w: return False
        if not force and any(len(w & o) / len(w) > 0.6 for o in self.seen): return False
        scene.setdefault('say', sprech(text)); self.sc.append(scene); self.seen.append(w); return True

def chapter(f, s):
    fm = Film(); title = h1(s); ld = lead(s, 240)
    fm.add({'type': 'title', 'kicker': 'Erklärfilm', 'title': title, 'text': ld, 'say': sprech(title + '. ' + ld)}, ld or title)
    kern = ganz(sec(s, 'Der Kern'), 200); fm.add({'type': 'big', 'kicker': 'Der Kern', 'text': kern}, kern)
    fx = FIG.get(f.parts[-2])
    if fx: fm.sc.append({'type': 'figure', 'kicker': 'Im Bild', 'src': '%sassets/film/diagramme/%s' % ('../' * (len(f.relative_to(R).parts) - 1), fx['svg']), 'ftitle': fx['title'], 'fcap': fx['caption'], 'alt': fx['alt'], 'say': sprech(fx['title'] + '. ' + fx['caption'])})
    worum = ganz(sec(s, 'Worum es geht'), 260); fm.add({'type': 'text', 'kicker': 'Worum es geht', 'text': worum}, worum)
    terms = [(T(a), T(b)) for a, b in re.findall(r'<tr><td>(.*?)</td><td>(.*?)</td></tr>', sec(s, 'Begriffe'), re.S)]
    terms = [(a, b) for a, b in terms if a and b and len(b) <= 140 and END.search(b)][:4]
    if len(terms) >= 2: fm.add({'type': 'terms', 'kicker': 'Die wichtigsten Begriffe', 'items': [[a, b] for a, b in terms], 'say': sprech(' '.join('%s: %s' % (a, b) for a, b in terms))}, ' '.join(a + ' ' + b for a, b in terms))
    for bm in re.findall(r'<div class="beispiel">(.*?)</div>', sec(s, 'Durchgerechnete Beispiele'), re.S):
        task = T((re.search(r'<b>Aufgabe:</b>(.*?)</p>', bm, re.S) or [None, ''])[1]); steps = li(bm)
        res = T((re.search(r'<b>Ergebnis:</b>(.*?)</p>', bm, re.S) or [None, ''])[1])
        if task and 2 <= len(steps) <= 6 and len(task) <= 220 and all(len(x) <= 190 for x in steps) and len(res) <= 190:
            if fm.add({'type': 'steps', 'kicker': 'Beispiel Schritt für Schritt', 'task': task, 'steps': steps, 'result': res, 'say': sprech(' '.join([task] + steps + ([res] if res else [])))}, task + ' ' + ' '.join(steps)): break
    irr_name = 'Ein verbreiteter Irrtum' if sec(s, 'Ein verbreiteter Irrtum') else 'Typischer Fehler'
    irr = ganz(sec(s, irr_name), 280)
    fm.add({'type': 'warn', 'gen': GEN[irr] >= 3, 'kicker': 'So vermeidest du einen verbreiteten Irrtum' if irr_name == 'Ein verbreiteter Irrtum' else 'So vermeidest du einen typischen Fehler', 'text': irr}, irr)
    merk = ganz(sec(s, 'Merkhilfe'), 180); fm.add({'type': 'big', 'kicker': 'Merkhilfe', 'text': merk}, merk)
    wich = [x for x in li(sec(s, 'Das Wichtigste')) if len(x) <= 140 and END.search(x)][:4]
    if len(wich) >= 2: fm.add({'type': 'list', 'kicker': 'Das Wichtigste', 'items': wich}, ' '.join(wich))
    if len(fm.sc) > 4: fm.sc = [x for x in fm.sc if not x.get('gen')]
    for x in fm.sc: x.pop('gen', None)
    sub = f.parts[-3]
    return fm.sc, {'title': title, 'color': COL.get(sub, '#2563eb'), 'motif': sub, 'teacher': LEHRER.get(sub, 'sophie')}, 4, 'Erklärfilm: das Kapitel in einer Minute', 'Kurzfassung aus dem Text dieses Kapitels.'

def leben(f, s):
    fm = Film(); title = h1(s); ld = lead(s, 240)
    fm.add({'type': 'title', 'kicker': 'Schule fürs Leben', 'title': title, 'text': ld, 'say': title + '. ' + ld}, title + ' ' + ld)
    if 'grundlagen' in f.parts:
        wozu = ganz(sec(s, 'Wozu'), 240); fm.add({'type': 'big', 'kicker': 'Wozu', 'text': wozu}, wozu)
        ziele = [x for x in li(sec(s, 'Lernziele')) if len(x) <= 110][:4]
        if len(ziele) >= 2: fm.add({'type': 'list', 'kicker': 'Das kannst du danach', 'items': ziele}, ' '.join(ziele))
        dl = [(T(a), T(b)) for a, b in re.findall(r'<dt[^>]*>(.*?)</dt>\s*<dd>(.*?)</dd>', sec(s, 'Begriffe'), re.S)]
        dl = [(a, b) for a, b in dl if len(b) <= 140 and END.search(b)][:4]
        if len(dl) >= 2: fm.add({'type': 'terms', 'kicker': 'Begriffe', 'items': [list(x) for x in dl], 'say': sprech(' '.join('%s: %s' % x for x in dl))}, ' '.join(a + ' ' + b for a, b in dl))
        doc = [(T(a), T(b)) for a, b in re.findall(r'<li><b>(.*?)</b>(.*?)</li>', sec(s, 'Schritt für Schritt durch das Dokument'), re.S)]
        doc = [(a, b) for a, b in doc if len(b) <= 150 and END.search(b)][:4]
        if len(doc) >= 2: fm.add({'type': 'terms', 'kicker': 'Schritt für Schritt durch das Dokument', 'items': [list(x) for x in doc], 'say': sprech(' '.join('%s: %s' % x for x in doc))}, ' '.join(a + ' ' + b for a, b in doc))
        bsp = ganz(sec(s, 'Beispiel'), 260); fm.add({'type': 'text', 'kicker': 'Beispiel', 'text': bsp}, bsp)
        hf = [x for x in li(sec(s, 'Häufige Fehler')) if len(x) <= 140][:3]
        if len(hf) >= 2: fm.add({'type': 'avoid', 'kicker': 'Häufige Fehler', 'items': hf, 'say': 'Häufige Fehler: ' + ' '.join(hf)}, ' '.join(hf))
    else:
        erk = ganz(sec(s, 'Erklärung'), 260); fm.add({'type': 'text', 'kicker': 'Erklärung', 'text': erk}, erk)
        bsp = ganz(sec(s, 'Beispiel'), 260); fm.add({'type': 'big', 'kicker': 'Beispiel', 'text': bsp}, bsp)
        so = [x for x in li(sec(s, 'So gehst du vor')) if len(x) <= 150][:5]
        if len(so) >= 2: fm.add({'type': 'steps', 'kicker': 'So gehst du vor', 'task': '', 'steps': so, 'result': ''}, ' '.join(so))
        d = sec(s, 'Typischer Denkfehler')
        no = T((re.search(r'<b>Falsch:</b>(.*?)</p>', d, re.S) or [None, ''])[1]); ja = T((re.search(r'<b>Besser:</b>(.*?)</p>', d, re.S) or [None, ''])[1])
        if no and ja and len(no) <= 200 and len(ja) <= 220 and BEST.get(T(d), (0, f))[1] == f: fm.add({'type': 'myth', 'kicker': 'Typischer Denkfehler', 'no': no, 'ja': ja, 'say': 'Falsch wäre: ' + no + ' Besser: ' + ja}, no + ' ' + ja)
        wich = [x for x in li(sec(s, 'Das Wichtigste')) if len(x) <= 150][:4]
        if len(wich) >= 2: fm.add({'type': 'list', 'kicker': 'Das Wichtigste', 'items': wich}, ' '.join(wich))
        selbst = ganz(sec(s, 'Erklär es selbst'), 200) if BEST.get(T(sec(s, 'Erklär es selbst')), (0, f))[1] == f else ''; fm.add({'type': 'big', 'kicker': 'Jetzt du', 'text': selbst}, selbst)
    thema = next((p[:5] for p in f.parts if re.match(r'ga-\d\d', p)), None)
    return fm.sc, {'title': title, 'color': COL['leben'], 'motif': 'leben', 'teacher': LEBEN.get(thema, 'alex')}, 4, 'Erklärfilm: die Lektion in einer Minute', 'Kurzfassung aus dem Text dieser Lektion.'

def fach(f, s):
    fm = Film(); sub = f.parts[-2]; title = h1(s); ld = lead(s, 240)
    fm.add({'type': 'title', 'kicker': 'Fach im Überblick', 'title': title, 'text': ld, 'say': title + '. ' + ld}, title + ' ' + ld)
    wege = [T(x) for x in re.findall(r'<h2>(.*?)</h2>', s)]
    if len(wege) >= 2: fm.add({'type': 'list', 'kicker': 'Lehrgänge auf dieser Seite', 'items': wege[:6], 'say': 'Lehrgänge auf dieser Seite: ' + ', '.join(w.replace(' · ', ' ') for w in wege[:6]) + '.'}, ' '.join(wege), True)
    kap = list(dict.fromkeys(T(x) for x in re.findall(r'<li><a href="[^"#]+/">(.*?)</a>', s) if len(T(x)) <= 70))
    if len(kap) >= 2:
        pick = kap[::max(1, len(kap) // 4)][:4]
        fm.add({'type': 'cards', 'kicker': 'Ein paar Kapitel daraus', 'items': pick, 'say': 'Zum Beispiel: ' + ', '.join(pick) + '.'}, ' '.join(pick), True)
    return fm.sc, {'title': title, 'color': COL.get(sub, '#2563eb'), 'motif': sub, 'teacher': LEHRER.get(sub, 'sophie')}, 3, 'Erklärfilm: das Fach im Überblick', 'Überblick aus dem Text dieser Seite.'

def weg(f, s):
    fm = Film(); wid = f.parts[-2]; title = h1(s); ld = lead(s, 300)
    fm.add({'type': 'title', 'kicker': 'Dein Weg zur Prüfung', 'title': title, 'text': ld, 'say': title + '. ' + ld}, title + ' ' + ld)
    zahl = next((T(x) for x in re.findall(r'<p>(.*?)</p>', s) if re.match(r'\d+ Kapitel in \d+ Fächern\.$', T(x))), '')
    fm.add({'type': 'big', 'kicker': 'So viel Stoff wartet', 'text': zahl}, zahl)
    fae = [T(x) for x in re.findall(r'<h2[^>]*>(.*?)</h2>', s) if T(x) != 'Kapitel zum Lesen']
    if len(fae) >= 2: fm.add({'type': 'cards', 'kicker': 'Deine Fächer', 'items': fae[:8], 'say': 'Deine Fächer: ' + ', '.join(fae[:8]) + '.'}, ' '.join(fae), True)
    return fm.sc, {'title': title, 'color': '#2563eb', 'motif': '_', 'teacher': WEG.get(wid, 'lena')}, 3, 'Erklärfilm: so lernst du hier', 'Überblick aus dem Text dieser Seite.'

def sprache(f, s):
    code = f.parts[-3]; sub, lang = SPR[code]; fm = Film(); title = h1(s); ld = lead(s, 240)
    fm.add({'type': 'title', 'kicker': 'Sprachsituation', 'title': title, 'text': ld, 'say': title + '. ' + ld}, title + ' ' + ld)
    w = [(T(a), T(b)) for a, b in re.findall(r'<dt lang="%s">(.*?)</dt><dd>(.*?)</dd>' % lang, sec(s, 'Wörter für diese Situation'), re.S)][:6]
    if len(w) >= 3:
        say = [['Die Wörter dazu.', 'de']] + [x for a, b in w for x in ([a, lang], [b, 'de'])]
        fm.add({'type': 'terms', 'kicker': 'Wörter für diese Situation', 'items': [list(x) for x in w], 'lang': lang, 'say': say}, ' '.join(a + ' ' + b for a, b in w))
    for n, (fx, de) in enumerate(re.findall(r'<div class="model"><p lang="%s">(.*?)</p><p>(.*?)</p></div>' % lang, sec(s, 'Vier Sätze im Zusammenhang'), re.S)[:4]):
        fx, de = T(fx), T(de)
        fm.add({'type': 'pair', 'kicker': 'Satz %d von 4' % (n + 1), 'fx': fx, 'de': de, 'lang': lang, 'say': [[fx, lang], [de, 'de'], [fx, lang]]}, fx + ' ' + de + ' satz%d' % n)
    g = sec(s, 'Die Form selbst finden')
    q = T((re.search(r'^\s*<p lang="%s">(.*?)</p>' % lang, g, re.S) or [None, ''])[1])
    m = re.search(r'<details><summary>[^<]*</summary><p lang="%s">(.*?)</p><p>(.*?)</p></details>' % lang, g, re.S)
    if q and m: fm.add({'type': 'quiz', 'kicker': 'Die Form selbst finden', 'q': q, 'a': T(m.group(1)), 'why': T(m.group(2)), 'lang': lang, 'say': [['Welche Form fehlt?', 'de'], [T(m.group(2)), 'de']]}, q + ' ' + T(m.group(2)))
    return fm.sc, {'title': title, 'color': COL[sub], 'motif': sub, 'teacher': 'maya', 'lang': lang}, 4, 'Erklärfilm: die Situation in einer Minute', 'Kurzfassung aus dem Text dieser Seite.'

JOBS = [('lernen/*/*/index.html', chapter), ('schule-fuers-leben/vertiefung/*/index.html', leben), ('schule-fuers-leben/grundlagen/gl-*/index.html', leben),
        ('lernen/*/index.html', fach), ('*/index.html', weg)] + [('sprachen/%s/*/index.html' % c, sprache) for c in SPR]
TEXTKEYS = ('text', 'title', 'task', 'result', 'no', 'ja', 'fx', 'de', 'q', 'a', 'why')
bad = []; stats = Counter(); kinds = Counter(); APP = {}
for pat, fn in JOBS:
    for f in sorted(R.glob(pat)):
        if fn is weg and f.parts[-2] not in WEG: continue
        s = orig = f.read_text(encoding='utf-8')
        # rebuild from scratch on every run, so improvements reach pages that are not regenerated
        s = re.sub(r'<section class="skf".*?</section>', '', s, count=1, flags=re.S)
        s = re.sub(r'<link rel="stylesheet" href="[./]*assets/film/film\.css[^"]*"><script defer src="[./]*assets/film/film\.js[^"]*"></script>', '', s)
        if re.search(r'<meta name="robots" content="noindex', s): continue
        m = re.search(r'<p class="lead">.*?</p>', s, re.S)
        if not m: continue
        sc, data, minimum, head, cap = fn(f, s)
        if len(sc) < minimum:
            stats['skipped_short_' + fn.__name__] += 1
            if s != orig: f.write_text(s, encoding='utf-8')
            continue
        main = re.search(r'<main\b.*?</main>', s, re.S).group(0)
        page = T(main); page2 = TT(main)
        for x in sc:
            parts = [x.get(k, '') for k in TEXTKEYS] + list(x.get('steps', []))
            for it in x.get('items', []): parts += it if isinstance(it, list) else [it]
            for v in parts:
                if v and v not in page and v not in page2: bad.append((str(f.relative_to(R)), x['type'], v[:70]))
        data['scenes'] = sc
        rel = '../' * (len(f.relative_to(R).parts) - 1)
        block = ('<section class="skf" aria-labelledby="skf-h"><h2 id="skf-h">%s</h2><div class="skf-mount"></div>'
                 '<script type="application/json">%s</script><p class="skf-cap">%s Es erklärt %s. Stimme und Musik entstehen direkt in Deinem Browser und lassen sich ausschalten; es werden keine Daten gesendet.</p></section>'
                 % (head, json.dumps(data, ensure_ascii=False, separators=(',', ':')).replace('</', '<\\/'), cap, NAMEN[data['teacher']]))
        s = s[:m.end()] + block + s[m.end():]
        s = s.replace('</head>', '<link rel="stylesheet" href="%sassets/film/film.css?v=%s"><script defer src="%sassets/film/film.js?v=%s"></script></head>' % (rel, FILMV, rel, FILMV), 1)
        f.write_text(s, encoding='utf-8'); kinds[fn.__name__] += 1
        if fn is chapter: APP[f.parts[-2]] = str(f.parent.relative_to(R)) + '/'
        for x in sc: stats[x['type']] += 1
(R / 'assets/film/app-index.json').write_text(json.dumps(dict(sorted(APP.items())), separators=(',', ':')), encoding='utf-8')
# app view: lesson film + hidden model answers (assets/js/sk-lesson-film.js), versioned in the app shell and service worker
AV = hashlib.sha256(b''.join((R / x).read_bytes() for x in ('assets/js/sk-lesson-film.js', 'assets/film/film.js', 'assets/film/film.css', 'assets/film/app-index.json'))).hexdigest()[:12]
for name, tag, anchor in (('index.html', '<script defer="" src="assets/js/sk-lesson-film.js?v=%s"></script>', re.compile(r'<script defer="" src="assets/js/sk-leben-index\.js\?v=[0-9a-f]+"></script>')),
                          ('sw.js', '"./assets/js/sk-lesson-film.js?v=%s",', re.compile(r'"\./assets/js/sk-leben-index\.js\?v=[0-9a-f]+",'))):
    f = R / name; t = f.read_text(encoding='utf-8')
    if 'sk-lesson-film.js?v=' in t: t = re.sub(r'sk-lesson-film\.js\?v=[0-9a-f]+', 'sk-lesson-film.js?v=' + AV, t)
    else:
        m = anchor.search(t); assert m, name; t = t[:m.end()] + tag % AV + t[m.end():]
    f.write_text(t, encoding='utf-8')
if bad: raise SystemExit('build_films: %d film texts not found verbatim on the page, e.g. %s' % (len(bad), bad[:4]))
print('build_films: %d films %s, scenes %s' % (sum(kinds.values()), json.dumps(kinds, sort_keys=True), json.dumps(stats, sort_keys=True)))
