/* Stoffknacker app view: shows the chapter's Erklärfilm at the top of the lesson and keeps model answers
   of open «Verständnis prüfen» questions hidden until tapped. Same film and data as the reading page.
   Polls only while a lesson is open; never observes the whole document. */
(function(){"use strict";
var BASE=(document.currentScript&&document.currentScript.src||'').replace(/assets\/js\/sk-lesson-film\.js.*$/,'');
var V=(document.currentScript&&document.currentScript.src.split('?v=')[1])||'';
var idx=null,idxP=null,geladen=false,cache={},timer=0;
function index(){if(idx)return Promise.resolve(idx);if(!idxP)idxP=fetch(BASE+'assets/film/app-index.json?v='+V).then(function(r){return r.ok?r.json():{};}).then(function(j){idx=j;return j;}).catch(function(){idx={};return idx;});return idxP;}
function player(){if(geladen)return Promise.resolve();geladen=true;return new Promise(function(ok){var l=document.createElement('link');l.rel='stylesheet';l.href=BASE+'assets/film/film.css?v='+V;document.head.appendChild(l);var s=document.createElement('script');s.src=BASE+'assets/film/film.js?v='+V;s.onload=ok;s.onerror=ok;document.head.appendChild(s);});}
function film(id){if(cache[id]!==undefined)return Promise.resolve(cache[id]);return index().then(function(ix){var p=ix[id];if(!p)return cache[id]=null;
 return fetch(BASE+p).then(function(r){return r.ok?r.text():'';}).then(function(h){var m=h.match(/<section class="skf"[\s\S]*?<\/section>/);
  var q=h.match(/<section class="skf skq"[\s\S]*?<\/section>/);
  var q2=h.match(/<section class="skf skq skp"[\s\S]*?<\/section>/);
  cache[id]=m?{f:m[0].replace(/(src\\?":\\?")(?:\.\.\/)+/g,'$1').replace(/<h2 id="skf-h">/,'<h2 id="skf-h-app">').replace('aria-labelledby="skf-h"','aria-labelledby="skf-h-app"'),q:q?q[0].replace(/<h2 id="skq-h">/,'<h2 id="skq-h-app">').replace('aria-labelledby="skq-h"','aria-labelledby="skq-h-app"'):null,p:q2?q2[0].replace(/<h2 id="skp-h">/,'<h2 id="skp-h-app">').replace('aria-labelledby="skp-h"','aria-labelledby="skp-h-app"'):null}:null;return cache[id];});}).catch(function(){return null;});}
function antworten(main){[].forEach.call(main.querySelectorAll('p'),function(p){if(p.dataset.skMa)return;var st=[].filter.call(p.querySelectorAll('strong'),function(x){return x.textContent.trim()==='Musterantwort:';})[0];if(!st)return;p.dataset.skMa='1';
 var box=document.createElement('span');box.className='sk-ma';box.hidden=true;while(st.nextSibling)box.appendChild(st.nextSibling);box.insertBefore(st,box.firstChild);
 var b=document.createElement('button');b.type='button';b.className='sk-ma-btn';b.textContent='Musterantwort zeigen';b.setAttribute('aria-expanded','false');
 b.onclick=function(){var auf=box.hidden;box.hidden=!auf;b.textContent=auf?'Musterantwort verbergen':'Musterantwort zeigen';b.setAttribute('aria-expanded',String(auf));};
 p.appendChild(document.createTextNode(' '));p.appendChild(b);p.appendChild(document.createTextNode(' '));p.appendChild(box);});}
function lauf(){clearTimeout(timer);var m=location.hash.match(/^#lesson\/([^/?#]+)/);if(!m)return;var id=decodeURIComponent(m[1]),n=0;
 (function tick(){var main=document.querySelector('#v-read .lesson-main');if(!main||!main.textContent.trim()){if(++n<40)timer=setTimeout(tick,250);return;}
  antworten(main);
  if(main.querySelector('.skf'))return pruefe();
  film(id).then(function(h){if(!h||!location.hash.match(/^#lesson\//)||decodeURIComponent((location.hash.match(/^#lesson\/([^/?#]+)/)||[])[1]||'')!==id)return;
   var cur=document.querySelector('#v-read .lesson-main');if(!cur||cur.querySelector('.skf'))return;var t=document.createElement('div');t.innerHTML=h.f;var sec=t.firstChild;sec.classList.add('skf-app');
   if(h.q){var t2=document.createElement('div');t2.innerHTML=h.q;var qs=t2.firstChild;qs.classList.add('skf-app');cur.appendChild(qs);}
   if(h.p){var t3=document.createElement('div');t3.innerHTML=h.p;var ps=t3.firstChild;ps.classList.add('skf-app');cur.appendChild(ps);}
   var kopf=cur.querySelector('.lesson-head'),fig=cur.querySelector(':scope > figure.tb');if(kopf&&kopf.parentNode)kopf.parentNode.insertBefore(sec,kopf.nextSibling);else if(fig&&fig.nextSibling)cur.insertBefore(sec,fig.nextSibling);else cur.insertBefore(sec,cur.firstChild);
   player().then(function(){if(window.SKFilm)window.SKFilm.init();});pruefe();});})();}
function pruefe(){clearTimeout(timer);timer=setTimeout(function(){var main=document.querySelector('#v-read .lesson-main');if(!/^#lesson\//.test(location.hash))return;if(main&&(!main.querySelector('.skf')||main.querySelector('p:not([data-sk-ma]) strong')))lauf();else pruefe();},2000);}
window.addEventListener('hashchange',lauf);
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',lauf);else lauf();
var css=document.createElement('style');css.textContent='.sk-ma-btn{font:inherit;font-size:.9em;font-weight:700;border:1px solid currentColor;border-radius:999px;padding:.15em .8em;background:transparent;color:inherit;cursor:pointer}.sk-ma-btn:focus-visible{outline:3px solid #2563eb;outline-offset:2px}.sk-ma{display:block;margin-top:.4em}.sk-ma[hidden]{display:none}.skf-app{margin:0 0 1.2em}';document.head.appendChild(css);
})();
