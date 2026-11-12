#!/usr/bin/env python3
"""Rehash dependency references before the shell, then regenerate its waiting SW.
No publishing, network calls, skipWaiting or client takeover.
"""
from pathlib import Path
from html.parser import HTMLParser
from html import escape
from urllib.parse import urlsplit
import hashlib,json,gzip,re,argparse
p=argparse.ArgumentParser();p.add_argument('site',type=Path);p.add_argument('--out',type=Path,required=True);a=p.parse_args();r=a.site.resolve();a.out.mkdir(parents=True,exist_ok=True)
preview=json.loads((r/'preview-info.json').read_text()).get('preview_prefix','') if (r/'preview-info.json').exists() else ''
def localpath(path):
 if preview and path.startswith(preview):path=path[len(preview):]
 return r/path.lstrip('/')
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
helpers=['life-core','life-basics','life-player','motor','bilder','lesen','vertiefung','lernkit']
for f in (r/'assets/runtime').glob('*.js'):
 t=f.read_text();n=t
 for h in helpers:n=re.sub(r'(assets/js/'+h+r'\.js\?v=)[a-f0-9]+',lambda m:m[1]+sha(r/'assets/js'/f'{h}.js')[:12],n)
 if n!=t:f.write_text(n)
class Resources(HTMLParser):
 def __init__(self,text):
  super().__init__(convert_charrefs=True);self.text=text;self.refs=[];self.line_offsets=[0]
  for line in text.splitlines(keepends=True):self.line_offsets.append(self.line_offsets[-1]+len(line))
  self.feed(text)
 def handle_starttag(self,tag,attrs):
  d=dict(attrs);attr='src' if tag=='script' else 'href' if tag=='link' and d.get('rel')=='stylesheet' else None
  if attr and d.get(attr):
   line,col=self.getpos();self.refs.append((self.line_offsets[line-1]+col,self.get_starttag_text(),attr,d[attr]))
for f in r.rglob('*.html'):
 text=f.read_text();replacements=[]
 for pos,tag,attr,value in Resources(text).refs:
  u=urlsplit(value);target=localpath(u.path) if u.path.startswith('/') else f.parent/u.path
  if not u.netloc and target.is_file():
   value=u.path+'?v='+sha(target)[:12]
   nt=re.sub(r'('+attr+r'\s*=\s*)([\"\'])(.*?)\2',lambda m:m[1]+m[2]+escape(value,quote=True)+m[2],tag,count=1,flags=re.S|re.I)
   if nt!=tag:replacements.append((pos,len(tag),nt))
 for pos,length,tag in reversed(replacements):text=text[:pos]+tag+text[pos+length:]
 if replacements:f.write_text(text)
paths=[]
for pos,tag,attr,value in Resources((r/'index.html').read_text()).refs:
 if not urlsplit(value).netloc:paths.append('./'+(value[len(preview):] if preview and value.startswith(preview) else value.lstrip('/')))
paths+=['./assets/js/'+h+'.js?v='+sha(r/'assets/js'/f'{h}.js')[:12] for h in helpers]
paths+=['./assets/css/publication179.css?v='+sha(r/'assets/css/publication179.css')[:12]]
paths+=['./index.html','./manifest.webmanifest','./assets/icon-180.png','./assets/icon-192.png','./assets/icon-512.png','./datenschutz/','./impressum/','./nutzungsbedingungen/','./barrierefreiheit/','./lernqualitaet/']
paths=list(dict.fromkeys(paths));metrics=[]
for path in paths:
 f=r/urlsplit(path).path.removeprefix('./');f=f/'index.html' if f.is_dir() else f
 if not f.is_file():raise RuntimeError('Missing shell '+str(f))
 raw=f.read_bytes();metrics.append({'path':str(f.relative_to(r)),'bytes':len(raw),'gzip_bytes':len(gzip.compress(raw,mtime=0)),'sha256':sha(f)})
