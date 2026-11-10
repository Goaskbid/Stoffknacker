#!/usr/bin/env python3
"""Validate explicit signed publication decisions against current page hashes.
Does not invent approvals, overwrite production sitemaps, or certify rights.
CSV columns: url,sha256,decision,approved_by,approved_at,rights_basis,content_scope
"""
from pathlib import Path
from urllib.parse import urlsplit
import argparse,json,csv,hashlib,xml.etree.ElementTree as ET
p=argparse.ArgumentParser();p.add_argument('--site',type=Path,required=True);p.add_argument('--manifest',type=Path,required=True);p.add_argument('--decisions',type=Path,required=True);p.add_argument('--out',type=Path,required=True);a=p.parse_args();a.out.mkdir(parents=True,exist_ok=True)
idx={x['url']:x for x in json.loads(a.manifest.read_text())};rows=list(csv.DictReader(a.decisions.open()));approved=[];bad=[];seen=set()
for r in rows:
 u=r.get('url','');m=idx.get(u)
 if u in seen:bad.append({'url':u,'reason':'duplicate decision'});continue
 seen.add(u)
 if not m:bad.append({'url':u,'reason':'unknown URL'});continue
 if r.get('decision')!='approve':continue
 f=(a.site/m['path']).resolve()
 if not f.is_relative_to(a.site.resolve()) or not f.is_file():bad.append({'url':u,'reason':'invalid path'});continue
 digest=hashlib.sha256(f.read_bytes()).hexdigest()
 if any(not r.get(k,'').strip() for k in ['approved_by','approved_at','rights_basis','content_scope']) or r.get('sha256')!=digest or m['sha256']!=digest:bad.append({'url':u,'reason':'missing named approval/rights scope or stale page hash'});continue
 approved.append(r)
if bad or not approved:
 (a.out/'rejected.json').write_text(json.dumps({'errors':bad,'approved_count':len(approved),'sitemap_written':False},indent=2));raise SystemExit('No approved sitemap written: resolve missing/stale decisions.')
root=ET.Element('urlset',xmlns='http://www.sitemaps.org/schemas/sitemap/0.9')
for r in approved:ET.SubElement(ET.SubElement(root,'url'),'loc').text=r['url']
ET.ElementTree(root).write(a.out/'approved-sitemap.xml',encoding='utf-8',xml_declaration=True)
(a.out/'approved-decisions.json').write_text(json.dumps(approved,indent=2,ensure_ascii=False));print('Wrote',len(approved),'explicitly approved URLs. Production unchanged.')
