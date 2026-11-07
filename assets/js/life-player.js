/* Schule fürs Leben v7 · eigener Spieler im Lernpfad-Look, Übersicht (#v-leben), Startseiten-Karte, Ton und Vibration.
   Speichert nur unter «mnemika-life-v7». Kein Einfluss auf Abschluss, Fortschritt, Wiederholungen oder Prüfungen. */
(function(){'use strict';
var M=window.MNEMIKA;if(!M||M.__life7)return;M.__life7=true;
var CSS='html.lf-offen{overflow:hidden}\n#menupop [data-life] small{background:#58cc02;color:#fff;border-radius:6px;padding:1px 6px;font-size:11px;font-weight:800;margin-left:6px;vertical-align:1px}\n#lp.lf [tabindex="-1"]:focus{outline:none}\n#lp.lf .lp-blase strong{font-weight:800}\n.lf-kick{margin:0 0 6px;font-size:12.5px;font-weight:800;letter-spacing:.1em;color:#b45309}\n.lf-cta{display:inline-flex;align-items:center;gap:8px;min-height:52px;padding:12px 20px;margin:8px 0 4px;border:0;border-radius:16px;background:#58cc02;color:#fff;font:inherit;font-size:17px;font-weight:800;cursor:pointer;box-shadow:0 5px 0 #46a302;transition:transform .1s,box-shadow .1s}\n.lf-cta:active{transform:translateY(3px);box-shadow:0 2px 0 #46a302}\n@media (max-width:560px){.lf-gitter{grid-template-columns:1fr 1fr;gap:10px}.lf-karte{min-height:150px;padding:12px 12px 10px}.lf-karte em{font-size:12.5px;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}.lf-karte b{font-size:15.5px}.lf-karte .lf-bild{width:46px;height:46px;font-size:26px}.lf-cta{width:100%;justify-content:center}.lf-hub .lf-welcome .mr{width:84px;height:84px}}\n#lp.lf .lf-ic{font-size:34px;line-height:1;animation:lf-pop .5s cubic-bezier(.2,1.6,.4,1) both}\n#lp.lf .lf-sprecher .mr,#lp.lf .lf-fig{width:84px;height:84px;flex:none}\n#lp.lf .lf-fig-k{width:56px;height:56px;flex:none}\n#lp.lf .lp-fr-kopf{display:flex;gap:12px;align-items:center}\n#lp.lf .lf-fig-r{width:52px;height:52px;flex:none}\n#lp.lf .lf-held{display:block;width:150px;height:150px;margin:0 auto}\n#lp.lf .lp-ende .lp-titel{justify-content:center;text-align:center}\n#lp.lf .lp-ende .lp-sterne{text-align:center}\n#lp.lf .lp-wozu{background:#fff;border:2px dashed #cfe3ff;border-radius:14px;padding:10px 14px;margin:0 0 14px}\n#lp.lf .lf-flip{animation:lf-auf .4s ease both;animation-delay:calc(var(--i,0)*70ms)}\n#lp.lf .lf-flip.um{transform:rotateY(0);animation:lf-dreh .35s ease}\n#lp.lf .lp-opt{animation:lf-auf .35s ease both;animation-delay:calc(var(--i,0)*60ms);transition:transform .12s,background .2s,border-color .2s}\n#lp.lf .lp-opt:active{transform:translateY(3px)}\n#lp.lf .lp-opt.richtig{animation:lf-pop .45s cubic-bezier(.2,1.6,.4,1)}\n.lf-wackel,#lp .lp-opt.falsch{animation:lf-wackel .45s ease!important}\n.lf-plus{position:absolute;margin-left:4px;font-weight:800;color:#58cc02;animation:lf-steig 1.1s ease forwards;pointer-events:none}\n#lp .lp-xp{position:relative}\n#lp.lf .lf-klebe{position:sticky;top:0;z-index:3;background:linear-gradient(#fbfaf7 85%,rgba(251,250,247,0));padding-top:4px}\n#lp.lf .lf-klebe .lp-blase{animation:lf-auf .3s ease both}\n@media(max-width:600px){#lp.lf .lf-klebe{position:static;top:auto}}\n.lf-doc{margin:6px 0 14px}\n.lf-doc figcaption{font-size:12.5px;color:#6b7280;margin-top:6px;text-align:center}\n.lf-papier{position:relative;background:#fff;border-radius:6px;padding:18px 16px 14px;box-shadow:0 1px 2px rgba(0,0,0,.08),0 10px 30px -12px rgba(27,35,51,.35);font:14px/1.45 ui-sans-serif,system-ui,-apple-system,"Segoe UI",Arial,sans-serif;color:#111;overflow:hidden;animation:lf-papier .45s ease both}\n.lf-papier:before{content:"";position:absolute;inset:0 0 auto 0;height:5px;background:repeating-linear-gradient(90deg,#3554b0 0 40px,#58cc02 40px 80px,#fbbf24 80px 120px);opacity:.75}\n.lf-muster{position:absolute;right:10px;top:10px;background:#fde68a;color:#7a4b00;font-size:9.5px;font-weight:800;letter-spacing:.12em;padding:2px 8px;border-radius:99px;pointer-events:none;z-index:2}.lf-dkopf{margin-top:16px!important}\n.lf-dkopf{display:flex;justify-content:space-between;gap:12px;font-size:12px;color:#374151;margin:4px 0 12px}\n.lf-dkopf p{margin:0}.lf-dkopf p+p{text-align:right}\n.lf-papier h4{margin:4px 0 0;font-size:17px}\n.lf-unter{margin:0 0 10px;font-size:12px;color:#6b7280}\n.lf-zeilen{border-top:1px solid #e5e7eb}\n.lf-z{display:flex;align-items:center;gap:8px;padding:7px 4px;border-bottom:1px solid #f0f0f0;transition:background .3s,opacity .3s,transform .3s}\n.lf-z span{flex:1;min-width:0}.lf-z b{font-variant-numeric:tabular-nums;white-space:nowrap;font-weight:600}\n.lf-z i{font-style:normal;font-weight:700;color:#3554b0;min-width:42px;font-size:12.5px}\n.lf-z.stark span,.lf-z.stark b{font-weight:800}\n.lf-z.linie{border-top:1.5px solid #111}.lf-z.doppel{border-bottom:3px double #111}\n.lf-kasten{position:relative;margin:10px 0 0;border:1.5px solid #111;border-radius:4px;padding:8px 10px;font-size:13px;transition:background .3s,opacity .3s}\n.lf-kasten b{display:block;font-size:12px}.lf-kasten p{margin:2px 0 0}\n.lf-kasten .lf-m{position:absolute;right:6px;top:6px}\n.lf-abschnitt{margin:12px 0 4px;font-weight:800;font-size:12.5px;letter-spacing:.06em;background:#f3f4f6;padding:4px 6px;border-radius:3px}\n.lf-tabwrap{overflow-x:auto;-webkit-overflow-scrolling:touch}\n.lf-tab{border-collapse:collapse;width:100%;font-size:12.5px;min-width:440px}\n.lf-tab th{text-align:left;border-bottom:1.5px solid #111;padding:5px 4px;font-size:11.5px}\n.lf-tab td{padding:6px 4px;border-bottom:1px solid #eee;transition:background .3s,opacity .3s}\n.lf-tab .lf-r{text-align:right;font-variant-numeric:tabular-nums;white-space:nowrap}\n.lf-dfuss{margin:12px 0 0;font-size:11px;color:#6b7280}\n.lf-m{flex:none;width:24px;height:24px;border-radius:50%;border:0;background:#3554b0;color:#fff;font:800 12px/24px system-ui,sans-serif;padding:0;cursor:pointer;box-shadow:0 0 0 3px rgba(53,84,176,.18);transition:transform .2s}\n.lf-m:hover{transform:scale(1.15)}\n.lf-m.an,.lf-m-an{background:#f59e0b;box-shadow:0 0 0 0 rgba(245,158,11,.6);animation:lf-puls 1.4s ease infinite}\n.lf-fokus .lf-aus{opacity:.32}\n.lf-fokus .lf-an,.lf-an{background:#fff7d6!important;opacity:1;box-shadow:inset 4px 0 0 #f59e0b}\n.lf-fokus .lf-z.lf-an{transform:scale(1.015)}\n.lf-pop{background:#eef6ff;border:2px solid #cfe3ff;border-radius:14px;padding:10px 12px;margin:-4px 0 12px;animation:lf-auf .25s ease both}\n.lf-pop p{margin:4px 0 0}\n.lf-qrbill{display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,2fr);margin-top:12px;border-top:1.5px dashed #9ca3af;font-size:11.5px}\n.lf-qrbill h5{margin:6px 0 6px;font-size:12.5px}.lf-qrbill h6{margin:6px 0 1px;font-size:10px}.lf-qrbill p{margin:0}\n.lf-empf{position:relative;padding:4px 8px 6px 0;border-right:1.5px dashed #9ca3af;transition:background .3s,opacity .3s}\n.lf-empf small{display:block;text-align:right;margin-top:8px;font-size:10px}\n.lf-zahlteil{position:relative;padding:4px 0 6px 10px;display:grid;grid-template-columns:110px minmax(0,1fr);grid-template-areas:"h h" "qr d" "b d";column-gap:10px}\n.lf-zahlteil h5{grid-area:h}.lf-qrbox{grid-area:qr;position:relative}.lf-qrdaten{grid-area:d}.lf-zahlteil>.lf-qf{grid-area:b}\n.lf-qr{width:100%;height:auto;display:block}\n.lf-qf{position:relative;padding:2px 26px 2px 0;transition:background .3s,opacity .3s}\n.lf-qf .lf-m,.lf-qrbox .lf-m,.lf-empf .lf-m{position:absolute;right:0;top:2px}\n.lf-gross{font-size:14px;font-weight:800}\n@media (max-width:520px){.lf-qrbill{grid-template-columns:1fr}.lf-empf{border-right:0;border-bottom:1.5px dashed #9ca3af}.lf-zahlteil{padding-left:0}}\n.lf-stufen p{opacity:0;animation:lf-auf .4s ease forwards;animation-delay:calc(var(--i,0)*700ms);margin:0 0 6px!important}\n.lf-fallen{display:grid;gap:10px}\n.lf-falle{display:flex;gap:10px;align-items:flex-start;background:#fff4d6;border-radius:14px;padding:12px;animation:lf-auf .4s ease both;animation-delay:calc(var(--i,0)*120ms)}\n.lf-falle span{font-size:22px}.lf-falle p{margin:0}.lf-falle.lf-gut{background:#ecfdf3}\n.lf-anl{counter-reset:a;list-style:none;padding:0;display:grid;gap:10px}\n.lf-anl li{counter-increment:a;position:relative;background:#fff;border:2px solid #e5e7eb;border-radius:14px;padding:12px 12px 12px 52px;animation:lf-auf .4s ease both;animation-delay:calc(var(--i,0)*150ms)}\n.lf-anl li:before{content:counter(a);position:absolute;left:12px;top:10px;width:28px;height:28px;border-radius:50%;background:#58cc02;color:#fff;font-weight:800;display:grid;place-items:center}\n.lf-kette{margin:0 0 14px;background:#fff;border-radius:18px;border:1px solid #e5e7eb;padding:14px}\n.lf-kette figcaption{font-weight:800;font-size:18px;margin-bottom:10px}\n.lf-kette ol{list-style:none;margin:0;padding:0;display:grid;gap:0}\n.lf-kette li{position:relative;display:grid;grid-template-columns:40px 1fr;column-gap:12px;padding:0 0 18px;animation:lf-auf .45s ease both;animation-delay:calc(var(--i,0)*350ms)}\n.lf-kette li:not(:last-child):after{content:"";position:absolute;left:19px;top:40px;bottom:0;width:2px;background:linear-gradient(#58cc02,#60a5fa)}\n.lf-kn{grid-row:span 2;width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#58cc02,#3fb950);color:#fff;font-weight:800;display:grid;place-items:center;font-size:18px;box-shadow:0 4px 0 #46a302}\n.lf-kette b{padding-top:2px}.lf-kette em{font-style:normal;color:#4b5563;font-size:15px}\n.lf-kette>p{margin:4px 0 0;font-size:12.5px;color:#6b7280}\n.lf-reihe{min-height:20px;margin:0 0 12px;padding-left:24px}\n.lf-reihe li{background:#eef6ff;border-radius:10px;padding:6px 10px;margin:0 0 6px;animation:lf-pop .3s ease}\n#lp.lf .lp-sterne b{display:inline-block;animation:lf-stern .6s cubic-bezier(.2,1.6,.4,1) both;animation-delay:calc(var(--i)*250ms + .2s)}\n.lf-naechste{display:flex;align-items:center;justify-content:center;gap:8px}\n.lf-vt{margin:10px 0 2px;font-weight:700;color:#6b7280}\n.lf-chips{display:flex;flex-wrap:wrap;gap:8px;justify-content:center}\n.lf-chip{border:2px solid #cfe3ff;background:#eef6ff;color:#1d4ed8;border-radius:99px;padding:8px 14px;font:inherit;font-size:14px;font-weight:700;cursor:pointer;min-height:40px}\n/* Übersicht */\n.lf-hub .lf-held-kopf{background:linear-gradient(135deg,#f6f9fd 0%,#fff8e6 100%);border-color:#f3e3b5}\n.lf-hub .lf-held-kopf h1{animation:lf-auf .5s ease both}\n.lf-hub .lf-welcome .mr{width:110px;height:110px;flex:none}\n.lf-hub .lf-welcome{display:flex;gap:12px;align-items:center}\n.lf-fort{margin-top:14px;max-width:420px}\n.lf-fort div{height:12px;border-radius:99px;background:#e7e5df;overflow:hidden}\n.lf-fort i{display:block;height:100%;border-radius:99px;background:linear-gradient(90deg,#58cc02,#3fb950);animation:lf-wachs 1s ease both}\n.lf-fort span{display:block;font-size:13px;color:#4b5563;margin-top:4px;font-weight:700}\n.lf-wie{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;margin:0 0 22px}\n.lf-wie div{background:#fff;border:1px solid #e5e7eb;border-radius:16px;padding:14px;text-align:center;animation:lf-auf .45s ease both;animation-delay:calc(var(--i)*120ms)}\n.lf-wie span{font-size:30px;display:block;animation:lf-wipp 2.4s ease-in-out infinite;animation-delay:calc(var(--i)*.4s)}\n.lf-wie b{display:block;margin:4px 0 2px}.lf-wie p{margin:0;font-size:13.5px;color:#4b5563}\n.lf-h2{font-size:21px;margin:8px 0 12px}\n.lf-gitter{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:12px;margin:0 0 24px}\n.lf-karte{position:relative;text-align:left;background:#fff;border:2px solid #e5e7eb;border-bottom-width:5px;border-radius:18px;padding:14px 14px 12px;cursor:pointer;font:inherit;color:#1b2333;display:flex;flex-direction:column;gap:4px;min-height:170px;animation:lf-auf .45s ease both;animation-delay:calc(var(--i)*60ms);transition:transform .2s cubic-bezier(.2,.9,.3,1),border-color .2s,box-shadow .2s}\n.lf-karte:hover{transform:translateY(-3px);border-color:#93c5fd;box-shadow:0 10px 24px -14px rgba(27,35,51,.4)}\n.lf-karte:active{transform:translateY(2px)}\n.lf-karte .lf-bild{font-size:30px;width:54px;height:54px;border-radius:16px;background:#fff6dd;display:grid;place-items:center;transition:transform .3s}\n.lf-karte:hover .lf-bild{transform:rotate(-8deg) scale(1.1)}\n.lf-karte:nth-child(3n+2) .lf-bild{background:#eef6ff}.lf-karte:nth-child(3n) .lf-bild{background:#ecfdf3}\n.lf-nr{position:absolute;right:14px;top:12px;font-weight:800;color:#cbd5e1;font-size:22px}\n.lf-karte b{font-size:17px;margin-top:4px}.lf-karte em{font-style:normal;font-size:13.5px;color:#4b5563;flex:1}\n.lf-stand{font-size:12.5px;font-weight:700;color:#6b7280}\n.lf-karte.lf-ok{border-color:#86efac}.lf-karte.lf-ok .lf-stand{color:#15803d}\n.lf-module{display:grid;gap:8px;margin:0 0 24px}\n.lf-modul{background:#fff;border:1px solid #e5e7eb;border-radius:14px;padding:0 14px;animation:lf-auf .35s ease both;animation-delay:calc(var(--i)*40ms)}\n.lf-modul summary{cursor:pointer;padding:12px 0;display:grid;grid-template-columns:1fr auto;gap:2px 10px;list-style:none}\n.lf-modul summary::-webkit-details-marker{display:none}\n.lf-modul summary span{font-size:13px;font-weight:700;color:#6b7280}.lf-modul summary em{grid-column:1/-1;font-style:normal;font-size:13.5px;color:#4b5563}\n.lf-modul ul{margin:0 0 12px;padding:0;list-style:none;display:grid;gap:6px}\n.lf-modul li button{width:100%;text-align:left;background:#f8fafc;border:1px solid #e5e7eb;border-radius:10px;padding:10px 12px;font:inherit;cursor:pointer;min-height:44px}\n.lf-laedt{color:#6b7280}\n.lf-werkzeug{margin:0 0 20px}.lf-tool{display:grid!important;grid-template-columns:52px minmax(0,1fr) 20px;gap:12px;align-items:center;text-align:left!important;width:100%;min-height:76px;padding:12px 14px;border-radius:16px;border:2px solid #e5e7eb!important;border-bottom-width:5px!important;background:#fff!important;font:inherit;color:#1b2333;cursor:pointer}.lf-tool .lf-bild{font-size:28px;width:52px;height:52px;border-radius:14px;background:#f5f3ff;display:grid;place-items:center}.lf-tool b{display:block;font-size:16px}\n.lf-tool em{display:block;font-style:normal;font-size:13.5px;color:#4b5563}\n.lf-stimmen{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:12px;margin:0 0 24px}\n.lf-stimmen blockquote{margin:0;background:#fff;border-radius:16px;border:1px solid #e5e7eb;padding:14px}\n.lf-hinweis{font-size:12.5px;color:#6b7280;margin:0 0 30px}\n/* Startseiten-Karte */\n.lf-start-karte{display:grid;grid-template-columns:auto minmax(0,1fr) auto;gap:14px;align-items:center;width:100%;text-align:left;margin:0 0 16px;padding:16px 18px;border-radius:20px;border:2px solid #f3e3b5;border-bottom-width:5px;background:linear-gradient(120deg,#fff8e6,#eef6ff 70%);font:inherit;color:#1b2333;cursor:pointer;position:relative;overflow:hidden;animation:lf-auf .5s ease both;transition:transform .2s,box-shadow .2s}\n.lf-start-karte:after{content:"";position:absolute;top:0;left:-60%;width:40%;height:100%;background:linear-gradient(100deg,transparent,rgba(255,255,255,.7),transparent);animation:lf-glanz 4.5s ease-in-out 1.2s infinite}\n.lf-start-karte:hover{transform:translateY(-2px);box-shadow:0 12px 26px -16px rgba(27,35,51,.5)}\n.lf-sk-ic{font-size:28px;letter-spacing:-6px;animation:lf-wipp 3s ease-in-out infinite}\n.lf-sk-t small{display:block;font-size:11.5px;font-weight:800;letter-spacing:.1em;color:#b45309}\n.lf-sk-t b{display:block;font-size:17px;margin:2px 0}.lf-sk-t em{font-style:normal;font-size:14px;color:#4b5563}\n.lf-sk-pf{font-size:22px;font-weight:800;color:#3554b0}\n@media (max-width:560px){.lf-start-karte{padding:12px 14px;gap:10px;margin-bottom:12px}.lf-sk-t b{font-size:15.5px;line-height:1.3}.lf-sk-t em{font-size:13px}.lf-wie{grid-template-columns:1fr}.lf-wie div{display:grid;grid-template-columns:40px 1fr;text-align:left;column-gap:10px}.lf-wie span{grid-row:span 2}.lf-sk-ic{display:none}.lf-start-karte{grid-template-columns:minmax(0,1fr) auto}}\n/* Lernpfad allgemein: mehr Leben (rein visuell) */\n#lp .lp-rueck.lp-gut{animation:lf-hoch-pop .4s cubic-bezier(.2,1.4,.4,1) both}\n#lp .lp-rueck.lp-schlecht{animation:lf-wackel .45s ease both}\n#lp .lp-balken i{position:relative;overflow:hidden}\n#lp .lp-balken i:after{content:"";position:absolute;inset:0;background:linear-gradient(100deg,transparent 30%,rgba(255,255,255,.55) 50%,transparent 70%);animation:lf-glanz2 2.6s ease-in-out infinite}\n#lp .lp-los:not([disabled]){transition:transform .1s}\n@keyframes lf-auf{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}\n@keyframes lf-pop{0%{transform:scale(.6);opacity:0}100%{transform:scale(1);opacity:1}}\n@keyframes lf-hoch-pop{0%{transform:translateY(20px) scale(.96);opacity:0}100%{transform:none;opacity:1}}\n@keyframes lf-wackel{0%,100%{transform:none}20%{transform:translateX(-8px)}40%{transform:translateX(7px)}60%{transform:translateX(-5px)}80%{transform:translateX(3px)}}\n@keyframes lf-steig{0%{opacity:0;transform:translateY(4px) scale(.8)}20%{opacity:1;transform:translateY(-6px) scale(1.2)}100%{opacity:0;transform:translateY(-30px)}}\n@keyframes lf-puls{0%{box-shadow:0 0 0 0 rgba(245,158,11,.6)}70%{box-shadow:0 0 0 10px rgba(245,158,11,0)}100%{box-shadow:0 0 0 0 rgba(245,158,11,0)}}\n@keyframes lf-papier{from{opacity:0;transform:translateY(16px) rotate(-.6deg)}to{opacity:1;transform:none}}\n@keyframes lf-dreh{0%{transform:rotateY(90deg)}100%{transform:rotateY(0)}}\n@keyframes lf-stern{0%{transform:scale(0) rotate(-40deg)}100%{transform:scale(1) rotate(0)}}\n@keyframes lf-wachs{from{width:0}}\n@keyframes lf-wipp{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}\n@keyframes lf-glanz{0%,60%{left:-60%}100%{left:130%}}\n@keyframes lf-glanz2{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}\n.lf-warn{margin:8px 12px;padding:12px 14px;border-radius:14px;background:#fff1e6;border:2px solid #f59e0b;color:#4a2a00;font-size:15px}\n.lf-warn p{margin:0 0 8px}.lf-warn div{display:flex;flex-wrap:wrap;gap:8px}\n.lf-wbtn{border:2px solid #1d4ed8;background:#fff;color:#1d3a8a;border-radius:10px;padding:8px 12px;font:inherit;font-size:14px;font-weight:700;cursor:pointer;min-height:40px}\n.lf-wbtn:focus-visible,.lf-chip:focus-visible,.lf-karte:focus-visible,.lf-cta:focus-visible,.lf-tool:focus-visible,#lp.lf button:focus-visible,#lp.lf summary:focus-visible{outline:3px solid #1d4ed8;outline-offset:2px}\n.lf-notiz{font-size:13.5px;color:#374151;background:#f3f4f6;border-radius:10px;padding:8px 10px;margin:10px 0}\n.lf-weiterhin{background:#eef6ff;border:1px solid #bfdbfe;border-radius:12px;padding:8px 12px;font-size:14px;color:#1e3a8a;display:flex;flex-wrap:wrap;gap:8px;align-items:center}\n.lf-fall{background:#fffbea;border:2px solid #fcd34d;border-radius:14px;padding:10px 14px;margin:0 0 12px}\n.lf-fall b{display:block;font-size:12.5px;letter-spacing:.06em;text-transform:uppercase;color:#7a4b00}.lf-fall p{margin:4px 0 0;font-size:16px;color:#1f2937}\n.lf-ref{margin:12px 0;background:#fff;border:1px solid #e5e7eb;border-radius:14px;padding:0 12px}\n.lf-ref>summary{cursor:pointer;padding:12px 0;font-weight:700;color:#1d3a8a;min-height:44px;box-sizing:border-box}\n.lf-quellen{margin:14px 0;font-size:14px;color:#374151;text-align:left}.lf-quellen summary{cursor:pointer;font-weight:700;padding:8px 0}.lf-quellen ul{padding-left:18px}.lf-quellen a{color:#1d4ed8}\n.lf-svgwrap{overflow:auto;-webkit-overflow-scrolling:touch;border-radius:12px;background:#fcfbf7}\n.lf-svgwrap svg,.lf-svg{display:block;width:100%;height:auto;max-width:100%}\n.lf-vis.lf-gross .lf-svgwrap svg{width:900px;max-width:none}\n.lf-visbar{display:flex;justify-content:flex-end;margin:6px 0}\n.lf-vtd{margin:6px 0;font-size:14.5px}.lf-vtd summary{cursor:pointer;font-weight:700;color:#1d3a8a;padding:6px 0}\n.lf-vtab{min-width:0}.lf-vtab td,.lf-vtab th{font-size:13.5px;vertical-align:top}\n.lf-vcap{font-size:13px;color:#4b5563;margin:6px 0 0}\n.lf-kettel{list-style:none;margin:0;padding:0}.lf-kettel li{position:relative;display:grid;grid-template-columns:40px 1fr;column-gap:12px;padding:0 0 14px}\n.lf-ohne p{color:#4b5563}\n.lf-fussreihe{display:flex;gap:10px;align-items:center;flex-wrap:wrap}.lf-fussreihe .lp-los{flex:1 1 180px}\n.lf-zurueck{flex:none}\n#lp .lp-los,#lp .lp-los:not([disabled]),.lf-cta{color:#0B1220!important}\n#lp .lp-los[disabled]{color:#374151!important}\nhtml.lf-ruhig .lf-start-karte:after,html.lf-ruhig .lf-start-karte,html.lf-ruhig #lp *,html.lf-ruhig .lf-hub *,html.lf-ruhig .lf-sk-ic{animation:none!important;transition:none!important}\nhtml.lf-ruhig #lp .lp-balken i:after{display:none}\n';
(function(){if(document.getElementById('lf-css'))return;var st=document.createElement('style');st.id='lf-css';st.textContent=CSS;(document.head||document.documentElement).appendChild(st);})();
var KEY='mnemika-life-v7',KEY2='mnemika-life-v2',LEHRER='frau-keller';
function e(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
function B(){return (window.MNEMIKA_LIFE_BASICS||{lessons:[]}).lessons;}
function PK(){return window.MNEMIKA_LIFE_PACK||null;}
function du(t){return String(t==null?'':t).replace(/([a-zäöüA-ZÄÖÜ0-9,;:)»] )(Du|Dein|Deine|Deinen|Deinem|Deiner|Deines|Dir|Dich)\b/g,function(m,a,b){return a+b.toLowerCase();});}
function sysRuhig(){try{return matchMedia('(prefers-reduced-motion: reduce)').matches;}catch(x){return false;}}
function hash(s){var h=2166136261;s=String(s);for(var i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619);}return h>>>0;}
function heute(){return new Date().toISOString().slice(0,10);}

/* ── Texte (Audit r159, Kopie 07; «du» klein nach Schweizer Regel) ── */
var T={
 notice:'Fiktive Lernfälle. Keine Finanz-, Steuer- oder Rechtsberatung. Keine Prüfung deiner persönlichen Situation.',
 kontext:'Angaben zum Fall',skip:'Weiter ohne Wertung',
 saveFailed:'Dein Stand ist hier noch nicht gespeichert. Exportiere eine Sicherung oder versuche es erneut. Vorhandene Daten bleiben unverändert.',
 saveProtected:'Ein vorhandener Lernstand kann nicht sicher gelesen werden. Er bleibt erhalten. Sichere zuerst die Originaldaten, bevor du einen neuen Stand anlegst.',
 gut:['Das passt zu den Angaben im Beispiel.','Der Rechenweg stimmt unter diesen Annahmen.','Du hast die richtige Stelle gefunden.'],
 retry:'Noch nicht. Prüfe zuerst die Angaben zum Fall; dieser Hinweis hilft beim nächsten Versuch.',
 ergebnis:'Du hast dieses Lernbeispiel bearbeitet. Schau dir bei Bedarf die Erklärungen nochmals an. Echte Unterlagen und Regeln können abweichen.',
 hubIntro:'Du liest vereinfachte Musterformulare und übst mit erfundenen Fällen. Feld für Feld, mit Erklärung und freiwilligen Aufgaben.',
 hubLehrer:'Hier kannst du Dinge aus dem Alltag in Ruhe ausprobieren. Du bekommst Erklärungen, Beispiele und einen nächsten Schritt.',
 beta:'Kostenloses Lernangebot im Ausbau. Inhalte, Quellen und Prüfungszuordnungen haben unterschiedliche Prüfstände. Massgebend bleiben die Vorgaben deiner Schule und der zuständigen Stelle.'
};

/* ── Speicher: geschützt, mit sichtbarem Fehler, Lauf-Zustand und Tab-Abgleich ── */
var Sp={raw:undefined,mem:null,schutz:false,offen:false,fehler:''};
function leer(){return {v:7,l:{},xp:0,runs:{},ev:{},prefs:{}};}
function einfach(o){return !!o&&typeof o==='object'&&!Array.isArray(o);}
function gueltig(r){
 if(!einfach(r)||r.v!==7||!einfach(r.l))return false;
 if(r.xp!=null&&(!Number.isFinite(r.xp)||r.xp<0))return false;
 for(var k of ['runs','ev','prefs'])if(r[k]!=null&&!einfach(r[k]))return false;
 if(Object.keys(r.l).some(function(k){return !einfach(r.l[k]);}))return false;
 var runs=r.runs||{};
 if(Object.keys(runs).some(function(k){
  var x=runs[k];if(!einfach(x)||!einfach(x.q)||!einfach(x.opt)||(x.i!=null&&(!Number.isInteger(x.i)||x.i<0)))return true;
  if(Object.keys(x.opt).some(function(id){var a=x.opt[id];return !Array.isArray(a)||a.length<1||a.length>64||a.some(function(n){return !Number.isInteger(n)||n<0||n>=a.length;})||new Set(a).size!==a.length;}))return true;
  return Object.keys(x.q).some(function(id){var q=x.q[id];if(!einfach(q))return true;
   if(q.phase!=null&&q.phase!=='entwurf'&&q.phase!=='rueck')return true;
   if(q.v!=null&&(!Number.isInteger(q.v)||q.v<0||q.v>2))return true;
   for(var b of ['ok','skip','erstFalsch'])if(q[b]!=null&&typeof q[b]!=='boolean')return true;
   var a=q.a;if(a==null)return false;if(typeof a==='string')return a.length>128;
   if(typeof a==='number')return !Number.isFinite(a);
   return !Array.isArray(a)||a.length>64||a.some(function(n){return !Number.isInteger(n)||n<0||n>63;})||new Set(a).size!==a.length;
  });
 }))return false;
 return true;
}
function ergaenze(r){r.runs=r.runs&&typeof r.runs==='object'?r.runs:{};r.ev=r.ev&&typeof r.ev==='object'?r.ev:{};r.prefs=r.prefs&&typeof r.prefs==='object'?r.prefs:{};if(typeof r.xp!=='number')r.xp=0;return r;}
function lies(){
 if(Sp.offen&&Sp.mem&&!Sp.schutz)return Sp.mem;
 var raw=null;try{raw=localStorage.getItem(KEY);}catch(x){raw=null;}
 if(Sp.schutz&&Sp.offen&&raw!==Sp.raw){var r0=null;try{r0=raw==null?null:JSON.parse(raw);}catch(x){r0=null;}if(raw==null||gueltig(r0)){Sp.schutz=false;Sp.raw=raw;delete Sp.mem.__geschuetzt;if(r0)verschmelze(r0);return Sp.mem;}}
 if(Sp.schutz&&Sp.offen)return Sp.mem;
 if(raw===Sp.raw&&Sp.mem)return Sp.mem;
 Sp.raw=raw;
 if(raw==null){Sp.schutz=false;Sp.mem=leer();return Sp.mem;}
 var r=null;try{r=JSON.parse(raw);}catch(x){r=null;}
 if(gueltig(r)&&raw.length<4e6){Sp.schutz=false;Sp.mem=ergaenze(r);}
 else{Sp.schutz=true;if(!Sp.mem||!Sp.mem.__geschuetzt){Sp.mem=leer();Sp.mem.__geschuetzt=true;}}
 return Sp.mem;
}
function verschmelze(o){var m=Sp.mem;ergaenze(o);
 Object.keys(o.l).forEach(function(id){var a=m.l[id],b=o.l[id];if(!a||(b&&((b.d||'')>(a.d||'')||(b.p||0)>(a.p||0)&&(b.d||'')===(a.d||''))))m.l[id]=b;});
 m.xp=Math.max(m.xp||0,o.xp||0);
 Object.keys(o.runs).forEach(function(id){var a=m.runs[id],b=o.runs[id];if(!a||(b&&(b.ts||0)>(a.ts||0)))m.runs[id]=b;});
 Object.keys(o.ev).forEach(function(q){if(!m.ev[q])m.ev[q]=o.ev[q];});
 Object.keys(o.prefs).forEach(function(k){if(!(k in m.prefs))m.prefs[k]=o.prefs[k];});}
function sauber(m){var c={};for(var k in m)if(k!=='__geschuetzt')c[k]=m[k];return c;}
function schreibe(){
 lies();
 if(Sp.schutz){Sp.offen=true;Sp.fehler='geschützt';malHinweis();return false;}
 var cur;try{cur=localStorage.getItem(KEY);}catch(x){cur=Sp.raw;}
 if(cur!==Sp.raw){var o=null;try{o=JSON.parse(cur);}catch(x){o=null;}
  if(cur!=null&&!gueltig(o)){Sp.schutz=true;Sp.raw=cur;Sp.offen=true;Sp.fehler='geschützt';malHinweis();return false;}
  if(o)verschmelze(o);}
 var clean=sauber(Sp.mem),txt=JSON.stringify(clean);
 if(!gueltig(clean)||txt.length>=4e6){Sp.offen=true;Sp.fehler='InvalidOrOversizedState';malHinweis();return false;}
 try{localStorage.setItem(KEY,txt);if(localStorage.getItem(KEY)!==txt)throw new Error('Rücklesen stimmt nicht');Sp.raw=txt;var war=Sp.offen;Sp.offen=false;Sp.fehler='';if(war)malHinweis();return true;}
 catch(x){Sp.offen=true;Sp.fehler=String((x&&(x.name||x.message))||x);malHinweis();return false;}
}
function exportiere(){
 var o={app:'Stoffknacker',type:'stoffknacker-life-backup',schema:M.SCHEMA_VERSION||2,version:M.version,exportedAt:new Date().toISOString(),keys:{},note:'Originaldaten unverändert; ungespeicherter Stand separat unter unsaved.'};
 try{var r7=localStorage.getItem(KEY);if(r7!=null)o.keys[KEY]=r7;var r2=localStorage.getItem(KEY2);if(r2!=null)o.keys[KEY2]=r2;}catch(x){}
 if(Sp.offen||Sp.schutz)o.unsaved={key:KEY,value:JSON.stringify(sauber(Sp.mem))};
 try{var a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify(o,null,1)],{type:'application/json'}));a.download='stoffknacker-schule-fuers-leben-'+heute()+'.json';document.body.appendChild(a);a.click();a.remove();}catch(x){}
 return o;
}
function ersetzen(){Sp.schutz=false;try{Sp.raw=localStorage.getItem(KEY);}catch(x){}var m=Sp.mem;delete m.__geschuetzt;return schreibe();}
function warnHtml(){
 if(Sp.schutz)return '<div class="lf-warn" role="alert"><p>'+e(T.saveProtected)+'</p><div><button type="button" class="lf-wbtn" data-lf-save="export">Originaldaten sichern</button><button type="button" class="lf-wbtn" data-lf-save="ersetzen">Neu beginnen …</button></div></div>';
 if(Sp.offen)return '<div class="lf-warn" role="alert"><p>'+e(T.saveFailed)+'</p><div><button type="button" class="lf-wbtn" data-lf-save="export">Sicherung exportieren</button><button type="button" class="lf-wbtn" data-lf-save="retry">Erneut speichern</button></div></div>';
 return '';
}
function malHinweis(){[].forEach.call(document.querySelectorAll('.lf-warnplatz'),function(p){p.innerHTML=warnHtml();});}
document.addEventListener('click',function(ev){var b=ev.target.closest&&ev.target.closest('[data-lf-save]');if(!b)return;ev.preventDefault();ev.stopPropagation();var a=b.dataset.lfSave;
 if(a==='export')exportiere();else if(a==='retry')schreibe();
 else if(a==='ersetzen'){b.dataset.lfSave='ersetzen-ja';b.textContent='Ja, alten Stand ersetzen (vorher sichern!)';try{b.focus();}catch(x){}return;}
 else if(a==='ersetzen-ja'){ersetzen();}
 malHinweis();},true);
