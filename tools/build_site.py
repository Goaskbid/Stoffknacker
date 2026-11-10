#!/usr/bin/env python3
"""Rebuild the local candidate. No deployment, approvals or external requests."""
from pathlib import Path
import argparse,subprocess,sys
p=argparse.ArgumentParser();p.add_argument('root',type=Path);p.add_argument('--evidence',type=Path,required=True);a=p.parse_args();r=a.root.resolve();o=a.evidence.resolve();o.mkdir(parents=True,exist_ok=True)
t=Path(__file__).resolve().parent
for name,args in [('build_reading_pages.py',[r]),('build_languages.py',[r,o]),('build_publication.py',[r,o]),('finalize_release179.py',[r,'--out',o])]:
 subprocess.run([sys.executable,str(t/name),*map(str,args)],check=True)
print('Local rebuild complete. Publication/rights approval and deployment remain separate.')
