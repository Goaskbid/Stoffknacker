/* r217 Startseite: Lehrerteam mit Erklärfilm, sichtbarer Hintergrund, grosses Logo. Additiv; ändert keine Daten. */
(function(){"use strict";
var BASE=(document.currentScript&&document.currentScript.src||'').replace(/assets\/js\/home217\.js.*$/,'');
var V=(document.currentScript&&document.currentScript.src.split('?v=')[1])||'';
var T=[
 {id:'lena',name:'Lena',faecher:'Mathematik und Informatik',hub:'lernen/mathematik/',film:'math-functions-basic',satz:'Ich zeige dir, warum eine Formel funktioniert, nicht nur wie.'},
 {id:'sophie',name:'Sophie',faecher:'Biologie, Chemie und Physik',hub:'lernen/biologie/',film:'bio-cells',satz:'Bei mir siehst du zuerst das Phänomen, dann das Modell dazu.'},
 {id:'alex',name:'Alex',faecher:'Geschichte, Geografie, Wirtschaft und Recht',hub:'lernen/wirtschaft-und-recht/',film:'eco-scarcity-markets',satz:'Ich verbinde Ereignisse mit Ursachen, damit du argumentieren kannst.'},
 {id:'marco',name:'Marco',faecher:'Deutsch, Latein, Kunst und Musik',hub:'lernen/deutsch/',film:'de-argumentation',satz:'Mit mir lernst du, Texte zu verstehen und selbst überzeugend zu schreiben.'},
 {id:'maya',name:'Maya',faecher:'Englisch, Französisch, Italienisch und Spanisch',hub:'lernen/englisch/',film:'en-reading',satz:'Wir sprechen von der ersten Lektion an, Fehler gehören dazu.'}];
var idx=null,cache={},geladen=false,aktiv='sophie';
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
function index(){return idx?Promise.resolve(idx):fetch(BASE+'assets/film/app-index.json?v='+V).then(function(r){return r.ok?r.json():{};}).then(function(j){return idx=j;}).catch(function(){return idx={};});}
function player(){if(geladen||window.SKFilm)return Promise.resolve();geladen=true;return new Promise(function(ok){var l=document.createElement('link');l.rel='stylesheet';l.href=BASE+'assets/film/film.css?v='+V;document.head.appendChild(l);var s=document.createElement('script');s.src=BASE+'assets/film/film.js?v='+V;s.onload=ok;s.onerror=ok;document.head.appendChild(s);});}
function film(id){if(cache[id]!==undefined)return Promise.resolve(cache[id]);return index().then(function(ix){var p=ix[id];if(!p)return cache[id]=null;
 return fetch(BASE+p).then(function(r){return r.ok?r.text():'';}).then(function(h){var m=h.match(/<section class="skf"[\s\S]*?<\/section>/);
  return cache[id]=m?m[0].replace(/(src\\?":\\?")(?:\.\.\/)+/g,'$1').replace(/<h2 id="skf-h">/,'<h2 id="skf-h-home">').replace('aria-labelledby="skf-h"','aria-labelledby="skf-h-home"'):null;});}).catch(function(){return null;});}
function zeigeFilm(box,t){box.setAttribute('aria-busy','true');film(t.film).then(function(h){if(!h){box.removeAttribute('aria-busy');return;}
 box.innerHTML=h;var sec=box.firstElementChild;if(sec)sec.classList.add('skf-app','r217-film');
 var mehr=document.createElement('a');mehr.className='r217-more';mehr.href=BASE+(idx&&idx[t.film]||t.hub);mehr.textContent='Ganzes Kapitel öffnen';box.appendChild(mehr);
 player().then(function(){if(window.SKFilm)window.SKFilm.init();box.removeAttribute('aria-busy');});});}
function karte(t){return '<button type="button" class="r217-t'+(t.id===aktiv?' on':'')+'" data-t="'+t.id+'" aria-pressed="'+(t.id===aktiv)+'">'
 +'<img src="'+BASE+'assets/film/lehrer/'+t.id+'-portrait.webp" alt="" width="64" height="64" loading="lazy" decoding="async">'
 +'<span><b>'+esc(t.name)+'</b><small>'+esc(t.faecher)+'</small></span></button>';}
function bauen(){var home=document.querySelector('#v-home .sk-home179');if(!home||home.querySelector('.r217-stage'))return;
 var hero=home.querySelector('.sk-home-hero');
 if(hero&&!hero.querySelector('.r217-mark')){hero.insertAdjacentHTML('afterbegin','<div class="r217-mark" aria-hidden="true"><i></i><img src="'+BASE+'assets/icon-192.png" alt="" width="72" height="72"></div>');}
 var t=T.filter(function(x){return x.id===aktiv;})[0];
 var html='<section class="r217-stage" aria-labelledby="r217-h"><div class="r217-team"><p class="eyebrow">Dein Lehrerteam</p><h2 id="r217-h">Fünf Lernfiguren, die dir den Stoff erklären.</h2>'
  +'<p class="r217-lead">Jede Lektion beginnt mit einem kurzen Erklärfilm. Wähle eine Lehrperson und schau rein.</p>'
  +'<div class="r217-ts">'+T.map(karte).join('')+'</div><p class="r217-satz">«'+esc(t.satz)+'» <span>– '+esc(t.name)+'</span></p></div>'
  +'<div class="r217-screen"><div class="r217-filmbox"></div></div></section>';
 var play=home.querySelector('.sk-play');if(play)play.insertAdjacentHTML('beforebegin',html);else home.insertAdjacentHTML('beforeend',html);
 var st=home.querySelector('.r217-stage'),box=st.querySelector('.r217-filmbox');
 st.addEventListener('click',function(e){var b=e.target.closest('.r217-t');if(!b)return;aktiv=b.dataset.t;var t=T.filter(function(x){return x.id===aktiv;})[0];
  [].forEach.call(st.querySelectorAll('.r217-t'),function(x){var on=x.dataset.t===aktiv;x.classList.toggle('on',on);x.setAttribute('aria-pressed',String(on));});
  st.querySelector('.r217-satz').innerHTML='«'+esc(t.satz)+'» <span>– '+esc(t.name)+'</span>';zeigeFilm(box,t);});
 if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){if(es.some(function(x){return x.isIntersecting;})){io.disconnect();zeigeFilm(box,t);}},{rootMargin:'300px'});io.observe(box);}else zeigeFilm(box,t);}

