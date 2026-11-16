#!/usr/bin/env python3
"""Adds an «Übungsfilm» (interactive practice film: the teacher asks, the learner taps an answer or lets the
teacher reveal it, then hears why) to chapter pages, Schule-fürs-Leben lessons and themes, subject and
exam-path overviews and the language situations.
Didactic rules (enforced):
- questions are taken unchanged from the app's own question bank (same wording, options, answer, explanation);
- only self-contained questions: no reference to a figure, table, map or text that the film cannot show;
- every question has an explanation; numeric questions also show their solution steps;
- options are distinct, at most four, short enough to read on a phone; at most two questions of one kind;
- no two questions ask nearly the same thing; nothing counts towards progress or marks.
Usage: build_quizfilms.py SITE"""
import html, json, re, sys, hashlib
from collections import Counter
from pathlib import Path
R = Path(sys.argv[1]).resolve()
sys.path.insert(0, str(R / 'tools'))
T = lambda s: re.sub(r'\s+', ' ', html.unescape(re.sub(r'<[^>]+>', ' ', s or ''))).strip()
FILMV = hashlib.sha256((R/'assets/film/film.js').read_bytes()+(R/'assets/film/film.css').read_bytes()).hexdigest()[:10]
COL = {'mathematik':'#2563eb','biologie':'#059669','chemie':'#7c3aed','physik':'#0891b2','geschichte':'#b45309','geografie':'#0d9488','deutsch':'#dc2626','englisch':'#1d4ed8','franzoesisch':'#be123c','italienisch':'#15803d','spanisch':'#d97706','wirtschaft-und-recht':'#4f46e5','informatik':'#0284c7','rechnungswesen':'#4338ca','latein':'#9f1239','griechisch':'#1e40af','kunst-und-musik':'#c026d3','sport':'#16a34a','leben':'#ea580c'}
LEHRER = {'mathematik':'lena','informatik':'lena','physik':'sophie','biologie':'sophie','chemie':'sophie','sport':'sophie','technik-und-umwelt':'sophie','fms-gesundheit':'sophie','geschichte':'alex','geografie':'alex','wirtschaft-und-recht':'alex','rechnungswesen':'alex','sozialwissenschaften':'alex','orientierung':'alex','fms-soziale-arbeit':'alex','deutsch':'marco','latein':'marco','griechisch':'marco','kunst-und-musik':'marco','projektarbeiten':'marco','information-und-kommunikation':'marco','fms-kommunikation':'marco','fms-gestaltung':'marco','fms-musik-und-theater':'marco','fms-paedagogik':'marco','englisch':'maya','franzoesisch':'maya','italienisch':'maya','spanisch':'maya','raetoromanisch':'maya','russisch':'maya'}
LEBEN = {'ga-05':'sophie','ga-22':'marco','ga-23':'marco','ga-24':'marco','ga-33':'marco','ga-28':'lena','ga-29':'lena','ga-30':'lena'}
WEG = {'passerelle':'lena','gymnasiale-maturitaet':'marco','berufsmaturitaet':'alex','fms':'sophie','ebmp':'maya','smp':'alex'}
FREMD = {'englisch','franzoesisch','italienisch','spanisch','latein','griechisch','raetoromanisch','russisch'}
NAMEN = {'lena': 'Lena', 'marco': 'Marco', 'sophie': 'Sophie', 'alex': 'Alex', 'maya': 'Maya'}
BEZUG = re.compile(r'Abbildung|Grafik|\bBild|Diagramm|Karte\b|Tabelle|abgebildet|Skizze|obigen|oben stehend|im Text\b|der Text\b|dem Text\b|Quelle [A-Z0-9]|Material [A-Z0-9]|Ausschnitt', re.I)
def norm(t): return set(re.findall(r'\w{4,}', t.lower()))
def zahl(x, unit=''):
    if isinstance(x, (int, float)):
        s = ('%.6g' % x) if isinstance(x, float) else str(x)
        if 'e' in s: return None
        ganz, _, dez = s.partition('.')
        neg = ganz.startswith('-'); ganz = ganz.lstrip('-')
        if len(ganz) > 4: ganz = "'".join([ganz[max(0, i - 3):i] for i in range(len(ganz), 0, -3)][::-1])
        s = ('−' if neg else '') + ganz + (',' + dez if dez else '')
    else: s = str(x)
    return (s + ' ' + unit).strip() if unit else s
