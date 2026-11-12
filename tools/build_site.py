#!/usr/bin/env python3
"""Rebuild from the full repository; no network, publishing or approval claims."""
from pathlib import Path
import argparse,subprocess,sys
p=argparse.ArgumentParser();p.add_argument('root',type=Path);p.add_argument('--evidence',type=Path,required=True);a=p.parse_args();r=a.root.resolve();o=a.evidence.resolve();o.mkdir(parents=True,exist_ok=True);t=Path(__file__).resolve().parent
for name,args in [('enforce_language_scope183.py',[r,'--out',o]),('build_reading_pages.py',[r]),('build_publication.py',[r,o]),('enforce_language_scope183.py',[r,'--out',o]),('finalize_release183.py',[r,'--out',o])]:subprocess.run([sys.executable,str(t/name),*map(str,args)],check=True)
print('Existing retained language payloads were not regenerated. Local r183 build complete. Exact release checks and owner decisions remain separate.')