/* r218: Spielwelt – Begrüssung durch eine Lehrperson, Fächer-Welten, lebendige Kennzahlen */
var W=[['mathematik','Mathematik',48,'∑','#6366f1','#22d3ee','lena'],['deutsch','Deutsch',38,'✒️','#f97316','#facc15','marco'],['englisch','Englisch',29,'🇬🇧','#ec4899','#8b5cf6','maya'],['franzoesisch','Französisch',33,'🥐','#3b82f6','#ef4444','maya'],
 ['biologie','Biologie',43,'🧬','#10b981','#84cc16','sophie'],['chemie','Chemie',41,'⚗️','#06b6d4','#a855f7','sophie'],['physik','Physik',56,'⚡','#f59e0b','#ef4444','sophie'],['geschichte','Geschichte',41,'🏛️','#b45309','#f59e0b','alex'],
 ['geografie','Geografie',37,'🌍','#0ea5e9','#22c55e','alex'],['wirtschaft-und-recht','Wirtschaft und Recht',28,'⚖️','#7c3aed','#ec4899','alex'],['rechnungswesen','Rechnungswesen',17,'📊','#0f766e','#22d3ee','alex'],['informatik','Informatik',14,'💻','#1d4ed8','#a3e635','lena']];
var GRUSS={morgen:['Guten Morgen! Fünf Minuten vor der Schule bringen mehr als eine Stunde am Sonntag.','Morgen! Eine kurze Runde, und dein Tagesziel ist schon halb erreicht.'],
 mittag:['Kurze Pause? Eine Fünf-Minuten-Runde passt genau hinein.','Hey! Hol dir jetzt ein paar XP, dann ist der Nachmittag entspannter.'],
 abend:['Guten Abend! Eine Runde vor dem Schlafen bleibt am besten hängen.','Noch fünf Minuten Energie? Dann halten wir deine Serie am Leben.'],
 nacht:['Noch wach? Eine ganz kurze Runde, dann ab ins Bett.']};
