/* Stoffknacker Fotos (r161): freie Fotos aus Wikimedia Commons, im Browser geladen – erst nach Einwilligung.
   Bildprüfung bei jedem Bild: Lizenz (nur gemeinfrei/CC0/CC BY/CC BY-SA, kein NC/ND, nichts Unfreies), keine Einschränkungen,
   keine Personen, Logos oder Marken, positive Themenübereinstimmung, Mindestgrösse, Seitenverhältnis. Jedes Foto mit Urheber,
   Lizenz und Quelle. Gleiche Technik wie CurveScout (fetch; auf file:// JSONP). Ohne Einwilligung: keine einzige Anfrage. */
(function(){'use strict';
var M=window.MNEMIKA;if(!M||M.__bilder)return;M.__bilder=true;
var KEY='mnemika-bilder-v1',API='https://commons.wikimedia.org/w/api.php',TTL=30*864e5;
function e(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
function txt(h){var d=document.createElement('div');d.innerHTML=String(h||'');return (d.textContent||'').replace(/\s+/g,' ').trim();}

/* Themen: Suchbegriffe (Commons), positive Begriffe (mindestens einer muss im Titel oder in der Beschreibung stehen) */
var T={
 geld:['Swiss franc banknotes','franc|banknote|bank note|CHF|Geldschein|note'],
 muenzen:['Swiss franc coins','coin|franc|Münze|Rappen'],
 sparschwein:['piggy bank coins','piggy|Sparschwein|savings'],
 dokumente:['paperwork documents desk','document|paper|paperwork|Dokument|folder'],
 qr:['QR code','QR'],
 karte:['payment terminal card','payment|terminal|card|contactless'],
 stethoskop:['stethoscope','stethoscope|Stethoskop'],
 apotheke:['pharmacy medicine tablets','pharmacy|medicine|tablet|pill|Apotheke|drug'],
 wohnung:['apartment buildings Zurich','apartment|residential|housing|building|Wohn|Siedlung'],
 schluessel:['house keys','key|Schlüssel'],
 rechner:['calculator','calculator|Taschenrechner'],
 sanduhr:['hourglass','hourglass|Sanduhr|sand glass'],
 brief:['letter envelope post','envelope|letter|mail|Brief|Couvert'],
 kurs:['stock exchange chart','chart|stock|exchange|Börse|graph|candlestick'],
 schloss:['padlock','padlock|lock|Vorhängeschloss'],
 kalender:['wall calendar','calendar|Kalender'],
 laptop:['laptop desk','laptop|notebook computer'],
 schirm:['umbrella rain','umbrella|Regenschirm|Schirm'],
 einkauf:['shopping cart supermarket','shopping|cart|trolley|Einkauf|supermarket'],
 rathaus:['town hall Switzerland','town hall|Rathaus|Gemeindehaus|Stadthaus'],
 buecher:['books library shelves','book|library|Bibliothek|Buch|shelf'],
 velo:['bicycle Switzerland','bicycle|bike|Velo|Fahrrad|cycling'],
 werkzeug:['hand tools workbench','tool|wrench|screwdriver|Werkzeug|workbench'],
 quittung:['receipt paper','receipt|Quittung|Kassenbon|bill'],
 lupe:['magnifying glass','magnif|Lupe|loupe'],
 schere:['scissors','scissors|Schere'],
 hoersaal:['empty lecture hall','lecture|auditorium|Hörsaal|classroom'],
 tafel:['blackboard mathematics','blackboard|chalkboard|equation|formula|Tafel|math'],
 pendel:['pendulum','pendulum|Pendel'],
 labor:['laboratory glassware','glassware|flask|laboratory|beaker|Labor|Erlenmeyer'],
 blatt:['green leaf macro','leaf|Blatt|chlorophyll|plant'],
 bundeshaus:['Federal Palace Bern','Bundeshaus|Federal Palace|Bern'],
 alpen:['Swiss Alps landscape','Alps|Alpen|mountain|Berg|glacier|valley'],
 london:['Westminster Palace London','Westminster|Big Ben|Elizabeth Tower|London'],
 lausanne:['Lausanne Lake Geneva','Lausanne|Lake Geneva|Léman|Genfersee'],
 hafen:['container ship port','container|port|harbour|harbor|Hafen|ship'],
 platine:['printed circuit board','circuit|PCB|Leiterplatte|board'],
 palette:['watercolor paint palette','paint|palette|brush|watercolo|Farbe'],
 puzzle:['jigsaw puzzle pieces','puzzle|jigsaw'],
 notizbuch:['notebook pen','notebook|pen|Notizbuch|journal'],
 woerterbuch:['dictionary book','dictionary|Wörterbuch|lexicon'],
 kompass:['compass','compass|Kompass'],
 mikrofon:['microphone','microphone|Mikrofon|mic'],
 windrad:['wind turbine','wind turbine|Windkraft|turbine|wind farm'],
 lugano:['Lugano lake','Lugano'],
 alhambra:['Alhambra Granada','Alhambra|Granada'],
 forum:['Roman Forum','Forum Romanum|Roman Forum|Foro Romano'],
 engadin:['Engadin landscape','Engadin|Engiadina|St. Moritz|Sils'],
 laufbahn:['running track stadium','track|Laufbahn|athletics|stadium'],
 noten:['sheet music','sheet music|score|Noten|music'],
 theater:['theatre stage empty','theatre|theater|stage|Bühne']};
/* Kuratierte Fotos aus dem Leadership-Kit (07_MEDIA_BUNDLE, Lizenz am 7.11.2026 geprüft): genaue Datei, eigener Alternativtext und Hinweis.
   Laufen trotzdem durch dieselbe Bildprüfung; besteht die Datei nicht, kommt das Fachfoto. */
var KUR={
 'k-elodea':{datei:'File:Chloroplasts_-_Microscopic_view_of_Elodea_canadensis.jpg',gut:'Elodea|Chloroplast',ersatz:'blatt',alt:'Mikroskopische Aufnahme rechteckiger Pflanzenzellen mit grünen Chloroplasten.',hinweis:'Nicht jede Struktur des Zellmodells ist in diesem Bild erkennbar.',kap:['bio-cells','bio-membrane-transport']},
 'k-basalt':{datei:'File:Basalt_(GeoDIL_number_-_455).jpg',gut:'Basalt',ersatz:'alpen',alt:'Dunkles, feinkörniges Basalt-Handstück mit Inventarnummer.',hinweis:'Kein Schweizer Fund: Fundort laut Quelle nahe Vantage, Washington (USA).',kap:['geo-plate-tectonics','geo-endogenic-rocks']},
 'k-cumulus':{datei:'File:Cumulus-humilis.jpg',gut:'Cumulus',ersatz:'alpen',alt:'Flache weisse Quellwolken über einem Horizont.',hinweis:'Ein Wetterfoto zeigt Wetter, kein Klima über eine 30-jährige Normalperiode.',kap:['geo-weather-climate','geo-climate-diagrams']},
 'k-kupfersulfat':{datei:'File:Copper-Sulfate.JPG',gut:'Copper|Sulfate|Kupfer',ersatz:'labor',alt:'Blaue Kristalle von Kupfersulfat-Pentahydrat.',hinweis:'Bildbeobachtung, keine Anleitung zum Experimentieren.',kap:['chem-ionic-metallic','chem-concentration-stoich']}};
Object.keys(KUR).forEach(function(k){T[k]=[KUR[k].datei,KUR[k].gut];});
/* Zuordnung Inhalt → Thema */
/* Sperrliste nach Meldung (Thema oder Dateiname, z. B. {'alpen':true,'File:X.jpg':true}); greift sofort mit dem nächsten Update */
var SPERRE={};
var ZU={'gl-01':'geld','gl-02':'dokumente','gl-03':'qr','gl-04':'sparschwein','gl-05':'stethoskop','gl-06':'apotheke','gl-07':'wohnung','gl-08':'rechner','gl-09':'sanduhr','gl-10':'brief',
 'ga-01':'sparschwein','ga-02':'geld','ga-03':'karte','ga-04':'schluessel','ga-05':'stethoskop','ga-06':'rechner','ga-07':'rechner','ga-08':'sanduhr','ga-09':'muenzen','ga-10':'kurs','ga-11':'schloss','ga-12':'kalender','ga-13':'kurs','ga-14':'muenzen','ga-15':'dokumente','ga-16':'brief','ga-17':'laptop','ga-18':'schluessel','ga-19':'schirm','ga-20':'einkauf','ga-21':'rathaus','ga-22':'schloss','ga-23':'kalender','ga-24':'buecher','ga-25':'velo','ga-26':'werkzeug','ga-27':'quittung','ga-28':'lupe','ga-29':'lupe','ga-30':'kurs','ga-31':'schere','ga-32':'brief','ga-33':'hoersaal','ga-34':'muenzen',
 math:'tafel',physics:'pendel',chemistry:'labor',biology:'blatt',history:'bundeshaus',geography:'alpen',german:'buecher',english:'london',french:'lausanne',economics:'hafen',accounting:'rechner',informatics:'platine',arts:'palette',social:'puzzle',projects:'notizbuch',languages:'woerterbuch',orientation:'kompass',communication:'mikrofon',technology:'windrad',italian:'lugano',spanish:'alhambra',latin:'forum',romansh:'engadin',sport:'laufbahn',music:'noten',theatre:'theater'};

/* ── Bildprüfung ── */
var LIZ=/^(cc0|cc[- ]zero|public domain|pd\b|pd-|cc[- ]by([- ]sa)?[- ]?(1\.0|2\.0|2\.5|3\.0|4\.0)?( [a-z]{2,})?$)/i;
var BAD=/\b(portrait|porträt|selfie|people|person|personen|man|men|woman|women|girl|boy|child|children|kid|kinder|frau|mann|face|gesicht|crowd|menschen|family|wedding|nude|naked|erotic|weapon|waffe|gun|blood|corpse|war|krieg|logo|trademark|®|™|advert|werbung|screenshot|meme|cartoon|drawing|diagram|map|karte von|flag|coat of arms|wappen|signature|unterschrift|id card|passport|ausweis|credit card number)\b/i;
function pruefe(p,thema){
 var ii=(p.imageinfo||[])[0];if(!ii)return {ok:false,grund:'ohne Bildangaben'};
 var x=ii.extmetadata||{},lic=txt(x.LicenseShortName&&x.LicenseShortName.value),titel=String(p.title||''),besch=txt(x.ImageDescription&&x.ImageDescription.value),
  autor=txt(x.Artist&&x.Artist.value)||txt(x.Credit&&x.Credit.value),rest=txt(x.Restrictions&&x.Restrictions.value),unfrei=String(x.NonFree&&x.NonFree.value||'').toLowerCase()==='true';
 if(!/^image\/(jpeg|png|webp)$/.test(ii.mime||''))return {ok:false,grund:'Dateityp'};
 if(unfrei)return {ok:false,grund:'unfrei'};
 if(!lic||!LIZ.test(lic.replace(/\s+/g,' ').trim())||/\b(nc|nd)\b/i.test(lic))return {ok:false,grund:'Lizenz '+(lic||'unbekannt')};
 if(rest)return {ok:false,grund:'Einschränkung ('+rest.slice(0,40)+')'};
 var w=ii.width||0,h=ii.height||1,r=w/h;if(w<800)return {ok:false,grund:'zu klein'};if(r<1.0||r>2.4)return {ok:false,grund:'Seitenverhältnis'};
 var hay=titel+' '+besch;if(BAD.test(hay))return {ok:false,grund:'Inhalt (Person/Marke/Unpassendes)'};
 var gut=new RegExp('('+thema[1]+')','i');if(!gut.test(hay))return {ok:false,grund:'Thema nicht erkennbar'};
 if(!autor&&!/public domain|cc0|pd/i.test(lic))return {ok:false,grund:'Urheber fehlt'};
 var score=(gut.test(titel)?3:1)+(w>=1600?1:0)+(/cc0|public domain/i.test(lic)?1:0)+(r>=1.3&&r<=1.8?1:0);
 return {ok:true,score:score,bild:{titel:titel.replace(/^File:/,''),url:ii.thumburl||ii.url,seite:ii.descriptionurl||('https://commons.wikimedia.org/wiki/'+encodeURIComponent(titel)),lizenz:lic,lizenzUrl:txt(x.LicenseUrl&&x.LicenseUrl.value),autor:autor||'unbekannt (gemeinfrei)',alt:besch.slice(0,180)||titel.replace(/^File:|\.\w+$/g,''),b:w,h:h}};
}

/* ── Speicher (nur Einwilligung und Prüfergebnisse, keine Bilder) ── */
function lies(){try{var o=JSON.parse(localStorage.getItem(KEY)||'null');if(o&&o.v===1&&o.themen&&typeof o.themen==='object'){if(!o.aus||typeof o.aus!=='object')o.aus={};return o;}}catch(x){}return {v:1,ok:null,themen:{},aus:{}};}
function sichere(o){try{localStorage.setItem(KEY,JSON.stringify(o));}catch(x){}}
function einwilligung(){return lies().ok;}
var bildGeneration=0;
/* r161 (Audit R161A-04): Widerruf macht laufende Anfragen ungültig; ihre Antworten werden weder gespeichert noch angezeigt. */
function setzeEinwilligung(j){bildGeneration++;var o=lies();o.ok=!!j;o.d=new Date().toISOString().slice(0,10);if(!j)o.themen={};lauf={};sichere(o);malAlle();}

/* ── Laden: fetch über http(s), JSONP auf file:// ── */
var lauf={};
/* Selbst gespeicherte, beim Hochladen geprüfte Fotos (assets/fotos/fotos.json mit SHA-256-Quittung). Sind sie da,
   zeigt Stoffknacker sie ohne Anfrage an Dritte und ohne Einwilligungsfrage. Sonst gilt das Laden aus Wikimedia nach Einwilligung. */
var LOKAL=null,lokalLaden=null;
function lokal(){if(lokalLaden)return lokalLaden;if(!/^https?:$/.test(location.protocol))return (lokalLaden=Promise.resolve(null));
 lokalLaden=fetch('assets/fotos/fotos.json',{cache:'no-cache',credentials:'omit'}).then(function(r){return r.ok?r.json():null;}).then(function(d){LOKAL=d&&d.themen&&typeof d.themen==='object'&&Object.keys(d.themen).some(function(k){return d.themen[k]&&d.themen[k].datei;})?d:null;return LOKAL;}).catch(function(){return null;});return lokalLaden;}
function lokalBild(thema){var t=LOKAL&&LOKAL.themen[thema];if(!t||!t.datei||!/^[a-z0-9-]+\.(jpg|png|webp)$/.test(t.datei)||SPERRE['File:'+t.titel])return null;
 return {t:1,thema:thema,lokal:true,geprueft:t.geprueft,abgelehnt:t.abgelehnt||{},bild:{titel:t.titel,url:'assets/fotos/'+t.datei+'?v='+encodeURIComponent(String(t.sha256||'')),seite:t.seite,lizenz:t.lizenz,lizenzUrl:t.lizenzUrl,autor:t.autor,alt:(KUR[thema]&&KUR[thema].alt)||t.alt,hinweis:KUR[thema]&&KUR[thema].hinweis,b:t.b,h:t.h,sha256:t.sha256}};}
function url(q){if(/^File:/.test(q))return API+'?action=query&format=json&titles='+encodeURIComponent(q)+'&prop=imageinfo&iiprop=url|size|mime|extmetadata&iiurlwidth=960';return API+'?action=query&format=json&generator=search&gsrnamespace=6&gsrlimit=24&gsrsearch='+encodeURIComponent(q+' filetype:bitmap')+'&prop=imageinfo&iiprop=url|size|mime|extmetadata&iiurlwidth=960';}
function hole(q){
 if(location.protocol==='file:')return new Promise(function(ok,nein){var cb='__mnBild'+Date.now().toString(36)+Math.random().toString(36).slice(2,6),s=document.createElement('script'),t=setTimeout(function(){fertig();nein(new Error('Zeit'));},12000);
  function fertig(){clearTimeout(t);try{delete window[cb];}catch(x){window[cb]=undefined;}s.remove();}
  window[cb]=function(d){fertig();ok(d);};s.src=url(q)+'&callback='+cb;s.onerror=function(){fertig();nein(new Error('Netz'));};document.head.appendChild(s);});
 return fetch(url(q)+'&origin=*',{credentials:'omit',referrerPolicy:'no-referrer'}).then(function(r){if(!r.ok)throw new Error('HTTP '+r.status);return r.json();});
}
function waehle(thema){
 if(einwilligung()!==true)return Promise.resolve(null);var gen=bildGeneration;
 var o=lies(),c=o.themen[thema];if(c&&c.t&&Date.now()-c.t<TTL)return Promise.resolve(c);
 if(lauf[thema])return lauf[thema];var def=T[thema];if(!def)return Promise.resolve(null);
 lauf[thema]=hole(def[0]).then(function(d){
  if(gen!==bildGeneration||einwilligung()!==true||weg(thema))return null;
  var pages=d&&d.query&&d.query.pages?Object.keys(d.query.pages).map(function(k){return d.query.pages[k];}):[],gruende={},beste=null;
  pages.sort(function(a,b){return (a.index||0)-(b.index||0);}).forEach(function(p){if(SPERRE[p.title]){gruende['gesperrt']=(gruende['gesperrt']||0)+1;return;}var r=pruefe(p,def);if(!r.ok){var g=r.grund.replace(/ \(.*$/,'').replace(/^Lizenz .*/,'Lizenz');gruende[g]=(gruende[g]||0)+1;return;}if(!beste||r.score>beste.score)beste=r;});
  if(beste&&KUR[thema]){beste.bild.alt=KUR[thema].alt;beste.bild.hinweis=KUR[thema].hinweis;}
  var erg={t:Date.now(),thema:thema,suche:def[0],geprueft:pages.length,abgelehnt:gruende,bild:beste?beste.bild:null,kuratiert:!!KUR[thema]};
  var o2=lies();o2.themen[thema]=erg;sichere(o2);delete lauf[thema];return erg;
 }).catch(function(err){delete lauf[thema];return {t:0,thema:thema,fehler:String(err&&err.message||err)};});
 return lauf[thema];
}

/* ── Darstellung ── */
function frageHtml(){return '<div class="bi-frage"><b>📷 Fotos zum Thema anzeigen?</b><p>Die Fotos kommen aus Wikimedia Commons (freie Lizenzen, jedes mit Urheber und Lizenz). Beim Laden überträgt dein Browser deine IP-Adresse an die Wikimedia Foundation (USA). Du kannst das jederzeit wieder ausschalten.</p><div><button type="button" class="bi-btn bi-ja" data-bi="ja">Fotos anzeigen</button><button type="button" class="bi-btn" data-bi="nein">Nein, danke</button></div></div>';}
function bildHtml(r){var b=r.bild;return '<img src="'+e(b.url)+'" alt="'+e(b.alt)+'" loading="lazy" decoding="async" referrerpolicy="no-referrer" width="'+b.b+'" height="'+b.h+'"><figcaption>'+(b.hinweis?'<span class="bi-hinweis">'+e(b.hinweis)+'</span> ':'')+'Foto: '+e(b.autor)+' · <a href="'+e(b.lizenzUrl||b.seite)+'" target="_blank" rel="noopener noreferrer license">'+e(b.lizenz)+'</a> · <a href="'+e(b.seite)+'" target="_blank" rel="noopener noreferrer">Wikimedia Commons</a> · <button type="button" class="bi-link" data-bi="audit">Bildprüfung</button> · <button type="button" class="bi-link" data-bi="weg">Dieses Foto ausblenden</button> · <button type="button" class="bi-link" data-bi="nein">Fotos aus</button></figcaption>';}
function fuelle(fig){
 var thema=fig.dataset.thema;if(weg(thema)||einwilligung()===false){fig.hidden=true;fig.innerHTML='';return;}
 lokal().then(function(){if(!fig.isConnected)return;if(weg(thema)||einwilligung()===false){fig.hidden=true;fig.innerHTML='';return;}var r=lokalBild(thema)||(KUR[thema]&&lokalBild(KUR[thema].ersatz));
  if(r){fig.hidden=false;fig.classList.remove('bi-laedt');fig.innerHTML=bildHtml(r);var im=fig.querySelector('img');im.onerror=function(){fig.innerHTML='';fig.hidden=true;};return;}
  if(LOKAL){fig.hidden=true;fig.innerHTML='';return;} /* r161 (Audit R161A-03): mit Bildliste nur die festen, geprüften Dateien, keine Suche zur Laufzeit */
  fuelleFern(fig);});
}
function fuelleFern(fig){
 var gen=bildGeneration;var thema=fig.dataset.thema,ok=einwilligung();if(weg(thema)||ok===false){fig.hidden=true;fig.innerHTML='';return;}
 fig.hidden=false;
 if(ok===null){if(!document.querySelector('.bi-fig .bi-frage')||fig.querySelector('.bi-frage'))fig.innerHTML=frageHtml();else fig.hidden=true;return;}
 fig.classList.add('bi-laedt');fig.innerHTML='<div class="bi-platz" aria-hidden="true"></div>';
 waehle(thema).then(function(r){return (r&&r.bild)||!KUR[thema]?r:waehle(KUR[thema].ersatz);}).then(function(r){if(!fig.isConnected||gen!==bildGeneration||einwilligung()!==true||weg(thema))return;fig.classList.remove('bi-laedt');
  if(r&&r.bild){fig.innerHTML=bildHtml(r);var im=fig.querySelector('img');im.onerror=function(){fig.hidden=true;};}
  else{fig.hidden=true;fig.innerHTML='';}});
}
function weg(thema){return !!(SPERRE[thema]||lies().aus[thema]);}
function figur(thema,klasse){if(!thema||!T[thema]||weg(thema))return '';if(einwilligung()===false)return '';return '<figure class="bi-fig '+(klasse||'')+'" data-thema="'+thema+'"></figure>';}
function malAlle(root){[].forEach.call((root||document).querySelectorAll('figure.bi-fig[data-thema]'),fuelle);}
function themaFuer(id){if(ZU[id])return ZU[id];var m=String(id||'').match(/^(ga-\d\d)/);return m&&ZU[m[1]]?ZU[m[1]]:null;}

/* Einfügen: Lektion (Schule fürs Leben) und Kapitel-Leseansicht */
function lektion(){var lp=document.getElementById('lp');if(!lp||!lp.classList.contains('lf'))return;var S=M.lifeV7&&M.lifeV7._zustand&&M.lifeV7._zustand();if(!S)return;var x=S.st[S.i];
 if(!x||(x.t!=='einstieg'&&x.t!=='v6-einstieg'))return;var inh=lp.querySelector('.lp-inhalt');if(!inh||inh.querySelector('.bi-fig'))return;
 var th=themaFuer(S.l.id)||themaFuer(S.l.module_id);if(!th)return;var t=lp.querySelector('.lp-titel');if(!t)return;
 t.insertAdjacentHTML('afterend',figur(th,'bi-lektion'));malAlle(inh);}
function kapitel(cid){var v=document.getElementById('v-read');if(!v||v.hidden||v.querySelector('.bi-fig'))return;var c=M.chapter&&M.chapter(cid);if(!c)return;var th=null;Object.keys(KUR).forEach(function(k){if(!th&&KUR[k].kap.indexOf(cid)>=0)th=k;});th=th||ZU[c.subject];if(!th)return;
 var h=v.querySelector('h1');if(!h)return;var ziel=(h.parentElement&&h.parentElement.querySelector('.heroacts'))||h;ziel.insertAdjacentHTML('afterend',figur(th,'bi-kapitel'));malAlle(v);}
function krume(){var n=document.querySelector('#mn-where [aria-current=page]');var t=n&&n.textContent.trim(),N={bilder:'Bildprüfung',motor:'Lernmotor',proof:'Bestand und Prüfstatus'};if(t&&N[t])n.textContent=N[t];}
new MutationObserver(function(){lektion();krume();}).observe(document.documentElement,{childList:true,subtree:true});
var go0=M.go;if(typeof go0==='function'&&!go0.__bi){var w=function(v,a1){if(v==='bilder')auditMal();var r=go0.apply(this,arguments);if(v==='read'){setTimeout(function(){kapitel(a1);},60);setTimeout(function(){kapitel(a1);},500);}if(v==='bilder')setTimeout(function(){var n=document.querySelector('#mn-where [aria-current=page]');if(n)n.textContent='Bildprüfung';},20);return r;};w.__bi=true;w.__lf=go0.__lf;w.__mo=go0.__mo;for(var k in go0)if(!(k in w))w[k]=go0[k];M.go=w;}

/* ── Bildprüfung als Ansicht (#bilder) ── */
function auditMal(){var v=document.getElementById('v-bilder');if(!v)return;if(!lokalLaden){lokal().then(auditMal);}var o=lies(),themen=Object.keys(T),nL=themen.filter(function(t){return !!lokalBild(t);}).length;
 v.className='view bi-view';
 v.innerHTML='<header class="mo-kopf"><p class="mo-kick">BILDPRÜFUNG</p><h1>Woher die Fotos kommen</h1><p>Jedes Foto wird vor dem Anzeigen automatisch geprüft: freie Lizenz (gemeinfrei, CC0, CC BY oder CC BY-SA; nichts mit NC oder ND), keine Einschränkungen, keine Hinweise auf Personen, Logos oder Marken in Titel und Beschreibung, erkennbares Thema, genügend Grösse. Die Prüfung liest diese Angaben und das Dateiformat; sie ersetzt keine Sichtprüfung durch einen Menschen. Veröffentlicht werden festgelegte, auf Stoffknacker gespeicherte Bilddateien mit Quittung. Urheber und Lizenz stehen unter jedem Foto.</p>'
  +(nL?'<p class="bi-lokal"><b>'+nL+' von '+themen.length+' Themen</b> haben ein geprüftes Foto, das auf Stoffknacker selbst gespeichert ist (Stand '+e(LOKAL.erstellt||'')+', jede Datei mit SHA-256-Quittung). Diese Fotos laden ohne Anfrage an Dritte.</p>':'')
  +(function(){var an=o.ok===true||(nL&&o.ok!==false);return '<p><b>Status:</b> '+(o.ok===false?'Fotos ausgeschaltet':o.ok===true?'Fotos eingeschaltet':nL?'gespeicherte Fotos sichtbar; Laden aus Wikimedia noch nicht erlaubt':'noch nicht entschieden')+' · <button type="button" class="bi-btn'+(an?'':' bi-ja')+'" data-bi="'+(an?'nein':'ja')+'">'+(an?'Fotos ausschalten':'Fotos einschalten')+'</button>';})()+(o.ok?' <button type="button" class="bi-btn" data-bi="alle">Alle Themen jetzt prüfen</button>':'')+'</p></header>'
  +'<div class="bi-tab"><table><thead><tr><th>Thema</th><th>Foto</th><th>Lizenz und Urheber</th><th>geprüft / abgelehnt</th></tr></thead><tbody>'
  +themen.map(function(t){var L=lokalBild(t),r=L||o.themen[t];return '<tr><td><b>'+e(t)+'</b><br><small>'+e(T[t][0])+'</small></td><td>'+(r&&r.bild&&o.ok!==false&&!weg(t)&&(L||o.ok)?'<img src="'+e(r.bild.url)+'" alt="'+e(r.bild.alt)+'" loading="lazy" referrerpolicy="no-referrer">':'–')+'</td><td>'+(r&&r.bild?'<a href="'+e(r.bild.seite)+'" target="_blank" rel="noopener noreferrer">'+e(r.bild.titel)+'</a><br>'+e(r.bild.lizenz)+' · '+e(r.bild.autor)+(L?'<br><small>auf Stoffknacker gespeichert · SHA-256 '+e(String(L.bild.sha256||'').slice(0,12))+'…</small>':''):r&&r.fehler?'nicht erreichbar ('+e(r.fehler)+')':r?'kein Foto bestand die Prüfung':'noch nicht geprüft')+(SPERRE[t]?'<br><b>gesperrt</b>':o.aus[t]?'<br><b>von dir ausgeblendet</b> <button type="button" class="bi-link" data-bi="zeig" data-t="'+e(t)+'">wieder zeigen</button>':'')+'</td><td>'+(r&&r.geprueft!=null?r.geprueft+' / '+Object.keys(r.abgelehnt||{}).reduce(function(s,k){return s+r.abgelehnt[k];},0)+'<br><small>'+Object.keys(r.abgelehnt||{}).map(function(k){return e(k)+': '+r.abgelehnt[k];}).join(', ')+'</small>':'')+'</td></tr>';}).join('')+'</tbody></table></div>'
  +'<p class="mo-klein">Die Auswahl läuft automatisch nach diesen Regeln. Meldung eines unpassenden Fotos: Unter jedem Foto «Dieses Foto ausblenden» (wirkt sofort auf diesem Gerät) oder Meldung über den Kontakt im Impressum; das Thema oder die Datei wird dann für alle gesperrt.</p>';}
function zeigeAudit(){auditMal();try{M.go('bilder');}catch(x){}var v=document.getElementById('v-bilder');if(v&&v.hidden){[].forEach.call(document.querySelectorAll('main > .view'),function(s){s.hidden=s!==v;});}window.scrollTo(0,0);}

document.addEventListener('click',function(ev){var b=ev.target.closest&&ev.target.closest('[data-bi]');if(!b)return;ev.preventDefault();ev.stopPropagation();var a=b.dataset.bi;
 if(a==='ja')setzeEinwilligung(true);else if(a==='nein')setzeEinwilligung(false);
 else if(a==='audit'){var mp=document.getElementById('menupop');if(mp&&mp.contains(b))mp.hidden=true;var lp=document.getElementById('lp');if(lp&&!lp.hidden&&M.lifeV7){M.lifeV7.schliesse();setTimeout(zeigeAudit,150);setTimeout(zeigeAudit,450);}else zeigeAudit();return;}
 else if(a==='weg'){var f=b.closest('figure[data-thema]');if(f){var o=lies();o.aus[f.dataset.thema]=1;sichere(o);f.hidden=true;f.innerHTML='';}return;}
 else if(a==='zeig'){var o2=lies();delete o2.aus[b.dataset.t];sichere(o2);auditMal();return;}
 else if(a==='alle'){Promise.all(Object.keys(T).map(waehle)).then(auditMal);return;}
 if(document.getElementById('v-bilder')&&!document.getElementById('v-bilder').hidden)auditMal();},true);

var CSS='.bi-fig{margin:10px 0 14px;border-radius:16px;overflow:hidden;background:#f3f1ea;border:1px solid #e5e7eb}.bi-fig img{display:block;width:100%;height:auto;max-height:260px;object-fit:cover}.bi-kapitel img{max-height:220px}'
 +'.bi-hinweis{display:block;font-style:italic;color:#374151;margin-bottom:2px}.bi-fig figcaption{font-size:12px;color:#4b5563;padding:6px 10px;line-height:1.4}.bi-fig figcaption a,.bi-link{color:#1d3a8a}.bi-link{background:none;border:0;padding:0;font:inherit;text-decoration:underline;cursor:pointer}'
 +'.bi-platz{height:180px;background:linear-gradient(90deg,#efece4,#f8f6f0,#efece4);background-size:200% 100%;animation:bi-glanz 1.4s linear infinite}@keyframes bi-glanz{to{background-position:-200% 0}}html.lf-ruhig .bi-platz{animation:none}'
 +'.bi-frage{padding:14px 16px}.bi-frage p{margin:6px 0 10px;font-size:14px;color:#374151}.bi-frage div{display:flex;flex-wrap:wrap;gap:8px}'
 +'.bi-btn{min-height:42px;padding:8px 14px;border-radius:12px;border:2px solid #cbd5e1;background:#fff;font:inherit;font-weight:700;color:#1b2333;cursor:pointer}.bi-ja{background:#58cc02;border-color:#46a302;color:#0B1220}.bi-btn:focus-visible,.bi-link:focus-visible{outline:3px solid #1d4ed8;outline-offset:2px}'
 +'.bi-lokal{padding:10px 12px;border-radius:12px;background:#ecfdf5;border:1px solid #a7f3d0}.bi-tab{overflow-x:auto;background:#fff;border:1px solid #e5e7eb;border-radius:16px}.bi-tab table{border-collapse:collapse;width:100%;font-size:13.5px;min-width:620px}.bi-tab th,.bi-tab td{padding:8px;border-bottom:1px solid #eef0f3;text-align:left;vertical-align:top}.bi-tab img{width:120px;height:80px;object-fit:cover;border-radius:8px}';
(function(){if(document.getElementById('bi-css'))return;var s=document.createElement('style');s.id='bi-css';s.textContent=CSS;(document.head||document.documentElement).appendChild(s);})();
M.bilder={sperre:SPERRE,pruefe:pruefe,waehle:waehle,figur:figur,themen:T,zuordnung:ZU,einwilligung:einwilligung,setzeEinwilligung:setzeEinwilligung,audit:zeigeAudit,_url:url};
function start(){if(/^#bilder/.test(location.hash)){auditMal();setTimeout(auditMal,60);}}
window.addEventListener('hashchange',function(){if(/^#bilder/.test(location.hash))setTimeout(auditMal,0);});
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else setTimeout(start,0);
})();
