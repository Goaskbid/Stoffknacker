/* r203 Geräteübertragung per QR-Code: Der Lernstand (derselbe Export wie die Sicherungsdatei) wird auf diesem Gerät
   komprimiert und in eine Folge von QR-Codes zerlegt. Jeder Code ist ein Link auf stoffknacker.com mit den Daten
   nach dem #-Zeichen; dieser Teil der Adresse wird nie an einen Server gesendet. Das andere Gerät scannt die Codes
   mit seiner normalen Kamera-App, sammelt die Teile in seinem Browser und liest den Stand über die bestehende,
   geprüfte Importfunktion ein. Kein Konto, kein Server, keine Kamera-Freigabe für die Website nötig. */
(function(){
 "use strict";
 var PART=600,MAXP=30,PFX="sk-geraet-";
 function M(){return window.MNEMIKA;}
 function el(t,c,x){var e=document.createElement(t);if(c)e.className=c;if(x!=null)e.textContent=x;return e;}
 var css=".skg{position:fixed;inset:0;z-index:9999;display:grid;place-items:center;background:rgba(10,14,20,.6);padding:16px}"+
  ".skg-box{background:#fff;color:#16202a;border-radius:18px;max-width:440px;width:100%;max-height:92vh;overflow:auto;padding:20px;display:grid;gap:12px;box-shadow:0 20px 60px rgba(0,0,0,.35)}"+
  "@media (prefers-color-scheme:dark){.skg-box{background:#17202a;color:#e8eef4}}"+
  ".skg h2{margin:0;font-size:1.25rem}.skg p{margin:0;line-height:1.45}.skg-qr{background:#fff;border-radius:12px;padding:12px;justify-self:center}"+
  ".skg-qr svg{display:block;max-width:none;shape-rendering:crispEdges}"+
  ".skg-row{display:flex;gap:8px;flex-wrap:wrap}.skg button{font:inherit;font-weight:700;padding:11px 15px;border-radius:12px;border:0;cursor:pointer;background:#1f6feb;color:#fff}"+
  ".skg button.skg-2{background:transparent;color:inherit;border:2px solid currentColor}.skg button:focus-visible{outline:3px solid #f2b705;outline-offset:2px}"+
  ".skg-dots{display:flex;gap:6px;flex-wrap:wrap}.skg-dots i{width:12px;height:12px;border-radius:50%;background:#c6ced8}.skg-dots i.on{background:#1f9d55}.skg-dots i.now{outline:2px solid #1f6feb}";
 function stil(){if(document.getElementById("sk-r203-geraet"))return;var s=document.createElement("style");s.id="sk-r203-geraet";s.textContent=css;document.head.appendChild(s);}
 function overlay(){stil();var o=document.querySelector(".skg");if(o)o.remove();o=el("div","skg");o.setAttribute("role","dialog");o.setAttribute("aria-modal","true");
  var b=el("div","skg-box");o.appendChild(b);document.body.appendChild(o);
  o.addEventListener("keydown",function(e){if(e.key==="Escape")o.remove();});return b;}
 function b64(u8){var s="";for(var i=0;i<u8.length;i+=8192)s+=String.fromCharCode.apply(null,u8.subarray(i,i+8192));return btoa(s).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");}
 function unb64(t){t=t.replace(/-/g,"+").replace(/_/g,"/");while(t.length%4)t+="=";var s=atob(t),u=new Uint8Array(s.length);for(var i=0;i<s.length;i++)u[i]=s.charCodeAt(i);return u;}
 function stream(u8,cls,fmt){return new Response(new Blob([u8]).stream().pipeThrough(new cls(fmt))).arrayBuffer().then(function(b){return new Uint8Array(b);});}
 function packe(text){var u=new TextEncoder().encode(text);
  if(typeof CompressionStream==="function")return stream(u,CompressionStream,"deflate-raw").then(function(z){return "z"+b64(z);}).catch(function(){return "r"+b64(u);});
  return Promise.resolve("r"+b64(u));}
 function entpacke(s){var u=unb64(s.slice(1));
  if(s[0]==="z"){if(typeof DecompressionStream!=="function")return Promise.reject(new Error("Dieser Browser kann die komprimierte Übertragung nicht lesen. Bitte Datei-Export verwenden."));
   return stream(u,DecompressionStream,"deflate-raw").then(function(x){return new TextDecoder().decode(x);});}
  return Promise.resolve(new TextDecoder().decode(u));}
 function qrlib(){return new Promise(function(ok,no){if(window.qrcode)return ok(window.qrcode);var s=document.createElement("script");s.src="assets/js/qrcode-generator-1.4.4.js";s.onload=function(){window.qrcode?ok(window.qrcode):no(new Error("QR"));};s.onerror=function(){no(new Error("Der QR-Baustein liess sich nicht laden. Bitte online öffnen oder Datei-Export verwenden."));};document.head.appendChild(s);});}
 function basis(){return location.origin+location.pathname.replace(/[^/]*$/,"");}
 /* ---------- Senden ---------- */
 function senden(){var m=M(),b=overlay();b.appendChild(el("h2",null,"Auf ein anderes Gerät übertragen"));
  if(!m||!m.exportState){b.appendChild(el("p",null,"Die App ist noch nicht bereit. Bitte gleich nochmals versuchen."));return;}
  var info=el("p",null,"Wird vorbereitet …");b.appendChild(info);
  var txt=JSON.stringify(m.exportState());
  Promise.all([packe(txt),qrlib()]).then(function(r){var data=r[0],qr=r[1],n=Math.ceil(data.length/PART);
   if(n>MAXP){info.textContent="Dein Lernstand ist für QR-Codes zu gross ("+n+" Teile). Nutze bitte «Lernstand exportieren» und öffne die Datei auf dem anderen Gerät.";return;}
   var sid=Math.random().toString(36).slice(2,8),urls=[];for(var i=0;i<n;i++)urls.push(basis()+"#geraet/"+sid+"/"+(i+1)+"/"+n+"/"+data.slice(i*PART,(i+1)*PART));window.SKGeraet.teile=urls.length;window.SKGeraet.links=urls;
   info.textContent="Öffne auf dem anderen Gerät die Kamera und scanne die Codes der Reihe nach. Jeder Code öffnet Stoffknacker und meldet, welcher Teil angekommen ist. Die Daten stehen nur in der Adresse nach dem #-Zeichen und gehen an keinen Server.";
   var box=el("div","skg-qr");box.setAttribute("role","img");b.appendChild(box);
   var lab=el("p",null,""),dots=el("div","skg-dots");b.appendChild(lab);b.appendChild(dots);
   for(var d=0;d<n;d++)dots.appendChild(el("i"));
   var row=el("div","skg-row"),zur=el("button","skg-2","Zurück"),vor=el("button",null,"Nächster Code"),zu=el("button","skg-2","Schliessen");row.appendChild(zur);row.appendChild(vor);row.appendChild(zu);b.appendChild(row);
   var k=0;function zeig(){var q=qr(0,"L");q.addData(urls[k],"Byte");q.make();var mc=q.getModuleCount()+8,cell=Math.max(3,Math.floor(Math.min(340,window.innerWidth*0.74)/mc));box.innerHTML=q.createSvgTag(cell,4);box.setAttribute("aria-label","QR-Code Teil "+(k+1)+" von "+n);
    lab.textContent="Code "+(k+1)+" von "+n+(n>1?". Nach dem Scannen «Nächster Code» antippen.":".");
    [].forEach.call(dots.children,function(x,i){x.className=i<k?"on":i===k?"now":"";});zur.disabled=k===0;vor.textContent=k===n-1?"Fertig":"Nächster Code";}
   zur.onclick=function(){if(k>0){k--;zeig();}};vor.onclick=function(){if(k<n-1){k++;zeig();}else document.querySelector(".skg").remove();};zu.onclick=function(){document.querySelector(".skg").remove();};
   zeig();vor.focus();
  }).catch(function(e){info.textContent=String(e&&e.message||e);});}
 /* ---------- Empfangen ---------- */
 function lies(){var h=location.hash.match(/^#geraet\/([a-z0-9]{6})\/(\d{1,2})\/(\d{1,2})\/([A-Za-z0-9_-]+)$/);if(!h)return null;
  var i=+h[2],n=+h[3];if(!(n>=1&&n<=MAXP&&i>=1&&i<=n))return null;return {sid:h[1],i:i,n:n,d:h[4]};}
 function empfang(){var p=lies();if(!p)return;
  try{history.replaceState(null,"",location.pathname+location.search);}catch(e){}
  var key=PFX+p.sid,st;try{st=JSON.parse(localStorage.getItem(key)||"null");}catch(e){st=null;}
  if(!st||st.n!==p.n)st={n:p.n,t:Date.now(),p:{}};st.p[p.i]=p.d;
  try{localStorage.setItem(key,JSON.stringify(st));}catch(e){}
  /* alte, nie abgeschlossene Übertragungen nach einem Tag entfernen */
  try{Object.keys(localStorage).forEach(function(k){if(k.indexOf(PFX)===0&&k!==key){var o=JSON.parse(localStorage.getItem(k)||"{}");if(!o.t||Date.now()-o.t>864e5)localStorage.removeItem(k);}});}catch(e){}
  var da=Object.keys(st.p).length,b=overlay();b.appendChild(el("h2",null,"Lernstand empfangen"));
  var dots=el("div","skg-dots");for(var d=1;d<=st.n;d++){var x=el("i");if(st.p[d])x.className="on";dots.appendChild(x);}
  if(da<st.n){b.appendChild(el("p",null,"Teil "+p.i+" von "+st.n+" ist angekommen ("+da+" von "+st.n+"). Scanne jetzt den nächsten Code auf dem anderen Gerät. Dieses Fenster darfst du schliessen."));b.appendChild(dots);
   var r=el("div","skg-row"),z=el("button","skg-2","Schliessen");z.onclick=function(){document.querySelector(".skg").remove();};r.appendChild(z);b.appendChild(r);return;}
  var info=el("p",null,"Alle "+st.n+" Teile sind da. Der Lernstand wird geprüft …");b.appendChild(info);b.appendChild(dots);
  var data="";for(var j=1;j<=st.n;j++)data+=st.p[j];
  entpacke(data).then(function(text){
   return warte().then(function(m){var v=m.validateImport(text);
    if(!v.ok){info.textContent="Die Übertragung ist unvollständig oder beschädigt: "+(v.errors||[]).join("; ")+". Bitte nochmals senden.";return;}
    var nk=Object.keys(v.data.keys||{}).length;
    info.textContent="Geprüft: "+nk+" Datensätze aus dem anderen Gerät. Vor dem Einlesen legt die App automatisch eine Sicherung dieses Geräts an.";
    var r=el("div","skg-row"),a=el("button",null,"Ersetzen"),g=el("button","skg-2","Zusammenführen"),z=el("button","skg-2","Abbrechen");
    function los(mode){a.disabled=g.disabled=true;var res=m.applyImport(v.data,mode);
     if(res&&res.ok){try{localStorage.removeItem(key);}catch(e){}info.textContent="Übertragen. Die App lädt mit deinem Lernstand neu.";r.remove();setTimeout(function(){location.reload();},1400);}
     else{info.textContent="Nicht übertragen: "+(res&&res.message||"unbekannter Fehler")+". Auf diesem Gerät wurde nichts verändert.";a.disabled=g.disabled=false;}}
    a.onclick=function(){los("replace");};g.onclick=function(){los("merge");};z.onclick=function(){document.querySelector(".skg").remove();};
    r.appendChild(a);r.appendChild(g);r.appendChild(z);b.appendChild(r);
    b.appendChild(el("p",null,"Ersetzen übernimmt den Stand des anderen Geräts. Zusammenführen ergänzt ihn, ohne Vorhandenes zu löschen."));});
  }).catch(function(e){var t=String(e&&e.message||e);info.textContent=/^(Dieser Browser|Die App)/.test(t)?t:"Die Übertragung ist unvollständig oder beschädigt. Bitte die Codes auf dem anderen Gerät nochmals zeigen und neu scannen.";try{localStorage.removeItem(key);}catch(x){}});}
 function warte(){return new Promise(function(ok,no){var t=0;(function f(){var m=M();if(m&&m.validateImport&&m.applyImport)return ok(m);if(++t>80)return no(new Error("Die App ist nicht bereit. Bitte Seite neu laden."));setTimeout(f,125);})();});}
 window.addEventListener("hashchange",empfang);
 if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",empfang);else empfang();
 window.SKGeraet={senden:senden};
 var m=M();if(m)m.geraetSenden=senden;else document.addEventListener("DOMContentLoaded",function(){var m2=M();if(m2)m2.geraetSenden=senden;});
})();