window.addEventListener('storage',function(ev){if(ev.key===KEY&&!Sp.offen){Sp.raw=undefined;lies();if(!S){var v=document.getElementById('v-leben');if(v&&!v.hidden)hub();}}});
M.__lifeLive=function(){lies();return (Sp.offen&&!Sp.schutz)?JSON.stringify(sauber(Sp.mem)):null;};

/* ── Einstellungen: Ton, Vibration und Bewegung getrennt (eigener Speicher, nie der Lernstand) ── */
function pref(k){var p=lies().prefs;if(k in p)return !!p[k];if(k==='ton'){try{var s=M.store&&M.store();return !(s&&s.lpTon===false);}catch(x){return true;}}if(k==='bew')return !sysRuhig();return true;}
function setzePref(k,v){lies().prefs[k]=v;schreibe();bewegungKlasse();}
function bewegungKlasse(){document.documentElement.classList.toggle('lf-ruhig',!pref('bew'));}
function tonAn(){return pref('ton');}

/* ── Ton und Vibration ── */
var AC=null;
var KLANG={tipp:[[1200,0,.03,.04]],schritt:[[520,0,.07,.05],[780,.05,.08,.04]],gut:[[523,0,.12,.1],[659,.08,.12,.1],[784,.16,.2,.1]],
 falsch:[[300,0,.14,.08],[240,.12,.2,.08]],fertig:[[523,0,.14,.1],[659,.12,.14,.1],[784,.24,.14,.1],[1047,.36,.4,.12]],stern:[[1319,0,.08,.06],[1568,.06,.12,.06]]};