build=hashlib.sha256(json.dumps(metrics,sort_keys=True).encode()).hexdigest()[:16]
sw=(r/'sw.js').read_text();sw=re.sub(r'const VERSION=.*?;', 'const VERSION='+json.dumps('stoffknacker-r182-'+build)+';',sw,count=1);sw=re.sub(r'const SHELL=\[.*?\];','const SHELL='+json.dumps(paths,separators=(',',':'))+';',sw,count=1)
if 'const languageRoute=' not in sw:
 anchor='return Response.redirect(target.href,302);'
 replacement="const languageRoute=path.match(/^sprachen\\/(en|fr|it|es|pt|nl|sv|nb)\\/(?:([a-z]+)\\/)?(?:index\\.html)?$/);if(languageRoute){target.searchParams.set('kurs',languageRoute[1]);if(languageRoute[2]&&['greetings','people','numbers','time','food','travel','city','shopping','home','school','work','feelings'].includes(languageRoute[2]))target.searchParams.set('lektion',languageRoute[1]+'-r179-a1-'+languageRoute[2]+'-use');}return Response.redirect(target.href,302);"
 assert anchor in sw;sw=sw.replace(anchor,replacement)
sw=sw.replace('/* r177.','/* r182.').replace('/* r179.','/* r182.').replace('/* r181.','/* r182.').replace('/* r180.','/* r182.');(r/'sw.js').write_text(sw)
# Preserve all existing build fields, replace only this release's factual metadata.
f=r/'build-info.json';info=json.loads(f.read_text()) if f.exists() else {};info.update({'candidate':'r182','build':'121.14-r182','based_on':'r181 live = stoffknacker_github_beta_r180.zip (source_sha256) + index/sw/build-info repair','source_sha256':'78576769a69c2f7132cb6dd5b9cae730fe6410d1ae59014179077f90c12750e7','architecture':'32 on-demand academic subject packs, eight language packs, topic-first home and a unified language workspace','release':'r182','build_sha256_prefix':build,'created':'2026-11-12','deployed':False,'language_count':8,'language_units':1234,'language_records':12784,'independent_content_approval':'pending','native_upgrade_test':'BLOCKED_IN_AUDIT_ENVIRONMENT'});f.write_text(json.dumps(info,ensure_ascii=False,indent=2)+'\n')
# Refresh hashes of the final served page bytes, not an earlier generation stage.
f=a.out/'publication-manifest.json'
if f.exists():
 records=json.loads(f.read_text())
 for row in records:row['sha256']=sha(r/row['path'])
 f.write_text(json.dumps(records,ensure_ascii=False,indent=2))
js=[x for x in metrics if x['path'].endswith('.js') and ('assets/runtime/' in x['path'] or x['path'] in ['assets/js/analytics.js','assets/js/site-config.js','assets/js/sk-leben-index.js','assets/js/release-ui.js'])]
(a.out/'build-metrics.json').write_text(json.dumps({'build':build,'shell_raw':sum(x['bytes'] for x in metrics),'shell_independent_gzip':sum(x['gzip_bytes'] for x in metrics),'root_js_raw':sum(x['bytes'] for x in js),'root_js_independent_gzip':sum(x['gzip_bytes'] for x in js),'shell_resources':metrics,'measurement':'Independent gzip of files, not observed production transfer or latency.'},indent=2))
exclude={'DEPLOY_STOFFKNACKER.sh','fotos_holen.py','fotos_themen.json','rechtsscan.py'}
for _ in range(3):
 files=sorted(p for p in r.rglob('*') if p.is_file() and p.name not in exclude)
 (r/'DATEILISTE.txt').write_text('Stoffknacker r179 candidate: '+str(len(files))+' files. Not deployed.\n'+''.join(str(p.relative_to(r)).ljust(105)+' '+str(p.stat().st_size)+'\n' for p in files))
print('Build',build,'shell gzip estimate',sum(x['gzip_bytes'] for x in metrics),'root JavaScript',sum(x['gzip_bytes'] for x in js))