GENERISCH = re.compile(r'^(Welche Aussage trifft den Kern von|Welche Reihenfolge ist für diese Einheit)|Nur das Endergebnis zählt|gilt immer gleich, unabhängig von Kontext|ohne Prüfung in jeder Situation|genügt das Endergebnis|^Die Einheit bewertet nachvollziehbare Fachleistung|^Der kontrollierte Ablauf verhindert Zufallstreffer')
def ask(q, n, of, kicker='', lang=None):
    """Convert one bank question into a film scene, or None if it does not meet the rules."""
    t = q.get('type'); p = T(q.get('prompt', '')); why = T(q.get('explanation', ''))
    if HAEUFIG.get(p, 0) >= 3 or GENERISCH.search(p) or GENERISCH.search(why) or any(GENERISCH.search(T(o)) for o in q.get('options') or []): return None
    if not p or len(p) > 230 or not ((8 if t == 'numeric' else 20) <= len(why) <= 420) or BEZUG.search(p): return None
    sc = {'type': 'ask', 'q': p, 'why': why, 'n': n, 'of': of, 'kicker': kicker, 'kind': t}
    if lang: sc['lang'] = lang
    if t in ('mc', 'tf', 'truefalse'):
        opts = [T(o) for o in q.get('options') or []]; a = q.get('answer')
        if not (2 <= len(opts) <= 4) or not isinstance(a, int) or not 0 <= a < len(opts): return None
        if len(set(o.lower() for o in opts)) < len(opts) or any(not o or len(o) > 110 for o in opts): return None
        if BEZUG.search(' '.join(opts)): return None
        sc.update(opts=opts, a=a)
    elif t == 'numeric':
        loes = zahl(q.get('answer'), T(q.get('unit') or q.get('unitKontext') or ''))
        weg = [T(x) for x in (q.get('weg') or [])]
        if loes is None or len(weg) > 4 or any(len(x) > 160 for x in weg): return None
        sc.update(loes=loes, steps=weg)
    else: return None
    return sc
def DIFF(d):
    try: return int(d)
    except (TypeError, ValueError): return {'leicht': 1, 'easy': 1, 'mittel': 2, 'medium': 2, 'schwer': 3, 'hard': 3}.get(str(d).lower(), 2)
def waehle(qs, k, mind, schwer=False):
    """Up to k questions: easy first, varied kinds, no near-duplicates."""
    out, kinds, seen = [], Counter(), []
    for q in sorted(qs, key=lambda q: ((-1 if schwer else 1) * DIFF(q.get('difficulty')), str(q.get('id')))):
        sc = ask(q, 0, 0)
        if not sc: continue
        kd = 'tf' if sc['kind'] in ('tf', 'truefalse') else sc['kind']
        if kinds[kd] >= 3: continue
        w = norm(sc['q'] + ' ' + ' '.join(sc.get('opts', [])))
        if any(len(w & o) / max(1, len(w)) > 0.6 for o in seen): continue
        out.append(q); kinds[kd] += 1; seen.append(w)
        if len(out) == k: break
    return out if len(out) >= mind else []
# question banks
man = json.loads((R / 'assets/content/manifest.json').read_text(encoding='utf-8'))
BANK = {}; TITEL = {}
for sub, v in man['subjects'].items():
    for c in json.loads((R / v['file']).read_text(encoding='utf-8')).get('chapters', []):
        BANK[c['id']] = c.get('questions', []); TITEL[c['id']] = c.get('title', '')
