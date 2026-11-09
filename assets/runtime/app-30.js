(function(){'use strict';var M=window.MNEMIKA;if(!M||M.__r153start)return;M.__r153start=true;
/* R153: Erstbesuch. Eine kompakte Karte «Neu hier?» oben auf der Startseite: was Stoffknacker ist, dass es kostenlos ist, kein Konto braucht und offline geht, die drei Schritte und die live gezaehlten Inhalte.
   Additiv: nichts Bestehendes wird ersetzt; zugeklappt, sobald jemand schon gelernt hat (Zustand im Lernstand). */
function E(t){return String(t==null?'':t).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
function zahlen(){var z={lektionen:0,ziele:0,schaubilder:0};try{var K=M.KOMPETENZ_R153&&M.KOMPETENZ_R153.data;if(K){z.lektionen=Object.keys(K).length;Object.keys(K).forEach(function(k){z.ziele+=K[k].o.length;});}
 var V=M.VISUAL_LAYER_R37&&M.VISUAL_LAYER_R37.data;if(V){var s={};Object.keys(V.chapterBindings||{}).forEach(function(c){(V.chapterBindings[c]||[]).forEach(function(i){if(V.definitions[i])s[i]=1;});});z.schaubilder=Object.keys(s).length;}}catch(e){}return z;}
function schonGelernt(){try{var S=M.store&&M.store();if(!S)return false;if(S.r153start==='zu')return true;if(S.r153start==='offen')return false;return !!(S.teach&&Object.keys(S.teach).length);}catch(e){return false;}}
function karte(){var z=zahlen(),offen=(function(){try{var S=M.store&&M.store();return !!(S&&S.r153start==='offen');}catch(e){return false;}})();
 return '<details class="r153s" data-r153-start="1"'+(offen?' open':'')+'><summary><span class="r153s-i" aria-hidden="true">'+(window.mnIkon?window.mnIkon('lightbulb'):'👋')+'</span> <b>Neu hier? So funktioniert Stoffknacker</b></summary>'
 +'<p class="r153s-lead">Stoffknacker ist ein Lern- und Prüfungstrainer für sechs Schweizer Abschlüsse: Passerelle, Gymnasiale Maturität, Schweizerische Maturitätsprüfung, Berufsmaturität, Eidgenössische Berufsmaturitätsprüfung und Fachmittelschule.</p>'
 +'<ul class="r153s-chips"><li>✓ kostenlos</li><li>✓ ohne Konto</li><li>✓ funktioniert offline</li><li>✓ Lernstand bleibt auf deinem Gerät</li></ul>'
 +'<ol class="r153s-steps"><li><b>Abschluss wählen</b><span>Unten deinen Abschluss antippen. Fach und Thema findest du danach.</span></li>'
 +'<li><b>Lernen</b><span>Jede Lektion erklärt den Stoff Schritt für Schritt, mit Schaubild, Beispiel und typischem Fehler.</span></li>'
 +'<li><b>Üben und testen</b><span>Fragen wie in der Prüfung, mit Rückmeldung. Die Box «Lernziele» zeigt, was die Prüfung verlangt.</span></li></ol>'
 +(z.lektionen?'<p class="r153s-z"><b>'+z.lektionen+'</b> Lektionen · <b>'+z.ziele+'</b> Lernziele, alle mit Lektion und Übungsfragen · <b>'+z.schaubilder+'</b> Schaubilder</p>':'')
 +'<button type="button" class="r41-knopf" data-r153-start-zu="1">Verstanden, zuklappen</button></details>';}
function einsetzen(el){try{el=el||document.getElementById('v-programs');if(!el)return;var alt=el.querySelector('.r153s');if(alt)alt.remove();var h=el.querySelector('.r39-start');if(h)h.insertAdjacentHTML('afterend',karte());else el.insertAdjacentHTML('afterbegin',karte());}catch(e){try{console.error('Erststart',e);}catch(_){}}}
document.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('[data-r153-start-zu]');if(!b)return;var d=b.closest('.r153s');if(d)d.open=false;try{var S=M.store();S.r153start='zu';M.save&&M.save();}catch(x){}});
document.addEventListener('toggle',function(e){var d=e.target;if(!d||!d.classList||!d.classList.contains('r153s'))return;try{var S=M.store();S.r153start=d.open?'offen':'zu';M.save&&M.save();}catch(x){}},true);
var basis=M.renderProgramsV91;if(typeof basis==='function'){M.renderProgramsV91=function(el){var r=basis.apply(M,arguments);einsetzen(el);return r;};}
try{var v=document.getElementById('v-programs');if(v&&v.dataset.v91Rendered&&!v.querySelector('.r153s'))einsetzen(v);}catch(e){}
M.ERSTSTART_R153={karte:karte,zahlen:zahlen};})();