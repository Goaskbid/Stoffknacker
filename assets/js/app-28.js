try{

/* R105/R107: KI-Lernhilfe. Einziger KI-Besitzer. Kein Schluessel im HTML; Endpunkt aus <meta name="mnemika-ki-endpoint">. Kein Aufruf beim Oeffnen. Eigene Einwilligung (nicht Werbung). */
(function(){var M=window.MNEMIKA;if(!M||M.kiTutor)return;
var CK='mnemika-ki-tutor-consent-v1';
function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
function endpoint(){return M.kiEndpoint();}
 /* R128 (GH-A): EINZIGE KI-Endpunktquelle. Nur <meta name="mnemika-ki-endpoint">, nur eigene Domain (stoffknacker.com, Subdomains, gleicher Ursprung) oder Test-Mock. Nie localStorage, nie URL. */
 M.kiEndpoint=function(){var m=document.querySelector('meta[name="mnemika-ki-endpoint"]'),v=(m&&m.content||'').trim();if(!v)return '';if(v==='mock:'||v.indexOf('mock:')===0)return v;try{var u=new URL(v,location.href);if(u.protocol!=='https:')return '';var ok=u.origin===location.origin||u.hostname==='stoffknacker.com'||/\.(mnemika|stoffknacker)\.com$/.test(u.hostname);return ok?u.href:'';}catch(e){return '';}};
 try{localStorage.removeItem('mnemika-ai-endpoint');}catch(e){} /* bewusst nicht aus URL oder localStorage */
function kapitel(id){return (M.chapters||[]).filter(function(x){return x.id===id;})[0]||null;}
function fnv(s){var x=2166136261>>>0;for(var k=0;k<s.length;k++){x^=s.charCodeAt(k);x=Math.imul(x,16777619)>>>0;}return x.toString(16);}
function revision(c){return c?fnv(JSON.stringify([c.id,c.objectives,(c.blocks||[]).map(function(b){return [b.id,b.label,b.body];})])):'';}
function blockText(c,id,label){if(!c)return '';var b=(c.blocks||[]).filter(function(x){return (id&&x.id===id)||(!id&&label&&x.label===label);})[0];if(!b)return '';var d=document.createElement('div');d.innerHTML=(b.body||[]).join('\n');return (b.label+': '+d.textContent).slice(0,4000);}
var AKT=[['einfacher','Einfacher erkl\u00e4ren','Erkl\u00e4re diesen Abschnitt noch einmal ganz einfach, f\u00fcr jemanden, der zum ersten Mal davon h\u00f6rt.'],['begriff','Begriff erkl\u00e4ren','Erkl\u00e4re mir den wichtigsten Fachbegriff in diesem Abschnitt in einfachen Worten, mit einem Beispiel.'],['beispiel','Anderes Beispiel','Gib mir ein neues, einfaches Beispiel zum selben Prinzip und erkl\u00e4re, warum es so ist.'],['pruefen','Satz pr\u00fcfen','Ich schreibe dir gleich einen eigenen Satz oder L\u00f6sungsweg. Pr\u00fcfe ihn und erkl\u00e4re jede Korrektur.'],['hinweis','Ein Hinweis','Gib mir genau einen kleinen Hinweis, ohne die L\u00f6sung zu verraten.'],['frage','Frage zum Abschnitt','']];
var S={c:null,konzept:'',blockId:'',verlauf:[],rid:'',ctl:null,zustand:'CLOSED'};
function setz(z){S.zustand=z;var p=document.getElementById('r105-ki');if(p)p.setAttribute('data-state',z);}
function panel(){var p=document.getElementById('r105-ki');if(p)return p;p=document.createElement('div');p.id='r105-ki';p.setAttribute('role','dialog');p.setAttribute('aria-modal','true');p.setAttribute('aria-labelledby','r105-ki-titel');p.hidden=true;
 p.innerHTML='<div class="r105-ki-box"><div class="r105-ki-kopf"><h2 id="r105-ki-titel">KI-Lernhilfe</h2><button type="button" class="r105-ki-zu" aria-label="Schliessen">\u00d7</button></div><p class="r105-ki-thema"></p><label class="r105-ki-abschnitt" hidden>Zu welchem Abschnitt hast du eine Frage? <select></select></label><div class="r105-ki-verlauf" aria-live="polite"></div><div class="r105-ki-einw" hidden><p>Wenn du sendest, gehen deine Frage, die Kapitel- und Abschnittskennung und der Text dieses Abschnitts an einen KI-Dienst (Anthropic). Kein Name, kein Lernstand. Schreib selbst keine pers\u00f6nlichen Angaben hinein. Diese Einwilligung ist unabh\u00e4ngig von Werbung.</p><button type="button" class="btn go" data-einw="ja">Einverstanden</button> <button type="button" class="btn" data-einw="nein">Lieber nicht</button></div><div class="r105-ki-aktionen">'+AKT.map(function(a){return '<button type="button" class="btn sm" data-ki-akt="'+a[0]+'">'+esc(a[1])+'</button>';}).join('')+'</div><div class="r105-ki-eingabe"><textarea rows="2" maxlength="1500" placeholder="Was ist dir unklar? Oder schreib einen eigenen Satz."></textarea><button type="button" class="btn go r105-ki-senden">Senden</button><button type="button" class="btn r105-ki-stopp" hidden>Abbrechen</button></div><p class="r105-ki-hinweis">KI kann sich irren; die Lektion und die Erkl\u00e4rungen oben bleiben verf\u00fcgbar. <button type="button" class="lnk r105-ki-widerruf">Einwilligung widerrufen</button></p></div>';
 document.body.appendChild(p);p.querySelector('.r105-ki-zu').onclick=zu;p.addEventListener('keydown',function(e){if(e.key==='Escape')zu();});
 p.querySelectorAll('[data-ki-akt]').forEach(function(b){b.onclick=function(){var a=AKT.filter(function(x){return x[0]===b.dataset.kiAkt;})[0];var ta=p.querySelector('textarea');if(a[0]==='frage'||a[0]==='pruefen'){if(!ta.value.trim()){ta.focus();if(a[0]==='pruefen')ta.placeholder='Schreib hier deinen Satz oder L\u00f6sungsweg.';return;}senden(ta.value.trim(),a[0]);ta.value='';return;}senden(a[2],a[0]);};});
 var ta=p.querySelector('textarea');p.querySelector('.r105-ki-senden').onclick=function(){var t=ta.value.trim();if(!t)return;ta.value='';senden(t,'frage');};
 ta.addEventListener('keydown',function(e){if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();p.querySelector('.r105-ki-senden').click();}});
 p.querySelector('.r105-ki-stopp').onclick=abbrechen;
 (function(){var box=document.createElement('details');box.className='r157-eigene-ki';
  box.innerHTML='<summary>'+(window.mnIkon?window.mnIkon('bot'):'')+'<span>Mit deiner eigenen KI weiterfragen</span></summary><p>Öffnet deine KI in einem neuen Tab, mit deiner Frage und dem Text dieses Abschnitts. Gesendet wird erst dort, von dir. Stoffknacker sendet nichts.</p><div class="r157-ki-links"><button type="button" class="btn sm" data-eki="chatgpt">ChatGPT</button><button type="button" class="btn sm" data-eki="claude">Claude</button><button type="button" class="btn sm" data-eki="perplexity">Perplexity</button><button type="button" class="btn sm" data-eki="gemini">Gemini (Text wird kopiert)</button><button type="button" class="btn sm" data-eki="kopie">Nur kopieren</button></div>';
  var ein=p.querySelector('.r105-ki-eingabe');if(ein)ein.insertAdjacentElement('afterend',box);else p.querySelector('.r105-ki-box').appendChild(box);
  box.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('[data-eki]');if(!b)return;var ta=p.querySelector('textarea'),frage=(ta&&ta.value.trim())||'Erkläre mir diesen Abschnitt einfach, mit einem Beispiel, und stelle mir danach eine kurze Kontrollfrage.';
   var c=S.c,txt=(blockText(c,S.blockId,S.konzept)||'').slice(0,1800);
   var prompt='Ich lerne für '+((M.programLabel&&M.activeProgrammes)?(function(){try{var pid=M.activeProgram();var pr=M.activeProgrammes().filter(function(x){return x.id===pid;})[0];return M.programLabel(pr);}catch(x){return 'eine Schweizer Prüfung';}})():'eine Schweizer Prüfung')+' (Schweiz). Fach: '+(c&&c.subject||'')+'. Kapitel: '+(c&&c.title||'')+'.\nAbschnitt aus meinem Lernmaterial:\n'+txt+'\n\nMeine Frage: '+frage+'\nAntworte auf Deutsch (Schweizer Rechtschreibung), kurz und einfach.';
   var U={chatgpt:'https://chatgpt.com/?q=',claude:'https://claude.ai/new?q=',perplexity:'https://www.perplexity.ai/search?q='}[b.dataset.eki];
   var kopiere=function(){try{navigator.clipboard&&navigator.clipboard.writeText(prompt);}catch(x){}};
   if(U){window.open(U+encodeURIComponent(prompt.slice(0,3500)),'_blank','noopener');return;}
   kopiere();if(b.dataset.eki==='gemini')window.open('https://gemini.google.com/app','_blank','noopener');b.textContent='Kopiert';});})();
 p.querySelector('.r105-ki-widerruf').onclick=function(){try{localStorage.removeItem(CK);localStorage.removeItem('mnemika-ki-local-consent-v1');}catch(e){}abbrechen();S.verlauf=[];zeige();S.verlauf.push({role:'assistant',content:'Einwilligung widerrufen. Die KI-Lernhilfe l\u00e4dt nichts mehr herunter. Ein bereits geladenes Sprachmodell entfernst du, indem du die Daten dieser Seite im Browser l\u00f6schst.'});zeige();setz('CONSENT_REQUIRED');};
 return p;}