var SUMM={tipp:6,schritt:0,gut:18,falsch:[30,50,30],fertig:[20,40,20,40,70],stern:12};
function fx(art){
 try{var v=SUMM[art];if(v&&navigator.vibrate&&pref('vib'))navigator.vibrate(v);}catch(x){}
 if(!tonAn())return;
 try{AC=AC||new (window.AudioContext||window.webkitAudioContext)();if(AC.state==='suspended')AC.resume();var t=AC.currentTime;
  (KLANG[art]||[]).forEach(function(n){var o=AC.createOscillator(),g=AC.createGain();o.type=art==='falsch'?'triangle':'sine';o.frequency.value=n[0];
   g.gain.setValueAtTime(0.0001,t+n[1]);g.gain.exponentialRampToValueAtTime(n[3],t+n[1]+0.015);g.gain.exponentialRampToValueAtTime(0.0001,t+n[1]+n[2]);
   o.connect(g);g.connect(AC.destination);o.start(t+n[1]);o.stop(t+n[1]+n[2]+0.02);});}catch(x){}
}
window.mnFx=window.mnFx||{spiel:fx,an:tonAn};

/* ── Lehrperson ── */
function figur(art,k){try{return window.mnReaktion?window.mnReaktion.html(LEHRER,art,k):'';}catch(x){return '';}}
function satz(art){try{return window.mnCharakter.satz(LEHRER,art)||'';}catch(x){return '';}}
function blase(titel,text,art){return '<div class="lp-sprecher lf-sprecher">'+figur(art||'warten','lf-fig')+'<div class="lp-blase"><b>'+e(titel)+'</b><p>'+text+'</p><span class="lp-wer">Frau Keller</span></div></div>';}
function beleben(root){try{if(window.mnReaktion)[].forEach.call(root.querySelectorAll('.mr'),function(el){window.mnReaktion.beleben(el);});}catch(x){}}

