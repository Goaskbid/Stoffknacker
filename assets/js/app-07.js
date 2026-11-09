

/* Zweite Runde: die restlichen Altgrafiken auf M.Viz. */
(function () {
  "use strict";
  var M = window.MNEMIKA;
  var V = M.Viz;
  var n = 0;
  function set(id, title, caption, html) {
    M.ILLUS[id] = [{ title: title, caption: caption, html: html, rebuilt: true }];
    n += 1;
  }

  /* ---------- Mathematik ---------- */
  set("math-derivatives", "Was die Ableitung an einer Stelle bedeutet",
    "Die Ableitung ist die Steigung der Tangente, nicht der Funktionswert.",
    V.signedLineChart({ title: "Funktion und ihre Ableitung", yTitle: "Wert", xTitle: "x",
      cats: ["-3", "-2", "-1", "0", "1", "2", "3"],
      series: [{ name: "f(x) = x²", values: [9, 4, 1, 0, 1, 4, 9] },
               { name: "f'(x) = 2x", values: [-6, -4, -2, 0, 2, 4, 6] }],
      caption: "Wo f am steilsten fällt, ist f' am stärksten negativ. Im Scheitel ist f' gleich null. Die Linien verbinden die markierten Werte." }));

  set("math-functions-basic", "Vier Grundformen erkennen",
    "Der höchste Exponent bestimmt die Gestalt, bevor du rechnest.",
    V.compare({ title: "Funktionstyp am Graphen erkennen", link: "Erst Typ bestimmen, dann rechnen",
      columns: [
        { name: "linear und quadratisch", rows: [["f(x) = mx + q", "Gerade, konstante Steigung"],
          ["f(x) = ax² + bx + c", "Parabel, ein Scheitel"], ["Erkennen", "höchster Exponent 1 oder 2"]] },
        { name: "gebrochen und exponentiell", rows: [["f(x) = 1/x", "Hyperbel, Lücke bei null"],
          ["f(x) = aˣ", "Wachstum für a > 1; Abnahme für 0 < a < 1"], ["Erkennen", "x im Nenner oder im Exponenten"]] },
      ] }));

  set("math-limits", "Grenzwert im Unendlichen",
    "Der höchste Grad in Zähler und Nenner entscheidet, wohin die Kurve läuft.",
    V.signedLineChart({ title: "Annäherung an die Asymptote", yTitle: "f(x)", xTitle: "x",
      cats: ["1", "2", "5", "10", "20", "50", "100"],
      series: [{ name: "f(x) = (2x+1)/x", values: [3, 2.5, 2.2, 2.1, 2.05, 2.02, 2.01] }],
      caption: "Der Wert nähert sich 2, erreicht es aber nie. Das ist die waagrechte Asymptote." }));

  set("math-integrals", "Das bestimmte Integral ist die orientierte Fläche",
    "Die Stammfunktion misst, wie viel sich bis zu dieser Stelle angesammelt hat.",
    V.process({ title: "Vom Integral zur Fläche",
      steps: [{ title: "Funktion", text: "f(x) beschreibt die Rate zu jedem Zeitpunkt.", via: "integrieren" },
        { title: "Stammfunktion", text: "F(x) sammelt diese Rate auf.", via: "einsetzen" },
        { title: "Grenzen", text: "F(b) minus F(a) ergibt die orientierte Fläche: Unter der Achse wird sie negativ gezählt.", via: "Ergebnis" },
        { title: "Bedeutung", text: "Bei Geschwindigkeit: Ortsänderung. Die Weglänge ist das Integral des Betrags der Geschwindigkeit.", accent: true }] }));

  set("math-trigonometry", "Sinus und Kosinus am Einheitskreis",
    "Beide Kurven sind um ein Viertel der Periode verschoben.",
    V.signedLineChart({ tickCount: 4, title: "Sinus und Kosinus über einer Periode", yTitle: "Wert", xTitle: "Winkel in Grad",
      cats: ["0", "45", "90", "135", "180", "225", "270", "315", "360"],
      series: [{ name: "Sinus", values: [0, Math.SQRT1_2, 1, Math.SQRT1_2, 0, -Math.SQRT1_2, -1, -Math.SQRT1_2, 0] },
               { name: "Kosinus", values: [1, Math.SQRT1_2, 0, -Math.SQRT1_2, -1, -Math.SQRT1_2, 0, Math.SQRT1_2, 1] }],
      caption: "Unverschobene Werte zwischen -1 und 1. Sinus startet bei null, Kosinus bei eins. Die Punkte markieren die angegebenen Winkel; die Linien verbinden diese Messpunkte." }));

  set("math-vectors", "Vektoren addieren heisst aneinanderhängen",
    "Der Summenvektor führt vom Anfang des ersten zum Ende des zweiten.",
    V.process({ title: "Vektoraddition in drei Schritten",
      steps: [{ title: "Erster Vektor", text: "Vom Ursprung aus antragen.", via: "anhängen" },
        { title: "Zweiter Vektor", text: "An der Spitze des ersten ansetzen.", via: "verbinden" },
        { title: "Summe", text: "Vom Start zum Endpunkt, komponentenweise addiert.", accent: true }] }));

  set("math-probability", "Das Geburtstagsparadoxon",
    "Ab 23 Personen liegt die Wahrscheinlichkeit über 50 Prozent.",
    V.signedLineChart({ title: "Gemeinsamer Geburtstag in einer Gruppe", yTitle: "Wahrscheinlichkeit in Prozent",
      xTitle: "Anzahl Personen", max: 100,
      cats: ["5", "10", "15", "20", "23", "30", "40", "50", "60"],
      series: [{ name: "mindestens ein Paar", values: [2.7, 11.7, 25.3, 41.1, 50.7, 70.6, 89.1, 97, 99.4] }],
      caption: "Gezählt werden nicht Personen, sondern Paare. Bei 23 Personen sind es bereits 253 Paare." }));

  set("math-curve-optimisation", "Hochpunkt, Tiefpunkt und Wendepunkt",
    "Die erste Ableitung liefert Kandidaten, die zweite entscheidet.",
    V.compare({ title: "Welche Bedingung wofür", link: "f'(x) = 0 ist nur der Kandidat",
      columns: [
        { name: "Extremum", rows: [["Bedingung", "f'(x) = 0"], ["Hochpunkt", "f''(x) kleiner null"],
          ["Tiefpunkt", "f''(x) grösser null"], ["Falle", "f''(x) = 0 kann Sattel sein"]] },
        { name: "Wendepunkt", rows: [["Bedingung", "f''(x) = 0"], ["Prüfung", "Vorzeichenwechsel von f''"],
          ["Bedeutung", "Krümmung wechselt"], ["Beispiel", "steilste Stelle einer S-Kurve"]] },
      ] }));

  /* ---------- Physik ---------- */
  set("phys-newton-forces", "Die drei Newtonschen Gesetze",
    "Vom Trägheitssatz über das Grundgesetz zum Wechselwirkungsgesetz.",
    V.process({ title: "Newton in drei Schritten",
      steps: [{ title: "Trägheit", text: "Ohne resultierende Kraft bleibt der Zustand.", via: "Kraft wirkt" },
        { title: "Grundgesetz", text: "F = m·a, die Kraft erzeugt die Beschleunigung.", via: "Gegenkraft" },
        { title: "Wechselwirkung", text: "Jede Kraft hat eine gleich grosse Gegenkraft.", accent: true }] }));

  set("phys-fall-throw", "Freier Fall: Weg wächst quadratisch",
    "In der ersten Sekunde 5 Meter, in der zweiten schon 15.",
    V.barChart({ title: "Fallstrecke je Sekunde", yTitle: "Meter in dieser Sekunde", xTitle: "Sekunde",
      data: [["1.", 4.9], ["2.", 14.7], ["3.", 24.5], ["4.", 34.3]], highlight: "4.",
      caption: "Die Strecke je Sekunde wächst linear, die Gesamtstrecke quadratisch." }));

  set("phys-pressure-hydro", "Druck in der Flüssigkeit hängt nur von der Höhe ab",
    "Die Form des Gefässes spielt keine Rolle, nur die Tiefe.",
    V.signedLineChart({ title: "Schweredruck im Wasser", yTitle: "Druck in bar", xTitle: "Tiefe in Metern",
      cats: ["0", "5", "10", "20", "30", "40"],
      series: [{ name: "Druck über dem Luftdruck", values: [0, 0.5, 1, 2, 3, 4] }],
      caption: "Je 10 Meter Wassersäule kommt rund 1 bar dazu. Beim Tauchen verdoppelt sich der Gesamtdruck schon bei 10 Metern." }));

  set("phys-circuits-power", "Reihe gegen Parallel",
    "Reihe teilt die Spannung, Parallel teilt den Strom.",
    V.compare({ title: "Zwei Schaltungen im Vergleich", link: "R gesamt: Summe gegen Kehrwertsumme",
      columns: [
        { name: "Reihenschaltung", rows: [["Strom", "überall gleich"], ["Spannung", "teilt sich auf"],
          ["Widerstand", "addiert sich"], ["Ausfall", "ein Bauteil unterbricht alles"]] },
        { name: "Parallelschaltung", rows: [["Strom", "teilt sich auf"], ["Spannung", "überall gleich"],
          ["Widerstand", "kleiner als der kleinste"], ["Ausfall", "andere Zweige laufen weiter"]] },
      ] }));

  set("phys-optics", "Abbildung an der Sammellinse",
    "Die Lage des Gegenstands zur Brennweite entscheidet über das Bild.",
    V.compare({ title: "Drei Fälle an der Sammellinse", link: "f ist die Brennweite",
      columns: [
        { name: "Gegenstand ausserhalb 2f", rows: [["Bild", "verkleinert"], ["Lage", "umgekehrt"],
          ["Art", "reell, auffangbar"], ["Anwendung", "Fotokamera"]] },
        { name: "Gegenstand innerhalb f", rows: [["Bild", "vergrössert"], ["Lage", "aufrecht"],
          ["Art", "virtuell, nicht auffangbar"], ["Anwendung", "Lupe"]] },
      ] }));

  set("phys-work-power", "Arbeit, Energie und Leistung",
    "Leistung ist Arbeit je Zeit, nicht Arbeit selbst.",
    V.process({ title: "Von der Kraft zur Leistung",
      steps: [{ title: "Kraft", text: "Nur der Anteil in Wegrichtung zählt.", via: "mal Weg" },
        { title: "Arbeit", text: "W = F·s, gemessen in Joule.", via: "geteilt durch Zeit" },
        { title: "Leistung", text: "P = W/t, gemessen in Watt.", via: "Wirkung" },
        { title: "Wirkungsgrad", text: "Nutzen geteilt durch Aufwand, immer unter 1.", accent: true }] }));

  set("phys-temperature-expansion", "Die Anomalie des Wassers",
    "Die grösste Dichte liegt bei 4 Grad, deshalb schwimmt Eis.",
    V.lineChart({ title: "Dichte von Wasser über der Temperatur",
      yTitle: "Dichte in kg je m³", xTitle: "Temperatur in Grad Celsius",
      cats: ["0 Eis", "0", "2", "4", "10", "20", "40"],
      series: [{ name: "Dichte", values: [917, 999.84, 999.94, 1000, 999.7, 998.2, 992.2] }],
      max: 1010, caption: "Eis ist deutlich leichter als Wasser. Deshalb friert ein See von oben zu und nicht vom Grund." }));

  set("phys-electric-basics", "Spezifischer Widerstand im Vergleich",
    "Silber leitet am besten, Eisen deutlich schlechter.",
    V.barChart({ title: "Spezifischer Widerstand", yTitle: "Ohm mal mm² je m", xTitle: "Material",
      data: [["Silber", 0.016], ["Kupfer", 0.017], ["Alu", 0.028], ["Eisen", 0.1]], highlight: "Eisen",
      caption: "Kupfer für Kabel, Eisen als Heizdraht: derselbe Effekt, verschiedene Absicht." }));

  /* ---------- Chemie ---------- */
  set("chem-atoms-pse", "Aufbau des Periodensystems",
    "Die Periode gibt die Schale, die Hauptgruppe die Aussenelektronen.",
    V.compare({ title: "Was Periode und Gruppe verraten", link: "Beides zusammen ergibt das Verhalten",
      columns: [
        { name: "Periode, die Zeile", rows: [["Bedeutung", "Anzahl besetzter Schalen"],
          ["Von oben nach unten", "Atomradius wächst"], ["Folge", "Aussenelektron leichter abzugeben"]] },
        { name: "Hauptgruppe, die Spalte", rows: [["Bedeutung", "Anzahl Aussenelektronen"],
          ["Von links nach rechts", "Elektronegativität steigt"], ["Folge", "Bindungsart wird vorhersagbar"]] },
      ] }));

  set("chem-polarity-forces", "Drei Anziehungskräfte im Vergleich",
    "Die Stärke der zwischenmolekularen Kräfte bestimmt die Siedetemperatur.",
    V.barChart({ title: "Siedetemperaturen ähnlich schwerer Moleküle",
      yTitle: "Siedetemperatur in Grad Celsius", xTitle: "Stoff",
      data: [["Methan", -162], ["Schwefelwasserstoff", -60], ["Wasser", 100]], highlight: "Wasser",
      max: 140, caption: "Wasser ist am leichtesten und siedet am höchsten. Das geht nur über Wasserstoffbrücken." }));

  set("chem-ionic-metallic", "Ionengitter gegen Metallbindung",
    "Salz zerspringt beim Verschieben, Metall lässt sich verformen.",
    V.compare({ title: "Warum Salz bricht und Metall sich biegt", link: "Die Bindungsart erklärt die Eigenschaft",
      columns: [
        { name: "Ionengitter", rows: [["Aufbau", "Ionen in fester Ordnung"], ["Beim Verschieben", "gleiche Ladungen treffen sich"],
          ["Folge", "spröde, es bricht"], ["Leitfähigkeit", "erst gelöst oder geschmolzen"]] },
        { name: "Metall", rows: [["Aufbau", "Rümpfe im Elektronengas"], ["Beim Verschieben", "Elektronen wandern mit"],
          ["Folge", "verformbar"], ["Leitfähigkeit", "immer"]] },
      ] }));

  set("chem-organic-groups", "Funktionelle Gruppen bestimmen die Stoffklasse",
    "Die Gruppe entscheidet über Namen, Löslichkeit und Reaktionen.",
    V.compare({ title: "Fünf Gruppen, fünf Klassen", link: "Der Rest des Moleküls ändert nur die Grösse",
      columns: [
        { name: "sauerstoffhaltig, einfach", rows: [["OH", "Alkohol, Endung -ol"],
          ["CHO", "Aldehyd, Endung -al"], ["CO", "Keton, Endung -on"]] },
        { name: "sauerstoffhaltig, sauer", rows: [["COOH", "Carbonsäure, Endung -säure"],
          ["COO", "Ester, aus Säure und Alkohol"], ["Merkmal", "COOH löst sich in Wasser sauer"]] },
      ] }));

  /* ---------- Biologie ---------- */
  set("bio-dna-replication", "Die DNA wird semikonservativ verdoppelt",
    "Jeder Tochterstrang enthält einen alten und einen neuen Strang.",
    V.process({ title: "Replikation in vier Schritten",
      steps: [{ title: "Entwinden", text: "Helikase trennt die beiden Stränge.", via: "Matrize" },
        { title: "Ansetzen", text: "Polymerase liest jeden Strang als Vorlage.", via: "Basenpaarung" },
        { title: "Verlängern", text: "A zu T, G zu C, nur in eine Richtung.", via: "verbinden" },
        { title: "Ergebnis", text: "Zwei Doppelstränge, je zur Hälfte alt.", accent: true }] }));

  set("bio-membrane-transport", "Drei Wege durch die Membran",
    "Nur der aktive Transport braucht Energie und kann gegen das Gefälle arbeiten.",
    V.compare({ title: "Transport im Vergleich", link: "Das Konzentrationsgefälle entscheidet über den Energiebedarf",
      columns: [
        { name: "passiv", rows: [["Diffusion", "mit dem Gefälle, ohne Hilfe"],
          ["erleichtert", "mit dem Gefälle, über ein Kanalprotein"], ["Energie", "keine"], ["Osmose", "Wasser folgt der gelösten Menge"]] },
        { name: "aktiv", rows: [["Richtung", "gegen das Gefälle"], ["Hilfsmittel", "Pumpe aus Protein"],
          ["Energie", "ATP nötig"], ["Beispiel", "Natrium-Kalium-Pumpe"]] },
      ] }));

  set("bio-cell-cycle-mitosis", "Der Zellzyklus",
    "Die Interphase nimmt den weitaus grössten Teil der Zeit ein.",
    V.barChart({ title: "Dauer der Phasen bei einer typischen Körperzelle",
      yTitle: "Stunden", xTitle: "Phase",
      data: [["G1", 11], ["S", 8], ["G2", 4], ["Mitose", 1]], highlight: "Mitose",
      caption: "Die Teilung selbst dauert etwa eine Stunde von 24. Der Rest ist Wachstum und Verdopplung der DNA." }));

  set("bio-ecology", "Energie geht in jeder Stufe verloren",
    "Nur rund ein Zehntel wird an die nächste Stufe weitergegeben.",
    V.barChart({ title: "Energie je Trophiestufe", yTitle: "relative Energie", xTitle: "Stufe",
      data: [["Produzenten", 1000], ["Pflanzenfresser", 100], ["Fleischfresser", 10], ["Endglied", 1]],
      highlight: "Endglied",
      caption: "Deshalb sind Nahrungsketten selten länger als vier oder fünf Stufen." }));

  /* ---------- Geografie ---------- */
  set("geo-plate-tectonics", "Drei Arten von Plattengrenzen",
    "Die Bewegungsrichtung entscheidet, was an der Grenze entsteht.",
    V.compare({ title: "Was an welcher Grenze passiert", link: "Erdbeben gibt es an allen drei, Vulkane nicht",
      columns: [
        { name: "auseinander und aufeinander", rows: [["divergent", "neue Kruste, Mittelozeanischer Rücken"],
          ["konvergent", "Subduktion, Tiefseerinne, Vulkankette"], ["Beispiel", "Island und die Anden"]] },
        { name: "aneinander vorbei", rows: [["konservativ", "Platten gleiten seitlich"],
          ["Folge", "starke Erdbeben ohne Vulkanismus"], ["Beispiel", "San-Andreas-Verwerfung"]] },
      ] }));

  set("geo-climate-diagrams", "Ein Klimadiagramm richtig lesen",
    "Erst die Hemisphäre, dann die Zone, dann die Nutzung.",
    V.process({ title: "Vier Schritte zur Zuordnung",
      steps: [{ title: "Maximum", text: "Liegt es im Juli oder im Januar?", via: "Hemisphäre" },
        { title: "Amplitude", text: "Grosser Unterschied deutet auf Landesinneres.", via: "Lage" },
        { title: "Niederschlag", text: "Wann fällt er, wann fehlt er?", via: "Zone" },
        { title: "Nutzung", text: "Regenfeldbau, Bewässerung oder Weidewirtschaft.", accent: true }] }));

  set("geo-earth-time", "Die Erdzeitalter im Massstab",
    "Der Mensch erscheint erst ganz am Ende.",
    V.timeline({ title: "4,6 Milliarden Jahre in Meilensteinen",
      events: [{ year: -4600, label: "Erde entsteht" }, { year: -3500, label: "erstes Leben" },
        { year: -541, label: "Kambrische Explosion", turn: true }, { year: -252, label: "grösstes Massensterben" },
        { year: -66, label: "Ende der Dinosaurier", turn: true }, { year: 0, label: "Gegenwart" }],
      caption: "Zahlen in Millionen Jahren vor heute. Der moderne Mensch existiert seit rund 0,3 davon." }));

  set("geo-spatial-transport", "Modalsplit im Personenverkehr",
    "Das Auto dominiert, der öffentliche Verkehr ist im internationalen Vergleich stark.",
    V.barChart({ title: "Anteil an den Personenkilometern in der Schweiz",
      yTitle: "Prozent", xTitle: "Verkehrsmittel", max: 80,
      data: [["Auto", 65], ["Bahn und Bus", 24], ["Velo und Fuss", 11]], highlight: "Bahn und Bus",
      caption: "Beim Pendeln in die Städte kehrt sich das Verhältnis teilweise um." }));

  set("geo-global-development", "Die Wertschöpfungskette",
    "Design und Marke behalten die Marge, die Montage kaum.",
    V.barChart({ title: "Anteil an der Wertschöpfung eines Elektronikgeräts",
      yTitle: "Prozent", xTitle: "Stufe", max: 45,
      data: [["Design", 30], ["Bauteile", 22], ["Montage", 5], ["Marke", 35], ["Handel", 8]],
      highlight: "Montage",
      caption: "Deshalb bringt die Verlagerung der Montage einem Land wenig Wertschöpfung." }));

  set("geo-energy-sustainability", "Drei Dimensionen der Nachhaltigkeit",
    "Eine Massnahme trägt erst, wenn sie in allen drei Bereichen bestehen kann.",
    V.compare({ title: "Wann eine Massnahme tragfähig ist", link: "Fehlt eine Dimension, scheitert die Massnahme langfristig",
      columns: [
        { name: "Ökologie und Ökonomie", rows: [["Ökologie", "Belastung bleibt im Rahmen"],
          ["Ökonomie", "Finanzierung trägt sich"], ["Konflikt", "kurzfristige Kosten gegen langfristigen Nutzen"]] },
        { name: "Soziales", rows: [["Zugang", "alle können teilhaben"], ["Verteilung", "Lasten gerecht getragen"],
          ["Konflikt", "Massnahme darf nicht die Ärmsten treffen"]] },
      ] }));

  /* ---------- Geschichte und Sprachen ---------- */
  set("hist-ch-postwar-system", "Die Zauberformel und ihr Ende",
    "Vier Parteien, sieben Sitze, über vierzig Jahre unverändert.",
    V.timeline({ title: "Regierungszusammensetzung seit 1848",
      spans: [{ from: 1959, to: 2003, name: "Zauberformel 2-2-2-1" }],
      events: [{ year: 1848, label: "nur Freisinnige" }, { year: 1891, label: "erster Katholisch-Konservativer" },
        { year: 1943, label: "erster Sozialdemokrat" }, { year: 1959, label: "Zauberformel", turn: true },
        { year: 2003, label: "Formel bricht", turn: true }],
      caption: "Die Formel war nie Gesetz, sondern Übereinkunft. Deshalb konnte sie 2003 auch wieder fallen." }));

  set("de-text-types", "Drei Textsorten unterscheiden",
    "Nähe, Position und Strenge trennen die Formen.",
    V.compare({ title: "Erörterung, Kommentar, Essay", link: "Die Prüfung verlangt die passende Form",
      columns: [
        { name: "Erörterung und Kommentar", rows: [["Erörterung", "abwägend, sachlich, gegliedert"],
          ["Kommentar", "wertend, pointiert, klare Position"], ["Gemeinsam", "beide argumentieren mit Belegen"]] },
        { name: "Essay", rows: [["Haltung", "persönlich und suchend"], ["Aufbau", "assoziativ statt schematisch"],
          ["Gefahr", "wirkt schnell beliebig ohne Belege"]] },
      ] }));

  set("en-writing", "Structure of a short argumentative text",
    "Introduction with a thesis, two developed arguments, a counterpoint, a conclusion.",
    V.process({ title: "Four moves in a short essay",
      steps: [{ title: "Thesis", text: "One arguable sentence, not a topic.", via: "because" },
        { title: "Argument", text: "Reason plus evidence plus effect.", via: "and also" },
        { title: "Counterpoint", text: "The strongest objection, taken seriously.", via: "therefore" },
        { title: "Conclusion", text: "What follows, no new evidence.", accent: true }] }));

  M.vizRebuilt2 = n;
})();

/* Grafik für jedes bisher bildlose Kapitel. */
(function () {
  "use strict";
  var M = window.MNEMIKA;
  var V = M.Viz;
  var n = 0;
  var set = (id, t, cap, html) => { M.ILLUS[id] = [{ title: t, caption: cap, html: html, rebuilt: true }]; n += 1; };
  var P = (title, steps, cap) => V.process({ title, steps, caption: cap });
  var C = (title, a, b, link, cap) => V.compare({ title, columns: [a, b], link, caption: cap });
  var B = (title, y, x, data, hi, cap, max) => V.barChart({ title, yTitle: y, xTitle: x, data, highlight: hi, caption: cap, max });
  var L = (title, y, x, cats, series, cap, max) => V.lineChart({ title, yTitle: y, xTitle: x, cats, series, caption: cap, max });
  var T = (title, events, spans, cap) => V.timeline({ title, events, spans, caption: cap });

  /* ---------------- Mathematik ---------------- */
  set("math-algebra", "Eine Gleichung ist eine Behauptung",
    "Jede Umformung muss auf beiden Seiten geschehen, sonst ändert sich die Lösungsmenge.",
    P("Vom Term zur Lösungsmenge", [
      { title: "Term", text: "3x + 7 hat nur einen Wert, keinen Wahrheitswert.", via: "gleichsetzen" },
      { title: "Gleichung", text: "3x + 7 = 22 behauptet etwas über x.", via: "beidseitig" },
      { title: "Umformen", text: "Nur umkehrbare Schritte erhalten die Lösungsmenge.", via: "isolieren" },
      { title: "Lösung", text: "x = 5, danach immer die Probe.", accent: true }],
      "Durch null teilen ist nicht umkehrbar und deshalb verboten."));

  set("math-analytic-geometry", "Von der Gleichung zur Lage im Raum",
    "Jede Form beschreibt eine Punktmenge, die eine Bedingung erfüllt.",
    C("Gerade, Ebene, Kreis",
      { name: "Gerade und Ebene", rows: [["Gerade", "Punkt plus Vielfaches eines Richtungsvektors"],
        ["Ebene", "Punkt plus zwei Richtungen"], ["Normalform", "Normalenvektor steht senkrecht darauf"]] },
      { name: "Kreis und Abstand", rows: [["Kreis", "alle Punkte mit festem Abstand zum Mittelpunkt"],
        ["Abstand Punkt–Gerade", "über den Normalenvektor"], ["Winkel", "über das Skalarprodukt"]] },
      "Erst die Form erkennen, dann die passende Formel wählen",
      "Das Skalarprodukt null bedeutet senkrecht. Das ist die meistgebrauchte Prüfung."));

  /* ---------------- Biologie ---------------- */
  set("bio-biomolecules", "Vier Stoffklassen, vier Aufgaben",
    "Der Bau der Bausteine bestimmt, wofür das Molekül taugt.",
    C("Bausteine und Funktion",
      { name: "Energie und Bau", rows: [["Kohlenhydrate", "aus Einfachzuckern, schnelle Energie"],
        ["Lipide", "aus Fettsäuren und Glycerin, Speicher und Membran"]] },
      { name: "Arbeit und Information", rows: [["Proteine", "aus 20 Aminosäuren, Enzyme und Struktur"],
        ["Nukleinsäuren", "aus Nukleotiden, Information"]] },
      "Alle vier sind Polymere aus wenigen Bausteinen",
      "Die Reihenfolge der Bausteine erzeugt die Vielfalt, nicht ihre Anzahl."));

  set("bio-meiosis-karyotype", "Meiose halbiert und mischt",
    "Zwei Teilungen, aber nur eine Verdopplung der DNA.",
    P("Vier Schritte der Meiose", [
      { title: "Verdopplung", text: "Jedes Chromosom besteht aus zwei Chromatiden.", via: "Paarung" },
      { title: "Crossing-over", text: "Homologe tauschen Stücke aus.", via: "Meiose I" },
      { title: "Trennung I", text: "Homologe Chromosomen werden getrennt.", via: "Meiose II" },
      { title: "Trennung II", text: "Schwesterchromatiden werden getrennt, vier Zellen.", accent: true }],
      "Aus einer diploiden Zelle entstehen vier haploide, jede genetisch verschieden."));

  set("bio-mendel", "Das 3-zu-1-Verhältnis entsteht im Kreuzungsquadrat",
    "Drei von vier Kombinationen tragen mindestens ein dominantes Allel.",
    B("Nachkommen bei Rr mal Rr", "Anteil von 16", "Genotyp",
      [["RR", 4], ["Rr", 8], ["rr", 4]], "rr",
      "Phänotypisch 3 zu 1, genotypisch 1 zu 2 zu 1. Die Prüfung fragt oft nach dem zweiten.", 10));

  set("bio-dihybrid-sexlinked", "Zwei Merkmale und der Sonderfall X",
    "Bei zwei Merkmalen entsteht 9 zu 3 zu 3 zu 1, bei X-gekoppelten Erbgängen nicht.",
    C("Dihybrid gegen geschlechtsgekoppelt",
      { name: "Dihybrid", rows: [["Kreuzung", "AaBb mal AaBb"], ["Verhältnis", "9 zu 3 zu 3 zu 1"],
        ["Bedingung", "Gene liegen auf verschiedenen Chromosomen"]] },
      { name: "X-gekoppelt", rows: [["Träger", "Frauen können Überträgerinnen sein"],
        ["Betroffene", "meist Männer, nur ein X"], ["Beispiel", "Rot-Grün-Schwäche, Bluterkrankheit"]] },
      "Beides prüft dieselbe Logik, nur die Chromosomen unterscheiden sich",
      "Bei X-gekoppelten Erbgängen immer die Geschlechtschromosomen mitschreiben."));

  set("bio-protein-synthesis", "Vom Gen zum Protein",
    "Zwei Schritte, zwei Orte, ein Code aus Dreiergruppen.",
    P("Transkription und Translation", [
      { title: "DNA", text: "Der Abschnitt wird im Kern geöffnet.", via: "Transkription" },
      { title: "mRNA", text: "Eine Arbeitskopie verlässt den Kern.", via: "Codon" },
      { title: "Ribosom", text: "Je drei Basen bedeuten eine Aminosäure.", via: "Translation" },
      { title: "Protein", text: "Die Kette faltet sich in ihre Form.", accent: true }],
      "Der Code ist redundant: mehrere Codons bedeuten dieselbe Aminosäure."));

  set("bio-digestion", "Wo welcher Nährstoff zerlegt wird",
    "Jeder Abschnitt hat sein eigenes Enzym und seinen eigenen pH.",
    C("Stationen der Verdauung",
      { name: "Mund und Magen", rows: [["Mund", "Amylase, Stärke, pH 7"],
        ["Magen", "Pepsin, Proteine, pH 2"], ["Merkmal", "Amylase wird im Magen gestoppt"]] },
      { name: "Dünndarm", rows: [["Enzyme", "aus Bauchspeicheldrüse"], ["Galle", "zerteilt Fette in Tröpfchen"],
        ["Aufnahme", "über Zotten, riesige Oberfläche"]] },
      "Der pH-Wechsel steuert, welches Enzym arbeitet",
      "Die Zotten vergrössern die Fläche auf rund 200 Quadratmeter."));

  set("bio-nervous-system", "Vom Reiz zur Reaktion",
    "Im Reflexbogen wird das Gehirn umgangen, deshalb ist er so schnell.",
    P("Der Reflexbogen", [
      { title: "Rezeptor", text: "Der Reiz wird in ein Signal umgewandelt.", via: "sensibel" },
      { title: "Rückenmark", text: "Umschaltung ohne Umweg über das Gehirn.", via: "motorisch" },
      { title: "Muskel", text: "Die Reaktion läuft, bevor man sie bemerkt.", via: "parallel" },
      { title: "Gehirn", text: "Erfährt erst nachträglich davon.", accent: true }],
      "Das Aktionspotential läuft immer gleich stark, die Stärke steckt in der Frequenz."));

  set("bio-eye", "Wie das Auge scharf stellt",
    "Der Ziliarmuskel verändert die Linsenkrümmung, nicht ihre Lage.",
    C("Nah und fern",
      { name: "Fernsicht", rows: [["Ziliarmuskel", "entspannt"], ["Linsenbänder", "gespannt"],
        ["Linse", "flach"], ["Brechkraft", "gering"]] },
      { name: "Nahsicht", rows: [["Ziliarmuskel", "angespannt"], ["Linsenbänder", "locker"],
        ["Linse", "kugelig"], ["Brechkraft", "hoch"]] },
      "Akkommodation heisst: die Linse ändert ihre Form",
      "Im Alter wird die Linse härter, deshalb fällt Nahsehen zuerst schwer."));

  set("bio-evolution", "Darwin gegen Lamarck",
    "Beide erklären Anpassung, aber nur eine Erklärung hält der Prüfung stand.",
    C("Zwei Erklärungen derselben Beobachtung",
      { name: "Lamarck", rows: [["Annahme", "Gebrauch verändert das Organ"],
        ["Vererbung", "erworbene Eigenschaften"], ["Problem", "Körperzellen geben nichts weiter"]] },
      { name: "Darwin", rows: [["Annahme", "Variation besteht bereits"],
        ["Auslese", "Umwelt wählt aus"], ["Beleg", "Fossilien, Homologien, Genetik"]] },
      "Nicht das Individuum passt sich an, sondern die Population verschiebt sich",
      "Formulierungen wie «die Giraffe wollte höher reichen» kosten in der Prüfung Punkte."));

  /* ---------------- Chemie ---------------- */
  set("chem-substances", "Reinstoff oder Gemisch",
    "Erst die Einteilung, dann das passende Trennverfahren.",
    C("Einteilung und Trennung",
      { name: "Reinstoffe", rows: [["Element", "nur eine Atomsorte"], ["Verbindung", "feste Zusammensetzung"],
        ["Merkmal", "scharfe Schmelz- und Siedepunkte"]] },
      { name: "Gemische", rows: [["homogen", "Lösung, Legierung"], ["heterogen", "Suspension, Emulsion"],
        ["Trennung", "Filtrieren, Destillieren, Chromatografie"]] },
      "Das Trennverfahren folgt aus dem Unterschied der Stoffeigenschaften",
      "Destillieren nutzt verschiedene Siedepunkte, Filtrieren verschiedene Teilchengrössen."));

  set("chem-shell-lewis", "Die Achterregel steuert die Bindung",
    "Atome tauschen oder teilen Elektronen, bis die Aussenschale voll ist.",
    B("Aussenelektronen der Hauptgruppen", "Aussenelektronen", "Hauptgruppe",
      [["I", 1], ["II", 2], ["IV", 4], ["VI", 6], ["VII", 7], ["VIII", 8]], "VIII",
      "Gruppe I gibt leicht ab, Gruppe VII nimmt leicht auf, Gruppe VIII reagiert kaum."));

  set("chem-covalent", "Bindungsart aus der Elektronegativität",
    "Die Differenz entscheidet, ob geteilt oder übertragen wird.",
    B("Elektronegativitätsdifferenz und Bindungstyp", "Differenz", "Beispiel",
      [["H–H", 0], ["C–H", 0.4], ["O–H", 1.4], ["Na–Cl", 2.1]], "Na–Cl",
      "Unter 0,5 unpolar, bis rund 1,7 polar, darüber ionisch. Die Grenzen sind fliessend.", 2.6));

  set("chem-equations-mole", "Das Mol verbindet Zählen und Wägen",
    "Koeffizienten sind Teilchenverhältnisse, niemals Massenverhältnisse.",
    P("Vier Brücken", [
      { title: "Teilchen", text: "6,022 mal zehn hoch 23 in einem Mol.", via: "durch N_A" },
      { title: "Stoffmenge", text: "n in Mol, die zentrale Grösse.", via: "mal M" },
      { title: "Masse", text: "m in Gramm, das wägbare Ergebnis.", via: "bei Gasen" },
      { title: "Volumen", text: "22,4 Liter je Mol bei Normbedingungen.", accent: true }],
      "Jede Aufgabe läuft über die Stoffmenge, auch wenn nur Massen gegeben sind."));

  set("chem-redox", "Oxidation und Reduktion laufen immer zusammen",
    "Was das eine Teilchen abgibt, nimmt das andere auf.",
    C("Zwei Halbreaktionen, ein Vorgang",
      { name: "Oxidation", rows: [["Elektronen", "werden abgegeben"], ["Oxidationszahl", "steigt"],
        ["Der Stoff", "ist das Reduktionsmittel"]] },
      { name: "Reduktion", rows: [["Elektronen", "werden aufgenommen"], ["Oxidationszahl", "sinkt"],
        ["Der Stoff", "ist das Oxidationsmittel"]] },
      "Die Namen beziehen sich auf die Wirkung am Partner",
      "Genau diese Umkehrung wird in Prüfungen am häufigsten verwechselt."));

  set("chem-organic-naming", "Der Name verrät die Struktur",
    "Vier Schritte führen von der Formel zum IUPAC-Namen.",
    P("Benennen in vier Schritten", [
      { title: "Hauptkette", text: "Längste Kette mit der funktionellen Gruppe.", via: "nummerieren" },
      { title: "Nummerierung", text: "So, dass die Gruppe die kleinste Zahl bekommt.", via: "Seitenketten" },
      { title: "Substituenten", text: "Mit Positionszahl und Vorsilbe.", via: "zusammensetzen" },
      { title: "Name", text: "Vorsilben alphabetisch, dann Stamm, dann Endung.", accent: true }],
      "Die Endung nennt die Stoffklasse: -an, -en, -ol, -al, -on, -säure."));

  /* ---------------- Physik ---------------- */
  set("phys-friction-statics", "Haftreibung ist grösser als Gleitreibung",
    "Deshalb ruckt ein Gegenstand beim Anschieben zuerst los.",
    B("Reibungszahlen für Stahl auf Stahl", "Reibungszahl", "Art",
      [["Haftreibung", 0.15], ["Gleitreibung", 0.1], ["Rollreibung", 0.002]], "Rollreibung",
      "Die Reibungskraft hängt von der Normalkraft ab, nicht von der Auflagefläche.", 0.2));

  set("phys-states", "Beim Phasenübergang bleibt die Temperatur konstant",
    "Die zugeführte Energie ändert die Bindung, nicht die Bewegung.",
    L("Erwärmen von Eis bis Dampf", "Temperatur in Grad Celsius", "zugeführte Energie",
      ["Start", "Schmelzen", "", "Erwärmen", "Sieden", "", "Dampf"],
      [{ name: "Temperatur", values: [-20, 0, 0, 60, 100, 100, 130] }],
      "Die beiden waagrechten Abschnitte sind Schmelz- und Verdampfungswärme.", 150));

  set("phys-magnetism", "Vom Magnetfeld zur Induktion",
    "Bewegung und Feld zusammen erzeugen Spannung.",
    P("Vier Schritte zur Induktion", [
      { title: "Magnetfeld", text: "Feldlinien laufen aussen von Nord nach Süd.", via: "Bewegung" },
      { title: "Änderung", text: "Der magnetische Fluss durch die Spule ändert sich.", via: "Induktion" },
      { title: "Spannung", text: "Je schneller die Änderung, desto grösser.", via: "Lenz" },
      { title: "Gegenwirkung", text: "Der Induktionsstrom wirkt seiner Ursache entgegen.", accent: true }],
      "Ohne Änderung keine Induktion. Ein ruhender Magnet erzeugt keine Spannung."));

  /* ---------------- Geschichte ---------------- */
  set("hist-ch-1848-1914", "Der Bundesstaat wird ausgebaut",
    "Von der Verfassung über die Totalrevision zur Proporzwahl.",
    T("Die Schweiz 1848 bis 1918",
      [{ year: 1848, label: "Bundesverfassung" }, { year: 1874, label: "Totalrevision, Referendum", turn: true },
       { year: 1891, label: "Volksinitiative" }, { year: 1898, label: "Bundesbahnen verstaatlicht" },
       { year: 1918, label: "Landesstreik", turn: true }],
      [{ from: 1848, to: 1891, name: "Ausbau der Volksrechte" }],
      "Die direkte Demokratie entstand schrittweise, nicht 1848 auf einen Schlag."));

  set("hist-ch-ww1", "Neutral nach aussen, gespalten nach innen",
    "Der Krieg traf die Schweiz wirtschaftlich und sprachlich.",
    C("Zwei Spaltungen",
      { name: "Sprachgraben", rows: [["Deutschschweiz", "eher deutschfreundlich"],
        ["Romandie", "eher frankreichfreundlich"], ["Auslöser", "Obersten-Affäre 1916"]] },
      { name: "Sozialer Graben", rows: [["Löhne", "kaum gestiegen"], ["Preise", "fast verdoppelt"],
        ["Folge", "Landesstreik 1918"]] },
      "Neutralität nach aussen verhinderte die Spaltung im Innern nicht",
      "Der Landesstreik brachte Proporzwahl und 48-Stunden-Woche."));

  set("hist-ch-ww2", "Anpassung zwischen Abwehr und Handel",
    "Militärische Abwehrbereitschaft und wirtschaftliche Zusammenarbeit zugleich.",
    C("Zwei Seiten derselben Politik",
      { name: "Abwehr", rows: [["Reduit", "Rückzug in die Alpen ab 1940"],
        ["Mobilmachung", "rund 450'000 Mann"], ["Wirkung", "Kosten einer Besetzung erhöhen"]] },
      { name: "Anpassung", rows: [["Handel", "Waffen und Kredite an die Achse"],
        ["Flüchtlinge", "Abweisungen an der Grenze"], ["Nachkriegskritik", "Bergier-Bericht 2002"]] },
      "Die Bewertung dieser Politik ist bis heute umstritten",
      "In der Prüfung zählt, beide Seiten zu nennen und zu belegen."));

  set("hist-ideologies", "Drei Antworten auf dieselbe Umbruchzeit",
    "Alle drei reagieren auf Industrialisierung und Ständeordnung.",
    C("Was jede Ideologie will",
      { name: "Liberalismus und Nationalismus", rows: [["Liberalismus", "Freiheit des Einzelnen, Rechtsstaat"],
        ["Nationalismus", "Nation als Bezugsrahmen"], ["Gemeinsam", "gegen die alte Ständeordnung"]] },
      { name: "Sozialismus", rows: [["Ziel", "soziale Gleichheit"], ["Mittel", "Gewerkschaften, Parteien, teils Revolution"],
        ["Konflikt", "Freiheit gegen Gleichheit"]] },
      "Dieselbe Ausgangslage, drei verschiedene Antworten",
      "Nationalismus konnte befreiend und ausgrenzend wirken, je nach Zeit."));

  set("hist-imperialism", "Der Wettlauf um Afrika",
    "Innerhalb von dreissig Jahren wurde ein Kontinent aufgeteilt.",
    B("Anteil Afrikas unter europäischer Herrschaft", "Prozent der Fläche", "Jahr",
      [["1870", 10], ["1885", 35], ["1900", 90], ["1914", 95]], "1914",
      "Die Berliner Konferenz 1884/85 teilte auf, ohne dass Betroffene beteiligt waren.", 100));

  set("hist-dictatorships", "Drei Diktaturen im Vergleich",
    "Gemeinsame Mittel, unterschiedliche Ziele und Feindbilder.",
    C("Was sie teilen und was sie trennt",
      { name: "Gemeinsam", rows: [["Partei", "Einparteienherrschaft"], ["Terror", "Geheimpolizei und Lager"],
        ["Propaganda", "Führerkult und Gleichschaltung"]] },
      { name: "Verschieden", rows: [["Italien", "Faschismus, Staat über allem"],
        ["Deutschland", "Rassenideologie, Vernichtung"], ["Sowjetunion", "Klassenideologie, Planwirtschaft"]] },
      "Totalitär heisst: auch das Private wird beansprucht",
      "Die Unterscheidung der Ideologien ist prüfungsrelevant, nicht nur die Mittel."));

  set("hist-ww2-world", "Vom europäischen zum Weltkrieg",
    "Vier Wendepunkte kehrten den Verlauf um.",
    T("Zweiter Weltkrieg 1939 bis 1945",
      [{ year: 1939, label: "Überfall auf Polen" }, { year: 1941, label: "Barbarossa und Pearl Harbor", turn: true },
       { year: 1942, label: "Stalingrad und Wannsee", turn: true }, { year: 1944, label: "Landung in der Normandie" },
       { year: 1945, label: "Kapitulation, Hiroshima" }],
      [{ from: 1941, to: 1945, name: "Holocaust in industriellem Ausmass" }],
      "1941 wurde aus dem europäischen Krieg ein Weltkrieg, 1942/43 kippte die Front."));

  set("hist-postwar-coldwar", "Zwei Blöcke, eine Systemkonkurrenz",
    "Machtinteressen und Ideologie lassen sich nicht trennen.",
    C("Die beiden Lager",
      { name: "Westen", rows: [["Ordnung", "Marktwirtschaft, Mehrparteiensystem"],
        ["Bündnis", "NATO 1949"], ["Programm", "Marshallplan"]] },
      { name: "Osten", rows: [["Ordnung", "Planwirtschaft, Einparteiensystem"],
        ["Bündnis", "Warschauer Pakt 1955"], ["Programm", "RGW"]] },
      "Direkter Krieg blieb aus, Stellvertreterkriege nicht",
      "Die atomare Abschreckung machte den grossen Krieg unwahrscheinlich und die kleinen häufiger."));

  set("hist-bandung-decolonisation", "Bandung und der dritte Weg",
    "Die neuen Staaten wollten sich keinem Block anschliessen.",
    T("Dekolonisierung 1945 bis 1975",
      [{ year: 1947, label: "Indien und Pakistan" }, { year: 1955, label: "Konferenz von Bandung", turn: true },
       { year: 1960, label: "Afrikanisches Jahr, 17 Staaten" }, { year: 1962, label: "Algerien nach Krieg" },
       { year: 1975, label: "letzte portugiesische Kolonien" }],
      [{ from: 1955, to: 1975, name: "Blockfreienbewegung" }],
      "Formale Unabhängigkeit bedeutete oft keine wirtschaftliche."));

  set("hist-un-nato-europe", "Drei Organisationen, drei Zwecke",
    "Wer wofür zuständig ist, wird regelmässig verwechselt.",
    C("UNO, NATO und EU",
      { name: "UNO und NATO", rows: [["UNO 1945", "weltweit, Frieden und Recht"],
        ["Sicherheitsrat", "fünf Vetomächte"], ["NATO 1949", "Militärbündnis, Beistandspflicht"]] },
      { name: "Europäische Integration", rows: [["1951", "Montanunion, Kohle und Stahl"],
        ["1957", "Römische Verträge"], ["1992", "Maastricht, EU und Binnenmarkt"]] },
      "Wirtschaftliche Verflechtung als Friedensprojekt",
      "Die Schweiz trat der UNO erst 2002 bei, der NATO und EU nicht."));

  set("hist-china-1949", "China zwischen Plan und Markt",
    "Zwei Phasen, zwei gegensätzliche Wirtschaftsmodelle.",
    T("China seit 1949",
      [{ year: 1949, label: "Volksrepublik ausgerufen" }, { year: 1958, label: "Grosser Sprung, Hungersnot", turn: true },
       { year: 1966, label: "Kulturrevolution" }, { year: 1978, label: "Öffnung unter Deng", turn: true },
       { year: 2001, label: "Beitritt zur WTO" }],
      [{ from: 1949, to: 1978, name: "Planwirtschaft" }, { from: 1978, to: 2001, name: "Reform und Öffnung" }],
      "Wirtschaftliche Öffnung ohne politische Öffnung ist das Kennzeichen seit 1978."));

  set("hist-middle-east", "Ein Konflikt mit mehreren Ebenen",
    "Territorium, Staatlichkeit, Flüchtlinge und Sicherheit hängen zusammen.",
    C("Die Kernfragen",
      { name: "Umstrittene Fragen", rows: [["Grenzen", "Lage und Anerkennung"],
        ["Jerusalem", "Status der Stadt"], ["Flüchtlinge", "Rückkehrrecht"]] },
      { name: "Marksteine", rows: [["1947", "Teilungsplan der UNO"], ["1948", "Staatsgründung und Krieg"],
        ["1967", "Sechstagekrieg, besetzte Gebiete"], ["1993", "Oslo-Abkommen"]] },
      "Jede Ebene hat eigene Beteiligte und eigene Argumente",
      "In der Prüfung zählt, mehrere Deutungen zu belegen statt Partei zu ergreifen."));

  /* ---------------- Geografie ---------------- */
  set("geo-exogenic-rocks", "Der Gesteinskreislauf",
    "Kein Gestein ist endgültig, alles wird umgewandelt.",
    P("Vier Stationen im Kreislauf", [
      { title: "Magma", text: "Erstarrt zu Magmatit.", via: "Verwitterung" },
      { title: "Sediment", text: "Abtragung, Transport, Ablagerung.", via: "Druck" },
      { title: "Sedimentit", text: "Verfestigt in Schichten.", via: "Metamorphose" },
      { title: "Metamorphit", text: "Umgewandelt durch Druck und Hitze, dann wieder Schmelze.", accent: true }],
      "Schichtung deutet auf Sedimente, Kristalle auf Magmatite."));

  set("geo-switzerland-geology", "Drei Grossräume, drei Entstehungen",
    "Die Alpenfaltung erklärt das gesamte Profil.",
    C("Vom Jura bis zu den Alpen",
      { name: "Jura und Mittelland", rows: [["Jura", "gefaltete Kalkschichten"],
        ["Mittelland", "Molasse aus Alpenabtragung"], ["Nutzung", "dicht besiedelt, Landwirtschaft"]] },
      { name: "Alpen", rows: [["Entstehung", "Kollision Afrika und Europa"],
        ["Decken", "übereinandergeschobene Gesteinspakete"], ["Folge", "Hochgebirge mit Gletscherformen"]] },
      "Dasselbe Ereignis erklärt alle drei Räume",
      "Die Molasse im Mittelland ist der Abtragungsschutt der Alpen."));

  set("geo-economic-sectors-agriculture", "Der Strukturwandel der Sektoren",
    "Mit steigendem Wohlstand verschiebt sich die Beschäftigung.",
    L("Beschäftigung nach Sektor in der Schweiz", "Prozent der Erwerbstätigen", "Jahr",
      ["1900", "1950", "1970", "1990", "2010", "2025"],
      [{ name: "1. Sektor", values: [31, 17, 8, 5, 3, 2] },
       { name: "3. Sektor", values: [22, 37, 47, 63, 73, 77] }],
      "Der zweite Sektor liegt dazwischen und sinkt seit 1970 ebenfalls.", 90));

  set("geo-urban", "Stadtentwicklung in drei Wellen",
    "Jede Welle kehrt die Richtung der vorherigen teilweise um.",
    P("Urbanisierung bis Reurbanisierung", [
      { title: "Urbanisierung", text: "Zuzug in die Kernstadt, Industrialisierung.", via: "Enge" },
      { title: "Suburbanisierung", text: "Abwanderung ins Umland, Auto und Eigenheim.", via: "Pendeln" },
      { title: "Desurbanisierung", text: "Auch ländliche Räume wachsen.", via: "Aufwertung" },
      { title: "Reurbanisierung", text: "Rückkehr in die Stadt, Gentrifizierung.", accent: true }],
      "Zersiedelung und steigende Mieten sind die beiden häufigsten Prüfungsthemen."));

  set("geo-usa-physical", "Der offene Korridor zwischen den Gebirgen",
    "Nord-südliche Gebirge lassen polare und tropische Luft aufeinandertreffen.",
    P("Vom Relief zur Naturgefahr", [
      { title: "Relief", text: "Rockies und Appalachen verlaufen nord-südlich.", via: "Korridor" },
      { title: "Luftmassen", text: "Kalte Kanadaluft trifft feuchtwarme Golfluft.", via: "Gegensatz" },
      { title: "Konflikt", text: "Starke Scherung und Temperaturunterschiede.", via: "Folge" },
      { title: "Tornado Alley", text: "Häufigste und heftigste Tornados der Erde.", accent: true }],
      "In Europa liegen die Alpen quer und verhindern genau diesen Zusammenprall."));

  set("geo-usa-population", "Wohin die Bevölkerung zieht",
    "Der Sun Belt wächst, der Rust Belt verliert.",
    B("Bevölkerungsveränderung 1970 bis 2020", "Prozent", "Region",
      [["Texas", 160], ["Florida", 190], ["Arizona", 230], ["Ohio", 10], ["New York", 8]], "Arizona",
      "Klima, Steuern und Arbeitsplätze treiben die Wanderung nach Süden und Westen.", 250));

  set("geo-usa-economy", "Landwirtschaft folgt dem Niederschlag",
    "Der hundertste Längengrad trennt Regenfeldbau von Bewässerung.",
    C("Osten gegen Westen",
      { name: "Östlich des 100. Längengrads", rows: [["Niederschlag", "über 500 mm"],
        ["Nutzung", "Corn Belt, Regenfeldbau"], ["Betriebe", "Getreide und Mast"]] },
      { name: "Westlich davon", rows: [["Niederschlag", "unter 500 mm"],
        ["Nutzung", "Weidewirtschaft und Bewässerung"], ["Problem", "sinkender Grundwasserspiegel"]] },
      "Der Ogallala-Aquifer macht Ackerbau im Trockenen erst möglich",
      "Die Grenze verschiebt sich mit dem Klimawandel nach Osten."));

  set("geo-usa-global", "Anteil an Wirtschaft, Militär und Bevölkerung",
    "Der Anteil an der Weltbevölkerung ist klein, der an den Ausgaben gross.",
    B("Anteil der USA am Weltwert", "Prozent", "Bereich",
      [["Bevölkerung", 4], ["Wirtschaftsleistung", 25], ["Militärausgaben", 39], ["CO₂-Ausstoss", 13]],
      "Militärausgaben",
      "Solche Vergleiche sind typische Datenauswertungsaufgaben in der Regionalgeografie.", 45));

  /* ---------------- Deutsch ---------------- */
  set("de-written-method", "Vier Schritte vor dem ersten Satz",
    "Wer sofort schreibt, verliert Zeit beim Umschreiben.",
    P("Von der Aufgabe zum Text", [
      { title: "Aufgabe", text: "Operator und Gegenstand unterstreichen.", via: "sammeln" },
      { title: "Material", text: "Stichworte und Belege ordnen.", via: "gliedern" },
      { title: "Plan", text: "Reihenfolge der Absätze festlegen.", via: "schreiben" },
      { title: "Text", text: "Erst jetzt formulieren, Einleitung zuletzt.", accent: true }],
      "Zwanzig Minuten Planung sparen eine Stunde Korrektur."));

  set("de-language-editing", "Was beim Überarbeiten zuerst kommt",
    "Erst der Inhalt, dann der Bau, zuletzt die Oberfläche.",
    P("Drei Durchgänge", [
      { title: "Inhalt", text: "Fehlt ein Argument, fehlt ein Beleg?", via: "dann" },
      { title: "Aufbau", text: "Absätze, Übergänge, roter Faden.", via: "zuletzt" },
      { title: "Sprache", text: "Wiederholungen, Satzlänge, Rechtschreibung.", accent: true }],
      "Wer mit der Rechtschreibung beginnt, poliert Sätze, die er später streicht."));

  set("de-oral-method", "Der Aufbau des Prüfungsgesprächs",
    "Beobachtung, Deutung und Einordnung in dieser Reihenfolge.",
    P("Vier Schritte im Gespräch", [
      { title: "Einordnen", text: "Autor, Werk, Stelle im Ganzen.", via: "beobachten" },
      { title: "Beobachten", text: "Konkrete Textstelle, konkretes Mittel.", via: "deuten" },
      { title: "Deuten", text: "Welche Wirkung entsteht und warum.", via: "verbinden" },
      { title: "Bewerten", text: "Bezug zum Gesamtwerk und zur Frage.", accent: true }],
      "Nacherzählen ist der häufigste Fehler. Gefragt ist die Wirkung."));

  set("de-buehler", "Verschiebung im Gestein: drei Leben, ein Ort",
    "Der Titel beschreibt das Bauprinzip des Romans.",
    C("Struktur und Deutung",
      { name: "Form", rows: [["Erzählweise", "drei Perspektiven, verschränkt"],
        ["Zeit", "Sprünge statt Chronologie"], ["Ort", "dasselbe Dorf als Klammer"]] },
      { name: "Themen", rows: [["Verschiebung", "langsame Veränderung unter der Oberfläche"],
        ["Zugehörigkeit", "wer gehört dazu, wer nicht"], ["Sprache", "knapp, viel Ungesagtes"]] },
      "Das Gestein ist Bild für Veränderung, die man erst spät bemerkt",
      "Belege am besten aus den Übergängen zwischen den Perspektiven."));

  set("de-duerrenmatt", "Der Besuch der alten Dame: wie die Schuld wandert",
    "Die Güllener lehnen ab und kaufen gleichzeitig auf Kredit.",
    P("Vier Stufen der Zustimmung", [
      { title: "Empörung", text: "Das Angebot wird öffentlich zurückgewiesen.", via: "aber" },
      { title: "Kredit", text: "Alle kaufen teurer ein, gelbe Schuhe.", via: "Umdeutung" },
      { title: "Rechtfertigung", text: "Aus Mord wird Gerechtigkeit.", via: "Vollzug" },
      { title: "Tat", text: "Die Gemeinde handelt, niemand allein.", accent: true }],
      "Die Tragikomödie zeigt, wie Schuld kollektiv wird, ohne dass jemand sie übernimmt."));

  set("de-storm", "Der Schimmelreiter: zwei Erzählrahmen",
    "Die Rahmen erlauben, Aberglaube und Vernunft nebeneinanderzustellen.",
    C("Rahmen und Kern",
      { name: "Rahmen", rows: [["Äusserer Rahmen", "Leser einer alten Zeitschrift"],
        ["Innerer Rahmen", "Schulmeister erzählt"], ["Wirkung", "Distanz und Zweifel"]] },
      { name: "Binnenhandlung", rows: [["Hauke Haien", "Deichgraf, rechnet und plant"],
        ["Konflikt", "Fortschritt gegen Tradition"], ["Ende", "Deichbruch und Untergang"]] },
      "Der Rahmen lässt offen, was Spuk und was Erinnerung ist",
      "Die Gespenstergeschichte ist Deutung der Dorfgemeinschaft, nicht Tatsache."));

  set("de-burkart", "Burkarts Gedichte: drei wiederkehrende Zugänge",
    "Natur, Erinnerung und Sprache greifen ineinander.",
    C("Was in den zehn Gedichten wiederkehrt",
      { name: "Motive", rows: [["Natur", "Moor, Hochland, Nussbaum"],
        ["Erinnerung", "Kindheit und Vergehen"], ["Stille", "Schweigen als eigener Raum"]] },
      { name: "Mittel", rows: [["Bildsprache", "konkret statt abstrakt"],
        ["Form", "oft frei, wenige Reime"], ["Klang", "Wiederholung und Pause"]] },
      "Natur ist bei Burkart nie blosse Kulisse",
      "Für die Prüfung: ein Motiv über mehrere Gedichte verfolgen, nicht nur eines deuten."));

  /* ---------------- Englisch ---------------- */
  set("en-vocabulary-grammar", "Which tense answers which question",
    "Choose the tense from the time relation, not from a signal word alone.",
    C("Four exam tenses",
      { name: "Past and present", rows: [["Simple past", "finished action, finished time"],
        ["Present perfect", "past action, present relevance"], ["Test", "does the time frame still include now?"]] },
      { name: "Conditionals", rows: [["First", "real future possibility"],
        ["Second", "unreal present, past form plus would"], ["Third", "unreal past, had plus would have"]] },
      "The tense encodes the relation between event and now",
      "Signal words help, but the time relation decides."));

  set("en-reading", "From text to evidence",
    "Marks come from selection, not from length.",
    P("Four moves in a reading answer", [
      { title: "Question", text: "Identify the operator and the focus.", via: "scan" },
      { title: "Locate", text: "Find the lines that carry the answer.", via: "select" },
      { title: "Quote", text: "A few words, not whole sentences.", via: "explain" },
      { title: "Explain", text: "State what the wording does.", accent: true }],
      "Copying long stretches signals that the relevant part has not been identified."));

  set("en-speaking", "What the oral exam rewards",
    "Fluency and interaction weigh as much as accuracy.",
    B("Typical weighting in the oral exam", "Prozent", "Kriterium",
      [["Inhalt", 30], ["Interaktion", 25], ["Flüssigkeit", 25], ["Korrektheit", 20]], "Interaktion",
      "Silence costs more than a small grammatical error. Keep talking and self-correct.", 40));

  set("en-literature", "Comparing three works",
    "The comparison needs one shared question, not three summaries.",
    P("Building a comparative answer", [
      { title: "Question", text: "One theme all three works address.", via: "per work" },
      { title: "Evidence", text: "One precise moment from each.", via: "contrast" },
      { title: "Difference", text: "How the treatment differs and why.", via: "conclude" },
      { title: "Argument", text: "What the contrast shows about the theme.", accent: true }],
      "Plot summary of three novels is the most common way to lose marks."));

  set("en-exam-strategy", "Dividing three hours",
    "Planning and checking are part of the writing time.",
    B("Suggested time split for the written exam", "Minuten", "Aufgabenteil",
      [["Reading", 45], ["Language", 30], ["Planning", 20], ["Writing", 70], ["Checking", 15]], "Checking",
      "The last fifteen minutes recover more marks than fifteen more minutes of writing.", 85));

  M.vizRebuilt3 = n;
})();

/* Parametertabellen, dritte und letzte Runde.
   Damit hat jede der 96 Formelkarten eine vollständige Erklärung
   ihrer Grössen mit Einheit, Bedeutung und Wirkung. */
(function () {
  "use strict";
  var M = window.MNEMIKA;
  var byId = {};
  M.chapters.forEach(function (c) { (c.models || []).forEach(function (m) { if (m.id) byId[m.id] = m; }); });
  function P(id, params, unitCheck, rearrange) {
    var m = byId[id]; if (!m) return;
    m.params = params.map(function (p) { return { sym: p[0], name: p[1], unit: p[2], means: p[3], effect: p[4] }; });
    if (unitCheck) m.unitCheck = unitCheck;
    if (rearrange) m.rearrange = rearrange;
  }

  /* ====================== MATHEMATIK ====================== */
  P("distributive", [
    ["a", "gemeinsamer Faktor", "", "Die Zahl oder der Term vor der Klammer.", "Wirkt auf jeden Summanden, nicht nur auf den ersten. Das ist der häufigste Fehler."],
    ["b, c", "Summanden in der Klammer", "", "Die Teile der Summe, die vervielfacht werden.", "Ihr Vorzeichen wandert mit. Bei −2(x − 5) wird die −5 zu +10."],
  ], "Alles reine Zahlen. Kontrolle: eine Zahl einsetzen und beide Formen vergleichen.",
     "a(b + c) = ab + ac. Rückwärts gelesen ist es das Ausklammern, die Grundlage jedes Kürzens.");

  P("inequality-sign", [
    ["<, >", "Vergleichszeichen", "", "Sagt, welche Seite grösser ist.", "Dreht sich bei Multiplikation oder Division mit einer negativen Zahl."],
    ["negativer Faktor", "Spiegelung an der Null", "", "Kehrt die Reihenfolge auf der Zahlengeraden um.", "Aus 2 < 5 wird −2 > −5. Beim Addieren passiert das nicht."],
  ], "Keine Einheiten. Kontrolle: eine konkrete Zahl der Lösungsmenge einsetzen und prüfen, ob die Ungleichung stimmt.",
     "a < b ⇒ −a > −b. Beim Addieren und Subtrahieren bleibt das Zeichen unverändert.");

  P("discriminant", [
    ["D", "Diskriminante", "", "Der Wert unter der Wurzel der Lösungsformel.", "D > 0 zwei Lösungen, D = 0 eine doppelte, D < 0 keine reelle."],
    ["b²", "Quadrat des x-Koeffizienten", "", "Immer positiv, unabhängig vom Vorzeichen von b.", "Bei b = −5 ist b² = +25, nicht −25."],
    ["4ac", "Produktterm", "", "Verbindet Öffnung und y-Achsenabschnitt.", "Haben a und c gleiche Vorzeichen, wird D kleiner und reelle Lösungen seltener."],
  ], "Alle Terme reine Zahlen. Kontrolle über Vieta: x₁·x₂ = c/a.",
     "D = b² − 4ac. Bei D ≥ 0 anschliessend x = (−b ± √D)/(2a).");

  P("elimination", [
    ["m, n", "Multiplikatoren", "", "Faktoren, mit denen die Gleichungen skaliert werden.", "So gewählt, dass die Koeffizienten einer Variablen gleich gross werden."],
    ["I, II", "die beiden Gleichungen", "", "Beide müssen gleichzeitig gelten.", "Jede Linearkombination wahrer Gleichungen ist wieder wahr. Darauf beruht das Verfahren."],
  ], "Keine Einheiten im Mathematikteil. In Sachaufgaben müssen alle Gleichungen dieselbe Einheit verwenden.",
     "I·m ± II·n so, dass eine Variable wegfällt. Danach rückeinsetzen und in beiden Gleichungen prüfen.");

  P("vertex-form", [
    ["a", "Streckfaktor", "", "Bestimmt Öffnungsrichtung und Breite der Parabel.", "a > 0 nach oben offen, a < 0 nach unten. Grosses |a| macht sie schmal."],
    ["d", "Verschiebung in x", "", "Die x-Koordinate des Scheitels.", "Vorzeichen umgekehrt lesen: (x − 4)² gehört zu d = +4."],
    ["e", "Verschiebung in y", "", "Die y-Koordinate des Scheitels.", "Verschiebt die ganze Parabel und entscheidet damit über die Anzahl Nullstellen."],
  ], "Keine Einheiten. Kontrolle: x = d einsetzen muss e ergeben.",
     "f(x) = a(x − d)² + e mit S(d|e). Aus der allgemeinen Form: d = −b/(2a), e = f(d).");

  P("log-definition", [
    ["b", "Basis", "", "Die Zahl, die potenziert wird.", "Muss positiv und ungleich 1 sein, sonst ist der Logarithmus nicht definiert."],
    ["y", "Argument", "", "Der Wert, der erreicht werden soll.", "Muss echt positiv sein. Keine Potenz einer positiven Basis ergibt null oder negativ."],
    ["x", "gesuchter Exponent", "", "Die Antwort auf die Frage, wie oft b multipliziert werden muss.", "Bei y < 1 ist x negativ. Das ist korrekt, nicht ein Fehler."],
  ], "Der Logarithmus ist einheitenlos, weil er ein Exponent ist. Kontrolle: bˣ zurückrechnen muss y ergeben.",
     "log_b(y) = x ⟺ bˣ = y. Mit dem Rechner: x = ln(y)/ln(b).");

  P("limit-rational", [
    ["n", "Grad des Zählers", "", "Höchster Exponent oben.", "Ist n grösser als m, wächst der Bruch unbegrenzt."],
    ["m", "Grad des Nenners", "", "Höchster Exponent unten.", "Ist m grösser als n, strebt der Bruch gegen null."],
    ["aₙ, bₘ", "Leitkoeffizienten", "", "Die Faktoren vor den höchsten Potenzen.", "Bei n = m ist ihr Quotient der Grenzwert und damit die waagrechte Asymptote."],
  ], "Keine Einheiten. Kontrolle: eine sehr grosse Zahl einsetzen, etwa x = 10'000, und mit dem Grenzwert vergleichen.",
     "Zähler und Nenner durch die höchste Potenz teilen, dann jeden Term c/xᵏ gegen null gehen lassen.");

  P("continuity", [
    ["x₀", "untersuchte Stelle", "", "Der Punkt, an dem geprüft wird.", "Nur dort gilt die Aussage. Anderswo muss separat geprüft werden."],
    ["lim von links", "linksseitiger Grenzwert", "", "Annäherung mit x < x₀.", "Bei stückweise definierten Funktionen gilt hier die untere Teilfunktion."],
    ["lim von rechts", "rechtsseitiger Grenzwert", "", "Annäherung mit x > x₀.", "Weicht er vom linken ab, liegt ein Sprung vor."],
    ["f(x₀)", "Funktionswert", "", "Der tatsächlich angenommene Wert.", "Fehlt er, ist die Lücke höchstens hebbar, aber nicht stetig."],
  ], "Alle vier Grössen in derselben Einheit wie y. Alle drei Werte müssen übereinstimmen.",
     "Stetig bei x₀ ⟺ linker Grenzwert = rechter Grenzwert = f(x₀).");

  P("product-quotient", [
    ["u, v", "die beiden Teilfunktionen", "", "Faktoren beim Produkt, Zähler und Nenner beim Quotienten.", "Beide ändern sich, deshalb tragen beide zum Ergebnis bei."],
    ["u′v + uv′", "Produktregel", "", "Zwei Summanden, je einer pro geändertem Faktor.", "Niemals faktorweise ableiten. (uv)′ ist nicht u′v′."],
    ["(u′v − uv′)/v²", "Quotientenregel", "", "Die Reihenfolge im Zähler entscheidet über das Vorzeichen.", "v² im Nenner, und v darf nicht null werden."],
  ], "Die Ableitung trägt die Einheit y pro x. Kontrolle: einen einfachen Fall wie u = x, v = x nachrechnen.",
     "(uv)′ = u′v + uv′ · (u/v)′ = (u′v − uv′)/v²");

  P("stationary", [
    ["f′(x) = 0", "notwendige Bedingung", "", "Waagrechte Tangente, also ein Kandidat für ein Extremum.", "Nur ein Kandidat: bei x³ gilt f′(0) = 0 ohne Extremum."],
    ["x₀", "Kandidatenstelle", "", "Die Lösung von f′(x) = 0.", "Jede Lösung muss einzeln auf ihre Art geprüft werden."],
    ["Rand", "Intervallgrenzen", "", "Bei beschränktem Definitionsbereich zusätzlich zu prüfen.", "Das globale Maximum kann am Rand liegen, wo f′ nicht null ist."],
  ], "Im Sachzusammenhang trägt f′ eine Einheit. Ist sie null, ändert sich die Grösse momentan nicht.",
     "f′(x) = 0 lösen, dann Art über f″ oder Vorzeichenwechsel bestimmen, dann f(x₀) berechnen.");

  P("second-derivative", [
    ["f″(x₀)", "zweite Ableitung an der Stelle", "", "Misst die Krümmung, also wie sich die Steigung ändert.", "Positiv heisst Tiefpunkt, negativ Hochpunkt, null bedeutet Test versagt."],
    ["f′(x₀) = 0", "Voraussetzung", "", "Der Test gilt nur bei waagrechter Tangente.", "Ohne diese Bedingung sagt f″ nichts über Extrema, nur über Krümmung."],
  ], "f″ trägt die Einheit y pro x im Quadrat. Bei Weg und Zeit ist das die Beschleunigung.",
     "f′(x₀) = 0 und f″(x₀) > 0 ⇒ Tiefpunkt. Bei f″(x₀) = 0 Vorzeichenwechsel von f′ prüfen.");

  P("tangent", [
    ["x₀", "Berührstelle", "", "Wo die Tangente den Graphen berührt.", "Muss im Definitionsbereich liegen und die Funktion dort differenzierbar sein."],
    ["f(x₀)", "y-Wert des Berührpunkts", "", "Die Höhe, auf der die Tangente ansetzt.", "Aus der Ausgangsfunktion, nicht aus der Ableitung."],
    ["f′(x₀)", "Tangentensteigung", "", "Die Steigung der Geraden.", "Ist sie null, verläuft die Tangente waagrecht."],
  ], "Im Sachzusammenhang beschreibt die Tangente die lineare Näherung. Ihre Steigung trägt die Einheit y pro x.",
     "y = f′(x₀)(x − x₀) + f(x₀). Kontrolle: x = x₀ einsetzen muss f(x₀) ergeben.");

  P("antiderivative", [
    ["F", "Stammfunktion", "", "Funktion, deren Ableitung f ist.", "Es gibt unendlich viele, sie unterscheiden sich nur um eine Konstante."],
    ["f", "Integrand", "", "Die Funktion, die integriert wird.", "Sie ist die Ableitung von F. Das ist die Definition."],
    ["C", "Integrationskonstante", "", "Beliebige additive Konstante.", "Beim bestimmten Integral fällt sie weg, beim unbestimmten muss sie stehen."],
  ], "Das Integral trägt die Einheit y mal x. Bei Geschwindigkeit über Zeit ergibt das einen Weg.",
     "F′ = f. Probe durch Ableiten kostet Sekunden und deckt jeden Fehler auf.");

  P("power-integral", [
    ["n", "Exponent", "", "Der Exponent im Integranden.", "n = −1 ist ausgeschlossen, dort ist die Stammfunktion der Logarithmus."],
    ["n + 1", "neuer Exponent", "", "Steigt beim Integrieren um eins.", "Beim Ableiten würde er wieder sinken, deshalb ist die Regel die Umkehrung."],
    ["1/(n+1)", "Vorfaktor", "", "Hebt den Faktor auf, der beim Ableiten entstehen würde.", "Wird n + 1 null, ist die Division verboten. Genau das ist der Sonderfall n = −1."],
  ], "Kontrolle über Ableiten: aus xⁿ⁺¹/(n+1) wird wieder xⁿ.",
     "∫xⁿ dx = xⁿ⁺¹/(n+1) + C, für n ≠ −1. Für n = −1: ∫dx/x = ln|x| + C.");

  P("fundamental-theorem", [
    ["F", "Stammfunktion", "", "Muss F′ = f erfüllen.", "Welche Stammfunktion man wählt, ist gleichgültig, weil C sich weghebt."],
    ["a, b", "Integrationsgrenzen", "", "Anfang und Ende des Intervalls.", "Vertauschen dreht das Vorzeichen des Integrals."],
    ["F(b) − F(a)", "bestimmtes Integral", "", "Eine Zahl mit Vorzeichen, nicht zwingend die Fläche.", "Kurvenanteile unter der x-Achse zählen negativ."],
  ], "Das Ergebnis trägt die Einheit y mal x. Bei m/s über s ergibt das Meter.",
     "∫ₐᵇ f(x) dx = F(b) − F(a). Für die geometrische Fläche an den Nullstellen aufteilen und Beträge addieren.");

  P("trig-ratios", [
    ["α", "betrachteter Winkel", "Grad oder rad", "Der Winkel, auf den sich Gegen- und Ankathete beziehen.", "Wechselt man den Winkel, tauschen Gegen- und Ankathete die Rollen."],
    ["Gegenkathete", "Seite gegenüber α", "Länge", "Liegt dem Winkel gegenüber.", "Steht im Zähler bei Sinus und Tangens."],
    ["Ankathete", "Seite an α", "Länge", "Liegt am Winkel an, ist aber nicht die Hypotenuse.", "Steht im Zähler bei Cosinus, im Nenner bei Tangens."],
    ["Hypotenuse", "längste Seite", "Länge", "Liegt gegenüber dem rechten Winkel, unabhängig von α.", "Immer die längste Seite. Ein Verhältnis mit ihr liegt stets zwischen 0 und 1."],
  ], "Verhältnisse gleicher Einheiten sind einheitenlos. Sinus und Cosinus liegen immer zwischen −1 und 1, ein grösserer Wert ist ein Fehler.",
     "sin α = Gegen/Hypo · cos α = An/Hypo · tan α = Gegen/An = sin α / cos α");

  P("unit-circle", [
    ["r = 1", "Radius", "", "Der Einheitsradius vereinfacht die Verhältnisse zu Koordinaten.", "Bei anderem Radius müsste jeweils durch r geteilt werden."],
    ["cos α", "x-Koordinate", "", "Waagrechte Lage des Punktes auf dem Kreis.", "Bei 0 Grad gleich 1, bei 90 Grad gleich 0, bei 180 Grad gleich −1."],
    ["sin α", "y-Koordinate", "", "Senkrechte Lage des Punktes.", "Bei 0 Grad gleich 0, bei 90 Grad gleich 1. Um 90 Grad zum Cosinus verschoben."],
  ], "Beide Koordinaten einheitenlos und immer zwischen −1 und 1. Kontrolle über sin² + cos² = 1.",
     "P(α) = (cos α, sin α). Bogenmass: 180 Grad entsprechen π.");

  P("trig-identity", [
    ["sin²α", "Quadrat des Sinus", "", "Das Quadrat der y-Koordinate.", "Nie negativ, auch wenn der Sinus selbst negativ ist."],
    ["cos²α", "Quadrat des Cosinus", "", "Das Quadrat der x-Koordinate.", "Ergänzt sich mit sin²α immer genau auf 1."],
  ], "Einheitenlos. Kontrolle mit 30 Grad: 0,5² + 0,866² = 0,25 + 0,75 = 1.",
     "sin²α + cos²α = 1 ⇒ sin α = ±√(1 − cos²α). Das Vorzeichen folgt aus dem Quadranten.");

  P("vector-length", [
    ["|v|", "Betrag", "Länge", "Die Länge des Vektors.", "Nie negativ. Null nur beim Nullvektor."],
    ["v₁, v₂, v₃", "Komponenten", "Länge", "Die Änderung je Koordinatenrichtung.", "Ihr Vorzeichen ist für die Länge belanglos, weil sie quadriert werden."],
  ], "Alle Komponenten in derselben Längeneinheit, dann ist auch der Betrag in dieser Einheit.",
     "|v| = √(v₁² + v₂² + v₃²). Normieren: v/|v| ergibt Länge 1.");

  P("dot-product", [
    ["u·v", "Skalarprodukt", "", "Eine Zahl, kein Vektor.", "Null bedeutet senkrecht, positiv spitzer Winkel, negativ stumpfer Winkel."],
    ["|u|, |v|", "Längen", "Länge", "Die Beträge der beiden Vektoren.", "Nötig für die Winkelberechnung, weil nur normierte Richtungen vergleichbar sind."],
    ["φ", "Zwischenwinkel", "Grad", "Der Winkel zwischen den beiden Vektoren.", "Bei 90 Grad ist cos φ = 0 und damit das ganze Produkt null."],
  ], "Bei Kraft und Weg ergibt das Skalarprodukt Arbeit in Joule. Das ist kein Zufall, sondern dieselbe Struktur.",
     "u·v = u₁v₁ + u₂v₂ + u₃v₃ = |u||v|cos φ ⇒ cos φ = (u·v)/(|u||v|)");

  P("cross-product", [
    ["u×v", "Vektorprodukt", "", "Ein Vektor, senkrecht auf u und v.", "Reihenfolge vertauschen dreht die Richtung: v×u = −(u×v)."],
    ["|u×v|", "Betrag", "Fläche", "Die Fläche des aufgespannten Parallelogramms.", "Sind u und v parallel, ist die Fläche und damit das Produkt null."],
  ], "Bei Längen in Metern ist der Betrag eine Fläche in Quadratmetern. Probe: (u×v)·u muss null sein.",
     "u×v = (u₂v₃−u₃v₂, u₃v₁−u₁v₃, u₁v₂−u₂v₁). Dreiecksfläche: halber Betrag.");

  P("line-vector", [
    ["a", "Stützvektor", "Länge", "Ein bekannter Punkt auf der Geraden.", "Jeder Punkt der Geraden taugt. Deshalb hat dieselbe Gerade viele Darstellungen."],
    ["u", "Richtungsvektor", "Länge", "Die Richtung, in die die Gerade verläuft.", "Jedes Vielfache beschreibt dieselbe Gerade. Der Nullvektor ist nicht erlaubt."],
    ["t", "Parameter", "", "Wie weit man vom Stützpunkt in Richtung u geht.", "Durchläuft alle reellen Zahlen und erzeugt so die ganze Gerade."],
  ], "Stütz- und Richtungsvektor in derselben Längeneinheit. t ist einheitenlos.",
     "g: r = a + t·u. Punktprobe: Gleichung komponentenweise lösen, alle t müssen gleich sein.");

  P("plane-normal", [
    ["n", "Normalenvektor", "", "Steht senkrecht auf der ganzen Ebene.", "In der Koordinatenform sind seine Komponenten direkt die Koeffizienten von x, y, z."],
    ["a", "Stützvektor", "Länge", "Ein bekannter Punkt der Ebene.", "Ohne ihn wäre nur die Richtung der Ebene festgelegt, nicht ihre Lage."],
    ["r", "beliebiger Punkt", "Länge", "Der zu prüfende Punkt.", "Liegt er in der Ebene, ist n·(r − a) genau null."],
  ], "Das Skalarprodukt ergibt eine Zahl. Null bedeutet: der Punkt liegt in der Ebene.",
     "E: n·(r − a) = 0 ⇒ ax + by + cz = d mit n = (a,b,c).");

  P("point-plane-distance", [
    ["d", "Abstand", "Länge", "Kürzeste Entfernung von Punkt zu Ebene.", "Nie negativ. Null bedeutet, der Punkt liegt in der Ebene."],
    ["(x₀,y₀,z₀)", "Punktkoordinaten", "Länge", "Der Punkt, dessen Abstand gesucht ist.", "Einsetzen liefert einen Wert mit Vorzeichen, das die Seite angibt."],
    ["√(a²+b²+c²)", "Länge der Normale", "", "Normiert das Ergebnis.", "Ohne diesen Nenner hinge der Abstand von der willkürlichen Länge von n ab."],
  ], "Zähler und Nenner in passenden Einheiten, das Ergebnis ist eine Länge. Der Nenner wird am häufigsten vergessen.",
     "d = |ax₀+by₀+cz₀−d₀| / √(a²+b²+c²)");

  P("conditional", [
    ["P(A|B)", "bedingte Wahrscheinlichkeit", "", "Wahrscheinlichkeit von A, wenn B schon eingetreten ist.", "Kann deutlich grösser oder kleiner als P(A) sein. Nur bei Unabhängigkeit gleich."],
    ["P(A∩B)", "Schnitt", "", "Beide Ereignisse treten ein.", "Steht im Zähler, denn nur diese Fälle sind günstig."],
    ["P(B)", "Bedingung", "", "Der neue, verkleinerte Grundraum.", "Muss grösser als null sein, sonst ist die Bedingung unmöglich."],
  ], "Alle Werte liegen zwischen 0 und 1 und sind einheitenlos. Ein Ergebnis über 1 ist immer ein Fehler.",
     "P(A|B) = P(A∩B)/P(B) ⇒ P(A∩B) = P(B)·P(A|B)");

  P("product-rule", [
    ["P(A∩B)", "Pfadwahrscheinlichkeit", "", "Beide Ereignisse treten nacheinander ein.", "Entlang eines Pfades im Baumdiagramm multiplizieren."],
    ["P(A)", "erste Stufe", "", "Wahrscheinlichkeit des ersten Schritts.", "Bei Ziehen ohne Zurücklegen ändert sie die zweite Stufe."],
    ["P(B|A)", "zweite Stufe", "", "Wahrscheinlichkeit für B, nachdem A eingetreten ist.", "Bei Unabhängigkeit gleich P(B), sonst nicht."],
  ], "Produkt zweier Zahlen zwischen 0 und 1 ist wieder zwischen 0 und 1 und stets kleiner als jeder Faktor.",
     "P(A∩B) = P(A)·P(B|A). Bei Unabhängigkeit: P(A)·P(B).");

  P("union", [
    ["P(A∪B)", "Oder-Verknüpfung", "", "Mindestens eines der Ereignisse tritt ein.", "Immer grösser oder gleich dem grösseren Einzelwert."],
    ["P(A), P(B)", "Einzelwahrscheinlichkeiten", "", "Die beiden Ereignisse für sich.", "Einfaches Addieren zählt den Überlappungsbereich doppelt."],
    ["P(A∩B)", "Überlappung", "", "Die doppelt gezählten Fälle.", "Bei unvereinbaren Ereignissen null, dann darf einfach addiert werden."],
  ], "Alles einheitenlos zwischen 0 und 1. Ein Ergebnis über 1 zeigt, dass die Überlappung nicht abgezogen wurde.",
     "P(A∪B) = P(A) + P(B) − P(A∩B)");

  P("bayes", [
    ["P(A|B)", "gesuchte Richtung", "", "Wahrscheinlichkeit der Ursache, wenn die Wirkung beobachtet wurde.", "Weicht oft dramatisch von P(B|A) ab. Diese Verwechslung ist der klassische Fehler."],
    ["P(B|A)", "bekannte Richtung", "", "Meist die gemessene Trefferquote eines Tests.", "Ein Test mit 99 Prozent Trefferquote ergibt bei seltenen Krankheiten trotzdem viele falsche Alarme."],
    ["P(A)", "Vorwahrscheinlichkeit", "", "Wie häufig die Ursache überhaupt ist.", "Je seltener A, desto kleiner P(A|B), egal wie gut der Test ist."],
    ["P(B)", "Gesamtwahrscheinlichkeit der Wirkung", "", "Alle Wege, auf denen B eintreten kann.", "Muss über alle Ursachen aufsummiert werden, sonst ist der Nenner falsch."],
  ], "Einheitenlos. Kontrolle: P(A|B) und P(A|nicht B) müssen zusammen mit den Gewichten wieder P(A) ergeben.",
     "P(A|B) = P(B|A)·P(A) / P(B)");

  /* ====================== PHYSIK ====================== */
  P("velocity-position", [
    ["v", "Endgeschwindigkeit", "m/s", "Das Tempo nach der Beschleunigungsstrecke.", "Steht im Quadrat, deshalb wächst der Bremsweg quadratisch mit dem Tempo."],
    ["v₀", "Anfangsgeschwindigkeit", "m/s", "Das Tempo am Anfang.", "Beim Bremsen ist v am Ende null und v₀ der Ausgangswert."],
    ["a", "Beschleunigung", "m/s²", "Positiv beim Beschleunigen, negativ beim Bremsen.", "Doppelte Bremsverzögerung halbiert den Bremsweg."],
    ["Δs", "Weg", "m", "Die Strecke während der Änderung.", "Diese Formel braucht keine Zeit, deshalb ist sie bei Bremswegaufgaben die erste Wahl."],
  ], "(m/s)² = m/s² · m. Beide Seiten ergeben m²/s². Die Einheiten bestätigen die Formel.",
     "v² = v₀² + 2aΔs ⇒ Δs = (v² − v₀²)/(2a). Bremsweg aus v₀ bis Stillstand: Δs = v₀²/(2|a|).");

  P("highest-point", [
    ["t_H", "Steigzeit", "s", "Zeit bis zum höchsten Punkt.", "Ohne Luftwiderstand genau gleich lang wie die Fallzeit zurück."],
    ["v₀", "Abwurfgeschwindigkeit", "m/s", "Anfangstempo nach oben.", "Doppelte Abwurfgeschwindigkeit bedeutet doppelte Steigzeit, aber vierfache Höhe."],
    ["Δh", "Steighöhe", "m", "Erreichter Höhengewinn.", "Steigt quadratisch mit v₀, weil die Energie quadratisch eingeht."],
    ["g", "Fallbeschleunigung", "m/s²", "Bremst beim Steigen, beschleunigt beim Fallen.", "Im höchsten Punkt ist v null, g wirkt aber unverändert weiter."],
  ], "v₀²/(2g): (m/s)²/(m/s²) = m. Ergibt korrekt eine Höhe.",
     "t_H = v₀/g · Δh = v₀²/(2g). Gesamtflugzeit: 2·t_H.");

  P("density", [
    ["ρ", "Dichte", "kg/m³", "Masse pro Volumen, eine Stoffeigenschaft.", "Unabhängig von der Probengrösse. Wasser 1000, Eisen 7870, Luft rund 1,2."],
    ["m", "Masse", "kg", "Die gewogene Masse.", "Doppelte Masse bei doppeltem Volumen ergibt dieselbe Dichte."],
    ["V", "Volumen", "m³", "Der eingenommene Raum.", "Bei unregelmässigen Körpern über die Wasserverdrängung bestimmbar."],
  ], "kg/m³. Achtung: 1 g/cm³ entspricht 1000 kg/m³. Diese Umrechnung wird am häufigsten falsch gemacht.",
     "ρ = m/V ⇒ m = ρ·V ⇒ V = m/ρ. Schwimmen, wenn ρ_Körper < ρ_Flüssigkeit.");

  P("static-equilibrium", [
    ["ΣF = 0", "Kräftebilanz", "N", "Die Summe aller Kräfte verschwindet.", "Sonst würde sich der Körper verschieben. Komponentenweise prüfen, nicht als Beträge."],
    ["ΣM = 0", "Momentenbilanz", "N·m", "Die Summe aller Drehmomente verschwindet.", "Sonst würde er rotieren, auch wenn er am Ort bleibt."],
    ["Drehpunkt", "Bezugspunkt", "", "Frei wählbar für die Momentenbilanz.", "Klug gewählt eliminiert er eine unbekannte Kraft und verkürzt die Rechnung erheblich."],
  ], "Kräfte in Newton, Momente in Newtonmeter. Die beiden Bilanzen dürfen nie vermischt werden.",
     "ΣFx = 0, ΣFy = 0, ΣM = 0. Drei Gleichungen erlauben höchstens drei Unbekannte.");

  P("energy-conservation", [
    ["E_ges", "Gesamtenergie", "J", "Summe aller Energieformen im System.", "Bleibt konstant, solange nichts nach aussen abgegeben wird."],
    ["E_pot", "Lageenergie", "J", "Energie durch die Höhe.", "Wandelt sich beim Fallen vollständig in Bewegungsenergie um."],
    ["E_kin", "Bewegungsenergie", "J", "Energie der Bewegung.", "Quadratisch in v, deshalb ist die Geschwindigkeit die entscheidende Grösse."],
    ["W_R", "Reibungsarbeit", "J", "Der in Wärme entwertete Anteil.", "Gehört auf die Endseite der Bilanz, nicht in den Verlust."],
  ], "Alle Terme in Joule. Nur gleiche Einheiten dürfen addiert werden, deshalb ist die Probe hier besonders wirksam.",
     "E_pot + E_kin = konstant. Mit Reibung: E_Anfang = E_Ende + W_R.");

  P("kelvin", [
    ["T", "absolute Temperatur", "K", "Gemessen ab dem absoluten Nullpunkt.", "Nie negativ. Ein negativer Kelvinwert ist immer ein Rechenfehler."],
    ["θ", "Celsius-Temperatur", "°C", "Gemessen ab dem Gefrierpunkt von Wasser.", "Kann negativ sein, das ist normal."],
    ["273,15", "Nullpunktverschiebung", "K", "Der Abstand der beiden Nullpunkte.", "Nur bei Absolutwerten addieren. Bei Differenzen niemals."],
  ], "Beide Skalen haben dieselbe Schrittweite. Eine Differenz von 20 °C ist genau 20 K, nicht 293 K.",
     "T = θ + 273,15 ⇒ θ = T − 273,15. Für ΔT gilt: ΔT in K = Δθ in °C.");

  P("linear-expansion", [
    ["ΔL", "Längenänderung", "m", "Die Zunahme oder Abnahme der Länge.", "Nicht die Endlänge. Diese Verwechslung ist der häufigste Fehler."],
    ["α", "Längenausdehnungskoeffizient", "1/K", "Materialkennwert, sehr klein.", "Stahl rund 12·10⁻⁶, Aluminium 23·10⁻⁶. Deshalb verziehen sich Verbundbauteile."],
    ["L₀", "Ausgangslänge", "m", "Die Länge vor der Erwärmung.", "Ein langer Stab dehnt sich absolut stärker aus, relativ gleich stark."],
    ["ΔT", "Temperaturänderung", "K", "Um wie viel es wärmer wird.", "Negativ beim Abkühlen, dann schrumpft das Material."],
  ], "1/K · m · K = m. Die Einheiten gehen auf und liefern korrekt eine Länge.",
     "ΔL = α·L₀·ΔT ⇒ L = L₀ + ΔL. Für Flächen etwa 2α, für Volumen etwa 3α.");

  P("first-law", [
    ["ΔU", "Änderung der inneren Energie", "J", "Was im System an Energie mehr oder weniger steckt.", "Steigt bei Wärmezufuhr oder Arbeit am System."],
    ["Q", "zugeführte Wärme", "J", "Energie, die wegen eines Temperaturunterschieds fliesst.", "Positiv bei Zufuhr, negativ bei Abgabe."],
    ["W", "am System verrichtete Arbeit", "J", "Etwa Kompression eines Gases.", "Positiv, wenn am System gearbeitet wird, negativ, wenn es selbst Arbeit verrichtet."],
  ], "Alles in Joule. Ohne festgelegte Vorzeichenkonvention widersprechen sich Lösungen scheinbar.",
     "ΔU = Q + W. Bei isothermer Zustandsänderung ist ΔU null, also Q = −W.");

  P("ideal-gas", [
    ["p", "Druck", "Pa", "Druck des Gases im Behälter.", "Bei konstantem Volumen steigt er proportional zur absoluten Temperatur."],
    ["V", "Volumen", "m³", "Der Raum, den das Gas einnimmt.", "Bei konstanter Temperatur umgekehrt proportional zum Druck."],
    ["T", "absolute Temperatur", "K", "Zwingend in Kelvin, nicht in Celsius.", "Mit Celsius gerechnet ergeben sich völlig falsche Verhältnisse."],
    ["n, R", "Stoffmenge und Gaskonstante", "mol, J/(mol·K)", "Im abgeschlossenen Behälter konstant.", "Nur deshalb darf pV/T als unveränderlich behandelt werden."],
  ], "Pa·m³ = J. Kontrolle: bei Verdoppelung von T und konstantem V muss p sich verdoppeln.",
     "pV = nRT ⇒ p₁V₁/T₁ = p₂V₂/T₂. T immer in Kelvin.");

  P("voltage", [
    ["U", "Spannung", "V", "Energie je transportierte Ladung.", "Doppelte Spannung gibt jeder Ladung doppelt so viel Energie mit."],
    ["ΔE", "übertragene Energie", "J", "Die insgesamt umgesetzte Energie.", "Hängt zusätzlich von der Ladungsmenge ab, nicht nur von der Spannung."],
    ["Q", "Ladung", "C", "Die transportierte Ladungsmenge.", "Bei gleicher Energie und doppelter Ladung halbiert sich die Spannung."],
  ], "1 V = 1 J/C. Eine 9-Volt-Batterie gibt jedem Coulomb 9 Joule mit.",
     "U = ΔE/Q ⇒ ΔE = U·Q = U·I·t");

  P("magnetic-force", [
    ["F", "Kraft auf den Leiter", "N", "Steht senkrecht auf Strom und Feld.", "Maximal bei 90 Grad zwischen Strom und Feld, null bei paralleler Lage."],
    ["B", "magnetische Flussdichte", "T", "Stärke des Magnetfeldes.", "Doppelte Feldstärke bedeutet doppelte Kraft."],
    ["I", "Stromstärke", "A", "Der Strom im Leiter.", "Doppelter Strom bedeutet doppelte Kraft. Darauf beruht die Motorsteuerung."],
    ["l", "Leiterlänge im Feld", "m", "Nur der Teil im Magnetfeld zählt.", "Eine Spule mit n Windungen wirkt wie n-fache Länge."],
    ["φ", "Winkel", "Grad", "Zwischen Stromrichtung und Feldrichtung.", "Bei 0 Grad ist sin φ null und es wirkt keine Kraft."],
  ], "T·A·m = N. Kontrolle: 1 T = 1 N/(A·m), das ist die Definition des Tesla.",
     "F = B·I·l·sin φ. Richtung über die Drei-Finger-Regel der rechten Hand.");

  P("reflection", [
    ["α", "Einfallswinkel", "Grad", "Zwischen einfallendem Strahl und dem Lot.", "Immer zum Lot gemessen, nie zur Oberfläche."],
    ["α′", "Reflexionswinkel", "Grad", "Zwischen ausfallendem Strahl und Lot.", "Immer genau gleich gross wie der Einfallswinkel."],
    ["Lot", "Flächennormale", "", "Senkrechte auf der Oberfläche im Auftreffpunkt.", "Bei gekrümmten Spiegeln ändert es die Richtung von Punkt zu Punkt."],
  ], "Winkel in Grad. Beide Winkel liegen zwischen 0 und 90 Grad, grössere Werte bedeuten falsch gemessen.",
     "α = α′, beide zum Lot. Bei rauen Flächen gilt es punktweise weiter, streut aber diffus.");

  /* ====================== CHEMIE ====================== */
  P("mass-number", [
    ["A", "Massenzahl", "", "Protonen plus Neutronen im Kern.", "Isotope desselben Elements unterscheiden sich genau in dieser Zahl."],
    ["Z", "Ordnungszahl", "", "Anzahl Protonen, definiert das Element.", "Ändert sich nur bei Kernreaktionen, nie in der Chemie."],
    ["N", "Neutronenzahl", "", "Anzahl Neutronen im Kern.", "Beeinflusst Masse und Stabilität, nicht das chemische Verhalten."],
  ], "Reine Anzahlen, keine Einheiten. Elektronen zählen nicht mit, weil ihre Masse verschwindend klein ist.",
     "A = Z + N ⇒ N = A − Z. Notation: ᴬ₍Z₎X, etwa ¹⁴₍6₎C.");

  P("ion-charge", [
    ["q", "Ionenladung", "e", "Überschuss oder Mangel an Elektronen.", "Positiv bei Elektronenabgabe, negativ bei Aufnahme."],
    ["Z", "Protonenzahl", "", "Fest durch das Element vorgegeben.", "Ändert sich bei der Ionenbildung nie."],
    ["nₑ", "Elektronenzahl", "", "Anzahl Elektronen in der Hülle.", "Weniger Elektronen als Protonen ergibt ein Kation, mehr ein Anion."],
  ], "Ladungen in Einheiten der Elementarladung. In einer Verbindung muss die Summe aller Ladungen null ergeben.",
     "q = (Z − nₑ)·e. Verhältnisformel: Ladungen müssen sich ausgleichen, etwa Mg²⁺ mit 2 Cl⁻.");

  P("avogadro", [
    ["N", "Teilchenzahl", "", "Die tatsächliche Anzahl Teilchen.", "Wird sehr schnell unhandlich, deshalb rechnet man in Mol."],
    ["n", "Stoffmenge", "mol", "Anzahl Pakete von je 6,022·10²³ Teilchen.", "Doppelte Stoffmenge bedeutet doppelt so viele Teilchen."],
    ["N_A", "Avogadro-Konstante", "1/mol", "6,022·10²³ Teilchen pro Mol.", "Eine Naturkonstante, kein gerundeter Praxiswert."],
  ], "mol · 1/mol ergibt eine reine Anzahl. Kontrolle: 1 mol muss 6,022·10²³ ergeben.",
     "N = n·N_A ⇒ n = N/N_A. Kombiniert mit n = m/M: N = m·N_A/M.");

  P("balance", [
    ["Koeffizient", "Zahl vor der Formel", "", "Wie viele Teilchen dieser Sorte reagieren.", "Das einzige, was angepasst werden darf."],
    ["Index", "Zahl in der Formel", "", "Wie viele Atome im Molekül stecken.", "Unantastbar. Ändert man ihn, wechselt man den Stoff."],
    ["Atombilanz", "Zählung je Element", "", "Links und rechts muss von jedem Element gleich viel stehen.", "Ein einzelnes übersehenes Element macht die ganze Gleichung falsch."],
  ], "Reine Anzahlen. Zusätzlich muss die Massenbilanz stimmen, was eine gute unabhängige Kontrolle ist.",
     "Reihenfolge: erst C, dann H, zuletzt O. Bei Ionengleichungen zusätzlich die Ladungsbilanz prüfen.");

  P("yield", [
    ["η", "Ausbeute", "%", "Anteil des theoretisch Möglichen, der tatsächlich entsteht.", "Praktisch immer unter 100 Prozent. Ein höherer Wert bedeutet einen Messfehler."],
    ["m_tats", "tatsächliche Menge", "g", "Das gewogene Produkt.", "Verluste entstehen durch Nebenreaktionen, Rückstände und unvollständigen Umsatz."],
    ["m_theo", "theoretische Menge", "g", "Aus dem limitierenden Edukt berechnet.", "Wird der limitierende Stoff falsch gewählt, ist die ganze Ausbeute falsch."],
  ], "Gramm geteilt durch Gramm ergibt eine reine Zahl, mal 100 Prozent.",
     "η = m_tats/m_theo · 100 %. Bei mehrstufigen Synthesen multiplizieren sich die Ausbeuten.");

  P("calorimetry", [
    ["Q", "Wärmemenge", "J", "Übertragene thermische Energie.", "Positiv bei Aufnahme, negativ bei Abgabe."],
    ["m", "Masse", "kg", "Die erwärmte Stoffmasse.", "Doppelte Masse braucht doppelte Energie."],
    ["c", "spezifische Wärmekapazität", "J/(kg·K)", "Energie je Kilogramm und Kelvin.", "Wasser 4180, damit fast zehnmal so träge wie Eisen."],
    ["ΔT", "Temperaturänderung", "K", "Differenz Ende minus Anfang.", "Vorzeichen entscheidet über Aufnahme oder Abgabe."],
  ], "kg · J/(kg·K) · K = J. In der Mischungsrechnung: abgegebene Wärme gleich aufgenommene.",
     "Q = m·c·ΔT ⇒ ΔT = Q/(m·c). Mischtemperatur: m₁c₁(T₁−T_M) = m₂c₂(T_M−T₂).");

  P("acid-base-reaction", [
    ["Säure", "Protonendonator", "", "Gibt ein H⁺ ab.", "Kann nur abgeben, wenn ein Akzeptor vorhanden ist."],
    ["Base", "Protonenakzeptor", "", "Nimmt ein H⁺ auf.", "Aus ihr wird dadurch die konjugierte Säure."],
    ["konjugiertes Paar", "Säure und ihre Base", "", "Unterscheiden sich um genau ein Proton.", "HCl und Cl⁻ bilden ein Paar, H₂O und OH⁻ ebenfalls."],
  ], "Zwei Kontrollen sind nötig: Atombilanz und Ladungsbilanz. Eine allein genügt nicht.",
     "HA + B ⇌ A⁻ + HB⁺. Amphotere Stoffe wie Wasser können beide Rollen übernehmen.");

  P("oxidation-number", [
    ["OZ", "Oxidationszahl", "", "Rechnerische Ladung eines Atoms in einer Verbindung.", "Steigt bei Oxidation, sinkt bei Reduktion."],
    ["Elemente", "reiner Zustand", "", "Oxidationszahl null.", "Gilt auch für O₂, H₂ und N₂, also für Elementmoleküle."],
    ["H, O", "Standardwerte", "", "Wasserstoff meist +I, Sauerstoff meist −II.", "Ausnahmen: Hydride mit H als −I, Peroxide mit O als −I."],
    ["Summenregel", "Ladungsbilanz", "", "Summe aller OZ ergibt die Gesamtladung.", "Damit lässt sich jede unbekannte Oxidationszahl ausrechnen."],
  ], "Reine Zahlen mit Vorzeichen, in römischen Ziffern notiert. Kontrolle über die Summenregel.",
     "In H₂SO₄: 2(+I) + x + 4(−II) = 0 ⇒ x = +VI.");

  P("cell-voltage", [
    ["E°_Zelle", "Standard-Zellspannung", "V", "Treibende Spannung der Gesamtreaktion.", "Positiv bedeutet, die Reaktion läuft freiwillig ab."],
    ["E°_Kathode", "Potential der Reduktion", "V", "Das höhere der beiden Standardpotentiale.", "Dort werden Elektronen aufgenommen."],
    ["E°_Anode", "Potential der Oxidation", "V", "Das niedrigere Standardpotential.", "Dort werden Elektronen abgegeben."],
  ], "Volt minus Volt ergibt Volt. Tabellenwerte gelten bei 25 °C und 1 mol/l.",
     "E°_Zelle = E°_Kathode − E°_Anode. Ein negativer Wert bedeutet: nur mit äusserer Spannung, also Elektrolyse.");

  P("alkane", [
    ["n", "Anzahl Kohlenstoffatome", "", "Länge der Kette.", "Bestimmt Siedepunkt und Aggregatzustand. Bis n = 4 gasförmig, dann flüssig."],
    ["2n + 2", "Anzahl Wasserstoffatome", "", "Folgt zwingend aus der Vierbindigkeit.", "Stimmt die Zahl nicht, ist die Verbindung nicht gesättigt oder die Formel falsch."],
  ], "Reine Anzahlen. Kontrolle: jeder Kohlenstoff muss genau vier Bindungen haben.",
     "Alkane CₙH₂ₙ₊₂ · Alkene CₙH₂ₙ · Alkine CₙH₂ₙ₋₂. Jede Doppelbindung kostet zwei Wasserstoffatome.");

  P("esterification", [
    ["COOH", "Carboxylgruppe", "", "Der Säureanteil.", "Gibt die OH-Gruppe ab, die mit dem H des Alkohols Wasser bildet."],
    ["OH", "Hydroxylgruppe", "", "Der Alkoholanteil.", "Gibt das Wasserstoffatom ab."],
    ["R−COO−R′", "Esterbindung", "", "Das Verbindungsstück im Produkt.", "Bestimmt Geruch und Eigenschaften. Ester riechen typisch fruchtig."],
    ["Gleichgewicht", "Hin- und Rückreaktion", "", "Die Reaktion läuft in beide Richtungen.", "Entzieht man Wasser, verschiebt sich das Gleichgewicht zum Ester."],
  ], "Die Atombilanz muss aufgehen: ein Wasser wird abgespalten, alle übrigen Atome bleiben.",
     "R−COOH + R′−OH ⇌ R−COO−R′ + H₂O. Rückreaktion mit Wasser heisst Hydrolyse.");

  P("iupac", [
    ["Suffix", "Endung", "", "Zeigt die Hauptfunktion an, etwa -ol oder -säure.", "Die Hauptfunktion hat Vorrang und bestimmt die Nummerierung."],
    ["Stamm", "Hauptkette", "", "Längste Kette, die die Hauptfunktion enthält.", "meth 1, eth 2, prop 3, but 4, pent 5, hex 6."],
    ["Position", "Nummer", "", "Wo Funktion oder Substituent sitzt.", "Richtung so wählen, dass die kleinste Zahl entsteht."],
    ["Präfix", "Substituenten", "", "Seitengruppen, alphabetisch geordnet.", "Mehrfach vorkommende mit di-, tri-, tetra- zusammengefasst."],
  ], "Keine Einheiten. Kontrolle: aus dem Namen die Struktur zeichnen und mit dem Original vergleichen.",
     "Präfix + Stamm + Suffix, etwa 2-Methylbutan-1-ol.");

  /* ====================== BIOLOGIE ====================== */
  P("michaelis-idea", [
    ["E", "Enzym", "", "Der biologische Katalysator.", "Wird nicht verbraucht und liegt am Ende wieder frei vor."],
    ["S", "Substrat", "", "Der Stoff, der umgesetzt wird.", "Mehr Substrat steigert die Rate nur bis zur Sättigung."],
    ["ES", "Enzym-Substrat-Komplex", "", "Das kurzlebige Zwischenprodukt.", "Nur in diesem Zustand ist die Aktivierungsenergie gesenkt."],
    ["P", "Produkt", "", "Das Ergebnis der Reaktion.", "Wird freigesetzt, danach ist das aktive Zentrum wieder verfügbar."],
  ], "Konzentrationen in mol/l, Raten in mol/(l·s). Bei Sättigung bleibt die Rate trotz mehr Substrat konstant.",
     "E + S ⇌ ES → E + P. Die Sättigungskurve steigt zuerst steil und läuft dann waagrecht.");

  P("respiration", [
    ["C₆H₁₂O₆", "Glucose", "", "Der Energieträger, der abgebaut wird.", "Ein Mol liefert etwa 2870 kJ, verteilt auf rund 30 ATP."],
    ["6 O₂", "Sauerstoff", "", "Letzter Elektronenakzeptor der Atmungskette.", "Fehlt er, bricht die Ausbeute auf zwei ATP ein, weil nur Gärung bleibt."],
    ["6 CO₂", "Kohlenstoffdioxid", "", "Der abgeatmete Kohlenstoff.", "Entsteht im Citratzyklus, nicht in der Lunge."],
    ["ATP", "Energieträger", "", "Die nutzbare Energiewährung der Zelle.", "Nur ATP kann die Zelle direkt verwenden, Glucose nicht."],
  ], "Atombilanz: links 6 C, 18 O, 12 H, rechts ebenso. Die Bilanz ist die Umkehrung der Photosynthese.",
     "C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + Energie. Drei Etappen: Glykolyse, Citratzyklus, Atmungskette.");

  P("mendel-probability", [
    ["P(A und B)", "gemeinsame Wahrscheinlichkeit", "", "Beide Merkmale treten zugleich auf.", "Nur bei ungekoppelten Genen durch Multiplikation berechenbar."],
    ["P(A), P(B)", "Einzelwahrscheinlichkeiten", "", "Je Merkmal aus der Spaltungsregel.", "Bei Aa × Aa ist P(aa) = 1/4."],
    ["Unabhängigkeit", "Voraussetzung", "", "Die Gene liegen auf verschiedenen Chromosomen.", "Bei Kopplung gilt die Regel nicht, dann verschieben sich die Verhältnisse."],
  ], "Alle Werte zwischen 0 und 1. Kontrolle: alle 16 Felder eines dihybriden Quadrats müssen zusammen 1 ergeben.",
     "P(A und B) = P(A)·P(B), etwa 1/4 · 1/4 = 1/16. Das ergibt das Verhältnis 9:3:3:1.");

  P("central-dogma", [
    ["DNA", "Erbinformation", "", "Der dauerhafte Speicher im Zellkern.", "Wird nur kopiert, nie direkt zur Proteinsynthese verwendet."],
    ["mRNA", "Arbeitskopie", "", "Transportiert die Information ins Zellplasma.", "Kurzlebig, deshalb lässt sich die Genaktivität schnell regulieren."],
    ["Codon", "Basentriplett", "", "Drei Basen codieren eine Aminosäure.", "4³ = 64 Kombinationen für 20 Aminosäuren, deshalb mehrdeutig und fehlertolerant."],
    ["Protein", "Aminosäurekette", "", "Das fertige Funktionsmolekül.", "Erst die räumliche Faltung erzeugt die Funktion."],
  ], "Keine Einheiten. Kontrolle: die Zahl der Basen im codierenden Abschnitt muss durch drei teilbar sein.",
     "DNA → (Transkription) → mRNA → (Translation) → Protein.");
})();

/* Fehler-Autopsie. Eine falsche Lösung wird vollständig gezeigt, der
   Fehler genau lokalisiert und danach richtig gerechnet. Das ist
   wirksamer als eine Warnung, weil der falsche Denkweg vertraut
   aussieht und deshalb wiedererkannt wird. */
(function () {
  "use strict";
  var M = window.MNEMIKA;
  var n = 0;
  function E(chapterId, a) {
    var c = M.chapter(chapterId);
    if (!c) return;
    (c.autopsy = c.autopsy || []).push(a);
    n += 1;
  }

  E("math-algebra", {
    task: "Löse 3x + 12 = 5x − 4.",
    wrong: ["3x + 12 = 5x − 4", "3x = 5x − 4 − 12", "3x = 5x − 16", "3x − 5x = −16", "−2x = −16", "x = −8"],
    wrongResult: "x = −8",
    where: "Schritt 6",
    diagnosis: "Bis Schritt 5 ist alles korrekt. Dann wird −16 durch −2 geteilt und das Ergebnis negativ notiert. Zwei negative Zahlen geteilt ergeben aber ein positives Resultat.",
    fix: ["−2x = −16", "beide Seiten durch −2 teilen", "x = (−16)/(−2) = +8"],
    right: "x = 8",
    lesson: "Mach immer die Probe. 3·8 + 12 = 36 und 5·8 − 4 = 36. Mit x = −8 käme links −12 und rechts −44 heraus, der Fehler wäre sofort aufgefallen.",
  });

  E("math-derivatives", {
    task: "Leite f(x) = (2x + 5)³ ab.",
    wrong: ["Potenzregel anwenden", "Exponent nach vorne: 3", "Exponent um eins senken", "f′(x) = 3(2x + 5)²"],
    wrongResult: "f′(x) = 3(2x + 5)²",
    where: "Schritt 4",
    diagnosis: "Die äussere Ableitung ist richtig gebildet, aber die innere fehlt. In der Klammer steht nicht x, sondern 2x + 5. Diese innere Funktion ändert sich doppelt so schnell wie x, und dieser Faktor muss mit.",
    fix: ["äussere Ableitung: 3(2x + 5)²", "innere Ableitung von 2x + 5: 2", "multiplizieren: 3(2x + 5)² · 2"],
    right: "f′(x) = 6(2x + 5)²",
    lesson: "Immer wenn in einer Klammer mehr steht als nur x, ist die Kettenregel im Spiel. Frage bei jeder Klammer: was ist die innere Ableitung?",
  });

  E("math-integrals", {
    task: "Berechne die Fläche zwischen f(x) = x³ und der x-Achse von −2 bis 2.",
    wrong: ["Stammfunktion: F(x) = x⁴/4", "F(2) = 16/4 = 4", "F(−2) = 16/4 = 4", "Integral: 4 − 4 = 0", "Fläche = 0"],
    wrongResult: "Fläche = 0",
    where: "Schritt 5",
    diagnosis: "Das Integral ist korrekt berechnet, aber die Frage war nach der geometrischen Fläche. Von −2 bis 0 liegt die Kurve unter der x-Achse, dieser Anteil zählt im Integral negativ und hebt den positiven Teil genau auf.",
    fix: ["An der Nullstelle x = 0 aufteilen", "∫ von −2 bis 0 = 0 − 4 = −4, Betrag also 4", "∫ von 0 bis 2 = 4 − 0 = 4", "Beträge addieren: 4 + 4"],
    right: "Fläche = 8",
    lesson: "Integral und Fläche sind nicht dasselbe. Sobald die Kurve die x-Achse schneidet, an den Nullstellen aufteilen und die Beträge addieren.",
  });

  E("math-probability", {
    task: "In einer Urne sind 4 rote und 6 blaue Kugeln. Wie gross ist die Wahrscheinlichkeit, zwei rote zu ziehen, ohne Zurücklegen?",
    wrong: ["P(erste rot) = 4/10", "P(zweite rot) = 4/10", "multiplizieren: 4/10 · 4/10", "P = 16/100 = 0,16"],
    wrongResult: "P = 0,16",
    where: "Schritt 2",
    diagnosis: "Es wird ohne Zurücklegen gezogen. Nach der ersten roten Kugel sind nur noch 3 rote von 9 Kugeln in der Urne. Die Rechnung behandelt den Versuch, als würde zurückgelegt.",
    fix: ["P(erste rot) = 4/10", "P(zweite rot | erste rot) = 3/9", "multiplizieren: 4/10 · 3/9 = 12/90"],
    right: "P = 12/90 ≈ 0,133",
    lesson: "Frage bei jeder Urnenaufgabe zuerst: verändert sich der Inhalt nach dem ersten Zug? Bei «ohne Zurücklegen» ändern sich Zähler und Nenner.",
  });

  E("phys-newton-forces", {
    task: "Ein Klotz von 5 kg liegt auf einer um 30 Grad geneigten Ebene. Wie gross ist die Normalkraft?",
    wrong: ["Gewichtskraft: F_G = m·g = 5 · 9,81 = 49,05 N", "Die Normalkraft ist gleich der Gewichtskraft", "F_N = 49,05 N"],
    wrongResult: "F_N = 49,05 N",
    where: "Schritt 2",
    diagnosis: "Auf einer waagrechten Fläche wären beide gleich. Auf der schiefen Ebene drückt aber nur der senkrecht zur Fläche stehende Anteil der Gewichtskraft auf die Unterlage, und der ist kleiner.",
    fix: ["Gewichtskraft in zwei Anteile zerlegen", "senkrecht zur Ebene: F_N = m·g·cos α", "F_N = 49,05 · cos 30° = 49,05 · 0,866"],
    right: "F_N ≈ 42,5 N",
    lesson: "Die Normalkraft ist nur auf waagrechter Ebene gleich m·g. Sobald es schräg wird, gehört ein cos α dazu, und in die Reibungsformel wandert dieser kleinere Wert.",
  });

  E("phys-energy", {
    task: "Ein Körper fällt aus 20 m Höhe. Mit welcher Geschwindigkeit trifft er auf?",
    wrong: ["Energieerhaltung: m·g·h = ½·m·v²", "m kürzen: g·h = ½·v²", "v = g·h / 2 = 9,81 · 20 / 2", "v = 98,1 m/s"],
    wrongResult: "v = 98,1 m/s",
    where: "Schritt 3",
    diagnosis: "Beim Auflösen wurde das Quadrat ignoriert. Aus g·h = ½v² folgt zuerst v² = 2gh, und daraus muss die Wurzel gezogen werden. Stattdessen wurde durch 2 geteilt, als stünde v linear da.",
    fix: ["g·h = ½·v²", "mit 2 multiplizieren: v² = 2·g·h = 2 · 9,81 · 20 = 392,4", "Wurzel ziehen: v = √392,4"],
    right: "v ≈ 19,8 m/s",
    lesson: "98 m/s wären 353 km/h aus 20 Metern Fall. Eine kurze Plausibilitätsprüfung hätte den Fehler sofort gezeigt. Nach dem Quadrat immer die Wurzel.",
  });

  E("phys-circuits-power", {
    task: "Zwei Widerstände von 6 Ω und 3 Ω liegen parallel. Wie gross ist der Gesamtwiderstand?",
    wrong: ["Parallel bedeutet addieren", "R_ges = 6 + 3", "R_ges = 9 Ω"],
    wrongResult: "R_ges = 9 Ω",
    where: "Schritt 1",
    diagnosis: "Addiert wird bei der Reihenschaltung. Parallel gibt es mehrere Wege für den Strom, deshalb wird der Gesamtwiderstand kleiner, nicht grösser. Gerechnet wird über die Kehrwerte.",
    fix: ["1/R_ges = 1/6 + 1/3 = 1/6 + 2/6 = 3/6", "1/R_ges = 1/2", "Kehrwert bilden: R_ges = 2 Ω"],
    right: "R_ges = 2 Ω",
    lesson: "Plausibilitätsprüfung: parallel muss das Ergebnis kleiner als der kleinste Einzelwiderstand sein, hier also unter 3 Ω. 9 Ω hätte sofort auffallen müssen.",
  });

  E("phys-heat-thermo", {
    task: "Wie viel Energie braucht es, um 2 kg Eis von −10 °C zu Wasser von 20 °C zu erwärmen? (c_Eis = 2100, c_Wasser = 4180 J/(kg·K), q_Schmelz = 334 kJ/kg)",
    wrong: ["Gesamte Temperaturänderung: von −10 auf 20, also ΔT = 30 K", "Q = c·m·ΔT mit c von Wasser", "Q = 4180 · 2 · 30", "Q = 250'800 J ≈ 251 kJ"],
    wrongResult: "Q ≈ 251 kJ",
    where: "Schritt 1",
    diagnosis: "Der Phasenübergang wurde vollständig übersprungen. Bei 0 °C muss das Eis erst schmelzen, und das kostet Energie, ohne dass die Temperatur steigt. Ausserdem gilt für Eis eine andere Wärmekapazität als für Wasser.",
    fix: ["Etappe 1, Eis erwärmen: 2100 · 2 · 10 = 42'000 J", "Etappe 2, Eis schmelzen: 334'000 · 2 = 668'000 J", "Etappe 3, Wasser erwärmen: 4180 · 2 · 20 = 167'200 J", "addieren: 42 + 668 + 167,2"],
    right: "Q ≈ 877 kJ",
    lesson: "Beim Überschreiten von 0 °C oder 100 °C immer in Etappen rechnen. Der Schmelzanteil ist hier mit Abstand der grösste Posten, ihn zu vergessen verfälscht das Ergebnis um mehr als das Dreifache.",
  });

  E("chem-equations-mole", {
    task: "Gleiche aus: H₂ + O₂ → H₂O",
    wrong: ["Links 2 H, rechts 2 H, stimmt", "Links 2 O, rechts 1 O, stimmt nicht", "Rechts eine 2 beim O ergänzen: H₂ + O₂ → H₂O₂", "Jetzt sind beide Seiten ausgeglichen"],
    wrongResult: "H₂ + O₂ → H₂O₂",
    where: "Schritt 3",
    diagnosis: "Verändert wurde ein Index innerhalb der Formel. Damit ist aus Wasser Wasserstoffperoxid geworden, also ein völlig anderer Stoff. Beim Ausgleichen dürfen ausschliesslich die Koeffizienten vor den Formeln angepasst werden.",
    fix: ["Koeffizient vor H₂O setzen: H₂ + O₂ → 2 H₂O", "Jetzt rechts 4 H, links nur 2, also vor H₂ eine 2", "2 H₂ + O₂ → 2 H₂O", "Kontrolle: links 4 H und 2 O, rechts 4 H und 2 O"],
    right: "2 H₂ + O₂ → 2 H₂O",
    lesson: "Indizes sind Teil des Stoffnamens und unantastbar. Nur die grossen Zahlen davor beschreiben, wie viele Teilchen reagieren.",
  });

  E("chem-concentration-stoich", {
    task: "Wie viel Gramm Sauerstoff reagieren mit 4 g Wasserstoff zu Wasser?",
    wrong: ["Gleichung: 2 H₂ + O₂ → 2 H₂O", "Verhältnis H₂ zu O₂ ist 2 zu 1", "Also braucht es halb so viel Sauerstoff wie Wasserstoff", "m(O₂) = 4 g / 2 = 2 g"],
    wrongResult: "m(O₂) = 2 g",
    where: "Schritt 3",
    diagnosis: "Das Verhältnis 2 zu 1 gilt für Teilchen und damit für Mol, nicht für Gramm. Ein Sauerstoffmolekül ist sechzehnmal schwerer als ein Wasserstoffmolekül, deshalb darf man die Massen nicht direkt halbieren.",
    fix: ["n(H₂) = 4 g / 2 g/mol = 2 mol", "Verhältnis 2 zu 1, also n(O₂) = 1 mol", "m(O₂) = n · M = 1 mol · 32 g/mol"],
    right: "m(O₂) = 32 g",
    lesson: "Immer über die Stoffmenge rechnen: Masse in Mol, im Molverhältnis weiter, dann zurück in Masse. Kontrolle über die Massenerhaltung: 4 g + 32 g = 36 g Wasser, und das sind genau 2 mol.",
  });

  E("chem-acid-base", {
    task: "Eine Lösung hat c(H₃O⁺) = 0,001 mol/l. Wie gross ist der pH?",
    wrong: ["pH = log(0,001)", "log(0,001) = −3", "pH = −3"],
    wrongResult: "pH = −3",
    where: "Schritt 1",
    diagnosis: "Das Minuszeichen aus der Definition wurde vergessen. Der pH ist der <em>negative</em> Zehnerlogarithmus. Ohne das Vorzeichen liegen alle Ergebnisse im negativen Bereich, was bei normalen Lösungen nie vorkommt.",
    fix: ["pH = −log(0,001)", "log(0,001) = −3", "pH = −(−3) = 3"],
    right: "pH = 3",
    lesson: "Negative pH-Werte gibt es nur bei extrem konzentrierten Säuren. Ein negatives Ergebnis bei einer gewöhnlichen Lösung bedeutet fast immer ein vergessenes Minuszeichen.",
  });

  E("bio-mendel", {
    task: "Zwei mischerbige Pflanzen Aa werden gekreuzt. Wie viel Prozent der Nachkommen zeigen das rezessive Merkmal?",
    wrong: ["Kreuzungsquadrat: AA, Aa, aA, aa", "Zwei von vier enthalten ein a", "Also 50 Prozent zeigen das rezessive Merkmal"],
    wrongResult: "50 Prozent",
    where: "Schritt 2",
    diagnosis: "Gezählt wurden alle Nachkommen, die überhaupt ein rezessives Allel <em>besitzen</em>. Sichtbar wird das Merkmal aber nur, wenn kein dominantes Allel vorhanden ist, also ausschliesslich bei aa.",
    fix: ["Vier Kombinationen: AA, Aa, aA, aa", "Aa und aA zeigen das dominante Merkmal, weil A sich durchsetzt", "Nur aa zeigt das rezessive Merkmal, das ist 1 von 4"],
    right: "25 Prozent",
    lesson: "Genotyp und Phänotyp trennen. Das Verhältnis 1 zu 2 zu 1 gilt für Genotypen, 3 zu 1 für Phänotypen. Die Frage entscheidet, welches gemeint ist.",
  });

  E("geo-climate-diagrams", {
    task: "Ein Klimadiagramm zeigt das Temperaturmaximum im Januar und Trockenheit im Juli. Welche Zone?",
    wrong: ["Sommertrockenheit im Juli", "Sommertrockene Zone in mittleren Breiten bedeutet mediterran", "Also Mittelmeerklima, zum Beispiel Spanien"],
    wrongResult: "Mittelmeerklima, Nordhalbkugel",
    where: "Schritt 1",
    diagnosis: "Das Temperaturmaximum liegt im Januar, die Station liegt also auf der Südhalbkugel. Dort ist Juli Winter, nicht Sommer. Die Trockenheit fällt somit in die kalte Jahreszeit, nicht in die warme.",
    fix: ["Maximum im Januar bedeutet Südhalbkugel", "Auf der Südhalbkugel ist Juli der Winter", "Trocken im Winter und warm im Sommer deutet auf Savannenklima hin"],
    right: "Winterfeuchtes Klima der Südhalbkugel, je nach Werten Savanne oder mediterran geprägt",
    lesson: "Erster Blick immer auf die Lage des Temperaturmaximums. Sie entscheidet über die Hemisphäre und damit darüber, welche Monate Sommer sind.",
  });

  E("de-argumentation", {
    task: "Formuliere ein Argument gegen ein Handyverbot an Schulen.",
    wrong: ["Ein Handyverbot ist falsch, weil Handys heute einfach dazugehören.",
            "Alle haben ein Handy, also ist ein Verbot unrealistisch.",
            "Ausserdem würden die Schüler es sowieso umgehen."],
    wrongResult: "drei Sätze, aber kein vollständiges Argument",
    where: "alle drei Sätze",
    diagnosis: "Satz 1 begründet mit Gewohnheit, das ist kein Grund, sondern eine Beschreibung. Satz 2 schliesst von der Verbreitung auf die Richtigkeit. Satz 3 argumentiert mit der Durchsetzbarkeit, nicht mit der Sache. Kein einzelner Satz enthält einen Beleg.",
    fix: ["Behauptung: Ein vollständiges Verbot schadet dem Unterricht mehr, als es nützt.",
          "Begründung: Digitale Recherche und Lernanwendungen sind Teil des Lehrplans und brauchen Geräte.",
          "Beleg: Mehrere Kantone setzen Tablets im Fachunterricht verbindlich ein; ein generelles Verbot würde diese Vorgaben aushebeln.",
          "Einschränkung: Für Pausen und Prüfungen bleibt ein Verbot dagegen sinnvoll."],
    right: "Behauptung, Begründung, Beleg und eine begründete Einschränkung",
    lesson: "Prüfe jedes Argument auf drei Teile. Fehlt der Beleg, ist es eine Meinung. Und Aussagen über Durchsetzbarkeit sind kein Argument über die Sache selbst.",
  });

  M.autopsyCount = n;
})();

/* Lehrer-Ebene. Ein Kapitel verhält sich wie eine betreute Stunde:
   Orientierung, unbewerteter Startcheck, Vorwissensreparatur, Grundidee in
   vier Tiefen, Bild, Verständnisprüfung, Formelunterricht, drei Beispiele
   mit abnehmender Hilfe, Fehlerklinik, Prüfungsessenz, Teach-back, Mission.
   Dazu vollständige lokale Vorlesefunktion über die Browser-Sprachausgabe. */
(function () {
  "use strict";
  var M = window.MNEMIKA;
  var esc = M.esc;
  var T = {};
  M.TEACH = T;
  M.addTeacher = function (chapterId, data) {
    T[chapterId] = data;
    var c = M.chapter(chapterId);
    if (c) c.teacher = true;
  };

  /* ================= Sprachausgabe ================= */
  var Speech = {
    supported: typeof window.speechSynthesis !== "undefined",
    queue: [], idx: 0, playing: false, paused: false,
    rate: 1.0, voice: null, follow: true, onTick: null,
    prefKey: "mnemika-speech",
  };
  /* Stimme und Sprache folgen der Auswahl, mit Rückfall auf die Sprachfamilie */
  M.speechLang = function () {
    var map = { de: "de-CH", en: "en-GB", fr: "fr-CH" };
    return map[M.locale ? M.locale() : "de"] || "de-CH";
  };
  M.pickVoice = function () {
    if (!window.speechSynthesis) return null;
    var want = M.speechLang(), base = want.split("-")[0];
    var vs = window.speechSynthesis.getVoices() || [];
    return vs.filter(function (v) { return v.lang === want; })[0]
      || vs.filter(function (v) { return (v.lang || "").indexOf(base) === 0; })[0] || null;
  };
  M.Speech = Speech;

  Speech.loadPrefs = function () {
    try {
      var p = JSON.parse(localStorage.getItem(Speech.prefKey) || "{}");
      if (p.rate) Speech.rate = p.rate;
      if (typeof p.follow === "boolean") Speech.follow = p.follow;
      Speech.voiceName = p.voiceName || null;
      Speech.pos = p.pos || {};
    } catch (e) { Speech.pos = {}; }
  };
  Speech.savePrefs = function () {
    try {
      localStorage.setItem(Speech.prefKey, JSON.stringify({
        rate: Speech.rate, follow: Speech.follow,
        voiceName: Speech.voice ? Speech.voice.name : Speech.voiceName, pos: Speech.pos || {},
      }));
    } catch (e) {}
  };
  Speech.germanVoices = function () {
    if (!Speech.supported) return [];
    var all = window.speechSynthesis.getVoices() || [];
    var de = all.filter((v) => /^de/i.test(v.lang || ""));
    return de.length ? de : all;
  };
  Speech.pickVoice = function () {
    var list = Speech.germanVoices();
    if (!list.length) return null;
    if (Speech.voiceName) {
      var hit = list.filter((v) => v.name === Speech.voiceName)[0];
      if (hit) return hit;
    }
    return list[0];
  };

  /** queue: [{text, el, key}] — el wird beim Sprechen markiert */
  Speech.play = function (queue, startAt) {
    if (!Speech.supported) return false;
    Speech.stop(true);
    Speech.queue = queue || [];
    Speech.idx = Math.max(0, Math.min(startAt || 0, Speech.queue.length - 1));
    Speech.playing = true; Speech.paused = false;
    Speech.voice = Speech.pickVoice();
    Speech.next();
    return true;
  };
  Speech.next = function () {
    if (!Speech.playing) return;
    if (Speech.idx >= Speech.queue.length) { Speech.finish(); return; }
    var item = Speech.queue[Speech.idx];
    Speech.mark(item);
    if (item.pause) {                       // Verständnisfrage: hier hält die Stimme an
      Speech.playing = false; Speech.paused = true;
      Speech.tick("await");
      return;
    }
    var u = new window.SpeechSynthesisUtterance(item.text);
    u.lang = M.speechLang();
    u.rate = Speech.rate;
    if (Speech.voice) u.voice = Speech.voice;
    u.onend = function () {
      if (!Speech.playing) return;
      Speech.idx += 1;
      Speech.remember();
      Speech.next();
    };
    u.onerror = function () { Speech.idx += 1; Speech.next(); };
    Speech.current = u;
    try { window.speechSynthesis.speak(u); } catch (e) { Speech.finish(); }
    Speech.tick("play");
  };
  Speech.mark = function (item) {
    document.querySelectorAll(".speaking").forEach((n) => n.classList.remove("speaking"));
    if (item && item.el && item.el.isConnected) {
      item.el.classList.add("speaking");
      if (Speech.follow && item.el.scrollIntoView) {
        try { item.el.scrollIntoView({ block: "center", behavior: "smooth" }); } catch (e) {}
      }
    }
  };
  Speech.pause = function () {
    if (!Speech.supported || !Speech.playing) return;
    try { window.speechSynthesis.pause(); } catch (e) {}
    Speech.paused = true; Speech.tick("pause");
  };
  Speech.resume = function () {
    if (!Speech.supported) return;
    if (Speech.paused && !Speech.playing) {   // nach Verständnisfrage
      Speech.playing = true; Speech.paused = false;
      Speech.idx += 1; Speech.next(); return;
    }
    try { window.speechSynthesis.resume(); } catch (e) {}
    Speech.paused = false; Speech.tick("play");
  };
  Speech.stop = function (silent) {
    Speech.playing = false; Speech.paused = false;
    try { window.speechSynthesis.cancel(); } catch (e) {}
    document.querySelectorAll(".speaking").forEach((n) => n.classList.remove("speaking"));
    Speech.tick("stop");   // auch beim stillen Stoppen, damit die Leiste verschwindet
  };
  Speech.again = function () {
    if (!Speech.queue.length) return;
    Speech.play(Speech.queue, Speech.idx);
  };
  Speech.jump = function (delta) {
    if (!Speech.queue.length) return;
    Speech.play(Speech.queue, Math.max(0, Math.min(Speech.queue.length - 1, Speech.idx + delta)));
  };
  Speech.setRate = function (r) {
    Speech.rate = r; Speech.savePrefs();
    if (Speech.playing) Speech.play(Speech.queue, Speech.idx);
  };
  Speech.finish = function () {
    Speech.playing = false; Speech.paused = false;
    document.querySelectorAll(".speaking").forEach((n) => n.classList.remove("speaking"));
    Speech.tick("done");
  };
  Speech.remember = function () {
    if (!Speech.chapterId) return;
    Speech.pos = Speech.pos || {};
    Speech.pos[Speech.chapterId] = Speech.idx;
    Speech.savePrefs();
  };
  Speech.listeners = [];
  Speech.onChange = function (fn) {
    if (typeof fn === "function" && Speech.listeners.indexOf(fn) < 0) Speech.listeners.push(fn);
  };
  Speech.tick = function (state) {
    if (Speech.onTick) { try { Speech.onTick(state); } catch (e) {} }
    Speech.listeners.forEach((fn) => { try { fn(state); } catch (e) {} });
  };
  Speech.loadPrefs();

  /* Sprechtext aus einem Element gewinnen: Formeln haben data-spoken. */
  T.speakTextOf = function (el) {
    if (el.getAttribute && el.getAttribute("data-spoken")) return el.getAttribute("data-spoken");
    var t = el.textContent || "";
    return t.replace(/\s+/g, " ").trim();
  };
  /* Vorlesewarteschlange aus dem sichtbaren Lernweg bauen. */
  T.buildQueue = function (root) {
    var out = [];
    root.querySelectorAll("[data-say]").forEach((el) => {
      if (el.offsetParent === null && el.hasAttribute("hidden")) return;
      if (el.getAttribute("data-say") === "pause") {
        out.push({ text: "", el: el, pause: true });
        return;
      }
      var txt = T.speakTextOf(el);
      if (txt.length > 1) out.push({ text: txt, el: el });
    });
    return out;
  };
})();

(function(){
'use strict';
var M=window.MNEMIKA;const esc=M.esc;const $=(s,r)=>(r||document).querySelector(s);
M.listenBarHTML = function () {
    return `<div class="listen" id="listenbar">
      <div class="lrow lrow-main">
        <button class="btn go sm" id="l-play">▶ Vorlesen</button>
        <button class="btn sm" id="l-pause" disabled>Pause</button>
        <button class="btn sm" id="l-again" disabled aria-label="Satz wiederholen">↺</button>
        <label class="lrate">Tempo <select id="l-rate">
          <option value="0.8">0.8</option><option value="1" selected>1.0</option><option value="1.2">1.2</option>
        </select></label>
      </div>
      <details class="lmenu"><summary>Mehr</summary>
        <div class="lmenu-in">
          <button class="btn sm" id="l-sec">Nur dieser Abschnitt</button>
          <button class="btn sm" id="l-prev" disabled>◀ Abschnitt</button>
          <button class="btn sm" id="l-next" disabled>Abschnitt ▶</button>
          <button class="btn sm" id="l-stop" disabled>Stopp</button>
          <label>Stimme <select id="l-voice"><option>wird geladen…</option></select></label>
          <label class="lchk"><input type="checkbox" id="l-follow" checked> Mitscrollen</label>
        </div></details>
      <span class="lstate" id="l-state">bereit</span>
      <div class="lnote" id="l-note" hidden></div>
    </div>`;
  };
  M.mountListen = function (el, chapterId) { setupListen(el, { id: chapterId || "x" }); };

    /* ================= Hörsteuerung ================= */
  function setupListen(el, c) {
    var Sp = M.Speech;
    var state = $("#l-state", el);
    var note = $("#l-note", el);
    if (!Sp.supported) {
      $("#listenbar", el).classList.add("off");
      note.hidden = false;
      note.textContent = "Dieser Browser bietet keine Sprachausgabe an. Alle Texte bleiben lesbar.";
      el.querySelectorAll("#listenbar button, #listenbar select, #listenbar input").forEach((b) => { b.disabled = true; });
      return;
    }
    Sp.chapterId = c.id;
    var btn = (id) => $("#" + id, el);
    var setState = (s) => {
      var map = { play: "liest vor", pause: "pausiert", stop: "gestoppt", done: "fertig", await: "wartet auf deine Antwort" };
      state.textContent = map[s] || "bereit";
      btn("l-pause").disabled = !(Sp.playing || Sp.paused);
      btn("l-stop").disabled = !(Sp.playing || Sp.paused);
      btn("l-again").disabled = !Sp.queue.length;
      btn("l-prev").disabled = !Sp.queue.length;
      btn("l-next").disabled = !Sp.queue.length;
      btn("l-pause").textContent = Sp.paused ? "Fortsetzen" : "Pause";
      if (s === "await") {
        note.hidden = false;
        note.textContent = "Die Erklärung hält hier an. Beantworte die Verständnisfrage, dann geht es mit «Fortsetzen» weiter.";
      }
    };
    Sp.onChange(setState);

    var fillVoices = () => {
      var sel = $("#l-voice", el);
      var list = Sp.germanVoices();
      if (!list.length) { sel.innerHTML = "<option>keine Stimme gefunden</option>"; return; }
      sel.innerHTML = list.map((v) => `<option value="${esc(v.name)}"${v.name === Sp.voiceName ? " selected" : ""}>${esc(v.name)} (${esc(v.lang)})</option>`).join("");
      sel.onchange = () => { Sp.voiceName = sel.value; Sp.voice = Sp.pickVoice(); Sp.savePrefs(); if (Sp.playing) Sp.play(Sp.queue, Sp.idx); };
    };
    fillVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = fillVoices;
    }

    $("#l-rate", el).value = String(Sp.rate);
    $("#l-rate", el).onchange = (e) => Sp.setRate(parseFloat(e.target.value));
    $("#l-follow", el).checked = Sp.follow;
    $("#l-follow", el).onchange = (e) => { Sp.follow = e.target.checked; Sp.savePrefs(); };

    btn("l-play").onclick = () => {
      M.prepareSpeech(el);
      var q = M.TEACH.buildQueue(el);
      var resume = (Sp.pos && Sp.pos[c.id]) || 0;
      Sp.play(q, resume < q.length ? resume : 0);
    };
    btn("l-sec").onclick = () => {
      var cur = el.querySelector(".tsec:hover") || el.querySelector("#ts-idea");
      M.prepareSpeech(el);
      Sp.play(M.TEACH.buildQueue(cur), 0);
    };
    btn("l-pause").onclick = () => { if (Sp.paused) Sp.resume(); else Sp.pause(); };
    btn("l-stop").onclick = () => Sp.stop();
    btn("l-again").onclick = () => Sp.again();
    btn("l-prev").onclick = () => Sp.jump(-1);
    btn("l-next").onclick = () => Sp.jump(1);
    setState("ready");
  }
})();

/* Adapter: macht aus jedem der 105 Kapitel eine Lektion für denselben
   Renderer. Kuratierte Daten haben Vorrang, alles Übrige wird aus den
   vorhandenen Blöcken, Karten, Beispielen und Klinikfällen gebildet. */
(function () {
  "use strict";
  var M = window.MNEMIKA;

  var firstSentence = (html) => {
    var t = String(html || "").replace(/<[^>]+>/g, "").trim();
    var m = t.match(/^[^.!?]{20,190}[.!?]/);
    return (m ? m[0] : t.slice(0, 150)).trim();
  };
  var strip = (h) => String(h || "").replace(/<[^>]+>/g, "").trim();

  /* Fachmodellart aus dem Fach ableiten */
  var KIND = {
    math: "formula", physics: "formula", chemistry: "formula",
    biology: "structure-function", geography: "causal-process",
    history: "evidence-argument", german: "evidence-argument", english: "evidence-argument",
  };
  M.modelKindFor = (subject) => KIND[subject] || "causal-process";

  /* ---------- Lerneinheiten ---------- */
  M.unitsOf = function (c, D) {
    /* Quellblöcke sind verbindlich. Kuratiertes wird angehängt, nie ersetzt. */
    var curated = [];
    if (D && D.units && D.units.length) {
      D.units.forEach((u) => curated.push(u));
    } else if (D && D.idea && (D.idea.normal || []).length) {
      curated.push({
        blockId: "idea", concept: "Die Grundidee",
        takeaway: String((D.idea.kurz || [])[0] || "").replace(/<[^>]+>/g, ""),
        body: D.idea.normal, simple: D.idea.kurz, deep: D.idea.tief,
        analogy: D.idea.anders, visual: (M.ILLUS[c.id] || [])[0] || D.visual, check: D.check,
      });
    }
    if (curated.length) {
      var byId = {};
      curated.forEach((u) => { if (u.blockId && u.blockId !== "idea") byId[u.blockId] = u; });
      var pics0 = (M.ILLUS[c.id] || []).slice();
      var srcUnits = (c.blocks || []).filter((b) => (b.body || []).length).map((b, i) => {
        var base = {
          blockId: b.id || ("b" + (i + 1)),
          concept: b.label || ("Baustein " + (i + 1)),
          takeaway: firstSentence(b.body[0]), body: b.body,
          visual: pics0[i] || null, check: b.check || null,
        };
        var cu = byId[base.blockId];
        return cu ? Object.assign({}, base, cu, { check: cu.check || base.check, blockId: base.blockId }) : base;
      });
      var matched = {};
      Object.keys(byId).forEach((k) => { matched[k] = 1; });
      var lead = curated.filter((u) => !u.blockId || u.blockId === "idea"
        || !matched[u.blockId] === false ? (!u.blockId || u.blockId === "idea") : false);
      return lead.concat(srcUnits);
    }
    var pics = (M.ILLUS[c.id] || []).slice();
    var blocks = (c.blocks || []).filter((b) => (b.body || []).length);
    if (!blocks.length) {
      return [{
        concept: c.title,
        takeaway: firstSentence((c.intro && c.intro.core) || c.hook || c.summary || ""),
        body: [(c.intro && c.intro.lead) || c.hook || c.summary || ""],
        visual: pics[0], check: null,
      }];
    }
    return blocks.map((b, i) => ({
      blockId: b.id || ("b" + (i + 1)),
      concept: b.label || ("Baustein " + (i + 1)),
      takeaway: firstSentence(b.body[0]),
      body: b.body,
      visual: pics[i] || (i === 0 && pics.length ? pics[0] : null),
      check: b.check || null,
      simple: i === 0 && c.intro && c.intro.lead ? [c.intro.lead] : null,
      deep: b.body.length > 2 ? null : null,
      analogy: null,
      mistake: i === blocks.length - 1 ? c.mistake : null,
      mnemonic: i === blocks.length - 1 ? c.mnemonic : null,
    }));
  };

  /* ---------- Modell aus einer Formelkarte ---------- */
  function modelFromCard(c, m) {
    var kind = M.modelKindFor(c.subject);
    if (kind === "formula" && m.expr) {
      var what = String(m.what || "").trim();
      var nm = String(m.name || "").trim();
      var question = m.question
        || (nm ? "Welche Frage beantwortet " + nm + "?" : "Welche Grösse lässt sich damit bestimmen?");
      return {
        kind: "formula",
        question: question,
        words: what && what !== question ? what : (nm || "Zusammenhang der beteiligten Grössen"),
        expr: m.expr, spoken: m.spokenText || "",
        params: (m.params || []).map((p) => ({
          sym: p.sym, name: p.name, unit: p.unit, means: p.means,
          allowed: p.allowed || "", signs: p.signs || "", inText: p.inText || "",
          effect: p.effect, spoken: p.spoken || p.means,
        })),
        rearrange: m.rearrange || "", special: m.special || "",
        control: m.unitCheck || "Ergebnis in die Ausgangsgleichung einsetzen und beide Seiten vergleichen.",
        notUse: m.trap || "Nur innerhalb der im Kapitel genannten Bedingungen anwenden.",
        why: (m.deriv || []).map((d) => d[2]).filter(Boolean).slice(0, 4),
      };
    }
    var steps = (m.deriv || []).slice(0, 5).map((d, i) => ({
      label: ["Ausgangslage", "Mechanismus", "Folge", "Woran man es sieht", "Grenze"][i],
      text: d[2] || d[1] || d[0],
    }));
    var what2 = String(m.what || "").trim();
    var nm2 = String(m.name || "").trim();
    var q2 = nm2 ? "Wie hängt " + nm2 + " zusammen?" : "Welche Kette steckt dahinter?";
    return {
      kind, isModel: true,
      question: q2,
      words: what2 && what2 !== q2 ? what2 : (nm2 || "Zusammenhang im Kapitel"),
      steps: steps.length ? steps : null,
      control: m.unitCheck || "Gegenprobe an einem zweiten Fall: trägt die Kette auch dort?",
      notUse: m.trap || "Nicht auf Einzelfälle übertragen, die anderen Bedingungen unterliegen.",
      why: (m.deriv || []).map((d) => d[2]).filter(Boolean).slice(0, 3),
    };
  }

  /* Denkmodell aus den Kernpunkten, wenn keine Karte vorhanden ist */
  function modelFromEssentials(c) {
    var pts = (c.essentials || c.points || []).slice(0, 5);
    var kind = M.modelKindFor(c.subject);
    var heads = kind === "evidence-argument"
      ? ["Behauptung", "Beleg", "Begründung", "Einwand", "In der Prüfung"]
      : ["Ausgangslage", "Mechanismus", "Folge", "Woran man es sieht", "Grenze"];
    return {
      kind, isModel: true,
      question: "Welche Kette musst du in der Prüfung wiedergeben können?",
      words: strip((c.intro && c.intro.core) || c.hook || "") || "Die Kernpunkte in ihrer Reihenfolge",
      steps: pts.map((p, i) => ({ label: heads[i] || "Punkt " + (i + 1), text: strip(p) })),
      control: "Erklär die Kette laut, ohne nachzusehen. Wo du stockst, fehlt der Grund, nicht die Vokabel.",
      notUse: c.mistake || "Nicht als Merkliste lernen. Die Verbindung zwischen den Schritten wird geprüft.",
      why: [],
    };
  }

  /* ---------- Vollständige Lektionsdaten ---------- */
  M.lessonDataFor = function (c) {
    var D = M.TEACH[c.id];
    var curated = D && D.orient ? D : null;
    var intro = c.intro || {};
    var card = (c.models || [])[0];
    var model = card ? modelFromCard(c, card) : modelFromEssentials(c);
    var terms = (intro.terms || []).map((t) => t[0]);
    var base = {
      generated: !curated,
      orient: {
        goal: strip(intro.core) || strip(c.hook) || c.title,
        why: strip(intro.why) || (function(){ try{ var pr = M.activeProgram && M.activeProgram(); if(pr === "passerelle-2023") return "Dieses Kapitel gehört zum Prüfungsstoff der Passerelle."; }catch(e){} return "Dieses Kapitel gehört zum Lernstoff deines gewählten Abschlusses."; })(),
        time: (c.minutes ? c.minutes + " Minuten" : "rund 30 Minuten"),
        can: (c.objectives || []).slice(0, 2).map(strip).filter(Boolean).join(" ") /* R107: ganze Saetze */ || strip(intro.core) || "den Stoff sicher wiedergeben",
        myth: intro.myth || "",
      },
      diagnose: [],
      prereq: intro.prereq ? [{ id: "pre", title: "Was du vorher können musst",
        explain: strip(intro.prereq), reminder: strip(intro.lead) }] : [],
      formula: model,
      examples: (c.examples || []).map((e, i) => ({
        mode: i === 0 ? "show" : i === 1 ? "together" : "you",
        task: e.task, interpret: e.level || "", given: e.given || "aus der Aufgabe",
        wanted: e.wanted || "das Ergebnis", strategy: e.strategy || "Schritt für Schritt vorgehen.",
        steps: (e.steps || []).map((s) => (typeof s === "string" ? { do: s, why: "" } : s)),
        result: e.result || "", unit: e.unit || "",
        control: e.control || "Ergebnis auf Plausibilität und Einheit prüfen.",
        wrongWay: e.wrongWay || c.mistake || "Den häufigsten Fehler findest du in der Prüfungsfalle unten.",
      })),
      clinic: (c.autopsy || [])[0] || null,
      essence: (c.essentials || c.points || []).map(strip),
      teachback: {
        prompt: "Erkläre in eigenen Worten, worum es in diesem Kapitel im Kern geht und warum das so ist.",
        keywords: terms.slice(0, 5),
        model: strip(intro.core) || strip(c.summary) || "",
      },
      mission: { title: "Kapitelmission " + c.title,
        text: "Alle Aufgaben dieses Kapitels, falsche und unsichere kommen zurück." },
      mistake: c.mistake, mnemonic: c.mnemonic,
      intro: intro,
    };
    if (!curated) return base;
    /* Kuratiertes ergänzt die Quelle. Beispiele werden nach Inhaltsschlüssel
       zusammengeführt, damit keine Originalaufgabe verschwindet. */
    var keyOf = (ex) => String((ex && (ex.task || ex.prompt)) || "")
      .toLowerCase().replace(/[^a-z0-9äöüß]+/g, " ").trim().slice(0, 60);
    var merged = Object.assign({}, base, curated);
    /* Die kuratierte Folge führt (zeigen, gemeinsam lösen, selbst machen),
       danach die Quellaufgaben, die keine kuratierte Entsprechung haben. */
    var exs = [];
    var usedKeys = {};
    (curated.examples || []).forEach((ex) => {
      var k = keyOf(ex);
      var match = (base.examples || []).filter((y) => k && keyOf(y) === k)[0];
      exs.push(match ? Object.assign({}, match, ex) : ex);
      if (k) usedKeys[k] = 1;
    });
    (base.examples || []).forEach((ex) => {
      var k = keyOf(ex);
      if (!k || !usedKeys[k]) exs.push(ex);
    });
    merged.examples = exs;
    merged.generated = false;
    if (merged.formula && !merged.formula.kind) merged.formula.kind = M.modelKindFor(c.subject);
    return merged;
  };
})();

/* Lehreransicht, neu aufgebaut.
   Vier Phasen statt zwölf gleichrangiger Abschnitte. Erklärung, Bild und
   Prüfung bilden eine Lerneinheit. Fachmodelle werden je nach Art
   gerendert, nicht alle als Formel. */
(function () {
  "use strict";
  var M = window.MNEMIKA;
  var esc = M.esc;
  var $ = (s, r) => (r || document).querySelector(s);

  function phaseHeader(n, title, lead, id) {
    return `<header class="phase" id="ph-${id}"><span class="phase-n">${n}</span>
      <div><h2 data-say="1">${esc(title)}</h2><p data-say="1">${esc(lead)}</p></div></header>`;
  }
  function unitShell(u, i) {
    return `<article class="unit" id="u-${i}">
      <h3 class="unit-title" data-say="1">${esc(u.concept)}</h3>
      ${(function () {
        var t = String(u.takeaway || "").trim();
        var b = String((u.body || [])[0] || "").replace(/<[^>]+>/g, "").trim();
        if (!t || (b && b.slice(0, Math.min(t.length, 60)) === t.slice(0, Math.min(t.length, 60)))) return "";
        return `<p class="unit-take" data-say="1">${esc(t)}</p>`;
      })()}
      <div class="unit-body" id="ub-${i}"></div>
      <div class="unit-visual" id="uv-${i}"></div>
      <div data-say="pause"></div><div class="unit-check" id="uc-${i}"></div>
      <div class="unit-more" id="um-${i}"></div>
      <div class="unit-acts">
        ${(u.simple || []).length ? `<button class="lnk" data-more="simple" data-u="${i}">Einfacher erklären</button>` : ""}
        ${(u.deep || []).length ? `<button class="lnk" data-more="deep" data-u="${i}">Tiefer einsteigen</button>` : ""}
        ${(u.analogy || []).length ? `<button class="lnk" data-more="analogy" data-u="${i}">Andere Darstellung</button>` : ""}
        <button class="lnk warnlnk" data-more="help" data-u="${i}">Das verstehe ich nicht</button>
      </div></article>`;
  }

  function renderFormulaModel(f) {
    return `<div class="model model-formula">
      <p class="model-q" data-say="1"><span class="model-lbl">Welche Frage sie beantwortet</span>${esc(f.question)}</p>
      ${String(f.words || "").trim() && f.words !== f.question
        ? `<p class="model-words" data-say="1"><span class="model-lbl">In Worten</span>${esc(f.words)}</p>` : ""}
      <div class="model-expr"><span class="expr">${esc(f.expr)}</span>
        ${String(f.spoken || "").trim()
          ? `<span class="expr-say" data-say="1" data-spoken="${esc(f.spoken)}">gesprochen: ${esc(f.spoken)}</span>`
          : ""}</div>
      <h4>Die Grössen</h4>
      <dl class="vars">${(f.params || []).map((p) => `
        <dt><code>${esc(p.sym)}</code> ${esc(p.name)}${p.unit ? ` <span class="var-unit">${esc(p.unit)}</span>` : ""}</dt>
        <dd data-say="1" data-spoken="${esc(p.spoken || p.means)}">${esc(p.means)}
          <span class="var-eff">${esc(p.effect)}</span></dd>`).join("")}</dl>
      ${[f.rearrange, f.special, f.control, f.notUse].some((x) => String(x || "").trim())
        ? `<details class="fold"><summary>Umstellen, Sonderfall und Kontrolle</summary>
        ${String(f.rearrange || "").trim() ? `<p class="mono">${esc(f.rearrange)}</p>` : ""}
        ${String(f.special || "").trim() ? `<p data-say="1"><strong>Sonderfall.</strong> ${esc(f.special)}</p>` : ""}
        ${String(f.control || "").trim() ? `<p data-say="1"><strong>Kontrolle.</strong> ${esc(f.control)}</p>` : ""}
        ${String(f.notUse || "").trim() ? `<p data-say="1"><strong>Grenzen des Verfahrens.</strong> ${esc(f.notUse)}</p>` : ""}
        </details>` : ""}
      ${(f.why || []).filter((w) => String(w || "").trim()).length
        ? `<details class="fold"><summary>Warum die Formel gilt</summary>
        ${f.why.filter((w) => String(w || "").trim()).map((w) => `<p data-say="1">${esc(w)}</p>`).join("")}</details>` : ""}</div>`;
  }

  function renderConceptModel(f) {
    var heads = f.kind === "evidence-argument"
      ? ["Behauptung", "Beleg", "Begründung", "Einwand", "In der Prüfung"]
      : ["Struktur oder Ausgangslage", "Mechanismus", "Funktion oder Folge", "Woran man es sieht", "Grenze"];
    var rows = f.steps || (f.params || []).map((p, i) => ({ label: heads[i] || p.name, text: p.means + " " + p.effect }));
    return `<div class="model model-concept">
      <p class="model-q" data-say="1"><span class="model-lbl">Welche Frage es beantwortet</span>${esc(f.question)}</p>
      ${String(f.words || "").trim() && f.words !== f.question
        ? `<p class="model-words" data-say="1"><span class="model-lbl">Der Zusammenhang</span>${esc(f.words)}</p>` : ""}
      ${rows.length >= 3 && rows.length <= 5 ? `<div class="flowline" role="img"
        aria-label="${esc(rows.map((r) => r.label).join(" danach "))}">
        ${rows.map((r, i) => `<div class="fl-step"><span class="fl-n">${i + 1}</span>
          <span class="fl-lbl">${esc(r.label || heads[i] || "")}</span>
          <span class="fl-tx">${esc(String(r.text).split(/(?<=[.!?])\s/)[0])}</span></div>`).join("")}</div>` : ""}
      <ol class="chain">${rows.map((r, i) => `<li><span class="chain-lbl">${esc(r.label || heads[i] || "")}</span>
        <span class="chain-tx" data-say="1">${esc(r.text)}</span></li>`).join("")}</ol>
      ${[f.control, f.notUse].some((x) => String(x || "").trim())
        ? `<details class="fold"><summary>Grenzen und Gegenprobe</summary>
        ${String(f.control || "").trim() ? `<p data-say="1"><strong>Gegenprobe.</strong> ${esc(f.control)}</p>` : ""}
        ${String(f.notUse || "").trim() ? `<p data-say="1"><strong>Grenze.</strong> ${esc(f.notUse)}</p>` : ""}</details>` : ""}
      ${(f.why || []).filter((w) => String(w || "").trim()).length
        ? `<details class="fold"><summary>Warum das trägt</summary>
        ${f.why.filter((w) => String(w || "").trim()).map((w) => `<p data-say="1">${esc(w)}</p>`).join("")}</details>` : ""}</div>`;
  }
  function renderModel(f) {
    var conceptual = f.isModel || (f.kind && f.kind !== "formula");
    return conceptual ? renderConceptModel(f) : renderFormulaModel(f);
  }

  function renderVisual(v) {
    if (!v) return "";
    var inner = v.html || v.svg;
    return `<figure class="fig">${inner}
      <figcaption data-say="1"><b>${esc(v.title)}.</b> ${esc(v.caption)}</figcaption></figure>`;
  }
  M.renderVisual = renderVisual;

  function renderExample(x, i) {
    var label = x.mode === "show" ? "Ich zeige" : x.mode === "together" ? "Wir lösen" : "Du löst";
    return `<article class="ex" data-ex="${i}">
      <header><span class="ex-mode ex-${x.mode}">${label}</span>
      <p class="ex-task" data-say="1">${esc(x.task)}</p></header>
      <dl class="ex-meta">
        <div><dt>Gegeben</dt><dd data-say="1">${esc(x.given)}</dd></div>
        <div><dt>Gesucht</dt><dd data-say="1">${esc(x.wanted)}</dd></div>
        <div><dt>Strategie</dt><dd data-say="1">${esc(x.strategy)}</dd></div></dl>
      <div class="ex-steps"></div>
      <div class="ex-foot" hidden>
        <p class="ex-res">${esc(x.result)}${x.unit ? " " + esc(x.unit) : ""}</p>
        <p data-say="1"><strong>Kontrolle.</strong> ${esc(x.control)}</p>
        <p class="ex-wrong" data-say="1"><strong>Typischer falscher Weg.</strong> ${esc(x.wrongWay)}</p>
      </div></article>`;
  }

  M.renderLesson = function (el, c, D) {
    D = D || M.lessonDataFor(c);
    var S = M.store();
    var st = S.teach[c.id] = S.teach[c.id] || { depth: "normal", help: {}, done: {} };
    var units = M.unitsOf(c, D);
    var H = [`<div class="lesson s-${esc(c.subject)}">`, `<main class="lesson-main">`];
    H.push(`<button class="lnk back" data-back="1">← ${esc(M.SUBJECTS[c.subject].label)}</button>`);
    var intro = c.intro || {};
    var strip = (h) => String(h || "").replace(/<[^>]+>/g, "").trim();
    var lead = strip(intro.lead) || D.orient.goal;
    var core = strip(intro.core);
    var why = strip(intro.why) || D.orient.why;
    var route = units.map((u) => u.concept).slice(0, 4).join(" → ");
    var lessonMentor = M.MentorsCompact
      ? M.MentorsCompact.html({ subject: c.subject, context: "lesson", stableKey: c.id, pose: "lesson-intro", variant: "lesson" })
      : "";
    H.push(`<div class="lesson-head mn-has-mentor mn-lesson"><p class="eyebrow">${M.logoOf(c.subject)} ${esc(M.SUBJECTS[c.subject].label)} · ${esc(window.mnEinheitLabel ? window.mnEinheitLabel(c, M.tc(c.id, "unit", c.unit)) : M.tc(c.id, "unit", c.unit))}</p>
      <h1 data-say="1">${esc(M.tc(c.id, "title", c.title))}</h1>
      <p class="lb-meta">${window.mnIkon ? window.mnIkon("hourglass") : ""}<span>${esc(D.orient.time)}</span><span>${units.length} ${units.length === 1 ? "Abschnitt" : "Abschnitte"}</span></p>
      <div class="heroacts">
        <button class="btn go" id="startlesson">${window.mnIkon ? window.mnIkon("book-open") : ""}<span>Lesen beginnen</span></button>
        <button class="btn" id="heroread"><span class="ic-read" aria-hidden="true">${window.mnIkon ? window.mnIkon("volume-2") : "▶"}</span> Vorlesen</button>
        <details class="lb-mehr"><summary class="btn">${window.mnIkon ? window.mnIkon("ellipsis") : ""}<span>Mehr</span></summary><div class="lb-mehr-in">
          <button class="btn" id="goalsbtn">${window.mnIkon ? window.mnIkon("target") : ""}Lernziele anpassen</button>
        </div></details>
      </div>
      ${M.mediaFor && M.mediaFor(c.id) ? M.mediaHTML(M.mediaFor(c.id), "hero") : ""}
      <p class="lead" data-say="1">${esc(lead)}</p>
      ${core && core !== lead ? `<p class="corepx" data-say="1"><span>Kernprinzip</span>${esc(core)}</p>` : ""}

      ${lessonMentor}
    </div>`);

    H.push(phaseHeader(1, "Orientieren", "Wozu das gut ist und was du dafür schon können musst.", "orient"));
    H.push(`<p class="why" data-say="1"><strong>Warum das zählt.</strong> ${esc(D.orient.why)}</p>
      <p class="why-meta">${esc(D.orient.time)} · ${/\b(the|and|with|through|your|use|build|choose|to)\b/i.test(String(D.orient.can||"")) ? "Ziel: " : "danach kannst du "}${esc(D.orient.can)}</p>`);
    if (D.orient.myth) H.push(`<p class="myth-line" data-say="1"><strong>Häufige Fehlvorstellung.</strong> ${esc(D.orient.myth)}</p>`);
    H.push(`<div id="diagbox"></div><div id="prebox"></div>`);

    H.push(phaseHeader(2, "Verstehen", units.length > 1
      ? `${units.length} Bausteine, jeder mit eigener Erklärung, eigenem Bild und eigener Prüfung.`
      : "Die Grundidee, das passende Bild und eine kurze Prüfung.", "learn"));
    H.push(units.map(unitShell).join(""));

    var hasEx = (D.examples || []).length;
    H.push(phaseHeader(3, "Anwenden", hasEx
      ? "Das Modell, dann Beispiele mit abnehmender Hilfe."
      : "Das Modell hinter dem Kapitel und die typische Prüfungsfalle.", "apply"));
    if (D.formula) H.push(renderModel(D.formula));
    if (hasEx) H.push(`<div class="examples">${D.examples.map(renderExample).join("")}</div>`);
    if (D.mistake) H.push(`<p class="trap" data-say="1"><strong>Prüfungsfalle.</strong> ${esc(D.mistake)}</p>`);
    if (D.mnemonic) H.push(`<p class="mnemo" data-say="1"><strong>Merksatz.</strong> ${esc(D.mnemonic)}</p>`);
    if (D.clinic) H.push(`<details class="fold clinic-fold"><summary>Fehlerklinik: eine falsche Lösung zerlegt</summary>
      <div id="clinicbox"></div></details>`);

    H.push(phaseHeader(4, "Prüfen", "Was in der Prüfung zählt, und ob du es erklären kannst.", "test"));
    if ((D.essence || []).length) H.push(`<ul class="essence">${D.essence.map((e) => `<li data-say="1">${esc(e)}</li>`).join("")}</ul>`);
    if ((D.teachback.keywords || []).length >= 3) H.push(`<div id="teachbox"></div>`);
    H.push(`<div class="mission-row"><div><b data-say="1">${esc(D.mission.title)}</b>
      <span data-say="1">${esc(D.mission.text)}</span></div>
      <button class="btn go" data-quiz="${esc(c.id)}">Mission starten</button></div>`);
    H.push(`</main>`);

    H.push(`<aside class="rail"><div class="rail-in">
      <div class="rail-card"><span class="rail-lbl">Kernidee</span>
        <p class="rail-key">${esc(units[0].takeaway)}</p></div>
      <nav class="rail-card rail-nav" aria-label="Lernweg"><span class="rail-lbl">Lernweg</span>
        <a href="#ph-orient">1 Orientieren</a><a href="#ph-learn">2 Verstehen</a>
        ${units.map((u, i) => `<a class="sub" href="#u-${i}">${esc(u.concept)}</a>`).join("")}
        <a href="#ph-apply">3 Anwenden</a><a href="#ph-test">4 Prüfen</a></nav>
      <div class="rail-card" id="railaudio"></div>
      <div class="rail-card"><span class="rail-lbl">Fortschritt</span>
        <div class="rail-prog"><i id="railbar"></i></div>
        <span class="rail-note" id="railnote"></span></div>
    </div></aside></div>`);

    el.innerHTML = H.join("");
    wire(el, c, D, st, S, units);
  };

  function wire(el, c, D, st, S, units) {
    var save = M.save;
    $("[data-back]", el).onclick = () => { M.Speech.stop(); M.go("learn", c.subject); };
    el.querySelector("[data-quiz]").onclick = () => { M.Speech.stop(); M.go("train", { mode: "chapter", chapterId: c.id }); };

    var dbox = $("#diagbox", el);
    var di = 0; const gaps = [];
    if (!(D.diagnose || []).length) { drawPreOnly(); }
    var drawDiag = () => {
      if (di >= D.diagnose.length) {
        dbox.innerHTML = `<p class="diag-done" data-say="1">${gaps.length
          ? "Danke. Einzelne Bausteine fehlen noch, die blende ich dir jetzt ein."
          : "Danke. Die Grundlagen sitzen, wir steigen direkt ein."}</p>`;
        drawPre(); return;
      }
      var q = D.diagnose[di];
      dbox.innerHTML = `<div class="diag"><span class="diag-lbl">Startcheck ${di + 1} von ${D.diagnose.length} · zählt nicht</span>
        <p data-say="1">${esc(q.q)}</p>
        <div class="opts">${q.options.map((o, i) =>
          `<button class="opt" data-i="${i}"><span class="k">${"ABCD"[i]}</span><span>${esc(o)}</span></button>`).join("")}</div></div>`;
      dbox.querySelectorAll(".opt").forEach((b) => {
        b.onclick = () => { if (+b.dataset.i !== q.answer && q.gap) gaps.push(q.gap); di += 1; drawDiag(); };
      });
    };
    function drawPreOnly() {
      var box = $("#prebox", el);
      if (!(D.prereq || []).length) { box.innerHTML = ""; return; }
      box.innerHTML = `<details class="fold pre-all"><summary>Vorwissen nachschlagen</summary>
        ${D.prereq.map((p) => `<div class="pre-inline"><b>${esc(p.title)}</b><p data-say="1">${esc(p.explain)}</p></div>`).join("")}</details>`;
    }
    var drawPre = () => {
      var box = $("#prebox", el);
      if (gaps.length) {
        var need = D.prereq.filter((p) => gaps.indexOf(p.id) >= 0);
        box.innerHTML = `<p class="pre-lead" data-say="1">Das hier fehlt noch. Ohne diese Bausteine wird der Rest mühsam.</p>`
          + need.map((p) => `<details class="fold pre" open><summary>${esc(p.title)} <span class="tagmini">fehlt dir</span></summary>
            <p data-say="1">${esc(p.explain)}</p><p class="hint" data-say="1">${esc(p.reminder)}</p></details>`).join("");
      } else {
        box.innerHTML = `<details class="fold pre-all"><summary>Vorwissen nachschlagen</summary>
          ${D.prereq.map((p) => `<div class="pre-inline"><b>${esc(p.title)}</b><p data-say="1">${esc(p.explain)}</p></div>`).join("")}</details>`;
      }
    };
    if ((D.diagnose || []).length) drawDiag();

    units.forEach((u, i) => {
      $("#ub-" + i, el).innerHTML = (u.body || []).map((t) => `<p data-say="1">${t}</p>`).join("");
      $("#uv-" + i, el).innerHTML = renderVisual(u.visual);
      if (u.check) M.inlineCheck($("#uc-" + i, el), u.check);
    });
    el.querySelectorAll("[data-more]").forEach((b) => {
      b.onclick = () => {
        var i = +b.dataset.u, kind = b.dataset.more, u = units[i];
        var host = $("#um-" + i, el);
        st.help[kind] = (st.help[kind] || 0) + 1; save();
        if (kind === "help") {
          host.innerHTML = `<div class="help"><b>Kein Problem. Was soll ich versuchen?</b>
            <div class="row"><button class="btn sm" data-h="simple">Einfacher</button>
            <button class="btn sm" data-h="analogy">Anderes Bild</button>
            <button class="btn sm" data-h="prereq">Vorwissen</button></div><div id="ho-${i}"></div></div>`;
          host.querySelectorAll("[data-h]").forEach((x) => {
            x.onclick = () => {
              var k = x.dataset.h, out = $("#ho-" + i, el);
              var idea2 = D.idea || {};
              var txt = k === "simple" ? (u.simple || idea2.kurz) : k === "analogy" ? (u.analogy || idea2.anders) : null;
              out.innerHTML = txt ? txt.map((t) => `<p data-say="1">${t}</p>`).join("")
                : D.prereq.map((p) => `<p data-say="1"><b>${esc(p.title)}.</b> ${esc(p.explain)}</p>`).join("");
              out.innerHTML += `<p class="helpask">Hat das geholfen?
                <button class="lnk" data-ok="1">Ja</button> <button class="lnk" data-ok="0">Noch nicht</button></p>`;
              out.querySelectorAll("[data-ok]").forEach((y) => {
                y.onclick = () => {
                  if (y.dataset.ok === "1") st.help.lastHelpful = k;
                  save();
                  y.parentNode.textContent = y.dataset.ok === "1" ? "Gut, ich merke mir diesen Weg." : "Notiert, probier einen anderen Weg.";
                };
              });
            };
          });
          return;
        }
        var idea = D.idea || {};
        var txt = kind === "simple" ? (u.simple || idea.kurz)
          : kind === "deep" ? (u.deep || idea.tief) : (u.analogy || idea.anders);
        if (!(txt || []).length) { host.innerHTML = ""; b.remove(); return; }
        host.innerHTML = `<div class="more"><span class="more-lbl">${kind === "simple" ? "Einfacher"
          : kind === "deep" ? "Tiefer" : "Andere Darstellung"}</span>
          ${txt.map((t) => `<p data-say="1">${t}</p>`).join("")}</div>`;
      };
    });

    (D.examples || []).forEach((x, i) => {
      var host = el.querySelector(`[data-ex="${i}"]`);
      if (!host) return;
      var steps = host.querySelector(".ex-steps"), foot = host.querySelector(".ex-foot");
      var list = (n) => `<ol class="steps">${x.steps.slice(0, n).map((s) =>
        `<li><span class="do" data-say="1">${esc(s.do)}</span><span class="why" data-say="1">${esc(s.why)}</span></li>`).join("")}</ol>`;
      if (x.mode === "show") { steps.innerHTML = list(x.steps.length); foot.hidden = false; }
      else if (x.mode === "together") {
        var k = 0;
        var draw = () => {
          steps.innerHTML = list(k) + (k < x.steps.length
            ? `<p class="ask"><b>Was kommt jetzt?</b> Formuliere den nächsten Schritt, bevor du aufdeckst.
               <button class="btn sm" id="rv${i}">Nächsten Schritt aufdecken</button></p>` : "");
          var r = steps.querySelector("#rv" + i);
          if (r) r.onclick = () => { k += 1; draw(); if (k >= x.steps.length) foot.hidden = false; };
        };
        draw();
      } else {
        steps.innerHTML = `<p class="ask"><b>Jetzt du.</b> Rechne vollständig auf Papier, dann vergleichen.
          <button class="btn go sm" id="cmp${i}">Vergleich zeigen</button></p>`;
        steps.querySelector("#cmp" + i).onclick = () => { steps.innerHTML = list(x.steps.length); foot.hidden = false; };
      }
    });

    var a = D.clinic;
    if (a) $("#clinicbox", el).innerHTML = `<div class="clinic">
      <p data-say="1"><strong>Aufgabe.</strong> ${esc(a.task)}</p>
      <ol class="wrongsteps">${a.wrong.map((w) => `<li data-say="1">${esc(w)}</li>`).join("")}</ol>
      <p class="res bad">${esc(a.wrongResult)}</p>
      <p class="where" data-say="1">Der Fehler steckt in ${esc(a.where)}.</p>
      <p data-say="1">${esc(a.diagnosis)}</p>
      <ol class="steps">${a.fix.map((w) => `<li><span class="do" data-say="1">${esc(w)}</span></li>`).join("")}</ol>
      <p class="res good">${esc(a.right)}</p>
      <p class="lesson" data-say="1"><strong>Merke.</strong> ${esc(a.lesson)}</p></div>`;

    var tb = $("#teachbox", el);
    if (tb) tb.innerHTML = `<div class="teachback"><p data-say="1"><strong>Jetzt erklärst du es mir.</strong> ${esc(D.teachback.prompt)}</p>
      <textarea rows="4" placeholder="So, wie du es einem Kollegen erklären würdest"></textarea>
      <button class="btn go">Mit der Musterantwort vergleichen</button><div class="tbout"></div></div>`;
    if (tb) tb.querySelector("button").onclick = () => {
      var t = String(tb.querySelector("textarea").value).toLowerCase();
      var hit = D.teachback.keywords.filter((k) => t.includes(k.toLowerCase()));
      var miss = D.teachback.keywords.filter((k) => !t.includes(k.toLowerCase()));
      tb.querySelector(".tbout").innerHTML = `<div class="fb ${hit.length >= Math.ceil(D.teachback.keywords.length * 0.6) ? "ok" : "no"}">
        <span class="v">${hit.length} von ${D.teachback.keywords.length} Kernbegriffen getroffen</span>
        ${miss.length ? `Es fehlen: ${miss.map(esc).join(", ")}.` : "Vollständig."}
        <span class="ref">${esc(D.teachback.model)}</span></div>`;
      st.done.teachback = true; M.save();
    };

    $("#railaudio", el).innerHTML = `<span class="rail-lbl">Vorlesen</span>` + M.listenBarHTML();
    M.mountListen(el, c.id);
    var gb = $("#goalsbtn", el);
    if (gb) gb.onclick = () => M.go("goals", c.id);
    var hr = $("#heroread", el);
    if (hr) hr.onclick = () => {
      if (window.mnVorleser) { if (M.Speech && M.Speech.stop) M.Speech.stop(true); window.mnVorleser.oeffnen(c); return; }
      if (!M.Speech.supported) {
        hr.disabled = true;
        hr.textContent = "Keine Sprachausgabe auf diesem Gerät";
        return;
      }
      if (M.Speech.playing) { M.Speech.pause(); return; }
      var play = $("#l-play", el);
      if (play) play.click();
    };
    var sl = $("#startlesson", el);
    if (sl) sl.onclick = () => {
      var first = el.querySelector(".unit");
      if (first && first.scrollIntoView) { try { first.scrollIntoView({ behavior: "smooth", block: "start" }); } catch (e) {} }
      var h = first && first.querySelector(".unit-title");
      if (h) { h.setAttribute("tabindex", "-1"); h.focus(); }
    };
    var ids = M.chapterQuestions(c).map((q) => q.id);
    var done = ids.filter((id) => S.items[id] && S.items[id].ok > 0).length;
    $("#railbar", el).style.width = (ids.length ? Math.round((done / ids.length) * 100) : 0) + "%";
    $("#railnote", el).textContent = `${done} von ${ids.length} Aufgaben schon einmal richtig`;
  }
})();

/* Fünf Kapitel auf Lehrerqualität. Jedes folgt dem vollen Lernweg und
   trägt eigene Sprechtexte, damit die Sprachausgabe keine rohen
   mathematischen Zeichen interpretieren muss. */
(function () {
  "use strict";
  var M = window.MNEMIKA;
  const { mc, tf, num } = M;
  var A = M.addTeacher;

  /* ============================== 1 ALGEBRA ============================== */
  A("math-algebra", {
    orient: {
      goal: "Am Ende dieser Stunde löst du jede lineare Gleichung sicher und weisst, warum jeder Schritt erlaubt ist.",
      why: "In der schriftlichen Prüfung steckt in fast jeder Aufgabe am Schluss eine Gleichung, die nach einer Grösse aufgelöst werden muss. Auch in Physik und Chemie.",
      time: "rund 40 Minuten",
      can: "eine Gleichung nach jeder Variablen auflösen, die Definitionsmenge bestimmen und deine Lösung selbst kontrollieren.",
    },
    diagnose: [
      { q: "Was ergibt minus sechs geteilt durch minus zwei?", options: ["−3", "3", "−12", "12"], answer: 1, gap: "signs" },
      { q: "Welcher Ausdruck ist gleichwertig zu 3(x − 4)?", options: ["3x − 4", "3x − 12", "x − 12", "3x + 12"], answer: 1, gap: "distrib" },
      { q: "Für welchen Wert von x ist 1/(x − 5) nicht definiert?", options: ["x = 0", "x = 1", "x = 5", "für keinen"], answer: 2, gap: "domain" },
    ],
    prereq: [
      { id: "signs", title: "Vorzeichenregeln beim Teilen und Multiplizieren",
        explain: "Zwei gleiche Vorzeichen ergeben ein Plus, zwei verschiedene ein Minus. Minus sechs geteilt durch minus zwei ergibt deshalb plus drei, nicht minus drei.",
        reminder: "Merksatz: gleich gibt plus, verschieden gibt minus. Das gilt beim Multiplizieren und beim Teilen, nicht beim Addieren." },
      { id: "distrib", title: "Klammern auflösen",
        explain: "Der Faktor vor der Klammer trifft jeden Summanden in der Klammer, nicht nur den ersten. Aus 3 mal Klammer x minus 4 wird 3x minus 12.",
        reminder: "Das Vorzeichen gehört zum Summanden. Bei minus 2 mal Klammer x minus 5 wird die minus 5 zu plus 10." },
      { id: "domain", title: "Definitionsmenge",
        explain: "Ein Nenner darf nie null werden. Setze den Nenner null und schliesse diese Werte aus, bevor du überhaupt anfängst zu rechnen.",
        reminder: "Erst Definitionsmenge, dann umformen, am Schluss die Lösung gegen die Definitionsmenge prüfen." },
    ],
    idea: {
      kurz: ["Eine Gleichung ist eine <strong>Behauptung</strong>, keine Rechenanweisung. Du vereinfachst sie, bis die Antwort dasteht.",
             "Erlaubt ist alles, was du auf <strong>beiden</strong> Seiten gleich machst."],
      normal: ["Ein Term wie <span class=\"kbd\">3x + 7</span> hat keinen Wahrheitswert. Er hat nur einen Wert, sobald du für x eine Zahl einsetzt.",
               "Schreibst du dagegen <span class=\"kbd\">3x + 7 = 22</span>, behauptest du etwas: dass beide Seiten denselben Wert haben. Diese Behauptung ist für manche x wahr und für andere falsch.",
               "Gleichungslösen heisst deshalb nicht ausrechnen, sondern die Behauptung so lange vereinfachen, bis offensichtlich ist, für welche x sie gilt. Jede Umformung muss dabei die Wahrheit unverändert lassen. Solche Umformungen heissen <strong>Äquivalenzumformungen</strong>."],
      tief: ["Formal: Zwei Gleichungen heissen äquivalent, wenn sie dieselbe Lösungsmenge haben. Addition und Subtraktion derselben Zahl sind immer Äquivalenzumformungen, weil sie sich rückgängig machen lassen.",
             "Multiplikation und Division sind es nur für Faktoren ungleich null. Multiplizierst du mit null, wird aus jeder Gleichung die wahre Aussage 0 = 0, und die Information ist weg.",
             "Genau deshalb ist Teilen durch einen Term wie (x − 3) gefährlich: es setzt stillschweigend x ≠ 3 voraus. Ist x = 3 eine Lösung, verlierst du sie unbemerkt.",
             "Bei Ungleichungen kommt eine Besonderheit dazu. Multiplikation mit einer negativen Zahl ist zwar umkehrbar, kehrt aber die Ordnung um. Deshalb dreht sich dort das Vergleichszeichen."],
      anders: ["Stell dir eine Balkenwaage vor. Links liegt <span class=\"kbd\">3x + 7</span>, rechts liegen 22 Gramm. Die Waage steht im Gleichgewicht.",
               "Nimmst du links 7 Gramm weg, kippt sie, es sei denn, du nimmst rechts ebenfalls 7 Gramm weg. Genau das ist eine Äquivalenzumformung.",
               "Jetzt liegen links drei gleiche Päckchen x und rechts 15 Gramm. Drittelst du beide Seiten, bleibt ein Päckchen gegen 5 Gramm. Also wiegt x genau 5.",
               "Die Waage erklärt auch das Verbot: durch null teilen hiesse, beide Seiten in null Teile zu zerlegen. Das ergibt keinen Sinn."],
    },
    help: {
      simpler: ["Ganz einfach: Was du links tust, musst du rechts auch tun. Sonst stimmt die Waage nicht mehr.",
                "Und das Ziel ist immer dasselbe: x soll am Schluss allein auf einer Seite stehen."],
      example: { task: "Ein anderes Beispiel ohne Buchstaben: 5 + ? = 12.",
        steps: ["Auf beiden Seiten 5 abziehen: 5 + ? − 5 = 12 − 5.", "Links bleibt das Fragezeichen allein stehen.", "Rechts steht 7."],
        result: "? = 7" },
    },
    visual: {
      title: "Die Waage bleibt im Gleichgewicht",
      caption: "Was links weggenommen wird, muss rechts ebenfalls weg. Nur dann bleibt die Behauptung wahr.",
      svg: `<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg" class="ill">
        <line x1="160" y1="40" x2="160" y2="135" class="ax"/><line x1="120" y1="135" x2="200" y2="135" class="ax"/>
        <line x1="60" y1="52" x2="260" y2="52" class="curve"/>
        <line x1="60" y1="52" x2="60" y2="78" class="aux2"/><line x1="260" y1="52" x2="260" y2="78" class="aux2"/>
        <rect x="26" y="78" width="68" height="30" rx="6" class="box2"/><text x="34" y="98" class="sym sm">3x + 7</text>
        <rect x="226" y="78" width="68" height="30" rx="6" class="box2"/><text x="250" y="98" class="sym sm">22</text>
        <circle cx="160" cy="52" r="6" class="dot"/>
        <text x="112" y="160" class="lb">beide Seiten gleich behandeln</text></svg>`,
    },
    check: mc("teach-alg-check", "Du hast 3x + 7 = 22. Welcher erste Schritt ist zulässig und bringt dich weiter?",
      ["links 7 abziehen", "auf beiden Seiten 7 abziehen", "beide Seiten durch 3 teilen", "links durch 3 teilen"], 1,
      "Nur was auf beiden Seiten geschieht, erhält die Behauptung. Durch 3 teilen wäre zwar erlaubt, aber unpraktisch, weil dann auch die 7 geteilt werden müsste.",
      { ref: "Abschnitt 04" }),
    formula: {
      question: "Wie bekomme ich x allein, wenn es mit einem Faktor und einem Summanden verbunden ist?",
      words: "Ziehe den konstanten Summanden von beiden Seiten ab, teile danach beide Seiten durch den Faktor vor x.",
      expr: "ax + b = c  ⇒  x = (c − b) / a",
      spoken: "a mal x plus b ist gleich c. Daraus folgt: x ist gleich c minus b, geteilt durch a.",
      params: [
        { sym: "x", name: "die gesuchte Zahl", unit: "", means: "Der Wert, für den die Behauptung wahr wird.",
          allowed: "jede reelle Zahl, sofern die Definitionsmenge nichts ausschliesst", signs: "positiv, negativ oder null",
          inText: "erscheint als «gesuchte Zahl», «Anzahl Stück» oder «nach wie vielen Jahren»",
          effect: "Bei a ungleich null gibt es genau eine Lösung.",
          spoken: "x ist die gesuchte Zahl. Sie kann positiv, negativ oder null sein. Solange a nicht null ist, gibt es genau eine Lösung." },
        { sym: "a", name: "Faktor vor x", unit: "", means: "Wie oft x genommen wird.",
          allowed: "jede reelle Zahl ausser null", signs: "positiv oder negativ, aber nie null",
          inText: "erscheint als Stückpreis, Steigung, Rate oder Verbrauch pro Einheit",
          effect: "Bei festem c minus b gilt: verdoppelst du a, halbiert sich x. Das ist eine umgekehrte Proportionalität. Bei a gleich null ist die Formel nicht anwendbar.",
          spoken: "a ist der Faktor vor x und darf nicht null sein. Bei festem Zähler gilt: verdoppelt sich a, so halbiert sich x. Das ist umgekehrt proportional." },
        { sym: "b", name: "konstanter Summand", unit: "", means: "Der Anteil, der nichts mit x zu tun hat.",
          allowed: "jede reelle Zahl, auch null", signs: "positiv, negativ oder null",
          inText: "erscheint als Grundgebühr, Startwert oder fixe Kosten",
          effect: "b wandert mit umgekehrtem Vorzeichen auf die andere Seite. Wächst b um eins, sinkt x um eins geteilt durch a.",
          spoken: "b ist der konstante Summand. Er wandert mit umgekehrtem Vorzeichen auf die andere Seite. Wächst b um eins, so sinkt x um eins geteilt durch a." },
        { sym: "c", name: "Wert der rechten Seite", unit: "", means: "Das Ziel, das erreicht werden soll.",
          allowed: "jede reelle Zahl", signs: "positiv, negativ oder null",
          inText: "erscheint als Gesamtbetrag, Zielwert oder Endstand",
          effect: "Wächst c um eins, wächst x um eins geteilt durch a. Bei negativem a sinkt x stattdessen.",
          spoken: "c ist der Wert der rechten Seite. Wächst c um eins, so wächst x um eins geteilt durch a. Ist a negativ, so sinkt x." },
      ],
      special: "Bei a = 0 ist die Formel nicht anwendbar, denn dann stünde a im Nenner. Aus 0·x + b = c wird b = c. Stimmt das, ist jede Zahl eine Lösung. Stimmt es nicht, gibt es keine.",
      rearrange: "x = (c − b)/a   ·   a = (c − b)/x, für x ≠ 0   ·   b = c − ax   ·   c = ax + b",
      rearrangeSpoken: "Nach x umgestellt: x ist gleich c minus b, geteilt durch a. Nach b umgestellt: b ist gleich c minus a mal x. Nach c umgestellt: c ist gleich a mal x plus b.",
      why: [
        "Subtrahiert man auf beiden Seiten dieselbe Zahl b, bleibt die Behauptung für genau dieselben x wahr. Links verschwindet dadurch der Summand.",
        "Danach steht links nur noch das Produkt a mal x. Division beider Seiten durch a ist erlaubt, weil a nicht null ist, und macht die Multiplikation rückgängig.",
        "Beide Schritte sind umkehrbar. Genau das macht sie zu Äquivalenzumformungen, und genau deshalb geht dabei keine Lösung verloren.",
      ],
      control: "Setze deine Lösung in die ursprüngliche Gleichung ein und rechne beide Seiten getrennt aus. Kommt zweimal dieselbe Zahl heraus, stimmt es. Diese Probe findet Vorzeichenfehler zuverlässig.",
      notUse: "Nicht anwenden, wenn x auch im Nenner oder unter einer Wurzel steht, wenn x quadriert vorkommt, oder wenn a null sein könnte. In diesen Fällen brauchst du ein anderes Verfahren.",
    },
    examples: [
      { mode: "show", task: "Löse 3x + 7 = 22.",
        interpret: "Eine lineare Gleichung in der Grundform. x kommt einmal und nur in der ersten Potenz vor.",
        given: "a = 3, b = 7, c = 22", wanted: "x", strategy: "Erst den Summanden entfernen, dann durch den Faktor teilen.",
        steps: [
          { do: "3x + 7 − 7 = 22 − 7", why: "Auf beiden Seiten dasselbe abziehen erhält die Behauptung und räumt den Summanden weg." },
          { do: "3x = 15", why: "Links heben sich plus 7 und minus 7 auf, rechts bleibt die Differenz." },
          { do: "3x / 3 = 15 / 3", why: "Division durch 3 ist erlaubt, weil 3 nicht null ist, und macht die Multiplikation rückgängig." },
          { do: "x = 5", why: "Links steht x allein. Damit ist die Lösungsmenge abgelesen." },
        ],
        result: "x = 5", unit: "",
        control: "Probe: 3 mal 5 plus 7 ergibt 22. Beide Seiten stimmen überein.",
        wrongWay: "Falsch wäre, zuerst durch 3 zu teilen und dabei die 7 stehen zu lassen. Dann müsste auch die 7 geteilt werden, sonst ist die Gleichung nicht mehr äquivalent." },
      { mode: "together", task: "Löse 5x − 9 = 2x + 12.",
        interpret: "x steht auf beiden Seiten. Zuerst müssen die x-Terme auf eine Seite.",
        given: "linke Seite 5x − 9, rechte Seite 2x + 12", wanted: "x",
        strategy: "x-Terme sammeln, Zahlen sammeln, dann teilen.",
        steps: [
          { do: "5x − 2x − 9 = 12", why: "Auf beiden Seiten 2x abziehen bringt alle x auf die linke Seite." },
          { do: "3x − 9 = 12", why: "5x minus 2x sind 3x. Rechts bleibt nur die Zahl." },
          { do: "3x = 21", why: "Auf beiden Seiten 9 addieren räumt den Summanden weg." },
          { do: "x = 7", why: "Beide Seiten durch 3 teilen isoliert x." },
        ],
        result: "x = 7", unit: "",
        control: "Probe: links 5 mal 7 minus 9 ergibt 26, rechts 2 mal 7 plus 12 ergibt 26.",
        wrongWay: "Häufig wird 2x nur links abgezogen und rechts vergessen. Dann entsteht 3x − 9 = 2x + 12 und die Rechnung ist ab da falsch." },
      { mode: "you", task: "Ein Handyabo kostet 19 Franken Grundgebühr plus 0,25 Franken je Minute. Wie viele Minuten sind in einer Rechnung von 34 Franken enthalten?",
        interpret: "Eine Textaufgabe in der Grundform ax + b = c. Die Grundgebühr ist b, der Minutenpreis ist a.",
        given: "b = 19 Franken, a = 0,25 Franken pro Minute, c = 34 Franken", wanted: "die Anzahl Minuten x",
        strategy: "Gleichung aufstellen, Grundgebühr abziehen, durch den Minutenpreis teilen.",
        steps: [
          { do: "0,25x + 19 = 34", why: "Die Rechnung besteht aus fixer Gebühr plus variablem Anteil." },
          { do: "0,25x = 15", why: "Auf beiden Seiten 19 abziehen entfernt die Grundgebühr." },
          { do: "x = 15 / 0,25", why: "Division durch den Minutenpreis isoliert die Minutenzahl." },
          { do: "x = 60", why: "15 geteilt durch 0,25 ist dasselbe wie 15 mal 4." },
        ],
        result: "60", unit: "Minuten",
        control: "Probe: 60 mal 0,25 ergibt 15 Franken, plus 19 Franken Grundgebühr ergibt 34 Franken.",
        wrongWay: "Ein häufiger Fehler ist, 34 direkt durch 0,25 zu teilen und die Grundgebühr zu vergessen. Das ergäbe 136 Minuten, also mehr als das Doppelte." },
    ],
    clinic: {
      task: "Löse 3x + 12 = 5x − 4.",
      wrong: ["3x + 12 = 5x − 4", "3x = 5x − 16", "3x − 5x = −16", "−2x = −16", "x = −8"],
      wrongResult: "x = −8", where: "Schritt 5",
      diagnosis: "Bis Schritt 4 ist alles korrekt. Dann wird minus 16 durch minus 2 geteilt und das Ergebnis negativ notiert. Zwei negative Zahlen geteilt ergeben aber ein positives Resultat. Genau diese Vorzeichenregel war schon im Startcheck die erste Frage.",
      fix: ["−2x = −16", "beide Seiten durch −2 teilen", "x = (−16)/(−2) = +8"],
      right: "x = 8",
      lesson: "Mach immer die Probe. Mit x = 8 ergeben beide Seiten 36. Mit x = −8 käme links −12 und rechts −44 heraus, der Fehler wäre sofort aufgefallen.",
    },
    essence: [
      "Eine Gleichung ist eine Behauptung. Umformen heisst vereinfachen, nicht ausrechnen.",
      "Jede Operation trifft die gesamte linke und die gesamte rechte Seite.",
      "Definitionsmenge vor der ersten Umformung bestimmen, Lösung am Schluss dagegen prüfen.",
      "Durch einen Term mit x nur teilen, wenn gesichert ist, dass er nicht null wird.",
      "Bei Ungleichungen dreht Multiplikation oder Division mit einer negativen Zahl das Vergleichszeichen.",
    ],
    teachback: {
      prompt: "Erkläre mir in eigenen Worten, warum man eine Gleichung überhaupt umformen darf, und warum das Teilen durch null verboten ist.",
      keywords: ["beide Seiten", "Lösungsmenge", "Behauptung", "null", "umkehrbar"],
      model: "Eine Gleichung behauptet, dass zwei Terme denselben Wert haben. Führt man auf beiden Seiten dieselbe umkehrbare Operation aus, bleibt diese Behauptung für genau dieselben x wahr, die Lösungsmenge ändert sich also nicht. Multiplikation mit null ist nicht umkehrbar: aus jeder Gleichung würde 0 = 0, und die Information wäre verloren. Deshalb ist Teilen durch null verboten und Teilen durch einen Term mit x nur erlaubt, wenn er sicher nicht null wird.",
    },
    mission: { title: "Kapitelmission Algebra",
      text: "Zwölf Aufgaben zu genau diesem Stoff, von der Grundform bis zur Bruchgleichung. Falsche Antworten kommen zurück, unsichere ebenfalls." },
  });

  /* ============================== 2 KINEMATIK ============================== */
  A("phys-kinematics", {
    orient: {
      goal: "Am Ende unterscheidest du Weg, Geschwindigkeit und Beschleunigung sauber und liest jedes Diagramm richtig.",
      why: "Fast jede Mechanikaufgabe beginnt hier. Wer die drei Grössen verwechselt, rechnet den Rest zwangsläufig falsch.",
      time: "rund 45 Minuten",
      can: "Einheiten korrekt umrechnen, s-t und v-t-Diagramme lesen und Beschleunigungsaufgaben lösen.",
    },
    diagnose: [
      { q: "Wie viele Sekunden hat eine Stunde?", options: ["60", "600", "3600", "86400"], answer: 2, gap: "units" },
      { q: "Ein Auto fährt 72 km/h. Wie viel ist das in Metern pro Sekunde?", options: ["7,2", "20", "72", "259"], answer: 1, gap: "convert" },
      { q: "Was zeigt die Steigung in einem Weg-Zeit-Diagramm?", options: ["den Weg", "die Zeit", "die Geschwindigkeit", "die Beschleunigung"], answer: 2, gap: "graph" },
    ],
    prereq: [
      { id: "units", title: "Zeiteinheiten", explain: "Eine Stunde hat 60 Minuten zu je 60 Sekunden, also 3600 Sekunden. Ein Kilometer hat 1000 Meter.",
        reminder: "Aus 3600 geteilt durch 1000 folgt der berühmte Faktor 3,6 zwischen km/h und m/s." },
      { id: "convert", title: "km/h in m/s umrechnen", explain: "Teile durch 3,6, um von Kilometern pro Stunde auf Meter pro Sekunde zu kommen. Umgekehrt multiplizierst du mit 3,6.",
        reminder: "72 geteilt durch 3,6 ergibt 20 Meter pro Sekunde. Eine gute Kontrolle: der Zahlenwert in m/s ist immer kleiner." },
      { id: "graph", title: "Steigung eines Diagramms", explain: "Die Steigung ist Höhenänderung geteilt durch Breitenänderung. In einem Weg-Zeit-Diagramm ist das Weg pro Zeit, also die Geschwindigkeit.",
        reminder: "Steil bedeutet schnell, waagrecht bedeutet Stillstand." },
    ],
    idea: {
      kurz: ["Geschwindigkeit ist Weg pro Zeit. Beschleunigung ist Geschwindigkeitsänderung pro Zeit.",
             "Beide sind <strong>Verhältnisse</strong>, keine Zustände."],
      normal: ["Der <strong>Ort</strong> sagt, wo etwas ist. Die <strong>Strecke</strong> sagt, wie weit es insgesamt gefahren ist. Die <strong>Verschiebung</strong> sagt nur, wie weit Anfang und Ende auseinanderliegen.",
               "Die <strong>Geschwindigkeit</strong> ist als Weg pro Zeit definiert. Sie sagt nicht, wie weit gefahren wurde, sondern wie viel Weg pro Zeiteinheit anfällt. Deshalb ist ihre Einheit ein Bruch: Meter pro Sekunde.",
               "Die <strong>Beschleunigung</strong> ist die Änderung der Geschwindigkeit pro Zeit. Die Einheit m/s² bedeutet wörtlich: pro Sekunde kommen so viele Meter pro Sekunde dazu. Bremsen ist ebenfalls eine Beschleunigung, nur mit umgekehrtem Vorzeichen."],
      tief: ["Streng genommen sind Ort, Geschwindigkeit und Beschleunigung Vektoren. Sie haben Betrag und Richtung. Deshalb ist eine Kurvenfahrt mit konstantem Tempo beschleunigt, obwohl der Tacho denselben Wert zeigt: die Richtung ändert sich.",
             "Mathematisch ist die Geschwindigkeit die Ableitung des Ortes nach der Zeit und die Beschleunigung die Ableitung der Geschwindigkeit. Daraus folgt die Diagrammregel unmittelbar: die Steigung im s-t-Diagramm ist v, die Steigung im v-t-Diagramm ist a.",
             "Umgekehrt ist der Weg das Integral der Geschwindigkeit. Deshalb ist die Fläche unter der v-t-Kurve der zurückgelegte Weg. Bei gleichmässiger Beschleunigung aus der Ruhe ist diese Fläche ein Dreieck, und aus der halben Grundseite mal Höhe folgt s gleich ein halb a t Quadrat.",
             "Die mittlere Geschwindigkeit ist Gesamtweg durch Gesamtzeit, nicht der Durchschnitt der Einzelgeschwindigkeiten. Das ist ein häufiger Prüfungsfehler bei Hin- und Rückfahrten."],
      anders: ["Denk an einen Wasserhahn. Der <strong>Wasserstand</strong> im Eimer ist der Weg. Wie schnell der Pegel steigt, ist die <strong>Geschwindigkeit</strong>. Ob du den Hahn weiter aufdrehst, ist die <strong>Beschleunigung</strong>.",
               "Steht der Hahn fest, steigt der Pegel gleichmässig: konstante Geschwindigkeit, keine Beschleunigung.",
               "Drehst du auf, steigt der Pegel immer schneller. Der Wasserstand wächst dann nicht mehr gleichmässig, sondern quadratisch mit der Zeit. Genau das beschreibt s gleich ein halb a t Quadrat.",
               "Und ein zugedrehter Hahn heisst nicht, dass der Eimer leer ist. Geschwindigkeit null bedeutet nicht Weg null."],
    },
    help: {
      simpler: ["Nur drei Wörter: Ort, Tempo, Tempoänderung. Mehr ist Kinematik nicht.",
                "Und jede Einheit verrät dir, was gemeint ist. Meter ist ein Ort. Meter pro Sekunde ist ein Tempo. Meter pro Sekunde pro Sekunde ist eine Tempoänderung."],
      example: { task: "Ganz konkret: Du gehst 100 Meter in 50 Sekunden.",
        steps: ["Geschwindigkeit ist Weg geteilt durch Zeit.", "100 Meter geteilt durch 50 Sekunden.", "Das ergibt 2 Meter pro Sekunde, also rund 7,2 Kilometer pro Stunde."],
        result: "v = 2 m/s" },
    },
    visual: {
      title: "Die Fläche unter der v-t-Kurve ist der Weg",
      caption: "Im Weg-Zeit-Diagramm ist die Steigung die Geschwindigkeit. Im Geschwindigkeit-Zeit-Diagramm ist die Fläche der Weg.",
      svg: `<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg" class="ill">
        <line x1="25" y1="140" x2="145" y2="140" class="ax"/><line x1="25" y1="140" x2="25" y2="28" class="ax"/>
        <line x1="25" y1="140" x2="135" y2="44" class="curve"/><text x="40" y="160" class="lb">s-t: Steigung = v</text>
        <line x1="185" y1="140" x2="305" y2="140" class="ax"/><line x1="185" y1="140" x2="185" y2="28" class="ax"/>
        <line x1="185" y1="132" x2="300" y2="48" class="curve"/>
        <path d="M185 132 L300 48 L300 140 L185 140 Z" class="bar"/>
        <text x="206" y="160" class="lb">v-t: Fläche = s</text></svg>`,
    },
    check: mc("teach-kin-check", "Ein Auto fährt mit konstantem Tempo durch eine Kurve. Ist es beschleunigt?",
      ["nein, das Tempo bleibt gleich", "ja, weil sich die Richtung ändert", "nur beim Bremsen", "nur bergauf"], 1,
      "Geschwindigkeit hat Betrag und Richtung. Ändert sich die Richtung, ändert sich die Geschwindigkeit, also liegt eine Beschleunigung vor, auch wenn der Tacho denselben Wert zeigt.",
      { ref: "Abschnitt 04, Tiefe Erklärung" }),
    formula: {
      question: "Wie weit kommt ein Körper, der aus der Ruhe gleichmässig beschleunigt?",
      words: "Der Weg ist die Hälfte der Beschleunigung mal dem Quadrat der Zeit.",
      expr: "s = ½ · a · t²",
      spoken: "s ist gleich ein halb mal a mal t hoch zwei.",
      params: [
        { sym: "s", name: "zurückgelegter Weg", unit: "m", means: "Die Strecke seit dem Start.",
          allowed: "null oder positiv, wenn in Bewegungsrichtung gezählt wird", signs: "negativ nur bei entgegengesetzter Zählrichtung",
          inText: "erscheint als Bremsweg, Startstrecke, Fallhöhe oder Anlauf",
          effect: "Wächst quadratisch mit der Zeit. Doppelte Zeit bedeutet vierfache Strecke, nicht doppelte.",
          spoken: "s ist der zurückgelegte Weg in Metern. Er wächst quadratisch mit der Zeit: doppelte Zeit bedeutet vierfache Strecke." },
        { sym: "a", name: "Beschleunigung", unit: "m/s²", means: "Wie stark sich die Geschwindigkeit pro Sekunde ändert.",
          allowed: "jede reelle Zahl, konstant über den betrachteten Abschnitt", signs: "positiv beim Beschleunigen, negativ beim Bremsen",
          inText: "erscheint als «beschleunigt mit», «bremst mit» oder als Erdbeschleunigung g",
          effect: "Bei fester Zeit ist s direkt proportional zu a: doppelte Beschleunigung bedeutet doppelte Strecke.",
          spoken: "a ist die Beschleunigung in Metern pro Sekunde zum Quadrat. Bei fester Zeit ist der Weg direkt proportional zu a." },
        { sym: "t", name: "Zeit seit dem Start", unit: "s", means: "Wie lange bereits beschleunigt wird.",
          allowed: "null oder positiv", signs: "nie negativ",
          inText: "erscheint als «nach drei Sekunden» oder «innerhalb von»",
          effect: "Steht im Quadrat und ist deshalb die einflussreichste Grösse. Dreifache Zeit bedeutet neunfache Strecke.",
          spoken: "t ist die Zeit seit dem Start, in Sekunden. Sie steht im Quadrat und ist deshalb die einflussreichste Grösse." },
        { sym: "½", name: "Mittelungsfaktor", unit: "", means: "Er kommt daher, dass die Geschwindigkeit von null auf den Endwert wächst.",
          allowed: "fest", signs: "immer positiv",
          inText: "wird in Textaufgaben nie genannt, gehört aber immer dazu",
          effect: "Ohne ihn wäre das Ergebnis genau doppelt so gross. Er ist die halbe Grundseite mal Höhe des Dreiecks im v-t-Diagramm.",
          spoken: "Der Faktor ein halb stammt aus der Dreiecksfläche im Geschwindigkeit-Zeit-Diagramm. Wer ihn vergisst, erhält den doppelten Weg." },
      ],
      special: "Bei a = 0 ergibt die Formel s = 0. Das ist korrekt nur für einen Start aus der Ruhe. Fährt der Körper mit v₀ los, gilt die erweiterte Form s = v₀·t + ½·a·t². Bei t = 0 ist der Weg null, unabhängig von a.",
      rearrange: "s = ½at²   ·   a = 2s / t²   ·   t = √(2s / a)   ·   ohne Zeit: v² = 2as",
      rearrangeSpoken: "Nach a umgestellt: a ist gleich zwei s geteilt durch t hoch zwei. Nach t umgestellt: t ist gleich die Wurzel aus zwei s geteilt durch a. Ohne Zeit gilt: v hoch zwei ist gleich zwei a s.",
      why: [
        "Bei konstanter Beschleunigung wächst die Geschwindigkeit linear von null auf den Endwert a mal t. Im Geschwindigkeit-Zeit-Diagramm ist das eine Gerade durch den Ursprung.",
        "Der zurückgelegte Weg ist die Fläche unter dieser Geraden. Diese Fläche ist ein rechtwinkliges Dreieck mit der Grundseite t und der Höhe a mal t.",
        "Die Dreiecksfläche ist halbe Grundseite mal Höhe, also ein halb mal t mal a mal t. Zusammengefasst ergibt das ein halb a t Quadrat. Genau daher stammt der Faktor ein halb.",
      ],
      control: "Einheitenprobe: m/s² mal s² ergibt Meter. Plausibilitätsprobe: Bei 2 m/s² und 3 Sekunden erwartest du 9 Meter, also deutlich weniger als die Endgeschwindigkeit von 6 m/s mal 3 Sekunden gleich 18 Meter, weil der Körper ja bei null startet.",
      notUse: "Nicht anwenden, wenn die Beschleunigung nicht konstant ist, wenn der Körper mit Anfangsgeschwindigkeit startet, oder wenn Luftwiderstand ausdrücklich berücksichtigt werden soll.",
    },
    examples: [
      { mode: "show", task: "Ein Auto beschleunigt aus dem Stand mit 3 m/s². Wie weit kommt es in 4 Sekunden?",
        interpret: "Start aus der Ruhe, also v₀ = 0. Die Grundform ist anwendbar.",
        given: "a = 3 m/s², t = 4 s, v₀ = 0", wanted: "der Weg s", strategy: "Direkt in s = ½at² einsetzen.",
        steps: [
          { do: "s = ½ · 3 · 4²", why: "Einsetzen der gegebenen Werte in die Grundform." },
          { do: "s = ½ · 3 · 16", why: "Zuerst das Quadrat rechnen, denn Potenz geht vor Multiplikation." },
          { do: "s = 24", why: "Ein halb mal 48 ergibt 24." },
        ],
        result: "24", unit: "m",
        control: "Einheiten: m/s² mal s² ergibt m. Die Endgeschwindigkeit wäre 12 m/s, bei konstanten 12 m/s wären es 48 Meter. Weil der Wagen bei null startet, ist die Hälfte plausibel.",
        wrongWay: "Ein häufiger Fehler ist, den Faktor ein halb wegzulassen. Dann käme 48 Meter heraus, also genau das Doppelte." },
      { mode: "together", task: "Ein Zug bremst aus 30 m/s mit 1,5 m/s² bis zum Stillstand. Wie lang ist der Bremsweg?",
        interpret: "Endgeschwindigkeit ist null, Anfangsgeschwindigkeit bekannt, Zeit unbekannt. Die zeitfreie Form ist der kürzere Weg.",
        given: "v₀ = 30 m/s, v = 0, a = −1,5 m/s²", wanted: "der Bremsweg s",
        strategy: "Die zeitfreie Beziehung v² = v₀² + 2as benutzen, damit die Zeit gar nicht erst gebraucht wird.",
        steps: [
          { do: "0 = 30² + 2 · (−1,5) · s", why: "Die Endgeschwindigkeit ist null, das Vorzeichen von a ist negativ, weil gebremst wird." },
          { do: "0 = 900 − 3s", why: "30 zum Quadrat sind 900, und 2 mal 1,5 sind 3." },
          { do: "3s = 900", why: "Beide Seiten umstellen, damit s allein auf einer Seite steht." },
          { do: "s = 300", why: "Beide Seiten durch 3 teilen." },
        ],
        result: "300", unit: "m",
        control: "Plausibilität: Bei 30 m/s, also 108 km/h, sind 300 Meter Bremsweg realistisch für eine schwache Verzögerung. Einheiten: (m/s)² geteilt durch m/s² ergibt Meter.",
        wrongWay: "Wer das negative Vorzeichen der Bremsbeschleunigung vergisst, erhält einen negativen Bremsweg. Ein negativer Weg in Fahrtrichtung ist immer ein Vorzeichenfehler." },
      { mode: "you", task: "Ein Stein wird aus 45 Metern Höhe fallen gelassen. Wie lange fällt er, und mit welcher Geschwindigkeit trifft er auf? Rechne mit g = 9,81 m/s² und ohne Luftwiderstand.",
        interpret: "Freier Fall aus der Ruhe. Die Fallhöhe entspricht dem Weg, die Erdbeschleunigung der Beschleunigung.",
        given: "s = 45 m, a = g = 9,81 m/s², v₀ = 0", wanted: "Fallzeit t und Aufprallgeschwindigkeit v",
        strategy: "Erst die Zeit über die umgestellte Wegformel, dann die Geschwindigkeit über v = g·t.",
        steps: [
          { do: "t = √(2s / g) = √(90 / 9,81)", why: "Die Wegformel nach der Zeit umgestellt, denn die Zeit ist zuerst gesucht." },
          { do: "t = √9,174 ≈ 3,03 s", why: "Die Wurzel liefert die Fallzeit in Sekunden." },
          { do: "v = g · t = 9,81 · 3,03", why: "Die Geschwindigkeit wächst linear mit der Zeit." },
          { do: "v ≈ 29,7 m/s", why: "Das sind rund 107 Kilometer pro Stunde." },
        ],
        result: "t ≈ 3,0 s, v ≈ 29,7", unit: "m/s",
        control: "Gegenprobe ohne Zeit: v = √(2gh) = √(2 · 9,81 · 45) = √882,9 ≈ 29,7 m/s. Beide Wege führen zum selben Ergebnis.",
        wrongWay: "Ein häufiger Fehler ist, die Fallzeit mit der Fallhöhe zu verwechseln und v = g mal s zu rechnen. Das ergäbe 441 und hätte nicht einmal die Einheit einer Geschwindigkeit." },
    ],
    clinic: {
      task: "Ein Körper fällt aus 20 m Höhe. Mit welcher Geschwindigkeit trifft er auf?",
      wrong: ["Energieerhaltung: m·g·h = ½·m·v²", "m kürzen: g·h = ½·v²", "v = g·h / 2 = 9,81 · 20 / 2", "v = 98,1 m/s"],
      wrongResult: "v = 98,1 m/s", where: "Schritt 3",
      diagnosis: "Beim Auflösen wurde das Quadrat ignoriert. Aus g mal h gleich ein halb v Quadrat folgt zuerst v Quadrat gleich zwei g h, und daraus muss die Wurzel gezogen werden. Stattdessen wurde durch zwei geteilt, als stünde v linear da.",
      fix: ["g·h = ½·v²", "mit 2 multiplizieren: v² = 2·g·h = 392,4", "Wurzel ziehen: v = √392,4 ≈ 19,8 m/s"],
      right: "v ≈ 19,8 m/s",
      lesson: "98 Meter pro Sekunde wären 353 Kilometer pro Stunde aus 20 Metern Fall. Eine kurze Plausibilitätsprüfung hätte den Fehler sofort gezeigt.",
    },
    essence: [
      "Geschwindigkeit ist Weg pro Zeit, Beschleunigung ist Geschwindigkeitsänderung pro Zeit.",
      "km/h geteilt durch 3,6 ergibt m/s.",
      "Im s-t-Diagramm ist die Steigung die Geschwindigkeit, im v-t-Diagramm die Fläche der Weg.",
      "Bei gleichmässiger Beschleunigung wächst die Geschwindigkeit linear, der Weg quadratisch.",
      "Auch eine Kurvenfahrt mit konstantem Tempo ist beschleunigt, weil sich die Richtung ändert.",
    ],
    teachback: {
      prompt: "Erkläre mir, warum in s = ½at² der Faktor ein halb steht und warum der Weg quadratisch mit der Zeit wächst.",
      keywords: ["Fläche", "Dreieck", "v-t", "linear", "quadratisch"],
      model: "Bei konstanter Beschleunigung wächst die Geschwindigkeit linear von null auf a mal t. Im Geschwindigkeit-Zeit-Diagramm ist das eine Gerade, und der zurückgelegte Weg ist die Fläche darunter. Diese Fläche ist ein Dreieck mit Grundseite t und Höhe a mal t, also halbe Grundseite mal Höhe. Daraus folgt der Faktor ein halb. Weil sowohl die Grundseite als auch die Höhe mit der Zeit wachsen, geht die Zeit zweimal ein, und der Weg wächst quadratisch.",
    },
    mission: { title: "Kapitelmission Kinematik", text: "Aufgaben zu Einheiten, Diagrammen, Beschleunigung und freiem Fall. Mit Einheitenkontrolle bei jeder Zahlenantwort." },
  });
})();

/* Lehrer-Kapitel 3 bis 5: Stöchiometrie, Zellbiologie, Regionalgeografie USA.
   Bei Zellbiologie und Geografie ersetzt ein Denkmodell die Formel. */
(function () {
  "use strict";
  var M = window.MNEMIKA;
  const { mc, tf, num } = M;
  var A = M.addTeacher;

  /* ========================= 3 STÖCHIOMETRIE ========================= */
  A("chem-concentration-stoich", {
    orient: {
      goal: "Am Ende rechnest du von einer gewogenen Masse über die Stoffmenge zur Produktmenge und wieder zurück.",
      why: "Das ist der rechnerische Kern der Chemieprüfung. Ohne diesen Weg lässt sich keine quantitative Aufgabe lösen.",
      time: "rund 45 Minuten",
      can: "Massen in Mol umrechnen, über die Reaktionsgleichung weiterrechnen und den limitierenden Stoff bestimmen.",
    },
    diagnose: [
      { q: "Wie schwer ist ein Mol Wasser, H₂O?", options: ["2 g", "16 g", "18 g", "100 g"], answer: 2, gap: "molmass" },
      { q: "Was geben die Koeffizienten 2 H₂ + O₂ → 2 H₂O an?", options: ["Massenverhältnisse in Gramm", "Teilchen- und damit Stoffmengenverhältnisse", "Volumina in Litern", "Konzentrationen"], answer: 1, gap: "coeff" },
      { q: "Du hast 0,5 mol eines Stoffs mit M = 40 g/mol. Welche Masse?", options: ["8 g", "20 g", "40 g", "80 g"], answer: 1, gap: "rearr" },
    ],
    prereq: [
      { id: "molmass", title: "Molare Masse aus dem Periodensystem", explain: "Die molare Masse ist die Summe der Atommassen der Formel, in Gramm pro Mol. Wasser hat zweimal Wasserstoff zu je 1 und einmal Sauerstoff mit 16, zusammen 18 Gramm pro Mol.",
        reminder: "Die Zahl aus dem Periodensystem ist zugleich die Masse eines Mols in Gramm. Das ist die ganze Idee des Mols." },
      { id: "coeff", title: "Koeffizienten lesen", explain: "Die Zahlen vor den Formeln geben an, wie viele Teilchen reagieren, nicht wie viele Gramm. Ein Sauerstoffmolekül ist sechzehnmal schwerer als ein Wasserstoffmolekül.",
        reminder: "Koeffizienten sind Teilchenverhältnisse. Deshalb führt jeder Rechenweg zuerst über die Stoffmenge." },
      { id: "rearr", title: "n = m / M umstellen", explain: "Aus Stoffmenge gleich Masse geteilt durch molare Masse folgt Masse gleich Stoffmenge mal molare Masse. 0,5 mol mal 40 Gramm pro Mol ergibt 20 Gramm.",
        reminder: "Die Einheiten zeigen dir die Richtung: mol mal g/mol ergibt g, das mol kürzt sich weg." },
    ],
    idea: {
      kurz: ["Chemie rechnet in <strong>Teilchen</strong>, gewogen wird in <strong>Gramm</strong>.",
             "Das Mol ist die Brücke dazwischen. Jeder Rechenweg geht über diese Brücke."],
      normal: ["Atome sind zu klein, um einzeln gezählt zu werden. Deshalb rechnet die Chemie mit Paketen fester Grösse, genau wie ein Dutzend zwölf Stück meint. Ein <strong>Mol</strong> enthält rund 6,022 mal zehn hoch dreiundzwanzig Teilchen.",
               "Diese Zahl ist so gewählt, dass ein Mol eines Stoffes genau so viele Gramm wiegt, wie seine Atom- oder Molekülmasse angibt. Deshalb liest du die molare Masse direkt aus dem Periodensystem ab.",
               "Die Koeffizienten einer Reaktionsgleichung geben Teilchenverhältnisse an, also Molverhältnisse, niemals Massenverhältnisse. Deshalb folgt jeder Rechenweg demselben Schema: Masse in Mol umrechnen, im Molverhältnis weiterrechnen, am Schluss zurück in Masse oder Volumen."],
      tief: ["Der Umweg über das Mol ist nicht Konvention, sondern zwingend. Eine Reaktionsgleichung ist eine Bilanz über Teilchen. 2 H₂ + O₂ heisst: auf zwei Wasserstoffmoleküle kommt ein Sauerstoffmolekül. Über Massen sagt das zunächst nichts.",
             "Erst die molare Masse verknüpft beide Welten. Sie ist der Umrechnungsfaktor zwischen der zählbaren und der wägbaren Grösse. Formal ist n = m / M, und die Einheit g geteilt durch g pro mol ergibt mol.",
             "Sind zwei Ausgangsstoffe in bestimmter Menge gegeben, ist meist einer zuerst aufgebraucht. Dieser <strong>limitierende Stoff</strong> begrenzt die Produktmenge. Man findet ihn, indem man für jeden Ausgangsstoff die theoretisch mögliche Produktmenge berechnet und den kleineren Wert nimmt.",
             "Bei Gasen unter Normbedingungen kommt eine dritte Brücke dazu: ein Mol nimmt rund 22,4 Liter ein, unabhängig davon, welches Gas es ist. Das folgt aus dem Satz von Avogadro."],
      anders: ["Denk an ein Rezept. Für einen Hotdog brauchst du ein Brötchen und eine Wurst. Das Rezept sagt <em>Stückzahlen</em>, nicht Gramm.",
               "Du hast zehn Brötchen und drei Würste. Wie viele Hotdogs? Drei. Die Würste sind der limitierende Stoff, sieben Brötchen bleiben übrig.",
               "Jetzt die Chemie: Das Rezept ist die Reaktionsgleichung, die Stückzahlen sind die Koeffizienten, und das Mol ist die Packungsgrösse.",
               "Und genau wie du Brötchen nicht nach Gewicht mit Würsten vergleichen würdest, vergleichst du in der Chemie nie Gramm mit Gramm, sondern immer Mol mit Mol."],
    },
    help: {
      simpler: ["Drei Schritte, immer dieselben: Gramm rein, Mol rechnen, Gramm raus.",
                "Die Reaktionsgleichung sagt dir nur, wie du in der Mitte von einem Stoff zum anderen kommst."],
      example: { task: "Ganz klein: Wie viele Mol sind 36 Gramm Wasser?",
        steps: ["Molare Masse von Wasser: zweimal 1 plus 16 ergibt 18 Gramm pro Mol.", "Stoffmenge ist Masse geteilt durch molare Masse.", "36 geteilt durch 18 ergibt 2."],
        result: "n = 2 mol" },
    },
    visual: {
      title: "Die Brücke über das Mol",
      caption: "Nie direkt von Gramm zu Gramm. Immer über die Stoffmenge und die Koeffizienten der Gleichung.",
      svg: `<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg" class="ill">
        <rect x="14" y="96" width="74" height="34" rx="8" class="box2"/><text x="30" y="118" class="sym sm">Masse A</text>
        <rect x="112" y="34" width="74" height="34" rx="8" class="box2 hi-b"/><text x="130" y="56" class="sym sm">Mol A</text>
        <rect x="214" y="34" width="74" height="34" rx="8" class="box2 hi-b"/><text x="232" y="56" class="sym sm">Mol B</text>
        <rect x="232" y="96" width="74" height="34" rx="8" class="box2"/><text x="248" y="118" class="sym sm">Masse B</text>
        <path d="M62 96 L128 72" class="hi"/><polygon points="128,72 117,71 121,79" class="hih"/>
        <path d="M190 51 L210 51" class="sum"/><polygon points="210,51 199,47 199,56" class="sumh"/>
        <path d="M258 72 L268 94" class="hi"/><polygon points="268,94 265,83 257,87" class="hih"/>
        <text x="40" y="86" class="lb">÷ M</text><text x="186" y="30" class="lb">Koeffizienten</text>
        <text x="272" y="86" class="lb">× M</text>
        <path d="M96 148 L236 148" class="aux2"/><text x="112" y="163" class="lb hi-t">niemals direkt</text></svg>`,
    },
    check: mc("teach-stoi-check", "2 H₂ + O₂ → 2 H₂O. Du hast 4 g Wasserstoff. Wie viel Sauerstoff wird verbraucht?",
      ["2 g", "4 g", "16 g", "32 g"], 3,
      "4 g Wasserstoff sind 2 mol. Das Verhältnis H₂ zu O₂ ist 2 zu 1, also wird 1 mol Sauerstoff verbraucht. Ein Mol O₂ wiegt 32 g. Wer die Massen direkt halbiert, kommt fälschlich auf 2 g.",
      { ref: "Abschnitt 04" }),
    formula: {
      question: "Wie rechne ich zwischen einer wägbaren Masse und einer zählbaren Teilchenmenge um?",
      words: "Die Stoffmenge ist die Masse geteilt durch die molare Masse.",
      expr: "n = m / M",
      spoken: "n ist gleich m geteilt durch gross M.",
      params: [
        { sym: "n", name: "Stoffmenge", unit: "mol", means: "Eine Anzahl Pakete zu je 6,022 mal zehn hoch dreiundzwanzig Teilchen.",
          allowed: "null oder positiv", signs: "nie negativ",
          inText: "erscheint selten direkt, meist als Zwischengrösse im Rechenweg",
          effect: "Bei gleichem Stoff ist n direkt proportional zur Masse: doppelte Masse bedeutet doppelte Stoffmenge.",
          spoken: "n ist die Stoffmenge in Mol. Sie ist bei gleichem Stoff direkt proportional zur Masse." },
        { sym: "m", name: "Masse", unit: "g", means: "Die gewogene Masse der Probe.",
          allowed: "null oder positiv", signs: "nie negativ",
          inText: "erscheint als «5 Gramm Natrium» oder «eine Tablette mit 500 Milligramm»",
          effect: "Direkt proportional zu n. Verdoppelst du die Einwaage, verdoppelt sich die Stoffmenge.",
          spoken: "m ist die gewogene Masse in Gramm. Milligramm müssen vorher umgerechnet werden." },
        { sym: "M", name: "molare Masse", unit: "g/mol", means: "Die Masse eines Mols, aus dem Periodensystem ablesbar.",
          allowed: "positiv, stoffspezifisch", signs: "immer positiv",
          inText: "wird meist nicht genannt, sondern aus der Formel des Stoffes berechnet",
          effect: "Steht im Nenner, wirkt also umgekehrt: bei gleicher Masse enthält ein schwerer Stoff weniger Teilchen. 10 g Wasserstoff sind 5 mol, 10 g Blei nur rund 0,05 mol.",
          spoken: "Gross M ist die molare Masse in Gramm pro Mol. Sie steht im Nenner. Bei gleicher Masse enthält ein schwerer Stoff deshalb weniger Teilchen." },
      ],
      special: "Bei M = 0 ist die Formel nicht anwendbar, ein solcher Stoff existiert nicht. Bei m = 0 ist auch n gleich null. Achtung bei Ionenverbindungen: dort ist M die Masse der Verhältnisformel, nicht eines Moleküls, denn NaCl-Moleküle gibt es nicht.",
      rearrange: "n = m / M   ·   m = n · M   ·   M = m / n   ·   Teilchenzahl: N = n · 6,022·10²³   ·   Gase bei Normbedingungen: V = n · 22,4 l/mol",
      rearrangeSpoken: "Nach der Masse umgestellt: m ist gleich n mal gross M. Nach der molaren Masse: gross M ist gleich m geteilt durch n. Die Teilchenzahl ist n mal die Avogadro-Konstante.",
      why: [
        "Die molare Masse ist definiert als Masse pro Mol. Sie ist also ein Umrechnungsfaktor zwischen Gramm und Mol, genau wie ein Wechselkurs zwischen zwei Währungen.",
        "Teilt man eine Masse durch die Masse eines Mols, erhält man, wie viele Mol in dieser Masse stecken. Die Einheiten zeigen es: Gramm geteilt durch Gramm pro Mol ergibt Mol.",
        "Dass die Zahl aus dem Periodensystem zugleich die Masse eines Mols in Gramm ist, ist keine Zufälligkeit, sondern genau die Festlegung, mit der das Mol definiert wurde.",
      ],
      control: "Einheitenprobe: g geteilt durch g/mol ergibt mol. Grössenordnungsprobe: Ein Mol eines leichten Stoffs wiegt wenige Gramm, eines schweren mehrere hundert. Kommt für 10 Gramm Eisen eine Stoffmenge von 50 mol heraus, stimmt etwas nicht.",
      notUse: "Nicht verwenden, wenn eine Konzentration gefragt ist, dort gilt c = n/V. Und nicht bei Gemischen mit unbekannter Zusammensetzung, denn dann gibt es keine eindeutige molare Masse.",
    },
    examples: [
      { mode: "show", task: "Wie viel Gramm Wasser entstehen aus 8 g Wasserstoff mit genügend Sauerstoff?",
        interpret: "Ein Ausgangsstoff ist begrenzt, der andere im Überschuss. Nur der begrenzte zählt.",
        given: "m(H₂) = 8 g, Gleichung 2 H₂ + O₂ → 2 H₂O", wanted: "m(H₂O)",
        strategy: "Masse in Mol, über die Koeffizienten zum Produkt, zurück in Masse.",
        steps: [
          { do: "M(H₂) = 2 g/mol, also n(H₂) = 8 / 2 = 4 mol", why: "Die Brücke von der gewogenen Masse zur zählbaren Teilchenmenge." },
          { do: "Verhältnis H₂ zu H₂O ist 2 zu 2, also 1 zu 1", why: "Die Koeffizienten geben Molverhältnisse an. Hier entsteht aus jedem Mol Wasserstoff ein Mol Wasser." },
          { do: "n(H₂O) = 4 mol", why: "Übertragung im Molverhältnis, nicht im Massenverhältnis." },
          { do: "m = n · M = 4 · 18 = 72 g", why: "Rückweg über die molare Masse von Wasser." },
        ],
        result: "72", unit: "g Wasser",
        control: "Massenerhaltung: 8 g Wasserstoff plus 64 g Sauerstoff ergeben 72 g Wasser. Die Bilanz geht auf.",
        wrongWay: "Falsch wäre, die 8 g direkt zu verdoppeln oder zu halbieren. Massen dürfen nie über Koeffizienten umgerechnet werden." },
      { mode: "together", task: "Welches Volumen an Salzsäure mit c = 0,5 mol/l wird für die vollständige Neutralisation von 2 g Natriumhydroxid benötigt? M(NaOH) = 40 g/mol.",
        interpret: "Eine Säure-Base-Reaktion im Verhältnis eins zu eins. Gesucht ist ein Volumen, gegeben eine Masse und eine Konzentration.",
        given: "m(NaOH) = 2 g, M = 40 g/mol, c(HCl) = 0,5 mol/l", wanted: "V(HCl)",
        strategy: "Masse in Mol, Molverhältnis anwenden, über die Konzentration zum Volumen.",
        steps: [
          { do: "n(NaOH) = 2 / 40 = 0,05 mol", why: "Die Brücke von der Masse zur Stoffmenge." },
          { do: "NaOH + HCl → NaCl + H₂O, Verhältnis 1 zu 1", why: "Ein Proton wird übertragen, also reagiert je ein Teilchen mit einem." },
          { do: "n(HCl) = 0,05 mol", why: "Gleiches Molverhältnis, also gleiche Stoffmenge." },
          { do: "V = n / c = 0,05 / 0,5 = 0,1 l = 100 ml", why: "Die Konzentration verbindet Stoffmenge und Volumen." },
        ],
        result: "100", unit: "ml",
        control: "Einheiten: mol geteilt durch mol/l ergibt l. Plausibilität: 0,05 mol in einer halbmolaren Lösung müssen ein Zehntel Liter sein.",
        wrongWay: "Wer Milliliter nicht in Liter umrechnet, erhält ein Ergebnis um Faktor tausend daneben. Konzentrationen sind immer in Mol pro Liter angegeben." },
      { mode: "you", task: "4 g Wasserstoff reagieren mit 40 g Sauerstoff zu Wasser. Welcher Stoff ist limitierend, wie viel Wasser entsteht, und was bleibt übrig?",
        interpret: "Beide Ausgangsstoffe sind mengenmässig gegeben. Es muss geprüft werden, welcher zuerst aufgebraucht ist.",
        given: "m(H₂) = 4 g, m(O₂) = 40 g, Gleichung 2 H₂ + O₂ → 2 H₂O", wanted: "limitierender Stoff, m(H₂O), Rest",
        strategy: "Für jeden Ausgangsstoff die mögliche Produktmenge berechnen, den kleineren Wert nehmen, Rest bestimmen.",
        steps: [
          { do: "n(H₂) = 4 / 2 = 2 mol, n(O₂) = 40 / 32 = 1,25 mol", why: "Beide Massen zuerst in Stoffmengen umrechnen." },
          { do: "Aus 2 mol H₂ könnten 2 mol Wasser entstehen", why: "Verhältnis H₂ zu H₂O ist 1 zu 1." },
          { do: "Aus 1,25 mol O₂ könnten 2,5 mol Wasser entstehen", why: "Verhältnis O₂ zu H₂O ist 1 zu 2." },
          { do: "Der kleinere Wert gewinnt: Wasserstoff ist limitierend, es entstehen 2 mol Wasser", why: "Der zuerst aufgebrauchte Stoff begrenzt die Produktmenge." },
          { do: "m(H₂O) = 2 · 18 = 36 g", why: "Rückweg über die molare Masse." },
          { do: "Verbrauchter Sauerstoff: 1 mol, also 32 g. Rest: 40 − 32 = 8 g O₂", why: "Für 2 mol Wasser wird nur 1 mol Sauerstoff benötigt." },
        ],
        result: "36 g Wasser, Wasserstoff limitierend, 8 g Sauerstoff bleiben übrig", unit: "",
        control: "Massenerhaltung: 4 g plus 32 g verbrauchter Sauerstoff ergeben 36 g Wasser, dazu 8 g Rest. Insgesamt 44 g, genau die eingesetzte Masse.",
        wrongWay: "Ein häufiger Fehler ist, den Stoff mit der kleineren Masse für limitierend zu halten. Hier hat Wasserstoff die kleinere Masse und ist tatsächlich limitierend, aber das ist Zufall. Entscheidend ist immer der Vergleich der möglichen Produktmengen." },
    ],
    clinic: {
      task: "Wie viel Gramm Sauerstoff reagieren mit 4 g Wasserstoff zu Wasser?",
      wrong: ["Gleichung: 2 H₂ + O₂ → 2 H₂O", "Verhältnis H₂ zu O₂ ist 2 zu 1", "Also braucht es halb so viel Sauerstoff wie Wasserstoff", "m(O₂) = 4 g / 2 = 2 g"],
      wrongResult: "m(O₂) = 2 g", where: "Schritt 3",
      diagnosis: "Das Verhältnis 2 zu 1 gilt für Teilchen und damit für Mol, nicht für Gramm. Ein Sauerstoffmolekül ist sechzehnmal schwerer als ein Wasserstoffmolekül. Wer die Massen direkt halbiert, überspringt die Brücke über das Mol und rechnet deshalb um Faktor sechzehn daneben.",
      fix: ["n(H₂) = 4 g / 2 g/mol = 2 mol", "Verhältnis 2 zu 1, also n(O₂) = 1 mol", "m(O₂) = 1 mol · 32 g/mol = 32 g"],
      right: "m(O₂) = 32 g",
      lesson: "Massen nie über Koeffizienten umrechnen. Kontrolle über die Massenerhaltung: 4 g plus 32 g ergeben 36 g Wasser, und das sind genau 2 mol.",
    },
    essence: [
      "Jeder Rechenweg geht über die Stoffmenge: Masse in Mol, Molverhältnis, zurück in Masse.",
      "Koeffizienten sind Teilchenverhältnisse, niemals Massenverhältnisse.",
      "n = m / M, und die molare Masse liest du aus dem Periodensystem ab.",
      "Der limitierende Stoff ist der, der die kleinere Produktmenge erlaubt, nicht der mit der kleineren Masse.",
      "Kontrolle immer über die Massenerhaltung: eingesetzte Masse gleich entstandene Masse plus Rest.",
    ],
    teachback: {
      prompt: "Erkläre mir, warum man in der Chemie nie direkt von Gramm auf Gramm umrechnen darf.",
      keywords: ["Teilchen", "Mol", "Koeffizienten", "molare Masse", "Verhältnis"],
      model: "Eine Reaktionsgleichung ist eine Bilanz über Teilchen. Die Koeffizienten sagen, wie viele Teilchen miteinander reagieren, und damit auch, wie viele Mol. Über Gramm sagen sie nichts, weil verschiedene Teilchen verschieden schwer sind. Deshalb muss jede Masse zuerst über die molare Masse in eine Stoffmenge umgerechnet werden. Erst im Molverhältnis darf man von einem Stoff zum anderen wechseln, und danach geht es über die molare Masse wieder zurück in Gramm.",
    },
    mission: { title: "Kapitelmission Stöchiometrie", text: "Von der Einwaage bis zur Ausbeute, inklusive limitierendem Stoff und Konzentrationsrechnung." },
  });

  /* ========================= 4 ZELLBIOLOGIE ========================= */
  A("bio-cells", {
    orient: {
      goal: "Am Ende erklärst du jedes Organell über seine Aufgabe und begründest seinen Bau aus dieser Aufgabe.",
      why: "In der Prüfung genügt es nie, ein Organell zu benennen. Gefragt ist immer die Funktion und warum der Bau dazu passt.",
      time: "rund 40 Minuten",
      can: "Tier- und Pflanzenzelle unterscheiden, den Weg eines Exportproteins beschreiben und Bau aus Funktion herleiten.",
    },
    diagnose: [
      { q: "Welches Organell enthält die Erbinformation?", options: ["Mitochondrium", "Zellkern", "Golgi-Apparat", "Ribosom"], answer: 1, gap: "basics" },
      { q: "Wo entstehen Proteine?", options: ["im Zellkern", "an den Ribosomen", "in der Vakuole", "in der Zellwand"], answer: 1, gap: "protein" },
      { q: "Warum ist die innere Mitochondrienmembran stark gefaltet?", options: ["um Platz zu sparen", "um die Reaktionsfläche zu vergrössern", "um Wasser abzuhalten", "zufällig"], answer: 1, gap: "surface" },
    ],
    prereq: [
      { id: "basics", title: "Zellkern und DNA", explain: "Der Zellkern verwahrt die DNA und gibt nur Arbeitskopien nach aussen. Er ist die Bibliothek, aus der ausgeliehen, aber nichts mitgenommen wird.",
        reminder: "Das Original bleibt geschützt. Nach draussen geht nur die mRNA." },
      { id: "protein", title: "Ribosomen", explain: "Ribosomen übersetzen die mRNA in eine Aminosäurekette. Sie liegen frei im Plasma oder auf dem rauen endoplasmatischen Retikulum.",
        reminder: "Sitzt das Ribosom auf dem rauen ER, gelangt das fertige Protein direkt in dessen Inneres und wird für den Export vorbereitet." },
      { id: "surface", title: "Oberflächenvergrösserung", explain: "Wo Stoffe ausgetauscht oder Reaktionen katalysiert werden, ist Fläche der begrenzende Faktor. Faltung vervielfacht die Fläche im gleichen Volumen.",
        reminder: "Dasselbe Prinzip findest du bei Darmzotten, Lungenbläschen und Chloroplasten." },
    ],
    idea: {
      kurz: ["Eine Zelle ist ein <strong>arbeitsteiliger Betrieb</strong>. Jede Abteilung hat eine Aufgabe.",
             "Und der Bau folgt immer der Aufgabe."],
      normal: ["Eine eukaryotische Zelle ist kein Sack voll Flüssigkeit. Sie ist in Abteilungen gegliedert, die <strong>Organellen</strong>, jede mit einer klaren Aufgabe.",
               "Der Vorteil ist derselbe wie in einem Betrieb: Unvereinbare Vorgänge können gleichzeitig ablaufen, weil sie räumlich getrennt sind. Verdauende Enzyme im Lysosom fressen nicht die eigene Zelle auf.",
               "Für die Prüfung gilt deshalb: Benenne nie nur das Organell. Erkläre seine Aufgabe und begründe, warum sein Bau zu dieser Aufgabe passt. Die gefaltete Mitochondrienmembran ist dafür das beste Beispiel."],
      tief: ["Die Kompartimentierung löst ein grundsätzliches Problem. Chemische Reaktionen brauchen bestimmte Bedingungen, etwa einen bestimmten pH oder eine bestimmte Enzymkonzentration. In einer unstrukturierten Zelle liessen sich diese Bedingungen nicht gleichzeitig herstellen.",
             "Membranen schaffen abgetrennte Räume mit eigenen Bedingungen. Das Lysosom hält innen pH 5, während das Plasma bei pH 7 bleibt. Fällt die Membran, verdaut sich die Zelle selbst.",
             "Membranen ermöglichen ausserdem Gradienten. Die innere Mitochondrienmembran baut einen Protonengradienten auf, dessen Rückfluss die ATP-Synthase antreibt. Ohne abgeschlossenen Raum gäbe es keinen Gradienten und damit kein ATP.",
             "Mitochondrien und Chloroplasten besitzen eigene ringförmige DNA und eigene Ribosomen vom bakteriellen Typ. Das ist die Grundlage der Endosymbiontentheorie: sie waren ursprünglich selbständige Bakterien, die von einer Urzelle aufgenommen wurden."],
      anders: ["Stell dir eine Grossküche vor. Das <strong>Rezeptbuch</strong> im Büro ist der Zellkern. Es verlässt das Büro nie, kopiert wird auf Zettel.",
               "Die <strong>Kochstationen</strong> sind die Ribosomen. Sie arbeiten nach dem Zettel, nicht nach dem Buch.",
               "Die <strong>Anrichte</strong> ist der Golgi-Apparat: dort wird nachgewürzt, angerichtet und für den Versand verpackt.",
               "Das <strong>Kraftwerk</strong> im Keller ist das Mitochondrium. Und der <strong>Abfallraum</strong> mit der dichten Tür ist das Lysosom, dessen Inhalt man nicht in der Küche verteilt haben will."],
    },
    help: {
      simpler: ["Merke dir nur: Kern speichert, Ribosom baut, Golgi verpackt, Mitochondrium liefert Energie.",
                "Alles andere kannst du daraus ableiten."],
      example: { task: "Ein konkreter Weg: Die Bauchspeicheldrüse stellt Insulin her und schickt es ins Blut.",
        steps: ["Der Bauplan liegt im Zellkern und wird als mRNA kopiert.", "Am rauen ER wird die Aminosäurekette gebaut und gefaltet.", "Der Golgi-Apparat verändert sie chemisch und verpackt sie in Bläschen.", "Die Bläschen verschmelzen mit der Zellmembran und geben das Insulin nach aussen ab."],
        result: "Kern → raues ER → Golgi → Zellmembran" },
    },
    visual: {
      title: "Der Weg eines Exportproteins",
      caption: "Bauplan aus dem Kern, Synthese am rauen ER, Nachbearbeitung im Golgi, Abgabe über die Membran.",
      svg: `<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg" class="ill">
        <ellipse cx="160" cy="85" rx="140" ry="70" class="cellw"/>
        <circle cx="72" cy="80" r="26" class="organ"/><text x="55" y="84" class="sym sm">Kern</text>
        <rect x="118" y="60" width="58" height="40" rx="9" class="organ2"/><text x="130" y="84" class="sym sm">raues ER</text>
        <ellipse cx="220" cy="80" rx="27" ry="16" class="organ3"/><text x="203" y="84" class="sym sm">Golgi</text>
        <path d="M98 80 L114 80" class="hi"/><polygon points="114,80 104,76 104,85" class="hih"/>
        <path d="M176 80 L192 80" class="hi"/><polygon points="192,80 182,76 182,85" class="hih"/>
        <path d="M250 80 L282 70" class="sum"/><polygon points="282,70 271,69 275,77" class="sumh"/>
        <text x="186" y="124" class="lb hi-t">Abgabe nach aussen</text></svg>`,
    },
    check: mc("teach-cell-check", "Warum besitzen Pflanzenzellen trotz Chloroplasten auch Mitochondrien?",
      ["als Reserve", "weil sie den erzeugten Zucker ebenfalls veratmen müssen, besonders nachts",
       "weil Chloroplasten kein ATP liefern können", "das stimmt nicht, sie haben keine"], 1,
      "Photosynthese speichert Energie in Glucose. Um daraus nutzbares ATP zu gewinnen, muss die Glucose veratmet werden, und das geschieht im Mitochondrium. Nachts läuft nur noch die Atmung.",
      { ref: "Abschnitt 04" }),
    formula: {
      isModel: true,
      question: "Wie leite ich die Funktion eines Organells aus seinem Bau ab, statt beides auswendig zu lernen?",
      words: "Bau folgt Funktion: jedes Strukturmerkmal löst ein konkretes Problem der Aufgabe.",
      expr: "Strukturmerkmal → welches Problem löst es? → Funktion",
      spoken: "Strukturmerkmal, dann die Frage, welches Problem es löst, daraus folgt die Funktion.",
      params: [
        { sym: "Membran", name: "Abgrenzung", unit: "", means: "Trennt einen Raum mit eigenen Bedingungen vom Rest ab.",
          allowed: "einfach oder doppelt", signs: "doppelte Membran deutet auf endosymbiotischen Ursprung hin",
          inText: "erscheint als «membranumschlossen» oder «doppelte Membran»",
          effect: "Je dichter die Abgrenzung, desto abweichender dürfen die Innenbedingungen sein. Lysosom pH 5 gegen Plasma pH 7.",
          spoken: "Eine Membran grenzt einen Raum mit eigenen Bedingungen ab. Eine doppelte Membran deutet auf einen endosymbiotischen Ursprung hin." },
        { sym: "Faltung", name: "Oberflächenvergrösserung", unit: "", means: "Mehr Reaktions- oder Austauschfläche im gleichen Volumen.",
          allowed: "je nach Bedarf schwach bis extrem", signs: "starke Faltung bedeutet hoher Umsatz",
          inText: "erscheint als «stark gefaltet», «Cristae» oder «Zotten»",
          effect: "Mehr Fläche bedeutet mehr Enzymkomplexe und damit mehr Umsatz. Herzmuskelzellen haben besonders stark gefaltete Mitochondrien.",
          spoken: "Faltung vergrössert die Fläche im gleichen Volumen. Mehr Fläche bedeutet mehr Umsatz." },
        { sym: "eigene DNA", name: "Hinweis auf Endosymbiose", unit: "", means: "Ein Organell mit eigener ringförmiger DNA und eigenen Ribosomen.",
          allowed: "nur Mitochondrien und Chloroplasten", signs: "bakterieller Ribosomentyp als zusätzlicher Beleg",
          inText: "erscheint als «besitzt eigene DNA» oder «teilt sich selbständig»",
          effect: "Solche Organellen können sich unabhängig von der Zellteilung vermehren, was die Anpassung an hohen Energiebedarf erlaubt.",
          spoken: "Eigene ringförmige DNA und eigene Ribosomen sind der Hauptbeleg der Endosymbiontentheorie." },
        { sym: "Anzahl", name: "Häufigkeit im Zelltyp", unit: "Stück je Zelle", means: "Wie viele Exemplare eine Zelle besitzt.",
          allowed: "von einzeln bis mehreren tausend", signs: "immer positiv",
          inText: "erscheint als «besonders viele Mitochondrien»",
          effect: "Die Anzahl verrät die Funktion der Zelle. Viele Mitochondrien bedeuten hohen Energiebedarf, viele Ribosomen bedeuten hohe Proteinproduktion.",
          spoken: "Die Anzahl eines Organells verrät die Aufgabe der Zelle. Viele Mitochondrien bedeuten hohen Energiebedarf." },
      ],
      special: "Das Modell versagt bei Prokaryoten. Bakterien haben keine membranumschlossenen Organellen, erledigen dieselben Aufgaben aber trotzdem. Struktur folgt dort der Funktion über andere Mittel, etwa Einstülpungen der Zellmembran.",
      rearrange: "Umgekehrt anwendbar: Funktion gegeben → welche Struktur wäre nötig? Beispiel: hoher Energiebedarf → viele und stark gefaltete Mitochondrien.",
      rearrangeSpoken: "Das Modell lässt sich umkehren. Ist die Funktion gegeben, kannst du auf die nötige Struktur schliessen.",
      why: [
        "Zellen sind das Ergebnis von Selektion. Strukturen, die ihre Aufgabe schlechter erfüllen, setzen sich langfristig nicht durch. Deshalb ist der Zusammenhang zwischen Bau und Funktion kein Zufall.",
        "Physikalisch gibt es echte Grenzen: Stoffaustausch braucht Fläche, Reaktionen brauchen Enzyme auf einer Unterlage, abweichende Bedingungen brauchen eine Abgrenzung. Aus diesen Grenzen folgt der Bau fast zwingend.",
        "Deshalb kannst du in der Prüfung auch bei einem unbekannten Organell argumentieren, sobald du sein Strukturmerkmal kennst.",
      ],
      control: "Gegenprobe: Nimm das Strukturmerkmal gedanklich weg. Welche Aufgabe wäre dann nicht mehr erfüllbar? Lässt sich das beantworten, hast du den Zusammenhang verstanden.",
      notUse: "Nicht anwenden, um aus der Funktion auf eine einzige zwingende Struktur zu schliessen. Evolution findet oft mehrere Lösungen für dasselbe Problem.",
    },
    examples: [
      { mode: "show", task: "Begründe, warum Herzmuskelzellen besonders viele und stark gefaltete Mitochondrien haben.",
        interpret: "Eine Begründungsaufgabe. Gefragt ist die Kette von der Funktion der Zelle zum Strukturmerkmal.",
        given: "Zelltyp Herzmuskel, Strukturmerkmal viele und stark gefaltete Mitochondrien", wanted: "die Begründung",
        strategy: "Funktion der Zelle bestimmen, Energiebedarf ableiten, Strukturmerkmal daran knüpfen.",
        steps: [
          { do: "Der Herzmuskel arbeitet lebenslang ohne längere Pause.", why: "Die Funktion der Zelle ist der Ausgangspunkt jeder Begründung." },
          { do: "Dauerarbeit bedeutet dauerhaft sehr hohen ATP-Bedarf.", why: "Muskelkontraktion verbraucht ATP, und ATP lässt sich kaum speichern." },
          { do: "ATP entsteht überwiegend in der Atmungskette an der inneren Mitochondrienmembran.", why: "Der Ort der ATP-Gewinnung bestimmt, wo die Struktur ansetzen muss." },
          { do: "Mehr Mitochondrien und stärkere Faltung bedeuten mehr Membranfläche und damit mehr Enzymkomplexe.", why: "Fläche ist der begrenzende Faktor, deshalb ist Faltung die wirksamste Anpassung." },
        ],
        result: "Hoher Dauerenergiebedarf erzwingt maximale Membranfläche, also viele stark gefaltete Mitochondrien.", unit: "",
        control: "Gegenprobe an einer Fettzelle: geringer Energieumsatz, entsprechend wenige Mitochondrien. Die Regel trägt in beide Richtungen.",
        wrongWay: "Falsch wäre die blosse Aussage «weil der Herzmuskel viel arbeitet». Das nennt die Funktion, verknüpft sie aber nicht mit dem Strukturmerkmal Membranfläche." },
      { mode: "together", task: "Warum besitzt das Lysosom eine besonders stabile, dichte Membran?",
        interpret: "Struktur gegeben, Funktion gesucht. Das Modell wird rückwärts angewendet.",
        given: "Strukturmerkmal: dichte, stabile Membran", wanted: "die funktionale Begründung",
        strategy: "Inhalt bestimmen, Gefahr für die Zelle benennen, Membran als Lösung erklären.",
        steps: [
          { do: "Das Lysosom enthält verdauende Enzyme.", why: "Der Inhalt bestimmt, welches Problem die Struktur lösen muss." },
          { do: "Diese Enzyme arbeiten bei pH 5, das Zellplasma liegt bei pH 7.", why: "Zwei unvereinbare Bedingungen im selben Zellraum sind nur mit Abgrenzung möglich." },
          { do: "Gelangten die Enzyme ins Plasma, würden sie Zellbestandteile abbauen.", why: "Hier liegt die konkrete Gefahr, gegen die die Struktur schützt." },
          { do: "Die dichte Membran hält Enzyme und den abweichenden pH zurück.", why: "Damit ist das Strukturmerkmal vollständig aus der Funktion begründet." },
        ],
        result: "Die Membran ermöglicht abweichende Innenbedingungen und schützt die Zelle vor Selbstverdauung.", unit: "",
        control: "Gegenprobe: Bei beschädigter Lysosomenmembran beginnt die Zelle sich selbst abzubauen. Genau das beobachtet man beim programmierten Zelltod.",
        wrongWay: "Unzureichend wäre «damit nichts herauskommt». Es fehlt, was genau herauskäme und welchen Schaden es anrichten würde." },
      { mode: "you", task: "Eine unbekannte Zelle zeigt unter dem Mikroskop auffällig viel raues endoplasmatisches Retikulum und einen grossen Golgi-Apparat. Welche Aufgabe hat diese Zelle vermutlich, und wie begründest du das?",
        interpret: "Struktur gegeben, Funktion gesucht, bei unbekanntem Zelltyp. Genau dafür ist das Modell gebaut.",
        given: "viel raues ER, grosser Golgi-Apparat", wanted: "vermutliche Funktion mit Begründung",
        strategy: "Jedes Merkmal einzeln deuten, dann zusammenführen und mit einem Beispiel belegen.",
        steps: [
          { do: "Raues ER trägt Ribosomen und nimmt die dort gebauten Proteine direkt auf.", why: "Viel raues ER bedeutet hohe Proteinproduktion für den Export, nicht für den Eigenbedarf." },
          { do: "Der Golgi-Apparat verändert Proteine chemisch und verpackt sie in Transportbläschen.", why: "Ein grosser Golgi bedeutet, dass viel Material für den Versand vorbereitet wird." },
          { do: "Beide Merkmale zusammen deuten auf eine sekretorische Zelle.", why: "Die Kombination ist aussagekräftiger als jedes Merkmal für sich." },
          { do: "Beispiele sind Drüsenzellen der Bauchspeicheldrüse oder Plasmazellen, die Antikörper abgeben.", why: "Ein konkretes Beispiel macht aus der Vermutung eine belegte Aussage." },
        ],
        result: "Eine sekretorische Zelle, die Proteine in grosser Menge herstellt und nach aussen abgibt.", unit: "",
        control: "Gegenprobe: Fehlte der grosse Golgi, wären die Proteine wahrscheinlich für den Eigenbedarf bestimmt. Die Kombination entscheidet.",
        wrongWay: "Falsch wäre, allein aus viel rauem ER auf Sekretion zu schliessen. Erst zusammen mit dem Golgi wird die Deutung tragfähig." },
    ],
    clinic: {
      task: "Erkläre, warum Pflanzenzellen keine Mitochondrien brauchen.",
      wrong: ["Pflanzen betreiben Photosynthese.", "Dabei entsteht Glucose und damit Energie.", "Chloroplasten liefern also bereits Energie.", "Mitochondrien wären deshalb überflüssig."],
      wrongResult: "Pflanzenzellen brauchen keine Mitochondrien", where: "Schritt 3",
      diagnosis: "Der Denkfehler liegt in der Gleichsetzung von gespeicherter und nutzbarer Energie. Die Photosynthese speichert Energie chemisch in Glucose. Die Zelle kann Glucose aber nicht direkt verwenden, sie braucht ATP. Die Umwandlung von Glucose in ATP ist die Zellatmung, und die läuft im Mitochondrium. Ausserdem findet nachts keine Photosynthese statt, die Atmung dagegen rund um die Uhr.",
      fix: ["Photosynthese speichert Energie in Glucose.", "Nutzbar ist für die Zelle aber nur ATP.", "Die Umwandlung Glucose zu ATP ist die Zellatmung im Mitochondrium.", "Pflanzenzellen besitzen deshalb beides, Chloroplasten und Mitochondrien."],
      right: "Pflanzenzellen besitzen sowohl Chloroplasten als auch Mitochondrien",
      lesson: "Unterscheide immer zwischen Energiespeicher und Energiewährung. Glucose ist der Speicher, ATP ist die Währung, und nur die Währung kann die Zelle ausgeben.",
    },
    essence: [
      "Kompartimentierung erlaubt unvereinbare Vorgänge gleichzeitig im selben Zellvolumen.",
      "Bau folgt Funktion: jedes Strukturmerkmal löst ein konkretes Problem der Aufgabe.",
      "Faltung bedeutet Oberflächenvergrösserung und damit höheren Umsatz.",
      "Der Exportweg lautet Kern, raues ER, Golgi, Zellmembran.",
      "Pflanzenzellen haben Chloroplasten und Mitochondrien, denn Glucose muss veratmet werden.",
    ],
    teachback: {
      prompt: "Erkläre mir, warum eine Zelle überhaupt Organellen braucht, statt alles im Plasma ablaufen zu lassen.",
      keywords: ["Kompartiment", "Bedingungen", "gleichzeitig", "Membran", "Fläche"],
      model: "Chemische Vorgänge brauchen bestimmte Bedingungen, etwa einen bestimmten pH oder bestimmte Enzyme. In einem einzigen unstrukturierten Raum liessen sich unvereinbare Bedingungen nicht gleichzeitig herstellen. Membranumschlossene Kompartimente schaffen abgetrennte Räume mit eigenen Bedingungen, so dass verdauende Enzyme bei pH 5 arbeiten können, während das Plasma bei pH 7 bleibt. Zusätzlich ermöglichen Membranen Gradienten und vergrössern durch Faltung die Reaktionsfläche.",
    },
    mission: { title: "Kapitelmission Zellbiologie", text: "Organellen benennen, Funktionen begründen und aus Strukturmerkmalen auf den Zelltyp schliessen." },
  });

  /* ==================== 5 REGIONALGEOGRAFIE USA ==================== */
  A("geo-usa-physical", {
    orient: {
      goal: "Am Ende erklärst du das Wetter der USA aus ihrer Reliefstruktur, statt Naturgefahren auswendig zu lernen.",
      why: "Regionalgeografie ist ein eigener Prüfungsteil, und für die Wintersession 2027 ist USA offiziell festgelegt.",
      time: "rund 40 Minuten",
      can: "die Grosslandschaften ordnen, die Tornado Alley erklären und Naturgefahren regional begründen.",
    },
    diagnose: [
      { q: "In welche Richtung verlaufen die Rocky Mountains überwiegend?", options: ["west-östlich", "nord-südlich", "diagonal", "ringförmig"], answer: 1, gap: "relief" },
      { q: "Was passiert mit feuchter Luft, die über ein Gebirge aufsteigt?", options: ["sie wird wärmer und trockener", "sie kühlt ab und regnet sich ab", "sie bleibt unverändert", "sie sinkt sofort wieder"], answer: 1, gap: "luv" },
      { q: "Welche Klimazone hat trockene Sommer und feuchte Winter?", options: ["tropisch", "kontinental", "mediterran", "polar"], answer: 2, gap: "zones" },
    ],
    prereq: [
      { id: "relief", title: "Gebirgsrichtung lesen", explain: "In Nordamerika verlaufen Rocky Mountains und Appalachen nord-südlich. In Europa verlaufen Alpen und Pyrenäen west-östlich. Diese Richtung entscheidet, ob Luftmassen aufeinandertreffen können.",
        reminder: "Nord-südliche Gebirge lassen Nord-Süd-Strömungen zu. West-östliche Gebirge blockieren sie." },
      { id: "luv", title: "Luv und Lee", explain: "Auf der windzugewandten Luvseite steigt Luft auf, kühlt ab und regnet sich ab. Auf der Leeseite sinkt trockene Luft ab und erwärmt sich stärker.",
        reminder: "Deshalb ist es hinter einem Gebirge trockener und wärmer als davor." },
      { id: "zones", title: "Klimazonen unterscheiden", explain: "Sommertrockenheit in mittleren Breiten ist das Kennzeichen des mediterranen Klimas. Ganzjährige Feuchte deutet auf gemässigtes Klima.",
        reminder: "Kalifornien hat mediterranes Klima, deshalb ist dort Bewässerungslandwirtschaft nötig." },
    ],
    idea: {
      kurz: ["Die grossen Gebirge der USA verlaufen <strong>nord-südlich</strong>.",
             "Deshalb treffen polare und tropische Luft ungebremst aufeinander. Daraus folgt fast das ganze Wettergeschehen."],
      normal: ["Lege ein Lineal von San Francisco nach New York, und du durchquerst acht Grosslandschaften: Pazifikküste, Kaskaden und Sierra Nevada, Great Basin, Rocky Mountains, Great Plains, zentrales Tiefland, Appalachen, Küstenebene.",
               "Entscheidend ist ihre Ausrichtung. In Europa liegen die Alpen quer und trennen kalte Nordluft von warmer Mittelmeerluft. In Nordamerika verlaufen die Gebirge nord-südlich, und zwischen Rockies und Appalachen liegt ein breiter, offener Korridor.",
               "Kalte, trockene Luft aus Kanada strömt darin ungehindert nach Süden, feuchtwarme Luft vom Golf von Mexiko nach Norden. Treffen beide aufeinander, entstehen extreme Gegensätze auf engem Raum. Genau das erzeugt die <strong>Tornado Alley</strong>."],
      tief: ["Die Reliefstruktur wirkt auf mehreren Ebenen. Erstens erzeugt sie den Luftmassenkorridor, der die Tornadobildung begünstigt. Die nötigen Zutaten sind Feuchte am Boden, trockene Luft darüber, starke Windscherung und ein Auslöser. Alle vier treffen im Frühling im mittleren Westen besonders häufig zusammen.",
             "Zweitens erzeugt sie die Trockengrenze im Westen. Pazifische Luft regnet sich an Kaskaden und Sierra Nevada ab und erreicht das Great Basin als trockene Fallluft. Der hundertste Längengrad gilt als grobe Grenze zwischen Regenfeldbau im Osten und Bewässerung oder Weidewirtschaft im Westen.",
             "Drittens bestimmt sie die Verteilung der Naturgefahren. Hurrikane treffen die Golf- und Südostküste, weil sie warmes Meerwasser als Energiequelle brauchen. Erdbeben konzentrieren sich an der San-Andreas-Verwerfung, einer Transformstörung, an der pazifische und nordamerikanische Platte aneinander vorbeigleiten.",
             "Für die Prüfung ist die Kette entscheidend: Relief bestimmt Luftmassenbewegung, diese bestimmt Klima und Niederschlagsverteilung, und daraus folgen Landwirtschaft, Besiedlung und Naturgefahren."],
      anders: ["Denk an zwei Zimmer mit einer Tür dazwischen. Im einen läuft die Heizung, im anderen steht das Fenster offen.",
               "Ist die Tür zu, bleiben beide Temperaturen getrennt. Das ist Europa mit seinen querliegenden Alpen.",
               "Ist die Tür offen, strömt kalte Luft am Boden hinein und warme oben hinaus. Es zieht heftig genau in der Türöffnung. Das ist der Korridor zwischen Rockies und Appalachen.",
               "Und je grösser der Temperaturunterschied zwischen den Zimmern, desto stärker der Zug. Deshalb ist die Tornadosaison im Frühling am heftigsten, wenn der Süden schon warm und der Norden noch kalt ist."],
    },
    help: {
      simpler: ["Gebirge längs statt quer, also freie Bahn für Luft von Norden und Süden.",
                "Wo sie sich treffen, gibt es Tornados."],
      example: { task: "Ein Vergleich: Warum gibt es in Europa kaum Tornados?",
        steps: ["Die Alpen liegen quer und blockieren den Luftaustausch zwischen Nord und Süd.", "Kalte und warme Luft treffen deshalb seltener und weniger heftig aufeinander.", "Ohne diesen scharfen Gegensatz fehlt die Energie für starke Tornados."],
        result: "Querliegende Gebirge verhindern, was nord-südliche begünstigen." },
    },
    visual: {
      title: "Der offene Korridor zwischen den Gebirgen",
      caption: "Kalte Luft aus Kanada und feuchtwarme Luft vom Golf treffen im breiten Korridor ungebremst aufeinander.",
      svg: `<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg" class="ill">
        <rect x="60" y="22" width="34" height="126" rx="6" class="mount"/><text x="58" y="162" class="lb">Rockies</text>
        <rect x="228" y="22" width="26" height="126" rx="6" class="mount"/><text x="218" y="162" class="lb">Appalachen</text>
        <path d="M160 26 L160 78" class="curve"/><polygon points="160,78 154,67 166,67" class="dot"/>
        <text x="118" y="20" class="lb">kalte Luft aus Norden</text>
        <path d="M160 144 L160 96" class="hi"/><polygon points="160,96 154,107 166,107" class="hih"/>
        <text x="112" y="160" class="lb hi-t">feuchtwarme Luft vom Golf</text>
        <ellipse cx="160" cy="87" rx="30" ry="13" class="spark"/><text x="138" y="91" class="sym sm">Konflikt</text></svg>`,
    },
    check: mc("teach-usa-check", "Warum gibt es in Europa praktisch keine Tornado Alley?",
      ["Europa ist zu klein", "die Gebirge verlaufen west-östlich und trennen die Luftmassen",
       "es fehlt ein warmes Meer", "wegen des Golfstroms"], 1,
      "Alpen und Pyrenäen liegen quer zur Nord-Süd-Richtung und wirken als Barriere. In Nordamerika fehlt diese Barriere, deshalb können die Luftmassen frei aufeinandertreffen.",
      { ref: "Abschnitt 04" }),
    formula: {
      isModel: true,
      kind: "causal-process",
      steps: [
        { label: "Ausgangslage", text: "Die Ausrichtung der Gebirge bestimmt, ob Luftmassen aufeinandertreffen können. In Nordamerika verlaufen Rockies und Appalachen nord-südlich und lassen einen offenen Korridor frei." },
        { label: "Mechanismus", text: "Kalte Luft aus Kanada und feuchtwarme Luft vom Golf strömen ungebremst aufeinander zu. Steigt feuchte Luft an einem Gebirge auf, kühlt sie ab und regnet sich an der Luvseite ab." },
        { label: "Folge", text: "Daraus folgen Temperaturgegensätze im Korridor und ein Regenschatten hinter den Küstengebirgen. Beides prägt Klima und Niederschlagsverteilung." },
        { label: "Woran man es sieht", text: "Die Tornado Alley liegt im breitesten Teil des Korridors, das Great Basin im Regenschatten von Kaskaden und Sierra Nevada, der hundertste Längengrad trennt Regenfeldbau von Bewässerung." },
        { label: "Grenze", text: "Das Modell erklärt Klima und Häufigkeiten, nicht das Wetter eines bestimmten Tages. Wo lokale Faktoren überwiegen, etwa in engen Tälern, trägt es nicht." },
      ],
      question: "Wie leite ich aus dem Relief eines Raumes seine Klima- und Gefahrenstruktur ab?",
      words: "Relief bestimmt Luftmassenbewegung, diese bestimmt Niederschlag und Temperatur, daraus folgen Vegetation, Nutzung und Naturgefahren.",
      expr: "Relief → Luftmassen → Klima → Nutzung und Gefahren",
      spoken: "Relief bestimmt die Luftmassen, die Luftmassen bestimmen das Klima, daraus folgen Nutzung und Naturgefahren.",
      params: [
        { sym: "Richtung", name: "Ausrichtung der Gebirge", unit: "", means: "Ob Gebirge quer oder längs zur vorherrschenden Strömung liegen.",
          allowed: "west-östlich oder nord-südlich", signs: "keine",
          inText: "erscheint als «die Gebirge verlaufen» oder als Kartenaufgabe",
          effect: "Querliegend blockiert den Luftaustausch, längsliegend lässt ihn zu. Das ist der wichtigste Einzelfaktor im amerikanischen Wettergeschehen.",
          spoken: "Die Ausrichtung der Gebirge entscheidet, ob Luftmassen aufeinandertreffen können. Querliegend blockiert, längsliegend lässt zu." },
        { sym: "Höhe", name: "Gebirgshöhe", unit: "m", means: "Wie hoch Luft aufsteigen muss, um das Hindernis zu überwinden.",
          allowed: "positiv", signs: "immer positiv",
          inText: "erscheint als Höhenangabe in Profilen und Karten",
          effect: "Je höher, desto stärker der Steigungsregen im Luv und desto trockener das Lee. Die Sierra Nevada erzeugt deshalb ein ausgeprägtes Trockengebiet dahinter.",
          spoken: "Je höher das Gebirge, desto mehr regnet sich die Luft im Luv ab und desto trockener wird das Lee." },
        { sym: "Meeresnähe", name: "Entfernung zur Küste", unit: "km", means: "Wie stark ein Ort vom Meer beeinflusst wird.",
          allowed: "null bis mehrere tausend", signs: "immer positiv",
          inText: "erscheint als Lage an der Küste oder im Landesinneren",
          effect: "Küstennah bedeutet ausgeglichene Temperaturen mit kleiner Jahresamplitude, im Landesinneren dagegen heisse Sommer und kalte Winter.",
          spoken: "Meeresnähe gleicht die Temperaturen aus. Im Landesinneren werden die Jahreszeiten extremer." },
        { sym: "Breitenlage", name: "geografische Breite", unit: "Grad", means: "Wie steil die Sonnenstrahlung auftrifft.",
          allowed: "0 bis 90 Grad", signs: "Nord oder Süd",
          inText: "erscheint als Gradangabe oder über die Lage auf der Karte",
          effect: "Je höher die Breite, desto flacher die Einstrahlung und desto kühler. Alaska und Florida liegen im selben Staat und in völlig verschiedenen Klimazonen.",
          spoken: "Die geografische Breite bestimmt den Einstrahlungswinkel und damit die Grundtemperatur." },
      ],
      special: "Das Modell versagt, wo lokale Faktoren dominieren, etwa bei Stadtklimaten oder in engen Tälern mit Kaltluftseen. Dort können kleinräumige Effekte die grossräumige Ableitung überlagern.",
      rearrange: "Rückwärts anwendbar: Aus einem Klimadiagramm auf die wahrscheinliche Lage schliessen. Sommertrocken und mild bedeutet Westküste in mittleren Breiten, also Kalifornien.",
      rearrangeSpoken: "Das Modell lässt sich umkehren. Aus einem Klimadiagramm kannst du auf die wahrscheinliche Lage schliessen.",
      why: [
        "Luft bewegt sich entlang von Druckunterschieden und folgt dabei dem geringsten Widerstand. Ein Gebirge quer zur Strömung ist ein Widerstand, ein Korridor längs dazu nicht.",
        "Steigt Luft auf, kühlt sie ab und kann weniger Wasserdampf halten. Der Überschuss kondensiert und fällt als Niederschlag. Das ist reine Physik, keine regionale Besonderheit.",
        "Weil Vegetation und Landwirtschaft von Wasser und Temperatur abhängen, folgen sie dieser Kette zwangsläufig. Deshalb lässt sich aus dem Relief bis zur Anbauform durchargumentieren.",
      ],
      control: "Gegenprobe an einem bekannten Raum: Wende die Kette auf die Schweiz an. Alpen quer zur Westströmung, Luvseite im Norden feucht, Leeseite im Süden mit Föhn. Stimmt das Ergebnis, hast du das Modell richtig angewendet.",
      notUse: "Nicht anwenden, um Einzelereignisse vorherzusagen. Das Modell erklärt Klima und Häufigkeiten, nicht das Wetter eines bestimmten Tages.",
    },
    examples: [
      { mode: "show", task: "Begründe, warum die Tornado Alley im mittleren Westen der USA liegt und nicht an der Ostküste.",
        interpret: "Eine Begründungsaufgabe entlang der Kette Relief, Luftmassen, Klima.",
        given: "Lage der Tornado Alley, Verlauf der Gebirge", wanted: "räumliche Begründung",
        strategy: "Korridor identifizieren, Luftmassen benennen, Zusammentreffen lokalisieren.",
        steps: [
          { do: "Rockies und Appalachen verlaufen nord-südlich.", why: "Die Ausrichtung ist der Ausgangspunkt der ganzen Kette." },
          { do: "Zwischen ihnen liegt ein breiter, unverbauter Korridor.", why: "Ohne Querbarriere kann Luft frei von Nord nach Süd und umgekehrt strömen." },
          { do: "Kalte, trockene Luft aus Kanada trifft dort auf feuchtwarme Luft vom Golf von Mexiko.", why: "Zwei sehr verschiedene Luftmassen erzeugen starke Gegensätze in Temperatur und Feuchte." },
          { do: "Im mittleren Westen ist der Korridor am breitesten und die Gegensätze am schärfsten.", why: "Deshalb liegt das Maximum dort und nicht an der Ostküste, wo die Appalachen bereits dämpfen." },
        ],
        result: "Der offene Nord-Süd-Korridor zwischen den Gebirgen erzeugt das häufigste und heftigste Aufeinandertreffen der Luftmassen.", unit: "",
        control: "Gegenprobe Europa: querliegende Alpen, kaum Tornados. Die Kette trägt in beide Richtungen.",
        wrongWay: "Unzureichend wäre «weil es dort flach ist». Flachland allein erzeugt keine Tornados, es braucht den Gegensatz zweier Luftmassen." },
      { mode: "together", task: "Warum ist das Great Basin so trocken, obwohl der Pazifik nicht weit entfernt ist?",
        interpret: "Ein scheinbarer Widerspruch. Meeresnähe allein garantiert keinen Niederschlag.",
        given: "Lage zwischen Sierra Nevada und Rocky Mountains", wanted: "Begründung der Trockenheit",
        strategy: "Weg der Luft verfolgen, Luv und Lee anwenden.",
        steps: [
          { do: "Feuchte Pazifikluft zieht ostwärts und trifft auf Kaskaden und Sierra Nevada.", why: "Der Weg der Luft entscheidet, wo der Niederschlag fällt." },
          { do: "Sie steigt auf, kühlt ab und regnet sich an der Luvseite ab.", why: "Kühlere Luft kann weniger Wasserdampf halten, der Überschuss fällt aus." },
          { do: "Auf der Leeseite sinkt die nun trockene Luft ab und erwärmt sich.", why: "Absinkende Luft erwärmt sich stärker, als aufsteigende feuchte Luft abkühlt." },
          { do: "Das Great Basin liegt genau in diesem Regenschatten.", why: "Damit ist die Trockenheit vollständig aus Relief und Luftbewegung begründet." },
        ],
        result: "Regenschatteneffekt hinter Kaskaden und Sierra Nevada.", unit: "",
        control: "Gegenprobe: Die Küstenseite von Oregon und Washington gehört zu den niederschlagsreichsten Gebieten der USA. Dieselbe Luft, andere Seite des Gebirges.",
        wrongWay: "Falsch wäre, die Trockenheit mit der Breitenlage zu erklären. Auf derselben Breite liegen an der Küste sehr feuchte Gebiete." },
      { mode: "you", task: "Ein Klimadiagramm zeigt milde, feuchte Winter, heisse trockene Sommer und ein Temperaturmaximum im Juli. Ordne den Ort möglichst genau zu und begründe, welche Landwirtschaft dort möglich ist.",
        interpret: "Das Modell wird rückwärts angewendet: vom Klima auf Lage und Nutzung.",
        given: "sommertrocken, wintermild und feucht, Maximum im Juli", wanted: "Lage und landwirtschaftliche Folgerung",
        strategy: "Hemisphäre bestimmen, Zone bestimmen, Lage eingrenzen, Nutzung ableiten.",
        steps: [
          { do: "Maximum im Juli bedeutet Nordhalbkugel.", why: "Die Lage des Temperaturmaximums verrät die Hemisphäre." },
          { do: "Sommertrockenheit in mittleren Breiten kennzeichnet das mediterrane Klima.", why: "Es ist die einzige Zone mittlerer Breiten mit trockenem Sommer." },
          { do: "In den USA tritt dieses Klima an der Westküste auf, also Kalifornien.", why: "Westküsten in mittleren Breiten liegen im Bereich des subtropischen Hochs im Sommer." },
          { do: "Ohne Sommerniederschlag ist Bewässerung nötig. Möglich sind Hartlaubkulturen wie Wein, Oliven, Zitrusfrüchte und Nüsse.", why: "Die Kulturen müssen mit der sommerlichen Trockenheit zurechtkommen oder bewässert werden." },
        ],
        result: "Kalifornien, mediterranes Klima, Bewässerungslandwirtschaft mit Hartlaubkulturen.", unit: "",
        control: "Gegenprobe: Ohne Bewässerung wäre dort kein Mais möglich, weil er genau im Sommer Wasser braucht. Genau das beobachtet man in der Praxis.",
        wrongWay: "Ein häufiger Fehler ist, allein aus der Trockenheit auf Wüstenklima zu schliessen. Milde feuchte Winter schliessen das aus." },
    ],
    clinic: {
      task: "Ein Klimadiagramm zeigt das Temperaturmaximum im Januar und Trockenheit im Juli. Bestimme die Klimazone.",
      wrong: ["Trockenheit im Juli", "Juli ist Sommer", "Sommertrocken in mittleren Breiten bedeutet mediterran", "Also Mittelmeerklima, etwa Spanien"],
      wrongResult: "Mittelmeerklima auf der Nordhalbkugel", where: "Schritt 2",
      diagnosis: "Das Temperaturmaximum liegt im Januar, die Station liegt also auf der Südhalbkugel. Dort ist Juli der Winter, nicht der Sommer. Die Trockenheit fällt somit in die kalte Jahreszeit. Wer diesen ersten Schritt überspringt, dreht die gesamte Jahreszeitenzuordnung um und landet bei der falschen Zone und der falschen Hemisphäre.",
      fix: ["Maximum im Januar bedeutet Südhalbkugel.", "Auf der Südhalbkugel ist Juli der Winter.", "Trocken im Winter und warm im Sommer deutet auf ein winterfeuchtes oder savannenartiges Klima hin.", "Erst die Niederschlagsmenge entscheidet, welche der beiden Zonen es genau ist."],
      right: "Südhalbkugel, wintertrockenes Klima, je nach Menge Savanne oder verwandter Typ",
      lesson: "Erster Blick immer auf die Lage des Temperaturmaximums. Sie entscheidet über die Hemisphäre und damit darüber, welche Monate Sommer sind. Alles Weitere hängt davon ab.",
    },
    essence: [
      "Rockies und Appalachen verlaufen nord-südlich und lassen einen offenen Luftmassenkorridor frei.",
      "Deshalb treffen polare und tropische Luft ungebremst aufeinander: Tornado Alley.",
      "Pazifische Luft regnet sich an den Küstengebirgen ab, das Great Basin liegt im Regenschatten.",
      "Der hundertste Längengrad ist die grobe Grenze zwischen Regenfeldbau und Bewässerung.",
      "Naturgefahren regional: Hurrikane im Südosten, Tornados im mittleren Westen, Erdbeben und Brände im Westen.",
    ],
    teachback: {
      prompt: "Erkläre mir, wie man vom Relief eines Landes bis zu seinen Naturgefahren durchargumentiert.",
      keywords: ["Relief", "Luftmassen", "Klima", "Niederschlag", "Gefahren"],
      model: "Das Relief bestimmt, wie Luftmassen sich bewegen: querliegende Gebirge blockieren den Austausch, längsliegende lassen ihn zu. Die Luftmassenbewegung bestimmt, wo Niederschlag fällt und wie stark die Temperaturgegensätze sind. Daraus folgt das Klima, und aus dem Klima folgen Vegetation, Landwirtschaft und die typischen Naturgefahren. In den USA heisst die Kette konkret: nord-südliche Gebirge, offener Korridor, Zusammentreffen polarer und tropischer Luft, daraus Tornados im mittleren Westen und Regenschatten im Great Basin.",
    },
    mission: { title: "Kapitelmission Regionalgeografie USA", text: "Grosslandschaften, Klimadiagramme, Naturgefahren und Datenauswertung mit Quellenkritik." },
  });
})();

/* bio-cells als Referenzumsetzung: drei Lerneinheiten, jede mit eigener
   Erklärung, eigenem Bild und einer Prüfung, die genau dieses Bild testet. */
(function () {
  "use strict";
  var M = window.MNEMIKA;
  const { mc, tf } = M;
  var D = M.TEACH["bio-cells"];
  if (!D) return;

  /* --- Prozessgrafik als HTML, damit Text umbrechen kann --- */
  var exportFlow = `<div class="flow" role="img"
    aria-label="Vier Stationen des Proteinexports: Zellkern, raues ER, Golgi-Apparat, Vesikel und Zellmembran.">
    <ol class="flow-steps">
      <li class="flow-step"><span class="flow-n">1</span>
        <h5>Zellkern</h5><p>Der DNA-Abschnitt wird abgelesen und als mRNA kopiert.</p></li>
      <li class="flow-arrow"><span>mRNA</span></li>
      <li class="flow-step"><span class="flow-n">2</span>
        <h5>Raues ER</h5><p>Ribosomen übersetzen die mRNA. Die Kette faltet sich im Inneren.</p></li>
      <li class="flow-arrow"><span>Transportvesikel</span></li>
      <li class="flow-step"><span class="flow-n">3</span>
        <h5>Golgi-Apparat</h5><p>Das Protein wird chemisch verändert, sortiert und verpackt.</p></li>
      <li class="flow-arrow"><span>Sekretvesikel</span></li>
      <li class="flow-step flow-last"><span class="flow-n">4</span>
        <h5>Zellmembran</h5><p>Das Vesikel verschmilzt mit der Membran. Das Protein verlässt die Zelle.</p></li>
    </ol>
    <p class="flow-membrane">Zellmembran · Exocytose</p></div>`;

  var energyCompare = `<div class="compare" role="img"
    aria-label="Vergleich von Chloroplast und Mitochondrium nach Aufgabe, Ausgangsstoff und Produkt.">
    <div class="cmp-col cmp-a"><h5>Chloroplast</h5>
      <dl><div><dt>Aufgabe</dt><dd>Lichtenergie chemisch speichern</dd></div>
      <div><dt>Hinein</dt><dd>CO₂, Wasser, Licht</dd></div>
      <div><dt>Heraus</dt><dd>Glucose, Sauerstoff</dd></div>
      <div><dt>Wann</dt><dd>nur bei Licht</dd></div></dl></div>
    <div class="cmp-col cmp-b"><h5>Mitochondrium</h5>
      <dl><div><dt>Aufgabe</dt><dd>gespeicherte Energie nutzbar machen</dd></div>
      <div><dt>Hinein</dt><dd>Glucose, Sauerstoff</dd></div>
      <div><dt>Heraus</dt><dd>ATP, CO₂, Wasser</dd></div>
      <div><dt>Wann</dt><dd>rund um die Uhr</dd></div></dl></div>
    <p class="cmp-note">Glucose ist der Speicher, ATP ist die Währung. Nur die Währung kann die Zelle ausgeben.</p></div>`;

  var structureFunction = `<div class="sfgrid" role="img"
    aria-label="Vier Strukturmerkmale und das Problem, das jedes löst.">
    ${[["Membran", "trennt einen Raum ab", "Lysosom hält innen pH 5, während das Plasma bei pH 7 bleibt"],
       ["Faltung", "vergrössert die Fläche", "mehr Cristae bedeuten mehr Enzymkomplexe und mehr ATP"],
       ["Eigene DNA", "erlaubt eigene Vermehrung", "Mitochondrien teilen sich unabhängig von der Zellteilung"],
       ["Anzahl", "zeigt den Bedarf", "Herzmuskelzellen enthalten besonders viele Mitochondrien"]]
      .map(([a, b, c]) => `<div class="sfcell"><h5>${a}</h5><p class="sf-why">${b}</p><p class="sf-ex">${c}</p></div>`).join("")}
  </div>`;

  D.units = [
    {
      concept: "Wie ein Protein die Zelle verlässt",
      takeaway: "Bauplan im Kern, Bau am rauen ER, Verpackung im Golgi, Abgabe über die Membran.",
      body: [
        "Eine Zelle, die etwas nach aussen abgeben soll, etwa Insulin oder einen Antikörper, kann das Protein nicht einfach irgendwo herstellen und hinauswerfen. Der Weg ist festgelegt und läuft über vier Stationen.",
        "Der <strong>Zellkern</strong> gibt nur eine Kopie heraus, die mRNA. Das Original bleibt geschützt. Am <strong>rauen ER</strong> übersetzen Ribosomen diese Kopie, und die entstehende Kette wird gleich ins Innere des ER gefaltet.",
        "Der <strong>Golgi-Apparat</strong> verändert das Protein chemisch, sortiert es und verpackt es in Bläschen. Diese <strong>Vesikel</strong> wandern zur Zellmembran, verschmelzen mit ihr und geben den Inhalt nach aussen ab.",
        "Für die Prüfung zählt die Reihenfolge und die Begründung jeder Station. Wer nur die Organellen aufzählt, beantwortet die Frage nicht.",
      ],
      simple: ["Vier Stationen, immer dieselbe Reihenfolge: Kern, raues ER, Golgi, Membran.",
        "Der Kern liefert den Plan, das ER baut, der Golgi verpackt, die Membran gibt ab."],
      deep: ["Die Reihenfolge ist keine Konvention, sondern folgt aus der Kompartimentierung. Ein Protein für den Export darf nie frei im Plasma liegen, weil es dort falsch gefaltet oder abgebaut würde.",
        "Deshalb trägt die wachsende Kette ein Signalpeptid, das sie samt Ribosom ans ER dirigiert. Sie wird also nicht nachträglich transportiert, sondern schon während der Synthese eingeschleust.",
        "Im Golgi entscheidet die angehängte Zuckerkette über das Ziel. Dieselbe Maschinerie bedient Export, Lysosom und Membraneinbau, nur die Markierung unterscheidet sich."],
      analogy: ["Eine Grossküche. Das Rezeptbuch im Büro verlässt den Raum nie, kopiert wird auf Zettel.",
        "Die Kochstationen arbeiten nach dem Zettel. Die Anrichte würzt nach, richtet an und verpackt für den Versand.",
        "Zuletzt geht das Tablett durch die Durchreiche nach draussen. Vier Stationen, feste Reihenfolge."],
      visual: (M.ILLUS["bio-cells"] || [])[0] || { title: "Der Exportweg", html: exportFlow, caption: "Vier Stationen." },
      check: mc("teach-cell-u1", "Ein Protein ist am rauen ER fertig gefaltet. Welche Station kommt als Nächstes?",
        ["die Zellmembran", "der Golgi-Apparat", "der Zellkern", "das Lysosom"], 1,
        "Nach dem rauen ER folgt immer der Golgi-Apparat. Dort wird das Protein chemisch verändert, sortiert und in Vesikel verpackt. Erst danach geht es zur Membran.",
        { ref: "Einheit 1" }),
    },
    {
      concept: "Warum Pflanzen beide Energieorganellen brauchen",
      takeaway: "Der Chloroplast speichert Energie in Glucose, das Mitochondrium macht sie als ATP nutzbar.",
      body: [
        "Photosynthese und Zellatmung werden oft für Gegenstücke gehalten. Bilanzmässig stimmt das, aber sie erfüllen zwei verschiedene Aufgaben, und eine Zelle braucht beide.",
        "Der <strong>Chloroplast</strong> nimmt Lichtenergie auf und legt sie chemisch in Glucose ab. Das ist ein Speicher, kein Treibstoff. Die Zelle kann Glucose nicht direkt verwenden.",
        "Das <strong>Mitochondrium</strong> baut Glucose ab und überträgt die Energie auf ATP. Nur ATP kann die Zelle ausgeben, für Transport, Bewegung und Synthese.",
        "Dazu kommt die Zeit: Photosynthese läuft nur bei Licht, die Atmung rund um die Uhr. Eine Pflanze ohne Mitochondrien wäre nachts handlungsunfähig.",
      ],
      simple: ["Glucose ist der Sparstrumpf, ATP ist das Bargeld.",
        "Der Chloroplast füllt den Sparstrumpf, das Mitochondrium wechselt in Bargeld."],
      deep: ["Die beiden Vorgänge laufen nicht nur an verschiedenen Orten, sondern über verschiedene Zwischenstufen. Die Photosynthese nutzt NADPH als Überträger, die Atmung NADH.",
        "Auch die Membranen arbeiten gegenläufig: In der Thylakoidmembran wird der Protonengradient durch Lichtenergie aufgebaut, in der inneren Mitochondrienmembran durch Elektronen aus der Glucose.",
        "Deshalb ist die Aussage «Atmung ist Photosynthese rückwärts» nur als Summengleichung richtig und als Mechanismus falsch."],
      analogy: ["Ein Solarpanel und eine Steckdose. Das Panel lädt den Akku, wenn die Sonne scheint.",
        "Die Steckdose gibt Strom, wann immer man ihn braucht, auch nachts.",
        "Wer nur ein Panel hat, steht im Dunkeln. Wer nur eine Steckdose hat, hat nichts zum Abrufen."],
      visual: (M.ILLUS["bio-energy"] || [])[0] || { title: "Vergleich", html: energyCompare, caption: "Speichern gegen nutzbar machen." },
      check: mc("teach-cell-check", "Warum besitzen Pflanzenzellen trotz Chloroplasten auch Mitochondrien?",
        ["als Reserve", "weil sie den erzeugten Zucker ebenfalls veratmen müssen, besonders nachts",
         "weil Chloroplasten kein ATP liefern können", "das stimmt nicht, sie haben keine"], 1,
        "Photosynthese speichert Energie in Glucose. Nutzbar ist für die Zelle aber nur ATP, und das entsteht bei der Zellatmung im Mitochondrium. Nachts läuft ausserdem nur noch die Atmung.",
        { ref: "Einheit 2" }),
    },
    {
      concept: "Bau folgt Funktion",
      takeaway: "Jedes Strukturmerkmal eines Organells löst ein konkretes Problem seiner Aufgabe.",
      body: [
        "Organellen lassen sich auswendig lernen. Viel tragfähiger ist es, aus einem Strukturmerkmal auf die Funktion zu schliessen, denn das funktioniert auch bei einem unbekannten Organell.",
        "Der Gedankengang ist immer derselbe: Welches Merkmal fällt auf, welches Problem löst es, welche Funktion folgt daraus. Eine Membran grenzt ab, eine Faltung vergrössert die Fläche, eigene DNA erlaubt eigene Vermehrung.",
        "In der Prüfung genügt es deshalb nie, ein Organell zu benennen. Verlangt ist die Kette von der Struktur über das gelöste Problem zur Funktion, am besten mit einem Beispiel.",
      ],
      simple: ["Frag bei jedem Merkmal: Was wäre unmöglich, wenn es fehlte?",
        "Die Antwort ist die Funktion."],
      deep: ["Der Zusammenhang ist kein Zufall, sondern Ergebnis von Selektion. Strukturen, die ihre Aufgabe schlechter erfüllen, setzen sich langfristig nicht durch.",
        "Dazu kommen harte physikalische Grenzen: Stoffaustausch braucht Fläche, abweichende Bedingungen brauchen eine Abgrenzung, Gradienten brauchen einen geschlossenen Raum.",
        "Bei Prokaryoten versagt das Modell teilweise, weil dort dieselben Aufgaben ohne membranumschlossene Organellen gelöst werden, etwa über Einstülpungen der Zellmembran."],
      analogy: ["Ein Werkzeug verrät seine Aufgabe durch seine Form. Eine Zange hat lange Griffe, weil sie Kraft übersetzen muss.",
        "Ein Sieb hat Löcher, weil es trennen soll. Niemand muss das auswendig lernen.",
        "Bei Organellen ist es dasselbe, nur dass man die Merkmale erst kennen muss."],
      visual: { title: "Vier Merkmale und das Problem, das sie lösen", html: structureFunction,
        caption: "Von links nach rechts steigt die Aussagekraft: Die Anzahl verrät die Aufgabe der ganzen Zelle." },
      check: mc("teach-cell-u3", "Eine unbekannte Zelle enthält auffällig viele stark gefaltete Mitochondrien. Was folgt daraus?",
        ["sie ist besonders alt", "sie hat einen hohen und dauerhaften Energiebedarf",
         "sie betreibt Photosynthese", "sie teilt sich selten"], 1,
        "Faltung vergrössert die Membranfläche und damit die Zahl der Enzymkomplexe der Atmungskette. Viele stark gefaltete Mitochondrien bedeuten hohen ATP-Bedarf, typisch für Herz- und Skelettmuskelzellen.",
        { ref: "Einheit 3" }),
    },
  ];

  /* Strukturmodell statt Formelmodell */
  D.formula = {
    kind: "structure-function",
    isModel: true,
    question: "Wie schliesse ich von einem Strukturmerkmal auf die Funktion, statt beides auswendig zu lernen?",
    words: "Jedes Strukturmerkmal löst ein Problem der Aufgabe. Wer das Problem benennt, hat die Funktion.",
    spoken: "Struktur, dann Mechanismus, dann Funktion. Wer das gelöste Problem benennt, hat die Funktion.",
    steps: [
      { label: "Struktur", text: "Das auffällige Merkmal benennen: Membran, Faltung, eigene DNA, Anzahl, Grösse." },
      { label: "Mechanismus", text: "Fragen, was dieses Merkmal physikalisch oder chemisch ermöglicht. Eine Membran hält abweichende Bedingungen, eine Faltung vervielfacht die Fläche." },
      { label: "Funktion", text: "Daraus die Aufgabe ableiten. Mehr Fläche bedeutet mehr Enzymkomplexe und damit höheren Umsatz." },
      { label: "Woran man es sieht", text: "Ein beobachtbarer Beleg: Herzmuskelzellen haben besonders viele Cristae, Drüsenzellen besonders viel raues ER." },
      { label: "Grenze", text: "Bei Prokaryoten versagt das Modell, weil dieselben Aufgaben ohne Organellen gelöst werden." },
    ],
    control: "Nimm das Merkmal gedanklich weg. Lässt sich sagen, welche Aufgabe dann unmöglich wäre, hast du den Zusammenhang verstanden.",
    notUse: "Nicht umgekehrt auf eine einzige zwingende Struktur schliessen. Evolution findet oft mehrere Lösungen für dasselbe Problem.",
    why: [
      "Zellen sind das Ergebnis von Selektion. Strukturen, die ihre Aufgabe schlechter erfüllen, setzen sich langfristig nicht durch.",
      "Dazu kommen echte physikalische Grenzen: Austausch braucht Fläche, abweichende Bedingungen brauchen Abgrenzung, Gradienten brauchen einen geschlossenen Raum.",
      "Deshalb lässt sich auch bei einem unbekannten Organell argumentieren, sobald sein Strukturmerkmal bekannt ist.",
    ],
  };
  delete D.visual;
  delete D.check;
})();

/* Dauerhaft sichtbare Hörleiste und Sprung nach oben. */
(function () {
  "use strict";
  var M = window.MNEMIKA;

  M.mountChrome = function () {
    if (document.querySelector(".audiobar")) return;

    var bar = document.createElement("div");
    bar.className = "audiobar";
    bar.hidden = true;
    bar.setAttribute("role", "region");
    bar.setAttribute("aria-label", "Vorlesen");
    bar.innerHTML = `<span class="ab-state" id="ab-state">liest vor</span>
      <span class="ab-txt" id="ab-txt"></span>
      <button id="ab-pause" aria-label="Pause">Pause</button>
      <button id="ab-again" aria-label="Satz wiederholen">↺</button>
      <button id="ab-stop" class="stop" aria-label="Vorlesen beenden">Stopp</button>`;
    document.body.appendChild(bar);

    var top = document.createElement("button");
    top.className = "totop";
    top.setAttribute("aria-label", "Nach oben");
    top.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5"/><path d="M5 12l7-7 7 7"/></svg>`;
    top.onclick = () => {
      try { window.scrollTo({ top: 0, behavior: "smooth" }); } catch (e) { window.scrollTo(0, 0); }
      var h = document.querySelector("main h1, main h2");
      if (h) { h.setAttribute("tabindex", "-1"); h.focus(); }
    };
    document.body.appendChild(top);
    var onScroll = () => top.classList.toggle("on", (window.scrollY || 0) > 420);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    var Sp = M.Speech;
    var state = () => bar.querySelector("#ab-state");
    var sync = (s) => {
      var live = Sp.playing || Sp.paused;
      bar.hidden = !live;
      if (!live) return;
      var map = { play: "liest vor", pause: "pausiert", await: "wartet auf deine Antwort", done: "fertig" };
      state().textContent = map[s] || (Sp.paused ? "pausiert" : "liest vor");
      bar.querySelector("#ab-pause").textContent = Sp.paused ? "Weiter" : "Pause";
      var cur = Sp.queue[Sp.idx];
      bar.querySelector("#ab-txt").textContent = cur ? String(cur.text).slice(0, 90) : "";
    };
    bar.querySelector("#ab-pause").onclick = () => { if (Sp.paused) Sp.resume(); else Sp.pause(); sync(); };
    bar.querySelector("#ab-again").onclick = () => Sp.again();
    bar.querySelector("#ab-stop").onclick = () => { Sp.stop(); bar.hidden = true; };

    Sp.onChange(sync);
    M.syncAudioBar = sync;
  };
})();

/* Wischkarten. Vorderseite Frage, Rückseite Antwort. Nach rechts heisst
   gewusst, nach links heisst nochmals. Beides fliesst in die Wiederholung. */
(function () {
  "use strict";
  var M = window.MNEMIKA;
  var esc = M.esc;

  /* R155 (MN-055): Fragekarten und Begriffskarten laufen durch dieselbe Kapitelauswahl:
     Programm, Ausprägung und die vom Lernenden gewählten Kapitel. Kein Rückfall auf alle Kapitel. */
  M.cardScopeIds = function () {
    var prog = typeof M.activeProgram === "function" ? M.activeProgram() : "";
    if (!prog || typeof M.activeChapterIds !== "function") return null;      /* noch nichts gewählt: ganzer Bestand */
    var ids = M.activeChapterIds();
    return ids instanceof Set ? ids : new Set(ids || []);
  };
  M.buildCards = function (opts) {
    var o = opts || {};
    var scope = M.cardScopeIds();
    var MIG = M.ID_MIGRATION || {};
    var inScope = (c) => !scope || scope.has(c.id) || (MIG[c.id] && scope.has(MIG[c.id]));
    var pool = M.allQuestions().filter((x) => inScope(x.chapter));
    if (o.subject) pool = pool.filter((x) => x.chapter.subject === o.subject);
    if (o.chapterId) pool = pool.filter((x) => x.chapter.id === o.chapterId);
    var cards = [];
    pool.forEach(({ q, chapter }) => {
      var front = q.prompt, back = "";
      if (q.type === "mc" || q.type === "tf") { if (Array.isArray(q.options) && q.options[q.answer] != null) back = String(q.options[q.answer]); else if (q.type === "tf" && typeof q.answer === "boolean") back = q.answer ? "Richtig" : "Falsch"; else return; } /* r177: ohne vollständige Daten (Fach noch nicht geladen) keine Karte statt einer falschen Rückseite */
      else if (q.type === "numeric") back = q.answer + (q.unit ? " " + q.unit : "");
      else if (q.type === "order") back = (q.items || []).join("  →  ");
      else if (q.type === "keywords") back = q.modelAnswer || (q.keywords || []).join(", ");
      if (!back) return;
      cards.push({ id: q.id, front, back, why: q.explanation || "", chapter, subject: chapter.subject });
    });
    // Begriffskarten aus den Grundbegriffen der Einführungen, nur aus Kapiteln der Auswahl
    M.chapters.forEach((c) => {
      if (!inScope(c)) return;
      if (o.subject && c.subject !== o.subject) return;
      if (o.chapterId && c.id !== o.chapterId) return;
      ((c.intro && c.intro.terms) || []).forEach((t, i) => {
        cards.push({ id: "term:" + c.id + ":" + i, front: t[0], back: t[1],
          why: "Grundbegriff aus dem Kapitel " + c.title, chapter: c, subject: c.subject, term: true });
      });
    });
    return cards;
  };

  /* Auswahl: fällige und schwache zuerst, dann neue. Für später aufgehobene Karten kommen in einer späteren Runde früher dran. */
  M.pickCards = function (cards, n, S, isDue) {
    var today = M.dayKey ? M.dayKey() : "";
    var later = S.cardsLater || {};
    var seen = new Set();
    var scored = cards.filter((c) => { if (seen.has(c.id)) return false; seen.add(c.id); return true; }).map((c) => {
      var it = S.items[c.id];
      var s = Math.random() * 0.35;
      if (!it) s += 0.55;
      else {
        if (isDue(c.id)) s += 0.9;
        if (it.ok < 2) s += 0.6;
      }
      if (later[c.id] && later[c.id] !== today) s += 0.7;
      return { c, s };
    }).sort((a, b) => b.s - a.s);
    return scored.slice(0, n).map((x) => x.c);
  };

  /* ---------- Sitzung: feste Rundengrösse, ein Eintrag pro Karte, Aufräumen beim Verlassen ---------- */
  var active = null; /* { token, el, cleanups:[], timers:[] } */
  function lifetime(state, el) {
    dispose();
    active = { token: state.session, el: el, cleanups: [], timers: [] };
    return active;
  }
  function dispose() {
    if (!active) return;
    active.timers.forEach((t) => clearTimeout(t));
    active.cleanups.splice(0).forEach((f) => { try { f(); } catch (e) {} });
    active = null;
  }
  M.disposeCards = dispose;
  M.cardsLifetime = () => (active ? { token: active.token, listeners: active.cleanups.length, timers: active.timers.length } : null);
  function on(target, ev, fn, opt) { target.addEventListener(ev, fn, opt); active.cleanups.push(() => target.removeEventListener(ev, fn, opt)); }
  function live(state, el) {
    return !!active && active.token === state.session && el.isConnected && !el.hidden &&
      document.body.dataset.view === "cards";
  }

  /* ---------- Ansicht ---------- */
  M.renderCards = function (el, state, api) {
    const { deck } = state;
    /* Beim Zurückkehren: eine bereits gewertete Karte wird nicht ein zweites Mal angeboten */
    if (state.committed === state.i && state.i < deck.length) state.i += 1;
    if (!deck.length) return renderEmpty(el, state, api);
    if (state.i >= deck.length) return renderDone(el, state, api);
    var c = deck[state.i];
    el.innerHTML = `<div class="swipe">
      <div class="swipe-head">
        <span class="tag cy">${esc(M.SUBJECTS[c.subject].short)}</span>
        <span class="tag">${esc(c.chapter.title)}</span>
        ${c.term ? '<span class="tag gold">Begriff</span>' : ""}
        <span class="swipe-count num" aria-label="Karte ${state.i + 1} von ${deck.length}">${state.i + 1} / ${deck.length}</span>
      </div>
      <p class="swipe-budget small muted">Noch ${deck.length - state.i} von ${deck.length} Karten in dieser Runde</p>
      <div class="deck">
        ${deck.slice(state.i + 1, state.i + 3).reverse().map((_, k) =>
          `<div class="card-ghost g${k}"></div>`).join("")}
        <div class="card-swipe" id="card">
          <div class="cs-face cs-front">
            <span class="cs-kicker">${c.term ? "Was bedeutet" : "Frage"}</span>
            <p>${esc(c.front)}</p>
          </div>
          <div class="cs-face cs-back" id="cs-answer" hidden>
            <span class="cs-kicker">Antwort</span>
            <p>${esc(c.back)}</p>
            ${c.why ? `<span class="cs-why">${esc(c.why)}</span>` : ""}
          </div>
          <div class="cs-stamp cs-yes">Gewusst</div>
          <div class="cs-stamp cs-no">Nochmals</div>
        </div>
      </div>
      <div class="cs-toggle-row"><button class="btn go cs-flip" id="flip" aria-expanded="false" aria-controls="cs-answer">Antwort anzeigen</button></div>
      <div class="swipe-act">
        <button class="btn swipe-no" id="no">← Nochmals</button>
        <button class="btn swipe-skip" id="later">Für später aufheben</button>
        <button class="btn go swipe-yes" id="yes">Gewusst →</button>
      </div>
      <p class="cs-status small muted" role="status" aria-live="polite"></p>
      <div class="keyhint">Wischen, oder <b>←</b> nochmals, <b>→</b> gewusst, <b>Leertaste</b> Antwort zeigen oder zuklappen.</div>
    </div>`;
    wireCard(el, state, api);
  };

  function wireCard(el, state, api) {
    var life = lifetime(state, el);
    var card = el.querySelector("#card");
    var back = el.querySelector(".cs-back");
    var flipBtn = el.querySelector("#flip");
    var yes = el.querySelector(".cs-yes");
    var no = el.querySelector(".cs-no");
    var flipped = false;
    /* Die Frage bleibt immer sichtbar (MN-066); der Knopf ausserhalb der Karte zeigt oder verbirgt nur die Antwort. */
    var flip = () => {
      if (!live(state, el)) return;
      flipped = !flipped;
      back.hidden = !flipped;
      if (flipped) state.flippedAt = state.i;
      flipBtn.textContent = flipped ? "Antwort zuklappen" : "Antwort anzeigen";
      flipBtn.setAttribute("aria-expanded", String(flipped));
    };
    flipBtn.onclick = flip;

    var x0 = null, dx = 0, dragging = false;
    var start = (x) => { if (state.committed === state.i) return; x0 = x; dragging = true; card.classList.add("dragging"); };
    var move = (x) => {
      if (!dragging) return;
      dx = x - x0;
      card.style.transform = `translateX(${dx}px) rotate(${dx / 22}deg)`;
      yes.style.opacity = dx > 25 ? Math.min(1, (dx - 25) / 70) : 0;
      no.style.opacity = dx < -25 ? Math.min(1, (-dx - 25) / 70) : 0;
    };
    var end = () => {
      if (!dragging) return;
      dragging = false; card.classList.remove("dragging");
      if (dx > 95) return decide("known");
      if (dx < -95) return decide("again");
      card.style.transform = ""; yes.style.opacity = 0; no.style.opacity = 0; dx = 0;
    };
    /* MN-056/MN-059: genau ein Eintrag pro Karte. Die Sperre wird gesetzt, bevor irgendetwas
       gewertet oder animiert wird. Später zählt nicht als Antwort und verlängert die Runde nicht. */
    var decide = (rating) => {
      if (!live(state, el)) return;
      if (state.committed === state.i) return;
      var idx = state.i;
      state.committed = idx;
      el.querySelectorAll(".swipe-act .btn").forEach((b) => { b.disabled = true; });
      var c = state.deck[idx];
      var attemptId = state.session + ":" + idx;
      state.events.push({ attemptId, itemId: c.id, rating, independentEvidence: false });
      if (rating === "deferred") api.defer(c);
      else api.answer(c, rating === "known", flipped || state.flippedAt === idx);
      if (rating !== "deferred") card.classList.add(rating === "known" ? "fly-right" : "fly-left");
      var st = el.querySelector(".cs-status");
      if (st) st.textContent = rating === "deferred" ? "Für später aufgehoben. Die Runde bleibt bei " + state.deck.length + " Karten." : "";
      var t = setTimeout(() => {
        if (!live(state, el) || state.i !== idx) return;
        state.i = idx + 1;
        M.renderCards(el, state, api);
      }, rating === "deferred" ? 160 : 260);
      life.timers.push(t);
    };
    on(card, "mousedown", (e) => start(e.clientX));
    on(window, "mousemove", (e) => move(e.clientX));
    on(window, "mouseup", end);
    on(card, "touchstart", (e) => start(e.touches[0].clientX), { passive: true });
    on(card, "touchmove", (e) => move(e.touches[0].clientX), { passive: true });
    on(card, "touchend", end);

    el.querySelector("#yes").onclick = () => decide("known");
    el.querySelector("#no").onclick = () => decide("again");
    el.querySelector("#later").onclick = () => decide("deferred");

    /* MN-057: Tasten nur, solange diese Ansicht sichtbar und diese Runde aktiv ist. */
    on(document, "keydown", (e) => {
      if (!live(state, el)) return;
      var t = e.target;
      if (t && (/INPUT|TEXTAREA|SELECT/.test(t.tagName) || t.isContentEditable || (t.closest && t.closest("dialog,[role=dialog],[role=menu]")))) return;
      if (e.repeat && (e.key === "ArrowRight" || e.key === "ArrowLeft")) { e.preventDefault(); return; }
      if (e.key === "ArrowRight") { e.preventDefault(); decide("known"); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); decide("again"); }
      else if (e.key === " " && !(t && /BUTTON|A/.test(t.tagName))) { e.preventDefault(); flip(); }
    });
  }

  function renderEmpty(el, state, api) {
    dispose();
    el.innerHTML = `<div class="swipe"><div class="card result">
      <div class="small muted">Wischkarten</div>
      <h2>In deiner Auswahl gibt es keine Karten</h2>
      <p class="dtext">Für die gewählten Fächer und Kapitel liegen keine Lernkarten vor. Es werden keine Karten aus anderen Fächern gemischt.</p>
      <div class="row" style="margin-top:16px;justify-content:center">
        <button class="btn go" id="cards-scope">Fächer und Kapitel wählen</button>
        <button class="btn ghost" id="home2">Zur Übersicht</button></div></div></div>`;
    el.querySelector("#cards-scope").onclick = () => M.go("settings");
    el.querySelector("#home2").onclick = () => M.go("home");
  }

  function renderDone(el, state, api) {
    dispose();
    var known = state.known, total = state.known + state.again, deferred = state.deferred || 0;
    var answered = total;
    var pct = total ? Math.round((known / total) * 100) : 0;
    var verdict = !total ? "Keine Karte bewertet."
      : state.again ? "Die markierten Karten kommen morgen früh wieder."
      : deferred ? "Die bewerteten Karten sitzen. Die aufgehobenen Karten kommen in einer späteren Runde."
      : "Alle Karten dieser Runde als gewusst eingeschätzt.";
    el.innerHTML = `<div class="swipe"><div class="card result">
      <div class="small muted">Wischkarten</div>
      ${total ? `<div class="big" style="color:${pct >= 80 ? "var(--green)" : pct >= 55 ? "var(--amber)" : "var(--coral)"}">${pct}%</div>` : ""}
      <div class="verdict"><b>${known} gewusst, ${state.again} zum Wiederholen${deferred ? ", " + deferred + " für später" : ""}</b>
        ${verdict}</div>
      <p class="small muted">${answered} bearbeitet, ${deferred} für später. Das ist noch kein Nachweis für die Prüfung.</p>
      <div class="grid g3" style="margin-top:14px">
        <div class="stat"><b>+${state.xp}</b><span>XP</span></div>
        <div class="stat"><b>${state.flips}</b><span>mal umgedreht</span></div>
        <div class="stat"><b>${state.deck.length}</b><span>Karten</span></div>
      </div>
      <div class="row" style="margin-top:16px;justify-content:center">
        <button class="btn go" id="again">Neuer Stapel</button>
        <button class="btn ghost" id="home2">Zur Übersicht</button>
      </div></div></div>`;
    el.querySelector("#again").onclick = () => api.restart();
    el.querySelector("#home2").onclick = () => M.go("home");
  }
})();

/* Neue Aufgabenformen mit eigenen Renderern. Alle tastaturbedienbar,
   keine reine Ziehbedienung. */
(function () {
  "use strict";
  var M = window.MNEMIKA;
  var esc = M.esc;

  /* ---------- Konstruktoren ---------- */
  M.multiSelect = (id, prompt, options, answers, explanation, o) =>
    Object.assign({ id, type: "multi", prompt, options, answers, explanation, difficulty: 2 }, o || {});
  M.matchPairs = (id, prompt, pairs, explanation, o) =>
    Object.assign({ id, type: "match", prompt, pairs, explanation, difficulty: 2 }, o || {});
  M.findError = (id, prompt, steps, badStep, explanation, o) =>
    Object.assign({ id, type: "finderror", prompt, steps, answer: badStep, explanation, difficulty: 3 }, o || {});
  M.completeExpression = (id, prompt, template, blanks, explanation, o) =>
    Object.assign({ id, type: "complete", prompt, template, blanks, explanation, difficulty: 2 }, o || {});
  M.claimEvidence = (id, prompt, claim, options, answer, explanation, o) =>
    Object.assign({ id, type: "claim", prompt, claim, options, answer, explanation, difficulty: 3 }, o || {});

  /* Beschriftung einer Grafik: Positionen werden per Auswahlfeld benannt,
     zusätzlich lassen sich die Punkte direkt anklicken. */
  M.labelDiagram = (id, prompt, viz, spots, explanation, o) =>
    Object.assign({ id, type: "label", prompt, viz, spots, explanation, difficulty: 3 }, o || {});

  /* ---------- Renderer ---------- */
  var R = {};
  M.QRENDER = R;

  R.multi = function (host, q, done) {
    host.innerHTML = `<p class="qhint">Mehrere Antworten sind richtig. Wähle alle zutreffenden.</p>
      <div class="opts multi">${q.options.map((o, i) =>
        `<button class="opt" role="checkbox" aria-checked="false" data-i="${i}">
          <span class="k">${"ABCDEF"[i]}</span><span>${esc(o)}</span></button>`).join("")}</div>
      <button class="btn go wide" id="msok">Auswahl prüfen</button>`;
    var chosen = {};
    host.querySelectorAll(".opt").forEach((b) => {
      b.onclick = () => {
        var i = +b.dataset.i;
        chosen[i] = !chosen[i];
        b.classList.toggle("sel", !!chosen[i]);
        b.setAttribute("aria-checked", chosen[i] ? "true" : "false");
      };
    });
    host.querySelector("#msok").onclick = () => {
      var picked = Object.keys(chosen).filter((k) => chosen[k]).map(Number).sort();
      var want = q.answers.slice().sort();
      var ok = picked.join(",") === want.join(",");
      host.querySelectorAll(".opt").forEach((b, i) => {
        b.disabled = true;
        if (want.indexOf(i) >= 0) b.classList.add("right");
        else if (chosen[i]) b.classList.add("wrong");
      });
      host.querySelector("#msok").disabled = true;
      done(ok, picked.join(","));
    };
  };

  R.match = function (host, q, done) {
    var rights = q.pairs.map((p) => p[1]).slice().sort();
    host.innerHTML = `<p class="qhint">Ordne jedem Eintrag links die passende Aussage rechts zu.</p>
      <div class="matchgrid">${q.pairs.map((p, i) => `<div class="matchrow">
        <span class="mleft">${esc(p[0])}</span>
        <select class="msel" data-i="${i}" aria-label="Zuordnung für ${esc(p[0])}">
          <option value="">bitte wählen</option>
          ${rights.map((r) => `<option value="${esc(r)}">${esc(r)}</option>`).join("")}
        </select></div>`).join("")}</div>
      <button class="btn go wide" id="mtok">Zuordnung prüfen</button>`;
    host.querySelector("#mtok").onclick = () => {
      var right = 0;
      host.querySelectorAll(".msel").forEach((s, i) => {
        var ok = s.value === q.pairs[i][1];
        if (ok) right += 1;
        s.disabled = true;
        s.closest(".matchrow").classList.add(ok ? "ok" : "no");
        if (!ok) s.closest(".matchrow").insertAdjacentHTML("beforeend",
          `<span class="mfix">richtig: ${esc(q.pairs[i][1])}</span>`);
      });
      host.querySelector("#mtok").disabled = true;
      done(right === q.pairs.length, right + "/" + q.pairs.length);
    };
  };

  R.finderror = function (host, q, done) {
    host.innerHTML = `<p class="qhint">Diese Rechnung führt zu einem falschen Ergebnis.
      Wähle den ersten Schritt, der nicht mehr stimmt.</p>
      <ol class="errsteps">${q.steps.map((s, i) =>
        `<li><button class="errstep" data-i="${i}"><span class="esn">${i + 1}</span>
          <span class="esx">${esc(s)}</span></button></li>`).join("")}</ol>`;
    host.querySelectorAll(".errstep").forEach((b) => {
      b.onclick = () => {
        var i = +b.dataset.i;
        host.querySelectorAll(".errstep").forEach((x, k) => {
          x.disabled = true;
          if (k === q.answer) x.classList.add("right");
          else if (k === i) x.classList.add("wrong");
        });
        done(i === q.answer, String(i + 1));
      };
    });
  };

  R.complete = function (host, q, done) {
    var html = esc(q.template);
    q.blanks.forEach((b, i) => {
      html = html.replace("___", `<input class="blank" data-i="${i}" size="6"
        aria-label="Lücke ${i + 1}" inputmode="text">`);
    });
    host.innerHTML = `<p class="qhint">Ergänze die Lücken.</p>
      <p class="template">${html}</p>
      <button class="btn go wide" id="cpok">Prüfen</button>`;
    host.querySelector("#cpok").onclick = () => {
      var right = 0;
      host.querySelectorAll(".blank").forEach((inp, i) => {
        var val = String(inp.value).trim().toLowerCase().replace(/[\u2212\u2013]/g, "-").replace(",", ".");
        var want = String(q.blanks[i]).toLowerCase().replace(/[\u2212\u2013]/g, "-").replace(",", ".");
        var zahlig = (s) => /^-?\d+(\.\d+)?$/.test(s);
        var ok = val === want || (zahlig(val) && zahlig(want) && Math.abs(+val - +want) < 1e-9);   /* R155 MNB-07 */
        if (ok) right += 1;
        inp.disabled = true;
        inp.classList.add(ok ? "ok" : "no");
        if (!ok) inp.insertAdjacentHTML("afterend", `<span class="mfix">${esc(q.blanks[i])}</span>`);
      });
      host.querySelector("#cpok").disabled = true;
      done(right === q.blanks.length, right + "/" + q.blanks.length);
    };
  };

  R.claim = function (host, q, done) {
    host.innerHTML = `<div class="claimbox"><span class="claim-lbl">Behauptung</span>
      <p>${esc(q.claim)}</p></div>
      <p class="qhint">Welcher Beleg stützt diese Behauptung am besten?</p>
      <div class="opts">${q.options.map((o, i) =>
        `<button class="opt" data-i="${i}"><span class="k">${"ABCD"[i]}</span><span>${esc(o)}</span></button>`).join("")}</div>`;
    host.querySelectorAll(".opt").forEach((b) => {
      b.onclick = () => {
        var i = +b.dataset.i;
        host.querySelectorAll(".opt").forEach((x, k) => {
          x.disabled = true;
          if (k === q.answer) x.classList.add("right");
          else if (k === i) x.classList.add("wrong");
        });
        done(i === q.answer, String(i));
      };
    });
  };

  R.label = function (host, q, done) {
    var names = q.spots.map((s) => s.name).slice().sort();
    host.innerHTML = `<p class="qhint">Ordne jeder markierten Stelle den richtigen Namen zu.
      Du kannst einen Punkt anklicken oder direkt im Feld wählen.</p>
      <div class="labelviz">${q.viz}
        <div class="spots">${q.spots.map((s, i) =>
          `<button class="spot" data-i="${i}" style="left:${s.x}%;top:${s.y}%"
            aria-label="Stelle ${i + 1}">${i + 1}</button>`).join("")}</div></div>
      <div class="matchgrid">${q.spots.map((s, i) => `<div class="matchrow" data-row="${i}">
        <span class="mleft"><span class="spotn">${i + 1}</span>${esc(s.hint || "diese Stelle")}</span>
        <select class="msel" data-i="${i}" aria-label="Name für Stelle ${i + 1}">
          <option value="">bitte wählen</option>
          ${names.map((nm) => `<option value="${esc(nm)}">${esc(nm)}</option>`).join("")}
        </select></div>`).join("")}</div>
      <button class="btn go wide" id="lbok">Beschriftung prüfen</button>`;
    host.querySelectorAll(".spot").forEach((b) => {
      b.onclick = () => {
        host.querySelectorAll(".matchrow").forEach((r) => r.classList.remove("focus"));
        var row = host.querySelector(`[data-row="${b.dataset.i}"]`);
        row.classList.add("focus");
        var sel = row.querySelector("select");
        if (sel.focus) sel.focus();
      };
    });
    host.querySelector("#lbok").onclick = () => {
      var right = 0;
      host.querySelectorAll(".msel").forEach((sel, i) => {
        var ok = sel.value === q.spots[i].name;
        if (ok) right += 1;
        sel.disabled = true;
        sel.closest(".matchrow").classList.add(ok ? "ok" : "no");
        if (!ok) sel.closest(".matchrow").insertAdjacentHTML("beforeend",
          `<span class="mfix">richtig: ${esc(q.spots[i].name)}</span>`);
      });
      host.querySelector("#lbok").disabled = true;
      done(right === q.spots.length, right + "/" + q.spots.length);
    };
  };

  M.renderQuestionBody = function (host, q, done) {
    var fn = R[q.type];
    if (!fn) return false;
    fn(host, q, done);
    return true;
  };
  M.solutionText = function (q) {
    if (q.type === "multi") return q.answers.map((i) => q.options[i]).join(" und ");
    if (q.type === "match") return q.pairs.map((p) => p[0] + " → " + p[1]).join("; ");
    if (q.type === "finderror") return "Schritt " + (q.answer + 1);
    if (q.type === "complete") return q.blanks.join(", ");
    if (q.type === "claim") return q.options[q.answer];
    if (q.type === "label") return q.spots.map((s, i) => (i + 1) + " " + s.name).join(", ");
    return null;
  };
})();

/* 40 neue Aufgaben in den neuen Formen, alle acht Fächer. */
(function () {
  "use strict";
  var M = window.MNEMIKA;
  const { multiSelect: ms, matchPairs: mp, findError: fe, completeExpression: ce, claimEvidence: cl } = M;
  var n = 0;
  function add(chapterId, q) {
    var c = M.chapter(chapterId);
    if (!c) return;
    c.questions = c.questions || [];
    c.questions.push(q); n += 1;
  }

  /* ---------------- Mathematik ---------------- */
  add("math-algebra", fe("nq-alg-1", "Löse 3x + 12 = 5x − 4.",
    ["3x + 12 = 5x − 4", "3x = 5x − 16", "3x − 5x = −16", "−2x = −16", "x = −8"], 4,
    "Bis Schritt 4 stimmt alles. Minus 16 geteilt durch minus 2 ergibt plus 8, nicht minus 8. Zwei gleiche Vorzeichen ergeben ein Plus."));
  add("math-algebra", ce("nq-alg-2", "Stelle ax + b = c nach x um.",
    "x = (c − ___) / ___", ["b", "a"],
    "Zuerst b auf beiden Seiten abziehen, dann durch a teilen. a darf nicht null sein."));
  add("math-derivatives", ms("nq-der-1", "Welche Aussagen über eine Stelle mit f'(x) = 0 sind richtig?",
    ["Es kann ein Hochpunkt sein", "Es kann ein Tiefpunkt sein", "Es muss ein Extremum sein", "Es kann ein Sattelpunkt sein"],
    [0, 1, 3], "Eine waagrechte Tangente ist nur ein Kandidat. Erst die zweite Ableitung oder ein Vorzeichenwechsel entscheidet. Bei f(x) = x³ ist f'(0) = 0 und trotzdem kein Extremum."));
  add("math-functions-basic", mp("nq-fun-1", "Ordne jeder Funktion ihren Graphen zu.",
    [["f(x) = 2x + 1", "Gerade mit Steigung 2"], ["f(x) = x²", "nach oben offene Parabel"],
     ["f(x) = 1/x", "Hyperbel mit zwei Ästen"], ["f(x) = 2ˣ", "Kurve, die immer schneller steigt"]],
    "Der höchste Exponent bestimmt die Grundform. Bei 1/x fehlt der Wert an der Stelle null."));
  add("math-probability", fe("nq-prob-1", "Wie gross ist die Wahrscheinlichkeit für zweimal Kopf?",
    ["P(Kopf) = 0,5", "Zwei Würfe sind unabhängig", "Also addieren: 0,5 + 0,5", "P = 1", "Also sicher"], 2,
    "Bei unabhängigen Ereignissen werden die Wahrscheinlichkeiten multipliziert, nicht addiert. Richtig ist 0,5 mal 0,5 gleich 0,25. Eine Wahrscheinlichkeit von 1 hätte bedeutet, dass zweimal Kopf sicher eintritt."));
  add("math-integrals", ce("nq-int-1", "Ergänze die Stammfunktion.",
    "∫ x² dx = x³ / ___ + ___", ["3", "c"],
    "Beim Integrieren wird der Exponent um eins erhöht und durch den neuen Exponenten geteilt. Die Konstante c gehört immer dazu."));

  /* ---------------- Physik ---------------- */
  add("phys-kinematics", ms("nq-kin-1", "Welche Aussagen zur gleichmässig beschleunigten Bewegung stimmen?",
    ["Der Weg wächst quadratisch mit der Zeit", "Die Geschwindigkeit wächst linear",
     "Die Beschleunigung nimmt mit der Zeit zu", "Die Fläche unter der v-t-Kurve ist der Weg"],
    [0, 1, 3], "Gleichmässig heisst: die Beschleunigung bleibt konstant. Daraus folgt eine lineare Geschwindigkeit und ein quadratischer Weg."));
  add("phys-newton-forces", mp("nq-newt-1", "Ordne Grösse und Einheit zu.",
    [["Kraft", "Newton"], ["Arbeit", "Joule"], ["Leistung", "Watt"], ["Druck", "Pascal"]],
    "Ein Newton ist ein Kilogramm mal Meter je Sekundenquadrat. Ein Joule ist ein Newtonmeter, ein Watt ein Joule je Sekunde."));
  add("phys-energy", fe("nq-phen-1", "Ein Körper fällt aus 20 m Höhe. Mit welcher Geschwindigkeit trifft er auf?",
    ["m·g·h = ½·m·v²", "g·h = ½·v²", "v = g·h / 2", "v = 9,81 · 20 / 2", "v = 98,1 m/s"], 2,
    "Aus g·h = ½·v² folgt zuerst v² = 2·g·h, danach muss die Wurzel gezogen werden. Richtig sind rund 19,8 m/s. 98 m/s wären 353 km/h aus 20 Metern Fall."));
  add("phys-circuits-power", ms("nq-circ-1", "Welche Aussagen zur Parallelschaltung stimmen?",
    ["Die Spannung ist an allen Zweigen gleich", "Die Ströme addieren sich",
     "Der Gesamtwiderstand ist kleiner als der kleinste Einzelwiderstand", "Der Gesamtwiderstand ist die Summe"],
    [0, 1, 2], "Die Summe der Widerstände gilt für die Reihenschaltung. Parallel öffnet man zusätzliche Wege, deshalb sinkt der Gesamtwiderstand."));
  add("phys-optics", mp("nq-opt-1", "Ordne Linse und Abbildung zu.",
    [["Sammellinse, Gegenstand ausserhalb 2f", "verkleinert, umgekehrt, reell"],
     ["Sammellinse, Gegenstand innerhalb f", "vergrössert, aufrecht, virtuell"],
     ["Zerstreuungslinse", "immer verkleinert, aufrecht, virtuell"]],
    "Die Lage des Gegenstands zur Brennweite entscheidet über Grösse, Lage und Art des Bildes."));

  /* ---------------- Chemie ---------------- */
  add("chem-equations-mole", ce("nq-chem-1", "Gleiche die Reaktionsgleichung aus.",
    "___ H₂ + O₂ → ___ H₂O", ["2", "2"],
    "Links stehen zwei Sauerstoffatome im O₂-Molekül, also müssen rechts zwei Wassermoleküle entstehen. Dafür braucht es zwei H₂."));
  add("chem-concentration-stoich", fe("nq-stoi-1", "Wie viel Sauerstoff reagiert mit 4 g Wasserstoff?",
    ["2 H₂ + O₂ → 2 H₂O", "Verhältnis H₂ zu O₂ ist 2 zu 1", "Also halb so viel Masse Sauerstoff", "m(O₂) = 4 g / 2 = 2 g"], 2,
    "Das Verhältnis 2 zu 1 gilt für Teilchen und damit für Mol, nicht für Gramm. 4 g Wasserstoff sind 2 mol, also 1 mol Sauerstoff, und das sind 32 g."));
  add("chem-acid-base", ms("nq-acid-1", "Welche Aussagen zur pH-Skala stimmen?",
    ["pH 3 ist zehnmal saurer als pH 4", "pH 3 ist hundertmal saurer als pH 5",
     "pH 7 ist bei 25 Grad neutral", "pH 8 ist sauer"],
    [0, 1, 2], "Die Skala ist logarithmisch: eine Stufe bedeutet Faktor zehn. Über 7 liegt der basische Bereich."));
  add("chem-redox", mp("nq-redox-1", "Ordne die Begriffe zu.",
    [["Oxidation", "Abgabe von Elektronen"], ["Reduktion", "Aufnahme von Elektronen"],
     ["Oxidationsmittel", "nimmt Elektronen auf und wird reduziert"],
     ["Reduktionsmittel", "gibt Elektronen ab und wird oxidiert"]],
    "Die Namen beziehen sich auf die Wirkung am Partner, nicht auf das eigene Schicksal. Genau das wird in der Prüfung verwechselt."));
  add("chem-polarity-forces", ms("nq-pol-1", "Welche Aussagen über Wasser stimmen?",
    ["Das Molekül ist gewinkelt", "Es bildet Wasserstoffbrücken",
     "Es ist unpolar", "Die hohe Siedetemperatur folgt aus den Wasserstoffbrücken"],
    [0, 1, 3], "Die gewinkelte Form verhindert, dass sich die Dipole aufheben. Deshalb ist Wasser polar und siedet viel höher, als seine Molekülmasse erwarten liesse."));

  /* ---------------- Biologie ---------------- */
  add("bio-cells", mp("nq-cell-1", "Ordne Organell und Aufgabe zu.",
    [["Zellkern", "verwahrt die DNA und gibt Kopien heraus"], ["Raues ER", "baut und faltet Exportproteine"],
     ["Golgi-Apparat", "verändert, sortiert und verpackt"], ["Lysosom", "verdaut mit Enzymen bei pH 5"]],
    "Der Exportweg verläuft in dieser Reihenfolge: Kern, raues ER, Golgi, Membran."));
  add("bio-cells", ms("nq-cell-2", "Welche Hinweise stützen die Endosymbiontentheorie?",
    ["Eigene ringförmige DNA", "Doppelte Membran", "Ribosomen vom bakteriellen Typ", "Lage im Zellkern"],
    [0, 1, 2], "Alle drei Merkmale sprechen für einen ursprünglich eigenständigen Organismus. Mitochondrien liegen im Plasma, nicht im Kern."));
  add("bio-mendel", fe("nq-mend-1", "Kreuzung zweier mischerbiger Pflanzen, rot dominant über weiss.",
    ["Elterngeneration Rr mal Rr", "Mögliche Gameten R und r", "Kombinationen RR, Rr, rR, rr",
     "Drei von vier sind weiss", "Verhältnis rot zu weiss ist 1 zu 3"], 3,
    "Drei von vier Kombinationen enthalten mindestens ein R und sind deshalb rot. Nur rr ist weiss. Das Verhältnis ist 3 zu 1 für rot."));
  add("bio-energy", ms("nq-bioen-1", "Welche Aussagen zur Zellatmung stimmen?",
    ["Sie liefert ATP", "Sie läuft im Mitochondrium", "Sie braucht Licht", "Sie verbraucht Sauerstoff"],
    [0, 1, 3], "Licht braucht nur die Photosynthese. Die Atmung läuft rund um die Uhr, auch in Pflanzenzellen."));
  add("bio-protein-synthesis", ce("nq-prot-1", "Ergänze den Informationsfluss.",
    "DNA → ___ → Protein, der zweite Schritt heisst ___", ["mRNA", "translation"],
    "Die Transkription erzeugt die mRNA im Kern, die Translation baut daraus am Ribosom die Aminosäurekette."));

  /* ---------------- Geschichte ---------------- */
  add("hist-ww1", cl("nq-hist-1", "Prüfe die Beweisführung.",
    "Das Attentat von Sarajevo war die Ursache des Ersten Weltkriegs.",
    ["Am 28. Juni 1914 wurde der Thronfolger erschossen",
     "Bündnissystem, Wettrüsten und Nationalismus bestanden schon Jahrzehnte vorher",
     "Österreich stellte ein Ultimatum an Serbien",
     "Der Krieg begann im August 1914"], 1,
    "Das Attentat war der Anlass. Zur Ursache wird es erst zusammen mit den langfristigen Bedingungen, die den Ausbruch überhaupt möglich machten. Genau diese Unterscheidung wird geprüft."));
  add("hist-ch-1798-1848", ms("nq-hist-2", "Welche Aussagen zum Sonderbundskrieg 1847 stimmen?",
    ["Er dauerte weniger als einen Monat", "Er forderte vergleichsweise wenige Opfer",
     "Er führte direkt zur Bundesverfassung 1848", "Er endete mit der Abspaltung der Urkantone"],
    [0, 1, 2], "Der Krieg dauerte 26 Tage. Danach folgte ein Kompromiss statt einer Abrechnung, und daraus entstand der Bundesstaat."));
  add("hist-dictatorships", mp("nq-hist-3", "Ordne Merkmal und Begriff zu.",
    [["Einparteienstaat mit Terror gegen Abweichler", "totalitäre Diktatur"],
     ["Herrschaft einer Gruppe ohne umfassenden Anspruch", "autoritäre Diktatur"],
     ["Gewaltenteilung und freie Wahlen", "Demokratie"]],
    "Totalitär heisst: der Staat beansprucht auch das Privatleben. Autoritär beschränkt sich auf die politische Macht."));
  add("hist-postwar-coldwar", cl("nq-hist-4", "Prüfe die Beweisführung.",
    "Der Kalte Krieg war ein reiner Machtkonflikt ohne ideologische Grundlage.",
    ["Beide Seiten rüsteten atomar auf",
     "Die Blöcke vertraten gegensätzliche Gesellschaftsmodelle und warben weltweit dafür",
     "Es gab Stellvertreterkriege in Korea und Vietnam",
     "Die Sowjetunion zerfiel 1991"], 1,
    "Machtinteressen bestanden, aber die Systemkonkurrenz war Teil des Konflikts. Der Beleg muss die ideologische Ebene zeigen, sonst widerlegt er die Behauptung nicht."));

  /* ---------------- Geografie ---------------- */
  add("geo-climate-diagrams", ms("nq-geo-1", "Ein Klimadiagramm zeigt das Temperaturmaximum im Januar. Was folgt daraus?",
    ["Die Station liegt auf der Südhalbkugel", "Juli ist dort Winter",
     "Die Station liegt am Äquator", "Trockenheit im Juli fällt in die kalte Jahreszeit"],
    [0, 1, 3], "Die Lage des Maximums verrät die Hemisphäre. Wer diesen Schritt überspringt, dreht die gesamte Jahreszeitenzuordnung um."));
  add("geo-usa-physical", mp("nq-geo-2", "Ordne Naturgefahr und Region zu.",
    [["Tornados", "mittlerer Westen"], ["Hurrikane", "Golf- und Südostküste"],
     ["Erdbeben", "pazifische Westküste"], ["Waldbrände", "Kalifornien im Sommer"]],
    "Jede Gefahr folgt aus Relief, Luftmassen oder Plattengrenze, nicht aus Zufall."));
  add("geo-plate-tectonics", mp("nq-geo-3", "Ordne Plattengrenze und Folge zu.",
    [["divergent", "neue Kruste am Mittelozeanischen Rücken"],
     ["konvergent mit Subduktion", "Tiefseerinne und Vulkankette"],
     ["konservativ", "Erdbeben ohne Vulkanismus"]],
    "An der San-Andreas-Verwerfung gleiten die Platten aneinander vorbei, deshalb bebt es dort, ohne dass Vulkane entstehen."));
  add("geo-demography", ms("nq-geo-4", "Welche Aussagen zum demografischen Übergang stimmen?",
    ["In Phase 2 sinkt die Sterberate zuerst", "Das stärkste Wachstum liegt in der Schere zwischen den Kurven",
     "In Phase 4 sind beide Raten niedrig", "Die Geburtenrate sinkt immer zuerst"],
    [0, 1, 2], "Bessere Hygiene und Ernährung senken zuerst die Sterberate. Die Geburtenrate folgt mit Verzögerung, und genau in dieser Lücke wächst die Bevölkerung am stärksten."));

  /* ---------------- Deutsch ---------------- */
  add("de-argumentation", cl("nq-de-1", "Prüfe die Beweisführung.",
    "Soziale Medien schaden der Konzentrationsfähigkeit von Jugendlichen.",
    ["Viele Jugendliche nutzen soziale Medien täglich",
     "Eine Längsschnittstudie zeigt bei intensiver Nutzung messbar kürzere Aufmerksamkeitsspannen",
     "Soziale Medien sind sehr beliebt",
     "Ich kenne jemanden, der sich schlecht konzentrieren kann"], 1,
    "Nur die Studie verbindet Nutzung und Wirkung. Verbreitung allein belegt keinen Schaden, und ein Einzelfall ist kein Beleg."));
  add("de-argumentation", ms("nq-de-2", "Was gehört zu einem vollständigen Argument?",
    ["Eine strittige Behauptung", "Eine Begründung", "Ein Beleg", "Eine rhetorische Frage"],
    [0, 1, 2], "Die rhetorische Frage ist ein Stilmittel, kein Argumentbestandteil. Ohne Beleg bleibt es bei einer Meinung."));
  add("de-text-types", mp("nq-de-3", "Ordne Textsorte und Kennzeichen zu.",
    [["Erörterung", "abwägend, sachlich, klare Gliederung"],
     ["Kommentar", "wertend, pointiert, klare Position"],
     ["Essay", "persönlich, gedanklich offen, assoziativ"]],
    "Die drei unterscheiden sich in Nähe, Position und Strenge. Die Prüfung verlangt die passende Form, nicht die beliebteste."));
  add("de-duerrenmatt", cl("nq-de-4", "Prüfe die Beweisführung.",
    "In Dürrenmatts Stück wird die Schuld der Gemeinde kollektiv.",
    ["Die Gemeinde ist arm", "Zuerst weisen alle das Angebot empört zurück, kaufen aber bereits auf Kredit ein",
     "Claire Zachanassian ist sehr reich", "Das Stück endet mit einer Beerdigung"], 1,
    "Der Widerspruch zwischen Worten und Handeln zeigt, wie sich die Schuld verteilt. Armut und Reichtum sind Rahmenbedingungen, kein Beleg für kollektive Schuld."));

  /* ---------------- Englisch ---------------- */
  add("en-analysis", cl("nq-en-1", "Check the reasoning.",
    "The narrator in the passage is unreliable.",
    ["The passage is written in the first person",
     "The narrator contradicts an event described earlier and cannot explain the gap",
     "The passage is set at night",
     "The narrator uses long sentences"], 1,
    "First person alone does not make a narrator unreliable. The contradiction is what shows the reader cannot trust the account."));
  add("en-analysis", mp("nq-en-2", "Match technique and effect.",
    [["Repetition", "emphasises and builds rhythm"], ["Metaphor", "transfers meaning from one field to another"],
     ["Irony", "says one thing and means another"], ["Enjambement", "carries a line over and delays resolution"]],
    "In the exam, naming the technique earns little. The effect earns the marks."));
  add("en-writing", ms("nq-en-3", "Which elements belong in a PEE paragraph?",
    ["A point about the text", "A short quotation", "An explanation of the effect", "A summary of the plot"],
    [0, 1, 2], "Plot summary is the most common way to lose marks. The question asks what the text does, not what happens in it."));
  add("en-vocabulary-grammar", ce("nq-en-4", "Complete the sentence.",
    "If I ___ more time, I would read the whole novel. The tense is the ___ conditional.",
    ["had", "second"],
    "The second conditional uses a past form in the if-clause and would plus infinitive in the main clause, for unreal present situations."));

  M.newQuestions = n;
})();

/* Aufgaben mit Grafikbeschriftung. Die Grafik stammt aus M.Viz. */
(function () {
  "use strict";
  var M = window.MNEMIKA;
  var V = M.Viz;
  var n = 0;
  function add(cid, q) { const c = M.chapter(cid); if (!c) return; (c.questions = c.questions || []).push(q); n += 1; }

  var exportViz = V.process({ title: "Der Weg eines Exportproteins",
    steps: [{ title: "1", text: "Hier wird die DNA abgelesen.", via: "mRNA" },
      { title: "2", text: "Hier übersetzen Ribosomen und falten.", via: "Vesikel" },
      { title: "3", text: "Hier wird verändert und verpackt.", via: "Vesikel" },
      { title: "4", text: "Hier verlässt das Protein die Zelle.", accent: true }],
    caption: "Vier unbeschriftete Stationen." });

  add("bio-cells", M.labelDiagram("nq-lbl-1", "Beschrifte die vier Stationen des Exportwegs.",
    exportViz,
    [{ x: 14, y: 46, name: "Zellkern", hint: "Station 1, ganz links" },
     { x: 38, y: 46, name: "Raues ER", hint: "Station 2" },
     { x: 62, y: 46, name: "Golgi-Apparat", hint: "Station 3" },
     { x: 86, y: 46, name: "Zellmembran", hint: "Station 4, ganz rechts" }],
    "Der Weg ist festgelegt: Kern, raues ER, Golgi, Membran. Wer die Reihenfolge kennt, kann jede Station benennen."));

  var cycleViz = V.barChart({ title: "Dauer der Zellzyklusphasen", yTitle: "Stunden", xTitle: "Phase",
    data: [["A", 11], ["B", 8], ["C", 4], ["D", 1]], caption: "Vier unbeschriftete Phasen." });
  add("bio-cell-cycle-mitosis", M.labelDiagram("nq-lbl-2", "Ordne den vier Balken die Phasen des Zellzyklus zu.",
    cycleViz,
    [{ x: 22, y: 40, name: "G1-Phase", hint: "der längste Balken" },
     { x: 42, y: 48, name: "S-Phase", hint: "zweitlängster Balken" },
     { x: 62, y: 62, name: "G2-Phase", hint: "dritter Balken" },
     { x: 82, y: 78, name: "Mitose", hint: "der kürzeste Balken" }],
    "Die Interphase aus G1, S und G2 dauert rund 23 Stunden, die Mitose selbst nur etwa eine."));

  var climViz = V.lineChart({ title: "Klimadiagramm einer Station", yTitle: "Wert", xTitle: "Monat",
    cats: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    series: [{ name: "Kurve 1", values: [9, 10, 12, 15, 19, 23, 26, 26, 22, 17, 12, 9] },
             { name: "Kurve 2", values: [88, 74, 55, 32, 14, 4, 2, 5, 24, 62, 95, 98] }],
    caption: "Zwei unbeschriftete Kurven." });
  add("geo-climate-diagrams", M.labelDiagram("nq-lbl-3", "Beschrifte die beiden Kurven und die Jahreszeiten.",
    climViz,
    [{ x: 50, y: 30, name: "Temperatur", hint: "steigt zur Jahresmitte" },
     { x: 50, y: 70, name: "Niederschlag", hint: "fällt zur Jahresmitte" },
     { x: 58, y: 88, name: "Sommertrockenheit", hint: "Juli und August" }],
    "Maximum der Temperatur im Juli bedeutet Nordhalbkugel. Trockener Sommer bei milden feuchten Wintern ist mediterranes Klima."));

  var forceViz = V.compare({ title: "Kräfte an einer schiefen Ebene",
    columns: [{ name: "A", rows: [["Richtung", "senkrecht nach unten"], ["Ursache", "Masse und g"]] },
              { name: "B", rows: [["Richtung", "entlang der Ebene"], ["Ursache", "Anteil der Gewichtskraft"]] }],
    caption: "Zwei unbeschriftete Kräfte." });
  add("phys-newton-forces", M.labelDiagram("nq-lbl-4", "Benenne die beiden Kräfte an der schiefen Ebene.",
    forceViz,
    [{ x: 25, y: 40, name: "Gewichtskraft", hint: "Spalte A" },
     { x: 75, y: 40, name: "Hangabtriebskraft", hint: "Spalte B" }],
    "Die Gewichtskraft zeigt immer senkrecht nach unten. Nur ihr Anteil entlang der Ebene treibt den Körper an."));

  M.labelQuestions = n;
})();

/* Ergänzt die beiden Kapitel mit zu wenig Aufgabenformen. */
(function () {
  "use strict";
  var M = window.MNEMIKA;
  var add = (cid, q) => { const c = M.chapter(cid); if (c) (c.questions = c.questions || []).push(q); };

  add("geo-usa-population", M.matchPairs("nq-usapop-1", "Ordne Region und Wanderungsbilanz zu.",
    [["Sun Belt", "starker Zuzug seit 1970"], ["Rust Belt", "Abwanderung nach dem Industrieabbau"],
     ["Grossstädte der Küsten", "hohe Mieten, selektiver Zuzug"], ["Great Plains", "Abwanderung aus ländlichen Counties"]],
    "Die Wanderung folgt Arbeitsplätzen, Steuern und Klima. Der Sun Belt gewinnt, der Rust Belt verliert."));
  add("geo-usa-population", M.multiSelect("nq-usapop-2", "Welche Aussagen zur Bevölkerung der USA stimmen?",
    ["Die Bevölkerung wächst weiterhin, auch durch Zuwanderung",
     "Der Süden und Westen wachsen schneller als der Nordosten",
     "Die Bevölkerung ist gleichmässig über die Fläche verteilt",
     "Metropolregionen binden den grössten Teil der Bevölkerung"],
    [0, 1, 3], "Die Verteilung ist stark ungleich: die Küsten und die Grossen Seen sind dicht besiedelt, die Great Plains und die Bergstaaten dünn."));
  add("geo-usa-population", M.claimEvidence("nq-usapop-3", "Prüfe die Beweisführung.",
    "Der Zuzug in den Sun Belt erklärt sich allein durch das Klima.",
    ["Arizona und Texas haben heisse Sommer",
     "Neben dem Klima wirken niedrigere Steuern, günstigere Wohnkosten und neue Arbeitsplätze",
     "Florida hat viele Strände", "Der Nordosten hat kalte Winter"], 1,
    "Klima ist ein Faktor, aber nicht der einzige. Eine tragfähige Antwort nennt mehrere Ursachen und gewichtet sie."));

  add("geo-usa-economy", M.matchPairs("nq-usaeco-1", "Ordne Raum und Wirtschaftsschwerpunkt zu.",
    [["Corn Belt", "Mais und Sojabohnen im Regenfeldbau"], ["High Plains", "Bewässerung aus dem Ogallala-Aquifer"],
     ["Silicon Valley", "Technologie und Forschung"], ["Golfküste", "Erdöl und Petrochemie"]],
    "Jeder Schwerpunkt folgt aus natürlichen Voraussetzungen oder historischen Standortentscheidungen."));
  add("geo-usa-economy", M.completeExpression("nq-usaeco-2", "Ergänze die Grenze der Landwirtschaft.",
    "Östlich des ___ Längengrads reicht der Niederschlag für Regenfeldbau, westlich davon braucht es ___.",
    ["100", "bewässerung"],
    "Der hundertste Längengrad markiert grob die 500-Millimeter-Isohyete. Westlich davon ist Ackerbau ohne Bewässerung kaum möglich."));
  add("geo-usa-economy", M.findError("nq-usaeco-3", "Warum wächst im Corn Belt Mais und nicht Weizen?",
    ["Mais braucht mehr Wasser als Weizen", "Der Corn Belt liegt östlich des 100. Längengrads",
     "Dort fällt mehr Niederschlag", "Weizen wächst deshalb überhaupt nicht in den USA",
     "Also wird Weizen gar nicht angebaut"], 3,
    "Bis Schritt 3 stimmt die Argumentation. Weizen wächst aber sehr wohl, nämlich in den trockeneren Great Plains. Die Frage ist nicht ob, sondern wo."));
})();

/* Korrekturen aus der Kapitel-Migration Japan -> USA.
   Der Befund und die Ersetzung stehen im Änderungsprotokoll. */
(function () {
  "use strict";
  var M = window.MNEMIKA;
  M.MIGRATION_FIXES = M.MIGRATION_FIXES || [];

  var c = M.chapter("geo-usa-physical");
  if (c && (c.examples || []).length) {
    var old = c.examples[0];
    if (/Kanto|Tokio|Tokyo/i.test(JSON.stringify(old))) {
      M.MIGRATION_FIXES.push({
        chapter: "geo-usa-physical",
        rejected: String(old.task || "").slice(0, 120),
        reason: "Inhalt aus dem früheren Japan-Kapitel, im USA-Kapitel sachlich falsch",
      });
      c.examples[0] = {
        level: "Grundlage",
        task: "Die Great Plains und das Zentrale Tiefland tragen einen Grossteil der Landwirtschaft "
          + "und der Verkehrsachsen der USA. Erkläre, warum dieser Raum gleichzeitig der gefährlichste "
          + "Tornadoraum der Erde ist.",
        given: ["Rocky Mountains im Westen, Appalachen im Osten, beide nord-südlich",
          "Kalte Luft aus Kanada, feuchtwarme Luft aus dem Golf von Mexiko",
          "Dazwischen ein offener Korridor ohne querliegendes Gebirge"],
        wanted: "Der kausale Zusammenhang zwischen Relief und Tornadohäufigkeit",
        strategy: "Vom Relief über die Luftmassen zur Wetterlage argumentieren, nicht umgekehrt.",
        steps: [
          "Die Gebirge verlaufen nord-südlich und versperren den Weg nicht.",
          "Polare Kaltluft kann deshalb ungehindert nach Süden vordringen.",
          "Gleichzeitig strömt feuchtwarme Golfluft nach Norden.",
          "Beide Luftmassen treffen im offenen Korridor direkt aufeinander.",
          "Der grosse Temperatur- und Feuchteunterschied erzeugt starke Scherung.",
        ],
        result: "Das Zentrale Tiefland vereint beste Nutzbarkeit mit der höchsten Tornadohäufigkeit "
          + "der Erde. Ebendieselbe Offenheit, die Landwirtschaft und Verkehr begünstigt, lässt die "
          + "Luftmassen aufeinandertreffen.",
        control: "Gegenprobe Europa: Alpen und Pyrenäen liegen quer und trennen die Luftmassen. "
          + "Dort fehlen vergleichbare Tornadoserien.",
        wrong: "Es liege am flachen Gelände allein.",
        wrongWhy: "Flach ist auch die ungarische Tiefebene. Entscheidend ist die Gebirgsrichtung, "
          + "die zwei gegensätzliche Luftmassen zusammenführt.",
      };
    }
  }
})();

/* Production content resolver: German source content only. */
(function () {
  "use strict";
  var M = window.MNEMIKA;
  M.CONTENT_OVERLAY = { de: {} };
  M.OVERLAY_TOTAL = 0;
  M.OVERLAY_FILLED = 0;
  M.tc = function (entityId, path, de) { return de; };
  M.contentAudit = function () {
    return { total: 0, filled: 0, missingEnglish: 0, missingFrench: 0, coverage: 100 };
  };
})();

/* Lokale Medien. Alle Dateien liegen im Repository unter assets/ und sind
   hier eingebettet, damit die Anwendung ohne Netz funktioniert. */
(function () {
  "use strict";
  var M = window.MNEMIKA;
  M.MEDIA = [            {"id": "om-1F9EC", "type": "illustration", "subject": "bio", "title": "DNA-Doppelhelix", "alt": "Schematische DNA", "caption": "Der Bauplan liegt im Zellkern.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-1F9EC/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-1F9EC.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiPgogICAgPHJlY3QgeD0iMjIuMTg0NCIgeT0iNTAuMjMzNiIgd2lkdGg9IjIiIGhlaWdodD0iNi44NDY3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzEuMTUwNiAzMi4xMDk2KSByb3RhdGUoLTQ1KSIgZmlsbD0iIzkyZDNmNSIvPgogICAgPHJlY3QgeD0iMTcuMzQyOSIgeT0iNDUuMzkxOSIgd2lkdGg9IjIiIGhlaWdodD0iNi44NDcyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjkuMTQ1MiAyNy4yNjgxKSByb3RhdGUoLTQ1KSIgZmlsbD0iI2VhNWE0NyIvPgogICAgPHJlY3QgeD0iMzAuMTQxMiIgeT0iMzMuMzEzOCIgd2lkdGg9IjIiIGhlaWdodD0iNi4yNTA1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTYuNjQ1MiAzMi42OTI5KSByb3RhdGUoLTQ1KSIgZmlsbD0iIzkyZDNmNSIvPgogICAgPHJlY3QgeD0iMzQuNTYwOCIgeT0iMzcuNzMzNiIgd2lkdGg9IjIiIGhlaWdodD0iNi4yNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE4LjQ3NTkgMzcuMTEyNSkgcm90YXRlKC00NSkiIGZpbGw9IiNlYTVhNDciLz4KICAgIDxyZWN0IHg9IjM4LjQ0NjgiIHk9IjMzLjk3MTIiIHdpZHRoPSIyIiBoZWlnaHQ9IjYuODQ2NyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE0Ljg4ODIgMzguODQ1Nykgcm90YXRlKC00NSkiIGZpbGw9IiM5MmQzZjUiLz4KICAgIDxyZWN0IHg9IjMzLjYwNTMiIHk9IjI5LjEyOTQiIHdpZHRoPSIyIiBoZWlnaHQ9IjYuODQ3MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyLjg4MjggMzQuMDA0Mikgcm90YXRlKC00NSkiIGZpbGw9IiNlYTVhNDciLz4KICAgIDxwb2x5Z29uIGZpbGw9IiM5MmQzZjUiIHBvaW50cz0iNDEuNzQ3NyAzMC4yNTIzIDQwLjAxNjEgMzEuOTgzOSAzNy4xMTM4IDI5LjA4MTUgMzguMTUxOCAyOC4wNDM1IDQxLjc0NzcgMzAuMjUyMyIvPgogICAgPHBvbHlnb24gZmlsbD0iI2VhNWE0NyIgcG9pbnRzPSI0NC4wMzc2IDMzLjc2NyA0Mi45MTg1IDM0Ljg4NjIgNDAuMDE2MSAzMS45ODM5IDQxLjc0NzcgMzAuMjUyMyA0NC4wMzc2IDMzLjc2NyIvPgogICAgPHJlY3QgeD0iNTEuMzUxOCIgeT0iMjAuOTQyNiIgd2lkdGg9IjIiIGhlaWdodD0iNi4yNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEuNjg0OCA0NC4wNjc2KSByb3RhdGUoLTQ1KSIgZmlsbD0iIzkyZDNmNSIvPgogICAgPHJlY3QgeD0iNDYuOTMyMyIgeT0iMTYuNTIyNyIgd2lkdGg9IjIiIGhlaWdodD0iNi4yNTA1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSguMTQ1OCAzOS42NDgpIHJvdGF0ZSgtNDUpIiBmaWxsPSIjZWE1YTQ3Ii8+CiAgICA8cmVjdCB4PSI1NS44MzU4IiB5PSIxNi41ODIyIiB3aWR0aD0iMiIgaGVpZ2h0PSI2Ljg0NjciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIuNTAwOCA0Ni4wNDg1KSByb3RhdGUoLTQ1KSIgZmlsbD0iIzkyZDNmNSIvPgogICAgPHJlY3QgeD0iNTAuOTk0MyIgeT0iMTEuNzQwNCIgd2lkdGg9IjIiIGhlaWdodD0iNi44NDcyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0LjUwNjIgNDEuMjA3KSByb3RhdGUoLTQ1KSIgZmlsbD0iI2VhNWE0NyIvPgogICAgPHJlY3QgeD0iMTcuODg4OSIgeT0iNTQuNTI5MSIgd2lkdGg9IjIiIGhlaWdodD0iNi44NDY3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzUuNDQ2MSAzMC4zMzAzKSByb3RhdGUoLTQ1KSIgZmlsbD0iIzkyZDNmNSIvPgogICAgPHJlY3QgeD0iMTMuMDQ3NCIgeT0iNDkuNjg3MyIgd2lkdGg9IjIiIGhlaWdodD0iNi44NDcyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzMuNDQwNyAyNS40ODg4KSByb3RhdGUoLTQ1KSIgZmlsbD0iI2VhNWE0NyIvPgogICAgPHBhdGggZmlsbD0iIzkyZDNmNSIgZD0iTTQ4LjgxMjgsMzEuODQyMmMuNzkyLDMuOTU5OCwuMzc0Nyw4LjQzNTgtNC4wOCwxMi44OTA1LTQuNDU0OCw0LjQ1NDgtOC45MzA4LDQuODcyLTEyLjg5MDUsNC4wOC0yLjEyODQtLjQzMTMtNC4xMTU0LTEuMjE2Mi01Ljg3NjEtMS45MDIxLS4yMTIyLS4wODQ4LS40MjQyLS4xNjk3LS42MjkzLS4yNDc1LTQuNTg5MS0xLjc3NDgtNy4yNDA3LTIuNDQ2Ni0xMC4yNDU5LC41NTg2bC00LjQ0MDcsNC40NDA3Yy0xLjA3NDgsMS4wNzQ4LTIuODE0MywxLjA3NDgtMy44ODkxLDBzLTEuMDc0OC0yLjgxNDMsMC0zLjg4OTFsNC40NDA3LTQuNDQwN2M0LjA0NDYtNC4wNDQ2LDguMjAyNC00LjE0MzYsMTEuOTg1NC0zLjE3NDksMS42ODI5LC40MTAxLDMuMjk1MSwxLjA0NjUsNC43ODcxLDEuNjMzNCwuNTU4NiwuMjE5MiwxLjA5NjEsLjQzMTMsMS42MTIyLC42MjIzLDQuNTMyNiwxLjY3NTgsNy41NzMxLDIuMTE0MiwxMS4yNTcxLTEuNTY5OCwzLjY4NC0zLjY4NCwzLjI0NTYtNi43MjQ1LDEuNTY5OC0xMS4yNTcxLC41MTYyLC4xOTA5LDEuMDUzNiwuNDAzMSwxLjYxMjIsLjYyMjMsMS40OTE5LC41ODY5LDMuMTA0MiwxLjIyMzMsNC43ODcxLDEuNjMzNFoiLz4KICAgIDxwYXRoIGZpbGw9IiM5MmQzZjUiIGQ9Ik01MS42NjI0LDYuNzYxMmMxLjA3NDgsMS4wNzQ4LDEuMDc0OCwyLjgxNDMsMCwzLjg4OTFsLTQuNDQwNyw0LjQ0MDdjLTMuMDA1MiwzLjAwNTItMi4zMzM0LDUuNjU2OC0uNTU4NiwxMC4yNDU5LS4yMDUxLS4wNzc4LS40MTcyLS4xNjI2LS42MjkzLS4yNDc1LTEuNzYwNy0uNjg1OS0zLjc0NzctMS40NzA4LTUuODc2MS0xLjkwMjEtLjk2ODctMy43ODMtLjg2OTctNy45NDA4LDMuMTc0OS0xMS45ODU0bDQuNDQwNy00LjQ0MDdjMS4wNzQ4LTEuMDc0OCwyLjgxNDMtMS4wNzQ4LDMuODg5MSwwWiIvPgogICAgPHBhdGggZmlsbD0iI2VhNWE0NyIgZD0iTTI1Ljk2NjIsNDYuOTEwN2MxLjc2MDcsLjY4NTksMy43NDc3LDEuNDcwOCw1Ljg3NjEsMS45MDIxLC45Njg3LDMuNzgzLC44Njk3LDcuOTQwOC0zLjE3NDksMTEuOTg1NGwtNC40NDA3LDQuNDQwN2MtMS4wNzQ4LDEuMDc0OC0yLjgxNDMsMS4wNzQ4LTMuODg5MSwwcy0xLjA3NDgtMi44MTQzLDAtMy44ODkxbDQuNDQwNy00LjQ0MDdjMy4wMDUyLTMuMDA1MiwyLjMzMzQtNS42NTY4LC41NTg2LTEwLjI0NTksLjIwNTEsLjA3NzgsLjQxNzIsLjE2MjYsLjYyOTMsLjI0NzVaIi8+CiAgICA8cGF0aCBmaWxsPSIjZWE1YTQ3IiBkPSJNNjUuMjM4OCwyMC4zMzc2YzEuMDc0OCwxLjA3NDgsMS4wNzQ4LDIuODE0MywwLDMuODg5MWwtNC40NDA3LDQuNDQwN2MtNC4wNDQ2LDQuMDQ0Ni04LjIwMjQsNC4xNDM2LTExLjk4NTQsMy4xNzQ5LTEuNjgyOS0uNDEwMS0zLjI5NTEtMS4wNDY1LTQuNzg3MS0xLjYzMzQtLjU1ODYtLjIxOTItMS4wOTYxLS40MzEzLTEuNjEyMi0uNjIyMy00LjUzMjYtMS42NzU4LTcuNTczMS0yLjExNDItMTEuMjU3MSwxLjU2OThzLTMuMjQ1Niw2LjcyNDUtMS41Njk4LDExLjI1NzFjLS41MTYyLS4xOTA5LTEuMDUzNi0uNDAzMS0xLjYxMjItLjYyMjMtMS40OTE5LS41ODY5LTMuMTA0Mi0xLjIyMzMtNC43ODcxLTEuNjMzNC0uNzkyLTMuOTU5OC0uMzc0Ny04LjQzNTgsNC4wOC0xMi44OTA1czguOTMwOC00Ljg3MiwxMi44OTA1LTQuMDhjMi4xMjg0LC40MzEzLDQuMTE1NCwxLjIxNjIsNS44NzYxLDEuOTAyMSwuMjEyMiwuMDg0OCwuNDI0MiwuMTY5NywuNjI5MywuMjQ3NSw0LjU4OTEsMS43NzQ4LDcuMjQwNywyLjQ0NjYsMTAuMjQ1OS0uNTU4Nmw0LjQ0MDctNC40NDA3YzEuMDc0OC0xLjA3NDgsMi44MTQzLTEuMDc0OCwzLjg4OTEsMFoiLz4KICA8L2c+CiAgPGcgaWQ9ImxpbmUiPgogICAgPGc+CiAgICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0yMy4xOTMyLDQwLjE1MThjLS43OTQ0LTMuOTYyNi0uMzc2Ni04LjQzMDEsNC4wNzYtMTIuODgyNyw2Ljg1MDgtNi44NTA4LDEzLjczNzEtNC4xNTA1LDE4Ljc2NDYtMi4xNzc5LDQuOTg0MywxLjk1NDIsNy43MzA1LDIuODI3NywxMC44NzM4LS4zMTU2bDQuNDQwMS00LjQ0MDFjMS4wNzM4LTEuMDczOCwyLjgxNTMtMS4wNzM4LDMuODg5MSwwczEuMDczOCwyLjgxNTMsMCwzLjg4OTFsLTQuNDQwMSw0LjQ0MDFjLTUuODM1LDUuODM1LTExLjg5ODYsMy40NTc1LTE2Ljc3MDMsMS41NDY4LTUuNDY5LTIuMTQ0OC04Ljc2MjktMy4xNTg1LTEyLjg2ODEsLjk0NjctMy42ODQsMy42ODQtMy4yNDU5LDYuNzE0OS0xLjU2NjksMTEuMjUwMyIvPgogICAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMzEuODUxMSw0OC44MDU3Yy45NTY4LDMuNzkxNCwuODU4Niw3Ljk0Ni0zLjE4NjQsMTEuOTkxbC00LjQ0MDEsNC40NDAxYy0xLjA3MzgsMS4wNzM4LTIuODE1MywxLjA3MzgtMy44ODkxLDBzLTEuMDczOC0yLjgxNTMsMC0zLjg4OTFsNC40NDAxLTQuNDQwMWMzLjAwODEtMy4wMDgxLDIuMzM3My01LjY1MzEsLjU2MDctMTAuMjQzOSIvPgogICAgPC9nPgogICAgPGc+CiAgICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik00MC4xNDg0LDIzLjE5M2MtLjk1NjUtMy43OTExLS44NTc2LTcuOTQ1MywzLjE4NjgtMTEuOTg5N2w0LjQ0MDEtNC40NDAxYzEuMDczOC0xLjA3MzgsMi44MTUzLTEuMDczOCwzLjg4OTEsMHMxLjA3MzgsMi44MTUzLDAsMy44ODkxbC00LjQ0MDEsNC40NDAxYy0zLjAwODQsMy4wMDg0LTIuMzM3LDUuNjUzNC0uNTYwOSwxMC4yNDQzIi8+CiAgICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik00OC44MDczLDMxLjg1MWMuNzkzNywzLjk2MTcsLjM3NDgsOC40MjgzLTQuMDc2NiwxMi44Nzk3LTYuODUwOCw2Ljg1MDgtMTMuNzM3MSw0LjE0OTgtMTguNzY0OSwyLjE3ODMtNC45ODM2LTEuOTU0Mi03LjczMDUtMi44Mjc3LTEwLjg3MzUsLjMxNTJsLTQuNDQwMSw0LjQ0MDFjLTEuMDczOCwxLjA3MzgtMi44MTUzLDEuMDczOC0zLjg4OTEsMHMtMS4wNzM4LTIuODE1MywwLTMuODg5MWw0LjQ0MDEtNC40NDAxYzUuODM1LTUuODM1LDExLjg5ODItMy40NTcyLDE2Ljc3MDctMS41NDY1LDUuNDY4MywyLjE0NDgsOC43NjI1LDMuMTU4MiwxMi44Njc4LS45NDcxLDMuNjg0MS0zLjY4NDEsMy4yNDU2LTYuNzE0NywxLjU2NzEtMTEuMjUwMSIvPgogICAgPC9nPgogICAgPGxpbmUgeDE9IjUwLjk4MzgiIHgyPSI2MC42NjcxIiB5MT0iMTEuMzMyOCIgeTI9IjIxLjAxNjEiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSI0Ni43MTI0IiB4Mj0iNTYuMzQ3MSIgeTE9IjE1LjY1MjciIHkyPSIyNS4yODc1IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8bGluZSB4MT0iMzUuMjIzNyIgeDI9IjQzLjQyMyIgeTE9IjI4LjU3NjkiIHkyPSIzNi43NzYyIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8bGluZSB4MT0iMzAuNzg5MiIgeDI9IjQwLjQ1OSIgeTE9IjMxLjU0MDkiIHkyPSI0MS4yMTA2IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8bGluZSB4MT0iMjguMzYxMSIgeDI9IjM1LjQ4ODciIHkxPSIzNi41MTEyIiB5Mj0iNDMuNjM4OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPGxpbmUgeDE9IjE3LjczNSIgeDI9IjI2LjU0NjMiIHkxPSI0NS40NTM2IiB5Mj0iNTQuMjY0OSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPGxpbmUgeDE9IjEzLjAwMzMiIHgyPSIyMi42ODY3IiB5MT0iNDkuMzEzMiIgeTI9IjU4Ljk5NjYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiLz4KICA8L2c+Cjwvc3ZnPg==", "chapters": ["bio-dna-replication", "bio-mendel"], "provenance": "verified"}, {"id": "om-1F9A0", "type": "illustration", "subject": "bio", "title": "Mikrobe", "alt": "Einzeller schematisch", "caption": "Prokaryoten haben keinen Zellkern.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-1F9A0/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-1F9A0.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0ibGluZS1zdXBwbGVtZW50Ij4KICAgIDxsaW5lIHgxPSI0MS44Mzk5IiB4Mj0iMzkuNDI4NCIgeTE9IjE2LjY5MTYiIHkyPSIyNC4yMDkxIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSIyOC42ODk4IiB4Mj0iMzEuMTU3NSIgeTE9IjE1LjgzNjQiIHkyPSIyMy44MzU2IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSIxNy4xNDg2IiB4Mj0iMjQuNTQwNSIgeTE9IjIzLjA1MjMiIHkyPSIyOC4yOTk0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSIxNC43MTAyIiB4Mj0iMjIuNjA1IiB5MT0iMzYuMjM0MiIgeTI9IjM2LjIwNDYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPGxpbmUgeDE9IjE4LjQxMTUiIHgyPSIyNC43ODExIiB5MT0iNDguNjk2IiB5Mj0iNDQuMDMxNyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8bGluZSB4MT0iMjkuMTM1MyIgeDI9IjMyLjA0NjgiIHkxPSI1NS4zMDg0IiB5Mj0iNDcuMjkwOSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8bGluZSB4MT0iNDIuMjg1NCIgeDI9IjQwLjMxNzciIHkxPSI1Ni4xNjM2IiB5Mj0iNDkuMTY0NCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8bGluZSB4MT0iNTIuODM5IiB4Mj0iNDYuOTM0NyIgeTE9IjQ4LjMxNzEiIHkyPSI0My43MDA2IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSI1Ny43NjUiIHgyPSI0OC44NzAyIiB5MT0iMzUuNzY1OCIgeTI9IjM1Ljc5NTQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPGxpbmUgeDE9IjUzLjU2MzciIHgyPSI0Ni4xOTQxIiB5MT0iMjMuMzA0IiB5Mj0iMjguNDY4MyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgPC9nPgogIDxnIGlkPSJjb2xvciI+CiAgICA8cGF0aCBmaWxsPSIjZWE1YTQ3IiBkPSJNNTAuNDg3NiwzNmExNSwxNSwwLDEsMS0xNS0xNUExNSwxNSwwLDAsMSw1MC40ODc2LDM2WiIvPgogICAgPHBhdGggZmlsbD0iI2QyMmYyNyIgZD0iTTQ1LjI5NzcsMjQuNjdBMTYuOTg2MSwxNi45ODYxLDAsMCwxLDMwLjQ4NzYsNTBjLS4xMzgyLDAtLjI3MjgtLjAxNDMtLjQxLS4wMTc2QTE0Ljk4NzEsMTQuOTg3MSwwLDAsMCw0NS4yOTc3LDI0LjY3WiIvPgogICAgPGc+CiAgICAgIDxsaW5lIHgxPSI0MS44Mzk5IiB4Mj0iMzkuNDI4NCIgeTE9IjE2LjY5MTYiIHkyPSIyNC4yMDkxIiBmaWxsPSJub25lIiBzdHJva2U9IiNkMjJmMjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgICAgPGxpbmUgeDE9IjI4LjY4OTgiIHgyPSIzMS4xNTc1IiB5MT0iMTUuODM2NCIgeTI9IjIzLjgzNTYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2QyMmYyNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgICA8bGluZSB4MT0iMTcuMTQ4NiIgeDI9IjI0LjU0MDUiIHkxPSIyMy4wNTIzIiB5Mj0iMjguMjk5NCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZDIyZjI3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICAgIDxsaW5lIHgxPSIxNC43MTAyIiB4Mj0iMjIuNjA1IiB5MT0iMzYuMjM0MiIgeTI9IjM2LjIwNDYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2QyMmYyNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgICA8bGluZSB4MT0iMTguNDExNSIgeDI9IjI0Ljc4MTEiIHkxPSI0OC42OTYiIHkyPSI0NC4wMzE3IiBmaWxsPSJub25lIiBzdHJva2U9IiNkMjJmMjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgICAgPGxpbmUgeDE9IjI5LjEzNTMiIHgyPSIzMi4wNDY4IiB5MT0iNTUuMzA4NCIgeTI9IjQ3LjI5MDkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2QyMmYyNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgICA8bGluZSB4MT0iNDIuMjg1NCIgeDI9IjQwLjMxNzciIHkxPSI1Ni4xNjM2IiB5Mj0iNDkuMTY0NCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZDIyZjI3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICAgIDxsaW5lIHgxPSI1Mi44MzkiIHgyPSI0Ni45MzQ3IiB5MT0iNDguMzE3MSIgeTI9IjQzLjcwMDYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2QyMmYyNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgICA8bGluZSB4MT0iNTcuNzY1IiB4Mj0iNDguODcwMiIgeTE9IjM1Ljc2NTgiIHkyPSIzNS43OTU0IiBmaWxsPSJub25lIiBzdHJva2U9IiNkMjJmMjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgICAgPGxpbmUgeDE9IjUzLjU2MzciIHgyPSI0Ni4xOTQxIiB5MT0iMjMuMzA0IiB5Mj0iMjguNDY4MyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZDIyZjI3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8L2c+CiAgPC9nPgogIDxnIGlkPSJsaW5lIj4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik01MC40ODc2LDM2YTE1LDE1LDAsMSwxLTE1LTE1QTE1LDE1LDAsMCwxLDUwLjQ4NzYsMzZaIi8+CiAgICA8Zz4KICAgICAgPHBvbHlnb24gZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBwb2ludHM9IjM4Ljk4MyAxNS40OTcgNDQuODk4IDE3LjQyIDQxLjYwNiAxNy40MiAzOC45ODMgMTUuNDk3Ii8+CiAgICAgIDxwb2x5Z29uIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgcG9pbnRzPSIzMC41OTIgMTQuNjI4IDI1Ljk3IDE1Ljk1NCAyOC44MDQgMTYuMTE1IDMwLjU5MiAxNC42MjgiLz4KICAgICAgPHBvbHlnb24gZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBwb2ludHM9IjE1LjMwMyAyNS4zMjggMTguNDg0IDIwLjE0MiAxNy45MjUgMjMuNTk2IDE1LjMwMyAyNS4zMjgiLz4KICAgICAgPHBvbHlnb24gZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBwb2ludHM9IjEzLjkzMyAzOC4xNjYgMTMuOTU4IDM0LjEwMSAxNS4xNDkgMzYuMTM0IDEzLjkzMyAzOC4xNjYiLz4KICAgICAgPHBvbHlnb24gZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBwb2ludHM9IjE5LjU0OSA1MS4wNjQgMTYuMzY1IDQ3LjMxIDE4LjkyOSA0OC4zMTcgMTkuNTQ5IDUxLjA2NCIvPgogICAgICA8cG9seWdvbiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHBvaW50cz0iMzEuNjEyIDU3LjAwOCAyNS42OTcgNTUuMDg2IDI5LjE1MyA1NS4zMTkgMzEuNjEyIDU3LjAwOCIvPgogICAgICA8cG9seWdvbiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHBvaW50cz0iNDUuMDA1IDU1LjU0NiAzOS44ODQgNTcuMzcyIDQyLjE0MiA1NS43MjkgNDUuMDA1IDU1LjU0NiIvPgogICAgICA8cG9seWdvbiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHBvaW50cz0iNTQuMzgyIDQ2LjgxNCA1MS43MDIgNTAuNSA1Mi41MjkgNDguMDc1IDU0LjM4MiA0Ni44MTQiLz4KICAgICAgPHBvbHlnb24gZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBwb2ludHM9IjU4LjAxOCAzOC44OTkgNTguMDQyIDMyLjgzNCA1Ny4xODcgMzUuNzY2IDU4LjAxOCAzOC44OTkiLz4KICAgICAgPHBvbHlnb24gZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBwb2ludHM9IjUyLjAxNiAyMC43ODcgNTUuNDY1IDI1LjQxNSA1My4xNjMgMjMuNTgyIDUyLjAxNiAyMC43ODciLz4KICAgIDwvZz4KICAgIDxnPgogICAgICA8Y2lyY2xlIGN4PSI0Mi42NTQ1IiBjeT0iMzIuNDkwMyIgcj0iMS4yNSIvPgogICAgICA8Y2lyY2xlIGN4PSIyOC42NTQ1IiBjeT0iMjkuNDkwMyIgcj0iMS4yNSIvPgogICAgICA8Y2lyY2xlIGN4PSIzNS42NTQ1IiBjeT0iMjguNDkwMyIgcj0iMS4yNSIvPgogICAgICA8Y2lyY2xlIGN4PSIzNy42NTQ1IiBjeT0iNDQuNDkwMyIgcj0iMS4yNSIvPgogICAgICA8Y2lyY2xlIGN4PSIzMS42NTQ1IiBjeT0iMzQuNzQwMyIgcj0iMiIvPgogICAgICA8Y2lyY2xlIGN4PSIzMS4xNTQ1IiBjeT0iNDEuNzQwMyIgcj0iMiIvPgogICAgICA8Y2lyY2xlIGN4PSIzOS42NTQ1IiBjeT0iMzcuNzQwMyIgcj0iMyIvPgogICAgPC9nPgogIDwvZz4KICA8ZyBpZD0iY29sb3ItZm9yZWdyb3VuZCI+CiAgICA8bGluZSB4MT0iNDAuNjM0MiIgeDI9IjM5LjQyODQiIHkxPSIyMC40NTA0IiB5Mj0iMjQuMjA5MSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZDIyZjI3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8bGluZSB4MT0iMjkuNTk4MyIgeDI9IjMxLjE1NzUiIHkxPSIxOC43ODE1IiB5Mj0iMjMuODM1NiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZDIyZjI3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8bGluZSB4MT0iMjAuMDkzNiIgeDI9IjI0LjU0MDUiIHkxPSIyNS4xNDI4IiB5Mj0iMjguMjk5NCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZDIyZjI3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8bGluZSB4MT0iMTcuOTg4OSIgeDI9IjIyLjYwNSIgeTE9IjM2LjIzNDIiIHkyPSIzNi4yMDQ2IiBmaWxsPSJub25lIiBzdHJva2U9IiNkMjJmMjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSIyMS4zMTgyIiB4Mj0iMjQuNzgxMSIgeTE9IjQ2LjU2NzUiIHkyPSI0NC4wMzE3IiBmaWxsPSJub25lIiBzdHJva2U9IiNkMjJmMjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSIzMC4yMjYyIiB4Mj0iMzEuNTQ2OCIgeTE9IjUyLjMwNDIiIHkyPSI0OC4yOTA5IiBmaWxsPSJub25lIiBzdHJva2U9IiNkMjJmMjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSI0MS40MDI5IiB4Mj0iNDAuMzE3NyIgeTE9IjUzLjAyNDYiIHkyPSI0OS4xNjQ0IiBmaWxsPSJub25lIiBzdHJva2U9IiNkMjJmMjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSI1MC4yMDYyIiB4Mj0iNDYuOTM0NyIgeTE9IjQ2LjI1ODUiIHkyPSI0My43MDA2IiBmaWxsPSJub25lIiBzdHJva2U9IiNkMjJmMjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSI1My45MzExIiB4Mj0iNDguODcwMiIgeTE9IjM1Ljc3ODUiIHkyPSIzNS43OTU0IiBmaWxsPSJub25lIiBzdHJva2U9IiNkMjJmMjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSI1MC41NTE2IiB4Mj0iNDYuMTk0MSIgeTE9IjI1LjQxNDgiIHkyPSIyOC40NjgzIiBmaWxsPSJub25lIiBzdHJva2U9IiNkMjJmMjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICA8L2c+Cjwvc3ZnPg==", "chapters": ["bio-ecology"], "provenance": "verified"}, {"id": "om-1F337", "type": "illustration", "subject": "bio", "title": "Blüte", "alt": "Tulpe", "caption": "Blüten sind Fortpflanzungsorgane der Bedecktsamer.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-1F337/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-1F337.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiPgogICAgPHBhdGggZmlsbD0iIzVDOUUzMSIgc3Ryb2tlPSJub25lIiBkPSJNMjMuNjk2OCw1OS40MzAyYzAsMC04Ljc2ODUtNS4zNjItOS4xOTMtMTQuNjk4NWMtMC40MzU5LTkuNTg2Niw5LjIxNDQtMjYuOTQ2OCw5LjIxNDQtMjYuOTQ2OCBTMTguOTk3OSwzOC40OTExLDIzLjY5NjgsNTkuNDMwMnoiLz4KICAgIDxwYXRoIGZpbGw9IiNGNEFBNDEiIHN0cm9rZT0ibm9uZSIgZD0iTTUwLjcxNjksMjcuMzAzM2MtMi43NjMxLTAuMTIzMy04LjA1NzQsMS41Nzk5LTkuNTE0OSwyLjg4OTJjLTIuNDg5MywyLjIzNjItMi45NDQ4LDIuODUxNy0zLjg0MzEsNi40NzMyIGMtMC4xMDM0LDAuNDE2OSwwLjA4LDAuNTUyNCwwLjE4OTEsMS40MTNjMC4xNDg4LDEuMTczOC0zLjU5MjMtMS4zNjMzLTMuNTkyMy0xLjM2MzNjLTIuMTM2NS0xLjg1ODItMS4yODE4LTUuMjg4Mi0wLjE1OTctNy44ODc5IGMyLjY5MjItNi4yMzc2LDE0LjMxNC05Ljg5NjIsMTYuNDUwNi04LjAzODFjMCwwLDAuOTU2OCwxLjIxNTksMS4xMjE4LDYuNDc0Mkw1MC43MTY5LDI3LjMwMzN6Ii8+CiAgICA8cGF0aCBmaWxsPSIjRjRBQTQxIiBzdHJva2U9Im5vbmUiIGQ9Ik01Ny4yODgyLDI5Ljg3MjFjMS4zNDM2LDIuNDkyNS0zLjA1NjEsMTMuNTc4LTkuNzMyNywxNC44MzQ2Yy0yLjE1MjgsMC40MDUyLTMuODc0Ni0wLjA2MjMtNS43Mjg2LTEuNDYxOSBjLTAuOTk4Ni0wLjc1MzktMS44MjM3LTEuNzIxMi0yLjQ1ODItMi43OTk3djBjLTEuNTU0Ny0yLjM2NjUtMC44NDQzLTUuNzA4MiwwLjkzODctNy45MDc5IEM0NC41ODU0LDI3LjI1OTUsNTUuNzMzNSwyNy41MDU2LDU3LjI4ODIsMjkuODcyMSIvPgogICAgPHBhdGggZmlsbD0iI0UyNzAyMiIgc3Ryb2tlPSJub25lIiBkPSJNNTIuOTQ4MiwyMi42NjYzYzIuMTYyOS0wLjUwMjUsNC4yOTQ5LTAuMzIyMiw0LjgzODEsMC4zNjIxIi8+CiAgICA8cGF0aCBmaWxsPSIjRTI3MDIyIiBzdHJva2U9Im5vbmUiIGQ9Ik01MS4zNjgzLDI3LjI2MzZjMCwwLTAuMzY4OC00LjUzNzItMC40NTg4LTQuNzYzYy0wLjEwOTktMC4yNzU2LDMuMTA4OS0yLjA3MzYsNi44NzY4LTEuMTQ4NCBjMy43Njc5LDAuOTI1MiwwLDcuOTk0NiwwLDcuOTk0NmwtMS4zMjY3LTAuOTk1M2MtMC4yMTU1LTAuMTYxNy0wLjQ1ODgtMC4yNzI3LTAuNzIyOC0wLjMyNjUgQzU0LjU1NTgsMjcuNzg0Myw1MS4zNjgzLDI3LjI2MzYsNTEuMzY4MywyNy4yNjM2eiIvPgogIDwvZz4KICA8ZyBpZD0iaGFpciIvPgogIDxnIGlkPSJza2luIi8+CiAgPGcgaWQ9InNraW4tc2hhZG93Ii8+CiAgPGcgaWQ9ImxpbmUiPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTIzLjY5NjgsNTkuNDMwMiBjMCwwLTguNzY4NS01LjM2Mi05LjE5My0xNC42OTg1Yy0wLjQzNTktOS41ODY2LDkuMjE0NC0yNi45NDY4LDkuMjE0NC0yNi45NDY4UzE4Ljk5NzksMzguNDkxMSwyMy42OTY4LDU5LjQzMDJ6Ii8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMzQuMDg3OCw0MS4yODg5IGMtMy40MzgsMy41NDgtNy42NzYsMTAuMjQ2LTUuODI5LDIwLjczNSIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTU3LjA4MzgsMjkuODcyMSBjMS4zNDM2LDIuNDkyNS0zLjA1NjEsMTMuNTc4LTkuNzMyNywxNC44MzQ2Yy0yLjE1MjgsMC40MDUyLTMuODc0Ni0wLjA2MjMtNS43Mjg2LTEuNDYxOSBjLTAuOTk4Ni0wLjc1MzktMS44MjM3LTEuNzIxMi0yLjQ1ODItMi43OTk3djBjLTEuNTU0Ny0yLjM2NjUtMC44NDQzLTUuNzA4MiwwLjkzODctNy45MDc5IEM0NC4zODEsMjcuMjU5NSw1NS41MjkxLDI3LjUwNTYsNTcuMDgzOCwyOS44NzIxIi8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNNTMuNTM2OCwyMi4zNDE3IGMyLjE2MjktMC41MDI1LDQuMjk0OS0wLjMyMjIsNC44MzgxLDAuMzYyMSIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTU4LjM3NSwyMi43MDM5IGMwLjM4NjksMC41ODUzLDAuMjMyMSwyLjE2MzQtMC4zNzczLDMuODMyNyIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTM0LjU2NTgsMzUuOTI3NiBjLTIuMTMyMi0xLjg2MzEtMS44ODk0LTQuODQ3Ny0wLjc2MTMtNy40NDQ4YzIuNzA2Ny02LjIzMTMsMTMuNTEyNy04Ljk4MjYsMTUuNjQ1LTcuMTE5NSIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTQ5LjMwMzgsMjEuMTk1NCBjMC41MDYsMC41MjYyLDAuNzk3MywxLjU5MDEsMC44NDY1LDMuMTAxNCIvPgogIDwvZz4KPC9zdmc+", "chapters": ["bio-evolution"], "provenance": "verified"}, {"id": "om-1F98B", "type": "illustration", "subject": "bio", "title": "Schmetterling", "alt": "Falter", "caption": "Vollständige Metamorphose in vier Stadien.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-1F98B/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-1F98B.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiPgogICAgPHBhdGggZmlsbD0iIzkyRDNGNSIgc3Ryb2tlPSJub25lIiBkPSJtMzUuODkyIDIyLjg0NWMtMS4xNjc3LTAuNzUxMTctMi4zNTE1LTEuNTEyNy00LjI1NjItMi41MzYtMS45MDQ3LTEuMDIzMy00LjU2MjgtMi4zMjk1LTcuMzcxOS0zLjAzNjYtMi44MDkxLTAuNzA3MTItNS43Njg0LTAuODE1MzktOC45OTk1LTAuOTI3NjctMy4yMzExLTAuMTEyMjgtNi43MzM4LTAuMjI4NTctOC43OTkxIDAuNzEwMTFzLTIuNjk0IDIuOTMyMS0wLjYzNTcyIDYuNzYwMSA2LjgwNjMgOS40OTU5IDExLjEyOCAxMS4wNyA4LjIyNDItMC45MzgzNyAxMS4wMzktMi41MDc2YzIuODE1Mi0xLjU2OTIgNC41NDI1LTIuMTk0MyA2LjI3MTEtMi44MTk4Ii8+CiAgICA8cGF0aCBmaWxsPSIjOTJEM0Y1IiBzdHJva2U9IiM5MkQzRjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Im0zMi4xMDMgNDQuMDY2Yy0wLjc1ODEzIDMuNzU0NS0xLjUxNiA3LjUwNzktMy42NjM4IDkuNDU2Mi0yLjE0NzggMS45NDgzLTUuNjg0NiAyLjA5MjctNy45MDM2LTAuOTM4NTctMi4yMTktMy4wMzEyLTMuMTIxMi05LjIzODUtMi40Njk1LTEyLjcyNSAwLjY1MTY3LTMuNDg2OCAyLjg2MDctNC4yNTMxIDUuNjAyLTUuNDc5NSAyLjc0MTMtMS4yMjY0IDYuMDIwNC0yLjkxNTEgOS4zMDExLTQuNjA0NnoiLz4KICAgIDxwYXRoIGZpbGw9IiM5MkQzRjUiIHN0cm9rZT0ibm9uZSIgZD0ibTM2LjEwOCAyMi44NDVjMS4xNjc3LTAuNzUxMTcgMi4zNTE1LTEuNTEyNyA0LjI1NjItMi41MzYgMS45MDQ3LTEuMDIzMyA0LjU2MjgtMi4zMjk1IDcuMzcxOS0zLjAzNjYgMi44MDkxLTAuNzA3MTIgNS43Njg0LTAuODE1MzkgOC45OTk1LTAuOTI3NjcgMy4yMzExLTAuMTEyMjggNi43MzM4LTAuMjI4NTcgOC43OTkyIDAuNzEwNDEgMi4wNjU0IDAuOTM4OTggMi42OTM5IDIuOTMxOSAwLjYzNTUxIDYuNzYtMi4wNTg0IDMuODI4MS02LjgwMzEgOS40OTItMTEuMTI2IDExLjA2OC00LjMyMzMgMS41NzYtOC4yMjYtMC45MzY2OC0xMS4wNDEtMi41MDU4LTIuODE1LTEuNTY5MS00LjU0MjMtMi4xOTQxLTYuMjcwOC0yLjgxOTYiLz4KICAgIDxwYXRoIGZpbGw9IiM5MkQzRjUiIHN0cm9rZT0iIzkyRDNGNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgZD0ibTM5Ljg5NyA0NC4wNjZjMC43NTgxMyAzLjc1NDUgMS41MTYgNy41MDc5IDMuNjYzOCA5LjQ1NjIgMi4xNDc4IDEuOTQ4MyA1LjY4NDYgMi4wOTI3IDcuOTAzNi0wLjkzODU3IDIuMjE5LTMuMDMxMiAzLjEyMTItOS4yMzg1IDIuNDY5Ny0xMi43MjUtMC42NTE0OC0zLjQ4NjctMi44NTc5LTQuMjUyMS01LjYwMDgtNS40NzkxLTIuNzQyOS0xLjIyNy02LjAyMi0yLjkxNTctOS4zMDI0LTQuNjA1IHoiLz4KICAgIDxlbGxpcHNlIGN4PSIzNS44MDciIGN5PSIxNy45MjIiIHJ4PSIzLjU2MDEiIHJ5PSIyLjY3MDEiIGZpbGw9IiM5QjlCOUEiIHN0cm9rZT0ibm9uZSIvPgogICAgPGVsbGlwc2UgY3g9IjM1LjgxOSIgY3k9IjIzLjU2MyIgcng9IjMuMzUzIiByeT0iMi43MzQ2IiBmaWxsPSIjM0YzRjNGIiBzdHJva2U9Im5vbmUiLz4KICAgIDxwYXRoIGZpbGw9IiM5QjlCOUEiIHN0cm9rZT0ibm9uZSIgZD0ibTM1LjM5NCAyNi44MTJjLTYuMzIxMiAwLjY3NjM0IDAuNjA2MSAyMC40ODEgMC42MDYxIDIwLjQ4MXM3Ljg2MzYtMjEuMzg3LTAuNjA2MS0yMC40ODF6Ii8+CiAgPC9nPgogIDxnIGlkPSJoYWlyIi8+CiAgPGcgaWQ9InNraW4iLz4KICA8ZyBpZD0ic2tpbi1zaGFkb3ciLz4KICA8ZyBpZD0ibGluZSI+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Im0zMi4xMDMgNDQuMDY2Yy0wLjc1ODEzIDMuNzU0NS0xLjUxNiA3LjUwNzktMy42NjM4IDkuNDU2Mi0yLjE0NzggMS45NDgzLTUuNjg0NiAyLjA5MjctNy45MDM2LTAuOTM4NTctMi4yMTktMy4wMzEyLTMuMTIxMi05LjIzODUtMi40Njk1LTEyLjcyNSAwLjY1MTY3LTMuNDg2OCAyLjg1ODEtNC4yNTIyIDUuMDY1NS01LjAxNzkiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgZD0ibTMyLjM5IDIwLjU5MmMtMi42NTg2LTEuMzA2My01LjMxNjctMi42MTI1LTguMTI1OC0zLjMxOTYtMi44MDkxLTAuNzA3MTItNS43Njg0LTAuODE1MzktOC45OTk1LTAuOTI3NjctMy4yMzExLTAuMTEyMjgtNi43MzM4LTAuMjI4NTctOC43OTkxIDAuNzEwMTFzLTIuNjk0IDIuOTMyMS0wLjYzNTcyIDYuNzYwMSA2LjgwNjMgOS40OTU5IDExLjEyOCAxMS4wNyA4LjIyNDItMC45MzgzNyAxMi4xMjktMy40NTIyIi8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Im0zOS42MSAyMC41OTJjMi42NTg2LTEuMzA2MyA1LjMxNjctMi42MTI1IDguMTI1OC0zLjMxOTYgMi44MDkxLTAuNzA3MTIgNS43Njg0LTAuODE1MzkgOC45OTk1LTAuOTI3NjcgMy4yMzExLTAuMTEyMjggNi43MzM4LTAuMjI4NTcgOC43OTkyIDAuNzEwNDEgMi4wNjU0IDAuOTM4OTggMi42OTM5IDIuOTMxOSAwLjYzNTUxIDYuNzYtMi4wNTg0IDMuODI4MS02LjgwMzEgOS40OTItMTEuMTI2IDExLjA2OC00LjMyMzMgMS41NzYtOC4yMjYtMC45MzY2OC0xMi4xMy0zLjQ1MDIiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgZD0ibTM5Ljg5NyA0NC4wNjZjMC43NTgxMyAzLjc1NDUgMS41MTYgNy41MDc5IDMuNjYzOCA5LjQ1NjIgMi4xNDc4IDEuOTQ4MyA1LjY4NDYgMi4wOTI3IDcuOTAzNi0wLjkzODU3IDIuMjE5LTMuMDMxMiAzLjEyMTItOS4yMzg1IDIuNDY5Ny0xMi43MjUtMC42NTE0OC0zLjQ4NjctMi44NTgtNC4yNTIxLTUuMDY1Ny01LjAxOCIvPgogICAgPGVsbGlwc2UgY3g9IjM2IiBjeT0iMTcuOTIyIiByeD0iMy41NjAxIiByeT0iMi42NzAxIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxlbGxpcHNlIGN4PSIzNiIgY3k9IjIzLjU2MyIgcng9IjMuMzUzIiByeT0iMi43MzQ2IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgZD0ibTM1LjM5MiAyNi44MTJjLTYuMzIxMiAwLjY3NjM0IDAuNjA4MzYgMjAuNDgxIDAuNjA4MzYgMjAuNDgxczcuODYxNC0yMS4zODctMC42MDgzNi0yMC40ODF6Ii8+CiAgICA8bGluZSB4MT0iMzcuOTY4IiB4Mj0iMzkuNDUyIiB5MT0iMTQuODQ1IiB5Mj0iMTEuNTgyIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSIzNC4wMzIiIHgyPSIzMi41NDgiIHkxPSIxNC44NDUiIHkyPSIxMS41ODIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPgogIDwvZz4KPC9zdmc+", "chapters": ["bio-meiosis-karyotype"], "provenance": "verified"}, {"id": "om-1F9A5", "type": "illustration", "subject": "bio", "title": "Faultier", "alt": "Säugetier", "caption": "Niedriger Grundumsatz, wenig Mitochondrien nötig.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-1F9A5/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-1F9A5.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiPgogICAgPHBhdGggZmlsbD0iI2E1NzkzOSIgZD0iTTI2LjIzMjIsNDMuMzU3N2MuMDQ4My41MjM3LjA3MjUsMS4wNDc2LjA3MjUsMS41Nzk0di4wMDgxTDE1LjE0NCw2NS4xNTY2SDExLjA5ODVsMTQuMjE1LTI1Ljk0MTJhLjUzNTIuNTM1MiwwLDAsMSwuMDI0Mi4wNjQ1LDIxLjY4NzksMjEuNjg3OSwwLDAsMSwuODM4MiwzLjQ5NzVDMjYuMiw0Mi45NzA4LDI2LjIyNDIsNDMuMTY0MiwyNi4yMzIyLDQzLjM1NzdaIi8+CiAgICA8cGF0aCBmaWxsPSIjOWI5YjlhIiBkPSJNMjUuODEzNCw0OS43NzM5YTExLjUyNSwxMS41MjUsMCwwLDEsLjEyOTItMi4wNDU2LDE4Ljk5MDcsMTguOTkwNywwLDAsMCwuMjEtMi44MDQ1YzAtLjUzMTktLjAyNDItMS4wNTU3LS4wNzI1LTEuNTgtLjAwODEtLjE5MzQtLjAzMjMtLjM4NjgtLjA1NjQtLjU4YTIxLjY3NDEsMjEuNjc0MSwwLDAsMC0uODM4MS0zLjQ5NzVjLS4wNjQ1LS4yMTc2LS4xMjktLjQyNzEtLjE4NTMtLjYxMjVhMTAuNzI4NywxMC43Mjg3LDAsMCwwLS42Mjg2LTEuNTQ3Myw0LjYzMTIsNC42MzEyLDAsMCwxLS4zMTQzLS43OTc4LDMuODIyNCwzLjgyMjQsMCwwLDEtLjEyMDktMS4wNTU3LDQuMDU1NCw0LjA1NTQsMCwwLDEsMy4wMDU5LTMuODExOCw0LDQsMCwwLDEsMi4yNDg0LjA2NDVDMjguNjM0MywyOC44MTQ0LDMxLjA5ODUsMjksMzEuMDk4NSwyOWExNC45OTksMTQuOTk5LDAsMCwxLDMuMjksMi40MDEyQTE4LjY2ODcsMTguNjY4NywwLDAsMSwzNy42NiwzNi4xODgxYTE4Ljg5ODksMTguODk4OSwwLDAsMCwuNTIzOC0yLjgwNDRjLS4wMTYtLjAwODEtLjAzMjItLjAyNDItLjA0ODMtLjAzMjJhNi4xNCw2LjE0LDAsMCwxLTIuMTY3OS03LjA0MzQsMTkuMTMzMiwxOS4xMzMyLDAsMCwwLC41OC0yLjExOTUsMTcuMzc5MywxNy4zNzkzLDAsMCwwLC4zODY4LTMuMDYyM2MuMDA4MS0uMjU3OS4wMTYyLS41MDc3LjAxNjItLjc2NTZhMTguNDExMiwxOC40MTEyLDAsMCwwLS41OC00LjYwMTUsMy40Njg2LDMuNDY4NiwwLDAsMSwxLjM0NTktMy42MzQ1LDcuNzk2NSw3Ljc5NjUsMCwwLDEsLjc3MzYtLjQ5MTYsMi40NCwyLjQ0LDAsMCwxLDMuMjcxOC45NDI4LDE4LjMwMzksMTguMzAzOSwwLDAsMSwyLjI4ODcsNi4yMDUzLDE4LjUxOTEsMTguNTE5MSwwLDAsMSwuMjgyMSwzLjIyMzVjMCwuNDgzNS0uMDE2MS45NTktLjA1NjQsMS40MzQ0LjE1My4xNjEyLjI5LjMzODUuNDM1Mi41MjM5YTUuODAyMSw1LjgwMjEsMCwwLDEsLjM2MjYuNTA3N2MuMDg4Ny4xMjg5LjE3NzIuMjY1OS4yNTc5LjQwMjkuMTEyNy4xODU0LjIyNTcuMzc4OC4zMy41OGE4LjAzMzUsOC4wMzM1LDAsMCwxLDEuMjczNC0xLjgyMTIsNy44NDA5LDcuODQwOSwwLDAsMSwxLjY3NjItMS4zNy4wMDc5LjAwNzksMCwwLDEsLjAwOC0uMDA4MSw4LjA1MTUsOC4wNTE1LDAsMCwxLDEyLjI4MTYsNi44NTgsMTAuMzk2OSwxMC4zOTY5LDAsMCwxLTEuNTYzNSw0LjY1Yy0xLjg3NzUsMi42MDMtMi43NTYsNC41OTM1LTIuNzIzNyw3LjgwODl2LjE2MTJBMTguNTMyNywxOC41MzI3LDAsMCwxLDM4LjA3OTEsNjAuMjY3N2MtLjIwOTUsMC0uNDE5MS0uMDA4MS0uNjI4Ni0uMDE2MWgtLjA3MjZjLS4xNzczLjAwOC0uMzYyNi4wMTYxLS41NDc5LjAxNjFhMTEuOTE4NywxMS45MTg3LDAsMCwxLTQuOTcyMi0xLjA3MThjLS4wMDgxLDAtLjAxNjItLjAwODEtLjAyNDItLjAwODFsLS4wOTY4LS4wNDgzYTEwLjQ5ODEsMTAuNDk4MSwwLDAsMS01LjkyMzQtOS4zNjU2WiIvPgogICAgPHBhdGggZmlsbD0iIzNmM2YzZiIgZD0iTTM1LjY0NzIsNDUuNzI1YTE2Ljc5NywxNi43OTcsMCwwLDAtLjI2NjQtNC4wNzVjLS4wMTc4LS4wOTc5LS4wMzU1LS4yMDM4LS4wNjIxLS4zMDE2YTE1LjgzLDE1LjgzLDAsMCwwLS42OTI4LTIuNDUzMSwxNy43Njg0LDE3Ljc2ODQsMCwwLDAtMi41MDQ3LTQuNjI5MmMtLjI0LS4zNDIzLS41MTUxLS42NzY0LS43OS0xLjAwMjVhNy41NzU0LDcuNTc1NCwwLDAsMC0xLjExLTEuMjA2MWwtLjAwODktLjAwODJBNC43NTI2LDQuNzUyNiwwLDAsMCwyOC44LDMxLjM1NjZjLS4wMDg4LDAtLjAyNjYtLjAwODItLjAzNTUtLjAwODJhMi4yNjMsMi4yNjMsMCwwLDEsMS45NDUxLTIuODI4LDE5Ljg5NjMsMTkuODk2MywwLDAsMSwzLjgxOSwyLjkxNzcsMTguNzU4NiwxOC43NTg2LDAsMCwxLDMuNTcsNC43Njc3di4wMDgxYy0uMDg4OC4yOTM1LS4xODY1LjU4NjgtLjI4NDEuODcyMWExMy44NCwxMy44NCwwLDAsMS0uNTc3NCwxLjQwMThjLS4wMTc4LjIzNjMtLjAxNzguNDcyNy0uMDE3OC43MTcyLDAsLjM3NDkuMDA4OS43NTc5LjA0NDUsMS4xMjQ2LjEyNDIsMS45OC0uNjIxOS4yMjgzLjEyNDIsMS45OFoiLz4KICAgIDxwYXRoIGZpbGw9IiMzZjNmM2YiIGQ9Ik00NC41MywyMS45MzUyYzAsLjQzMTktLjAxNjcuODQ3Ni0uMDUsMS4yNzE0bC0uMDA4My0uMDA4MWE0LjAwODUsNC4wMDg1LDAsMCwwLTIuNDk1Ni0xLjQxLDUuMDU4LDUuMDU4LDAsMCwwLTQuMDc4MywxLjIyMjUsMy42OTY1LDMuNjk2NSwwLDAsMC0xLjE2NDEsMi43Myw0LjM1OSw0LjM1OSwwLDAsMCwuNjQ0OSwxLjg4MjcsNi45NzcyLDYuOTc3MiwwLDAsMSwuODU0MiwyLjk5OTJjLjAwODQuMjI4Mi4wMTY4LjQ0LjAxNjguNjE5NGExNy44MjMzLDE3LjgyMzMsMCwwLDEtLjEwODksMi4wMTNsLS4wMjUyLjE3MTFjLS4wMDgzLS4wMDgxLS4wMTY3LS4wMTYzLS4wMjUtLjAxNjNhNi4xMTQxLDYuMTE0MSwwLDAsMS0yLjI1MjgtNy4xMjMsMTguOTg5MSwxOC45ODkxLDAsMCwwLC42MDMtMi4xNDM1LDE3LjEzNDYsMTcuMTM0NiwwLDAsMCwuNDAxOS0zLjA5NjljLjAwODQtLjI2MDkuMDE2OC0uNTEzNS4wMTY4LS43NzQzYTE4LjE1LDE4LjE1LDAsMCwwLS42MDMtNC42NTM2LDMuNDYsMy40NiwwLDAsMSwxLjM5ODYtMy42NzU2LDguMTMzNCw4LjEzMzQsMCwwLDEsLjgwMzktLjQ5NzIsMi41NzM1LDIuNTczNSwwLDAsMSwzLjQuOTUzNkExOC4zOTQxLDE4LjM5NDEsMCwwLDEsNDQuNTMsMjEuOTM1MloiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0zMi4wNTQ3LDU5LjIwNTRjLS4wMDgsMC0uMDE2MS0uMDA4LS4wMjQxLS4wMDgiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0zMC42NzY3LDMyLjIwODYsMzAuNjY4NiwzMi4yIi8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNNDUuNTIwOSwyNC40YTIuMjUzNywyLjI1MzcsMCwwLDEtLjI1LjA4MDUiLz4KICAgIDxwYXRoIGZpbGw9IiNkMGNmY2UiIGQ9Ik01OS4yNjYyLDMwLjYxNDZjLS45NTE3LDIuNjg5My00LjM5LDMuOTQzLTcuNjQ5NSwyLjc4OTRzLTUuMTQ0LTQuMjkwOC00LjE5MjItNi45OGE0LjYyNTQsNC42MjU0LDAsMCwxLDIuNTIzNi0yLjY4ODljMS40MzM1LS42NjYyLDIuMzE0MywxLjQ5ODMsNC4xMTA2LDIuMTM0LDEuNjYzMS41ODg2LDMuOTQ3OS0uNTc5MSw0LjcwMTUuNjc1N0E0LjY5NzcsNC42OTc3LDAsMCwxLDU5LjI2NjIsMzAuNjE0NloiLz4KICAgIDxwYXRoIGZpbGw9IiM5YjliOWEiIGQ9Ik00Ni43NjU0LDI3Ljk4MTZjLjc1NDQtLjI4ODgsMS4xODU1LS44MTU2LDIuMjI0NS0uNzU2N2wuMTY0My0uMDAzNmMxLjExMTUuMDg0NSwxLjc5Mi42OTU5LDIuMzgyMS40MTA3YS44NTMxLjg1MzEsMCwwLDAsLjQ1NTctLjgyNjljLS4xMTUtLjU5NjUtMS4xNjMtMS4wOTA5LTEuMzA3OS0xLjE0MjJhNi4zMTY2LDYuMzE2NiwwLDAsMC0zLjIyMzEtLjMzNzhaIi8+CiAgICA8cGF0aCBmaWxsPSIjOWI5YjlhIiBkPSJNNTguODY1MywzMi4yNjM3Yy0uNDA0OC0uNjk5MS0uNDA4Ni0xLjM4LTEuMjUzMy0xLjk4NzVsLS4xMjU1LS4xMDYyYy0uOTE3My0uNjMzNC0xLjgzMDgtLjU4NjEtMi4xMS0xLjE3OTFhLjg1MzIuODUzMiwwLDAsMSwuMTY1OS0uOTI5NGMuNDY0Ni0uMzkxNCwxLjU5LS4xMTY2LDEuNzM1Mi0uMDY1M2E3LjExLDcuMTEsMCwwLDEsMi4yMzU2LDEuMjg1MiwyLjk0LDIuOTQsMCwwLDEsLjQ4MjUuNDhaIi8+CiAgICA8Y2lyY2xlIGN4PSI1Mi44MDUyIiBjeT0iMzAuMDU5MiIgcj0iMC44MDU5Ii8+CiAgICA8cGF0aCBmaWxsPSIjYTU3OTM5IiBkPSJNNDcuMTM2Nyw2Ljg0MzQsMzIuMTk1NywzNC4xNjI2Yy0uMTY5Mi0uMjU3OS0uMzYyNi0uNTA3Ny0uNTU2LS43NTc1YTcuMzExNiw3LjMxMTYsMCwwLDAtMS4wMDczLTEuMTkyN2wtLjAwODEtLjAwODFhMy45NzMzLDMuOTczMywwLDAsMC0xLjE2MDUtLjYzNjZMNDIuODgxNyw2Ljg0MzRaIi8+CiAgPC9nPgogIDxnIGlkPSJsaW5lIj4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTQyLjg0LDE0LjUxYTE3LjcxLDE3LjcxLDAsMCwxLDEuMzEsNC4yOCwxOS4wODQ1LDE5LjA4NDUsMCwwLDEsLjI4LDMuMjIsMTMuNzU0NywxMy43NTQ3LDAsMCwxLS4wNiwxLjQ0Ii8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0zOC41OSwxMS42NGEyLjMzOSwyLjMzOSwwLDAsMSwxLjcxLS4yMiIvPgogICAgPGxpbmUgeDE9IjExIiB4Mj0iMjIuOTQ2NCIgeTE9IjY1LjE1NjYiIHkyPSI0My4zNTU2IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxwb2x5bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIHBvaW50cz0iMjIuMDA4IDUyLjU0MyAyMS44ODMgNTIuNzY0IDE1LjA0NiA2NS4xNTciLz4KICAgIDxsaW5lIHgxPSIzMi4wOTcyIiB4Mj0iNDIuNzgzMSIgeTE9IjI2LjUzMzciIHkyPSI2Ljg0MzQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPGxpbmUgeDE9IjQxLjEwOTYiIHgyPSI0Ny4wMzgyIiB5MT0iMTcuNjgzOCIgeTI9IjYuODQzNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMjYuMDQxMSw0Ny43NGExOC45ODgzLDE4Ljk4ODMsMCwwLDAsLjIwOTUtMi44MDQ0YzAtLjUzMTktLjAyNDEtMS4wNTU3LS4wNzI1LTEuNTgtLjAwODEtLjE5MzQtLjAzMjItLjM4NjktLjA1NjQtLjU4YTIxLjY3NjYsMjEuNjc2NiwwLDAsMC0uODM4MS0zLjQ5NzVjLS4wNjQ1LS4yMTc2LS4xMjktLjQyNzEtLjE4NTQtLjYxMjRhMTAuNzEyNywxMC43MTI3LDAsMCwwLS42Mjg2LTEuNTQ3Myw0LjY1ODksNC42NTg5LDAsMCwxLS4zMTQzLS43OTc4LDMuODI3MSwzLjgyNzEsMCwwLDEtLjEyMDgtMS4wNTU3QTQuMDU1MSw0LjA1NTEsMCwwLDEsMjcuMDQsMzEuNDUyOWEzLjk2LDMuOTYsMCwwLDEsMi4yMTYxLjA1NjRjLjAwODEsMCwuMDI0Mi4wMDguMDMyMy4wMDhhNC4xOCw0LjE4LDAsMCwxLDEuMjgxMy42ODVsLjAwODEuMDA4MWE3LjMxMTYsNy4zMTE2LDAsMCwxLDEuMDA3MywxLjE5MjdjLjI1LjMyMjMuNS42NTI4LjcxNzMuOTkxMmExOC4xMTc4LDE4LjExNzgsMCwwLDEsMi4yNzI1LDQuNTc3NCwxNi43NCwxNi43NCwwLDAsMSwuNjI4NiwyLjQyNTdjLjAyNDIuMDk2Ny4wNC4yMDE1LjA1NjQuMjk4MmExOC4wNjc2LDE4LjA2NzYsMCwwLDEsLjI0MTgsNC4wMjkzYy0uMDI0Mi41MDc3LS4wNjQ1LDEuMDE1NC0uMTM3LDEuNTIzMWExOC42MDgxLDE4LjYwODEsMCwwLDEtLjc0MTMsMy4yODIyIi8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMzQuMzksNjAuMDEyNmExMS43NTcyLDExLjc1NzIsMCwwLDEtMi40MzM2LS44MDU0Yy0uMDA4LDAtLjAxNjEtLjAwOC0uMDI0MS0uMDA4bC0uMDk2OC0uMDQ4NEExMC42NywxMC42NywwLDAsMSwyNi4wNDExLDQ3Ljc0Ii8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNNDUuNzYwOSwyNS40NjUyYTguMDMwNSw4LjAzMDUsMCwwLDEsMS4yNzMzLTEuODIxMyw3Ljg0NjksNy44NDY5LDAsMCwxLDEuNjc2Mi0xLjM3LjAwNzguMDA3OCwwLDAsMSwuMDA4LS4wMDhBOC4wNTE0LDguMDUxNCwwLDAsMSw2MSwyOS4xMjM5YTEwLjM5NzEsMTAuMzk3MSwwLDAsMS0xLjU2MzQsNC42NWMtMS44Nzc3LDIuNjAzLTIuNzU2MSw0LjU5MzUtMi43MjM5LDcuODA4OXYuMTYxMkExOC41Mjc0LDE4LjUyNzQsMCwwLDEsNDcuMDI2LDU4LjAzNTMiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0zOC4xNzc2LDQ1Ljk3NDhhLjA0ODQuMDQ4NCwwLDAsMS0uMDA4MS0uMDMyM0ExOC4wNjYxLDE4LjA2NjEsMCwwLDEsMzYuOTY4OCw0MC4zOWE4LjYwODgsOC42MDg4LDAsMCwxLC41LTMuMjA3M2MuMDg4Ny0uMjgyMS4xNzczLS41NzIyLjI1NzktLjg2MjN2LS4wMDgxYy4wMDgxLS4wNC4wMjQyLS4wNzI1LjAzMjItLjExMjhhMTguNzg5NCwxOC43ODk0LDAsMCwwLC41LTIuNjM1MmwuMDI0Mi0uMTY5M2ExOC4wOTMsMTguMDkzLDAsMCwwLC4xMDQ3LTEuOTkwNWMwLS4xNzczLS4wMDgtLjM4NjgtLjAxNjEtLjYxMjRhNy4wNDE2LDcuMDQxNiwwLDAsMC0uODIyLTIuOTY1Nyw0LjM5LDQuMzksMCwwLDEtLjYyLTEuODYxNSwzLjcwMzEsMy43MDMxLDAsMCwxLDEuMTItMi43LDQuNzgxNCw0Ljc4MTQsMCwwLDEsMy45MjQ2LTEuMjA4OCwzLjgzMzIsMy44MzMyLDAsMCwxLDIuNDAxNSwxLjM5NDFsLjAwOC4wMDgxYy4xNTMyLjE2MTIuMjgyMS4zMy40MjcyLjUxNTdhNS43OTYxLDUuNzk2MSwwLDAsMSwuMzYyNi41MDc3Yy4wODg2LjEyOS4xNzczLjI2Ni4yNTc5LjQwMy4xMTI4LjE4NTMuMjI1Ni4zNzg3LjMzLjU4YTMwLjM3MzQsMzAuMzczNCwwLDAsMSwyLjk1NzUsMTIuMDQsMTguNDAxNywxOC40MDE3LDAsMCwxLTIuODI4Niw5Ljg0di4wMDgxIi8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0zNiwzMy4yMzMzYTE4LjY1ODcsMTguNjU4NywwLDAsMSwxLjc2LDIuOTYyMXYuMDA4MWMtLjAwOC4wNC0uMDI0MS4wNzI1LS4wMzIyLjExMjgtLjA4MDYuMjktLjE2OTIuNTgtLjI1NzkuODYyM3YuMDA4Yy0uMDE2MS4wNTY0LS4wNC4xMjA5LS4wNjQ0LjE5MzQiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTM1LjIwNTUsNDEuMzkzM2ExNi43NCwxNi43NCwwLDAsMC0uNjI4Ni0yLjQyNTdBMTguMTE5NCwxOC4xMTk0LDAsMCwwLDMyLjMwNDQsMzQuMzljLS4yMTc2LS4zMzg0LS40Njc0LS42Njg4LS43MTczLS45OTEyQTcuMzExNiw3LjMxMTYsMCwwLDAsMzAuNTgsMzIuMjA2M2wtLjAwODEtLjAwOGE0LjE3NjIsNC4xNzYyLDAsMCwwLTEuMjgxMy0uNjg1Ii8+CiAgPC9nPgo8L3N2Zz4=", "chapters": ["bio-enzymes"], "provenance": "verified"}, {"id": "om-1F52C", "type": "illustration", "subject": "bio", "title": "Mikroskop", "alt": "Labormikroskop", "caption": "Auflösung begrenzt, was sichtbar wird.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-1F52C/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-1F52C.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiPgogICAgPHBhdGggZmlsbD0iI2QwY2ZjZSIgZD0ibTM0Ljg3NTUsMzkuNjI1Yy0uMTgyNS4wMDAyLS4zNjE2LS4wNDk4LS41MTc2LS4xNDQ1bC03LjY5OTItNC42NTkyYy0uNDcwOC0uMjg1LS42MjMtLjg5NjctLjM0MDgtMS4zNjkybDExLjExNzItMTguNTg0OWMuMjgzOS0uNDc0MS44OTgzLS42MjgzLDEuMzcyNC0uMzQ0NC4wMDEyLjAwMDcuMDAyNC4wMDE0LjAwMzUuMDAyMWw3LjcsNC42NTkyYy40NzIyLjI4NjIuNjIzNC45MDA4LjMzNzksMS4zNzM1LDAsMC02Ljg0NTUsMTEuMzY3Mi03LjEyNjcsMTEuODQyNGwtMy45ODY0LDYuNzM0OWMtLjEzNTcuMjI5OS0uMzU4MS4zOTU3LS42MTcyLjQ2LS4wNzk1LjAyMDEtLjE2MTEuMDMwMy0uMjQzMS4wMzAxWiIvPgogICAgPHBvbHlnb24gZmlsbD0iIzNmM2YzZiIgcG9pbnRzPSI0Mi4yNDQgMTMuNjggNDUuNjY2IDE1Ljc1MSA0My42MjIgMTkuMTUyIDQwLjE5OSAxNy4wODEgNDIuMjQ0IDEzLjY4Ii8+CiAgICA8cmVjdCB4PSIxNi45NzU3IiB5PSI1NC45ODM0IiB3aWR0aD0iMzciIGhlaWdodD0iNSIgZmlsbD0iI2QwY2ZjZSIvPgogICAgPHBhdGggZmlsbD0iI2QwY2ZjZSIgZD0ibTUxLjgzMjUsNTAuOTA5MmMtLjE2MTIsMC0uMzE5OS0uMDM4OS0uNDYyOS0uMTEzM2wtMy41OTQ3LTEuODc4OWMtLjQzMzItLjIyNjQtLjYzOTMtLjczMjctLjQ4NzMtMS4xOTczbC4yNDUxLS43NWMzLjAwNjgtOS4xOTMzLTEuOTc2Ni0xNC41Ni01LjIxNDgtMTYuOTQwOS0uNDMxOC0uMzE3OC0uNTM2LS45MTk2LS4yMzY0LTEuMzY0MmwyLjIwMzItMy4yNzA2Yy4xNTI0LS4yMjY2LjM5MDktLjM4MS42Ni0uNDI3Mi4yNjkyLS4wNDQ4LjU0NS4wMjEzLjc2NDcuMTgzMSw0LjU5LDMuNDA2NywxMS42NywxMS4wMTQyLDcuNTI2MywyMy42ODUxbC0uNDUzLDEuMzg1Yy0uMTM0Ni40MTA4LS41MTc3LjY4ODktLjk1LjY4OTVsLS4wMDAyLS4wMDAzWiIvPgogICAgPGNpcmNsZSBjeD0iNDIuMTM3OCIgY3k9IjI2LjMyNSIgcj0iMyIgZmlsbD0iIzNmM2YzZiIvPgogICAgPHBhdGggZmlsbD0iIzNmM2YzZiIgZD0ibTUzLjIwODksNTQuNDgzNGMtLjI4MTQtMi41MTYyLTEuODY0NC01LjgxMjItNi4zMTgtNS44MS00LjQ1MDUuMDAyMi04LjA1NzcsMS44NTk1LTguMDYsNi4zMWwxNC4zNzgtLjVaIi8+CiAgPC9nPgogIDxnIGlkPSJsaW5lIj4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Im0zMi4yNjU0LDM3LjU4MDljLS42MzMzLjY3NjMtMS42NjMuNzk1MS0yLjQzMzcuMjgwOC0uNzgyNy0uNDczOS0xLjE0NDMtMS40MTgzLS44NzgyLTIuMjkzNyIvPgogICAgPHBvbHlsaW5lIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIHBvaW50cz0iMzguODYyIDMxLjg5MSAzNC44NzYgMzguNjI1IDI3LjE3NiAzMy45NjYgMzguMjkzIDE1LjM4IDQ1Ljk5MyAyMC4wMzkgNDUuMTE0IDIxLjQ5MiIvPgogICAgPHJlY3QgeD0iMjYuNjk2MiIgeT0iMzUuOTUyMSIgd2lkdGg9IjEuOTk5OCIgaGVpZ2h0PSIyMC45OTc0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjYuMDE5OSA1Mi43MjMxKSByb3RhdGUoLTY1Ljg1NDgpIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjk5OTgiLz4KICAgIDxyZWN0IHg9IjE2Ljk3NTciIHk9IjU0Ljk4MzQiIHdpZHRoPSIzNyIgaGVpZ2h0PSI1IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8cmVjdCB4PSI0MS40NzM1IiB5PSIxNC4xMTQ0IiB3aWR0aD0iMy4yNjQxIiBoZWlnaHQ9IjMuOTk5NiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNy4wMDQ2IDQ0LjY1MzMpIHJvdGF0ZSgtNTguODI1KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS45OTk4Ii8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJtNDEuMTgyMSw1MC43OTkxYzIuMzExMi0zLjE1NDksNi43NDIyLTMuODM4OCw5Ljg5NzEtMS41Mjc3LDEuODIwNSwxLjMzMzcsMi44OTY0LDMuNDU1MiwyLjg5NjUsNS43MTIiLz4KICAgIDxsaW5lIHgxPSIzNy4yNjE0IiB4Mj0iNDEuMTgyMiIgeTE9IjUwLjc5OTEiIHkyPSI1MC43OTkxIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJtNDguMjM3OSw0OC4wM2wuMjQ1LS43NWMzLjIwMzgtOS43OTY0LTIuMTIyMy0xNS41Mi01LjU3Mi0xOC4wNTcyIi8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJtNDUuMTE0LDI1Ljk1MjRjNC4zMDE2LDMuMTkzNCwxMS4xMzQzLDEwLjQ1MjksNy4xNzE2LDIyLjU3MmwtLjQ1MzIsMS4zODQ3Ii8+CiAgICA8Y2lyY2xlIGN4PSI0Mi4xMzc4IiBjeT0iMjYuMzI1IiByPSIzIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgPC9nPgo8L3N2Zz4=", "chapters": ["bio-membrane-transport"], "provenance": "verified"}, {"id": "om-2697", "type": "illustration", "subject": "chem", "title": "Destillierkolben", "alt": "Alchemistischer Kolben", "caption": "Trennverfahren nutzen Siedepunktunterschiede.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-2697/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-2697.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiPgogICAgPGVsbGlwc2UgY3g9IjMyLjM2OTMiIGN5PSIzMi43MjM5IiByeD0iMTUuNjE2MiIgcnk9IjE1LjMwMzkiIGZpbGw9IiNmZmYiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im00NC4wOTg2LDIyLjI1NDhzMTAuNjYzLDcuNTYxLDEzLjE4MzQsMTIuNDA3OWwtLjY3ODYuODcyNC03Ljg1MTktNS41MjU0cy0uMzY5LTEuMzU3MS0uNDc1MywyLjMyNjUtNC4xNzc3LTEwLjA4MTQtNC4xNzc3LTEwLjA4MTRaIi8+CiAgICA8ZyBpZD0iXzI2OTciPgogICAgICA8cGF0aCBmaWxsPSIjOTJkM2Y1IiBkPSJtMTcuOTc0NCwzNy45N2MyLjMwNzksNS4zODIxLDguMzIxNCwxMC43NjQxLDE0LjcsMTAuNzY0MXMxMS45MTE3LTUuNjQ0OSwxNC43LTEwLjc2NDFoLTI5LjRaIi8+CiAgICAgIDxwYXRoIGZpbGw9IiM2MWIyZTQiIGQ9Im00MS43NDksMzcuOTdjLTIuNDYsNC41MTU2LTYuOTcyNSw5LjkxNC0xMi40LDEwLjYxNzYuNzM1LjA5NjUsMS40NzU1LjE0NTQsMi4yMTY5LjE0NjUsNi4zNzg5LDAsMTQuMTI4Ny01LjY0NDksMTYuOTE3Mi0xMC43NjQxaC02LjczNDFaIi8+CiAgICA8L2c+CiAgPC9nPgogIDxnIGlkPSJsaW5lIj4KICAgIDxnIGlkPSJfMjY5Ny0yIj4KICAgICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0ibTQ5LjMwMTYsMzIuNTg3OGw3LjY3MzQsNS40NjUzLDIuMzAyOC0yLjIzNjFzLTEyLjQ0MTMtMTkuMzc1NC0yNi42MDMyLTE5LjM3NTRjLTkuMDQ5My0uMTMwOC0xNi40OTIzLDcuMDk3LTE2LjYyNywxNi4xNDYyLjEzNDgsOS4wNDkyLDcuNTc3NywxNi4yNzY5LDE2LjYyNywxNi4xNDYxLDkuMDQ5My4xMzA4LDE2LjQ5MjItNy4wOTY5LDE2LjYyNy0xNi4xNDYxIi8+CiAgICAgIDxwb2x5bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBwb2ludHM9IjEyLjcyMiA1NS41NTggMTguMjY1IDQ0Ljc5NCA0Ny4wODUgNDQuNzk0IDUyLjYyNyA1NS41NTgiLz4KICAgICAgPGxpbmUgeDE9IjMyLjY3NDYiIHgyPSIzMi42NzQ2IiB5MT0iNDQuNzk0MyIgeTI9IjU1LjU1ODQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPg==", "chapters": ["chem-substances"], "provenance": "verified"}, {"id": "om-1F9EA", "type": "illustration", "subject": "chem", "title": "Reagenzglas", "alt": "Reagenzglas mit Flüssigkeit", "caption": "Konzentration ist Stoffmenge pro Volumen.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-1F9EA/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-1F9EA.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTMwLjA1OSwzMC4wMjg5bC4wNDg2LTExLjg1NzJzNC4wMzM0LDIuMTg2OCwxMC42NDI0LjI5MTZsLjE5NDQsMTEuNzYwMXMtNy41ODA5LDIuMTg2OC0xMC44ODUzLS4xOTQ0WiIvPgogICAgPGVsbGlwc2UgY3g9IjM1LjcyMDMiIGN5PSIxNS4yMDc0IiByeD0iNi41MzAyIiByeT0iMi41ODI4IiBmaWxsPSIjZmZmIi8+CiAgICA8cGF0aCBmaWxsPSIjNWM5ZTMxIiBkPSJtNDEuMzg3OCwzMS43MjA3bC4xMTM5LDIxLjEyOGMuMDAyMiwzLjU5MzItMi44NzU5LDUuNTgxLTUuODEwNCw1LjkxMDUtLjAwMjYuMDAwMy0uMTU1Mi0uMDQzLS41OTYzLS4wMzIxLS42MDA0LjAxNS0uNTcxOS0uMDUwMy0xLjE0ODgtLjIxNzMtMi4yMTEyLS44MjA2LTMuNzQ4OC0yLjU1NzUtNC4yMzgxLTUuNDIyM2wtLjA1ODgtMjIuMjI3OGgwbC4wNTQ1LjA1NDVjMS45NjIuOTE1NCwzLjY4MTksMS4zNDQxLDUuODQ2MywxLjI5MzEuOTkyMy4wMDU4LDEuOTgyOS0uMDgxMiwyLjk1ODktLjI2LjA3MS0uMDExOS4xNTM5LS4wMjM2LjIyNDktLjAzNTUsMS4wNzI1LS4xOTE5LDEuMTM2NC4wOTI2LDIuMTEzLS4zOTA2bC41NDEuMTk5M1oiLz4KICAgIDxwYXRoIGZpbGw9IiNiMWNjMzMiIGQ9Im0yOS42Njk3LDMwLjg1MzdjMS45NjE5LjkxNTIsMi43MzI2LDEuNDA0OSw0Ljg5NjgsMS4zNTM4Ljk5MjMuMDA1OCwxLjk4MjktLjA4MTIsMi45NTg5LS4yNnYyMC45NzI1Yy4wMDI0LDIuOTExOC0yLjMzMjgsNS42NTIzLTQuNzM0Myw0LjkwNDQtMS45NjEzLTEuNDMzNS0yLjc2ODMtMS41ODM1LTMuMjA3OC00LjU0OThsLjA4NjQtMjIuNDIxWiIvPgogIDwvZz4KICA8ZyBpZD0ibGluZSI+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJtNDIuMDYsMTYuOTM3MnYzNS40M2MuMTQ4NiwzLjc0NjUtMi43NjM4LDYuOTA2Mi02LjUxLDcuMDYyOC0zLjc0NjItLjE1NjUtNi42NTg2LTMuMzE2My02LjUxLTcuMDYyOFYxNy4yODU1Ii8+CiAgICA8ZWxsaXBzZSBjeD0iMzUuNTQzMyIgY3k9IjE1LjIyMzgiIHJ4PSI3LjM5MzMiIHJ5PSIzLjEzNyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0ibTQyLjA2LDI5Ljg0djIzLjA4Yy4wMDIyLDMuNTkzMi0yLjkwODgsNi41MDc4LTYuNTAyLDYuNTFoLS4wMDhjLS42MDA2LjAwMjEtMS4xOTg1LS4wODE2LTEuNzc1NC0uMjQ4Ni0yLjgwMjYtLjc5MDktNC43MzcyLTMuMzQ5My00LjczNDYtNi4yNjE0di0yMy4wOCIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0ibTI5LjI3NywzMC44OTM4YzEuOTYxOS45MTUyLDQuMTA4NywxLjM2NDgsNi4yNzMsMS4zMTM3Ljk5MjMuMDA1OCwxLjk4MjktLjA4MTIsMi45NTg5LS4yNi4wNzEtLjAxMTkuMTUzOS0uMDIzNi4yMjQ5LS4wMzU1LDEuMDcyNS0uMTkxOSwyLjExMjYtLjUzNDUsMy4wODkxLTEuMDE3OCIvPgogIDwvZz4KPC9zdmc+", "chapters": ["chem-acid-base", "chem-concentration-stoich", "chem-organic-naming"], "provenance": "verified"}, {"id": "om-1F9EB", "type": "illustration", "subject": "chem", "title": "Petrischale", "alt": "Petrischale", "caption": "Kulturmedium für Mikroorganismen.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-1F9EB/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-1F9EB.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiPgogICAgPGNpcmNsZSBjeD0iMzYuMDUyNiIgY3k9IjM2LjMzMjEiIHI9IjIxLjU4MTQiIGZpbGw9IiNkMGNmY2UiLz4KICAgIDxjaXJjbGUgY3g9IjM2LjA1MjYiIGN5PSIzNi4zMzIxIiByPSIxNi45Mzg3IiBmaWxsPSIjOTJkM2Y1Ii8+CiAgPC9nPgogIDxnIGlkPSJsaW5lIj4KICAgIDxjaXJjbGUgY3g9IjM2LjA1MjYiIGN5PSIzNi4zMzIxIiByPSIxNi45Mzg3IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8Y2lyY2xlIGN4PSIzNi4wNTI2IiBjeT0iMzYuMzMyMSIgcj0iMjEuNTgxNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPGxpbmUgeDE9IjI3LjkyMiIgeDI9IjMyLjAzNzUiIHkxPSIyOC45MjkyIiB5Mj0iMjYuMjE5IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSIyOC4zNjM5IiB4Mj0iMjYuOTI4MSIgeTE9IjQyLjU3ODciIHkyPSIzNy44NjQ4IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSI0NS43MzA1IiB4Mj0iNDAuODc5NSIgeTE9IjM0LjU1NzEiIHkyPSIzMy42OTA1IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSI0MC40MTU3IiB4Mj0iNDEuNjc3MyIgeTE9IjQ0LjQxMDMiIHkyPSIzOS42NDY5IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxjaXJjbGUgY3g9IjMzLjA1NjMiIGN5PSIzNS4wNjk1IiByPSIwLjgyOTMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPGNpcmNsZSBjeD0iNDAuODY5NiIgY3k9IjI3LjU0OSIgcj0iMC44MjkzIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxjaXJjbGUgY3g9IjM1LjI4MDQiIGN5PSI0Ny41Mzg2IiByPSIwLjgyOTMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPgogIDwvZz4KPC9zdmc+", "chapters": ["chem-organic-groups"], "provenance": "verified"}, {"id": "om-1F525", "type": "illustration", "subject": "chem", "title": "Flamme", "alt": "Feuer", "caption": "Verbrennung ist eine Redoxreaktion.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-1F525/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-1F525.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiPgogICAgPHBhdGggZmlsbD0iI0ZDRUEyQiIgc3Ryb2tlPSJub25lIiBkPSJNNTEuMzM0NCw1OC4zMDE4YzcuNTYzLTkuNzg5NCw0LjAzMTgtMjEuODcyMSwyLjQ0NjEtMjUuNTY4OGMtMC4xNzk5LTAuNDE5My0wLjkzMDItMC41NTY2LTAuOTgyLTAuMTAwNiBjLTAuMTIyNSwxLjA3OTctMC40MDYxLDIuMzYxMS0yLjAwNDEsMS45NzM2Yy0wLjgyMDMtMC4xOTg5LTEuMzQ3OS0wLjU1Ni0xLjM0NzktMS44ODAyIGMwLjUxMS0xNS4wNDk0LTEwLjUxMDktMjUuMjk2OC0xNC4zNDYzLTI4LjUzNTZjLTAuNTEwMy0wLjQzMDktMS4yNjY4LDAuMDI5My0xLjE1ODcsMC43MDM5IGMyLjQ1NiwxNS4zMzQ4LTEuNjA3OSwxNC4yODQ2LTMuMDk4NiwxMy44MTkyYy0wLjI1OTMtMC4wODEtMC41NDA4LDAuMDU0Ni0wLjY2MDMsMC4zMDc0IGMtNC41ODgyLDkuNzAxNC0zLjQxMTIsMTQuMjY1My0zLjUxOSwxNy40NDU1YzAsMC4yNTY5LDAsMC42ODcsMCwwLjk1ODFjMCwxLjc0Ni0xLjQxNTQsMi41ODIyLTIuNTYwNywyLjA3MTQgYy0yLjA1NDUtMC45MTYzLTIuNDA0Ny02LjM3MjktMi40MTM0LTcuODIzNWMtMC4wMDQxLTAuNjgyOC0wLjgwOTQtMC44NzkxLTEuMjAyLTAuMzMyIGMtOC44MDQ4LDEyLjI2Ny0yLjMyNTEsMjMuMTk3NC0wLjA4MjIsMjYuMzE3MWMwLjY0NTksMC44OTg0LDAuOTAyNSwyLjA3NDgsMC41MzU0LDMuMTI5OCBjLTAuMDQxMiwwLjExODMtMC4wODk2LDAuMjM1Mi0wLjE0NjUsMC4zNDljLTAuMzk4OCwwLjc5ODEsMC42NzA3LDEuNCwwLjY3MDcsMS40YzEuMzE1NSwxLjIzMzksNS40NjUxLDUuMTgwNiwxNC4yODE3LDUuMTgwNSBjNy4xMzQ0LTAuMDAwMSwxMS45NDc4LTMuMDU5NSwxMy44Mjk3LTQuNzI0N2MwLjg4MjktMC43ODEyLDEuMjc2MS0wLjg1OTQsMS4yNzMyLTEuNjgyNyBDNTAuODQ1OSw2MC4zMjQzLDUwLjgyMzgsNTguODA2Niw1MS4zMzQ0LDU4LjMwMTgiLz4KICAgIDxwYXRoIGZpbGw9IiNGMUIzMUMiIHN0cm9rZT0ibm9uZSIgZD0iTTM2LjI5MzgsMzIuNTU3OWMtMC4yOTQ2LDEuNDYwOS0xLjMxOTYsNC4wMDE5LTQuMjA3Miw4LjM0OTljLTAuMDU5MiwwLjEwNjQtMC4xMTcyLDAuMjEwNC0wLjE3NjQsMC4zMTY4IGMtMC4zMDg4LDAuNjg5My0xLjM1NTUsMy4zNDE0LTEuMDYxNyw3LjA1MTRjMCwwLjAwMDEsMCwwLDAsMC4wMDAxYy0wLjAwMDIsMC4wMDE4LTAuNTczLDQuMzM3LTIuOTc3LDMuOTc1NyBjLTAuNTA5NS0wLjA3NjYtMC45MjE0LTAuMjUwNi0xLjI1NDEtMC40NzcyYy0wLjYxMDUtMC40MTU5LTEuNDIzNCwwLjEwODItMS4zNDg5LDAuODUyNSBjMC4zMTk1LDMuMTkyNCwxLjYwMzQsOC4wODIyLDYuMTUyNiwxMS42NzIxYzAsMCwxLjI4MzIsMS4wNTk4LDEuNDQxNSwxLjk3NDhjMC4wMDUyLDAuMDMwMywwLjAyOSwwLjA1MDYsMC4wNTkxLDAuMDUwNmw1LjI3NDEsMCBjMC4xODMyLDAsMC4yMDgzLTAuMDI0LDAuMjEzNS0wLjA1OTRjMC4wMzU2LTAuMjQwMiwwLjM2NDMtMS4yNTA0LDMuMjAyNC0zLjc3MzJjMS45OTY2LTEuNzc0OCwzLjE2NTItMy44OTgsMy43NDI0LTUuMzQ4MiBjMC4yMDQ4LTAuNTE0NS0wLjEwMS0xLjExNzMtMC42Mzg5LTEuMjA2OGMtMC4zNDM4LTAuMDU3Mi0wLjcxMjctMC4zNjAzLTEuMDEzMy0xLjE4NDFjLTAuMDAwMy0wLjAwMS0wLjAwMDMtMC4wMDA5LTAuMDAwNy0wLjAwMTkgYy0wLjAwNjMtMC4wMjM1LTAuMjE2Ny0wLjgzODMsMC42MDEzLTIuNTU5NWMwLjM4MDUtMC44MDA2LDAuNDI0Mi0xLjY2NDUsMC4zNi0yLjM2NTVjLTAuMDU3OS0wLjYzMjItMC43MjMzLTAuOTk4LTEuMjgxNi0wLjcxNTYgYy0wLjc4MzksMC4zOTY1LTEuODY5NCwwLjUzMDQtMi41OTkzLTEuMDc1M2MwLDAtMC42NTg0LTEuNTY2Mi0wLjA4NTktNS40NTE1YzAuNDM3LTIuOTY1Ni0xLjAxMDYtNy44NjE1LTIuODI3OS0xMC4zNzQ3IEMzNy40MTkyLDMxLjU4ODcsMzYuNDQ1OSwzMS44MDMyLDM2LjI5MzgsMzIuNTU3OXoiLz4KICA8L2c+CiAgPGcgaWQ9ImhhaXIiLz4KICA8ZyBpZD0ic2tpbiIvPgogIDxnIGlkPSJza2luLXNoYWRvdyIvPgogIDxnIGlkPSJsaW5lIj4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTIxLjYyOTgsNjEuNTU2MmMzLjQ3OSwzLjYxMDgsOC42NzAyLDUuNDc1NCwxMy45OTI1LDUuNDc1NGM1LjA1NDYsMCwxMC43MDc3LTEuOTYyNCwxNC4yNDA5LTUuNDY3NyIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMjEuNTEwOCw1Ny40NTU3YzAsMC0xMC41MzIxLTExLjIwMTEtMC40NTQ2LTI1Ljk3OTFjMCwwLDAuMTk2OSw0LjA1ODksMS4yNTUxLDYuNTgxNmMwLjQ4MzQsMS4wMzYyLDEuMjEyMiwxLjk1NjksMi4zNDg3LDEuOTU2OSBjMS4zMzU1LDAsMi40MTgxLTAuODk3MiwyLjQxODEtMi41NzA4YzAtMC4yNTk5LDAtMC42NzIxLDAtMC45MTg0YzAuMTA1LTMuMDk5Ni0wLjUyNTEtNy42NjU5LDMuNTcwOC0xNy4xOSBjMCwwLDcuMDM2NSwzLjc4MzUsMy45OTA5LTE0LjYxMjJjMCwwLDE0Ljg3OTgsMTAuNDQyMSwxNC4yNzYyLDI4LjIxN2MwLDEuMjY5MywwLjk2NzgsMi4yOTgzLDIuMTYxNywyLjI5ODMgczIuMTYxNy0xLjAyOSwyLjE2MTctMi4yOTgzYzAuMDc1LDAuMTM0MSw2LjMyMTksMTMuMDc4LTIuNTE0LDI0LjUxNSIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMjIuODIwMywyMi45NzI5YzAuMTk4LTEuMDM1OCwwLjcwODItMi4yODAyLDEuOTIyOC0zLjMxODVjMCwwLDEuOTAyMS0xLjYzNTUsMS41OTUzLTMuODMwNSIvPgogIDwvZz4KPC9zdmc+", "chapters": ["chem-redox", "chem-energetics"], "provenance": "verified"}, {"id": "om-1F9F2", "type": "illustration", "subject": "phys", "title": "Magnet", "alt": "Hufeisenmagnet", "caption": "Feldlinien laufen aussen von Nord nach Süd.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-1F9F2/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-1F9F2.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiPgogICAgPHBhdGggZmlsbD0iI2VhNWE0NyIgZD0iTTQzLjUsMzYuNVY0N2E4LjUsOC41LDAsMCwxLTE3LDBWMzYuNWgtNlY0N2ExNC41LDE0LjUsMCwwLDAsMjksMFYzNi41WiIvPgogICAgPGc+CiAgICAgIDxyZWN0IHg9IjIwLjUiIHk9IjMxLjUiIHdpZHRoPSI2IiBoZWlnaHQ9IjUiIGZpbGw9IiNkMGNmY2UiLz4KICAgICAgPHJlY3QgeD0iNDMuNSIgeT0iMzEuNSIgd2lkdGg9IjYiIGhlaWdodD0iNSIgZmlsbD0iI2QwY2ZjZSIvPgogICAgPC9nPgogICAgPHBhdGggZmlsbD0iI2ZjZWEyYiIgZD0iTTQ0Ljg4MTgsMTkuNzc1NGExLjI4MywxLjI4MywwLDAsMC0xLjI2LS45MDcySDM4LjY5NzNsMy40NjA5LTcuNzVhMSwxLDAsMCwwLTEuNjQ1NS0xLjA4ODlMMjkuNDIxNCwyMS45NThhMS4zMjcsMS4zMjcsMCwwLDAtLjI3ODgsMS40NTEyLDEuMzcsMS4zNywwLDAsMCwxLjI2NjYuODVoNC44Nzg5bC00Ljk5NDYsOC4wNWExLjAwMDYsMS4wMDA2LDAsMCwwLC4yMTI0LDEuMjk4OGMuMjI3LjE4NzUuMzguMzE0NS41NzE3LjMxNDUuNCwwLC45NjU5LS41NTY3LDIuNzE2My0yLjI3ODNMNDQuMjEsMjEuMzcxMUExLjQ1MTksMS40NTE5LDAsMCwwLDQ0Ljg4MTgsMTkuNzc1NFoiLz4KICA8L2c+CiAgPGcgaWQ9ImxpbmUiPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTQzLjUsMzYuNVY0N2E4LjUsOC41LDAsMCwxLTE3LDBWMzYuNWgtNlY0N2ExNC41LDE0LjUsMCwwLDAsMjksMFYzNi41WiIvPgogICAgPGc+CiAgICAgIDxyZWN0IHg9IjIwLjUiIHk9IjMxLjUiIHdpZHRoPSI2IiBoZWlnaHQ9IjUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgICAgPHJlY3QgeD0iNDMuNSIgeT0iMzEuNSIgd2lkdGg9IjYiIGhlaWdodD0iNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPC9nPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTQ0Ljg4MTgsMTkuNzc1NGExLjI4MywxLjI4MywwLDAsMC0xLjI2LS45MDcySDM4LjY5NzNsMy40NjA5LTcuNzVhMSwxLDAsMCwwLTEuNjQ1NS0xLjA4ODlMMjkuNDIxNCwyMS45NThhMS4zMjcsMS4zMjcsMCwwLDAtLjI3ODgsMS40NTEyLDEuMzcsMS4zNywwLDAsMCwxLjI2NjYuODVoNC44Nzg5bC00Ljk5NDYsOC4wNWExLjAwMDYsMS4wMDA2LDAsMCwwLC4yMTI0LDEuMjk4OGMuMjI3LjE4NzUuMzguMzE0NS41NzE3LjMxNDUuNCwwLC45NjU5LS41NTY3LDIuNzE2My0yLjI3ODNMNDQuMjEsMjEuMzcxMUExLjQ1MTksMS40NTE5LDAsMCwwLDQ0Ljg4MTgsMTkuNzc1NFoiLz4KICA8L2c+Cjwvc3ZnPg==", "chapters": ["phys-magnetism"], "provenance": "verified"}, {"id": "om-26A1", "type": "illustration", "subject": "phys", "title": "Blitz", "alt": "Elektrische Entladung", "caption": "Spannungsunterschied treibt den Strom.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-26A1/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-26A1.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiPgogICAgPHBhdGggZmlsbD0iI0ZDRUEyQiIgc3Ryb2tlPSJub25lIiBkPSJNNDguMTQzLDMuNzI2MUwxNi4zMTYsMzcuODUwN2MtMC42MDI5LDAuNjQ2NS0wLjExNDEsMS42NTg5LDAuODAxLDEuNjU4OWgxOS4xMDY2TDE5LjE1MDMsNjcuMDQ4MiBjLTAuMTY2MiwwLjI2ODEsMC4yMTUsMC41MzY0LDAuNDQyNCwwLjMxMTRsMzYuMDYyOC0zNS43MDRjMC42NDM2LTAuNjM3MiwwLjE2MjYtMS42ODgyLTAuNzcyNS0xLjY4ODJIMzYuMzgyNkw0OC4xNDMsMy43MjYxeiIvPgogIDwvZz4KICA8ZyBpZD0iaGFpciIvPgogIDxnIGlkPSJza2luIi8+CiAgPGcgaWQ9InNraW4tc2hhZG93Ii8+CiAgPGcgaWQ9ImxpbmUiPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNNDguMTYyOCw0LjQ0MDZMMTYuMzIyNCwzNy43ODE3Yy0wLjYxNzQsMC42NDY1LTAuMTE2OCwxLjY1ODksMC44MjAxLDEuNjU4OWgxOS4wODI5bC0xOC4zMDQsMjguODMzM2wzNy43MjY5LTM2LjQ3ODUgYzAuNjU5LTAuNjM3MiwwLjE2NjUtMS42ODgyLTAuNzkxLTEuNjg4MkgzNi4zODQ2TDQ4LjE2MjgsNC40NDA2eiIvPgogIDwvZz4KPC9zdmc+", "chapters": ["phys-electric-basics", "phys-circuits-power"], "provenance": "verified"}, {"id": "om-1F321", "type": "illustration", "subject": "phys", "title": "Thermometer", "alt": "Thermometer", "caption": "Temperatur misst mittlere Teilchenenergie.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-1F321/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-1F321.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTM1Ljk3MDksMy40NTE3aDBjLTMuMDAxMiwwLTQuNjg0MSwyLjQzMjktNC42ODQxLDUuNDM0MXYyMy4xMDZoOS4xMTgybC4yNS0yMy4xMDZjLjAwMDEtMy4wMDEyLTEuNjgyOS01LjQzNDEtNC42ODQxLTUuNDM0MVoiLz4KICAgIDxwYXRoIGZpbGw9IiNlYTVhNDciIGQ9Im00MC41NjU2LDQ3LjQ5ODNjMy41MjYsMS44Mjg0LDYuNDM0NCw1LjUwNTgsNi40MzQ0LDkuNzQ0NSwwLDYuMDYxMy00LjkyNDksMTAuOTc0OS0xMSwxMC45NzQ5cy0xMS00LjkxMzYtMTEtMTAuOTc0OWMwLTQuMjUzOSwzLjEzNzUtOC4xOTgxLDYuNjg0MS0xMC4wMTk2bC4wODkxLTE4LjUyMXM3LjU3MiwxLjQzNyw4Ljc3MzctMS4xNDMybC4wMTg3LDE5LjkzOTRaIi8+CiAgICA8cGF0aCBmaWxsPSIjZDIyZjI3IiBkPSJtMzcuMDQxNSwyOS40MDNjMS42OTI1LS4xNTAxLDEuMjgyNC0uMzI5NCwzLjQ4NTktMS4yNDEybC4wMjM2LDE4LjgyODVjLjAwMDcuNTU3MS4xODIsMS4xMDM2LjUzNDksMS41MzgzLDIuMTY3OCwyLjY3MDcsNS4yNTE5LDUuMjExNyw1LjI1MTksOS4wOTE5LDAsNS45OTM1LTQuOTg5OSwxMC4wMzY1LTEwLjQzMDksMTAuMDM2NSwwLDAsMTAuMTAzMS03LjYwOTYsMS42OTItMTYuNTg1OC0uMzU1NS0uMzc5My0uNTUxLTEuMjI5Ny0uNTUxLTEuNzc0OWwtLjAwNjQtMTkuODkzM1oiLz4KICA8L2c+CiAgPGcgaWQ9ImxpbmUiPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0ibTM4LjM4NzQsMzUuOTEzM2MtLjcyMTcuMTU5OS0xLjk3NDguMjY1Ny0zLjM5OTkuMjY1Ny0yLjIzNjQsMC00LjA0OTQtLjI2MDYtNC4wNDk0LS41ODIiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Im0zOC4zODc0LDQzLjYxMDhjLS43MjE3LjE1OTktMS45NzQ4LjI2NTctMy4zOTk5LjI2NTctMi4yMzY0LDAtNC4wNDk0LS4yNjA2LTQuMDQ5NC0uNTgyIi8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJtMzguMzg3NCwyOC4yMTU4Yy0uNzIxNy4xNTk5LTEuOTc0OC4yNjU3LTMuMzk5OS4yNjU3LTIuMjM2NCwwLTQuMDQ5NC0uMjYwNi00LjA0OTQtLjU4MiIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0ibTM4LjM4NzQsMjAuNTE4M2MtLjcyMTcuMTU5OS0xLjk3NDguMjY1Ny0zLjM5OTkuMjY1Ny0yLjIzNjQsMC00LjA0OTQtLjI2MDYtNC4wNDk0LS41ODIiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Im0yOS42NjM0LDQ5LjQ2MjRjMS4yOTM0LS45NjI5LDEuMjc1NS0yLjIzNjUsMS4yNzU1LTIuMjM2NVY4LjYzODVjMC0yLjgwNywyLjI3NTUtNS4wODI1LDUuMDgyNS01LjA4MjVzNS4wODI1LDIuMjc1NSw1LjA4MjUsNS4wODI1djM4LjU4NzRzLjAwNTIsMS4yODU5LDEuMjk4NiwyLjI0ODhjMi4zMTAxLDEuODYzMywzLjc4NzksNC43MTcyLDMuNzg3OSw3LjkxNjIsMCw1LjYxNC00LjU1MTEsMTAuMTY1MS0xMC4xNjUxLDEwLjE2NTFzLTEwLjE2NTEtNC41NTExLTEwLjE2NTEtMTAuMTY1MWMwLTEuNTM1NS4zNDA1LTIuOTkxNS45NS00LjI5NjYiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Im0zOC4zODc0LDEyLjgyMDhjLS43MjE3LjE1OTktMS45NzQ4LjI2NTctMy4zOTk5LjI2NTctMi4yMzY0LDAtNC4wNDk0LS4yNjA2LTQuMDQ5NC0uNTgyIi8+CiAgPC9nPgo8L3N2Zz4=", "chapters": ["geo-climate-change", "phys-heat-thermo", "phys-temperature-expansion"], "provenance": "verified"}, {"id": "om-1F50B", "type": "illustration", "subject": "phys", "title": "Batterie", "alt": "Akku", "caption": "Chemische Energie wird elektrisch nutzbar.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-1F50B/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-1F50B.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiPgogICAgPHBhdGggZmlsbD0iI2QwY2ZjZSIgc3Ryb2tlPSJub25lIiBkPSJNNTkuOTcxLDQyLjc5ODVjMC0wLjU1MjMsMC40NDc3LTEsMS0xaDQuMTQzdi05LjE4M2gtNC4xNDNjLTAuNTUyMywwLTEtMC40NDc3LTEtMSBNNTkuOTcxLDMxLjYxNTV2LTcuMTU5IEg2LjY2MnYyNS4wMTNoNTMuMzA5di02LjY3MSIvPgogICAgPHBhdGggZmlsbD0iI2QwY2ZjZSIgc3Ryb2tlPSJub25lIiBkPSJNNjEuMDgzLDMyLjM0ODVjLTAuNTUyMywwLTEtMC40NDc3LTEtMXYtNy4xNTlIMzYuOTY3SDYuNzczdjI1LjAxM2gxMS43MzZoNDEuNTc3di02LjY3MSBjMC0wLjU1MjMsMC40NDc3LTEsMS0xaDQuMTQzdi05LjE4M0g2MS4wODN6Ii8+CiAgICA8cGF0aCBmaWxsPSIjYjFjYzMzIiBzdHJva2U9Im5vbmUiIGQ9Ik0xMi4wMDIsNDUuMzY2NWgzMi4yMzl2LTE3LjAwN0gxMi4wMDJWNDUuMzY2NXoiLz4KICA8L2c+CiAgPGcgaWQ9ImhhaXIiLz4KICA8ZyBpZD0ic2tpbiIvPgogIDxnIGlkPSJza2luLXNoYWRvdyIvPgogIDxnIGlkPSJsaW5lIj4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik02MS4wODEsMzEuMzQ3NXYtNy4xNTkgYzAtMC41NTIzLTAuNDQ3Ny0xLTEtMUg2Ljc3MmMtMC41NTIzLDAtMSwwLjQ0NzctMSwxdjI1LjAxNmMwLDAuNTUyMywwLjQ0NzcsMSwxLDFoNTMuMzEzYzAuNTUyMywwLDEtMC40NDc3LDEtMXYtNi42NzRoNS4xNDMgdi0xMS4xODNINjEuMDgxeiIvPgogICAgPHJlY3QgeD0iMTEiIHk9IjI3LjM1OTUiIHdpZHRoPSIzNC4yMzkiIGhlaWdodD0iMTkuMDA3IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgPC9nPgo8L3N2Zz4=", "chapters": ["phys-energy"], "provenance": "verified"}, {"id": "om-1F30A", "type": "illustration", "subject": "phys", "title": "Welle", "alt": "Wasserwelle", "caption": "Wellen transportieren Energie, nicht Materie.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-1F30A/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-1F30A.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxnIGlkPSJjb2xvciI+CiAgICA8cGF0aCBmaWxsPSIjOTJEM0Y1IiBkPSJNNCwyOC4xODkxQzQsMTQuODE3LDE0LjI4NTUsMy45Nzc0LDI3LjgzNjUsMy45Nzc0bDAsMEMxNSwxOS4zNDM3LDI2LjI1LDQzLjcyMTYsNTYuNCw0MS41NjMxIGM0LjI1NjMtMC4zMDQ3LDguOTQ2Ni0xLjc3NzcsMTIuNTkzMy0zLjcyNDR2MzAuMDg2NWMwLDAuNTU4My0wLjQ1MjUsMS4wMTA4LTEuMDEwOCwxLjAxMDlMNCw2OC45NTc4VjI4LjE4OTEiLz4KICAgIDxwYXRoIGZpbGw9IiM2MUIyRTQiIGQ9Ik0yMS43ODQzLDEwLjAxMTljLTMuODIxNyw3LjE3OC01Ljk1MDcsMjEuMTI3NSw2LjU1NTMsMzMuMzQzNWMwLDAsMTAuMjM5MSwxMi42NDksNDAuNjUzNyw0Ljg4NDdWMzcuMzQ5NCBjMCwwLTExLjEwNjQsNy41OTIyLTI3LjUyNTEsMi4zMzg0Yy0xNS4zODQ5LTQuOTIzLTE5LjQyNTQtMTYuNTI2Ny0xOC45MDkzLTIwLjc2NjhjMC4xODI1LTEuNDk5NCwwLjc4NzgtNi4wNDE3LDAuNzg3OC02LjA0MTcgczAuODM4OC0zLjAxNDcsMC41NDU0LTMuODAxQzIzLjU1MjUsOC4xNjc5LDIyLjA1OCw5LjQ5NzksMjEuNzg0MywxMC4wMTE5eiIvPgogICAgPHBhdGggZmlsbD0iIzkyRDNGNSIgZD0iTTQ0Ljg1Nyw5LjcyMjNjMS42NzQ0LDEuOTA2NiwxLjU3ODUsNC43MjE3LTAuMjEwMSw2LjI5MjVzLTQuNTk1OSwxLjI5ODQtNi4yNzAzLTAuNjA4MiBjMCwwLTIuMDcwMi0yLjI4NTgtMy4wMTc4LTguODc1OWMwLDAtMC4yNTA5LTEuMzE5OSwwLjk3ODgtMC45NjA2QzQyLjc1MDIsNy4zNjA4LDQ0Ljg1Nyw5LjcyMjMsNDQuODU3LDkuNzIyMyIvPgogICAgPHBhdGggZmlsbD0iIzYxQjJFNCIgZD0iTTM1LjQxMDEsNi4wNTUxYzQuMzUzNC0wLjU5OTIsOS4xNjYyLDMuMzg4Myw5LjE2NjIsMy4zODgzYzIuMTMzMSwyLjQyOSwxLjg1OSw1LjAwMDMsMC4wNzA0LDYuNTcxIEM0NC42NDY2LDE2LjAxNDQsNDMuNjQ4OSwxMC41NzIzLDM1LjQxMDEsNi4wNTUxIi8+CiAgPC9nPgogIDxnIGlkPSJoYWlyIi8+CiAgPGcgaWQ9InNraW4iLz4KICA8ZyBpZD0ic2tpbi1zaGFkb3ciLz4KICA8ZyBpZD0ibGluZSI+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik00LDI3LjgzMzMgTTQsNjcuOTU4MyBNNjgsNDcuODk1OHYyMC4wNjI1SDR2LTQwLjEyNUM0LDEzLjE0NzgsMTMuNTc5LDQsMjcuODM2NCwzLjk5NjkiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTY4LDM3LjUwNjRDNjQuMzUzMywzOS40MjI5LDYwLjY1NjMsNDAuNyw1Ni40LDQxQzI2LjI1LDQzLjEyNSwxNSwxOS4xMjUsMjcuODM2NCwzLjk5NjkiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTY4LDQ3Ljg5NThjLTQuODMzMywyLjY4NzUtMTEuMjUsMy4zNzE1LTE5LjAxNTgsMi45ODc4QzEzLjk5MTEsNDcuNjI1NCwxMS4zODEzLDE0LjM4NDEsMjcuODM2NCwzLjk5NjkiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMS45IiBkPSJNNDQuODU3LDkuNzIyM2MxLjY3NDQsMS45MDY2LDEuNTc4NSw0LjcyMTctMC4yMTAxLDYuMjkyNXMtNC41OTU5LDEuMjk4NC02LjI3MDMtMC42MDgyYzAsMC0yLjA3MDItMi4yODU4LTMuMDE3OC04Ljg3NTkgYzAsMC0wLjI1MDktMS4zMTk5LDAuOTc4OC0wLjk2MDZDNDIuNzUwMiw3LjM2MDgsNDQuODU3LDkuNzIyMyw0NC44NTcsOS43MjIzIi8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik02My44NzUsNjMuMjc3NWMtMy40MjM4LDAtMy40MjM4LTIuMDU1LTYuODQ3NS0yLjA1NWMtMy40MjE5LDAtMy40MjE5LDIuMDU1LTYuODQzOCwyLjA1NWMtMy40MjQ5LDAtMy40MjQ5LTIuMDU1LTYuODQ5OC0yLjA1NSBjLTMuNDI3MiwwLTMuNDI3MiwyLjA1NS02Ljg1NDUsMi4wNTVzLTMuNDI3Mi0yLjA1NS02Ljg1NDUtMi4wNTUiLz4KICA8L2c+Cjwvc3ZnPg==", "chapters": ["phys-states"], "provenance": "verified"}, {"id": "om-1F4D0", "type": "illustration", "subject": "math", "title": "Geodreieck", "alt": "Dreieck mit Winkelmesser", "caption": "Trigonometrie verbindet Winkel und Seiten.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-1F4D0/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-1F4D0.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiPgogICAgPHBhdGggZmlsbD0iI0QwQ0ZDRSIgc3Ryb2tlPSJub25lIiBkPSJNMTcuMTYwMSwxNS45NTQ2bDAuMjUyLDM5LjQzNzNsMzguNjE4My0zOS40MzczSDE3LjE2MDF6IE0yMi40MTA0LDMyLjM5MDdWMjIuMTYyOSBjMC0wLjIwOCwwLjA4NzEtMC40MDc5LDAuMjQxOC0wLjU1NWMwLjA3NzMtMC4wNzMzLDAuMTY4Ni0wLjEzMDYsMC4yNjc4LTAuMTY5N2MwLjA5OTItMC4wMzksMC4yMDY0LTAuMDU5NywwLjMxNTYtMC4wNTk3IGMwLDAsMC4wMDAxLDAsMC4wMDA4LDBsMCwwbDEwLjQyNDMsMC4wMDY1YzAuMDgyOCwwLjAwMDEsMC4xNjM2LDAuMDExOSwwLjI0MDIsMC4wMzQyYzAuMjI5OCwwLjA2NjgsMC40MjIzLDAuMjI3MSwwLjUxODksMC40NDQ1IGMwLjAzMjMsMC4wNzI2LDAuMDUyMywwLjE0NzksMC4wNjA3LDAuMjIzOGMwLjAyNSwwLjIyNzMtMC4wNTU0LDAuNDU4My0wLjIyODMsMC42MjhMMjMuODI3OSwzMi45MzY5bDAsMGwwLDAgYy0wLjE1NzksMC4xNTU1LTAuMzczMSwwLjIzODItMC41OTIzLDAuMjM4MmMtMC4xMDQ4LDAtMC4yMDk1LTAuMDE4NC0wLjMxMDMtMC4wNTc0Yy0wLjIzMzItMC4wOTAyLTAuNDA2My0wLjI3NDMtMC40NzgyLTAuNDk1NSBDMjIuNDIzMSwzMi41NDg0LDIyLjQxMDQsMzIuNDcwNiwyMi40MTA0LDMyLjM5MDdMMjIuNDEwNCwzMi4zOTA3eiIvPgogICAgPHBvbHlnb24gZmlsbD0iIzlCOUI5QSIgc3Ryb2tlPSJub25lIiBwb2ludHM9IjU1LjU2MTIsMTYuMjE0OCA0OC43ODUyLDE2LjM4MjEgMTcuMjQ3Niw0OC44MTE5IDE3LjE3NDQsNTUuNzU3OSIvPgogICAgPGxpbmUgeDE9IjIzLjg1NDgiIHgyPSIyMi41NjU3IiB5MT0iNDMuMjg5MSIgeTI9IjQyLjA0NjIiIGZpbGw9IiNkMGNmY2UiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPGxpbmUgeDE9IjI5LjQwNzYiIHgyPSIyOC4xMTg1IiB5MT0iMzcuNTMiIHkyPSIzNi4yODcyIiBmaWxsPSIjZDBjZmNlIiBzdHJva2U9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSIzMi4xODM5IiB4Mj0iMzAuODk0OSIgeTE9IjM0LjY1MDYiIHkyPSIzMy40MDc3IiBmaWxsPSIjZDBjZmNlIiBzdHJva2U9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSIzNC45NjA0IiB4Mj0iMzMuNjcxMyIgeTE9IjMxLjc3MTEiIHkyPSIzMC41MjgxIiBmaWxsPSIjZDBjZmNlIiBzdHJva2U9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSIzNy43MzY3IiB4Mj0iMzYuNDQ3NyIgeTE9IjI4Ljg5MTUiIHkyPSIyNy42NDg2IiBmaWxsPSIjZDBjZmNlIiBzdHJva2U9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSI0My4yODk2IiB4Mj0iNDIuMDAwNSIgeTE9IjIzLjEzMjUiIHkyPSIyMS44ODk2IiBmaWxsPSIjZDBjZmNlIiBzdHJva2U9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSIyNi43MTkxIiB4Mj0iMjQuNTE5NCIgeTE9IjQwLjQ5NDQiIHkyPSIzOC4zNzM0IiBmaWxsPSIjZDBjZmNlIiBzdHJva2U9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSI0MC42MDEyIiB4Mj0iMzguNDAxMyIgeTE9IjI2LjA5NjkiIHkyPSIyMy45NzU4IiBmaWxsPSIjZDBjZmNlIiBzdHJva2U9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICA8L2c+CiAgPGcgaWQ9ImhhaXIiLz4KICA8ZyBpZD0ic2tpbiIvPgogIDxnIGlkPSJza2luLXNoYWRvdyIvPgogIDxnIGlkPSJsaW5lIj4KICAgIDxwb2x5Z29uIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgcG9pbnRzPSIxNy4wNjUyLDU2LjA4MDggMTcuMDY1MiwxNi4wNTU5IDU1Ljg0NDQsMTYuMDgxIi8+CiAgICA8cG9seWdvbiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIHBvaW50cz0iMjIuNTQxOCwzNC4zNzI2IDIyLjU0MTgsMjEuMzMzNiAzNS4xNzUsMjEuMzQxOCIvPgogICAgPGxpbmUgeDE9IjIzLjg1NDgiIHgyPSIyMi41NjU3IiB5MT0iNDMuMjg5MSIgeTI9IjQyLjA0NjIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPGxpbmUgeDE9IjI5LjQwNzYiIHgyPSIyOC4xMTg1IiB5MT0iMzcuNTMiIHkyPSIzNi4yODcyIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSIzMi4xODM5IiB4Mj0iMzAuODk0OSIgeTE9IjM0LjY1MDYiIHkyPSIzMy40MDc3IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSIzNC45NjA0IiB4Mj0iMzMuNjcxMyIgeTE9IjMxLjc3MTEiIHkyPSIzMC41MjgxIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSIzNy43MzY3IiB4Mj0iMzYuNDQ3NyIgeTE9IjI4Ljg5MTUiIHkyPSIyNy42NDg2IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSI0My4yODk2IiB4Mj0iNDIuMDAwNSIgeTE9IjIzLjEzMjUiIHkyPSIyMS44ODk2IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSIyNi43MTkxIiB4Mj0iMjQuNTE5NCIgeTE9IjQwLjQ5NDQiIHkyPSIzOC4zNzM0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSI0MC42MDEyIiB4Mj0iMzguNDAxMyIgeTE9IjI2LjA5NjkiIHkyPSIyMy45NzU4IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICA8L2c+Cjwvc3ZnPg==", "chapters": ["math-analytic-geometry", "math-derivatives", "math-trigonometry"], "provenance": "verified"}, {"id": "om-1F4CA", "type": "illustration", "subject": "math", "title": "Balkendiagramm", "alt": "Säulen", "caption": "Daten werden erst durch Darstellung lesbar.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-1F4CA/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-1F4CA.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiPgogICAgPHJlY3QgeD0iMTIuMDUiIHk9IjEyLjA1IiB3aWR0aD0iNDcuOSIgaGVpZ2h0PSI0Ny45IiBmaWxsPSIjZmZmIi8+CiAgICA8cmVjdCB4PSIxOC4zMiIgeT0iMzcuNiIgd2lkdGg9IjgiIGhlaWdodD0iMjEuNDEiIGZpbGw9IiNiMWNjMzMiLz4KICAgIDxyZWN0IHg9IjQ2LjI1IiB5PSI0NC4zOCIgd2lkdGg9IjgiIGhlaWdodD0iMTQuNjIiIGZpbGw9IiM5MmQzZjUiLz4KICAgIDxyZWN0IHg9IjMyLjI4IiB5PSIyMS42OSIgd2lkdGg9IjgiIGhlaWdodD0iMzcuMzIiIGZpbGw9IiNkMjJmMjciLz4KICA8L2c+CiAgPGcgaWQ9ImhhaXIiLz4KICA8ZyBpZD0ic2tpbiIvPgogIDxnIGlkPSJza2luLXNoYWRvdyIvPgogIDxnIGlkPSJsaW5lIj4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgZD0ibTE4LjAzIDU5LjAxdi0yMS40MWg4djIxLjQxIi8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Im00NS45NyA1OS4wMXYtMTQuNjJoOHYxNC42MiIvPgogICAgPGxpbmUgeDE9IjEyLjc1IiB4Mj0iMjguNDkiIHkxPSIzMS4yOCIgeTI9IjMxLjI4IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSI0My41MSIgeDI9IjU5LjQ1IiB5MT0iNDAuODIiIHkyPSI0MC44MiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8bGluZSB4MT0iNTcuNDgiIHgyPSI1OS4xNyIgeTE9IjUwLjM3IiB5Mj0iNTAuMzciIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPHJlY3QgeD0iMTIuMDUiIHk9IjEyLjA1IiB3aWR0aD0iNDcuOSIgaGVpZ2h0PSI0Ny45IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgZD0ibTMyIDU5LjAxdi0zNy4yOGg4djM3LjI4Ii8+CiAgICA8bGluZSB4MT0iMTIuMzkiIHgyPSIxNC41MiIgeTE9IjQwLjgyIiB5Mj0iNDAuODIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPGxpbmUgeDE9IjEyLjM5IiB4Mj0iMTQuNTIiIHkxPSI1MC4zNyIgeTI9IjUwLjM3IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSI0My41MSIgeDI9IjU5LjQ1IiB5MT0iMzEuMjgiIHkyPSIzMS4yOCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8bGluZSB4MT0iNDMuNTEiIHgyPSI1OS40NSIgeTE9IjIxLjc0IiB5Mj0iMjEuNzQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPGxpbmUgeDE9IjEyLjc1IiB4Mj0iMjguNDkiIHkxPSIyMS43NCIgeTI9IjIxLjc0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICA8L2c+Cjwvc3ZnPg==", "chapters": ["math-functions-basic"], "provenance": "verified"}, {"id": "om-1F3B2", "type": "illustration", "subject": "math", "title": "Würfel", "alt": "Spielwürfel", "caption": "Laplace-Experiment mit sechs gleichwahrscheinlichen Ergebnissen.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-1F3B2/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-1F3B2.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxnIGlkPSJjb2xvciI+CiAgICA8cG9seWdvbiBmaWxsPSIjRDBDRkNFIiBwb2ludHM9IjU4LjA5MzYsMjIuNjA3NiAzNS42NzI5LDI3Ljg0NDIgMTMuOTI4OSwyMi4yNzMyIDM1LjY3MjksMTcuNDE3MyIvPgogICAgPHBvbHlnb24gZmlsbD0iIzlCOUI5QSIgcG9pbnRzPSI1OC4yMjExLDQ4LjM0NzMgMzYuMDQyOCw1NC4xMDQ1IDM1LjY3MjksMjcuMDA0MiA1OC4xNjU3LDIxLjg0NiIvPgogICAgPHBvbHlnb24gZmlsbD0iI0QwQ0ZDRSIgcG9pbnRzPSIxMy45ODU2LDQ3Ljk1NyAzNS43MDI3LDU0LjEwNDUgMzUuNjcyOSwyNy44NDQyIDIyLjY0OTcsMjQuNjk4NiAxMy45ODMyLDIyLjI5NTciLz4KICA8L2c+CiAgPGcgaWQ9ImhhaXIiLz4KICA8ZyBpZD0ic2tpbiIvPgogIDxnIGlkPSJza2luLXNoYWRvdyIvPgogIDxnIGlkPSJsaW5lIj4KICAgIDxwb2x5bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIuMDY5IiBwb2ludHM9IjM1LjYzNTIsNTQuMDE3MiA1Ny40Njk4LDQ4LjczMTMgNTcuNDY5OCwyMS43NjQ3IDM1LjYxNjcsMjYuNTE1NSAxMy43NjY3LDIxLjc2NDcgMTMuNzY2Nyw0OC43MzEzIDM1LjYwMTMsNTQuMDE3MiAzNS42MDEzLDMwLjM3MTMiLz4KICAgIDxwb2x5bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIuMDY5IiBwb2ludHM9IjEzLjc2NjcsMjEuNzY0NyAzNS44MDgyLDE2LjQ1NDUgNTcuNDY5OCwyMS43NjQ3Ii8+CiAgICA8Y2lyY2xlIGN4PSIyMS4yNzM1IiBjeT0iMzIuOTMzOSIgcj0iMyIvPgogICAgPGNpcmNsZSBjeD0iMjcuMjQ0NiIgY3k9IjQ0LjM3NjEiIHI9IjMiLz4KICAgIDxjaXJjbGUgY3g9IjQxLjc2NyIgY3k9IjQ1LjIyMTEiIHI9IjMiLz4KICAgIDxjaXJjbGUgY3g9IjQ2LjgyNzQiIGN5PSIzOC4wNjY4IiByPSIzIi8+CiAgICA8Y2lyY2xlIGN4PSI1MS44ODc4IiBjeT0iMzAuOTEyNCIgcj0iMyIvPgogICAgPGVsbGlwc2UgY3g9IjM1LjgzMTIiIGN5PSIyMS4xMjE5IiByeD0iNCIgcnk9IjEuNjE5MSIvPgogIDwvZz4KPC9zdmc+", "chapters": ["math-probability"], "provenance": "verified"}, {"id": "om-1F9EE", "type": "illustration", "subject": "math", "title": "Rechenmaschine", "alt": "Abakus", "caption": "Stellenwertsystem als Grundlage des Rechnens.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-1F9EE/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-1F9EE.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiPgogICAgPHBvbHlnb24gZmlsbD0iI2ZmZiIgcG9pbnRzPSIxMy4zMzA1IDIwLjg5MTYgMTMuNTIzMiAzOS4yODkzIDU4LjQwOTggMzkuMDk2NyA1OC4yMTcyIDIxLjM3MzIgMTMuMzMwNSAyMC44OTE2Ii8+CiAgICA8Y2lyY2xlIGN4PSIyMC4xOTY5IiBjeT0iMTkuNzM2NSIgcj0iMi43MjM3IiBmaWxsPSIjZWE1YTQ3Ii8+CiAgICA8cGF0aCBmaWxsPSIjZDIyZjI3IiBkPSJtMjEuMjc2NSwxNy4wNTcyYy44MTExLDEuMjY0OS40NDMyLDIuOTQ3OC0uODIxNiwzLjc1ODktLjg5NS41NzM5LTIuMDQyMy41NzM5LTIuOTM3MywwLC44MDg2LDEuMjY3NCwyLjQ5MTUsMS42Mzk0LDMuNzU4OS44MzA5czEuNjM5NC0yLjQ5MTUuODMwOS0zLjc1ODljLS4yMTMyLS4zMzQxLS40OTY3LS42MTc3LS44MzA5LS44MzA5WiIvPgogICAgPGNpcmNsZSBjeD0iMzAuODM0MyIgY3k9IjE5LjczNjUiIHI9IjIuNzIzNyIgZmlsbD0iI2VhNWE0NyIvPgogICAgPHBhdGggZmlsbD0iI2QyMmYyNyIgZD0ibTMxLjkxMzksMTcuMDU3MmMuODExMSwxLjI2NDkuNDQzMiwyLjk0NzgtLjgyMTYsMy43NTg5LS44OTUuNTczOS0yLjA0MjMuNTczOS0yLjkzNzMsMCwuODA4NiwxLjI2NzQsMi40OTE1LDEuNjM5NCwzLjc1ODkuODMwOXMxLjYzOTQtMi40OTE1LjgzMDktMy43NTg5Yy0uMjEzMi0uMzM0MS0uNDk2Ny0uNjE3Ny0uODMwOS0uODMwOVoiLz4KICAgIDxjaXJjbGUgY3g9IjM3LjY5NzEiIGN5PSIxOS43MzY1IiByPSIyLjcyMzciIGZpbGw9IiNlYTVhNDciLz4KICAgIDxwYXRoIGZpbGw9IiNkMjJmMjciIGQ9Im0zOC43NzY3LDE3LjA1NzJjLjgxMTEsMS4yNjQ5LjQ0MzIsMi45NDc4LS44MjE2LDMuNzU4OS0uODk1LjU3MzktMi4wNDIzLjU3MzktMi45MzczLDAsLjgwODYsMS4yNjc0LDIuNDkxNSwxLjYzOTQsMy43NTg5LjgzMDlzMS42Mzk0LTIuNDkxNS44MzA5LTMuNzU4OWMtLjIxMzItLjMzNDEtLjQ5NjctLjYxNzctLjgzMDktLjgzMDlaIi8+CiAgICA8Y2lyY2xlIGN4PSI0NS4yNDYyIiBjeT0iMTkuNzM2NSIgcj0iMi43MjM3IiBmaWxsPSIjZWE1YTQ3Ii8+CiAgICA8cGF0aCBmaWxsPSIjZDIyZjI3IiBkPSJtNDYuMzI1OCwxNy4wNTcyYy44MTExLDEuMjY0OS40NDMyLDIuOTQ3OC0uODIxNiwzLjc1ODktLjg5NS41NzM5LTIuMDQyMy41NzM5LTIuOTM3MywwLC44MDg2LDEuMjY3NCwyLjQ5MTUsMS42Mzk0LDMuNzU4OS44MzA5czEuNjM5NC0yLjQ5MTUuODMwOS0zLjc1ODljLS4yMTMyLS4zMzQxLS40OTY3LS42MTc3LS44MzA5LS44MzA5WiIvPgogICAgPGNpcmNsZSBjeD0iMjMuOTMwOSIgY3k9IjMwLjM3MzkiIHI9IjIuNzIzNyIgZmlsbD0iI2ZjZWEyYiIvPgogICAgPHBhdGggZmlsbD0iI2YxYjMxYyIgZD0ibTI1LjAxMDUsMjcuNjk0NmMuODExMSwxLjI2NDguNDQzNCwyLjk0NzctLjgyMTQsMy43NTg4LS44OTUuNTc0LTIuMDQyNC41NzQtMi45Mzc0LDAsLjgwODYsMS4yNjczLDIuNDkxNSwxLjYzOTIsMy43NTg4LjgzMDdzMS42MzkyLTIuNDkxNS44MzA3LTMuNzU4OGMtLjIxMzEtLjMzNC0uNDk2Ni0uNjE3NS0uODMwNy0uODMwN1oiLz4KICAgIDxjaXJjbGUgY3g9IjMxLjEzNjkiIGN5PSIzMC4zNzM5IiByPSIyLjcyMzciIGZpbGw9IiNmY2VhMmIiLz4KICAgIDxwYXRoIGZpbGw9IiNmMWIzMWMiIGQ9Im0zMi4yMTY1LDI3LjY5NDZjLjgxMTIsMS4yNjQ4LjQ0MzUsMi45NDc2LS44MjEzLDMuNzU4OC0uODk1MS41NzQxLTIuMDQyNi41NzQxLTIuOTM3NiwwLC44MDg1LDEuMjY3NSwyLjQ5MTQsMS42Mzk2LDMuNzU4OC44MzExLDEuMjY3NS0uODA4NSwxLjYzOTYtMi40OTE0LjgzMTEtMy43NTg4LS4yMTMyLS4zMzQyLS40OTY4LS42MTc5LS44MzExLS44MzExWiIvPgogICAgPGNpcmNsZSBjeD0iNDcuMjY0NSIgY3k9IjMwLjM3MzkiIHI9IjIuNzIzNyIgZmlsbD0iI2ZjZWEyYiIvPgogICAgPHBhdGggZmlsbD0iI2YxYjMxYyIgZD0ibTQ4LjM0NDEsMjcuNjk0NmMuODExMSwxLjI2NDguNDQzNCwyLjk0NzctLjgyMTQsMy43NTg4LS44OTUuNTc0LTIuMDQyNC41NzQtMi45Mzc0LDAsLjgwODYsMS4yNjczLDIuNDkxNSwxLjYzOTIsMy43NTg4LjgzMDdzMS42MzkyLTIuNDkxNS44MzA3LTMuNzU4OGMtLjIxMzEtLjMzNC0uNDk2Ni0uNjE3NS0uODMwNy0uODMwN1oiLz4KICAgIDxjaXJjbGUgY3g9IjU0LjgxMzYiIGN5PSIzMC4zNzM5IiByPSIyLjcyMzciIGZpbGw9IiNmY2VhMmIiLz4KICAgIDxwYXRoIGZpbGw9IiNmMWIzMWMiIGQ9Im01NS44OTMzLDI3LjY5NDZjLjgxMTIsMS4yNjQ4LjQ0MzUsMi45NDc2LS44MjEzLDMuNzU4OC0uODk1MS41NzQxLTIuMDQyNi41NzQxLTIuOTM3NiwwLC44MDg1LDEuMjY3NSwyLjQ5MTQsMS42Mzk2LDMuNzU4OC44MzExLDEuMjY3NS0uODA4NSwxLjYzOTYtMi40OTE0LjgzMTEtMy43NTg4LS4yMTMyLS4zMzQyLS40OTY4LS42MTc5LS44MzExLS44MzExWiIvPgogICAgPGNpcmNsZSBjeD0iMjMuOTMwOSIgY3k9IjQxLjAxMTMiIHI9IjIuNzIzNyIgZmlsbD0iI2Y0YWE0MSIvPgogICAgPHBhdGggZmlsbD0iI2UyNzAyMiIgZD0ibTI1LjAxMDYsMzguMzMyYy44MTEyLDEuMjY0OC40NDM1LDIuOTQ3Ni0uODIxMywzLjc1ODgtLjg5NTEuNTc0MS0yLjA0MjYuNTc0MS0yLjkzNzYsMCwuODA4NSwxLjI2NzUsMi40OTE0LDEuNjM5NiwzLjc1ODguODMxMXMxLjYzOTYtMi40OTE0LjgzMTEtMy43NTg4Yy0uMjEzMi0uMzM0Mi0uNDk2OC0uNjE3OS0uODMxMS0uODMxMVoiLz4KICAgIDxjaXJjbGUgY3g9IjMxLjEzNjkiIGN5PSI0MS4wMTEzIiByPSIyLjcyMzciIGZpbGw9IiNmNGFhNDEiLz4KICAgIDxwYXRoIGZpbGw9IiNlMjcwMjIiIGQ9Im0zMi4yMTY1LDM4LjMzMmMuODExMiwxLjI2NDguNDQzNSwyLjk0NzYtLjgyMTMsMy43NTg4LS44OTUxLjU3NDEtMi4wNDI2LjU3NDEtMi45Mzc2LDAsLjgwODUsMS4yNjc1LDIuNDkxNCwxLjYzOTYsMy43NTg4LjgzMTFzMS42Mzk2LTIuNDkxNC44MzExLTMuNzU4OGMtLjIxMzItLjMzNDItLjQ5NjgtLjYxNzktLjgzMTEtLjgzMTFaIi8+CiAgICA8Y2lyY2xlIGN4PSI0MS4wODgiIGN5PSI0MS4wMTEzIiByPSIyLjcyMzciIGZpbGw9IiNmNGFhNDEiLz4KICAgIDxwYXRoIGZpbGw9IiNlMjcwMjIiIGQ9Im00Mi4xNjc2LDM4LjMzMmMuODExMiwxLjI2NDguNDQzNSwyLjk0NzYtLjgyMTMsMy43NTg4LS44OTUxLjU3NDEtMi4wNDI2LjU3NDEtMi45Mzc2LDAsLjgwODUsMS4yNjc1LDIuNDkxNCwxLjYzOTYsMy43NTg4LjgzMTFzMS42Mzk2LTIuNDkxNC44MzExLTMuNzU4OGMtLjIxMzItLjMzNDItLjQ5NjgtLjYxNzktLjgzMTEtLjgzMTFaIi8+CiAgICA8Y2lyY2xlIGN4PSI1MS40MjI3IiBjeT0iNDEuMDExMyIgcj0iMi43MjM3IiBmaWxsPSIjZjRhYTQxIi8+CiAgICA8cGF0aCBmaWxsPSIjZTI3MDIyIiBkPSJtNTIuNTAyNCwzOC4zMzJjLjgxMTIsMS4yNjQ4LjQ0MzUsMi45NDc2LS44MjEzLDMuNzU4OC0uODk1MS41NzQxLTIuMDQyNi41NzQxLTIuOTM3NiwwLC44MDg1LDEuMjY3NSwyLjQ5MTQsMS42Mzk2LDMuNzU4OC44MzExczEuNjM5Ni0yLjQ5MTQuODMxMS0zLjc1ODhjLS4yMTMyLS4zMzQyLS40OTY4LS42MTc5LS44MzExLS44MzExWiIvPgogIDwvZz4KICA8ZyBpZD0ibGluZSI+CiAgICA8bGluZSB4MT0iMTIuMDkyMSIgeDI9IjEyLjA5MjEiIHkxPSI1OC44NzM3IiB5Mj0iMTIuODczNyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPGxpbmUgeDE9IjQ4LjY1MSIgeDI9IjU5LjU0NTciIHkxPSIxOS43MzY2IiB5Mj0iMTkuNzM2NSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPGxpbmUgeDE9IjQxLjAyMzUiIHgyPSI0MS44OTE1IiB5MT0iMTkuNzM2NiIgeTI9IjE5LjczNjYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSIzNC4xNDQyIiB4Mj0iMzQuNDA3IiB5MT0iMTkuNzM2NiIgeTI9IjE5LjczNjYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSIyMy41ODY0IiB4Mj0iMjcuNDczMSIgeTE9IjE5LjczNjYiIHkyPSIxOS43MzY2IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8bGluZSB4MT0iMTIuODU5NCIgeDI9IjE2Ljg5MDgiIHkxPSIxOS43MzY2IiB5Mj0iMTkuNzM2NiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPGxpbmUgeDE9IjU5LjkwNzkiIHgyPSI1OS45MDc5IiB5MT0iNTguODczNyIgeTI9IjEyLjg3MzciIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxjaXJjbGUgY3g9IjIwLjE5NjkiIGN5PSIxOS43MzY1IiByPSIyLjcyMzciIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjEuMzYxOCIvPgogICAgPGNpcmNsZSBjeD0iMzAuODM0MyIgY3k9IjE5LjczNjUiIHI9IjIuNzIzNyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMS4zNjE4Ii8+CiAgICA8Y2lyY2xlIGN4PSIzNy42OTcxIiBjeT0iMTkuNzM2NSIgcj0iMi43MjM3IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxLjM2MTgiLz4KICAgIDxjaXJjbGUgY3g9IjQ1LjI0NjIiIGN5PSIxOS43MzY1IiByPSIyLjcyMzciIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjEuMzYxOCIvPgogICAgPGxpbmUgeDE9IjU4LjA3NDkiIHgyPSI1OC44NTk0IiB5MT0iMzAuMzczOSIgeTI9IjMwLjM3MzkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSI1MC41NTcxIiB4Mj0iNTEuNTQyNCIgeTE9IjMwLjM3MzkiIHkyPSIzMC4zNzM5IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8bGluZSB4MT0iMzQuNDc5NyIgeDI9IjQzLjkyMTgiIHkxPSIzMC4zNzM5IiB5Mj0iMzAuMzczOSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPGxpbmUgeDE9IjI3LjE4MjkiIHgyPSIyNy44ODUiIHkxPSIzMC4zNzM5IiB5Mj0iMzAuMzczOSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPGxpbmUgeDE9IjEyLjg1OTQiIHgyPSIyMC42MzQ0IiB5MT0iMzAuMzczOSIgeTI9IjMwLjM3MzkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxjaXJjbGUgY3g9IjIzLjkzMDkiIGN5PSIzMC4zNzM5IiByPSIyLjcyMzciIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjEuMzYxOCIvPgogICAgPGNpcmNsZSBjeD0iMzEuMTM2OSIgY3k9IjMwLjM3MzkiIHI9IjIuNzIzNyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMS4zNjE4Ii8+CiAgICA8Y2lyY2xlIGN4PSI0Ny4yNjQ1IiBjeT0iMzAuMzczOSIgcj0iMi43MjM3IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxLjM2MTgiLz4KICAgIDxjaXJjbGUgY3g9IjU0LjgxMzciIGN5PSIzMC4zNzM5IiByPSIyLjcyMzciIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjEuMzYxOCIvPgogICAgPGxpbmUgeDE9IjU0Ljc1OTgiIHgyPSI1OC44NTk0IiB5MT0iNDEuMDExMyIgeTI9IjQxLjAxMTMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSI0NC40Mzk2IiB4Mj0iNDguMDcxMiIgeTE9IjQxLjAxMTMiIHkyPSI0MS4wMTEzIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8bGluZSB4MT0iMzQuNDU3OCIgeDI9IjM3Ljc5MTQiIHkxPSI0MS4wMTEzIiB5Mj0iNDEuMDExMyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPGxpbmUgeDE9IjI3LjI1MTkiIHgyPSIyNy44MTIiIHkxPSI0MS4wMTEzIiB5Mj0iNDEuMDExMyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPGxpbmUgeDE9IjEyLjg1OTQiIHgyPSIyMC42MDYiIHkxPSI0MS4wMTEzIiB5Mj0iNDEuMDExMyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPGNpcmNsZSBjeD0iMjMuOTMwOSIgY3k9IjQxLjAxMTMiIHI9IjIuNzIzNyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMS4zNjE4Ii8+CiAgICA8Y2lyY2xlIGN4PSIzMS4xMzY5IiBjeT0iNDEuMDExMyIgcj0iMi43MjM3IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxLjM2MTgiLz4KICAgIDxjaXJjbGUgY3g9IjQxLjA4OCIgY3k9IjQxLjAxMTMiIHI9IjIuNzIzNyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMS4zNjE4Ii8+CiAgICA8Y2lyY2xlIGN4PSI1MS40MjI4IiBjeT0iNDEuMDExMyIgcj0iMi43MjM3IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxLjM2MTgiLz4KICA8L2c+Cjwvc3ZnPg==", "chapters": ["math-algebra"], "provenance": "verified"}, {"id": "om-1F5FA", "type": "illustration", "subject": "geo", "title": "Weltkarte", "alt": "Karte", "caption": "Projektionen verzerren immer, die Frage ist wie.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-1F5FA/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-1F5FA.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiPgogICAgPHJlY3QgeD0iNSIgeT0iMTciIHdpZHRoPSI2MiIgaGVpZ2h0PSIzOCIgZmlsbD0iIzkyRDNGNSIgc3Ryb2tlPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8cGF0aCBmaWxsPSIjQjFDQzMzIiBzdHJva2U9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0yOC41LDMwLjVjLTAuMDQxNywwLjU4MzMtMS42NjcsMi41ODU4LTIuMDgzMywyLjg3NWMtMC44NjgyLDAuNjAzLTEuMjA3MSwwLjMyNjYtMS45NjM1LDAuOTIxOSBjLTAuNDc5NCwwLjM3NzMtMS4wNzg1LDAuNzgwNy0xLjgxMjUsMC45MjE5QzIyLjIzNDQsMzUuMjk2OSwyMi40MTQxLDM0LjkxMywyMS41LDM1LjVjLTAuNTA5MiwwLjMyNy0wLjA1NzEsMC42Nzg5LDAsMSBjMC4wNzY4LDAuNDMxNywwLjEzNDIsMC4xNzE1LDEsMWMwLjQ1MiwwLjQzMjYsMC40OTI0LDAuODE4MSwxLDFjMC4zMTczLDAuMTEzNywwLjU0NzksMC4wNTE0LDEsMCBjMC45NDc5LTAuMTA3NywwLjUyNjQsMC44MjY2LDEsMWMxLjA4OTIsMC4zOTg3LDAuOTk2NSwxLjgzMjMsMiwyYzAuNDA1MywwLjA2NzcsMC41NTA4LTAuMTQ0MywxLDAgYzAuNDExMiwwLjEzMjIsMC44ODMxLDAuNTAwOCwxLDFjMC4xNTM5LDAuNjU3NS0wLjM3MTgsMS4yNjkyLTEsMmMtMC41MDgxLDAuNTkxMS0wLjYwMjQsMC41LTEsMWMtMC41MzEyLDAuNjY4LTAuMzg5LDAuODYzNi0xLDIgYy0wLjYxODQsMS4xNTAyLTAuOTU4NCwxLjMxMTMtMSwyYy0wLjAxNzQsMC4yODgtMC4wMDA4LDAuOTY5MSwwLDFjMC4wMTc1LDAuNjk0OSwwLjA1NjIsMC43ODY3LDAsMSBjLTAuMTMwNywwLjQ5Ny0xLjE0LDAuOTMyMy0xLjUyMDgsMC44NzVjLTAuNzQ5Ni0wLjExMjctMC43MzYxLTIuNzAzLTAuNzcwOC0zLjEwNDJDMjMuMTM4LDQ4LjQ2MDcsMjMuNDcsNDguMDA3OCwyMy41LDQ3LjUgYzAuMTAzNy0xLjc1NjgsMC4zOTctMi4zMDE2LDAtM2MtMC4yNTMzLTAuNDQ1Ni0wLjM4NzEtMC4yNDkzLTEtMWMtMC4zNDYxLTAuNDIzOS0wLjg3MDQtMS4wODE2LTEtMiBjLTAuMDgxNy0wLjU3ODUsMC4wODktMC41ODIsMC0xYy0wLjE2NTItMC43NzU0LTAuODA4NS0xLjAyNTctMi0yYy0wLjczNTEtMC42MDExLTEuMzg3MS0xLjEzNDItMi0yIGMtMC4zMTg1LTAuNDQ5OS0wLjc2OTItMS4wODY1LTEtMmMtMC4zMDM4LTEuMjAyNCwwLjE0ODctMS4zOTg2LDAtM2MtMC4wMzM1LTAuMzYwNy0wLjE3OTUtMS42NzYtMS0zIGMtMC4zNDgzLTAuNTYyMS0wLjU5MzctMC45NDU3LTEtMWMtMC43NzQ1LTAuMTAzNS0xLjE5MDEsMS4xMTUyLTIsMWMtMC40ODQtMC4wNjg5LTAuODU4MS0wLjU3ODUtMS0xIGMtMC4wMzc5LTAuMTEyNi0wLjE3NjMtMC41NDM3LDAtMWMwLjA5NzctMC4yNTI5LDAuMzk4NS0wLjUwMTksMS0xYzAuNjEzOC0wLjUwODMsMC45MjIzLTAuNzY3MiwxLTEgYzAuMTQ2My0wLjQzODYtMC4xMTc0LTAuNTk1LDAtMWMwLjIwMDgtMC42OTMsMS4yNjQ5LTEuMjQzNiwyLTFjMC40MjIzLDAuMTM5OSwwLjMzMTIsMC40MDc4LDEsMWMwLjMyNDcsMC4yODc1LDEuMDI2NCwwLjgyNjYsMiwxIGMwLjQ5MTcsMC4wODc2LDAuNzM3NSwwLjEzMTMsMSwwYzAuNjQ2Ny0wLjMyMzYsMC4zMzc1LTEuMTgwOCwxLTJjMC42MDk0LTAuNzUzNSwxLjU5OTUtMC45MjksMi0xIGMwLjk5MDEtMC4xNzU1LDEuMTI1NCwwLjIwMDYsMiwwYzAuOTM5OS0wLjIxNTYsMC45MTI4LTAuNjc5NiwyLTFjMC40NzYxLTAuMTQwMywxLjMxNDktMC4zODc2LDIsMCBjMC42MTY4LDAuMzQ4OSwwLjUzNSwwLjg4NzgsMSwxYzAuNjQ5LDAuMTU2NywwLjk2Ny0wLjg1NSwyLTFjMC43ODg3LTAuMTEwNywxLjcyNjksMC4zMjEyLDIsMWMwLjEzNTYsMC4zMzY5LDAuMDcyMSwwLjY0NzMsMCwxIGMtMC4yMTc3LDEuMDY1My0wLjc5NTUsMS4xMjk4LTEsMmMtMC4yMjIzLDAuOTQ1NiwwLjI1MzksMS4xNzQ5LDAsMmMtMC4xNjY3LDAuNTQxNy0wLjUsMC4zNzUtMS4wMzEyLDAuODEyNSBDMzEuMjI1NiwyNy41MTI3LDMxLjE2NjcsMjcuODMzMywzMC41LDI4LjVjLTAuMzMzMywwLjMzMzMtMC42Nzk0LDAuNjU0NC0xLDFDMjguNzY5MywzMC4yODc2LDI4LjY1MjcsMzAuMzQ3MywyOC41LDMwLjUiLz4KICAgIDxwYXRoIGZpbGw9IiNCMUNDMzMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTM0LjUsMzUuNWMtMC4yMzI3LTAuMjk2NS0xLjIyODItMS44MjYtMS0yYzAuMjgxOS0wLjIxNDksMC43ODA5LDAuMjA3NiwxLDBjMC4xODE2LTAuMTcyMS0wLjExNjYtMC41MDQzLDAtMSBjMC4xMTI0LTAuNDc4MSwwLjU1NjQtMC44Nzc1LDEtMWMwLjUyOC0wLjE0NTgsMC44OTcsMC4xNDQ3LDEsMGMwLjE5ODItMC4yNzg2LTEuMjM3NS0xLjI2MjEtMS0yYzAuMTQ3My0wLjQ1NzcsMC44MDM1LTAuNDAxNywxLTEgYzAuMTMyMS0wLjQwMi0wLjEyNzEtMC41NDAxLDAtMWMwLjEyODUtMC40NjQ5LDAuNTM3My0wLjg0NDgsMS0xYzAuMTMxNS0wLjA0NDEsMC41NzE3LTAuMTkxOCwxLDAgYzAuNTQxOCwwLjI0MjYsMC40NTc1LDAuNzU3MSwxLDFjMC4zMDQ5LDAuMTM2NSwwLjY5NTEsMC4xMzY1LDEsMGMwLjU0MTQtMC4yNDI0LDAuNDgyOC0wLjc2NjksMS0xIGMwLjM0MjctMC4xNTQ0LDAuNTEzMSwwLjAxMDYsMSwwYzEuMTE3My0wLjAyNDMsMS45MzkyLTAuOTMxMSwyLTFjMC41MDM1LTAuNTcxLDAuMjQ4My0wLjc5OTUsMS0yIGMwLjQwMTQtMC42NDExLDAuNjY0Ni0wLjg3OTksMS0xYzAuMDk1My0wLjAzNDEsMC41NTU3LTAuMTk4OSwxLDBjMC41MzkzLDAuMjQxNSwwLjQ4NDksMC43NjM3LDEsMSBjMC4yNjY4LDAuMTIyNCwwLjQ0MDQsMC4wNTUzLDEsMGMwLjA3MTItMC4wMDcsMC43MTQxLTAuMDA0NywyLDBjMS45MDUzLDAuMDA2OSwxLjgyMDQsMC4wNDM5LDIsMGMxLjAxMDgtMC4yNDcsMC45OTEzLTAuNzUzNSwyLTEgYzAuNjk3Ni0wLjE3MDUsMC42ODI3LDAuMDc3MiwyLDBjMS4xOTc4LTAuMDcwMiwxLjc3NDctMC4zMDgxLDIsMGMwLjA4NTksMC4xMTc1LDAuMDIxLDAuMTc4MSwwLDEgYy0wLjAwODUsMC4zMzQ4LDAuMjcwOCwwLjY1MDIsMC4yNzYsMS4wNDE3YzAuMDExNSwwLjg5MTcsMC4wNDMxLDAuODM1Mi0wLjAwNTEsMC45NTgzIGMtMC4yMDc1LDAuNTI5Mi0wLjM2MTYsMC42NTg4LTAuNjA0MiwxLjE4NzVjLTAuMDkwNSwwLjE5NzItMC4xMTkzLDAuMjc0MS0wLjA4MzMsMS4wMjA4IGMwLjA1MjksMS4wOTcsMC4zNTU3LDAuODQ3NiwwLjQxNjcsMS43OTE3YzAuMDQ3NSwwLjczODIsMC4xMjUxLDAuODg2NSwwLDFjLTAuMzM2MywwLjMwNTItMi4xNzMyLTAuMjYzNy0yLjU4MzMtMS4xMjUgYy0wLjQzMTEtMC45MDUxLTAuMTIyMS0xLjY3MjktMC40MTY3LTEuODc1Yy0wLjQwNDUtMC4yNzc1LTIuMjMzMiwxLjEyNTgtMi41LDIuMDE1NmMtMC4wNTI4LDAuMTc2MS0wLjI4NDIsMC40NTI2LDAuNTc4MSwxLjIzNDQgYzAuODcxNiwwLjc5MDIsMS4yNDg1LDEuMDg0MywxLjMyODEsMS4xNTYyYzAuNDg0NCwwLjQzNzUsMS4wMDgxLDEuMDI4LDAuNTkzOCwxLjU5MzhjLTAuNTU2OCwwLjc1OTktMS42MTU2LDAuMzE2LTIsMSBjLTAuMzQ0NywwLjYxMzIsMC4zODU3LDEuMTg0NywwLDJjLTAuMTExMiwwLjIzNS0wLjQwNzUsMC40OS0xLDFjLTAuNjU5NCwwLjU2NzUtMC45MDQ2LDAuNjUwOS0xLDEgYy0wLjEyNzcsMC40NjczLDAuMTg0NywwLjc4MjksMCwxYy0wLjIzNjksMC4yNzg2LTAuOTY2NywwLjAxMjUtMSwwYy0xLjI4OTktMC40ODM2LTEuMzQyLTEuOTcwMi0yLTIgYy0wLjc4ODktMC4wMzU3LTEuMjIxNiwyLjA3ODEtMiwyYy0wLjE3NDgtMC4wMTc1LTAuNDQ5OC0wLjM0NS0xLTFjLTAuNTI5Mi0wLjYzMDEtMC42NDE4LTAuODYxNi0xLTEgYy0wLjQ1ODEtMC4xNzcxLTAuODkxMy0wLjAzNjktMSwwYy0wLjE4MDUsMC4wNjEzLTAuNTAzMiwwLjIyMTYtMSwxYy0wLjcwNzEsMS4xMDc5LTAuNDM4NCwxLjM5NTQtMSwyIGMtMC40NzYyLDAuNTEyNy0wLjg1OCwwLjUwOS0xLDFjLTAuMDMwMiwwLjEwNDMtMC4wMjAxLDAuNDAyOCwwLDFjMC4wMjA3LDAuNjEzOSwwLjAzMDQsMC45MjI1LDAsMSBjLTAuMjA4NCwwLjUzMTQtMC43NjIsMC40NzA3LTEsMWMtMC4xNjM1LDAuMzYzNSwwLjAyNjEsMC41NTEzLDAsMWMtMC4wNjAyLDEuMDM0LTEuMTg5OCwyLjE0OC0yLDIgYy0wLjMyMi0wLjA1ODgtMC41NDgtMC4zNzI2LTEtMWMtMC40LTAuNTU1Mi0wLjgyODUtMS4xNS0xLTJjLTAuMTg0Ni0wLjkxNDksMC4xNTM1LTEuMDEwMywwLTJjLTAuMDc3OC0wLjUwMTktMC4yNTMyLTEuNjMyMS0xLTIgYy0wLjcxNjYtMC4zNTMtMS4yNDU0LDAuMzQ3Ni0yLDBjLTAuNzAyNS0wLjMyMzYtMS4wMjMxLTEuMjg5NC0xLTJjMC4wMjQ3LTAuNzU5MiwwLjQ0MzktMS4yOTI2LDEtMiBDMzMuOTM1NywzNS45NDU3LDM0LjE1MzYsMzUuNjY4NSwzNC41LDM1LjUiLz4KICAgIDxwYXRoIGZpbGw9IiNCMUNDMzMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTU0LjUsNDQuNWMtMS4xODAxLDAuNTc5My0xLjc0NDEsMC40NTI5LTIsMWMtMC4xOTg1LDAuNDI0NS0wLjAzOTQsMC44ODU5LDAsMWMwLjI0MjksMC43MDM5LDAuOTI1LDAuOTcxOSwxLDEgYzAuODYzOCwwLjMyMzUsMS4zMzg5LTAuMzU0NSwyLDBjMC41MDQ0LDAuMjcwNSwwLjQyNTYsMC43NzEzLDEsMWMwLjMxNjIsMC4xMjU5LDAuNTk2OSwwLjA3NjQsMSwwIGMwLjY5MjctMC4xMzEzLDEuNTgyNi0wLjMwMDEsMi0xYzAuMjk5MS0wLjUwMTQsMC4xOTc1LTEuMDEwNCwwLTJjLTAuMTUzMy0wLjc2ODItMC4zNTQ5LTEuNzc4MS0xLTIgYy0wLjEyNTctMC4wNDMyLTAuMTM3OC0wLjAxMTctMSwwYy0wLjczMTMsMC4wMDk5LTAuODA2My0wLjAxMTctMSwwQzU1LjczNDksNDMuNTQ2Miw1NS41OTU2LDQzLjk2MjIsNTQuNSw0NC41eiIvPgogIDwvZz4KICA8ZyBpZD0iaGFpciIvPgogIDxnIGlkPSJza2luIi8+CiAgPGcgaWQ9InNraW4tc2hhZG93Ii8+CiAgPGcgaWQ9ImxpbmUiPgogICAgPHJlY3QgeD0iNSIgeT0iMTciIHdpZHRoPSI2MiIgaGVpZ2h0PSIzOCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0yOC41LDMwLjVjLTAuMDQxNywwLjU4MzMtMS42NjcsMi41ODU4LTIuMDgzMywyLjg3NWMtMC44NjgyLDAuNjAzLTEuMjA3MSwwLjMyNjYtMS45NjM1LDAuOTIxOSBjLTAuNDc5NCwwLjM3NzMtMS4wNzg1LDAuNzgwNy0xLjgxMjUsMC45MjE5QzIyLjIzNDQsMzUuMjk2OSwyMi40MTQxLDM0LjkxMywyMS41LDM1LjVjLTAuNTA5MiwwLjMyNy0wLjA1NzEsMC42Nzg5LDAsMSBjMC4wNzY4LDAuNDMxNywwLjEzNDIsMC4xNzE1LDEsMWMwLjQ1MiwwLjQzMjYsMC40OTI0LDAuODE4MSwxLDFjMC4zMTczLDAuMTEzNywwLjU0NzksMC4wNTE0LDEsMCBjMC45NDc5LTAuMTA3NywwLjUyNjQsMC44MjY2LDEsMWMxLjA4OTIsMC4zOTg3LDAuOTk2NSwxLjgzMjMsMiwyYzAuNDA1MywwLjA2NzcsMC41NTA4LTAuMTQ0MywxLDAgYzAuNDExMiwwLjEzMjIsMC44ODMxLDAuNTAwOCwxLDFjMC4xNTM5LDAuNjU3NS0wLjM3MTgsMS4yNjkyLTEsMmMtMC41MDgxLDAuNTkxMS0wLjYwMjQsMC41LTEsMWMtMC41MzEyLDAuNjY4LTAuMzg5LDAuODYzNi0xLDIgYy0wLjYxODQsMS4xNTAyLTAuOTU4NCwxLjMxMTMtMSwyYy0wLjAxNzQsMC4yODgtMC4wMDA4LDAuOTY5MSwwLDFjMC4wMTc1LDAuNjk0OSwwLjA1NjIsMC43ODY3LDAsMSBjLTAuMTMwNywwLjQ5Ny0xLjE0LDAuOTMyMy0xLjUyMDgsMC44NzVjLTAuNzQ5Ni0wLjExMjctMC43MzYxLTIuNzAzLTAuNzcwOC0zLjEwNDJDMjMuMTM4LDQ4LjQ2MDcsMjMuNDcsNDguMDA3OCwyMy41LDQ3LjUgYzAuMTAzNy0xLjc1NjgsMC4zOTctMi4zMDE2LDAtM2MtMC4yNTMzLTAuNDQ1Ni0wLjM4NzEtMC4yNDkzLTEtMWMtMC4zNDYxLTAuNDIzOS0wLjg3MDQtMS4wODE2LTEtMiBjLTAuMDgxNy0wLjU3ODUsMC4wODktMC41ODIsMC0xYy0wLjE2NTItMC43NzU0LTAuODA4NS0xLjAyNTctMi0yYy0wLjczNTEtMC42MDExLTEuMzg3MS0xLjEzNDItMi0yIGMtMC4zMTg1LTAuNDQ5OS0wLjc2OTItMS4wODY1LTEtMmMtMC4zMDM4LTEuMjAyNCwwLjE0ODctMS4zOTg2LDAtM2MtMC4wMzM1LTAuMzYwNy0wLjE3OTUtMS42NzYtMS0zIGMtMC4zNDgzLTAuNTYyMS0wLjU5MzctMC45NDU3LTEtMWMtMC43NzQ1LTAuMTAzNS0xLjE5MDEsMS4xMTUyLTIsMWMtMC40ODQtMC4wNjg5LTAuODU4MS0wLjU3ODUtMS0xIGMtMC4wMzc5LTAuMTEyNi0wLjE3NjMtMC41NDM3LDAtMWMwLjA5NzctMC4yNTI5LDAuMzk4NS0wLjUwMTksMS0xYzAuNjEzOC0wLjUwODMsMC45MjIzLTAuNzY3MiwxLTEgYzAuMTQ2My0wLjQzODYtMC4xMTc0LTAuNTk1LDAtMWMwLjIwMDgtMC42OTMsMS4yNjQ5LTEuMjQzNiwyLTFjMC40MjIzLDAuMTM5OSwwLjMzMTIsMC40MDc4LDEsMWMwLjMyNDcsMC4yODc1LDEuMDI2NCwwLjgyNjYsMiwxIGMwLjQ5MTcsMC4wODc2LDAuNzM3NSwwLjEzMTMsMSwwYzAuNjQ2Ny0wLjMyMzYsMC4zMzc1LTEuMTgwOCwxLTJjMC42MDk0LTAuNzUzNSwxLjU5OTUtMC45MjksMi0xIGMwLjk5MDEtMC4xNzU1LDEuMTI1NCwwLjIwMDYsMiwwYzAuOTM5OS0wLjIxNTYsMC45MTI4LTAuNjc5NiwyLTFjMC40NzYxLTAuMTQwMywxLjMxNDktMC4zODc2LDIsMCBjMC42MTY4LDAuMzQ4OSwwLjUzNSwwLjg4NzgsMSwxYzAuNjQ5LDAuMTU2NywwLjk2Ny0wLjg1NSwyLTFjMC43ODg3LTAuMTEwNywxLjcyNjksMC4zMjEyLDIsMWMwLjEzNTYsMC4zMzY5LDAuMDcyMSwwLjY0NzMsMCwxIGMtMC4yMTc3LDEuMDY1My0wLjc5NTUsMS4xMjk4LTEsMmMtMC4yMjIzLDAuOTQ1NiwwLjI1MzksMS4xNzQ5LDAsMmMtMC4xNjY3LDAuNTQxNy0wLjUsMC4zNzUtMS4wMzEyLDAuODEyNSBDMzEuMjI1NiwyNy41MTI3LDMxLjE2NjcsMjcuODMzMywzMC41LDI4LjVjLTAuMzMzMywwLjMzMzMtMC42Nzk0LDAuNjU0NC0xLDFDMjguNzY5MywzMC4yODc2LDI4LjY1MjcsMzAuMzQ3MywyOC41LDMwLjUiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTM0LjUsMzUuNWMtMC4yMzI3LTAuMjk2NS0xLjIyODItMS44MjYtMS0yYzAuMjgxOS0wLjIxNDksMC43ODA5LDAuMjA3NiwxLDBjMC4xODE2LTAuMTcyMS0wLjExNjYtMC41MDQzLDAtMSBjMC4xMTI0LTAuNDc4MSwwLjU1NjQtMC44Nzc1LDEtMWMwLjUyOC0wLjE0NTgsMC44OTcsMC4xNDQ3LDEsMGMwLjE5ODItMC4yNzg2LTEuMjM3NS0xLjI2MjEtMS0yYzAuMTQ3My0wLjQ1NzcsMC44MDM1LTAuNDAxNywxLTEgYzAuMTMyMS0wLjQwMi0wLjEyNzEtMC41NDAxLDAtMWMwLjEyODUtMC40NjQ5LDAuNTM3My0wLjg0NDgsMS0xYzAuMTMxNS0wLjA0NDEsMC41NzE3LTAuMTkxOCwxLDAgYzAuNTQxOCwwLjI0MjYsMC40NTc1LDAuNzU3MSwxLDFjMC4zMDQ5LDAuMTM2NSwwLjY5NTEsMC4xMzY1LDEsMGMwLjU0MTQtMC4yNDI0LDAuNDgyOC0wLjc2NjksMS0xIGMwLjM0MjctMC4xNTQ0LDAuNTEzMSwwLjAxMDYsMSwwYzEuMTE3My0wLjAyNDMsMS45MzkyLTAuOTMxMSwyLTFjMC41MDM1LTAuNTcxLDAuMjQ4My0wLjc5OTUsMS0yIGMwLjQwMTQtMC42NDExLDAuNjY0Ni0wLjg3OTksMS0xYzAuMDk1My0wLjAzNDEsMC41NTU3LTAuMTk4OSwxLDBjMC41MzkzLDAuMjQxNSwwLjQ4NDksMC43NjM3LDEsMSBjMC4yNjY4LDAuMTIyNCwwLjQ0MDQsMC4wNTUzLDEsMGMwLjA3MTItMC4wMDcsMC43MTQxLTAuMDA0NywyLDBjMS45MDUzLDAuMDA2OSwxLjgyMDQsMC4wNDM5LDIsMGMxLjAxMDgtMC4yNDcsMC45OTEzLTAuNzUzNSwyLTEgYzAuNjk3Ni0wLjE3MDUsMC42ODI3LDAuMDc3MiwyLDBjMS4xOTc4LTAuMDcwMiwxLjc3NDctMC4zMDgxLDIsMGMwLjA4NTksMC4xMTc1LDAuMDIxLDAuMTc4MSwwLDEgYy0wLjAwODUsMC4zMzQ4LDAuMjcwOCwwLjY1MDIsMC4yNzYsMS4wNDE3YzAuMDExNSwwLjg5MTcsMC4wNDMxLDAuODM1Mi0wLjAwNTEsMC45NTgzIGMtMC4yMDc1LDAuNTI5Mi0wLjM2MTYsMC42NTg4LTAuNjA0MiwxLjE4NzVjLTAuMDkwNSwwLjE5NzItMC4xMTkzLDAuMjc0MS0wLjA4MzMsMS4wMjA4IGMwLjA1MjksMS4wOTcsMC4zNTU3LDAuODQ3NiwwLjQxNjcsMS43OTE3YzAuMDQ3NSwwLjczODIsMC4xMjUxLDAuODg2NSwwLDFjLTAuMzM2MywwLjMwNTItMi4xNzMyLTAuMjYzNy0yLjU4MzMtMS4xMjUgYy0wLjQzMTEtMC45MDUxLTAuMTIyMS0xLjY3MjktMC40MTY3LTEuODc1Yy0wLjQwNDUtMC4yNzc1LTIuMjMzMiwxLjEyNTgtMi41LDIuMDE1NmMtMC4wNTI4LDAuMTc2MS0wLjI4NDIsMC40NTI2LDAuNTc4MSwxLjIzNDQgYzAuODcxNiwwLjc5MDIsMS4yNDg1LDEuMDg0MywxLjMyODEsMS4xNTYyYzAuNDg0NCwwLjQzNzUsMS4wMDgxLDEuMDI4LDAuNTkzOCwxLjU5MzhjLTAuNTU2OCwwLjc1OTktMS42MTU2LDAuMzE2LTIsMSBjLTAuMzQ0NywwLjYxMzIsMC4zODU3LDEuMTg0NywwLDJjLTAuMTExMiwwLjIzNS0wLjQwNzUsMC40OS0xLDFjLTAuNjU5NCwwLjU2NzUtMC45MDQ2LDAuNjUwOS0xLDEgYy0wLjEyNzcsMC40NjczLDAuMTg0NywwLjc4MjksMCwxYy0wLjIzNjksMC4yNzg2LTAuOTY2NywwLjAxMjUtMSwwYy0xLjI4OTktMC40ODM2LTEuMzQyLTEuOTcwMi0yLTIgYy0wLjc4ODktMC4wMzU3LTEuMjIxNiwyLjA3ODEtMiwyYy0wLjE3NDgtMC4wMTc1LTAuNDQ5OC0wLjM0NS0xLTFjLTAuNTI5Mi0wLjYzMDEtMC42NDE4LTAuODYxNi0xLTEgYy0wLjQ1ODEtMC4xNzcxLTAuODkxMy0wLjAzNjktMSwwYy0wLjE4MDUsMC4wNjEzLTAuNTAzMiwwLjIyMTYtMSwxYy0wLjcwNzEsMS4xMDc5LTAuNDM4NCwxLjM5NTQtMSwyIGMtMC40NzYyLDAuNTEyNy0wLjg1OCwwLjUwOS0xLDFjLTAuMDMwMiwwLjEwNDMtMC4wMjAxLDAuNDAyOCwwLDFjMC4wMjA3LDAuNjEzOSwwLjAzMDQsMC45MjI1LDAsMSBjLTAuMjA4NCwwLjUzMTQtMC43NjIsMC40NzA3LTEsMWMtMC4xNjM1LDAuMzYzNSwwLjAyNjEsMC41NTEzLDAsMWMtMC4wNjAyLDEuMDM0LTEuMTg5OCwyLjE0OC0yLDIgYy0wLjMyMi0wLjA1ODgtMC41NDgtMC4zNzI2LTEtMWMtMC40LTAuNTU1Mi0wLjgyODUtMS4xNS0xLTJjLTAuMTg0Ni0wLjkxNDksMC4xNTM1LTEuMDEwMywwLTJjLTAuMDc3OC0wLjUwMTktMC4yNTMyLTEuNjMyMS0xLTIgYy0wLjcxNjYtMC4zNTMtMS4yNDU0LDAuMzQ3Ni0yLDBjLTAuNzAyNS0wLjMyMzYtMS4wMjMxLTEuMjg5NC0xLTJjMC4wMjQ3LTAuNzU5MiwwLjQ0MzktMS4yOTI2LDEtMiBDMzMuOTM1NywzNS45NDU3LDM0LjE1MzYsMzUuNjY4NSwzNC41LDM1LjUiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTU0LjUsNDQuNWMtMS4xODAxLDAuNTc5My0xLjc0NDEsMC40NTI5LTIsMWMtMC4xOTg1LDAuNDI0NS0wLjAzOTQsMC44ODU5LDAsMWMwLjI0MjksMC43MDM5LDAuOTI1LDAuOTcxOSwxLDEgYzAuODYzOCwwLjMyMzUsMS4zMzg5LTAuMzU0NSwyLDBjMC41MDQ0LDAuMjcwNSwwLjQyNTYsMC43NzEzLDEsMWMwLjMxNjIsMC4xMjU5LDAuNTk2OSwwLjA3NjQsMSwwIGMwLjY5MjctMC4xMzEzLDEuNTgyNi0wLjMwMDEsMi0xYzAuMjk5MS0wLjUwMTQsMC4xOTc1LTEuMDEwNCwwLTJjLTAuMTUzMy0wLjc2ODItMC4zNTQ5LTEuNzc4MS0xLTIgYy0wLjEyNTctMC4wNDMyLTAuMTM3OC0wLjAxMTctMSwwYy0wLjczMTMsMC4wMDk5LTAuODA2My0wLjAxMTctMSwwQzU1LjczNDksNDMuNTQ2Miw1NS41OTU2LDQzLjk2MjIsNTQuNSw0NC41eiIvPgogIDwvZz4KPC9zdmc+", "chapters": ["geo-spatial-transport"], "provenance": "verified"}, {"id": "om-1F30B", "type": "illustration", "subject": "geo", "title": "Vulkan", "alt": "Ausbrechender Vulkan", "caption": "Vulkanismus folgt den Plattengrenzen.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-1F30B/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-1F30B.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxnIGlkPSJjb2xvciI+CiAgICA8cGF0aCBmaWxsPSIjRDBDRkNFIiBzdHJva2U9IiNEMENGQ0UiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjEuOCIgZD0iTTI4LjgsOS4xYy0wLjQtMC43LDEuNi00LjIsNC42LTQuNGMzLTAuMyw1LjIsMS41LDQuNCwzLjZzLTIuMSwyLjItMi44LDIuM2wzLjIsMS43Yy0wLjgsMi4xLTcuOCwyLjctNi41LDUuNmwtNCwwLjQgYzAuMS0xLjUsMC0zLjctMS41LTQuOWMtMS4xLTAuOS0yLjgtMS4xLTQuMi0xLjZjLTItMC43LTItMi43LTEuNC00QzIxLjMsNi40LDIyLjQsNSwyNCw1YzEsMCwyLDAsMywxTDI4LjgsOS4xeiIvPgogICAgPHBvbHlnb24gZmlsbD0iIzlCOUI5QSIgcG9pbnRzPSI2Myw1NyA1Ni40LDQ5LjEgNTMsNDAgNDUsMzQgNDAsMzQgMzYsMjIgNDAsMzQgMzYsMjIgMzIsMjQgMjQuMiwyMi4xIDE5LDM0IDE3LDQ2IDksNTciLz4KICAgIDxwYXRoIGZpbGw9IiNFQTVBNDciIGQ9Ik0zMy43LDIyLjNjMS40LDAuNCwwLjgsMi4xLDEuNSw0LjRjMC40LDEuNCwwLjMsMS44LDAuMywyYy0wLjUsMS4zLTEuMiwxLjItMS43LDIuNCBjLTAuNCwxLjEsMC43LDEuNiwwLjQsM3MtMS43LDIuNy0yLjcsMi40Yy0wLjgtMC4yLTEuMS0xLjMtMS4zLTEuOGMtMC41LTEuOCwwLjItMy41LDAuNC00LjFjMC44LTEuOCwxLjctMi4yLDEuNS0zLjMgYy0wLjEtMS0xLTEuNi0xLjMtMS44Yy0wLjgtMC42LTIuMS0xLTMuMS0wLjZjLTEuOSwwLjgtMi40LDQuNi0yLDcuNGMwLjQsMi4yLDIuOCw3LDIuMiw4LjdjLTAuMiwwLjctMi0zLjEtMy4yLTEuNSBjLTEuMSwxLjQsMC40LDUuMy0xLjgsNi42Yy0xLjMsMC43LTEuNy0zLjktMS44LTMuOWMtMC4zLDAtMSwxLjUtMC4zLTIuMWMwLjQtMi40LDEuNy0xLjQsMi4xLTRjMC4yLTEuNSwwLjEtNC0wLjEtNiBjLTAuMy0zLTEuNC0yLjctMS4xLTUuMWMwLjEtMC44LDAuOC0xLjUsMi0yLjFjMC41LTAuMiwwLjItMS45LDIuNC0xLjhjMy42LDAuMiw0LjEsMS40LDUuMiwxLjNDMzIuNywyMi4zLDMzLDIyLjEsMzMuNywyMi4zeiIvPgogIDwvZz4KICA8ZyBpZD0iaGFpciIvPgogIDxnIGlkPSJza2luIi8+CiAgPGcgaWQ9InNraW4tc2hhZG93Ii8+CiAgPGcgaWQ9ImxpbmUiPgogICAgPHBvbHlsaW5lIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgcG9pbnRzPSI2Myw1NiA1Ni40LDQ5LjEgNTMsNDAiLz4KICAgIDxwb2x5bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIHBvaW50cz0iMjQsMjIgMTksMzQgMTcsNDYgOSw1NiIvPgogICAgPHBvbHlsaW5lIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgcG9pbnRzPSI0MCwzNCAzNiwyMiAzNC40LDIyLjgiLz4KICAgIDxwb2x5bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIHBvaW50cz0iNDAsMzQgNDUsMzQgNTMsNDAgNTIsNDYgNTMsNTEgNTEsNTMgNDgsNTYiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMS44IiBkPSJNMzMuNywyMi4zYzEuNCwwLjQsMC44LDIuMSwxLjUsNC40YzAuNCwxLjQsMC4zLDEuOCwwLjMsMmMtMC41LDEuMy0xLjIsMS4yLTEuNywyLjRjLTAuNCwxLjEsMC43LDEuNiwwLjQsM3MtMS43LDIuNy0yLjcsMi40IGMtMC44LTAuMi0xLjEtMS4zLTEuMy0xLjhjLTAuNS0xLjgsMC4yLTMuNSwwLjQtNC4xYzAuOC0xLjgsMS43LTIuMiwxLjUtMy4zYy0wLjEtMS0xLTEuNi0xLjMtMS44Yy0wLjgtMC42LTIuMS0xLTMuMS0wLjYgYy0xLjksMC44LTIuNCw0LjYtMiw3LjRjMC40LDIuMiwyLjgsNywyLjIsOC43Yy0wLjIsMC43LTItMy4xLTMuMi0xLjVjLTEuMSwxLjQsMC40LDUuMy0xLjgsNi42Yy0xLjMsMC43LTEuNy0zLjktMS44LTMuOSBjLTAuMywwLTEsMS41LTAuMy0yLjFjMC40LTIuNCwxLjctMS40LDIuMS00YzAuMi0xLjUsMC4xLTQtMC4xLTZjLTAuMy0zLTEuNC0yLjctMS4xLTUuMWMwLjEtMC44LDAuOC0xLjUsMi0yLjEgYzAuNS0wLjIsMC4yLTEuOSwyLjQtMS44YzMuNiwwLjIsNC4xLDEuNCw1LjIsMS4zQzMyLjcsMjIuMywzMywyMi4xLDMzLjcsMjIuM3oiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTI0LjIsMTYuM2MtMC40LTEuNi0zLjMtMi40LTYuNS0xLjciLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTM1LDE4LjljMi43LTEuOSw2LjctMC45LDguOSwyLjMiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTIyLjgsMTkuOWMtMS41LTEuNi04LjUtNC4xLTkuOCw0LjIiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTI3LDZjLTEtMS0yLTEtMy0xYy0xLjYsMC0yLjcsMS40LTMuNCwyLjdDMjAsOSwyMCwxMSwyMiwxMS43YzEuMywwLjUsMy4xLDAuNyw0LjIsMS42YzEuNSwxLjIsMS41LDMuNCwxLjUsNC45Ii8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0zNC45LDEwLjVjMC43LTAuMSwyLTAuMiwyLjgtMi4zcy0xLjQtMy45LTQuNC0zLjZzLTUsMy44LTQuNiw0LjQiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTMxLjYsMTcuOWMtMS4zLTIuOSw1LjctMy41LDYuNS01LjYiLz4KICA8L2c+Cjwvc3ZnPg==", "chapters": ["geo-plate-tectonics"], "provenance": "verified"}, {"id": "om-26F0", "type": "illustration", "subject": "geo", "title": "Berg", "alt": "Gebirgsgipfel", "caption": "Relief steuert Niederschlag und Besiedlung.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-26F0/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-26F0.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxnIGlkPSJjb2xvciI+CiAgICA8cGF0aCBmaWxsPSIjM0YzRjNGIiBkPSJNNTIsNDIuMmMwLDAtMC4yLTYuMi0wLjMtNi44cy0wLjctMS42LTEtMi4xTDQ4LjIsMjlMNDIsMjQuNWwtNy4yLDUuNGwyLjYsNC41bDQuOS0wLjRsMTAuMiwxMy4zTDUyLDQyLjJ6Ii8+CiAgICA8cG9seWxpbmUgZmlsbD0iIzlCOUI5QSIgcG9pbnRzPSI1MCwzOSA1My40LDQ4LjEgNjAsNTYgMTIsNTYgMTYsNDkgMTgsMzcgMjUsMTggMjksMjIgMzMsMjUgMzcsMzMgNDIsMzMgNTAsMzkiLz4KICA8L2c+CiAgPGcgaWQ9ImhhaXIiLz4KICA8ZyBpZD0ic2tpbiIvPgogIDxnIGlkPSJza2luLXNoYWRvdyIvPgogIDxnIGlkPSJsaW5lIj4KICAgIDxwb2x5bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIHBvaW50cz0iNjAsNTUgNTMuNCw0OC4xIDUwLDM5Ii8+CiAgICA8cG9seWxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBwb2ludHM9IjM3LDMzIDMzLDI1IDI5LDIyIDI1LDE4IDE4LDM3IDE2LDQ5IDEyLDU1Ii8+CiAgICA8cG9seWxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBwb2ludHM9IjMxLDI0IDMyLDMzIDQyLDMzIDUwLDM5IDQ5LDQ1IDUwLDUwIDQ4LDUyIDQ1LDU1Ii8+CiAgICA8cG9seWxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBwb2ludHM9IjM5LDI4IDQzLDI1IDQ3LDI5IDUwLDM0Ii8+CiAgPC9nPgo8L3N2Zz4=", "chapters": ["geo-usa-physical", "math-curve-optimisation"], "provenance": "verified"}, {"id": "om-1F32A", "type": "illustration", "subject": "geo", "title": "Tornado", "alt": "Wirbelsturm", "caption": "Tornado Alley entsteht durch aufeinandertreffende Luftmassen.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-1F32A/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-1F32A.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZDBjZmNlIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSI0IiBkPSJNMzYsMTUuNTQzMmMtMTcuNjczMSwwLTMyLTEuNTg4MS0zMi0zLjU0NzEiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2QwY2ZjZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iNCIgZD0iTTQsMTIuMDA2N2MwLTEuOTU5LDE0LjMyNjktMy41NDcxLDMyLTMuNTQ3MXMzMiwxLjU4ODEsMzIsMy41NDcxdi0wLjAxMDYiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2QwY2ZjZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTY2LDE3LjAyMzJjMCwxLjgzNjYtMTMuNDMxNSwzLjMyNTQtMzAsMy4zMjU0UzYsMTguODU5OCw2LDE3LjAyMzIiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2QwY2ZjZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTY0LDIyLjM5ODZjMCwxLjcxNDEtMTIuNTM2LDMuMTAzNy0yOCwzLjEwMzdTOCwyNC4xMTI3LDgsMjIuMzk4NiIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZDBjZmNlIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNNjIsMjcuNTAyM2MwLDEuNTkxNy0xMS42NDA2LDIuODgyLTI2LDIuODgycy0yNi0xLjI5MDMtMjYtMi44ODIiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2QwY2ZjZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTU4LDMzLjM2NDNjMCwxLjM0NjgtOS44NDk3LDIuNDM4Ni0yMiwyLjQzODZzLTIyLTEuMDkxOC0yMi0yLjQzODYiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2QwY2ZjZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTU0LDM4LjgwM2MwLDEuMTAxOS04LjA1ODksMS45OTUyLTE4LDEuOTk1MnMtMTgtMC44OTMzLTE4LTEuOTk1MiIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZDBjZmNlIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNNTAsNDMuNzk4MmMwLDAuODU3MS02LjI2OCwxLjU1MTktMTQsMS41NTE5cy0xNC0wLjY5NDgtMTQtMS41NTE5Ii8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNkMGNmY2UiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik00Niw0OC44NjAxYzAsMC42MTIyLTQuNDc3MiwxLjEwODUtMTAsMS4xMDg1cy0xMC0wLjQ5NjMtMTAtMS4xMDg1Ii8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNkMGNmY2UiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik00NCw1My40Njg1YzAsMC40ODk3LTMuNTgxNywwLjg4NjgtOCwwLjg4NjhzLTgtMC4zOTctOC0wLjg4NjgiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2QwY2ZjZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTQwLDU4LjM1NTNjMCwwLjI0NDktMS43OTA5LDAuNDQzNC00LDAuNDQzNHMtNC0wLjE5ODUtNC0wLjQ0MzQiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2QwY2ZjZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTM4LDYyLjc5ODdjMCwwLjEyMjQtMC44OTU0LDAuMjIxNy0yLDAuMjIxN3MtMi0wLjA5OTMtMi0wLjIyMTciLz4KICA8L2c+CiAgPGcgaWQ9ImhhaXIiLz4KICA8ZyBpZD0ic2tpbiIvPgogIDxnIGlkPSJza2luLXNoYWRvdyIvPgogIDxnIGlkPSJsaW5lIj4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTM2LDE1LjU0MzJjLTE3LjY3MzEsMC0zMi0xLjU4ODEtMzItMy41NDcxIi8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik00LDEyLjAwNjdjMC0xLjk1OSwxNC4zMjY5LTMuNTQ3MSwzMi0zLjU0NzFzMzIsMS41ODgxLDMyLDMuNTQ3MXYtMC4wMTA2Ii8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik02NiwxOC4wNjMyYzAsMS44MzY2LTEzLjQzMTUsMy4zMjU0LTMwLDMuMzI1NFM2LDE5Ljg5OTgsNiwxOC4wNjMyIi8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik02NCwyMy4zODg2YzAsMS43MTQxLTEyLjUzNiwzLjEwMzctMjgsMy4xMDM3UzgsMjUuMTAyNyw4LDIzLjM4ODYiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTYyLDI4LjQ5MjNjMCwxLjU5MTctMTEuNjQwNiwyLjg4Mi0yNiwyLjg4MnMtMjYtMS4yOTAzLTI2LTIuODgyIi8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik01OCwzNC4zNzQzYzAsMS4zNDY4LTkuODQ5NywyLjQzODYtMjIsMi40Mzg2cy0yMi0xLjA5MTgtMjItMi40Mzg2Ii8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik01NCwzOS44MTNjMCwxLjEwMTktOC4wNTg5LDEuOTk1Mi0xOCwxLjk5NTJzLTE4LTAuODkzMy0xOC0xLjk5NTIiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTUwLDQ0LjgwODJjMCwwLjg1NzEtNi4yNjgsMS41NTE5LTE0LDEuNTUxOXMtMTQtMC42OTQ4LTE0LTEuNTUxOSIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNNDYsNDkuODYwMWMwLDAuNjEyMi00LjQ3NzIsMS4xMDg1LTEwLDEuMTA4NXMtMTAtMC40OTYzLTEwLTEuMTA4NSIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNNDQsNTQuNDY4NWMwLDAuNDg5Ny0zLjU4MTcsMC44ODY4LTgsMC44ODY4cy04LTAuMzk3LTgtMC44ODY4Ii8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik00MCw1OS4zNTUzYzAsMC4yNDQ5LTEuNzkwOSwwLjQ0MzQtNCwwLjQ0MzRzLTQtMC4xOTg1LTQtMC40NDM0Ii8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0zOCw2My43OTg3YzAsMC4xMjI0LTAuODk1NCwwLjIyMTctMiwwLjIyMTdzLTItMC4wOTkzLTItMC4yMjE3Ii8+CiAgPC9nPgo8L3N2Zz4=", "chapters": ["geo-weather-climate"], "provenance": "verified"}, {"id": "om-1F3DC", "type": "illustration", "subject": "geo", "title": "Wüste", "alt": "Wüstenlandschaft", "caption": "Aridität entsteht durch absinkende Luftmassen.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-1F3DC/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-1F3DC.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiPgogICAgPHBhdGggZmlsbD0iI0YxQjMxQyIgc3Ryb2tlPSIjRjFCMzFDIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNNjUsMzljMCwwLTMsMC02LDFjLTAuODY0NSwwLjI4ODItMiwwLTIsMGMtOC40MTY3LDAtMTItMS41ODMzLTEyLTEuNTgzM3MtNS44MzMzLTMuNS03LjkxNjctNC40MTY3QzM1LDMzLjA4MzMsMzMsMjksMzMsMjkgYy0xLTMtMy4yNzk1LTUuOTg4Ni01LTZjLTQuMjA4LTAuMDI3OC02LjI1MzksNS44MzYtMTEsOWMtMywyLTMuMzkwNCwyLjgxNDEtNiw0Yy0yLjI3MjUsMS4wMzI4LTMuNDc0MSwyLjk4MDItNCw0IGMwLDAtMi45NzkyLDEuOTM3NS0zLjA2MjUsNS42ODc1QzMuODU0Miw0OS40Mzc1LDcsNTIsNyw1MnM1LDYuNzUsMTMuNzUsMy44NzVjOS4xODczLTMuMDE4NywxMC4yMDQyLTEuNDg0OCwxMy42NTA4LTAuNzY0NyBjNC42MDM2LDAuOTYxNywxNS43MjQyLTAuMjk3OCwxOS4xODI1LDEuMjIzQzU5Ljg5NDYsNTkuMTA4OCw2NC4zNjIxLDUzLjg3NzEsNjUsNTNjMS4xODc4LTEuNjMzMiwwLjc5MDEtNC4xMjE2LDEuODMzMy01LjU0MTcgQzY5LjgzMzMsNDMuMzc1LDY4Ljg3NSw0Mi4zNzUsNjUsMzl6Ii8+CiAgICA8cGF0aCBmaWxsPSIjNWM5ZTMxIiBzdHJva2U9IiM1YzllMzEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik00OCw0OVYyNmMwLTEuNjU2OS0xLjM0MzEtMy0zLTNsMCwwYy0xLjY1NjksMC0zLDEuMzQzMS0zLDN2MjNINDh6Ii8+CiAgICA8cGF0aCBmaWxsPSIjNUM5RTMxIiBzdHJva2U9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik00MSwzNWMtMS4xMDQ2LDAtMi0wLjg5NTQtMi0ydi0yYzAtMS4xMDQ2LTAuODk1NC0yLTItMmwwLDBjLTEuMTA0NiwwLTIsMC44OTU0LTIsMnYyYzAsMy4zMTM3LDIuNjg2Myw2LDYsNiIvPgogICAgPHBhdGggZmlsbD0iIzVDOUUzMSIgc3Ryb2tlPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNNDksMzljMS4xMDQ2LDAsMi0wLjg5NTQsMi0ydi01YzAtMS4xMDQ2LDAuODk1NC0yLDItMmwwLDBjMS4xMDQ2LDAsMiwwLjg5NTQsMiwydjVjMCwzLjMxMzctMi42ODYzLDYtNiw2Ii8+CiAgPC9nPgogIDxnIGlkPSJoYWlyIi8+CiAgPGcgaWQ9InNraW4iLz4KICA8ZyBpZD0ic2tpbi1zaGFkb3ciLz4KICA8ZyBpZD0ibGluZSI+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik00OCw0OVYyNmMwLTEuNjU2OS0xLjM0MzEtMy0zLTNsMCwwYy0xLjY1NjksMC0zLDEuMzQzMS0zLDN2MjMiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTQxLDM1Yy0xLjEwNDYsMC0yLTAuODk1NC0yLTJ2LTJjMC0xLjEwNDYtMC44OTU0LTItMi0ybDAsMGMtMS4xMDQ2LDAtMiwwLjg5NTQtMiwydjJjMCwzLjMxMzcsMi42ODYzLDYsNiw2Ii8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik00OSwzOWMxLjEwNDYsMCwyLTAuODk1NCwyLTJ2LTVjMC0xLjEwNDYsMC44OTU0LTIsMi0ybDAsMGMxLjEwNDYsMCwyLDAuODk1NCwyLDJ2NWMwLDMuMzEzNy0yLjY4NjMsNi02LDYiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTY1LDUzYy0xLDAtNS4xNzczLTAuODM1NS02LTFjLTUtMS05LjE1MDEtMS4xOTM3LTE1LDFjLTgsMy04Ljk0MjksMi4yNTkxLTEwLDJjLTIuMTU4NC0wLjUyOTEtNS4xOTc1LTMuODY5Ny05LTUgYy00LjcwNi0xLjM5ODktNi4xMDE2LTEuMTExLTktMWMtMS44NDc3LDAuMDcwOC01LjEyNjIsMC41MjI5LTksMyIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNNyw0MGMwLjUyNTktMS4wMTk4LDEuNzI3NS0yLjk2NzIsNC00YzIuNjA5Ni0xLjE4NTksMy0yLDYtNGM0Ljc0NjEtMy4xNjQsNi43OTItOS4wMjc4LDExLTljMS43MjA1LDAuMDExNCw0LDMsNSw2Ii8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik02NSwzOWMwLDAtMywwLTYsMWMtMC44NjQ1LDAuMjg4Mi0yLDAtMiwwIi8+CiAgPC9nPgo8L3N2Zz4=", "chapters": ["geo-climate-diagrams"], "provenance": "verified"}, {"id": "om-1F3DB", "type": "illustration", "subject": "hist", "title": "Antiker Tempel", "alt": "Säulenbau", "caption": "Antike Staatsformen prägen die Begriffe bis heute.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-1F3DB/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-1F3DB.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiPgogICAgPHJlY3QgeD0iMTguNTQiIHk9IjI2IiB3aWR0aD0iMzQuOTIiIGhlaWdodD0iMjUuOTUiIGZpbGw9IiM5YjliOWEiLz4KICAgIDxyZWN0IHg9IjEyIiB5PSI1NiIgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgogICAgPHJlY3QgeD0iMTQuMTMiIHk9IjIyIiB3aWR0aD0iNDMuNzQiIGhlaWdodD0iNCIgZmlsbD0iI2ZmZiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+CiAgICA8cmVjdCB4PSIxNS43MiIgeT0iNTIiIHdpZHRoPSI0MC41NSIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KICAgIDxyZWN0IHg9IjE4LjUiIHk9IjI2IiB3aWR0aD0iNCIgaGVpZ2h0PSIyNiIgZmlsbD0iI2ZmZiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+CiAgICA8cmVjdCB4PSIyNy4zNSIgeT0iMjYuMTUiIHdpZHRoPSI0IiBoZWlnaHQ9IjI2IiBmaWxsPSIjZmZmIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KICAgIDxyZWN0IHg9IjQ5LjUyIiB5PSIyNS45NSIgd2lkdGg9IjMuOTQxIiBoZWlnaHQ9IjI2IiBmaWxsPSIjZmZmIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KICAgIDxwb2x5Z29uIGZpbGw9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIHBvaW50cz0iMzYgMTIgMTkgMjEuNzUgNTMgMjEuNzUiLz4KICAgIDxyZWN0IHg9IjQwLjM1IiB5PSIyNi4xNSIgd2lkdGg9IjQiIGhlaWdodD0iMjYiIGZpbGw9IiNmZmYiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgogIDwvZz4KICA8ZyBpZD0iaGFpciIvPgogIDxnIGlkPSJza2luIi8+CiAgPGcgaWQ9InNraW4tc2hhZG93Ii8+CiAgPGcgaWQ9ImxpbmUiPgogICAgPHJlY3QgeD0iMTEuOTkiIHk9IjU1Ljg5IiB3aWR0aD0iNDguMDEiIGhlaWdodD0iMy45OTMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPHJlY3QgeD0iMTQuMTgiIHk9IjIxLjc2IiB3aWR0aD0iNDMuNjUiIGhlaWdodD0iMy45OTkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMi4wMDEiLz4KICAgIDxyZWN0IHg9IjE1LjI3IiB5PSI1MS43NiIgd2lkdGg9IjQxLjQ3IiBoZWlnaHQ9IjMuOTkzIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxyZWN0IHg9IjE4LjM1IiB5PSIyNS42MSIgd2lkdGg9IjQuMjk4IiBoZWlnaHQ9IjI2LjMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMS43MDIiLz4KICAgIDxyZWN0IHg9IjI3LjM1IiB5PSIyNS42MSIgd2lkdGg9IjQuMjk4IiBoZWlnaHQ9IjI2LjMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMS43MDIiLz4KICAgIDxyZWN0IHg9IjQ5LjM1IiB5PSIyNS42MSIgd2lkdGg9IjQuMjk4IiBoZWlnaHQ9IjI2LjMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMS43MDIiLz4KICAgIDxwb2x5Z29uIHRyYW5zZm9ybT0ibWF0cml4KDEuMDkxIDAgMCAuOTk4MiAtMy4yODMgLjA5OCkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMS45MTYiIHBvaW50cz0iMzYgMTIgMTkgMjEuNzUgNTMgMjEuNzUiLz4KICAgIDxyZWN0IHg9IjQwLjM1IiB5PSIyNS42MSIgd2lkdGg9IjQuMjk4IiBoZWlnaHQ9IjI2LjMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMS43MDIiLz4KICA8L2c+Cjwvc3ZnPg==", "chapters": ["hist-ideologies"], "provenance": "verified"}, {"id": "om-1F4DC", "type": "illustration", "subject": "hist", "title": "Schriftrolle", "alt": "Urkunde", "caption": "Quellen müssen auf Absicht und Herkunft geprüft werden.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-1F4DC/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-1F4DC.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiPgogICAgPHJlY3QgeD0iMTUuMDIyOSIgeT0iMTYuMjgzNCIgd2lkdGg9IjQxLjk1NDEiIGhlaWdodD0iNDAuOTc3MSIgZmlsbD0iI0Y0QUE0MSIgc3Ryb2tlPSJub25lIi8+CiAgICA8cG9seWxpbmUgZmlsbD0iI0UyNzAyMiIgc3Ryb2tlPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBwb2ludHM9IjE2LDU1Ljc0NzkgMTEsNTUuOTQ3OSAxMSw2MC45ODk2IDYxLDYwLjk4OTYgNjEsNTMuOTQ3OSA1Niw1NC4xNDc5Ii8+CiAgICA8cG9seWxpbmUgZmlsbD0iI0UyNzAyMiIgc3Ryb2tlPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBwb2ludHM9IjU2LDE2LjI4MzQgNjEsMTYuMDgzNCA2MSwxMS4wNDE3IDExLDExLjA0MTcgMTEsMTguMDgzNCAxNiwxNy44ODM0Ii8+CiAgPC9nPgogIDxnIGlkPSJoYWlyIi8+CiAgPGcgaWQ9InNraW4iLz4KICA8ZyBpZD0ic2tpbi1zaGFkb3ciLz4KICA8ZyBpZD0ibGluZSI+CiAgICA8cG9seWxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBwb2ludHM9IjE2LDU1Ljc0NzkgMTEsNTUuOTQ3OSAxMSw2MC45ODk2IDYxLDYwLjk4OTYgNjEsNTMuOTQ3OSA1Niw1NC4xNDc5Ii8+CiAgICA8cG9seWxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBwb2ludHM9IjU2LDE2LjI4MzQgNjEsMTYuMDgzNCA2MSwxMS4wNDE3IDExLDExLjA0MTcgMTEsMTguMDgzNCAxNiwxNy44ODM0Ii8+CiAgICA8cG9seWxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBwb2ludHM9IjU2LDE2LjI4MzQgMzQuNjI1OCwxNy4xMzgzIDE2LDE3Ljg4MzQiLz4KICAgIDxsaW5lIHgxPSIxNiIgeDI9IjU2IiB5MT0iNTUuNzQ3OSIgeTI9IjU0LjE0NzkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPGxpbmUgeDE9IjE2IiB4Mj0iMTYiIHkxPSIyMi4wMDIzIiB5Mj0iNTAuMDYwMyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8bGluZSB4MT0iNTYiIHgyPSI1NiIgeTE9IjIyLjAwMjMiIHkyPSI1MC4wNjAzIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSIyMC44NTIzIiB4Mj0iMzEuODYxNCIgeTE9IjI0LjkwMzQiIHkyPSIyNC45MDM0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSIyMC44NTIzIiB4Mj0iNTIuMDE5IiB5MT0iMzAuMTUxNSIgeTI9IjMwLjE1MTUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPGxpbmUgeDE9IjIwLjg1MjMiIHgyPSI1Mi4wMTkiIHkxPSIzNS4zOTk3IiB5Mj0iMzUuMzk5NyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8bGluZSB4MT0iMjAuODUyMyIgeDI9IjUyLjAxOSIgeTE9IjQwLjY0NzkiIHkyPSI0MC42NDc5IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSIyMC44NTIzIiB4Mj0iNTIuMDE5IiB5MT0iNDUuODk2IiB5Mj0iNDUuODk2IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICA8L2c+Cjwvc3ZnPg==", "chapters": ["hist-ch-1798-1848"], "provenance": "verified"}, {"id": "om-2696", "type": "illustration", "subject": "hist", "title": "Waage", "alt": "Justitia-Waage", "caption": "Gewaltenteilung trennt Gesetzgebung und Rechtsprechung.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-2696/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-2696.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiPgogICAgPHBhdGggZmlsbD0iIzlCOUI5QSIgc3Ryb2tlPSJub25lIiBkPSJNNDguMDYyNiw2Mi45MmMwLTMuMzEzNy01LjU5NjQtNi0xMi41LTZzLTEyLjUsMi42ODYzLTEyLjUsNkg0OC4wNjI2eiIvPgogICAgPHBhdGggZmlsbD0iI0QwQ0ZDRSIgc3Ryb2tlPSJub25lIiBkPSJNMjQuOTAwNiw0Ni45NjU2YzAsMi4xOTM4LTIuMTk4NSwzLjk3MjMtNC45MTA2LDMuOTcyM3MtNC45MTA2LTEuNzc4NS00LjkxMDYtMy45NzIzSDI0LjkwMDZ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjRDBDRkNFIiBzdHJva2U9Im5vbmUiIGQ9Ik01Ny45MDA2LDQ2LjkyNDhjMCwyLjE5MzgtMi4xOTg1LDMuOTcyMy00LjkxMDYsMy45NzIzYy0yLjcxMiwwLTQuOTEwNi0xLjc3ODUtNC45MTA2LTMuOTcyM0g1Ny45MDA2eiIvPgogIDwvZz4KICA8ZyBpZD0iaGFpciIvPgogIDxnIGlkPSJza2luIi8+CiAgPGcgaWQ9InNraW4tc2hhZG93Ii8+CiAgPGcgaWQ9ImxpbmUiPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMTUuOTk5NiwyNS4xNjk3YzIuNjY2NywwLjAwMDEsOC45NTQ0LTUuMzMzMywyMC4wMDAyLTUuMzMzM1M1MC42NjY2LDIzLjgzNjUsNTYsMjUuMTY5NyIvPgogICAgPGxpbmUgeDE9IjM1Ljk5OTgiIHgyPSIzNS45OTk4IiB5MT0iMjMuOTA2NCIgeTI9IjUxLjkwNjQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPGNpcmNsZSBjeD0iMzUuOTk5OCIgY3k9IjEzLjg5NSIgcj0iMyIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSJub25lIi8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik00OCw2MS45MDY0YzAtMy4zMTM3LTUuNTk2NC02LTEyLjUtNnMtMTIuNSwyLjY4NjMtMTIuNSw2Ii8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0yNiw0NS45MDY0YzAsMy4zMTM3LTIuNjg2Myw2LTYsNnMtNi0yLjY4NjMtNi02SDI2eiIvPgogICAgPHBvbHlnb24gZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBwb2ludHM9IjIwLDI3LjkwNjQgMTUsNDUuOTA2NCAyNSw0NS45MDY0Ii8+CiAgICA8bGluZSB4MT0iMjAiIHgyPSIyMCIgeTE9IjI3LjkwNjQiIHkyPSI0NS45MDY0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTU5LDQ1LjkwNjRjMCwzLjMxMzctMi42ODYzLDYtNiw2cy02LTIuNjg2My02LTZINTl6Ii8+CiAgICA8cG9seWdvbiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIHBvaW50cz0iNTMsMjcuOTA2NCA0OCw0NS45MDY0IDU4LDQ1LjkwNjQiLz4KICAgIDxsaW5lIHgxPSI1MyIgeDI9IjUzIiB5MT0iMjcuOTA2NCIgeTI9IjQ1LjkwNjQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPgogIDwvZz4KPC9zdmc+", "chapters": ["chem-equations-mole", "de-argumentation", "hist-ch-postwar-system"], "provenance": "verified"}, {"id": "om-1F3F0", "type": "illustration", "subject": "hist", "title": "Burg", "alt": "Mittelalterliche Burg", "caption": "Herrschaft war räumlich an Befestigungen gebunden.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-1F3F0/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-1F3F0.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiPgogICAgPHJlY3QgeD0iMzAiIHk9IjI3IiB3aWR0aD0iMTIiIGhlaWdodD0iMTQiIGZpbGw9IiM5QjlCOUEiIHN0cm9rZT0ibm9uZSIvPgogICAgPHBvbHlnb24gZmlsbD0iI0QwQ0ZDRSIgc3Ryb2tlPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBwb2ludHM9IjUyLDU1IDIwLDU1IDIwLDQxIDIwLDM5IDIwLDM5IDI3LDM5IDI3LDQxIDMyLDQxIDMxLjk5OTgsMzkgNDAsMzkgNDAsNDEgNDUsNDEgNDUsMzkgNTIsMzkgNTIsNDEgNTIsMzkiLz4KICAgIDxyZWN0IHg9IjEwIiB5PSIzMiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjIzIiBmaWxsPSIjRDBDRkNFIiBzdHJva2U9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxyZWN0IHg9IjUyIiB5PSIzMiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjIzIiBmaWxsPSIjRDBDRkNFIiBzdHJva2U9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxyZWN0IHg9IjgiIHk9IjI2IiB3aWR0aD0iMTQiIGhlaWdodD0iNiIgZmlsbD0iI0QwQ0ZDRSIgc3Ryb2tlPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8cmVjdCB4PSIyOS41IiB5PSIyMiIgd2lkdGg9IjEzIiBoZWlnaHQ9IjYiIGZpbGw9IiNEMENGQ0UiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPHJlY3QgeD0iNTAiIHk9IjI2IiB3aWR0aD0iMTQiIGhlaWdodD0iNiIgZmlsbD0iI0QwQ0ZDRSIgc3Ryb2tlPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8cG9seWdvbiBmaWxsPSIjRUE1QTQ3IiBzdHJva2U9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIHBvaW50cz0iMzYsMTIgMzEuNSwyMiA0MC41LDIyIi8+CiAgICA8cG9seWdvbiBmaWxsPSIjRUE1QTQ3IiBzdHJva2U9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIHBvaW50cz0iMTUsMTYgOS41LDI2IDIwLjUsMjYiLz4KICAgIDxwb2x5Z29uIGZpbGw9IiNFQTVBNDciIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgcG9pbnRzPSI1NywxNiA1MS41LDI2IDYyLjUsMjYiLz4KICAgIDxwYXRoIGZpbGw9IiNBNTc5MzkiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTQwLjUsNTVoLTl2LTZjMC0xLjY1NjksMS4zNDMxLTMsMy0zaDNjMS42NTY5LDAsMywxLjM0MzEsMywzVjU1eiIvPgogIDwvZz4KICA8ZyBpZD0iaGFpciIvPgogIDxnIGlkPSJza2luIi8+CiAgPGcgaWQ9InNraW4tc2hhZG93Ii8+CiAgPGcgaWQ9ImxpbmUiPgogICAgPHBvbHlsaW5lIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgcG9pbnRzPSIzMSwzNSAzMSwyOCA0MSwyOCA0MSwzNC45OTk5Ii8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0zNywzNWgtMnYtM2MwLTAuNTUyMywwLjQ0NzctMSwxLTFsMCwwIi8+CiAgICA8cG9seWdvbiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIHBvaW50cz0iNTIsNTUgMjAsNTUgMjAsNDEgMjAsMzkgMjAsMzkgMjcsMzkgMjcsNDEgMzIsNDEgMzEuOTk5OCwzOSA0MCwzOSA0MCw0MSA0NSw0MSA0NSwzOSA1MiwzOSA1Miw0MSA1MiwzOSIvPgogICAgPHJlY3QgeD0iMTAiIHk9IjMyIiB3aWR0aD0iMTAiIGhlaWdodD0iMjMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPHJlY3QgeD0iNTIiIHk9IjMyIiB3aWR0aD0iMTAiIGhlaWdodD0iMjMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPHJlY3QgeD0iOCIgeT0iMjYiIHdpZHRoPSIxNCIgaGVpZ2h0PSI2IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxyZWN0IHg9IjI5LjUiIHk9IjIyIiB3aWR0aD0iMTMiIGhlaWdodD0iNiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8cmVjdCB4PSI1MCIgeT0iMjYiIHdpZHRoPSIxNCIgaGVpZ2h0PSI2IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxwb2x5Z29uIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgcG9pbnRzPSIzNiwxMiAzMS41LDIyIDQwLjUsMjIiLz4KICAgIDxwb2x5Z29uIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgcG9pbnRzPSIxNSwxNiA5LjUsMjYgMjAuNSwyNiIvPgogICAgPHBvbHlnb24gZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBwb2ludHM9IjU3LDE2IDUxLjUsMjYgNjIuNSwyNiIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNNDAuNSw1NWgtOXYtNmMwLTEuNjU2OSwxLjM0MzEtMywzLTNoM2MxLjY1NjksMCwzLDEuMzQzMSwzLDNWNTV6Ii8+CiAgICA8bGluZSB4MT0iMzYiIHgyPSIzNiIgeTE9IjQ2IiB5Mj0iNTUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMTYsNDBoLTJ2LTNjMC0wLjU1MjMsMC40NDc3LTEsMS0xbDAsMCIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNNTgsNDBoLTJ2LTNjMC0wLjU1MjMsMC40NDc3LTEsMS0xbDAsMCIvPgogIDwvZz4KPC9zdmc+", "chapters": ["hist-imperialism"], "provenance": "verified"}, {"id": "om-1F54A", "type": "illustration", "subject": "hist", "title": "Friedenstaube", "alt": "Taube mit Zweig", "caption": "Friedensschlüsse ordnen Europa nach 1815 und 1945 neu.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-1F54A/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-1F54A.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiPgogICAgPHBhdGggZmlsbD0iI2QwY2ZjZSIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJtMTkuMTYgNDAuMDQgMC40Mjc1LTIuMDZjLTEuNDE3LTEuNDE3LTEuNTIzLTIuOTk4LTEuNDYyLTMuNzE3IDAuMDQ1MzUtMC41MzM5LTAuMjA2LTQuMzU2IDYuNTM4LTEwLjg5IDAuNjc2Ni0wLjY1NTggMS4yNjUtMS4zODQgMS43MzUtMi4yMDEgMC45NDU3LTEuNjQ1IDIuNzEyLTQuOTk4IDUuMy0xMS4wMyAzLjg1MS04Ljk3OCA4LjExNiAxMi4xNSA3LjM5NiAxOC4xOS0wLjA5NDIzIDAuNzkxMy0wLjk3NzIgNS4zMTYtMS4xMSA2LjEwMmwtMi44OCAxMC43OSIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJtMzcuOTkgNDYuMjhjMjguNzctMC45MjggMTguNTYtMzguMDUgMTcuNjMtMzMuNDEtMC45MjggNC42NC0yNy44NCAzMS41NS0zMC42MiAyNy44NC0yLjc4NC0zLjcxMi02LjQ5Ni00LjY0LTguMzUyLTEuODU2LTEuODU2IDIuNzg0LTIuNzg0IDMuNzEyLTIuNzg0IDMuNzEyczUuNTY4LTAuOTI4IDYuNDk2IDAuOTI4YzAuOTI4IDEuODU2IDMuODcxIDcuOTQ2IDkuMjggOC4zNTIgMCAwIDEuODQ3IDAuNjMwNCA1LjU2OCA4LjM1MiA0LjMzOSA5LjAwNCAyMi4yNyAwIDE2LjctNC42NC01LjU2OC00LjY0LTkuMjgtMi43ODQtMTIuMDYtNC42NC0yLjc4NC0xLjg1Ni0xLjg1Ni00LjY0LTEuODU2LTQuNjR6Ii8+CiAgPC9nPgogIDxnIGlkPSJoYWlyIi8+CiAgPGcgaWQ9InNraW4iLz4KICA8ZyBpZD0ic2tpbi1zaGFkb3ciLz4KICA8ZyBpZD0ibGluZSI+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Im0zOC4yOSA0Ni4xM2MyOC4zNi0wLjkxNDkgMTguMy0zNy41MSAxNy4zOC0zMi45M3MtMjcuNDQgMzEuMS0zMC4xOSAyNy40NGMtMi43NDQtMy42NTktNi40MDQtNC41NzQtOC4yMzMtMS44My0xLjgzIDIuNzQ0LTIuNzQ0IDMuNjU5LTIuNzQ0IDMuNjU5czUuNDg5LTAuOTE0OSA2LjQwNCAwLjkxNDljMC45MTQ5IDEuODMgMy44MTYgNy44MzMgOS4xNDggOC4yMzMgMCAwIDEuODIxIDAuNjIxNSA1LjQ4OSA4LjIzMyA0LjI3NyA4Ljg3NiAyMS45NiAwIDE2LjQ3LTQuNTc0LTUuNDg5LTQuNTc0LTkuMTQ4LTIuNzQ0LTExLjg5LTQuNTc0LTIuNzQ0LTEuODMtMS44My00LjU3NC0xLjgzLTQuNTc0eiIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJtMzguMzcgMjYuNTFjMC4zMTM4LTcuMDE5LTMuMjYyLTI0LjExLTYuNDgxLTE2LjA2LTMuNjU5IDkuMTQ4LTUuNDg5IDExLjg5LTUuNDg5IDExLjg5LTQuMzQ4IDQuMTMtNS45NTcgNy4yMjgtNi41MjkgOS4xNjIiLz4KICA8L2c+Cjwvc3ZnPg==", "chapters": ["hist-un-nato-europe"], "provenance": "verified"}, {"id": "om-1F4D6", "type": "illustration", "subject": "de", "title": "Aufgeschlagenes Buch", "alt": "Buch", "caption": "Textanalyse braucht die Stelle, nicht die Zusammenfassung.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-1F4D6/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-1F4D6.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiPgogICAgPHBhdGggZmlsbD0iIzliOWI5YSIgc3Ryb2tlPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNNDEsNTZjMCwyLjc2MTQtMi4yMzg2LDUtNSw1cy01LTIuMjM4Ni01LTUiLz4KICAgIDxwYXRoIGZpbGw9IiNkMGNmY2UiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTY3LjAwMTUsNTZINC45OTg1QzQuNDQ3LDU2LDQsNTUuNTUzLDQsNTUuMDAxNXYtMzguMDAzQzQsMTYuNDQ3LDQuNDQ3LDE2LDQuOTk4NSwxNmg2Mi4wMDNDNjcuNTUzLDE2LDY4LDE2LjQ0Nyw2OCwxNi45OTg1IHYzOC4wMDNDNjgsNTUuNTUzLDY3LjU1Myw1Niw2Ny4wMDE1LDU2eiIvPgogICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNNjQuMDAxNSw1MS42MjVINy45OTg1QzcuNDQ3LDUxLjYyNSw3LDUxLjE3OCw3LDUwLjYyNjV2LTI5LjI1M2MwLTAuNTUxNCwwLjQ0Ny0wLjk5ODUsMC45OTg1LTAuOTk4NWg1Ni4wMDMgQzY0LjU1MywyMC4zNzUsNjUsMjAuODIyLDY1LDIxLjM3MzV2MjkuMjUzQzY1LDUxLjE3OCw2NC41NTMsNTEuNjI1LDY0LjAwMTUsNTEuNjI1eiIvPgogIDwvZz4KICA8ZyBpZD0iaGFpciIvPgogIDxnIGlkPSJza2luIi8+CiAgPGcgaWQ9InNraW4tc2hhZG93Ii8+CiAgPGcgaWQ9ImxpbmUiPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNNDEsNTZjMCwyLjc2MTQtMi4yMzg2LDUtNSw1cy01LTIuMjM4Ni01LTUiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTY3LjAwMTUsNTZINC45OTg1QzQuNDQ3LDU2LDQsNTUuNTUzLDQsNTUuMDAxNXYtMzguMDAzQzQsMTYuNDQ3LDQuNDQ3LDE2LDQuOTk4NSwxNmg2Mi4wMDNDNjcuNTUzLDE2LDY4LDE2LjQ0Nyw2OCwxNi45OTg1IHYzOC4wMDNDNjgsNTUuNTUzLDY3LjU1Myw1Niw2Ny4wMDE1LDU2eiIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNNjQuMDAxNSw1MS42MjVINy45OTg1QzcuNDQ3LDUxLjYyNSw3LDUxLjE3OCw3LDUwLjYyNjV2LTI5LjI1M2MwLTAuNTUxNCwwLjQ0Ny0wLjk5ODUsMC45OTg1LTAuOTk4NWg1Ni4wMDMgQzY0LjU1MywyMC4zNzUsNjUsMjAuODIyLDY1LDIxLjM3MzV2MjkuMjUzQzY1LDUxLjE3OCw2NC41NTMsNTEuNjI1LDY0LjAwMTUsNTEuNjI1eiIvPgogICAgPGxpbmUgeDE9IjM2IiB4Mj0iMzYiIHkxPSIxNyIgeTI9IjU1IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSIxMSIgeDI9IjMxIiB5MT0iMjciIHkyPSIyNyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8bGluZSB4MT0iMTEiIHgyPSIzMSIgeTE9IjMzIiB5Mj0iMzMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPGxpbmUgeDE9IjExIiB4Mj0iMzEiIHkxPSIzOSIgeTI9IjM5IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSIxMSIgeDI9IjMxIiB5MT0iNDUiIHkyPSI0NSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8bGluZSB4MT0iNDEiIHgyPSI2MSIgeTE9IjI3IiB5Mj0iMjciIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPGxpbmUgeDE9IjQxIiB4Mj0iNjEiIHkxPSIzMyIgeTI9IjMzIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSI0MSIgeDI9IjYxIiB5MT0iMzkiIHkyPSIzOSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8bGluZSB4MT0iNDEiIHgyPSI2MSIgeTE9IjQ1IiB5Mj0iNDUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPgogIDwvZz4KPC9zdmc+", "chapters": ["de-buehler", "de-storm"], "provenance": "verified"}, {"id": "om-1F58B", "type": "illustration", "subject": "de", "title": "Füllfeder", "alt": "Federhalter", "caption": "Schreiben heisst überarbeiten.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-1F58B/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-1F58B.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiPgogICAgPHBhdGggZmlsbD0iIzliOWI5YSIgZD0ibTU5LjQxIDE3LjU4LTIuNTk4LTIuNTQxLTIuNTUtMi41ODlzLTExLjUxIDcuMDk4LTE5LjEyIDE1LjI4Yy0xMC40MSAxMS4xOS0xNC41OSAxNy4yLTE0LjU5IDE3LjJsNi40OTcgNi40NzVhMjE3LjkgMjE3LjkgMCAwIDAgMTcuMTUtMTQuNjVjOC4xODgtNy42MTMgMTUuMjItMTkuMTggMTUuMjItMTkuMTh6Ii8+CiAgICA8cGF0aCBmaWxsPSIjM2YzZjNmIiBkPSJtMzAuNzQgMzIuODdjLTMuNzQ2IDMuNzA2LTcuMDcxIDcuODEyLTEwLjE5IDEyLjA2bDYuNDY2IDYuMzY0YzQuMzA4LTMuMDUgOC4yNzctNi40MzYgMTIuMDUtMTAuMTN6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZDBjZmNlIiBzdHJva2U9IiNkMGNmY2UiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJtMjcuMDIgNTEuMjktNS42MzggNi4zNi03Ljc5NCAwLjc2OTIgMC42MzA3LTcuODA2IDYuMzM2LTUuNjg3Ii8+CiAgPC9nPgogIDxnIGlkPSJsaW5lIj4KICAgIDxsaW5lIHgxPSIxNy43NyIgeDI9IjE0LjgiIHkxPSI1NC4xMSIgeTI9IjU3LjIzIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJtMjQuMjkgNTQuNDktMi45MDggMy4xNjQtNy43OTQgMC43NjkyIDAuNjMwNy03LjgwNiAzLjIxNi0yLjk4NCIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0ibTU5LjE0IDE3LjIzLTIuNjE2LTIuNTIzLTIuNTY5LTIuNTcxcy0xMS40NiA3LjE4MS0xOS4wMSAxNS40MmMtMTAuMzMgMTEuMjctMTQuNDcgMTcuMzEtMTQuNDcgMTcuMzFsNi41NDMgNi40MjhhMjE3LjkgMjE3LjkgMCAwIDAgMTcuMDUtMTQuNzhjOC4xMzMtNy42NzIgMTUuMDgtMTkuMjggMTUuMDgtMTkuMjh6Ii8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJtMzguOTcgNDAuOTctOC4zOTEtOC4yNDMiLz4KICA8L2c+Cjwvc3ZnPg==", "chapters": ["de-language-editing"], "provenance": "verified"}, {"id": "om-1F3AD", "type": "illustration", "subject": "de", "title": "Theatermasken", "alt": "Masken", "caption": "Komödie und Tragödie, Dürrenmatts Tragikomödie verbindet beide.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-1F3AD/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-1F3AD.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxnIGlkPSJjb2xvciI+CiAgICA8cGF0aCBmaWxsPSIjM0YzRjNGIiBkPSJNMzMuNiwyOS4wMzk3Yy0wLjI4LTIuMzMtMS40Mi05LjI0LTEuNDItOS4yNGMtMC4yOS0yLjM3LTMuODQtNC42Ni02LjE2LTQuMDNjMCwwLTYuMTUsMS45Ny03LjksMi40NCBjLTEuNzYsMC40Ny04LjA4LDEuODQtOC4wOCwxLjg0Yy0yLjMxLDAuNjItNC4yNSw0LjM3LTMuMzEsNi41N2MwLDAsMi40Nyw2LjU1LDMuMzksOC43MWMwLjY5LDEuNjMsMy4xMyw0LjU4LDQuMDUsNi4xOCBjMS45NSwzLjQsNi4wMSw3LjQ2LDkuOCw2LjQ1bDMuOTUtMS4wNmMzLjc5LTEuMDIsNS4yOC02LjU2LDUuMjYtMTAuNDhDMzMuMTgsMzQuNTY5OCwzMy44MSwzMC43OTk3LDMzLjYsMjkuMDM5N3ogTTE2LjI2LDMxLjM4OTggYy0xLjA3LDAuMjgtMi4xMS0wLjEzLTIuMzItMC45M2MtMC4yMi0wLjgsMC40Ny0xLjY4LDEuNTQtMS45N2MxLjA3LTAuMjksMi4xMSwwLjEzLDIuMzIsMC45MyBDMTguMDIsMzAuMjE5OCwxNy4zMiwzMS4wOTk4LDE2LjI2LDMxLjM4OTh6IE0yNi4xMSwyOC43NDk4Yy0xLjA2LDAuMjgtMi4xLTAuMTMtMi4zMi0wLjkzYy0wLjIxLTAuOCwwLjQ4LTEuNjksMS41NS0xLjk3IGMxLjA2LTAuMjksMi4xLDAuMTI5OSwyLjMxOTksMC45M0MyNy44NywyNy41Nzk4LDI3LjE4LDI4LjQ1OTgsMjYuMTEsMjguNzQ5OHogTTIzLjU0LDM4LjQzOThjLTIuNCwwLjY1LTMuMjQsNS4zMS0zLjg4LDIuOTEgYy0wLjY1LTIuNCwwLjc4LTQuODcwMSwzLjE4MDEtNS41MWMyLjQtMC42NSw0Ljg3LDAuNzgsNS41MDk5LDMuMThDMjguOTksNDEuNDE5NywyNS45NCwzNy43OTk3LDIzLjU0LDM4LjQzOTh6Ii8+CiAgICA8cGF0aCBmaWxsPSIjM0YzRjNGIiBkPSJNMjEuNjY5MywyMy40MzU2YzIuMTM1Ni0wLjc2NSw0LjAyMjYtMS4xODA4LDUuMDk5OC0wLjkxMzZjMS4yNTI4LDAuMzEwOCwyLjIyNDQsMS4wMzA0LDMuMTI0OSwyLjEwNiBMMjEuNjY5MywyMy40MzU2eiIvPgogICAgPHBhdGggZmlsbD0iIzNGM0YzRiIgZD0iTTE3LjQ1MzgsMjQuNTY1MmMtMi4yMzIsMC40MDUzLTQuMDc0MSwwLjk4ODctNC44NzMzLDEuNzU4N2MtMC45Mjk1LDAuODk1Ni0xLjQxMTIsMi4wMDQ2LTEuNjUzMywzLjM4NjMgTDE3LjQ1MzgsMjQuNTY1MnoiLz4KICAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik02MS45NiwyOC4wNDk3YzAsMC02LjMyLTEuMzctOC4wNy0xLjg0Yy0xLjc2LTAuNDctNy45MS0yLjQ1LTcuOTEtMi40NWMtMi4zMi0wLjYyLTUuODcsMS42Ny02LjE2LDQuMDQgYzAsMC0xLjE0LDYuOTEtMS40Miw5LjI0Yy0wLjIxLDEuNzYsMC40Miw1LjUzLDAuNDIsNy4zOGMtMC4wMiwzLjkyLDEuNDcsOS40Niw1LjI2LDEwLjQ4bDMuOTUsMS4wNmMzLjc5LDEuMDEsNy44NS0zLjA1LDkuOC02LjQ1IGMwLjkyLTEuNiwzLjM2LTQuNTUsNC4wNS02LjE4YzAuOTItMi4xNiwzLjM5LTguNzEsMy4zOS04LjcxQzY2LjIxLDMyLjQxOTcsNjQuMjcsMjguNjY5Nyw2MS45NiwyOC4wNDk3eiBNNDQuMTQsMzQuNzI5NyBjMC4yMi0wLjgsMS4yNi0xLjIyLDIuMzItMC45M2MxLjA3LDAuMjgsMS43NTk5LDEuMTYsMS41NSwxLjk2Yy0wLjIyLDAuOC0xLjI2LDEuMjItMi4zMiwwLjkzIEM0NC42MiwzNi40MDk4LDQzLjkzLDM1LjUyOTgsNDQuMTQsMzQuNzI5N3ogTTUzLjMxLDQ1Ljc0OThjLTAuNjUsMi40LTMuMTEsMy44My01LjUxLDMuMThjLTIuNC0wLjY0LTMuODMtMy4xMS0zLjE5LTUuNTEgYzAuNjUtMi40LDEuNDgsMi4yNiwzLjg4LDIuOUM1MC45LDQ2Ljk2OTgsNTMuOTUsNDMuMzQ5OCw1My4zMSw0NS43NDk4eiBNNTcuODYsMzguMzk5OGMtMC4yMSwwLjgtMS4yNSwxLjIyLTIuMzIsMC45NCBjLTEuMDYtMC4yOS0xLjc1OTktMS4xNy0xLjU0LTEuOTdjMC4yMS0wLjgsMS4yNS0xLjIyLDIuMzItMC45M0M1Ny4zOSwzNi43MTk4LDU4LjA4LDM3LjU5OTgsNTcuODYsMzguMzk5OHoiLz4KICA8L2c+CiAgPGcgaWQ9ImhhaXIiLz4KICA8ZyBpZD0ic2tpbiIvPgogIDxnIGlkPSJza2luLXNoYWRvdyIvPgogIDxnIGlkPSJsaW5lIj4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTI3LjkxOTcsNDYuODk4bC0zLjk1MDgsMS4wNTg1Yy0zLjc4NTUsMS4wMTQ0LTcuODUyLTMuMDQzMy05Ljc5NzktNi40NDUxYy0wLjkxNzctMS42MDQyLTMuMzU3Mi00LjU1MTYtNC4wNTM2LTYuMTgyMSBjLTAuOTIxMy0yLjE1NjctMy4zODMxLTguNzA3NS0zLjM4MzEtOC43MDc1Yy0wLjk0MTMtMi4yMDM2LDAuOTk0NS01Ljk1NDcsMy4zMDkxLTYuNTc0OWMwLDAsNi4zMTUzLTEuMzY4Niw4LjA3MTYtMS44MzkyIGMxLjc1NjItMC40NzA1LDcuOTA5OC0yLjQ0MjksNy45MDk4LTIuNDQyOWMyLjMxNDUtMC42MjAyLDUuODY2NSwxLjY2MDQsNi4xNTMxLDQuMDM5NGMwLDAsMS4xNDM1LDYuOTA1MywxLjQyNDEsOS4yMzQgYzAuMjEyLDEuNzU5OC0wLjQyNyw1LjUzMTQtMC40MTk3LDcuMzc5MkMzMy4xOTgsNDAuMzM2MywzMS43MDUyLDQ1Ljg4MzYsMjcuOTE5Nyw0Ni44OTh6Ii8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0yOC4zNDk5LDM5LjAxODJjMC42NDMyLDIuNDAwNi0yLjQxMi0xLjIxNzMtNC44MTI2LTAuNTc0Yy0yLjQwMDYsMC42NDMyLTMuMjM3NSw1LjMwMzktMy44ODA4LDIuOTAzMyBjLTAuNjQzMi0yLjQwMDYsMC43ODE0LTQuODY4MSwzLjE4Mi01LjUxMTNDMjUuMjM5MSwzNS4xOTI5LDI3LjcwNjYsMzYuNjE3NSwyOC4zNDk5LDM5LjAxODJ6Ii8+CiAgICA8ZWxsaXBzZSBjeD0iMjUuNzI1NiIgY3k9IjI3LjI5NzYiIHJ4PSIxLjk5OTkiIHJ5PSIxLjUiIHRyYW5zZm9ybT0ibWF0cml4KDAuOTY1OSAtMC4yNTg4IDAuMjU4OCAwLjk2NTkgLTYuMTg4MyA3LjU4ODEpIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTIxLjY2OTMsMjMuNDM1NmMyLjEzNTYtMC43NjUsNC4wMjI2LTEuMTgwOCw1LjA5OTgtMC45MTM2YzEuMjUyOCwwLjMxMDgsMi4yMjQ0LDEuMDMwNCwzLjEyNDksMi4xMDYiLz4KICAgIDxlbGxpcHNlIGN4PSIxNS44Njk5IiBjeT0iMjkuOTM3OSIgcng9IjEuOTk5OSIgcnk9IjEuNSIgdHJhbnNmb3JtPSJtYXRyaXgoMC45NjU5IC0wLjI1ODggMC4yNTg4IDAuOTY1OSAtNy4yMDc0IDUuMTI3MykiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMTcuNDUzOCwyNC41NjUyYy0yLjIzMiwwLjQwNTMtNC4wNzQxLDAuOTg4Ny00Ljg3MzMsMS43NTg3Yy0wLjkyOTUsMC44OTU2LTEuNDExMiwyLjAwNDYtMS42NTMzLDMuMzg2MyIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNNDguMDMxLDU1Ljk1NjVsLTMuOTUwNy0xLjA1ODdjLTMuNzg1NS0xLjAxNDMtNS4yNzg0LTYuNTYxNi01LjI2MjctMTAuNDgwNmMwLjAwNzMtMS44NDgxLTAuNjMxNi01LjYyMDQtMC40MTk1LTcuMzgwNyBjMC4yODA1LTIuMzI4NCwxLjQyMzktOS4yMzI1LDEuNDIzOS05LjIzMjVjMC4yODY2LTIuMzc5LDMuODM4Ni00LjY1OTcsNi4xNTMyLTQuMDM5NWMwLDAsNi4xNTM1LDEuOTcyNCw3LjkwOTksMi40NDMgYzEuNzU2MSwwLjQ3MDYsOC4wNzE1LDEuODM5Myw4LjA3MTUsMS44MzkzYzIuMzE0NSwwLjYyMDEsNC4yNTAzLDQuMzcxMiwzLjMwOSw2LjU3NDhjMCwwLTIuNDYyMyw2LjU1MTktMy4zODM3LDguNzA4OSBjLTAuNjk2MywxLjYzLTMuMTM1NSw0LjU3NjgtNC4wNTMxLDYuMTgwN0M1NS44ODI5LDUyLjkxMzIsNTEuODE2NSw1Ni45NzA4LDQ4LjAzMSw1NS45NTY1eiIvPgogICAgPGVsbGlwc2UgY3g9IjU1LjkzMDQiIGN5PSIzNy44ODY3IiByeD0iMS41IiByeT0iMS45OTk5IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjI1ODggLTAuOTY1OSAwLjk2NTkgMC4yNTg4IDQuODU5MyA4Mi4xMDYxKSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik01NC4zNDkxLDMyLjUxMjRjMi4yMzIsMC40MDUzLDQuMDc0MSwwLjk4ODcsNC44NzMzLDEuNzU4N2MwLjkyOTUsMC44OTU2LDEuNDExMiwyLjAwNDYsMS42NTMzLDMuMzg2MyIvPgogICAgPGVsbGlwc2UgY3g9IjQ2LjA3NCIgY3k9IjM1LjI0NSIgcng9IjEuNSIgcnk9IjEuOTk5OSIgdHJhbnNmb3JtPSJtYXRyaXgoMC4yNTg4IC0wLjk2NTkgMC45NjU5IDAuMjU4OCAwLjEwNTUgNzAuNjI3NSkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNNTAuMTMzNiwzMS4zODI4Yy0yLjEzNTYtMC43NjUtNC4wMjI2LTEuMTgwOC01LjA5OTgtMC45MTM2Yy0xLjI1MjgsMC4zMTA4LTIuMjI0NCwxLjAzMDQtMy4xMjQ5LDIuMTA2Ii8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik00NC42MTQxLDQzLjQyMDNjMC42NDMyLTIuNDAwNiwxLjQ4MDIsMi4yNjAxLDMuODgwOCwyLjkwMzNjMi40MDA2LDAuNjQzMyw1LjQ1NTgtMi45NzQ2LDQuODEyNS0wLjU3NCBjLTAuNjQzMiwyLjQwMDYtMy4xMTA3LDMuODI1My01LjUxMTMsMy4xODJDNDUuMzk1NSw0OC4yODg0LDQzLjk3MDksNDUuODIwOSw0NC42MTQxLDQzLjQyMDN6Ii8+CiAgPC9nPgo8L3N2Zz4=", "chapters": ["de-duerrenmatt"], "provenance": "verified"}, {"id": "om-1F1EC-1F1E7", "type": "illustration", "subject": "en", "title": "Flagge Grossbritannien", "alt": "Union Jack", "caption": "Britisches und amerikanisches Englisch unterscheiden sich.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-1F1EC-1F1E7/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-1F1EC-1F1E7.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiPgogICAgPHJlY3QgeD0iNSIgeT0iMTciIHdpZHRoPSI2MiIgaGVpZ2h0PSIzOCIgZmlsbD0iIzFlNTBhMCIvPgogICAgPGc+CiAgICAgIDxwb2x5Z29uIGZpbGw9IiNmZmYiIHBvaW50cz0iNDAgMjguODU2IDQwIDMyIDUwLjE4MSAzMiA2NyAyMS42OTEgNjcgMTcgNTkuMzQ2IDE3IDQwIDI4Ljg1NiIvPgogICAgICA8cG9seWdvbiBmaWxsPSIjZDIyZjI3IiBwb2ludHM9IjY3IDE3IDY3IDE3IDYzLjE3MyAxNyA0MCAzMS4yMDMgNDAgMzIgNDMuNDgyIDMyIDY3IDE3LjU4NiA2NyAxNyIvPgogICAgICA8cG9seWdvbiBmaWxsPSIjZmZmIiBwb2ludHM9IjU5LjM0NyA1NSA2NyA1NSA2NyA1NSA2NyA1MC4zMDggNTAuMTgyIDQwIDQwIDQwIDQwIDQzLjE0MyA1OS4zNDcgNTUiLz4KICAgICAgPHBvbHlnb24gZmlsbD0iI2QyMmYyNyIgcG9pbnRzPSI2NyA1NSA2NyA1Mi42NTMgNDYuMzU1IDQwIDQxLjU2OCA0MCA2Ni4wNDIgNTUgNjcgNTUgNjcgNTUiLz4KICAgICAgPHBvbHlnb24gZmlsbD0iI2ZmZiIgcG9pbnRzPSIzMiA0My4xNDQgMzIgNDAgMjEuODE5IDQwIDUgNTAuMzA5IDUgNTUgMTIuNjU0IDU1IDMyIDQzLjE0NCIvPgogICAgICA8cG9seWdvbiBmaWxsPSIjZDIyZjI3IiBwb2ludHM9IjUgNTUgNSA1NSA4LjgyNyA1NSAzMiA0MC43OTcgMzIgNDAgMjguNTE4IDQwIDUgNTQuNDE0IDUgNTUiLz4KICAgICAgPHBvbHlnb24gZmlsbD0iI2ZmZiIgcG9pbnRzPSIxMi42NTMgMTcgNSAxNyA1IDE3IDUgMjEuNjkyIDIxLjgxOCAzMiAzMiAzMiAzMiAyOC44NTcgMTIuNjUzIDE3Ii8+CiAgICAgIDxwb2x5Z29uIGZpbGw9IiNkMjJmMjciIHBvaW50cz0iNSAxNyA1IDE5LjM0NyAyNS42NDYgMzIgMzAuNDMyIDMyIDUuOTU4IDE3IDUgMTcgNSAxNyIvPgogICAgICA8cmVjdCB4PSI1IiB5PSIzMSIgd2lkdGg9IjYyIiBoZWlnaHQ9IjEwIiBmaWxsPSIjZmZmIi8+CiAgICAgIDxyZWN0IHg9IjMxIiB5PSIxNyIgd2lkdGg9IjEwIiBoZWlnaHQ9IjM4IiBmaWxsPSIjZmZmIi8+CiAgICAgIDxyZWN0IHg9IjUiIHk9IjMzIiB3aWR0aD0iNjIiIGhlaWdodD0iNiIgZmlsbD0iI2QyMmYyNyIvPgogICAgICA8cmVjdCB4PSIzMyIgeT0iMTciIHdpZHRoPSI2IiBoZWlnaHQ9IjM4IiBmaWxsPSIjZDIyZjI3Ii8+CiAgICA8L2c+CiAgPC9nPgogIDxnIGlkPSJsaW5lIj4KICAgIDxyZWN0IHg9IjUiIHk9IjE3IiB3aWR0aD0iNjIiIGhlaWdodD0iMzgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiLz4KICA8L2c+Cjwvc3ZnPg==", "chapters": ["en-literature"], "provenance": "verified"}, {"id": "om-1F5E3", "type": "illustration", "subject": "en", "title": "Sprechender Kopf", "alt": "Silhouette beim Sprechen", "caption": "Im Mündlichen zählt Flüssigkeit so viel wie Korrektheit.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-1F5E3/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-1F5E3.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiPgogICAgPHBhdGggZmlsbD0iI0QwQ0ZDRSIgc3Ryb2tlPSJub25lIiBkPSJNNTgsNjAuODg1N2MwLDAsMC0zLTEtN2MtMS4yMTA5LTQuODQ1Ny00LTgtMTAtOGMtNSwwLTE1LDAtMjIsMGMtNiwwLTguNzg5MSwzLjE1NDMtMTAsOGMtMSw0LTEsNy0xLDciLz4KICAgIDxwYXRoIGZpbGw9IiNEMENGQ0UiIHN0cm9rZT0ibm9uZSIgZD0iTTQ5LDMwLjU5NjdjLTEtMywzLTMsMi01cy0zLTIuNzY0Mi0zLTVjMC0zLTEtMTEtOS0xMWMtMTIuMDAzOSwwLTE1LDcuMzQzNy0xNSwxMiBjMCw0LjEwOTQsMi41OTA4LDcuMTgwNiw0LDEwYzIsNCw1LjE1MzMsNy4zOTU1LDcsOC4wMTA3YzQuMjQyMiwxLjQxNDEsMTMsMi4zNDY3LDEzLTEuMDEwN2MwLTIsMS0zLjAxMzcsMS00bC0zLTJMNDksMzAuNTk2N3oiLz4KICA8L2c+CiAgPGcgaWQ9ImhhaXIiLz4KICA8ZyBpZD0ic2tpbiIvPgogIDxnIGlkPSJza2luLXNoYWRvdyIvPgogIDxnIGlkPSJsaW5lIj4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNNDkuMjcyNSwzMS4yMTM5IGMtMC4wOTU3LTAuNzk1OS0wLjc0MjItMi4xMDk0LTAuNjE3Mi0zLjEwMTZjMCwwLDMuOTA1Mi0wLjcxMjksMi4zNTg0LTIuNzI2NmMtMC44NjUzLTEuMTI3OS0yLjU4MDEtMy4zNDk2LTIuNDc2Ni00LjM0MzcgQzQ5LDE2LjU5NjcsNDcsOS41OTY3LDM4LDkuNTk2N2MtMTEsMC0xNCw3LTE0LDEyYzAsNS44MDg2LDIuOTg4Myw4LDQsMTFjMS40NDE0LDQuMjcyNCw1LDcsMTEsOGMzLjk0NDMsMC42NTcyLDEwLDEsOS4zOTc1LTMgYy0wLjE2MDItMS4wNjQ1LDAuMzc1OS0yLjQxNywwLjQ5OS0zLjM5NjVsLTIuODUwNi0xLjM3N0w0OS4yNzI1LDMxLjIxMzl6Ii8+CiAgICA8bGluZSB4MT0iNTQiIHgyPSI1NiIgeTE9IjI4LjU5NjciIHkyPSIyNi41OTY3IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8bGluZSB4MT0iNTYiIHgyPSI1OCIgeTE9IjMxLjQ4MjQiIHkyPSIzMS40ODI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8bGluZSB4MT0iNTQiIHgyPSI1NiIgeTE9IjM0IiB5Mj0iMzYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik01OCw1OS44ODU3YzAsMCwwLTItMS02IGMtMS4yMTA5LTQuODQ1Ny02LTgtMTItOGMtNSwwLTEwLDAtMTcsMGMtNiwwLTExLjc4OTEsMy4xNTQzLTEzLDhjLTEsNC0xLDYtMSw2Ii8+CiAgPC9nPgo8L3N2Zz4=", "chapters": ["de-oral-method", "en-speaking"], "provenance": "verified"}, {"id": "om-1F4DD", "type": "illustration", "subject": "en", "title": "Notizblock", "alt": "Schreibblock", "caption": "Argumentative writing folgt einer klaren Struktur.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-1F4DD/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-1F4DD.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiPgogICAgPHJlY3QgeD0iMTYuNDA1NSIgeT0iMTEuMzc4MyIgd2lkdGg9IjM5LjU2NDUiIGhlaWdodD0iNDkuMDY1OSIgZmlsbD0iI2ZmZiIvPgogICAgPHBvbHlsaW5lIGZpbGw9IiNmNGFhNDEiIHBvaW50cz0iMzkuOTMxMiA0MC4yMjI0IDUxLjIyNTIgMjguOTI4NCA1Ni44NTYyIDM2LjM1OTEgNDYuMzU2MiA0Ni44NzA2Ii8+CiAgICA8cG9seWxpbmUgZmlsbD0iI2E1NzkzOSIgcG9pbnRzPSIzNy45NDE1IDQ2LjgxODUgMzkuOTAyIDQxLjE3IDQ2LjM1NjIgNDcuNjI0IDQwLjcwNzUgNDkuNTg0NiIvPgogICAgPHBvbHlsaW5lIGZpbGw9IiNlYTVhNDciIHBvaW50cz0iNTUuMzIxNSAyNS41Nzk5IDU5LjMwMDEgMjEuNjAxMyA2Ni4wMzUyIDI4LjE4NDcgNjIuMDkwNCAzMi4xMjk2Ii8+CiAgICA8cG9seWxpbmUgZmlsbD0iI2QwY2ZjZSIgcG9pbnRzPSI1MC40OTQzIDI5LjY1OTMgNTUuMTAxOCAyNS4wNTE5IDYxLjc4MzYgMzEuNzkwNyA1Ny4yMTUyIDM2LjM1OTEiLz4KICA8L2c+CiAgPGcgaWQ9ImxpbmUiPgogICAgPHBvbHlnb24gcG9pbnRzPSIzOC4wNzAyIDQ3LjE5MSA0MC40NTY0IDQ5LjU3NzIgMzYuOTkyMSA1MC44NTY2IDM4LjA3MDIgNDcuMTkxIi8+CiAgICA8bGluZSB4MT0iMjIuMzIxNSIgeDI9IjQ5LjMyMTUiIHkxPSIxOS44NzUiIHkyPSIxOS44NzUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSIyMi4zMjE1IiB4Mj0iNDcuOTIxNSIgeTE9IjI3Ljg3NSIgeTI9IjI3Ljg3NSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPGxpbmUgeDE9IjIyLjMyMTUiIHgyPSIzOS40MzEyIiB5MT0iMzUuODc1IiB5Mj0iMzUuODc1IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8bGluZSB4MT0iMjIuMzIxNSIgeDI9IjM0LjUyODQiIHkxPSI0My44NzUiIHkyPSI0My44NzUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSIyMi4zMjE1IiB4Mj0iMzIuNDY3NSIgeTE9IjUxLjg3NSIgeTI9IjUxLjg3NSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPHBvbHlnb24gcG9pbnRzPSIzOC4wNzAyIDQ3LjE5MSA0MC40NTY0IDQ5LjU3NzIgMzYuOTkyMSA1MC44NTY2IDM4LjA3MDIgNDcuMTkxIi8+CiAgICA8cG9seWdvbiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBwb2ludHM9IjQwLjY5MTkgNDkuNTkxIDQ2LjM1NjIgNDcuNjI0IDYxLjk0NjEgMzIuMDM0IDU1LjQ5MiAyNS41Nzk5IDM5LjkwMiA0MS4xNyAzNy45MjgyIDQ2Ljg0MSA0MC42OTE5IDQ5LjU5MSIvPgogICAgPHBvbHlsaW5lIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIHBvaW50cz0iNTguMDg1NiAyMi45ODYzIDU5LjY0MTEgMjEuNDMwOSA2Ni4wOTUyIDI3Ljg4NSA2NC40NjM0IDI5LjUxNjgiLz4KICAgIDxsaW5lIHgxPSI0MC4yNzg4IiB4Mj0iNDYuNzMyOSIgeTE9IjQwLjc5MzIiIHkyPSI0Ny4yNDczIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8cG9seWxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgcG9pbnRzPSIzNy45MzIzIDQ2LjgyNzcgMzYuNTQ5MyA1MC45NzY4IDQwLjcwNzUgNDkuNTg0NiIvPgogICAgPGxpbmUgeDE9IjUxLjMwMjMiIHgyPSI1Ny4xOTQ2IiB5MT0iMzAuMTU3MiIgeTI9IjM2LjA0OTUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxwb2x5bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyLjAyMDYiIHBvaW50cz0iNTUuMzIxNSA0NC4yMjggNTUuMzIxNSA1OS44NzUgMTYuMzIxNSA1OS44NzUgMTYuMzIxNSAxMS44NzUgNTUuMzIxNSAxMS44NzUgNTUuMzIxNSAyMC4zMzA5Ii8+CiAgPC9nPgo8L3N2Zz4=", "chapters": ["en-writing"], "provenance": "verified"}, {"id": "om-1F4C9", "type": "illustration", "title": "Fallende Kurve", "alt": "Diagramm mit Parabelast", "caption": "Zwei Lösungen, eine oder keine: die Diskriminante entscheidet.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-1F4C9/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-1F4C9.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTEyLjA1IDU5LjkxaDQ3Ljl2LTQ3LjloLTQ3Ljl6Ii8+CiAgICA8cGF0aCBmaWxsPSIjOTJkM2Y1IiBzdHJva2U9Im5vbmUiIGQ9Ik0zMS4yMzc5LDI4LjQxNjZsLTYuODg5OC04LjY4MTJsLTIuODM4NCwyLjU0OTFsOC43MTMxLDExLjc5NzJsNi41OTM4LTMuNTYxNyBjMC4xNDI1LTAuMDcxMywxMS4yNzYyLDIxLjIyMTgsMTEuMjc2MiwyMS4yMjE4bDMuMzk3LTEuNDUyN0wzOS4wNTQ2LDI1LjIwNDhDMzkuMDU0NiwyNS4yMDQ4LDMxLjUyNjksMjguODAwNCwzMS4yMzc5LDI4LjQxNjZ6Ii8+CiAgPC9nPgogIDxnIGlkPSJoYWlyIi8+CiAgPGcgaWQ9InNraW4iLz4KICA8ZyBpZD0ic2tpbi1zaGFkb3ciLz4KICA8ZyBpZD0ibGluZSI+CiAgICA8cG9seWdvbiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIHBvaW50cz0iNDcuOTA2MSw1Mi4wNjU4IDM3LjI2MSwzMC41OTI3IDI5LjkwODksMzQuMjM3MyAyMS4xNTE0LDIyLjE0IDI0LjM0ODEsMTkuNzM1NCAzMS4zNTgsMjkuMDU0NCAzNS40ODQzLDI3LjAwODggMzUuNDcwOCwyNi45ODE1IDM5LjA1NDYsMjUuMjA0OCA1MS40ODk4LDUwLjI4OTEiLz4KICAgIDxyZWN0IHg9IjEyLjA1MTUiIHk9IjEyLjAxNTQiIHdpZHRoPSI0Ny44OTciIGhlaWdodD0iNDcuODk2OSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8bGluZSB4MT0iNTEuODM5MiIgeDI9IjU5LjgwNTEiIHkxPSIzNi4wODUiIHkyPSIzNi4wODUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPGxpbmUgeDE9IjEyLjczOSIgeDI9IjI2LjAzOTUiIHkxPSIzNi4wODUiIHkyPSIzNi4wODUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPGxpbmUgeDE9IjU1LjIwNzQiIHgyPSI1OS42ODI5IiB5MT0iNDcuOTkyOCIgeTI9IjQ3Ljk5MjgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPGxpbmUgeDE9IjEyLjczOSIgeDI9IjQxLjM2MDkiIHkxPSI0Ny45OTI4IiB5Mj0iNDcuOTkyOCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8bGluZSB4MT0iNDguMjMzOSIgeDI9IjQ4LjI1MDkiIHkxPSI1Ni4wODA1IiB5Mj0iNTkuMzcwNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8bGluZSB4MT0iNDguMDMzIiB4Mj0iNDguMTUyNyIgeTE9IjEyLjA1ODgiIHkyPSIzNC41MDQ1IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSIzNi4xODM3IiB4Mj0iMzYuMTgzNyIgeTE9IjM4LjE4MjUiIHkyPSI1OS41NzMyIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSIzNi4xODM3IiB4Mj0iMzYuMTgzNyIgeTE9IjEyLjMyOTciIHkyPSIyMi4yODQ1IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSIyNC4yMjUzIiB4Mj0iMjQuMjI1MyIgeTE9IjMzLjMwMTYiIHkyPSI1OS41NzMyIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSIyNC4yMjUzIiB4Mj0iMjQuMjI1MyIgeTE9IjEyLjEyMDQiIHkyPSIxNS42NTIzIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSI0My4yNTUyIiB4Mj0iNTkuMjI2MSIgeTE9IjI0LjE3NzIiIHkyPSIyNC4xNzcyIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSIxMi4yNjM1IiB4Mj0iMTcuNTUxOSIgeTE9IjI0LjE3NzIiIHkyPSIyNC4xNzcyIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICA8L2c+Cjwvc3ZnPg==", "chapters": ["hist-versailles-crisis", "math-systems-quadratics"], "provenance": "verified"}, {"id": "om-1F4C8", "type": "illustration", "title": "Steigende Kurve", "alt": "Exponentielles Wachstum", "caption": "Exponentialfunktionen wachsen schneller als jede Potenz.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-1F4C8/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-1F4C8.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTEyLjA1IDU5LjkxaDQ3Ljl2LTQ3LjloLTQ3Ljl6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZWE1YTQ3IiBzdHJva2U9Im5vbmUiIGQ9Ik0zMC41NTI1LDQwLjE4NDFsLTcuOTk2NCwxMi42MTM0bDMuMzM4NiwyLjIwMzNsNS40OTA0LTguOTA0OWMwLjI1MzktMC40MTIxLDguODUxNywyLjU0MDcsOC44NTE3LDIuNTQwNyBsMTAuODY3Ny0yNS44MDIybC0zLjY4NjMtMS41NTI2bC05LjM5MDMsMjEuNTI5OUMzNy44MTMxLDQzLjMyMTUsMzAuNTUyNSw0MC4xODQxLDMwLjU1MjUsNDAuMTg0MXoiLz4KICA8L2c+CiAgPGcgaWQ9ImhhaXIiLz4KICA8ZyBpZD0ic2tpbiIvPgogIDxnIGlkPSJza2luLXNoYWRvdyIvPgogIDxnIGlkPSJsaW5lIj4KICAgIDxwb2x5Z29uIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgcG9pbnRzPSI0Ny40MTgyLDIxLjI4MTggMzguMTE1LDQzLjM2OTQgMzAuNTUyNSw0MC4xODQxIDIyLjU1NjEsNTIuNzk3NSAyNS44OTQ3LDU1LjAwMDggMzEuODk5Nyw0NS4yNjEzIDM2LjU1MDQsNDcuMDgzOSA0MC4yMzY4LDQ4LjYzNjYgNTEuMTA0NSwyMi44MzQ0Ii8+CiAgICA8cmVjdCB4PSIxMi4wNTE1IiB5PSIxMi4wMTU0IiB3aWR0aD0iNDcuODk3IiBoZWlnaHQ9IjQ3Ljg5NjkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPGxpbmUgeDE9IjUwLjA2ODYiIHgyPSI1OS44MDUxIiB5MT0iMzYuMDg1IiB5Mj0iMzYuMDg1IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSIxMi43MzkiIHgyPSIzNy4xNzkxIiB5MT0iMzYuMDg1IiB5Mj0iMzYuMDg1IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSI0NS4wMjQyIiB4Mj0iNTkuNjgyOSIgeTE9IjQ3Ljk5MjgiIHkyPSI0Ny45OTI4IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSIxMi43MzkiIHgyPSIyMC44MTg2IiB5MT0iNDcuOTkyOCIgeTI9IjQ3Ljk5MjgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPGxpbmUgeDE9IjQ4LjEzMzQiIHgyPSI0OC4yNTA5IiB5MT0iNDAuNDQ0NCIgeTI9IjU5LjM3MDQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPGxpbmUgeDE9IjQ4LjAzMyIgeDI9IjQ4LjAzNjciIHkxPSIxMi4wNTg4IiB5Mj0iMTcuMTgxNiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8bGluZSB4MT0iMzYuMTgzNyIgeDI9IjM2LjE4MzciIHkxPSI1MS42NTAzIiB5Mj0iNTkuNTczMiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8bGluZSB4MT0iMzYuMTgzNyIgeDI9IjM2LjE4MzciIHkxPSIxMi4zMjk3IiB5Mj0iMzcuODMwNyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8bGluZSB4MT0iMjQuMjI1MyIgeDI9IjI0LjIyNTMiIHkxPSI1OC42MTM0IiB5Mj0iNTkuNTczMiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8bGluZSB4MT0iMjQuMjI1MyIgeDI9IjI0LjIyNTMiIHkxPSIxMS45NjMiIHkyPSI0My4wOTk0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSI1NS4xODM3IiB4Mj0iNTkuMjI2MSIgeTE9IjI0LjE3NzIiIHkyPSIyNC4xNzcyIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSIxMi4yNjM1IiB4Mj0iNDEuNzUxNCIgeTE9IjI0LjE3NzIiIHkyPSIyNC4xNzcyIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICA8L2c+Cjwvc3ZnPg==", "chapters": ["math-functions-advanced"], "provenance": "verified"}, {"id": "om-267E", "type": "illustration", "title": "Unendlich", "alt": "Unendlichzeichen", "caption": "Der Grenzwert beschreibt die Annäherung, nicht das Erreichen.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-267E/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-267E.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiPgogICAgPHBhdGggZmlsbD0iIzliOWI5YSIgc3Ryb2tlPSIjOWI5YjlhIiBzdHJva2Utd2lkdGg9IjIiIGQ9Im0zNiAzOS40NGMtNC4zMzUgNC4zMzUtOC44NDEgOS4wOTYtMTUuNzMgOS4wOTYtNy4xNDEgMC0xMi4yNC01LjI3MS0xMi4yNC0xMi41OCAwLjA1NTU4LTcuMDU4IDUuODYzLTEyLjY3IDEyLjkyLTEyLjU0IDYuMjkgMCAxMC45NyA0Ljk3MyAxNS4wNSA5LjA1NCA0LjMzNS00LjMzNiA4Ljg0MS05LjA1NCAxNS43My05LjA1NCA3LjIyNiAwIDEyLjI0IDUuMjI5IDEyLjI0IDEyLjU0LTAuMDU1OTIgNy4wNTgtNS44NjMgMTIuNzUtMTIuOTIgMTIuNjItNi4yOSAwLTEwLjk3LTUuMDU3LTE1LjA1LTkuMTM3em0tMy40LTMuNDQ0Yy0zLjMxNS0zLjA2LTYuODAxLTcuNTIyLTExLjczLTcuNTIyLTQuMTI5IDAuMDA1NS03LjQ3NSAzLjM1MS03LjQ4IDcuNDgtMC4yMDQ3IDQuMTEzIDMuMTA4IDcuNTg0IDcuMjI2IDcuNTIyIDQuODQ0IDVlLTQgOC43NTQtNC4xNjYgMTEuOTgtNy40OHptMjYuMDEtMC4wNDE3YzAuMjA1LTQuMTEzLTMuMTA4LTcuNTQzLTcuMjI2LTcuNDgtNC44NDYgMC04Ljc1NiA0LjE2NS0xMS45OSA3LjQ4IDMuMzE1IDMuMDYgNi44IDcuNTIyIDExLjczIDcuNTIyIDQuMTI5LTAuMDA1NyA3LjQ3Ni0zLjM5MyA3LjQ4Mi03LjUyMnoiLz4KICA8L2c+CiAgPGcgaWQ9ImxpbmUiPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0ibTM2IDMyLjUxYzQuMzM1LTQuMzM2IDguODQxLTkuMDk2IDE1LjczLTkuMDk2IDcuMjI2IDAgMTIuMjQgNS4yNzEgMTIuMjQgMTIuNTgtMC4wNTU5MiA3LjA1OC01Ljg2MyAxMi43MS0xMi45MiAxMi41OC01LjAwNiAwLTguOTktMy4xNzgtMTIuNDctNi41MzJtLTIuNTgxLTIuNTY0Yy00LjMzNSA0LjMzNS04Ljg0MSA5LjA5Ni0xNS43MyA5LjA5Ni03LjE0MSAwLTEyLjI0LTUuMjcxLTEyLjI0LTEyLjU4IDAuMDU1NTgtNy4wNTggNS44NjMtMTIuNzEgMTIuOTItMTIuNTggNS4wMiAwIDkuMDEyIDMuMTk0IDEyLjQ5IDYuNTU4bS0zLjQ3NiAzLjQ3NWMtMi41ODYtMi41MDMtNS40NDctNC45MzItOS4xMDItNC45MzItNC4xMjkgMC4wMDU1LTcuNDc0IDMuMzUxLTcuNDggNy40OC0wLjIwNDcgNC4xMTMgMy4xMDggNy41NDIgNy4yMjYgNy40OCA0Ljg0NCA1ZS00IDguNzU0LTQuMTY2IDExLjk4LTcuNDhtOS40MDEgMi41MjFjMi41OTQgMi41MTMgNS40NjIgNC45NTkgOS4xMjkgNC45NTkgNC4xMjktMC4wMDUyIDcuNDc2LTMuMzUxIDcuNDgyLTcuNDhoNGUtNGMwLjIwNDctNC4xMTMtMy4xMDgtNy41NDItNy4yMjYtNy40OC00Ljg0NiAwLTguNzU2IDQuMTY1LTExLjk5IDcuNDgiLz4KICAgIDxsaW5lIHgxPSIzMi42IiB4Mj0iMzYiIHkxPSIzNiIgeTI9IjMyLjUxIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8bGluZSB4MT0iMzYiIHgyPSIzOS40IiB5MT0iMzkuNDkiIHkyPSIzNiIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIvPgogIDwvZz4KPC9zdmc+", "chapters": ["math-limits"], "provenance": "verified"}, {"id": "om-1F4CF", "type": "illustration", "title": "Flächenmessung", "alt": "Lineal", "caption": "Das Integral misst die Fläche unter der Kurve.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-1F4CF/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-1F4CF.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiPgogICAgPHBhdGggZmlsbD0iI0QwQ0ZDRSIgc3Ryb2tlPSJub25lIiBkPSJNMTMuNTYyNiwxOC43MzM4bDM0LjYyOTIsNDIuMjQyMWwxMC41ODM4LTguMTY5OUwyNC4wNTM1LDEwLjE5MjVMMTMuNTYyNiwxOC43MzM4eiIvPgogICAgPHBvbHlnb24gZmlsbD0iIzlCOUI5QSIgc3Ryb2tlPSJub25lIiBwb2ludHM9IjIzLjg4NzcsMTAuNDI4NCAyMS4yODY4LDEyLjQ1NzcgNTUuODQ4Myw1NS4xMzcgNTguMjY3OCw1Mi41OTAxIi8+CiAgICA8bGluZSB4MT0iMTkuNzI2OSIgeDI9IjIxLjI3ODUiIHkxPSIyMC45Mzc3IiB5Mj0iMTkuNjc1OCIgZmlsbD0iI2QwY2ZjZSIgc3Ryb2tlPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgPC9nPgogIDxnIGlkPSJoYWlyIi8+CiAgPGcgaWQ9InNraW4iLz4KICA8ZyBpZD0ic2tpbi1zaGFkb3ciLz4KICA8ZyBpZD0ibGluZSI+CiAgICA8cmVjdCB4PSIyOS4yMTY3IiB5PSI4LjIzMzkiIHdpZHRoPSIxMy42ODYyIiBoZWlnaHQ9IjU0LjkzMjQiIHRyYW5zZm9ybT0ibWF0cml4KC0wLjc3NzYgMC42Mjg4IC0wLjYyODggLTAuNzc3NiA4Ni41NDcgNDAuNzg1MykiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPGxpbmUgeDE9IjQ3LjQ4OTciIHgyPSI0OS4wNDEzIiB5MT0iNTUuMDczMSIgeTI9IjUzLjgxMTIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPGxpbmUgeDE9IjQ0Ljk2NTgiIHgyPSI0Ni41MTc1IiB5MT0iNTEuOTY5OSIgeTI9IjUwLjcwOCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8bGluZSB4MT0iNDIuNDQyIiB4Mj0iNDMuOTkzNSIgeTE9IjQ4Ljg2NjciIHkyPSI0Ny42MDQ4IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSIzNy4zOTQxIiB4Mj0iMzguOTQ1NyIgeTE9IjQyLjY2MDIiIHkyPSI0MS4zOTgzIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSIzNC44NzAyIiB4Mj0iMzYuNDIxOSIgeTE9IjM5LjU1NzEiIHkyPSIzOC4yOTUyIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSIzMi4zNDY0IiB4Mj0iMzMuODk4IiB5MT0iMzYuNDUzOCIgeTI9IjM1LjE5MTkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPGxpbmUgeDE9IjI5LjgyMjUiIHgyPSIzMS4zNzQiIHkxPSIzMy4zNTA2IiB5Mj0iMzIuMDg4NyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8bGluZSB4MT0iMjQuNzc0NiIgeDI9IjI2LjMyNjMiIHkxPSIyNy4xNDQyIiB5Mj0iMjUuODgyMyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8bGluZSB4MT0iMjIuMjUwOCIgeDI9IjIzLjgwMjQiIHkxPSIyNC4wNDEiIHkyPSIyMi43NzkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPGxpbmUgeDE9IjE5LjcyNjkiIHgyPSIyMS4yNzg1IiB5MT0iMjAuOTM3NyIgeTI9IjE5LjY3NTgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPGxpbmUgeDE9IjM5LjgxMjEiIHgyPSI0Mi40NiIgeTE9IjQ1Ljg0OTYiIHkyPSI0My42OTYxIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSIyNy4xOTI2IiB4Mj0iMjkuODQwNSIgeTE9IjMwLjMzMzUiIHkyPSIyOC4xOCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgPC9nPgo8L3N2Zz4=", "chapters": ["math-integrals"], "provenance": "verified"}, {"id": "om-27A1", "type": "illustration", "title": "Pfeil", "alt": "Richtungspfeil", "caption": "Ein Vektor hat Betrag und Richtung.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-27A1/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-27A1.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiPgogICAgPHBvbHlnb24gZmlsbD0iIzNGM0YzRiIgc3Ryb2tlPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBwb2ludHM9IjQ5LjIxMjQsNTEuNTM0MyA2NywzNS4wMzYzIDQ5LjIxMjQsMTguNTM4MiA0NS40MjM0LDIyLjYxMzggNTUuODE5MSwzMi4yNTU0IDUsMzIuMjU1NCA1LDM3LjgxNzEgNTUuODE5MSwzNy44MTcxIDQ1LjQyMzQsNDcuNDU4NyIvPgogIDwvZz4KICA8ZyBpZD0iaGFpciIvPgogIDxnIGlkPSJza2luIi8+CiAgPGcgaWQ9InNraW4tc2hhZG93Ii8+CiAgPGcgaWQ9ImxpbmUiPgogICAgPHBvbHlnb24gZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBwb2ludHM9IjQ5LjIxMjQsNTEuNTM0MyA2NywzNS4wMzYzIDQ5LjIxMjQsMTguNTM4MiA0NS40MjM0LDIyLjYxMzggNTUuODE5MSwzMi4yNTU0IDUsMzIuMjU1NCA1LDM3LjgxNzEgNTUuODE5MSwzNy44MTcxIDQ1LjQyMzQsNDcuNDU4NyIvPgogIDwvZz4KPC9zdmc+", "chapters": ["math-vectors"], "provenance": "verified"}, {"id": "om-1F46A", "type": "illustration", "title": "Familie", "alt": "Familiengruppe", "caption": "Stammbäume zeigen, wie Merkmale weitergegeben werden.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-1F46A/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-1F46A.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxnIGlkPSJjb2xvciI+CiAgICA8cGF0aCBmaWxsPSIjOTJEM0Y1IiBkPSJNMTEuMDAwMyw2MVY0NC45NTUyYzAtMy4yODk1LDMuMjkxOC01Ljk1NjYsNi41ODM2LTUuOTU2NmMzLjkxNDYsMy4yODk1LDcuODI5MiwzLjI4OTUsMTEuODMyNywwaDEzLjE2NzMgYzMuOTE0NiwzLjI4OTUsNy44MjkyLDMuMjg5NSwxMS44MzI3LDBjMy4yOTE4LDAsNi41ODM2LDIuNjY3MSw2LjU4MzYsNS45NTY2VjYxIi8+CiAgICA8cGF0aCBmaWxsPSIjQjFDQzMzIiBkPSJNMjYuNSw2MXYtMi41MzMzQzI2LjUsNTYsMjkuMDAxOCw1NCwzMS41MDM2LDU0YzIuOTc1MSwyLjQ2NjcsNS45NTAyLDIuNDY2Nyw4Ljk5MjksMCBjMi41MDE3LDAsNS4wMDM1LDIsNS4wMDM1LDQuNDY2N1Y2MSIvPgogIDwvZz4KICA8ZyBpZD0iaGFpciI+CiAgICA8cGF0aCBmaWxsPSIjQTU3OTM5IiBkPSJNMzcuMTI2OCwzOC45OTg2aDUuNDU3MWMzLjkxNDYsMy4yODk1LDcuODI5MiwzLjI4OTUsMTEuODMyNywwYzEuMjcwMSwwLDIuNTM4LDAuNDAwMiwzLjYxOSwxLjA3NjggbDAuMzQzOS0wLjE2MzhsMS43MDEyLTIuMDM3NGMxLjk1Ni0yLjIyMjYsMS41Nzc0LTUuOTA0MiwwLjQyMTYtOC42NjAyYy0xLjYwMDMtMy43MzQtMi4wNDQ4LTMuNzM0LTIuMzExNS04LjUzNDkgYy0wLjA4ODktMi43NTYxLTIuMjIyNi01LjA2NzYtNC45Nzg3LTUuMzM0M2MwLDAtMS42ODkyLTIuMDQ0OC01LjMzNDMtMi4wNDQ4Yy00LjI2NzUsMC04LjE3OTIsMi4zMTE1LTkuMTU3Miw1Ljk1NjYgYy0xLjA2NjgsMy43MzQsMC4xNzc5LDUuMjQ1My0wLjg4OSw4LjA5MDNjLTAuOTMzNSwyLjQwMDUtMi45MzEzLDMuNzM5MS0yLjkxMDUsNi42MjQ1YzAuMDA2OCwwLjk0MTcsMC43OTU1LDMuMDQ1NSwxLjQ2MjMsNC4wNDU3IEwzNy4xMjY4LDM4Ljk5ODZ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjQTU3OTM5IiBkPSJNMTMuOTI4NiwyMS4zOTAzYzAuNTMzNC03LjczNDcsNi40MDExLTcuODIzNiw5LjMzNS03LjM3OTFjMC4yNjY3LDAuMDg4OSwxLjA2NjksMCwxLjMzMzYsMCBjNS4zMzQzLTAuNzExMiw4LjAwMTQsNS4zMzQzLDguMDAxNCw4LjAwMTRjMCwwLjk3OCwwLjIyNTUsMy4zNjU1LTEuMTA4MSw0LjY5OTFjMCwwLTMuMjQ4My0zLjcyMTEtMy40MjYxLTUuODU0OSBjMCwwLTEwLjEzNTIsMy44MjI5LTEwLjg0NjQsMC41MzM0YzAsMC0wLjcxMTIsMi42NjcxLTEuMzMzNiwzLjM3ODRjMCwwLTAuMzI4OCwyLjA0NDgtMC4zMjg4LDIuNjY3MSBDMTUuNTU1OCwyNy40MzU5LDEzLjY2MTksMjQuNzY4NywxMy45Mjg2LDIxLjM5MDN6Ii8+CiAgICA8cGF0aCBmaWxsPSIjQTU3OTM5IiBkPSJNMzMuNjM1NSw0Mi4yNzE2YzAuNDY5NCwzLjM2MzEsNC40ODctMC44NzA2LDQuNDg3LTAuODcwNmMwLjU0OTEsMS41NzM3LDQuNDI1NCwzLjg2NzQsNC40MjU0LDMuODY3NCBjMS4wMzI0LTAuOTU1NywwLjUyNTktMi44NTI1LDAuMzcyMS0zLjUxMzZjLTAuNTEwNi0yLjcxMjctMy4wNzk0LTQuNTMyNS01LjgwNzktNC4xMTQ0Yy0wLjM0MzYsMC4wMjc2LTAuNjg4OCwwLjAyNzYtMS4wMzI0LDAgYy0yLjI3MDktMC4zMzY5LTYuMDMtMC4xNDgzLTcuMTIsNC42NDMzYy0wLjUzMTcsMi4zMzgyLDAuNjI0LDIuOTg0NCwwLjYyNCwyLjk4NDRTMzMuMzQ3Nyw0MC4yMDkzLDMzLjYzNTUsNDIuMjcxNnoiLz4KICA8L2c+CiAgPGcgaWQ9InNraW4iPgogICAgPHBhdGggZmlsbD0iI0ZDRUEyQiIgZD0iTTQxLjEyMDksMjYuODEzNWMwLDUuMzM0MywzLjM3ODQsOS4zMzUsNy4zNzkxLDkuMzM1czcuMzc5MS00LjAwMDcsNy4zNzkxLTkuMzM1IGMwLTMuMzc4NC0xLjMzMzYtNS4zMzQzLTQuMDAwNy04LjAwMTRjLTIuNjY3MSwyLjY2NzEtMTAuNjY4Niw2LjA0NTUtMTAuNjY4Niw3LjM3OTFMNDEuMTIwOSwyNi44MTM1TDQxLjEyMDksMjYuODEzNXoiLz4KICAgIDxwYXRoIGZpbGw9IiNGQ0VBMkIiIGQ9Ik0yOC4wNDU0LDIwLjg1NjljMCwwLTEwLjEzNTEsMy44MjI5LTEwLjg0NjQsMC41MzM0YzAsMC0wLjcxMTIsMi42NjcyLTEuMzMzNiwzLjM3ODQgYzAsMC0wLjMxODUsMS45ODM1LTAuMzI3MywyLjYzNWMwLjQ1ODUsNS4xNDgsMy44NDExLDkuMTk5Niw3Ljk0MjcsOS4xOTk2YzQuMjg2NCwwLDcuNzgyLTQuNDI2LDcuOTgwOS05LjkwMjggQzMxLjM1NzIsMjYuNTgwMSwyOC4yMjAzLDIyLjk1NTEsMjguMDQ1NCwyMC44NTY5eiIvPgogICAgPHBhdGggZmlsbD0iI0ZDRUEyQiIgZD0iTTM4LjEyMjgsNDEuNDAxYzAsMC00LjAxNzYsNC4yMzM3LTQuNDg3LDAuODcwNmMtMC4yNTc2LTEuODQ2Mi0zLjI5MzMsMi4wMDQ2LTMuOTI4MywyLjgzNCBjLTAuMDczOSwwLjMzNTYtMC4xMjMyLDAuNTY2OC0wLjEyMzIsMC41ODg4Yy0wLjE0MzcsMy43MzExLDIuNzU3OSw2Ljg3NTMsNi40ODg1LDcuMDMxYzMuNzMwNi0wLjE1NTcsNi42MzIzLTMuMjk5OSw2LjQ4ODYtNy4wMzEgYzAtMC4wMzAzLTAuMDU5NC0wLjIyNjMtMC4xNS0wLjUwODlDNDEuNzMyNyw0NC43NzA2LDM4LjYxMTgsNDIuODAyNSwzOC4xMjI4LDQxLjQwMXoiLz4KICA8L2c+CiAgPGcgaWQ9ImxpbmUiPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTMxLjUsMjUuNTY4OWMwLDAuMTgzOSwwLDAuMzY3OCwwLDAuNjQzNyBjMCw1LjcwMTItMy41ODYyLDEwLjM5MDgtOCwxMC4zOTA4cy04LTQuNjg5Ny04LTEwLjM5MDhjMC0wLjE4MzksMC0wLjM2NzgsMC0wLjY0MzciLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xMy45Mjg2LDIxLjM5MDMgYzAuNTMzNC03LjczNDcsNi40MDExLTcuODIzNiw5LjMzNS03LjM3OTFjMC4yNjY3LDAuMDg4OSwxLjA2NjksMCwxLjMzMzYsMGM1LjMzNDMtMC43MTEyLDguMDAxNCw1LjMzNDMsOC4wMDE0LDguMDAxNCBjMCwwLjk3OCwwLjIyNTUsMy4zNjU1LTEuMTA4MSw0LjY5OTFjMCwwLTMuMjQ4My0zLjcyMTEtMy40MjYxLTUuODU0OWMwLDAtMTAuMTM1MiwzLjgyMjktMTAuODQ2NCwwLjUzMzQgYzAsMC0wLjcxMTIsMi42NjcxLTEuMzMzNiwzLjM3ODRjMCwwLTAuMzI4OCwyLjA0NDgtMC4zMjg4LDIuNjY3MUMxNS41NTU4LDI3LjQzNTksMTMuNjYxOSwyNC43Njg3LDEzLjkyODYsMjEuMzkwM3oiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0zNS44NDA4LDMzLjYzNCBjLTAuMDMyMy0yLjIyODgsMS4xNzE3LTQuMTgwOSwxLjk5MDgtNi4yODdjMS4wNjY5LTIuODQ1LTAuMTc3OC00LjM1NjMsMC44ODktOC4wOTAzYzAuOTc4LTMuNjQ1MSw0Ljg4OTgtNS45NTY2LDkuMTU3Mi01Ljk1NjYgYzMuNjQ1MSwwLDUuMzM0MywyLjA0NDgsNS4zMzQzLDIuMDQ0OGMyLjc1NjEsMC4yNjY3LDQuODg5OCwyLjU3ODIsNC45Nzg3LDUuMzM0M2MwLjI2NjcsNC44MDA5LDAuNzExMiw0LjgwMDksMi4zMTE1LDguNTM0OSBjMS4wNjIxLDIuNTMyOCwwLjc3MjgsNS4zNjU5LTAuNzk5MSw3LjUzMzMiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik00MS4xMjA5LDI2LjgxMzUgYzAsNS4zMzQzLDMuMzc4NCw5LjMzNSw3LjM3OTEsOS4zMzVzNy4zNzkxLTQuMDAwNyw3LjM3OTEtOS4zMzVjMC0zLjM3ODQtMS4zMzM2LTUuMzM0My00LjAwMDctOC4wMDE0IGMtMi42NjcxLDIuNjY3MS0xMC42Njg2LDYuMDQ1NS0xMC42Njg2LDcuMzc5MUw0MS4xMjA5LDI2LjgxMzVMNDEuMTIwOSwyNi44MTM1eiIvPgogICAgPHBhdGggZD0iTTQ3LjI1LDI2LjVjMCwwLjcxNDMtMC41MzU3LDEuMjUtMS4yNSwxLjI1cy0xLjI1LTAuNTM1Ny0xLjI1LTEuMjVzMC41MzU3LTEuMjUsMS4yNS0xLjI1UzQ3LjI1LDI1Ljc4NTcsNDcuMjUsMjYuNSIvPgogICAgPHBhdGggZD0iTTUyLjI1LDI2LjVjMCwwLjcxNDMtMC41MzU3LDEuMjUtMS4yNSwxLjI1cy0xLjI1LTAuNTM1Ny0xLjI1LTEuMjVzMC41MzU3LTEuMjUsMS4yNS0xLjI1UzUyLjI1LDI1Ljc4NTcsNTIuMjUsMjYuNSIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTQ2LjYzMywzMS41MzMyIGMxLjE1NTgsMC42MjIzLDIuNTc4MiwwLjYyMjMsMy43MzQsMCIvPgogICAgPHBhdGggZD0iTTIyLjI1LDI2LjVjMCwwLjcxNDMtMC41MzU3LDEuMjUtMS4yNSwxLjI1cy0xLjI1LTAuNTM1Ny0xLjI1LTEuMjVzMC41MzU3LTEuMjUsMS4yNS0xLjI1UzIyLjI1LDI1Ljc4NTcsMjIuMjUsMjYuNSIvPgogICAgPHBhdGggZD0iTTI3LjI1LDI2LjVjMCwwLjcxNDMtMC41MzU3LDEuMjUtMS4yNSwxLjI1cy0xLjI1LTAuNTM1Ny0xLjI1LTEuMjVzMC41MzU3LTEuMjUsMS4yNS0xLjI1UzI3LjI1LDI1Ljc4NTcsMjcuMjUsMjYuNSIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTIxLjYzMywzMS41MzMyIGMxLjE1NTgsMC42MjIzLDIuNTc4MiwwLjYyMjMsMy43MzQsMCIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS42IiBkPSJNMjYuNTAwMyw2MC4ydi0xLjczMzMgQzI2LjUwMDMsNTYsMjkuMDAyMSw1NCwzMS41MDM5LDU0YzIuOTc1MSwyLjQ2NjcsNS45NTAyLDIuNDY2Nyw4Ljk5MjksMGMyLjUwMTcsMCw1LjAwMzUsMiw1LjAwMzUsNC40NjY3VjYwLjIiLz4KICAgIDxwYXRoIGQ9Ik0zOC43OTgzLDQ1LjcwMTVjMC4wMzMzLDAuNDk1OC0wLjM0MTcsMC45MjQ3LTAuODM3NywwLjk1OGMtMC40OTU5LDAuMDMzMy0wLjkyNDktMC4zNDE3LTAuOTU4Mi0wLjgzNzUgczAuMzQxNy0wLjkyNDcsMC44Mzc3LTAuOTU4YzAuMDIwMS0wLjAwMTQsMC4wNDAyLTAuMDAyLDAuMDYwNC0wLjAwMkMzOC4zODAxLDQ0Ljg0NjUsMzguNzgxOCw0NS4yMjIxLDM4Ljc5ODMsNDUuNzAxNXoiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNiIgZD0iTTM0LjY2NDIsNDkuMTg1NyBjMC43NzQ5LDAuNjQyNSwxLjg5NzQsMC42NDI1LDIuNjcyMywwIi8+CiAgICA8cGF0aCBkPSJNMzQuMTAwMSw0NC44NjJjMC4wMjAxLDAsMC4wNDAzLDAuMDAwNywwLjA2MDQsMC4wMDJjMC40OTU5LDAuMDMzMywwLjg3MSwwLjQ2MjIsMC44Mzc3LDAuOTU4IHMtMC40NjIzLDAuODcwNy0wLjk1ODIsMC44Mzc1Yy0wLjQ5NTktMC4wMzMzLTAuODcxLTAuNDYyMi0wLjgzNzctMC45NThDMzMuMjE4OCw0NS4yMjIxLDMzLjYyMDUsNDQuODQ2NSwzNC4xMDAxLDQ0Ljg2MnoiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjEuNiIgZD0iTTQyLjU0OTYsNDUuMjY4MyBjMC4wMDc4LDAuMTQxLDAuMDExNywwLjI4MywwLjAxMTgsMC40MjYxYzAuMTQzNywzLjczMTEtMi43NTgsNi44NzUzLTYuNDg4Niw3LjAzMWMtMy43MzA2LTAuMTU1Ny02LjYzMjItMy4yOTk5LTYuNDg4NS03LjAzMSBjMC0wLjA5NTIsMC4wMDE3LTAuMTg5OSwwLjAwNTItMC4yODQxIi8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjYiIGQ9Ik0zMy42MzU4LDQyLjI3MTYgYzAuNDY5NCwzLjM2MzEsNC40ODctMC44NzA2LDQuNDg3LTAuODcwNmMwLjU0OTEsMS41NzM3LDQuNDI1NCwzLjg2NzQsNC40MjU0LDMuODY3NGMxLjAzMjQtMC45NTU3LDAuNTI1OS0yLjg1MjUsMC4zNzIxLTMuNTEzNiBjLTAuNTEwNi0yLjcxMjctMy4wNzk0LTQuNTMyNS01LjgwNzktNC4xMTQ0Yy0wLjM0MzYsMC4wMjc2LTAuNjg4OCwwLjAyNzYtMS4wMzI0LDBjLTIuMjcwOS0wLjMzNjktNi4wMy0wLjE0ODMtNy4xMiw0LjY0MzMgYy0wLjUzMTcsMi4zMzgyLDAuNjI0LDIuOTg0NCwwLjYyNCwyLjk4NDRTMzMuMzQ4LDQwLjIwOTMsMzMuNjM1OCw0Mi4yNzE2eiIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNNDYuMjU2NSw0MS4xMTg4YzIuNjk3MywwLjg0ODEsNS40MDc2LDAuMTQxMyw4LjE2MDEtMi4xMjAyYzMuMjkxOCwwLDYuNTgzNiwyLjY2NzEsNi41ODM2LDUuOTU2NlY2MCIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMTEuMDAwMyw2MFY0NC45NTUyYzAtMy4yODk1LDMuMjkxOC01Ljk1NjYsNi41ODM2LTUuOTU2NmMyLjY4MjIsMi4yNTM5LDUuMzY0MywyLjk2MzQsOC4wNzUxLDIuMTI4OCIvPgogIDwvZz4KPC9zdmc+", "chapters": ["bio-dihybrid-sexlinked"], "provenance": "verified"}, {"id": "om-1FAC0", "type": "illustration", "title": "Anatomisches Organ", "alt": "Organ-Symbol", "caption": "Jeder Darmabschnitt hat sein eigenes Enzym.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-1FAC0/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-1FAC0.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxnIGlkPSJjb2xvciI+CiAgICA8ZyBpZD0iXzYwMFlsQyI+CiAgICAgIDxnPgogICAgICAgIDxwYXRoIGZpbGw9IiNFQTVBNDciIGQ9Ik0zOC40NjM3LDE0LjcwM2wwLjQxMjMsMy4xMjczbDAuNDAyNiwwLjA1MzZsMS4zNjc0LTIuNTY0OGwyLjE1NjEsMC43NjEzIGMtMC4xNCwxLjU1OC0xLjc0LDQuMjMxMSwxLjA3LDUuMjU4OGMtMS44MzcyLDAuNjE4My0yLjgxMTUsMS4yNDIyLTQuNjMyMy0wLjAxNTJjLTEuMDQ4MS0wLjcyMzgtMi42MjcyLDAuMDc5My0zLjI0MTgsMC4zNCBjLTAuNzU0MiwwLjMxOTQtMS42MzY0LDAuNjU4Ni0xLjQ4MzYsMS45MzQ2YzAuMDQxNSwwLjM0NzIsMC4zODE2LDAuNjgzNi0wLjQyMTcsMS43MTg5IGMtMS41OTUyLDEuNzg5NC0yLjczLDEuNjA3MS00LjcyNTksNS4xOTZjLTIuNDQ3NS0zLjIzNjMtMS4xNzg5LTkuOTI0LDIuOTE0OS0xMi4zMDVsLTAuNDktMS45NDIzbDIuMTA2MS0wLjkxOTVsMS42NDkzLDIuNTk0IGwwLjkzMTgtMy4yMzc3SDM4LjQ2Mzd6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI0QyMkYyNyIgZD0iTTM3Ljg5OTgsNTEuMzJjMS43NjA3LTMuNzQzLDIuNDcyNi03Ljg5MzUsMi4wNi0xMi4wMDkzYy0wLjM3My0zLjU5ODItMC4xNzU4LTMuMzA2NSwwLjIxNjQtNC44ODcyIGMyLjg0NjksMi4yNzkxLDYuNDA5LDEuODg0LDkuMzE4LDEuMTY5NGMwLjgzMjIsMS4zMjc2LDEuMDk5OCwyLjkzMjQsMC43NDM0LDQuNDU4MiBjLTAuODc3OSw1LjQ5NDEtMy40Mjg2LDEwLjU4MzktNy4zMDQ1LDE0LjU3NTZjLTMuMjE1OCwzLjMwNjgtNi40MzU4LDMuNjMyNS0xMC4wODA3LDAuODQgYy01LjEzMTQtMy45MzEyLTkuNDU3Ni04LjU0LTExLjE2MzctMTUuMDU1NmMtMC45Mjc0LTMuNTQxOSwxLjk0MS05LjEwNDEsNS4zNTQxLTEwLjQwMyBjMC44MDQtMC4zMzMzLDEuNzMwNC0wLjEzMjEsMi4zMjM3LDAuNTA0N2MxLjgyMTcsMS43Mjk3LDMuMjA2NCwzLjg2NzMsNC4wNCw2LjIzN2MwLjYzLDEuNTYxNiwxLjE2NDMsMy4xNjIsMS43ODM3LDQuODYwNyBjLTIuOTM3NC04LjMwMzEtNC4yMTQxLTkuNzU3OC01LjgyNDItMTEuMDk3N2MxLjAxNjMtMi40NjA2LDMuODQ0LTQuMzM4OCw0LjcyNTktNS4xOTYgYzAuMzQ1My0wLjM3MjYsMC41MjQyLTAuODY5OCwwLjQ5NTQtMS4zNzdjLTAuMzI3Ny0wLjgxNjIsMC4wNjg0LTEuNzQzNSwwLjg4NDYtMi4wNzExIGMwLjA2MzItMC4wMjU0LDAuMTI4LTAuMDQ2NywwLjE5MzktMC4wNjM4YzEuMzU4NC0wLjU2NzMsMi42NTQxLTEuMzM2Niw0LjE4NDEtMC4wNzZjMC43OTQ0LDAuMzg3NSwxLjcxMzYsMC40MjkzLDIuNTQsMC4xMTU3IGMyLjE5MzYtMC43MDA5LDQuMzE5My0xLjYxNDcsNi4xOTg3LTIuMzM5M2wyLjUxNDEsNS4wODMxYy0xLjUzNiwxLjA2NTYtMy40MjQ2LDIuMjkwNS01LjIxNSwzLjY0NTIgYy0xLjQwMjIsMS4wMzI1LTIuNzE5NywyLjE3NTItMy45NCwzLjQxNzNjLTEuODA2MywxLjgwODEtMi41OTQ0LDQuMzk2NC0yLjEwMjQsNi45MDQzYzAuNjg3LDQuMTI3OCwwLjA4NDUsOC4zNjctMS43MjUzLDEyLjE0IEMzOC4wMjg5LDUwLjg5NTcsMzcuOTcyNiw1MS4xMTE2LDM3Ljg5OTgsNTEuMzJ6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI0VBNUE0NyIgZD0iTTI5LjM2NjUsMzAuNTEzMWMtMi45OTItMi41Nzk0LTYuNDY1NywzLjAzMjEtNy40MTA1LDUuNzU0NGMtMC45ODEzLTEuNjkwMy0xLjI5NTEtMy42ODYzLTAuODgtNS41OTYyIGMxLjA4ODctMy45ODQ3LDIuMjU5My03Ljk0NywzLjM1MjktMTEuNzY1N2g2Ljg2ODZjLTAuNjU5MSwwLjU3MDUtMS4yMjQ1LDEuMjQwOS0xLjY3NTUsMS45ODY5IGMtMS40NTQzLDIuMzk5NC0xLjg1MDcsNS4yOTM3LTEuMDk1Myw3Ljk5NThDMjguNzQxMSwyOS40NjEzLDI5LjAyMywzMC4wMDY4LDI5LjM2NjUsMzAuNTEzMXoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjRUE1QTQ3IiBkPSJNNDUuODg4MywyOC4yMzM5YzEuNDU2OSwxLjQ2MTMsMi4yODQsMy40MzQ4LDIuMzA0Myw1LjQ5ODJjMC4wMDE0LDAuNDA2NSwwLjExMjIsMi4xMzI5LTAuMjQ3NCwyLjE4ODQgYy0xLjg5MTksMC4zOTM1LTMuODUzOCwwLjI4NS01LjY5MDctMC4zMTQ4Yy0yLjM4ODgtMC44NzkzLTIuMDk1OS0xLjc4MzktMS4wMzY0LTMuMDkgQzQyLjU5OTMsMzAuOTA4MSw0NC4xNjcxLDI5LjQ3MDcsNDUuODg4MywyOC4yMzM5eiIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgPC9nPgogIDxnIGlkPSJsaW5lIj4KICAgIDxnIGlkPSJfNjAwWWxDLTIiPgogICAgICA8Zz4KICAgICAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMzguNDYzNywxNC43MDMgbDAuNDEyMywzLjEyNzNsMC40MDI2LDAuMDUzNmwxLjM2NzQtMi41NjQ4bDIuMTU2MSwwLjc2MTNjLTAuMTQsMS41NTgtMS43NCw0LjIzMTEsMS4wNyw1LjI1ODggYy0xLjgzNzIsMC42MTgzLTIuODExNSwxLjI0MjItNC42MzIzLTAuMDE1MmMtMS4wNDgxLTAuNzIzOC0yLjYyNzIsMC4wNzkzLTMuMjQxOCwwLjM0IGMtMC43NTQyLDAuMzE5NC0xLjYzNjQsMC42NTg2LTEuNDgzNiwxLjkzNDZjMC4wNDE1LDAuMzQ3MiwwLjM4MTYsMC42ODM2LTAuNDIxNywxLjcxODkgYy0xLjU5NTIsMS43ODk0LTIuNzMsMS42MDcxLTQuNzI1OSw1LjE5NmMtMi40NDc1LTMuMjM2My0xLjE3ODktOS45MjQsMi45MTQ5LTEyLjMwNWwtMC40OS0xLjk0MjNsMi4xMDYxLTAuOTE5NWwxLjY0OTMsMi41OTQgbDAuOTMxOC0zLjIzNzdIMzguNDYzN3oiLz4KICAgICAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMzcuODk5OCw1MS4zMiBjMS43NjA3LTMuNzQzLDIuNDcyNi03Ljg5MzUsMi4wNi0xMi4wMDkzYy0wLjM3My0zLjU5ODItMC4xNzU4LTMuMzA2NSwwLjIxNjQtNC44ODcyYzIuODQ2OSwyLjI3OTEsNi40MDksMS44ODQsOS4zMTgsMS4xNjk0IGMwLjgzMjIsMS4zMjc2LDEuMDk5OCwyLjkzMjQsMC43NDM0LDQuNDU4MmMtMC44Nzc5LDUuNDk0MS0zLjQyODYsMTAuNTgzOS03LjMwNDUsMTQuNTc1NiBjLTMuMjE1OCwzLjMwNjgtNi40MzU4LDMuNjMyNS0xMC4wODA3LDAuODRjLTUuMTMxNC0zLjkzMTItOS40NTc2LTguNTQtMTEuMTYzNy0xNS4wNTU2IGMtMC45Mjc0LTMuNTQxOSwxLjk0MS05LjEwNDEsNS4zNTQxLTEwLjQwM2MwLjgwNC0wLjMzMzMsMS43MzA0LTAuMTMyMSwyLjMyMzcsMC41MDQ3YzEuODIxNywxLjcyOTcsMy4yMDY0LDMuODY3Myw0LjA0LDYuMjM3IGMwLjYzLDEuNTYxNiwxLjE2NDMsMy4xNjIsMS43ODM3LDQuODYwN2MtMi45Mzc0LTguMzAzMS00LjIxNDEtOS43NTc4LTUuODI0Mi0xMS4wOTc3YzEuMDE2My0yLjQ2MDYsMy44NDQtNC4zMzg4LDQuNzI1OS01LjE5NiBjMC4zNDUzLTAuMzcyNiwwLjUyNDItMC44Njk4LDAuNDk1NC0xLjM3N2MtMC4zMjc3LTAuODE2MiwwLjA2ODQtMS43NDM1LDAuODg0Ni0yLjA3MTEgYzAuMDYzMi0wLjAyNTQsMC4xMjgtMC4wNDY3LDAuMTkzOS0wLjA2MzhjMS4zNTg0LTAuNTY3MywyLjY1NDEtMS4zMzY2LDQuMTg0MS0wLjA3NmMwLjc5NDQsMC4zODc1LDEuNzEzNiwwLjQyOTMsMi41NCwwLjExNTcgYzIuMTkzNi0wLjcwMDksNC4zMTkzLTEuNjE0Nyw2LjE5ODctMi4zMzkzbDIuNTE0MSw1LjA4MzFjLTEuNTM2LDEuMDY1Ni0zLjQyNDYsMi4yOTA1LTUuMjE1LDMuNjQ1MiBjLTEuNDAyMiwxLjAzMjUtMi43MTk3LDIuMTc1Mi0zLjk0LDMuNDE3MyIvPgogICAgICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0yOS4zNjY1LDMwLjUxMzEgYy0yLjk5Mi0yLjU3OTQtNi40NjU3LDMuMDMyMS03LjQxMDUsNS43NTQ0Yy0wLjk4MTMtMS42OTAzLTEuMjk1MS0zLjY4NjMtMC44OC01LjU5NjIgYzEuMDg4Ny0zLjk4NDcsMi4yNTkzLTcuOTQ3LDMuMzUyOS0xMS43NjU3aDYuODY4NmMtMC42NTkxLDAuNTcwNS0xLjIyNDUsMS4yNDA5LTEuNjc1NSwxLjk4NjkgYy0xLjQ1NDMsMi4zOTk0LTEuODUwNyw1LjI5MzctMS4wOTUzLDcuOTk1OEMyOC43NDExLDI5LjQ2MTMsMjkuMDIzLDMwLjAwNjgsMjkuMzY2NSwzMC41MTMxeiIvPgogICAgICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik00NS44ODgzLDI4LjIzMzkgYzEuNDU2OSwxLjQ2MTMsMi4yODQsMy40MzQ4LDIuMzA0Myw1LjQ5ODJjMC4wMDE0LDAuNDA2NSwwLjExMjIsMi4xMzI5LTAuMjQ3NCwyLjE4ODQgYy0xLjg5MTksMC4zOTM1LTMuODUzOCwwLjI4NS01LjY5MDctMC4zMTQ4Yy0yLjM4ODgtMC44NzkzLTIuMDk1OS0xLjc4MzktMS4wMzY0LTMuMDkgQzQyLjU5OTMsMzAuOTA4MSw0NC4xNjcxLDI5LjQ3MDcsNDUuODg4MywyOC4yMzM5eiIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4=", "chapters": ["bio-digestion"], "provenance": "verified"}, {"id": "om-1F9E0", "type": "illustration", "title": "Gehirn", "alt": "Gehirn", "caption": "Der Reflexbogen umgeht das Gehirn, deshalb ist er schnell.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-1F9E0/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-1F9E0.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiPgogICAgPGxpbmUgeDE9IjE2IiB4Mj0iMjUuODc1IiB5MT0iMzUiIHkyPSIzNSIgZmlsbD0iI2VhNWE0NyIgc3Ryb2tlPSJub25lIi8+CiAgICA8cGF0aCBmaWxsPSIjZWE1YTQ3IiBzdHJva2U9Im5vbmUiIGQ9Ik0yNS44NzUsMzVjMy40MTY3LDAsNC43NS0yLjkxNjcsNC43NS02LjE2NjciLz4KICAgIDxsaW5lIHgxPSIxNiIgeDI9IjE5Ljc1IiB5MT0iNDUuNSIgeTI9IjQ1LjUiIGZpbGw9IiNlYTVhNDciIHN0cm9rZT0ibm9uZSIvPgogICAgPGxpbmUgeDE9IjM1LjI5OTciIHgyPSIzNS4yOTk3IiB5MT0iNDUuNSIgeTI9IjM5LjQzNzUiIGZpbGw9IiNlYTVhNDciIHN0cm9rZT0ibm9uZSIvPgogICAgPHBhdGggZmlsbD0iI2VhNWE0NyIgc3Ryb2tlPSJub25lIiBkPSJNMzUuMjk5NywzOS40Mzc1YzAtMi4yNDU1LDEuMjAwMy01LjI1LDUuMDc1Ni01LjI1Ii8+CiAgICA8bGluZSB4MT0iNTguNDU4MyIgeDI9IjQ5Ljg3NSIgeTE9IjM0LjU0MTciIHkyPSIzNC41NDE3IiBmaWxsPSIjZWE1YTQ3IiBzdHJva2U9Im5vbmUiLz4KICAgIDxwYXRoIGZpbGw9IiNGRkE3QzAiIHN0cm9rZT0ibm9uZSIgZD0iTTQwLjM3NSw0NS41YzAsMCwwLjE2NDIsMTAuNS03Ljk1ODMsMTAuNUgxNmMtNy4yMDgzLDAtNy42NjY3LTEwLjUsMC0xMC41QzguNzkxNyw0NS41LDguMzMzMywzNSwxNiwzNSBjLTguMTY2Ny03LjI1LDEuODc1LTEzLjU2MjUsNi41LTguNjg3NWMtNC43OTktNi42MjUsNS4zNzUtMTAuMzEyNSw4Ljg3NS01QzMwLjk2MjcsMTYsMzYuMjIyMiwxNS4wNDE3LDQxLjEwMDMsMTkuMDI0IGwtMC40MzM2LDAuMzUxYzIuMzc1LTIuMzc1LDEwLjE3NzYtMS4wODMzLDEwLjE3NzYsNS4zMTQxbC0yLjIxOTIsMS42MjM0YzYuODY0Ni02Ljg2NDYsMTQuMjA4Myw0LjE4NzUsOC41LDguMjI5MmgxLjMzMzMgYzQuNzUsMCw1LjI5MTcsMTAuOTU4My0xLjMzMzMsMTAuOTU4M0gyOS4yOTE3Ii8+CiAgICA8cGF0aCBmaWxsPSIjZWE1YTQ3IiBzdHJva2U9Im5vbmUiIGQ9Ik00MC42NjY3LDE5LjM3NWMtMi40MTY3LDIuNDE2Ny0wLjI4MjIsMy4xNzgyLTQuMjcwNyw3LjE2NjciLz4KICA8L2c+CiAgPGcgaWQ9ImhhaXIiLz4KICA8ZyBpZD0ic2tpbiIvPgogIDxnIGlkPSJza2luLXNoYWRvdyIvPgogIDxnIGlkPSJsaW5lIj4KICAgIDxsaW5lIHgxPSIxNiIgeDI9IjI1Ljg3NSIgeTE9IjM1IiB5Mj0iMzUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMjUuODc1LDM1YzMuNDE2NywwLDQuNzUtMi45MTY3LDQuNzUtNi4xNjY3Ii8+CiAgICA8bGluZSB4MT0iMTYiIHgyPSIxOS43NSIgeTE9IjQ1LjUiIHkyPSI0NS41IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSIzNS4yOTk3IiB4Mj0iMzUuMjk5NyIgeTE9IjQ1LjUiIHkyPSIzOS40Mzc1IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTM1LjI5OTcsMzkuNDM3NWMwLTIuMjQ1NSwxLjIwMDMtNS4yNSw1LjA3NTYtNS4yNSIvPgogICAgPGxpbmUgeDE9IjU4LjQ1ODMiIHgyPSI0OS44NzUiIHkxPSIzNC41NDE3IiB5Mj0iMzQuNTQxNyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik00MC4zNzUsNDUuNWMwLDAsMC4xNjQyLDEwLjUtNy45NTgzLDEwLjVIMTZjLTcuMjA4MywwLTcuNjY2Ny0xMC41LDAtMTAuNUM4Ljc5MTcsNDUuNSw4LjMzMzMsMzUsMTYsMzUgYy04LjE2NjctNy4yNSwxLjg3NS0xMy41NjI1LDYuNS04LjY4NzVjLTQuNzk5LTYuNjI1LDUuMzc1LTEwLjMxMjUsOC44NzUtNUMzMC45NjI3LDE2LDM2LjIyMjIsMTUuMDQxNyw0MS4xMDAzLDE5LjAyNCBsLTAuNDMzNiwwLjM1MWMyLjM3NS0yLjM3NSwxMC4xNzc2LTEuMDgzMywxMC4xNzc2LDUuMzE0MWwtMi4yMTkyLDEuNjIzNGM2Ljg2NDYtNi44NjQ2LDE0LjIwODMsNC4xODc1LDguNSw4LjIyOTJoMS4zMzMzIGM0Ljc1LDAsNS4yOTE3LDEwLjk1ODMtMS4zMzMzLDEwLjk1ODNIMjkuMjkxNyIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNNDAuNjY2NywxOS4zNzVjLTIuNDE2NywyLjQxNjctMC4yODIyLDMuMTc4Mi00LjI3MDcsNy4xNjY3Ii8+CiAgPC9nPgo8L3N2Zz4=", "chapters": ["bio-nervous-system"], "provenance": "verified"}, {"id": "om-269B", "type": "illustration", "title": "Atomsymbol", "alt": "Atommodell", "caption": "Periode gleich Schale, Hauptgruppe gleich Aussenelektronen.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-269B/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-269B.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiPgogICAgPHBhdGggZmlsbD0iIzkyRDNGNSIgc3Ryb2tlPSIjOTJEM0Y1IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMS44IiBkPSJNMjguMTI3MSwyMi43NjM2IGMtMC4zOTUyLDIuMzEyNi0wLjY4NTcsNC43OTk1LTAuODQ4Myw3LjQyNTljLTMuMzQ2OSwxLjg3MS02LjM0NTEsMy44NDY2LTguODY2OSw1LjgxMDUgYy02LjE1OTEtNC43OTk1LTkuNDU5Ni05LjUyOTMtOC4wNzY3LTEyLjQzNDZDMTEuOTA0MSwyMC4yNjUxLDE5LjAyNzcsMjAuMTYwNCwyOC4xMjcxLDIyLjc2MzZ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjOTJEM0Y1IiBzdHJva2U9IiM5MkQzRjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxLjgiIGQ9Ik02Mi42NDE3LDQ4LjQzNDYgYy0xLjU2ODgsMy4zMDA0LTguNjkyNiwzLjQwNS0xNy44MDM1LDAuODAxOWMtMi42MzgtMC43NTU0LTUuNDUwNC0xLjc0MzItOC4zNDQtMi45NTE4IGMtMS4zMzYzLTAuNTQ2Mi0yLjY4NDQtMS4xMzg4LTQuMDQ0MS0xLjc4OTZjLTEuODAxMy0wLjg1OTktMy41MzI5LTEuNzU0OC01LjE3MTMtMi42NzI4IGMtMC4xMjgtMS44ODI2LTAuMTk3Ni0zLjgyMzMtMC4xOTc2LTUuODIyMmMwLTEuOTg3MiwwLjA2OTctMy45Mzk2LDAuMTk3Ni01LjgxMDVjMS42Mzg1LTAuOTE4LDMuMzctMS44MTI5LDUuMTcxMy0yLjY3MjggYzEuMzU5Ny0wLjY1MDgsMi43MDc4LTEuMjU1MSw0LjA0NDEtMS44MDEzYzEuMzI1LDAuNTU3OCwyLjY3MjksMS4xNTA1LDQuMDMyNSwxLjgwMTNjMS44MDEzLDAuODQ4MywzLjUyMTIsMS43NDMyLDUuMTU5OCwyLjY2MTIgYzAuMTI3OCwxLjg4MjYsMC4xOTc2LDMuODIzNCwwLjE5NzYsNS44MjIyYzAsMS45OTg5LTAuMDY5OCwzLjk1MTItMC4xOTc2LDUuODMzOGMzLjM1ODUtMS44ODI2LDYuMzU2OC0zLjg1ODIsOC44Nzg1LTUuODMzOCBDNjAuNzI0Myw0MC43OTk1LDY0LjAyNDcsNDUuNTI5Myw2Mi42NDE3LDQ4LjQzNDZ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjOTJEM0Y1IiBzdHJva2U9IiM5MkQzRjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxLjgiIGQ9Ik00NC44MzgyLDQ5LjIzNjQgYy0xLjU0NTYsOS4zNDMzLTQuNzA2NSwxNS43MjMzLTguMzU1NiwxNS43MjMzYy0zLjY0ODksMC02LjgwOTgtNi4zOC04LjM1NTUtMTUuNzIzM2MyLjY0OTYtMC43NTU0LDUuNDYxOS0xLjc0MzIsOC4zNjcxLTIuOTUxOCBDMzkuMzg3OSw0Ny40OTMzLDQyLjIwMDIsNDguNDgxLDQ0LjgzODIsNDkuMjM2NHoiLz4KICAgIDxwYXRoIGZpbGw9IiM5MkQzRjUiIHN0cm9rZT0iIzkyRDNGNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjEuOCIgZD0iTTQ0LjgzODIsMjIuNzYzNiBjLTIuNjM4LDAuNzU1NC01LjQ1MDQsMS43NDMyLTguMzQ0LDIuOTUxOGMtMi45MDUzLTEuMjA4Ni01LjcxNzUtMi4xOTY0LTguMzY3MS0yLjk1MTggYzEuNTU3My05LjM0MzMsNC43MDY2LTE1LjcyMzMsOC4zNTU1LTE1LjcyMzNDNDAuMTMxOCw3LjA0MDIsNDMuMjgxMSwxMy40MjAyLDQ0LjgzODIsMjIuNzYzNnoiLz4KICAgIDxwYXRoIGZpbGw9IiM5MkQzRjUiIHN0cm9rZT0iIzkyRDNGNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0zNi40OTQyLDI1LjcxNTQgYy0xLjMzNjMsMC41NDYyLTIuNjg0NCwxLjE1MDUtNC4wNDQxLDEuODAxM2MtMS44MDEzLDAuODU5OS0zLjUzMjksMS43NTQ4LTUuMTcxMywyLjY3MjggYzAuMTYyNi0yLjYyNjQsMC40NTMxLTUuMTEzMywwLjg0ODMtNy40MjU5QzMwLjc3NjcsMjMuNTE5LDMzLjU4OSwyNC41MDY3LDM2LjQ5NDIsMjUuNzE1NHoiLz4KICAgIDxwYXRoIGZpbGw9IiM5MkQzRjUiIHN0cm9rZT0iIzkyRDNGNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik00NS44ODQyLDM2IGMwLDEuOTk4OS0wLjA2OTgsMy45NTEyLTAuMTk3Niw1LjgzMzhjLTAuMTYyNywyLjYxNDctMC40NTMyLDUuMTAxNi0wLjg0ODMsNy40MDI2Yy0yLjYzOC0wLjc1NTQtNS40NTA0LTEuNzQzMi04LjM0NC0yLjk1MTggYy0xLjMzNjMtMC41NDYyLTIuNjg0NC0xLjEzODgtNC4wNDQxLTEuNzg5NmMtMS44MDEzLTAuODU5OS0zLjUzMjktMS43NTQ4LTUuMTcxMy0yLjY3MjggYy0wLjEyOC0xLjg4MjYtMC4xOTc2LTMuODIzMy0wLjE5NzYtNS44MjIyYzAtMS45ODcyLDAuMDY5Ny0zLjkzOTYsMC4xOTc2LTUuODEwNWMxLjYzODUtMC45MTgsMy4zNy0xLjgxMjksNS4xNzEzLTIuNjcyOCBjMS4zNTk3LTAuNjUwOCwyLjcwNzgtMS4yNTUxLDQuMDQ0MS0xLjgwMTNjMS4zMjUsMC41NTc4LDIuNjcyOSwxLjE1MDUsNC4wMzI1LDEuODAxM2MxLjgwMTMsMC44NDgzLDMuNTIxMiwxLjc0MzIsNS4xNTk4LDIuNjYxMiBDNDUuODE0NCwzMi4wNjA0LDQ1Ljg4NDIsMzQuMDAxMiw0NS44ODQyLDM2eiIvPgogICAgPHBhdGggZmlsbD0iIzkyRDNGNSIgc3Ryb2tlPSIjOTJEM0Y1IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTM2LjQ5NDIsNDYuMjg0NiBjLTIuOTA1MywxLjIwODYtNS43MTc1LDIuMTk2NC04LjM2NzEsMi45NTE4Yy0wLjM5NTItMi4zMDEtMC42ODU3LTQuNzk5NS0wLjg0ODMtNy40MTQzYzEuNjM4NSwwLjkxOCwzLjM3LDEuODEyOSw1LjE3MTMsMi42NzI4IEMzMy44MDk4LDQ1LjE0NTgsMzUuMTU3OSw0NS43Mzg1LDM2LjQ5NDIsNDYuMjg0NnoiLz4KICAgIDxwYXRoIGZpbGw9IiM5MkQzRjUiIHN0cm9rZT0iIzkyRDNGNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjEuOCIgZD0iTTI4LjEyNzEsNDkuMjM2NCBjLTkuMTExLDIuNjAzMS0xNi4yMjMsMi40ODY5LTE3Ljc5Mi0wLjgwMTlDOC45NTIzLDQ1LjUyOTMsMTIuMjUyOCw0MC43OTk1LDE4LjQxMTksMzZjMi41MjE4LDEuOTc1Niw1LjUyLDMuOTUxMiw4Ljg2NjksNS44MjIyIEMyNy40NDEzLDQ0LjQzNjksMjcuNzMxOSw0Ni45MzU0LDI4LjEyNzEsNDkuMjM2NHoiLz4KICAgIDxwYXRoIGZpbGw9IiM5MkQzRjUiIHN0cm9rZT0iIzkyRDNGNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0yNy4wODEyLDM2IGMwLDEuOTk4OSwwLjA2OTcsMy45Mzk2LDAuMTk3Niw1LjgyMjJjLTMuMzQ2OS0xLjg3MS02LjM0NTEtMy44NDY2LTguODY2OS01LjgyMjJjMi41MjE4LTEuOTY0LDUuNTItMy45Mzk2LDguODY2OS01LjgxMDUgQzI3LjE1MDgsMzIuMDYwNCwyNy4wODEyLDM0LjAxMjgsMjcuMDgxMiwzNnoiLz4KICAgIDxwYXRoIGZpbGw9IiM5MkQzRjUiIHN0cm9rZT0iIzkyRDNGNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik00NS42ODY2LDMwLjE3NzggYy0xLjYzODYtMC45MTgtMy4zNTg1LTEuODEyOS01LjE1OTgtMi42NjEyYy0xLjM1OTYtMC42NTA4LTIuNzA3NS0xLjI0MzUtNC4wMzI1LTEuODAxM2MyLjg5MzYtMS4yMDg2LDUuNzA2LTIuMTk2NCw4LjM0NC0yLjk1MTggQzQ1LjIzMzMsMjUuMDY0Niw0NS41MjM4LDI3LjU2MzEsNDUuNjg2NiwzMC4xNzc4eiIvPgogICAgPHBhdGggZmlsbD0iIzkyRDNGNSIgc3Ryb2tlPSIjOTJEM0Y1IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMS44IiBkPSJNNTQuNTY1MSwzNiBjLTIuNTIxNy0xLjk2NC01LjUyLTMuOTM5Ni04Ljg3ODUtNS44MjIyYy0wLjE2MjctMi42MTQ3LTAuNDUzMi01LjExMzItMC44NDgzLTcuNDE0MyBjOS4xMTA5LTIuNjAzMSwxNi4yMzQ2LTIuNDk4NSwxNy44MDM1LDAuODAxOUM2NC4wMjQ3LDI2LjQ3MDcsNjAuNzI0MywzMS4yMDA1LDU0LjU2NTEsMzZ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjOTJEM0Y1IiBzdHJva2U9IiM5MkQzRjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNNDUuNjg2Niw0MS44MzM4IGMwLjEyNzgtMS44ODI2LDAuMTk3Ni0zLjgzNDksMC4xOTc2LTUuODMzOGMwLTEuOTk4OC0wLjA2OTgtMy45Mzk2LTAuMTk3Ni01LjgyMjJjMy4zNTg1LDEuODgyNiw2LjM1NjgsMy44NTgyLDguODc4NSw1LjgyMjIgQzUyLjA0MzQsMzcuOTc1Niw0OS4wNDUxLDM5Ljk1MTIsNDUuNjg2Niw0MS44MzM4eiIvPgogICAgPHBhdGggZmlsbD0iIzkyRDNGNSIgc3Ryb2tlPSIjOTJEM0Y1IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTQ1Ljg4NDIsMzYgYzAsMS45OTg5LTAuMDY5OCwzLjk1MTItMC4xOTc2LDUuODMzOGMtMS42Mzg2LDAuOTE4LTMuMzU4NSwxLjgxMjktNS4xNTk4LDIuNjYxMmMtMS4zNTk2LDAuNjM5MS0yLjcwNzUsMS4yNDM1LTQuMDMyNSwxLjc4OTYgYy0xLjMzNjMtMC41NDYyLTIuNjg0NC0xLjEzODgtNC4wNDQxLTEuNzg5NmMtMS44MDEzLTAuODU5OS0zLjUzMjktMS43NTQ4LTUuMTcxMy0yLjY3MjggYy0wLjEyOC0xLjg4MjYtMC4xOTc2LTMuODIzMy0wLjE5NzYtNS44MjIyYzAtMS45ODcyLDAuMDY5Ny0zLjkzOTYsMC4xOTc2LTUuODEwNWMxLjYzODUtMC45MTgsMy4zNy0xLjgxMjksNS4xNzEzLTIuNjcyOCBjMS4zNTk3LTAuNjUwOCwyLjcwNzgtMS4yNTUxLDQuMDQ0MS0xLjgwMTNjMS4zMjUsMC41NTc4LDIuNjcyOSwxLjE1MDUsNC4wMzI1LDEuODAxM2MxLjgwMTMsMC44NDgzLDMuNTIxMiwxLjc0MzIsNS4xNTk4LDIuNjYxMiBDNDUuODE0NCwzMi4wNjA0LDQ1Ljg4NDIsMzQuMDAxMiw0NS44ODQyLDM2eiIvPgogIDwvZz4KICA8ZyBpZD0iaGFpciIvPgogIDxnIGlkPSJza2luIi8+CiAgPGcgaWQ9InNraW4tc2hhZG93Ii8+CiAgPGcgaWQ9ImxpbmUiPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTE4LjQxMTksMzYgYy02LjE1OTEtNC43OTk1LTkuNDU5Ni05LjUyOTMtOC4wNzY3LTEyLjQzNDZjMS41NjktMy4zMDA0LDguNjkyNi0zLjQwNSwxNy43OTItMC44MDE5Ii8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNNTQuNTY1MSwzNiBjNi4xNTkyLDQuNzk5NSw5LjQ1OTYsOS41MjkzLDguMDc2NiwxMi40MzQ2Yy0xLjU2ODgsMy4zMDA0LTguNjkyNiwzLjQwNS0xNy44MDM1LDAuODAxOSBjLTIuNjM4LTAuNzU1NC01LjQ1MDQtMS43NDMyLTguMzQ0LTIuOTUxOGMtMS4zMzYzLTAuNTQ2Mi0yLjY4NDQtMS4xMzg4LTQuMDQ0MS0xLjc4OTYgYy0xLjgwMTMtMC44NTk5LTMuNTMyOS0xLjc1NDgtNS4xNzEzLTIuNjcyOCIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNNDQuMDkxOCw1M2MtMS42OTk2LDcuMjUxMS00LjQ3NDMsMTEuOTU5OC03LjYwOTIsMTEuOTU5OGMtMy42NDg5LDAtNi44MDk4LTYuMzgtOC4zNTU1LTE1LjcyMzNsLTAuNDg0Mi0yLjM0NTUiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTI4LjkyNzEsMTguNzg5NWMxLjcwODUtNy4xMzE2LDQuNDUxMi0xMS43NDkyLDcuNTU1NS0xMS43NDkyYzMuNjQ5MiwwLDYuNzk4NSw2LjM4LDguMzU1NiwxNS43MjMzIi8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMjguMTI3MSwyMi43NjM2IGMyLjY0OTYsMC43NTU0LDUuNDYxOSwxLjc0MzIsOC4zNjcxLDIuOTUxOCIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTQ0LjgzODIsNDkuMjM2NCBjLTIuNjM4LTAuNzU1NC01LjQ1MDQtMS43NDMyLTguMzQ0LTIuOTUxOGMtMS4zMzYzLTAuNTQ2Mi0yLjY4NDQtMS4xMzg4LTQuMDQ0MS0xLjc4OTYgYy0xLjgwMTMtMC44NTk5LTMuNTMyOS0xLjc1NDgtNS4xNzEzLTIuNjcyOCIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNNDUuODY4MywzNC4zNTAxYzAuMDEwNSwwLjU0NTUsMC4wMTU5LDEuMDk1NSwwLjAxNTksMS42NDk5YzAsMS45OTg5LTAuMDY5OCwzLjk1MTItMC4xOTc2LDUuODMzOCBjLTAuMDUzMywwLjg1NzEtMC4xMjA0LDEuNzAwNC0wLjIwMDQsMi41MjgiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTIzLjcxODMsNTAuMzE2NmMtNi45MzY5LDEuMzk0Mi0xMi4wNzgsMC44NTM5LTEzLjM4MzItMS44ODJjLTEuMTA1Ni0yLjMyMjgsMC43ODI0LTUuODExNyw0LjczMTQtOS41NzAyIi8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMjcuMTMzNSw0MS43NDA4IEMyMy44NDUxLDM5Ljg5MzksMjAuODk3MSwzNy45NDcsMTguNDExOSwzNiIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTI3LjI3ODgsNDEuODIyMiBjLTAuMDQ4NS0wLjAyNzEtMC4wOTctMC4wNTQzLTAuMTQ1My0wLjA4MTQiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTQ0LjgzODIsMjIuNzYzNmMwLjEzNzksMC44MDMsMC4yNjMsMS42MywwLjM3NDQsMi40Nzc3Ii8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik00OS4xMzA5LDIxLjcwNjNjNi45OTg2LTEuNDI2MywxMi4xOTg0LTAuOTAxOCwxMy41MTA4LDEuODU5MWMxLjA2MzgsMi4yMzQ4LTAuNjQzNSw1LjU0OTEtNC4yOTE1LDkuMTQ0MyIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNNTQuNTY1MSwzNmMtMi41MjE3LTEuOTY0LTUuNTItMy45Mzk2LTguODc4NS01LjgyMjIiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik00NS42ODY2LDMwLjE3NzggYzMuMzU4NSwxLjg4MjYsNi4zNTY4LDMuODU4Miw4Ljg3ODUsNS44MjIyIi8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik00MS42NjYsNDMuOTQ3Yy0wLjI4MTcsMC4xNDAzLTAuNTY3NywwLjI3ODctMC44NTc4LDAuNDE0OCIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTM2LjQ5NDIsMjUuNzE1NCBjMS4zMjUsMC41NTc4LDIuNjcyOSwxLjE1MDUsNC4wMzI1LDEuODAxM2MxLjgwMTMsMC44NDgzLDMuNTIxMiwxLjc0MzIsNS4xNTk4LDIuNjYxMiIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMjcuMDkwMywzNi43MjI1Yy0wLjAwNjEtMC41NTQ4LTAuMDA5Mi0xLjExMjktMC4wMDkyLTEuNjc0NmMwLTIuNjUxNCwwLjA2OTctNS4yNTYzLDAuMTk3Ni03Ljc1MjYiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0zNi40OTQyLDQ2LjI4NDYgYy0xLjMzNjMtMC41NDYyLTIuNjg0NC0xLjEzODgtNC4wNDQxLTEuNzg5NmMtMS44MDEzLTAuODU5OS0zLjUzMjktMS43NTQ4LTUuMTcxMy0yLjY3MjgiLz4KICAgIDxjaXJjbGUgY3g9IjM2LjgyNjIiIGN5PSIzNi4zMjY4IiByPSIzLjI2MjUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTMxLjYxLDQ4LjM2MzVjMCwwLDAuMzM3Ni0wLjA2MDEsMC45NzA3LTAuMzI4MSIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNNDkuNzAxNywzOS45NjY3YzAsMCwxLjQwNDItMC44OTcyLDEuNjQ2My0xLjEwMjMiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTMxLjcwNjYsMjcuMjk1M2MtMC4yODI5LDAuMTQzLTAuNTY1OSwwLjI5MDctMC44NDg1LDAuNDQzMiIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMjIuMjIxNCwzMi43Njc1YzAsMCwwLjIyNzMtMC4yMzg0LDAuODE0MS0wLjU4OTEiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTM5Ljc1MjUsMjMuMjAxOWMwLDAsMS42MTQ1LTAuNTkwNCwxLjk0NDktMC42NjA5Ii8+CiAgPC9nPgo8L3N2Zz4=", "chapters": ["chem-atoms-pse", "chem-shell-lewis"], "provenance": "verified"}, {"id": "om-1F517", "type": "illustration", "title": "Bindung", "alt": "Kettenglieder", "caption": "In der kovalenten Bindung teilen sich Atome Elektronen.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-1F517/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-1F517.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiPgogICAgPHBhdGggZmlsbD0iI2QwY2ZjZSIgZD0ibTM2LjE5NzEsOS41MzZjLTMuMTQ5LDAtNC43NzM0LjY3MDUtNi43Nzg2LDIuNzAyNi0xLjg2MzMsMS44ODgzLTMuMTY4NSwzLjY2NDEtMy4xNjg1LDYuNDY4bC0uMjUsMTcuOTE4OWMwLDIuNjQwNi4zMjU2LDQuNjkxMSwyLDYuNTQwNSwyLjAxNjksMi4yMjc3LDQuNjgwNiw0LDgsNCw2LjA3NTEsMCwxMC00LjcxOTIsMTAtMTAuNTQwNWwtLjI1LTE3LjkxODljMC0yLjg2NjctMS4xOTEtNC4zNDYzLTMuMTI4Ny02LjI0NjQtMS45OTczLTEuOTU4Ni0zLjM0MDctMi45MjQxLTYuNDI0Mi0yLjkyNDFabTMuODAyOSwyNi4wMDA1YzAsMi41NTY5LTEuNzkwOSw0LjYyOTYtNCw0LjYyOTYtMS4xNTYzLDAtMi4wMDI3LS4zOTc1LTMtMS0xLjIxMjEtLjczMjMtMS4xMDc0LTIuMzkyNi0xLTMuNjI5NnYtMTUuNzQwOGMwLTEuMTU0OS0uNjA0Mi0yLjgxODcsMC0zLjYyOTYuNzMzNS0uOTg0NSwyLjc4ODYtMSw0LTEsMS4zMDA5LDAsMy4yNjk1LS4xMTMxLDQsMSwuNTEuNzc3MiwwLDIuNTc4NCwwLDMuNjI5NnYxNS43NDA4WiIvPgogICAgPHBhdGggZmlsbD0iIzliOWI5YSIgZD0ibTMyLjAwNjEsMzUuNTM3MmMuMTE1OS0yLjQzNjYsMS44NTk3LTQuMzcxMSwzLjk5MzktNC4zNzExLDEuMjk0NCwwLDMuMjY4OS44OTYzLDQsMiwuNTE2Ni43Nzk5LDAsMS41NzA5LDAsMi42Mjk2djE1Ljc0MDdjMCwxLjE3My42MjEyLDIuODEzOCwwLDMuNjI5Ni0uNzMzLjk2MjYtMi44MDQzLDEtNCwxLTEuMzI0NiwwLTMuMjcyLS44NTItNC0yLS40ODYxLS43NjY2LDAtMS42MDU5LDAtMi42Mjk2di01LjgwODJjLTMtLjQzNzgtNi05LjcyODEtNi05LjcyODF2MTUuODk1NmMwLDUuNjcyMSwzLjkyNDksOS41MjAzLDEwLDkuNTIwM3MxMC0zLjg0ODIsMTAtOS41MjAzdi0xNy40NTkzYzAtNS42NzIyLTMuOTI0OS0xMC4yNzAzLTEwLTEwLjI3MDMtMS42MTYyLDAtMy4xNTEuMzI1NC00LjUzMzMuOTA5OWwuNTM5NCwxMC40NjEyWiIvPgogIDwvZz4KICA8ZyBpZD0ibGluZSI+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJtMzcuMjMxOCw0MS4wMTMyYy0uMzk0LjA5OTgtLjgwNjcuMTUyOS0xLjIzMTguMTUyOS0yLjc2MTQsMC01LTIuMjM4Ni01LTV2LTE3YzAtMi43NjE0LDIuMjM4Ni01LDUtNXM1LDIuMjM4Niw1LDV2MyIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0ibTM3LjM2MDIsNDYuMDc0NGMtLjQ0NDguMDYwNS0uODk4OC4wOTE3LTEuMzYwMi4wOTE3LTUuNTIyOCwwLTEwLTQuNDc3MS0xMC0xMHYtMTdjMC01LjUyMjgsNC40NzcyLTEwLDEwLTEwczEwLDQuNDc3MiwxMCwxMHY3Ii8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJtMzQuNzYwNCwzMC4zMjA5Yy4zOTY0LS4xMDExLjgxMTctLjE1NDksMS4yMzk2LS4xNTQ5LDIuNzYxNCwwLDUsMi4yMzg2LDUsNXYxN2MwLDIuNzYxNC0yLjIzODYsNS01LDVzLTUtMi4yMzg2LTUtNXYtMyIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0ibTM0Ljc0OTQsMjUuMjQzNWMuNDA5Ny0uMDUxMS44MjcxLS4wNzc0LDEuMjUwNi0uMDc3NCw1LjUyMjgsMCwxMCw0LjQ3NzIsMTAsMTB2MTdjMCw1LjUyMjktNC40NzcyLDEwLTEwLDEwcy0xMC00LjQ3NzEtMTAtMTB2LTYiLz4KICA8L2c+Cjwvc3ZnPg==", "chapters": ["chem-covalent"], "provenance": "verified"}, {"id": "om-1F4A7", "type": "illustration", "title": "Wassertropfen", "alt": "Tropfen", "caption": "Wasserstoffbrücken erklären den hohen Siedepunkt von Wasser.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-1F4A7/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-1F4A7.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiPgogICAgPHBhdGggZmlsbD0iIzkyRDNGNSIgc3Ryb2tlPSJub25lIiBkPSJNNTYuMDAwMSw0Ni43MDY1YzAsMTEuNzc0OS04Ljk1NDMsMjEuMjk2NS0yMCwyMS4yOTY1cy0yMC05LjU0NTUtMjAtMjEuMzIwNCBjMCwwLTAuMjE5MS0xNC4zMDg2LDE2LjY1NTktNDAuMTg3OGMwLDAsMy4xNjY2LTUuMzcwMyw2LjM1NDEtMC4zNTIzQzU1Ljg4NTEsMzIuMDIxNiw1Ni4wMDAxLDQ2LjcwNjUsNTYuMDAwMSw0Ni43MDY1Ii8+CiAgICA8cGF0aCBmaWxsPSIjNjFCMkU0IiBzdHJva2U9Im5vbmUiIGQ9Ik0zNiwzLjk5OTFDNDguODc1LDE0LjM3NSw1NS44NzUsNDQuODc0NCw1NS44NzUsNDQuODc0NGMwLDE1LjAwMDYtOC44MjkzLDIzLjEyNjUtMTkuODc1LDIzLjEyNjUgQzM2LDY4LjAwMDksNTgsNDkuODc0NCwzNiwzLjk5OTEiLz4KICA8L2c+CiAgPGcgaWQ9ImhhaXIiLz4KICA8ZyBpZD0ic2tpbiIvPgogIDxnIGlkPSJza2luLXNoYWRvdyIvPgogIDxnIGlkPSJsaW5lIj4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTU2LjAwMDEsNDYuNzA2NWMwLDExLjc3NDktOC45NTQzLDIxLjI5NjUtMjAsMjEuMjk2NXMtMjAtOS41NDU1LTIwLTIxLjMyMDRjMCwwLTAuMjE5MS0xNC4zMDg2LDE2LjY1NTktNDAuMTg3OCBjMCwwLDMuMTY2Ni01LjM3MDMsNi4zNTQxLTAuMzUyM0M1NS44ODUxLDMyLjAyMTYsNTYuMDAwMSw0Ni43MDY1LDU2LjAwMDEsNDYuNzA2NSIvPgogIDwvZz4KPC9zdmc+", "chapters": ["chem-polarity-forces"], "provenance": "verified"}, {"id": "om-1F3C3", "type": "illustration", "title": "Laufende Person", "alt": "Läufer", "caption": "Gleichförmig heisst konstante Geschwindigkeit.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-1F3C3/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-1F3C3.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiLz4KICA8ZyBpZD0ic2tpbiI+CiAgICA8Y2lyY2xlIGN4PSIyNi45Njg4IiBjeT0iMTMuMDkzOCIgcj0iMyIgZmlsbD0iI2ZjZWEyYiIvPgogICAgPHBhdGggZmlsbD0iI2ZjZWEyYiIgZD0iTTI2LjY2NSwyMi41ODVzLjMwMzgsMy43MDgsMy4zMDM4LDkuMDQyQzMwLjIxMjksMzIuMDYxNSwzMSwzMy4zMzUsMzEsMzMuMzM1TDI1LDQ1bC0uMjUsMThoMy40MjM4TDMwLDQ4bDYtNiw2LTVWMzNMMzYsMjIiLz4KICAgIDxwb2x5bGluZSBmaWxsPSIjZmNlYTJiIiBwb2ludHM9IjQyIDM2IDQ5IDQ2IDU5LjE2NyA1MiA1OC4xNjcgNTUgNDYgNTAgMzcgNDIiLz4KICAgIDxwYXRoIGZpbGw9IiNmY2VhMmIiIGQ9Ik0zNiwyMmMtMi00LTQuMzU5NC00LjIzMjktNi4wMzEyLTMuNTgzQTQuMTA3OCw0LjEwNzgsMCwwLDAsMjgsMjQiLz4KICA8L2c+CiAgPGcgaWQ9ImxpbmUiPgogICAgPGNpcmNsZSBjeD0iMjYuOTY4OCIgY3k9IjEzLjA5MzgiIHI9IjMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik00MiwzNmw1Ljg1MzUsOC4zNjEzYTExLjAyNDksMTEuMDI0OSwwLDAsMCwyLjg2OTIsMi42NTUzbDYuNzIxNiwzLjk2NjhBMi4zNjMzLDIuMzYzMywwLDAsMSw1OC42NjcsNTMuNWExLjY5LDEuNjksMCwwLDEtMi4zNS43NEw0Ny44NSw1MC43NmExNC4xMDQzLDE0LjEwNDMsMCwwLDEtMy4zNDQ3LTIuMDg4OUwzNyw0MiIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTMwLjg0NzcsMzEuMzU5NHMuMjYuNTkzNy41NzYxLDEuMzJhMy43MzE0LDMuNzMxNCwwLDAsMS0uNDk4LDMuMDA3OGwtNC44NTE2LDcuNjI1QTguMzIzMyw4LjMyMzMsMCwwLDAsMjQuOTcyNyw0N2wtLjE5NTQsMTRhMS44NDg2LDEuODQ4NiwwLDAsMCwxLjY4NDYsMiwyLjE3NTEsMi4xNzUxLDAsMCwwLDEuOTU0MS0xLjk4NTRsMS4zNDE4LTExLjAyOTJhNi43ODksNi43ODksMCwwLDEsMS42NTYzLTMuMzk5NWwzLjE3MTgtMy4xNzE4Yy43Nzc0LS43Nzc0LDIuMTA1NS0xLjk5LDIuOTUtMi42OTQ0TDQwLjQ2MzksMzguMjhBNC44NjM3LDQuODYzNywwLDAsMCw0MiwzNWgwYTkuMzA4NSw5LjMwODUsMCwwLDAtLjk1OC0zLjc1NTlMMzYsMjIiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0zNiwyMmMtMi00LTQuMzU5NC00LjIzMjktNi4wMzEyLTMuNTgzQTMuODU5LDMuODU5LDAsMCwwLDI3LjYsMjIuMjUxIi8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMzAuOTM3NSwyMmwtMS40MTg5LDUuMDc3MUEyLjc3NTgsMi43NzU4LDAsMCwxLDI3LDI5SDIwIi8+CiAgPC9nPgo8L3N2Zz4=", "chapters": ["phys-kinematics"], "provenance": "verified"}, {"id": "om-1F34E", "type": "illustration", "title": "Fallender Apfel", "alt": "Apfel", "caption": "Ohne Luftwiderstand fallen alle Körper gleich schnell.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-1F34E/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-1F34E.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiPgogICAgPHBhdGggZmlsbD0iI2VhNWE0NyIgZD0iTTUzLjg4LDIxLjUxYTExLjQxNjYsMTEuNDE2NiwwLDAsMC0xMC43MzczLjUwNDRjLS4wMzUyLjAxNTYtLjA3MjMuMDMzMi0uMTA4NC4wNTE3YTIyLjkxNCwyMi45MTQsMCwwLDEtNy41Njc0LDEuODc2NSwxNS45MDcxLDE1LjkwNzEsMCwwLDEtNi42Mzc3LTEuODVsLS4xNDE2LS4wNzU3YTExLjQxLDExLjQxLDAsMCwwLTEwLjc2MzctLjUwNjRDMTAuNywyNS4xNDA2LDguMTAwOCwzNi42OSwxMi4xMjkxLDQ3LjI1MzljMi4zNzMsNi4yMzI0LDYuNjg0NiwxMS4wOCwxMS41MzUyLDEyLjk2NThhMTAuOTgyOSwxMC45ODI5LDAsMCwwLDkuMTMzNy0uMjY1NiwxMS4zNzcyLDExLjM3NzIsMCwwLDAsMS41MzIzLS45MzE2LDIuNzI2MSwyLjcyNjEsMCwwLDEsMy4xNTgyLDAsMTEuMTcyOCwxMS4xNzI4LDAsMCwwLDEuNTMxMi45MzI2LDEwLjQ2NDYsMTAuNDY0NiwwLDAsMCw0LjczNTQsMS4xMjY5LDEyLjA3NzgsMTIuMDc3OCwwLDAsMCw0LjM4MjgtLjg1OTNjNC44NTE1LTEuODg1OCw5LjE2NS02LjczMzQsMTEuNTM5LTEyLjk2NzhDNjMuNzA3MiwzNi42ODQ2LDYxLjEwNzYsMjUuMTM1Myw1My44OCwyMS41MVoiLz4KICAgIDxwYXRoIGZpbGw9IiNmNGFhNDEiIGQ9Ik00OC45OTg4LDIxLjQwNDhhMS4wNzM2LDEuMDczNiwwLDAsMC0uMjQ1NC4wMDk0bC4wMzc3LS4yMjY2QzQ4Ljg2NjYsMjEuMjYzMiw0OC45MzI4LDIxLjMyOTMsNDguOTk4OCwyMS40MDQ4WiIvPgogICAgPHBhdGggZmlsbD0iI2QyMmYyNyIgZD0iTTUzLjg4MywyMS41MTEyYTEwLjM2NywxMC4zNjcsMCwwLDAtNC45MDIzLTEuMTA2NCwxLDEsMCwwLDAtLjY5NTQsMS43YzkuNDQzNCw5LjYyNDUsNi4zODc3LDE5LjE2LDMuNzI2NiwyMy45ODc4LTMuODkxNiw3LjA1ODYtMTAuODQzNywxMS40NjU4LTE0LjQ1NywxMC42OGExLDEsMCwwLDAtLjY3MTksMS44NjUyLDE1LjUxMzMsMTUuNTEzMywwLDAsMCw3LjE2ODksMS44OTg0LDEyLjg5NTMsMTIuODk1MywwLDAsMCw0LjYyOS0uODYzMmM0LjY2LTEuNzc2NCw4LjY2NzktNi4zMDM4LDEwLjk5NTEtMTIuNDIxOUM2My43MTExLDM2LjY4MjYsNjEuMTEzNSwyNS4xMzU3LDUzLjg4MywyMS41MTEyWiIvPgogICAgPHBhdGggZmlsbD0iI2IxY2MzMyIgZD0iTTQ4LjA0NDUsMTcuMzk0N2MzLjk1NjIsMS4zMjkyLDYuODQ0NCw1LjgxOTMsNi44NDQ0LDUuODE5M3MtNS4wMTM1LDEuODM1NC04Ljk3LjUwNjJjLTMuOTUwOC0xLjMyNzQtNi44NDQ0LTUuODE5My02Ljg0NDQtNS44MTkzUzQ0LjA5MzcsMTYuMDY3Myw0OC4wNDQ1LDE3LjM5NDdaIi8+CiAgPC9nPgogIDxnIGlkPSJsaW5lIj4KICAgIDxnIGlkPSJsaW5lLTIiPgogICAgICA8cG9seWxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgcG9pbnRzPSIzNS4wNDYgMjAuNzMzIDM1LjA0NiAxNS4yNzIgMzAuNzAyIDEwLjkyOSIvPgogICAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNNTcuMzMzNSwyNS43NjU3YzMuNjQ4Miw0Ljk0OTMsNC4zOTY4LDEzLjI5NiwxLjQwOTMsMjEuMTMyOS0zLjg1NjksMTAuMTI4Ni0xMi40ODc1LDE1LjU3My0xOS4yNzM1LDEyLjE2MzNhMTAuMjQsMTAuMjQsMCwwLDEtMS4zOTQyLS44NDksMy43MTI2LDMuNzEyNiwwLDAsMC00LjMzMTEtLjAwMDksMTAuMjcsMTAuMjcsMCwwLDEtMS4zOTYuODVjLTYuNzk3MSwzLjQxLTE1LjQyNzYtMi4wMzQ3LTE5LjI4NDYtMTIuMTYzMy0zLjg1NjktMTAuMTE3NC0xLjQ3NTYtMjEuMDg0NSw1LjMxLTI0LjQ5NDJhMTAuNDIsMTAuNDIsMCwwLDEsOS44MzguNDkxOXMuMDU1OS4wMzM2LjE2NzcuMDlhMTYuODYyOCwxNi44NjI4LDAsMCwwLDcuMDg3OCwxLjk1NjQsMTMuMjcxMiwxMy4yNzEyLDAsMCwwLDIuMjQ4Ny0uMjE0NSwxOC42MzQyLDE4LjYzNDIsMCwwLDAsMi4xMjYtLjQ2MzIiLz4KICAgICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTQ4LjA0NDUsMTcuMzk0N2MzLjk1NjIsMS4zMjkyLDYuODQ0NCw1LjgxOTMsNi44NDQ0LDUuODE5M3MtNS4wMTM1LDEuODM1NC04Ljk3LjUwNjJjLTMuOTUwOC0xLjMyNzQtNi44NDQ0LTUuODE5My02Ljg0NDQtNS44MTkzUzQ0LjA5MzcsMTYuMDY3Myw0OC4wNDQ1LDE3LjM5NDdaIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4=", "chapters": ["phys-fall-throw"], "provenance": "verified"}, {"id": "om-1F9CA", "type": "illustration", "title": "Eiswürfel", "alt": "Eis", "caption": "Haftreibung ist grösser als Gleitreibung.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-1F9CA/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-1F9CA.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiPgogICAgPHBhdGggZmlsbD0iIzkyZDNmNSIgZD0iTTM2LjYzNTIsNTQuNTkxNiw1OC40Nyw0OC45MjMsNTguMzE4LDIwLjU0ODdsLTIxLjcwMTMsNC41NS0yMS44NS01LjA5NDhWNDQuOTFhNS4wNDM3LDUuMDQzNywwLDAsMCwzLjYzNyw0Ljk1NzJsMTguMTk3Niw0LjcyNDRWMjkuMjMzNiIvPgogICAgPHBhdGggZmlsbD0iIzYxYjJlNCIgZD0iTTM2LjYzNTIsNTQuNTkxNmwyMC4xNzY0LTUuMjM4MUEyLjIxNDYsMi4yMTQ2LDAsMCwwLDU4LjQ3LDQ3LjIxVjIyLjc5NDNhMi4yMTQ4LDIuMjE0OCwwLDAsMC0yLjcxNzYtMi4xNTY5TDM2LjYxNjcsMjUuMDk4NyIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTM2LjYxODIsNDMuNzExM2wtLjI2LDEwLjQxNzgtNS4zNTM1LS43MzEzTDE1LjA3NiwzMy4wMzc0VjIwLjU0ODdsMi45NTUuMjc5NEwzNi42MTgyLDQzLjcxMTMiLz4KICAgIDxwb2x5bGluZSBmaWxsPSIjOTJkM2Y1IiBwb2ludHM9IjE0Ljc2NyAyMC4wMDQgMzYuODA4IDE0LjMwOSA1Ny45NDkgMjAuNTc5Ii8+CiAgICA8cG9seWxpbmUgZmlsbD0iIzkyZDNmNSIgcG9pbnRzPSI1Ny4zOTggMjAuMjU0IDM2LjQ1MSAyNS4zNjggMTQuNzQ1IDE5Ljg2OSIvPgogIDwvZz4KICA8ZyBpZD0ibGluZSI+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyLjA2OSIgZD0iTTM2LjYwMTMsMjkuMjMzNnYyMi42NDRhMi4wOTk0LDIuMDk5NCwwLDAsMS0yLjYyNywyLjAzMmwtMS4xNDQxLS4yOTctLjE2NDUtLjA0MjdMMTguMTUxLDQ5LjgwMTZhNC42OTMyLDQuNjkzMiwwLDAsMS0zLjM4NDMtNC42MTI3di0yMi41NGEyLjA5OTMsMi4wOTkzLDAsMCwxLDIuNTc2MS0yLjA0NDVsMTcuNzIxNCw0LjEzMjFhNi44Mzc5LDYuODM3OSwwLDAsMCwzLjEwNSwwbDE3LjcyNDUtNC4xMzIyQTIuMDk5NCwyLjA5OTQsMCwwLDEsNTguNDcsMjIuNjQ5djI0LjY1YTIuMSwyLjEsMCwwLDEtMS41NzE5LDIuMDMyTDM3LjMyNDMsNTQuNDEyN2EyLjk3MDYsMi45NzA2LDAsMCwxLTEuMzg0NC4wMjYxTDMzLjk3NDMsNTMuOTEiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIuMDY5IiBkPSJNMTQuNzQ1MSwyNC40MTA3bC4wMTY4LTMuNDI2OGExLjI3MTksMS4yNzE5LDAsMCwxLC45NTM3LTEuMjI1MkwzNC44MywxNC44MmE3LjA5MjgsNy4wOTI4LDAsMCwxLDMuOTI2LjEwODlsMTguNTI2MSw1LjAxMzVBMS42MDgzLDEuNjA4MywwLDAsMSw1OC40NywyMS40OTUydjIuNjY1NCIvPgogIDwvZz4KPC9zdmc+", "chapters": ["hist-postwar-coldwar", "phys-friction-statics"], "provenance": "verified"}, {"id": "om-1F4AA", "type": "illustration", "title": "Kraftaufwand", "alt": "Angespannter Arm", "caption": "Leistung ist Arbeit je Zeit.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-1F4AA/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-1F4AA.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiLz4KICA8ZyBpZD0iaGFpciIvPgogIDxnIGlkPSJza2luIj4KICAgIDxwYXRoIGZpbGw9IiNGQ0VBMkIiIHN0cm9rZT0ibm9uZSIgZD0iTTYzLjExMDMsNTQuMTY0OGMtMTAuOTY5Miw5LjQzOTctMjYuMzYxMSwxMS42ODAzLTQ2LjQwOTYsMTEuNTYzNGMwLDAtMy43NDA4LDEuMTQ5NS00LjU5ODEtMy41NjU1IGMwLDAtMC43Njk2LTIwLjg4NjMsMy44MDktMzUuNTQ3NmMwLDAtMC4xOTQ4LTUuOTgxNCwwLjAyOTMtOS44OTc2YzAuMDM4OS0wLjY3MjIsMC4zMzEyLTEuMjk1NywwLjgyOC0xLjc1MzUgYzUuNzU3NC01LjMxOSw4LjM0ODctNi4wOTgzLDguMzQ4Ny02LjA5ODNsOC4zNjgyLTEuNDgwOGMxLjMyNDksMC45MDYsNC4yMjc5LDQuMTc5MiwzLjc1MDUsOS45OTVsMC4xMDcxLTAuMzk5NGwzLjIxNDgsMC45MDEyIGMxLjEyMjYsMC4zNDE2LDEuODU4NSwxLjUyNSwxLjg0MTIsMi42NTQ2Yy0wLjAwOTgsMS4xNjktMi44MDU2LDIuMDQ1Ny0yLjgwNTYsMi4wNDU3Yy02LjExNzgsMS4zODM0LTYuMTE3OCwxLjM4MzQtNi4xMTc4LDEuMzgzNCBjLTEuODMxNCwyLjg3MzgtNS41OTM3LDMuMTc1OC03LjI3OSwzLjA5NzljLTAuMDg3Ny0wLjI0MzUtMC41OTI3LTAuMDE5NS0wLjE5MzMsMGMwLjU5NDIsMS41MDAyLDEuMjg5Myw1LjExNDQsMS45MjI1LDExLjgwNyBsMC4xNzUzLDEuODYwNmMwLjA0ODcsMC41MjYxLDAuMzE2Niw0LjcyODYsMC4zODQ3LDcuNDc1N2MxLjgxMi00LjQxMyw2LjYzNjEtMTIuNTYwOSwxNS43MzQ4LTEzLjg0NjggYzEzLjQ2MzEtMS45MTkyLDIwLjE2NTQsOC40OTQ4LDIwLjE2NTQsOC40OTQ4czAuMjMzOCwwLjI3MjgsMC41MjYsMC43Njk2QzY2Ljk3NzgsNDcuMDcyOCw2Ni4xNTk1LDUxLjUzNDUsNjMuMTEwMyw1NC4xNjQ4eiIvPgogICAgPHBhdGggZmlsbD0iI0ZDRUEyQiIgc3Ryb2tlPSJub25lIiBkPSJNMjYuNTA4MSwyNi44MWMtMC40MS0wLjAyLTAuNzQtMC4wNi0wLjk0LTAuMDlsMC42NC0wLjQ5QzI2LjMxODEsMjYuMzcsMjYuNDE4MSwyNi41NiwyNi41MDgxLDI2LjgxeiIvPgogICAgPHBhdGggZmlsbD0iI0ZDRUEyQiIgc3Ryb2tlPSJub25lIiBkPSJNMjYuNTA4MSwyNi44MWMtMC40MS0wLjAyLTAuNzQtMC4wNi0wLjk0LTAuMDlsMC42NC0wLjQ5QzI2LjMxODEsMjYuMzcsMjYuNDE4MSwyNi41NiwyNi41MDgxLDI2LjgxeiIvPgogIDwvZz4KICA8ZyBpZD0ic2tpbi1zaGFkb3ciPgogICAgPHBhdGggZmlsbD0iI0YxQjMxQyIgc3Ryb2tlPSJub25lIiBkPSJNMjEuOTIxNiwyNi4yM2MwLDAsNS4zNDQ0LTQuOTg1NywxLjYxNTItNi4zNzkxbDEyLjc2MDktMC40MTk4bDAuNjcwOC0xLjE0MmwwLjIxOTYtMS44NDQyIGMxLjA3MTcsMC4xNzgxLDMuMzY1LDAuOTQ2MywzLjY0MTYsMS4wMTE5YzAsMCwyLjQwNDMsMS44NzMxLDAuNDQ4Nyw0LjA5MzNsLTcuNzc4OCwyLjIzNDUgQzMzLjQ5OTYsMjMuNzg0NSwyOC43NzY0LDI3LjU4ODEsMjEuOTIxNiwyNi4yM3oiLz4KICAgIDxwYXRoIGZpbGw9IiNGMUIzMUMiIHN0cm9rZT0ibm9uZSIgZD0iTTIxLjkyMTYsMjYuMjNjMC43OTQ2LDkuMjE3OSwyLjU2MDMsMjUuNjQxMSwyLjA2OTcsMjcuNzQ1MmMtMC4wNDQ2LDAuNjk4OSwwLjY1NTIsMC44MDk0LDEuMDEyOSwwLjI5NTQgYzAuODI4NS0wLjY2NjYsMi43NjY5LTIuNTk2OSwzLjgxODItNS4xOTQyYzAtNS43NjItMC42NjY4LTEyLjQ1OC0yLjIxOTEtMjIuMjYyOUMyNi4wMzMxLDI1LjIyOSwyMy42NjQsMjUuMjQ4NSwyMS45MjE2LDI2LjIzeiIvPgogICAgPHBhdGggZmlsbD0iI0YxQjMxQyIgc3Ryb2tlPSJub25lIiBkPSJNNDguMTk4OCwzNC4wOTk1YzAsMCwxMC4yMzkxLDYuOTcyOSwzLjEwNiwxNi40MTk4YzAsMCwyLjEzMjQsOC41MTY3LDAuMTU1Miw5Ljg1MDggYy0xLjk3NzIsMS4zMzQxLDIwLjYxOS01LjU0NTMsMTIuMTM2Mi0xOC41NjMzQzYzLjU5NjMsNDEuODA2OSw1OC40Mzc5LDM0LjIzNDEsNDguMTk4OCwzNC4wOTk1eiIvPgogIDwvZz4KICA8ZyBpZD0ibGluZSI+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0yNy40Njg0LDQwLjU1MTljLTAuNDI4Mi00LjI3OTQtMS4xMzI2LTEyLjcxOTctMS45NTQ4LTEzLjc1NDNjMCwwLDUuMjAwOSwxLjExMDIsNy44MTE3LTIuOTczNiIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMzQuNTAzMSw1My4wODc4YzAsMCwxMC44MDE5LDIuNzAxMiwxOS4yODY4LTQuMzI2OSIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMjcuNzE5NSw1MC42MzEyYzAsMCwyLjg2ODgtMTQuNDczNywxNi4zNjgyLTE2LjM5MjhzMjAuMjEzOCw4LjUxNDMsMjAuMjEzOCw4LjUxNDNzMC4yMzAyLDAuMjc1NSwwLjUyNjksMC43NzA0IGMyLjA3MjQsMy40NTY0LDEuMjUwNSw3LjkzNDItMS44MDM1LDEwLjU2MzdDNTIuMDMyNiw2My41NTEsMzYuNTk5MSw2NS43OTkzLDE2LjUwNjYsNjUuNjgzNmMwLDAtMy43NTAyLDEuMTQ1Ni00LjYwOTYtMy41NzQgYzAsMC0wLjc2ODktMjAuOTM4OCwzLjgxNzgtMzUuNjI2MWMwLDAtMC4xOTY1LTYuMDAxMywwLjAzMDctOS45Mjg3YzAuMDM4OC0wLjY3LDAuMzMzNy0xLjI5NzEsMC44MjctMS43NTIxIGM1Ljc3ODktNS4zMzEzLDguMzc0Mi02LjExNDksOC4zNzQyLTYuMTE0OWw4LjM4ODEtMS40ODM4YzEuNDM2LDAuOTgzNyw0LjcyNTYsNC43Mzg4LDMuNTcwNywxMS40OTUzIi8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0yNS41ODg4LDE5LjI5NDhjMCwwLDEuODE2MywyLjU5MTEsMy42MzI1LTAuMjgzNVYxNmwtMC40Ni0xLjY1ODNsLTAuMzYwNi0wLjI3OCIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMjkuNTQ0MiwxOS4yOTQ4YzAsMCwxLjgxNjMsMi41OTExLDMuNjMyNS0wLjI4MzVWMTZsLTAuODczMS0yLjEyNTQiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTM2LjgyMDMsMTkuMDExM2MtMS45NjE2LDEuODg4OS0zLjMyMDcsMC0zLjMyMDcsMCIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMjAuMzAxLDE2LjQ0NjVjMC41MDM4LDAuNDM4NywxLjE0MjksMS4yMjA2LDEuMjc4NCwyLjQzMjdjMC4wMzIyLDAuMjg3NywwLjEzMSwwLjU2OTEsMC4zMzU5LDAuNzczNiBjMC41OTUsMC41OTM5LDEuOTU4NiwxLjUxNjcsMy4zMjIzLTAuNjQxNVYxNmwtMC42MzUxLTEuMjY3NyIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNNDAuMzU2NCwxOC4yODljMS45MjYxLDAuNTY5NywyLjI2MTgsMy40MjY2LTAuNzAyOCw0LjA5OTNjLTYuMzI4MywxLjQzNTgtNi4zMjgzLDEuNDM1OC02LjMyODMsMS40MzU4Ii8+CiAgPC9nPgo8L3N2Zz4=", "chapters": ["phys-work-power"], "provenance": "verified"}, {"id": "om-1F93F", "type": "illustration", "title": "Taucher", "alt": "Taucherin", "caption": "Je zehn Meter Wasser kommt ein bar dazu.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-1F93F/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-1F93F.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTQ1LjcxMDgsNDYuOTA3MWwuMzkxMSw2LjA2MjRzNi41NTEzLDUuMDg0NiwxMi41MTU5LTQuMjA0NmwuNzgyMi02LjE2MDItLjc4MjItMS43NjAxcy03LjA0MDIsOS4yODkyLTEyLjkwNzEsNi4wNjI0WiIvPgogICAgPGc+CiAgICAgIDxwYXRoIGZpbGw9IiM2MWIyZTQiIGQ9Im0zOS44MDg5LDQ4Ljc4NzFoNC4xNzE2YzEuMTA0NiwwLDIsLjg5NTQsMiwycy0uODk1NCwyLTIsMmgtMS4wOTE4Ii8+CiAgICAgIDxwYXRoIGZpbGw9IiM2MWIyZTQiIGQ9Im00Mi44ODg3LDUyLjc4NzFjLjA1MTcuMDY3NC4xMDY0LjEzNDguMTY3LjIwMzEuODU3NC45NzM3LDIuODEsMi4xODY2LDcuMjM1MywyLjQzNTYsMS45NjM5LjE1NywzLjkzMDQtLjI3MSw1LjY1MTQtMS4yMywyLjM3Ni0xLjQ1ODcsNC4wODQ1LTMuNzkyLDQuNzU3Ni02LjQ5NzYuMjMzNy0uODU0Ny4zNDY3LTEuNzM4LjMzNTktMi42MjRWN2MwLTEuMTA0Ni44OTU0LTIsMi0yczIsLjg5NTQsMiwydjM4LjA3NDJjLjAxMTIsMS4yNjIyLS4xNTQ4LDIuNTE5Ny0uNDkyOSwzLjczNTgtLjk2MzYsMy42ODMtMy4zMTc3LDYuODQ4OS02LjU2NzQsOC44MzItMi4xMjUzLDEuMjE1My00LjUzNzYsMS44Mzg0LTYuOTg1NiwxLjgwNDMtLjMwNTYsMC0uNjEzNS0uMDA4OC0uOTIzOC0uMDI2NC00Ljc3NzMtLjI2ODUtOC4xOTI0LTEuNTk2Ny0xMC4xNTIzLTMuOTQ4Mi0uNjU1OS0uNzc4NS0xLjEzNzktMS42ODgxLTEuNDEzOS0yLjY2OGwtMS41MjI1LS4wMTY2Yy0xLjEwNDYtLjAwNjItMS45OTUtLjkwNjctMS45ODg4LTIuMDExMnMuOTA2Ny0xLjk5NSwyLjAxMTItMS45ODg4aDIuODA4OSIvPgogICAgPC9nPgogICAgPHBhdGggZmlsbD0iIzkyZDNmNSIgZD0ibTMyLjgyMyw0Mi43MzYxYy45MDkzLS4wMDcxLDEuNzk1Ni4yODUsMi41MjI1LjgzMTMsMi40MjMsMS44NTA4LDcuNjQ0MywxLjg0MzEsMTAuNjc0NCwxLjU3MTMsNS41NDEyLS40OTcyLDEwLjUxNy0xLjE3NTUsMTAuOTQxLTguMTVsLS40MDE0LTcuMDI2LDEuNTI3Mi4wNHYtMy4zMjYxcy04LjM5LTcuMTc4Ni0yNC4wODIzLTEuODUxOWgtNC43OWMtMTQuNzcyMi01LjA1LTI0LjI4MDgsMS44NTE5LTI0LjI4MDgsMS44NTE5djMuMzI2MWwxLjUyNzEtLjA0LS40MDE0LDcuMDI2Yy40MjQsNi45NzQ5LDUuNCw3LjY1MzIsMTAuOTQxLDguMTUsMy4wMy4yNzE4LDguMjUxNC4yNzk1LDEwLjY3NDQtMS41NzEzLjcyNjktLjU0NjMsMS42MTMyLS44Mzg0LDIuNTIyNS0uODMxM2gyLjYyNThaIi8+CiAgICA8cGF0aCBmaWxsPSIjZDBjZmNlIiBkPSJtMzMuOTU0NiwyNy44MDE1YzIuMDAzNi0uOTkzLDQuMjA4NS0xLjUxMjUsNi40NDQ3LTEuNTE4M2g4Ljk1NDVjMi4yMDY0LjAwNjUsMy45OTM1LDEuNzkzNiw0LDR2Ny41NjY4Yy0uMDA2NSwyLjIwNjQtMS43OTM2LDMuOTkzNS00LDRoLTcuNzcxM2MtMi40NTMyLS4xMzkxLTQuNzExOS0xLjM4MDItNi4xNDQ4LTMuMzc2M2wtMS43ODI5LTIuODA2NGMtMS4xOC0xLjg1NjktMy4xMzM4LTEuODcyMy00LjM0MjQtLjAzNGwtMS44OSwyLjg3NDVjLTEuNDY4LDEuOTc4LTMuNzM4MywzLjIwMjQtNi4xOTc2LDMuMzQyMmgtNy41NTg3Yy0yLjIwNjQtLjAwNjUtMy45OTM1LTEuNzkzNi00LTR2LTcuNTY2OGMuMDA2NS0yLjIwNjQsMS43OTM2LTMuOTkzNSw0LTRoOC42OTc1YzIuMjc2Mi4wMTU1LDQuNTIwOC41MzQsNi41NzMyLDEuNTE4MywxLjU2ODMuODM1MiwzLjQ0OTUuODM1Miw1LjAxNzgsMFoiLz4KICAgIDxwYXRoIGZpbGw9IiM5YjliOWEiIGQ9Im00Ny44NDE1LDI2LjI4MzJoMy4zYzEuODE1LDAsMy4zLDEuOCwzLjMsNHY3LjU2NjhjLS4wMDY1LDIuMjA2NC0xLjc5MzYsMy45OTM1LTQsNGgtNi4zOSIvPgogICAgPHBvbHlnb24gc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgcG9pbnRzPSI2MC40MjggMTguNTcyIDY1LjYyIDE4LjU3MiA2NS41NzMgMjMuNzc3IDYwLjM4MSAyMy43NzcgNjAuNDI4IDE4LjU3MiIvPgogICAgPHBvbHlnb24gc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgcG9pbnRzPSI2MC40MjggMTguNTcyIDY1LjYyIDE4LjU3MiA2NS41NzMgMjMuNzc3IDYwLjM4MSAyMy43NzcgNjAuNDI4IDE4LjU3MiIvPgogIDwvZz4KICA8ZyBpZD0ibGluZSI+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJtMzIuODIzLDQyLjczNjFjLjkwOTMtLjAwNzEsMS43OTU2LjI4NSwyLjUyMjUuODMxMywyLjQyMywxLjg1MDgsNy42NDQzLDEuODQzMSwxMC42NzQ0LDEuNTcxMyw1LjU0MTItLjQ5NzIsMTAuNTE3LTEuMTc1NSwxMC45NDEtOC4xNWwtLjQwMTQtNy4wMjYsMS41MjcyLjA0di0zLjMyNjFzLTguMzktNy4xNzg2LTI0LjA4MjMtMS44NTE5aC00Ljc5Yy0xNC43NzIyLTUuMDUtMjQuMjgwOCwxLjg1MTktMjQuMjgwOCwxLjg1MTl2My4zMjYxbDEuNTI3MS0uMDQtLjQwMTQsNy4wMjZjLjQyNCw2Ljk3NDksNS40LDcuNjUzMiwxMC45NDEsOC4xNSwzLjAzLjI3MTgsOC4yNTE0LjI3OTUsMTAuNjc0NC0xLjU3MTMuNzI2OS0uNTQ2MywxLjYxMzItLjgzODQsMi41MjI1LS44MzEzaDIuNjI1OFoiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Im0zMy45NTQ2LDI3LjgwMTVjMi4wMDM2LS45OTMsNC4yMDg1LTEuNTEyNSw2LjQ0NDctMS41MTgzaDguOTU0NWMyLjIwNjQuMDA2NSwzLjk5MzUsMS43OTM2LDQsNHY3LjU2NjhjLS4wMDY1LDIuMjA2NC0xLjc5MzYsMy45OTM1LTQsNGgtNy43NzEzYy0yLjQ1MzItLjEzOTEtNC43MTE5LTEuMzgwMi02LjE0NDgtMy4zNzYzbC0xLjc4MjktMi44MDY0Yy0xLjE4LTEuODU2OS0zLjEzMzgtMS44NzIzLTQuMzQyNC0uMDM0bC0xLjg5LDIuODc0NWMtMS40NjgsMS45NzgtMy43MzgzLDMuMjAyNC02LjE5NzYsMy4zNDIyaC03LjU1ODdjLTIuMjA2NC0uMDA2NS0zLjk5MzUtMS43OTM2LTQtNHYtNy41NjY4Yy4wMDY1LTIuMjA2NCwxLjc5MzYtMy45OTM1LDQtNGg4LjY5NzVjMi4yNzYyLjAxNTUsNC41MjA4LjUzNCw2LjU3MzIsMS41MTgzLDEuNTY4My44MzUyLDMuNDQ5NS44MzUyLDUuMDE3OCwwWiIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0ibTYzLjAzNjEsNWMxLjEwNDYsMCwyLC44OTU0LDIsMmgwdjM4LjA3NDJjLjAxMTEsMS4yNjIyLS4xNTQ5LDIuNTE5Ny0uNDkzMSwzLjczNTgtLjk2MzYsMy42ODMtMy4zMTc3LDYuODQ4OS02LjU2NzQsOC44MzItMi4xMjUzLDEuMjE1My00LjUzNzYsMS44Mzg0LTYuOTg1NiwxLjgwNDMtLjMwNTYsMC0uNjEzNS0uMDA4OC0uOTIzOC0uMDI2NC00Ljc3NzMtLjI2ODUtOC4xOTI0LTEuNTk2Ny0xMC4xNTIzLTMuOTQ4Mi0uNjU1OS0uNzc4NS0xLjEzNzktMS42ODgxLTEuNDEzOS0yLjY2OGwtMS41MjI1LS4wMTY2Yy0xLjA5OTgtLjAxMjctMS45ODMxLS45MTA4LTEuOTc3NS0yLjAxMDciLz4KICA8L2c+Cjwvc3ZnPg==", "chapters": ["phys-pressure-hydro"], "provenance": "verified"}, {"id": "om-1F1E8-1F1ED", "type": "illustration", "title": "Schweizer Flagge", "alt": "Flagge der Schweiz", "caption": "Neutral nach aussen, gespalten nach innen.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-1F1E8-1F1ED/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-1F1E8-1F1ED.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiPgogICAgPHJlY3QgeD0iMTciIHk9IjE3IiB3aWR0aD0iMzgiIGhlaWdodD0iMzgiIGZpbGw9IiNkMjJmMjciLz4KICAgIDxwb2x5Z29uIGZpbGw9IiNmZmYiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIHBvaW50cz0iNDcgMzIuNDYyIDM5LjUzOCAzMi40NjIgMzkuNTM4IDI1IDMyLjQ2MiAyNSAzMi40NjIgMzIuNDYyIDI1IDMyLjQ2MiAyNSAzOS41MzggMzIuNDYyIDM5LjUzOCAzMi40NjIgNDcgMzkuNTM4IDQ3IDM5LjUzOCAzOS41MzggNDcgMzkuNTM4IDQ3IDMyLjQ2MiIvPgogIDwvZz4KICA8ZyBpZD0ibGluZSI+CiAgICA8cmVjdCB4PSIxNyIgeT0iMTciIHdpZHRoPSIzOCIgaGVpZ2h0PSIzOCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIvPgogIDwvZz4KPC9zdmc+", "chapters": ["hist-ch-ww1"], "provenance": "verified"}, {"id": "om-1F3D4", "type": "illustration", "title": "Alpenmassiv", "alt": "Verschneiter Gipfel", "caption": "Das Reduit verlegte die Verteidigung in die Alpen.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-1F3D4/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-1F3D4.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxnIGlkPSJjb2xvciI+CiAgICA8cGF0aCBmaWxsPSIjM0YzRjNGIiBkPSJNNTMsNDZjMCwwLTAuOC0xMC45LTEuMS0xMS41cy0xLTIuMS0xLjMtMi41bC0xLjgtM2wtNS41LTQuMWwtMy45LDQuOUwzOC42LDMybDMuNCwyIi8+CiAgICA8cGF0aCBmaWxsPSIjOUI5QjlBIiBkPSJNMjIuMiwyOS44aDguNUw0MSwzMi41bDksNi41bDMuNCw5LjFMNjAsNTZIMTJsNC03bDItMTJDMTguNSwzNCwyMi4yLDI5LjgsMjIuMiwyOS44eiIvPgogICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTI5LDMxYzAsMC0wLjgsMC43LTEuMywwLjlDMjYsMzMsMjUuOCwzNC44LDI1LDM1Yy0xLjMsMC40LTAuOS0yLjctMy0zYy0yLTAuMy0yLjEsMS41LTMsMSBjLTEuMi0wLjctMC4yLTQuNCwwLTVjMC4zLTEuMSwxLjItMi43LDMtNmMxLjYtMi44LDEuNy0zLjEsMi00YzAuNC0xLjYsMC4zLTEuNiwxLTJjMC45LTAuNSwyLjMsMC4zLDMsMWMxLDEsMC40LDAuNywyLDIgYzEuMywxLDEuNSwwLjgsMywyYzAuMywwLjIsMS4xLDAuOSwyLDJjMC42LDAuNywxLjQsMS42LDIsM2MwLjcsMS41LDAuNCwxLjcsMSwzYzAuOSwxLjksMi4yLDIuNiwyLDNjLTAuMywwLjUtMi43LTEtNCwwIGMtMC40LDAuMy0wLjMsMC42LTEsMmMtMC44LDEuNy0xLjIsMy42LTIsNGMtMS4yLDAuNi0zLTAuOS00LTJDMjcuNCwzNC4yLDI5LDMxLDI5LDMxeiIvPgogICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQ0LDIzYzAuOC0wLjgsMS45LDEuMywzLDNjMC45LDEuNCwyLjQsMy4yLDIsNGMtMC41LDEtMywwLjQtNCwwYy0wLjMtMC4yLTAuNC0wLjMtMS0xIGMtMS4zLTEuNS0xLjctMS40LTItMkM0MS40LDI1LjcsNDMsMjQsNDQsMjN6Ii8+CiAgPC9nPgogIDxnIGlkPSJoYWlyIi8+CiAgPGcgaWQ9InNraW4iLz4KICA8ZyBpZD0ic2tpbi1zaGFkb3ciLz4KICA8ZyBpZD0ibGluZSI+CiAgICA8cG9seWxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBwb2ludHM9IjYwLDU1IDUzLjQsNDguMSA1MCwzOSIvPgogICAgPHBvbHlsaW5lIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgcG9pbnRzPSIxOS40LDMzLjEgMTgsMzcgMTYsNDkgMTIsNTUiLz4KICAgIDxwb2x5bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIHBvaW50cz0iNDAsMzIgNTAsMzkgNDksNDUgNTAsNTAgNDgsNTIgNDUsNTUiLz4KICAgIDxsaW5lIHgxPSI0OC43IiB4Mj0iNTEiIHkxPSIzMC4zIiB5Mj0iMzUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPGxpbmUgeDE9IjQxLjIiIHgyPSI0Mi40IiB5MT0iMjkiIHkyPSIyNy41IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTI5LDMxYzAsMC0wLjgsMC43LTEuMywwLjlDMjYsMzMsMjUuOCwzNC44LDI1LDM1Yy0xLjMsMC40LTAuOS0yLjctMy0zYy0yLTAuMy0yLjEsMS41LTMsMWMtMS4yLTAuNy0wLjItNC40LDAtNSBjMC4zLTEuMSwxLjItMi43LDMtNmMxLjYtMi44LDEuNy0zLjEsMi00YzAuNC0xLjYsMC4zLTEuNiwxLTJjMC45LTAuNSwyLjMsMC4zLDMsMWMxLDEsMC40LDAuNywyLDJjMS4zLDEsMS41LDAuOCwzLDIgYzAuMywwLjIsMS4xLDAuOSwyLDJjMC42LDAuNywxLjQsMS42LDIsM2MwLjcsMS41LDAuNCwxLjcsMSwzYzAuOSwxLjksMi4yLDIuNiwyLDNjLTAuMywwLjUtMi43LTEtNCwwYy0wLjQsMC4zLTAuMywwLjYtMSwyIGMtMC44LDEuNy0xLjIsMy42LTIsNGMtMS4yLDAuNi0zLTAuOS00LTJDMjcuNCwzNC4yLDI5LDMxLDI5LDMxeiIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNNDQsMjNjMC44LTAuOCwxLjksMS4zLDMsM2MwLjksMS40LDIuNCwzLjIsMiw0Yy0wLjUsMS0zLDAuNC00LDBjLTAuMy0wLjItMC40LTAuMy0xLTFjLTEuMy0xLjUtMS43LTEuNC0yLTIgQzQxLjQsMjUuNyw0MywyNCw0NCwyM3oiLz4KICA8L2c+Cjwvc3ZnPg==", "chapters": ["hist-ch-ww2"], "provenance": "verified"}, {"id": "om-26D3", "type": "illustration", "title": "Bündniskette", "alt": "Kettenglieder", "caption": "Bündnissysteme machten aus der Krise einen Weltkrieg.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-26D3/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-26D3.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiPgogICAgPGVsbGlwc2UgY3g9IjM1LjI1MzQiIGN5PSIxNS4zNCIgcng9IjMuODQ4IiByeT0iNC42NjQzIiBmaWxsPSIjZmZmIi8+CiAgICA8ZWxsaXBzZSBjeD0iMzUuMzM4MSIgY3k9IjM2LjAyMDIiIHJ4PSIzLjg0OCIgcnk9IjQuNjY0MyIgZmlsbD0iI2ZmZiIvPgogICAgPGVsbGlwc2UgY3g9IjM1LjUwNzYiIGN5PSI1Ny4wMzk0IiByeD0iMy44NDgiIHJ5PSI0LjY2NDMiIGZpbGw9IiNmZmYiLz4KICAgIDxwYXRoIGZpbGw9IiNkMGNmY2UiIGQ9Im00Mi42MzQ2LDEyLjQ0NzZjLS40NTc0LTMuNjQzOC0zLjU2NjgtNi40NjI2LTcuMzM0Ni02LjQ2MjYtNC4wODI4LDAtNy4zOTI1LDMuMzA5Ny03LjM5MjUsNy4zOTI1djMuODAxOWMwLDQuMDgyOCwzLjMwOTgsNy4zOTI1LDcuMzkyNSw3LjM5MjVzNy4zOTI1LTMuMzA5Nyw3LjM5MjUtNy4zOTI1di0zLjgwMTljMC0uMzE1LS4wMTk3LS42MjUzLS4wNTc5LS45Mjk5Wm0tMy4wODc4LDMuOTIyOGMwLDIuMzQ1NS0xLjkwMTQsNC4yNDY4LTQuMjQ2OCw0LjI0NjhzLTQuMjQ2OC0xLjkwMTQtNC4yNDY4LTQuMjQ2OHYtMi4xODRjMC0yLjM0NTUsMS45MDE0LTQuMjQ2Nyw0LjI0NjgtNC4yNDY3LDIuMTY0NSwwLDMuOTUwNywxLjYxOTEsNC4yMTM1LDMuNzEyNC4wMjIuMTc1LjAzMzMuMzUzMy4wMzMzLjUzNDN2Mi4xODRaIi8+CiAgICA8cGF0aCBmaWxsPSIjZDBjZmNlIiBkPSJtNDIuNjM0NiwzMy4yNjE2Yy0uNDU3NC0zLjY0MzgtMy41NjY4LTYuNDYyNS03LjMzNDYtNi40NjI1LTQuMDgyOCwwLTcuMzkyNSwzLjMwOTctNy4zOTI1LDcuMzkyNXYzLjgwMTljMCw0LjA4MjgsMy4zMDk4LDcuMzkyNSw3LjM5MjUsNy4zOTI1czcuMzkyNS0zLjMwOTcsNy4zOTI1LTcuMzkyNXYtMy44MDE5YzAtLjMxNS0uMDE5Ny0uNjI1My0uMDU3OS0uOTNabS0zLjA4NzgsMy45MjI4YzAsMi4zNDU1LTEuOTAxNCw0LjI0NjgtNC4yNDY4LDQuMjQ2OHMtNC4yNDY4LTEuOTAxNC00LjI0NjgtNC4yNDY4di0yLjE4NGMwLTIuMzQ1NSwxLjkwMTQtNC4yNDY3LDQuMjQ2OC00LjI0NjcsMi4xNjQ1LDAsMy45NTA3LDEuNjE5MSw0LjIxMzUsMy43MTI0LjAyMi4xNzUuMDMzMy4zNTMzLjAzMzMuNTM0M3YyLjE4NFoiLz4KICAgIDxwYXRoIGZpbGw9IiNkMGNmY2UiIGQ9Im00Mi42MzQ2LDU0LjA3NTZjLS40NTc0LTMuNjQzOC0zLjU2NjgtNi40NjI1LTcuMzM0Ni02LjQ2MjUtNC4wODI4LDAtNy4zOTI1LDMuMzA5Ny03LjM5MjUsNy4zOTI1djMuODAxOWMwLDQuMDgyOCwzLjMwOTgsNy4zOTI1LDcuMzkyNSw3LjM5MjVzNy4zOTI1LTMuMzA5Nyw3LjM5MjUtNy4zOTI1di0zLjgwMTljMC0uMzE1LS4wMTk3LS42MjUzLS4wNTc5LS45M1ptLTMuMDg3OCwzLjkyMjhjMCwyLjM0NTUtMS45MDE0LDQuMjQ2OC00LjI0NjgsNC4yNDY4cy00LjI0NjgtMS45MDE0LTQuMjQ2OC00LjI0Njh2LTIuMTg0YzAtMi4zNDU1LDEuOTAxNC00LjI0NjcsNC4yNDY4LTQuMjQ2NywyLjE2NDUsMCwzLjk1MDcsMS42MTkxLDQuMjEzNSwzLjcxMjQuMDIyLjE3NS4wMzMzLjM1MzMuMDMzMy41MzQzdjIuMTg0WiIvPgogIDwvZz4KICA8ZyBpZD0ibGluZSI+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJtMzkuNTQ2OCw1Ny45OTg1YzAsMi4zNDU0LTEuOTAxMyw0LjI0NjgtNC4yNDY4LDQuMjQ2OHMtNC4yNDY4LTEuOTAxMy00LjI0NjgtNC4yNDY4di0yLjE4NGMwLTIuMzQ1NCwxLjkwMTMtNC4yNDY4LDQuMjQ2OC00LjI0NjgsMi4xNjQ1LDAsMy45NTA3LDEuNjE5Myw0LjIxMzUsMy43MTI1LjAyMi4xNzUuMDMzMy4zNTMzLjAzMzMuNTM0MnYyLjE4NDFaIi8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJtNDIuNjkyNSw1OC44MDc0YzAsNC4wODI4LTMuMzA5Nyw3LjM5MjUtNy4zOTI1LDcuMzkyNXMtNy4zOTI1LTMuMzA5Ny03LjM5MjUtNy4zOTI1di0zLjgwMTljMC00LjA4MjgsMy4zMDk3LTcuMzkyNSw3LjM5MjUtNy4zOTI1LDMuNzY3OCwwLDYuODc3MiwyLjgxODgsNy4zMzQ2LDYuNDYyNS4wMzgyLjMwNDYuMDU3OS42MTUuMDU3OS45M3YzLjgwMTlaIi8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJtMzkuNTQ2OCwzNy4xODQ1YzAsMi4zNDU0LTEuOTAxMyw0LjI0NjgtNC4yNDY4LDQuMjQ2OHMtNC4yNDY4LTEuOTAxMy00LjI0NjgtNC4yNDY4di0yLjE4NGMwLTIuMzQ1NCwxLjkwMTMtNC4yNDY4LDQuMjQ2OC00LjI0NjgsMi4xNjQ1LDAsMy45NTA3LDEuNjE5Myw0LjIxMzUsMy43MTI1LjAyMi4xNzUuMDMzMy4zNTMzLjAzMzMuNTM0MnYyLjE4NDFaIi8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJtNDIuNjkyNSwzNy45OTM0YzAsNC4wODI4LTMuMzA5Nyw3LjM5MjUtNy4zOTI1LDcuMzkyNXMtNy4zOTI1LTMuMzA5Ny03LjM5MjUtNy4zOTI1di0zLjgwMTljMC00LjA4MjgsMy4zMDk3LTcuMzkyNSw3LjM5MjUtNy4zOTI1LDMuNzY3OCwwLDYuODc3MiwyLjgxODgsNy4zMzQ2LDYuNDYyNS4wMzgyLjMwNDYuMDU3OS42MTUuMDU3OS45M3YzLjgwMTlaIi8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJtMzkuNTQ2OCwxNi4zNzA1YzAsMi4zNDU0LTEuOTAxMyw0LjI0NjgtNC4yNDY4LDQuMjQ2OHMtNC4yNDY4LTEuOTAxMy00LjI0NjgtNC4yNDY4di0yLjE4NGMwLTIuMzQ1NCwxLjkwMTMtNC4yNDY4LDQuMjQ2OC00LjI0NjgsMi4xNjQ1LDAsMy45NTA3LDEuNjE5Myw0LjIxMzUsMy43MTI1LjAyMi4xNzUuMDMzMy4zNTMzLjAzMzMuNTM0MnYyLjE4NDFaIi8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJtNDIuNjkyNSwxNy4xNzk0YzAsNC4wODI4LTMuMzA5Nyw3LjM5MjUtNy4zOTI1LDcuMzkyNXMtNy4zOTI1LTMuMzA5Ny03LjM5MjUtNy4zOTI1di0zLjgwMTljMC00LjA4MjgsMy4zMDk3LTcuMzkyNSw3LjM5MjUtNy4zOTI1LDMuNzY3OCwwLDYuODc3MiwyLjgxODgsNy4zMzQ2LDYuNDYyNS4wMzgyLjMwNDYuMDU3OS42MTUuMDU3OS45M3YzLjgwMTlaIi8+CiAgICA8bGluZSB4MT0iMzUuNSIgeDI9IjM1LjUiIHkxPSIzOC44OTE5IiB5Mj0iNTQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSIzNS41IiB4Mj0iMzUuNSIgeTE9IjE3LjkzMDciIHkyPSIzMy4wMzg5IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgPC9nPgo8L3N2Zz4=", "chapters": ["hist-ww1"], "provenance": "verified"}, {"id": "om-1F4E2", "type": "illustration", "title": "Propaganda", "alt": "Megafon", "caption": "Gleichschaltung heisst: nur eine Stimme bleibt.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-1F4E2/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-1F4E2.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiPgogICAgPGNpcmNsZSBjeD0iNTkuMzgzMiIgY3k9IjM2LjM4IiByPSI1IiBmaWxsPSIjM2YzZjNmIiBzdHJva2U9IiMzZjNmM2YiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8cGF0aCBmaWxsPSIjZDBjZmNlIiBkPSJtNTcuNzM4NSwxMS4zNzUybC0xNi40MzUsMTMuMzQ2SDEyLjU5MTVjLTEuNjU0OC4wMDUtMi45OTUsMS4zNDUyLTMsM3YxNi42OTJjLjAwNSwxLjY1NDgsMS4zNDUyLDIuOTk1LDMsM2gyOC43MTJsMTYuNDM2LDEzLjEyOC0uMDAxLTQ5LjE2NloiLz4KICAgIDxwb2x5Z29uIGZpbGw9IiM5YjliOWEiIHBvaW50cz0iMTguNjg2OSAyNS4wMTE0IDExLjE1MTkgMjQuOTQ4MiA5LjYyMyAyNi44NTkzIDkuNTY4NCA0NS4wNDE4IDExLjY5NzkgNDcuNDk4OSAxOC41MjMxIDQ3LjQ0NDMgMTguNjg2OSAyNS4wMTE0Ii8+CiAgICA8cGF0aCBmaWxsPSIjOWI5YjlhIiBkPSJtMjcuNzUwMiw0Ny43NDY0djEyLjI5MzRjMCwxLjUwODgtMS4xMTc1LDIuNzMxOS0yLjQ5NjIsMi43MzE5aC00Ljk5MjRjLTEuMzc4NSwwLTIuNDk2Mi0xLjIyMzEtMi40OTYyLTIuNzMxOXYtMTIuMjkzNCIvPgogIDwvZz4KICA8ZyBpZD0ibGluZSI+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJtNTcuNzM4NSwxMS4zNzUybC0xNi40MzUsMTMuMzQ2SDEyLjU5MTVjLTEuNjU0OC4wMDUtMi45OTUsMS4zNDUyLTMsM3YxNi42OTJjLjAwNSwxLjY1NDgsMS4zNDUyLDIuOTk1LDMsM2gyOC43MTJsMTYuNDM2LDEzLjEyOC0uMDAxLTQ5LjE2NloiLz4KICAgIDxsaW5lIHgxPSIxOC43NTA4IiB4Mj0iMTguNzUwOCIgeTE9IjI1LjMzMzIiIHkyPSI0Ni41ODMyIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJtMjYuNzUwOCw1MS40NDQ3djljMCwxLjEwNDYtLjg5NTQsMi0yLDJoLTRjLTEuMTA0NSwwLTItLjg5NTQtMi0ydi05Ii8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJtNjEuNjE0NSwzMS45MDczYzEuNjQ4Ni44MTczLDIuNzgyLDIuNTE3NSwyLjc4Miw0LjQ4MjMsMCwxLjk2NTktMS4xMzQ2LDMuNjY2Ny0yLjc4NDYsNC40ODM2Ii8+CiAgPC9nPgo8L3N2Zz4=", "chapters": ["hist-dictatorships"], "provenance": "verified"}, {"id": "om-1F30D", "type": "illustration", "title": "Weltkugel", "alt": "Erde, Europa und Afrika", "caption": "1941 wurde aus dem europäischen Krieg ein Weltkrieg.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-1F30D/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-1F30D.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiPgogICAgPGNpcmNsZSBjeD0iMzYiIGN5PSIzNiIgcj0iMjgiIGZpbGw9IiM5MkQzRjUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPHBhdGggZmlsbD0iI0IxQ0MzMyIgc3Ryb2tlPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNNDkuNDM5NCwxMS40MzAxQzQ4LjkwMTIsMTIuMzM2MSw0Ny43OTUyLDEzLjU3MjYsNDcsMTRjLTEuMjQ1MiwwLjY2OTItMS45MDQsMC4yNjcyLTMsMWMtMS4yNjg5LDAuODQ4NC0xLjIwOTUsMS45Mzc5LTIsMiBjLTAuODAxOCwwLjA2My0wLjY4NzktMS45OTMtMS0zYy0wLjQ1MjEtMS40NTg1LTAuMjMwNy0xLjUyNjctMS0yYy0xLjA4MzQtMC42NjY1LTMuMjEyMS0xLjA1MDItNSwwIGMtMC43MDk0LDAuNDE2Ny0wLjc1MDYsMC42ODItMyw0Yy0xLjcwOTYsMi41MjE4LTIuMTg4LDMuMTA5My0yLDRjMC4xOTg5LDAuOTQxOSwwLjA0MjcsMS43NDc0LDEsMiBjMS4xODczLDAuMzEzMiwxLjM2NjEtMC4yNzIyLDItMWMxLjMyODItMS41MjUsMi4zNTgxLTMuNzgyOCwzLTRjMC41NzEzLTAuMTkzMywyLjA2NTYsMS4zNDk1LDIsM2MtMC4wNDYzLDEuMTY1NC0wLjg1MiwxLjkyMi0yLDMgYy0wLjc0MTcsMC42OTY1LTIuODc1LDEuNS02LDJjLTEuNzE5LDAuMjc1LTEuNDA4MywwLjg1MjQtMi4wNjI1LDEuNTkzOGMtMC44NDI3LDAuOTU1LTAuNDYxNSwyLjE2OTEtMS4yODEyLDMuMzEyNSBjLTEuMDI1MiwxLjQzLTMuNDcyNywxLjc5MTctMy42NTY0LDIuNzE4OEMyMi44NDMyLDMzLjQxNTQsMjQuOTYwNCwzMy45ODQ1LDI2LDM0YzAuODUwNSwwLjAxMjcsMS4wNjQ0LTAuNzcyMSwzLTIgYzAuNzQwOC0wLjQ3LDEuNzUtMS4yODEyLDIuNjg3NS0xLjI1YzAuNTA0MSwwLjAxNjgsMS44Mjg5LDAuMjg1MiwyLjM0MzgsMC43MTg4YzAuNTkzOCwwLjUtMC4xNTYyLDEuODQzOC0wLjQwNjIsMy4xNTYyIHMtMi44OTc2LDEuODY0Ni0zLjg1NDIsMi4wMjA4Yy0xLjU3MzcsMC4yNTctNC4xNDM5LTAuNTIyOC01LjYwNDIsMC45Mzc1Yy0xLDEtMS4xMTU1LDEuNzY2LTEuMTY2NywzLjQxNjcgYy0wLjAxMjksMC40MTcyLDAuOTM3LDMuMDMyMywyLDRjMS4xNDQyLDEuMDQxNiwyLjI5MzktMC44MzU2LDQsMGMxLjc0NTYsMC44NTQ5LDIuNDkzLDIuNzI4OCwzLDQgYzAuNTA3OCwxLjI3MzEsMC4xNzU2LDEuMTY3OSwxLDVjMC40MTQ2LDEuOTI3MSwwLjMxOTEsMS4xMTk0LDEsNGMwLjU2MzIsMi4zODI2LDAuNTg4OSwyLjc2NzgsMSwzIGMxLjE3MzIsMC42NjI4LDMuODk5Ny0wLjgxNjIsNS0zYzAuNjg5NS0xLjM2ODMsMC4yMTExLTEuOTYyNSwxLTVjMC4zOTI4LTEuNTEyMywwLjU4OTItMi4yNjg1LDEtMyBjMS43MzMyLTMuMDg2MSw0Ljg4MjgtMy4xMjU2LDUtNWMwLjA4MDItMS4yODI0LTEuMzU3My0xLjg1MTUtMS0zYzAuMzQyMS0xLjA5OTcsMS44MDk5LTEuMDYwMywyLTIgYzAuMjU3OS0xLjI3NTItMi4yNDkyLTIuMzE2LTItM2MwLjI4MjItMC43NzQ2LDQuMDY5Ni0xLjAwOTgsNiwxYzAuNjM5NywwLjY2NiwwLjQ5ODIsMC45Nzc1LDIsNGMxLjM4MzksMi43ODUxLDEuNzYzNywzLjA0MzEsMiwzIGMwLjQyODctMC4wNzgyLDAuMzIyMy0xLjEzNTUsMS0zYzAuMzI0My0wLjg5MjIsMS4wOTI3LTMuMDA2MiwyLTNjMC42MjQ3LDAuMDA0MywwLjczODYsMS4wMDk3LDIsMiBjMC43MTAzLDAuNTU3NiwxLjc5MDgsMC44ODA2LDIuMzQ3NCwxLjAzNzhDNjMuNzc0Nyw0MC4wOTMyLDY0LDM4LjA3MjksNjQsMzZjMC0xMC42MzE1LTUuOTI1Mi0xOS44NzkxLTE0LjY1MzUtMjQuNjIwNiIvPgogIDwvZz4KICA8ZyBpZD0iaGFpciIvPgogIDxnIGlkPSJza2luIi8+CiAgPGcgaWQ9InNraW4tc2hhZG93Ii8+CiAgPGcgaWQ9ImxpbmUiPgogICAgPGNpcmNsZSBjeD0iMzYiIGN5PSIzNiIgcj0iMjgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNNDkuNDM5NCwxMS40MzAxQzQ4LjkwMTIsMTIuMzM2MSw0Ny43OTUyLDEzLjU3MjYsNDcsMTRjLTEuMjQ1MiwwLjY2OTItMS45MDQsMC4yNjcyLTMsMWMtMS4yNjg5LDAuODQ4NC0xLjIwOTUsMS45Mzc5LTIsMiBjLTAuODAxOCwwLjA2My0wLjY4NzktMS45OTMtMS0zYy0wLjQ1MjEtMS40NTg1LTAuMjMwNy0xLjUyNjctMS0yYy0xLjA4MzQtMC42NjY1LTMuMjEyMS0xLjA1MDItNSwwIGMtMC43MDk0LDAuNDE2Ny0wLjc1MDYsMC42ODItMyw0Yy0xLjcwOTYsMi41MjE4LTIuMTg4LDMuMTA5My0yLDRjMC4xOTg5LDAuOTQxOSwwLjA0MjcsMS43NDc0LDEsMiBjMS4xODczLDAuMzEzMiwxLjM2NjEtMC4yNzIyLDItMWMxLjMyODItMS41MjUsMi4zNTgxLTMuNzgyOCwzLTRjMC41NzEzLTAuMTkzMywyLjA2NTYsMS4zNDk1LDIsM2MtMC4wNDYzLDEuMTY1NC0wLjg1MiwxLjkyMi0yLDMgYy0wLjc0MTcsMC42OTY1LTIuODc1LDEuNS02LDJjLTEuNzE5LDAuMjc1LTEuNDA4MywwLjg1MjQtMi4wNjI1LDEuNTkzOGMtMC44NDI3LDAuOTU1LTAuNDYxNSwyLjE2OTEtMS4yODEyLDMuMzEyNSBjLTEuMDI1MiwxLjQzLTMuNDcyNywxLjc5MTctMy42NTY0LDIuNzE4OEMyMi44NDMyLDMzLjQxNTQsMjQuOTYwNCwzMy45ODQ1LDI2LDM0YzAuODUwNSwwLjAxMjcsMS4wNjQ0LTAuNzcyMSwzLTIgYzAuNzQwOC0wLjQ3LDEuNzUtMS4yODEyLDIuNjg3NS0xLjI1YzAuNTA0MSwwLjAxNjgsMS44Mjg5LDAuMjg1MiwyLjM0MzgsMC43MTg4YzAuNTkzOCwwLjUtMC4xNTYyLDEuODQzOC0wLjQwNjIsMy4xNTYyIHMtMi44OTc2LDEuODY0Ni0zLjg1NDIsMi4wMjA4Yy0xLjU3MzcsMC4yNTctNC4xNDM5LTAuNTIyOC01LjYwNDIsMC45Mzc1Yy0xLDEtMS4xMTU1LDEuNzY2LTEuMTY2NywzLjQxNjcgYy0wLjAxMjksMC40MTcyLDAuOTM3LDMuMDMyMywyLDRjMS4xNDQyLDEuMDQxNiwyLjI5MzktMC44MzU2LDQsMGMxLjc0NTYsMC44NTQ5LDIuNDkzLDIuNzI4OCwzLDQgYzAuNTA3OCwxLjI3MzEsMC4xNzU2LDEuMTY3OSwxLDVjMC40MTQ2LDEuOTI3MSwwLjMxOTEsMS4xMTk0LDEsNGMwLjU2MzIsMi4zODI2LDAuNTg4OSwyLjc2NzgsMSwzIGMxLjE3MzIsMC42NjI4LDMuODk5Ny0wLjgxNjIsNS0zYzAuNjg5NS0xLjM2ODMsMC4yMTExLTEuOTYyNSwxLTVjMC4zOTI4LTEuNTEyMywwLjU4OTItMi4yNjg1LDEtMyBjMS43MzMyLTMuMDg2MSw0Ljg4MjgtMy4xMjU2LDUtNWMwLjA4MDItMS4yODI0LTEuMzU3My0xLjg1MTUtMS0zYzAuMzQyMS0xLjA5OTcsMS44MDk5LTEuMDYwMywyLTIgYzAuMjU3OS0xLjI3NTItMi4yNDkyLTIuMzE2LTItM2MwLjI4MjItMC43NzQ2LDQuMDY5Ni0xLjAwOTgsNiwxYzAuNjM5NywwLjY2NiwwLjQ5ODIsMC45Nzc1LDIsNGMxLjM4MzksMi43ODUxLDEuNzYzNywzLjA0MzEsMiwzIGMwLjQyODctMC4wNzgyLDAuMzIyMy0xLjEzNTUsMS0zYzAuMzI0My0wLjg5MjIsMS4wOTI3LTMuMDA2MiwyLTNjMC42MjQ3LDAuMDA0MywwLjczODYsMS4wMDk3LDIsMiBjMC43MTAzLDAuNTU3NiwxLjc5MDgsMC44ODA2LDIuMzQ3NCwxLjAzNzhDNjMuNzc0Nyw0MC4wOTMyLDY0LDM4LjA3MjksNjQsMzZjMC0xMC42MzE1LTUuOTI1Mi0xOS44NzkxLTE0LjY1MzUtMjQuNjIwNiB6Ii8+CiAgPC9nPgo8L3N2Zz4=", "chapters": ["hist-ww2-world"], "provenance": "verified"}, {"id": "om-1F91D", "type": "illustration", "title": "Handschlag", "alt": "Zwei Hände", "caption": "Bandung suchte einen dritten Weg zwischen den Blöcken.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-1F91D/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-1F91D.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiLz4KICA8ZyBpZD0ic2tpbiI+CiAgICA8ZyBpZD0ic2tpbi1hIj4KICAgICAgPHBhdGggZmlsbD0iI2ZjZWEyYiIgZD0iTTYyLjYyMiw0MC4zMzhjLjk2LDMuMjUtMS4xMDksNS45ODMtNC40MzUsNS4zOTIuNDQzLDMuMjQ5LTIuNzM1LDYuMTMtNi41NzksNC4yODMsMS40NzgsMy43NjYtMS45OTcsNS45MDgtNC43MzEsNC4yODMsMS40MDMsMS42OTg1LS44MTMsNy40Ni05LjM4NywxLjk5NGwtMS42NDI2LS45MDMzTDE2LjUwODgsNDQuNzUyMiwxNS4wNSw0My45NXMtNy4xMzMtNS44MjItOC41MzctOC4yNTljLTQuMzkyLTcuNTk1Ljk0ODktMTkuNzksMTAuNDQtMjEuODJsNy45NDI2LTEuNDI0Myw1LjIzOTEsNy45NDY5LDEzLjA3MzgsNi4wMDQzTDU2LDMzLjU4bDMuNjg1NCwzLjc2NzVaIi8+CiAgICA8L2c+CiAgICA8ZyBpZD0ic2tpbi1iIj4KICAgICAgPHBhdGggZmlsbD0iI2ZjZWEyYiIgZD0iTTYyLjYyMiw0MC4zMzhjNi43MjEtNC41ODUsNS4wNDEtMTkuMDMtLjA5ODgtMjUuMzYtOS4yODctMS40NTktMTEtMi4zNjItMjAuOTgtMy45NDNsLTEzLjUzLS42MTg1YTMuOTkzNCwzLjk5MzQsMCwwLDAtNC43NzksMi41MzMsMzIuODU2OCwzMi44NTY4LDAsMCwxLTMuNTk5LDguMzc4LDMuNTM4NywzLjUzODcsMCwwLDAsMS44NzIsNC41ODhjMS45MDguNDc2NywyLjc4LS4zODYsNC40Ni0xLjY4NmEyNS45NTQxLDI1Ljk1NDEsMCwwLDAsMy44MDUtNC41NzVsMTMuNjQsNi4yMDQsMTIuNzIsNy4xNjRjMi41MTQsMS42OTgsNS4wMTIsNS44NDQsNi41MSw3LjMyMSIvPgogICAgICA8cGF0aCBmaWxsPSIjZmNlYTJiIiBkPSJNMzEuNTEsNTQuMTVhMy4wMjE4LDMuMDIxOCwwLDAsMSw0LjE0NC0uOWMxLjQwNS44MTI1LDIuNDM5LDIuMzYyLDEuNDc4LDQuMDYzbC0xLjc3NCwzLjEwMUEzLjI3LDMuMjcsMCwwLDEsMjkuNyw1Ny4yNDI0bDEuODEtMy4wOTRaIi8+CiAgICAgIDxwYXRoIGZpbGw9IiNmY2VhMmIiIGQ9Ik0yNS44NCw1MC45OGEzLjAyMTgsMy4wMjE4LDAsMCwxLDQuMTQ0LS45YzEuNDA1LjgxMjUsMi40MzksMi4zNjIsMS40NzgsNC4wNjNsLTEuNzc0LDMuMTAxYTMuMjcsMy4yNywwLDAsMS01LjY1OC0zLjE3MTNsMS44MS0zLjA5NFoiLz4KICAgICAgPHBhdGggZmlsbD0iI2ZjZWEyYiIgZD0iTTIwLjE4LDQ3LjgyYTMuMDIxOCwzLjAyMTgsMCwwLDEsNC4xNDQtLjljMS40MDUuODEyNSwyLjQzOSwyLjM2MiwxLjQ3OCw0LjA2M2wtMS43NzQsMy4xMDFhMy4yNywzLjI3LDAsMCwxLTUuNjU4LTMuMTcxM2wxLjgxLTMuMDk0WiIvPgogICAgICA8cGF0aCBmaWxsPSIjZmNlYTJiIiBkPSJNMTQuNTMsNDQuNjVhMy4wMjE4LDMuMDIxOCwwLDAsMSw0LjE0NC0uOWMxLjQwNS44MTI1LDIuNDM5LDIuMzYyLDEuNDc4LDQuMDYzbC0xLjc3NCwzLjEwMWEzLjI3LDMuMjcsMCwwLDEtNS42NTgtMy4xNzEzbDEuODEtMy4wOTRaIi8+CiAgICA8L2c+CiAgPC9nPgogIDxnIGlkPSJsaW5lIj4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xNS4wNSw0My45NXMtNy4xMzMtNS44MjItOC41MzctOC4yNTljLTQuMzkyLTcuNTk1Ljk0ODktMTkuNzksMTAuNDQtMjEuODIiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0zOC43MSw0Mi45OSw1MS42LDUwLjAxMSIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTMzLjg3LDQ3Ljc5bDEzLDYuNDk4Ii8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNNTguMTgsNDUuNzJsLTUuMS00LjM1OC04LjI3OS00LjMzNSIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0ibTI5Ljc3MiAxOS42NTQgMTMuNjQgNi4yMDQgMTIuNzIgNy4xNjRjMi41MTQgMS42OTggNS4wMTIgNS44NDQgNi41MSA3LjMyMSIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTM3LjQ5LDU2LjI5YzguNTc0LDUuNDY2LDEwLjc5LS4yOTU1LDkuMzg3LTEuOTk0LDIuNzM0LDEuNjI1LDYuMjA5LS41MTcsNC43MzEtNC4yODMsMy44NDQsMS44NDcsNy4wMjItMS4wMzQsNi41NzktNC4yODMsMy4zMjYuNTkxLDUuMzk1LTIuMTQyLDQuNDM1LTUuMzkyLDYuNzIxLTQuNTg1LDUuMDQxLTE5LjAzLS4wOTg4LTI1LjM2LTkuMjg3LTEuNDU5LTExLTIuMzYyLTIwLjk4LTMuOTQzbC0xMy41My0uNjE4NWEzLjk5MzQsMy45OTM0LDAsMCwwLTQuNzc5LDIuNTMzLDMyLjg1NjgsMzIuODU2OCwwLDAsMS0zLjU5OSw4LjM3OCwzLjUzODcsMy41Mzg3LDAsMCwwLDEuODcyLDQuNTg4YzEuOTA4LjQ3NjcsMi43OC0uMzg2LDQuNDYtMS42ODZhMjUuOTU0MSwyNS45NTQxLDAsMCwwLDMuODA1LTQuNTc1Ii8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMzEuNTEsNTQuMTVhMy4wMjE4LDMuMDIxOCwwLDAsMSw0LjE0NC0uOWMxLjQwNS44MTI1LDIuNDM5LDIuMzYyLDEuNDc4LDQuMDYzbC0xLjc3NCwzLjEwMUEzLjI3LDMuMjcsMCwwLDEsMjkuNyw1Ny4yNDI0bDEuODEtMy4wOTRaIi8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMjUuODQsNTAuOThhMy4wMjE4LDMuMDIxOCwwLDAsMSw0LjE0NC0uOWMxLjQwNS44MTI1LDIuNDM5LDIuMzYyLDEuNDc4LDQuMDYzbC0xLjc3NCwzLjEwMWEzLjI3LDMuMjcsMCwwLDEtNS42NTgtMy4xNzEzbDEuODEtMy4wOTRaIi8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMjAuMTgsNDcuODJhMy4wMjE4LDMuMDIxOCwwLDAsMSw0LjE0NC0uOWMxLjQwNS44MTI1LDIuNDM5LDIuMzYyLDEuNDc4LDQuMDYzbC0xLjc3NCwzLjEwMWEzLjI3LDMuMjcsMCwwLDEtNS42NTgtMy4xNzEzbDEuODEtMy4wOTRaIi8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMTQuNTMsNDQuNjVhMy4wMjE4LDMuMDIxOCwwLDAsMSw0LjE0NC0uOWMxLjQwNS44MTI1LDIuNDM5LDIuMzYyLDEuNDc4LDQuMDYzbC0xLjc3NCwzLjEwMWEzLjI3LDMuMjcsMCwwLDEtNS42NTgtMy4xNzEzbDEuODEtMy4wOTRaIi8+CiAgPC9nPgo8L3N2Zz4=", "chapters": ["hist-bandung-decolonisation"], "provenance": "verified"}, {"id": "om-1F1E8-1F1F3", "type": "illustration", "title": "Flagge Chinas", "alt": "Flagge", "caption": "Wirtschaftliche Öffnung ohne politische Öffnung.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-1F1E8-1F1F3/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-1F1E8-1F1F3.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiPgogICAgPHJlY3QgeD0iNSIgeT0iMTciIHdpZHRoPSI2MiIgaGVpZ2h0PSIzOCIgZmlsbD0iI2QyMmYyNyIvPgogICAgPGNpcmNsZSBjeD0iMjQiIGN5PSIzNCIgcj0iMS43NSIgZmlsbD0iI2YxYjMxYyIvPgogICAgPGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iMS43NSIgZmlsbD0iI2YxYjMxYyIvPgogICAgPGNpcmNsZSBjeD0iMjgiIGN5PSIzMSIgcj0iMS43NSIgZmlsbD0iI2YxYjMxYyIvPgogICAgPGNpcmNsZSBjeD0iMjgiIGN5PSIyNiIgcj0iMS43NSIgZmlsbD0iI2YxYjMxYyIvPgogICAgPHBvbHlnb24gZmlsbD0iI2YxYjMxYyIgc3Ryb2tlPSIjZjFiMzFjIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBvaW50cz0iMTMuNTI4IDMyLjQ0NSAxNiAyNC40NDUgMTguNDczIDMyLjQ0NSAxMiAyNy41IDIwIDI3LjUgMTMuNTI4IDMyLjQ0NSIvPgogIDwvZz4KICA8ZyBpZD0ibGluZSI+CiAgICA8cmVjdCB4PSI1IiB5PSIxNyIgd2lkdGg9IjYyIiBoZWlnaHQ9IjM4IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgPC9nPgo8L3N2Zz4=", "chapters": ["hist-china-1949"], "provenance": "verified"}, {"id": "om-1F54C", "type": "illustration", "title": "Sakralbau", "alt": "Kuppelbau", "caption": "Der Konflikt hat Territorium, Recht und Religion als Ebenen.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-1F54C/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-1F54C.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiPgogICAgPHBhdGggZmlsbD0iI2QwY2ZjZSIgZD0iTTU0Ljk3NDgsMzVoLTI2YS45OTk0Ljk5OTQsMCwwLDAtMSwxdjUuNDJoLTUuNVYxNmExLDEsMCwwLDAtMS0xaC01YTEsMSwwLDAsMC0xLDFWNTZhLjk5OTQuOTk5NCwwLDAsMCwxLDFoNWwuMDAwOSwwSDU0Ljk3NDhhLjk5OTQuOTk5NCwwLDAsMCwxLTFWMzZBMSwxLDAsMCwwLDU0Ljk3NDgsMzVaIi8+CiAgICA8Y2lyY2xlIGN4PSI0MS45NjY3IiBjeT0iMjAuMDA3OSIgcj0iMiIgZmlsbD0iI2Y0YWE0MSIvPgogICAgPHBhdGggZmlsbD0iIzliOWI5YSIgZD0iTTQxLjk3NDYsNDFsLTMuNDk2Miw1LjI0NDJhMywzLDAsMCwwLS41MDM4LDEuNjY0MVY1Nmg4VjQ3LjkwODNhMywzLDAsMCwwLS41MDM4LTEuNjY0MVoiLz4KICAgIDxwYXRoIGZpbGw9IiM5YjliOWEiIGQ9Ik0yMS45MDg0LDI4LjE5MjRIMTZhMSwxLDAsMCwxLS45NDgzLS42ODE3bC0xLjk3NDYtNS44NzY0YTEuMDAxLDEuMDAxLDAsMCwxLC45NDgyLTEuMzE4NEgyMy45MjRBMS4wMDA4LDEuMDAwOCwwLDAsMSwyNC44NywyMS42NGwtMi4wMTU3LDUuODc2NUExLjAwMDksMS4wMDA5LDAsMCwxLDIxLjkwODQsMjguMTkyNFoiLz4KICAgIDxwYXRoIGZpbGw9IiM5YjliOWEiIGQ9Ik0yMS45MDg0LDQyLjQwNTNIMTZhMSwxLDAsMCwxLS45NDgzLS42ODE2bC0xLjk3NDYtNS44NzY1YTEuMDAxLDEuMDAxLDAsMCwxLC45NDgyLTEuMzE4NEgyMy45MjRhMS4wMDA4LDEuMDAwOCwwLDAsMSwuOTQ2MywxLjMyNDNMMjIuODU0Niw0MS43M0ExLjAwMDksMS4wMDA5LDAsMCwxLDIxLjkwODQsNDIuNDA1M1oiLz4KICAgIDxwYXRoIGZpbGw9IiNmNGFhNDEiIGQ9Ik01My40MzQ3LDM3aC0yMi45MmExLjAwMTUsMS4wMDE1LDAsMCwxLS44NzctLjUxODZBOS4zNDY1LDkuMzQ2NSwwLDAsMSwyOC40NzQ4LDMyYzAtNi4wNjU0LDYuMDU1Ni0xMSwxMy41LTExczEzLjUsNC45MzQ2LDEzLjUsMTFhOS4zNDY2LDkuMzQ2NiwwLDAsMS0xLjE2MzEsNC40ODE0QTEuMDAxNCwxLjAwMTQsMCwwLDEsNTMuNDM0NywzN1oiLz4KICAgIDxwYXRoIGZpbGw9IiNmNGFhNDEiIGQ9Ik0yMS40NzQ4LDE3LjAwMDVjLS40Mjc4LDAtNC43NjQ3LjExNzctNS4yOTQtLjA0NDRhMS4wMDA3LDEuMDAwNywwLDAsMS0uNjYyMS0xLjI1bDIuNS04LjEzNjdhMSwxLDAsMCwxLDEuOTEyMSwwbDIuNSw4LjEzNjdhMS4wMDA2LDEuMDAwNiwwLDAsMS0uNjYyMSwxLjI1QTEuMDEzMiwxLjAxMzIsMCwwLDEsMjEuNDc0OCwxNy4wMDA1WiIvPgogIDwvZz4KICA8ZyBpZD0ibGluZSI+CiAgICA8cmVjdCB4PSI0MS45NjY3IiB5PSIxNS4wMDc5IiBoZWlnaHQ9IjMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNNTQuNDc0NiwzMmE4LjI3OTMsOC4yNzkzLDAsMCwxLTEuMDQsNGgtMjIuOTJhOC4yNzkzLDguMjc5MywwLDAsMS0xLjA0LTRjMC01LjUyLDUuNi0xMCwxMi41LTEwUzU0LjQ3NDYsMjYuNDgsNTQuNDc0NiwzMloiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik01NC45NzQ2LDU2aC0zOC41Ii8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMjguOTc0Niw1Mi45MjQzVjM2aDI2VjUyLjkyNDMiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0yMS40NzQ2LDQxLjQyaDcuNSIvPgogICAgPGNpcmNsZSBjeD0iNDEuOTY2NyIgY3k9IjIwLjAwNzkiIHI9IjIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxyZWN0IHg9IjQxLjk2NjciIHk9IjE1LjAwNzkiIGhlaWdodD0iMyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTQ1Ljk3NDYsNDcuOTFWNTZoLThWNDcuOTFhMy4xMSwzLjExLDAsMCwxLC41LTEuNjdsMi44NC00LjI1LjY2LS45OS42Ni45OSwyLjg0LDQuMjVBMy4xMSwzLjExLDAsMCwxLDQ1Ljk3NDYsNDcuOTFaIi8+CiAgICA8bGluZSB4MT0iMTYuNDc0NiIgeDI9IjE2LjQ3NDYiIHkxPSI1Mi45MjQzIiB5Mj0iNDEuNDIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSIyMS40NzQ2IiB4Mj0iMjEuNDc0NiIgeTE9IjQxLjQyIiB5Mj0iNTIuOTI0MyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPHBvbHlsaW5lIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIHBvaW50cz0iMTYuNDc1IDIxLjMxNiAxNi40NzUgMTYgMjEuNDc1IDE2IDIxLjQ3NSAyMS4zMTYiLz4KICAgIDxwb2x5Z29uIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIHBvaW50cz0iMjEuOTA4IDI3LjE5MyAxNiAyNy4xOTMgMTQuMDI1IDIxLjMxNiAyMy45MjQgMjEuMzE2IDIxLjkwOCAyNy4xOTMiLz4KICAgIDxwb2x5Z29uIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIHBvaW50cz0iMjEuOTA4IDQxLjQwNSAxNiA0MS40MDUgMTQuMDI1IDM1LjUyOSAyMy45MjQgMzUuNTI5IDIxLjkwOCA0MS40MDUiLz4KICAgIDxwb2x5bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBwb2ludHM9IjE2LjQ3NSAxNiAxOC45NzUgNy44NjMgMjEuNDc1IDE2Ii8+CiAgICA8bGluZSB4MT0iMTYuNDc0NiIgeDI9IjE2LjQ3NDYiIHkxPSIyNy4xOTI2IiB5Mj0iMzUuNTI4NyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPGxpbmUgeDE9IjIxLjQ3NDYiIHgyPSIyMS40NzQ2IiB5MT0iMjcuMTkyNiIgeTI9IjM1LjUyODciIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiLz4KICA8L2c+Cjwvc3ZnPg==", "chapters": ["hist-middle-east"], "provenance": "verified"}, {"id": "om-1F33E", "type": "illustration", "title": "Getreide", "alt": "Ähren", "caption": "Mit dem Wohlstand schrumpft der erste Sektor.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-1F33E/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-1F33E.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiPgogICAgPGVsbGlwc2UgY3g9IjM1LjgwOTYiIGN5PSIxMC4xNjE2IiByeD0iMy40ODE0IiByeT0iNS4xNjE2IiBmaWxsPSIjZjRhYTQxIi8+CiAgICA8ZWxsaXBzZSBjeD0iMzEuMjg3IiBjeT0iMTkuMjA2NyIgcng9IjMuNDgxNCIgcnk9IjUuMTYxNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQuNDE3NSAyNy43NDg4KSByb3RhdGUoLTQ1KSIgZmlsbD0iI2YxYjMxYyIvPgogICAgPGVsbGlwc2UgY3g9IjMxLjI4NyIgY3k9IjI3LjM0NzQiIHJ4PSIzLjQ4MTQiIHJ5PSI1LjE2MTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMC4xNzM3IDMwLjEzMzEpIHJvdGF0ZSgtNDUpIiBmaWxsPSIjZjFiMzFjIi8+CiAgICA8ZWxsaXBzZSBjeD0iMzEuMjg3IiBjeT0iMzUuNDg4IiByeD0iMy40ODE0IiByeT0iNS4xNjE2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTUuOTMgMzIuNTE3NCkgcm90YXRlKC00NSkiIGZpbGw9IiNmMWIzMWMiLz4KICAgIDxlbGxpcHNlIGN4PSIzMS4yODciIGN5PSI0My42Mjg2IiByeD0iMy40ODE0IiByeT0iNS4xNjE2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjEuNjg2MyAzNC45MDE4KSByb3RhdGUoLTQ1KSIgZmlsbD0iI2YxYjMxYyIvPgogICAgPGVsbGlwc2UgY3g9IjMxLjI4NyIgY3k9IjUxLjc2OTIiIHJ4PSIzLjQ4MTQiIHJ5PSI1LjE2MTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNy40NDI2IDM3LjI4NjEpIHJvdGF0ZSgtNDUpIiBmaWxsPSIjZjFiMzFjIi8+CiAgICA8ZWxsaXBzZSBjeD0iNDAuNzEzIiBjeT0iMTkuMjA2NyIgcng9IjUuMTYxNiIgcnk9IjMuNDgxNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEuNjU2NyAzNC40MTQpIHJvdGF0ZSgtNDUpIiBmaWxsPSIjZjFiMzFjIi8+CiAgICA8ZWxsaXBzZSBjeD0iNDAuNzEzIiBjeT0iMjcuMzQ3NCIgcng9IjUuMTYxNiIgcnk9IjMuNDgxNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTcuNDEyOSAzNi43OTgzKSByb3RhdGUoLTQ1KSIgZmlsbD0iI2YxYjMxYyIvPgogICAgPGVsbGlwc2UgY3g9IjQwLjcxMyIgY3k9IjM1LjQ4OCIgcng9IjUuMTYxNiIgcnk9IjMuNDgxNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEzLjE2OTIgMzkuMTgyNikgcm90YXRlKC00NSkiIGZpbGw9IiNmMWIzMWMiLz4KICAgIDxlbGxpcHNlIGN4PSI0MC43MTMiIGN5PSI0My42Mjg2IiByeD0iNS4xNjE2IiByeT0iMy40ODE0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTguOTI1NSA0MS41NjY5KSByb3RhdGUoLTQ1KSIgZmlsbD0iI2YxYjMxYyIvPgogICAgPGVsbGlwc2UgY3g9IjQwLjcxMyIgY3k9IjUxLjc2OTIiIHJ4PSI1LjE2MTYiIHJ5PSIzLjQ4MTQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNC42ODE4IDQzLjk1MTMpIHJvdGF0ZSgtNDUpIiBmaWxsPSIjZjFiMzFjIi8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMzUuNzksNTZ2OSIvPgogICAgPGVsbGlwc2UgY3g9IjM1LjgwOTYiIGN5PSIxMC4xNjE2IiByeD0iMy40ODE0IiByeT0iNS4xNjE2IiBmaWxsPSIjZjRhYTQxIi8+CiAgICA8ZWxsaXBzZSBjeD0iMzEuMjg3IiBjeT0iMTkuMjA2NyIgcng9IjMuNDgxNCIgcnk9IjUuMTYxNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQuNDE3NSAyNy43NDg4KSByb3RhdGUoLTQ1KSIgZmlsbD0iI2YxYjMxYyIvPgogICAgPGVsbGlwc2UgY3g9IjMxLjI4NyIgY3k9IjI3LjM0NzQiIHJ4PSIzLjQ4MTQiIHJ5PSI1LjE2MTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMC4xNzM3IDMwLjEzMzEpIHJvdGF0ZSgtNDUpIiBmaWxsPSIjZjFiMzFjIi8+CiAgICA8ZWxsaXBzZSBjeD0iMzEuMjg3IiBjeT0iMzUuNDg4IiByeD0iMy40ODE0IiByeT0iNS4xNjE2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTUuOTMgMzIuNTE3NCkgcm90YXRlKC00NSkiIGZpbGw9IiNmMWIzMWMiLz4KICAgIDxlbGxpcHNlIGN4PSIzMS4yODciIGN5PSI0My42Mjg2IiByeD0iMy40ODE0IiByeT0iNS4xNjE2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjEuNjg2MyAzNC45MDE4KSByb3RhdGUoLTQ1KSIgZmlsbD0iI2YxYjMxYyIvPgogICAgPGVsbGlwc2UgY3g9IjMxLjI4NyIgY3k9IjUxLjc2OTIiIHJ4PSIzLjQ4MTQiIHJ5PSI1LjE2MTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNy40NDI2IDM3LjI4NjEpIHJvdGF0ZSgtNDUpIiBmaWxsPSIjZjFiMzFjIi8+CiAgICA8ZWxsaXBzZSBjeD0iNDAuNzEzIiBjeT0iMTkuMjA2NyIgcng9IjUuMTYxNiIgcnk9IjMuNDgxNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEuNjU2NyAzNC40MTQpIHJvdGF0ZSgtNDUpIiBmaWxsPSIjZjFiMzFjIi8+CiAgICA8ZWxsaXBzZSBjeD0iNDAuNzEzIiBjeT0iMjcuMzQ3NCIgcng9IjUuMTYxNiIgcnk9IjMuNDgxNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTcuNDEyOSAzNi43OTgzKSByb3RhdGUoLTQ1KSIgZmlsbD0iI2YxYjMxYyIvPgogICAgPGVsbGlwc2UgY3g9IjQwLjcxMyIgY3k9IjM1LjQ4OCIgcng9IjUuMTYxNiIgcnk9IjMuNDgxNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEzLjE2OTIgMzkuMTgyNikgcm90YXRlKC00NSkiIGZpbGw9IiNmMWIzMWMiLz4KICAgIDxlbGxpcHNlIGN4PSI0MC43MTMiIGN5PSI0My42Mjg2IiByeD0iNS4xNjE2IiByeT0iMy40ODE0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTguOTI1NSA0MS41NjY5KSByb3RhdGUoLTQ1KSIgZmlsbD0iI2YxYjMxYyIvPgogICAgPGVsbGlwc2UgY3g9IjQwLjcxMyIgY3k9IjUxLjc2OTIiIHJ4PSI1LjE2MTYiIHJ5PSIzLjQ4MTQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNC42ODE4IDQzLjk1MTMpIHJvdGF0ZSgtNDUpIiBmaWxsPSIjZjFiMzFjIi8+CiAgICA8ZWxsaXBzZSBjeD0iMzUuODA5NiIgY3k9IjEwLjE2MTYiIHJ4PSIzLjQ4MTQiIHJ5PSI1LjE2MTYiIGZpbGw9IiNmMWIzMWMiLz4KICAgIDxlbGxpcHNlIGN4PSIzMS4yODciIGN5PSIxOS4yMDY3IiByeD0iMy40ODE0IiByeT0iNS4xNjE2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNC40MTc1IDI3Ljc0ODgpIHJvdGF0ZSgtNDUpIiBmaWxsPSIjZjFiMzFjIi8+CiAgICA8ZWxsaXBzZSBjeD0iMzEuMjg3IiBjeT0iMjcuMzQ3NCIgcng9IjMuNDgxNCIgcnk9IjUuMTYxNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEwLjE3MzcgMzAuMTMzMSkgcm90YXRlKC00NSkiIGZpbGw9IiNmMWIzMWMiLz4KICAgIDxlbGxpcHNlIGN4PSIzMS4yODciIGN5PSIzNS40ODgiIHJ4PSIzLjQ4MTQiIHJ5PSI1LjE2MTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNS45MyAzMi41MTc0KSByb3RhdGUoLTQ1KSIgZmlsbD0iI2YxYjMxYyIvPgogICAgPGVsbGlwc2UgY3g9IjMxLjI4NyIgY3k9IjQzLjYyODYiIHJ4PSIzLjQ4MTQiIHJ5PSI1LjE2MTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMS42ODYzIDM0LjkwMTgpIHJvdGF0ZSgtNDUpIiBmaWxsPSIjZjFiMzFjIi8+CiAgICA8ZWxsaXBzZSBjeD0iMzEuMjg3IiBjeT0iNTEuNzY5MiIgcng9IjMuNDgxNCIgcnk9IjUuMTYxNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI3LjQ0MjYgMzcuMjg2MSkgcm90YXRlKC00NSkiIGZpbGw9IiNmMWIzMWMiLz4KICAgIDxlbGxpcHNlIGN4PSI0MC43MTMiIGN5PSIxOS4yMDY3IiByeD0iNS4xNjE2IiByeT0iMy40ODE0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMS42NTY3IDM0LjQxNCkgcm90YXRlKC00NSkiIGZpbGw9IiNmMWIzMWMiLz4KICAgIDxlbGxpcHNlIGN4PSI0MC43MTMiIGN5PSIyNy4zNDc0IiByeD0iNS4xNjE2IiByeT0iMy40ODE0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNy40MTI5IDM2Ljc5ODMpIHJvdGF0ZSgtNDUpIiBmaWxsPSIjZjFiMzFjIi8+CiAgICA8ZWxsaXBzZSBjeD0iNDAuNzEzIiBjeT0iMzUuNDg4IiByeD0iNS4xNjE2IiByeT0iMy40ODE0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTMuMTY5MiAzOS4xODI2KSByb3RhdGUoLTQ1KSIgZmlsbD0iI2YxYjMxYyIvPgogICAgPGVsbGlwc2UgY3g9IjQwLjcxMyIgY3k9IjQzLjYyODYiIHJ4PSI1LjE2MTYiIHJ5PSIzLjQ4MTQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xOC45MjU1IDQxLjU2NjkpIHJvdGF0ZSgtNDUpIiBmaWxsPSIjZjFiMzFjIi8+CiAgICA8ZWxsaXBzZSBjeD0iNDAuNzEzIiBjeT0iNTEuNzY5MiIgcng9IjUuMTYxNiIgcnk9IjMuNDgxNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI0LjY4MTggNDMuOTUxMykgcm90YXRlKC00NSkiIGZpbGw9IiNmNGFhNDEiLz4KICA8L2c+CiAgPGcgaWQ9ImxpbmUiPgogICAgPGVsbGlwc2UgY3g9IjM1LjgwOTYiIGN5PSIxMC4xNjE2IiByeD0iMy40ODE0IiByeT0iNS4xNjE2IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8ZWxsaXBzZSBjeD0iMzEuMjg3IiBjeT0iMTkuMjA2NyIgcng9IjMuNDgxNCIgcnk9IjUuMTYxNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQuNDE3NSAyNy43NDg4KSByb3RhdGUoLTQ1KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPGVsbGlwc2UgY3g9IjMxLjI4NyIgY3k9IjI3LjM0NzQiIHJ4PSIzLjQ4MTQiIHJ5PSI1LjE2MTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMC4xNzM3IDMwLjEzMzEpIHJvdGF0ZSgtNDUpIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8ZWxsaXBzZSBjeD0iMzEuMjg3IiBjeT0iMzUuNDg4IiByeD0iMy40ODE0IiByeT0iNS4xNjE2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTUuOTMgMzIuNTE3NCkgcm90YXRlKC00NSkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxlbGxpcHNlIGN4PSIzMS4yODciIGN5PSI0My42Mjg2IiByeD0iMy40ODE0IiByeT0iNS4xNjE2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjEuNjg2MyAzNC45MDE4KSByb3RhdGUoLTQ1KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPGVsbGlwc2UgY3g9IjMxLjI4NyIgY3k9IjUxLjc2OTIiIHJ4PSIzLjQ4MTQiIHJ5PSI1LjE2MTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNy40NDI2IDM3LjI4NjEpIHJvdGF0ZSgtNDUpIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8ZWxsaXBzZSBjeD0iNDAuNzEzIiBjeT0iMTkuMjA2NyIgcng9IjUuMTYxNiIgcnk9IjMuNDgxNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEuNjU2NyAzNC40MTQpIHJvdGF0ZSgtNDUpIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8ZWxsaXBzZSBjeD0iNDAuNzEzIiBjeT0iMjcuMzQ3NCIgcng9IjUuMTYxNiIgcnk9IjMuNDgxNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTcuNDEyOSAzNi43OTgzKSByb3RhdGUoLTQ1KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPGVsbGlwc2UgY3g9IjQwLjcxMyIgY3k9IjM1LjQ4OCIgcng9IjUuMTYxNiIgcnk9IjMuNDgxNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEzLjE2OTIgMzkuMTgyNikgcm90YXRlKC00NSkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxlbGxpcHNlIGN4PSI0MC43MTMiIGN5PSI0My42Mjg2IiByeD0iNS4xNjE2IiByeT0iMy40ODE0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTguOTI1NSA0MS41NjY5KSByb3RhdGUoLTQ1KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPGVsbGlwc2UgY3g9IjQwLjcxMyIgY3k9IjUxLjc2OTIiIHJ4PSI1LjE2MTYiIHJ5PSIzLjQ4MTQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNC42ODE4IDQzLjk1MTMpIHJvdGF0ZSgtNDUpIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgPC9nPgo8L3N2Zz4=", "chapters": ["geo-economic-sectors-agriculture"], "provenance": "verified"}, {"id": "om-267B", "type": "illustration", "title": "Kreislauf", "alt": "Recyclingzeichen", "caption": "Nachhaltig heisst ökologisch, ökonomisch und sozial tragfähig.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-267B/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-267B.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiPgogICAgPHBvbHlnb24gZmlsbD0iI2ZmZiIgcG9pbnRzPSIyNC42MDAxIDQwLjY4OCAzNC41OTkyIDIyLjk1NDggNDQuNjU0NSA0MS43MjkxIDI0LjYwMDEgNDAuNjg4Ii8+CiAgICA8cGF0aCBmaWxsPSIjNWM5ZTMxIiBzdHJva2U9IiM1YzllMzEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJtMzQuNTk5MiwyMi45NTQ4bC0zLjYyMzQsNS45NDY2LTEwLTYsMi45OTM2LTUuMDQ3YzEuNDg4Mi0xLjkyOTgsNC4xMDg0LTIuNDcyNSw2LjIwNjUtMS40MTQzLjQ4OTUuMjQ2OS44ODg5LjY0NTQsMS4xNzE3LDEuMTE1MWwzLjIyMDksNS4zNDg3LjAzMDcuMDUwOVoiLz4KICAgIDxwYXRoIGZpbGw9IiM1YzllMzEiIHN0cm9rZT0iIzVjOWUzMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Im00NC41OTUsNDEuNzMxNmwtMy40ODIzLTYuMDMwMywxMC4wNTg5LTUuOTAwNywyLjk5NDcsNS4wNDY0Yy45ODA0LDIuMjMxMS4yMDA4LDQuNzkwOC0xLjczMzUsNi4xMjUtLjQ1MTMuMzExMy0uOTkyNS40NzA4LTEuNTQwMi40OTM5bC02LjIzODEuMjYzMi0uMDU5NS4wMDI1WiIvPgogICAgPHBhdGggZmlsbD0iI2IxY2MzMyIgc3Ryb2tlPSIjYjFjYzMzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0ibTE1LjE3MzYsNDAuNDc3M2w2LjM3ODYsMTEuNzE1My4wOTA1LjE2NzJjLjQ1Ny44MzQ1LDEuMDIyNy44MDE0LDEuNzk1NC44MDE0aDEuNzc1NWw1LjkyNzUtLjAyMDEtLjE3NDEtMTEuNjYwNi0zLjYwMTMuMDI5Mi05LjkwNzQtLjAyOTFoLS4wMTY4Yy0uMDA4NC0uMDAzNy0xLjYyNjMuMDAzNi0xLjYzNDYsMGwtLjYzMzMtMS4wMDMyWiIvPgogICAgPHBhdGggZmlsbD0iI2IxY2MzMyIgc3Ryb2tlPSIjYjFjYzMzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0ibTMxLjM3MTgsMTcuNTYwMmw1LjYyODIsOS4zNDYyLTEuOTAzOCwxLjI1MTksOC45MDM4Ljc0ODEsNS04LTIsMS0zLTUtLjA5NjYtLjE2MzdjLS40ODc3LS44MTY5LTEuMTIxNy0uODMwMi0xLjg2MDYtLjgzMDJsLTE0LjM2NzQtLjAwNTRzMi42MDI3LS4xNzcyLDMuNjk2NCwxLjY1MzFaIi8+CiAgICA8cGF0aCBmaWxsPSIjNWM5ZTMxIiBzdHJva2U9IiM1YzllMzEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJtMjgsMzcuOTA2MWwtMi0xLS40Ni42NTk5LTIuMzcsMy45MzAxLTUuNzEtLjAxOTloLS4wMmMtLjAxLDAtLjAyLDAtLjAyLS4wMS0yLjE0LS45NTAxLTMuNy0zLjQ3MDEtMi42OS01LjcwMDFsMy4wMy00Ljk4LTEuODItMS4zMDk5LDkuNDEuNywyLjY1LDcuNzI5OVoiLz4KICAgIDxwYXRoIGZpbGw9IiNiMWNjMzMiIHN0cm9rZT0iI2IxY2MzMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Im01My43ODY3LDM5LjUzMzNsLTYuNTk0NCwxMi4wNDEyYy0uMzU1NS42NDc3LS42ODk1LDEuNTQzNC0xLjY0MDMsMS41Nzc5bC0uMjg5MS4wMDA0LTUuNzQ4Mi0uMDA4LS4wNDc4LDIuMTI1Ni00LjYwNzEtOC4yMzI2LDQuNzU0LTcuNzYxdjIuMjE0NWw2LjYzOTYtLjAzNzgsNS45MTAyLjEzNzYsMS42MjMxLTIuMDU3OFoiLz4KICA8L2c+CiAgPGcgaWQ9ImxpbmUiPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0ibTMyLjI2MTUsMjYuODM2MWwtMS4yNjE1LDIuMDcwMy0xMC02LDIuOTkzNi01LjA0N2MxLjQ4ODItMS45Mjk4LDQuMTA4NC0yLjQ3MjUsNi4yMDY1LTEuNDE0My40ODk1LjI0NjkuODg4OS42NDU0LDEuMTcxNywxLjExNTFsNS42MjgyLDkuMzQ2Mi0xLjkwMzgsMS4yNTE5LDguOTAzOC43NDgxLDUtOC0yLDEtMy01LS4wOTY2LS4xNjM3Yy0uNDg3Ny0uODE2OS0xLjEyMTctLjgzMDItMS44NjA2LS44MzAybC03LjA5MTctLjAwNTQiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Im0xNC43MzQxLDM1Ljc2NjFjLTEuMDE0NSwyLjIyODgtLjI2MTcsNC43NTkzLDEuODc2Miw1LjcxNDUsMCwwLC43NDgyLS4wMDQ2Ljc1NjYtLjAwMDlsLjA5MTUuMDAxLDkuOTA3NC4wMjkxLDMuNjAxMy0uMDI5Mi4xNzQxLDExLjY2MDUtNS45Mjc1LjAyMDFoLTEuNzc1NWMtLjc3MjcsMC0xLjMzODQuMDMzMS0xLjc5NTQtLjgwMTRsLS4wOTA1LS4xNjcyLTMuNjYxOC02Ljc4MzkiLz4KICAgIDxwb2x5bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBwb2ludHM9IjE0LjczNDEgMzUuNzY2MSAxNy43NiAzMC43ODE3IDE1Ljk0MzIgMjkuNDc4MiAyNS4zNTE1IDMwLjE3NDEgMjggMzcuOTA2NCAyNiAzNi45MDY0IDI1LjUzNjcgMzcuNTY2NiIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0ibTQyLjMyNjksMzcuNzUwNWwtMS4yMTE3LTIuMTA4OCwxMC4wNzE1LTUuODc5MSwyLjk4MzgsNS4wNTI4Yy45NzU2LDIuMjMzMi4xOTA1LDQuNzkxMi0xLjc0NjcsNi4xMjEzLS40NTE5LjMxMDMtLjk5MzUuNDY4Ny0xLjU0MTMuNDkwNmwtMTEuMjY4Ny4wNjQxdi0yLjIxNDVsLTQuNzU0LDcuNzYxLDQuNjA3MSw4LjIzMjYuMDQ3OC0yLjEyNTYsNS43NDgyLjAwOC4yODkxLS4wMDA0Yy45NTA4LS4wMzQ0LDEuMjg0Ny0uOTMwMSwxLjY0MDMtMS41Nzc5bDMuMzM2MS02LjA2NjciLz4KICA8L2c+Cjwvc3ZnPg==", "chapters": ["geo-energy-sustainability"], "provenance": "verified"}, {"id": "om-1F6A2", "type": "illustration", "title": "Containerschiff", "alt": "Frachtschiff", "caption": "Die Wertschöpfung bleibt selten dort, wo montiert wird.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-1F6A2/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-1F6A2.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiPgogICAgPHBhdGggZmlsbD0iI2VhNWE0NyIgZD0ibTY4LDI2LjA4NzFoLTM1LjAzNzhjLS41MzE0LDAtLjk2MjIuMzkxLS45NjIyLjg3MzN2Mi40MDA0aDM2di0zLjI3MzdaIi8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJtNjgsMjUuMDg3MWgtMjEuMjU4NGw2LjE1MTgtMTMuMDI4NGMuMTI3Ny0uMzEuNDA1NS0uNTA4Ni43MTEzLS41MDg2aDE0LjM5NTMiLz4KICAgIDxwYXRoIGZpbGw9IiMzZjNmM2YiIGQ9Im0zMiwyOS4zNjA4czEzLjQwNDQsNi43OTgxLDE1LjY3MjQsMjIuMjQ2OWMuMDYzNy40MzQ0LjQ2ODYuNzY3My45NTE1Ljc2NzNoMTkuMzc2MXYtMjMuMDE0MiIvPgogICAgPHBhdGggZmlsbD0iIzNmM2YzZiIgZD0ibTYzLjE0NiwxMS41NTAxdi01LjY3NjdjMC0uNDgyNC4zMjM5LS44NzM0LjcyMzUtLjg3MzRoMi4yNjFjLjM5OTYsMCwuNzIzNS4zOTEuNzIzNS44NzM0djUuNjc2N2gtMy43MDhaIi8+CiAgICA8cGF0aCBmaWxsPSIjM2YzZjNmIiBkPSJtMzIsMjkuMzYwOHMxMC40MDQ0LDYuNzk4MSwxMi42NzI0LDIyLjI0NjljLjA2MzcuNDM0NC40Njg2Ljc2NzMuOTUxNS43NjczaDIxLjM3NjEiLz4KICAgIDxwYXRoIGZpbGw9IiNlYTVhNDciIGQ9Im02NywyNS42MjVoLTM0LjAzNzhjLS41MzE0LDAtLjk2MjIuMzkxLS45NjIyLjg3MzR2Mi40MDA0aDM1Ii8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBkPSJtNjcsMjYuMDg3MWgtMjEuMjU4NGw3LjE1MTgtMTQuMDI4NGMuMTI3Ny0uMzEuNDA1NS0uNTA4Ni43MTEzLS41MDg2aDE0LjM5NTMiLz4KICAgIDxsaW5lIHgxPSI2OC4wMDQ3IiB4Mj0iNjgiIHkxPSI0OC4wNTI2IiB5Mj0iNjgiIGZpbGw9Im5vbmUiLz4KICAgIDxwYXRoIGZpbGw9IiM5MmQzZjUiIGQ9Im02OCw0N3YyMUg0di0yMWgxYzMsMCw5LDMsMTUsM3MxMC0zLDE2LTMsMTEsMywxNiwzLDctMywxNS0zaDFaIi8+CiAgPC9nPgogIDxnIGlkPSJsaW5lIj4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Im02My4xNDYsMTEuNTUwMXYtNS42NzY3YzAtLjQ4MjQuMzIzOS0uODczNC43MjM1LS44NzM0aDIuMjYxYy4zOTk2LDAsLjcyMzUuMzkxLjcyMzUuODczNHY1LjY3NjdoLTMuNzA4WiIvPgogICAgPGxpbmUgeDE9IjUzLjcyMjkiIHgyPSI2NC4zNzczIiB5MT0iMTYuMzUzNiIgeTI9IjE2LjM1MzYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSI1MS41MzQ5IiB4Mj0iNjQuMzc3MyIgeTE9IjIwLjQ0NzQiIHkyPSIyMC40NDc0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJtMzIsMjkuMzYwOHM4Ljg4MjksNS44MDQsMTIuMDIyNCwxOC44NzM1Ii8+CiAgICA8bGluZSB4MT0iNTMuNzIyOSIgeDI9IjY0LjM3NzMiIHkxPSIxNi4zNTM2IiB5Mj0iMTYuMzUzNiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPGxpbmUgeDE9IjUxLjUzNDkiIHgyPSI2NC4zNzczIiB5MT0iMjAuNDQ3NCIgeTI9IjIwLjQ0NzQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Im02NywyNS42MjVoLTM0LjAzNzhjLS41MzE0LDAtLjk2MjIuMzkxLS45NjIyLjg3MzR2Mi40MDA0aDM1Ii8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJtNjYsMjUuNjI1aC0yMC4yNTg0bDcuMTUxOC0xMy41NjYzYy4xMjc3LS4zMS40MDU1LS41MDg2LjcxMTMtLjUwODZoMTMuMzk1MyIvPgogICAgPGxpbmUgeDE9IjUzLjcyMjkiIHgyPSI2NC4zNzczIiB5MT0iMTYuMzUzNiIgeTI9IjE2LjM1MzYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSI1MS41MzQ5IiB4Mj0iNjQuMzc3MyIgeTE9IjIwLjQ0NzQiIHkyPSIyMC40NDc0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8bGluZSB4MT0iNTMuNzIyOSIgeDI9IjY0LjM3NzMiIHkxPSIxNi4zNTM2IiB5Mj0iMTYuMzUzNiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPGxpbmUgeDE9IjUxLjUzNDkiIHgyPSI2NC4zNzczIiB5MT0iMjAuNDQ3NCIgeTI9IjIwLjQ0NzQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Im01LDQ3YzMsMCw5LDMsMTUsM3MxMC0zLDE2LTMsMTEsMywxNiwzLDctMywxNS0zIi8+CiAgPC9nPgo8L3N2Zz4=", "chapters": ["geo-global-development"], "provenance": "verified"}, {"id": "om-1F465", "type": "illustration", "title": "Bevölkerung", "alt": "Zwei Personen", "caption": "Der demografische Übergang hat vier Phasen.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-1F465/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-1F465.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiPgogICAgPHBhdGggZmlsbD0iI0QwQ0ZDRSIgc3Ryb2tlPSJub25lIiBkPSJNNjMsNjFjMCwwLDAtNCwwLThjMC03LTQtMTAtOC0xMGMtNSwwLTUsMC0xMiwwYy0yLjc4NDIsMC01LjU2NDUsMC41MDU5LTcsMy43NSBjLTEuMTI1LTMuMzEyNS00LjIxNTgtNC43MDMxLTctNC43MDMxQzI0LDQyLjA0NjksMjQsNDMsMTcsNDNjLTQsMC04LDMtOCwxMGMwLDEsMCw4LDAsOCIvPgogICAgPHBhdGggZmlsbD0iI0QwQ0ZDRSIgc3Ryb2tlPSJub25lIiBkPSJNMTUsMjZjMCw0LDAuODc2LDYuMzE0NSwyLDhjMS40MzE2LDIuMTQ4NCwzLjcwNjEsMyw2LDNjMi4zODA5LDAsNC41NjY0LTAuODUxNiw2LTNjMS4xMjMtMS42ODU1LDItNCwyLTggYzAtMi4xNDg0LTEuMDc3MS05LTgtOVMxNSwyMi40MTg5LDE1LDI2eiIvPgogICAgPHBhdGggZmlsbD0iI0QwQ0ZDRSIgc3Ryb2tlPSJub25lIiBkPSJNNDEsMjZjMCw0LDAuODc2LDYuMzE0NSwyLDhjMS40MzE2LDIuMTQ4NCwzLjcwNjEsMyw2LDNjMi4zODA5LDAsNC41NjY0LTAuODUxNiw2LTNjMS4xMjMtMS42ODU1LDItNCwyLTggYzAtMi4xNDg0LTEuMDc3MS05LTgtOUM0Mi4wNzcxLDE3LDQxLDIyLjQxODksNDEsMjZ6Ii8+CiAgPC9nPgogIDxnIGlkPSJoYWlyIi8+CiAgPGcgaWQ9InNraW4iLz4KICA8ZyBpZD0ic2tpbi1zaGFkb3ciLz4KICA8ZyBpZD0ibGluZSI+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMzUsNjB2LTdjMC03LDQtMTAsOC0xMCBjNywwLDcsMCwxMiwwYzQsMCw4LDMsOCwxMGMwLDQsMCw3LDAsNyBNMzQsNDUuMDk3NyBNOSw2MGMwLDAsMC02LDAtN2MwLTcsNC0xMCw4LTEwYzcsMCw3LDAsMTIsMCBjMS41MzEzLDAsMy4wNjA1LDAuNTMxMyw0LjM2NzIsMS41NDg4Ii8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTE1LDI2YzAsNCwwLjg3Niw2LjMxNDUsMiw4IGMxLjQzMTYsMi4xNDg0LDMuNzA2MSwzLDYsM2MyLjM4MDksMCw0LjU2NjQtMC44NTE2LDYtM2MxLjEyMy0xLjY4NTUsMi00LDItOGMwLTIuMTQ4NC0xLjA3NzEtOS04LTlTMTUsMjIuNDE4OSwxNSwyNnoiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNNDEsMjZjMCw0LDAuODc2LDYuMzE0NSwyLDggYzEuNDMxNiwyLjE0ODQsMy43MDYxLDMsNiwzYzIuMzgwOSwwLDQuNTY2NC0wLjg1MTYsNi0zYzEuMTIzLTEuNjg1NSwyLTQsMi04YzAtMi4xNDg0LTEuMDc3MS05LTgtOUM0Mi4wNzcxLDE3LDQxLDIyLjQxODksNDEsMjZ6Ii8+CiAgPC9nPgo8L3N2Zz4=", "chapters": ["geo-demography"], "provenance": "verified"}, {"id": "om-1F3D9", "type": "illustration", "title": "Stadt", "alt": "Hochhäuser", "caption": "Urbanisierung, Suburbanisierung, Reurbanisierung.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-1F3D9/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-1F3D9.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiPgogICAgPHJlY3QgeD0iNS42OTA3IiB5PSI1My4zMjciIHJ4PSIwLjk2ODMiIHJ5PSIwLjk2ODMiIHdpZHRoPSI2MC40Mjg0IiBoZWlnaHQ9IjEuOTM2NyIgZmlsbD0iI2ZmZiIvPgogICAgPHBvbHlsaW5lIGZpbGw9IiM5YjliOWEiIHBvaW50cz0iMTAuNjY2NyAzMy44MTQxIDEwLjY2NjcgMTcuMjUgMjAuNDEwMyAxNy4yNSAyMC40MTAzIDMzLjgxNDEiLz4KICAgIDxyZWN0IHg9IjM0LjA1MTMiIHk9IjIxLjE0NzQiIHdpZHRoPSIxMi42NjY3IiBoZWlnaHQ9IjM0LjEwMjYiIGZpbGw9IiM5YjliOWEiLz4KICAgIDxwb2x5bGluZSBmaWxsPSIjZDBjZmNlIiBwb2ludHM9IjUwLjYxNTQgNTUuMjUgNTAuNjE1NCAyNS4wNDQ5IDY2LjIwNTEgMjUuMDQ0OSA2Ni4yMDUxIDU1LjI1Ii8+CiAgICA8cG9seWxpbmUgZmlsbD0iI2QwY2ZjZSIgcG9pbnRzPSI1Ljc5NDkgNTUuMjUgNS43OTQ5IDMzLjgxNDEgMzguOTIzMSAzMy44MTQxIDM4LjkyMzEgNTUuMjUiLz4KICA8L2c+CiAgPGcgaWQ9ImxpbmUiPgogICAgPHBvbHlsaW5lIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjAuOTc0NCIgcG9pbnRzPSI1MC42MTU0IDU1IDUwLjYxNTQgMjUuMDQ0OSA2Ni4yMDUxIDI1LjA0NDkgNjYuMjA1MSA1NSIvPgogICAgPHBvbHlsaW5lIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjAuOTc0NCIgcG9pbnRzPSI1Ljc5NDkgNTUgNS43OTQ5IDMzLjgxNDEgMzguOTIzMSAzMy44MTQxIDM4LjkyMzEgNTUuMjUiLz4KICAgIDxwb2x5bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjk0ODciIHBvaW50cz0iNTAuNjE1NCA1NC4yNzU2IDUwLjYxNTQgMjUuMDQ0OSA2Ni4yMDUxIDI1LjA0NDkgNjYuMjA1MSA1NC4yNzU2Ii8+CiAgICA8cG9seWxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS45NDg3IiBwb2ludHM9IjUuNzk0OSA1NC4yNzU2IDUuNzk0OSAzMy44MTQxIDM4LjkyMzEgMzMuODE0MSAzOC45MjMxIDU0LjI3NTYiLz4KICAgIDxwb2x5bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjk0ODciIHBvaW50cz0iMzUuMDI1NiAzMC44OTEgMzUuMDI1NiAyMS4xNDc0IDQ2LjcxNzkgMjEuMTQ3NCA0Ni43MTc5IDU0LjI3NTYiLz4KICAgIDxwb2x5bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjk0ODciIHBvaW50cz0iMTEuNjQxIDMwLjg5MSAxMS42NDEgMTcuMjUgMTkuNDM1OSAxNy4yNSAxOS40MzU5IDMwLjg5MSIvPgogICAgPHBvbHlsaW5lIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuOTQ4NyIgcG9pbnRzPSI1Ni40NjE1IDMzLjgxNDEgNTQuNTEyOCAzMy44MTQxIDU0LjUxMjggMjguOTQyMyIvPgogICAgPHBvbHlsaW5lIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuOTQ4NyIgcG9pbnRzPSI2Mi4zMDc3IDMzLjgxNDEgNjAuMzU5IDMzLjgxNDEgNjAuMzU5IDI4Ljk0MjMiLz4KICAgIDxwb2x5bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjk0ODciIHBvaW50cz0iNTYuNDYxNSA0My41NTc3IDU0LjUxMjggNDMuNTU3NyA1NC41MTI4IDM4LjY4NTkiLz4KICAgIDxwb2x5bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjk0ODciIHBvaW50cz0iNjIuMzA3NyA0My41NTc3IDYwLjM1OSA0My41NTc3IDYwLjM1OSAzOC42ODU5Ii8+CiAgICA8cG9seWxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS45NDg3IiBwb2ludHM9IjI5LjE3OTUgNDIuNTgzMyAyNy4yMzA4IDQyLjU4MzMgMjcuMjMwOCAzNy43MTE1Ii8+CiAgICA8cG9seWxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS45NDg3IiBwb2ludHM9IjM1LjAyNTYgNDIuNTgzMyAzMy4wNzY5IDQyLjU4MzMgMzMuMDc2OSAzNy43MTE1Ii8+CiAgICA8cG9seWxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS45NDg3IiBwb2ludHM9IjI5LjE3OTUgNTIuMzI2OSAyNy4yMzA4IDUyLjMyNjkgMjcuMjMwOCA0Ny40NTUxIi8+CiAgICA8cG9seWxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS45NDg3IiBwb2ludHM9IjM1LjAyNTYgNTIuMzI2OSAzMy4wNzY5IDUyLjMyNjkgMzMuMDc2OSA0Ny40NTUxIi8+CiAgICA8cG9seWxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS45NDg3IiBwb2ludHM9IjE3LjQ4NzIgNDIuNTgzMyAxNS41Mzg1IDQyLjU4MzMgMTUuNTM4NSAzNy43MTE1Ii8+CiAgICA8cG9seWxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS45NDg3IiBwb2ludHM9IjIzLjMzMzMgNDIuNTgzMyAyMS4zODQ2IDQyLjU4MzMgMjEuMzg0NiAzNy43MTE1Ii8+CiAgICA8cG9seWxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS45NDg3IiBwb2ludHM9IjE3LjQ4NzIgNTIuMzI2OSAxNS41Mzg1IDUyLjMyNjkgMTUuNTM4NSA0Ny40NTUxIi8+CiAgICA8cG9seWxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS45NDg3IiBwb2ludHM9IjExLjY0MSA0Mi41ODMzIDkuNjkyMyA0Mi41ODMzIDkuNjkyMyAzNy43MTE1Ii8+CiAgICA8cG9seWxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS45NDg3IiBwb2ludHM9IjExLjY0MSA1Mi4zMjY5IDkuNjkyMyA1Mi4zMjY5IDkuNjkyMyA0Ny40NTUxIi8+CiAgICA8cG9seWxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS45NDg3IiBwb2ludHM9IjIzLjMzMzMgNTIuMzI2OSAyMS4zODQ2IDUyLjMyNjkgMjEuMzg0NiA0Ny40NTUxIi8+CiAgICA8cG9seWxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS45NDg3IiBwb2ludHM9IjU2LjQ2MTUgNTMuMzAxMyA1NC41MTI4IDUzLjMwMTMgNTQuNTEyOCA0OC40Mjk1Ii8+CiAgICA8cG9seWxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS45NDg3IiBwb2ludHM9IjYyLjMwNzcgNTMuMzAxMyA2MC4zNTkgNTMuMzAxMyA2MC4zNTkgNDguNDI5NSIvPgogICAgPGxpbmUgeDE9IjE1LjUzODUiIHgyPSIxNS41Mzg1IiB5MT0iMjAuMTczMSIgeTI9IjMwLjg5MSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS45NDg3Ii8+CiAgICA8bGluZSB4MT0iMzguOTIzMSIgeDI9IjM4LjkyMzEiIHkxPSIyNC4wNzA1IiB5Mj0iMzAuODkxIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjk0ODciLz4KICAgIDxsaW5lIHgxPSI0Mi44MjA1IiB4Mj0iNDIuODIwNSIgeTE9IjI0LjA3MDUiIHkyPSI1NC4yNzU2IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjk0ODciLz4KICA8L2c+Cjwvc3ZnPg==", "chapters": ["geo-urban"], "provenance": "verified"}, {"id": "om-1F6E4", "type": "illustration", "title": "Highway", "alt": "Autobahn", "caption": "Der Sun Belt wächst, der Rust Belt verliert.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-1F6E4/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-1F6E4.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiPgogICAgPHJlY3QgeD0iMTEiIHk9IjE3LjE3IiB3aWR0aD0iNTAiIGhlaWdodD0iMzguODMiIGZpbGw9IiNiMWNjMzMiLz4KICAgIDxwb2x5Z29uIGZpbGw9IiM2YTQ2MmYiIHBvaW50cz0iMjYuNTY0IDE3LjU1MiAxNiA0My42NDkgMTEgNTYgMTUuOTg5IDU2IDU1Ljk3OCA1NiA2MSA1NiA1NiA0My42NDkgNDUuNDM2IDE3LjU1MiAyNi41NjQgMTcuNTUyIi8+CiAgICA8cG9seWdvbiBmaWxsPSIjYTU3OTM5IiBwb2ludHM9IjE2IDU0Ljk0MSAxOC4wNzUgNDkuNjUzIDUzLjkyNSA0OS42NTMgNTYgNTQuOTQxIDE2IDU0Ljk0MSIvPgogICAgPHBvbHlnb24gZmlsbD0iI2E1NzkzOSIgcG9pbnRzPSIxOS4xNzQgNDYuODUyIDUyLjgyNiA0Ni44NTIgNTAuODI5IDQxLjc2MSAyMS4xNzEgNDEuNzYxIDE5LjE3NCA0Ni44NTIiLz4KICAgIDxwb2x5Z29uIGZpbGw9IiNhNTc5MzkiIHBvaW50cz0iMjIuMTk5IDM4LjkzOSA0OS44MDEgMzguOTM5IDQ3LjgzNiAzMy45MyAyNC4xNjQgMzMuOTMgMjIuMTk5IDM4LjkzOSIvPgogICAgPHBvbHlnb24gZmlsbD0iI2E1NzkzOSIgcG9pbnRzPSIyNS4zNTEgMzEuMTA4IDQ2LjY0OSAzMS4xMDggNDQuNTg2IDI1Ljg0OCAyNy40MTQgMjUuODQ4IDI1LjM1MSAzMS4xMDgiLz4KICAgIDxwb2x5Z29uIGZpbGw9IiNhNTc5MzkiIHBvaW50cz0iMjguNTA5IDIzLjA1OSA0My40OTEgMjMuMDU5IDQxLjUxMiAxOC42ODIgMzAuMDQ2IDE4LjY4MiAyOC41MDkgMjMuMDU5Ii8+CiAgPC9nPgogIDxnIGlkPSJsaW5lIj4KICAgIDxsaW5lIHgxPSIxMi4yMzI3IiB4Mj0iNTkuOTM0OSIgeTE9IjE3LjE3IiB5Mj0iMTcuMTciIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxwb2x5Z29uIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIHBvaW50cz0iMTYgNTQuOTQxIDE4LjA3NSA0OS42NTMgNTMuOTI1IDQ5LjY1MyA1NiA1NC45NDEgMTYgNTQuOTQxIi8+CiAgICA8cG9seWdvbiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBwb2ludHM9IjE5LjE3NCA0Ni44NTIgNTIuODI2IDQ2Ljg1MiA1MC44MjkgNDEuNzYxIDIxLjE3MSA0MS43NjEgMTkuMTc0IDQ2Ljg1MiIvPgogICAgPHBvbHlnb24gZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgcG9pbnRzPSIyMi4xOTkgMzguOTM5IDQ5LjgwMSAzOC45MzkgNDcuODM2IDMzLjkzIDI0LjE2NCAzMy45MyAyMi4xOTkgMzguOTM5Ii8+CiAgICA8cG9seWdvbiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBwb2ludHM9IjI1LjM1MSAzMS4xMDggNDYuNjQ5IDMxLjEwOCA0NC41ODYgMjUuODQ4IDI3LjQxNCAyNS44NDggMjUuMzUxIDMxLjEwOCIvPgogICAgPHBvbHlnb24gZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgcG9pbnRzPSIyOC41MDkgMjMuMDU5IDQzLjQ5MSAyMy4wNTkgNDEuNTEyIDE4LjY4MiAzMC4wNDYgMTguNjgyIDI4LjUwOSAyMy4wNTkiLz4KICAgIDxsaW5lIHgxPSIyMy4xOTg4IiB4Mj0iMzIuODkxMyIgeTE9IjU0LjUyNTYiIHkyPSIxOC43MjUxIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8bGluZSB4MT0iNDguODAxMiIgeDI9IjM5LjEwODciIHkxPSI1NC41MjU2IiB5Mj0iMTguNzI1MSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIvPgogIDwvZz4KPC9zdmc+", "chapters": ["geo-usa-population"], "provenance": "verified"}, {"id": "om-1F33D", "type": "illustration", "title": "Mais", "alt": "Maiskolben", "caption": "Der Corn Belt liegt östlich des hundertsten Längengrads.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-1F33D/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-1F33D.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxnIGlkPSJjb2xvciI+CiAgICA8cGF0aCBmaWxsPSIjRkNFQTJCIiBzdHJva2U9IiNGQ0VBMkIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0zOC42NDA2LDUyLjkxNyBMMjMuNTE5MSwzNy43ODUyYy04LjgzMzUtOC44MzM1LTEyLjAzODQtMTcuNjk3NS04LjU4LTIxLjE2NjFjMC45MjI5LTAuOTEyNywyLjIyMTEtMS4zNjkxLDMuNzkzMS0xLjM2OTEgYzAuNTY3OSwwLDEuMTY2MywwLjA2MDgsMS44MDUyLDAuMTcyNGM0LjI1OTYsMC43ODA5LDkuOTE4OCw0LjEyNzgsMTUuNTY3OCw5Ljc3NjhsMy40NTg0LDMuNDU4NCBjLTAuODMxNiwxLjMyODYtMS42NDMsMi43ODktMi4zMjI1LDQuMzUwOUMzNC43MDU2LDM4Ljc0ODcsMzMuNzUyMyw0NS45MDg5LDM4LjY0MDYsNTIuOTE3eiIvPgogICAgPHBhdGggZmlsbD0iI0ZDRUEyQiIgZD0iTTUyLjMwMTcsNTMuOTgxOWMtMy40NTg0LDMuNDY4NS05LjQ1MjIsMy4xMzM4LTEzLjMyNjQtMC43MzAybC0wLjMzNDYtMC4zMzQ2IGMtNC44ODg0LTcuMDA4MS0zLjkzNTEtMTQuMTY4Mi0xLjM5OTYtMTkuOTA4NWMwLjY3OTUtMS41NjE5LDEuNDkwOC0zLjAyMjMsMi4zMjI1LTQuMzUwOWwxMi4wMDgsMTEuOTk3OSBDNTUuNDM1Niw0NC41Mjk2LDU1Ljc3MDMsNTAuNTIzNCw1Mi4zMDE3LDUzLjk4MTl6Ii8+CiAgICA8cGF0aCBmaWxsPSIjNUM5RTMxIiBzdHJva2U9IiM1QzlFMzEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNNTUuOTgzMiw1Ni4xOTI4IGMtMy42NzE0LDQuMzAwMS0xMC4xNTIsNC40OTI4LTE0LjA2NjgsMC41Njc5Yy0wLjEzMTktMC4xMzE5LTAuMjUzNS0wLjI1MzUtMC4zNzUyLTAuMzk1NSBjLTEuMTM1OS0xLjEzNTktMi4wOTk0LTIuMjkyMS0yLjkwMDYtMy40NDgyYy00Ljg4ODQtNy4wMDgxLTMuOTM1MS0xNC4xNjgyLTEuMzk5Ni0xOS45MDg1IGMwLjY3OTUtMS41NjE5LDEuNDkwOC0zLjAyMjMsMi4zMjI1LTQuMzUwOWMyLjYwNjUtNC4xNDgsNS41MTcyLTYuOTU3Myw2LjA3NS03LjQ4NDdjMC4wMzA1LTAuMDMwNCwwLjA5MTMtMC4wMTAxLDAuMDkxMywwLjA0MDYgYzAuMDMwNCwxLjMzODcsMC40ODY4LDEyLjYxNjUsOS41MjMyLDIxLjgwNUM1OC43NzIzLDQ2LjU5ODUsNTkuMjM4OCw1Mi4zNjkzLDU1Ljk4MzIsNTYuMTkyOHoiLz4KICAgIDxwYXRoIGZpbGw9IiNCMUNDMzMiIGQ9Ik01NS40NDM5LDQzLjEzOTJjMy45MTg5LDMuOTE4OSwzLjcyNjUsMTAuNDAwNC0wLjU3NzMsMTQuMDY3NmMtMy44MjEsMy4yNTU4LTkuNTg4NCwyLjc4NjktMTMuMTY5Mi0wLjczMTQgYy05LjE5MzItOS4wMzI3LTIwLjQ2NjMtOS40OTY0LTIxLjgwMTItOS41MTk1Yy0wLjA1MDYtMC4wMDA5LTAuMDc3Ny0wLjA1OTEtMC4wNDMtMC4wOTYgYzEuNDA0LTEuNDk0OSwxOS4zNDQtMTkuOTQ0NiwzNS4xOTAzLTQuMDk4M0M1NS4xODA3LDQyLjg4NzUsNTUuMzEyMyw0My4wMDc2LDU1LjQ0MzksNDMuMTM5MnoiLz4KICAgIDxwYXRoIGZpbGw9IiNGQ0VBMkIiIGQ9Ik0zNi4xMDUyLDI1LjE5OTJjLTUuNjQ5LTUuNjQ5LTExLjMwODItOC45OTU4LTE1LjU2NzgtOS43NzY4Yy0wLjYzODktMC4xMTE1LTEuMjM3My0wLjE3MjQtMS44MDUyLTAuMTcyNCBjLTEuNTcyLDAtMi44NzAyLDAuNDU2NC0zLjc5MzEsMS4zNjkxYy0zLjQ1ODQsMy40Njg2LTAuMjUzNSwxMi4zMzI2LDguNTgsMjEuMTY2MSIvPgogIDwvZz4KICA8ZyBpZD0iaGFpciIvPgogIDxnIGlkPSJza2luIi8+CiAgPGcgaWQ9InNraW4tc2hhZG93Ii8+CiAgPGcgaWQ9ImxpbmUiPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTU1LjQ0MzksNDMuMTM5MiBjMy45MTg5LDMuOTE4OSwzLjcyNjUsMTAuNDAwNC0wLjU3NzMsMTQuMDY3NmMtMy44MjEsMy4yNTU4LTkuNTg4NCwyLjc4NjktMTMuMTY5Mi0wLjczMTQgYy05LjE5MzItOS4wMzI3LTIwLjQ2NjMtOS40OTY0LTIxLjgwMTItOS41MTk1Yy0wLjA1MDYtMC4wMDA5LTAuMDc3Ny0wLjA1OTEtMC4wNDMtMC4wOTYgYzEuNDA0LTEuNDk0OSwxOS4zNDQtMTkuOTQ0NiwzNS4xOTAzLTQuMDk4M0M1NS4xODA3LDQyLjg4NzUsNTUuMzEyMyw0My4wMDc2LDU1LjQ0MzksNDMuMTM5MnoiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTM3LjQ4NzIsMzIuNDU5MyBjMC42MjUzLTEuMzU1OSwxLjM0MjktMi42MzAxLDIuMDc2My0zLjgwMTdjMi42MDY1LTQuMTQ4LDUuNTE3Mi02Ljk1NzMsNi4wNzUtNy40ODQ3YzAuMDMwNS0wLjAzMDQsMC4wOTEzLTAuMDEwMSwwLjA5MTMsMC4wNDA2IGMwLjAxOTgsMC44NzA3LDAuMjE5Nyw1Ljk0NTcsMi44NDMzLDExLjkxNThsMC4yNjE5LDAuNTYwNCIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMzYuMTA1MiwyNS4xOTkyIGMtNS42NDktNS42NDktMTEuMzA4Mi04Ljk5NTgtMTUuNTY3OC05Ljc3NjhjLTAuNjM4OS0wLjExMTUtMS4yMzczLTAuMTcyNC0xLjgwNTItMC4xNzI0Yy0xLjU3MiwwLTIuODcwMiwwLjQ1NjQtMy43OTMxLDEuMzY5MSBjLTMuNDU4NCwzLjQ2ODYtMC4yNTM1LDEyLjMzMjYsOC41OCwyMS4xNjYxIi8+CiAgPC9nPgo8L3N2Zz4=", "chapters": ["geo-usa-economy"], "provenance": "verified"}, {"id": "om-1F5FD", "type": "illustration", "title": "Freiheitsstatue", "alt": "Statue", "caption": "Vier Prozent der Weltbevölkerung, ein Viertel der Wirtschaftsleistung.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-1F5FD/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-1F5FD.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiPgogICAgPHBhdGggZmlsbD0iIzkyZDNmNSIgZD0ibTE2LjU5ODEsMjAuMDI2MWMuMjM4NSwxLjg4OC41NzQyLDQuNDQ1NSwxLjAxMTQsNy40OTE2LjM2MzIsMi41MzExLjU1LDMuNjg0Ny45NDQ2LDMuNzI0OC44MTc4LjA4MzEsMS44ODE1LTQuNTIsMi4wNzMzLTUuMzQ5My40NDYxLTEuOTI4NC43Mjk4LTMuODkwOS44NDgtNS44NjY3Ii8+CiAgICA8cmVjdCB4PSIxMy43ODA2IiB5PSIxNS4wNTYyIiB3aWR0aD0iOS42ODU3IiBoZWlnaHQ9IjQuNDA4MSIgZmlsbD0iIzYxYjJlNCIvPgogICAgPHBhdGggZmlsbD0iIzYxYjJlNCIgZD0ibTIzLjMzMTgsMjkuODcxM2MuNTA4OS4wNy44NjU4Ljc3MzcsMi4yNzIzLDYuNDU1NCwxLjQ0NTcsNS44NCwxLjI2NDgsNS44OTA2LDEuODIzNiw2Ljk4NTQsMS41ODEzLDMuMDk4NCwzLjAzMDcsMi42OTg1LDUuNjAzNCw2LjU3LDIuMjE4NiwzLjMzOTEsMS41MDc3LDQuMTg4OCwyLjk3NCw1LjE2LDIuOTY2MiwxLjk2NDIsNy4yOTcxLS41NjM2LDEyLjI2NTcuOTU3OSwxLjk4NzQuNDY5MSwyLjA5MDYsMS40MDgzLDMuNDM1NiwyLjk0NDcuOTEyOCwxLjEzNTEsMi4wODU4LDMuMTM2NCwyLjgwNzcsNS4xMTQyLjIwMTguNTUyOC0uMDY0LDEuMTkyMS0uNjI3MSwxLjM2MzEtMi40ODUyLjc1NTEtOC45ODI0LTIuMjAyNi0xOC40OTE5LS41NDMtNC40NTI4Ljc3NzEtOC4xNDQ5LDIuNC04LjkwNzQsMS4xNzMxLS44NDI5LTEuMzU2NiwzLjIzOTItNC4wMzM1LDIuNzI4OC03LjczMzItLjMwNC0yLjIwMzMtMi42Mjg0LTQuNTY2Mi00LjA0MjktNy41NjQ1LTIuNDQwOS01LjE3NDMtMy40NTE1LTEwLjM1NDEtNC43MjQyLTE1LjA1MDkuNjUwNi0zLjE1MzYsMS43Mjk1LTUuOTkyLDIuODgyNC01LjgzMjNaIi8+CiAgICA8ZWxsaXBzZSBjeD0iNDEuOTAzMyIgY3k9IjQ2LjIwNiIgcng9IjQuODU3NSIgcnk9IjUuODA1NiIgZmlsbD0iIzkyZDNmNSIvPgogICAgPHBhdGggZmlsbD0iI2Y0YWE0MSIgZD0ibTE2LjE0MSwxMy4zNTQ5Yy0uMzM0Ny0uNzgxMy0uMjk5My0xLjY3Mi4wOTYzLTIuNDI0My41MTM3LTEuMDExNSwxLjM3NzgtMS4xNDE2LDIuNjQ0OC0xLjkyNDMsMi43MjQ1LTEuNjgzMiwzLjEzOTItMy44MDYzLDQuMDQ4OS0zLjU2NzYuOTM2OC4yNDYyLDEuMDMzNSwyLjYzODUsMS4wNTkyLDMuMjc2NS4wNjExLDEuNTExMS4xNjY4LDQuMTI4MS0xLjcxNTIsNS40NjUzLTEuOTQzMSwxLjM4MDctNS4yODIzLjg4MzYtNi4xMzQtLjgyNTZaIi8+CiAgICA8bGluZSB4MT0iNDEuNDgzNiIgeDI9IjQxLjQ4MzYiIHkxPSIzMC41Mjg5IiB5Mj0iMzYuNjI5NyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjOTJkM2Y1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8bGluZSB4MT0iNTIuMzAwOSIgeDI9IjQ3LjQ4NyIgeTE9IjM0LjM2OTgiIHkyPSIzOC42ODM3IiBmaWxsPSJub25lIiBzdHJva2U9IiM5MmQzZjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSIzMS41NTk4IiB4Mj0iMzUuODczNyIgeTE9IjM0LjE4NjQiIHkyPSIzOC41MDAzIiBmaWxsPSJub25lIiBzdHJva2U9IiM5MmQzZjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSIzMC42NjE5IiB4Mj0iMzQuMjY3MiIgeTE9IjQyLjk4ODgiIHkyPSI0Mi45ODg4IiBmaWxsPSJub25lIiBzdHJva2U9IiM5MmQzZjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSI1MC4yODkzIiB4Mj0iNTYuMzkwMiIgeTE9IjQzLjIzODgiIHkyPSI0My4yMzg4IiBmaWxsPSJub25lIiBzdHJva2U9IiM5MmQzZjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICA8L2c+CiAgPGcgaWQ9ImxpbmUiPgogICAgPHJlY3QgeD0iMTMuMzY0MSIgeT0iMTUuMDU2MSIgd2lkdGg9IjEwLjEwMjIiIGhlaWdodD0iNC40MDgxIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJtMTYuMjgyNSwxMy43MzdjLS4zNDM3LS43MzM4LS40MjU1LTEuNTYzMi0uMjMxNy0yLjM1LjM0NzctMS4xOTE1LDEuMzM2MS0xLjU1OTMsMy4xNzgxLTIuOTEzMywyLjgzOTMtMi4wODc1LDMuMzA3MS0zLjI4MzcsNC4wMDU3LTMuMDEzLjk0MjIuMzY1My45NTk1LDIuODk4My41Myw0LjYwMTctLjE2MTMuNjM2NC0uNDA2MiwxLjI0ODYtLjcyODMsMS44MjA3Ii8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJtMTYuNTc3NywxOS44NDE3Yy44NzU0LDcuOTc3NCwxLjcwMjgsMTEuOTYxNSwyLjQ4MjMsMTEuOTUyMy42OC0uMDA4MiwxLjMyMzYtMy4wNTc2LDEuOTMwOC05LjE0ODEiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Im0xOS41NzE1LDM1LjQ1NjljLjU4MDgsMS45ODE2LDEuMTcsMy45OTk0LDIuMzQsOC4wNCwxLjQzNzksNC45NjYyLDEuNDgxNyw1LjE2NDUsMS43OTQ2LDUuOTIxOSwyLjQzNjgsNS44OTksNS4wMTQxLDYuNTQyLDQuNjY1Nyw5LjYwMDctLjM1NTUsMS44ODM5LS44MzUsMy43NDIyLTEuNDM1Niw1LjU2MjktLjE4MjYuNjE4NC0uMzQwNiwxLjEyNzItLjQ0ODYsMS40NyIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0ibTIyLjk4NywyOS4wOTkyYzEuMTg0MywyLjYyLDIuMTQ1Miw1LjMzNTMsMi44NzI0LDguMTE3LDEuMjc1Nyw0LjUxODcuODM0LDQuNzgsMS44ODQyLDYuNzI5NCwyLjI3NDksNC4yMjI5LDUuMDQ4NCw0LjI5ODIsNy4wODgzLDguNzkzMi4zMzU3LjkxNy44OTAxLDEuNzM4MywxLjYxNTEsMi4zOTI1LDEuMzkxMywxLjAzMjMsMy4xMjUxLDEuNDkyNSw0Ljg0NTIsMS4yODYyLDEuOTY3OS0uMjAzOSwzLjIxNTUtMS4wODM5LDQuODk3My0xLjM0MiwxLjk3MTMtLjI0NSwzLjkxNzQuNjE1OSw1LjA2MjIsMi4yMzkzLDEuMDk1OSwxLjAwMzIsMS45MTIsMy4xMzUsMy40OTk0LDcuMzU3NSIvPgogICAgPGVsbGlwc2UgY3g9IjQxLjkwMzMiIGN5PSI0Ni4yMDYiIHJ4PSI1LjAwMDIiIHJ5PSI2LjEwMDgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSI1MC4yODkzIiB4Mj0iNTYuMzkwMiIgeTE9IjQzLjcxNzIiIHkyPSI0My43MTcyIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8bGluZSB4MT0iNDguMTM3NSIgeDI9IjUyLjk1MTQiIHkxPSIzOS4wMDkxIiB5Mj0iMzQuNjk1MSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPGxpbmUgeDE9IjQyLjExOCIgeDI9IjQyLjExOCIgeTE9IjM2LjYxMzgiIHkyPSIzMC41MTMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSIzNC4yNjcyIiB4Mj0iMzAuNjYxOSIgeTE9IjQzLjQ2NzIiIHkyPSI0My40NjcyIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8bGluZSB4MT0iMzUuMzU1NCIgeDI9IjMxLjA0MTUiIHkxPSIzOC45NjM5IiB5Mj0iMzQuNjUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiLz4KICA8L2c+Cjwvc3ZnPg==", "chapters": ["geo-usa-global"], "provenance": "verified"}, {"id": "om-1F342", "type": "illustration", "title": "Herbstblatt", "alt": "Fallendes Blatt", "caption": "Natur ist bei Burkart nie blosse Kulisse.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-1F342/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-1F342.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiPgogICAgPHBhdGggZmlsbD0iI2E1NzkzOSIgZD0iTTU1LjczMiwzNi42ODljNS40MzIzLDYuMjMxMyw0LjEzMTYsMTYuMzE3LDQuMTMxNiwxNi4zMTdzLTkuOTMwOS0uMjIzLTE1LjM2MzEtNi40NTQzLTQuMTMxNi0xNi4zMTctNC4xMzE2LTE2LjMxN1M1MC40MTUyLDMwLjMwMzcsNTUuNzMyLDM2LjY4OVoiLz4KICAgIDxwYXRoIGZpbGw9IiNlMjcwMjIiIGQ9Ik0xOS43NjIzLDIyLjM2MTVDMjYuMTU0MywxNy4wMDc1LDM2LjA1LDE4LjUsMzYuMDUsMTguNXMtLjQ3LDEwLjA2NS02Ljc2MjMsMTUuMjU0M1MxMywzNy42MTU5LDEzLDM3LjYxNTksMTMuMzcsMjcuNzE1NiwxOS43NjIzLDIyLjM2MTVaIi8+CiAgPC9nPgogIDxnIGlkPSJsaW5lIj4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xOS43NjIzLDIyLjM2MTVDMjYuMTU0MywxNy4wMDc1LDM2LjA1LDE4LjUsMzYuMDUsMTguNXMtLjQ3LDEwLjA2NS02Ljc2MjMsMTUuMjU0M1MxMywzNy42MTU5LDEzLDM3LjYxNTksMTMuMzcsMjcuNzE1NiwxOS43NjIzLDIyLjM2MTVaIi8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNNTUuNzMyLDM2LjY4OWM1LjQzMjMsNi4yMzEzLDQuMTMxNiwxNi4zMTcsNC4xMzE2LDE2LjMxN3MtOS45MzA5LS4yMjMtMTUuMzYzMS02LjQ1NDMtNC4xMzE2LTE2LjMxNy00LjEzMTYtMTYuMzE3UzUwLjQxNTIsMzAuMzAzNyw1NS43MzIsMzYuNjg5WiIvPgogIDwvZz4KPC9zdmc+", "chapters": ["de-burkart"], "provenance": "verified"}, {"id": "om-1F524", "type": "illustration", "title": "Buchstaben", "alt": "Buchstabenblock", "caption": "Die Zeitform folgt aus dem Zeitbezug, nicht aus dem Signalwort.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-1F524/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-1F524.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxnIGlkPSJsaW5lLXN1cHBsZW1lbnQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgY2xpcC1ydWxlPSJldmVub2RkIj4KICAgIDxwYXRoIHRyYW5zZm9ybT0ibWF0cml4KDEuNTczLDAsMCwxLjU3MywzNS41MywzLjAxOCkiIGQ9Im0tNS40NDYgMTYuMDEtMy03LTMgNyIvPgogICAgPHBhdGggdHJhbnNmb3JtPSJtYXRyaXgoMS41NzMsMCwwLDEuNTczLDM1LjUzLDMuMDE4KSIgZD0ibS0xMC40NSAxNC4zM2g0Ii8+CiAgICA8cGF0aCB0cmFuc2Zvcm09Im1hdHJpeCgxLjU3MywwLDAsMS41NzMsMzYuMjYsMy4wMTYpIiBkPSJtMC4yOTcxIDI0LjQ1aC0yLjY2OXYtMy40ODdoMi42NjljMC45NjMgMCAxLjc0NCAwLjc4IDEuNzQ0IDEuNzQzcy0wLjc4MSAxLjc0NC0xLjc0NCAxLjc0NHoiLz4KICAgIDxwYXRoIHRyYW5zZm9ybT0ibWF0cml4KDEuNTczLDAsMCwxLjU3MywzNi4yNiwzLjAxNikiIGQ9Im0wLjI5NzEgMjAuOTZoLTIuNjY5di0zLjQ4N2gyLjY2OWMwLjk2MyAwIDEuNzQ0IDAuNzgxIDEuNzQ0IDEuNzQ0cy0wLjc4MSAxLjc0My0xLjc0NCAxLjc0M3oiLz4KICAgIDxwYXRoIHRyYW5zZm9ybT0ibWF0cml4KDEuNTczLDAsMCwxLjU3MywzNS41MywzLjAxOCkiIGQ9Im0xMS4xMiAzMi41MmMtMC40NDEgMC4zOTEtMS4wMjIgMC42MjktMS42NTkgMC42MjktMS4zOCAwLTIuNS0xLjExOS0yLjUtMi41di0yIDItMmMwLTEuMzgxIDEuMTItMi41IDIuNS0yLjUgMC42MzcgMCAxLjIxOCAwLjIzOCAxLjY1OSAwLjYyOSIvPgogIDwvZz4KICA8ZyBpZD0iY29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+CiAgICA8cmVjdCB4PSIxMiIgeT0iMTIiIHdpZHRoPSI0OCIgaGVpZ2h0PSI0Ny44MyIgZmlsbD0iI2QwY2ZjZSIvPgogICAgPHJlY3QgeD0iMTIiIHk9IjEyIiB3aWR0aD0iMjEuNTQiIGhlaWdodD0iMjEuNTgiIGZpbGw9IiMzZjNmM2YiIHN0cm9rZS13aWR0aD0iMS44MjIiLz4KICAgIDxyZWN0IHg9IjI0LjcxIiB5PSIyNC42MiIgd2lkdGg9IjIyLjU5IiBoZWlnaHQ9IjIyLjY3IiBmaWxsPSIjM2YzZjNmIiBzdHJva2Utd2lkdGg9IjEuODIyIi8+CiAgICA8cmVjdCB4PSIzOC40NiIgeT0iMzguMzQiIHdpZHRoPSIyMS41NCIgaGVpZ2h0PSIyMS42NiIgZmlsbD0iIzNmM2YzZiIgc3Ryb2tlLXdpZHRoPSIxLjgyMiIvPgogICAgPHBhdGggdHJhbnNmb3JtPSJtYXRyaXgoMS41NzMsMCwwLDEuNTczLDM1LjUzLDMuMDE4KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0ibS01LjQ0NiAxNi4wMS0zLTctMyA3Ii8+CiAgICA8cGF0aCB0cmFuc2Zvcm09Im1hdHJpeCgxLjU3MywwLDAsMS41NzMsMzUuNTMsMy4wMTgpIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJtLTEwLjQ1IDE0LjMzaDQiLz4KICAgIDxwYXRoIHRyYW5zZm9ybT0ibWF0cml4KDEuNTczLDAsMCwxLjU3MywzNi4yNiwzLjAxNikiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Im0wLjI5NzEgMjQuNDVoLTIuNjY5di0zLjQ4N2gyLjY2OWMwLjk2MyAwIDEuNzQ0IDAuNzggMS43NDQgMS43NDNzLTAuNzgxIDEuNzQ0LTEuNzQ0IDEuNzQ0eiIvPgogICAgPHBhdGggdHJhbnNmb3JtPSJtYXRyaXgoMS41NzMsMCwwLDEuNTczLDM2LjI2LDMuMDE2KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0ibTAuMjk3MSAyMC45NmgtMi42Njl2LTMuNDg3aDIuNjY5YzAuOTYzIDAgMS43NDQgMC43ODEgMS43NDQgMS43NDRzLTAuNzgxIDEuNzQzLTEuNzQ0IDEuNzQzeiIvPgogICAgPHBhdGggdHJhbnNmb3JtPSJtYXRyaXgoMS41NzMsMCwwLDEuNTczLDM1LjUzLDMuMDE4KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0ibTExLjEyIDMyLjUyYy0wLjQ0MSAwLjM5MS0xLjAyMiAwLjYyOS0xLjY1OSAwLjYyOS0xLjM4IDAtMi41LTEuMTE5LTIuNS0yLjV2LTIgMi0yYzAtMS4zODEgMS4xMi0yLjUgMi41LTIuNSAwLjYzNyAwIDEuMjE4IDAuMjM4IDEuNjU5IDAuNjI5Ii8+CiAgPC9nPgogIDxnIGlkPSJsaW5lIj4KICAgIDxyZWN0IHg9IjEyIiB5PSIxMiIgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgPC9nPgo8L3N2Zz4=", "chapters": ["en-vocabulary-grammar"], "provenance": "verified"}, {"id": "om-1F50D", "type": "illustration", "title": "Lupe", "alt": "Vergrösserungsglas", "caption": "Belege suchen, nicht zusammenfassen.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-1F50D/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-1F50D.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiPgogICAgPGVsbGlwc2UgY3g9IjI5LjU4NTQiIGN5PSIyNC44MzA1IiByeD0iMTEuMTY1NiIgcnk9IjExLjE2NTciIHRyYW5zZm9ybT0ibWF0cml4KDAuODAwNiAtMC41OTkyIDAuNTk5MiAwLjgwMDYgLTguOTc5IDIyLjY3NzcpIiBmaWxsPSIjRkZGRkZGIiBzdHJva2U9Im5vbmUiLz4KICAgIDxwYXRoIGZpbGw9IiM5MkQzRjUiIHN0cm9rZT0ibm9uZSIgZD0iTTM5LDE5Yy0xLjYyNjktMi4xNzQzLTUuMzExNC00LjYxMzEtOC01Yy0xLjg0MS0wLjI2NDgtNSwwLTUuMzEyNiwxLjQ1MDggYzIuNDMyLDAuMjIzMiw2LjI2MSwxLjM5MzMsOS40NDgzLDYuMDM5MWMyLjcwNDcsMy45NDI3LDIuOTA5OCw3LjI2MDYsMi41MDkyLDkuNTIxNUM0MCwzMSw0MS43ODY3LDIyLjcyNDMsMzksMTl6Ii8+CiAgICA8cGF0aCBmaWxsPSIjRDBDRkNFIiBzdHJva2U9Im5vbmUiIGQ9Ik0yMC43MTcsMTMuMjUzMmMtMy4xMzk1LDIuMzUxNy01LjE3NjYsNS43ODMyLTUuNzM3Miw5LjY2NjNjLTAuNTU4NCwzLjg4MywwLjQyODYsNy43NTE0LDIuNzc4NSwxMC44OTI3IGM0Ljg1MjgsNi40ODI3LDE0LjA3NTgsNy44MTAxLDIwLjU1OTUsMi45NTc3YzYuNDgzMi00Ljg1MTQsNy44MTEyLTE0LjA3MywyLjk1ODctMjAuNTU5MSBjLTIuMzUwNC0zLjE0MDItNS43ODM5LTUuMTc3OC05LjY2NjgtNS43MzYyQzI3LjcyNjcsOS45MTYxLDIzLjg1ODcsMTAuOTAyMiwyMC43MTcsMTMuMjUzMnogTTM4LjE5MzMsMTguMzg4MyBjMi4yODEzLDMuMDQ4MiwyLjY5Niw2LjkyNCwxLjQ0MzQsMTAuMjQ4Yy0wLjY5NjUsMS44NTE0LTEuOTExMywzLjUzMDYtMy42MDk1LDQuODAxNmMtNC43NDYzLDMuNTUyNS0xMS40OTgsMi41OC0xNS4wNDk2LTIuMTY2IGMtMS43MjA2LTIuMjk5Mi0yLjQ0MzctNS4xMzA5LTIuMDM0MS03Ljk3MzFjMC40MS0yLjg0MjksMS44OTk5LTUuMzU1NCw0LjIwMDItNy4wNzY1YzIuMjk4NC0xLjcyMSw1LjEyOTgtMi40NDMzLDcuOTczMS0yLjAzNDEgQzMzLjk1OTIsMTQuNTk2OSwzNi40NzE5LDE2LjA4ODksMzguMTkzMywxOC4zODgzeiIvPgogICAgPHBhdGggZmlsbD0iIzNGM0YzRiIgc3Ryb2tlPSJub25lIiBkPSJNMzksNDJsMTAsMTRjMCwwLDMsNCw1LDJzMC01LDAtNUw0MywzOUwzOSw0MnoiLz4KICA8L2c+CiAgPGcgaWQ9ImhhaXIiLz4KICA8ZyBpZD0ic2tpbiIvPgogIDxnIGlkPSJza2luLXNoYWRvdyIvPgogIDxnIGlkPSJsaW5lIj4KICAgIDxlbGxpcHNlIGN4PSIyOS41ODU0IiBjeT0iMjQuODMwNSIgcng9IjE0LjYzNzIiIHJ5PSIxNC42MzcyIiB0cmFuc2Zvcm09Im1hdHJpeCgwLjgwMDYgLTAuNTk5MiAwLjU5OTIgMC44MDA2IC04Ljk3OSAyMi42Nzc4KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjkuNTg1NCIgY3k9IjI0LjgzMDUiIHJ4PSIxMS4xNjU2IiByeT0iMTEuMTY1NyIgdHJhbnNmb3JtPSJtYXRyaXgoMC44MDA2IC0wLjU5OTIgMC41OTkyIDAuODAwNiAtOC45NzkgMjIuNjc3NykiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMzguNjgwNSw0MS43ODc2bDQuMTgzOS0zLjEzMTZsMTEuNjkyNywxNS42MjJjMC44MzU0LDEuMTE2MiwwLjU3NTgsMi43MjE5LTAuNTc5NSwzLjU4NjdsMCwwIGMtMS4xNTU0LDAuODY0Ny0yLjc2OTEsMC42NjEtMy42MDQ1LTAuNDU1MUwzOC42ODA1LDQxLjc4NzZ6Ii8+CiAgPC9nPgo8L3N2Zz4=", "chapters": ["en-reading"], "provenance": "verified"}, {"id": "om-23F1", "type": "illustration", "title": "Stoppuhr", "alt": "Uhr", "caption": "Die letzten fünfzehn Minuten bringen mehr als fünfzehn weitere.", "creator": "OpenMoji contributors, HfG Schwäbisch Gmünd", "source": "https://openmoji.org/library/emoji-23F1/", "licence": "CC BY-SA 4.0", "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "file": "om-23F1.svg", "data": "data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiPgogICAgPHBvbHlsaW5lIGZpbGw9IiNkMGNmY2UiIHN0cm9rZT0iI2QwY2ZjZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgcG9pbnRzPSI1My43NTU5LDE5LjczNjYgNTguMzQyNCwxNi4xODcgNjEuNDAyMywyMC4xNDA3IDU3LjE0OTMsMjMuNDMyMiIvPgogICAgPHJlY3QgeD0iMzEuMzEyNiIgeT0iNyIgd2lkdGg9IjExLjAwODMiIGhlaWdodD0iNi4yOTQxIiBmaWxsPSIjZDBjZmNlIiBzdHJva2U9Im5vbmUiLz4KICAgIDxjaXJjbGUgY3g9IjM2LjgyMTQiIGN5PSIzNi4yOTQxIiByPSIyMyIgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgPC9nPgogIDxnIGlkPSJoYWlyIi8+CiAgPGcgaWQ9InNraW4iLz4KICA8ZyBpZD0ic2tpbi1zaGFkb3ciLz4KICA8ZyBpZD0ibGluZSI+CiAgICA8Y2lyY2xlIGN4PSIzNi44MjE0IiBjeT0iMzYuMjk0MSIgcj0iMjMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPHBvbHlsaW5lIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgcG9pbnRzPSI1Ni4zNjYsMTcuNzE2NiA1OC4zNDI0LDE2LjE4NyA2MS40MDIzLDIwLjE0MDcgNTkuNTY5NiwyMS41NTkxIi8+CiAgICA8cG9seWxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBwb2ludHM9IjMyLjMyMTQsOS43MjcxIDMyLjMyMTQsNyA0MS4zMjE0LDcgNDEuMzIxNCw5Ljg5MzEiLz4KICAgIDxjaXJjbGUgY3g9IjM2LjM0NzUiIGN5PSIxNi45ODE3IiByPSIxIiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9Im5vbmUiLz4KICAgIDxjaXJjbGUgY3g9IjM2LjM0NzUiIGN5PSI1NS4wMjM5IiByPSIxIiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9Im5vbmUiLz4KICAgIDxlbGxpcHNlIGN4PSI0OS43OTc1IiBjeT0iMjIuNTUyOCIgcng9IjAuOTg3OCIgcnk9IjEuMDEyMSIgdHJhbnNmb3JtPSJtYXRyaXgoMC43MDcxIC0wLjcwNzEgMC43MDcxIDAuNzA3MSAtMS4zNjE5IDQxLjgxNzcpIiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9Im5vbmUiLz4KICAgIDxlbGxpcHNlIGN4PSIyMi44OTc1IiBjeT0iNDkuNDUyOCIgcng9IjAuOTg3OCIgcnk9IjEuMDEyMSIgdHJhbnNmb3JtPSJtYXRyaXgoMC43MDcxIC0wLjcwNzEgMC43MDcxIDAuNzA3MSAtMjguMjYxOSAzMC42NzU0KSIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSJub25lIi8+CiAgICA8Y2lyY2xlIGN4PSI1NS4zNjg2IiBjeT0iMzYuMDAyOCIgcj0iMSIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSJub25lIi8+CiAgICA8Y2lyY2xlIGN4PSIxNy4zMjY0IiBjeT0iMzYuMDAyOCIgcj0iMSIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSJub25lIi8+CiAgICA8bGluZSB4MT0iMzYuODM5OSIgeDI9IjIxLjQzOTkiIHkxPSIzNS45MSIgeTI9IjM1LjkxIiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSIzNi44ODQ2IiB4Mj0iMjUuOTk1MiIgeTE9IjM1LjkyNTMiIHkyPSI0Ni44MTQ3IiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxlbGxpcHNlIGN4PSI0OS43OTc1IiBjeT0iNDkuNDUyOCIgcng9IjEuMDEyMSIgcnk9IjAuOTg3OCIgdHJhbnNmb3JtPSJtYXRyaXgoMC43MDcxIC0wLjcwNzEgMC43MDcxIDAuNzA3MSAtMjAuMzgzMSA0OS42OTY1KSIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSJub25lIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjIuODk3NSIgY3k9IjIyLjU1MjgiIHJ4PSIxLjAxMjEiIHJ5PSIwLjk4NzgiIHRyYW5zZm9ybT0ibWF0cml4KDAuNzA3MSAtMC43MDcxIDAuNzA3MSAwLjcwNzEgLTkuMjQwNyAyMi43OTY1KSIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSJub25lIi8+CiAgPC9nPgo8L3N2Zz4=", "chapters": ["en-exam-strategy"], "provenance": "verified"}];
  M.MEDIA_BY_CHAPTER = {};
  M.MEDIA.forEach(function (m) {
    (m.chapters || []).forEach(function (c) {
      (M.MEDIA_BY_CHAPTER[c] = M.MEDIA_BY_CHAPTER[c] || []).push(m);
    });
  });
  /* Veröffentlichung nur mit belegter Rechtelage je Einzelbild */
  M.mediaUnverified = function () {
    return M.MEDIA.filter(function (m) { return m.provenance !== "verified"; });
  };
  M.mediaPublishable = function () { return M.mediaUnverified().length === 0; };
  M.mediaFor = function (id) { return (M.MEDIA_BY_CHAPTER[id] || [])[0] || null; };
  M.mediaHTML = function (m, cls) {
    if (!m) return "";
    return '<figure class="media ' + (cls || "") + '">'
      + '<img src="' + m.data + '" alt="' + M.esc(m.alt) + '" loading="lazy" width="' + (m.w || 640)
      + '" height="' + (m.h || 480) + '">'
      + '<figcaption>' + M.esc(m.caption)
      + '<span class="media-cred' + (m.provenance !== "verified" ? " unverified" : "") + '">'
      + M.esc(m.creator) + ' · ' + M.esc(m.licence)
      + (m.provenance !== "verified" ? '' : '') + '</span>'
      + '</figcaption></figure>';
  };
})();