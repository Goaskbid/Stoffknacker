#!/usr/bin/env python3
"""Finalize shell hashes after all content and UI changes. No deployment.
Preserves owner configuration and does not claim review or native-upgrade success.
"""
from pathlib import Path
import argparse,hashlib,json,subprocess,sys
p=argparse.ArgumentParser();p.add_argument('site',type=Path);p.add_argument('--out',type=Path,required=True);a=p.parse_args();r=a.site.resolve();o=a.out.resolve()
# Use the uploaded, inspectable r182 dependency rehasher, then repair metadata.
subprocess.run([sys.executable,str(r/'tools/finalize_release182.py'),str(r),'--out',str(o)],check=True)
info=json.loads((r/'build-info.json').read_text());cat=json.loads((r/'assets/content/language-catalog.json').read_text());metrics=json.loads((o/'build-metrics.json').read_text());source=json.loads((r/'release-provenance183.json').read_text()) if (r/'release-provenance183.json').is_file() else {}
info.update(date='2026-11-14',release='r190',candidate='r190-math-round3',build='121.21-r190',status='REFERENCE_ONLY_NOT_FOR_DEPLOYMENT' if source.get('reference_only') else 'CANDIDATE_PENDING_RELEASE_GATE',based_on='r189 plus ChatGPT round-3 mathematics corrections (37 findings)' if not source.get('reference_only') else 'r179 reference plus supplied r182 delta; four current runtime files unavailable',source_sha256=source.get('delta_sha256'),language_count=len(cat),language_units=sum(x['units'] for x in cat.values()),language_records=sum(x['records'] for x in cat.values()),architecture='32 on-demand academic packs; four active foreign-language courses; retired history preserved',deployed=False,retired_courses=['pt','nl','sv','nb'])
info['build_sha256_prefix']=metrics['build'];(r/'build-info.json').write_text(json.dumps(info,ensure_ascii=False,indent=2)+'\n')
sw=(r/'sw.js').read_text().replace('stoffknacker-r182-','stoffknacker-r190-').replace('/* r182.','/* r190.');(r/'sw.js').write_text(sw)
import re as _re
_sw=(r/'sw.js').read_text();_m=_re.search(r'const SHELL=(\[.*?\]);',_sw)
_shell=json.loads(_m.group(1));_extra=['./'+u for u in sorted(set(_re.findall(r'url\(["\']?(assets/start/[0-9a-f]{16}\.\w+)',(r/'index.html').read_text())))]
for _u in _extra:
    if not (r/_u[2:]).is_file():raise SystemExit('missing '+_u)
    if _u not in _shell:_shell.append(_u)
(r/'sw.js').write_text(_sw.replace(_m.group(0),'const SHELL='+json.dumps(_shell,separators=(',',':'))+';',1))
for _ in range(3):
 files=sorted(x for x in r.rglob('*') if x.is_file() and '__pycache__' not in x.parts)
 (r/'DATEILISTE.txt').write_text('Stoffknacker r190 release candidate. '+str(len(files))+' files. NOT DEPLOYED.\n'+''.join(str(f.relative_to(r)).ljust(105)+' '+str(f.stat().st_size)+'\n' for f in files))
print('r190 finalized:',metrics['build'],'active languages:',','.join(cat))