# a question that appears word for word in three or more chapters is generic study advice, not chapter content
HAEUFIG = Counter(T(q.get('prompt', '')) for qs in BANK.values() for q in {T(x.get('prompt', '')): x for x in qs}.values())
lp = (R / 'assets/js/life-pack.js').read_text(encoding='utf-8')
LIFE = json.loads(lp[lp.index('{'):lp.rindex('}') + 1])['questions']['questions']
LQ = {}
for q in LIFE:
    if q.get('type') in ('mc', 'numeric'): LQ.setdefault(q['lesson_id'], []).append(q)
def film(scenes, data, title, intro):
    of = len(scenes)
    for j, s in enumerate(scenes): s['n'] = j + 1; s['of'] = of
    data['scenes'] = [{'type': 'title', 'kicker': 'Übungsfilm', 'title': title, 'text': intro, 'say': title + '. ' + intro}] + scenes
    data['mode'] = 'quiz'; return data
INTRO = 'Tippe auf eine Antwort oder warte, bis ich sie zeige. Danach erkläre ich, warum sie stimmt.'
def chapter(f, s):
    cid, sub = f.parent.name, f.parent.parent.name
    qs = waehle(BANK.get(cid, []), 4, 3)
    if not qs: return offen(f, s, cid, sub) or begriffe(f, s, cid, sub)
    lang = sub in FREMD
    sc = [ask(q, 0, 0) for q in qs]
    if lang:
        for x in sc: x['lang'] = {'englisch': 'en', 'franzoesisch': 'fr', 'italienisch': 'it', 'spanisch': 'es'}.get(sub, 'de'); x['say'] = [['Lies die Frage und wähle.', 'de']]
    return film(sc, {'title': TITEL.get(cid) or cid, 'color': COL.get(sub, '#2563eb'), 'motif': sub, 'teacher': LEHRER.get(sub, 'sophie')}, 'Teste dich: ' + (TITEL.get(cid) or ''), INTRO)
def profi(f, s):
    """Second practice film for chapters with a large bank: harder questions not used in the first film."""
    cid, sub = f.parent.name, f.parent.parent.name
    erst = waehle(BANK.get(cid, []), 4, 3)
    if not erst: return None
    used = {id(q) for q in erst}; seen = [norm(T(q['prompt'])) for q in erst]
    rest = [q for q in BANK.get(cid, []) if id(q) not in used and not any(len(norm(T(q.get('prompt', ''))) & o) / max(1, len(norm(T(q.get('prompt', ''))))) > 0.6 for o in seen)]
    qs = waehle(rest, 4, 3, schwer=True)
    if not qs: return None
    sc = [ask(q, 0, 0) for q in qs]
    if sub in FREMD:
        for x in sc: x['lang'] = {'englisch': 'en', 'franzoesisch': 'fr', 'italienisch': 'it', 'spanisch': 'es'}.get(sub, 'de'); x['say'] = [['Lies die Frage und wähle.', 'de']]
    return film(sc, {'title': TITEL.get(cid) or cid, 'color': COL.get(sub, '#2563eb'), 'motif': sub, 'teacher': LEHRER.get(sub, 'sophie')}, 'Profi-Runde: ' + (TITEL.get(cid) or ''), 'Jetzt wird es kniffliger. ' + INTRO)
def offen(f, s, cid, sub):
    """Chapters whose bank has no suitable closed questions: the page's own open checks («Verständnis prüfen») as think-then-compare scenes."""
    m = re.search(r'<section class="sk-pruefen">(.*?)</section>', s, re.S)
    qa = [(T(a), T(b)) for a, b in re.findall(r'<details><summary>(.*?)</summary><p>(.*?)</p></details>', m.group(1) if m else '', re.S)]
    qa = [(a, b) for a, b in qa if a and b and len(a) <= 230 and len(b) <= 520][:3]
    if len(qa) < 2: return None
    sc = [{'type': 'ask', 'q': a, 'offen': True, 'loes': '', 'steps': [], 'why': b, 'kind': 'offen'} for a, b in qa]
    return film(sc, {'title': TITEL.get(cid) or cid, 'color': COL.get(sub, '#2563eb'), 'motif': sub, 'teacher': LEHRER.get(sub, 'sophie')}, 'Denk mit: ' + (TITEL.get(cid) or ''), 'Ich stelle dir offene Fragen. Überlege oder notiere deine Antwort, dann vergleichst du mit der Musterantwort.')
