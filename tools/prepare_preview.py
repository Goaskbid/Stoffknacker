#!/usr/bin/env python3
"""Prepare an explicitly selected, public noindex GitHub Pages preview.
Noindex is not access control. Never use a preview for private learner information.
Works on an existing extracted deployment copy, not a Git repository; no network.
"""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit
import argparse,re,json
p=argparse.ArgumentParser();p.add_argument('root',type=Path);p.add_argument('--prefix',required=True);a=p.parse_args();r=a.root.resolve();prefix=a.prefix
if not re.fullmatch(r'/[A-Za-z0-9._-]+/',prefix):raise SystemExit('Expected /repository-name/')
if not (r/'index.html').is_file():raise SystemExit('Not a site')
meta=re.compile(r'<meta\b(?=[^>]*\bname\s*=\s*["\']?robots\b)[^>]*>',re.I);head=re.compile(r'<head\b[^>]*>',re.I)
class Robots(HTMLParser):
 def __init__(self):super().__init__();self.values=[]
 def handle_starttag(self,t,attrs):
  d={k.lower():(v or '') for k,v in attrs}
  if t.lower()=='meta' and d.get('name','').lower()=='robots':self.values.append(d.get('content','').lower())
bad=[];count=0
for f in r.rglob('*.html'):
 s=meta.sub('',f.read_text());m=head.search(s)
 if not m:bad.append(str(f.relative_to(r)));continue
 s=s[:m.end()]+'<meta name="robots" content="noindex,nofollow">'+s[m.end():]
 # Only root-relative HTML attributes; never change full canonical or vendor URLs.
 s=re.sub(r'(\b(?:href|src|action)\s*=\s*["\'])(/(?!/)[^"\']*)',lambda m:m[1]+(m[2] if m[2].startswith(prefix) else prefix+m[2].lstrip('/')),s,flags=re.I)
 f.write_text(s);h=Robots();h.feed(s);count+=1
 if not h.values or any('noindex' not in v for v in h.values):bad.append(str(f.relative_to(r)))
# Known same-site literal links created by JavaScript need the same base.
for name in ['assets/js/analytics.js','assets/runtime/legal-ready.js']:
 f=r/name;s=f.read_text()
 for path in ['datenschutz','impressum','nutzungsbedingungen','barrierefreiheit','lernqualitaet']:
  s=s.replace('href="/'+path+'/', 'href="'+prefix+path+'/').replace('href=\\"/'+path+'/', 'href=\\"'+prefix+path+'/')
 f.write_text(s)
f=r/'assets/js/site-config.js';s=f.read_text()
s=re.sub(r'(analytics:\s*Object\.freeze\(\{enabled:\s*)true',r'\1false',s)
s=re.sub(r'(ads:\s*Object\.freeze\(\{enabled:\s*)true',r'\1false',s);f.write_text(s)
# Remove production domain only in this explicitly prepared preview copy.
(r/'CNAME').unlink(missing_ok=True)
(r/'preview-info.json').write_text(json.dumps({'preview_prefix':prefix,'optional_services':'disabled','access_control':False},indent=2))
print(json.dumps({'preview_prefix':prefix,'html_checked':count,'failures':bad,'tracking':'disabled','privacy':'public, not access controlled'}))
if bad or not count:raise SystemExit(1)