function zeige(){var p=panel(),v=p.querySelector('.r105-ki-verlauf');v.innerHTML=S.verlauf.map(function(m){return '<div class="r105-ki-msg '+(m.role==='user'?'du':'ki')+'"><b>'+(m.role==='user'?'Du':(m.test?'Testantwort':m.lektion?'Aus der Lektion \u00b7 ohne KI':(m.lokal?'KI-Lernhilfe auf deinem Gerät \u00b7 ungeprüft':'KI-Lernhilfe')))+'</b><div>'+esc(m.content).replace(/\n/g,'<br>')+'</div></div>';}).join('')||'<p class="r105-ki-leer">Frag einfach drauflos, oder w\u00e4hle unten eine Hilfe.</p>';v.scrollTop=v.scrollHeight;}
function innenZu(){abbrechen();var p=document.getElementById('r105-ki');if(p)p.hidden=true;setz('CLOSED');}
function zu(){var p=document.getElementById('r105-ki');if(p&&M.modalZu)M.modalZu(p,{ohneEntfernen:true});innenZu();}
function abbrechen(){if(S.ctl){try{S.ctl.abort();}catch(e){}}S.ctl=null;S.rid='';if(M.kiLokal)M.kiLokal.abbrechen();var p=document.getElementById('r105-ki');if(p){p.querySelector('.r105-ki-stopp').hidden=true;p.classList.remove('r105-laedt');}}
function einwilligung(){try{return localStorage.getItem(CK)==='ja';}catch(e){return false;}}
function frageEinwilligung(weiter){var p=panel(),e=p.querySelector('.r105-ki-einw');e.hidden=false;setz('CONSENT_REQUIRED');e.querySelector('[data-einw="ja"]').onclick=function(){try{localStorage.setItem(CK,'ja');}catch(x){}e.hidden=true;weiter();};e.querySelector('[data-einw="nein"]').onclick=function(){e.hidden=true;S.verlauf.push({role:'assistant',content:'In Ordnung, es wird nichts gesendet. Die Lektion bleibt vollst\u00e4ndig nutzbar.'});zeige();setz('READY');};}
/* R155: Kostenlose KI-Lernhilfe auf dem Gerät. Gilt nur, wenn kein eigener KI-Server eingetragen ist.
   Reihenfolge: eingebautes Sprachmodell des Browsers (Chrome «LanguageModel»), sonst WebLLM mit Qwen2.5 Instruct (Apache-2.0)
   über WebGPU. Kein Schlüssel, kein Server von Stoffknacker. Die Frage verlässt das Gerät nicht; beim ersten Start lädt der Browser
   das Modell (etwa 1 GB, bei wenig Speicher etwa 0,4 GB) von huggingface.co und die Laufzeit von raw.githubusercontent.com.
   Erst nach eigener Einwilligung. Antworten sind ungeprüft und als solche gekennzeichnet. */
