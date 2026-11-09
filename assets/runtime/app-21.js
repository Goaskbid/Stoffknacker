try{

(function(){'use strict';var M=window.MNEMIKA;if(!M)return;M.__scopeCanonical1217=true;
if(typeof M.activeChapterIds==='function'&&!M.activeChapterIds.__scoped){var raw=M.activeChapterIds;var wrapped=function(pid,cid){var domain=raw.call(M,pid,cid),selected=new Set(M.LEARNING_SCOPE_V1217.selected(pid,cid));return new Set(Array.from(domain).filter(function(id){return selected.has(id);}));};wrapped.__scoped=true;M.activeChapterIds=wrapped;}
if(typeof M.activeSubjectOrder==='function'&&!M.activeSubjectOrder.__scoped){var order=M.activeSubjectOrder;var scoped=function(pid,cid){var ids=M.activeChapterIds(pid,cid),subjects=new Set(M.chapters.filter(function(c){return ids.has(c.id);}).map(function(c){return c.subject;}));return (order.call(M,pid,cid)||[]).filter(function(s){return subjects.has(s);});};scoped.__scoped=true;M.activeSubjectOrder=scoped;}
})();

}catch(e){console.error(e);}
try{

(function(){'use strict';var M=window.MNEMIKA;if(!M)return;
/* Single owner for #exam-v1217. No polling, duplicate capture handlers or manufactured items. */
var KEY='mnemika-test-session-v1217',BANK='mnemika-exam-history-v1',LEN={quick:5,chapter:10,simulation:30};
var S={mode:null,entries:[],i:0,answers:{},flags:{},orders:{},status:'idle',context:null};
var saveFailed=false,durableFailed=false,chapterPicker=false,message='';
function esc(t){return String(t==null?'':t).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
function normal(t){return String(t==null?'':t).normalize('NFC').replace(/[\u2018\u2019\u02bc]/g,"'").trim().toLocaleLowerCase('de-CH').replace(/\s+/g,' ').replace(/[,.;:!?]+$/,'');}
function context(){return {programmeId:M.activeProgram(),configurationId:M.activeConfiguration(),chapterIds:Array.from(M.activeChapterIds()).sort()};}
function same(a,b){return JSON.stringify(a)===JSON.stringify(b);}
function registry(){return M.QUESTION_REGISTRY_V1217||{};}
function type(q){return q.type||q.format||'mc';}
function zahl(x){return Number(String(x).trim().replace(/\s/g,'').replace(',','.'));}
function valid(q){if(!q||!q.id||!String(q.prompt||'').trim()||!q.chapterId)return false;var t=type(q);
 if(t==='numeric')return typeof q.answer==='number'&&isFinite(q.answer)&&(q.tolerance==null||(typeof q.tolerance==='number'&&isFinite(q.tolerance)&&q.tolerance>=0));
 if(t==='mc')return Array.isArray(q.options)&&q.options.length>1&&Number.isInteger(q.answer)&&q.answer>=0&&q.answer<q.options.length;
 if(t==='truefalse')return typeof q.answer==='boolean';
 if(t==='cloze')return typeof q.answer==='string'&&normal(q.answer)!=='';
 if(t==='order')return Array.isArray(q.items)&&q.items.length>1&&Array.isArray(q.answer)&&q.answer.length===q.items.length&&new Set(q.answer).size===q.items.length&&q.answer.every(function(i){return Number.isInteger(i)&&i>=0&&i<q.items.length;});
 if(t==='match')return Array.isArray(q.pairs)&&q.pairs.length>1&&q.pairs.every(function(p){return Array.isArray(p)&&p.length===2&&String(p[0]).trim()&&String(p[1]).trim();});
 if(t==='selection')return Array.isArray(q.options)&&q.options.length>1&&Array.isArray(q.answers)&&q.answers.length>0&&new Set(q.answers).size===q.answers.length&&q.answers.every(function(i){return Number.isInteger(i)&&i>=0&&i<q.options.length;});
 if(t==='correction')return typeof q.answer==='string'&&normal(q.answer)!=='';
 return false;
}
function eligible(chapterId){var allowed=M.activeChapterIds(),map={};M.chapters.forEach(function(c){map[c.id]=c;});return Object.values(registry()).filter(function(q){return valid(q)&&(!M.frageZulaessig||M.frageZulaessig(q))&&!(M.verworfenIn&&M.verworfenIn(q.chapterId,q.id))&&q.assessmentActive!==false&&allowed.has(q.chapterId)&&(!chapterId||q.chapterId===chapterId);}).map(function(q){return Object.assign(JSON.parse(JSON.stringify(q)),{type:type(q),subject:(map[q.chapterId]||{}).subject||'',chapterTitle:(map[q.chapterId]||{}).title||q.chapterId});});}
function shuffle(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)),v=a[i];a[i]=a[j];a[j]=v;}return a;}
function pick(mode,cid){var qs=shuffle(eligible(cid));if(mode==='chapter')return qs.slice(0,LEN.chapter);var groups={};qs.forEach(function(q){(groups[q.subject]||(groups[q.subject]=[])).push(q);});var out=[],keys=shuffle(Object.keys(groups));while(out.length<LEN[mode]&&keys.some(function(k){return groups[k].length;})){keys.forEach(function(k){if(groups[k].length&&out.length<LEN[mode])out.push(groups[k].shift());});}return out;}
function bank(){try{var b=JSON.parse(localStorage.getItem(BANK)||'null');if(b&&b.schema===1&&b.sessions&&typeof b.sessions==='object'&&!Array.isArray(b.sessions)&&Array.isArray(b.attempts))return b;}catch(e){}return {schema:1,sessions:{},attempts:[]};}
function slot(c){return c.programmeId+'::'+c.configurationId;}
/* Kontextvergleich ohne Reihenfolge: Beim Neuladen werden dieselben Kapitel teils in anderer Reihenfolge
   aufgebaut. Ein reiner Reihenfolgevergleich verwarf dadurch jeden gespeicherten Durchgang. Programm und
   Konfiguration muessen gleich sein, die Kapitel muessen dieselbe Menge bilden. */
function gleicherKontext(a,b){if(!a||!b)return false;if(a.programmeId!==b.programmeId||a.configurationId!==b.configurationId)return false;var x=(a.chapterIds||[]).slice().sort(),y=(b.chapterIds||[]).slice().sort();if(x.length!==y.length)return false;for(var i=0;i<x.length;i++)if(x[i]!==y[i])return false;return true;}
function newId(){return (window.crypto&&crypto.randomUUID)?crypto.randomUUID():Date.now().toString(36)+'-'+Math.random().toString(36).slice(2);}
function persist(){
 if(['running','review','result'].indexOf(S.status)<0||!S.context)return;
 if(!S.attemptId)S.attemptId=newId();
 S.updatedAt=Date.now();
 var v={schema:'mnemika-exam-auditfix-1',state:S};
 try{sessionStorage.setItem(KEY,JSON.stringify(v));saveFailed=false;}catch(e){saveFailed=true;}
 try{var b=bank();b.sessions[slot(S.context)]=v;
  if(S.status==='result'&&!b.attempts.some(function(a){return a.id===S.attemptId;})){
   var r=result();b.attempts.push({id:S.attemptId,submittedAt:S.submittedAt||new Date().toISOString(),programmeId:S.context.programmeId,configurationId:S.context.configurationId,mode:S.mode,correct:r.correct,total:r.total,partial:r.partial,unanswered:r.unanswered,items:S.entries.map(function(q,i){return {id:q.id,chapterId:q.chapterId,state:responseState(q,S.answers[i]),contentRevision:q.contentRevision||null};})});
  }
  localStorage.setItem(BANK,JSON.stringify(b));durableFailed=false;
 }catch(e){durableFailed=true;}
}
function signature(q){
 var t=type(q),sig={id:q.id,chapterId:q.chapterId,type:t,prompt:q.prompt,revision:q.contentRevision||null};
 if(t==='mc'){sig.options=q.options.slice().sort();sig.solution=q.options[q.answer];}
 else if(t==='selection'){sig.options=q.options.slice().sort();sig.solution=q.answers.map(function(i){return q.options[i];}).sort();}
 else if(t==='match'){sig.pairs=q.pairs.map(function(p){return p.slice();}).sort(function(a,b){return JSON.stringify(a).localeCompare(JSON.stringify(b));});}
 else if(t==='order'){sig.items=q.items.slice().sort();sig.solution=q.answer.map(function(i){return q.items[i];});}
 else if(t==='numeric'){sig.solution=q.answer;sig.tolerance=(q.tolerance==null?0:q.tolerance);sig.toleranceType=q.toleranceType||'absolute';sig.unit=q.unit||'';}
 else sig.solution=q.answer;
 return sig;
}
function validSaved(v){
 if(!v||v.schema!=='mnemika-exam-auditfix-1'||!v.state||!gleicherKontext(v.state.context,context()))return null;
 var x=v.state;if(!Array.isArray(x.entries)||!x.entries.length||!Number.isInteger(x.i)||x.i<0||x.i>=x.entries.length||!x.answers||!x.flags||!x.orders)return null;
 var r=registry();if(!x.entries.every(function(q){return valid(q)&&r[q.id]&&same(signature(r[q.id]),signature(q));}))return null;
 if(['running','review','result'].indexOf(x.status)<0)return null;
 return x;
}
function readSaved(){
 var candidates=[];
 try{var durable=validSaved(bank().sessions[slot(context())]);if(durable)candidates.push(durable);}catch(e){}
 try{var temporary=validSaved(JSON.parse(sessionStorage.getItem(KEY)||'null'));if(temporary)candidates.push(temporary);}catch(e){}
 candidates.sort(function(a,b){return (Number(b.updatedAt)||0)-(Number(a.updatedAt)||0);});return candidates[0]||null;
}
function history(){var c=context();return bank().attempts.filter(function(a){return a.programmeId===c.programmeId&&a.configurationId===c.configurationId;}).slice().reverse();}
function root(){var host=document.getElementById('v-exam-v121');if(!host){host=document.createElement('section');host.id='v-exam-v121';host.className='view';document.querySelector('main').appendChild(host);}
 document.querySelectorAll('main > .view').forEach(function(v){v.hidden=true;});host.hidden=false;document.body.dataset.view='test';if(M.paintSection)M.paintSection();
 var el=document.getElementById('exam-v1217');if(!el){el=document.createElement('section');el.id='exam-v1217';el.className='exam-v1217';el.setAttribute('data-exam-v1217','1');}
 if(el.parentNode!==host||host.children.length!==1)host.replaceChildren(el);el.hidden=false;return el;}
function answered(e,a){if(a==null)return false;if(e.type==='numeric')return String(a).trim()!==''&&isFinite(M.leseZahl?M.leseZahl(e,a):zahl(a));if(e.type==='mc')return Number.isInteger(a)&&a>=0&&a<e.options.length;if(e.type==='truefalse')return typeof a==='boolean';if(e.type==='cloze')return normal(a)!=='';if(e.type==='order')return Array.isArray(a)&&a.length===e.items.length;if(e.type==='selection')return Array.isArray(a)&&a.length>0;if(e.type==='correction')return normal(a)!=='';return Array.isArray(a)&&a.length===e.pairs.length&&a.every(function(x){return String(x).trim()!=='';});}
function isCorrect(e,a){if(!answered(e,a))return false;if(e.type==='numeric')return M.bewerteZahl?M.bewerteZahl(e,a):Math.abs(zahl(a)-e.answer)<=(e.tolerance||0)+1e-9;if(e.type==='cloze')return M.bewerteText?M.bewerteText(e,a):normal(a)===normal(e.answer);if(e.type==='order')return same(a,e.answer);if(e.type==='match')return e.pairs.every(function(p,i){return normal(a[i])===normal(p[1]);});if(e.type==='selection'){var soll=e.answers.slice().sort().join(','),ist=a.slice().map(Number).sort().join(',');return soll===ist;}if(e.type==='correction')return M.bewerteText?M.bewerteText(e,a):normal(a)===normal(e.answer);return a===e.answer;}
function responseState(e,a){
 if(isCorrect(e,a))return 'correct';
 if(a==null||typeof a==='string'&&!normal(a)||Array.isArray(a)&&!a.some(function(v){return v!==null&&v!==undefined&&String(v).trim()!=='';}))return 'unanswered';
 if(e.type==='match'&&Array.isArray(a)&&a.some(function(v){return !String(v||'').trim();}))return 'partial';
 if(e.type==='selection'&&Array.isArray(a)&&a.length<e.answers.length&&a.every(function(v){return e.answers.indexOf(v)>=0;}))return 'partial';
 return 'incorrect';
}
function result(){var r={correct:0,incorrect:0,partial:0,unanswered:0,total:S.entries.length};S.entries.forEach(function(e,i){r[responseState(e,S.answers[i])]++;});r.answered=r.total-r.unanswered-r.partial;return r;}
function completionState(e,a){
 if(answered(e,a))return 'answered';
 if(e.type==='match'&&Array.isArray(a)&&a.some(function(v){return v!=null&&String(v).trim()!=='';}))return 'partial';
 return 'unanswered';
}
function completionResult(){var r={answered:0,partial:0,unanswered:0,total:S.entries.length};S.entries.forEach(function(e,i){r[completionState(e,S.answers[i])]++;});return r;}
function responseLabel(state){return {correct:'Richtig',incorrect:'Nicht richtig',partial:'Teilweise bearbeitet, noch nicht vollst\u00e4ndig richtig',unanswered:'Nicht beantwortet'}[state];}
function answerText(e,a){
 if(a==null)return 'Keine Antwort';
 if(e.type==='mc')return e.options[a]||'Keine Antwort';
 if(e.type==='truefalse')return a?'Richtig':'Falsch';
 if(e.type==='order')return Array.isArray(a)?a.map(function(i){return e.items[i];}).join(' \u2192 '):'Nicht best\u00e4tigt';
 if(e.type==='selection')return Array.isArray(a)?a.map(function(i){return e.options[i];}).join('; '):'Keine Auswahl';
 if(e.type==='match')return e.pairs.map(function(p,i){return p[0]+' \u2192 '+(a[i]||'offen');}).join('; ');
 return String(a)||'Keine Antwort';
}
function retry(){
 var allowed={};eligible().forEach(function(q){allowed[q.id]=q;});
 var entries=S.entries.filter(function(e,i){return !isCorrect(e,S.answers[i])&&allowed[e.id];}).map(function(e){return allowed[e.id];});
 if(!entries.length)return;
 persist();begin('retry',entries);
}
function solution(e){if(e.type==='numeric')return String(e.answer)+(e.unit?' '+e.unit:'')+(e.tolerance?' (Toleranz '+(M.toleranzText?M.toleranzText(e):'\u00b1'+e.tolerance)+')':'');if(e.type==='mc')return e.options[e.answer];if(e.type==='truefalse')return e.answer?'Richtig':'Falsch';if(e.type==='cloze')return e.answer;if(e.type==='order')return e.answer.map(function(i){return e.items[i];}).join(' \u2192 ');if(e.type==='selection')return e.answers.map(function(i){return e.options[i];}).join('; ');if(e.type==='correction')return e.answer;return e.pairs.map(function(p){return p[0]+' \u2192 '+p[1];}).join('; ');}
function saveAnswer(){if(S.status!=='running')return;var el=document.getElementById('exam-v1217'),e=S.entries[S.i];if(!el||!e)return;var a=null,r=el.querySelector('input[name="ev"]:checked');
 if(e.type==='numeric'){var nz=el.querySelector('.ev-num');a=nz&&nz.value.trim()!==''?nz.value.trim():null;}
 if(e.type==='mc'&&r)a=Number(r.value);else if(e.type==='truefalse'&&r)a=r.value==='true';else if(e.type==='cloze')a=(el.querySelector('.ev-text')||{}).value||'';else if(e.type==='match')a=Array.from(el.querySelectorAll('[data-ev-match]')).map(function(x){return x.value;});else if(e.type==='order')a=S.answers[S.i]||null;else if(e.type==='selection'){var ck=Array.from(el.querySelectorAll('input[name="ev-multi"]:checked')).map(function(x){return Number(x.value);});a=ck.length?ck:null;}else if(e.type==='correction')a=(el.querySelector('.ev-text')||{}).value||'';
 if(a!==null)S.answers[S.i]=a;else delete S.answers[S.i];persist();}
function fields(e){var a=S.answers[S.i],o=S.orders[e.id]||[];
 var pz=(e.passage&&Array.isArray(e.passage.zeilen))?'<details class="ev-passage" open><summary>Text: '+esc(e.passage.titel||'')+'</summary><ol class="ev-passage-lines">'+e.passage.zeilen.map(function(z){var m=String(z).match(/^(\d+)\s+(.*)$/);return '<li value="'+(m?m[1]:'')+'">'+esc(m?m[2]:z)+'</li>';}).join('')+'</ol></details>':'';
 if(pz){var rest=fieldsOhneText(e,a,o);return pz+rest;}
 return fieldsOhneText(e,a,o);}
function fieldsOhneText(e,a,o){
 if(e.type==='numeric')return '<label class="ev-num-wrap"><input type="text" inputmode="decimal" class="ev-num" value="'+esc(a==null?'':a)+'" aria-label="Zahl eingeben" placeholder="'+esc(e.placeholder||'Zahl')+'">'+(e.unit?'<span class="ev-unit">'+esc(e.unit)+'</span>':'')+'</label><p class="v121-hint">Dezimalkomma oder Dezimalpunkt sind beide erlaubt.</p>';
 if(e.type==='selection')return e.options.map(function(t,j){var an=Array.isArray(a)&&a.indexOf(j)>=0;return '<label class="v121-option'+(an?' selected':'')+'"><input type="checkbox" name="ev-multi" value="'+j+'"'+(an?' checked':'')+'><span>'+esc(t)+'</span></label>';}).join('')+'<p class="v121-hint">Mehrere Antworten sind m\u00f6glich.</p>';
  if(e.type==='correction')return '<input type="text" class="ev-text" value="'+esc(a||'')+'" aria-label="Berichtigter Satz" placeholder="Berichtigten Satz schreiben">';
  if(e.type==='mc')return o.map(function(j){return '<label class="v121-option'+(a===j?' selected':'')+'"><input type="radio" name="ev" value="'+j+'"'+(a===j?' checked':'')+'><span>'+esc(e.options[j])+'</span></label>';}).join('');
 if(e.type==='truefalse')return [true,false].map(function(v){return '<label class="v121-option'+(a===v?' selected':'')+'"><input type="radio" name="ev" value="'+v+'"'+(a===v?' checked':'')+'><span>'+(v?'Richtig':'Falsch')+'</span></label>';}).join('');
 if(e.type==='cloze')return '<label class="ev-input-label" for="ev-answer">Deine Antwort</label><input id="ev-answer" type="text" name="ev" class="ev-text v121-input" autocomplete="off" value="'+esc(a||'')+'">';
 if(e.type==='order')return '<p>Ordne die Schritte. Die Pfeiltasten sind auch per Tastatur bedienbar. Best\u00e4tige danach deine Reihenfolge.</p><ol class="ev-order">'+o.map(function(j,i){return '<li><span>'+esc(e.items[j])+'</span><button type="button" data-ev-move="'+i+'" data-direction="-1" aria-label="Schritt '+(i+1)+' nach oben"'+(!i?' disabled':'')+'>\u2191</button><button type="button" data-ev-move="'+i+'" data-direction="1" aria-label="Schritt '+(i+1)+' nach unten"'+(i===o.length-1?' disabled':'')+'>\u2193</button></li>';}).join('')+'</ol><button type="button" class="v121-btn" data-ev-confirm-order>'+(answered(e,a)?'Reihenfolge \u00fcbernommen':'Reihenfolge \u00fcbernehmen')+'</button>';
 var choices=Array.from(new Set(e.pairs.map(function(p){return p[1];}))).sort();return e.pairs.map(function(p,i){return '<label class="ev-match"><span>'+esc(p[0])+'</span><select data-ev-match="'+i+'"><option value="">Bitte w\u00e4hlen</option>'+choices.map(function(v){return '<option value="'+esc(v)+'"'+(a&&a[i]===v?' selected':'')+'>'+esc(v)+'</option>';}).join('')+'</select></label>';}).join('');
}
function button(attr,text,extra){return '<button type="button" class="v121-btn" '+attr+(extra||'')+'>'+text+'</button>';}
function paint(focus){var el=root();el.dataset.examMode=S.mode||'';el.dataset.examState=S.status;var html='';
 if(S.status==='idle'||S.status==='selection'){
  var qs=eligible(),saved=readSaved(),ids=M.activeChapterIds();
  html='<header class="v121-head"><p class="eyebrow">Testen</p><h1 tabindex="-1">Dein Wissen pr\u00fcfen</h1><p>Eine Aufgabe pro Schritt. Antworten bleiben bis zur Abgabe \u00e4nderbar.</p></header><p class="ev-review-note">Fachlich nachgerechnet: Jede Aufgabe hat einen L\u00f6sungsweg und wurde in zwei unabh\u00e4ngigen Durchg\u00e4ngen gel\u00f6st, Abweichungen wurden korrigiert (Stand 26.10.2026). Die Abnahme durch Lehrpersonen steht noch aus. Ergebnisse sind \u00dcbungsresultate, keine amtliche Pr\u00fcfungsnote.</p><div class="v121-scope-summary"><p>'+ids.size+' Kapitel \u00b7 '+qs.length+' Aufgaben</p>'+button('data-ev-scope','F\u00e4cher und Kapitel')+'</div>';
  if(saved&&saved.status!=='result')html+='<div class="ev-resume">Ein gespeicherter Durchgang ist vorhanden. '+button('data-ev-resume','Durchgang fortsetzen')+'</div>';
   var past=history();if(past.length)html+='<details class="ev-history"><summary>Deine letzten Tests in diesem Profil ('+past.length+')</summary><ol>'+past.slice(0,5).map(function(a){return '<li>'+esc(a.submittedAt.slice(0,10))+'\u00a0: '+a.correct+' von '+a.total+' richtig. '+a.partial+' teilweise, '+a.unanswered+' unbeantwortet.</li>';}).join('')+'</ol><p>Lokale Testversuche, keine amtliche Pr\u00fcfungsbereitschaft.</p></details>';

  html+='<div class="v121-mode-grid">'+button('data-exam-start="quick"','<b>Kurzquiz</b><span>Bis zu 5 Aufgaben aus deiner Auswahl</span>',qs.length?'':' disabled')+button('data-ev-chapters','<b>Kapiteltest</b><span>6 bis 10 Aufgaben aus einem Kapitel</span>',qs.length?'':' disabled')+button('data-exam-start="simulation"','<b>Pr\u00fcfungssimulation</b><span>Ablaufprobe mit bis zu 30 Aufgaben; keine offizielle Vollpr\u00fcfung</span>',qs.length?'':' disabled')+'</div>';
  if(!qs.length)html+='<p class="exam-defizit" role="status">F\u00fcr diese Auswahl liegen im aktuellen Register keine verwendbaren Aufgaben vor. Andere F\u00e4cher werden nicht stillschweigend zugemischt.</p>';
  if(chapterPicker){var groups={};qs.forEach(function(q){groups[q.chapterId]=(groups[q.chapterId]||0)+1;});html+='<div class="ev-chapters"><h2>Kapitel ausw\u00e4hlen</h2>'+M.chapters.filter(function(c){return ids.has(c.id);}).map(function(c){var n=groups[c.id]||0;return button('data-ev-chapter="'+esc(c.id)+'"',esc(c.title)+' <small>'+n+' Aufgaben</small>',n>=6?'':' disabled');}).join('')+'</div>';}
 }else if(S.status==='running'){
  var e=S.entries[S.i];if(!e){S.status='selection';message='Der Durchgang enth\u00e4lt keine verwendbaren Aufgaben.';paint(true);return;}
  html='<header class="ev-session-head"><p class="exam-pos" role="status">Aufgabe '+(S.i+1)+' von '+S.entries.length+'</p><span>'+esc(e.chapterTitle)+'</span></header><nav class="v121-nav" aria-label="Aufgaben\u00fcbersicht">'+S.entries.map(function(x,i){return '<button type="button" data-ev-jump="'+i+'"'+(i===S.i?' aria-current="step"':'')+' aria-label="Aufgabe '+(i+1)+(S.flags[i]?', markiert':'')+'" class="'+(i===S.i?'on ':'')+(answered(x,S.answers[i])?'done ':'')+(S.flags[i]?'flag':'')+'">'+(i+1)+'</button>';}).join('')+'</nav><h2 tabindex="-1" id="ev-question">'+esc(e.prompt)+'</h2><div class="exam-opts" role="group" aria-labelledby="ev-question">'+fields(e)+'</div><div class="exam-nav">'+button('data-exam-prev','Zur\u00fcck',S.i?'':' disabled')+button('data-exam-flag aria-pressed="'+!!S.flags[S.i]+'"',S.flags[S.i]?'Markierung entfernen':'Markieren')+button('data-exam-next',S.i===S.entries.length-1?'Zur Kontrolle':'Weiter')+'</div><div class="ev-secondary">'+button('data-ev-pause','Sp\u00e4ter fortsetzen')+button('data-ev-clear','Antwort l\u00f6schen')+'</div>';
 }else if(S.status==='review'){
  var res=completionResult();html='<h1 tabindex="-1">Kontrolle vor der Abgabe</h1><p>'+res.answered+' von '+res.total+' vollst\u00e4ndig beantwortet. '+res.partial+' teilweise. '+res.unanswered+' offen.</p><div class="v121-review">'+S.entries.map(function(e,i){return button('data-ev-jump="'+i+'"','<span>'+(i+1)+'</span><span>'+esc(e.chapterTitle)+' \u2014 '+(completionState(e,S.answers[i])==='partial'?'teilweise':answered(e,S.answers[i])?'beantwortet':'offen')+(S.flags[i]?' \u00b7 markiert':'')+'</span>');}).join('')+'</div><div class="exam-nav">'+button('data-exam-back','Zur\u00fcck zu den Aufgaben')+button('data-exam-submit','Verbindlich abgeben')+'</div>';
  }else if(S.status==='result'){
   var res=result();html='<h1 tabindex="-1">Dein Ergebnis</h1><p data-exam-result="1"><b>'+res.correct+' von '+res.total+' richtig</b> \u00b7 '+res.partial+' teilweise \u00b7 '+res.unanswered+' unbeantwortet</p><p>Eine Aufgabe z\u00e4hlt nur vollst\u00e4ndig richtig. Teilantworten bleiben erhalten, bringen in diesem Test aber keinen Punkt. Das ist keine amtliche Pr\u00fcfungsnote.</p><div class="exam-nav">'+(res.correct<res.total?button('data-ev-retry','Fehler und offene Aufgaben wiederholen'):'')+button('data-exam-new','Neuer Durchgang')+'</div><div class="v121-results">'+S.entries.map(function(e,i){var st=responseState(e,S.answers[i]),ok=st==='correct',fb=e.feedback||{};return '<article class="v121-result '+(ok?'ok':'no')+'" data-result-question="'+esc(e.id)+'" data-response-state="'+st+'"><h3>'+(i+1)+'. '+esc(e.prompt)+'</h3><p>'+responseLabel(st)+'</p><p><b>Deine Antwort:</b> '+esc(answerText(e,S.answers[i]))+'</p><p><b>Hinterlegte L\u00f6sung:</b> '+esc(solution(e))+'</p>'+button('data-ev-learn="'+esc(e.chapterId)+'"','Zum zugeh\u00f6rigen Lernstoff')+'<p>'+esc(fb[String(S.answers[i])]||fb['*']||e.explanation||'')+'</p></article>';}).join('')+'</div>';

 }
 if(message)html+='<p role="alert" class="exam-defizit">'+esc(message)+'</p>';if(saveFailed)html+='<p role="alert" class="exam-defizit">Dieser Durchgang konnte nicht gespeichert werden. Halte diese Seite offen.</p>';if(durableFailed)html+='<p role="alert" class="exam-defizit">Die dauerhafte Sicherung ist nicht verf\u00fcgbar. Schliesse diesen Tab nicht. Exportiere vorhandene Daten, bevor du Browserspeicher bereinigst.</p>';
 el.innerHTML=html;el.onchange=onAnswer;el.oninput=onAnswer;el.onclick=onClick;
 if(focus){var h=el.querySelector('[tabindex="-1"]');if(h)h.focus({preventScroll:false});}
}
function onAnswer(e){if(S.status!=='running')return;if(e.target.matches('input[name="ev"],input[name="ev-multi"],input.ev-text,input.ev-num,select[data-ev-match]'))saveAnswer();}
function onClick(ev){var t=ev.target.closest('button');if(!t)return;
 if(t.matches('[data-ev-retry]')){retry();return;}
  if(t.matches('[data-ev-learn]')){M.go('read',t.dataset.evLearn);return;}
  if(t.matches('[data-exam-start]')){start(t.dataset.examStart);return;}
 if(t.matches('[data-ev-scope]')){M.LEARNING_SCOPE_V1217.open();return;}
 if(t.matches('[data-ev-chapters]')){chapterPicker=!chapterPicker;paint(false);return;}
 if(t.matches('[data-ev-chapter]')){start('chapter',t.dataset.evChapter);return;}
 if(t.matches('[data-ev-resume]')){var saved=readSaved();if(saved){S=saved;persist();paint(true);}return;}
 if(t.matches('[data-exam-new]')){S.status='selection';chapterPicker=false;message='';paint(true);return;}
 if(S.status==='running')saveAnswer();
 if(t.matches('[data-exam-next]')){if(S.i<S.entries.length-1)S.i++;else S.status='review';}
 else if(t.matches('[data-exam-prev]')){S.i=Math.max(0,S.i-1);}
 else if(t.matches('[data-exam-flag]')){S.flags[S.i]=!S.flags[S.i];}
 else if(t.matches('[data-ev-jump]')){S.i=Number(t.dataset.evJump);S.status='running';}
 else if(t.matches('[data-exam-back]'))S.status='running';
 else if(t.matches('[data-exam-submit]')){if(S.status!=='review')return;S.status='result';S.submittedAt=new Date().toISOString();}
 else if(t.matches('[data-ev-move]')){var e=S.entries[S.i],order=S.orders[e.id],i=Number(t.dataset.evMove),j=i+Number(t.dataset.direction);if(j<0||j>=order.length)return;var v=order[i];order[i]=order[j];order[j]=v;delete S.answers[S.i];}
 else if(t.matches('[data-ev-confirm-order]'))S.answers[S.i]=S.orders[S.entries[S.i].id].slice();
 else if(t.matches('[data-ev-clear]')){delete S.answers[S.i];}
  else if(t.matches('[data-ev-pause]')){persist();M.go('home');return;}
 else return;
 persist();paint(!t.matches('[data-exam-flag],[data-ev-move],[data-ev-confirm-order]'));
 if(t.matches('[data-ev-move]')){var moved=document.querySelector('[data-ev-move="'+j+'"][data-direction="'+t.dataset.direction+'"]');if(moved&&!moved.disabled)moved.focus();}
}
function start(mode,cid){mode=mode==='exam'?'simulation':mode;if(!LEN[mode])mode='quick';var entries=pick(mode,cid);message='';
 if(!entries.length||(mode==='chapter'&&entries.length<6)){S.status='selection';message=entries.length?'Dieses Kapitel hat weniger als sechs verwendbare Aufgaben.':'Keine verwendbaren Aufgaben in dieser Auswahl.';paint(true);return 0;}
 persist();return begin(mode,entries);}
function begin(mode,entries){S={attemptId:newId(),mode:mode,entries:entries,i:0,answers:{},flags:{},orders:{},status:'running',context:context()};entries.forEach(function(e){if(e.type==='mc')S.orders[e.id]=shuffle(e.options.map(function(_,i){return i;}));if(e.type==='order'){var order=shuffle(e.items.map(function(_,i){return i;}));if(same(order,e.answer))order.reverse();S.orders[e.id]=order;}});persist();paint(true);return entries.length;}
function openSelection(){if(S.status==='running')saveAnswer();S.status='selection';message='';chapterPicker=false;paint(true);return true;}
function cancel(){if(S.status==='running')saveAnswer();S.status='idle';var el=document.getElementById('exam-v1217');if(el)el.hidden=true;}
M.EXAM_V1217={openSelection:openSelection,start:start,cancel:cancel,sessionKey:function(){return KEY;},historyKey:function(){return BANK;},history:history,result:result,erase:function(){S={mode:null,entries:[],i:0,answers:{},flags:{},orders:{},status:'idle',context:null};try{sessionStorage.removeItem(KEY);}catch(e){}try{localStorage.removeItem(BANK);}catch(e){}},lengths:LEN,length:function(){return S.entries.length;},audit:function(){return {registry:Object.keys(registry()).length,eligible:eligible().length,singleOwner:true,formats:['mc','truefalse','cloze','order','match','selection','correction']};},state:function(){return {status:S.status,mode:S.mode,entries:S.entries,index:S.i,answers:S.answers,flags:S.flags};}};
/* The original header calls a closure-local go(), not M.go(). Route Testen explicitly;
   leave all other existing click handlers intact, but unmount this owned surface. */
document.addEventListener('click',function(ev){var t=ev.target.closest&&ev.target.closest('button[data-v],button[data-go]');if(!t)return;var v=t.dataset.v||t.dataset.go;
 if(v==='test'||v==='stabletest'){ev.preventDefault();ev.stopImmediatePropagation();M.go('test');return;}
 if(S.status==='running')saveAnswer();var host=document.getElementById('v-exam-v121');if(host)host.hidden=true;
},true);
/* Preserve route wrappers and their metadata; never render an exam into a lesson or the programme chooser. */
(function(){var current=M.go;function wrap(fn){if(!fn||fn.__examUnmount)return fn;var w=function(v){if(v!=='test'&&v!=='stabletest'&&S.status==='running')saveAnswer();var r=fn.apply(this,arguments);if(v==='test'||v==='stabletest'){if(S.context&&!same(S.context,context()))S.status='selection';if(S.status==='idle')S.status='selection';paint(false);}else{var el=document.getElementById('exam-v1217');if(el)el.hidden=true;var host=document.getElementById('v-exam-v121');if(host)host.hidden=true;}return r;};w.__examUnmount=true;for(var k in fn)if(!(k in w))w[k]=fn[k];return w;}
 try{Object.defineProperty(M,'go',{configurable:true,get:function(){return current;},set:function(fn){current=wrap(fn);}});M.go=current;}catch(e){M.go=wrap(current);}
})();
})();

document.title='Stoffknacker';
window.MNEMIKA_AUSGABE={version:'121.9-r177',build:'r176',datum:'2026-11-09',releaseStatus:'CANDIDATE_NOT_DEPLOYED'};

}catch(e){console.error(e);}