function tag(){var h=new Date().getHours();return h<11?'morgen':h<17?'mittag':h<23?'abend':'nacht';}
function welten(){var home=document.querySelector('#v-home .sk-home179');if(!home||home.querySelector('.r218-worlds'))return;
 var html='<section class="r218-worlds" aria-labelledby="r218-wh"><div class="r218-wh"><p class="eyebrow">Fächer-Welten</p><h2 id="r218-wh">Wähle deine Welt.</h2></div><div class="r218-wg">'
  +W.map(function(w){return '<a class="r218-w" href="'+BASE+'lernen/'+w[0]+'/" style="--a:'+w[4]+';--b:'+w[5]+'"><span class="r218-wi" aria-hidden="true">'+w[3]+'</span><b>'+esc(w[1])+'</b><small>'+w[2]+' Kapitel</small><img src="'+BASE+'assets/film/lehrer/'+w[6]+'-portrait.webp" alt="" width="40" height="40" loading="lazy"></a>';}).join('')
  +'<a class="r218-w r218-all" href="'+BASE+'inhalt/" style="--a:#334155;--b:#64748b"><span class="r218-wi" aria-hidden="true">✨</span><b>Alle Fächer</b><small>über 600 Kapitel</small></a></div></section>';
 var st=home.querySelector('.r217-stage');if(st)st.insertAdjacentHTML('afterend',html);}
function coach(){var home=document.querySelector('#v-home .sk-home179');if(!home||home.querySelector('.r218-coach'))return;
 var d=new Date(),t=T[(d.getDate()+d.getMonth())%T.length],L=GRUSS[tag()],satz=L[d.getDate()%L.length];
 var html='<section class="r218-coach" aria-label="Begrüssung"><img src="'+BASE+'assets/film/lehrer/'+t.id+'-encouraging.webp" alt="" width="96" height="96"><div class="r218-bubble"><b>'+esc(t.name)+'</b><p>'+esc(satz)+'</p>'
  +'<div class="r218-cta"><button type="button" class="r218-go">⚡ 5-Minuten-Challenge</button><button type="button" class="r218-film">▶ Film von '+esc(t.name)+'</button></div></div></section>';
 var play=home.querySelector('.sk-play');if(play)play.insertAdjacentHTML('beforebegin',html);else return;
 var c=home.querySelector('.r218-coach');c.querySelector('.r218-go').onclick=function(){var q=home.querySelector('.sk-play-quick')||home.querySelector('.sk-play-go');if(q)q.click();};
 c.querySelector('.r218-film').onclick=function(){var b=home.querySelector('.r217-t[data-t="'+t.id+'"]');if(b){b.click();}var s=home.querySelector('.r217-screen');if(s)s.scrollIntoView({behavior:'smooth',block:'center'});};}
