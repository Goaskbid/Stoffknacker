#!/usr/bin/env python3
"""r216 build step: remove internal review-status sentences from learner pages (idempotent). Usage: learner_text216.py SITE"""
import sys,re
from pathlib import Path
R=Path(sys.argv[1]).resolve()
PAT=[(r'Redaktioneller Stand: [^.<"]*?(?:offen|ausstehend)\. ?',''),
     (r'Stand: Lerninhalt von Stoffknacker, fachliche Prüfung ausstehend\. ?','Lerninhalt von Stoffknacker. '),
     (r'Unabhängige Fachprüfung ausstehend\. ?',''),
     (r'Profil- und Versionsnachweis ausstehend, ','')]
n=0
for f in sorted(R.rglob('*.html')):
    rel=f.relative_to(R).as_posix()
    if rel.startswith(('tools/','.github/')):continue
    s=f.read_text(encoding='utf-8');t=s
    for a,b in PAT:t=re.sub(a,b,t)
    if t!=s:f.write_text(t,encoding='utf-8');n+=1
print('learner_text216: pages cleaned',n)