var LK='mnemika-ki-local-consent-v1',WEBLLM_VER='0.2.86',WASM_MODELL='onnx-community/Qwen2.5-0.5B-Instruct';
function ausLektion(text,modus,vorne){var a=window.mnErklaerer?window.mnErklaerer(S.c,S.blockId,S.konzept,text,modus):'';if(!a)return false;S.verlauf.push({role:'assistant',content:(vorne?vorne+'\n\n':'')+a,lektion:true});zeige();setz('ANSWER_LESSON');return true;}
var L={engine:null,art:'',laedt:null,modell:'',abbruch:false};
function lokalEinwilligung(){try{return localStorage.getItem(LK)==='ja';}catch(e){return false;}}
function lokalModell(){var mem=navigator.deviceMemory||8;return mem<=4?'Qwen2.5-0.5B-Instruct-q4f16_1-MLC':'Qwen2.5-1.5B-Instruct-q4f16_1-MLC';}
function eingebaut(){var LMd=window.LanguageModel||(window.ai&&window.ai.languageModel);return LMd||null;}
M.kiLokalPruefen=function(){
 var lm=eingebaut();
 var p1=lm&&lm.availability?Promise.resolve(lm.availability({expectedInputs:[{type:'text',languages:['de']}],expectedOutputs:[{type:'text',languages:['de']}]})).catch(function(){return 'unavailable';}):Promise.resolve('unavailable');
 return p1.then(function(a){
  if(a&&a!=='unavailable'&&a!=='no')return {art:'eingebaut',status:a};
  var wasm=function(){return (typeof WebAssembly==='object'&&!(navigator.deviceMemory&&navigator.deviceMemory<2))?{art:'wasm',status:'moeglich'}:{art:'',status:'keine-webgpu'};};
  if(!navigator.gpu)return wasm();
  return navigator.gpu.requestAdapter().then(function(ad){if(!ad)return wasm();
   var f16=ad.features&&ad.features.has&&ad.features.has('shader-f16');return {art:'webllm',status:'moeglich',f16:!!f16};},function(){return wasm();});
 });
};
function ladeWebLLM(){
 var lokal='assets/vendor/web-llm-'+WEBLLM_VER+'.js';
 var cdn='https://cdn.jsdelivr.net/npm/@mlc-ai/web-llm@'+WEBLLM_VER+'/+esm';
 var imp=function(u){return (new Function('u','return import(u)'))(u);};
 return imp(new URL(lokal,location.href).href).catch(function(){return imp(cdn);});
}
function lokalStatus(t){var p=panel(),s=p.querySelector('.r155-ki-lokal-status');if(!s){s=document.createElement('p');s.className='r155-ki-lokal-status';s.setAttribute('role','status');p.querySelector('.r105-ki-verlauf').after(s);}s.textContent=t||'';s.hidden=!t;}
function lokalStarten(info){
 if(L.engine)return Promise.resolve(L.engine);
 if(L.laedt)return L.laedt;
 if(info.art==='eingebaut'){
  var lm=eingebaut();lokalStatus('Das eingebaute Sprachmodell des Browsers wird vorbereitet …');
  L.laedt=Promise.resolve(lm.create({expectedInputs:[{type:'text',languages:['de']}],expectedOutputs:[{type:'text',languages:['de']}],
   monitor:function(m){m.addEventListener('downloadprogress',function(e){lokalStatus('Sprachmodell wird geladen: '+Math.round((e.loaded||0)*100)+' %');});}})).then(function(s){L.engine={art:'eingebaut',s:s};L.art='eingebaut';L.modell='im Browser eingebaut';lokalStatus('');return L.engine;});
  L.laedt.catch(function(){L.laedt=null;});
  return L.laedt;
 }
 if(info.art==='wasm'){
  lokalStatus('Lernhilfe wird geladen. Beim ersten Mal dauert das einige Minuten …');
  var imp2=function(u){return (new Function('u','return import(u)'))(u);};
  L.laedt=imp2(new URL('assets/vendor/transformers-4.3.2.min.js',location.href).href).catch(function(){return imp2('https://cdn.jsdelivr.net/npm/@huggingface/transformers@4.3.2/dist/transformers.min.js');}).then(function(T){
   try{T.env.allowLocalModels=false;}catch(x){}
   var gesehen={};
   return T.pipeline('text-generation',WASM_MODELL,{dtype:'q4',device:'wasm',progress_callback:function(r){if(r&&r.status==='progress'&&r.file){gesehen[r.file]=r.progress||0;var w=Object.keys(gesehen).map(function(k){return gesehen[k];});var pz=Math.round(w.reduce(function(a,b){return a+b;},0)/Math.max(1,w.length));lokalStatus('Lernhilfe wird geladen: '+pz+' % (nur beim ersten Mal)');}}})
    .then(function(g){L.engine={art:'wasm',g:g};L.art='wasm';L.modell=WASM_MODELL;lokalStatus('');return L.engine;});
  });
  L.laedt.catch(function(){L.laedt=null;});
  return L.laedt;
 }
 var modell=lokalModell();if(!info.f16)modell=modell.replace('q4f16_1','q4f32_1');
 lokalStatus('Lernhilfe wird geladen. Beim ersten Mal dauert das einige Minuten …');
 L.laedt=ladeWebLLM().then(function(w){
  return w.CreateMLCEngine(modell,{initProgressCallback:function(r){var pz=Math.round((r.progress||0)*100);lokalStatus('Lernhilfe wird geladen: '+pz+' %'+(pz<100?' (nur beim ersten Mal)':''));}})
   .then(function(e){L.engine={art:'webllm',e:e};L.art='webllm';L.modell=modell;lokalStatus('');return L.engine;});
 });
 L.laedt.catch(function(){L.laedt=null;});
 return L.laedt;
}
function systemText(c){
 return 'Du bist eine geduldige Nachhilfelehrerin für Jugendliche in der Schweiz. Antworte auf Deutsch in Schweizer Rechtschreibung (immer ss, nie ß). '
  +'Schreib kurz (höchstens 130 Wörter), in einfachen Sätzen, mit einem konkreten Beispiel. Erkläre jeden Fachbegriff. '
  +'Stütze dich auf diesen Abschnitt der Lektion. Wenn die Frage nicht dazu passt oder du unsicher bist, sag das ehrlich und verweise auf die Lektion. '
  +'Gib keine fertigen Prüfungslösungen ohne Erklärung.\n\nFach: '+(c&&c.subject||'')+'\nKapitel: '+(c&&c.title||'')+'\nAbschnitt:\n'+blockText(c,S.blockId,S.konzept).slice(0,2400);
}
function lokal(text,modus){
 var c=S.c,rid='l'+Date.now().toString(36);S.rid=rid;
 var weiter=function(info){
  if(!info.art){
   if(ausLektion(text,modus,'Eine KI kann auf diesem Gerät nicht laufen. Darum antworte ich direkt aus der Lektion.'))return;
   S.verlauf.push({role:'assistant',content:'Die kostenlose KI-Lernhilfe läuft direkt auf dem Gerät. Dieses Gerät oder dieser Browser bietet das nicht an. Die Lektion mit Beispielen, Schaubildern und Übungen bleibt vollständig nutzbar.'});
   zeige();setz('LOCAL_UNSUPPORTED');return;}
  if(!lokalEinwilligung()){
   S.verlauf.pop();zeige();var p=panel(),e=p.querySelector('.r155-ki-lokal-einw');
   if(!e){e=document.createElement('div');e.className='r155-ki-lokal-einw';p.querySelector('.r105-ki-verlauf').after(e);}
   e.hidden=false;setz('LOCAL_CONSENT_REQUIRED');
   e.innerHTML='<p><b>Kostenlose KI auf deinem Gerät</b></p><p>Die Lernhilfe rechnet direkt in deinem Browser. Deine Fragen werden nicht an Stoffknacker oder an einen KI-Anbieter gesendet.</p>'
    +'<p>'+(info.art==='eingebaut'?'Dein Browser bringt ein eigenes Sprachmodell mit. Er lädt es beim ersten Mal selbst herunter.':info.art==='wasm'?'Beim ersten Mal lädt der Browser das kleine Sprachmodell Qwen2.5 0.5B (etwa 0,5 GB, Apache-2.0) von huggingface.co und die Rechenbibliothek ONNX Runtime von cdn.jsdelivr.net. Es rechnet ohne Grafikkarte; auf älteren Telefonen dauert eine Antwort bis zu einer Minute. Danach bleibt es im Browser gespeichert. Nutze dafür am besten WLAN.':'Beim ersten Mal lädt der Browser das Sprachmodell Qwen2.5 ('+(lokalModell().indexOf('0.5B')>=0?'etwa 0,4 GB':'etwa 1 GB')+', Apache-2.0) von huggingface.co und die Laufzeit WebLLM von raw.githubusercontent.com und cdn.jsdelivr.net. Danach bleibt es im Browser gespeichert. Nutze dafür am besten WLAN.')+'</p>'
    +(info.art==='eingebaut'?'':'<p>Beim Herunterladen sehen Hugging Face, Inc. (USA), jsDelivr und GitHub, Inc. (USA) deine IP-Adresse und deinen Browser. In den USA ist der Datenschutz nicht in jedem Fall gleichwertig mit dem schweizerischen. Mit «Einverstanden, starten» willigst du ausdrücklich in diesen Download ein.</p>')
    +'<p>Die Antworten sind von einer Maschine erzeugt und ungeprüft. Sie können Fehler enthalten. Verlass dich bei Prüfungsfragen auf die Lektion.</p>'
    +'<div class="r155-ki-lokal-knoepfe"><button type="button" class="btn go sm" data-lokal="ja">Einverstanden, starten</button><button type="button" class="btn sm" data-lokal="lektion">Ohne Download: aus der Lektion</button><button type="button" class="btn sm" data-lokal="nein">Nein danke</button></div>';
   e.querySelector('[data-lokal=lektion]').onclick=function(){e.hidden=true;S.verlauf.push({role:'user',content:text.slice(0,1500)});zeige();ausLektion(text,modus);};
   e.querySelector('[data-lokal=ja]').onclick=function(){try{localStorage.setItem(LK,'ja');}catch(x){}e.hidden=true;S.verlauf.push({role:'user',content:text.slice(0,1500)});zeige();antwort(info);};
   e.querySelector('[data-lokal=nein]').onclick=function(){e.hidden=true;S.verlauf.push({role:'assistant',content:'In Ordnung, es wird nichts geladen. Die Lektion bleibt vollständig nutzbar. Über «Ohne Download: aus der Lektion» bekommst du jederzeit eine Antwort aus dem Lektionstext.'});zeige();setz('READY');};
   return;}
  antwort(info);
 };
 var antwort=function(info){
  var p=panel();p.classList.add('r105-laedt');p.querySelector('.r105-ki-stopp').hidden=false;setz('LOADING');L.abbruch=false;
  lokalStarten(info).then(function(en){
   if(S.rid!==rid||L.abbruch)return;
   var msg={role:'assistant',content:'',lokal:true};S.verlauf.push(msg);zeige();
   var verlauf=S.verlauf.slice(-8,-2).map(function(m){return {role:m.role==='user'?'user':'assistant',content:String(m.content).slice(0,800)};});
   var frage=String(text).slice(0,1500);
   var fertig=function(){if(S.rid!==rid)return;msg.content=String(msg.content).replace(/ß/g,'ss').trim()||'Keine Antwort erhalten.';p.classList.remove('r105-laedt');p.querySelector('.r105-ki-stopp').hidden=true;zeige();setz('ANSWER');};
   if(en.art==='wasm'){
    return en.g([{role:'system',content:systemText(c)}].concat(verlauf,[{role:'user',content:frage}]),{max_new_tokens:280,do_sample:false,repetition_penalty:1.1}).then(function(out){var g=out&&out[0]&&out[0].generated_text;msg.content=Array.isArray(g)?String((g[g.length-1]||{}).content||''):String(g||'');fertig();});
   }
   if(en.art==='eingebaut'){
    return en.s.prompt([{role:'system',content:systemText(c)}].concat(verlauf,[{role:'user',content:frage}])).then(function(t){msg.content=t;fertig();});
   }
   return en.e.chat.completions.create({messages:[{role:'system',content:systemText(c)}].concat(verlauf,[{role:'user',content:frage}]),stream:true,temperature:0.4,max_tokens:320})
    .then(function(it){var r=it[Symbol.asyncIterator]();var schritt=function(){return r.next().then(function(x){if(x.done||S.rid!==rid||L.abbruch)return;var d=x.value&&x.value.choices&&x.value.choices[0]&&x.value.choices[0].delta;if(d&&d.content){msg.content+=d.content;var v=p.querySelector('.r105-ki-verlauf .r105-ki-msg:last-child div');if(v)v.textContent=msg.content.replace(/ß/g,'ss');}return schritt();});};return schritt();})
    .then(fertig);
  }).catch(function(err){
   if(S.rid!==rid)return;p.classList.remove('r105-laedt');p.querySelector('.r105-ki-stopp').hidden=true;lokalStatus('');
   var grund='Die KI konnte auf diesem Gerät nicht starten'+(err&&err.message?' ('+String(err.message).slice(0,140)+')':'')+'.';if(!ausLektion(text,modus,grund+' Hier ist die Antwort aus der Lektion.')){S.verlauf.push({role:'assistant',content:grund+' Die Lektion bleibt vollständig nutzbar.'});zeige();}setz('LOCAL_FAILED');});
 };
 M.kiLokalPruefen().then(weiter,function(){weiter({art:''});});
}
M.kiLokal={pruefen:M.kiLokalPruefen,modell:lokalModell,zustand:function(){return {art:L.art,modell:L.modell,geladen:!!L.engine,einwilligung:lokalEinwilligung()};},
 abbrechen:function(){L.abbruch=true;try{if(L.engine&&L.engine.art==='webllm')L.engine.e.interruptGenerate();}catch(e){}}};

