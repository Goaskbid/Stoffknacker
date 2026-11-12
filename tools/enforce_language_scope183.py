#!/usr/bin/env python3
"""Idempotent course retirement, not learner-data deletion. No network/deployment.
Call before and after the existing content/page build, before release finalization.
"""
from pathlib import Path
from urllib.parse import urlsplit
import argparse,hashlib,html,json,re,xml.etree.ElementTree as ET
ACTIVE=['en','fr','it','es'];RETIRED=['pt','nl','sv','nb'];DOMAIN='https://stoffknacker.com'
NS={'s':'http://www.sitemaps.org/schemas/sitemap/0.9'}

def change(path,old,new,expected=1):
    text=path.read_text()
    if new in text:return
    count=text.count(old)
    if count!=expected:raise RuntimeError(f'Unsupported source anchor in {path.name}: expected {expected}, found {count}: {old[:90]}')
    path.write_text(text.replace(old,new))

def enforce(root,out=None):
    root=Path(root).resolve();out=Path(out).resolve() if out else None
    manifest_path=root/'assets/content/manifest.json';manifest=json.loads(manifest_path.read_text())
    academic_before=json.dumps(manifest['subjects'],sort_keys=True)
    for code in ACTIVE:
        entry=manifest['languages'].get(code)
        if not entry:raise RuntimeError('Missing retained language '+code)
        file=root/entry['file']
        if not file.is_file() or hashlib.sha256(file.read_bytes()).hexdigest()!=entry['sha256']:raise RuntimeError('Retained course hash mismatch: '+code)
    manifest['languages']={c:manifest['languages'][c] for c in ACTIVE};manifest['version']='r183-swiss-scope'
    manifest_path.write_text(json.dumps(manifest,ensure_ascii=False,separators=(',',':')))
    loader=root/'assets/runtime/content-loader.js';text=loader.read_text()
    text,n=re.subn(r'^window\.SK_CONTENT_MANIFEST=.*?;\n',lambda m:'window.SK_CONTENT_MANIFEST='+json.dumps(manifest,ensure_ascii=False,separators=(',',':'))+';\n',text,count=1)
    if n!=1:raise RuntimeError('Missing content manifest assignment; no loader replacement attempted')
    loader.write_text(text)
    catalogue={};counts={}
    for code in ACTIVE:
        payload=json.loads((root/manifest['languages'][code]['file']).read_text())
        bank=next(p['value'] for p in payload['pools'] if p['path']==[code]);units=payload['courseUnits'];total=sum(len(bank[k]) for k in 'vsgd')
        name={'en':'Englisch','fr':'Franz\u00f6sisch','it':'Italienisch','es':'Spanisch'}[code]
        catalogue[code]={'name':name,'code':code,'units':len(units),'records':total,'levels':sorted({u['level'] for u in units}),'hasExistingAdvanced':True,'contentHash':manifest['languages'][code]['sha256'],'foundationUnits':sum(u.get('track')=='foundation' for u in units)}
        counts[code]={'units':len(units),'records':total,**{k:len(bank[k]) for k in 'vsgd'}}
    cat=json.dumps(catalogue,ensure_ascii=False,separators=(',',':'))
    (root/'assets/content/language-catalog.json').write_text(cat)
    (root/'assets/runtime/language-catalog.js').write_text('window.SK_LANGUAGE_CATALOG='+cat+';\n')
    # Retain the historical validator's eight-code allowance. History and backups survive.
    langfile=root/'assets/runtime/app-01.js'
    marker='/* r183-course-availability */'
    if marker not in langfile.read_text():
        old='function start(l){'
        new=old+marker+"if(window.SKLanguagePolicy183)SKLanguagePolicy183.changeIntent();var requested183=l||ST.l||'en';if(window.SKLanguagePolicy183&&!SKLanguagePolicy183.available(requested183)){spGen++;if(S.R&&S.R.length&&!S.finished)saveSession(!!S.antw);var panel183=panel();panel183.innerHTML=SKLanguagePolicy183.retiredMarkup();var heading183=panel183.querySelector('h2');if(heading183){heading183.tabIndex=-1;heading183.focus({preventScroll:true});}return;}"
        change(langfile,old,new)
    change(langfile,'function schliessen(){','function schliessen(){/* r183-route-ownership */if(window.SKLanguagePolicy183)SKLanguagePolicy183.changeIntent();')
    text=langfile.read_text()
    old_norm="function norm(s){return String(s||'').toLowerCase()"
    if old_norm in text:
        text=text.replace(old_norm,"function norm(s){return String(s||'').normalize('NFC').toLowerCase()",1)
    elif "function norm(s){" in text:
        part=text.split("function norm(s){",1)[1][:500]
        helper=text.split("function nfc(s){",1)[1][:200] if "function nfc(s){" in text else ''
        if "normalize('NFC')" not in part and 'normalize("NFC")' not in part and not (part.startswith("return nfc(") and "normalize('NFC')" in helper):
            raise RuntimeError('Unrecognized language normalizer; inspect instead of guessing')
    for old,new in [('Weiter so, das gibt eine gute Note.','Bleib beim nachvollziehbaren Lösungsweg.'),('Das gibt eine Sechs!','Die Runde ist abgeschlossen.'),('Kennt jede Prüfungsfalle.','Hilft dir, Aufgaben sorgfältig zu lesen.')]:
        text=text.replace(old,new)
    langfile.write_text(text)
    home=root/'assets/runtime/app-09.js'
    change(home,'openLang=Object.keys(ss).find(k=>ss[k]&&','openLang=Object.keys(ss).find(k=>catalog[k]&&ss[k]&&')
    change(home,'Schulstoff erkl\u00e4rt. Acht Sprachen zum Ausprobieren. Ein Thema, ein Beispiel, dein n\u00e4chster Schritt.','Schulstoff f\u00fcr Schweizer Bildungswege. Ein Thema, ein Beispiel, dein n\u00e4chster Schritt.')
    # A decorative logo photo must not inherit the full-size instructional image fallback.
    figures=root/'assets/runtime/app-18.js'
    change(figures,"function bad(){if(img.dataset.v121Fixed)return;","function bad(){if(img.classList.contains('skl-face')&&img.closest('#sk-logo')){var holder183=img.closest('.skl-live');if(holder183)holder183.classList.remove('skl-gesicht');img.remove();return;}if(img.dataset.v121Fixed)return;")
    foundation=root/'tools/foundation_content.py'
    change(foundation,"LANGS=['en','fr','it','es','pt','nl','sv','nb']","LANGS=['en','fr','it','es']")
    publication=root/'tools/build_publication.py'
    for old,new in [
        ('Acht Sprachen. Ein klarer Lernweg.','Vier Fremdsprachen. Ein klarer Lernweg.'),
        ('Die vier neuen Sprachen sind Einstiegspakete, keine vollst@ae@ndigen A1-Lehrg@ae@nge.','Das Angebot umfasst Englisch, Franz@oe@sisch, Italienisch und Spanisch. Materialstufen belegen keine vollst@ae@ndige Lehrplanabdeckung.'),
        ('Die vier neuen Spracheinstiege decken zw@oe@lf Situationen ab.','Die Sprachgrundlagen decken je zw@oe@lf Situationen ab.')]:change(publication,old,new)
    removed_files=[]
    for code in RETIRED:
        for file in (root/'assets/content').glob('language-'+code+'.*.json'):
            removed_files.append(str(file.relative_to(root)));file.unlink()
    # Withdraw old public pages without serving another language under the old URL.
    tombstones=[]
    for code in RETIRED:
        paths=list((root/'sprachen'/code).rglob('index.html'))
        for file in paths:
            path=str(file.parent.relative_to(root))+'/'
            markup='<!doctype html><html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,follow"><title>Sprachkurs nicht mehr im Angebot | Stoffknacker</title><link rel="canonical" href="'+DOMAIN+'/'+path+'"><link rel="stylesheet" href="/assets/css/publication179.css"></head><body><a class="skip" href="#inhalt">Zum Inhalt</a><header class="sitebar"><a class="brand" href="/">STOFFKNACKER</a></header><main id="inhalt"><h1>Dieser Sprachkurs ist nicht mehr im Angebot</h1><p>Stoffknacker konzentriert den Sprachtrainer auf Englisch, Franz\u00f6sisch, Italienisch und Spanisch. Die fr\u00fcheren Zusatzkurse werden nicht mehr angeboten.</p><p>Deine fr\u00fcheren Lernst\u00e4nde bleiben auf Deinem Ger\u00e4t erhalten und werden beim Lernstand-Export mitgesichert. Es wird kein neuer Kurs unter dieser alten Adresse gestartet.</p><a class="button" href="/sprachtrainer/">Aktuelle Sprachkurse ansehen</a><p><a href="/#more">Lernstand sichern</a></p></main><footer><a href="/impressum/">Impressum</a> <a href="/datenschutz/">Datenschutz</a></footer></body></html>'
            file.write_text(markup);tombstones.append(str(file.relative_to(root)))
    # All sitemap files, not only the language sitemap. Never put retired pages back.
    removed_urls=[]
    for file in root.glob('sitemap*.xml'):
        tree=ET.parse(file);xmlroot=tree.getroot();changed=False
        for node in list(xmlroot):
            loc=node.find('s:loc',NS)
            if loc is not None and re.search(r'/sprachen/(pt|nl|sv|nb)(?:/|$)',loc.text or ''):
                removed_urls.append(loc.text);xmlroot.remove(node);changed=True
        if changed:
            ET.register_namespace('',NS['s']);tree.write(file,encoding='unicode',xml_declaration=True)
    index=root/'index.html';text=index.read_text()
    if 'assets/runtime/language-policy183.js' not in text:
        anchor=re.search(r'<script\b[^>]*src=[\"\']assets/runtime/app-01\.js[^>]*></script>',text)
        if not anchor:raise RuntimeError('Cannot find first runtime script')
        text=text[:anchor.start()]+'<script src="assets/runtime/language-policy183.js"></script>\n'+text[anchor.start():]
    if 'assets/css/release183.css' not in text:text=text.replace('</head>','<link rel="stylesheet" href="assets/css/release183.css">\n</head>',1)
    if 'assets/runtime/release183-ui.js' not in text:text=text.replace('</body>','<script src="assets/runtime/release183-ui.js"></script>\n</body>',1)
    # The uploaded r182 animations: keep identity/motion, stop during learning and focus.
    if '/* r183-motion-ownership */' not in text:
        text=text.replace("||D.body.classList.contains('sk-motion-paused')", "||D.body.classList.contains('sk-motion-paused')||!!W.SKLanguagePolicy183?.quiet()")
        text=text.replace('var i=0,t=null,g=null,halt=false;','var i=0,t=null,g=null,hover=false,focused=false,manual=false;')
        text=text.replace("var f=w.querySelector('.skl-face');gi=(gi+1)%GES.length;if(f)f.src=GES[gi];","var f=w.querySelector('.skl-face');if(!f||!f.complete||!f.naturalWidth)return;gi=(gi+1)%GES.length;f.src=GES[gi];")
        text=text.replace('zeig(k);halt=true;','zeig(k);manual=true;')
        text=text.replace('if(!f||ruhig()||!el._bilder','if(!f||hover||focused||manual||D.hidden||ruhig()||!el._bilder')
        text=text.replace('if(weg()||halt||ruhig()||D.hidden)','if(weg()||hover||focused||manual||ruhig()||D.hidden)')
        text=text.replace("function(){halt=true;});sec.addEventListener('mouseleave',function(){halt=false;});sec.addEventListener('focusin',function(){halt=true;});sec.addEventListener('focusout',function(){halt=false;});", "function(){hover=true;});sec.addEventListener('mouseleave',function(){hover=false;});sec.addEventListener('focusin',function(){focused=true;});sec.addEventListener('focusout',function(e){focused=sec.contains(e.relatedTarget);});")
        text=text.replace("if(f.isConnected){f.src=el._bilder[el._n];f.style.opacity='';}","if(f.isConnected){f.style.opacity='';if(!hover&&!focused&&!manual&&!D.hidden&&!ruhig())f.src=el._bilder[el._n];}")
        text=text.replace("el.setAttribute('aria-hidden',j===i?'false':'true');", "el.setAttribute('aria-hidden',j===i?'false':'true');el.hidden=j!==i;el.inert=j!==i;")
        text=text.replace('</head>','<!-- r183-motion-ownership -->\n</head>',1)
    # Do not add the same motion patch twice.
    text=text.replace('<!-- r183-motion-ownership -->','<!-- /* r183-motion-ownership */ -->')
    index.write_text(text)
    sw=root/'sw.js';text=sw.read_text()
    if '/* r183-retired-packs */' not in text:
        anchor="if(r.method!=='GET'||u.origin!==BASE.origin)return;"
        block=anchor+"/* r183-retired-packs */if(/\\/assets\\/content\\/language-(pt|nl|sv|nb)\\.[a-f0-9]+\\.json$/.test(u.pathname)){e.respondWith(new Response('{\"error\":\"course_retired\"}',{status:410,headers:{'Content-Type':'application/json'}}));return;}"
        if text.count(anchor)!=1:raise RuntimeError('Unsupported SW fetch handler')
        text=text.replace(anchor,block)
        text+='\n/* r183: remove only retired course packs from the shared immutable cache. */\nself.addEventListener("activate",event=>event.waitUntil((async()=>{const cache=await caches.open(CONTENT);for(const request of await cache.keys()){if(/\\/assets\\/content\\/language-(pt|nl|sv|nb)\\.[a-f0-9]+\\.json$/.test(new URL(request.url).pathname))await cache.delete(request);}})()));\n'
    sw.write_text(text)
    assert academic_before==json.dumps(manifest['subjects'],sort_keys=True)
    info_path=root/'build-info.json';info=json.loads(info_path.read_text())
    info.update(release='r183',candidate='r183-integration-candidate',status='AWAITING_EXACT_SOURCE_RELEASE_TESTS',language_count=4,language_units=sum(x['units'] for x in counts.values()),language_records=sum(x['records'] for x in counts.values()),retired_courses=RETIRED,architecture='32 on-demand academic packs; four active foreign-language courses; retired history preserved',deployed=False)
    info_path.write_text(json.dumps(info,ensure_ascii=False,indent=2)+'\n')
    result={'active_courses':counts,'retired':RETIRED,'retired_page_count':len(tombstones),'retired_pages':tombstones,'removed_pack_files':removed_files,'removed_sitemap_urls':removed_urls,'local_storage_mutations':'none','academic_manifest_unchanged':True}
    if out:
        out.mkdir(parents=True,exist_ok=True);(out/'language-scope183.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n')
        pm=out/'publication-manifest.json'
        if pm.exists():
            rows=[x for x in json.loads(pm.read_text()) if not re.search(r'/sprachen/(pt|nl|sv|nb)(?:/|$)',x['url'])]
            for row in rows:row['sha256']=hashlib.sha256((root/row['path']).read_bytes()).hexdigest()
            pm.write_text(json.dumps(rows,ensure_ascii=False,indent=2)+'\n')
    return result
if __name__=='__main__':
    parser=argparse.ArgumentParser();parser.add_argument('root',type=Path);parser.add_argument('--out',type=Path);args=parser.parse_args();print(json.dumps(enforce(args.root,args.out),ensure_ascii=False,indent=2))