/* ── Formular-Nachbildung ── */
function mk(n,akt){return n?'<button type="button" class="lf-m'+(akt===n?' lf-m-an':'')+'" data-m="'+n+'" aria-label="Markierung '+n+'">'+n+'</button>':'';}
function zeile(n,akt){return akt?(akt===n?' lf-an':' lf-aus'):'';}
function teil(t,akt){
 if(t.t==='zeilen')return '<div class="lf-zeilen">'+t.zeilen.map(function(z){return '<div class="lf-z '+(z[3]||'')+zeile(z[2],akt)+'" data-n="'+(z[2]||'')+'">'+mk(z[2],akt)+'<span>'+e(z[0])+'</span><b>'+e(z[1])+'</b></div>';}).join('')+'</div>';
 if(t.t==='ziffern')return '<div class="lf-zeilen lf-ziff">'+t.zeilen.map(function(z){return '<div class="lf-z '+(z[4]||'')+zeile(z[3],akt)+'" data-n="'+(z[3]||'')+'">'+mk(z[3],akt)+'<i>'+e(z[0])+'</i><span>'+e(z[1])+'</span><b>'+e(z[2])+'</b></div>';}).join('')+'</div>';
 if(t.t==='kasten')return '<div class="lf-kasten'+zeile(t.n,akt)+'" data-n="'+(t.n||'')+'">'+mk(t.n,akt)+'<b>'+e(t.titel)+'</b><p>'+e(t.text)+'</p></div>';
 if(t.t==='abschnitt')return '<div class="lf-abschnitt">'+e(t.titel)+'</div>';
 if(t.t==='tabelle')return '<div class="lf-tabwrap"><table class="lf-tab"><thead><tr><th></th>'+t.kopf.map(function(k){return '<th>'+e(k)+'</th>';}).join('')+'</tr></thead><tbody>'+t.zeilen.map(function(z){var n=z[z.length-1];return '<tr class="'+zeile(n,akt).trim()+'" data-n="'+n+'"><td>'+mk(n,akt)+'</td>'+z.slice(0,-1).map(function(c,i){return '<td'+(i>=2?' class="lf-r"':'')+'>'+e(c)+'</td>';}).join('')+'</tr>';}).join('')+'</tbody></table></div>';
 if(t.t==='qrteil'){
  var qr='<svg class="lf-qr" viewBox="0 0 29 29" aria-hidden="true"><rect width="29" height="29" fill="#fff"/>'+(function(){var s='',x,y,h=7;for(y=0;y<29;y++)for(x=0;x<29;x++){h=(h*1103515245+12345)&0x7fffffff;var ecke=(x<8&&y<8)||(x>20&&y<8)||(x<8&&y>20);if(!ecke&&(h>>16)%2)s+='<rect x="'+x+'" y="'+y+'" width="1" height="1"/>';}return s;})()
   +[[0,0],[22,0],[0,22]].map(function(p){return '<rect x="'+p[0]+'" y="'+p[1]+'" width="7" height="7" fill="none" stroke="#000"/><rect x="'+(p[0]+2)+'" y="'+(p[1]+2)+'" width="3" height="3"/>';}).join('')
   +'<rect x="11.5" y="11.5" width="6" height="6" fill="#000"/><rect x="12" y="12" width="5" height="5" fill="#000" stroke="#fff" stroke-width=".5"/><rect x="14.05" y="12.8" width=".9" height="3.4" fill="#fff"/><rect x="12.8" y="14.05" width="3.4" height=".9" fill="#fff"/></svg>';
  function f(n,lab,inh){return '<div class="lf-qf'+zeile(n,akt)+'" data-n="'+n+'">'+mk(n,akt)+'<h6>'+lab+'</h6>'+inh+'</div>';}
  return '<div class="lf-qrbill"><div class="lf-empf'+zeile(t.nEmpf,akt)+'" data-n="'+t.nEmpf+'">'+mk(t.nEmpf,akt)+'<h5>Empfangsschein</h5><h6>Konto / Zahlbar an</h6><p>'+e(t.konto)+'<br>'+t.an.map(e).join('<br>')+'</p><h6>Zahlbar durch</h6><p>'+t.durch.map(e).join('<br>')+'</p><h6>Währung · Betrag</h6><p>CHF '+e(t.betrag)+'</p><small>Annahmestelle</small></div>'
   +'<div class="lf-zahlteil"><h5>Zahlteil</h5><div class="lf-qrbox'+zeile(t.nQr,akt)+'" data-n="'+t.nQr+'">'+mk(t.nQr,akt)+qr+'</div><div class="lf-qrdaten">'
   +f(t.nKonto,'Konto / Zahlbar an','<p>'+e(t.konto)+'<br>'+t.an.map(e).join('<br>')+'</p>')+f(t.nRef,'Referenz','<p>'+e(t.ref)+'</p>')
   +'<div class="lf-qf"><h6>Zusätzliche Informationen</h6><p>'+e(t.info)+'</p></div>'+f(t.nDurch,'Zahlbar durch','<p>'+t.durch.map(e).join('<br>')+'</p>')+'</div>'
   +f(t.nBetrag,'Währung · Betrag','<p class="lf-gross">CHF '+e(t.betrag)+'</p>')+'</div></div>';
 }
 return '';
}
function dokument(d,akt){
 return '<figure class="lf-doc'+(akt?' lf-fokus':'')+'" data-art="'+e(d.art)+'"><div class="lf-papier"><span class="lf-muster" aria-hidden="true">MUSTER · FIKTIV</span>'
  +'<div class="lf-dkopf"><p>'+d.kopfL.map(e).join('<br>')+'</p><p>'+d.kopfR.map(e).join('<br>')+'</p></div>'
  +'<h4>'+e(d.titel)+'</h4><p class="lf-unter">'+e(d.unter)+'</p>'+d.teile.map(function(t){return teil(t,akt);}).join('')
  +'<p class="lf-dfuss">'+e(d.fuss)+'</p></div><figcaption>Vereinfachte Lern-Nachbildung mit erfundenen Werten. Kein amtliches Formular, nicht zahlbar und nicht einreichbar.</figcaption></figure>';
}
/* Unterlage aus dem v6-Paket (DOC-…) */
function unterlage(id){var P=PK(),D=P&&P.missions&&P.missions.documents;if(!D||!id)return '';var d=(D.filter?D:[]).filter(function(x){return x.id===id;})[0];if(!d)return '';
 return '<figure class="lf-doc"><div class="lf-papier"><span class="lf-muster" aria-hidden="true">MUSTER · FIKTIV</span><h4>'+e(d.title)+'</h4><p class="lf-unter">'+e(d.kind)+(d.year?' · '+e(d.year):'')+'</p><div class="lf-zeilen">'
  +(d.rows||[]).map(function(r){return '<div class="lf-z"><span>'+e(du(r.label))+'</span><b>'+e(du(r.value))+'</b></div>';}).join('')+'</div>'
  +((d.notes||[]).length?'<p class="lf-dfuss">'+(d.notes||[]).map(function(n){return e(du(n));}).join(' ')+'</p>':'')+'</div><figcaption>'+e(d.watermark||'Fiktive Übungsunterlage.')+'</figcaption></figure>';}

/* ── Schaubilder: vorbereitete SVG (bereinigt) + Tabelle + Bildunterschrift; Schrittkette als Ergänzung ── */
var SVGCACHE={};
function bereinigeSvg(src){
 if(!src||typeof src!=='string')return '';if(SVGCACHE[src])return SVGCACHE[src];
 var out='';
 try{var doc=new DOMParser().parseFromString(src,'image/svg+xml'),root=doc.documentElement;
  if(!root||root.nodeName.toLowerCase()!=='svg'||doc.getElementsByTagName('parsererror').length)return '';
  [].slice.call(root.querySelectorAll('script,foreignObject,iframe,object,embed,style[src]')).forEach(function(n){n.remove();});
  [].slice.call(root.querySelectorAll('*')).concat([root]).forEach(function(n){[].slice.call(n.attributes).forEach(function(a){var nm=a.name.toLowerCase(),v=String(a.value||'').trim().toLowerCase();
   if(nm.indexOf('on')===0)n.removeAttribute(a.name);
   else if((nm==='href'||nm==='xlink:href'||nm==='src')&&v.charAt(0)!=='#')n.removeAttribute(a.name);
   else if(/(javascript|vbscript|data):/.test(v)&&nm!=='d')n.removeAttribute(a.name);});});
  root.setAttribute('class','lf-svg');root.removeAttribute('width');root.removeAttribute('height');root.setAttribute('focusable','false');
  out=new XMLSerializer().serializeToString(root);}catch(x){out='';}
 SVGCACHE[src]=out;return out;
}
function visual(id){var P=PK();if(!P||!id)return null;return P.visuals.filter(function(v){return v.id===id;})[0]||null;}
function tabelle(t){if(!t||!t.headers)return '';return '<div class="lf-tabwrap"><table class="lf-tab lf-vtab"><thead><tr>'+t.headers.map(function(h){return '<th scope="col">'+e(du(h))+'</th>';}).join('')+'</tr></thead><tbody>'+(t.rows||[]).map(function(r){return '<tr>'+r.map(function(c){return '<td>'+e(du(c))+'</td>';}).join('')+'</tr>';}).join('')+'</tbody></table></div>';}
function schaubild(v,klein){
 if(!v)return '';
 var svg=bereinigeSvg(v.svg),kette=v.steps&&v.steps.length?'<ol class="lf-kettel">'+v.steps.map(function(s,i){return '<li style="--i:'+i+'"><span class="lf-kn">'+(i+1)+'</span><b>'+e(du(s.title))+'</b><em>'+e(du(s.text))+'</em></li>';}).join('')+'</ol>':'';
 var bild=svg?'<div class="lf-svgwrap" role="img" aria-label="'+e(du(v.alt||v.title))+'">'+svg+'</div>':'';
 if(!bild&&!kette&&!v.table)return '<figure class="lf-kette lf-ohne"><figcaption>'+e(du(v.title))+'</figcaption><p>'+e(du(v.alt||'Für dieses Schaubild liegt keine Darstellung vor.'))+'</p></figure>';
 return '<figure class="lf-kette lf-vis'+(klein?' lf-klein':'')+'" data-vis="'+e(v.id)+'"><figcaption>'+e(du(v.title))+'</figcaption>'+bild
  +(bild?'<div class="lf-visbar"><button type="button" class="lf-wbtn" data-a="gross" aria-pressed="false">Vergrössern</button></div>':'')
  +(bild?'':kette)+(v.table?'<details class="lf-vtd"'+(bild?'':' open')+'><summary>Als Tabelle lesen</summary>'+tabelle(v.table)+'</details>':'')
  +(bild&&kette?'<details class="lf-vtd"><summary>Schritte als Text</summary>'+kette+'</details>':'')
  +(v.alt&&bild?'<details class="lf-vtd"><summary>Bildbeschreibung</summary><p>'+e(du(v.alt))+'</p></details>':'')
  +(v.caption?'<p class="lf-vcap">'+e(du(v.caption))+'</p>':'')+'</figure>';
}

