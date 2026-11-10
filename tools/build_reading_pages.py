#!/usr/bin/env python3
"""Rebuild the imported publication source, with fail-closed runtime revision checks.
This is an explicit editorial HTML source, not a claim that arbitrary JS records
are automatically publishable. Runtime text changes invalidate the source revision.
"""
from pathlib import Path
import json,gzip,hashlib,argparse
p=argparse.ArgumentParser();p.add_argument('root',type=Path);a=p.parse_args();r=a.root
src=json.loads(gzip.decompress((r/'tools/source/reading-pages.json.gz').read_bytes()))
changed=[]
for path,expected in src['runtime_revision'].items():
 f=r/path
 if not f.is_file() or hashlib.sha256(f.read_bytes()).hexdigest()!=expected:changed.append(path)
if changed:raise SystemExit('Publication source requires editorial reconciliation with changed runtime: '+', '.join(changed))
for row in src['pages']:
 f=r/row['path']
 if not f.resolve().is_relative_to(r.resolve()):raise SystemExit('Unsafe publication path')
 f.parent.mkdir(parents=True,exist_ok=True);f.write_text(row['html'])
print('Rebuilt',len(src['pages']),'versioned reading pages; no content/rights approval inferred.')
