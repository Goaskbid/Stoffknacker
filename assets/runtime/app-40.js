/* r202 Klassencode: Lehrpersonen verschicken einen Link mit ?klasse=…; nach der Übung erzeugt das Gerät
   einen Ergebnis-Code, den die lernende Person selbst kopiert und weitergibt. Nichts wird gesendet oder
   gespeichert ausser dem Klassennamen in dieser Sitzung. Hört nur auf das bestehende Signal
   «Stoffknacker:testfertig»; kein bestehendes Modul wird verändert. */
(function(){
 "use strict";
 var KEY="sk-klasse",LINK="sk-klasse-link";
 function clean(s,n){return String(s||"").replace(/[<>"'`\\]/g,"").replace(/\s+/g," ").trim().slice(0,n);}
 try{
  var q=new URLSearchParams(location.search),k=clean(q.get("klasse"),40);
  if(k){sessionStorage.setItem(KEY,k);if(location.hash)sessionStorage.setItem(LINK,clean(location.hash.slice(1),120));}
 }catch(e){}
 function klasse(){try{return sessionStorage.getItem(KEY)||"";}catch(e){return "";}}
 function b64(s){return btoa(unescape(encodeURIComponent(s))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");}
 function pruef(s){var h=7;for(var i=0;i<s.length;i++)h=(h*31+s.charCodeAt(i))%1679616;return h.toString(36).toUpperCase();}
 function code(d){var j=b64(JSON.stringify(d));return "SK1-"+j+"-"+pruef(j);}
 function heute(){var t=new Date();return t.getFullYear()+"-"+String(t.getMonth()+1).padStart(2,"0")+"-"+String(t.getDate()).padStart(2,"0");}
 var css=".skk{margin:18px auto 0;max-width:560px;border:2px solid currentColor;border-radius:14px;padding:14px 16px;text-align:left;display:grid;gap:8px}"+
  ".skk h3{margin:0;font-size:1.05rem}.skk p{margin:0;font-size:.92rem;opacity:.85}.skk label{font-size:.85rem;font-weight:600}"+
  ".skk input{font:inherit;padding:8px 10px;border-radius:8px;border:1px solid #9aa3ad;width:100%;box-sizing:border-box;color:inherit;background:transparent}"+
  ".skk code{display:block;word-break:break-all;font-size:.8rem;padding:8px 10px;border-radius:8px;border:1px dashed #9aa3ad;user-select:all}"+
  ".skk button{font:inherit;font-weight:700;padding:10px 14px;border-radius:10px;border:0;cursor:pointer;background:#1f6feb;color:#fff;justify-self:start}"+
  ".skk button:focus-visible{outline:3px solid #f2b705;outline-offset:2px}";
 function stil(){if(document.getElementById("sk-r202-klasse"))return;var s=document.createElement("style");s.id="sk-r202-klasse";s.textContent=css;document.head.appendChild(s);}
 function zeige(ev){
  var k=klasse(),d=ev&&ev.detail||{};if(!k||!d.el||!d.el.appendChild)return;
  stil();var alt=d.el.querySelector(".skk");if(alt)alt.remove();
  var link="";try{link=sessionStorage.getItem(LINK)||"";}catch(e){}
  var box=document.createElement("section");box.className="skk";box.setAttribute("aria-label","Ergebnis für Deine Lehrperson");
  box.innerHTML='<h3>Ergebnis für Deine Lehrperson</h3><p>Klasse: <b></b>. Der Code bleibt auf Deinem Gerät, bis Du ihn selbst kopierst und weitergibst.</p>'+
   '<label for="skk-name">Vorname oder Kürzel (freiwillig)</label><input id="skk-name" maxlength="30" autocomplete="off">'+
   '<code></code><button type="button">Code kopieren</button><p class="skk-ok" aria-live="polite"></p>';
  box.querySelector("b").textContent=k;
  var inp=box.querySelector("input"),out=box.querySelector("code"),ok=box.querySelector(".skk-ok");
  function neu(){out.textContent=code({v:1,k:k,n:clean(inp.value,30),l:link,m:String(d.mode||""),p:Math.max(0,Math.min(100,Math.round(+d.pct||0))),d:heute()});}
  inp.addEventListener("input",neu);neu();
  box.querySelector("button").addEventListener("click",function(){var t=out.textContent;
   function sel(){var r=document.createRange();r.selectNodeContents(out);var s=getSelection();s.removeAllRanges();s.addRange(r);ok.textContent="Code markiert. Jetzt kopieren und Deiner Lehrperson senden.";}
   if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(t).then(function(){ok.textContent="Kopiert. Füge den Code in die Nachricht an Deine Lehrperson ein.";},sel);else sel();});
  d.el.appendChild(box);
 }
 window.addEventListener("Stoffknacker:testfertig",zeige);
 window.addEventListener("Stoffknacker:rundefertig",zeige);
 window.SKKlasse={code:code,pruef:pruef};
})();
