#!/usr/bin/env python3
"""Rebuild from the full repository; no network, publishing or approval claims."""
from pathlib import Path
import argparse,re,subprocess,sys
p=argparse.ArgumentParser();p.add_argument('root',type=Path);p.add_argument('--evidence',type=Path,required=True);a=p.parse_args();r=a.root.resolve();o=a.evidence.resolve();o.mkdir(parents=True,exist_ok=True);t=Path(__file__).resolve().parent
for name,args in [('enforce_language_scope183.py',[r,'--out',o]),('build_reading_pages.py',[r]),('build_publication.py',[r,o]),('enforce_language_scope183.py',[r,'--out',o]),('seo_enhance.py',[r]),('build_sitemap.py',[r,'--date',re.search(r"date='(\d{4}-\d\d-\d\d)'",(Path(__file__).parent/'finalize_release191.py').read_text()).group(1)]),('finalize_release191.py',[r,'--out',o]),('validate_sitemap.py',[r])]:subprocess.run([sys.executable,str(t/name),*map(str,args)],check=True)
print('Existing retained language payloads were not regenerated. Local r191 build complete. Exact release checks and owner decisions remain separate.')