/* ── Quellen ── */
function quelle(id){var b=window.MNEMIKA_LIFE_BASICS,s=null;if(b&&b.sources)s=b.sources.filter(function(x){return x.id===id;})[0];
 var P=PK();if(!s&&P&&P.reference&&P.reference.sources)s=(P.reference.sources.filter?P.reference.sources:[]).filter(function(x){return x.id===id;})[0];return s;}
function quellen(refs,extra){refs=(refs||[]).filter(function(r,i,a){return a.indexOf(r)===i;});if(!refs.length&&!extra)return '';
 return '<details class="lf-quellen"><summary>Quellen und Stand</summary>'+(extra?'<p>'+e(extra)+'</p>':'')+'<ul>'+refs.map(function(r){var s=quelle(r);if(!s)return '<li>'+e(r)+'</li>';
  var d=s.retrieved_on||s.accessed_on||'';return '<li>'+(s.url?'<a href="'+e(s.url)+'" target="_blank" rel="noopener noreferrer">'+e(s.title)+'</a>':e(s.title))+(d?' <small>(abgerufen '+e(d)+')</small>':'')+'</li>';}).join('')+'</ul></details>';}

/* ── Schritte bauen (keine Kürzung: jede Frage bleibt erreichbar) ── */
function schritteGrund(L){
 var st=[{t:'einstieg'},{t:'begriffe'},{t:'ueberblick'}],tour=L.tour,h=Math.ceil(tour.length/2);
 tour.forEach(function(x,i){st.push({t:'tour',i:i});if(i===h-1)st.push({t:'frage',q:zeigFrage(L,i+1<tour.length?i+1:0)});});
 var f=L.fragen.slice().sort(function(a,b){return (a.type==='mc'?0:1)-(b.type==='mc'?0:1);});
 st.push({t:'beispiel'});f.forEach(function(q){st.push({t:'frage',q:q});});st.push({t:'fallen'},{t:'ende'});return st;
}
function zeigFrage(L,i){var x=L.tour[i];return {id:L.id+'-zeig',type:'zeig',optional:true,prompt:'Tippe im Formular auf die Stelle: «'+x[1]+'»',answer:x[0],hint:'Lies die fett gedruckten Bezeichnungen im Formular.',explanation:x[2],contentRevision:L.contentRevision,source_refs:L.source_refs};}
function fragenV6(l){var P=PK();return (P&&P.questions&&P.questions.questions||[]).filter(function(q){return q.lesson_id===l.id;});}
function schritteV6(l){
 var st=[{t:'v6-einstieg'}],vis=visual(l.visual);
 st.push({t:'v6-bild',v:vis,id:l.visual});
 (l.body||[]).forEach(function(b,i){st.push({t:'v6-text',i:i});});
 if(l.document_id&&unterlage(l.document_id))st.push({t:'v6-unterlage'});
 if(l.worked_example)st.push({t:'v6-beispiel'});
 if(l.how_to&&l.how_to.length)st.push({t:'v6-anleitung'});
 if(l.mistake_clinic||l.do||l.dont)st.push({t:'v6-falle'});
 fragenV6(l).forEach(function(q){st.push({t:'frage',q:q});});
 st.push({t:'v6-recap'},{t:'ende'});return st;
}
function finde(id){var b=B().filter(function(x){return x.id===id;})[0];if(b)return {art:'grund',l:b};var P=PK();if(P){var l=P.content.lessons.filter(function(x){return x.id===id;})[0];if(l)return {art:'v6',l:l};}return null;}
function stabil(v){if(Array.isArray(v))return v.map(stabil);if(v&&typeof v==='object'){var o={};Object.keys(v).sort().forEach(function(k){if(typeof v[k]!=='function')o[k]=stabil(v[k]);});return o;}return v;}
function fingerabdruck(f,st){var raw=JSON.stringify(stabil({lesson:f.l,steps:st}));return 'content-v1:'+hash(raw).toString(36)+':'+hash(raw.split('').reverse().join('')).toString(36);}

/* ── Spieler-Zustand ── */
var S=null,popIgnorieren=false,inertListe=[];
function neuerLauf(id,fp){return {rid:Date.now().toString(36)+Math.random().toString(36).slice(2,7),fp:fp,i:0,ts:Date.now(),xp:0,serie:0,opt:{},q:{}};}
function sichereLauf(){if(!S||S.fertigGespeichert)return;var m=lies();S.run.i=S.i;S.run.ts=Date.now();m.runs[S.l.id]=S.run;schreibe();}
var entwurfTimer=null;function entwurfSpaeter(){clearTimeout(entwurfTimer);entwurfTimer=setTimeout(sichereLauf,250);}
function oeffne(id,opt){
 var f=finde(id);if(!f)return false;
 var zur=S?S.zurueck:document.activeElement;
 if(S)schliesse(true);
 var st=f.art==='grund'?schritteGrund(f.l):schritteV6(f.l),fp=fingerabdruck(f,st),m=lies(),run=m.runs[id],hinweis='';
 if(run&&run.fp!==fp){var archive=id+'@alt-'+(run.fp||'').slice(0,40)+'-'+(run.rid||Date.now());if(!m.runs[archive])m.runs[archive]=run;run=null;hinweis='Diese Lektion wurde überarbeitet. Dein früherer Stand bleibt gespeichert; du beginnst die neue Fassung von vorn.';}
 if(opt&&opt.neu&&run){m.runs[id+'@abgebrochen-'+run.rid]=run;run=null;}
 var weiter=!!run&&(run.i>0||Object.keys(run.q||{}).length>0);
 if(!run)run=neuerLauf(id,fp);
 S={f:f,l:f.l,st:st,run:run,i:Math.min(run.i||0,st.length-1),antwort:null,versuch:0,zurueck:zur,hinweis:hinweis||(weiter?'Du machst dort weiter, wo du aufgehört hast.':''),weiter:weiter};
 var el=document.createElement('div');el.id='lp';el.className='lp lf';el.setAttribute('role','dialog');el.setAttribute('aria-modal','true');el.setAttribute('aria-label',f.l.titel||f.l.title);
 document.body.appendChild(el);S.el=el;document.documentElement.classList.add('lf-offen');
 /* Hintergrund inert */
 inertListe=[].filter.call(document.body.children,function(c){return c!==el&&!c.inert&&c.tagName!=='SCRIPT';});inertListe.forEach(function(c){c.inert=true;c.setAttribute('data-lf-inert','');});
 el.addEventListener('click',klick);el.addEventListener('input',eingabe);el.addEventListener('keydown',taste);
 try{history.replaceState(history.state,'',location.pathname+location.search.replace(/([?&])life=[^&]*&?/,'$1').replace(/[?&]$/,'')+location.hash);history.pushState({lf:id},'',location.href);}catch(x){}
 zeichne();sichereLauf();return true;
}
function schliesse(still){
 if(!S)return;
 if(S.fertigGespeichert){delete lies().runs[S.l.id];schreibe();}else sichereLauf();
 var z=S.zurueck,id=S.l.id;S.el.remove();S=null;document.documentElement.classList.remove('lf-offen');
 inertListe.forEach(function(c){c.inert=false;c.removeAttribute('data-lf-inert');});inertListe=[];
 if(still==='pop'){}else if(!still){try{if(history.state&&history.state.lf){popIgnorieren=true;history.back();}}catch(x){}}
 if(!still||still==='pop'){var v=document.getElementById('v-leben');if(v&&!v.hidden)hub();
  var ziel=(z&&z.isConnected&&!z.closest('[inert]'))?z:(document.querySelector('[data-life="'+id+'"]')||document.querySelector('#v-leben h1')||document.querySelector('main h1'));
  try{if(ziel){if(!ziel.hasAttribute('tabindex')&&!/^(BUTTON|A|INPUT)$/.test(ziel.tagName))ziel.tabIndex=-1;ziel.focus();}}catch(x){}}
}
window.addEventListener('popstate',function(){if(popIgnorieren){popIgnorieren=false;return;}if(S)schliesse('pop');});
window.addEventListener('pagehide',function(){if(S)sichereLauf();});
document.addEventListener('visibilitychange',function(){if(document.visibilityState==='hidden'&&S)sichereLauf();});