function senden(text,modus){if(S.c&&(S.c.blocks||[]).length>1&&!S.blockId){var pz=panel();pz.querySelector('.r105-ki-abschnitt').hidden=false;try{pz.querySelector('.r105-ki-abschnitt select').focus();}catch(e){}S.verlauf.push({role:'assistant',content:'Bitte w\u00e4hle zuerst oben den Abschnitt, zu dem du eine Frage hast. Dann kann die Lernhilfe genau diesen Teil erkl\u00e4ren.'});zeige();setz('READY');return;} /* R123 (R112-AI-CONTEXT): nie ohne Abschnitt senden, nicht raten */
 var ep=endpoint();S.verlauf.push({role:'user',content:text.slice(0,1500)});zeige();
 if(!ep){lokal(text,modus);return;} /* R155: ohne eigenen Server die kostenlose KI auf dem Gerät */
 if(!einwilligung()){S.verlauf.pop();zeige();frageEinwilligung(function(){senden(text,modus);});return;}
 abbrechen();var rid='r'+Date.now().toString(36)+Math.random().toString(36).slice(2,10);S.rid=rid;var c=S.c;
 var body={request_id:rid,mode:modus,chapter_id:c&&c.id||'',block_id:S.blockId||'',content_revision:revision(c),locale:'de-CH',consent_version:CK,message:text.slice(0,1500),history:S.verlauf.slice(-8,-1).map(function(m){return {role:m.role,content:String(m.content).slice(0,1500)};}),context:{programme:(M.activeProgram&&M.activeProgram())||'',subject:c&&c.subject||'',title:c&&c.title||'',section:S.konzept||'',objectives:(c&&c.objectives)||[],block_text:blockText(c,S.blockId,S.konzept)}};
 if(ep==='mock:'){var a='Testantwort (keine echte KI): Modus '+modus+', Kapitel '+body.chapter_id+(body.block_id?', Abschnitt '+body.block_id:'')+', Revision '+body.content_revision+'.';M.kiTutor.letzteAnfrage=body;S.verlauf.push({role:'assistant',content:a,test:true});zeige();setz('ANSWER');return;}
 if(navigator.onLine===false){S.verlauf.push({role:'assistant',content:'Du bist offline. Die Lektion funktioniert weiter; die KI-Lernhilfe braucht eine Verbindung.'});zeige();setz('OFFLINE');return;}
 var ctl=window.AbortController?new AbortController():null;S.ctl=ctl;var p=panel();p.classList.add('r105-laedt');p.querySelector('.r105-ki-stopp').hidden=false;setz('LOADING');
 fetch(ep,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body),signal:ctl?ctl.signal:undefined}).then(function(r){return r.json().then(function(d){return {r:r,d:d};},function(){return {r:r,d:{}};});}).then(function(x){
  if(S.rid!==rid)return; /* veraltete Antwort aus anderem Kontext verwerfen */
  S.ctl=null;p.classList.remove('r105-laedt');p.querySelector('.r105-ki-stopp').hidden=true;
  if(x.r.status===429){S.verlauf.push({role:'assistant',content:String(x.d.error||'Das Kontingent der KI-Lernhilfe ist erreicht.')});zeige();setz('QUOTA_REACHED');return;}
  if(!x.r.ok||x.d.request_id!==rid){S.verlauf.push({role:'assistant',content:'Die KI-Lernhilfe ist gerade nicht verf\u00fcgbar. Die Lektion bleibt nutzbar.'});zeige();setz('UNAVAILABLE');return;}
  S.verlauf.push({role:'assistant',content:String(x.d.text||'').slice(0,4000)||'Keine Antwort erhalten.'});zeige();setz('ANSWER');
 },function(e){if(S.rid!==rid)return;S.ctl=null;p.classList.remove('r105-laedt');p.querySelector('.r105-ki-stopp').hidden=true;S.verlauf.push({role:'assistant',content:e&&e.name==='AbortError'?'Abgebrochen.':'Die KI-Lernhilfe ist gerade nicht erreichbar.'});zeige();setz(e&&e.name==='AbortError'?'READY':'UNAVAILABLE');});}
