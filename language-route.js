/* r183: preserve incoming intent, including retired courses. Never substitute a
 * different course silently. No user text is sent to analytics by this module. */
(function(w,d){'use strict';
 const params=new URLSearchParams(location.search),lang=params.get('kurs');
 if(!lang)return;
 const valid=/^[a-z]{2}$/.test(lang),catalog=w.SK_LANGUAGE_CATALOG||{},available=valid&&Object.prototype.hasOwnProperty.call(catalog,lang);
 let unit=params.get('lektion');if(unit&&!/^[a-z0-9-]{1,100}$/.test(unit))unit=null;
 function clear(){try{const u=new URL(location.href);u.searchParams.delete('kurs');u.searchParams.delete('lektion');history.replaceState(null,'',u.pathname+u.search+u.hash);}catch(e){}}
 function open(){
  if(!w.mnSprache||!w.SKContent)return;
  const owner=SKContent.owner?.(),hash=location.hash,intent=w.SKLanguagePolicy183?.intentVersion();
  if(!available){mnSprache.start(valid?lang:'retired');clear();return;}
  SKContent.language(lang).then(()=>{
   if(location.hash!==hash||(owner!==undefined&&SKContent.owner?.()!==owner)||(intent!==undefined&&w.SKLanguagePolicy183?.intentVersion()!==intent))return;
   mnSprache.start(lang);
   if(unit&&mnSprache.courses().some(x=>x.id===unit))mnSprache.startUnit(unit);
   else if(unit){const n=d.createElement('p');n.setAttribute('role','status');n.className='sk-route-note';n.textContent='Diese Lektion ist nicht mehr verf\u00fcgbar. Du siehst den gew\u00e4hlten Sprachkurs. Dein gespeicherter Stand wurde nicht gel\u00f6scht.';d.querySelector('.sp-box')?.prepend(n);}
   clear();
  }).catch(()=>{if(location.hash!==hash||(owner!==undefined&&SKContent.owner?.()!==owner)||(intent!==undefined&&w.SKLanguagePolicy183?.intentVersion()!==intent))return;const n=d.createElement('p');n.setAttribute('role','status');n.className='sk-route-note';n.textContent='Die gew\u00e4hlte Sprache konnte nicht geladen werden. Dein Lernstand bleibt erhalten. \u00d6ffne den Kurs bei bestehender Verbindung erneut.';d.querySelector('#v-home')?.prepend(n);});
 }
 if(d.readyState==='loading')d.addEventListener('DOMContentLoaded',()=>setTimeout(open,120),{once:true});else setTimeout(open,120);
})(window,document);