function anteil(){return Math.round(S.i/(S.st.length-1)*100);}
function schalter(a,an,sym,label){return '<button type="button" class="lp-ton lf-sw" data-a="'+a+'" aria-pressed="'+an+'" aria-label="'+label+(an?' an':' aus')+'" title="'+label+'">'+sym+'</button>';}
function rahmen(inhalt,fuss){
 var vib=!!navigator.vibrate;
 return '<div class="lp-kopf"><button type="button" class="lp-zu" data-a="zu" aria-label="Schliessen (Stand wird gespeichert)">✕</button><div class="lp-balken" role="progressbar" aria-label="Fortschritt in dieser Lektion" aria-valuemin="0" aria-valuemax="100" aria-valuenow="'+anteil()+'"><i style="width:'+anteil()+'%"></i></div>'
  +schalter('ton',tonAn(),tonAn()?'🔊':'🔇','Ton')+(vib?schalter('vib',pref('vib'),pref('vib')?'📳':'📴','Vibration'):'')+schalter('bew',pref('bew'),pref('bew')?'✨':'⏸','Animationen')
  +'<span class="lp-xp" aria-label="Punkte">⚡<b>'+(S.run.xp||0)+'</b></span>'+((S.run.serie||0)>=2?'<span class="lp-serie" aria-label="Richtig in Folge">🔥 '+S.run.serie+'</span>':'')+'</div>'
  +'<div class="lf-warnplatz">'+warnHtml()+'</div>'
  +'<div class="lp-mitte"><div class="lp-inhalt">'+inhalt+'</div></div><div class="lp-fuss"><div class="lp-rueck" role="status" aria-live="polite" hidden></div><div class="lf-fussreihe">'
  +(S.i>0?'<button type="button" class="lp-skip lf-zurueck" data-a="zurueck">← Zurück</button>':'')
  +(fuss||'<button type="button" class="lp-los" data-a="weiter">Weiter</button>')+'</div></div>';
}
function ober(t){var L=S.l;return '<p class="lp-ober">'+(S.f.art==='grund'?'Grundlage '+L.nr+' · ':'')+e(t)+'</p>';}
function notiz(){return '<p class="lf-notiz" role="note">ⓘ '+e(du(S.l.education_notice||T.notice))+'</p>';}
function zeichne(){
 var x=S.st[S.i],L=S.l,h='',fuss=null;S.el.className='lp lf lp-'+x.t;S.antwort=null;S.versuch=0;
 var hin=S.hinweis?'<p class="lf-weiterhin" role="status">'+e(S.hinweis)+(S.weiter?' <button type="button" class="lf-wbtn" data-a="neu">Von vorn beginnen</button>':'')+'</p>':'';S.hinweis='';
 if(x.t==='einstieg')h=hin+ober('Los geht’s')+'<h2 class="lp-titel"><span class="lf-ic" aria-hidden="true">'+L.bild+'</span>'+e(L.titel)+'</h2>'+blase(satz('begruessen')||'Hallo!',e(L.einstieg),'begruessen')
  +'<p class="lp-wozu"><b>Wozu?</b> '+e(L.wozu)+'</p><div class="lp-ziele"><span>Darum geht es</span><ul>'+L.ziele.map(function(z){return '<li>'+e(z)+'</li>';}).join('')+'</ul></div>'+notiz();
 else if(x.t==='begriffe')h=hin+ober('Wörter, die du gleich brauchst')+'<h2 class="lp-titel">Tippe auf jede Karte</h2><p class="lp-hilfe">Vorne das Wort, hinten die Erklärung in einfachen Worten.</p><div class="lp-karten">'
  +L.begriffe.map(function(b,i){return '<button type="button" class="lp-flip lf-flip" data-a="flip" style="--i:'+i+'"><span class="lp-vorn">'+e(b[0])+'</span><span class="lp-hinten">'+e(b[1])+'</span></button>';}).join('')+'</div>';
 else if(x.t==='ueberblick')h=hin+ober('So ist es aufgebaut')+'<h2 class="lp-titel">Das ganze Muster</h2>'+blase('Keine Panik!','Das sieht nach viel aus. Wir gehen gleich jede <strong>Nummer</strong> einzeln durch. Du kannst schon jetzt auf eine Nummer tippen.','denken')+dokument(L.doc,0)+'<div class="lf-pop" hidden></div>';
 else if(x.t==='tour'){var t=L.tour[x.i];h=hin+ober('Feld '+(x.i+1)+' von '+L.tour.length)+'<div class="lf-klebe">'+blase(t[1],e(t[2]),x.i%3===2?'staunen':'warten')+'</div>'+dokument(L.doc,t[0]);}
 else if(x.t==='beispiel')h=hin+ober('Gemeinsam nachrechnen')+'<h2 class="lp-titel">So rechnet Lea</h2>'+blase('Schau mir zu','Ich zeige es dir am Muster. Danach bist du dran.','denken')+'<div class="lp-beispiel lf-stufen"><span>Beispiel</span>'+L.beispiel.split(/(?<=\.)\s+(?=[A-ZÄÖÜ0-9])/).map(function(s,i){return '<p style="--i:'+i+'">'+e(s)+'</p>';}).join('')+'</div>'+refDok();
 else if(x.t==='fallen')h=hin+ober('Pass auf')+'<h2 class="lp-titel">Typische Fallen</h2><div class="lf-fallen">'+L.fehler.map(function(f,i){return '<div class="lf-falle" style="--i:'+i+'"><span aria-hidden="true">⚠️</span><p>'+e(f)+'</p></div>';}).join('')+'</div>';
 else if(x.t==='v6-einstieg')h=hin+'<p class="lp-ober">Vertiefen</p><h2 class="lp-titel">'+e(L.title)+'</h2>'+blase(satz('begruessen')||'Hallo!',e(du(L.opening||L.objective)),'begruessen')+'<p class="lp-wozu"><b>Ziel:</b> '+e(du(L.objective))+'</p>'+notiz();
 else if(x.t==='v6-bild')h=hin+'<p class="lp-ober">Auf einen Blick</p>'+(x.v?schaubild(x.v):'<figure class="lf-kette lf-ohne"><figcaption>Schaubild</figcaption><p>Zu dieser Lektion ist kein Schaubild hinterlegt ('+e(x.id||'ohne Kennung')+'). Weiter mit der Erklärung.</p></figure>');
 else if(x.t==='v6-text')h=hin+'<p class="lp-ober">Verstehen '+(x.i+1)+' von '+L.body.length+'</p>'+blase(x.i?'Weiter geht’s':'Stell dir vor …',e(du(L.body[x.i])),x.i%2?'denken':'warten');
 else if(x.t==='v6-unterlage')h=hin+'<p class="lp-ober">Die Unterlage zum Fall</p>'+unterlage(L.document_id);
 else if(x.t==='v6-beispiel')h=hin+'<p class="lp-ober">Beispiel</p><div class="lp-beispiel"><span>So sieht es aus</span><p>'+e(du(L.worked_example))+'</p></div>';
 else if(x.t==='v6-anleitung')h=hin+'<p class="lp-ober">Schritt für Schritt</p><ol class="lf-anl">'+L.how_to.map(function(s,i){return '<li style="--i:'+i+'">'+e(du(s))+'</li>';}).join('')+'</ol>';
 else if(x.t==='v6-falle')h=hin+'<p class="lp-ober">Pass auf</p><div class="lf-fallen">'+(L.mistake_clinic?'<div class="lf-falle"><span aria-hidden="true">⚠️</span><p><b>Falle:</b> '+e(du(L.mistake_clinic.wrong))+'</p></div><div class="lf-falle lf-gut"><span aria-hidden="true">✅</span><p><b>Besser:</b> '+e(du(L.mistake_clinic.repair))+'</p></div>':'')
  +(L.do?'<div class="lf-falle lf-gut"><span aria-hidden="true">👍</span><p><b>Mach:</b> '+e(du(L.do))+'</p></div>':'')+(L.dont?'<div class="lf-falle"><span aria-hidden="true">✋</span><p><b>Lass:</b> '+e(du(L.dont))+'</p></div>':'')+'</div>';
 else if(x.t==='v6-recap')h=hin+recap();
 else if(x.t==='frage'){h=hin+frage(x.q);fuss=fragenFuss(x.q);}
 else if(x.t==='ende'){h=hin+ende();fuss='<button type="button" class="lp-los" data-a="zu">Zur Übersicht</button>';}
 S.el.innerHTML=rahmen(h,fuss);beleben(S.el);
 if(x.t==='frage')stelleWiederHer(x.q);
 var ti=S.el.querySelector('.lp-titel,.lp-frage-t,.lp-blase b,.lp-ober');if(ti){ti.tabIndex=-1;try{ti.focus({preventScroll:true});}catch(x2){}}
 if(x.t==='tour'){var a=S.el.querySelector('.lf-an');if(a)setTimeout(function(){try{a.scrollIntoView({block:'center',behavior:pref('bew')?'smooth':'auto'});}catch(x3){}},60);}
}
function refDok(){return S.f.art==='grund'&&S.l.doc?'<details class="lf-ref"><summary>Muster ansehen</summary>'+dokument(S.l.doc,0)+'</details>':'';}
function recap(){var L=S.l,P=PK(),rc=P&&P.content.reference_cards&&L.reference_card?P.content.reference_cards.filter(function(r){return r.id===L.reference_card;})[0]:null;
 var mehr=(L.visual_refs||[]).filter(function(v){return v!==L.visual;}).map(visual).filter(Boolean);
 return '<p class="lp-ober">Das Wichtigste</p><h2 class="lp-titel">Zusammengefasst</h2>'+(L.recap&&L.recap.length?'<ol class="lf-anl">'+L.recap.map(function(s,i){return '<li style="--i:'+i+'">'+e(du(s))+'</li>';}).join('')+'</ol>':'')
  +(L.takeaway&&L.takeaway.length?'<div class="lp-ziele"><span>Merke</span><ul>'+L.takeaway.map(function(s){return '<li>'+e(du(s))+'</li>';}).join('')+'</ul></div>':'')
  +(L.teachback?'<p class="lp-wozu"><b>Erklär es jemandem:</b> '+e(du(L.teachback))+'</p>':'')
  +(L.practice_prompt?'<details class="lf-ref"><summary>Freiwillige Zusatzübung</summary><p>'+e(du(L.practice_prompt))+'</p></details>':'')
  +(rc?'<details class="lf-ref"><summary>Nachschlagen: '+e(du(rc.title))+'</summary><p>'+e(du(rc.concept||''))+'</p>'+(rc.worked_reading?'<p>'+e(du(rc.worked_reading))+'</p>':'')+'</details>':'')
  +(mehr.length?'<details class="lf-ref"><summary>Weitere Schaubilder ('+mehr.length+')</summary>'+mehr.map(function(v){return schaubild(v,true);}).join('')+'</details>':'')
  +quellen(L.source_refs);}
function frage(q){
 var h='';
 if(q.context)h+='<div class="lf-fall" role="note"><b>'+e(T.kontext)+'</b><p>'+e(du(q.context))+'</p></div>';
 h+='<div class="lp-fr-kopf">'+figur('denken','lf-fig-k')+'<h2 class="lp-frage-t">'+e(du(q.prompt))+'</h2></div>';
 if(q.visual_ref){var v=visual(q.visual_ref);if(v)h+='<details class="lf-ref" open><summary>Schaubild zur Frage</summary>'+schaubild(v,true)+'</details>';}
 if(q.type==='mc'||q.type==='selection'){var ord=reihenfolge(q);h+=(q.type==='selection'?'<p class="lp-hilfe">Mehrere Antworten möglich.</p>':'')+'<div class="lp-optionen" role="'+(q.type==='mc'?'radiogroup':'group')+'">'+ord.map(function(i,pos){return '<button type="button" class="lp-opt" role="'+(q.type==='mc'?'radio':'checkbox')+'" aria-checked="false" data-o="'+i+'" style="--i:'+pos+'"><span class="lp-k">'+'ABCDEFGH'[pos]+'</span><span>'+e(du(q.options[i]))+'</span></button>';}).join('')+'</div>';}
 else if(q.type==='numeric')h+='<label class="lp-zahl"><span>Deine Antwort'+(q.unit?' in '+e(q.unit):'')+'</span><input class="lp-eingabe" inputmode="decimal" maxlength="128" autocomplete="off" enterkeyhint="done" placeholder="z. B. 12.50"></label>';
 else if(q.type==='order'){S.reihe=[];var ro=reihenfolge(q);h+='<p class="lp-hilfe">Tippe die Schritte in der richtigen Reihenfolge an.</p><ol class="lf-reihe" aria-live="polite"></ol><div class="lp-optionen">'+ro.map(function(i,pos){return '<button type="button" class="lp-opt" data-r="'+i+'" style="--i:'+pos+'"><span class="lp-k">•</span><span>'+e(du(q.items[i]))+'</span></button>';}).join('')+'</div>';}
 else if(q.type==='zeig')h+=dokument(S.l.doc,0);
 if(q.type!=='zeig'){if(S.f.art==='grund'&&S.l.doc)h+='<details class="lf-ref"'+(q.context_document_required?' open':'')+'><summary>Muster ansehen</summary>'+dokument(S.l.doc,0)+'</details>';
  else if(S.f.art==='v6'&&S.l.document_id){var u=unterlage(S.l.document_id);if(u)h+='<details class="lf-ref"><summary>Unterlage zum Fall</summary>'+u+'</details>';}}
 return h;
}
function reihenfolge(q){var n=(q.type==='order'?q.items:q.options).length,o=S.run.opt[q.id];
 if(o&&o.length===n)return o;
 var a=[],i;for(i=0;i<n;i++)a.push(i);var r=hash(S.run.rid+'|'+q.id);
 for(i=n-1;i>0;i--){r=(Math.imul(r,1103515245)+12345)>>>0;var j=r%(i+1),t=a[i];a[i]=a[j];a[j]=t;}
 if(q.type==='order'&&n>1&&a.every(function(v,k){return v===k;})){a.push(a.shift());}
 S.run.opt[q.id]=a;return a;}
function fragenFuss(q){var z=S.run.q[q.id];if(z&&z.phase==='rueck')return '<button type="button" class="lp-los" data-a="weiter">Weiter</button>';
 return (q.optional!==false?'<button type="button" class="lp-skip" data-a="skip">'+e(T.skip)+'</button>':'')+'<button type="button" class="lp-los" data-a="pruefen" disabled>Prüfen</button>';}