function open(c,u){var p=panel();if(!c){var f=document.querySelector('#v-read .r105-ki-fab');c=f?kapitel(f.dataset.cid):null;}
 var neu=!S.c||!c||S.c.id!==c.id||((u&&u.blockId)||'')!==S.blockId;if(neu){abbrechen();S.verlauf=[];}S.c=c;S.konzept=(u&&u.concept)||'';S.blockId=(u&&u.blockId)||'';
 /* R123 (R112-AI-CONTEXT): Abschnitt eindeutig bestimmen: ein Block -> automatisch; mehrere -> Auswahl durch den Lernenden */
 var bl=(c&&c.blocks||[]).filter(function(x){return x&&x.id;}),wahl=p.querySelector('.r105-ki-abschnitt'),sel=wahl.querySelector('select');
 if(!S.blockId&&bl.length===1){S.blockId=bl[0].id;S.konzept=bl[0].label||'';}
 if(!S.blockId&&bl.length>1){sel.innerHTML='<option value="">\u2013 Abschnitt w\u00e4hlen \u2013</option>'+bl.map(function(x){return '<option value="'+esc(x.id)+'">'+esc(x.label||x.id)+'</option>';}).join('');wahl.hidden=false;
  sel.onchange=function(){var x=bl.filter(function(y){return y.id===sel.value;})[0];abbrechen();S.blockId=x?x.id:'';S.konzept=x?(x.label||''):'';p.querySelector('.r105-ki-thema').textContent=(c?c.title:'')+(S.konzept?' \u00b7 '+S.konzept:'');};}
 else{wahl.hidden=true;}
 p.querySelector('.r105-ki-thema').textContent=(c?c.title:'')+(S.konzept&&c&&S.konzept!==c.title?' \u00b7 '+S.konzept:'');var warOffen=!p.hidden;p.hidden=false;if(!warOffen&&M.modalAuf)M.modalAuf(p,{zu:innenZu});setz(einwilligung()||!endpoint()?'READY':'CONSENT_REQUIRED');zeige();try{p.querySelector('textarea').focus();}catch(e){}return true;}