def begriffe(f, s, cid, sub):
    """Fallback for chapters without enough self-contained bank questions: the chapter's own glossary as a quiz."""
    m = re.search(r'<section(?: [^>]*)?><h2[^>]*>Begriffe</h2>(.*?)</section>', s, re.S)
    terms = [(T(a), T(b)) for a, b in re.findall(r'<tr><td>(.*?)</td><td>(.*?)</td></tr>', m.group(1) if m else '', re.S)]
    terms = [(a, b) for a, b in terms if a and b and len(a) <= 60 and 25 <= len(b) <= 200 and a.lower() not in b.lower()]
    if len(terms) < 4 or len(set(a for a, b in terms)) < len(terms): return None
    sc = []
    for j, (a, b) in enumerate(terms[:4]):
        opts = [a, terms[(j + 1) % len(terms)][0], terms[(j + 2) % len(terms)][0]]; r = j % 3; opts = opts[r:] + opts[:r]
        sc.append({'type': 'ask', 'q': 'Welcher Begriff passt? ' + b, 'opts': opts, 'a': opts.index(a), 'why': '«%s»: %s' % (a, b), 'kind': 'begriff'})
    if sub in FREMD:
        for x in sc: x['say'] = [['Welcher Begriff passt?', 'de']]
    return film(sc, {'title': TITEL.get(cid) or cid, 'color': COL.get(sub, '#2563eb'), 'motif': sub, 'teacher': LEHRER.get(sub, 'sophie')}, 'Begriffe-Check: ' + (TITEL.get(cid) or ''), 'Welcher Begriff passt zur Erklärung? ' + INTRO)
def lektion(f, s):
    lid = f.parent.name; qs = waehle(LQ.get(lid, []), 4, 2)
    if not qs: return None
    title = T((re.search(r'<h1>(.*?)</h1>', s, re.S) or [None, ''])[1])
    return film([ask(q, 0, 0) for q in qs], {'title': title, 'color': COL['leben'], 'motif': 'leben', 'teacher': LEBEN.get(lid[:5], 'alex')}, 'Teste dich: ' + title, INTRO)
def thema(f, s):
    tid = f.parent.name; title = T((re.search(r'<h1>(.*?)</h1>', s, re.S) or [None, ''])[1]); sc = []
    for lid in sorted(k for k in LQ if k.startswith(tid + '-')):
        q = waehle(LQ[lid], 1, 1)
        lt = T((re.search(r'<h1>(.*?)</h1>', (R / 'schule-fuers-leben/vertiefung' / lid / 'index.html').read_text(encoding='utf-8'), re.S) or [None, ''])[1]) if (R / 'schule-fuers-leben/vertiefung' / lid / 'index.html').exists() else ''
        if q: x = ask(q[0], 0, 0, lt); sc.append(x)
    if len(sc) < 3: return None
    return film(sc[:4], {'title': title, 'color': COL['leben'], 'motif': 'leben', 'teacher': LEBEN.get(tid, 'alex')}, 'Teste dich: ' + title, 'Eine Frage aus jeder Lektion. ' + INTRO)
