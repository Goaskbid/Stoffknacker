/* r183: keep decorative motion out of active learning; identify virtual guides.
 * No testimonials are generated, and no learning state is mutated. */
(function(w,d){'use strict';
 let queued=false;
 function refresh(){
  queued=false;const p=w.SKLanguagePolicy183;if(!p||!d.body)return;
  const value=p.quiet();d.body.classList.toggle('sk-learning-quiet',value);
  if(value){d.querySelectorAll('.skl-welle').forEach(n=>n.remove());d.querySelectorAll('.skl-gesicht').forEach(n=>n.classList.remove('skl-gesicht'));}
  d.querySelectorAll('.r155-team').forEach(sec=>{if(!sec.querySelector('.sk-virtual-disclosure')){const lead=sec.querySelector('.r155-team-lead');if(lead){lead.classList.add('sk-virtual-disclosure');return;}const n=d.createElement('p');n.className='sk-virtual-disclosure';n.textContent='Virtuelle Lernbegleitung. Die Figuren sind keine echten Lehrpersonen und geben keine Erfahrungsberichte ab.';sec.prepend(n);}});
 }
 function schedule(){if(queued)return;queued=true;requestAnimationFrame(refresh);}
 function start(){refresh();new MutationObserver(schedule).observe(d.body,{childList:true,subtree:true,attributes:true,attributeFilter:['data-view','hidden','aria-hidden']});d.addEventListener('click',e=>{if(e.target.closest?.('.sk-motion-pause'))setTimeout(refresh,0);});d.addEventListener('visibilitychange',refresh);w.matchMedia?.('(prefers-reduced-motion: reduce)').addEventListener?.('change',refresh);}
 if(d.readyState==='loading')d.addEventListener('DOMContentLoaded',start,{once:true});else start();
})(window,document);