document.addEventListener('click',function(e){var b=e.target&&e.target.closest&&e.target.closest('.r105-ki-fab');if(b){e.preventDefault();open(kapitel(b.dataset.cid));}});
M.kiTutor={open:open,endpoint:endpoint,zustand:function(){return {state:S.zustand,kapitel:S.c&&S.c.id,block:S.blockId,nachrichten:S.verlauf.length,endpunkt:!!endpoint()};}};})();


}catch(e){console.error(e);}
try{
(function(){'use strict';var M=window.MNEMIKA;if(!M||M.hoerenR152)return;
/* R152 (R33-07): Hörverstehen mit echter Sprachausgabe statt nur Transkript.
   Die Lernenden hören, steuern die Wiedergabe (abspielen, pausieren, nochmals, Tempo) und beantworten Fragen ohne Text.
   Das Transkript erscheint erst nach dem Prüfen. Wer es vorher öffnet, löst die Aufgabe als Leseübung; das wird so angezeigt.
   Keine Prüfungsnote, kein Mastery- oder XP-Eintrag: Übung, keine Bescheinigung. */
var SETS={
 en:{lang:'en-GB',sprache:'Englisch',tracks:[
  {id:'en-1',titel:'Announcement at the station',situation:'You are at a railway station in England and hear an announcement.',
   zeilen:[['Announcer','Good afternoon. This is an announcement for passengers travelling to Manchester Piccadilly.'],['Announcer','The fourteen fifteen service is delayed by approximately thirty minutes because of a signal failure near Stockport.'],['Announcer','This train will now depart from platform nine, not platform four.'],['Announcer','Passengers with seat reservations can use them on the delayed train.'],['Announcer','If you need to make a connection in Manchester, please speak to a member of staff at the information desk next to the ticket office.'],['Announcer','Hot drinks are available free of charge in the waiting room on platform one. We apologise for the inconvenience.']],
   fragen:[
    {f:'What is the main purpose of the announcement?',o:['To inform passengers about a delay and a platform change','To announce that the train is cancelled','To advertise the new waiting room','To explain new ticket prices'],r:0,e:'The announcer names the delay and the new platform. Nothing is cancelled and no prices are mentioned.'},
    {f:'From which platform will the train leave?',o:['Platform four','Platform nine','Platform one','Platform fourteen'],r:1,e:'"Platform nine, not platform four": the second number is a correction. Platform one is where the waiting room is.'},
    {f:'How long is the delay?',o:['About 13 minutes','About 15 minutes','About 30 minutes','About 50 minutes'],r:2,e:'"Approximately thirty minutes". Fourteen fifteen (14:15) is the departure time, not the delay.'},
    {f:'Where can passengers with a connection get help?',o:['On the train','At the information desk next to the ticket office','In the waiting room on platform one','At platform four'],r:1,e:'The information desk next to the ticket office. The waiting room only offers free hot drinks.'}]},
  {id:'en-2',titel:'Booking a tennis court',situation:'Daniel phones a sports centre to book a tennis court.',
   zeilen:[['Emma','Riverside Sports Centre, Emma speaking. How can I help?'],['Daniel','Hi, I would like to book a tennis court for Thursday evening, please. Around seven?'],['Emma','Let me check. I am sorry, seven o’clock is taken. I can offer you six thirty or eight fifteen.'],['Daniel','Eight fifteen is a bit late. I will take six thirty.'],['Emma','Fine. That is one hour, so eighteen pounds. Are you a member?'],['Daniel','No, I am not.'],['Emma','Then it is twenty-two pounds. Can I have your name?'],['Daniel','Daniel Fischer. F, I, S, C, H, E, R.'],['Emma','Thank you, Mr Fischer. Please arrive ten minutes early to collect your racket at reception.']],
   fragen:[
    {f:'At what time is Daniel’s court booked?',o:['7:00','6:30','8:15','7:30'],r:1,e:'Seven o’clock is taken; Daniel chooses six thirty because eight fifteen is too late for him.'},
    {f:'How much does Daniel pay?',o:['£18','£20','£22','£28'],r:2,e:'Eighteen pounds is the price for members. Daniel is not a member, so he pays twenty-two pounds.'},
    {f:'What must Daniel do when he arrives?',o:['Show his membership card','Pay at the court','Collect a racket at reception ten minutes early','Book a second hour'],r:2,e:'"Arrive ten minutes early to collect your racket at reception."'}]},
  {id:'en-3',titel:'An apprentice talks about her choice',situation:'Priya, an apprentice lab technician, talks about her training.',
   zeilen:[['Priya','Hi, I am Priya, and I am in the third year of an apprenticeship as a lab technician.'],['Priya','People often ask me if I regret not going straight to university. Honestly, no.'],['Priya','At first I was nervous, because I was the youngest in the team and I did not understand half of the vocabulary.'],['Priya','But my supervisor explained things patiently, and after a few months I was running tests on my own.'],['Priya','The most difficult part is combining work and school: on Mondays and Tuesdays I am at vocational school, and the rest of the week I am in the lab.'],['Priya','Next year I want to take the Berufsmaturität exams, and maybe later study chemistry at a university of applied sciences.']],
   fragen:[
    {f:'How does Priya feel about her choice?',o:['She regrets it','She is satisfied and has no regrets','She has not decided yet','She wants to stop her apprenticeship'],r:1,e:'"Do I regret it? Honestly, no." Her attitude is positive.'},
    {f:'What was difficult for her at the start?',o:['Her supervisor was impatient','The long journey to work','She did not understand much of the vocabulary','The low pay'],r:2,e:'She was the youngest and did not understand half of the vocabulary. Her supervisor was patient, which is the opposite of the trap option.'},
    {f:'On which days is she at vocational school?',o:['Mondays and Tuesdays','Thursdays and Fridays','Only on Mondays','Every day'],r:0,e:'"On Mondays and Tuesdays I am at vocational school, and the rest of the week I am in the lab."'},
    {f:'What does she plan to do next year?',o:['Start university immediately','Take the Berufsmaturität exams','Change jobs','Become a teacher'],r:1,e:'Next year the Berufsmaturität exams; studying chemistry is only a possible later step ("maybe later").'}]}]},
 fr:{lang:'fr-FR',sprache:'Französisch',tracks:[
  {id:'fr-1',titel:'Annonce à la gare',situation:'Tu es à la gare et tu entends une annonce.',
   zeilen:[['Annonce','Mesdames et Messieurs, votre attention, s’il vous plaît.'],['Annonce','Le train régional pour Lausanne, départ prévu à seize heures vingt, partira avec un retard d’environ quinze minutes en raison d’un dérangement technique.'],['Annonce','Ce train partira exceptionnellement de la voie sept et non de la voie trois.'],['Annonce','Attention : aujourd’hui, ce train ne s’arrête pas à Morges.'],['Annonce','Les voyageurs pour Morges sont priés de prendre le train de seize heures trente-cinq.'],['Annonce','Nous vous remercions de votre compréhension.']],
   fragen:[
    {f:'Pourquoi le train est-il en retard ?',o:['À cause d’une grève','À cause d’un dérangement technique','À cause de la neige','À cause d’un accident'],r:1,e:'« en raison d’un dérangement technique »: wegen einer technischen Störung.'},
    {f:'De quelle voie part le train ?',o:['Voie trois','Voie sept','Voie seize','Voie vingt'],r:1,e:'« de la voie sept et non de la voie trois »: die Verneinung nennt das alte Gleis.'},
    {f:'Que doivent faire les voyageurs pour Morges ?',o:['Changer de train à Lausanne','Prendre le train de 16 h 35','Attendre le train de 16 h 20 sur la voie trois','Rien, le train s’arrête à Morges'],r:1,e:'« ne s’arrête pas à Morges »: der Zug hält nicht in Morges, deshalb den Zug um 16.35 Uhr nehmen.'},
    {f:'Le retard est d’environ…',o:['cinq minutes','quinze minutes','vingt minutes','trente-cinq minutes'],r:1,e:'« un retard d’environ quinze minutes ». Vingt und trente-cinq gehören zu den Abfahrtszeiten.'}]},
  {id:'fr-2',titel:'Un rendez-vous chez le médecin',situation:'Monsieur Meier téléphone au cabinet médical.',
   zeilen:[['Secrétaire','Cabinet du docteur Rochat, bonjour.'],['M. Meier','Bonjour, je voudrais prendre rendez-vous, s’il vous plaît. J’ai mal à la gorge depuis trois jours.'],['Secrétaire','Je peux vous proposer mardi à neuf heures.'],['M. Meier','Mardi, ce n’est pas possible, je travaille. Vous n’avez rien jeudi ?'],['Secrétaire','Jeudi matin, non, mais jeudi après-midi à quatorze heures quinze, oui.'],['M. Meier','Parfait, je prends jeudi.'],['Secrétaire','C’est à quel nom ?'],['M. Meier','Meier. M, E, I, E, R.'],['Secrétaire','Merci, Monsieur Meier. N’oubliez pas votre carte d’assurance.']],
   fragen:[
    {f:'Pourquoi Monsieur Meier téléphone-t-il ?',o:['Il a mal au dos','Il a mal à la gorge depuis trois jours','Il veut annuler un rendez-vous','Il a besoin d’un certificat pour l’école'],r:1,e:'« J’ai mal à la gorge depuis trois jours »: Halsschmerzen seit drei Tagen.'},
    {f:'Quand est son rendez-vous ?',o:['Mardi à 9 h','Jeudi matin','Jeudi à 14 h 15','Mardi à 14 h 15'],r:2,e:'Mardi est impossible (er arbeitet), jeudi matin est complet: es bleibt jeudi à quatorze heures quinze.'},
    {f:'Qu’est-ce qu’il doit apporter ?',o:['Son ordonnance','Sa carte d’assurance','De l’argent liquide','Son passeport'],r:1,e:'« N’oubliez pas votre carte d’assurance »: die Versichertenkarte.'}]},
  {id:'fr-3',titel:'Léa parle de son apprentissage',situation:'Léa, apprentie cuisinière, raconte son quotidien.',
   zeilen:[['Léa','Je m’appelle Léa, j’ai dix-neuf ans et je fais un apprentissage de cuisinière à Fribourg.'],['Léa','Au début, les horaires étaient vraiment difficiles : je commence souvent à dix heures et je finis tard le soir, même le samedi.'],['Léa','Mais j’adore travailler en équipe et créer de nouveaux plats.'],['Léa','Ce que je trouve moins agréable, c’est le stress pendant le service du soir.'],['Léa','L’année prochaine, je voudrais passer la maturité professionnelle, et plus tard, peut-être, ouvrir un petit restaurant avec une amie.']],
   fragen:[
    {f:'Qu’est-ce que Léa aime dans son travail ?',o:['Les horaires','Le stress du soir','Travailler en équipe et créer de nouveaux plats','Travailler seule'],r:2,e:'« j’adore travailler en équipe et créer de nouveaux plats ».'},
    {f:'Qu’est-ce qui était difficile au début ?',o:['Les horaires','La langue','Le trajet','Les collègues'],r:0,e:'« Au début, les horaires étaient vraiment difficiles ».'},
    {f:'Quel est son projet pour l’année prochaine ?',o:['Ouvrir tout de suite un restaurant','Passer la maturité professionnelle','Arrêter l’apprentissage','Étudier à l’université'],r:1,e:'L’année prochaine: la maturité professionnelle. Le restaurant vient « plus tard, peut-être ».'}]}]}};
var KAP={'v76-ebmp-en-01-hor-oder-seh-horverstehen':'en','v76-ebmp-fr-01-hor-oder-seh-horverstehen':'fr','lang2-listening':'fr'};
M.HOEREN_R152={sets:SETS,kapitel:KAP,scope:'Uebung mit Sprachausgabe; keine Note, kein Mastery-Eintrag'};
var Z=M.__r152h=M.__r152h||{};
function E(t){return String(t==null?'':t).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
function lager(cid){try{var S=M.store();S.teach=S.teach||{};var t=S.teach[cid]=S.teach[cid]||{depth:'normal',help:{},done:{}};t.r152h=t.r152h||{};return t.r152h;}catch(e){return null;}}
function zu(cid,tid){var k=cid+'#'+tid;if(!Z[k]){var g=(lager(cid)||{})[tid];Z[k]=g&&typeof g==='object'?{a:g.a||{},geprueft:!!g.geprueft,lesen:!!g.lesen,hoeren:g.hoeren||0,tempo:g.tempo||0.95}:{a:{},geprueft:false,lesen:false,hoeren:0,tempo:0.95};}return Z[k];}
function sichern(cid,tid){var L=lager(cid);if(!L)return;var s=Z[cid+'#'+tid];L[tid]={a:s.a,geprueft:s.geprueft,lesen:s.lesen,hoeren:s.hoeren,tempo:s.tempo};try{M.save&&M.save();}catch(e){}}
function synth(){try{return window.speechSynthesis||null;}catch(e){return null;}}
function stimme(lang){var s=synth();if(!s||!s.getVoices)return null;var v=s.getVoices()||[];var b=lang.slice(0,2);return v.filter(function(x){return x.lang===lang;})[0]||v.filter(function(x){return (x.lang||'').slice(0,2)===b;})[0]||null;}
function track(cid,tid){var set=SETS[KAP[cid]];if(!set)return null;return set.tracks.filter(function(t){return t.id===tid;})[0]||null;}
function spurHTML(cid,set,t,n){var s=zu(cid,t.id),offen=s.geprueft||s.lesen,richtig=0;
 t.fragen.forEach(function(q,i){if(String(s.a[i])===String(q.r))richtig++;});
 var h='<section class="r152h-spur" data-r152h="'+E(t.id)+'"><header><span class="r152h-nr">'+n+'</span><div><h4>'+E(t.titel)+'</h4><p class="r152h-sit">'+E(t.situation)+'</p></div></header>'
 +'<div class="r152h-player" role="group" aria-label="Wiedergabe">'
 +'<button type="button" class="r152h-play" data-r152h-play="'+E(t.id)+'" aria-label="Aufnahme abspielen">▶ Abspielen</button>'
 +'<button type="button" class="r152h-pause" data-r152h-pause="'+E(t.id)+'" aria-label="Pause oder weiter">⏸ Pause</button>'
 +'<button type="button" class="r152h-stop" data-r152h-stop="'+E(t.id)+'" aria-label="Wiedergabe stoppen">■ Stopp</button>'
 +'<label class="r152h-tempo">Tempo <select data-r152h-tempo="'+E(t.id)+'"><option value="0.8"'+(s.tempo<0.9?' selected':'')+'>langsamer</option><option value="0.95"'+(s.tempo>=0.9?' selected':'')+'>normal</option></select></label>'
 +'<span class="r152h-zaehler" data-r152h-zaehler="'+E(t.id)+'">'+(s.hoeren?s.hoeren+'× gehört':'noch nicht gehört')+'</span></div>'
 +'<p class="r152h-status" role="status" data-r152h-status="'+E(t.id)+'"></p>'
 +'<ol class="r152h-fragen">'+t.fragen.map(function(q,i){var gew=s.a[i];return '<li><p>'+E(q.f)+'</p><div class="r152h-opt" role="radiogroup">'+q.o.map(function(o,j){var kl='';if(s.geprueft&&String(gew)===String(j))kl=j===q.r?' ok':' falsch';if(s.geprueft&&j===q.r)kl+=' loesung';return '<label class="r152h-o'+kl+'"><input type="radio" name="r152h-'+E(cid)+'-'+E(t.id)+'-'+i+'" value="'+j+'"'+(String(gew)===String(j)?' checked':'')+(s.geprueft?' disabled':'')+' data-r152h-antwort="'+E(t.id)+'" data-i="'+i+'"><span>'+E(o)+'</span></label>';}).join('')+'</div>'+(s.geprueft?'<p class="r152h-erkl">'+E(q.e)+'</p>':'')+'</li>';}).join('')+'</ol>'
 +(s.geprueft?'<div class="r152h-ergebnis" data-r152h-ergebnis="'+E(t.id)+'" data-lesen="'+s.lesen+'"><strong>'+richtig+' von '+t.fragen.length+' richtig.</strong> '+(s.lesen?'Du hast das Transkript vor dem Prüfen geöffnet: Das war eine Leseübung, kein Hörverstehen. Höre die Aufnahme jetzt ohne Text.':(richtig===t.fragen.length?'Nur durch Hören gelöst.':'Lies die Erklärungen und höre die Stellen noch einmal.'))+'</div><button type="button" class="r41-knopf" data-r152h-neu="'+E(t.id)+'">Noch einmal ohne Text</button>'
   :'<button type="button" class="sv37-pruefen" data-r152h-pruefen="'+E(t.id)+'">Antworten prüfen</button>')
 +'<details class="r152h-transkript"'+(offen?' open':'')+' data-r152h-transkript="'+E(t.id)+'"><summary>Transkript</summary>'
 +(offen?'<div class="r152h-text">'+t.zeilen.map(function(z){return '<p><b>'+E(z[0])+':</b> '+E(z[1])+'</p>';}).join('')+'</div>'
   :'<p class="r152h-hinweis">Das Transkript erscheint nach dem Prüfen. So trainierst du das Hören und nicht das Lesen.</p><button type="button" class="r41-knopf" data-r152h-lesen="'+E(t.id)+'">Ich kann gerade nicht hören: Transkript jetzt zeigen (zählt als Leseübung)</button>')
 +'</details></section>';return h;}
M.hoerenR152=function(cid){var key=KAP[cid],set=SETS[key];if(!set)return '';var ok=!!synth();
 return '<section class="r152h" data-r152h-kapitel="'+E(cid)+'" aria-label="Hörübung"><div class="r152h-kopf"><span class="r152h-icon" aria-hidden="true">🎧</span><div><p class="r46-kicker">Hörübung · '+E(set.sprache)+'</p><h3>Zuhören, nicht mitlesen</h3>'
 +'<p>So läuft es wie in der Prüfung: 1. Fragen lesen. 2. Aufnahme hören (zweimal ist erlaubt). 3. Antworten wählen und prüfen. Erst danach erscheint das Transkript.</p>'
 +(ok?'':'<p class="r152h-warn" role="note">Dieser Browser hat keine Sprachausgabe. Du kannst das Transkript lesen; das zählt dann als Leseübung, nicht als Hörverstehen.</p>')
 +'<p class="r152h-klein">Die Stimme kommt aus der Sprachausgabe deines Geräts und klingt je nach Gerät verschieden. Keine Note, kein Lernstand-Eintrag.</p></div></div>'
 +set.tracks.map(function(t,n){return spurHTML(cid,set,t,n+1);}).join('')+'</section>';};
function neu(cid,tid,root){var alt=(root||document).querySelector('[data-r152h="'+tid+'"]');if(!alt)return;var set=SETS[KAP[cid]],t=track(cid,tid),n=set.tracks.indexOf(t)+1;var w=document.createElement('div');w.innerHTML=spurHTML(cid,set,t,n);alt.replaceWith(w.firstChild);}
function status(tid,txt,root){var el=(root||document).querySelector('[data-r152h-status="'+tid+'"]');if(el)el.textContent=txt;}
var LAUF=null;
function spielen(cid,tid,root){var s=synth(),t=track(cid,tid),set=SETS[KAP[cid]];if(!t)return;if(!s){status(tid,'Keine Sprachausgabe verfügbar. Öffne das Transkript (Leseübung).',root);return;}
 try{s.cancel();}catch(e){}var st=zu(cid,tid);st.hoeren++;sichern(cid,tid);var zl=(root||document).querySelector('[data-r152h-zaehler="'+tid+'"]');if(zl)zl.textContent=st.hoeren+'× gehört'+(st.hoeren>2?' (in der Prüfung meist zweimal)':'');
 var v=stimme(set.lang),sprecher=[];t.zeilen.forEach(function(z){if(sprecher.indexOf(z[0])<0)sprecher.push(z[0]);});
 LAUF={cid:cid,tid:tid,pause:false,root:root};status(tid,'Die Aufnahme läuft …',root);
 t.zeilen.forEach(function(z,i){var u=new window.SpeechSynthesisUtterance(z[1]);u.lang=set.lang;if(v)u.voice=v;u.rate=st.tempo;u.pitch=sprecher.indexOf(z[0])%2?0.8:1.05;
  if(i===t.zeilen.length-1)u.onend=function(){if(LAUF&&LAUF.tid===tid){LAUF=null;status(tid,'Ende der Aufnahme. Beantworte jetzt die Fragen oder höre noch einmal.',root);}};
  u.onerror=function(){status(tid,'Die Sprachausgabe wurde unterbrochen. Starte die Aufnahme neu.',root);};
  s.speak(u);});}
document.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('[data-r152h-play],[data-r152h-pause],[data-r152h-stop],[data-r152h-pruefen],[data-r152h-lesen],[data-r152h-neu]');if(!b)return;
 var root=b.closest('[data-r152h-kapitel]');if(!root)return;var cid=root.getAttribute('data-r152h-kapitel'),s=synth();
 if(b.hasAttribute('data-r152h-play')){spielen(cid,b.getAttribute('data-r152h-play'),root);return;}
 if(b.hasAttribute('data-r152h-pause')){var tid=b.getAttribute('data-r152h-pause');if(!s||!LAUF)return;if(LAUF.pause){s.resume();LAUF.pause=false;b.textContent='⏸ Pause';status(tid,'Die Aufnahme läuft weiter …',root);}else{s.pause();LAUF.pause=true;b.textContent='▶ Weiter';status(tid,'Pausiert.',root);}return;}
 if(b.hasAttribute('data-r152h-stop')){var ts=b.getAttribute('data-r152h-stop');if(s)try{s.cancel();}catch(x){}LAUF=null;status(ts,'Gestoppt.',root);return;}
 if(b.hasAttribute('data-r152h-pruefen')){var tp=b.getAttribute('data-r152h-pruefen'),t=track(cid,tp),st=zu(cid,tp);var fehlt=t.fragen.filter(function(q,i){return st.a[i]==null;}).length;if(fehlt){status(tp,'Beantworte zuerst alle Fragen ('+fehlt+' offen).',root);return;}if(s)try{s.cancel();}catch(x){}st.geprueft=true;sichern(cid,tp);neu(cid,tp,root);var erg=root.querySelector('[data-r152h-ergebnis="'+tp+'"]');if(erg&&M.r53Effekt)try{M.r53Effekt(erg,t.fragen.every(function(q,i){return String(st.a[i])===String(q.r);}));}catch(x){}return;}
 if(b.hasAttribute('data-r152h-lesen')){var tl=b.getAttribute('data-r152h-lesen'),sl=zu(cid,tl);sl.lesen=true;sichern(cid,tl);neu(cid,tl,root);return;}
 if(b.hasAttribute('data-r152h-neu')){var tn=b.getAttribute('data-r152h-neu'),sn=zu(cid,tn);sn.a={};sn.geprueft=false;sn.lesen=false;sichern(cid,tn);neu(cid,tn,root);return;}});
document.addEventListener('change',function(e){var el=e.target;if(!el.matches)return;var root=el.closest&&el.closest('[data-r152h-kapitel]');if(!root)return;var cid=root.getAttribute('data-r152h-kapitel');
 if(el.matches('[data-r152h-antwort]')){var st=zu(cid,el.getAttribute('data-r152h-antwort'));if(st.geprueft)return;st.a[el.getAttribute('data-i')]=Number(el.value);sichern(cid,el.getAttribute('data-r152h-antwort'));}
 if(el.matches('[data-r152h-tempo]')){var s2=zu(cid,el.getAttribute('data-r152h-tempo'));s2.tempo=Number(el.value)||0.95;sichern(cid,el.getAttribute('data-r152h-tempo'));}});
function einsetzen(el,c){try{if(!el||!c||!KAP[c.id])return;el.querySelectorAll('.r152h').forEach(function(x){x.remove();});var h=M.hoerenR152(c.id);if(!h)return;var anker=el.querySelector('#ph-apply');if(anker)anker.insertAdjacentHTML('beforebegin',h);else(el.querySelector('.lesson-main')||el).insertAdjacentHTML('beforeend',h);}catch(e){try{console.error('Hoeruebung',e);}catch(_){}}}
var basis=M.renderLesson;if(typeof basis==='function'){M.renderLesson=function(el,c){var r=basis.apply(M,arguments);einsetzen(el,c);return r;};}
/* Falls das Kapitel schon offen ist, bevor dieses Modul geladen wurde */
try{var v=document.getElementById('v-read');if(v&&!v.hidden&&M.currentChapter){var cc=typeof M.currentChapter==='function'?M.currentChapter():M.currentChapter;if(cc&&KAP[cc.id||cc])einsetzen(v,M.chapter(cc.id||cc));}}catch(e){}
})();
}catch(e){console.error(e);}
