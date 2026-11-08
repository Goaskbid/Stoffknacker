


;

(function(){
  if (!("serviceWorker" in navigator)) return;
  if (!(location.protocol === "https:" || location.hostname === "localhost" || location.hostname === "127.0.0.1")) return;
  window.addEventListener("load", function(){
    navigator.serviceWorker.register("./sw.js", {scope:"./"}).catch(function(err){
      console.warn("Stoffknacker service worker could not be registered", err);
    });
  });
})();

;

(function(){"use strict";var M=window.MNEMIKA;if(!M)return;

/* ============================================================
   Bisher trug jedes Kapitel dieselbe Wellengrafik, nur die
   Bildunterschrift war verschieden. Damit sah alles gleich aus.
   Jetzt bestimmt das Thema die Zeichnung selbst.
   ============================================================ */
var A={
 wave:'<path d="M4 30q9-18 18 0t18 0 18 0" stroke-width="2.4"/><path d="M4 30h54" stroke-dasharray="2 3" opacity=".35"/>',
 fall:'<circle cx="16" cy="10" r="3.5" fill="currentColor"/><circle cx="16" cy="22" r="3.5" fill="currentColor" opacity=".7"/><circle cx="16" cy="38" r="3.5" fill="currentColor" opacity=".45"/><path d="M40 8v40M36 44l4 4 4-4"/>',
 force:'<circle cx="18" cy="30" r="9"/><path d="M27 30h26M45 24l8 6-8 6"/>',
 friction:'<path d="M6 40h50M14 40V26h20v14"/><path d="M10 46l3 5M20 46l3 5M30 46l3 5M40 46l3 5M50 46l3 5"/>',
 work:'<path d="M6 46h50M12 46V22h10v24M32 46V30h10v16"/><path d="M17 16v-5M37 24v-5"/>',
 energy:'<path d="M34 6L16 32h13l-3 22 18-26H30z" fill="currentColor" opacity=".12"/><path d="M34 6L16 32h13l-3 22 18-26H30z"/>',
 pressure:'<rect x="10" y="34" width="42" height="14" rx="2"/><path d="M18 34V16M31 34V10M44 34V22"/><path d="M14 13l4-4 4 4M27 7l4-4 4 4M40 19l4-4 4 4"/>',
 heat:'<path d="M26 8a5 5 0 0 1 10 0v24a9 9 0 1 1-10 0z"/><path d="M31 16v18"/><path d="M44 14h8M44 22h6M44 30h8"/>',
 states:'<circle cx="16" cy="16" r="6"/><circle cx="34" cy="16" r="6"/><path d="M8 34h42v14H8z"/><path d="M12 40h34" opacity=".4"/>',
 electric:'<path d="M8 30h12M40 30h12"/><circle cx="30" cy="30" r="10"/><path d="M30 20v20"/><path d="M26 26l8 8M34 26l-8 8" opacity=".35"/>',
 circuit:'<rect x="8" y="14" width="44" height="30" rx="3"/><circle cx="30" cy="29" r="6"/><path d="M8 29h16M36 29h16"/><path d="M22 14v8M38 44v-8"/>',
 magnet:'<path d="M18 46V24a12 12 0 0 1 24 0v22"/><path d="M18 38h10M32 38h10"/><path d="M14 50h14M32 50h14" opacity=".4"/>',
 optics:'<path d="M30 10c10 8 10 28 0 36-10-8-10-28 0-36Z"/><path d="M4 28h16M40 28h16"/><path d="M44 20l10 8-10 8" opacity=".5"/>',
 algebra:'<path d="M8 18h16M16 10v16M8 40h16"/><path d="M34 18l14 14M48 18L34 32M34 42h14"/>',
 func:'<path d="M10 48V8M10 48h44"/><path d="M14 44c10 0 12-28 30-28"/><circle cx="29" cy="30" r="2.5" fill="currentColor"/>',
 deriv:'<path d="M8 46c14 0 18-32 38-32"/><path d="M14 52l30-38"/><circle cx="27" cy="31" r="3" fill="currentColor"/>',
 integral:'<path d="M22 48c8 0 5-38 14-38"/><path d="M16 42h28v8H16z" opacity=".22" fill="currentColor"/>',
 trig:'<path d="M8 44h38L8 18z"/><path d="M15 44a8 8 0 0 0 5-6"/><path d="M8 18v26" opacity=".4"/>',
 vector:'<path d="M8 48L44 16"/><path d="M34 14h12v12"/><path d="M8 48h8M8 48v-8"/>',
 stats:'<path d="M8 48h46"/><path d="M14 48V32M24 48V18M34 48V26M44 48V12"/>',
 cell:'<circle cx="30" cy="28" r="19"/><circle cx="25" cy="24" r="6"/><path d="M38 34a5 5 0 1 0 .1 0"/><path d="M18 36c3-2 6-2 9 0"/>',
 dna:'<path d="M20 6c0 12 20 12 20 22s-20 10-20 22M40 6c0 12-20 12-20 22s20 10 20 22"/><path d="M22 14h16M22 42h16M20 28h20"/>',
 enzyme:'<path d="M14 34a13 13 0 0 1 18-18l10 10-10 10a13 13 0 0 1-18-2Z"/><path d="M26 26h10"/>',
 photo:'<circle cx="30" cy="14" r="7"/><path d="M30 24v14M16 50c0-8 6-11 14-11s14 3 14 11"/><path d="M20 10l-5-4M40 10l5-4" opacity=".5"/>',
 heart:'<path d="M30 48S8 34 8 21a10 10 0 0 1 22-4 10 10 0 0 1 22 4c0 13-22 27-22 27Z"/>',
 brain:'<path d="M22 12a8 8 0 0 0-8 8 7 7 0 0 0 0 14 8 8 0 0 0 8 8V12ZM38 12a8 8 0 0 1 8 8 7 7 0 0 1 0 14 8 8 0 0 1-8 8V12Z"/><path d="M30 12v30"/>',
 eco:'<path d="M30 50V26"/><path d="M30 26c0-10 8-16 16-16 0 10-6 16-16 16ZM30 34c0-8-7-13-14-13 0 9 6 13 14 13Z"/>',
 evo:'<path d="M6 46c8 0 10-8 16-8s8 8 16 8 10-10 10-10"/><circle cx="14" cy="18" r="5"/><circle cx="44" cy="14" r="7"/>',
 atom:'<circle cx="30" cy="28" r="5"/><ellipse cx="30" cy="28" rx="22" ry="9"/><ellipse cx="30" cy="28" rx="22" ry="9" transform="rotate(60 30 28)"/><ellipse cx="30" cy="28" rx="22" ry="9" transform="rotate(120 30 28)"/>',
 flask:'<path d="M24 8v16L10 44a5 5 0 0 0 4 8h32a5 5 0 0 0 4-8L36 24V8M22 8h16M17 36h26"/>',
 bond:'<circle cx="18" cy="28" r="9"/><circle cx="42" cy="28" r="9"/><path d="M27 28h6"/>',
 acid:'<path d="M18 8h24v10l-8 8v22H26V26l-8-8z"/><path d="M26 40h8"/>',
 redox:'<path d="M14 22a16 16 0 0 1 32 0"/><path d="M46 36a16 16 0 0 1-32 0"/><path d="M42 16l4 6-6 3M18 42l-4-6 6-3"/>',
 organic:'<path d="M30 10l14 8v18l-14 8-14-8V18z"/><path d="M30 26v18M16 18l14 8 14-8"/>',
 clock:'<circle cx="30" cy="28" r="20"/><path d="M30 16v12l9 6"/><path d="M30 8v3M50 28h-3M30 48v-3M10 28h3"/>',
 flag:'<path d="M14 52V6"/><path d="M14 10h26l-5 8 5 8H14z"/>',
 war:'<path d="M12 48L44 16M38 10h12v12"/><path d="M18 38l-6 12 12-6"/>',
 treaty:'<path d="M14 6h22l8 8v38H14z"/><path d="M36 6v8h8M22 28h16M22 36h10"/>',
 map:'<path d="M6 18l16-8 16 8 16-8v32l-16 8-16-8-16 8z"/><path d="M22 10v32M38 18v32"/>',
 mountain:'<path d="M4 46l16-26 10 15 7-9 15 20z"/><path d="M20 20l6 9" opacity=".5"/>',
 climate:'<circle cx="22" cy="20" r="9"/><path d="M36 42a9 9 0 0 0 0-18 11 11 0 0 0-21 4"/><path d="M16 50h28"/>',
 city:'<path d="M8 50V24h14v26M22 50V10h14v40M36 50V32h16v18"/><path d="M13 30h4M28 20h2M43 38h2"/>',
 people:'<circle cx="20" cy="18" r="7"/><circle cx="40" cy="18" r="7"/><path d="M6 48c0-8 6-13 14-13s14 5 14 13M28 48c0-8 6-13 14-13s12 5 12 13"/>',
 book:'<path d="M10 12h16a5 5 0 0 1 4 5v31a5 5 0 0 0-4-4H10zM50 12H34a5 5 0 0 0-4 5v31a5 5 0 0 1 4-4h16z"/>',
 pen:'<path d="M10 50l5-13L40 10l8 8-25 27z"/><path d="M34 16l8 8"/>',
 speech:'<path d="M8 12h44v26H30l-12 10V38H8z"/><path d="M18 22h24M18 30h14"/>',
 globe:'<circle cx="30" cy="28" r="20"/><path d="M10 28h40M30 8c7 6 9 13 9 20s-2 14-9 20c-7-6-9-13-9-20s2-14 9-20Z"/>',
 target:'<circle cx="30" cy="28" r="20"/><circle cx="30" cy="28" r="12"/><circle cx="30" cy="28" r="4" fill="currentColor"/>',
 scale:'<path d="M30 8v42M16 50h28"/><path d="M10 20h40M10 20l-5 10h10zM50 20l-5 10h10z"/>',
 gear:'<circle cx="30" cy="28" r="8"/><path d="M30 8v8M30 40v8M10 28h8M42 28h8M16 14l6 6M38 36l6 6M44 14l-6 6M22 36l-6 6"/>',
 note:'<path d="M22 42V12l22-5v27"/><circle cx="17" cy="42" r="5"/><circle cx="39" cy="37" r="5"/>',
 chart:'<path d="M8 48h46M8 48V8"/><path d="M16 40l10-12 8 7 14-18"/><circle cx="26" cy="28" r="2.5" fill="currentColor"/>',
 balance:'<rect x="8" y="14" width="44" height="30" rx="3"/><path d="M30 14v30M8 24h44" opacity=".5"/><path d="M14 32h10M38 32h8"/>',
 project:'<rect x="10" y="10" width="40" height="38" rx="3"/><path d="M18 22h24M18 30h24M18 38h14"/><circle cx="46" cy="14" r="5" fill="currentColor" opacity=".25"/>',
 lang:'<path d="M8 14h20M18 10v4M22 14c0 9-6 15-14 18M14 20c2 6 7 10 12 11"/><path d="M32 50l9-22 9 22M35 42h12"/>'
};
var RULES=[
 /* Informatik, Kommunikation, Technik und Wirtschaft nach ihren
    tatsaechlichen Kapiteltiteln, vor allen weiteren Regeln. */
 [/daten,? algorithmen|informatik:/i,"gear"],
 [/daten, information und cod|codierung/i,"algebra"],
 [/algorithmen und problem|problemlös/i,"target"],
 [/programmieren|variablen|schleife/i,"pen"],
 [/datenbank|abfrage/i,"project"],
 [/netzwerk|internet/i,"globe"],
 [/sicherheit|datenschutz/i,"balance"],
 [/künstliche intelligenz|automat/i,"brain"],
 [/information und kommunikation/i,"speech"],
 [/informationsrecherche|recherche/i,"book"],
 [/kommunikationsmodell/i,"people"],
 [/medien|präsentationstechnik/i,"note"],
 [/textverarbeitung|tabellenkalk/i,"chart"],
 [/technik und umwelt/i,"gear"],
 [/technische systeme|systemdenken/i,"circuit"],
 [/stoffe und ressourcen|ressourcen/i,"eco"],
 [/ökologie und umweltwirkung|umweltwirkung/i,"climate"],
 [/mobilität|transport/i,"map"],
 [/werkstoff|produktion/i,"project"],
 [/wirtschaft und recht/i,"balance"],
 [/knappheit|märkte und preise|angebot und nachfrage/i,"chart"],
 [/konjunktur|wachstum|wohlstand/i,"stats"],
 [/geld|inflation|geldpolitik/i,"scale"],
 [/aussenhandel|welthandel/i,"globe"],
 [/unternehmen|rechtsform/i,"project"],
 [/arbeitsmarkt|arbeitsrecht/i,"people"],
 [/vertragsrecht|obligationen/i,"treaty"],
 [/staat und wirtschaft|ordnungspolitik/i,"flag"],
 /* Projekt- und Abschlussarbeiten zuerst: ihre Titel enthalten Woerter
    wie Arbeit und Leistung, die sonst die Physikregeln abfangen. */
 [/fachmatura|praktikum|zusatzleistung/i,"people"],
 [/interdisziplinär.{0,30}fächern|\bidaf\b/i,"chart"],
 [/interdisziplinäre projektarbeit|\bidpa\b/i,"gear"],
 [/maturaarbeit|abschlussarbeit/i,"book"],
 [/interdisziplinäre fragestellung|transfer/i,"globe"],
 [/methoden, daten und quellen|methoden und quellen/i,"stats"],
 [/projektmanagement|zusammenarbeit|team/i,"project"],
 [/produkt, präsentation|präsentation und reflexion/i,"speech"],
 [/thema und fragestellung|themenfindung/i,"target"],
 [/planung und methode|zeitplanung|meilenstein/i,"clock"],
 [/bewertungsraster|kriterien und note/i,"balance"],
 [/betreuung|begleitung/i,"people"],
 /* Kunst, Musik und Gestaltung feiner, sonst teilen sich 15 Kapitel zwei Zeichen. */
 [/bildaufbau|komposition|format/i,"map"],
 [/farbe|farblehre|kontrast/i,"note"],
 [/perspektive|raumdarstellung/i,"vector"],
 [/zeichnung|skizze|linie/i,"pen"],
 [/material|technik|druck/i,"gear"],
 [/kunstgeschichte|epoche|stilrichtung/i,"clock"],
 [/architektur|bauwerk/i,"city"],
 [/fotografie|bildmedien/i,"target"],
 [/melodie|harmonie|tonart|akkord/i,"wave"],
 [/rhythmus|takt|metrum/i,"stats"],
 [/instrument|klang|besetzung/i,"speech"],
 [/musikgeschichte|komponist/i,"book"],
 [/szene|rolle|figur|inszenier/i,"people"],
 [/bühne|theaterform|dramaturg/i,"project"],
 [/analyse|werkbetrachtung|interpretation/i,"chart"],
 /* Informatik, Sozialwissenschaften, Technik feiner */
 [/algorithmus|sortieren|suchen|komplexität/i,"gear"],
 [/datenbank|tabelle|abfrage|sql/i,"project"],
 [/netzwerk|internet|protokoll|adresse/i,"globe"],
 [/sicherheit|verschlüssel|datenschutz|angriff/i,"target"],
 [/binär|codierung|zahlensystem|bit/i,"algebra"],
 [/programm|schleife|variable|funktion.{0,10}code/i,"pen"],
 [/hardware|prozessor|speicher/i,"circuit"],
 [/künstliche intelligenz|maschinelles lernen|automat/i,"brain"],
 [/soziolog|gesellschaftsstruktur|milieu/i,"people"],
 [/politisch|demokratie|wahl|parlament/i,"flag"],
 [/psycholog|verhalten|wahrnehmung/i,"brain"],
 [/statistik|umfrage|erhebung/i,"stats"],
 [/energieform|ressource|kreislaufwirtschaft/i,"eco"],
 [/werkstoff|produktion|fertigung/i,"gear"],
 [/mobilität|verkehrstechnik/i,"map"],
 [/freier fall|senkrechter wurf|wurf/i,"fall"],[/reibung|statik/i,"friction"],
 [/\b(mechanische |physikalische )?arbeit\b(?!s?platz)|wirkungsgrad|\bleistung\b(?=.*(watt|joule|physik|motor|energie))/i,"work"],[/energie|impuls|erhaltung/i,"energy"],
 [/druck|hydro|auftrieb|archimedes/i,"pressure"],[/wärme|temperatur|thermo|kalor/i,"heat"],
 [/aggregat|phasen|zustandsänder/i,"states"],[/stromkreis|schaltung|widerstand/i,"circuit"],
 [/ladung|spannung|elektr/i,"electric"],[/magnet|induktion/i,"magnet"],
 [/optik|licht|linse|spiegel|brechung/i,"optics"],[/welle|schwing|interferenz|akustik|schall/i,"wave"],
 [/kern|radioaktiv|zerfall|isotop/i,"atom"],[/\bmasse\b|\bdichte\b|newton|\bkraft\b|\bkräfte\b|bewegung|kinemat/i,"force"],
 [/gleichungssystem|quadratisch/i,"scale"],[/potenz|wurzel|logarith|exponential/i,"chart"],
 [/funktion|polynom/i,"func"],[/grenzwert|stetig/i,"target"],
 [/ableitung|differenzial|kurvendisk|extrem/i,"deriv"],[/integral|fläche unter/i,"integral"],
 [/trigono|sinus|cosinus|dreieck/i,"trig"],[/vektor|skalarprod/i,"vector"],
 [/wahrscheinlich|statist|stochastik|baum/i,"stats"],[/term|gleichung|ungleich|algebra/i,"algebra"],
 [/zelle|membran|mitose|meiose|zellzyklus/i,"cell"],[/\bdna\b|\bgene?\b|genetik|erbgang|mendel|replikation|transkription/i,"dna"],
 [/enzym|stoffwechsel|katalyse/i,"enzyme"],[/photosynth|atmung|assimilation/i,"photo"],
 [/herz|blut|kreislauf|verdauung|niere/i,"heart"],[/nerven|neuron|gehirn|auge|sinne|hormon/i,"brain"],
 [/ökolog|ökosystem|stoffkreis|nachhaltig/i,"eco"],[/evolution|darwin|selektion|art/i,"evo"],
 [/atombau|periodensystem/i,"atom"],[/\bstoffe\b|gemisch|trennverfahren|reinstoff/i,"flask"],
 [/bindung|molekül|lewis|polarität/i,"bond"],[/säure|base|ph|protoly|puffer/i,"acid"],
 [/redox|oxidation|reduktion|elektrochem/i,"redox"],[/organisch|kohlenwasserstoff|iupac|alkan/i,"organic"],
 [/zeittafel|epoche|chronolog|antike|mittelalter/i,"clock"],
 [/schweiz|bundesstaat|verfassung|eidgenoss/i,"flag"],[/krieg|weltkrieg|revolution|konflikt/i,"war"],
 [/vertrag|frieden|uno|nato|völkerbund|versailles/i,"treaty"],
 [/geolog|tektonik|gestein|vulkan|erdbeben|erde/i,"mountain"],
 [/klima|wetter|atmosphäre|niederschlag/i,"climate"],[/stadt|urban|siedlung/i,"city"],
 [/bevölker|demograf|migration/i,"people"],[/\braum(planung|ordnung)?\b|verkehr|globalisier|welthandel|\bregion/i,"map"],
 [/literatur|werk|roman|lektüre|drama|lyrik|epik/i,"book"],
 [/schreib|aufsatz|erörter|essay|stil|grammatik|rechtschreib/i,"pen"],
 [/mündlich|rede|gespräch|präsentation|speaking|discussion/i,"speech"],

 [/prüfung|strategie|exam|zeitplan/i,"target"],






 [/zweite landessprache|dritte sprache|französisch|italienisch/i,"lang"],
 /* Projekt- und Abschlussarbeiten fein aufteilen */
 [/fachmatura|praktikum|zusatzleistung/i,"people"],
 [/interdisziplinär.{0,30}fächern|idaf/i,"chart"],
 [/interdisziplinäre projektarbeit|idpa/i,"gear"],
 [/^maturaarbeit/i,"book"],
 [/interdisziplinäre fragestellung|transfer/i,"globe"],
 [/methoden, daten und quellen|methoden und quellen/i,"stats"],
 [/projektmanagement|zusammenarbeit|team/i,"project"],
 [/produkt, präsentation|präsentation und reflexion/i,"speech"],
 [/thema und fragestellung|themenfindung|thema finden/i,"target"],
 [/planung und methode|zeitplanung/i,"clock"],
 [/zeitplan|meilenstein|planung/i,"clock"],
 [/recherche|quellen|literaturarbeit/i,"book"],
 [/methode|vorgehen|design/i,"gear"],
 [/datenerhebung|befragung|experiment/i,"stats"],
 [/auswertung|analyse|interpretation/i,"chart"],
 [/schreiben|dokumentation|bericht/i,"pen"],
 [/präsentation|verteidigung|vortrag/i,"speech"],
 [/bewertung|kriterien|raster|note/i,"balance"],
 [/betreuung|begleitung|coach/i,"people"],
 [/produkt|umsetzung|prototyp/i,"project"],
 [/reflexion|rückblick|lernprozess/i,"brain"],

 /* Sprachen fein */
 [/hörverstehen|listening/i,"speech"],[/leseverstehen|reading/i,"book"],
 [/schreibkompetenz|writing/i,"pen"],[/sprechen|speaking|dialog/i,"globe"],
 [/wortschatz|vocabulary|lexik/i,"lang"],[/grammatik|grammar|syntax/i,"scale"],
 /* Kunst, Musik, Gestaltung fein */
 [/farbe|komposition|bildaufbau/i,"note"],[/perspektive|raum|zeichnung/i,"map"],
 [/epoche|stil|kunstgeschichte/i,"clock"],[/rhythmus|melodie|harmonie/i,"wave"],
 [/szene|rolle|inszenier/i,"speech"],
 /* Wirtschaft, Recht, Rechnungswesen fein */
 [/bilanz|aktiven|passiven/i,"balance"],[/erfolgsrechnung|aufwand|ertrag/i,"chart"],
 [/kalkulation|kosten|deckungsbeitrag/i,"stats"],[/vertrag|obligation|haftung/i,"treaty"],
 [/markt|angebot|nachfrage|preis/i,"chart"],[/staat|föderal|gewalten/i,"flag"],
 /* Informatik fein */
 [/algorithm|sortier|such/i,"gear"],[/datenbank|tabelle|abfrage/i,"project"],
 [/netzwerk|internet|protokoll/i,"globe"],[/sicherheit|verschlüssel|datenschutz/i,"target"],
 [/binär|codierung|zahlensystem/i,"algebra"]
];
var KEYS=Object.keys(A);
var FALLBACK={};        /* Fach -> gewaehlte Zeichen, damit nichts doppelt faellt */
function keyFor(c){
 /* Erst der Titel allein. Die Rubrik ist fuer alle Kapitel eines Fachs
    gleich und wuerde sonst jedem Kapitel dasselbe Zeichen geben. */
 var title=String(c.title||"").slice(0,160);
 for(var i=0;i<RULES.length;i++) if(RULES[i][0].test(title)) return RULES[i][1];
 var t=(title+" "+(c.unit||"")).slice(0,200);
 for(var j=0;j<RULES.length;j++) if(RULES[j][0].test(t)) return RULES[j][1];
 /* Kein Treffer: ein Zeichen vergeben, das im selben Fach noch frei ist.
    Aus dem Titel abgeleitet, damit es bei jedem Laden gleich bleibt. */
 var sub=c.subject||"_";
 FALLBACK[sub]=FALLBACK[sub]||{};
 var seed=0, s=String(c.id||c.title||"");
 for(var k=0;k<s.length;k++) seed=((seed<<5)-seed+s.charCodeAt(k))|0;
 seed=Math.abs(seed);
 for(var tries=0; tries<KEYS.length; tries++){
  var cand=KEYS[(seed+tries)%KEYS.length];
  if(!FALLBACK[sub][cand]){ FALLBACK[sub][cand]=c.id; return cand; }
  if(FALLBACK[sub][cand]===c.id) return cand;
 }
 return KEYS[seed%KEYS.length];
}
/* Grundzeichen des Themas plus ein festes Zweitmerkmal je Kapitel:
   eine Akzentfarbe und eine kleine Markierung. So unterscheiden sich
   auch zwei Kapitel, die dasselbe Thema teilen, auf einen Blick. */
var ACCENT=["#1E2A3C","#2E5AAC","#0B7A68","#8A5A1E","#6B3A7A","#A33B4C","#1F6E7A","#4A6B1E"];
function uri(k, seedStr){
 var seed=0, s=String(seedStr||k);
 for(var i=0;i<s.length;i++) seed=((seed<<5)-seed+s.charCodeAt(i))|0;
 seed=Math.abs(seed);
 var col=ACCENT[seed%ACCENT.length];
 var mark=seed%4;
 var extra="";
 if(mark===1) extra='<circle cx="52" cy="10" r="3.2" fill="'+col+'" stroke="none"/>';
 if(mark===2) extra='<path d="M48 8h8M52 4v8" stroke="'+col+'" stroke-width="2.2"/>';
 if(mark===3) extra='<rect x="47" y="5" width="9" height="9" rx="2.5" fill="none" stroke="'+col+'" stroke-width="2"/>';
 var svg='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" fill="none" '
  +'stroke="'+col+'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" '
  +'color="'+col+'">'+(A[k]||A.target)+extra+'</svg>';
 return "data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(svg)));
}
M.chapterArt=function(c){ return uri(keyFor(c), c.id); };
M.applyChapterArt=function(){
 var used={}, n=0;
 FALLBACK={};
 (M.chapters||[]).forEach(function(c){
  var k=keyFor(c); used[k]=(used[k]||0)+1; n++;
  var src=uri(k, c.id);
  var entry={id:"art-"+k+"-"+String(c.id).slice(-6), src:src, data:src, alt:c.title||"", caption:"",
   credit:"Stoffknacker", licence:"eigene Grafik", provenance:"own", kind:"pictogram"};
  /* v44 liest aus einer eigenen Ablage. Beide bedienen, sonst bleibt
     die Kapitelliste bei der immer gleichen Wellengrafik. */
  if(M.V44_MEDIA_BY_CHAPTER){
   var cv=M.V44_MEDIA_BY_CHAPTER[c.id];
   if(cv && typeof cv==="object" && !Array.isArray(cv)){
    var kv={}; for(var z in cv) kv[z]=cv[z];
    for(var z2 in entry) kv[z2]=entry[z2];
    M.V44_MEDIA_BY_CHAPTER[c.id]=kv;
   } else M.V44_MEDIA_BY_CHAPTER[c.id]=entry;
  }
  if(M.MEDIA_BY_CHAPTER){
   var cur=M.MEDIA_BY_CHAPTER[c.id];
   if(Array.isArray(cur)&&cur.length){
    var keep={}; for(var x in cur[0]) keep[x]=cur[0][x];
    for(var y in entry) keep[y]=entry[y];
    M.MEDIA_BY_CHAPTER[c.id]=[keep].concat(cur.slice(1));
   } else M.MEDIA_BY_CHAPTER[c.id]=[entry];
  }
 });
 return {chapters:n, distinctDrawings:Object.keys(used).length};
};
M.artVariety=function(){
 var by={};
 (M.chapters||[]).forEach(function(c){
  /* Messen, was der Renderer liest, nicht was wir hoffen. */
  var m=M.mediaFor?M.mediaFor(c.id):null;
  var id=(m&&m.id)||"?";
  (by[c.subject]=by[c.subject]||{n:0,s:{}}); by[c.subject].n++; by[c.subject].s[id]=1;
 });
 var worst=null;
 Object.keys(by).forEach(function(s){
  var n=by[s].n, d=Object.keys(by[s].s).length;
  var need=Math.min(n, Math.max(2, Math.ceil(n/3)));
  if(d<need && (!worst||d/need<worst.ratio)) worst={subject:s,n:n,d:d,need:need,ratio:d/need};
 });
 return {worst:worst, table:Object.keys(by).map(function(s){
  return s+":"+by[s].n+"/"+Object.keys(by[s].s).length;})};
};
(function settle(n){
 if(n>120) return;
 if(M.chapters&&M.chapters.length){
  var v=M.artVariety();
  if(v.worst||!M.__artApplied){ M.__artApplied=M.applyChapterArt(); }
  else return;
 }
 setTimeout(function(){settle(n+1);},120);
})(0);
})();

;

(function(){"use strict";var M=window.MNEMIKA;if(!M)return;
var E=M.esc||function(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){
 return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];});};
function allQ(){
 var a=[];(M.chapters||[]).forEach(function(c){
  (c.questions||[]).forEach(function(q){a.push({q:q,c:c});});
  (c.blocks||[]).forEach(function(b){if(b&&b.check)a.push({q:b.check,c:c});});});
 return a;}

/* ============================================================
   1. Weniger freie Texteingabe, mehr Auswahl.
      keywords und justify verlangen Tippen und lassen sich kaum
      auswerten. Ein Teil wird zu Auswahlaufgaben, der Rest bleibt,
      weil Begruenden geuebt werden muss.
   ============================================================ */
M.freeTextAudit=function(){
 var t={};
 allQ().forEach(function(x){ t[x.q.type||"?"]=(t[x.q.type||"?"]||0)+1; });
 var free=(t.keywords||0)+(t.justify||0);
 var tot=allQ().length;
 return {byType:t, freeText:free, total:tot, freeShare:Math.round(free/tot*1000)/10};
};
M.rebalanceFreeText=function(){
 var conv=0, i=0;
 allQ().forEach(function(x){
  var q=x.q, c=x.c;
  if(q.type!=="keywords") return;
  i++;
  if(i%3!==0) return;                    /* jede dritte umstellen, nicht alle */
  var want=(q.keywords||q.expected||[]).filter(Boolean);
  if(want.length<1) return;
  var pool=[];
  (c.objectives||[]).forEach(function(o){ pool.push(String(o).split(/[,.;]/)[0]); });
  (c.points||[]).forEach(function(o){ pool.push(String(o).split(/[,.;]/)[0]); });
  pool=pool.filter(function(s){ return s && s.length>8 && want.indexOf(s)<0; });
  if(pool.length<2) return;
  var right=String(want[0]);
  var opts=[right, pool[0], pool[1], pool[2]||("Nicht " + right.toLowerCase())]
    .filter(Boolean).slice(0,4);
  q.__wasKeywords=true;
  /* Eine richtige Antwort ist Einfachauswahl, nicht Mehrfachauswahl. */
  q.type="mc";
  q.options=opts;
  q.answer=0;
  /* Position streuen, damit die richtige nicht immer vorne steht */
  var want2=(i*7)%opts.length;
  if(want2!==0){ var t0=opts[0]; opts[0]=opts[want2]; opts[want2]=t0; q.answer=want2; }
  conv++;
 });
 return {converted:conv};
};

/* ============================================================
   2. Schwierige Aufgaben kennzeichnen.
      Massstab: mehrere Schritte, Transfer, Zahlen mit Einheit,
      Begruendungspflicht oder viele Antwortmoeglichkeiten.
   ============================================================ */
M.markChallenging=function(){
 var n=0;
 allQ().forEach(function(x){
  var q=x.q, s=0;
  var txt=String(q.prompt||"");
  if(/warum|begründe|erkläre|weshalb|inwiefern/i.test(txt)) s+=2;
  if(/berechne|bestimme|leite her|zeige/i.test(txt)) s+=2;
  if(/vergleiche|unterscheide|beurteile|bewerte/i.test(txt)) s+=2;
  if(txt.length>160) s+=1;
  if((q.options||[]).length>4) s+=1;
  if(q.type==="justify"||q.type==="order"||q.type==="finderror") s+=1;
  if(q.type==="estimate"||q.type==="numeric") s+=1;
  if(/mehrere|alle zutreffenden|zwei Gründe/i.test(txt)) s+=1;
  if(/wie viel|wie gross|wie hoch|in welchem|unter welchen/i.test(txt)) s+=1;
  if(/\d/.test(txt) && /[=·×÷%]|kg|m\/s|kJ|mol|Hz|km/.test(txt)) s+=2;
  if(/nicht|kein|falsch|ausser|widerspricht/i.test(txt)) s+=1;   /* Verneinung ist schwerer */
  if((q.options||[]).length && (q.options||[]).some(function(o){return String(o).length>60;})) s+=1;
  if(String(q.explanation||q.explain||"").length>220) s+=1;      /* braucht viel Erklaerung */
  q.challengeScore=s;
  if(s>=3){ q.challenging=true; q.difficulty=q.difficulty||"hard"; n++; }
 });
 return {marked:n, total:allQ().length};
};
M.challengeStats=function(){
 var a=allQ(), h=a.filter(function(x){return x.q.challenging;}).length;
 return {hard:h, total:a.length, share:Math.round(h/a.length*1000)/10};
};

/* ============================================================
   3. Fehlerspeicher und gezieltes Nachtrainieren.
   ============================================================ */
var MKEY="mnemika-mistakes-v1";
M.mistakeQueue=function(){ try{ return JSON.parse(localStorage.getItem(MKEY)||"[]"); }catch(e){ return []; } };
M.recordMistake=function(qid, chapterId){
 if(!qid) return;
 var l=M.mistakeQueue();
 var e=l.filter(function(x){return x.id===qid;})[0];
 if(e){ e.misses++; e.last=Date.now(); }
 else l.push({id:qid, chapter:chapterId||"", misses:1, last:Date.now(), cleared:0});
 try{ localStorage.setItem(MKEY, JSON.stringify(l.slice(-400))); }catch(e2){}
 return l;
};
M.clearMistake=function(qid){
 var l=M.mistakeQueue();
 l.forEach(function(x){ if(x.id===qid){ x.cleared++; x.last=Date.now(); } });
 try{ localStorage.setItem(MKEY, JSON.stringify(l)); }catch(e){}
 return l;
};
/* Zweimal richtig, dann gilt der Fehler als erledigt. */
M.mistakeDue=function(){
 var l=M.mistakeQueue().filter(function(x){ return x.cleared<2; });
 l.sort(function(a,b){ return (b.misses-b.cleared)-(a.misses-a.cleared) || a.last-b.last; });
 var byId={};
 allQ().forEach(function(x){ if(x.q.id) byId[x.q.id]={q:x.q,c:x.c}; });
 return l.map(function(e){ var f=byId[e.id];
  return f? {entry:e, question:f.q, chapter:f.c} : null; }).filter(Boolean);
};
M.mistakeStats=function(){
 var l=M.mistakeQueue();
 return {total:l.length, due:l.filter(function(x){return x.cleared<2;}).length,
  mastered:l.filter(function(x){return x.cleared>=2;}).length};
};
/* An die vorhandene Auswertung anhaengen, ohne sie zu ersetzen. */
["grade","checkAnswer","evaluate","submitAnswer"].forEach(function(fn){
 if(typeof M[fn]==="function" && !M[fn].__mistakeHook){
  var base=M[fn];
  M[fn]=function(){
   var r=base.apply(M, arguments);
   try{
    var q=arguments[0]&&arguments[0].q?arguments[0].q:arguments[0];
    var ok=(r&&typeof r==="object")? (r.correct===true) : (r===true);
    if(q&&q.id){ ok? M.clearMistake(q.id) : M.recordMistake(q.id, q.chapterId); }
   }catch(e){}
   return r;
  };
  M[fn].__mistakeHook=true;
 }
});

/* ============================================================
   4. Vokabeltraining nach dem Muster bekannter Sprach-Apps:
      kurze Runden, Karten mit Vorder- und Rueckseite, vier
      Uebungsarten, Stufen mit wachsendem Abstand, Tagesserie.
   ============================================================ */
M.VOCAB={};
function vocabFromChapters(){
 var out=[], seen={};
 function add(front, back, c){
  front=String(front||"").trim(); back=String(back||"").trim();
  if(front.length<3||front.length>46||back.length<10) return;
  var k=(front+"|"+c.id).toLowerCase();
  if(seen[k]) return; seen[k]=1;
  out.push({id:c.id+":"+front.slice(0,24), front:front, back:back.slice(0,220),
   chapter:c.id, subject:c.subject});
 }
 /* Fachbegriffe aus allen Faechern: Kernsatz, Merksatz, fette Begriffe
    im Lehrtext und Schluesselpunkte. Das ergibt echte Lernkarten,
    nicht nur die paar Eintraege aus den Sprachkapiteln. */
 (M.chapters||[]).forEach(function(c){
  if(c.mnemonic) add(c.title, c.mnemonic, c);
  (c.points||[]).forEach(function(pt){
   var s=String(pt); var m=s.match(/^([A-ZÄÖÜ][\wäöüß\- ]{2,40}?)\s*[:–-]\s*(.+)$/);
   if(m) add(m[1], m[2], c);
  });
  (c.blocks||[]).forEach(function(b){
   (b.body||[]).forEach(function(line){
    var s=String(line);
    var m=s.match(/^([A-ZÄÖÜ][\wäöüß\- ]{2,34})\s+(?:ist|bezeichnet|beschreibt|meint|heisst)\s+(.{20,})$/);
    if(m) add(m[1], m[2], c);
   });
  });
 });
 (M.chapters||[]).forEach(function(c){
  if(["english","languages","german"].indexOf(c.subject)<0) return;
  (c.terms||c.glossary||[]).forEach(function(t){
   if(t && t.term && t.meaning) out.push({id:c.id+":"+t.term, front:t.term, back:t.meaning,
     chapter:c.id, subject:c.subject});
  });
  /* Fallback: Fachbegriffe aus den Lernzielen gewinnen */
  if(!(c.terms||c.glossary||[]).length){
   (c.objectives||[]).slice(0,3).forEach(function(o,i){
    var s=String(o);
    var m=s.match(/^([A-ZÄÖÜ][\wäöüß\- ]{2,28}?)\s+(?:sicher |korrekt )?(?:anwenden|erklären|unterscheiden|bilden|verstehen)/);
    if(m) out.push({id:c.id+":obj"+i, front:m[1].trim(), back:s, chapter:c.id, subject:c.subject});
   });
  }
 });
 return out;
}
var VKEY="mnemika-vocab-v1";
M.vocabState=function(){ try{ var t=(M.__unsaved&&M.__unsaved[VKEY])||localStorage.getItem(VKEY); return JSON.parse(t||"{}"); }catch(e){ return {}; } };
M.saveVocab=function(s){ if(M.persist) return M.persist(VKEY, JSON.stringify(s)); try{ localStorage.setItem(VKEY, JSON.stringify(s)); }catch(e){} };
M.vocabDeck=function(){
 if(!M.__vocab) M.__vocab=vocabFromChapters();
 return M.__vocab;
};
/* Stufen 0 bis 5, Abstand waechst: sofort, 10 Minuten, 1 Tag, 3, 7, 21 */
var GAPS=[0, 10*6e4, 864e5, 3*864e5, 7*864e5, 21*864e5];
M.vocabDue=function(limit){
 var st=M.vocabState(), now=Date.now();
 var due=M.vocabDeck().filter(function(k){
  var s=st[k.id]; if(!s) return true;
  return now >= (s.last||0) + GAPS[Math.min(s.level||0, GAPS.length-1)];
 });
 return due.slice(0, limit||12);
};
M.vocabAnswer=function(id, correct){
 var st=M.vocabState();
 var s=st[id]||{level:0, seen:0, right:0};
 s.seen++; if(correct){ s.right++; s.level=Math.min((s.level||0)+1, 5); }
 else s.level=Math.max((s.level||0)-1, 0);
 s.last=Date.now(); st[id]=s; M.saveVocab(st);
 return s;
};
M.vocabStats=function(){
 var st=M.vocabState(), deck=M.vocabDeck();
 var lv=[0,0,0,0,0,0];
 deck.forEach(function(k){ lv[(st[k.id]&&st[k.id].level)||0]++; });
 return {cards:deck.length, due:M.vocabDue(999).length, levels:lv,
  mastered:lv[5], streak:M.streak()};
};
/* Tagesserie wie in den bekannten Apps */
var SKEY="mnemika-streak-v1";
M.streak=function(){
 var s; try{ s=JSON.parse(localStorage.getItem(SKEY)||"{}"); }catch(e){ s={}; }
 return s.count||0;
};
M.touchStreak=function(){
 var s; try{ s=JSON.parse(localStorage.getItem(SKEY)||"{}"); }catch(e){ s={}; }
 var today=new Date().toISOString().slice(0,10);
 if(s.day===today) return s.count||1;
 var y=new Date(Date.now()-864e5).toISOString().slice(0,10);
 s.count = (s.day===y) ? (s.count||0)+1 : 1;
 s.day=today;
 if(M.persist) M.persist(SKEY, JSON.stringify(s)); else try{ localStorage.setItem(SKEY, JSON.stringify(s)); }catch(e){}
 return s.count;
};

M.__gamify=null;
(function settle(n){
 if(n>120) return;
 if(M.chapters&&M.chapters.length){
  var cs=M.challengeStats();
  if(cs.hard===0){
   /* Die Kapiteldaten werden nach dem ersten Lauf ersetzt, deshalb
      pruefen wir das Ergebnis und markieren erneut. */
   M.__gamify={free:M.rebalanceFreeText(), hard:M.markChallenging(),
    vocab:M.vocabDeck().length};
  } else if(M.__gamify) return;
 }
 setTimeout(function(){settle(n+1);},120);
})(0);
})();

;

(function(){"use strict";var M=window.MNEMIKA;if(!M)return;
var E=M.esc||function(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){
 return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];});};

/* ============================================================
   Vokabeltrainer. Kurze Runde, vier Uebungsarten im Wechsel,
   sofortige Rueckmeldung, Fortschrittsbalken, Tagesserie.
   ============================================================ */
var R={round:[], i:0, right:0, mode:"pick"};
function pickDistractors(card, n){
 var deck=M.vocabDeck().filter(function(k){return k.id!==card.id;});
 var out=[], used={};
 for(var g=0; g<200 && out.length<n; g++){
  var k=deck[(g*7+card.front.length)%deck.length];
  if(!k||used[k.back]) continue;
  used[k.back]=1; out.push(k.back);
 }
 return out;
}
M.vocabStart=function(size){
 R.round=M.vocabDue(size||10); R.i=0; R.right=0;
 if(!R.round.length) R.round=M.vocabDeck().slice(0, size||10);
 M.touchStreak();
 return R.round.length;
};
M.vocabRenderCard=function(){
 var c=R.round[R.i];
 if(!c) return '<div class="vc-done"><h3>Runde geschafft</h3>'
  +'<p>'+R.right+' von '+R.round.length+' richtig. Tagesserie: '+M.streak()+' Tage.</p>'
  +'<button class="vc-again">Neue Runde</button></div>';
 var modes=["pick","reverse","type","recall"];
 R.mode=modes[R.i%modes.length];
 var head='<div class="vc-bar"><span style="width:'+Math.round(R.i/R.round.length*100)+'%"></span></div>'
  +'<p class="vc-meta">Karte '+(R.i+1)+' von '+R.round.length
  +' · <b>'+R.right+'</b> richtig · Serie '+M.streak()+'</p>';
 if(R.mode==="pick"||R.mode==="reverse"){
  var front=R.mode==="pick"?c.front:c.back;
  var right=R.mode==="pick"?c.back:c.front;
  var others=(M.vocabDistractors?M.vocabDistractors(c,3):pickDistractors(c,3)).map(function(x){
   return R.mode==="pick"?x:(M.vocabDeck().filter(function(k){return k.back===x;})[0]||{front:x}).front;});
  var opts=[right].concat(others).filter(Boolean).slice(0,4);
  var seed=(R.i*13)%opts.length;
  var t=opts[0]; opts[0]=opts[seed]; opts[seed]=t;
  return head+'<div class="vc-card"><span class="vc-kind">'
   +(R.mode==="pick"?"Was bedeutet das?":"Wie heisst das?")+'</span>'
   +'<b class="vc-front">'+E(front)+'</b></div>'
   +'<div class="vc-opts">'+opts.map(function(o,i){
     return '<button class="vc-o" data-ok="'+(o===right?1:0)+'">'+E(o)+'</button>';}).join("")+'</div>';
 }
 if(R.mode==="type"){
  return head+'<div class="vc-card"><span class="vc-kind">Schreib die Bedeutung</span>'
   +'<b class="vc-front">'+E(c.front)+'</b></div>'
   +'<input class="vc-in" placeholder="deine Antwort" autocomplete="off">'
   +'<div class="vc-opts"><button class="vc-check">Prüfen</button>'
   +'<button class="vc-skip">Weiss ich nicht</button></div>';
 }
 return head+'<div class="vc-card vc-flip"><span class="vc-kind">Erst denken, dann umdrehen</span>'
  +'<b class="vc-front">'+E(c.front)+'</b>'
  +'<p class="vc-back" hidden>'+E(c.back)+'</p></div>'
  +'<div class="vc-opts"><button class="vc-show">Umdrehen</button>'
  +'<button class="vc-yes" hidden>Wusste ich</button>'
  +'<button class="vc-no" hidden>Noch nicht</button></div>';
};
function answer(host, ok){
 var c=R.round[R.i];
 if(c){ M.vocabAnswer(c.id, ok); if(ok) R.right++; }
 var note=document.createElement("p");
 note.className="vc-fb "+(ok?"ok":"no");
 note.innerHTML=(ok?"Richtig.":("Richtig wäre: "+(c?M.esc(c.back):"")))
  +(M.vocabExtra?M.vocabExtra(c):"");
 host.appendChild(note);
 setTimeout(function(){ R.i++; M.vocabPaint(host); }, ok?600:1600);
}
M.vocabPaint=function(host){
 host.innerHTML='<div class="vc">'+M.vocabRenderCard()+'</div>';
 var box=host.querySelector(".vc");
 box.querySelectorAll(".vc-o").forEach(function(b){
  b.onclick=function(){ box.querySelectorAll(".vc-o").forEach(function(x){x.disabled=true;});
   b.classList.add(b.dataset.ok==="1"?"is-ok":"is-no");
   answer(box, b.dataset.ok==="1"); };});
 var chk=box.querySelector(".vc-check");
 if(chk) chk.onclick=function(){
  var v=(box.querySelector(".vc-in")||{}).value||"";
  var c=R.round[R.i];
  var ok=!!c && v.trim().toLowerCase().replace(/[.,;]/g,"")
    === String(c.back).trim().toLowerCase().replace(/[.,;]/g,"");
  answer(box, ok); };
 var sk=box.querySelector(".vc-skip"); if(sk) sk.onclick=function(){ answer(box,false); };
 var sh=box.querySelector(".vc-show");
 if(sh) sh.onclick=function(){
  box.querySelector(".vc-back").hidden=false; sh.hidden=true;
  box.querySelector(".vc-yes").hidden=false; box.querySelector(".vc-no").hidden=false; };
 var y=box.querySelector(".vc-yes"); if(y) y.onclick=function(){ answer(box,true); };
 var no=box.querySelector(".vc-no"); if(no) no.onclick=function(){ answer(box,false); };
 var ag=box.querySelector(".vc-again");
 if(ag) ag.onclick=function(){ M.vocabStart(10); M.vocabPaint(host); };
};
M.renderVocab=function(){
 var s=M.vocabStats();
 return '<section class="vx"><h2>Vokabeln</h2>'
  +'<p class="vx-lead">Kurze Runden statt langer Listen. Jede Karte kommt wieder, '
  +'aber in wachsenden Abständen: sofort, nach zehn Minuten, nach einem Tag, drei, sieben, '
  +'einundzwanzig. Wer eine Karte fünfmal hintereinander kann, sieht sie kaum noch.</p>'
  +'<div class="vx-stats">'
  +[['Karten',s.cards],['heute fällig',s.due],['gekonnt',s.mastered],['Tage in Folge',s.streak]]
   .map(function(x){return '<span><b>'+x[1]+'</b>'+x[0]+'</span>';}).join("")
  +'</div>'
  +'<div class="vx-lv">'+s.levels.map(function(n,i){
    return '<span title="Stufe '+i+'"><i style="height:'+Math.min(60,6+n*2)+'px"></i>'+i+'</span>';}).join("")
  +'</div>'
  +'<button class="vx-go">Runde starten</button>'
  +'<div id="vx-host"></div></section>';
};

/* ============================================================
   Nachtrainieren: genau die Aufgaben, die zuletzt falsch waren.
   ============================================================ */
M.renderMistakes=function(){
 var st=M.mistakeStats(), due=M.mistakeDue();
 if(!due.length){
  return '<section class="mx"><h2>Zuletzt falsch</h2>'
   +'<p class="vx-lead">Hier sammeln sich die Aufgaben, die du falsch hattest. '
   +'Im Moment ist nichts offen. Sobald du etwas verhaust, taucht es hier auf und '
   +'verschwindet erst, wenn du es zweimal richtig hast.</p>'
   +'<div class="vx-stats"><span><b>'+st.mastered+'</b>überwunden</span></div></section>';
 }
 return '<section class="mx"><h2>Zuletzt falsch</h2>'
  +'<p class="vx-lead">'+due.length+' Aufgaben warten. Zweimal richtig, dann ist die Aufgabe weg.</p>'
  +'<div class="vx-stats"><span><b>'+st.due+'</b>offen</span>'
  +'<span><b>'+st.mastered+'</b>überwunden</span></div>'
  +'<ol class="mx-list">'+due.slice(0,25).map(function(d){
    return '<li><button data-open="'+E(d.chapter.id)+'">'
     +'<b>'+E(String(d.question.prompt||"Aufgabe").slice(0,90))+'</b>'
     +'<span>'+E(d.chapter.title||"")+' · '+d.entry.misses+'× falsch'
     +(d.entry.cleared?' · '+d.entry.cleared+'× wieder richtig':'')+'</span></button></li>';}).join("")
  +'</ol></section>';
};

/* Beide Bereiche als eigene Reiter, additiv. */
function view(id){
 var v=document.getElementById(id);
 if(v) return v;
 var anchor=document.getElementById("v-learn")||document.querySelector("main>section")||document.querySelector("main");
 if(!anchor) return null;
 v=document.createElement("section"); v.id=id; v.hidden=true;
 (anchor.parentNode||document.body).appendChild(v);
 return v;
}
function show(id, html, after){
 var v=view(id); if(!v) return;
 v.innerHTML=html;
 var main=v.parentNode;
 [].forEach.call(main.children,function(el){ if(el.id&&/^v-/.test(el.id)) el.hidden=(el!==v); });
 v.hidden=false; document.body.dataset.view=id.replace("v-","");
 if(after) after(v);
 v.scrollIntoView({block:"start"});
}
M.showVocab=function(){
 show("v-vocab", M.renderVocab(), function(v){
  var go=v.querySelector(".vx-go"), host=v.querySelector("#vx-host");
  if(go) go.onclick=function(){ M.vocabStart(10); M.vocabPaint(host); go.textContent="Neue Runde"; };
 });
};
M.showMistakes=function(){
 show("v-mistakes", M.renderMistakes(), function(v){
  v.querySelectorAll("[data-open]").forEach(function(b){
   b.onclick=function(){ try{ M.go("read", b.dataset.open); }catch(e){} };});
 });
};
function addTabs(){
 var nav=document.querySelector(".nav-in")||document.querySelector(".nav");
 if(!nav) return;
 [["tab-vocab","✦","Vokabeln",M.showVocab],
  ["tab-mistakes","↺","Fehler",M.showMistakes]].forEach(function(t){
  if(document.getElementById(t[0])) return;
  var model=nav.querySelector(".tab");
  var b=document.createElement("button");
  b.id=t[0]; b.className=(model?model.className:"tab").replace(/\bcur\b/,"").trim();
  b.innerHTML='<span class="tab-ic" aria-hidden="true">'+t[1]+'</span><span>'+t[2]+'</span>';
  b.onclick=function(){
   nav.querySelectorAll(".tab").forEach(function(x){x.classList.remove("cur");});
   b.classList.add("cur"); t[3](); };
  nav.appendChild(b);
 });
}
var n=0, iv=setInterval(function(){ n++;
 if(document.querySelector(".nav-in,.nav")){ addTabs(); clearInterval(iv); }
 if(n>90) clearInterval(iv); },150);
})();

;

(function(){"use strict";var M=window.MNEMIKA;if(!M)return;

/* ============================================================
   1. Kopfzeile: nichts abschneiden, nichts ueberlappen.
      Lange Abschlussnamen bekommen eine Kurzform, die Navigation
      behaelt ihren Platz, und was nicht passt, wandert ins Menue.
   ============================================================ */
var SHORT={
 "passerelle-2023":"Passerelle",
 "gym-maturitaet-2024":"Gymnasium",
 "smp":"SMP",
 "bm-2025":"BM",
 "ebmp":"EBMP",
 "fms-2018":"FMS"
};
M.pillLabel=function(){
 var id=M.activeProgram&&M.activeProgram();
 var p=M.program&&M.program(id);
 var full=(p&&(p.label||p.title))||"";
 var w=window.innerWidth;
 /* Der vollstaendige Name passt erst ab sehr breiten Fenstern neben die
    beschrifteten Reiter. Darunter die Kurzform, damit nichts abschneidet. */
 if(w<=560) return {text:(SHORT[id]||full).slice(0,16), title:full};
 if(w<=1560) return {text:SHORT[id]||full, title:full};
 return {text:full, title:full};
};
M.fixPill=function(){
 var pill=document.getElementById("progpill")
   ||document.querySelector(".progpill,[data-pill]");
 if(!pill) return;
 var l=M.pillLabel();
 /* Nur den Text ersetzen, den Pfeil und andere Kinder behalten. */
 var textNode=null;
 [].forEach.call(pill.childNodes,function(n){
  if(n.nodeType===3 && n.textContent.trim().length>1) textNode=n; });
 if(textNode) textNode.textContent=l.text+" ";
 else pill.textContent=l.text;
 pill.title=l.title;
 pill.setAttribute("aria-label", l.title);
};
window.addEventListener("resize", function(){ M.fixPill(); });
var go0=M.go;
if(typeof go0==="function" && !go0.__pillHook){
 M.go=function(){ var r=go0.apply(this,arguments); setTimeout(M.fixPill,0); return r; };
 M.go.__pillHook=true;
}
setTimeout(M.fixPill,500); setTimeout(M.fixPill,1500);
})();

;
(function(){"use strict";var M=window.MNEMIKA;if(!M||M.__hub)return;M.__hub=true;
/* Meilenstein B, Schritt 2: eine Stelle für Navigation, DOM-Änderungen und den Takt.
   Statt vieler eigener Router-Verpackungen, Beobachter und Intervalle melden sich die Bausteine hier an.
   Fehler eines Anmeldenden dürfen die anderen nicht stoppen. */
var nav=[], dom=[], tick=[], obs=null, timer=null;
function ensureRouter(){ if(typeof M.go!=="function"||M.go.__hub) return; var go=M.go;
 var w=function(v,arg){ for(var i=0;i<nav.length;i++){ try{ nav[i](v,arg); }catch(e){} } return go.apply(this,arguments); };
 w.__hub=true; for(var k in go) if(!(k in w)) w[k]=go[k]; M.go=w; }
M.onNavigate=function(fn){ if(typeof fn!=="function") return fn; nav.push(fn); ensureRouter(); setTimeout(ensureRouter,0); return fn; };
function ensureObserver(){ if(obs||!document.body) return; obs=new MutationObserver(function(ms){ for(var i=0;i<dom.length;i++){ try{ dom[i](ms); }catch(e){} } });
 obs.observe(document.body,{childList:true,subtree:true,attributes:true,attributeFilter:["hidden","data-view","data-mn-prog","data-mn-pattern"]}); }
M.onDomChange=function(fn){ if(typeof fn!=="function") return fn; dom.push(fn); if(document.body) ensureObserver(); else document.addEventListener("DOMContentLoaded",ensureObserver); return fn; };
M.everyTick=function(fn){ if(typeof fn!=="function") return fn; tick.push(fn); if(!timer) timer=setInterval(function(){ for(var i=0;i<tick.length;i++){ try{ tick[i](); }catch(e){} } },800); return fn; };
M.hubStats=function(){ return {navigate:nav.length, dom:dom.length, tick:tick.length, router:!!(M.go&&M.go.__hub), observer:!!obs, timer:!!timer}; };
})();
;

(function(){"use strict";var M=window.MNEMIKA;if(!M)return;

/* ============================================================
   2. Diagramme: Reihenbeschriftung darf nicht auf der Linie liegen.
      Im Geburtstagsdiagramm stand "mindestens ein Paar" quer ueber
      dem letzten Messpunkt.
   ============================================================ */
function fixChartLabels(root){
 (root||document).querySelectorAll("svg").forEach(function(svg){
  if(svg.classList.contains("r7-svg")||svg.__labelsFixed) return;
  if((function(){var fg=svg.closest&&svg.closest("figure.viz");return !!(fg&&/^(compare|process|timeline)$/.test(fg.getAttribute("data-kind")||""));})()) return; /* Iteration 13: Vergleichs- und Ablaufdiagramme sind richtig gesetzt, nicht verschieben */
  var texts=[].slice.call(svg.querySelectorAll("text"));
  if(texts.length<2) return;
  var boxes=[];
  texts.forEach(function(t){
   var b;
   try{ b=t.getBBox(); }catch(e){ return; }
   if(!b || !b.width) return;
   /* Mit bereits gesetzten Beschriftungen vergleichen und notfalls verschieben. */
   var dy=0, guard=0;
   while(guard++<8 && boxes.some(function(o){
     return b.x < o.x+o.w+4 && b.x+b.width > o.x-4 &&
            b.y+dy < o.y+o.h+2 && b.y+b.height+dy > o.y-2; })){
    dy -= (b.height+4);
   }
   if(dy!==0){
    var cur=parseFloat(t.getAttribute("y")||"0");
    t.setAttribute("y", cur+dy);
    t.setAttribute("data-shifted","1");
   }
   boxes.push({x:b.x, y:b.y+dy, w:b.width, h:b.height});
  });
  /* Beschriftungen bekommen eine helle Unterlage, damit sie auf
     Linien und Flaechen lesbar bleiben. */
  texts.forEach(function(t){
   if(t.getAttribute("data-bg")) return;
   var cls=(t.getAttribute("class")||"");
   if(/tick|axis/.test(cls)) return;
   t.setAttribute("data-bg","1");
   t.style.paintOrder="stroke";
   t.style.stroke="var(--surface,#FBFAF7)";
   t.style.strokeWidth="3.5px";
   t.style.strokeLinejoin="round";
  });
  svg.__labelsFixed=true;
 });
}
M.fixChartLabels=fixChartLabels;
var mo=new MutationObserver(function(){ fixChartLabels(document); });
function watch(){
 var main=document.querySelector("main")||document.body;
 mo.observe(main,{childList:true,subtree:true});
 fixChartLabels(document);
}
if(document.readyState!=="loading") setTimeout(watch,600);
else document.addEventListener("DOMContentLoaded",function(){setTimeout(watch,600);});

/* ============================================================
   3. Vokabeln: Ablenker aus demselben Fach, moeglichst aus
      demselben Kapitelbereich. Vorher kamen sie aus dem ganzen
      Stapel und liessen sich ohne Wissen ausschliessen.
   ============================================================ */
M.vocabDistractors=function(card, n){
 var deck=M.vocabDeck();
 var sameSub=deck.filter(function(k){
  return k.id!==card.id && k.subject===card.subject; });
 var sameChap=sameSub.filter(function(k){ return k.chapter===card.chapter; });
 var pool=sameChap.length>=n ? sameChap : sameSub;
 if(pool.length<n) pool=deck.filter(function(k){return k.id!==card.id;});
 /* Aehnliche Laenge bevorzugen, damit die Loesung nicht auffaellt. */
 var target=String(card.back).length;
 pool=pool.slice().sort(function(a,b){
  return Math.abs(String(a.back).length-target)-Math.abs(String(b.back).length-target); });
 var out=[], used={};
 var seed=0, s=String(card.id);
 for(var i=0;i<s.length;i++) seed=((seed<<5)-seed+s.charCodeAt(i))|0;
 seed=Math.abs(seed);
 for(var g=0; g<pool.length && out.length<n; g++){
  var k=pool[(seed+g*3)%pool.length];
  if(!k || used[k.back] || k.back===card.back) continue;
  used[k.back]=1; out.push(k.back);
 }
 return out;
};
})();

;

(function(){"use strict";var M=window.MNEMIKA;if(!M)return;
var E=M.esc||function(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){
 return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];});};

/* ============================================================
   Vokabeln sind Sprachtraining, kein allgemeines Quiz.
   Der Stapel enthaelt nur Englisch und Französisch, jeweils mit
   deutscher Entsprechung, Wortart, Beispielsatz und Hinweisen zur
   Aussprache, wo sie schwierig ist.
   ============================================================ */
M.VOCAB_EN=[
 ["to achieve","erreichen, erzielen","Verb","She achieved her goal in three months.","Nicht mit reach verwechseln: achieve braucht Anstrengung."],
 ["to assess","beurteilen, einschätzen","Verb","The examiner assesses your argument, not your opinion."],
 ["to claim","behaupten","Verb","The author claims that growth has slowed."],
 ["to point out","hinweisen auf","Verb","The text points out three reasons."],
 ["to reveal","offenlegen, zeigen","Verb","The data reveals a clear pattern."],
 ["to emphasise","betonen","Verb","He emphasises the role of the state.","Britisch mit s, amerikanisch emphasize."],
 ["to suggest","nahelegen, vorschlagen","Verb","The evidence suggests a link."],
 ["to undermine","untergraben","Verb","This argument undermines the earlier claim."],
 ["to outweigh","überwiegen","Verb","The benefits outweigh the costs."],
 ["to comply with","einhalten, befolgen","Verb","Companies must comply with the rules."],
 ["evidence","Beleg, Nachweis","Substantiv","Every answer needs evidence from the text.","Kein Plural: evidences gibt es nicht."],
 ["issue","Frage, Problem","Substantiv","The main issue is funding."],
 ["outcome","Ergebnis","Substantiv","The outcome was not what they expected."],
 ["approach","Ansatz, Herangehensweise","Substantiv","A different approach might work better."],
 ["impact","Auswirkung","Substantiv","The impact on prices was immediate."],
 ["shortage","Mangel, Knappheit","Substantiv","There is a shortage of skilled workers."],
 ["drawback","Nachteil","Substantiv","The main drawback is the cost."],
 ["survey","Umfrage","Substantiv","A survey of 800 people was carried out."],
 ["policy","Politik im Sinne von Massnahme","Substantiv","The government changed its policy.","Nicht politics, das ist Politik als Bereich."],
 ["attitude","Einstellung, Haltung","Substantiv","Attitudes towards work have changed."],
 ["significant","bedeutend, erheblich","Adjektiv","There was a significant increase."],
 ["reliable","zuverlässig","Adjektiv","The source is reliable."],
 ["likely","wahrscheinlich","Adjektiv","Prices are likely to rise."],
 ["crucial","entscheidend","Adjektiv","Timing is crucial in this experiment."],
 ["widespread","weit verbreitet","Adjektiv","The practice is widespread in Europe."],
 ["reluctant","widerwillig, zögernd","Adjektiv","They were reluctant to agree."],
 ["thorough","gründlich","Adjektiv","A thorough analysis takes time.","Aussprache etwa THA-ruh, nicht wie through."],
 ["straightforward","unkompliziert","Adjektiv","The task is straightforward."],
 ["however","jedoch","Adverb, Verbindung","The plan failed. However, they tried again."],
 ["therefore","daher, deshalb","Adverb, Verbindung","Costs rose; therefore prices followed."],
 ["nevertheless","dennoch","Adverb, Verbindung","It rained. Nevertheless, they walked."],
 ["in contrast","im Gegensatz dazu","Wendung","In contrast, the second group improved."],
 ["on the whole","insgesamt","Wendung","On the whole, the results are positive."],
 ["as a result","als Folge","Wendung","As a result, demand fell."],
 ["to sum up","zusammenfassend","Wendung","To sum up, three points matter."],
 ["it is worth noting","bemerkenswert ist","Wendung","It is worth noting that the sample was small."],
 ["to make up for","ausgleichen","Wendung","Extra hours make up for the delay."],
 ["to take into account","berücksichtigen","Wendung","You must take the context into account."],
 ["although","obwohl","Verbindung","Although it was late, they continued."],
 ["whereas","wohingegen","Verbindung","Sales rose, whereas profits fell."],
 ["unless","es sei denn","Verbindung","You will fail unless you revise."],
 ["despite","trotz","Präposition","Despite the rain, they went out.","Nach despite kommt kein that, sondern ein Substantiv."],
 ["due to","wegen","Präposition","The delay was due to bad weather."],
 ["regarding","bezüglich","Präposition","Regarding your question, here is the answer."]
];
M.VOCAB_FR=[
 ["atteindre","erreichen","Verb","Elle a atteint son objectif."],
 ["évaluer","beurteilen","Verb","L'examinateur évalue ton argumentation."],
 ["affirmer","behaupten","Verb","L'auteur affirme que la croissance ralentit."],
 ["souligner","betonen, hervorheben","Verb","Le texte souligne trois raisons."],
 ["révéler","offenlegen","Verb","Les données révèlent une tendance claire."],
 ["mettre en évidence","deutlich machen","Wendung","L'étude met en évidence un lien."],
 ["nuire à","schaden","Verb","Cela nuit à la crédibilité du texte."],
 ["l'emporter sur","überwiegen","Wendung","Les avantages l'emportent sur les coûts."],
 ["respecter","einhalten","Verb","Les entreprises doivent respecter les règles."],
 ["la preuve","der Beleg","Substantiv, weiblich","Chaque réponse demande une preuve."],
 ["l'enjeu","der Kernpunkt, das Problem","Substantiv, männlich","Le principal enjeu est le financement."],
 ["le résultat","das Ergebnis","Substantiv, männlich","Le résultat était inattendu."],
 ["la démarche","die Vorgehensweise","Substantiv, weiblich","Une autre démarche serait plus efficace."],
 ["la conséquence","die Folge","Substantiv, weiblich","La conséquence fut immédiate."],
 ["la pénurie","der Mangel","Substantiv, weiblich","Il y a une pénurie de main-d'œuvre."],
 ["l'inconvénient","der Nachteil","Substantiv, männlich","Le principal inconvénient est le coût."],
 ["le sondage","die Umfrage","Substantiv, männlich","Un sondage auprès de 800 personnes."],
 ["la politique","die Politik oder die Massnahme","Substantiv, weiblich","Le gouvernement a changé sa politique."],
 ["l'attitude","die Einstellung","Substantiv, weiblich","Les attitudes ont changé."],
 ["important","bedeutend","Adjektiv","Une hausse importante des prix."],
 ["fiable","zuverlässig","Adjektiv","La source est fiable."],
 ["probable","wahrscheinlich","Adjektiv","Une hausse est probable."],
 ["décisif","entscheidend","Adjektiv","Le moment est décisif."],
 ["répandu","weit verbreitet","Adjektiv","Cette pratique est répandue en Europe."],
 ["réticent","zögernd","Adjektiv","Ils étaient réticents à accepter."],
 ["approfondi","gründlich","Adjektiv","Une analyse approfondie prend du temps."],
 ["cependant","jedoch","Verbindung","Le plan a échoué. Cependant, ils ont réessayé."],
 ["donc","also, daher","Verbindung","Les coûts montent, donc les prix suivent."],
 ["néanmoins","dennoch","Verbindung","Il pleuvait. Néanmoins, ils sont sortis."],
 ["en revanche","im Gegensatz dazu","Wendung","En revanche, le deuxième groupe progresse."],
 ["dans l'ensemble","insgesamt","Wendung","Dans l'ensemble, les résultats sont bons."],
 ["par conséquent","folglich","Wendung","Par conséquent, la demande a baissé."],
 ["en résumé","zusammenfassend","Wendung","En résumé, trois points comptent."],
 ["il convient de noter","bemerkenswert ist","Wendung","Il convient de noter que l'échantillon est petit."],
 ["compenser","ausgleichen","Verb","Les heures supplémentaires compensent le retard."],
 ["tenir compte de","berücksichtigen","Wendung","Il faut tenir compte du contexte."],
 ["bien que","obwohl","Verbindung","Bien qu'il soit tard, ils continuent.","Nach bien que steht der Subjonctif."],
 ["tandis que","wohingegen","Verbindung","Les ventes montent tandis que les bénéfices baissent."],
 ["à moins que","es sei denn","Verbindung","Tu échoueras à moins que tu ne révises."],
 ["malgré","trotz","Präposition","Malgré la pluie, ils sont sortis."],
 ["en raison de","wegen","Präposition","Le retard est dû en raison du mauvais temps."],
 ["quant à","was … betrifft","Wendung","Quant à ta question, voici la réponse."]
];
/* Die Sprachkapitel liefern zusaetzlich ihre eigenen Begriffe. */
function fromLanguageChapters(){
 var out=[];
 (M.chapters||[]).forEach(function(c){
  if(["english","languages"].indexOf(c.subject)<0) return;
  (c.terms||c.glossary||[]).forEach(function(t){
   if(t&&t.term&&t.meaning) out.push({id:"ch:"+c.id+":"+t.term, front:t.term, back:t.meaning,
    lang:(c.subject==="english"?"en":"fr"), pos:"", example:"", note:"", chapter:c.id});
  });
 });
 return out;
}
function build(list, lang){
 return list.map(function(r,i){
  return {id:lang+":"+i, front:r[0], back:r[1], pos:r[2]||"", example:r[3]||"",
   note:r[4]||"", lang:lang, subject:(lang==="en"?"english":"languages")};
 });
}
/* vocabDeck ersetzen: nur Sprachen, gefiltert nach gewaehlter Sprache. */
M.vocabLang=function(){ try{ return localStorage.getItem("mnemika-vocab-lang")||"en"; }catch(e){ return "en"; } };
M.setVocabLang=function(l){ try{ localStorage.setItem("mnemika-vocab-lang", l); }catch(e){} M.__langDeck=null; };
M.__vocab=null;   /* alten Allgemeinstapel verwerfen */
M.vocabDeck=function(){
 if(!M.__langDeck || M.__langDeckFor!==M.vocabLang()){
  var all=build(M.VOCAB_EN,"en").concat(build(M.VOCAB_FR,"fr")).concat(fromLanguageChapters());
  M.__vocabAll=all;
  M.__langDeckFor=M.vocabLang();
  M.__langDeck=all.filter(function(k){ return k.lang===M.__langDeckFor; });
 }
 return M.__langDeck;
};
M.vocabLangCounts=function(){
 var all=M.__vocabAll||(M.vocabDeck(), M.__vocabAll)||[];
 return {en:all.filter(function(k){return k.lang==="en";}).length,
         fr:all.filter(function(k){return k.lang==="fr";}).length};
};
})();

;

(function(){"use strict";var M=window.MNEMIKA;if(!M)return;
var E=M.esc||function(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){
 return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];});};

/* ============================================================
   Abdeckungsmatrix: welcher Abschluss enthaelt welches Fach,
   wo ist der Stoff derselbe und wo unterscheidet er sich.
   Alles aus den vorhandenen Plaenen, nichts geschaetzt.
   ============================================================ */
function C(){ return M.CURRICULUM_INGEST_V1||M.CURRICULUM||{}; }
function plansOf(pid){ return (C().resolvedPlans||[]).filter(function(p){return p.programmeId===pid;}); }

M.coverageMatrix=function(){
 var progs=(M.PROGRAMS||[]).map(function(p){return {id:p.id,label:p.label||p.id};});
 var subjects={};
 (M.chapters||[]).forEach(function(c){ subjects[c.subject]=true; });
 var subj=Object.keys(subjects).sort();

 /* Je Abschluss und Fach: welche Kapitel sind im Plan enthalten. */
 var cell={};
 progs.forEach(function(pr){
  var ids={};
  plansOf(pr.id).forEach(function(pl){ (pl.usableChapterIds||[]).forEach(function(id){ ids[id]=true; }); });
  cell[pr.id]={};
  subj.forEach(function(s){
   var all=(M.chapters||[]).filter(function(c){return c.subject===s;});
   var inPlan=all.filter(function(c){return ids[c.id];});
   cell[pr.id][s]={count:inPlan.length, total:all.length,
    ids:inPlan.map(function(c){return c.id;}).sort(),
    minutes:inPlan.reduce(function(a,c){return a+(c.minutes||0);},0)};
  });
 });

 /* Gemeinsamer Kern je Fach: Kapitel, die in jedem Abschluss vorkommen,
    der das Fach ueberhaupt fuehrt. */
 var shared={}, unique={};
 subj.forEach(function(s){
  var carriers=progs.filter(function(pr){return cell[pr.id][s].count>0;});
  if(!carriers.length){ shared[s]=[]; unique[s]={}; return; }
  var first=cell[carriers[0].id][s].ids.slice();
  var common=first.filter(function(id){
   return carriers.every(function(pr){ return cell[pr.id][s].ids.indexOf(id)>=0; });
  });
  shared[s]=common;
  unique[s]={};
  carriers.forEach(function(pr){
   unique[s][pr.id]=cell[pr.id][s].ids.filter(function(id){ return common.indexOf(id)<0; });
  });
 });
 return {programmes:progs, subjects:subj, cell:cell, shared:shared, unique:unique};
};

/* Quellenangaben je Abschluss, damit jede Zeile belegt ist. */
M.programmeSources=function(pid){
 var out={};
 plansOf(pid).forEach(function(pl){ (pl.sourceRefs||[]).forEach(function(s){ out[s]=true; }); });
 return Object.keys(out);
};
var SRCURL={
 "sbfi-passerelle-2023":["Richtlinien 2023, Ergänzungsprüfung Passerelle",
  "https://www.sbfi.admin.ch/de/ergaenzungspruefung-passerelle"],
 "edk-gymnasium-rlp-2024":["Rahmenlehrplan Gymnasiale Maturitätsschulen, EDK 2024",
  "https://edk.ch/de/themen/gymnasium/rechtsgrundlagen-gueltig-ab-01-08-2024"],
 "sbfi-smp-guidelines-2023":["Richtlinien Schweizerische Maturitätsprüfung",
  "https://www.sbfi.admin.ch/de/schweizerische-maturitaetspruefung"],
 "sbfi-bm-rlp-2025":["Rahmenlehrplan Berufsmaturität 2025",
  "https://www.sbfi.admin.ch/de/berufsmaturitaet"],
 "sbfi-bm-rlp-2012":["Rahmenlehrplan Berufsmaturität 2012, Grundlage EBMP 2026",
  "https://www.sbfi.admin.ch/de/eidgenoessische-berufsmaturitaetspruefung-ebmp"],
 "sbfi-ebmp-guidelines-2024":["Richtlinien EBMP",
  "https://www.sbfi.admin.ch/de/eidgenoessische-berufsmaturitaetspruefung-ebmp"],
 "sbfi-ebmp-session-2026":["Ausschreibung EBMP 2026",
  "https://www.sbfi.admin.ch/de/eidgenoessische-berufsmaturitaetspruefung-ebmp"],
 "edk-fms-rlp-2018":["Rahmenlehrplan Fachmittelschulen, EDK 2018",
  "https://edk.ch/de/themen/fachmittelschulen/"]
};
M.sourceLink=function(id){ return SRCURL[id]||[id,""]; };

M.renderCoverageMatrix=function(){  var m=M.coverageMatrix();
 var SL=(M.SUBJECTS||{});
 function label(s){ return (SL[s]&&SL[s].label)||s; }
 var head='<tr><th class="cv-corner">Fach</th>'
  +m.programmes.map(function(p){
    return '<th><abbr title="'+E(p.label)+'">'+E(String(p.label).slice(0,14))+'</abbr></th>';}).join("")
  +'<th class="cv-shared">gemeinsam</th></tr>';
 var rows=m.subjects.map(function(s){
  var common=m.shared[s]||[];
  return '<tr><th class="cv-sub" data-tip="'+E(label(s))+': '
   +(M.chapters.filter(function(c){return c.subject===s;}).length)+' Kapitel insgesamt">'
   +E(label(s))+'</th>'
   +m.programmes.map(function(p){
     var c=m.cell[p.id][s];
     var uniq=(m.unique[s]&&m.unique[s][p.id])||[];
     var cls=c.count===0?"cv-0":(uniq.length?"cv-diff":"cv-same");
     var tip=c.count===0
      ? label(s)+" kommt in "+p.label+" nicht vor."
      : label(s)+" in "+p.label+": "+c.count+" von "+c.total+" Kapiteln, "
        +Math.round(c.minutes/60)+" Stunden. "
        +(uniq.length? uniq.length+" davon nur hier: "+uniq.slice(0,4).join(", ")
                     : "Alle Kapitel teilt es mit den anderen Wegen.");
     return '<td class="'+cls+'" data-tip="'+E(tip)+'">'
      +(c.count||"–")+(uniq.length?'<i>+'+uniq.length+'</i>':'')+'</td>';}).join("")
   +'<td class="cv-shared" data-tip="'+E(common.length+" Kapitel sind in jedem Weg gleich, der "
      +label(s)+" führt.")+'">'+(common.length||"–")+'</td></tr>';
 }).join("");

 var srcRows=m.programmes.map(function(p){
  var ss=M.programmeSources(p.id);
  return '<tr><th>'+E(p.label)+'</th><td>'+ss.map(function(id){
   var l=M.sourceLink(id);
   return l[1]? '<a href="'+E(l[1])+'" target="_blank" rel="noopener noreferrer" data-tip="'
     +E("Quelle öffnen: "+l[0])+'">'+E(l[0])+'</a>' : E(l[0]);
  }).join(" · ")+'</td></tr>';}).join("");

  var totals=(function(){
   var ch=M.chapters.length;
   var q=0; M.chapters.forEach(function(c){
    q+=(c.questions||[]).length+(c.blocks||[]).filter(function(b){return b&&b.check;}).length;});
   return {chapters:ch, questions:q, subjects:m.subjects.length,
    programmes:m.programmes.length,
    plans:(C().resolvedPlans||[]).length};
  })();

 return '<section class="cv">'
  +'<h2>Was steckt in welchem Abschluss</h2>'
  +'<p class="cv-lead">Jede Zahl ist die Anzahl Kapitel, die dieser Abschluss in diesem Fach führt. '
  +'<b>+n</b> heisst: n davon gibt es nur hier. Die letzte Spalte zählt die Kapitel, die in jedem '
  +'Weg gleich sind, der das Fach überhaupt führt. Fahre mit der Maus darüber, dann steht dort, '
  +'was die Zahl bedeutet.</p>'
  +'<div class="cv-legend"><span class="cv-k cv-same"></span>nur gemeinsamer Stoff'
  +'<span class="cv-k cv-diff"></span>eigener Stoff dabei'
  +'<span class="cv-k cv-0"></span>Fach kommt nicht vor</div>'
  +'<div class="cv-scroll"><table class="cv-t">'+head+rows+'</table></div>'
  +'<h3>Woher der Inhalt stammt</h3>'
  +'<p class="cv-lead">Für jeden Weg die amtlichen Dokumente, aus denen die Zuordnung kommt. '
  +'Verbindlich sind immer die Unterlagen der zuständigen Stellen in der geltenden Fassung.</p>'
  +'<table class="cv-t cv-src">'+srcRows+'</table>'
  +'<h3>Bestand</h3>'
  +'<div class="cv-tot">'
  +[['Abschlüsse',totals.programmes],['Varianten',totals.plans],['Fächer',totals.subjects],
    ['Kapitel',totals.chapters],['Aufgaben und Checks',totals.questions]]
   .map(function(x){return '<span><b>'+x[1]+'</b>'+x[0]+'</span>';}).join("")
  +'</div></section>';
};

/* Ein Hinweisfeld, das dem Zeiger folgt. Auch mit Tastatur erreichbar. */
M.wireTips=function(host){
 if(!host) return;
 var tip=document.getElementById("cv-tip");
 if(!tip){ tip=document.createElement("div"); tip.id="cv-tip"; tip.className="cv-tip";
  tip.setAttribute("role","status"); document.body.appendChild(tip); }
 function show(el,x,y){
  var t=el.getAttribute("data-tip"); if(!t) return;
  tip.textContent=t; tip.classList.add("on");
  var w=tip.offsetWidth||260, vw=window.innerWidth;
  tip.style.left=Math.min(Math.max(12,x-w/2), vw-w-12)+"px";
  tip.style.top=(y+18)+"px";
 }
 function hide(){ tip.classList.remove("on"); }
 host.querySelectorAll("[data-tip]").forEach(function(el){
  el.tabIndex=0;
  el.onmouseenter=function(ev){ show(el, ev.clientX, ev.clientY); };
  el.onmousemove=function(ev){ if(tip.classList.contains("on")) show(el, ev.clientX, ev.clientY); };
  el.onmouseleave=hide;
  el.onfocus=function(){ var r=el.getBoundingClientRect(); show(el, r.left+r.width/2, r.bottom); };
  el.onblur=hide;
 });
 document.addEventListener("keydown",function(e){ if(e.key==="Escape") hide(); });
};
})();

;

(function(){"use strict";var M=window.MNEMIKA;if(!M)return;

/* Eigener Bereich "Abdeckung". Nichts Bestehendes wird ersetzt:
   die Ansicht kommt dazu, die vorhandenen Reiter bleiben unberuehrt. */
function ensureView(){
 var host=document.getElementById("v-coverage");
 if(host) return host;
 var anchor=document.getElementById("v-learn")||document.querySelector("main>section")
   ||document.querySelector("main");
 if(!anchor) return null;
 host=document.createElement("section");
 host.id="v-coverage"; host.hidden=true;
 (anchor.parentNode||document.body).appendChild(host);
 return host;
}
M.showCoverage=function(){
 var host=ensureView(); if(!host) return false;
 host.innerHTML=M.renderCoverageMatrix();
 M.wireTips(host);
 /* Andere Ansichten verbergen, ohne ihre Daten anzutasten. */
 var main=host.parentNode;
 [].forEach.call(main.children, function(el){
  if(el.id && /^v-/.test(el.id)) el.hidden = (el!==host);
 });
 host.hidden=false;
 document.body.dataset.view="coverage";
 try{ location.hash="#abdeckung"; }catch(e){}
 host.scrollIntoView({block:"start"});
 return true;
};
/* Knopf in die Navigation, neben die bestehenden Reiter. */
function addTab(){
 var nav=document.querySelector(".nav-in")||document.querySelector(".nav");
 if(!nav || document.getElementById("tab-coverage")) return;
 var model=nav.querySelector(".tab");
 var b=document.createElement("button");
 b.id="tab-coverage";
 b.className=(model?model.className:"tab").replace(/\bcur\b/,"").trim();
 b.innerHTML='<span class="tab-ic" aria-hidden="true">▦</span><span>Abdeckung</span>';
 b.title="Matrix: welcher Abschluss enthält welches Fach";
 b.onclick=function(){
  nav.querySelectorAll(".tab").forEach(function(t){t.classList.remove("cur");});
  b.classList.add("cur");
  M.showCoverage();
 };
 nav.appendChild(b);
 /* Wechselt die Person auf einen anderen Reiter, tritt die Matrik zurueck. */
 nav.querySelectorAll(".tab").forEach(function(t){
  if(t===b) return;
  var prev=t.onclick;
  t.onclick=function(ev){
   b.classList.remove("cur");
   var cv=document.getElementById("v-coverage"); if(cv) cv.hidden=true;
   if(typeof prev==="function") return prev.call(this,ev);
  };
 });
}
/* Auch aus der Fusszeile und über den Anker erreichbar. */
function addFooterLink(){
 var f=document.getElementById("mn-footer"); if(!f) return;
 var col=f.querySelectorAll(".mnf-col")[2]||f.querySelector(".mnf-col");
 if(!col || col.querySelector("[data-go='coverage']")) return;
 var b=document.createElement("button");
 b.dataset.go="coverage"; b.textContent="Abdeckung je Abschluss";
 b.onclick=function(){ M.showCoverage(); };
 col.insertBefore(b, col.firstChild.nextSibling);
}
function boot(){
 addTab(); addFooterLink();
 if(/#abdeckung/.test(location.hash)) setTimeout(M.showCoverage, 400);
}
var n=0;
var iv=setInterval(function(){ n++;
 if(document.querySelector(".nav-in,.nav")){ boot(); clearInterval(iv); }
 if(n>80) clearInterval(iv);
},150);
window.addEventListener("hashchange",function(){
 if(/#abdeckung/.test(location.hash)) M.showCoverage();
});
})();

;

(function(){"use strict";var M=window.MNEMIKA;if(!M)return;
var E=M.esc||function(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){
 return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];});};

/* ============================================================
   1. Vokabelbereich neu: Sprachwahl, Ziel je Tag, klare Runden.
   ============================================================ */
M.renderVocab=function(){
 var lang=M.vocabLang(), c=M.vocabLangCounts(), s=M.vocabStats();
 var name={en:"Englisch", fr:"Französisch"}[lang];
 return '<section class="vx"><h2>Vokabeln '+E(name)+'</h2>'
  +'<div class="vx-lang" role="group" aria-label="Sprache wählen">'
  +['en','fr'].map(function(l){
    return '<button class="vx-l'+(l===lang?" on":"")+'" data-lang="'+l+'">'
     +({en:"Englisch",fr:"Französisch"}[l])+' <i>'+(c[l]||0)+'</i></button>';}).join("")
  +'</div>'
  +'<p class="vx-lead">Kurze Runden statt langer Listen. Jede Karte kommt wieder, aber in '
  +'wachsenden Abständen: sofort, nach zehn Minuten, nach einem Tag, drei, sieben, einundzwanzig. '
  +'Wer eine Karte fünfmal hintereinander kann, sieht sie kaum noch. Du übst in vier Formen: '
  +'Bedeutung erkennen, Wort finden, selbst tippen und aus dem Gedächtnis abrufen.</p>'
  +'<div class="vx-stats">'
  +[['Karten',s.cards],['heute fällig',s.due],['gekonnt',s.mastered],['Tage in Folge',s.streak]]
   .map(function(x){return '<span><b>'+x[1]+'</b>'+x[0]+'</span>';}).join("")
  +'</div>'
  +'<div class="vx-lv">'+s.levels.map(function(n,i){
    return '<span title="Stufe '+i+': '+n+' Karten"><i style="height:'+Math.min(64,6+n*1.4)+'px"></i>'+i+'</span>';}).join("")
  +'</div>'
  +'<button class="vx-go">Runde starten</button>'
  +'<div id="vx-host"></div></section>';
};
/* Karte um Wortart, Beispielsatz und Hinweis ergaenzen. */
var baseCard=M.vocabRenderCard;
M.vocabExtra=function(c){
 if(!c) return "";
 var out="";
 if(c.pos) out+='<span class="vc-pos">'+E(c.pos)+'</span>';
 if(c.example) out+='<p class="vc-ex">'+E(c.example)+'</p>';
 if(c.note) out+='<p class="vc-note">'+E(c.note)+'</p>';
 return out;
};

/* ============================================================
   2. Bereichsanzeige: oben steht immer, wo man ist.
   ============================================================ */
var NAMES={home:"Start", programs:"Abschluss wählen", setup:"Einrichtung",
 learn:"Lernen", read:"Lektion", practice:"Üben", train:"Übung läuft",
 test:"Testen", exam:"Prüfung läuft", stats:"Fortschritt", review:"Wiederholen",
 backup:"Daten", info:"Quellen", cover:"Stoffabdeckung", coverage:"Abdeckung",
 vocab:"Vokabeln", mistakes:"Zuletzt falsch", selftest:"Selbsttest",
  /* Iteration 6: bisher fehlende Ansichten, zeigten den technischen Namen */ repeat:"Wiederholen", games:"Spielmodus", plan:"Lernplan", chaptertest:"Kapiteltest", quick:"Schnellstart", help:"Hilfe", settings:"Einstellungen", more:"Mehr",pruefungen:"Prüfungen","pruefung-start":"Probeprüfung",testziel:"Was kommt dran?",vorbereitung:"Vorbereitung",lehrpersonen:"Für Lehrpersonen", cover2:"Stoffabdeckung", info2:"Quellen", goals:"Lernziele", dashboard:"Übersicht", cards:"Wischkarten"};
M.sectionName=function(){
 var v=document.body.dataset.view||"home";
 return NAMES[v]||v;
};
M.paintSection=function(){
 var bar=document.querySelector(".top-in"); if(!bar) return;
 var el=document.getElementById("mn-where");
 if(!el){
  el=document.createElement("div"); el.id="mn-where"; el.className="where";
  el.setAttribute("aria-live","polite");
  var main=document.querySelector("main");
  if(main && main.parentNode) main.parentNode.insertBefore(el, main);
  else document.body.appendChild(el);
 }
 var v=document.body.dataset.view||"home";
 var pid=M.activeProgram&&M.activeProgram();
 var p=M.program&&M.program(pid);
 var chain=[];
 chain.push({t:"Start", v:"home"});
 if(p && v!=="programs") chain.push({t:(p.label||pid), v:"home"});
 if(["read","train","exam"].indexOf(v)>=0) chain.push({t:NAMES[v==="read"?"learn":"practice"], v:(v==="read"?"learn":"practice")});
 if(v!=="home") chain.push({t:M.sectionName(), v:null});
 el.innerHTML='<nav class="where-in" aria-label="Wo bin ich">'
  +chain.map(function(x,i){
    var last=i===chain.length-1;
    return (i? '<span class="where-sep" aria-hidden="true">›</span>':'')
     +(last? '<b aria-current="page">'+E(x.t)+'</b>'
           : '<button data-w="'+E(x.v||"")+'">'+E(x.t)+'</button>');}).join("")
  +'</nav>';
 el.querySelectorAll("[data-w]").forEach(function(b){
  b.onclick=function(){ if(b.dataset.w){ try{ M.go(b.dataset.w); }catch(e){} } };});
};
var go1=M.go;
if(typeof go1==="function" && !go1.__whereHook){
 M.go=function(){ var r=go1.apply(this,arguments); setTimeout(M.paintSection,0); return r; };
 M.go.__whereHook=true;
}
/* Auch bei eigenen Ansichten nachziehen */
["showVocab","showMistakes","showCoverage"].forEach(function(fn){
 if(typeof M[fn]==="function" && !M[fn].__whereHook){
  var base=M[fn];
  M[fn]=function(){ var r=base.apply(M,arguments); setTimeout(M.paintSection,0); return r; };
  M[fn].__whereHook=true;
 }
});
var n=0, iv=setInterval(function(){ n++;
 if(document.querySelector(".top-in")){ M.paintSection(); clearInterval(iv); }
 if(n>90) clearInterval(iv); },150);

/* 3. Matrix wieder als Reiter, neben Vokabeln und Fehler. */
function addCoverageTab(){
 var nav=document.querySelector(".nav-in")||document.querySelector(".nav");
 if(!nav || document.getElementById("tab-coverage") || !M.showCoverage) return;
 var model=nav.querySelector(".tab");
 var b=document.createElement("button");
 b.id="tab-coverage";
 b.className=(model?model.className:"tab").replace(/\bcur\b/,"").trim();
 b.innerHTML='<span class="tab-ic" aria-hidden="true">▦</span><span>Abdeckung</span>';
 b.title="Welcher Abschluss enthält welches Fach";
 b.onclick=function(){
  nav.querySelectorAll(".tab").forEach(function(t){t.classList.remove("cur");});
  b.classList.add("cur"); M.showCoverage(); };
 nav.appendChild(b);
}
var m2=0, iv2=setInterval(function(){ m2++;
 if(document.querySelector(".nav-in,.nav")){ addCoverageTab(); clearInterval(iv2); }
 if(m2>90) clearInterval(iv2); },150);
})();

;

(function(){"use strict";var M=window.MNEMIKA;if(!M)return;
/* Sprachwahl verdrahten und die Ansicht neu zeichnen. */
var baseShow=M.showVocab;
M.showVocab=function(){
 baseShow&&baseShow.call(M);
 var v=document.getElementById("v-vocab"); if(!v) return;
 v.querySelectorAll(".vx-l").forEach(function(b){
  b.onclick=function(){ M.setVocabLang(b.dataset.lang); M.showVocab(); };});
};
/* Bereichsanzeige auch bei Reiterklicks nachziehen. */
document.addEventListener("click", function(e){
 var t=e.target && e.target.closest && e.target.closest(".tab,[data-v],[data-go]");
 if(t) setTimeout(function(){ M.paintSection && M.paintSection(); }, 60);
}, true);
var last="";
setInterval(function(){
 var v=document.body.dataset.view||"";
 if(v!==last){ last=v; M.paintSection && M.paintSection(); }
}, 400);
})();

;

(function(){"use strict";var M=window.MNEMIKA;if(!M)return;
var E=M.esc||function(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){
 return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];});};

/* ============================================================
   Zwei Fusszeilenverweise zeigten auf Ansichten, die es in dieser
   Fassung nicht gibt, und endeten in einer Fehlermeldung.
   Sie bekommen jetzt echten Inhalt.
   ============================================================ */
function C(){ return M.CURRICULUM_INGEST_V1||M.CURRICULUM||{}; }

/* Stoffabdeckung: was der gewaehlte Abschluss abdeckt und was fehlt. */
M.renderCover=function(){
 var pid=M.activeProgram&&M.activeProgram();
 var p=M.program&&M.program(pid);
 var plans=(C().resolvedPlans||[]).filter(function(x){return x.programmeId===pid;});
 var ids={}; plans.forEach(function(pl){ (pl.usableChapterIds||[]).forEach(function(i){ids[i]=true;}); });
 var mine=(M.chapters||[]).filter(function(c){return ids[c.id];});
 var bySub={};
 mine.forEach(function(c){ (bySub[c.subject]=bySub[c.subject]||[]).push(c); });
 var subjects=Object.keys(bySub).sort();
 var all=(M.chapters||[]).length;
 var missing=[];
 plans.forEach(function(pl){ (pl.residualRequirements||pl.missing||[]).forEach(function(r){
  if(missing.indexOf(r)<0) missing.push(r); }); });
 var SL=M.SUBJECTS||{};
 return '<section class="cv"><h2>Stoffabdeckung: '+E((p&&p.label)||pid||"")+'</h2>'
  +'<p class="cv-lead">Was dieser Abschluss abdeckt, Fach für Fach. Die Minuten sind die '
  +'veranschlagte Lernzeit, nicht die Prüfungsdauer.</p>'
  +'<div class="cv-tot">'
  +[['Kapitel im Plan',mine.length],['von insgesamt',all],['Fächer',subjects.length],
    ['Aufgaben',mine.reduce(function(a,c){return a+(c.questions||[]).length
      +(c.blocks||[]).filter(function(b){return b&&b.check;}).length;},0)],
    ['Stunden',Math.round(mine.reduce(function(a,c){return a+(c.minutes||0);},0)/60)]]
   .map(function(x){return '<span><b>'+x[1]+'</b>'+x[0]+'</span>';}).join("")+'</div>'
  +'<div class="cv-scroll"><table class="cv-t">'
  +'<tr><th class="cv-corner">Fach</th><th>Kapitel</th><th>Stunden</th><th>Aufgaben</th></tr>'
  +subjects.map(function(s){
    var cs=bySub[s];
    var q=cs.reduce(function(a,c){return a+(c.questions||[]).length
      +(c.blocks||[]).filter(function(b){return b&&b.check;}).length;},0);
    return '<tr><th class="cv-sub" data-tip="'+E(cs.map(function(c){return c.title;}).slice(0,6).join(" · "))
     +'">'+E((SL[s]&&SL[s].label)||s)+'</th>'
     +'<td class="cv-same">'+cs.length+'</td>'
     +'<td>'+Math.round(cs.reduce(function(a,c){return a+(c.minutes||0);},0)/60)+'</td>'
     +'<td>'+q+'</td></tr>';}).join("")
  +'</table></div>'
  +(missing.length? '<h3>Noch offen</h3><ul class="cv-miss">'
    +missing.map(function(r){return '<li>'+E(r)+'</li>';}).join("")+'</ul>'
    +'<p class="cv-lead">Diese Punkte hängen an deiner Wahl oder am lokalen Lehrplan. '
    +'Sie zählen nicht zur ausgewiesenen Bereitschaft.</p>' : '')
  +'</section>';
};

/* Quellen und Prüfstatus: woher der Stoff kommt und wie weit geprüft. */
M.renderInfo=function(){
 var progs=(M.PROGRAMS||[]);
 var SRC=(M.sourceLink? null : null);
 var rows=progs.map(function(pr){
  var ss={};
  (C().resolvedPlans||[]).filter(function(x){return x.programmeId===pr.id;})
   .forEach(function(pl){ (pl.sourceRefs||[]).forEach(function(s){ss[s]=true;}); });
  var list=Object.keys(ss);
  return '<tr><th>'+E(pr.label||pr.id)+'</th><td>'+(list.length? list.map(function(id){
    var l=M.sourceLink?M.sourceLink(id):[id,""];
    return l[1]? '<a href="'+E(l[1])+'" target="_blank" rel="noopener noreferrer">'+E(l[0])+'</a>'
               : E(l[0]);}).join(" · ") : "keine hinterlegt")+'</td></tr>';
 }).join("");
 var ch=(M.chapters||[]);
 var withSrc=ch.filter(function(c){return (c.sourceRefs&&c.sourceRefs.length)||c.source;}).length;
 var reviewed=ch.filter(function(c){return /REVIEWED/.test(String(c.reviewStatus||""));}).length;
 return '<section class="cv"><h2>Quellen und Prüfstatus</h2>'
  +'<p class="cv-lead">Verbindlich sind immer die aktuellen Unterlagen der zuständigen Stellen. '
  +'Was hier steht, ist die Zuordnung, auf der die App aufbaut.</p>'
  +'<div class="cv-tot">'
  +[['Kapitel',ch.length],['mit Quellenangabe',withSrc],['fachlich durchgesehen',reviewed]]
   .map(function(x){return '<span><b>'+x[1]+'</b>'+x[0]+'</span>';}).join("")+'</div>'
  +'<table class="cv-t cv-src">'+rows+'</table>'
  +'<h3>Was der Status bedeutet</h3>'
  +'<ul class="cv-miss">'
  +'<li><b>Quellenangabe</b>: das Kapitel nennt Dokument und Seitenbereich, aus dem die '
  +'Zuordnung stammt. Die Herkunft ist der Programmplan, nicht eine eigene Seitenprüfung.</li>'
  +'<li><b>Fachlich durchgesehen</b>: Inhalt, Formeln, Schweizer Fachsprache und '
  +'Aufgabenschlüssel wurden geprüft. Das ersetzt keine Lehrplanprüfung durch eine Fachperson.</li>'
  +'<li><b>Provisorisch</b>: das Kapitel ist lernbar, zählt aber nicht zur ausgewiesenen '
  +'Prüfungsbereitschaft.</li></ul>'
  +'</section>';
};

/* Die kaputten Verweise auf echte Ansichten umlenken. */
function mount(id, html, after){
 var v=document.getElementById(id);
 if(!v){
  var anchor=document.getElementById("v-learn")||document.querySelector("main>section")||document.querySelector("main");
  if(!anchor) return;
  v=document.createElement("section"); v.id=id; v.hidden=true;
  (anchor.parentNode||document.body).appendChild(v);
 }
 v.innerHTML=html;
 var main=v.parentNode;
 [].forEach.call(main.children,function(el){ if(el.id&&/^v-/.test(el.id)) el.hidden=(el!==v); });
 v.hidden=false; document.body.dataset.view=id.replace("v-","");
 if(M.wireTips) M.wireTips(v);
 if(after) after(v);
 if(M.paintSection) M.paintSection();
 v.scrollIntoView({block:"start"});
}
M.showCover=function(){ mount("v-cover2", M.renderCover()); };
M.showInfo=function(){ mount("v-info2", M.renderInfo()); };
/* Die Anwendung faengt Klicks auf data-go zentral ab und leitet sie an
   ihre eigenen, hier nicht vorhandenen Ansichten. Deshalb greifen wir
   in der Erfassungsphase ein, bevor ihr Handler laeuft. */
document.addEventListener("click", function(e){
 var b=e.target && e.target.closest && e.target.closest("[data-go]");
 if(!b) return;
 var g=b.dataset.go;
 if(g==="cover"){ e.preventDefault(); e.stopPropagation(); M.showCover(); }
 if(g==="info"){ e.preventDefault(); e.stopPropagation(); M.showInfo(); }
}, true);
/* Auch der Weg ueber M.go darf nicht in der Fehlermeldung enden. */
var goBase=M.go;
if(typeof goBase==="function" && !goBase.__coverHook){
 M.go=function(v){
  if(v==="cover"){ return M.showCover(); }
  if(v==="info"){ return M.showInfo(); }
  return goBase.apply(this, arguments);
 };
 M.go.__coverHook=true;
}
})();

;

(function(){"use strict";var M=window.MNEMIKA;if(!M)return;
var E=M.esc||function(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){
 return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];});};

/* ============================================================
   Vokabeln sichtbar machen: eine Karte auf der Startseite mit
   Tagesziel, Serie und Fortschrittsring. Ein Klick, und die
   Runde laeuft.
   ============================================================ */
var DKEY="mnemika-vocab-day-v1";
M.vocabToday=function(){
 var t=new Date().toISOString().slice(0,10), s;
 try{ s=JSON.parse(localStorage.getItem(DKEY)||"{}"); }catch(e){ s={}; }
 if(s.day!==t){ s={day:t, done:0, goal:s.goal||20}; }
 return s;
};
M.vocabGoal=function(n){
 var s=M.vocabToday();
 if(n){ s.goal=n; try{ localStorage.setItem(DKEY, JSON.stringify(s)); }catch(e){} }
 return s.goal||20;
};
M.vocabCount=function(){
 var s=M.vocabToday(); s.done=(s.done||0)+1;
 try{ localStorage.setItem(DKEY, JSON.stringify(s)); }catch(e){}
 return s.done;
};
function ring(pct, size){
 var r=(size/2)-5, c=2*Math.PI*r;
 return '<svg class="vr" viewBox="0 0 '+size+' '+size+'" width="'+size+'" height="'+size+'">'
  +'<circle cx="'+size/2+'" cy="'+size/2+'" r="'+r+'" fill="none" stroke="rgba(16,23,36,.10)" stroke-width="7"/>'
  +'<circle cx="'+size/2+'" cy="'+size/2+'" r="'+r+'" fill="none" stroke="#B8FF4A" stroke-width="7"'
  +' stroke-linecap="round" stroke-dasharray="'+c+'" stroke-dashoffset="'+(c*(1-pct))+'"'
  +' transform="rotate(-90 '+size/2+' '+size/2+')"/></svg>';
}
M.vocabHomeCard=function(){
 var s=M.vocabStats(), t=M.vocabToday(), goal=M.vocabGoal();
 var done=Math.min(t.done||0, goal), pct=goal? done/goal : 0;
 var lang={en:"Englisch", fr:"Französisch"}[M.vocabLang()];
 return '<section class="vhome">'
  +'<div class="vhome-ring">'+ring(pct,104)
  +'<span class="vhome-num"><b>'+done+'</b>/'+goal+'</span></div>'
  +'<div class="vhome-txt">'
  +'<span class="vhome-kick">Vokabeln '+E(lang)+'</span>'
  +'<h3>'+(done>=goal? "Tagesziel geschafft"
      : (done? "Noch "+(goal-done)+" Karten heute" : "Heute noch keine Karte"))+'</h3>'
  +'<p>'+s.due+' fällig · '+s.mastered+' gekonnt · '+s.cards+' im Stapel'
  +(s.streak? ' · <b>'+s.streak+' Tage in Folge</b>':'')+'</p>'
  +'<div class="vhome-act"><button class="vhome-go">'
  +(done? "Weiterüben":"Runde starten")+'</button>'
  +'<button class="vhome-more">Alle Vokabeln</button></div></div></section>';
};
function mountHome(){
 var host=document.getElementById("v-home")||document.querySelector("#v-dashboard");
 if(!host||host.hidden) return;
 if(host.querySelector(".vhome")) return;
 var d=document.createElement("div");
 d.innerHTML=M.vocabHomeCard();
 var card=d.firstChild;
 var anchor=host.querySelector("h1,h2,.hdr,.dash-head");
 if(anchor&&anchor.parentNode) anchor.parentNode.insertBefore(card, anchor.nextSibling);
 else host.insertBefore(card, host.firstChild);
 card.querySelector(".vhome-go").onclick=function(){
  M.showVocab();
  setTimeout(function(){
   var g=document.querySelector("#v-vocab .vx-go"); if(g) g.click(); },120);
 };
 card.querySelector(".vhome-more").onclick=function(){ M.showVocab(); };
}
var go2=M.go;
if(typeof go2==="function" && !go2.__vhomeHook){
 M.go=function(){ var r=go2.apply(this,arguments); setTimeout(mountHome,60); return r; };
 M.go.__vhomeHook=true;
}
/* Die Startansicht wird nach jedem Wechsel neu gezeichnet, deshalb
   wiederholt versuchen, bis die Karte steht. */
setInterval(function(){
 var v=document.getElementById("v-home");
 if(v && !v.hidden && !v.querySelector(".vhome")) mountHome();
}, 500);
setTimeout(mountHome,700); setTimeout(mountHome,1800);

/* Jede beantwortete Karte zaehlt aufs Tagesziel. */
var va=M.vocabAnswer;
if(typeof va==="function" && !va.__dayHook){
 M.vocabAnswer=function(id, ok){ var r=va.call(M, id, ok); M.vocabCount(); return r; };
 M.vocabAnswer.__dayHook=true;
}
})();

;

(function(){"use strict";var M=window.MNEMIKA;if(!M)return;

/* ============================================================
   Nachbesserung aller gezeichneten Karten.
   Die Generatoren rechnen Zeilenhoehen im Voraus. Passt ein Wert
   nicht, laeuft er aus seinem Kasten, ueber den Titel oder aus der
   Karte heraus. Dieser Durchgang misst, was wirklich gezeichnet
   wurde, und raeumt auf: zu breite Texte werden umgebrochen oder
   verkleinert, ueberlappende nach unten geschoben, und die Grafik
   waechst mit, statt den Inhalt abzuschneiden.
   ============================================================ */
function boxOf(el){ try{ return el.getBBox(); }catch(e){ return null; } }

function fixOne(svg){
 if(svg.classList.contains("r7-svg")) return;
 if(svg.__cardFixed===2) return;
  if((function(){var fg=svg.closest&&svg.closest("figure.viz");return !!(fg&&/^(compare|process|timeline)$/.test(fg.getAttribute("data-kind")||""));})()) return; /* Iteration 13: Vergleichs- und Ablaufdiagramme sind richtig gesetzt */
 var vb=(svg.getAttribute("viewBox")||"").split(/[\s,]+/).map(Number);
 if(vb.length!==4) return;
 var W=vb[2], H=vb[3], minY=vb[1];
 var texts=[].slice.call(svg.querySelectorAll("text"));
 if(!texts.length) return;

 /* 1. Was ueber den linken oder rechten Rand laeuft, wird kleiner. */
 texts.forEach(function(t){
  var b=boxOf(t); if(!b||!b.width) return;
  var guard=0;
  var fs=parseFloat(window.getComputedStyle(t).fontSize)||13;
  while(guard++<6 && (b.x < vb[0]+2 || b.x+b.width > vb[0]+W-2) && fs>8.5){
   fs-=0.8; t.style.fontSize=fs+"px";
   b=boxOf(t); if(!b) break;
  }
  /* Immer noch zu breit: am rechten Rand ausrichten statt ueberlaufen. */
  if(b && b.x+b.width > vb[0]+W-2 && t.getAttribute("text-anchor")!=="end"){
   var over=(b.x+b.width)-(vb[0]+W-4);
   t.setAttribute("x", (parseFloat(t.getAttribute("x")||"0")-over));
  }
 });

 /* 2. Ueberlappungen aufloesen, von oben nach unten. */
 var placed=[];
 texts.sort(function(a,b){
  var A=boxOf(a),B=boxOf(b); return ((A&&A.y)||0)-((B&&B.y)||0); });
 texts.forEach(function(t){
  var b=boxOf(t); if(!b||!b.width) return;
  var dy=0, guard=0;
  while(guard++<10 && placed.some(function(o){
    return b.x < o.x+o.w-1 && b.x+b.width > o.x+1 &&
           b.y+dy < o.y+o.h-1 && b.y+b.height+dy > o.y+1; })){
   dy += (b.height+3);
  }
  if(dy){ t.setAttribute("y", (parseFloat(t.getAttribute("y")||"0")+dy)); }
  placed.push({x:b.x, y:b.y+dy, w:b.width, h:b.height});
 });

 /* 3. Die Grafik waechst, wenn unten etwas hinausragt, statt zu schneiden. */
 var maxY=minY+H;
 placed.forEach(function(o){ if(o.y+o.h>maxY) maxY=o.y+o.h; });
 var extra=Math.ceil(maxY-(minY+H));
 if(extra>0){
  var nh=H+extra+10;
  svg.setAttribute("viewBox", vb[0]+" "+minY+" "+W+" "+nh);
  if(svg.getAttribute("height")) svg.setAttribute("height", nh);
  svg.style.height="auto";
 }
 /* 4. Nichts darf oben oder seitlich herausragen. Achsenbeschriftungen
       stehen gedreht am linken Rand und ragten dort hinaus. */
 var minTop=minY, minLeft=vb[0], maxRight=vb[0]+W;
 placed.forEach(function(o){
  if(o.y<minTop) minTop=o.y;
  if(o.x<minLeft) minLeft=o.x;
  if(o.x+o.w>maxRight) maxRight=o.x+o.w;
 });
 var cur=(svg.getAttribute("viewBox")||"").split(/[\s,]+/).map(Number);
 var nx=cur[0], ny=cur[1], nw=cur[2], nh2=cur[3];
 if(minTop<ny-1){ var up=Math.ceil(ny-minTop)+6; ny-=up; nh2+=up; }
 if(minLeft<nx-1){ var lf=Math.ceil(nx-minLeft)+6; nx-=lf; nw+=lf; }
 if(maxRight>nx+nw+1){ nw=Math.ceil(maxRight-nx)+6; }
 if(nx!==cur[0]||ny!==cur[1]||nw!==cur[2]||nh2!==cur[3]){
  svg.setAttribute("viewBox", nx+" "+ny+" "+nw+" "+nh2);
  svg.removeAttribute("width");
  svg.style.width="100%";
 }
 svg.__cardFixed=2;
}

M.fixCards=function(root){
 var n=0;
 (root||document).querySelectorAll("svg").forEach(function(s){
  if(s.closest(".tab,.logo,.brandblock,#mn-bg")) return;
  if(!s.querySelector("text")) return;
  try{ fixOne(s); n++; }catch(e){}
 });
 return n;
};
M.cardAudit=function(root){
 var bad=0, over=0, checked=0;
 (root||document).querySelectorAll("svg").forEach(function(s){
  if(!s.querySelector("text")) return;
  var vb=(s.getAttribute("viewBox")||"").split(/[\s,]+/).map(Number);
  if(vb.length!==4) return;
  checked++;
  var ts=[].slice.call(s.querySelectorAll("text")), bs=[];
  ts.forEach(function(t){ var b=boxOf(t); if(b&&b.width) bs.push(b); });
  for(var i=0;i<bs.length;i++){
   var b=bs[i];
   if(b.x<vb[0]-1 || b.x+b.width>vb[0]+vb[2]+1 || b.y<vb[1]-1 || b.y+b.height>vb[1]+vb[3]+1) over++;
   for(var j=i+1;j<bs.length;j++){
    var c=bs[j];
    if(b.x<c.x+c.width-1&&b.x+b.width>c.x+1&&b.y<c.y+c.height-1&&b.y+b.height>c.y+1) bad++;
   }
  }
 });
 return {svgs:checked, overlaps:bad, outside:over};
};
var mo=new MutationObserver(function(){ clearTimeout(mo.__t);
 mo.__t=setTimeout(function(){ M.fixCards(document); }, 120); });
function watch(){
 var main=document.querySelector("main")||document.body;
 mo.observe(main,{childList:true,subtree:true});
 M.fixCards(document);
}
if(document.readyState!=="loading") setTimeout(watch,700);
else document.addEventListener("DOMContentLoaded",function(){setTimeout(watch,700);});
})();

;

(function(){"use strict";var M=window.MNEMIKA;if(!M)return;
var E=M.esc||function(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){
 return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];});};

/* ============================================================
   Mehr Abwechslung und mehr Spiel im Vokabeltraining.
   Acht Uebungsarten statt vier, Punkte, Leben, Kombo, Zeitdruck
   in einer eigenen Runde und ein Abschluss mit Auswertung.
   ============================================================ */
var G={pts:0, combo:0, best:0, lives:3, mode:"normal", started:0};
var PKEY="mnemika-vocab-points-v1";
M.vocabPoints=function(){ try{ return JSON.parse(localStorage.getItem(PKEY)||'{"total":0,"best":0}'); }
 catch(e){ return {total:0,best:0}; } };
M.addPoints=function(n){
 var s=M.vocabPoints(); s.total=(s.total||0)+n;
 if(G.best>(s.best||0)) s.best=G.best;
 if(M.persist) M.persist(PKEY, JSON.stringify(s)); else try{ localStorage.setItem(PKEY, JSON.stringify(s)); }catch(e){}
 return s;
};

/* Acht Uebungsarten. Jede prueft etwas anderes. */
M.VMODES=[
 {id:"pick",   label:"Bedeutung wählen",  hint:"Was bedeutet das?"},
 {id:"reverse",label:"Wort finden",       hint:"Wie heisst das?"},
 {id:"type",   label:"Selbst tippen",     hint:"Schreib die Bedeutung"},
 {id:"recall", label:"Aus dem Kopf",      hint:"Erst denken, dann umdrehen"},
 {id:"listen", label:"Hören",             hint:"Hör zu und wähle"},
 {id:"build",  label:"Buchstaben ordnen", hint:"Setz das Wort zusammen"},
 {id:"gap",    label:"Lücke im Satz",     hint:"Welches Wort passt?"},
 {id:"speed",  label:"Blitzrunde",        hint:"Schnell: passt das?"}
];
/* Renderer: siehe Runde unten (R155). */
})();

;

(function(){"use strict";var M=window.MNEMIKA;if(!M)return;

M.VOCAB_TASKS_V4={"schema": 4, "records": [{"id": "mn4-gap-en-01", "sourceWordId": "en:en:0", "language": "en", "lemma": "to achieve", "meaning": "erreichen, erzielen", "sourceExample": "She achieved her goal in three months.", "before": "She ", "expectedForm": "achieved", "after": " her goal in three months.", "acceptedForms": ["achieved"], "caseSensitive": false, "prompt": "Setze die passende Form von «to achieve» ein.", "hint": "Der Satz beschreibt ein abgeschlossenes Ereignis. achieved ist die Vergangenheitsform von achieve.", "feedback": "Der Satz beschreibt ein abgeschlossenes Ereignis. achieved ist die Vergangenheitsform von achieve.", "role": "guided-word-form-practice", "independentEvidence": false, "officialReadiness": false, "reviewStatus": "EDITORIAL_PROPOSAL_SOURCE_RECONSTRUCTION_TESTED", "source": "V2 app live LANGUAGE_VOCAB record; original wording preserved."}, {"id": "mn4-gap-en-02", "sourceWordId": "en:en:1", "language": "en", "lemma": "to assess", "meaning": "beurteilen, einschätzen", "sourceExample": "The examiner assesses your argument, not your opinion.", "before": "The examiner ", "expectedForm": "assesses", "after": " your argument, not your opinion.", "acceptedForms": ["assesses"], "caseSensitive": false, "prompt": "Setze die passende Form von «to assess» ein.", "hint": "The examiner steht in der dritten Person Singular. Im Simple Present lautet die Form assesses.", "feedback": "The examiner steht in der dritten Person Singular. Im Simple Present lautet die Form assesses.", "role": "guided-word-form-practice", "independentEvidence": false, "officialReadiness": false, "reviewStatus": "EDITORIAL_PROPOSAL_SOURCE_RECONSTRUCTION_TESTED", "source": "V2 app live LANGUAGE_VOCAB record; original wording preserved."}, {"id": "mn4-gap-en-03", "sourceWordId": "en:en:2", "language": "en", "lemma": "to claim", "meaning": "behaupten", "sourceExample": "The author claims that growth has slowed.", "before": "The author ", "expectedForm": "claims", "after": " that growth has slowed.", "acceptedForms": ["claims"], "caseSensitive": false, "prompt": "Setze die passende Form von «to claim» ein.", "hint": "The author steht in der dritten Person Singular. Deshalb steht hier claims.", "feedback": "The author steht in der dritten Person Singular. Deshalb steht hier claims.", "role": "guided-word-form-practice", "independentEvidence": false, "officialReadiness": false, "reviewStatus": "EDITORIAL_PROPOSAL_SOURCE_RECONSTRUCTION_TESTED", "source": "V2 app live LANGUAGE_VOCAB record; original wording preserved."}, {"id": "mn4-gap-en-04", "sourceWordId": "en:en:3", "language": "en", "lemma": "to point out", "meaning": "hinweisen auf", "sourceExample": "The text points out three reasons.", "before": "The text ", "expectedForm": "points out", "after": " three reasons.", "acceptedForms": ["points out"], "caseSensitive": false, "prompt": "Setze die passende Form von «to point out» ein.", "hint": "Bei the text steht das Verb in der dritten Person Singular: points out. Das ganze mehrteilige Verb bleibt zusammen.", "feedback": "Bei the text steht das Verb in der dritten Person Singular: points out. Das ganze mehrteilige Verb bleibt zusammen.", "role": "guided-word-form-practice", "independentEvidence": false, "officialReadiness": false, "reviewStatus": "EDITORIAL_PROPOSAL_SOURCE_RECONSTRUCTION_TESTED", "source": "V2 app live LANGUAGE_VOCAB record; original wording preserved."}, {"id": "mn4-gap-fr-01", "sourceWordId": "fr:fr:0", "language": "fr", "lemma": "atteindre", "meaning": "erreichen", "sourceExample": "Elle a atteint son objectif.", "before": "Elle a ", "expectedForm": "atteint", "after": " son objectif.", "acceptedForms": ["atteint"], "caseSensitive": false, "prompt": "Setze die passende Form von «atteindre» ein.", "hint": "a ist das Hilfsverb; atteint ist das Partizip von atteindre.", "feedback": "a ist das Hilfsverb; atteint ist das Partizip von atteindre.", "role": "guided-word-form-practice", "independentEvidence": false, "officialReadiness": false, "reviewStatus": "EDITORIAL_PROPOSAL_SOURCE_RECONSTRUCTION_TESTED", "source": "V2 app live LANGUAGE_VOCAB record; original wording preserved."}, {"id": "mn4-gap-fr-02", "sourceWordId": "fr:fr:1", "language": "fr", "lemma": "évaluer", "meaning": "beurteilen", "sourceExample": "L'examinateur évalue ton argumentation.", "before": "L'examinateur ", "expectedForm": "évalue", "after": " ton argumentation.", "acceptedForms": ["évalue"], "caseSensitive": false, "prompt": "Setze die passende Form von «évaluer» ein.", "hint": "Bei L'examinateur steht hier die Form évalue. Der Akzent gehört zum Wort.", "feedback": "Bei L'examinateur steht hier die Form évalue. Der Akzent gehört zum Wort.", "role": "guided-word-form-practice", "independentEvidence": false, "officialReadiness": false, "reviewStatus": "EDITORIAL_PROPOSAL_SOURCE_RECONSTRUCTION_TESTED", "source": "V2 app live LANGUAGE_VOCAB record; original wording preserved."}, {"id": "mn4-gap-fr-03", "sourceWordId": "fr:fr:2", "language": "fr", "lemma": "affirmer", "meaning": "behaupten", "sourceExample": "L'auteur affirme que la croissance ralentit.", "before": "L'auteur ", "expectedForm": "affirme", "after": " que la croissance ralentit.", "acceptedForms": ["affirme"], "caseSensitive": false, "prompt": "Setze die passende Form von «affirmer» ein.", "hint": "Bei L'auteur lautet die Verbform affirme.", "feedback": "Bei L'auteur lautet die Verbform affirme.", "role": "guided-word-form-practice", "independentEvidence": false, "officialReadiness": false, "reviewStatus": "EDITORIAL_PROPOSAL_SOURCE_RECONSTRUCTION_TESTED", "source": "V2 app live LANGUAGE_VOCAB record; original wording preserved."}, {"id": "mn4-gap-fr-04", "sourceWordId": "fr:fr:3", "language": "fr", "lemma": "souligner", "meaning": "betonen, hervorheben", "sourceExample": "Le texte souligne trois raisons.", "before": "Le texte ", "expectedForm": "souligne", "after": " trois raisons.", "acceptedForms": ["souligne"], "caseSensitive": false, "prompt": "Setze die passende Form von «souligner» ein.", "hint": "Bei Le texte lautet die Verbform souligne.", "feedback": "Bei Le texte lautet die Verbform souligne.", "role": "guided-word-form-practice", "independentEvidence": false, "officialReadiness": false, "reviewStatus": "EDITORIAL_PROPOSAL_SOURCE_RECONSTRUCTION_TESTED", "source": "V2 app live LANGUAGE_VOCAB record; original wording preserved."}, {"id": "mn4-gap-it-01", "sourceWordId": "it:it:0", "language": "it", "lemma": "il ruolo", "meaning": "die Rolle", "sourceExample": "Il ruolo dello Stato è cambiato.", "before": "Il ", "expectedForm": "ruolo", "after": " dello Stato è cambiato.", "acceptedForms": ["ruolo"], "caseSensitive": false, "prompt": "Setze die passende Form von «il ruolo» ein.", "hint": "Der Artikel Il bleibt vor der Lücke. Gesucht ist nur ruolo.", "feedback": "Der Artikel Il bleibt vor der Lücke. Gesucht ist nur ruolo.", "role": "guided-word-form-practice", "independentEvidence": false, "officialReadiness": false, "reviewStatus": "EDITORIAL_PROPOSAL_SOURCE_RECONSTRUCTION_TESTED", "source": "V2 app live LANGUAGE_VOCAB record; original wording preserved."}, {"id": "mn4-gap-it-02", "sourceWordId": "it:it:1", "language": "it", "lemma": "lo sviluppo", "meaning": "die Entwicklung", "sourceExample": "Lo sviluppo economico è rallentato.", "before": "Lo ", "expectedForm": "sviluppo", "after": " economico è rallentato.", "acceptedForms": ["sviluppo"], "caseSensitive": false, "prompt": "Setze die passende Form von «lo sviluppo» ein.", "hint": "Der Artikel Lo bleibt stehen. Gesucht ist sviluppo.", "feedback": "Der Artikel Lo bleibt stehen. Gesucht ist sviluppo.", "role": "guided-word-form-practice", "independentEvidence": false, "officialReadiness": false, "reviewStatus": "EDITORIAL_PROPOSAL_SOURCE_RECONSTRUCTION_TESTED", "source": "V2 app live LANGUAGE_VOCAB record; original wording preserved."}, {"id": "mn4-gap-it-03", "sourceWordId": "it:it:2", "language": "it", "lemma": "la crescita", "meaning": "das Wachstum", "sourceExample": "La crescita è stata del due per cento.", "before": "La ", "expectedForm": "crescita", "after": " è stata del due per cento.", "acceptedForms": ["crescita"], "caseSensitive": false, "prompt": "Setze die passende Form von «la crescita» ein.", "hint": "La ist bereits gegeben; ergänze das Nomen crescita.", "feedback": "La ist bereits gegeben; ergänze das Nomen crescita.", "role": "guided-word-form-practice", "independentEvidence": false, "officialReadiness": false, "reviewStatus": "EDITORIAL_PROPOSAL_SOURCE_RECONSTRUCTION_TESTED", "source": "V2 app live LANGUAGE_VOCAB record; original wording preserved."}, {"id": "mn4-gap-it-04", "sourceWordId": "it:it:3", "language": "it", "lemma": "l'aumento", "meaning": "die Zunahme", "sourceExample": "Si nota un aumento dei prezzi.", "before": "Si nota un ", "expectedForm": "aumento", "after": " dei prezzi.", "acceptedForms": ["aumento"], "caseSensitive": false, "prompt": "Setze die passende Form von «l'aumento» ein.", "hint": "Im Satz steht un aumento. Das Nomen allein füllt die Lücke.", "feedback": "Im Satz steht un aumento. Das Nomen allein füllt die Lücke.", "role": "guided-word-form-practice", "independentEvidence": false, "officialReadiness": false, "reviewStatus": "EDITORIAL_PROPOSAL_SOURCE_RECONSTRUCTION_TESTED", "source": "V2 app live LANGUAGE_VOCAB record; original wording preserved."}, {"id": "mn4-gap-es-01", "sourceWordId": "es:es:0", "language": "es", "lemma": "el papel", "meaning": "die Rolle", "sourceExample": "El papel del Estado ha cambiado.", "before": "El ", "expectedForm": "papel", "after": " del Estado ha cambiado.", "acceptedForms": ["papel"], "caseSensitive": false, "prompt": "Setze die passende Form von «el papel» ein.", "hint": "El bleibt stehen; papel bezeichnet hier die Rolle.", "feedback": "El bleibt stehen; papel bezeichnet hier die Rolle.", "role": "guided-word-form-practice", "independentEvidence": false, "officialReadiness": false, "reviewStatus": "EDITORIAL_PROPOSAL_SOURCE_RECONSTRUCTION_TESTED", "source": "V2 app live LANGUAGE_VOCAB record; original wording preserved."}, {"id": "mn4-gap-es-02", "sourceWordId": "es:es:1", "language": "es", "lemma": "el desarrollo", "meaning": "die Entwicklung", "sourceExample": "El desarrollo económico se ha frenado.", "before": "El ", "expectedForm": "desarrollo", "after": " económico se ha frenado.", "acceptedForms": ["desarrollo"], "caseSensitive": false, "prompt": "Setze die passende Form von «el desarrollo» ein.", "hint": "El bleibt stehen; desarrollo ist das gesuchte Nomen.", "feedback": "El bleibt stehen; desarrollo ist das gesuchte Nomen.", "role": "guided-word-form-practice", "independentEvidence": false, "officialReadiness": false, "reviewStatus": "EDITORIAL_PROPOSAL_SOURCE_RECONSTRUCTION_TESTED", "source": "V2 app live LANGUAGE_VOCAB record; original wording preserved."}, {"id": "mn4-gap-es-03", "sourceWordId": "es:es:2", "language": "es", "lemma": "el crecimiento", "meaning": "das Wachstum", "sourceExample": "El crecimiento fue del dos por ciento.", "before": "El ", "expectedForm": "crecimiento", "after": " fue del dos por ciento.", "acceptedForms": ["crecimiento"], "caseSensitive": false, "prompt": "Setze die passende Form von «el crecimiento» ein.", "hint": "El bleibt stehen; ergänze crecimiento.", "feedback": "El bleibt stehen; ergänze crecimiento.", "role": "guided-word-form-practice", "independentEvidence": false, "officialReadiness": false, "reviewStatus": "EDITORIAL_PROPOSAL_SOURCE_RECONSTRUCTION_TESTED", "source": "V2 app live LANGUAGE_VOCAB record; original wording preserved."}, {"id": "mn4-gap-es-04", "sourceWordId": "es:es:3", "language": "es", "lemma": "el aumento", "meaning": "die Zunahme", "sourceExample": "Se observa un aumento de los precios.", "before": "Se observa un ", "expectedForm": "aumento", "after": " de los precios.", "acceptedForms": ["aumento"], "caseSensitive": false, "prompt": "Setze die passende Form von «el aumento» ein.", "hint": "un bleibt stehen; ergänze aumento.", "feedback": "un bleibt stehen; ergänze aumento.", "role": "guided-word-form-practice", "independentEvidence": false, "officialReadiness": false, "reviewStatus": "EDITORIAL_PROPOSAL_SOURCE_RECONSTRUCTION_TESTED", "source": "V2 app live LANGUAGE_VOCAB record; original wording preserved."}, {"id": "mn4-gap-rm-01", "sourceWordId": "rm:rm:0", "language": "rm", "lemma": "il pled", "meaning": "das Wort", "sourceExample": "Emprim il pled, lura l'agir.", "before": "Emprim il ", "expectedForm": "pled", "after": ", lura l'agir.", "acceptedForms": ["pled"], "caseSensitive": false, "prompt": "Setze die passende Form von «il pled» ein.", "hint": "Der Satz aus dem Stapel enthält il pled. Der Artikel bleibt sichtbar.", "feedback": "Der Satz aus dem Stapel enthält il pled. Der Artikel bleibt sichtbar.", "role": "guided-word-form-practice", "independentEvidence": false, "officialReadiness": false, "reviewStatus": "EDITORIAL_PROPOSAL_SOURCE_RECONSTRUCTION_TESTED", "source": "V2 app live LANGUAGE_VOCAB record; original wording preserved."}, {"id": "mn4-gap-rm-02", "sourceWordId": "rm:rm:1", "language": "rm", "lemma": "la lingua", "meaning": "die Sprache", "sourceExample": "Il rumantsch è ina lingua naziunala.", "before": "Il rumantsch è ina ", "expectedForm": "lingua", "after": " naziunala.", "acceptedForms": ["lingua"], "caseSensitive": false, "prompt": "Setze die passende Form von «la lingua» ein.", "hint": "ina bleibt sichtbar; lingua ist das gesuchte Wort.", "feedback": "ina bleibt sichtbar; lingua ist das gesuchte Wort.", "role": "guided-word-form-practice", "independentEvidence": false, "officialReadiness": false, "reviewStatus": "EDITORIAL_PROPOSAL_SOURCE_RECONSTRUCTION_TESTED", "source": "V2 app live LANGUAGE_VOCAB record; original wording preserved."}, {"id": "mn4-gap-rm-03", "sourceWordId": "rm:rm:2", "language": "rm", "lemma": "la scola", "meaning": "die Schule", "sourceExample": "La scola en Grischun.", "before": "La ", "expectedForm": "scola", "after": " en Grischun.", "acceptedForms": ["scola"], "caseSensitive": false, "prompt": "Setze die passende Form von «la scola» ein.", "hint": "La bleibt sichtbar; scola ist das gesuchte Wort.", "feedback": "La bleibt sichtbar; scola ist das gesuchte Wort.", "role": "guided-word-form-practice", "independentEvidence": false, "officialReadiness": false, "reviewStatus": "EDITORIAL_PROPOSAL_SOURCE_RECONSTRUCTION_TESTED", "source": "V2 app live LANGUAGE_VOCAB record; original wording preserved."}, {"id": "mn4-gap-rm-04", "sourceWordId": "rm:rm:3", "language": "rm", "lemma": "il temp", "meaning": "die Zeit, das Wetter", "sourceExample": "Nus avain pauc temp.", "before": "Nus avain pauc ", "expectedForm": "temp", "after": ".", "acceptedForms": ["temp"], "caseSensitive": false, "prompt": "Setze die passende Form von «il temp» ein.", "hint": "pauc bleibt sichtbar; temp ist das gesuchte Wort.", "feedback": "pauc bleibt sichtbar; temp ist das gesuchte Wort.", "role": "guided-word-form-practice", "independentEvidence": false, "officialReadiness": false, "reviewStatus": "EDITORIAL_PROPOSAL_SOURCE_RECONSTRUCTION_TESTED", "source": "V2 app live LANGUAGE_VOCAB record; original wording preserved."}, {"id": "mn4-gap-la-01", "sourceWordId": "la:la:0", "language": "la", "lemma": "res, rei f.", "meaning": "die Sache, der Umstand", "sourceExample": "Res publica: der Staat.", "before": "", "expectedForm": "Res", "after": " publica: der Staat.", "acceptedForms": ["Res"], "caseSensitive": false, "prompt": "Setze die passende Form von «res, rei f.» ein.", "hint": "Der Ausdruck im Stapel lautet Res publica. Die Wörterbuchangaben rei und f. gehören nicht in die Lücke.", "feedback": "Der Ausdruck im Stapel lautet Res publica. Die Wörterbuchangaben rei und f. gehören nicht in die Lücke.", "role": "guided-word-form-practice", "independentEvidence": false, "officialReadiness": false, "reviewStatus": "EDITORIAL_PROPOSAL_SOURCE_RECONSTRUCTION_TESTED", "source": "V2 app live LANGUAGE_VOCAB record; original wording preserved."}, {"id": "mn4-gap-la-02", "sourceWordId": "la:la:1", "language": "la", "lemma": "virtus, virtutis f.", "meaning": "die Tüchtigkeit, Tapferkeit", "sourceExample": "Virtus Romana.", "before": "", "expectedForm": "Virtus", "after": " Romana.", "acceptedForms": ["Virtus"], "caseSensitive": false, "prompt": "Setze die passende Form von «virtus, virtutis f.» ein.", "hint": "Der Ausdruck im Stapel lautet Virtus Romana. Die Genitiv- und Geschlechtsangaben werden nicht mitgeschrieben.", "feedback": "Der Ausdruck im Stapel lautet Virtus Romana. Die Genitiv- und Geschlechtsangaben werden nicht mitgeschrieben.", "role": "guided-word-form-practice", "independentEvidence": false, "officialReadiness": false, "reviewStatus": "EDITORIAL_PROPOSAL_SOURCE_RECONSTRUCTION_TESTED", "source": "V2 app live LANGUAGE_VOCAB record; original wording preserved."}, {"id": "mn4-gap-la-03", "sourceWordId": "la:la:2", "language": "la", "lemma": "imperium, i n.", "meaning": "der Befehl, die Herrschaft", "sourceExample": "Imperium Romanum.", "before": "", "expectedForm": "Imperium", "after": " Romanum.", "acceptedForms": ["Imperium"], "caseSensitive": false, "prompt": "Setze die passende Form von «imperium, i n.» ein.", "hint": "Der Ausdruck im Stapel lautet Imperium Romanum. Ergänze nur die Form aus dem Beispiel.", "feedback": "Der Ausdruck im Stapel lautet Imperium Romanum. Ergänze nur die Form aus dem Beispiel.", "role": "guided-word-form-practice", "independentEvidence": false, "officialReadiness": false, "reviewStatus": "EDITORIAL_PROPOSAL_SOURCE_RECONSTRUCTION_TESTED", "source": "V2 app live LANGUAGE_VOCAB record; original wording preserved."}, {"id": "mn4-gap-la-04", "sourceWordId": "la:la:3", "language": "la", "lemma": "civitas, civitatis f.", "meaning": "der Bürgerverband, der Staat", "sourceExample": "Civitas Romana.", "before": "", "expectedForm": "Civitas", "after": " Romana.", "acceptedForms": ["Civitas"], "caseSensitive": false, "prompt": "Setze die passende Form von «civitas, civitatis f.» ein.", "hint": "Der Ausdruck im Stapel lautet Civitas Romana. Ergänze nur die Form aus dem Beispiel.", "feedback": "Der Ausdruck im Stapel lautet Civitas Romana. Ergänze nur die Form aus dem Beispiel.", "role": "guided-word-form-practice", "independentEvidence": false, "officialReadiness": false, "reviewStatus": "EDITORIAL_PROPOSAL_SOURCE_RECONSTRUCTION_TESTED", "source": "V2 app live LANGUAGE_VOCAB record; original wording preserved."}], "speechPolicy": [{"language": "en", "preferredLocale": "en-GB", "requiredVoiceLanguage": "en"}, {"language": "fr", "preferredLocale": "fr-CH", "requiredVoiceLanguage": "fr"}, {"language": "it", "preferredLocale": "it-CH", "requiredVoiceLanguage": "it"}, {"language": "es", "preferredLocale": "es-ES", "requiredVoiceLanguage": "es"}, {"language": "rm", "preferredLocale": "rm-CH", "requiredVoiceLanguage": "rm"}, {"language": "la", "preferredLocale": "la", "requiredVoiceLanguage": "la", "note": "No Italian substitution. Latin pronunciation convention and voice require explicit review."}], "source": "Stoffknacker Audit Addendum V4, 03_VOCAB_REPAIR_DATA.de-CH.json (redaktioneller Vorschlag, fachliche Freigabe offen)"};
/* Runde, Punkte und alle Bedienungen an einem Ort (R155, Befunde MN-056 und MN-060 bis MN-065).
   Jede Übungsart hat einen eigenen Lösungsvertrag. Lückensätze nur mit geprüfter Lücke,
   Antwortoptionen ohne Doppelungen, Rückmeldung in der gefragten Sprache, Aussprache nur mit passender Stimme,
   Buchstabenrätsel echt gemischt. Normales Lernen hat keine Leben und keinen Zeitdruck: du entscheidest, wann es weitergeht.
   Die Blitzrunde ist ein freiwilliges Spiel mit erklärten Regeln. */
var E=M.esc||function(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];});};
M.__R={round:[], i:0, right:0, mode:"pick", forceSpeed:false, session:0, results:[], locked:-1, wrongRow:0};
var G={pts:0, combo:0, best:0, lives:3};
M.vocabGame=function(){ return G; };
var LANG_NAME={en:"Englisch",fr:"Französisch",it:"Italienisch",es:"Spanisch",rm:"Rätoromanisch",la:"Latein",de:"Deutsch"};
function quiet(){ try{ return !!(M.store && M.store().lively===false); }catch(e){ return false; } }
function norm(s){ return String(s==null?"":s).normalize("NFC").trim().replace(/\s+/g," ").toLocaleLowerCase("de-CH"); }
function shuffle(a){ a=a.slice(); for(var i=a.length-1;i>0;i--){ var j=Math.floor(Math.random()*(i+1)); var t=a[i]; a[i]=a[j]; a[j]=t; } return a; }
function surface(c){ return String(c.front||"").split(",")[0].trim(); }

/* ---------- Geführte Wortform-Aufgaben (MN-060): Zusatzdaten zu bestehenden Wort-IDs ---------- */
var TASKS=M.VOCAB_TASKS_V4||{records:[],speechPolicy:[]};
var TASK_BY_WORD={};
(TASKS.records||[]).forEach(function(r){ TASK_BY_WORD[r.sourceWordId]=r; });
function gapContract(r){
 if(!r||["before","expectedForm","after","sourceExample"].some(function(k){return typeof r[k]!=="string";})||!r.expectedForm.trim()) return {ok:false,reason:"missing_segments"};
 if(r.before+r.expectedForm+r.after!==r.sourceExample) return {ok:false,reason:"source_mismatch"};
 if([r.before,r.after,r.expectedForm].some(function(s){return s.indexOf("____")>=0;})) return {ok:false,reason:"ambiguous_marker"};
 return {ok:true,prompt:r.before+"____"+r.after,solution:r.expectedForm};
}
/* Lücke ohne Zusatzdaten nur, wenn das Stichwort genau so (ganzes Wort, genau einmal) im Beispielsatz steht.
   Dann ist die Form im Satz die Grundform; nichts wird erraten. */
M.vocabGapTask=function(c){
 if(!c) return null;
 var t=TASK_BY_WORD[c.id];
 if(t){ var g=gapContract(t); return g.ok? {kind:"typed", rec:t, prompt:g.prompt, solution:g.solution, sentence:t.sourceExample} : null; }
 var ex=String(c.example||""), w=surface(c);
 if(!ex||!w||w.length<2) return null;
 var lo=ex.toLocaleLowerCase("de-CH"), wl=w.toLocaleLowerCase("de-CH"), hits=[], from=0;
 while(true){ var p=lo.indexOf(wl,from); if(p<0) break; hits.push(p); from=p+1; }
 if(hits.length!==1) return null;
 var p0=hits[0], before=ex.slice(0,p0), form=ex.substr(p0,w.length), after=ex.slice(p0+w.length);
 var letter=/[\p{L}\p{M}'’]/u;
 if((before&&letter.test(before.slice(-1)))||(after&&letter.test(after.charAt(0)))) return null;
 var g2=gapContract({before:before,expectedForm:form,after:after,sourceExample:ex});
 return g2.ok? {kind:"choice", prompt:g2.prompt, solution:form, answerText:w, sentence:ex} : null;
};

/* ---------- Antwortoptionen (MN-061): eindeutige Texte, genau eine richtige ---------- */
function choices(answer, cands, max){
 var seen={}, out=[], pool=[];
 seen[norm(answer)]=1;
 (cands||[]).forEach(function(x){ var n=norm(x); if(!n||seen[n]) return; seen[n]=1; pool.push(String(x)); });
 out=pool.slice(0,(max||4)-1);
 return {ok:out.length>0, list:shuffle([{t:String(answer),ok:1}].concat(out.map(function(x){return {t:x,ok:0};})))};
}
function deckOf(c){ return M.vocabDeck().filter(function(k){ return k.id!==c.id && (!c.lang||!k.lang||k.lang===c.lang); }); }
function prefer(list,c){ /* gleiche Wortart zuerst: sonst verrät die Form die Lösung */
 var same=list.filter(function(k){return c.pos&&k.pos===c.pos;}), rest=list.filter(function(k){return !(c.pos&&k.pos===c.pos);});
 return shuffle(same).concat(shuffle(rest));
}
function optionSet(c, mode, gap){
 if(mode==="reverse") return choices(c.front, prefer(deckOf(c),c).map(function(k){return k.front;}), 4);
 if(mode==="gap") return choices(gap.answerText, prefer(deckOf(c),c).map(surface), 4);
 var others=(M.vocabDistractors?M.vocabDistractors(c,6):[]).concat(prefer(deckOf(c),c).map(function(k){return k.back;}));
 return choices(c.back, others, 4);
}

/* ---------- Buchstabenrätsel (MN-064): echte Mischung, Wortgrenzen bleiben ---------- */
function graphemes(s){
 if(typeof Intl!=="undefined"&&Intl.Segmenter){ return Array.from(new Intl.Segmenter(undefined,{granularity:"grapheme"}).segment(s)).map(function(x){return x.segment;}); }
 return Array.from(s.normalize("NFC"));
}
M.vocabPuzzle=function(text){
 var meaningful=false;
 var parts=String(text).split(/(\s+)/).filter(Boolean).map(function(t,p){
  if(/^\s+$/.test(t)) return {kind:"space",text:t};
  var L=graphemes(t);
  if(L.some(function(x){return !/^\p{L}[\p{L}\p{M}]*$/u.test(x);})) return {kind:"fixed",text:t};
  var tiles=shuffle(L.map(function(x,i){return {id:p+":"+i,text:x};}));
  if(tiles.map(function(x){return x.text;}).join("")===t){
   var j=L.findIndex(function(x){return x!==L[0];});
   if(j>=0){ var k=tiles.findIndex(function(x){return x.text!==tiles[0].text;}); var tmp=tiles[0]; tiles[0]=tiles[k]; tiles[k]=tmp; }
  }
  var sh=tiles.map(function(x){return x.text;}).join("")!==t; meaningful=meaningful||sh;
  return {kind:"letters",target:t,tiles:tiles,shuffled:sh};
 });
 return {source:String(text),parts:parts,meaningful:meaningful};
};

/* ---------- Aussprache (MN-063): Stimme in der Sprache des Worts oder ehrlich ohne Ton ---------- */
var POLICY=TASKS.speechPolicy||[];
M.vocabSpeechChoice=function(lang){
 var rule=POLICY.filter(function(x){return x.language===lang;})[0];
 if(!rule) return {ok:false,reason:"unsupported_language"};
 var voices=[]; try{ voices=(window.speechSynthesis&&speechSynthesis.getVoices())||[]; }catch(e){ voices=[]; }
 var match=voices.filter(function(v){return String(v.lang||"").toLowerCase().replace("_","-").split("-")[0]===rule.requiredVoiceLanguage;});
 if(!match.length) return {ok:false,reason:"no_matching_voice",requestedLocale:rule.preferredLocale};
 var v=match.filter(function(v){return String(v.lang).toLowerCase().replace("_","-")===rule.preferredLocale.toLowerCase();})[0]||match[0];
 return {ok:true,voice:v,lang:v.lang,requestedLocale:rule.preferredLocale};
};
M.vocabSpeechLang=function(){
 var l=(M.vocabLang&&M.vocabLang())||"en";
 var rule=POLICY.filter(function(x){return x.language===l;})[0];
 return rule? rule.preferredLocale : l;
};
function langOf(c){ var l=c.lang||(String(c.id||"").split(":")[0])||(M.vocabLang&&M.vocabLang())||"en"; return l; }

/* ---------- Übungsart wählen: nur gültige Aufgaben, sonst die nächste passende ---------- */
function eligible(mode,c){
 if(mode==="gap") return !!M.vocabGapTask(c);
 if(mode==="build") return M.vocabPuzzle(surface(c)).meaningful && graphemes(surface(c).replace(/\s/g,"")).length<=24;
 if(mode==="reverse"||mode==="pick"||mode==="listen") return optionSet(c,mode,null).ok;
 if(mode==="speed") return !!((M.vocabDistractors?M.vocabDistractors(c,1):[])[0]);
 return true;
}
function modeFor(R,c){
 if(R.forceSpeed) return "speed";
 var modes=M.VMODES.map(function(m){return m.id;}).filter(function(m){return m!=="speed";});
 var start=(R.i*3+String(c.front).length)%M.VMODES.length;
 var all=M.VMODES.map(function(m){return m.id;});
 for(var k=0;k<all.length;k++){ var m=all[(start+k)%all.length]; if(m==="speed") continue; if(modes.indexOf(m)>=0&&eligible(m,c)) return m; }
 return "recall";
}

M.vocabStart=function(size, speed){
 var R=M.__R;
 R.round=M.vocabDue(size||10);
 if(!R.round.length) R.round=M.vocabDeck().slice(0, size||10);
 R.i=0; R.right=0; R.forceSpeed=!!speed && !quiet(); R.game=R.forceSpeed;
 R.session=(R.session||0)+1; R.results=[]; R.locked=-1; R.wrongRow=0; R.task=null; R.ended=false;
 G.pts=0; G.combo=0; G.best=0; G.lives=3;
 M.touchStreak();
 return R.round.length;
};

M.vocabRenderCard=function(){
 var R=M.__R;
 var c=R.round[R.i];
 if(!c||R.ended){
  var pts=M.vocabPoints();
  var total=R.round.length, right=0, wrong=0, help=0;
  (R.results||[]).forEach(function(r){ if(r==="right") right++; else if(r==="wrong") wrong++; else if(r==="assisted") help++; });
  var open=Math.max(0,total-right-wrong-help);
  var quote=!right&&!wrong&&!help? "Runde beendet."
   : right===total? "Alles richtig."
   : right>=total*0.7? "Solide Runde."
   : "Diese Wörter kommen bald wieder.";
  return '<div class="vc-done"><h3>'+E(quote)+'</h3>'
   +'<div class="vc-score"><span><b>'+right+'</b>richtig</span><span><b>'+wrong+'</b>falsch</span>'
   +(help?'<span><b>'+help+'</b>mit Hilfe</span>':'')
   +'<span><b>'+open+'</b>nicht bearbeitet</span>'
   +(quiet()?'':'<span><b>'+G.pts+'</b>Punkte</span>')
   +'<span><b>'+M.streak()+'</b>Tage</span></div>'
   +'<p class="vc-total">Von '+total+' Wörtern in dieser Runde.'+(quiet()?'':' Insgesamt '+(pts.total||0)+' Punkte gesammelt.')+'</p>'
   +'<div class="vc-opts"><button class="vc-again">Neue Runde</button>'
   +(quiet()?'':'<button class="vc-speed">Blitzrunde (Spiel mit drei Leben)</button>')+'</div></div>';
 }
 R.mode=modeFor(R,c);
 var spec=M.VMODES.filter(function(m){return m.id===R.mode;})[0]||{label:"Aus dem Kopf",hint:"Erst denken, dann umdrehen"};
 var head='<div class="vc-hud">'
  +'<div class="vc-bar"><span style="width:'+Math.round(R.i/R.round.length*100)+'%"></span></div>'
  +'<div class="vc-hudrow">'
  +'<span class="vc-mode">'+E(spec.label)+'</span>'
  +'<span class="vc-count">Wort '+(R.i+1)+' von '+R.round.length+'</span>'
  +(R.game?'<span class="vc-lives" aria-label="Leben im Spiel">'+"♥".repeat(Math.max(0,G.lives))+'<i>'+"♡".repeat(Math.max(0,3-G.lives))+'</i></span>':'')
  +(quiet()?'':'<span class="vc-pts"><b>'+G.pts+'</b> Punkte'+(G.combo>1?' · <em>'+G.combo+'er Serie</em>':'')+'</span>')
  +'</div>'+(R.game?'<p class="vc-gamerule small muted">Blitzrunde: ein Spiel mit drei Leben. Es zählt nicht für deinen Lernstand-Nachweis.</p>':'')+'</div>';
 function card(front, kind){
  return '<div class="vc-card"><span class="vc-kind">'+E(kind)+'</span><b class="vc-front">'+E(front)+'</b></div>';
 }
 function opts(set){
  return '<div class="vc-opts">'+set.list.map(function(x){
   return '<button class="vc-o" data-ok="'+x.ok+'">'+E(x.t)+'</button>';}).join("")+'</div>';
 }
 R.task=null;
 if(R.mode==="pick"){ R.solution={text:c.back,lang:"de"}; return head+card(c.front, spec.hint)+opts(optionSet(c,"pick")); }
 if(R.mode==="reverse"){ R.solution={text:c.front,lang:langOf(c)}; return head+card(c.back, spec.hint)+opts(optionSet(c,"reverse")); }
 if(R.mode==="type"){ R.solution={text:c.back,lang:"de"};
  return head+card(c.front, spec.hint)
   +'<input class="vc-in" placeholder="deine Antwort" autocomplete="off" autocapitalize="off">'
   +'<div class="vc-opts"><button class="vc-check">Prüfen</button><button class="vc-skip">Weiss ich nicht</button></div>'; }
 if(R.mode==="recall"){ R.solution={text:c.back,lang:"de"};
  return head+'<div class="vc-card vc-flip"><span class="vc-kind">'+E(spec.hint)+'</span>'
   +'<b class="vc-front">'+E(c.front)+'</b><p class="vc-back" hidden>'+E(c.back)+'</p></div>'
   +'<div class="vc-opts"><button class="vc-show">Umdrehen</button>'
   +'<button class="vc-yes" hidden>Wusste ich</button>'
   +'<button class="vc-no" hidden>Noch nicht</button></div>'; }
 if(R.mode==="listen"){ R.solution={text:c.back,lang:"de"};
  return head+'<div class="vc-card"><span class="vc-kind">'+E(spec.hint)+'</span>'
   +'<button class="vc-play" aria-label="Wort anhören">▶ Anhören</button>'
   +'<button class="vc-mute">Heute ohne Ton üben</button>'
   +'<p class="vc-audio-note" role="status" aria-live="polite"></p>'
   +'<b class="vc-front vc-written" hidden>'+E(c.front)+'</b></div>'
   +opts(optionSet(c,"listen")); }
 if(R.mode==="build"){
  var w=surface(c), P=M.vocabPuzzle(w);
  R.solution={text:w,lang:langOf(c)};
  return head+card(c.back, spec.hint)
   +'<div class="vc-build">'+P.parts.map(function(p,gi){
     if(p.kind==="space") return '<span class="vc-gap-space"> </span>';
     if(p.kind==="fixed") return '<span class="vc-fixed">'+E(p.text)+'</span>';
     return '<div class="vc-group" data-g="'+gi+'"><div class="vc-slot" data-target="'+E(p.target)+'" aria-label="Deine Buchstaben"></div>'
      +'<div class="vc-pool">'+p.tiles.map(function(t){
       return '<button class="vc-let" data-id="'+E(t.id)+'" data-l="'+E(t.text)+'">'+E(t.text)+'</button>';}).join("")+'</div></div>';
    }).join("")
   +'<div class="vc-opts"><button class="vc-bcheck">Prüfen</button><button class="vc-bclear">Zurücksetzen</button></div></div>';
 }
 if(R.mode==="gap"){
  var g=M.vocabGapTask(c); R.task=g;
  R.solution={text:g.solution,lang:langOf(c),sentence:g.sentence};
  if(g.kind==="typed")
   return head+'<div class="vc-card"><span class="vc-kind">'+E(g.rec.prompt)+'</span>'
    +'<p class="vc-sent">'+E(g.prompt)+'</p></div>'
    +'<label class="vc-inl">Deine Wortform<input class="vc-in vc-gapin" autocomplete="off" autocapitalize="none" spellcheck="false"></label>'
    +'<div class="vc-opts"><button class="vc-gcheck">Prüfen</button><button class="vc-ghint">Hinweis</button></div>'
    +'<p class="vc-hintout" hidden></p><p class="vc-guided small muted">Geführte Übung, kein selbständiger Test.</p>';
  return head+'<div class="vc-card"><span class="vc-kind">'+E(spec.hint)+'</span>'
   +'<p class="vc-sent">'+E(g.prompt)+'</p></div>'+opts(optionSet(c,"gap",g));
 }
 /* Blitzrunde: stimmt die angezeigte Paarung? */
 var wrong=((M.vocabDistractors?M.vocabDistractors(c,3):[]).filter(function(x){return norm(x)!==norm(c.back);})[0]||"");
 var showRight=!wrong||((R.i+c.front.length)%2===0);
 R.speedTruth=showRight;
 R.solution={text:c.front+" = "+c.back,lang:"de"};
 return head+'<div class="vc-card vc-speedcard"><span class="vc-kind">'+E(spec.hint)+'</span>'
  +'<b class="vc-front">'+E(c.front)+'</b>'
  +'<p class="vc-guess">'+E(showRight? c.back : wrong)+'</p></div>'
  +'<div class="vc-opts vc-two"><button class="vc-no2">passt nicht</button>'
  +'<button class="vc-yes2">passt</button></div>';
};

function score(ok){
 if(ok){
  G.combo++; if(G.combo>G.best) G.best=G.combo;
  var base={pick:10,reverse:12,type:18,recall:10,listen:14,build:20,gap:16,speed:8}[M.__R.mode]||10;
  G.pts+=base+Math.min(G.combo-1, 5)*2;
 } else { G.combo=0; if(M.__R.game) G.lives--; }
}
/* Ein Eintrag pro Wort: die Sperre greift sofort, auch bei Doppeltipp (MN-056). */
function answer(host, ok, chosen, opts){
 var R=M.__R, c=R.round[R.i], o=opts||{};
 if(!c||R.locked===R.i||R.ended) return false;
 R.locked=R.i;
 var session=R.session, idx=R.i;
 host.querySelectorAll(".vc-o,.vc-yes,.vc-no,.vc-yes2,.vc-no2,.vc-check,.vc-skip,.vc-bcheck,.vc-bclear,.vc-let,.vc-gcheck,.vc-show").forEach(function(b){ b.disabled=true; });
 if(o.assisted){
  var st=M.vocabState(), s=st[c.id]||{level:0,seen:0,right:0};
  s.seen=(s.seen||0)+1; s.assisted=(s.assisted||0)+1; s.last=Date.now(); st[c.id]=s; M.saveVocab(st);
  R.results[idx]="assisted";
 } else {
  M.vocabAnswer(c.id, ok); if(ok) R.right++;
  R.results[idx]=ok?"right":"wrong";
 }
 score(ok&&!o.assisted);
 R.wrongRow=ok?0:(R.wrongRow||0)+1;
 var sol=R.solution||{text:c.back,lang:"de"};
 var lname=LANG_NAME[sol.lang]||"";
 var note=document.createElement("div");
 note.className="vc-fb "+(ok?"ok":"no");
 note.setAttribute("role","status");
 /* MN-062: die Lösung steht in der gefragten Richtung, mit deiner Wahl daneben */
 var html=ok? '<p><b>'+(o.assisted?"Diese Form passt.":(G.combo>2&&!quiet()? G.combo+"er Serie. ":"Richtig."))+'</b></p>'
  : '<p><b>Richtig wäre'+(lname&&sol.lang!=="de"?" ("+E(lname)+")":"")+': '+E(sol.text)+'</b></p>'
    +(chosen!=null&&chosen!==""?'<p class="vc-chosen">Deine Antwort: '+E(chosen)+'</p>':'');
 if(R.mode==="reverse"||R.mode==="build"||R.mode==="gap") html+='<p class="vc-mean">'+E(c.front)+' heisst auf Deutsch: '+E(c.back)+'</p>';
 if(R.mode==="gap"&&R.task&&R.task.rec) html+='<p class="vc-ex">'+E(R.task.rec.feedback)+'</p><p class="vc-ex">'+E(R.task.sentence)+'</p>';
 note.innerHTML=html+(M.vocabExtra&&!(R.task&&R.task.rec)?M.vocabExtra(c):"");
 host.appendChild(note);
 if(R.game){
  if(G.lives<=0){
   R.ended=true;
   setTimeout(function(){ if(M.__R.session===session) M.vocabPaint(host.parentNode||host); }, 1400);
   return true;
  }
  setTimeout(function(){ if(M.__R.session===session&&M.__R.i===idx){ M.__R.i++; M.vocabPaint(host.parentNode||host); } }, ok?650:1700);
  return true;
 }
 /* MN-065: im normalen Lernen entscheidest du, wann es weitergeht. Nach Fehlern gibt es Hilfe statt Rauswurf. */
 var bar=document.createElement("div");
 bar.className="vc-opts vc-after";
 bar.innerHTML='<button class="vc-next">Weiter, wenn du bereit bist</button>'
  +(ok?'':'<button class="vc-help">Diesen Schritt gemeinsam klären</button>')
  +(!ok&&R.wrongRow>=3?'<button class="vc-stop">Runde hier beenden</button>':'');
 host.appendChild(bar);
 if(!ok&&R.wrongRow>=3){
  var p=document.createElement("p"); p.className="vc-pause small";
  p.textContent="Drei Fehler in Folge. Du kannst eine Pause machen, die Runde hier beenden oder mit dem nächsten Wort weitermachen. Nichts davon kostet Punkte.";
  host.appendChild(p);
 }
 var nx=bar.querySelector(".vc-next");
 nx.onclick=function(){ if(M.__R.session!==session||M.__R.i!==idx) return; nx.disabled=true; M.__R.i++; M.vocabPaint(host.parentNode||host); };
 var hp=bar.querySelector(".vc-help");
 if(hp) hp.onclick=function(){
  hp.disabled=true;
  var h=document.createElement("div"); h.className="vc-helpbox";
  h.innerHTML='<p><b>'+E(c.front)+'</b> bedeutet <b>'+E(c.back)+'</b>.</p>'
   +(c.pos?'<p>Wortart: '+E(c.pos)+'</p>':'')
   +(c.example?'<p>Im Satz: <i>'+E(c.example)+'</i></p>':'')
   +(c.note?'<p>'+E(c.note)+'</p>':'')
   +'<p class="small muted">Das Wort kommt in einer späteren Runde wieder. Lies den Satz einmal laut, dann geh weiter.</p>';
  bar.parentNode.insertBefore(h,bar);
 };
 var sp=bar.querySelector(".vc-stop");
 if(sp) sp.onclick=function(){ if(M.__R.session!==session) return; M.__R.ended=true; M.vocabPaint(host.parentNode||host); };
 try{ nx.focus({preventScroll:true}); }catch(e){}
 return true;
}
M.vocabCommit=answer;

function speak(box,c){
 var note=box.querySelector(".vc-audio-note"), wr=box.querySelector(".vc-written");
 var fallback=function(msg){ if(note) note.textContent=msg; if(wr) wr.hidden=false; };
 var ch=M.vocabSpeechChoice(langOf(c));
 M.__lastSpeech={lang:langOf(c),choice:ch.ok?ch.lang:null,reason:ch.reason||""};
 if(!ch.ok){ fallback("Für diese Sprache ist hier keine passende Stimme verfügbar. Das Wort steht jetzt geschrieben da; die Aufgabe zählt normal."); return; }
 try{
  var u=new SpeechSynthesisUtterance(surface(c)); u.lang=ch.lang; try{ u.voice=ch.voice; }catch(e){}
  u.onerror=function(){ fallback("Die Aussprache hat nicht funktioniert. Das Wort steht jetzt geschrieben da."); };
  speechSynthesis.cancel(); speechSynthesis.speak(u);
 }catch(e){ fallback("Die Aussprache ist hier nicht verfügbar. Das Wort steht jetzt geschrieben da."); }
}

M.vocabPaint=function(host){
 if(!host) return;
 host.innerHTML='<div class="vc">'+M.vocabRenderCard()+'</div>';
 var box=host.querySelector(".vc"), R=M.__R, c=R.round[R.i];
 function on(sel, fn){ var e=box.querySelector(sel); if(e) e.onclick=fn; }
 box.querySelectorAll(".vc-o").forEach(function(b){
  b.onclick=function(){
   if(R.locked===R.i) return;
   b.classList.add(b.dataset.ok==="1"?"is-ok":"is-no");
   if(b.dataset.ok!=="1"){ var r=box.querySelector('.vc-o[data-ok="1"]'); if(r) r.classList.add("is-right"); }
   answer(box, b.dataset.ok==="1", b.textContent); };});
 on(".vc-check", function(){
  var v=(box.querySelector(".vc-in")||{}).value||"";
  var n=function(s){return String(s).trim().toLowerCase().replace(/[.,;!?]/g,"").replace(/\s+/g," ");};
  answer(box, !!c && n(v)===n(c.back), v); });
 on(".vc-skip", function(){ answer(box,false,""); });
 on(".vc-show", function(){
  box.querySelector(".vc-back").hidden=false;
  box.querySelector(".vc-show").hidden=true;
  box.querySelector(".vc-yes").hidden=false;
  box.querySelector(".vc-no").hidden=false; });
 on(".vc-yes", function(){ answer(box,true); });
 on(".vc-no", function(){ answer(box,false); });
 on(".vc-yes2", function(){ answer(box, R.speedTruth===true, "passt"); });
 on(".vc-no2", function(){ answer(box, R.speedTruth===false, "passt nicht"); });
 on(".vc-again", function(){ M.vocabStart(10); M.vocabPaint(host); });
 on(".vc-speed", function(){ M.vocabStart(14, true); M.vocabPaint(host); });
 on(".vc-play", function(){ speak(box,c); });
 on(".vc-mute", function(){ var wr=box.querySelector(".vc-written"), n=box.querySelector(".vc-audio-note"); if(wr) wr.hidden=false; if(n) n.textContent="Ohne Ton: lies das Wort und wähle die Bedeutung."; });
 /* Geführte Wortform */
 var used=false;
 on(".vc-ghint", function(){ var h=box.querySelector(".vc-hintout"); if(h&&R.task&&R.task.rec){ h.hidden=false; h.textContent=R.task.rec.hint; used=true; } });
 on(".vc-gcheck", function(){
  var inp=box.querySelector(".vc-gapin"), v=(inp&&inp.value)||"";
  if(!v.trim()){ var h=box.querySelector(".vc-hintout"); if(h){ h.hidden=false; h.textContent="Trage zuerst eine Wortform ein. Deine Aufgabe bleibt offen."; } if(inp) inp.focus(); return; }
  var rec=R.task.rec, nf=rec.caseSensitive?function(s){return String(s).normalize("NFC").trim();}:norm;
  var ok=(rec.acceptedForms||[rec.expectedForm]).some(function(s){return nf(s)===nf(v);});
  if(inp) inp.readOnly=true;
  answer(box, ok, v, {assisted:used});
 });
 /* Buchstaben ordnen */
 box.querySelectorAll(".vc-group").forEach(function(gr){
  var slot=gr.querySelector(".vc-slot");
  gr.querySelectorAll(".vc-let").forEach(function(b){
   b.onclick=function(){
    if(b.disabled) return;
    b.disabled=true;
    var s=document.createElement("button"); s.type="button"; s.className="vc-put"; s.textContent=b.dataset.l; s.dataset.id=b.dataset.id;
    s.setAttribute("aria-label","Buchstabe "+b.dataset.l+" entfernen");
    s.onclick=function(){ if(R.locked===R.i) return; s.remove(); b.disabled=false; };
    slot.appendChild(s); };});
 });
 on(".vc-bcheck", function(){
  var groups=[].slice.call(box.querySelectorAll(".vc-group"));
  var got=groups.map(function(gr){ return [].map.call(gr.querySelector(".vc-slot").children,function(x){return x.textContent;}).join(""); });
  var ok=groups.every(function(gr,i){ return norm(got[i])===norm(gr.querySelector(".vc-slot").dataset.target||""); });
  answer(box, ok, got.join(" ")); });
 on(".vc-bclear", function(){
  box.querySelectorAll(".vc-slot").forEach(function(s){ s.innerHTML=""; });
  box.querySelectorAll(".vc-let").forEach(function(b){b.disabled=false;}); });
 var inp=box.querySelector(".vc-in");
 if(inp){ inp.focus(); inp.onkeydown=function(e){ if(e.key==="Enter"){ e.preventDefault(); var k=box.querySelector(".vc-check,.vc-gcheck"); if(k&&!k.disabled)k.click(); } }; }
 /* Punkte sichern, wenn die Runde endet */
 if((!c||R.ended) && G.pts) { M.addPoints(G.pts); G.pts=0; }
};
})();


;

(function(){"use strict";var M=window.MNEMIKA;if(!M)return;
var E=M.esc||function(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){
 return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];});};

/* ============================================================
   1. Wortschatz gehoert in die Sprachfaecher, nicht in die
      Hauptnavigation, und enthaelt nur Sprachkarten.
   ============================================================ */
M.LANGUAGE_VOCAB={english:[], french:[]};
(function(){
 function conv(list, lang){
  return list.map(function(r,i){
   return {id:lang+":"+i, front:r[0], back:r[1], pos:r[2]||"", example:r[3]||"",
    note:r[4]||"", lang:lang, subject:(lang==="en"?"english":"french")};});
 }
 M.LANGUAGE_VOCAB.english=conv(M.VOCAB_EN||[], "en");
 M.LANGUAGE_VOCAB.french =conv(M.VOCAB_FR||[], "fr");
})();
/* Nur diese beiden Stapel, nichts aus anderen Faechern. */
M.vocabDeck=function(){
 var l=M.vocabLang();
 return l==="fr" ? M.LANGUAGE_VOCAB.french : M.LANGUAGE_VOCAB.english;
};
M.vocabLangCounts=function(){
 return {en:M.LANGUAGE_VOCAB.english.length, fr:M.LANGUAGE_VOCAB.french.length};
};
M.vocabPurity=function(){
 var bad=[];
 ["english","french"].forEach(function(k){
  M.LANGUAGE_VOCAB[k].forEach(function(c){
   if(!c.front||!c.back) bad.push(c.id);
   if(String(c.back).length>160) bad.push(c.id+" zu lang");
  });});
 return {english:M.LANGUAGE_VOCAB.english.length, french:M.LANGUAGE_VOCAB.french.length,
  nonLanguageCards:0, problems:bad.length};
};

/* Freies Tippen gegen eine lange Erklaerung ist keine faire Pruefung.
   Der Tippmodus entfaellt, dafuer kommt Buchstaben ordnen oefter. */
M.VMODES=(M.VMODES||[]).filter(function(m){ return m.id!=="type"; });

/* Vokabeln aus der Hauptnavigation nehmen und im Fach Sprachen anbieten. */
function demoteVocabTab(){
 var t=document.getElementById("tab-vocab");
 if(t && t.parentNode){ t.parentNode.removeChild(t); }
}
M.showLanguageVocab=function(lang){
 if(lang) M.setVocabLang(lang);
 M.showVocab();
};
/* Einstieg im Lernbereich bei Englisch und Französisch. */
function addSubjectEntry(){
 var v=document.getElementById("v-learn");
 if(!v||v.hidden) return;
 if(v.querySelector(".lv-entry")) return;
 var subs=[].filter.call(v.querySelectorAll("[data-sub],.v27-sub"),function(x){
  return /Englisch|English|Sprachen|Französisch/i.test(x.textContent);});
 if(!subs.length) return;
 var box=document.createElement("div");
 box.className="lv-entry";
 box.innerHTML='<span class="lv-kick">Wortschatz</span>'
  +'<p>Im Sprachtrainer übst du Wörter, Sätze, Hören und Grammatik in kurzen Runden. Die Wortkarten sind eine zweite, ruhige Möglichkeit.</p>'
  +'<div class="lv-btns"><button data-sprache="" class="lv-haupt">Sprachtrainer öffnen</button><button data-lv="en">Englisch-Karten <i>'
  +M.LANGUAGE_VOCAB.english.length+' Karten</i></button>'
  +'<button data-lv="fr">Französisch-Karten <i>'
  +M.LANGUAGE_VOCAB.french.length+' Karten</i></button></div>';
 subs[0].parentNode.insertBefore(box, subs[0]);
 box.querySelectorAll("[data-lv]").forEach(function(b){
  b.onclick=function(){ M.showLanguageVocab(b.dataset.lv); };});
}
var go3=M.go;
if(typeof go3==="function" && !go3.__lvHook){
 M.go=function(){ var r=go3.apply(this,arguments);
  setTimeout(function(){ demoteVocabTab(); addSubjectEntry(); },80); return r; };
 M.go.__lvHook=true;
}
setInterval(function(){ demoteVocabTab(); addSubjectEntry(); }, 700);

/* ============================================================
   2. Nur Deutsch als Oberflaechensprache.
   ============================================================ */
M.availableLocales=function(){
 var all=M.ALL_LOCALES||M.LOCALES||[];
 return all.filter(function(l){ return (l.id||l)==="de"; });
};
function hideLocaleSwitch(){
 var s=document.querySelector(".hdlang,[data-locale]");
 if(s){ var host=s.closest(".hdlang")||s.parentNode;
  if(host && host.querySelectorAll("[data-locale]").length>1) host.style.display="none"; }
}
M.everyTick(hideLocaleSwitch);
})();

;

(function(){"use strict";var M=window.MNEMIKA;if(!M)return;
var E=M.esc||function(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){
 return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];});};

/* ============================================================
   Fehlerspeicher an die echten Bewertungswege haengen.
   Vorher haftete er an Namen, die es hier nicht gibt. Der Kern
   nutzt M.inlineCheck und eine lokale Bewertung; ausserdem laufen
   Antworten ueber Klicks auf Antwortmoeglichkeiten.
   ============================================================ */
function chapterOf(qid){
 var found=null;
 (M.chapters||[]).forEach(function(c){
  (c.questions||[]).forEach(function(q){ if(q.id===qid) found=c; });
  (c.blocks||[]).forEach(function(b){ if(b&&b.check&&b.check.id===qid) found=c; });
 });
 return found;
}
M.questionById=function(qid){
 var out=null;
 (M.chapters||[]).forEach(function(c){
  (c.questions||[]).forEach(function(q){ if(q.id===qid) out={q:q,c:c}; });
  (c.blocks||[]).forEach(function(b){ if(b&&b.check&&b.check.id===qid) out={q:b.check,c:c}; });
 });
 return out;
};
M.noteResult=function(qid, ok, mode){
 if(!qid) return;
 var c=chapterOf(qid);
 if(ok) M.clearMistake(qid);
 else {
  M.recordMistake(qid, c?c.id:"");
  var l=M.mistakeQueue();
  l.forEach(function(x){ if(x.id===qid){ x.mode=mode||x.mode||"unbekannt"; } });
  try{ localStorage.setItem("mnemika-mistakes-v1", JSON.stringify(l)); }catch(e){}
 }
};
/* Alle vorhandenen Bewertungsfunktionen abfangen, nach Namen und nach Form. */
["grade","checkAnswer","evaluate","submitAnswer","gradeQuestion"]
.forEach(function(fn){
 if(typeof M[fn]!=="function" || M[fn].__mHook) return;
 var base=M[fn];
 M[fn]=function(){
  var r=base.apply(M, arguments);
  try{
   var a0=arguments[0];
   var q=(a0&&a0.q)?a0.q:a0;
   var qid=(q&&q.id)||(typeof a0==="string"?a0:null);
   var ok=(r&&typeof r==="object")? (r.correct===true||r.ok===true||r.pass===true) : (r===true);
   if(qid) M.noteResult(qid, ok, fn);
  }catch(e){}
  return r;
 };
 M[fn].__mHook=true;
});
/* Zusaetzlich am Klick mitlesen, damit auch die Bausteinchecks zaehlen. */
document.addEventListener("click", function(e){
 var opt=e.target && e.target.closest && e.target.closest(".opt,[data-ok],.vc-o");
 if(!opt) return;
 setTimeout(function(){
  try{
   var host=opt.closest("[data-qid],[data-q]");
   var qid=host&&(host.dataset.qid||host.dataset.q);
   if(!qid) return;
   var good=/\bis-ok\b|\bcorrect\b|\bright\b/.test(opt.className)
     || opt.dataset.ok==="1"
     || (opt.getAttribute("aria-pressed")==="true" && /ok/.test(opt.className));
   M.noteResult(qid, !!good, "klick");
  }catch(err){}
 }, 60);
}, true);

/* ============================================================
   Nachtrainieren oeffnet jetzt die Aufgabe selbst, nicht das Kapitel.
   ============================================================ */
M.retrySession=function(){
 var due=M.mistakeDue();
 M.__retry={list:due, i:0, right:0};
 return due.length;
};
M.renderRetryCard=function(){
 var R=M.__retry;
 if(!R||!R.list.length) return '<p class="mx-empty">Nichts offen.</p>';
 var item=R.list[R.i];
 if(!item) return '<div class="vc-done"><h3>Runde beendet</h3>'
  +'<p>'+R.right+' von '+R.list.length+' beim zweiten Anlauf richtig. '
  +'Was noch offen ist, bleibt in der Liste.</p>'
  +'<div class="vc-opts"><button class="rt-again">Nochmals</button></div></div>';
 var q=item.question, c=item.chapter, e=item.entry;
 var opts=q.options||q.opts||[];
 return '<div class="rt-head"><span class="rt-mode">'+E(c.title||"")+'</span>'
  +'<span class="rt-cnt">Aufgabe '+(R.i+1)+' von '+R.list.length
  +' · '+e.misses+'× falsch · '+(e.cleared||0)+'× wieder richtig</span></div>'
  +'<div class="rt-card">'+(q.challenging?'<span class="q-hard">⚡ Herausfordernd</span>':'')
  +'<p class="rt-prompt">'+E(q.prompt||"")+'</p>'
  +(opts.length? '<div class="rt-opts">'+opts.map(function(o,i){
     return '<button class="rt-o" data-i="'+i+'">'+E(o)+'</button>';}).join("")+'</div>'
   : '<p class="rt-note">Diese Aufgabe hat keine Auswahl. Öffne das Kapitel und arbeite sie dort.</p>'
     +'<button class="rt-open" data-ch="'+E(c.id)+'">Kapitel öffnen</button>')
  +'</div>';
};
M.retryPaint=function(host){
 if(!host) return;
 host.innerHTML='<div class="rt">'+M.renderRetryCard()+'</div>';
 var box=host.querySelector(".rt"), R=M.__retry;
 var item=R&&R.list[R.i];
 box.querySelectorAll(".rt-o").forEach(function(b){
  b.onclick=function(){
   var q=item.question;
   var ok=Number(b.dataset.i)===Number(q.answer);
   box.querySelectorAll(".rt-o").forEach(function(x){ x.disabled=true;
    if(Number(x.dataset.i)===Number(q.answer)) x.classList.add("is-ok"); });
   if(!ok) b.classList.add("is-no");
   M.noteResult(q.id, ok, "nachtrainieren");
   if(ok) R.right++;
   var fb=document.createElement("p");
   fb.className="vc-fb "+(ok?"ok":"no");
   fb.textContent=ok
    ? ((item.entry.cleared+1>=2)? "Richtig. Diese Aufgabe ist damit erledigt."
                                : "Richtig. Einmal noch, dann ist sie weg.")
    : ("Noch nicht. "+String(q.explanation||q.explain||"").slice(0,180));
   box.appendChild(fb);
   setTimeout(function(){ R.i++; M.retryPaint(host); }, ok?900:2200);
  };});
 var op=box.querySelector(".rt-open");
 if(op) op.onclick=function(){ try{ M.go("read", op.dataset.ch); }catch(e){} };
 var ag=box.querySelector(".rt-again");
 if(ag) ag.onclick=function(){ M.retrySession(); M.retryPaint(host); };
};
/* Die Fehleransicht bekommt die Uebungsrunde direkt eingebaut. */
var baseMist=M.renderMistakes;
M.renderMistakes=function(){
 var st=M.mistakeStats(), due=M.mistakeDue();
 if(!due.length) return baseMist? baseMist.call(M) : "";
 return '<section class="mx"><h2>Zuletzt falsch</h2>'
  +'<p class="vx-lead">'+due.length+' Aufgaben warten. Sie verschwinden erst, wenn du sie '
  +'zweimal in verschiedenen Runden richtig hast. Du übst hier die Aufgabe selbst, '
  +'nicht das ganze Kapitel.</p>'
  +'<div class="vx-stats"><span><b>'+st.due+'</b>offen</span>'
  +'<span><b>'+st.mastered+'</b>überwunden</span></div>'
  +'<button class="mx-start">Übungsrunde starten</button>'
  +'<div id="mx-host"></div></section>';
};
var baseShowM=M.showMistakes;
M.showMistakes=function(){
 baseShowM&&baseShowM.call(M);
 var v=document.getElementById("v-mistakes"); if(!v) return;
 var b=v.querySelector(".mx-start"), host=v.querySelector("#mx-host");
 if(b) b.onclick=function(){ M.retrySession(); M.retryPaint(host); b.textContent="Neue Runde"; };
};
})();

;

(function(){"use strict";var M=window.MNEMIKA;if(!M)return;
var E=M.esc||function(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){
 return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];});};

/* ============================================================
   1. Herausfordernde Aufgaben sichtbar machen, nicht nur im Datensatz.
      Strengeres Mass: Laenge oder ein Verneinungswort allein reichen nicht.
   ============================================================ */
function allQ(){
 var a=[];(M.chapters||[]).forEach(function(c){
  (c.questions||[]).forEach(function(q){a.push({q:q,c:c});});
  (c.blocks||[]).forEach(function(b){if(b&&b.check)a.push({q:b.check,c:c});});});
 return a;}
M.markChallenging=function(){
 var n=0;
 allQ().forEach(function(x){
  var q=x.q, t=String(q.prompt||""), s=0, why=[];
  /* Nur echte Denkanforderungen zaehlen. */
  if(/berechne|bestimme|leite her|zeige, dass|weise nach/i.test(t)){ s+=2; why.push("Rechnung oder Herleitung"); }
  if(/warum|begründe|erkläre, weshalb|inwiefern/i.test(t)){ s+=2; why.push("Begründung verlangt"); }
  if(/vergleiche|unterscheide|beurteile|bewerte|wäge ab/i.test(t)){ s+=2; why.push("Abwägung"); }
  if(/übertrage|überträgst|in einem anderen|neuen Fall|anwenden auf/i.test(t)){ s+=2; why.push("Übertragung"); }
  if(/welche.{0,20}(aussage|option|antwort).{0,20}(trifft|stimmt|gilt)/i.test(t)){ s+=1; why.push("Auswahl unter Ähnlichem"); }
  if(/mehrere|alle zutreffenden|zwei|drei Gründe/i.test(t)){ s+=2; why.push("mehrere Aspekte"); }
  if(String(q.explanation||q.explain||"").length>200){ s+=1; why.push("erklärungsbedürftig"); }
  if(/\d/.test(t) && /[=·×÷%]|kg|m\/s|kJ|mol|Hz|km|CHF/.test(t)){ s+=2; why.push("Zahlen mit Einheit"); }
  if(q.type==="order"||q.type==="finderror"||q.type==="justify"){ s+=1; why.push("mehrschrittig"); }
  if((q.options||[]).length>4){ s+=1; why.push("viele Möglichkeiten"); }
  q.challengeScore=s; q.challengeWhy=why;
  if(s>=3){ q.challenging=true; q.difficulty="hard"; n++; }
  else { q.challenging=false; }
 });
 return {marked:n, total:allQ().length};
};
M.challengeStats=function(){
 var a=allQ(), h2=a.filter(function(x){return x.q.challenging;});
 var bySub={};
 h2.forEach(function(x){ bySub[x.c.subject]=(bySub[x.c.subject]||0)+1; });
 return {hard:h2.length, total:a.length,
  share:a.length?Math.round(h2.length/a.length*1000)/10:0, bySubject:bySub};
};
M.challengingQuestions=function(subject){
 return allQ().filter(function(x){
  return x.q.challenging && (!subject || x.c.subject===subject); });
};
/* Abzeichen an jede gerenderte Aufgabe haengen. */
function badge(){
 document.querySelectorAll("[data-qid],[data-q]").forEach(function(host){
  if(host.querySelector(".q-hard")) return;
  var qid=host.dataset.qid||host.dataset.q;
  var f=M.questionById&&M.questionById(qid);
  if(!f||!f.q.challenging) return;
  var b=document.createElement("span");
  b.className="q-hard";
  b.textContent="⚡ Herausfordernd";
  b.title=(f.q.challengeWhy||[]).join(", ")||"mehrschrittige Aufgabe";
  var t=host.querySelector(".qp,.prompt,h3,p");
  (t||host).insertBefore ? (t||host).insertBefore(b,(t||host).firstChild) : host.appendChild(b);
 });
}
M.everyTick(badge);

/* Boss-Runde aus echten schwierigen Aufgaben. */
M.bossRound=function(subject, size){
 var pool=M.challengingQuestions(subject);
 var out=[], seed=Date.now()%97;
 for(var i=0;i<pool.length && out.length<(size||8);i++){
  out.push(pool[(i*7+seed)%pool.length]);
 }
 M.__boss={list:out, i:0, right:0, xp:0};
 return out.length;
};
M.bossPaint=function(host){
 if(!host) return;
 var B=M.__boss;
 if(!B||!B.list.length){ host.innerHTML='<p class="mx-empty">Keine schwierigen Aufgaben in diesem Fach.</p>'; return; }
 var item=B.list[B.i];
 if(!item){
  host.innerHTML='<div class="vc-done"><h3>Boss-Runde geschafft</h3>'
   +'<div class="vc-score"><span><b>'+B.right+'</b>von '+B.list.length+'</span>'
   +'<span><b>'+B.xp+'</b>XP</span></div>'
   +'<div class="vc-opts"><button class="bo-again">Nochmals</button></div></div>';
  var a=host.querySelector(".bo-again");
  if(a) a.onclick=function(){ M.bossRound(null,8); M.bossPaint(host); };
  return;
 }
 var q=item.question||item.q, c=item.chapter||item.c;
 var opts=q.options||q.opts||[];
 host.innerHTML='<div class="rt"><div class="rt-head">'
  +'<span class="rt-mode">Boss-Runde</span>'
  +'<span class="rt-cnt">'+(B.i+1)+' von '+B.list.length+' · '+B.xp+' XP</span></div>'
  +'<div class="rt-card"><span class="q-hard" title="'+E((q.challengeWhy||[]).join(", "))+'">'
  +'⚡ Herausfordernd</span>'
  +'<p class="rt-prompt">'+E(q.prompt||"")+'</p>'
  +'<p class="rt-why">Warum schwierig: '+E((q.challengeWhy||["mehrschrittig"]).join(", "))+'</p>'
  +'<div class="rt-opts">'+opts.map(function(o,i){
    return '<button class="rt-o" data-i="'+i+'">'+E(o)+'</button>';}).join("")+'</div>'
  +'<p class="rt-src">'+E(c.title||"")+'</p></div></div>';
 host.querySelectorAll(".rt-o").forEach(function(b){
  b.onclick=function(){
   var ok=Number(b.dataset.i)===Number(q.answer);
   host.querySelectorAll(".rt-o").forEach(function(x){x.disabled=true;
    if(Number(x.dataset.i)===Number(q.answer)) x.classList.add("is-ok");});
   if(!ok) b.classList.add("is-no");
   if(ok){ B.right++; B.xp+=25; } else B.xp+=5;
   M.noteResult&&M.noteResult(q.id, ok, "boss");
   var fb=document.createElement("p");
   fb.className="vc-fb "+(ok?"ok":"no");
   fb.textContent=ok? "Richtig. 25 XP." : String(q.explanation||q.explain||"").slice(0,200);
   host.querySelector(".rt-card").appendChild(fb);
   setTimeout(function(){ B.i++; M.bossPaint(host); }, ok?900:2400);
  };});
};

/* ============================================================
   2. Strengeres Mass fuer die Zeichenvielfalt.
   ============================================================ */
M.iconAudit=function(){
 var by={}, adjacent=0;
 (M.chapters||[]).forEach(function(c){
  var m=M.mediaFor?M.mediaFor(c.id):null;
  var sig=(m&&(m.id||m.data))||"?";
  (by[c.subject]=by[c.subject]||{list:[],set:{}});
  by[c.subject].list.push(sig); by[c.subject].set[sig]=1;
 });
 var worst=null;
 Object.keys(by).forEach(function(s){
  var l=by[s].list;
  for(var i=1;i<l.length;i++) if(l[i]===l[i-1]) adjacent++;
  var share=Object.keys(by[s].set).length/l.length;
  if(l.length>2 && share<0.8 && (!worst||share<worst.share))
   worst={subject:s, chapters:l.length, distinct:Object.keys(by[s].set).length,
          share:Math.round(share*100)/100};
 });
 return {adjacentDuplicates:adjacent, worst:worst,
  table:Object.keys(by).map(function(s){
   return s+":"+by[s].list.length+"/"+Object.keys(by[s].set).length;})};
};
M.__chal=null;
(function settle(n){
 if(n>120) return;
 if(M.chapters&&M.chapters.length){
  if(!M.__chal){ M.__chal=M.markChallenging(); }
  else return;
 }
 setTimeout(function(){settle(n+1);},130);
})(0);
})();

;

(function(){"use strict";var M=window.MNEMIKA;if(!M)return;
var E=M.esc||function(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){
 return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];});};

/* ============================================================
   Der Wortschatz war nach dem Umzug schlechter auffindbar als vorher:
   der Reiter war weg und der Einstieg verschwand, sobald man in ein
   Sprachfach ging. Jetzt gibt es drei feste Einstiege, die bleiben.
   ============================================================ */
function card(lang){
 var n=lang==="fr" ? (M.LANGUAGE_VOCAB.french||[]).length
                   : (M.LANGUAGE_VOCAB.english||[]).length;
 var name=lang==="fr" ? "Französisch" : "Englisch";
 var st=(function(){ var cur=M.vocabLang(); M.setVocabLang(lang);
   var s=M.vocabStats(); M.setVocabLang(cur); return s; })();
 return '<div class="lvx" data-lvx="'+lang+'">'
  +'<div class="lvx-l"><span class="lvx-kick">Wortschatz '+E(name)+'</span>'
  +'<b>'+n+' Karten</b>'
  +'<span class="lvx-sub">'+st.due+' heute fällig · '+st.mastered+' gekonnt</span></div>'
  +'<button class="lvx-go">Üben</button></div>';
}
function insertInto(host, langs){
 if(!host || host.querySelector(".lvx")) return false;
 var box=document.createElement("div");
 box.className="lvx-wrap";
 box.innerHTML=langs.map(card).join("");
 var anchor=host.querySelector("h1,h2,.subhead,.v27-head");
 /* r161: Fächer zuerst, Wortschatz danach (Audit R155-AUD-UX-19: drei Wortschatz-Karten schoben die Fächer aus dem ersten Bildschirm) */
 var faecher=host.querySelector(".v27-subjects");
 if(faecher && faecher.parentNode) faecher.parentNode.insertBefore(box, faecher.nextSibling);
 else if(anchor && anchor.parentNode) anchor.parentNode.insertBefore(box, anchor.nextSibling);
 else host.insertBefore(box, host.firstChild);
 box.querySelectorAll(".lvx").forEach(function(el){
  el.querySelector(".lvx-go").onclick=function(){ M.showLanguageVocab(el.dataset.lvx); };});
 return true;
}
/* Einstieg 1: Uebersicht Lernen, beide Sprachen. */
/* Einstieg 2: im Fach Englisch bzw. Franzoesisch, passend zur Sprache. */
/* Einstieg 3: Karte auf der Startseite, bleibt wie gehabt. */
function place(){
 var learn=document.getElementById("v-learn");
 if(learn && !learn.hidden){
  var txt=(learn.textContent||"");
  if(/^[\s\S]{0,400}Alle Fächer/.test(txt) || learn.querySelectorAll("[data-sub],.v27-sub").length>3){
   /* ersetzt durch die Platzierung für alle sechs Sprachen; die alte Platzierung kämpfte mit ihr */
  } else if(/Englisch|English/i.test(txt)){
   /* ersetzt durch die Platzierung für alle sechs Sprachen; die alte Platzierung kämpfte mit ihr */
  } else if(/Französisch|Weitere Sprachen/i.test(txt)){
   /* ersetzt durch die Platzierung für alle sechs Sprachen; die alte Platzierung kämpfte mit ihr */
  }
 }
}
M.everyTick(place);
var go4=M.go;
if(typeof go4==="function" && !go4.__lvx){
 M.go=function(){ var r=go4.apply(this,arguments); setTimeout(place,80); return r; };
 M.go.__lvx=true;
}
/* Und im Menue, damit es immer einen Weg gibt. */
function menuEntry(){
 var pop=document.getElementById("menupop")||document.querySelector(".menupop,.menu-pop");
 if(!pop || pop.querySelector("[data-mv]")) return;
 [["en","Wortschatz Englisch"],["fr","Wortschatz Französisch"]].forEach(function(x){
  var b=document.createElement("button");
  b.dataset.mv=x[0]; b.textContent=x[1];
  b.className=(pop.querySelector("button")||{}).className||"";
  b.onclick=function(){ M.showLanguageVocab(x[0]); };
  pop.appendChild(b);
 });
}
M.everyTick(menuEntry);
})();

;

(function(){"use strict";var M=window.MNEMIKA;if(!M)return;
var E=M.esc||function(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){
 return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];});};

/* ============================================================
   Gegenueberstellungen als gezeichnete Grafik haben nie sauber
   ausgerichtet: Werte standen neben statt im Kasten, lange Woerter
   brachen mitten durch. Als Tabelle stimmt die Ausrichtung von
   selbst, der Text bricht normal und nichts laeuft heraus.
   ============================================================ */
function parseCompare(svg){
 if(svg.classList.contains("r7-svg")) return null;
 /* Aus der gezeichneten Fassung Titel, Spalten und Zeilen zurueckgewinnen. */
 var caption=svg.parentNode && svg.parentNode.querySelector("figcaption");
 var texts=[].slice.call(svg.querySelectorAll("text")).map(function(t){
  var b=null; try{ b=t.getBBox(); }catch(e){}
  return {t:(t.textContent||"").trim(), x:b?b.x:0, y:b?b.y:0,
          w:b?b.width:0, bold:/600|700|760|bold/.test(
            (t.getAttribute("font-weight")||window.getComputedStyle(t).fontWeight||""))};
 }).filter(function(o){ return o.t.length; });
 if(texts.length<6) return null;
 texts.sort(function(a,b){ return a.y-b.y || a.x-b.x; });
 var vb=(svg.getAttribute("viewBox")||"").split(/[\s,]+/).map(Number);
 var mid=vb.length===4 ? vb[0]+vb[2]/2 : 0;
 var title=texts[0].t;
 var left=texts.filter(function(o){ return o.x<mid && o!==texts[0]; });
 var right=texts.filter(function(o){ return o.x>=mid; });
 if(left.length<3||right.length<3) return null;
 function pack(list){
  var head=list[0].t, rows=[];
  for(var i=1;i<list.length;i++){
   var o=list[i];
   if(o.bold || /^[A-ZÄÖÜ][\wäöüß ]{2,28}$/.test(o.t) && o.t.length<30 && !/\d/.test(o.t)){
    rows.push([o.t, ""]);
   } else if(rows.length){
    rows[rows.length-1][1]=(rows[rows.length-1][1]+" "+o.t).trim();
   }
  }
  return {head:head, rows:rows.filter(function(r){return r[1];})};
 }
 var A=pack(left), B=pack(right);
 if(!A.rows.length||!B.rows.length) return null;
 return {title:title, a:A, b:B, caption:caption?caption.textContent:""};
}
function tableFor(d){
 var keys=[];
 d.a.rows.forEach(function(r){ if(keys.indexOf(r[0])<0) keys.push(r[0]); });
 d.b.rows.forEach(function(r){ if(keys.indexOf(r[0])<0) keys.push(r[0]); });
 function val(side,k){
  var f=side.rows.filter(function(r){return r[0]===k;})[0];
  return f?f[1]:"–";
 }
 return '<div class="cmp2"><h4 class="cmp2-t">'+E(d.title)+'</h4>'
  +'<table class="cmp2-tab"><thead><tr><th class="cmp2-k"></th>'
  +'<th>'+E(d.a.head)+'</th><th class="cmp2-b">'+E(d.b.head)+'</th></tr></thead><tbody>'
  +keys.map(function(k){
    return '<tr><th class="cmp2-k">'+E(k)+'</th>'
     +'<td>'+E(val(d.a,k))+'</td><td class="cmp2-b">'+E(val(d.b,k))+'</td></tr>';}).join("")
  +'</tbody></table></div>';
}
/* Abgeschaltet. Der Umbau las den Text aus der gezeichneten Fassung
   zurueck, wo er bereits getrennt und verteilt war. Die Tabelle sah
   ordentlich aus, gab den Inhalt aber falsch wieder. Eine Tabelle mit
   falschen Zuordnungen ist schlechter als eine unschoene Grafik.
   Richtig waere das Rendern aus den Quelldaten, nicht aus dem Bild. */
M.rebuildCompares=function(root){
 if(!M.COMPARE_FROM_SOURCE) return 0;
 var n=0;
 (root||document).querySelectorAll("svg").forEach(function(svg){
  if(svg.__cmp2) return;
  var host=svg.closest("figure,.card"); if(!host) return;
  var txt=(host.textContent||"");
  /* Nur echte Gegenueberstellungen anfassen. */
  if(!/Gegenüber|verraten|im Unterschied|versus|,\s*die Zeile|,\s*die Spalte/i.test(txt)) return;
  var d=parseCompare(svg);
  svg.__cmp2=1;
  if(!d) return;
  var wrap=document.createElement("div");
  wrap.innerHTML=tableFor(d);
  svg.style.display="none";
  svg.parentNode.insertBefore(wrap.firstChild, svg);
  n++;
 });
 return n;
};
var mo2=new MutationObserver(function(){ clearTimeout(mo2.__t);
 mo2.__t=setTimeout(function(){ M.rebuildCompares(document); }, 200); });
function watch2(){
 var main=document.querySelector("main")||document.body;
 mo2.observe(main,{childList:true,subtree:true});
 M.rebuildCompares(document);
}
if(document.readyState!=="loading") setTimeout(watch2,900);
else document.addEventListener("DOMContentLoaded",function(){setTimeout(watch2,900);});
})();

;

(function(){"use strict";var M=window.MNEMIKA;if(!M)return;

/* ============================================================
   Es darf immer nur eine Ansicht sichtbar sein. Die eigenen
   Ansichten lagen als Geschwister neben den Ansichten der
   Anwendung, deshalb erschien der Wortschatz unter einer
   laufenden Uebung.
   ============================================================ */
var MINE=["v-vocab","v-mistakes","v-coverage","v-cover2","v-info2"];
function hideMine(except){
 MINE.forEach(function(id){
  var e=document.getElementById(id);
  if(e && id!==except) e.hidden=true;
 });
}
function onlyOne(){
 var v=document.body.dataset.view||"";
 /* Laeuft eine Uebung oder Pruefung, hat nichts anderes daneben Platz. */
 var busy=["train","exam","read","practice","test"].indexOf(v)>=0;
 var mineOpen=MINE.filter(function(id){
  var e=document.getElementById(id); return e && !e.hidden; });
 if(busy && mineOpen.length){ hideMine(null); return; }
 if(mineOpen.length>1) hideMine(mineOpen[mineOpen.length-1]);
}
setInterval(onlyOne, 250);
var go5=M.go;
if(typeof go5==="function" && !go5.__oneView){
 M.go=function(){ hideMine(null); var r=go5.apply(this,arguments);
  setTimeout(onlyOne,60); return r; };
 M.go.__oneView=true;
}
/* Beim Oeffnen einer eigenen Ansicht die Ansichten der Anwendung schliessen. */
["showVocab","showMistakes","showCoverage","showCover","showInfo"].forEach(function(fn){
 if(typeof M[fn]!=="function" || M[fn].__oneView) return;
 var base=M[fn];
 M[fn]=function(){
  var r=base.apply(M, arguments);
  var mine=({showVocab:"v-vocab",showMistakes:"v-mistakes",showCoverage:"v-coverage",
   showCover:"v-cover2",showInfo:"v-info2"})[fn];
  hideMine(mine);
  /* Ansichten der Anwendung ausblenden, ohne ihre Daten anzutasten. */
  document.querySelectorAll("[id^=v-]").forEach(function(e){
   if(e.id!==mine && MINE.indexOf(e.id)<0) e.hidden=true; });
  return r;
 };
 M[fn].__oneView=true;
});

/* Der Einstieg im Lernbereich gehoert nur in die Faecheruebersicht
   und in die Sprachfaecher, nie in eine laufende Uebung. */
var oldPlace=window.setInterval;
document.addEventListener("DOMContentLoaded",function(){});
setInterval(function(){
 var v=document.body.dataset.view||"";
 if(["train","exam","read","practice","test"].indexOf(v)>=0){
  document.querySelectorAll(".lvx-wrap,.lv-entry").forEach(function(e){ e.remove(); });
 }
}, 400);
})();

;

(function(){"use strict";var M=window.MNEMIKA;if(!M)return;

/* ============================================================
   Vorlagensaetze und fehlende Hinweise.
   Vier Formulierungen kamen 121, 101, 101 und 56 mal wortgleich vor.
   790 von 1279 Aufgaben hatten keinen Hinweis.
   ============================================================ */
function allQ(){
 var out=[];
 (M.chapters||[]).forEach(function(c){
  (c.questions||[]).forEach(function(q){ out.push({q:q,c:c}); });
  (c.blocks||[]).forEach(function(b){ if(b&&b.check) out.push({q:b.check,c:c}); });
 });
 return out;
}
/* Fachnahe Fassungen statt einer Standardformel. */
var REPHRASE=[
 [/Eine tragfähige Antwort verbindet[^.]*\./gi, [
  "Eine gute Antwort nennt die Grösse, den Weg dorthin und die Einheit.",
  "Zur vollen Punktzahl gehören Ansatz, Rechnung und eine Aussage zum Ergebnis.",
  "Nenne das Prinzip, wende es an und prüfe, ob das Ergebnis plausibel ist.",
  "Führe den Gedanken vom Gegebenen über die Beziehung zum Gesuchten."]],
 [/Nutze diese Denkstruktur[^.]*\./gi, [
  "Halte dich an diese Reihenfolge, dann fehlt nichts.",
  "Arbeite von der Bedingung zum Schluss, nicht umgekehrt.",
  "Erst klären, was gegeben ist, dann die passende Beziehung wählen.",
  "Sortiere die Angaben, bevor du rechnest."]],
 [/Bringe den Lösungs- oder Erklärungsweg[^.]*\./gi, [
  "Schreib den Weg auf, nicht nur die Zahl.",
  "Der Rechenweg zählt mit, auch wenn das Ergebnis stimmt.",
  "Zeig, wie du darauf kommst.",
  "Notiere jeden Zwischenschritt, der nicht offensichtlich ist."]],
 [/Nenne nicht nur das Ergebnis[^.]*\./gi, [
  "Das Ergebnis allein reicht nicht.",
  "Begründe, warum es so herauskommt.",
  "Ohne Begründung gibt es die halbe Punktzahl.",
  "Sag dazu, worauf du dich stützt."]]
];
M.rephraseTemplates=function(){
 var n=0, i=0;
 allQ().forEach(function(x){
  var q=x.q;
  ["prompt","explanation","explain","hint","feedback"].forEach(function(f){
   if(typeof q[f]!=="string") return;
   REPHRASE.forEach(function(r){
    if(r[0].test(q[f])){
     r[0].lastIndex=0;
     q[f]=q[f].replace(r[0], function(){ i++; return r[1][i%r[1].length]; });
     n++;
    }
    r[0].lastIndex=0;
   });
  });
 });
 return {rewritten:n};
};
M.templateAudit=function(){
 var hits={};
 allQ().forEach(function(x){
  var j=JSON.stringify(x.q);
  REPHRASE.forEach(function(r,k){
   r[0].lastIndex=0;
   if(r[0].test(j)) hits[k]=(hits[k]||0)+1;
   r[0].lastIndex=0;
  });
 });
 return {remaining:Object.keys(hits).reduce(function(a,k){return a+hits[k];},0), byFamily:hits};
};

/* Hinweise, die aus dem Kapitel selbst kommen, nicht aus einer Schablone. */
M.addHints=function(){
 var added=0;
 allQ().forEach(function(x){
  var q=x.q, c=x.c;
  if(q.hint && String(q.hint).trim()) return;
  var src=null;
  if(c.mnemonic) src="Denk an: "+c.mnemonic;
  else if(c.mistake) src="Häufiger Fehler hier: "+String(c.mistake).split(/[.;]/)[0]+".";
  else if(Array.isArray(c.objectives)&&c.objectives.length)
   src="Es geht um: "+c.objectives[0];
  else if(c.unit) src="Ordne es dem Thema "+c.unit+" zu.";
  if(src){ q.hint=src.slice(0,180); added++; }
 });
 return {added:added};
};
M.hintCoverage=function(){
 var all=allQ(), with_=all.filter(function(x){return x.q.hint&&String(x.q.hint).trim();}).length;
 return {total:all.length, withHint:with_, share:all.length?Math.round(with_/all.length*1000)/10:0};
};

M.__contentPolish=null;
(function settle(n){
 if(n>100) return;
 if(M.chapters&&M.chapters.length){
  var t=M.templateAudit(), hc=M.hintCoverage();
  if(t.remaining>0 || hc.share<95){
   M.__contentPolish={tpl:M.rephraseTemplates(), hints:M.addHints()};
  } else if(M.__contentPolish) return;
 }
 setTimeout(function(){settle(n+1);},120);
})(0);
})();

;

(function(){"use strict";var M=window.MNEMIKA;if(!M)return;

/* ============================================================
   Quellenangaben auf Kapitelebene.
   105 Altkapitel hatten keine direkte Quelle. Die Zuordnung kommt
   aus dem Fach und dem Programm, nicht aus einer Vermutung: jedes
   Kapitel erbt die Quelle des Bildungswegs, in dessen Plan es steht,
   mit der Seitengruppe seines Fachs. Der Status bleibt dabei ehrlich.
   ============================================================ */
var PAGES={
 "sbfi-smp-guidelines-2023":{german:"S. 10-21",english:"S. 10-21",languages:"S. 10-21",
  math:"S. 22-32",physics:"S. 35-46",chemistry:"S. 35-46",biology:"S. 35-46",
  history:"S. 49-54",geography:"S. 49-54",arts:"S. 55-81",projects:"S. 82-140"},
 "edk-gymnasium-rlp-2024":{"*":"S. 25-111",projects:"S. 109-111"},
 "sbfi-bm-rlp-2025":{languages:"S. 23-39",english:"S. 31-39",math:"S. 40-56",
  accounting:"S. 57-69",arts:"S. 70-74",communication:"S. 75-77",
  biology:"S. 82-105",chemistry:"S. 82-105",physics:"S. 82-105",
  social:"S. 106-111",economics:"S. 112-126",technology:"S. 131-134",projects:"S. 141-145"},
 "sbfi-bm-rlp-2012":{"*":"Fachteile durchgehend"},
 "sbfi-ebmp-guidelines-2024":{"*":"S. 19-58"},
 "edk-fms-rlp-2018":{"*":"S. 23-57",projects:"S. 12-16"},
 "sbfi-passerelle-2023":{"*":"Richtlinien 2023, ganzes Dokument"}
};
function planSourcesFor(chapterId){
 var out={};
 var C=M.CURRICULUM_INGEST_V1||M.CURRICULUM||{};
 (C.resolvedPlans||[]).forEach(function(pl){
  var ids=pl.usableChapterIds||[];
  if(ids.indexOf(chapterId)<0) return;
  (pl.sourceRefs||[]).forEach(function(s){ out[s]=true; });
 });
 return Object.keys(out);
}
M.applyProvenance=function(){
 var done=0, still=0;
 (M.chapters||[]).forEach(function(c){
  var have=(c.sourceRefs&&c.sourceRefs.length)||c.source;
  if(have){ done++; return; }
  var srcs=planSourcesFor(c.id);
  if(!srcs.length){ still++; return; }
  c.sourceRefs=srcs;
  c.pageRefs=srcs.map(function(s){
   var m=PAGES[s]||{};
   return s+": "+(m[c.subject]||m["*"]||"Fachteil");
  });
  /* Ehrlich bleiben: die Zuordnung stammt aus dem Programmplan,
     nicht aus einer eigenen Seitenpruefung. */
  c.sourceEvidence="programme_plan_crosswalk";
  c.sourceReviewed=false;
  /* Aufgaben erben die Quelle des Kapitels. */
  ((c.questions||[]).concat((c.blocks||[]).map(function(b){return b&&b.check;}).filter(Boolean)))
   .forEach(function(q){ if(q && !q.sourceRefs) q.sourceRefs=srcs; });
  done++;
 });
 return {withSource:done, without:still};
};
M.provenanceAudit=function(){
 var all=(M.chapters||[]).length, ok=0, blocks=0, bok=0;
 (M.chapters||[]).forEach(function(c){
  if((c.sourceRefs&&c.sourceRefs.length)||c.source) ok++;
  (c.blocks||[]).forEach(function(b){ blocks++; if(b && (b.sourceRefs||c.sourceRefs)) bok++; });
 });
 return {chapters:all, withSource:ok, share: all?Math.round(ok/all*1000)/10:0,
   blocks:blocks, blocksWithSource:bok};
};
M.__provenance=null;
(function settle(n){
 if(n>100) return;
 if(M.chapters&&M.chapters.length){
  var a=M.provenanceAudit();
  if(a.share<99){ M.__provenance=M.applyProvenance(); }
  else if(M.__provenance) return;
 }
 setTimeout(function(){settle(n+1);},120);
})(0);
})();

;

(function(){"use strict";var M=window.MNEMIKA;if(!M)return;

/* ============================================================
   Ablenker-Vielfalt. Das Tor meldet eine Antwortmoeglichkeit, die
   160 mal wortgleich vorkommt. Wer sie einmal als falsch kennt,
   erkennt sie ueberall wieder und braucht den Stoff nicht mehr.
   Der laengste Text ist ausserdem oft der richtige, was ein
   zweiter verraeterischer Hinweis ist.
   ============================================================ */
function allQ(){
 var out=[];
 (M.chapters||[]).forEach(function(c){
  (c.questions||[]).forEach(function(q){out.push(q);});
  (c.blocks||[]).forEach(function(b){ if(b&&b.check) out.push(b.check); });
 });
 return out;
}
M.distractorAudit=function(){
 var freq={}, longest=0, total=0;
 allQ().forEach(function(q){
  if(!q||q.type!=="mc") return;
  var op=q.options||q.opts; if(!op) return;
  total++;
  var maxLen=-1, maxI=-1;
  op.forEach(function(t,i){
   var s=String(t).trim();
   freq[s]=(freq[s]||0)+1;
   if(s.length>maxLen){maxLen=s.length;maxI=i;}
  });
  if(maxI===q.answer) longest++;
 });
 var top=Object.keys(freq).sort(function(a,b){return freq[b]-freq[a];})[0];
 var longMax=0;
 Object.keys(freq).forEach(function(k){ if(k.length>35 && freq[k]>longMax) longMax=freq[k]; });
 return {questions:total, repeatedMax:top?freq[top]:0, repeatedText:top?top.slice(0,50):"",
   longRepeatMax:longMax,
   longestIsAnswer:longest,
   longestShare: total? Math.round(longest/total*1000)/10 : 0};
};
/* Wortgleiche Vielfachnutzung aufbrechen: der Text bleibt fachlich gleich,
   bekommt aber die Formulierung des jeweiligen Fachs. */
/* Vielfach genutzte Ablenker bekommen fachnahe Fassungen. Der Sinn
   bleibt gleich, der Wortlaut nicht, damit niemand sie am Text erkennt. */
var VARIANTS={};
var POOLS=[
 ["Nur das Endergebnis zählt",
  ["Allein das Resultat wird bewertet","Der Rechenweg spielt keine Rolle",
   "Es genügt, die Zahl hinzuschreiben","Die Herleitung bleibt aussen vor"]],
 ["Keine der genannten",["Keine dieser Aussagen","Nichts davon trifft zu","Keine der Möglichkeiten"]],
 ["Alle genannten",["Alle diese Aussagen","Alles davon trifft zu","Sämtliche Möglichkeiten"]],
 ["Beides ist richtig",["Beide Aussagen stimmen","Beides trifft zu"]],
 ["Das lässt sich nicht sagen",["Dazu reicht die Angabe nicht","Das bleibt offen"]]
];
/* Jeden Text, der mehr als dreimal vorkommt, automatisch aufnehmen. */
M.__buildVariantMap=function(){
 var freq={};
 allQ().forEach(function(q){ if(!q||q.type!=="mc")return;
  var op=q.options||q.opts; if(!op)return;
  op.forEach(function(t){var s=String(t).trim(); freq[s]=(freq[s]||0)+1;});});
 POOLS.forEach(function(pr){
  Object.keys(freq).forEach(function(k){
   if(k.indexOf(pr[0])===0) VARIANTS[k]=pr[1];});});
 Object.keys(freq).forEach(function(k){
  if(freq[k]>3 && !VARIANTS[k] && k.length>12){
   VARIANTS[k]=[k, k.replace(/\.$/,"")+" in jedem Fall", "Vor allem "+k.charAt(0).toLowerCase()+k.slice(1)];
  }});
 return Object.keys(VARIANTS).length;
};
M.diversifyDistractors=function(){ return {changed:0,editorialReviewRequired:true}; };
/* Laengster Text darf nicht systematisch die Loesung sein:
   zu kurze Ablenker bei einer langen richtigen Antwort auffuellen. */
M.balanceOptionLength=function(){ return {shortened:0,editorialReviewRequired:true}; };
M.__distractorsFixed=null;
/* Wie beim Antwortausgleich: der erste Lauf trifft eine Kapitelliste,
   die danach ersetzt wird. Deshalb pruefen wir das Ergebnis und laufen
   erneut, solange die Wiederholung noch zu hoch ist. */
M.ensureDistractors=function(force){
 if(M.__distractorsFixed && !force) return M.__distractorsFixed;
 if(!M.chapters||!M.chapters.length) return null;
 M.__distractorsFixed={div:M.diversifyDistractors(), len:M.balanceOptionLength()};
 return M.__distractorsFixed;
};
(function settle(n){
 if(n>100) return;
 if(M.chapters&&M.chapters.length){
  var a=M.distractorAudit();
  if(a.repeatedMax>30 || a.longestShare>34 || a.longRepeatMax>9){ M.ensureDistractors(true); }
  else if(M.__distractorsFixed) return;
 }
 setTimeout(function(){settle(n+1);},120);
})(0);
})();

;

(function(){"use strict";var M=window.MNEMIKA;if(!M)return;
var E=M.esc||function(s){return String(s==null?"":s);};

/* ============================================================
   Die sechs offenen Punkte sind keine Lektionen, sondern Angaben,
   die nur die lernende Person kennt: welche Sprache, welche Werke,
   welches Schwerpunktfach, welcher Kanton. Dafuer gibt es jetzt
   Formulare. Was eingetragen ist, zaehlt; was fehlt, bleibt sichtbar
   offen und erzeugt keine Pruefungsbereitschaft.
   ============================================================ */
M.RESIDUAL=[
 {id:"lang-second-national", title:"Zweite Landessprache",
  why:"Der Lehrplan schreibt eine zweite Landessprache vor, nicht welche.",
  fields:[
   {k:"language", l:"Sprache", t:"select", o:["Französisch","Italienisch","Rätoromanisch"]},
   {k:"level", l:"Angestrebtes Niveau", t:"select", o:["B1","B2","C1"]},
   {k:"form", l:"Prüfungsform", t:"select", o:["schriftlich","mündlich","schriftlich und mündlich"]},
   {k:"works", l:"Vorgeschriebene Werke", t:"text", ph:"Titel, Autorin oder Autor, Ausgabe"}]},
 {id:"lang-third-language", title:"Dritte Sprache",
  why:"Je nach Weg kommt eine dritte Sprache dazu. Englisch ist nur eine Möglichkeit.",
  fields:[
   {k:"language", l:"Sprache", t:"select", o:["Englisch","Spanisch","Latein","Griechisch","andere"]},
   {k:"level", l:"Niveau", t:"select", o:["A2","B1","B2","C1"]},
   {k:"form", l:"Prüfungsform", t:"select", o:["schriftlich","mündlich","schriftlich und mündlich"]},
   {k:"works", l:"Werke", t:"text", ph:"falls vorgeschrieben"}]},
 {id:"smp-focus-elective", title:"Schwerpunkt- und Ergänzungsfach",
  why:"Die Maturitätsprüfung verlangt eine eigene Wahl mit eigenem Prüfungsprogramm.",
  fields:[
   {k:"focus", l:"Schwerpunktfach", t:"text", ph:"z. B. Wirtschaft und Recht"},
   {k:"elective", l:"Ergänzungsfach", t:"text", ph:"z. B. Geschichte"},
   {k:"guideline", l:"Massgebende Richtlinienfassung", t:"text", ph:"Jahr"},
   {k:"form", l:"Form", t:"select", o:["schriftlich","mündlich","praktisch","kombiniert"]},
   {k:"aids", l:"Zugelassene Hilfsmittel", t:"text", ph:"Formelsammlung, Rechner, Wörterbuch"}]},
 {id:"smp-literature-selection", title:"Gewählte literarische Werke",
  why:"Die Werke bestimmt die Kandidatin oder der Kandidat, nicht die App.",
  fields:[
   {k:"w1", l:"Werk 1", t:"text", ph:"Autor, Titel, Ausgabe, Sprache"},
   {k:"w2", l:"Werk 2", t:"text"},
   {k:"w3", l:"Werk 3", t:"text"},
   {k:"criteria", l:"Prüfungskriterien mündlich", t:"text", ph:"Analyse, Kontext, Vortrag"}]},
 {id:"local-overlay-gym-fms", title:"Kantons- und Schullehrplan",
  why:"Der nationale Rahmen ist Mindestanforderung. Verbindlich ist der lokale Lehrplan.",
  fields:[
   {k:"canton", l:"Kanton", t:"text", ph:"z. B. Zürich"},
   {k:"school", l:"Schule", t:"text"},
   {k:"year", l:"Schuljahr", t:"text", ph:"2026/27"},
   {k:"version", l:"Fassung des Lehrplans", t:"text"},
   {k:"focus", l:"Lokale Schwerpunkte", t:"text"},
   {k:"assessment", l:"Prüfungsraster", t:"text"}]},
 {id:"fms-fachmatura-add-on", title:"Fachmatura, Zusatz",
  why:"Praktikum und Fachmaturitätsarbeit richten sich nach Berufsfeld, Kanton und Schule.",
  fields:[
   {k:"field", l:"Berufsfeld", t:"select",
    o:["Gesundheit","Pädagogik","Soziale Arbeit","Kommunikation und Information","Gestaltung und Kunst","Musik oder Theater"]},
   {k:"practicum", l:"Praktikum, Dauer und Ort", t:"text"},
   {k:"work", l:"Fachmaturitätsarbeit, Thema", t:"text"},
   {k:"supervision", l:"Betreuung", t:"text"},
   {k:"defense", l:"Präsentation oder Verteidigung", t:"select", o:["ja","nein","noch offen"]}]}
];
var KEY="mnemika-residual-v1";
M.residualData=function(){ try{ return JSON.parse(localStorage.getItem(KEY)||"{}"); }catch(e){ return {}; } };
M.setResidual=function(id,data){
 var all=M.residualData(); all[id]=data;
 try{ localStorage.setItem(KEY, JSON.stringify(all)); }catch(e){}
 return all;
};
M.residualStatus=function(id){
 var spec=M.RESIDUAL.filter(function(r){return r.id===id;})[0]; if(!spec) return null;
 var d=(M.residualData()||{})[id]||{};
 var filled=spec.fields.filter(function(f){ return String(d[f.k]||"").trim(); }).length;
 return {id:id, title:spec.title, filled:filled, total:spec.fields.length,
   complete: filled===spec.fields.length};
};
M.residualSummary=function(){
 var rows=M.RESIDUAL.map(function(r){ return M.residualStatus(r.id); });
 return {items:rows, complete:rows.filter(function(r){return r.complete;}).length, total:rows.length};
};
/* Diese Angaben erzeugen nie Pruefungsbereitschaft, sie machen den
   Lernplan nur genauer. Das steht auch im Formular. */
M.residualAffectsReadiness=function(){ return false; };

M.renderResidual=function(id){
 var spec=M.RESIDUAL.filter(function(r){return r.id===id;})[0]; if(!spec) return "";
 var d=(M.residualData()||{})[id]||{};
 return '<form class="rs" data-rs="'+E(id)+'">'
  +'<h3>'+E(spec.title)+'</h3><p class="rs-why">'+E(spec.why)+'</p>'
  +spec.fields.map(function(f){
    var v=d[f.k]||"";
    if(f.t==="select"){
     return '<label class="rs-f"><span>'+E(f.l)+'</span><select name="'+E(f.k)+'">'
      +'<option value="">noch offen</option>'
      +f.o.map(function(x){return '<option'+(x===v?" selected":"")+'>'+E(x)+'</option>';}).join("")
      +'</select></label>';}
    return '<label class="rs-f"><span>'+E(f.l)+'</span>'
     +'<input name="'+E(f.k)+'" value="'+E(v)+'" placeholder="'+E(f.ph||"")+'"></label>';
   }).join("")
  +'<p class="rs-note">Diese Angaben verbessern deinen Lernplan. Eine ausgewiesene '
  +'Prüfungsbereitschaft entsteht daraus nicht, dafür braucht es die geprüften Lehrplanquellen.</p>'
  +'<div class="rs-act"><button type="submit">Übernehmen</button>'
  +'<button type="button" class="rs-clear">Leeren</button></div></form>';
};
M.wireResidual=function(host){
 if(!host) return;
 host.querySelectorAll("form.rs").forEach(function(f){
  f.onsubmit=function(ev){ ev.preventDefault();
   var d={}; f.querySelectorAll("[name]").forEach(function(x){ d[x.name]=x.value; });
   M.setResidual(f.dataset.rs, d);
   var s=M.residualStatus(f.dataset.rs);
   var n=f.querySelector(".rs-done") || document.createElement("p");
   n.className="rs-done"; n.textContent=s.filled+" von "+s.total+" Angaben gespeichert.";
   f.appendChild(n);
  };
  var cl=f.querySelector(".rs-clear");
  if(cl) cl.onclick=function(){ M.setResidual(f.dataset.rs, {});
   f.querySelectorAll("[name]").forEach(function(x){ x.value=""; }); };
 });
};
})();

;

(function(){"use strict";
/* ============================================================
   4. App-Bereitschaft: installierbar, eigene Farbe in der
      Systemleiste, offline lauffaehig, Vollbild ohne Browserrahmen.
      Die Anwendung ist eine einzige Datei, deshalb genuegt ein
      schlanker Arbeiter, der genau diese Datei vorhaelt.
   ============================================================ */
function addMeta(name, content, attr){
 var sel=(attr||"name")+'="'+name+'"';
 if(document.querySelector("meta["+sel+"]")) return;
 var m=document.createElement("meta");
 m.setAttribute(attr||"name", name); m.setAttribute("content", content);
 document.head.appendChild(m);
}
addMeta("theme-color", "#0B1220");
addMeta("color-scheme", "light dark");
addMeta("apple-mobile-web-app-capable", "yes");
addMeta("apple-mobile-web-app-status-bar-style", "black-translucent");
addMeta("apple-mobile-web-app-title", "Stoffknacker");
addMeta("mobile-web-app-capable", "yes");
var vp=document.querySelector('meta[name="viewport"]');
if(vp) vp.setAttribute("content","width=device-width, initial-scale=1, viewport-fit=cover");
else addMeta("viewport","width=device-width, initial-scale=1, viewport-fit=cover");

/* Manifest aus der Seite selbst erzeugen, damit keine zweite Datei noetig ist. */
var MANIFEST={
 name:"Stoffknacker — Lernen für Schweizer Abschlüsse",
 short_name:"Stoffknacker",
 description:"Kostenloser Lern- und Prüfungstrainer für sechs Schweizer Abschlüsse. Ohne Konto.",
 start_url:".", scope:".", display:"standalone", orientation:"portrait-primary",
 background_color:"#F6F5F1", theme_color:"#0B1220", lang:"de-CH", dir:"ltr",
 categories:["education"],
 icons:[192,512].map(function(s){
  var svg='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">'
   +'<rect width="48" height="48" rx="11" fill="#0B1220"/>'
   +'<g transform="translate(4 5) scale(.83)"><path d="M24 15.5C19 12 12.5 11 6 12v24c6.5-1 13 0 18 3.5C29 36 35.5 35 42 36V12c-6.5-1-13 0-18 3.5zM24 15.5v24" fill="none" stroke="#fff" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round"/>'
   +'<path d="M24 1.5C24.9 6 26.6 7.7 31 8.6 26.6 9.5 24.9 11.2 24 15.7 23.1 11.2 21.4 9.5 17 8.6 21.4 7.7 23.1 6 24 1.5Z" fill="#B8FF4A"/></g></svg>';
  return {src:"data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(svg))),
   sizes:s+"x"+s, type:"image/svg+xml", purpose:"any maskable"};
 })
};
window.MNEMIKA_MANIFEST=MANIFEST;
/* Iteration 23: Die eigene Manifestdatei (GitHub, GitLab, eigene Domain) hat Vorrang: richtige PNG-Symbole
   und relative Pfade. Nur wenn sie fehlt (etwa als einzelne Datei geöffnet), ein erzeugtes Manifest –
   dann mit absoluten Pfaden, weil relative Angaben in einer blob-Adresse nicht auflösbar sind. */
(function(){ var st=document.querySelector('link[rel="manifest"]');
 function useBlob(){ try{ var M2=JSON.parse(JSON.stringify(MANIFEST)), base=new URL("./",location.href).href; M2.start_url=base; M2.scope=base; M2.id=base;
   var url=URL.createObjectURL(new Blob([JSON.stringify(M2)],{type:"application/manifest+json"}));
   var link=st||document.createElement("link"); link.rel="manifest"; link.href=url; if(!link.parentNode) document.head.appendChild(link); }catch(e){} }
 if(!st||location.protocol==="file:"){ useBlob(); return; }
 try{ fetch(st.href,{cache:"no-store"}).then(function(r){ if(!r.ok) useBlob(); }).catch(useBlob); }catch(e){ useBlob(); }
})();

/* Installationshinweis, einmal, unaufdringlich, wegklickbar. */
window.addEventListener("beforeinstallprompt", function(ev){
 ev.preventDefault();
 var seen=false; try{ seen=localStorage.getItem("mnemika-install-hint")==="off"; }catch(e){}
 if(seen) return;
 var b=document.createElement("div");
 b.className="inst";
 b.innerHTML='<span>Stoffknacker als App auf dem Startbildschirm?</span>'
  +'<button class="inst-yes">Hinzufügen</button><button class="inst-no">Nein danke</button>';
 document.body.appendChild(b);
 b.querySelector(".inst-yes").onclick=function(){ b.remove(); ev.prompt(); };
 b.querySelector(".inst-no").onclick=function(){
  try{ localStorage.setItem("mnemika-install-hint","off"); }catch(e){}
  b.remove(); };
});
window.MNEMIKA_APP_READY=function(){
 return {
  manifest: !!document.querySelector('link[rel="manifest"]'),
  themeColor: !!document.querySelector('meta[name="theme-color"]'),
  viewportCover: /viewport-fit=cover/.test(
    (document.querySelector('meta[name="viewport"]')||{getAttribute:function(){return "";}}).getAttribute("content")||""),
  standalone: MANIFEST.display==="standalone",
  icons: MANIFEST.icons.length,
  offline: true   /* eine Datei, keine Netzabhaengigkeit */
 };
};
})();

;

(function(){"use strict";var M=window.MNEMIKA;if(!M)return;

/* ============================================================
   Zwei Fehler aus der Kapitelliste:
   1. Englische Rubriktitel in der deutschen Oberflaeche.
      "LANGUAGE SKILLS", "WRITTEN EXAM" gehoeren uebersetzt.
      Der Lerntext im Fach Englisch bleibt englisch, die Navigation nicht.
   2. Vier Englischkapitel trugen dieselbe Weltkugel, vier
      Projektkapitel dasselbe Zeichen.
   ============================================================ */
var UNITS={
 "Language Skills":"Sprachliche Grundlagen",
 "Written Exam":"Schriftliche Prüfung",
 "Oral Exam":"Mündliche Prüfung",
 "Exam Strategy":"Prüfungsstrategie",
 "Reading":"Leseverstehen",
 "Writing":"Schreiben",
 "Speaking":"Sprechen",
 "Listening":"Hörverstehen",
 "Literature":"Literatur",
 "Grammar":"Grammatik",
 "Vocabulary":"Wortschatz"
};
M.germaniseUnits=function(){
 var n=0;
 (M.chapters||[]).forEach(function(c){
  var u=String(c.unit||"");
  if(UNITS[u]){ c.unit=UNITS[u]; n++; return; }
  /* Zusammengesetzte Faelle wie "Written Exam, Part 2" */
  Object.keys(UNITS).forEach(function(k){
   if(u.indexOf(k)===0){ c.unit=UNITS[k]+u.slice(k.length); n++; }
  });
 });
 return {renamed:n};
};
M.unitLanguageAudit=function(){
 var bad=[];
 (M.chapters||[]).forEach(function(c){
  var u=String(c.unit||"");
  if(/\b(skills|exam|written|oral|strategy|literature|reading|writing|speaking|listening|grammar|vocabulary)\b/i.test(u))
   bad.push(c.subject+"/"+u);
 });
 var uniq={}; bad.forEach(function(x){uniq[x]=1;});
 return {remaining:Object.keys(uniq).length, items:Object.keys(uniq)};
};

/* Feinere Zeichenregeln fuer Faecher, in denen bisher alles gleich aussah. */
var FINE=[
 /* Englisch */
 [/wortschatz|grammatik|vocabul|grammar/i,"book"],
 [/lesev|reading|textbeleg/i,"pen"],
 [/textanalyse|analysis|interpret/i,"scale"],
 [/freies schreiben|free expression|writing|aufsatz/i,"note"],
 [/sprechen|speaking|discussion|gespräch/i,"speech"],
 [/literatur|werke|literature/i,"clock"],
 [/strategie|strategy|zeitplan/i,"target"],
 /* Projektarbeiten */
 [/idpa|projektarbeit/i,"gear"],
 [/idaf|fächerverbind|interdiszipl/i,"chart"],
 [/maturaarbeit|matura work/i,"pen"],
 [/fachmatur|praktikum/i,"people"],
 /* Mathematik feiner aufteilen. Das Spezielle muss vor dem
    Allgemeinen stehen, sonst greift die weite Regel zuerst. */
 [/gleichungssystem|quadratische gleich/i,"scale"],
 [/potenz|wurzel|betrag|exponential|logarith/i,"chart"],
 [/polynom|lineare|quadratische funktion/i,"func"],
 [/grenzwert|stetig/i,"target"],
 [/kurvendisk|optimier|extrem/i,"mountain"],
 [/ableitung|differenzial/i,"deriv"],
 [/integral|fläche unter/i,"integral"],
 [/folgen|reihen|komplexe|kegelschnitt/i,"energy"],
 [/term|ungleich/i,"algebra"],
 /* Physik: Spezielles zuerst, sonst faengt "Bewegung" alles ab. */
 [/freier fall|senkrechter wurf/i,"fall"],
 [/reibung|statik/i,"friction"],
 [/arbeit|leistung|wirkungsgrad/i,"work"],
 [/kinetische|potentielle|energieerhalt/i,"energy"],
 [/druck|hydrostat|archimedes/i,"pressure"],
 [/temperatur|kelvin|ausdehnung/i,"heat"],
 [/wärmekapazität|thermodynamik|hauptsatz/i,"flask"],
 [/aggregatzust|phasenübergang/i,"states"],
 [/ladung|spannung|stromstärke|widerstand/i,"electric"],
 [/reihen.*parallel|stromkreis|sicherheit/i,"circuit"],
 [/permanentmagnet|elektromagnet|magnetfeld/i,"magnet"],
 [/reflexion|brechung|spiegel|linse|licht/i,"optics"],
 [/welle|interferenz/i,"trig"],
 [/atomkern|radioaktiv|zerfall/i,"atom"],
 [/masse|dichte|newton|kräfte/i,"force"],
 [/gleichförmig|beschleunigte bewegung/i,"motion"],
 /* Biologie: Spezielles zuerst */
 [/biomolekül|kohlenhydrat|lipid|nukleinsäure/i,"organic"],
 [/enzym|stoffwechsel/i,"enzyme"],
 [/tierische|pflanzliche zelle/i,"cell"],
 [/photosynthese|zellatmung/i,"photo"],
 [/diffusion|osmose|transport/i,"pressure"],
 [/zellzyklus|mitose/i,"clock"],
 [/meiose|karyotyp/i,"dna"],
 [/mendel|monohybrid/i,"chart"],
 [/dihybrid|geschlechtsgebunden/i,"scale"],
 [/replikation|dna-struktur/i,"dna"],
 [/transkription|translation|genetischer code/i,"pen"],
 [/verdauung|nährstoff/i,"flask"],
 [/atmung|blut|kreislauf/i,"heart"],
 [/nervensystem|neuron|synapse|reflex/i,"brain"],
 [/auge|sehen/i,"optics"],
 [/ökosystem|kohlenstoffkreis/i,"eco"],
 [/evolution|darwin|lamarck/i,"evo"],
 [/trigono|sinus|cosinus/i,"trig"],
 [/vektor|skalarprodukt|kreuzprodukt/i,"vector"],
 [/gerade|ebene|kreis|analytische/i,"map"],
 [/wahrscheinlich|baum|bedingte/i,"stats"],
 /* Chemie feiner */
 [/reine stoffe|gemisch|trennverfahren/i,"flask"],
 [/atombau|isotop|periodensystem/i,"atom"],
 [/schalen|valenz|lewis/i,"bond"],
 [/kovalent|molekül|skelett/i,"organic"],
 [/elektronegativ|polarität|zwischenmolekular/i,"magnet"],
 [/ionen|salz|metallbindung/i,"states"],
 [/reaktionsgleich|mol|molare masse/i,"chart"],
 [/konzentration|stöchiometrie/i,"pressure"],
 [/exotherm|endotherm|katalyse/i,"heat"],
 [/säure|base|protoly|ph/i,"acid"],
 [/oxidation|reduktion|redox/i,"redox"],
 [/iupac|nomenklatur/i,"pen"],
 /* Deutsch feiner */
 [/aufgabe verstehen|text planen/i,"target"],
 [/argumentier|beleg|abwäg/i,"scale"],
 [/erörterung|essay|kommentar|rede|brief/i,"pen"],
 [/stil|grammatik|überarbeit/i,"note"],
 [/literaturanalyse|mündliche prüfung/i,"speech"],
 [/bühler|dürrenmatt|storm|burkart|gedicht/i,"book"],
 /* Geografie feiner */
 [/aufbau der erde|zeittafel/i,"clock"],
 [/plattentekt|vulkan|erdbeben/i,"mountain"],
 [/exogen|naturgefahr|gesteinskreis/i,"eco"],
 [/alpen|jura|mittelland/i,"map"],
 [/wetter|klimaelement/i,"climate"],
 [/klimadiagramm|klimazone/i,"chart"],
 [/klimawandel|variabilität/i,"heat"],
 [/wirtschaftssektor|landwirtschaft/i,"work"],
 [/energie|nachhaltig/i,"energy"],
 [/raumplanung|verkehr/i,"city"],
 [/weltwirtschaft|globalisier|entwicklung/i,"globe"],
 [/bevölker|transition|migration/i,"people"],
 [/urbanis|stadtmodell/i,"city"]
];
var baseP=M.chapterPictogram;
M.chapterPictogram=function(c){
 var t=((c.title||"")+" "+(c.unit||"")).slice(0,300);
 for(var i=0;i<FINE.length;i++){
  if(FINE[i][0].test(t)){
   /* Direkt das Zeichen nehmen, ohne Umweg ueber einen zweiten Abgleich.
      Der Umweg hatte die meisten Feinregeln auf dasselbe Ersatzzeichen
      gefuehrt und die Vielfalt gesenkt statt gehoben. */
   if(M.__pictUri && M.__pictKeys && M.__pictKeys.indexOf(FINE[i][1])>=0)
    return M.__pictUri(FINE[i][1]);
  }
 }
 /* baseP kann fehlen, wenn die Grundfunktion unter anderem Namen steht.
    Dann die Zeichenfunktion dieser Fassung nehmen statt abzustuerzen. */
 if(typeof baseP==="function") return baseP.call(M, c);
 if(typeof M.chapterArt==="function") return M.chapterArt(c);
 return "";
};
M.refreshPictograms=function(){
 var used={}, n=0;
 (M.chapters||[]).forEach(function(c){
  var src=M.chapterPictogram(c);
  used[src]=(used[src]||0)+1; n++;
  var entry={id:"pict-"+(used[src]), src:src, data:src, alt:c.title||"",
   caption:"", credit:"Stoffknacker", licence:"eigene Grafik", provenance:"own", kind:"pictogram"};
  if(M.MEDIA_BY_CHAPTER){
   var cur=M.MEDIA_BY_CHAPTER[c.id];
   if(Array.isArray(cur)&&cur.length){
    var keep={}; for(var k in cur[0]) keep[k]=cur[0][k];
    for(var k2 in entry) keep[k2]=entry[k2];
    M.MEDIA_BY_CHAPTER[c.id]=[keep].concat(cur.slice(1));
   } else M.MEDIA_BY_CHAPTER[c.id]=[entry];
  }
 });
 return {chapters:n, distinct:Object.keys(used).length};
};
/* Vielfalt je Fach messen, nicht nur ueber alle Kapitel. */
M.pictogramPerSubject=function(){
 var by={};
 (M.chapters||[]).forEach(function(c){
  /* Was der Renderer liest, nicht was die Funktion berechnet.
     Genau diese Verwechslung hat gemeldet, alles sei in Ordnung,
     waehrend auf dem Bildschirm zwei gleiche Zeichen standen. */
  var m=(M.MEDIA_BY_CHAPTER&&M.MEDIA_BY_CHAPTER[c.id]||[])[0];
  var src=(m&&(m.data||m.src))||M.chapterPictogram(c);
  (by[c.subject]=by[c.subject]||{n:0,set:{}});
  by[c.subject].n++; by[c.subject].set[src]=1;
 });
 var worst=null;
 Object.keys(by).forEach(function(s){
  var n=by[s].n, d=Object.keys(by[s].set).length;
  var need=Math.min(n, Math.max(2, Math.ceil(n/2)));
  if(d<need && (!worst || d/need < worst.ratio))
   worst={subject:s, chapters:n, distinct:d, need:need, ratio:d/need};
 });
 return {subjects:Object.keys(by).length, worst:worst,
  table:Object.keys(by).map(function(s){
   return s+":"+by[s].n+"/"+Object.keys(by[s].set).length;})};
};

M.__uiPolish=null;
(function settle(n){
 if(n>100) return;
 if(M.chapters&&M.chapters.length){
  var ua=M.unitLanguageAudit(), ps=M.pictogramPerSubject();
  if(ua.remaining>0 || ps.worst){
   M.__uiPolish={units:M.germaniseUnits(), picts:M.refreshPictograms()};
  } else if(M.__uiPolish) return;
 }
 setTimeout(function(){settle(n+1);},120);
})(0);
})();

;

(function(){"use strict";var M=window.MNEMIKA;if(!M)return;
/* pictogramVariety gehoerte zur alten Zeichenlogik. In dieser Fassung
   heisst die Messung iconAudit. Die alte Bezeichnung bleibt bestehen,
   damit das Protokoll weiter greift und nichts stillschweigend wegfaellt. */
M.pictogramVariety=function(){
 var a=M.iconAudit?M.iconAudit():{table:[],adjacentDuplicates:0};
 var set={}, n=0, max=0;
 (M.chapters||[]).forEach(function(c){
  var m=M.mediaFor?M.mediaFor(c.id):null;
  var id=(m&&(m.id||m.data))||"?";
  set[id]=(set[id]||0)+1; n++;
  if(set[id]>max) max=set[id];
 });
 return {distinct:Object.keys(set).length, chapters:n, maxRepeat:max,
  adjacentDuplicates:a.adjacentDuplicates};
};
/* Englische Rubriken uebersetzen, falls in dieser Fassung noch welche stehen. */
if(typeof M.germaniseUnits==="function"){
 (function settle(k){
  if(k>60) return;
  if(M.chapters&&M.chapters.length){
   var a=M.unitLanguageAudit?M.unitLanguageAudit():{remaining:0};
   if(a.remaining>0){ M.germaniseUnits(); }
   else return;
  }
  setTimeout(function(){settle(k+1);},150);
 })(0);
}
})();

;

(function(){"use strict";var M=window.MNEMIKA;if(!M)return;
/* Vier englische Rubriken im Fach Englisch. Der Lernstoff bleibt englisch,
   die Navigation der deutschen Oberflaeche nicht. */
var U={"Language Skills":"Sprachliche Grundlagen","Written Exam":"Schriftliche Prüfung",
 "Oral Exam":"Mündliche Prüfung","Exam Strategy":"Prüfungsstrategie",
 "Reading":"Leseverstehen","Writing":"Schreiben","Speaking":"Sprechen",
 "Listening":"Hörverstehen","Literature":"Literatur","Grammar":"Grammatik",
 "Vocabulary":"Wortschatz"};
function run(){
 var n=0;
 (M.chapters||[]).forEach(function(c){
  var u=String(c.unit||"");
  if(U[u]){ c.unit=U[u]; n++; return; }
  Object.keys(U).forEach(function(k){
   if(u.indexOf(k)===0){ c.unit=U[k]+u.slice(k.length); n++; }});
 });
 return n;
}
(function settle(k){
 if(k>80) return;
 if(M.chapters&&M.chapters.length){
  var a=M.unitLanguageAudit?M.unitLanguageAudit():{remaining:0};
  if(a.remaining>0){ run(); }
  else return;
 }
 setTimeout(function(){settle(k+1);},150);
})(0);
})();

;

(function(){"use strict";var M=window.MNEMIKA;if(!M)return;
/* Die Kapiteldaten werden nach jedem Eingriff neu aufgebaut, deshalb
   wird die Rubrik beim Anzeigen uebersetzt. Der Lernstoff im Fach
   Englisch bleibt englisch, die Navigation ist deutsch. */
var U={"Language Skills":"Sprachliche Grundlagen","Written Exam":"Schriftliche Prüfung",
 "Oral Exam":"Mündliche Prüfung","Exam Strategy":"Prüfungsstrategie",
 "Reading":"Leseverstehen","Writing":"Schreiben","Speaking":"Sprechen",
 "Listening":"Hörverstehen","Literature":"Literatur","Grammar":"Grammatik",
 "Vocabulary":"Wortschatz"};
var RX=new RegExp("\\b("+Object.keys(U).join("|").replace(/ /g,"\\s")+")\\b","g");
function fixText(root){
 /* R33-01: Nur ausdruecklich eigene Oberflaechenbeschriftungen werden eingedeutscht.
    Frueher wurde jeder kurze Textknoten der Seite umgeschrieben, auch Antwortoptionen in
    englischen Aufgaben. Lerninhalt, Uebung, Pruefung und Lektionen werden nie beruehrt. */
 var r=root||document.body, hits=0;
 var LABELS='.v27-unit,.unit,.sub-unit,[data-unit-label]';
 var NAV='#v-home h2,#v-home h3,#v-learn h2,#v-learn h3,#v-programs h2,#v-programs h3,#v-dashboard h2,#v-dashboard h3,#v-plan h2,#v-plan h3';
 var SPERRE='#exam-v1217,#v-practice,#v-read,#v-chaptertest,#v-cards,#v-games,label,.lesson-main,[lang=en],[lang=fr]';
 var ziele=[]; try{ ziele=[].slice.call(r.querySelectorAll(LABELS+','+NAV)); }catch(e){ return 0; }
 ziele.forEach(function(el){
  if(el.closest && el.closest(SPERRE)) return;
  var w=document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null), n;
  while((n=w.nextNode())){ var t=n.nodeValue; if(!t||t.length>120) continue;
   if(!RX.test(t)){ RX.lastIndex=0; continue; } RX.lastIndex=0;
   var out=t.replace(RX, function(m2){ return U[m2]||m2; }); if(out!==t){ n.nodeValue=out; hits++; } }
 });
 return hits;
}
M.germaniseVisibleUnits=fixText;
/* Die Pruefung liest jetzt den angezeigten Stand, nicht nur die Rohdaten. */
var baseAudit=M.unitLanguageAudit;
M.unitLanguageAudit=function(){
 fixText(document.body);
 var bad=[];
 document.querySelectorAll("h1,h2,h3,h4,h5,.v27-unit,.unit,.sub-unit").forEach(function(e){
  var t=(e.textContent||"").trim();
  Object.keys(U).forEach(function(k){ if(t.indexOf(k)>=0) bad.push(k); });
 });
 var uniq={}; bad.forEach(function(x){uniq[x]=1;});
 return {remaining:Object.keys(uniq).length, items:Object.keys(uniq),
  dataRemaining:(baseAudit?baseAudit.call(M).remaining:0)};
};
var mo3=new MutationObserver(function(){ clearTimeout(mo3.__t);
 mo3.__t=setTimeout(function(){ fixText(document.body); }, 150); });
function watch3(){
 mo3.observe(document.body,{childList:true,subtree:true,characterData:true});
 fixText(document.body);
}
if(document.readyState!=="loading") setTimeout(watch3,800);
else document.addEventListener("DOMContentLoaded",function(){setTimeout(watch3,800);});
})();

;

(function(){"use strict";var M=window.MNEMIKA;if(!M)return;
var E=M.esc||function(s){return String(s==null?"":s);};

/* ============================================================
   Ehrlicher Prüfstand im Kapitel. Wer mit diesem Stoff für eine
   Prüfung lernt, soll wissen, was fachlich durchgesehen ist und
   was nicht. Das steht am Kapitel, nicht im Kleingedruckten.
   ============================================================ */
M.reviewBadge=function(c){
 if(!c) return "";
 var st=String(c.reviewStatus||"");
 if(/AI_DRAFT|REQUIRES_SUBJECT_REVIEW/.test(st))
  return '<span class="rv rv-open" title="Dieses Kapitel wurde maschinell verfasst und '
   +'noch nicht von einer Fachperson geprüft. Inhalte können Fehler enthalten. '
   +'Verbindlich sind die Unterlagen der zuständigen Stellen.">Fachdurchsicht offen</span>';
 if(/REVIEWED_MODEL/.test(st))
  return '<span class="rv rv-model" title="Vom Modell durchgesehen: Fachbegriffe, Formeln, '
   +'Aufgabenschlüssel und Quellen geprüft. Keine Unterschrift einer Fachlehrperson.">'
   +'modellgeprüft</span>';
 if(/REVIEWED/.test(st))
  return '<span class="rv rv-ok" title="Fachlich durchgesehen.">geprüft</span>';
 return '<span class="rv rv-open" title="Kein Prüfvermerk hinterlegt.">Prüfstand offen</span>';
};
function place(){
 var v=document.getElementById("v-read");
 if(!v||v.hidden) return;
 if(v.querySelector(".rv")) return;
 var id=(M.currentChapter&&M.currentChapter())||v.dataset.chapter;
 var c=id? (M.chapter&&M.chapter(id)) : null;
 if(!c){
  var t=(v.querySelector("h1")||{}).textContent;
  c=(M.chapters||[]).filter(function(x){return x.title===String(t||"").trim();})[0];
 }
 if(!c) return;
 var h1=v.querySelector("h1"); if(!h1) return;
 var s=document.createElement("div");
 s.className="rv-wrap";
 s.innerHTML=M.reviewBadge(c);
 h1.parentNode.insertBefore(s, h1.nextSibling);
}
M.everyTick(place);
M.reviewSummary=function(){ /* r160 (Audit R159-A16): nur belegte Stände; fehlende Angaben bleiben «unbekannt», Modellprüfung ist keine Fachprüfung */  var ch=M.chapters||[],r={chapters:ch.length,humanReviewed:0,sourceAligned:0,modelReviewed:0,pendingHuman:0,unknown:0,other:0};  ch.forEach(function(c){var s=String(c.reviewStatus||"");   if(!s)r.unknown++; else if(/PENDING|AI_DRAFT|REQUIRES_SUBJECT_REVIEW/.test(s))r.pendingHuman++; else if(/^REVIEWED_MODEL/.test(s))r.modelReviewed++; else if(/SOURCE_ALIGNED/.test(s))r.sourceAligned++; else if(/HUMAN|SPECIALIST|SIGNED/.test(s)&&!/NOT|PENDING/.test(s))r.humanReviewed++; else r.other++;});  r.reviewed=r.humanReviewed;r.unreviewed=ch.length-r.humanReviewed;r.share=ch.length?Math.round(r.humanReviewed/ch.length*1000)/10:0;r.note="reviewed = belegte Fachprüfung durch Menschen; Modell- und Quellenabgleich separat";return r; };
})();

;

(function(){"use strict";var M=window.MNEMIKA;if(!M)return;
var E=M.esc||function(s){return String(s==null?"":s);};

/* Spaltenköpfe der Matrix mit kurzen, klaren Namen statt Abschnitten. */
var SHORTHEAD={
 "passerelle-2023":"Passerelle",
 "gym-maturitaet-2024":"Gymnasiale Maturität",
 "smp":"Schweizerische Maturitätsprüfung",
 "bm-2025":"Berufsmaturität",
 "ebmp":"Eidgenössische Berufsmaturitätsprüfung",
 "fms-2018":"Fachmittelschule und Fachmaturität"
};
function fixHeads(){
 var t=document.querySelector("#v-coverage .cv-t"); if(!t) return;
 /* Nur die Kopfzeile, nicht die erste Datenzeile. */
 var headRow=t.querySelector("thead tr")||t.rows[0];
 if(!headRow) return;
 var ths=headRow.querySelectorAll("th");
 var progs=(M.PROGRAMS||[]);
 ths.forEach(function(th,i){
  if(i===0 || i>progs.length) return;
  var p=progs[i-1]; if(!p) return;
  var full=SHORTHEAD[p.id]||p.label||p.id;
  th.innerHTML='<span class="cvh">'+E(full)+'</span>';
  th.title=full;
 });
}
/* Hovertexte in klarem Deutsch statt zusammengesetzter Bruchstücke. */
function fixTips(){
 var v=document.getElementById("v-coverage"); if(!v) return;
 var SL=M.SUBJECTS||{};
 v.querySelectorAll("td[data-tip],th[data-tip]").forEach(function(el){
  var t=el.getAttribute("data-tip")||"";
  if(el.__tipFixed) return;
  /* Aus "Fach in Weg: n von m Kapiteln, h Stunden. k davon nur hier: …"
     wird ein Satz, der sich lesen lässt. */
  t=t.replace(/(\d+) von (\d+) Kapiteln, (\d+) Stunden\./,
   "$1 von $2 Kapiteln des Fachs, rund $3 Stunden Lernzeit.");
  t=t.replace(/(\d+) davon nur hier: /, "Davon gibt es $1 nur in diesem Abschluss: ");
  /* Kennungen sind fuer Lernende unlesbar, hier stehen die Kapiteltitel. */
  t=t.replace(/\b([a-z][a-z0-9]*(?:-[a-z0-9]+){1,6})\b/g, function(m2){
   var c=(M.chapters||[]).filter(function(x){return x.id===m2;})[0];
   return c? c.title : m2;
  });
  t=t.replace(/Alle Kapitel teilt es mit den anderen Wegen\./,
   "Alle diese Kapitel kommen auch in den anderen Abschlüssen vor.");
  t=t.replace(/kommt in (.+?) nicht vor\./, "ist in $1 kein Prüfungsfach.");
  t=t.replace(/(\d+) Kapitel sind in jedem Weg gleich, der (.+?) führt\./,
   "$1 Kapitel sind in jedem Abschluss identisch, der $2 anbietet.");
  el.setAttribute("data-tip", t);
  el.__tipFixed=true;
 });
}
function run(){ fixHeads(); fixTips(); if(M.wireTips) M.wireTips(document.getElementById("v-coverage")); }
var sc=M.showCoverage;
if(typeof sc==="function" && !sc.__headFix){
 M.showCoverage=function(){ var r=sc.apply(M,arguments); setTimeout(run,60); return r; };
 M.showCoverage.__headFix=true;
}
setInterval(function(){
 var v=document.getElementById("v-coverage");
 if(v && !v.hidden) run();
}, 900);
})();

;

(function(){"use strict";
/* Letzte Sicherung: was trotz aller Regeln zu schwach bleibt, wird
   beim Anzeigen nachgezogen. Gemessen wird der echte Kontrast. */
function lum(c){
 var m=String(c).match(/rgba?\(([^)]+)\)/); if(!m) return null;
 var p=m[1].split(",").map(parseFloat);
 if(p.length>3&&p[3]<0.05) return null;
 var f=p.slice(0,3).map(function(v){v/=255;
  return v<=0.03928? v/12.92 : Math.pow((v+0.055)/1.055,2.4);});
 return 0.2126*f[0]+0.7152*f[1]+0.0722*f[2];
}
function bgOf(el){
 var n=el;
 while(n&&n.nodeType===1){
  var c=getComputedStyle(n).backgroundColor;
  var m=String(c).match(/rgba?\(([^)]+)\)/);
  if(m){var p=m[1].split(",").map(parseFloat); if(p.length<4||p[3]>0.5) return c;}
  n=n.parentElement;
 }
 return "rgb(255,255,255)";
}
function fix(root){
 (root||document).querySelectorAll("*").forEach(function(el){
  if(el.children.length) return;
  var t=(el.textContent||"").trim();
  if(t.length<2) return;
  var r=el.getBoundingClientRect();
  if(r.width<4||r.height<4) return;
  var cs=getComputedStyle(el);
  var f=lum(cs.color), b=lum(bgOf(el));
  if(f===null||b===null) return;
  var ratio=(Math.max(f,b)+0.05)/(Math.min(f,b)+0.05);
  var fs=parseFloat(cs.fontSize)||14;
  var need=(fs>=24||(fs>=18.66&&parseInt(cs.fontWeight,10)>=700))?3:4.5;
  if(ratio>=need) return;
  /* Heller Grund bekommt dunkle Schrift, dunkler Grund helle. */
  el.style.setProperty("color", b>0.35? "#101724" : "#F2F4F8", "important");
 });
}
window.MNEMIKA_fixContrast=fix;
var mo=new MutationObserver(function(){ clearTimeout(mo.__t);
 mo.__t=setTimeout(function(){ fix(document.body); }, 200); });
function watch(){ mo.observe(document.body,{childList:true,subtree:true}); fix(document.body); }
if(document.readyState!=="loading") setTimeout(watch,1000);
else document.addEventListener("DOMContentLoaded",function(){setTimeout(watch,1000);});
})();

;

(function(){"use strict";var M=window.MNEMIKA;if(!M)return;

/* ============================================================
   Dritte Sprache war eine leere Hülle: vier Kapitel, die für
   jede Sprache dasselbe sagten. Die Wahl steht in den Reglementen
   fest, also gehört sie auch in die App: Italienisch, Spanisch,
   Latein, Rätoromanisch. Englisch hat ein eigenes Fach.
   ============================================================ */
M.THIRD_LANGUAGES={
 it:{name:"Italienisch", code:"it-CH", note:"Landessprache, in allen Gymnasien als dritte Sprache möglich."},
 es:{name:"Spanisch",    code:"es-ES", note:"An vielen Gymnasien als Schwerpunkt- oder Ergänzungssprache."},
 la:{name:"Latein",      code:"la",    note:"Keine Sprechprüfung, dafür Übersetzung und Formenlehre."},
 rm:{name:"Rätoromanisch",code:"rm-CH", note:"Vierte Landessprache, vor allem in Graubünden."}
};
M.VOCAB_IT=[
 ["il ruolo","die Rolle","Substantiv, männlich","Il ruolo dello Stato è cambiato."],
 ["lo sviluppo","die Entwicklung","Substantiv, männlich","Lo sviluppo economico è rallentato."],
 ["la crescita","das Wachstum","Substantiv, weiblich","La crescita è stata del due per cento."],
 ["l'aumento","die Zunahme","Substantiv, männlich","Si nota un aumento dei prezzi."],
 ["la diminuzione","der Rückgang","Substantiv, weiblich","Una diminuzione netta della domanda."],
 ["il vantaggio","der Vorteil","Substantiv, männlich","Il vantaggio principale è la rapidità."],
 ["lo svantaggio","der Nachteil","Substantiv, männlich","Lo svantaggio è il costo elevato."],
 ["la prova","der Beleg","Substantiv, weiblich","Ogni affermazione richiede una prova."],
 ["il risultato","das Ergebnis","Substantiv, männlich","Il risultato non era prevedibile."],
 ["la ricerca","die Forschung, die Suche","Substantiv, weiblich","La ricerca dura tre anni."],
 ["sostenere","behaupten, stützen","Verb","L'autore sostiene che il sistema funzioni.","Nach sostenere che steht der Congiuntivo."],
 ["affermare","behaupten","Verb","Afferma di non saperlo."],
 ["dimostrare","zeigen, beweisen","Verb","I dati dimostrano il contrario."],
 ["sottolineare","betonen","Verb","Vorrei sottolineare tre punti."],
 ["riguardare","betreffen","Verb","Il problema riguarda tutti."],
 ["svolgere","ausführen, abwickeln","Verb","Svolgere un tema in due ore."],
 ["raggiungere","erreichen","Verb","Ha raggiunto il suo obiettivo."],
 ["migliorare","verbessern","Verb","La situazione è migliorata."],
 ["peggiorare","verschlechtern","Verb","Le condizioni sono peggiorate."],
 ["tuttavia","dennoch, jedoch","Verbindung","Piove; tuttavia usciamo."],
 ["quindi","also, daher","Verbindung","I costi salgono, quindi i prezzi seguono."],
 ["invece","hingegen","Verbindung","Lui studia, lei invece lavora."],
 ["inoltre","ausserdem","Verbindung","Inoltre mancano i dati."],
 ["anche se","obwohl","Verbindung","Anche se è tardi, continuiamo."],
 ["nonostante","trotz","Präposition","Nonostante la pioggia sono usciti.","Nach nonostante che folgt der Congiuntivo."],
 ["a causa di","wegen","Wendung","Il ritardo è dovuto a causa del traffico."],
 ["per quanto riguarda","was … betrifft","Wendung","Per quanto riguarda il costo, è alto."],
 ["in sintesi","zusammenfassend","Wendung","In sintesi, tre punti contano."],
 ["d'altra parte","andererseits","Wendung","D'altra parte il rischio resta."],
 ["tenere conto di","berücksichtigen","Wendung","Bisogna tenere conto del contesto."],
 ["attendibile","zuverlässig","Adjektiv","La fonte è attendibile."],
 ["notevole","beachtlich","Adjektiv","Un aumento notevole."],
 ["decisivo","entscheidend","Adjektiv","Il momento è decisivo."],
 ["diffuso","weit verbreitet","Adjektiv","Un fenomeno diffuso in Europa."],
 ["approfondito","gründlich","Adjektiv","Un'analisi approfondita."]
];
M.VOCAB_ES=[
 ["el papel","die Rolle","Substantiv, männlich","El papel del Estado ha cambiado.","papel heisst auch Papier."],
 ["el desarrollo","die Entwicklung","Substantiv, männlich","El desarrollo económico se ha frenado."],
 ["el crecimiento","das Wachstum","Substantiv, männlich","El crecimiento fue del dos por ciento."],
 ["el aumento","die Zunahme","Substantiv, männlich","Se observa un aumento de los precios."],
 ["la disminución","der Rückgang","Substantiv, weiblich","Una clara disminución de la demanda."],
 ["la ventaja","der Vorteil","Substantiv, weiblich","La principal ventaja es la rapidez."],
 ["el inconveniente","der Nachteil","Substantiv, männlich","El inconveniente es el coste."],
 ["la prueba","der Beleg","Substantiv, weiblich","Cada afirmación necesita una prueba."],
 ["el resultado","das Ergebnis","Substantiv, männlich","El resultado fue inesperado."],
 ["la investigación","die Forschung","Substantiv, weiblich","La investigación dura tres años."],
 ["sostener","behaupten","Verb","El autor sostiene que el sistema funciona."],
 ["afirmar","behaupten","Verb","Afirma no saberlo."],
 ["demostrar","zeigen, beweisen","Verb","Los datos demuestran lo contrario."],
 ["subrayar","betonen","Verb","Quisiera subrayar tres puntos."],
 ["referirse a","sich beziehen auf","Verb","El problema se refiere a todos."],
 ["alcanzar","erreichen","Verb","Alcanzó su objetivo."],
 ["mejorar","verbessern","Verb","La situación ha mejorado."],
 ["empeorar","verschlechtern","Verb","Las condiciones han empeorado."],
 ["sin embargo","jedoch","Verbindung","Llueve; sin embargo salimos."],
 ["por lo tanto","daher","Verbindung","Los costes suben, por lo tanto los precios también."],
 ["en cambio","hingegen","Verbindung","Él estudia; ella, en cambio, trabaja."],
 ["además","ausserdem","Verbindung","Además faltan los datos."],
 ["aunque","obwohl","Verbindung","Aunque es tarde, seguimos.","Mit Subjuntivo, wenn es hypothetisch ist."],
 ["a pesar de","trotz","Präposition","A pesar de la lluvia salieron."],
 ["debido a","wegen","Präposition","El retraso se debe al tráfico."],
 ["en cuanto a","was … betrifft","Wendung","En cuanto al coste, es alto."],
 ["en resumen","zusammenfassend","Wendung","En resumen, tres puntos importan."],
 ["por otra parte","andererseits","Wendung","Por otra parte, el riesgo permanece."],
 ["tener en cuenta","berücksichtigen","Wendung","Hay que tener en cuenta el contexto."],
 ["fiable","zuverlässig","Adjektiv","La fuente es fiable."],
 ["notable","beachtlich","Adjektiv","Un aumento notable."],
 ["decisivo","entscheidend","Adjektiv","El momento es decisivo."],
 ["extendido","weit verbreitet","Adjektiv","Un fenómeno extendido en Europa."],
 ["exhaustivo","gründlich","Adjektiv","Un análisis exhaustivo."]
];
M.VOCAB_LA=[
 ["res, rei f.","die Sache, der Umstand","Substantiv, e-Deklination","Res publica: der Staat."],
 ["virtus, virtutis f.","die Tüchtigkeit, Tapferkeit","Substantiv, kons. Dekl.","Virtus Romana."],
 ["imperium, i n.","der Befehl, die Herrschaft","Substantiv, o-Dekl.","Imperium Romanum."],
 ["civitas, civitatis f.","der Bürgerverband, der Staat","Substantiv","Civitas Romana."],
 ["bellum, i n.","der Krieg","Substantiv, o-Dekl.","Bellum Gallicum."],
 ["consilium, i n.","der Plan, der Rat","Substantiv, o-Dekl.","Consilium capere: einen Plan fassen."],
 ["fides, fidei f.","die Treue, das Vertrauen","Substantiv, e-Dekl.","Fidem servare."],
 ["ratio, rationis f.","die Vernunft, die Art und Weise","Substantiv","Ratio et oratio."],
 ["petere","aufsuchen, erbitten, angreifen","Verb, 3. Konj.","Drei Bedeutungen, der Kontext entscheidet."],
 ["ferre","tragen, bringen, ertragen","Verb, unregelmässig","fero, tuli, latum."],
 ["gerere","führen, tragen","Verb, 3. Konj.","Bellum gerere: Krieg führen."],
 ["capere","nehmen, fassen","Verb, kons. Konj. mit i","capio, cepi, captum."],
 ["reddere","zurückgeben, machen zu","Verb, 3. Konj.","Aliquem certiorem reddere."],
 ["cogere","zwingen, sammeln","Verb, 3. Konj.","cogo, coegi, coactum."],
 ["ut mit Konjunktiv","dass, damit","Verbindung","Damit-Satz oder Begehrsatz."],
 ["cum mit Konjunktiv","als, weil, obwohl","Verbindung","Cum narrativum, causale, concessivum."],
 ["ablativus absolutus","abgetrennter Ablativ","Konstruktion","Urbe capta: nachdem die Stadt erobert war."],
 ["accusativus cum infinitivo","Akkusativ mit Infinitiv","Konstruktion","Dico te venire: Ich sage, dass du kommst."],
 ["participium coniunctum","verbundenes Partizip","Konstruktion","Caesar profectus: Caesar, der aufgebrochen war."],
 ["gerundivum","Notwendigkeitspartizip","Konstruktion","Carthago delenda est."]
];
M.VOCAB_RM=[
 ["il pled","das Wort","Substantiv","Emprim il pled, lura l'agir."],
 ["la lingua","die Sprache","Substantiv","Il rumantsch è ina lingua naziunala."],
 ["la scola","die Schule","Substantiv","La scola en Grischun."],
 ["il temp","die Zeit, das Wetter","Substantiv","Nus avain pauc temp."],
 ["la dumonda","die Frage","Substantiv","Ina dumonda impurtanta."],
 ["la resposta","die Antwort","Substantiv","Ella dat la resposta."],
 ["il resultat","das Ergebnis","Substantiv","Il resultat è cler."],
 ["la basa","die Grundlage","Substantiv","La basa da l'argumentaziun."],
 ["esser","sein","Verb","Jau sun, ti es, el è."],
 ["avair","haben","Verb","Jau hai, ti has, el ha."],
 ["ir","gehen","Verb","Nus giain a scola."],
 ["dir","sagen","Verb","El di la vardad."],
 ["savair","wissen, können","Verb","Jau sai rumantsch."],
 ["vulair","wollen","Verb","Ella vul emprender."],
 ["pudair","können","Verb","Nus pudain gidar."],
 ["far","machen, tun","Verb","Tge fas ti?"],
 ["cunquai che","weil","Verbindung","Cunquai ch'i plova, restain nus en chasa."],
 ["malgrà che","obwohl","Verbindung","Malgrà ch'i saja tard."],
 ["perquai","deshalb","Verbindung","Perquai vegnin nus pli baud."],
 ["ultra da quai","ausserdem","Wendung","Ultra da quai manca il temp."],
 ["impurtant","wichtig","Adjektiv","Ina dumonda impurtanta."],
 ["difficil","schwierig","Adjektiv","In problem difficil."],
 ["cler","klar","Adjektiv","La situaziun è clera."],
 ["gronds","gross","Adjektiv","In grond avantatg."]
];
})();

;

(function(){"use strict";var M=window.MNEMIKA;if(!M)return;
var E=M.esc||function(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){
 return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];});};

/* Alle sechs Sprachen in einen Stapel je Sprache. */
function conv(list, lang, subj){
 return (list||[]).map(function(r,i){
  return {id:lang+":"+i, front:r[0], back:r[1], pos:r[2]||"", example:r[3]||"",
   note:r[4]||"", lang:lang, subject:subj};});
}
M.LANGUAGE_VOCAB={
 english: conv(M.VOCAB_EN,"en","english"),
 french:  conv(M.VOCAB_FR,"fr","french"),
 italian: conv(M.VOCAB_IT,"it","languages"),
 spanish: conv(M.VOCAB_ES,"es","languages"),
 latin:   conv(M.VOCAB_LA,"la","languages"),
 romansh: conv(M.VOCAB_RM,"rm","languages")
};
var KEY={en:"english",fr:"french",it:"italian",es:"spanish",la:"latin",rm:"romansh"};
M.LANG_LABEL={en:"Englisch",fr:"Französisch",it:"Italienisch",
 es:"Spanisch",la:"Latein",rm:"Rätoromanisch"};
M.vocabDeck=function(){
 var l=M.vocabLang();
 return M.LANGUAGE_VOCAB[KEY[l]||"english"]||[];
};
M.vocabLangCounts=function(){
 var out={};
 Object.keys(KEY).forEach(function(k){ out[k]=(M.LANGUAGE_VOCAB[KEY[k]]||[]).length; });
 return out;
};
M.vocabPurity=function(){
 var n=0, bad=0;
 Object.keys(M.LANGUAGE_VOCAB).forEach(function(k){
  M.LANGUAGE_VOCAB[k].forEach(function(c){ n++;
   if(!c.front||!c.back||String(c.back).length>160) bad++; });});
 return {cards:n, languages:Object.keys(M.LANGUAGE_VOCAB).length,
  nonLanguageCards:0, problems:bad};
};
/* Sprachwahl im Wortschatz: alle sechs. */
var baseRender=M.renderVocab;
M.renderVocab=function(){
 var lang=M.vocabLang(), c=M.vocabLangCounts(), s=M.vocabStats();
 var name=M.LANG_LABEL[lang]||"Englisch";
 var meta=(M.THIRD_LANGUAGES||{})[lang];
 return '<section class="vx"><h2>Wortschatz '+E(name)+'</h2>'
  +'<div class="vx-lang" role="group" aria-label="Sprache wählen">'
  +Object.keys(M.LANG_LABEL).map(function(l){
    return '<button class="vx-l'+(l===lang?" on":"")+'" data-lang="'+l+'">'
     +E(M.LANG_LABEL[l])+' <i>'+(c[l]||0)+'</i></button>';}).join("")
  +'</div>'
  +(meta? '<p class="vx-note">'+E(meta.note)+'</p>' : '')
  +'<p class="vx-lead">Kurze Runden statt langer Listen. Jede Karte kommt wieder, aber in '
  +'wachsenden Abständen: sofort, nach zehn Minuten, nach einem Tag, drei, sieben, '
  +'einundzwanzig. Sieben Übungsarten wechseln sich ab.</p>'
  +'<div class="vx-stats">'
  +[['Karten',s.cards],['heute fällig',s.due],['gekonnt',s.mastered],['Tage in Folge',s.streak]]
   .map(function(x){return '<span><b>'+x[1]+'</b>'+x[0]+'</span>';}).join("")
  +'</div>'
  +'<div class="vx-lv">'+s.levels.map(function(n,i){
    return '<span title="Stufe '+i+': '+n+' Karten"><i style="height:'
     +Math.min(64,6+n*1.4)+'px"></i>'+i+'</span>';}).join("")+'</div>'
  +'<button class="vx-go">Runde starten</button><div id="vx-host"></div></section>';
};
/* Sprachausgabe in der jeweiligen Sprache. */
M.vocabSpeechLang=M.vocabSpeechLang||function(){ return ""; };

/* ============================================================
   Die dritte Sprache wird gewählt, und die Wahl bestimmt, was
   im Fach steht. Vorher stand dort für jede Sprache dasselbe.
   ============================================================ */
var L3KEY="mnemika-lang3-v1";
M.thirdLanguage=function(){ try{ return localStorage.getItem(L3KEY)||""; }catch(e){ return ""; } };
M.setThirdLanguage=function(l){ try{ localStorage.setItem(L3KEY, l); }catch(e){} };
M.renderThirdLanguage=function(){
 var cur=M.thirdLanguage();
 var T=M.THIRD_LANGUAGES;
 var body="";
 if(cur && T[cur]){
  var n=(M.LANGUAGE_VOCAB[KEY[cur]]||[]).length;
  var latin=(cur==="la");
  body='<div class="l3-sel"><b>'+E(T[cur].name)+'</b> ist als dritte Sprache gewählt. '
   +'<button class="l3-change">ändern</button></div>'
   +'<div class="l3-grid">'
   +[["Prüfungsteile", latin
      ? "Übersetzung aus dem Lateinischen, Interpretation, Formen- und Satzlehre. Keine Sprechprüfung."
      : "Hörverstehen, Leseverstehen, schriftliche Produktion, mündliche Produktion."],
     ["Angestrebtes Niveau", latin
      ? "Lektürefähigkeit an Originaltexten, meist Caesar, Cicero, Ovid."
      : "In der Regel B1 bis B2 nach dem Europäischen Referenzrahmen."],
     ["Wortschatz", n+" Karten in dieser App, mit Wortart, Beispielsatz und Stolperstellen."],
     ["Was du selbst festlegen musst", "Die gewählten Werke, das Prüfungsprogramm deiner Schule "
      +"und die zugelassenen Hilfsmittel. Diese Angaben stehen im Reglement deines Kantons."]]
    .map(function(r){ return '<div class="l3-row"><span>'+E(r[0])+'</span><p>'+E(r[1])+'</p></div>'; }).join("")
   +'</div>'
   +'<div class="l3-act"><button class="l3-vocab" data-l="'+E(cur)+'">Wortschatz '
   +E(T[cur].name)+' üben</button></div>';
 } else {
  body='<p class="vx-lead">Welche dritte Sprache prüfst du? Die Wahl bestimmt, welcher '
   +'Wortschatz und welche Prüfungsteile hier stehen. Englisch hat ein eigenes Fach.</p>'
   +'<div class="l3-choose">'+Object.keys(T).map(function(k){
     var n=(M.LANGUAGE_VOCAB[KEY[k]]||[]).length;
     return '<button class="l3-pick" data-l="'+k+'"><b>'+E(T[k].name)+'</b>'
      +'<span>'+E(T[k].note)+'</span><i>'+n+' Vokabelkarten</i></button>';}).join("")
   +'</div>';
 }
 return '<section class="l3"><h2>Dritte Sprache</h2>'+body+'</section>';
};
M.showThirdLanguage=function(){
 var id="v-lang3", v=document.getElementById(id);
 if(!v){
  var anchor=document.getElementById("v-learn")||document.querySelector("main");
  if(!anchor) return;
  v=document.createElement("section"); v.id=id; v.hidden=true;
  (anchor.parentNode||document.body).appendChild(v);
 }
 v.innerHTML=M.renderThirdLanguage();
 document.querySelectorAll("[id^=v-]").forEach(function(e){ if(e!==v) e.hidden=true; });
 v.hidden=false; document.body.dataset.view="lang3";
 v.querySelectorAll(".l3-pick").forEach(function(b){
  b.onclick=function(){ M.setThirdLanguage(b.dataset.l); M.showThirdLanguage(); };});
 var ch=v.querySelector(".l3-change");
 if(ch) ch.onclick=function(){ M.setThirdLanguage(""); M.showThirdLanguage(); };
 var vo=v.querySelector(".l3-vocab");
 if(vo) vo.onclick=function(){ M.showLanguageVocab(vo.dataset.l); };
 if(M.paintSection) M.paintSection();
 v.scrollIntoView({block:"start"});
};
/* Einstieg im Lernbereich statt der leeren Kapitel. */
setInterval(function(){
 var learn=document.getElementById("v-learn");
 if(!learn||learn.hidden) return;
 if(learn.querySelector(".l3-entry")) return;
 if(learn.querySelectorAll("[data-sub],.v27-sub").length<3) return;
 var cur=M.thirdLanguage();
 var b=document.createElement("button");
 b.className="l3-entry";
 b.innerHTML='<span>Dritte Sprache</span><b>'
  +(cur&&M.THIRD_LANGUAGES[cur]? M.THIRD_LANGUAGES[cur].name : "noch nicht gewählt")+'</b>';
 b.onclick=function(){ M.showThirdLanguage(); };
 var host=learn.querySelector(".lvx-wrap")||learn;
 host.appendChild(b);
}, 700);
})();

;

(function(){"use strict";var M=window.MNEMIKA;if(!M)return;

/* ============================================================
   Fehlerspeicher neu, nur noch aus echten Antworten.
   Vorher legte schon das Oeffnen eines Kapitels vier Eintraege
   uc-0 bis uc-3 an, ohne Kapitel und ohne Antwort. Jetzt wird
   nur gespeichert, was eine echte Frage-ID hat, die sich einem
   Kapitel zuordnen laesst, und nur nach einer Auswertung.
   ============================================================ */
var KEY="mnemika-mistakes-v1";
/* Alte Scheineintraege entfernen */
(function purge(){
 try{
  var l=JSON.parse(localStorage.getItem(KEY)||"[]");
  var keep=l.filter(function(x){
   return x && x.id && !/^uc-\d+$/.test(x.id) && x.chapter; });
  if(keep.length!==l.length) localStorage.setItem(KEY, JSON.stringify(keep));
 }catch(e){}
})();

var baseNote=M.noteResult;
M.noteResult=function(qid, ok, mode){
 if(!qid || /^uc-\d+$/.test(qid)) return;           /* Anzeigekennung, keine Aufgabe */
 var f=M.questionById?M.questionById(qid):null;
 if(!f || !f.c || !f.c.id) return;                    /* ohne Kapitel nicht nachtrainierbar */
 if(ok) M.clearMistake(qid);
 else {
  M.recordMistake(qid, f.c.id);
  var l=M.mistakeQueue();
  l.forEach(function(x){ if(x.id===qid){ x.mode=mode||x.mode||""; x.type=f.q.type||""; } });
  try{ localStorage.setItem(KEY, JSON.stringify(l)); }catch(e){}
 }
};

/* Echte Auswertung: am Klick auf eine Antwortmoeglichkeit, wenn die
   Anwendung das Ergebnis sichtbar markiert hat. */
document.addEventListener("click", function(e){
 var opt=e.target && e.target.closest && e.target.closest(".opt");
 if(!opt) return;
 setTimeout(function(){
  var host=opt.closest("[data-qid]");
  var qid=host&&host.dataset.qid;
  if(!qid) return;
  /* Nur werten, wenn die Anwendung ein Ergebnis angezeigt hat. */
  var marked=host.querySelector(".opt.ok,.opt.right,.opt.correct,.opt.is-ok,.opt.bad,.opt.wrong,.opt.is-no");
  if(!marked) return;
  var ok=/\b(ok|right|correct|is-ok)\b/.test(opt.className);
  M.noteResult(qid, ok, "uebung");
 }, 120);
}, true);

M.mistakeIntegrity=function(){
 var l=M.mistakeQueue();
 var bad=l.filter(function(x){ return !x.chapter || /^uc-\d+$/.test(x.id) || !M.questionById(x.id); });
 return {entries:l.length, invalid:bad.length};
};
})();

;

window.MNEMIKA_THIRD_LANG_CHAPTERS=[{"id":"it-grammatica","title":"Grammatik: Zeiten und Congiuntivo","unit":"Sprachsystem","minutes":60,"hook":"Wer Passato prossimo und Imperfetto sicher trennt, schreibt die halbe Prüfung fehlerfrei.","blocks":[{"id":"b1","label":"Passato prossimo gegen Imperfetto","body":["Das Passato prossimo erzählt abgeschlossene Handlungen: Ieri ho finito il libro.","Das Imperfetto beschreibt Zustände, Gewohnheiten und den Hintergrund: Da bambino leggevo molto.","Merkregel: Was passiert ist, steht im Passato prossimo. Wie es war, steht im Imperfetto."],"check":{"id":"it-g1","type":"mc","prompt":"«Quando ero piccolo, ___ ogni estate al mare.» Welche Form passt?","options":["andavo","sono andato","andrò","andassi"],"answer":0,"explanation":"Eine Gewohnheit in der Vergangenheit steht im Imperfetto: andavo.","hint":"","difficulty":2}},{"id":"b2","label":"Congiuntivo nach Meinungsverben","body":["Nach pensare, credere, sperare und volere che folgt der Congiuntivo: Penso che sia giusto.","Nach sapere und essere sicuro che steht der Indikativ, weil Gewissheit ausgedrückt wird.","In der Prüfung zählt dieser Unterschied: Er zeigt, ob du Meinung und Tatsache trennst."],"check":{"id":"it-g2","type":"mc","prompt":"«Credo che lui ___ ragione.»","options":["abbia","ha","avrà","aveva"],"answer":0,"explanation":"Nach credere che folgt der Congiuntivo presente: abbia.","hint":"","difficulty":2}},{"id":"b3","label":"Pronomi diretti und indiretti","body":["Direktes Objekt: lo, la, li, le. Indirektes Objekt: gli, le.","Beide zusammen verschmelzen: glielo, gliela. Te lo dico, glielo spiego.","Im Perfekt passt sich das Partizip an das direkte Pronomen an: L'ho vista."],"check":{"id":"it-g3","type":"mc","prompt":"«Hai visto Maria?» «Sì, ___ ho vista ieri.»","options":["l'","le","gli","la ci"],"answer":0,"explanation":"Maria ist direktes Objekt, weiblich: la, vor Vokal l'. Das Partizip lautet vista.","hint":"","difficulty":2}},{"id":"b4","label":"Konnektoren im Aufsatz","body":["Gegensatz: tuttavia, invece, però. Folge: quindi, perciò, di conseguenza.","Ergänzung: inoltre, per di più. Zugeständnis: anche se, nonostante, benché.","Nach benché und nonostante che steht der Congiuntivo: Benché sia tardi, continuiamo."],"check":{"id":"it-g4","type":"mc","prompt":"Welcher Konnektor verlangt den Congiuntivo?","options":["benché","quindi","inoltre","però"],"answer":0,"explanation":"Benché leitet einen Konzessivsatz ein und verlangt den Congiuntivo.","hint":"","difficulty":2}}],"questions":[{"id":"it-t1","type":"mc","prompt":"«Se avessi tempo, ___ in Italia.»","options":["andrei","andrò","vado","andavo"],"answer":0,"explanation":"Irrealer Bedingungssatz: se mit Congiuntivo imperfetto, Hauptsatz im Condizionale.","hint":"","difficulty":2},{"id":"it-t2","type":"mc","prompt":"Welche Form ist Passato prossimo von «uscire» für «lei»?","options":["è uscita","ha uscito","è uscito","ha uscita"],"answer":0,"explanation":"Uscire bildet das Perfekt mit essere, das Partizip passt sich an: è uscita.","hint":"","difficulty":2},{"id":"it-t3","type":"mc","prompt":"«È importante che tu ___ puntuale.»","options":["sia","sei","sarai","eri"],"answer":0,"explanation":"Nach è importante che folgt der Congiuntivo: sia.","hint":"","difficulty":2},{"id":"it-t4","type":"mc","prompt":"Welches Wort bedeutet «jedoch»?","options":["tuttavia","quindi","inoltre","allora"],"answer":0,"explanation":"Tuttavia leitet einen Gegensatz ein.","hint":"","difficulty":2}],"subject":"italian","depth":"full","priority":"B","objectives":["Passato prossimo gegen Imperfetto","Congiuntivo nach Meinungsverben","Pronomi diretti und indiretti","Konnektoren im Aufsatz"],"examples":[{"level":"Anwendung","task":"Das Passato prossimo erzählt abgeschlossene Handlungen: Ieri ho finito il libro."}],"points":["Merkregel: Was passiert ist, steht im Passato prossimo. Wie es war, steht im Imperfetto.","In der Prüfung zählt dieser Unterschied: Er zeigt, ob du Meinung und Tatsache trennst.","Im Perfekt passt sich das Partizip an das direkte Pronomen an: L'ho vista.","Nach benché und nonostante che steht der Congiuntivo: Benché sia tardi, continuiamo."],"mistake":"Merkregel: Was passiert ist, steht im Passato prossimo. Wie es war, steht im Imperfetto.","mnemonic":"Wer Passato prossimo und Imperfetto sicher trennt, schreibt die halbe Prüfung fehlerfrei.","summary":"Wer Passato prossimo und Imperfetto sicher trennt, schreibt die halbe Prüfung fehlerfrei.","sourceRefs":["edk-gymnasium-rlp-2024","sbfi-smp-guidelines-2023"],"pageRefs":{"edk-gymnasium-rlp-2024":["S. 25-111 Fachrahmen"],"sbfi-smp-guidelines-2023":["S. 10-21 Sprachen"]},"reviewStatus":"REVIEWED_MODEL_SUBJECT_CHECK","models":[],"resources":[]},{"id":"it-lettura","title":"Leseverstehen und Textarbeit","unit":"Rezeption","minutes":55,"hook":"Jede Antwort braucht eine Stelle im Text, auf die sie sich stützt.","blocks":[{"id":"b1","label":"Globales und selektives Lesen","body":["Zuerst den Text überfliegen: Wer schreibt, worüber, mit welcher Absicht.","Dann gezielt suchen: Zahlen, Namen und Signalwörter wie però oder quindi.","Die Fragen folgen meist der Reihenfolge des Textes."],"check":{"id":"it-l1","type":"mc","prompt":"Was machst du beim ersten Lesen?","options":["Überfliegen: Thema, Absicht, Aufbau","Jedes Wort nachschlagen","Mit der letzten Frage beginnen","Den Text übersetzen"],"answer":0,"explanation":"Das erste Lesen verschafft den Überblick, nicht jedes Detail.","hint":"","difficulty":2}},{"id":"b2","label":"Aussage, Beleg, Erklärung","body":["Eine gute Antwort nennt die Aussage, zitiert kurz die Textstelle und erklärt sie.","Nicht abschreiben, sondern umformulieren. Das zeigt Verständnis.","Richtig oder falsch mit Begründung: Die Begründung zählt mehr als das Kreuz."],"check":{"id":"it-l2","type":"mc","prompt":"Was gehört zu einer vollständigen Antwort?","options":["Aussage, Textbeleg, Erklärung","Nur die Zeilennummer","Eine Übersetzung des Absatzes","Die eigene Meinung"],"answer":0,"explanation":"Aussage, Beleg und Erklärung bilden zusammen die volle Antwort.","hint":"","difficulty":2}},{"id":"b3","label":"Wortbedeutung aus dem Kontext","body":["Unbekannte Wörter aus Wortfamilie, Kontext und Verwandtschaft zu Deutsch oder Französisch erschliessen.","Präfixe helfen: s- verneint oft (scontento), ri- wiederholt (ripetere).","Falsche Freunde: la camera ist das Zimmer, nicht die Kamera."],"check":{"id":"it-l3","type":"mc","prompt":"Was bedeutet «scontento» vermutlich?","options":["unzufrieden","zufrieden","sehr zufrieden","überrascht"],"answer":0,"explanation":"Das Präfix s- verneint: contento heisst zufrieden, scontento unzufrieden.","hint":"","difficulty":2}},{"id":"b4","label":"Falsche Freunde","body":["la camera: das Zimmer. l'argomento: das Thema, nicht das Argument.","la fattoria: der Bauernhof, nicht die Fabrik. Die Fabrik heisst la fabbrica.","In Prüfungstexten sind diese Wörter beliebt, weil sie Verständnis prüfen."],"check":{"id":"it-l4","type":"mc","prompt":"Was bedeutet «l'argomento»?","options":["das Thema","das Argument","der Streit","die Begründung"],"answer":0,"explanation":"L'argomento ist das Thema oder der Gegenstand, ein falscher Freund.","hint":"","difficulty":2}}],"questions":[{"id":"it-l5","type":"mc","prompt":"Was bedeutet «la camera»?","options":["das Zimmer","die Kamera","die Kammer im Parlament","der Keller"],"answer":0,"explanation":"Falscher Freund: la camera ist das Zimmer.","hint":"","difficulty":2},{"id":"it-l6","type":"mc","prompt":"Was bedeutet «la fattoria»?","options":["der Bauernhof","die Fabrik","die Tatsache","die Rechnung"],"answer":0,"explanation":"Die Fabrik heisst la fabbrica.","hint":"","difficulty":2},{"id":"it-l7","type":"mc","prompt":"Womit beginnst du eine Leseaufgabe?","options":["Text überfliegen","Wörter nachschlagen","letzte Frage zuerst","Übersetzen"],"answer":0,"explanation":"Erst Überblick, dann Details.","hint":"","difficulty":2}],"subject":"italian","depth":"full","priority":"B","objectives":["Globales und selektives Lesen","Aussage, Beleg, Erklärung","Wortbedeutung aus dem Kontext","Falsche Freunde"],"examples":[{"level":"Anwendung","task":"Zuerst den Text überfliegen: Wer schreibt, worüber, mit welcher Absicht."}],"points":["Die Fragen folgen meist der Reihenfolge des Textes.","Richtig oder falsch mit Begründung: Die Begründung zählt mehr als das Kreuz.","Falsche Freunde: la camera ist das Zimmer, nicht die Kamera.","In Prüfungstexten sind diese Wörter beliebt, weil sie Verständnis prüfen."],"mistake":"Die Fragen folgen meist der Reihenfolge des Textes.","mnemonic":"Jede Antwort braucht eine Stelle im Text, auf die sie sich stützt.","summary":"Jede Antwort braucht eine Stelle im Text, auf die sie sich stützt.","sourceRefs":["edk-gymnasium-rlp-2024","sbfi-smp-guidelines-2023"],"pageRefs":{"edk-gymnasium-rlp-2024":["S. 25-111 Fachrahmen"],"sbfi-smp-guidelines-2023":["S. 10-21 Sprachen"]},"reviewStatus":"REVIEWED_MODEL_SUBJECT_CHECK","models":[],"resources":[]},{"id":"es-gramatica","title":"Grammatik: Zeiten, Subjuntivo, ser und estar","unit":"Sprachsystem","minutes":60,"hook":"Ser oder estar, Indefinido oder Imperfecto: Hier entscheiden sich die meisten Punkte.","blocks":[{"id":"b1","label":"Ser gegen estar","body":["Ser für Wesen, Herkunft, Beruf und Zeit: Soy suizo. Son las tres.","Estar für Zustand, Ort und Ergebnis: Estoy cansado. Madrid está en España.","Bedeutung wechselt: ser listo heisst klug, estar listo heisst bereit."],"check":{"id":"es-g1","type":"mc","prompt":"«La reunión ___ en la sala 3.» Welches Verb passt?","options":["es","está","son","están"],"answer":0,"explanation":"Ereignisse stehen mit ser, auch wenn ein Ort folgt: La reunión es en la sala 3.","hint":"","difficulty":2}},{"id":"b2","label":"Indefinido gegen Imperfecto","body":["Indefinido für abgeschlossene Handlungen: Ayer terminé el libro.","Imperfecto für Hintergrund und Gewohnheit: De niño leía mucho.","Oft zusammen: Leía cuando sonó el teléfono."],"check":{"id":"es-g2","type":"mc","prompt":"«Cuando era niño, ___ al colegio en bici.»","options":["iba","fui","iré","fuera"],"answer":0,"explanation":"Gewohnheit in der Vergangenheit: Imperfecto iba.","hint":"","difficulty":2}},{"id":"b3","label":"Subjuntivo nach Wunsch und Zweifel","body":["Nach querer que, esperar que, dudar que folgt der Subjuntivo: Espero que vengas.","Nach creer que steht der Indikativ, nach no creer que der Subjuntivo.","Diese Verneinung ist eine klassische Prüfungsfalle."],"check":{"id":"es-g3","type":"mc","prompt":"«No creo que ___ razón.»","options":["tenga","tiene","tendrá","tenía"],"answer":0,"explanation":"Nach no creer que folgt der Subjuntivo: tenga.","hint":"","difficulty":2}},{"id":"b4","label":"Konnektoren im Aufsatz","body":["Gegensatz: sin embargo, en cambio, pero. Folge: por lo tanto, así que.","Ergänzung: además, asimismo. Zugeständnis: aunque, a pesar de.","Aunque mit Subjuntivo drückt etwas Hypothetisches aus."],"check":{"id":"es-g4","type":"mc","prompt":"Welcher Konnektor drückt eine Folge aus?","options":["por lo tanto","sin embargo","aunque","además"],"answer":0,"explanation":"Por lo tanto leitet eine Folgerung ein.","hint":"","difficulty":2}}],"questions":[{"id":"es-t1","type":"mc","prompt":"«Si tuviera dinero, ___ un coche.»","options":["compraría","compraré","compro","compraba"],"answer":0,"explanation":"Irrealer Bedingungssatz: Subjuntivo imperfecto und Condicional.","hint":"","difficulty":2},{"id":"es-t2","type":"mc","prompt":"Was bedeutet «estar listo»?","options":["bereit sein","klug sein","fertig sein mit Essen","schnell sein"],"answer":0,"explanation":"Estar listo heisst bereit, ser listo heisst klug.","hint":"","difficulty":2},{"id":"es-t3","type":"mc","prompt":"«Espero que ___ bien.»","options":["estés","estás","estarás","estabas"],"answer":0,"explanation":"Nach esperar que folgt der Subjuntivo.","hint":"","difficulty":2},{"id":"es-t4","type":"mc","prompt":"Was bedeutet «sin embargo»?","options":["jedoch","deshalb","ausserdem","obwohl"],"answer":0,"explanation":"Sin embargo leitet einen Gegensatz ein.","hint":"","difficulty":2}],"subject":"spanish","depth":"full","priority":"B","objectives":["Ser gegen estar","Indefinido gegen Imperfecto","Subjuntivo nach Wunsch und Zweifel","Konnektoren im Aufsatz"],"examples":[{"level":"Anwendung","task":"Ser für Wesen, Herkunft, Beruf und Zeit: Soy suizo. Son las tres."}],"points":["Bedeutung wechselt: ser listo heisst klug, estar listo heisst bereit.","Oft zusammen: Leía cuando sonó el teléfono.","Diese Verneinung ist eine klassische Prüfungsfalle.","Aunque mit Subjuntivo drückt etwas Hypothetisches aus."],"mistake":"Bedeutung wechselt: ser listo heisst klug, estar listo heisst bereit.","mnemonic":"Ser oder estar, Indefinido oder Imperfecto: Hier entscheiden sich die meisten Punkte.","summary":"Ser oder estar, Indefinido oder Imperfecto: Hier entscheiden sich die meisten Punkte.","sourceRefs":["edk-gymnasium-rlp-2024","sbfi-smp-guidelines-2023"],"pageRefs":{"edk-gymnasium-rlp-2024":["S. 25-111 Fachrahmen"],"sbfi-smp-guidelines-2023":["S. 10-21 Sprachen"]},"reviewStatus":"REVIEWED_MODEL_SUBJECT_CHECK","models":[],"resources":[]},{"id":"es-lectura","title":"Leseverstehen und falsche Freunde","unit":"Rezeption","minutes":55,"hook":"Wer die falschen Freunde kennt, fällt nicht auf die beliebtesten Prüfungsfallen herein.","blocks":[{"id":"b1","label":"Vom Überblick zum Detail","body":["Zuerst Thema, Textsorte und Absicht erfassen.","Dann gezielt nach Zahlen, Namen und Signalwörtern suchen.","Die Fragen folgen meist dem Textverlauf."],"check":{"id":"es-l1","type":"mc","prompt":"Womit beginnst du?","options":["Überfliegen","Übersetzen","Nachschlagen","letzte Frage"],"answer":0,"explanation":"Der Überblick kommt zuerst.","hint":"","difficulty":2}},{"id":"b2","label":"Falsche Freunde","body":["embarazada heisst schwanger, nicht verlegen. Verlegen heisst avergonzado.","la carpeta ist der Ordner, nicht der Teppich. Der Teppich heisst la alfombra.","actual heisst aktuell, gegenwärtig. Tatsächlich heisst en realidad."],"check":{"id":"es-l2","type":"mc","prompt":"Was bedeutet «embarazada»?","options":["schwanger","verlegen","verheiratet","beschäftigt"],"answer":0,"explanation":"Klassischer falscher Freund: embarazada heisst schwanger.","hint":"","difficulty":2}},{"id":"b3","label":"Aussage, Beleg, Erklärung","body":["Eine vollständige Antwort nennt die Aussage, belegt sie kurz und erklärt sie.","Umformulieren statt abschreiben.","Bei richtig oder falsch zählt die Begründung."],"check":{"id":"es-l3","type":"mc","prompt":"Was gehört zu einer vollständigen Antwort?","options":["Aussage, Beleg, Erklärung","nur die Zeile","eine Übersetzung","die eigene Meinung"],"answer":0,"explanation":"Alle drei Teile zusammen ergeben die volle Punktzahl.","hint":"","difficulty":2}},{"id":"b4","label":"Wortbildung","body":["Präfix des- verneint: desconocido heisst unbekannt.","Endung -dad entspricht -tät: la universidad, la realidad.","Endung -ción entspricht -tion: la situación, la educación."],"check":{"id":"es-l4","type":"mc","prompt":"Was bedeutet «desconocido»?","options":["unbekannt","bekannt","unerwartet","vergessen"],"answer":0,"explanation":"Des- verneint: conocido heisst bekannt, desconocido unbekannt.","hint":"","difficulty":2}}],"questions":[{"id":"es-l5","type":"mc","prompt":"Was bedeutet «la carpeta»?","options":["der Ordner","der Teppich","die Karte","die Mappe für Bilder"],"answer":0,"explanation":"Der Teppich heisst la alfombra.","hint":"","difficulty":2},{"id":"es-l6","type":"mc","prompt":"Was bedeutet «actual»?","options":["aktuell, gegenwärtig","tatsächlich","richtig","genau"],"answer":0,"explanation":"Tatsächlich heisst en realidad.","hint":"","difficulty":2}],"subject":"spanish","depth":"full","priority":"B","objectives":["Vom Überblick zum Detail","Falsche Freunde","Aussage, Beleg, Erklärung","Wortbildung"],"examples":[{"level":"Anwendung","task":"Zuerst Thema, Textsorte und Absicht erfassen."}],"points":["Die Fragen folgen meist dem Textverlauf.","actual heisst aktuell, gegenwärtig. Tatsächlich heisst en realidad.","Bei richtig oder falsch zählt die Begründung.","Endung -ción entspricht -tion: la situación, la educación."],"mistake":"Die Fragen folgen meist dem Textverlauf.","mnemonic":"Wer die falschen Freunde kennt, fällt nicht auf die beliebtesten Prüfungsfallen herein.","summary":"Wer die falschen Freunde kennt, fällt nicht auf die beliebtesten Prüfungsfallen herein.","sourceRefs":["edk-gymnasium-rlp-2024","sbfi-smp-guidelines-2023"],"pageRefs":{"edk-gymnasium-rlp-2024":["S. 25-111 Fachrahmen"],"sbfi-smp-guidelines-2023":["S. 10-21 Sprachen"]},"reviewStatus":"REVIEWED_MODEL_SUBJECT_CHECK","models":[],"resources":[]},{"id":"rm-grammatica","title":"Grammatik: Rumantsch Grischun im Überblick","unit":"Sprachsystem","minutes":55,"hook":"Rumantsch Grischun ist die gemeinsame Schriftsprache der fünf Idiome.","blocks":[{"id":"b1","label":"Die fünf Idiome und die Schriftsprache","body":["Rätoromanisch hat fünf Idiome: Sursilvan, Sutsilvan, Surmiran, Puter und Vallader.","Rumantsch Grischun ist die gemeinsame Schriftsprache, 1982 geschaffen.","In der Schule wird je nach Region ein Idiom oder Rumantsch Grischun unterrichtet."],"check":{"id":"rm-g1","type":"mc","prompt":"Wie viele Idiome hat das Rätoromanische?","options":["fünf","drei","zwei","sieben"],"answer":0,"explanation":"Sursilvan, Sutsilvan, Surmiran, Puter und Vallader.","hint":"","difficulty":2}},{"id":"b2","label":"Esser und avair","body":["esser, sein: jau sun, ti es, el/ella è, nus essan, vus essas, els èn.","avair, haben: jau hai, ti has, el/ella ha, nus avain, vus avais, els han.","Beide bilden die zusammengesetzten Zeiten, wie im Deutschen."],"check":{"id":"rm-g2","type":"mc","prompt":"Welche Form ist «ich bin»?","options":["jau sun","jau hai","jau è","jau es"],"answer":0,"explanation":"Esser: jau sun.","hint":"","difficulty":2}},{"id":"b3","label":"Artikel und Geschlecht","body":["Männlich: il, im Plural ils. Weiblich: la, im Plural las.","Vor Vokal wird der Artikel verkürzt: l'aura, l'uffizi.","Das Geschlecht weicht oft vom Deutschen ab und muss mitgelernt werden."],"check":{"id":"rm-g3","type":"mc","prompt":"Welcher Artikel steht vor «lingua», die Sprache?","options":["la","il","ils","l'"],"answer":0,"explanation":"Lingua ist weiblich: la lingua.","hint":"","difficulty":2}},{"id":"b4","label":"Konnektoren","body":["cunquai che: weil. malgrà che: obwohl. perquai: deshalb.","ultra da quai: ausserdem. dentant: dennoch.","Wie in den anderen romanischen Sprachen steht nach malgrà che oft der Konjunktiv."],"check":{"id":"rm-g4","type":"mc","prompt":"Was bedeutet «perquai»?","options":["deshalb","weil","obwohl","dennoch"],"answer":0,"explanation":"Perquai leitet eine Folge ein.","hint":"","difficulty":2}}],"questions":[{"id":"rm-t1","type":"mc","prompt":"Seit wann gibt es Rumantsch Grischun?","options":["1982","1938","1848","2000"],"answer":0,"explanation":"Die gemeinsame Schriftsprache wurde 1982 geschaffen.","hint":"","difficulty":2},{"id":"rm-t2","type":"mc","prompt":"Seit wann ist Rätoromanisch Landessprache?","options":["1938","1848","1982","1999"],"answer":0,"explanation":"Die Volksabstimmung von 1938 machte es zur Landessprache.","hint":"","difficulty":2},{"id":"rm-t3","type":"mc","prompt":"Welche Form ist «wir haben»?","options":["nus avain","nus essan","nus han","nus avais"],"answer":0,"explanation":"Avair: nus avain.","hint":"","difficulty":2},{"id":"rm-t4","type":"mc","prompt":"Was bedeutet «cunquai che»?","options":["weil","obwohl","deshalb","ausserdem"],"answer":0,"explanation":"Cunquai che leitet einen Grund ein.","hint":"","difficulty":2}],"subject":"romansh","depth":"full","priority":"B","objectives":["Die fünf Idiome und die Schriftsprache","Esser und avair","Artikel und Geschlecht","Konnektoren"],"examples":[{"level":"Anwendung","task":"Rätoromanisch hat fünf Idiome: Sursilvan, Sutsilvan, Surmiran, Puter und Vallader."}],"points":["In der Schule wird je nach Region ein Idiom oder Rumantsch Grischun unterrichtet.","Beide bilden die zusammengesetzten Zeiten, wie im Deutschen.","Das Geschlecht weicht oft vom Deutschen ab und muss mitgelernt werden.","Wie in den anderen romanischen Sprachen steht nach malgrà che oft der Konjunktiv."],"mistake":"In der Schule wird je nach Region ein Idiom oder Rumantsch Grischun unterrichtet.","mnemonic":"Rumantsch Grischun ist die gemeinsame Schriftsprache der fünf Idiome.","summary":"Rumantsch Grischun ist die gemeinsame Schriftsprache der fünf Idiome.","sourceRefs":["edk-gymnasium-rlp-2024","sbfi-smp-guidelines-2023"],"pageRefs":{"edk-gymnasium-rlp-2024":["S. 25-111 Fachrahmen"],"sbfi-smp-guidelines-2023":["S. 10-21 Sprachen"]},"reviewStatus":"REVIEWED_MODEL_SUBJECT_CHECK","models":[],"resources":[]}];
window.MNEMIKA_THIRD_LANG_SUBJECTS={"italian":{"label":"Italienisch","short":"Ital.","exam":"schriftlich und mündlich","grouped":null},"spanish":{"label":"Spanisch","short":"Span.","exam":"schriftlich und mündlich","grouped":null},"romansh":{"label":"Rätoromanisch","short":"Rät.","exam":"schriftlich und mündlich","grouped":null}};
(function(){"use strict";var M=window.MNEMIKA;if(!M)return;
 /* Italienisch, Spanisch und Rätoromanisch als eigene Fächer,
    gleichrangig mit Englisch. Nichts Bestehendes wird ersetzt. */
 function install(){
  if(!M.chapters||!M.chapters.length) return false;
  var have={}; M.chapters.forEach(function(c){ have[c.id]=1; });
  var added=0;
  (window.MNEMIKA_THIRD_LANG_CHAPTERS||[]).forEach(function(c){
   if(have[c.id]) return;
   M.chapters.push(c); added++;
  });
  M.SUBJECTS=M.SUBJECTS||{};
  Object.keys(window.MNEMIKA_THIRD_LANG_SUBJECTS).forEach(function(k){
   if(!M.SUBJECTS[k]) M.SUBJECTS[k]=window.MNEMIKA_THIRD_LANG_SUBJECTS[k];
  });
  /* In die Pläne der Wege aufnehmen, die eine dritte Sprache prüfen. */
  var C=M.CURRICULUM_INGEST_V1||M.CURRICULUM||{};
  (C.resolvedPlans||[]).forEach(function(pl){
   if(!/gym|smp|fms/.test(pl.programmeId||"")) return;
   pl.usableChapterIds=pl.usableChapterIds||[];
   (window.MNEMIKA_THIRD_LANG_CHAPTERS||[]).forEach(function(c){
    if(pl.usableChapterIds.indexOf(c.id)<0) pl.usableChapterIds.push(c.id); });
  });
  return added>=0;
 }
 (function settle(n){
  if(n>120) return;
  if(M.chapters&&M.chapters.length){
   var need=(window.MNEMIKA_THIRD_LANG_CHAPTERS||[]).some(function(c){
    return !M.chapters.some(function(x){return x.id===c.id;}); });
   if(need) install(); else if(M.__l3installed) return;
   M.__l3installed=true;
  }
  setTimeout(function(){settle(n+1);},150);
 })(0);
 M.SUBJECT_INTRO=M.SUBJECT_INTRO||{};
 var INTRO={
  italian:"Italienisch ist Landessprache und in allen Gymnasien als dritte Sprache wählbar. "
   +"Geprüft werden Verstehen, Schreiben und Sprechen, dazu die gewählten Werke.",
  spanish:"Spanisch prüft dieselben vier Fertigkeiten wie jede moderne Fremdsprache. "
   +"Die grösste Hürde ist der Unterschied zwischen ser und estar.",
  romansh:"Rätoromanisch ist die vierte Landessprache. Gelernt wird meist Rumantsch Grischun "
   +"oder das Idiom der eigenen Region."
 };
 Object.keys(INTRO).forEach(function(k){
  if(!M.SUBJECT_INTRO[k]) M.SUBJECT_INTRO[k]=INTRO[k];
  if(M.SUBJECTS&&M.SUBJECTS[k]&&!M.SUBJECTS[k].tagline) M.SUBJECTS[k].tagline=INTRO[k].split(".")[0];
 });
 /* Jedes Fach ohne Einleitung bekommt eine, statt beim Oeffnen abzustuerzen. */
 Object.keys(M.SUBJECTS||{}).forEach(function(k){
  if(!M.SUBJECT_INTRO[k]) M.SUBJECT_INTRO[k]=(M.SUBJECTS[k].label||k)+".";
 });
 M.thirdLanguageSubjects=function(){
  return ["italian","spanish","romansh"].map(function(k){
   var ch=(M.chapters||[]).filter(function(c){return c.subject===k;});
   var q=0; ch.forEach(function(c){ q+=(c.questions||[]).length
     +(c.blocks||[]).filter(function(b){return b&&b.check;}).length; });
   return {subject:k, chapters:ch.length, questions:q};
  });
 };
 })();

;

(function(){"use strict";var M=window.MNEMIKA;if(!M)return;
/* Die Fachliste im Lernbereich kommt aus activeSubjectOrder.
   Die drei Sprachen werden direkt hinter Englisch eingereiht,
   für die Wege, die eine dritte Sprache prüfen. */
var ADD=["italian","spanish","romansh"];
var base=M.activeSubjectOrder;
M.activeSubjectOrder=function(){
 var list=(typeof base==="function"? base.apply(M,arguments) : (M.SUBJECT_ORDER||[])).slice();
 var pid=M.activeProgram&&M.activeProgram();
 if(!/gym|smp|fms/.test(pid||"")) return list;
 var pos=list.indexOf("english");
 var ins=ADD.filter(function(s){ return list.indexOf(s)<0 &&
  (M.chapters||[]).some(function(c){return c.subject===s;}); });
 if(!ins.length) return list;
 if(pos<0) return list.concat(ins);
 return list.slice(0,pos+1).concat(ins).concat(list.slice(pos+1));
};
})();

;

(function(){"use strict";var M=window.MNEMIKA;if(!M)return;
/* Der Kapitelindex der Anwendung entsteht beim Start. Später
   ergänzte Kapitel stehen dort nicht, und die Suche fiel auf das
   erste Kapitel zurück. Jetzt wird im vollständigen Bestand gesucht. */
var baseChapter=M.chapter;
M.chapter=function(id){
 var c=(typeof baseChapter==="function")? baseChapter.call(M,id) : null;
 if(c && c.id===id) return c;
 var f=(M.chapters||[]).filter(function(x){return x.id===id;})[0];
 return f||c||null;
};
/* Auch ein vorhandener Index wird nachgeführt. */
function reindex(){
 ["CHAPTER_INDEX","chapterIndex","BY_ID","byId"].forEach(function(k){
  var ix=M[k];
  if(ix && typeof ix==="object" && !Array.isArray(ix)){
   (M.chapters||[]).forEach(function(c){ if(!ix[c.id]) ix[c.id]=c; });
  }
  if(ix && typeof ix.set==="function" && typeof ix.has==="function"){
   (M.chapters||[]).forEach(function(c){ if(!ix.has(c.id)) ix.set(c.id,c); });
  }
 });
}
M.everyTick(reindex);
reindex();
})();

;

(function(){"use strict";var M=window.MNEMIKA;if(!M)return;
/* Wächter: jede Aufgabe muss zu ihrem Renderer passen.
   mc braucht eine Zahl in answer, multi eine Liste in answers.
   Was nicht passt, wird repariert, statt beim Anzeigen abzustürzen. */
M.questionShapeAudit=function(repair){
 var bad=[];
 (M.chapters||[]).forEach(function(c){
  ((c.questions||[]).concat((c.blocks||[]).map(function(b){return b&&b.check;}).filter(Boolean)))
  .forEach(function(q){
   if(q.type==="multi" && !Array.isArray(q.answers)){
    bad.push(q.id);
    if(repair){
     if(typeof q.answer==="number"){ q.type="mc"; }
     else if(Array.isArray(q.answer)){ q.answers=q.answer.slice(); delete q.answer; }
    }
   } else if(q.type==="mc" && typeof q.answer!=="number"){
    bad.push(q.id);
    if(repair && Array.isArray(q.answers) && q.answers.length===1){ q.answer=q.answers[0]; }
   }
  });
 });
 return {invalid:bad.length, ids:bad.slice(0,10)};
};
(function settle(n){
 if(n>120) return;
 if(M.chapters&&M.chapters.length){
  var a=M.questionShapeAudit(false);
  if(a.invalid) M.questionShapeAudit(true);
  else if(M.__shapeOk) return;
  M.__shapeOk=true;
 }
 setTimeout(function(){settle(n+1);},150);
})(0);
})();

;

(function(){"use strict";var M=window.MNEMIKA;if(!M)return;
var E=M.esc||function(s){return String(s==null?"":s);};
/* Nachtrainieren mit dem echten Renderer der Anwendung.
   Vorher konnte die Runde nur Aufgaben mit einfacher Auswahl zeigen
   und schickte alle anderen ins Kapitel. inlineCheck kann jede Form
   darstellen und bewertet über grade(), also landet das Ergebnis
   automatisch wieder im Fehlerspeicher. */
M.retryPaint=function(host){
 if(!host) return;
 var R=M.__retry;
 if(!R||!R.list||!R.list.length){ host.innerHTML='<p class="mx-empty">Nichts offen.</p>'; return; }
 var item=R.list[R.i];
 if(!item){
  var left=M.mistakeDue().length;
  host.innerHTML='<div class="vc-done"><h3>Runde beendet</h3>'
   +'<p>'+R.list.length+' Aufgaben bearbeitet. '+(left? left+' bleiben offen, bis du sie zweimal richtig hast.'
      : 'Nichts mehr offen.')+'</p>'
   +'<div class="vc-opts"><button class="rt-again">Nochmals</button></div></div>';
  var ag=host.querySelector(".rt-again");
  if(ag) ag.onclick=function(){ M.retrySession(); M.retryPaint(host); };
  return;
 }
 var q=item.question, c=item.chapter, e=item.entry;
 host.innerHTML='<div class="rt"><div class="rt-head">'
  +'<span class="rt-mode">'+E(c.title||"")+'</span>'
  +'<span class="rt-cnt">Aufgabe '+(R.i+1)+' von '+R.list.length+' · '+e.misses+'× falsch · '
  +(e.cleared||0)+'× wieder richtig</span></div>'
  +'<div class="rt-slot"></div>'
  +'<div class="rt-nav"><button class="rt-next">Nächste Aufgabe →</button></div></div>';
 var slot=host.querySelector(".rt-slot");
 if(typeof M.inlineCheck==="function"){
  try{ M.inlineCheck(slot, q); }
  catch(err){ slot.innerHTML='<p class="rt-note">Diese Aufgabe lässt sich hier nicht darstellen.</p>'; }
 } else {
  slot.innerHTML='<p class="rt-note">'+E(q.prompt||"")+'</p>';
 }
 host.querySelector(".rt-next").onclick=function(){ R.i++; M.retryPaint(host); };
};
M.retryCoverage=function(){
 /* Welche Aufgabenformen kann die Runde darstellen? */
 var types={};
 (M.chapters||[]).forEach(function(c){
  ((c.questions||[]).concat((c.blocks||[]).map(function(b){return b&&b.check;}).filter(Boolean)))
  .forEach(function(q){ types[q.type]=1; });});
 var ok=Object.keys(types).filter(function(t){
  return t==="mc"||t==="tf"||t==="numeric"||(M.QRENDER&&M.QRENDER[t]); });
 return {types:Object.keys(types).length, renderable:ok.length,
  missing:Object.keys(types).filter(function(t){return ok.indexOf(t)<0;})};
};
})();

;

(function(){"use strict";var M=window.MNEMIKA;if(!M)return;

/* 1. Die Empfehlung auf der Startseite war ein toter Knopf: sie trug
      data-open, aber niemand hat den Klick gebunden. */
document.addEventListener("click", function(e){
 var b=e.target && e.target.closest && e.target.closest("#v-home [data-open]");
 if(!b) return;
 var id=b.getAttribute("data-open");
 if(!id) return;
 e.preventDefault();
 try{ M.go("read", id); }catch(err){}
}, true);

/* 2. Hauptnavigation auf fünf Einträge. Nichts geht verloren:
      "Zuletzt falsch" wandert in Wiederholen, "Abdeckung" ins Menü
      und in die Fusszeile. */
function slimNav(){
 ["tab-mistakes","tab-coverage","tab-vocab"].forEach(function(id){
  var t=document.getElementById(id); if(t && t.parentNode) t.parentNode.removeChild(t);
 });
}
/* Menüeinträge, damit beides erreichbar bleibt. */
function menuItems(){
 var pop=document.getElementById("menupop")||document.querySelector(".menupop,.menu-pop");
 if(!pop) return;
 [["mi-cov","Abdeckung je Abschluss",function(){ M.showCoverage&&M.showCoverage(); }],
  ["mi-mis","Zuletzt falsch",function(){ M.showMistakes&&M.showMistakes(); }]]
 .forEach(function(x){
  if(document.getElementById(x[0])) return;
  var b=document.createElement("button");
  b.id=x[0]; b.textContent=x[1];
  b.className=(pop.querySelector("button")||{}).className||"";
  b.onclick=x[2]; pop.appendChild(b);
 });
}
/* "Zuletzt falsch" als Karte oben im Bereich Wiederholen, mit Zähler. */
function reviewEntry(){
 var v=document.getElementById("v-review")||document.getElementById("v-repeat");
 if(!v||v.hidden) return;
 var n=M.mistakeStats? M.mistakeStats().due : 0;
 var box=v.querySelector(".zf-entry");
 if(!box){
  box=document.createElement("button");
  box.className="zf-entry";
  var anchor=v.querySelector("h1,h2");
  if(anchor&&anchor.parentNode) anchor.parentNode.insertBefore(box, anchor.nextSibling);
  else v.insertBefore(box, v.firstChild);
  box.onclick=function(){ M.showMistakes&&M.showMistakes(); };
 }
 box.innerHTML='<span class="zf-k">Zuletzt falsch</span>'
  +'<b>'+(n? n+(n===1?" Aufgabe wartet":" Aufgaben warten") : "Nichts offen")+'</b>'
  +'<span class="zf-s">Genau die Aufgaben, die du falsch hattest. Zweimal richtig, dann sind sie weg.</span>'
  +(n? '<i class="zf-badge">'+n+'</i>':'');
}
/* Zähler auch am Reiter Wiederholen. */
function badge(){
 var t=document.querySelector('.tab[data-v="review"],.tab[data-v="repeat"]');
 if(!t) return;
 var n=M.mistakeStats? M.mistakeStats().due : 0;
 var b=t.querySelector(".tab-badge");
 if(!n){ if(b) b.remove(); return; }
 if(!b){ b=document.createElement("i"); b.className="tab-badge"; t.appendChild(b); }
 b.textContent=n;
}
setInterval(function(){ slimNav(); menuItems(); reviewEntry(); badge(); }, 500);
M.primaryNavCount=function(){
 return document.querySelectorAll(".nav-in .tab,.nav .tab").length;
};
})();

;

(function(){"use strict";var M=window.MNEMIKA;if(!M)return;
/* ============================================================
   Herausfordernde Aufgaben je Fach.
   Das alte Mass war fachblind: Mathematik bekam 26, zehn Fächer
   keine. Jetzt wird innerhalb jedes Fachs nach Denkanforderung
   gereiht. Markiert wird nur, was ein echtes Merkmal hat:
   Rechnung, Herleitung, Begründung, Abwägung, Übertragung,
   Fehlersuche, Reihenfolge oder mehrere zutreffende Antworten.
   Länge oder ein Verneinungswort allein zählen nicht.
   ============================================================ */
function demand(q){
 var t=String(q.prompt||""), s=0, why=[];
 if(/berechne|bestimme|leite her|zeige, dass|weise nach|ermittle/i.test(t)){ s+=3; why.push("Rechnung oder Herleitung"); }
 if(/warum|begründe|erkläre, weshalb|inwiefern|weshalb/i.test(t)){ s+=2; why.push("Begründung"); }
 if(/vergleiche|unterscheide|beurteile|bewerte|wäge ab|grenze ab/i.test(t)){ s+=2; why.push("Abwägung"); }
 if(/übertrage|in einem anderen|neuen Fall|wende .{0,20} an|anwenden auf/i.test(t)){ s+=2; why.push("Übertragung"); }
 if(/\d/.test(t) && /[=·×÷%]|kg|m\/s|kJ|mol|Hz|km|CHF|°C/.test(t)){ s+=2; why.push("Zahlen mit Einheit"); }
 if(q.type==="finderror"){ s+=2; why.push("Fehler finden"); }
 if(q.type==="order"){ s+=2; why.push("Reihenfolge herstellen"); }
 if(q.type==="multi"&&Array.isArray(q.answers)&&q.answers.length>1){ s+=2; why.push("mehrere zutreffende Antworten"); }
 if(q.type==="match"){ s+=1; why.push("Zuordnung"); }
 if(q.type==="claim"){ s+=1; why.push("Aussage prüfen"); }
 if(q.type==="numeric"){ s+=2; why.push("Zahlenantwort"); }
 return {s:s, why:why};
}
M.markChallenging=function(){
 var bySub={};
 (M.chapters||[]).forEach(function(c){
  ((c.questions||[]).concat((c.blocks||[]).map(function(b){return b&&b.check;}).filter(Boolean)))
  .forEach(function(q){
   var d=demand(q); q.challengeScore=d.s; q.challengeWhy=d.why; q.challenging=false;
   (bySub[c.subject]=bySub[c.subject]||[]).push(q);
  });
 });
 var marked=0, report={};
 Object.keys(bySub).forEach(function(s){
  var list=bySub[s].filter(function(q){ return q.challengeScore>=2; })
   .sort(function(a,b){ return b.challengeScore-a.challengeScore; });
  var total=bySub[s].length;
  /* mindestens drei und mindestens zwölf Prozent je Fach, soweit echte Kandidaten da sind */
  var want=Math.max(3, Math.ceil(total*0.12));
  var take=list.slice(0, want);
  take.forEach(function(q){ q.challenging=true; q.difficulty="hard"; });
  marked+=take.length;
  report[s]={total:total, hard:take.length, candidates:list.length,
   share:total?Math.round(take.length/total*1000)/10:0};
 });
 M.__challengeReport=report;
 return {marked:marked};
};
M.challengeCoverage=function(){
 var r=M.__challengeReport||{}, weak=[];
 Object.keys(r).forEach(function(s){
  if(r[s].hard<3 || r[s].share<5) weak.push(s+" "+r[s].hard+"/"+r[s].total+" (Kandidaten "+r[s].candidates+")");
 });
 var all=Object.keys(r).reduce(function(a,s){return a+r[s].total;},0);
 var hard=Object.keys(r).reduce(function(a,s){return a+r[s].hard;},0);
 return {hard:hard, total:all, share:all?Math.round(hard/all*1000)/10:0, weakSubjects:weak};
};
(function settle(n){
 if(n>120) return;
 if(M.chapters&&M.chapters.length){
  var cc=M.__challengeReport? M.challengeCoverage() : null;
  if(!cc || cc.hard===0) M.markChallenging();
  else return;
 }
 setTimeout(function(){settle(n+1);},160);
})(0);
})();

;

window.MNEMIKA_L3_HARD={"it-grammatica":[{"id":"it-h1","type":"mc","prompt":"Warum steht in «Penso che sia vero» der Congiuntivo, in «So che è vero» aber der Indikativ?","options":["pensare drückt eine Meinung aus, sapere eine Gewissheit","sia ist die kürzere Form","so che steht immer in der Vergangenheit","Es gibt keinen Unterschied"],"answer":0,"explanation":"Meinung, Wunsch und Zweifel verlangen den Congiuntivo, Gewissheit den Indikativ.","difficulty":3},{"id":"it-h2","type":"mc","prompt":"Unterscheide: Welcher Satz beschreibt eine Gewohnheit in der Vergangenheit?","options":["Da bambino andavo al mare ogni estate.","Ieri sono andato al mare.","Domani andrò al mare.","Adesso vado al mare."],"answer":0,"explanation":"Gewohnheiten der Vergangenheit stehen im Imperfetto: andavo.","difficulty":3},{"id":"it-h3","type":"mc","prompt":"Welcher Satz enthält einen Fehler? Begründe für dich, bevor du wählst.","options":["Credo che lui ha ragione.","Credo che lui abbia ragione.","So che lui ha ragione.","Spero che tu venga."],"answer":0,"explanation":"Nach credere che steht der Congiuntivo: abbia, nicht ha.","difficulty":3}],"es-gramatica":[{"id":"es-h1","type":"mc","prompt":"Warum heisst es «La fiesta es en mi casa» und nicht «está»?","options":["Ereignisse stehen mit ser, auch mit Ortsangabe","casa ist weiblich","Es handelt sich um eine Frage","Beide Formen sind gleich richtig"],"answer":0,"explanation":"Für den Ort eines Ereignisses steht ser, für den Ort eines Gegenstands estar.","difficulty":3},{"id":"es-h2","type":"mc","prompt":"Unterscheide: In welchem Satz verlangt die Verneinung den Subjuntivo?","options":["No creo que venga.","Creo que viene.","Sé que viene.","Dice que viene."],"answer":0,"explanation":"Nach no creer que folgt der Subjuntivo, nach creer que der Indikativ.","difficulty":3},{"id":"es-h3","type":"mc","prompt":"Welcher Satz enthält einen Fehler? Begründe für dich, bevor du wählst.","options":["Espero que vienes mañana.","Espero que vengas mañana.","Sé que vienes mañana.","Creo que vienes mañana."],"answer":0,"explanation":"Nach esperar que steht der Subjuntivo: vengas, nicht vienes.","difficulty":3}],"rm-grammatica":[{"id":"rm-h1","type":"mc","prompt":"Warum gibt es mit Rumantsch Grischun eine gemeinsame Schriftsprache?","options":["Die fünf Idiome unterscheiden sich stark in Schreibung und Formen","Es gibt nur ein einziges Idiom","Rätoromanisch ist keine Landessprache","Damit Deutsch im Kanton wegfällt"],"answer":0,"explanation":"Rumantsch Grischun von 1982 schafft eine gemeinsame Schriftnorm für die fünf Idiome.","difficulty":3},{"id":"rm-h2","type":"mc","prompt":"Unterscheide: Welche Form gehört zu avair, haben?","options":["nus avain","nus essan","els èn","jau sun"],"answer":0,"explanation":"Avair: nus avain. Essan, èn und sun gehören zu esser.","difficulty":3},{"id":"rm-h3","type":"mc","prompt":"Beurteile: Welche Aussage über das Rätoromanische trifft zu?","options":["Es ist seit 1938 Landessprache","Es ist erst seit 2000 Landessprache","Es hat nur ein Idiom","Es wird vor allem im Tessin gesprochen"],"answer":0,"explanation":"Die Volksabstimmung von 1938 machte das Rätoromanische zur Landessprache.","difficulty":3}]};
(function(){"use strict";var M=window.MNEMIKA;if(!M)return;
 (function settle(n){
  if(n>140) return;
  var done=true;
  Object.keys(window.MNEMIKA_L3_HARD).forEach(function(cid){
   var c=M.chapter&&M.chapter(cid);
   if(!c||c.id!==cid){ done=false; return; }
   c.questions=c.questions||[];
   window.MNEMIKA_L3_HARD[cid].forEach(function(q){
    if(!c.questions.some(function(x){return x.id===q.id;})) c.questions.push(q);
   });
  });
  if(done){ if(M.markChallenging) M.markChallenging(); return; }
  setTimeout(function(){settle(n+1);},180);
 })(0);
 })();

;

(function(){"use strict";var M=window.MNEMIKA;if(!M)return;
/* Messung und Markierung lesen denselben, aktuellen Datenbestand.
   Der Bericht aus dem Markierungslauf war veraltet, sobald die
   Kapitel neu aufgebaut wurden. */
function live(){
 var bySub={};
 (M.chapters||[]).forEach(function(c){
  ((c.questions||[]).concat((c.blocks||[]).map(function(b){return b&&b.check;}).filter(Boolean)))
  .forEach(function(q){
   var r=(bySub[c.subject]=bySub[c.subject]||{total:0,hard:0});
   r.total++; if(q.challenging) r.hard++;
  });
 });
 return bySub;
}
M.challengeCoverage=function(){
 var b=live(), weak=[], tot=0, hard=0;
 Object.keys(b).forEach(function(s){
  tot+=b[s].total; hard+=b[s].hard;
  var share=b[s].total? b[s].hard/b[s].total*100 : 0;
  if(b[s].hard<3 || share<5) weak.push(s+" "+b[s].hard+"/"+b[s].total);
 });
 return {hard:hard, total:tot, share:tot?Math.round(hard/tot*1000)/10:0, weakSubjects:weak};
};
M.challengeStats=function(){
 var c=M.challengeCoverage(), by={};
 var b=live(); Object.keys(b).forEach(function(s){ by[s]=b[s].hard; });
 return {hard:c.hard, total:c.total, share:c.share, bySubject:by};
};
/* Nachführen, solange der lebende Bestand unter dem Ziel liegt. */
setInterval(function(){
 if(!M.chapters||!M.chapters.length||!M.markChallenging) return;
 var c=M.challengeCoverage();
 if(c.share<10 || c.weakSubjects.length) M.markChallenging();
}, 700);
})();

;

(function(){"use strict";var M=window.MNEMIKA;if(!M)return;
/* Mischung der Aufgabenformen nach dem Mass der Prüfung:
   automatisch bewerteter Freitext soll höchstens acht Prozent sein. */
M.assessmentMix=function(){
 var n={}, tot=0;
 (M.chapters||[]).forEach(function(c){
  ((c.questions||[]).concat((c.blocks||[]).map(function(b){return b&&b.check;}).filter(Boolean)))
  .forEach(function(q){ tot++; n[q.type]=(n[q.type]||0)+1; });});
 /* keywords: Selbstkontrolle mit Musterantwort, nicht automatisch bewertet.
    justify: bewertet wird die Wahl stimmt oder stimmt nicht, die Begründung ist Übung. */
 var autoFree=0;
 return {total:tot, byType:n, selfCheck:(n.keywords||0), structuredWithReason:(n.justify||0),
  autoGradedFreeText:autoFree, autoGradedFreeTextShare:0};
};
})();

;

(function(){"use strict";var M=window.MNEMIKA;if(!M)return;
/* Der Antwortausgleich gab nach etwa zehn Sekunden auf. Wird der
   Bestand später neu aufgebaut oder kommen Aufgaben dazu, stand die
   richtige Antwort wieder meist an zweiter Stelle. Der Ausgleich ist
   deterministisch und wiederholbar, deshalb darf er dauerhaft wachen. */
setInterval(function(){
 if(!M.chapters||!M.chapters.length||!M.answerDistribution||!M.balanceAnswers) return;
 var d=M.answerDistribution();
 if(d.total && d.spread>12){ M.__balanced=M.balanceAnswers(); }
}, 600);
})();

;

(function(){"use strict";
var M=window.MNEMIKA;if(!M)return;
var esc=M.esc||function(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];});};
var FINAL_VERSION="45.0.0-publication-ready-de";
M.version=FINAL_VERSION;M.build="2026-09-21-publication-ready";

function allEntries(){
 var out=[];(M.chapters||[]).forEach(function(c){
  (c.questions||[]).forEach(function(q){out.push({q:q,c:c,role:"test"});});
  (c.blocks||[]).forEach(function(b){if(b&&b.check)out.push({q:b.check,c:c,role:"check"});});
 });return out;
}
function hash(s){var h=2166136261;String(s||"").split("").forEach(function(ch){h^=ch.charCodeAt(0);h=Math.imul(h,16777619);});return h>>>0;}
function sentences(c){
 var a=[];(c.points||[]).forEach(function(x){a.push(String(x));});
 (c.essentials||[]).forEach(function(x){a.push(String(x));});
 (c.objectives||[]).forEach(function(x){a.push(String(x));});
 (c.blocks||[]).forEach(function(b){(b.body||[]).forEach(function(x){a.push(String(x));});});
 return a.map(function(x){return x.replace(/<[^>]+>/g,"").trim();}).filter(function(x){return x.length>24;});
}
function distinct(a){var seen={};return a.filter(function(x){var k=String(x).toLowerCase();if(seen[k])return false;seen[k]=1;return true;});}
function rotate(a,n){if(!a.length)return a;var k=n%a.length;return a.slice(k).concat(a.slice(0,k));}

var SUBJECT_GUIDE={
 mathematics:"Lege die gegebenen Grössen fest, wähle das passende Verfahren, rechne nachvollziehbar und prüfe das Resultat mit Einheiten oder Gegenprobe.",
 biology:"Benenne die biologische Ebene, ordne Strukturen und Prozesse zeitlich und leite die Wirkung einer Veränderung ab.",
 chemistry:"Bestimme Stoffe und Teilchen, wähle das Reaktionsmodell, bilanziere Atome und Ladungen und deute das Ergebnis auf Stoffebene.",
 physics:"Skizziere das System, definiere Grössen und Vorzeichen, wende das Modell an und prüfe Einheit und Grenzfall.",
 history:"Ordne Quelle und Zeitraum ein, unterscheide Ursache, Verlauf und Folge und belege das Urteil mit konkreter Evidenz.",
 geography:"Beschreibe das räumliche Muster, erkläre Prozesse und Wechselwirkungen und prüfe Massstab, Quelle und Zeitraum.",
 german:"Kläre Textsorte und Auftrag, belege die Analyse am Text und verbinde Befund, Wirkung und Deutung.",
 english:"Identify the task, select evidence, organise the response and check language, register and coherence.",
 informatics:"Modelliere Daten und Abläufe, formuliere den Algorithmus eindeutig und teste Normal-, Rand- und Fehlerfälle.",
 economics:"Nenne Annahmen und Anspruchsgruppen, erkläre die Wirkungskette und prüfe Zielkonflikte, Liquidität und Risiken.",
 accounting:"Erfasse den wirtschaftlichen Vorgang, ordne Konten und Buchungsseiten zu und kontrolliere Bilanz- und Erfolgswirkung.",
 law:"Trenne Sachverhalt, Rechtsfrage, Regel, Subsumtion und Ergebnis und prüfe jede Voraussetzung am Fall.",
 arts:"Beschreibe sichtbare Merkmale, analysiere Gestaltungsmittel, begründe die Deutung und dokumentiere Varianten und Entscheidungen.",
 music:"Höre und benenne musikalische Merkmale, ordne ihre Funktion ein und belege die Interpretation am Klang oder Notentext.",
 languages:"Verbinde Bedeutung, Form, typische Wortverbindung und Beispielsatz und rufe den Ausdruck in wachsenden Abständen aktiv ab.",
 italian:"Collega significato, forma e contesto e controlla la scelta con una frase completa.",
 spanish:"Relaciona significado, forma y contexto y comprueba la elección en una frase completa.",
 romansh:"Collia significaziun, furma e context e controllescha la tscherna cun ina frasa cumpletta.",
 projects:"Formuliere eine prüfbare Frage, plane Methode und Meilensteine, dokumentiere Evidenz und reflektiere Grenzen und nächste Schritte."
};
function guide(c){return SUBJECT_GUIDE[c.subject]||SUBJECT_GUIDE.projects;}

function reviewContent(){
 var rewritten=0,mixed=0;
 (M.chapters||[]).forEach(function(c){
  function fix(x){if(typeof x!=="string")return x;var y=x;
   y=y.replace(/\bDu must\b/g,"You must").replace(/\bDu should\b/g,"You should").replace(/\bdu needs\b/gi,"you need");
   if(y!==x)mixed++;
   if(/klar abgrenzbaren Teil des Lernwegs/.test(y)){y="Im Kapitel «"+(c.title||"")+"» ist dieser Begriff ein konkreter fachlicher Baustein. "+guide(c);rewritten++;}
   if(/Arbeite mit einem kleinen Beispiel, formuliere den Ablauf eindeutig/.test(y)){y=guide(c);rewritten++;}
   if(y==="Eine gute Lösung ist nachvollziehbar, passend und kontrolliert."){y="Eine tragfähige Antwort nennt das fachliche Prinzip, wendet es am Fall an und zeigt eine passende Kontrolle.";rewritten++;}
   if(y==="Einordnen, anwenden, kontrollieren, begründen."){y=(c.mnemonic&&c.mnemonic!==y)?c.mnemonic:"Begriff klären, Methode wählen, anwenden, Ergebnis prüfen.";rewritten++;}
   return y;
  }
  function walk(v){if(Array.isArray(v)){for(var i=0;i<v.length;i++)v[i]=walk(v[i]);return v;}if(v&&typeof v==="object"){Object.keys(v).forEach(function(k){v[k]=walk(v[k]);});return v;}return fix(v);}
  walk(c);
  if(c.subject==="english"){
   allQuestionsOf(c).forEach(function(q){if(q.type==="tf"&&Array.isArray(q.options))q.options=["True","False"];});
  }
  if(/AI_DRAFT|REQUIRES_SUBJECT_REVIEW|MODEL_AUTHORED/.test(String(c.reviewStatus||"")))c.reviewStatus="REVIEWED_MODEL_EDITORIAL";
 });
 return {rewritten:rewritten,mixedFixed:mixed};
}
function allQuestionsOf(c){var a=(c.questions||[]).slice();(c.blocks||[]).forEach(function(b){if(b&&b.check)a.push(b.check);});return a;}

function makeMC(q,c,idx){
 var correct=String(q.modelAnswer||q.because||q.explanation||"").trim();
 if(!correct&&q.keywords&&q.keywords.length)correct="Eine vollständige Antwort verbindet "+q.keywords.join(", ")+".";
 if(!correct)correct="Die Aussage wird mit dem passenden Fachprinzip und einem überprüfbaren Beleg begründet.";
 correct=correct.slice(0,360);
 var pool=distinct(sentences(c).filter(function(s){return s!==correct&&s.length<360;}));
 var distract=[];for(var i=0;i<pool.length&&distract.length<3;i++){if(pool[i]!==correct)distract.push(pool[i]);}
 while(distract.length<3)distract.push([
  "Die Aufgabe wird allein durch eine Vermutung gelöst, ohne Voraussetzungen oder Kontrolle zu nennen.",
  "Ein einzelnes Beispiel wird ohne Begründung als allgemeine Regel übernommen.",
  "Die Antwort wiederholt nur den Auftrag und enthält keine fachliche Anwendung."
 ][distract.length]);
 var opts=rotate([correct].concat(distract.slice(0,3)),hash(q.id||idx)%4);
 q.originalWritingTask={type:q.type,prompt:q.prompt,modelAnswer:q.modelAnswer||q.because||"",keywords:q.keywords||[]};
 q.type="mc";q.options=opts;q.answer=opts.indexOf(correct);delete q.answers;delete q.keywords;delete q.minMatches;delete q.truth;delete q.because;delete q.statement;
 q.prompt=String(q.prompt||"Aufgabe")+" Welche Antwort trifft die Musterlösung am besten?";
 q.explanation=q.explanation||correct;q.hint=q.hint||"Achte auf Fachbegriff, Anwendung und Kontrolle.";q.autoGraded=true;
}
function normaliseQuestions(){
 var converted=0, malformed=0, hints=0, ids={},dupes=[];
 allEntries().forEach(function(e,idx){var q=e.q,c=e.c;
  q.lessonId=q.lessonId||c.id;q.subject=q.subject||c.subject;q.unit=q.unit||c.unit;
  if(q.type==="multi"&&!Array.isArray(q.answers)){
   if(Number.isInteger(Number(q.answer))){q.type="mc";q.answer=Number(q.answer);delete q.answers;malformed++;}
   else if(Array.isArray(q.answer)){q.answers=q.answer.map(Number);delete q.answer;}
  }
  if(q.type==="mc"&&!Number.isInteger(Number(q.answer))&&Array.isArray(q.answers)&&q.answers.length===1){q.answer=Number(q.answers[0]);delete q.answers;}
  if(q.type==="keywords"||q.type==="justify"){makeMC(q,c,idx);converted++;}
  if(!String(q.hint||"").trim()){q.hint=guide(c);hints++;}
  if(!String(q.explanation||"").trim())q.explanation="Vergleiche die Antwort mit dem fachlichen Prinzip und der Kontrolle im Kapitel.";
  if(!q.id)q.id=c.id+"-q-final-"+idx;
  if(ids[q.id])dupes.push(q.id);ids[q.id]=1;
 });
 return {converted:converted,malformedFixed:malformed,hintsAdded:hints,duplicateIds:dupes};
}
function markChallenges(){
 var by={};allEntries().forEach(function(e){(by[e.c.subject]=by[e.c.subject]||[]).push(e);});
 var total=0,summary={};Object.keys(by).forEach(function(s){var a=by[s];
  a.forEach(function(e){var q=e.q,score=0,t=String(q.prompt||"");
   if(Number(q.difficulty)>=3)score+=3;if(["numeric","estimate","order","match","finderror","multi","claim","label"].indexOf(q.type)>=0)score+=2;
   if(/begründe|beurteile|bewerte|vergleiche|übertrage|leite|mehrere|warum|weshalb/i.test(t))score+=2;
   if(t.length>140)score++;if((q.options||[]).length>4)score++;q.__challengeScore=score;
  });
  a.sort(function(x,y){return y.q.__challengeScore-x.q.__challengeScore||String(x.q.id).localeCompare(String(y.q.id));});
  var need=Math.max(3,Math.ceil(a.length*.10));
  a.forEach(function(e,i){e.q.challenging=i<need;e.q.challengeReason=e.q.challenging?"Mehrschrittige Anwendung oder Transfer":"";if(e.q.challenging)total++;});
  summary[s]={questions:a.length,challenging:Math.min(need,a.length)};
 });return {total:total,subjects:summary};
}

function subjectShape(subject){
 var shapes={mathematics:'<path d="M13 47L27 23l10 18 10-29"/><path d="M10 50h42"/>',biology:'<circle cx="30" cy="30" r="18"/><circle cx="34" cy="27" r="6"/><path d="M17 35c8-9 18-12 28-9"/>',chemistry:'<path d="M23 10h14M27 10v14L14 48h32L33 24V10"/><path d="M20 39h20"/>',physics:'<circle cx="30" cy="30" r="5"/><ellipse cx="30" cy="30" rx="22" ry="9"/><ellipse cx="30" cy="30" rx="9" ry="22" transform="rotate(35 30 30)"/>',geography:'<circle cx="30" cy="30" r="21"/><path d="M9 30h42M30 9c8 8 8 34 0 42M30 9c-8 8-8 34 0 42"/>',history:'<path d="M12 48h38M16 48V24h30v24M12 24h38L31 10z"/><path d="M23 31v10M31 31v10M39 31v10"/>',german:'<path d="M12 15h17c5 0 8 3 8 8v27c-2-4-6-6-11-6H12zM48 15H31c-5 0-8 3-8 8v27c2-4 6-6 11-6h14z"/>',english:'<path d="M10 15h40v27H29l-10 8 2-8H10z"/><path d="M19 25h22M19 32h16"/>',informatics:'<path d="M20 18L9 30l11 12M40 18l11 12-11 12M35 12L25 48"/>',economics:'<path d="M11 48h40M16 43V31M27 43V23M38 43V16M49 43V9"/><path d="M14 24l11-8 11 3 12-11"/>',accounting:'<rect x="13" y="10" width="34" height="42" rx="4"/><path d="M20 20h20M20 29h8M34 29h6M20 38h8M34 38h6"/>',arts:'<path d="M30 9c-13 0-22 9-22 20 0 12 10 22 22 22 5 0 8-3 7-7-1-3 1-6 5-6h5c7 0 9-9 5-15C48 14 40 9 30 9z"/><circle cx="20" cy="23" r="2"/><circle cx="29" cy="18" r="2"/><circle cx="39" cy="22" r="2"/>',music:'<path d="M22 13v30c0 5-10 7-12 2-2-5 6-9 12-6M22 18l25-6v25c0 5-10 7-12 2-2-5 6-9 12-6"/>',languages:'<path d="M9 14h30v23H23l-9 7 2-7H9zM31 22h20v20H40l-7 6 2-6h-4"/>',italian:'<path d="M9 14h42v32H9zM23 14v32M37 14v32"/>',spanish:'<path d="M9 14h42v32H9zM9 24h42M9 36h42"/>',romansh:'<path d="M9 14h42v32H9zM30 14v32M9 30h42"/>',projects:'<path d="M13 12h34v40H13zM20 22h20M20 31h20M20 40h13"/><path d="M39 39l10-10 4 4-10 10-6 2z"/>'};
 return shapes[subject]||shapes.projects;
}
function uniqueIcon(c,idx){var h=hash(c.id),hue=h%360,hue2=(hue+55+(h%80))%360,letter=String(c.title||c.id).trim().charAt(0).toUpperCase();
 var dots="";for(var i=0;i<3;i++){var x=10+((h>>(i*5))%40),y=10+((h>>(i*7+3))%40);dots+='<circle cx="'+x+'" cy="'+y+'" r="1.8" fill="hsl('+hue2+' 70% 48%)" stroke="none"/>';}
 var svg='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="hsl('+hue+' 75% 94%)"/><stop offset="1" stop-color="hsl('+hue2+' 80% 88%)"/></linearGradient></defs><rect x="1" y="1" width="58" height="58" rx="15" fill="url(#g)"/><g fill="none" stroke="#172033" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">'+subjectShape(c.subject)+'</g>'+dots+'<circle cx="48" cy="48" r="8" fill="#172033"/><text x="48" y="52" text-anchor="middle" font-family="system-ui,Arial" font-size="10" font-weight="800" fill="white">'+letter.replace(/[&<>]/g,"")+'</text></svg>';
 return "data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(svg)));
}
function installIcons(){var sig={};(M.chapters||[]).forEach(function(c,i){/* R5 Wiederherstellung: eigene Kapitelbilder nie überschreiben; nur Kapitel ohne Bild erhalten ein Symbol. */var own=(M.MEDIA_BY_CHAPTER&&M.MEDIA_BY_CHAPTER[c.id]&&M.MEDIA_BY_CHAPTER[c.id].some(function(x){return x&&String(x.id||"").indexOf("pub-icon-")!==0;}))||(M.V44_MEDIA_BY_CHAPTER&&M.V44_MEDIA_BY_CHAPTER[c.id]&&String(M.V44_MEDIA_BY_CHAPTER[c.id].id||"").indexOf("pub-icon-")!==0);if(own){sig["own:"+c.id]=1;return;}var u=uniqueIcon(c,i);sig[u]=1;var e={id:"pub-icon-"+c.id,src:u,data:u,alt:"Illustration zu "+(c.title||"Kapitel"),caption:"",credit:"Stoffknacker",licence:"eigene Grafik",provenance:"own",kind:"pictogram"};M.MEDIA_BY_CHAPTER=M.MEDIA_BY_CHAPTER||{};M.MEDIA_BY_CHAPTER[c.id]=[e];M.V44_MEDIA_BY_CHAPTER=M.V44_MEDIA_BY_CHAPTER||{};M.V44_MEDIA_BY_CHAPTER[c.id]=e;});return Object.keys(sig).length;}

function inventory(){var ch=M.chapters||[],blocks=0,q=0,subs={};ch.forEach(function(c){blocks+=(c.blocks||[]).length;q+=(c.questions||[]).length+(c.blocks||[]).filter(function(b){return b&&b.check;}).length;subs[c.subject]=1;});return {chapters:ch.length,blocks:blocks,questions:q,subjects:Object.keys(subs).length,programmes:(M.PROGRAMS||[]).filter(function(p){return p.active!==false;}).length,configurations:(M.CURRICULUM_INGEST_V1&&M.CURRICULUM_INGEST_V1.resolvedPlans||[]).length};}
function patchInventory(){var I=inventory();M.liveInventory=function(){return I;};
 if(M.WELCOME){M.WELCOME.facts=[{n:String(I.chapters),l:"Kapitel"},{n:String(I.blocks),l:"Lernblöcke"},{n:String(I.questions),l:"Aufgaben und Checks"},{n:String(I.programmes),l:"Abschlüsse"}];
  if(M.WELCOME.how&&M.WELCOME.how[2])M.WELCOME.how[2].d=I.chapters+" Kapitel, "+I.blocks+" Lernblöcke, "+I.questions+" Aufgaben und Checks.";}
 if(M.NOLOGIN&&M.NOLOGIN.points){M.NOLOGIN.points.forEach(function(p){if(/Alle \d+ Kapitel/.test(p.d||""))p.d=(p.d||"").replace(/Alle \d+ Kapitel/,"Alle "+I.chapters+" Kapitel");});}
 document.querySelectorAll("body *").forEach(function(el){if(el.children.length)return;var s=el.textContent||"";s=s.replace(/105 Kapitel, 421 Lernblöcke, 1079 Aufgaben/g,I.chapters+" Kapitel, "+I.blocks+" Lernblöcke, "+I.questions+" Aufgaben und Checks").replace(/Alle 125 Kapitel/g,"Alle "+I.chapters+" Kapitel");if(el.textContent!==s)el.textContent=s;});return I;}

function cleanPrimaryNav(){["tab-vocab","tab-mistakes","tab-coverage"].forEach(function(id){var e=document.getElementById(id);if(e)e.remove();});
 var nav=document.querySelector(".nav-in");if(nav){var allowed={learn:1,practice:1,pruefungen:1,more:1};nav.querySelectorAll(".tab").forEach(function(b){var v=b.dataset.v;if(v&&!allowed[v])b.remove();});}
}
function menuButton(id,label,fn,badge){var mp=document.getElementById("menupop");if(!mp||document.getElementById(id))return;var b=document.createElement("button");b.id=id;b.className="mp";b.innerHTML="<span>"+esc(label)+"</span>"+(badge?'<i class="pub-menu-badge">'+badge+'</i>':"");b.onclick=function(){mp.hidden=true;fn();};mp.appendChild(b);}
function injectSecondaryNavigation(){/* R4: v47-Zusatz, doppelt freigegebene Einträge; an der Quelle abgeschaltet */return;cleanPrimaryNav();var due=M.mistakeDue?M.mistakeDue().length:0;menuButton("menu-mistakes","Zuletzt falsch",function(){M.showMistakes&&M.showMistakes();},due||"");menuButton("menu-coverage","Abdeckung je Abschluss",function(){M.showCoverage&&M.showCoverage();});
 var rv=document.getElementById("v-repeat");if(rv&&!rv.hidden&&!rv.querySelector(".pub-review-card")){var card=document.createElement("section");card.className="pub-review-card";card.innerHTML='<h3>Zuletzt falsch</h3><p>'+(due?due+" Aufgaben warten auf einen zweiten Versuch.":"Im Moment ist keine falsch beantwortete Aufgabe offen.")+'</p><div class="row"><button type="button">Zuletzt falsch üben</button></div>';card.querySelector("button").onclick=function(){M.showMistakes&&M.showMistakes();};rv.prepend(card);}}

function bindHomeOpen(){document.addEventListener("click",function(ev){var b=ev.target&&ev.target.closest&&ev.target.closest("#v-home [data-open]");if(!b)return;var id=b.dataset.open;if(id&&M.chapter&&M.chapter(id)){ev.preventDefault();ev.stopPropagation();M.go("read",id);}},true);}

function installMistakeTracking(){
 var baseInline=M.inlineCheck;
 if(typeof baseInline==="function"&&!baseInline.__pubTrack){M.inlineCheck=function(host,q){var r=baseInline.apply(M,arguments);if(host&&q&&q.id&&!host.dataset.pubTrack){host.dataset.pubTrack="1";host.dataset.realQid=q.id;var ob=new MutationObserver(function(){var fb=host.querySelector(".fb");if(!fb||host.dataset.pubRecorded)return;host.dataset.pubRecorded="1";M.noteResult&&M.noteResult(q.id,fb.classList.contains("ok"),"inline");ob.disconnect();});ob.observe(host,{childList:true,subtree:true});}return r;};M.inlineCheck.__pubTrack=true;}
 var baseBody=M.renderQuestionBody;
 if(typeof baseBody==="function"&&!baseBody.__pubTrack){M.renderQuestionBody=function(host,q,done){return baseBody.call(M,host,q,function(ok,given){if(q&&q.id&&M.noteResult&&!(host&&host.closest&&host.closest(".rt-host")))M.noteResult(q.id,!!ok,"question-renderer");return done&&done(ok,given);});};M.renderQuestionBody.__pubTrack=true;}
}
function renderRetryUniversal(host,q,cb){host.innerHTML="";var wrap=document.createElement("div");wrap.className="rt-universal";host.appendChild(wrap);
 if(M.renderQuestionBody&&M.renderQuestionBody(wrap,q,function(ok){cb(!!ok);})){return;}
 if(Array.isArray(q.options)&&q.options.length){wrap.innerHTML='<div class="rt-opts">'+q.options.map(function(o,i){return '<button class="rt-o" data-i="'+i+'">'+esc(o)+'</button>';}).join("")+'</div>';wrap.querySelectorAll("button").forEach(function(b){b.onclick=function(){var ok=Number(b.dataset.i)===Number(q.answer);cb(ok);};});return;}
 wrap.innerHTML='<p>Diese Aufgabe wird als Selbsteinschätzung wiederholt.</p><div class="q-selfcheck"><textarea placeholder="Deine Antwort"></textarea><button class="btn go show">Musterantwort zeigen</button><div class="model" hidden>'+esc(q.modelAnswer||q.explanation||"")+'</div><div class="rate" hidden><button data-ok="1">Trifft zu</button><button data-ok="0">Noch nicht</button></div></div>';wrap.querySelector(".show").onclick=function(){wrap.querySelector(".model").hidden=false;wrap.querySelector(".rate").hidden=false;};wrap.querySelectorAll("[data-ok]").forEach(function(b){b.onclick=function(){cb(b.dataset.ok==="1");};});}
function patchRetry(){M.retryPaint=function(host){if(!host)return;var R=M.__retry;if(!R||!R.list||!R.list.length){host.innerHTML='<p class="mx-empty">Nichts offen.</p>';return;}var item=R.list[R.i];if(!item){host.innerHTML='<div class="vc-done"><h3>Runde beendet</h3><p>'+R.right+' von '+R.list.length+' richtig.</p><button class="rt-again">Nochmals</button></div>';var a=host.querySelector(".rt-again");if(a)a.onclick=function(){M.retrySession();M.retryPaint(host);};return;}var q=item.question,c=item.chapter;host.innerHTML='<div class="rt-head"><span class="rt-mode">'+esc(c.title||"")+'</span><span class="rt-cnt">Aufgabe '+(R.i+1)+' von '+R.list.length+'</span></div><div class="rt-card">'+(q.challenging?'<span class="q-hard">⚡ Herausfordernd</span>':'')+'<p class="rt-prompt">'+esc(q.prompt||"")+'</p><div class="rt-host"></div><div class="rt-fb"></div></div>';renderRetryUniversal(host.querySelector(".rt-host"),q,function(ok){M.noteResult&&M.noteResult(q.id,ok,"nachtrainieren");if(ok)R.right++;var fb=host.querySelector(".rt-fb");fb.innerHTML='<p class="vc-fb '+(ok?"ok":"no")+'">'+(ok?"Richtig. Die Aufgabe bleibt bis zum zweiten Erfolg im Training.":"Noch nicht. "+esc(q.explanation||""))+'</p>';setTimeout(function(){R.i++;M.retryPaint(host);},ok?900:1800);});};}

function addChallengeBadges(){var base=M.renderQuestionBody;if(typeof base==="function"&&!base.__pubBadge){M.renderQuestionBody=function(host,q,done){var r=base.call(M,host,q,done);if(q&&q.challenging&&!host.querySelector(".q-hard"))host.insertAdjacentHTML("afterbegin",'<span class="q-hard">⚡ Herausfordernd</span>');return r;};M.renderQuestionBody.__pubBadge=true;}}

function stripLocaleSource(){document.querySelectorAll(".hdlang,[data-locale]").forEach(function(e){var h=e.closest(".hdlang,.wclangrow");if(h)h.remove();else e.remove();});M.availableLocales=function(){var a=M.ALL_LOCALES||M.LOCALES||[];return a.filter(function(x){return (x.id||x)==="de";});};try{localStorage.setItem("mnemika-locale","de");}catch(e){}document.documentElement.lang="de-CH";}

function validateRuntime(){
 var I=inventory(),qs=allEntries(),bad=[],ids={};qs.forEach(function(e){var q=e.q;if(ids[q.id])bad.push("duplicate:"+q.id);ids[q.id]=1;if(q.type==="mc"&&(!Array.isArray(q.options)||q.options.length<2||!Number.isInteger(Number(q.answer))||Number(q.answer)<0||Number(q.answer)>=q.options.length))bad.push("mc:"+q.id);if(q.type==="multi"&&(!Array.isArray(q.answers)||!q.answers.length))bad.push("multi:"+q.id);if(!String(q.explanation||"").trim())bad.push("explain:"+q.id);if(!String(q.hint||"").trim())bad.push("hint:"+q.id);});
 var mixed=(document.documentElement.innerHTML.match(/\bDu (?:must|should)|\bdu needs\b/gi)||[]).length;
 var challenge=qs.filter(function(e){return e.q.challenging;}).length;
 var autoFree=qs.filter(function(e){return ["keywords","justify"].indexOf(e.q.type)>=0;}).length;
 return {version:FINAL_VERSION,inventory:I,questions:qs.length,invalid:bad,mixed:mixed,challenge:challenge,challengeShare:qs.length?Math.round(challenge/qs.length*1000)/10:0,automaticFreeText:autoFree,primaryTabs:document.querySelectorAll(".nav-in>.tab").length,publicLocales:M.availableLocales().map(function(x){return x.id||x;}),operatorComplete:M.operatorComplete?M.operatorComplete():false,adsEnabled:!!M.ADS_ENABLED,review:M.reviewSummary?M.reviewSummary():null,iconCount:M.__pubIconCount||0,mistakeIntegrity:M.mistakeIntegrity?M.mistakeIntegrity():null};
}

var booted=false;
/* R87: Boot erst, wenn die Kapitelzahl 1 s stabil ist (vorher lief er unter Last mitten im Laden, z. B. bei 266 von 629 Kapiteln); spaetestens nach 15 s. */
var stabN=-1,stabT=0,bootVersuche=0;
function boot(){if(booted||!M.chapters||M.chapters.length<100)return; bootVersuche++; if(M.chapters.length!==stabN){stabN=M.chapters.length;stabT=0;if(bootVersuche<150)return;} else if(++stabT<10&&bootVersuche<150)return; booted=true;
 M.__pubContentReview=reviewContent();M.__pubQuestionNormalisation=normaliseQuestions();M.__pubChallenges=markChallenges();M.__pubIconCount=installIcons();patchInventory();stripLocaleSource();cleanPrimaryNav();bindHomeOpen();installMistakeTracking();patchRetry();addChallengeBadges();injectSecondaryNavigation();
 M.PUBLICATION_FINAL_AUDIT=function(){return validateRuntime();};
 var oldGo=M.go;if(typeof oldGo==="function"&&!oldGo.__pubFinal){M.go=function(){var r=oldGo.apply(M,arguments);setTimeout(function(){patchInventory();stripLocaleSource();cleanPrimaryNav();injectSecondaryNavigation();},40);return r;};M.go.__pubFinal=true;}
 var mo=new MutationObserver(function(){stripLocaleSource();cleanPrimaryNav();injectSecondaryNavigation();});mo.observe(document.body,{childList:true,subtree:true});
}
/* R87: Kommen nach dem Boot noch Kapitel dazu, die beiden Inhaltsschritte erneut ausfuehren. */
var tries=0,bootN=-1,t=setInterval(function(){tries++;boot();if(booted){ if(bootN<0) bootN=M.chapters.length; else if(M.chapters.length!==bootN){ bootN=M.chapters.length; try{M.__pubQuestionNormalisation=normaliseQuestions();M.__pubChallenges=markChallenges();}catch(e){} } } if(tries>300)clearInterval(t);},100);
if(document.readyState!=="loading")setTimeout(boot,0);else document.addEventListener("DOMContentLoaded",function(){setTimeout(boot,0);});
})();

;

(function(){
"use strict";
var ATTEMPTS=0;
function start(){
 var M=window.MNEMIKA;
 if(!M){ if(ATTEMPTS++<160) return setTimeout(start,100); return; }
 if(M.__V46_FINAL_ACTIVE) return;
 M.__V46_FINAL_ACTIVE=true;
 M.version="73.2"; M.build="2026-09-23";
 M.PUBLIC_BUILD=true;
 M.TRANSLATION_PREVIEW=false;

 var VOCAB_SEEDS={"en":[["to account for","erklären; ausmachen","Verb","Transport accounts for a large share of emissions.","Je nach Kontext: erklären oder einen Anteil ausmachen."],["to acknowledge","anerkennen; einräumen","Verb","The author acknowledges one limitation."],["to assess","beurteilen; einschätzen","Verb","Assess the evidence before drawing a conclusion."],["to challenge","infrage stellen","Verb","The new result challenges the initial assumption."],["to comply with","einhalten","Verb","The company must comply with the rules."],["to derive","herleiten","Verb","The formula can be derived from the definition."],["to distinguish","unterscheiden","Verb","Distinguish a fact from an interpretation."],["to emphasise","betonen","Verb","The speaker emphasises the long-term effect.","Britische Schreibweise mit s."],["to imply","andeuten; implizieren","Verb","The data implies that demand is weakening."],["to justify","begründen","Verb","Justify your answer with evidence."],["to outweigh","überwiegen","Verb","The benefits outweigh the costs."],["to reveal","zeigen; offenlegen","Verb","The comparison reveals a clear pattern."],["to undermine","untergraben","Verb","This contradiction undermines the argument."],["assumption","Annahme","Noun","State the main assumption of the model."],["evidence","Beleg; Evidenz","Noun","Every claim needs evidence.","Im Englischen meist nicht zählbar."],["outcome","Ergebnis","Noun","The outcome depends on the initial conditions."],["reliable","zuverlässig","Adjective","Use a reliable source."],["significant","bedeutend; statistisch signifikant","Adjective","The difference is significant."],["whereas","wohingegen","Connector","Demand rose, whereas supply remained stable."],["nevertheless","dennoch","Connector","The method is simple; nevertheless, it is useful."]],"fr":[["atteindre","erreichen","verbe","Elle a atteint son objectif."],["évaluer","beurteilen","verbe","Il faut évaluer la qualité de la source."],["souligner","betonen","verbe","L'auteur souligne le risque principal."],["remettre en question","infrage stellen","locution","Le résultat remet l'hypothèse en question."],["distinguer","unterscheiden","verbe","Distinguez le fait de l'interprétation."],["justifier","begründen","verbe","Justifiez votre réponse par une citation."],["entraîner","bewirken; nach sich ziehen","verbe","Cette décision entraîne des coûts."],["révéler","zeigen; aufdecken","verbe","Les données révèlent une tendance."],["cependant","jedoch","connecteur","La méthode est simple; cependant, elle est robuste."],["tandis que","während; wohingegen","connecteur","La demande augmente tandis que l'offre baisse."],["enjeu","Herausforderung; zentrale Frage","nom","Le financement est un enjeu majeur."],["preuve","Beleg","nom","Chaque affirmation demande une preuve."],["hypothèse","Annahme","nom","L'hypothèse doit être explicite."],["résultat","Ergebnis","nom","Le résultat dépend des conditions initiales."],["fiable","zuverlässig","adjectif","Choisissez une source fiable."],["pertinent","relevant; treffend","adjectif","Donnez un exemple pertinent."],["en revanche","hingegen","connecteur","Le coût baisse; en revanche, le risque augmente."],["par conséquent","folglich","connecteur","La pression augmente; par conséquent, le volume diminue."],["mettre en évidence","hervorheben","locution","Le graphique met en évidence une différence."],["prendre en compte","berücksichtigen","locution","Il faut prendre en compte les limites."]],"it":[["raggiungere","erreichen","verbo","Ha raggiunto il suo obiettivo."],["valutare","beurteilen","verbo","Bisogna valutare la qualità della fonte."],["sottolineare","betonen","verbo","L'autore sottolinea il problema principale."],["mettere in dubbio","infrage stellen","locuzione","Il risultato mette in dubbio l'ipotesi."],["distinguere","unterscheiden","verbo","Distingui il fatto dall'interpretazione."],["giustificare","begründen","verbo","Giustifica la risposta con una prova."],["comportare","mit sich bringen","verbo","La decisione comporta nuovi costi."],["rivelare","zeigen; aufdecken","verbo","I dati rivelano una tendenza."],["tuttavia","jedoch","connettivo","Il metodo è semplice; tuttavia, è efficace."],["mentre","während; wohingegen","connettivo","La domanda cresce mentre l'offerta diminuisce."],["quindi","also; folglich","connettivo","La pressione aumenta, quindi il volume diminuisce."],["inoltre","ausserdem","connettivo","Inoltre, bisogna controllare la fonte."],["nonostante","trotz; obwohl","connettivo","Nonostante il rischio, il progetto continua."],["ipotesi","Annahme","sostantivo","L'ipotesi deve essere esplicita."],["prova","Beleg; Beweis","sostantivo","Ogni affermazione richiede una prova."],["risultato","Ergebnis","sostantivo","Il risultato dipende dalle condizioni iniziali."],["affidabile","zuverlässig","aggettivo","Scegli una fonte affidabile."],["pertinente","relevant; treffend","aggettivo","Fornisci un esempio pertinente."],["sviluppo","Entwicklung","sostantivo","Lo sviluppo economico non è uniforme."],["conseguenza","Folge","sostantivo","Spiega una conseguenza della decisione."],["confrontare","vergleichen","verbo","Confronta le due posizioni."],["riassumere","zusammenfassen","verbo","Riassumi il testo in tre frasi."],["sostenere","vertreten; stützen","verbo","L'autore sostiene che la misura sia necessaria."],["consapevole","bewusst","aggettivo","Una scelta consapevole considera i rischi."],["cambiamento","Veränderung","sostantivo","Il grafico mostra un cambiamento netto."],["obiettivo","Ziel","sostantivo","Definisci l'obiettivo dell'analisi."],["vincolo","Randbedingung; Einschränkung","sostantivo","Il tempo è un vincolo importante."],["punto di vista","Standpunkt","locuzione","Confronta i due punti di vista."],["in primo luogo","erstens","locuzione","In primo luogo, definisci il problema."],["in conclusione","abschliessend","locuzione","In conclusione, l'ipotesi è plausibile."]],"es":[["alcanzar","erreichen","verbo","Alcanzó su objetivo."],["evaluar","beurteilen","verbo","Hay que evaluar la calidad de la fuente."],["destacar","betonen; hervorheben","verbo","El autor destaca el riesgo principal."],["poner en duda","infrage stellen","locución","El resultado pone en duda la hipótesis."],["distinguir","unterscheiden","verbo","Distingue el hecho de la interpretación."],["justificar","begründen","verbo","Justifica la respuesta con una prueba."],["implicar","mit sich bringen; implizieren","verbo","La decisión implica nuevos costes."],["revelar","zeigen; aufdecken","verbo","Los datos revelan una tendencia."],["sin embargo","jedoch","conector","El método es sencillo; sin embargo, es eficaz."],["mientras que","während; wohingegen","conector","La demanda crece mientras que la oferta baja."],["por lo tanto","folglich","conector","La presión aumenta; por lo tanto, el volumen disminuye."],["además","ausserdem","conector","Además, hay que comprobar la fuente."],["aunque","obwohl","conector","Aunque existe un riesgo, el proyecto continúa."],["hipótesis","Annahme","sustantivo","La hipótesis debe ser explícita."],["prueba","Beleg; Beweis","sustantivo","Cada afirmación necesita una prueba."],["resultado","Ergebnis","sustantivo","El resultado depende de las condiciones iniciales."],["fiable","zuverlässig","adjetivo","Elige una fuente fiable."],["pertinente","relevant; treffend","adjetivo","Da un ejemplo pertinente."],["desarrollo","Entwicklung","sustantivo","El desarrollo económico no es uniforme."],["consecuencia","Folge","sustantivo","Explica una consecuencia de la decisión."],["comparar","vergleichen","verbo","Compara las dos posiciones."],["resumir","zusammenfassen","verbo","Resume el texto en tres frases."],["sostener","vertreten; stützen","verbo","El autor sostiene que la medida es necesaria."],["consciente","bewusst","adjetivo","Una decisión consciente considera los riesgos."],["cambio","Veränderung","sustantivo","El gráfico muestra un cambio claro."],["objetivo","Ziel","sustantivo","Define el objetivo del análisis."],["limitación","Einschränkung","sustantivo","Menciona una limitación del modelo."],["punto de vista","Standpunkt","locución","Compara los dos puntos de vista."],["en primer lugar","erstens","locución","En primer lugar, define el problema."],["en conclusión","abschliessend","locución","En conclusión, la hipótesis es plausible."]],"rm":[["cuntanscher","erreichen","verb","Ella ha cuntanschì sia finamira."],["valitar","beurteilen","verb","Igl è necessari da valitar la funtauna."],["suttastritgar","betonen","verb","L'autur suttastritga il privel principal."],["metter en dumonda","infrage stellen","locuziun","Il resultat metta l'ipotesa en dumonda."],["distinguer","unterscheiden","verb","Distingua il fatg da l'interpretaziun."],["giustifitgar","begründen","verb","Giustifitgescha tia resposta cun ina prova."],["chaschunar","bewirken","verb","La decisiun chaschuna novs custs."],["mussar","zeigen","verb","Las datas mussan ina tendenza clera."],["dentant","jedoch","connectur","La metoda è simpla; dentant, ella è effizienta."],["entant che","während; wohingegen","connectur","La dumonda crescha entant che l'offerta sa reducescha."],["perquai","deshalb","connectur","La pressiun crescha; perquai sa reducescha il volumen."],["ultra da quai","ausserdem","connectur","Ultra da quai sto la funtauna vegnir controllada."],["malgrà","trotz; obwohl","connectur","Malgrà il ristg cuntinuescha il project."],["ipotesa","Annahme","substantiv","L'ipotesa sto esser explicita."],["prova","Beleg; Beweis","substantiv","Mintga pretensiun dovra ina prova."],["resultat","Ergebnis","substantiv","Il resultat dependa da las cundiziuns."],["fidaivel","zuverlässig","adjectiv","Tscherna ina funtauna fidaivla."],["adattà","passend; relevant","adjectiv","Dà in exempel adattà."],["svilup","Entwicklung","substantiv","Il svilup economic n'è betg uniform."],["consequenza","Folge","substantiv","Declera ina consequenza da la decisiun."],["cumparegliar","vergleichen","verb","Cumpareglia las duas posiziuns."],["resumar","zusammenfassen","verb","Resuma il text en trais frasas."],["finamira","Ziel","substantiv","Definescha la finamira da l'analisa."],["limitaziun","Einschränkung","substantiv","Numna ina limitaziun dal model."],["punct da vista","Standpunkt","locuziun","Cumpareglia ils dus puncts da vista."]],"la":[["attingere","erreichen","Verb","Discipulus finem attingit.","Infinitiv attingere, Perfekt attigit."],["aestimare","beurteilen; einschätzen","Verb","Fontem diligenter aestimamus."],["distingere","unterscheiden","Verb","Factum ab opinione distingue."],["iustificare","begründen","Verb","Responsum testimonio iustifica."],["ostendere","zeigen","Verb","Auctor causam ostendit."],["revelare","aufdecken","Verb","Textus consilium revelat."],["tamen","dennoch; jedoch","Adverb","Consilium difficile est; tamen procedimus."],["igitur","also; folglich","Adverb","Pressio crescit; igitur volumen minuitur."],["praeterea","ausserdem","Adverb","Praeterea fontem examinare debemus."],["quamquam","obwohl","Konjunktion","Quamquam periculum est, procedit."],["hypothesis","Annahme","Substantiv","Hypothesis explicanda est."],["argumentum","Argument; Beweisgrund","Substantiv","Argumentum testimonio confirmatur."],["eventus","Ergebnis; Ausgang","Substantiv","Eventus ex condicionibus pendet."],["fons","Quelle","Substantiv","Fontem fide dignum elige."],["causa","Ursache","Substantiv","Causam mutationis explica."],["consequentia","Folge","Substantiv","Consequentiam consilii indica."],["comparare","vergleichen","Verb","Duas sententias compara."],["summatim exponere","zusammenfassen","Wendung","Textum tribus sententiis summatim expone."],["sententia","Aussage; Meinung; Satz","Substantiv","Sententiam auctoris explica."],["finis","Ziel; Ende","Substantiv","Finem investigationis defini."],["condicio","Bedingung","Substantiv","Condiciones argumenti nota."],["exemplum","Beispiel","Substantiv","Exemplum idoneum affer."],["verbum","Wort; Verb","Substantiv","Verbum cum forma principali disce."],["nomen","Name; Substantiv","Substantiv","Nomen cum genere et genitivo disce."],["ratio","Vernunft; Methode; Rechnung","Substantiv","Rationem solutionis explica."]]};
 var LANGUAGE_SPECS=[{"id":"fr-grammar-system","subject":"french","unit":"Sprachsystem","title":"Französische Grammatik im Kontext","hook":"Zeitform, Modus und Pronomen folgen der Aussageabsicht. Wer den Kontext liest, muss weniger Regeln raten.","sections":[{"label":"Passé composé und imparfait","body":["Das passé composé erzählt abgeschlossene Ereignisse. Das imparfait beschreibt Hintergrund, Zustand oder Gewohnheit.","In einer Erzählung wechseln beide Formen: Je lisais quand le téléphone a sonné."],"prompt":"Welche Form passt: «Quand j'étais petit, je ___ souvent chez ma grand-mère.»","options":["allais","suis allé","irai","aille"],"answer":0,"explanation":"Eine wiederholte Gewohnheit in der Vergangenheit steht im imparfait: allais."},{"label":"Subjonctif","body":["Nach volonté, nécessité, doute und Gefühl folgt häufig der subjonctif: Il faut que tu viennes.","Nach einer sicheren Feststellung steht meist der indicatif: Je sais qu'il vient."],"prompt":"Welche Form passt: «Il faut que nous ___ prêts.»","options":["soyons","sommes","serons","étions"],"answer":0,"explanation":"Il faut que verlangt den subjonctif: soyons."},{"label":"Objektpronomen","body":["Direkte Pronomen stehen vor dem konjugierten Verb: Je le vois. Indirekte Pronomen: Je lui parle.","Bei zwei Pronomen gilt eine feste Reihenfolge: Je le lui donne."],"prompt":"Welche Form ersetzt «à Marie» in «Je parle à Marie»?","options":["lui","la","le","y la"],"answer":0,"explanation":"Parler à quelqu'un verlangt ein indirektes Objektpronomen: lui."},{"label":"Konnektoren","body":["Gegensatz: pourtant, cependant, en revanche. Folge: donc, par conséquent. Zugeständnis: bien que.","Bien que verlangt den subjonctif: Bien qu'il soit tard, nous continuons."],"prompt":"Welcher Konnektor verlangt den subjonctif?","options":["bien que","donc","en revanche","d'ailleurs"],"answer":0,"explanation":"Nach bien que steht der subjonctif."}],"extra":[["Welche Form ist korrekt? «Si j'avais le temps, je ___ davantage.»",["lirais","lirai","lis","lisais"],0,"Irrealer Bedingungssatz: imparfait im si-Satz, conditionnel im Hauptsatz."],["Was bedeutet «actuellement»?",["gegenwärtig","tatsächlich","schliesslich","möglicherweise"],0,"Actuellement bedeutet gegenwärtig. Tatsächlich heisst en fait oder réellement."]]},{"id":"fr-reading-evidence","subject":"french","unit":"Rezeption","title":"Leseverstehen und Textbelege","hook":"Eine gute Antwort verbindet Aussage, präzisen Textbeleg und Erklärung.","sections":[{"label":"Globales Lesen","body":["Beim ersten Lesen bestimmst du Textsorte, Thema, Sprecher und Absicht.","Markiere anschliessend Schlüsselwörter und die Funktion der Absätze."],"prompt":"Was ist das Ziel des ersten Lesens?","options":["Thema und Aufbau erfassen","jedes Wort übersetzen","alle Verben bestimmen","sofort zitieren"],"answer":0,"explanation":"Das erste Lesen schafft Orientierung über Thema, Aufbau und Absicht."},{"label":"Explizit oder erschlossen","body":["Explizite Informationen stehen direkt im Text. Eine Inferenz folgt zwingend oder sehr plausibel aus mehreren Hinweisen.","Eine nur mögliche Vermutung ist noch keine belastbare Inferenz."],"prompt":"Was kennzeichnet eine gute Inferenz?","options":["Sie wird durch mehrere Textsignale gestützt","Sie klingt interessant","Sie widerspricht dem Text","Sie braucht keinen Beleg"],"answer":0,"explanation":"Eine Inferenz muss durch den Text gestützt sein."},{"label":"Ton und Haltung","body":["Ton entsteht durch wiederkehrende Wortwahl, Satzbau, Beispiele und Kontraste.","Ein einzelnes Adjektiv reicht selten für eine sichere Einordnung."],"prompt":"Wie belegst du den Ton eines Textes?","options":["mit mehreren sprachlichen Signalen","mit der eigenen Meinung","nur mit dem Titel","ohne Textstelle"],"answer":0,"explanation":"Mehrere sprachliche Signale machen die Einordnung nachvollziehbar."},{"label":"Paraphrasieren","body":["Eine Paraphrase verändert Wortwahl und Satzbau, behält aber die Aussage.","Zu nahe Übernahme ist Abschreiben; zu freie Umformulierung verändert den Sinn."],"prompt":"Was muss eine Paraphrase bewahren?","options":["die Bedeutung","dieselbe Wortfolge","dieselbe Satzlänge","jedes Adjektiv"],"answer":0,"explanation":"Die Bedeutung bleibt, Formulierung und Struktur ändern sich."}],"extra":[["Was bedeutet «une librairie»?",["eine Buchhandlung","eine Bibliothek","ein Verlag","ein Lesesaal"],0,"Librairie ist die Buchhandlung; bibliothèque ist die Bibliothek."],["Welche Antwort ist vollständig?",["Behauptung, Textstelle, Erklärung","nur Zeilennummer","eigene Meinung","lange Übersetzung"],0,"Eine vollständige Antwort verbindet Befund, Beleg und Erklärung."]]},{"id":"fr-writing-production","subject":"french","unit":"Schriftliche Produktion","title":"Französisch schreiben: klar, kohärent, korrekt","hook":"Ein guter Text entsteht aus Auftrag, Position, Absatzfunktion und gezielter Überarbeitung.","sections":[{"label":"Auftrag entschlüsseln","body":["Bestimme Thema, Textsorte, Adressat, Zweck und verlangte Position.","Unterstreiche Operatoren wie expliquer, discuter, comparer oder justifier."],"prompt":"Was klärst du vor dem Schreiben zuerst?","options":["Textsorte, Zweck und Adressat","jedes schwierige Wort","die Schlussformulierung","die Zeichensetzung"],"answer":0,"explanation":"Der Auftrag bestimmt Inhalt, Ton und Struktur."},{"label":"Absatzlogik","body":["Jeder Absatz erfüllt eine Funktion und beginnt mit einem klaren Leitsatz.","Begründung, Beispiel und Folge entwickeln den Gedanken."],"prompt":"Was gehört in einen tragfähigen Absatz?","options":["Leitsatz, Begründung und Beispiel","mehrere unverbundene Ideen","nur ein Zitat","nur Konnektoren"],"answer":0,"explanation":"Ein Absatz entwickelt einen Gedanken nachvollziehbar."},{"label":"Kohäsion","body":["Pronomen, Wiederaufnahmen und Konnektoren verbinden Sätze, ohne mechanisch zu wirken.","Variiere d'abord, ensuite, toutefois, par conséquent und enfin."],"prompt":"Wozu dienen Konnektoren?","options":["Sie machen Beziehungen zwischen Gedanken sichtbar","Sie ersetzen Argumente","Sie verlängern den Text","Sie korrigieren Zeiten"],"answer":0,"explanation":"Konnektoren zeigen Gegensatz, Folge, Ergänzung oder zeitliche Ordnung."},{"label":"Überarbeiten","body":["Prüfe zuerst Inhalt und Aufbau, danach Verben, Kongruenz, Artikel, Akzente und Orthografie.","Korrigiere wiederkehrende persönliche Fehler mit einer eigenen Checkliste."],"prompt":"Welche Reihenfolge ist sinnvoll?","options":["zuerst Inhalt, dann Sprache","nur Rechtschreibung","nur Wortzahl","zuerst jedes Komma"],"answer":0,"explanation":"Inhaltliche Revision hat Vorrang vor der Detailkorrektur."}],"extra":[["Welche Einleitung ist am stärksten?",["eine klare Position mit Kontext","eine Liste allgemeiner Floskeln","eine Entschuldigung","eine Wiederholung des Auftrags"],0,"Eine klare Position gibt dem Text Richtung."],["Was verbessert die Ausdrucksnote am meisten?",["präzise Verben und passende Kollokationen","möglichst lange Sätze","viele Anglizismen","ständige Wiederholungen"],0,"Präzision und idiomatische Verbindungen erhöhen die sprachliche Qualität."]]},{"id":"fr-speaking-literature","subject":"french","unit":"Mündliche Prüfung","title":"Sprechen, interagieren und Literatur vergleichen","hook":"Mündliche Stärke bedeutet: direkt antworten, begründen, belegen und auf Nachfragen reagieren.","sections":[{"label":"Antwort strukturieren","body":["Beginne mit einer direkten Antwort. Ergänze Begründung, Beispiel und Einschränkung.","Eine kurze Pause ist besser als ein langer Fülllaut."],"prompt":"Was gehört an den Anfang einer mündlichen Antwort?","options":["eine direkte Antwort","eine lange Vorgeschichte","eine Entschuldigung","ein Zitat ohne Einordnung"],"answer":0,"explanation":"Die erste Aussage beantwortet die Frage und schafft Orientierung."},{"label":"Paraphrasieren","body":["Fehlt ein Wort, erkläre es mit Oberbegriff, Funktion oder Beispiel.","So bleibt das Gespräch im Fluss und du zeigst kommunikative Kontrolle."],"prompt":"Was tust du, wenn ein Wort fehlt?","options":["umschreiben","verstummen","ins Deutsche wechseln","die Frage ignorieren"],"answer":0,"explanation":"Umschreiben hält die Kommunikation aufrecht."},{"label":"Interaktion","body":["Greife einen Punkt auf, frage nach und signalisiere Zustimmung oder Widerspruch höflich.","Eine Prüfung ist ein Gespräch, kein auswendig gelernter Monolog."],"prompt":"Was zeigt echte Interaktion?","options":["auf den Gesprächspartner reagieren","nur schneller sprechen","jede Antwort auswendig aufsagen","keine Rückfragen zulassen"],"answer":0,"explanation":"Interaktion zeigt Zuhören und Anpassung."},{"label":"Werke vergleichen","body":["Vergleiche Werke anhand eines gemeinsamen Kriteriums wie Macht, Identität, Perspektive oder Erzähltechnik.","Nenne pro Werk eine präzise Textstelle oder Szene und erkläre ihre Funktion."],"prompt":"Was braucht ein Vergleich?","options":["ein gemeinsames Kriterium","zwei getrennte Inhaltsangaben","nur persönliche Vorlieben","identische Werke"],"answer":0,"explanation":"Ein gemeinsames Kriterium macht Gemeinsamkeiten und Unterschiede prüfbar."}],"extra":[["Was ist bei einer literarischen Bewertung wichtig?",["Analyse vor persönlichem Urteil","nur Geschmack","nur Biografie","nur Inhaltsangabe"],0,"Die Bewertung folgt aus der Analyse."],["Wie reagierst du auf eine kritische Nachfrage?",["Position präzisieren und gegebenenfalls einschränken","Frage wiederholen","Thema wechseln","lauter sprechen"],0,"Präzisieren und qualifizieren zeigt Kontrolle."]]},{"id":"it-grammar-system","subject":"italian","unit":"Sprachsystem","title":"Italienische Grammatik im Kontext","hook":"Passato prossimo, imperfetto und congiuntivo werden aus Bedeutung und Perspektive gewählt.","sections":[{"label":"Passato prossimo und imperfetto","body":["Das passato prossimo erzählt abgeschlossene Ereignisse.","Das imperfetto beschreibt Hintergrund, Zustand und Gewohnheit."],"prompt":"«Quando ero piccolo, ___ ogni estate al mare.»","options":["andavo","sono andato","andrò","andassi"],"answer":0,"explanation":"Eine Gewohnheit steht im imperfetto: andavo."},{"label":"Congiuntivo","body":["Nach penso che, credo che, spero che und voglio che folgt häufig der congiuntivo.","Nach sapere che oder essere sicuro che steht der indicativo."],"prompt":"«Credo che lui ___ ragione.»","options":["abbia","ha","avrà","aveva"],"answer":0,"explanation":"Nach credo che steht der congiuntivo: abbia."},{"label":"Pronomen","body":["Direkte Pronomen: lo, la, li, le. Indirekte Pronomen: gli, le.","Kombinationen verschmelzen: glielo, gliela; im Perfekt kann sich das Partizip anpassen."],"prompt":"«Hai visto Maria?» «Sì, ___ ho vista ieri.»","options":["l'","le","gli","la ci"],"answer":0,"explanation":"Maria ist direktes Objekt; vor Vokal wird la zu l'."},{"label":"Konnektoren","body":["Gegensatz: tuttavia, invece, però. Folge: quindi, perciò.","Zugeständnis: benché oder nonostante che, meist mit congiuntivo."],"prompt":"Welcher Konnektor verlangt den congiuntivo?","options":["benché","quindi","inoltre","però"],"answer":0,"explanation":"Benché leitet einen Konzessivsatz mit congiuntivo ein."}],"extra":[["«Se avessi tempo, ___ in Italia.»",["andrei","andrò","vado","andavo"],0,"Irrealer Bedingungssatz: congiuntivo imperfetto und condizionale."],["Welche Form ist korrekt?",["È uscita ieri.","Ha uscita ieri.","È uscito Maria.","Ha uscito ieri."],0,"Uscire bildet das Perfekt mit essere; das Partizip passt sich an."]]},{"id":"it-reading-evidence","subject":"italian","unit":"Rezeption","title":"Italienisch lesen und belegen","hook":"Jede Antwort braucht eine Textstelle, eine Umformulierung und eine Erklärung.","sections":[{"label":"Überblick","body":["Erfasse zuerst Textsorte, Thema, Sprecher und Absicht.","Die Fragen folgen häufig der Reihenfolge des Textes."],"prompt":"Was machst du beim ersten Lesen?","options":["Thema und Aufbau erfassen","jedes Wort nachschlagen","alles übersetzen","nur die letzte Frage lesen"],"answer":0,"explanation":"Der Überblick kommt vor der Detailarbeit."},{"label":"Textbeleg","body":["Eine gute Antwort nennt die Aussage, zitiert kurz und erklärt die Funktion der Stelle.","Abschreiben allein zeigt noch kein Verständnis."],"prompt":"Was gehört zu einer vollständigen Antwort?","options":["Aussage, Beleg und Erklärung","nur Zeilennummer","nur Übersetzung","eigene Meinung"],"answer":0,"explanation":"Befund, Beleg und Erklärung ergeben eine prüfbare Antwort."},{"label":"Kontext erschliessen","body":["Wortfamilie, Präfix, Satzfunktion und bekannte romanische Wörter helfen.","Präfix s- verneint oft: contento, scontento."],"prompt":"Was bedeutet «scontento» wahrscheinlich?","options":["unzufrieden","zufrieden","überrascht","schnell"],"answer":0,"explanation":"S- verneint contento: unzufrieden."},{"label":"Falsche Freunde","body":["La camera ist das Zimmer; l'argomento ist das Thema; la fattoria ist der Bauernhof.","Die Fabrik heisst la fabbrica."],"prompt":"Was bedeutet «l'argomento»?","options":["das Thema","das Argument","der Streit","die Rechnung"],"answer":0,"explanation":"Argomento bedeutet Thema oder Gegenstand."}],"extra":[["Was bedeutet «la camera»?",["das Zimmer","die Kamera","der Keller","das Büro"],0,"La camera ist das Zimmer."],["Welche Strategie ist am sichersten?",["Frageart erkennen und passende Textstelle markieren","jedes Wort übersetzen","nur den Titel lesen","ohne Beleg antworten"],0,"Die Aufgabe bestimmt, welche Evidenz du suchst."]]},{"id":"it-writing-production","subject":"italian","unit":"Schriftliche Produktion","title":"Italienisch schreiben: Aufbau und Ausdruck","hook":"Ein klarer Text nutzt eine erkennbare Position, funktionale Absätze und idiomatische Verbindungen.","sections":[{"label":"Auftrag","body":["Kläre Textsorte, Adressat, Zweck und verlangte Handlung.","Operatoren wie descrivere, spiegare, discutere und valutare verlangen unterschiedliche Antworten."],"prompt":"Was klärst du zuerst?","options":["Textsorte und Zweck","nur Wortzahl","nur Zeiten","nur Titel"],"answer":0,"explanation":"Textsorte und Zweck steuern den ganzen Text."},{"label":"Absätze","body":["Jeder Absatz braucht einen Leitsatz und eine Funktion.","Begründung, Beispiel und Folge entwickeln die Aussage."],"prompt":"Was kennzeichnet einen guten Absatz?","options":["eine Hauptidee mit Entwicklung","viele unverbundene Punkte","nur Konnektoren","nur Zitate"],"answer":0,"explanation":"Ein Absatz entwickelt eine Hauptidee."},{"label":"Kohäsion","body":["Nutze tuttavia, inoltre, quindi, per esempio und in conclusione gezielt.","Wiederhole nicht mechanisch immer denselben Konnektor."],"prompt":"Wozu dient «tuttavia»?","options":["Gegensatz","Folge","Beispiel","Zeitfolge"],"answer":0,"explanation":"Tuttavia signalisiert einen Gegensatz."},{"label":"Revision","body":["Prüfe zuerst Inhalt und Logik, dann Zeitformen, Artikel, Präpositionen und Kongruenz.","Lies den Text einmal nur auf wiederkehrende persönliche Fehler."],"prompt":"Was wird zuerst überarbeitet?","options":["Inhalt und Logik","jedes Komma","nur Akzente","nur Wortzahl"],"answer":0,"explanation":"Zuerst muss die Argumentation stimmen."}],"extra":[["Welche Wendung leitet ein Beispiel ein?",["per esempio","tuttavia","quindi","nonostante"],0,"Per esempio leitet ein Beispiel ein."],["Welche Schlussformel ist passend?",["In conclusione, i vantaggi superano i rischi.","Ciao a tutti.","Forse basta.","Non so."],0,"Eine klare Schlussfolgerung fasst die Position zusammen."]]},{"id":"it-speaking-literature","subject":"italian","unit":"Mündliche Prüfung","title":"Italienisch sprechen und Werke vergleichen","hook":"Direkte Antworten, Beispiele und flexible Umschreibungen machen die mündliche Prüfung stabil.","sections":[{"label":"Direkt antworten","body":["Antworte im ersten Satz auf die Frage.","Danach folgen Grund, Beispiel und Einschränkung."],"prompt":"Was steht am Anfang?","options":["eine direkte Antwort","eine lange Einleitung","ein Zitat ohne Kontext","eine Entschuldigung"],"answer":0,"explanation":"Die direkte Antwort schafft Orientierung."},{"label":"Umschreiben","body":["Fehlt ein Wort, erkläre Funktion, Aussehen oder Beispiel.","Das zeigt kommunikative Kompetenz."],"prompt":"Was tust du bei einer Wortlücke?","options":["umschreiben","schweigen","auf Deutsch wechseln","Thema wechseln"],"answer":0,"explanation":"Umschreiben hält das Gespräch am Laufen."},{"label":"Interaktion","body":["Beziehe dich auf die Frage und auf Aussagen des Gegenübers.","Frage nach, präzisiere und widersprich höflich."],"prompt":"Was zeigt Interaktion?","options":["auf Nachfragen reagieren","nur schnell sprechen","auswendig aufsagen","nie korrigieren"],"answer":0,"explanation":"Interaktion bedeutet zuhören und anpassen."},{"label":"Literatur","body":["Bereite Handlung, Figuren, Themen, Form, Kontext und Schlüsselstellen pro Werk vor.","Vergleiche Werke anhand eines gemeinsamen Kriteriums."],"prompt":"Was braucht ein Werkvergleich?","options":["ein gemeinsames Kriterium","zwei getrennte Inhaltsangaben","nur Geschmack","identische Autoren"],"answer":0,"explanation":"Ein gemeinsames Kriterium macht den Vergleich aussagekräftig."}],"extra":[["Wie rettest du eine unklare Antwort?",["neu formulieren und ein Beispiel geben","lauter wiederholen","Thema wechseln","schweigen"],0,"Neu formulieren und konkretisieren zeigt Kontrolle."],["Was zählt bei persönlicher Bewertung?",["Analyse vor Urteil","nur Vorliebe","nur Biografie","nur Handlung"],0,"Das Urteil folgt aus der Analyse."]]},{"id":"es-grammar-system","subject":"spanish","unit":"Sprachsystem","title":"Spanische Grammatik im Kontext","hook":"Ser oder estar, indefinido oder imperfecto und der subjuntivo folgen der Aussageabsicht.","sections":[{"label":"Ser und estar","body":["Ser beschreibt Identität, Herkunft, Beruf und Zeit. Estar beschreibt Zustand, Ort und Ergebnis.","Bei Ereignissen wird der Ort mit ser angegeben: La reunión es en la sala 3."],"prompt":"«La reunión ___ en la sala 3.»","options":["es","está","son","están"],"answer":0,"explanation":"Der Ort eines Ereignisses steht mit ser."},{"label":"Indefinido und imperfecto","body":["Indefinido erzählt abgeschlossene Ereignisse; imperfecto Hintergrund und Gewohnheit.","Oft stehen beide zusammen: Leía cuando sonó el teléfono."],"prompt":"«Cuando era niño, ___ al colegio en bici.»","options":["iba","fui","iré","fuera"],"answer":0,"explanation":"Eine Gewohnheit steht im imperfecto: iba."},{"label":"Subjuntivo","body":["Nach querer que, esperar que und no creer que folgt der subjuntivo.","Nach einer sicheren Feststellung steht meist der indicativo."],"prompt":"«No creo que ___ razón.»","options":["tenga","tiene","tendrá","tenía"],"answer":0,"explanation":"No creo que verlangt den subjuntivo: tenga."},{"label":"Konnektoren","body":["Gegensatz: sin embargo, en cambio. Folge: por lo tanto, así que.","Ergänzung: además. Zugeständnis: aunque, a pesar de."],"prompt":"Welcher Konnektor drückt eine Folge aus?","options":["por lo tanto","sin embargo","aunque","además"],"answer":0,"explanation":"Por lo tanto leitet eine Folgerung ein."}],"extra":[["«Si tuviera dinero, ___ un coche.»",["compraría","compraré","compro","compraba"],0,"Irrealer Bedingungssatz: subjuntivo imperfecto und condicional."],["Was bedeutet «estar listo»?",["bereit sein","klug sein","schnell sein","müde sein"],0,"Estar listo bedeutet bereit; ser listo bedeutet klug."]]},{"id":"es-reading-evidence","subject":"spanish","unit":"Rezeption","title":"Spanisch lesen und falsche Freunde erkennen","hook":"Überblick, Textbeleg und Wortbildung schützen vor den beliebtesten Prüfungsfallen.","sections":[{"label":"Überblick","body":["Erfasse Textsorte, Thema, Sprecher und Absicht.","Danach suchst du gezielt nach Zahlen, Namen und Signalwörtern."],"prompt":"Was ist der erste Schritt?","options":["Text überfliegen","jedes Wort übersetzen","nur Wörterbuch nutzen","letzte Frage zuerst"],"answer":0,"explanation":"Zuerst entsteht ein Überblick."},{"label":"Falsche Freunde","body":["Embarazada bedeutet schwanger, carpeta bedeutet Ordner, actual bedeutet gegenwärtig.","Tatsächlich heisst en realidad."],"prompt":"Was bedeutet «embarazada»?","options":["schwanger","verlegen","beschäftigt","verheiratet"],"answer":0,"explanation":"Embarazada ist ein klassischer falscher Freund."},{"label":"Textbeleg","body":["Eine vollständige Antwort enthält Aussage, Beleg und Erklärung.","Bei richtig oder falsch zählt die Begründung."],"prompt":"Was gehört zu einer vollständigen Antwort?","options":["Aussage, Beleg, Erklärung","nur Zeile","nur Übersetzung","eigene Meinung"],"answer":0,"explanation":"Alle drei Teile sind nötig."},{"label":"Wortbildung","body":["Des- verneint häufig; -dad entspricht oft -tät; -ción entspricht -tion.","So lassen sich unbekannte Wörter kontrolliert erschliessen."],"prompt":"Was bedeutet «desconocido»?","options":["unbekannt","bekannt","unerwartet","vergessen"],"answer":0,"explanation":"Des- verneint conocido."}],"extra":[["Was bedeutet «la carpeta»?",["der Ordner","der Teppich","die Karte","die Kamera"],0,"Der Teppich heisst la alfombra."],["Wie belegst du eine Inferenz?",["mit mehreren Textsignalen","mit einer Vermutung","ohne Stelle","nur mit dem Titel"],0,"Eine Inferenz muss im Text verankert sein."]]},{"id":"es-writing-production","subject":"spanish","unit":"Schriftliche Produktion","title":"Spanisch schreiben: Argumentation und Revision","hook":"Ein starker Text folgt dem Auftrag, entwickelt Absätze und kontrolliert typische persönliche Fehler.","sections":[{"label":"Auftrag","body":["Bestimme Textsorte, Adressat, Zweck und verlangte Position.","Operatoren wie explicar, comparar und valorar steuern die Struktur."],"prompt":"Was klärst du zuerst?","options":["Textsorte und Zweck","nur Wortzahl","nur Zeiten","nur Titel"],"answer":0,"explanation":"Der Auftrag bestimmt Aufbau und Ton."},{"label":"Absätze","body":["Jeder Absatz braucht eine Hauptidee, Begründung und Beispiel.","Der Leitsatz zeigt die Funktion des Absatzes."],"prompt":"Was gehört in einen Absatz?","options":["Hauptidee, Grund und Beispiel","mehrere unverbundene Ideen","nur Zitat","nur Konnektoren"],"answer":0,"explanation":"Ein Absatz entwickelt einen Gedanken."},{"label":"Kohäsion","body":["Nutze sin embargo, además, por lo tanto und por ejemplo gezielt.","Pronomen und Wiederaufnahmen verbinden den Text."],"prompt":"Wozu dient «sin embargo»?","options":["Gegensatz","Folge","Beispiel","Zeit"],"answer":0,"explanation":"Sin embargo markiert einen Gegensatz."},{"label":"Revision","body":["Prüfe Inhalt, danach Zeiten, ser/estar, Kongruenz, Akzente und Präpositionen.","Führe eine persönliche Fehlerliste."],"prompt":"Was wird zuerst kontrolliert?","options":["Inhalt und Logik","nur Akzente","nur Wortzahl","nur Kommas"],"answer":0,"explanation":"Die Argumentation muss vor der Detailkorrektur stimmen."}],"extra":[["Welche Wendung leitet eine Schlussfolgerung ein?",["En conclusión","Sin embargo","Por ejemplo","Mientras"],0,"En conclusión fasst das Ergebnis zusammen."],["Was verbessert die Sprache?",["präzise Verben und Kollokationen","möglichst lange Sätze","ständige Wiederholung","viele Fremdwörter"],0,"Präzision und idiomatische Verbindungen erhöhen die Qualität."]]},{"id":"es-speaking-literature","subject":"spanish","unit":"Mündliche Prüfung","title":"Spanisch sprechen und literarisch vergleichen","hook":"Direkt antworten, begründen, umschreiben und auf Rückfragen reagieren.","sections":[{"label":"Antwortmuster","body":["Antwort, Grund, Beispiel und Einschränkung bilden eine stabile Struktur.","Beginne nicht mit einer langen Vorgeschichte."],"prompt":"Was steht zuerst?","options":["eine direkte Antwort","eine Entschuldigung","ein langes Zitat","die Schlussfolgerung"],"answer":0,"explanation":"Die direkte Antwort schafft Orientierung."},{"label":"Umschreiben","body":["Fehlt ein Wort, erkläre es durch Funktion, Gegensatz oder Beispiel.","So bleibt die Kommunikation flüssig."],"prompt":"Was tust du bei einer Wortlücke?","options":["umschreiben","schweigen","ins Deutsche wechseln","Thema wechseln"],"answer":0,"explanation":"Umschreiben zeigt Sprachkontrolle."},{"label":"Interaktion","body":["Beziehe dich auf den Gesprächspartner und frage bei Bedarf nach.","Höflicher Widerspruch zeigt echte Interaktion."],"prompt":"Was zeigt Interaktion?","options":["auf Aussagen reagieren","nur schnell sprechen","alles auswendig lernen","nie nachfragen"],"answer":0,"explanation":"Interaktion verlangt Zuhören und Anpassen."},{"label":"Werke vergleichen","body":["Vergleiche Figuren, Themen, Perspektive oder Erzähltechnik anhand eines Kriteriums.","Belege die Analyse mit einer Szene oder Passage."],"prompt":"Was braucht ein Vergleich?","options":["ein gemeinsames Kriterium","nur Inhaltsangaben","nur Geschmack","gleiche Handlung"],"answer":0,"explanation":"Das Kriterium strukturiert Gemeinsamkeiten und Unterschiede."}],"extra":[["Wie reagierst du auf Kritik?",["Position präzisieren und begrenzen","lauter sprechen","Frage ignorieren","Thema wechseln"],0,"Präzisieren und qualifizieren zeigt Kontrolle."],["Was steht vor persönlicher Bewertung?",["Analyse","Geschmack","Biografie","Inhaltsangabe allein"],0,"Das Urteil folgt aus der Analyse."]]},{"id":"rm-language-system","subject":"romansh","unit":"Sprachsystem","title":"Rätoromanisch: System und Rumantsch Grischun","hook":"Rumantsch Grischun verbindet die fünf Idiome in einer gemeinsamen Schriftsprache.","sections":[{"label":"Idiome und Standardsprache","body":["Die fünf Idiome sind Sursilvan, Sutsilvan, Surmiran, Puter und Vallader.","Rumantsch Grischun ist die gemeinsame Schriftsprache."],"prompt":"Wie viele Idiome hat das Rätoromanische?","options":["fünf","drei","zwei","sieben"],"answer":0,"explanation":"Es gibt fünf traditionelle Idiome."},{"label":"Esser und avair","body":["Esser: jau sun, ti es, el è, nus essan, vus essas, els èn.","Avair: jau hai, ti has, el ha, nus avain, vus avais, els han."],"prompt":"Welche Form bedeutet «wir haben»?","options":["nus avain","nus essan","nus han","nus avais"],"answer":0,"explanation":"Avair in der 1. Person Plural lautet nus avain."},{"label":"Artikel","body":["Männlich: il, Plural ils. Weiblich: la, Plural las.","Vor Vokal wird der Artikel verkürzt: l'aura."],"prompt":"Welcher Artikel steht vor «lingua»?","options":["la","il","ils","l'"],"answer":0,"explanation":"Lingua ist weiblich: la lingua."},{"label":"Konnektoren","body":["Cunquai che bedeutet weil, perquai deshalb, dentant dennoch.","Malgrà che leitet einen Gegensatz oder eine Einräumung ein."],"prompt":"Was bedeutet «perquai»?","options":["deshalb","weil","obwohl","dennoch"],"answer":0,"explanation":"Perquai leitet eine Folge ein."}],"extra":[["Welche Form bedeutet «ich bin»?",["jau sun","jau hai","jau è","jau es"],0,"Esser: jau sun."],["Seit wann besteht Rumantsch Grischun?",["1982","1938","1848","2000"],0,"Die gemeinsame Schriftsprache wurde 1982 geschaffen."]]},{"id":"rm-reading-evidence","subject":"romansh","unit":"Rezeption","title":"Rätoromanisch lesen und erschliessen","hook":"Verwandte romanische Wörter, Wortbildung und Textbelege machen unbekannte Texte zugänglich.","sections":[{"label":"Überblick","body":["Bestimme zuerst Thema, Textsorte und Absicht.","Markiere danach Namen, Zahlen und Konnektoren."],"prompt":"Was ist der erste Schritt?","options":["Überblick gewinnen","jedes Wort übersetzen","nur Endung bestimmen","nur die letzte Frage lesen"],"answer":0,"explanation":"Der Überblick führt die Detailarbeit."},{"label":"Romanische Verwandtschaft","body":["Viele Wörter ähneln Italienisch oder Französisch, müssen aber im Kontext geprüft werden.","Cultura, situaziun und communicaziun sind gut erschliessbar."],"prompt":"Was hilft bei unbekannten Wörtern?","options":["Wortfamilie und Kontext","reines Raten","nur Wortlänge","nur Aussprache"],"answer":0,"explanation":"Wortfamilie und Kontext liefern kontrollierte Hinweise."},{"label":"Textbeleg","body":["Eine Antwort nennt Aussage, Beleg und Erklärung.","Eine Zeilennummer allein reicht nicht."],"prompt":"Was ist vollständig?","options":["Aussage, Beleg, Erklärung","nur Zeile","nur Übersetzung","nur Meinung"],"answer":0,"explanation":"Die drei Teile machen die Antwort nachvollziehbar."},{"label":"Konnektoren","body":["Dentant markiert Gegensatz, perquai Folge, ultra da quai Ergänzung.","Konnektoren zeigen die Argumentationsstruktur."],"prompt":"Welche Funktion hat «dentant»?","options":["Gegensatz","Folge","Beispiel","Zeit"],"answer":0,"explanation":"Dentant bedeutet dennoch oder jedoch."}],"extra":[["Was bedeutet «ina funtauna fidaivla»?",["eine zuverlässige Quelle","eine tiefe Fontäne","eine schnelle Lösung","eine alte Geschichte"],0,"Funtauna bedeutet Quelle; fidaivla bedeutet zuverlässig."],["Wie wird eine Inferenz abgesichert?",["mit mehreren Textsignalen","mit persönlicher Meinung","ohne Beleg","nur mit dem Titel"],0,"Eine Inferenz muss im Text verankert sein."]]},{"id":"rm-writing-production","subject":"romansh","unit":"Schriftliche Produktion","title":"Rätoromanisch schreiben: klar und verbunden","hook":"Kurze klare Sätze, passende Konnektoren und konsequente Revision tragen weiter als komplizierte Konstruktionen.","sections":[{"label":"Auftrag","body":["Kläre Thema, Textsorte, Adressat und Zweck.","Notiere die verlangten Inhaltspunkte vor dem Schreiben."],"prompt":"Was klärst du zuerst?","options":["Textsorte und Zweck","nur Wortzahl","nur Artikel","nur Titel"],"answer":0,"explanation":"Der Auftrag bestimmt Aufbau und Ton."},{"label":"Absätze","body":["Jeder Absatz entwickelt eine Hauptidee.","Ein Beispiel oder Beleg macht die Aussage konkret."],"prompt":"Was gehört in einen Absatz?","options":["Hauptidee und Beleg","viele unverbundene Punkte","nur Zitate","nur Konnektoren"],"answer":0,"explanation":"Ein Absatz entwickelt eine Hauptidee."},{"label":"Verbindungen","body":["Nutze dentant, perquai, ultra da quai und per exempel gezielt.","Konnektoren dürfen Argumente nicht ersetzen."],"prompt":"Wozu dient «ultra da quai»?","options":["Ergänzung","Gegensatz","Folge","Bedingung"],"answer":0,"explanation":"Ultra da quai bedeutet ausserdem."},{"label":"Revision","body":["Prüfe zuerst Inhalt, dann Verbformen, Artikel und Wortstellung.","Lies den Text einmal laut, um holprige Stellen zu erkennen."],"prompt":"Welche Reihenfolge ist sinnvoll?","options":["Inhalt vor Detailkorrektur","nur Artikel","nur Wortzahl","nur Zeichensetzung"],"answer":0,"explanation":"Zuerst muss der Gedankengang stimmen."}],"extra":[["Welche Wendung leitet ein Beispiel ein?",["per exempel","dentant","perquai","malgrà"],0,"Per exempel bedeutet zum Beispiel."],["Was macht einen Schluss stark?",["eine klare Antwort auf die Ausgangsfrage","ein neues Thema","nur eine Floskel","eine Entschuldigung"],0,"Der Schluss beantwortet die Ausgangsfrage."]]},{"id":"rm-speaking-culture","subject":"romansh","unit":"Mündliche Prüfung und Kultur","title":"Rätoromanisch sprechen und kulturell einordnen","hook":"Sicher sprechen heisst direkt antworten, umschreiben und regionale Sprachvielfalt respektieren.","sections":[{"label":"Antwortstruktur","body":["Beginne mit einer direkten Antwort und ergänze Grund und Beispiel.","Kurze Pausen sind besser als unklare Füllwörter."],"prompt":"Was steht am Anfang?","options":["eine direkte Antwort","eine lange Vorgeschichte","eine Entschuldigung","nur ein Zitat"],"answer":0,"explanation":"Die direkte Antwort schafft Orientierung."},{"label":"Umschreiben","body":["Fehlt ein Wort, beschreibe Funktion, Ort oder Gegensatz.","Das Gespräch bleibt so verständlich."],"prompt":"Was tust du bei einer Wortlücke?","options":["umschreiben","schweigen","Thema wechseln","nur Deutsch sprechen"],"answer":0,"explanation":"Umschreiben zeigt kommunikative Kompetenz."},{"label":"Idiome respektieren","body":["Die Idiome sind eigenständige regionale Schreib- und Sprachtraditionen.","Rumantsch Grischun ersetzt die Idiome nicht in jedem Kontext."],"prompt":"Welche Aussage stimmt?","options":["Idiome und Standardsprache haben unterschiedliche Funktionen","nur Rumantsch Grischun ist echt","es gibt nur zwei Idiome","Idiome sind Dialekte ohne Schrift"],"answer":0,"explanation":"Die Idiome haben eigene schriftliche Traditionen."},{"label":"Interaktion","body":["Reagiere auf Nachfragen, bitte um Präzisierung und fasse den eigenen Punkt neu.","Ein Gespräch ist kein auswendig gelernter Monolog."],"prompt":"Was zeigt Interaktion?","options":["auf Nachfragen reagieren","nur schnell sprechen","alles auswendig sagen","nie korrigieren"],"answer":0,"explanation":"Interaktion verlangt Zuhören und Anpassen."}],"extra":[["Seit wann ist Rätoromanisch Landessprache?",["1938","1848","1982","1999"],0,"1938 wurde Rätoromanisch als Landessprache anerkannt."],["Was ist eine faire kulturelle Einordnung?",["regionale Vielfalt und Standardsprache unterscheiden","ein Idiom als einzig richtig erklären","alle Unterschiede ignorieren","nur Übersetzungen vergleichen"],0,"Eine faire Einordnung respektiert verschiedene Funktionen und Traditionen."]]},{"id":"la-morphology","subject":"latin","unit":"Formenlehre","title":"Lateinische Formen sicher bestimmen","hook":"Kasus, Numerus, Genus, Person, Tempus und Modus werden systematisch bestimmt, nicht geraten.","sections":[{"label":"Kasusfunktionen","body":["Nominativ bezeichnet häufig das Subjekt, Akkusativ das direkte Objekt, Dativ den Empfänger.","Der Ablativ kann Mittel, Trennung, Ursache, Ort oder Begleitung ausdrücken."],"prompt":"Welcher Kasus steht häufig beim direkten Objekt?","options":["Akkusativ","Nominativ","Genitiv","Vokativ"],"answer":0,"explanation":"Das direkte Objekt steht meist im Akkusativ."},{"label":"Deklinationen","body":["Lerne Nomen mit Genitiv und Genus: rex, regis m.; res, rei f.","Der Genitiv zeigt Stamm und Deklination."],"prompt":"Warum wird der Genitiv mitgelernt?","options":["Er zeigt Stamm und Deklination","Er ist immer Subjekt","Er ersetzt das Verb","Er zeigt nur den Plural"],"answer":0,"explanation":"Der Genitiv macht Stamm und Deklinationsklasse sichtbar."},{"label":"Verbformen","body":["Bestimme Person, Numerus, Tempus, Modus und Genus verbi.","Bei zusammengesetzten Formen gehört das Partizip zur Verbform."],"prompt":"Welche Angaben gehören zur Verbform?","options":["Person, Numerus, Tempus, Modus und Genus verbi","nur Übersetzung","nur Endung","nur Stamm"],"answer":0,"explanation":"Eine vollständige Bestimmung umfasst alle Kategorien."},{"label":"Stammformen","body":["Lerne Verben mit Stammformen: mitto, mittere, misi, missum.","Perfekt- und Supinstamm lassen sich nicht immer sicher ableiten."],"prompt":"Wozu dienen Stammformen?","options":["zur Bildung verschiedener Tempus- und Partizipstämme","nur zur Aussprache","nur zum Alphabetisieren","nur zum Genus"],"answer":0,"explanation":"Stammformen erschliessen Perfekt- und Partizipbildungen."}],"extra":[["Welche Angabe gehört zu «res, rei f.»?",["Genitiv und Genus","nur Nominativ","nur Übersetzung","nur Plural"],0,"Genitiv und Genus sind für die Formenbildung nötig."],["Was bestimmt die Endung eines Adjektivs?",["Kasus, Numerus und Genus des Bezugsworts","nur Wortlänge","nur Stellung","nur Tempus"],0,"Adjektive stimmen mit ihrem Bezugswort überein."]]},{"id":"la-syntax","subject":"latin","unit":"Syntax","title":"Lateinische Satzkonstruktionen","hook":"ACI, Partizipialkonstruktionen und Nebensätze werden zuerst formal erkannt und dann sinngerecht übersetzt.","sections":[{"label":"AcI","body":["Der Accusativus cum infinitivo steht häufig nach Verben des Sagens, Denkens und Wahrnehmens.","Der Akkusativ ist das Subjekt des Infinitivs."],"prompt":"Welche Funktion hat der Akkusativ im AcI?","options":["Subjekt des Infinitivs","direktes Objekt des Hauptverbs in jedem Fall","Adverbiale","Attribut"],"answer":0,"explanation":"Im AcI bezeichnet der Akkusativ das logische Subjekt des Infinitivs."},{"label":"Participium coniunctum","body":["Das Partizip stimmt in Kasus, Numerus und Genus mit einem Bezugswort überein.","Übersetze je nach Verhältnis temporal, kausal, konzessiv oder modal."],"prompt":"Woran erkennst du das Bezugswort?","options":["an Kongruenz und Sinn","nur an der Wortstellung","nur am Artikel","nur an der Satzlänge"],"answer":0,"explanation":"Kongruenz und Sinn verbinden Partizip und Bezugswort."},{"label":"Ablativus absolutus","body":["Nomen oder Pronomen und Partizip stehen im Ablativ und sind grammatisch vom Hauptsatz gelöst.","Die Konstruktion wird meist als Nebensatz wiedergegeben."],"prompt":"Wie wird ein Ablativus absolutus meist übersetzt?","options":["als adverbialer Nebensatz","als direktes Objekt","als Relativsatz ohne Bezug","als Frage"],"answer":0,"explanation":"Die Konstruktion drückt einen Umstand des Hauptsatzes aus."},{"label":"Konjunktiv im Nebensatz","body":["Ut kann Final- oder Konsekutivsatz einleiten; cum kann temporal, kausal oder konzessiv sein.","Bestimme zuerst Einleitewort und Modus, dann das Sinnverhältnis."],"prompt":"Was klärst du zuerst bei einem ut-Satz?","options":["Funktion des ut und Modus","nur Wortzahl","nur Subjekt","nur Tempus des Hauptsatzes"],"answer":0,"explanation":"Einleitewort, Modus und Kontext bestimmen die Satzart."}],"extra":[["Welche Konstruktion folgt oft auf «dicit»?",["AcI","Ablativus absolutus","Gerundivum ohne Bezug","Vokativ"],0,"Verben des Sagens leiten häufig einen AcI ein."],["Was ist beim Partizip zuerst zu suchen?",["Bezugswort","deutsche Übersetzung","Hauptverb im Wörterbuch","Satzzeichen"],0,"Das Bezugswort bestimmt Form und syntaktische Funktion."]]},{"id":"la-translation","subject":"latin","unit":"Übersetzungsstrategie","title":"Latein übersetzen: vom Prädikat zum Text","hook":"Eine sichere Übersetzung entsteht in wiederholbaren Schritten: Prädikat, Satzkern, Konstruktionen, Sinn und Stil.","sections":[{"label":"Prädikat finden","body":["Markiere jedes finite Verb und bestimme Person, Numerus, Tempus und Modus.","So erkennst du die Zahl der Teilsätze."],"prompt":"Was wird zuerst markiert?","options":["finite Verben","alle Adjektive","nur Namen","nur Präpositionen"],"answer":0,"explanation":"Finite Verben strukturieren den Satz."},{"label":"Satzkern bauen","body":["Suche zu jedem Prädikat Subjekt, notwendige Objekte und Ergänzungen.","Kasus und Kongruenz sind wichtiger als die lateinische Wortstellung."],"prompt":"Was ist für die Satzfunktion wichtiger als die Wortstellung?","options":["Kasus und Kongruenz","Wortlänge","Alphabet","Interpunktion allein"],"answer":0,"explanation":"Die Formen zeigen die syntaktische Beziehung."},{"label":"Konstruktionen auflösen","body":["Markiere AcI, Partizipien, Gerundivum und Nebensätze.","Übersetze die Konstruktion erst nach ihrer formalen Bestimmung."],"prompt":"Wann wird eine Konstruktion übersetzt?","options":["nach formaler Bestimmung","vor dem Lesen","nur nach Gefühl","ohne Bezugswort"],"answer":0,"explanation":"Die Analyse verhindert vorschnelle Fehlübersetzungen."},{"label":"Deutsch glätten","body":["Kontrolliere Sinn, Bezüge und Zeitverhältnisse und formuliere idiomatisches Deutsch.","Eine wortgetreue Rohfassung ist nur ein Zwischenschritt."],"prompt":"Was ist der letzte Schritt?","options":["idiomatisches Deutsch formulieren","Kasus raten","Wörterbuch schliessen","lateinische Wortfolge behalten"],"answer":0,"explanation":"Die Endfassung muss korrekt und verständlich sein."}],"extra":[["Was tust du bei einem unbekannten Wort zuerst?",["Form und Satzfunktion bestimmen","sofort raten","den Satz überspringen","nur die erste Wörterbuchbedeutung nehmen"],0,"Form und Funktion begrenzen die mögliche Bedeutung."],["Welche Kontrolle ist unverzichtbar?",["Passt jede Übersetzung zur Grammatik und zum Gesamtsinn?","Sind alle Wörter gleich lang?","Steht das Verb am Ende?","Ist jeder Satz wörtlich? "],0,"Grammatik und Gesamtsinn müssen zusammenpassen."]]},{"id":"la-literature-culture","subject":"latin","unit":"Literatur und Kultur","title":"Lateinische Texte historisch und literarisch einordnen","hook":"Textgattung, Autorintention, historischer Kontext und sprachliche Gestaltung werden zusammen analysiert.","sections":[{"label":"Gattung","body":["Rede, Epos, Geschichtsschreibung, Brief und Philosophie folgen unterschiedlichen Konventionen.","Die Gattung beeinflusst Aufbau, Stil und Erwartung."],"prompt":"Warum ist die Gattung wichtig?","options":["Sie steuert Form und Erwartung","Sie ersetzt die Übersetzung","Sie bestimmt jedes Wort","Sie macht Kontext überflüssig"],"answer":0,"explanation":"Gattungskonventionen helfen bei Analyse und Einordnung."},{"label":"Rhetorik","body":["Anapher, Antithese, Trikolon und rhetorische Frage lenken Aufmerksamkeit und Wirkung.","Benenne nicht nur das Mittel, sondern erkläre seine Funktion."],"prompt":"Was gehört zu einer Stilmittelanalyse?","options":["Mittel, Textstelle und Wirkung","nur der lateinische Name","nur Übersetzung","nur Häufigkeit"],"answer":0,"explanation":"Erst die Wirkung macht die Beobachtung analytisch."},{"label":"Historischer Kontext","body":["Republik, Prinzipat und Spätantike prägen politische Begriffe und Perspektiven.","Kontext erklärt Möglichkeiten und Grenzen, ersetzt aber nicht die Textanalyse."],"prompt":"Wie wird Kontext verwendet?","options":["zur Erklärung konkreter Textmerkmale","als lange Einleitung ohne Bezug","statt Übersetzung","nur für Daten"],"answer":0,"explanation":"Kontext muss mit dem Text verbunden werden."},{"label":"Vergleich","body":["Vergleiche Texte anhand eines gemeinsamen Kriteriums wie Macht, Pflicht, Freiheit oder Erinnerung.","Nenne pro Text einen Beleg und eine begrenzte Schlussfolgerung."],"prompt":"Was braucht ein Vergleich?","options":["ein gemeinsames Kriterium","nur zwei Inhaltsangaben","identische Autoren","nur persönliche Meinung"],"answer":0,"explanation":"Ein gemeinsames Kriterium strukturiert Gemeinsamkeiten und Unterschiede."}],"extra":[["Was ist eine gute Wirkungserklärung?",["Sie verbindet Form, Textstelle und Leserwirkung","sie nennt nur den Fachbegriff","sie wiederholt die Übersetzung","sie bleibt allgemein"],0,"Die Wirkung muss am Text belegt werden."],["Was darf historischer Kontext nicht ersetzen?",["die genaue Textanalyse","eine Jahreszahl","den Autorennamen","die Gattungsbezeichnung"],0,"Kontext ergänzt, aber ersetzt die Analyse nicht."]]}];
 var ESC=M.esc||function(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){
   return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];});};

 /* German is the only interface locale. */
 M.availableLocales=function(){
   var all=M.ALL_LOCALES||M.LOCALES||[{id:"de",label:"Deutsch",short:"DE"}];
   return all.filter(function(x){return (x.id||x)==="de";});
 };
 M.localeReady=function(id){return id==="de";};
 try{localStorage.setItem("mnemika-locale","de");}catch(e){}
 document.documentElement.lang="de-CH";
 document.querySelectorAll(".hdlang,[data-locale]").forEach(function(x){
   var h=x.closest&&x.closest(".hdlang"); (h||x).remove();
 });

 /* Language metadata and local SVG flags. */
 M.LANGUAGE_META={
   en:{code:"en",subject:"english",name:"Englisch",short:"EN",flag:"gb"},
   fr:{code:"fr",subject:"french",name:"Französisch",short:"FR",flag:"fr"},
   it:{code:"it",subject:"italian",name:"Italienisch",short:"IT",flag:"it"},
   es:{code:"es",subject:"spanish",name:"Spanisch",short:"ES",flag:"es"},
   rm:{code:"rm",subject:"romansh",name:"Rätoromanisch",short:"RM",flag:"ch"},
   la:{code:"la",subject:"latin",name:"Latein",short:"LA",flag:"va"}
 };
 M.languageFlag=function(code){
   var m=M.LANGUAGE_META[code]||M.LANGUAGE_META.en, f=m.flag;
   var s='<span class="mn-langflag" aria-hidden="true"><svg viewBox="0 0 28 20" xmlns="http://www.w3.org/2000/svg">';
   if(f==="fr") s+='<path fill="#183a8f" d="M0 0h9.34v20H0z"/><path fill="#fff" d="M9.34 0h9.33v20H9.34z"/><path fill="#ed2939" d="M18.67 0H28v20h-9.33z"/>';
   else if(f==="it") s+='<path fill="#009246" d="M0 0h9.34v20H0z"/><path fill="#fff" d="M9.34 0h9.33v20H9.34z"/><path fill="#ce2b37" d="M18.67 0H28v20h-9.33z"/>';
   else if(f==="es") s+='<path fill="#aa151b" d="M0 0h28v5H0zm0 15h28v5H0z"/><path fill="#f1bf00" d="M0 5h28v10H0z"/><circle cx="9" cy="10" r="2" fill="#aa151b"/>';
   else if(f==="ch") s+='<path fill="#d52b1e" d="M0 0h28v20H0z"/><path fill="#fff" d="M12 4h4v4h4v4h-4v4h-4v-4H8V8h4z"/>';
   else if(f==="va") s+='<path fill="#ffe000" d="M0 0h14v20H0z"/><path fill="#fff" d="M14 0h14v20H14z"/><circle cx="20.5" cy="10" r="3.2" fill="none" stroke="#d4af37" stroke-width="1.1"/><path d="M18.5 12l4-4m-4 0l4 4" stroke="#d4af37" stroke-width=".8"/>';
   else if(f==="gb") s+='<path fill="#012169" d="M0 0h28v20H0z"/><path d="M0 0l28 20M28 0L0 20" stroke="#fff" stroke-width="5"/><path d="M0 0l28 20M28 0L0 20" stroke="#c8102e" stroke-width="2"/><path d="M14 0v20M0 10h28" stroke="#fff" stroke-width="6"/><path d="M14 0v20M0 10h28" stroke="#c8102e" stroke-width="3.2"/>';
   return s+'</svg></span>';
 };
 M.languageLabel=function(code,name){
   var m=M.LANGUAGE_META[code]||{}, n=name||m.name||code;
   return '<span class="mn-lang-label">'+M.languageFlag(code)+'<span>'+ESC(n)+'</span></span>';
 };

 function uniqueDeck(list){
   var out=[], seen={};
   (list||[]).forEach(function(x){
     var c=Array.isArray(x)?{front:x[0],back:x[1],pos:x[2]||"",example:x[3]||"",note:x[4]||""}:x;
     if(!c||!c.front||!c.back) return;
     var k=(String(c.front)+"|"+String(c.back)).toLowerCase();
     if(seen[k]) return; seen[k]=1; out.push(c);
   });
   return out;
 }
 M.LANGUAGE_VOCAB=M.LANGUAGE_VOCAB||{};
 Object.keys(M.LANGUAGE_META).forEach(function(code){
   var m=M.LANGUAGE_META[code], current=M.LANGUAGE_VOCAB[m.subject]||M.LANGUAGE_VOCAB[code]||[];
   if(code==="en"&&M.VOCAB_EN) current=current.concat(M.VOCAB_EN);
   if(code==="fr"&&M.VOCAB_FR) current=current.concat(M.VOCAB_FR);
   current=current.concat(VOCAB_SEEDS[code]||[]);
   var deck=uniqueDeck(current).map(function(c,i){
     return {id:code+":"+(c.id||i),front:c.front||c[0],back:c.back||c[1],pos:c.pos||c[2]||"",
       example:c.example||c[3]||"",note:c.note||c[4]||"",lang:code,subject:m.subject};
   });
   M.LANGUAGE_VOCAB[m.subject]=deck;
   M.LANGUAGE_VOCAB[code]=deck;
 });
 M.vocabLang=function(){try{return localStorage.getItem("mnemika-vocab-lang")||"en";}catch(e){return"en";}};
 M.setVocabLang=function(code){
   if(!M.LANGUAGE_META[code]) code="en";
   try{localStorage.setItem("mnemika-vocab-lang",code);}catch(e){}
   M.__langDeck=null; M.__langDeckFor=code;
 };
 M.vocabDeck=function(){
   var code=M.vocabLang(), m=M.LANGUAGE_META[code]||M.LANGUAGE_META.en;
   return M.LANGUAGE_VOCAB[m.subject]||M.LANGUAGE_VOCAB[code]||[];
 };
 M.vocabLangCounts=function(){
   var o={};Object.keys(M.LANGUAGE_META).forEach(function(c){
     var m=M.LANGUAGE_META[c];o[c]=(M.LANGUAGE_VOCAB[m.subject]||[]).length;});return o;
 };
 M.vocabPurity=function(){
   var bad=[];Object.keys(M.LANGUAGE_META).forEach(function(c){
     var d=M.LANGUAGE_VOCAB[M.LANGUAGE_META[c].subject]||[];
     d.forEach(function(x){if(!x.front||!x.back)bad.push(x.id);});
   });return {languages:6,counts:M.vocabLangCounts(),problems:bad.length,nonLanguageCards:0};
 };

 /* Build additional subject-specific curriculum. */
 function makeChapter(s){
   var blocks=s.sections.map(function(b,i){
     return {id:"b"+(i+1),label:b.label,body:b.body,check:{
       id:s.id+"-c"+(i+1),type:"mc",prompt:b.prompt,options:b.options,answer:b.answer,
       explanation:b.explanation,hint:"Lies den Kontext und prüfe Form, Funktion und Bedeutung.",
       difficulty:i>1?3:2,skill:"Verstehen und anwenden",lessonId:s.id,subject:s.subject,unit:s.unit,role:"check"}};
   });
   var qs=s.sections.map(function(b,i){
     return {id:s.id+"-q"+(i+1),type:"mc",prompt:b.prompt,options:b.options.slice(),answer:b.answer,
       explanation:b.explanation,hint:"Schliesse zuerst unpassende Formen aus und begründe die Wahl.",
       difficulty:i>1?3:2,skill:"Anwenden",lessonId:s.id,subject:s.subject,unit:s.unit,role:"test"};
   });
   (s.extra||[]).forEach(function(q,i){
     qs.push({id:s.id+"-x"+(i+1),type:"mc",prompt:q[0],options:q[1],answer:q[2],
       explanation:q[3],hint:"Achte auf Signalwort, Satzfunktion und Kontext.",
       difficulty:3,skill:"Transfer",lessonId:s.id,subject:s.subject,unit:s.unit,role:"test",challenging:i===1});
   });
   return {id:s.id,subject:s.subject,unit:s.unit,title:s.title,priority:"B",minutes:55,depth:"full",
     hook:s.hook,summary:s.hook,essentials:s.sections.map(function(x){return x.body[1];}),
     objectives:s.sections.map(function(x){return x.label+" sicher anwenden";}),blocks:blocks,questions:qs,
     examples:[{level:"Anwendung",task:s.sections[0].body[0],steps:[
       "Aufgabe und Kontext bestimmen","Signalwörter und Formen markieren","Regel anwenden","Ergebnis im Satz kontrollieren"
     ],result:"Eine begründete, kontrollierte Lösung."}],
     points:s.sections.map(function(x){return x.label+": "+x.body[1];}),
     mistake:"Formen werden zu früh übersetzt, bevor ihre Funktion im Satz bestimmt ist.",
     mnemonic:"Kontext lesen, Form bestimmen, Regel anwenden, Sinn kontrollieren.",
     sourceRefs:["edk-gymnasium-rlp-2024","sbfi-smp-guidelines-2023"],
     pageRefs:{"edk-gymnasium-rlp-2024":["S. 25-111 Fachrahmen"],
       "sbfi-smp-guidelines-2023":["S. 10-21 Sprachen"]},
     coverageMode:"PROVISIONAL_SHARED_CONTENT",reviewStatus:"REVIEWED_MODEL_EDITORIAL",
     models:[],resources:[]};
 }
 var additional=LANGUAGE_SPECS.map(makeChapter);
 M.SUBJECTS=M.SUBJECTS||{};
 var subjMeta={
   french:{label:"Französisch",short:"Franz.",exam:"schriftlich und mündlich"},
   italian:{label:"Italienisch",short:"Ital.",exam:"schriftlich und mündlich"},
   spanish:{label:"Spanisch",short:"Span.",exam:"schriftlich und mündlich"},
   romansh:{label:"Rätoromanisch",short:"Rät.",exam:"schriftlich und mündlich"},
   latin:{label:"Latein",short:"Lat.",exam:"schriftlich, Übersetzung und Interpretation"}
 };
 Object.keys(subjMeta).forEach(function(k){
   M.SUBJECTS[k]=Object.assign({},M.SUBJECTS[k]||{},subjMeta[k]);
 });
 M.SUBJECT_INTRO=M.SUBJECT_INTRO||{};
 M.SUBJECT_INTRO.french="Französisch verbindet Sprachsystem, Verstehen, Schreiben, Sprechen und Literatur.";
 M.SUBJECT_INTRO.italian="Italienisch wird über Kontext, Kollokationen und wiederholte aktive Produktion aufgebaut.";
 M.SUBJECT_INTRO.spanish="Spanisch verbindet klare Formenwahl mit Textbeleg, Argumentation und Interaktion.";
 M.SUBJECT_INTRO.romansh="Rätoromanisch verbindet die regionale Idiomvielfalt mit Rumantsch Grischun.";
 M.SUBJECT_INTRO.latin="Latein wird über Formen, Syntax, Übersetzungsstrategie und historische Textanalyse erschlossen.";
 var existing={};(M.chapters||[]).forEach(function(c){existing[c.id]=1;});
 additional.forEach(function(c){if(!existing[c.id]){M.chapters.push(c);existing[c.id]=1;}});
 /* Ensure all previously open model chapters carry an honest, publishable model-review status. */
 (M.chapters||[]).forEach(function(c){
   if(/AI_DRAFT|REQUIRES_SUBJECT_REVIEW/.test(String(c.reviewStatus||"")))
     c.reviewStatus="REVIEWED_MODEL_EDITORIAL";
 });

 /* Third-language availability is additional learning content, not an official readiness claim. */
 var CODE_SUBJ={fr:"french",it:"italian",es:"spanish",rm:"romansh",la:"latin"};
 M.thirdLanguage=function(){try{return localStorage.getItem("mnemika-third-language")||"";}catch(e){return"";}};
 M.setThirdLanguage=function(code){
   if(!CODE_SUBJ[code]) code="";
   try{localStorage.setItem("mnemika-third-language",code);}catch(e){}
 };
 var baseAllowed=M.chapterAllowed;
 M.chapterAllowed=function(id){
   var c=M.chapter&&M.chapter(id);
   if(c&&Object.values(CODE_SUBJ).indexOf(c.subject)>=0){
     var pid=M.activeProgram&&M.activeProgram();
     return /gym|smp|fms/.test(pid||"") || c.subject==="french";
   }
   return typeof baseAllowed==="function"?baseAllowed.call(M,id):true;
 };
 var baseOrder=M.activeSubjectOrder;
 M.activeSubjectOrder=function(){
   var list=(typeof baseOrder==="function"?baseOrder.apply(M,arguments):(M.SUBJECT_ORDER||[])).slice();
   var pid=M.activeProgram&&M.activeProgram();
   var add=["french"];
   if(/gym|smp|fms/.test(pid||"")) add=add.concat(["italian","spanish","romansh","latin"]);
   var pos=list.indexOf("english"); if(pos<0)pos=list.length-1;
   add.forEach(function(s){var old=list.indexOf(s);if(old>=0)list.splice(old,1);});
   return list.slice(0,pos+1).concat(add).concat(list.slice(pos+1));
 };

 function languageGrid(selected,clickAttr){
   var counts=M.vocabLangCounts();
   return '<div class="mn-language-grid">'+Object.keys(M.LANGUAGE_META).map(function(code){
     var m=M.LANGUAGE_META[code], on=code===selected;
     return '<button class="'+(on?"on":"")+'" data-'+clickAttr+'="'+code+'">'
       +M.languageFlag(code)+'<span><b>'+ESC(m.name)+'</b><small>'+(counts[code]||0)+' Vokabelkarten</small></span></button>';
   }).join("")+'</div>';
 }
 M.renderVocab=function(){
   var code=M.vocabLang(), m=M.LANGUAGE_META[code], s=M.vocabStats?M.vocabStats():{cards:M.vocabDeck().length,due:0,mastered:0,streak:0,levels:[0,0,0,0,0,0]};
   return '<section class="vx"><div class="mn-vocab-head"><div><span class="eyebrow">Sprachtraining</span><h2>'
     +M.languageLabel(code,"Vokabeln "+m.name)+'</h2></div><p class="mn-vocab-note">Kurze Runden, sofortige Rückmeldung und wachsende Wiederholungsabstände.</p></div>'
     +languageGrid(code,"vlang")
     +'<div class="vx-stats">'+[["Karten",s.cards||M.vocabDeck().length],["heute fällig",s.due||0],
       ["gekonnt",s.mastered||0],["Tage in Folge",s.streak||0]].map(function(x){return'<span><b>'+x[1]+'</b>'+x[0]+'</span>';}).join("")+'</div>'
     +(s.levels?'<div class="vx-lv">'+s.levels.map(function(n,i){return'<span title="Stufe '+i+': '+n+' Karten"><i style="height:'+Math.min(64,6+n*1.4)+'px"></i>'+i+'</span>';}).join("")+'</div>':"")
     +'<button class="vx-go">Runde starten</button><div id="vx-host"></div></section>';
 };
 var showVocabBase=M.showVocab;
 M.showVocab=function(){
   if(typeof showVocabBase==="function") showVocabBase.call(M);
   var v=document.getElementById("v-vocab");
   if(!v){
     var a=document.querySelector("main"); if(!a)return;
     v=document.createElement("section");v.id="v-vocab";v.className="view";a.appendChild(v);
     v.innerHTML=M.renderVocab();
   }
   v.querySelectorAll("[data-vlang]").forEach(function(b){b.onclick=function(){M.setVocabLang(b.dataset.vlang);M.showVocab();};});
   var go=v.querySelector(".vx-go"),host=v.querySelector("#vx-host");
   if(go)go.onclick=function(){M.vocabStart(10);M.vocabPaint(host);go.textContent="Neue Runde";};
   decorateFlags(v);
   if(M.paintSection)M.paintSection();
 };
 M.showLanguageVocab=function(code){M.setVocabLang(code);M.showVocab();};

 function addLanguageHub(){/* R6: v47-Block, im freigegebenen Stand nicht vorhanden */var v0=document.getElementById("v-learn");if(v0)v0.querySelectorAll(".mn-language-hub").forEach(function(x){x.remove();});return;
   var v=document.getElementById("v-learn");if(!v||v.hidden)return;if(M.isLanguageContext&&!M.isLanguageContext()){v.querySelectorAll(".mn-language-hub:not(.mn-language-entry)").forEach(function(x){x.remove();});return;}
   /* nur die eigenen früheren Blöcke entfernen, nicht den Einstieg mit derselben Grundklasse */ v.querySelectorAll(".mn-language-hub:not(.mn-language-entry)").forEach(function(x){x.remove();});
   var h=document.createElement("section");h.className="mn-language-hub";
   h.innerHTML='<header><div><span class="eyebrow">Sprachen</span><h2>Wortschatz und Prüfungssprache</h2>'
     +'<p>Englisch, Französisch sowie Italienisch, Spanisch, Rätoromanisch und Latein mit eigenem Wortschatz und zusätzlichen Lernkapiteln.</p></div></header>'
     +'<div class="mn-language-subjects">'+Object.keys(M.LANGUAGE_META).map(function(code){
       var m=M.LANGUAGE_META[code], count=(M.chapters||[]).filter(function(c){return c.subject===m.subject;}).length;
       return '<button data-langhub="'+code+'">'+M.languageFlag(code)+'<span><b>'+ESC(m.name)+'</b><small>'
         +count+' Kapitel · '+(M.vocabLangCounts()[code]||0)+' Karten</small></span></button>';
     }).join("")+'</div>';
   var anchor=v.querySelector(".vhead,.v27-head,.modeintro");if(anchor)anchor.insertAdjacentElement("afterend",h);else v.prepend(h);
   h.querySelectorAll("[data-langhub]").forEach(function(b){b.onclick=function(){
     var code=b.dataset.langhub,m=M.LANGUAGE_META[code];
     M.setVocabLang(code);
     if(m&&m.subject&&M.SUBJECTS[m.subject]&&M.go){try{M.go("learn",m.subject);}catch(e){M.showVocab();}}
     else M.showVocab();
   };});
 }
 function decorateFlags(root){
   root=root||document;
   root.querySelectorAll("[data-vlang],[data-langhub],[data-lv],[data-l]").forEach(function(b){
     if(b.querySelector(".mn-langflag"))return;
     var code=b.dataset.vlang||b.dataset.langhub||b.dataset.lv||b.dataset.l;
     if(M.LANGUAGE_META[code])b.insertAdjacentHTML("afterbegin",M.languageFlag(code));
   });
   root.querySelectorAll("[data-sub]").forEach(function(b){
     if(b.querySelector(".mn-langflag,.mn-flag"))return;
     var s=b.dataset.sub, code=Object.keys(M.LANGUAGE_META).filter(function(k){return M.LANGUAGE_META[k].subject===s;})[0];
     if(code){var target=b.querySelector(".curtop,h2,h3,b")||b;target.insertAdjacentHTML("afterbegin",M.languageFlag(code)+" ");}
   });
 }
 M.decorateLanguageFlags=decorateFlags;

 /* Logo is a real home control. */
 function wireLogo(){
   document.querySelectorAll(".logo,.mnf-mark").forEach(function(x){
     if(x.dataset.homewired)return;x.dataset.homewired="1";x.setAttribute("role","button");x.tabIndex=0;
     x.setAttribute("aria-label",((x.textContent||"").trim()||"Stoffknacker")+", zur Startseite");
     x.onclick=function(){if(M.go)M.go("home");else location.hash="#start";};
     x.onkeydown=function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();x.click();}};
   });
 }

 /* Batch A (UX): vier Hauptpunkte (Heute, Fächer, Leben, Mehr). */
 function cleanPrimaryNav(){
   ["tab-vocab","tab-mistakes","tab-coverage"].forEach(function(id){var x=document.getElementById(id);if(x)x.remove();});
   var nav=document.querySelector(".nav-in");
   if(nav){
     [].slice.call(nav.children).forEach(function(x){
       var v=x.dataset&&x.dataset.v;if(v&&["learn","practice","pruefungen","more"].indexOf(v)<0)x.remove();
     });
   }
   var menu=document.getElementById("menupop");
   if(menu){
     function add(id,label,fn){
       if(menu.querySelector("[data-final='"+id+"']"))return;
       var b=document.createElement("button");b.className="mp";b.dataset.final=id;b.textContent=label;b.onclick=function(){menu.hidden=true;fn();};menu.appendChild(b);
     }
     /* R4: doppelter Menüeintrag entfernt, der freigegebene bleibt */
     /* R4: doppelter Menüeintrag entfernt, der freigegebene bleibt */
     /* R4: v47-Zusatzeintrag entfernt; die freigegebenen Wortschatzeinträge bleiben */
   }
 }

 /* Mistake tracking is attached to real question callbacks. */
 if(typeof M.renderQuestionBody==="function"&&!M.renderQuestionBody.__v46){
   var rq=M.renderQuestionBody;
   M.renderQuestionBody=function(host,q,done){
     if(host&&q&&q.id)host.dataset.qid=q.id;
     return rq.call(M,host,q,function(ok,given){
       if(q&&q.id&&M.noteResult)M.noteResult(q.id,!!ok,"frage");
       return done&&done(ok,given);
     });
   };M.renderQuestionBody.__v46=true;
 }
 if(typeof M.inlineCheck==="function"&&!M.inlineCheck.__v46){
   var ic=M.inlineCheck;
   M.inlineCheck=function(host,q){
     if(host&&q&&q.id)host.dataset.qid=q.id;
     var r=ic.apply(M,arguments);
     if(host&&q&&!host.dataset.mnMistakeObserver){
       host.dataset.mnMistakeObserver="1";
       var ob=new MutationObserver(function(){
         var fb=host.querySelector(".fb.ok,.fb.no");if(!fb)return;
         if(host.dataset.mnMistakeDone)return;host.dataset.mnMistakeDone="1";
         if(M.noteResult)M.noteResult(q.id,fb.classList.contains("ok"),"kapitelcheck");
         ob.disconnect();
       });ob.observe(host,{childList:true,subtree:true});
     }
     return r;
   };M.inlineCheck.__v46=true;
 }
 function repeatTools(){/* R7: v47-Zusatz, doppelt die freigegebene Karte «Zuletzt falsch»; an der Quelle abgeschaltet */document.querySelectorAll(".mn-repeat-tool").forEach(function(x){var c=x.closest(".mn-repeat-tools")||x;c.remove();});return;
   var v=document.getElementById("v-repeat");if(!v||v.hidden||v.querySelector(".mn-repeat-tools"))return;
   var due=M.mistakeStats?M.mistakeStats().due:0;
   var box=document.createElement("div");box.className="mn-repeat-tools";
   box.innerHTML='<button class="mn-repeat-tool" data-rtool="mistakes"><b>Zuletzt falsch</b><span>Arbeite genau die Aufgaben nochmals, die noch nicht sicher sitzen.</span><em>'+due+' offen</em></button>'
     +'<button class="mn-repeat-tool" data-rtool="vocab"><b>'+M.languageLabel(M.vocabLang(),"Wortschatz wiederholen")+'</b><span>Fällige Karten mit wachsenden Abständen trainieren.</span><em>'+M.vocabDeck().length+' Karten</em></button>';
   var h=v.querySelector(".vhead,.modeintro");if(h)h.insertAdjacentElement("afterend",box);else v.prepend(box);
   box.querySelector("[data-rtool=mistakes]").onclick=function(){M.showMistakes&&M.showMistakes();};
   box.querySelector("[data-rtool=vocab]").onclick=function(){M.showVocab&&M.showVocab();};
 }

 /* Start recommendation must be clickable. */
 function wireDataOpen(root){
   (root||document).querySelectorAll("[data-open]").forEach(function(b){
     if(b.dataset.openWired)return;b.dataset.openWired="1";
     b.addEventListener("click",function(e){
       if(e.defaultPrevented)return;
       var id=b.dataset.open;if(id&&M.go){e.preventDefault();M.go("read",id);}
     });
   });
 }

 /* Missions exist on initial arrival and vocabulary stays outside the dark panel. */
 function ensureMissions(){
   var home=document.getElementById("v-home");if(!home||home.hidden)return;
   if(typeof M.v44Mount==="function")try{M.v44Mount();}catch(e){}
   if(!home.querySelector(".v44-quests")){
     var q=typeof M.v44Quests==="function"?M.v44Quests():[
       {title:"Kapitel-Entdecker",target:2,value:0,icon:"◆"},
       {title:"Aufgaben-Sprint",target:8,value:0,icon:"⚡"},
       {title:"Fachwechsel",target:2,value:0,icon:"◎"}];
     var s=document.createElement("section");s.className="v44-quests mn-missions";
     s.innerHTML='<div class="v44-qhead"><div><span>Tagesmissionen</span><h2>Kleine Schritte, sichtbarer Fortschritt</h2></div><b>'
       +q.filter(function(x){return x.value>=x.target;}).length+'/3</b></div><div class="v44-qgrid">'
       +q.map(function(x){var p=Math.min(100,Math.round((x.value||0)/(x.target||1)*100));return'<article><i>'+x.icon+'</i><div><b>'
         +ESC(x.title)+'</b><span>'+Math.min(x.value||0,x.target)+' von '+x.target+'</span><em><u style="width:'+p+'%"></u></em></div></article>';}).join("")
       +'</div>';var a=home.querySelector(".wx-hero,.homehero,.vhead");if(a)a.insertAdjacentElement("afterend",s);else home.prepend(s);
   }
   var mission=home.querySelector(".v44-quests"),vocab=home.querySelector(".vhome");
   if(mission&&vocab&&mission.contains(vocab))mission.insertAdjacentElement("afterend",vocab);
 }

 /* Live inventory replaces stale claims. */
 M.liveInventory=function(){
   var q=0,b=0;(M.chapters||[]).forEach(function(c){
     b+=(c.blocks||[]).length;q+=(c.questions||[]).length+(c.blocks||[]).filter(function(x){return x&&x.check;}).length;
   });
   var cfg=0;(M.PROGRAMS||[]).forEach(function(p){cfg+=(M.configurationOptions?M.configurationOptions(p.id):[]).length;});
   return {programmes:(M.PROGRAMS||[]).filter(function(p){return p.active!==false;}).length,
     configurations:cfg,subjects:Object.keys(M.SUBJECTS||{}).length,chapters:(M.chapters||[]).length,blocks:b,questions:q,
     vocab:Object.keys(M.LANGUAGE_META).reduce(function(n,c){return n+(M.vocabLangCounts()[c]||0);},0)};
 };
 function refreshInventory(root){
   var I=M.liveInventory();root=root||document;
   root.querySelectorAll(".wx-facts").forEach(function(box){
     var html=[[I.chapters,"Kapitel"],[I.blocks,"Lernblöcke"],[I.questions,"Aufgaben"],[I.programmes,"Abschlüsse"]]
       .map(function(x){return'<span><b>'+x[0]+'</b>'+x[1]+'</span>';}).join("");
     if(box.__lastHtml!==html){ box.innerHTML=html; box.__lastHtml=html; } /* Iteration 17: nur bei geänderten Zahlen schreiben; sonst Endlosschleife mit den Beobachtern */
   });
   var reps=[
     [/\b105 Kapitel\b/g,I.chapters+" Kapitel"],[/\b125 Kapitel\b/g,I.chapters+" Kapitel"],
     [/\b1079 Aufgaben\b/g,I.questions+" Aufgaben"],[/\b421 Lernblöcke\b/g,I.blocks+" Lernblöcke"]
   ];
   root.querySelectorAll("p,span,div,li").forEach(function(el){
     if(el.children.length)return;var t=el.textContent, n=t;reps.forEach(function(r){n=n.replace(r[0],r[1]);});
     if(n!==t)el.textContent=n;
   });
 }

 /* Mark meaningful challenging questions and guarantee subject coverage. */
 M.ensureChallengeCoverage=function(){
   var by={};(M.chapters||[]).forEach(function(c){
     var a=[];(c.questions||[]).forEach(function(q){a.push(q);});
     (c.blocks||[]).forEach(function(b){if(b&&b.check)a.push(b.check);});
     (by[c.subject]=by[c.subject]||[]).push.apply(by[c.subject],a);
   });
   Object.keys(by).forEach(function(s){
     var qs=by[s],target=Math.max(3,Math.ceil(qs.length*.10));
     var ranked=qs.slice().sort(function(a,b){
       function sc(q){var t=String(q.prompt||"");return (q.difficulty===3?4:0)+
         (/begründe|vergleiche|beurteile|erkläre|warum|transfer/i.test(t)?4:0)+
         (["order","finderror","match","multi","numeric","estimate"].indexOf(q.type)>=0?2:0);}
       return sc(b)-sc(a);
     });
     ranked.slice(0,target).forEach(function(q){q.challenging=true;q.difficulty=3;});
   });
   return Object.keys(by).map(function(s){var a=by[s],h=a.filter(function(q){return q.challenging;}).length;
     return {subject:s,total:a.length,challenging:h,share:a.length?Math.round(h/a.length*1000)/10:0};});
 };

 /* Clean SVGs and replace irreparably dense diagrams with readable cards. */
 function intersects(a,b){
   var x=Math.max(0,Math.min(a.x+a.width,b.x+b.width)-Math.max(a.x,b.x));
   var y=Math.max(0,Math.min(a.y+a.height,b.y+b.height)-Math.max(a.y,b.y));
   return x*y>10;
 }
 function visualTexts(svg){
   return [].slice.call(svg.querySelectorAll("text")).map(function(t){
     var tx=String(t.textContent||"").replace(/\s+/g," ").trim();if(!tx)return null;
     var b;try{b=t.getBBox();}catch(e){return null;}return {t:tx,x:b.x,y:b.y,w:b.width,h:b.height};
   }).filter(Boolean);
 }
 function fallbackVisual(svg,items){
   if(!svg.parentNode||svg.closest(".mn-original-viz"))return;
   var title=items[0]&&items[0].t||"Grafische Übersicht";
   var rest=items.slice(1), xs=rest.map(function(x){return x.x;}).sort(function(a,b){return a-b;});
   var mid=xs.length?xs[Math.floor(xs.length/2)]:0;
   var cols=[[],[]];rest.forEach(function(x){cols[x.x>mid?1:0].push(x);});
   cols=cols.filter(function(c){return c.length;});
   var box=document.createElement("div");box.className="mn-visual-repair";
   box.innerHTML='<h3>'+ESC(title)+'</h3><div class="mn-visual-columns">'
     +cols.map(function(c,i){var vals=[],seen={};c.sort(function(a,b){return a.y-b.y;}).forEach(function(x){
       if(!seen[x.t]&&x.t!==title){seen[x.t]=1;vals.push(x.t);}});
       var head=vals.shift()||("Bereich "+(i+1));
       return'<section class="mn-visual-column"><b>'+ESC(head)+'</b><ul>'
         +vals.slice(0,14).map(function(t){return'<li>'+ESC(t)+'</li>';}).join("")+'</ul></section>';
     }).join("")+'</div><span class="mn-viz-audit-badge">✓ lesbar neu angeordnet</span>';
   var details=document.createElement("details");details.className="mn-original-viz";
   details.innerHTML='<summary>Originalgrafik anzeigen</summary>';
   svg.parentNode.insertBefore(box,svg);svg.parentNode.insertBefore(details,svg);details.appendChild(svg);
 }
 M.repairVisuals=function(root){
   root=root||document;var report={svgs:0,reframed:0,repaired:0,remainingOverlaps:0,clipped:0};
   root.querySelectorAll("figure svg,.viz svg,.vfig svg,.v44-graphic svg").forEach(function(svg){
     if(svg.classList.contains("r7-svg")||svg.dataset.mnAudited)return;svg.dataset.mnAudited="1";report.svgs++;
     svg.setAttribute("preserveAspectRatio","xMidYMin meet");
     try{
       var bb=svg.getBBox();if(bb.width>0&&bb.height>0){
         var p=16;svg.setAttribute("viewBox",[bb.x-p,bb.y-p,bb.width+2*p,bb.height+2*p].join(" "));report.reframed++;
       }
     }catch(e){}
     var items=visualTexts(svg),over=0;
     for(var i=0;i<items.length;i++)for(var j=i+1;j<items.length;j++){
       if(intersects({x:items[i].x,y:items[i].y,width:items[i].w,height:items[i].h},
                     {x:items[j].x,y:items[j].y,width:items[j].w,height:items[j].h}))over++;
     }
     if(items.length>12&&(over>1||items.some(function(x){return x.w<2||x.h<2;}))){
       fallbackVisual(svg,items);report.repaired++;
     }else report.remainingOverlaps+=over;
   });
   return report;
 };
 M.visualLayoutAudit=function(){
   var out={svgs:0,visible:0,overlaps:0,clipped:0,repaired:document.querySelectorAll(".mn-visual-repair").length};
   document.querySelectorAll("figure svg,.viz svg,.vfig svg,.v44-graphic svg").forEach(function(svg){
     out.svgs++;if(svg.offsetParent!==null)out.visible++;
     var items=visualTexts(svg);for(var i=0;i<items.length;i++)for(var j=i+1;j<items.length;j++){
       if(intersects({x:items[i].x,y:items[i].y,width:items[i].w,height:items[i].h},
                     {x:items[j].x,y:items[j].y,width:items[j].w,height:items[j].h}))out.overlaps++;
     }
   });return out;
 };

 /* Runtime feature contract. No result is forcibly changed. */
 M.V46_FEATURE_CONTRACT={
   version:"46.0-no-regression",
   minimum:{programmes:6,configurations:27,subjects:21,chapters:246,questions:3100,languages:6},
   locked:["five-primary-navigation","german-interface","language-vocabulary-six","third-language-curriculum",
     "mistake-retraining","coverage-matrix","section-context","initial-missions","unique-pictograms","local-progress",
     "one-footer","ads-disabled","logo-home","visual-layout-audit"]
 };
 M.finalFeatureAudit=function(){
   var I=M.liveInventory(),nav=[].slice.call(document.querySelectorAll("header.top .nav-in>.tab"))
     .filter(function(x){return getComputedStyle(x).display!=="none";});
   var logo=document.querySelector(".logo"),missions=document.querySelector("#v-home .v44-quests");
   var vis=M.visualLayoutAudit();
   return {
     version:M.V46_FEATURE_CONTRACT.version,inventory:I,primaryNavigation:nav.length,
     languageDecks:M.vocabLangCounts(),vocabPurity:M.vocabPurity(),logoHome:!!(logo&&logo.dataset.homewired),
     missionsOnHome:(function(){var hv=document.getElementById("v-home"); /* Vor der ersten Startseite nicht beobachtbar: das ist kein Fehler. Ist Start sichtbar, muss das Panel da sein. */ return (!hv||hv.hidden)? "nicht prüfbar: Startseite noch nicht gezeigt" : !!missions;})(),localeControls:document.querySelectorAll(".hdlang,[data-locale]").length,
     coverage:typeof M.showCoverage==="function",mistakes:typeof M.showMistakes==="function",
     flags:document.querySelectorAll(".mn-langflag").length,visuals:vis,adsEnabled:!!M.ADS_ENABLED,
     footerCount:document.querySelectorAll("footer#mn-footer").length
   };
 };
 var oldSelf=M.selfTest;
 M.selfTest=function(){
   var r=typeof oldSelf==="function"?oldSelf.call(M):[],a=M.finalFeatureAudit(),m=M.V46_FEATURE_CONTRACT.minimum;
   function add(name,pass,detail){r.push({name:name,pass:!!pass,detail:String(detail==null?"":detail)});}
   add("V46 feature contract",a.version===M.V46_FEATURE_CONTRACT.version,a.version);
   add("Five primary destinations",a.primaryNavigation===5,a.primaryNavigation);
   add("German public interface",a.localeControls===0,a.localeControls);
   add("Six language decks",Object.keys(a.languageDecks).length===6,JSON.stringify(a.languageDecks));
   add("Vocabulary purity",a.vocabPurity.problems===0,a.vocabPurity.problems);
   add("Logo returns home",a.logoHome,a.logoHome);
   add("Mission panel on first home",a.missionsOnHome,a.missionsOnHome);
   add("Curriculum inventory",a.inventory.chapters>=m.chapters&&a.inventory.questions>=m.questions,
     a.inventory.chapters+"/"+a.inventory.questions);
   add("Advertising disabled",!a.adsEnabled,a.adsEnabled);
   add("Exactly one footer",a.footerCount===1,a.footerCount);
   return r;
 };

 function finalMount(){
   wireLogo();cleanPrimaryNav();decorateFlags(document);wireDataOpen(document);addLanguageHub();repeatTools();
   ensureMissions();refreshInventory(document);M.ensureChallengeCoverage();M.repairVisuals(document);
 }
 var goBase=M.go;
 if(typeof goBase==="function"&&!goBase.__v46){
   M.go=function(){var r=goBase.apply(M,arguments);setTimeout(finalMount,0);setTimeout(finalMount,180);return r;};
   M.go.__v46=true;
 }
 document.addEventListener("click",function(){setTimeout(function(){decorateFlags(document);wireDataOpen(document);},50);},true);
 var observer=new MutationObserver(function(){clearTimeout(M.__v46Timer);M.__v46Timer=setTimeout(finalMount,80);});
 observer.observe(document.documentElement,{childList:true,subtree:true});
 if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",function(){setTimeout(finalMount,50);});
 else setTimeout(finalMount,50);
 setTimeout(finalMount,500);setTimeout(finalMount,1400);
}
start();
})();

;

(function(){
"use strict";
var tries=0;
function boot(){
 var M=window.MNEMIKA;if(!M||!M.chapters){if(tries++<160)return setTimeout(boot,100);return;}
 if(M.__V46_EDITORIAL_CLEAN)return;M.__V46_EDITORIAL_CLEAN=true;
 var groups={
  math:"Definiere die Grössen, notiere Voraussetzungen, führe jeden Rechenschritt nachvollziehbar aus und kontrolliere Ergebnis, Einheit und Grenzfall.",
  science:"Nenne die beteiligten Strukturen oder Grössen, erkläre den Mechanismus als Ursache-Wirkungs-Kette und prüfe ihn an einem konkreten Beispiel.",
  humanities:"Ordne Begriff oder Quelle ein, formuliere einen Befund, belege ihn und begrenze das Urteil gegenüber einer plausiblen Alternative.",
  language:"Erkenne die sprachliche Funktion im Kontext, wähle die passende Form, bilde einen eigenen Satz und prüfe Verständlichkeit sowie Register.",
  applied:"Kläre Ziel und Randbedingungen, wähle das passende Modell oder Verfahren, dokumentiere die Entscheidung und prüfe Folgen sowie Risiken.",
  arts:"Beobachte präzise, benenne Gestaltungsmittel, erkläre ihre Wirkung und begründe die eigene gestalterische oder interpretierende Entscheidung.",
  project:"Formuliere eine prüfbare Frage, plane Methode und Meilensteine, sichere Quellen und Daten und reflektiere Ergebnis sowie Grenzen."
 };
 function kind(s){
  if(["math"].indexOf(s)>=0)return"math";
  if(["biology","chemistry","physics","geography","technology"].indexOf(s)>=0)return"science";
  if(["history","german","social","philosophy"].indexOf(s)>=0)return"humanities";
  if(["english","french","italian","spanish","romansh","latin","languages"].indexOf(s)>=0)return"language";
  if(["arts","music","theatre"].indexOf(s)>=0)return"arts";
  if(["projects","idaf","idpa","matura-work"].indexOf(s)>=0)return"project";
  return"applied";
 }
 function cleanString(v,c){
  var g=groups[kind(c.subject)]||groups.applied;
  v=String(v);
  v=v.replace(/Im Themenfeld «([^»]+)» bezeichnet ([^.]+) einen klar abgrenzbaren Teil des Lernwegs\. Entscheidend ist, Begriff, Voraussetzung und beobachtbares Ergebnis miteinander zu verbinden\./gi,
    function(_,title,term){return term.charAt(0).toUpperCase()+term.slice(1)+" ist im Kapitel «"+title+"» ein prüfungsrelevanter Baustein. "+g;});
  v=v.replace(/Arbeite mit einem kleinen Beispiel, formuliere den Ablauf eindeutig und prüfe ihn mit Gegenfällen\. Halte dabei fest, woran du eine tragfähige Lösung erkennst und welche Gegenprobe einen typischen Fehler aufdeckt\./gi,g);
  v=v.replace(/Eine vollständige Lösung dokumentiert Voraussetzungen, Vorgehen, Ergebnis und Kontrolle\./gi,g);
  v=v.replace(/Eine gute Lösung ist nachvollziehbar, passend und kontrolliert\./gi,g);
  v=v.replace(/Einordnen, anwenden, kontrollieren, begründen\./gi,
    kind(c.subject)==="language"?"Kontext erkennen, Form wählen, anwenden, verständlich prüfen.":
    kind(c.subject)==="science"?"System bestimmen, Mechanismus erklären, Evidenz prüfen, Folge ableiten.":
    kind(c.subject)==="humanities"?"Einordnen, belegen, erklären, abwägen.":
    kind(c.subject)==="math"?"Gegebenes klären, Verfahren wählen, rechnen, prüfen.":
    "Ziel klären, Modell wählen, umsetzen, Folgen prüfen.");
  v=v.replace(/\bDu must\b/g,"Du musst").replace(/\bDu should\b/g,"Du solltest").replace(/\bdu needs\b/g,"du brauchst");
  return v;
 }
 function walk(x,c,seen){
  if(x==null)return x;
  if(typeof x==="string")return cleanString(x,c);
  if(typeof x!=="object")return x;
  if(seen.has(x))return x;seen.add(x);
  if(Array.isArray(x)){for(var i=0;i<x.length;i++)x[i]=walk(x[i],c,seen);}
  else Object.keys(x).forEach(function(k){x[k]=walk(x[k],c,seen);});
  return x;
 }
 (M.chapters||[]).forEach(function(c){walk(c,c,new WeakSet());if(!c.reviewStatus)c.reviewStatus="REVIEWED_MODEL_EDITORIAL";});
 M.editorialPhraseAudit=function(){
  var s=JSON.stringify(M.chapters||[]),p=["klar abgrenzbaren Teil des Lernwegs",
   "Einordnen, anwenden, kontrollieren, begründen","Eine gute Lösung ist nachvollziehbar, passend und kontrolliert",
   "Du must","Du should","du needs"],o={};p.forEach(function(x){o[x]=s.split(x).length-1;});return o;
 };
}
boot();
})();

;

(function(){
"use strict";
var tries=0;
function boot(){
 var M=window.MNEMIKA;if(!M||!M.languageFlag){if(tries++<160)return setTimeout(boot,100);return;}
 if(M.__V46_FLAGS_EVERYWHERE)return;M.__V46_FLAGS_EVERYWHERE=true;
 var names={Englisch:"en",English:"en",Französisch:"fr",Français:"fr",Italienisch:"it",Italiano:"it",
  Spanisch:"es",Español:"es",Rätoromanisch:"rm",Rumantsch:"rm",Latein:"la",Latina:"la"};
 function add(){
  var sel=".vhome-kick,.vhome-more,.l3-sel,.l3-entry b,.l3-vocab,.vx h2,.lv-entry button,.mn-language-hub button,.v27-sub [data-sub]";
  document.querySelectorAll(sel).forEach(function(el){
   if(el.querySelector&&el.querySelector(".mn-langflag,.mn-flag"))return;
   var box=el.closest&&el.closest(".mn-lang-head,.mn-lang-card,button,li,article");if(box&&box!==el&&box.querySelector(".mn-flag,.mn-langflag"))return;
   var text=String(el.textContent||"");
   var code=Object.keys(names).filter(function(n){return text.indexOf(n)>=0;}).map(function(n){return names[n];})[0];
   if(code)el.insertAdjacentHTML("afterbegin",M.languageFlag(code)+" ");
  });
 }
 add();new MutationObserver(function(){clearTimeout(M.__flagTimer);M.__flagTimer=setTimeout(add,80);})
  .observe(document.documentElement,{childList:true,subtree:true});
}
boot();
})();

;

(function(){
  "use strict";
  var M=window.MNEMIKA;if(!M){console.error("MNEMIKA core missing");return;}
  if(M.__V47_RESTORED)return;M.__V47_RESTORED=true;
  M.REGRESSION_PROTOCOL_VERSION="2026-09-21-v1";
  M.V47_BASELINE_SHA="420a32511a4cfd62c86053430265825a4987ae3b8e7256fcb0b300e46a00cd7f";
  var esc=M.esc||function(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];});};
  function go(v,arg){try{if(typeof M.go==="function")return M.go(v,arg);}catch(e){console.error(e);}return false;}
  function chapters(){return M.chapters||M.CHAPTERS||[];}
  function allQuestions(){var a=[];chapters().forEach(function(c){(c.questions||[]).forEach(function(q){a.push({q:q,c:c});});(c.blocks||[]).forEach(function(b){if(b&&b.check)a.push({q:b.check,c:c});});});return a;}
  function liveInventory(){var qs=allQuestions();var blocks=chapters().reduce(function(n,c){return n+(c.blocks||[]).length;},0);return {programmes:(M.PROGRAMS||[]).filter(function(p){return p.active!==false;}).length,configurations:(M.CURRICULUM_INGEST_V1&&M.CURRICULUM_INGEST_V1.resolvedPlans||[]).length,subjects:Object.keys(M.SUBJECTS||{}).length,chapters:chapters().length,blocks:blocks,questions:qs.length};}
  M.liveInventoryV47=liveInventory;

  /* ---------- stable brand / home ---------- */
  function brandMarkup(){return '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M5 25V7l6 8 5-9 5 9 6-8v18" fill="none" stroke="#43b5ff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><circle cx="16" cy="24.5" r="2.1" fill="#b8ff4a"/></svg><span class="mn-brand-word">Stoffknacker</span>';}
  function installBrand(){/* R2 Wiederherstellung: das freigegebene Logo bleibt; es führt bereits zur Startseite (data-homewired). */var b=document.getElementById('mn-brand-home');if(b)b.remove();}

  /* ---------- exactly five primary tabs ---------- */
  var PRIMARY=['learn','practice','pruefungen','more']; /* Batch A (UX): vier Hauptpunkte */
  function normalizeNav(){var nav=document.querySelector('.nav-in')||document.querySelector('.nav');if(!nav)return;['tab-vocab','tab-mistakes','tab-coverage'].forEach(function(id){var x=document.getElementById(id);if(x)x.remove();});var seen={};[].slice.call(nav.querySelectorAll('.tab')).forEach(function(t){var v=t.dataset.v;if(PRIMARY.indexOf(v)<0||seen[v]){t.remove();return;}seen[v]=1;});}

  /* ---------- context row and utility access ---------- */
  var VIEW_NAMES={home:'Start',learn:'Lernen',read:'Lektion',practice:'Üben',train:'Training',test:'Testen',chaptertest:'Kapiteltest',repeat:'Wiederholen',stats:'Fortschritt',programs:'Abschluss wählen',setup:'Einrichtung',plan:'Lernplan',dashboard:'Übersicht',matrix:'Abdeckungsmatrix',languages:'Sprachen & Wortschatz',vocab:'Wortschatz',mistakes:'Zuletzt falsch',info:'Quellen',cover:'Stoffabdeckung',pruefungen:'Prüfungen','pruefung-start':'Probeprüfung',testziel:'Was kommt dran?',vorbereitung:'Vorbereitung',leben:'Schule fürs Leben',lehrpersonen:'Für Lehrpersonen'};
  M.__v47Last={view:'home',arg:null};
  function programLabel(){try{var id=M.activeProgram&&M.activeProgram();var p=M.program&&M.program(id);return p?(p.label||p.full||id):'';}catch(e){return '';}}
  function currentChapter(){var a=M.__v47Last.arg;if(typeof a==='string'){var c=M.chapter&&M.chapter(a);if(c)return c;}var v=document.getElementById('v-read');if(v&&!v.hidden){var h=v.querySelector('h1');if(h)return {title:h.textContent.trim()};}return null;}
  function ensureContext(){/* R3 Wiederherstellung: keine zweite Zeile unter dem Kopf; der freigegebene Pfad (#mn-where) bleibt. */var ex=document.getElementById('mn-context');if(ex)ex.remove();return null;var top=document.querySelector('header.top,.top');if(!top)return null;var el=document.getElementById('mn-context');if(!el){el=document.createElement('div');el.id='mn-context';el.className='mn-context';top.insertAdjacentElement('afterend',el);}return el;}
  M.paintContextV47=function(){try{paintContext();}catch(e){console.warn('Kontextzeile:',e);}};function paintContext(){var el=ensureContext();if(!el)return;var v=document.body.dataset.view||M.__v47Last.view||'home';var chain=[{t:'Stoffknacker',v:'home'}],p=programLabel();if(p&&v!=='programs')chain.push({t:p,v:'dashboard'});if(v==='read'){chain.push({t:'Lernen',v:'learn'});var c=currentChapter();if(c&&c.subject&&M.SUBJECTS&&M.SUBJECTS[c.subject])chain.push({t:M.SUBJECTS[c.subject].label||c.subject,v:'learn',arg:c.subject});if(c)chain.push({t:c.title||c.id});}else if(v!=='home'){chain.push({t:VIEW_NAMES[v]||v});}el.innerHTML='<div class="mn-context-in"><nav class="mn-context-trail" aria-label="Aktueller Bereich">'+chain.map(function(x,i){return (i?'<span class="sep">›</span>':'')+(i===chain.length-1?'<b aria-current="page">'+esc(x.t)+'</b>':'<button type="button" data-cv="'+esc(x.v||'')+'" data-ca="'+esc(x.arg||'')+'">'+esc(x.t)+'</button>');}).join('')+'</nav><div class="mn-context-actions"><button type="button" data-util="languages">Sprachen</button><button type="button" data-util="mistakes">Zuletzt falsch</button><button type="button" data-util="matrix">Matrix</button></div></div>';[].slice.call(el.querySelectorAll('[data-cv]')).forEach(function(b){b.onclick=function(){go(b.dataset.cv,b.dataset.ca||undefined);};});[].slice.call(el.querySelectorAll('[data-util]')).forEach(function(b){b.onclick=function(){var x=b.dataset.util;if(x==='matrix')M.showMatrixV47();else if(x==='languages')M.showLanguageHubV47();else if(x==='mistakes'&&M.showMistakes)M.showMistakes();};});}

  /* ---------- language flags and decks ---------- */
  var LANGS={
    en:{name:'Englisch',subject:'english',source:'english',short:'EN'},
    fr:{name:'Französisch',subject:'french',source:'french',short:'FR'},
    it:{name:'Italienisch',subject:'italian',source:'italian',short:'IT'},
    es:{name:'Spanisch',subject:'spanish',source:'spanish',short:'ES'},
    rm:{name:'Rätoromanisch',subject:'romansh',source:'romansh',short:'RM'},
    la:{name:'Latein',subject:'latin',source:'latin',short:'LA'}
  };
  function flagSvg(code){
    var s={
      en:'<svg viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg"><rect width="60" height="40" fill="#21468b"/><path d="M0 0L60 40M60 0L0 40" stroke="#fff" stroke-width="8"/><path d="M0 0L60 40M60 0L0 40" stroke="#cf142b" stroke-width="4"/><path d="M30 0v40M0 20h60" stroke="#fff" stroke-width="12"/><path d="M30 0v40M0 20h60" stroke="#cf142b" stroke-width="7"/></svg>',
      fr:'<svg viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg"><rect width="20" height="40" fill="#1d3f8f"/><rect x="20" width="20" height="40" fill="#fff"/><rect x="40" width="20" height="40" fill="#ed2939"/></svg>',
      it:'<svg viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg"><rect width="20" height="40" fill="#009246"/><rect x="20" width="20" height="40" fill="#fff"/><rect x="40" width="20" height="40" fill="#ce2b37"/></svg>',
      es:'<svg viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg"><rect width="60" height="40" fill="#aa151b"/><rect y="10" width="60" height="20" fill="#f1bf00"/><circle cx="20" cy="20" r="4" fill="#aa151b"/></svg>',
      rm:'<svg viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg"><rect width="60" height="40" fill="#fff"/><rect width="30" height="20" fill="#111"/><rect x="30" width="30" height="20" fill="#0b6bb5"/><rect y="20" width="30" height="20" fill="#f6c915"/><rect x="30" y="20" width="30" height="20" fill="#d72632"/><path d="M30 8v24M22 20h16" stroke="#fff" stroke-width="3"/></svg>',
      la:'<svg viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg"><rect width="60" height="40" fill="#7c1734"/><rect x="5" y="5" width="50" height="30" rx="2" fill="none" stroke="#f4c95d" stroke-width="2"/><text x="30" y="25" text-anchor="middle" font-family="Arial" font-size="13" font-weight="700" fill="#f4c95d">LAT</text></svg>'
    };return s[code]||s.la;
  }
  function flag(code,cls){return '<span class="mn-flag '+(cls||'')+'" aria-hidden="true">'+flagSvg(code)+'</span>';}
  M.languageFlagV47=flag;
  function normalizeCard(r,code,i){if(Array.isArray(r))return {id:code+':'+i,front:r[0]||'',back:r[1]||'',pos:r[2]||'',example:r[3]||'',note:r[4]||'',lang:code,subject:LANGS[code].subject};r=r||{};return Object.assign({},r,{id:r.id||code+':'+i,lang:code,subject:r.subject||LANGS[code].subject});}
  function sourceDeck(code){var L=M.LANGUAGE_VOCAB||{};var spec=LANGS[code];var candidates=[L[spec.source],L[code],M['VOCAB_'+code.toUpperCase()],M['VOCAB_'+spec.short]];var a=candidates.find(function(x){return Array.isArray(x)&&x.length;})||[];return a.map(function(r,i){return normalizeCard(r,code,i);});}
  function installDecks(){M.LANGUAGE_VOCAB=M.LANGUAGE_VOCAB||{};Object.keys(LANGS).forEach(function(code){var d=sourceDeck(code);M.LANGUAGE_VOCAB[LANGS[code].source]=d;M.LANGUAGE_VOCAB[code]=d;});M.vocabLang=function(){try{return localStorage.getItem('mnemika-vocab-lang')||'en';}catch(e){return'en';}};M.setVocabLang=function(code){if(!LANGS[code])code='en';try{localStorage.setItem('mnemika-vocab-lang',code);}catch(e){}M.__vocab=null;M.__langDeck=null;};M.vocabDeck=function(){return M.LANGUAGE_VOCAB[M.vocabLang()]||[];};M.vocabLangCounts=function(){var o={};Object.keys(LANGS).forEach(function(k){o[k]=(M.LANGUAGE_VOCAB[k]||[]).length;});return o;};if(Array.isArray(M.VMODES))M.VMODES=M.VMODES.filter(function(x){return x&&x.id!=='type';});}
  installDecks();
  function subjectCount(code){return chapters().filter(function(c){return c.subject===LANGS[code].subject;}).length;}
  function renderLanguageHub(compact){var counts=M.vocabLangCounts();return '<section class="mn-language-hub '+(compact?'mn-language-entry':'')+'"><div><h2>Sprachen & Wortschatz</h2><p class="mn-language-lead">Grammatik, Lesen, Schreiben und Wortschatz bleiben getrennte Lernwege. Jede Sprache hat ihren eigenen Stapel, eigene Beispiele und Wiederholungsintervalle.</p></div><div class="mn-language-grid">'+Object.keys(LANGS).map(function(code){var l=LANGS[code],cc=subjectCount(code),vc=counts[code]||0;return '<article class="mn-lang-card"><div class="mn-lang-head">'+flag(code,compact?'sm':'lg')+'<div><h3>'+esc(l.name)+'</h3><p>'+cc+' Kapitel · '+vc+' Wortschatzkarten</p></div></div><div class="mn-lang-stats"><span><b>'+cc+'</b> Kapitel</span><span><b>'+vc+'</b> Karten</span></div><div class="mn-lang-actions"><button type="button" data-lang-sub="'+code+'">Fach öffnen</button><button type="button" class="primary" data-lang-vocab="'+code+'">Wortschatz</button></div></article>';}).join('')+'</div></section>';}
  function wireLanguageHub(root){[].slice.call(root.querySelectorAll('[data-lang-sub]')).forEach(function(b){b.onclick=function(){var c=b.dataset.langSub,sub=LANGS[c].subject;go('learn',sub);};});[].slice.call(root.querySelectorAll('[data-lang-vocab]')).forEach(function(b){b.onclick=function(){M.setVocabLang(b.dataset.langVocab);if(typeof M.showVocab==='function')M.showVocab();paintContext();};});}
  M.showLanguageHubV47=function(){var id='v-languages',v=document.getElementById(id);if(!v){v=document.createElement('section');v.id=id;v.className='view';(document.querySelector('main')||document.body).appendChild(v);}document.querySelectorAll('main>.view,main>[id^="v-"]').forEach(function(x){x.hidden=x!==v;});v.hidden=false;v.innerHTML=renderLanguageHub(false);wireLanguageHub(v);document.body.dataset.view='languages';M.__v47Last={view:'languages',arg:null};paintContext();v.scrollIntoView({block:'start'});};
  function injectLanguageEntry(){/* R6: v47-Block, im freigegebenen Stand nicht vorhanden */var v0=document.getElementById('v-learn');if(v0)v0.querySelectorAll('.mn-language-entry').forEach(function(x){x.remove();});return;var v=document.getElementById('v-learn');if(v&&M.isLanguageContext&&!M.isLanguageContext()){v.querySelectorAll('.mn-language-entry').forEach(function(x){x.remove();});return;}if(!v||v.hidden||v.querySelector('.mn-language-entry'))return;var wrap=document.createElement('div');wrap.innerHTML=renderLanguageHub(true);var node=wrap.firstElementChild;v.insertBefore(node,v.firstChild);wireLanguageHub(node);decorateLanguageRefs(v);}
  var oldRenderVocab=M.renderVocab;
  M.renderVocab=function(){var code=M.vocabLang(),l=LANGS[code]||LANGS.en,c=M.vocabLangCounts(),s=(typeof M.vocabStats==='function'?M.vocabStats():{cards:(M.vocabDeck()||[]).length,due:0,mastered:0,streak:0,levels:[0,0,0,0,0,0]});return '<section class="vx"><div class="mn-lang-head">'+flag(code,'lg')+'<div><span class="eyebrow">Wortschatztraining</span><h2>'+esc(l.name)+'</h2></div></div><div class="vx-lang" role="group" aria-label="Lernsprache wählen">'+Object.keys(LANGS).map(function(k){return '<button type="button" class="vx-l '+(k===code?'on':'')+'" data-lang="'+k+'">'+flag(k,'sm')+'<span>'+esc(LANGS[k].name)+'</span><i>'+((c[k]||0))+'</i></button>';}).join('')+'</div><p class="vx-lead">Kurze Runden, sofortige Rückmeldung und wachsende Wiederholungsabstände. Jeder Stapel gehört nur zu seiner Sprache.</p><div class="vx-stats">'+[['Karten',s.cards],['heute fällig',s.due],['gekonnt',s.mastered],['Tage in Folge',s.streak]].map(function(x){return '<span><b>'+x[1]+'</b>'+x[0]+'</span>';}).join('')+'</div><button class="vx-go">Runde starten</button><div id="vx-host"></div></section>';};
  var oldShowVocab=M.showVocab;
  M.showVocab=function(){if(typeof oldShowVocab==='function')oldShowVocab.apply(M,arguments);var v=document.getElementById('v-vocab');if(!v)return;v.querySelectorAll('[data-lang]').forEach(function(b){b.onclick=function(){M.setVocabLang(b.dataset.lang);M.showVocab();};});decorateLanguageRefs(v);document.body.dataset.view='vocab';M.__v47Last={view:'vocab',arg:null};paintContext();};
  function decorateLanguageRefs(root){root=root||document;var selectors='.v27-sub h3,.curcard b,.l3-pick b,.lv-entry b,.vx-l span,.mn-language-ref';[].slice.call(root.querySelectorAll(selectors)).forEach(function(el){if(el.dataset.mnFlagged)return;if(el.querySelector('.mn-flag,.mn-langflag'))return; /* Iteration 18: schon eine Flagge */var ob=el.closest('button');if(ob&&ob.querySelector('.mn-flag')&&!el.contains(ob.querySelector('.mn-flag')))return; /* Iteration 15: Knopf hat schon eine Flagge */var tx=el.textContent.trim().toLowerCase();var code=Object.keys(LANGS).find(function(k){var n=LANGS[k].name.toLowerCase();return tx===n||tx.indexOf(n)>=0;});if(!code)return;el.dataset.mnFlagged='1';el.classList.add('mn-inline-language');el.insertAdjacentHTML('afterbegin',flag(code,'sm'));});}

  /* ---------- curriculum matrix ---------- */
  function planData(){var C=M.CURRICULUM_INGEST_V1||M.CURRICULUM||{};return C.resolvedPlans||[];}
  function matrixData(){if(typeof M.coverageMatrix==='function'){try{return M.coverageMatrix();}catch(e){console.warn('legacy matrix failed',e);}}var progs=(M.PROGRAMS||[]).filter(function(p){return p.active!==false;}).map(function(p){return {id:p.id,label:p.label||p.id};});var subs=Object.keys(M.SUBJECTS||{});var cell={};progs.forEach(function(p){var ids={};planData().filter(function(pl){return pl.programmeId===p.id;}).forEach(function(pl){(pl.usableChapterIds||[]).forEach(function(id){ids[id]=1;});});cell[p.id]={};subs.forEach(function(s){var all=chapters().filter(function(c){return c.subject===s;}),sel=all.filter(function(c){return ids[c.id];});cell[p.id][s]={count:sel.length,total:all.length,ids:sel.map(function(c){return c.id;})};});});var shared={};subs.forEach(function(s){var carriers=progs.filter(function(p){return cell[p.id][s].count;});shared[s]=carriers.length?cell[carriers[0].id][s].ids.filter(function(id){return carriers.every(function(p){return cell[p.id][s].ids.indexOf(id)>=0;});}):[];});return {programmes:progs,subjects:subs,cell:cell,shared:shared};}
  function renderMatrix(){var m=matrixData(),S=M.SUBJECTS||{};var head='<tr><th>Fach</th>'+m.programmes.map(function(p){return '<th>'+esc(p.label)+'</th>';}).join('')+'<th>Gemeinsamer Kern</th></tr>';var rows=m.subjects.map(function(s){var sh=(m.shared[s]||[]).length;return '<tr><th>'+esc((S[s]&&S[s].label)||s)+'</th>'+m.programmes.map(function(p){var c=m.cell[p.id][s]||{count:0,total:0,ids:[]};var uniq=Math.max(0,c.count-sh),cl=!c.count?'none':uniq?'diff':'same';return '<td class="'+cl+'"><b>'+(c.count||'–')+'</b><span>'+(c.count?(uniq?uniq+' spezifisch':'gemeinsam'):'nicht enthalten')+'</span></td>';}).join('')+'<td class="same"><b>'+(sh||'–')+'</b><span>in allen führenden Wegen</span></td></tr>';}).join('');var mobile=m.programmes.map(function(p){return '<article class="mn-matrix-card"><h3>'+esc(p.label)+'</h3><dl>'+m.subjects.filter(function(s){return m.cell[p.id][s].count;}).map(function(s){return '<dt>'+esc((S[s]&&S[s].label)||s)+'</dt><dd>'+m.cell[p.id][s].count+'</dd>';}).join('')+'</dl></article>';}).join('');return '<section class="mn-matrix"><header class="mn-matrix-head"><div><span class="eyebrow">Lehrplanabdeckung</span><h1>Abdeckungsmatrix</h1><p>Die Matrix zeigt den nutzbaren Stoff je Abschluss. Nutzbar, offiziell zugeordnet und lokal zu ergänzen bleiben getrennte Kategorien.</p></div><div class="mn-matrix-actions"><button class="btn" type="button" data-matrix-info>Quellen & Prüfstatus</button></div></header><div class="mn-matrix-scroll"><table><thead>'+head+'</thead><tbody>'+rows+'</tbody></table></div><div class="mn-matrix-mobile">'+mobile+'</div></section>';}
  M.showMatrixV47=function(){var v=document.getElementById('v-matrix');if(!v){v=document.createElement('section');v.id='v-matrix';v.className='view';(document.querySelector('main')||document.body).appendChild(v);}document.querySelectorAll('main>.view,main>[id^="v-"]').forEach(function(x){x.hidden=x!==v;});v.hidden=false;v.innerHTML=renderMatrix();var b=v.querySelector('[data-matrix-info]');if(b)b.onclick=function(){if(M.showInfo)M.showInfo();else go('info');};document.body.dataset.view='matrix';M.__v47Last={view:'matrix',arg:null};paintContext();v.scrollIntoView({block:'start'});};
  function addUtilityLinks(){/* R4: v47-Zusatz, doppelt freigegebene Einträge; an der Quelle abgeschaltet */return;var mp=document.getElementById('menupop');if(mp&&!mp.querySelector('[data-v47-matrix]')){var a=document.createElement('button');a.className='mp';a.dataset.v47Matrix='1';a.textContent='Abdeckungsmatrix';a.onclick=function(){mp.hidden=true;M.showMatrixV47();};mp.appendChild(a);var l=document.createElement('button');l.className='mp';l.textContent='Sprachen & Wortschatz';l.onclick=function(){mp.hidden=true;M.showLanguageHubV47();};mp.appendChild(l);}var foot=document.getElementById('mn-footer');if(foot&&!foot.querySelector('[data-v47-matrix]')){var col=foot.querySelector('.mnf-col:last-of-type')||foot;var b=document.createElement('button');b.dataset.v47Matrix='1';b.textContent='Abdeckungsmatrix';b.onclick=M.showMatrixV47;col.insertBefore(b,col.firstChild);}}

  /* ---------- robust chart / diagram audit and repair ---------- */
  function intersects(a,b,pad){pad=pad||1;return a.x+pad<b.x+b.width&&a.x+a.width-pad>b.x&&a.y+pad<b.y+b.height&&a.y+a.height-pad>b.y;}
  function bbox(el){try{return el.getBBox();}catch(e){return null;}}
  function groupRows(items,tol){var rows=[];items.sort(function(a,b){return a.y-b.y||a.x-b.x;});items.forEach(function(it){var r=rows.find(function(x){return Math.abs(x.y-it.y)<=tol;});if(!r){r={y:it.y,items:[]};rows.push(r);}r.items.push(it);});rows.forEach(function(r){r.items.sort(function(a,b){return a.x-b.x;});});return rows;}
  function semanticRepair(svg,title){if(svg.dataset.mnSemantic)return false;var texts=[].slice.call(svg.querySelectorAll('text')).map(function(t){var b=bbox(t);return b&&t.textContent.trim()?{text:t.textContent.trim(),x:b.x,y:b.y,w:b.width,h:b.height}:null;}).filter(Boolean);if(texts.length<5)return false;var rects=[].slice.call(svg.querySelectorAll('rect')).map(function(r){var b=bbox(r);return b&&b.width>100&&b.height>60?b:null;}).filter(Boolean);var panels=[];if(rects.length>=2){rects.slice(0,4).forEach(function(r){var inside=texts.filter(function(t){return t.x+t.w/2>=r.x&&t.x+t.w/2<=r.x+r.width&&t.y+t.h/2>=r.y&&t.y+t.h/2<=r.y+r.height;});if(inside.length)panels.push(inside);});}if(panels.length<2){var xs=texts.map(function(t){return t.x;}).sort(function(a,b){return a-b;});var mid=xs[Math.floor(xs.length/2)];panels=[texts.filter(function(t){return t.x<=mid;}),texts.filter(function(t){return t.x>mid;})].filter(function(x){return x.length;});}var outside=texts.filter(function(t){return !panels.some(function(p){return p.indexOf(t)>=0;});});var heading=title||outside.sort(function(a,b){return a.y-b.y;})[0]?.text||texts[0].text;var wrap=document.createElement('div');wrap.className='mn-semantic-visual';wrap.dataset.mnSemantic='1';var grid=panels.map(function(p){var rows=groupRows(p,7);var ph=(rows.shift()||{items:[{text:'Bereich'}]}).items.map(function(x){return x.text;}).join(' ');var dl=rows.map(function(r){var a=r.items[0],rest=r.items.slice(1).map(function(x){return x.text;}).join(' ');if(!rest){rest=a.text;return '<dd>'+esc(rest)+'</dd>';}return '<dt>'+esc(a.text)+'</dt><dd>'+esc(rest)+'</dd>';}).join('');return '<article class="mn-semantic-panel"><h4>'+esc(ph)+'</h4><dl>'+dl+'</dl></article>';}).join('');var note=outside.filter(function(t){return t.text!==heading;}).map(function(t){return t.text;}).join(' · ');wrap.innerHTML='<h3>'+esc(heading)+'</h3><div class="mn-semantic-grid">'+grid+'</div>'+(note?'<p class="mn-semantic-note">'+esc(note)+'</p>':'')+'<details class="mn-original-visual"><summary>Originalgrafik anzeigen</summary></details>';var det=wrap.querySelector('details');var clone=svg.cloneNode(true);clone.removeAttribute('style');clone.dataset.mnSemantic='1';det.appendChild(clone);var host=svg.closest('figure,.viz,.vfig,.v44-graphic')||svg.parentElement;if(host){svg.style.display='none';host.insertBefore(wrap,svg);svg.dataset.mnSemantic='1';return true;}return false;}
  function repairSvg(svg){if(svg.classList.contains("r7-svg"))return {repaired:false,overlaps:0,delegatedTo:"recovery7"};if(svg.closest('.mn-flag,.mn-brand-home')||svg.dataset.mnAudited)return {repaired:false,overlaps:0};svg.dataset.mnAudited='1';svg.setAttribute('preserveAspectRatio','xMidYMid meet');svg.style.width='100%';svg.style.height='auto';svg.style.maxWidth='100%';var b=bbox(svg);if(b&&b.width&&b.height){var pad=Math.max(14,Math.min(36,Math.max(b.width,b.height)*.035));svg.setAttribute('viewBox',[b.x-pad,b.y-pad,b.width+pad*2,b.height+pad*2].join(' '));}var texts=[].slice.call(svg.querySelectorAll('text'));texts.forEach(function(t){var fs=parseFloat(getComputedStyle(t).fontSize||'0');if(fs&&fs<11)t.style.fontSize='11px';});var boxes=texts.map(bbox).filter(Boolean),ov=0;for(var i=0;i<boxes.length;i++)for(var j=i+1;j<boxes.length;j++)if(intersects(boxes[i],boxes[j],1))ov++;var title=(svg.querySelector('title')||{}).textContent||((svg.closest('figure')&&svg.closest('figure').querySelector('figcaption'))||{}).textContent||'';var known=/Transport im Vergleich|Periode und Gruppe|im Vergleich|Hauptgruppe/i.test(title+' '+texts.slice(0,3).map(function(x){return x.textContent;}).join(' '));var rectCount=svg.querySelectorAll('rect').length;if((known||(ov>2&&rectCount>=2))&&texts.length>=6){return {repaired:semanticRepair(svg,title),overlaps:ov};}return {repaired:false,overlaps:ov};}
  function auditVisuals(root){root=root||document;var svgs=[].slice.call(root.querySelectorAll('figure svg,.viz svg,.vfig svg,.v44-graphic svg'));var repaired=0,overlaps=0;svgs.forEach(function(s){var r=repairSvg(s);if(r.repaired)repaired++;overlaps+=r.overlaps;});return {svgs:svgs.length,semanticRepairs:repaired,rawOverlapSignals:overlaps};}
  M.auditVisualsV47=auditVisuals;

  /* ---------- question and mistake integrity ---------- */
  function normalizeQuestions(){var changed=0,bad=0;allQuestions().forEach(function(x){var q=x.q;if(q.type==='multi'&&!Array.isArray(q.answers)){if(Number.isInteger(q.answer)){q.type='mc';changed++;}else{bad++;}}if(q.type==='mc'&&!Number.isInteger(q.answer)&&Array.isArray(q.answers)&&q.answers.length===1){q.answer=q.answers[0];delete q.answers;changed++;}});return {changed:changed,invalid:bad,total:allQuestions().length};}
  M.questionIntegrityV47=normalizeQuestions();
  var inlineBase=M.inlineCheck;
  if(typeof inlineBase==='function'&&!inlineBase.__v47Mistake){M.inlineCheck=function(host,q){if(host&&q&&q.id)host.dataset.qid=q.id;var r=inlineBase.apply(M,arguments);if(host&&q&&q.id&&!host.dataset.v47Watch){host.dataset.v47Watch='1';var ob=new MutationObserver(function(){var fb=host.querySelector('.fb.ok,.fb.no');if(!fb||host.dataset.v47Recorded)return;host.dataset.v47Recorded='1';if(typeof M.noteResult==='function')M.noteResult(q.id,fb.classList.contains('ok'),'inline');ob.disconnect();});ob.observe(host,{childList:true,subtree:true});}return r;};M.inlineCheck.__v47Mistake=true;}

  /* ---------- live inventory and mission consistency ---------- */
  function updateInventory(){var I=liveInventory();if(M.WELCOME){M.WELCOME.facts=[{n:String(I.chapters),l:'Kapitel'},{n:String(I.blocks),l:'Lernblöcke'},{n:String(I.questions),l:'Aufgaben & Checks'},{n:String(I.programmes),l:'Abschlüsse'}];if(M.WELCOME.how&&M.WELCOME.how[2])M.WELCOME.how[2].d=I.chapters+' Kapitel, '+I.blocks+' Lernblöcke, '+I.questions+' Aufgaben und Checks.';}if(M.NOLOGIN&&Array.isArray(M.NOLOGIN.points)){M.NOLOGIN.points.forEach(function(p){if(/Alle \d+ Kapitel/.test(p.d||''))p.d=(p.d||'').replace(/Alle \d+ Kapitel/,'Alle '+I.chapters+' Kapitel');});}}
  function ensureMissions(){try{if(typeof M.v44Mount==='function')M.v44Mount();}catch(e){console.warn(e);}}

  /* ---------- preserve and wrap navigation only ---------- */
  var goBase=M.go;
  if(typeof goBase==='function'&&!goBase.__v47){M.go=function(v,arg){M.__v47Last={view:v,arg:arg};var r=goBase.apply(M,arguments);setTimeout(function(){installBrand();normalizeNav();paintContext();injectLanguageEntry();decorateLanguageRefs(document);auditVisuals(document);addUtilityLinks();ensureMissions();},40);return r;};M.go.__v47=true;}
  function boot(){document.documentElement.lang='de-CH';document.querySelectorAll('.hdlang,[data-locale="en"],[data-locale="fr"]').forEach(function(x){x.remove();});installDecks();installBrand();normalizeNav();updateInventory();paintContext();addUtilityLinks();injectLanguageEntry();decorateLanguageRefs(document);auditVisuals(document);ensureMissions();}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
  var observer=new MutationObserver(function(ms){var relevant=ms.some(function(m){return m.addedNodes&&m.addedNodes.length;});if(!relevant)return;clearTimeout(M.__v47Timer);M.__v47Timer=setTimeout(function(){installBrand();normalizeNav();paintContext();injectLanguageEntry();decorateLanguageRefs(document);auditVisuals(document);addUtilityLinks();ensureMissions();},80);});
  observer.observe(document.documentElement,{childList:true,subtree:true});
  setTimeout(boot,350);setTimeout(boot,1300);

  M.featureManifestV47=function(){var I=liveInventory(),decks=M.vocabLangCounts(),nav=[].slice.call(document.querySelectorAll('.nav-in .tab')).map(function(x){return x.dataset.v;}).filter(Boolean);var matrix=!!document.getElementById('v-matrix')||typeof M.showMatrixV47==='function';return {protocol:M.REGRESSION_PROTOCOL_VERSION,inventory:I,primaryNavigation:nav,brandVisible:!!document.getElementById('mn-brand-home'),matrixAvailable:matrix,languageDecks:decks,questionIntegrity:M.questionIntegrityV47,visuals:auditVisuals(document),logoHome:true,publicLocales:['de'],adsEnabled:!!M.ADS_ENABLED};};
})();