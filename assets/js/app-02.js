
/* R155: Startsequenz. Nur beim ersten Besuch (R156), überspringbar (Klick, Taste), bei reduzierter Bewegung aus. Die App startet darunter ungebremst. */
(function(){var el=document.getElementById('mn-intro');if(!el)return;
 var K='mnemika-intro-gesehen',seen=false,rm=false;
 try{seen=window.sessionStorage.getItem(K)==='1';window.sessionStorage.setItem(K,'1');}catch(e){}
 /* r161: das Intro kommt beim ersten Besuch und wieder, wenn die App länger als 3 Stunden nicht benutzt wurde.
    Der Schlüssel bleibt gleich; er speichert jetzt den Zeitpunkt der letzten Nutzung (alter Wert «1» = lange her). */
 var neu=true,PAUSE=3*3600*1000;
 function merke(){try{window.localStorage.setItem(K,String(Date.now()));}catch(e){}}
 try{var v=window.localStorage.getItem(K);if(v!==null){neu=false;var t=+v;if(v!=='1'&&t>0&&Date.now()-t<PAUSE)seen=true;}}catch(e){}
 merke();try{document.addEventListener('visibilitychange',function(){if(document.visibilityState==='hidden')merke();});window.addEventListener('pagehide',merke);setInterval(function(){if(document.visibilityState!=='hidden')merke();},60000);}catch(e){}
 try{rm=window.matchMedia('(prefers-reduced-motion: reduce)').matches;}catch(e){}
 /* R157: beim ersten Besuch folgt die 20-Sekunden-Erklärung (erklaer157.js) */
 function done(){document.removeEventListener('keydown',skip,true);if(el.parentNode)el.parentNode.removeChild(el);if(neu){window.MNEMIKA_ERKLAER_JETZT=1;try{if(window.mnErklaer)window.mnErklaer.start();}catch(e){}}}
 /* Lädt das Skript erst nach dem Ende der CSS-Zeitachse, ist die Ebene schon unsichtbar: dann nur aufräumen */
 var fertig=false;try{fertig=window.getComputedStyle(el).visibility==='hidden';}catch(e){}
 if(seen||rm||fertig){done();return;}
 function skip(){if(!el.classList.contains('mi-out'))el.classList.add('mi-out');}
 el.addEventListener('animationend',function(ev){if(ev.target===el&&ev.animationName==='mi-exit')done();});
 el.addEventListener('click',skip);document.addEventListener('keydown',skip,true);
 window.MNEMIKA_INTRO={skip:skip,key:K};
})();