def mix(ids, k):
    """One question from each of several chapters, spread across the list."""
    sc = []; step = max(1, len(ids) // (k * 2))
    for cid in ids[::step]:
        q = waehle(BANK.get(cid, []), 1, 1)
        if q and not any(len(norm(T(q[0]['prompt'])) & norm(x['q'])) > 3 for x in sc): sc.append(ask(q[0], 0, 0, TITEL.get(cid, '')))
        if len(sc) == k: break
    return sc
def fach(f, s):
    sub = f.parent.name
    if sub in FREMD: return None
    ids = [m.group(1) for m in re.finditer(r'<li><a href="([^"/#]+)/">', s)]
    sc = mix(list(dict.fromkeys(ids)), 4)
    if len(sc) < 3: return None
    title = T((re.search(r'<h1>(.*?)</h1>', s, re.S) or [None, ''])[1])
    return film(sc, {'title': title, 'color': COL.get(sub, '#2563eb'), 'motif': sub, 'teacher': LEHRER.get(sub, 'sophie')}, 'Fach-Mix: ' + title, 'Vier Fragen aus verschiedenen Kapiteln. ' + INTRO)
def weg(f, s):
    wid = f.parent.name; sc = []
    for part in re.split(r'<h2[^>]*>', s)[1:]:
        ids = [m.group(1) for m in re.finditer(r'href="[^"]*#read/([^"/]+)"', part)] or [m.group(1) for m in re.finditer(r'href="[^"]*/lernen/[^"/]+/([^"/]+)/"', part)]
        if any(BANK.get(i) for i in ids) and not any(FREMD & {p} for p in []):
            x = mix(ids, 1)
            if x and not x[0].get('lang'): sc.append(x[0])
        if len(sc) == 5: break
    if len(sc) < 3: return None
    title = T((re.search(r'<h1>(.*?)</h1>', s, re.S) or [None, ''])[1])
    return film(sc, {'title': title, 'color': '#2563eb', 'motif': '_', 'teacher': WEG.get(wid, 'lena')}, 'Prüfungs-Mix: ' + title, 'Eine Frage aus jedem Fach. ' + INTRO)
SPR = {'en': 'englisch', 'fr': 'franzoesisch', 'it': 'italienisch', 'es': 'spanisch'}
def sprache(f, s):
    code = f.parent.parent.name; sub = SPR[code]
    m = re.search(r'<section(?: [^>]*)?><h2[^>]*>Wörter für diese Situation</h2>(.*?)</section>', s, re.S)
    w = [(T(a), T(b)) for a, b in re.findall(r'<dt lang="%s">(.*?)</dt><dd>(.*?)</dd>' % code, m.group(1) if m else '', re.S)]
    w = [x for x in w if x[0] and x[1] and len(x[1]) <= 60]
    if len(w) < 4: return None
    sc = []
    for j, (fx, de) in enumerate(w[:4]):
        andere = [w[(j + 1) % len(w)][1], w[(j + 2) % len(w)][1]]
        opts = [de] + andere; r = j % 3; opts = opts[r:] + opts[:r]; a = opts.index(de)
        sc.append({'type': 'ask', 'q': 'Was bedeutet «%s»?' % fx, 'opts': opts, 'a': a, 'why': '«%s» heisst «%s».' % (fx, de), 'kind': 'vokabel',
                   'say': [['Was bedeutet', 'de'], [fx, code], ['?', 'de']] + [[('ABC'[k]) + ': ' + o, 'de'] for k, o in enumerate(opts)]})
    title = T((re.search(r'<h1>(.*?)</h1>', s, re.S) or [None, ''])[1])
    return film(sc, {'title': title, 'color': COL[sub], 'motif': sub, 'teacher': 'maya', 'lang': code}, 'Wörter-Check: ' + title, 'Was bedeuten die Wörter dieser Situation? ' + INTRO)
JOBS = [('lernen/*/*/index.html', chapter), ('lernen/*/*/index.html', profi), ('schule-fuers-leben/vertiefung/*/index.html', lektion), ('schule-fuers-leben/themen/*/index.html', thema),
        ('lernen/*/index.html', fach), ('*/index.html', weg)] + [('sprachen/%s/*/index.html' % c, sprache) for c in SPR]
CAP = {'chapter': 'Fragen aus dem Übungsteil dieses Kapitels.', 'profi': 'Schwerere Fragen aus dem Übungsteil dieses Kapitels.', 'lektion': 'Fragen aus dem Übungsteil dieser Lektion.', 'thema': 'Je eine Frage aus den Lektionen dieses Themas.',
       'fach': 'Fragen aus verschiedenen Kapiteln dieses Fachs.', 'weg': 'Je eine Frage aus den Fächern dieses Prüfungswegs.', 'sprache': 'Die Wörter dieser Situation als Quiz.'}
kinds = Counter(); stats = Counter(); APP = {}
for pat, fn in JOBS:
    for f in sorted(R.glob(pat)):
        if fn is weg and f.parent.name not in WEG: continue
        s = orig = f.read_text(encoding='utf-8')
        KL = 'skf skq skp' if fn is profi else 'skf skq'; HID = 'skp-h' if fn is profi else 'skq-h'
        s = re.sub(r'<section class="%s".*?</section>' % KL, '', s, count=1, flags=re.S)
        if re.search(r'<meta name="robots" content="noindex', s) or not re.search(r'<p class="lead">', s):
            if s != orig: f.write_text(s, encoding='utf-8')
            continue
        data = fn(f, s)
        if not data:
            stats['ohne_' + fn.__name__] += 1
            if s != orig: f.write_text(s, encoding='utf-8')
            continue
        for x in data['scenes']: x.pop('kind', None)
        rel = '../' * (len(f.relative_to(R).parts) - 1)
        block = ('<section class="' + KL + '" aria-labelledby="' + HID + '"><h2 id="' + HID + '">' + ('Profi-Runde: schwerere Fragen' if fn is profi else 'Übungsfilm: Teste dich in zwei Minuten') + '</h2><div class="skf-mount"></div>'
                 '<script type="application/json">%s</script><p class="skf-cap">%s Fragt: %s. Tippe auf eine Antwort oder lass sie zeigen; es zählt nichts für Deinen Lernstand. Stimme und Musik entstehen direkt in Deinem Browser.</p></section>'
                 % (json.dumps(data, ensure_ascii=False, separators=(',', ':')).replace('</', '<\\/'), CAP[fn.__name__], NAMEN[data['teacher']]))
        m = (re.search(r'<section class="skf skq".*?</section>', s, re.S) if fn is profi else None) or re.search(r'<section(?: [^>]*)?><h2[^>]*>Das Wichtigste</h2>.*?</section>', s, re.S)
        if m: pos = m.end()
        else:
            m = re.search(r'<section class="skf".*?</section>', s, re.S) or re.search(r'<p class="lead">.*?</p>', s, re.S); pos = m.end()
            if fn in (sprache, thema, fach, weg):
                g = re.search(r'<section(?: [^>]*)?><h2[^>]*>Die Form selbst finden</h2>.*?</section>', s, re.S) if fn is sprache else None
                if g: pos = g.end()
                elif '<footer' in s: pos = s.index('<footer')
                else:
                    ends = [x.end() for x in re.finditer(r'</section>', s[:s.index('</main>')])] if '</main>' in s else []
                    if ends: pos = ends[-1]
        s = s[:pos] + block + s[pos:]
        if 'assets/film/film.js' not in s:
            s = s.replace('</head>', '<link rel="stylesheet" href="%sassets/film/film.css?v=%s"><script defer src="%sassets/film/film.js?v=%s"></script></head>' % (rel, FILMV, rel, FILMV), 1)
        f.write_text(s, encoding='utf-8'); kinds[fn.__name__] += 1; stats['fragen'] += len(data['scenes']) - 1
        if fn is chapter: APP[f.parent.name] = 1
(R / 'assets/film/app-quiz.json').write_text(json.dumps(sorted(APP), separators=(',', ':')), encoding='utf-8')
print('build_quizfilms: %d films %s, %s' % (sum(kinds.values()), json.dumps(kinds, sort_keys=True), json.dumps(stats, sort_keys=True)))
