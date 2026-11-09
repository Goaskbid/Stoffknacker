/* Schule fürs Leben (freiwilliger Zusatzbereich, v7). Lädt Kern, 10 Grundlagen und den eigenen Spieler beim Start (klein),
   die 168 Vertiefungen und die Werkstatt (Rechner, Selbstchecks) erst bei Bedarf.
   Eigener Speicher; keine Wirkung auf Abschluss, Fortschritt, Empfehlungen, Wiederholungen oder Prüfungen.
   Öffnen: Startseiten-Karte, Menü «Schule fürs Leben», MNEMIKA.life.open(id) oder ?life=<Lektions-ID>. */
(function(){'use strict';
 var M=window.MNEMIKA;if(!M)return;
 var DATEIEN=[['life-core.js','0d515cc8b8'],['life-basics.js','579403a069'],['life-player.js','38d7dfcba2'],['life-pack.js','376fc600a3'],['life-view.js','871e2ea2c3'],['life-bridge.js','4d66c5a3f9'],['motor.js','61aa5adbde'],['lernkit.js','8becd337ef'],['lernkit-daten.js','f7856b5737'],['vertiefung.js','0e7d47c839'],['lesen.js','616b6755e7'],['bilder.js','f1a7abe3a1']];
 function v(n){for(var i=0;i<DATEIEN.length;i++)if(DATEIEN[i][0]===n)return DATEIEN[i][1];return '';}
 M.__lifePackV=v('life-pack.js');M.__lkV=v('lernkit-daten.js');
 function skript(src){return new Promise(function(ok,nein){var s=document.createElement('script');s.src='assets/js/'+src+'?v='+v(src);s.async=false;s.onload=ok;s.onerror=function(){s.remove();nein(new Error(src));};document.head.appendChild(s);});}
 function reihe(liste){return liste.reduce(function(k,d){return k.then(function(){return skript(d);});},Promise.resolve());}
 /* 1. Sofort: Kern, Grundlagen, Spieler (in der Einzeldatei schon eingebettet) */
 if(!(window.MnemikaLifeCore&&window.MNEMIKA_LIFE_BASICS&&M.lifeV7))reihe(['life-core.js','life-basics.js','life-player.js']).catch(function(){});
 /* r161: Lernmotor */
 if(!M.motor)reihe(['motor.js']).catch(function(){});
 /* r161: freie Fotos mit Bildprüfung */
 if(!M.bilder)reihe(['bilder.js']).catch(function(){});
 /* r161: Lernwege aus dem Leadership-Kit (Daten erst beim Öffnen) */
 if(!M.lernwege)reihe(['lernkit.js']).catch(function(){});
 /* r161: Kapitel straffen (Zusatzschichten aufklappbar) */
 if(!M.lesen161)reihe(['lesen.js']).catch(function(){});
 if(!M.__vt161)reihe(['vertiefung.js']).catch(function(){});
 /* Load validation dependencies only: no exercise, write or grading during import. */
 var importReady = Promise.resolve();
 M.prepareImportModules = function(text) {
  var data;try{data=JSON.parse(text);}catch(e){return Promise.resolve();}
  var keys=data&&data.keys&&typeof data.keys==='object'?Object.keys(data.keys):[];
  importReady=importReady.catch(function(){}).then(function(){
   var need=[];
   if(keys.indexOf('mnemika-life-v7')>=0&&!M.lifeV7){if(!window.MnemikaLifeCore)need.push('life-core.js');if(!window.MNEMIKA_LIFE_BASICS)need.push('life-basics.js');need.push('life-player.js');}
   if(keys.indexOf('mnemika-motor-v1')>=0&&!M.motor)need.push('motor.js');
   if(keys.indexOf('mnemika-life-v2')>=0){if(!window.MnemikaLifeCore&&need.indexOf('life-core.js')<0)need.push('life-core.js');if(!window.MNEMIKA_LIFE_PACK)need.push('life-pack.js');}
   return reihe(need);
  });return importReady;
 };
 /* 2. Werkstatt (alte Ansicht mit Rechnern und Selbstchecks) nur auf Wunsch */
 var werk=null;
 M.__lifeTools=function(){
  if(!werk){var da=window.MnemikaLifeView&&window.MnemikaLifeBridge&&window.MNEMIKA_LIFE_PACK;
   werk=(da?Promise.resolve():reihe([window.MNEMIKA_LIFE_PACK?null:'life-pack.js','life-view.js','life-bridge.js'].filter(Boolean)))
    .then(function(){if(M.life&&M.life.__lader)delete M.life;return window.MnemikaLifeBridge.install(window.MNEMIKA_LIFE_PACK,{launcher:false});});
   werk.catch(function(){werk=null;});}
  return werk.then(function(api){api.open();return api;}).catch(function(){var b=document.querySelector('[data-life-tools] b');if(b)b.textContent='Werkstatt lädt nur mit Internet. Bitte später erneut tippen.';});
 };
 if(!M.life)M.life={version:'7.0.0-lader',__lader:true,open:function(id){if(M.lifeV7){M.lifeV7.oeffne(id);return Promise.resolve(M.life);}return Promise.reject(new Error('noch nicht geladen'));}};
})();
