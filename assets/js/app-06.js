

/* Einführungsebene, Teil C: Geschichte und Geografie. */
(function () {
  "use strict";
  var M = window.MNEMIKA;
  function I(id, lead, why, prereq, core, terms) {
    var c = M.chapter(id);
    if (!c) return;
    c.intro = { lead: lead, why: why, prereq: prereq, core: core, terms: terms || [] };
  }

  /* ---------------- Geschichte ---------------- */
  I("hist-ch-1798-1848",
    "Die Schweiz war bis 1798 kein Staat im heutigen Sinn, sondern ein lockeres Bündnis eigenständiger Orte mit Untertanengebieten. Innerhalb von fünfzig Jahren wurde daraus ein Bundesstaat mit Verfassung.",
    "Ohne diesen Umbruch lässt sich das heutige politische System der Schweiz nicht erklären. Er ist Pflichtstoff.",
    "Du brauchst keine Vorkenntnisse, nur die Bereitschaft, Jahreszahlen an Ereignisse zu binden.",
    "Zwischen 1798 und 1848 wurde aus einem Staatenbund ein Bundesstaat, angetrieben vom Konflikt zwischen liberalen und konservativen Kräften.",
    [["Ancien Régime", "Die alte Ordnung vor 1798 mit Untertanengebieten."],
     ["Helvetik", "Zentralistische Republik nach französischem Vorbild, 1798 bis 1803."],
     ["Mediation", "Von Napoleon vermittelte Ordnung ab 1803."],
     ["Regeneration", "Liberale Umgestaltung vieler Kantone ab 1830."],
     ["Sonderbund", "Bündnis konservativer Kantone, 1847 militärisch besiegt."]]);

  I("hist-ch-1848-1914",
    "Nach 1848 musste sich der junge Bundesstaat erst bewähren. Eisenbahnbau, Industrialisierung und politische Reformen veränderten das Land tiefgreifend.",
    "Direkte Demokratie und Proporzwahl haben hier ihren Ursprung, das erklärt heutige Institutionen.",
    "Du brauchst die Entstehung des Bundesstaats von 1848.",
    "Der Bundesstaat wurde durch Volksrechte und wirtschaftliche Modernisierung schrittweise ausgebaut.",
    [["Bundesverfassung 1848", "Grundlage des schweizerischen Bundesstaats."],
     ["Totalrevision 1874", "Ausbau von Bundeskompetenzen und Referendum."],
     ["Referendum", "Volksabstimmung über beschlossene Gesetze."],
     ["Initiative", "Recht des Volkes, eine Verfassungsänderung vorzuschlagen."],
     ["Proporz", "Verhältniswahlrecht, ab 1919 für den Nationalrat."]]);

  I("hist-ch-ww1",
    "Die Schweiz kämpfte nicht mit, geriet aber trotzdem an ihre Grenzen: Versorgungsnot, Teuerung und ein tiefer Riss zwischen der deutsch- und der französischsprachigen Bevölkerung.",
    "Der Landesstreik und der Röstigraben sind wiederkehrende Prüfungsthemen.",
    "Du brauchst Grundwissen zum Ersten Weltkrieg.",
    "Neutralität schützte vor Kampfhandlungen, nicht vor sozialen und wirtschaftlichen Folgen.",
    [["Neutralität", "Verzicht auf Kriegsteilnahme und Bündnisse."],
     ["Röstigraben", "Sprachlich bedingter Gegensatz in der Kriegssympathie."],
     ["Landesstreik 1918", "Landesweiter Generalstreik mit sozialen Forderungen."],
     ["Rationierung", "Staatliche Zuteilung knapper Güter."]]);

  I("hist-ch-ww2",
    "Zwischen 1939 und 1945 war die Schweiz von den Achsenmächten umschlossen. Sie behielt ihre Unabhängigkeit, machte dafür aber wirtschaftliche und politische Zugeständnisse.",
    "Anpassung, Widerstand und Flüchtlingspolitik gehören zu den am häufigsten geprüften Themen.",
    "Du brauchst den Verlauf des Zweiten Weltkriegs in Grundzügen.",
    "Die Schweiz überlebte durch eine Mischung aus militärischer Abschreckung, wirtschaftlicher Anpassung und Glück.",
    [["Reduit", "Verteidigungskonzept mit Rückzug in die Alpen."],
     ["Anpassung", "Wirtschaftliche und politische Zugeständnisse an die Achsenmächte."],
     ["Anbauschlacht", "Ausweitung des Ackerbaus zur Selbstversorgung."],
     ["Flüchtlingspolitik", "Restriktive Aufnahmepraxis, später kritisch aufgearbeitet."],
     ["Bergier-Bericht", "Historische Untersuchung der Rolle der Schweiz."]]);

  I("hist-ch-postwar-system",
    "Nach 1945 baute die Schweiz Sozialstaat und Wohlstand aus und definierte ihre Rolle zwischen Neutralität und internationaler Zusammenarbeit immer wieder neu.",
    "Das heutige politische System mit Konkordanz und direkter Demokratie ist Prüfungsstoff und Alltagswissen.",
    "Du brauchst die Entwicklung seit 1848.",
    "Das System beruht auf Föderalismus, direkter Demokratie und Konkordanz statt auf Mehrheitsherrschaft.",
    [["Konkordanz", "Einbindung aller grossen Parteien in die Regierung."],
     ["Föderalismus", "Aufgabenteilung zwischen Bund, Kantonen und Gemeinden."],
     ["AHV", "1948 eingeführte Alters- und Hinterlassenenversicherung."],
     ["Frauenstimmrecht", "Auf Bundesebene 1971 eingeführt."],
     ["Bilaterale Verträge", "Vertragliche Regelung des Verhältnisses zur EU."]]);

  I("hist-ideologies",
    "Im 19. Jahrhundert entstanden die grossen politischen Weltanschauungen, die bis heute die Parteienlandschaft prägen. Sie geben unterschiedliche Antworten auf dieselbe Frage: wem gehört die Macht.",
    "Ideologien zu unterscheiden ist Voraussetzung für fast jede Analyse des 19. und 20. Jahrhunderts.",
    "Du brauchst Grundwissen zur Französischen Revolution.",
    "Liberalismus betont Freiheit, Nationalismus Zugehörigkeit, Sozialismus Gleichheit.",
    [["Liberalismus", "Individuelle Freiheit, Rechtsstaat, begrenzte Staatsmacht."],
     ["Nationalismus", "Nation als oberste Bezugsgrösse der Politik."],
     ["Sozialismus", "Gleichheit und gesellschaftliche Kontrolle der Produktionsmittel."],
     ["Konservatismus", "Bewahrung gewachsener Ordnungen."],
     ["Industrialisierung", "Wirtschaftlicher Umbruch, der diese Ideologien erst hervorbrachte."]]);

  I("hist-imperialism",
    "Zwischen 1880 und 1914 teilten wenige europäische Staaten fast die ganze Welt unter sich auf. Die Folgen dieser Aufteilung wirken bis in heutige Konflikte hinein.",
    "Ursachen, Rechtfertigungen und Folgen des Imperialismus sind ein fester Prüfungsblock.",
    "Du brauchst Industrialisierung und Nationalismus.",
    "Wirtschaftliche Interessen, Machtkonkurrenz und Überlegenheitsdenken wirkten zusammen.",
    [["Imperialismus", "Ausdehnung von Herrschaft über fremde Gebiete."],
     ["Kolonie", "Von einer Macht beherrschtes und ausgebeutetes Gebiet."],
     ["Kongokonferenz", "Berliner Konferenz 1884/85 zur Aufteilung Afrikas."],
     ["Rassismus", "Ideologische Rechtfertigung kolonialer Herrschaft."],
     ["Rohstoffe", "Wirtschaftliches Hauptmotiv der Expansion."]]);

  I("hist-ww1",
    "Ein Attentat löste 1914 einen Krieg aus, den fast niemand in dieser Form erwartet hatte. Bündnisse, Rüstung und Prestigedenken machten aus einer regionalen Krise einen Weltkrieg.",
    "Ursachenbündel und Kriegsverlauf sind Standardstoff, oft als Quellenanalyse.",
    "Du brauchst Nationalismus und Imperialismus.",
    "Langfristige Spannungen machten den Krieg möglich, der Anlass war nur der Auslöser.",
    [["Bündnissystem", "Gegenseitige Beistandsverpflichtungen der Grossmächte."],
     ["Attentat von Sarajevo", "Auslösendes Ereignis vom Juni 1914."],
     ["Stellungskrieg", "Erstarrte Front mit Schützengräben."],
     ["Totaler Krieg", "Einbezug der gesamten Wirtschaft und Bevölkerung."],
     ["Waffenstillstand 1918", "Ende der Kampfhandlungen am 11. November."]]);

  I("hist-versailles-crisis",
    "Der Friedensvertrag von 1919 sollte Sicherheit schaffen, erzeugte aber neue Konflikte. Zehn Jahre später brach zusätzlich die Weltwirtschaft zusammen.",
    "Der Zusammenhang zwischen Versailles, Krise und dem Aufstieg der Diktaturen wird regelmässig geprüft.",
    "Du brauchst den Ersten Weltkrieg.",
    "Ein als ungerecht empfundener Frieden und eine Wirtschaftskrise schwächten die Demokratien.",
    [["Versailler Vertrag", "Friedensvertrag mit Deutschland von 1919."],
     ["Kriegsschuldartikel", "Zuweisung der alleinigen Schuld an Deutschland."],
     ["Völkerbund", "Erste weltweite Friedensorganisation."],
     ["Weltwirtschaftskrise", "Ab 1929, ausgelöst vom Börsencrash in New York."],
     ["Deflation", "Sinkende Preise bei gleichzeitig hoher Arbeitslosigkeit."]]);

  I("hist-dictatorships",
    "In mehreren europäischen Staaten ersetzten Diktaturen die Demokratie. Sie unterschieden sich in der Ideologie, glichen sich aber in den Mitteln: Terror, Propaganda und Einparteienherrschaft.",
    "Der Vergleich der Systeme ist eine klassische Prüfungsaufgabe.",
    "Du brauchst Ideologien und die Zwischenkriegszeit.",
    "Totalitäre Systeme wollen nicht nur Gehorsam, sondern den ganzen Menschen erfassen.",
    [["Faschismus", "Italienische Bewegung unter Mussolini, Führerprinzip und Gewalt."],
     ["Nationalsozialismus", "Deutsche Variante mit Rassenideologie und Antisemitismus."],
     ["Stalinismus", "Sowjetische Diktatur mit Terror und Planwirtschaft."],
     ["Totalitarismus", "Anspruch auf vollständige Kontrolle aller Lebensbereiche."],
     ["Propaganda", "Gelenkte Beeinflussung der öffentlichen Meinung."]]);

  I("hist-ww2-world",
    "Der Zweite Weltkrieg war von Beginn an auch ein Vernichtungskrieg. Der Holocaust war kein Nebeneffekt, sondern folgte aus der Ideologie des Regimes.",
    "Verlauf, Wendepunkte und Holocaust gehören zum verbindlichen Stoff.",
    "Du brauchst die Diktaturen der Zwischenkriegszeit.",
    "Ideologie, Eroberung und Völkermord waren im Nationalsozialismus untrennbar verbunden.",
    [["Blitzkrieg", "Schnelle Angriffsoperationen zu Kriegsbeginn."],
     ["Wendepunkte", "Stalingrad und die Landung in der Normandie."],
     ["Holocaust", "Systematischer Völkermord an den europäischen Jüdinnen und Juden."],
     ["Wannseekonferenz", "Organisatorische Abstimmung der Vernichtung, 1942."],
     ["Nürnberger Prozesse", "Juristische Aufarbeitung nach 1945."]]);

  I("hist-postwar-coldwar",
    "Nach 1945 standen sich zwei Sieger gegenüber, die nichts mehr verband als der besiegte Gegner. Aus dieser Konstellation entstand eine vierzig Jahre dauernde Systemkonkurrenz.",
    "Der Kalte Krieg strukturiert die gesamte Weltgeschichte nach 1945.",
    "Du brauchst den Zweiten Weltkrieg.",
    "Zwei Blöcke, zwei Gesellschaftsmodelle, offener Krieg nur an der Peripherie.",
    [["Bipolarität", "Weltordnung mit zwei Supermächten."],
     ["Eiserner Vorhang", "Trennlinie zwischen Ost und West."],
     ["Containment", "US-Strategie der Eindämmung des Kommunismus."],
     ["Stellvertreterkrieg", "Konflikt, der von Dritten ausgetragen wird."],
     ["Kubakrise", "Zuspitzung 1962, gefährlichster Moment des Kalten Kriegs."]]);

  I("hist-bandung-decolonisation",
    "Nach 1945 forderten die Kolonien ihre Unabhängigkeit. Die Ablösung verlief mal friedlich, mal in langen Kriegen, und die neuen Staaten blieben wirtschaftlich oft abhängig.",
    "Dekolonisierung und Blockfreiheit erklären viele heutige Nord-Süd-Fragen.",
    "Du brauchst Imperialismus und Kalten Krieg.",
    "Politische Unabhängigkeit bedeutete nicht automatisch wirtschaftliche Selbstbestimmung.",
    [["Dekolonisierung", "Ablösung der Kolonien von den Kolonialmächten."],
     ["Bandung-Konferenz", "Treffen 1955, Ausgangspunkt der Blockfreienbewegung."],
     ["Blockfreiheit", "Neutralität gegenüber beiden Supermächten."],
     ["Neokolonialismus", "Fortbestehende wirtschaftliche Abhängigkeit."],
     ["Dritte Welt", "Zeitgenössischer Sammelbegriff für die blockfreien Staaten."]]);

  I("hist-un-nato-europe",
    "Aus der Erfahrung zweier Weltkriege entstanden Organisationen, die Konflikte künftig verhindern sollten. Die europäische Integration begann bewusst mit Wirtschaft statt mit Politik.",
    "UNO, NATO und EU sind Grundwissen für Geschichte und für das Verständnis der Schweizer Aussenpolitik.",
    "Du brauchst Nachkriegsordnung und Kalten Krieg.",
    "Wirtschaftliche Verflechtung sollte Krieg unmöglich machen.",
    [["UNO", "1945 gegründete Weltorganisation, Schweiz seit 2002 Mitglied."],
     ["Sicherheitsrat", "UNO-Organ mit Vetorecht der fünf ständigen Mitglieder."],
     ["NATO", "Westliches Verteidigungsbündnis von 1949."],
     ["Montanunion", "Erster Integrationsschritt 1951 über Kohle und Stahl."],
     ["Binnenmarkt", "Freier Verkehr von Waren, Personen, Dienstleistungen und Kapital."]]);

  I("hist-china-1949",
    "China durchlief seit 1949 mehrere radikale Kurswechsel: von der maoistischen Umgestaltung über die Öffnung bis zum heutigen Staatskapitalismus unter Einparteienherrschaft.",
    "Chinas Aufstieg ist Gegenstand von Quellen- und Statistikaufgaben.",
    "Du brauchst Kalten Krieg und Grundbegriffe der Wirtschaft.",
    "Wirtschaftliche Öffnung ohne politische Öffnung ist das Kennzeichen des chinesischen Wegs.",
    [["Volksrepublik", "1949 unter Mao Zedong ausgerufen."],
     ["Grosser Sprung", "Industrialisierungskampagne mit Hungerkatastrophe."],
     ["Kulturrevolution", "Politische Säuberungskampagne ab 1966."],
     ["Reform und Öffnung", "Wirtschaftlicher Kurswechsel ab 1978."],
     ["Staatskapitalismus", "Marktwirtschaft unter staatlicher Steuerung."]]);

  I("hist-middle-east",
    "Im Nahostkonflikt beanspruchen zwei nationale Bewegungen dasselbe Gebiet. Die Wurzeln reichen in die Zeit vor 1948 zurück, und keine Seite kann ohne die andere gedacht werden.",
    "Der Konflikt verlangt saubere Chronologie und mehrperspektivisches Argumentieren, beides wird geprüft.",
    "Du brauchst Nationalismus, Imperialismus und Kalten Krieg.",
    "Zwei legitime nationale Ansprüche auf dasselbe Territorium treffen aufeinander.",
    [["Zionismus", "Bewegung für einen jüdischen Staat."],
     ["Balfour-Erklärung", "Britische Zusage von 1917."],
     ["Teilungsplan 1947", "UNO-Vorschlag zweier Staaten."],
     ["Nakba", "Palästinensische Bezeichnung für Flucht und Vertreibung 1948."],
     ["Zweistaatenlösung", "Konzept zweier nebeneinander bestehender Staaten."]]);

  /* ---------------- Geografie ---------------- */
  I("geo-earth-time",
    "Die Erde ist geschichtet wie eine Zwiebel, und ihre Geschichte umfasst rund 4,6 Milliarden Jahre. Gesteine sind dabei das Archiv, aus dem sich diese Geschichte ablesen lässt.",
    "Der Erdaufbau ist Voraussetzung für Plattentektonik, Vulkanismus und Erdbeben.",
    "Du brauchst keine Vorkenntnisse.",
    "Die Erde ist chemisch und physikalisch geschichtet, und diese Schichtung erklärt ihre Dynamik.",
    [["Erdkruste", "Äusserste, dünne Gesteinsschicht."],
     ["Erdmantel", "Dicke Schicht unter der Kruste, teilweise fliessfähig."],
     ["Lithosphäre", "Starre Aussenschale aus Kruste und oberstem Mantel."],
     ["Asthenosphäre", "Zähplastische Schicht, auf der die Platten gleiten."],
     ["Geologische Zeittafel", "Gliederung der Erdgeschichte in Zeitabschnitte."]]);

  I("geo-plate-tectonics",
    "Die Erdoberfläche besteht aus Platten, die sich mit wenigen Zentimetern pro Jahr bewegen. An ihren Rändern entstehen Gebirge, Vulkane und Erdbeben.",
    "Plattentektonik erklärt fast alle endogenen Prozesse und ist Kernstoff der Geografie.",
    "Du brauchst den Erdaufbau.",
    "Fast alle Erdbeben und Vulkane liegen an Plattengrenzen.",
    [["Plattengrenze", "Kontaktzone zweier Lithosphärenplatten."],
     ["Subduktion", "Abtauchen einer Platte unter eine andere."],
     ["Divergenz", "Auseinanderdriften, neue Kruste entsteht."],
     ["Konvergenz", "Zusammenstoss, Gebirge oder Tiefseerinne entsteht."],
     ["Hotspot", "Ortsfester Magmenaufstieg fern der Plattengrenzen."]]);

  I("geo-exogenic-rocks",
    "Was die Plattentektonik aufbaut, tragen Wasser, Eis, Wind und Schwerkraft wieder ab. Aus dem Abgetragenen entstehen neue Gesteine, der Kreislauf schliesst sich.",
    "Gesteinskreislauf und Naturgefahren sind häufige Karten- und Materialaufgaben.",
    "Du brauchst Plattentektonik.",
    "Endogene Kräfte bauen auf, exogene Kräfte tragen ab, zusammen formen sie die Landschaft.",
    [["Verwitterung", "Zersetzung von Gestein an Ort und Stelle."],
     ["Erosion", "Abtragung und Transport durch Wasser, Eis oder Wind."],
     ["Sedimentation", "Ablagerung des transportierten Materials."],
     ["Metamorphose", "Umwandlung von Gestein unter Druck und Hitze."],
     ["Gesteinskreislauf", "Kreislauf von magmatisch, sedimentär und metamorph."]]);

  I("geo-switzerland-geology",
    "Die Alpen entstanden, weil die afrikanische Platte gegen die europäische drückte. Jura, Mittelland und Alpen sind das sichtbare Ergebnis dieses Zusammenstosses.",
    "Schweizer Profile lesen und Grosslandschaften zuordnen sind typische Prüfungsaufgaben.",
    "Du brauchst Plattentektonik und Gesteinskunde.",
    "Die Schweiz ist ein Kollisionsgebirge mit klar unterscheidbaren Grosslandschaften.",
    [["Alpen", "Faltengebirge aus der Kollision zweier Platten."],
     ["Mittelland", "Becken zwischen Jura und Alpen, dicht besiedelt."],
     ["Jura", "Faltengebirge aus Kalkgestein im Nordwesten."],
     ["Decke", "Über weite Strecken überschobene Gesteinseinheit."],
     ["Molasse", "Abtragungsschutt der Alpen im Mittelland."]]);

  I("geo-weather-climate",
    "Wetter ist der Zustand der Atmosphäre jetzt, Klima ist der statistische Durchschnitt über Jahrzehnte. Die Verwechslung dieser beiden Begriffe ist der häufigste Fehler im Fach.",
    "Klimaelemente und Klimafaktoren sind Grundlage jeder Klimaanalyse.",
    "Du brauchst Grundwissen zu Temperatur und Luftdruck.",
    "Klimaelemente werden gemessen, Klimafaktoren erklären ihre Verteilung.",
    [["Wetter", "Momentaner Zustand der Atmosphäre."],
     ["Klima", "Statistisches Mittel über mindestens dreissig Jahre."],
     ["Klimaelement", "Messbare Grösse wie Temperatur oder Niederschlag."],
     ["Klimafaktor", "Ursache wie Breitenlage, Höhe, Meeresnähe oder Relief."],
     ["Passat", "Beständiger Wind der Tropen."]]);

  I("geo-climate-diagrams",
    "Ein Klimadiagramm fasst dreissig Jahre Wetter in einem einzigen Bild zusammen. Wer es lesen kann, bestimmt daraus Klimazone, Vegetation und Landwirtschaft.",
    "Die Auswertung eines Klimadiagramms ist eine fast sichere Prüfungsaufgabe.",
    "Du brauchst Klimaelemente und Klimafaktoren.",
    "Temperaturgang und Niederschlagsverteilung bestimmen gemeinsam die Klimazone.",
    [["Temperaturamplitude", "Differenz zwischen wärmstem und kältestem Monat."],
     ["Jahresniederschlag", "Summe aller Monatsniederschläge."],
     ["Aride Zeit", "Monat, in dem Verdunstung den Niederschlag übersteigt."],
     ["Humid", "Feucht, Niederschlag übersteigt die Verdunstung."],
     ["Klimazone", "Grossräumige Gliederung nach Temperatur und Niederschlag."]]);

  I("geo-climate-change",
    "Das Klima hat sich immer verändert. Neu ist die Geschwindigkeit und die Ursache: der vom Menschen verstärkte Treibhauseffekt.",
    "Klimawandel wird als Materialaufgabe mit Grafiken und Argumentation geprüft.",
    "Du brauchst Klimaelemente und den Kohlenstoffkreislauf.",
    "Natürliche Schwankungen und menschgemachte Erwärmung müssen unterschieden werden.",
    [["Treibhauseffekt", "Rückhalt von Wärmestrahlung durch Spurengase."],
     ["Anthropogen", "Vom Menschen verursacht."],
     ["Rückkopplung", "Selbstverstärkender oder dämpfender Effekt."],
     ["Mitigation", "Vermeidung von Emissionen."],
     ["Adaptation", "Anpassung an bereits eintretende Folgen."]]);

  I("geo-economic-sectors-agriculture",
    "Jede Volkswirtschaft lässt sich in drei Sektoren gliedern. Wie sich deren Anteile verschieben, verrät den Entwicklungsstand eines Landes.",
    "Sektorenmodelle und Agrarsysteme sind Standardstoff mit Diagrammauswertung.",
    "Du brauchst Grundbegriffe der Wirtschaft.",
    "Mit steigender Entwicklung verschiebt sich Beschäftigung vom ersten in den dritten Sektor.",
    [["Primärsektor", "Rohstoffgewinnung und Landwirtschaft."],
     ["Sekundärsektor", "Verarbeitung und Industrie."],
     ["Tertiärsektor", "Dienstleistungen."],
     ["Subsistenzwirtschaft", "Produktion für den Eigenbedarf."],
     ["Intensivierung", "Höherer Ertrag pro Fläche durch mehr Einsatzmittel."]]);

  I("geo-energy-sustainability",
    "Energie steht am Anfang fast jeder wirtschaftlichen Tätigkeit. Woher sie kommt, entscheidet über Emissionen, Abhängigkeiten und Preise.",
    "Energiemix vergleichen und Nachhaltigkeit beurteilen sind wiederkehrende Aufgaben.",
    "Du brauchst Klimawandel und Wirtschaftssektoren.",
    "Nachhaltigkeit verlangt, ökologische, ökonomische und soziale Folgen gleichzeitig zu betrachten.",
    [["Energiemix", "Zusammensetzung der Energieträger eines Landes."],
     ["Erneuerbar", "Quelle, die sich in menschlichen Zeiträumen erneuert."],
     ["Primärenergie", "Energie vor jeder Umwandlung."],
     ["Nachhaltigkeit", "Nutzung, die künftige Möglichkeiten nicht schmälert."],
     ["Energiestrategie 2050", "Schweizer Rahmen für den Umbau des Energiesystems."]]);

  I("geo-spatial-transport",
    "In einem dicht besiedelten Land ist Boden knapp. Raumplanung entscheidet, wo gebaut, geschützt und wie verbunden wird.",
    "Schweizer Raumordnung und Verkehrspolitik sind Prüfungsstoff mit Kartenbezug.",
    "Du brauchst die Grosslandschaften der Schweiz.",
    "Siedlung und Verkehr bedingen sich gegenseitig und müssen gemeinsam geplant werden.",
    [["Raumplanung", "Steuerung der Bodennutzung durch Bund, Kantone und Gemeinden."],
     ["Zersiedelung", "Ungesteuerte Ausdehnung der Siedlungsfläche."],
     ["Verdichtung", "Bauen nach innen statt in die Fläche."],
     ["Modalsplit", "Verteilung des Verkehrs auf die Verkehrsmittel."],
     ["Agglomeration", "Kernstadt mit funktional verbundenem Umland."]]);

  I("geo-global-development",
    "Die Welt ist wirtschaftlich eng verflochten, aber ungleich. Entwicklung lässt sich nicht am Einkommen allein messen, sondern an Bildung, Gesundheit und Teilhabe.",
    "Indikatoren vergleichen und Globalisierung beurteilen sind typische Materialaufgaben.",
    "Du brauchst Wirtschaftssektoren und Kolonialgeschichte.",
    "Globalisierung schafft Wohlstand und Ungleichheit zugleich.",
    [["BIP pro Kopf", "Wirtschaftsleistung je Einwohner."],
     ["HDI", "Index aus Lebenserwartung, Bildung und Einkommen."],
     ["Globalisierung", "Weltweite Verflechtung von Wirtschaft und Kommunikation."],
     ["Wertschöpfungskette", "Abfolge der Produktionsschritte über Länder hinweg."],
     ["Disparität", "Räumliche Ungleichheit der Lebensbedingungen."]]);

  I("geo-demography",
    "Bevölkerungen wachsen und schrumpfen nach nachvollziehbaren Mustern. Das Modell des demografischen Übergangs beschreibt diesen Verlauf in fünf Phasen.",
    "Bevölkerungspyramiden lesen und Übergangsphasen zuordnen sind fast sichere Prüfungsaufgaben.",
    "Du brauchst Prozentrechnen und Diagrammlesen.",
    "Sinkende Sterberate vor sinkender Geburtenrate erzeugt das stärkste Wachstum.",
    [["Geburtenrate", "Geburten je tausend Einwohner und Jahr."],
     ["Sterberate", "Sterbefälle je tausend Einwohner und Jahr."],
     ["Demografischer Übergang", "Modell des Wandels von hohen zu tiefen Raten."],
     ["Bevölkerungspyramide", "Darstellung der Alters- und Geschlechterstruktur."],
     ["Migration", "Dauerhafter Wechsel des Wohnorts über Grenzen hinweg."]]);

  I("geo-urban",
    "Städte wachsen, ihre Ränder auch, und manchmal kehren die Menschen ins Zentrum zurück. Diese drei Bewegungen prägen jede moderne Stadtregion.",
    "Stadtmodelle und Stadtentwicklungsphasen werden mit Karten und Statistiken geprüft.",
    "Du brauchst Bevölkerungsentwicklung und Raumplanung.",
    "Urbanisierung, Suburbanisierung und Reurbanisierung folgen aufeinander, überlagern sich aber.",
    [["Urbanisierung", "Zunahme des Anteils der Stadtbevölkerung."],
     ["Suburbanisierung", "Abwanderung ins Umland bei Bindung an die Kernstadt."],
     ["Reurbanisierung", "Rückkehr in die Innenstadt."],
     ["Gentrifizierung", "Aufwertung eines Quartiers mit Verdrängung."],
     ["Segregation", "Räumliche Trennung von Bevölkerungsgruppen."]]);
})();

/* Einführungsebene, Teil D: Deutsch und Englisch.
   Ausserdem: die vier Kapitel zur Regionalgeografie werden auf die offiziell
   festgelegte Region der Wintersession 2027 umgestellt, nämlich USA. */
(function () {
  "use strict";
  var M = window.MNEMIKA;
  const { mc, tf, num } = M;
  function I(id, lead, why, prereq, core, terms) {
    var c = M.chapter(id);
    if (!c) return;
    c.intro = { lead: lead, why: why, prereq: prereq, core: core, terms: terms || [] };
  }

  /* ---------------- Deutsch ---------------- */
  I("de-written-method",
    "Die schriftliche Deutschprüfung bewertet nicht, wie viel du weisst, sondern ob du eine anspruchsvolle Frage klar, logisch und sprachlich sicher bearbeitest. Der häufigste Punkteverlust entsteht, bevor der erste Satz geschrieben ist: durch eine falsch verstandene Aufgabe.",
    "Wer die Aufgabe präzise analysiert, schreibt am Ende einen kürzeren und besseren Text als jemand, der sofort losschreibt.",
    "Du brauchst sichere Rechtschreibung und Grundkenntnisse im Aufsatzbau.",
    "Zuerst die Aufgabe entschlüsseln, dann die These formulieren, erst dann schreiben.",
    [["Operator", "Das Aufgabenverb, etwa erörtern, analysieren oder beurteilen."],
     ["These", "Die zentrale Antwort auf die Aufgabe in einem Satz."],
     ["Adressat", "Für wen der Text geschrieben ist, bestimmt den Ton."],
     ["Textsorte", "Verlangte Form wie Erörterung, Kommentar oder Rede."],
     ["Gliederung", "Geplante Reihenfolge der Argumente vor dem Schreiben."]]);

  I("de-argumentation",
    "Ein Argument ist mehr als eine Meinung. Es besteht aus einer Behauptung, einer Begründung und einem Beleg. Fehlt eines dieser drei Teile, bleibt es eine Behauptung.",
    "Argumentation ist das Bewertungskriterium mit dem grössten Gewicht in der schriftlichen Prüfung.",
    "Du brauchst die Aufgabenanalyse aus dem vorherigen Kapitel.",
    "Behauptung, Begründung, Beleg und Rückbindung an die Frage bilden ein vollständiges Argument.",
    [["Behauptung", "Die aufgestellte Aussage."],
     ["Begründung", "Warum die Behauptung gelten soll."],
     ["Beleg", "Beispiel, Zahl oder Textstelle als Stütze."],
     ["Gegenargument", "Einwand, der ernsthaft geprüft wird."],
     ["Abwägung", "Begründete Gewichtung von Pro und Kontra."]]);

  I("de-text-types",
    "Jede Textsorte hat eine eigene Erwartung an Aufbau, Ton und Nähe zum Publikum. Ein Kommentar darf zuspitzen, eine Erörterung muss abwägen, eine Rede muss gesprochen funktionieren.",
    "Die Wahl der falschen Form kostet Punkte, auch wenn der Inhalt stimmt.",
    "Du brauchst Argumentation und Aufgabenanalyse.",
    "Die Textsorte bestimmt Aufbau, Ton und den erlaubten Grad an Subjektivität.",
    [["Erörterung", "Abwägende Untersuchung einer strittigen Frage."],
     ["Essay", "Persönlich gefärbte, gedanklich bewegliche Erkundung."],
     ["Kommentar", "Pointierte Stellungnahme mit klarer Haltung."],
     ["Rede", "Für das Hören gebauter Text mit direkter Ansprache."],
     ["Register", "Sprachliche Ebene, von förmlich bis umgangssprachlich."]]);

  I("de-language-editing",
    "Ein guter Text entsteht beim Überarbeiten, nicht beim Schreiben. Die letzten fünfzehn Minuten der Prüfung sind deshalb die wertvollsten.",
    "Sprachrichtigkeit ist ein eigenes Bewertungskriterium und lässt sich gezielt trainieren.",
    "Du brauchst Grundkenntnisse in Grammatik und Zeichensetzung.",
    "Erst Inhalt und Aufbau prüfen, dann Sprache, dann Rechtschreibung.",
    [["Kohärenz", "Inhaltlicher Zusammenhang zwischen den Sätzen."],
     ["Kohäsion", "Sprachliche Verknüpfung durch Konnektoren und Bezüge."],
     ["Nominalstil", "Substantivlastige Schreibweise, oft schwer lesbar."],
     ["Redundanz", "Überflüssige Wiederholung."],
     ["Konnektor", "Verbindungswort wie deshalb, obwohl, hingegen."]]);

  I("de-oral-method",
    "In der mündlichen Prüfung bekommst du einen Textausschnitt und sollst ihn einordnen, deuten und begründen. Nicht die Nacherzählung zählt, sondern die Deutung mit Textbeleg.",
    "Die mündliche Prüfung ist benotet wie die schriftliche und lässt sich gut vorbereiten.",
    "Du brauchst Grundbegriffe der Literaturanalyse.",
    "Befund, Beleg, Deutung und Einordnung ins Gesamtwerk bilden die Antwortstruktur.",
    [["Erzählperspektive", "Aus wessen Sicht erzählt wird."],
     ["Figurenkonstellation", "Beziehungsgefüge der Figuren."],
     ["Motiv", "Wiederkehrendes inhaltliches Element."],
     ["Symbol", "Konkretes Zeichen mit übertragener Bedeutung."],
     ["Textbeleg", "Kurzer Verweis auf die Stelle, die die Deutung stützt."]]);

  I("de-buehler",
    "Mariann Bühlers Roman erzählt in verknüpften Episoden aus einem Schweizer Dorf. Er ist der Gegenwartstext der Pflichtliste und dürfte dir am wenigsten vertraut sein.",
    "Der Text ist für die Wintersession 2027 verbindlich vorgegeben und kann in der mündlichen Prüfung vorgelegt werden.",
    "Du brauchst die Analysemethode aus dem vorherigen Kapitel.",
    "Verknüpfte Einzelschicksale ergeben ein Bild ländlicher Enge, Sprachlosigkeit und Veränderung.",
    [["Episodenstruktur", "Erzählung in verbundenen Einzelszenen."],
     ["Perspektivwechsel", "Wechsel der Figur, aus deren Sicht erzählt wird."],
     ["Dorfgemeinschaft", "Sozialer Raum mit starker Kontrolle."],
     ["Schweigen", "Zentrales Motiv des nicht Ausgesprochenen."]]);

  I("de-duerrenmatt",
    "Eine reiche Frau kehrt in ihr verarmtes Heimatdorf zurück und bietet eine Milliarde für ein Menschenleben. Die Bürger lehnen empört ab und geben nach und nach doch nach.",
    "Dürrenmatt ist verbindlich vorgegeben und einer der am häufigsten geprüften Schweizer Texte.",
    "Du brauchst Grundbegriffe des Dramas.",
    "Das Stück zeigt, wie sich Moral unter wirtschaftlichem Druck schrittweise verschiebt.",
    [["Tragische Komödie", "Dürrenmatts eigene Gattungsbezeichnung."],
     ["Groteske", "Verzerrende Übertreibung mit ernstem Kern."],
     ["Kollektivschuld", "Verantwortung einer ganzen Gemeinschaft."],
     ["Ill", "Der Protagonist, Opfer und Mitschuldiger zugleich."],
     ["Claire Zachanassian", "Die Rückkehrerin, die das Angebot macht."]]);

  I("de-storm",
    "Eine Rahmenerzählung berichtet vom Deichgrafen Hauke Haien, der mit technischem Verstand gegen das Meer und gegen den Aberglauben seiner Nachbarn ankämpft.",
    "Storm ist verbindlich vorgegeben und prüft besonders die Rahmenstruktur und die Deutung des Schlusses.",
    "Du brauchst Erzählperspektive und Motivanalyse.",
    "Fortschritt und Aberglaube stehen einander gegenüber, und der Erzählrahmen lässt die Deutung offen.",
    [["Rahmenerzählung", "Erzählung, die eine andere Erzählung einschliesst."],
     ["Novelle", "Kürzere Prosaform mit einer unerhörten Begebenheit."],
     ["Deichgraf", "Amtsträger, verantwortlich für den Deichbau."],
     ["Aberglaube", "Gegenkraft zur rationalen Weltsicht Haukes."],
     ["Schimmel", "Ambivalentes Symbol zwischen Realität und Spuk."]]);

  I("de-burkart",
    "Die zehn vorgegebenen Gedichte von Erika Burkart sind kurz, aber dicht. Sie kreisen um Natur, Vergänglichkeit, Erinnerung und Schweigen.",
    "Für die mündliche Prüfung sind alle zehn Gedichte der Auswahl vorzubereiten. Die Texte selbst sind urheberrechtlich geschützt und in Stoffknacker nicht abgedruckt.",
    "Du brauchst Grundbegriffe der Lyrikanalyse.",
    "Bei Lyrik führt der Weg über die Form zur Deutung, nicht umgekehrt.",
    [["Lyrisches Ich", "Die sprechende Instanz im Gedicht."],
     ["Enjambement", "Zeilensprung, der Satz läuft über den Versrand."],
     ["Metapher", "Bildhafte Übertragung ohne Vergleichswort."],
     ["Naturbild", "Bei Burkart oft Träger existenzieller Bedeutung."],
     ["Pflichtauswahl", "Die zehn Titel: Die Moorschenke, Weiss, Hochland, Weg, Am Fenster abends, Die Stille, Ballmoos, November-Allee, Auf einen Nussbaum, Steckbrief."]]);

  /* ---------------- Englisch ---------------- */
  I("en-vocabulary-grammar",
    "Für die Prüfung brauchst du rund 3000 bis 4000 aktiv verfügbare Wörter und eine sichere Grundgrammatik. Beides lässt sich mit verteiltem Üben planbar aufbauen.",
    "Wortschatz und Grammatik sind die Grundlage aller vier Prüfungsteile.",
    "Du brauchst Schulenglisch auf Berufsmaturitätsniveau.",
    "Wortschatz wächst durch Wiederholung über Wochen, nicht durch Lernen am Vorabend.",
    [["Active vocabulary", "Wörter, die du selbst verwenden kannst."],
     ["Collocation", "Feste Wortverbindung wie make a decision."],
     ["Tense", "Zeitform des Verbs."],
     ["Conditional", "Bedingungssatz mit if."],
     ["Register", "Sprachliche Ebene, formell oder informell."]]);

  I("en-reading",
    "Im Leseteil bekommst du einen Text von 600 bis 800 Wörtern. Gefragt ist nicht, ob du jedes Wort verstehst, sondern ob du Aussagen im Text belegen kannst.",
    "Der Leseteil macht einen grossen Anteil der schriftlichen Punkte aus.",
    "Du brauchst Grundwortschatz und Textsortenwissen.",
    "Jede Antwort braucht eine Stelle im Text, auf die sie sich stützt.",
    [["Skimming", "Schnelles Lesen für den Gesamteindruck."],
     ["Scanning", "Gezieltes Suchen nach einer Information."],
     ["Inference", "Schluss auf nicht direkt Gesagtes."],
     ["Evidence", "Textstelle, die eine Aussage stützt."],
     ["Paraphrase", "Wiedergabe in eigenen Worten."]]);

  I("en-analysis",
    "Analyse heisst, nicht nur zu sagen was im Text steht, sondern wie er wirkt und warum. Der Unterschied zwischen Nacherzählen und Analysieren entscheidet über die Note.",
    "Interpretationsaufgaben verlangen ausdrücklich Belege statt Zusammenfassung.",
    "Du brauchst Leseverständnis und Grundbegriffe der Textanalyse.",
    "Behauptung, Textbeleg und Erklärung der Wirkung gehören zusammen.",
    [["Tone", "Haltung des Textes gegenüber seinem Gegenstand."],
     ["Imagery", "Sprachliche Bilder und Sinneseindrücke."],
     ["Narrator", "Erzählinstanz, verlässlich oder unzuverlässig."],
     ["Structure", "Aufbau und Reihenfolge der Textteile."],
     ["Purpose", "Absicht des Textes."]]);

  I("en-writing",
    "Im Schreibteil produzierst du 200 bis 300 Wörter zum Thema des Ausgangstextes. Kürze ist hier Bedingung, nicht Nachlässigkeit: jeder Absatz braucht eine Aufgabe.",
    "Der freie Schreibteil ist der Ort, an dem sich Sprachbeherrschung am deutlichsten zeigt.",
    "Du brauchst Wortschatz, Grammatik und Argumentationsaufbau.",
    "Plane fünf Minuten, schreibe zwanzig, überarbeite fünf.",
    [["Thesis statement", "Der Kernsatz, der die Position festlegt."],
     ["Topic sentence", "Erster Satz eines Absatzes, nennt dessen Thema."],
     ["Linking words", "Verbindungswörter wie however, therefore, although."],
     ["Counterargument", "Gegenposition, die ernst genommen wird."],
     ["Word count", "Vorgegebene Länge, wird bewertet."]]);

  I("en-speaking",
    "Die mündliche Prüfung ist ein Gespräch, keine Rede. Du sollst antworten, begründen, einschränken und auf Rückfragen reagieren, nicht einen auswendig gelernten Vortrag halten.",
    "Sprachfluss und Interaktion werden getrennt bewertet.",
    "Du brauchst aktiven Wortschatz und Grundgrammatik.",
    "Antwort, Begründung, Beispiel und Einschränkung sind ein tragfähiges Muster für jede Antwort.",
    [["Fluency", "Sprachfluss, nicht Geschwindigkeit."],
     ["Interaction", "Eingehen auf das Gegenüber."],
     ["Hedging", "Abschwächen, etwa mit it seems oder perhaps."],
     ["Repair", "Umformulieren, wenn ein Wort fehlt."],
     ["Follow-up question", "Nachfrage der Prüfenden."]]);

  I("en-literature",
    "Für die mündliche Prüfung wählst du drei ungekürzte Werke von drei verschiedenen Autorinnen oder Autoren aus der verbindlichen Liste. Vorbereitet wird nicht auswendig, sondern strukturiert.",
    "Die Werkauswahl ist Pflicht, und Vergleiche zwischen den Werken werden ausdrücklich verlangt.",
    "Du brauchst Textanalyse auf Englisch.",
    "Eine Seite pro Werk mit Handlung, Figuren, Themen, Form und fünf Schlüsselstellen genügt für fast jede Frage.",
    [["Plot", "Handlungsverlauf in Grundzügen."],
     ["Theme", "Als Aussage formuliertes Thema, nicht ein einzelnes Wort."],
     ["Characterisation", "Wie Figuren gestaltet und entwickelt werden."],
     ["Comparison", "Vergleich zweier Werke unter einem gemeinsamen Kriterium."],
     ["Kontext", "Entstehungszeit und historischer Hintergrund."]]);

  I("en-exam-strategy",
    "Die schriftliche Prüfung dauert drei Stunden und besteht aus mehreren Teilen. Wer sich an einer schwierigen Aufgabe festbeisst, verliert Punkte, die anderswo leicht zu holen wären.",
    "Zeiteinteilung entscheidet bei gleichem Wissensstand über eine ganze Note.",
    "Du brauchst alle vorangehenden Englischkapitel.",
    "Erst alle sicheren Punkte holen, dann die schwierigen Aufgaben, am Schluss korrigieren.",
    [["Time budget", "Vorab festgelegte Minuten je Prüfungsteil."],
     ["Task verb", "Aufgabenverb, bestimmt die verlangte Leistung."],
     ["Editing block", "Reservierte Zeit am Schluss für Korrekturen."],
     ["Simulation", "Vollständiger Probelauf unter Prüfungsbedingungen."]]);

  /* ------------- Regionalgeografie auf USA umstellen -------------
     Offiziell festgelegt: Winter 2027 USA. Die vier bisherigen
     Japan-Kapitel werden hier inhaltlich ersetzt.                    */
  function replace(id, patch) {
    var c = M.chapter(id);
    if (!c) return;
    c.keepLegacyQuestions = false;   // Altfragen handeln von Japan und bleiben draussen
    Object.keys(patch).forEach((k) => { c[k] = patch[k]; });
  }

  replace("geo-usa-physical", {
    title: "USA: Grosslandschaften, Klima und Naturgefahren",
    unit: "Regionalgeografie USA",
    hook: "Die USA reichen von der Arktis bis in die Subtropen und von der Atlantikküste bis in den Pazifik. Fast jede Klimazone der Erde kommt im Land vor, und die grossen Landschaften liegen in Nord-Süd-Streifen nebeneinander.",
    essentials: [
      "Von West nach Ost: Pazifikküste, Kaskaden und Sierra Nevada, Great Basin, Rocky Mountains, Great Plains, Zentrales Tiefland, Appalachen, Küstenebene.",
      "Die Gebirge verlaufen nord-südlich. Deshalb können polare und tropische Luftmassen ungehindert aufeinandertreffen.",
      "Genau das erzeugt die Tornado Alley im mittleren Westen und heftige Kaltlufteinbrüche bis nach Texas.",
      "Der Westen ist überwiegend arid, der Osten humid. Die 100. Längengrad-Linie gilt als grobe Trockengrenze.",
      "Wichtigste Naturgefahren: Hurrikane im Südosten, Tornados im Mittleren Westen, Erdbeben und Waldbrände im Westen, Überschwemmungen am Mississippi.",
    ],
    mistake: "Die USA werden oft als ein einziger Klimaraum behandelt. Zwischen Seattle, Phoenix, Miami und Fairbanks liegen jedoch völlig verschiedene Klimatypen.",
    mnemonic: "Gebirge nord-süd, Luftmassen frei, Tornados die Folge.",
    questions: [
      mc("geo-usa-phys-1", "Warum treten in den USA so häufig Tornados auf?",
        ["Weil die Gebirge west-östlich verlaufen", "Weil die nord-südlich verlaufenden Gebirge den Zusammenstoss polarer und tropischer Luftmassen zulassen",
         "Weil das Land überwiegend flach ist", "Weil der Golfstrom warmes Wasser bringt"], 1,
        "Rocky Mountains und Appalachen verlaufen nord-südlich. Kalte Luft aus Kanada und feuchtwarme Luft vom Golf treffen ungebremst aufeinander.", { ref: "Essenz-Punkt 2 und 3" }),
      mc("geo-usa-phys-2", "Welches Gebirge trennt die Great Plains vom Great Basin?",
        ["Appalachen", "Sierra Nevada", "Rocky Mountains", "Kaskaden"], 2,
        "Die Rocky Mountains bilden die kontinentale Wasserscheide zwischen dem Beckenland im Westen und den Great Plains im Osten.", { ref: "Essenz-Punkt 1" }),
      tf("geo-usa-phys-3", "Der Westen der USA ist überwiegend trockener als der Osten.", true,
        "Westlich des 100. Längengrades reicht der Niederschlag meist nicht mehr für Regenfeldbau, deshalb dominiert dort Bewässerung oder Weidewirtschaft.", { ref: "Essenz-Punkt 4" }),
      mc("geo-usa-phys-4", "Welche Naturgefahr ist für die Golfküste typisch?",
        ["Tornados", "Hurrikane", "Erdbeben", "Lawinen"], 1,
        "Hurrikane entstehen über dem warmen Atlantik und der Karibik und treffen zwischen Juni und November auf die Golf- und Südostküste.", { ref: "Essenz-Punkt 5" }),
      mc("geo-usa-phys-5", "Wodurch entstehen die Erdbeben in Kalifornien?",
        ["Subduktion unter den Anden", "Der San-Andreas-Graben als Transformstörung", "Ein Hotspot unter Yellowstone", "Vulkanismus der Appalachen"], 1,
        "An der San-Andreas-Verwerfung gleiten die pazifische und die nordamerikanische Platte aneinander vorbei. Verhaken sie sich, entlädt sich die Spannung als Erdbeben.", { ref: "Essenz-Punkt 5", d: 3 }),
    ],
  });
  I("geo-usa-physical",
    "Die USA sind der viertgrösste Staat der Erde. Ihre Landschaften ordnen sich nicht von Nord nach Süd, sondern in breiten Streifen von West nach Ost, und genau diese Anordnung erklärt das Wetter.",
    "Regionalgeografie ist ein eigener Prüfungsteil. Für die Wintersession 2027 ist USA offiziell festgelegt.",
    "Du brauchst Plattentektonik, Klimafaktoren und das Lesen von Klimadiagrammen.",
    "Die nord-südlich verlaufenden Gebirge lassen polare und tropische Luftmassen ungebremst aufeinandertreffen.",
    [["Great Plains", "Weite Ebene östlich der Rocky Mountains."],
     ["Great Basin", "Abflussloses Beckenland zwischen Sierra Nevada und Rockies."],
     ["Tornado Alley", "Zone häufiger Tornados im mittleren Westen."],
     ["San-Andreas-Graben", "Transformstörung an der kalifornischen Küste."],
     ["100. Längengrad", "Grobe Grenze zwischen feuchtem Osten und trockenem Westen."]]);

  replace("geo-usa-population", {
    title: "USA: Bevölkerung, Migration und Städte",
    unit: "Regionalgeografie USA",
    hook: "Die USA sind ein Einwanderungsland und wachsen weiter, während viele Industriestaaten schrumpfen. Das Wachstum verteilt sich aber sehr ungleich über das Land.",
    essentials: [
      "Rund 335 Millionen Einwohner. Das Wachstum stammt zu einem grossen Teil aus Migration, nicht aus einem Geburtenüberschuss.",
      "Die Bevölkerung verschiebt sich seit Jahrzehnten vom Frostbelt im Nordosten in den Sunbelt im Süden und Südwesten.",
      "Die grössten Ballungsräume sind New York, Los Angeles und Chicago. Am schnellsten wachsen Texas, Florida und Arizona.",
      "Suburbanisierung prägt das Siedlungsbild: niedrige Dichte, Autoabhängigkeit, ausgedehnte Vorstädte.",
      "Segregation nach Einkommen und Herkunft ist in vielen Städten räumlich deutlich sichtbar.",
    ],
    mistake: "Bevölkerungswachstum wird mit hoher Geburtenrate gleichgesetzt. In den USA ist die Geburtenrate tief, das Wachstum stammt überwiegend aus Zuwanderung.",
    mnemonic: "Vom Frostbelt in den Sunbelt, vom Zentrum in die Vorstadt.",
    questions: [
      mc("geo-usa-pop-1", "Was beschreibt die Verschiebung vom Frostbelt in den Sunbelt?",
        ["Wanderung vom Süden in den Nordosten", "Wanderung vom industriellen Nordosten in den Süden und Südwesten",
         "Wanderung vom Land in die Stadt", "Rückwanderung nach Europa"], 1,
        "Seit den 1970er-Jahren verlieren die alten Industrieregionen im Nordosten Bevölkerung an Staaten wie Texas, Arizona und Florida.", { ref: "Essenz-Punkt 2" }),
      tf("geo-usa-pop-2", "Das Bevölkerungswachstum der USA beruht vor allem auf einer hohen Geburtenrate.", false,
        "Die Geburtenrate liegt unter dem Bestandserhaltungsniveau. Den grössten Beitrag zum Wachstum leistet die Zuwanderung.", { ref: "Essenz-Punkt 1" }),
      mc("geo-usa-pop-3", "Was kennzeichnet die US-amerikanische Suburbanisierung?",
        ["Hohe Dichte und kurze Wege", "Flächenhafte Vorstädte mit tiefer Dichte und hoher Autoabhängigkeit",
         "Rückkehr in die Innenstädte", "Wachstum ausschliesslich in Kernstädten"], 1,
        "Einfamilienhausgebiete mit tiefer Dichte erzwingen lange Wege und machen das Auto zum Hauptverkehrsmittel.", { ref: "Essenz-Punkt 4" }),
      mc("geo-usa-pop-4", "Welcher Ballungsraum ist der grösste der USA?",
        ["Los Angeles", "Chicago", "New York", "Houston"], 2,
        "Die Metropolregion New York ist mit rund zwanzig Millionen Menschen der grösste Ballungsraum des Landes.", { ref: "Essenz-Punkt 3" }),
    ],
  });
  I("geo-usa-population",
    "Wo Menschen in den USA leben, hat sich im letzten halben Jahrhundert stark verschoben. Die alten Industriestädte verlieren, der Süden gewinnt, und fast überall wächst das Umland schneller als der Kern.",
    "Bevölkerungspyramiden, Wanderungssalden und Stadtmodelle der USA sind typische Materialaufgaben.",
    "Du brauchst den demografischen Übergang und die Stadtentwicklungsphasen.",
    "Migration, nicht Geburtenüberschuss, trägt das Wachstum, und sie verteilt sich räumlich sehr ungleich.",
    [["Sunbelt", "Wachstumsregion im Süden und Südwesten."],
     ["Frostbelt", "Ältere Industrieregion im Nordosten, auch Rustbelt."],
     ["Suburbanisierung", "Ausdehnung ins Umland bei tiefer Dichte."],
     ["Segregation", "Räumliche Trennung nach Einkommen oder Herkunft."],
     ["Metropolitan Area", "Statistische Einheit aus Kernstadt und Verflechtungsraum."]]);

  replace("geo-usa-economy", {
    title: "USA: Wirtschaft, Landwirtschaft und Energie",
    unit: "Regionalgeografie USA",
    hook: "Die USA sind die grösste Volkswirtschaft der Erde, aber ihre Stärke liegt längst nicht mehr in der Industrie. Dienstleistungen und Technologie tragen den grössten Teil der Wertschöpfung.",
    essentials: [
      "Rund vier Fünftel der Beschäftigten arbeiten im Dienstleistungssektor, die Landwirtschaft beschäftigt nur etwa ein Prozent.",
      "Die Landwirtschaft ist hochmechanisiert und exportorientiert, mit Belts wie Corn Belt, Wheat Belt und der Bewässerungslandwirtschaft Kaliforniens.",
      "Der Rustbelt verlor seit den 1970er-Jahren Schwerindustrie, während Technologiezentren wie das Silicon Valley entstanden.",
      "Durch Fracking wurden die USA zum grössten Öl- und Gasproduzenten der Welt.",
      "Der Energieverbrauch pro Kopf ist einer der höchsten weltweit, der Anteil erneuerbarer Energien steigt, bleibt aber unter jenem vieler europäischer Staaten.",
    ],
    mistake: "Der Corn Belt wird mit kleinbäuerlicher Landwirtschaft verwechselt. Tatsächlich handelt es sich um hochmechanisierte Grossbetriebe mit starker Exportausrichtung.",
    mnemonic: "Wenige Bauern, riesige Flächen, weltweite Märkte.",
    questions: [
      mc("geo-usa-eco-1", "Welcher Sektor beschäftigt in den USA die meisten Menschen?",
        ["Primärsektor", "Sekundärsektor", "Tertiärsektor", "Alle etwa gleich viele"], 2,
        "Rund achtzig Prozent der Beschäftigten arbeiten im Dienstleistungssektor, ein typisches Merkmal hoch entwickelter Volkswirtschaften.", { ref: "Essenz-Punkt 1" }),
      mc("geo-usa-eco-2", "Was bezeichnet der Begriff Rustbelt?",
        ["Die Bewässerungsgebiete Kaliforniens", "Die alte Schwerindustrieregion um die Grossen Seen",
         "Die Technologiezentren an der Westküste", "Die Getreideanbaugebiete der Great Plains"], 1,
        "Rustbelt meint die Region zwischen den Grossen Seen und dem Nordosten, deren Stahl- und Autoindustrie seit den 1970er-Jahren stark schrumpfte.", { ref: "Essenz-Punkt 3" }),
      tf("geo-usa-eco-3", "Die USA gehören zu den grössten Öl- und Gasproduzenten der Welt.", true,
        "Durch Fracking stieg die Förderung seit etwa 2010 stark an. Die USA wurden dadurch vom grossen Importeur zum führenden Produzenten.", { ref: "Essenz-Punkt 4" }),
      mc("geo-usa-eco-4", "Warum ist die kalifornische Landwirtschaft auf Bewässerung angewiesen?",
        ["Weil die Böden zu nährstoffarm sind", "Weil das Klima sommertrocken ist",
         "Weil die Flächen zu klein sind", "Weil dort nur Weidewirtschaft möglich ist"], 1,
        "Kalifornien hat ein mediterranes Klima mit trockenen Sommern. Genau in der Wachstumszeit fehlt Niederschlag, deshalb wird bewässert.", { ref: "Essenz-Punkt 2", d: 3 }),
    ],
  });
  I("geo-usa-economy",
    "Die amerikanische Wirtschaft hat sich in fünfzig Jahren umgebaut: weg von Stahl und Autos, hin zu Software, Finanzdienstleistungen und Energie. Die Landkarte der Arbeitsplätze sieht heute völlig anders aus.",
    "Sektorenvergleiche, Agrarbelts und Energiefragen der USA sind prüfungsrelevant und lassen sich gut mit Statistiken belegen.",
    "Du brauchst Wirtschaftssektoren, Agrarsysteme und Energiegrundlagen.",
    "Strukturwandel heisst nicht Niedergang, sondern Verlagerung von Wertschöpfung und Standorten.",
    [["Corn Belt", "Maisgürtel im mittleren Westen."],
     ["Rustbelt", "Altindustrieregion um die Grossen Seen."],
     ["Silicon Valley", "Technologiecluster südlich von San Francisco."],
     ["Fracking", "Fördertechnik für Öl und Gas aus dichtem Gestein."],
     ["Agrobusiness", "Industriell organisierte Landwirtschaft."]]);

  replace("geo-usa-global", {
    title: "USA: globale Rolle und Datenauswertung",
    unit: "Regionalgeografie USA",
    hook: "Die USA prägen Weltwirtschaft, Sicherheitspolitik und Kultur wie kein anderer Staat. Gleichzeitig wächst die Konkurrenz, besonders durch China.",
    essentials: [
      "Der Dollar ist die wichtigste Reserve- und Handelswährung der Welt.",
      "Die USA sind Gründungsmitglied von UNO, NATO, IWF und Weltbank und ständiges Mitglied im Sicherheitsrat.",
      "Wichtigste Handelspartner sind Kanada, Mexiko und China, geregelt unter anderem im Abkommen USMCA.",
      "Die USA verursachen einen überdurchschnittlichen Anteil der weltweiten Treibhausgasemissionen pro Kopf.",
      "Bei Datenaufgaben immer prüfen: absolute Zahl oder Pro-Kopf-Wert, denn beide führen zu völlig verschiedenen Aussagen.",
    ],
    mistake: "Absolute Emissionen und Pro-Kopf-Emissionen werden vermischt. China emittiert absolut mehr, die USA deutlich mehr pro Kopf.",
    mnemonic: "Erst fragen: absolut oder pro Kopf?",
    questions: [
      mc("geo-usa-glob-1", "Worauf musst du beim Vergleich von Emissionsdaten zuerst achten?",
        ["Auf das Erscheinungsjahr der Quelle", "Ob absolute Werte oder Pro-Kopf-Werte angegeben sind",
         "Auf die Farbgebung der Grafik", "Auf die Sprache der Quelle"], 1,
        "Absolute Werte und Pro-Kopf-Werte führen zu gegensätzlichen Aussagen. China liegt absolut vorn, die USA pro Kopf.", { ref: "Essenz-Punkt 5" }),
      mc("geo-usa-glob-2", "Welches Abkommen regelt den Handel zwischen USA, Kanada und Mexiko?",
        ["EFTA", "USMCA", "ASEAN", "Mercosur"], 1,
        "USMCA löste 2020 das frühere NAFTA ab und regelt den nordamerikanischen Handel.", { ref: "Essenz-Punkt 3" }),
      tf("geo-usa-glob-3", "Die USA sind ständiges Mitglied im UNO-Sicherheitsrat.", true,
        "Sie gehören zu den fünf ständigen Mitgliedern mit Vetorecht, neben China, Russland, Frankreich und Grossbritannien.", { ref: "Essenz-Punkt 2" }),
      num("geo-usa-glob-4", "Wie viele ständige Mitglieder hat der UNO-Sicherheitsrat?", 5, 0,
        "Fünf: USA, China, Russland, Frankreich und Grossbritannien, alle mit Vetorecht.", { ref: "Essenz-Punkt 2" }),
    ],
  });
  I("geo-usa-global",
    "Kein anderes Land beeinflusst die Weltwirtschaft so stark. Für die Prüfung zählt aber weniger diese Aussage als die Fähigkeit, sie mit Daten zu belegen oder zu relativieren.",
    "Datenauswertung mit Quellenkritik ist die anspruchsvollste, aber am besten planbare Aufgabenform der Regionalgeografie.",
    "Du brauchst Globalisierung, Entwicklungsindikatoren und Diagrammlesen.",
    "Eine Zahl ist erst aussagekräftig, wenn Bezugsgrösse, Zeitraum und Quelle geklärt sind.",
    [["Leitwährung", "Währung, in der weltweit gehandelt und reserviert wird."],
     ["USMCA", "Handelsabkommen zwischen USA, Mexiko und Kanada."],
     ["Pro-Kopf-Wert", "Kennzahl geteilt durch die Einwohnerzahl."],
     ["Absolutwert", "Gesamtgrösse ohne Bezug zur Bevölkerung."],
     ["Quellenkritik", "Prüfung von Herkunft, Zeitpunkt und Interesse einer Quelle."]]);
})();

/* Erklärblöcke und Lernziele der vier Regionalgeografie-Kapitel,
   ebenfalls auf USA umgestellt. */
(function () {
  "use strict";
  var M = window.MNEMIKA;
  const { mc, tf } = M;
  function blocks(id, objectives, list) {
    var c = M.chapter(id);
    if (!c) return;
    c.points = c.essentials.slice();
    c.summary = c.hook;
    c.objectives = objectives;
    c.blocks = list.map(function (b, i) {
      if (b.check) { b.check.blockId = b.id; b.check.blockNo = i + 1; b.check.blockLabel = b.label; b.check.role = "check"; }
      return b;
    });
  }

  blocks("geo-usa-physical",
    ["Die Grosslandschaften der USA von West nach Ost benennen",
     "Erklären, warum die Gebirgsrichtung das Wetter bestimmt",
     "Trockenen Westen und feuchten Osten unterscheiden",
     "Naturgefahren den Regionen zuordnen"],
    [
      { id: "b1", label: "Die Streifen von West nach Ost",
        body: ["Lege ein Lineal von San Francisco nach New York und du durchquerst acht Grosslandschaften. Zuerst die schmale Pazifikküste, dann die Kaskaden und die Sierra Nevada, dahinter das abflusslose Great Basin.",
               "Danach folgen die <strong>Rocky Mountains</strong> als kontinentale Wasserscheide, östlich davon die weiten <strong>Great Plains</strong>, das zentrale Tiefland um den Mississippi, die alten, abgerundeten <strong>Appalachen</strong> und schliesslich die flache Küstenebene am Atlantik.",
               "Diese Anordnung ist keine Nebensache. Sie ist der Schlüssel zu fast allem, was in den folgenden Blöcken kommt."],
        check: mc("geo-usa-b1", "Welche Reihenfolge stimmt von West nach Ost?",
          ["Appalachen, Great Plains, Rocky Mountains", "Rocky Mountains, Great Plains, Appalachen",
           "Great Plains, Appalachen, Rocky Mountains", "Sierra Nevada, Appalachen, Rockies"], 1,
          "Von West nach Ost folgen auf die Rockies die Great Plains und erst danach die Appalachen.") },
      { id: "b2", label: "Warum die Gebirgsrichtung Tornados erzeugt",
        body: ["In Europa verlaufen Alpen und Pyrenäen west-östlich. Sie wirken wie eine Mauer zwischen kalter Nordluft und warmer Mittelmeerluft.",
               "In Nordamerika verlaufen die grossen Gebirge <strong>nord-südlich</strong>. Zwischen Rockies und Appalachen liegt ein breiter, offener Korridor. Kalte, trockene Luft aus Kanada kann darin ungehindert nach Süden strömen, feuchtwarme Luft vom Golf von Mexiko ungehindert nach Norden.",
               "Treffen beide aufeinander, entstehen extreme Temperatur- und Feuchteunterschiede auf engem Raum. Genau das ist die Zutat für schwere Gewitter und Tornados. Die <strong>Tornado Alley</strong> liegt deshalb dort, wo der Korridor am breitesten ist."],
        check: tf("geo-usa-b2", "Die nord-südliche Gebirgsrichtung begünstigt in den USA das Aufeinandertreffen polarer und tropischer Luftmassen.", true,
          "Genau. Zwischen Rockies und Appalachen fehlt eine west-östliche Barriere, deshalb können beide Luftmassen frei zirkulieren.") },
      { id: "b3", label: "Trockener Westen, feuchter Osten",
        body: ["Der 100. Längengrad ist eine grobe, aber nützliche Linie. Westlich davon fällt im Mittel weniger als 500 Millimeter Niederschlag pro Jahr, östlich davon mehr.",
               "Der Grund liegt wieder bei den Gebirgen: Pazifische Luft regnet sich an Kaskaden und Sierra Nevada ab und erreicht das Great Basin als trockene Fallluft. Feuchtigkeit für den Osten kommt dagegen vom Golf von Mexiko.",
               "Praktische Folge: östlich der Linie funktioniert Regenfeldbau, westlich davon braucht es Bewässerung oder Weidewirtschaft. Diese Grenze erklärt die Verteilung der Landwirtschaft im ganzen Land."],
        check: mc("geo-usa-b3", "Warum ist das Great Basin so trocken?",
          ["Es liegt zu weit nördlich", "Die Luft hat sich an Kaskaden und Sierra Nevada bereits abgeregnet",
           "Es fehlt jede Windströmung", "Der Golfstrom kühlt die Region ab"], 1,
          "Die pazifische Luft verliert ihre Feuchtigkeit beim Aufstieg über die Küstengebirge und kommt als trockene Fallluft im Becken an.") },
      { id: "b4", label: "Naturgefahren nach Region",
        body: ["<strong>Südosten und Golfküste:</strong> Hurrikane zwischen Juni und November, gespeist von warmem Meerwasser.",
               "<strong>Mittlerer Westen:</strong> Tornados, vor allem im Frühling. <strong>Westküste:</strong> Erdbeben an der San-Andreas-Verwerfung und zunehmend Waldbrände in den Trockenperioden.",
               "<strong>Mississippi-Tiefland:</strong> Überschwemmungen nach Starkregen und Schneeschmelze. Für die Prüfung solltest du jede Gefahr mit ihrer Ursache verbinden können, nicht nur mit ihrem Ort."],
        check: mc("geo-usa-b4", "Welche Ursache hat die Erdbebengefahr in Kalifornien?",
          ["Ein Hotspot", "Eine Transformstörung zwischen zwei Platten", "Subduktion vor der Ostküste", "Vulkanismus der Appalachen"], 1,
          "An der San-Andreas-Verwerfung gleiten pazifische und nordamerikanische Platte aneinander vorbei, eine Transformstörung.") },
    ]);

  blocks("geo-usa-population",
    ["Das Bevölkerungswachstum der USA erklären",
     "Die Verschiebung vom Frostbelt in den Sunbelt beschreiben",
     "Suburbanisierung und ihre Folgen beurteilen",
     "Segregation an Stadtmodellen erkennen"],
    [
      { id: "b1", label: "Wachstum durch Zuwanderung",
        body: ["Die USA zählen rund 335 Millionen Einwohner und wachsen weiter, während viele andere Industriestaaten bereits schrumpfen.",
               "Der Grund ist nicht eine hohe Geburtenrate. Diese liegt mit etwa 1,6 Kindern pro Frau unter dem Bestandserhaltungsniveau von 2,1. Den Ausschlag gibt die <strong>Zuwanderung</strong>, die zusätzlich die Altersstruktur verjüngt, weil vor allem junge Erwachsene einwandern."],
        check: tf("geo-usa-p1", "Das Wachstum der US-Bevölkerung beruht vor allem auf Zuwanderung.", true,
          "Die Geburtenrate liegt unter dem Bestandserhaltungsniveau, den Ausschlag gibt die Migration.") },
      { id: "b2", label: "Vom Frostbelt in den Sunbelt",
        body: ["Bis in die 1960er-Jahre lag das wirtschaftliche Zentrum im Nordosten und um die Grossen Seen. Mit dem Niedergang von Stahl und Autoindustrie verlor diese Region Arbeitsplätze und Menschen.",
               "Gewonnen haben die Staaten des Südens und Südwestens: Texas, Florida, Arizona, Nevada. Gründe sind billigeres Bauland, tiefere Steuern, Klimaanlagen, die das heisse Klima erträglich machen, und neue Branchen wie Luftfahrt, IT und Dienstleistungen.",
               "Diese Verschiebung hat politische Folgen, weil sich mit der Bevölkerung auch die Sitzverteilung im Repräsentantenhaus verschiebt."],
        check: mc("geo-usa-p2", "Welche Staaten gehören zum Sunbelt?",
          ["Michigan und Ohio", "Texas, Florida und Arizona", "New York und Pennsylvania", "Alaska und Maine"], 1,
          "Der Sunbelt umfasst die Wachstumsstaaten im Süden und Südwesten.") },
      { id: "b3", label: "Die Vorstadt als Normalfall",
        body: ["Anders als in Europa leben in den USA die meisten Menschen weder im Stadtzentrum noch auf dem Land, sondern in der <strong>Suburb</strong>: Einfamilienhäuser, tiefe Dichte, grosse Grundstücke.",
               "Diese Siedlungsform erzwingt das Auto. Öffentlicher Verkehr rechnet sich bei tiefer Dichte kaum, deshalb sind Wege lang und der Energieverbrauch hoch.",
               "Die Kehrseite ist im Zentrum sichtbar: Viele Innenstädte verloren Kaufkraft und Steuersubstrat. Erst seit einigen Jahren kehren gut verdienende Haushalte teilweise zurück, was Aufwertung und Verdrängung auslöst."],
        check: mc("geo-usa-p3", "Welche Folge hat die tiefe Siedlungsdichte der US-Vorstädte?",
          ["Sehr guter öffentlicher Verkehr", "Hohe Autoabhängigkeit und lange Wege",
           "Sehr kurze Arbeitswege", "Kaum Flächenverbrauch"], 1,
          "Bei tiefer Dichte lohnt sich öffentlicher Verkehr kaum, deshalb dominiert das Auto und die Wege werden lang.") },
    ]);

  blocks("geo-usa-economy",
    ["Die Sektorenstruktur der USA beschreiben",
     "Agrarbelts und ihre Standortfaktoren erklären",
     "Den Strukturwandel vom Rustbelt zum Technologiecluster darstellen",
     "Die Energiesituation beurteilen"],
    [
      { id: "b1", label: "Eine Dienstleistungsgesellschaft",
        body: ["Etwa achtzig Prozent der Beschäftigten arbeiten im Tertiärsektor, rund neunzehn Prozent in der Industrie und nur etwa ein Prozent in der Landwirtschaft.",
               "Dass so wenige Menschen die Landwirtschaft betreiben und das Land trotzdem einer der grössten Agrarexporteure der Welt ist, liegt an der extremen Mechanisierung und an sehr grossen Betriebsflächen."],
        check: mc("geo-usa-e1", "Wie passt ein Anteil von einem Prozent Landwirtschaftsbeschäftigten zu hohen Agrarexporten?",
          ["Die Statistik ist falsch", "Durch Mechanisierung und sehr grosse Betriebe ist die Produktivität je Arbeitskraft enorm hoch",
           "Die USA importieren in Wahrheit alles", "Nur Nebenerwerbsbetriebe zählen mit"], 1,
          "Hohe Produktivität pro Arbeitskraft erlaubt grosse Erträge mit wenig Personal.") },
      { id: "b2", label: "Die Belts der Landwirtschaft",
        body: ["Die Landwirtschaft ordnet sich in Gürtel, die den Klima- und Bodenbedingungen folgen. Der <strong>Corn Belt</strong> im mittleren Westen nutzt fruchtbare Böden und Sommerniederschläge für Mais und Soja, meist zur Tierfütterung.",
               "Weiter westlich, wo es trockener wird, folgt der <strong>Wheat Belt</strong> mit Weizen, der weniger Wasser braucht. Noch weiter westlich reicht der Niederschlag nur noch für Weidewirtschaft.",
               "Kalifornien ist ein Sonderfall: mediterranes Klima mit trockenen Sommern, deshalb Bewässerungslandwirtschaft für Obst, Gemüse, Wein und Nüsse. Die Abhängigkeit vom Wasser des Colorado ist dort ein wachsendes Problem."],
        check: mc("geo-usa-e2", "Warum liegt der Wheat Belt westlich des Corn Belt?",
          ["Weil Weizen mehr Wasser braucht als Mais", "Weil Weizen mit weniger Niederschlag auskommt",
           "Weil dort die Böden fruchtbarer sind", "Weil der Transport günstiger ist"], 1,
          "Nach Westen nimmt der Niederschlag ab. Weizen ist genügsamer als Mais und passt deshalb in die trockeneren Great Plains.") },
      { id: "b3", label: "Vom Rustbelt zum Cluster",
        body: ["Die Region um die Grossen Seen war das Herz der Schwerindustrie: Stahl in Pittsburgh, Autos in Detroit. Ab den 1970er-Jahren brach dieser Sektor unter internationalem Wettbewerbsdruck und Automatisierung ein, es entstand der Begriff <strong>Rustbelt</strong>.",
               "Gleichzeitig wuchsen an anderen Orten neue Cluster: Software und Halbleiter im <strong>Silicon Valley</strong>, Biotechnologie in Boston, Luft- und Raumfahrt in Seattle und Texas.",
               "Ein Cluster entsteht nicht zufällig. Er braucht Universitäten, Risikokapital, qualifizierte Fachkräfte und bestehende Firmen, die Personal und Wissen abgeben. Genau deshalb lässt er sich nicht einfach anderswo nachbauen."],
        check: mc("geo-usa-e3", "Was ist eine wesentliche Voraussetzung für ein Technologiecluster?",
          ["Billige Rohstoffe vor Ort", "Nähe zu Universitäten, Kapital und Fachkräften",
           "Ein Meerhafen", "Tiefe Grundstückspreise"], 1,
          "Cluster leben von Wissen, Kapital und Personal, nicht von Rohstoffen.") },
      { id: "b4", label: "Energie im Überfluss und im Verbrauch",
        body: ["Durch <strong>Fracking</strong>, also das Aufbrechen dichter Gesteinsschichten, wurden ab etwa 2010 riesige Öl- und Gasvorkommen förderbar. Die USA stiegen damit zum grössten Produzenten der Welt auf und wurden vom Importeur zum Exporteur.",
               "Der Verbrauch pro Kopf bleibt aber einer der höchsten weltweit, bedingt durch Siedlungsstruktur, Fahrzeugflotte und Klimaanlagen.",
               "Erneuerbare Energien wachsen schnell, vor allem Windkraft in den Great Plains und Solarenergie im Südwesten, wo die Naturbedingungen ideal sind."],
        check: tf("geo-usa-e4", "Fracking machte die USA zum weltgrössten Öl- und Gasproduzenten.", true,
          "Seit etwa 2010 stieg die Förderung stark an und veränderte die Position der USA auf dem Weltmarkt grundlegend.") },
    ]);

  blocks("geo-usa-global",
    ["Die globale Rolle der USA einordnen",
     "Wichtige Organisationen und Abkommen zuordnen",
     "Statistiken korrekt auf ihre Bezugsgrösse prüfen",
     "Quellen kritisch beurteilen"],
    [
      { id: "b1", label: "Warum der Dollar so wichtig ist",
        body: ["Rohstoffe wie Erdöl werden weltweit in Dollar gehandelt, und Zentralbanken halten einen grossen Teil ihrer Reserven in Dollar.",
               "Daraus folgt eine ungewöhnliche Machtposition: Die USA können sich in der eigenen Währung verschulden, und Sanktionen über das Dollar-Zahlungssystem wirken weit über ihr Staatsgebiet hinaus."],
        check: mc("geo-usa-g1", "Was ist eine Folge der Rolle des Dollars als Leitwährung?",
          ["Die USA können keine Schulden aufnehmen", "Sanktionen über das Dollar-System wirken weltweit",
           "Der Dollar ist besonders stabil gegen Inflation", "Rohstoffe werden in Euro gehandelt"], 1,
          "Weil fast aller Welthandel über Dollar läuft, haben Massnahmen im Dollar-Zahlungssystem globale Wirkung.") },
      { id: "b2", label: "Absolut oder pro Kopf?",
        body: ["Diese Frage entscheidet bei Datenaufgaben über richtig und falsch. Bei den Treibhausgasemissionen liegt China absolut vorn, weil dort viermal so viele Menschen leben.",
               "Rechnet man pro Kopf, liegen die USA deutlich höher. Beide Aussagen sind korrekt, sie beantworten nur verschiedene Fragen.",
               "Prüfe deshalb bei jeder Grafik zuerst die Achsenbeschriftung: Ist es eine Gesamtsumme oder ein Wert je Einwohner? Und aus welchem Jahr stammen die Daten?"],
        check: mc("geo-usa-g2", "China emittiert absolut mehr CO₂ als die USA, pro Kopf aber weniger. Was folgt daraus?",
          ["Eine der beiden Angaben muss falsch sein", "Beide Aussagen stimmen und beantworten verschiedene Fragen",
           "China hat weniger Industrie", "Die USA haben mehr Einwohner"], 1,
          "Absolutwert und Pro-Kopf-Wert sind unterschiedliche Kennzahlen. Beide können gleichzeitig zutreffen.") },
      { id: "b3", label: "Quellen prüfen, bevor du argumentierst",
        body: ["Für die Prüfung genügt es nicht, eine Zahl zu nennen. Du solltest sagen können, woher sie stammt, aus welchem Jahr sie ist und wer ein Interesse an ihrer Darstellung hat.",
               "Amtliche Quellen wie das Census Bureau, die Energy Information Administration oder der USGS sind belastbar. Bei Interessenverbänden lohnt sich zusätzliche Vorsicht.",
               "Eine gute Antwort nennt Befund, Beleg und Einschränkung: was zeigen die Daten, woher stammen sie, und was zeigen sie nicht."],
        check: mc("geo-usa-g3", "Was gehört zu einer vollständigen Datenauswertung?",
          ["Nur der höchste Wert", "Befund, Quelle mit Jahr und eine Einschränkung",
           "Eine persönliche Meinung", "Möglichst viele Zahlen"], 1,
          "Befund, Beleg und Einschränkung machen aus einer Zahl ein Argument.") },
    ]);
})();

/* Bessere Einführungen: Zu jedem der 105 Kapitel eine benannte
   Fehlvorstellung. Sie steht ganz am Anfang, weil Lernen leichter
   fällt, wenn zuerst der falsche Denkweg aus dem Weg geräumt wird. */
(function () {
  "use strict";
  var M = window.MNEMIKA;
  var MYTHS = [
["math-algebra","Viele behandeln eine Gleichung als Rechenaufgabe, die man abarbeitet. Sie ist aber eine Behauptung, die man vereinfacht. Deshalb muss jede Operation beide Seiten vollständig treffen."],
["math-systems-quadratics","Viele teilen x² − 5x = 0 durch x. Damit verschwindet die Lösung x = 0 lautlos. Ausklammern bewahrt beide Lösungen."],
["math-functions-basic","Nullstelle und y-Achsenabschnitt werden ständig vertauscht. Bei der Nullstelle ist y null, beim y-Achsenabschnitt ist x null."],
["math-functions-advanced","Ein Wachstum um 5 Prozent wird oft als Faktor 0,05 modelliert. Richtig ist 1,05, weil der alte Bestand erhalten bleibt und nur etwas dazukommt."],
["math-limits","0/0 wird für ein Ergebnis gehalten. Es ist keines, sondern die Meldung, dass der Term erst umgeformt werden muss."],
["math-derivatives","Die innere Ableitung wird bei der Kettenregel regelmässig vergessen. Aus (3x+1)⁵ wird 15(3x+1)⁴, nicht 5(3x+1)⁴."],
["math-curve-optimisation","f'(x) = 0 wird als Beweis für ein Extremum gelesen. Es ist nur ein Kandidat. Bei x³ ist f'(0) = 0 und trotzdem liegt kein Extremum vor."],
["math-integrals","Das Integral wird mit der geometrischen Fläche gleichgesetzt. Flächen unter der x-Achse zählen aber negativ. Bei sin(x) von 0 bis 2π ergibt das Integral null."],
["math-trigonometry","Der Taschenrechner liefert bei sin x = 0,5 nur eine Lösung. Im Bereich bis 360 Grad gibt es zwei. Die zweite muss man über den Einheitskreis selbst ergänzen."],
["math-vectors","Ein Vektor wird für einen Punkt gehalten. Er hat aber keinen Ort: derselbe Pfeil, irgendwo verschoben, bleibt derselbe Vektor."],
["math-analytic-geometry","In (x + 3)² wird der Mittelpunkt bei +3 vermutet. Er liegt bei −3, weil die Form (x − x₀)² lautet."],
["math-probability","Sich ausschliessende Ereignisse werden für unabhängig gehalten. Das Gegenteil stimmt: Tritt das eine ein, ist das andere unmöglich, also maximal abhängig."],

["phys-kinematics","Eine Kurvenfahrt mit konstantem Tempo gilt als unbeschleunigt. Geschwindigkeit hat aber auch eine Richtung, und die ändert sich hier laufend."],
["phys-fall-throw","Schwere Körper sollen schneller fallen. Ohne Luftwiderstand fallen alle gleich schnell, weil grössere Anziehung durch grössere Trägheit genau ausgeglichen wird."],
["phys-newton-forces","Bewegung scheint eine dauernde Kraft zu brauchen. Tatsächlich bremst die Reibung, und ohne sie liefe der Körper unbegrenzt weiter."],
["phys-friction-statics","Reibung wird für flächenabhängig gehalten. Im einfachen Modell zählt nur die Normalkraft: breiter und schmaler Block gleicher Masse rutschen gleich."],
["phys-work-power","Eine Last zu halten fühlt sich nach Arbeit an. Physikalisch ist es keine, weil kein Weg zurückgelegt wird."],
["phys-energy","Bei Reibung soll Energie verloren gehen. Sie wird in Wärme umgewandelt und damit entwertet, nicht vernichtet."],
["phys-pressure-hydro","Ein breites Becken scheint mehr Bodendruck zu erzeugen als ein dünnes Rohr. Bei gleicher Füllhöhe ist der Druck identisch, denn p = ρ·g·h enthält keine Fläche."],
["phys-temperature-expansion","Temperatur wird mit Wärmemenge verwechselt. Ein 1000 Grad heisser Funke enthält weniger Energie als eine warme Badewanne."],
["phys-heat-thermo","Ein Kühlschrank scheint Kälte zu erzeugen. Er pumpt Wärme nach aussen, und das gegen die natürliche Flussrichtung, weshalb er Strom braucht."],
["phys-states","Beim Schmelzen wird weitere Erwärmung erwartet. Die Temperatur bleibt konstant, weil die Energie in das Lösen der Bindungen geht."],
["phys-electric-basics","Man sagt, Spannung fliesse durch den Draht. Spannung liegt an, fliessen tut nur der Strom."],
["phys-circuits-power","Parallelschaltung scheint den Gesamtwiderstand zu erhöhen. Sie senkt ihn unter den kleinsten Einzelwiderstand, weil jeder zusätzliche Pfad mehr Strom zulässt."],
["phys-magnetism","Ein halbierter Magnet soll je einen Pol ergeben. Es entstehen zwei vollständige Magnete mit je zwei Polen, beliebig weit hinunter."],
["phys-optics","Winkel werden zur Oberfläche gemessen. Richtig ist immer die Messung zum Lot, also zur Senkrechten auf der Fläche."],

["chem-substances","Salzwasser gilt als Reinstoff, weil es einheitlich aussieht. Ein Siedebereich statt eines festen Siedepunkts verrät das Gemisch."],
["chem-atoms-pse","Die Masse soll das Element bestimmen. Es ist allein die Protonenzahl. Andere Neutronenzahl bedeutet nur ein anderes Isotop."],
["chem-shell-lewis","Alle Elektronen scheinen chemisch gleich wichtig. Nur die äussersten zählen, deshalb zeichnet die Lewis-Schreibweise auch nur diese."],
["chem-covalent","Eine Doppelbindung wird für zwei getrennte Einfachbindungen gehalten. Sie ist kürzer und fester, und um sie lässt sich nicht mehr frei drehen."],
["chem-polarity-forces","Polare Bindungen sollen ein polares Molekül ergeben. CO₂ hat polare Bindungen und ist trotzdem unpolar, weil es gestreckt gebaut ist."],
["chem-ionic-metallic","NaCl wird als Molekül gelesen. Es gibt keine NaCl-Zweiergruppen, die Formel beschreibt nur ein Zahlenverhältnis im Gitter."],
["chem-equations-mole","Beim Ausgleichen werden Indizes verändert. Damit macht man aus Wasser einen anderen Stoff. Nur die Koeffizienten dürfen angepasst werden."],
["chem-concentration-stoich","Koeffizienten werden als Massenverhältnis gelesen. Sie geben Teilchen- und damit Stoffmengenverhältnisse an, nie Gramm."],
["chem-energetics","Ein Katalysator soll die Reaktion energetisch günstiger machen. Er senkt nur die Startschwelle, die Energiebilanz bleibt unverändert."],
["chem-acid-base","Von pH 5 auf pH 3 klingt nach einem kleinen Schritt. Es ist der Faktor 100, weil der pH ein Logarithmus ist."],
["chem-redox","Oxidation wird an Sauerstoff gebunden. Entscheidend ist die Elektronenabgabe. Natrium mit Chlor ist eine Oxidation ganz ohne Sauerstoff."],
["chem-organic-groups","Die Kettenlänge scheint die Eigenschaften zu bestimmen. Es ist die funktionelle Gruppe. Die Kette steuert vor allem Grösse und Löslichkeit."],
["chem-organic-naming","Als Hauptkette wird die waagrecht gezeichnete genommen. Gesucht ist die längste zusammenhängende, auch wenn sie um Ecken läuft."],

["bio-biomolecules","Fette gelten als Polymere wie Stärke und Proteine. Lipide werden nicht über Bausteine definiert, sondern über ihre Wasserunlöslichkeit."],
["bio-enzymes","Enzyme sollen Reaktionen ermöglichen, die sonst unmöglich wären. Sie beschleunigen nur, die Energiebilanz bleibt unverändert."],
["bio-cells","Pflanzenzellen scheinen wegen der Chloroplasten keine Mitochondrien zu brauchen. Sie besitzen beides, denn Zucker muss auch dort veratmet werden."],
["bio-energy","Der freigesetzte Sauerstoff soll aus dem CO₂ stammen. Er kommt aus dem gespaltenen Wasser."],
["bio-membrane-transport","Im Diffusionsgleichgewicht sollen die Teilchen stillstehen. Sie bewegen sich weiter, nur der Nettostrom ist null."],
["bio-cell-cycle-mitosis","Nach der S-Phase wird eine verdoppelte Chromosomenzahl vermutet. Die Zahl bleibt gleich, nur besteht jedes Chromosom nun aus zwei Chromatiden."],
["bio-meiosis-karyotype","Meiose und Mitose werden als dasselbe mit anderem Namen behandelt. Die Meiose trennt zuerst homologe Chromosomen und halbiert dadurch den Satz."],
["bio-mendel","Gleiches Aussehen soll gleichen Genotyp bedeuten. AA und Aa sehen bei Dominanz identisch aus."],
["bio-dihybrid-sexlinked","Die Unabhängigkeitsregel wird für allgemeingültig gehalten. Sie gilt nur, wenn die Gene auf verschiedenen Chromosomen liegen."],
["bio-dna-replication","Nach der Replikation werden zwei ganz neue Doppelstränge erwartet. Jeder enthält einen alten Strang, deshalb heisst es semikonservativ."],
["bio-protein-synthesis","Die DNA scheint selbst zum Ribosom zu wandern. Sie bleibt im Kern, hinaus geht nur die mRNA-Arbeitskopie."],
["bio-digestion","Die Galle gilt als fettspaltendes Sekret. Sie enthält keine Enzyme, sie emulgiert nur und vergrössert die Angriffsfläche."],
["bio-respiration-circulation","Arterien sollen immer sauerstoffreiches Blut führen. Die Einteilung richtet sich nach der Richtung: Die Lungenarterie führt sauerstoffarmes Blut."],
["bio-nervous-system","Ein stärkerer Reiz soll ein stärkeres Aktionspotential erzeugen. Es gilt alles oder nichts, codiert wird über die Frequenz."],
["bio-eye","Beim Blick in die Ferne wird Anstrengung vermutet. Der Ringmuskel ist dort entspannt, angestrengt wird beim Nahsehen."],
["bio-ecology","Energie soll wie die Stoffe im Kreis laufen. Sie durchfliesst das System einmal und verlässt es als Wärme."],
["bio-evolution","Anpassung scheint durch Bedarf zu entstehen. Die Variation ist vorher schon da, die Umwelt wählt nur aus."],

["hist-ch-1798-1848","1798 gilt als Angriff auf eine bestehende Demokratie. Die alte Eidgenossenschaft war ein Bündnis weniger Familien mit rechtlosen Untertanengebieten."],
["hist-ch-1848-1914","Die Kompromisskultur wird als Schweizer Wesensart gedeutet. Sie folgt aus dem Referendum: Wer nicht eingebunden ist, kippt das Gesetz."],
["hist-ch-ww1","Neutralität soll vor den Kriegsfolgen geschützt haben. Reallohnverlust, Versorgungsnot und der Landesstreik zeigen das Gegenteil."],
["hist-ch-ww2","Das Reduit gilt als Schutz der Bevölkerung. Es war ein Abschreckungskonzept, das das Mittelland preisgegeben hätte."],
["hist-ch-postwar-system","Konkordanz wird mit Harmoniebedürfnis erklärt. Sie ist die institutionelle Antwort auf die Blockademacht des Referendums."],
["hist-ideologies","Ideologien erscheinen als blosse Meinungen. Sie sind konkurrierende Antworten auf dieselben offenen Fragen nach Herrschaft und Eigentum."],
["hist-imperialism","Der Imperialismus wird allein wirtschaftlich erklärt. Erst Politik, Ideologie und Technik zusammen machen ihn verständlich."],
["hist-ww1","Das Attentat von Sarajevo gilt als Ursache. Es war der Anlass. Ohne Bündnissystem, Nationalismus und Rüstung wäre es eine regionale Krise geblieben."],
["hist-versailles-crisis","Der Vertrag gilt als einzige Ursache des Aufstiegs der NSDAP. Ohne die Weltwirtschaftskrise blieb die Partei jahrelang eine Randerscheinung."],
["hist-dictatorships","Faschismus und Nationalsozialismus werden gleichgesetzt. Die Rassenideologie als Systemkern unterscheidet den Nationalsozialismus grundlegend."],
["hist-ww2-world","Der Holocaust erscheint als Entgleisung im Krieg. Er folgt aus der Kernideologie und lief seit 1933 in erkennbaren Stufen."],
["hist-postwar-coldwar","Der Kalte Krieg gilt als beinahe heisser Krieg. Gerade die atomare Abschreckung verhinderte den direkten Zusammenstoss."],
["hist-bandung-decolonisation","Unabhängigkeit wird mit Selbstbestimmung gleichgesetzt. Rohstoffabhängigkeit und Schulden bestanden weiter."],
["hist-un-nato-europe","Das Vetorecht gilt als Konstruktionsfehler der UNO. Ohne es wären die Grossmächte gar nicht beigetreten."],
["hist-china-1949","Wirtschaftliches Wachstum soll zur Demokratisierung führen. China ist das prominenteste Gegenbeispiel."],
["hist-middle-east","Der Konflikt wird als Religionskrieg gelesen. Im Kern stehen zwei nationale Ansprüche auf dasselbe Gebiet."],

["geo-earth-time","Die Erdschichtung wirkt zufällig. Sie ist erstarrte Dichtesortierung aus der Zeit, als die Erde noch flüssig war."],
["geo-plate-tectonics","Wegeners Theorie soll wegen schlechter Belege abgelehnt worden sein. Die Belege waren gut, es fehlte der Antriebsmechanismus."],
["geo-exogenic-rocks","Alte Gebirge scheinen schwächer aufgefaltet worden zu sein. Sie wurden nur länger abgetragen."],
["geo-switzerland-geology","Die Schweizer Landschaft wird allein den Alpen zugeschrieben. Die Feinform stammt grösstenteils von den eiszeitlichen Gletschern."],
["geo-weather-climate","Ein kalter Winter gilt als Gegenbeweis zur Erwärmung. Klima ist ein Mittel über mindestens dreissig Jahre."],
["geo-climate-diagrams","Die Klimazone wird an der Temperatur allein bestimmt. Erst Temperatur und Niederschlagsverteilung zusammen ergeben sie."],
["geo-climate-change","Der Treibhauseffekt gilt als das Problem. Ohne ihn wäre die Erde 33 Grad kälter. Problematisch ist seine Verstärkung."],
["geo-economic-sectors-agriculture","Wenige Beschäftigte in der Landwirtschaft sollen wenig Produktion bedeuten. Mechanisierung erlaubt hohe Erträge mit sehr wenig Personal."],
["geo-energy-sustainability","Der Schweizer Strommix wird für die Gesamtenergie gehalten. Verkehr und Wärme laufen überwiegend fossil und importiert."],
["geo-spatial-transport","Strassenausbau soll Staus dauerhaft lösen. Neue Kapazität erzeugt neuen Verkehr, der die Entlastung wieder aufzehrt."],
["geo-global-development","Globalisierung gilt als reiner Ungleichheitstreiber. Zwischen Ländern sank die Ungleichheit, innerhalb vieler Länder stieg sie."],
["geo-demography","Starkes Wachstum wird mit steigender Geburtenrate erklärt. Es entsteht, weil die Sterberate früher sinkt als die Geburtenrate."],
["geo-urban","Quartieraufwertung klingt durchweg positiv. Steigende Mieten verdrängen genau jene, die das Quartier attraktiv gemacht haben."],
["geo-usa-physical","Die USA werden als ein einziger Klimaraum behandelt. Zwischen Seattle, Phoenix, Miami und Fairbanks liegen völlig verschiedene Klimatypen."],
["geo-usa-population","Bevölkerungswachstum wird mit hoher Geburtenrate erklärt. In den USA ist sie tief, das Wachstum stammt aus Zuwanderung."],
["geo-usa-economy","Der Corn Belt wird für kleinbäuerliche Landwirtschaft gehalten. Es sind hochmechanisierte Grossbetriebe mit starker Exportausrichtung."],
["geo-usa-global","Absolute und Pro-Kopf-Werte werden vermischt. China emittiert absolut mehr, die USA deutlich mehr pro Kopf. Beides stimmt gleichzeitig."],

["de-written-method","Man beginnt sofort zu schreiben. Der Operator bestimmt aber die verlangte Leistung, und wer ihn übersieht, schreibt am Auftrag vorbei."],
["de-argumentation","Eine Behauptung mit Begründung gilt als Argument. Es fehlt der Beleg. Ohne ihn wiederholt die Begründung nur die Behauptung."],
["de-text-types","Textsorten wirken wie Formalien. Sie bestimmen Ton, Aufbau und erlaubte Subjektivität, und ihre Verfehlung kostet Punkte trotz gutem Inhalt."],
["de-language-editing","Überarbeiten heisst nochmals durchlesen. Wirksam ist es erst in getrennten Durchgängen mit je einem Fokus."],
["de-oral-method","Wer die Handlung kennt, fühlt sich vorbereitet. Verlangt sind Einordnung, Analyse und Beleg, nicht Nacherzählung."],
["de-buehler","Der Roman wirkt wie eine lose Sammlung von Episoden. Gerade die Lücken zwischen ihnen und das Unausgesprochene tragen die Bedeutung."],
["de-duerrenmatt","Die Güllener scheinen ihre Moral für Geld aufzugeben. Sie behalten sie und deuten den Mord zu Gerechtigkeit um. Darin liegt die Schärfe."],
["de-storm","Hauke Haien scheint an seiner Technik zu scheitern. Sein Deich hält. Es bricht die alte Stelle, deren Sanierung er sozial nicht durchsetzen konnte."],
["de-burkart","Burkarts Naturbilder wirken wie Landschaftsbeschreibung. Sie tragen existenzielle Themen: Vergänglichkeit, Erinnerung, Stille."],

["en-vocabulary-grammar","Wiedererkennen wird für Beherrschen gehalten. Für Schreiben und Sprechen zählt nur der aktive Wortschatz."],
["en-reading","Man will jedes Wort verstehen. Kontext und Wortbildung genügen, und vollständiges lineares Lesen kostet die Zeit, die später beim Schreiben fehlt."],
["en-analysis","Der Text wird mit anderen Worten wiedergegeben und für Analyse gehalten. Ohne Wirkungsverben wie suggests oder emphasises ist es eine Zusammenfassung."],
["en-writing","Mehr Argumente scheinen besser. Bei 200 bis 300 Wörtern schlagen zwei entwickelte Argumente vier angerissene."],
["en-speaking","Schnelles Sprechen gilt als Kompetenz. Bewertet werden Verständlichkeit und Interaktion, und eine kurze Denkpause wirkt souveräner als Füllgeräusche."],
["en-literature","Zwei Zusammenfassungen nebeneinander gelten als Vergleich. Ohne gemeinsames Kriterium ist es keiner."],
["en-exam-strategy","Man arbeitet die Aufgaben in gedruckter Reihenfolge ab. Strategisch holt man zuerst die schnellen, sicheren Punkte."],
  ];
  var n = 0;
  MYTHS.forEach(function (pair) {
    var c = M.chapter(pair[0]);
    if (!c || !c.intro) return;
    c.intro.myth = pair[1];
    n += 1;
  });
  M.mythCount = n;
})();

/* Ergänzung: vierter Erklärblock für die beiden USA-Kapitel, die bisher
   nur drei hatten. Läuft nach intro-d.js und ergänzt, statt zu ersetzen. */
(function () {
  "use strict";
  var M = window.MNEMIKA;
  const { mc, tf } = M;
  function add(id, label, paras, check) {
    var c = M.chapter(id);
    if (!c || !c.blocks) return;
    var no = c.blocks.length + 1;
    check.blockId = "b" + no; check.blockNo = no; check.blockLabel = label; check.role = "check";
    c.blocks.push({ id: "b" + no, label: label, body: paras, check: check });
  }

  add("geo-usa-population", "Segregation im Stadtbild",
    ["In vielen US-Städten lässt sich soziale Ungleichheit direkt auf der Karte ablesen. Einkommen, Herkunft und Bildungsstand verteilen sich nicht zufällig über das Stadtgebiet, sondern in klar abgegrenzten Zonen.",
     "Historische Ursachen wirken bis heute nach. Das <strong>Redlining</strong> markierte ab den 1930er-Jahren Quartiere mit hohem Anteil schwarzer Bevölkerung als kreditunwürdig. Wer dort wohnte, bekam keine Hypothek, konnte kein Eigentum bilden und kein Vermögen vererben.",
     "Weil Schulen in den USA stark über lokale Grundsteuern finanziert werden, verstärkt sich das Muster von Generation zu Generation: ärmeres Quartier, tiefere Steuereinnahmen, schlechter ausgestattete Schule. Räumliche Trennung wird so zur sozialen Vererbung."],
    mc("geo-usa-p4", "Warum verstärkt die Schulfinanzierung über lokale Grundsteuern die Segregation?",
      ["weil alle Schulen gleich viel erhalten", "weil ärmere Quartiere weniger Steuereinnahmen und damit schlechter ausgestattete Schulen haben",
       "weil der Bund die Schulen zahlt", "weil es zu wenige Schulen gibt"], 1,
      "Die Kopplung von Schulqualität an lokalen Immobilienwert reproduziert bestehende Ungleichheit über Generationen."));

  add("geo-usa-global", "Konkurrenz mit China",
    ["Die wirtschaftliche und technologische Konkurrenz mit China prägt die amerikanische Aussenpolitik der letzten Jahre stärker als jedes andere Thema.",
     "Sie zeigt sich in Zöllen, in Exportbeschränkungen für Hochtechnologie wie Halbleiter, im Streit um Taiwan und im Wettbewerb um Infrastrukturinvestitionen in Afrika, Asien und Lateinamerika.",
     "Für die Prüfung ist wichtig, dass hier zwei Ebenen zusammenfallen: wirtschaftliche Verflechtung und sicherheitspolitische Rivalität. Beide Staaten sind füreinander wichtige Handelspartner und gleichzeitig strategische Konkurrenten. Diese Gleichzeitigkeit macht eine einfache Einordnung unmöglich."],
    tf("geo-usa-g5", "Die USA und China sind gleichzeitig wichtige Handelspartner und strategische Konkurrenten.", true,
      "Genau diese Gleichzeitigkeit von Verflechtung und Rivalität kennzeichnet das Verhältnis und verhindert eine einfache Einordnung."));
})();

/* Mehrere Abschlüsse auf einem gemeinsamen Kompetenzgraphen.
   Die 105 Kapitel sind Darstellungseinheiten, nicht die Wahrheit.
   Ein Programm gilt erst als abgebildet, wenn der Lehrplan wirklich
   ausgewertet wurde. Alles andere wird offen als nicht abgebildet gezeigt. */
(function () {
  "use strict";
  var M = window.MNEMIKA;

  M.PROGRAMS = [
    { id: "passerelle-2023", label: "Passerelle",
      full: "Ergänzungsprüfung Passerelle Berufsmaturität/Fachmaturität – universitäre Hochschulen",
      authority: "SBFI", framework: "Richtlinien 2023", scope: "national",
      tracks: [], coverage: "mapped",
      note: "Vollständig abgebildet. Die Kapitel dieses Produkts folgen diesen Richtlinien.",
      source: "sbfi-passerelle-2023" },
    { id: "gym-maturitaet-2024", label: "Gymnasiale Maturität",
      full: "Gymnasiale Maturität, nationaler Rahmenlehrplan",
      authority: "EDK", framework: "RLP 2024", scope: "national-core",
      tracks: ["Schwerpunktfach nach Schule"], coverage: "unmapped",
      note: "Der nationale Rahmen gilt seit 1. August 2024. Kantone und Schulen setzen ihn "
        + "eigenständig um, die Einführung läuft bis Schuljahr 2029/30. Ein nationaler Kern "
        + "ist deshalb nie ein vollständiger lokaler Lehrplan.",
      source: "edk-rlp-gym-2024" },
    { id: "smp", label: "Schweizerische Maturitätsprüfung",
      full: "Schweizerische Maturitätsprüfung", authority: "SBFI",
      framework: "Richtlinien SMP", scope: "national", tracks: ["Typus A", "Typus B"],
      coverage: "unmapped",
      note: "Eigene Prüfungsordnung für Kandidatinnen und Kandidaten ohne anerkanntes Gymnasium. "
        + "Nicht identisch mit der gymnasialen Maturität.",
      source: "sbfi-smp" },
    { id: "bm-2025", label: "Berufsmaturität",
      full: "Berufsmaturität, eidgenössischer Rahmenlehrplan", authority: "SBFI",
      framework: "RLP 2025, in Kraft seit 1. März 2026", scope: "national",
      tracks: ["BM1 lehrbegleitend", "BM2 nach der Lehre", "Technik, Architektur, Life Sciences",
        "Natur, Landschaft und Lebensmittel", "Wirtschaft und Dienstleistungen, Typ Wirtschaft",
        "Wirtschaft und Dienstleistungen, Typ Dienstleistungen", "Gestaltung und Kunst",
        "Gesundheit und Soziales"],
      coverage: "unmapped",
      note: "Fünf Ausrichtungen, zwei Wege, dazu IDAF und IDPA. Jede Ausrichtung hat eigene "
        + "Schwerpunkte und eigene Prüfungsanforderungen.",
      source: "sbfi-rlp-bm-2025" },
    { id: "ebmp", label: "Eidgenössische Berufsmaturitätsprüfung",
      full: "Eidgenössische Berufsmaturitätsprüfung", authority: "SBFI",
      framework: "Richtlinien EBMP", scope: "national",
      tracks: ["nach Ausrichtung"], coverage: "unmapped",
      note: "Externe Prüfung nach dem BM-Kompetenzrahmen, ausrichtungsspezifische Anforderungen.",
      source: "sbfi-ebmp" },
    { id: "fms-2018", label: "Fachmittelschule und Fachmaturität",
      full: "Fachmittelschule, Fachmittelschulausweis und Fachmaturität", authority: "EDK",
      framework: "Rahmenlehrplan 2018", scope: "national-core",
      tracks: ["Pädagogik", "Gesundheit", "Soziale Arbeit", "Kommunikation und Information",
        "Gestaltung und Kunst", "Musik/Theater", "Angewandte Psychologie"],
      coverage: "unmapped",
      note: "Nationale Anerkennung über die EDK, Umsetzung über kantonale Lehrpläne.",
      source: "edk-rlp-fms-2018" },
  ];

  M.SOURCE_REGISTRY = {
    "sbfi-passerelle-2023": { title: "Ergänzungsprüfung Passerelle, Richtlinien 2023",
      authority: "Staatssekretariat für Bildung, Forschung und Innovation", verified: "2026-09-12" },
    "edk-rlp-gym-2024": { title: "Rahmenlehrplan für die Maturitätsschulen 2024",
      authority: "Schweizerische Konferenz der kantonalen Erziehungsdirektoren", verified: null },
    "sbfi-smp": { title: "Richtlinien für die schweizerische Maturitätsprüfung",
      authority: "SBFI", verified: null },
    "sbfi-rlp-bm-2025": { title: "Rahmenlehrplan für die Berufsmaturität 2025",
      authority: "SBFI", verified: null },
    "sbfi-ebmp": { title: "Richtlinien eidgenössische Berufsmaturitätsprüfung",
      authority: "SBFI", verified: null },
    "edk-rlp-fms-2018": { title: "Rahmenlehrplan für Fachmittelschulen 2018",
      authority: "EDK", verified: null },
  };

  /* Kantone, für die Überlagerung von Schul- und Kantonslehrplänen */
  M.CANTONS = ["AG","AI","AR","BE","BL","BS","FR","GE","GL","GR","JU","LU","NE","NW","OW",
    "SG","SH","SO","SZ","TG","TI","UR","VD","VS","ZG","ZH"];
  /* Berufsmaturität: Wege, Ausrichtungen und interdisziplinäre Arbeiten als Overlay */
  M.PROGRAM_TRACKS = {
    "bm-2025": {
      route: [
        { id: "bm1", label: "BM1, lehrbegleitend" },
        { id: "bm2", label: "BM2, nach der Lehre" },
      ],
      orientation: [
        { id: "tals", label: "Technik, Architektur und Life Sciences", depth: { math: 3, physics: 3, chemistry: 2 } },
        { id: "nll", label: "Natur, Landschaft und Lebensmittel", depth: { biology: 3, chemistry: 3, geography: 2 } },
        { id: "wd-w", label: "Wirtschaft und Dienstleistungen, Typ Wirtschaft", depth: { math: 2, german: 3, english: 3 } },
        { id: "wd-d", label: "Wirtschaft und Dienstleistungen, Typ Dienstleistungen", depth: { math: 2, german: 3, english: 2 } },
        { id: "gk", label: "Gestaltung und Kunst", depth: { german: 3, history: 2 } },
        { id: "gs", label: "Gesundheit und Soziales", depth: { biology: 3, chemistry: 2, german: 3 } },
      ],
      interdisciplinary: [
        { id: "idaf", label: "IDAF, interdisziplinäres Arbeiten in den Fächern" },
        { id: "idpa", label: "IDPA, interdisziplinäre Projektarbeit" },
      ],
    },
    "gym-maturitaet-2024": { scope: [{ id: "national", label: "Nationaler Kern" },
      { id: "canton", label: "Kantonaler Lehrplan" }, { id: "school", label: "Schullehrplan" }] },
    "fms-2018": { profile: [{ id: "paed", label: "Pädagogik" }, { id: "gesundheit", label: "Gesundheit" },
      { id: "sozial", label: "Soziale Arbeit" }, { id: "komm", label: "Kommunikation und Information" },
      { id: "gestaltung", label: "Gestaltung und Kunst" }, { id: "musik", label: "Musik und Theater" },
      { id: "psych", label: "Angewandte Psychologie" }] },
  };
  M.tracksFor = function (pid) { return M.PROGRAM_TRACKS[pid || M.activeProgram()] || {}; };
  M.trackChoice = function (pid, dim) {
    try { return localStorage.getItem("mnemika-track-" + (pid || M.activeProgram()) + "-" + dim) || ""; }
    catch (e) { return ""; }
  };
  M.setTrack = function (pid, dim, val) {
    try { localStorage.setItem("mnemika-track-" + pid + "-" + dim, val); } catch (e) {}
  };
  M.CANTON_OVERLAYS = {};   // wird befüllt, sobald ein Kantonslehrplan ausgewertet ist
  M.SCHOOL_OVERLAYS = {};

  M.SESSIONS = {
    "passerelle-2023": "Wintersession 2027",
    "gym-maturitaet-2024": "", "smp": "", "bm-2025": "", "ebmp": "", "fms-2018": "",
  };
  M.program = function (id) { return M.PROGRAMS.filter(function (p) { return p.id === id; })[0] || null; };
  M.activeProgram = function () {
    try { return localStorage.getItem("mnemika-program") || "passerelle-2023"; }
    catch (e) { return "passerelle-2023"; }
  };
  M.setProgram = function (id) {
    try { localStorage.setItem("mnemika-program", id); } catch (e) {}
    if (M.paintShell) M.paintShell();      // Pille sofort mitziehen, nicht erst beim nächsten Aufbau
  };
  /* Nur abgebildete Programme liefern Inhalt. Sonst wird das offen gesagt. */
  /* Vier unabhängige Dimensionen. "Nicht abgebildet" heisst nie "kein Inhalt". */
  M.programState = function (id) {
    var p = M.program(id || M.activeProgram());
    if (!p) return null;
    var verified = p.coverage === "mapped";
    return {
      contentAccess: "SHARED_CORE_AVAILABLE",
      officialRequirement: verified ? "VERIFIED" : "UNKNOWN",
      officialMappingStatus: verified ? "VERIFIED" : "UNVERIFIED",
      readinessEligible: verified,
    };
  };
  /* Nur für offizielle Bereitschaft, nie für Inhaltszugang */
  M.programMapped = function (id) { return M.programState(id).readinessEligible; };
  M.contentAvailable = function () { return true; };
  M.COVERAGE_LABEL = { mapped: "abgebildet", "unmapped": "Lehrplan noch nicht abgebildet",
    partial: "teilweise abgebildet" };
})();
(function () {
  "use strict";
  var M = window.MNEMIKA;
  /* Sechs getrennte Listen statt einer Abdeckungsflagge.
     Nur verifizierte Zuordnungen dürfen in die offizielle Bereitschaft. */
  M.MODULE_STATES = ["VERIFIED_REQUIRED", "VERIFIED_OPTIONAL", "PROVISIONAL_OVERLAP",
    "SHARED_FOUNDATION", "NOT_APPLICABLE", "UNKNOWN"];
  M.READINESS_STATES = ["VERIFIED_REQUIRED", "VERIFIED_OPTIONAL"];

  M.overlay = function (pid) {
    var p = M.program(pid || M.activeProgram());
    if (!p) return null;
    var verifiedSource = !!(M.SOURCE_REGISTRY[p.source] || {}).verified;
    var mapped = (M.CURRICULUM_MAPPINGS[p.id] || []);
    var req = [], opt = [];
    mapped.forEach(function (m) {
      if (!verifiedSource) return;                 // ohne geprüfte Quelle nichts als verifiziert führen
      (m.requirement === "required" ? req : opt).push(m.outcomeId);
    });
    var reqSet = {}; req.concat(opt).forEach(function (id) { reqSet[id] = 1; });
    var provisional = M.LEARNING_OUTCOMES
      .filter(function (o) { return !reqSet[o.id]; })
      .map(function (o) { return o.id; });
    var cur = M.curriculum(p.id) || { subjects: {} };
    var shared = M.chapters
      .filter(function (c) { return (cur.subjects[c.subject] || {}).relevance !== "na"; })
      .map(function (c) { return c.id; });
    var gaps = [];
    if (!verifiedSource) gaps.push({ id: "gap-source-" + p.id, kind: "SOURCE_NOT_VERIFIED",
      source: p.source, effect: "Offizielle Bereitschaft nicht berechenbar" });
    if (!req.length) gaps.push({ id: "gap-required-" + p.id, kind: "NO_VERIFIED_REQUIREMENTS",
      effect: "Pflichtumfang dieses Abschlusses ist nicht abgebildet" });
    var local = [];
    if (p.scope === "national-core") {
      local.push({ id: "overlay-canton-" + p.id, kind: "CANTON_OVERLAY_REQUIRED" });
      local.push({ id: "overlay-school-" + p.id, kind: "SCHOOL_OVERLAY_REQUIRED" });
    }
    var tr = M.tracksFor(p.id);
    Object.keys(tr).forEach(function (dim) {
      if (dim !== "interdisciplinary" && !M.trackChoice(p.id, dim)) {
        local.push({ id: "overlay-" + dim + "-" + p.id, kind: "SELECTION_PENDING", dimension: dim });
      }
    });
    return {
      programme: p.id,
      verifiedRequiredOutcomeIds: req,
      verifiedOptionalOutcomeIds: opt,
      provisionalOverlapOutcomeIds: provisional,
      sharedAvailableModuleIds: shared,
      knownProgrammeGapIds: gaps,
      localOverlayRequirements: local,
      officialReadinessCalculable: verifiedSource && req.length > 0,
    };
  };
  /* Zustand je Modul, damit das Dashboard nichts behaupten muss */
  M.moduleState = function (chapterId, pid) {
    var p = pid || M.activeProgram();
    var ov = M.overlay(p);
    if (!ov) return "UNKNOWN";
    var cur = M.curriculum(p) || { subjects: {} };
    var c = M.chapter(chapterId);
    if (!c) return "UNKNOWN";
    var rel = (cur.subjects[c.subject] || {}).relevance;
    if (rel === "na") return "NOT_APPLICABLE";
    var oc = M.outcomesForChapter(chapterId).map(function (o) { return o.id; });
    if (oc.some(function (id) { return ov.verifiedRequiredOutcomeIds.indexOf(id) >= 0; })) return "VERIFIED_REQUIRED";
    if (oc.some(function (id) { return ov.verifiedOptionalOutcomeIds.indexOf(id) >= 0; })) return "VERIFIED_OPTIONAL";
    if (oc.length) return "PROVISIONAL_OVERLAP";
    return rel ? "SHARED_FOUNDATION" : "UNKNOWN";
  };
  /* Offizielle Bereitschaft nur aus verifizierten Zuordnungen, sonst null */
  M.officialReadiness = function (pid) {
    var ov = M.overlay(pid);
    if (!ov || !ov.officialReadinessCalculable) return null;
    var ids = ov.verifiedRequiredOutcomeIds;
    if (!ids.length) return null;
    return { requiredOutcomes: ids.length, basis: "verified mappings only" };
  };
})();

/* Sprachen. Eine Datei pro Sprache, ein Schlüssel je Text.
   Eine weitere Sprache hinzufügen heisst: M.I18N.xx = {...} ergänzen und
   in M.LOCALES eintragen. Fehlt ein Schlüssel, greift Deutsch. */
(function () {
  "use strict";
  var M = window.MNEMIKA;

  /* Sprachen mit Reifegrad. EN und FR erscheinen erst, wenn der Inhalt
     vollständig übersetzt ist, sonst nur in der Vorschau. */
  M.ALL_LOCALES = [
    { id: "de", label: "Deutsch", short: "DE", htmlLang: "de-CH", ready: true },
    { id: "en", label: "English", short: "EN", htmlLang: "en-GB", ready: false },
    { id: "fr", label: "Français", short: "FR", htmlLang: "fr-CH", ready: false },
  ];
  /* PUBLIC_BUILD wird beim Bauen gesetzt. Im öffentlichen Stand gibt es
     weder Sprachumschaltung noch Laufzeitübersetzung. Deutsch, deterministisch. */
  M.PUBLIC_BUILD = (typeof MNEMIKA_PUBLIC !== "undefined") ? !!MNEMIKA_PUBLIC : false;
  M.TRANSLATION_PREVIEW = !M.PUBLIC_BUILD && /[?&]translation-preview=1/.test(location.search);
  /* Fertig heisst: kein fehlender Datensatz in dieser Sprache. */
  /* Fertig heisst: entweder ist alles gepflegt übersetzt, oder das Gerät
     kann den Rest selbst übersetzen. Beides ergibt vollständige Inhalte. */
  M.localeReady = function (id) {
    if (id === "de") return true;
    if (M.PUBLIC_BUILD) return false;                 // öffentlich: nur Deutsch
    var a = M.contentAudit ? M.contentAudit() : null;
    if (a && (id === "en" ? a.missingEnglish : a.missingFrench) === 0) return true;
    return !!(M.mtSupported && M.mtSupported());
  };
  M.availableLocales = function () {
    return M.ALL_LOCALES.filter(function (l) {
      return l.id === "de" || M.localeReady(l.id) || M.TRANSLATION_PREVIEW;
    });
  };
  M.LOCALES = M.ALL_LOCALES;

  M.I18N = {
    de: {
      "card.adaptive.t": "Adaptives Training", "card.adaptive.d": "Unsichere, fällige und neue Aufgaben, gemischt nach deinem Stand.",
      "card.games.t": "Spielmodus", "card.games.d": "Tempo-Sprint, Fachduell und Fehlerjagd.",
      "card.due.t": "Fällige Wiederholung", "card.due.d": "Genau die Aufgaben, deren Intervall abgelaufen ist.",
      "card.cards.t": "Wischkarten", "card.cards.d": "Frage vorn, Antwort hinten. Rechts gewusst, links nochmals.",
      "card.quick.t": "Kurzquiz", "card.quick.d": "Fünf Aufgaben, schnelle Standortbestimmung.",
      "card.chapter.t": "Kapiteltest", "card.chapter.d": "Ein Kapitel vollständig prüfen.",
      "card.exam.t": "Prüfungssimulation", "card.exam.d": "Unter Prüfungsbedingungen, ohne Hilfen.",
      "card.understand.t": "Etwas verstehen", "card.consolidate.t": "Wissen festigen", "card.check.t": "Stand prüfen",
      "unit.due": "fällig", "unit.cards": "Karten", "unit.min": "Minuten",
      "path.understand.t":"Verstehen","path.understand.d":"Baue ein Thema Schritt für Schritt auf.",
      "path.consolidate.t":"Festigen","path.consolidate.d":"Übe gezielt dort, wo du noch unsicher bist.",
      "path.check.t":"Prüfen","path.check.d":"Finde heraus, was unter Prüfungsbedingungen sitzt.",
      "stat.mastery":"Beherrschung","stat.due":"Fällige Wiederholungen","stat.days":"Tage bis zur Prüfung","stat.streak":"Tage Serie",
      "unit.tasks":"Aufgaben","rec.due.h":"Fällige Wiederholungen","rec.about":"rund",
      "cta.start":"Jetzt starten","cta.chapter":"Kapitel öffnen","cta.quiz":"Kurzquiz starten",
      "unit.chapters":"Kapitel","unit.sure":"sicher","meta.5to20":"5 bis 20 Minuten","meta.about4":"rund 4 Minuten","meta.10to20":"10 bis 20 Aufgaben","meta.30":"30 Aufgaben","meta.nograde":"ohne Einfluss auf die Bewertung","meta.nomark":"keine Note",
      "unit.dueadj":"fällige",
      "dash.eyebrow": "Abschluss",
      "dim.content": "Inhalt",
      "dim.available": "Gemeinsamer Bestand verfügbar",
      "dim.mapping": "Lehrplanabgleich",
      "dim.verified": "geprüft",
      "dim.unverified": "noch nicht geprüft",
      "dim.readiness": "Offizielle Bereitschaft",
      "dim.countable": "zählbar",
      "dim.notcountable": "erst nach Prüfung der Quelle",
      "dim.authority": "Behörde",
      "dash.track": "Dein Weg in diesem Abschluss",
      "dash.route": "Weg",
      "dash.orient": "Ausrichtung",
      "dash.profile": "Profil",
      "dash.scope": "Geltungsebene",
      "dash.idw": "Interdisziplinär",
      "dash.s1": "Geprüfte Anforderungen",
      "dash.s1ok": "Lernziele sind gegen die offizielle Quelle geprüft und zählen für die Bereitschaft.",
      "dash.s1no": "Für diesen Abschluss ist noch kein Lernziel gegen die offizielle Quelle geprüft. Nichts hier zählt bisher als offizielle Bereitschaft.",
      "dash.s2": "Gemeinsamer Bestand, jetzt nutzbar",
      "dash.s2t": "Kapitel aus acht Fächern stehen unabhängig vom Abgleich offen.",
      "dash.outcomes": "Lernziele",
      "dash.s3": "Vorläufige Überschneidungen",
      "dash.s3t": "Lernziele sind fachlich einschlägig, aber für diesen Abschluss noch nicht bestätigt. Du kannst sie lernen, sie zählen noch nicht.",
      "dash.prov": "vorläufig",
      "dash.s4": "Fehlende abschlussspezifische Anforderungen",
      "dash.s4ok": "Keine offenen Punkte bekannt.",
      "dash.s4no": "Unbekannt, solange der Lehrplan nicht ausgewertet ist. Es kann Fächer und Anforderungen geben, die hier fehlen.",
      "dash.s5": "Kanton, Schule oder Ausrichtung",
      "dash.s5core": "Der nationale Kern ist kein vollständiger lokaler Lehrplan. Kanton und Schule ergänzen ihn eigenständig.",
      "dash.s5nat": "Dieser Abschluss ist national geregelt. Eine kantonale Ergänzung ist nicht vorgesehen.",
      "dash.src": "Quelle",
      "dash.srcok": "geprüft am",
      "dash.srcblocked": "Dokument nicht abgerufen, Status SOURCE_BLOCKED",
      "dash.plan": "Lernplan öffnen",
      "dash.practice": "Üben",
      "dash.diag": "Standortbestimmung",
      "dash.switch": "Abschluss wechseln",
      "plan.title": "Dein Lernplan",
      "plan.empty": "Noch keine Ziele gewählt. Öffne ein Lernziel und nimm es in den Plan auf.",
      "plan.all": "Alle Lernziele dieses Abschlusses",
      "plan.inplan": "im Plan",
      "plan.done": "erreicht",
      "plan.perweek": "Min/Woche",
      "plan.until": "bis",
      "oc.official": "Lernziel nach amtlicher Vorgabe",
      "oc.fixed": "Vorgegeben und nicht veränderbar. Quelle:",
      "oc.mine": "Dein persönliches Ziel",
      "oc.prio": "Priorität",
      "oc.due": "Zieldatum",
      "oc.weekly": "Wöchentliche Lernzeit in Minuten",
      "oc.note": "Persönliche Notiz",
      "oc.add": "Zum Lernplan hinzufügen",
      "oc.inplan": "Im Lernplan",
      "oc.pause": "Pausieren",
      "oc.resume": "Fortsetzen",
      "oc.done": "Als erreicht markieren",
      "oc.isdone": "Erreicht",
      "oc.reset": "Auf Vorgabe zurücksetzen",
      "oc.impact": "Dein Lernplan umfasst",
      "oc.impact2": "Ziele, rund",
      "oc.impactnone": "Noch kein Ziel im Lernplan.",
      "prio.normal": "normal",
      "prio.important": "wichtig",
      "prio.urgent": "dringend",
      "cur.canton":"Kanton","cur.depth":"Tiefe","cur.adj":"nach Wahl angepasst",
      "prog.title": "Welchen Abschluss bereitest du vor?",
      "prog.lead": "Die Lerninhalte liegen als gemeinsamer Bestand vor und werden je Abschluss unterschiedlich gewichtet und geprüft. Wo ein Lehrplan noch nicht ausgewertet ist, steht das hier offen.",
      "prog.why": "Warum nicht einfach alles anbieten",
      "prog.tracks": "Ausrichtungen bzw. Wege:",
      "plan.week": "je Woche",
      "oc.can": "Nach dieser Einheit kannst du",
      "oc.cond": "Unter diesen Bedingungen",
      "oc.proof": "Dein Nachweis",
      "oc.done2": "Beherrscht, wenn",
      "oc.rel": "Relevant für",
      "set.title": "Einstellungen",
      "wc.eyebrow": "Lernen für Schweizer Abschlüsse",
      "wc.head": "Ein Wissenskern. Viele Wege zum Abschluss.",
      "wc.body": "Stoffknacker erklärt, übt und prüft Lernstoff passend zu deinem Abschluss. Viele Grundlagen überschneiden sich. Dein gewählter Abschluss bestimmt die erforderliche Tiefe, den Pflichtstoff und die Prüfungsform. Wähle deine Sprache und deinen Abschluss. Stoffknacker erstellt daraus deinen persönlichen Lernplan.",
      "wc.clar": "Du kannst den gemeinsamen Lernstoff sofort nutzen. Nur offiziell verifizierte Zuordnungen zählen zur ausgewiesenen Prüfungsbereitschaft.",
      "wc.s1t": "Abschluss wählen",
      "wc.s1d": "Wähle deinen Bildungsweg, deine Ausrichtung und dein Zieldatum.",
      "wc.s2t": "Gemeinsamen Lernkern nutzen",
      "wc.s2d": "Lerne Grundlagen nur einmal. Dein Fortschritt bleibt über Abschlüsse und Sprachen hinweg erhalten.",
      "wc.s3t": "Prüfungsbereit werden",
      "wc.s3d": "Stoffknacker ergänzt die programmeigenen Anforderungen und zeigt offen, welche Zuordnungen offiziell verifiziert sind.",
      "wc.core": "Ein gemeinsamer Lernkern",
      "wc.coretext": "Die Abschlüsse nutzen teilweise denselben Lernstoff. Unterschiede liegen in Tiefe, Pflichtumfang, lokalen Vorgaben und Prüfungsform.",
      "wc.pick": "Abschluss wählen",
      "wc.select": "Auswählen",
      "wc.selected": "Ausgewählt",
      "wc.more": "Weitere Abschlüsse",
      "wc.moretext": "Die Plattform ist modular aufgebaut. Weitere Schweizer Abschlüsse, Aufnahmeprüfungen und kantonale Profile können als zusätzliche Overlays ergänzt werden.",
      "wc.cta": "Lernplan erstellen",
      "wc.lang": "Sprache",
      "wc.howto": "So funktioniert Stoffknacker",
      "wc.search": "Abschluss suchen",
      "wc.allcat": "Alle Kategorien",
      "wc.sum": "Deine Auswahl",
      "wc.sumsub": "Verfügbare Fächer",
      "wc.sumfirst": "Erster Lernschritt",
      "state.core": "Gemeinsamer Lernkern verfügbar",
      "state.verified": "Offizielle Zuordnung verifiziert",
      "state.partly": "Offizielle Zuordnung teilweise verifiziert",
      "state.review": "Offizielle Zuordnung in Prüfung",
      "state.canton": "Kantonale Ergänzung erforderlich",
      "state.school": "Schulische Ergänzung erforderlich",
      "cat.hochschulzugang": "Hochschulzugang",
      "cat.mittelschule": "Mittelschule",
      "cat.berufsbildung": "Berufsbildung",
      "cat.externe-pruefung": "Externe Prüfung",
      "cat.weitere": "Weitere",
      "dash.blocks": "Lernblöcke",
      "sup.optional": "optional",
      "sup.needall": "Wähle die offenen Punkte, dann kannst du den Lernplan erstellen.",
      "set.chprog": "Abschluss wechseln",
      "set.chlang": "Lernsprache wechseln",
      "set.rerun": "Einrichtung erneut ausführen",
      "sup.dateh": "Tag.Monat.Jahr",
      "date.day": "Tag",
      "date.month": "Monat",
      "date.year": "Jahr",
      "date.incomplete": "Tag, Monat und Jahr wählen",
      "bk.title": "Lernstand sichern",
      "bk.lead": "Der Lernstand liegt nur in diesem Browser. Sichere ihn als Datei, bevor du das Gerät wechselst.",
      "bk.export": "Lernstand exportieren",
      "bk.import": "Lernstand importieren",
      "bk.importh": "Nur JSON aus diesem Export. Die Datei wird geprüft, bevor etwas ersetzt wird.",
      "bk.reset": "Lernstand zurücksetzen",
      "bk.reseth": "Setzt Fortschritt, Plan und Einrichtung zurück. Vorher wird automatisch gesichert.",
      "bk.bad": "Datei abgewiesen",
      "bk.replace": "Ersetzen",
      "bk.cancel": "Abbrechen",
      "bk.written": "Datensätze geschrieben",
      "bk.date": "Exportdatum",
      "bk.keys": "Datensätze",
      "bk.schema": "Schema",
      "bk.confirm": "Lernstand wirklich zurücksetzen? Eine Sicherung wird angelegt.",
      "dash.examples": "Beispiele",
      "dim.available2": "nutzbar",
      "ms.VERIFIED_REQUIRED": "geprüft, Pflicht",
      "ms.VERIFIED_OPTIONAL": "geprüft, Wahl",
      "ms.PROVISIONAL_OVERLAP": "vorläufige Überschneidung",
      "ms.SHARED_FOUNDATION": "gemeinsame Grundlage",
      "ms.NOT_APPLICABLE": "nicht Teil",
      "ms.UNKNOWN": "offen",
      "dim.notcalculable": "nicht berechenbar",
      "prac.bysubject": "Nach Fach üben",
      "learn.bysubject": "Nach Fach lernen",
      "test.bysubject": "Nach Fach testen",
      "all.subjects": "Alle Fächer",
      "your.subjects": "Deine Fächer",
      "rec.today": "Heute empfohlen",
      "what.counts": "Was jetzt zählt",
      "due.tasks": "Fällige Aufgaben",
      "st.eyebrow": "Selbsttest",
      "st.of": "von",
      "st.ok": "Prüfungen bestanden",
      "st.build": "Fassung",
      "st.lead": "Dieser Test läuft in deinem Browser mit dieser Datei. Was hier rot ist, funktioniert bei dir nicht.",
      "dash.open": "Dashboard öffnen",
      "plan.weeks": "Wochen",
      "nav.start": "Start", "nav.today": "Heute", "nav.today.desktop": "Heute lernen", "nav.subjects": "Fächer", "nav.life": "Leben", "nav.life.desktop": "Schule fürs Leben", "nav.learn": "Lernen", "nav.practice": "Üben",
      "nav.test": "Testen", "nav.repeat": "Wiederholen",
      "nav.progress": "Fortschritt", "nav.more": "Mehr", "nav.exams": "Prüfungen",
      "brand.tagline": "Schwieriger Stoff. Verständlich erklärt. Kostenlos für Schweizer Abschlüsse.",
      "brand.free": "Vollständig kostenlos",
      "brand.what": "Stoffknacker erklärt den Prüfungsstoff Kapitel für Kapitel, prüft dein Verständnis "
        + "und plant die Wiederholung. Ohne Konto, derzeit ohne Werbung, ohne Datenübertragung.",
      "brand.local": "Lernstand bleibt im Browser",
      "lang.label": "Sprache", "lang.switch": "Sprache wechseln",
      "lang.uiOnly": "Bedienoberfläche", "lang.contentDe": "",
      "content.onlyGerman": ""
        + "Die Bedienoberfläche ist übersetzt.",
      "program.title": "Welchen Abschluss bereitest du vor?",
      "program.mapped": "abgebildet", "program.unmapped": "Lehrplan noch nicht abgebildet",
      "common.minutes": "Minuten", "common.chapters": "Kapitel", "common.open": "Öffnen",
      "common.start": "Starten", "common.back": "Zurück",
    },
    en: {
      "card.adaptive.t": "Adaptive practice", "card.adaptive.d": "Uncertain, due and new questions, mixed to match where you stand.",
      "card.games.t": "Game mode", "card.games.d": "Speed sprint, subject duel and error hunt.",
      "card.due.t": "Due review", "card.due.d": "Exactly the questions whose interval has elapsed.",
      "card.cards.t": "Flashcards", "card.cards.d": "Question front, answer back. Right if known, left to repeat.",
      "card.quick.t": "Quick quiz", "card.quick.d": "Five questions, a fast check of where you are.",
      "card.chapter.t": "Chapter test", "card.chapter.d": "Test one chapter in full.",
      "card.exam.t": "Exam simulation", "card.exam.d": "Under examination conditions, no help.",
      "card.understand.t": "Understand something", "card.consolidate.t": "Consolidate knowledge", "card.check.t": "Check where you stand",
      "unit.due": "due", "unit.cards": "cards", "unit.min": "minutes",
      "path.understand.t":"Understand","path.understand.d":"Build a topic up step by step.",
      "path.consolidate.t":"Consolidate","path.consolidate.d":"Practise exactly where you are still unsure.",
      "path.check.t":"Check","path.check.d":"Find out what holds under examination conditions.",
      "stat.mastery":"Mastery","stat.due":"Reviews due","stat.days":"Days to the exam","stat.streak":"Day streak",
      "unit.tasks":"questions","rec.due.h":"Reviews due","rec.about":"about",
      "cta.start":"Start now","cta.chapter":"Open chapter","cta.quiz":"Start quick quiz",
      "unit.chapters":"chapters","unit.sure":"secure","meta.5to20":"5 to 20 minutes","meta.about4":"about 4 minutes","meta.10to20":"10 to 20 questions","meta.30":"30 questions","meta.nograde":"no effect on marking","meta.nomark":"no grade",
      "unit.dueadj":"due",
      "dash.eyebrow": "Qualification",
      "dim.content": "Content",
      "dim.available": "Shared core available",
      "dim.mapping": "Curriculum check",
      "dim.verified": "verified",
      "dim.unverified": "not yet verified",
      "dim.readiness": "Official readiness",
      "dim.countable": "countable",
      "dim.notcountable": "only after the source is checked",
      "dim.authority": "Authority",
      "dash.track": "Your route in this qualification",
      "dash.route": "Route",
      "dash.orient": "Orientation",
      "dash.profile": "Profile",
      "dash.scope": "Scope",
      "dash.idw": "Interdisciplinary",
      "dash.s1": "Verified requirements",
      "dash.s1ok": "learning outcomes are checked against the official source and count toward readiness.",
      "dash.s1no": "No learning outcome has yet been checked against the official source for this qualification. Nothing here counts as official readiness so far.",
      "dash.s2": "Shared core, available now",
      "dash.s2t": "chapters across eight subjects are open regardless of the curriculum check.",
      "dash.outcomes": "outcomes",
      "dash.s3": "Provisional overlaps",
      "dash.s3t": "learning outcomes are subject-relevant but not yet confirmed for this qualification. You can study them; they do not count yet.",
      "dash.prov": "provisional",
      "dash.s4": "Missing qualification-specific requirements",
      "dash.s4ok": "No open items known.",
      "dash.s4no": "Unknown while the curriculum has not been evaluated. There may be subjects and requirements missing here.",
      "dash.s5": "Canton, school or orientation",
      "dash.s5core": "The national core is not a complete local curriculum. Cantons and schools extend it independently.",
      "dash.s5nat": "This qualification is regulated nationally. No cantonal extension applies.",
      "dash.src": "Source",
      "dash.srcok": "checked on",
      "dash.srcblocked": "document not retrieved, status SOURCE_BLOCKED",
      "dash.plan": "Open learning plan",
      "dash.practice": "Practise",
      "dash.diag": "Diagnostic",
      "dash.switch": "Change qualification",
      "plan.title": "Your learning plan",
      "plan.empty": "No goals chosen yet. Open a learning outcome and add it to your plan.",
      "plan.all": "All learning outcomes of this qualification",
      "plan.inplan": "in plan",
      "plan.done": "achieved",
      "plan.perweek": "min/week",
      "plan.until": "until",
      "oc.official": "Learning outcome based on official requirements",
      "oc.fixed": "Prescribed and not editable. Source:",
      "oc.mine": "Your personal goal",
      "oc.prio": "Priority",
      "oc.due": "Target date",
      "oc.weekly": "Weekly study time in minutes",
      "oc.note": "Personal note",
      "oc.add": "Add to learning plan",
      "oc.inplan": "In learning plan",
      "oc.pause": "Pause",
      "oc.resume": "Resume",
      "oc.done": "Mark as achieved",
      "oc.isdone": "Achieved",
      "oc.reset": "Reset to default",
      "oc.impact": "Your learning plan holds",
      "oc.impact2": "goals, about",
      "oc.impactnone": "No goal in the learning plan yet.",
      "prio.normal": "normal",
      "prio.important": "important",
      "prio.urgent": "urgent",
      "cur.canton":"Canton","cur.depth":"Depth","cur.adj":"adjusted by your choice",
      "prog.title": "Which qualification are you preparing for?",
      "prog.lead": "The learning content exists once as a shared core and is weighted and examined differently per qualification. Where a curriculum has not been evaluated, that is stated openly here.",
      "prog.why": "Why not simply offer everything",
      "prog.tracks": "orientations or routes:",
      "plan.week": "per week",
      "oc.can": "After this unit you can",
      "oc.cond": "Under these conditions",
      "oc.proof": "Your evidence",
      "oc.done2": "Mastered when",
      "oc.rel": "Relevant for",
      "set.title": "Settings",
      "wc.eyebrow": "Learning for Swiss qualifications",
      "wc.head": "One knowledge core. Many routes to a qualification.",
      "wc.body": "Stoffknacker explains, practises and tests content at the level required by your qualification. Many foundations overlap. Your selected qualification determines the required depth, compulsory content and assessment format. Choose your language and qualification. Stoffknacker then builds your personal learning plan.",
      "wc.clar": "You can use the shared learning core immediately. Only officially verified mappings count towards displayed examination readiness.",
      "wc.s1t": "Choose your qualification",
      "wc.s1d": "Pick your educational route, your orientation and your target date.",
      "wc.s2t": "Use the shared learning core",
      "wc.s2d": "Learn the foundations once. Your progress is kept across qualifications and languages.",
      "wc.s3t": "Become exam-ready",
      "wc.s3d": "Stoffknacker adds the programme-specific requirements and states openly which mappings are officially verified.",
      "wc.core": "One shared learning core",
      "wc.coretext": "The qualifications share parts of the same content. They differ in depth, compulsory scope, local requirements and assessment format.",
      "wc.pick": "Choose your qualification",
      "wc.select": "Select",
      "wc.selected": "Selected",
      "wc.more": "More qualifications",
      "wc.moretext": "The platform is modular. Further Swiss qualifications, entrance examinations and cantonal profiles can be added as additional overlays.",
      "wc.cta": "Build my learning plan",
      "wc.lang": "Language",
      "wc.howto": "How Stoffknacker works",
      "wc.search": "Search qualifications",
      "wc.allcat": "All categories",
      "wc.sum": "Your selection",
      "wc.sumsub": "Available subjects",
      "wc.sumfirst": "First learning step",
      "state.core": "Shared learning core available",
      "state.verified": "Official mapping verified",
      "state.partly": "Official mapping partly verified",
      "state.review": "Official mapping under review",
      "state.canton": "Cantonal overlay required",
      "state.school": "School overlay required",
      "cat.hochschulzugang": "University access",
      "cat.mittelschule": "Upper secondary school",
      "cat.berufsbildung": "Vocational education",
      "cat.externe-pruefung": "External examination",
      "cat.weitere": "Further",
      "dash.blocks": "learning blocks",
      "sup.optional": "optional",
      "sup.needall": "Choose the open items, then you can build your learning plan.",
      "set.chprog": "Change qualification",
      "set.chlang": "Change learning language",
      "set.rerun": "Run setup again",
      "sup.dateh": "Day/Month/Year",
      "date.day": "Day",
      "date.month": "Month",
      "date.year": "Year",
      "date.incomplete": "Choose day, month and year",
      "bk.title": "Back up your progress",
      "bk.lead": "Your progress lives only in this browser. Save it as a file before you change device.",
      "bk.export": "Export progress",
      "bk.import": "Import progress",
      "bk.importh": "JSON from this export only. The file is validated before anything is replaced.",
      "bk.reset": "Reset progress",
      "bk.reseth": "Resets progress, plan and setup. A backup is written first.",
      "bk.bad": "File rejected",
      "bk.replace": "Replace",
      "bk.cancel": "Cancel",
      "bk.written": "records written",
      "bk.date": "Export date",
      "bk.keys": "records",
      "bk.schema": "Schema",
      "bk.confirm": "Really reset your progress? A backup will be written.",
      "dash.examples": "Worked examples",
      "dim.available2": "available",
      "ms.VERIFIED_REQUIRED": "verified, required",
      "ms.VERIFIED_OPTIONAL": "verified, optional",
      "ms.PROVISIONAL_OVERLAP": "provisional overlap",
      "ms.SHARED_FOUNDATION": "shared foundation",
      "ms.NOT_APPLICABLE": "not applicable",
      "ms.UNKNOWN": "unknown",
      "dim.notcalculable": "not calculable",
      "prac.bysubject": "Practise by subject",
      "learn.bysubject": "Learn by subject",
      "test.bysubject": "Test by subject",
      "all.subjects": "All subjects",
      "your.subjects": "Your subjects",
      "rec.today": "Recommended today",
      "what.counts": "What counts now",
      "due.tasks": "Due tasks",
      "st.eyebrow": "Self-test",
      "st.of": "of",
      "st.ok": "checks passed",
      "st.build": "Build",
      "st.lead": "This test runs in your browser against this file. Anything red here does not work on your machine.",
      "dash.open": "Open dashboard",
      "plan.weeks": "weeks",
      "nav.start": "Home", "nav.today": "Today", "nav.today.desktop": "Learn today", "nav.subjects": "Subjects", "nav.life": "Life", "nav.life.desktop": "School for life", "nav.learn": "Learn", "nav.practice": "Practise",
      "nav.test": "Test", "nav.repeat": "Review",
      "nav.progress": "Progress", "nav.more": "More", "nav.exams": "Exams",
      "brand.tagline": "Tough material, clearly explained. Free for Swiss qualifications.",
      "brand.free": "Completely free",
      "brand.what": "Stoffknacker explains the examination material chapter by chapter, checks your "
        + "understanding and schedules revision. No account, no advertising, no data leaves your device.",
      "brand.local": "Your progress stays in the browser",
      "lang.label": "Language", "lang.switch": "Change language",
      "lang.uiOnly": "Interface", "lang.contentDe": "Content: German",
      "content.onlyGerman": "The learning content is currently available in German only. "
        + "The interface is translated.",
      "program.title": "Which qualification are you preparing for?",
      "program.mapped": "mapped", "program.unmapped": "curriculum not yet mapped",
      "common.minutes": "minutes", "common.chapters": "chapters", "common.open": "Open",
      "common.start": "Start", "common.back": "Back",
    },
    fr: {
      "card.adaptive.t": "Entraînement adaptatif", "card.adaptive.d": "Questions incertaines, dues et nouvelles, selon votre niveau.",
      "card.games.t": "Mode jeu", "card.games.d": "Sprint, duel de branche et chasse aux erreurs.",
      "card.due.t": "Révision due", "card.due.d": "Exactement les questions dont l'intervalle est écoulé.",
      "card.cards.t": "Cartes", "card.cards.d": "Question devant, réponse derrière. À droite si su, à gauche pour répéter.",
      "card.quick.t": "Quiz rapide", "card.quick.d": "Cinq questions, un point rapide.",
      "card.chapter.t": "Test de chapitre", "card.chapter.d": "Évaluer un chapitre en entier.",
      "card.exam.t": "Simulation d'examen", "card.exam.d": "En conditions d'examen, sans aide.",
      "card.understand.t": "Comprendre", "card.consolidate.t": "Consolider", "card.check.t": "Faire le point",
      "unit.due": "dues", "unit.cards": "cartes", "unit.min": "minutes",
      "path.understand.t":"Comprendre","path.understand.d":"Construisez un sujet étape par étape.",
      "path.consolidate.t":"Consolider","path.consolidate.d":"Exercez-vous là où vous êtes encore incertain.",
      "path.check.t":"Vérifier","path.check.d":"Découvrez ce qui tient en conditions d'examen.",
      "stat.mastery":"Maîtrise","stat.due":"Révisions dues","stat.days":"Jours avant l'examen","stat.streak":"Jours de suite",
      "unit.tasks":"questions","rec.due.h":"Révisions dues","rec.about":"environ",
      "cta.start":"Commencer","cta.chapter":"Ouvrir le chapitre","cta.quiz":"Lancer le quiz",
      "unit.chapters":"chapitres","unit.sure":"acquis","meta.5to20":"5 à 20 minutes","meta.about4":"environ 4 minutes","meta.10to20":"10 à 20 questions","meta.30":"30 questions","meta.nograde":"sans effet sur la note","meta.nomark":"sans note",
      "unit.dueadj":"dues",
      "dash.eyebrow": "Diplôme",
      "dim.content": "Contenu",
      "dim.available": "Base commune disponible",
      "dim.mapping": "Vérification du programme",
      "dim.verified": "vérifié",
      "dim.unverified": "pas encore vérifié",
      "dim.readiness": "Préparation officielle",
      "dim.countable": "comptabilisable",
      "dim.notcountable": "seulement après vérification de la source",
      "dim.authority": "Autorité",
      "dash.track": "Votre parcours dans ce diplôme",
      "dash.route": "Voie",
      "dash.orient": "Orientation",
      "dash.profile": "Profil",
      "dash.scope": "Portée",
      "dash.idw": "Interdisciplinaire",
      "dash.s1": "Exigences vérifiées",
      "dash.s1ok": "objectifs sont vérifiés contre la source officielle et comptent pour la préparation.",
      "dash.s1no": "Aucun objectif n'a encore été vérifié contre la source officielle pour ce diplôme. Rien ici ne compte comme préparation officielle.",
      "dash.s2": "Base commune, disponible maintenant",
      "dash.s2t": "chapitres de huit branches sont ouverts indépendamment de la vérification.",
      "dash.outcomes": "objectifs",
      "dash.s3": "Recoupements provisoires",
      "dash.s3t": "objectifs sont pertinents mais pas encore confirmés pour ce diplôme. Vous pouvez les étudier ; ils ne comptent pas encore.",
      "dash.prov": "provisoire",
      "dash.s4": "Exigences spécifiques manquantes",
      "dash.s4ok": "Aucun point ouvert connu.",
      "dash.s4no": "Inconnu tant que le programme n'est pas évalué. Des branches et des exigences peuvent manquer ici.",
      "dash.s5": "Canton, école ou orientation",
      "dash.s5core": "Le socle national n'est pas un programme local complet. Les cantons et les écoles le complètent eux-mêmes.",
      "dash.s5nat": "Ce diplôme est réglé au niveau national. Aucun complément cantonal n'est prévu.",
      "dash.src": "Source",
      "dash.srcok": "vérifié le",
      "dash.srcblocked": "document non récupéré, statut SOURCE_BLOCKED",
      "dash.plan": "Ouvrir le plan",
      "dash.practice": "S'exercer",
      "dash.diag": "Évaluation initiale",
      "dash.switch": "Changer de diplôme",
      "plan.title": "Votre plan d'apprentissage",
      "plan.empty": "Aucun objectif choisi. Ouvrez un objectif et ajoutez-le à votre plan.",
      "plan.all": "Tous les objectifs de ce diplôme",
      "plan.inplan": "dans le plan",
      "plan.done": "atteint",
      "plan.perweek": "min/semaine",
      "plan.until": "jusqu'au",
      "oc.official": "Objectif selon les prescriptions officielles",
      "oc.fixed": "Prescrit et non modifiable. Source :",
      "oc.mine": "Votre objectif personnel",
      "oc.prio": "Priorité",
      "oc.due": "Date cible",
      "oc.weekly": "Temps d'étude hebdomadaire en minutes",
      "oc.note": "Note personnelle",
      "oc.add": "Ajouter au plan",
      "oc.inplan": "Dans le plan",
      "oc.pause": "Mettre en pause",
      "oc.resume": "Reprendre",
      "oc.done": "Marquer comme atteint",
      "oc.isdone": "Atteint",
      "oc.reset": "Rétablir la valeur par défaut",
      "oc.impact": "Votre plan contient",
      "oc.impact2": "objectifs, environ",
      "oc.impactnone": "Aucun objectif dans le plan.",
      "prio.normal": "normale",
      "prio.important": "importante",
      "prio.urgent": "urgente",
      "cur.canton":"Canton","cur.depth":"Profondeur","cur.adj":"ajusté selon votre choix",
      "prog.title": "Quel diplôme préparez-vous ?",
      "prog.lead": "Les contenus existent une seule fois comme base commune et sont pondérés et évalués différemment selon le diplôme. Lorsqu'un programme n'a pas été évalué, cela est indiqué ici.",
      "prog.why": "Pourquoi ne pas tout proposer",
      "prog.tracks": "orientations ou voies :",
      "plan.week": "par semaine",
      "oc.can": "Après cette unité, vous pouvez",
      "oc.cond": "Dans ces conditions",
      "oc.proof": "Votre preuve",
      "oc.done2": "Maîtrisé lorsque",
      "oc.rel": "Pertinent pour",
      "set.title": "Réglages",
      "wc.eyebrow": "Apprendre pour les diplômes suisses",
      "wc.head": "Un socle commun. Plusieurs voies vers un diplôme.",
      "wc.body": "Stoffknacker explique, entraîne et évalue les contenus au niveau requis par ton diplôme. De nombreuses bases sont communes. Le diplôme choisi détermine la profondeur, les contenus obligatoires et la forme de l'évaluation. Choisis ta langue et ton diplôme. Stoffknacker crée ensuite ton plan d'apprentissage personnel.",
      "wc.clar": "Tu peux utiliser immédiatement le socle commun. Seules les correspondances officiellement vérifiées comptent dans l'état de préparation affiché.",
      "wc.s1t": "Choisir ton diplôme",
      "wc.s1d": "Choisis ta voie de formation, ton orientation et ta date cible.",
      "wc.s2t": "Utiliser le socle commun",
      "wc.s2d": "Apprends les bases une seule fois. Ta progression est conservée entre les diplômes et les langues.",
      "wc.s3t": "Être prêt pour l'examen",
      "wc.s3d": "Stoffknacker ajoute les exigences propres au programme et indique ouvertement quelles correspondances sont officiellement vérifiées.",
      "wc.core": "Un socle commun",
      "wc.coretext": "Les diplômes partagent une partie des mêmes contenus. Ils diffèrent par la profondeur, l'étendue obligatoire, les exigences locales et la forme de l'évaluation.",
      "wc.pick": "Choisir ton diplôme",
      "wc.select": "Choisir",
      "wc.selected": "Choisi",
      "wc.more": "Autres diplômes",
      "wc.moretext": "La plateforme est modulaire. D'autres diplômes suisses, examens d'admission et profils cantonaux peuvent être ajoutés sous forme de couches supplémentaires.",
      "wc.cta": "Créer mon plan d'apprentissage",
      "wc.lang": "Langue",
      "wc.howto": "Comment fonctionne Stoffknacker",
      "wc.search": "Rechercher un diplôme",
      "wc.allcat": "Toutes les catégories",
      "wc.sum": "Ta sélection",
      "wc.sumsub": "Branches disponibles",
      "wc.sumfirst": "Première étape",
      "state.core": "Socle commun disponible",
      "state.verified": "Correspondance officielle vérifiée",
      "state.partly": "Correspondance officielle partiellement vérifiée",
      "state.review": "Correspondance officielle en cours de vérification",
      "state.canton": "Complément cantonal nécessaire",
      "state.school": "Complément de l'école nécessaire",
      "cat.hochschulzugang": "Accès aux hautes écoles",
      "cat.mittelschule": "École secondaire II",
      "cat.berufsbildung": "Formation professionnelle",
      "cat.externe-pruefung": "Examen externe",
      "cat.weitere": "Autres",
      "dash.blocks": "blocs",
      "sup.optional": "optionnel",
      "sup.needall": "Choisis les points ouverts, puis tu peux créer ton plan.",
      "set.chprog": "Changer de diplôme",
      "set.chlang": "Changer la langue",
      "set.rerun": "Relancer la configuration",
      "sup.dateh": "Jour.Mois.Année",
      "date.day": "Jour",
      "date.month": "Mois",
      "date.year": "Année",
      "date.incomplete": "Choisis le jour, le mois et l'année",
      "bk.title": "Sauvegarder la progression",
      "bk.lead": "Ta progression n'existe que dans ce navigateur. Enregistre-la avant de changer d'appareil.",
      "bk.export": "Exporter la progression",
      "bk.import": "Importer la progression",
      "bk.importh": "Uniquement du JSON issu de cet export. Le fichier est vérifié avant tout remplacement.",
      "bk.reset": "Réinitialiser",
      "bk.reseth": "Réinitialise progression, plan et configuration. Une sauvegarde est créée avant.",
      "bk.bad": "Fichier refusé",
      "bk.replace": "Remplacer",
      "bk.cancel": "Annuler",
      "bk.written": "enregistrements écrits",
      "bk.date": "Date d'export",
      "bk.keys": "enregistrements",
      "bk.schema": "Schéma",
      "bk.confirm": "Vraiment réinitialiser ? Une sauvegarde sera créée.",
      "dash.examples": "Exemples",
      "dim.available2": "disponible",
      "ms.VERIFIED_REQUIRED": "vérifié, obligatoire",
      "ms.VERIFIED_OPTIONAL": "vérifié, optionnel",
      "ms.PROVISIONAL_OVERLAP": "recoupement provisoire",
      "ms.SHARED_FOUNDATION": "base commune",
      "ms.NOT_APPLICABLE": "hors programme",
      "ms.UNKNOWN": "inconnu",
      "dim.notcalculable": "non calculable",
      "prac.bysubject": "S'exercer par branche",
      "learn.bysubject": "Apprendre par branche",
      "test.bysubject": "Évaluer par branche",
      "all.subjects": "Toutes les branches",
      "your.subjects": "Tes branches",
      "rec.today": "Recommandé aujourd'hui",
      "what.counts": "Ce qui compte maintenant",
      "due.tasks": "Tâches dues",
      "st.eyebrow": "Autotest",
      "st.of": "sur",
      "st.ok": "vérifications réussies",
      "st.build": "Version",
      "st.lead": "Ce test s'exécute dans ton navigateur avec ce fichier. Ce qui est rouge ne fonctionne pas chez toi.",
      "dash.open": "Ouvrir le tableau de bord",
      "plan.weeks": "semaines",
      "nav.start": "Accueil", "nav.today": "Aujourd’hui", "nav.today.desktop": "Apprendre aujourd’hui", "nav.subjects": "Matières", "nav.life": "Vie", "nav.life.desktop": "École de la vie", "nav.learn": "Apprendre", "nav.practice": "S'exercer",
      "nav.test": "Évaluer", "nav.repeat": "Réviser",
      "nav.progress": "Progression", "nav.more": "Plus", "nav.exams": "Examens",
      "brand.tagline": "Matière difficile, expliquée clairement. Gratuit pour les diplômes suisses.",
      "brand.free": "Entièrement gratuit",
      "brand.what": "Stoffknacker explique la matière chapitre par chapitre, vérifie votre compréhension "
        + "et planifie les révisions. Sans compte, sans publicité, sans transfert de données.",
      "brand.local": "Votre progression reste dans le navigateur",
      "lang.label": "Langue", "lang.switch": "Changer de langue",
      "lang.uiOnly": "Interface", "lang.contentDe": "",
      "content.onlyGerman": "Les contenus d'apprentissage ne sont disponibles qu'en allemand pour "
        + "l'instant. L'interface est traduite.",
      "program.title": "Quel diplôme préparez-vous ?",
      "program.mapped": "intégré", "program.unmapped": "programme pas encore intégré",
      "common.minutes": "minutes", "common.chapters": "chapitres", "common.open": "Ouvrir",
      "common.start": "Commencer", "common.back": "Retour",
    },
  };

  M.locale = function () {
    if (M.PUBLIC_BUILD) return "de";
    var id = "de";
    try { id = localStorage.getItem("mnemika-locale") || "de"; } catch (e) {}
    if (id !== "de" && !M.localeReady(id) && !M.TRANSLATION_PREVIEW) return "de";
    return id;
  };
  M.setLocale = function (id) {
    if (!M.I18N[id]) return;
    try { localStorage.setItem("mnemika-locale", id); } catch (e) {}
    var l = M.LOCALES.filter(function (x) { return x.id === id; })[0];
    document.documentElement.lang = l ? l.htmlLang : "de-CH";
    if (M.applyI18N) M.applyI18N();
  };
  /* Auslieferung zeigt niemals Marker. Der Entwicklungsmodus schon.
     ?dev-i18n=1 schaltet ihn ein. Der Prüfbericht zählt immer mit. */
  M.DEV_I18N = /[?&]dev-i18n=1/.test(location.search);
  M.missingKeys = [];
  M.t = function (key, fallback) {
    var loc = M.locale();
    var cur = M.I18N[loc] || {};
    if (cur[key] !== undefined) return cur[key];
    if (loc === "de") {
      if (M.I18N.de[key] !== undefined) return M.I18N.de[key];
      return fallback !== undefined ? fallback : key;
    }
    /* Fehlend in EN oder FR: sichtbar machen, nicht verstecken */
    if (M.missingKeys.indexOf(loc + ":" + key) < 0) M.missingKeys.push(loc + ":" + key);
    if (M.DEV_I18N) return "" + loc + ":" + key + "]";
    if (M.I18N.de[key] !== undefined) return M.I18N.de[key];
    return M.I18N.de[key] !== undefined ? M.I18N.de[key]
      : (fallback !== undefined ? fallback : key);
  };
  M.i18nAudit = function () {
    return { locale: M.locale(), missing: M.missingKeys.slice(), count: M.missingKeys.length };
  };
  /* Alle Knoten mit data-i18n neu beschriften */
  M.applyI18N = function () {
    document.querySelectorAll("[data-i18n]").forEach(function (n) {
      n.textContent = M.t(n.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-title]").forEach(function (n) {
      n.setAttribute("title", M.t(n.getAttribute("data-i18n-title")));
    });
    document.querySelectorAll("[data-locale]").forEach(function (b) {
      b.setAttribute("aria-current", b.getAttribute("data-locale") === M.locale() ? "true" : "false");
    });
    if (M.paintShell) M.paintShell();
    if (M.paintLangs) M.paintLangs();
    var tg = document.getElementById("mn-tagline");
    if (tg) tg.textContent = M.t("brand.tagline");
    if (M.go && document.body.dataset.view) M.go(document.body.dataset.view);
  };
  /* Fehlende Schlüssel sichtbar machen statt still auf Deutsch zurückfallen */
  M.i18nGaps = function () {
    var base = Object.keys(M.I18N.de), out = {};
    Object.keys(M.I18N).forEach(function (l) {
      if (l === "de") return;
      out[l] = base.filter(function (k) { return M.I18N[l][k] === undefined; });
    });
    return out;
  };
})();

/* Offizielle Lernziele und ihre Zuordnung zu Abschlüssen.
   Der Lernende kann sie nicht umschreiben. Er kann sie priorisieren,
   terminieren und in seinen Plan aufnehmen. */
(function () {
  "use strict";
  var M = window.MNEMIKA;
  var P = "passerelle-2023", G = "gym-maturitaet-2024", B = "bm-2025";

  function o(id, sub, chaps, title, can, cond, proof, done, progs, level) {
    return { id: id, subjectId: sub, chapterIds: chaps, blockIds: [], title: title,
      learnerFacingStatement: can, actionVerb: id.split(".").pop(), cognitiveLevel: level || "apply",
      knowledgeType: "procedural", conditions: cond, qualityCriteria: done,
      evidenceRequirements: proof,
      prerequisiteOutcomeIds: [], programmeMappings: progs,
      masteryRule: { practiceThreshold: 0.8, formalThreshold: 0.7, retentionDays: 30 },
      sourceRefs: progs.map(function (x) { return (M.program(x.programId) || {}).source; }).filter(Boolean),
      mediaRefs: [], coverageStatus: progs.some(function (x) { return x.requirement === "required"; })
        ? "verified-complete" : "structure-only" };
  }
  var req = function (p, d) { return { programId: p, requirement: "required", depth: d || 3 }; };
  var core = function (p, d) { return { programId: p, requirement: "national-core", depth: d || 2 }; };

  M.LEARNING_OUTCOMES = [
    o("math.equations.solve", "math", ["math-algebra"],
      "Lineare und einfache gebrochenrationale Gleichungen lösen",
      "Du kannst eine lineare oder einfach gebrochenrationale Gleichung unter Beachtung der Definitionsmenge durch Äquivalenzumformungen lösen.",
      "Ohne Lösungsschablone, mit dokumentierten Umformungsschritten.",
      "Zwei unterschiedliche Aufgaben lösen, eine Scheinlösung erkennen, das Ergebnis einsetzen und prüfen.",
      "Beide Standardaufgaben korrekt, die Transferaufgabe ohne Methodenfehler.",
      [req(P), core(G), req(B, 2)]),
    o("math.functions.read", "math", ["math-functions-basic", "math-functions-advanced"],
      "Funktionstypen am Graphen erkennen und zuordnen",
      "Du kannst aus einem Graphen den Funktionstyp bestimmen und die Parameter deuten.",
      "Ohne Taschenrechner, nur aus dem Verlauf und den Achsenschnittpunkten.",
      "Drei Graphen zuordnen und je eine Eigenschaft begründen.",
      "Alle drei Zuordnungen richtig, jede Begründung nennt ein Merkmal des Graphen.",
      [req(P), core(G)], "analyse"),
    o("bio.structure.function", "biology", ["bio-cells"],
      "Bau und Funktion eines Organells verbinden",
      "Du kannst aus dem Bau eines Organells seine Aufgabe herleiten und erklären, was bei Ausfall geschieht.",
      "Am Bild oder an einer Beschreibung, ohne Nachschlagen.",
      "Vier Organellen benennen, eine Störung beschreiben, eine Folge begründen.",
      "Alle vier korrekt, die Folge nennt Ursache und Wirkung.",
      [req(P), core(G), req(B, 2)]),
    o("bio.process.order", "biology", ["bio-protein-synthesis", "bio-cells"],
      "Den Proteinexport als geordnete Kette wiedergeben",
      "Du kannst die Stationen vom Zellkern bis zur Exocytose in der richtigen Reihenfolge nennen und je Station die Aufgabe erklären.",
      "Frei, ohne Vorlage.",
      "Reihenfolge herstellen und je Station eine Funktion nennen.",
      "Reihenfolge fehlerfrei, mindestens drei Funktionen korrekt.",
      [req(P), core(G)], "recall"),
    o("chem.stoich.convert", "chemistry", ["chem-concentration-stoich", "chem-equations-mole"],
      "Zwischen Masse, Stoffmenge und Teilchenzahl umrechnen",
      "Du kannst über die Stoffmenge zwischen Masse, Teilchenzahl und Volumen umrechnen.",
      "Mit Periodensystem, ohne Formelsammlung.",
      "Zwei Umrechnungen und eine Reaktionsaufgabe mit begrenzendem Stoff.",
      "Ergebnisse mit korrekter Einheit, der begrenzende Stoff richtig bestimmt.",
      [req(P), core(G), req(B, 3)]),
    o("chem.bonding.predict", "chemistry", ["chem-polarity-forces", "chem-covalent"],
      "Bindungsart aus der Elektronegativität vorhersagen",
      "Du kannst aus der Elektronegativitätsdifferenz die Bindungsart bestimmen und daraus eine Stoffeigenschaft ableiten.",
      "Mit Tabelle der Elektronegativitäten.",
      "Drei Stoffe einordnen und je eine Eigenschaft begründen.",
      "Alle drei richtig eingeordnet, die Begründung nennt die zwischenmolekulare Kraft.",
      [req(P), core(G)]),
    o("phys.kinematics.model", "physics", ["phys-kinematics", "phys-fall-throw"],
      "Bewegungen mit Weg-Zeit- und Geschwindigkeits-Zeit-Gesetz beschreiben",
      "Du kannst eine gleichförmige oder gleichmässig beschleunigte Bewegung berechnen und im Diagramm deuten.",
      "Mit Formelsammlung, ohne Lösungsbeispiel.",
      "Eine Rechenaufgabe, eine Diagrammdeutung, eine Plausibilitätsprüfung.",
      "Ergebnis mit Einheit, Diagramm korrekt gedeutet, Grössenordnung geprüft.",
      [req(P), core(G), req(B, 3)]),
    o("phys.energy.balance", "physics", ["phys-energy", "phys-work-power"],
      "Energieumwandlungen bilanzieren",
      "Du kannst Energieformen benennen, eine Umwandlung bilanzieren und den Wirkungsgrad berechnen.",
      "Ohne Hilfsmittel ausser Taschenrechner.",
      "Eine Bilanz aufstellen und den Wirkungsgrad begründen.",
      "Bilanz vollständig, Wirkungsgrad unter eins und begründet.",
      [req(P), core(G)]),
    o("hist.causal.chain", "history", ["hist-ch-1798-1848"],
      "Langfristige Ursache, Auslöser und Folge unterscheiden",
      "Du kannst bei einem historischen Umbruch langfristige Ursachen, den Auslöser und die Folgen trennen und belegen.",
      "Mit Quellenauszug, ohne Zusammenfassung.",
      "Drei Ebenen unterscheiden, je einen Beleg nennen, eine Gegenposition prüfen.",
      "Alle drei Ebenen korrekt getrennt, mindestens zwei Belege am Text.",
      [req(P), core(G)], "analyse"),
    o("hist.source.critique", "history", ["hist-ww1", "hist-dictatorships"],
      "Eine Quelle auf Absicht und Herkunft prüfen",
      "Du kannst bestimmen, wer eine Quelle mit welcher Absicht verfasst hat, und daraus ihre Aussagekraft ableiten.",
      "Am unbekannten Quellenauszug.",
      "Verfasser, Absicht und Grenze der Aussagekraft benennen.",
      "Alle drei benannt, die Grenze am Text belegt.",
      [req(P), core(G)], "evaluate"),
    o("geo.spatial.explain", "geography", ["geo-usa-physical", "geo-weather-climate"],
      "Aus dem Relief ein Klima- oder Naturereignis herleiten",
      "Du kannst aus Lage und Relief eines Raumes ableiten, welche Wetter- und Naturereignisse dort auftreten.",
      "Mit Karte, ohne Text.",
      "Eine Kausalkette vom Relief zum Ereignis, dazu eine Gegenprobe an einem anderen Raum.",
      "Kette vollständig, Gegenprobe nennt den entscheidenden Unterschied.",
      [req(P), core(G)], "analyse"),
    o("geo.data.interpret", "geography", ["geo-demography", "geo-climate-diagrams"],
      "Klimadiagramme und Bevölkerungsdaten auswerten",
      "Du kannst ein Klimadiagramm der Zone zuordnen und eine Bevölkerungsentwicklung in Phasen einteilen.",
      "Mit Diagramm, ohne Legendenhilfe.",
      "Zone bestimmen, Hemisphäre begründen, Phase zuordnen.",
      "Zone und Hemisphäre korrekt, die Phase am Verlauf begründet.",
      [req(P), core(G), req(B, 2)]),
    o("de.argument.build", "german", ["de-argumentation"],
      "Ein Argument aus Behauptung, Begründung und Beleg aufbauen",
      "Du kannst eine Position aufstellen, begründen, am Text belegen und eine Gegenposition abwägen.",
      "Ohne Musteraufsatz, mit dem vorliegenden Text.",
      "Ein vollständiges Argument, eine Gegenposition, ein begründetes Urteil.",
      "Beleg stammt aus dem Text, die Gegenposition wird nicht nur genannt, sondern geprüft.",
      [req(P), core(G), req(B, 3)], "create"),
    o("de.text.analyse", "german", ["de-oral-method", "de-duerrenmatt"],
      "Eine Textstelle deuten statt nacherzählen",
      "Du kannst an einer Stelle ein sprachliches Mittel benennen, seine Wirkung erklären und sie mit dem Werk verbinden.",
      "Am Textauszug, im Gespräch.",
      "Beobachtung, Mittel, Wirkung und Bezug zum Ganzen.",
      "Kein Nacherzählen, die Wirkung ist am Wortlaut belegt.",
      [req(P), core(G)], "analyse"),
    o("en.writing.structure", "english", ["en-writing"],
      "Write a short argumentative text with a defensible thesis",
      "Du kannst eine strittige These aufstellen, mit Belegen stützen, einen Einwand behandeln und schlüssig schliessen.",
      "In 60 Minuten, ohne Wörterbuch.",
      "Thesis, zwei Argumente mit Belegen, ein Einwand, ein Schluss.",
      "Die These ist strittig, jeder Beleg stützt sein Argument, der Schluss bringt nichts Neues.",
      [req(P), core(G), req(B, 3)], "create"),
    o("en.reading.evidence", "english", ["en-reading", "en-analysis"],
      "Answer reading questions with textual evidence",
      "Du kannst die Stelle finden, kurz zitieren und erklären, was die Formulierung bewirkt.",
      "Am unbekannten Text, mit Zeitlimit.",
      "Stelle finden, unter fünfzehn Wörtern zitieren, Wirkung erklären.",
      "Das Zitat trägt die Antwort, die Erklärung nennt die Wirkung, nicht den Inhalt.",
      [req(P), core(G)], "analyse"),
  ];

  M.CURRICULUM_MAPPINGS = {};
  M.LEARNING_OUTCOMES.forEach(function (x) {
    x.programmeMappings.forEach(function (m) {
      (M.CURRICULUM_MAPPINGS[m.programId] = M.CURRICULUM_MAPPINGS[m.programId] || []).push({
        outcomeId: x.id, requirement: m.requirement, depth: m.depth,
        subjectId: x.subjectId, chapterIds: x.chapterIds });
    });
  });
  M.outcomesFor = function (pid) {
    var ids = (M.CURRICULUM_MAPPINGS[pid || M.activeProgram()] || []).map(function (m) { return m.outcomeId; });
    return M.LEARNING_OUTCOMES.filter(function (x) { return ids.indexOf(x.id) >= 0; });
  };
  M.outcome = function (id) {
    return M.LEARNING_OUTCOMES.filter(function (x) { return x.id === id; })[0] || null;
  };
  M.outcomesForChapter = function (cid) {
    return M.LEARNING_OUTCOMES.filter(function (x) { return x.chapterIds.indexOf(cid) >= 0; });
  };
})();

/* Lehrgänge je Abschluss über dem gemeinsamen Bestand.
   Kanton: Zürich. Ein Kapitel existiert einmal; hier steht nur,
   ob und wie tief es für einen Abschluss gilt. Nichts wird kopiert. */
(function () {
  "use strict";
  var M = window.MNEMIKA;
  M.DEFAULT_CANTON = "ZH";

  /* relevance: core = Grundlagenfach, focus = Schwerpunkt/Ergänzung,
     support = unterstützend, na = nicht Teil des Abschlusses.
     depth 1 bis 3. status: provisional, solange der Lehrplan nicht ausgewertet ist. */
  var C = (relevance, depth, note) => ({ relevance, depth, note: note || "", status: "provisional" });

  M.CURRICULA = {
    "passerelle-2023": { canton: "ZH", label: "Passerelle, Ergänzungsprüfung",
      examForm: "schriftlich und mündlich, fünf Prüfungsfächer",
      subjects: {
        german:    C("core", 3, "Schriftlich und mündlich, mit vier verbindlichen Werken"),
        english:   C("core", 3, "Zweite Sprache, schriftlich und mündlich"),
        math:      C("core", 3, "Analysis, Algebra, Stochastik, Geometrie"),
        biology:   C("core", 3, "Naturwissenschaftliches Prüfungsfach"),
        chemistry: C("core", 3, "Naturwissenschaftliches Prüfungsfach"),
        physics:   C("core", 3, "Naturwissenschaftliches Prüfungsfach"),
        history:   C("core", 3, "Geistes- und Sozialwissenschaften"),
        geography: C("core", 3, "Geistes- und Sozialwissenschaften, Regionalschwerpunkt USA"),
      } },
    "gym-maturitaet-2024": { canton: "ZH", label: "Gymnasiale Maturität, Kanton Zürich",
      examForm: "Maturitätsprüfung nach kantonalem Reglement, Maturaarbeit",
      scopeNote: "Der nationale Rahmenlehrplan gilt seit 1. August 2024. Der Kanton Zürich und "
        + "die einzelne Schule setzen ihn eigenständig um. Diese Zuordnung ist eine fachliche "
        + "Einschätzung über dem gemeinsamen Bestand, kein Abgleich mit dem Zürcher Lehrplan.",
      subjects: {
        german:    C("core", 3, "Grundlagenfach, Erstsprache"),
        english:   C("core", 2, "Grundlagenfach, dritte Sprache"),
        math:      C("core", 3, "Grundlagenfach, je nach Profil verstärkt"),
        biology:   C("core", 2, "Grundlagenfach Naturwissenschaften"),
        chemistry: C("core", 2, "Grundlagenfach Naturwissenschaften"),
        physics:   C("core", 2, "Grundlagenfach Naturwissenschaften"),
        history:   C("core", 2, "Grundlagenfach Geistes- und Sozialwissenschaften"),
        geography: C("core", 2, "Grundlagenfach Geistes- und Sozialwissenschaften"),
      } },
    smp: { canton: "ZH", label: "Schweizerische Maturitätsprüfung",
      examForm: "Teilprüfungen 1 und 2, alle Fächer extern geprüft",
      subjects: {
        german:    C("core", 3, "Erstsprache, schriftlich und mündlich"),
        english:   C("core", 3, "Zweite oder dritte Sprache"),
        math:      C("core", 3, "Grundlagenfach, externe Prüfung"),
        biology:   C("core", 2, "Naturwissenschaften"),
        chemistry: C("core", 2, "Naturwissenschaften"),
        physics:   C("core", 2, "Naturwissenschaften"),
        history:   C("core", 2, "Geistes- und Sozialwissenschaften"),
        geography: C("core", 2, "Geistes- und Sozialwissenschaften"),
      } },
    "bm-2025": { canton: "ZH", label: "Berufsmaturität, Kanton Zürich",
      examForm: "Grundlagenbereich, Schwerpunktbereich, Ergänzungsbereich, IDAF und IDPA",
      subjects: {
        german:    C("core", 3, "Grundlagenbereich, erste Landessprache"),
        english:   C("core", 3, "Grundlagenbereich, zweite Sprache"),
        math:      C("core", 2, "Grundlagenbereich, Tiefe nach Ausrichtung"),
        history:   C("support", 2, "Ergänzungsbereich, Geschichte und Politik"),
        geography: C("support", 2, "Ergänzungsbereich, Wirtschaft und Recht oder Raum"),
        biology:   C("focus", 2, "Schwerpunkt bei Natur oder Gesundheit und Soziales"),
        chemistry: C("focus", 2, "Schwerpunkt bei Technik oder Natur"),
        physics:   C("focus", 2, "Schwerpunkt bei Technik, Architektur und Life Sciences"),
      },
      orientationDepth: {
        tals:  { math: 3, physics: 3, chemistry: 3, biology: 2 },
        nll:   { biology: 3, chemistry: 3, geography: 3, math: 2 },
        "wd-w": { math: 3, german: 3, english: 3, history: 2 },
        "wd-d": { german: 3, english: 3, math: 2, history: 2 },
        gk:    { german: 3, history: 3, geography: 2 },
        gs:    { biology: 3, chemistry: 3, german: 3 },
      } },
    ebmp: { canton: "ZH", label: "Eidgenössische Berufsmaturitätsprüfung",
      examForm: "externe Prüfung nach BM-Kompetenzrahmen, ausrichtungsspezifisch",
      subjects: {
        german:    C("core", 3, "Grundlagenbereich"),
        english:   C("core", 3, "Grundlagenbereich"),
        math:      C("core", 2, "Grundlagenbereich"),
        history:   C("support", 2, "Ergänzungsbereich"),
        geography: C("support", 2, "Ergänzungsbereich"),
        biology:   C("focus", 2, "nach Ausrichtung"),
        chemistry: C("focus", 2, "nach Ausrichtung"),
        physics:   C("focus", 2, "nach Ausrichtung"),
      } },
    "fms-2018": { canton: "ZH", label: "Fachmittelschule und Fachmaturität, Kanton Zürich",
      examForm: "Fachmittelschulausweis, danach Fachmaturität mit Zusatzmodul",
      subjects: {
        german:    C("core", 3, "Grundlagenfach"),
        english:   C("core", 2, "Grundlagenfach"),
        math:      C("core", 2, "Grundlagenfach"),
        biology:   C("focus", 2, "Berufsfeld Gesundheit, Naturwissenschaften"),
        chemistry: C("focus", 2, "Berufsfeld Gesundheit"),
        physics:   C("support", 1, "Naturwissenschaftliche Grundlage"),
        history:   C("core", 2, "Geistes- und Sozialwissenschaften"),
        geography: C("support", 2, "Geistes- und Sozialwissenschaften"),
      },
      profileDepth: {
        paed:       { german: 3, history: 3, biology: 2, math: 2 },
        gesundheit: { biology: 3, chemistry: 3, german: 2 },
        sozial:     { german: 3, history: 3, geography: 2 },
        komm:       { german: 3, english: 3, history: 2 },
        gestaltung: { german: 2, history: 2 },
        musik:      { german: 3, history: 2 },
        psych:      { biology: 3, german: 3 },
      } },
  };

  M.curriculum = function (pid) { return M.CURRICULA[pid || M.activeProgram()] || null; };
  /* Tiefe unter Berücksichtigung der gewählten Ausrichtung oder des Profils */
  M.subjectPlan = function (pid, sid) {
    var p = pid || M.activeProgram();
    var cur = M.curriculum(p);
    if (!cur || !cur.subjects[sid]) return null;
    var base = Object.assign({}, cur.subjects[sid]);
    var or = M.trackChoice(p, "orientation");
    var pr = M.trackChoice(p, "profile");
    if (or && cur.orientationDepth && cur.orientationDepth[or] && cur.orientationDepth[or][sid]) {
      base.depth = cur.orientationDepth[or][sid];
      base.adjustedBy = or;
    } else if (pr && cur.profileDepth && cur.profileDepth[pr] && cur.profileDepth[pr][sid]) {
      base.depth = cur.profileDepth[pr][sid];
      base.adjustedBy = pr;
    }
    base.chapterIds = M.chapters.filter((c) => c.subject === sid).map((c) => c.id);
    base.chapters = base.chapterIds.length;
    return base;
  };
  M.RELEVANCE_LABEL = { core: "Grundlagenfach", focus: "Schwerpunkt", support: "Ergänzung", na: "nicht geprüft" };
  M.curriculumSummary = function (pid) {
    var p = pid || M.activeProgram();
    var cur = M.curriculum(p);
    if (!cur) return null;
    var out = { programme: p, canton: cur.canton, label: cur.label, examForm: cur.examForm,
      subjects: [], chapters: 0, byRelevance: {} };
    M.SUBJECT_ORDER.forEach((sid) => {
      var sp = M.subjectPlan(p, sid);
      if (!sp) return;
      out.subjects.push({ id: sid, label: M.SUBJECTS[sid].label, relevance: sp.relevance,
        depth: sp.depth, chapters: sp.chapters, note: sp.note, adjustedBy: sp.adjustedBy || null });
      out.chapters += sp.chapters;
      out.byRelevance[sp.relevance] = (out.byRelevance[sp.relevance] || 0) + 1;
    });
    return out;
  };
})();

/* Willkommen und Abschlusswahl. Alles aus der Registry gerendert.
   Ein siebter Abschluss braucht nur einen Datensatz, keinen Code. */
(function () {
  "use strict";
  var M = window.MNEMIKA;

  /* Lokalisierte Namen und Kurzbeschreibungen je Abschluss */
  M.PROGRAM_TEXT = {
    "passerelle-2023": {
      category: "hochschulzugang",
      labels: { de: "Passerelle", en: "Passerelle", fr: "Passerelle" },
      descriptions: {
        de: "Ergänzungsprüfung für Inhaberinnen und Inhaber einer Berufs- oder Fachmaturität, die an eine universitäre Hochschule wollen.",
        en: "Supplementary examination for holders of a vocational or specialised baccalaureate who want to enter a university.",
        fr: "Examen complémentaire pour les titulaires d'une maturité professionnelle ou spécialisée souhaitant entrer à l'université.",
      } },
    "gym-maturitaet-2024": {
      category: "mittelschule",
      labels: { de: "Gymnasiale Maturität", en: "Academic Baccalaureate", fr: "Maturité gymnasiale" },
      descriptions: {
        de: "Der klassische Weg an die Universität, über das Gymnasium und die kantonale Maturitätsprüfung.",
        en: "The classic route to university, through the gymnasium and the cantonal baccalaureate examination.",
        fr: "La voie classique vers l'université, par le gymnase et l'examen de maturité cantonal.",
      } },
    smp: {
      category: "externe-pruefung",
      labels: { de: "Schweizerische Maturitätsprüfung", en: "Swiss Baccalaureate Examination", fr: "Examen suisse de maturité" },
      descriptions: {
        de: "Die eidgenössische Prüfung für alle, die ohne anerkanntes Gymnasium zur Maturität kommen wollen.",
        en: "The federal examination for anyone reaching the baccalaureate without attending a recognised gymnasium.",
        fr: "L'examen fédéral pour celles et ceux qui visent la maturité sans gymnase reconnu.",
      } },
    "bm-2025": {
      category: "berufsbildung",
      labels: { de: "Berufsmaturität", en: "Vocational Baccalaureate", fr: "Maturité professionnelle" },
      descriptions: {
        de: "Allgemeinbildung parallel zur Lehre oder danach, mit fünf Ausrichtungen und dem Zugang zur Fachhochschule.",
        en: "General education alongside or after an apprenticeship, with five orientations and access to universities of applied sciences.",
        fr: "Culture générale pendant ou après l'apprentissage, avec cinq orientations et l'accès aux HES.",
      } },
    ebmp: {
      category: "externe-pruefung",
      labels: { de: "Eidgenössische Berufsmaturitätsprüfung", en: "Federal Vocational Baccalaureate Examination", fr: "Examen fédéral de maturité professionnelle" },
      descriptions: {
        de: "Die externe Prüfung zur Berufsmaturität, ohne Besuch einer Berufsmaturitätsschule.",
        en: "The external route to the vocational baccalaureate, without attending a vocational baccalaureate school.",
        fr: "La voie externe vers la maturité professionnelle, sans école de maturité professionnelle.",
      } },
    "fms-2018": {
      category: "mittelschule",
      labels: { de: "Fachmittelschule und Fachmaturität", en: "Specialised School and Baccalaureate", fr: "École de culture générale et maturité spécialisée" },
      descriptions: {
        de: "Der Weg in Gesundheit, Pädagogik, Soziale Arbeit und weitere Berufsfelder, mit sieben Profilen.",
        en: "The route into health, education, social work and further professional fields, with seven profiles.",
        fr: "La voie vers la santé, la pédagogie, le travail social et d'autres domaines, avec sept profils.",
      } },
  };

  M.programLabel = function (p) {
    var t = M.PROGRAM_TEXT[p.id];
    var l = M.locale();
    return (t && t.labels[l]) || (t && t.labels.de) || p.label;
  };
  M.programDescription = function (p) {
    var t = M.PROGRAM_TEXT[p.id];
    var l = M.locale();
    return (t && t.descriptions[l]) || (t && t.descriptions.de) || "";
  };
  M.programCategory = function (p) { return (M.PROGRAM_TEXT[p.id] || {}).category || "weitere"; };
  /* active-Flag über der Registry, damit Filter und Erweiterung ohne Code gehen */
  M.activeProgrammes = function () {
    return M.PROGRAMS.filter(function (p) { return p.active !== false; });
  };
  M.trackCount = function (p) {
    var t = M.tracksFor(p.id);
    return Object.keys(t).reduce(function (a, k) { return a + (t[k] ? t[k].length : 0); }, 0);
  };
  /* Positive Zustände. Verifikation ist Zusatzinformation, nicht die Hauptaussage. */
  M.programBadges = function (p) {
    var st = M.programState(p.id);
    var out = [{ key: "state.core", tone: "ok" }];
    if (st.officialMappingStatus === "VERIFIED") out.push({ key: "state.verified", tone: "ok" });
    else out.push({ key: "state.review", tone: "info" });
    if (p.scope === "national-core") out.push({ key: "state.canton", tone: "info" });
    return out;
  };
  M.ONBOARDING_VERSION = "33";
  /* Die alte Boolesche Flagge zählt nicht mehr. Nur die Version zählt. */
  M.onboardingDone = function () {
    try { return localStorage.getItem("mnemika-onboarding-version") === M.ONBOARDING_VERSION; }
    catch (e) { return false; }
  };
  M.markOnboardingDone = function () {
    try {
      localStorage.setItem("mnemika-onboarding-version", M.ONBOARDING_VERSION);
      localStorage.removeItem("mnemika-welcome");
    } catch (e) {}
  };
  /* Nur die Einrichtung zurücksetzen, der Lernstand bleibt. */
  M.resetOnboarding = function () {
    try {
      localStorage.removeItem("mnemika-onboarding-version");
      localStorage.removeItem("mnemika-welcome");
      localStorage.removeItem("mnemika-setup-step");
      localStorage.removeItem("mnemika-target-date");
    } catch (e) {}
  };
  M.legacyWelcomeFlag = function () {
    try { return localStorage.getItem("mnemika-welcome") === "1"; } catch (e) { return false; }
  };
  /* Einrichtungsschritte: was dieser Abschluss noch braucht */
  M.setupSteps = function (pid) {
    var p = pid || M.activeProgram();
    var tr = M.tracksFor(p);
    var steps = [];
    ["route", "orientation", "profile", "scope"].forEach(function (dim) {
      if (tr[dim] && tr[dim].length) steps.push({ dim: dim, options: tr[dim] });
    });
    if (tr.interdisciplinary) steps.push({ dim: "idw", options: tr.interdisciplinary, optional: true });
    steps.push({ dim: "date", options: null });
    return steps;
  };
  M.setupComplete = function (pid) {
    var p = pid || M.activeProgram();
    var need = M.setupSteps(p).filter(function (s) { return !s.optional; });
    return need.every(function (s) {
      if (s.dim === "date") {
        if (M.targetDate()) return true;
        var dr = M.dateDraft();
        return !!(dr.d && dr.m && dr.y);
      }
      return !!M.trackChoice(p, s.dim);
    });
  };
  M.targetDate = function () {
    try { return localStorage.getItem("mnemika-target-date") || ""; } catch (e) { return ""; }
  };
  /* Datum immer im Format des gewählten Gebiets anzeigen, nicht im US-Format */
  M.formatDate = function (iso) {
    if (!iso) return "";
    var l = (M.LOCALES.filter(function (x) { return x.id === M.locale(); })[0] || {}).htmlLang || "de-CH";
    try {
      return new Date(iso + "T00:00:00").toLocaleDateString(l,
        { day: "2-digit", month: "long", year: "numeric" });
    } catch (e) { return iso; }
  };
  M.weeklyMinutes = function () {
    try { return parseInt(localStorage.getItem("mnemika-weekly-minutes") || "180", 10); }
    catch (e) { return 180; }
  };
  M.setWeeklyMinutes = function (n) {
    try { localStorage.setItem("mnemika-weekly-minutes", String(Math.max(30, n || 180))); } catch (e) {}
  };
  /* Segmentierte Datumswahl. Keine Abhängigkeit vom nativen Feld,
     das je Browser und Gebiet ein anderes Format zeigt. */
  M.MONTHS = {
    de: ["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],
    en: ["January","February","March","April","May","June","July","August","September","October","November","December"],
    fr: ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],
  };
  M.dateParts = function () {
    var iso = M.targetDate();
    if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) return { d: "", m: "", y: "" };
    return { d: String(+iso.slice(8, 10)), m: String(+iso.slice(5, 7)), y: iso.slice(0, 4) };
  };
  M.daysInMonth = function (m, y) {
    if (!m || !y) return 31;
    return new Date(+y, +m, 0).getDate();
  };
  /* Vorbelegung aus der Prüfungssession des Abschlusses, sonst ein Jahr voraus.
     Der Lernende kann alles ändern, aber nie drei leere Felder sehen. */
  M.suggestedDate = function (pid) {
    var ses = (M.SESSIONS || {})[pid || M.activeProgram()] || "";
    var y = (ses.match(/(20\d\d)/) || [])[1];
    if (y && /Winter/i.test(ses)) return { d: "15", m: "2", y: y };
    if (y && /Sommer/i.test(ses)) return { d: "15", m: "8", y: y };
    var n = new Date();
    return { d: String(n.getDate()), m: String(n.getMonth() + 1), y: String(n.getFullYear() + 1) };
  };
  M.dateDraft = function () {
    var iso = M.targetDate();
    if (iso) return M.dateParts();
    var dr = null;
    try { dr = JSON.parse(localStorage.getItem("mnemika-date-parts") || "null"); } catch (e) {}
    if (dr && (dr.d || dr.m || dr.y)) return dr;
    return M.suggestedDate();
  };
  M.setDatePart = function (part, val) {
    var p0 = M.dateDraft();   // Entwurf behalten, sonst gehen frühere Segmente verloren
    p0[part] = val;
    if (p0.d && p0.m && p0.y) {
      var max = M.daysInMonth(p0.m, p0.y);
      if (+p0.d > max) p0.d = String(max);           // 31. Februar gibt es nicht
      M.setTargetDate(p0.y + "-" + String(+p0.m).padStart(2, "0") + "-" + String(+p0.d).padStart(2, "0"));
    } else {
      try { localStorage.setItem("mnemika-date-parts", JSON.stringify(p0)); } catch (e) {}
    }
    return p0;
  };
  M.dateControl = function () {
    var dp = M.dateDraft();
    var loc = M.locale();
    var months = M.MONTHS[loc] || M.MONTHS.de;
    var thisYear = new Date().getFullYear();
    var years = [];
    for (let y = thisYear; y <= thisYear + 6; y += 1) years.push(y);
    var days = [];
    for (let d = 1; d <= M.daysInMonth(dp.m, dp.y); d += 1) days.push(d);
    /* Reihenfolge der Segmente nach Gebiet: DE und FR Tag zuerst, EN Monat zuerst */
    var order = loc === "en" ? ["m", "d", "y"] : ["d", "m", "y"];
    var seg = {
      d: `<label class="dseg"><span>${M.esc(M.t("date.day", "Tag"))}</span>
        <select class="gin" data-dpart="d">
          <option value=""${dp.d ? "" : " selected"}>–</option>
          ${days.map(function (x) { return '<option value="' + x + '"'
            + (String(x) === String(dp.d) ? " selected" : "") + ">" + x + "</option>"; }).join("")}
        </select></label>`,
      m: `<label class="dseg wide"><span>${M.esc(M.t("date.month", "Monat"))}</span>
        <select class="gin" data-dpart="m">
          <option value=""${dp.m ? "" : " selected"}>–</option>
          ${months.map(function (nm, i) { return '<option value="' + (i + 1) + '"'
            + (String(i + 1) === String(dp.m) ? " selected" : "") + ">" + M.esc(nm) + "</option>"; }).join("")}
        </select></label>`,
      y: `<label class="dseg"><span>${M.esc(M.t("date.year", "Jahr"))}</span>
        <select class="gin" data-dpart="y">
          <option value=""${dp.y ? "" : " selected"}>–</option>
          ${years.map(function (x) { return '<option value="' + x + '"'
            + (String(x) === String(dp.y) ? " selected" : "") + ">" + x + "</option>"; }).join("")}
        </select></label>`,
    };
    return `<div class="dategrp">${order.map(function (k) { return seg[k]; }).join("")}</div>
      <p class="note datepreview">${M.targetDate() ? M.esc(M.formatDate(M.targetDate()))
        : M.esc(M.t("date.incomplete", "Tag, Monat und Jahr wählen"))}</p>`;
  };
  M.setTargetDate = function (v) {
    try { localStorage.setItem("mnemika-target-date", v); } catch (e) {}
  };
})();
(function () {
  "use strict";
  var M = window.MNEMIKA;
  /* Ein Kern, viele Wege. Originalgrafik, kein Emoji. */
  M.coreViz = function (n) {
    var R = 104, cx = 132, cy = 132, count = Math.max(3, Math.min(8, n || 6));
    var nodes = [];
    for (let i = 0; i < count; i += 1) {
      var a = (-90 + i * (360 / count)) * Math.PI / 180;
      nodes.push({ x: cx + Math.cos(a) * R, y: cy + Math.sin(a) * R });
    }
    return `<svg viewBox="0 0 264 264" role="img" aria-label="${M.esc(M.t("wc.core", "Ein gemeinsamer Lernkern"))}">
      ${nodes.map((p) => `<line x1="${cx}" y1="${cy}" x2="${p.x.toFixed(1)}" y2="${p.y.toFixed(1)}"
        stroke="currentColor" stroke-width="1.6" opacity=".26"/>`).join("")}
      ${nodes.map((p) => `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="15"
        fill="none" stroke="currentColor" stroke-width="2.25" opacity=".62"/>`).join("")}
      <circle cx="${cx}" cy="${cy}" r="42" fill="none" stroke="currentColor" stroke-width="2.25"/>
      <circle cx="${cx}" cy="${cy}" r="27" fill="none" stroke="currentColor" stroke-width="2.25" opacity=".55"/>
      <circle cx="${cx}" cy="${cy}" r="9" fill="currentColor"/>
    </svg>`;
  };
  /* Abschluss-Pictogramme, gleiche Geometrie: 48er Raster, runder Strich 2.25 */
  var P = {
    "passerelle-2023": '<path d="M8 34h32M14 34V18l10-6 10 6v16M24 34V24"/>',
    "gym-maturitaet-2024": '<path d="M24 10 42 18 24 26 6 18l18-8ZM12 22v10c0 3 5.4 6 12 6s12-3 12-6V22"/>',
    smp: '<path d="M10 8h28v32H10zM16 16h16M16 24h16M16 32h10"/>',
    "bm-2025": '<path d="M8 20h32v18H8zM17 20v-6a7 7 0 0 1 14 0v6M24 27v4"/>',
    ebmp: '<path d="M10 10h20l8 8v20H10zM30 10v8h8M17 28h14"/>',
    "fms-2018": '<path d="M24 8a8 8 0 1 1 0 16 8 8 0 0 1 0-16ZM10 40c0-7 6.3-12 14-12s14 5 14 12"/>',
  };
  M.programPic = function (id) {
    var d = P[id] || '<circle cx="24" cy="24" r="15"/>';
    return `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.25"
      stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
  };
})();
(function () {
  "use strict";
  var M = window.MNEMIKA;
  /* Echter Lernplan, kein Einrichtungsbildschirm. */
  M.PLAN_KEY = "mnemika-learning-plan-v34";
  M.createLearningPlan = function (pid) {
    var p = M.program(pid || M.activeProgram());
    if (!p) return null;
    var cur = M.curriculumSummary(p.id) || { subjects: [], canton: "ZH", examForm: "" };
    var st = M.programState(p.id);
    var tr = M.tracksFor(p.id);
    var choices = {};
    Object.keys(tr).forEach(function (dim) { choices[dim] = M.trackChoice(p.id, dim) || null; });
    var verified = M.outcomesFor(p.id).map(function (o) { return o.id; });
    var provisional = M.LEARNING_OUTCOMES
      .filter(function (o) { return verified.indexOf(o.id) < 0; })
      .map(function (o) { return o.id; });
    /* Reihenfolge: tiefstes Pflichtfach zuerst, dann nach Kapitelzahl */
    var subs = cur.subjects.slice().sort(function (a, b) {
      var w = { core: 3, focus: 2, support: 1 };
      return (w[b.relevance] - w[a.relevance]) || (b.depth - a.depth);
    });
    var modules = [];
    subs.forEach(function (s) {
      M.chapters.filter(function (c) { return c.subject === s.id; })
        .forEach(function (c) { modules.push({ chapterId: c.id, subjectId: s.id,
          relevance: s.relevance, depth: s.depth }); });
    });
    var weekly = M.weeklyMinutes();
    var first = modules[0] || null;
    var weeks = [];
    var i = 0;
    var perWeek = Math.max(1, Math.round(weekly / 45));
    while (i < modules.length && weeks.length < 40) {
      weeks.push({ week: weeks.length + 1, minutes: weekly,
        chapterIds: modules.slice(i, i + perWeek).map(function (m) { return m.chapterId; }) });
      i += perWeek;
    }
    var plan = {
      version: "34", createdAt: new Date().toISOString(),
      programme: p.id, programmeLabel: M.programLabel(p),
      choices: choices, canton: cur.canton, scope: p.scope,
      targetDate: M.targetDate(), weeklyMinutes: weekly, examForm: cur.examForm,
      sharedModules: modules.map(function (m) { return m.chapterId; }),
      moduleCount: modules.length,
      verifiedRequirements: verified, provisionalOverlaps: provisional,
      unresolvedGaps: st.readinessEligible ? []
        : [{ kind: "OFFICIAL_MAPPING_UNVERIFIED", programme: p.id, source: p.source }],
      firstModule: first, firstModuleTitle: first ? (M.chapter(first.chapterId) || {}).title : "",
      recommendedDiagnostic: { mode: "quickQuiz", questions: 5 },
      weeklySchedule: weeks, totalWeeks: weeks.length,
    };
    try { localStorage.setItem(M.PLAN_KEY, JSON.stringify(plan)); } catch (e) {}
    M.PLAN = plan;
    return plan;
  };
  M.learningPlanV34 = function () {
    if (M.PLAN) return M.PLAN;
    try { M.PLAN = JSON.parse(localStorage.getItem(M.PLAN_KEY) || "null"); } catch (e) { M.PLAN = null; }
    return M.PLAN;
  };
})();

/* Lernstand sichern, prüfen, zurücklesen (R155, Befunde MN-051 bis MN-054 und MN-067).
   Ein einziges Register beschreibt jeden Speicherschlüssel: Klasse, Format, Prüfung, Export und Zurücksetzen.
   Export liest den aktuellen Stand im Speicher (auch wenn das Schreiben gescheitert ist).
   Import wird vollständig geprüft, bevor etwas geschrieben wird. Ersetzen läuft als Transaktion mit Journal:
   danach gilt entweder der alte oder der neue Stand, nie eine Mischung. Keine Ausführung importierter Texte. */
(function () {
  "use strict";
  var M = window.MNEMIKA;
  var MAX = 8 * 1024 * 1024;
  var JOURNAL = "mnemika-restore-journal";
  M.SCHEMA_VERSION = 3;
  /* Alte Exporte (Schema 2) enthielten genau diese Schlüssel. Beim Ersetzen mit einer alten Datei
     bleiben alle anderen Bereiche unverändert, weil die Datei sie nie enthalten konnte. */
  var LEGACY_KEYS = ["mnemika-v16", "mnemika-speech", "mnemika-program", "mnemika-locale",
    "mnemika-learning-plan-v34", "mnemika-target-date", "mnemika-weekly-minutes",
    "mnemika-onboarding-version", "mnemika-exam-history-v1"];

  /* ---------- Prüfregeln ---------- */
  function plain(x) { return !!x && typeof x === "object" && !Array.isArray(x); }
  function nonneg(v) { return typeof v === "number" && isFinite(v) && v >= 0; }
  function nonnegInt(v) { return nonneg(v) && Math.floor(v) === v; }
  function parse(text, k, errs) {
    try { return JSON.parse(text); } catch (e) { errs.push(k + ": kein gültiges JSON"); return undefined; }
  }
  var COUNTERS = { n: 1, ok: 1, xp: 1, streak: 1, seen: 1, right: 1, level: 1, count: 1, total: 1, best: 1, runs: 1 };
  /* Zähler dürfen nirgends negativ oder unendlich sein (begrenzte Tiefe). */
  function counters(o, path, errs, depth) {
    if (depth > 6 || errs.length > 40) return;
    if (Array.isArray(o)) { o.forEach(function (v, i) { counters(v, path + "[" + i + "]", errs, depth + 1); }); return; }
    if (!plain(o)) return;
    Object.keys(o).forEach(function (k) {
      var v = o[k];
      if (COUNTERS[k] && typeof v === "number" && !nonneg(v)) errs.push(path + "." + k + ": Zahl ab 0 erwartet");
      else if (v && typeof v === "object") counters(v, path + "." + k, errs, depth + 1);
    });
  }
  var V = {
    /* r174: Testvorbereitungen fachlich prüfen (Struktur, Feldtypen, erlaubte Werte, Verweise), statt Texte zu sperren */
    testziele: function (text, k, errs) {
      var s = parse(text, k, errs); if (s === undefined) return;
      if (!Array.isArray(s)) { errs.push(k + ": Liste von Testvorbereitungen erwartet"); return; }
      if (s.length > 500) { errs.push(k + ": mehr als 500 Testvorbereitungen"); return; }
      var ids = {}, chs = {};
      try { (M.chapters || []).forEach(function (c) { chs[c.id] = 1; }); } catch (e) {}
      var hatKapitel = Object.keys(chs).length > 0;
      s.forEach(function (z, i) {
        var p = k + "[" + i + "]";
        if (!plain(z)) { errs.push(p + ": Objekt erwartet"); return; }
        if (typeof z.id !== "string" || !/^[A-Za-z0-9_-]{1,80}$/.test(z.id)) errs.push(p + ".id: Kennung erwartet");
        else if (ids[z.id]) errs.push(p + ".id: doppelt"); else ids[z.id] = 1;
        if (z.name !== undefined && (typeof z.name !== "string" || z.name.length > 200 || /[\u0000-\u0008\u000b\u000c\u000e-\u001f]/.test(z.name))) errs.push(p + ".name: Text bis 200 Zeichen erwartet");
        if (!Array.isArray(z.chapters)) errs.push(p + ".chapters: Liste erwartet");
        else z.chapters.forEach(function (c, j) {
          if (typeof c !== "string" || !/^[A-Za-z0-9:_.\-]{1,160}$/.test(c)) errs.push(p + ".chapters[" + j + "]: Kapitelkennung erwartet");
          else if (hatKapitel && !chs[c] && !(M.ID_MIGRATION && M.ID_MIGRATION[c])) errs.push(p + ".chapters[" + j + "]: unbekanntes Kapitel " + c);
        });
        ["datum", "erstellt"].forEach(function (f) {
          if (z[f] === undefined || z[f] === "") return;
          if (typeof z[f] !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(z[f]) || isNaN(Date.parse(z[f]))) errs.push(p + "." + f + ": Datum JJJJ-MM-TT erwartet");
        });
      });
    },
    /* r175: Übungs-Vorlieben fachlich prüfen: Fach bekannt, Zeit 5/10/20, Format aus der Liste, «Heute nicht» nur Fach → Datum */
    ueben: function (text, k, errs) {
      var s = parse(text, k, errs); if (s === undefined) return;
      if (!plain(s)) { errs.push(k + ": Objekt erwartet"); return; }
      var faecher = {}; try { Object.keys(M.SUBJECTS || {}).forEach(function (f) { faecher[f] = 1; }); } catch (e) {}
      var hatF = Object.keys(faecher).length > 0;
      if (s.fach !== undefined && (typeof s.fach !== "string" || (hatF && !faecher[s.fach]))) errs.push(k + ".fach: bekanntes Fach erwartet");
      if (s.min !== undefined && [5, 10, 20].indexOf(s.min) < 0) errs.push(k + ".min: 5, 10 oder 20 erwartet");
      if (s.fmt !== undefined && ["gemischt", "kurz", "karten", "fehler"].indexOf(s.fmt) < 0) errs.push(k + ".fmt: unbekanntes Format");
      if (s.weg !== undefined) { if (!plain(s.weg)) errs.push(k + ".weg: Objekt erwartet"); else Object.keys(s.weg).forEach(function (f) { if ((hatF && !faecher[f]) || typeof s.weg[f] !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(s.weg[f])) errs.push(k + ".weg." + f + ": Fach und Datum erwartet"); }); }
      if (s.zuletzt !== undefined) { var z = s.zuletzt; if (!plain(z) || typeof z.cid !== "string" || !/^[A-Za-z0-9:_.\-]{1,160}$/.test(z.cid) || ["lesen", "ueben", "pfad"].indexOf(z.art) < 0 || typeof z.at !== "number" || (z.prog !== undefined && typeof z.prog !== "string")) errs.push(k + ".zuletzt: letzte Aktivität ungültig"); }
      Object.keys(s).forEach(function (f) { if (["fach", "min", "fmt", "weg", "zuletzt"].indexOf(f) < 0) errs.push(k + "." + f + ": unbekanntes Feld"); });
    },
    v16: function (text, k, errs) {
      var s = parse(text, k, errs); if (s === undefined) return;
      if (!plain(s)) { errs.push(k + ": Objekt erwartet"); return; }
      if (s.v !== undefined && s.v !== 16 && s.v !== 7) errs.push(k + ".v: unbekannte Version " + s.v);
      ["xp", "streak"].forEach(function (f) { if (s[f] !== undefined && !nonnegInt(s[f])) errs.push(k + "." + f + ": ganze Zahl ab 0 erwartet"); });
      ["items", "chapters"].forEach(function (f) { if (s[f] !== undefined && !plain(s[f])) errs.push(k + "." + f + ": Zuordnung (Objekt) erwartet"); });
      ["days", "badges", "teach"].forEach(function (f) { if (s[f] !== undefined && s[f] !== null && !plain(s[f])) errs.push(k + "." + f + ": Objekt erwartet"); });
      if (s.runs !== undefined && !Array.isArray(s.runs)) errs.push(k + ".runs: Liste erwartet");
      if (plain(s.items)) Object.keys(s.items).forEach(function (id) {
        var it = s.items[id];
        if (!plain(it)) { errs.push(k + ".items." + id + ": Objekt erwartet"); return; }
        ["n", "ok"].forEach(function (f) { if (it[f] !== undefined && !nonnegInt(it[f])) errs.push(k + ".items." + id + "." + f + ": ganze Zahl ab 0 erwartet"); });
        if (nonnegInt(it.n) && nonnegInt(it.ok) && it.ok > it.n) errs.push(k + ".items." + id + ": mehr richtige als Versuche");
      });
      if (plain(s.chapters)) Object.keys(s.chapters).forEach(function (id) { if (!plain(s.chapters[id])) errs.push(k + ".chapters." + id + ": Objekt erwartet"); });
    },
    vocab: function (text, k, errs) {
      var s = parse(text, k, errs); if (s === undefined) return;
      if (!plain(s)) { errs.push(k + ": Objekt erwartet"); return; }
      Object.keys(s).forEach(function (id) {
        var w = s[id];
        if (!plain(w)) { errs.push(k + "." + id + ": Objekt erwartet"); return; }
        if (w.level !== undefined && !(nonnegInt(w.level) && w.level <= 5)) errs.push(k + "." + id + ".level: 0 bis 5 erwartet");
        ["seen", "right"].forEach(function (f) { if (w[f] !== undefined && !nonnegInt(w[f])) errs.push(k + "." + id + "." + f + ": ganze Zahl ab 0 erwartet"); });
        if (nonnegInt(w.seen) && nonnegInt(w.right) && w.right > w.seen) errs.push(k + "." + id + ": mehr richtige als Versuche");
      });
    },
    obj: function (text, k, errs) { var s = parse(text, k, errs); if (s === undefined) return; if (!plain(s)) errs.push(k + ": Objekt erwartet"); else counters(s, k, errs, 0); },
    objOrNull: function (text, k, errs) { var s = parse(text, k, errs); if (s === undefined) return; if (s !== null && !plain(s)) errs.push(k + ": Objekt erwartet"); else if (s) counters(s, k, errs, 0); },
    json: function (text, k, errs) { var s = parse(text, k, errs); if (s === undefined) return; if (s === null || typeof s !== "object") errs.push(k + ": Objekt oder Liste erwartet"); else counters(s, k, errs, 0); },
    history: function (text, k, errs) {
      var s = parse(text, k, errs); if (s === undefined) return;
      if (!plain(s)) { errs.push(k + ": Objekt erwartet"); return; }
      if (s.attempts !== undefined && !Array.isArray(s.attempts)) errs.push(k + ".attempts: Liste erwartet");
      if (s.sessions !== undefined && !plain(s.sessions)) errs.push(k + ".sessions: Objekt erwartet");
      counters(s, k, errs, 0);
    },
    id: function (text, k, errs) { if (!/^[a-z0-9][a-z0-9:_.\-]{0,120}$/i.test(text)) errs.push(k + ": ungültige Kennung"); },
    locale: function (text, k, errs) { if (!/^[a-z]{2}(-[A-Z]{2})?$/.test(text)) errs.push(k + ": ungültige Sprache"); },
    date: function (text, k, errs) { if (text !== "" && !/^\d{4}-\d{2}-\d{2}$/.test(text)) errs.push(k + ": Datum JJJJ-MM-TT erwartet"); },
    num: function (text, k, errs) { if (text !== "" && !(isFinite(+text) && +text >= 0)) errs.push(k + ": Zahl ab 0 erwartet"); },
    text: function (text, k, errs) { if (text.length > 20000) errs.push(k + ": Text zu lang"); }
  };

  /* ---------- Register ----------
     cls: progress (Lernfortschritt), profile (Einrichtung, Plan, Auswahl), pref (Einstellungen),
          consent (gilt nur auf diesem Gerät), service (private Dienstkonfiguration, nie exportiert),
          session (nur diese Sitzung), cache (wiederherstellbar), backup (Sicherungskopie), legacy (alte Fassung) */
  function validateDomainState(text, k, errors) {
    try {
      if (typeof text !== 'string' || text.length > 4000000) throw new Error('Invalid state size');
      var raw = JSON.parse(text);
      if (k === 'mnemika-life-v7') {
        if (!M.lifeV7 || typeof M.lifeV7.validateState !== 'function') throw new Error('Lernmodul noch nicht geladen; bitte erneut versuchen');
        if (!M.lifeV7.validateState(raw)) throw new Error('Ungueltiger Stand der Lebenslektionen');
      } else if (k === 'mnemika-motor-v1') {
        if (!M.motor || typeof M.motor.validateState !== 'function') throw new Error('Lernmotor noch nicht geladen; bitte erneut versuchen');
        if (!M.motor.validateState(raw)) throw new Error('Ungueltige Karteikarten oder Einstellungen');
      } else if (k === 'mnemika-life-v2') {
        var P = window.MNEMIKA_LIFE_PACK, C = window.MnemikaLifeCore;
        if (!P || !C) throw new Error('Werkstattdaten noch nicht geladen; bitte erneut versuchen');
        var ids = P.questions.questions.map(function(q){return q.id;});
        P.missions.missions.forEach(function(m){m.tasks.forEach(function(q){ids.push(q.id);});});
        C.createStore(null, ids, P.content.lessons.map(function(l){return l.id;})).previewImport(text);
      }
    } catch (e) { errors.push(k + ': ' + String(e.message || e)); }
  }
  var REG = [
    /* r168: neue Stoffknacker-Schlüssel (Testziele, Üben-Wahl, Analytics-Wahl) gehören in Sicherung, Bestand und Löschen */
    { k: "stoffknacker-testziele-v1", cls: "progress", v: V.testziele },
    { k: "stoffknacker-ueben-v1", cls: "pref", v: V.ueben },
    { k: "stoffknacker-analytics-consent-v1", cls: "consent", v: V.json },
    /* r160 (Audit R159-A07): Schule fürs Leben, alter (v6) und neuer (v7) Speicher; Live-Stand liefert ungespeicherte Änderungen */
    { k: "mnemika-life-v2", cls: "progress", v: validateDomainState },
    { k: "mnemika-blatt-v1", cls: "pref", v: V.json },
    { k: "mnemika-bilder-v1", cls: "consent", v: V.json },
    { k: "mnemika-learningkit-v1", cls: "progress", v: V.json },
    { k: "mnemika-vertiefung-v1", cls: "progress", v: V.json },
    { k: "mnemika-motor-v1", cls: "progress", v: validateDomainState, live: function () { return M.__motorLive ? M.__motorLive() : null; } },
    { k: "mnemika-life-v7", cls: "progress", v: validateDomainState, live: function () { return M.__lifeLive ? M.__lifeLive() : null; } },
    { k: "mnemika-v16", cls: "progress", v: V.v16, live: function () { return M.store ? JSON.stringify(M.store()) : null; } },
    { k: "mnemika-exam-history-v1", cls: "progress", v: V.history },
    { k: "mnemika-vocab-v1", cls: "progress", v: V.vocab },
    { k: "mnemika-vocab-day-v1", cls: "progress", v: V.json },
    { k: "mnemika-vocab-points-v1", cls: "progress", v: V.obj },
    { k: "mnemika-streak-v1", cls: "progress", v: V.obj },
    { k: "mnemika-mistakes-v1", cls: "progress", v: V.json },
    { k: "mnemika-records-v1", cls: "progress", v: V.json },
    { k: "mnemika-residual-v1", cls: "progress", v: V.json },
    { k: "mnemika-v44-game", cls: "progress", v: V.json },
    { p: "mnemika-v44-req-", cls: "progress", v: V.json },
    { k: "mnemika-program", cls: "profile", v: V.id },
    { k: "mnemika-locale", cls: "profile", v: V.locale },
    { k: "mnemika-learning-plan-v34", cls: "profile", v: V.objOrNull },
    { k: "mnemika-learning-plan-v40", cls: "profile", v: V.objOrNull },
    { p: "mnemika-learning-plan-v40-", cls: "profile", v: V.objOrNull },
    { k: "mnemika-target-date", cls: "profile", v: V.date },
    { p: "mnemika-target-date-v40-", cls: "profile", v: V.date },
    { k: "mnemika-weekly-minutes", cls: "profile", v: V.num },
    { p: "mnemika-weekly-minutes-v40-", cls: "profile", v: V.num },
    { k: "mnemika-onboarding-version", cls: "profile", v: V.text },
    { p: "mnemika-configuration-", cls: "profile", v: V.id },
    { p: "mnemika-config-", cls: "profile", v: V.text },
    { p: "mnemika-track-", cls: "profile", v: V.text },
    { p: "mnemika-learning-scope-v1217:", cls: "profile", v: V.json },
    { k: "mnemika-exam-scope-v1217", cls: "profile", v: V.text },
    { k: "mnemika-exam-dates-v1", cls: "profile", v: V.json },
    { k: "mnemika-exam-plan-v1", cls: "profile", v: V.objOrNull },
    { k: "mnemika-date-parts", cls: "profile", v: V.objOrNull },
    { k: "mnemika-third-language", cls: "profile", v: V.text },
    { k: "mnemika-lang3-v1", cls: "profile", v: V.text },
    { k: "mnemika-vocab-lang", cls: "profile", v: V.text },
    { k: "mnemika-age", cls: "profile", v: V.text },
    { k: "mnemika-welcome", cls: "profile", v: V.text },
    { k: "mnemika-setup-step", cls: "profile", v: V.text },
    { k: "mnemika-speech", cls: "pref", v: V.text },
    { k: "mnemika-mentors-enabled", cls: "pref", v: V.text },
    { k: "mnemika-install-hint", cls: "pref", v: V.text },
    { k: "mnemika-install-dismissed", cls: "pref", v: V.text },
    { k: "mnemika-consent", cls: "consent" },
    { k: "mnemika-consent-record", cls: "consent" },
    { k: "mnemika-ki-tutor-consent-v1", cls: "consent" },
    { k: "mnemika-ai-consent-v1", cls: "consent" },
    { k: "mnemika-ki-local-consent-v1", cls: "consent" },
    { k: "mnemika-ai-endpoint", cls: "service" },
    { k: "mnemika-test-session-v1217", cls: "session" },
    { k: "mnemika-pending-link", cls: "session" },
    { k: "mnemika-probe", cls: "session" },
    { k: "__probe", cls: "session" },
    { k: "mnemika-mentor-seed-v3", cls: "cache" },
    { k: "mnemika-pre-import-backup", cls: "backup" },
    { k: "mnemika-pre-reset-backup", cls: "backup" },
    { k: JOURNAL, cls: "backup" },
    { k: "mnemika-v7", cls: "legacy" }
  ];
  var PORTABLE = { progress: 1, profile: 1, pref: 1 };
  var CLASS_LABEL = { progress: "Lernfortschritt", profile: "Einrichtung und Plan", pref: "Einstellungen",
    consent: "Einwilligungen (gelten nur auf diesem Gerät)", service: "private Dienstkonfiguration",
    session: "laufende Sitzung", cache: "Zwischenspeicher", backup: "Sicherungskopien", legacy: "alte Fassung" };
  function owner(k) {
    for (var i = 0; i < REG.length; i += 1) { var r = REG[i]; if (r.k ? r.k === k : k.indexOf(r.p) === 0) return r; }
    return null;
  }
  M.storageOwner = owner;
  M.STORAGE_REGISTRY = REG;
  M.STORAGE_CLASS_LABEL = CLASS_LABEL;
  function lsKeys() {
    var out = [];
    try { for (var i = 0; i < localStorage.length; i += 1) { var k = localStorage.key(i); if (k != null) out.push(String(k)); } } catch (e) {}
    return out;
  }
  /* Bestandsaufnahme: welche Schlüssel liegen in welcher Klasse, welche sind nicht zugeordnet */
  M.storageInventory = function () {
    var inv = { byClass: {}, unknown: [] };
    lsKeys().forEach(function (k) {
      if (!/^(mnemika|stoffknacker)/i.test(k) && k !== "__probe") return;
      var o = owner(k);
      if (!o) { inv.unknown.push(k); return; }
      (inv.byClass[o.cls] = inv.byClass[o.cls] || []).push(k);
    });
    return inv;
  };

  /* ---------- Speichern mit Rückmeldung (MN-067) ----------
     Jeder Schreibvorgang wird zurückgelesen. Scheitert er, bleibt der Stand im Speicher offen,
     eine dauerhafte Meldung erscheint, und der Export nimmt diesen aktuellen Stand. */
  var dirty = {};
  M.__unsaved = dirty;
  M.persist = function (key, text) {
    var ok = false, msg = "";
    try { localStorage.setItem(key, text); ok = localStorage.getItem(key) === text; if (!ok) msg = "Rücklesen stimmt nicht"; }
    catch (e) { ok = false; msg = String((e && (e.name || e.message)) || e); }
    var was = !!dirty[key];
    if (ok) delete dirty[key]; else dirty[key] = text;
    if (was !== !ok || !ok) M.saveStatusPaint();
    return { ok: ok, status: ok ? "saved" : "not_saved", message: msg };
  };
  M.saveStatus = function () {
    var keys = Object.keys(dirty);
    return { ok: !keys.length, unsaved: keys };
  };
  M.retrySaves = function () {
    Object.keys(dirty).forEach(function (k) {
      var o = owner(k), text = o && o.live ? o.live() : dirty[k];
      if (text != null) M.persist(k, text);
    });
    return M.saveStatus();
  };
  var recovered = false;
  M.saveStatusPaint = function () {
    var st = M.saveStatus();
    var bar = document.getElementById("mn-save-status");
    if (st.ok) {
      if (bar && bar.dataset.state === "failed") {
        bar.dataset.state = "saved"; bar.setAttribute("role", "status");
        bar.innerHTML = "<b>Auf diesem Gerät gespeichert.</b> Dein Lernstand ist wieder sicher abgelegt.";
        recovered = true;
        setTimeout(function () { var b = document.getElementById("mn-save-status"); if (b && b.dataset.state === "saved") b.remove(); }, 6000);
      }
      return;
    }
    if (!document.body) return;
    if (!bar) {
      bar = document.createElement("div"); bar.id = "mn-save-status"; bar.className = "mn-save-status";
      document.body.appendChild(bar);
    }
    if (bar.dataset.state === "failed") return; /* eine Meldung, kein Wiederholen bei jedem Schreiben */
    bar.dataset.state = "failed"; bar.setAttribute("role", "alert");
    bar.innerHTML = "<p><b>Noch nicht gespeichert.</b> Deine Arbeit bleibt hier offen. Sichere sie als Datei, bevor du schliesst.</p>"
      + "<div class=\"mn-save-actions\"><button type=\"button\" class=\"btn go sm\" data-mn-save=\"export\">Aktuellen Lernstand sichern</button>"
      + "<button type=\"button\" class=\"btn sm\" data-mn-save=\"retry\">Erneut speichern</button></div>";
    bar.querySelector("[data-mn-save=export]").onclick = function () { M.downloadState(); };
    bar.querySelector("[data-mn-save=retry]").onclick = function () { M.retrySaves(); };
  };

  /* ---------- Export: aktueller Stand aller tragbaren Bereiche (MN-051) ---------- */
  M.exportState = function () {
    var out = { schema: M.SCHEMA_VERSION, app: "Stoffknacker", version: M.version,
      exportedAt: new Date().toISOString(), keys: {}, owners: {}, omitted: {} };
    var seen = {};
    function take(k) {
      if (seen[k]) return; seen[k] = 1;
      var o = owner(k); if (!o || !PORTABLE[o.cls]) return;
      var v = null;
      if (o.live) { try { v = o.live(); } catch (e) { v = null; } }
      if (v == null && dirty[k] != null) v = dirty[k];
      if (v == null) { try { v = localStorage.getItem(k); } catch (e) { v = null; } }
      if (v != null) { out.keys[k] = String(v); out.owners[k] = o.cls; }
    }
    lsKeys().forEach(take);
    Object.keys(dirty).forEach(take);
    /* Bereiche mit Live-Stand (Hauptlernstand) immer aus dem Speicher der App, auch wenn noch nie geschrieben */
    REG.forEach(function (o) { if (o.k && o.live && PORTABLE[o.cls]) take(o.k); });
    var inv = M.storageInventory();
    Object.keys(inv.byClass).forEach(function (c) { if (!PORTABLE[c]) out.omitted[c] = inv.byClass[c].length; });
    if (inv.unknown.length) out.omitted.unbekannt = inv.unknown.length;
    out.declaredClasses = Object.keys(PORTABLE);
    return out;
  };
  M.exportBlob = function () {
    return new Blob([JSON.stringify(M.exportState(), null, 1)], { type: "application/json" });
  };
  M.downloadState = function () {
    var a = document.createElement("a");
    a.href = URL.createObjectURL(M.exportBlob());
    a.download = "stoffknacker-lernstand-" + M.dayKey() + ".json";
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
  };

  /* ---------- Import prüfen, bevor irgendetwas geschrieben wird (MN-053) ---------- */
  M.validateImport = function (text) {
    var err = [];
    try {
      if (typeof text !== "string") return { ok: false, errors: ["kein Text"] };
      if (text.length > MAX) return { ok: false, errors: ["Datei zu gross"] };
      /* r174: keine Sperre ganzer Dateien wegen Wörtern wie «javascript:» oder «<script>» – das sind gültige Lerninhalte. Schutz: fachliche Prüfung je Schlüssel und sichere Darstellung (Escaping). */
      var data = null;
      try { data = JSON.parse(text); } catch (e) { return { ok: false, errors: ["kein gültiges JSON"] }; }
      if (!plain(data)) return { ok: false, errors: ["Objekt erwartet"] };
      if (data.app !== "mnemika" && data.app !== "Stoffknacker") err.push("fremde Datei");
      if (typeof data.schema !== "number") err.push("Schemaversion fehlt");
      else if (data.schema > M.SCHEMA_VERSION) err.push("neueres Schema als diese Fassung");
      else if (data.schema < 2) err.push("zu alte Schemaversion " + data.schema);
      if (!plain(data.keys)) { err.push("Feld keys fehlt oder ist kein Objekt"); return { ok: false, errors: err }; }
      var keys = Object.keys(data.keys);
      if (!keys.length) err.push("die Datei enthält keinen Lernstand");
      var accepted = {}, skipped = [];
      keys.forEach(function (k) {
        var v = data.keys[k], o = owner(k);
        if (!o) { skipped.push(k + " (unbekannt)"); return; }
        if (!PORTABLE[o.cls]) { skipped.push(k + " (" + CLASS_LABEL[o.cls] + ")"); return; }
        if (typeof v !== "string") { err.push(k + ": Wert ist kein Text"); return; }
        if (o.v !== V.testziele && o.v !== V.v16 && o.v !== V.vocab && /on\w+\s*=\s*["']?[^"'\s>]*\(/i.test(v) && /<[a-z]/i.test(v)) { err.push(k + ": ausführbarer Inhalt"); return; }
        if (o.v) o.v(v, k, err);
        accepted[k] = v;
      });
      /* R157b (FIN-01): eine Datei ohne einen einzigen übertragbaren Lernstand-Schlüssel darf nie ersetzen */
      if (!err.length && keys.length && !Object.keys(accepted).length) err.push("die Datei enthält keinen übertragbaren Lernstand");
      if (err.length) return { ok: false, errors: err.slice(0, 30) };
      var st = {};
      try { st = JSON.parse(accepted["mnemika-v16"] || "{}") || {}; } catch (e) { st = {}; }
      var plan = null;
      try { plan = JSON.parse(accepted["mnemika-learning-plan-v34"] || "null"); } catch (e) { plan = null; }
      var vocab = 0;
      try { vocab = Object.keys(JSON.parse(accepted["mnemika-vocab-v1"] || "{}") || {}).length; } catch (e) {}
      var declared = data.schema >= 3 && Array.isArray(data.declaredClasses) ? data.declaredClasses.filter(function (c) { return PORTABLE[c]; }) : null;
      return { ok: true, data: { schema: data.schema, app: "Stoffknacker", version: data.version || "", exportedAt: data.exportedAt || "",
          keys: accepted, declaredClasses: declared }, skipped: skipped, summary: {
        exportedAt: String(data.exportedAt || ""), version: String(data.version || ""),
        xp: st.xp || 0, streak: st.streak || 0,
        items: Object.keys(st.items || {}).length, vocab: vocab,
        testRuns: (st.testRuns || []).length,
        programme: accepted["mnemika-program"] || "",
        locale: accepted["mnemika-locale"] || "",
        plan: plan ? (plan.moduleCount + " Module") : "kein Plan", keys: Object.keys(accepted).length } };
    } catch (e) {
      return { ok: false, errors: ["Datei konnte nicht geprüft werden: " + String(e && e.message || e)] };
    }
  };

  /* Was ein Ersetzen oder Zusammenführen ändern würde (nur Planung, schreibt nichts) */
  M.importPlan = function (data, mode) {
    mode = mode === "merge" ? "merge" : "replace";
    var set = {}, remove = [], keep = [];
    Object.keys(data.keys).forEach(function (k) { set[k] = data.keys[k]; });
    if (mode === "replace") {
      var declared = data.declaredClasses;
      lsKeys().forEach(function (k) {
        if (Object.prototype.hasOwnProperty.call(set, k)) return;
        var o = owner(k); if (!o || !PORTABLE[o.cls]) return;
        var covered = declared ? declared.indexOf(o.cls) >= 0 : LEGACY_KEYS.indexOf(k) >= 0;
        if (covered) remove.push(k); else keep.push(k);
      });
    }
    return { mode: mode, set: set, remove: remove, keep: keep };
  };

  /* ---------- Transaktion: Journal, Schreiben mit Rücklesen, Rückabwicklung (MN-054) ---------- */
  var failAt = null; /* nur für Tests: Name des Schlüssels, bei dem ein Schreibfehler simuliert wird */
  M.__restoreFailAt = function (k) { failAt = k || null; };
  function write(k, v) {
    if (failAt && failAt === k) throw new Error("simulierter Schreibfehler");
    if (v === null) { localStorage.removeItem(k); if (localStorage.getItem(k) !== null) throw new Error("Entfernen fehlgeschlagen"); return; }
    localStorage.setItem(k, v);
    if (localStorage.getItem(k) !== v) throw new Error("Rücklesen stimmt nicht");
  }
  function rollback(old) {
    var bad = [];
    Object.keys(old).forEach(function (k) {
      try { if (localStorage.getItem(k) === old[k]) return; /* unverändert: nichts zurückzuschreiben */
        if (old[k] === null) localStorage.removeItem(k); else localStorage.setItem(k, old[k]);
        if (localStorage.getItem(k) !== old[k]) bad.push(k); } catch (e) { bad.push(k); }
    });
    return bad;
  }
  /* R157b (FIN-01/02/03): applyImport prüft selbst nach (verlässt sich nicht auf die Vorschau), ändert nichts ohne lesbaren
     Altstand und exakt zurückgelesenes Journal, und markiert den Abschluss dauerhaft, bevor das Journal entfernt wird. */
  function importGueltig(data) {
    if (!plain(data) || !plain(data.keys)) return false;
    var ks = Object.keys(data.keys); if (!ks.length) return false;
    return ks.every(function (k) { var o = owner(k); return !!o && !!PORTABLE[o.cls] && typeof data.keys[k] === "string"; });
  }
  M.applyImport = function (data, mode) {
    var checked;
    try { checked = M.validateImport(JSON.stringify(data)); } catch (e) { checked = {ok:false, errors:[String(e.message || e)]}; }
    if (!checked.ok) return {ok:false,status:'invalid',message:(checked.errors || []).join('; '),written:0,removed:0};
    data = checked.data;
    var plan = M.importPlan(data, mode);
    var touched = Object.keys(plan.set).concat(plan.remove);
    var old = {}, lesefehler = "";
    touched.forEach(function (k) { try { old[k] = localStorage.getItem(k); } catch (e) { lesefehler = k; } });
    if (lesefehler) return { ok: false, status: "read_failed", failedKey: lesefehler, message: "Der bisherige Stand liess sich nicht lesen. Nichts wurde geändert.", written: 0, removed: 0, plan: plan };
    var backup = M.exportState();
    try { localStorage.setItem("mnemika-pre-import-backup", JSON.stringify(backup)); } catch (e) {}
    var journal = false, jtext = JSON.stringify({ phase: "applying", at: new Date().toISOString(), old: old });
    try { localStorage.setItem(JOURNAL, jtext); journal = localStorage.getItem(JOURNAL) === jtext; } catch (e) { journal = false; }
    if (!journal) { try { localStorage.removeItem(JOURNAL); } catch (e) {}
      return { ok: false, status: "journal_failed", message: "Die Sicherungskopie für den Notfall liess sich nicht speichern (Speicher voll?). Nichts wurde geändert.", written: 0, removed: 0, backup: backup, plan: plan }; }
    var done = 0, failedKey = "", message = "", changed = {};
    try {
      plan.remove.forEach(function (k) { failedKey = k; changed[k] = old[k]; write(k, null); done += 1; });
      Object.keys(plan.set).forEach(function (k) { failedKey = k; changed[k] = old[k]; write(k, plan.set[k]); done += 1; });
      failedKey = "";
    } catch (e) {
      message = String(e && e.message || e);
      /* nur zurückschreiben, was dieser Vorgang angefasst hat (auch den gescheiterten Schlüssel) */
      var bad = rollback(changed);
      if (!bad.length) { try { localStorage.removeItem(JOURNAL); } catch (e2) {} }
      return { ok: false, status: bad.length ? "rollback_failed" : "rolled_back", failedKey: failedKey, message: message,
        written: 0, removed: 0, unrestored: bad, backup: backup, plan: plan };
    }
    /* Abschluss dauerhaft vermerken: ein nicht löschbares Journal darf den fertigen Import beim nächsten Start nicht rückgängig machen */
    var ctext = JSON.stringify({ phase: "committed", at: new Date().toISOString() }), commit = false;
    try { localStorage.setItem(JOURNAL, ctext); commit = localStorage.getItem(JOURNAL) === ctext; } catch (e) { commit = false; }
    if (!commit) { var bad2 = rollback(changed); if (!bad2.length) { try { localStorage.removeItem(JOURNAL); } catch (e3) {} }
      return { ok: false, status: bad2.length ? "rollback_failed" : "rolled_back", failedKey: JOURNAL, message: "Abschluss liess sich nicht speichern; zurückgesetzt.", written: 0, removed: 0, unrestored: bad2, backup: backup, plan: plan }; }
    try { localStorage.removeItem(JOURNAL); } catch (e) {}
    return { ok: true, status: "committed", written: Object.keys(plan.set).length, removed: plan.remove.length,
      kept: plan.keep.length, journal: journal, backup: backup, plan: plan };
  };
  /* Ein beim Schliessen unterbrochenes Ersetzen wird beim nächsten Start zurückgerollt,
     bevor irgendein Bereich seinen Stand liest. */
  (function recoverJournal() {
    var j = null;
    try { j = JSON.parse(localStorage.getItem(JOURNAL) || "null"); } catch (e) { j = null; }
    if (j && j.phase === "committed") { try { localStorage.removeItem(JOURNAL); } catch (e) {} return; }
    if (!j || j.phase !== "applying" || !plain(j.old)) return;
    var bad = rollback(j.old);
    if (!bad.length) { try { localStorage.removeItem(JOURNAL); } catch (e) {} }
    M.__journalRecovered = { at: j.at, unrestored: bad };
  })();

  /* ---------- Zurücksetzen mit erklärtem Umfang (MN-052) ----------
     scope "progress": nur Lernfortschritt. scope "learning": Fortschritt, Plan und Einrichtung.
     scope "all": alle App-Daten auf diesem Gerät.
     Die letzte Sicherungskopie bleibt, ausser keepBackup ist false. */
  var RESET = { progress: { progress: 1, session: 1 },
    learning: { progress: 1, profile: 1, session: 1 },
    all: { progress: 1, profile: 1, pref: 1, consent: 1, service: 1, session: 1, cache: 1, legacy: 1 } };
  M.resetPreview = function (scope) {
    var cls = RESET[scope] || RESET.progress, del = [], keep = [];
    lsKeys().forEach(function (k) {
      var o = owner(k);
      if (!o) { if (scope === "all" && /^(mnemika|stoffknacker)/i.test(k)) del.push(k); else if (/^(mnemika|stoffknacker)/i.test(k)) keep.push(k); return; }
      if (cls[o.cls]) del.push(k); else keep.push(k);
    });
    return { scope: scope, remove: del, keep: keep };
  };
  M.resetState = function (scope, opts) {
    /* ohne Angabe: wie bisher Fortschritt, Plan und Einrichtung, Einstellungen und Einwilligungen bleiben */
    scope = RESET[scope] ? scope : "learning";
    var o = opts || {};
    var backup = M.exportState();
    try { localStorage.setItem("mnemika-pre-reset-backup", JSON.stringify(backup)); } catch (e) {}
    var prev = M.resetPreview(scope), left = [];
    prev.remove.forEach(function (k) { if (k === "mnemika-pre-reset-backup") return; try { localStorage.removeItem(k); } catch (e) {} });
    if (o.keepBackup === false) { try { localStorage.removeItem("mnemika-pre-reset-backup"); localStorage.removeItem("mnemika-pre-import-backup"); } catch (e) {} }
    try { sessionStorage.removeItem("mnemika-test-session-v1217"); if (M.EXAM_V1217 && M.EXAM_V1217.erase) M.EXAM_V1217.erase(); } catch (e) {}
    try { sessionStorage.removeItem("mnemika-pending-link"); } catch (e) {}
    prev.remove.forEach(function (k) { if (k === "mnemika-pre-reset-backup" && o.keepBackup !== false) return; try { if (localStorage.getItem(k) !== null) left.push(k); } catch (e) {} });
    Object.keys(dirty).forEach(function (k) { delete dirty[k]; });
    backup.resetScope = scope; backup.remaining = left; backup.ok = !left.length;
    return backup;
  };
})();

/* Production language runtime: deterministic German only. */
(function () {
  "use strict";
  var M = window.MNEMIKA;
  M.MT_CACHE = {};
  M.MT_STATS = { translated: 0, failed: 0, cached: 0 };
  M.mtSupported = function () { return false; };
  M.mtAvailability = function () { return Promise.resolve("unavailable"); };
  M.mtWarm = function (texts, cb) { if (cb) cb(0); };
  M.mtReport = function () { return { supported: false, warmEntries: 0, translated: 0, failed: 0 }; };
})();

/* Selbsttest im Produkt. Läuft im Browser des Nutzers, nicht in meiner Umgebung.
   Erreichbar über #selftest oder das Menü. Prüft, was tatsächlich funktioniert. */
(function () {
  "use strict";
  var M = window.MNEMIKA;
  M.selfTest = function () {
    var R = [];
    var ok = (name, cond, detail) => R.push({ name, pass: !!cond, detail: String(detail || "") });
    try {
      ok("Inhalt geladen", M.chapters.length === 105, M.chapters.length + " Kapitel");
      ok("Aufgaben geladen", M.allQuestions().length === 1079, M.allQuestions().length + " Aufgaben");
      var blocks = M.chapters.reduce((a, c) => a + (c.blocks || []).filter(b => (b.body || []).length).length, 0);
      ok("Lernblöcke", blocks >= 421, blocks + " Blöcke");
      var ex = 0, lost = 0;
      M.chapters.forEach((c) => {
        var L = M.lessonDataFor(c); ex += (L.examples || []).length;
        var u = M.unitsOf(c, L).map(x => x.blockId);
        (c.blocks || []).forEach(b => { if (b.id && u.indexOf(b.id) < 0) lost += 1; });
      });
      ok("Kein Quellblock verloren", lost === 0, lost + " verloren");
      ok("Beispiele erreichbar", ex >= 179, ex + " Beispiele");
      ok("Abschlüsse", M.activeProgrammes().length === 6, M.activeProgrammes().length + " Abschlüsse");
      ok("Aktiver Abschluss", !!M.program(M.activeProgram()), M.programLabel(M.program(M.activeProgram()) || {}));
      var pl = M.learningPlanV34();
      ok("Lernplan vorhanden", !!(pl && pl.moduleCount), pl ? pl.moduleCount + " Module" : "keiner");
      ok("Sprachausgabe", !!window.speechSynthesis, M.speechLang());
      ok("Gerätübersetzung", M.mtSupported(), M.mtSupported() ? "Translator-API vorhanden" : "nicht in diesem Browser");
      var a = M.contentAudit();
      ok("Inhaltsübersetzung vollständig", a.missingEnglish === 0,
        a.filled + " von " + a.total + " Datensätzen, " + a.coverage + " Prozent");
      ok("Sprachen sichtbar", M.availableLocales().length > 1,
        M.availableLocales().map(l => l.short).join(", "));
      var gaps = M.i18nGaps();
      ok("Oberflächenschlüssel vollständig", Object.keys(gaps).every(k => !gaps[k].length),
        Object.keys(M.I18N.de).length + " Schlüssel");
      var verified = M.PROGRAMS.filter(p => (M.SOURCE_REGISTRY[p.source] || {}).verified).length;
      ok("Lehrpläne geprüft", verified === 6, verified + " von 6 gegen die amtliche Quelle geprüft");
      ok("Speicher erreichbar", (function () {
        try { localStorage.setItem("mnemika-probe", "1"); localStorage.removeItem("mnemika-probe"); return true; }
        catch (e) { return false; }
      })(), "localStorage");
    } catch (e) {
      R.push({ name: "Selbsttest abgebrochen", pass: false, detail: e.message });
    }
    return R;
  };
  M.renderSelfTest = function (el) {
    var R = M.selfTest();
    var bad = R.filter(x => !x.pass).length;
    el.className = "view";
    el.innerHTML = `<header class="vhead"><p class="eyebrow">${M.esc(M.t("st.eyebrow", "Selbsttest"))}</p>
      <h1>${R.length - bad} ${M.esc(M.t("st.of", "von"))} ${R.length} ${M.esc(M.t("st.ok", "Prüfungen bestanden"))}</h1>
      <p class="vlead">${M.esc(M.t("st.lead", "Dieser Test läuft in deinem Browser mit dieser Datei. Was hier rot ist, funktioniert bei dir nicht."))}</p></header>
      <div class="stlist">${R.map(x => `<div class="strow ${x.pass ? "ok" : "bad"}">
        <span class="stmark">${x.pass ? "✓" : "✗"}</span>
        <span class="stname">${M.esc(x.name)}</span>
        <span class="stdetail">${M.esc(x.detail)}</span></div>`).join("")}</div>
      <p class="note" style="margin-top:var(--s3)">${M.esc(M.t("st.build", "Fassung"))}
        ${M.esc(M.version)} · ${M.esc(M.build)} · ${M.esc(M.locale())}</p>`;
  };
})();

/* Informationsarchitektur: fünf Lernziele, klar getrennte Modi,
   Einstiegstexte je Ansicht und je Fach. */
(function () {
  "use strict";
  var M = window.MNEMIKA;

  M.NAV = [
    { id: "home", label: "Start", hint: "Was bringt dich heute am weitesten?" },
    { id: "learn", label: "Lernen", hint: "Verstehen, ohne Bewertung" },
    { id: "practice", label: "Üben", hint: "Fehler machen dürfen, sofort Rückmeldung" },
    { id: "test", label: "Testen", hint: "Antworten bis zur Abgabe änderbar, Auswertung am Ende" },
    { id: "repeat", label: "Wiederholen", hint: "Fälliges abrufen, bevor du es vergisst" },
  ];
  M.UTIL = [
    { id: "progress", label: "Fortschritt" },
    { id: "more", label: "Mehr" },
  ];

  /* Alte Modi auf die neue Ordnung abgebildet */
  M.MODE_MAP = {
    daily: { home: "practice", label: "Adaptives Training" },
    arena: { home: "practice", label: "Tempo-Sprint", game: true },
    boss: { home: "practice", label: "Fachduell", game: true },
    errorHunt: { home: "practice", label: "Fehlerjagd", game: true },
    review: { home: "repeat", label: "Fällige Wiederholung" },
    cards: { home: "repeat", label: "Wischkarten" },
    chapter: { home: "test", label: "Kapiteltest", graded: true },
    exam: { home: "test", label: "Prüfungssimulation", graded: true },
    quickQuiz: { home: "test", label: "Kurzquiz", graded: true },
  };
  M.isGraded = (mode) => !!(M.MODE_MAP[mode] && M.MODE_MAP[mode].graded);
  M.isGame = (mode) => !!(M.MODE_MAP[mode] && M.MODE_MAP[mode].game);

  M.COPY = {
    home: {
      eyebrow: "Stoffknacker",
      title: "Was bringt dich heute am weitesten?",
      text: "Du musst heute nicht alles abdecken. Wähle, ob du etwas verstehen, festigen oder unter Prüfungsbedingungen testen willst. Stoffknacker zeigt dir danach den sinnvollsten Einstieg.",
      facts: [],
    },
    learn: {
      eyebrow: "Lernen", title: "Verstehen, bevor du dich prüfst",
      text: "Lektionen Schritt für Schritt: lesen, verstehen, kurz prüfen.",
      facts: [["Ziel", "verstehen"], ["Rückmeldung", "sofort"], ["Bewertung", "keine"], ["Dauer", "15 bis 45 Minuten"]],
      intro: "",
    },
    practice: {
      eyebrow: "Üben", title: "Fehler finden, bevor sie Punkte kosten",
      text: "Unsichere und fällige Aufgaben zuerst, mit Erklärung nach jeder Antwort.",
      facts: [["Ziel", "festigen"], ["Rückmeldung", "sofort"], ["Bewertung", "keine Note"], ["Dauer", "5 bis 20 Minuten"]],
      intro: "",
    },
    test: {
      eyebrow: "Testen", title: "Was kannst du ohne Hilfe?",
      text: "Ohne Hilfe, Auswertung am Schluss.",
      facts: [["Ziel", "messen"], ["Rückmeldung", "am Ende"], ["Bewertung", "Punktzahl"], ["Dauer", "4 Minuten bis Prüfungsdauer"]],
      intro: "",
    },
    repeat: {
      eyebrow: "Wiederholen", title: "Wissen verfügbar halten",
      text: "Kurze Abrufe, bevor du etwas vergisst.",
      facts: [["Ziel", "behalten"], ["Rückmeldung", "nach jeder Karte"], ["Bewertung", "Wiederholungsintervall"], ["Dauer", "3 bis 12 Minuten"]],
      intro: "",
    },
    progress: {
      eyebrow: "Fortschritt", title: "Was sitzt, was wackelt, was ist fällig?",
      text: "XP misst Aktivität. Für die Prüfung zählen Beherrschung, wiederkehrende Fehler und rechtzeitige Wiederholung. Diese Ansicht trennt die drei Grössen klar.",
      facts: [],
    },
    more: {
      eyebrow: "Mehr", title: "Prüfung, Lehrplan und Einstellungen",
      text: "Hier findest du Stoffabdeckung, Prüfungstermine, Quellen, Datenexport und technische Einstellungen.",
      facts: [],
    },
    games: {
      intro: "Gleicher Stoff, anderes Tempo. Spielmodi geben dir zusätzliche Spannung, verändern aber weder deinen Prüfungsstand noch deine formale Bewertung.",
    },
  };

  M.SUBJECT_INTRO = {
    math: "Mathematik wird leichter, wenn du Verfahren erkennst statt einzelne Aufgaben zu memorieren. Übersetze die Situation, wähle das Modell, rechne sauber und kontrolliere das Ergebnis.",
    biology: "Biologie prüft Zusammenhänge. Verbinde Struktur, Prozess und Funktion, und erkläre, was sich verändert, wenn ein Teil des Systems ausfällt.",
    chemistry: "Chemie wechselt zwischen drei Ebenen: beobachtbarer Stoff, Teilchenmodell und Reaktionsgleichung. Sichere Antworten verbinden alle drei.",
    physics: "Physik beginnt vor der Formel. Zeichne die Situation, benenne die Grössen, wähle das Gesetz und prüfe Einheit und Grössenordnung.",
    history: "Geschichte verlangt mehr als eine Chronologie. Ordne Ursachen, Interessen, Entscheidungen, Folgen und unterschiedliche Deutungen zu einem belegten Argument.",
    geography: "Geografie verbindet Raum, Daten und Prozesse. Lies Karte oder Diagramm präzise und erkläre danach, warum das räumliche Muster entsteht.",
    german: "Deutsch prüft genaues Lesen und kontrolliertes Schreiben. Beobachtung, Beleg und Wirkung müssen in jedem Analyseabsatz zusammengehören.",
    english: "Englisch belohnt genaues Lesen und kontrollierten Ausdruck. Erkenne das Argument, wähle passende Belege und erkläre ihre Wirkung, statt nur Inhalte nachzuerzählen.",
  };

  /* Einheitliches Symbolset, 24er Raster */
  var ico = (p) => `<svg viewBox="0 0 24 24" class="ic" aria-hidden="true" fill="none"
    stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;
  M.ICON = {
    home: ico('<path d="M4 11 12 4l8 7"/><path d="M6 10v9h12v-9"/>'),
    learn: ico('<path d="M4 5h7a2 2 0 0 1 2 2v12a2 2 0 0 0-2-2H4z"/><path d="M20 5h-7a2 2 0 0 0-2 2v12a2 2 0 0 1 2-2h7z"/>'),
    practice: ico('<path d="M12 3v18"/><path d="M5 8l7-5 7 5"/><circle cx="12" cy="17" r="3"/>'),
    test: ico('<path d="M7 3h10v18l-5-3-5 3z"/><path d="M9.5 9h5"/>'),
    repeat: ico('<path d="M4 12a8 8 0 0 1 13.7-5.6L20 8"/><path d="M20 4v4h-4"/><path d="M20 12a8 8 0 0 1-13.7 5.6L4 16"/><path d="M4 20v-4h4"/>'),
    progress: ico('<path d="M4 19V9"/><path d="M10 19V5"/><path d="M16 19v-7"/><path d="M22 19H2"/>'),
    more: ico('<circle cx="5" cy="12" r="1.4"/><circle cx="12" cy="12" r="1.4"/><circle cx="19" cy="12" r="1.4"/>'),
    play: ico('<path d="M7 4l12 8-12 8z"/>'),
    clock: ico('<circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3.5 2"/>'),
    spark: ico('<path d="M12 3l1.9 5.6L19.5 10l-5.6 1.9L12 17.5l-1.9-5.6L4.5 10l5.6-1.4z"/>'),
  };
})();

/* Die fünf Ziele als eigene Ansichten, dazu Fortschritt und Mehr. */
(function () {
  "use strict";
  var M = window.MNEMIKA;
  var esc = M.esc;

  var head = (k, extra) => {
    var c = M.COPY[k];
    return `<header class="vhead">
      <p class="eyebrow">${esc(c.eyebrow)}</p>
      <h1>${esc(c.title)}</h1>
      <p class="vlead">${esc(c.text)}</p>
      ${(c.facts || []).length ? `<details class="modefacts-d"><summary>So funktioniert dieser Bereich</summary><dl class="modefacts">${c.facts.map(([a, b]) =>
        `<div><dt>${esc(a)}</dt><dd>${esc(b)}</dd></div>`).join("")}</dl></details>` : ""}
      ${extra || ""}</header>`;
  };
  M.viewHead = head;

  var card = (o) => `<button class="v27-mode ${o.size === "big" ? "big" : ""}" data-act="${esc(o.act)}"
      ${o.arg ? `data-arg='${esc(JSON.stringify(o.arg))}'` : ""}>
    <span class="v27-mi">${o.icon || M.ICON.play}</span>
    <span class="v27-mt"><b>${esc(o.title)}</b><span>${esc(o.text)}</span></span>
    ${o.meta ? `<span class="v27-mm">${esc(o.meta)}</span>` : ""}</button>`;
  M.pickCard = card;

  /* ---------------- Start ---------------- */
  M.renderHome = function (el, S, stats) {
    var rec = M.recommend(S, stats);
    var homeSubject = null;
    if (stats.weakChapter && stats.weakChapter.subject) {
      homeSubject = stats.weakChapter.subject;
    } else if (typeof rec.arg === "string" && M.chapter(rec.arg)) {
      homeSubject = M.chapter(rec.arg).subject;
    }
    var homeMentor = M.MentorsCompact
      ? M.MentorsCompact.html({ subject: homeSubject, context: "home", stableKey: M.activeProgram() + "|" + M.dayKey(), pose: "recommendation", variant: "home" })
      : "";
    var P = (cls, title, text, act, arg) => `<button class="v27-path ${cls}"
        data-act="${esc(act)}" ${arg ? `data-arg='${esc(JSON.stringify(arg))}'` : ""}>
        <span><h3>${esc(title)}</h3><p>${esc(text)}</p><span class="go">${esc(M.t("common.open","Öffnen"))} →</span></span></button>`;
    el.innerHTML = `<div class="v27-top">
      <div class="v27-lead">
        <p class="eyebrow">${esc((M.program(M.activeProgram()) || {}).label || "Stoffknacker")}${
          (M.SESSIONS && M.SESSIONS[M.activeProgram()]) ? " · " + esc(M.SESSIONS[M.activeProgram()]) : ""}</p>
        <h1>Was bringt dich heute <em>weiter</em>?</h1>
        <p>Du musst heute nicht alles lernen. Entscheide, ob du ein neues Thema verstehen,
           unsicheren Stoff festigen oder deinen Stand ohne Hilfen prüfen willst.</p>
        <div class="v27-paths">
          ${P("v27-p1", M.t("path.understand.t","Verstehen"), M.t("path.understand.d","Baue ein Thema Schritt für Schritt auf."), "learn")}
          ${P("v27-p2", M.t("path.consolidate.t","Festigen"), M.t("path.consolidate.d","Übe gezielt dort, wo du noch unsicher bist."), "practice")}
          ${P("v27-p3", M.t("path.check.t","Prüfen"), M.t("path.check.d","Finde heraus, was unter Prüfungsbedingungen sitzt."), "test")}
        </div>
      </div>
      <aside class="v27-today mn-has-mentor mn-home">
        <p class="eyebrow">${esc(M.t("rec.today", M.t("rec.today", "Heute empfohlen")))}</p>
        <h2>${esc(rec.head)}</h2>
        <p class="meta">${esc(rec.meta)}</p>
        <p>${esc(rec.text)}</p>
        <button class="v27-cta" data-act="${esc(rec.act)}"
          ${rec.arg ? `data-arg='${esc(JSON.stringify(rec.arg))}'` : ""}>${esc(rec.cta)} →</button>
        ${homeMentor}
      </aside></div>
      ${(function () {
        var pl = M.learningPlanV34 ? M.learningPlanV34() : null;
        if (!pl) return "";
        return `<div class="planbar">
          <span class="pb"><b>${esc(pl.programmeLabel)}</b><span>${esc(M.t("dash.eyebrow"))}</span></span>
          ${pl.targetDate ? `<span class="pb"><b>${esc(M.formatDate(pl.targetDate))}</b><span>${esc(M.t("oc.due"))}</span></span>` : ""}
          <span class="pb"><b>${pl.weeklyMinutes} ${esc(M.t("unit.min"))}</b><span>${esc(M.t("plan.week"))}</span></span>
          <span class="pb"><b>${pl.moduleCount}</b><span>${esc(M.t("dash.blocks"))}</span></span>
          <button class="pbcta" data-open="${esc(pl.firstModule ? pl.firstModule.chapterId : "")}">
            ${esc(M.t("wc.sumfirst"))}: ${esc(M.tc(pl.firstModule ? pl.firstModule.chapterId : "", "title", pl.firstModuleTitle))} →</button>
        </div>`;
      })()}
      <div class="freebar">
        <b>${esc(M.t("brand.free"))}</b>
        <span>${esc(M.t("brand.what"))}</span>
        <span class="freelocal">${esc(M.t("brand.local"))}</span>
      </div>
      <div class="v27-strip">
        <div><b>${stats.mastery}%</b><span>${esc(M.t("stat.mastery","Beherrschung"))}</span></div>
        <div><b>${stats.due}</b><span>${esc(M.t("stat.due","Fällige Wiederholungen"))}</span></div>
        <div><b>${stats.daysToExam}</b><span>${esc(M.t("stat.days","Tage bis zur Prüfung"))}</span></div>
        <div><b>${stats.streak}</b><span>${esc(M.t("stat.streak","Tage Serie"))}</span></div>
      </div>`;
  };

  M.recommend = function (S, stats) {
    if (stats.due > 0) {
      var n = Math.min(20, stats.due);
      return { head: M.t("rec.due.h","Fällige Wiederholungen"), meta: `${Math.max(4, Math.round(n * 0.6))} ${M.t("unit.min","Minuten")} · ${stats.due} ${M.t("unit.tasks","Aufgaben")} ${M.t("unit.due","fällig")}`,
        text: "Diese Aufgaben stehen heute zur Wiederholung an. Wer sie jetzt abruft, behält sie deutlich länger.",
        act: "run", arg: { mode: "review", n: n }, cta: M.t("cta.start","Jetzt starten") };
    }
    if (stats.weakChapter) {
      return { head: stats.weakChapter.title, meta: `rund 15 Minuten · ${stats.weakChapter.errors} Fehler zuletzt`,
        text: `In diesem Kapitel sind zuletzt ${stats.weakChapter.errors} Fehler aufgetreten. Eine kurze Runde schliesst die aktuell grösste Lücke.`,
        act: "read", arg: stats.weakChapter.id, cta: M.t("cta.chapter","Kapitel öffnen") };
    }
    return { head: M.t("card.quick.t","Kurzquiz"), meta: `${M.t("rec.about","rund")} 4 ${M.t("unit.min","Minuten")} · 5 ${M.t("unit.tasks","Aufgaben")}`,
      text: "Alles Wichtige ist wiederholt. Prüfe deinen Stand oder beginne ein neues Kapitel.",
      act: "run", arg: { mode: "quickQuiz", n: 5 }, cta: M.t("cta.quiz","Kurzquiz starten") };
  };

  /* ---------------- Üben ---------------- */
  M.renderPractice = function (el, S, stats) {
    el.innerHTML = head("practice") + `${M.COPY.practice.intro ? `<p class="modeintro">${esc(M.COPY.practice.intro)}</p>` : ""}
      <div class="v27-modes">
        ${card({ act: "run", arg: { mode: "daily", n: 12 }, title: M.t("card.adaptive.t", "Adaptives Training"), icon: M.ICON.practice, size: "big",
          text: M.t("card.adaptive.d", "Unsichere, fällige und neue Aufgaben, gemischt nach deinem Stand."), meta: M.t("meta.5to20","5 bis 20 Minuten") })}
        ${card({ act: "games", title: M.t("card.games.t", "Spielmodus"), icon: M.ICON.spark, size: "big",
          text: M.t("card.games.d", "Tempo-Sprint, Fachduell und Fehlerjagd."), meta: M.t("meta.nograde","ohne Einfluss auf die Bewertung") })}
      </div>
      <h2 class="secline">${esc(M.t("prac.bysubject", M.t("prac.bysubject", "Nach Fach üben")))}</h2>
      <div class="v27-modes sec">${M.SUBJECT_ORDER.map((s) => card({
        act: "run", arg: { mode: "daily", subject: s, n: 12 }, title: M.tc("subject:" + s, "label", M.SUBJECTS[s].label),
        icon: M.logoOf(s), text: M.tc("subject:" + s, "intro", M.SUBJECT_INTRO[s]).split(".")[0] + ".",
      })).join("")}</div>`;
  };

  /* ---------------- Spielmodi ---------------- */
  M.renderGames = function (el) {
    el.innerHTML = `<header class="vhead"><p class="eyebrow">Üben</p><h1>Spielmodus</h1>
      <p class="vlead">${esc(M.COPY.games.intro)}</p></header>
      <div class="v27-modes">
        ${card({ act: "run", arg: { mode: "arena", n: 15 }, title: "Tempo-Sprint", icon: M.ICON.clock, size: "big",
          text: "Kurze Aufgaben unter Zeitdruck, sichtbare Serie, ein sauberes Ergebnisbild.", meta: "90 Sekunden" })}
        ${card({ act: "duel", title: "Fachduell", icon: M.ICON.spark, size: "big",
          text: "Ein Gegner je Fach mit Lebensbalken. Jede richtige Antwort nimmt einen Treffer.", meta: "acht Gegner" })}
      </div>
      <div class="v27-modes sec">
        ${card({ act: "hunt", title: "Fehlerjagd", icon: M.ICON.test,
          text: "Nur Aufgaben, bei denen du den ersten falschen Schritt findest." })}
        ${card({ act: "cards", title: M.t("card.cards.t", "Wischkarten"), icon: M.ICON.repeat,
          text: "Schneller Durchlauf mit Begriffs- und Fragekarten." })}
      </div>`;
  };

  /* ---------------- Testen ---------------- */
  M.renderTest = function (el, S, stats) {
    el.innerHTML = head("test") + `${M.COPY.test.intro ? `<p class="modeintro">${esc(M.COPY.test.intro)}</p>` : ""}
      <div class="v27-modes">
        ${card({ act: "run", arg: { mode: "quickQuiz", n: 5 }, title: M.t("card.quick.t", "Kurzquiz"), icon: M.ICON.clock, size: "big",
          text: "Fünf Aufgaben ohne Hilfen. Schnelle Standortbestimmung.", meta: M.t("meta.about4","rund 4 Minuten") })}
        ${card({ act: "chaptertest", title: M.t("card.chapter.t", "Kapiteltest"), icon: M.ICON.learn, size: "big",
          text: "Alle Aufgaben eines Kapitels, Auswertung nach Begriff und Fragetyp.", meta: M.t("meta.10to20","10 bis 20 Aufgaben") })}
        ${card({ act: "run", arg: { mode: "exam", n: 30 }, title: M.t("card.exam.t", "Prüfungssimulation"), icon: M.ICON.test, size: "big",
          text: "Lange Runde unter Prüfungsbedingungen, ohne Spielelemente.", meta: M.t("meta.30","30 Aufgaben") })}
      </div>
      <div class="note">Testergebnisse fliessen in deine Beherrschung ein. Spielmodi tun das nicht.</div>`;
  };

  /* ---------------- Wiederholen ---------------- */
  M.renderRepeat = function (el, S, stats) {
    el.innerHTML = head("repeat") + `${M.COPY.repeat.intro ? `<p class="modeintro">${esc(M.COPY.repeat.intro)}</p>` : ""}
      <div class="v27-modes">
        ${card({ act: "run", arg: { mode: "review", n: 20 }, title: M.t("card.due.t", "Fällige Wiederholung"), icon: M.ICON.repeat, size: "big",
          text: M.t("card.due.d", "Genau die Aufgaben, deren Intervall abgelaufen ist."), meta: stats.due + " fällig" })}
        ${card({ act: "cards", title: M.t("card.cards.t", "Wischkarten"), icon: M.ICON.spark, size: "big",
          text: M.t("card.cards.d", "Frage vorn, Antwort hinten. Rechts gewusst, links nochmals."), meta: "1536 Karten" })}
      </div>`;
  };
})();

/* Nachweisseite. Rechnet den Bestand live aus der laufenden App und zeigt
   die Ergebnisse der Prüfläufe, die beim Build erzeugt wurden. */
(function () {
  "use strict";
  var M = window.MNEMIKA;
  /* Ergebnisse der Prüfläufe dieses Builds */
  /* Kein handgeschriebener Testbericht. Die Werte kommen aus release/build-report.json,
     das die Pipeline erzeugt. Fehlt die Datei, wird das offen gesagt. */
  M.PROOF = (window.MNEMIKA_BUILD_REPORT || null);
  var esc = M.esc;

  M.proofInventory = function () {
    var chs = typeof M.activeChapters === 'function' ? M.activeChapters() : [];
    var entries = typeof M.activeQuestionEntries === 'function' ? M.activeQuestionEntries() : [];
    var ids = new Set(chs.map((c)=>c.id)), seen = new Set();
    entries = entries.filter((e) => {
      var c=e.c || e.chapter, q=e.q || e.question;
      if (!c || !q || !ids.has(c.id)) return false;
      var k=c.id+'|'+q.id; if(seen.has(k))return false;seen.add(k);return true;
    });
    var perSub = [...new Set(chs.map((c)=>c.subject))].map((sid)=>{
      var cs=chs.filter((c)=>c.subject===sid), sub=new Set(cs.map((c)=>c.id));
      var qs=entries.filter((e)=>sub.has((e.c||e.chapter).id));
      return {sid:sid,label:(M.SUBJECTS[sid]||{}).label||sid,chapters:cs.length,questions:qs.length};
    });
    return {scope:'selected_configuration',chapters:chs.length,questions:entries.length,
      uniqueQuestionIds:new Set(entries.map((e)=>(e.q||e.question).id)).size,
      subjects:perSub.length,perSubject:perSub,
      loadedLibraryChapters:(M.chapters||[]).length,
      programmeConfigurations:(M.RESOLVED_PLANS||[]).length};
  };
  M.renderProof = function (el, S) {
    var inv=M.proofInventory();
    var row=(a,b,c)=>`<tr><td>${esc(a)}</td><td class="n">${esc(String(b))}</td><td>${esc(c||'')}</td></tr>`;
    el.innerHTML=`<header class="vhead"><p class="eyebrow">Nachweis</p>
      <h1>Bestand und Pr\u00fcfstatus</h1>
      <p class="vlead">Die folgende Tabelle zeigt nur den aktuell gew\u00e4hlten Abschluss und seine Konfiguration.
      Bestandszahlen belegen keine vollst\u00e4ndige Lehrplanpr\u00fcfung oder Pr\u00fcfungsreife.</p></header>
      <h2 class="secline">Gew\u00e4hlter Lernplan</h2><div class="card"><div class="scroll"><table><tbody>
      ${row('F\u00e4cher',inv.subjects)}${row('Kapitel',inv.chapters)}
      ${row('Kapitel-Aufgaben-Zuordnungen',inv.questions,'Eine Aufgabe kann zu mehreren Kapiteln geh\u00f6ren.')}
      ${row('Unterschiedliche Aufgaben-IDs',inv.uniqueQuestionIds)}
      </tbody></table></div></div>
      <h2 class="secline">Bestand je Fach im gleichen Lernplan</h2>
      <div class="card"><div class="scroll"><table><thead><tr><th>Fach</th><th>Kapitel</th><th>Aufgaben-Zuordnungen</th></tr></thead>
      <tbody>${inv.perSubject.map((r)=>`<tr><td>${esc(r.label)}</td><td>${r.chapters}</td><td>${r.questions}</td></tr>`).join('')}</tbody></table></div></div>
      <h2 class="secline">Gesamte geladene Bibliothek</h2><div class="card"><p>${inv.loadedLibraryChapters} Kapitel und
      ${inv.programmeConfigurations} Konfigurationen sind geladen. Dazu geh\u00f6ren andere Abschl\u00fcsse und erhaltene Inhalte ausserhalb des gew\u00e4hlten Lernplans.</p></div>
      <h2 class="secline">Technische Tests und fachliche Pr\u00fcfung</h2><div class="card"><p>
      ${M.PROOF ? 'Ein eingebetteter Testbericht ist vorhanden. Seine Version, sein Umfang und seine Herkunft m\u00fcssen zum ausgelieferten Build passen; diese Seite best\u00e4tigt das nicht automatisch.' : 'F\u00fcr diesen Build ist kein verifizierter Testbericht eingebettet.'}
      Bestand und strukturelle Tests ersetzen keine unabh\u00e4ngige fachliche Begutachtung.</p>
      <p>Die Lern- und Pr\u00fcfungsaufgaben sind \u00dcbungsmaterial. Pflichtlekt\u00fcre, verbindliche Vorgaben und Originalpr\u00fcfungen sind bei den jeweiligen Quellen zu pr\u00fcfen.
      Dokumentversionen, Geltungsbereich und offene Zuordnungen stehen bei den Quellen.</p></div>`;
  };
})();

/* Vollständiges Vorlesen, Markenzeichen, Abdeckungsansicht mit
   Zeitschätzung und die Datenschutzangaben. */
(function () {
  "use strict";
  var M = window.MNEMIKA;
  var esc = M.esc;

  /* ===================== 1 Vorlesen: alles erfassen ===================== */
  /* Elemente, die nie gesprochen werden: rohe Formelzeichen, Bedienelemente,
     Zähler und Marken. Alles andere wird gelesen. */
  var SKIP = ".fx,.fexpr,.rmath,.par-sym,.model-expr,.rearr,button,select,input,textarea," +
    ".tag,.chip,.swipe-count,.lstate,.keyhint,.digestbar,.listen,.exlv,.rn,.block-no,.sec-h i," +
    ".au-res,.cs-stamp,.badge,.bnum,.combo,.clock,.heart,.qmeta,.spine,.foot,.flowline,.keyfacts,.viz";

  M.expandAll = function (root) {
    root.querySelectorAll(".fcard").forEach((c) => {
      c.classList.add("open");
      var b = c.querySelector(".fbody");
      if (b) b.hidden = false;
      c.querySelectorAll(".rung.hide").forEach((r) => r.classList.remove("hide"));
    });
    root.querySelectorAll("details.fold").forEach((d) => { d.setAttribute("open", ""); });
    root.querySelectorAll(".au-diag[hidden]").forEach((d) => { d.hidden = false; });
    root.querySelectorAll(".au-btn").forEach((b) => { b.style.display = "none"; });
  };

  M.tagSpeakable = function (root) {
    root.querySelectorAll("[data-say]").forEach((n) => {
      if (n.getAttribute("data-say") !== "pause") n.removeAttribute("data-say");
    });
    var sel = "h2,h3,h4,h5,h6,p,li,dt,dd,figcaption,.kick,.warn,.tipbox,.myth,.au-where," +
      ".par-means,.par-eff,.par-name,.res,.rwhy,.rw,.tk,.unitcheck,.au-lesson,.ib p,.orient span," +
      ".fspeak,.fmeta b,.qp,.prose,.opt span:last-child,.syms li,.exmeta span,.au-task,.legacy";
    root.querySelectorAll(sel).forEach((n) => {
      if (n.closest(SKIP)) return;
      if (n.querySelector(sel)) return;                 // nur Blattknoten
      if (n.classList && n.classList.contains("prose") && n.children.length) return;
      var t = (n.textContent || "").replace(/\s+/g, " ").trim();
      if (t.length < 3) return;
      if (/^[\d\s%,.:/·+−–-]+$/.test(t)) return;        // reine Zahlenreihen
      n.setAttribute("data-say", "1");
    });
    // Formelzeichen nur mit redaktionellem Sprechtext
    root.querySelectorAll("[data-spoken]").forEach((n) => n.setAttribute("data-say", "1"));
  };

  M.prepareSpeech = function (root) {
    M.expandAll(root);
    M.tagSpeakable(root);
  };

  /* ===================== 2 Markenzeichen ===================== */
  /* Das Zeichen: ein M aus einem durchgehenden Faden, der sich zur Schlaufe
     schliesst. Gedächtnis als Knoten, der hält. */
  M.BRAND = `<svg viewBox="0 0 48 48" class="brand-mark" aria-hidden="true">
    <rect x="3" y="3" width="42" height="42" rx="12" fill="#27348f"/><path d="M6 17.5c6.2-2.3 12-1.6 16.6 2.1V40c-4.6-3.6-10.4-4.4-16.6-2.1z" fill="#fff"/><path d="M42 17.5c-6.2-2.3-12-1.6-16.6 2.1V40c4.6-3.6 10.4-4.4 16.6-2.1z" fill="#e3e9ff"/><path d="M10 24c3.4-.9 6.6-.6 9.4.9M10 28.5c3.4-.9 6.6-.6 9.4.9M38 24c-3.4-.9-6.6-.6-9.4.9M38 28.5c-3.4-.9-6.6-.6-9.4.9" stroke="#9aa8e8" stroke-width="1.4" stroke-linecap="round" fill="none"/><path class="skl-f" d="M24 2.5c.9 3.9 2.9 5.9 6.8 6.8-3.9.9-5.9 2.9-6.8 6.8-.9-3.9-2.9-5.9-6.8-6.8 3.9-.9 5.9-2.9 6.8-6.8z" fill="#B8FF4A"/><path class="skl-s" d="M13.5 9.5l2.6 2.2M34.5 9.5l-2.6 2.2" stroke="#B8FF4A" stroke-width="2.2" stroke-linecap="round"/><circle cx="36.6" cy="5.4" r="1.7" fill="#FF8A5B"/>
    
  </svg>`;
  M.brandMark = () => M.BRAND;

  /* ===================== 3 Abdeckung und Zeitschätzung ===================== */
  M.estimate = function (S) {
    var chapters = M.chapters;
    var words = 0, questions = 0, repsLeft = 0, seen = 0, mastered = 0;
    chapters.forEach((c) => {
      words += (c.blocks || []).reduce((a, b) => a + (b.body || []).join(" ").split(/\s+/).length, 0);
      M.chapterQuestions(c).forEach((q) => {
        questions += 1;
        var it = S.items[q.id];
        var ok = it ? it.ok : 0;
        if (it && it.n) seen += 1;
        if (ok >= 3) mastered += 1;
        repsLeft += Math.max(0, 3 - ok);
      });
    });
    // gemessene Geschwindigkeit
    var runs = (S.runs || []).filter((r) => r.mins > 0 && r.total > 0);
    var secPerQ = runs.length
      ? Math.max(12, Math.min(180, (runs.reduce((a, r) => a + r.mins * 60, 0) / runs.reduce((a, r) => a + r.total, 0))))
      : 45;
    var days = Object.keys(S.days || {});
    var activeDays = days.length || 1;
    var xpTotal = days.reduce((a, d) => a + S.days[d], 0);
    var xpPerDay = Math.round(xpTotal / activeDays) || 0;
    // XP pro Aufgabe im Schnitt rund 11, daraus Aufgaben pro Tag
    var qPerDay = Math.max(1, Math.round(xpPerDay / 11));
    var minPerDay = Math.round((qPerDay * secPerQ) / 60);

    var readMin = Math.round((words / 190));           // 190 Wörter pro Minute
    var unreadChapters = chapters.filter((c) => !(S.chapters[c.id] || {}).read).length;
    var readLeftMin = Math.round(readMin * (unreadChapters / Math.max(1, chapters.length)));
    var practiceLeftMin = Math.round((repsLeft * secPerQ) / 60);
    var totalLeftMin = readLeftMin + practiceLeftMin;

    /* Zieldatum des gewählten Abschlusses, sonst die Passerelle-Session */
    var tgt = M.targetDate && M.targetDate();
    var daysToExam = tgt ? M.daysUntil(tgt) : M.daysUntil(M.OFFICIAL.written.from);
    var neededPerDay = daysToExam > 0 ? Math.ceil(totalLeftMin / daysToExam) : totalLeftMin;
    var daysAtCurrentPace = minPerDay > 0 ? Math.ceil(totalLeftMin / minPerDay) : null;

    return {
      words, questions, seen, mastered, repsLeft, secPerQ: Math.round(secPerQ),
      readMin, readLeftMin, practiceLeftMin, totalLeftMin,
      xpPerDay, qPerDay, minPerDay, activeDays,
      daysToExam, neededPerDay, daysAtCurrentPace,
      onTrack: daysAtCurrentPace !== null && daysAtCurrentPace <= daysToExam,
      coverage: Math.round((seen / Math.max(1, questions)) * 100),
      mastery: Math.round((mastered / Math.max(1, questions)) * 100),
    };
  };

  var hm = (min) => {
    if (min < 60) return min + " Minuten";
    var h = Math.floor(min / 60), m = min % 60;
    return h + " Stunden" + (m ? " " + m + " Minuten" : "");
  };
  M.hm = hm;

  M.renderCoverage = function (el, S) {
    var e = M.estimate(S);
    var subs = M.SUBJECT_ORDER.map((s) => {
      var cs = M.chapters.filter((c) => c.subject === s);
      var ids = [];
      cs.forEach((c) => M.chapterQuestions(c).forEach((q) => ids.push(q.id)));
      var seen = ids.filter((id) => S.items[id] && S.items[id].n).length;
      var mast = ids.filter((id) => S.items[id] && S.items[id].ok >= 3).length;
      return {
        s, label: M.tc("subject:" + s, "label", M.SUBJECTS[s].label), chapters: cs.length,
        read: cs.filter((c) => (S.chapters[c.id] || {}).read).length,
        q: ids.length, seen, mast,
        pics: cs.reduce((a, c) => a + ((M.ILLUS[c.id] || []).length), 0),
        cards: cs.reduce((a, c) => a + (c.models || []).length, 0),
      };
    });
    el.innerHTML = `
      <h2 style="font-size:26px;margin-bottom:6px">Abdeckung und Zeitbedarf</h2>
      <p class="muted" style="max-width:68ch;margin-bottom:22px">Alle Zahlen stammen aus deinem tatsächlichen Lernstand
      und aus dem gemessenen Tempo. Nichts davon ist geschätzt geraten.</p>

      <div class="grid g4" style="margin-bottom:22px">
        <div class="stat"><b>${e.coverage}%</b><span>Aufgaben mindestens einmal bearbeitet</span></div>
        <div class="stat"><b>${e.mastery}%</b><span>sicher beherrscht, dreimal richtig</span></div>
        <div class="stat"><b>${e.daysToExam}</b><span>Tage bis zur schriftlichen Prüfung</span></div>
        <div class="stat"><b>${hm(e.totalLeftMin)}</b><span>geschätzter Restaufwand</span></div>
      </div>

      <div class="card" style="margin-bottom:22px">
        <h3 style="font-size:18px;margin-bottom:12px">Wie die Schätzung zustande kommt</h3>
        <div class="scroll"><table><tbody>
          <tr><td>Lehrtext insgesamt</td><td class="n">${e.words.toLocaleString("de-CH")} Wörter</td>
            <td class="muted">rund ${hm(e.readMin)} Lesezeit bei 190 Wörtern je Minute</td></tr>
          <tr><td>Noch nicht gelesene Kapitel</td><td class="n">${hm(e.readLeftMin)}</td>
            <td class="muted">anteilig aus der Gesamtlesezeit</td></tr>
          <tr><td>Aufgaben insgesamt</td><td class="n">${e.questions}</td>
            <td class="muted">davon ${e.seen} schon bearbeitet</td></tr>
          <tr><td>Offene Wiederholungen</td><td class="n">${e.repsLeft}</td>
            <td class="muted">bis jede Aufgabe dreimal sicher sass</td></tr>
          <tr><td>Dein gemessenes Tempo</td><td class="n">${e.secPerQ} s je Aufgabe</td>
            <td class="muted">${(S.runs || []).filter((r) => r.mins).length ? "aus deinen bisherigen Runden" : "Startwert, wird mit der ersten Runde ersetzt"}</td></tr>
          <tr><td>Übungszeit, die noch fehlt</td><td class="n">${hm(e.practiceLeftMin)}</td>
            <td class="muted">offene Wiederholungen mal gemessenes Tempo</td></tr>
        </tbody></table></div>
      </div>

      <div class="card ${e.onTrack ? "" : "warnbox"}" style="margin-bottom:22px">
        <h3 style="font-size:18px;margin-bottom:10px">Schaffst du das bis zum 15. Februar 2027?</h3>
        <div class="prose" style="font-size:16px">
          ${e.minPerDay > 0
            ? `<p>Du lernst im Schnitt <strong>${e.minPerDay} Minuten pro Tag</strong>, gerechnet über ${e.activeDays} aktive ${e.activeDays === 1 ? "Tag" : "Tage"}.
               In diesem Tempo brauchst du noch <strong>${e.daysAtCurrentPace} Tage</strong>, und bis zur Prüfung sind es ${e.daysToExam}.</p>
               <p>${e.onTrack
                 ? "Das reicht. Halte das Tempo, dann bist du rechtzeitig durch."
                 : `Das reicht so nicht. Nötig wären rund <strong>${hm(e.neededPerDay)} pro Tag</strong> statt der bisherigen ${hm(e.minPerDay)}.`}</p>`
            : `<p>Für eine Tempoaussage fehlen noch Daten. Spiel eine Runde, danach rechnet die App mit deinem gemessenen Tempo statt mit einem Startwert.</p>
               <p>Bei den verbleibenden ${e.daysToExam} Tagen wären rund <strong>${hm(e.neededPerDay)} pro Tag</strong> nötig.</p>`}
        </div>
      </div>

      <h3 style="font-size:18px;margin-bottom:12px">Abdeckung je Fach</h3>
      <div class="card" style="margin-bottom:22px"><div class="scroll"><table>
        <thead><tr><th>Fach</th><th class="n">Kapitel</th><th class="n">gelesen</th><th class="n">Aufgaben</th>
        <th class="n">bearbeitet</th><th class="n">sicher</th><th class="n">Bilder</th><th class="n">Formelkarten</th></tr></thead>
        <tbody>${subs.map((r) => `<tr><td><span class="cov-dot s-${r.s}"></span>${esc(r.label)}</td>
          <td class="n">${r.chapters}</td><td class="n">${r.read}</td><td class="n">${r.q}</td>
          <td class="n">${r.seen}</td><td class="n" style="color:${r.mast / Math.max(1, r.q) > .7 ? "var(--green)" : "var(--tx2)"}">${r.mast}</td>
          <td class="n">${r.pics}</td><td class="n">${r.cards}</td></tr>`).join("")}</tbody>
      </table></div></div>

      <h3 style="font-size:18px;margin-bottom:12px">Stoffabdeckung gegen die Richtlinien</h3>
      <div class="card" style="margin-bottom:22px">
        <div class="prose" style="font-size:16px">
          <p>Die Kapitelstruktur folgt den Richtlinien 2023 der Schweizerischen Maturitätskommission. Abgedeckt sind alle fünf
          Prüfungsfächer: Deutsch, Englisch, Mathematik, Naturwissenschaften mit Biologie, Chemie und Physik sowie
          Geistes- und Sozialwissenschaften mit Geografie und Geschichte.</p>
          <p><strong>Was die App nicht ersetzt:</strong> die vier verbindlichen Deutsch-Werke müssen gelesen werden,
          die drei englischen Werke ebenfalls, und die Originalprüfungen früherer Sessionen sind nur beim
          Prüfungssekretariat erhältlich. Ohne diese drei Dinge reicht die App allein nicht.</p>
        </div>
        <div class="covgrid">
          ${M.SUBJECT_ORDER.map((s) => `<div class="covcell s-${s}">${M.logoOf(s)}
            <b>${esc(M.tc("subject:" + s, "label", M.SUBJECTS[s].label))}</b>
            <span>${M.chapters.filter((c) => c.subject === s).length} Kapitel</span></div>`).join("")}
        </div>
      </div>

      <h3 style="font-size:18px;margin-bottom:12px">Daten und Datenschutz</h3>
      <div class="card">
        <div class="prose" style="font-size:16px">
          <p><strong>Was diese App speichert.</strong> Dein Lernstand, dein Lernplan und deine Einstellungen liegen im Speicher deines
          Browsers (localStorage und IndexedDB) und werden von Stoffknacker nicht an einen Server gesendet. Ein Konto gibt es nicht.</p>
          <p><strong>Wer trotzdem etwas sieht.</strong> Beim Aufruf der Seite verarbeitet der Hoster GitHub technische Daten wie
          deine IP-Adresse. Wenn du die KI-Lernhilfe auf deinem Gerät startest, lädt dein Browser nach deiner Einwilligung ein
          Sprachmodell und Programmbibliotheken von Hugging Face, jsDelivr und GitHub herunter; diese Anbieter sehen dabei deine
          IP-Adresse. Ist Werbung eingeschaltet, kommen Google und seine Partner dazu.</p>
          <p>Die Vorlesefunktion nutzt die Sprachausgabe deines Betriebssystems. Je nach Gerät kann diese Text an den Hersteller
          senden; das geschieht ausserhalb von Stoffknacker.</p>
          <p>Alle Einzelheiten stehen unter <button class="lnk" type="button" data-cov-legal="privacy">«Datenschutz»</button> und
          <button class="lnk" type="button" data-cov-legal="cookies">«Cookies und lokaler Speicher»</button>.</p>
        </div>
        <p class="buildid">Stoffknacker ${esc(M.version)} · Build ${esc(M.build || "")}</p>
        <div class="row" style="margin-top:16px">
          <button class="btn" id="cov-export">Lernstand exportieren</button>
          <button class="btn ghost" id="cov-clear">Alle lokalen Daten löschen</button>
        </div>
      </div>`;
    var ex = el.querySelector("#cov-export");
    ex.onclick = () => { M.downloadState(); };
    el.querySelectorAll("[data-cov-legal]").forEach((b) => { b.onclick = () => { if (M.legalDialog) M.legalDialog(b.dataset.covLegal); }; });
    el.querySelector("#cov-clear").onclick = () => {
      if (!M.bestaetigtOder(el.querySelector("#cov-clear"), "Wirklich alle lokal gespeicherten Daten löschen? Lernstand, Serie und Abzeichen sind danach weg.")) return;
      var res = M.resetState("all");
      if (!res.ok) { alert("Nicht alles liess sich löschen: " + res.remaining.join(", ")); return; }
      window.location.reload();
    };
  };
})();

/* Kleine Bilder. Handgeschriebenes SVG, keine externen Dateien,
   Farben über CSS-Variablen, damit sie zum Design passen. */
(function () {
  "use strict";
  var M = window.MNEMIKA;
  var I = {};
  M.ILLUS = I;

  function add(chapterId, title, caption, svg) {
    (I[chapterId] = I[chapterId] || []).push({ title: title, caption: caption, svg: svg });
  }
  var W = 'viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg" class="ill"';
  var AX = '<line x1="30" y1="140" x2="300" y2="140" class="ax"/><line x1="30" y1="140" x2="30" y2="20" class="ax"/>' +
             '<polygon points="300,140 293,136 293,144" class="axh"/><polygon points="30,20 26,27 34,27" class="axh"/>';

  /* ---------------- Mathematik ---------------- */
  add("math-derivatives", "Von der Sekante zur Tangente",
    "Je näher der zweite Punkt rückt, desto mehr wird aus der Sekante die Tangente.",
    `<svg ${W}>${AX}
     <path d="M40 135 Q120 130 170 90 T290 30" class="curve"/>
     <line x1="80" y1="132" x2="250" y2="52" class="aux"/>
     <line x1="120" y1="119" x2="245" y2="60" class="aux2"/>
     <line x1="150" y1="104" x2="240" y2="70" class="hi"/>
     <circle cx="195" cy="84" r="4.5" class="dot"/>
     <text x="86" y="126" class="lb">Sekante</text>
     <text x="200" y="60" class="lb hi-t">Tangente</text>
     <text x="196" y="104" class="lb">x₀</text></svg>`);

  add("math-functions-basic", "Scheitelpunkt und Nullstellen",
    "Der Scheitel liegt immer genau in der Mitte zwischen den beiden Nullstellen.",
    `<svg ${W}>${AX}
     <path d="M60 30 Q165 200 270 30" class="curve"/>
     <circle cx="95" cy="90" r="4" class="dot"/><circle cx="235" cy="90" r="4" class="dot"/>
     <circle cx="165" cy="128" r="4.5" class="dot hi-d"/>
     <line x1="165" y1="128" x2="165" y2="90" class="aux2"/>
     <line x1="95" y1="90" x2="235" y2="90" class="aux"/>
     <text x="78" y="82" class="lb">x₁</text><text x="238" y="82" class="lb">x₂</text>
     <text x="172" y="145" class="lb hi-t">S(d|e)</text></svg>`);

  add("math-functions-advanced", "Linear gegen exponentiell",
    "Linear kommt pro Schritt derselbe Betrag dazu, exponentiell derselbe Faktor.",
    `<svg ${W}>${AX}
     <line x1="35" y1="132" x2="290" y2="72" class="aux"/>
     <path d="M35 136 Q170 132 230 100 T292 25" class="curve"/>
     <text x="240" y="88" class="lb">linear</text>
     <text x="212" y="45" class="lb hi-t">exponentiell</text></svg>`);

  add("math-limits", "Lücke und Grenzwert",
    "Der Grenzwert beschreibt die Annäherung, nicht den Wert an der Stelle selbst.",
    `<svg ${W}>${AX}
     <path d="M40 120 L150 75" class="curve"/><path d="M182 61 L290 40" class="curve"/>
     <circle cx="166" cy="68" r="5" class="hole"/>
     <line x1="166" y1="68" x2="166" y2="140" class="aux2"/>
     <text x="158" y="156" class="lb">a</text>
     <text x="178" y="94" class="lb hi-t">Grenzwert existiert</text></svg>`);

  add("math-integrals", "Fläche durch Rechtecke",
    "Immer schmalere Rechtecke, bis der Fehler im Grenzwert verschwindet.",
    `<svg ${W}>${AX}
     <path d="M45 128 Q140 118 200 70 T292 34" class="curve"/>
     ${[0,1,2,3,4,5,6,7].map(function(i){const x=45+i*30;const h=[126,122,116,104,90,74,58,44][i];
       return `<rect x="${x}" y="${h}" width="28" height="${140-h}" class="bar"/>`;}).join("")}
     </svg>`);

  add("math-trigonometry", "Der Einheitskreis",
    "Der Punkt auf dem Kreis hat die Koordinaten cos α und sin α.",
    `<svg ${W}><circle cx="160" cy="85" r="62" class="circ"/>
     <line x1="90" y1="85" x2="235" y2="85" class="ax"/><line x1="160" y1="18" x2="160" y2="152" class="ax"/>
     <line x1="160" y1="85" x2="204" y2="41" class="hi"/>
     <line x1="204" y1="85" x2="204" y2="41" class="aux2"/>
     <line x1="160" y1="85" x2="204" y2="85" class="aux"/>
     <circle cx="204" cy="41" r="4.5" class="dot hi-d"/>
     <path d="M182 85 A22 22 0 0 0 191 68" class="arcline"/>
     <text x="176" y="80" class="lb">α</text>
     <text x="167" y="100" class="lb">cos α</text><text x="210" y="66" class="lb">sin α</text></svg>`);

  add("math-vectors", "Vektoren addieren",
    "Den zweiten Pfeil an die Spitze des ersten legen, der Summenpfeil schliesst.",
    `<svg ${W}>
     <line x1="50" y1="130" x2="160" y2="95" class="hi"/><polygon points="160,95 149,93 153,102" class="hih"/>
     <line x1="160" y1="95" x2="230" y2="45" class="hi"/><polygon points="230,45 219,47 224,54" class="hih"/>
     <line x1="50" y1="130" x2="230" y2="45" class="sum"/><polygon points="230,45 218,45 223,54" class="sumh"/>
     <text x="94" y="124" class="lb">u</text><text x="196" y="80" class="lb">v</text>
     <text x="130" y="82" class="lb hi-t">u + v</text></svg>`);

  /* ---------------- Physik ---------------- */
  add("phys-kinematics", "s-t und v-t lesen",
    "Im s-t-Diagramm ist die Steigung die Geschwindigkeit, im v-t-Diagramm die Fläche der Weg.",
    `<svg ${W}>
     <g transform="translate(0,0)"><line x1="25" y1="130" x2="145" y2="130" class="ax"/><line x1="25" y1="130" x2="25" y2="25" class="ax"/>
     <line x1="25" y1="130" x2="135" y2="45" class="curve"/><text x="52" y="150" class="lb">s-t: Steigung = v</text></g>
     <g><line x1="185" y1="130" x2="305" y2="130" class="ax"/><line x1="185" y1="130" x2="185" y2="25" class="ax"/>
     <line x1="185" y1="70" x2="300" y2="70" class="curve"/>
     <rect x="185" y="70" width="115" height="60" class="bar"/>
     <text x="208" y="150" class="lb">v-t: Fläche = s</text></g></svg>`);

  add("phys-newton-forces", "Kräfte am Körper",
    "Nur die Summe aller Kräfte beschleunigt. Heben sie sich auf, passiert nichts.",
    `<svg ${W}><rect x="128" y="70" width="64" height="44" rx="7" class="box"/>
     <line x1="128" y1="92" x2="58" y2="92" class="hi"/><polygon points="58,92 70,87 70,97" class="hih"/>
     <line x1="192" y1="92" x2="272" y2="92" class="sum"/><polygon points="272,92 260,87 260,97" class="sumh"/>
     <line x1="160" y1="114" x2="160" y2="150" class="aux2"/>
     <text x="64" y="80" class="lb">F₁</text><text x="250" y="80" class="lb">F₂</text>
     <text x="140" y="60" class="lb">m</text><text x="166" y="146" class="lb">F_G</text></svg>`);

  add("phys-fall-throw", "Waagrechter Wurf",
    "Vorwärts gleichförmig, nach unten beschleunigt. Beide Bewegungen stören sich nicht.",
    `<svg ${W}><line x1="30" y1="35" x2="30" y2="145" class="ax"/><line x1="30" y1="145" x2="300" y2="145" class="ax"/>
     <path d="M30 35 Q150 40 250 145" class="curve"/>
     ${[0,1,2,3].map(function(i){const x=30+i*62;const y=35+i*i*9.2;
       return `<circle cx="${x}" cy="${y}" r="4" class="dot"/><line x1="${x}" y1="${y}" x2="${x}" y2="145" class="aux2"/>`;}).join("")}
     <text x="120" y="30" class="lb">gleiche Zeitabstände</text></svg>`);

  add("phys-energy", "Energie wandelt sich um",
    "Was oben an Lageenergie fehlt, steckt unten in der Bewegung.",
    `<svg ${W}><path d="M35 40 Q120 40 165 120 Q210 40 295 40" class="curve"/>
     <circle cx="40" cy="42" r="6" class="dot hi-d"/>
     <circle cx="165" cy="118" r="6" class="dot"/>
     <text x="34" y="30" class="lb hi-t">E_pot max</text>
     <text x="128" y="140" class="lb">E_kin max</text></svg>`);

  add("phys-pressure-hydro", "Druck hängt nur an der Tiefe",
    "Gleiche Füllhöhe bedeutet gleichen Bodendruck, egal wie breit das Gefäss ist.",
    `<svg ${W}>
     <path d="M40 50 L40 140 L100 140 L100 50" class="vessel"/><rect x="41" y="70" width="58" height="69" class="water"/>
     <path d="M130 50 L130 140 L150 140 L150 50" class="vessel"/><rect x="131" y="70" width="18" height="69" class="water"/>
     <path d="M185 50 L200 140 L265 140 L280 50" class="vessel"/><path d="M191 70 L200 139 L264 139 L274 70 Z" class="water"/>
     <line x1="30" y1="70" x2="295" y2="70" class="aux2"/>
     <text x="206" y="62" class="lb">gleiche Höhe h</text>
     <text x="98" y="158" class="lb">gleicher Bodendruck</text></svg>`);

  add("phys-circuits-power", "Reihe und parallel",
    "In der Reihe teilt sich die Spannung, parallel teilt sich der Strom.",
    `<svg ${W}>
     <g><path d="M30 45 L30 100 L140 100 L140 45 Z" class="wire"/>
     <rect x="52" y="38" width="26" height="15" class="res"/><rect x="98" y="38" width="26" height="15" class="res"/>
     <text x="56" y="120" class="lb">Reihe</text></g>
     <g><path d="M180 45 L180 110 L295 110 L295 45 Z" class="wire"/>
     <line x1="205" y1="45" x2="205" y2="110" class="wire"/><line x1="265" y1="45" x2="265" y2="110" class="wire"/>
     <rect x="192" y="70" width="26" height="15" class="res"/><rect x="252" y="70" width="26" height="15" class="res"/>
     <text x="212" y="130" class="lb">parallel</text></g></svg>`);

  add("phys-optics", "Bildkonstruktion an der Sammellinse",
    "Parallelstrahl wird Brennpunktstrahl, Mittelpunktstrahl läuft gerade weiter.",
    `<svg ${W}><line x1="25" y1="85" x2="300" y2="85" class="ax"/>
     <ellipse cx="160" cy="85" rx="11" ry="52" class="lens"/>
     <line x1="60" y1="85" x2="60" y2="42" class="obj"/><polygon points="60,42 56,50 64,50" class="objh"/>
     <line x1="60" y1="42" x2="160" y2="42" class="ray"/><line x1="160" y1="42" x2="272" y2="122" class="ray"/>
     <line x1="60" y1="42" x2="272" y2="122" class="ray2"/>
     <circle cx="222" cy="85" r="3" class="dot"/><circle cx="98" cy="85" r="3" class="dot"/>
     <line x1="272" y1="85" x2="272" y2="122" class="obj hi"/>
     <text x="212" y="80" class="lb">F</text><text x="255" y="140" class="lb">Bild</text></svg>`);

  /* ---------------- Chemie ---------------- */
  add("chem-atoms-pse", "Kern und Hülle",
    "Fast die ganze Masse steckt im winzigen Kern, fast das ganze Volumen in der Hülle.",
    `<svg ${W}><circle cx="160" cy="85" r="64" class="circ"/><circle cx="160" cy="85" r="38" class="circ"/>
     <circle cx="160" cy="85" r="11" class="nucleus"/>
     <circle cx="224" cy="85" r="5" class="dot"/><circle cx="160" cy="47" r="5" class="dot"/>
     <circle cx="133" cy="112" r="5" class="dot"/><circle cx="196" cy="112" r="5" class="dot"/>
     <text x="176" y="82" class="lb">Kern</text><text x="228" y="104" class="lb">Elektronen</text></svg>`);

  add("chem-polarity-forces", "Wasser ist ein Dipol",
    "Gewinkelt gebaut, deshalb heben sich die Teilladungen nicht auf.",
    `<svg ${W}>
     <circle cx="160" cy="60" r="26" class="atomO"/><text x="152" y="67" class="sym">O</text>
     <circle cx="106" cy="115" r="18" class="atomH"/><text x="100" y="121" class="sym">H</text>
     <circle cx="214" cy="115" r="18" class="atomH"/><text x="208" y="121" class="sym">H</text>
     <line x1="141" y1="79" x2="121" y2="100" class="bond"/><line x1="179" y1="79" x2="199" y2="100" class="bond"/>
     <text x="188" y="52" class="lb hi-t">δ−</text><text x="78" y="105" class="lb">δ+</text><text x="236" y="105" class="lb">δ+</text></svg>`);

  add("chem-energetics", "Energiediagramm",
    "Der Berg ist die Aktivierungsenergie, der Höhenunterschied die Bilanz.",
    `<svg ${W}>${AX}
     <path d="M45 65 Q110 65 145 32 Q180 65 290 110" class="curve"/>
     <line x1="45" y1="65" x2="290" y2="65" class="aux2"/>
     <line x1="145" y1="32" x2="145" y2="65" class="hi"/>
     <line x1="290" y1="65" x2="290" y2="110" class="sum"/>
     <text x="152" y="30" class="lb hi-t">E_A</text>
     <text x="222" y="128" class="lb">exotherm: ΔH &lt; 0</text></svg>`);

  add("chem-acid-base", "Die pH-Skala",
    "Jede Stufe bedeutet den Faktor zehn, nicht eine gleich grosse Differenz.",
    `<svg ${W}>
     ${[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14].map(function(i){
       return `<rect x="${18+i*19}" y="58" width="18" height="34" class="ph${i<7?"a":i===7?"n":"b"}"/>`;}).join("")}
     <text x="20" y="110" class="lb">0 sauer</text><text x="140" y="110" class="lb">7</text>
     <text x="252" y="110" class="lb">14 basisch</text>
     <text x="60" y="48" class="lb">10⁻³ mol/l → pH 3</text></svg>`);

  /* ---------------- Biologie ---------------- */
  add("bio-cells", "Die Zelle als Betrieb",
    "Jedes Organell hat eine Aufgabe, und der Bau folgt der Aufgabe.",
    `<svg ${W}><ellipse cx="160" cy="85" rx="128" ry="66" class="cellw"/>
     <circle cx="120" cy="78" r="25" class="organ"/><text x="105" y="82" class="sym sm">Kern</text>
     <ellipse cx="215" cy="60" rx="26" ry="13" class="organ2"/><text x="190" y="64" class="sym sm">Mito</text>
     <ellipse cx="212" cy="110" rx="24" ry="11" class="organ3"/><text x="192" y="114" class="sym sm">Golgi</text>
     <circle cx="72" cy="118" r="6" class="dot"/><circle cx="88" cy="126" r="6" class="dot"/>
     <text x="52" y="146" class="lb">Ribosomen</text></svg>`);

  add("bio-energy", "Photosynthese und Zellatmung",
    "Zwei entgegengesetzte Bilanzen, aber nicht derselbe Weg rückwärts.",
    `<svg ${W}>
     <rect x="24" y="58" width="96" height="50" rx="10" class="box2"/><text x="36" y="88" class="sym sm">CO₂ + H₂O</text>
     <rect x="200" y="58" width="96" height="50" rx="10" class="box2"/><text x="214" y="88" class="sym sm">C₆H₁₂O₆ + O₂</text>
     <path d="M124 72 L196 72" class="hi"/><polygon points="196,72 185,68 185,77" class="hih"/>
     <path d="M196 96 L124 96" class="sum"/><polygon points="124,96 135,92 135,101" class="sumh"/>
     <text x="126" y="62" class="lb hi-t">Photosynthese: Licht speichern</text>
     <text x="122" y="118" class="lb">Zellatmung: Energie freisetzen</text></svg>`);

  add("bio-dna-replication", "Komplementäre Basenpaarung",
    "A passt nur zu T, G nur zu C. Deshalb genügt ein Strang als Vorlage.",
    `<svg ${W}>
     <line x1="70" y1="30" x2="70" y2="145" class="strand"/><line x1="250" y1="30" x2="250" y2="145" class="strand"/>
     ${[["A","T"],["T","A"],["G","C"],["C","G"],["A","T"]].map(function(p,i){const y=44+i*24;
       return `<line x1="70" y1="${y}" x2="250" y2="${y}" class="rung"/>`+
              `<text x="86" y="${y+5}" class="sym sm">${p[0]}</text>`+
              `<text x="222" y="${y+5}" class="sym sm">${p[1]}</text>`;}).join("")}
     </svg>`);

  add("bio-membrane-transport", "Osmose an der Membran",
    "Wasser wandert dorthin, wo mehr gelöste Teilchen sind.",
    `<svg ${W}><rect x="34" y="38" width="252" height="100" rx="8" class="vessel"/>
     <line x1="160" y1="38" x2="160" y2="138" class="membrane"/>
     ${[0,1,2].map(function(i){return `<circle cx="${64+i*28}" cy="${68+i*22}" r="6" class="dot"/>`;}).join("")}
     ${[0,1,2,3,4,5,6].map(function(i){return `<circle cx="${182+(i%4)*26}" cy="${62+Math.floor(i/4)*34}" r="6" class="dot hi-d"/>`;}).join("")}
     <path d="M126 108 L194 108" class="hi"/><polygon points="194,108 183,104 183,113" class="hih"/>
     <text x="44" y="132" class="lb">wenig gelöst</text><text x="200" y="132" class="lb">viel gelöst</text></svg>`);

  add("bio-ecology", "Energie fliesst, Stoffe kreisen",
    "Pro Stufe bleibt nur rund ein Zehntel der Energie übrig.",
    `<svg ${W}>
     <polygon points="30,140 290,140 250,108 70,108" class="tier1"/>
     <polygon points="70,104 250,104 216,74 104,74" class="tier2"/>
     <polygon points="104,70 216,70 186,42 134,42" class="tier3"/>
     <polygon points="134,38 186,38 168,18 152,18" class="tier4"/>
     <text x="112" y="132" class="lb">Produzenten</text>
     <text x="122" y="96" class="lb">Pflanzenfresser</text>
     <text x="140" y="62" class="lb">Fleischfresser</text></svg>`);

  /* ---------------- Geografie ---------------- */
  add("geo-plate-tectonics", "Drei Arten von Plattengrenzen",
    "Auseinander, zusammen, aneinander vorbei. Daraus folgt fast die ganze Geologie.",
    `<svg ${W}>
     <g><rect x="20" y="70" width="40" height="26" class="plate"/><rect x="76" y="70" width="40" height="26" class="plate"/>
     <path d="M60 83 L44 83" class="hi"/><path d="M76 83 L92 83" class="hi"/><text x="30" y="118" class="lb">divergent</text></g>
     <g><rect x="130" y="70" width="40" height="26" class="plate"/><polygon points="176,70 216,70 208,104 176,88" class="plate2"/>
     <text x="134" y="118" class="lb">konvergent</text></g>
     <g><rect x="234" y="62" width="56" height="22" class="plate"/><rect x="234" y="88" width="56" height="22" class="plate"/>
     <path d="M244 73 L282 73" class="hi"/><path d="M282 99 L244 99" class="sum"/><text x="238" y="128" class="lb">konservativ</text></g></svg>`);

  add("geo-climate-diagrams", "Klimadiagramm lesen",
    "Liegt die Temperaturkurve über den Säulen, ist es trocken.",
    `<svg ${W}>${AX}
     ${[30,26,34,40,52,64,58,50,44,38,32,28].map(function(h,i){
       return `<rect x="${38+i*21}" y="${140-h}" width="15" height="${h}" class="bar"/>`;}).join("")}
     <path d="M45 116 L66 110 L87 98 L108 84 L129 68 L150 56 L171 52 L192 58 L213 72 L234 88 L255 102 L276 112" class="curve"/>
     <text x="140" y="36" class="lb hi-t">arid, wo die Kurve oben liegt</text></svg>`);

  add("geo-demography", "Der demografische Übergang",
    "Das stärkste Wachstum entsteht in der Schere zwischen den beiden Kurven.",
    `<svg ${W}>${AX}
     <path d="M40 44 L100 46 L150 78 L210 118 L285 126" class="curve"/>
     <path d="M40 50 L90 58 L140 108 L200 124 L285 128" class="curve2"/>
     <path d="M100 52 L100 56 M150 82 L150 112" class="aux2"/>
     <text x="44" y="36" class="lb">Geburtenrate</text>
     <text x="96" y="152" class="lb hi-t">grösste Schere, stärkstes Wachstum</text></svg>`);

  add("geo-weather-climate", "Luv, Lee und Föhn",
    "Feucht aufsteigen kühlt langsamer, trocken absteigen erwärmt schneller.",
    `<svg ${W}><polygon points="90,140 165,38 240,140" class="mount"/>
     <path d="M24 118 Q64 110 96 92" class="ray"/><polygon points="96,92 86,94 90,101" class="objh"/>
     <path d="M236 92 Q272 112 300 122" class="hi"/><polygon points="300,122 289,118 289,127" class="hih"/>
     <ellipse cx="122" cy="66" rx="20" ry="10" class="cloud"/><ellipse cx="146" cy="58" rx="16" ry="9" class="cloud"/>
     ${[0,1,2].map(function(i){return `<line x1="${112+i*16}" y1="78" x2="${108+i*16}" y2="90" class="rain"/>`;}).join("")}
     <text x="40" y="136" class="lb">Luv: feucht</text><text x="196" y="136" class="lb hi-t">Lee: warm, trocken</text></svg>`);

  add("geo-earth-time", "Der Schalenbau der Erde",
    "Kruste, Mantel, äusserer und innerer Kern, sortiert nach Dichte.",
    `<svg ${W}><circle cx="160" cy="85" r="68" class="shell1"/><circle cx="160" cy="85" r="52" class="shell2"/>
     <circle cx="160" cy="85" r="30" class="shell3"/><circle cx="160" cy="85" r="13" class="shell4"/>
     <line x1="160" y1="85" x2="290" y2="30" class="aux2"/>
     <text x="232" y="26" class="lb">Kruste</text>
     <text x="196" y="60" class="lb">Mantel</text><text x="146" y="90" class="sym sm">Kern</text></svg>`);

  /* ---------------- Geschichte ---------------- */
  add("hist-ww1", "Anlass und Ursachen",
    "Das Attentat entzündete, was seit Jahren aufgeschichtet war.",
    `<svg ${W}>
     ${["Nationalismus","Imperialismus","Wettrüsten","Bündnissystem"].map(function(t,i){
       return `<rect x="38" y="${34+i*25}" width="180" height="19" rx="5" class="stack"/>`+
              `<text x="50" y="${48+i*25}" class="sym sm">${t}</text>`;}).join("")}
     <circle cx="256" cy="72" r="20" class="spark"/><text x="238" y="76" class="sym sm">1914</text>
     <path d="M236 72 L222 72" class="hi"/><polygon points="222,72 232,68 232,77" class="hih"/>
     <text x="44" y="152" class="lb">Ursachen tragen, der Anlass zündet</text></svg>`);

  add("hist-ch-1798-1848", "Vom Staatenbund zum Bundesstaat",
    "1798 Bruch, 1830 Regeneration, 1847 Krieg, 1848 Kompromiss.",
    `<svg ${W}><line x1="30" y1="90" x2="296" y2="90" class="ax"/>
     ${[["1798","Helvetik"],["1803","Mediation"],["1830","Regeneration"],["1847","Sonderbund"],["1848","Bundesstaat"]]
       .map(function(p,i){const x=42+i*62;
       return `<circle cx="${x}" cy="90" r="6" class="dot${i===4?" hi-d":""}"/>`+
              `<text x="${x-16}" y="76" class="sym sm">${p[0]}</text>`+
              `<text x="${Math.min(x-22, 244)}" y="${i%2?124:110}" class="lb">${p[1]}</text>`;}).join("")}
     </svg>`);

  /* ---------------- Deutsch und Englisch ---------------- */
  add("de-argumentation", "Der Aufbau eines Arguments",
    "Fehlt einer der drei Teile, bleibt es eine Behauptung.",
    `<svg ${W}>
     ${[["Behauptung","Was ich sage"],["Begründung","Warum es gilt"],["Beleg","Woran man es sieht"]]
       .map(function(p,i){const y=30+i*42;
       return `<rect x="48" y="${y}" width="224" height="32" rx="8" class="box2"/>`+
              `<text x="62" y="${y+20}" class="sym sm">${p[0]}</text>`+
              `<text x="176" y="${y+20}" class="lb">${p[1]}</text>`+
              (i<2?`<path d="M160 ${y+32} L160 ${y+42}" class="hi"/>`:"");}).join("")}
     </svg>`);

  add("en-analysis", "Point, Evidence, Explanation",
    "Ohne die Erklärung bleibt das Zitat unausgewertet.",
    `<svg ${W}>
     ${[["Point","claim about the text"],["Evidence","short quotation"],["Explanation","why it works"]]
       .map(function(p,i){const x=18+i*100;
       return `<rect x="${x}" y="52" width="88" height="58" rx="10" class="box2${i===2?" hi-b":""}"/>`+
              `<text x="${x+12}" y="76" class="sym sm">${p[0]}</text>`+
              `<text x="${x+10}" y="96" class="lb">${p[1]}</text>`+
              (i<2?`<path d="M${x+90} 81 L${x+98} 81" class="hi"/>`:"");}).join("")}
     </svg>`);

  M.illusCount = Object.keys(I).length;
})();

/* Dritte Runde: Tabellen und Diagramme mit Zahlen aus dem Kapiteltext. */
(function () {
  "use strict";
  var M = window.MNEMIKA;
  var I = M.ILLUS;
  var W = 'viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" class="ill"';
  var AX = '<line x1="34" y1="146" x2="302" y2="146" class="ax"/><line x1="34" y1="146" x2="34" y2="20" class="ax"/>';
  function add(id, t, c, s) { (I[id] = I[id] || []).push({ title: t, caption: c, svg: s }); }
  function bars(data, unit) {
    var max = Math.max.apply(null, data.map((d) => d[1]));
    return data.map(function (d, i) {
      var h = Math.round((d[1] / max) * 104);
      var x = 46 + i * (240 / data.length);
      var w = Math.max(18, 240 / data.length - 14);
      return `<rect x="${x}" y="${146 - h}" width="${w}" height="${h}" class="bar"/>
        <text x="${x}" y="${140 - h}" class="lb">${d[1]}${unit || ""}</text>
        <text x="${x}" y="160" class="lb">${d[0]}</text>`;
    }).join("");
  }
  function tbl(head, rows) {
    var cw = [118, 90, 96];
    var out = `<rect x="14" y="16" width="292" height="${30 + rows.length * 26}" rx="10" class="box2"/>`;
    out += head.map((h, i) => `<text x="${26 + (i ? cw.slice(0, i).reduce((a, b) => a + b, 0) : 0)}" y="38" class="sym sm">${h}</text>`).join("");
    out += `<line x1="20" y1="46" x2="300" y2="46" class="ax"/>`;
    rows.forEach(function (r, k) {
      out += r.map((cell, i) => `<text x="${26 + (i ? cw.slice(0, i).reduce((a, b) => a + b, 0) : 0)}" y="${68 + k * 26}" class="lb">${cell}</text>`).join("");
      if (k < rows.length - 1) out += `<line x1="20" y1="${76 + k * 26}" x2="300" y2="${76 + k * 26}" class="aux2"/>`;
    });
    return `<svg ${W}>${out}</svg>`;
  }

  add("phys-heat-thermo", "Wärmekapazität im Vergleich",
    "Wasser braucht fast zehnmal so viel Energie wie Eisen für dieselbe Erwärmung.",
    `<svg ${W}>${AX}${bars([["Wasser", 4180], ["Alu", 900], ["Eisen", 450], ["Blei", 130]])}
     <text x="120" y="30" class="lb">J je kg und Kelvin</text></svg>`);

  add("chem-acid-base", "pH-Werte aus dem Alltag",
    "Jede Stufe bedeutet den Faktor zehn.",
    tbl(["Stoff", "pH", "Verhältnis"], [
      ["Magensäure", "1,5", "sehr sauer"], ["Cola", "2,5", "10× weniger"],
      ["Kaffee", "5,0", "300×"], ["Wasser", "7,0", "neutral"],
      ["Seifenlauge", "10,0", "1000× basisch"]]));

  add("geo-climate-change", "CO₂ in der Atmosphäre",
    "Von 280 ppm vor der Industrialisierung auf über 420 ppm heute.",
    `<svg ${W}>${AX}
     <path d="M42 118 L96 114 L150 104 L204 84 L250 60 L296 38" class="curve"/>
     <line x1="34" y1="120" x2="302" y2="120" class="aux"/>
     <text x="46" y="134" class="lb">280 ppm, vorindustriell</text>
     <text x="208" y="32" class="lb hi-t">über 420 ppm</text>
     <text x="40" y="164" class="lb">1850</text><text x="272" y="164" class="lb">2025</text></svg>`);

  add("bio-respiration-circulation", "Energieausbeute im Vergleich",
    "Ohne Sauerstoff bleiben von rund 30 ATP nur 2 übrig.",
    `<svg ${W}>${AX}${bars([["Zellatmung", 30], ["Gärung", 2]], " ATP")}
     <text x="110" y="30" class="lb">ATP je Glucose</text></svg>`);

  add("hist-ch-postwar-system", "Die Zauberformel",
    "Vier Parteien, sieben Sitze, seit 1959 nach festem Schlüssel.",
    tbl(["Partei", "Sitze", "seit"], [
      ["FDP", "2", "1848"], ["CVP heute Mitte", "2", "1891"],
      ["SP", "2", "1943"], ["SVP", "1", "1929"]]));

  add("geo-demography", "Bevölkerungsanteile Schweiz",
    "Die Alterung verschiebt das Verhältnis von Erwerbstätigen zu Rentnern.",
    `<svg ${W}>${AX}${bars([["0–19", 20], ["20–64", 61], ["65+", 19]], "%")}
     <text x="104" y="30" class="lb">Anteil an der Bevölkerung</text></svg>`);

  add("phys-electric-basics", "Spezifischer Widerstand",
    "Silber leitet am besten, Eisen deutlich schlechter.",
    tbl(["Material", "ρ in Ω·mm²/m", "Einsatz"], [
      ["Silber", "0,016", "Kontakte"], ["Kupfer", "0,017", "Kabel"],
      ["Aluminium", "0,028", "Freileitung"], ["Eisen", "0,10", "Heizdraht"]]));

  add("chem-organic-groups", "Funktionelle Gruppen",
    "Die Gruppe bestimmt Stoffklasse, Endung und Eigenschaften.",
    tbl(["Gruppe", "Klasse", "Endung"], [
      ["OH", "Alkohol", "-ol"], ["CHO", "Aldehyd", "-al"],
      ["CO", "Keton", "-on"], ["COOH", "Carbonsäure", "-säure"],
      ["COO", "Ester", "-ester"]]));

  add("math-probability", "Das Geburtstagsparadoxon",
    "Ab 23 Personen liegt die Wahrscheinlichkeit über 50 Prozent.",
    `<svg ${W}>${AX}
     <path d="M40 144 L70 132 L100 112 L130 88 L160 66 L190 50 L220 40 L250 34 L296 28" class="curve"/>
     <line x1="34" y1="86" x2="302" y2="86" class="aux"/>
     <circle cx="130" cy="88" r="5" class="dot hi-d"/>
     <text x="112" y="76" class="lb hi-t">23 Personen</text>
     <text x="40" y="80" class="lb">50 %</text>
     <text x="250" y="164" class="lb">60 Personen</text></svg>`);

  add("geo-spatial-transport", "Modalsplit Personenverkehr Schweiz",
    "Das Auto dominiert, der öffentliche Verkehr ist im Vergleich stark.",
    `<svg ${W}>${AX}${bars([["Auto", 65], ["Bahn/Bus", 24], ["Velo/Fuss", 11]], "%")}
     <text x="112" y="30" class="lb">Anteil der Personenkilometer</text></svg>`);

  M.illusCount = Object.keys(I).length;
})();

/* Fach-Signets, animierter Hintergrund und weitere Lernbilder. */
(function () {
  "use strict";
  var M = window.MNEMIKA;

  /* ---------- Fach-Signets, je ein eigenes Zeichen ---------- */
  var g = (p) => `<svg viewBox="0 0 32 32" class="logo-mark" aria-hidden="true">${p}</svg>`;
  M.LOGO = {
    math: g('<path d="M7 9h10M12 4v10" class="lk"/><path d="M19 21l6 6M25 21l-6 6" class="lk"/><circle cx="11" cy="24" r="4.5" class="lk"/>'),
    physics: g('<circle cx="16" cy="16" r="3" class="lf"/><ellipse cx="16" cy="16" rx="13" ry="5.5" class="lk"/><ellipse cx="16" cy="16" rx="13" ry="5.5" class="lk" transform="rotate(60 16 16)"/><ellipse cx="16" cy="16" rx="13" ry="5.5" class="lk" transform="rotate(120 16 16)"/>'),
    chemistry: g('<path d="M13 4v9L6 25a3 3 0 0 0 2.6 4.4h14.8A3 3 0 0 0 26 25l-7-12V4" class="lk"/><path d="M10.5 4h11" class="lk"/><path d="M9.5 20h13" class="lf"/>'),
    biology: g('<path d="M9 4c0 7 14 9 14 16s-14 5-14 12" class="lk"/><path d="M23 4c0 7-14 9-14 16s14 5 14 12" class="lk"/><path d="M11 10h10M10 16h12M11 23h10" class="lk"/>'),
    history: g('<circle cx="16" cy="16" r="12" class="lk"/><path d="M16 8v8l6 4" class="lk"/><path d="M16 2v3M16 27v3M2 16h3M27 16h3" class="lk"/>'),
    geography: g('<circle cx="16" cy="16" r="12" class="lk"/><ellipse cx="16" cy="16" rx="5" ry="12" class="lk"/><path d="M4.5 12h23M4.5 20h23" class="lk"/>'),
    german: g('<path d="M8 26V6h6a7 7 0 0 1 0 14H8" class="lk"/><path d="M18 26l6-20 6 20" class="lk" transform="translate(-6 0) scale(0.75) translate(6 6)"/><path d="M20 22h8" class="lk"/>'),
    english: g('<path d="M6 26V6h12M6 16h9" class="lk"/><path d="M22 6v20M18 26h8" class="lk"/><circle cx="22" cy="6" r="2" class="lf"/>'),
  };
  M.logoOf = (s) => M.LOGO[s] || M.LOGO.math;

  /* ---------- animierter Hintergrund ---------- */
  M.mountBackdrop = function () {
    if (document.getElementById("ambient-stage")) return;
    var d = document.createElement("div");
    d.id = "ambient-stage";
    d.setAttribute("aria-hidden", "true");
    d.innerHTML = `
      <div class="amb-gradients"><i class="g1"></i><i class="g2"></i><i class="g3"></i></div>
      <svg class="amb-net" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice"></svg>
      <div class="amb-grid"></div>`;
    document.body.insertBefore(d, document.body.firstChild);
    var svg = d.querySelector(".amb-net");
    var pts = [];
    for (let i = 0; i < 26; i += 1) {
      pts.push({ x: 40 + ((i * 271) % 1120), y: 30 + ((i * 173) % 740), r: 1.6 + (i % 3) * 0.9, d: 9 + (i % 7) * 2.5 });
    }
    var lines = "";
    for (let i = 0; i < pts.length; i += 1) {
      for (let j = i + 1; j < pts.length; j += 1) {
        var dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
        if (dx * dx + dy * dy < 36000) lines += `<line x1="${pts[i].x}" y1="${pts[i].y}" x2="${pts[j].x}" y2="${pts[j].y}"/>`;
      }
    }
    svg.innerHTML = `<g class="amb-lines">${lines}</g><g class="amb-dots">` +
      pts.map((p, i) => `<circle cx="${p.x}" cy="${p.y}" r="${p.r}" style="--d:${p.d}s;--i:${i}"/>`).join("") + "</g>";
    M.syncBackdrop();
  };

  M.syncBackdrop = function () {
    var d = document.getElementById("ambient-stage");
    if (!d) return;
    d.style.display = "";                      // nie vollständig ausblenden
  };

  /* ---------- weitere Lernbilder ---------- */
  var I = M.ILLUS;
  var W = 'viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg" class="ill"';
  var AX = '<line x1="30" y1="140" x2="300" y2="140" class="ax"/><line x1="30" y1="140" x2="30" y2="20" class="ax"/>';
  function add(id, title, caption, svg) { (I[id] = I[id] || []).push({ title, caption, svg }); }

  add("math-systems-quadratics", "Die Diskriminante entscheidet",
    "Drei Lagen der Parabel, drei Fälle für D.",
    `<svg ${W}><line x1="20" y1="104" x2="300" y2="104" class="ax"/>
     <path d="M32 44 Q66 148 100 44" class="curve"/><text x="42" y="30" class="lb">D &gt; 0</text>
     <path d="M126 44 Q160 128 194 44" class="curve2"/><text x="140" y="30" class="lb">D = 0</text>
     <path d="M220 40 Q254 96 288 40" class="hi"/><text x="236" y="30" class="lb hi-t">D &lt; 0</text>
     <circle cx="50" cy="104" r="4" class="dot"/><circle cx="82" cy="104" r="4" class="dot"/>
     <circle cx="160" cy="104" r="4" class="dot hi-d"/>
     <text x="40" y="124" class="lb">zwei</text><text x="150" y="124" class="lb">eine</text><text x="246" y="124" class="lb">keine</text></svg>`);

  add("math-curve-optimisation", "Was f' und f'' verraten",
    "Waagrechte Tangente ist nur ein Kandidat. Die Krümmung entscheidet.",
    `<svg ${W}>${AX}
     <path d="M45 96 Q90 24 130 84 Q170 144 214 66 T292 44" class="curve"/>
     <line x1="92" y1="48" x2="152" y2="48" class="hi"/><circle cx="122" cy="50" r="4.5" class="dot hi-d"/>
     <line x1="140" y1="118" x2="200" y2="118" class="sum"/><circle cx="170" cy="118" r="4.5" class="dot"/>
     <text x="96" y="40" class="lb hi-t">f'=0, f''&lt;0: Hoch</text>
     <text x="146" y="136" class="lb">f'=0, f''&gt;0: Tief</text></svg>`);

  add("math-limits", "Grenzwert im Unendlichen",
    "Der höchste Grad entscheidet, wohin die Kurve läuft.",
    `<svg ${W}>${AX}
     <line x1="32" y1="66" x2="298" y2="66" class="aux"/>
     <path d="M40 128 Q120 92 190 74 T296 68" class="curve"/>
     <text x="172" y="58" class="lb">waagrechte Asymptote</text></svg>`);

  add("phys-work-power", "Kraft, Weg und Arbeit",
    "Nur der Anteil der Kraft in Wegrichtung verrichtet Arbeit.",
    `<svg ${W}><rect x="60" y="86" width="58" height="38" rx="7" class="box"/>
     <line x1="118" y1="105" x2="212" y2="105" class="sum"/><polygon points="212,105 200,100 200,110" class="sumh"/>
     <line x1="118" y1="105" x2="196" y2="62" class="hi"/><polygon points="196,62 185,63 189,71" class="hih"/>
     <line x1="196" y1="62" x2="196" y2="105" class="aux2"/>
     <line x1="60" y1="138" x2="260" y2="138" class="aux"/>
     <text x="150" y="98" class="lb">F<tspan class="lb">∥</tspan> zählt</text>
     <text x="200" y="56" class="lb hi-t">F schräg</text><text x="140" y="154" class="lb">Weg s</text></svg>`);

  add("phys-temperature-expansion", "Anomalie des Wassers",
    "Die grösste Dichte liegt bei 4 Grad. Deshalb schwimmt Eis.",
    `<svg ${W}>${AX}
     <path d="M45 60 Q70 128 96 132 Q150 120 290 74" class="curve"/>
     <circle cx="96" cy="132" r="5" class="dot hi-d"/>
     <line x1="96" y1="132" x2="96" y2="140" class="aux2"/>
     <text x="84" y="156" class="lb hi-t">4 °C</text>
     <text x="176" y="98" class="lb">Dichte sinkt wieder</text></svg>`);

  add("chem-ionic-metallic", "Ionengitter und Elektronengas",
    "Salz zerspringt beim Verschieben, Metall lässt sich verformen.",
    `<svg ${W}>
     <g>${[0,1,2].map(r=>[0,1,2].map(cq=>`<circle cx="${40+cq*30}" cy="${52+r*30}" r="10" class="${(r+cq)%2?"organ2":"organ"}"/>`).join("")).join("")}
     <text x="36" y="150" class="lb">Ionengitter</text></g>
     <g>${[0,1,2].map(r=>[0,1,2].map(cq=>`<circle cx="${200+cq*30}" cy="${52+r*30}" r="10" class="organ"/>`).join("")).join("")}
     ${[0,1,2,3,4,5].map(i=>`<circle cx="${212+(i%3)*30}" cy="${68+Math.floor(i/3)*30}" r="3.5" class="dot"/>`).join("")}
     <text x="168" y="152" class="lb">Metall mit Elektronengas</text></g></svg>`);

  add("bio-enzymes", "Temperaturoptimum",
    "Erst mehr Zusammenstösse, dann bricht die Faltung zusammen.",
    `<svg ${W}>${AX}
     <path d="M42 134 Q110 118 150 60 Q168 34 186 44 Q206 62 224 136" class="curve"/>
     <circle cx="170" cy="40" r="5" class="dot hi-d"/>
     <line x1="170" y1="40" x2="170" y2="140" class="aux2"/>
     <text x="152" y="30" class="lb hi-t">Optimum</text>
     <text x="200" y="120" class="lb">Denaturierung</text></svg>`);

  add("bio-cell-cycle-mitosis", "Der Zellzyklus",
    "Die Interphase nimmt den grössten Teil der Zeit ein.",
    `<svg ${W}><circle cx="160" cy="85" r="56" class="circ"/>
     <path d="M160 29 A56 56 0 0 1 216 85" class="curve"/>
     <path d="M216 85 A56 56 0 0 1 160 141" class="curve2"/>
     <path d="M160 141 A56 56 0 0 1 104 85" class="curve"/>
     <path d="M104 85 A56 56 0 0 1 160 29" class="hi"/>
     <text x="222" y="56" class="lb">G1</text><text x="222" y="120" class="lb">S</text>
     <text x="76" y="120" class="lb">G2</text><text x="80" y="56" class="lb hi-t">Mitose</text></svg>`);

  add("hist-versailles-crisis", "Von der Krise zur Radikalisierung",
    "Arbeitslosigkeit und Stimmenanteil verlaufen fast parallel.",
    `<svg ${W}>${AX}
     <path d="M45 122 L100 116 L150 74 L200 40 L250 52 L290 64" class="curve"/>
     <path d="M45 132 L100 128 L150 92 L200 44 L250 58 L290 70" class="hi"/>
     <text x="150" y="30" class="lb">Arbeitslose</text>
     <text x="196" y="110" class="lb hi-t">Stimmenanteil NSDAP</text>
     <text x="42" y="156" class="lb">1928</text><text x="262" y="156" class="lb">1933</text></svg>`);

  add("geo-global-development", "Wertschöpfungskette",
    "Design und Marke behalten die Marge, die Montage kaum.",
    `<svg ${W}>${AX}
     ${[["Design",80],["Chips",58],["Montage",16],["Marke",96],["Handel",40]].map((p,i)=>
       `<rect x="${46+i*50}" y="${140-p[1]}" width="36" height="${p[1]}" class="bar"/>
        <text x="${44+i*50}" y="156" class="lb">${p[0]}</text>`).join("")}
     <text x="150" y="30" class="lb">Anteil an der Wertschöpfung</text></svg>`);

  add("geo-energy-sustainability", "Drei Dimensionen der Nachhaltigkeit",
    "Eine Massnahme trägt erst, wenn sie in allen drei Bereichen bestehen kann.",
    `<svg ${W}><polygon points="160,26 272,142 48,142" class="circ"/>
     <circle cx="160" cy="26" r="8" class="dot"/><circle cx="272" cy="142" r="8" class="dot"/><circle cx="48" cy="142" r="8" class="dot"/>
     <text x="132" y="18" class="lb">Ökologie</text><text x="240" y="160" class="lb">Ökonomie</text><text x="24" y="160" class="lb">Soziales</text>
     <circle cx="160" cy="104" r="20" class="spark"/><text x="140" y="108" class="sym sm">tragfähig</text></svg>`);

  add("de-text-types", "Nähe, Position, Strenge",
    "Drei Fragen ordnen jede Textsorte ein.",
    `<svg ${W}>
     ${[["Erörterung",60],["Essay",170],["Kommentar",230]].map((p,i)=>
       `<circle cx="${p[1]}" cy="${60+i*26}" r="13" class="dot"/>
        <text x="${p[1]-28}" y="${96+i*26}" class="lb">${p[0]}</text>`).join("")}
     <line x1="30" y1="140" x2="300" y2="140" class="ax"/>
     <text x="34" y="158" class="lb">sachlich, streng</text>
     <text x="214" y="158" class="lb hi-t">persönlich, frei</text></svg>`);

  add("en-writing", "Aufbau eines kurzen Textes",
    "Einleitung mit These, zwei entwickelte Argumente, Schluss.",
    `<svg ${W}>
     ${[["Einleitung + These",26],["Argument 1",58],["Argument 2",90],["Gegenargument",122]].map((p,i)=>
       `<rect x="40" y="${p[1]}" width="${i===0?240:200}" height="24" rx="7" class="box2${i===0?" hi-b":""}"/>
        <text x="52" y="${p[1]+17}" class="sym sm">${p[0]}</text>`).join("")}
     <rect x="40" y="150" width="240" height="0" class="box2"/>
     <text x="44" y="150" class="lb">Wortzahl bleibt die harte Grenze</text></svg>`);

  M.illusCount = Object.keys(I).length;
})();

/* M.Viz — Diagrammsystem. Eine Leinwand 720x400, echte Achsen, Beschriftungen
   ab 14 Pixel, sichere Ränder, Titel und Beschreibung für Screenreader,
   dazu eine Textzusammenfassung. */
(function () {
  "use strict";
  var M = window.MNEMIKA;
  var esc = M.esc;
  var V = {};
  M.Viz = V;

  var W = 720, H = 400, PAD = { l: 86, r: 36, t: 54, b: 66 };
  var PW = W - PAD.l - PAD.r, PH = H - PAD.t - PAD.b;
  var uid = 0;

  function emptyState(o, note) {
    return `<figure class="viz viz-empty" data-kind="empty">
      <div class="viz-emptybox">
        <span class="viz-emptyic">${M.ICON ? M.ICON.progress : ""}</span>
        <b>${esc(o.title || "Noch keine Daten")}</b>
        <span>${esc(note || "Sobald du eine Runde gespielt hast, erscheint hier dein Verlauf.")}</span>
        ${o.noCta ? "" : '<button type="button" class="btn sm viz-emptycta" data-go="practice">Erste Übungsrunde starten</button>'}
      </div></figure>`;
  }
  V.emptyState = emptyState;

  function safeMax(values, fallback) {
    var nums = (values || []).filter((v) => typeof v === "number" && isFinite(v));
    if (!nums.length) return null;
    var m = Math.max.apply(null, nums);
    if (!isFinite(m) || m <= 0) return fallback || 1;
    return m;
  }

  function shell(o, inner, summary) {
    var id = "viz" + (uid += 1);
    var HH = Math.max(220, Math.round(o.height || H));
    return `<figure class="viz" data-kind="${esc(o.kind || "chart")}">
      <svg viewBox="0 0 ${W} ${HH}" class="vizsvg" role="img"
        aria-labelledby="${id}t ${id}d" preserveAspectRatio="xMidYMid meet">
        <title id="${id}t">${esc(o.title)}</title>
        <desc id="${id}d">${esc(summary)}</desc>
        <text x="${PAD.l}" y="30" class="v-title">${esc(o.title)}</text>
        ${o.subtitle ? `<text x="${PAD.l}" y="52" class="v-sub">${esc(o.subtitle)}</text>` : ""}
        ${inner}
      </svg>
      <figcaption>${esc(o.caption || summary)}${o.source ? ` <span class="v-src">${esc(o.source)}</span>` : ""}</figcaption>
      <p class="v-alt">${esc(summary)}</p></figure>`;
  }

  /* Achsen mit Gitter, Ticks und Achsentiteln */
  function axes(o, max, cats) {
    var ticks = 4;
    var g = "";
    for (let i = 0; i <= ticks; i += 1) {
      var y = PAD.t + PH - (PH * i) / ticks;
      var val = max >= 100 ? Math.round((max * i) / ticks) : Math.round((max * i) / ticks * 10) / 10; /* grosse Werte ohne Kommastelle */
      g += `<line x1="${PAD.l}" y1="${y}" x2="${PAD.l + PW}" y2="${y}" class="v-grid"/>
        <text x="${PAD.l - 12}" y="${y + 5}" class="v-tick" text-anchor="end">${val}</text>`;
    }
    g += `<line x1="${PAD.l}" y1="${PAD.t}" x2="${PAD.l}" y2="${PAD.t + PH}" class="v-axis"/>
      <line x1="${PAD.l}" y1="${PAD.t + PH}" x2="${PAD.l + PW}" y2="${PAD.t + PH}" class="v-axis"/>`;
    if (o.yTitle) g += `<text transform="translate(14 ${PAD.t + PH / 2}) rotate(-90)" class="v-axt" text-anchor="middle">${esc(o.yTitle)}</text>`;
    if (o.xTitle) g += `<text x="${PAD.l + PW / 2}" y="${H - 14}" class="v-axt" text-anchor="middle">${esc(o.xTitle)}</text>`;
    if (cats) {
      var step = PW / cats.length;
      cats.forEach((c, i) => {
        g += `<text x="${PAD.l + step * (i + 0.5)}" y="${PAD.t + PH + 24}" class="v-tick" text-anchor="middle">${esc(c)}</text>`;
      });
    }
    return g;
  }

  V.barChart = function (o) {
    var d = (o.data || []).filter((x) => x && typeof x[1] === "number" && isFinite(x[1]));
    if (!d.length) return emptyState(o, o.emptyNote);
    var peak = safeMax(d.map((x) => x[1]));
    if (peak === null) return emptyState(o, o.emptyNote);
    var allZero = d.every((x) => x[1] === 0);
    if (allZero) return emptyState(o, o.emptyNote || "Für diesen Zeitraum ist noch nichts erfasst.");
    var low = Math.min.apply(null, d.map((x) => x[1]));
    if (low < 0) {                                   // Werte unter null: eigene Skala mit Nulllinie
      var span = peak - low;
      var zeroY = PAD.t + PH - ((0 - low) / span) * PH;
      var bars2 = "";
      var step2 = PW / d.length, bw2 = Math.min(72, step2 * 0.58);
      d.forEach((x, i) => {
        var cx = PAD.l + step2 * (i + 0.5);
        var vy = PAD.t + PH - ((x[1] - low) / span) * PH;
        var yTop = Math.min(vy, zeroY), hh = Math.abs(vy - zeroY);
        bars2 += `<rect x="${cx - bw2 / 2}" y="${yTop}" width="${bw2}" height="${Math.max(2, hh)}" rx="5"
          class="v-bar${o.highlight === x[0] ? " hi" : ""}"/>
          <text x="${cx}" y="${x[1] >= 0 ? yTop - 9 : yTop + hh + 18}" class="v-val" text-anchor="middle">${x[1]}${o.unit || ""}</text>
          <text x="${cx}" y="${PAD.t + PH + 24}" class="v-tick" text-anchor="middle">${esc(x[0])}</text>`;
      });
      bars2 += `<line x1="${PAD.l}" y1="${zeroY}" x2="${PAD.l + PW}" y2="${zeroY}" class="v-axis"/>
        <text x="${PAD.l - 12}" y="${zeroY + 5}" class="v-tick" text-anchor="end">0</text>`;
      if (o.yTitle) bars2 += `<text transform="translate(24 ${PAD.t + PH / 2}) rotate(-90)" class="v-axt" text-anchor="middle">${esc(o.yTitle)}</text>`;
      if (o.xTitle) bars2 += `<text x="${PAD.l + PW / 2}" y="${H - 14}" class="v-axt" text-anchor="middle">${esc(o.xTitle)}</text>`;
      var sum2 = o.summary || `${o.title}. ` + d.map((x) => `${x[0]}: ${x[1]}${o.unit || ""}`).join("; ") + ".";
      return shell(Object.assign({ kind: "bar" }, o), bars2, sum2);
    }
    var max = o.max && isFinite(o.max) ? o.max : peak * 1.1;
    var step = PW / d.length;
    var bw = Math.min(72, step * 0.58);
    var bars = "";
    d.forEach((x, i) => {
      var h = (x[1] / max) * PH;
      var cx = PAD.l + step * (i + 0.5);
      var hi = o.highlight === x[0];
      bars += `<rect x="${cx - bw / 2}" y="${PAD.t + PH - h}" width="${bw}" height="${h}" rx="5"
        class="v-bar${hi ? " hi" : ""}" style="--grow:${h}px"/>
        <text x="${cx}" y="${PAD.t + PH - h - 9}" class="v-val" text-anchor="middle">${x[1]}${o.unit || ""}</text>`;
    });
    var sum = `${o.title}. ` + d.map((x) => `${x[0]} ${x[1]}${o.unit || ""}`).join(", ") + ".";
    return shell(Object.assign({ kind: "bar" }, o), axes(o, max, d.map((x) => x[0])) + bars, o.summary || sum);
  };

  V.lineChart = function (o) {
    var series = (o.series || []).filter((s) => s && (s.values || []).some((v) => isFinite(v)));
    var cats = o.cats || [];
    if (!series.length || cats.length < 2) return emptyState(o, o.emptyNote);
    var peak = safeMax(series.reduce((a, s) => a.concat(s.values), []));
    if (peak === null) return emptyState(o, o.emptyNote);
    var max = o.max && isFinite(o.max) ? o.max : peak * 1.12;
    var step = PW / Math.max(1, cats.length - 1);
    var body = "";
    series.forEach((s, si) => {
      var pts = s.values.map((v, i) => [PAD.l + step * i, PAD.t + PH - (v / max) * PH]);
      body += `<path d="${pts.map((p, i) => (i ? "L" : "M") + p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" ")}"
        class="v-line s${si}"/>`;
      pts.forEach((p, i) => { if (i % Math.ceil(pts.length / 7) === 0 || i === pts.length - 1)
        body += `<circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="4.5" class="v-dot s${si}"/>`; });
      var last = pts[pts.length - 1];
      body += `<text x="${Math.min(last[0] + 8, W - PAD.r - 4)}" y="${last[1] + 4}" class="v-lab s${si}"
        text-anchor="${last[0] + 8 > W - PAD.r - 60 ? "end" : "start"}">${esc(s.name)}</text>`;
    });
    var shown = cats.filter((_, i) => i % Math.ceil(cats.length / 7) === 0 || i === cats.length - 1);
    var xt = "";
    cats.forEach((c, i) => {
      if (shown.indexOf(c) < 0) return;
      xt += `<text x="${PAD.l + step * i}" y="${PAD.t + PH + 24}" class="v-tick" text-anchor="middle">${esc(c)}</text>`;
    });
    var sum = o.summary || `${o.title}. ` + series.map((s) =>
      `${s.name} von ${s.values[0]} auf ${s.values[s.values.length - 1]}`).join(", ") + ".";
    return shell(Object.assign({ kind: "line" }, o), axes(o, max, null) + xt + body, sum);
  };

  /* Signed numeric axes for teaching graphs. Do not reinterpret categorical charts. */
  V.signedLineChart = function (o) {
    var cats = o.cats || [], xs = o.xValues || cats.map(Number), ss = o.series || [];
    var valid = xs.length >= 2 && xs.length === cats.length && ss.length > 0 &&
      xs.every((v, i) => typeof v === "number" && Number.isFinite(v) && (!i || v > xs[i-1])) &&
      ss.every((s) => s && Array.isArray(s.values) && s.values.length === xs.length &&
        s.values.every((v) => typeof v === "number" && Number.isFinite(v)));
    if (!valid) return emptyState(o, "F\u00fcr diese Grafik fehlen passende Zahlenwerte.");
    var vals = ss.reduce((a, s) => a.concat(s.values), []);
    var lo = Math.min(0, ...vals), hi = Math.max(0, ...vals);
    if (lo === hi) { lo -= 1; hi += 1; }
    var plotTop=82, plotHeight=PH-(plotTop-PAD.t);
    var x = (v) => PAD.l + (v-xs[0])/(xs[xs.length-1]-xs[0])*PW;
    var y = (v) => plotTop + plotHeight - (v-lo)/(hi-lo)*plotHeight;
    var fmt = (v) => String(Math.abs(v) < 1e-10 ? 0 : Math.round(v*1000)/1000);
    var body = "";
    var intervals=o.tickCount===4 ? 4 : 5;
    for (var i=0; i<=intervals; i++) {
      var v=lo+(hi-lo)*i/intervals, yy=y(v);
      body += `<line x1="${PAD.l}" x2="${PAD.l+PW}" y1="${yy}" y2="${yy}" class="v-grid"/>
        <text x="${PAD.l-10}" y="${yy+5}" class="v-tick" text-anchor="end">${fmt(v)}</text>`;
    }
    body += `<line x1="${PAD.l}" x2="${PAD.l+PW}" y1="${y(0)}" y2="${y(0)}" class="v-axis" data-zero-axis="true"/>
      <line x1="${PAD.l}" x2="${PAD.l}" y1="${plotTop}" y2="${PAD.t+PH}" class="v-axis"/>`;
    var lastTick=-Infinity;
    cats.forEach((c,i) => { if(i!==cats.length-1 && (x(xs[i])-lastTick<42 || (i>0 && x(xs[xs.length-1])-x(xs[i])<42)))return;lastTick=x(xs[i]);body += `<text x="${x(xs[i])}" y="${PAD.t+PH+24}" class="v-tick" text-anchor="middle">${esc(c)}</text>`; });
    ss.forEach((s,si) => {
      body += `<path class="v-line s${si}" d="${s.values.map((v,i)=>(i?'L':'M')+x(xs[i]).toFixed(2)+' '+y(v).toFixed(2)).join(' ')}"/>`;
      s.values.forEach((v,i) => { body += `<circle cx="${x(xs[i])}" cy="${y(v)}" r="4" class="v-dot s${si}" data-x="${xs[i]}" data-y="${v}"><title>${esc(s.name)}: x=${xs[i]}, y=${v}</title></circle>`; });
      body += `<text x="${PAD.l+si*(PW/ss.length)}" y="${plotTop-22}" class="v-lab s${si}">${esc(s.name)}</text>`;
    });
    if(o.yTitle) body += `<text transform="translate(24 ${PAD.t+PH/2}) rotate(-90)" class="v-axt" text-anchor="middle">${esc(o.yTitle)}</text>`;
    if(o.xTitle) body += `<text x="${PAD.l+PW/2}" y="${H-14}" class="v-axt" text-anchor="middle">${esc(o.xTitle)}</text>`;
    var sum = ss.map((s) => s.name+': '+xs.map((v,i) => 'x='+v+', y='+s.values[i]).join('; ')).join('. ');
    return shell(Object.assign({kind:'signed-line'},o),body,sum);
  };

  V.process = function (o) {
    var st = (o.steps || []).filter((x) => x && x.title);
    if (!st.length) return emptyState(o, o.emptyNote);
    var n = st.length;
    /* Iteration 13: Nebeneinander nur, wenn jeder Kasten Platz für lesbaren Text hat.
       Sonst untereinander mit Pfeilen: volle Breite, keine winzige oder getrennte Schrift. */
    if ((PW - (n - 1) * 40) / n - 28 < 150) {
      var iw = PW - 64, hFS = 15.5, bFS = 14, lh = bFS + 5;
      var y = PAD.t + 26 + (o.subtitle ? 20 : 0), body = ""; /* Platz für den Untertitel */
      st.forEach((x, i) => {
        var hl = wrapPx(x.title, iw, hFS, 2), bl = wrapPx(x.text || "", iw, bFS, 6);
        var hh = 18 + hl.length * (hFS + 5) + bl.length * lh + 10;
        body += `<rect x="${PAD.l}" y="${y}" width="${PW}" height="${hh}" rx="14" class="v-box${x.accent ? " acc" : ""}"/>`;
        body += `<circle cx="${PAD.l + 24}" cy="${y + 25}" r="11" class="v-num"/><text x="${PAD.l + 24}" y="${y + 30}" class="v-numt" text-anchor="middle">${i + 1}</text>`;
        var yy = y + 16 + hFS;
        hl.forEach((ln) => { body += `<text x="${PAD.l + 48}" y="${yy}" class="v-boxh" style="font-size:${hFS}px">${esc(ln)}</text>`; yy += hFS + 5; });
        bl.forEach((ln) => { body += `<text x="${PAD.l + 48}" y="${yy}" class="v-boxt" style="font-size:${bFS}px">${esc(ln)}</text>`; yy += lh; });
        y += hh;
        if (i < n - 1) {
          var ax = PAD.l + 24;
          body += `<path d="M${ax} ${y + 4} L${ax} ${y + 20}" class="v-arrow"/><polygon points="${ax},${y + 27} ${ax - 5},${y + 19} ${ax + 5},${y + 19}" class="v-arrowh"/>`;
          if (x.via) { const vl = wrapPx(x.via, PW - 70, 12.5, 1)[0] || ""; body += `<text x="${ax + 18}" y="${y + 20}" class="v-via" style="font-size:12.5px">${esc(vl)}</text>`; }
          y += 30;
        }
      });
      var sumV = o.summary || `${o.title}. ` + st.map((x, i) => `${i + 1}. ${x.title}: ${x.text}`).join(" ");
      return shell(Object.assign({ kind: "process", height: y + 24 }, o), body, sumV);
    }
    /* Pfeilspalte breit genug für ihre Beschriftung */
    var viaFS = 12.5;
    var MINBOX = 148;
    var maxGap = n > 1 ? Math.max(38, (PW - n * MINBOX) / (n - 1)) : 38;
    var wish = st.slice(0, n - 1).reduce((m, x) =>
      Math.max(m, x.via ? V.textW(x.via, viaFS) / 2 + 12 : 38), 38);
    var gap = Math.min(wish, maxGap);
    var viaW = Math.max(30, gap - 12);
    var boxW = (PW - (n - 1) * gap) / n;
    var padX = 14;
    var innerW = boxW - padX * 2;
    /* Zeilen je Kasten, daraus die nötige Höhe */
    var bodyFS = Math.min.apply(null, st.map((x) => fitFS(x.text, innerW, 14, 11)));
    var lines = st.map((x) => wrapPx(x.text, innerW, bodyFS));
    var maxLines = Math.max.apply(null, lines.map((l) => l.length));
    var headFS = Math.min.apply(null, st.map((x) => fitFS(x.title, innerW, 16, 12)));
    var headLines = st.map((x) => wrapPx(x.title, innerW, headFS).length);
    var maxHead = Math.max.apply(null, headLines);
    var lineH = bodyFS + 5;
    var boxH = 44 + maxHead * (headFS + 4) + 10 + maxLines * lineH + 16;
    var top = PAD.t + 26 + (o.subtitle ? 20 : 0); /* Platz für den Untertitel */
    var H2 = top + boxH + 58;                       // Leinwand folgt dem Inhalt
    var body = "";
    st.forEach((x, i) => {
      var x0 = PAD.l + i * (boxW + gap);
      body += `<rect x="${x0}" y="${top}" width="${boxW}" height="${boxH}" rx="14" class="v-box${x.accent ? " acc" : ""}"/>`;
      body += `<circle cx="${x0 + padX + 11}" cy="${top + 21}" r="11" class="v-num"/>
        <text x="${x0 + padX + 11}" y="${top + 26}" class="v-numt" text-anchor="middle">${i + 1}</text>`;
      wrapPx(x.title, innerW, headFS).forEach((ln, k) => {
        body += `<text x="${x0 + padX}" y="${top + 50 + k * (headFS + 4)}" class="v-boxh"
          style="font-size:${headFS}px">${esc(ln)}</text>`;
      });
      lines[i].forEach((ln, k) => {
        body += `<text x="${x0 + padX}" y="${top + 44 + maxHead * (headFS + 4) + 16 + k * lineH}"
          class="v-boxt" style="font-size:${bodyFS}px">${esc(ln)}</text>`;
      });
      if (i < n - 1) {
        var ax = x0 + boxW;
        var midY = top + boxH / 2;
        body += `<path d="M${ax + 7} ${midY} L${ax + gap - 9} ${midY}" class="v-arrow"/>
          <polygon points="${ax + gap - 7},${midY} ${ax + gap - 15},${midY - 4.5} ${ax + gap - 15},${midY + 4.5}" class="v-arrowh"/>`;
        if (x.via) {
          var vfs = fitFS(x.via, viaW, viaFS, 10);
          var vlines = wrapPx(x.via, viaW, vfs, 2);
          var fits = vlines.every((ln) => V.textW(ln, vfs) <= viaW + 1);
          if (fits) {
            vlines.forEach((ln, k) => {
              body += `<text x="${ax + gap / 2}" y="${midY - 14 - (vlines.length - 1 - k) * (vfs + 2)}"
                class="v-via" text-anchor="middle" style="font-size:${vfs}px">${esc(ln)}</text>`;
            });
          }
        }
      }
    });
    var sum = o.summary || `${o.title}. ` + st.map((x, i) => `${i + 1}. ${x.title}: ${x.text}`).join(" ");
    return shell(Object.assign({ kind: "process", height: H2 }, o), body, sum);
  };

  V.compare = function (o) {
    var cols = (o.columns || []).filter((c) => c && (c.rows || []).length);
    if (cols.length < 2) return emptyState(o, o.emptyNote);
    /* Iteration 13: Beschriftung über dem Wert, beide in voller Kastenbreite.
       Vorher standen lange Beschriftungen neben einer schmalen Wertspalte:
       Text wurde winzig, getrennt und aus dem Kasten geschoben. */
    var gap = 26, cw = (PW - gap) / 2, padX = 16, innerW = cw - padX * 2;
    var labFS = 13, valFS = 14.5, labLH = labFS + 4, valLH = valFS + 5;
    var cells = cols.map((c) => c.rows.map((r) => ({
      lab: wrapPx(r[0], innerW, labFS, 2), val: wrapPx(r[1], innerW, valFS, 4) })));
    var rowsMax = Math.max.apply(null, cols.map((c) => c.rows.length));
    var rowH = [];
    for (let r = 0; r < rowsMax; r += 1) {
      rowH.push(Math.max.apply(null, cells.map((cc) => (cc[r] ? cc[r].lab.length * labLH + cc[r].val.length * valLH + 14 : 0))));
    }
    var heads = cols.map((c) => wrapPx(c.name, innerW, 16, 2));
    var headH = Math.max.apply(null, heads.map((l) => l.length)) * 20 + 24;
    var bodyH = rowH.reduce((a, b) => a + b, 0);
    var top = PAD.t + 18 + (o.subtitle ? 20 : 0); /* Platz für den Untertitel */
    var boxH = headH + bodyH + 8;
    var linkH = o.link ? 40 : 8;
    var H2 = top + boxH + linkH + 26;
    var body = "";
    cols.forEach((c, i) => {
      var x0 = PAD.l + i * (cw + gap);
      body += `<rect x="${x0}" y="${top}" width="${cw}" height="${boxH}" rx="14" class="v-box${i ? " acc" : ""}"/>`;
      heads[i].forEach((ln, k) => { body += `<text x="${x0 + padX}" y="${top + 30 + k * 20}" class="v-boxh">${esc(ln)}</text>`; });
      var y = top + headH;
      cells[i].forEach((cell, k) => {
        var yy = y + labFS;
        cell.lab.forEach((ln) => { body += `<text x="${x0 + padX}" y="${yy}" class="v-rowl" style="font-size:${labFS}px">${esc(ln)}</text>`; yy += labLH; });
        yy += valFS - labFS + 2;
        cell.val.forEach((ln) => { body += `<text x="${x0 + padX}" y="${yy}" class="v-boxt" style="font-size:${valFS}px">${esc(ln)}</text>`; yy += valLH; });
        y += rowH[k];
      });
    });
    if (o.link) {
      body += `<text x="${W / 2}" y="${top + boxH + 28}" class="v-via" text-anchor="middle">${esc(o.link)}</text>`;
    }
    /* Zusammenfassung in sauberer Form: Spalte – Beschriftung: Wert. */
    var bare = (s) => String(s).replace(/[.!?]+\s*$/, "");
    var sum = o.summary || `${bare(o.title)}. ` + cols.map((c) =>
      `${bare(c.name)} – ` + c.rows.map((r) => `${bare(r[0])}: ${bare(r[1])}`).join(". ") + ".").join(" ") + (o.link ? ` ${bare(o.link)}.` : "");
    return shell(Object.assign({ kind: "compare", height: H2 }, o), body, sum);
  };

  V.timeline = function (o) {
    var ev = (o.events || []).filter((e) => e && isFinite(e.year));
    if (ev.length < 2) return emptyState(o, o.emptyNote);
    var spanRows = (o.spans || []).length;
    var y = PAD.t + 46 + spanRows * 26;
    var span = ev[ev.length - 1].year - ev[0].year || 1;
    var px = (yr) => PAD.l + ((yr - ev[0].year) / span) * PW;
    var body = `<line x1="${PAD.l}" y1="${y}" x2="${PAD.l + PW}" y2="${y}" class="v-axis"/>`;
    (o.spans || []).forEach((s, i) => {
      body += `<rect x="${px(s.from)}" y="${y - 46 - i * 26}" width="${Math.max(6, px(s.to) - px(s.from))}" height="18"
        rx="9" class="v-span s${i}"/>
        <text x="${Math.min(px(s.from) + 6, PAD.l + PW - V.textW(s.name, 14))}" y="${y - 33 - i * 26}" class="v-boxt">${esc(s.name)}</text>`;
    });
    /* Beschriftung ohne Ueberdeckung: erste freie Zeile je Marke. */
    var rows = []; const GAP = 10, LH = 17, ROW = 58; let maxRow = 0;
    ev.forEach((e) => {
      var x = px(e.year);
      body += `<circle cx="${x}" cy="${y}" r="${e.turn ? 9 : 6}" class="v-dot${e.turn ? " turn" : ""}"/>`;
      var lines = wrapPx(e.label, 128, 13.5, 2);
      var wmax = Math.max.apply(null, lines.map((l) => V.textW(l, 13.5)).concat([0]));
      var cx = Math.min(Math.max(x, PAD.l + wmax / 2), PAD.l + PW - wmax / 2);
      var a = cx - wmax / 2 - GAP, b = cx + wmax / 2 + GAP;
      var r = 0;
      for (;;) {
        var taken = rows[r] || (rows[r] = []);
        if (!taken.some((s) => a < s[1] && b > s[0])) { taken.push([a, b]); break; }
        r += 1;
      }
      if (r > maxRow) maxRow = r;
      var topY = y + 26 + r * ROW;
      body += `<text x="${cx}" y="${topY}" class="v-tick" text-anchor="middle">${e.year}</text>`;
      lines.forEach((ln, k) => {
        body += `<text x="${cx}" y="${topY + 16 + k * LH}" class="v-boxt" text-anchor="middle">${esc(ln)}</text>`;
      });
      if (Math.abs(cx - x) > 2 || r > 0) {
        body += `<line x1="${x}" y1="${y + 8}" x2="${cx}" y2="${topY - 10}" class="v-lead"/>`;
      }
    });
    var sum = o.summary || `${o.title}. ` + ev.map((e) => `${e.year}: ${e.label}`).join("; ") + ".";
    var H2 = y + 26 + (maxRow + 1) * 58 + 2 * 17 + 18;
    return shell(Object.assign({ kind: "timeline", height: H2 }, o), body, sum);
  };

  /* Zeichenbreiten je Schriftgrad, konservativ geschätzt */
  var CW = 0.55;
  V.textW = (t, fs) => String(t).length * fs * CW;
  /* Bricht auf eine Pixelbreite um und liefert die Zeilen */
  function wrapPx(t, px, fs, maxLines) {
    /* Wörter, die auch allein nicht passen, werden getrennt */
    var words = [];
    String(t).split(/\s+/).forEach((w) => {
      if (V.textW(w, fs) <= px || px <= 0) { words.push(w); return; }
      var per = Math.max(4, Math.floor(px / (fs * CW)) - 1);
      for (let i = 0; i < w.length; i += per) {
        var part = w.slice(i, i + per);
        words.push(i + per < w.length ? part + "-" : part);
      }
    });
    var out = []; let line = "";
    words.forEach((w) => {
      var test = (line ? line + " " + w : w);
      if (V.textW(test, fs) > px && line) { out.push(line); line = w; }
      else line = test;
    });
    if (line) out.push(line);
    if (maxLines && out.length > maxLines) {
      var keep = out.slice(0, maxLines);
      keep[maxLines - 1] = keep[maxLines - 1].replace(/\S+$/, "…");
      return keep;
    }
    return out;
  }
  V.wrapPx = wrapPx;
  /* Grösster Schriftgrad, bei dem das längste Wort noch passt */
  function fitFS(t, px, base, min) {
    var longest = String(t).split(/\s+/).reduce((a, w) => (w.length > a.length ? w : a), "");
    var fs = base;
    while (fs > (min || 11) && V.textW(longest, fs) > px) fs -= 0.5;
    return fs;
  }
  V.fitFS = fitFS;

  function wrap(t, per) {
    var words = String(t).split(/\s+/);
    var out = []; let line = "";
    words.forEach((w) => {
      if ((line + " " + w).trim().length > per) { out.push(line.trim()); line = w; }
      else line += " " + w;
    });
    if (line.trim()) out.push(line.trim());
    return out.slice(0, 4);
  }
  V.wrap = wrap;
})();

/* Spass-Ebene. Rückmeldungen mit Charakter, Combo-Titel, Stufenaufstiege
   und Fachduelle. Trockener Humor, nie auf Kosten des Lernenden: gelobt
   wird die Leistung, gefrotzelt wird höchstens der Stoff. */
(function () {
  "use strict";
  var M = window.MNEMIKA;
  var F = {};
  M.FUN = F;

  /* --------- Lob, nach Combo-Länge gestaffelt --------- */
  F.praise = {
    1: ["Sitzt.", "Korrekt.", "Sauber.", "Genau so.", "Treffer.", "Richtig.",
        "Das war souverän.", "Punkt für dich.", "Ohne Zögern.", "Passt."],
    3: ["Drei am Stück.", "Du bist drin.", "Läuft.", "Kein Zufall mehr.",
        "Das nennt man Anlauf.", "Drei zu null für dich."],
    5: ["Fünfer-Serie. Respekt.", "Das ist kein Glück mehr.", "Die Aufgaben sehen alt aus.",
        "Du hast den Dreh raus.", "Fünf richtig. Der Stoff gibt auf."],
    8: ["Acht am Stück. Ernsthaft?", "Die Prüfung sollte sich Sorgen machen.",
        "Du spielst gerade auf einem anderen Level.", "Achterserie. Das kann man so lassen."],
    12: ["Zwölf. Wir haben keine Sprüche mehr vorbereitet.",
         "An dieser Stelle war eigentlich eine falsche Antwort eingeplant.",
         "Zwölf am Stück. Der Aufgabenpool ergibt sich."],
  };

  /* --------- Trost, immer konstruktiv --------- */
  F.consol = [
    "Nicht ganz. Genau dafür ist das hier da.",
    "Knapp daneben. Die kommt gleich nochmals.",
    "Das war die häufigste Falle bei dieser Aufgabe.",
    "Falsch, aber nachvollziehbar falsch. Schau dir die Begründung an.",
    "Diese Aufgabe erwischt fast alle beim ersten Mal.",
    "Noch nicht. Beim zweiten Anlauf sitzt sie meistens.",
    "Daneben. Lieber jetzt als im Februar.",
    "Fehler notiert, Wiederholung eingeplant. So funktioniert das System.",
    "Nicht richtig, aber jetzt weisst du es.",
    "Das ist genau die Stelle, an der die Prüfung gerne zuschlägt.",
  ];
  F.skipped = [
    "Übersprungen. Kommt wieder, keine Sorge.",
    "Aufgeschoben ist nicht aufgehoben. Diese Aufgabe merkt sich das.",
    "Übersprungen. Sie wartet geduldig.",
  ];
  F.timeout = [
    "Zeit abgelaufen. Die Uhr ist unbestechlich.",
    "Zu langsam. In der Prüfung tickt sie auch.",
    "Zeit vorbei. Tempo ist Übungssache.",
  ];

  /* --------- Combo-Titel --------- */
  F.comboTitle = function (n) {
    if (n >= 15) return "Legendär";
    if (n >= 12) return "Unaufhaltsam";
    if (n >= 9) return "Im Rausch";
    if (n >= 6) return "Brennt";
    if (n >= 4) return "In Fahrt";
    if (n >= 2) return "Serie";
    return "";
  };

  /* --------- Urteil am Rundenende --------- */
  F.verdict = function (pct, mode) {
    if (pct === 100) return ["Makellos.", "Keine einzige falsche Antwort. Das darf man feiern."];
    if (pct >= 90) return ["Stark.", "Auf diesem Niveau bestehst du die Prüfung mit Reserve."];
    if (pct >= 75) return ["Solide.", "Gute Basis. Die Lücken sind unten aufgelistet und lassen sich schliessen."];
    if (pct >= 60) return ["Ausreichend.", "Es trägt, aber es ist noch keine Reserve da. Weiter mit den schwachen Kapiteln."];
    if (pct >= 40) return ["Ausbaufähig.", "Die Hälfte sitzt schon. Lies die markierten Kapitel nochmals und komm zurück."];
    if (pct >= 20) return ["Frühe Phase.", "Das ist ein Anfang. Erst lesen, dann testen, dann wird das."];
    return ["Erster Kontakt.", "Völlig normal für den Start. Geh zuerst durch das Kapitel, danach sieht das anders aus."];
  };

  /* --------- Stufenaufstieg --------- */
  F.levelUp = function (rank) {
    var lines = [
      "Neuer Rang: " + rank + ".",
      "Aufgestiegen. Du bist jetzt " + rank + ".",
      "Stufe geschafft. Ab sofort: " + rank + ".",
    ];
    return lines[Math.floor(Math.random() * lines.length)];
  };

  /* --------- Fachduelle --------- */
  F.bosses = {
    math: { name: "Der Differenzenquotient", emoji: "📐", hp: 12,
      taunt: "Du willst zur Passerelle? Dann leite mich ab.",
      win: "Der Grenzwert ist gebildet. Sauber gerechnet.",
      lose: "Er hat dich im Nenner erwischt. Nochmal." },
    physics: { name: "Baron von Reibung", emoji: "🧲", hp: 12,
      taunt: "Ohne mich würdest du nicht einmal stehen können. Beweis, dass du mich verstehst.",
      win: "Haftreibung überwunden. Du bist ins Gleiten gekommen.",
      lose: "Stehen geblieben. Die Reibungszahl war höher als gedacht." },
    chemistry: { name: "Molmasse Magnifico", emoji: "⚗️", hp: 12,
      taunt: "Rechne mich um, wenn du dich traust. In Mol, nicht in Gramm.",
      win: "Bilanz geht auf. Links wie rechts.",
      lose: "Die Gleichung ist nicht ausgeglichen. Zurück an den Tisch." },
    biology: { name: "Das Mitochondrium", emoji: "🧬", hp: 12,
      taunt: "Ich bin das Kraftwerk der Zelle. Und dein nächster Gegner.",
      win: "ATP gesichert. Du hast genug Energie für die nächste Runde.",
      lose: "Dir ist der Sauerstoff ausgegangen. Gärung liefert zu wenig." },
    history: { name: "Der Sonderbund", emoji: "🏛️", hp: 12,
      taunt: "Sieben Kantone gegen dich. Kennst du die Vorgeschichte?",
      win: "Beigelegt, und zwar per Kompromiss. Ganz wie 1848.",
      lose: "Die Tagsatzung ist nicht überzeugt. Nochmals lesen." },
    geography: { name: "Die Tornado Alley", emoji: "🌪️", hp: 12,
      taunt: "Kalte Luft aus Norden, warme aus dem Süden. Und du mittendrin.",
      win: "Durchgestanden. Du kennst die Luftmassen.",
      lose: "Weggefegt. Schau dir die Gebirgsrichtung nochmals an." },
    german: { name: "Der Operator", emoji: "✍️", hp: 12,
      taunt: "Erörtern, erklären oder nennen? Wenn du mich nicht liest, schreibst du am Auftrag vorbei.",
      win: "Auftrag erfasst, Antwort getroffen.",
      lose: "Thema verfehlt. Der Operator hat gewonnen." },
    english: { name: "The Present Perfect", emoji: "🇬🇧", hp: 12,
      taunt: "I have been waiting for you. Or did I wait? Exactly that is the question.",
      win: "Tense mastered. Since and for hold no fear for you.",
      lose: "Simple past where present perfect belonged. Try again." },
  };

  /* --------- Tagesauftrag mit Namen --------- */
  F.quests = [
    { id: "streak", icon: "🔥", title: "Serie halten", desc: "Heute mindestens eine Runde spielen" },
    { id: "twenty", icon: "🎯", title: "Zwanzig sicher", desc: "20 Aufgaben in einem Tag richtig beantworten" },
    { id: "combo", icon: "⚡", title: "Fünfer-Serie", desc: "Fünf richtige Antworten am Stück" },
    { id: "chapter", icon: "📖", title: "Ein Kapitel lesen", desc: "Ein neues Kapitel vollständig öffnen" },
    { id: "boss", icon: "⚔️", title: "Duell gewinnen", desc: "Ein Fachduell erfolgreich beenden" },
  ];

  F.pick = function (arr) { return arr[Math.floor(Math.random() * arr.length)]; };
  F.praiseFor = function (combo) {
    var keys = [12, 8, 5, 3, 1];
    for (let i = 0; i < keys.length; i += 1) {
      if (combo >= keys[i]) return F.pick(F.praise[keys[i]]);
    }
    return F.pick(F.praise[1]);
  };
})();

/* Unterhaltsame Aufgaben: Alltagsszenen, Prüfungsfallen und ein paar
   augenzwinkernde Situationen. Der Witz steckt in der Verpackung, der
   Inhalt bleibt prüfungsrelevant. */
(function () {
  "use strict";
  var M = window.MNEMIKA;
  const { mc, tf, num } = M;

  function q(chapterId) {
    var c = M.chapter(chapterId);
    if (!c) return function () {};
    return function () {
      for (let i = 0; i < arguments.length; i += 1) {
        var item = arguments[i];
        item.role = "test";
        item.fun = true;
        c.questions.push(item);
      }
    };
  }

  /* ------------------------------ Mathematik */
  q("math-algebra")(
    mc("fun-alg-1", "Ein Onlineshop wirbt: «50 Prozent Rabatt, danach nochmals 50 Prozent auf den reduzierten Preis.» Wie teuer ist ein Artikel von 200 Franken am Schluss?",
      ["gratis", "50 Franken", "100 Franken", "150 Franken"], 1,
      "Erst 200 · 0,5 = 100, dann 100 · 0,5 = 50. Prozente vom reduzierten Preis sind kein zweiter Abzug vom Originalpreis. Zwei Halbierungen ergeben ein Viertel, nicht null.", { d: 2 }),
    tf("fun-alg-2", "Wenn du auf beiden Seiten einer Gleichung durch (x − 3) teilst, ist das immer erlaubt.", false,
      "Nur wenn x ≠ 3 gesichert ist. Sonst teilst du durch null und verlierst womöglich genau die Lösung, die gesucht war.", { d: 3 })
  );

  q("math-functions-advanced")(
    mc("fun-exp-1", "Ein Gerücht verbreitet sich so, dass es jeden Tag doppelt so viele Leute kennen. Am Tag 30 kennt es die ganze Schule. An welchem Tag kannte es die Hälfte der Schule?",
      ["Tag 15", "Tag 25", "Tag 29", "Tag 28"], 2,
      "Bei Verdopplung genügt ein einziger Tag für die zweite Hälfte. Das ist der Kern exponentiellen Wachstums: fast alles passiert ganz am Schluss.", { d: 3 }),
    num("fun-exp-2", "Du legst ein Blatt Papier gedanklich 10-mal in der Mitte zusammen. Wie viele Lagen hast du dann?", 1024, 0,
      "2¹⁰ = 1024. Nach 42 Faltungen wäre der Stapel rechnerisch über 400'000 Kilometer hoch und reichte bis zum Mond. Exponentielles Wachstum ist extrem unintuitiv.", { d: 2 })
  );

  q("math-probability")(
    mc("fun-prob-1", "Beim Roulette ist zehnmal hintereinander Rot gefallen. Wie gross ist die Wahrscheinlichkeit, dass beim nächsten Mal Schwarz kommt?",
      ["höher als sonst, Schwarz ist fällig", "unverändert, das Rad hat kein Gedächtnis", "niedriger, Rot läuft gerade", "genau 50 Prozent wegen der Serie"], 1,
      "Das ist der Spielerfehlschluss. Jeder Wurf ist unabhängig. Die Kugel weiss nicht, was vorher passiert ist. Die Wahrscheinlichkeit bleibt bei 18 von 37.", { d: 2 }),
    mc("fun-prob-2", "In einer Klasse mit 23 Personen: Wie wahrscheinlich ist es, dass zwei am selben Tag Geburtstag haben?",
      ["etwa 6 Prozent", "etwa 25 Prozent", "etwa 50 Prozent", "etwa 90 Prozent"], 2,
      "Das berühmte Geburtstagsparadoxon. Gefragt ist nicht, ob jemand mit dir Geburtstag hat, sondern ob irgendein Paar zusammenfällt. Es gibt 253 mögliche Paare, deshalb kippt es schon bei 23 Personen über 50 Prozent.", { d: 3 })
  );

  q("math-derivatives")(
    mc("fun-der-1", "Dein Tacho zeigt 80 km/h. Welche mathematische Grösse liest du gerade ab?",
      ["den Funktionswert der Wegfunktion", "die Ableitung der Wegfunktion nach der Zeit", "das Integral der Geschwindigkeit", "die zweite Ableitung"], 1,
      "Der Tacho zeigt die momentane Änderungsrate des Weges, also s'(t). Der Kilometerzähler daneben zeigt dagegen das Integral: den aufsummierten Weg.", { d: 2 })
  );

  /* ------------------------------ Physik */
  q("phys-newton-forces")(
    mc("fun-newt-1", "Ein Ei fällt aus gleicher Höhe einmal auf Beton und einmal auf ein Kissen. Was unterscheidet die beiden Fälle physikalisch?",
      ["die Aufprallgeschwindigkeit", "die Bremszeit und damit die wirkende Kraft", "die Masse des Eis", "die Fallbeschleunigung"], 1,
      "Die Geschwindigkeit beim Auftreffen ist identisch. Das Kissen verlängert die Bremszeit, und weil F = m·Δv/Δt gilt, sinkt die Kraft. Genau darauf beruht auch der Airbag.", { d: 3 }),
    tf("fun-newt-2", "Eine Fliege prallt gegen eine Windschutzscheibe. Auf die Fliege wirkt eine grössere Kraft als auf das Auto.", false,
      "Die Kräfte sind exakt gleich gross, actio gleich reactio. Verschieden ist die Wirkung: dieselbe Kraft beschleunigt die winzige Masse der Fliege dramatisch und das Auto praktisch gar nicht.", { d: 3 })
  );

  q("phys-energy")(
    mc("fun-energy-1", "Ein Auto verdoppelt seine Geschwindigkeit von 50 auf 100 km/h. Wie verändert sich der Bremsweg ungefähr?",
      ["er verdoppelt sich", "er vervierfacht sich", "er bleibt gleich", "er verdreifacht sich"], 1,
      "Die Bewegungsenergie steigt mit dem Quadrat der Geschwindigkeit. Doppeltes Tempo bedeutet vierfache Energie und damit ungefähr vierfachen Bremsweg. Das ist der Grund für Tempolimits in Wohnquartieren.", { d: 2 })
  );

  q("phys-heat-thermo")(
    mc("fun-heat-1", "Du willst im Sommer die Küche kühlen und lässt dazu die Kühlschranktür offen. Was passiert?",
      ["die Küche kühlt langsam ab", "nichts messbares", "die Küche wird insgesamt wärmer", "nur der Kühlschrank kühlt ab"], 2,
      "Der Kühlschrank pumpt Wärme aus dem Innenraum nach hinten heraus und erzeugt dabei zusätzlich Abwärme aus dem Stromverbrauch. Netto gibt er mehr Wärme ab, als er dem Innenraum entzieht.", { d: 3 }),
    tf("fun-heat-2", "Eine Metallklinke fühlt sich kälter an als ein Holzgriff daneben, weil sie tatsächlich kälter ist.", false,
      "Beide haben Raumtemperatur. Metall leitet Wärme viel besser und entzieht deiner Hand schneller Energie. Du fühlst nicht Temperatur, sondern Wärmestrom.", { d: 2 })
  );

  q("phys-pressure-hydro")(
    mc("fun-pres-1", "Ein Boot mit einem schweren Anker schwimmt auf einem kleinen See. Du wirfst den Anker über Bord. Was macht der Wasserspiegel?",
      ["er steigt", "er sinkt", "er bleibt gleich", "das hängt vom Seeboden ab"], 1,
      "Im Boot verdrängt der Anker Wasser entsprechend seinem Gewicht. Am Grund verdrängt er nur noch sein Volumen. Weil Eisen dichter ist als Wasser, ist die zweite Verdrängung kleiner. Der Pegel sinkt.", { d: 3 })
  );

  q("phys-circuits-power")(
    mc("fun-circ-1", "An einer Steckdose mit 10-Ampere-Sicherung bei 230 Volt hängen ein Wasserkocher mit 2000 W und ein Föhn mit 1800 W. Was passiert?",
      ["beides läuft problemlos", "die Sicherung löst aus", "die Spannung sinkt auf die Hälfte", "die Geräte laufen langsamer"], 1,
      "Zusammen 3800 W ergeben bei 230 V einen Strom von rund 16,5 A. Das liegt deutlich über 10 A, die Sicherung trennt. Sie schützt dabei die Leitung, nicht die Geräte.", { d: 3 })
  );

  q("phys-optics")(
    mc("fun-opt-1", "Warum sieht ein Bleistift im Wasserglas geknickt aus?",
      ["das Glas verzerrt ihn", "das Licht wird beim Übergang Wasser zu Luft gebrochen", "der Bleistift dehnt sich aus", "eine optische Täuschung im Gehirn"], 1,
      "Die Lichtstrahlen ändern beim Medienwechsel ihre Richtung. Dein Gehirn nimmt aber an, Licht laufe geradeaus, und verlegt den Bildpunkt entsprechend.", { d: 2 })
  );

  /* ------------------------------ Chemie */
  q("chem-polarity-forces")(
    mc("fun-pol-1", "Warum bringt Spülmittel fettiges Geschirr sauber, blosses Wasser aber nicht?",
      ["es macht das Wasser heisser", "seine Moleküle haben ein wasserliebendes und ein fettliebendes Ende", "es löst Fett chemisch auf", "es senkt den pH-Wert"], 1,
      "Das unpolare Ende steckt im Fett, das polare ragt ins Wasser. So lässt sich Fett in Wasser transportieren, obwohl sich die beiden sonst meiden.", { d: 2 }),
    tf("fun-pol-2", "Öl schwimmt auf Wasser, weil es unpolar ist.", false,
      "Es schwimmt wegen der geringeren Dichte. Dass es sich nicht mischt, liegt an der Polarität. Zwei verschiedene Eigenschaften, zwei verschiedene Erklärungen.", { d: 3 })
  );

  q("chem-acid-base")(
    mc("fun-ph-1", "Cola hat etwa pH 2,5, Wasser pH 7. Wie viel saurer ist Cola ungefähr?",
      ["knapp dreimal", "etwa 30-mal", "rund 3000-mal", "rund 30'000-mal"], 3,
      "4,5 pH-Stufen bedeuten 10^4,5, also rund 31'600-fach. Der Logarithmus verbirgt, wie gewaltig die Unterschiede sind.", { d: 3 }),
    mc("fun-ph-2", "Warum hilft Natron gegen Sodbrennen?",
      ["es verdünnt die Magensäure", "es reagiert als Base mit der Säure zu Salz, Wasser und CO₂", "es senkt den pH weiter", "es beschichtet den Magen"], 1,
      "Eine klassische Neutralisation. Das entstehende CO₂ erklärt zugleich das Aufstossen danach.", { d: 2 })
  );

  q("chem-equations-mole")(
    mc("fun-mol-1", "Ein Mol Wassermoleküle passt ungefähr in ein Glas. Wie viele Teilchen sind das?",
      ["6 Millionen", "6 Milliarden", "602 Milliarden", "über 600'000 Milliarden Milliarden"], 3,
      "6,022 · 10²³. Würde man sie auf alle acht Milliarden Menschen verteilen, bekäme jede Person rund 75 Billionen Moleküle. Und das aus 18 Gramm Wasser.", { d: 2 })
  );

  q("chem-redox")(
    mc("fun-redox-1", "Was haben ein rostendes Velo, ein brennendes Streichholz und deine Atmung gemeinsam?",
      ["alle brauchen Licht", "alle sind Redoxreaktionen mit Elektronenübertragung", "alle sind endotherm", "alle laufen nur bei Hitze ab"], 1,
      "Dreimal derselbe Vorgang in verschiedenen Geschwindigkeiten: Elektronen wandern, Sauerstoff wird reduziert. Nur das Tempo und die Kontrolle unterscheiden sich.", { d: 2 })
  );

  /* ------------------------------ Biologie */
  q("bio-energy")(
    mc("fun-bio-1", "Ein Baum wiegt mehrere Tonnen. Woher stammt der grösste Teil dieser Masse?",
      ["aus dem Boden", "aus dem Wasser", "aus dem Kohlenstoffdioxid der Luft", "aus dem Dünger"], 2,
      "Der Kohlenstoff der Biomasse kommt aus der Luft, nicht aus dem Boden. Ein Baum ist zu einem grossen Teil gebundenes CO₂. Das überrascht fast jeden beim ersten Hören.", { d: 3 })
  );

  q("bio-membrane-transport")(
    mc("fun-osm-1", "Warum schrumpelt deine Haut nach einem langen Bad, aber du platzt nicht?",
      ["die Haut trocknet aus", "Wasser dringt osmotisch in die oberste Hornschicht ein, die tieferen Schichten sind abgedichtet", "das Wasser ist zu kalt", "Salz wird ausgeschwemmt"], 1,
      "Die oberste Hornschicht nimmt Wasser auf und dehnt sich, ist aber am Untergrund fixiert. Sie muss sich werfen. Die Barrierefunktion der Haut verhindert, dass es tiefer geht.", { d: 3 })
  );

  q("bio-mendel")(
    mc("fun-mend-1", "Zwei braunäugige Eltern bekommen ein blauäugiges Kind. Der Vater wird misstrauisch. Zu Recht?",
      ["ja, das ist genetisch unmöglich", "nein, beide können Träger des rezessiven Allels sein", "nur wenn die Mutter blaue Augen hat", "ja, Augenfarbe ist immer dominant vererbt"], 1,
      "Zwei mischerbige Eltern Aa haben eine Chance von 25 Prozent auf ein Kind mit aa. Vereinfacht dargestellt, in Wirklichkeit sind mehrere Gene beteiligt, aber das Prinzip stimmt.", { d: 2 })
  );

  q("bio-evolution")(
    tf("fun-evo-1", "Giraffen haben lange Hälse bekommen, weil ihre Vorfahren sich immer weiter nach oben gestreckt haben.", false,
      "Das ist die Vorstellung von Lamarck, und sie ist falsch. Erworbene Merkmale werden nicht vererbt. Es gab von Anfang an Unterschiede in der Halslänge, und die Umwelt hat ausgewählt.", { d: 2 }),
    mc("fun-evo-2", "Ein Antibiotikum wirkt nach einigen Jahren nicht mehr. Was ist passiert?",
      ["die Bakterien haben gelernt, sich zu wehren", "resistente Varianten waren vorhanden und wurden bevorzugt vermehrt", "das Medikament ist verdorben", "die Menschen sind immun geworden"], 1,
      "Kein Bakterium wird während seines Lebens resistent. Einzelne waren es zufällig schon vorher, und genau die überleben und vermehren sich. Selektion in Zeitlupe, live beobachtbar.", { d: 3 })
  );

  q("bio-respiration-circulation")(
    mc("fun-resp-1", "Warum wird dir schwindlig, wenn du sehr schnell hechelst, obwohl du dabei mehr Sauerstoff einatmest?",
      ["zu viel Sauerstoff ist giftig", "du atmest zu viel CO₂ ab, was die Blutgefässe im Hirn verengt", "der Blutdruck steigt zu stark", "die Lunge überhitzt"], 1,
      "Hyperventilation senkt den CO₂-Gehalt. Der Körper reguliert die Atmung über CO₂, nicht über Sauerstoff, und die Hirngefässe verengen sich. Deshalb hilft langsames Ausatmen.", { d: 3 })
  );

  /* ------------------------------ Geschichte */
  q("hist-ch-1798-1848")(
    mc("fun-hist-1", "Der Sonderbundskrieg von 1847 dauerte 26 Tage und forderte rund 100 Tote. Warum gilt er trotzdem als entscheidend?",
      ["wegen der hohen Verluste", "weil er die Voraussetzung für den Bundesstaat von 1848 schuf", "weil ausländische Mächte eingriffen", "weil er zehn Jahre Folgen hatte"], 1,
      "Kurz, wenig blutig und mit einem Sieger, der die Verlierer nicht demütigte, sondern einband. Genau das machte die Verfassung von 1848 möglich.", { d: 2 })
  );

  q("hist-ww1")(
    mc("fun-ww1-1", "Ein Schüler schreibt: «Der Erste Weltkrieg brach aus, weil in Sarajevo ein Thronfolger erschossen wurde.» Was fehlt dieser Antwort?",
      ["das genaue Datum", "die Unterscheidung von Anlass und Ursachen", "der Name des Attentäters", "die Zahl der Opfer"], 1,
      "Der Satz beschreibt den Anlass. Ohne Bündnissystem, Nationalismus, Wettrüsten und Imperialismus wäre daraus eine regionale Krise geblieben. Genau diese Unterscheidung wird bewertet.", { d: 2 })
  );

  q("hist-dictatorships")(
    tf("fun-dict-1", "Wer Stalinismus und Nationalsozialismus vergleicht, setzt sie damit gleich.", false,
      "Vergleichen heisst Gemeinsamkeiten und Unterschiede herausarbeiten. Herrschaftstechniken ähneln sich stark, die Ideologien und Verfolgungskriterien unterscheiden sich grundlegend. Beides gehört in eine gute Antwort.", { d: 3 })
  );

  /* ------------------------------ Geografie */
  q("geo-weather-climate")(
    mc("fun-geo-1", "Im Januar meldet ein Politiker: «Bei uns liegt ein halber Meter Schnee, so viel zur Klimaerwärmung.» Was ist der Denkfehler?",
      ["die Messung ist ungenau", "ein einzelnes Wetterereignis sagt nichts über ein Dreissigjahresmittel", "im Januar ist immer Schnee", "Schnee hat nichts mit Klima zu tun"], 1,
      "Wetter ist jetzt, Klima ist der statistische Durchschnitt über mindestens dreissig Jahre. Ein kalter Tag widerlegt einen Trend so wenig wie ein Regentag eine Dürre.", { d: 2 })
  );

  q("geo-usa-physical")(
    mc("fun-usa-1", "Warum gibt es in Europa praktisch keine Tornado Alley, in den USA aber schon?",
      ["Europa ist zu klein", "in Europa verlaufen die Gebirge west-östlich und trennen die Luftmassen",
       "Europa hat kein warmes Meer", "wegen der Golfströmung"], 1,
      "Alpen und Pyrenäen liegen quer und wirken als Barriere. In Nordamerika verlaufen Rockies und Appalachen nord-südlich, der Korridor dazwischen ist offen.", { d: 2 })
  );

  q("geo-demography")(
    mc("fun-dem-1", "Ein Land hat eine sehr schmale Basis in der Bevölkerungspyramide. Was sagt das über die Zeit in dreissig Jahren?",
      ["viele Erwerbstätige", "wenige Erwerbstätige und viele Rentner", "starkes Wachstum", "eine hohe Geburtenrate"], 1,
      "Die heutige Basis ist die künftige Erwerbsbevölkerung. Eine schmale Basis kündigt den Alterungsdruck an, der die AHV-Debatte antreibt.", { d: 2 })
  );

  /* ------------------------------ Deutsch */
  q("de-argumentation")(
    mc("fun-de-1", "«Hausaufgaben sind sinnlos, weil sie nichts bringen.» Welcher Fehler liegt vor?",
      ["ein Rechtschreibfehler", "die Begründung wiederholt nur die Behauptung", "der Satz ist zu kurz", "es fehlt die Gegenposition"], 1,
      "Ein Zirkelschluss. «Sinnlos» und «bringt nichts» sagen dasselbe. Es fehlt eine echte Begründung und ein Beleg.", { d: 2 }),
    mc("fun-de-2", "«Wenn wir Tempo 30 einführen, stehen bald alle Autos still und die Wirtschaft bricht zusammen.» Welcher Fehlschluss ist das?",
      ["Strohmann", "Dammbruch-Behauptung", "Angriff auf die Person", "falsche Alternative"], 1,
      "Eine Kettenreaktion wird behauptet, ohne die einzelnen Schritte zu belegen. Beliebt in Leserbriefen, und ein dankbares Analyseobjekt in der Prüfung.", { d: 3 })
  );

  q("de-duerrenmatt")(
    mc("fun-due-1", "Die Güllener kaufen neue gelbe Schuhe, bevor sie über Ills Schicksal entschieden haben. Warum ist dieses Detail so wirkungsvoll?",
      ["es zeigt ihren Modegeschmack", "es zeigt, dass die Entscheidung längst gefallen ist, bevor sie ausgesprochen wird",
       "es ist reine Dekoration", "es verweist auf Claires Reichtum"], 1,
      "Der Kredit kommt vor dem Beschluss. Dürrenmatt zeigt die Entscheidung an den Füssen, lange bevor sie jemand zugibt. Ein perfektes Beispiel für Textbeleg statt Behauptung.", { d: 3 })
  );

  /* ------------------------------ Englisch */
  q("en-vocabulary-grammar")(
    mc("fun-en-1", "Which sentence is correct?",
      ["I live here since 2019.", "I have lived here since 2019.", "I am living here since 2019.", "I lived here since 2019."], 1,
      "Since und for markieren eine Zeitspanne bis in die Gegenwart, also present perfect. Der erste Satz ist der klassische Fehler deutschsprachiger Lernender, weil das Deutsche hier nicht unterscheidet.", { d: 2 }),
    mc("fun-en-2", "A German speaker writes: «I become a sandwich.» What actually happened?",
      ["He ordered a sandwich.", "He said he is turning into a sandwich.", "He gave away a sandwich.", "Nothing, it is correct."], 1,
      "Ein falscher Freund: become heisst werden, nicht bekommen. Richtig wäre I get a sandwich. Genau solche Paare kosten in der Prüfung Punkte.", { d: 2 })
  );

  q("en-analysis")(
    mc("fun-ena-1", "Which sentence is analysis rather than summary?",
      ["The narrator describes his childhood home.", "The short, clipped sentences create a sense of unease.",
       "The story takes place in 1952.", "The protagonist is called Marta."], 1,
      "Nur der zweite Satz benennt eine Wirkung und ihre sprachliche Ursache. Die anderen drei geben Inhalt wieder. Achte auf Wirkungsverben wie create, suggest, emphasise.", { d: 2 })
  );

  M.funCount = M.allQuestions().filter(function (x) { return x.q.fun; }).length;
})();

/* Formel-Parameter ausführlich erklärt.
   Für jede Grösse: Zeichen, Name, Einheit, was sie bedeutet und was
   passiert, wenn sie sich ändert. Dazu eine Einheitenprobe, mit der
   sich jede Formel im Notfall selbst kontrollieren lässt. */
(function () {
  "use strict";
  var M = window.MNEMIKA;
  var byId = {};
  M.chapters.forEach(function (c) {
    (c.models || []).forEach(function (m) { if (m.id) byId[m.id] = m; });
  });

  /* P(id, params, unitCheck, rearrange)
     params: [zeichen, name, einheit, bedeutung, wirkung] */
  function P(id, params, unitCheck, rearrange) {
    var m = byId[id];
    if (!m) return;
    m.params = params.map(function (p) {
      return { sym: p[0], name: p[1], unit: p[2], means: p[3], effect: p[4] };
    });
    if (unitCheck) m.unitCheck = unitCheck;
    if (rearrange) m.rearrange = rearrange;
  }

  /* ---------------------------------------------- Mathematik */
  P("linear-isolation", [
    ["x", "gesuchte Zahl", "", "Der Wert, für den die Behauptung wahr wird.", "Es gibt genau eine Lösung, solange a nicht null ist."],
    ["a", "Faktor vor x", "", "Wie oft x genommen wird.", "Je grösser a, desto kleiner fällt x aus. Bei a = 0 gibt es keine oder unendlich viele Lösungen."],
    ["b", "konstanter Summand", "", "Verschiebung, die nichts mit x zu tun hat.", "b wandert unverändert auf die andere Seite, nur mit umgekehrtem Vorzeichen."],
    ["c", "Wert der rechten Seite", "", "Das Ziel, das erreicht werden soll.", "Wächst c um 1, wächst x um 1/a."],
  ], "Alle Grössen sind reine Zahlen. Eine Einheitenprobe entfällt, die Vorzeichenprobe ersetzt sie: Lösung einsetzen und beide Seiten vergleichen.",
     "x = (c − b) / a · a = c − b · b nach rechts: ax = c − b");

  P("quadratic-formula", [
    ["a", "Koeffizient von x²", "", "Bestimmt die Öffnung und Breite der Parabel.", "Bei a > 0 öffnet sie nach oben, bei a < 0 nach unten. Grosses |a| macht sie schmal."],
    ["b", "Koeffizient von x", "", "Verschiebt die Parabel seitlich.", "Der Scheitel liegt bei −b/(2a). Vorzeichen unbedingt mitnehmen."],
    ["c", "konstantes Glied", "", "Der y-Achsenabschnitt der Parabel.", "c verschiebt die ganze Parabel nach oben oder unten und kann so die Zahl der Nullstellen ändern."],
    ["D = b² − 4ac", "Diskriminante", "", "Der Ausdruck unter der Wurzel.", "D > 0 zwei Lösungen, D = 0 eine doppelte, D < 0 keine reelle."],
  ], "Alle Terme sind reine Zahlen. Kontrolle über den Satz von Vieta: x₁ · x₂ = c/a und x₁ + x₂ = −b/a.",
     "Aus ax² + bx + c = 0 wird nach Division durch a und quadratischer Ergänzung (x + b/2a)² = (b² − 4ac)/(4a²).");

  P("slope", [
    ["m", "Steigung", "", "Änderung von y pro einem Schritt in x.", "m = 2 heisst: ein Schritt nach rechts, zwei nach oben. Negatives m bedeutet fallend."],
    ["Δy", "Höhenunterschied", "", "y₂ − y₁ zwischen zwei Punkten.", "Verdoppelt sich Δy bei gleichem Δx, verdoppelt sich die Steigung."],
    ["Δx", "Breitenunterschied", "", "x₂ − x₁ zwischen zwei Punkten.", "Wird Δx null, ist die Gerade senkrecht und m nicht definiert."],
  ], "Im Sachzusammenhang trägt m immer eine Einheit: Meter pro Sekunde, Franken pro Stück, Grad pro Kilometer.",
     "m = Δy/Δx  ⇒  Δy = m · Δx  ⇒  y = m·x + b");

  P("exp-growth", [
    ["B(t)", "Bestand zur Zeit t", "je nach Sache", "Der Wert, den man nach t Schritten hat.", "Wächst bei b > 1 immer schneller, fällt bei b < 1 immer langsamer."],
    ["B₀", "Anfangsbestand", "je nach Sache", "Der Wert bei t = 0.", "Verdoppelt man B₀, verdoppelt sich jeder spätere Wert. Die Form der Kurve bleibt gleich."],
    ["b", "Wachstumsfaktor", "ohne Einheit", "Womit pro Zeitschritt multipliziert wird.", "b = 1,05 heisst plus 5 Prozent, b = 0,8 heisst minus 20 Prozent. b = 1 bedeutet Stillstand."],
    ["t", "Anzahl Zeitschritte", "Jahre, Tage, …", "Wie oft der Faktor gewirkt hat.", "Steht im Exponenten, deshalb wirkt jede Verlängerung der Zeit sehr stark."],
  ], "Probe bei t = 0: b⁰ = 1, also muss B(0) = B₀ herauskommen. Stimmt das nicht, ist das Modell falsch aufgestellt.",
     "B(t) = B₀·bᵗ  ⇒  b = (B(t)/B₀)^(1/t)  ⇒  t = ln(B(t)/B₀) / ln(b)");

  P("difference-quotient", [
    ["f'(x₀)", "Ableitung an der Stelle x₀", "Einheit von y je Einheit von x", "Die Steigung der Tangente dort.", "Grosses f' bedeutet steiler Anstieg, negatives bedeutet Gefälle, null bedeutet waagrecht."],
    ["h", "Abstand der zweiten Stelle", "Einheit von x", "Wie weit der zweite Punkt entfernt liegt.", "Je kleiner h, desto besser passt die Sekante an die Kurve. h = 0 ist verboten, deshalb der Grenzwert."],
    ["f(x₀+h) − f(x₀)", "Höhenunterschied", "Einheit von y", "Wie stark sich der Funktionswert ändert.", "Dieser Unterschied verschwindet mit h. Genau deshalb bleibt der Quotient endlich."],
  ], "Die Ableitung trägt immer die Einheit y pro x. Bei Weg in Metern und Zeit in Sekunden ist f' eine Geschwindigkeit in m/s.",
     "Erst kürzen, dann h → 0. Wer zuerst einsetzt, landet bei 0/0.");

  P("power-rule", [
    ["n", "Exponent", "", "Wie oft x als Faktor auftritt.", "n wandert als Faktor nach vorne und sinkt um eins. Bei n = 0 ist die Ableitung null."],
    ["x^(n−1)", "neue Potenz", "", "Der verbleibende Potenzterm.", "Aus x³ wird 3x², aus x wird 1, aus einer Konstanten wird 0."],
  ], "Probe rückwärts: Leitest du dein Ergebnis nochmals auf, musst du wieder beim Ausgangsterm landen, wenn du integrierst.",
     "(xⁿ)' = n·x^(n−1). Für n = −1 ergibt das (1/x)' = −1/x².");

  P("chain-rule", [
    ["f'(g(x))", "äussere Ableitung", "", "Die äussere Funktion abgeleitet, die innere bleibt als Block stehen.", "Hier wird nicht x eingesetzt, sondern die ganze innere Funktion."],
    ["g'(x)", "innere Ableitung", "", "Wie schnell sich der Klammerinhalt selbst ändert.", "Dieser Faktor wird am häufigsten vergessen. Bei (3x+1)⁵ ist er 3, das Ergebnis also 15(3x+1)⁴."],
  ], "Kontrolle: Bei einer inneren Funktion der Form ax + b ist die innere Ableitung immer a, also eine Zahl.",
     "(f∘g)' = f'(g(x)) · g'(x). Bei mehrfacher Verschachtelung wird jede Ebene multipliziert.");

  /* ---------------------------------------------- Physik */
  P("uniform-motion", [
    ["v", "Geschwindigkeit", "m/s", "Wie viel Weg pro Zeiteinheit zurückgelegt wird.", "Doppelte Geschwindigkeit bedeutet halbe Zeit für dieselbe Strecke."],
    ["s", "Weg", "m", "Die zurückgelegte Strecke.", "Bei konstantem v wächst s gleichmässig mit der Zeit, im s-t-Diagramm eine Gerade."],
    ["t", "Zeit", "s", "Die verstrichene Dauer.", "Verdoppelt sich t bei gleichem v, verdoppelt sich der Weg."],
  ], "m/s mal s ergibt m. Die Einheiten gehen auf. Umrechnung: km/h geteilt durch 3,6 ergibt m/s.",
     "v = s/t  ⇒  s = v·t  ⇒  t = s/v");

  P("acceleration", [
    ["a", "Beschleunigung", "m/s²", "Wie stark sich die Geschwindigkeit pro Sekunde ändert.", "a = 3 m/s² heisst: jede Sekunde kommen 3 m/s dazu. Negatives a bedeutet Bremsen."],
    ["Δv", "Geschwindigkeitsänderung", "m/s", "Differenz zwischen End- und Anfangsgeschwindigkeit.", "Bei gleichem Δv und halber Zeit verdoppelt sich die Beschleunigung."],
    ["Δt", "Zeitspanne", "s", "Wie lange die Änderung dauert.", "Je kürzer die Zeit für dieselbe Geschwindigkeitsänderung, desto heftiger die Beschleunigung."],
    ["s", "Weg beim Beschleunigen", "m", "s = ½·a·t² aus der Ruhe.", "Der Weg wächst quadratisch: doppelte Zeit bedeutet vierfache Strecke."],
  ], "m/s geteilt durch s ergibt m/s². Bei ½at²: m/s² mal s² ergibt m. Stimmt.",
     "a = Δv/Δt  ⇒  Δv = a·Δt  ⇒  v = v₀ + a·t  und  s = v₀t + ½at²");

  P("free-fall", [
    ["g", "Fallbeschleunigung", "m/s²", "Konstante von rund 9,81 m/s² an der Erdoberfläche.", "Auf dem Mond nur etwa 1,6 m/s², deshalb fällt dort alles langsamer, aber immer noch massenunabhängig."],
    ["h", "Fallhöhe", "m", "Die durchfallene Strecke.", "Wächst quadratisch mit der Zeit. Nach doppelter Zeit ist die Fallstrecke viermal so gross."],
    ["t", "Fallzeit", "s", "Wie lange der Körper fällt.", "Aus h = ½gt² folgt t = √(2h/g). Vierfache Höhe bedeutet nur doppelte Zeit."],
    ["v", "Aufprallgeschwindigkeit", "m/s", "Das Tempo beim Auftreffen.", "v = √(2gh): vierfache Höhe bedeutet doppelte Geschwindigkeit, aber vierfache Energie."],
  ], "√(m/s² · m) = √(m²/s²) = m/s. Die Wurzelformel liefert also korrekt eine Geschwindigkeit.",
     "h = ½gt²  ⇒  t = √(2h/g)  ·  v = g·t  ⇒  v = √(2gh)");

  P("newton2", [
    ["F", "resultierende Kraft", "N", "Die Summe aller Kräfte, nicht eine einzelne.", "Heben sich die Kräfte auf, ist F null und es wird nicht beschleunigt, auch wenn stark gezogen wird."],
    ["m", "Masse", "kg", "Mass für die Trägheit des Körpers.", "Doppelte Masse bei gleicher Kraft bedeutet halbe Beschleunigung."],
    ["a", "Beschleunigung", "m/s²", "Die Wirkung der Kraft.", "Doppelte Kraft bei gleicher Masse bedeutet doppelte Beschleunigung."],
  ], "1 N = 1 kg·m/s². Das ist die Definition des Newton und zugleich die Einheitenprobe der Formel.",
     "F = m·a  ⇒  a = F/m  ⇒  m = F/a");

  P("weight", [
    ["F_G", "Gewichtskraft", "N", "Die Kraft, mit der ein Himmelskörper zieht.", "Auf dem Mond rund ein Sechstel, weil g kleiner ist. Die Masse bleibt gleich."],
    ["m", "Masse", "kg", "Die Stoffmenge des Körpers, überall gleich.", "Ändert sich nie durch den Ort, nur durch Zu- oder Abnahme von Material."],
    ["g", "Ortsfaktor", "N/kg oder m/s²", "Wie stark der Himmelskörper zieht.", "Erde 9,81, Mond 1,6, Jupiter rund 24,8."],
  ], "kg mal N/kg ergibt N. Ein Mensch mit 70 kg hat rund 687 N Gewichtskraft.",
     "F_G = m·g  ⇒  m = F_G/g  ⇒  g = F_G/m");

  P("friction", [
    ["F_R", "Reibungskraft", "N", "Die bremsende Kraft zwischen zwei Flächen.", "Wächst proportional zur Normalkraft, nicht zur Fläche."],
    ["μ", "Reibungszahl", "ohne Einheit", "Materialpaarung, etwa Gummi auf Asphalt.", "Trocken rund 0,8, nass deutlich weniger. Deshalb verlängert Nässe den Bremsweg stark."],
    ["F_N", "Normalkraft", "N", "Der Druck senkrecht auf die Unterlage.", "Auf waagrechter Ebene gleich der Gewichtskraft, auf schiefer Ebene nur m·g·cos α."],
  ], "μ hat keine Einheit, also liefert μ·F_N wieder Newton. Ein Ergebnis in kg wäre ein sicherer Fehler.",
     "F_R = μ·F_N  ⇒  μ = F_R/F_N. Auf der schiefen Ebene rutscht es, sobald tan α > μ.");

  P("work", [
    ["W", "Arbeit", "J", "Übertragene Energie bei einer Verschiebung.", "Ohne Weg keine Arbeit, egal wie gross die Kraft ist."],
    ["F", "Kraft in Wegrichtung", "N", "Nur der Anteil parallel zum Weg zählt.", "Steht die Kraft senkrecht zum Weg, ist die Arbeit null. Deshalb verrichtet Tragen keine Hubarbeit."],
    ["s", "Weg", "m", "Die zurückgelegte Strecke unter Krafteinwirkung.", "Doppelter Weg bei gleicher Kraft bedeutet doppelte Arbeit."],
  ], "1 J = 1 N·m. Hebt man 1 kg um 1 m, sind das rund 9,81 J.",
     "W = F·s  ⇒  F = W/s  ⇒  s = W/F. Bei Hubarbeit: W = m·g·h.");

  P("power", [
    ["P", "Leistung", "W", "Arbeit pro Zeit, also das Tempo der Energieübertragung.", "Dieselbe Arbeit in halber Zeit bedeutet doppelte Leistung."],
    ["W", "Arbeit", "J", "Die insgesamt übertragene Energie.", "Unabhängig davon, wie schnell sie übertragen wurde."],
    ["t", "Zeit", "s", "Die benötigte Dauer.", "Je kürzer die Zeit, desto höher die verlangte Leistung."],
  ], "1 W = 1 J/s. Ein Mensch leistet dauerhaft rund 100 W, ein Kleinwagen etwa 70'000 W.",
     "P = W/t  ⇒  W = P·t  ⇒  mit W = F·s folgt P = F·v");

  P("kinetic-energy", [
    ["E_kin", "Bewegungsenergie", "J", "Die Energie, die in der Bewegung steckt.", "Steigt quadratisch mit v: doppeltes Tempo bedeutet vierfache Energie und vierfachen Bremsweg."],
    ["m", "Masse", "kg", "Wie viel bewegt wird.", "Doppelte Masse bedeutet doppelte Energie, also nur linear."],
    ["v", "Geschwindigkeit", "m/s", "Wie schnell es sich bewegt.", "Steht im Quadrat und ist deshalb die mit Abstand wichtigste Grösse."],
  ], "kg · (m/s)² = kg·m²/s² = N·m = J. Die Einheiten gehen auf.",
     "E_kin = ½mv²  ⇒  v = √(2E/m). Bei freiem Fall gilt ½mv² = mgh, also v = √(2gh).");

  P("potential-energy", [
    ["E_pot", "Lageenergie", "J", "Energie durch die Höhe über einem Bezugsniveau.", "Nur Höhenunterschiede zählen. Das Nullniveau darfst du frei wählen."],
    ["m", "Masse", "kg", "Wie viel gehoben wird.", "Doppelte Masse bedeutet doppelte Energie."],
    ["g", "Ortsfaktor", "m/s²", "Stärke des Schwerefelds.", "Auf dem Mond ist dieselbe Hebung energetisch billiger."],
    ["h", "Höhe", "m", "Der Höhenunterschied.", "Doppelte Höhe bedeutet doppelte Energie, also linear, anders als bei E_kin."],
  ], "kg · m/s² · m = kg·m²/s² = J. Passt zur kinetischen Energie, deshalb sind sie verrechenbar.",
     "E_pot = m·g·h  ⇒  h = E/(m·g). Umwandlung im freien Fall: m·g·h = ½·m·v².");

  P("pressure", [
    ["p", "Druck", "Pa", "Kraft verteilt auf eine Fläche.", "Bei gleicher Kraft auf halber Fläche verdoppelt sich der Druck."],
    ["F", "Kraft senkrecht zur Fläche", "N", "Nur der senkrechte Anteil erzeugt Druck.", "Doppelte Kraft auf gleicher Fläche bedeutet doppelten Druck."],
    ["A", "Fläche", "m²", "Die belastete Fläche.", "Deshalb dringt ein Nagel ein und ein Brett nicht: winzige Fläche, riesiger Druck."],
  ], "1 Pa = 1 N/m². Luftdruck sind rund 100'000 Pa, also 1 bar oder 1000 hPa.",
     "p = F/A  ⇒  F = p·A  ⇒  A = F/p. Hydraulik: F₁/A₁ = F₂/A₂.");

  P("hydrostatic", [
    ["p", "Schweredruck", "Pa", "Druck durch die Flüssigkeitssäule.", "Nimmt linear mit der Tiefe zu, unabhängig von der Gefässform."],
    ["ρ", "Dichte", "kg/m³", "Masse pro Volumen der Flüssigkeit.", "Wasser 1000, Quecksilber 13'600. Deshalb sind Quecksilbersäulen so kurz."],
    ["g", "Ortsfaktor", "m/s²", "Stärke des Schwerefelds.", "Ohne Schwerkraft kein Schweredruck, deshalb schweben Flüssigkeiten im Weltall als Kugeln."],
    ["h", "Tiefe", "m", "Abstand unter der Oberfläche.", "Pro 10 m Wassertiefe kommt rund 1 bar dazu."],
  ], "kg/m³ · m/s² · m = kg/(m·s²) = N/m² = Pa. Die Einheiten bestätigen die Formel.",
     "p = ρ·g·h  ⇒  h = p/(ρ·g). Gesamtdruck beim Tauchen: Luftdruck plus Schweredruck.");

  P("ohm", [
    ["U", "Spannung", "V", "Der Antrieb, Energie pro Ladung.", "Doppelte Spannung bei gleichem Widerstand bedeutet doppelten Strom."],
    ["R", "Widerstand", "Ω", "Wie stark der Leiter den Strom bremst.", "Doppelter Widerstand bei gleicher Spannung bedeutet halben Strom."],
    ["I", "Stromstärke", "A", "Wie viel Ladung pro Sekunde fliesst.", "Der Strom ist das Ergebnis, nicht die Ursache. Er stellt sich aus U und R ein."],
  ], "1 V = 1 Ω·A. Ein Handy-Ladegerät mit 5 V und 2 A sieht einen Widerstand von 2,5 Ω.",
     "U = R·I  ⇒  I = U/R  ⇒  R = U/I");

  P("electric-power", [
    ["P", "elektrische Leistung", "W", "Energieumsatz pro Sekunde.", "Doppelte Spannung bei gleichem Widerstand bedeutet vierfache Leistung, weil P = U²/R."],
    ["U", "Spannung", "V", "Der anliegende Antrieb.", "Steht in P = U²/R im Quadrat, wirkt also besonders stark."],
    ["I", "Stromstärke", "A", "Der fliessende Strom.", "Bei bekanntem R gilt auch P = R·I², ebenfalls quadratisch."],
  ], "V · A = W. Und 1 kWh = 1000 W · 3600 s = 3,6 Millionen Joule.",
     "P = U·I  ⇒  mit U = R·I folgt P = R·I² und P = U²/R. Energie: E = P·t.");

  P("series", [
    ["R_ges", "Gesamtwiderstand", "Ω", "Der Ersatzwiderstand der ganzen Reihe.", "Immer grösser als der grösste Einzelwiderstand."],
    ["R₁, R₂", "Einzelwiderstände", "Ω", "Die hintereinander liegenden Bauteile.", "Jedes zusätzliche Bauteil erhöht den Gesamtwiderstand und senkt den Strom."],
    ["I", "Strom", "A", "In der Reihe überall gleich.", "Es gibt nur einen Weg, also fliesst überall derselbe Strom."],
  ], "Ohm plus Ohm ergibt Ohm. Kontrolle: Die Teilspannungen müssen zusammen die Quellenspannung ergeben.",
     "R_ges = R₁ + R₂ + … · Spannungsteilung: U₁/U₂ = R₁/R₂");

  P("parallel", [
    ["R_ges", "Gesamtwiderstand", "Ω", "Ersatzwiderstand aller Zweige.", "Immer kleiner als der kleinste Einzelwiderstand, weil jeder Zweig zusätzlichen Strom zulässt."],
    ["R₁, R₂", "Einzelwiderstände", "Ω", "Die nebeneinander liegenden Bauteile.", "Zwei gleiche Widerstände parallel ergeben genau die Hälfte."],
    ["U", "Spannung", "V", "An allen Zweigen gleich.", "Deshalb funktionieren Haushaltsgeräte unabhängig voneinander an 230 V."],
  ], "Kehrwerte addieren, dann wieder umkehren. Für zwei Widerstände kurz: R = (R₁·R₂)/(R₁+R₂).",
     "1/R_ges = 1/R₁ + 1/R₂ + … · Stromteilung: I₁/I₂ = R₂/R₁");

  P("sensible-heat", [
    ["Q", "Wärmemenge", "J", "Die zugeführte oder abgegebene Energie.", "Doppelte Temperaturdifferenz bedeutet doppelte Energie."],
    ["c", "spezifische Wärmekapazität", "J/(kg·K)", "Energie je Kilogramm und Kelvin.", "Wasser 4180, Eisen 450. Deshalb ist die Pfanne sofort heiss und das Wasser nicht."],
    ["m", "Masse", "kg", "Wie viel Stoff erwärmt wird.", "Doppelte Masse braucht doppelte Energie für dieselbe Erwärmung."],
    ["ΔT", "Temperaturdifferenz", "K", "Um wie viel es wärmer wird.", "In Kelvin und Grad Celsius zahlenmässig identisch, weil es eine Differenz ist."],
  ], "J/(kg·K) · kg · K = J. Alles kürzt sich bis auf Joule.",
     "Q = c·m·ΔT  ⇒  ΔT = Q/(c·m). Beim Phasenübergang dagegen Q = q·m, ohne ΔT.");

  P("lens", [
    ["f", "Brennweite", "m", "Abstand vom Linsenmittelpunkt zum Brennpunkt.", "Kleine Brennweite bedeutet starke Brechung. Bei Zerstreuungslinsen ist f negativ."],
    ["g", "Gegenstandsweite", "m", "Abstand des Objekts zur Linse.", "Rückt der Gegenstand näher als f, entsteht ein virtuelles, vergrössertes Bild wie bei der Lupe."],
    ["b", "Bildweite", "m", "Abstand des Bildes zur Linse.", "Je weiter der Gegenstand weg ist, desto näher rückt das Bild an den Brennpunkt."],
  ], "Alle drei in derselben Längeneinheit, dann gehen die Kehrwerte auf. Brechkraft: 1/f in Dioptrien bei f in Metern.",
     "1/f = 1/g + 1/b  ⇒  b = (f·g)/(g − f) · Abbildungsmassstab: B/G = b/g");

  /* ---------------------------------------------- Chemie */
  P("mole", [
    ["n", "Stoffmenge", "mol", "Eine Stückzahl, wie ein Dutzend, nur sehr gross.", "Doppelte Masse desselben Stoffs bedeutet doppelte Stoffmenge."],
    ["m", "Masse", "g", "Die gewogene Masse der Probe.", "Direkt messbar, deshalb meist der Ausgangspunkt jeder Rechnung."],
    ["M", "molare Masse", "g/mol", "Aus dem Periodensystem ablesbar.", "Schwere Atome bedeuten grosses M, also weniger Teilchen bei gleicher Masse."],
  ], "g geteilt durch g/mol ergibt mol. Kontrolle: 18 g Wasser sind genau 1 mol.",
     "n = m/M  ⇒  m = n·M  ⇒  M = m/n. Teilchenzahl: N = n · 6,022·10²³.");

  P("concentration", [
    ["c", "Konzentration", "mol/l", "Wie dicht der Stoff gelöst ist.", "Unabhängig davon, wie viel Lösung man entnimmt. 50 ml einer 2-molaren Lösung sind weiterhin 2-molar."],
    ["n", "Stoffmenge", "mol", "Wie viel Stoff insgesamt gelöst ist.", "Doppelte Stoffmenge im selben Volumen bedeutet doppelte Konzentration."],
    ["V", "Volumen", "l", "Das Volumen der Lösung, nicht des Lösungsmittels.", "Verdoppelt man das Volumen, halbiert sich die Konzentration."],
  ], "mol geteilt durch l ergibt mol/l. Achtung: Milliliter zuerst in Liter umrechnen, sonst ist das Ergebnis um Faktor 1000 falsch.",
     "c = n/V  ⇒  n = c·V. Verdünnen: c₁·V₁ = c₂·V₂.");

  P("ph", [
    ["pH", "pH-Wert", "ohne Einheit", "Negativer Zehnerlogarithmus der Oxoniumkonzentration.", "Eine Stufe weniger bedeutet zehnmal saurer. Von pH 5 auf 3 ist es hundertmal saurer."],
    ["c(H₃O⁺)", "Oxoniumkonzentration", "mol/l", "Wie viele freie Protonen in der Lösung sind.", "10⁻³ mol/l ergibt pH 3, 10⁻⁷ ergibt pH 7 und damit neutral."],
  ], "Der Logarithmus macht die Zahl einheitenlos. Kontrolle: pH 7 entspricht 10⁻⁷ mol/l, das ist reines Wasser.",
     "pH = −log c(H₃O⁺)  ⇒  c(H₃O⁺) = 10^(−pH). Für Laugen: pH + pOH = 14.");

  /* ---------------------------------------------- Biologie und Geografie */
  P("population-change", [
    ["ΔN", "Bevölkerungsänderung", "Personen", "Zunahme oder Abnahme im Zeitraum.", "Kann trotz vieler Geburten negativ sein, wenn Abwanderung überwiegt."],
    ["Geburten − Sterbefälle", "natürliche Bilanz", "Personen", "Der Beitrag aus Geburt und Tod.", "In der Schweiz seit Jahren nahe null."],
    ["Zu- − Abwanderung", "Wanderungsbilanz", "Personen", "Der Beitrag aus Migration.", "Trägt in der Schweiz praktisch das gesamte Wachstum."],
  ], "Alle Grössen sind Personenzahlen im selben Zeitraum. Getrennt ausweisen, sonst ist die Aussage unvollständig.",
     "ΔN = (Geburten − Sterbefälle) + (Zuwanderung − Abwanderung)");

  P("population-balance", [
    ["ΔN", "Bevölkerungsänderung", "Personen", "Gesamtveränderung im Zeitraum.", "Setzt sich immer aus zwei unabhängigen Anteilen zusammen."],
    ["natürliche Bilanz", "Geburten minus Sterbefälle", "Personen", "Der demografische Anteil.", "Sinkt die Geburtenrate unter die Sterberate, wird dieser Teil negativ."],
    ["Wanderungsbilanz", "Zu- minus Abwanderung", "Personen", "Der Migrationsanteil.", "Kann eine negative natürliche Bilanz vollständig ausgleichen."],
  ], "Beide Anteile in Personen pro Jahr. Für Vergleiche zwischen Ländern auf 1000 Einwohner umrechnen.",
     "ΔN = natürliche Bilanz + Wanderungsbilanz");

  var n = 0;
  Object.keys(byId).forEach(function (k) { if (byId[k].params) n += 1; });
  M.paramCount = n;
})();

/* Zweite Runde Parametertabellen. */
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

  P("efficiency", [
    ["η", "Wirkungsgrad", "ohne Einheit oder %", "Anteil der zugeführten Energie, der als Nutzen ankommt.", "Immer kleiner als 1. Ein Wert über 100 Prozent ist ausnahmslos ein Rechenfehler."],
    ["E_nutz", "Nutzenergie", "J", "Was tatsächlich den Zweck erfüllt.", "Steigt der Nutzen bei gleichem Aufwand, steigt der Wirkungsgrad."],
    ["E_auf", "aufgewendete Energie", "J", "Was insgesamt hineingesteckt wurde.", "Der Rest wird zu Wärme. Bei der Glühlampe sind das rund 95 Prozent."],
  ], "Joule geteilt durch Joule ergibt eine reine Zahl. Mal 100 gerechnet ergibt Prozent.",
     "η = E_nutz / E_auf  ⇒  E_nutz = η · E_auf. Bei mehreren Stufen multiplizieren sich die Wirkungsgrade.");

  P("torque", [
    ["M", "Drehmoment", "N·m", "Das Mass für die Drehwirkung einer Kraft.", "Doppelter Hebelarm bei gleicher Kraft bedeutet doppeltes Drehmoment."],
    ["F", "Kraft", "N", "Die angreifende Kraft.", "Nur der Anteil senkrecht zum Hebelarm zählt. Schräg angreifende Kräfte wirken schwächer."],
    ["r", "Hebelarm", "m", "Senkrechter Abstand von der Drehachse zur Wirkungslinie.", "Deshalb öffnet die Tür am Griff leicht und am Scharnier fast gar nicht."],
  ], "N mal m ergibt N·m. Zahlenmässig gleich dem Joule, inhaltlich aber etwas anderes: Drehwirkung, nicht Energie.",
     "M = F · r  ⇒  F = M/r. Gleichgewicht: Summe der Drehmomente links gleich Summe rechts.");

  P("buoyancy", [
    ["F_A", "Auftriebskraft", "N", "Die Kraft nach oben auf den eingetauchten Körper.", "Hängt nur vom verdrängten Volumen ab, nicht vom Material des Körpers."],
    ["ρ_fl", "Dichte der Flüssigkeit", "kg/m³", "Wie schwer die verdrängte Flüssigkeit ist.", "Im Salzwasser grösser als im Süsswasser, deshalb schwimmt man im Meer leichter."],
    ["V", "verdrängtes Volumen", "m³", "Der eingetauchte Teil des Körpers.", "Taucht nur die Hälfte ein, ist auch der Auftrieb halb so gross."],
    ["g", "Ortsfaktor", "m/s²", "Stärke des Schwerefelds.", "Ohne Schwerkraft kein Auftrieb, denn dann gibt es keinen Druckunterschied."],
  ], "kg/m³ · m³ · m/s² = kg·m/s² = N. Passt.",
     "F_A = ρ_fl · V · g. Schwimmen, wenn F_A = F_G, also wenn die mittlere Körperdichte kleiner ist als ρ_fl.");

  P("latent-heat", [
    ["Q", "Wärmemenge", "J", "Energie für den Phasenübergang.", "Wird vollständig in das Lösen der Bindungen investiert, die Temperatur bleibt konstant."],
    ["q", "spezifische Umwandlungswärme", "J/kg", "Energie je Kilogramm für Schmelzen oder Verdampfen.", "Wasser: 334 kJ/kg zum Schmelzen, 2256 kJ/kg zum Verdampfen, also fast siebenmal mehr."],
    ["m", "Masse", "kg", "Wie viel Stoff umgewandelt wird.", "Doppelte Masse bedeutet doppelte Energie, ganz ohne Temperaturänderung."],
  ], "J/kg mal kg ergibt J. Achtung: Hier kommt kein ΔT vor, das ist der Unterschied zu Q = c·m·ΔT.",
     "Q = q · m. Vollständige Aufgaben rechnet man in Etappen: erwärmen, umwandeln, erwärmen, umwandeln.");

  P("current", [
    ["I", "Stromstärke", "A", "Wie viel Ladung pro Sekunde durch den Querschnitt fliesst.", "Doppelte Ladung in derselben Zeit bedeutet doppelten Strom."],
    ["Q", "Ladung", "C", "Die transportierte elektrische Ladungsmenge.", "1 C entspricht rund 6,24 Trillionen Elementarladungen."],
    ["t", "Zeit", "s", "Die betrachtete Dauer.", "Dieselbe Ladung über längere Zeit bedeutet kleineren Strom."],
  ], "1 A = 1 C/s. Eine Sicherung mit 10 A lässt also 10 Coulomb pro Sekunde durch.",
     "I = Q/t  ⇒  Q = I·t. Für die Energie: W = U·Q = U·I·t.");

  P("snell", [
    ["α", "Einfallswinkel", "Grad", "Winkel zwischen einfallendem Strahl und dem Lot.", "Immer zum Lot gemessen, nie zur Oberfläche. Das ist die häufigste Fehlerquelle."],
    ["β", "Brechungswinkel", "Grad", "Winkel des gebrochenen Strahls zum Lot.", "Ins dichtere Medium wird zum Lot hin gebrochen, β wird kleiner als α."],
    ["n", "Brechzahl", "ohne Einheit", "Wie stark ein Medium das Licht bremst.", "Luft rund 1,0, Wasser 1,33, Glas etwa 1,5. Grösseres n bedeutet stärkere Brechung."],
  ], "Die Brechzahl ist ein Verhältnis zweier Geschwindigkeiten und deshalb einheitenlos. Der Sinus ebenfalls.",
     "n₁·sin α = n₂·sin β. Totalreflexion ab sin α_grenz = n₂/n₁, nur beim Übergang ins dünnere Medium.");

  P("dilution", [
    ["c₁, c₂", "Konzentrationen vorher und nachher", "mol/l", "Wie dicht der Stoff jeweils gelöst ist.", "Verdünnen senkt die Konzentration, die Stoffmenge bleibt unverändert."],
    ["V₁, V₂", "Volumina vorher und nachher", "l", "Das Lösungsvolumen vor und nach dem Verdünnen.", "Doppeltes Volumen bedeutet halbe Konzentration."],
  ], "mol/l mal l ergibt mol auf beiden Seiten. Genau das ist die Aussage: die Stoffmenge bleibt gleich.",
     "c₁·V₁ = c₂·V₂  ⇒  V₂ = c₁·V₁/c₂. Zugegebenes Volumen: V₂ − V₁.");

  P("reaction-enthalpy", [
    ["ΔH", "Reaktionsenthalpie", "kJ/mol", "Energiebilanz der Reaktion.", "Negativ bedeutet exotherm, die Umgebung erwärmt sich. Positiv bedeutet endotherm."],
    ["E(Edukte)", "Energie der Ausgangsstoffe", "kJ/mol", "Wie viel Energie in den alten Bindungen steckt.", "Liegen die Edukte hoch, ist der Weg nach unten und damit exotherm wahrscheinlicher."],
    ["E(Produkte)", "Energie der Produkte", "kJ/mol", "Wie viel Energie in den neuen Bindungen steckt.", "Je tiefer die Produkte liegen, desto mehr Energie wird frei."],
  ], "kJ/mol auf beiden Seiten. Kontrolle im Diagramm: Produkte tiefer bedeutet ΔH negativ.",
     "ΔH = E(Produkte) − E(Edukte). Der Katalysator verändert nur die Aktivierungsenergie, nie ΔH.");

  P("base-pairing", [
    ["A ↔ T", "Adenin und Thymin", "2 Wasserstoffbrücken", "Das schwächere der beiden Paare.", "AT-reiche Abschnitte lassen sich leichter auftrennen, dort beginnt die Replikation."],
    ["G ↔ C", "Guanin und Cytosin", "3 Wasserstoffbrücken", "Das stärkere Paar.", "GC-reiche DNA ist hitzestabiler. Das nutzt man in der Labortechnik."],
    ["A ↔ U", "Adenin und Uracil", "in der RNA", "In der RNA steht Uracil an der Stelle von Thymin.", "Deshalb wird beim Abschreiben aus A ein U, nicht ein T."],
  ], "Die Paarung ist nicht Konvention, sondern Geometrie: Immer paart eine grosse mit einer kleinen Base, sonst passt der Abstand der Stränge nicht.",
     "Aus einem Strang folgt der andere eindeutig. Genau das macht die exakte Verdopplung möglich.");

  P("photosynthesis", [
    ["6 CO₂", "Kohlenstoffdioxid", "aus der Luft", "Liefert den Kohlenstoff für den Zucker.", "Bei wenig CO₂ wird es zum begrenzenden Faktor, die Photosyntheserate sinkt."],
    ["6 H₂O", "Wasser", "aus dem Boden", "Wird gespalten und liefert den Sauerstoff.", "Bei Trockenheit schliesst die Pflanze die Spaltöffnungen und die Photosynthese stockt."],
    ["Lichtenergie", "Sonnenlicht", "", "Treibt die Wasserspaltung an.", "Mehr Licht steigert die Rate nur bis zur Sättigung, danach begrenzen andere Faktoren."],
    ["C₆H₁₂O₆ + 6 O₂", "Glucose und Sauerstoff", "", "Die Produkte, Zucker als Energiespeicher.", "Der Sauerstoff stammt aus dem Wasser, nicht aus dem CO₂."],
  ], "Kontrolle über die Atombilanz: links 6 C, 18 O, 12 H, rechts ebenso. Wenn es nicht aufgeht, fehlt ein Koeffizient.",
     "6 CO₂ + 6 H₂O + Licht → C₆H₁₂O₆ + 6 O₂. Die Zellatmung ist bilanzmässig die Umkehrung, aber nicht derselbe Weg.");
})();

/* Begründungen für jeden Herleitungsschritt.
   Bisher zeigten 323 Schritte nur die Umformung. Ein Schritt ohne
   Begründung ist kein Lehrtext, sondern eine Anweisung. Hier steht
   für jeden einzelnen Schritt, warum er erlaubt und nötig ist. */
(function () {
  "use strict";
  var M = window.MNEMIKA;
  var byId = {};
  M.chapters.forEach(function (c) { (c.models || []).forEach(function (m) { if (m.id) byId[m.id] = m; }); });
  var filled = 0;
  function W(id, whys) {
    var m = byId[id];
    if (!m || !m.deriv) return;
    whys.forEach(function (w, i) {
      if (m.deriv[i] && !m.deriv[i][2] && w) { m.deriv[i][2] = w; filled += 1; }
    });
  }

  /* ---------------- Mathematik ---------------- */
  W("stationary", [
    "Die Ableitung ist die Steigung. Ohne sie lässt sich über Hoch- und Tiefpunkte nichts sagen.",
    "An einem Extremum verläuft die Tangente waagrecht, also muss die Steigung dort null sein.",
    "Waagrecht allein genügt nicht: bei x³ ist die Steigung in null ebenfalls null, ohne Extremum. Erst der Vorzeichenwechsel entscheidet.",
    "Gefragt ist meist der Punkt, nicht nur die Stelle. Der y-Wert folgt aus der Ausgangsfunktion, nicht aus der Ableitung.",
    "Auf einem geschlossenen Intervall kann das Maximum am Rand liegen, wo die Ableitung nicht null ist. Dieser Schritt wird am häufigsten vergessen.",
  ]);
  W("second-derivative", [
    "Der Test gilt nur an Stellen mit waagrechter Tangente. Anderswo sagt f″ nichts über Extrema.",
    "f″ misst, wie sich die Steigung ändert, also die Krümmung. Genau die unterscheidet Hoch- von Tiefpunkt.",
    "Positive Krümmung heisst nach oben offen wie eine Schale, also Tiefpunkt. Negative Krümmung umgekehrt.",
    "Bei f″ = 0 ist die Krümmung im Punkt neutral, der Test versagt. Dann muss das Vorzeichen von f′ links und rechts geprüft werden.",
  ]);
  W("tangent", [
    "Die Tangente berührt den Graphen, also müssen beide im Berührpunkt denselben y-Wert haben.",
    "Die Steigung der Tangente ist genau die Ableitung an dieser Stelle. Das ist die Definition der Ableitung.",
    "Die Punkt-Steigungs-Form ist die kürzeste Geradengleichung, wenn ein Punkt und die Steigung bekannt sind.",
    "Nach y aufgelöst entsteht die gewohnte Form. Kontrolle: x = x₀ einsetzen muss f(x₀) ergeben.",
  ]);
  W("antiderivative", [
    "Integrieren ist definiert als Umkehrung des Ableitens. Deshalb liest man jede Ableitungsregel rückwärts.",
    "Beim Ableiten verschwindet jede Konstante. Rückwärts kann sie deshalb jeden Wert gehabt haben.",
    "Die Probe ist bei Integralen immer möglich und kostet Sekunden. Ableiten muss den Integranden ergeben.",
  ]);
  W("power-integral", [
    "Beim Ableiten sinkt der Exponent um eins. Rückwärts muss er also steigen.",
    "Beim Ableiten entsteht der alte Exponent als Faktor. Damit er sich weghebt, wird durch den neuen geteilt.",
    "Unendlich viele Stammfunktionen unterscheiden sich nur um eine Konstante, deshalb gehört sie dazu.",
    "n = −1 ist ausgeschlossen, weil dann durch null geteilt würde. Dort ist die Stammfunktion der Logarithmus.",
  ]);
  W("fundamental-theorem", [
    "Ohne Stammfunktion bleibt nur die mühsame Rechteckrechnung. Sie ist die Abkürzung.",
    "Der Wert an der oberen Grenze steht für die gesamte aufsummierte Fläche bis dorthin.",
    "Der Wert an der unteren Grenze ist der Anteil, der nicht zum Intervall gehört.",
    "Die Differenz lässt genau das Intervall übrig. Die Konstante C fällt dabei weg, weil sie in beiden Werten steckt.",
  ]);
  W("trig-ratios", [
    "Gegen- und Ankathete sind nicht fest, sondern hängen vom betrachteten Winkel ab. Ohne Markierung entsteht die häufigste Verwechslung.",
    "Die Hypotenuse liegt immer gegenüber dem rechten Winkel, die Gegenkathete gegenüber dem markierten Winkel.",
    "Welches Verhältnis passt, entscheidet allein, welche zwei Seiten gegeben oder gesucht sind.",
    "Weil die Verhältnisse bei gleichem Winkel unabhängig von der Dreiecksgrösse sind, lässt sich nach jeder Grösse auflösen.",
  ]);
  W("unit-circle", [
    "Radius eins vereinfacht alles: die Verhältnisse werden zu Koordinaten, weil der Nenner eins ist.",
    "Der Punkt auf dem Kreis wandert mit dem Winkel. Seine zwei Koordinaten sind zwei Funktionen des Winkels.",
    "Der Punkt liegt auf dem Kreis, also erfüllt er die Kreisgleichung. Das ist der Satz des Pythagoras.",
    "Damit sind Sinus und Cosinus für jeden Winkel definiert, auch über 90 Grad und negativ.",
    "Setzt man die Koordinaten in die Kreisgleichung ein, entsteht die wichtigste trigonometrische Identität von selbst.",
  ]);
  W("trig-identity", [
    "Jeder Punkt auf dem Einheitskreis erfüllt diese Gleichung. Das ist reine Geometrie.",
    "Die Koordinaten des Kreispunkts sind gerade Cosinus und Sinus des Winkels.",
    "Die Identität ist also kein Merksatz, sondern der Satz des Pythagoras in anderer Schreibweise.",
  ]);
  W("vector-length", [
    "In der Ebene ist die Länge direkt der Satz des Pythagoras über die beiden Komponenten.",
    "Im Raum steht die dritte Komponente senkrecht auf dieser Ebene, also gilt Pythagoras ein zweites Mal.",
    "Setzt man das erste Ergebnis ein, addieren sich alle drei Quadrate.",
    "Die Wurzel macht aus dem Quadrat der Länge die Länge selbst. Sie ist nie negativ.",
  ]);
  W("dot-product", [
    "Die Koordinatenform ist rechnerisch bequem, verrät aber noch nicht, was das Ergebnis bedeutet.",
    "Erst die Längen erlauben den Bezug zum Winkel, denn nur normierte Richtungen sind vergleichbar.",
    "Beide Formen beschreiben dasselbe Produkt. Das Gleichsetzen macht aus einer Rechnung eine geometrische Aussage.",
    "Nach cos φ aufgelöst wird das Skalarprodukt zum Winkelmesser. Null bedeutet senkrecht.",
  ]);
  W("cross-product", [
    "Das Muster wirkt willkürlich, folgt aber aus der Determinante. Wer es als Schema lernt, vertauscht die Vorzeichen seltener.",
    "Das Ergebnis ist der gesuchte Normalenvektor, weil es auf beiden Ausgangsvektoren senkrecht steht.",
    "Die Probe über zwei Skalarprodukte kostet zwei Zeilen und deckt Rechenfehler sofort auf.",
    "Der Betrag ist die Fläche des aufgespannten Parallelogramms. Damit löst eine Rechnung zwei Aufgabentypen.",
  ]);
  W("line-vector", [
    "Eine Gerade braucht einen bekannten Punkt, sonst weiss man nur die Richtung, aber nicht wo sie liegt.",
    "Die Richtung legt fest, wohin die Gerade zeigt. Jedes Vielfache beschreibt dieselbe Richtung.",
    "Der Parameter zählt, wie weit man vom Aufpunkt in Richtung u geht. Er darf jeden reellen Wert annehmen.",
    "Durchläuft t alle Zahlen, entsteht die gesamte Gerade. Ein einzelnes t liefert genau einen Punkt.",
  ]);
  W("plane-normal", [
    "Wie bei der Geraden braucht die Ebene einen bekannten Punkt als Anker.",
    "Der Vektor von a nach r verläuft vollständig in der Ebene, wenn r dazugehört.",
    "Alle Vektoren in der Ebene stehen senkrecht auf der Normale. Ein Skalarprodukt von null prüft genau das.",
    "Ausmultipliziert entsteht ax + by + cz = d. Die Koeffizienten sind dann direkt die Normalenkomponenten.",
  ]);
  W("point-plane-distance", [
    "Die Formel setzt die Ebene in dieser geordneten Form voraus, sonst stimmen die Vorzeichen nicht.",
    "Der eingesetzte Punkt liefert eine Zahl, die angibt, auf welcher Seite und wie weit er liegt.",
    "Ein Abstand ist nie negativ, deshalb der Betrag. Das Vorzeichen verrät nur die Seite.",
    "Ohne Normierung wäre das Ergebnis von der Länge des Normalenvektors abhängig. Genau dieser Schritt wird oft vergessen.",
  ]);
  W("conditional", [
    "Die Bedingung verkleinert den Ergebnisraum. Es wird nicht mehr über alle Fälle gerechnet, sondern nur über B.",
    "Günstig sind nur Fälle, in denen beide Ereignisse eintreten. Alles andere liegt ausserhalb.",
    "Der Anteil des Schnitts am neuen, kleineren Grundraum ist die bedingte Wahrscheinlichkeit.",
  ]);
  W("product-rule", [
    "Ausgangspunkt ist die Definition der bedingten Wahrscheinlichkeit, sonst wäre die Regel eine Behauptung.",
    "Durch Multiplikation mit P(A) verschwindet der Nenner und der Schnitt steht allein.",
    "Genau das ist die Pfadregel: entlang eines Pfades multiplizieren, weil jedes Teilereignis eintreten muss.",
  ]);
  W("union", [
    "Alle Fälle von A sollen gezählt werden, also zunächst die vollständige Wahrscheinlichkeit von A.",
    "Dasselbe für B, zunächst unabhängig davon, ob es Überlappungen gibt.",
    "Fälle, in denen beides eintritt, wurden jetzt zweimal gezählt, einmal in A und einmal in B.",
    "Einmaliges Abziehen korrigiert die Doppelzählung genau. Bei unvereinbaren Ereignissen ist dieser Term null.",
  ]);
  W("bayes", [
    "Der Schnitt lässt sich über den einen Pfad berechnen: zuerst A, dann B unter der Bedingung A.",
    "Derselbe Schnitt lässt sich über den anderen Pfad berechnen. Beide Wege müssen dasselbe ergeben.",
    "Das Gleichsetzen verbindet die beiden Richtungen der Bedingung. Das ist der ganze Trick des Satzes.",
    "Nach der gesuchten Richtung aufgelöst entsteht die Formel. Sie dreht eine bekannte Bedingung um.",
  ]);

  /* ---------------- Biologie ---------------- */
  W("michaelis-idea", [
    "Ohne Zusammentreffen kann nichts geschehen. Deshalb hängt die Rate von der Substratkonzentration ab.",
    "Erst die Bindung im aktiven Zentrum bringt das Substrat in die passende Lage.",
    "Der Komplex bietet einen Reaktionsweg mit kleinerer Startschwelle. Das ist der eigentliche Katalyse-Effekt.",
    "Weil das Enzym unverändert freigesetzt wird, kann es sofort das nächste Substrat binden. Deshalb genügen kleine Mengen.",
    "Sind alle aktiven Zentren dauernd besetzt, bringt mehr Substrat nichts mehr. Die Kurve läuft in eine Waagrechte.",
  ]);
  W("photosynthesis", [
    "Ohne Lichtabsorption gibt es keine Energie für den ganzen Prozess. Chlorophyll ist der Empfänger.",
    "Die Energie reicht, um Wasser zu spalten. Genau daraus stammt der freigesetzte Sauerstoff, nicht aus dem CO₂.",
    "Elektronen und Protonen werden in transportierbare Energieträger überführt, denn Licht selbst lässt sich nicht speichern.",
    "Erst jetzt kommt der Kohlenstoff ins Spiel. Der Calvin-Zyklus baut CO₂ in eine organische Kette ein.",
    "Glucose ist ein stabiler, transportabler Energiespeicher. Damit ist Sonnenenergie chemisch gebunden.",
  ]);
  W("respiration", [
    "Glucose ist zu gross, um direkt verwertet zu werden. Die Glykolyse zerlegt sie ohne Sauerstoffbedarf.",
    "Im Citratzyklus wird der Kohlenstoff vollständig zu CO₂ abgebaut und die Energie auf Überträger geladen.",
    "Die Elektronen bauen einen Protonengradienten über die Membran auf. Energie wird dadurch zwischengespeichert.",
    "Der zurückströmende Protonenfluss treibt die ATP-Synthase an. Hier entsteht der Grossteil des ATP.",
    "Sauerstoff nimmt am Ende die Elektronen auf. Fehlt er, staut sich die ganze Kette zurück und die Ausbeute bricht ein.",
  ]);
  W("mendel-probability", [
    "Jedes Merkmal folgt zuerst für sich der Spaltungsregel. Ohne diesen Einzelwert geht es nicht weiter.",
    "Dasselbe gilt für das zweite Merkmal, getrennt berechnet.",
    "Multiplizieren ist nur bei Unabhängigkeit erlaubt. Liegen die Gene auf demselben Chromosom, gilt die Regel nicht.",
    "Weil beide Bedingungen gleichzeitig erfüllt sein müssen, werden die Wahrscheinlichkeiten multipliziert.",
  ]);
  W("base-pairing", [
    "Die beiden Stränge müssen getrennt werden, sonst kommt kein Nukleotid an die Basen heran.",
    "Der alte Strang dient als Vorlage. Seine Reihenfolge bestimmt eindeutig, was angelagert werden muss.",
    "Die Paarung ist Geometrie, nicht Zufall: eine grosse Base passt nur zu einer kleinen, sonst stimmt der Strangabstand nicht.",
    "Erst die Verknüpfung macht aus einzelnen Nukleotiden einen zusammenhängenden Strang.",
    "Jeder neue Doppelstrang enthält einen alten Strang. Der dient als geprüfte Referenz für die Fehlerkorrektur.",
  ]);
  W("central-dogma", [
    "Nur der benötigte Abschnitt wird geöffnet. So bleibt der Rest des Erbguts geschützt und die Genaktivität steuerbar.",
    "Die Kopie ist kurzlebig und verlässt den Kern. Das Original bleibt an seinem Platz.",
    "Die Leserichtung ist festgelegt, sonst würde derselbe Abschnitt ein anderes Protein ergeben.",
    "Das Anticodon der tRNA passt nur zu einem bestimmten Codon. Das macht die Übersetzung eindeutig.",
    "Die Kette faltet sich anschliessend, und erst die Faltung erzeugt die Funktion. Struktur bestimmt Funktion.",
  ]);
  W("population-change", [
    "Ohne Ausgangsbestand ist eine Änderung nicht interpretierbar. Erst der Bezug macht Zahlen aussagekräftig.",
    "Geburten und Zuwanderung erhöhen den Bestand, sind aber völlig verschiedene Vorgänge und müssen getrennt bleiben.",
    "Sterbefälle und Abwanderung verringern ihn. Auch hier gilt: nicht vermischen.",
    "Erst die Differenz zeigt, ob der Bestand wächst. Ein positives Wachstum kann auch bei negativem natürlichem Saldo entstehen.",
    "Der Endbestand ergibt sich aus Anfang plus Änderung. Damit lässt sich das Ergebnis auf Plausibilität prüfen.",
  ]);

  /* ---------------- Chemie ---------------- */
  W("mass-number", [
    "Die Ordnungszahl steht im Periodensystem und legt das Element fest. Sie ist die Protonenzahl.",
    "Die Massenzahl zählt Protonen und Neutronen zusammen, weil nur diese nennenswerte Masse haben.",
    "Elektronen tragen kaum Masse, deshalb bleibt für die Neutronen genau die Differenz übrig.",
  ]);
  W("ion-charge", [
    "Jedes Proton trägt eine positive Elementarladung. Ihre Zahl ist durch das Element festgelegt.",
    "Jedes Elektron trägt eine gleich grosse negative Ladung. Nur ihre Zahl kann sich ändern.",
    "Die Gesamtladung ist die Summe. Deshalb entsteht bei Elektronenverlust ein Überschuss an positiver Ladung.",
  ]);
  W("mole", [
    "Die molare Masse folgt aus den Atommassen der Formel. Ohne sie fehlt die Brücke von Gramm zu Teilchen.",
    "Die Einheit g/mol ist entscheidend: sie verbindet eine messbare mit einer zählbaren Grösse.",
    "Die Masse ist die einzige direkt wägbare Grösse und deshalb fast immer der Ausgangspunkt.",
    "Die Division liefert die Stückzahl in Mol. Damit lässt sich über die Reaktionsgleichung weiterrechnen.",
  ]);
  W("avogadro", [
    "Die Stoffmenge in Mol ist eine Anzahl Pakete, nicht eine Anzahl Teilchen.",
    "Die Avogadro-Zahl gibt an, wie viele Teilchen in einem solchen Paket stecken.",
    "Multiplizieren übersetzt Pakete in Einzelteilchen. Deshalb entstehen so grosse Zahlen.",
  ]);
  W("balance", [
    "Indizes beschreiben den Stoff selbst. Wer sie ändert, wechselt den Stoff und beantwortet eine andere Aufgabe.",
    "Erst das Zählen zeigt, wo die Bilanz nicht stimmt. Ohne Abzählen wird geraten.",
    "Nur die Anzahl der Teilchen darf angepasst werden. Kleinste ganze Zahlen sind Konvention und vermeiden Mehrdeutigkeit.",
    "Ein einzelnes übersehenes Element macht die ganze Gleichung falsch, deshalb die Schlusskontrolle über alle Elemente.",
  ]);
  W("concentration", [
    "Konzentration ist über die Stoffmenge definiert, nicht über die Masse. Gramm müssen deshalb zuerst umgerechnet werden.",
    "Die Einheit mol/l verlangt Liter. Millilitern zu vergessen verschiebt das Ergebnis um Faktor tausend.",
    "Die Division normiert auf ein Liter und macht Lösungen dadurch vergleichbar.",
  ]);
  W("dilution", [
    "Vor dem Verdünnen ist die Stoffmenge durch Konzentration und Volumen festgelegt.",
    "Nach dem Verdünnen gilt dieselbe Beziehung mit neuen Werten.",
    "Beim Verdünnen kommt nur Lösungsmittel dazu. Es wird kein Stoff entfernt, also bleibt die Stoffmenge gleich.",
    "Weil beide Ausdrücke dieselbe Stoffmenge beschreiben, dürfen sie gleichgesetzt werden.",
  ]);
  W("yield", [
    "Der limitierende Stoff bestimmt die Obergrenze. Ohne ihn ist die theoretische Menge nicht bestimmbar.",
    "Die tatsächliche Menge muss gemessen werden. Sie ist praktisch immer kleiner als die theoretische.",
    "Der Quotient macht Verluste sichtbar, unabhängig von der absoluten Menge.",
    "Prozentangaben sind vergleichbar zwischen verschiedenen Ansätzen und Grössenordnungen.",
  ]);
  W("reaction-enthalpy", [
    "Die Edukte bestimmen das Ausgangsniveau. Ohne Bezugspunkt hat eine Energiedifferenz keine Bedeutung.",
    "Die Produkte bestimmen das Endniveau. Dort landet das System nach der Reaktion.",
    "Die Reihenfolge Produkte minus Edukte ist Konvention. Umgekehrt gerechnet wäre das Vorzeichen falsch.",
    "Negativ bedeutet, dass das System Energie abgegeben hat, die Umgebung also wärmer wird.",
  ]);
  W("calorimetry", [
    "Die Temperaturdifferenz treibt den Wärmefluss. Absolutwerte spielen keine Rolle, nur die Differenz.",
    "Der Materialwert c gibt an, wie schwer sich ein Stoff erwärmen lässt. Wasser ist hier ein Extremfall.",
    "Doppelte Masse braucht doppelte Energie, deshalb geht m als Faktor ein.",
    "Das Produkt der drei Grössen ergibt die Energie. Die Einheiten gehen dabei vollständig auf.",
  ]);
  W("ph", [
    "Die Oxoniumkonzentration schwankt über viele Zehnerpotenzen. In dieser Form wäre sie unhandlich.",
    "Der Logarithmus verwandelt Zehnerpotenzen in überschaubare Zahlen.",
    "Das Minuszeichen macht aus den negativen Exponenten positive Werte. Deshalb ist saurer gleich kleinerer pH.",
  ]);
  W("acid-base-reaction", [
    "Ohne klare Rollenverteilung ist nicht entscheidbar, in welche Richtung das Proton wandert.",
    "Eine Säure braucht immer einen Partner, der das Proton aufnimmt. Allein kann sie es nicht abgeben.",
    "Aus jeder Säure wird durch Protonenabgabe ihre konjugierte Base und umgekehrt. Das erklärt die Produktseite.",
    "Sowohl Atomzahl als auch Ladung müssen ausgeglichen sein. Eine der beiden Kontrollen allein genügt nicht.",
  ]);
  W("oxidation-number", [
    "Ohne Ausgangswert ist keine Änderung erkennbar. Die Oxidationszahl ist die Buchhaltung der Elektronen.",
    "Derselbe Vorgang nach der Reaktion zeigt, wo sich etwas verschoben hat.",
    "Erst die Differenz sagt, wie viele Elektronen pro Atom übertragen wurden.",
    "Abgegebene und aufgenommene Elektronen müssen sich genau ausgleichen. Elektronen können nicht verschwinden.",
  ]);
  W("cell-voltage", [
    "Tabellenwerte sind einheitlich als Reduktionen notiert. Nur so sind sie vergleichbar.",
    "Das höhere Potential nimmt Elektronen bevorzugt auf, dort läuft also die Reduktion ab.",
    "Das niedrigere Potential gibt Elektronen ab. Dort findet die Oxidation statt.",
    "Die Differenz ist die treibende Spannung. Ein positiver Wert bedeutet, die Reaktion läuft freiwillig.",
  ]);
  W("alkane", [
    "Die beiden Kettenenden tragen je drei Wasserstoffatome, weil dort nur ein Nachbar-Kohlenstoff sitzt.",
    "Innere Kohlenstoffe haben zwei Nachbarn und deshalb nur noch zwei Wasserstoffatome.",
    "Zusammengezählt ergibt sich die Regel. Jeder Kohlenstoff hat damit genau vier Bindungen.",
  ]);
  W("esterification", [
    "Nur die funktionellen Gruppen reagieren. Das Kohlenstoffgerüst bleibt unverändert.",
    "Aus der Säure geht OH, aus dem Alkohol H. Zusammen ergibt das Wasser, das abgespalten wird.",
    "Die verbleibenden Reste verbinden sich über die neue Esterbindung.",
    "Die Reaktion läuft in beide Richtungen. Entzieht man Wasser, verschiebt sich das Gleichgewicht zum Ester.",
  ]);
  W("iupac", [
    "Die Hauptfunktion hat Vorrang und bestimmt die Endung. Ohne sie ist die Kettenwahl beliebig.",
    "Die Stammkette muss die Hauptfunktion enthalten, auch wenn dadurch eine kürzere Kette gewählt wird.",
    "Die Nummerierungsrichtung ist so zu wählen, dass die Hauptfunktion die kleinste Nummer bekommt. Nur eine Richtung ist korrekt.",
    "Die alphabetische Reihenfolge ist Konvention und macht Namen weltweit eindeutig vergleichbar.",
    "Erst die korrekte Schreibweise mit Bindestrichen und Kommas macht den Namen rückübersetzbar in eine Struktur.",
  ]);

  /* ---------------- Physik ---------------- */
  W("uniform-motion", [
    "Geschwindigkeit ist als Verhältnis definiert, nicht als Zustand. Nur so wird sie vergleichbar.",
    "Umgestellt liefert dieselbe Beziehung den Weg. Es ist keine neue Formel, nur eine andere Ansicht.",
    "Die zurückgelegte Strecke ist die Differenz zum Startort, nicht der Ort selbst.",
    "Mit Startort ergibt sich der Ort zu jeder Zeit. Im s-t-Diagramm ist das eine Gerade mit Steigung v.",
  ]);
  W("acceleration", [
    "Bei konstanter Beschleunigung wächst die Geschwindigkeit gleichmässig. Das ist eine Gerade im v-t-Diagramm.",
    "Die Fläche unter der v-t-Kurve ist der Weg, weil Geschwindigkeit mal Zeit Weg ergibt.",
    "Der rechteckige Teil stammt von der Anfangsgeschwindigkeit, die während der ganzen Zeit wirkt.",
    "Der dreieckige Teil stammt vom Zuwachs. Halbe Grundseite mal Höhe erklärt den Faktor ein halb.",
    "Der Startort verschiebt die ganze Kurve, verändert aber die Form nicht.",
  ]);
  W("velocity-position", [
    "Oft ist die Zeit unbekannt und auch nicht gefragt. Dann muss sie aus der Rechnung entfernt werden.",
    "Einsetzen eliminiert die Zeit, erzeugt aber zunächst einen unübersichtlichen Ausdruck.",
    "Nach dem Ausmultiplizieren kürzen sich die a im Nenner weg. Genau deshalb funktioniert der Trick.",
    "Übrig bleibt eine Beziehung nur zwischen Geschwindigkeiten, Beschleunigung und Weg. Sie spart bei Bremswegaufgaben viel Zeit.",
  ]);
  W("free-fall", [
    "Ohne festgelegte Richtung sind alle Vorzeichen beliebig und das Ergebnis nicht interpretierbar.",
    "Zeigt oben positiv, wirkt die Erdbeschleunigung nach unten und erhält deshalb ein Minus.",
    "Der freie Fall ist kein Sonderfall, sondern gleichmässige Beschleunigung mit a = −g.",
    "Dieselbe Ortsgleichung wie immer, nur mit eingesetztem g. Nichts muss neu gelernt werden.",
  ]);
  W("highest-point", [
    "Im höchsten Punkt kehrt die Bewegung um, also muss die Geschwindigkeit dort null sein.",
    "Nach der Zeit aufgelöst ergibt sich die Steigzeit. Sie hängt nur von Anfangsgeschwindigkeit und g ab.",
    "Die zeitfreie Form spart den Umweg über die Steigzeit, wenn nur die Höhe gefragt ist.",
    "Aufgelöst nach der Höhe zeigt sich: doppelte Abwurfgeschwindigkeit bedeutet vierfache Höhe.",
  ]);
  W("newton2", [
    "Nur Kräfte, die an diesem Körper angreifen, beschleunigen ihn. Reaktionskräfte am Partner gehören nicht dazu.",
    "Ohne festgelegte Achsen lässt sich nicht entscheiden, welche Kraft positiv zählt.",
    "Kräfte sind Vektoren. Sie dürfen nur richtungsweise summiert werden, nicht als blosse Beträge.",
    "Erst die resultierende Kraft steht in F = m·a. Das ist der am häufigsten übersehene Punkt.",
    "Die Einheitenprobe deckt Vorzeichen- und Umrechnungsfehler auf, bevor sie ins Ergebnis wandern.",
  ]);
  W("weight", [
    "Die Masse ist eine Stoffeigenschaft. Sie ändert sich beim Ortswechsel nicht.",
    "Der Ortsfaktor beschreibt, wie stark der Himmelskörper zieht. Er ist die ortsabhängige Grösse.",
    "Das Produkt trennt sauber, was zum Körper gehört und was zum Ort. Genau deshalb sind Masse und Gewicht nicht dasselbe.",
  ]);
  W("density", [
    "Die Masse ist direkt wägbar und deshalb der einfachste Ausgangswert.",
    "Das Volumen kann berechnet oder über Verdrängung gemessen werden. Bei unregelmässigen Körpern ist Verdrängung praktischer.",
    "Ohne Angleichen der Einheiten entstehen Fehler um Faktor tausend oder eine Million.",
    "Der Quotient ist unabhängig von der Probengrösse. Deshalb ist Dichte eine Stoffeigenschaft.",
  ]);
  W("friction", [
    "Auf der schiefen Ebene ist die Normalkraft kleiner als die Gewichtskraft. Wer mg einsetzt, rechnet zu grosse Reibung.",
    "Reibung wirkt immer entgegen der Bewegung oder der Bewegungstendenz, nie in eine beliebige Richtung.",
    "Die Haftreibung passt sich an und wird nur so gross wie nötig, bis zur Grenze μ·F_N.",
    "Sobald es gleitet, ist die Reibung fest und meist kleiner. Deshalb ist das Anschieben schwerer als das Weiterschieben.",
  ]);
  W("torque", [
    "Das Drehmoment hängt vom Bezugspunkt ab. Ohne gewählten Drehpunkt ist es nicht definiert.",
    "Nur der senkrechte Abstand zählt. Eine schräg angreifende Kraft wirkt entsprechend schwächer.",
    "Ohne Vorzeichenregel lassen sich gegenläufige Drehwirkungen nicht verrechnen.",
    "Die Summe entscheidet, ob sich etwas dreht. Einzelne Momente sagen für sich nichts aus.",
  ]);
  W("static-equilibrium", [
    "Das Freikörperbild zwingt dazu, jede Kraft bewusst einzutragen. Vergessene Kräfte sind die Hauptfehlerquelle.",
    "Ohne Kräftegleichgewicht würde der Körper verschoben, auch wenn er sich nicht dreht.",
    "Legt man den Drehpunkt in eine unbekannte Kraft, fällt deren Moment weg. Das verkürzt die Rechnung erheblich.",
    "Ohne Momentengleichgewicht könnte der Körper rotieren, obwohl die Kräftesumme null ist.",
    "Negative Ergebnisse bedeuten nur, dass eine Richtung falsch angenommen wurde. Das ist kein Fehler, wenn man es deutet.",
  ]);
  W("work", [
    "Arbeit ist eine gerichtete Grösse. Ohne die Richtungen ist nicht entscheidbar, welcher Anteil zählt.",
    "Nur die Komponente in Wegrichtung verrichtet Arbeit. Senkrechte Kräfte leisten nichts.",
    "Deshalb ist das Tragen einer Last auf waagrechtem Weg physikalisch keine Hubarbeit.",
  ]);
  W("power", [
    "Arbeit und Energie sind dieselbe Grösse in Joule. Beide können im Zähler stehen.",
    "Die Zeit macht aus einer Menge ein Tempo. Ohne sie fehlt die Aussage über Geschwindigkeit der Übertragung.",
    "Der Quotient erklärt, warum dieselbe Arbeit in kürzerer Zeit mehr Leistung verlangt.",
  ]);
  W("efficiency", [
    "Was als Nutzen gilt, ist eine Definitionsfrage. Ohne Systemgrenze ist der Wirkungsgrad beliebig.",
    "Nutzen und Zufuhr müssen dieselbe Art von Grösse sein, also beide Energie oder beide Leistung.",
    "Sonst vergleicht man Joule mit Watt und erhält eine sinnlose Zahl.",
    "Der Quotient ist eine reine Zahl und deshalb zwischen völlig verschiedenen Maschinen vergleichbar.",
  ]);
  W("kinetic-energy", [
    "Die Energie eines bewegten Körpers ist gleich der Arbeit, die zum Beschleunigen nötig war.",
    "Die beschleunigende Kraft folgt aus dem zweiten Newtonschen Gesetz.",
    "Der Weg beim Beschleunigen aus der Ruhe lässt sich zeitfrei über die Kinematik ausdrücken.",
    "Beim Einsetzen kürzt sich die Beschleunigung heraus. Deshalb steht sie im Ergebnis nicht mehr.",
    "Übrig bleibt der Faktor ein halb und das Quadrat der Geschwindigkeit. Genau daraus folgt der quadratische Bremsweg.",
  ]);
  W("potential-energy", [
    "Zum Heben muss die Gewichtskraft überwunden werden, also ist sie die relevante Kraft.",
    "Nur die Höhe zählt, nicht der Weg dorthin. Über eine Rampe ist die Arbeit dieselbe.",
    "Die verrichtete Arbeit steckt danach als Lageenergie im Körper.",
    "Nur Höhenunterschiede sind physikalisch bedeutsam. Das Nullniveau darf frei gewählt werden.",
  ]);
  W("energy-conservation", [
    "Ohne Systemgrenze ist unklar, welche Energien in die Bilanz gehören und welche nicht.",
    "Alle Energieformen zu Beginn müssen erfasst werden, auch die leicht übersehenen wie Federenergie.",
    "Dasselbe am Ende. Was fehlt, muss sich in einer anderen Form wiederfinden.",
    "Reibung vernichtet keine Energie. Sie erscheint als Wärme und gehört auf die Endseite der Bilanz.",
    "Die Einheitenprobe fängt die häufigsten Fehler, etwa Gramm statt Kilogramm oder km/h statt m/s.",
  ]);
  W("pressure", [
    "Nur die senkrecht auf die Fläche wirkende Kraft erzeugt Druck. Schräge Anteile zählen nicht.",
    "Quadratzentimeter statt Quadratmeter verschiebt das Ergebnis um Faktor zehntausend.",
    "Der Quotient erklärt, warum ein spitzer Nagel eindringt und ein Brett nicht, bei gleicher Kraft.",
  ]);
  W("hydrostatic", [
    "Gedanklich wird eine Säule über der Fläche betrachtet. Ihr Gewicht erzeugt den Druck.",
    "Die Masse folgt aus Dichte und Volumen. Deshalb hängt der Druck an der Dichte der Flüssigkeit.",
    "Das Gewicht dieser Säule ist die Kraft, die auf die Bodenfläche drückt.",
    "Beim Teilen durch die Fläche kürzt sich A heraus. Genau deshalb ist die Gefässform ohne Bedeutung.",
    "Der Luftdruck wirkt zusätzlich von oben. Beim Tauchen muss er zum absoluten Druck addiert werden.",
  ]);
  W("buoyancy", [
    "Unten ist der Druck grösser als oben, weil dort mehr Flüssigkeit darüber steht.",
    "Aus der Druckdifferenz folgt eine netto nach oben gerichtete Kraft. Das ist die Ursache des Auftriebs.",
    "Die betrachtete Höhe mal Fläche ist gerade das verdrängte Volumen.",
    "Das Ergebnis enthält nur Flüssigkeitsdichte und Volumen. Das Material des Körpers spielt keine Rolle.",
  ]);
  W("kelvin", [
    "Celsius bezieht sich auf den Gefrierpunkt von Wasser, ein willkürlich gewählter Nullpunkt.",
    "Kelvin beginnt am absoluten Nullpunkt, wo jede Teilchenbewegung aufhört. Das ist physikalisch ausgezeichnet.",
    "Weil nur der Nullpunkt verschoben ist, sind Temperaturdifferenzen in beiden Skalen zahlenmässig gleich.",
  ]);
  W("linear-expansion", [
    "Nur die Temperaturänderung treibt die Ausdehnung, nicht die absolute Temperatur.",
    "Der Materialwert unterscheidet Stahl von Aluminium. Deshalb verziehen sich Verbundkonstruktionen.",
    "Ein langer Stab dehnt sich absolut stärker aus. Die relative Änderung ist aber gleich.",
    "Das Produkt der drei Grössen ergibt die Längenänderung, nicht die Endlänge.",
    "Erst die Addition liefert die Endlänge. Diese Verwechslung ist eine häufige Fehlerquelle.",
  ]);
  W("sensible-heat", [
    "Die Wärmekapazität wird meist je Kilogramm angegeben. Gramm müssen vorher umgerechnet werden.",
    "Die Differenz in der richtigen Reihenfolge entscheidet über das Vorzeichen und damit über Aufnahme oder Abgabe.",
    "Alle drei Faktoren gehen linear ein. Doppelte Masse oder doppelte Differenz bedeutet doppelte Energie.",
    "Ein negatives Q bedeutet Abgabe. Das ist kein Fehler, sondern eine Information.",
  ]);
  W("first-law", [
    "Ohne Trennung von System und Umgebung ist nicht entscheidbar, was zugeführt und was abgegeben wird.",
    "Ohne Vorzeichenkonvention widersprechen sich Ergebnisse zwischen verschiedenen Büchern und Lösungen.",
    "Wärme kann zu- oder abfliessen. Beides muss mit korrektem Vorzeichen erfasst werden.",
    "Arbeit am System erhöht seine innere Energie, Arbeit vom System verringert sie.",
    "Die Summe ist die Änderung der inneren Energie. Energie kann weder entstehen noch verschwinden.",
  ]);
  W("latent-heat", [
    "Nur beim Phasenwechsel gilt diese Formel. Bei blosser Erwärmung ist sie falsch.",
    "Schmelz- und Verdampfungswärme unterscheiden sich um fast den Faktor sieben. Die Verwechslung verfälscht alles.",
    "Die Umwandlungswärme ist je Kilogramm angegeben, deshalb muss die Masse in derselben Einheit vorliegen.",
    "Es kommt kein ΔT vor, weil die Temperatur während des Übergangs konstant bleibt. Genau das ist der Kern.",
  ]);
  W("ideal-gas", [
    "Die Gasgleichung verbindet alle Zustandsgrössen. Sie ist der Ausgangspunkt für jede Zustandsänderung.",
    "In einem abgeschlossenen Behälter bleiben Stoffmenge und Gaskonstante unverändert. Nur so ist die rechte Seite fest.",
    "Durch T geteilt entsteht ein Ausdruck, der sich bei Zustandsänderungen nicht ändert.",
    "Weil er konstant bleibt, dürfen zwei Zustände gleichgesetzt werden. Achtung: T muss in Kelvin stehen.",
  ]);
  W("current", [
    "Strom ist bewegte Ladung. Ohne Ladungsmenge gibt es keinen Strom.",
    "Die Zeitspanne macht aus einer Menge einen Fluss. Das ist derselbe Gedanke wie bei der Geschwindigkeit.",
    "Der Quotient ist die Stromstärke. Ein Ampere bedeutet ein Coulomb pro Sekunde.",
  ]);
  W("voltage", [
    "Spannung beschreibt, wie viel Energie pro Ladung transportiert wird, nicht wie viel insgesamt.",
    "Die Ladung ist der Bezug. Ohne sie wäre Spannung nur eine Energiemenge.",
    "Der Quotient erklärt, warum eine Batterie mit 9 V jeder Ladung mehr Energie mitgibt als eine mit 1,5 V.",
  ]);
  W("ohm", [
    "Das Gesetz gilt nur für ohmsche Bauteile. Bei einer Glühlampe krümmt sich die Kennlinie.",
    "Der Widerstand ist als Quotient definiert. Bei ohmschem Verhalten ist er konstant.",
    "Je nach Aufgabe wird nach U, I oder R aufgelöst. Es ist eine Formel, nicht drei.",
    "Wärmer werdende Leiter ändern ihren Widerstand. Deshalb gilt das Gesetz nur bei konstanter Temperatur.",
  ]);
  W("series", [
    "In der Reihe teilt sich die Quellenspannung auf die Bauteile auf. Das ist die Ausgangsbeobachtung.",
    "Jede Teilspannung folgt aus dem ohmschen Gesetz mit demselben Strom, denn es gibt nur einen Weg.",
    "Weil I überall gleich ist, lässt sich der Strom ausklammern. Genau das macht die Herleitung möglich.",
    "Der Vergleich mit der Definition des Ersatzwiderstands liefert die Additionsregel.",
  ]);
  W("parallel", [
    "Parallel teilt sich der Strom auf die Zweige auf. Die Teilströme addieren sich zum Gesamtstrom.",
    "An jedem Zweig liegt dieselbe Spannung, deshalb folgt jeder Teilstrom aus U und seinem Widerstand.",
    "Weil U überall gleich ist, lässt sich die Spannung ausklammern.",
    "Der Vergleich mit der Definition ergibt die Kehrwertregel. Deshalb sinkt der Gesamtwiderstand unter den kleinsten Einzelwert.",
  ]);
  W("electric-power", [
    "Leistung ist immer Energie pro Zeit, unabhängig von der Energieform.",
    "Die elektrische Energie ergibt sich aus Spannung und transportierter Ladung.",
    "Die Ladung pro Zeit ist gerade der Strom. Damit lässt sich die Zeit eliminieren.",
    "Übrig bleibt das Produkt aus Spannung und Strom. Volt mal Ampere ergibt Watt.",
    "Mit dem ohmschen Gesetz entstehen zwei weitere Formen. Man wählt jene, deren Grössen gegeben sind.",
  ]);
  W("magnetic-force", [
    "Die Kraft hängt von der gegenseitigen Lage von Strom und Feld ab. Ohne Richtungen ist sie nicht bestimmbar.",
    "Nur der zum Feld senkrechte Anteil des Stroms erzeugt Kraft. Parallel zum Feld wirkt keine.",
    "Deshalb steht der Sinus in der Formel. Bei 90 Grad ist die Kraft maximal, bei 0 Grad null.",
    "Die Richtung folgt nicht aus dem Betrag. Sie muss über die Drei-Finger-Regel separat bestimmt werden.",
  ]);
  W("reflection", [
    "Das Lot ist die Bezugslinie. Ohne es sind die Winkel nicht eindeutig definiert.",
    "Gemessen wird immer zum Lot, nie zur Oberfläche. Das ist die häufigste Zeichenfehlerquelle.",
    "Der Ausfallswinkel ist gleich gross und liegt auf der anderen Seite des Lots. Damit ist der Strahlengang bestimmt.",
  ]);
  W("snell", [
    "Die Brechzahlen beschreiben, wie stark jedes Medium das Licht verlangsamt. Sie entscheiden über die Richtungsänderung.",
    "Auch hier wird zum Lot gemessen. Ohne Lot ist das Gesetz nicht anwendbar.",
    "Umgestellt liefert es den Sinus des gesuchten Winkels, noch nicht den Winkel selbst.",
    "Erst der Arkussinus macht aus dem Verhältnis einen Winkel.",
    "Zum Lot hin beim Übergang ins dichtere Medium, vom Lot weg ins dünnere. Die Plausibilitätsprüfung deckt Vertauschungen auf.",
  ]);
  W("lens", [
    "Ohne Vorzeichenregelung werden reelle und virtuelle Bilder verwechselt. Bei Zerstreuungslinsen ist f negativ.",
    "Die Gleichung verbindet die Kehrwerte, nicht die Grössen selbst. Das ist der häufigste Rechenfehler.",
    "Zuerst wird der gesuchte Kehrwert isoliert, noch nicht die Grösse.",
    "Der Kehrwert am Schluss liefert die gesuchte Länge. Wer diesen Schritt vergisst, erhält den reziproken Wert.",
    "Ein negatives Ergebnis bedeutet ein virtuelles Bild. Die Konstruktionszeichnung bestätigt oder widerlegt das Ergebnis.",
  ]);

  /* ---------------- Geografie ---------------- */
  W("population-balance", [
    "Ohne festen Zeitraum und Raum sind Bevölkerungszahlen nicht vergleichbar.",
    "Der natürliche Saldo betrifft Geburt und Tod, also die demografische Seite.",
    "Der Wanderungssaldo betrifft Migration. Er kann einen negativen natürlichen Saldo vollständig ausgleichen.",
    "Nur die Summe ergibt die Gesamtveränderung. Beide Anteile müssen getrennt ausgewiesen werden.",
    "Auf tausend Einwohner bezogen werden Länder unterschiedlicher Grösse vergleichbar.",
  ]);

  M.whyFilled = filled;
})();

/* Neu gebaute Grafiken auf Basis von M.Viz. Ersetzen die alten
   320x170-Skizzen in den wichtigsten Kapiteln. */
(function () {
  "use strict";
  var M = window.MNEMIKA;
  var V = M.Viz;
  var n = 0;
  function set(chapterId, title, caption, html) {
    M.ILLUS[chapterId] = [{ title: title, caption: caption, html: html, rebuilt: true }];
    n += 1;
  }

  /* ---------- Biologie ---------- */
  set("bio-cells", "Der Weg eines Exportproteins durch die Zelle",
    "Jede Station verändert das Protein. Die Beschriftung der Pfeile nennt das Transportmittel.",
    V.process({ title: "Proteinexport in vier Stationen",
      subtitle: "Vom Bauplan im Kern bis zur Abgabe an der Membran",
      caption: "Jede Station verändert das Protein.",
      steps: [
        { title: "Zellkern", text: "DNA wird abgelesen und als mRNA kopiert.", via: "mRNA" },
        { title: "Raues ER", text: "Ribosomen übersetzen die mRNA, die Kette faltet sich.", via: "Transportvesikel" },
        { title: "Golgi", text: "Chemisch verändert, sortiert und verpackt.", via: "Sekretvesikel" },
        { title: "Membran", text: "Das Vesikel verschmilzt, Exocytose nach aussen.", accent: true },
      ] }));

  set("bio-energy", "Chloroplast und Mitochondrium im Vergleich",
    "Dieselben Stoffe, umgekehrte Richtung, aber zwei verschiedene Aufgaben.",
    V.compare({ title: "Speichern gegen nutzbar machen",
      subtitle: "Warum eine Pflanzenzelle beide Organellen braucht",
      link: "Glucose ist der Speicher, ATP ist die Währung",
      columns: [
        { name: "Chloroplast", rows: [["Hinein", "CO₂, Wasser, Licht"], ["Heraus", "Glucose und Sauerstoff"],
          ["Aufgabe", "Lichtenergie chemisch speichern"], ["Wann", "nur bei Licht"]] },
        { name: "Mitochondrium", rows: [["Hinein", "Glucose und Sauerstoff"], ["Heraus", "ATP, CO₂, Wasser"],
          ["Aufgabe", "gespeicherte Energie nutzbar machen"], ["Wann", "rund um die Uhr"]] },
      ] }));

  set("bio-respiration-circulation", "Energieausbeute mit und ohne Sauerstoff",
    "Ohne Sauerstoff bleiben von rund 30 ATP nur zwei übrig.",
    V.barChart({ title: "ATP je Molekül Glucose", yTitle: "ATP", xTitle: "Abbauweg",
      data: [["Zellatmung", 30], ["Gärung", 2]], highlight: "Gärung",
      caption: "Deshalb hält ein Sprint nur kurz an." }));

  set("bio-enzymes", "Enzymaktivität über der Temperatur",
    "Erst mehr Zusammenstösse, dann zerstört die Hitze die Faltung.",
    V.lineChart({ title: "Aktivität steigt bis zum Optimum und bricht dann ein",
      yTitle: "relative Aktivität", xTitle: "Temperatur in Grad Celsius",
      cats: ["0", "10", "20", "30", "37", "45", "55", "65"],
      series: [{ name: "menschliches Enzym", values: [5, 18, 42, 78, 100, 72, 18, 2] }],
      caption: "Das Maximum liegt bei 37 Grad, danach denaturiert das Protein." }));

  /* ---------- Chemie ---------- */
  set("chem-concentration-stoich", "Der Rechenweg über die Stoffmenge",
    "Nie direkt von Gramm auf Gramm. Der Weg führt immer über Mol.",
    V.process({ title: "Von der Masse zum Produkt",
      subtitle: "Vier Schritte, die bei jeder stöchiometrischen Aufgabe gleich sind",
      steps: [
        { title: "Masse A", text: "Gewogener Ausgangsstoff in Gramm.", via: "geteilt durch M" },
        { title: "Mol A", text: "Stoffmenge über die molare Masse.", via: "Koeffizienten" },
        { title: "Mol B", text: "Umrechnung im Molverhältnis der Gleichung.", via: "mal M" },
        { title: "Masse B", text: "Produktmenge zurück in Gramm.", accent: true },
      ] }));

  set("chem-acid-base", "Die pH-Skala ist logarithmisch",
    "Jede Stufe bedeutet den Faktor zehn in der Oxoniumkonzentration.",
    V.barChart({ title: "pH-Werte aus dem Alltag", yTitle: "pH-Wert", xTitle: "Stoff",
      data: [["Magensäure", 1.5], ["Cola", 2.5], ["Kaffee", 5], ["Wasser", 7], ["Seife", 10]],
      highlight: "Wasser", max: 14,
      caption: "Von Cola zu Wasser sind es rund 30'000-mal weniger Oxoniumionen." }));

  set("chem-energetics", "Aktivierungsenergie und Reaktionsbilanz",
    "Der Berg entscheidet über die Geschwindigkeit, das Gefälle über die Bilanz.",
    V.lineChart({ title: "Energieverlauf einer exothermen Reaktion",
      yTitle: "Energie in kJ/mol", xTitle: "Reaktionsverlauf",
      cats: ["Start", "", "Übergang", "", "Ende"],
      series: [{ name: "ohne Katalysator", values: [120, 180, 235, 150, 70] },
               { name: "mit Katalysator", values: [120, 150, 178, 130, 70] }],
      caption: "Der Katalysator senkt den Berg, nicht das Endniveau." }));

  /* ---------- Physik ---------- */
  set("phys-heat-thermo", "Wärmekapazität im Vergleich",
    "Wasser braucht fast zehnmal so viel Energie wie Eisen für dieselbe Erwärmung.",
    V.barChart({ title: "Spezifische Wärmekapazität", yTitle: "J je kg und Kelvin", xTitle: "Material",
      data: [["Wasser", 4180], ["Alu", 900], ["Eisen", 450], ["Blei", 130]], highlight: "Wasser",
      caption: "Deshalb ist die Pfanne sofort heiss und das Wasser darin nicht." }));

  set("phys-kinematics", "Weg, Geschwindigkeit und Beschleunigung",
    "Bei konstanter Beschleunigung wächst die Geschwindigkeit linear, der Weg quadratisch.",
    V.lineChart({ title: "Gleichmässig beschleunigte Bewegung",
      yTitle: "Wert", xTitle: "Zeit in Sekunden",
      cats: ["0", "1", "2", "3", "4", "5", "6"],
      series: [{ name: "Geschwindigkeit in m/s", values: [0, 3, 6, 9, 12, 15, 18] },
               { name: "Weg in m", values: [0, 1.5, 6, 13.5, 24, 37.5, 54] }],
      caption: "Doppelte Zeit bedeutet doppelte Geschwindigkeit, aber vierfachen Weg." }));

  set("phys-energy", "Bremsweg wächst quadratisch",
    "Doppeltes Tempo bedeutet vierfache Bewegungsenergie und rund vierfachen Bremsweg.",
    V.barChart({ title: "Bremsweg bei trockener Fahrbahn", yTitle: "Bremsweg in Metern", xTitle: "Geschwindigkeit",
      data: [["30 km/h", 4.5], ["50 km/h", 12.5], ["80 km/h", 32], ["100 km/h", 50]], highlight: "100 km/h",
      caption: "Die Energie steigt mit dem Quadrat der Geschwindigkeit." }));

  /* ---------- Mathematik ---------- */
  set("math-systems-quadratics", "Die Diskriminante entscheidet über die Lösungszahl",
    "Drei Lagen der Parabel, drei Fälle für D.",
    V.compare({ title: "D grösser, gleich oder kleiner als null",
      link: "D = b² − 4ac",
      columns: [
        { name: "D > 0", rows: [["Lage", "Parabel schneidet die Achse zweimal"], ["Lösungen", "zwei verschiedene"],
          ["Beispiel", "x² − 5x + 6 = 0 ergibt 2 und 3"], ["Wurzel", "positiv"]] },
        { name: "D < 0", rows: [["Lage", "Parabel berührt die Achse nicht"], ["Lösungen", "keine reelle"],
          ["Beispiel", "x² + x + 5 = 0"], ["Wurzel", "negativ, nicht definiert"]] },
      ] }));

  set("math-functions-advanced", "Linear gegen exponentiell",
    "Linear kommt pro Schritt derselbe Betrag dazu, exponentiell derselbe Faktor.",
    V.lineChart({ title: "Zuwachs pro Schritt", yTitle: "Bestand", xTitle: "Zeitschritte",
      cats: ["0", "1", "2", "3", "4", "5", "6", "7"],
      series: [{ name: "linear, plus 20", values: [100, 120, 140, 160, 180, 200, 220, 240] },
               { name: "exponentiell, mal 1,35", values: [100, 135, 182, 246, 332, 448, 605, 817] }],
      caption: "Am Anfang liegt linear vorn, danach nie wieder." }));

  /* ---------- Geografie ---------- */
  set("geo-climate-change", "CO₂ in der Atmosphäre seit 1850",
    "Von rund 280 ppm vorindustriell auf über 420 ppm heute.",
    V.lineChart({ title: "Kohlenstoffdioxid in der Atmosphäre",
      yTitle: "ppm", xTitle: "Jahr",
      cats: ["1850", "1900", "1950", "1980", "2000", "2015", "2025"],
      series: [{ name: "CO₂-Gehalt", values: [285, 296, 311, 338, 369, 400, 424] }],
      caption: "Der Anstieg ist um ein Vielfaches schneller als jede natürliche Schwankung der letzten 800'000 Jahre." }));

  set("geo-demography", "Der demografische Übergang",
    "Das stärkste Wachstum entsteht in der Schere zwischen den beiden Kurven.",
    V.lineChart({ title: "Geburten- und Sterberate über fünf Phasen",
      yTitle: "je 1000 Einwohner", xTitle: "Phase",
      cats: ["1", "2", "3", "4", "5"],
      series: [{ name: "Geburtenrate", values: [42, 40, 26, 13, 9] },
               { name: "Sterberate", values: [40, 22, 12, 10, 11] }],
      caption: "In Phase 2 ist die Sterberate bereits gefallen, die Geburtenrate noch hoch." }));

  set("geo-weather-climate", "Luv, Lee und der Föhn",
    "Feucht aufsteigen kühlt langsamer ab, als trocken absteigen sich erwärmt.",
    V.process({ title: "Warum es hinter dem Gebirge wärmer und trockener ist",
      steps: [
        { title: "Luv", text: "Feuchte Luft wird zum Aufsteigen gezwungen.", via: "aufsteigen" },
        { title: "Abkühlung", text: "0,6 Grad je 100 Meter, Wasserdampf kondensiert.", via: "abregnen" },
        { title: "Kamm", text: "Die Luft hat ihre Feuchte weitgehend verloren.", via: "absinken" },
        { title: "Lee", text: "Trockene Luft erwärmt sich um 1 Grad je 100 Meter.", accent: true },
      ] }));

  /* ---------- Geschichte ---------- */
  set("hist-ch-1798-1848", "Vom Staatenbund zum Bundesstaat",
    "Fünfzig Jahre zwischen Umsturz und Kompromiss.",
    V.timeline({ title: "Die Schweiz 1798 bis 1848",
      spans: [{ from: 1798, to: 1803, name: "Helvetische Republik" },
              { from: 1830, to: 1847, name: "Regeneration" }],
      events: [
        { year: 1798, label: "Einmarsch, Helvetik" },
        { year: 1803, label: "Mediation, Kantone zurück" },
        { year: 1830, label: "Liberale Verfassungen" },
        { year: 1847, label: "Sonderbundskrieg", turn: true },
        { year: 1848, label: "Bundesverfassung" },
      ],
      caption: "Der Krieg 1847 ist der Wendepunkt: 26 Tage, danach ein Kompromiss statt einer Abrechnung." }));

  set("hist-versailles-crisis", "Krise und Radikalisierung",
    "Arbeitslosigkeit und Stimmenanteil der NSDAP verlaufen fast parallel.",
    V.lineChart({ title: "Deutschland 1928 bis 1933",
      yTitle: "Prozent bzw. Millionen", xTitle: "Jahr",
      cats: ["1928", "1929", "1930", "1931", "1932", "1933"],
      series: [{ name: "Arbeitslose in Millionen", values: [1.4, 1.9, 3.1, 4.5, 5.6, 6.0] },
               { name: "NSDAP in Prozent", values: [2.6, 3, 18.3, 22, 37.3, 43.9] }],
      caption: "Vor der Krise war die Partei eine Randerscheinung." }));

  set("hist-ww1", "Ursachen und Anlass 1914",
    "Vier langfristige Ursachen, ein Auslöser, fünf Wochen bis zum Weltkrieg.",
    V.timeline({ title: "Von Sarajevo zum Weltkrieg",
      spans: [{ from: 1882, to: 1914, name: "Bündnissystem und Wettrüsten" }],
      events: [
        { year: 1882, label: "Dreibund" },
        { year: 1907, label: "Triple Entente" },
        { year: 1911, label: "Zweite Marokkokrise" },
        { year: 1914, label: "Attentat, Julikrise", turn: true },
      ],
      caption: "Der Anlass löste aus, die Ursachen machten den Ausbruch möglich." }));

  /* ---------- Sprachen ---------- */
  set("de-argumentation", "Der Aufbau eines Arguments",
    "Fehlt einer der drei Teile, bleibt es eine Behauptung.",
    V.process({ title: "Behauptung, Begründung, Beleg",
      steps: [
        { title: "Behauptung", text: "Was du sagst, in einem strittigen Satz.", via: "warum" },
        { title: "Begründung", text: "Der Grund, der über die Behauptung hinausgeht.", via: "woran" },
        { title: "Beleg", text: "Zahl, Studie, Textstelle oder Fall.", via: "aber" },
        { title: "Einschränkung", text: "Der stärkste Einwand, ernsthaft genommen.", accent: true },
      ] }));

  set("en-analysis", "Point, Evidence, Explanation",
    "Ohne die Erklärung bleibt das Zitat unausgewertet.",
    V.process({ title: "Drei Schritte je Analyseabsatz",
      steps: [
        { title: "Point", text: "Eine Behauptung über den Text, nicht über die Handlung.", via: "shown by" },
        { title: "Evidence", text: "Wenige Wörter aus dem Text, präzise gewählt.", via: "because" },
        { title: "Explanation", text: "Welche Wirkung die Stelle erzeugt und warum.", accent: true },
      ] }));

  M.vizRebuilt = n;
})();