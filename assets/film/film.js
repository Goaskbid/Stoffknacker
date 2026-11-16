/* Stoffknacker Erklärfilm v2: animierte Kurzerklärung mit Lehrperson, Stimme und Musik.
   Inhalte stammen wörtlich aus dem Kapiteltext. Keine Netzwerkzugriffe: Stimme = lokale Browserstimme, Musik = im Browser erzeugt. */
(function(){"use strict";
var BASE=(function(){var s=document.currentScript&&document.currentScript.src||'';return s.replace(/film\.js(\?.*)?$/,'');})();
var MOT={
mathematik:'<path d="M10 90 C40 90 50 20 80 20 S120 70 150 40"/><path d="M10 95 H155 M15 100 V10" class="ax"/>',
biologie:'<circle cx="55" cy="55" r="38"/><circle cx="55" cy="55" r="12" class="f"/><circle cx="118" cy="55" r="30"/><circle cx="118" cy="55" r="9" class="f"/>',
chemie:'<circle cx="80" cy="55" r="12" class="f"/><circle cx="35" cy="30" r="9"/><circle cx="125" cy="30" r="9"/><circle cx="80" cy="100" r="9"/><path d="M71 48 L43 34 M89 48 L117 34 M80 67 V91"/>',
physik:'<path d="M5 55 Q25 15 45 55 T85 55 T125 55 T165 55"/><path d="M5 55 H165" class="ax"/>',
geschichte:'<path d="M10 60 H160" class="ax"/><circle cx="30" cy="60" r="7" class="f"/><circle cx="75" cy="60" r="7" class="f"/><circle cx="120" cy="60" r="7" class="f"/><path d="M30 60 V30 M75 60 V85 M120 60 V30"/>',
geografie:'<circle cx="80" cy="55" r="45"/><path d="M35 55 H125 M80 10 V100 M45 30 Q80 45 115 30 M45 80 Q80 65 115 80"/>',
_:'<path d="M20 90 L60 40 L95 70 L150 15"/><circle cx="150" cy="15" r="6" class="f"/>'};
var LEHRER={mathematik:'lena',biologie:'sophie',chemie:'sophie',physik:'sophie',geschichte:'alex',geografie:'alex','wirtschaft-und-recht':'alex',deutsch:'marco',englisch:'maya',franzoesisch:'maya',italienisch:'maya',spanisch:'maya',latein:'marco',griechisch:'marco',raetoromanisch:'maya',russisch:'maya'};
var NAME={lena:'Lena',marco:'Marco',sophie:'Sophie',alex:'Alex',maya:'Maya'};
var TONHOEHE={lena:1.12,marco:0.9,sophie:1.18,alex:0.97,maya:1.08};
var POSE={title:'portrait',big:'teaching',text:'teaching',terms:'teaching',steps:'teaching',figure:'teaching',warn:'thinking',list:'encouraging',avoid:'thinking',myth:'thinking',cards:'encouraging',pair:'teaching',quiz:'thinking',ask:'thinking'};
function zeile(s,n){var k=s.kicker||'';
 if(s.type==='title'&&s.kicker==='Übungsfilm')return /^Denk mit/.test(s.title)?'Bereit? Ich frage, du denkst mit!':'Bereit? Ich frage, du antwortest!';
 if(s.type==='title')return 'Hallo, ich bin '+n+'. Los geht’s!';
 if(k==='Der Kern')return 'Das Wichtigste zuerst.';
 if(k==='Merkhilfe')return 'Diesen Satz merkst du dir leicht.';
 if(s.type==='ask')return s.n===1?'Los geht’s mit Frage 1!':['Nächste Frage!','Weiter geht’s!','Und jetzt?','Die letzte!'][Math.min(3,s.n===s.of?3:(s.n%3))];
 if(k==='So gehst du vor')return 'Schritt für Schritt.';if(k==='Jetzt du')return 'Jetzt bist du dran!';
 return {text:'Worum es geht:',terms:'Diese Begriffe brauchst du.',steps:'Rechnen wir es gemeinsam durch.',warn:'Achtung, hier stolpern viele.',list:'Zum Schluss das Wichtigste.',figure:'Schau dir das Bild genau an.',avoid:'Achtung, hier stolpern viele.',myth:'Falsch oder richtig?',cards:'Schau, was dich erwartet.',pair:'Hör zu und sprich nach.',quiz:'Welche Form fehlt?'}[s.type]||'';}
function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
function el(t,c,h){var e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e;}
function motif(k){return '<svg class="skf-mot" viewBox="0 0 170 110" aria-hidden="true">'+(MOT[k]||MOT._)+'</svg>';}
function sagtext(s){return Array.isArray(s.say)?s.say.map(function(x){return x[0];}).join(' '):(s.say||'');}
function dauer(s){if(s.type==='ask')return Math.max(9000,Math.min(30000,3000+(s.q+' '+(s.opts||[]).join(' ')).split(/\s+/).length*330+6000));var w=sagtext(s).split(/\s+/).length;return Math.max(5000,Math.min(30000,2500+w*400+(s.type==='quiz'?3000:0)));}
function L(s,t){return s.lang?'<span lang="'+esc(s.lang)+'">'+esc(t)+'</span>':esc(t);}
function bauen(s,motk){var d=el('div','skf-scene');var st=function(n){return ' style="animation-delay:'+(0.15+n*0.16)+'s"';};var k='<div class="skf-kicker skf-in">'+esc(s.kicker||'')+'</div>';
 if(s.type==='title')d.innerHTML=motif(motk)+k+'<h3 class="skf-h skf-in"'+st(1)+'>'+esc(s.title)+'</h3><p class="skf-p skf-in"'+st(2)+'>'+esc(s.text)+'</p>';
 else if(s.type==='big')d.innerHTML=k+'<p class="skf-big skf-in"'+st(1)+'>'+esc(s.text)+'</p>';
 else if(s.type==='terms')d.innerHTML=k+'<div class="skf-cards">'+s.items.map(function(x,j){return '<div class="skf-card skf-in"'+st(j+1)+'><b>'+L(s,x[0])+'</b>'+esc(x[1])+'</div>';}).join('')+'</div>';
 else if(s.type==='cards')d.innerHTML=k+'<div class="skf-chips">'+s.items.map(function(x,j){return '<span class="skf-chip skf-in"'+st(j+1)+'>'+esc(x)+'</span>';}).join('')+'</div>';
 else if(s.type==='avoid')d.innerHTML=k+'<ul class="skf-list skf-avoid">'+s.items.map(function(x,j){return '<li class="skf-in"'+st(j+1)+'><i aria-hidden="true">✗</i>'+esc(x)+'</li>';}).join('')+'</ul>';
 else if(s.type==='myth')d.innerHTML=k+'<div class="skf-myth"><div class="no skf-in"'+st(1)+'><b>✗ Falsch</b>'+esc(s.no)+'</div><div class="ja skf-in"'+st(3)+'><b>✓ Besser</b>'+esc(s.ja)+'</div></div>';
 else if(s.type==='pair')d.innerHTML=k+'<p class="skf-big skf-fx skf-in"'+st(1)+'>'+L(s,s.fx)+'</p><p class="skf-p skf-de skf-in"'+st(4)+'>'+esc(s.de)+'</p>';
 else if(s.type==='quiz')d.innerHTML=k+'<p class="skf-big skf-fx skf-in"'+st(1)+'>'+L(s,s.q)+'</p><div class="skf-reveal"><p class="skf-ans">'+L(s,s.a)+'</p><p class="skf-p">'+esc(s.why)+'</p></div>';
 else if(s.type==='steps')d.innerHTML=k+(s.task?'<h3 class="skf-h skf-task skf-in"'+st(1)+'>'+esc(s.task)+'</h3>':'')+'<ol class="skf-steps">'+s.steps.map(function(x,j){return '<li class="skf-in"'+st(j*2+2)+'><i>'+(j+1)+'</i><span>'+esc(x)+'</span></li>';}).join('')+(s.result?'<li class="skf-res skf-in"'+st(s.steps.length*2+2)+'><i>✓</i><span>'+esc(s.result)+'</span></li>':'')+'</ol>';
 else if(s.type==='figure')d.innerHTML=k+'<figure class="skf-fig skf-in"'+st(1)+'><img src="'+esc(s.src)+'" alt="'+esc(s.alt)+'"><figcaption><b>'+esc(s.ftitle)+'</b> '+esc(s.fcap)+'</figcaption></figure>';
 else if(s.type==='warn')d.innerHTML=k+'<div class="skf-warn skf-in"'+st(1)+'><span aria-hidden="true">!</span><p>'+esc(s.text)+'</p></div>';
 else if(s.type==='list')d.innerHTML=k+'<ul class="skf-list">'+s.items.map(function(x,j){var v=/^Vermeide:/.test(x);return '<li class="skf-in'+(v?' skf-no':'')+'"'+st(j+1)+'><i aria-hidden="true">'+(v?'✗':'✓')+'</i>'+esc(x)+'</li>';}).join('')+'</ul>';
 else if(s.type==='ask'){var o=s.opts?'<div class="skq-opts" role="group" aria-label="Antworten">'+s.opts.map(function(x,j){return '<button type="button" class="skq-opt skf-in" data-i="'+j+'"'+st(j+2)+'><i>'+'ABCD'.charAt(j)+'</i><span>'+L(s,x)+'</span></button>';}).join('')+'</div>':'<p class="skq-denk skf-in"'+st(2)+'>'+(s.offen?'Überlege kurz, dann zeige ich die Musterantwort.':'Rechne kurz mit, dann zeige ich die Lösung.')+'</p><button type="button" class="skq-zeig skf-in"'+st(3)+'>'+(s.offen?'Musterantwort zeigen':'Lösung zeigen')+'</button>';
  d.innerHTML='<div class="skf-kicker skf-in">Frage '+s.n+' von '+s.of+(s.kicker?' · '+esc(s.kicker):'')+'</div><p class="skq-q skf-in"'+st(1)+'>'+L(s,s.q)+'</p>'+o+'<div class="skq-ring" aria-hidden="true"><i></i></div><div class="skq-erk" hidden><b class="skq-lsg"></b>'+(s.steps&&s.steps.length?'<ol class="skq-weg">'+s.steps.map(function(x){return '<li>'+esc(x)+'</li>';}).join('')+'</ol>':'')+'<span>'+esc(s.why)+'</span></div>';}
 else d.innerHTML=k+'<p class="skf-p skf-in"'+st(1)+'>'+esc(s.text)+'</p>';
 return d;}
function passen(sc){var f=100;sc.style.fontSize='';while((sc.scrollHeight>sc.clientHeight+1||sc.scrollWidth>sc.clientWidth+1)&&f>62){f-=4;sc.style.fontSize=f+'%';}}
/* Musik: ruhige, im Browser erzeugte Klangfläche (keine Datei, keine Lizenzfrage) */
function Musik(){var ac=null,master=null,timer=0,on=false,step=0;
 var CH=[[261.63,329.63,392,493.88],[220,261.63,329.63,392],[174.61,220,261.63,329.63],[196,246.94,293.66,392]];
 function note(f,t,d,v,typ){var o=ac.createOscillator(),g=ac.createGain();o.type=typ;o.frequency.value=f;g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(v,t+Math.min(0.4,d/3));g.gain.exponentialRampToValueAtTime(0.0001,t+d);o.connect(g);g.connect(master);o.start(t);o.stop(t+d+0.05);}
 function takt(){if(!on)return;var t=ac.currentTime+0.05,c=CH[Math.floor(step/4)%4];
  if(step%4===0)c.forEach(function(f){note(f/2,t,4.2,0.05,'sine');note(f,t,4.2,0.025,'triangle');});
  note(c[(step*3)%4]*2,t+0.25,0.9,0.03,'sine');step++;timer=setTimeout(takt,1050);}
 return {start:function(){try{if(!ac){var A=window.AudioContext||window.webkitAudioContext;if(!A)return false;ac=new A();master=ac.createGain();var lp=ac.createBiquadFilter();lp.type='lowpass';lp.frequency.value=1800;master.connect(lp);lp.connect(ac.destination);master.gain.value=0.9;}if(ac.state==='suspended')ac.resume();if(!on){on=true;takt();}return true;}catch(e){return false;}},
  fx:function(gut){try{if(!ac){var A=window.AudioContext||window.webkitAudioContext;if(!A)return;ac=new A();master=ac.createGain();master.connect(ac.destination);master.gain.value=0.9;}if(ac.state==='suspended')ac.resume();var t=ac.currentTime+0.02;(gut?[659.25,783.99,1046.5]:[311.13,233.08]).forEach(function(f,j){note(f,t+j*0.11,gut?0.5:0.45,gut?0.09:0.07,gut?'triangle':'sine');});}catch(e){}},
  stop:function(){on=false;clearTimeout(timer);},leise:function(x){if(master&&ac)master.gain.setTargetAtTime(x?0.35:0.9,ac.currentTime,0.25);}};}
function quizTitel(d){return d.mode==='quiz';}
function start(root){var data;try{data=JSON.parse(root.querySelector('script[type="application/json"]').textContent);}catch(e){return;}
 var S=data.scenes;if(!S||!S.length)return;var motk=data.motif||'_';var wer=data.teacher||LEHRER[motk]||'sophie',wname=NAME[wer];
 root.style.setProperty('--c',data.color||'#2563eb');
 var stage=el('div','skf-stage');stage.setAttribute('role','region');stage.setAttribute('aria-label',(quizTitel(data)?'Übungsfilm: ':'Erklärfilm: ')+data.title+', mit '+wname);
 stage.innerHTML='<div class="skf-orb a"></div><div class="skf-orb b"></div><div class="skf-dots" aria-hidden="true"></div>';
 var holder=el('div','skf-holder');holder.setAttribute('aria-live','polite');stage.appendChild(holder);
 var lehr=el('div','skf-teacher','<div class="skf-bubble"></div><img alt="" width="240" height="240"><span class="skf-name">'+esc(wname)+'</span>');stage.appendChild(lehr);
 var bub=lehr.querySelector('.skf-bubble'),img=lehr.querySelector('img');
 var bar=el('div','skf-bar');S.forEach(function(){bar.appendChild(el('span','','<u></u>'));});stage.appendChild(bar);
 var ctl=el('div','skf-ctl');function knopf(txt,lab,cls){var b=el('button',cls||'',txt);b.type='button';if(lab)b.setAttribute('aria-label',lab);ctl.appendChild(b);return b;}
 var bZ=knopf('‹','Zurück'),bP=knopf('▶ Abspielen','', 'skf-play'),bW=knopf('›','Weiter');
 var hatTTS='speechSynthesis' in window,bV=hatTTS?knopf('🔊','Stimme ausschalten','skf-tog on'):null,bM=knopf('♪','Musik ausschalten','skf-tog on');
 var tt=el('span','skf-t');ctl.appendChild(tt);stage.appendChild(ctl);root.querySelector('.skf-mount').appendChild(stage);
 var i=0,spielt=false,timer=null,t0=0,dur=0,raf=0,stimmeAn=hatTTS,musikAn=true,musik=Musik(),uttId=0;
 function stimme(l){l=l||'de';var re=new RegExp('^'+l,'i');var v=speechSynthesis.getVoices().filter(function(x){return re.test(x.lang);});var lok=v.filter(function(x){return x.localService!==false;});return lok[0]||null;}
 function sprich(teile,fertig){if(!stimmeAn||!hatTTS){fertig&&fertig(false);return;}try{speechSynthesis.cancel();var id=++uttId,n=0;
  teile=teile.filter(function(x){return x[0]&&stimme(x[1]);});if(!teile.length){fertig&&fertig(false);return;}
  (function eins(){if(id!==uttId)return;if(n>=teile.length){musik.leise(false);lehr.classList.remove('spricht');fertig&&fertig(true);return;}
   var x=teile[n++],v=stimme(x[1]),u=new SpeechSynthesisUtterance(x[0]);u.voice=v;u.lang=v.lang;u.rate=x[1]==='de'?1.0:0.9;u.pitch=x[1]==='de'?(TONHOEHE[wer]||1):1;
   u.onstart=function(){musik.leise(true);lehr.classList.add('spricht');};u.onend=u.onerror=function(){if(id!==uttId)return;setTimeout(eins,x[1]==='de'?0:350);};speechSynthesis.speak(u);})();}catch(e){fertig&&fertig(false);}}
 var punkte={},frage=null,quiz=data.mode==='quiz';
 function aufloesen(s,sc,j,danach){if(!frage||frage.offen===false)return;frage.offen=false;clearTimeout(timer);uttId++;try{speechSynthesis.cancel();}catch(e){}
  var gut=j===s.a,getippt=j!=null;if(getippt){punkte[i]=gut;if(musikAn||true)musik.fx(gut);}
  [].forEach.call(sc.querySelectorAll('.skq-opt'),function(b,k){b.disabled=true;b.classList.add(k===s.a?'ok':(k===j?'falsch':'aus'));});var zb=sc.querySelector('.skq-zeig');if(zb)zb.hidden=true;
  var erk=sc.querySelector('.skq-erk');erk.querySelector('.skq-lsg').textContent=(s.opts?'Richtig ist '+'ABCD'.charAt(s.a)+': '+s.opts[s.a]:s.offen?'Musterantwort':'Lösung: '+s.loes)+' ';erk.hidden=false;sc.classList.add('gezeigt');passen(sc);
  img.src=BASE+'lehrer/'+wer+'-'+(getippt?(gut?'encouraging':'thinking'):'teaching')+'.webp';bub.textContent=getippt?(gut?['Richtig!','Stark!','Genau so!'][i%3]:'Fast! Schau her.'):(s.offen?'Vergleiche mit deiner Antwort.':'Hier ist die Lösung.');bub.classList.remove('pop');void bub.offsetWidth;bub.classList.add('pop');bub.hidden=false;
  if(spielt){var ansage=[[(getippt?(gut?'Richtig! ':'Nicht ganz. '):'')+(s.opts?'Richtig ist '+'ABCD'.charAt(s.a)+'. ':s.offen?'Eine mögliche Antwort: ':'Die Lösung ist '+s.loes+'. '),'de']];if(!s.lang)ansage.push([sprechen(s.why),'de']);
   dur=Math.max(5000,3000+s.why.split(/\s+/).length*380);t0=performance.now();
   if(stimmeAn&&hatTTS&&stimme('de'))sprich(ansage,function(ok){if(spielt)timer=setTimeout(weiter,ok?900:dur);});else timer=setTimeout(weiter,dur);}}
 function sprechen(t){return String(t).replace(/ · /g,' mal ').replace(/(\d) : (\d)/g,'$1 geteilt durch $2').replace(/−/g,' minus ').replace(/²/g,' hoch zwei').replace(/ = /g,' gleich ');}
 function denkzeit(s,sc){var r=sc.querySelector('.skq-ring');r.classList.add('laeuft');r.style.setProperty('--t',(s.offen?12:6)+'s');clearTimeout(timer);timer=setTimeout(function(){aufloesen(s,sc,null);},s.offen?12000:6000);}
 function zeige(n,auto){i=Math.max(0,Math.min(S.length-1,n));var s=S[i];holder.innerHTML='';var sc=bauen(s,motk);holder.appendChild(sc);passen(sc);frage=null;
  if(s.type==='ask'){frage={offen:true};[].forEach.call(sc.querySelectorAll('.skq-opt'),function(b){b.onclick=function(){aufloesen(s,sc,+b.dataset.i);};});var zb=sc.querySelector('.skq-zeig');if(zb)zb.onclick=function(){aufloesen(s,sc,null);};}
  img.src=BASE+'lehrer/'+wer+'-'+(POSE[s.type]||'teaching')+'.webp';var z=zeile(s,wname);bub.textContent=z;bub.classList.remove('pop');void bub.offsetWidth;bub.classList.add('pop');bub.hidden=!z;
  [].forEach.call(bar.children,function(b,j){b.className=j<i?'done':'';b.firstChild.style.width=j<i?'100%':'0';});tt.textContent=(i+1)+' / '+S.length;
  dur=dauer(s);t0=performance.now();clearTimeout(timer);cancelAnimationFrame(raf);
  if(spielt&&s.type==='ask'){var tl=[[z,'de']].concat(Array.isArray(s.say)?s.say:(s.lang?[]:[[sprechen(s.q),'de']])).concat(s.opts&&!s.lang&&!Array.isArray(s.say)?s.opts.map(function(x,j){return ['ABCD'.charAt(j)+': '+sprechen(x)+'.','de'];}):[]);fortschritt(true);
   if(stimmeAn&&hatTTS&&stimme('de'))sprich(tl,function(){if(spielt&&frage&&frage.offen)denkzeit(s,sc);});else{clearTimeout(timer);timer=setTimeout(function(){if(spielt&&frage&&frage.offen)denkzeit(s,sc);},Math.max(3000,dur-6000));}return;}
  if(spielt){var teile=(z?[[z,'de']]:[]).concat(Array.isArray(s.say)?s.say:[[s.say||'','de']]);if(stimmeAn&&hatTTS&&stimme('de')){sprich(teile,function(ok){if(spielt&&ok)weiter();else if(spielt)plane();});fortschritt(true);}else plane();}}
 function weiter(){if(i<S.length-1)zeige(i+1,true);else stopp(true);}
 function fortschritt(ohneEnde){(function tick(){var p=Math.min(ohneEnde?0.97:1,(performance.now()-t0)/dur);var u=bar.children[i]&&bar.children[i].firstChild;if(u)u.style.width=(p*100)+'%';if(spielt&&p<1)raf=requestAnimationFrame(tick);})();}
 function plane(){clearTimeout(timer);timer=setTimeout(weiter,Math.max(0,dur-(performance.now()-t0)));fortschritt(false);}
 function los(){if(i===0||(i===S.length-1&&bar.children[i].className==='done'))punkte={};if(i===S.length-1&&bar.children[i].className==='done')i=0;spielt=true;stage.classList.add('laeuft');bP.textContent='❚❚ Pause';if(musikAn)musik.start();zeige(i);}
 function stopp(ende){spielt=false;stage.classList.remove('laeuft');clearTimeout(timer);cancelAnimationFrame(raf);uttId++;try{speechSynthesis.cancel();}catch(e){}musik.stop();lehr.classList.remove('spricht');
  bP.textContent=ende?'↺ Nochmals':'▶ Weiter';if(ende){[].forEach.call(bar.children,function(b){b.className='done';b.firstChild.style.width='100%';});img.src=BASE+'lehrer/'+wer+'-encouraging.webp';
  var g=0,a=0;for(var k in punkte){a++;if(punkte[k])g++;}bub.textContent=quiz?(a?g+' von '+a+' richtig! '+(g===a?'Perfekt!':g*2>=a?'Gut gemacht!':'Übung macht stark!'):'Geschafft! Jetzt selbst üben?'):'Super gemacht! Jetzt üben?';bub.hidden=false;bub.classList.remove('pop');void bub.offsetWidth;bub.classList.add('pop');konfetti();}}
 function konfetti(){if(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches)return;var c=el('div','skf-konfetti');c.setAttribute('aria-hidden','true');for(var k=0;k<26;k++){var p=el('i');p.style.left=(k*37%100)+'%';p.style.background=['#f59e0b','#10b981','#3b82f6','#ec4899','#a855f7','#facc15'][k%6];p.style.animationDelay=(k%7)*0.08+'s';p.style.setProperty('--x',((k*53%60)-30)+'px');c.appendChild(p);}stage.appendChild(c);setTimeout(function(){c.remove();},2600);}
 bP.onclick=function(){spielt?stopp(false):los();};bZ.onclick=function(){zeige(i-1);};bW.onclick=function(){zeige(i+1);};
 if(bV)bV.onclick=function(){stimmeAn=!stimmeAn;bV.classList.toggle('on',stimmeAn);bV.textContent=stimmeAn?'🔊':'🔇';bV.setAttribute('aria-label',stimmeAn?'Stimme ausschalten':'Stimme einschalten');if(!stimmeAn){uttId++;try{speechSynthesis.cancel();}catch(e){}musik.leise(false);if(spielt){t0=performance.now();plane();}}else if(spielt)zeige(i);};
 bM.onclick=function(){musikAn=!musikAn;bM.classList.toggle('on',musikAn);bM.setAttribute('aria-label',musikAn?'Musik ausschalten':'Musik einschalten');bM.textContent=musikAn?'♪':'♪̸';if(musikAn&&spielt)musik.start();else musik.stop();};
 stage.tabIndex=0;stage.addEventListener('keydown',function(e){if(e.key==='ArrowRight'){zeige(i+1);e.preventDefault();}else if(e.key==='ArrowLeft'){zeige(i-1);e.preventDefault();}else if(e.key===' '&&e.target===stage){bP.click();e.preventDefault();}});
 document.addEventListener('visibilitychange',function(){if(document.hidden&&spielt)stopp(false);});
 window.addEventListener('resize',function(){var sc=holder.firstChild;if(sc)passen(sc);});
 if(hatTTS)try{speechSynthesis.getVoices();speechSynthesis.onvoiceschanged=function(){};}catch(e){}
 zeige(0);}
function init(){[].forEach.call(document.querySelectorAll('.skf'),function(r){if(!r.dataset.skfOn){r.dataset.skfOn='1';start(r);}});}
window.SKFilm={init:init};
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