function bereit(ok){var b=S.el.querySelector('[data-a=pruefen]');if(b)b.disabled=!ok;}
function zustandQ(q){return S.run.q[q.id]||(S.run.q[q.id]={phase:'entwurf',v:0});}
function eingabe(ev){if(ev.target.classList.contains('lp-eingabe')){if(ev.target.value.length>128){S.antwort=null;bereit(false);ev.target.setCustomValidity('Die Antwort ist zu lang. Bitte nur die Zahl eingeben.');ev.target.reportValidity();return;}ev.target.setCustomValidity('');S.antwort=ev.target.value.trim()||null;var z=zustandQ(S.st[S.i].q);z.a=S.antwort;bereit(!!S.antwort);entwurfSpaeter();}}
function stelleWiederHer(q){
 var z=S.run.q[q.id];if(!z)return;S.versuch=z.v||0;
 var a=z.a;
 if(a!=null){
  if(q.type==='numeric'){var inp=S.el.querySelector('.lp-eingabe');if(inp)inp.value=a;S.antwort=a;}
  else if(q.type==='mc'){var b=S.el.querySelector('.lp-opt[data-o="'+a+'"]');if(b){b.classList.add('an');b.setAttribute('aria-checked','true');}S.antwort=a;}
  else if(q.type==='selection'){(a||[]).forEach(function(i){var b2=S.el.querySelector('.lp-opt[data-o="'+i+'"]');if(b2){b2.classList.add('an');b2.setAttribute('aria-checked','true');}});S.antwort=a&&a.length?a.slice():null;}
  else if(q.type==='zeig'){var m=S.el.querySelector('.lf-m[data-m="'+a+'"]');if(m)m.classList.add('an');S.antwort=a;}
  else if(q.type==='order'){S.reihe=(a||[]).slice();var ol=S.el.querySelector('.lf-reihe');S.reihe.forEach(function(i){var bb=S.el.querySelector('[data-r="'+i+'"]');if(bb){bb.disabled=true;bb.classList.add('an');}var li=document.createElement('li');li.textContent=du(q.items[i]);ol.appendChild(li);});S.antwort=S.reihe.length===q.items.length?S.reihe.slice():null;}
 }
 if(z.phase==='rueck'){
  if(z.skip)rueck('lp-hinweis','warten','Ohne Wertung weitergegangen.','Diese Aufgabe zählt nicht. Du kannst sie über «Zurück» später noch lesen.'+(q.explanation?' Erklärung: '+du(q.explanation):''),q.weg);
  else if(z.ok)rueck('lp-gut','freuen',T.gut[hash(q.id)%T.gut.length],du(q.explanation),q.weg);
  else rueck('lp-schlecht','aufmuntern','So geht es:',(q.type==='numeric'?'Richtig ist '+q.answer+(q.unit?' '+q.unit:'')+'. ':'')+du(q.explanation),q.weg);
  if(!z.skip)markiere(q);else [].forEach.call(S.el.querySelectorAll('.lp-opt,.lf-m'),function(b){b.disabled=true;});
 }else{bereit(S.antwort!=null);if(S.versuch)rueck('lp-hinweis','aufmuntern',T.retry,'Tipp: '+du(q.hint||'Lies die Frage noch einmal langsam.'),null);}
}
function taste(ev){
 if(ev.key==='Escape'){ev.preventDefault();schliesse();return;}
 if(ev.key==='Tab'){var f=[].filter.call(S.el.querySelectorAll('button:not([disabled]),input:not([disabled]),a[href],summary,[tabindex]:not([tabindex="-1"])'),function(n){return n.offsetParent!==null||n===document.activeElement;});
  if(!f.length)return;var first=f[0],last=f[f.length-1],act=document.activeElement;
  if(ev.shiftKey&&(act===first||!S.el.contains(act))){ev.preventDefault();last.focus();}
  else if(!ev.shiftKey&&(act===last||!S.el.contains(act))){ev.preventDefault();first.focus();}return;}
 if(ev.key==='Enter'&&ev.target.classList.contains('lp-eingabe')){var b=S.el.querySelector('.lp-los:not([disabled])');if(b){ev.preventDefault();b.click();}}
}
document.addEventListener('focusin',function(ev){if(S&&!S.el.contains(ev.target)){var t=S.el.querySelector('.lp-zu');if(t)t.focus();}});
function bewerte(q,a){
 if(q.type==='zeig')return a===q.answer;
 if(q.type==='order')return !!a&&a.length===q.answer.length&&a.every(function(x,i){return x===q.answer[i];});
 try{return window.MnemikaLifeCore.evaluate(q,a).correct;}catch(x){return false;}
}
function plus(n){if(!pref('bew'))return;var el=document.createElement('span');el.className='lf-plus';el.textContent='+'+n;var k=S.el.querySelector('.lp-xp');if(k){k.appendChild(el);setTimeout(function(){el.remove();},1100);}}
function rueck(cls,art,titel,text,weg){
 var r=S.el.querySelector('.lp-rueck');r.hidden=false;r.className='lp-rueck '+cls;
 r.innerHTML=figur(art,'lf-fig-r')+'<div><b>'+e(titel)+'</b><p>'+e(text)+'</p>'+(weg&&weg.length?'<details class="lp-weg"><summary>Lösungsweg ansehen</summary><ol>'+weg.map(function(w){return '<li>'+e(du(w))+'</li>';}).join('')+'</ol></details>':'')+'</div>';beleben(r);
}
function beleg(q,ergebnis,hilfe){var m=lies(),k=q.id+'@'+(q.contentRevision||q.revision||0);if(!m.ev[k])m.ev[k]={erst:ergebnis,hilfe:!!hilfe,d:heute(),lesson:S.l.id};else m.ev[k].n=(m.ev[k].n||1)+1;}
function pruefen(){
 var q=S.st[S.i].q,z=zustandQ(q);if(z.phase==='rueck')return;
 var ok=bewerte(q,S.antwort),btn=S.el.querySelector('[data-a=pruefen]'),sk=S.el.querySelector('[data-a=skip]');
 z.a=S.antwort;
 if(ok){
  z.phase='rueck';z.ok=true;S.run.serie=(S.run.serie||0)+1;var p=z.v?5:10;S.run.xp=(S.run.xp||0)+p;fx('gut');plus(p);
  beleg(q,z.v?'mit_hinweis':'richtig',!!z.v);
  rueck('lp-gut',S.run.serie>=3?'jubeln':'freuen',T.gut[hash(q.id)%T.gut.length],du(q.explanation),q.weg);
  markiere(q);btn.dataset.a='weiter';btn.textContent='Weiter';btn.disabled=false;if(sk)sk.remove();
  var k=S.el.querySelector('.lp-xp b');if(k)k.textContent=S.run.xp;
 }else if(!z.v){
  z.v=1;S.versuch=1;S.run.serie=0;fx('falsch');if(!S.run.q[q.id].erstFalsch){S.run.q[q.id].erstFalsch=true;beleg(q,'falsch',false);}
  rueck('lp-hinweis','aufmuntern',T.retry,'Tipp: '+du(q.hint||'Lies die Frage noch einmal langsam.'),null);
  var w=S.el.querySelector('.lp-opt.an,.lf-m.an,.lp-eingabe');if(w&&pref('bew')){w.classList.add('lf-wackel');setTimeout(function(){w.classList.remove('lf-wackel');},500);}
  if(q.type==='order')reiheReset();
 }else{
  z.phase='rueck';z.ok=false;S.run.serie=0;fx('falsch');
  rueck('lp-schlecht','aufmuntern','So geht es:',(q.type==='numeric'?'Richtig ist '+q.answer+(q.unit?' '+q.unit:'')+'. ':'')+du(q.explanation),q.weg);
  markiere(q);btn.dataset.a='weiter';btn.textContent='Weiter';btn.disabled=false;if(sk)sk.remove();
 }
 sichereLauf();
}
function ueberspringen(){var q=S.st[S.i].q,z=zustandQ(q);if(z.phase==='rueck')return;z.phase='rueck';z.skip=true;var m=lies(),k=q.id+'@'+(q.contentRevision||q.revision||0);if(!m.ev[k])m.ev[k]={erst:'ohne_wertung',d:heute(),lesson:S.l.id};sichereLauf();weiter();}
function markiere(q){
 [].forEach.call(S.el.querySelectorAll('.lp-opt[data-o]'),function(b){var i=+b.dataset.o,soll=q.type==='mc'?i===q.answer:(q.answers||[]).indexOf(i)>=0;if(soll)b.classList.add('richtig');else if(b.classList.contains('an'))b.classList.add('falsch');b.disabled=true;});
 [].forEach.call(S.el.querySelectorAll('[data-r]'),function(b){b.disabled=true;});
 if(q.type==='zeig'){var r=S.el.querySelector('.lf-doc [data-n="'+q.answer+'"]');if(r)r.classList.add('lf-an');[].forEach.call(S.el.querySelectorAll('.lf-m'),function(b){b.disabled=true;});}
 var inp=S.el.querySelector('.lp-eingabe');if(inp)inp.readOnly=true;
}
function reiheReset(){S.reihe=[];S.antwort=null;var z=S.run.q[S.st[S.i].q.id];if(z)z.a=null;S.el.querySelector('.lf-reihe').innerHTML='';[].forEach.call(S.el.querySelectorAll('[data-r]'),function(b){b.disabled=false;b.classList.remove('an');});bereit(false);}
function bilanz(){var r={richtig:0,hilfe:0,falsch:0,ohne:0,gesamt:0};S.st.forEach(function(s){if(s.t!=='frage')return;r.gesamt++;var z=S.run.q[s.q.id];if(!z||z.phase!=='rueck'||z.skip){r.ohne++;return;}if(z.ok&&!z.v)r.richtig++;else if(z.ok)r.hilfe++;else r.falsch++;});return r;}
function ende(){
 var L=S.l,b=bilanz(),gew=b.richtig+b.hilfe+b.falsch,pz=gew?Math.round(b.richtig/gew*100):null,sterne=pz==null?0:pz>=90?3:pz>=70?2:pz>=40?1:0,ok=true;
 if(!S.fertigGespeichert){var m=lies(),alt=m.l[L.id];
  m.l[L.id]={p:pz==null?(alt?alt.p:0):Math.max(pz,alt&&alt.rev===(L.contentRevision||L.revision||0)?alt.p||0:0),d:heute(),rev:L.contentRevision||L.revision||0,erst:b.richtig,hilfe:b.hilfe,falsch:b.falsch,ohne:b.ohne,fragen:b.gesamt};
  m.xp=(m.xp||0)+(S.run.xp||0);delete m.runs[L.id];S.fertigGespeichert=true;ok=schreibe();
  if(ok)setTimeout(function(){fx('fertig');},150);}
 else ok=!Sp.offen;
 setTimeout(function(){ladePack().then(function(P){if(!S)return;[].forEach.call(S.el.querySelectorAll('.lf-chip'),function(c){var x=P.content.lessons.filter(function(z){return z.id===c.dataset.id;})[0];if(x)c.textContent=x.title;});}).catch(function(){});},0);
 var weiter='';if(S.f.art==='grund'){var n=B()[B().indexOf(L)+1];if(n)weiter='<button type="button" class="lp-zweit lf-naechste" data-a="oeffne" data-id="'+n.id+'"><span aria-hidden="true">'+n.bild+'</span> Nächste Grundlage: '+e(n.kurz)+'</button>';}
 var vt=(L.vertiefen||[]).map(function(id){var P=PK(),x=P&&P.content.lessons.filter(function(z){return z.id===id;})[0];return '<button type="button" class="lf-chip" data-a="oeffne" data-id="'+id+'">'+e(x?x.title:'Vertiefung')+'</button>';}).join('');
 return '<div class="lp-ende">'+(ok&&sterne?'<div class="lp-konfetti" aria-hidden="true">'+new Array(18).join('<i></i>')+'</div>':'')+figur(sterne>=2?'freuen':'aufmuntern','lf-held')
  +'<h2 class="lp-titel">'+(ok?'Lernbeispiel bearbeitet':'Bearbeitet, aber noch nicht gespeichert')+'</h2>'
  +(pz!=null?'<p class="lp-sterne" aria-label="'+sterne+' von 3 Sternen">'+[1,2,3].map(function(i){return i<=sterne?'<b style="--i:'+i+'">★</b>':'<span>★</span>';}).join('')+'</p>':'')
  +'<div class="lp-zahlen"><div><b>'+b.richtig+'</b><span>beim ersten Versuch</span></div><div><b>'+b.hilfe+'</b><span>mit Hinweis</span></div><div><b>'+b.falsch+'</b><span>noch üben</span></div><div><b>'+b.ohne+'</b><span>ohne Wertung</span></div></div>'
  +'<p class="lp-lob">'+e(T.ergebnis)+'</p>'+notiz()
  +'<div class="lp-wahl">'+weiter+(vt?'<p class="lf-vt">Mehr dazu:</p><div class="lf-chips">'+vt+'</div>':'')+'</div>'
  +quellen(L.source_refs,S.f.art==='grund'?'Fassung '+(L.contentRevision||'')+' · quellengeprüfte redaktionelle Überarbeitung, keine Fachfreigabe.':'')+'</div>';
}
function weiter(){fx('schritt');if(S.i<S.st.length-1){S.i++;zeichne();var mi=S.el.querySelector('.lp-mitte');if(mi)mi.scrollTop=0;sichereLauf();}}
function klick(ev){
 if(!S)return;
 /* Klick auf den freien Hintergrund schliesst (Stand wird gespeichert) */
 if(ev.target===S.el||ev.target.classList.contains('lp-mitte')){var inh=S.el.querySelector('.lp-inhalt');if(inh){var r=inh.getBoundingClientRect();if(ev.clientX<r.left-8||ev.clientX>r.right+8){schliesse();return;}}}
 var b=ev.target.closest('button');if(!b)return;var a=b.dataset.a;
 if(a==='zu'){fx('tipp');schliesse();return;}
 if(a==='ton'||a==='vib'||a==='bew'){var k=a,neu=!pref(k);setzePref(k,neu);var syms={ton:['🔊','🔇'],vib:['📳','📴'],bew:['✨','⏸']},lab={ton:'Ton',vib:'Vibration',bew:'Animationen'};b.textContent=syms[k][neu?0:1];b.setAttribute('aria-pressed',neu);b.setAttribute('aria-label',lab[k]+(neu?' an':' aus'));fx('tipp');return;}
 if(a==='weiter'){weiter();return;}
 if(a==='zurueck'){fx('tipp');if(S.i>0){S.i--;zeichne();sichereLauf();}return;}
 if(a==='neu'){var id0=S.l.id;oeffne(id0,{neu:true});return;}
 if(a==='skip'){fx('tipp');ueberspringen();return;}
 if(a==='pruefen'){pruefen();return;}
 if(a==='gross'){var fig=b.closest('.lf-vis');if(fig){var an=fig.classList.toggle('lf-gross');b.setAttribute('aria-pressed',an);b.textContent=an?'Verkleinern':'Vergrössern';}return;}
 if(a==='flip'){b.classList.toggle('um');fx('tipp');return;}
 if(a==='oeffne'){var id=b.dataset.id;fx('tipp');var zur=S.zurueck;if(!finde(id)){ladePack().then(function(){oeffne(id);if(S)S.zurueck=zur;});}else{oeffne(id);if(S)S.zurueck=zur;}return;}
 var x=S.st[S.i];
 if(b.classList.contains('lf-m')&&x.t==='ueberblick'){var n=+b.dataset.m,t=S.l.tour.filter(function(z){return z[0]===n;})[0],pop=S.el.querySelector('.lf-pop');fx('tipp');
  [].forEach.call(S.el.querySelectorAll('.lf-m.an'),function(z){z.classList.remove('an');});b.classList.add('an');
  if(t){pop.hidden=false;pop.innerHTML='<b>'+n+' · '+e(t[1])+'</b><p>'+e(t[2])+'</p>';}return;}
 if(x.t!=='frage'||b.disabled)return;var q=x.q,z=zustandQ(q);if(z.phase==='rueck')return;
 if(q.type==='zeig'&&b.classList.contains('lf-m')){[].forEach.call(S.el.querySelectorAll('.lf-m.an'),function(zz){zz.classList.remove('an');});b.classList.add('an');S.antwort=+b.dataset.m;z.a=S.antwort;bereit(true);fx('tipp');entwurfSpaeter();return;}
 if(b.dataset.o!=null){fx('tipp');var i=+b.dataset.o;
  if(q.type==='mc'){[].forEach.call(S.el.querySelectorAll('.lp-opt'),function(zz){zz.classList.remove('an');zz.setAttribute('aria-checked','false');});b.classList.add('an');b.setAttribute('aria-checked','true');S.antwort=i;}
  else{b.classList.toggle('an');b.setAttribute('aria-checked',b.classList.contains('an'));S.antwort=[].map.call(S.el.querySelectorAll('.lp-opt.an'),function(zz){return +zz.dataset.o;});if(!S.antwort.length)S.antwort=null;}
  z.a=S.antwort;bereit(S.antwort!=null);entwurfSpaeter();return;}
 if(b.dataset.r!=null){fx('tipp');S.reihe.push(+b.dataset.r);b.disabled=true;b.classList.add('an');var li=document.createElement('li');li.textContent=du(q.items[+b.dataset.r]);S.el.querySelector('.lf-reihe').appendChild(li);
  S.antwort=S.reihe.length===q.items.length?S.reihe.slice():null;z.a=S.reihe.slice();bereit(!!S.antwort);entwurfSpaeter();}
}

