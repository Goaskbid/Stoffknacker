

;
(function(){"use strict";var M=window.MNEMIKA; if(!M||M.__lehrplanbezug) return; M.__lehrplanbezug=true;
/* Lehrplanbezug in der Lektion (Iteration 39): zeigt für das offene Kapitel die amtlichen Anforderungen
   mit Quelle und Seitenangabe und listet die Abschnitte des Kapitels. Additiv, ohne Beobachter und ohne Takt.
   Trifft keine Anforderung zu, wird genau das gesagt, statt eine Zuordnung zu behaupten. */
function esc(t){return String(t==null?"":t).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}
function kapitel(){ var id=(location.hash||"").split("/").pop();
 var c=(M.chapters||[]).filter(function(x){ return x.id===id; })[0]; if(c) return c;
 var sec=document.getElementById("v-read"); if(!sec) return null; var t=(sec.querySelector("h1,h2")||{}).textContent||"";
 return (M.chapters||[]).filter(function(x){ return x.title && t.indexOf(x.title)>=0; })[0]||null; }
function bau(c){ var A=c.frenchEvidenceR19?[]:(M.anforderungenFuer? M.anforderungenFuer(c) : []);
 var abschnitte=(c.blocks||[]).map(function(b,i){ return b.title||("Abschnitt "+(i+1)); });
 var h='<details class="lp-bezug"><summary><span class="lp-kick">LEHRPLANBEZUG</span><b>'+esc(c.unit||"Gemeinsamer Lernkern")+'</b>'
  +'<span class="lp-meta">'+(A.length? A.length+' amtliche Anforderung'+(A.length>1?'en':'') : 'keine amtliche Anforderung zugeordnet')+' · '+abschnitte.length+' Abschnitte</span></summary>';
 if(A.length){ h+='<ul class="lp-liste">';
  A.forEach(function(a){ h+='<li><b>'+esc(a.item)+'</b> <span class="lp-art">'+esc(a.kind)+'</span><br><span class="lp-quelle">'+esc(a.sourceTitle)+(a.pages?', '+esc(a.pages):'')+'</span></li>'; });
  h+='</ul>'; }
 else h+='<p class="lp-offen">Für dieses Kapitel ist noch keine amtliche Anforderung zugeordnet. Der Abdeckungsnachweis zeigt, welche Anforderungen bereits belegt sind.</p>';
 var prog=String(c.unit||"").split("·")[0].trim(), fach=String(c.unit||"").split("·")[1]||"";
 var PR=(M.pruefungFuer? M.pruefungFuer(prog, fach.trim()) : []);
 if(PR.length){ var x=PR[0];
  h+='<p class="lp-pruefung"><b>Prüfungsformat:</b> '+esc(x.form)+', '+esc(x.minutes)+(x.orientation&&x.orientation!=="—"?' ('+esc(x.orientation)+')':'')
   +'<br><span class="lp-quelle">'+esc(x.sourceTitle)+(x.pages?', '+esc(x.pages):'')+'</span>'+(x.note?'<br><span class="lp-quelle">'+esc(x.note)+'</span>':'')+'</p>'; }
 h+='<p class="lp-abschnitte"><b>Abschnitte dieses Kapitels:</b> '+esc(abschnitte.join(" · "))+'</p>'
  +'<p><a class="lp-link" href="#abdeckung">Vollständigen Abdeckungsnachweis öffnen</a></p></details>';
 return h; }
function setzen(){ var sec=document.getElementById("v-read"); if(!sec||sec.hidden) return;
 if(sec.querySelector(".lp-bezug")) return; var c=kapitel(); if(!c) return;
 var ende=sec.querySelector(".lesson-main > .lesson-v1217")||sec.querySelector(".lesson-main");
 if(ende){ ende.insertAdjacentHTML("beforeend", bau(c)); return; }
 var kopf=sec.querySelector(".lesson-head");
 if(kopf) kopf.insertAdjacentHTML("afterend", bau(c)); else sec.insertAdjacentHTML("afterbegin", bau(c)); }
M.lehrplanbezug={setzen:setzen,kapitel:kapitel};
/* Der Merker wird von einem Zeitgeber mitgelöst. Lag er nur im Bildtakt, blieb er nach vielen
   Ansichtswechseln gesetzt, wenn der Bildtakt ausblieb: danach wurde nichts mehr eingesetzt. */
var geplant=false;
function bald(){ if(geplant) return; geplant=true;
 var ausfuehren=function(){ if(!geplant) return; geplant=false; try{ setzen(); }catch(e){} };
 requestAnimationFrame(ausfuehren); setTimeout(ausfuehren,150); }
if(typeof M.go==="function" && !M.go.__lp){ var go=M.go; var w=function(){ var r=go.apply(this,arguments); bald(); setTimeout(bald,140); return r; };
 w.__lp=true; for(var k in go) if(!(k in w)) w[k]=go[k]; M.go=w; }
document.addEventListener("click", function(){ setTimeout(bald,160); }, true);
if(document.readyState!=="loading") bald(); else document.addEventListener("DOMContentLoaded", bald);
})();
;
(function(){"use strict";var M=window.MNEMIKA; if(!M||M.__pruefaufgaben) return; M.__pruefaufgaben=true;
/* Prüfungsaufgaben (Iteration 42): eigenständig verfasste Aufgaben im amtlichen Format.
   Lösung und Bewertungsraster sind zunächst verborgen, damit zuerst gearbeitet wird. Additiv, ohne Beobachter. */
function esc(t){return String(t==null?"":t).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}
function nl(t){ return esc(t).replace(/\n/g,"<br>"); }
function bank(){ return (window.MNEMIKA_AUFGABEN||{items:[]}).items; }
function format(a){ var P=(M.pruefungFuer? M.pruefungFuer(a.prog,a.fach) : []); return P.length? P[0] : null; }
function karte(a){ var f=format(a);
 return '<article class="pa-karte" data-aufgabe="'+esc(a.id)+'"><header><span class="pa-fach">'+esc(a.fach)+'</span>'
  +'<h3>'+esc(a.familie)+'</h3><p class="pa-meta">'+esc(a.minuten)+' Minuten · '+esc(a.punkte)+' Punkte · Anforderung: '+esc(a.req)
  +(f?' · Prüfungsformat: '+esc(f.form)+', '+esc(f.minutes):'')+'</p></header>'
  +'<div class="pa-text">'+nl(a.aufgabe)+'</div>'
  +'<details class="pa-loesung"><summary>Lösungsweg anzeigen</summary><ol>'+a.schritte.map(function(s){ return '<li>'+esc(s)+'</li>'; }).join("")+'</ol></details>'
  +'<details class="pa-kriterien"><summary>Bewertung anzeigen</summary><ul>'+a.kriterien.map(function(s){ return '<li>'+esc(s)+'</li>'; }).join("")+'</ul></details>'
  +'<p class="pa-hinweis">Eigenständig verfasste Aufgabe im amtlichen Prüfungsformat. Fachliche Durchsicht steht aus.</p></article>'; }
function render(){ var host=document.getElementById("v-pruefaufgaben"); if(!host) return;
 var A=bank(), G={}; A.forEach(function(a){ (G[a.prog]=G[a.prog]||{})[a.fach]=((G[a.prog]||{})[a.fach]||[]).concat([a]); });
 var h='<header class="vhead"><p class="eyebrow">PRÜFUNGSAUFGABEN</p><h1>Üben im Format der richtigen Prüfung</h1>'
  +'<p class="modeintro">'+A.length+' eigenständig verfasste Aufgaben in '+Object.keys(G).length+' Abschlüssen, zusammen '
  +A.reduce(function(n,a){return n+a.punkte;},0)+' Punkte und '+A.reduce(function(n,a){return n+a.minuten;},0)+' Minuten. '
  +'Form und Dauer folgen den amtlichen Vorgaben. Lösungsweg und Bewertung öffnest du erst, wenn du gerechnet oder geschrieben hast.</p></header>';
 Object.keys(G).sort().forEach(function(prog){ var faecher=Object.keys(G[prog]).sort(), n=0, pkt=0, min=0;
  faecher.forEach(function(x){ G[prog][x].forEach(function(a){ n++; pkt+=a.punkte; min+=a.minuten; }); });
  h+='<details class="pa-prog" open><summary><b>'+esc(prog)+'</b><span class="pa-meta">'+n+' Aufgaben · '+pkt+' Punkte · '+min+' Minuten</span></summary>';
  faecher.forEach(function(fach){ h+='<section class="pa-fachblock"><h2>'+esc(fach)+'</h2>'+G[prog][fach].map(karte).join("")+'</section>'; });
  h+='</details>'; });
 host.innerHTML=h; }
function mount(){ if(document.getElementById("v-pruefaufgaben")) return;
 var main=document.querySelector("main")||document.body, s=document.createElement("section");
 s.id="v-pruefaufgaben"; s.className="view"; s.hidden=true; main.appendChild(s);
 var fuss=document.querySelector("footer");
 if(fuss&&!fuss.querySelector("[data-pa-link]")){ var a=document.createElement("a"); a.href="#pruefaufgaben"; a.setAttribute("data-pa-link","1");
  a.textContent="Prüfungsaufgaben"; var sp=fuss.querySelector("nav,ul,div"); (sp||fuss).appendChild(a); } }
function zeigen(an){ var s=document.getElementById("v-pruefaufgaben"); if(!s) return;
 if(an){ document.querySelectorAll('section[id^="v-"]').forEach(function(x){ if(x!==s) x.hidden=true; }); s.hidden=false; render(); window.scrollTo(0,0); } else s.hidden=true; }
M.zeigePruefaufgaben=function(){ mount(); location.hash="#pruefaufgaben"; zeigen(true); };
function hashPruefen(){ if((location.hash||"").indexOf("pruefaufgaben")>=0){ mount(); zeigen(true); } }
if(typeof M.go==="function" && !M.go.__pa){ var go=M.go; var w=function(){ if(arguments[0]==='pruefaufgaben'){ M.zeigePruefaufgaben(); return; } zeigen(false); return go.apply(this,arguments); }; w.__pa=true;
 for(var k in go) if(!(k in w)) w[k]=go[k]; M.go=w; }
window.addEventListener("hashchange", hashPruefen);
if(document.readyState!=="loading"){ mount(); hashPruefen(); } else document.addEventListener("DOMContentLoaded", function(){ mount(); hashPruefen(); });
})();
;
window.MNEMIKA_SCHAUBILDER=SKContent.pool("app-18-8327",{"count":12,"items":{}});

