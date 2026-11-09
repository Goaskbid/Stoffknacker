/* Stoffknacker: Google Analytics 4 mit Einwilligung (zentral, für Startseite und alle Unterseiten).
   Regeln:
   - Standard: aus. Vor «Akzeptieren» wird kein Google-Skript geladen und keine Anfrage gesendet.
   - Entscheidung lokal unter eigenem Schlüssel (getrennt von KI-, Werbe- und anderen Einwilligungen).
   - Nach Zustimmung: gtag.js genau einmal laden, Seitenaufrufe selbst senden (send_page_view:false),
     nur bereinigte Adressen ohne Abfrageparameter, keine User-ID, keine eigenen Ereignisse mit Lerndaten.
   - Google Signals und Werbepersonalisierung aus, Werbe-Speicher bleibt «denied».
   - Widerruf: sofort aus (ga-disable), Analytics-Cookies löschen, beim nächsten Besuch nicht wieder an.
   - Unter 16 (Angabe in der App) oder bei «Do Not Track»/«Global Privacy Control»: nie laden.
   - Offline oder blockiert: Fehler werden still verworfen; der Lernbetrieb läuft unverändert. */
(function () {
  'use strict';
  if (window.__skAnalytics) return;
  var ID = 'G-48TLHWVD61';
  var KEY = 'stoffknacker-analytics-consent-v1';
  var VERSION = 1;
  var w = window, d = document;
  var A = w.__skAnalytics = { id: ID, key: KEY, geladen: false, gesendet: [], letzte: '' };

  function lies() {
    try { var o = JSON.parse(localStorage.getItem(KEY) || 'null'); if (o && o.v === VERSION && (o.wahl === 'ja' || o.wahl === 'nein')) return o; } catch (e) {}
    return null;
  }
  function schreib(wahl) {
    try { localStorage.setItem(KEY, JSON.stringify({ v: VERSION, wahl: wahl, am: new Date().toISOString().slice(0, 10) })); } catch (e) {}
  }
  function signalAus() {
    try { if (navigator.globalPrivacyControl === true) return true; } catch (e) {}
    try { var t = navigator.doNotTrack || w.doNotTrack; if (t === '1' || t === 'yes') return true; } catch (e) {}
    return false;
  }
  function minderjaehrig() {
    /* Nur eine ausdrückliche Angabe «minderjährig» in der App zählt (dort ist «unbekannt» sonst ebenfalls «minderjährig»). */
    try { return localStorage.getItem('mnemika-age') === 'minor'; } catch (e) { return false; }
  }
  /* Consent Mode: Voreinstellung «denied». Der Datenlayer existiert auch ohne Google-Skript (nur lokal). */
  w.dataLayer = w.dataLayer || [];
  function gtag() { w.dataLayer.push(arguments); }
  if (!w.gtag) w.gtag = gtag;
  gtag('consent', 'default', { analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', wait_for_update: 500 });

  /* Bereinigte Adresse: Ursprung + Pfad + gewählte Ansicht (und Kapitel-ID). Keine Abfrageparameter, kein freier Text. */
  var ANSICHT = /^[a-z0-9-]{1,40}$/;
  var aktuelleAnsicht = '', aktuellesKapitel = '';
  function sauber() {
    var pfad = (location.pathname || '/').replace(/[^A-Za-z0-9\/._-]/g, '');
    var h = '';
    if (aktuelleAnsicht && ANSICHT.test(aktuelleAnsicht) && aktuelleAnsicht !== 'home') {
      h = '#/' + aktuelleAnsicht + (aktuellesKapitel && /^[a-z0-9-]{1,120}$/.test(aktuellesKapitel) ? '/' + aktuellesKapitel : '');
    }
    return location.protocol + '//' + location.host + pfad + h;
  }
  function titel() { return 'Stoffknacker' + (aktuelleAnsicht && aktuelleAnsicht !== 'home' && ANSICHT.test(aktuelleAnsicht) ? ' · ' + aktuelleAnsicht : ''); }

  function cookiesLoeschen() {
    var namen = (d.cookie || '').split(';').map(function (c) { return c.split('=')[0].trim(); }).filter(function (n) { return /^(_ga|_gid|_gat)/.test(n); });
    var h = location.hostname, teile = h.split('.'), domains = ['', h, '.' + h];
    for (var i = 1; i < teile.length - 1; i++) { var dd = teile.slice(i).join('.'); domains.push(dd, '.' + dd); }
    namen.forEach(function (n) { domains.forEach(function (dm) { d.cookie = n + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/' + (dm ? '; domain=' + dm : ''); }); });
    return namen.length;
  }

  /* r176: wirksame Regel VOR jeder Abkürzung und vor jedem Ereignis: Zustimmung «ja», kein Signal, nicht minderjährig */
  function darf() { var o = lies(); return !!(o && o.wahl === 'ja') && !signalAus() && !minderjaehrig(); }
  function seitenaufruf() {
    if (!darf()) { w['ga-disable-' + ID] = true; return; }
    if (!A.geladen || w['ga-disable-' + ID]) return;
    var loc = sauber();
    if (loc === A.letzte) return;           /* keine doppelten Seitenaufrufe */
    A.letzte = loc; A.gesendet.push(loc);
    gtag('set', { page_location: loc, page_title: titel(), page_referrer: '' });
    gtag('event', 'page_view', { page_location: loc, page_title: titel(), page_referrer: '' });
  }

  function lade() {
    if (signalAus() || minderjaehrig()) { aus(); return; }
    if (A.geladen) { w['ga-disable-' + ID] = false; seitenaufruf(); return; }
    A.geladen = true; w['ga-disable-' + ID] = false;
    gtag('consent', 'update', { analytics_storage: 'granted' });
    gtag('js', new Date());
    gtag('config', ID, {
      send_page_view: false,
      page_location: sauber(), page_title: titel(), page_referrer: '',
      allow_google_signals: false, allow_ad_personalization_signals: false,
      cookie_flags: 'SameSite=Lax;Secure', cookie_expires: 15552000
    });
    try {
      var s = d.createElement('script');
      s.async = true; s.src = 'https://www.googletagmanager.com/gtag/js?id=' + ID;
      s.onerror = function () { A.fehler = 'nicht erreichbar'; };
      (d.head || d.documentElement).appendChild(s);
    } catch (e) { A.fehler = String(e); }
    seitenaufruf();
  }

  function aus() {
    w['ga-disable-' + ID] = true;
    gtag('consent', 'update', { analytics_storage: 'denied' });
    cookiesLoeschen();
  }

  A.zustimmen = function () { schreib('ja'); zu(); lade(); };
  A.ablehnen = function () { schreib('nein'); zu(); aus(); };
  A.widerrufen = function () { schreib('nein'); aus(); };
  A.status = function () { var o = lies(); return o ? o.wahl : 'offen'; };
  A.oeffne = function () { zeige(true); };

  /* ---------- Dialog ---------- */
  var CSS = '#sk-ga{position:fixed;left:16px;right:16px;bottom:16px;z-index:2147482000;max-width:560px;margin:0 auto;background:#fff;color:#14171f;border-radius:16px;box-shadow:0 12px 40px rgba(10,14,30,.28);padding:18px 18px 14px;font:15px/1.5 system-ui,-apple-system,"Segoe UI",sans-serif}'
    + '#sk-ga h2{font-size:17px;margin:0 0 6px}#sk-ga p{margin:0 0 10px}#sk-ga .sk-ga-k{font-size:13px;color:#4a5160}'
    + '#sk-ga .sk-ga-b{display:flex;gap:10px;flex-wrap:wrap;margin-top:6px}#sk-ga .sk-ga-b button{flex:1 1 140px;min-height:44px;border-radius:12px;border:2px solid #3b4bd8;background:#3b4bd8;color:#fff;font:600 15px/1 inherit;cursor:pointer;padding:0 14px}'
    + '#sk-ga .sk-ga-b button.sk-ga-mehr{flex:1 1 100%;background:transparent;border-color:transparent;color:#3b4bd8;text-decoration:underline;min-height:36px}'
    + '#sk-ga button:focus-visible{outline:3px solid #f5a524;outline-offset:2px}#sk-ga .sk-ga-info{font-size:13px;color:#30364a;border-top:1px solid #e3e6ef;margin-top:8px;padding-top:8px}#sk-ga .sk-ga-info a{color:#3b4bd8}'
    + '#sk-ga .sk-ga-z{font-size:13px;color:#30364a;margin:4px 0 0}'
    + '@media (prefers-color-scheme:dark){#sk-ga{background:#1b1f2b;color:#eef0f6}#sk-ga .sk-ga-k,#sk-ga .sk-ga-info,#sk-ga .sk-ga-z{color:#c9cede}#sk-ga .sk-ga-info a,#sk-ga .sk-ga-b button.sk-ga-mehr{color:#9fb0ff}}';
  var INFO = '<div class="sk-ga-info" hidden><p><b>Google Analytics</b> ist ein Dienst von Google Ireland Limited (Dublin, Irland), verbunden mit Google LLC (USA). '
    + 'Mit deiner Zustimmung erfasst er, welche Seiten und Bereiche von Stoffknacker aufgerufen werden, mit Gerätetyp, Browser, ungefährem Land und Zeitpunkt. '
    + 'Dafür setzt Google Cookies (_ga, _ga_…) mit einer Laufzeit von höchstens 6 Monaten. Lernantworten, Ergebnisse, Eingaben in Formularen und deine Lernstände werden nie gesendet. '
    + 'Google Signals und Werbepersonalisierung sind ausgeschaltet. Daten können in die USA übermittelt werden; Google ist nach dem EU-US Data Privacy Framework und der Schweizer Erweiterung zertifiziert.</p>'
    + '<p>Zustimmen kannst du ab 16 Jahren. Bist du jünger, wähle bitte «Ablehnen» oder frag deine Eltern. Du kannst deine Wahl jederzeit unter «Datenschutz-Einstellungen» ändern; bereits übertragene Daten werden dadurch nicht rückwirkend gelöscht.</p>'
    + '<p><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Datenschutzerklärung von Google</a> · <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">Wie Google Daten auf Websites nutzt</a> · <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Browser-Erweiterung zur Deaktivierung</a></p></div>';

  function zu() { var x = d.getElementById('sk-ga'); if (x) x.remove(); }
  function zeige(manuell) {
    zu();
    if (!d.getElementById('sk-ga-css')) { var st = d.createElement('style'); st.id = 'sk-ga-css'; st.textContent = CSS; (d.head || d.documentElement).appendChild(st); }
    var s = A.status();
    var box = d.createElement('div');
    box.id = 'sk-ga'; box.setAttribute('role', 'dialog'); box.setAttribute('aria-labelledby', 'sk-ga-t'); box.setAttribute('aria-describedby', 'sk-ga-d');
    box.innerHTML = '<h2 id="sk-ga-t">' + (manuell ? 'Datenschutz-Einstellungen' : 'Darf Stoffknacker mitzählen?') + '</h2>'
      + '<p id="sk-ga-d">Wir möchten verstehen, wie Stoffknacker genutzt wird, damit wir die Lernplattform verbessern können. Mit deiner Zustimmung verwenden wir dafür Google Analytics. Ohne Zustimmung funktioniert die Website vollständig und kostenlos.</p>'
      + (manuell ? '<p class="sk-ga-z">Aktuelle Wahl: <b>' + (s === 'ja' ? 'Google Analytics erlaubt' : s === 'nein' ? 'Google Analytics abgelehnt' : 'noch nicht entschieden') + '</b>'
          + (signalAus() ? ' · Dein Browser sendet «Nicht verfolgen»; Google Analytics bleibt deshalb aus.' : '') + (minderjaehrig() ? ' · Du hast angegeben, minderjährig zu sein; Google Analytics bleibt deshalb aus.' : '') + '</p>' : '')
      + '<div class="sk-ga-b"><button type="button" class="sk-ga-ja">Akzeptieren</button><button type="button" class="sk-ga-nein">Ablehnen</button><button type="button" class="sk-ga-mehr" aria-expanded="false">Mehr erfahren</button></div>'
      + INFO;
    box.querySelector('.sk-ga-ja').onclick = A.zustimmen;
    box.querySelector('.sk-ga-nein').onclick = A.ablehnen;
    box.querySelector('.sk-ga-mehr').onclick = function () { var i = box.querySelector('.sk-ga-info'); i.hidden = !i.hidden; this.setAttribute('aria-expanded', String(!i.hidden)); };
    box.addEventListener('keydown', function (e) { if (e.key === 'Escape' && manuell) zu(); });
    (d.body || d.documentElement).appendChild(box);
    if (manuell) { try { box.querySelector('.sk-ga-ja').focus(); } catch (e) {} }
  }

  /* Menüpunkt und Fusszeilen-Link «Datenschutz-Einstellungen» (dauerhaft erreichbar) */
  function verknuepfe() {
    d.addEventListener('click', function (e) {
      var t = e.target && e.target.closest && e.target.closest('[data-sk-ga]');
      if (!t) return; e.preventDefault();
      try { var m = d.getElementById('menupop'); if (m) m.hidden = true; } catch (x) {}
      zeige(true);
    });
    var menu = d.getElementById('menupop');
    if (menu && !menu.querySelector('[data-sk-ga]')) {
      var b = d.createElement('button'); b.className = 'mp'; b.type = 'button'; b.setAttribute('data-sk-ga', ''); b.textContent = 'Datenschutz-Einstellungen';
      menu.appendChild(b);
    }
  }

  /* Datenschutzerklärung und Cookie-Seite der App um einen eigenen Abschnitt ergänzen */
  var ABSCHNITT = '<h3>Google Analytics (nur mit Einwilligung)</h3>'
    + '<p><b>Anbieter:</b> Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland; verbunden mit Google LLC, USA. <b>Zweck:</b> verstehen, welche Bereiche von Stoffknacker genutzt werden, um die Lernplattform zu verbessern.</p>'
    + '<p><b>Verarbeitete Nutzungsdaten:</b> aufgerufene Seite und Ansicht (bereinigte Adresse ohne Suchbegriffe oder Eingaben), Zeitpunkt, Gerätetyp, Browser, Bildschirmgrösse, ungefähres Land oder Region, eine zufällige Cookie-Kennung. IP-Adressen werden von Google Analytics 4 nicht gespeichert. <b>Nie gesendet:</b> Namen, E-Mail-Adressen, Lernantworten, Freitexte, Prüfungsergebnisse, Formularwerte, Finanz- oder Steuerangaben, Lernstände. Es gibt keine User-ID. Google Signals und Werbepersonalisierung sind ausgeschaltet.</p>'
    + '<p><b>Rechtsgrundlage, Einwilligung und Widerruf:</b> Google Analytics lädt erst, wenn du im Hinweis «Akzeptieren» wählst (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG, § 165 Abs. 3 TKG 2021 in Österreich; in der Schweiz nach Art. 6 und 19 DSG mit Information und Widerspruchsmöglichkeit). Ohne Zustimmung lädt nichts. Unter «Datenschutz-Einstellungen» kannst du jederzeit widerrufen: Die Erfassung stoppt sofort, die Analytics-Cookies werden gelöscht. Bereits übertragene Daten werden dadurch nicht rückwirkend gelöscht. Zustimmen kannst du ab 16 Jahren; wer angibt, minderjährig zu sein, und Browser mit «Do Not Track» oder «Global Privacy Control» werden nie erfasst.</p>'
    + '<p><b>Cookies:</b> _ga und _ga_&lt;Kennung&gt;, Laufzeit höchstens 6 Monate. Deine Entscheidung speichert Stoffknacker lokal in deinem Browser (Schlüssel «stoffknacker-analytics-consent-v1»).</p>'
    + '<p><b>Übermittlung ins Ausland:</b> Daten können an Google LLC in den USA gehen. Google ist nach dem EU-US Data Privacy Framework und dessen Schweizer Erweiterung zertifiziert; zusätzlich gelten Standardvertragsklauseln. <b>Speicherdauer bei Google:</b> 2 Monate.</p>'
    + '<p>Mehr: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Datenschutzerklärung von Google</a> · <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">Wie Google Daten auf Websites nutzt</a> · <a href="https://support.google.com/analytics/answer/6004245" target="_blank" rel="noopener noreferrer">Datenschutz in Google Analytics</a> · <button type="button" class="btn sm" data-sk-ga>Datenschutz-Einstellungen öffnen</button></p>';
  function rechtstexte() {
    var M = w.MNEMIKA; if (!M || !M.LEGAL || M.LEGAL.__skGA) return !!(M && M.LEGAL && M.LEGAL.__skGA);
    ['privacy', 'cookies'].forEach(function (k) {
      var f = M.LEGAL[k]; if (typeof f !== 'function') return;
      M.LEGAL[k] = function () {
        var h = f.apply(this, arguments);
        if (k === 'privacy' && h.indexOf('<h3>Speicherdauer</h3>') >= 0) return h.replace('<h3>Speicherdauer</h3>', ABSCHNITT + '<h3>Speicherdauer</h3>');
        return h + ABSCHNITT;
      };
    });
    M.LEGAL.__skGA = true; return true;
  }

  /* Navigation in der App (ohne Seitenwechsel) */
  function haenge() {
    var M = w.MNEMIKA; if (!M || typeof M.go !== 'function' || M.go.__skGA) return !!(M && M.go && M.go.__skGA);
    var go = M.go;
    var neu = function (v, id) { var r = go.apply(this, arguments); try { aktuelleAnsicht = String(v || ''); aktuellesKapitel = (v === 'read' && id) ? String(id) : ''; setTimeout(seitenaufruf, 0); } catch (e) {} return r; };
    for (var k in go) if (Object.prototype.hasOwnProperty.call(go, k)) neu[k] = go[k];
    neu.__skGA = true; M.go = neu; return true;
  }

  /* Werbe-Einwilligung der App überschreibt die Analytics-Wahl nicht */
  function konsentSchutz() {
    var M = w.MNEMIKA; if (!M || typeof M.pushConsent !== 'function' || M.pushConsent.__skGA) return;
    var pc = M.pushConsent;
    M.pushConsent = function () { var r = pc.apply(this, arguments); gtag('consent', 'update', { analytics_storage: (A.geladen && !w['ga-disable-' + ID]) ? 'granted' : 'denied' }); return r; };
    M.pushConsent.__skGA = true;
  }

  function start() {
    verknuepfe();
    var n = 0; (function warte() { var a = rechtstexte(), b = haenge(); konsentSchutz(); if ((!a || !b) && n++ < 120 && w.MNEMIKA !== undefined) setTimeout(warte, 250); else if (!w.MNEMIKA && n++ < 8) setTimeout(warte, 250); })();
    var o = lies();
    if (o && o.wahl === 'ja') lade();
    else if (o && o.wahl === 'nein') aus();
    else if (!signalAus()) setTimeout(function () { if (!lies()) zeige(false); }, 600);
  }
  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', start); else start();
})();
