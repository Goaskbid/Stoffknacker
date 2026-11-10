#!/usr/bin/env python3
"""Build content-addressed language packs and full per-record coverage manifest.
Existing records and unit identifiers remain unchanged. r178 extension IDs are
reproduced verbatim; originals retain their existing provenance and rights.
"""
from pathlib import Path
import json,re,hashlib,sys,collections,copy
import sys
sys.dont_write_bytecode=True
from foundation_content import authored,LANGS,NAMES

def dumps(x):return json.dumps(x,ensure_ascii=False,separators=(',',':'))
def slug(x):return re.sub('[^a-z0-9]+','',str(x or 'x').lower())[:16] or 'x'
def allunits(bank,base,l):
    used={i for u in base for i in u['ids']};ext=[];groups={}
    rest=lambda k:sorted([x for x in bank[k] if x['id'] not in used],key=lambda x:x['id'])
    for x in rest('s'):
        key=(x.get('lvl')or'A2')+'|'+(x.get('topic')or'allgemein');groups.setdefault(key,[]).append(x)
    for key in sorted(groups):
        lv,tp=key.split('|');items=groups[key]
        for i in range(0,len(items),10):
            n=i//10+1;ext.append({'id':f'{l}-xs-{slug(lv)}-{slug(tp)}-{n}','level':lv,'topic':tp,'title':f'Satztraining: {tp} {n}','ziel':f'{len(items[i:i+10])} Modells\u00e4tze verstehen und selbst aufbauen.','vertiefung':True,'ids':[x['id'] for x in items[i:i+10]],'track':'extension','skills':['sentences']})
    dl,gg=rest('d'),rest('g')
    if not ext and (dl or gg):ext.append({'id':f'{l}-xd-1','level':'B1','topic':'dialog','title':'Dialoge und Grammatik','ziel':'Dialoge verstehen und Grammatik anwenden.','vertiefung':True,'ids':[],'track':'extension'})
    left=[]
    for x in dl:
        c=[u for u in ext if (u['level']==x.get('lvl') or not x.get('lvl')) and sum('-d-' in i for i in u['ids'])<2]
        t=[u for u in c if u['topic']==x.get('topic')];z=(t or c)
        if z:z[0]['ids'].append(x['id']);z[0]['dialog']=True
        else:left.append(x)
    for i,x in enumerate(left):
        if ext:ext[i%len(ext)]['ids'].append(x['id']);ext[i%len(ext)]['dialog']=True
    for x in gg:
        c=[u for u in ext if u['level']==(x.get('lvl')or u['level']) and u['topic']==x.get('topic')]
        c=c or [u for u in ext if u['topic']==x.get('topic')] or [u for u in ext if u['level']==x.get('lvl')] or ext
        if c:sorted(c,key=lambda u:len(u['ids']))[0]['ids'].append(x['id'])
    return base+ext

