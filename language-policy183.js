/* r183: active course availability is separate from historical learner data.
 * This module never removes local progress, age declarations or consent.
 */
(function(w,d){'use strict';
 const names=Object.freeze({en:'Englisch',fr:'Franz\u00f6sisch',it:'Italienisch',es:'Spanisch'});
 const active=Object.freeze(Object.keys(names));
 const retired=Object.freeze(['pt','nl','sv','nb']);
 let intent=0;function changeIntent(){return ++intent;}function intentVersion(){return intent;}
 function esc(value){return String(value||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
 function available(code){return Object.prototype.hasOwnProperty.call(names,code);}
 function retiredMarkup(){
  return '<div class="sp-box sk-retired-course" role="document"><button type="button" class="sp-zu" data-sp="zu" aria-label="Sprachauswahl schliessen">\u00d7</button><p class="eyebrow">Sprachangebot aktualisiert</p><h2>W\u00e4hle einen aktuellen Sprachkurs</h2><p>Portugiesisch, Niederl\u00e4ndisch, Schwedisch und Norwegisch geh\u00f6ren nicht mehr zum aktuellen Stoffknacker-Angebot. Deine bisherigen Lernst\u00e4nde bleiben auf diesem Ger\u00e4t gespeichert und im Lernstand-Export enthalten.</p><div class="sk-retired-choices">'+active.map(l=>'<button type="button" class="btn" data-sp="lang" data-l="'+l+'">'+esc(names[l])+'</button>').join('')+'</div><p>Die Fachkapitel f\u00fcr Deutsch und weitere Schweizer Bildungswege bleiben erhalten. Die Kursauswahl ist keine Zusicherung einer vollst\u00e4ndigen Lehrplanabdeckung.</p></div>';
 }
 function quiet(){return d.hidden||!!w.matchMedia?.('(prefers-reduced-motion: reduce)').matches||d.body.classList.contains('sk-motion-paused')||!!d.querySelector('#sp, #lp, #mn-sprache, [role="dialog"][aria-modal="true"]')||/^(train|cards|exam|run|lernpfad|pruefung-start)$/.test(d.body.dataset.view||'');}
 w.SKLanguagePolicy183=Object.freeze({version:183,active,retired,names,available,retiredMarkup,quiet,changeIntent,intentVersion});
})(window,document);