function zaehlen(){[].forEach.call(document.querySelectorAll('#v-home .sk-play-t b'),function(b){if(b.dataset.r218)return;b.dataset.r218='1';var m=b.textContent.match(/\d+/);if(!m||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
 var ziel=+m[0];if(!ziel)return;var t0=performance.now(),orig=b.textContent;(function step(t){var k=Math.min(1,(t-t0)/900);b.textContent=orig.replace(m[0],String(Math.round(ziel*k)));if(k<1)requestAnimationFrame(step);})(t0);});}

/* r219: klare Wege – Lernen, Trainieren, Prüfungen – und warum Stoffknacker */
var WEGE=[
 {k:'lernen',ziel:'#learn',icon:'📘',farbe:'#2563eb',titel:'Lernen',claim:'Jedes Prüfungsthema verständlich erklärt.',
  punkte:['629 Kapitel, geordnet nach Fach und Abschluss','Zu jedem Kapitel ein kurzer Erklärfilm','Beispiel, Schaubild und Lösungsweg zum Nachlesen'],cta:'Thema lernen'},
 {k:'trainieren',ziel:'#practice',icon:'🎯',farbe:'#db2777',titel:'Trainieren',claim:'Üben, bis es sitzt.',
  punkte:['Über 19 000 Aufgaben mit Lösungsweg','Sofort Rückmeldung zu deiner Antwort','Wiederholung im passenden Abstand, damit es bleibt'],cta:'Jetzt üben'},
 {k:'pruefen',ziel:'#pruefungen',icon:'🏆',farbe:'#059669',titel:'Prüfungen',claim:'Bereit für Test und Abschluss.',
  punkte:['Zwischentest: Themen wählen, gezielt vorbereiten','Abschlussprüfung simulieren, mit Auswertung','Kurzquiz und Kapiteltest für zwischendurch'],cta:'Prüfung vorbereiten'}];
function wege(){var home=document.querySelector('#v-home .sk-home179');if(!home||home.querySelector('.r219-wege'))return;
 var html='<section class="r219-wege" aria-labelledby="r219-h"><h2 id="r219-h">Alles für deinen Abschluss. An einem Ort.</h2><p class="r219-sub">Drei Wege, ein Ziel: Du verstehst den Stoff, kannst ihn anwenden und gehst sicher in die Prüfung.</p><div class="r219-g">'
  +WEGE.map(function(w,i){return '<a class="r219-w" href="'+w.ziel+'" style="--c:'+w.farbe+'"><span class="r219-n">'+(i+1)+'</span><span class="r219-i" aria-hidden="true">'+w.icon+'</span><b>'+esc(w.titel)+'</b><strong>'+esc(w.claim)+'</strong><ul>'+w.punkte.map(function(p){return '<li>'+esc(p)+'</li>';}).join('')+'</ul><span class="r219-cta">'+esc(w.cta)+' →</span></a>';}).join('')
  +'</div><ul class="r219-why"><li><b>Für deinen Weg</b>Passerelle, Gymnasiale Matura, BM, FMS, SMP und EBMP</li><li><b>Am Lehrplan orientiert</b>Kapitel den Rahmenlehrplänen zugeordnet</li><li><b>Kostenlos</b>ohne Konto, ohne Anmeldung</li><li><b>Deins</b>dein Lernstand bleibt auf deinem Gerät</li></ul></section>';
 var next=home.querySelector('.sk-home-next')||home.querySelector('.sk-home-hero');if(next)next.insertAdjacentHTML('afterend',html);
 var lead=home.querySelector('.sk-home-lead');if(lead&&!lead.dataset.r219){lead.dataset.r219='1';lead.textContent='Alles für Passerelle, Matura, BM und FMS: Stoff verstehen, gezielt trainieren, Prüfungen bestehen. Kostenlos und ohne Konto.';}}

function heldWege(){var home=document.querySelector('#v-home .sk-home179');if(!home)return;
 var h1=home.querySelector('.sk-home-hero h1');if(h1&&!h1.dataset.r219){h1.dataset.r219='1';h1.innerHTML='Lernen. Üben.<br><span>Prüfung bestehen.</span>';}
 var eb=home.querySelector('.sk-home-hero .eyebrow');if(eb&&!eb.dataset.r219){eb.dataset.r219='1';eb.textContent='Passerelle · Matura · BM · FMS · SMP · EBMP';}
 var nx=home.querySelector('.sk-home-next');if(!nx||nx.querySelector('.r219-nav'))return;
 if(!/So wird aus Lesen Lernen/i.test(nx.textContent))return;
 nx.innerHTML='<p class="r219-nk">So funktioniert Stoffknacker</p><h2 class="r219-nh">Dein Weg zur Prüfung</h2><ol class="r219-nav">'+WEGE.map(function(w){return '<li><a href="'+w.ziel+'" style="--c:'+w.farbe+'"><span aria-hidden="true">'+w.icon+'</span><span><b>'+esc(w.titel)+'</b><small>'+esc(w.claim)+'</small></span><i aria-hidden="true">→</i></a></li>';}).join('')+'</ol><p class="r219-nf">Kostenlos. Ohne Konto. Einfach loslegen.</p>';}
function ordnen(){heldWege();var home=document.querySelector('#v-home .sk-home179'),play=home&&home.querySelector('.sk-play');if(!play)return;
 var c=home.querySelector('.r218-coach'),st=home.querySelector('.r217-stage'),w=home.querySelector('.r218-worlds');
 var wg=home.querySelector('.r219-wege'),nx=home.querySelector('.sk-home-next')||home.querySelector('.sk-home-hero');if(wg&&nx&&nx.nextElementSibling!==wg)nx.insertAdjacentElement('afterend',wg);
 if(c&&c.nextElementSibling!==play)home.insertBefore(c,play);
 if(st&&play.nextElementSibling!==st)play.insertAdjacentElement('afterend',st);
 if(w&&st&&st.nextElementSibling!==w)st.insertAdjacentElement('afterend',w);}
var bauen217=bauen;bauen=function(){bauen217();wege();coach();welten();ordnen();zaehlen();};
function lauf(){var h=location.hash||'';var home=(h===''||h==='#'||/^#(start|home)\b/.test(h));document.documentElement.classList.toggle('r217-home',home);if(home)bauen();}
window.addEventListener('hashchange',function(){setTimeout(lauf,60);});
var n=0;(function warte(){lauf();if(++n<60&&!(document.querySelector('.r218-coach')&&document.querySelector('.r217-stage')))setTimeout(warte,250);})();
})();
