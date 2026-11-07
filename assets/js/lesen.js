/* Kapitel straffen (r161, R161-15): Der Lehrtext (Abschnitte) bleibt offen. Zusatzschichten darunter
   (Übersichtskarten, Schaubilder, Modell, Beispiele, Kurzfassung) stehen als aufklappbare Abschnitte mit Titel da,
   statt alle offen untereinander (Handy vorher ~20 000 px). Nichts wird entfernt; beim Drucken ist alles offen. */
(function(){'use strict';
var M=window.MNEMIKA;if(!M||M.__lesen161)return;M.__lesen161=true;
function e(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
var DEF=[['feature-presentations','Auf einen Blick','Übersichtskarten zum Kapitel'],['r37-gallery','Schaubilder','Grafiken mit Erklärung'],['model','Modell und Formel','Herleitung, Sonderfälle, Kontrolle'],['examples','Beispiele mit Lösungsweg','Schritt für Schritt vorgerechnet'],['uet','Kurz zusammengefasst','Das Wichtigste in wenigen Sätzen']];
function straffen(){var v=document.getElementById('v-read');if(!v||v.hidden)return;var main=v.querySelector('.lesson-main');if(!main)return;
 DEF.forEach(function(d){[].forEach.call(main.children,function(el){if(!el.classList||!el.classList.contains(d[0])||el.closest('details.r161-mehr'))return;
  var n=el.querySelectorAll('.example,.ex,article,figure,li').length,titel=((el.querySelector('h2,h3')||{}).textContent||'').trim();
  var det=document.createElement('details');det.className='r161-mehr';det.setAttribute('data-r161',d[0]);
  det.innerHTML='<summary><span class="r161-t">'+e(d[1])+'</span><span class="r161-s">'+e(titel&&titel!==d[1]?titel.slice(0,90):d[2])+'</span></summary>';
  el.parentNode.insertBefore(det,el);det.appendChild(el);});});}
var printState=null;
window.addEventListener('beforeprint',function(){
 if(printState)return;printState=[];
 [].forEach.call(document.querySelectorAll('details.r161-mehr'),function(d){printState.push([d,d.open]);d.open=true;});
});
window.addEventListener('afterprint',function(){
 if(!printState)return;printState.forEach(function(p){if(p[0].isConnected)p[0].open=p[1];});printState=null;
});
var go0=M.go;if(typeof go0==='function'&&!go0.__lesen){var w=function(v){var r=go0.apply(this,arguments);if(v==='read'){setTimeout(straffen,80);setTimeout(straffen,700);}return r;};w.__lesen=true;for(var k in go0)if(!(k in w))w[k]=go0[k];M.go=w;}
var CSS='details.r161-mehr{margin:14px 0;border:1px solid #e5e7eb;border-radius:16px;background:#fff}details.r161-mehr>summary{list-style:none;cursor:pointer;display:flex;flex-direction:column;gap:2px;padding:14px 46px 14px 16px;position:relative;min-height:44px}'
 +'details.r161-mehr>summary::-webkit-details-marker{display:none}details.r161-mehr>summary::after{content:"+";position:absolute;right:16px;top:50%;transform:translateY(-50%);font-size:24px;font-weight:700;color:#344fc4}details.r161-mehr[open]>summary::after{content:"−"}'
 +'.r161-t{font-weight:800;font-size:16px;color:#152239}.r161-s{font-size:13.5px;color:#526277}details.r161-mehr>summary:focus-visible{outline:3px solid #1d4ed8;outline-offset:2px;border-radius:14px}details.r161-mehr[open]{padding-bottom:6px}details.r161-mehr>:not(summary){margin-left:8px;margin-right:8px}'
 +'#v-read details.r161-mehr>summary{display:flex!important;flex-direction:column!important;align-items:flex-start!important;text-align:left!important;list-style:none!important;font-size:inherit!important}#v-read details.r161-mehr>summary::marker{content:""!important}#v-read details.r161-mehr>summary::before{content:none!important;display:none!important}'
 +'@media print{details.r161-mehr>summary::after{content:""}}';
(function(){if(document.getElementById('r161-lesen-css'))return;var s=document.createElement('style');s.id='r161-lesen-css';s.textContent=CSS;(document.head||document.documentElement).appendChild(s);})();
M.lesen161={straffen:straffen};
})();