/* ── Pack nachladen (für Vertiefen) ── */
var packLauf=null;
function ladePack(){
 if(PK())return Promise.resolve(PK());if(packLauf)return packLauf;
 packLauf=new Promise(function(ok,nein){var s=document.createElement('script');s.src='assets/js/life-pack.js?v='+(M.__lifePackV||'');s.onload=function(){ok(PK());};s.onerror=function(){s.remove();packLauf=null;nein(new Error('pack'));};document.head.appendChild(s);});
 return packLauf;
}

/* ── Übersicht #v-leben ── */
var STIMMEN=window.MNEMIKA_STIMMEN||[]; /* nur echte, freigegebene Rückmeldungen mit Einwilligung; leer = Abschnitt erscheint nicht */
function hub(){
 var v=document.getElementById('v-leben');if(!v)return;var st=lies(),G=B(),fertig=G.filter(function(l){return st.l[l.id];}).length,
  laufend=G.filter(function(l){return st.runs[l.id];})[0],naechste=laufend||G.filter(function(l){return !st.l[l.id];})[0]||G[0];
 v.className='view lf-hub';
 v.innerHTML='<div class="lf-warnplatz">'+warnHtml()+'</div><header class="r39-start lf-held-kopf"><div class="r39-start-copy"><p class="lf-kick">SCHULE FÜRS LEBEN</p><h1>Papierkram? Kriegst du hin.</h1>'
  +'<p>'+e(T.hubIntro)+'</p>'
  +(naechste?'<button type="button" class="lf-cta" data-life="'+naechste.id+'">'+(laufend?'Weitermachen: ':fertig?'Weiter mit: ':'Starte mit: ')+e(naechste.kurz)+' →</button>':'')
  +'<p class="lf-notiz">ⓘ '+e(T.notice)+'</p>'
  +'<div class="lf-fort" aria-label="'+fertig+' von '+G.length+' Grundlagen bearbeitet"><div><i style="width:'+Math.round(fertig/G.length*100)+'%"></i></div><span>'+fertig+' von '+G.length+' Grundlagen bearbeitet · ⚡ '+(st.xp||0)+'</span></div></div>'
  +'<aside class="r39-welcome lf-welcome">'+figur('begruessen','lf-fig-hub')+'<div><b>Frau Keller</b><p>'+e(T.hubLehrer)+'</p></div></aside></header>'
  +'<section class="lf-wie" aria-label="So funktioniert es"><div style="--i:0"><span aria-hidden="true">👀</span><b>Muster ansehen</b><p>So ist es aufgebaut.</p></div><div style="--i:1"><span aria-hidden="true">👆</span><b>Feld für Feld</b><p>Jede Nummer erklärt.</p></div><div style="--i:2"><span aria-hidden="true">✍️</span><b>Selbst probieren</b><p>Freiwillige Aufgaben mit Tipp und Lösungsweg.</p></div></section>'
  +'<h2 class="lf-h2">Die 10 Grundlagen</h2><div class="lf-gitter">'+G.map(function(l,i){var s=st.l[l.id],r=st.runs[l.id];return '<button type="button" class="lf-karte'+(s?' lf-ok':'')+'" data-life="'+l.id+'" style="--i:'+i+'"><span class="lf-bild" aria-hidden="true">'+l.bild+'</span><span class="lf-nr">'+l.nr+'</span><b>'+e(l.kurz)+'</b><em>'+e(l.wozu)+'</em><span class="lf-stand">'+(r?'▶ angefangen':s?(s.fragen!=null?'✓ '+s.erst+'/'+(s.fragen-(s.ohne||0))+' beim 1. Versuch':'✓ '+(s.p||0)+' %'):'≈ 7 Min.')+'</span></button>';}).join('')+'</div>'
  +(STIMMEN.length?'<h2 class="lf-h2">Das sagen Lernende</h2><div class="lf-stimmen">'+STIMMEN.map(function(s){return '<blockquote><p>«'+e(s.text)+'»</p><cite>'+e(s.wer)+'</cite></blockquote>';}).join('')+'</div>':'')
  +'<h2 class="lf-h2">Vertiefen: 34 Themen</h2><div class="lf-module" aria-busy="true"><p class="lf-laedt">Themen werden geladen …</p></div>'
  +'<h2 class="lf-h2">Werkzeuge</h2><div class="lf-werkzeug"><button type="button" class="lf-tool" data-life-tools="1"><span aria-hidden="true" class="lf-bild">🧰</span><span><b>Rechner, Selbstchecks und Nachschlagen</b><em>Budget, Lohn, Krankenkasse, Glossar</em></span><span aria-hidden="true">→</span></button></div>'
  +'<div class="lf-werkzeug"><button type="button" class="lf-tool" data-lf-save="export"><span aria-hidden="true" class="lf-bild">💾</span><span><b>Lernstand «Schule fürs Leben» sichern</b><em>Datei mit beiden Speicherbereichen (alt und neu). Ist auch in der Hauptsicherung enthalten.</em></span><span aria-hidden="true">↓</span></button></div>'
  +'<p class="lf-hinweis">'+e(T.beta)+' Lernangebot mit erfundenen Beispielen. Keine Finanz-, Steuer- oder Rechtsberatung. Zählt nicht für deinen Abschluss.</p>';
 beleben(v);
 ladePack().then(function(P){var box=v.querySelector('.lf-module');if(!box)return;box.removeAttribute('aria-busy');
  box.innerHTML=P.content.modules.map(function(m,i){var ls=m.lessons.map(function(id){return P.content.lessons.filter(function(l){return l.id===id;})[0];}).filter(Boolean),ok=ls.filter(function(l){return st.l[l.id];}).length;
   return '<details class="lf-modul" style="--i:'+(i%10)+'"><summary><b>'+e(du(m.title))+'</b><span>'+ok+'/'+ls.length+'</span><em>'+e(du(m.description))+'</em></summary><ul>'+ls.map(function(l){return '<li><button type="button" data-life="'+l.id+'">'+(st.runs[l.id]?'▶ ':st.l[l.id]?'✓ ':'')+e(du(l.title))+'</button></li>';}).join('')+'</ul></details>';}).join('');
 }).catch(function(){var box=v.querySelector('.lf-module');if(box)box.innerHTML='<p class="lf-laedt">Die Vertiefungen laden nur mit Internet. Die 10 Grundlagen funktionieren auch so.</p>';});
}
function zeigeHub(){hub();try{M.go('leben');}catch(x){}var v=document.getElementById('v-leben');if(v&&v.hidden){[].forEach.call(document.querySelectorAll('main > .view'),function(s){s.hidden=s!==v;});}window.scrollTo(0,0);}

function krume(){var n=document.querySelector('#mn-where [aria-current=page]');if(n&&document.body.dataset.view==='leben')n.textContent='Schule fürs Leben';}
/* ── Startseiten-Karte ── */
function startKarte(){
 var G=B();if(!G.length)return;var st=lies(),f=G.filter(function(l){return st.l[l.id];}).length;
 ['v-home','v-programs'].forEach(function(id){var v=document.getElementById(id);if(!v||v.hidden||v.querySelector('.lf-start-karte'))return;
  var k=document.createElement('button');k.type='button';k.className='lf-start-karte';k.setAttribute('data-life','');
  k.innerHTML='<span class="lf-sk-ic" aria-hidden="true">🧾💰🏠</span><span class="lf-sk-t"><small>NEU · SCHULE FÜRS LEBEN</small><b>Lohn, Rechnungen, Krankenkasse, Miete, Steuern</b><em>'+(f?f+' von '+G.length+' Grundlagen bearbeitet. Weiter!':'Musterformulare, Feld für Feld erklärt. 10 × 7 Minuten.')+'</em></span><span class="lf-sk-pf" aria-hidden="true">→</span>';
  var h=v.querySelector('.r39-start');if(h&&h.parentNode===v)h.insertAdjacentElement('afterend',k);else v.insertBefore(k,v.firstChild);});
}

/* ── Verdrahtung ── */
function oeffneId(id,opt){if(!id){zeigeHub();return;}if(finde(id)){oeffne(id,opt);return;}ladePack().then(function(){if(!oeffne(id,opt))zeigeHub();}).catch(zeigeHub);}
document.addEventListener('click',function(ev){
 var t=ev.target.closest&&ev.target.closest('[data-life-tools]');
 if(t){ev.preventDefault();ev.stopImmediatePropagation();fx('tipp');if(M.__lifeTools)M.__lifeTools();return;}
 var b=ev.target.closest&&ev.target.closest('[data-life]');if(!b||(S&&S.el.contains(b)))return;
 ev.preventDefault();ev.stopImmediatePropagation();var mp=document.getElementById('menupop');if(mp&&mp.contains(b))mp.hidden=true;fx('tipp');oeffneId(b.getAttribute('data-life'));
},true);
var go0=M.go;if(typeof go0==='function'&&!go0.__lf){var w=function(v){if(v==='leben')hub();var r=go0.apply(this,arguments);if(v==='leben')setTimeout(krume,20);setTimeout(startKarte,30);setTimeout(startKarte,300);return r;};w.__lf=true;for(var k in go0)if(!(k in w))w[k]=go0[k];M.go=w;}

/* ── Mehr Leben im normalen Lernpfad: Tipp-Ton, Schritt-Ton, «+Punkte»-Animation (rein zusätzlich, ändert keine Bewertung) ── */
document.addEventListener('click',function(ev){var lp=document.getElementById('lp');if(!lp||lp.classList.contains('lf')||!lp.contains(ev.target))return;
 var b=ev.target.closest('button');if(!b)return;if(b.classList.contains('lp-opt')||b.classList.contains('lp-flip'))fx('tipp');else if(b.classList.contains('lp-los')&&!b.disabled&&/Weiter|Los|Start/i.test(b.textContent))fx('schritt');},true);
var xpAlt=null;
setInterval(function(){var lp=document.getElementById('lp');if(!lp||lp.classList.contains('lf')){xpAlt=null;return;}var k=lp.querySelector('.lp-xp b');if(!k)return;var n=parseInt(k.textContent,10);
 if(xpAlt!=null&&n>xpAlt&&pref('bew')){var el=document.createElement('span');el.className='lf-plus';el.textContent='+'+(n-xpAlt);k.parentNode.appendChild(el);setTimeout(function(){el.remove();},1100);}xpAlt=n;},250);
M.lifeV7={validateState:gueltig,_zustand:function(){return S;},_geheZu:function(i){if(S&&i>=0&&i<S.st.length){S.i=i;zeichne();sichereLauf();}},oeffne:oeffneId,hub:zeigeHub,schliesse:function(){schliesse();},fx:fx,_stand:lies,exportieren:exportiere,speicherStatus:function(){lies();return {geschuetzt:Sp.schutz,ungespeichert:Sp.offen,fehler:Sp.fehler};}};
function start(){bewegungKlasse();startKarte();var id=null;try{id=new URLSearchParams(location.search).get('life');}catch(x){}
 if(id!=null&&/^[a-z0-9-]{0,40}$/.test(id))oeffneId(id);else if(/^#leben/.test(location.hash)){hub();setTimeout(function(){hub();krume();},50);}
 setTimeout(startKarte,500);setTimeout(startKarte,1500);}
window.addEventListener('hashchange',function(){if(/^#leben/.test(location.hash))setTimeout(function(){hub();krume();},0);});
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else setTimeout(start,0);
})();
