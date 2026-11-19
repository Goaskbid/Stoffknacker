/* Stoffknacker Shorts (Erklärfilm v3): vertical explainer with recorded voice, synced captions and an animated
   infographic for each key idea. Every word shown comes from the chapter's published text. No network calls
   except the film's own audio file from this site. */
(function(){"use strict";
var BASE=(function(){var s=document.currentScript&&document.currentScript.src||'';return s.replace(/film\.js(\?.*)?$/,'');})();
function E(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
function el(t,c,h){var e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e;}
function fmt(n){if(typeof n!=='number')return E(n);var a=Math.abs(n);return (Math.round(n*100)/100).toLocaleString('de-CH');}
var NAME={lena:'Lena',sophie:'Sophie',alex:'Alex',marco:'Marco',maya:'Maya'};
var POSE={intro:'teaching',kern:'portrait',beat:'teaching',warn:'thinking',myth:'thinking',avoid:'thinking',big:'encouraging',outro:'teaching',steps:'teaching',terms:'portrait',list:'encouraging',text:'portrait',cards:'portrait',figure:'teaching'};
/* ---------- infographics (HTML/SVG, revealed with progress p 0..1) ---------- */
function vizHTML(v){var k=v.kind,h='';
 if(k==='flow'){var st=v.steps||[];h='<ol class="g-flow">'+st.map(function(s,i){var a=Array.isArray(s)?s:[s,''];return '<li data-r="'+i/st.length+'"><b>'+(i+1)+'</b><span><strong>'+E(a[0])+'</strong>'+(a[1]?'<em>'+E(a[1])+'</em>':'')+'</span></li>';}).join('')+'</ol>';}
 else if(k==='tree'){var br=v.branches||[];h='<div class="g-tree"><div class="g-root">'+E(v.root||v.title)+'</div><div class="g-br" style="grid-template-columns:repeat('+Math.min(br.length,br.length>4?2:br.length>2?2:br.length)+',minmax(0,1fr))">'+br.map(function(b,i){return '<div class="g-b" data-r="'+(0.1+0.8*i/br.length)+'"><strong>'+E(b[0])+'</strong>'+((b[1]||[]).length?'<ul>'+b[1].map(function(l){return '<li>'+E(l)+'</li>';}).join('')+'</ul>':'')+'</div>';}).join('')+'</div></div>';}
 else if(k==='bars'){var it=v.items||[],mx=Math.max.apply(null,it.map(function(x){return Math.abs(+x[1])||0;}).concat([1e-9]));
  h='<div class="g-bars">'+(v.unit?'<div class="g-unit">'+E(v.unit)+'</div>':'')+it.map(function(x,i){return '<div class="g-bar'+(v.highlight===x[0]||v.highlight===i?' hi':'')+'" data-r="'+(0.05+0.75*i/it.length)+'"><span class="g-l">'+E(x[0])+'</span><span class="g-t"><i style="--w:'+(Math.abs(+x[1])/mx*100).toFixed(1)+'%"></i></span><span class="g-v" data-n="'+(+x[1])+'">'+fmt(+x[1])+'</span></div>';}).join('')+'</div>';}
 else if(k==='stacked'){var ps=v.parts||[],tot=ps.reduce(function(a,x){return a+(+x[1]||0);},0)||1,acc=0,C=['var(--c)','#f59e0b','#10b981','#ef4444','#06b6d4','#a855f7','#84cc16','#f472b6'];
  h='<div class="g-stack"><svg viewBox="0 0 120 120" class="g-donut">'+ps.map(function(x,i){var f=(+x[1]||0)/tot,s='<circle r="46" cx="60" cy="60" pathLength="100" style="stroke:'+C[i%C.length]+';--a:'+(f*100).toFixed(2)+';--o:'+(-acc*100).toFixed(2)+'" data-r="'+(0.1+0.7*i/ps.length)+'"/>';acc+=f;return s;}).join('')+'</svg><ul>'+ps.map(function(x,i){return '<li data-r="'+(0.1+0.7*i/ps.length)+'"><i style="background:'+C[i%C.length]+'"></i>'+E(x[0])+' <b>'+fmt(+x[1])+(v.unit?' '+E(v.unit):'')+'</b></li>';}).join('')+'</ul></div>';}
 else if(k==='table'){var rows=v.rows||[];h='<table class="g-table"><thead><tr>'+(v.columns||[]).map(function(c){return '<th>'+E(c)+'</th>';}).join('')+'</tr></thead><tbody>'+rows.map(function(r,i){return '<tr data-r="'+(0.05+0.8*i/rows.length)+'">'+r.map(function(c){return '<td>'+fmt(c)+'</td>';}).join('')+'</tr>';}).join('')+'</tbody></table>';}
 else if(k==='matrix'){var ax=v.axes||[],ce=v.cells||[];h='<div class="g-matrix">'+(ax.length?'<div class="g-ax">'+ax.map(E).join(' · ')+'</div>':'')+'<div class="g-cells">'+ce.map(function(c,i){var a=Array.isArray(c)?c:[c,''];return '<div data-r="'+(0.05+0.8*i/ce.length)+'"><strong>'+E(a[0])+'</strong>'+(a[1]?'<em>'+E(a[1])+'</em>':'')+'</div>';}).join('')+'</div></div>';}
 else if(k==='cycle'){var cs=v.steps||[],n=cs.length;h='<div class="g-cycle"><div class="g-center">'+E(v.center||'')+'</div><svg class="g-ring" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40"/></svg>'+cs.map(function(s,i){var a=Array.isArray(s)?s:[s,''],w=-Math.PI/2+2*Math.PI*i/n;return '<div class="g-node" data-r="'+(0.05+0.8*i/n)+'" style="left:'+(50+40*Math.cos(w)).toFixed(1)+'%;top:'+(50+40*Math.sin(w)).toFixed(1)+'%"><strong>'+E(a[0])+'</strong></div>';}).join('')+'</div>';}
 else if(k==='timeline'){var ev=v.events||[];h='<ol class="g-time">'+ev.map(function(e,i){var a=Array.isArray(e)?e:[e,''];return '<li data-r="'+(0.05+0.8*i/ev.length)+'"><b>'+E(a[0])+'</b><span>'+E(a[1]||'')+'</span></li>';}).join('')+'</ol>';}
 else if(k==='plot'){h=plotSVG(v);}
 else if(k==='map'){h='<ol class="g-map">'+v.steps.map(function(x,i){return '<li class="'+(i<v.cur?'was':i===v.cur?'now':'')+'" data-r="'+(i===v.cur?0.08:0)+'"><b>'+(i<v.cur?'✓':i+1)+'</b><span>'+E(x)+'</span></li>';}).join('')+'</ol>';}
 return '<figure class="g g-'+k+'"><figcaption>'+E(v.title||'')+'</figcaption><div class="gi">'+h+'</div></figure>';}
function plotSVG(v){var W=320,H=230,L=40,B=34,T=12,Rr=12,xl=v.xlim||[0,10],yl=v.ylim,ser=v.series||[],pts=v.points||[];
 if(!yl){var ys=[];ser.forEach(function(s){s.pts.forEach(function(p){if(p[1]!=null)ys.push(p[1]);});});pts.forEach(function(p){ys.push(p[1]);});yl=[Math.min.apply(null,ys.concat([0])),Math.max.apply(null,ys.concat([1]))];}
 function X(x){return L+(x-xl[0])/(xl[1]-xl[0])*(W-L-Rr);}function Y(y){return H-B-(y-yl[0])/(yl[1]-yl[0])*(H-B-T);}
 var C=['var(--c)','#f59e0b','#10b981','#ef4444'],s='<svg viewBox="0 0 '+W+' '+H+'" class="g-plot">';
 for(var i=0;i<=4;i++){var yy=yl[0]+(yl[1]-yl[0])*i/4,xx=xl[0]+(xl[1]-xl[0])*i/4;s+='<line class="gr" x1="'+L+'" x2="'+(W-Rr)+'" y1="'+Y(yy)+'" y2="'+Y(yy)+'"/><text class="tk" x="'+(L-5)+'" y="'+(Y(yy)+3)+'" text-anchor="end">'+fmt(+yy.toPrecision(3))+'</text><text class="tk" x="'+X(xx)+'" y="'+(H-B+14)+'" text-anchor="middle">'+fmt(+xx.toPrecision(3))+'</text>';}
 s+='<line class="ax" x1="'+L+'" x2="'+(W-Rr)+'" y1="'+(H-B)+'" y2="'+(H-B)+'"/><line class="ax" x1="'+L+'" x2="'+L+'" y1="'+T+'" y2="'+(H-B)+'"/>';
 s+='<text class="al" x="'+((L+W-Rr)/2)+'" y="'+(H-4)+'" text-anchor="middle">'+E(v.xLabel||'')+'</text><text class="al" x="12" y="'+((T+H-B)/2)+'" text-anchor="middle" transform="rotate(-90 12 '+((T+H-B)/2)+')">'+E(v.yLabel||'')+'</text>';
 ser.forEach(function(se,j){var d='',pen=false;se.pts.forEach(function(p){if(p[1]==null||p[1]<yl[0]-1e-9||p[1]>yl[1]+1e-9){pen=false;return;}d+=(pen?'L':'M')+X(p[0]).toFixed(1)+' '+Y(p[1]).toFixed(1);pen=true;});
  s+='<path class="ln'+(se.dashed?' da':'')+'" pathLength="100" d="'+d+'" style="stroke:'+C[j%4]+'" data-r="'+(0.05+0.25*j)+'"/>';});
 pts.forEach(function(p,i){s+='<g class="pt" data-r="'+(0.45+0.4*i/Math.max(1,pts.length))+'"><circle cx="'+X(p[0])+'" cy="'+Y(p[1])+'" r="4.5"/>'+(p[2]?'<text x="'+X(p[0])+'" y="'+(Y(p[1])-9)+'" text-anchor="middle">'+E(p[2])+'</text>':'')+'</g>';});
 s+='</svg>';if(ser.length>1||(ser[0]&&ser[0].label))s+='<div class="g-leg">'+ser.map(function(se,j){return '<span><i style="background:'+C[j%4]+'"></i>'+E(se.label||'')+'</span>';}).join('')+'</div>';return s;}
/* ---------- player ---------- */
function Shorts(root,d){
 var mount=root.querySelector('.skf-mount')||root;root.classList.add('sks-on');
 var sc=d.scenes,tm=d.tm||null,teacher=d.teacher||'sophie',img=function(p){return BASE+'lehrer/'+teacher+'-'+p+'.webp';};
 /* timing: from the recorded track, or estimated for silent playback */
 var cues=[],k=0,t=0;sc.forEach(function(s,si){s.cues.forEach(function(c,ci){var a,b;if(tm&&tm[k]){a=tm[k][0];b=tm[k][1];}else{a=t;b=t+Math.max(1.2,c.v.length/13.5);t=b+0.3;}cues.push({s:si,c:ci,a:a,b:b,o:c});k++;});if(!tm)t+=0.4;});
 var total=tm?(d.dur||cues[cues.length-1].b+0.5):t;sc.forEach(function(s,si){var cs=cues.filter(function(c){return c.s===si;});s._a=cs[0].a;s._b=si<sc.length-1?cues.filter(function(c){return c.s===si+1;})[0].a:total;});
 var box=el('div','sks');box.style.setProperty('--c',d.color||'#2563eb');
 box.innerHTML='<div class="sks-stage" tabindex="0" role="region" aria-label="Erklärfilm: '+E(d.title)+'"><div class="sks-bg"><i></i><i></i><i></i></div>'
  +'<div class="sks-top"><div class="sks-seg">'+sc.map(function(){return '<span><i></i></span>';}).join('')+'</div><div class="sks-bar"><img class="sks-av" alt="" src="'+img('portrait')+'"><span class="sks-who"><b>'+E(NAME[teacher]||'')+'</b> erklärt</span>'
  +'<button class="sks-btn sks-rate" type="button" aria-label="Tempo">1×</button><button class="sks-btn sks-cc on" type="button" aria-label="Untertitel aus">CC</button><button class="sks-btn sks-mute" type="button" aria-label="Ton aus">🔊</button></div></div>'
  +'<div class="sks-scene"></div><div class="sks-cap" aria-live="off"></div><img class="sks-host" alt="" src="'+img('teaching')+'">'
  +'<div class="sks-wm" aria-hidden="true">stoffknacker.com</div>'
  +'<button class="sks-start" type="button"><img alt="" src="'+img('portrait')+'"><span class="sks-k">'+E(d.title)+'</span><span class="sks-pl">▶</span><span class="sks-d">'+Math.round(total)+' Sekunden · mit Stimme</span></button>'
  +'<div class="sks-tap l" aria-hidden="true"></div><div class="sks-tap r" aria-hidden="true"></div></div>';
 mount.innerHTML='';mount.appendChild(box);
 var stage=box.querySelector('.sks-stage'),scene=box.querySelector('.sks-scene'),cap=box.querySelector('.sks-cap'),host=box.querySelector('.sks-host'),segs=box.querySelectorAll('.sks-seg i'),bStart=box.querySelector('.sks-start');
 var au=null;if(d.audio){au=new Audio();au.preload='none';au.src=BASE+d.audio;}
 var playing=false,clock=0,last=0,cur=-1,curCue=-1,rate=1,cc=true,ended=false,raf=0;
 function now(){return au&&!au.error?au.currentTime:clock;}
 function setT(x){x=Math.max(0,Math.min(total-0.05,x));if(au&&!au.error){try{au.currentTime=x;}catch(e){}}clock=x;}
 function render(i){var s=sc[i];cur=i;curCue=-1;scene.className='sks-scene t-'+s.type;scene.innerHTML=layout(s,i);host.src=img(POSE[s.type]||'portrait');host.className='sks-host p-'+s.type;
  box.classList.toggle('bigtext',/^(kern|big|text|warn)$/.test(s.type));void scene.offsetWidth;scene.classList.add('in');fit();}
 function fit(){[].forEach.call(scene.querySelectorAll('.g .gi'),function(gi){gi.style.transform='';gi.style.width='';var av=gi.parentNode.clientHeight-(gi.offsetTop-gi.parentNode.offsetTop)-10;var nd=gi.scrollHeight;if(nd>av&&av>40){var k=Math.max(0.55,av/nd);gi.style.transform='scale('+k+')';gi.style.width=(100/k)+'%';}});
  [].forEach.call(scene.children,function(c){c.style.zoom='';});var z=1;while(scene.scrollHeight>scene.clientHeight+2&&z>0.62){z-=0.06;[].forEach.call(scene.children,function(c){if(!c.classList.contains('k'))c.style.zoom=z;});}
  var bt=scene.querySelector('.bt');if(bt){bt.style.fontSize='';var lim=scene.clientHeight-70;for(var z=0;z<8&&bt.scrollHeight>lim;z++)bt.style.fontSize=(parseFloat(getComputedStyle(bt).fontSize)*0.9)+'px';}}
 function layout(s,i){var tp=s.type,h='';
  if(tp==='intro')h='<div class="k">'+E(s.kicker||'Erklärfilm')+'</div><h3 class="ti">'+words(s.title)+'</h3><div class="stk">⚡ in '+Math.round(total)+' s</div>';
  else if(/^(kern|big|text|warn)$/.test(tp))h='<div class="k">'+E(tp==='warn'?'⚠️ Fehlerfalle':tp==='kern'?'Der Kern':s.kicker||'')+'</div><p class="bt">'+s.cues.map(function(c,ci){return c.s?'<span data-c="'+ci+'">'+words(c.s)+'</span>':'';}).join(' ')+'</p>';
  else if(tp==='beat')h='<div class="bh"><span class="chip">'+E(s.kicker||'')+'</span>'+(s.img?'<img class="ico" alt="" src="'+BASE+'../../'+s.img+'">':'')+'<h3>'+E(s.head||'')+'</h3></div>'+(s.viz?vizHTML(s.viz):'<div class="g g-none">'+(s.img?'<img alt="" src="'+BASE+'../../'+s.img+'">':'')+'</div>');
  else if(tp==='terms')h='<div class="k">Begriffe</div><div class="cards">'+s.items.map(function(x,j){return '<div class="card" data-i="'+j+'"><strong>'+E(x[0])+'</strong><span>'+E(x[1])+'</span></div>';}).join('')+'</div>';
  else if(tp==='steps')h='<div class="k">'+E(s.kicker||'Beispiel')+'</div>'+(s.task?'<div class="task" data-i="-1">'+E(s.task)+'</div>':'')+'<ol class="lines">'+s.steps.map(function(x,j){return '<li data-i="'+j+'">'+E(x)+'</li>';}).join('')+'</ol>'+(s.result?'<div class="res" data-i="99">✓ '+E(s.result)+'</div>':'');
  else if(tp==='list'||tp==='avoid'||tp==='cards')h='<div class="k">'+E(s.kicker||'')+'</div><ul class="chk '+tp+'">'+s.items.map(function(x,j){return '<li data-i="'+j+'">'+E(x)+'</li>';}).join('')+'</ul>';
  else if(tp==='myth')h='<div class="k">'+E(s.kicker||'')+'</div><div class="myth"><div class="no" data-i="0"><b>✗ Falsch</b>'+E(s.no)+'</div><div class="ja" data-i="1"><b>✓ Besser</b>'+E(s.ja)+'</div></div>';
  else if(tp==='figure')h='<div class="k">'+E(s.kicker||'')+'</div><figure class="g"><figcaption>'+E(s.ftitle||'')+'</figcaption><img alt="'+E(s.alt||'')+'" src="'+BASE+'diagramme/'+E((s.src||'').split('/').pop())+'"></figure>';
  else if(tp==='outro')h='<div class="k">Geschafft 🎉</div><h3 class="ti">Jetzt bist du dran!</h3><div class="cta"><button type="button" class="go">▶ Übungsfilm starten</button><button type="button" class="again">↺ Nochmal</button></div>';
  return h;}
 function words(t){return String(t).split(/\s+/).map(function(w){return '<i>'+E(w)+'</i>';}).join(' ');}
 function reveal(p){[].forEach.call(scene.querySelectorAll('[data-r]'),function(e){var on=p>=+e.dataset.r;if(e.classList.contains('on')!==on)e.classList.toggle('on',on);});
  [].forEach.call(scene.querySelectorAll('.g-v[data-n]'),function(e){var row=e.parentNode;if(row.classList.contains('on')&&!e.dataset.done){e.dataset.done='1';countUp(e);}});}
 function countUp(e){var n=+e.dataset.n,t0=performance.now(),dec=(String(n).split('.')[1]||'').length;(function f(){var q=Math.min(1,(performance.now()-t0)/700);e.textContent=(n*(1-Math.pow(1-q,3))).toFixed(dec).replace('.',',');if(q<1)requestAnimationFrame(f);})();}
 function cueOn(ci){var s=sc[cur],c=s.cues[ci];curCue=ci;
  [].forEach.call(scene.querySelectorAll('[data-i]'),function(e){var j=+e.dataset.i,ci2=c.i;if(ci2!=null&&(j===ci2||(j<ci2&&j!==99)||(ci2===99&&j<=99)))e.classList.add('on');});
  [].forEach.call(scene.querySelectorAll('[data-c]'),function(e){e.classList.toggle('cur',+e.dataset.c===ci);if(+e.dataset.c<ci)e.classList.add('done');});}
 function karaoke(q,lo,hi){var c=q.o,txt=c.s||'',p=Math.max(0,Math.min(1,(now()-q.a)/Math.max(0.3,q.b-q.a)));
  var big=box.classList.contains('bigtext');
  if(big){var sp=scene.querySelector('[data-c="'+q.c+'"]');if(sp){var ws=sp.querySelectorAll('i'),n=Math.floor(p*ws.length*1.02);for(var j=0;j<ws.length;j++)ws[j].className=j<n?'s':'';}cap.innerHTML='';return;}
  if(!cc||!txt){cap.innerHTML='';return;}
  var w=txt.split(/\s+/),L=w.map(function(x){return x.length+2;}),tot=L.reduce(function(a,b){return a+b;},0),acc=0,ix=0;for(ix=0;ix<w.length;ix++){acc+=L[ix];if(acc/tot>p)break;}
  var C=6,st=Math.floor(Math.min(ix,w.length-1)/C)*C,ch=w.slice(st,st+C).map(function(x,j){return '<i class="'+(st+j===ix?'a':st+j<ix?'s':'')+'">'+E(x)+'</i>';}).join(' ');
  if(cap.dataset.k!==st+'/'+q.c){cap.dataset.k=st+'/'+q.c;cap.innerHTML='<span>'+ch+'</span>';}else{var is=cap.querySelectorAll('i');for(var j=0;j<is.length;j++)is[j].className=st+j===ix?'a':st+j<ix?'s':'';}}
 function frame(){var x=now();if(!au||au.error){var n=performance.now();if(playing)clock+=(n-last)/1000*rate;last=n;}
  if(x>=total-0.02&&playing){finish();return;}
  var si=0;for(var i=0;i<sc.length;i++)if(x>=sc[i]._a-0.01)si=i;if(si!==cur)render(si);
  var s=sc[si],p=(x-s._a)/Math.max(0.5,s._b-s._a);reveal(p);
  for(var i=0;i<segs.length;i++)segs[i].style.width=(i<si?100:i>si?0:Math.min(100,p*100))+'%';
  var q=null;for(var j=0;j<cues.length;j++)if(cues[j].s===si&&x>=cues[j].a-0.05)q=cues[j];
  if(q){if(q.c!==curCue)cueOn(q.c);karaoke(q);}
  if(playing)raf=requestAnimationFrame(frame);}
 function play(){if(ended){ended=false;setT(0);cur=-1;}playing=true;box.classList.add('playing');box.classList.remove('paused');last=performance.now();
  if(au&&!au.error){au.playbackRate=rate;var pr=au.play();if(pr&&pr.catch)pr.catch(function(){au=null;});}cancelAnimationFrame(raf);raf=requestAnimationFrame(frame);}
 function pause(){playing=false;box.classList.add('paused');if(au)au.pause();cancelAnimationFrame(raf);}
 function finish(){pause();ended=true;render(sc.length-1);for(var i=0;i<segs.length;i++)segs[i].style.width='100%';box.classList.add('done');cap.innerHTML='';}
 function jump(si){si=Math.max(0,Math.min(sc.length-1,si));setT(sc[si]._a+0.01);cur=-1;if(!playing)play();else frame();}
 bStart.onclick=function(e){e.stopPropagation();bStart.hidden=true;box.classList.add('started');play();};
 box.querySelector('.sks-tap.l').onclick=function(e){e.stopPropagation();if(box.classList.contains('started'))jump(cur-(now()-sc[Math.max(cur,0)]._a<1.5?1:0));};
 box.querySelector('.sks-tap.r').onclick=function(e){e.stopPropagation();if(box.classList.contains('started'))jump(cur+1);};
 stage.addEventListener('click',function(e){if(e.target.closest('button'))return;if(!box.classList.contains('started'))return;playing?pause():play();});
 stage.addEventListener('keydown',function(e){if(e.key===' '){e.preventDefault();if(!box.classList.contains('started'))bStart.click();else playing?pause():play();}else if(e.key==='ArrowRight')jump(cur+1);else if(e.key==='ArrowLeft')jump(cur-1);});
 box.querySelector('.sks-rate').onclick=function(e){e.stopPropagation();rate=rate===1?1.25:rate===1.25?1.5:1;this.textContent=String(rate).replace('.',',')+'×';if(au)au.playbackRate=rate;};
 box.querySelector('.sks-cc').onclick=function(e){e.stopPropagation();cc=!cc;this.classList.toggle('on',cc);this.setAttribute('aria-label',cc?'Untertitel aus':'Untertitel an');};
 box.querySelector('.sks-mute').onclick=function(e){e.stopPropagation();if(!au)return;au.muted=!au.muted;this.textContent=au.muted?'🔇':'🔊';this.setAttribute('aria-label',au.muted?'Ton an':'Ton aus');};
 scene.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;e.stopPropagation();
  if(b.classList.contains('again')){box.classList.remove('done');ended=false;setT(0);cur=-1;play();}
  else if(b.classList.contains('go')){var q=document.querySelector('.skf.skq .skf-stage,.skf.skq');if(q){q.scrollIntoView({behavior:'smooth',block:'center'});var bp=q.querySelector&&q.querySelector('button');if(bp)setTimeout(function(){bp.click();},600);}}});
 document.addEventListener('visibilitychange',function(){if(document.hidden&&playing)pause();});
 if('IntersectionObserver' in window)new IntersectionObserver(function(es){es.forEach(function(en){if(!en.isIntersecting&&playing)pause();});},{threshold:0.2}).observe(stage);
 render(0);reveal(0);
}
window.SKShorts=Shorts;
})();

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
 var hatTTS='speechSynthesis' in window,bV=hatTTS?knopf('🔊','Stimme ausschalten','skf-tog on'):null,bM=knopf('♪̸','Musik einschalten','skf-tog');
 var tt=el('span','skf-t');ctl.appendChild(tt);stage.appendChild(ctl);root.querySelector('.skf-mount').appendChild(stage);
 var i=0,spielt=false,timer=null,t0=0,dur=0,raf=0,stimmeAn=hatTTS,musikAn=false,musik=Musik(),uttId=0;
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
function init(){[].forEach.call(document.querySelectorAll('.skf'),function(r){if(!r.dataset.skfOn){r.dataset.skfOn='1';var d=null;try{d=JSON.parse(r.querySelector('script[type="application/json"]').textContent);}catch(e){}if(d&&d.v===3&&window.SKShorts)window.SKShorts(r,d);else start(r);}});}
window.SKFilm={init:init};
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