def build(root:Path,out:Path):
    manifest=json.loads((root/'assets/content/manifest.json').read_text());new=authored();coverage=[];report={};catalog={}
    # Idempotence: retain the input pack path in provenance and replace r179 original units by IDs.
    for l in LANGS:
        oldentry=copy.deepcopy(manifest['languages'].get(l));oldsha=oldentry.get('sha256') if oldentry else None
        if oldentry:
            payload=json.loads((root/oldentry['file']).read_text());bank=next(x['value'] for x in payload['pools'] if x['path']==[l] and isinstance(x['value'],dict) and all(k in x['value'] for k in 'vsgd'))
            for k in 'vsgd':bank[k]=[x for x in bank[k] if not x['id'].startswith(l+'-'+k+'-r179-')]
            base=[u for u in payload.get('courseUnits',[]) if not u['id'].startswith(l+'-r179-a1-')]
            # Already persisted extension IDs count as part of the stable base.
            original_units=allunits(bank,base,l)
        else:
            bank={k:[] for k in 'vsgd'};payload={'chapters':[],'registry':{},'pools':[{'pool':'app-36-23','path':[l],'value':bank}],'courseUnits':[]};original_units=[]
        for k in 'vsgd':bank[k]+=new[l]['bank'][k]
        units=new[l]['units']+original_units
        seen=set();idx={x['id']:x for k in 'vsgd' for x in bank[k]}
        assert len(idx)==sum(len(bank[k]) for k in 'vsgd'),l+' duplicate records'
        for u in units:
            if u['id'] in seen:raise ValueError('Duplicate unit ID '+u['id'])
            seen.add(u['id']);u.setdefault('track','original');u.setdefault('skills',sorted({{'v':'vocabulary','s':'sentences','g':'grammar','d':'dialogue'}[k] for k in 'vsgd' if any(i in {x['id'] for x in bank[k]} for i in u['ids'])}));u['ids']=list(dict.fromkeys(u['ids']))
            assert all(i in idx for i in u['ids']),(l,u['id'])
        mapped={i for u in units for i in u['ids']};missing=set(idx)-mapped
        if missing:raise ValueError('Unassigned '+str(missing))
        was179=payload.get('catalogVersion')==179
        payload['courseUnits']=units;payload['catalogVersion']=179;payload['language']={'code':l,'label':NAMES[l],'sourceLanguage':'de','variety':'European Portuguese' if l=='pt' else 'Bokmal' if l=='nb' else 'existing / standard examples','review':'Original r179 foundation authoring is AI-assisted and not independently expert-approved. Existing source review statuses are unchanged.'}
        payload['previousFingerprints']=list(dict.fromkeys(payload.get('previousFingerprints',[])+([oldsha] if oldsha and not was179 else [])))
        raw=dumps(payload).encode();sha=hashlib.sha256(raw).hexdigest();path=f'assets/content/language-{l}.{sha[:16]}.json';(root/path).write_bytes(raw)
        manifest['languages'][l]={'file':path,'bytes':len(raw),'sha256':sha}
        stats={k:len(bank[k]) for k in 'vsgd'};report[l]={**stats,'total':sum(stats.values()),'units':len(units),'new_records':168,'new_units':24,'unmapped':0,'legacy_units_retained':len(original_units)}
        catalog[l]={'name':NAMES[l],'code':l,'units':len(units),'records':sum(stats.values()),'levels':sorted({u['level'] for u in units}),'hasExistingAdvanced':l in ['en','fr','it','es'],'contentHash':sha,'foundationUnits':24}
        for k in 'vsgd':
            for x in bank[k]:coverage.append({'language':l,'id':x['id'],'kind':k,'level':x.get('lvl',''),'topic':x.get('topic',''),'unitIds':[u['id'] for u in units if x['id'] in u['ids']],'new_r179':'-r179-' in x['id'],'review':x.get('provenance',{}).get('humanReview','existing-not-independently-verified')})
    manifest['version']='r179-candidate';(root/'assets/content/manifest.json').write_text(dumps(manifest))
    f=root/'assets/runtime/content-loader.js';text=f.read_text();text=re.sub(r'^window\.SK_CONTENT_MANIFEST=.*?;\n',lambda m:'window.SK_CONTENT_MANIFEST='+dumps(manifest)+';\n',text,count=1);f.write_text(text)
    (root/'assets/content/language-catalog.json').write_text(dumps(catalog))
    (root/'assets/runtime/language-catalog.js').write_text('window.SK_LANGUAGE_CATALOG='+dumps(catalog)+';\n')
    out.mkdir(parents=True,exist_ok=True);(out/'language-expansion.json').write_text(json.dumps(report,indent=2));(out/'language-coverage.json').write_text(json.dumps(coverage,ensure_ascii=False,separators=(',',':')))
    print(json.dumps(report,indent=2))
if __name__=='__main__':build(Path(sys.argv[1]),Path(sys.argv[2]))
