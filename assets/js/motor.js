/* Stoffknacker Lernmotor (r161). Bewährte Funktionsideen grosser Lern-Apps, eigenständig umgesetzt (eigener Code, eigene Texte, eigenes Design):
   Lernkalender (Aktivität), persönliche Wochenliga (gegen die eigenen Vorwochen, ohne Konto), Erinnerung als Kalenderdatei,
   Fokus-Timer, Teilen des Fortschritts, eigene Karteikarten mit Wiederholung in Abständen.
   Liest den Lernstand nur (store().days, streak); schreibt ausschliesslich «mnemika-motor-v1». */
(function(){'use strict';
var M=window.MNEMIKA;if(!M||M.__motor)return;M.__motor=true;
var KEY='mnemika-motor-v1';
function e(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
function fx(a){try{if(window.mnFx)window.mnFx.spiel(a);}catch(x){}}
function tag(d){var z=new Date(d.getTime()-d.getTimezoneOffset()*6e4);return z.toISOString().slice(0,10);}
function heute(){try{return M.dayKey?M.dayKey():tag(new Date());}catch(x){return tag(new Date());}}
function plusTage(k,n){var d=new Date(k+'T12:00:00');d.setDate(d.getDate()+n);return tag(d);}

/* ── eigener Speicher, geschützt wie Schule fürs Leben ── */
var Sp={raw:undefined,mem:null,schutz:false,offen:false};
function leer(){return {v:1,karten:[],prefs:{fokus:25,pause:5}};}
function gueltigerMotor(r){
 if(!r||r.v!==1||!Array.isArray(r.karten)||r.karten.length>5000)return false;
 if(r.prefs!=null&&(typeof r.prefs!=='object'||Array.isArray(r.prefs)))return false;
 var p=r.prefs||{},seen={};
 if(p.fokus!=null&&(!Number.isFinite(p.fokus)||p.fokus<1||p.fokus>180))return false;
 if(p.pause!=null&&(!Number.isFinite(p.pause)||p.pause<1||p.pause>60))return false;
 return r.karten.every(function(k){if(!k||typeof k!=='object'||Array.isArray(k)||typeof k.id!=='string'||!k.id||k.id.length>160||seen[k.id]||typeof k.f!=='string'||!k.f||k.f.length>300||typeof k.b!=='string'||!k.b||k.b.length>600)return false;seen[k.id]=1;return (k.box==null||(Number.isInteger(k.box)&&k.box>=1&&k.box<=5))&&(k.due==null||(typeof k.due==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(k.due)));});
}
function lies(){
 if(Sp.offen&&Sp.mem&&!Sp.schutz)return Sp.mem;
 var raw=null;try{raw=localStorage.getItem(KEY);}catch(x){}
 if(raw===Sp.raw&&Sp.mem)return Sp.mem;Sp.raw=raw;
 if(raw==null){Sp.schutz=false;Sp.mem=leer();return Sp.mem;}
 var r=null;try{r=JSON.parse(raw);}catch(x){}
 if(gueltigerMotor(r)){r.prefs=Object.assign({fokus:25,pause:5},r.prefs||{});Sp.schutz=false;Sp.mem=r;}
 else{Sp.schutz=true;if(!Sp.mem)Sp.mem=leer();}
 return Sp.mem;}
function schreibe(){lies();if(Sp.schutz){Sp.offen=true;return false;}
 var txt=JSON.stringify(Sp.mem);if(!gueltigerMotor(Sp.mem)||txt.length>=4e6){Sp.offen=true;return false;}try{localStorage.setItem(KEY,txt);if(localStorage.getItem(KEY)!==txt)throw 0;Sp.raw=txt;Sp.offen=false;return true;}catch(x){Sp.offen=true;return false;}}
M.__motorLive=function(){lies();return Sp.offen&&!Sp.schutz?JSON.stringify(Sp.mem):null;};
try{var REG=M.STORAGE_REGISTRY;if(REG&&!REG.some(function(r){return r.k===KEY;}))REG.unshift({k:KEY,cls:'progress',v:function(v,k,err){try{var o=JSON.parse(v);if(!gueltigerMotor(o))err.push(k+': unbekanntes Format');}catch(x){err.push(k+': kein JSON');}},live:function(){return M.__motorLive();}});}catch(x){}

/* ── Lernstand lesen (nur lesen) ── */
function tage(){try{var S=M.store();return S&&S.days&&typeof S.days==='object'?S.days:{};}catch(x){return {};}}
function serie(){try{var S=M.store();return S&&S.streak?+S.streak:0;}catch(x){return 0;}}
function wocheStart(k){var d=new Date(k+'T12:00:00'),w=(d.getDay()+6)%7;d.setDate(d.getDate()-w);return tag(d);}
function wochen(n){var D=tage(),h=heute(),s=wocheStart(h),out=[];for(var i=0;i<n;i++){var st=plusTage(s,-7*i),xp=0,akt=0;for(var j=0;j<7;j++){var v=+D[plusTage(st,j)]||0;xp+=v;if(v>0)akt++;}out.push({start:st,xp:xp,tage:akt});}return out;}

/* ── Serienschutz (r161): wie ein «Streak Freeze», aber ohne die bestehende Zählung «Tage in Folge» zu verändern.
   Je 7 Lerntage gibt es 1 Schutztag (höchstens 2 auf Vorrat). Ein verpasster Tag wird automatisch überbrückt, solange Vorrat da ist.
   Rein aus store().days berechnet, nichts wird geschrieben. Der heutige Tag bricht die Serie nie (er ist noch nicht vorbei). */
function kalenderTag(k){if(typeof k!=='string'||!/^\d{4}-\d{2}-\d{2}$/.test(k))return false;var d=new Date(k+'T12:00:00');return Number.isFinite(d.getTime())&&tag(d)===k;}
function schutz(D,h){D=D||tage();h=h||heute();var ks=Object.keys(D).filter(function(k){return kalenderTag(k)&&(+D[k]||0)>0&&k<=h;}).sort();
 var r={serie:0,vorrat:0,eingesetzt:0};if(!ks.length)return r;var d=ks[0],n=0,cnt=0;
 while(d<=h&&n++<4000){var akt=(+D[d]||0)>0;
  if(akt){r.serie++;cnt++;if(cnt%7===0)r.vorrat=Math.min(2,r.vorrat+1);}
  else if(d<h){if(r.vorrat>0){r.vorrat--;r.eingesetzt++;}else{r.serie=0;r.eingesetzt=0;}}
  d=plusTage(d,1);}
 return r;}

/* ── Lernkalender (18 Wochen) ── */
function kalender(){
 var D=tage(),h=heute(),start=plusTage(wocheStart(h),-7*17),max=1,k,i;
 for(i=0;i<126;i++){k=plusTage(start,i);max=Math.max(max,+D[k]||0);}
 var zellen='',aktiv=0;
 for(i=0;i<126;i++){k=plusTage(start,i);var v=+D[k]||0,stufe=v<=0?0:v<max*.25?1:v<max*.5?2:v<max*.75?3:4,zuk=k>h;if(v>0)aktiv++;
  zellen+='<i class="mo-z mo-s'+(zuk?'x':stufe)+'" style="grid-row:'+((i%7)+1)+';grid-column:'+(Math.floor(i/7)+1)+'" title="'+k+': '+v+' XP"></i>';}
 return '<figure class="mo-kal" aria-label="Lernkalender der letzten 18 Wochen: an '+aktiv+' Tagen gelernt"><div class="mo-gitter" aria-hidden="true">'+zellen+'</div><figcaption><span>'+aktiv+' Lerntage in 18 Wochen</span><span class="mo-leg" aria-hidden="true">weniger <i class="mo-z mo-s0"></i><i class="mo-z mo-s1"></i><i class="mo-z mo-s2"></i><i class="mo-z mo-s3"></i><i class="mo-z mo-s4"></i> mehr</span></figcaption></figure>';}

/* ── Persönliche Wochenliga ── */
function liga(){
 var W=wochen(5),jetzt=W[0],vor=W.slice(1),beste=vor.reduce(function(m,w){return Math.max(m,w.xp);},0),
  rang=1+vor.filter(function(w){return w.xp>jetzt.xp;}).length;
 var titel=['🥇 Bestwoche','🥈 Platz 2','🥉 Platz 3','Platz 4','Platz 5'][rang-1];
 var fehlt=Math.max(0,beste-jetzt.xp+1);
 return '<div class="mo-liga"><div class="mo-liga-kopf"><b>'+titel+'</b><span>gegen deine letzten 4 Wochen</span></div><ol>'+W.map(function(w,i){var p=beste||jetzt.xp?Math.round(w.xp/Math.max(beste,jetzt.xp,1)*100):0;
   return '<li class="'+(i===0?'mo-jetzt':'')+'"><span>'+(i===0?'Diese Woche':'vor '+i+' Wo.')+'</span><div class="mo-bar"><i style="width:'+p+'%"></i></div><b>'+w.xp+' XP</b></li>';}).join('')+'</ol>'
  +'<p class="mo-klein">'+(rang===1&&jetzt.xp>0?'Du bist diese Woche besser als in jeder der letzten vier. Weiter so!':jetzt.xp===0?'Noch keine Punkte diese Woche. Eine kurze Runde reicht für den Anfang.':'Noch '+fehlt+' XP bis zu deiner Bestwoche.')+'</p></div>';}

/* ── Erinnerung als Kalenderdatei (ohne Konto, ohne Server) ── */
function ics(zeit,tageArt){
 var match=/^([01]?[0-9]|2[0-3]):([0-5][0-9])$/.exec(String(zeit||'')),hh=match?('0'+Number(match[1])).slice(-2):'18',mm=match?match[2]:'00',d=(function(){var k=heute(),w=new Date(k+'T12:00:00').getDay();if(tageArt==='werktags'&&(w===0||w===6))k=plusTage(k,w===6?2:1);return k.replace(/-/g,'');})(),
  jetzt=new Date().toISOString().replace(/[-:]/g,'').replace(/\.\d+/,''),
  rr=tageArt==='werktags'?'RRULE:FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR':'RRULE:FREQ=DAILY';
 var L=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Stoffknacker//Lernerinnerung//DE','CALSCALE:GREGORIAN','BEGIN:VEVENT',
  'UID:mnemika-lernzeit-'+jetzt+'@stoffknacker.com','DTSTAMP:'+jetzt,'DTSTART:'+d+'T'+hh+mm+'00','DURATION:PT10M',rr,
  'SUMMARY:Stoffknacker: 10 Minuten lernen','DESCRIPTION:Kurze Runde oder Wiederholung: https://stoffknacker.com/#repeat','URL:https://stoffknacker.com/#repeat',
  'BEGIN:VALARM','ACTION:DISPLAY','DESCRIPTION:Zeit für Stoffknacker','TRIGGER:PT0M','END:VALARM','END:VEVENT','END:VCALENDAR'];
 return L.join('\r\n')+'\r\n';}
function ladeHerunter(txt,name,typ){try{var a=document.createElement('a');a.href=URL.createObjectURL(new Blob([txt],{type:typ}));a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(function(){URL.revokeObjectURL(a.href);},4000);}catch(x){}}

/* ── Fokus-Timer ── */
var F={rest:0,phase:'fokus',lauf:null,ende:0};
function fokusText(){var s=Math.max(0,Math.round(F.rest/1000));return ('0'+Math.floor(s/60)).slice(-2)+':'+('0'+(s%60)).slice(-2);}
function fokusMal(){var el=document.getElementById('mo-uhr');if(el){el.textContent=fokusText();var ph=document.getElementById('mo-phase');if(ph)ph.textContent=F.phase==='fokus'?'Fokus':'Pause';var b=document.querySelector('[data-mo=fokus-start]');if(b)b.textContent=F.lauf?'Pause':'Start';}}
function fokusTick(){F.rest=F.ende-Date.now();if(F.rest<=0){fx('fertig');/* r161 (Audit R161A-09): Vibration nur, wenn sie in den Einstellungen nicht ausgeschaltet ist (gleiche Einstellung wie Schule fürs Leben). */try{var vp=JSON.parse(localStorage.getItem('mnemika-life-v7')||'{}');vp=vp&&vp.prefs;if(!(vp&&vp.vib===false)&&navigator.vibrate)navigator.vibrate([200,100,200]);}catch(x){}
 var p=lies().prefs;F.phase=F.phase==='fokus'?'pause':'fokus';F.rest=(F.phase==='fokus'?p.fokus:p.pause)*60000;F.ende=Date.now()+F.rest;
 var st=document.getElementById('mo-fokus-status');if(st)st.textContent=F.phase==='pause'?'Geschafft! Jetzt '+p.pause+' Minuten Pause.':'Pause vorbei. Nächste Fokus-Runde läuft.';}
 fokusMal();}
function fokusStartStop(){var p=lies().prefs;if(F.lauf){clearInterval(F.lauf);F.lauf=null;}else{if(F.rest<=0)F.rest=p.fokus*60000;F.ende=Date.now()+F.rest;F.lauf=setInterval(fokusTick,250);fx('tipp');}fokusMal();}
function fokusReset(){if(F.lauf)clearInterval(F.lauf);F.lauf=null;F.phase='fokus';F.rest=lies().prefs.fokus*60000;fokusMal();}

/* ── Eigene Karteikarten (Leitner-Boxen 1–5: 1, 2, 4, 7, 15 Tage) ── */
var ABST=[0,1,2,4,7,15];
function faellig(){var h=heute();return lies().karten.filter(function(k){return !k.due||k.due<=h;});}
var K={liste:null,i:0,offen:false};
function karteHtml(){if(!K.liste||K.i>=K.liste.length)return '<div class="mo-kk-fertig"><b>Alle fälligen Karten gelernt.</b><p>Die nächsten kommen, wenn sie wieder fällig sind.</p></div>';
 var k=K.liste[K.i];return '<div class="mo-kk" role="group" aria-label="Karte '+(K.i+1)+' von '+K.liste.length+'"><p class="mo-klein">Karte '+(K.i+1)+' von '+K.liste.length+' · Box '+(k.box||1)+'</p><div class="mo-kk-vorn">'+e(k.f)+'</div>'
  +(K.offen?'<div class="mo-kk-hinten">'+e(k.b)+'</div><div class="mo-reihe"><button type="button" class="mo-btn mo-nein" data-mo="kk-nochmal">Nochmal</button><button type="button" class="mo-btn mo-ja" data-mo="kk-gewusst">Gewusst</button></div>'
  :'<button type="button" class="mo-btn mo-ja" data-mo="kk-zeigen">Antwort zeigen</button>')+'</div>';}
function bewerten(gewusst){var k=K.liste[K.i],m=lies(),orig=m.karten.filter(function(x){return x.id===k.id;})[0];if(!orig)return;
 orig.box=gewusst?Math.min(5,(orig.box||1)+1):1;orig.due=plusTage(heute(),ABST[orig.box]);orig.n=(orig.n||0)+1;schreibe();fx(gewusst?'gut':'falsch');
 if(!gewusst)K.liste.push(k);K.i++;K.offen=false;mal();}

/* ── Ansicht #v-motor ── */
function mal(){
 var v=document.getElementById('v-motor');if(!v)return;var m=lies(),p=m.prefs,W=wochen(1)[0];
 if(!F.lauf&&F.rest<=0)F.rest=p.fokus*60000;
 v.className='view mo-view';
 v.innerHTML='<header class="mo-kopf"><p class="mo-kick">LERNMOTOR</p><h1>Dranbleiben leicht gemacht</h1><p>Dein Lernkalender, deine Wochenliga, Erinnerungen, Fokus-Timer und eigene Karteikarten. Alles bleibt auf diesem Gerät.</p>'
  +'<div class="mo-zahlen"><div><b>🔥 '+serie()+'</b><span>Tage in Folge</span></div><div><b>⚡ '+W.xp+'</b><span>XP diese Woche</span></div><div><b>📅 '+W.tage+'/7</b><span>Lerntage diese Woche</span></div><div><b>🗂️ '+faellig().length+'</b><span>Karten fällig</span></div></div>'+(function(){var z=schutz();return '<p class="mo-schutz">🛡️ <b>Serie mit Schutz: '+z.serie+' '+(z.serie===1?'Tag':'Tage')+'</b> · '+z.vorrat+' Schutztag'+(z.vorrat===1?'':'e')+' bereit'+(z.eingesetzt?' · '+z.eingesetzt+' verpasste'+(z.eingesetzt===1?'r Tag':' Tage')+' überbrückt':'')+'<br><span>Je 7 Lerntage gibt es einen Schutztag (höchstens 2). Er überbrückt automatisch einen verpassten Tag. Die Zählung «Tage in Folge» oben bleibt wie bisher.</span></p>';})()+'</header>'
  +(Sp.schutz?'<div class="lf-warn" role="alert"><p>Gespeicherte Karteikarten können nicht sicher gelesen werden. Sie bleiben unverändert. Sichere sie zuerst.</p><div><button type="button" class="lf-wbtn" data-mo="export">Originaldaten sichern</button></div></div>':'')
  +(Sp.offen&&!Sp.schutz?'<div class="lf-warn" role="alert"><p>Noch nicht gespeichert. Exportiere eine Sicherung oder versuche es erneut.</p><div><button type="button" class="lf-wbtn" data-mo="export">Sicherung exportieren</button><button type="button" class="lf-wbtn" data-mo="retry">Erneut speichern</button></div></div>':'')
  +'<section class="mo-karte"><h2>📅 Lernkalender</h2>'+kalender()+'</section>'
  +'<section class="mo-karte"><h2>🏆 Deine Wochenliga</h2>'+liga()+'<div class="mo-reihe"><button type="button" class="mo-btn" data-mo="teilen">Fortschritt teilen</button></div><p class="mo-klein" id="mo-teilen-status" role="status"></p></section>'
  +'<section class="mo-karte"><h2>⏰ Erinnerung</h2><p>Eine Kalenderdatei mit täglicher Lernzeit. Dein Kalender erinnert dich, ganz ohne Konto.</p><div class="mo-reihe"><label>Zeit <input type="time" id="mo-zeit" value="'+e(p.zeit||'18:00')+'"></label><label>Tage <select id="mo-tage"><option value="taeglich"'+(p.tage==='werktags'?'':' selected')+'>täglich</option><option value="werktags"'+(p.tage==='werktags'?' selected':'')+'>Mo–Fr</option></select></label><button type="button" class="mo-btn mo-ja" data-mo="ics">Kalenderdatei laden</button></div></section>'
  +'<section class="mo-karte"><h2>🎯 Fokus-Timer</h2><div class="mo-uhrbox"><span id="mo-phase">'+(F.phase==='fokus'?'Fokus':'Pause')+'</span><b id="mo-uhr" aria-live="off">'+fokusText()+'</b></div><p class="mo-klein" id="mo-fokus-status" role="status">'+p.fokus+' Minuten lernen, '+p.pause+' Minuten Pause. Handy weglegen hilft.</p><div class="mo-reihe"><button type="button" class="mo-btn mo-ja" data-mo="fokus-start">'+(F.lauf?'Pause':'Start')+'</button><button type="button" class="mo-btn" data-mo="fokus-reset">Zurücksetzen</button><label>Fokus <select id="mo-fokusmin">'+[15,20,25,30,45].map(function(n){return '<option'+(n===p.fokus?' selected':'')+'>'+n+'</option>';}).join('')+'</select> Min.</label></div></section>'
  +'<section class="mo-karte"><h2>🗂️ Eigene Karteikarten</h2><p>Schreib dir eigene Karten. Gewusste Karten kommen seltener (nach 1, 2, 4, 7, 15 Tagen), schwierige sofort wieder.</p>'
  +'<form class="mo-neu" data-mo-form="1"><label>Vorderseite<input id="mo-f" maxlength="300" required placeholder="z. B. Satz des Pythagoras"></label><label>Rückseite<input id="mo-b" maxlength="600" required placeholder="a² + b² = c² im rechtwinkligen Dreieck"></label><button type="submit" class="mo-btn">Karte speichern</button></form>'
  +'<div class="mo-reihe"><button type="button" class="mo-btn mo-ja" data-mo="kk-start"'+(faellig().length?'':' disabled')+'>Fällige Karten lernen ('+faellig().length+')</button><span class="mo-klein">'+m.karten.length+' Karten insgesamt</span></div>'
  +'<div id="mo-kk-platz">'+(K.liste?karteHtml():'')+'</div>'
  +(m.karten.length?'<details class="mo-liste"><summary>Alle Karten ansehen</summary><ul>'+m.karten.map(function(k){return '<li><span><b>'+e(k.f)+'</b> · '+e(k.b)+'</span><button type="button" class="lf-wbtn" data-mo="kk-weg" data-id="'+e(k.id)+'">Löschen</button></li>';}).join('')+'</ul></details>':'')
  +'</section><p class="mo-klein">Ideen wie Lernkalender, Wochenvergleich, Erinnerungen, Fokus-Timer und Karteikarten sind in vielen Lern-Apps verbreitet. Hier sind sie eigenständig umgesetzt, ohne Konto und ohne Daten an Dritte.</p>';
}
function zeige(){mal();try{M.go('motor');}catch(x){}var v=document.getElementById('v-motor');if(v&&v.hidden){[].forEach.call(document.querySelectorAll('main > .view'),function(s){s.hidden=s!==v;});}window.scrollTo(0,0);}

document.addEventListener('click',function(ev){
 var t=ev.target.closest&&ev.target.closest('[data-motor]');
 if(t){ev.preventDefault();ev.stopImmediatePropagation();var mp=document.getElementById('menupop');if(mp&&mp.contains(t))mp.hidden=true;fx('tipp');zeige();return;}
 var b=ev.target.closest&&ev.target.closest('[data-mo]');if(!b||!b.closest('#v-motor'))return;var a=b.dataset.mo,m=lies();
 if(a==='ics'){var z=(document.getElementById('mo-zeit')||{}).value||'18:00',ta=(document.getElementById('mo-tage')||{}).value||'taeglich';m.prefs.zeit=z;m.prefs.tage=ta;schreibe();ladeHerunter(ics(z,ta),'stoffknacker-lernzeit.ics','text/calendar');fx('tipp');return;}
 if(a==='fokus-start'){fokusStartStop();return;}
 if(a==='fokus-reset'){fokusReset();return;}
 if(a==='teilen'){var W=wochen(1)[0],txt='Ich lerne mit Stoffknacker: '+serie()+' Tage in Folge und '+W.xp+' XP diese Woche. Kostenlos und ohne Konto: https://stoffknacker.com/',st=document.getElementById('mo-teilen-status');
  if(navigator.share){navigator.share({title:'Stoffknacker',text:txt}).catch(function(){});}else if(navigator.clipboard){navigator.clipboard.writeText(txt).then(function(){if(st)st.textContent='Text kopiert. Du kannst ihn jetzt einfügen.';},function(){if(st)st.textContent=txt;});}else if(st)st.textContent=txt;return;}
 if(a==='kk-start'){K.liste=faellig().slice();K.i=0;K.offen=false;mal();var pl=document.getElementById('mo-kk-platz');if(pl)pl.scrollIntoView({block:'center'});return;}
 if(a==='kk-zeigen'){K.offen=true;var pl2=document.getElementById('mo-kk-platz');if(pl2){pl2.innerHTML=karteHtml();var g=pl2.querySelector('[data-mo=kk-gewusst]');if(g)g.focus();}return;}
 if(a==='kk-gewusst'||a==='kk-nochmal'){bewerten(a==='kk-gewusst');var pl3=document.getElementById('mo-kk-platz');if(pl3){var f=pl3.querySelector('button');if(f)f.focus();}return;}
 if(a==='kk-weg'){if(b.dataset.ok!=='1'){b.dataset.ok='1';b.textContent='Wirklich löschen?';return;}m.karten=m.karten.filter(function(k){return k.id!==b.dataset.id;});schreibe();mal();return;}
 if(a==='export'){var o={app:'Stoffknacker',schema:M.SCHEMA_VERSION||2,exportedAt:new Date().toISOString(),keys:{}};try{var r=localStorage.getItem(KEY);if(r!=null)o.keys[KEY]=r;}catch(x){}if(Sp.offen)o.unsaved={key:KEY,value:JSON.stringify(m)};ladeHerunter(JSON.stringify(o,null,1),'stoffknacker-lernmotor-'+heute()+'.json','application/json');return;}
 if(a==='retry'){schreibe();mal();return;}
},true);
document.addEventListener('change',function(ev){if(ev.target&&ev.target.id==='mo-fokusmin'){var m=lies();m.prefs.fokus=+ev.target.value||25;schreibe();if(!F.lauf){F.phase='fokus';F.rest=m.prefs.fokus*60000;fokusMal();}}});
document.addEventListener('submit',function(ev){var f=ev.target;if(!f||!f.matches||!f.matches('[data-mo-form]'))return;ev.preventDefault();
 var vf=document.getElementById('mo-f'),vb=document.getElementById('mo-b'),fv=(vf.value||'').trim(),bv=(vb.value||'').trim();if(!fv||!bv)return;
 var m=lies();m.karten.push({id:Date.now().toString(36)+Math.random().toString(36).slice(2,6),f:fv.slice(0,300),b:bv.slice(0,600),box:1,due:heute(),created:heute()});schreibe();fx('gut');mal();var n=document.getElementById('mo-f');if(n)n.focus();},true);

/* Startseiten-Karte (Dashboard) */
function startKarte(){var v=document.getElementById('v-home');if(!v||v.hidden||v.querySelector('.mo-start'))return;
 var W=wochen(1)[0],k=document.createElement('button');k.type='button';k.className='mo-start';k.setAttribute('data-motor','');
 k.innerHTML='<span class="mo-start-i" aria-hidden="true">⚡</span><span><small>LERNMOTOR</small><b>🔥 '+serie()+' Tage · ⚡ '+W.xp+' XP diese Woche · 🗂️ '+faellig().length+' Karten fällig</b><em>Kalender, Wochenliga, Erinnerung, Fokus-Timer, eigene Karten</em></span><span aria-hidden="true">→</span>';
 var l=v.querySelector('.lf-start-karte'),h=v.querySelector('.r39-start');if(l)l.insertAdjacentElement('afterend',k);else if(h&&h.parentNode===v)h.insertAdjacentElement('afterend',k);else v.insertBefore(k,v.firstChild);}
var go0=M.go;if(typeof go0==='function'&&!go0.__mo){var w=function(v){if(v==='motor')mal();var r=go0.apply(this,arguments);if(v==='motor')setTimeout(function(){var n=document.querySelector('#mn-where [aria-current=page]');if(n)n.textContent='Lernmotor';},20);setTimeout(startKarte,40);setTimeout(startKarte,350);return r;};w.__mo=true;w.__lf=go0.__lf;for(var k in go0)if(!(k in w))w[k]=go0[k];M.go=w;}

var CSS='.mo-view{padding-bottom:40px}.mo-kopf{background:linear-gradient(135deg,#eef6ff,#f5f3ff);border:1px solid #dde4ee;border-radius:22px;padding:20px;margin:0 0 16px}.mo-kick{margin:0 0 6px;font-size:12.5px;font-weight:800;letter-spacing:.1em;color:#5b21b6}.mo-kopf h1{margin:0 0 6px}.mo-kopf p{margin:0}'
 +'.mo-zahlen{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px;margin-top:14px}.mo-zahlen div{background:#fff;border-radius:14px;padding:10px;text-align:center;border:1px solid #e5e7eb}.mo-zahlen b{display:block;font-size:20px}.mo-zahlen span{font-size:12.5px;color:#4b5563}'
 +'.mo-karte{background:#fff;border:1px solid #e5e7eb;border-radius:18px;padding:16px;margin:0 0 14px}.mo-karte h2{margin:0 0 10px;font-size:19px}'
 +'.mo-kal{margin:0;overflow-x:auto}.mo-gitter{display:grid;grid-template-rows:repeat(7,12px);grid-auto-columns:12px;gap:3px}.mo-z{display:inline-block;width:12px;height:12px;border-radius:3px;background:#ebedf0}.mo-s1{background:#c6f0a6}.mo-s2{background:#8fdd56}.mo-s3{background:#58cc02}.mo-s4{background:#3a8a00}.mo-sx{background:transparent;border:1px dashed #e5e7eb}'
 +'.mo-kal figcaption{display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px;margin-top:8px;font-size:13px;color:#4b5563}.mo-leg{display:inline-flex;align-items:center;gap:3px}'
 +'.mo-liga ol{list-style:none;margin:0;padding:0;display:grid;gap:6px}.mo-liga li{display:grid;grid-template-columns:90px 1fr 70px;gap:8px;align-items:center;font-size:14px}.mo-liga li b{text-align:right}.mo-bar{height:12px;border-radius:99px;background:#eef2f7;overflow:hidden}.mo-bar i{display:block;height:100%;background:#93c5fd;border-radius:99px}.mo-jetzt .mo-bar i{background:#58cc02}.mo-jetzt{font-weight:800}.mo-liga-kopf{display:flex;gap:10px;align-items:baseline;margin-bottom:8px}.mo-liga-kopf b{font-size:18px}.mo-liga-kopf span{font-size:13px;color:#4b5563}'
 +'.mo-klein{font-size:13.5px;color:#4b5563;margin:8px 0 0}.mo-reihe{display:flex;flex-wrap:wrap;gap:10px;align-items:center;margin-top:10px}.mo-reihe label{display:flex;gap:6px;align-items:center;font-size:14px}.mo-reihe input,.mo-reihe select{font:inherit;padding:8px;border:1px solid #cbd5e1;border-radius:10px;min-height:40px}'
 +'.mo-btn{min-height:44px;padding:10px 16px;border-radius:12px;border:2px solid #cbd5e1;background:#fff;font:inherit;font-weight:700;color:#1b2333;cursor:pointer}.mo-btn:disabled{opacity:.5;cursor:default}.mo-ja{background:#58cc02;border-color:#46a302;color:#0B1220}.mo-nein{background:#fff4d6;border-color:#f59e0b}.mo-btn:focus-visible,.mo-start:focus-visible{outline:3px solid #1d4ed8;outline-offset:2px}'
 +'.mo-uhrbox{display:flex;align-items:baseline;gap:12px}.mo-uhrbox b{font-size:48px;font-variant-numeric:tabular-nums}.mo-uhrbox span{font-weight:800;color:#5b21b6}'
 +'.mo-neu{display:grid;gap:8px;margin:10px 0}.mo-neu label{display:grid;gap:4px;font-size:14px;font-weight:700}.mo-neu input{font:inherit;font-weight:400;padding:10px;border:1px solid #cbd5e1;border-radius:10px;min-height:44px}'
 +'.mo-kk{margin-top:12px;border:2px solid #e5e7eb;border-radius:18px;padding:16px;text-align:center}.mo-kk-vorn{font-size:20px;font-weight:800;margin:6px 0 12px}.mo-kk-hinten{font-size:17px;background:#f0fdf4;border-radius:12px;padding:12px;margin:0 0 10px}.mo-kk .mo-reihe{justify-content:center}.mo-kk-fertig{margin-top:12px;background:#f0fdf4;border-radius:14px;padding:12px}'
 +'.mo-liste summary{cursor:pointer;font-weight:700;padding:8px 0;color:#1d3a8a}.mo-liste ul{list-style:none;padding:0;margin:0;display:grid;gap:6px}.mo-liste li{display:flex;justify-content:space-between;gap:8px;align-items:center;font-size:14px;border-bottom:1px solid #f0f0f0;padding:6px 0}'
 +'.mo-start{display:grid;grid-template-columns:auto minmax(0,1fr) auto;gap:12px;align-items:center;width:100%;text-align:left;margin:0 0 14px;padding:14px 16px;border-radius:20px;border:2px solid #ddd6fe;border-bottom-width:5px;background:linear-gradient(120deg,#f5f3ff,#eef6ff);font:inherit;color:#1b2333;cursor:pointer}.mo-start-i{font-size:26px}.mo-start small{display:block;font-size:11.5px;font-weight:800;letter-spacing:.1em;color:#5b21b6}.mo-start b{display:block;font-size:15px;margin:2px 0}.mo-start em{font-style:normal;font-size:13px;color:#4b5563}'
 +'.mo-schutz{margin:12px 0 0;padding:10px 12px;border-radius:12px;background:#ecfdf5;border:1px solid #a7f3d0;font-size:14px;color:#064e3b}.mo-schutz span{font-size:12.5px;color:#065f46}'
 +'@media (max-width:560px){.mo-zahlen{grid-template-columns:repeat(2,minmax(0,1fr))}.mo-liga li{grid-template-columns:80px 1fr 62px}}#menupop [data-motor] small{background:#7c3aed;color:#fff;border-radius:6px;padding:1px 6px;font-size:11px;font-weight:800;margin-left:6px}';
(function(){if(document.getElementById('mo-css'))return;var s=document.createElement('style');s.id='mo-css';s.textContent=CSS;(document.head||document.documentElement).appendChild(s);})();
M.motor={validateState:gueltigerMotor,_schutz:schutz,zeige:zeige,ics:ics,wochen:wochen,_stand:lies,_karteHtml:karteHtml};
function start(){startKarte();if(/^#motor/.test(location.hash)){mal();setTimeout(mal,60);}setTimeout(startKarte,600);setTimeout(startKarte,1600);}
window.addEventListener('hashchange',function(){if(/^#motor/.test(location.hash))setTimeout(mal,0);});
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else setTimeout(start,0);
})();