;
(function(){"use strict";var M=window.MNEMIKA; if(!M||M.__vertiefung) return; M.__vertiefung=true;
/* Vertiefungstexte (Iteration 46): eigener Lehrtext für Lehrplanmodule, die bisher nur knapp ausgeführt waren.
   Ergänzt die bestehende Lektion, ersetzt nichts. Additiv, ohne Beobachter und ohne Takt. */
function esc(t){return String(t==null?"":t).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}
function daten(){ return (window.MNEMIKA_VERTIEFUNG||{items:{}}).items; }
M.vertiefungFuer=function(id){ return daten()[id]||null; };
function kapitelId(){ var id=(location.hash||"").split("/").pop(); return daten()[id]? id : null; }
function schaubild(id){ var S=(window.MNEMIKA_SCHAUBILDER||{items:{}}).items[id]; if(!S) return "";
 return '<figure class="vt-fig" data-schaubild="1">'+S.svg+'<figcaption><b>'+esc(S.titel)+'.</b> '+esc(S.bu)+'</figcaption></figure>'; }
function bau(v, id){
 return '<section class="vt" data-vertiefung="1"><h2>Vertiefung</h2>'
  +'<p class="vt-kern"><b>Kernidee.</b> '+esc(v.kern)+'</p>'
  +'<h3>So gehst du vor</h3><ol class="vt-weg">'+v.weg.map(function(s){ return '<li>'+esc(s)+'</li>'; }).join("")+'</ol>'
  +'<h3>Vorgerechnetes Beispiel</h3><p class="vt-bsp">'+esc(v.beispiel)+'</p>'
  +'<h3>Typische Verwechslung</h3><p class="vt-fehler">'+esc(v.fehler)+'</p>'
  +'<h3>In der Prüfung</h3><p class="vt-pruef">'+esc(v.pruefung)+'</p>'
  +(v.wissen? '<h3>Gut zu wissen</h3><p class="vt-wissen">'+esc(v.wissen)+'</p>' : '')
  +'<details class="vt-check"><summary>Verständnisfrage: '+esc(v.frage.q)+'</summary><p>'+esc(v.frage.a)+'</p></details></section>'; }
function setzen(){ var sec=document.getElementById("v-read"); if(!sec||sec.hidden) return;
 if(sec.querySelector("[data-vertiefung]")) return;
 var id=kapitelId(); if(!id) return; var v=daten()[id]; if(!v) return;
 sec.insertAdjacentHTML("beforeend", bau(v, id)); }
M.vertiefung={setzen:setzen};
/* Der Merker wird von einem Zeitgeber mitgelöst. Lag er nur im Bildtakt, blieb er nach vielen
   Ansichtswechseln gesetzt, wenn der Bildtakt ausblieb: danach wurde nichts mehr eingesetzt. */
var geplant=false;
function bald(){ if(geplant) return; geplant=true;
 var ausfuehren=function(){ if(!geplant) return; geplant=false; try{ setzen(); }catch(e){} };
 requestAnimationFrame(ausfuehren); setTimeout(ausfuehren,150); }
if(typeof M.go==="function" && !M.go.__vt){ var go=M.go; var w=function(){ var r=go.apply(this,arguments); bald(); setTimeout(bald,150); return r; };
 w.__vt=true; for(var k in go) if(!(k in w)) w[k]=go[k]; M.go=w; }
document.addEventListener("click", function(){ setTimeout(bald,170); }, true);
if(document.readyState!=="loading") bald(); else document.addEventListener("DOMContentLoaded", bald);
})();
;
(function(){"use strict";var M=window.MNEMIKA; if(!M||M.__leerstellen) return; M.__leerstellen=true;
/* Leerstellen in vorgerechneten Beispielen (Iteration 48).
   Der Anzeigecode der App füllt fehlende Felder mit Platzhaltern: «aus der Aufgabe», «das Ergebnis»,
   «Schritt für Schritt vorgehen.» sowie eine leere Zeile «Warum:». Solche Zeilen sagen nichts und werden
   entfernt. Vorhandene, echte Angaben bleiben unangetastet; es wird nichts erfunden.
   Additiv, ohne Beobachter und ohne Takt. */
var PLATZ=["aus der Aufgabe","das Ergebnis","Schritt für Schritt vorgehen.","Schritt für Schritt vorgehen",
 "Ergebnis auf Plausibilität und Einheit prüfen.","Ergebnis auf Plausibilität und Einheit prüfen",
 "Ein korrektes Endresultat ersetzt keinen nachvollziehbaren Lösungsweg.","Ein korrektes Endresultat ersetzt keinen nachvollziehbaren Lösungsweg"];
function txt(e){ return (e&&e.textContent||"").replace(/\s+/g," ").trim(); }
function istPlatz(t){ return PLATZ.indexOf(t)>=0; }
function saeubern(wurzel){ var n=0;
 [].forEach.call(wurzel.querySelectorAll(".ex-meta div"),function(d){ var dd=d.querySelector("dd");
  if(dd && istPlatz(txt(dd))){ d.remove(); n++; } });
 [].forEach.call(wurzel.querySelectorAll(".ex-meta"),function(m){ if(!m.querySelector("div")){ m.remove(); n++; } });
 [].forEach.call(wurzel.querySelectorAll(".rwhy, .ex-why, .step-why"),function(w){ if(!txt(w)){ w.remove(); n++; } });
 [].forEach.call(wurzel.querySelectorAll(".ex-foot p, .ex p"),function(p){
  var stark=p.querySelector("strong"); if(!stark) return;
  var rest=txt(p).replace(txt(stark),"").trim();
  if(istPlatz(rest)){ p.remove(); n++; } });
 [].forEach.call(wurzel.querySelectorAll(".ex-wrong"),function(p){ var stark=p.querySelector("strong");
  var rest=txt(p).replace(stark?txt(stark):"","").trim(); if(istPlatz(rest)){ p.remove(); n++; } });
 return n; }
function lauf(){ var sec=document.getElementById("v-read"); if(!sec||sec.hidden) return;
 M.__leerGezaehlt=(M.__leerGezaehlt||0)+saeubern(sec); }
M.leerstellen={saeubern:saeubern,lauf:lauf,platzhalter:PLATZ};
/* Der Merker wird von einem Zeitgeber mitgelöst. Lag er nur im Bildtakt, blieb er nach vielen
   Ansichtswechseln gesetzt, wenn der Bildtakt ausblieb: danach wurde nichts mehr eingesetzt. */
var geplant=false;
function bald(){ if(geplant) return; geplant=true;
 var ausfuehren=function(){ if(!geplant) return; geplant=false; try{ lauf(); }catch(e){} };
 requestAnimationFrame(ausfuehren); setTimeout(ausfuehren,150); }
if(typeof M.go==="function" && !M.go.__leer){ var go=M.go; var w=function(){ var r=go.apply(this,arguments); try{ lauf(); }catch(e){} bald(); setTimeout(bald,160); setTimeout(bald,420); return r; };
 w.__leer=true; for(var k in go) if(!(k in w)) w[k]=go[k]; M.go=w; }
document.addEventListener("click", function(){ setTimeout(bald,180); }, true);
if(document.readyState!=="loading") bald(); else document.addEventListener("DOMContentLoaded", bald);
})();
;
(function(){"use strict";var M=window.MNEMIKA; if(!M||M.__textpflege) return; M.__textpflege=true;
/* Textpflege (Iteration 49). Beseitigt drei nachgewiesene Mängel im angezeigten Text:
   1. Satzzeichenfehler: Leerzeichen vor Satzzeichen, doppelte Satzzeichen.
   2. Die inhaltsleere Zeile «Ein korrektes Endresultat ersetzt keinen nachvollziehbaren Lösungsweg.»
      und «nachvollziehbarer Arbeitsweg» als alleinstehende Floskel.
   3. Die Musterfrage «Welche Aussage trifft den Kern?» erhält den Bezug zum tatsächlichen Kapitel,
      damit sie nicht in jedem Fach gleich lautet.
   Es wird kein Inhalt erfunden; geändert wird nur, was nachweislich leer oder fehlerhaft gesetzt ist.
   Additiv, ohne Beobachter und ohne Takt. */
var KLARTEXT=[
 ["Dieser Einstieg folgt der gewählten Abschlusskonfiguration und der Quellenzuordnung.","Passt zu deinem Abschluss und den amtlichen Quellen."],
 ["Nationaler Kern, lokale Auswahl noch offen","Nationaler Kern; die lokale Auswahl fehlt noch"],
 ["Abschlusskonfiguration","Abschluss und Fächerwahl"],["Quellenzuordnung","amtliche Quellen"],
 ["Verständnis-Check","kurze Kontrollfrage"],["Abschlussauswahl","Wahl des Abschlusses"],
 ["Lernstandsicherung","Sicherung deines Lernstands"]];
/* Sätze ohne fachlichen Gehalt, die in hunderten Kapiteln wortgleich stehen. Sie werden nicht angezeigt:
   sie sagen nichts über den Stoff und lassen jedes Kapitel gleich klingen. Zahl der Fundstellen in Klammern. */
var LEERFORMELN=[
 "Eine typische Aufgabe strukturiert lösen und das Ergebnis prüfen.",
 "Dieser Stoff gehört zu deinem gewählten Abschlussprofil.",
 "Entscheidend ist, dass du ihn nicht nur wiedererkennst, sondern erklären, anwenden und an einer neuen Aufgabe begründen kannst.",
 "Grundlegendes Lesen, strukturierte Notizen und Bereitschaft, Entscheidungen zu begründen.",
 "Zum Abschluss überträgst du die drei Kernbereiche auf eine neue Situation.",
 "Die Begründung muss zeigen, warum das Vorgehen zur Frage passt.",
 "Das Kapitel ist ein vertiefender gemeinsamer Lernbaustein.",
 "Es wird erst nach offizieller Zuordnungs- und Fachprüfung für eine Bereitschaftsberechnung verwendet.",
 "Berufs- und FH-bezogene Situationen fachlich bearbeiten.",
 "Öffne bei Bedarf das Vorwissen und prüfe die Grundlagen, bevor du weiterarbeitest."];
function leerformelWeg(wurzel){ var n=0;
 var lauf=document.createTreeWalker(wurzel, NodeFilter.SHOW_TEXT, null), knoten=[], k;
 while((k=lauf.nextNode())) knoten.push(k);
 knoten.forEach(function(t){ var alt=t.nodeValue; if(!alt||alt.length<25) return;
  if(t.parentElement&&/SCRIPT|STYLE|CODE|PRE/.test(t.parentElement.tagName)) return;
  if(t.parentElement&&t.parentElement.closest&&t.parentElement.closest(".qp,.qcard .opts,.v121-question,[data-qid]")) return; /* R155 UX-01 */
  var neu=alt;
  LEERFORMELN.forEach(function(x){ if(neu.indexOf(x)>=0){ neu=neu.split(x).join(" "); } });
  if(neu!==alt){ neu=neu.replace(/\s{2,}/g," ").trim();
   var p=t.parentElement;
   if(!neu && p && p.textContent.trim()===alt.trim()){ p.remove(); }
   else t.nodeValue=neu.length? neu+(/\s$/.test(alt)?" ":"") : "";
   n++; } });
 return n; }
var FLOSKEL=[/^Ein korrektes Endresultat ersetzt keinen nachvollziehbaren Lösungsweg\.?$/,
 /^Achte auf einen nachvollziehbaren Arbeitsweg\.?$/];
function klartext(t){ var x=String(t); KLARTEXT.forEach(function(p){ if(x.indexOf(p[0])>=0) x=x.split(p[0]).join(p[1]); }); return x; }
function anrede(t){ /* Die App duzt klein; meine Texte gross. Mitten im Satz angleichen, am Satzanfang nicht. */
 return String(t).replace(/([a-zäöüß,;:)"»])\s(Du|Dein|Deine|Deinem|Deinen|Deiner|Deines|Dir|Dich)\b/g,
  function(m,vor,wort){ return vor+" "+wort.charAt(0).toLowerCase()+wort.slice(1); }); }
function satzzeichen(t){ return String(t).replace(/\s+([,;:.!?])/g,"$1").replace(/([,;:])\1+/g,"$1").replace(/\.{2,}(?!\.)/g,"."); }
function kapiteltitel(){ var id=(location.hash||"").split("/").pop();
 var c=(M.chapters||[]).filter(function(x){ return x.id===id; })[0]; return c? (c.title||"") : ""; }
function pflegen(wurzel){ var n=0, titel=kapiteltitel();
 var lauf=document.createTreeWalker(wurzel, NodeFilter.SHOW_TEXT, null);
 var knoten=[], k; while((k=lauf.nextNode())) knoten.push(k);
 knoten.forEach(function(t){ var alt=t.nodeValue; if(!alt||alt.length<3) return;
  if(t.parentElement&&/SCRIPT|STYLE|CODE|PRE/.test(t.parentElement.tagName)) return;
  var neu=anrede(klartext(satzzeichen(alt)));
  var roh=neu.trim();
  if(FLOSKEL.some(function(r){ return r.test(roh); })){ var p=t.parentElement;
   if(p&&p.textContent.trim()===roh&&!(p.closest&&p.closest(".qp,.qcard .opts,.v121-question,[data-qid]"))){ p.remove(); n++; return; } }
  if(titel && /^Welche Aussage trifft den Kern\??$/.test(roh)){ neu=neu.replace(/Welche Aussage trifft den Kern\??/, "Welche Aussage trifft den Kern von «"+titel+"»?"); }
  if(neu!==alt){ t.nodeValue=neu; n++; } });
 return n; }
function abstaende(wurzel){ /* «heisstSekante» und «diemittlereÄnderungsrate»: vor und nach Hervorhebungen fehlte das Leerzeichen. */
 var WORT=/(?:^|[\s(«"])(?:der|die|das|dem|den|des|ein|eine|einen|einem|einer|als|wie|zur|zum|im|in|auf|mit|von|für|ist|sind|heisst|nennt|nennen|bedeutet|entspricht|bleibt|wird|werden)$/i;
 var n=0;
 [].forEach.call(wurzel.querySelectorAll("em,b,strong,i,mark"),function(e){
  var innen=(e.textContent||""); if(!innen) return;
  var vor=e.previousSibling;
  if(vor && vor.nodeType===3){ var tv=vor.nodeValue||"";
   if(tv && !/\s$/.test(tv) && /[A-Za-zäöüßÄÖÜ]$/.test(tv) && /^[A-Za-zäöüÄÖÜ]/.test(innen)
      && (/^[A-ZÄÖÜ]/.test(innen) || WORT.test(tv))){ vor.nodeValue=tv+" "; n++; } }
  var nach=e.nextSibling;
  if(nach && nach.nodeType===3){ var tn=nach.nodeValue||"";
   if(tn && !/^\s/.test(tn) && /^[A-ZÄÖÜ]/.test(tn) && /[a-zäöüß]$/.test(innen)){ nach.nodeValue=" "+tn; n++; } } });
 return n; }
function lauf(){ var sec=document.getElementById("v-read"); var ziele=[];
 if(sec&&!sec.hidden) ziele.push(sec);
 ["v-home","v-learn","v-practice","v-test","v-repeat","v-quick","v-train","v-chaptertest","v-help","v-more","v-settings","v-abdeckung","v-pruefaufgaben"].forEach(function(id){ var e=document.getElementById(id); if(e&&!e.hidden) ziele.push(e); });
 ziele.forEach(function(z){ try{ M.__textGepflegt=(M.__textGepflegt||0)+pflegen(z)+abstaende(z)+leerformelWeg(z); }catch(e){} }); }
M.textpflege={pflegen:pflegen,lauf:lauf,satzzeichen:satzzeichen};
/* Der Merker wird von einem Zeitgeber mitgelöst. Lag er nur im Bildtakt, blieb er nach vielen
   Ansichtswechseln gesetzt, wenn der Bildtakt ausblieb: danach wurde nichts mehr eingesetzt. */
var geplant=false;
function bald(){ if(geplant) return; geplant=true;
 var ausfuehren=function(){ if(!geplant) return; geplant=false; try{ lauf(); }catch(e){} };
 requestAnimationFrame(ausfuehren); setTimeout(ausfuehren,150); }
if(typeof M.go==="function" && !M.go.__tp){ var go=M.go; var w=function(){ var r=go.apply(this,arguments); try{ lauf(); }catch(e){} bald(); setTimeout(bald,200); setTimeout(bald,500); return r; };
 w.__tp=true; for(var k2 in go) if(!(k2 in w)) w[k2]=go[k2]; M.go=w; }
document.addEventListener("click", function(){ setTimeout(bald,200); }, true);
if(document.readyState!=="loading") bald(); else document.addEventListener("DOMContentLoaded", bald);
})();
;
(function(){"use strict";var M=window.MNEMIKA; if(!M||M.__schaubilder) return; M.__schaubilder=true;
/* Schaubilder (Iteration 51): markiert Figuren, die am Telefon seitwärts geschoben werden müssen,
   damit die Beschriftung lesbar bleibt. Kein Zuschnitt, keine Verzerrung, kein Beobachter. */
function pruefen(){ var sec=document.getElementById("v-read"); if(!sec||sec.hidden) return;
 [].forEach.call(sec.querySelectorAll("figure, .viz, .fig"),function(f){
  if(f.closest(".mn-mentor-card,.mn-coach")) return;
  f.removeAttribute("data-schiebbar");
  var svg=f.querySelector("svg");
  if(svg && !svg.getAttribute("role")) svg.setAttribute("role","img"); }); }
M.schaubilder={pruefen:pruefen};
/* Der Merker wird von einem Zeitgeber mitgelöst. Lag er nur im Bildtakt, blieb er nach vielen
   Ansichtswechseln gesetzt, wenn der Bildtakt ausblieb: danach wurde nichts mehr eingesetzt. */
var geplant=false;
function bald(){ if(geplant) return; geplant=true;
 var ausfuehren=function(){ if(!geplant) return; geplant=false; try{ pruefen(); }catch(e){} };
 requestAnimationFrame(ausfuehren); setTimeout(ausfuehren,150); }
if(typeof M.go==="function" && !M.go.__sb){ var go=M.go; var w=function(){ var r=go.apply(this,arguments); try{ pruefen(); }catch(e){} bald(); setTimeout(bald,260); return r; };
 w.__sb=true; for(var k in go) if(!(k in w)) w[k]=go[k]; M.go=w; }
window.addEventListener("resize", function(){ setTimeout(bald,150); });
if(document.readyState!=="loading") bald(); else document.addEventListener("DOMContentLoaded", bald);
})();
;
(function(){"use strict";var M=window.MNEMIKA; if(!M||M.__kiadresse) return; M.__kiadresse=true;
/* Adresse des KI-Erklärers (Iteration 55): Die App ruft nur diese Adresse auf; ein Schlüssel liegt nie in der Seite.
   Ohne Adresse bleibt die vorbereitete Anfrage zum Kopieren erhalten. Additiv, ohne Beobachter. */
var SCHLUESSEL="mnemika-ai-endpoint";
function esc(t){return String(t==null?"":t).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}
function adresse(){ /* R128 (GH-A): nur die zentrale, vom Betreiber festgelegte Adresse */ try{ return (window.MNEMIKA&&window.MNEMIKA.kiEndpoint)?window.MNEMIKA.kiEndpoint():""; }catch(e){ return ""; } }
function gueltig(u){ return /^https:\/\/[^\s"']+$/.test(String(u||"").trim()); }
function feld(){ var sec=document.getElementById("v-settings")||document.getElementById("v-more"); if(!sec||sec.hidden) return;
 if(sec.querySelector("[data-ki-feld]")) return;
 var a=adresse();
 var html='<div class="card setrow ki-feld" data-ki-feld="1"><div><b>KI-Tutor</b>'
  +'<span>Die KI-Lernhilfe läuft auf deinem Gerät und braucht keine Adresse. Ein eigener Dienst ist nur für Betreiber vorgesehen und in dieser Fassung ausgeschaltet.</span>'
  +'<p class="ki-status">'+(a? 'eingerichtet: '+esc(a.slice(0,44))+(a.length>44?'…':'') : 'nicht eingerichtet')+'</p>'
  +'<input class="ki-eingabe" type="url" readonly inputmode="url" placeholder="https://stoffknacker-ki.dein-konto.workers.dev" value="'+esc(a)+'">'
  +'<p class="ki-hinweis">Öffne die KI-Lernhilfe direkt in einer Lektion. Beim ersten Mal fragt sie, ob sie das Sprachmodell laden darf.</p></div>'
  +'<span class="ki-knoepfe"><button class="btn sm" data-ki="speichern">Speichern</button> <button class="btn ghost sm" data-ki="loeschen">Entfernen</button></span></div>';
 sec.insertAdjacentHTML("beforeend", html);
 var kasten=sec.querySelector("[data-ki-feld]");
 kasten.querySelector('[data-ki="speichern"]').onclick=function(){ var v=kasten.querySelector(".ki-eingabe").value.trim();
  var st=kasten.querySelector(".ki-status");
  if(v && !gueltig(v)){ st.textContent="Bitte eine vollständige Adresse mit https eintragen."; return; }
  /* R128 (GH-A): im Browser wird keine KI-Adresse gespeichert */
  st.textContent="Die Adresse der KI-Lernhilfe legt der Betreiber fest; sie kann hier nicht geändert werden."; };
 kasten.querySelector('[data-ki="loeschen"]').onclick=function(){ try{ localStorage.removeItem(SCHLUESSEL); }catch(e){}
  kasten.querySelector(".ki-eingabe").value=""; kasten.querySelector(".ki-status").textContent="nicht eingerichtet"; }; }
M.kiAdresse={feld:feld,lesen:adresse,gueltig:gueltig};
/* Der Merker wird von einem Zeitgeber mitgelöst. Lag er nur im Bildtakt, blieb er nach vielen
   Ansichtswechseln gesetzt, wenn der Bildtakt ausblieb: danach wurde nichts mehr eingesetzt. */
var geplant=false;
function bald(){ if(geplant) return; geplant=true;
 var ausfuehren=function(){ if(!geplant) return; geplant=false; try{ feld(); }catch(e){} };
 requestAnimationFrame(ausfuehren); setTimeout(ausfuehren,150); }
if(typeof M.go==="function" && !M.go.__ki){ var go=M.go; var w=function(){ var r=go.apply(this,arguments); try{ feld(); }catch(e){} bald(); setTimeout(bald,200); return r; };
 w.__ki=true; for(var k in go) if(!(k in w)) w[k]=go[k]; M.go=w; }
document.addEventListener("click", function(){ setTimeout(bald,200); }, true);
if(document.readyState!=="loading") bald(); else document.addEventListener("DOMContentLoaded", bald);
})();
;
(function(){"use strict";var M=window.MNEMIKA; if(!M||M.__schaubildEinsatz) return; M.__schaubildEinsatz=true;
/* Schaubilder in jeder Lektion (Iteration 57): setzt das Diagramm des Kapitels ein, auch ohne Vertiefungsteil.
   Doppelte Einsätze sind ausgeschlossen. Additiv, ohne Beobachter und ohne Takt. */
function esc(t){return String(t==null?"":t).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}
function daten(){ return (window.MNEMIKA_SCHAUBILDER||{items:{}}).items; }
function kapitelId(){ var id=(location.hash||"").split("/").pop(); if(daten()[id]) return id;
 var sec=document.getElementById("v-read"); if(!sec) return null;
 var t=(sec.querySelector("h1")||{}).textContent||"";
 var treffer=(M.chapters||[]).filter(function(c){ return c.title && t.indexOf(c.title)>=0 && daten()[c.id]; })[0];
 return treffer? treffer.id : null; }
function setzen(){ var sec=document.getElementById("v-read"); if(!sec||sec.hidden) return;
 if(sec.querySelector("[data-schaubild]")) return;
 var id=kapitelId(); if(!id) return; var S=daten()[id]; if(!S) return;
 var html='<figure class="vt-fig" data-schaubild="1">'+S.svg+'<figcaption><b>'+esc(S.titel)+'.</b> '+esc(S.bu)+'</figcaption></figure>';
 /* Ans Ende des Lesebereichs: dort steht das Diagramm im Fluss und überdeckt nichts.
    Eine Platzierung direkt unter dem Kopf überlagerte die Figur der Lehrperson im Kopfbereich. */
 /* Früh im Lesefluss zeigen: nach dem ersten Abschnitt, nicht am Ende. Ein Bild am Schluss einer langen
    Lektion wird nie gesehen; gemessen lag es bei 96 Prozent der Seitenhöhe. */
 var haupt=sec.querySelector(".lesson-main")||sec;
 var marke=haupt.querySelector("h2,h3");
 if(marke && marke.parentElement===haupt) marke.insertAdjacentHTML("beforebegin", html);
 else { var abs=haupt.querySelectorAll(":scope > p");
  if(abs.length>=2) abs[1].insertAdjacentHTML("beforebegin", html); else haupt.insertAdjacentHTML("afterbegin", html); } }
M.schaubildEinsatz={setzen:setzen};
/* Der Merker wird von einem Zeitgeber mitgelöst. Lag er nur im Bildtakt, blieb er nach vielen
   Ansichtswechseln gesetzt, wenn der Bildtakt ausblieb: danach wurde nichts mehr eingesetzt. */
var geplant=false;
function bald(){ if(geplant) return; geplant=true;
 var ausfuehren=function(){ if(!geplant) return; geplant=false; try{ setzen(); }catch(e){} };
 requestAnimationFrame(ausfuehren); setTimeout(ausfuehren,150); }
if(typeof M.go==="function" && !M.go.__sbe){ var go=M.go; var w=function(){ var r=go.apply(this,arguments); try{ setzen(); }catch(e){} bald(); setTimeout(bald,240); return r; };
 w.__sbe=true; for(var k in go) if(!(k in w)) w[k]=go[k]; M.go=w; }
document.addEventListener("click", function(){ setTimeout(bald,220); }, true);
if(document.readyState!=="loading") bald(); else document.addEventListener("DOMContentLoaded", bald);
})();
;
(function(){"use strict";var M=window.MNEMIKA; if(!M||M.__lehrstoff) return; M.__lehrstoff=true;
/* Vollständiger Lehrstoff in der Ansicht Lernen (Iteration 60).
   Die App zeigt dort nur die freigegebene Auswahl; alle übrigen Kapitel des Abschlusses blieben unerreichbar.
   Diese Liste ergänzt sie, ohne die Prüfungslogik der App zu verändern. Additiv, ohne Beobachter und ohne Takt. */
var SYM={"field-fms-music-theatre":"♫","field-fms-design":"◑","field-fms-communication":"✉","field-fms-pedagogy":"✡","field-fms-social-work":"☺","field-fms-health":"⚕","russian":"☰","sport":"⛹",math:"\u2211",informatics:"\u2318",biology:"\u2767",chemistry:"\u2697",physics:"\u2699",technology:"\u2699",history:"\u23f3",
 geography:"\u25cd",economics:"\u21c4",law:"\u00a7",accounting:"\u25a4",social:"\u2696",german:"\u270e",communication:"\u270e",arts:"\u25d0",
 projects:"\u25c7",orientation:"\u25c7",english:"\u2630",french:"\u2630",italian:"\u2630",spanish:"\u2630",latin:"\u2630",romansh:"\u2630",languages:"\u2630",greek:"\u2630"};
function fachDaten(list){ for(var i=0;i<list.length;i++){ var c=(M.chapters||[]).filter(function(x){ return x.id===list[i].id; })[0];
  if(c) return [SYM[c.subject]||"\u25c6", c.subject, c]; } return ["\u25c6",null,null]; }
function esc(t){return String(t==null?"":t).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}
var PROG={"passerelle-2023":"Passerelle","gym-maturitaet-2024":"Gymnasium","smp":"SMP","bm-2025":"BM","ebmp":"EBMP","fms-2018":"FMS/Fachmaturität"};
function abschluss(){ try{ return PROG[M.activeProgram&&M.activeProgram()]||""; }catch(e){ return ""; } }
function freigegeben(){ try{ return M.activeChapterIds? M.activeChapterIds() : null; }catch(e){ return null; } }
function stoff(){ var a=abschluss(), frei=freigegeben(), G={};
 (M.chapters||[]).forEach(function(c){ var u=String(c.unit||"").trim();
  var teile=u.split("·"), prog=teile[0].trim(), fach=(teile[1]||"").trim();
  var gehoert = !a || !prog || prog===a || teile.length===1;   /* eigener Abschluss oder gemeinsamer Lernkern */
  if(!gehoert) return;
  var name=fach|| (M.SUBJECTS&&M.SUBJECTS[c.subject]&&M.SUBJECTS[c.subject].label) || c.subject || "Weitere";
  (G[name]=G[name]||[]).push({id:c.id, t:c.title||c.id, frei:!!(frei&&frei.has&&frei.has(c.id))}); });
 return G; }
function bauen(){ var sec=document.getElementById("v-learn"); if(!sec||sec.hidden) return;
 if(sec.querySelector("[data-lehrstoff]")) return;
 var G=stoff(), faecher=Object.keys(G).sort(); if(!faecher.length) return;
 var summe=0, offen=0; faecher.forEach(function(f){ G[f].forEach(function(x){ summe++; if(!x.frei) offen++; }); });
 var belegt=0, mitBild=0;
 faecher.forEach(function(fn){ G[fn].forEach(function(x){ var c=(M.chapters||[]).filter(function(y){return y.id===x.id;})[0];
  if(c && M.anforderungenFuer && M.anforderungenFuer(c).length) belegt++;
  if(c && M.VISUAL_LAYER_R37 && (M.VISUAL_LAYER_R37.data.chapterBindings[c.id]||[]).some(function(id){return !!M.VISUAL_LAYER_R37.data.definitions[id];})) mitBild++; }); });
 var h='<section class="ls r112-library" data-lehrstoff="1"><details class="r112-library-owner"><summary>Alle Themen und gemeinsame Grundlagen</summary><p class="ls-intro">Oben findest du die Fächer deiner Auswahl. Diese Bibliothek enthält zusätzlich gemeinsame Grundlagen. Ein Thema ausserhalb der Auswahl wird dadurch nicht zum Pflichtstoff.</p>'
  +'<div class="ls-nachweis"><span><b>'+summe+'</b> Themen</span><span><b>'+faecher.length+'</b> F\u00e4cher</span>'
  +'<span><b>'+belegt+'</b> mit amtlichem Lehrplanbezug</span><span><b>'+mitBild+'</b> mit Grafikzuordnung</span>'
  +'<a class="ls-nachweis-link" href="#abdeckung">Nachweis \u00f6ffnen</a></div>' 
  +'<p class="ls-intro">'+summe+' Themen für '+esc(abschluss()||"deinen Abschluss")+' und den gemeinsamen Lernkern, in '+faecher.length+' Fächern. '
  +(offen? offen+' davon stehen ausserhalb der aktuellen Auswahl und sind hier direkt erreichbar.' : 'Alle sind in der Auswahl enthalten.')+'</p>';
 faecher.forEach(function(f){ var L=G[f];
  var fd=fachDaten(L);
  /* R96: Botschaft aus dem ersten Kapitel des Fachs in der Auswahl (Beobachtung, Ziel, naechster Schritt) statt einer allgemeinen Fachbotschaft. */
  var x0=L.filter(function(x){return x.frei;})[0]||L[0], c0=x0&&(M.chapters||[]).filter(function(y){return y.id===x0.id;})[0], z0=c0&&(c0.objectives||[])[0];
  var eigene=(x0&&z0)?{h:"Erstes Thema: "+x0.t,m:"Ziel: "+String(z0).replace(/\.?$/,".")+" \u00d6ffne das Kapitel und beginne mit \u00abOrientieren\u00bb."}:null;
  var karte=(fd[1]&&M.coachKarte)? M.coachKarte(fd[1],"chapter_intro",false,eigene) : "";
  h+='<details class="ls-fach"><summary><span class="ls-sym">'+fd[0]+'</span><b>'+esc(f)+'</b><span class="ls-meta">'+L.length+' Themen</span></summary>'
   +(karte? '<div class="ls-karte">'+karte+'</div>' : '')+'<ul class="ls-liste">';
  L.forEach(function(x){ h+='<li><button class="ls-link" data-ls-open="'+esc(x.id)+'">'+esc(x.t)+'</button>'
    +(x.frei? ' <span class="ls-frei">in der Auswahl</span>' : '')+'</li>'; });
  h+='</ul></details>'; });
 h+='</details></section>';
 sec.insertAdjacentHTML("beforeend", h);
 sec.querySelectorAll("[data-ls-open]").forEach(function(b){ b.onclick=function(){ try{ M.go("read", b.getAttribute("data-ls-open")); }catch(e){} }; }); }
M.lehrstoff={bauen:bauen, stoff:stoff};
/* Der Merker wird von einem Zeitgeber mitgelöst. Lag er nur im Bildtakt, blieb er nach vielen
   Ansichtswechseln gesetzt, wenn der Bildtakt ausblieb: danach wurde nichts mehr eingesetzt. */
var geplant=false;
function bald(){ if(geplant) return; geplant=true;
 var ausfuehren=function(){ if(!geplant) return; geplant=false; try{ bauen(); }catch(e){} };
 requestAnimationFrame(ausfuehren); setTimeout(ausfuehren,150); }
if(typeof M.go==="function" && !M.go.__ls){ var go=M.go; var w=function(){ var r=go.apply(this,arguments); try{ bauen(); }catch(e){} bald(); setTimeout(bald,220); return r; };
 w.__ls=true; for(var k in go) if(!(k in w)) w[k]=go[k]; M.go=w; }
document.addEventListener("click", function(){ setTimeout(bald,220); }, true);
if(document.readyState!=="loading") bald(); else document.addEventListener("DOMContentLoaded", bald);
})();
;
(function(){"use strict";var M=window.MNEMIKA; if(!M||M.__strukturbild) return; M.__strukturbild=true;
/* Strukturbilder (Iteration 61): zeichnet für jedes Kapitel ohne eigenes Schaubild ein Übersichtsbild
   aus seinen tatsächlichen Abschnitten. Es wird nichts erfunden: alle Beschriftungen stammen aus dem Kapitel.
   Fachfarbe und Symbol richten sich nach dem Fach. Additiv, ohne Beobachter und ohne Takt. */
var FARBE={"greek":["#475569","#f1f5f9"],"field-fms-music-theatre":["#475569","#f1f5f9"],"field-fms-design":["#475569","#f1f5f9"],"field-fms-communication":["#475569","#f1f5f9"],"field-fms-pedagogy":["#475569","#f1f5f9"],"field-fms-social-work":["#475569","#f1f5f9"],"field-fms-health":["#475569","#f1f5f9"],"russian":["#475569","#f1f5f9"],"sport":["#475569","#f1f5f9"],math:["#5b5bd6","#eef2ff"],informatics:["#5b5bd6","#eef2ff"],biology:["#15803d","#dcfce7"],chemistry:["#0f766e","#ccfbf1"],
 physics:["#b45309","#fef3c7"],technology:["#b45309","#fef3c7"],history:["#a16207","#fef9c3"],geography:["#0369a1","#e0f2fe"],
 economics:["#7c3aed","#f3e8ff"],law:["#7c3aed","#f3e8ff"],accounting:["#7c3aed","#f3e8ff"],social:["#be123c","#ffe4e6"],
 german:["#c2410c","#ffedd5"],english:["#0891b2","#cffafe"],french:["#0891b2","#cffafe"],italian:["#0891b2","#cffafe"],
 spanish:["#0891b2","#cffafe"],latin:["#0891b2","#cffafe"],romansh:["#0891b2","#cffafe"],languages:["#0891b2","#cffafe"],
 arts:["#db2777","#fce7f3"],projects:["#475569","#f1f5f9"],orientation:["#475569","#f1f5f9"],communication:["#c2410c","#ffedd5"]};
var SYMBOL={"greek":"☰","field-fms-music-theatre":"♫","field-fms-design":"◑","field-fms-communication":"✉","field-fms-pedagogy":"✡","field-fms-social-work":"☺","field-fms-health":"⚕","russian":"☰","sport":"⛹",math:"∑",informatics:"⌘",biology:"❧",chemistry:"⚗",physics:"⚙",technology:"⚙",history:"⏳",geography:"◍",
 economics:"⇄",law:"§",accounting:"▤",social:"⚖",german:"✎",english:"☰",french:"☰",italian:"☰",spanish:"☰",latin:"☰",
 romansh:"☰",languages:"☰",arts:"◐",projects:"◇",orientation:"◇",communication:"✎"};
function esc(t){return String(t==null?"":t).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}
function kuerzen(t,n){ t=String(t||"").replace(/\s+/g," ").trim(); return t.length>n? t.slice(0,n-1)+"…" : t; }
function echteTitel(){ var sec=document.getElementById("v-read"); if(!sec) return [];
 var haupt=sec.querySelector(".lesson-main")||sec;
 return [].slice.call(haupt.querySelectorAll("h3")).filter(function(h){ return h.offsetParent!==null
  && !h.closest("[data-mn-coach],[data-uebersicht],[data-themenbild],.vt,.v87-coach"); })
  .map(function(h){ return (h.textContent||"").replace(/\s+/g," ").trim(); }).filter(function(x){ return x.length>3; }); }
function kapitel(){ var id=(location.hash||"").split("/").pop();
 return (M.chapters||[]).filter(function(c){ return c.id===id; })[0]||null; }
function bild(c){ var f=FARBE[c.subject]||["#475569","#f1f5f9"], sym=SYMBOL[c.subject]||"◆";
 var alleTeile=(c.blocks||[]).map(function(b,i){ return b.title||echteTitel()[i]||("Abschnitt "+(i+1)); });
 var teile=alleTeile.slice(0,6);
 if(teile.length<2) return "";
 var h=110+teile.length*54, y=88;
 var s='<svg viewBox="0 0 640 '+h+'" role="img" aria-label="Aufbau des Kapitels" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:inherit">'
  +'<rect width="640" height="'+h+'" rx="12" fill="'+f[1]+'"/>'
  +'<text x="28" y="44" font-size="26" fill="'+f[0]+'">'+sym+'</text>'
  +'<text x="62" y="44" font-size="18" font-weight="700" fill="#0f172a">'+esc(kuerzen(c.title,46))+'</text>'
  +'<text x="62" y="66" font-size="14" fill="#475569">'
  +(alleTeile.length>teile.length? 'Die ersten '+teile.length+' von '+alleTeile.length+' Abschnitten' : 'Aufbau des Kapitels in '+teile.length+' Schritten')+'</text>';
 teile.forEach(function(t,i){
  s+='<g><rect x="28" y="'+y+'" width="584" height="42" rx="10" fill="#ffffff" stroke="'+f[0]+'" stroke-opacity=".35"/>'
   +'<circle cx="54" cy="'+(y+21)+'" r="13" fill="'+f[0]+'"/>'
   +'<text x="54" y="'+(y+26)+'" font-size="14" font-weight="700" fill="#ffffff" text-anchor="middle">'+(i+1)+'</text>'
   +'<text x="78" y="'+(y+26)+'" font-size="15" fill="#0f172a">'+esc(kuerzen(t,58))+'</text></g>';
  if(i<teile.length-1) s+='<line x1="54" y1="'+(y+42)+'" x2="54" y2="'+(y+54)+'" stroke="'+f[0]+'" stroke-width="2"/>';
  y+=54; });
 return s+'</svg>'; }
function setzen(){ var sec=document.getElementById("v-read"); if(!sec||sec.hidden) return;
 if(sec.querySelector("[data-schaubild],[data-strukturbild]")) return;
 var c=kapitel(); if(!c) return; var svg=bild(c); if(!svg) return;
 var html='<figure class="vt-fig" data-strukturbild="1">'+svg
  +'<figcaption><b>Aufbau dieses Kapitels.</b> Die Schritte entsprechen den Abschnitten der Lektion; so siehst du auf einen Blick, worauf sie hinausläuft.</figcaption></figure>';
 /* Früh im Lesefluss zeigen: nach dem ersten Abschnitt, nicht am Ende. */
 var haupt=sec.querySelector(".lesson-main")||sec;
 var marke=haupt.querySelector("h2,h3");
 if(marke && marke.parentElement===haupt) marke.insertAdjacentHTML("beforebegin", html);
 else { var abs=haupt.querySelectorAll(":scope > p");
  if(abs.length>=2) abs[1].insertAdjacentHTML("beforebegin", html); else haupt.insertAdjacentHTML("afterbegin", html); } }
M.strukturbild={setzen:setzen,bild:bild};
/* Der Merker wird von einem Zeitgeber mitgelöst. Lag er nur im Bildtakt, blieb er nach vielen
   Ansichtswechseln gesetzt, wenn der Bildtakt ausblieb: danach wurde nichts mehr eingesetzt. */
var geplant=false;
function bald(){ if(geplant) return; geplant=true;
 var ausfuehren=function(){ if(!geplant) return; geplant=false; try{ setzen(); }catch(e){} };
 requestAnimationFrame(ausfuehren); setTimeout(ausfuehren,150); }
if(typeof M.go==="function" && !M.go.__stb){ var go=M.go; var w=function(){ var r=go.apply(this,arguments); try{ setzen(); }catch(e){} bald(); setTimeout(bald,260); return r; };
 w.__stb=true; for(var k in go) if(!(k in w)) w[k]=go[k]; M.go=w; }
document.addEventListener("click", function(){ setTimeout(bald,240); }, true);
if(document.readyState!=="loading") bald(); else document.addEventListener("DOMContentLoaded", bald);
})();
;
window.MNEMIKA_AUSGABE={version:'121.7-recovery127',build:'recovery127',datum:'2026-10-01',releaseStatus:'BLOCKED'};

;
(function(){"use strict";var M=window.MNEMIKA; if(!M||M.__uebersichtstabelle) return; M.__uebersichtstabelle=true;
/* Übersichtstabelle (Iteration 69): fasst die Abschnitte des Kapitels als Tabelle. Jede Zeile besteht aus der
   Abschnittsüberschrift und dem ersten Satz dieses Abschnitts; es wird nichts erfunden oder umformuliert. */
function esc(t){return String(t==null?"":t).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}
function rein(t){ return String(t||"").replace(/<[^>]+>/g," ").replace(/&nbsp;/g," ").replace(/\s+/g," ").trim(); }
function ersterSatz(t){ var s=rein(t); var m=s.split(/(?<=[.!?])\s+/)[0]||s; return m.length>190? m.slice(0,187)+"…" : m; }
function kapitel(){ var id=(location.hash||"").split("/").pop();
 return (M.chapters||[]).filter(function(c){ return c.id===id; })[0]||null; }
function zeilen(c){ var out=[];
 (c.blocks||[]).forEach(function(b,i){ var titel=rein(b.title)||("Abschnitt "+(i+1));
  var txt=b.text||b.body||b.content||"";
  if(!txt && (b.paras||b.parts||[]).length){ var p=(b.paras||b.parts)[0]; txt=typeof p==="string"?p:(p&&p.text)||""; }
  var satz=ersterSatz(txt); if(satz.length>30) out.push([titel, satz]); });
 return out.slice(0,8); }
function setzen(){ var sec=document.getElementById("v-read"); if(!sec||sec.hidden) return;
 if(sec.querySelector("[data-uebersicht]")) return;
 var c=kapitel(); if(!c) return; var z=zeilen(c); if(z.length<3) return;
 var h='<section class="uet" data-uebersicht="1"><h2>Auf einen Blick</h2>'
  +'<p class="uet-intro">Die Abschnitte dieses Kapitels mit ihrer jeweils ersten Aussage. Wörtlich aus der Lektion, als Übersicht vor dem Lesen und zum Nachschlagen danach.</p>'
  +'<div class="uet-rahmen" role="region" aria-label="\u00dcbersicht des Kapitels" tabindex="0"><table class="uet-tab"><thead><tr><th scope="col">Abschnitt</th><th scope="col">Kernaussage</th></tr></thead><tbody>';
 z.forEach(function(r){ h+='<tr><th scope="row">'+esc(r[0])+'</th><td>'+esc(r[1])+'</td></tr>'; });
 h+='</tbody></table></div></section>';
 var haupt=sec.querySelector(".lesson-main")||sec;
 haupt.insertAdjacentHTML("beforeend", h); }
M.uebersichtstabelle={setzen:setzen, zeilen:zeilen};
var geplant=false;
function bald(){ if(geplant) return; geplant=true;
 var ausfuehren=function(){ if(!geplant) return; geplant=false; try{ setzen(); }catch(e){} };
 requestAnimationFrame(ausfuehren); setTimeout(ausfuehren,150); }
if(typeof M.go==="function" && !M.go.__uet){ var go=M.go; var w=function(){ var r=go.apply(this,arguments); try{ setzen(); }catch(e){} bald(); setTimeout(bald,260); return r; };
 w.__uet=true; for(var k in go) if(!(k in w)) w[k]=go[k]; M.go=w; }
document.addEventListener("click", function(){ setTimeout(bald,220); }, true);
if(document.readyState!=="loading") bald(); else document.addEventListener("DOMContentLoaded", bald);
})();
;
window.MNEMIKA_AUSGABE={version:'121.7-recovery127',build:'recovery127',datum:'2026-10-01',releaseStatus:'BLOCKED'};

;
window.MNEMIKA_BELEGLAGE=SKContent.pool("app-18-65000",{"stand":"2026-09-28","quelle":"04_COMPLIANCE_MATRIX_620_CHAPTERS.csv","schluessel":{"U":"Nicht zugeordnet oder gemeinsame Grundlage","S":"Prüfungskonfiguration zu bestätigen","G":"Kantonale oder schulische Ergänzung nötig","B":"Kantonale oder schulische Ergänzung nötig","P":"Neu zu schreiben und zu belegen","F":"Kantonale oder schulische Ergänzung nötig"},"belegstufe":{"0":"keine Quelle","1":"Quelle ohne Seitenangabe","2":"Quelle mit Seitenangabe"},"items":{},"amtlich":{},"profil":{"programmeId":"passerelle-2023","configurationId":"passerelle-winter-2027-de-en","label":"Zentrale Passerelle, Deutsche Schweiz, Winter 2027, Deutsch und Englisch","regionalGeography":"USA","writtenExams":"15.-18. Februar 2027","oralExams":"5.-6. März 2027","legalSource":"sbfi-passerelle-guidelines-2023","sessionSource":"sbfi-passerelle-session-winter-2027-de","truthfulReadiness":"BLOCKED_UNTIL_EVIDENCE_AND_CONTENT_GATES_PASS"}});

;
(function(){"use strict";var M=window.MNEMIKA; if(!M||M.__merkbild) return; M.__merkbild=true;
/* Merkbild je Abschnitt (Iteration 72): jeder Abschnitt der Lektion erhält ein kompaktes Bild mit
   Abschnittstitel, Fachsymbol und bis zu drei Schlüsselbegriffen aus dem Abschnittstext.
   Alle Wörter stammen aus dem Abschnitt selbst; es wird nichts erfunden. Ohne Beobachter, ohne Takt. */
var FARBE={math:["#5b5bd6","#eef2ff"],informatics:["#5b5bd6","#eef2ff"],biology:["#15803d","#dcfce7"],chemistry:["#0f766e","#ccfbf1"],
 physics:["#b45309","#fef3c7"],technology:["#b45309","#fef3c7"],history:["#a16207","#fef9c3"],geography:["#0369a1","#e0f2fe"],
 economics:["#7c3aed","#f3e8ff"],law:["#7c3aed","#f3e8ff"],accounting:["#7c3aed","#f3e8ff"],social:["#be123c","#ffe4e6"],
 german:["#c2410c","#ffedd5"],communication:["#c2410c","#ffedd5"],arts:["#db2777","#fce7f3"],projects:["#475569","#f1f5f9"],
 orientation:["#475569","#f1f5f9"],english:["#0891b2","#cffafe"],french:["#0891b2","#cffafe"],italian:["#0891b2","#cffafe"],
 spanish:["#0891b2","#cffafe"],latin:["#0891b2","#cffafe"],romansh:["#0891b2","#cffafe"],languages:["#0891b2","#cffafe"],sport:["#0d9488","#ccfbf1"]};
var SYM={math:"\u2211",informatics:"\u2318",biology:"\u2767",chemistry:"\u2697",physics:"\u2699",technology:"\u2699",history:"\u23f3",
 geography:"\u25cd",economics:"\u21c4",law:"\u00a7",accounting:"\u25a4",social:"\u2696",german:"\u270e",communication:"\u270e",
 arts:"\u25d0",projects:"\u25c7",orientation:"\u25c7",english:"\u2630",french:"\u2630",italian:"\u2630",spanish:"\u2630",
 latin:"\u2630",romansh:"\u2630",languages:"\u2630",sport:"\u26f9"};
function esc(t){return String(t==null?"":t).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}
function rein(t){ return String(t||"").replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim(); }
function kuerzen(t,n){ t=rein(t); return t.length>n? t.slice(0,n-1)+"\u2026" : t; }
function begriffe(text){ var t=rein(text), out=[], gesehen={};
 var stopp={"Halte":1,"Schritt":1,"Stelle":1,"Fehler":1,"Nimm":1,"Achte":1,"Pruefe":1,"Prüfe":1,"Frage":1,"Antwort":1,"Beispiel":1,"Aufgabe":1,"Kapitel":1,"Abschnitt":1,"Diese":1,"Dieser":1,"Dieses":1,"Damit":1,"Dabei":1,"Wenn":1,"Also":1,"Eine":1,"Einer":1,"Eines":1,"Beim":1,"Beim":1,"Nach":1,"Vor":1,"Der":1,"Die":1,"Das":1,"Und":1,"Aber":1,"Nur":1,"Auch":1,"Hier":1,"Dort":1,"Nun":1,"Dann":1};
 (t.match(/\b[A-ZÄÖÜ][a-zäöüß]{4,}\b/g)||[]).forEach(function(w){ if(stopp[w]||gesehen[w]) return; gesehen[w]=1; out.push(w); });
 return out.slice(0,3); }
function kapitel(){ var id=(location.hash||"").split("/").pop();
 return (M.chapters||[]).filter(function(c){ return c.id===id; })[0]||null; }
function bild(titel, text, fach, nummer){ var f=FARBE[fach]||["#475569","#f1f5f9"], sym=SYM[fach]||"\u25c6";
 var bg=begriffe(text); var h=bg.length? 132 : 96;
 var s='<svg viewBox="0 0 640 '+h+'" role="img" aria-label="'+esc(kuerzen(titel,60))+'" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:inherit">'
  +'<rect width="640" height="'+h+'" rx="12" fill="'+f[1]+'"/>'
  +'<rect x="0" y="0" width="6" height="'+h+'" rx="3" fill="'+f[0]+'"/>'
  +'<text x="26" y="42" font-size="24" fill="'+f[0]+'">'+sym+'</text>'
  +'<text x="60" y="36" font-size="13" fill="'+f[0]+'" font-weight="700">ABSCHNITT '+nummer+'</text>'
  +'<text x="60" y="60" font-size="17" font-weight="700" fill="#0f172a">'+esc(kuerzen(titel,52))+'</text>';
 bg.forEach(function(w,i){ var x=60+i*190;
  s+='<g><rect x="'+x+'" y="82" width="176" height="34" rx="9" fill="#ffffff" stroke="'+f[0]+'" stroke-opacity=".35"/>'
   +'<text x="'+(x+14)+'" y="104" font-size="14" fill="#1e293b">'+esc(kuerzen(w,20))+'</text></g>'; });
 return s+'</svg>'; }
function hatInhalt(h){ /* Nur Abschnitte mit eigenem Text erhalten Bild und Karte. Gliederungsüberschriften
 wie Orientieren oder Prüfen tragen nur eine Zeile und würden sonst unnötig zugestellt. */
 var t="", e=h.nextElementSibling, n=0;
 while(e && n<6 && !/^H[1-3]$/.test(e.tagName)){
  if(!(e.hasAttribute && (e.hasAttribute("data-merkbild")||e.hasAttribute("data-mn-coach")))) t+=" "+(e.textContent||"");
  e=e.nextElementSibling; n++; }
 return t.replace(/\s+/g," ").trim().length>=150; }
function setzen(){ var sec=document.getElementById("v-read"); if(!sec||sec.hidden) return;
 var c=kapitel(); if(!c) return; var fach=c.subject||"";
 var haupt=sec.querySelector(".lesson-main")||sec;
 var titel=[].slice.call(haupt.querySelectorAll("h2,h3")).filter(function(h){
  return h.offsetParent!==null && !h.closest("[data-mn-coach],[data-merkbild],.uet,.vt,[data-uebersicht]") && hatInhalt(h); });
 titel.slice(0,16).forEach(function(h,i){   /* jeder Abschnitt, nicht nur die ersten acht */
  if(h.nextElementSibling && h.nextElementSibling.hasAttribute && h.nextElementSibling.hasAttribute("data-merkbild")) return;
  var text=""; var e=h.nextElementSibling; var n=0;
  while(e && n<3 && !/^H[1-3]$/.test(e.tagName)){
   if(!(e.matches && e.matches("[data-merkbild],[data-mn-coach],[data-uebersicht],[data-themenbild],[data-fachbild],[data-strukturbild],.v87-coach,.mn-mentor-slot,aside,figure,table"))) text+=" "+(e.textContent||"");
   e=e.nextElementSibling; n++; }
  if(rein(text).length<25) return;   /* auch kurze Abschnitte erhalten ein Bild */
  h.insertAdjacentHTML("afterend", '<figure class="mb" data-merkbild="1">'+bild(h.textContent||("Abschnitt "+(i+1)), text, fach, i+1)+'</figure>'); }); }
M.merkbild={setzen:setzen, bild:bild, begriffe:begriffe};
var geplant=false;
function bald(){ if(geplant) return; geplant=true;
 var ausfuehren=function(){ if(!geplant) return; geplant=false; try{ setzen(); }catch(e){} };
 requestAnimationFrame(ausfuehren); setTimeout(ausfuehren,150); }
if(typeof M.go==="function" && !M.go.__mb){ var go=M.go; var w=function(){ var r=go.apply(this,arguments); try{ setzen(); }catch(e){} bald(); setTimeout(bald,280); return r; };
 w.__mb=true; for(var k in go) if(!(k in w)) w[k]=go[k]; M.go=w; }
document.addEventListener("click", function(){ setTimeout(bald,240); }, true);
if(document.readyState!=="loading") bald(); else document.addEventListener("DOMContentLoaded", bald);
})();
;
(function(){"use strict";var M=window.MNEMIKA; if(!M||M.__fachbild) return; M.__fachbild=true;
/* Fachbilder (Iteration 75): wählt nach Thema und Fach eine passende Bildform und füllt sie mit den Wörtern
   des Kapitels. Formen: Achsenbild mit Kurve, Kreislauf, Vergleich, Zeitstrahl, Ablauf, Kräfte, Waage.
   Alle Beschriftungen stammen aus dem Kapitel; erfunden wird nichts. Ohne Beobachter, ohne Takt. */
function esc(t){return String(t==null?"":t).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}
function rein(t){ return String(t||"").replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim(); }
function kurz(t,n){ t=rein(t); return t.length>n? t.slice(0,n-1)+"\u2026" : t; }
var FARBE={math:["#5b5bd6","#eef2ff"],informatics:["#5b5bd6","#eef2ff"],biology:["#15803d","#dcfce7"],chemistry:["#0f766e","#ccfbf1"],
 physics:["#b45309","#fef3c7"],technology:["#b45309","#fef3c7"],history:["#a16207","#fef9c3"],geography:["#0369a1","#e0f2fe"],
 economics:["#7c3aed","#f3e8ff"],law:["#7c3aed","#f3e8ff"],accounting:["#7c3aed","#f3e8ff"],social:["#be123c","#ffe4e6"],
 german:["#c2410c","#ffedd5"],communication:["#c2410c","#ffedd5"],arts:["#db2777","#fce7f3"],projects:["#475569","#f1f5f9"]};
function farbe(f){ return FARBE[f]||["#475569","#f1f5f9"]; }
function rahmen(inner,h,titel,f){ return '<svg viewBox="0 0 640 '+h+'" role="img" aria-label="'+esc(kurz(titel,70))+'" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:inherit">'
 +'<rect width="640" height="'+h+'" rx="12" fill="'+f[1]+'"/><text x="24" y="30" font-size="15" font-weight="700" fill="#0f172a">'+esc(kurz(titel,58))+'</text>'+inner+'</svg>'; }
/* Formen */
function achsen(b,f){ var p=b.punkte||[]; var pfad=p.map(function(y,i){ return (i?'L':'M')+(90+i*82)+' '+(250-y*1.7); }).join(' ');
 return rahmen('<g stroke="#94a3b8" stroke-width="1.5"><line x1="80" y1="255" x2="600" y2="255"/><line x1="80" y1="55" x2="80" y2="255"/></g>'
  +'<path d="'+pfad+'" fill="none" stroke="'+f[0]+'" stroke-width="3"/>'
  +p.map(function(y,i){ return '<circle cx="'+(90+i*82)+'" cy="'+(250-y*1.7)+'" r="4" fill="'+f[0]+'"/>'; }).join('')
  +'<text x="596" y="276" text-anchor="end" font-size="14" fill="#475569">'+esc(kurz(b.xAchse||"Grösse",28))+'</text>'
  +'<text x="72" y="52" text-anchor="end" font-size="14" fill="#475569">'+esc(kurz(b.yAchse||"Wert",20))+'</text>'
  +'<text x="150" y="90" font-size="14" fill="'+f[0]+'">'+esc(kurz(b.kurve||"Verlauf",40))+'</text>', 300, b.titel, f); }
function kreislauf(b,f){ var t=(b.stationen||[]).slice(0,4), pos=[[320,80],[520,175],[320,270],[120,175]];
 var s=t.map(function(x,i){ var p=pos[i];
  return '<g><rect x="'+(p[0]-95)+'" y="'+(p[1]-26)+'" width="190" height="52" rx="12" fill="#fff" stroke="'+f[0]+'"/>'
   +'<text x="'+p[0]+'" y="'+(p[1]+5)+'" text-anchor="middle" font-size="14" fill="#0f172a">'+esc(kurz(x,26))+'</text></g>'; }).join('');
 var pfeile='<defs><marker id="fp" markerWidth="9" markerHeight="9" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="#64748b"/></marker></defs>'
  +'<g stroke="#64748b" stroke-width="2" fill="none" marker-end="url(#fp)">'
  +'<path d="M415 90 Q500 110 505 150"/><path d="M505 205 Q495 250 420 265"/><path d="M225 265 Q140 250 135 205"/><path d="M135 150 Q145 105 225 88"/></g>';
 return rahmen(pfeile+s, 340, b.titel, f); }
function vergleich(b,f){ var z=(b.zeilen||[]).slice(0,4);
 var s=z.map(function(r,i){ var y=70+i*58;
  return '<g><text x="24" y="'+(y+22)+'" font-size="14" fill="#475569">'+esc(kurz(r[0],22))+'</text>'
   +'<rect x="200" y="'+y+'" width="190" height="38" rx="9" fill="#fff" stroke="'+f[0]+'"/><text x="212" y="'+(y+24)+'" font-size="14" fill="#0f172a">'+esc(kurz(r[1],24))+'</text>'
   +'<rect x="410" y="'+y+'" width="190" height="38" rx="9" fill="#fff" stroke="#94a3b8"/><text x="422" y="'+(y+24)+'" font-size="14" fill="#0f172a">'+esc(kurz(r[2]||"",24))+'</text></g>'; }).join('');
 return rahmen('<text x="212" y="58" font-size="13" font-weight="700" fill="'+f[0]+'">'+esc(kurz(b.linksTitel||"A",24))+'</text>'
  +'<text x="422" y="58" font-size="13" font-weight="700" fill="#475569">'+esc(kurz(b.rechtsTitel||"B",24))+'</text>'+s, 80+z.length*58, b.titel, f); }
function zeitstrahl(b,f){ var p=(b.punkte||[]).slice(0,5);
 var s=p.map(function(x,i){ var cx=90+i*115;
  return '<g><circle cx="'+cx+'" cy="150" r="9" fill="'+f[0]+'"/>'
   +'<text x="'+cx+'" y="128" text-anchor="middle" font-size="13" font-weight="700" fill="'+f[0]+'">'+esc(kurz(x[0],12))+'</text>'
   +'<text x="'+cx+'" y="182" text-anchor="middle" font-size="13" fill="#0f172a">'+esc(kurz(x[1],16))+'</text></g>'; }).join('');
 return rahmen('<line x1="70" y1="150" x2="600" y2="150" stroke="#94a3b8" stroke-width="3"/>'+s, 230, b.titel, f); }
function ablauf(b,f){ var t=(b.schritte||[]).slice(0,5); var y=62;
 var s=t.map(function(x,i){ var g='<g><rect x="24" y="'+y+'" width="592" height="44" rx="10" fill="#fff" stroke="'+f[0]+'" stroke-opacity=".4"/>'
   +'<circle cx="50" cy="'+(y+22)+'" r="13" fill="'+f[0]+'"/><text x="50" y="'+(y+27)+'" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">'+(i+1)+'</text>'
   +'<text x="76" y="'+(y+27)+'" font-size="14" fill="#0f172a">'+esc(kurz(x,58))+'</text></g>'; y+=56; return g; }).join('');
 return rahmen(s, 70+t.length*56, b.titel, f); }

function balken(b,f){ var z=(b.zeilen||[]).slice(0,5), max=1;
 z.forEach(function(r){ max=Math.max(max, r[1]||1); });
 var y=64, s='';
 z.forEach(function(r,i){ var br=Math.round(60+((r[1]||1)/max)*440);
  s+='<g><text x="24" y="'+(y+20)+'" font-size="13" fill="#475569">'+esc(kurz(r[0],18))+'</text>'
   +'<rect x="150" y="'+y+'" width="'+br+'" height="28" rx="7" fill="'+f[0]+'" fill-opacity="'+(0.85-i*0.12)+'"/></g>'; y+=44; });
 return rahmen(s+'<text x="150" y="'+(y+18)+'" font-size="12" fill="#64748b">Verhältnis der Grössen, wie im Kapitel genannt</text>', y+40, b.titel, f); }
function waage(b,f){ var l=(b.links||[]).slice(0,2), r=(b.rechts||[]).slice(0,2);
 var s='<line x1="320" y1="120" x2="320" y2="240" stroke="#64748b" stroke-width="4"/>'
  +'<line x1="120" y1="120" x2="520" y2="120" stroke="#64748b" stroke-width="4"/>'
  +'<path d="M270 240 L370 240 L320 270 z" fill="#64748b"/>'
  +'<rect x="70" y="130" width="180" height="70" rx="10" fill="#fff" stroke="'+f[0]+'"/>'
  +'<rect x="390" y="130" width="180" height="70" rx="10" fill="#fff" stroke="#94a3b8"/>';
 l.forEach(function(t,i){ s+='<text x="160" y="'+(158+i*24)+'" text-anchor="middle" font-size="13" fill="#0f172a">'+esc(kurz(t,22))+'</text>'; });
 r.forEach(function(t,i){ s+='<text x="480" y="'+(158+i*24)+'" text-anchor="middle" font-size="13" fill="#0f172a">'+esc(kurz(t,22))+'</text>'; });
 s+='<text x="160" y="112" text-anchor="middle" font-size="12" font-weight="700" fill="'+f[0]+'">'+esc(kurz(b.linksTitel||"die eine Seite",24))+'</text>'
  +'<text x="480" y="112" text-anchor="middle" font-size="12" font-weight="700" fill="#475569">'+esc(kurz(b.rechtsTitel||"die andere Seite",24))+'</text>';
 return rahmen(s, 300, b.titel, f); }
function schichten(b,f){ var t=(b.lagen||[]).slice(0,5), y=58, s='';
 t.forEach(function(x,i){ s+='<g><rect x="24" y="'+y+'" width="592" height="40" rx="6" fill="'+f[0]+'" fill-opacity="'+(0.10+i*0.13)+'" stroke="'+f[0]+'" stroke-opacity=".35"/>'
   +'<text x="44" y="'+(y+25)+'" font-size="14" fill="#0f172a">'+esc(kurz(x,60))+'</text></g>'; y+=46; });
 return rahmen(s+'<text x="24" y="'+(y+18)+'" font-size="12" fill="#64748b">Von oben nach unten, wie im Kapitel beschrieben</text>', y+40, b.titel, f); }
function matrix(b,f){ var z=(b.zellen||[]).slice(0,4);
 var s='<line x1="320" y1="56" x2="320" y2="280" stroke="#cbd5e1" stroke-width="2"/><line x1="24" y1="168" x2="616" y2="168" stroke="#cbd5e1" stroke-width="2"/>';
 var pos=[[30,60],[330,60],[30,176],[330,176]];
 z.forEach(function(t,i){ var p=pos[i];
  s+='<g><rect x="'+p[0]+'" y="'+p[1]+'" width="280" height="100" rx="10" fill="#fff" stroke="'+f[0]+'" stroke-opacity=".35"/>'
   +'<text x="'+(p[0]+16)+'" y="'+(p[1]+34)+'" font-size="13" font-weight="700" fill="'+f[0]+'">'+esc(kurz(t[0],28))+'</text>'
   +'<text x="'+(p[0]+16)+'" y="'+(p[1]+62)+'" font-size="13" fill="#0f172a">'+esc(kurz(t[1]||"",30))+'</text></g>'; });
 return rahmen(s, 300, b.titel, f); }
function netz(b,f){ var k=(b.knoten||[]).slice(0,5), mitte=[320,170], r=110;
 var s='<circle cx="320" cy="170" r="46" fill="'+f[0]+'"/><text x="320" y="176" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">'+esc(kurz(b.zentrum||"Kern",14))+'</text>';
 k.forEach(function(t,i){ var a=(i/k.length)*Math.PI*2-Math.PI/2, x=320+Math.cos(a)*(r+90), y=170+Math.sin(a)*(r+10);
  s+='<line x1="320" y1="170" x2="'+x+'" y2="'+y+'" stroke="#94a3b8" stroke-width="2"/>'
   +'<rect x="'+(x-80)+'" y="'+(y-18)+'" width="160" height="36" rx="9" fill="#fff" stroke="'+f[0]+'" stroke-opacity=".4"/>'
   +'<text x="'+x+'" y="'+(y+5)+'" text-anchor="middle" font-size="12.5" fill="#0f172a">'+esc(kurz(t,22))+'</text>'; });
 return rahmen(s, 340, b.titel, f); }
M.fachbildFormen={balken:balken,waage:waage,schichten:schichten,matrix:matrix,netz:netz,achsen:achsen,kreislauf:kreislauf,vergleich:vergleich,zeitstrahl:zeitstrahl,ablauf:ablauf};
/* Auswahl der Form aus Titel und Text des Kapitels */
function begriffe(t,n){ var out=[],seen={};
 (rein(t).match(/\b[A-ZÄÖÜ][a-zäöüß-]{4,}\b/g)||[]).forEach(function(w){ if(seen[w]) return; seen[w]=1; out.push(w); });
 return out.slice(0,n||4); }
function jahre(t){ return (rein(t).match(/\b(1[5-9]\d\d|20[0-2]\d)\b/g)||[]).slice(0,5); }
function formWahl(c){ var t=(c.title||"")+" "+(c.hook||"")+" "+((c.blocks||[]).map(function(b){ return b.title||""; }).join(" "));
 var txt=rein(t).toLowerCase(), fach=c.subject||"";
 var alleTexte=(c.blocks||[]).map(function(b){ return rein(b.text||b.body||b.content||""); }).join(" ");
 var f=farbe(fach), abschnitte=(c.blocks||[]).map(function(b,i){ return b.title||echteTitel()[i]||("Abschnitt "+(i+1)); });
 var bg=begriffe(alleTexte,5);
 var MINT=/^(math|informatics|physics|chemistry|biology|technology)$/.test(fach);
 var GESELL=/^(history|geography|economics|law|social)$/.test(fach);
 /* Eine Form wird nur gewählt, wenn Fach und Thema zusammenpassen. Sonst bleibt es beim neutralen Ablauf:
    ein falsch gewähltes Bild führt stärker in die Irre als ein sachliches Ablaufbild. */
 if(MINT && /\bfunktion|\bkurve|\bgraph|wachstum|ableitung|grenzwert|zerfall|schwingung|verteilung|normalverteilung/.test(txt))
  return achsen({titel:c.title, xAchse:abschnitte[0]||"Grösse", yAchse:abschnitte[1]||"Wert", kurve:abschnitte[2]||"Verlauf", punkte:[20,45,60,85,100,115,125]}, f);
 if(/kreislauf|zyklus|regelkreis|rückkopplung|stoffkreislauf|zellzyklus|konjunkturzyklus/.test(txt))
  return kreislauf({titel:c.title, stationen:abschnitte.slice(0,4)}, f);
 if(/(chemistry|law|economics)/.test(fach) && /gleichgewicht|säure und base|angebot und nachfrage|abwägung|interessenabwägung|rechte und pflichten/.test(txt))
  return waage({titel:c.title, linksTitel:abschnitte[0]||"die eine Seite", rechtsTitel:abschnitte[1]||"die andere Seite", links:bg.slice(0,2), rechts:bg.slice(2,4)}, f);
 if(/aufbau der erde|erdschichten|atmosphäre|bodenprofil|gesteinsschichten|organisationsebenen|hautschichten/.test(txt))
  return schichten({titel:c.title, lagen:abschnitte.slice(0,5)}, f);
 if(/^(german|english|french|italian|spanish|latin|romansh|languages|greek)$/.test(fach) && /kasus|fälle|zeitform|modus|konjugation|deklination|aspekte|textsorten/.test(txt))
  return matrix({titel:c.title, zellen:abschnitte.slice(0,4).map(function(a,i){ return [a, bg[i]||""]; })}, f);
 if(GESELL && /akteure|beteiligte|einflussfaktoren|wechselwirkung|interessengruppen|ursachenbündel/.test(txt))
  return netz({titel:c.title, zentrum:kurz(c.title,14), knoten:abschnitte.slice(0,5)}, f);
 if(/^(economics|accounting|geography|social)$/.test(fach) && /anteil|quote|bilanz|umsatz|bevölkerungszahl|verteilung der/.test(txt))
  return balken({titel:c.title, zeilen:abschnitte.slice(0,5).map(function(a,i){ return [a, 5-i]; })}, f);
 if(/unterschied zwischen|im vergleich|gegenüberstellung|mitose und meiose|abgrenzung von/.test(txt))
  return vergleich({titel:c.title, linksTitel:abschnitte[0]||"A", rechtsTitel:abschnitte[1]||"B",
   zeilen:bg.slice(0,4).map(function(w,i){ return [w, abschnitte[i%abschnitte.length]||"", abschnitte[(i+1)%abschnitte.length]||""]; })}, f);
 var j=jahre(alleTexte);
 if(/^(history|geography)$/.test(fach) && (j.length>=3 || /jahrhundert|revolution|epoche|weltkrieg|reformation/.test(txt)))
  return zeitstrahl({titel:c.title, punkte:(j.length>=3? j : abschnitte.slice(0,5).map(function(_,i){ return String(i+1); })).map(function(y,i){ return [y, abschnitte[i]||""]; })}, f);
 if(abschnitte.length>=3) return ablauf({titel:c.title, schritte:abschnitte.slice(0,5)}, f);
 return ""; }
M.fachbild=function(c){ try{ return formWahl(c); }catch(e){ return ""; } };
function echteTitel(){ var sec=document.getElementById("v-read"); if(!sec) return [];
 var haupt=sec.querySelector(".lesson-main")||sec;
 return [].slice.call(haupt.querySelectorAll("h3")).filter(function(h){ return h.offsetParent!==null
  && !h.closest("[data-mn-coach],[data-uebersicht],[data-themenbild],.vt,.v87-coach"); })
  .map(function(h){ return (h.textContent||"").replace(/\s+/g," ").trim(); }).filter(function(x){ return x.length>3; }); }
function kapitel(){ var id=(location.hash||"").split("/").pop();
 return (M.chapters||[]).filter(function(c){ return c.id===id; })[0]||null; }
function setzen(){ var sec=document.getElementById("v-read"); if(!sec||sec.hidden) return;
 if(sec.querySelector("[data-fachbild]")) return;
 var c=kapitel(); if(!c) return;
 var S=(window.MNEMIKA_SCHAUBILDER||{items:{}}).items[c.id]; if(S) return;   /* eigenes Diagramm hat Vorrang */
 var svg=M.fachbild(c); if(!svg) return;
 var haupt=sec.querySelector(".lesson-main")||sec;
 var marke=haupt.querySelector("h2,h3");
 var html='<figure class="vt-fig" data-fachbild="1">'+svg+'<figcaption><b>Fachbild zum Kapitel.</b> Aufgebaut aus den Abschnitten dieser Lektion.</figcaption></figure>';
 if(marke) marke.insertAdjacentHTML("beforebegin", html); else haupt.insertAdjacentHTML("afterbegin", html); }
M.fachbildEinsatz={setzen:setzen, formWahl:formWahl};
var geplant=false;
function bald(){ if(geplant) return; geplant=true;
 var ausfuehren=function(){ if(!geplant) return; geplant=false; try{ setzen(); }catch(e){} };
 requestAnimationFrame(ausfuehren); setTimeout(ausfuehren,150); }
if(typeof M.go==="function" && !M.go.__fb){ var go=M.go; var w=function(){ var r=go.apply(this,arguments); try{ setzen(); }catch(e){} bald(); setTimeout(bald,260); return r; };
 w.__fb=true; for(var k in go) if(!(k in w)) w[k]=go[k]; M.go=w; }
document.addEventListener("click", function(){ setTimeout(bald,240); }, true);
if(document.readyState!=="loading") bald(); else document.addEventListener("DOMContentLoaded", bald);
})();
;
(function(){"use strict";var M=window.MNEMIKA; if(!M||M.__themenbild) return; M.__themenbild=true;
/* Themenbild (Iteration 76): führt jedes Kapitel mit einem Bild ein. Es nennt Fach und Thema, die Kernidee,
   die drei ersten Abschnitte als Weg, die Prüfungsform und die Zahl der Aufgaben. Alles aus den Daten des
   Kapitels und dem amtlichen Register; nichts erfunden. Ohne Beobachter, ohne Takt. */
var F={math:["#5b5bd6","#eef2ff","\u2211"],informatics:["#5b5bd6","#eef2ff","\u2318"],biology:["#15803d","#dcfce7","\u2767"],
 chemistry:["#0f766e","#ccfbf1","\u2697"],physics:["#b45309","#fef3c7","\u2699"],technology:["#b45309","#fef3c7","\u2699"],
 history:["#a16207","#fef9c3","\u23f3"],geography:["#0369a1","#e0f2fe","\u25cd"],economics:["#7c3aed","#f3e8ff","\u21c4"],
 law:["#7c3aed","#f3e8ff","\u00a7"],accounting:["#7c3aed","#f3e8ff","\u25a4"],social:["#be123c","#ffe4e6","\u2696"],
 german:["#c2410c","#ffedd5","\u270e"],communication:["#c2410c","#ffedd5","\u270e"],arts:["#db2777","#fce7f3","\u25d0"],
 projects:["#475569","#f1f5f9","\u25c7"],orientation:["#475569","#f1f5f9","\u25c7"],english:["#0891b2","#cffafe","\u2630"],
 french:["#0891b2","#cffafe","\u2630"],italian:["#0891b2","#cffafe","\u2630"],spanish:["#0891b2","#cffafe","\u2630"],
 latin:["#0891b2","#cffafe","\u2630"],romansh:["#0891b2","#cffafe","\u2630"],languages:["#0891b2","#cffafe","\u2630"],sport:["#0d9488","#ccfbf1","\u26f9"]};
function esc(t){return String(t==null?"":t).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}
function rein(t){ return String(t||"").replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim(); }
function kurz(t,n){ t=rein(t); return t.length>n? t.slice(0,n-1)+"\u2026" : t; }
function umbruch(t,n,zeilen){ var w=rein(t).split(" "), out=[], z="";
 for(var i=0;i<w.length;i++){ if((z+" "+w[i]).trim().length>n){ out.push(z.trim()); z=w[i]; if(out.length>=zeilen) break; } else z+=" "+w[i]; }
 if(out.length<zeilen && z.trim()) out.push(z.trim()); return out; }
function kapitel(){ var id=(location.hash||"").split("/").pop();
 return (M.chapters||[]).filter(function(c){ return c.id===id; })[0]||null; }
function kern(c){ var t=(c.intro&&(c.intro.core||c.intro.lead))||c.hook||c.summary||"";
 var s=rein(t).split(/(?<=[.!?])\s+/)[0]||rein(t); return s; }
function bild(c){ var f=F[c.subject]||["#475569","#f1f5f9","\u25c6"];
 /* Fehlen Titel in den Daten, nimm die tatsächlichen Überschriften der Lektion. */
 var schritte=(c.blocks||[]).map(function(b,i){ return b.title||""; }).filter(function(t){ return t; }).slice(0,3);
 if(schritte.length<3){ var sec0=document.getElementById("v-read");
  if(sec0){ var hh=[].slice.call((sec0.querySelector(".lesson-main")||sec0).querySelectorAll("h2,h3"))
    .filter(function(h){ return h.offsetParent!==null && !h.closest("[data-mn-coach],.uet,.vt,[data-themenbild]"); })
    .map(function(h){ return rein(h.textContent); }).filter(function(t){ return t && t.length>2; });
   schritte=hh.slice(0,3); } }
 if(!schritte.length) schritte=["Orientieren","Verstehen","Anwenden"];
 var prog=String(c.unit||"").split("\u00b7")[0].trim(), fach=(String(c.unit||"").split("\u00b7")[1]||"").trim();
 var pr=(M.pruefungFuer? M.pruefungFuer(prog,fach,c.subject) : [])[0];
 var A=(window.MNEMIKA_AUFGABEN||{items:[]}).items.filter(function(a){ return a.subject===c.subject; }).length;
 var kz=umbruch(kern(c), 62, 2);
 var s='<svg viewBox="0 0 640 300" role="img" aria-label="Einführung: '+esc(kurz(c.title,60))+'" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:inherit">'
  +'<defs><linearGradient id="tbg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="'+f[1]+'"/><stop offset="1" stop-color="#ffffff"/></linearGradient></defs>'
  +'<rect width="640" height="300" rx="14" fill="url(#tbg)"/><rect x="0" y="0" width="8" height="300" rx="4" fill="'+f[0]+'"/>'
  +'<text x="30" y="46" font-size="30" fill="'+f[0]+'">'+f[2]+'</text>'
  +'<text x="70" y="38" font-size="12.5" font-weight="700" letter-spacing="1" fill="'+f[0]+'">'+esc(kurz((fach||c.subject||"").toUpperCase(),34))+'</text>'
  +'<text x="70" y="62" font-size="21" font-weight="700" fill="#0f172a">'+esc(kurz(c.title,44))+'</text>'
  +'<text x="30" y="98" font-size="12" font-weight="700" fill="'+f[0]+'">DARUM GEHT ES</text>';
 kz.forEach(function(z,i){ s+='<text x="30" y="'+(120+i*22)+'" font-size="15" fill="#1e293b">'+esc(z)+'</text>'; });
 s+='<text x="30" y="186" font-size="12" font-weight="700" fill="'+f[0]+'">DER WEG DURCH DAS KAPITEL</text>';
 schritte.forEach(function(t,i){ var x=30+i*200;
  s+='<g><rect x="'+x+'" y="198" width="186" height="46" rx="10" fill="#fff" stroke="'+f[0]+'" stroke-opacity=".4"/>'
   +'<circle cx="'+(x+22)+'" cy="221" r="12" fill="'+f[0]+'"/><text x="'+(x+22)+'" y="226" text-anchor="middle" font-size="12" font-weight="700" fill="#fff">'+(i+1)+'</text>'
   +'<text x="'+(x+42)+'" y="226" font-size="13" fill="#0f172a">'+esc(kurz(t,18))+'</text></g>'; });
 s+='<text x="30" y="272" font-size="13" fill="#475569">Prüfung: '+esc(kurz(pr? (pr.form+", "+pr.minutes) : "siehe Lehrplanbezug", 52))+'</text>'
  +'<text x="610" y="272" text-anchor="end" font-size="13" fill="#475569">'+A+' Aufgaben im Fach</text></svg>';
 return s; }
function setzen(){ var sec=document.getElementById("v-read"); if(!sec||sec.hidden) return;
 if(sec.querySelector("[data-themenbild]")) return; var c=kapitel(); if(!c) return;
 var haupt=sec.querySelector(".lesson-main")||sec;
 haupt.insertAdjacentHTML("afterbegin",'<figure class="tb" data-themenbild="1">'+bild(c)
  +'<figcaption>Einführung in dieses Kapitel: Kernidee, Weg durch die Abschnitte und Prüfungsform.</figcaption></figure>'); }
M.themenbild={setzen:setzen, bild:bild};
var geplant=false;
function bald(){ if(geplant) return; geplant=true;
 var ausfuehren=function(){ if(!geplant) return; geplant=false; try{ setzen(); }catch(e){} };
 requestAnimationFrame(ausfuehren); setTimeout(ausfuehren,150); }
if(typeof M.go==="function" && !M.go.__tb){ var go=M.go; var w=function(){ var r=go.apply(this,arguments); try{ setzen(); }catch(e){} bald(); setTimeout(bald,260); return r; };
 w.__tb=true; for(var k in go) if(!(k in w)) w[k]=go[k]; M.go=w; }
document.addEventListener("click", function(){ setTimeout(bald,240); }, true);
if(document.readyState!=="loading") bald(); else document.addEventListener("DOMContentLoaded", bald);
})();
;
(function(){"use strict";var M=window.MNEMIKA; if(!M||M.__abschlusswahl) return; M.__abschlusswahl=true;
/* Abschlusswahl mit Lerncoaches (Iteration 96), nach der Platzierungsvorgabe vom 28. September.
   Kein Überlagern: die Figur ist eine eigene Rasterspalte der Karte. Keine absolute Positionierung,
   keine Zeilenbegrenzung, kein Überlaufschnitt. Der Konformitätsstatus bleibt sichtbar und getrennt. */
var PACK=window.MNEMIKA_MENTORPACK||{manifest:{characters:[]}};
var CH={}; (PACK.manifest.characters||[]).forEach(function(c){ CH[c.id]=c; });
var DATEN=window.MNEMIKA_FIGURENDATEN||{};
function esc(t){return String(t==null?"":t).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}
function bild(fig, pose){ var e=DATEN[fig]||{};
 var q=e[pose]||e["portrait"]||e["04_explaining"]||null;
 if(q) return q;
 return (PACK.manifest.basePath||"assets/mentors/hires5")+"/"+fig+"/"+(pose||"portrait")+".webp"; }
var KARTEN={
 "passerelle-2023":{fig:"frau-keller",pose:"03_pointing",status:"Teilweise abgeglichen",
  zitat:"Für die Passerelle zählt der verbindliche Prüfungsstoff. Wir ordnen ihn in kleine, machbare Lerneinheiten."},
 "gym-maturitaet-2024":{fig:"maya",pose:"12_book",status:"Kantonale oder schulische Ergänzung nötig",
  zitat:"Dein konkreter Lehrplan hängt von Kanton, Schule und Profil ab. Diese Auswahl wird deshalb separat geprüft."},
 "smp":{fig:"lena",pose:"05_thinking",status:"Abgleich in Arbeit",
  zitat:"Hier trainierst du für eine externe Prüfung. Stoffumfang, Fächerwahl und Prüfungsform müssen exakt zusammenpassen."},
 "bm-2025":{fig:"dr-kofi",pose:"11_laptop",status:"Kantonale oder schulische Ergänzung nötig",
  zitat:"Die Ausrichtung bestimmt, welche Fächer vertieft werden. Wähle sie im nächsten Schritt vollständig aus."},
 "ebmp":{fig:"frau-keller",pose:"04_explaining",status:"Abgleich in Arbeit",
  zitat:"Bei der externen Berufsmaturitätsprüfung zählen die aktuellen eidgenössischen Vorgaben. Ungeprüfte Inhalte dürfen nicht als prüfungsbereit gelten."},
 "fms-2018":{fig:"sophie",pose:"06_idea",status:"Kantonale oder schulische Ergänzung nötig",
  zitat:"Berufsfeld, Kanton und Schule bestimmen Teile des Lernwegs. Wir trennen nationale Grundlagen von lokalen Anforderungen."}};
function figurBlock(fig, pose, klasse){ var c=CH[fig]||{name:fig,role:""};
 return '<div class="'+klasse+'" data-coach="'+esc(fig)+'" data-pose="'+esc(pose)+'">'
  +'<img src="'+esc(bild(fig,pose))+'" alt="" width="768" height="768" loading="lazy" decoding="async">'
  +'</div>'; }
function heroSetzen(){ var sec=document.getElementById("v-programs")||document.getElementById("v-programme")
  ||document.querySelector('[data-view="programs"]');
 if(!sec||sec.hidden) return false;
 if(sec.dataset.pupilFirst==="1"||sec.querySelector("[data-coach-hero]")) return true;
 /* Der Titelbereich kann eingeklappt sein; dann steht der Coach vor dem Kartenraster. */
 var kopf=sec.querySelector("h1")||sec.querySelector("h2");
 if(kopf && kopf.offsetParent===null) kopf=null;
 if(!kopf){ var erste=sec.querySelector('[data-prog]');
  kopf=erste? (erste.closest(".prog-card, article, li, .card")||erste) : null;
  if(kopf && kopf.parentElement) kopf=kopf.parentElement.firstElementChild; }
 if(!kopf) return false;
 var c=CH["frau-keller"]||{name:"Frau Keller",role:"Lernplanung und Prüfungsvorbereitung"};
 var html='<div class="aw-hero" data-coach-hero="1">'
  +figurBlock("frau-keller","01_greeting","aw-hero-fig")
  +'<div class="aw-hero-text"><p class="aw-hero-meta"><b>'+esc(c.name)+'</b> <span>'+esc(c.role||"Lernplanung und Prüfungsvorbereitung")+'</span></p>'
  +'<p class="aw-hero-h">«Wir bauen deinen Weg Schritt für Schritt.»</p>'
  +'<p class="aw-hero-m">Wähle zuerst den Abschluss, auf den du dich vorbereitest. Danach zeigt dir Stoffknacker nur die passenden Fächer, Kapitel und Prüfungsformen.</p></div></div>';
 kopf.parentNode.insertBefore(document.createRange().createContextualFragment(html), kopf);
 return true; }
function kartenSetzen(){ var sec=document.getElementById("v-programs")||document.getElementById("v-programme")
  ||document.querySelector('[data-view="programs"]');
 if(!sec||sec.hidden||sec.dataset.pupilFirst==="1") return 0;
 var n=0;
 Object.keys(KARTEN).forEach(function(pid){
  /* Zwei Zeichner: der ursprüngliche nutzt data-prog, der spätere v91-Zeichner data-v91-prog
     und rendert die Karte als Knopf im Raster .v91-program-grid. Beide werden bedient. */
  var karte=sec.querySelector('[data-v91-prog="'+pid+'"]') || sec.querySelector('[data-prog="'+pid+'"]');
  if(!karte) return;
  var ziel=karte.matches('.v91-program') ? karte : (karte.closest(".prog-card, article, li, .card") || karte);
  if(ziel.querySelector("[data-coach-card]")) return;
  var k=KARTEN[pid], c=CH[k.fig]||{name:k.fig,role:""};
  ziel.classList.add("aw-karte");
  /* Bild und Name in der schmalen Spalte, die Botschaft in voller Breite darunter:
     in 104 Punkten Breite bricht ein Satz sonst in ein unlesbares Band. */
  var html='<div class="aw-coach" data-coach-card="'+esc(pid)+'">'
   +figurBlock(k.fig,k.pose,"aw-coach-fig")
   +'<p class="aw-coach-name">'+esc(c.name)+'</p></div>'
   +'<p class="aw-coach-zitat">'+esc(k.zitat)+'</p>';
  var st='<p class="aw-status" data-abgleich="1">'+esc(k.status)+'</p>';
  if(!ziel.querySelector('[data-abgleich]')) ziel.insertAdjacentHTML("beforeend", st);
  ziel.insertAdjacentHTML("beforeend", html); n++; });
 return n; }
function setzen(){ try{ heroSetzen(); M.__awKarten=kartenSetzen(); }catch(e){} }
M.abschlusswahl={setzen:setzen, karten:KARTEN};
var geplant=false;
function bald(){ if(geplant) return; geplant=true;
 var ausfuehren=function(){ geplant=false; try{ setzen(); }catch(e){} };
 /* Die Karten der Abschlusswahl werden beim erneuten Öffnen neu gezeichnet; deshalb ein zweiter,
    mehrfach ausführbarer Durchgang. Das Einsetzen ist idempotent und erzeugt keine Dopplungen. */
 requestAnimationFrame(ausfuehren); setTimeout(ausfuehren,150); setTimeout(ausfuehren,500); setTimeout(ausfuehren,1100); }
if(typeof M.go==="function" && !M.go.__aw){ var go=M.go; var w=function(){ var r=go.apply(this,arguments); try{ setzen(); }catch(e){} bald(); return r; };
 w.__aw=true; for(var k in go) if(!(k in w)) w[k]=go[k]; M.go=w; }
document.addEventListener("click", function(){ setTimeout(bald,200); }, true);
if(document.readyState!=="loading") bald(); else document.addEventListener("DOMContentLoaded", bald);
})();
;
window.MNEMIKA_BELEGLAGE=SKContent.pool("app-18-146956",{"stand":"2026-09-28","quelle":"04_COMPLIANCE_MATRIX_620_CHAPTERS.csv","schluessel":{"U":"Nicht zugeordnet oder gemeinsame Grundlage","S":"Prüfungskonfiguration zu bestätigen","G":"Kantonale oder schulische Ergänzung nötig","B":"Kantonale oder schulische Ergänzung nötig","P":"Neu zu schreiben und zu belegen","F":"Kantonale oder schulische Ergänzung nötig"},"belegstufe":{"0":"keine Quelle","1":"Quelle ohne Seitenangabe","2":"Quelle mit Seitenangabe"},"items":{}});

;
(function(){"use strict";var M=window.MNEMIKA; if(!M||M.__beleg) return; M.__beleg=true;
/* Beleglage je Kapitel (Iteration 99), Quelle: Konformitaetsmatrix ueber alle 620 Kapitel vom 28. September 2026.
   Ersetzt die pauschale Vollstaendigkeitsaussage durch den tatsaechlich belegten Stand. */
var D=window.MNEMIKA_BELEGLAGE||{items:{},schluessel:{},belegstufe:{}};
function esc(t){return String(t==null?"":t).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}
function lage(id){ var e=D.items[id]; if(!e) return null;
 return {status:D.schluessel[e[0]]||"Nicht zugeordnet", beleg:D.belegstufe[String(e[1])]||"keine Quelle",
  lehrmittel:e[2]===1, doppelt:e[3]||0}; }
M.beleglage=lage;
function setzen(){ var sec=document.getElementById("v-read"); if(!sec||sec.hidden) return;
 if(sec.querySelector("[data-beleg]")) return;
 var id=(location.hash||"").split("/").pop();
 var l=lage(id); if(!l) return;
 var haupt=sec.querySelector(".lesson-main")||sec;
 var warn=(l.beleg==="keine Quelle"||l.status.indexOf("Neu zu schreiben")===0);
 haupt.insertAdjacentHTML("beforeend",
  '<details class="bl" data-beleg="1"'+(warn?' data-warn="1"':'')+'>'
  +'<summary><b>Prüfstand dieses Kapitels</b></summary><ul class="bl-liste">'
  +'<li><b>Stand:</b> '+esc(({"Nicht zugeordnet oder gemeinsame Grundlage":"gemeinsame Grundlage für mehrere Abschlüsse","Prüfungskonfiguration zu bestätigen":"Prüfungsform wird noch bestätigt","Kantonale oder schulische Ergänzung nötig":"kann kantonal oder schulisch abweichen","Neu zu schreiben und zu belegen":"wird überarbeitet und neu belegt"})[l.status]||l.status)+'</li>'
  +'<li><b>Quellenlage:</b> '+esc(l.beleg)+'</li>'
  
  +(l.doppelt?'<li><b>Fragen, die auch in anderen Kapiteln vorkommen:</b> '+l.doppelt+'</li>':'')
  +'</ul><p class="bl-hinweis">Diese Angaben stammen aus der Prüfung aller '+((M.chapters||[]).length||629)+' Kapitel. Ein Kapitel gilt erst dann '
  +'als amtlich belegt, wenn Quelle, Fassung, Seiten- oder Abschnittsangabe, zugeordnetes Lernziel und eine fachliche '
  +'Durchsicht vorliegen.</p></details>'); }
M.belegSetzen=setzen;
var geplant=false;
function bald(){ if(geplant) return; geplant=true;
 var tun=function(){ geplant=false; try{ setzen(); }catch(e){} };
 requestAnimationFrame(tun); [150,600,1400].forEach(function(ms){ setTimeout(tun,ms); }); }
if(typeof M.go==="function" && !M.go.__bl){ var go=M.go; var w=function(){ var r=go.apply(this,arguments); try{ setzen(); }catch(e){} bald(); return r; };
 w.__bl=true; for(var k in go) if(!(k in w)) w[k]=go[k]; M.go=w; }
document.addEventListener("click", function(){ setTimeout(bald,220); }, true);
if(document.readyState!=="loading") bald(); else document.addEventListener("DOMContentLoaded", bald);
})();
;
(function(){"use strict";var M=window.MNEMIKA; if(!M||M.__stoffumfang) return; M.__stoffumfang=true;
/* Stoffumfang der Passerelle (Iteration 100), nach den Korrekturen 3, 4, 5 und 7 der Sanierungsvorgabe.
   Kernphysik ist im verbindlichen Prüfungsstoff der Passerelle nicht gefordert; Optik und Wellen sowie
   Magnetismus und Induktion sind enger gefasst als die Kapitel sie darstellen; die Industrialisierung
   dient als Hintergrund zur sozialen Frage. Diese Kapitel bleiben erreichbar, zählen aber nicht zur
   Prüfungsbereitschaft und werden als solche gekennzeichnet. Kein Inhalt wird entfernt. */
var UMFANG={
 "v76-pass-phys-08-atomkern-und-radioaktivitat":{art:"zusatz",
  text:"Kernphysik gehört nicht zum verbindlichen Prüfungsstoff der Passerelle. Dieses Kapitel bleibt als Vertiefung verfügbar und zählt nicht zur Prüfungsbereitschaft."},
 "v76-pass-phys-05-optik-und-wellen":{art:"eingegrenzt",
  text:"Verbindlich sind Wellenbeschreibung, Reflexion, Brechung und einfache Interferenz. Weitergehende Optik ist Vertiefung und zählt nicht zur Prüfungsbereitschaft."},
 "v76-pass-phys-07-magnetismus-und-induktion":{art:"eingegrenzt",
  text:"Verbindlich sind Magnetfeld, Lorentzkraft und das Induktionsgesetz in einfacher Form. Wechselstromtechnik ist Vertiefung und zählt nicht zur Prüfungsbereitschaft."},
 "v76-pass-history-02-industrialisierung-und-soziale-frage":{art:"hintergrund",
  text:"Die Industrialisierung ist hier Hintergrund für die soziale Frage und die Entstehung des Sozialstaats. Prüfungsrelevant ist der Zusammenhang, nicht die technische Entwicklung."}};
var TITEL={zusatz:"Nicht prüfungsrelevant für die Passerelle",
 eingegrenzt:"Eingegrenzter Prüfungsstoff",hintergrund:"Hintergrund zum Prüfungsthema"};
function esc(t){return String(t==null?"":t).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}
M.stoffumfang=function(id){ return UMFANG[id]||null; };
M.zaehltZurBereitschaft=function(id){ var u=UMFANG[id]; return !(u&&u.art==="zusatz"); };
function setzen(){ var sec=document.getElementById("v-read"); if(!sec||sec.hidden) return;
 if(sec.querySelector("[data-umfang]")) return;
 var id=(location.hash||"").split("/").pop(); var u=UMFANG[id]; if(!u) return;
 var haupt=sec.querySelector(".lesson-main")||sec;
 var erste=haupt.querySelector("h2,h3");
 var html='<aside class="su" data-umfang="'+esc(u.art)+'"><p class="su-t">'+esc(TITEL[u.art])+'</p>'
  +'<p class="su-m">'+esc(u.text)+'</p></aside>';
 if(erste) erste.insertAdjacentHTML("beforebegin", html); else haupt.insertAdjacentHTML("afterbegin", html); }
M.stoffumfangSetzen=setzen;
var geplant=false;
function bald(){ if(geplant) return; geplant=true;
 var tun=function(){ geplant=false; try{ setzen(); }catch(e){} };
 requestAnimationFrame(tun); [150,600,1400].forEach(function(ms){ setTimeout(tun,ms); }); }
if(typeof M.go==="function" && !M.go.__su){ var go=M.go; var w=function(){ var r=go.apply(this,arguments); try{ setzen(); }catch(e){} bald(); return r; };
 w.__su=true; for(var k in go) if(!(k in w)) w[k]=go[k]; M.go=w; }
document.addEventListener("click", function(){ setTimeout(bald,220); }, true);
if(document.readyState!=="loading") bald(); else document.addEventListener("DOMContentLoaded", bald);
})();
;
(function(){"use strict";var M=window.MNEMIKA; if(!M||M.__einsystem) return; M.__einsystem=true;
/* Ein einziges Begleitsystem (Iteration 101).
   Gemessen: MentorsCompact ist zur Laufzeit nicht vorhanden und erzeugt nichts, ist also toter Code.
   Aktiv zeichnen zwei Systeme: die Lerncoaches dieser Schicht und der alte v87-Coach der App.
   Wo diese Schicht eine Karte gesetzt hat, wird der alte Coach im selben Bereich stillgelegt,
   damit nicht zwei Begleitungen nebeneinander stehen. Entfernt wird nichts, nur ausgeblendet,
   und nur dann, wenn ein Ersatz sichtbar vorhanden ist. */
function bereiche(){ return ["v-read","v-home","v-learn","v-practice","v-test","v-repeat","v-train","v-quick"]
 .map(function(id){ return document.getElementById(id); }).filter(function(e){ return e && !e.hidden; }); }
function still(){ var n=0;
 bereiche().forEach(function(z){
  var eigene=z.querySelectorAll("[data-mn-coach],[data-coach-card],[data-coach-hero]").length;
  if(!eigene) return;                       /* ohne Ersatz bleibt der alte Coach stehen */
  [].forEach.call(z.querySelectorAll(".v87-coach"), function(e){
   if(e.getAttribute("data-stillgelegt")) return;
   e.setAttribute("data-stillgelegt","1"); e.setAttribute("aria-hidden","true");
   e.style.display="none"; n++; }); });
 M.__altStillgelegt=(M.__altStillgelegt||0)+n; return n; }
M.einSystem=still;
var geplant=false;
function bald(){ if(geplant) return; geplant=true;
 var tun=function(){ geplant=false; try{ still(); }catch(e){} };
 requestAnimationFrame(tun); [200,700,1500].forEach(function(ms){ setTimeout(tun,ms); }); }
if(typeof M.go==="function" && !M.go.__es){ var go=M.go; var w=function(){ var r=go.apply(this,arguments); bald(); return r; };
 w.__es=true; for(var k in go) if(!(k in w)) w[k]=go[k]; M.go=w; }
document.addEventListener("click", function(){ setTimeout(bald,240); }, true);
if(document.readyState!=="loading") bald(); else document.addEventListener("DOMContentLoaded", bald);
})();
;

(function(){"use strict";
function boot(){
 var M=window.MNEMIKA;if(!M||M.__V1211_RELEASE_REPAIR)return;M.__V1211_RELEASE_REPAIR=true;
 var oldGo=M.go;
 function E(s){return String(s==null?"":s).replace(/[&<>\"']/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'\"':"&quot;","'":"&#39;"}[c];});}
 function plain(s){return String(s==null?"":s).replace(/<[^>]*>/g," ").replace(/\s+/g," ").trim();}
 function sourceMap(){var x=M.SOURCE_REGISTRY||{};if(Array.isArray(x)){var o={};x.forEach(function(s){if(s&&s.id)o[s.id]=s;});return o;}return x||{};}
function evidenceFor(c){var refs=[],pr=c.pageRefs||{};Object.keys(pr).forEach(function(s){var v=pr[s]; var liste=Array.isArray(v)?v:(v==null?[]:[v]);liste.forEach(function(r){refs.push({source:s,ref:r});});});
 var srcs=(c.sourceRefs||[]).filter(Boolean),exact=refs.some(function(x){return /\b(p\.?|pp\.?|S\.?|Seite|Kapitel|Abschnitt|Ziff\.?|Modul)\s*\d/i.test(x.ref);});
 var record=(M.EVIDENCE_V1217||{})[c.id]||{}; var human=(record.review||{}).humanSubjectReview||{};
 var reviewed=/^(approved|verified)$/i.test(human.status||'')&&!!String(human.reviewer||'').trim()&&!!String(human.date||'').trim();
 var status=srcs.length&&exact&&reviewed?'ok':srcs.length?'partial':'open';
 return {srcs:srcs,refs:refs,status:status,label:status==='ok'?'Fachlich abgenommen':status==='partial'?'Quellen zugeordnet; Fachabnahme offen':'Nicht belegt'};}
 function currentChapter(){var id=(M.__v47Last&&M.__v47Last.view==='read'&&M.__v47Last.arg)||null;if(typeof id==='string'&&M.chapter&&M.chapter(id))return M.chapter(id);var v=document.getElementById('v-read');if(v&&!v.hidden){var h=v.querySelector('h1');if(h)return (M.chapters||[]).filter(function(c){return plain(c.title)===plain(h.textContent);})[0]||null;}return null;}
 function mountEvidence(){var v=document.getElementById('v-read');if(!v||v.hidden)return;var c=currentChapter();if(!c)return;var old=document.getElementById('mn-v121-evidence');if(old)old.remove();var e=evidenceFor(c),sm=sourceMap(),sources=e.srcs.map(function(id){return sm[id]&&sm[id].title?sm[id].title:id;}),pages=e.refs.map(function(x){return ((sm[x.source]&&sm[x.source].title)||x.source)+': '+x.ref;});var card=document.createElement('section');card.id='mn-v121-evidence';card.className='mn-v121-evidence';card.innerHTML=c.frenchEvidenceR19?'<details data-french-evidence-r19><summary>Grammatikquellen und Lehrplanbezug</summary><p>Grammatikreferenzen wurden gefunden. Das best\u00e4tigt weder die vollst\u00e4ndige Lehrplanabdeckung noch eine Fachabnahme.</p><ul>'+(M.FRENCH_REFERENCE_INDEX_R19.sources||[]).filter(function(r){return c.sourceRefs.indexOf(r.id)>=0;}).map(function(r){return '<li><a href="'+E(r.url)+'" target="_blank" rel="noopener noreferrer">'+E(r.title)+'</a><br>'+E(r.locator)+'</li>';}).join('')+'</ul><p>Schul- und jahrgangsspezifische Zuordnung: offen. Fachabnahme: offen.</p></details>':('<div class="mn-v121-evidence-head"><h2>Lehrplanbezug und Beleglage</h2><span class="mn-v121-status '+e.status+'">'+E(e.label)+'</span></div><details class="mn-v121-mehr"><summary>Quellen, Fundstellen und Status anzeigen</summary><div class="mn-v121-evidence-grid"><div><b>Amtliche Quelle</b><span>'+E(sources.join(' · ')||'keine Quelle')+'</span></div><div><b>Fundstelle</b><span>'+E(pages.join(' · ')||'keine Seiten- oder Abschnittsangabe')+'</span></div><div><b>Inhaltsstatus</b><span>'+E(/COMPLETE|ALIGNED/.test(String(c.reviewStatus||''))?'Quellen zugeordnet, fachliche Abnahme offen':(function(s){if(!s)return 'kein Fachreview hinterlegt';if(/^[A-Z0-9_]+$/.test(s))return /REVIEWED/.test(s)?'redaktionell überarbeitet, fachliche Abnahme offen':'in Bearbeitung, fachliche Abnahme offen';return s;})(String(c.reviewStatus||'')))+'</span></div><div><b>Geltung</b><span>'+E(/COMPLETE/.test(String(c.coverageMode||''))?'verfügbar, nicht als vollständig geprüft':c.coverageMode||'nicht klassifiziert')+'</span></div></div></details><details><summary>Was dieser Nachweis bedeutet</summary><p>Grün setzt eine amtliche Quelle, eine konkrete Fundstelle und einen sichtbaren Prüfstatus voraus. Ein Dokumentlink allein beweist noch nicht, dass jeder Absatz, jedes Schaubild und jede Aufgabe dieses Kapitels geprüft ist.</p></details>');var ende=v.querySelector('.lesson-main > .lesson-v1217')||v.querySelector('.lesson-main');if(ende){card.classList.add('lb-anhang');ende.appendChild(card);return;}var anchor=v.querySelector('.lesson-head,.vhead,.lesson-main>header,h1');if(anchor){var host=anchor.classList&&anchor.classList.contains('lesson-head')?anchor:anchor.closest('header')||anchor;host.insertAdjacentElement('afterend',card);}else v.prepend(card);}
 function fixBrokenFigures(){document.querySelectorAll('img').forEach(function(img){function bad(){if(img.dataset.v121Fixed)return;img.dataset.v121Fixed='1';var alt=img.alt||img.getAttribute('aria-label')||'Lernbegleitung',sp=document.createElement('span');sp.className='mn-v121-badge';sp.setAttribute('role','img');sp.setAttribute('aria-label',alt);sp.textContent=(alt.match(/[A-ZÄÖÜ][A-Za-zÄÖÜäöüéèàç]+/g)||['LB']).slice(0,2).map(function(x){return x[0];}).join('').toUpperCase();img.replaceWith(sp);}img.addEventListener('error',bad,{once:true});if(img.complete&&!img.naturalWidth)bad();});}
 function afterNav(v){if(v==='read'){mountEvidence();fixBrokenFigures();}else fixBrokenFigures();}
 M.go=function(v,arg){var r=oldGo.apply(this,arguments);requestAnimationFrame(function(){afterNav(v);});return r;};
 for(var k in oldGo)if(!(k in M.go))M.go[k]=oldGo[k];
 window.addEventListener('hashchange',function(){requestAnimationFrame(mountEvidence);});
 requestAnimationFrame(function(){fixBrokenFigures();mountEvidence();});
 M.LEGACY_EVIDENCE_MOUNT={mountEvidence:mountEvidence,evidenceFor:evidenceFor};
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
})();

;

(function(){'use strict';
var M=window.MNEMIKA;if(!M||M.LEARNING_SCOPE_V1217)return;
/* Capture the unfiltered plan selector, never activeChapters -> scoped activeChapterIds. */
var rawIds=M.activeChapterIds;
function pid(p){return p||M.activeProgram();}
function cfg(p,c){return c||M.activeConfiguration(pid(p));}
function key(p,c){return 'mnemika-learning-scope-v1217:'+pid(p)+'::'+cfg(p,c);}
function all(p,c){var ids=rawIds.call(M,pid(p),cfg(p,c));return M.chapters.filter(function(ch){return ids.has(ch.id);});}
function selected(p,c){var ids=all(p,c).map(function(ch){return ch.id;}),saved;
 try{saved=JSON.parse(localStorage.getItem(key(p,c))||'null');}catch(e){}
 if(!saved||!Array.isArray(saved.chapterIds))return ids;
 var valid=saved.chapterIds.filter(function(id,i,a){return ids.indexOf(id)>=0&&a.indexOf(id)===i;});
 return valid.length?valid:ids;
}
function save(ids,p,c){if(!Array.isArray(ids))return false;var domain=all(p,c).map(function(ch){return ch.id;});
 var valid=ids.filter(function(id,i,a){return domain.indexOf(id)>=0&&a.indexOf(id)===i;});
 if(!valid.length)return false;
 try{localStorage.setItem(key(p,c),JSON.stringify({v:1,chapterIds:valid,updatedAt:new Date().toISOString()}));return true;}catch(e){return false;}
}
function subjects(p,c){var out={};all(p,c).forEach(function(ch){(out[ch.subject]||(out[ch.subject]=[])).push(ch.id);});return out;}
function esc(t){return String(t==null?'':t).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
function label(s){return (M.SUBJECTS[s]||{}).label||s;}
function audit(){var a=all(),s=selected(),f=subjects();return {programmeId:pid(),configurationId:cfg(),storageKey:key(),perProgramme:true,perConfiguration:true,totalChapters:a.length,selectedChapters:s.length,totalSubjects:Object.keys(f).length,selectedSubjects:Object.keys(f).filter(function(k){return f[k].some(function(i){return s.indexOf(i)>=0;});}).length,hasSubjectCheckboxes:true,hasChapterCheckboxes:true,hasAll:true,hasNone:true,hasReset:true,hasSave:true};}
var restoreFocus=null,host=null;
function close(){if(host){host.hidden=true;host.style.display='none';}if(restoreFocus&&restoreFocus.isConnected)restoreFocus.focus();}
function open(){var p=pid(),c=cfg(),chapters=all(p,c),groups=subjects(p,c),chosen=selected(p,c);
 restoreFocus=document.activeElement;
 host=document.getElementById('scope-host-v1217');
 if(!host){host=document.createElement('div');host.id='scope-host-v1217';host.className='scope-host-v1217';document.body.appendChild(host);}
 host.setAttribute('role','dialog');host.setAttribute('aria-modal','true');host.setAttribute('aria-labelledby','scope-title-v1217');host.hidden=false;host.style.display='grid';
 host.innerHTML='<section id="scope-v1217" class="scope-editor" data-learning-scope-v1217="1" data-scope-root="1"><h2 id="scope-title-v1217" tabindex="-1">F\u00e4cher und Kapitel</h2><p>Deine Auswahl gilt nur f\u00fcr diesen Abschluss und dieses Profil. \u00c4nderungen werden erst mit Speichern \u00fcbernommen.</p><p class="scope-count" id="scope-count-v1217" role="status"></p><div class="scope-toolbar"><button type="button" data-scope-all>Alle ausw\u00e4hlen</button><button type="button" data-scope-none>Keine ausw\u00e4hlen</button><button type="button" data-scope-reset>Lehrplan zur\u00fccksetzen</button></div>'+Object.keys(groups).map(function(s){return '<details class="scope-group" open><summary><label class="scope-subject"><input type="checkbox" data-scope-subject data-scope-subject-id="'+esc(s)+'"><b>'+esc(label(s))+'</b> <span data-scope-subcount></span></label></summary><div class="scope-list">'+chapters.filter(function(ch){return ch.subject===s;}).map(function(ch){return '<label class="scope-chapter"><input type="checkbox" data-scope-chapter data-subject="'+esc(s)+'" value="'+esc(ch.id)+'"'+(chosen.indexOf(ch.id)>=0?' checked':'')+'><span>'+esc(ch.title)+'</span></label>';}).join('')+'</div></details>';}).join('')+'<p class="scope-fehler" role="alert" hidden></p><div class="scope-actions"><button type="button" data-scope-save>Auswahl speichern</button><button type="button" data-scope-close>Abbrechen</button></div></section>';
 var root=host.querySelector('#scope-v1217');
 function boxes(){return Array.from(root.querySelectorAll('[data-scope-chapter]'));}
 function sync(){var bs=boxes(),n=bs.filter(function(x){return x.checked;}).length;root.querySelector('.scope-count').textContent=n+' von '+chapters.length+' Kapiteln ausgew\u00e4hlt';
 root.querySelectorAll('[data-scope-subject]').forEach(function(x){var members=bs.filter(function(b){return b.dataset.subject===x.dataset.scopeSubjectId;}),n=members.filter(function(b){return b.checked;}).length;x.checked=n===members.length;x.indeterminate=n>0&&n<members.length;x.closest('label').querySelector('[data-scope-subcount]').textContent=n+'/'+members.length;});}
 function error(t){var el=root.querySelector('.scope-fehler');el.textContent=t;el.hidden=false;}
 root.addEventListener('change',function(e){if(e.target.matches('[data-scope-subject]')){var s=e.target.dataset.scopeSubjectId,on=e.target.checked;boxes().filter(function(x){return x.dataset.subject===s;}).forEach(function(x){x.checked=on;});}sync();});
 root.addEventListener('click',function(e){var t=e.target.closest('button');if(!t)return;
 if(t.matches('[data-scope-all],[data-scope-reset],[data-scope-none]')){boxes().forEach(function(x){x.checked=!t.matches('[data-scope-none]');});sync();}
 else if(t.matches('[data-scope-close]'))close();
 else if(t.matches('[data-scope-save]')){var ids=boxes().filter(function(x){return x.checked;}).map(function(x){return x.value;});if(!ids.length){error('W\u00e4hle mindestens ein Kapitel.');return;}
 if(pid()!==p||cfg()!==c){error('Das Profil wurde inzwischen gewechselt. Schliesse die Auswahl und \u00f6ffne sie erneut.');return;}
 if(!save(ids,p,c)){error('Speichern nicht m\u00f6glich. Deine bisherige Auswahl bleibt unver\u00e4ndert.');return;}
 var view=document.body.dataset.view||'learn',arg=(M.__v47Last||{}).arg;close();if(M.syncActiveCurriculum)M.syncActiveCurriculum();M.go(view,arg);}
 });
 host.onkeydown=function(e){if(e.key==='Escape'){e.preventDefault();e.stopPropagation();close();return;}if(e.key!=='Tab')return;var els=Array.from(root.querySelectorAll('button,input,summary,[tabindex="0"]')).filter(function(x){return !x.disabled&&x.getClientRects().length;});if(!els.length)return;var first=els[0],last=els[els.length-1];if(e.shiftKey&&(document.activeElement===first||document.activeElement===root.querySelector('h2'))){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}};
 sync();root.querySelector('h2').focus();return true;
}
M.LEARNING_SCOPE_V1217={audit:audit,open:open,selected:selected,save:save,storageKey:key,subjects:subjects,close:close};
/* Read the exported, current evidence schema; a stored locator is not independent verification. */
M.evidenceStatusV1217=function(id){var e=(M.EVIDENCE_V1217||{})[id];if(!e)return {key:'open',label:'Kein Nachweis hinterlegt'};var h=((e.review||{}).humanSubjectReview)||{},loc=e.locator||'';
 if(h.status==='approved'&&h.reviewer&&h.date&&loc&&e.officialSourceId)return {key:'ok',label:'Fundstelle hinterlegt und fachlich abgenommen'};
 return {key:loc?'partial':'open',label:loc?'Fundstelle hinterlegt, fachliche Abnahme offen':'Fundstelle und fachliche Abnahme offen'};};
})();

;

/* Duplicate v1217 exam controller retired: one owner is installed below. */

;
window.MNEMIKA.PASSERELLE_CONTENT_V1217=SKContent.pool("app-18-200788",{"schema":"passerelle-content-v1217","stageIds":["orientieren","verstehen","sehen","gemeinsam-lösen","selbst-versuchen","merken"],"count":55,"items":{}});