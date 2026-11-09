

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
  M.MEDIA = [{"id":"om-1F9EC","type":"illustration","subject":"bio","title":"DNA-Doppelhelix","alt":"Schematische DNA","caption":"Der Bauplan liegt im Zellkern.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-1F9EC/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-1F9EC.svg","data":"assets/media/b1f0517c11e6a0c86561.svg","chapters":["bio-dna-replication","bio-mendel"],"provenance":"verified"},{"id":"om-1F9A0","type":"illustration","subject":"bio","title":"Mikrobe","alt":"Einzeller schematisch","caption":"Prokaryoten haben keinen Zellkern.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-1F9A0/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-1F9A0.svg","data":"assets/media/c5940c9632fea84c3011.svg","chapters":["bio-ecology"],"provenance":"verified"},{"id":"om-1F337","type":"illustration","subject":"bio","title":"Blüte","alt":"Tulpe","caption":"Blüten sind Fortpflanzungsorgane der Bedecktsamer.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-1F337/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-1F337.svg","data":"assets/media/e92365ff57d46fa12a7b.svg","chapters":["bio-evolution"],"provenance":"verified"},{"id":"om-1F98B","type":"illustration","subject":"bio","title":"Schmetterling","alt":"Falter","caption":"Vollständige Metamorphose in vier Stadien.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-1F98B/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-1F98B.svg","data":"assets/media/c80134fd8ae08529a525.svg","chapters":["bio-meiosis-karyotype"],"provenance":"verified"},{"id":"om-1F9A5","type":"illustration","subject":"bio","title":"Faultier","alt":"Säugetier","caption":"Niedriger Grundumsatz, wenig Mitochondrien nötig.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-1F9A5/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-1F9A5.svg","data":"assets/media/c948795eb01eca0701fe.svg","chapters":["bio-enzymes"],"provenance":"verified"},{"id":"om-1F52C","type":"illustration","subject":"bio","title":"Mikroskop","alt":"Labormikroskop","caption":"Auflösung begrenzt, was sichtbar wird.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-1F52C/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-1F52C.svg","data":"assets/media/fd93493e91847b5bd6b5.svg","chapters":["bio-membrane-transport"],"provenance":"verified"},{"id":"om-2697","type":"illustration","subject":"chem","title":"Destillierkolben","alt":"Alchemistischer Kolben","caption":"Trennverfahren nutzen Siedepunktunterschiede.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-2697/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-2697.svg","data":"assets/media/b0bec506d5b015f3e438.svg","chapters":["chem-substances"],"provenance":"verified"},{"id":"om-1F9EA","type":"illustration","subject":"chem","title":"Reagenzglas","alt":"Reagenzglas mit Flüssigkeit","caption":"Konzentration ist Stoffmenge pro Volumen.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-1F9EA/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-1F9EA.svg","data":"assets/media/6f9f8d51d3e31ff34639.svg","chapters":["chem-acid-base","chem-concentration-stoich","chem-organic-naming"],"provenance":"verified"},{"id":"om-1F9EB","type":"illustration","subject":"chem","title":"Petrischale","alt":"Petrischale","caption":"Kulturmedium für Mikroorganismen.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-1F9EB/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-1F9EB.svg","data":"assets/media/d3ce0193c78a32ee8966.svg","chapters":["chem-organic-groups"],"provenance":"verified"},{"id":"om-1F525","type":"illustration","subject":"chem","title":"Flamme","alt":"Feuer","caption":"Verbrennung ist eine Redoxreaktion.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-1F525/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-1F525.svg","data":"assets/media/c0005ef2aaf5c7c2e182.svg","chapters":["chem-redox","chem-energetics"],"provenance":"verified"},{"id":"om-1F9F2","type":"illustration","subject":"phys","title":"Magnet","alt":"Hufeisenmagnet","caption":"Feldlinien laufen aussen von Nord nach Süd.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-1F9F2/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-1F9F2.svg","data":"assets/media/12e885b4c1ab38ad7ab5.svg","chapters":["phys-magnetism"],"provenance":"verified"},{"id":"om-26A1","type":"illustration","subject":"phys","title":"Blitz","alt":"Elektrische Entladung","caption":"Spannungsunterschied treibt den Strom.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-26A1/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-26A1.svg","data":"assets/media/7726067b776e2a8e495d.svg","chapters":["phys-electric-basics","phys-circuits-power"],"provenance":"verified"},{"id":"om-1F321","type":"illustration","subject":"phys","title":"Thermometer","alt":"Thermometer","caption":"Temperatur misst mittlere Teilchenenergie.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-1F321/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-1F321.svg","data":"assets/media/92a9eed162e47780547b.svg","chapters":["geo-climate-change","phys-heat-thermo","phys-temperature-expansion"],"provenance":"verified"},{"id":"om-1F50B","type":"illustration","subject":"phys","title":"Batterie","alt":"Akku","caption":"Chemische Energie wird elektrisch nutzbar.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-1F50B/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-1F50B.svg","data":"assets/media/299a08e8a6594a44aab8.svg","chapters":["phys-energy"],"provenance":"verified"},{"id":"om-1F30A","type":"illustration","subject":"phys","title":"Welle","alt":"Wasserwelle","caption":"Wellen transportieren Energie, nicht Materie.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-1F30A/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-1F30A.svg","data":"assets/media/6ff46bf435a2b202d28e.svg","chapters":["phys-states"],"provenance":"verified"},{"id":"om-1F4D0","type":"illustration","subject":"math","title":"Geodreieck","alt":"Dreieck mit Winkelmesser","caption":"Trigonometrie verbindet Winkel und Seiten.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-1F4D0/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-1F4D0.svg","data":"assets/media/f67f2ad2025f8a6d149c.svg","chapters":["math-analytic-geometry","math-derivatives","math-trigonometry"],"provenance":"verified"},{"id":"om-1F4CA","type":"illustration","subject":"math","title":"Balkendiagramm","alt":"Säulen","caption":"Daten werden erst durch Darstellung lesbar.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-1F4CA/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-1F4CA.svg","data":"assets/media/99a5ff4f6aa88f35de5b.svg","chapters":["math-functions-basic"],"provenance":"verified"},{"id":"om-1F3B2","type":"illustration","subject":"math","title":"Würfel","alt":"Spielwürfel","caption":"Laplace-Experiment mit sechs gleichwahrscheinlichen Ergebnissen.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-1F3B2/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-1F3B2.svg","data":"assets/media/f97584c34ac225b2fa58.svg","chapters":["math-probability"],"provenance":"verified"},{"id":"om-1F9EE","type":"illustration","subject":"math","title":"Rechenmaschine","alt":"Abakus","caption":"Stellenwertsystem als Grundlage des Rechnens.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-1F9EE/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-1F9EE.svg","data":"assets/media/be3b0ee914cd2da24f2f.svg","chapters":["math-algebra"],"provenance":"verified"},{"id":"om-1F5FA","type":"illustration","subject":"geo","title":"Weltkarte","alt":"Karte","caption":"Projektionen verzerren immer, die Frage ist wie.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-1F5FA/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-1F5FA.svg","data":"assets/media/45c3e2ddc2be11ce98da.svg","chapters":["geo-spatial-transport"],"provenance":"verified"},{"id":"om-1F30B","type":"illustration","subject":"geo","title":"Vulkan","alt":"Ausbrechender Vulkan","caption":"Vulkanismus folgt den Plattengrenzen.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-1F30B/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-1F30B.svg","data":"assets/media/5d62b4986a647a889227.svg","chapters":["geo-plate-tectonics"],"provenance":"verified"},{"id":"om-26F0","type":"illustration","subject":"geo","title":"Berg","alt":"Gebirgsgipfel","caption":"Relief steuert Niederschlag und Besiedlung.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-26F0/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-26F0.svg","data":"assets/media/1e2b4954645b4724b4fd.svg","chapters":["geo-usa-physical","math-curve-optimisation"],"provenance":"verified"},{"id":"om-1F32A","type":"illustration","subject":"geo","title":"Tornado","alt":"Wirbelsturm","caption":"Tornado Alley entsteht durch aufeinandertreffende Luftmassen.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-1F32A/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-1F32A.svg","data":"assets/media/92621bb69ebe8305c1d8.svg","chapters":["geo-weather-climate"],"provenance":"verified"},{"id":"om-1F3DC","type":"illustration","subject":"geo","title":"Wüste","alt":"Wüstenlandschaft","caption":"Aridität entsteht durch absinkende Luftmassen.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-1F3DC/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-1F3DC.svg","data":"assets/media/1b9b5a0a479224568a1a.svg","chapters":["geo-climate-diagrams"],"provenance":"verified"},{"id":"om-1F3DB","type":"illustration","subject":"hist","title":"Antiker Tempel","alt":"Säulenbau","caption":"Antike Staatsformen prägen die Begriffe bis heute.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-1F3DB/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-1F3DB.svg","data":"assets/media/2b26960a33c5534adbad.svg","chapters":["hist-ideologies"],"provenance":"verified"},{"id":"om-1F4DC","type":"illustration","subject":"hist","title":"Schriftrolle","alt":"Urkunde","caption":"Quellen müssen auf Absicht und Herkunft geprüft werden.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-1F4DC/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-1F4DC.svg","data":"assets/media/1db7e33655758dd8d40e.svg","chapters":["hist-ch-1798-1848"],"provenance":"verified"},{"id":"om-2696","type":"illustration","subject":"hist","title":"Waage","alt":"Justitia-Waage","caption":"Gewaltenteilung trennt Gesetzgebung und Rechtsprechung.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-2696/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-2696.svg","data":"assets/media/aa4ebc81222347205bae.svg","chapters":["chem-equations-mole","de-argumentation","hist-ch-postwar-system"],"provenance":"verified"},{"id":"om-1F3F0","type":"illustration","subject":"hist","title":"Burg","alt":"Mittelalterliche Burg","caption":"Herrschaft war räumlich an Befestigungen gebunden.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-1F3F0/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-1F3F0.svg","data":"assets/media/125d63f22920f05ad480.svg","chapters":["hist-imperialism"],"provenance":"verified"},{"id":"om-1F54A","type":"illustration","subject":"hist","title":"Friedenstaube","alt":"Taube mit Zweig","caption":"Friedensschlüsse ordnen Europa nach 1815 und 1945 neu.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-1F54A/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-1F54A.svg","data":"assets/media/298aaa9ae30782fbe367.svg","chapters":["hist-un-nato-europe"],"provenance":"verified"},{"id":"om-1F4D6","type":"illustration","subject":"de","title":"Aufgeschlagenes Buch","alt":"Buch","caption":"Textanalyse braucht die Stelle, nicht die Zusammenfassung.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-1F4D6/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-1F4D6.svg","data":"assets/media/8a27dd510a7944e2d58c.svg","chapters":["de-buehler","de-storm"],"provenance":"verified"},{"id":"om-1F58B","type":"illustration","subject":"de","title":"Füllfeder","alt":"Federhalter","caption":"Schreiben heisst überarbeiten.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-1F58B/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-1F58B.svg","data":"assets/media/bfcb48b0211f97d0c943.svg","chapters":["de-language-editing"],"provenance":"verified"},{"id":"om-1F3AD","type":"illustration","subject":"de","title":"Theatermasken","alt":"Masken","caption":"Komödie und Tragödie, Dürrenmatts Tragikomödie verbindet beide.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-1F3AD/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-1F3AD.svg","data":"assets/media/3da2faedaa239522149c.svg","chapters":["de-duerrenmatt"],"provenance":"verified"},{"id":"om-1F1EC-1F1E7","type":"illustration","subject":"en","title":"Flagge Grossbritannien","alt":"Union Jack","caption":"Britisches und amerikanisches Englisch unterscheiden sich.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-1F1EC-1F1E7/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-1F1EC-1F1E7.svg","data":"assets/media/d64843980d61b2c02c4f.svg","chapters":["en-literature"],"provenance":"verified"},{"id":"om-1F5E3","type":"illustration","subject":"en","title":"Sprechender Kopf","alt":"Silhouette beim Sprechen","caption":"Im Mündlichen zählt Flüssigkeit so viel wie Korrektheit.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-1F5E3/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-1F5E3.svg","data":"assets/media/574644d5b185c1518814.svg","chapters":["de-oral-method","en-speaking"],"provenance":"verified"},{"id":"om-1F4DD","type":"illustration","subject":"en","title":"Notizblock","alt":"Schreibblock","caption":"Argumentative writing folgt einer klaren Struktur.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-1F4DD/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-1F4DD.svg","data":"assets/media/018e8832c07ec5eac99c.svg","chapters":["en-writing"],"provenance":"verified"},{"id":"om-1F4C9","type":"illustration","title":"Fallende Kurve","alt":"Diagramm mit Parabelast","caption":"Zwei Lösungen, eine oder keine: die Diskriminante entscheidet.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-1F4C9/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-1F4C9.svg","data":"assets/media/89bda6586b9026fc20aa.svg","chapters":["hist-versailles-crisis","math-systems-quadratics"],"provenance":"verified"},{"id":"om-1F4C8","type":"illustration","title":"Steigende Kurve","alt":"Exponentielles Wachstum","caption":"Exponentialfunktionen wachsen schneller als jede Potenz.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-1F4C8/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-1F4C8.svg","data":"assets/media/38d829f6897cab0dd97d.svg","chapters":["math-functions-advanced"],"provenance":"verified"},{"id":"om-267E","type":"illustration","title":"Unendlich","alt":"Unendlichzeichen","caption":"Der Grenzwert beschreibt die Annäherung, nicht das Erreichen.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-267E/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-267E.svg","data":"assets/media/bbe1066aec746055eadc.svg","chapters":["math-limits"],"provenance":"verified"},{"id":"om-1F4CF","type":"illustration","title":"Flächenmessung","alt":"Lineal","caption":"Das Integral misst die Fläche unter der Kurve.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-1F4CF/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-1F4CF.svg","data":"assets/media/f06640e769d630e43035.svg","chapters":["math-integrals"],"provenance":"verified"},{"id":"om-27A1","type":"illustration","title":"Pfeil","alt":"Richtungspfeil","caption":"Ein Vektor hat Betrag und Richtung.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-27A1/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-27A1.svg","data":"data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiPgogICAgPHBvbHlnb24gZmlsbD0iIzNGM0YzRiIgc3Ryb2tlPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBwb2ludHM9IjQ5LjIxMjQsNTEuNTM0MyA2NywzNS4wMzYzIDQ5LjIxMjQsMTguNTM4MiA0NS40MjM0LDIyLjYxMzggNTUuODE5MSwzMi4yNTU0IDUsMzIuMjU1NCA1LDM3LjgxNzEgNTUuODE5MSwzNy44MTcxIDQ1LjQyMzQsNDcuNDU4NyIvPgogIDwvZz4KICA8ZyBpZD0iaGFpciIvPgogIDxnIGlkPSJza2luIi8+CiAgPGcgaWQ9InNraW4tc2hhZG93Ii8+CiAgPGcgaWQ9ImxpbmUiPgogICAgPHBvbHlnb24gZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBwb2ludHM9IjQ5LjIxMjQsNTEuNTM0MyA2NywzNS4wMzYzIDQ5LjIxMjQsMTguNTM4MiA0NS40MjM0LDIyLjYxMzggNTUuODE5MSwzMi4yNTU0IDUsMzIuMjU1NCA1LDM3LjgxNzEgNTUuODE5MSwzNy44MTcxIDQ1LjQyMzQsNDcuNDU4NyIvPgogIDwvZz4KPC9zdmc+","chapters":["math-vectors"],"provenance":"verified"},{"id":"om-1F46A","type":"illustration","title":"Familie","alt":"Familiengruppe","caption":"Stammbäume zeigen, wie Merkmale weitergegeben werden.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-1F46A/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-1F46A.svg","data":"assets/media/989c3859fcf4e815151f.svg","chapters":["bio-dihybrid-sexlinked"],"provenance":"verified"},{"id":"om-1FAC0","type":"illustration","title":"Anatomisches Organ","alt":"Organ-Symbol","caption":"Jeder Darmabschnitt hat sein eigenes Enzym.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-1FAC0/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-1FAC0.svg","data":"assets/media/759b8e92b9f89cd015a3.svg","chapters":["bio-digestion"],"provenance":"verified"},{"id":"om-1F9E0","type":"illustration","title":"Gehirn","alt":"Gehirn","caption":"Der Reflexbogen umgeht das Gehirn, deshalb ist er schnell.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-1F9E0/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-1F9E0.svg","data":"assets/media/c9a604f8408f8b592a58.svg","chapters":["bio-nervous-system"],"provenance":"verified"},{"id":"om-269B","type":"illustration","title":"Atomsymbol","alt":"Atommodell","caption":"Periode gleich Schale, Hauptgruppe gleich Aussenelektronen.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-269B/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-269B.svg","data":"assets/media/bc911b7d51c3376e2b36.svg","chapters":["chem-atoms-pse","chem-shell-lewis"],"provenance":"verified"},{"id":"om-1F517","type":"illustration","title":"Bindung","alt":"Kettenglieder","caption":"In der kovalenten Bindung teilen sich Atome Elektronen.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-1F517/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-1F517.svg","data":"assets/media/ce043a124d51aa4e9789.svg","chapters":["chem-covalent"],"provenance":"verified"},{"id":"om-1F4A7","type":"illustration","title":"Wassertropfen","alt":"Tropfen","caption":"Wasserstoffbrücken erklären den hohen Siedepunkt von Wasser.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-1F4A7/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-1F4A7.svg","data":"assets/media/04363a727e2c2b98f964.svg","chapters":["chem-polarity-forces"],"provenance":"verified"},{"id":"om-1F3C3","type":"illustration","title":"Laufende Person","alt":"Läufer","caption":"Gleichförmig heisst konstante Geschwindigkeit.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-1F3C3/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-1F3C3.svg","data":"assets/media/d5200fb9f7cc428460fd.svg","chapters":["phys-kinematics"],"provenance":"verified"},{"id":"om-1F34E","type":"illustration","title":"Fallender Apfel","alt":"Apfel","caption":"Ohne Luftwiderstand fallen alle Körper gleich schnell.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-1F34E/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-1F34E.svg","data":"assets/media/96b8644790512514bef4.svg","chapters":["phys-fall-throw"],"provenance":"verified"},{"id":"om-1F9CA","type":"illustration","title":"Eiswürfel","alt":"Eis","caption":"Haftreibung ist grösser als Gleitreibung.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-1F9CA/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-1F9CA.svg","data":"assets/media/db825264cd046df8231f.svg","chapters":["hist-postwar-coldwar","phys-friction-statics"],"provenance":"verified"},{"id":"om-1F4AA","type":"illustration","title":"Kraftaufwand","alt":"Angespannter Arm","caption":"Leistung ist Arbeit je Zeit.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-1F4AA/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-1F4AA.svg","data":"assets/media/ae0960a109095f09f327.svg","chapters":["phys-work-power"],"provenance":"verified"},{"id":"om-1F93F","type":"illustration","title":"Taucher","alt":"Taucherin","caption":"Je zehn Meter Wasser kommt ein bar dazu.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-1F93F/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-1F93F.svg","data":"assets/media/6398ce66fbd737474859.svg","chapters":["phys-pressure-hydro"],"provenance":"verified"},{"id":"om-1F1E8-1F1ED","type":"illustration","title":"Schweizer Flagge","alt":"Flagge der Schweiz","caption":"Neutral nach aussen, gespalten nach innen.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-1F1E8-1F1ED/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-1F1E8-1F1ED.svg","data":"data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiPgogICAgPHJlY3QgeD0iMTciIHk9IjE3IiB3aWR0aD0iMzgiIGhlaWdodD0iMzgiIGZpbGw9IiNkMjJmMjciLz4KICAgIDxwb2x5Z29uIGZpbGw9IiNmZmYiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIHBvaW50cz0iNDcgMzIuNDYyIDM5LjUzOCAzMi40NjIgMzkuNTM4IDI1IDMyLjQ2MiAyNSAzMi40NjIgMzIuNDYyIDI1IDMyLjQ2MiAyNSAzOS41MzggMzIuNDYyIDM5LjUzOCAzMi40NjIgNDcgMzkuNTM4IDQ3IDM5LjUzOCAzOS41MzggNDcgMzkuNTM4IDQ3IDMyLjQ2MiIvPgogIDwvZz4KICA8ZyBpZD0ibGluZSI+CiAgICA8cmVjdCB4PSIxNyIgeT0iMTciIHdpZHRoPSIzOCIgaGVpZ2h0PSIzOCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIvPgogIDwvZz4KPC9zdmc+","chapters":["hist-ch-ww1"],"provenance":"verified"},{"id":"om-1F3D4","type":"illustration","title":"Alpenmassiv","alt":"Verschneiter Gipfel","caption":"Das Reduit verlegte die Verteidigung in die Alpen.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-1F3D4/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-1F3D4.svg","data":"assets/media/b81379aba3f8b3caaba3.svg","chapters":["hist-ch-ww2"],"provenance":"verified"},{"id":"om-26D3","type":"illustration","title":"Bündniskette","alt":"Kettenglieder","caption":"Bündnissysteme machten aus der Krise einen Weltkrieg.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-26D3/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-26D3.svg","data":"assets/media/c22f53a08ba8c6af6ecb.svg","chapters":["hist-ww1"],"provenance":"verified"},{"id":"om-1F4E2","type":"illustration","title":"Propaganda","alt":"Megafon","caption":"Gleichschaltung heisst: nur eine Stimme bleibt.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-1F4E2/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-1F4E2.svg","data":"assets/media/75858bbfa06ce076176a.svg","chapters":["hist-dictatorships"],"provenance":"verified"},{"id":"om-1F30D","type":"illustration","title":"Weltkugel","alt":"Erde, Europa und Afrika","caption":"1941 wurde aus dem europäischen Krieg ein Weltkrieg.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-1F30D/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-1F30D.svg","data":"assets/media/004b269133719c77eb24.svg","chapters":["hist-ww2-world"],"provenance":"verified"},{"id":"om-1F91D","type":"illustration","title":"Handschlag","alt":"Zwei Hände","caption":"Bandung suchte einen dritten Weg zwischen den Blöcken.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-1F91D/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-1F91D.svg","data":"assets/media/24090d95bf40971120a9.svg","chapters":["hist-bandung-decolonisation"],"provenance":"verified"},{"id":"om-1F1E8-1F1F3","type":"illustration","title":"Flagge Chinas","alt":"Flagge","caption":"Wirtschaftliche Öffnung ohne politische Öffnung.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-1F1E8-1F1F3/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-1F1E8-1F1F3.svg","data":"data:image/svg+xml;base64,PHN2ZyBpZD0iZW1vamkiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBpZD0iY29sb3IiPgogICAgPHJlY3QgeD0iNSIgeT0iMTciIHdpZHRoPSI2MiIgaGVpZ2h0PSIzOCIgZmlsbD0iI2QyMmYyNyIvPgogICAgPGNpcmNsZSBjeD0iMjQiIGN5PSIzNCIgcj0iMS43NSIgZmlsbD0iI2YxYjMxYyIvPgogICAgPGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iMS43NSIgZmlsbD0iI2YxYjMxYyIvPgogICAgPGNpcmNsZSBjeD0iMjgiIGN5PSIzMSIgcj0iMS43NSIgZmlsbD0iI2YxYjMxYyIvPgogICAgPGNpcmNsZSBjeD0iMjgiIGN5PSIyNiIgcj0iMS43NSIgZmlsbD0iI2YxYjMxYyIvPgogICAgPHBvbHlnb24gZmlsbD0iI2YxYjMxYyIgc3Ryb2tlPSIjZjFiMzFjIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBvaW50cz0iMTMuNTI4IDMyLjQ0NSAxNiAyNC40NDUgMTguNDczIDMyLjQ0NSAxMiAyNy41IDIwIDI3LjUgMTMuNTI4IDMyLjQ0NSIvPgogIDwvZz4KICA8ZyBpZD0ibGluZSI+CiAgICA8cmVjdCB4PSI1IiB5PSIxNyIgd2lkdGg9IjYyIiBoZWlnaHQ9IjM4IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgPC9nPgo8L3N2Zz4=","chapters":["hist-china-1949"],"provenance":"verified"},{"id":"om-1F54C","type":"illustration","title":"Sakralbau","alt":"Kuppelbau","caption":"Der Konflikt hat Territorium, Recht und Religion als Ebenen.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-1F54C/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-1F54C.svg","data":"assets/media/b6530254898a6f14b033.svg","chapters":["hist-middle-east"],"provenance":"verified"},{"id":"om-1F33E","type":"illustration","title":"Getreide","alt":"Ähren","caption":"Mit dem Wohlstand schrumpft der erste Sektor.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-1F33E/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-1F33E.svg","data":"assets/media/08fbc93a7f92e7c7faac.svg","chapters":["geo-economic-sectors-agriculture"],"provenance":"verified"},{"id":"om-267B","type":"illustration","title":"Kreislauf","alt":"Recyclingzeichen","caption":"Nachhaltig heisst ökologisch, ökonomisch und sozial tragfähig.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-267B/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-267B.svg","data":"assets/media/b153d02ed21d79739c85.svg","chapters":["geo-energy-sustainability"],"provenance":"verified"},{"id":"om-1F6A2","type":"illustration","title":"Containerschiff","alt":"Frachtschiff","caption":"Die Wertschöpfung bleibt selten dort, wo montiert wird.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-1F6A2/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-1F6A2.svg","data":"assets/media/42fdd9d2f182b788c779.svg","chapters":["geo-global-development"],"provenance":"verified"},{"id":"om-1F465","type":"illustration","title":"Bevölkerung","alt":"Zwei Personen","caption":"Der demografische Übergang hat vier Phasen.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-1F465/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-1F465.svg","data":"assets/media/200b33f476c8c0e49f7c.svg","chapters":["geo-demography"],"provenance":"verified"},{"id":"om-1F3D9","type":"illustration","title":"Stadt","alt":"Hochhäuser","caption":"Urbanisierung, Suburbanisierung, Reurbanisierung.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-1F3D9/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-1F3D9.svg","data":"assets/media/ce18ea67aac328860b3e.svg","chapters":["geo-urban"],"provenance":"verified"},{"id":"om-1F6E4","type":"illustration","title":"Highway","alt":"Autobahn","caption":"Der Sun Belt wächst, der Rust Belt verliert.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-1F6E4/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-1F6E4.svg","data":"assets/media/998bf812fb476be56275.svg","chapters":["geo-usa-population"],"provenance":"verified"},{"id":"om-1F33D","type":"illustration","title":"Mais","alt":"Maiskolben","caption":"Der Corn Belt liegt östlich des hundertsten Längengrads.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-1F33D/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-1F33D.svg","data":"assets/media/d31adab77735f3b33d93.svg","chapters":["geo-usa-economy"],"provenance":"verified"},{"id":"om-1F5FD","type":"illustration","title":"Freiheitsstatue","alt":"Statue","caption":"Vier Prozent der Weltbevölkerung, ein Viertel der Wirtschaftsleistung.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-1F5FD/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-1F5FD.svg","data":"assets/media/32c1faf31e806295f13b.svg","chapters":["geo-usa-global"],"provenance":"verified"},{"id":"om-1F342","type":"illustration","title":"Herbstblatt","alt":"Fallendes Blatt","caption":"Natur ist bei Burkart nie blosse Kulisse.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-1F342/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-1F342.svg","data":"assets/media/3c35f0f2f47806c4174e.svg","chapters":["de-burkart"],"provenance":"verified"},{"id":"om-1F524","type":"illustration","title":"Buchstaben","alt":"Buchstabenblock","caption":"Die Zeitform folgt aus dem Zeitbezug, nicht aus dem Signalwort.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-1F524/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-1F524.svg","data":"assets/media/c1f7783af70c2fae611c.svg","chapters":["en-vocabulary-grammar"],"provenance":"verified"},{"id":"om-1F50D","type":"illustration","title":"Lupe","alt":"Vergrösserungsglas","caption":"Belege suchen, nicht zusammenfassen.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-1F50D/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-1F50D.svg","data":"assets/media/a9f5339164b75f2dfc26.svg","chapters":["en-reading"],"provenance":"verified"},{"id":"om-23F1","type":"illustration","title":"Stoppuhr","alt":"Uhr","caption":"Die letzten fünfzehn Minuten bringen mehr als fünfzehn weitere.","creator":"OpenMoji contributors, HfG Schwäbisch Gmünd","source":"https://openmoji.org/library/emoji-23F1/","licence":"CC BY-SA 4.0","licenceUrl":"https://creativecommons.org/licenses/by-sa/4.0/","file":"om-23F1.svg","data":"assets/media/ea9f3b7ddf372eff01ec.svg","chapters":["en-exam-strategy"],"provenance":"verified"}];
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