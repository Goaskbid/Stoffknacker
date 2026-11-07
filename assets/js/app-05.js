

/* Physik: ausgeschriebene Lehrtexte für alle 14 Kapitel.
   Ersetzt die einzeiligen Blöcke aus dem Kapitelbestand durch echte
   Erklärungen: vier Blöcke je Kapitel, drei Absätze je Block,
   jeder Block endet mit einem Verständnis-Check. */
(function () {
  "use strict";
  var M = window.MNEMIKA;
  const { mc, tf } = M;

  function body(id, list) {
    var c = M.chapter(id);
    if (!c) return;
    c.depth = "full";
    c.blocks = list.map(function (b, i) {
      var blk = { id: "b" + (i + 1), label: b[0], body: b[1], check: b[2] };
      if (blk.check) {
        blk.check.blockId = blk.id; blk.check.blockNo = i + 1;
        blk.check.blockLabel = blk.label; blk.check.role = "check";
      }
      return blk;
    });
  }

  /* ------------------------------------------------ 1 Kinematik */
  body("phys-kinematics", [
    ["Ort, Weg und Strecke sind drei verschiedene Dinge",
     ["Der <strong>Ort</strong> sagt, wo etwas ist. Die <strong>Strecke</strong> sagt, wie weit es insgesamt gefahren ist. Die <strong>Verschiebung</strong> sagt nur, wie weit Anfang und Ende auseinanderliegen.",
      "Ein Beispiel macht den Unterschied sichtbar: Du läufst 400 Meter einmal um die Bahn. Die zurückgelegte Strecke beträgt 400 Meter, die Verschiebung aber null, weil du wieder am Start stehst.",
      "In der Prüfung entscheidet diese Unterscheidung über das Vorzeichen. Fragt eine Aufgabe nach der Verschiebung, zählt die Richtung mit. Fragt sie nach der Strecke, addierst du alles ohne Vorzeichen."],
     mc("phk-c1", "Ein Läufer umrundet eine 400-Meter-Bahn genau einmal. Wie gross ist seine Verschiebung?",
       ["400 m", "800 m", "0 m", "200 m"], 2,
       "Start und Ziel sind derselbe Punkt. Die zurückgelegte Strecke beträgt 400 Meter, die Verschiebung ist null.")],

    ["Geschwindigkeit ist ein Verhältnis, kein Zustand",
     ["Geschwindigkeit ist definiert als Weg pro Zeit: <span class=\"kbd\">v = s / t</span>. Sie sagt nicht, wie weit etwas gefahren ist, sondern wie viel Weg pro Zeiteinheit anfällt.",
      "Deshalb ist die Einheit ein Bruch: Meter pro Sekunde. Wer 100 km/h in m/s umrechnen will, teilt durch 3,6, weil eine Stunde 3600 Sekunden und ein Kilometer 1000 Meter hat. 3600 geteilt durch 1000 ergibt genau diesen Faktor 3,6.",
      "Unterscheide <strong>Durchschnittsgeschwindigkeit</strong> und <strong>Momentangeschwindigkeit</strong>. Fährst du 100 km in zwei Stunden, beträgt der Durchschnitt 50 km/h, auch wenn du zwischendurch gestanden bist. Der Tacho zeigt dagegen immer den Momentanwert."],
     mc("phk-c2", "Wie rechnest du 72 km/h in m/s um?",
       ["mal 3,6", "geteilt durch 3,6", "mal 1000", "geteilt durch 60"], 1,
       "72 geteilt durch 3,6 ergibt 20 m/s. Der Faktor 3,6 entsteht aus 3600 Sekunden pro Stunde geteilt durch 1000 Meter pro Kilometer.")],

    ["Beschleunigung ist die Änderung der Geschwindigkeit",
     ["Beschleunigung misst, wie stark sich die Geschwindigkeit pro Zeit ändert: <span class=\"kbd\">a = Δv / Δt</span>. Die Einheit m/s² bedeutet wörtlich: pro Sekunde kommen so viele Meter pro Sekunde dazu.",
      "Ein Auto mit a = 3 m/s² ist nach einer Sekunde 3 m/s schnell, nach zwei Sekunden 6 m/s, nach drei Sekunden 9 m/s. Die Geschwindigkeit wächst also gleichmässig, der Weg dagegen nicht.",
      "Wichtig: Beschleunigung heisst nicht automatisch schneller werden. Bremsen ist ebenfalls eine Beschleunigung, nur mit umgekehrtem Vorzeichen. Und auch eine Kurvenfahrt mit konstantem Tempo ist beschleunigt, weil sich die Richtung ändert."],
     tf("phk-c3", "Ein Auto, das mit konstanter Geschwindigkeit eine Kurve fährt, ist unbeschleunigt.", false,
       "Geschwindigkeit hat Betrag und Richtung. In der Kurve ändert sich die Richtung, also liegt eine Beschleunigung vor, auch wenn der Tacho denselben Wert zeigt.")],

    ["Diagramme lesen, statt Formeln raten",
     ["Im <strong>s-t-Diagramm</strong> steht der Weg über der Zeit. Die <em>Steigung</em> ist die Geschwindigkeit. Eine waagrechte Linie bedeutet Stillstand, eine steile Gerade hohes Tempo, eine gekrümmte Kurve wechselndes Tempo.",
      "Im <strong>v-t-Diagramm</strong> steht die Geschwindigkeit über der Zeit. Hier ist die Steigung die Beschleunigung, und die <em>Fläche</em> unter der Kurve ist der zurückgelegte Weg.",
      "Diese zwei Regeln lösen viele Aufgaben ohne jede Formel. Bei einem Dreieck unter der v-t-Kurve rechnest du die Fläche als halbe Grundseite mal Höhe und hast den Weg. Das ist zugleich der Grund, warum beim gleichmässig beschleunigten Start der Weg mit ½at² wächst."],
     mc("phk-c4", "Was bedeutet die Fläche unter einer v-t-Kurve?",
       ["Die Beschleunigung", "Die Durchschnittsgeschwindigkeit", "Der zurückgelegte Weg", "Die verstrichene Zeit"], 2,
       "Geschwindigkeit mal Zeit ergibt Weg. Genau das leistet die Fläche unter der Kurve.")],
  ]);

  /* ------------------------------------------------ 2 Fall und Wurf */
  body("phys-fall-throw", [
    ["Warum alle Körper gleich schnell fallen",
     ["Die Erde zieht einen schweren Körper stärker an als einen leichten. Ein schwerer Körper ist aber auch träger, setzt der Beschleunigung also mehr Widerstand entgegen. Beide Effekte heben sich exakt auf.",
      "Deshalb fallen im Vakuum eine Feder und ein Hammer gleich schnell. Auf dem Mond wurde genau das vorgeführt. Auf der Erde bremst nur der Luftwiderstand die Feder.",
      "Für Prüfungsaufgaben gilt: Ohne ausdrücklichen Hinweis auf Luftwiderstand rechnest du mit <span class=\"kbd\">g = 9,81 m/s²</span> für jeden Körper, unabhängig von seiner Masse."],
     mc("pft-c1", "Warum fallen im Vakuum Feder und Bleikugel gleich schnell?",
       ["Weil die Erde beide gleich stark anzieht", "Weil die grössere Anziehung durch die grössere Trägheit genau ausgeglichen wird",
        "Weil die Feder leichter ist", "Weil im Vakuum keine Schwerkraft wirkt"], 1,
       "Die Anziehungskraft wächst mit der Masse, die Trägheit ebenfalls. Der Quotient aus beiden, die Beschleunigung, bleibt gleich.")],

    ["Die drei Fallformeln und was sie unterscheidet",
     ["Für den freien Fall aus der Ruhe gilt: <span class=\"kbd\">v = g·t</span> für die Geschwindigkeit und <span class=\"kbd\">h = ½·g·t²</span> für die Fallhöhe.",
      "Der Unterschied ist entscheidend. Die Geschwindigkeit wächst <em>linear</em> mit der Zeit, die Fallhöhe wächst <em>quadratisch</em>. Nach doppelter Zeit ist die Geschwindigkeit doppelt so gross, die Fallstrecke aber viermal so gross.",
      "Ist die Zeit nicht gegeben, hilft die dritte Beziehung <span class=\"kbd\">v² = 2·g·h</span>. Sie entsteht durch Einsetzen der einen Formel in die andere und erspart dir den Umweg über die Zeit."],
     mc("pft-c2", "Ein Stein fällt 2 Sekunden. Ein zweiter fällt 4 Sekunden. Wie verhalten sich die Fallhöhen?",
       ["2 zu 1", "4 zu 1", "8 zu 1", "1 zu 1"], 1,
       "Die Höhe wächst mit t². Doppelte Zeit bedeutet vierfache Fallhöhe, weil 2² = 4.")],

    ["Senkrechter Wurf: dasselbe Gesetz, anderes Vorzeichen",
     ["Wirfst du einen Ball nach oben, bremst g ihn ab, statt ihn zu beschleunigen. Rechnerisch ist das derselbe Vorgang, nur mit entgegengesetztem Vorzeichen.",
      "Im höchsten Punkt ist die Geschwindigkeit für einen Augenblick null, die Beschleunigung aber weiterhin 9,81 m/s² nach unten. Das ist die häufigste Denkfalle des Kapitels.",
      "Steigzeit und Fallzeit sind ohne Luftwiderstand gleich lang, und der Ball kommt mit demselben Tempo zurück, mit dem er geworfen wurde. Diese Symmetrie erlaubt schnelle Kontrollrechnungen."],
     mc("pft-c3", "Ein Ball ist im höchsten Punkt seiner Flugbahn. Was gilt dort?",
       ["v = 0 und a = 0", "v = 0 und a = 9,81 m/s² nach unten", "v maximal und a = 0", "v = 0 und a nach oben"], 1,
       "Die Geschwindigkeit ist null, die Erdbeschleunigung wirkt aber unverändert weiter nach unten. Sonst bliebe der Ball oben hängen.")],

    ["Der waagrechte Wurf besteht aus zwei unabhängigen Bewegungen",
     ["Wirfst du einen Ball waagrecht, passiert zweierlei gleichzeitig: er fliegt mit konstantem Tempo nach vorn und fällt gleichzeitig beschleunigt nach unten. Die beiden Bewegungen stören sich nicht.",
      "Deshalb rechnest du getrennt: waagrecht mit <span class=\"kbd\">x = v·t</span>, senkrecht mit <span class=\"kbd\">y = ½·g·t²</span>. Die Zeit ist die gemeinsame Grösse, die beide verbindet.",
      "Daraus folgt ein überraschendes Ergebnis: Ein waagrecht abgeschossener und ein gleichzeitig fallen gelassener Ball treffen zur selben Zeit auf dem Boden auf. Die Vorwärtsbewegung ändert an der Fallzeit nichts."],
     tf("pft-c4", "Ein waagrecht abgeschossener Ball braucht länger bis zum Boden als ein gleichzeitig fallen gelassener.", false,
       "Die waagrechte und die senkrechte Bewegung sind unabhängig. Für die Fallzeit zählt nur die Höhe, nicht die Vorwärtsgeschwindigkeit.")],
  ]);

  /* ------------------------------------------------ 3 Newton */
  body("phys-newton-forces", [
    ["Das Trägheitsprinzip widerspricht dem Alltagsgefühl",
     ["Im Alltag bleibt alles stehen, wenn man aufhört zu schieben. Daraus schliesst man leicht, Bewegung brauche dauernd eine Kraft. Das ist falsch.",
      "Newtons erstes Gesetz sagt: Ohne resultierende Kraft bleibt ein Körper in Ruhe oder bewegt sich geradlinig gleichförmig weiter. Dass der geschobene Kasten stehen bleibt, liegt an der Reibung, nicht am Fehlen einer Antriebskraft.",
      "Im Weltraum, wo kaum Reibung wirkt, fliegt eine Sonde ohne Antrieb jahrzehntelang weiter. Das ist der Normalfall, nicht die Ausnahme."],
     mc("pnf-c1", "Warum bleibt ein geschobener Kasten stehen, sobald man aufhört zu schieben?",
       ["Weil Bewegung eine dauernde Kraft braucht", "Weil die Reibungskraft ihn abbremst",
        "Weil die Trägheit ihn stoppt", "Weil die Schwerkraft nach hinten wirkt"], 1,
       "Ohne Reibung würde er weitergleiten. Die Reibung ist die bremsende Kraft, nicht das Fehlen des Schiebens.")],

    ["F = m·a ist eine Ursache-Wirkungs-Aussage",
     ["Das zweite Gesetz lautet <span class=\"kbd\">F = m · a</span>. Es sagt: Die <em>resultierende</em> Kraft erzeugt eine Beschleunigung, die proportional zur Kraft und umgekehrt proportional zur Masse ist.",
      "Entscheidend ist das Wort resultierend. Wenn zwei Menschen mit je 200 Newton in entgegengesetzte Richtungen ziehen, ist die Summe null und nichts beschleunigt, obwohl beide Kräfte wirken.",
      "Umgekehrt gelesen liefert die Formel ein Messverfahren: Misst du Masse und Beschleunigung, kennst du die Kraft. Genau so ist das Newton definiert, nämlich als die Kraft, die ein Kilogramm mit einem Meter pro Sekundenquadrat beschleunigt."],
     mc("pnf-c2", "Zwei Kräfte von je 200 N ziehen an einem Körper in entgegengesetzte Richtungen. Was folgt?",
       ["Der Körper beschleunigt mit doppelter Kraft", "Die resultierende Kraft ist null, es gibt keine Beschleunigung",
        "Der Körper bewegt sich zur stärkeren Seite", "Die Masse verdoppelt sich"], 1,
       "In F = m·a steht die resultierende Kraft. Heben sich die Kräfte auf, bleibt der Bewegungszustand unverändert.")],

    ["Actio und Reactio greifen an verschiedenen Körpern an",
     ["Das dritte Gesetz sagt: Übt Körper A eine Kraft auf B aus, übt B eine gleich grosse, entgegengesetzte Kraft auf A aus.",
      "Die häufigste Fehlvorstellung lautet, dass sich diese beiden Kräfte aufheben und deshalb nie etwas beschleunigt. Das stimmt nicht, weil sie an <em>verschiedenen</em> Körpern angreifen.",
      "Beim Gehen drückst du nach hinten gegen den Boden, der Boden drückt nach vorn gegen dich. Die Kraft auf dich beschleunigt dich, die Kraft auf die Erde beschleunigt die Erde. Nur ist die Erde so schwer, dass davon nichts zu sehen ist."],
     tf("pnf-c3", "Actio und Reactio heben sich gegenseitig auf, deshalb kann nichts beschleunigt werden.", false,
       "Beide Kräfte greifen an verschiedenen Körpern an. Für die Beschleunigung eines Körpers zählen nur die Kräfte, die an ihm selbst angreifen.")],

    ["Gewichtskraft ist nicht Masse",
     ["Die <strong>Masse</strong> misst, wie viel Materie vorhanden ist. Sie ist überall gleich, in Kilogramm gemessen. Die <strong>Gewichtskraft</strong> ist die Kraft, mit der ein Himmelskörper daran zieht: <span class=\"kbd\">F = m · g</span>, in Newton.",
      "Auf dem Mond hat eine Person dieselbe Masse wie auf der Erde, ihre Gewichtskraft beträgt aber nur etwa ein Sechstel, weil g dort kleiner ist.",
      "Im Alltag sagt man «ich wiege 70 Kilo» und meint die Masse. Physikalisch korrekt sind 70 kg Masse und rund 687 Newton Gewichtskraft. In Prüfungsaufgaben musst du diese beiden Grössen streng trennen."],
     mc("pnf-c4", "Ein Astronaut mit 80 kg Masse steht auf dem Mond. Was ändert sich gegenüber der Erde?",
       ["Die Masse wird kleiner", "Die Gewichtskraft wird kleiner", "Beides bleibt gleich", "Beides wird kleiner"], 1,
       "Die Masse ist ortsunabhängig. Nur g ist auf dem Mond kleiner, deshalb sinkt die Gewichtskraft auf etwa ein Sechstel.")],
  ]);

  /* ------------------------------------------------ 4 Reibung und Statik */
  body("phys-friction-statics", [
    ["Haftreibung ist grösser als Gleitreibung",
     ["Solange ein Körper ruht, wirkt die <strong>Haftreibung</strong>. Sie passt sich der angreifenden Kraft an und verhindert den Bewegungsbeginn, bis eine Grenze überschritten ist.",
      "Ist diese Grenze überschritten, rutscht der Körper, und es wirkt die meist kleinere <strong>Gleitreibung</strong>. Deshalb ist das Anschieben eines Schranks schwerer als das Weiterschieben.",
      "Für beide gilt <span class=\"kbd\">F_R = μ · F_N</span>. Die Reibungskraft hängt also von der Normalkraft ab, nicht von der Auflagefläche. Ein breiter und ein schmaler Block aus demselben Material mit gleicher Masse rutschen gleich."],
     mc("pfs-c1", "Wovon hängt die Reibungskraft nach dem einfachen Modell ab?",
       ["Von der Auflagefläche", "Von der Normalkraft und der Materialpaarung",
        "Von der Geschwindigkeit", "Vom Volumen des Körpers"], 1,
       "F_R = μ · F_N. Die Fläche kürzt sich heraus, weil bei grösserer Fläche der Druck entsprechend sinkt.")],

    ["Die schiefe Ebene zerlegt die Gewichtskraft",
     ["Auf einer schiefen Ebene wirkt die Gewichtskraft weiterhin senkrecht nach unten. Für die Rechnung zerlegt man sie in zwei Anteile: einen parallel zur Ebene, der hangabwärts zieht, und einen senkrecht dazu, der den Körper auf die Unterlage drückt.",
      "Mit dem Neigungswinkel α gilt <span class=\"kbd\">F_H = m·g·sin α</span> für den Hangabtrieb und <span class=\"kbd\">F_N = m·g·cos α</span> für die Normalkraft.",
      "Daraus folgt ein elegantes Ergebnis: Der Körper beginnt genau dann zu rutschen, wenn tan α grösser wird als die Haftreibungszahl μ. Die Masse spielt dabei keine Rolle, weil sie sich herauskürzt."],
     mc("pfs-c2", "Wie gross ist der Hangabtrieb auf einer schiefen Ebene?",
       ["m·g", "m·g·cos α", "m·g·sin α", "m·g·tan α"], 2,
       "Der hangparallele Anteil der Gewichtskraft ist m·g·sin α. Bei α = 0 ist er null, bei 90 Grad gleich der vollen Gewichtskraft.")],

    ["Drehmoment: Kraft allein genügt nicht",
     ["Ob sich etwas dreht, hängt nicht nur von der Kraft ab, sondern auch davon, wo sie angreift. Das Produkt aus Kraft und Hebelarm heisst <strong>Drehmoment</strong>: <span class=\"kbd\">M = F · r</span>.",
      "Der Hebelarm ist der <em>senkrechte</em> Abstand zwischen Drehachse und Wirkungslinie der Kraft, nicht einfach die Länge des Hebels. Greift die Kraft schräg an, zählt nur der senkrechte Anteil.",
      "Deshalb öffnet sich eine Tür am Griff leicht und nahe am Scharnier kaum. Dieselbe Kraft, anderer Hebelarm, völlig anderes Drehmoment."],
     mc("pfs-c3", "Warum lässt sich eine Tür am Griff leichter öffnen als nahe am Scharnier?",
       ["Weil dort die Kraft grösser ist", "Weil der Hebelarm grösser ist und damit das Drehmoment",
        "Weil die Reibung kleiner ist", "Weil die Masse dort geringer ist"], 1,
       "M = F · r. Bei gleichem F erzeugt ein grösserer Hebelarm ein grösseres Drehmoment.")],

    ["Gleichgewicht verlangt zwei Bedingungen",
     ["Ein Körper ruht nur dann wirklich, wenn zwei Bedingungen erfüllt sind. Erstens muss die Summe aller Kräfte null sein, sonst würde er sich verschieben.",
      "Zweitens muss die Summe aller Drehmomente null sein, sonst würde er sich drehen, selbst wenn er an Ort bleibt.",
      "Bei Balkenaufgaben wählst du die Drehachse geschickt: Legst du sie in einen Punkt, an dem eine unbekannte Kraft angreift, fällt deren Drehmoment weg und die Rechnung wird deutlich kürzer."],
     tf("pfs-c4", "Wenn die Summe aller Kräfte null ist, kann sich ein Körper trotzdem noch drehen.", true,
       "Zwei gleich grosse, entgegengesetzte Kräfte an verschiedenen Angriffspunkten ergeben zusammen null, erzeugen aber ein Drehmoment. Deshalb braucht Gleichgewicht beide Bedingungen.")],
  ]);

  /* ------------------------------------------------ 5 Arbeit und Leistung */
  body("phys-work-power", [
    ["Arbeit braucht Kraft und Weg gleichzeitig",
     ["Physikalische <strong>Arbeit</strong> wird nur verrichtet, wenn eine Kraft einen Körper verschiebt: <span class=\"kbd\">W = F · s</span>. Fehlt eines von beiden, ist die Arbeit null.",
      "Ein schweres Paket regungslos zu halten ist anstrengend, aber physikalisch keine Arbeit, weil kein Weg zurückgelegt wird. Die Anstrengung entsteht im Muskel, nicht am Paket.",
      "Ebenso verrichtet das Tragen eines Koffers waagrecht über einen Flur keine Arbeit gegen die Schwerkraft, weil Kraft und Weg senkrecht zueinander stehen. Nur der Anteil der Kraft <em>in</em> Wegrichtung zählt."],
     mc("pwp-c1", "Du hältst eine Hantel 30 Sekunden lang regungslos. Wie viel physikalische Arbeit verrichtest du an ihr?",
       ["Sehr viel, weil es anstrengend ist", "Null, weil kein Weg zurückgelegt wird",
        "Genau m·g·30", "Das hängt von der Masse ab"], 1,
       "W = F · s. Ohne Weg ist die Arbeit null, unabhängig davon, wie anstrengend das Halten ist.")],

    ["Leistung ist Arbeit pro Zeit",
     ["Zwei Personen tragen dieselbe Kiste in den zweiten Stock. Beide verrichten dieselbe Arbeit. Wer schneller ist, erbringt die grössere <strong>Leistung</strong>: <span class=\"kbd\">P = W / t</span>.",
      "Die Einheit Watt ist Joule pro Sekunde. Ein 60-Watt-Gerät setzt also 60 Joule pro Sekunde um. Ein Mensch schafft dauerhaft rund 100 Watt, kurzfristig ein Vielfaches davon.",
      "Setzt man W = F·s und s/t = v ein, ergibt sich die praktische Form <span class=\"kbd\">P = F · v</span>. Sie erklärt, warum ein Auto bei hoher Geschwindigkeit mehr Motorleistung braucht, obwohl die Kraft ähnlich bleibt."],
     mc("pwp-c2", "Zwei Personen tragen dieselbe Last gleich hoch, eine in 10 s, die andere in 20 s. Was unterscheidet sie?",
       ["Die verrichtete Arbeit", "Die Leistung", "Die Kraft", "Nichts"], 1,
       "Die Arbeit ist identisch, weil Kraft und Weg gleich sind. Die schnellere Person hat die doppelte Leistung.")],

    ["Der Wirkungsgrad ist immer kleiner als eins",
     ["Kein Gerät setzt die zugeführte Energie vollständig in Nutzen um. Der <strong>Wirkungsgrad</strong> <span class=\"kbd\">η = Nutzen / Aufwand</span> gibt diesen Anteil an, meist in Prozent.",
      "Eine Glühlampe wandelt etwa fünf Prozent in Licht, der Rest wird Wärme. Ein Elektromotor erreicht neunzig Prozent, ein Verbrennungsmotor etwa dreissig.",
      "Der Rest ist nicht verschwunden. Energie geht nie verloren, sie liegt nur in einer Form vor, die für den Zweck unbrauchbar ist, meist als Wärme. Ein Wirkungsgrad über hundert Prozent ist deshalb immer ein Rechenfehler."],
     tf("pwp-c3", "Ein Wirkungsgrad von 120 Prozent ist bei sehr effizienten Maschinen möglich.", false,
       "Das würde bedeuten, dass mehr Energie herauskommt, als hineingeht. Ein Wert über hundert Prozent zeigt immer einen Rechen- oder Denkfehler an.")],

    ["Energieformen ineinander umrechnen",
     ["Arbeit und Energie haben dieselbe Einheit, das Joule. Das ist kein Zufall: Arbeit ist genau die Energie, die bei einer Verschiebung übertragen wird.",
      "Deshalb kannst du Aufgaben oft über die Energie statt über Kräfte lösen. Hebst du eine Masse um die Höhe h, steckst du m·g·h an Energie hinein, unabhängig davon, ob du sie senkrecht hebst oder über eine Rampe schiebst.",
      "Die Rampe reduziert die nötige Kraft, verlängert aber den Weg im selben Verhältnis. Das ist die goldene Regel der Mechanik: An Arbeit lässt sich nichts sparen, nur an Kraft."],
     mc("pwp-c4", "Was bewirkt eine Rampe gegenüber dem senkrechten Heben?",
       ["Sie verringert die nötige Arbeit", "Sie verringert die nötige Kraft, verlängert aber den Weg",
        "Sie verringert die Masse", "Sie erhöht den Wirkungsgrad auf 100 Prozent"], 1,
       "Die goldene Regel der Mechanik: Was an Kraft gespart wird, muss an Weg zugelegt werden. Die Arbeit bleibt gleich.")],
  ]);

  /* ------------------------------------------------ 6 Energie */
  body("phys-energy", [
    ["Energie ist die Fähigkeit, Arbeit zu verrichten",
     ["Ein gespannter Bogen, ein hochgehobener Stein und ein fahrendes Auto haben eines gemeinsam: Sie können Arbeit verrichten. Genau das meint der Energiebegriff.",
      "Die wichtigsten mechanischen Formen sind die <strong>Lageenergie</strong> <span class=\"kbd\">E_pot = m·g·h</span> und die <strong>Bewegungsenergie</strong> <span class=\"kbd\">E_kin = ½·m·v²</span>.",
      "Beachte das Quadrat in der Bewegungsenergie. Doppelte Geschwindigkeit bedeutet vierfache Energie. Genau deshalb wächst der Bremsweg eines Autos quadratisch mit dem Tempo, nicht linear."],
     mc("pen-c1", "Ein Auto fährt doppelt so schnell. Wie ändert sich seine Bewegungsenergie?",
       ["sie verdoppelt sich", "sie vervierfacht sich", "sie bleibt gleich", "sie verachtfacht sich"], 1,
       "E_kin = ½mv². Die Geschwindigkeit steht im Quadrat, also führt doppeltes Tempo zur vierfachen Energie.")],

    ["Der Energieerhaltungssatz löst Aufgaben ohne Zeitrechnung",
     ["In einem System ohne Reibung bleibt die Summe aus Lage- und Bewegungsenergie konstant. Was oben an Lageenergie verloren geht, erscheint unten als Bewegungsenergie.",
      "Das erlaubt eine sehr kurze Rechnung: <span class=\"kbd\">m·g·h = ½·m·v²</span>. Die Masse kürzt sich heraus, und es bleibt <span class=\"kbd\">v = √(2gh)</span>.",
      "Der Vorteil gegenüber den Bewegungsgleichungen ist, dass die Zeit nirgends vorkommt. Bei einer Achterbahn oder einem Pendel ist der Weg kompliziert, die Energiebilanz aber einfach."],
     mc("pen-c2", "Warum kürzt sich bei m·g·h = ½mv² die Masse heraus?",
       ["Weil sie klein ist", "Weil sie auf beiden Seiten als Faktor steht",
        "Weil die Energie masselos ist", "Das ist ein Rechenfehler"], 1,
       "Beide Seiten enthalten m als Faktor. Deshalb hängt die Endgeschwindigkeit beim freien Fall nicht von der Masse ab.")],

    ["Reibung vernichtet keine Energie, sie entwertet sie",
     ["Ein rollender Ball wird langsamer und bleibt schliesslich liegen. Die Bewegungsenergie ist nicht verschwunden, sie wurde durch Reibung in Wärme umgewandelt.",
      "Diese Wärme ist zwar noch Energie, aber ungeordnet auf unzählige Teilchen verteilt. Sie lässt sich nicht mehr vollständig in geordnete Bewegung zurückverwandeln.",
      "Deshalb spricht man von <strong>Entwertung</strong> statt von Verlust. Der Energieerhaltungssatz gilt weiterhin, man muss die Wärme nur in die Bilanz aufnehmen."],
     tf("pen-c3", "Bei Reibung geht Energie verloren.", false,
       "Sie wird in Wärme umgewandelt und damit entwertet, nicht vernichtet. Die Gesamtenergie bleibt erhalten.")],

    ["Energie in der Bilanz: ein Rechenschema",
     ["Bei jeder Energieaufgabe hilft dasselbe Vorgehen. Zuerst legst du zwei Zeitpunkte fest, meist Anfang und Ende des Vorgangs.",
      "Dann schreibst du für beide Zeitpunkte alle vorhandenen Energieformen auf und setzt die Summen gleich. Kommt Reibung vor, addierst du auf der Endseite die Reibungsarbeit.",
      "Zuletzt löst du nach der gesuchten Grösse auf. Dieses Schema funktioniert bei Fall, Pendel, Feder, Achterbahn und schiefer Ebene gleichermassen und ersetzt das Auswendiglernen von Spezialformeln."],
     mc("pen-c4", "Wie berücksichtigst du Reibung in einer Energiebilanz?",
       ["Man kann sie ignorieren", "Man addiert die Reibungsarbeit auf der Endseite der Bilanz",
        "Man verdoppelt die Anfangsenergie", "Man zieht sie von der Masse ab"], 1,
       "Die durch Reibung in Wärme umgewandelte Energie erscheint als zusätzlicher Posten auf der Endseite, damit die Bilanz aufgeht.")],
  ]);

  /* ------------------------------------------------ 7 Druck und Hydrostatik */
  body("phys-pressure-hydro", [
    ["Druck ist Kraft pro Fläche",
     ["<span class=\"kbd\">p = F / A</span> sagt: Derselbe Kraftbetrag erzeugt auf kleiner Fläche grossen Druck und auf grosser Fläche kleinen Druck.",
      "Deshalb dringt ein Nagel ein und ein Brett nicht, obwohl du mit derselben Kraft drückst. Und deshalb sinkt man mit Schneeschuhen nicht ein: gleiche Gewichtskraft, viel grössere Fläche.",
      "Die Einheit Pascal ist ein Newton pro Quadratmeter und damit sehr klein. Der Luftdruck beträgt rund 100'000 Pascal, weshalb man meist in Hektopascal oder Bar rechnet."],
     mc("pph-c1", "Warum sinkt man mit Schneeschuhen weniger ein?",
       ["Weil die Gewichtskraft kleiner wird", "Weil die Auflagefläche grösser ist und der Druck damit sinkt",
        "Weil der Schnee härter wird", "Weil die Masse abnimmt"], 1,
       "p = F/A. Bei gleicher Kraft und grösserer Fläche wird der Druck kleiner, und der Schnee trägt.")],

    ["Der Schweredruck hängt nur von der Tiefe ab",
     ["In einer Flüssigkeit wächst der Druck mit der Tiefe: <span class=\"kbd\">p = ρ · g · h</span>. Entscheidend sind Dichte und Tiefe, nicht die Form oder Menge des Gefässes.",
      "Das ist das hydrostatische Paradoxon: In einem dünnen Rohr und in einem breiten Becken gleicher Höhe herrscht am Boden derselbe Druck, obwohl die Wassermengen völlig verschieden sind.",
      "Praktische Folge: Beim Tauchen kommt pro zehn Meter Wassertiefe etwa ein zusätzliches Bar dazu. Nach zehn Metern lastet also doppelt so viel Druck auf dir wie an der Oberfläche."],
     tf("pph-c2", "In einem breiten Becken ist der Bodendruck grösser als in einem schmalen Rohr gleicher Füllhöhe.", false,
       "p = ρ·g·h enthält keine Fläche und kein Volumen. Bei gleicher Höhe und Dichte ist der Bodendruck identisch.")],

    ["Auftrieb ist das Gewicht der verdrängten Flüssigkeit",
     ["Ein eingetauchter Körper erfährt eine Kraft nach oben, die genau so gross ist wie die Gewichtskraft der von ihm verdrängten Flüssigkeit. Das ist das Prinzip von Archimedes.",
      "Der Grund liegt im Schweredruck: Unten am Körper ist der Druck grösser als oben, weil dort die Wassersäule höher ist. Diese Druckdifferenz ergibt netto eine Kraft nach oben.",
      "Ob etwas schwimmt, entscheidet der Vergleich der Dichten. Ist der Körper insgesamt weniger dicht als die Flüssigkeit, schwimmt er. Ein Stahlschiff schwimmt, weil es zum grossen Teil Luft enthält."],
     mc("pph-c3", "Warum schwimmt ein Stahlschiff, obwohl Stahl dichter ist als Wasser?",
       ["Weil Stahl im Wasser leichter wird", "Weil die mittlere Dichte des Schiffs samt Hohlraum kleiner ist als die von Wasser",
        "Weil der Auftrieb unabhängig von der Dichte ist", "Weil das Schiff in Bewegung ist"], 1,
       "Entscheidend ist die mittlere Dichte des gesamten Körpers. Der grosse Luftanteil senkt sie unter die Dichte von Wasser.")],

    ["Hydraulik überträgt Kraft über Flächen",
     ["In einer geschlossenen Flüssigkeit breitet sich Druck gleichmässig in alle Richtungen aus. Das ist das Prinzip von Pascal und die Grundlage jeder Hydraulik.",
      "Sind zwei Kolben verbunden, gilt derselbe Druck an beiden: <span class=\"kbd\">F₁/A₁ = F₂/A₂</span>. Ein kleiner Kolben mit kleiner Kraft erzeugt also am grossen Kolben eine grosse Kraft.",
      "Gewonnen wird dabei nichts umsonst. Der kleine Kolben muss einen entsprechend längeren Weg zurücklegen. Auch hier gilt die goldene Regel: Kraft gespart, Weg zugelegt."],
     mc("pph-c4", "Ein hydraulischer Wagenheber verzehnfacht die Kraft. Was folgt für den Weg?",
       ["Er bleibt gleich", "Er wird zehnmal länger am kleinen Kolben", "Er wird zehnmal kürzer", "Er spielt keine Rolle"], 1,
       "Die Arbeit bleibt gleich. Zehnfache Kraft am grossen Kolben bedeutet zehnfacher Weg am kleinen.")],
  ]);

  /* ------------------------------------------------ 8 Temperatur */
  body("phys-temperature-expansion", [
    ["Temperatur misst Teilchenbewegung, nicht Wärmemenge",
     ["Je heisser ein Körper, desto heftiger bewegen sich seine Teilchen. Die Temperatur ist ein Mass für die mittlere Bewegungsenergie eines einzelnen Teilchens.",
      "Deshalb kann ein Funke über tausend Grad heiss sein und trotzdem harmlos: Er enthält kaum Teilchen und damit kaum Energie insgesamt. Eine Badewanne mit 40 Grad enthält ein Vielfaches an Energie.",
      "Temperatur und Wärmemenge sind also verschiedene Grössen. Die eine beschreibt die Intensität, die andere die Menge."],
     mc("pte-c1", "Warum ist ein 1000 Grad heisser Funke ungefährlicher als 40 Grad warmes Badewasser?",
       ["Weil Funken keine Energie haben", "Weil der Funke sehr wenige Teilchen und damit wenig Energie insgesamt enthält",
        "Weil Luft nicht leitet", "Weil die Temperatur falsch gemessen wird"], 1,
       "Temperatur ist Energie pro Teilchen. Die übertragene Wärmemenge hängt zusätzlich von der Menge der Teilchen ab.")],

    ["Die Kelvin-Skala hat einen echten Nullpunkt",
     ["Bei etwa minus 273,15 Grad Celsius hört jede Teilchenbewegung praktisch auf. Tiefer geht es nicht, deshalb ist dieser Punkt der absolute Nullpunkt und in Kelvin die Null.",
      "Die Umrechnung ist eine reine Verschiebung: <span class=\"kbd\">T(K) = θ(°C) + 273,15</span>. Die Schrittweite ist in beiden Skalen gleich.",
      "Daraus folgt eine wichtige Regel für Prüfungsaufgaben: Eine Temperatur<em>differenz</em> von 20 Grad Celsius entspricht 20 Kelvin, nicht 293 Kelvin. Nur Absolutwerte werden umgerechnet, Differenzen nicht."],
     mc("pte-c2", "Eine Temperatur steigt um 15 °C. Um wie viel Kelvin steigt sie?",
       ["um 15 K", "um 288 K", "um 258 K", "um 0 K"], 0,
       "Die Skalen haben dieselbe Schrittweite. Eine Differenz von 15 Grad Celsius ist genau 15 Kelvin.")],

    ["Warum sich Stoffe beim Erwärmen ausdehnen",
     ["Heftigere Teilchenbewegung braucht mehr Platz. Deshalb dehnen sich fast alle Stoffe beim Erwärmen aus und ziehen sich beim Abkühlen zusammen.",
      "Die Längenänderung ist proportional zur Ausgangslänge und zur Temperaturdifferenz: <span class=\"kbd\">Δl = α · l₀ · ΔT</span>. Der Materialkennwert α ist sehr klein, weshalb die Effekte im Alltag meist unauffällig bleiben.",
      "Sichtbar werden sie bei grossen Längen: Eisenbahnschienen brauchen Dehnungsfugen, Brücken bewegliche Lager. Ohne sie würde das Material sich selbst verbiegen."],
     tf("pte-c3", "Die Längenausdehnung hängt von der Ausgangslänge ab.", true,
       "Δl = α·l₀·ΔT. Ein langer Stab dehnt sich bei gleicher Erwärmung absolut stärker aus als ein kurzer.")],

    ["Die Anomalie des Wassers",
     ["Wasser verhält sich zwischen 0 und 4 Grad Celsius anders als fast alle Stoffe: Beim Abkühlen zieht es sich zunächst zusammen, unterhalb von 4 Grad dehnt es sich wieder aus.",
      "Deshalb hat Wasser bei 4 Grad seine grösste Dichte, und deshalb schwimmt Eis, statt zu sinken.",
      "Für die Natur ist das entscheidend. Ein See friert von oben zu, die Eisschicht isoliert, und darunter bleibt Wasser mit 4 Grad flüssig. Würde Eis sinken, würden Seen von unten her vollständig durchfrieren."],
     mc("pte-c4", "Warum frieren Seen von oben zu?",
       ["Weil kaltes Wasser leichter ist als warmes", "Weil Wasser bei 4 °C die grösste Dichte hat und Eis deshalb oben schwimmt",
        "Weil die Luft von oben kühlt", "Weil Eis schwerer als Wasser ist"], 1,
       "Wegen der Anomalie sinkt Wasser mit 4 Grad nach unten, kälteres Wasser und Eis bleiben oben.")],
  ]);

  /* ------------------------------------------------ 9 Wärme */
  body("phys-heat-thermo", [
    ["Wärme ist Energie auf Wanderschaft",
     ["Wärme ist keine Eigenschaft eines Körpers, sondern Energie, die wegen eines Temperaturunterschieds von einem Körper zum anderen fliesst. Von selbst immer von warm nach kalt.",
      "Deshalb ist die Formulierung «ein Körper enthält Wärme» physikalisch ungenau. Er enthält innere Energie. Wärme heisst nur der übertragene Anteil.",
      "Der Fluss hört auf, sobald beide Körper dieselbe Temperatur haben. Dann herrscht thermisches Gleichgewicht."],
     mc("pht-c1", "In welche Richtung fliesst Wärme von selbst?",
       ["von kalt nach warm", "von warm nach kalt", "in beide Richtungen gleich", "von gross nach klein"], 1,
       "Ohne äusseren Aufwand fliesst Wärme immer vom wärmeren zum kälteren Körper. Das ist der zweite Hauptsatz.")],

    ["Die Wärmekapazität erklärt, warum Wasser so träge ist",
     ["Wie viel Energie nötig ist, um einen Stoff zu erwärmen, hängt vom Material ab: <span class=\"kbd\">Q = c · m · ΔT</span>. Die spezifische Wärmekapazität c gibt an, wie viel Energie ein Kilogramm für ein Kelvin braucht.",
      "Wasser hat mit rund 4180 J/(kg·K) einen aussergewöhnlich hohen Wert. Eisen liegt bei etwa 450, also fast zehnmal tiefer.",
      "Das erklärt den Alltag: Eine Pfanne ist sofort heiss, das Wasser darin braucht Minuten. Und es erklärt das Klima: Das Meer erwärmt sich im Sommer langsam und gibt die Wärme im Winter langsam wieder ab."],
     mc("pht-c2", "Warum ist eine Eisenpfanne schneller heiss als das Wasser darin?",
       ["Weil Eisen dichter ist", "Weil Eisen eine viel kleinere spezifische Wärmekapazität hat",
        "Weil Wasser die Wärme reflektiert", "Weil die Pfanne direkt auf der Platte steht"], 1,
       "Eisen braucht pro Kilogramm und Kelvin rund ein Zehntel der Energie von Wasser, deshalb steigt seine Temperatur viel schneller.")],

    ["Mischungsaufgaben sind Energiebilanzen",
     ["Bringt man zwei Körper unterschiedlicher Temperatur zusammen, gibt der wärmere genau so viel Wärme ab, wie der kältere aufnimmt, sofern nichts nach aussen verloren geht.",
      "Rechnerisch: <span class=\"kbd\">Q_ab = Q_auf</span>, also <span class=\"kbd\">c₁·m₁·(T₁ − T_M) = c₂·m₂·(T_M − T₂)</span>. Gesucht ist meist die Mischtemperatur T_M.",
      "Die häufigste Fehlerquelle ist das Vorzeichen. Schreibe konsequent «wärmerer Anfangswert minus Mischtemperatur» auf der einen und «Mischtemperatur minus kälterer Anfangswert» auf der anderen Seite, dann sind beide Klammern positiv."],
     tf("pht-c3", "Bei einer Mischung ist die abgegebene Wärme gleich der aufgenommenen, wenn keine Verluste auftreten.", true,
       "Das ist die Energieerhaltung in Form einer Wärmebilanz und die Grundlage jeder Mischungsaufgabe.")],

    ["Die beiden Hauptsätze in Alltagssprache",
     ["Der <strong>erste Hauptsatz</strong> ist die Energieerhaltung: Energie kann weder erzeugt noch vernichtet, nur umgewandelt werden. Ein Perpetuum mobile erster Art ist damit unmöglich.",
      "Der <strong>zweite Hauptsatz</strong> ergänzt eine Richtung: Wärme fliesst von selbst nur von warm nach kalt, und keine Maschine kann Wärme vollständig in Arbeit umwandeln.",
      "Zusammen erklären sie, warum Kraftwerke Kühltürme brauchen und warum ein Kühlschrank Strom benötigt. Er transportiert Wärme gegen die natürliche Richtung, und das geht nur mit Aufwand."],
     mc("pht-c4", "Warum braucht ein Kühlschrank Strom?",
       ["Um Kälte zu erzeugen", "Um Wärme entgegen der natürlichen Richtung von kalt nach warm zu transportieren",
        "Um die Tür dicht zu halten", "Um Energie zu vernichten"], 1,
       "Kälte wird nicht erzeugt, Wärme wird nach aussen gepumpt. Gegen die natürliche Flussrichtung braucht das Arbeit.")],
  ]);

  /* ------------------------------------------------ 10 Aggregatzustände */
  body("phys-states", [
    ["Drei Zustände, drei Ordnungsgrade",
     ["Im <strong>festen</strong> Zustand sitzen die Teilchen an festen Plätzen und schwingen nur. Deshalb haben Festkörper feste Form und festes Volumen.",
      "Im <strong>flüssigen</strong> Zustand können die Teilchen aneinander vorbeigleiten, bleiben aber in Kontakt. Das Volumen bleibt fest, die Form passt sich dem Gefäss an.",
      "Im <strong>gasförmigen</strong> Zustand bewegen sich die Teilchen weitgehend frei. Weder Form noch Volumen sind festgelegt, ein Gas füllt jeden Raum aus."],
     mc("pst-c1", "Welcher Zustand hat festes Volumen, aber keine feste Form?",
       ["fest", "flüssig", "gasförmig", "alle drei"], 1,
       "Flüssigkeiten behalten ihr Volumen, passen sich aber der Gefässform an, weil die Teilchen aneinander vorbeigleiten können.")],

    ["Warum die Temperatur beim Schmelzen stehen bleibt",
     ["Erhitzt man Eis von minus 20 Grad, steigt die Temperatur zunächst gleichmässig. Bei null Grad bleibt sie stehen, obwohl weiter geheizt wird, bis alles geschmolzen ist.",
      "Der Grund: Die zugeführte Energie wird nicht in schnellere Bewegung investiert, sondern in das Aufbrechen der Bindungen zwischen den Teilchen. Erst wenn kein Eis mehr da ist, steigt die Temperatur wieder.",
      "Im Temperatur-Zeit-Diagramm erzeugt das die charakteristischen waagrechten Abschnitte, die <strong>Haltepunkte</strong> heissen. Sie sind ein sicheres Erkennungsmerkmal für Phasenübergänge."],
     tf("pst-c2", "Während Eis schmilzt, steigt seine Temperatur langsam weiter an.", false,
       "Die Temperatur bleibt bei null Grad konstant, bis alles Eis geschmolzen ist. Die Energie geht in das Lösen der Bindungen.")],

    ["Schmelzwärme und Verdampfungswärme",
     ["Die Energie für den Phasenübergang heisst latente Wärme, weil sie sich nicht als Temperaturanstieg zeigt. Für Wasser gilt: <span class=\"kbd\">q_S ≈ 334 kJ/kg</span> zum Schmelzen und <span class=\"kbd\">q_V ≈ 2256 kJ/kg</span> zum Verdampfen.",
      "Der Unterschied ist eindrücklich. Das Verdampfen braucht fast siebenmal so viel Energie wie das Schmelzen, weil dabei die Teilchen vollständig voneinander getrennt werden müssen.",
      "Deshalb kühlt Schwitzen so wirksam: Jedes verdunstende Gramm Wasser entzieht der Haut rund 2,3 Kilojoule. Und deshalb dauert es lange, bis ein Topf leer gekocht ist."],
     mc("pst-c3", "Warum kühlt Schwitzen den Körper?",
       ["Weil Wasser kalt ist", "Weil beim Verdunsten dem Körper Verdampfungswärme entzogen wird",
        "Weil die Haut nass wird", "Weil sich die Poren öffnen"], 1,
       "Für den Übergang flüssig zu gasförmig ist Energie nötig. Sie stammt aus der Haut, die dadurch abkühlt.")],

    ["Vollständige Erwärmungsaufgaben in Etappen rechnen",
     ["Soll Eis von minus 10 Grad zu Dampf von 100 Grad werden, rechnet man in Etappen: Eis erwärmen, Eis schmelzen, Wasser erwärmen, Wasser verdampfen.",
      "Für die Temperaturanstiege gilt jeweils <span class=\"kbd\">Q = c·m·ΔT</span>, für die Übergänge <span class=\"kbd\">Q = q·m</span> ohne ΔT, weil sich die Temperatur dort nicht ändert.",
      "Die Gesamtenergie ist die Summe aller Etappen. Der häufigste Fehler besteht darin, einen Phasenübergang zu überspringen oder für ihn fälschlich mit ΔT zu rechnen."],
     mc("pst-c4", "Welche Formel gilt für das Schmelzen selbst?",
       ["Q = c·m·ΔT", "Q = q·m", "Q = m·g·h", "Q = ½mv²"], 1,
       "Beim Phasenübergang ändert sich die Temperatur nicht, deshalb kommt ΔT nicht vor. Es gilt Q = q·m mit der spezifischen Schmelzwärme q.")],
  ]);

  /* ------------------------------------------------ 11 Elektrizität Grundlagen */
  body("phys-electric-basics", [
    ["Das Wassermodell trägt weiter, als man denkt",
     ["Stelle dir einen Wasserkreislauf vor. Die Pumpe entspricht der <strong>Spannung</strong>, der Wasserfluss dem <strong>Strom</strong>, eine Engstelle im Rohr dem <strong>Widerstand</strong>.",
      "Die Pumpe treibt, die Engstelle bremst, und was tatsächlich fliesst, ergibt sich aus beidem. Genau so verhalten sich U, R und I.",
      "Das Modell hat Grenzen, aber es verhindert die häufigste Verwechslung: Spannung fliesst nicht. Sie liegt an. Fliessen tut nur der Strom."],
     mc("peb-c1", "Welche Aussage ist korrekt?",
       ["Spannung fliesst durch den Draht", "Strom liegt am Bauteil an",
        "Spannung liegt an, Strom fliesst", "Widerstand fliesst"], 2,
       "Die Spannung liegt zwischen zwei Punkten an und treibt den Strom, der durch den Leiter fliesst.")],

    ["Die drei Grössen und ihre Definitionen",
     ["<strong>Stromstärke I</strong> ist Ladung pro Zeit, gemessen in Ampere. Ein Ampere bedeutet, dass pro Sekunde ein Coulomb Ladung durch den Querschnitt fliesst.",
      "<strong>Spannung U</strong> ist Energie pro Ladung, gemessen in Volt. Ein Volt heisst, dass jedes Coulomb ein Joule Energie mitbekommt.",
      "<strong>Widerstand R</strong> ist das Verhältnis von Spannung zu Strom, gemessen in Ohm. Er sagt, wie viel Spannung nötig ist, um ein bestimmtes Ampere durchzudrücken."],
     mc("peb-c2", "Was bedeutet eine Spannung von 1 Volt?",
       ["Ein Coulomb pro Sekunde fliesst", "Jedes Coulomb Ladung trägt ein Joule Energie",
        "Der Widerstand beträgt 1 Ohm", "Die Leistung beträgt 1 Watt"], 1,
       "Spannung ist Energie pro Ladung. Ein Volt entspricht einem Joule pro Coulomb.")],

    ["Das ohmsche Gesetz und seine Grenzen",
     ["<span class=\"kbd\">U = R · I</span> verbindet die drei Grössen. Kennst du zwei, berechnest du die dritte. In dieser Form wird das Gesetz in fast jeder Aufgabe gebraucht.",
      "Grafisch bedeutet es: Trägt man U über I auf, ergibt sich bei konstantem Widerstand eine Gerade durch den Ursprung. Ihre Steigung ist R.",
      "Nicht jedes Bauteil ist ohmsch. Bei einer Glühlampe steigt der Widerstand mit der Temperatur, die Kennlinie krümmt sich. Für Prüfungsaufgaben mit Widerständen gilt das Gesetz aber uneingeschränkt."],
     mc("peb-c3", "An einem Widerstand von 20 Ω liegen 10 V an. Wie gross ist der Strom?",
       ["200 A", "2 A", "0,5 A", "0,2 A"], 2,
       "I = U/R = 10 V / 20 Ω = 0,5 A.")],

    ["Was den Widerstand eines Leiters bestimmt",
     ["Ein Draht leitet umso schlechter, je länger und je dünner er ist: <span class=\"kbd\">R = ρ · l / A</span>. Hinzu kommt das Material über den spezifischen Widerstand ρ.",
      "Anschaulich: Ein langes, enges Rohr bremst das Wasser stärker als ein kurzes, weites. Kupfer leitet gut, Eisen schlechter, Kunststoff praktisch gar nicht.",
      "Deshalb verwendet man für Überlandleitungen dicke Leiter, und deshalb erwärmt sich ein zu dünnes Verlängerungskabel. Der Widerstand setzt elektrische Energie in Wärme um."],
     tf("peb-c4", "Ein längerer Draht aus demselben Material hat bei gleichem Querschnitt einen grösseren Widerstand.", true,
       "R = ρ·l/A. Der Widerstand wächst proportional zur Länge.")],
  ]);

  /* ------------------------------------------------ 12 Schaltungen */
  body("phys-circuits-power", [
    ["Reihenschaltung: ein Weg für alle",
     ["Liegen Bauteile hintereinander, gibt es nur einen Strompfad. Durch jedes Bauteil fliesst deshalb derselbe Strom.",
      "Die Spannung dagegen teilt sich auf. Jedes Bauteil bekommt den Anteil, der seinem Widerstand entspricht, und alle Teilspannungen ergeben zusammen die Quellenspannung.",
      "Der Gesamtwiderstand ist die Summe: <span class=\"kbd\">R = R₁ + R₂ + …</span>. Er ist also immer grösser als der grösste Einzelwiderstand. Fällt ein Bauteil aus, ist der Kreis unterbrochen, wie bei einer alten Lichterkette."],
     mc("pcp-c1", "Was ist in einer Reihenschaltung für alle Bauteile gleich?",
       ["die Spannung", "der Strom", "der Widerstand", "die Leistung"], 1,
       "Es gibt nur einen Pfad, deshalb fliesst überall derselbe Strom. Die Spannung teilt sich auf.")],

    ["Parallelschaltung: mehrere Wege",
     ["Liegen Bauteile nebeneinander, hat jedes seinen eigenen Pfad. An jedem liegt deshalb dieselbe Spannung an.",
      "Der Strom teilt sich auf: Durch den kleineren Widerstand fliesst mehr. Die Teilströme addieren sich zum Gesamtstrom.",
      "Der Gesamtwiderstand berechnet sich über die Kehrwerte: <span class=\"kbd\">1/R = 1/R₁ + 1/R₂ + …</span>. Er ist immer <em>kleiner</em> als der kleinste Einzelwiderstand, weil jeder zusätzliche Pfad dem Strom mehr Möglichkeiten gibt."],
     mc("pcp-c2", "Zwei Widerstände von je 10 Ω sind parallel geschaltet. Wie gross ist der Gesamtwiderstand?",
       ["20 Ω", "10 Ω", "5 Ω", "0,2 Ω"], 2,
       "1/R = 1/10 + 1/10 = 2/10, also R = 5 Ω. Zwei gleiche Widerstände parallel ergeben immer die Hälfte.")],

    ["Elektrische Leistung und Energie",
     ["Die Leistung ist <span class=\"kbd\">P = U · I</span>. Mit dem ohmschen Gesetz lassen sich daraus zwei nützliche Varianten bilden: <span class=\"kbd\">P = R·I²</span> und <span class=\"kbd\">P = U²/R</span>.",
      "Welche Form du wählst, hängt davon ab, welche zwei Grössen gegeben sind. Das erspart Zwischenrechnungen und Fehler.",
      "Die verbrauchte Energie ist Leistung mal Zeit. Auf der Stromrechnung steht sie in Kilowattstunden: Ein Gerät mit 2000 Watt verbraucht in einer halben Stunde eine Kilowattstunde."],
     mc("pcp-c3", "Ein Gerät mit 2000 W läuft 30 Minuten. Wie viel Energie verbraucht es?",
       ["0,5 kWh", "1 kWh", "2 kWh", "60 kWh"], 1,
       "2 kW mal 0,5 h ergibt 1 kWh.")],

    ["Warum Sicherungen den Strom begrenzen",
     ["Jeder Leiter erwärmt sich, wenn Strom fliesst, denn ein Teil der elektrischen Energie wird im Widerstand in Wärme umgesetzt. Bei zu hohem Strom wird diese Wärme gefährlich.",
      "Eine Sicherung unterbricht den Kreis, sobald der Strom einen Grenzwert überschreitet. Sie schützt damit die Leitung, nicht in erster Linie das Gerät.",
      "Deshalb ist die Frage «wie viele Geräte darf ich an eine Steckdose hängen» eine Rechenaufgabe: Alle Leistungen addieren, durch 230 Volt teilen und mit dem Sicherungswert vergleichen."],
     tf("pcp-c4", "Eine Sicherung schützt in erster Linie die Leitung vor Überhitzung.", true,
       "Sie unterbricht, bevor der Strom die Leitung so stark erwärmt, dass Brandgefahr entsteht.")],
  ]);

  /* ------------------------------------------------ 13 Magnetismus */
  body("phys-magnetism", [
    ["Magnetpole treten immer paarweise auf",
     ["Jeder Magnet hat einen Nord- und einen Südpol. Gleichnamige Pole stossen sich ab, ungleichnamige ziehen sich an.",
      "Zerbricht man einen Magneten in der Mitte, entstehen nicht ein Nord- und ein Südstück, sondern zwei vollständige Magnete mit je zwei Polen. Das gilt beliebig weit hinunter.",
      "Einen isolierten magnetischen Einzelpol gibt es nach heutigem Wissen nicht. Darin unterscheidet sich der Magnetismus grundlegend von der Elektrizität, wo es einzelne Ladungen gibt."],
     mc("pmg-c1", "Was passiert, wenn man einen Stabmagneten halbiert?",
       ["Man erhält je ein Nord- und ein Südstück", "Man erhält zwei vollständige Magnete mit je zwei Polen",
        "Der Magnetismus verschwindet", "Beide Hälften sind Nordpole"], 1,
       "Magnetische Pole treten nur paarweise auf. Jedes Bruchstück ist wieder ein vollständiger Magnet.")],

    ["Jeder Strom erzeugt ein Magnetfeld",
     ["Ørsted entdeckte 1820, dass eine Kompassnadel neben einem stromdurchflossenen Draht ausschlägt. Damit war klar, dass Elektrizität und Magnetismus zusammenhängen.",
      "Um einen geraden Draht bilden die Feldlinien konzentrische Kreise. Wickelt man den Draht zu einer <strong>Spule</strong>, addieren sich die Felder der Windungen zu einem starken, geordneten Feld.",
      "Das ist der Elektromagnet. Sein grosser Vorteil gegenüber dem Dauermagneten: Er lässt sich ein- und ausschalten und in der Stärke regeln. Darauf beruhen Relais, Türöffner und Schrottplatzkräne."],
     mc("pmg-c2", "Was ist der wesentliche Vorteil eines Elektromagneten gegenüber einem Dauermagneten?",
       ["Er ist stärker", "Er lässt sich ein- und ausschalten und regeln",
        "Er braucht keinen Strom", "Er hat nur einen Pol"], 1,
       "Die Steuerbarkeit über den Strom ist der entscheidende praktische Vorteil.")],

    ["Die Lorentzkraft treibt jeden Motor an",
     ["Befindet sich ein stromdurchflossener Leiter in einem Magnetfeld, wirkt auf ihn eine Kraft. Sie steht senkrecht sowohl auf der Stromrichtung als auch auf der Feldrichtung.",
      "Die Richtung findest du mit der Drei-Finger-Regel der rechten Hand: Daumen Strom, Zeigefinger Feld, Mittelfinger Kraft.",
      "Genau diese Kraft dreht die Spule im Elektromotor. Damit die Drehung nicht nach einer halben Umdrehung stoppt, kehrt ein Kommutator die Stromrichtung im richtigen Moment um."],
     mc("pmg-c3", "Worauf beruht die Funktion eines Elektromotors?",
       ["Auf der Anziehung ungleicher Ladungen", "Auf der Kraft auf einen stromdurchflossenen Leiter im Magnetfeld",
        "Auf der Reibung der Spule", "Auf der Wärmeausdehnung"], 1,
       "Die Lorentzkraft auf den stromdurchflossenen Leiter erzeugt das Drehmoment.")],

    ["Induktion: Bewegung erzeugt Spannung",
     ["Der umgekehrte Vorgang ist ebenso wichtig. Ändert sich das Magnetfeld durch eine Spule, entsteht in ihr eine Spannung. Das heisst <strong>Induktion</strong>.",
      "Entscheidend ist die <em>Änderung</em>. Ein ruhender Magnet in einer ruhenden Spule erzeugt nichts. Erst Bewegung oder ein sich änderndes Feld induziert eine Spannung.",
      "Darauf beruht die gesamte Stromerzeugung: Im Generator wird eine Spule im Magnetfeld gedreht. Und darauf beruht der Transformator, der mit Wechselstrom Spannungen hoch- und heruntersetzt."],
     tf("pmg-c4", "Ein ruhender Magnet in einer ruhenden Spule induziert eine Spannung.", false,
       "Induktion setzt eine Änderung des Magnetfeldes voraus. Ohne Bewegung oder Feldänderung entsteht keine Spannung.")],
  ]);

  /* ------------------------------------------------ 14 Optik */
  body("phys-optics", [
    ["Licht breitet sich geradlinig aus",
     ["Solange nichts im Weg ist, läuft Licht geradeaus. Daraus folgen Schatten, Sonnenfinsternisse und die Funktion der Lochkamera.",
      "Ein <strong>Kernschatten</strong> entsteht, wo gar kein Licht hinkommt, ein <strong>Halbschatten</strong> dort, wo nur ein Teil der Lichtquelle sichtbar bleibt. Deshalb hat ein Schatten bei einer ausgedehnten Lampe weiche Ränder.",
      "Das Strahlenmodell ist eine Vereinfachung, aber für alles in dieser Prüfung ausreichend. Es erlaubt, Wege mit Lineal und Winkelmesser zu konstruieren."],
     mc("pop-c1", "Wodurch entsteht ein Halbschatten?",
       ["Durch eine punktförmige Lichtquelle", "Durch eine ausgedehnte Lichtquelle, von der nur ein Teil sichtbar ist",
        "Durch Brechung", "Durch Reflexion am Boden"], 1,
       "Bei einer ausgedehnten Lichtquelle erreichen manche Bereiche nur Teile des Lichts. Dort entsteht der Halbschatten.")],

    ["Reflexion: Einfallswinkel gleich Ausfallswinkel",
     ["Trifft Licht auf eine glatte Fläche, wird es zurückgeworfen. Dabei ist der Einfallswinkel gleich dem Ausfallswinkel, beide gemessen zum <strong>Lot</strong>, also zur Senkrechten auf der Fläche.",
      "Wichtig für Zeichnungen: Die Winkel werden nie zur Oberfläche gemessen, sondern immer zum Lot. Das ist eine häufige Fehlerquelle.",
      "An rauen Flächen gilt das Gesetz für jeden Punkt weiterhin, die Oberflächennormalen zeigen aber in verschiedene Richtungen. Deshalb streut ein Blatt Papier das Licht, während ein Spiegel ein Bild erzeugt."],
     mc("pop-c2", "Wozu wird der Einfallswinkel gemessen?",
       ["zur Oberfläche", "zum Lot auf der Oberfläche", "zum Boden", "zur Lichtquelle"], 1,
       "Sowohl Einfalls- als auch Ausfallswinkel werden zum Lot gemessen, also zur Senkrechten auf der Fläche.")],

    ["Brechung: Richtungsänderung beim Medienwechsel",
     ["Geht Licht schräg von Luft in Wasser oder Glas über, ändert es seine Richtung. Der Grund ist die unterschiedliche Ausbreitungsgeschwindigkeit in den beiden Medien.",
      "Die Regel für die Prüfung: Beim Übergang ins dichtere Medium wird der Strahl <em>zum</em> Lot hin gebrochen, beim Übergang ins dünnere Medium <em>vom</em> Lot weg.",
      "Deshalb erscheint ein Stab im Wasser geknickt und ein Schwimmbad flacher, als es ist. Wird der Winkel beim Übergang ins dünnere Medium zu gross, tritt gar kein Licht mehr aus: Das ist die <strong>Totalreflexion</strong>, die Grundlage der Glasfaser."],
     mc("pop-c3", "Wie wird ein Lichtstrahl beim Übergang von Luft in Glas gebrochen?",
       ["vom Lot weg", "zum Lot hin", "gar nicht", "um genau 90 Grad"], 1,
       "Glas ist das optisch dichtere Medium. Der Strahl wird zum Lot hin gebrochen.")],

    ["Linsen sammeln oder zerstreuen",
     ["Eine <strong>Sammellinse</strong> ist in der Mitte dicker als am Rand. Achsenparallele Strahlen laufen nach dem Durchgang im Brennpunkt zusammen. Der Abstand dorthin ist die Brennweite f.",
      "Für die Bildkonstruktion genügen zwei Strahlen: der Parallelstrahl, der zum Brennpunktstrahl wird, und der Mittelpunktstrahl, der ungebrochen weiterläuft. Ihr Schnittpunkt ist der Bildpunkt.",
      "Die Linsengleichung <span class=\"kbd\">1/f = 1/g + 1/b</span> verbindet Brennweite, Gegenstandsweite und Bildweite. Ob das Bild vergrössert, verkleinert, aufrecht oder umgekehrt erscheint, hängt allein davon ab, wo der Gegenstand relativ zur Brennweite steht."],
     mc("pop-c4", "Welche beiden Strahlen genügen für die Bildkonstruktion an einer Sammellinse?",
       ["Zwei beliebige Strahlen", "Parallelstrahl und Mittelpunktstrahl",
        "Zwei Parallelstrahlen", "Nur der Brennpunktstrahl"], 1,
       "Der Parallelstrahl wird zum Brennpunktstrahl, der Mittelpunktstrahl läuft ungebrochen weiter. Ihr Schnittpunkt ergibt den Bildpunkt.")],
  ]);
})();

/* Chemie: ausgeschriebene Lehrtexte für alle 13 Kapitel. */
(function () {
  "use strict";
  var M = window.MNEMIKA;
  const { mc, tf } = M;

  function body(id, list) {
    var c = M.chapter(id);
    if (!c) return;
    c.depth = "full";
    c.blocks = list.map(function (b, i) {
      var blk = { id: "b" + (i + 1), label: b[0], body: b[1], check: b[2] };
      if (blk.check) {
        blk.check.blockId = blk.id; blk.check.blockNo = i + 1;
        blk.check.blockLabel = blk.label; blk.check.role = "check";
      }
      return blk;
    });
  }

  /* ------------------------------------------------ 1 Stoffe */
  body("chem-substances", [
    ["Reinstoff oder Gemisch, das ist die erste Frage",
     ["Ein <strong>Reinstoff</strong> besteht aus nur einer Teilchensorte. Er hat feste Kennwerte: einen bestimmten Schmelzpunkt, einen bestimmten Siedepunkt, eine bestimmte Dichte.",
      "Ein <strong>Gemisch</strong> enthält mehrere Reinstoffe nebeneinander. Seine Eigenschaften hängen von der Zusammensetzung ab und sind deshalb nicht fest. Salzwasser siedet je nach Salzgehalt bei verschiedenen Temperaturen.",
      "Daraus folgt ein praktisches Erkennungsmerkmal: Siedet ein Stoff bei genau einer Temperatur, ist es ein Reinstoff. Zieht sich das Sieden über einen Temperaturbereich, liegt ein Gemisch vor."],
     mc("chs-c1", "Eine Flüssigkeit siedet über einen Bereich von 78 bis 95 Grad. Was folgt daraus?",
       ["Es ist ein Reinstoff", "Es ist ein Gemisch", "Die Messung ist falsch", "Es ist ein Element"], 1,
       "Reinstoffe sieden bei einer festen Temperatur. Ein Siedebereich zeigt an, dass mehrere Stoffe vorliegen.")],

    ["Element oder Verbindung",
     ["Reinstoffe zerfallen in zwei Gruppen. Ein <strong>Element</strong> besteht aus nur einer Atomsorte und lässt sich chemisch nicht weiter zerlegen. Eisen, Sauerstoff und Gold sind Elemente.",
      "Eine <strong>Verbindung</strong> besteht aus mehreren Elementen in einem festen Zahlenverhältnis. Wasser ist immer H₂O, nie H₃O oder H₁,₅O.",
      "Der entscheidende Unterschied zum Gemisch: In einer Verbindung sind die Ausgangsstoffe chemisch gebunden und haben ihre Eigenschaften verloren. Natrium ist ein explosives Metall, Chlor ein giftiges Gas, zusammen ergeben sie Kochsalz."],
     mc("chs-c2", "Warum ist Kochsalz keine Mischung aus Natrium und Chlor?",
       ["Weil beide Stoffe fest sind", "Weil sie chemisch gebunden sind und dabei völlig neue Eigenschaften entstehen",
        "Weil man sie nicht trennen kann", "Weil das Verhältnis beliebig ist"], 1,
       "In einer Verbindung sind die Ausgangsstoffe chemisch verbunden. Ihre Eigenschaften verschwinden vollständig.")],

    ["Homogen oder heterogen",
     ["Ein <strong>homogenes</strong> Gemisch sieht auch unter dem Mikroskop einheitlich aus. Salzwasser, Luft und Messing gehören dazu. Man spricht bei Flüssigkeiten von einer Lösung.",
      "Ein <strong>heterogenes</strong> Gemisch zeigt erkennbare Bestandteile. Sand in Wasser, Öl in Wasser, Nebel und Rauch sind Beispiele.",
      "Die Unterscheidung bestimmt das Trennverfahren. Heterogene Gemische trennt man mechanisch durch Filtrieren oder Dekantieren. Homogene Gemische brauchen ein Verfahren, das einen Stoffeigenschaftsunterschied ausnutzt, etwa die Destillation."],
     mc("chs-c3", "Welches Verfahren trennt Salz von Wasser?",
       ["Filtrieren", "Dekantieren", "Eindampfen oder Destillieren", "Sieben"], 2,
       "Salzwasser ist homogen, das Salz geht durch jeden Filter. Man nutzt den Siedepunktunterschied.")],

    ["Trennverfahren folgen immer einem Eigenschaftsunterschied",
     ["Jedes Trennverfahren beruht auf genau einer Eigenschaft, in der sich die Bestandteile unterscheiden. Wer diese Eigenschaft benennt, hat die Aufgabe im Griff.",
      "<strong>Filtrieren</strong> nutzt die Teilchengrösse, <strong>Destillieren</strong> den Siedepunkt, <strong>Extrahieren</strong> die Löslichkeit, <strong>Chromatografie</strong> die unterschiedliche Haftung am Trägermaterial.",
      "In der Prüfung lautet die Frage oft: Welches Verfahren wählst du und warum? Die Antwort muss die ausgenutzte Eigenschaft nennen, nicht nur den Namen des Verfahrens."],
     mc("chs-c4", "Worauf beruht die Destillation?",
       ["Auf unterschiedlicher Dichte", "Auf unterschiedlichen Siedepunkten",
        "Auf unterschiedlicher Teilchengrösse", "Auf unterschiedlicher Farbe"], 1,
       "Der Stoff mit dem tieferen Siedepunkt verdampft zuerst und wird getrennt aufgefangen.")],
  ]);

  /* ------------------------------------------------ 2 Atombau */
  body("chem-atoms-pse", [
    ["Der Kern bestimmt, welches Element vorliegt",
     ["Ein Atom besteht aus einem winzigen Kern mit <strong>Protonen</strong> und <strong>Neutronen</strong> und einer vergleichsweise riesigen Hülle aus <strong>Elektronen</strong>.",
      "Die Grössenverhältnisse sind extrem: Wäre der Kern eine Kirsche in der Mitte eines Fussballstadions, läge die Hülle am Rand des Stadions. Ein Atom ist also fast leer.",
      "Allein die Zahl der Protonen entscheidet, um welches Element es sich handelt. Sechs Protonen bedeuten immer Kohlenstoff, egal wie viele Neutronen oder Elektronen dazukommen."],
     mc("cap-c1", "Was legt fest, um welches Element es sich handelt?",
       ["die Neutronenzahl", "die Protonenzahl", "die Elektronenzahl", "die Masse"], 1,
       "Die Protonenzahl ist die Ordnungszahl und definiert das Element eindeutig.")],

    ["Isotope und Ionen: was sich ändern darf",
     ["Ändert sich die <strong>Neutronen</strong>zahl, bleibt das Element dasselbe, nur die Masse ändert sich. Solche Varianten heissen Isotope. Kohlenstoff-12 und Kohlenstoff-14 sind beide Kohlenstoff.",
      "Ändert sich die <strong>Elektronen</strong>zahl, bleibt das Element ebenfalls dasselbe, aber es entsteht eine elektrische Ladung. Solche Teilchen heissen Ionen.",
      "Nur die Änderung der Protonenzahl macht aus einem Element ein anderes. Das passiert nicht bei chemischen Reaktionen, sondern nur bei Kernreaktionen."],
     mc("cap-c2", "Ein Atom verliert ein Elektron. Was entsteht?",
       ["ein anderes Element", "ein Isotop", "ein positiv geladenes Ion", "ein Neutron"], 2,
       "Bei Elektronenverlust überwiegen die Protonen, es entsteht ein positives Ion. Das Element bleibt dasselbe.")],

    ["Das Periodensystem ist nach Struktur geordnet",
     ["Die Elemente stehen nach steigender Protonenzahl. Diese Reihenfolge ist aber nicht das Interessante. Entscheidend ist, dass sich chemische Eigenschaften regelmässig wiederholen.",
      "Die <strong>Perioden</strong>, also die Zeilen, geben die Zahl der besetzten Elektronenschalen an. Die <strong>Hauptgruppen</strong>, also die Spalten, geben bei den Hauptgruppenelementen die Zahl der Aussenelektronen.",
      "Daraus folgt die ganze Nutzbarkeit: Alle Elemente einer Spalte verhalten sich chemisch ähnlich, weil sie gleich viele Aussenelektronen haben. Natrium und Kalium reagieren beide heftig mit Wasser, weil beide ein Aussenelektron abgeben wollen."],
     mc("cap-c3", "Was verrät die Hauptgruppennummer über ein Element?",
       ["die Zahl der Neutronen", "die Zahl der Schalen", "die Zahl der Aussenelektronen", "die Masse"], 2,
       "Bei Hauptgruppenelementen entspricht die Gruppennummer der Zahl der Valenzelektronen. Das erklärt ihr ähnliches Verhalten.")],

    ["Trends im Periodensystem lesen statt lernen",
     ["Innerhalb einer Periode nimmt die Kernladung von links nach rechts zu, während die Elektronen in derselben Schale bleiben. Der Kern zieht deshalb stärker, die Atome werden kleiner und die Elektronegativität steigt.",
      "Innerhalb einer Gruppe kommt nach unten jeweils eine Schale dazu. Die Aussenelektronen sind weiter weg und abgeschirmt, die Atome werden grösser und die Elektronegativität sinkt.",
      "Mit diesen zwei Sätzen kannst du fast jede Trendfrage beantworten, ohne Werte auswendig zu lernen. Fluor oben rechts ist das elektronegativste Element, die Alkalimetalle unten links geben am leichtesten Elektronen ab."],
     tf("cap-c4", "Die Elektronegativität nimmt innerhalb einer Gruppe nach unten zu.", false,
       "Nach unten kommen Schalen dazu, die Aussenelektronen sind weiter vom Kern entfernt und abgeschirmt. Die Elektronegativität sinkt.")],
  ]);

  /* ------------------------------------------------ 3 Schalen und Lewis */
  body("chem-shell-lewis", [
    ["Nur die äusserste Schale reagiert",
     ["Elektronen sitzen in Schalen um den Kern. Die inneren sind fest gebunden und an chemischen Reaktionen praktisch nicht beteiligt.",
      "Das chemische Verhalten bestimmen allein die Elektronen der äussersten Schale, die <strong>Valenzelektronen</strong>. Deshalb genügt es, sie darzustellen.",
      "Genau das leistet die Lewis-Schreibweise: Das Elementsymbol steht für Kern und innere Schalen, die Punkte und Striche ringsum für die Valenzelektronen."],
     mc("csl-c1", "Warum genügt es, in der Lewis-Schreibweise nur die Valenzelektronen zu zeichnen?",
       ["Weil die anderen nicht existieren", "Weil nur sie an chemischen Bindungen beteiligt sind",
        "Weil sie am leichtesten zu zählen sind", "Weil sie negativ geladen sind"], 1,
       "Innere Elektronen sind fest gebunden. Chemie spielt sich in der äussersten Schale ab.")],

    ["Die Oktettregel als Zielvorstellung",
     ["Die Edelgase sind chemisch fast untätig. Ihr gemeinsames Merkmal: eine volle Aussenschale, bei den meisten mit acht Elektronen.",
      "Daraus folgt die <strong>Oktettregel</strong>: Atome gehen Bindungen so ein, dass sie diesen Zustand erreichen. Sie geben Elektronen ab, nehmen welche auf oder teilen sie.",
      "Die Regel hat Ausnahmen, vor allem Wasserstoff mit zwei Elektronen und einige Elemente ab der dritten Periode. Für den Prüfungsstoff trägt sie aber sehr weit und erklärt fast alle Formeln."],
     mc("csl-c2", "Warum sind Edelgase chemisch so reaktionsträge?",
       ["Weil sie leicht sind", "Weil ihre äusserste Schale bereits voll besetzt ist",
        "Weil sie keine Elektronen haben", "Weil sie gasförmig sind"], 1,
       "Eine volle Aussenschale ist energetisch günstig. Es gibt keinen Antrieb, Elektronen abzugeben oder aufzunehmen.")],

    ["Bindende und freie Elektronenpaare unterscheiden",
     ["In einer Lewis-Formel bedeutet ein Strich zwischen zwei Atomen ein <strong>bindendes</strong> Elektronenpaar. Ein Strich an nur einem Atom ist ein <strong>freies</strong> Paar.",
      "Bei Wasser hat der Sauerstoff zwei bindende Paare zu den Wasserstoffatomen und zwei freie Paare. Zusammen sind das acht Elektronen, das Oktett ist erfüllt.",
      "Die freien Paare sind nicht bloss Dekoration. Sie brauchen Platz und drücken die Bindungen zusammen. Deshalb ist das Wassermolekül gewinkelt und nicht gestreckt, und genau deshalb ist es ein Dipol."],
     mc("csl-c3", "Warum ist das Wassermolekül gewinkelt?",
       ["Weil Wasserstoff leicht ist", "Weil die zwei freien Elektronenpaare am Sauerstoff Platz brauchen und die Bindungen zusammendrücken",
        "Weil es flüssig ist", "Weil Sauerstoff zwei Bindungen hat"], 1,
       "Die freien Elektronenpaare beanspruchen Raum und verkleinern den Bindungswinkel auf etwa 104,5 Grad.")],

    ["Eine Lewis-Formel Schritt für Schritt aufstellen",
     ["Zuerst zählst du alle Valenzelektronen aller beteiligten Atome zusammen. Bei CO₂ sind das 4 für Kohlenstoff und je 6 für die beiden Sauerstoffatome, zusammen 16.",
      "Dann setzt du das Atom mit der höchsten Bindigkeit in die Mitte und verbindest die anderen zunächst mit Einfachbindungen.",
      "Zuletzt verteilst du die restlichen Elektronen als freie Paare, bis jedes Atom sein Oktett hat. Fehlen Elektronen, machst du aus Einfachbindungen Doppel- oder Dreifachbindungen. Bei CO₂ führt das zu zwei Doppelbindungen."],
     tf("csl-c4", "Wenn nach dem Verteilen der Elektronen ein Atom kein Oktett hat, bildet man eine Mehrfachbindung.", true,
       "Durch das Teilen zusätzlicher Paare erreichen beide Partner das Oktett. Genau so entsteht die Doppelbindung in CO₂.")],
  ]);

  /* ------------------------------------------------ 4 Kovalente Bindung */
  body("chem-covalent", [
    ["Teilen statt abgeben",
     ["Zwei Nichtmetallatome wollen beide Elektronen aufnehmen. Keines kann dem anderen welche wegnehmen. Die Lösung: Sie teilen sich ein Paar, das dann zu beiden gehört.",
      "Dieses gemeinsame Elektronenpaar ist die <strong>kovalente Bindung</strong>, auch Atombindung genannt. Beide Atome zählen es voll zu ihrem Oktett.",
      "Zusammengehalten wird das Ganze elektrostatisch: Das negative Elektronenpaar liegt zwischen den beiden positiven Kernen und zieht sie zusammen."],
     mc("ccv-c1", "Was hält die beiden Atome in einer kovalenten Bindung zusammen?",
       ["Magnetische Kräfte", "Das gemeinsame Elektronenpaar zwischen den positiven Kernen",
        "Die Schwerkraft", "Der Luftdruck"], 1,
       "Das negativ geladene Paar zwischen den Kernen erzeugt die anziehende Wirkung.")],

    ["Bindigkeit lässt sich aus dem Periodensystem ablesen",
     ["Wie viele Bindungen ein Atom eingeht, ergibt sich aus der Zahl der Elektronen, die ihm zum Oktett fehlen.",
      "Kohlenstoff hat vier Valenzelektronen und braucht vier weitere, also vier Bindungen. Stickstoff hat fünf und braucht drei, Sauerstoff hat sechs und braucht zwei, Wasserstoff braucht eine.",
      "Mit dieser Regel kannst du prüfen, ob eine gezeichnete Strukturformel überhaupt stimmen kann. Ein Kohlenstoff mit drei oder fünf Bindungen ist immer ein Fehler."],
     mc("ccv-c2", "Wie viele Bindungen geht Stickstoff üblicherweise ein?",
       ["eine", "zwei", "drei", "vier"], 2,
       "Stickstoff hat fünf Valenzelektronen, ihm fehlen drei zum Oktett. Also bildet er drei Bindungen.")],

    ["Einfach, doppelt, dreifach",
     ["Teilen sich zwei Atome ein Paar, entsteht eine Einfachbindung. Bei zwei geteilten Paaren spricht man von einer Doppelbindung, bei drei von einer Dreifachbindung.",
      "Je mehr Paare beteiligt sind, desto kürzer und fester wird die Bindung. Die Dreifachbindung im Stickstoffmolekül ist so stabil, dass Luftstickstoff chemisch fast untätig ist.",
      "Mehrfachbindungen verändern auch die Beweglichkeit. Um eine Einfachbindung lässt sich frei drehen, um eine Doppelbindung nicht. Das ist in der organischen Chemie der Grund für verschiedene räumliche Isomere."],
     tf("ccv-c3", "Eine Doppelbindung ist kürzer und stärker als eine Einfachbindung.", true,
       "Zwei geteilte Elektronenpaare ziehen die Kerne stärker zusammen. Die Bindung wird kürzer und die Bindungsenergie höher.")],

    ["Von der Strukturformel zur Skelettformel",
     ["Die Strukturformel zeigt jedes Atom und jede Bindung. Bei grösseren Molekülen wird das schnell unübersichtlich.",
      "Deshalb verwendet die organische Chemie die <strong>Skelettformel</strong>: Kohlenstoffatome werden nicht geschrieben, sie sitzen an jedem Knick und jedem Ende der Linie. Wasserstoffatome an Kohlenstoff werden ebenfalls weggelassen.",
      "Alle anderen Atome wie O, N oder Cl werden dagegen ausgeschrieben. Beim Lesen ergänzt du gedanklich die fehlenden Wasserstoffe, bis jeder Kohlenstoff vier Bindungen hat."],
     mc("ccv-c4", "Was sitzt in einer Skelettformel an jedem Knick der Linie?",
       ["ein Wasserstoffatom", "ein Kohlenstoffatom", "ein Sauerstoffatom", "eine freie Bindung"], 1,
       "Jeder Knick und jedes Linienende ist ein Kohlenstoffatom, die Wasserstoffe werden dazugedacht.")],
  ]);

  /* ------------------------------------------------ 5 Polarität */
  body("chem-polarity-forces", [
    ["Ungleiches Ziehen erzeugt Teilladungen",
     ["In einer Bindung zwischen zwei gleichen Atomen liegt das Elektronenpaar genau in der Mitte. Die Bindung ist unpolar.",
      "Sind die Partner verschieden, zieht der elektronegativere stärker. Das Paar verschiebt sich zu ihm, er wird leicht negativ, der andere leicht positiv. Man schreibt δ− und δ+.",
      "Diese Teilladungen sind keine vollen Ladungen wie bei Ionen, sondern nur Verschiebungen. Trotzdem genügen sie, um Anziehungskräfte zwischen Molekülen zu erzeugen."],
     mc("cpf-c1", "Was entsteht, wenn zwei unterschiedlich elektronegative Atome eine Bindung eingehen?",
       ["Ein Ionengitter", "Eine polare Bindung mit Teilladungen", "Ein Metall", "Eine Dreifachbindung"], 1,
       "Das Bindungselektronenpaar verschiebt sich zum elektronegativeren Partner, es entstehen Teilladungen.")],

    ["Polare Bindung ist nicht gleich polares Molekül",
     ["Kohlenstoffdioxid hat zwei stark polare Bindungen, ist aber insgesamt unpolar. Der Grund liegt in der Geometrie: Das Molekül ist gestreckt, und die beiden Verschiebungen zeigen genau entgegengesetzt.",
      "Wasser hat dieselben polaren Bindungen, ist aber gewinkelt. Die Verschiebungen heben sich nicht auf, es bleibt eine Seite negativ und eine positiv. Wasser ist ein <strong>Dipol</strong>.",
      "Merke die Reihenfolge für Prüfungsaufgaben: zuerst die Bindungspolarität über die Elektronegativität prüfen, dann die Molekülgeometrie, erst dann entscheiden, ob das Molekül polar ist."],
     mc("cpf-c2", "Warum ist CO₂ unpolar, obwohl seine Bindungen polar sind?",
       ["Weil Sauerstoff nicht elektronegativ ist", "Weil das Molekül gestreckt ist und sich die Verschiebungen aufheben",
        "Weil es ein Gas ist", "Weil Kohlenstoff in der Mitte steht"], 1,
       "In einem linearen Molekül mit zwei gleichen Bindungen zeigen die Dipole entgegengesetzt und heben sich auf.")],

    ["Die Wasserstoffbrücke erklärt das Verhalten von Wasser",
     ["Zwischen Molekülen mit stark polaren O–H-, N–H- oder F–H-Bindungen wirkt eine besonders starke Anziehung, die <strong>Wasserstoffbrücke</strong>.",
      "Sie ist der Grund, warum Wasser bei Raumtemperatur flüssig ist, obwohl es ein sehr kleines Molekül ist. Ohne Wasserstoffbrücken müsste es nach der Molekülmasse längst gasförmig sein.",
      "Sie erklärt auch die hohe Wärmekapazität, die hohe Oberflächenspannung und die Anomalie beim Gefrieren. Im Eis ordnen sich die Moleküle durch die Brücken in ein weites Gitter, das weniger dicht ist als flüssiges Wasser."],
     mc("cpf-c3", "Warum ist Wasser bei Raumtemperatur flüssig, obwohl seine Moleküle sehr klein sind?",
       ["Wegen der hohen Masse", "Wegen der Wasserstoffbrücken zwischen den Molekülen",
        "Wegen der Ionenbindung", "Wegen der Van-der-Waals-Kräfte allein"], 1,
       "Wasserstoffbrücken halten die Moleküle so stark zusammen, dass viel Energie zum Verdampfen nötig ist.")],

    ["Gleiches löst sich in Gleichem",
     ["Ob sich ein Stoff löst, hängt davon ab, ob die Anziehung zwischen Stoff und Lösungsmittel mit der Anziehung im Stoff selbst mithalten kann.",
      "Polare Stoffe wie Zucker oder Salz lösen sich gut in polarem Wasser. Unpolare Stoffe wie Fett oder Benzin lösen sich in unpolaren Lösungsmitteln.",
      "Öl und Wasser mischen sich nicht, weil die Wassermoleküle einander über Wasserstoffbrücken so stark anziehen, dass sie die unpolaren Ölmoleküle verdrängen. Seife funktioniert, weil ihre Moleküle ein polares und ein unpolares Ende haben und beide Seiten verbinden."],
     tf("cpf-c4", "Seife wirkt, weil ihre Moleküle einen polaren und einen unpolaren Teil besitzen.", true,
       "Das unpolare Ende bindet an Fett, das polare an Wasser. So lässt sich Fett im Wasser transportieren.")],
  ]);

  /* ------------------------------------------------ 6 Ionen und Metalle */
  body("chem-ionic-metallic", [
    ["Vollständige Übertragung statt Teilen",
     ["Ist der Elektronegativitätsunterschied sehr gross, wird das Elektron nicht geteilt, sondern ganz übernommen. Typisch ist die Kombination Metall mit Nichtmetall.",
      "Natrium gibt sein einziges Aussenelektron ab und wird zum Na⁺. Chlor nimmt es auf und wird zum Cl⁻. Beide haben danach Edelgaskonfiguration.",
      "Die entgegengesetzt geladenen Ionen ziehen sich an. Diese Anziehung ist die <strong>Ionenbindung</strong>. Sie wirkt in alle Raumrichtungen gleich stark."],
     mc("cim-c1", "Was geschieht bei der Bildung von Natriumchlorid?",
       ["Ein Elektronenpaar wird geteilt", "Natrium gibt ein Elektron vollständig an Chlor ab",
        "Chlor gibt ein Elektron ab", "Es entsteht ein Molekül NaCl"], 1,
       "Natrium wird zum Kation, Chlor zum Anion. Beide erreichen dadurch eine volle Aussenschale.")],

    ["Warum Salze hart und spröde sind",
     ["Weil die Anziehung in alle Richtungen wirkt, ordnen sich die Ionen zu einem regelmässigen <strong>Ionengitter</strong>. Jedes Natriumion ist von sechs Chloridionen umgeben und umgekehrt.",
      "Dieses Gitter ist sehr stabil, deshalb haben Salze hohe Schmelzpunkte. Kochsalz schmilzt erst bei 801 Grad.",
      "Gleichzeitig sind Salze spröde. Verschiebt man das Gitter um eine Position, stehen plötzlich gleichnamige Ladungen nebeneinander, stossen sich ab und der Kristall zerspringt. Ein Metall lässt sich dagegen verformen."],
     mc("cim-c2", "Warum zerspringt ein Salzkristall bei einem Schlag, während sich ein Metall verformt?",
       ["Weil Salz leichter ist", "Weil im verschobenen Ionengitter gleiche Ladungen nebeneinander geraten und sich abstossen",
        "Weil Salz kälter ist", "Weil Metalle keine Kristalle bilden"], 1,
       "Die Verschiebung bringt gleichnamige Ionen in Kontakt. Die Abstossung sprengt den Kristall.")],

    ["Es gibt kein NaCl-Molekül",
     ["Die Formel NaCl beschreibt kein Molekül, sondern ein Zahlen<em>verhältnis</em>. Im Kristall gibt es genauso viele Natrium- wie Chloridionen, aber keine abgegrenzten Zweiergruppen.",
      "Deshalb heisst die Formel <strong>Verhältnisformel</strong>. Bei Calciumchlorid lautet sie CaCl₂, weil das zweifach positive Calciumion zwei einfach negative Chloridionen ausgleicht.",
      "Die Regel für das Aufstellen ist immer dieselbe: Die Summe der Ladungen muss null ergeben. Daraus ergibt sich das Verhältnis der Ionen von selbst."],
     mc("cim-c3", "Wie lautet die Formel der Verbindung aus Mg²⁺ und Cl⁻?",
       ["MgCl", "MgCl₂", "Mg₂Cl", "Mg₂Cl₂"], 1,
       "Eine zweifach positive Ladung braucht zwei einfach negative zum Ausgleich, also MgCl₂.")],

    ["Die Metallbindung erklärt Leitfähigkeit und Verformbarkeit",
     ["In einem Metall geben alle Atome ihre Aussenelektronen ab. Es entsteht ein Gitter aus positiven Rümpfen, durchzogen von frei beweglichen Elektronen, dem <strong>Elektronengas</strong>.",
      "Diese freien Elektronen erklären fast alle Metalleigenschaften. Sie leiten elektrischen Strom und Wärme, und sie reflektieren Licht, was den metallischen Glanz ergibt.",
      "Sie erklären auch die Verformbarkeit. Verschiebt man die Rümpfe gegeneinander, hält das Elektronengas den Verband weiterhin zusammen. Anders als beim Salz entsteht keine Abstossung."],
     mc("cim-c4", "Warum leiten Metalle elektrischen Strom?",
       ["Wegen der positiven Rümpfe", "Wegen der frei beweglichen Elektronen",
        "Wegen der Ionenbindung", "Wegen der hohen Dichte"], 1,
       "Die delokalisierten Elektronen können sich im ganzen Metall bewegen und transportieren die Ladung.")],
  ]);

  /* ------------------------------------------------ 7 Gleichungen und Mol */
  body("chem-equations-mole", [
    ["Eine Reaktionsgleichung ist eine Bilanz",
     ["Bei einer chemischen Reaktion verschwinden keine Atome. Sie werden nur neu verknüpft. Deshalb muss von jeder Atomsorte links genauso viel stehen wie rechts.",
      "Ausgeglichen wird ausschliesslich über die <strong>Koeffizienten</strong> vor den Formeln. Die Indizes innerhalb einer Formel dürfen nie verändert werden, denn sie beschreiben den Stoff selbst.",
      "Aus H₂O ein H₂O₂ zu machen, um Sauerstoff auszugleichen, ist deshalb ein schwerer Fehler. Damit hättest du aus Wasser Wasserstoffperoxid gemacht, einen völlig anderen Stoff."],
     mc("cem-c1", "Was darf beim Ausgleichen einer Reaktionsgleichung verändert werden?",
       ["die Indizes in den Formeln", "die Koeffizienten vor den Formeln",
        "beides", "die Reaktionspfeile"], 1,
       "Indizes legen den Stoff fest und sind unantastbar. Nur die Anzahl der Teilchen, also die Koeffizienten, wird angepasst.")],

    ["Eine bewährte Reihenfolge beim Ausgleichen",
     ["Beginne mit den Elementen, die nur in je einer Verbindung auf beiden Seiten vorkommen. Meist sind das Kohlenstoff und Wasserstoff.",
      "Gleiche danach Sauerstoff aus, weil er häufig in mehreren Verbindungen gleichzeitig steckt und sich deshalb am Schluss am einfachsten anpassen lässt.",
      "Bei der Verbrennung von Methan: zuerst C (ein CO₂), dann H (vier H werden zu zwei H₂O), zuletzt O (rechts stehen nun 2+2 = 4 Sauerstoffatome, also zwei O₂ links). Ergebnis: CH₄ + 2 O₂ → CO₂ + 2 H₂O."],
     mc("cem-c2", "Welches Element gleicht man bei Verbrennungen sinnvollerweise zuletzt aus?",
       ["Kohlenstoff", "Wasserstoff", "Sauerstoff", "Stickstoff"], 2,
       "Sauerstoff kommt oft in mehreren Verbindungen vor. Am Schluss lässt er sich über den O₂-Koeffizienten bequem anpassen.")],

    ["Das Mol ist nur eine sehr grosse Stückzahl",
     ["Atome sind zu klein, um einzeln gezählt zu werden. Deshalb rechnet die Chemie mit Paketen fester Grösse, genau wie ein Dutzend zwölf Stück meint.",
      "Ein <strong>Mol</strong> enthält rund 6,022 · 10²³ Teilchen. Diese Zahl ist so gewählt, dass ein Mol eines Stoffes genau so viele Gramm wiegt, wie seine Atom- oder Molekülmasse angibt.",
      "Deshalb liest du die Molmasse direkt aus dem Periodensystem ab. Kohlenstoff hat 12, also wiegt ein Mol Kohlenstoff 12 Gramm. Wasser hat 2·1 + 16 = 18, also wiegt ein Mol Wasser 18 Gramm."],
     mc("cem-c3", "Wie schwer ist ein Mol Wasser?",
       ["1 g", "10 g", "18 g", "100 g"], 2,
       "H₂O hat die Molmasse 2·1 + 16 = 18 g/mol.")],

    ["Die drei Umrechnungen, die du beherrschen musst",
     ["Von der Masse zur Stoffmenge: <span class=\"kbd\">n = m / M</span>. Von der Stoffmenge zur Teilchenzahl: <span class=\"kbd\">N = n · N_A</span>. Und bei Gasen unter Normbedingungen: ein Mol nimmt rund 22,4 Liter ein.",
      "Fast jede Chemieaufgabe läuft über diese Brücke. Gegeben ist meist eine Masse, gerechnet wird in Mol, und die Antwort wird wieder in Gramm oder Liter verlangt.",
      "Gewöhne dir deshalb ein festes Schema an: gegebene Grösse in Mol umrechnen, über die Koeffizienten der Gleichung zur gesuchten Stoffmenge wechseln, dann zurück in die verlangte Einheit."],
     mc("cem-c4", "Wie viel Mol sind 36 g Wasser?",
       ["0,5 mol", "1 mol", "2 mol", "18 mol"], 2,
       "n = m/M = 36 g / 18 g/mol = 2 mol.")],
  ]);

  /* ------------------------------------------------ 8 Stöchiometrie */
  body("chem-concentration-stoich", [
    ["Koeffizienten sind Teilchenverhältnisse, keine Massenverhältnisse",
     ["In der Gleichung 2 H₂ + O₂ → 2 H₂O bedeuten die Zahlen: zwei Wasserstoffmoleküle reagieren mit einem Sauerstoffmolekül.",
      "Das gilt für Teilchen und damit auch für Mol, nicht aber für Gramm. Zwei Gramm Wasserstoff reagieren nicht mit einem Gramm Sauerstoff.",
      "Deshalb führt jeder Rechenweg zuerst über die Stoffmenge. Masse in Mol umrechnen, im Molverhältnis weiterrechnen, am Schluss wieder in Masse zurück."],
     tf("ccs-c1", "Die Koeffizienten einer Reaktionsgleichung geben das Massenverhältnis an.", false,
       "Sie geben das Teilchen- und damit das Stoffmengenverhältnis an. Massen erhält man erst nach Umrechnung über die Molmasse.")],

    ["Konzentration ist Stoffmenge pro Volumen",
     ["Bei Lösungen interessiert selten die absolute Menge, sondern wie dicht der Stoff gelöst ist: <span class=\"kbd\">c = n / V</span>, gemessen in Mol pro Liter.",
      "Eine 0,1-molare Lösung enthält also 0,1 Mol des Stoffes je Liter. Ob du davon 50 Milliliter oder zwei Liter nimmst, ändert die Konzentration nicht, nur die enthaltene Menge.",
      "Beim Verdünnen bleibt die Stoffmenge gleich, das Volumen wächst, die Konzentration sinkt entsprechend. Das führt auf die praktische Beziehung <span class=\"kbd\">c₁·V₁ = c₂·V₂</span>."],
     mc("ccs-c2", "Du verdünnst 100 ml einer 2-molaren Lösung auf 400 ml. Wie gross ist die neue Konzentration?",
       ["8 mol/l", "2 mol/l", "1 mol/l", "0,5 mol/l"], 3,
       "c₁V₁ = c₂V₂, also 2 · 100 = c₂ · 400 und damit c₂ = 0,5 mol/l.")],

    ["Der limitierende Stoff bestimmt die Ausbeute",
     ["Sind beide Ausgangsstoffe in bestimmter Menge gegeben, ist meist einer zuerst aufgebraucht. Er heisst <strong>limitierender Stoff</strong> und begrenzt die Produktmenge.",
      "Um ihn zu finden, rechnest du für jeden Ausgangsstoff aus, wie viel Produkt daraus theoretisch entstehen könnte. Der kleinere Wert gewinnt.",
      "Ein Alltagsbild hilft: Mit zehn Brötchen und drei Würsten kannst du drei Hotdogs machen, nicht zehn. Die Würste sind limitierend, die restlichen Brötchen bleiben übrig."],
     mc("ccs-c3", "Wie findest du den limitierenden Stoff?",
       ["Es ist immer der mit der kleineren Masse", "Man berechnet für jeden Ausgangsstoff die mögliche Produktmenge und nimmt den kleineren Wert",
        "Es ist immer der teurere", "Es ist der mit der grösseren Molmasse"], 1,
       "Nur der Vergleich der möglichen Produktmengen zeigt, welcher Stoff zuerst aufgebraucht ist.")],

    ["Ein durchgerechnetes Beispiel",
     ["Aufgabe: Wie viel Gramm Wasser entstehen aus 8 g Wasserstoff mit genügend Sauerstoff? Gleichung: 2 H₂ + O₂ → 2 H₂O.",
      "Schritt eins: n(H₂) = 8 g / 2 g/mol = 4 mol. Schritt zwei: Das Verhältnis H₂ zu H₂O ist 2 zu 2, also 1 zu 1. Somit entstehen 4 mol Wasser.",
      "Schritt drei: m = n · M = 4 mol · 18 g/mol = 72 g. Kontrolle über die Massenerhaltung: 8 g Wasserstoff plus 64 g Sauerstoff ergeben genau 72 g. Die Bilanz stimmt."],
     mc("ccs-c4", "Wie viel Wasser entsteht aus 4 g Wasserstoff mit genügend Sauerstoff?",
       ["4 g", "18 g", "36 g", "72 g"], 2,
       "n(H₂) = 4/2 = 2 mol, also 2 mol Wasser, also 2 · 18 = 36 g.")],
  ]);

  /* ------------------------------------------------ 9 Energetik */
  body("chem-energetics", [
    ["Bindungen lösen kostet, Bindungen bilden bringt",
     ["Jede Reaktion läuft in zwei Etappen ab. Zuerst müssen bestehende Bindungen gelöst werden, und das braucht Energie. Dann bilden sich neue Bindungen, und dabei wird Energie frei.",
      "Die Differenz entscheidet über die Gesamtbilanz. Wird beim Bilden mehr frei, als beim Lösen gebraucht wurde, gibt die Reaktion insgesamt Energie ab.",
      "Das ist der ganze Kern der Energetik. Alles Weitere sind Bezeichnungen für diese eine Bilanz."],
     mc("cen-c1", "Wann ist eine Reaktion exotherm?",
       ["Wenn das Lösen der Bindungen mehr Energie braucht als das Bilden freisetzt",
        "Wenn beim Bilden der neuen Bindungen mehr Energie frei wird als zum Lösen nötig war",
        "Wenn keine Bindungen gelöst werden", "Wenn ein Katalysator anwesend ist"], 1,
       "Überwiegt die freigesetzte Energie, gibt die Reaktion insgesamt Energie ab und erwärmt die Umgebung.")],

    ["Exotherm und endotherm am Diagramm erkennen",
     ["Im Energiediagramm steht die Energie über dem Reaktionsverlauf. Liegen die Produkte <em>tiefer</em> als die Ausgangsstoffe, wurde Energie abgegeben: die Reaktion ist <strong>exotherm</strong>.",
      "Liegen die Produkte <em>höher</em>, wurde Energie aufgenommen: die Reaktion ist <strong>endotherm</strong>. Ein Kältepack funktioniert nach diesem Prinzip.",
      "Verwechsle nicht die Richtung mit der Wahrnehmung. Exotherm heisst, dass die Umgebung wärmer wird, weil das System Energie abgibt. Das Vorzeichen von ΔH ist dann negativ."],
     mc("cen-c2", "Die Produkte liegen im Energiediagramm höher als die Ausgangsstoffe. Was folgt?",
       ["exotherm, die Umgebung erwärmt sich", "endotherm, die Umgebung kühlt ab",
        "die Reaktion läuft nicht ab", "es ist ein Katalysator beteiligt"], 1,
       "Das System hat Energie aufgenommen, also stammt sie aus der Umgebung. Diese kühlt ab.")],

    ["Aktivierungsenergie: der Berg vor dem Tal",
     ["Auch eine exotherme Reaktion startet nicht von selbst. Benzin und Luft liegen nebeneinander, ohne zu reagieren, bis ein Funke kommt.",
      "Der Grund ist die <strong>Aktivierungsenergie</strong>: die Schwelle, die überwunden werden muss, um bestehende Bindungen aufzubrechen. Im Diagramm ist sie der Berg zwischen Ausgangsstoffen und Produkten.",
      "Ist der Berg einmal überwunden, liefert die Reaktion bei exothermem Verlauf genug Energie, um die nächsten Teilchen zu zünden. Deshalb brennt Benzin nach dem Funken von selbst weiter."],
     mc("cen-c3", "Warum entzündet sich ein Benzin-Luft-Gemisch nicht von selbst, obwohl die Verbrennung exotherm ist?",
       ["Weil die Reaktion endotherm ist", "Weil zuerst die Aktivierungsenergie überwunden werden muss",
        "Weil Benzin zu kalt ist", "Weil Luft die Reaktion hemmt"], 1,
       "Die Aktivierungsenergie ist die Startschwelle. Erst ein Funke liefert sie, danach läuft die Reaktion selbst weiter.")],

    ["Katalysatoren senken den Berg, nicht das Tal",
     ["Ein <strong>Katalysator</strong> bietet der Reaktion einen anderen Weg mit tieferer Aktivierungsenergie an. Dadurch läuft sie schneller oder bei tieferer Temperatur ab.",
      "Er wird dabei nicht verbraucht und liegt am Ende unverändert vor. Deshalb genügen oft winzige Mengen.",
      "Entscheidend für Prüfungsfragen: Ein Katalysator verändert die Energiebilanz <em>nicht</em>. Ausgangsstoffe und Produkte liegen unverändert hoch, nur der Berg dazwischen wird flacher. Enzyme sind die biologischen Katalysatoren."],
     tf("cen-c4", "Ein Katalysator macht eine endotherme Reaktion exotherm.", false,
       "Er senkt nur die Aktivierungsenergie. Die Lage von Ausgangsstoffen und Produkten und damit die Energiebilanz bleibt unverändert.")],
  ]);

  /* ------------------------------------------------ 10 Säure und Base */
  body("chem-acid-base", [
    ["Säuren geben Protonen ab, Basen nehmen sie auf",
     ["Nach Brønsted ist eine <strong>Säure</strong> ein Teilchen, das ein Proton abgeben kann, und eine <strong>Base</strong> eines, das ein Proton aufnehmen kann.",
      "Ein Proton ist hier nichts anderes als ein Wasserstoffion H⁺, also ein Wasserstoffatom ohne sein Elektron.",
      "Wichtig ist die Beziehung: Eine Säure kann ihr Proton nur abgeben, wenn eine Base da ist, die es aufnimmt. Säure-Base-Reaktionen sind deshalb immer Protonenübertragungen zwischen zwei Partnern."],
     mc("cab-c1", "Was ist nach Brønsted eine Base?",
       ["ein Teilchen, das Elektronen abgibt", "ein Teilchen, das ein Proton aufnehmen kann",
        "ein Teilchen mit pH über 7", "ein Metalloxid"], 1,
       "Die Brønsted-Definition stellt auf die Protonenübertragung ab, nicht auf den pH-Wert.")],

    ["Der pH-Wert ist ein Logarithmus",
     ["In Wasser liegen immer einige Oxoniumionen H₃O⁺ vor. Ihre Konzentration bestimmt, wie sauer die Lösung ist.",
      "Weil diese Konzentration über viele Zehnerpotenzen schwankt, verwendet man den negativen Zehnerlogarithmus: <span class=\"kbd\">pH = −log c(H₃O⁺)</span>.",
      "Daraus folgt die wichtigste praktische Regel: Ein Unterschied von einer pH-Einheit bedeutet den Faktor zehn in der Konzentration. Von pH 5 auf pH 3 ist also nicht etwas saurer, sondern hundertmal saurer."],
     mc("cab-c2", "Wie viel saurer ist eine Lösung mit pH 3 im Vergleich zu pH 5?",
       ["2-mal", "10-mal", "100-mal", "1000-mal"], 2,
       "Zwei pH-Stufen entsprechen zwei Zehnerpotenzen, also dem Faktor 100.")],

    ["Neutralisation und die Rolle des Wassers",
     ["Treffen Säure und Base aufeinander, geht das Proton von der Säure auf die Base über. Bei einer starken Säure und einer starken Lauge entstehen dabei Wasser und ein Salz.",
      "Ein Beispiel: Salzsäure und Natronlauge ergeben Kochsalzlösung. Die eigentliche Reaktion ist H₃O⁺ + OH⁻ → 2 H₂O.",
      "Wasser selbst kann beides: Gegenüber einer Säure wirkt es als Base, gegenüber einer Base als Säure. Solche Stoffe heissen amphoter. Deshalb ist reines Wasser neutral mit pH 7."],
     mc("cab-c3", "Was entsteht bei der Neutralisation von Salzsäure mit Natronlauge?",
       ["nur Wasserstoff", "Wasser und Kochsalz", "nur Salz", "Sauerstoff und Salz"], 1,
       "Die Protonenübertragung liefert Wasser, die verbleibenden Ionen bilden das Salz.")],

    ["Titration: Konzentration durch Messen bestimmen",
     ["Bei einer <strong>Titration</strong> gibt man zu einer Säure unbekannter Konzentration tropfenweise eine Lauge bekannter Konzentration, bis der Umschlagpunkt erreicht ist.",
      "Ein Indikator zeigt diesen Punkt durch Farbwechsel an. Dort ist genau so viel Base zugegeben worden, wie zur vollständigen Neutralisation nötig war.",
      "Aus dem verbrauchten Volumen berechnest du die Stoffmenge der Base, überträgst sie über die Reaktionsgleichung auf die Säure und erhältst deren Konzentration. Das ist angewandte Stöchiometrie."],
     tf("cab-c4", "Am Äquivalenzpunkt einer Titration ist genau so viel Base zugegeben, wie zur Neutralisation der Säure nötig ist.", true,
       "Genau das definiert den Äquivalenzpunkt und macht die Berechnung der unbekannten Konzentration möglich.")],
  ]);

  /* ------------------------------------------------ 11 Redox */
  body("chem-redox", [
    ["Oxidation und Reduktion treten immer gemeinsam auf",
     ["<strong>Oxidation</strong> bedeutet Elektronenabgabe, <strong>Reduktion</strong> bedeutet Elektronenaufnahme. Elektronen können nicht im Nichts verschwinden.",
      "Deshalb muss bei jeder Oxidation gleichzeitig irgendwo eine Reduktion stattfinden. Beide zusammen nennt man eine Redoxreaktion.",
      "Der historische Name führt in die Irre: Oxidation hat nichts zwingend mit Sauerstoff zu tun. Auch die Reaktion von Natrium mit Chlor ist eine Oxidation des Natriums, obwohl kein Sauerstoff beteiligt ist."],
     mc("crx-c1", "Was passiert bei einer Oxidation?",
       ["Sauerstoff wird aufgenommen", "Elektronen werden abgegeben",
        "Protonen werden abgegeben", "Die Masse nimmt zu"], 1,
       "Die moderne Definition stellt auf die Elektronenabgabe ab. Sauerstoffaufnahme ist nur ein Spezialfall.")],

    ["Oxidationszahlen als Buchhaltung",
     ["Um zu erkennen, wer Elektronen abgibt, verteilt man die Bindungselektronen rechnerisch dem elektronegativeren Partner zu. Die dabei entstehende fiktive Ladung ist die <strong>Oxidationszahl</strong>.",
      "Einige Regeln genügen: Elemente im reinen Zustand haben 0. Wasserstoff hat meist +I, Sauerstoff meist −II. Die Summe aller Oxidationszahlen ergibt die Gesamtladung des Teilchens.",
      "In H₂O hat jedes H +I, also muss O den Wert −II tragen, damit die Summe null ergibt. Diese Buchhaltung zeigt sofort, wo sich bei einer Reaktion etwas verändert hat."],
     mc("crx-c2", "Welche Oxidationszahl hat Schwefel in H₂SO₄?",
       ["+II", "+IV", "+VI", "−II"], 2,
       "2·(+I) + x + 4·(−II) = 0 ergibt x = +VI.")],

    ["Steigt die Oxidationszahl, liegt eine Oxidation vor",
     ["Vergleiche die Oxidationszahlen vor und nach der Reaktion. Steigt sie, wurden Elektronen abgegeben, es liegt eine Oxidation vor. Sinkt sie, war es eine Reduktion.",
      "Bei der Reaktion von Magnesium mit Sauerstoff geht Mg von 0 auf +II, wird also oxidiert. Sauerstoff geht von 0 auf −II, wird also reduziert.",
      "Daraus folgen auch die Rollen: Magnesium gibt Elektronen ab, ist also das Reduktionsmittel, weil es den Partner reduziert. Sauerstoff ist das Oxidationsmittel. Diese Bezeichnungen wirken zunächst verdreht, folgen aber logisch aus der Wirkung auf den Partner."],
     mc("crx-c3", "Ein Stoff gibt Elektronen ab. Welche Rolle hat er?",
       ["Er ist das Oxidationsmittel", "Er ist das Reduktionsmittel",
        "Er ist der Katalysator", "Er wird reduziert"], 1,
       "Wer Elektronen abgibt, wird selbst oxidiert und ermöglicht die Reduktion des Partners. Er ist also das Reduktionsmittel.")],

    ["Redoxreaktionen im Alltag",
     ["Rosten ist die langsame Oxidation von Eisen durch Sauerstoff und Wasser. Verbrennung ist dieselbe Art Reaktion, nur schnell und unter Wärmefreisetzung.",
      "Eine Batterie trennt die beiden Teilreaktionen räumlich. Die Elektronen müssen dann den Umweg über den äusseren Stromkreis nehmen, und genau dieser Elektronenfluss ist der nutzbare Strom.",
      "Auch die Zellatmung im Körper ist eine Redoxreaktion: Glucose wird oxidiert, Sauerstoff reduziert. Chemisch ist das derselbe Vorgang wie eine Verbrennung, nur in vielen kleinen, kontrollierten Schritten."],
     tf("crx-c4", "In einer Batterie sind Oxidation und Reduktion räumlich getrennt.", true,
       "Deshalb müssen die Elektronen über den äusseren Stromkreis fliessen. Dieser Fluss ist der nutzbare elektrische Strom.")],
  ]);

  /* ------------------------------------------------ 12 Organische Stoffklassen */
  body("chem-organic-groups", [
    ["Warum Kohlenstoff die Vielfalt ermöglicht",
     ["Kohlenstoff hat vier Valenzelektronen und bildet damit vier Bindungen. Er ist damit weder besonders bereit, Elektronen abzugeben, noch sie aufzunehmen.",
      "Entscheidend ist aber etwas anderes: Kohlenstoff bindet sehr stabil an sich selbst. So entstehen Ketten, Verzweigungen und Ringe beliebiger Länge.",
      "Kein anderes Element kann das in vergleichbarem Ausmass. Deshalb gibt es Millionen organischer Verbindungen und nur einige hunderttausend anorganische."],
     mc("cog-c1", "Warum gibt es so viele organische Verbindungen?",
       ["Weil Kohlenstoff sehr häufig ist", "Weil Kohlenstoff stabile Ketten, Verzweigungen und Ringe mit sich selbst bildet",
        "Weil Kohlenstoff leicht ist", "Weil er nur zwei Bindungen eingeht"], 1,
       "Die Fähigkeit zur stabilen Selbstverknüpfung in beliebiger Länge erzeugt die enorme Vielfalt.")],

    ["Gesättigt oder ungesättigt",
     ["<strong>Alkane</strong> enthalten nur Einfachbindungen. Sie sind gesättigt, weil kein weiteres Atom mehr angelagert werden kann. Ihre Namen enden auf -an: Methan, Ethan, Propan, Butan.",
      "<strong>Alkene</strong> enthalten eine Doppelbindung und enden auf -en, <strong>Alkine</strong> eine Dreifachbindung und enden auf -in. Beide sind ungesättigt.",
      "Der Unterschied ist chemisch bedeutsam: An eine Doppelbindung können sich weitere Atome anlagern, ohne dass etwas abgespalten wird. Das nennt man Additionsreaktion und ist typisch für ungesättigte Verbindungen."],
     mc("cog-c2", "Woran erkennst du am Namen eine Doppelbindung?",
       ["an der Endung -an", "an der Endung -en", "an der Endung -ol", "an der Vorsilbe meth-"], 1,
       "Die Endung -en steht für eine Doppelbindung, -in für eine Dreifachbindung, -an für nur Einfachbindungen.")],

    ["Die funktionelle Gruppe bestimmt das Verhalten",
     ["Eine lange Kohlenstoffkette ist chemisch ziemlich gleichgültig. Interessant wird es dort, wo eine <strong>funktionelle Gruppe</strong> sitzt.",
      "Eine OH-Gruppe macht aus einem Alkan einen <strong>Alkohol</strong>. Eine COOH-Gruppe macht daraus eine <strong>Carbonsäure</strong>. Eine C=O-Gruppe am Kettenende ergibt ein Aldehyd, in der Kette ein Keton.",
      "Für Prüfungsaufgaben gilt deshalb: Suche zuerst die funktionelle Gruppe, dann kennst du Stoffklasse, Namensendung und die zu erwartenden Eigenschaften."],
     mc("cog-c3", "Welche Stoffklasse gehört zur Gruppe COOH?",
       ["Alkohol", "Aldehyd", "Carbonsäure", "Keton"], 2,
       "Die Carboxylgruppe COOH kennzeichnet die Carbonsäuren, etwa Essigsäure.")],

    ["Von der Gruppe zur Eigenschaft",
     ["Die funktionelle Gruppe entscheidet über Löslichkeit und Siedepunkt. Eine OH-Gruppe kann Wasserstoffbrücken bilden, deshalb ist Ethanol mit Wasser mischbar, während Ethan ein Gas ist.",
      "Je länger die unpolare Kohlenstoffkette wird, desto schwächer wirkt die polare Gruppe im Vergleich. Methanol mischt sich vollständig mit Wasser, ein Alkohol mit zwölf Kohlenstoffatomen praktisch gar nicht.",
      "Das ergibt eine gute Faustregel für Prüfungsfragen: kurze Kette plus polare Gruppe bedeutet wasserlöslich, lange Kette bedeutet fettlöslich."],
     mc("cog-c4", "Warum ist Ethanol mit Wasser mischbar, Hexan aber nicht?",
       ["Weil Ethanol leichter ist", "Weil die OH-Gruppe Wasserstoffbrücken zu Wasser bilden kann",
        "Weil Hexan ein Gas ist", "Weil Ethanol eine Doppelbindung hat"], 1,
       "Die polare OH-Gruppe erlaubt Wasserstoffbrücken. Hexan ist durchgehend unpolar und mischt sich deshalb nicht.")],
  ]);

  /* ------------------------------------------------ 13 Nomenklatur */
  body("chem-organic-naming", [
    ["Der Name ist ein Bauplan",
     ["Ein systematischer Name beschreibt das Molekül vollständig. Wer die Regeln kennt, kann aus dem Namen die Struktur zeichnen und umgekehrt.",
      "Der Aufbau ist immer derselbe: Vorsilben für die Seitengruppen, dann der Stamm für die Hauptkette, dann die Endung für die funktionelle Gruppe.",
      "Beispiel 2-Methylbutan: Der Stamm butan bedeutet vier Kohlenstoffatome, methyl eine CH₃-Seitengruppe, die 2 sagt, an welchem Kohlenstoff sie sitzt."],
     mc("con-c1", "Was beschreibt der Stammname in einem systematischen Namen?",
       ["die Seitengruppen", "die Länge der Hauptkette", "die funktionelle Gruppe", "die Masse"], 1,
       "Der Stamm gibt die Zahl der Kohlenstoffatome in der Hauptkette an: meth 1, eth 2, prop 3, but 4, pent 5.")],

    ["Die Hauptkette ist die längste, nicht die waagrechteste",
     ["Beim Benennen suchst du zuerst die längste zusammenhängende Kohlenstoffkette. Sie kann um Ecken laufen, das spielt keine Rolle.",
      "Häufigster Fehler: Man nimmt die waagrecht gezeichnete Kette, obwohl über einen Knick eine längere existiert. Das ergibt einen falschen Stammnamen.",
      "Enthält das Molekül eine funktionelle Gruppe, muss die Hauptkette diese Gruppe enthalten, auch wenn dadurch eine kürzere Kette gewählt wird. Die Gruppe hat immer Vorrang."],
     tf("con-c2", "Die Hauptkette ist immer die waagrecht gezeichnete Kette.", false,
       "Gesucht ist die längste zusammenhängende Kette, unabhängig davon, wie sie gezeichnet ist. Enthält das Molekül eine funktionelle Gruppe, muss die Hauptkette diese enthalten.")],

    ["Nummerieren so, dass kleine Zahlen entstehen",
     ["Nach dem Festlegen der Hauptkette nummerierst du die Kohlenstoffatome. Die Richtung wählst du so, dass die funktionelle Gruppe die kleinstmögliche Nummer erhält.",
      "Gibt es keine funktionelle Gruppe, entscheidet die Position der ersten Seitengruppe. Auch hier gilt: möglichst kleine Zahlen.",
      "Aus 4-Methylpentan wird deshalb 2-Methylpentan, weil man von der anderen Seite zählen muss. Beide Bezeichnungen meinen dasselbe Molekül, aber nur eine ist korrekt."],
     mc("con-c3", "Nach welcher Regel wird die Hauptkette nummeriert?",
       ["immer von links", "so, dass die funktionelle Gruppe die kleinste Nummer erhält",
        "so, dass grosse Zahlen entstehen", "in beliebiger Richtung"], 1,
       "Die funktionelle Gruppe hat Vorrang und soll die kleinstmögliche Positionsnummer bekommen.")],

    ["Isomere: gleiche Formel, verschiedener Bau",
     ["Butan und Isobutan haben beide die Summenformel C₄H₁₀, unterscheiden sich aber im Bau: einmal eine gerade Kette, einmal eine verzweigte.",
      "Solche Stoffe heissen <strong>Isomere</strong>. Sie sind verschiedene Substanzen mit verschiedenen Siedepunkten und Eigenschaften, obwohl die Summenformel identisch ist.",
      "Mit wachsender Kettenlänge steigt die Zahl der Isomere rasch an. Genau deshalb reicht eine Summenformel in der organischen Chemie nicht aus, es braucht die Struktur- oder Skelettformel."],
     mc("con-c4", "Was sind Isomere?",
       ["Stoffe mit gleicher Struktur und verschiedener Formel", "Stoffe mit gleicher Summenformel, aber verschiedenem Bau",
        "verschiedene Aggregatzustände desselben Stoffs", "Ionen desselben Elements"], 1,
       "Gleiche Summenformel, unterschiedliche Verknüpfung. Deshalb sind es verschiedene Stoffe mit verschiedenen Eigenschaften.")],
  ]);
})();

/* Biologie: ausgeschriebene Lehrtexte für alle 17 Kapitel.
   Aufbau je Block: konkreter Einstieg oder Fehlvorstellung, dann der
   Mechanismus, dann die Folge. Der Check zielt auf die Fehlvorstellung. */
(function () {
  "use strict";
  var M = window.MNEMIKA;
  const { mc, tf } = M;

  function body(id, list) {
    var c = M.chapter(id);
    if (!c) return;
    c.depth = "full";
    c.blocks = list.map(function (b, i) {
      var blk = { id: "b" + (i + 1), label: b[0], body: b[1], check: b[2] };
      if (blk.check) {
        blk.check.blockId = blk.id; blk.check.blockNo = i + 1;
        blk.check.blockLabel = blk.label; blk.check.role = "check";
      }
      return blk;
    });
  }

  /* ---------------------------------------- 1 Biomoleküle */
  body("bio-biomolecules", [
    ["Vier Stoffklassen, ein Bauprinzip",
     ["Fast alles in einem Lebewesen besteht aus vier Stoffklassen: Kohlenhydrate, Lipide, Proteine und Nukleinsäuren. Drei davon sind nach demselben Prinzip gebaut.",
      "Aus kleinen Bausteinen, den <strong>Monomeren</strong>, werden lange Ketten, die <strong>Polymere</strong>. Aus Einfachzuckern wird Stärke, aus Aminosäuren ein Protein, aus Nukleotiden die DNA.",
      "Nur die Lipide fallen aus der Reihe. Sie sind keine Ketten aus gleichartigen Bausteinen, sondern werden über ihre Eigenschaft definiert: Sie sind wasserunlöslich."],
     mc("bbm-c1", "Welche der vier Stoffklassen ist kein Polymer aus gleichartigen Bausteinen?",
       ["Kohlenhydrate", "Proteine", "Lipide", "Nukleinsäuren"], 2,
       "Lipide werden nicht über ihre Bausteine definiert, sondern über eine Eigenschaft: ihre Wasserunlöslichkeit.")],

    ["Kohlenhydrate: schnelle Energie und Vorratsform",
     ["Traubenzucker, also Glucose, ist der zentrale Energieträger der Zelle. Er löst sich gut in Wasser und ist deshalb im Blut transportierbar.",
      "Genau diese Löslichkeit ist aber ein Problem für die Speicherung. Tausende gelöste Glucosemoleküle würden osmotisch Wasser in die Zelle ziehen. Deshalb hängt die Zelle sie zu langen Ketten zusammen.",
      "So entstehen Speicherstoffe: <strong>Stärke</strong> in Pflanzen, <strong>Glykogen</strong> in Leber und Muskel. Cellulose ist ebenfalls eine Glucosekette, aber anders verknüpft, weshalb wir sie nicht verdauen können."],
     mc("bbm-c2", "Warum speichert der Körper Glucose als Glykogen statt als einzelne Moleküle?",
       ["Weil Glykogen mehr Energie enthält", "Weil gelöste Einzelmoleküle osmotisch Wasser in die Zelle ziehen würden",
        "Weil Glykogen süsser schmeckt", "Weil Glucose giftig ist"], 1,
       "Viele gelöste Teilchen erhöhen den osmotischen Wert. Als ein grosses Polymer zählt Glykogen osmotisch nur als ein Teilchen.")],

    ["Proteine: die Form macht die Funktion",
     ["Ein Protein ist eine Kette aus zwanzig verschiedenen Aminosäuren. Ihre Reihenfolge legt fest, wie sich die Kette faltet, und die Faltung legt fest, was das Protein kann.",
      "Deshalb gilt in der Biologie durchgehend: Struktur bestimmt Funktion. Ein Enzym wirkt nur, weil sein aktives Zentrum räumlich zum Substrat passt. Hämoglobin bindet Sauerstoff nur wegen seiner räumlichen Tasche.",
      "Wird die Faltung zerstört, etwa durch Hitze oder starke Säure, ist das Protein unbrauchbar. Man nennt das <strong>Denaturierung</strong>. Ein gekochtes Ei zeigt es sichtbar: Die Kette ist noch da, die Form ist weg."],
     tf("bbm-c3", "Bei der Denaturierung wird die Aminosäurekette zerschnitten.", false,
       "Die Kette bleibt erhalten, nur ihre räumliche Faltung geht verloren. Weil die Form die Funktion trägt, ist das Protein trotzdem unbrauchbar.")],

    ["Lipide und Nukleinsäuren",
     ["<strong>Lipide</strong> speichern pro Gramm mehr als doppelt so viel Energie wie Kohlenhydrate. Als Phospholipide bauen sie ausserdem jede Zellmembran auf, weil sie einen wasserliebenden Kopf und zwei wassermeidende Schwänze tragen.",
      "<strong>Nukleinsäuren</strong> speichern Information. Ein Nukleotid besteht aus Zucker, Phosphat und einer Base. Die Reihenfolge der Basen ist die Information.",
      "Damit schliesst sich der Kreis: Die DNA speichert die Bauanleitung für Proteine, die Proteine erledigen die Arbeit, und Kohlenhydrate und Lipide liefern Energie und Baumaterial dafür."],
     mc("bbm-c4", "Warum bilden Phospholipide von selbst eine Doppelschicht?",
       ["Weil sie geladen sind", "Weil ihr wasserliebender Kopf nach aussen und ihre wassermeidenden Schwänze nach innen streben",
        "Weil sie sehr gross sind", "Weil Proteine sie zusammenhalten"], 1,
       "Die Schwänze meiden Wasser und wenden sich einander zu, die Köpfe zeigen zum Wasser. Daraus entsteht die Doppelschicht von selbst.")],
  ]);

  /* ---------------------------------------- 2 Enzyme */
  body("bio-enzymes", [
    ["Ohne Enzyme wäre Leben zu langsam",
     ["Zucker verbrennt an Luft nicht von selbst, obwohl die Reaktion Energie freisetzen würde. Es fehlt die Startenergie, um die bestehenden Bindungen aufzubrechen.",
      "Im Körper kann man nicht einfach die Temperatur erhöhen. Also braucht es einen anderen Weg: <strong>Enzyme</strong> bieten der Reaktion eine Abkürzung mit deutlich tieferer Aktivierungsenergie an.",
      "Das Ergebnis ist eindrücklich. Reaktionen, die ohne Enzym Jahre bräuchten, laufen in Millisekunden ab. Verändert wird dabei nur die Geschwindigkeit, nicht die Energiebilanz."],
     mc("ben-c1", "Was verändert ein Enzym an einer Reaktion?",
       ["die freigesetzte Energiemenge", "die Aktivierungsenergie und damit die Geschwindigkeit",
        "die Art der Produkte", "die Richtung der Reaktion"], 1,
       "Das Enzym senkt nur die Startschwelle. Ausgangsstoffe und Produkte behalten ihre Energie, die Bilanz bleibt gleich.")],

    ["Das aktive Zentrum entscheidet über die Spezifität",
     ["Ein Enzym wirkt nicht auf alles. Es besitzt eine räumlich passgenaue Vertiefung, das <strong>aktive Zentrum</strong>, in das nur bestimmte Substrate hineinpassen.",
      "Das alte Bild vom Schlüssel und Schloss trifft es nicht ganz. Beim <strong>Induced Fit</strong> verformt sich das aktive Zentrum beim Andocken noch etwas, um optimal zu passen. Ein Handschuh passt besser als ein Schloss.",
      "Daraus folgt die doppelte Spezifität: Ein Enzym erkennt nur ein bestimmtes Substrat, und es katalysiert an ihm nur eine bestimmte Reaktion. Laktase spaltet Milchzucker und sonst nichts."],
     mc("ben-c2", "Warum spaltet Laktase nur Milchzucker?",
       ["Weil es nur im Darm vorkommt", "Weil nur Milchzucker räumlich in ihr aktives Zentrum passt",
        "Weil Milchzucker besonders klein ist", "Weil es ein Protein ist"], 1,
       "Die räumliche Passform des aktiven Zentrums erzeugt die Substratspezifität.")],

    ["Temperatur und pH haben ein Optimum, keine Richtung",
     ["Mehr Wärme bedeutet zunächst mehr Bewegung und damit mehr Zusammenstösse zwischen Enzym und Substrat. Die Aktivität steigt.",
      "Ab einer bestimmten Temperatur kippt es. Die Hitze zerstört die räumliche Faltung des Proteins, das aktive Zentrum verliert seine Form, die Aktivität bricht ein. Diese Denaturierung ist meist nicht umkehrbar.",
      "Die typische Kurve steigt also an, erreicht ein Optimum und fällt danach steil ab. Beim pH ist es dasselbe Bild. Pepsin im Magen arbeitet bei pH 2 optimal, Enzyme im Dünndarm bei etwa pH 8."],
     mc("ben-c3", "Warum fällt die Enzymaktivität oberhalb des Temperaturoptimums steil ab?",
       ["Weil das Substrat verdampft", "Weil die räumliche Struktur des Enzyms zerstört wird",
        "Weil die Reaktion endotherm wird", "Weil zu viele Zusammenstösse stattfinden"], 1,
       "Hitze zerstört die Faltung. Ohne intaktes aktives Zentrum kann kein Substrat mehr binden.")],

    ["Sättigung und Hemmung",
     ["Erhöht man die Substratmenge, steigt die Reaktionsgeschwindigkeit zunächst. Irgendwann sind aber alle aktiven Zentren dauernd besetzt, und mehr Substrat bringt nichts mehr. Die Kurve läuft in eine Sättigung.",
      "Ein <strong>kompetitiver Hemmstoff</strong> ähnelt dem Substrat und besetzt das aktive Zentrum. Diese Hemmung lässt sich durch mehr Substrat überwinden, weil die beiden um denselben Platz konkurrieren.",
      "Ein <strong>nicht kompetitiver Hemmstoff</strong> bindet woanders und verformt das Enzym. Hier hilft mehr Substrat nicht, weil das aktive Zentrum ohnehin nicht mehr passt. Diese Unterscheidung ist eine beliebte Prüfungsfrage."],
     mc("ben-c4", "Eine Hemmung lässt sich durch viel zusätzliches Substrat aufheben. Welche Art liegt vor?",
       ["nicht kompetitiv", "kompetitiv", "irreversibel", "allosterisch"], 1,
       "Nur bei der kompetitiven Hemmung konkurrieren Substrat und Hemmstoff um denselben Platz. Ein Überschuss an Substrat verdrängt den Hemmstoff.")],
  ]);

  /* ---------------------------------------- 3 Zellen */
  body("bio-cells", [
    ["Die Zelle ist ein arbeitsteiliger Betrieb",
     ["Eine eukaryotische Zelle ist kein Sack voll Flüssigkeit. Sie ist in Abteilungen gegliedert, die <strong>Organellen</strong>, jede mit einer klaren Aufgabe.",
      "Der Vorteil dieser Aufteilung ist derselbe wie in einem Betrieb: Unvereinbare Vorgänge können gleichzeitig ablaufen, weil sie räumlich getrennt sind. Verdauende Enzyme im Lysosom fressen nicht die eigene Zelle auf.",
      "Für die Prüfung genügt es nie, ein Organell zu benennen. Du musst seine Aufgabe erklären und begründen können, warum diese Aufgabe eine eigene Abteilung braucht."],
     mc("bce-c1", "Was ist der wesentliche Vorteil der Gliederung in Organellen?",
       ["Die Zelle wird stabiler", "Unvereinbare Vorgänge können gleichzeitig ablaufen, weil sie getrennt sind",
        "Die Zelle wird kleiner", "Es wird Energie gespart"], 1,
       "Die räumliche Trennung erlaubt zum Beispiel, verdauende Enzyme sicher einzuschliessen.")],

    ["Vom Bauplan zum fertigen Protein: eine Kette von Stationen",
     ["Der <strong>Zellkern</strong> verwahrt die DNA und gibt Arbeitskopien nach aussen. Er ist die Bibliothek, aus der nur Kopien ausgeliehen werden.",
      "An den <strong>Ribosomen</strong> wird die Kopie in eine Aminosäurekette übersetzt. Sitzen die Ribosomen auf dem <strong>rauen ER</strong>, gelangt das Protein direkt in dessen Inneres und wird dort gefaltet.",
      "Der <strong>Golgi-Apparat</strong> nimmt es entgegen, verändert es chemisch und verpackt es in Bläschen für den Versand. Diese Kette von Kern über Ribosom und ER zum Golgi ist ein beliebter Prüfungsgegenstand."],
     mc("bce-c2", "In welcher Reihenfolge durchläuft ein Exportprotein die Zelle?",
       ["Golgi, Ribosom, Kern", "Kern, Ribosom und raues ER, Golgi",
        "Mitochondrium, Kern, Golgi", "Ribosom, Kern, Lysosom"], 1,
       "Der Bauplan kommt aus dem Kern, die Synthese erfolgt am Ribosom des rauen ER, die Nachbearbeitung im Golgi.")],

    ["Mitochondrien liefern die Energiewährung",
     ["Im <strong>Mitochondrium</strong> wird der grösste Teil des ATP gewonnen. Seine innere Membran ist stark gefaltet, wodurch die Reaktionsfläche vervielfacht wird.",
      "Diese Faltung ist kein Zufall. Je mehr Fläche, desto mehr Enzymkomplexe der Atmungskette finden Platz. Muskel- und Herzzellen enthalten deshalb besonders viele und besonders stark gefaltete Mitochondrien.",
      "Mitochondrien besitzen eigene DNA und eigene Ribosomen. Das gilt als Hinweis darauf, dass sie ursprünglich selbständige Bakterien waren, die von einer Urzelle aufgenommen wurden."],
     mc("bce-c3", "Warum ist die innere Mitochondrienmembran stark gefaltet?",
       ["Um Platz zu sparen", "Um die Reaktionsfläche für die Atmungskette zu vergrössern",
        "Um Wasser abzuhalten", "Um die DNA zu schützen"], 1,
       "Mehr Membranfläche bedeutet mehr Enzymkomplexe und damit mehr ATP-Gewinnung.")],

    ["Was Pflanzenzellen zusätzlich haben",
     ["Drei Merkmale unterscheiden eine Pflanzenzelle von einer Tierzelle. Die <strong>Zellwand</strong> aus Cellulose gibt Stabilität und verhindert das Platzen bei Wasseraufnahme.",
      "Die grosse <strong>Vakuole</strong> speichert Wasser und Stoffe. Ihr Innendruck presst die Zelle gegen die Zellwand und hält die Pflanze aufrecht. Fehlt Wasser, sinkt dieser Turgor und die Pflanze welkt.",
      "Die <strong>Chloroplasten</strong> betreiben Photosynthese. Wichtig: Pflanzenzellen besitzen ebenfalls Mitochondrien, denn sie müssen ihren Zucker genauso veratmen wie Tiere. Die gegenteilige Annahme ist ein häufiger Fehler."],
     tf("bce-c4", "Pflanzenzellen brauchen keine Mitochondrien, weil sie Chloroplasten haben.", false,
       "Auch Pflanzen müssen Glucose veratmen, um ATP zu gewinnen, besonders nachts. Sie besitzen beides.")],
  ]);

  /* ---------------------------------------- 4 Photosynthese und Zellatmung */
  body("bio-energy", [
    ["Zwei Gleichungen, die einander spiegeln",
     ["<strong>Photosynthese:</strong> Kohlenstoffdioxid und Wasser werden mit Lichtenergie zu Glucose und Sauerstoff. Energie wird gespeichert.",
      "<strong>Zellatmung:</strong> Glucose und Sauerstoff werden zu Kohlenstoffdioxid und Wasser. Energie wird freigesetzt und auf ATP übertragen.",
      "Die beiden Gleichungen sind einander entgegengesetzt. Das heisst aber nicht, dass es dieselbe Reaktion rückwärts wäre. Sie laufen an anderen Orten, über andere Zwischenschritte und mit anderen Enzymen ab."],
     tf("bpe-c1", "Zellatmung ist einfach die Photosynthese rückwärts.", false,
       "Die Summengleichungen sind entgegengesetzt, die Wege aber völlig verschieden: andere Orte, andere Zwischenprodukte, andere Enzyme.")],

    ["Die Photosynthese hat zwei Teile",
     ["In der <strong>Lichtreaktion</strong> an den Thylakoidmembranen fängt Chlorophyll Licht ein. Die Energie wird genutzt, um Wasser zu spalten. Dabei entsteht der Sauerstoff, den wir atmen.",
      "Der Sauerstoff ist also ein Nebenprodukt der Wasserspaltung, nicht des Kohlenstoffdioxids. Das ist eine häufige Verwechslung und eine gute Prüfungsfrage.",
      "Die Lichtreaktion liefert ATP und NADPH. Damit baut der <strong>Calvin-Zyklus</strong> im Stroma das CO₂ in Zucker ein. Dieser zweite Teil braucht kein Licht direkt, aber die Produkte der Lichtreaktion."],
     mc("bpe-c2", "Woher stammt der bei der Photosynthese freigesetzte Sauerstoff?",
       ["aus dem Kohlenstoffdioxid", "aus dem gespaltenen Wasser", "aus der Glucose", "aus der Luft"], 1,
       "Die Lichtreaktion spaltet Wasser. Der Sauerstoff daraus wird frei, der Kohlenstoff aus dem CO₂ landet im Zucker.")],

    ["Die Zellatmung läuft in drei Etappen",
     ["Die <strong>Glykolyse</strong> im Zellplasma spaltet Glucose in zwei kleinere Moleküle und liefert wenig ATP. Sie braucht keinen Sauerstoff.",
      "Der <strong>Citratzyklus</strong> in der Mitochondrienmatrix baut die Reste vollständig zu CO₂ ab und lädt Elektronenüberträger auf.",
      "Die <strong>Atmungskette</strong> an der inneren Mitochondrienmembran liefert den grössten Teil des ATP. Hier nimmt Sauerstoff am Ende die Elektronen auf und wird zu Wasser. Fehlt Sauerstoff, staut sich die ganze Kette zurück."],
     mc("bpe-c3", "Welche Rolle hat Sauerstoff in der Zellatmung?",
       ["Er spaltet die Glucose", "Er nimmt am Ende der Atmungskette die Elektronen auf",
        "Er liefert die Energie", "Er transportiert das ATP"], 1,
       "Sauerstoff ist der letzte Elektronenakzeptor. Ohne ihn stockt die gesamte Kette, und die ATP-Ausbeute bricht ein.")],

    ["Gärung ist die Notlösung",
     ["Ohne Sauerstoff kann die Zelle nur die Glykolyse nutzen. Damit diese weiterläuft, müssen die Elektronenüberträger entladen werden, und dafür wird das Zwischenprodukt weiterverarbeitet.",
      "Beim Menschen entsteht dabei <strong>Milchsäure</strong>, bei Hefe <strong>Ethanol und CO₂</strong>. Letzteres ist die Grundlage von Brot und Bier.",
      "Der Preis ist hoch: Die Gärung liefert nur zwei ATP pro Glucose, die vollständige Zellatmung etwa dreissig. Deshalb hält ein Sprint nur kurz an, während Ausdauerleistung Sauerstoff braucht."],
     mc("bpe-c4", "Warum lässt sich ein Sprint nicht lange durchhalten?",
       ["Weil die Muskeln keine Glucose mehr haben", "Weil die Gärung pro Glucose nur sehr wenig ATP liefert",
        "Weil Milchsäure giftig ist", "Weil die Mitochondrien ausfallen"], 1,
       "Ohne ausreichend Sauerstoff liefert die Gärung nur rund zwei ATP statt etwa dreissig. Der Energiebedarf lässt sich so nicht lange decken.")],
  ]);

  /* ---------------------------------------- 5 Membrantransport */
  body("bio-membrane-transport", [
    ["Diffusion braucht keine Energie und keinen Plan",
     ["Teilchen bewegen sich ständig und zufällig. Wo viele von ihnen sind, stossen sie häufiger zusammen und werden statistisch nach aussen gedrängt.",
      "Daraus entsteht netto eine Wanderung von hoher zu tiefer Konzentration, bis überall gleich viele sind. Das ist die <strong>Diffusion</strong>. Niemand steuert sie, sie ist eine reine Folge des Zufalls.",
      "Wichtig: Die Bewegung hört im Gleichgewicht nicht auf. Es wandern nur in beide Richtungen gleich viele Teilchen, sodass sich netto nichts mehr ändert."],
     tf("bmt-c1", "Im Diffusionsgleichgewicht bewegen sich die Teilchen nicht mehr.", false,
       "Sie bewegen sich weiterhin zufällig. Nur der Nettostrom ist null, weil in beide Richtungen gleich viele wandern.")],

    ["Die Membran lässt nicht alles durch",
     ["Die Zellmembran ist innen fettartig. Kleine, unpolare Teilchen wie Sauerstoff oder Kohlenstoffdioxid gleiten deshalb einfach hindurch.",
      "Geladene Teilchen und grössere polare Moleküle wie Glucose kommen dort nicht durch. Für sie gibt es <strong>Kanal- und Trägerproteine</strong>, die einen Durchgang bilden.",
      "Läuft der Transport durch ein Protein, aber weiterhin mit dem Konzentrationsgefälle und ohne Energieaufwand, heisst er <strong>erleichterte Diffusion</strong>. Er ist passiv, aber selektiv."],
     mc("bmt-c2", "Warum braucht Glucose ein Transportprotein, Sauerstoff aber nicht?",
       ["Glucose ist zu leicht", "Glucose ist polar und gross, der fettartige Membraninnenraum lässt sie nicht durch",
        "Sauerstoff ist geladen", "Glucose wird sofort verbraucht"], 1,
       "Die Membran ist innen unpolar. Polare und grosse Moleküle brauchen einen Proteinkanal.")],

    ["Osmose ist Diffusion von Wasser",
     ["Trennt eine Membran zwei Lösungen und kann nur Wasser hindurch, wandert das Wasser dorthin, wo mehr gelöste Teilchen sind. Das ist die <strong>Osmose</strong>.",
      "Anschaulich: Das Wasser verdünnt die konzentriertere Seite. Formal ist es dieselbe Diffusion, nur betrachtet man das Wasser statt der gelösten Stoffe.",
      "Praktische Folgen: Eine tierische Zelle in reinem Wasser nimmt Wasser auf und platzt. In stark salziger Lösung verliert sie Wasser und schrumpft. Eine Pflanzenzelle platzt dank Zellwand nicht, sie wird prall."],
     mc("bmt-c3", "Eine rote Blutzelle wird in destilliertes Wasser gelegt. Was passiert?",
       ["Sie schrumpft", "Sie nimmt Wasser auf und kann platzen", "Nichts", "Sie verliert Salz"], 1,
       "Aussen sind weniger gelöste Teilchen als innen. Wasser strömt in die Zelle, die keine stützende Zellwand hat.")],

    ["Aktiver Transport arbeitet gegen das Gefälle",
     ["Manchmal muss eine Zelle einen Stoff dorthin bringen, wo bereits mehr davon ist. Das geschieht nicht von selbst und kostet deshalb Energie.",
      "<strong>Pumpen</strong> in der Membran verbrauchen ATP und schleusen Teilchen gegen das Gefälle. Das bekannteste Beispiel ist die Natrium-Kalium-Pumpe, die den Ladungsunterschied an Nervenzellen aufbaut.",
      "Erkennungsmerkmal in Aufgaben: Wird ein Stoff entgegen dem Konzentrationsgefälle angereichert oder hört der Transport bei Energiemangel auf, handelt es sich um aktiven Transport."],
     mc("bmt-c4", "Woran erkennst du aktiven Transport in einer Aufgabe?",
       ["Der Stoff wandert von hoher zu tiefer Konzentration", "Der Stoff wird gegen das Gefälle angereichert und der Transport stoppt ohne Energie",
        "Es sind keine Proteine beteiligt", "Er läuft nur bei Wärme"], 1,
       "Anreicherung gegen das Gefälle und Abhängigkeit von ATP sind die beiden sicheren Kennzeichen.")],
  ]);

  /* ---------------------------------------- 6 Zellzyklus und Mitose */
  body("bio-cell-cycle-mitosis", [
    ["Kopieren kommt vor Teilen",
     ["Eine Zelle kann sich nicht einfach in zwei Hälften teilen. Jede Tochterzelle braucht einen vollständigen Satz der Erbinformation, also muss vorher kopiert werden.",
      "Genau das geschieht in der <strong>S-Phase</strong> des Zellzyklus. Davor liegt die G1-Phase mit Wachstum, danach die G2-Phase mit Kontrolle und Vorbereitung.",
      "Diese drei Phasen zusammen heissen Interphase und machen den weitaus grössten Teil des Zellzyklus aus. Die eigentliche Teilung ist zeitlich nur eine kurze Episode."],
     mc("bcc-c1", "In welcher Phase wird die DNA verdoppelt?",
       ["G1", "S", "G2", "Anaphase"], 1,
       "S steht für Synthese. Danach besteht jedes Chromosom aus zwei identischen Schwesterchromatiden.")],

    ["Ein Chromosom hat vor und nach der S-Phase nicht dieselbe Form",
     ["Vor der Verdopplung besteht ein Chromosom aus einem Chromatid. Nach der S-Phase besteht dasselbe Chromosom aus zwei identischen <strong>Schwesterchromatiden</strong>, verbunden am Centromer.",
      "Diese Unterscheidung verwirrt viele. Merke: Die Zahl der Chromosomen ändert sich durch die Verdopplung nicht. Nur ihre innere Struktur ändert sich.",
      "Erst wenn in der Anaphase die Schwesterchromatiden getrennt werden, verdoppelt sich kurzfristig die Chromosomenzahl, bevor sie auf zwei Zellen verteilt wird."],
     tf("bcc-c2", "Nach der S-Phase hat die Zelle doppelt so viele Chromosomen.", false,
       "Die Chromosomenzahl bleibt gleich. Jedes Chromosom besteht nun aber aus zwei Schwesterchromatiden.")],

    ["Die vier Phasen der Mitose",
     ["In der <strong>Prophase</strong> verdichten sich die Chromosomen und werden sichtbar, die Kernhülle löst sich auf, der Spindelapparat entsteht.",
      "In der <strong>Metaphase</strong> ordnen sich die Chromosomen in der Äquatorialebene. In der <strong>Anaphase</strong> ziehen die Spindelfasern die Schwesterchromatiden zu den entgegengesetzten Polen.",
      "In der <strong>Telophase</strong> bilden sich neue Kernhüllen, die Chromosomen entspiralisieren sich. Die anschliessende <strong>Cytokinese</strong> teilt das Zellplasma. Merkhilfe für die Reihenfolge: Pro Metzger Anna Telefoniert."],
     mc("bcc-c3", "Was wird in der Anaphase der Mitose getrennt?",
       ["homologe Chromosomen", "Schwesterchromatiden", "Zellkerne", "Zellwände"], 1,
       "Die Mitose trennt die identischen Schwesterchromatiden. Homologe Chromosomen werden erst in der Meiose getrennt.")],

    ["Kontrollpunkte und was passiert, wenn sie versagen",
     ["An mehreren Stellen prüft die Zelle, ob alles in Ordnung ist: ob die DNA fehlerfrei kopiert wurde, ob alle Chromosomen korrekt an der Spindel hängen.",
      "Fällt eine Prüfung negativ aus, wird der Zyklus angehalten und der Schaden repariert. Gelingt das nicht, leitet die Zelle den kontrollierten Selbstabbau ein.",
      "Versagen diese Kontrollen dauerhaft, teilt sich die Zelle unkontrolliert weiter. Das ist der zelluläre Kern der Krebsentstehung und macht deutlich, warum die Kontrollpunkte biologisch so wichtig sind."],
     mc("bcc-c4", "Welche Funktion haben die Kontrollpunkte im Zellzyklus?",
       ["Sie beschleunigen die Teilung", "Sie prüfen auf Fehler und halten den Zyklus bei Bedarf an",
        "Sie verdoppeln die DNA", "Sie bilden die Spindel"], 1,
       "Sie sind eine Qualitätskontrolle. Ihr dauerhaftes Versagen führt zu unkontrollierter Teilung.")],
  ]);

  /* ---------------------------------------- 7 Meiose */
  body("bio-meiosis-karyotype", [
    ["Warum es eine zweite Teilungsart braucht",
     ["Bei der Befruchtung verschmelzen zwei Zellen. Hätten beide den vollen Chromosomensatz, würde sich die Zahl in jeder Generation verdoppeln. Nach wenigen Generationen wäre das unmöglich.",
      "Deshalb müssen Keimzellen nur den halben Satz enthalten, also <strong>haploid</strong> sein. Körperzellen sind <strong>diploid</strong> mit je zwei Exemplaren jedes Chromosoms, eines von der Mutter, eines vom Vater.",
      "Diese Halbierung leistet die <strong>Meiose</strong>. Beim Menschen werden aus 46 Chromosomen in der Körperzelle 23 in Ei- und Samenzelle."],
     mc("bme-c1", "Warum müssen Keimzellen haploid sein?",
       ["Weil sie kleiner sind", "Weil sich die Chromosomenzahl bei der Befruchtung sonst mit jeder Generation verdoppeln würde",
        "Weil sie sich schneller teilen", "Weil sie keine Mitochondrien haben"], 1,
       "Zwei haploide Zellen ergeben bei der Verschmelzung wieder eine diploide. So bleibt die Chromosomenzahl über Generationen konstant.")],

    ["Zwei Teilungen mit verschiedenen Aufgaben",
     ["Die <strong>erste Reifeteilung</strong> trennt die homologen Chromosomen voneinander. Hier findet die eigentliche Halbierung statt: aus einer diploiden Zelle werden zwei haploide.",
      "Die <strong>zweite Reifeteilung</strong> trennt anschliessend die Schwesterchromatiden, ähnlich wie eine Mitose. Aus zwei Zellen werden vier.",
      "Das Ergebnis sind vier haploide Zellen. Bei der Spermienbildung werden alle vier zu Spermien, bei der Eizellbildung nur eine, weil die Nährstoffe auf eine Zelle konzentriert werden."],
     mc("bme-c2", "Was wird in der ersten Reifeteilung getrennt?",
       ["Schwesterchromatiden", "homologe Chromosomen", "Zellkerne", "Gene"], 1,
       "Erst die zweite Reifeteilung trennt die Schwesterchromatiden. Die Halbierung geschieht in der ersten.")],

    ["Wie Vielfalt entsteht",
     ["Zwei Vorgänge sorgen dafür, dass keine zwei Keimzellen gleich sind. Beim <strong>Crossing-over</strong> tauschen homologe Chromosomen Abschnitte aus. Es entstehen neue Kombinationen von Allelen auf einem Chromosom.",
      "Zweitens werden die homologen Chromosomen bei der ersten Teilung <strong>zufällig</strong> auf die Pole verteilt. Jedes Paar entscheidet unabhängig, welche Seite es nimmt.",
      "Allein daraus ergeben sich beim Menschen über acht Millionen mögliche Kombinationen, und das Crossing-over erhöht die Zahl noch einmal drastisch. Deshalb gleichen sich Geschwister, sind aber nie identisch."],
     mc("bme-c3", "Welche zwei Vorgänge der Meiose erzeugen genetische Vielfalt?",
       ["Verdopplung und Teilung", "Crossing-over und die zufällige Verteilung der homologen Chromosomen",
        "Mutation und Selektion", "Kondensation und Entspiralisierung"], 1,
       "Beide Vorgänge kombinieren mütterliches und väterliches Erbgut immer wieder neu.")],

    ["Das Karyogramm lesen",
     ["In einem <strong>Karyogramm</strong> werden alle Chromosomen einer Zelle nach Grösse und Bandenmuster geordnet dargestellt, paarweise angeordnet.",
      "Daraus liest man dreierlei ab: die Gesamtzahl, das Geschlecht über das letzte Paar, und ob ein Chromosom zu viel oder zu wenig vorhanden ist.",
      "Ein dreifaches Chromosom 21 bedeutet Trisomie 21. Ursache ist meist eine Fehlverteilung während der Meiose, bei der ein Chromosomenpaar nicht getrennt wurde."],
     mc("bme-c4", "Was lässt sich aus einem Karyogramm ablesen?",
       ["die Augenfarbe", "Chromosomenzahl, Geschlecht und Zahlenabweichungen",
        "die Blutgruppe", "die Enzymaktivität"], 1,
       "Das Karyogramm zeigt Zahl und Form der Chromosomen, nicht die einzelnen Gene.")],
  ]);

  /* ---------------------------------------- 8 Mendel */
  body("bio-mendel", [
    ["Zwei Allele pro Merkmal, eines von jedem Elternteil",
     ["Für jedes Gen besitzt eine diploide Zelle zwei Exemplare, je eines auf den beiden homologen Chromosomen. Diese Varianten heissen <strong>Allele</strong>.",
      "Sind beide gleich, ist das Individuum <strong>reinerbig</strong>. Sind sie verschieden, ist es <strong>mischerbig</strong>. Bei Mischerbigkeit setzt sich oft eines durch, das <strong>dominante</strong>, während das <strong>rezessive</strong> verdeckt bleibt.",
      "Daraus folgt die wichtigste Unterscheidung des Kapitels: Der <strong>Genotyp</strong> ist die Allelkombination, der <strong>Phänotyp</strong> das sichtbare Ergebnis. Zwei verschiedene Genotypen können denselben Phänotyp zeigen."],
     mc("bmd-c1", "Zwei Pflanzen sehen gleich aus. Was folgt daraus für ihren Genotyp?",
       ["Er muss identisch sein", "Er kann verschieden sein, etwa AA und Aa",
        "Beide sind rezessiv", "Beide sind reinerbig"], 1,
       "Bei Dominanz zeigen AA und Aa denselben Phänotyp. Vom Aussehen lässt sich nicht auf den Genotyp schliessen.")],

    ["Warum die Spaltung 3 zu 1 entsteht",
     ["Kreuzt man zwei mischerbige Individuen Aa, gibt jedes bei der Keimzellbildung entweder A oder a weiter, jeweils mit gleicher Wahrscheinlichkeit.",
      "Die vier möglichen Kombinationen sind AA, Aa, aA und aa. Drei davon enthalten mindestens ein A und zeigen deshalb das dominante Merkmal, nur aa zeigt das rezessive.",
      "Daraus ergibt sich das Verhältnis 3 zu 1 im Phänotyp und 1 zu 2 zu 1 im Genotyp. Das Kreuzungsquadrat ist nichts anderes als eine geordnete Darstellung dieser vier gleich wahrscheinlichen Fälle."],
     mc("bmd-c2", "Aa × Aa. Welches Phänotypverhältnis ist zu erwarten?",
       ["1 zu 1", "3 zu 1", "1 zu 2 zu 1", "4 zu 0"], 1,
       "Drei der vier Kombinationen enthalten mindestens ein dominantes A. Im Genotyp lautet das Verhältnis dagegen 1 zu 2 zu 1.")],

    ["Die drei Regeln in verständlicher Sprache",
     ["Die <strong>Uniformitätsregel</strong>: Kreuzt man zwei reinerbige Eltern, sind alle Nachkommen der ersten Generation gleich. Jeder erbt dieselbe Kombination.",
      "Die <strong>Spaltungsregel</strong>: Kreuzt man diese Nachkommen untereinander, treten die Merkmale in festen Zahlenverhältnissen wieder auf.",
      "Die <strong>Unabhängigkeitsregel</strong>: Betrachtet man zwei Merkmale gleichzeitig, werden sie unabhängig voneinander vererbt, sofern die Gene auf verschiedenen Chromosomen liegen. Diese Einschränkung ist wichtig und wird oft vergessen."],
     tf("bmd-c3", "Die Unabhängigkeitsregel gilt für alle Merkmalspaare ohne Einschränkung.", false,
       "Sie gilt nur, wenn die beiden Gene auf verschiedenen Chromosomen liegen. Gekoppelte Gene werden gemeinsam vererbt.")],

    ["Die Rückkreuzung als Testverfahren",
     ["Ein Individuum zeigt das dominante Merkmal. Ist es AA oder Aa? Vom Aussehen her lässt sich das nicht entscheiden.",
      "Die Lösung ist die <strong>Rückkreuzung</strong> mit einem rezessiven Partner aa. Ist das Individuum AA, sind alle Nachkommen Aa und zeigen das dominante Merkmal.",
      "Ist es dagegen Aa, tritt etwa die Hälfte der Nachkommen rezessiv in Erscheinung. Ein einziger rezessiver Nachkomme beweist damit, dass der Elternteil mischerbig war."],
     mc("bmd-c4", "Eine Rückkreuzung mit aa ergibt etwa 50 Prozent rezessive Nachkommen. Welchen Genotyp hatte der Elternteil?",
       ["AA", "Aa", "aa", "lässt sich nicht sagen"], 1,
       "Nur ein mischerbiger Elternteil gibt in der Hälfte der Fälle ein a weiter. Bei AA wären alle Nachkommen dominant.")],
  ]);

  /* ---------------------------------------- 9 Dihybrid und X-gekoppelt */
  body("bio-dihybrid-sexlinked", [
    ["Zwei Merkmale gleichzeitig",
     ["Betrachtet man zwei unabhängige Merkmale zugleich, bildet jedes Elternteil vier verschiedene Keimzelltypen. Aus AaBb entstehen AB, Ab, aB und ab.",
      "Kombiniert man diese im Kreuzungsquadrat, ergeben sich sechzehn Felder. Im Phänotyp entsteht daraus das bekannte Verhältnis 9 zu 3 zu 3 zu 1.",
      "Verstehen statt auswendig lernen: Die 9 sind die Fälle mit beiden dominanten Merkmalen, die beiden 3er zeigen je eines, die 1 zeigt beide rezessiv. Es ist nur 3 zu 1 mal 3 zu 1."],
     mc("bds-c1", "Woher stammt das Verhältnis 9 zu 3 zu 3 zu 1?",
       ["aus einer Sonderregel", "aus der Kombination zweier unabhängiger 3-zu-1-Spaltungen",
        "aus dem Crossing-over", "aus der Geschlechtsbestimmung"], 1,
       "Zwei unabhängige Merkmale multiplizieren ihre Wahrscheinlichkeiten: 3 zu 1 mal 3 zu 1 ergibt 9 zu 3 zu 3 zu 1.")],

    ["Gekoppelte Gene brechen die Regel",
     ["Liegen zwei Gene auf demselben Chromosom, werden sie meist gemeinsam weitergegeben. Die erwarteten Verhältnisse stimmen dann nicht mehr.",
      "Nur ein Crossing-over zwischen den beiden Genorten kann sie trennen. Je weiter die Gene auseinanderliegen, desto häufiger passiert das.",
      "Genau diese Häufigkeit nutzt man, um Genkarten zu erstellen: Selten getrennte Gene liegen nahe beieinander, häufig getrennte weit auseinander."],
     mc("bds-c2", "Zwei Gene werden fast immer gemeinsam vererbt. Was folgt daraus?",
       ["Sie liegen auf verschiedenen Chromosomen", "Sie liegen auf demselben Chromosom nahe beieinander",
        "Eines ist dominant", "Sie sind X-gekoppelt"], 1,
       "Enge Kopplung bedeutet geringe Distanz. Nur ein Crossing-over dazwischen könnte sie trennen, und das ist bei kurzer Distanz selten.")],

    ["Warum Männer bei X-gekoppelten Merkmalen häufiger betroffen sind",
     ["Frauen haben zwei X-Chromosomen, Männer ein X und ein Y. Liegt ein rezessives krankmachendes Allel auf dem X, kann es bei Frauen durch das zweite X ausgeglichen werden.",
      "Männern fehlt dieser Ausgleich. Ihr einziges X-Allel kommt immer zur Ausprägung, egal ob dominant oder rezessiv. Deshalb sind sie bei Rotgrünblindheit und Bluterkrankheit deutlich häufiger betroffen.",
      "Eine Frau mit einem betroffenen Allel ist <strong>Konduktorin</strong>: selbst gesund, gibt sie das Allel aber an die Hälfte ihrer Kinder weiter."],
     mc("bds-c3", "Warum sind Männer von Rotgrünblindheit häufiger betroffen?",
       ["Weil das Gen auf dem Y-Chromosom liegt", "Weil ihnen das zweite X fehlt, das ein rezessives Allel ausgleichen könnte",
        "Weil sie schlechter sehen", "Weil das Allel dominant ist"], 1,
       "Ein Mann hat nur ein X. Jedes dort liegende Allel wird ausgeprägt, ohne Ausgleichsmöglichkeit.")],

    ["Stammbäume systematisch auswerten",
     ["Gehe immer in derselben Reihenfolge vor. Erste Frage: Treten betroffene Kinder bei nicht betroffenen Eltern auf? Dann ist das Merkmal rezessiv, denn es war verdeckt vorhanden.",
      "Zweite Frage: Ist ein Vater betroffen und seine Tochter nicht, spricht das gegen einen X-gekoppelt dominanten Erbgang, denn er gibt sein X immer an alle Töchter weiter.",
      "Dritte Frage: Sind deutlich mehr Männer als Frauen betroffen, deutet das auf X-gekoppelt rezessiv hin. Diese drei Fragen klären die meisten Prüfungsstammbäume."],
     mc("bds-c4", "Nicht betroffene Eltern haben ein betroffenes Kind. Was folgt daraus?",
       ["Das Merkmal ist dominant", "Das Merkmal ist rezessiv und beide Eltern sind Träger",
        "Das Kind ist adoptiert", "Das Merkmal liegt auf dem Y"], 1,
       "Ein dominantes Merkmal müsste bei mindestens einem Elternteil sichtbar sein. Also ist es rezessiv und war verdeckt vorhanden.")],
  ]);

  /* ---------------------------------------- 10 DNA und Replikation */
  body("bio-dna-replication", [
    ["Der Bau der DNA erklärt ihre Funktion",
     ["Die DNA ist eine verdrillte Leiter. Die Holme bestehen abwechselnd aus Zucker und Phosphat, die Sprossen aus je zwei Basen, die einander gegenüberliegen.",
      "Die Paarung ist nicht beliebig: <strong>Adenin</strong> passt nur zu <strong>Thymin</strong>, <strong>Guanin</strong> nur zu <strong>Cytosin</strong>. Grund ist die Zahl der möglichen Wasserstoffbrücken und die Grösse der Basen.",
      "Daraus folgt die entscheidende Eigenschaft: Kennt man einen Strang, kennt man automatisch den anderen. Die Information liegt doppelt vor, und genau das macht exaktes Kopieren möglich."],
     mc("bdr-c1", "Ein DNA-Strang lautet A-T-G-C. Wie lautet der Gegenstrang?",
       ["A-T-G-C", "T-A-C-G", "G-C-A-T", "C-G-T-A"], 1,
       "A paart mit T, G mit C. Der komplementäre Strang lautet also T-A-C-G.")],

    ["Semikonservativ heisst: eine Hälfte ist immer alt",
     ["Bei der Verdopplung werden die beiden Stränge getrennt. Jeder dient als Vorlage für einen neuen Gegenstrang.",
      "Das Ergebnis sind zwei Doppelstränge, die je aus einem alten und einem neuen Strang bestehen. Dieses Prinzip heisst <strong>semikonservativ</strong>, also halberhaltend.",
      "Das ist kein Detail, sondern der Grund für die hohe Genauigkeit. Der alte Strang ist eine geprüfte Vorlage, und Reparaturenzyme können bei einem Fehler erkennen, welcher Strang der ursprüngliche war."],
     tf("bdr-c2", "Nach der Replikation besteht ein Doppelstrang aus zwei komplett neuen Strängen.", false,
       "Jeder neue Doppelstrang enthält einen alten und einen neuen Strang. Das nennt man semikonservativ.")],

    ["Wie die Replikation praktisch abläuft",
     ["Zuerst trennt ein Enzym die beiden Stränge, indem es die Wasserstoffbrücken zwischen den Basen aufbricht. Es entsteht eine gabelförmige Öffnung.",
      "Die <strong>DNA-Polymerase</strong> lagert nun passende Nukleotide an. Sie kann aber nur in eine Richtung arbeiten. Deshalb entsteht der eine Strang durchgehend, der andere in kurzen Stücken, die anschliessend verknüpft werden.",
      "Zuletzt prüfen Korrekturenzyme das Ergebnis. Die Fehlerrate sinkt dadurch auf etwa einen Fehler pro Milliarde Bausteine."],
     mc("bdr-c3", "Warum wird ein Strang in kurzen Stücken gebildet?",
       ["Weil er kürzer ist", "Weil die Polymerase nur in eine Richtung arbeiten kann",
        "Weil er weniger wichtig ist", "Weil er später abgebaut wird"], 1,
       "Die beiden Stränge verlaufen gegenläufig. Die Polymerase kann nur in einer Richtung anbauen, deshalb entsteht der zweite Strang stückweise.")],

    ["Mutationen: Fehler mit unterschiedlichen Folgen",
     ["Bleibt ein Fehler unkorrigiert, entsteht eine <strong>Mutation</strong>. Wird eine Base ausgetauscht, kann sich eine Aminosäure ändern, muss aber nicht, weil der genetische Code mehrdeutig ist.",
      "Wird dagegen eine Base eingefügt oder entfernt, verschiebt sich das gesamte Leseraster. Ab dieser Stelle ist die ganze folgende Sequenz falsch. Solche Mutationen sind meist schwerwiegend.",
      "Mutationen sind nicht grundsätzlich schädlich. Ohne sie gäbe es keine Variation, und ohne Variation keine Evolution. Sie sind der Rohstoff, an dem die Selektion ansetzt."],
     mc("bdr-c4", "Warum ist eine eingefügte Base meist folgenschwerer als eine ausgetauschte?",
       ["Weil sie die DNA verlängert", "Weil sich das gesamte Leseraster ab dieser Stelle verschiebt",
        "Weil sie nicht repariert werden kann", "Weil sie das Chromosom zerbricht"], 1,
       "Der Code wird in Dreiergruppen gelesen. Eine zusätzliche Base verschiebt alle folgenden Tripletts.")],
  ]);

  /* ---------------------------------------- 11 Proteinbiosynthese */
  body("bio-protein-synthesis", [
    ["Warum überhaupt eine Arbeitskopie nötig ist",
     ["Die DNA bleibt im Zellkern. Die Ribosomen, an denen Proteine entstehen, liegen aber ausserhalb im Zellplasma.",
      "Statt das kostbare Original hinauszuschicken, wird eine Kopie des benötigten Abschnitts angefertigt: die <strong>mRNA</strong>. Sie ist einsträngig, kürzer und wird nach Gebrauch abgebaut.",
      "Der Vorteil ist doppelt: Das Original bleibt geschützt, und die Zelle kann steuern, wie viele Kopien eines bestimmten Gens sie gerade herstellt. Genau darüber reguliert sie, welche Proteine in welcher Menge entstehen."],
     mc("bps-c1", "Warum verlässt die DNA den Zellkern nicht?",
       ["Sie ist zu gross", "Sie ist das geschützte Original, nach aussen geht nur eine Arbeitskopie",
        "Sie würde sich auflösen", "Sie wird nicht gebraucht"], 1,
       "Das Original bleibt geschützt im Kern. Die mRNA-Kopie trägt die Information hinaus und wird danach abgebaut.")],

    ["Transkription: Abschreiben im Zellkern",
     ["Ein Enzym öffnet die DNA an der Stelle des gesuchten Gens und liest einen der beiden Stränge ab.",
      "Es baut dabei eine komplementäre RNA. Der einzige Unterschied zur DNA-Paarung: Statt Thymin wird <strong>Uracil</strong> eingebaut. A paart also mit U.",
      "Die fertige mRNA wird nachbearbeitet und verlässt den Kern durch eine Pore. Im Zellplasma wartet bereits das Ribosom."],
     mc("bps-c2", "Welche Base ersetzt in der RNA das Thymin?",
       ["Adenin", "Guanin", "Cytosin", "Uracil"], 3,
       "In der RNA steht Uracil an der Stelle des Thymins. A paart dort also mit U.")],

    ["Der genetische Code: drei Basen für eine Aminosäure",
     ["Es gibt zwanzig Aminosäuren, aber nur vier Basen. Mit zwei Basen wären nur sechzehn Kombinationen möglich, das genügt nicht. Mit drei Basen sind es 64, das reicht mit Reserve.",
      "Deshalb bilden je drei Basen ein <strong>Codon</strong>. Der Code ist damit mehrdeutig: Für die meisten Aminosäuren gibt es mehrere Codons.",
      "Diese Mehrdeutigkeit ist ein Schutz. Wird die dritte Base eines Codons vertauscht, steht oft trotzdem dieselbe Aminosäure. Der Fehler bleibt folgenlos."],
     mc("bps-c3", "Warum besteht ein Codon aus drei und nicht aus zwei Basen?",
       ["Weil drei stabiler ist", "Weil zwei Basen nur 16 Kombinationen ergeben, was für 20 Aminosäuren nicht reicht",
        "Weil die tRNA drei Arme hat", "Weil die DNA doppelsträngig ist"], 1,
       "4² = 16 ist zu wenig, 4³ = 64 reicht aus. Deshalb ist der Code ein Triplettcode.")],

    ["Translation: Übersetzen am Ribosom",
     ["Das Ribosom wandert die mRNA entlang und liest Codon für Codon. Für jedes Codon bringt eine passende <strong>tRNA</strong> die zugehörige Aminosäure heran.",
      "Die tRNA erkennt ihr Codon über ein komplementäres Gegenstück, das Anticodon. Das Ribosom verknüpft die angelieferten Aminosäuren zu einer Kette.",
      "Ein Startcodon beginnt den Vorgang, ein Stoppcodon beendet ihn. Die fertige Kette faltet sich zum funktionsfähigen Protein. Damit ist der Weg vom Gen zum Merkmal geschlossen."],
     mc("bps-c4", "Welche Aufgabe hat die tRNA?",
       ["Sie kopiert die DNA", "Sie bringt die zum Codon passende Aminosäure zum Ribosom",
        "Sie baut das Ribosom auf", "Sie verlässt den Zellkern mit der Information"], 1,
       "Die tRNA erkennt über ihr Anticodon das passende Codon und liefert die zugehörige Aminosäure.")],
  ]);

  /* ---------------------------------------- 12 Verdauung */
  body("bio-digestion", [
    ["Verdauung ist Zerkleinern in zwei Stufen",
     ["Nahrungsbestandteile sind zu gross, um durch die Darmwand ins Blut zu gelangen. Sie müssen in ihre Bausteine zerlegt werden.",
      "Die <strong>mechanische</strong> Verdauung durch Kauen und Darmbewegungen vergrössert die Oberfläche. Das ist keine Nebensache: Enzyme wirken nur an Oberflächen, deshalb beschleunigt jede Zerkleinerung den chemischen Abbau.",
      "Die <strong>chemische</strong> Verdauung durch Enzyme spaltet dann die Bindungen. Stärke wird zu Traubenzucker, Proteine zu Aminosäuren, Fette zu Fettsäuren und Glycerin."],
     mc("bdg-c1", "Warum beschleunigt Kauen die chemische Verdauung?",
       ["Weil Speichel wärmer wird", "Weil die vergrösserte Oberfläche den Enzymen mehr Angriffsfläche bietet",
        "Weil dabei Enzyme entstehen", "Weil der Magen sich öffnet"], 1,
       "Enzyme arbeiten an Oberflächen. Mehr Oberfläche bedeutet mehr gleichzeitige Reaktionen.")],

    ["Jeder Abschnitt hat seine Bedingungen",
     ["Im <strong>Mund</strong> beginnt der Stärkeabbau durch Enzyme im Speichel. Im <strong>Magen</strong> herrscht mit pH 2 eine stark saure Umgebung, in der Pepsin Proteine angreift und die meisten Keime abgetötet werden.",
      "Diese Säure stoppt zugleich den Stärkeabbau, denn das Speichelenzym wird dort denaturiert. Verdauung ist also nicht nur ein Nacheinander, sondern auch ein Abschalten.",
      "Im <strong>Dünndarm</strong> wird der Brei durch Sekrete aus Bauchspeicheldrüse und Leber neutralisiert. Erst bei etwa pH 8 arbeiten die dortigen Enzyme optimal."],
     mc("bdg-c2", "Warum endet der Stärkeabbau im Magen vorerst?",
       ["Weil keine Stärke mehr da ist", "Weil das Speichelenzym im sauren Magenmilieu denaturiert",
        "Weil der Magen keine Enzyme hat", "Weil Stärke nicht verdaulich ist"], 1,
       "Jedes Enzym hat ein pH-Optimum. Bei pH 2 verliert das Speichelenzym seine Form und damit seine Wirkung.")],

    ["Fette brauchen einen Zwischenschritt",
     ["Fette sind wasserunlöslich und schwimmen als grosse Tropfen im wässrigen Darminhalt. Enzyme können nur an der Oberfläche angreifen, und die ist bei grossen Tropfen klein.",
      "Die <strong>Galle</strong> aus der Leber löst dieses Problem. Sie zerteilt die Tropfen in viele winzige, das nennt man Emulgieren. Die Gesamtoberfläche steigt dadurch enorm.",
      "Wichtig für Prüfungsfragen: Galle enthält selbst keine Enzyme. Sie verdaut nichts, sie bereitet nur vor. Die eigentliche Spaltung erledigt die Lipase."],
     tf("bdg-c3", "Die Galle enthält Enzyme, die Fette spalten.", false,
       "Galle emulgiert die Fette nur, vergrössert also die Angriffsfläche. Die Spaltung übernimmt die Lipase aus der Bauchspeicheldrüse.")],

    ["Aufnahme über eine riesige Oberfläche",
     ["Die Dünndarmwand ist in Falten gelegt, diese tragen <strong>Zotten</strong>, und die Zellen darauf tragen nochmals winzige Ausstülpungen.",
      "Diese dreifache Faltung bringt die Aufnahmefläche auf mehrere hundert Quadratmeter. Das Prinzip Oberflächenvergrösserung begegnet dir in der Biologie immer wieder, etwa bei Lungenbläschen und Mitochondrien.",
      "Zucker und Aminosäuren gelangen ins Blut und über die Pfortader zur Leber. Fette nehmen einen anderen Weg über die Lymphgefässe, weil sie im Blut nicht frei löslich sind."],
     mc("bdg-c4", "Welches Prinzip verbindet Darmzotten, Lungenbläschen und Mitochondrienfalten?",
       ["Energiesparen", "Oberflächenvergrösserung", "Schutz vor Keimen", "Wärmeisolation"], 1,
       "Alle drei vergrössern die Fläche, an der Stoffaustausch oder Reaktionen stattfinden können.")],
  ]);

  /* ---------------------------------------- 13 Atmung und Kreislauf */
  body("bio-respiration-circulation", [
    ["Gasaustausch funktioniert nur über Diffusion",
     ["In der Lunge wird Sauerstoff nicht aktiv ins Blut gepumpt. Er diffundiert, weil im Alveolarraum mehr Sauerstoff vorhanden ist als im ankommenden Blut.",
      "Damit das schnell genug geht, braucht es drei Bedingungen: eine grosse Fläche, eine sehr dünne Trennschicht und ein aufrechterhaltenes Konzentrationsgefälle.",
      "Die Lunge erfüllt alle drei. Rund 300 Millionen <strong>Alveolen</strong> ergeben etwa 100 Quadratmeter Fläche, die Wand ist nur eine Zellschicht dick, und Atmung und Blutstrom erneuern das Gefälle ständig."],
     mc("brc-c1", "Was treibt den Sauerstoff aus der Lunge ins Blut?",
       ["eine Pumpe in der Alveolenwand", "das Konzentrationsgefälle, also Diffusion",
        "der Herzschlag", "aktiver Transport mit ATP"], 1,
       "Der Gasaustausch ist rein passiv. Er beruht auf dem Partialdruckunterschied zwischen Alveolarluft und Blut.")],

    ["Hämoglobin löst das Transportproblem",
     ["In Wasser löst sich sehr wenig Sauerstoff. Gelöster Sauerstoff allein würde den Körper bei weitem nicht versorgen.",
      "<strong>Hämoglobin</strong> in den roten Blutzellen bindet Sauerstoff reversibel und erhöht die Transportkapazität um etwa das Siebzigfache.",
      "Entscheidend ist die Reversibilität. In der sauerstoffreichen Lunge bindet es, im sauerstoffarmen und saureren Gewebe gibt es wieder ab. Die Bindung passt sich also automatisch dem Bedarf an."],
     mc("brc-c2", "Warum gibt Hämoglobin im Muskelgewebe Sauerstoff ab?",
       ["Weil es dort zerfällt", "Weil dort wenig Sauerstoff und ein tieferer pH herrscht, was die Bindung lockert",
        "Weil das Blut langsamer fliesst", "Weil es dort kälter ist"], 1,
       "Sauerstoffarmut und der tiefere pH durch CO₂ senken die Bindungsstärke. Der Sauerstoff wird genau dort frei, wo er gebraucht wird.")],

    ["Zwei Kreisläufe, ein Herz",
     ["Der <strong>Lungenkreislauf</strong> führt sauerstoffarmes Blut von der rechten Herzhälfte zur Lunge und sauerstoffreiches zurück zur linken Hälfte.",
      "Der <strong>Körperkreislauf</strong> bringt dieses Blut von der linken Hälfte in den ganzen Körper und sauerstoffarm zur rechten zurück.",
      "Die linke Herzhälfte hat eine deutlich dickere Muskelwand, weil sie gegen den viel höheren Widerstand des ganzen Körpers pumpen muss. Der Lungenkreislauf ist kurz und braucht weniger Druck."],
     mc("brc-c3", "Warum ist die linke Herzkammer muskulöser als die rechte?",
       ["Weil sie mehr Blut fasst", "Weil sie gegen den höheren Widerstand des Körperkreislaufs pumpt",
        "Weil sie sauerstoffreiches Blut enthält", "Weil sie näher an der Lunge liegt"], 1,
       "Der Körperkreislauf hat einen viel höheren Widerstand als der kurze Lungenkreislauf, deshalb braucht es mehr Druck.")],

    ["Arterien, Venen, Kapillaren",
     ["<strong>Arterien</strong> führen vom Herzen weg. Sie haben dicke, elastische Wände, weil sie den Druckstössen standhalten müssen. Das ist die Definition, nicht der Sauerstoffgehalt.",
      "<strong>Venen</strong> führen zum Herzen hin. Der Druck ist dort tief, deshalb verhindern Klappen den Rückfluss, und die Muskelbewegung hilft beim Transport.",
      "In den <strong>Kapillaren</strong> findet der eigentliche Austausch statt. Sie sind nur eine Zellschicht dick. Merke die typische Prüfungsfalle: Die Lungenarterie führt sauerstoffarmes Blut, bleibt aber eine Arterie."],
     tf("brc-c4", "Arterien führen immer sauerstoffreiches Blut.", false,
       "Die Einteilung richtet sich nach der Richtung, nicht nach dem Sauerstoffgehalt. Die Lungenarterie führt sauerstoffarmes Blut.")],
  ]);

  /* ---------------------------------------- 14 Nervensystem */
  body("bio-nervous-system", [
    ["Das Neuron ist auf Weiterleitung gebaut",
     ["Eine Nervenzelle hat drei Teile mit klaren Aufgaben. Die verzweigten <strong>Dendriten</strong> nehmen Signale auf, der <strong>Zellkörper</strong> verrechnet sie, das lange <strong>Axon</strong> leitet weiter.",
      "Viele Axone sind von einer <strong>Myelinschicht</strong> umhüllt, die von Einschnürungen unterbrochen wird. Das Signal springt von Einschnürung zu Einschnürung, statt kontinuierlich zu wandern.",
      "Dieses Springen erhöht die Geschwindigkeit erheblich, von wenigen Metern auf über hundert Meter pro Sekunde. Wird die Myelinschicht geschädigt, verlangsamt sich die Weiterleitung entsprechend."],
     mc("bns-c1", "Welche Funktion hat die Myelinschicht?",
       ["Sie ernährt das Axon", "Sie beschleunigt die Weiterleitung, weil das Signal von Einschnürung zu Einschnürung springt",
        "Sie erzeugt das Signal", "Sie verbindet zwei Neuronen"], 1,
       "Die sprunghafte Erregungsleitung ist deutlich schneller als die kontinuierliche.")],

    ["Das Aktionspotential ist ein Alles-oder-nichts-Ereignis",
     ["Im Ruhezustand ist das Zellinnere gegenüber aussen negativ geladen. Diesen Unterschied baut die Natrium-Kalium-Pumpe unter ATP-Verbrauch auf.",
      "Überschreitet ein Reiz einen Schwellenwert, öffnen sich Natriumkanäle, positive Ionen strömen ein und die Spannung kippt kurzzeitig um. Danach stellt die Zelle den Ruhezustand wieder her.",
      "Entscheidend: Das Signal ist immer gleich stark. Ein stärkerer Reiz erzeugt kein grösseres Aktionspotential, sondern <em>mehr</em> Aktionspotentiale pro Zeit. Die Stärke wird über die Frequenz codiert."],
     mc("bns-c2", "Wie wird die Stärke eines Reizes im Nerven codiert?",
       ["durch höhere Aktionspotentiale", "durch eine höhere Frequenz der Aktionspotentiale",
        "durch schnellere Leitung", "durch mehr Neurotransmitter pro Signal"], 1,
       "Das Aktionspotential folgt dem Alles-oder-nichts-Prinzip. Nur die Frequenz variiert.")],

    ["An der Synapse wird elektrisch zu chemisch",
     ["Zwischen zwei Neuronen liegt ein winziger Spalt. Elektrische Signale können ihn nicht überspringen, also wird das Signal umgesetzt.",
      "Das ankommende Aktionspotential lässt Bläschen mit <strong>Neurotransmittern</strong> verschmelzen. Diese diffundieren über den Spalt und binden an Rezeptoren der nächsten Zelle, wo sie wieder ein elektrisches Signal auslösen.",
      "Der Umweg hat Vorteile. Er erzwingt eine Richtung, denn nur eine Seite hat Bläschen und nur die andere Rezeptoren. Und er erlaubt Verstärkung, Abschwächung und den Angriffspunkt für viele Medikamente und Drogen."],
     mc("bns-c3", "Warum kann ein Signal die Synapse nur in eine Richtung passieren?",
       ["Weil der Spalt zu breit ist", "Weil nur eine Seite Transmitterbläschen und nur die andere Rezeptoren besitzt",
        "Weil der Strom zu schwach ist", "Weil dort Myelin fehlt"], 1,
       "Die ungleiche Ausstattung der beiden Seiten erzwingt die Einbahnrichtung.")],

    ["Der Reflexbogen spart Zeit",
     ["Bei Gefahr wäre der Umweg über das Gehirn zu langsam. Deshalb gibt es Verschaltungen, die direkt im Rückenmark geschlossen werden.",
      "Der Weg lautet: Rezeptor, sensorisches Neuron, Rückenmark, motorisches Neuron, Muskel. Das Gehirn wird parallel informiert, aber erst danach.",
      "Deshalb hast du die Hand bereits zurückgezogen, bevor du den Schmerz bewusst wahrnimmst. Die bewusste Wahrnehmung kommt zu spät, um die Reaktion auszulösen."],
     mc("bns-c4", "Warum ziehst du die Hand zurück, bevor du den Schmerz spürst?",
       ["Weil der Schmerz langsam entsteht", "Weil der Reflex im Rückenmark geschlossen wird, ohne auf das Gehirn zu warten",
        "Weil die Nerven im Arm dicker sind", "Weil das Gehirn den Reflex auslöst"], 1,
       "Der Reflexbogen verschaltet direkt im Rückenmark. Das Gehirn wird informiert, ist aber nicht Teil der Auslösung.")],
  ]);

  /* ---------------------------------------- 15 Auge */
  body("bio-eye", [
    ["Das Auge ist eine Kamera mit biologischen Bauteilen",
     ["Die <strong>Hornhaut</strong> übernimmt den grössten Teil der Lichtbrechung. Die <strong>Pupille</strong> wirkt als Blende und regelt, wie viel Licht eintritt.",
      "Die <strong>Linse</strong> sorgt für die Feineinstellung der Schärfe. Auf der <strong>Netzhaut</strong> entsteht ein verkleinertes, umgekehrtes Bild.",
      "Dass wir die Welt nicht auf dem Kopf sehen, liegt am Gehirn. Es dreht die Information zurück. Das Sehen ist also zu einem grossen Teil eine Leistung der Verarbeitung, nicht der Optik."],
     mc("bey-c1", "Wie entsteht das Bild auf der Netzhaut?",
       ["aufrecht und vergrössert", "umgekehrt und verkleinert", "aufrecht und verkleinert", "seitenverkehrt und vergrössert"], 1,
       "Wie bei jeder Sammellinse entsteht ein umgekehrtes, verkleinertes Bild. Das Gehirn korrigiert die Orientierung.")],

    ["Akkommodation: die Linse ändert ihre Form",
     ["Anders als bei einer Kamera wird die Linse nicht verschoben, sondern verformt. Dafür sorgt ein Ringmuskel.",
      "Beim Blick in die <strong>Ferne</strong> ist der Muskel entspannt, die Bänder ziehen die Linse flach. Beim Blick in die <strong>Nähe</strong> spannt sich der Muskel an, die Bänder erschlaffen, die Linse wird kugeliger und bricht stärker.",
      "Das ist für viele gegenintuitiv: Angestrengt wird beim Nahsehen, nicht beim Fernsehen. Genau deshalb ermüden die Augen bei langer Bildschirmarbeit."],
     mc("bey-c2", "Was passiert bei der Einstellung auf die Nähe?",
       ["Der Ringmuskel entspannt, die Linse wird flach", "Der Ringmuskel spannt sich an, die Linse wird kugeliger",
        "Die Pupille verengt sich", "Die Netzhaut verschiebt sich"], 1,
       "Muskelanspannung lockert die Bänder, die Linse wird durch ihre Eigenelastizität kugeliger und bricht stärker.")],

    ["Stäbchen und Zapfen haben verschiedene Aufgaben",
     ["<strong>Stäbchen</strong> sind sehr lichtempfindlich, unterscheiden aber keine Farben. Sie ermöglichen das Sehen in der Dämmerung und liegen vor allem ausserhalb der Netzhautmitte.",
      "<strong>Zapfen</strong> gibt es in drei Typen für verschiedene Wellenlängen. Sie liefern Farbe und Schärfe, brauchen aber viel Licht und sitzen dicht gedrängt im gelben Fleck.",
      "Daraus folgt eine Alltagsbeobachtung: Nachts erscheint alles grau, weil nur die Stäbchen arbeiten. Und ein schwacher Stern ist besser zu sehen, wenn man knapp daneben schaut, weil dort mehr Stäbchen liegen."],
     mc("bey-c3", "Warum erscheinen Farben in der Dämmerung ausgewaschen?",
       ["Weil die Pupille zu klein ist", "Weil bei wenig Licht nur die farbenblinden Stäbchen arbeiten",
        "Weil die Linse trüb wird", "Weil das Gehirn ermüdet"], 1,
       "Die Zapfen brauchen viel Licht. In der Dämmerung liefern nur die Stäbchen Signale, und die unterscheiden keine Farben.")],

    ["Fehlsichtigkeit und ihre Korrektur",
     ["Bei <strong>Kurzsichtigkeit</strong> ist der Augapfel zu lang oder die Brechkraft zu stark. Das Bild entsteht vor der Netzhaut, Fernes wird unscharf. Eine Zerstreuungslinse korrigiert das.",
      "Bei <strong>Weitsichtigkeit</strong> ist es umgekehrt: Das Bild entstünde hinter der Netzhaut, Nahes wird unscharf. Eine Sammellinse hilft.",
      "Die <strong>Alterssichtigkeit</strong> hat eine andere Ursache. Hier verliert die Linse ihre Elastizität, die Akkommodation lässt nach. Deshalb braucht man ab etwa fünfzig eine Lesebrille, auch wenn man vorher gut gesehen hat."],
     mc("bey-c4", "Wie wird Kurzsichtigkeit korrigiert?",
       ["mit einer Sammellinse", "mit einer Zerstreuungslinse", "mit einer Blende", "gar nicht"], 1,
       "Das Bild liegt vor der Netzhaut. Eine Zerstreuungslinse verringert die Gesamtbrechkraft und verschiebt es nach hinten.")],
  ]);

  /* ---------------------------------------- 16 Ökologie */
  body("bio-ecology", [
    ["Energie fliesst, Stoffe kreisen",
     ["Das ist der wichtigste Satz der Ökologie. Energie kommt als Sonnenlicht ins System, wird stufenweise genutzt und verlässt es am Ende als Wärme. Sie kehrt nicht zurück.",
      "Stoffe dagegen bleiben im System. Kohlenstoff, Stickstoff und Wasser wandern zwischen Lebewesen, Boden, Wasser und Luft im Kreis.",
      "Daraus folgt eine wichtige Konsequenz: Ein Ökosystem braucht ständigen Energienachschub von aussen, aber keinen ständigen Stoffnachschub."],
     tf("beo-c1", "Energie kreist in einem Ökosystem ebenso wie die Stoffe.", false,
       "Energie durchfliesst das System einmal und geht als Wärme verloren. Nur Stoffe kreisen.")],

    ["Warum Nahrungspyramiden nach oben schmal werden",
     ["Von einer Trophieebene zur nächsten wird nur etwa ein Zehntel der Energie weitergegeben. Der Rest geht für Bewegung, Wärme und Stoffwechsel verloren oder bleibt unverdaut.",
      "Deshalb kann eine Nahrungskette nicht beliebig lang sein. Nach vier oder fünf Stufen ist kaum noch Energie übrig, um eine weitere Ebene zu tragen.",
      "Das erklärt auch, warum es viel mehr Pflanzenfresser als Raubtiere gibt, und warum pflanzliche Ernährung flächeneffizienter ist als tierische."],
     mc("beo-c2", "Warum sind Nahrungsketten selten länger als vier bis fünf Stufen?",
       ["Weil es zu wenige Arten gibt", "Weil pro Stufe rund neunzig Prozent der Energie verloren gehen",
        "Weil die Tiere zu gross werden", "Weil Destruenten die Kette unterbrechen"], 1,
       "Bei etwa zehn Prozent Übertragung pro Stufe bleibt nach wenigen Ebenen zu wenig Energie übrig.")],

    ["Der Kohlenstoffkreislauf und der menschliche Eingriff",
     ["Pflanzen entnehmen der Luft CO₂ und binden den Kohlenstoff in Biomasse. Durch Atmung, Zersetzung und Verbrennung gelangt er wieder zurück.",
      "Über Jahrmillionen wurde ein Teil als Kohle, Öl und Gas langfristig aus dem Kreislauf entfernt. Dieser Speicher war stabil.",
      "Genau diesen Speicher setzt der Mensch seit rund zweihundert Jahren frei. Der Kreislauf ist dadurch nicht zerstört, aber deutlich aus dem Gleichgewicht: Es gelangt mehr Kohlenstoff in die Atmosphäre, als kurzfristig gebunden wird."],
     mc("beo-c3", "Warum verändert die Verbrennung fossiler Energieträger den Kohlenstoffkreislauf?",
       ["Weil dabei neuer Kohlenstoff entsteht", "Weil langfristig gebundener Kohlenstoff rasch in die Atmosphäre zurückkehrt",
        "Weil Pflanzen kein CO₂ mehr aufnehmen", "Weil Sauerstoff verbraucht wird"], 1,
       "Der über Jahrmillionen eingelagerte Kohlenstoff wird in kurzer Zeit freigesetzt. Die Senken können das nicht aufnehmen.")],

    ["Biotische und abiotische Faktoren",
     ["<strong>Abiotische</strong> Faktoren sind unbelebt: Temperatur, Licht, Wasser, Boden, pH. <strong>Biotische</strong> Faktoren gehen von Lebewesen aus: Konkurrenz, Fressfeinde, Symbiose, Krankheiten.",
      "Für jeden Faktor gibt es einen Toleranzbereich mit einem Optimum. Ausserhalb des Bereichs kann eine Art nicht überleben, und meist begrenzt ein einzelner Faktor das Vorkommen.",
      "Das erklärt, warum eine Art nicht überall lebt, obwohl die Bedingungen scheinbar passen: Es genügt ein einziger Faktor ausserhalb der Toleranz."],
     mc("beo-c4", "Was ist ein biotischer Faktor?",
       ["Bodentemperatur", "Niederschlagsmenge", "Konkurrenz durch eine andere Art", "Lichtintensität"], 2,
       "Biotische Faktoren gehen von Lebewesen aus. Temperatur, Niederschlag und Licht sind abiotisch.")],
  ]);

  /* ---------------------------------------- 17 Evolution */
  body("bio-evolution", [
    ["Darwin und Lamarck unterscheiden sich im Zeitpunkt",
     ["Nach <strong>Lamarck</strong> verändert sich ein Individuum durch Gebrauch, und diese erworbene Veränderung wird vererbt. Die Giraffe reckt den Hals, der Hals wird länger, die Nachkommen erben den längeren Hals.",
      "Nach <strong>Darwin</strong> existieren die Unterschiede bereits <em>vorher</em>. Innerhalb der Population gibt es zufällig kürzere und längere Hälse. Die längeren erreichen mehr Nahrung und hinterlassen mehr Nachkommen.",
      "Der entscheidende Punkt ist also die Reihenfolge: Bei Lamarck erzeugt der Bedarf die Veränderung, bei Darwin wählt die Umwelt aus bereits vorhandener Variation aus. Nur Darwins Modell ist mit der Genetik vereinbar."],
     mc("bev-c1", "Worin liegt der Kernunterschied zwischen Darwin und Lamarck?",
       ["Darwin hielt Arten für unveränderlich", "Bei Lamarck entsteht die Veränderung durch Bedarf, bei Darwin ist die Variation vorher schon da",
        "Lamarck kannte die Selektion nicht", "Darwin lehnte Vererbung ab"], 1,
       "Variation vor Selektion ist Darwins zentrale Einsicht. Erworbene Merkmale werden nicht vererbt.")],

    ["Die vier Bausteine der Evolutionstheorie",
     ["Erstens: Innerhalb jeder Population gibt es <strong>Variation</strong>, verursacht durch Mutation und die Neukombination bei der Meiose.",
      "Zweitens: Es werden mehr Nachkommen geboren, als überleben können. Daraus entsteht drittens <strong>Selektion</strong>, weil besser angepasste Individuen im Schnitt mehr Nachkommen hinterlassen.",
      "Viertens: Die Merkmale sind erblich, sodass sich ihre Häufigkeit über Generationen verschiebt. Wichtig: Selektion wirkt auf den Fortpflanzungserfolg, nicht auf die Lebensdauer oder die Stärke."],
     tf("bev-c2", "Selektion belohnt vor allem die kräftigsten Individuen.", false,
       "Entscheidend ist der Fortpflanzungserfolg. Ein unauffälliges, aber langlebiges und fruchtbares Tier kann erfolgreicher sein als ein kräftiges.")],

    ["Belege aus verschiedenen Richtungen",
     ["<strong>Fossilien</strong> zeigen Übergangsformen und die zeitliche Abfolge. <strong>Homologien</strong> sind Ähnlichkeiten im Bauplan trotz verschiedener Funktion, etwa der gleiche Knochenaufbau in Menschenarm, Fledermausflügel und Walflosse.",
      "<strong>Analogien</strong> sind das Gegenteil: ähnliche Funktion bei verschiedenem Bauplan, etwa Vogelflügel und Insektenflügel. Sie beweisen keine Verwandtschaft, sondern ähnlichen Anpassungsdruck.",
      "Der stärkste moderne Beleg ist die <strong>Molekularbiologie</strong>. Je näher zwei Arten verwandt sind, desto ähnlicher sind ihre DNA-Sequenzen. Das lässt sich unabhängig von Knochen und Aussehen messen."],
     mc("bev-c3", "Was belegen Homologien?",
       ["ähnlichen Anpassungsdruck", "gemeinsame Abstammung", "gleiche Lebensweise", "gleiche Umweltbedingungen"], 1,
       "Gleicher Bauplan bei verschiedener Funktion weist auf einen gemeinsamen Vorfahren hin. Analogien belegen dagegen nur ähnlichen Anpassungsdruck.")],

    ["Wie neue Arten entstehen",
     ["Wird eine Population geografisch getrennt, etwa durch einen Fluss oder eine Insellage, entwickeln sich die beiden Teile unabhängig weiter.",
      "Mutationen und unterschiedliche Selektionsbedingungen lassen sie auseinanderdriften. Irgendwann sind die Unterschiede so gross, dass sie sich auch bei erneutem Kontakt nicht mehr fortpflanzen können.",
      "Genau dieser Punkt definiert zwei getrennte Arten. Der bekannteste Fall sind die Finken auf den Galapagosinseln, deren Schnabelformen sich je nach verfügbarer Nahrung unterschiedlich entwickelt haben."],
     mc("bev-c4", "Wann gelten zwei Populationen als getrennte Arten?",
       ["wenn sie unterschiedlich aussehen", "wenn sie sich auch bei Kontakt nicht mehr erfolgreich fortpflanzen können",
        "wenn sie in verschiedenen Ländern leben", "wenn sie unterschiedlich gross sind"], 1,
       "Das biologische Artkonzept stellt auf die Fortpflanzungsfähigkeit untereinander ab, nicht auf das Aussehen.")],
  ]);
})();

/* Geschichte: ausgeschriebene Lehrtexte für alle 16 Kapitel.
   Geschichte wird hier nicht als Datenreihe erzählt, sondern als
   Ursache-Verlauf-Folge-Kette, wie sie die Prüfung verlangt. */
(function () {
  "use strict";
  var M = window.MNEMIKA;
  const { mc, tf } = M;

  function body(id, list) {
    var c = M.chapter(id);
    if (!c) return;
    c.depth = "full";
    c.blocks = list.map(function (b, i) {
      var blk = { id: "b" + (i + 1), label: b[0], body: b[1], check: b[2] };
      if (blk.check) {
        blk.check.blockId = blk.id; blk.check.blockNo = i + 1;
        blk.check.blockLabel = blk.label; blk.check.role = "check";
      }
      return blk;
    });
  }

  /* ---------------------------------------- 1 CH 1798–1848 */
  body("hist-ch-1798-1848", [
    ["Die alte Eidgenossenschaft war kein Staat",
     ["Vor 1798 bestand die Eidgenossenschaft aus dreizehn souveränen Orten, verbunden durch ein Netz von Bündnissen. Es gab keine gemeinsame Regierung, keine gemeinsame Währung, keine gemeinsame Armee.",
      "Politische Rechte besassen nur wenige Familien in den Städten. Ganze Gebiete wie der Aargau oder die Waadt waren <strong>Untertanengebiete</strong> ohne jede Mitsprache.",
      "Wer das nicht versteht, versteht 1798 nicht. Der Umsturz war nicht der Angriff auf eine Demokratie, sondern das Ende einer Herrschaftsordnung, die grosse Teile der Bevölkerung ausgeschlossen hatte."],
     mc("h18-c1", "Was kennzeichnete die Eidgenossenschaft vor 1798?",
       ["ein zentraler Bundesstaat mit Verfassung", "ein Bündnisgeflecht souveräner Orte mit Untertanengebieten",
        "eine Monarchie", "eine Demokratie mit allgemeinem Stimmrecht"], 1,
       "Es gab weder Zentralgewalt noch gleiche Rechte. Untertanengebiete hatten keinerlei politische Mitsprache.")],

    ["Die Helvetik scheiterte an ihrer eigenen Radikalität",
     ["1798 marschierten französische Truppen ein. Die <strong>Helvetische Republik</strong> brachte Rechtsgleichheit, Religionsfreiheit und das Ende der Untertanenverhältnisse.",
      "Gleichzeitig war sie streng zentralistisch. Die Kantone wurden zu blossen Verwaltungsbezirken herabgestuft. Das widersprach jahrhundertealten Selbstverwaltungstraditionen und provozierte heftigen Widerstand.",
      "Die Lehre daraus zieht sich durch die ganze Schweizer Geschichte: Reformen setzen sich nur durch, wenn sie die föderale Struktur respektieren. Napoleon zog 1803 mit der <strong>Mediation</strong> genau diese Konsequenz."],
     mc("h18-c2", "Woran scheiterte die Helvetische Republik vor allem?",
       ["an der Rechtsgleichheit", "an ihrem Zentralismus, der die kantonale Selbstverwaltung beseitigte",
        "am Widerstand Frankreichs", "an fehlenden Reformen"], 1,
       "Die inhaltlichen Reformen waren nicht das Problem, sondern die Beseitigung der kantonalen Eigenständigkeit.")],

    ["Regeneration: der Konflikt verschiebt sich in die Kantone",
     ["Nach 1830 setzten liberale Kräfte in mehreren Kantonen neue Verfassungen durch: Gewaltenteilung, Pressefreiheit, Volkswahl der Parlamente.",
      "Andere Kantone, vor allem die katholisch-ländlichen der Innerschweiz, hielten an der alten Ordnung fest. Damit stand nicht mehr die Schweiz gegen Frankreich, sondern Kanton gegen Kanton.",
      "Der Konflikt hatte drei sich überlagernde Dimensionen: liberal gegen konservativ, zentralistisch gegen föderalistisch, protestantisch gegen katholisch. Erst alle drei zusammen erklären die Schärfe der Auseinandersetzung."],
     mc("h18-c3", "Welche Konfliktlinien überlagerten sich in der Regenerationszeit?",
       ["nur Sprache und Religion", "liberal gegen konservativ, zentralistisch gegen föderalistisch, konfessionell",
        "nur Stadt gegen Land", "nur arm gegen reich"], 1,
       "Die drei Konfliktlinien fielen weitgehend zusammen und verstärkten sich dadurch gegenseitig.")],

    ["Der Sonderbundskrieg und der Kompromiss von 1848",
     ["1845 schlossen sich sieben konservative Kantone zum <strong>Sonderbund</strong> zusammen. Die Tagsatzung erklärte dies für bundeswidrig. Der Krieg im November 1847 dauerte nur 26 Tage und forderte etwa hundert Tote.",
      "Bemerkenswert ist das Verhalten der Sieger. Statt die Besiegten zu demütigen, wurde die Bundesverfassung von 1848 als Kompromiss angelegt.",
      "Der Bund erhielt Zuständigkeit für Aussenpolitik, Zoll, Währung und Post. Die Kantone behielten Schule, Polizei und Kultur. Und der Ständerat gab den kleinen Kantonen gleiches Gewicht. Genau diese Kompromissarchitektur prägt die Schweiz bis heute."],
     mc("h18-c4", "Warum gilt die Bundesverfassung von 1848 als Kompromiss?",
       ["weil die Sieger auf alle Forderungen verzichteten", "weil der Bund neue Kompetenzen erhielt, die Kantone aber wichtige Bereiche und im Ständerat gleiches Gewicht behielten",
        "weil sie von Frankreich diktiert wurde", "weil sie nur vorläufig galt"], 1,
       "Zentrale Kompetenzen für den Bund, Eigenständigkeit und Ständerat für die Kantone. Der Verlierer wurde eingebunden, nicht ausgeschlossen.")],
  ]);

  /* ---------------------------------------- 2 CH 1848–1914 */
  body("hist-ch-1848-1914", [
    ["Der junge Bundesstaat baut Infrastruktur",
     ["Einheitliche Währung, einheitliche Masse, Abbau der Binnenzölle: Erst diese Massnahmen schufen einen tatsächlichen Binnenmarkt.",
      "Der <strong>Eisenbahnbau</strong> ab den 1850er-Jahren veränderte das Land grundlegend. Transportkosten sanken, Regionen wurden erreichbar, der Gotthardtunnel von 1882 machte die Schweiz zum europäischen Transitland.",
      "Die Industrialisierung konzentrierte sich auf Textil, Maschinen, Uhren und später Chemie. Weil Rohstoffe fehlten, spezialisierte sich die Schweiz früh auf hochwertige Verarbeitung. Diese Ausrichtung prägt die Wirtschaft bis heute."],
     mc("h19-c1", "Warum spezialisierte sich die Schweizer Industrie früh auf hochwertige Produkte?",
       ["wegen staatlicher Vorgaben", "weil eigene Rohstoffe und Kolonien fehlten und nur Verarbeitungstiefe Wettbewerbsvorteile brachte",
        "wegen der Bergbautradition", "weil die Löhne tief waren"], 1,
       "Ohne Rohstoffbasis liess sich nur über Qualität und Verarbeitungstiefe konkurrieren.")],

    ["Der Ausbau der Volksrechte",
     ["Die Totalrevision der Verfassung von <strong>1874</strong> erweiterte die Bundeskompetenzen und führte das fakultative Gesetzesreferendum ein.",
      "Damit konnte das Volk beschlossene Gesetze nachträglich bekämpfen. 1891 kam die Volksinitiative auf Teilrevision der Verfassung dazu.",
      "Die Folge war unerwartet: Weil das Referendum jedes Gesetz gefährden konnte, mussten die Regierenden Gegner schon im Vorfeld einbinden. So entstand die schweizerische Kompromisskultur nicht aus Gesinnung, sondern aus institutionellem Zwang."],
     mc("h19-c2", "Welche indirekte Folge hatte das Referendum?",
       ["die Regierung wurde mächtiger", "Gegner mussten schon im Vorfeld eingebunden werden, was die Kompromisskultur förderte",
        "die Kantone verloren Rechte", "die Parteien verschwanden"], 1,
       "Die drohende Ablehnung zwang zur vorgängigen Verständigung. Daraus entwickelte sich die Konkordanz.")],

    ["Soziale Frage und Arbeiterbewegung",
     ["Die Industrialisierung schuf Wohlstand und zugleich Elend: Arbeitstage von über zwölf Stunden, Kinderarbeit, Wohnungsnot, keine Absicherung bei Unfall oder Krankheit.",
      "Das <strong>Fabrikgesetz von 1877</strong> war eine frühe Antwort: Elfstundentag, Verbot der Kinderarbeit unter vierzehn Jahren, Schutzbestimmungen. Für seine Zeit war es fortschrittlich.",
      "Gewerkschaften und die 1888 gegründete Sozialdemokratische Partei organisierten die Arbeiterschaft. Die politische Anerkennung folgte aber erst spät, was die Spannungen bis zum Landesstreik 1918 aufstaute."],
     mc("h19-c3", "Was regelte das Fabrikgesetz von 1877?",
       ["das Frauenstimmrecht", "Arbeitszeitbegrenzung, Verbot der Kinderarbeit unter 14 und Schutzbestimmungen",
        "die Altersvorsorge", "die Gewerkschaftsfreiheit"], 1,
       "Es war ein früher Arbeitsschutz, für damalige Verhältnisse fortschrittlich, aber ohne soziale Absicherung.")],

    ["Neutralität als Aussenpolitik",
     ["Die Neutralität wurde 1815 am Wiener Kongress international anerkannt. Sie war kein Rückzug, sondern eine aktive Strategie des Überlebens zwischen Grossmächten.",
      "Sie ermöglichte zugleich eine humanitäre Rolle. 1863 wurde in Genf das Rote Kreuz gegründet, 1864 die erste Genfer Konvention unterzeichnet.",
      "Wirtschaftlich blieb die Schweiz dagegen eng verflochten und exportorientiert. Politische Neutralität und wirtschaftliche Verflechtung schlossen sich nie aus. Dieses Spannungsfeld durchzieht die Schweizer Aussenpolitik bis heute."],
     tf("h19-c4", "Neutralität bedeutete für die Schweiz auch wirtschaftliche Abschottung.", false,
       "Die Schweiz war stets stark exportorientiert und international verflochten. Neutral war die politisch-militärische Haltung, nicht die Wirtschaft.")],
  ]);

  /* ---------------------------------------- 3 CH im 1. WK */
  body("hist-ch-ww1", [
    ["Neutral, aber nicht unberührt",
     ["Die Schweiz nahm nicht an den Kämpfen teil, mobilisierte aber die Armee zur Grenzsicherung. Hunderttausende Männer waren über Jahre im Dienst.",
      "Es gab damals keinen Lohnersatz. Die Familien der Wehrmänner verloren ihr Einkommen, während gleichzeitig die Preise stiegen. Die Reallöhne fielen um etwa dreissig Prozent.",
      "Gleichzeitig verdienten Teile der Industrie an Lieferungen in beide Lager. Diese Gleichzeitigkeit von Not und Kriegsgewinn wurde als zutiefst ungerecht empfunden und ist der Schlüssel zum Verständnis von 1918."],
     mc("hw1-c1", "Warum verarmten viele Familien von Wehrmännern?",
       ["weil die Löhne gesenkt wurden", "weil es keinen Lohnersatz für Dienstleistende gab und gleichzeitig die Preise stiegen",
        "weil die Betriebe schlossen", "weil die Steuern stiegen"], 1,
       "Ohne Erwerbsersatz und bei stark steigenden Preisen brach das Familieneinkommen weg.")],

    ["Der Riss zwischen den Sprachregionen",
     ["Die Deutschschweiz sympathisierte mehrheitlich mit Deutschland, die Westschweiz mit Frankreich. Presse und Öffentlichkeit driftete auseinander.",
      "Die <strong>Oberstenaffäre</strong> von 1916, bei der zwei Schweizer Offiziere Informationen an die Mittelmächte weitergaben, verschärfte das Misstrauen erheblich.",
      "Für diesen Riss entstand der Begriff <strong>Röstigraben</strong>. Er zeigt, dass Neutralität nach aussen keine innere Einigkeit garantiert. Der nationale Zusammenhalt musste aktiv gepflegt werden."],
     mc("hw1-c2", "Was bezeichnet der Begriff Röstigraben im Kontext des Ersten Weltkriegs?",
       ["die Versorgungsgrenze", "den Gegensatz zwischen deutsch- und westschweizerischen Kriegssympathien",
        "die Militärgrenze", "den Konflikt zwischen Stadt und Land"], 1,
       "Die Sprachregionen sympathisierten mit unterschiedlichen Kriegsparteien, was den inneren Zusammenhalt belastete.")],

    ["Der Landesstreik von 1918",
     ["Im November 1918 traten rund 250'000 Arbeiter in den Generalstreik. Die Forderungen waren konkret: Proporzwahl, Achtstundentag, Frauenstimmrecht, AHV, Arbeitspflicht für alle.",
      "Der Bundesrat setzte Truppen ein. Nach drei Tagen wurde der Streik abgebrochen, drei Menschen kamen ums Leben. Kurzfristig hatten die Streikenden verloren.",
      "Mittelfristig setzte sich ein Grossteil der Forderungen jedoch durch: Proporz 1919, Achtstundentag 1919, AHV 1948, Frauenstimmrecht 1971. Das ist die eigentliche Pointe und eine typische Prüfungsfrage."],
     mc("hw1-c3", "Wie ist der Landesstreik von 1918 zu bewerten?",
       ["als vollständiger Erfolg", "als kurzfristige Niederlage, deren Forderungen sich mittelfristig grösstenteils durchsetzten",
        "als bedeutungslos", "als gescheiterte Revolution ohne Folgen"], 1,
       "Der Streik wurde abgebrochen, aber Proporz, Achtstundentag und später AHV und Frauenstimmrecht wurden eingeführt.")],

    ["Was der Krieg dauerhaft veränderte",
     ["Der Bund griff erstmals massiv in die Wirtschaft ein: Rationierung, Preiskontrollen, Bewirtschaftung. Die Rolle des Staates weitete sich dauerhaft aus.",
      "Die Erfahrung der Versorgungskrise führte zur Einsicht, dass die Schweiz für Krisenzeiten Vorsorge treffen muss. Das wirkte bis in die Anbauschlacht des Zweiten Weltkriegs nach.",
      "Politisch beschleunigte der Streik die Einbindung der Sozialdemokratie. Aus dem gefürchteten Gegner wurde über Jahrzehnte ein Regierungspartner, ein Kernstück der späteren Konkordanz."],
     tf("hw1-c4", "Der Erste Weltkrieg führte in der Schweiz zu einer dauerhaften Ausweitung staatlicher Eingriffe in die Wirtschaft.", true,
       "Rationierung und Bewirtschaftung waren neu. Diese Rolle des Bundes blieb in abgeschwächter Form bestehen.")],
  ]);

  /* ---------------------------------------- 4 CH im 2. WK */
  body("hist-ch-ww2", [
    ["Eine vollständig umschlossene Lage",
     ["Ab Juni 1940, nach der Niederlage Frankreichs, war die Schweiz vollständig von den Achsenmächten und ihren Verbündeten umgeben.",
      "Sämtliche Ein- und Ausfuhren mussten deren Kontrollen passieren. Wer über Kohle, Erz und Lebensmittel entscheidet, hat wirtschaftliche Macht, auch ohne einzumarschieren.",
      "Jede Beurteilung der damaligen Politik muss diese Lage einbeziehen. Sie erklärt manche Entscheidung, rechtfertigt aber nicht jede. Genau diese Unterscheidung verlangt die Prüfung."],
     mc("hw2-c1", "Welche Folge hatte die vollständige Umschliessung ab 1940?",
       ["die Schweiz wurde besetzt", "jeder Aussenhandel war von der Zustimmung der Achsenmächte abhängig",
        "der Handel brach völlig ab", "die Armee wurde aufgelöst"], 1,
       "Ohne Zugang zu Häfen und Rohstoffen war die Schweiz auf Handelsvereinbarungen mit den Achsenmächten angewiesen.")],

    ["Das Reduit: Abschreckung statt Grenzverteidigung",
     ["General Guisan gab 1940 die Verteidigung der Grenze weitgehend auf und verlegte den Schwerpunkt in die Alpen, das <strong>Reduit</strong>.",
      "Die Logik war nicht, das Land zu schützen, sondern einen Einmarsch unattraktiv zu machen. Bei einem Angriff hätte die Armee die Alpentunnel gesprengt. Der Angreifer hätte das Mittelland bekommen, aber keinen funktionierenden Transit.",
      "Es war also ein Abschreckungskonzept, keine Schutzstrategie für die Bevölkerung. Diese Unterscheidung ist für eine differenzierte Beurteilung entscheidend."],
     mc("hw2-c2", "Worin bestand die Logik des Reduit-Konzepts?",
       ["die Bevölkerung im Mittelland zu schützen", "einen Angriff unattraktiv zu machen, weil die Alpentransversalen zerstört worden wären",
        "die Grenzen besser zu sichern", "neutral zu bleiben"], 1,
       "Es war Abschreckung: Der Angreifer hätte das Mittelland gewinnen, aber den Transit verlieren können.")],

    ["Wirtschaftliche Anpassung",
     ["Die Schweiz lieferte Rüstungsgüter, Maschinen und Präzisionsinstrumente an Deutschland und gewährte Kredite. Die Nationalbank kaufte in erheblichem Umfang Gold, darunter geraubtes.",
      "Die zeitgenössische Begründung lautete, ohne diese Lieferungen hätte es keine Kohle und keine Lebensmittel gegeben. Dieses Argument hat Gewicht, erklärt aber nicht das ganze Ausmass.",
      "Der <strong>Bergier-Bericht</strong> von 2002 kam zum Schluss, dass die Schweiz mehr Handlungsspielraum hatte, als lange behauptet wurde. Hier zeigt sich exemplarisch, wie historische Forschung ein nationales Selbstbild korrigieren kann."],
     mc("hw2-c3", "Zu welchem zentralen Ergebnis kam der Bergier-Bericht?",
       ["die Schweiz hatte keinerlei Handlungsspielraum", "die Schweiz hatte mehr Spielraum, als lange behauptet wurde",
        "es gab keine Goldkäufe", "die Flüchtlingspolitik war grosszügig"], 1,
       "Die Untersuchung zeigte, dass wirtschaftliche und flüchtlingspolitische Entscheidungen nicht durchwegs alternativlos waren.")],

    ["Die Flüchtlingspolitik",
     ["Die Schweiz nahm während des Kriegs rund 60'000 zivile Flüchtlinge auf, wies aber mindestens 20'000 an der Grenze ab, die meisten davon Jüdinnen und Juden.",
      "Der Satz «das Boot ist voll» des Polizeichefs Heinrich Rothmund steht bis heute für diese Haltung. Auf Schweizer Verlangen wurden ab 1938 Pässe deutscher Jüdinnen und Juden mit einem J gestempelt, um die Einreise kontrollieren zu können.",
      "1995 entschuldigte sich der Bundespräsident offiziell dafür. Für die Prüfung gilt: Nenne den Handlungsdruck, nenne aber auch, wo Handlungsspielraum bestand und nicht genutzt wurde."],
     tf("hw2-c4", "Die Schweiz wies während des Zweiten Weltkriegs Tausende Flüchtlinge an der Grenze ab.", true,
       "Mindestens 20'000 Menschen wurde die Einreise verweigert, überwiegend jüdische Flüchtlinge. 1995 folgte eine offizielle Entschuldigung.")],
  ]);

  /* ---------------------------------------- 5 CH nach 1945 */
  body("hist-ch-postwar-system", [
    ["Wirtschaftswunder und Ausbau des Sozialstaats",
     ["Die Schweiz kam mit intakter Infrastruktur aus dem Krieg. Während Europa wieder aufbaute, konnte sie sofort liefern. Es folgten Jahrzehnte hohen Wachstums.",
      "1948 trat die <strong>AHV</strong> in Kraft, eine der Forderungen des Landesstreiks von 1918. Es folgten Invalidenversicherung, Arbeitslosenversicherung und die berufliche Vorsorge.",
      "Der Arbeitskräftemangel führte zu umfangreicher Zuwanderung, zunächst aus Italien, später aus Spanien, Portugal und dem Balkan. Der Ausländeranteil stieg stark und wurde zu einem politischen Dauerthema."],
     mc("hpw-c1", "Welche Forderung von 1918 wurde 1948 verwirklicht?",
       ["Frauenstimmrecht", "AHV", "Proporzwahl", "Achtstundentag"], 1,
       "Die AHV war eine zentrale Forderung des Landesstreiks und trat 1948 in Kraft.")],

    ["Die Konkordanz als System",
     ["1959 etablierte sich die <strong>Zauberformel</strong>: Die vier grössten Parteien teilten die sieben Bundesratssitze nach einem festen Schlüssel.",
      "Das ist eine Besonderheit. In den meisten Demokratien regiert eine Mehrheit, während die Minderheit opponiert. In der Schweiz sitzen praktisch alle relevanten Kräfte in der Regierung.",
      "Der Grund ist wieder institutionell: Wer nicht eingebunden ist, ergreift das Referendum. Konkordanz ist also die politische Antwort auf die direkte Demokratie, keine blosse Harmoniebedürftigkeit."],
     mc("hpw-c2", "Warum entwickelte sich in der Schweiz die Konkordanz?",
       ["aus Harmoniebedürfnis", "weil ausgeschlossene Kräfte mit dem Referendum jedes Gesetz blockieren könnten",
        "auf Druck des Auslands", "wegen der Neutralität"], 1,
       "Die direkte Demokratie zwingt zur Einbindung. Wer draussen steht, kann Gesetze über das Referendum kippen.")],

    ["Die drei Ebenen des Föderalismus",
     ["Der <strong>Bund</strong> ist zuständig für Aussenpolitik, Armee, Währung, Zoll und die Grundzüge der Sozialversicherungen.",
      "Die <strong>Kantone</strong> verantworten Schule, Gesundheit, Polizei und Steuern. Die <strong>Gemeinden</strong> regeln Ortsplanung, örtliche Infrastruktur und Einbürgerung.",
      "Das <strong>Subsidiaritätsprinzip</strong> besagt, dass eine Aufgabe immer auf der tiefsten Ebene erledigt werden soll, die sie bewältigen kann. Deshalb unterscheiden sich Schulsysteme und Steuersätze zwischen den Kantonen erheblich."],
     mc("hpw-c3", "Was besagt das Subsidiaritätsprinzip?",
       ["der Bund entscheidet alles", "Aufgaben werden auf der tiefstmöglichen Ebene erledigt",
        "die Kantone sind souverän", "Gemeinden haben keine Kompetenzen"], 1,
       "Nur was eine tiefere Ebene nicht leisten kann, geht an die höhere. Das erklärt die kantonalen Unterschiede.")],

    ["Das Verhältnis zu Europa",
     ["1992 lehnte das Stimmvolk den Beitritt zum Europäischen Wirtschaftsraum knapp ab. Das ist eine Zäsur: Der Weg der Integration über einen einzigen grossen Schritt war blockiert.",
      "Stattdessen entstand der <strong>bilaterale Weg</strong> mit sektoriellen Abkommen ab 1999, darunter Personenfreizügigkeit, Landverkehr und technische Handelshemmnisse.",
      "2002 trat die Schweiz der UNO bei, über fünfzig Jahre nach deren Gründung. Beide Entwicklungen zeigen dasselbe Muster: schrittweise Öffnung bei gleichzeitigem Beharren auf Eigenständigkeit."],
     tf("hpw-c4", "Nach dem EWR-Nein von 1992 wählte die Schweiz den Weg sektorieller bilateraler Abkommen.", true,
       "Statt eines umfassenden Integrationsschritts wurden einzelne Bereiche vertraglich geregelt.")],
  ]);

  /* ---------------------------------------- 6 Ideologien */
  body("hist-ideologies", [
    ["Warum im 19. Jahrhundert Ideologien entstanden",
     ["Zwei Umbrüche rissen die alte Ordnung auf. Die Französische Revolution zerstörte die Legitimation der Monarchie von Gottes Gnaden. Die Industrialisierung zerstörte die gewohnte Wirtschafts- und Sozialordnung.",
      "Plötzlich waren Grundfragen offen: Wer soll herrschen? Wem gehört das Eigentum? Wer gehört zu uns?",
      "Ideologien sind die konkurrierenden Antworten auf genau diese Fragen. Wer sie so liest, muss sie nicht auswendig lernen, sondern kann sie herleiten."],
     mc("hid-c1", "Warum entstanden die grossen Ideologien im 19. Jahrhundert?",
       ["weil neue Bücher erschienen", "weil Revolution und Industrialisierung die alte Ordnung entlegitimierten und Grundfragen neu offen waren",
        "wegen der Kolonien", "wegen der Kriege"], 1,
       "Als die überlieferte Ordnung ihre Selbstverständlichkeit verlor, brauchte es neue Begründungen für Herrschaft und Eigentum.")],

    ["Liberalismus: Freiheit des Einzelnen",
     ["Der Liberalismus setzt das Individuum an den Anfang. Zentrale Forderungen: Rechtsgleichheit, Eigentumsschutz, Meinungs- und Gewerbefreiheit, Verfassung und Gewaltenteilung.",
      "Der Staat soll die Rahmenordnung sichern, aber möglichst wenig eingreifen. Getragen wurde die Bewegung vom aufsteigenden Bürgertum.",
      "Das erklärt auch seine Grenze: Das frühe liberale Stimmrecht war meist an Besitz gebunden. Freiheit bedeutete zunächst Freiheit für jene, die bereits etwas hatten."],
     mc("hid-c2", "Welche Rolle sollte der Staat nach liberaler Auffassung spielen?",
       ["die Wirtschaft steuern", "die Rahmenordnung sichern und sonst möglichst wenig eingreifen",
        "das Eigentum verteilen", "die Religion vorschreiben"], 1,
       "Rechtssicherheit und Freiheitsrechte ja, wirtschaftliche Steuerung nein. Das ist der Kern des klassischen Liberalismus.")],

    ["Nationalismus: Zugehörigkeit als oberster Wert",
     ["Der Nationalismus macht die Nation zur wichtigsten Bezugsgrösse. Wer dazugehört, definiert sich über Sprache, Kultur, Geschichte oder Abstammung.",
      "Anfangs war er eine befreiende Kraft: Er richtete sich gegen Fremdherrschaft und für Einheit, etwa bei der Einigung Italiens und Deutschlands.",
      "Später kippte er. Wenn Zugehörigkeit zum obersten Wert wird, entsteht zwangsläufig eine Gruppe der Nichtdazugehörigen. Aus dem Einigungsnationalismus wurde ein Ausgrenzungsnationalismus, der in die Katastrophen des 20. Jahrhunderts führte."],
     tf("hid-c3", "Der Nationalismus war im 19. Jahrhundert von Anfang an eine ausgrenzende Ideologie.", false,
       "Zunächst wirkte er einigend und gegen Fremdherrschaft. Der Umschlag zur Ausgrenzung erfolgte später.")],

    ["Sozialismus: Antwort auf die soziale Frage",
     ["Der Sozialismus entstand als Reaktion auf die Lage der Industriearbeiter: Elendslöhne, Kinderarbeit, keine Absicherung.",
      "Marx deutete die Geschichte als Abfolge von Klassenkämpfen und sagte den Übergang zu einer Gesellschaft ohne Privateigentum an Produktionsmitteln voraus.",
      "Die Bewegung spaltete sich früh. <strong>Revolutionäre</strong> wollten das System stürzen, <strong>Reformisten</strong> es durch Wahlen und Gesetze verändern. Diese Spaltung prägt die europäische Linke bis heute und erklärt den Gegensatz zwischen Sozialdemokratie und Kommunismus."],
     mc("hid-c4", "Worin bestand die zentrale Spaltung der sozialistischen Bewegung?",
       ["in der Frage der Nation", "zwischen revolutionärem Umsturz und reformistischer Veränderung über Wahlen",
        "in der Religionsfrage", "in der Kolonialfrage"], 1,
       "Aus dieser Spaltung gingen Kommunismus und Sozialdemokratie als getrennte Strömungen hervor.")],
  ]);

  /* ---------------------------------------- 7 Imperialismus */
  body("hist-imperialism", [
    ["Vier Motive wirkten zusammen",
     ["<strong>Wirtschaftlich</strong>: Die Industrie brauchte Rohstoffe und suchte Absatzmärkte sowie Anlagemöglichkeiten für Kapital.",
      "<strong>Politisch</strong>: Kolonien galten als Beweis von Grossmachtstatus. Wer keine hatte, schien zurückzufallen. Das erzeugte eine Eigendynamik des Wettlaufs.",
      "<strong>Ideologisch</strong>: Rassentheorien und die Vorstellung einer zivilisatorischen Mission lieferten die Rechtfertigung. <strong>Technisch</strong>: Dampfschiff, Telegraf, Chinin und Maschinengewehr machten die Eroberung überhaupt erst durchführbar."],
     mc("him-c1", "Welche Rolle spielte die Technik beim Imperialismus?",
       ["keine", "sie machte Eroberung und Kontrolle praktisch erst möglich, etwa durch Dampfschiff, Telegraf und Chinin",
        "sie wurde nur in Europa eingesetzt", "sie verhinderte Eroberungen"], 1,
       "Ohne Malariaprophylaxe, schnelle Schiffe, Telegrafenverbindungen und überlegene Waffen wäre die Aufteilung Afrikas nicht möglich gewesen.")],

    ["Die Kongokonferenz: Aufteilung ohne die Betroffenen",
     ["1884/85 trafen sich in Berlin vierzehn Staaten, um die Aufteilung Afrikas zu regeln. Kein einziger afrikanischer Vertreter war anwesend.",
      "Man einigte sich auf Regeln für die gegenseitige Anerkennung von Ansprüchen. Grenzen wurden am Reissbrett gezogen, entlang von Längen- und Breitengraden statt entlang von Sprach- und Siedlungsräumen.",
      "Die Folge wirkt bis heute. Viele afrikanische Staatsgrenzen zerschneiden Volksgruppen oder vereinen verfeindete in einem Staat. Ein erheblicher Teil der späteren Konflikte hat hier seine Wurzel."],
     mc("him-c2", "Warum wirken die Beschlüsse der Kongokonferenz bis heute nach?",
       ["weil dort der Sklavenhandel geregelt wurde", "weil die am Reissbrett gezogenen Grenzen Volksgruppen zerschnitten und verfeindete Gruppen zusammenlegten",
        "weil Afrika unabhängig wurde", "weil sie nie umgesetzt wurden"], 1,
       "Willkürliche Grenzziehungen ohne Rücksicht auf ethnische und kulturelle Räume sind eine Ursache späterer Konflikte.")],

    ["Herrschaftsformen und Widerstand",
     ["Es gab verschiedene Formen: die <strong>direkte Herrschaft</strong> mit eigener Verwaltung, die <strong>indirekte Herrschaft</strong> über einheimische Eliten, und die <strong>Siedlungskolonie</strong> mit europäischer Einwanderung.",
      "Die wirtschaftliche Logik war überall ähnlich: Rohstoffe hinaus, Fertigwaren hinein. Eigene Industrie in den Kolonien wurde gezielt verhindert.",
      "Widerstand gab es von Beginn an und in vielen Formen, von bewaffneten Aufständen bis zu kulturellen und rechtlichen Strategien. Das Bild passiver Kolonisierter ist eine Verzerrung der Kolonialliteratur selbst."],
     tf("him-c3", "In den Kolonien wurde gezielt eine eigene Industrie aufgebaut.", false,
       "Das Gegenteil war der Fall. Die Kolonien sollten Rohstoffe liefern und Fertigwaren abnehmen, eigene Industrie wurde behindert.")],

    ["Der Imperialismus als Ursache des Ersten Weltkriegs",
     ["Der Wettlauf um Kolonien verschärfte die Rivalität zwischen den Grossmächten, besonders zwischen Grossbritannien und dem aufstrebenden Deutschen Reich.",
      "Krisen wie die beiden Marokkokrisen von 1905 und 1911 führten mehrfach an den Rand eines Krieges und verhärteten die Bündnisblöcke.",
      "Der Imperialismus erklärt den Ersten Weltkrieg nicht allein, aber er ist ein wesentlicher Baustein. Für die Prüfung gilt: Nenne mehrere Ursachen und gewichte sie, statt eine einzelne zu behaupten."],
     mc("him-c4", "Wie hängt der Imperialismus mit dem Ersten Weltkrieg zusammen?",
       ["gar nicht", "er verschärfte die Grossmachtrivalität und verhärtete über Krisen die Bündnisblöcke",
        "er verhinderte ihn beinahe", "er war die einzige Ursache"], 1,
       "Er ist eine von mehreren Ursachen. Eine gute Antwort nennt mehrere und gewichtet sie.")],
  ]);

  /* ---------------------------------------- 8 Erster Weltkrieg */
  body("hist-ww1", [
    ["Anlass und Ursachen sind zwei verschiedene Dinge",
     ["Der <strong>Anlass</strong> war das Attentat von Sarajevo am 28. Juni 1914. Es löste die Julikrise aus und setzte die Bündnismechanik in Gang.",
      "Die <strong>Ursachen</strong> lagen tiefer: Nationalismus, imperiale Konkurrenz, Wettrüsten, das starre Bündnissystem und ein weit verbreiteter Fatalismus, der einen grossen Krieg für unvermeidlich hielt.",
      "Diese Unterscheidung ist selbst eine Prüfungsleistung. Wer nur das Attentat nennt, erklärt nicht, warum aus einem Mord in Bosnien ein Weltkrieg wurde."],
     mc("hww-c1", "Worin besteht der Unterschied zwischen Anlass und Ursache?",
       ["es ist dasselbe", "der Anlass löst aus, die Ursachen machen den Ausbruch überhaupt möglich",
        "die Ursache liegt später", "der Anlass ist wichtiger"], 1,
       "Ohne die tieferen Ursachen wäre das Attentat eine regionale Krise geblieben.")],

    ["Wie die Bündnisse den Krieg ausweiteten",
     ["Zwei Blöcke standen sich gegenüber: der Dreibund aus Deutschland, Österreich-Ungarn und Italien, die Entente aus Frankreich, Russland und Grossbritannien.",
      "Nach dem Attentat erklärte Österreich-Ungarn Serbien den Krieg. Russland unterstützte Serbien, Deutschland unterstützte Österreich, Frankreich war mit Russland verbündet.",
      "Innerhalb weniger Wochen war fast ganz Europa beteiligt. Die Bündnisse wirkten wie eine Kette: Jeder Schritt löste automatisch den nächsten aus. Genau das meint der Begriff Bündnisautomatismus."],
     mc("hww-c2", "Warum weitete sich der Konflikt so schnell aus?",
       ["wegen der Kolonien", "weil das Bündnissystem jeden Beistandsfall automatisch weiterreichte",
        "wegen der Eisenbahnen", "weil Serbien angriff"], 1,
       "Die gegenseitigen Beistandspflichten zogen einen Staat nach dem anderen in den Krieg.")],

    ["Vom Bewegungskrieg zum Stellungskrieg",
     ["Alle Seiten rechneten mit einem kurzen Feldzug. Der deutsche Schlieffenplan sah eine schnelle Niederwerfung Frankreichs vor.",
      "Nach wenigen Monaten erstarrte die Westfront. Über Jahre lagen sich die Armeen in Schützengräben gegenüber, Geländegewinne von wenigen Kilometern kosteten Hunderttausende Leben.",
      "Der Grund war technisch: Maschinengewehr, Stacheldraht und Artillerie begünstigten die Verteidigung massiv, während für den Angriff noch kein wirksames Mittel existierte. Verdun 1916 steht für diese Logik der Materialschlacht."],
     mc("hww-c3", "Warum erstarrte die Westfront zum Stellungskrieg?",
       ["wegen des Wetters", "weil Maschinengewehr, Stacheldraht und Artillerie die Verteidigung stark begünstigten",
        "wegen fehlender Soldaten", "wegen des Friedensschlusses"], 1,
       "Die Verteidigungstechnik war der Angriffstechnik weit überlegen. Deshalb blieben Durchbrüche aus.")],

    ["Der totale Krieg und sein Ende",
     ["Der Krieg erfasste die gesamte Gesellschaft. Die Wirtschaft wurde umgestellt, Frauen übernahmen Industriearbeit, Propaganda steuerte die Stimmung, Lebensmittel wurden rationiert.",
      "1917 veränderten zwei Ereignisse die Lage: Die USA traten ein, Russland schied nach der Revolution aus. Die materielle Überlegenheit lag damit klar bei der Entente.",
      "Im November 1918 kapitulierte Deutschland. Rund siebzehn Millionen Menschen waren tot, vier Reiche zerfallen. Die Kriegsjahre hatten die politische Landkarte Europas vollständig verändert."],
     tf("hww-c4", "Der Begriff totaler Krieg meint, dass die gesamte Gesellschaft und Wirtschaft in den Krieg einbezogen wurde.", true,
       "Produktion, Arbeitsmarkt, Ernährung und öffentliche Meinung wurden vollständig auf den Krieg ausgerichtet.")],
  ]);

  /* ---------------------------------------- 9 Versailles und Krise */
  body("hist-versailles-crisis", [
    ["Ein Frieden, der neue Konflikte anlegte",
     ["Der Vertrag von Versailles verpflichtete Deutschland zu Gebietsabtretungen, starker Abrüstung und hohen Reparationen. Artikel 231 wies ihm die alleinige Kriegsschuld zu.",
      "Deutschland durfte nicht mitverhandeln. Das war innenpolitisch folgenschwer: Der Vertrag galt als Diktat, und jede Regierung, die ihn umsetzte, geriet unter Druck.",
      "Für eine differenzierte Beurteilung gilt: Der Vertrag war historisch nicht beispiellos hart, aber er war hart genug, um Wut zu erzeugen, und zu weich, um Deutschland dauerhaft zu schwächen. Diese Mittellage war sein Grundproblem."],
     mc("hvc-c1", "Warum war der Versailler Vertrag innenpolitisch für Deutschland so belastend?",
       ["weil er zu milde war", "weil Deutschland nicht mitverhandeln durfte und er deshalb als Diktat galt",
        "weil er geheim blieb", "weil er nicht umgesetzt wurde"], 1,
       "Der Ausschluss von den Verhandlungen und der Kriegsschuldartikel machten den Vertrag zur dauerhaften innenpolitischen Belastung.")],

    ["Der Völkerbund und seine Schwächen",
     ["Der Völkerbund sollte künftige Kriege durch kollektive Sicherheit verhindern. Die Idee war neu und richtig.",
      "Die Ausführung war schwach. Die USA traten trotz Wilsons Initiative nie bei, Deutschland und die Sowjetunion waren zunächst ausgeschlossen, und der Bund besass keine eigenen Truppen.",
      "Deshalb blieb er in den entscheidenden Krisen der 1930er-Jahre wirkungslos. Die Lehre daraus floss direkt in den Aufbau der UNO nach 1945 ein, die deshalb einen Sicherheitsrat mit Durchsetzungsmitteln erhielt."],
     mc("hvc-c2", "Warum blieb der Völkerbund wirkungslos?",
       ["weil zu viele Staaten Mitglied waren", "weil wichtige Mächte fehlten und er keine eigenen Durchsetzungsmittel besass",
        "weil er zu spät gegründet wurde", "weil er zu viel Macht hatte"], 1,
       "Ohne die USA und ohne militärische Mittel konnte er Aggressionen nicht stoppen.")],

    ["Vom Börsencrash zur Weltwirtschaftskrise",
     ["Im Oktober 1929 brachen die Kurse an der New Yorker Börse ein. Der Crash allein war nicht das Problem, sondern was folgte.",
      "Banken gerieten in Schieflage, Kredite wurden zurückgezogen, Investitionen brachen ein, Betriebe entliessen, die Nachfrage sank weiter. Eine sich selbst verstärkende Abwärtsspirale.",
      "Deutschland traf es besonders hart, weil sein Aufschwung auf kurzfristigen US-Krediten beruhte. Als diese abgezogen wurden, stieg die Arbeitslosigkeit auf über sechs Millionen."],
     mc("hvc-c3", "Warum traf die Weltwirtschaftskrise Deutschland besonders hart?",
       ["wegen der Reparationen allein", "weil der Aufschwung auf kurzfristigen US-Krediten beruhte, die plötzlich abgezogen wurden",
        "weil es keine Industrie hatte", "wegen des Völkerbunds"], 1,
       "Die Abhängigkeit von amerikanischem Kapital machte die deutsche Wirtschaft besonders verwundbar.")],

    ["Warum die Krise die Demokratien schwächte",
     ["Millionen Menschen verloren Arbeit und Ersparnisse. Die demokratischen Regierungen fanden keine schnelle Antwort, teils weil sie mit einer Sparpolitik die Krise noch verschärften.",
      "In dieser Lage gewannen Bewegungen an Zulauf, die einfache Erklärungen und Schuldige anboten. Die NSDAP stieg von 2,6 Prozent 1928 auf 37,3 Prozent im Juli 1932.",
      "Die entscheidende Einsicht lautet: Wirtschaftskrisen wirken politisch. Wenn die Demokratie als handlungsunfähig erscheint, steigt die Attraktivität autoritärer Alternativen. Das ist der Zusammenhang, den die Prüfung sehen will."],
     tf("hvc-c4", "Der Aufstieg der NSDAP lässt sich ohne die Weltwirtschaftskrise gut erklären.", false,
       "Vor der Krise war die Partei eine Randerscheinung. Erst Massenarbeitslosigkeit und die Handlungsschwäche der Regierung machten sie zur Massenbewegung.")],
  ]);

  /* ---------------------------------------- 10 Diktaturen */
  body("hist-dictatorships", [
    ["Was totalitäre Systeme gemeinsam haben",
     ["Ein autoritäres System will Gehorsam. Ein <strong>totalitäres</strong> will mehr: die vollständige Durchdringung aller Lebensbereiche, einschliesslich Freizeit, Familie und Denken.",
      "Die gemeinsamen Merkmale sind: eine offizielle Ideologie, eine Einheitspartei, ein Führerkult, Terror durch Geheimpolizei, Monopol über Medien und Waffen sowie eine gelenkte Wirtschaft.",
      "Diese Merkmalsliste ist das Werkzeug für Vergleichsaufgaben. Prüfe sie Punkt für Punkt, statt allgemein über Diktatur zu sprechen."],
     mc("hdi-c1", "Was unterscheidet ein totalitäres von einem autoritären System?",
       ["die Zahl der Parteien", "der Anspruch, alle Lebensbereiche einschliesslich Denken und Freizeit zu durchdringen",
        "die Wirtschaftsform", "die Aussenpolitik"], 1,
       "Autoritäre Systeme fordern Gehorsam. Totalitäre wollen den ganzen Menschen erfassen.")],

    ["Faschismus in Italien",
     ["Mussolini kam 1922 nach dem Marsch auf Rom an die Macht, formal legal durch Ernennung des Königs. Innerhalb weniger Jahre baute er den Staat zur Diktatur um.",
      "Ideologisch standen Nation, Staat und Führerprinzip im Zentrum. Gewalt galt nicht als Notfall, sondern als legitimes politisches Mittel.",
      "Wirtschaftlich setzte der Faschismus auf den Korporatismus: Arbeitgeber und Arbeitnehmer sollten in staatlich gelenkten Verbänden zusammenwirken, statt Interessen gegeneinander zu vertreten. Klassenkampf wurde so verboten statt gelöst."],
     mc("hdi-c2", "Was meint der Korporatismus im italienischen Faschismus?",
       ["die Verstaatlichung aller Betriebe", "die Zusammenfassung von Arbeitgebern und Arbeitnehmern in staatlich gelenkten Verbänden",
        "die freie Marktwirtschaft", "die Enteignung der Grossgrundbesitzer"], 1,
       "Interessengegensätze wurden nicht gelöst, sondern organisatorisch stillgestellt.")],

    ["Nationalsozialismus: die Rassenideologie im Zentrum",
     ["Der Nationalsozialismus teilte viele Merkmale mit dem Faschismus, unterschied sich aber in einem entscheidenden Punkt: Die <strong>Rassenideologie</strong> stand im Zentrum, nicht der Staat.",
      "Daraus folgte alles Weitere. Die Einteilung der Menschheit in höher- und minderwertige Rassen, der Antisemitismus als Staatsdoktrin, die Nürnberger Gesetze von 1935, die Politik des Lebensraums im Osten.",
      "Deshalb ist der Holocaust keine Entgleisung des Systems, sondern folgt aus seiner Kernideologie. Dieser Zusammenhang muss in einer Prüfungsantwort ausdrücklich hergestellt werden."],
     mc("hdi-c3", "Worin unterschied sich der Nationalsozialismus wesentlich vom italienischen Faschismus?",
       ["er war weniger gewalttätig", "die Rassenideologie stand im Zentrum, nicht der Staat",
        "er hatte keine Einheitspartei", "er lehnte den Führerkult ab"], 1,
       "Die rassistische Weltanschauung war der Kern, aus dem Verfolgung, Expansion und Völkermord folgten.")],

    ["Stalinismus und die Grenzen des Vergleichs",
     ["Stalin baute ab Ende der 1920er-Jahre eine Diktatur mit Zwangskollektivierung, Fünfjahresplänen, Massendeportationen und den Schauprozessen der grossen Säuberungen auf.",
      "Die Zahl der Opfer geht in die Millionen. Formal ähneln sich die Herrschaftstechniken jenen des Nationalsozialismus in hohem Mass.",
      "Der Vergleich hat aber eine Grenze: Die Ideologien sind gegensätzlich. Der Stalinismus verfolgte nach Klassenzugehörigkeit und politischer Gegnerschaft, der Nationalsozialismus nach rassistischen Kriterien mit dem Ziel der physischen Vernichtung ganzer Gruppen. Vergleichen heisst Gemeinsamkeiten <em>und</em> Unterschiede benennen."],
     tf("hdi-c4", "Ein Vergleich von Stalinismus und Nationalsozialismus bedeutet, sie gleichzusetzen.", false,
       "Vergleichen heisst, Gemeinsamkeiten und Unterschiede herauszuarbeiten. Herrschaftstechniken ähneln sich, die Ideologien und Verfolgungskriterien unterscheiden sich grundlegend.")],
  ]);

  /* ---------------------------------------- 11 Zweiter Weltkrieg */
  body("hist-ww2-world", [
    ["Vom Vertragsbruch zum Krieg",
     ["Hitler brach den Versailler Vertrag schrittweise: Aufrüstung 1935, Einmarsch ins Rheinland 1936, Anschluss Österreichs und Sudetenkrise 1938.",
      "Die Westmächte reagierten mit <strong>Appeasement</strong>, der Politik des Nachgebens. Im Münchner Abkommen von 1938 stimmten sie der Abtretung des Sudetenlands zu, in der Hoffnung auf Frieden.",
      "Der Hitler-Stalin-Pakt vom August 1939 sicherte Deutschland den Rücken. Am 1. September folgte der Überfall auf Polen. Die Lehre aus dem Appeasement prägt aussenpolitische Debatten bis heute."],
     mc("hw2w-c1", "Was bezeichnet Appeasement?",
       ["die Politik der Aufrüstung", "die Politik des Nachgebens gegenüber Hitler in der Hoffnung, den Frieden zu erhalten",
        "ein Militärbündnis", "die Neutralitätspolitik"], 1,
       "Die Westmächte gaben Forderungen nach, um einen Krieg zu vermeiden. Das Münchner Abkommen ist das bekannteste Beispiel.")],

    ["Wendepunkte des Kriegsverlaufs",
     ["1940 fiel Frankreich innerhalb von sechs Wochen. Die Luftschlacht um England scheiterte jedoch, eine Invasion fand nicht statt.",
      "Der Überfall auf die Sowjetunion 1941 eröffnete die entscheidende Front. Die Niederlage bei <strong>Stalingrad</strong> im Winter 1942/43 markierte die Wende: Von da an war die Wehrmacht im Osten auf dem Rückzug.",
      "1944 folgte die Landung in der Normandie und damit die zweite Front im Westen. Im Mai 1945 kapitulierte Deutschland, im September nach den Atombombenabwürfen auf Hiroshima und Nagasaki auch Japan."],
     mc("hw2w-c2", "Welches Ereignis gilt als Wendepunkt an der Ostfront?",
       ["der Überfall auf Polen", "Stalingrad 1942/43", "die Landung in der Normandie", "der Hitler-Stalin-Pakt"], 1,
       "Nach der Niederlage bei Stalingrad war die Wehrmacht im Osten dauerhaft in der Defensive.")],

    ["Der Holocaust als Folge der Ideologie",
     ["Die Verfolgung begann nicht 1941. Sie lief seit 1933 in Stufen: Ausgrenzung durch Berufsverbote, Entrechtung durch die Nürnberger Gesetze 1935, offene Gewalt in der Pogromnacht 1938.",
      "Mit dem Krieg im Osten begann die systematische Ermordung, zunächst durch Einsatzgruppen, dann in Vernichtungslagern. Die <strong>Wannseekonferenz</strong> von 1942 koordinierte die Organisation.",
      "Etwa sechs Millionen Jüdinnen und Juden wurden ermordet, dazu Sinti und Roma, Behinderte, politische Gegner und Kriegsgefangene. Entscheidend für das Verständnis ist die Stufenlogik: Ausgrenzung, Entrechtung, Gewalt, Vernichtung."],
     mc("hw2w-c3", "Welche Stufenfolge kennzeichnet die Verfolgungspolitik ab 1933?",
       ["sofortige Vernichtung", "Ausgrenzung, Entrechtung, offene Gewalt, systematische Vernichtung",
        "nur wirtschaftliche Massnahmen", "Vertreibung ins Ausland als Endziel"], 1,
       "Die Radikalisierung verlief in erkennbaren Stufen über acht Jahre.")],

    ["Was nach 1945 daraus folgte",
     ["Die <strong>Nürnberger Prozesse</strong> schufen eine Neuerung: Individuelle Verantwortung für Verbrechen gegen die Menschlichkeit wurde vor einem internationalen Gericht verhandelt.",
      "1948 folgte die Allgemeine Erklärung der Menschenrechte, 1948 die Völkermordkonvention. Beide sind unmittelbare Reaktionen auf die Erfahrung des Kriegs.",
      "Europa war geteilt, Deutschland besetzt, rund sechzig Millionen Menschen tot. Die Nachkriegsordnung mit UNO, Menschenrechten und europäischer Integration lässt sich nur aus dieser Erfahrung heraus verstehen."],
     tf("hw2w-c4", "Die Nürnberger Prozesse begründeten die individuelle strafrechtliche Verantwortung für Verbrechen gegen die Menschlichkeit.", true,
       "Erstmals wurden Einzelpersonen vor einem internationalen Gericht für solche Verbrechen zur Rechenschaft gezogen.")],
  ]);

  /* ---------------------------------------- 12 Kalter Krieg */
  body("hist-postwar-coldwar", [
    ["Warum aus Verbündeten Gegner wurden",
     ["Die Anti-Hitler-Koalition beruhte auf einem gemeinsamen Feind, nicht auf gemeinsamen Werten. Mit dessen Niederlage entfiel die Klammer.",
      "Die USA standen für parlamentarische Demokratie und Marktwirtschaft, die Sowjetunion für Einparteienherrschaft und Planwirtschaft. Beide hielten ihr Modell für überlegen und übertragbar.",
      "Hinzu kam gegenseitiges Misstrauen über die Nachkriegsordnung in Osteuropa. Aus Interessengegensatz und Ideologiekonflikt entstand die Blockbildung."],
     mc("hcw-c1", "Warum zerbrach die Anti-Hitler-Koalition nach 1945?",
       ["wegen Streit über Reparationen allein", "weil sie auf einem gemeinsamen Feind beruhte und die Gesellschaftsmodelle unvereinbar waren",
        "wegen der Atombombe allein", "weil die USA austraten"], 1,
       "Mit dem Wegfall des gemeinsamen Gegners traten die grundlegenden Gegensätze offen zutage.")],

    ["Eindämmung, Marshallplan, Blockbildung",
     ["1947 formulierte Truman die Politik der <strong>Eindämmung</strong>: Die Ausbreitung des Kommunismus sollte überall gestoppt werden.",
      "Der <strong>Marshallplan</strong> stellte Wiederaufbauhilfe bereit. Er war humanitär und strategisch zugleich: Stabile Volkswirtschaften galten als weniger anfällig für kommunistische Bewegungen. Die Sowjetunion verbot ihren Satelliten die Teilnahme.",
      "1949 entstand die NATO, 1955 der Warschauer Pakt. Damit war Europa militärisch, wirtschaftlich und ideologisch geteilt. Deutschland zerfiel in zwei Staaten."],
     mc("hcw-c2", "Welche doppelte Funktion hatte der Marshallplan?",
       ["nur humanitäre Hilfe", "Wiederaufbauhilfe und zugleich Stabilisierung gegen kommunistischen Einfluss",
        "nur militärische Aufrüstung", "Reparationszahlung"], 1,
       "Wirtschaftliche Erholung sollte zugleich die politische Anziehungskraft des Kommunismus verringern.")],

    ["Der Konflikt wurde nie direkt ausgetragen",
     ["Trotz maximaler Feindschaft kämpften die beiden Supermächte nie direkt gegeneinander. Der Grund war die atomare Abschreckung: Ein Krieg hätte beide vernichtet.",
      "Stattdessen wurden <strong>Stellvertreterkriege</strong> geführt, in Korea, Vietnam, Afghanistan und in zahlreichen Konflikten Afrikas und Lateinamerikas.",
      "Die <strong>Kubakrise</strong> von 1962 war der gefährlichste Moment. Nach dreizehn Tagen lenkten beide Seiten ein. Danach wurden Rüstungskontrolle und direkte Kommunikationswege ausgebaut, weil beiden das Risiko bewusst geworden war."],
     mc("hcw-c3", "Warum kam es nie zu einem direkten Krieg zwischen den Supermächten?",
       ["wegen der UNO", "wegen der atomaren Abschreckung, die einen Krieg für beide selbstzerstörerisch machte",
        "weil sie sich nicht erreichen konnten", "wegen Handelsverträgen"], 1,
       "Die Aussicht auf gegenseitige Vernichtung wirkte als Bremse. Der Konflikt verlagerte sich in Stellvertreterkriege.")],

    ["Das Ende des Systems",
     ["In den 1980er-Jahren geriet die Sowjetunion wirtschaftlich in eine Sackgasse. Die Planwirtschaft stagnierte, der Rüstungswettlauf überforderte die Ressourcen, der Afghanistankrieg band Kräfte.",
      "Gorbatschow versuchte mit <strong>Glasnost</strong> und <strong>Perestroika</strong> gegenzusteuern. Die Reformen lösten Kräfte aus, die sich nicht mehr steuern liessen.",
      "1989 fiel die Berliner Mauer, 1990 wurde Deutschland wiedervereinigt, 1991 löste sich die Sowjetunion auf. Bemerkenswert ist, dass dieser Systemwechsel weitgehend unblutig verlief."],
     tf("hcw-c4", "Die Sowjetunion zerfiel primär aus wirtschaftlichen und inneren Gründen.", true,
       "Wirtschaftliche Stagnation, Überforderung durch den Rüstungswettlauf und die Eigendynamik der Reformen waren entscheidend.")],
  ]);

  /* ---------------------------------------- 13 Dekolonisierung */
  body("hist-bandung-decolonisation", [
    ["Warum die Kolonialreiche nach 1945 zerfielen",
     ["Die europäischen Mächte waren durch den Krieg wirtschaftlich und militärisch geschwächt. Die Kosten der Kolonialherrschaft überstiegen oft ihren Nutzen.",
      "Gleichzeitig hatten Kolonialsoldaten in Europa gekämpft, für Freiheit und gegen Rassenideologie. Der Widerspruch zur eigenen Entrechtung war offensichtlich und wurde politisch genutzt.",
      "Hinzu kam internationaler Druck. Die UNO-Charta nannte das Selbstbestimmungsrecht der Völker, und beide Supermächte lehnten den europäischen Kolonialismus aus je eigenen Gründen ab."],
     mc("hde-c1", "Welche Rolle spielte der Zweite Weltkrieg für die Dekolonisierung?",
       ["keine", "er schwächte die Kolonialmächte und machte den Widerspruch zwischen Freiheitsrhetorik und kolonialer Entrechtung offensichtlich",
        "er stärkte die Kolonialreiche", "er verzögerte sie um Jahrzehnte"], 1,
       "Geschwächte Metropolen, mobilisierte Kolonialsoldaten und internationaler Druck wirkten zusammen.")],

    ["Zwei Wege in die Unabhängigkeit",
     ["Manche Ablösungen verliefen weitgehend verhandelt, etwa Indien 1947, wenn auch begleitet von der Teilung und schweren Gewaltausbrüchen zwischen Bevölkerungsgruppen.",
      "Andere wurden militärisch erzwungen. Der Algerienkrieg von 1954 bis 1962 forderte Hunderttausende Tote und stürzte Frankreich in eine tiefe Staatskrise.",
      "Der Unterschied hing wesentlich davon ab, ob europäische Siedler im Land lebten. Wo eine grosse Siedlergruppe ihre Stellung verteidigte, war der Konflikt regelmässig blutiger."],
     mc("hde-c2", "Welcher Faktor machte Unabhängigkeitskonflikte besonders gewaltsam?",
       ["die Landesgrösse", "eine grosse europäische Siedlerbevölkerung, die ihre Stellung verteidigte",
        "die Entfernung zu Europa", "das Klima"], 1,
       "Wo Siedler eigene Interessen verteidigten, wie in Algerien, eskalierten die Konflikte deutlich stärker.")],

    ["Bandung und die Blockfreiheit",
     ["1955 trafen sich in Bandung Vertreter von 29 asiatischen und afrikanischen Staaten. Es war das erste grosse internationale Treffen ohne europäische Beteiligung.",
      "Die Teilnehmer verurteilten Kolonialismus und Rassismus und forderten Gleichberechtigung in den internationalen Beziehungen.",
      "Daraus entstand die <strong>Blockfreienbewegung</strong>: die Weigerung, sich im Kalten Krieg einer Seite anzuschliessen. In der Praxis war das schwierig, weil beide Supermächte mit Hilfe und Waffen um Einfluss warben."],
     mc("hde-c3", "Was war das Ziel der Blockfreienbewegung?",
       ["Beitritt zur NATO", "Unabhängigkeit von beiden Supermächten im Kalten Krieg",
        "Rückkehr zur Kolonialordnung", "Gründung eines eigenen Militärbündnisses"], 1,
       "Die Staaten wollten sich keiner der beiden Seiten unterordnen und eigene Interessen vertreten.")],

    ["Warum politische Unabhängigkeit nicht genügte",
     ["Viele neue Staaten erbten eine Wirtschaft, die auf den Export weniger Rohstoffe ausgerichtet war. Verarbeitende Industrie fehlte, weil sie kolonial verhindert worden war.",
      "Die Weltmarktpreise für Rohstoffe schwanken stark und werden anderswo gebildet. Eine Wirtschaft, die von einem oder zwei Produkten abhängt, bleibt damit verwundbar.",
      "Hinzu kamen willkürliche Grenzen, schwache Verwaltungsstrukturen und Verschuldung. Für dieses Fortbestehen wirtschaftlicher Abhängigkeit trotz formaler Souveränität steht der Begriff <strong>Neokolonialismus</strong>."],
     mc("hde-c4", "Was meint der Begriff Neokolonialismus?",
       ["die Rückkehr der Kolonialmächte", "das Fortbestehen wirtschaftlicher Abhängigkeit trotz formaler politischer Unabhängigkeit",
        "die Gründung neuer Kolonien", "die Blockfreiheit"], 1,
       "Formale Souveränität beseitigte die wirtschaftlichen Abhängigkeitsstrukturen nicht.")],
  ]);

  /* ---------------------------------------- 14 UNO, NATO, Europa */
  body("hist-un-nato-europe", [
    ["Die UNO: gelernt aus dem Scheitern des Völkerbunds",
     ["1945 gegründet, verfolgt die UNO dieselbe Grundidee wie der Völkerbund, ist aber anders gebaut. Alle Grossmächte sind Mitglied, und der Sicherheitsrat kann verbindliche Massnahmen beschliessen.",
      "Die fünf ständigen Mitglieder USA, Russland, China, Frankreich und Grossbritannien besitzen ein <strong>Vetorecht</strong>. Das ist die zentrale Schwäche und zugleich der Grund, warum die Grossmächte überhaupt beitraten.",
      "Ohne Vetorecht hätten sie sich nie einer Organisation unterworfen, die gegen sie entscheiden kann. Handlungsfähigkeit und Vollständigkeit der Mitgliedschaft standen also im Zielkonflikt."],
     mc("hun-c1", "Warum erhielten die fünf Grossmächte ein Vetorecht?",
       ["als Belohnung für den Sieg", "weil sie sonst nicht beigetreten wären und die Organisation unvollständig geblieben wäre",
        "weil sie am meisten zahlen", "das war ein Versehen"], 1,
       "Das Veto war der Preis für die Beteiligung der Grossmächte. Es lähmt den Sicherheitsrat, sicherte aber seine Existenz.")],

    ["NATO und Warschauer Pakt",
     ["Die NATO entstand 1949 als westliches Verteidigungsbündnis. Ihr Kernstück ist Artikel 5: Ein Angriff auf ein Mitglied gilt als Angriff auf alle.",
      "1955 folgte als östliches Gegenstück der Warschauer Pakt. Beide Bündnisse machten Europa zum militärischen Hauptschauplatz des Kalten Kriegs.",
      "Die Schweiz trat keinem der beiden bei. Das war die konsequente Anwendung der Neutralität, bedeutete aber auch, sich sicherheitspolitisch allein zu behaupten."],
     tf("hun-c2", "Artikel 5 der NATO bestimmt, dass ein Angriff auf ein Mitglied als Angriff auf alle gilt.", true,
       "Diese Beistandsklausel ist der Kern des Bündnisses und seine wichtigste Abschreckungswirkung.")],

    ["Europäische Integration begann mit Kohle und Stahl",
     ["1951 gründeten sechs Staaten die <strong>Montanunion</strong>, eine gemeinsame Verwaltung für Kohle und Stahl. Die Wahl war kein Zufall: Das waren die Rohstoffe der Rüstungsindustrie.",
      "Der Gedanke: Wer die Kriegsressourcen gemeinsam verwaltet, kann nicht heimlich gegeneinander aufrüsten. Wirtschaftliche Verflechtung sollte Krieg technisch unmöglich machen.",
      "Daraus entwickelte sich schrittweise mehr: Römische Verträge 1957, Binnenmarkt, Maastricht 1992 mit der Gründung der EU, Euro-Einführung. Die Methode war immer dieselbe, nämlich Integration in Etappen statt in einem Sprung."],
     mc("hun-c3", "Warum begann die europäische Integration ausgerechnet bei Kohle und Stahl?",
       ["weil sie am profitabelsten waren", "weil sie die Grundstoffe der Rüstungsindustrie waren und gemeinsame Kontrolle heimliche Aufrüstung verhindern sollte",
        "weil sie leicht zu transportieren waren", "weil die USA es verlangten"], 1,
       "Die gemeinsame Verwaltung der Kriegsressourcen sollte einen erneuten Krieg praktisch unmöglich machen.")],

    ["Die Schweiz und die internationalen Organisationen",
     ["Die Schweiz trat der UNO erst <strong>2002</strong> bei, über fünfzig Jahre nach ihrer Gründung. Der Hauptgrund war die Sorge, die Neutralität könnte durch Sanktionsbeschlüsse berührt werden.",
      "Genf war dennoch von Anfang an europäischer Sitz zahlreicher UNO-Organisationen. Die Schweiz war also seit jeher Gastland und Vermittlerin, ohne Mitglied zu sein.",
      "Gegenüber der EU bleibt die Schweiz aussen vor, ist aber über die bilateralen Abkommen eng verflochten. Diese Doppelstellung von Distanz und Verflechtung ist das Grundmuster der schweizerischen Aussenpolitik."],
     mc("hun-c4", "Wann trat die Schweiz der UNO bei?",
       ["1945", "1971", "1992", "2002"], 3,
       "Der Beitritt erfolgte 2002 nach einer Volksabstimmung, über fünfzig Jahre nach der Gründung.")],
  ]);

  /* ---------------------------------------- 15 China seit 1949 */
  body("hist-china-1949", [
    ["1949: Gründung der Volksrepublik",
     ["Nach Jahrzehnten von Bürgerkrieg, japanischer Besetzung und erneutem Bürgerkrieg siegten die Kommunisten unter Mao Zedong. Die Nationalisten zogen sich nach Taiwan zurück.",
      "Die neue Regierung übernahm ein Land mit weitverbreiteter Armut, zerstörter Infrastruktur und geringer Industrie. Erste Massnahmen waren Landreform und Verstaatlichung.",
      "Aussenpolitisch orientierte sich China zunächst an der Sowjetunion, löste sich in den 1960er-Jahren aber im Zuge ideologischer Differenzen wieder von ihr."],
     mc("hcn-c1", "Was geschah 1949 mit den chinesischen Nationalisten?",
       ["sie wurden in die Regierung aufgenommen", "sie zogen sich nach Taiwan zurück",
        "sie lösten sich auf", "sie übernahmen die Macht"], 1,
       "Die Nationalisten unter Chiang Kai-shek etablierten sich auf Taiwan. Daraus entstand der bis heute ungelöste Taiwankonflikt.")],

    ["Grosser Sprung und Kulturrevolution",
     ["Der <strong>Grosse Sprung nach vorn</strong> ab 1958 sollte China im Eiltempo industrialisieren. Bauern wurden zur Stahlproduktion abgezogen, Ernteerträge geschönt gemeldet.",
      "Das Ergebnis war eine Hungerkatastrophe mit Schätzungen von zwanzig bis fünfundvierzig Millionen Toten. Sie zeigt, wie gefährlich ideologisch getriebene Planung ohne Rückmeldung aus der Realität ist.",
      "Die <strong>Kulturrevolution</strong> ab 1966 mobilisierte Jugendliche gegen Lehrer, Beamte und Parteikader. Bildung und Verwaltung wurden über Jahre lahmgelegt, Millionen verfolgt."],
     mc("hcn-c2", "Warum führte der Grosse Sprung zur Hungerkatastrophe?",
       ["wegen einer Dürre allein", "weil Arbeitskräfte aus der Landwirtschaft abgezogen und Erträge geschönt gemeldet wurden",
        "wegen ausländischer Sanktionen", "wegen zu hoher Exporte"], 1,
       "Fehlende Arbeitskräfte und falsche Meldungen führten dazu, dass Getreide abgeliefert wurde, das gar nicht vorhanden war.")],

    ["Reform und Öffnung ab 1978",
     ["Nach Maos Tod setzte Deng Xiaoping einen radikalen Kurswechsel durch: Marktmechanismen, Privatinitiative, Sonderwirtschaftszonen und Öffnung für ausländische Investitionen.",
      "Die Ergebnisse waren beispiellos. Über Jahrzehnte wuchs die Wirtschaft im hohen einstelligen Prozentbereich, Hunderte Millionen Menschen verliessen die extreme Armut.",
      "Politisch änderte sich jedoch nichts. Die Niederschlagung der Proteste auf dem Tian'anmen-Platz 1989 machte deutlich, dass wirtschaftliche Öffnung nicht politische Öffnung bedeutet."],
     mc("hcn-c3", "Was kennzeichnet den chinesischen Weg seit 1978?",
       ["wirtschaftliche und politische Öffnung", "wirtschaftliche Öffnung ohne politische Liberalisierung",
        "Rückkehr zur Planwirtschaft", "Abschottung vom Weltmarkt"], 1,
       "Markt und Weltmarktintegration ja, Machtmonopol der Partei unangetastet.")],

    ["Chinas heutige Rolle",
     ["China ist die zweitgrösste Volkswirtschaft der Welt, führend in Elektronik, Solartechnik und Elektromobilität und zentral in globalen Lieferketten.",
      "Mit der Seidenstrassen-Initiative investiert es in Infrastruktur in Asien, Afrika und Europa und baut damit politischen Einfluss auf.",
      "Für die Prüfung gilt: China widerlegt die verbreitete Annahme, wirtschaftliche Entwicklung führe zwangsläufig zur Demokratisierung. Diese Beobachtung ist ein starkes Argument in Erörterungen zur Globalisierung."],
     tf("hcn-c4", "Chinas Entwicklung zeigt, dass wirtschaftliches Wachstum zwangsläufig zu Demokratisierung führt.", false,
       "China ist das prominenteste Gegenbeispiel zu dieser These: hohes Wachstum bei unverändertem Einparteiensystem.")],
  ]);

  /* ---------------------------------------- 16 Nahostkonflikt */
  body("hist-middle-east", [
    ["Zwei nationale Bewegungen, ein Gebiet",
     ["Ende des 19. Jahrhunderts entstand der <strong>Zionismus</strong>, die Bewegung für einen jüdischen Staat. Ausgelöst wurde er durch Pogrome und Antisemitismus in Europa.",
      "Im selben Gebiet lebte eine arabische Bevölkerung, die im Zuge des allgemeinen Nationalismus ebenfalls ein eigenes nationales Bewusstsein entwickelte.",
      "Damit ist die Grundstruktur des Konflikts benannt: Zwei nationale Bewegungen erheben einen begründeten Anspruch auf dasselbe Territorium. Wer nur eine Seite als legitim darstellt, hat den Konflikt nicht erfasst."],
     mc("hme-c1", "Was ist die Grundstruktur des Nahostkonflikts?",
       ["ein Religionskrieg", "zwei nationale Bewegungen mit Anspruch auf dasselbe Gebiet",
        "ein Kampf um Öl", "ein Stellvertreterkrieg der Supermächte"], 1,
       "Religion und Grossmachtinteressen wirken mit, der Kern ist aber der konkurrierende nationale Anspruch auf dasselbe Territorium.")],

    ["Widersprüchliche britische Zusagen",
     ["Grossbritannien machte im Ersten Weltkrieg mehrere miteinander unvereinbare Zusagen. Arabischen Führern stellte es Unabhängigkeit in Aussicht, um sie gegen das Osmanische Reich zu gewinnen.",
      "Die <strong>Balfour-Erklärung</strong> von 1917 sagte zugleich die Unterstützung einer nationalen Heimstätte für das jüdische Volk in Palästina zu. Parallel teilten Grossbritannien und Frankreich die Region im Sykes-Picot-Abkommen unter sich auf.",
      "Als Grossbritannien ab 1920 das Mandat übernahm, waren die Widersprüche unauflösbar. Diese Vorgeschichte erklärt einen wesentlichen Teil des späteren Misstrauens auf beiden Seiten."],
     mc("hme-c2", "Was sagte die Balfour-Erklärung von 1917 zu?",
       ["die Unabhängigkeit Ägyptens", "die Unterstützung einer nationalen Heimstätte für das jüdische Volk in Palästina",
        "die Teilung Syriens", "das Ende des Mandats"], 1,
       "Sie stand im Widerspruch zu früheren Zusagen an arabische Führer und zum Sykes-Picot-Abkommen.")],

    ["1947 und 1948",
     ["1947 beschloss die UNO einen Teilungsplan mit einem jüdischen und einem arabischen Staat sowie internationaler Verwaltung Jerusalems. Die jüdische Seite stimmte zu, die arabische lehnte ab.",
      "1948 wurde der Staat Israel ausgerufen. Unmittelbar danach begann der Krieg mit den arabischen Nachbarstaaten, den Israel gewann und dabei sein Gebiet vergrösserte.",
      "Etwa 700'000 Palästinenserinnen und Palästinenser verloren ihre Heimat. Für Israel ist 1948 der Unabhängigkeitskrieg, für die palästinensische Seite die <strong>Nakba</strong>, die Katastrophe. Dass dasselbe Ereignis zwei gegensätzliche Namen trägt, ist selbst ein Befund über den Konflikt."],
     mc("hme-c3", "Warum trägt das Jahr 1948 zwei gegensätzliche Bezeichnungen?",
       ["wegen unterschiedlicher Kalender", "weil dasselbe Ereignis für die eine Seite Staatsgründung, für die andere Flucht und Vertreibung bedeutet",
        "wegen eines Übersetzungsfehlers", "weil zwei Kriege stattfanden"], 1,
       "Unabhängigkeitskrieg und Nakba bezeichnen dasselbe Geschehen aus zwei Perspektiven.")],

    ["Von 1967 bis heute",
     ["Im Sechstagekrieg 1967 besetzte Israel Westjordanland, Gazastreifen, Golanhöhen und Sinai. Die Besetzung und der anschliessende Siedlungsbau sind seither Kern der Auseinandersetzung.",
      "Die Osloer Abkommen der 1990er-Jahre schufen eine palästinensische Selbstverwaltung und weckten Hoffnung auf eine Zweistaatenlösung. Umgesetzt wurde sie nicht.",
      "Die Streitpunkte sind bis heute dieselben: Grenzen, Siedlungen, Status Jerusalems, Rückkehr der Flüchtlinge, Sicherheit. Für eine Prüfungsantwort gilt: Beide Perspektiven darstellen, Ursachen und Folgen trennen, und nicht die eigene Meinung an die Stelle der Analyse setzen."],
     tf("hme-c4", "Die Osloer Abkommen führten zur Umsetzung der Zweistaatenlösung.", false,
       "Sie schufen eine palästinensische Selbstverwaltung, die Kernfragen blieben aber ungelöst und die Zweistaatenlösung wurde nicht umgesetzt.")],
  ]);
})();

/* Geografie (13) und Mathematik (6): ausgeschriebene Lehrtexte. */
(function () {
  "use strict";
  var M = window.MNEMIKA;
  const { mc, tf } = M;
  function body(id, list) {
    var c = M.chapter(id);
    if (!c) return;
    c.depth = "full";
    c.blocks = list.map(function (b, i) {
      var blk = { id: "b" + (i + 1), label: b[0], body: b[1], check: b[2] };
      if (blk.check) { blk.check.blockId = blk.id; blk.check.blockNo = i + 1; blk.check.blockLabel = blk.label; blk.check.role = "check"; }
      return blk;
    });
  }

  /* ======================= GEOGRAFIE ======================= */

  body("geo-earth-time", [
    ["Die Erde ist geschichtet wie eine Zwiebel",
     ["Von aussen nach innen: die dünne <strong>Erdkruste</strong>, der mächtige <strong>Erdmantel</strong>, der flüssige äussere und der feste innere <strong>Erdkern</strong>.",
      "Die Dicken sind extrem ungleich. Die Kruste misst unter Ozeanen nur fünf bis zehn Kilometer, unter Gebirgen bis siebzig. Der Mantel reicht bis in 2900 Kilometer Tiefe.",
      "Warum schichtet sich das überhaupt? Weil die junge Erde heiss und flüssig war. Schwere Stoffe wie Eisen sanken nach innen, leichte wie Silikate stiegen auf. Die Schichtung ist also erstarrte Dichtesortierung."],
     mc("gt-c1", "Warum ist die Erde überhaupt in Schichten aufgebaut?",
       ["weil sie sich dreht", "weil in der heissen Frühzeit schwere Stoffe absanken und leichte aufstiegen",
        "wegen der Plattentektonik", "wegen des Magnetfelds"], 1,
       "Die Schichtung ist eine Dichtesortierung aus der Zeit, als die Erde noch weitgehend flüssig war.")],

    ["Lithosphäre und Asthenosphäre: die entscheidende Grenze",
     ["Für die Plattentektonik ist eine andere Einteilung wichtiger als Kruste und Mantel. Sie richtet sich nicht nach der Chemie, sondern nach dem mechanischen Verhalten.",
      "Die <strong>Lithosphäre</strong> umfasst die Kruste und den obersten, starren Mantelteil. Sie ist spröde und zerbricht in Platten. Darunter liegt die <strong>Asthenosphäre</strong>, die zähplastisch ist und über lange Zeiträume fliesst.",
      "Nur weil es diese fliessfähige Schicht gibt, können die starren Platten überhaupt gleiten. Ohne Asthenosphäre keine Plattentektonik."],
     mc("gt-c2", "Worin unterscheiden sich Lithosphäre und Asthenosphäre?",
       ["in der chemischen Zusammensetzung", "im mechanischen Verhalten: starr gegenüber zähplastisch",
        "in der Temperatur allein", "in der Farbe des Gesteins"], 1,
       "Die Einteilung ist mechanisch. Die starre Lithosphäre gleitet auf der fliessfähigen Asthenosphäre.")],

    ["Woher wir das wissen, ohne hineinzuschauen",
     ["Das tiefste je gebohrte Loch reicht gut zwölf Kilometer. Das ist weniger als ein halbes Promille des Erdradius. Direkt gesehen hat den Erdmantel niemand.",
      "Die Kenntnis stammt aus <strong>Erdbebenwellen</strong>. Sie durchlaufen die Erde und werden an jeder Dichtegrenze gebrochen oder reflektiert. Aus den Laufzeiten an hunderten Messstationen lässt sich der Innenaufbau berechnen.",
      "Ein besonders schöner Befund: Bestimmte Wellen können Flüssigkeiten nicht durchqueren. Da sie den äusseren Kern nicht passieren, muss dieser flüssig sein. Das ist indirekte Beweisführung in Reinform."],
     mc("gt-c3", "Woher stammt das Wissen über den inneren Aufbau der Erde?",
       ["aus Tiefbohrungen", "aus der Auswertung von Erdbebenwellen", "aus Vulkanproben allein", "aus Satellitenbildern"], 1,
       "Laufzeit, Brechung und Reflexion seismischer Wellen erlauben Rückschlüsse auf Dichte und Aggregatzustand der Schichten.")],

    ["Die geologische Zeittafel und die Zeitdimension",
     ["Die Erdgeschichte umfasst rund 4,6 Milliarden Jahre, gegliedert in Erdzeitalter, die durch markante Ereignisse getrennt sind, meist grosse Aussterbewellen.",
      "Um die Dimension zu fassen, hilft ein Massstab: Presst man die Erdgeschichte auf ein Jahr, entstehen die ersten Lebewesen Ende Februar, die Dinosaurier sterben am 26. Dezember aus, und die gesamte schriftliche Menschheitsgeschichte passt in die letzten dreissig Sekunden.",
      "Das erklärt, warum geologische Prozesse mit wenigen Zentimetern pro Jahr trotzdem Gebirge auftürmen können. In geologischen Zeiträumen ist langsam gleichbedeutend mit gewaltig."],
     tf("gt-c4", "Prozesse von wenigen Zentimetern pro Jahr sind geologisch bedeutungslos.", false,
       "Über Millionen Jahre summieren sich Zentimeter zu hunderten Kilometern. Genau so entstehen Gebirge und Ozeane.")],
  ]);

  body("geo-plate-tectonics", [
    ["Eine Idee, die lange abgelehnt wurde",
     ["Alfred Wegener fiel 1912 auf, dass die Küsten Südamerikas und Afrikas zusammenpassen wie Puzzleteile. Dazu kamen gleiche Fossilien und gleiche Gesteinsformationen auf beiden Seiten des Atlantiks.",
      "Seine Theorie der Kontinentaldrift wurde jahrzehntelang abgelehnt, weil er keinen Antriebsmechanismus nennen konnte. Ein Befund ohne Erklärung überzeugt die Wissenschaft selten.",
      "Erst ab den 1960er-Jahren lieferte die Erforschung des Meeresbodens die fehlende Erklärung. Das ist ein Musterbeispiel dafür, wie wissenschaftliche Erkenntnis funktioniert: Beobachtung, Hypothese, Ablehnung, späterer Mechanismusnachweis."],
     mc("gp-c1", "Warum wurde Wegeners Theorie zunächst abgelehnt?",
       ["die Beobachtungen waren falsch", "er konnte keinen Antriebsmechanismus angeben",
        "die Kontinente passten nicht zusammen", "er war kein Geologe"], 1,
       "Die Belege waren gut, aber ohne erklärenden Mechanismus blieb die Theorie unbefriedigend.")],

    ["Der Antrieb: Konvektion im Mantel",
     ["Im Erdmantel herrscht ein Temperaturunterschied zwischen unten und oben. Heisses Material steigt auf, kühlt an der Oberfläche ab, wird dichter und sinkt wieder. Das sind <strong>Konvektionsströme</strong>.",
      "Die Lithosphärenplatten schwimmen auf diesen Strömungen und werden mitgeschleppt. Dazu kommt der Zug der abtauchenden Plattenränder, der heute als wichtigster Antrieb gilt.",
      "Die Geschwindigkeiten liegen bei zwei bis zehn Zentimetern pro Jahr, etwa so schnell wie Fingernägel wachsen. In hundert Millionen Jahren ergibt das mehrere tausend Kilometer."],
     mc("gp-c2", "Was treibt die Plattenbewegung an?",
       ["die Erdrotation", "Konvektionsströme im Mantel und der Zug abtauchender Plattenränder",
        "der Mond", "Windströmungen"], 1,
       "Wärmetransport im Mantel und die Schwerkraft an den Subduktionszonen sind die Hauptantriebe.")],

    ["Drei Arten von Plattengrenzen",
     ["An <strong>divergenten</strong> Grenzen driften Platten auseinander. Magma steigt auf und bildet neue ozeanische Kruste. Der Mittelatlantische Rücken ist das bekannteste Beispiel, an Land Island.",
      "An <strong>konvergenten</strong> Grenzen stossen Platten zusammen. Ist eine ozeanisch, taucht sie ab, es entstehen Tiefseerinne, Vulkankette und starke Erdbeben. Stossen zwei kontinentale Platten zusammen, faltet sich ein Gebirge wie Alpen oder Himalaya.",
      "An <strong>konservativen</strong> Grenzen gleiten Platten aneinander vorbei. Es entsteht keine neue Kruste und keine wird zerstört, aber die Verhakung erzeugt schwere Erdbeben, wie an der San-Andreas-Verwerfung."],
     mc("gp-c3", "Was entsteht, wenn zwei kontinentale Platten zusammenstossen?",
       ["eine Tiefseerinne", "ein Faltengebirge", "ein Mittelozeanischer Rücken", "eine Transformstörung"], 1,
       "Kontinentale Kruste ist zu leicht zum Abtauchen. Sie wird gestaucht und aufgefaltet, wie bei Alpen und Himalaya.")],

    ["Warum Vulkane und Erdbeben Linien bilden",
     ["Trägt man alle Erdbeben und Vulkane der Erde in eine Karte ein, entsteht kein zufälliges Muster, sondern ein Netz schmaler Linien.",
      "Diese Linien sind die Plattengrenzen. Der pazifische <strong>Feuerring</strong> umfasst rund neunzig Prozent aller Erdbeben und drei Viertel der aktiven Vulkane.",
      "Ausnahmen bestätigen die Regel: <strong>Hotspots</strong> wie Hawaii oder Island liegen teilweise fern der Grenzen. Dort steigt ortsfest Magma auf, während die Platte darüber weiterwandert. So entsteht eine Inselkette mit zunehmendem Alter in Bewegungsrichtung."],
     mc("gp-c4", "Wie entsteht eine Inselkette über einem Hotspot?",
       ["die Inseln entstehen gleichzeitig", "der Hotspot bleibt ortsfest, während die Platte darüber weiterwandert",
        "der Hotspot wandert mit", "durch Erosion"], 1,
       "Die Platte zieht über die ortsfeste Magmaquelle. Ältere Inseln liegen deshalb in Bewegungsrichtung weiter entfernt.")],
  ]);

  body("geo-exogenic-rocks", [
    ["Aufbau und Abtrag arbeiten gegeneinander",
     ["<strong>Endogene</strong> Kräfte aus dem Erdinneren bauen auf: Gebirge, Vulkane, Hebung. <strong>Exogene</strong> Kräfte von aussen tragen ab: Wasser, Eis, Wind, Schwerkraft.",
      "Beide wirken gleichzeitig. Jedes Gebirge wird abgetragen, während es gehoben wird. Seine Höhe ist das Ergebnis dieses Wettlaufs.",
      "Deshalb sind die Alpen hoch und zerklüftet, die viel älteren Appalachen dagegen niedrig und abgerundet. Der Unterschied liegt nicht in der Entstehung, sondern darin, wie lange die Abtragung schon arbeitet."],
     mc("ge-c1", "Warum sind die Appalachen niedriger als die Alpen?",
       ["sie wurden schwächer aufgefaltet", "sie sind viel älter, die Abtragung wirkt seit deutlich längerer Zeit",
        "dort regnet es weniger", "sie bestehen aus anderem Gestein"], 1,
       "Bei ausbleibender Hebung gewinnt die Abtragung. Alte Gebirge sind deshalb abgerundet und niedrig.")],

    ["Verwitterung geht der Erosion voraus",
     ["<strong>Verwitterung</strong> zersetzt Gestein an Ort und Stelle. Physikalisch durch Frostsprengung, wenn gefrierendes Wasser Spalten weitet, oder durch Temperaturwechsel.",
      "Chemisch löst Wasser mit gelöstem CO₂ Kalkgestein auf. So entstehen Karstlandschaften, Höhlen und Dolinen, im Jura gut zu beobachten.",
      "Erst danach greift die <strong>Erosion</strong>: Sie transportiert das gelockerte Material fort. Die Reihenfolge ist wichtig, denn ohne vorherige Verwitterung findet Erosion kaum Angriffspunkte."],
     mc("ge-c2", "Worin unterscheidet sich Verwitterung von Erosion?",
       ["Verwitterung transportiert, Erosion zersetzt", "Verwitterung zersetzt an Ort und Stelle, Erosion transportiert ab",
        "beides ist dasselbe", "Verwitterung wirkt nur im Winter"], 1,
       "Zuerst wird das Gestein gelockert, dann abtransportiert. Zersetzung vor Transport.")],

    ["Der Gesteinskreislauf",
     ["<strong>Magmatische</strong> Gesteine entstehen aus erstarrender Schmelze. Kühlt sie langsam in der Tiefe ab, bilden sich grosse Kristalle wie im Granit, kühlt sie rasch an der Oberfläche ab, bleiben die Kristalle winzig wie im Basalt.",
      "<strong>Sedimentgesteine</strong> entstehen aus abgelagertem Material, das unter Druck verfestigt wird: Sandstein, Kalkstein, Tonstein. Nur sie enthalten Fossilien.",
      "<strong>Metamorphe</strong> Gesteine entstehen, wenn vorhandenes Gestein unter Druck und Hitze umgewandelt wird, ohne zu schmelzen. Aus Kalkstein wird Marmor, aus Tonstein Schiefer. Jedes Gestein kann durch Aufschmelzen oder Abtragung wieder in den Kreislauf eintreten."],
     mc("ge-c3", "Warum hat Granit grosse, Basalt aber winzige Kristalle?",
       ["unterschiedliche Zusammensetzung", "Granit kühlte langsam in der Tiefe ab, Basalt rasch an der Oberfläche",
        "Granit ist älter", "Basalt wurde verwittert"], 1,
       "Je langsamer die Abkühlung, desto mehr Zeit für das Kristallwachstum.")],

    ["Naturgefahren als Grenzfälle normaler Prozesse",
     ["Ein Erdrutsch, eine Mure oder ein Hochwasser sind keine Ausnahmen von der Natur, sondern dieselben exogenen Prozesse in verdichteter Form.",
      "Gefährlich werden sie durch menschliche Nutzung. Bebauung in Rutschhängen, Begradigung von Flüssen, Versiegelung von Böden und Abholzung verstärken die Wirkung erheblich.",
      "Für Prüfungsaufgaben gilt deshalb: Trenne den <em>natürlichen Prozess</em> von den <em>menschlichen Verstärkungsfaktoren</em>, und nenne bei Massnahmen sowohl bauliche als auch planerische Ansätze."],
     mc("ge-c4", "Warum werden Naturgefahren oft als zunehmend wahrgenommen?",
       ["die Prozesse selbst werden stärker", "der Mensch nutzt zunehmend gefährdete Räume und verstärkt die Wirkung",
        "die Messgeräte sind besser", "die Erde kühlt ab"], 1,
       "Vor allem Nutzung und Versiegelung erhöhen Schadenspotenzial und Wirkung, unabhängig von der Häufigkeit des Naturereignisses.")],
  ]);

  body("geo-switzerland-geology", [
    ["Drei Grosslandschaften, eine Entstehungsgeschichte",
     ["Die Schweiz gliedert sich in <strong>Jura</strong> im Nordwesten, <strong>Mittelland</strong> dazwischen und <strong>Alpen</strong> im Süden. Rund sechzig Prozent der Fläche sind Alpen, dreissig Prozent Mittelland, zehn Prozent Jura.",
      "Im Mittelland leben etwa zwei Drittel der Bevölkerung. Die Bevölkerungsverteilung folgt also direkt dem Relief, und zwar aus einem einfachen Grund: flaches Land lässt sich bebauen, bewirtschaften und erschliessen.",
      "Alle drei Landschaften gehen auf dasselbe Ereignis zurück, nämlich die Kollision der afrikanischen mit der europäischen Platte."],
     mc("gs-c1", "Wo lebt der Grossteil der Schweizer Bevölkerung?",
       ["in den Alpen", "im Mittelland", "im Jura", "gleichmässig verteilt"], 1,
       "Rund zwei Drittel leben im Mittelland, das nur etwa dreissig Prozent der Fläche ausmacht.")],

    ["Wie die Alpen entstanden",
     ["Zwischen Europa und Afrika lag ein Ozean, die Tethys. Als sich die Platten aufeinander zubewegten, wurde dieser Ozean geschlossen und seine Sedimente zusammengeschoben.",
      "Weil kontinentale Kruste zu leicht zum Abtauchen ist, wurde das Material gestaucht, gefaltet und in <strong>Decken</strong> übereinandergeschoben. Gesteinspakete wurden dabei über zehn bis hundert Kilometer transportiert.",
      "Deshalb liegen in den Alpen mancherorts ältere Gesteine über jüngeren, was der normalen Ablagerungsordnung widerspricht. Diese Deckenstruktur ist das Kennzeichen der Alpen und ein häufiger Prüfungsinhalt."],
     mc("gs-c2", "Was kennzeichnet eine Decke im alpinen Bau?",
       ["eine Schneeschicht", "ein Gesteinspaket, das weit über andere geschoben wurde",
        "eine Verwitterungsschicht", "eine Gletscherablagerung"], 1,
       "Deckenüberschiebungen können ältere Gesteine über jüngere bringen, entgegen der normalen Lagerungsfolge.")],

    ["Mittelland und Jura",
     ["Das <strong>Mittelland</strong> ist ein Becken, das mit Abtragungsschutt der Alpen gefüllt wurde. Dieses Sedimentpaket heisst <strong>Molasse</strong>. Es ist also wörtlich das, was von den Alpen heruntergekommen ist.",
      "Der <strong>Jura</strong> besteht überwiegend aus Kalkgestein aus einem flachen Meer. Der alpine Druck faltete dieses Schichtpaket in Ketten von Bergrücken und Tälern.",
      "Deshalb ist der Jura ein Faltengebirge wie die Alpen, aber deutlich einfacher gebaut, mit regelmässigen Falten statt übereinandergeschobenen Decken."],
     mc("gs-c3", "Woraus besteht die Molasse des Mittellands?",
       ["aus Vulkangestein", "aus Abtragungsschutt der Alpen", "aus Gletschereis", "aus Granit"], 1,
       "Die Molasse ist das Sedimentpaket aus erodiertem Alpenmaterial, das sich im Becken ablagerte.")],

    ["Die Gletscher haben die Feinform geschaffen",
     ["Während der Eiszeiten reichten Gletscher bis weit ins Mittelland. Sie formten <strong>Trogtäler</strong> mit U-förmigem Querschnitt, während Flüsse V-förmige Kerbtäler schaffen.",
      "Sie hinterliessen <strong>Moränen</strong> aus mitgeführtem Schutt, hobelten Becken aus, in denen heute Seen liegen, und transportierten <strong>Findlinge</strong> über weite Strecken.",
      "Der Vierwaldstättersee, der Zürichsee und der Genfersee liegen in solchen ausgehobelten Becken. Wer die Schweizer Landschaft verstehen will, muss also zwei Zeitebenen zusammendenken: alpine Auffaltung und eiszeitliche Überformung."],
     mc("gs-c4", "Woran erkennst du ein glazial geformtes Tal?",
       ["am V-förmigen Querschnitt", "am U-förmigen Querschnitt", "an der Flussbreite", "an der Höhenlage"], 1,
       "Gletscher hobeln Trogtäler mit U-Profil aus, Flüsse schneiden V-förmige Kerbtäler ein.")],
  ]);

  body("geo-weather-climate", [
    ["Wetter, Witterung, Klima",
     ["<strong>Wetter</strong> ist der Zustand der Atmosphäre jetzt und hier. <strong>Witterung</strong> ist der Charakter einiger Tage bis Wochen. <strong>Klima</strong> ist der statistische Durchschnitt über mindestens dreissig Jahre.",
      "Diese Unterscheidung ist keine Wortklauberei. Sie entscheidet, welche Schlüsse zulässig sind: Ein kalter Winter widerlegt keine Klimaerwärmung, so wenig wie ein Regentag eine Dürre widerlegt.",
      "Für die Prüfung ist das ein wiederkehrendes Argumentationsmuster: Einzelereignis gegen statistischen Trend."],
     tf("gw-c1", "Ein einzelner sehr kalter Winter widerlegt eine langfristige Klimaerwärmung.", false,
       "Klima ist ein Mittel über mindestens dreissig Jahre. Einzelne Wetterereignisse sagen über den Trend nichts aus.")],

    ["Warum es überhaupt Klimazonen gibt",
     ["Die Erde ist eine Kugel. Am Äquator trifft die Sonnenstrahlung fast senkrecht auf, in Polnähe sehr flach. Dieselbe Energiemenge verteilt sich dort auf eine viel grössere Fläche.",
      "Dazu kommt der längere Weg durch die Atmosphäre in hohen Breiten, auf dem mehr Energie absorbiert und gestreut wird.",
      "Aus diesem Energieunterschied folgt alles Weitere: Temperaturgürtel, Luftdruckgürtel, globale Windsysteme. Die Kugelgestalt ist die Wurzel der gesamten Klimageografie."],
     mc("gw-c2", "Warum ist es am Äquator wärmer als an den Polen?",
       ["der Äquator ist näher an der Sonne", "die Strahlung trifft dort steiler auf und verteilt sich auf eine kleinere Fläche",
        "dort ist die Atmosphäre dünner", "wegen der Erdrotation"], 1,
       "Der Einstrahlungswinkel entscheidet, auf welche Fläche sich dieselbe Energiemenge verteilt.")],

    ["Die Klimafaktoren erklären die Abweichungen",
     ["Wäre nur die Breitenlage entscheidend, hätten alle Orte auf demselben Breitengrad dasselbe Klima. Das stimmt nicht, weil weitere Faktoren mitwirken.",
      "<strong>Höhenlage</strong>: pro hundert Meter sinkt die Temperatur um durchschnittlich 0,65 Grad. <strong>Meeresnähe</strong>: Wasser erwärmt und kühlt sich langsam ab, deshalb sind Küsten ausgeglichen und Kontinentinnere extrem.",
      "<strong>Meeresströmungen</strong>: Der Nordatlantikstrom macht Europa deutlich milder als Gebiete gleicher Breite in Kanada. <strong>Relief</strong>: Ein Gebirge staut Luft, zwingt sie zum Aufsteigen und Abregnen, dahinter bleibt es trocken."],
     mc("gw-c3", "Warum ist Westeuropa milder als Ostkanada auf gleicher Breite?",
       ["wegen der Höhenlage", "wegen der warmen Meeresströmung des Nordatlantikstroms",
        "wegen der Bevölkerungsdichte", "wegen der Passatwinde"], 1,
       "Die warme Meeresströmung transportiert Wärme nach Norden und hebt die Temperaturen deutlich an.")],

    ["Föhn und Luv-Lee als Schweizer Standardfall",
     ["Feuchte Luft steigt an der Luvseite eines Gebirges auf, kühlt dabei ab, Wasserdampf kondensiert und es regnet. Dieser Aufstieg kühlt pro hundert Meter um etwa 0,6 Grad ab, solange Kondensation stattfindet.",
      "Auf der Leeseite sinkt die nun trockene Luft ab und erwärmt sich um etwa ein Grad pro hundert Meter, also stärker, weil keine Kondensationswärme mehr verbraucht wird.",
      "Das Ergebnis ist der <strong>Föhn</strong>: warme, trockene Luft und aussergewöhnlich gute Fernsicht. Der Temperaturgewinn stammt nicht aus einer Wärmequelle, sondern aus der unterschiedlichen Abkühlungs- und Erwärmungsrate."],
     mc("gw-c4", "Warum ist die Luft im Lee wärmer als im Luv auf gleicher Höhe?",
       ["weil dort die Sonne stärker scheint", "weil sie beim Aufsteigen feucht langsamer abkühlte und beim Absinken trocken schneller erwärmt",
        "wegen der Meeresströmung", "wegen der Höhenlage"], 1,
       "Der Unterschied zwischen feuchtadiabatischer Abkühlung und trockenadiabatischer Erwärmung erzeugt den Wärmegewinn.")],
  ]);

  body("geo-climate-diagrams", [
    ["Was in einem Klimadiagramm steht",
     ["Ein Klimadiagramm fasst dreissig Jahre Messungen zusammen. Die <strong>Temperaturkurve</strong> wird auf der linken Achse abgelesen, die <strong>Niederschlagssäulen</strong> auf der rechten.",
      "Die Achsen sind meist so gekoppelt, dass zehn Millimeter Niederschlag zwanzig Grad Celsius entsprechen. Das ist kein Zufall: So lässt sich direkt ablesen, wann Verdunstung den Niederschlag übersteigt.",
      "Liegt die Temperaturkurve über den Niederschlagssäulen, herrscht <strong>aride</strong>, also trockene Zeit. Liegt sie darunter, ist es <strong>humid</strong>. Diese Ablesung ist die meistgeprüfte Fertigkeit des Kapitels."],
     mc("gd-c1", "Was bedeutet es, wenn die Temperaturkurve über den Niederschlagssäulen liegt?",
       ["es ist besonders feucht", "es herrscht aride Zeit, die Verdunstung übersteigt den Niederschlag",
        "die Messung ist fehlerhaft", "es ist Winter"], 1,
       "Durch die gekoppelten Achsen zeigt die Lage der Kurve direkt das Verhältnis von Niederschlag und Verdunstung.")],

    ["In vier Schritten zur Klimazone",
     ["Erstens: Jahresmitteltemperatur und <strong>Amplitude</strong> bestimmen, also die Differenz zwischen wärmstem und kältestem Monat. Eine kleine Amplitude deutet auf Äquatornähe oder Meeresnähe.",
      "Zweitens: Lage des Temperaturmaximums prüfen. Liegt es im Juli, handelt es sich um die Nordhalbkugel, liegt es im Januar, um die Südhalbkugel.",
      "Drittens: Jahresniederschlag und seine Verteilung ansehen. Viertens: aus Temperatur und Niederschlagsverteilung die Zone bestimmen. Sommertrocken bedeutet mediterran, ganzjährig feucht und warm bedeutet tropisches Regenwaldklima."],
     mc("gd-c2", "Das Temperaturmaximum liegt im Januar. Was folgt daraus?",
       ["die Station liegt auf der Nordhalbkugel", "die Station liegt auf der Südhalbkugel",
        "die Station liegt am Äquator", "es ist ein Höhenklima"], 1,
       "Der Sommer liegt auf der Südhalbkugel im Januar. Das Maximum verrät also die Hemisphäre.")],

    ["Die wichtigsten Zonen an ihren Merkmalen erkennen",
     ["<strong>Tropisches Regenwaldklima</strong>: ganzjährig über 25 Grad, sehr geringe Amplitude, hoher Niederschlag ohne Trockenzeit.",
      "<strong>Savannenklima</strong>: warm mit ausgeprägter Regen- und Trockenzeit. <strong>Wüstenklima</strong>: sehr geringer Niederschlag, grosse Tagesamplitude.",
      "<strong>Mediterranes Klima</strong>: milde feuchte Winter, trockene heisse Sommer, das einzige mit sommerlicher Trockenheit in mittleren Breiten. <strong>Gemässigtes Klima</strong>: vier Jahreszeiten, ganzjähriger Niederschlag."],
     mc("gd-c3", "Welche Zone hat trockene Sommer und feuchte Winter?",
       ["tropischer Regenwald", "Savanne", "mediterran", "gemässigt"], 2,
       "Sommertrockenheit in mittleren Breiten ist das Kennzeichen des mediterranen Klimas.")],

    ["Von der Zone zur Vegetation und Nutzung",
     ["Klima bestimmt Vegetation, und Vegetation bestimmt landwirtschaftliche Nutzungsmöglichkeiten. Diese Kette solltest du in Materialaufgaben ausdrücklich herstellen.",
      "Beispiel: Sommertrockenheit bedeutet Pflanzen mit harten Blättern und tiefen Wurzeln, also Olive, Wein, Zitrus. Ohne Bewässerung kein Mais.",
      "Ein vollständige Antwort lautet deshalb nicht nur «mediterran», sondern: Sommertrockenheit, deshalb Hartlaubvegetation, deshalb diese Kulturen, deshalb Bewässerungsbedarf für andere."],
     mc("gd-c4", "Was macht eine Klimadiagramm-Auswertung vollständig?",
       ["die Nennung der Zone", "die Kette von Klimamerkmalen über Vegetation bis zur Nutzung",
        "die Angabe des Jahresniederschlags", "die Nennung der Stadt"], 1,
       "Die Prüfung verlangt die Begründungskette, nicht nur die Zuordnung.")],
  ]);

  body("geo-climate-change", [
    ["Der natürliche Treibhauseffekt ist die Voraussetzung für Leben",
     ["Die Sonne schickt kurzwellige Strahlung, die die Atmosphäre weitgehend passiert. Die Erde erwärmt sich und strahlt langwellige Wärmestrahlung zurück.",
      "Spurengase wie Wasserdampf, CO₂ und Methan absorbieren diese langwellige Strahlung teilweise und geben sie in alle Richtungen ab, auch nach unten. Dadurch bleibt Wärme im System.",
      "Ohne diesen Effekt läge die Durchschnittstemperatur bei etwa minus 18 Grad statt bei plus 15. Der Treibhauseffekt ist also nicht das Problem. Das Problem ist seine Verstärkung."],
     tf("gc-c1", "Der Treibhauseffekt ist grundsätzlich schädlich.", false,
       "Ohne ihn wäre die Erde rund 33 Grad kälter und praktisch unbewohnbar. Problematisch ist die zusätzliche, vom Menschen verursachte Verstärkung.")],

    ["Woher wir wissen, dass die Erwärmung anthropogen ist",
     ["Erstens: Die CO₂-Konzentration stieg seit 1850 von etwa 280 auf über 420 ppm, parallel zur Verbrennung fossiler Energieträger.",
      "Zweitens: Der Kohlenstoff aus fossilen Quellen trägt eine andere Isotopensignatur als natürlicher. Diese Signatur lässt sich in der Atmosphäre messen und bestätigt die Herkunft.",
      "Drittens: Eisbohrkerne erlauben den Blick auf 800'000 Jahre. Der heutige Anstieg ist um ein Vielfaches schneller als alle natürlichen Schwankungen dieses Zeitraums. Natürliche Faktoren allein können den Verlauf nicht erklären."],
     mc("gc-c2", "Welcher Befund spricht besonders klar für eine menschliche Ursache?",
       ["dass es wärmer wird", "die Isotopensignatur des zusätzlichen CO₂ weist auf fossile Quellen",
        "dass Gletscher schmelzen", "dass es Stürme gibt"], 1,
       "Die Isotopenzusammensetzung unterscheidet fossilen von natürlichem Kohlenstoff und identifiziert damit die Quelle.")],

    ["Rückkopplungen machen das System schwer berechenbar",
     ["Eine <strong>positive Rückkopplung</strong> verstärkt sich selbst. Schmelzendes Eis gibt dunklen Boden frei, der mehr Wärme absorbiert, was weiteres Schmelzen fördert.",
      "Auftauender Permafrost setzt Methan frei, ein sehr wirksames Treibhausgas, was die Erwärmung weiter antreibt.",
      "Es gibt auch dämpfende Effekte, etwa verstärkte Wolkenbildung. Die Unsicherheit der Klimamodelle stammt überwiegend aus diesen Rückkopplungen, nicht aus dem Grundmechanismus, der physikalisch gut verstanden ist."],
     mc("gc-c3", "Was ist eine positive Rückkopplung im Klimasystem?",
       ["eine erwünschte Entwicklung", "ein sich selbst verstärkender Effekt wie die Eis-Albedo-Rückkopplung",
        "eine Abschwächung", "ein Messfehler"], 1,
       "Positiv meint hier selbstverstärkend, nicht gut. Weniger Eis bedeutet mehr Absorption und damit noch weniger Eis.")],

    ["Vermeidung und Anpassung",
     ["<strong>Mitigation</strong> bedeutet Emissionen vermeiden: erneuerbare Energien, Effizienz, veränderte Mobilität und Ernährung, CO₂-Bepreisung.",
      "<strong>Adaptation</strong> bedeutet sich anpassen: Hochwasserschutz, Hitzevorsorge in Städten, andere Sorten in der Landwirtschaft, Umgang mit schwindenden Gletschern.",
      "Beides ist nötig. Ein Teil der Erwärmung ist wegen der Trägheit des Systems bereits festgelegt, und je weniger Mitigation gelingt, desto mehr Adaptation wird erzwungen."],
     mc("gc-c4", "Warum braucht es sowohl Mitigation als auch Adaptation?",
       ["weil Mitigation wirkungslos ist", "weil ein Teil der Erwärmung bereits festgelegt ist, weitere aber noch vermeidbar wäre",
        "weil Adaptation billiger ist", "weil es politisch einfacher ist"], 1,
       "Die Trägheit des Systems macht Anpassung unvermeidlich, Vermeidung begrenzt jedoch das Ausmass.")],
  ]);

  body("geo-economic-sectors-agriculture", [
    ["Das Drei-Sektoren-Modell als Entwicklungsanzeiger",
     ["Der <strong>Primärsektor</strong> gewinnt Rohstoffe, der <strong>Sekundärsektor</strong> verarbeitet sie, der <strong>Tertiärsektor</strong> erbringt Dienstleistungen.",
      "Mit zunehmender Entwicklung verschiebt sich die Beschäftigung vom ersten über den zweiten in den dritten Sektor. Dieser Verlauf gilt für praktisch alle Industrieländer.",
      "Der Grund ist die Produktivität. Mechanisierung erlaubt es, mit weniger Menschen mehr zu produzieren. Die freiwerdende Arbeitskraft wandert in die nächsten Sektoren."],
     mc("gse-c1", "Warum sinkt der Beschäftigungsanteil der Landwirtschaft in Industrieländern?",
       ["weil weniger Nahrung gebraucht wird", "weil die Produktivität je Arbeitskraft stark steigt",
        "weil Land fehlt", "weil importiert wird"], 1,
       "Mechanisierung und Züchtung erhöhen den Ertrag pro Arbeitskraft, dieselbe Produktion braucht weniger Menschen.")],

    ["Intensiv und extensiv, Subsistenz und Markt",
     ["<strong>Intensive</strong> Landwirtschaft setzt viel Kapital, Dünger und Arbeit pro Fläche ein und erzielt hohe Flächenerträge. <strong>Extensive</strong> Landwirtschaft nutzt grosse Flächen mit geringem Aufwand.",
      "<strong>Subsistenzwirtschaft</strong> produziert für den Eigenbedarf, <strong>marktorientierte</strong> Landwirtschaft für den Verkauf. Diese beiden Begriffspaare sind unabhängig voneinander und lassen sich kombinieren.",
      "Die Wahl hängt von Boden, Klima, Bodenpreis und Marktzugang ab. Wo Land teuer ist, wird intensiviert. Wo Land billig und Arbeit teuer ist, wird extensiviert."],
     mc("gse-c2", "Wo ist extensive Nutzung typisch?",
       ["bei sehr hohen Bodenpreisen", "wo Land reichlich und billig, Arbeit aber teuer ist",
        "in Stadtnähe", "bei intensiver Bewässerung"], 1,
       "Ist Fläche billig verfügbar, lohnt sich hoher Aufwand pro Hektare nicht.")],

    ["Schweizer Landwirtschaft als Sonderfall",
     ["Die Schweiz hat kleine Betriebe, steiles Gelände, hohe Löhne und hohe Bodenpreise. Unter Weltmarktbedingungen wäre die Produktion kaum konkurrenzfähig.",
      "Deshalb wird sie über <strong>Direktzahlungen</strong> gestützt, die an Leistungen gebunden sind: Landschaftspflege, Biodiversität, Tierwohl, Versorgungssicherheit.",
      "Der Verfassungsauftrag nennt ausdrücklich die multifunktionale Landwirtschaft. Sie soll nicht nur Nahrung produzieren, sondern auch Kulturlandschaft erhalten. Wer die Direktzahlungen nur als Subvention beschreibt, verkürzt den Zusammenhang."],
     mc("gse-c3", "Wofür erhält die Schweizer Landwirtschaft Direktzahlungen?",
       ["für möglichst hohe Erträge", "für gemeinwirtschaftliche Leistungen wie Landschaftspflege, Biodiversität und Tierwohl",
        "für Exporte", "für Flächenstilllegung allein"], 1,
       "Die Zahlungen sind an ökologische und landschaftliche Leistungen gebunden, nicht an die Produktionsmenge.")],

    ["Die Grenzen der Intensivierung",
     ["Höhere Erträge haben Kosten: Nitrat im Grundwasser, Pestizidrückstände, Bodenverdichtung, Verlust an Artenvielfalt, hoher Energieeinsatz für Dünger.",
      "Die <strong>Grüne Revolution</strong> steigerte ab den 1960er-Jahren die Welternten massiv und verhinderte Hungerkatastrophen. Gleichzeitig erhöhte sie die Abhängigkeit von Saatgut, Dünger und Bewässerung.",
      "Für Erörterungen gilt deshalb: Ertragssteigerung ist weder gut noch schlecht an sich. Entscheidend ist die Bilanz aus Versorgungssicherheit, ökologischen Folgekosten und sozialer Abhängigkeit."],
     tf("gse-c4", "Die Grüne Revolution hatte ausschliesslich positive Folgen.", false,
       "Sie erhöhte die Erträge deutlich, schuf aber auch Abhängigkeiten und ökologische Folgekosten.")],
  ]);

  body("geo-energy-sustainability", [
    ["Primärenergie, Endenergie, Nutzenergie",
     ["<strong>Primärenergie</strong> ist die Energie vor jeder Umwandlung, etwa Rohöl im Boden. <strong>Endenergie</strong> ist das, was beim Verbraucher ankommt, etwa Strom aus der Steckdose.",
      "<strong>Nutzenergie</strong> ist der Teil, der tatsächlich den gewünschten Zweck erfüllt, also Licht, Wärme, Bewegung.",
      "Bei jeder Umwandlung geht Energie als Wärme verloren. Deshalb sind Vergleiche nur sinnvoll, wenn dieselbe Stufe verglichen wird. Das ist eine klassische Stolperfalle in Statistikaufgaben."],
     mc("gen-c1", "Warum muss man bei Energiestatistiken die Stufe beachten?",
       ["weil die Einheiten verschieden sind", "weil bei jeder Umwandlung Verluste anfallen und Primär- und Endenergie stark abweichen",
        "weil sie unterschiedlich alt sind", "weil sie geschätzt werden"], 1,
       "Primärenergie enthält alle Umwandlungsverluste, Endenergie nicht. Ein Vergleich über Stufen hinweg ist wertlos.")],

    ["Der Schweizer Energiemix",
     ["Beim <strong>Strom</strong> stammen rund sechzig Prozent aus Wasserkraft und etwa ein Drittel aus Kernkraft. Der Strommix ist damit CO₂-arm.",
      "Beim <strong>Gesamtenergieverbrauch</strong> sieht es anders aus: Verkehr und Heizung laufen überwiegend mit importierten fossilen Energieträgern. Rund drei Viertel der gesamten Energie werden importiert.",
      "Diese Unterscheidung ist entscheidend. Wer nur den Strommix betrachtet, hält die Schweiz für weitgehend erneuerbar. Die Gesamtbilanz zeigt ein anderes Bild."],
     mc("gen-c2", "Warum wirkt die Schweiz im Strommix erneuerbarer als im Gesamtenergieverbrauch?",
       ["weil Strom unwichtig ist", "weil Verkehr und Wärme überwiegend mit importierten fossilen Trägern laufen",
        "weil Wasserkraft nicht erneuerbar ist", "weil Statistiken fehlen"], 1,
       "Strom ist nur ein Teil der Energie. Der grosse fossile Anteil steckt in Mobilität und Heizung.")],

    ["Was erneuerbar bedeutet und was nicht",
     ["Erneuerbar heisst, dass sich die Quelle in menschlichen Zeiträumen erneuert: Sonne, Wind, Wasser, Biomasse, Geothermie.",
      "Erneuerbar heisst nicht automatisch umweltneutral. Wasserkraft verändert Flussökosysteme, Windräder brauchen Fläche, Photovoltaik benötigt Rohstoffe und Energie in der Herstellung.",
      "Zudem sind Sonne und Wind <strong>volatil</strong>: Sie liefern nicht dann, wenn der Bedarf besteht. Deshalb sind Speicherung und Netzausbau die eigentliche technische Herausforderung, nicht die Erzeugung."],
     tf("gen-c3", "Erneuerbare Energien sind automatisch umweltneutral.", false,
       "Sie erneuern sich, haben aber Flächenbedarf, Rohstoffbedarf und ökologische Auswirkungen.")],

    ["Nachhaltigkeit hat drei Dimensionen",
     ["Das Dreieck aus <strong>Ökologie</strong>, <strong>Ökonomie</strong> und <strong>Sozialem</strong> verlangt, dass eine Massnahme in allen drei Bereichen tragfähig ist.",
      "Eine CO₂-Abgabe etwa ist ökologisch wirksam und ökonomisch effizient, trifft aber Haushalte mit tiefem Einkommen relativ stärker. Deshalb enthält sie in der Schweiz eine Rückverteilung.",
      "Für Erörterungen ist dieses Dreieck das nützlichste Werkzeug des Kapitels: Prüfe jede Massnahme auf alle drei Dimensionen, dann entsteht automatisch eine abgewogene Argumentation."],
     mc("gen-c4", "Welche drei Dimensionen umfasst Nachhaltigkeit?",
       ["Energie, Verkehr, Wohnen", "Ökologie, Ökonomie, Soziales", "Bund, Kanton, Gemeinde", "Luft, Wasser, Boden"], 1,
       "Eine Massnahme gilt erst als nachhaltig, wenn sie in allen drei Dimensionen tragfähig ist.")],
  ]);

  body("geo-spatial-transport", [
    ["Boden ist in der Schweiz das knappste Gut",
     ["Die Schweiz ist klein, und ein grosser Teil der Fläche ist Gebirge, Wald oder Gewässer. Nur etwa ein Viertel eignet sich gut für Siedlung und Landwirtschaft.",
      "Auf dieser Fläche leben rund neun Millionen Menschen, mit weiter steigender Tendenz. Jeder zusätzliche Quadratmeter Siedlungsfläche geht in der Regel von der Landwirtschaft ab.",
      "Deshalb ist Raumplanung in der Schweiz kein technisches Randthema, sondern eine Verteilungsfrage mit hohem politischen Konfliktpotenzial."],
     mc("gsp-c1", "Warum ist Raumplanung in der Schweiz besonders konfliktreich?",
       ["weil es zu wenig Gesetze gibt", "weil nur ein kleiner Teil der Fläche gut nutzbar ist und jede Nutzung andere ausschliesst",
        "weil die Bevölkerung schrumpft", "weil der Bund allein entscheidet"], 1,
       "Knappe nutzbare Fläche bedeutet, dass Siedlung, Landwirtschaft, Verkehr und Natur direkt konkurrieren.")],

    ["Zersiedelung und die Antwort der Verdichtung",
     ["<strong>Zersiedelung</strong> bezeichnet die ungesteuerte Ausdehnung von Siedlungen in die Fläche, typischerweise mit Einfamilienhausgebieten und tiefer Dichte.",
      "Die Folgekosten sind hoch: längere Leitungen, mehr Strassen, teurerer öffentlicher Verkehr pro Person, mehr Bodenverbrauch, mehr Pendelverkehr.",
      "Die Revision des Raumplanungsgesetzes von 2013 setzte deshalb auf <strong>Innenentwicklung</strong>: Bauzonen wurden begrenzt, Verdichtung nach innen wurde zur Leitidee. Der Zielkonflikt mit Ortsbildschutz und Nachbarschaftsinteressen bleibt bestehen."],
     mc("gsp-c2", "Worauf zielt die Innenentwicklung?",
       ["auf neue Bauzonen am Siedlungsrand", "auf Verdichtung im bestehenden Siedlungsgebiet statt Ausdehnung in die Fläche",
        "auf Rückbau von Städten", "auf mehr Einfamilienhäuser"], 1,
       "Bauen nach innen soll den Flächenverbrauch begrenzen und die Infrastrukturkosten senken.")],

    ["Siedlung und Verkehr bedingen einander",
     ["Neue Verkehrsverbindungen machen entfernte Orte erreichbar. Dort steigt die Nachfrage nach Wohnraum, die Siedlung dehnt sich aus, und daraus entsteht neuer Verkehr.",
      "Dieser selbstverstärkende Kreislauf erklärt, warum Strassenausbau Staus oft nicht dauerhaft löst: Zusätzliche Kapazität wird durch zusätzliche Nachfrage aufgefüllt. Man nennt das induzierten Verkehr.",
      "Deshalb müssen Siedlungs- und Verkehrsplanung gemeinsam erfolgen. Die Schweiz setzt stark auf den öffentlichen Verkehr, mit Bahn 2000, NEAT und dichtem Taktfahrplan."],
     mc("gsp-c3", "Was meint induzierter Verkehr?",
       ["Verkehr durch Unfälle", "zusätzlicher Verkehr, der erst durch neue Kapazität entsteht",
        "Verkehr im Ausland", "Güterverkehr"], 1,
       "Neue Kapazität senkt die Reisekosten, dadurch entstehen neue Fahrten, die die Entlastung aufzehren.")],

    ["Der Modalsplit als Steuerungsgrösse",
     ["Der <strong>Modalsplit</strong> gibt an, wie sich der Verkehr auf die Verkehrsmittel verteilt. In der Schweiz dominiert beim Personenverkehr das Auto, der öffentliche Verkehr hat aber im internationalen Vergleich einen hohen Anteil.",
      "Im Güterverkehr durch die Alpen zielt die Verlagerungspolitik auf die Schiene. Grundlage sind der Alpenschutzartikel von 1994 und die NEAT mit Gotthard- und Lötschbergbasistunnel.",
      "Für Prüfungsaufgaben ist das ein gutes Beispiel für Zielkonflikte: Verlagerung ist ökologisch erwünscht, kostet aber Milliarden und stösst auf europäische Interessen im Transitverkehr."],
     mc("gsp-c4", "Was beschreibt der Modalsplit?",
       ["die Aufteilung der Verkehrsmittel am Gesamtverkehr", "die Zahl der Fahrzeuge",
        "die Länge des Strassennetzes", "die Pendlerdistanz"], 0,
       "Er zeigt, welcher Anteil des Verkehrs auf Auto, Bahn, Velo oder Fussweg entfällt.")],
  ]);

  body("geo-global-development", [
    ["Entwicklung ist mehr als Einkommen",
     ["Das <strong>BIP pro Kopf</strong> ist die einfachste Kennzahl, hat aber Schwächen: Es sagt nichts über Verteilung, Gesundheit, Bildung oder Umweltzustand.",
      "Ein Land mit hoher Ölförderung und extremer Ungleichheit kann ein hohes BIP pro Kopf ausweisen, während die Mehrheit der Bevölkerung davon wenig hat.",
      "Deshalb wurde der <strong>HDI</strong> entwickelt. Er kombiniert Lebenserwartung, Bildungsdauer und Einkommen. Kein Index ist perfekt, aber der HDI zwingt dazu, mehrere Dimensionen zu betrachten."],
     mc("ggd-c1", "Welche Schwäche hat das BIP pro Kopf als Entwicklungsmass?",
       ["es ist schwer zu messen", "es sagt nichts über Verteilung, Gesundheit und Bildung",
        "es ist zu neu", "es berücksichtigt keine Exporte"], 1,
       "Ein Durchschnittswert verdeckt Ungleichheit und erfasst nicht-monetäre Lebensbedingungen nicht.")],

    ["Globalisierung: Ursachen und Mechanik",
     ["Drei Entwicklungen ermöglichten die heutige Verflechtung: sinkende Transportkosten durch Containerisierung, Informationstechnologie und der Abbau von Handelsbarrieren.",
      "Dadurch liessen sich Produktionsschritte über Länder verteilen. Ein Smartphone wird entworfen, finanziert, gefertigt und montiert in verschiedenen Staaten. Das ist eine <strong>Wertschöpfungskette</strong>.",
      "Die Wertschöpfung verteilt sich dabei sehr ungleich. Design und Marke erzielen hohe Margen, die Montage nur niedrige. Genau hier setzt die Kritik an der Verteilung der Gewinne an."],
     mc("ggd-c2", "Warum verdienen Montagestandorte an einem Smartphone am wenigsten?",
       ["weil sie weniger arbeiten", "weil Montage austauschbar ist, während Design und Marke hohe Margen sichern",
        "wegen der Transportkosten", "wegen der Zölle"], 1,
       "Die Wertschöpfung konzentriert sich auf schwer ersetzbare Schritte. Montage ist leicht verlagerbar und deshalb margenschwach.")],

    ["Gewinner und Verlierer",
     ["Global betrachtet sank die extreme Armut seit 1990 stark, vor allem durch Wachstum in Ostasien. Das ist ein realer Erfolg, der in Debatten oft übergangen wird.",
      "Gleichzeitig stieg die Ungleichheit innerhalb vieler Länder. In Industrieländern gerieten gering qualifizierte Industriearbeitsplätze unter Druck.",
      "Eine tragfähige Antwort in der Prüfung nennt beides und unterscheidet die Ebenen: zwischen Ländern hat sich vieles angeglichen, innerhalb vieler Länder ist die Spreizung gewachsen."],
     tf("ggd-c3", "Globalisierung hat ausschliesslich zu mehr Ungleichheit geführt.", false,
       "Zwischen Ländern verringerte sich die Ungleichheit, innerhalb vieler Länder nahm sie zu. Beide Ebenen müssen unterschieden werden.")],

    ["Warum manche Länder zurückbleiben",
     ["Mehrere Faktoren wirken zusammen: koloniale Grenzziehungen, Abhängigkeit von wenigen Rohstoffen, schwache Institutionen, Verschuldung, fehlende Infrastruktur, Binnenlage ohne Meerzugang.",
      "Der <strong>Rohstofffluch</strong> beschreibt das Paradox, dass rohstoffreiche Länder oft langsamer wachsen. Rohstoffrenten begünstigen Korruption und verdrängen andere Wirtschaftszweige.",
      "Für Erörterungen gilt: Nenne mehrere Faktoren und vermeide monokausale Erklärungen. Weder Kolonialismus allein noch schlechte Regierungsführung allein erklären die Unterschiede."],
     mc("ggd-c4", "Was beschreibt der Rohstofffluch?",
       ["Rohstoffe gehen zur Neige", "rohstoffreiche Länder wachsen oft langsamer, weil Renten Korruption begünstigen und andere Sektoren verdrängen",
        "Rohstoffe sind zu billig", "Rohstoffe schaden der Umwelt"], 1,
       "Leicht abschöpfbare Einnahmen schwächen Institutionen und verdrängen diversifizierte Wirtschaftsstrukturen.")],
  ]);

  body("geo-demography", [
    ["Wie Bevölkerungswachstum zustande kommt",
     ["Die Veränderung einer Bevölkerung ergibt sich aus zwei Grössen: der <strong>natürlichen</strong> Bilanz aus Geburten und Sterbefällen und der <strong>Wanderungs</strong>bilanz aus Zu- und Abwanderung.",
      "Beide können unabhängig voneinander positiv oder negativ sein. Die Schweiz hat seit Jahren eine nahezu ausgeglichene natürliche Bilanz und wächst fast ausschliesslich durch Zuwanderung.",
      "Für eine korrekte Antwort musst du diese beiden Anteile immer getrennt ausweisen. Wer nur von Wachstum spricht, sagt nicht, woher es kommt."],
     mc("gde-c1", "Woraus setzt sich die Bevölkerungsveränderung zusammen?",
       ["nur aus Geburten", "aus natürlicher Bilanz und Wanderungsbilanz",
        "nur aus Zuwanderung", "aus der Lebenserwartung"], 1,
       "Geburten minus Sterbefälle plus Zuwanderung minus Abwanderung ergibt die Gesamtveränderung.")],

    ["Das Modell des demografischen Übergangs",
     ["In <strong>Phase 1</strong> sind Geburten- und Sterberate hoch, das Wachstum bleibt gering. Das war weltweit der Normalzustand bis ins 18. Jahrhundert.",
      "In <strong>Phase 2</strong> sinkt die Sterberate durch bessere Ernährung, Hygiene und Medizin, während die Geburtenrate noch hoch bleibt. Genau in dieser Schere entsteht das stärkste Wachstum.",
      "In <strong>Phase 3</strong> sinkt auch die Geburtenrate, in <strong>Phase 4</strong> sind beide tief. In <strong>Phase 5</strong> liegt die Geburtenrate unter der Sterberate, die Bevölkerung schrumpft und altert."],
     mc("gde-c2", "In welcher Phase ist das Wachstum am stärksten?",
       ["Phase 1", "Phase 2, weil die Sterberate schon gesunken, die Geburtenrate aber noch hoch ist",
        "Phase 4", "Phase 5"], 1,
       "Die zeitliche Verzögerung zwischen sinkender Sterbe- und sinkender Geburtenrate erzeugt die grösste Differenz.")],

    ["Warum die Geburtenrate später sinkt",
     ["Die Sterberate fällt schnell, weil Hygiene, Impfungen und Ernährung von aussen wirken. Die Geburtenrate hängt dagegen an Verhalten, Werten und wirtschaftlichen Überlegungen, und die ändern sich langsamer.",
      "Wichtigste Einflussfaktoren sind Bildung von Frauen, Zugang zu Verhütung, Erwerbstätigkeit, soziale Absicherung im Alter und die sinkende Kindersterblichkeit.",
      "Der letzte Punkt ist zentral: Wo viele Kinder früh starben, wurden viele geboren. Sinkt die Kindersterblichkeit dauerhaft, passt sich das Verhalten mit Verzögerung an."],
     mc("gde-c3", "Welcher Faktor senkt die Geburtenrate besonders stark?",
       ["höhere Lebenserwartung", "Bildung und Erwerbstätigkeit von Frauen sowie Zugang zu Verhütung",
        "grössere Wohnungen", "höhere Steuern"], 1,
       "Bildung, Erwerbsbeteiligung und Verhütungszugang gehören zu den wirksamsten Einflussgrössen.")],

    ["Bevölkerungspyramiden lesen",
     ["Eine breite Basis und schmale Spitze ergeben eine <strong>Pyramidenform</strong>: viele junge Menschen, hohe Geburtenrate, typisch für Phase 2.",
      "Eine gleichmässige Form ergibt eine <strong>Glocke</strong> oder <strong>Urne</strong>: wenige Junge, viele Ältere, typisch für Phase 4 und 5. Die Schweiz hat eine solche Urnenform.",
      "Einschnitte erzählen Geschichte: Kriegsjahrgänge, Babyboom, Geburtenrückgang. Und die Form sagt die Zukunft voraus: Eine schmale Basis heute bedeutet in dreissig Jahren wenige Erwerbstätige und viele Rentner. Genau das ist die Grundlage der AHV-Debatte."],
     mc("gde-c4", "Was bedeutet eine schmale Basis in der Bevölkerungspyramide?",
       ["viele Kinder", "wenige Junge und damit künftig weniger Erwerbstätige gegenüber mehr Rentnern",
        "hohe Sterblichkeit", "starke Zuwanderung"], 1,
       "Die heutige Basis ist die künftige Erwerbsbevölkerung. Eine schmale Basis kündigt Alterungsdruck an.")],
  ]);

  body("geo-urban", [
    ["Drei Phasen der Stadtentwicklung",
     ["<strong>Urbanisierung</strong>: Menschen ziehen vom Land in die Stadt, angezogen von Arbeit und Infrastruktur. In Europa lief das mit der Industrialisierung ab.",
      "<strong>Suburbanisierung</strong>: Wer es sich leisten kann, zieht ins Umland, wegen tieferer Bodenpreise, mehr Platz und Ruhe, bleibt aber beruflich an die Stadt gebunden. Die Folge ist Pendelverkehr.",
      "<strong>Reurbanisierung</strong>: Seit einigen Jahrzehnten zieht es Menschen zurück in die Innenstädte, weil Wege kurz sind, Kultur nah ist und Lebensmodelle sich geändert haben. Die drei Phasen lösen einander nicht ab, sie überlagern sich."],
     mc("gu-c1", "Was kennzeichnet die Suburbanisierung?",
       ["Zuzug ins Stadtzentrum", "Abwanderung ins Umland bei fortbestehender Bindung an die Kernstadt",
        "Abwanderung aufs Land ohne Stadtbezug", "Rückgang der Bevölkerung"], 1,
       "Gewohnt wird im Umland, gearbeitet und konsumiert weiterhin in der Stadt. Daraus entsteht Pendelverkehr.")],

    ["Gentrifizierung als Prozess in Schritten",
     ["Zuerst ziehen Menschen mit wenig Geld, aber viel Zeit in ein günstiges Quartier, häufig Studierende und Kunstschaffende. Das Quartier gewinnt an Ruf.",
      "Dann folgen Gastronomie und Läden, die Aufmerksamkeit steigt, Investitionen fliessen, Liegenschaften werden saniert. Die Mieten beginnen zu steigen.",
      "Zuletzt verdrängen steigende Mieten genau jene, die das Quartier attraktiv gemacht haben, sowie die ursprüngliche Bevölkerung. Aufwertung und Verdrängung sind zwei Seiten desselben Vorgangs, und genau darin liegt der politische Konflikt."],
     mc("gu-c2", "Was ist die Kehrseite der Quartieraufwertung?",
       ["sinkende Mieten", "Verdrängung der ursprünglichen Bevölkerung durch steigende Mieten",
        "Bevölkerungsrückgang", "Zunahme der Kriminalität"], 1,
       "Aufwertung erhöht die Preise. Wer sie nicht tragen kann, muss wegziehen.")],

    ["Die Agglomeration als funktionale Einheit",
     ["Gemeindegrenzen bilden die Lebensrealität nicht ab. Wer in einer Vorortsgemeinde wohnt, arbeitet, konsumiert und geht oft in der Kernstadt aus.",
      "Deshalb arbeitet die Statistik mit der <strong>Agglomeration</strong>, definiert über Pendlerverflechtung und Siedlungsdichte, nicht über politische Grenzen.",
      "Daraus entsteht ein Dauerkonflikt: Die Kernstadt trägt Kosten für Infrastruktur, Kultur und soziale Aufgaben, die von der ganzen Region genutzt werden, während die Steuern in den Wohngemeinden anfallen. Der Finanzausgleich versucht das auszugleichen."],
     mc("gu-c3", "Warum entsteht ein Konflikt zwischen Kernstadt und Umland?",
       ["wegen Sprachunterschieden", "weil die Kernstadt regional genutzte Infrastruktur finanziert, die Steuern aber im Umland anfallen",
        "wegen der Bauzonen", "wegen des Verkehrs allein"], 1,
       "Nutzen und Kosten fallen auseinander. Der Finanzausgleich ist die politische Antwort darauf.")],

    ["Städte im globalen Süden folgen anderen Mustern",
     ["Das Wachstum verläuft dort viel schneller und wird häufig durch Push-Faktoren angetrieben: Landflucht wegen Armut, Konflikten oder Dürre, nicht nur durch Anziehungskraft der Stadt.",
      "Weil die Infrastruktur nicht mithalten kann, entstehen informelle Siedlungen ohne gesicherten Rechtstitel, oft ohne Wasser- und Abwasserversorgung.",
      "Für Vergleichsaufgaben gilt: Dieselben Begriffe wie Urbanisierung passen, die Ursachen und Folgen unterscheiden sich aber stark. Ein Vergleich muss diesen Unterschied ausdrücklich benennen."],
     tf("gu-c4", "Städtewachstum im globalen Süden beruht überwiegend auf denselben Ursachen wie die europäische Urbanisierung.", false,
       "Dort wirken stärker Push-Faktoren wie Armut, Konflikte und Dürre, und das Tempo übersteigt den Infrastrukturausbau.")],
  ]);

  /* ======================= MATHEMATIK ======================= */

  body("math-curve-optimisation", [
    ["Was die erste Ableitung über den Verlauf verrät",
     ["f'(x) ist die Steigung. Ist sie positiv, steigt der Graph, ist sie negativ, fällt er. Ist sie null, verläuft die Tangente waagrecht.",
      "Eine waagrechte Tangente bedeutet aber nicht automatisch ein Extremum. Bei f(x) = x³ ist f'(0) = 0, und trotzdem steigt die Funktion dort weiter. Es ist ein Sattelpunkt.",
      "Deshalb ist f'(x) = 0 nur die <strong>notwendige</strong> Bedingung. Sie liefert Kandidaten, keine Ergebnisse. Die Entscheidung fällt erst im nächsten Schritt."],
     mc("mco-c1", "Was folgt aus f'(x₀) = 0?",
       ["es liegt sicher ein Maximum vor", "es liegt eine waagrechte Tangente vor, das kann Extremum oder Sattelpunkt sein",
        "die Funktion ist konstant", "die Funktion hat dort eine Nullstelle"], 1,
       "f'(x₀) = 0 ist notwendig, aber nicht hinreichend. x³ bei null zeigt den Gegenfall.")],

    ["Die zweite Ableitung entscheidet",
     ["f''(x) beschreibt, wie sich die Steigung ändert, also die Krümmung. Ist f'' positiv, ist der Graph linksgekrümmt und liegt wie eine Schale nach oben offen.",
      "An einer Stelle mit f'(x₀) = 0 bedeutet f''(x₀) &gt; 0 deshalb ein <strong>Minimum</strong>, f''(x₀) &lt; 0 ein <strong>Maximum</strong>.",
      "Ist auch f''(x₀) = 0, versagt der Test und du musst das Vorzeichen von f' links und rechts der Stelle prüfen. Wechselt es, liegt ein Extremum vor, wechselt es nicht, ein Sattelpunkt."],
     mc("mco-c2", "f'(x₀) = 0 und f''(x₀) < 0. Was liegt vor?",
       ["Minimum", "Maximum", "Sattelpunkt", "Wendepunkt"], 1,
       "Negative zweite Ableitung bedeutet Rechtskrümmung. Zusammen mit waagrechter Tangente ergibt das ein Maximum.")],

    ["Wendepunkte: wo die Krümmung wechselt",
     ["Ein <strong>Wendepunkt</strong> ist die Stelle, an der der Graph von links- auf rechtsgekrümmt wechselt oder umgekehrt. Dort ist die Steigung am steilsten oder am flachsten.",
      "Notwendige Bedingung ist f''(x) = 0. Hinreichend ist zusätzlich ein Vorzeichenwechsel von f'' oder f'''(x) ≠ 0.",
      "Im Sachzusammenhang ist der Wendepunkt oft die interessanteste Stelle. Bei einer Infektionskurve markiert er den Tag mit den meisten Neuansteckungen, also den Moment, ab dem das Wachstum nachlässt."],
     tf("mco-c3", "Aus f''(x₀) = 0 folgt immer ein Wendepunkt.", false,
       "Es braucht zusätzlich einen Krümmungswechsel. Bei f(x) = x⁴ ist f''(0) = 0, ohne dass die Krümmung wechselt.")],

    ["Extremalprobleme in fünf Schritten",
     ["Erstens: die zu optimierende Grösse als <strong>Zielfunktion</strong> aufstellen, etwa Fläche oder Kosten. Zweitens: die <strong>Nebenbedingung</strong> notieren, etwa einen fixen Umfang.",
      "Drittens: Mit der Nebenbedingung eine Variable eliminieren, sodass die Zielfunktion nur noch von einer Variablen abhängt. Viertens: ableiten, null setzen, Art bestimmen.",
      "Fünftens, und das wird am häufigsten vergessen: den <strong>Definitionsbereich</strong> prüfen und die Randwerte betrachten. Eine Seitenlänge kann nicht negativ sein, und das Optimum kann am Rand liegen."],
     mc("mco-c4", "Welcher Schritt wird bei Extremalproblemen am häufigsten vergessen?",
       ["das Ableiten", "die Prüfung des Definitionsbereichs und der Randwerte",
        "das Aufstellen der Zielfunktion", "das Nullsetzen"], 1,
       "Der sinnvolle Bereich schränkt die Lösungen ein, und das Optimum kann am Rand statt bei f'(x) = 0 liegen.")],
  ]);

  body("math-integrals", [
    ["Die Grundidee: Fläche durch immer feinere Rechtecke",
     ["Die Fläche unter einer Kurve lässt sich nicht mit Schulformeln berechnen, weil die obere Begrenzung krumm ist.",
      "Der Ausweg: Man legt Rechtecke darunter, deren Fläche berechenbar ist, und summiert sie. Das Ergebnis ist zunächst ungenau.",
      "Macht man die Rechtecke immer schmaler, verschwindet der Fehler im Grenzwert. Dieser Grenzwert der Rechtecksummen ist das <strong>bestimmte Integral</strong>. Es ist also derselbe Gedanke wie bei der Ableitung: eine Näherung, verfeinert bis zum Grenzwert."],
     mc("mi-c1", "Was ist das bestimmte Integral seinem Ursprung nach?",
       ["eine Stammfunktion", "der Grenzwert von Rechtecksummen bei immer schmaleren Rechtecken",
        "eine Ableitung", "eine Tangentensteigung"], 1,
       "Die Rechtecknäherung wird im Grenzwert exakt. Genau das definiert das Integral.")],

    ["Der Hauptsatz verbindet Ableiten und Integrieren",
     ["Es wäre mühsam, jedes Integral als Grenzwert zu berechnen. Der Hauptsatz der Differential- und Integralrechnung liefert die Abkürzung.",
      "Er besagt: Ist F eine Funktion mit F' = f, dann gilt <span class=\"kbd\">∫ₐᵇ f(x) dx = F(b) − F(a)</span>. Eine solche Funktion F heisst <strong>Stammfunktion</strong>.",
      "Damit wird Integrieren zum Rückwärtsableiten. Aus der Potenzregel folgt unmittelbar: Wer f(x) = xⁿ integrieren will, erhöht den Exponenten um eins und teilt durch den neuen Exponenten."],
     mc("mi-c2", "Wie lautet eine Stammfunktion von f(x) = x²?",
       ["2x", "x³", "x³/3 + C", "3x²"], 2,
       "Exponent um eins erhöhen und durch den neuen Exponenten teilen. Die Probe durch Ableiten ergibt wieder x².")],

    ["Warum die Konstante C dazugehört",
     ["Beim Ableiten verschwindet jede additive Konstante, weil eine waagrechte Verschiebung die Steigung nicht ändert.",
      "Rückwärts betrachtet heisst das: Zu jeder Funktion gibt es unendlich viele Stammfunktionen, die sich nur um eine Konstante unterscheiden. Deshalb schreibt man beim unbestimmten Integral <span class=\"kbd\">+ C</span>.",
      "Beim <em>bestimmten</em> Integral spielt C keine Rolle, weil es sich bei F(b) − F(a) heraushebt. Das ist ein beliebter Verständnischeck in Prüfungen."],
     tf("mi-c3", "Beim bestimmten Integral muss die Konstante C berücksichtigt werden.", false,
       "Sie fällt bei der Differenz F(b) − F(a) weg. Nur beim unbestimmten Integral wird sie mitgeschrieben.")],

    ["Integral und geometrische Fläche sind nicht dasselbe",
     ["Liegt ein Kurvenstück unterhalb der x-Achse, sind die Funktionswerte negativ, und der entsprechende Flächenanteil geht negativ in das Integral ein.",
      "Bei ∫ von 0 bis 2π über sin(x) ist das Ergebnis deshalb null, obwohl offensichtlich Fläche vorhanden ist. Das Integral misst die <em>orientierte</em> Fläche.",
      "Fragt eine Aufgabe nach der geometrischen Fläche, musst du an den Nullstellen aufteilen, die Teilintegrale einzeln berechnen und ihre Beträge addieren. Diese Unterscheidung ist die häufigste Fehlerquelle im Kapitel."],
     mc("mi-c4", "Wie berechnest du die geometrische Fläche, wenn die Kurve die x-Achse schneidet?",
       ["direkt mit einem Integral", "an den Nullstellen aufteilen, Teilintegrale berechnen und deren Beträge addieren",
        "das Integral verdoppeln", "das Vorzeichen umkehren"], 1,
       "Ein einziges Integral würde positive und negative Anteile verrechnen. Deshalb abschnittsweise rechnen und Beträge nehmen.")],
  ]);

  body("math-trigonometry", [
    ["Die drei Verhältnisse und woher sie kommen",
     ["Vergrössert man ein rechtwinkliges Dreieck, ändern sich alle Seiten, aber ihre <em>Verhältnisse</em> bleiben gleich, solange die Winkel gleich bleiben. Das ist der Strahlensatz.",
      "Genau darauf beruht die Trigonometrie. Zu jedem Winkel gehören feste Seitenverhältnisse, unabhängig von der Grösse des Dreiecks.",
      "<span class=\"kbd\">sin α = Gegenkathete / Hypotenuse</span>, <span class=\"kbd\">cos α = Ankathete / Hypotenuse</span>, <span class=\"kbd\">tan α = Gegenkathete / Ankathete</span>. Wichtig: Gegen- und Ankathete hängen davon ab, welchen Winkel du betrachtest."],
     mc("mt-c1", "Warum sind Sinus und Cosinus unabhängig von der Dreiecksgrösse?",
       ["weil die Winkel klein sind", "weil ähnliche Dreiecke gleiche Seitenverhältnisse haben",
        "weil die Hypotenuse immer 1 ist", "das stimmt nicht"], 1,
       "Bei gleichen Winkeln sind die Dreiecke ähnlich, und ähnliche Dreiecke haben identische Seitenverhältnisse.")],

    ["Der Einheitskreis erweitert die Definition",
     ["Im rechtwinkligen Dreieck sind nur Winkel zwischen 0 und 90 Grad möglich. Für Wellen und Umläufe braucht es mehr.",
      "Im <strong>Einheitskreis</strong> mit Radius eins wandert ein Punkt auf dem Kreis. Seine x-Koordinate ist cos α, seine y-Koordinate ist sin α. Damit sind beliebige Winkel definiert, auch über 360 Grad und negativ.",
      "Aus dieser Definition folgen sofort zwei Dinge: Sinus und Cosinus liegen immer zwischen −1 und 1, und aus dem Satz des Pythagoras im Einheitskreis folgt <span class=\"kbd\">sin²α + cos²α = 1</span>."],
     mc("mt-c2", "Was ist cos α im Einheitskreis?",
       ["die y-Koordinate", "die x-Koordinate des Punktes auf dem Kreis", "der Radius", "der Bogen"], 1,
       "Cosinus ist die x-Koordinate, Sinus die y-Koordinate. Daraus folgt auch sin² + cos² = 1.")],

    ["Sinussatz und Cosinussatz für beliebige Dreiecke",
     ["Ohne rechten Winkel gelten die einfachen Verhältnisse nicht mehr. Dann brauchst du zwei allgemeinere Sätze.",
      "Der <strong>Sinussatz</strong> <span class=\"kbd\">a/sin α = b/sin β</span> hilft, wenn eine Seite mit ihrem Gegenwinkel bekannt ist.",
      "Der <strong>Cosinussatz</strong> <span class=\"kbd\">c² = a² + b² − 2ab·cos γ</span> hilft, wenn zwei Seiten und der eingeschlossene Winkel oder alle drei Seiten bekannt sind. Bei γ = 90 Grad wird cos γ = 0, und der Satz geht in den Pythagoras über. Er ist also dessen Verallgemeinerung."],
     mc("mt-c3", "Welchen Satz nutzt du bei zwei Seiten und dem eingeschlossenen Winkel?",
       ["Sinussatz", "Cosinussatz", "Strahlensatz", "Pythagoras"], 1,
       "Der Cosinussatz verbindet genau diese drei Angaben und liefert die dritte Seite.")],

    ["Trigonometrische Gleichungen haben mehrere Lösungen",
     ["Die Gleichung sin x = 0,5 hat im Bereich von 0 bis 360 Grad zwei Lösungen: 30 Grad und 150 Grad. Der Taschenrechner liefert nur die erste.",
      "Der Grund liegt im Einheitskreis: Zwei verschiedene Punkte haben dieselbe y-Koordinate. Wer nur den Rechnerwert notiert, verliert die Hälfte der Lösungen.",
      "Weil sich der Kreis wiederholt, kommen ausserdem Vielfache von 360 Grad dazu. Frage deshalb immer: Welches Intervall ist verlangt, und wie viele Lösungen liegen darin?"],
     mc("mt-c4", "Warum liefert der Taschenrechner bei sin x = 0,5 nur eine Lösung?",
       ["weil er nur positive Winkel kennt", "weil die Umkehrfunktion nur einen Hauptwert liefert, der Kreis aber mehrere Punkte mit gleicher y-Koordinate hat",
        "weil 0,5 zu klein ist", "das ist ein Rechnerfehler"], 1,
       "Die Umkehrfunktion ist auf einen Hauptwertbereich eingeschränkt. Weitere Lösungen musst du über den Einheitskreis ergänzen.")],
  ]);

  body("math-vectors", [
    ["Ein Vektor hat Richtung und Länge, aber keinen Ort",
     ["Eine Zahl wie 5 beschreibt nur eine Grösse. Für eine Verschiebung, eine Kraft oder eine Geschwindigkeit brauchst du zusätzlich die Richtung.",
      "Genau das leistet ein <strong>Vektor</strong>. Seine Komponenten geben an, wie weit es in jede Koordinatenrichtung geht: (3; 4) heisst drei nach rechts und vier nach oben.",
      "Ein Vektor ist ortsunabhängig. Derselbe Pfeil, irgendwo im Raum verschoben, bleibt derselbe Vektor. Das ist der Unterschied zum Punkt, der einen festen Ort bezeichnet."],
     tf("mv-c1", "Zwei gleich lange, gleich gerichtete Pfeile an verschiedenen Orten sind derselbe Vektor.", true,
       "Ein Vektor ist durch Richtung und Länge bestimmt, nicht durch seinen Ort.")],

    ["Rechnen mit Vektoren ist komponentenweise",
     ["Addition bedeutet Aneinanderhängen: Man legt den zweiten Pfeil an die Spitze des ersten, der Summenvektor führt vom Anfang zum Ende. Rechnerisch addiert man die Komponenten einzeln.",
      "Multiplikation mit einer Zahl streckt oder staucht den Vektor. Ein negativer Faktor kehrt zusätzlich die Richtung um.",
      "Die <strong>Länge</strong> erhältst du über den Satz des Pythagoras: <span class=\"kbd\">|v| = √(x² + y² + z²)</span>. Damit lässt sich jeder Vektor auch normieren, also auf Länge eins bringen, indem man durch seine Länge teilt."],
     mc("mv-c2", "Wie gross ist der Betrag von v = (3; 4)?",
       ["7", "12", "5", "25"], 2,
       "√(9 + 16) = √25 = 5. Die Länge folgt aus dem Satz des Pythagoras.")],

    ["Das Skalarprodukt misst Richtungsübereinstimmung",
     ["Das <strong>Skalarprodukt</strong> multipliziert zwei Vektoren und ergibt eine Zahl: komponentenweise multiplizieren und summieren.",
      "Geometrisch gilt <span class=\"kbd\">u·v = |u|·|v|·cos α</span>. Daraus folgt die wichtigste Anwendung: Ist das Skalarprodukt null und sind beide Vektoren nicht null, dann ist cos α null, also stehen sie senkrecht aufeinander.",
      "Das ist ein sehr schneller Rechttest. Auch das Vorzeichen sagt etwas: positiv bedeutet spitzer Winkel, negativ bedeutet stumpfer Winkel."],
     mc("mv-c3", "u·v = 0 und beide Vektoren sind ungleich null. Was folgt?",
       ["sie sind parallel", "sie stehen senkrecht aufeinander", "sie sind gleich lang", "einer ist der Nullvektor"], 1,
       "Aus u·v = |u||v|cos α = 0 folgt cos α = 0 und damit ein Winkel von 90 Grad.")],

    ["Das Vektorprodukt liefert eine senkrechte Richtung",
     ["Anders als das Skalarprodukt ergibt das <strong>Vektorprodukt</strong> u × v wieder einen Vektor. Er steht senkrecht auf beiden Ausgangsvektoren.",
      "Seine Länge entspricht der Fläche des von u und v aufgespannten Parallelogramms. Damit löst es zwei Aufgabentypen gleichzeitig: Normalenvektor bestimmen und Fläche berechnen.",
      "Merke die Unterscheidung: Skalarprodukt ergibt eine Zahl und beantwortet Winkelfragen. Vektorprodukt ergibt einen Vektor und beantwortet Fragen nach senkrechten Richtungen und Flächen."],
     mc("mv-c4", "Was ergibt das Vektorprodukt u × v?",
       ["eine Zahl", "einen Vektor senkrecht zu u und v, dessen Länge der aufgespannten Fläche entspricht",
        "einen Winkel", "eine Gerade"], 1,
       "Das Ergebnis ist ein Vektor. Richtung senkrecht zu beiden, Länge gleich der Parallelogrammfläche.")],
  ]);

  body("math-analytic-geometry", [
    ["Eine Gerade braucht einen Punkt und eine Richtung",
     ["Die Parameterform <span class=\"kbd\">r = a + t·u</span> liest sich wörtlich: Starte beim Punkt a und gehe t-mal in Richtung u.",
      "Der <strong>Stützvektor</strong> a ist irgendein bekannter Punkt der Geraden, der <strong>Richtungsvektor</strong> u gibt die Richtung an. Der Parameter t durchläuft alle reellen Zahlen.",
      "Daraus folgt: Dieselbe Gerade hat unendlich viele Darstellungen, weil jeder ihrer Punkte als Stützvektor taugt und jedes Vielfache von u als Richtungsvektor. Zwei verschieden aussehende Gleichungen können dieselbe Gerade beschreiben."],
     mc("mag-c1", "Können zwei unterschiedlich geschriebene Parametergleichungen dieselbe Gerade darstellen?",
       ["nein, nie", "ja, weil Stützpunkt und Vielfache des Richtungsvektors frei wählbar sind",
        "nur bei parallelen Geraden", "nur im Raum"], 1,
       "Jeder Punkt der Geraden kann Stützvektor sein, und jedes Vielfache des Richtungsvektors zeigt in dieselbe Richtung.")],

    ["Die Ebene über den Normalenvektor",
     ["Eine Ebene lässt sich mit zwei Richtungsvektoren aufspannen. Handlicher ist meist die <strong>Normalenform</strong>: <span class=\"kbd\">n·(r − a) = 0</span>.",
      "Sie bedeutet: Ein Punkt r liegt genau dann in der Ebene, wenn der Verbindungsvektor von a nach r senkrecht auf dem Normalenvektor n steht.",
      "Ausmultipliziert entsteht die Koordinatenform ax + by + cz = d. Praktisch: Die Koeffizienten a, b, c sind unmittelbar die Komponenten des Normalenvektors. Das lässt sich ohne Rechnung ablesen."],
     mc("mag-c2", "Woran erkennst du bei 2x − 3y + z = 5 den Normalenvektor?",
       ["an der Zahl 5", "an den Koeffizienten, also n = (2; −3; 1)", "am Vorzeichen", "gar nicht"], 1,
       "In der Koordinatenform sind die Koeffizienten von x, y und z genau die Komponenten des Normalenvektors.")],

    ["Lagebeziehungen systematisch prüfen",
     ["Bei zwei Geraden prüfst du zuerst die Richtungsvektoren. Sind sie Vielfache voneinander, sind die Geraden parallel oder identisch. Teste dann, ob ein Punkt der einen auf der anderen liegt.",
      "Sind die Richtungen nicht parallel, setzt du die Gleichungen gleich. Hat das System eine Lösung, schneiden sich die Geraden. Hat es keine, sind sie <strong>windschief</strong>, was nur im Raum vorkommt.",
      "Dieselbe Logik gilt für Gerade und Ebene: Steht der Richtungsvektor senkrecht auf dem Normalenvektor, verläuft die Gerade parallel zur Ebene oder liegt in ihr."],
     mc("mag-c3", "Zwei Geraden im Raum sind nicht parallel und schneiden sich nicht. Wie heisst diese Lage?",
       ["identisch", "parallel", "windschief", "orthogonal"], 2,
       "Windschief ist die Lage, die es nur im Raum gibt: keine gemeinsame Ebene, kein Schnittpunkt.")],

    ["Abstände über die Projektion",
     ["Der Abstand eines Punktes P von einer Ebene ergibt sich, indem man den Verbindungsvektor zu einem Ebenenpunkt auf den <em>normierten</em> Normalenvektor projiziert.",
      "Formal: Abstand gleich Betrag des Skalarprodukts geteilt durch die Länge von n. Das Normieren ist der Schritt, der am häufigsten vergessen wird.",
      "Der Kreis folgt derselben Logik. <span class=\"kbd\">(x − x₀)² + (y − y₀)² = r²</span> ist nichts anderes als der Satz des Pythagoras: Alle Punkte mit Abstand r vom Mittelpunkt. Vorsicht beim Vorzeichen, (x + 3)² gehört zum Mittelpunkt x₀ = −3."],
     mc("mag-c4", "Welchen Mittelpunkt hat (x − 2)² + (y + 3)² = 16?",
       ["(2; 3)", "(−2; 3)", "(2; −3)", "(−2; −3)"], 2,
       "In (x − x₀) wird das Vorzeichen umgekehrt gelesen. Also M(2; −3) und r = 4.")],
  ]);

  body("math-probability", [
    ["Wahrscheinlichkeit als Anteil",
     ["Bei einem Zufallsversuch mit lauter gleich wahrscheinlichen Ergebnissen ist die Wahrscheinlichkeit eines Ereignisses der Anteil der günstigen an allen möglichen Fällen.",
      "Beim Würfel ist P(gerade Zahl) also 3 von 6, somit 0,5. Jede Wahrscheinlichkeit liegt zwischen 0 und 1, und die Summe über alle möglichen Ergebnisse ergibt genau 1.",
      "Daraus folgt eine sehr nützliche Regel: <span class=\"kbd\">P(nicht A) = 1 − P(A)</span>. Bei Aufgaben mit «mindestens einmal» ist der Umweg über das Gegenereignis fast immer der kürzere Weg."],
     mc("mp-c1", "Wie berechnest du «mindestens einmal Sechs bei drei Würfen» am einfachsten?",
       ["alle Fälle einzeln aufzählen", "über das Gegenereignis: 1 minus Wahrscheinlichkeit für keine Sechs",
        "mit dem Mittelwert", "3 mal 1/6"], 1,
       "Das Gegenereignis «keine einzige Sechs» ist ein einziger Pfad und leicht zu berechnen: 1 − (5/6)³.")],

    ["Die Pfadregeln im Baumdiagramm",
     ["Ein Baumdiagramm stellt mehrstufige Versuche dar. Jede Stufe verzweigt, jeder Ast trägt seine Wahrscheinlichkeit.",
      "Entlang eines Pfades wird <strong>multipliziert</strong>, weil alle Teilereignisse nacheinander eintreten müssen. Über verschiedene Pfade, die zum gesuchten Ereignis führen, wird <strong>addiert</strong>.",
      "Eine gute Kontrolle: Die Wahrscheinlichkeiten aller Äste einer Verzweigung müssen zusammen 1 ergeben, ebenso die Summe aller vollständigen Pfade."],
     mc("mp-c2", "Wie rechnest du entlang eines Pfades im Baumdiagramm?",
       ["addieren", "multiplizieren", "subtrahieren", "mitteln"], 1,
       "Entlang eines Pfades multiplizieren, über alternative Pfade addieren.")],

    ["Mit und ohne Zurücklegen",
     ["Zieht man <strong>mit</strong> Zurücklegen, bleiben die Wahrscheinlichkeiten auf jeder Stufe gleich, weil sich der Inhalt der Urne nicht ändert.",
      "Zieht man <strong>ohne</strong> Zurücklegen, verändern sich Zähler und Nenner bei jedem Zug. Bei drei roten von zehn Kugeln ist P(rot) zuerst 3/10, danach nur noch 2/9.",
      "Diese Unterscheidung ist die häufigste Fehlerquelle im Kapitel. Frage bei jeder Aufgabe zuerst: Verändert sich die Ausgangslage nach dem ersten Zug oder nicht?"],
     mc("mp-c3", "In einer Urne sind 3 rote und 7 blaue Kugeln. Wie gross ist P(zweite Kugel rot), wenn die erste rot war und nicht zurückgelegt wurde?",
       ["3/10", "2/9", "3/9", "2/10"], 1,
       "Nach dem Ziehen einer roten Kugel bleiben 2 rote von 9 Kugeln übrig.")],

    ["Bedingte Wahrscheinlichkeit und Unabhängigkeit",
     ["<span class=\"kbd\">P(A|B)</span> fragt: Wie wahrscheinlich ist A, wenn B bereits eingetreten ist? Rechnerisch <span class=\"kbd\">P(A∩B)/P(B)</span>.",
      "Anschaulich verkleinert die Bedingung den betrachteten Ergebnisraum. Man rechnet nicht mehr mit allen Fällen, sondern nur noch mit jenen, in denen B eingetreten ist.",
      "<strong>Unabhängig</strong> heisst, dass B nichts über A verrät, formal <span class=\"kbd\">P(A∩B) = P(A)·P(B)</span>. Achtung: Unabhängig ist nicht dasselbe wie sich gegenseitig ausschliessend. Zwei sich ausschliessende Ereignisse sind sogar maximal abhängig, denn tritt das eine ein, ist das andere unmöglich."],
     tf("mp-c4", "Zwei sich gegenseitig ausschliessende Ereignisse sind unabhängig.", false,
       "Im Gegenteil: Tritt das eine ein, ist das andere ausgeschlossen. Das ist maximale Abhängigkeit, nicht Unabhängigkeit.")],
  ]);
})();

/* Deutsch (9) und Englisch (7): ausgeschriebene Lehrtexte.
   Sprachfächer werden hier als Handwerk unterrichtet: Was verlangt die
   Aufgabe, wie baut man die Antwort, woran scheitert sie typischerweise.
   Aus urheberrechtlichen Gründen werden keine Werktexte abgedruckt. */
(function () {
  "use strict";
  var M = window.MNEMIKA;
  const { mc, tf } = M;
  function body(id, list) {
    var c = M.chapter(id);
    if (!c) return;
    c.depth = "full";
    c.blocks = list.map(function (b, i) {
      var blk = { id: "b" + (i + 1), label: b[0], body: b[1], check: b[2] };
      if (blk.check) { blk.check.blockId = blk.id; blk.check.blockNo = i + 1; blk.check.blockLabel = blk.label; blk.check.role = "check"; }
      return blk;
    });
  }

  /* ======================= DEUTSCH ======================= */

  body("de-written-method", [
    ["Der Operator sagt, was du tun sollst",
     ["Jede Aufgabe enthält ein Verb, das die verlangte Leistung festlegt. <strong>Nenne</strong> verlangt eine Aufzählung ohne Erklärung. <strong>Erkläre</strong> verlangt Zusammenhänge. <strong>Erörtere</strong> verlangt Pro und Kontra mit Abwägung. <strong>Beurteile</strong> verlangt zusätzlich ein begründetes Urteil.",
      "Wer den Operator übersieht, schreibt am Auftrag vorbei. Eine sprachlich hervorragende Nacherzählung bringt null Punkte, wenn eine Erörterung verlangt war.",
      "Deshalb lautet der erste Arbeitsschritt immer: Operator unterstreichen und in einem Satz aufschreiben, was er konkret verlangt. Das kostet dreissig Sekunden und rettet die halbe Prüfung."],
     mc("dw-c1", "Was verlangt der Operator «erörtern»?",
       ["eine Aufzählung", "die Abwägung von Pro und Kontra mit begründetem Schluss",
        "eine Nacherzählung", "eine reine Meinungsäusserung"], 1,
       "Erörtern heisst, mehrere Positionen zu prüfen, zu gewichten und zu einem begründeten Ergebnis zu kommen.")],

    ["Die These steht vor dem ersten Satz",
     ["Ein Text wird gut, bevor er geschrieben wird. Nach der Analyse des Auftrags formulierst du in einem einzigen Satz deine Antwort auf die Frage. Das ist die <strong>These</strong>.",
      "Sie erfüllt zwei Aufgaben: Sie zwingt dich, dir über deine Position klar zu werden, und sie wird zum Prüfstein für jeden Absatz. Was nicht auf die These einzahlt, wird gestrichen.",
      "Eine gute These ist strittig. «Soziale Medien haben Vor- und Nachteile» ist keine These, sondern eine Selbstverständlichkeit. «Soziale Medien schaden der politischen Debatte mehr, als sie ihr nützen» ist eine These, weil man widersprechen kann."],
     mc("dw-c2", "Was kennzeichnet eine brauchbare These?",
       ["sie ist möglichst allgemein", "man kann ihr widersprechen", "sie enthält viele Beispiele", "sie ist besonders lang"], 1,
       "Eine These muss strittig sein. Was niemand bestreiten würde, trägt keinen Text.")],

    ["Die Gliederung vor dem Fliesstext",
     ["Plane fünf bis zehn Minuten fest ein. Notiere in Stichworten die Argumente, ordne sie nach Gewicht und entscheide, wo das stärkste steht.",
      "Bewährt hat sich das <strong>Sanduhrprinzip</strong>: mittelstarkes Argument zuerst, schwächere in der Mitte, stärkstes zum Schluss. Der letzte Eindruck bleibt am stärksten haften.",
      "Bei der Erörterung stellst du die Gegenseite ernsthaft dar, bevor du sie entkräftest. Eine Gegenposition, die als Strohmann aufgebaut wird, schwächt deine eigene Argumentation, weil erkennbar wird, dass du dem stärksten Einwand ausgewichen bist."],
     tf("dw-c3", "In einer Erörterung genügt es, die Gegenposition kurz als schwach darzustellen.", false,
       "Ein Strohmann-Argument schwächt die eigene Position. Nur wer den stärksten Einwand ernst nimmt und entkräftet, überzeugt.")],

    ["Die Zeiteinteilung entscheidet mit über die Note",
     ["Für eine dreistündige Prüfung bewährt sich eine grobe Drittelung: etwa zwanzig Minuten für Analyse und Planung, gut zwei Stunden für das Schreiben, mindestens zwanzig Minuten für die Überarbeitung.",
      "Der häufigste Fehler ist, ohne Plan sofort zu schreiben und am Schluss keine Zeit für die Korrektur zu haben. Ein durchdachter, sauber überarbeiteter Text mit vier Argumenten schlägt einen ungeordneten mit acht.",
      "Notiere dir zu Beginn die Uhrzeiten, zu denen du in der nächsten Phase sein willst. Ohne feste Marken verschiebt sich die Zeit fast immer zulasten der Überarbeitung."],
     mc("dw-c4", "Welcher Zeitfehler ist in schriftlichen Prüfungen am häufigsten?",
       ["zu langes Planen", "sofort losschreiben und am Schluss keine Zeit für die Überarbeitung haben",
        "zu kurze Sätze", "zu viele Absätze"], 1,
       "Ohne reservierte Korrekturzeit bleiben vermeidbare Fehler stehen, die Punkte kosten.")],
  ]);

  body("de-argumentation", [
    ["Ein Argument hat drei Teile",
     ["Eine <strong>Behauptung</strong> allein ist kein Argument. Sie braucht eine <strong>Begründung</strong>, die sagt warum, und einen <strong>Beleg</strong>, der die Begründung stützt.",
      "Beispiel ohne Beleg: «Hausaufgaben sind sinnlos, weil sie nichts bringen.» Das ist eine Behauptung, die sich selbst wiederholt.",
      "Mit Beleg: «Hausaufgaben verstärken soziale Unterschiede, weil Kinder ohne Unterstützung zu Hause benachteiligt sind. Studien zeigen, dass ihre Wirkung in der Primarstufe gering und stark vom Elternhaus abhängig ist.» Jetzt ist es ein Argument."],
     mc("da-c1", "Woran erkennst du, dass ein Argument unvollständig ist?",
       ["es ist zu kurz", "die Begründung wiederholt nur die Behauptung, ohne sie zu stützen",
        "es enthält Fremdwörter", "es steht am Schluss"], 1,
       "Eine Begründung, die dieselbe Aussage anders formuliert, erklärt nichts. Es fehlt der stützende Beleg.")],

    ["Belegarten und ihr Gewicht",
     ["Nicht jeder Beleg ist gleich stark. <strong>Statistiken</strong> und <strong>Studien</strong> wiegen schwer, brauchen aber eine Quelle. <strong>Fachautoritäten</strong> stützen, wenn sie im richtigen Gebiet sprechen.",
      "<strong>Beispiele</strong> veranschaulichen, beweisen aber nichts. Ein Einzelfall widerlegt keine Regel, und eine Regel folgt nicht aus einem Einzelfall. <strong>Analogien</strong> erklären gut, tragen aber nur, solange die Vergleichspunkte wirklich passen.",
      "In der Prüfung ohne Hilfsmittel wirst du kaum exakte Zahlen zur Hand haben. Dann ist es besser, eine Grössenordnung vorsichtig zu formulieren, als eine Zahl zu erfinden. Erfundene Belege fallen auf und kosten Glaubwürdigkeit."],
     mc("da-c2", "Was leistet ein Beispiel in einer Argumentation?",
       ["es beweist die These", "es veranschaulicht, beweist aber nicht", "es ersetzt die Begründung", "es ist überflüssig"], 1,
       "Beispiele machen ein Argument anschaulich und konkret, ein Einzelfall belegt aber keine allgemeine Aussage.")],

    ["Typische Fehlschlüsse erkennen und vermeiden",
     ["Der <strong>Strohmann</strong> verzerrt die Gegenposition, um sie leicht zu widerlegen. Der <strong>Angriff auf die Person</strong> ersetzt das Argument durch eine Abwertung des Gegenübers.",
      "Die <strong>falsche Alternative</strong> stellt zwei Möglichkeiten dar, wo es mehr gibt. Die <strong>Dammbruch-Behauptung</strong> unterstellt eine Kettenreaktion ohne Beleg für die einzelnen Schritte.",
      "Diese Muster sind doppelt nützlich: Du vermeidest sie in eigenen Texten, und du kannst sie in einer vorgelegten Quelle benennen. Genau das verlangen Aufgaben zur Analyse fremder Argumentationen."],
     mc("da-c3", "Was ist eine falsche Alternative?",
       ["ein Rechtschreibfehler", "die Darstellung von nur zwei Möglichkeiten, obwohl es mehr gibt",
        "ein zu langes Argument", "eine fehlende Quelle"], 1,
       "«Entweder wir verbieten es ganz oder wir lassen alles zu» blendet Zwischenlösungen aus.")],

    ["Abwägen heisst gewichten, nicht aufzählen",
     ["Am Schluss einer Erörterung genügt es nicht, Pro und Kontra nebeneinanderzustellen und dann eine Meinung zu behaupten. Verlangt ist eine begründete Gewichtung.",
      "Nützliche Kriterien sind: Welche Folgen wiegen schwerer, welche sind reversibel, wer ist betroffen, wie sicher ist die Wirkung, welches Argument beruht auf besseren Belegen.",
      "Formulierungen, die das leisten: «Der Einwand X trifft zu, wiegt aber weniger schwer, weil …» oder «Beide Argumente sind stichhaltig, das erste betrifft jedoch eine irreversible Folge». So entsteht ein Urteil statt einer Aufzählung."],
     tf("da-c4", "Am Schluss einer Erörterung reicht es, die eigene Meinung zu nennen.", false,
       "Verlangt ist ein begründetes Urteil, das erklärt, warum bestimmte Argumente schwerer wiegen als andere.")],
  ]);

  body("de-text-types", [
    ["Die Textsorte bestimmt Form und Ton",
     ["Derselbe Inhalt verlangt je nach Textsorte eine andere Gestalt. Wer die verlangte Form verfehlt, verliert Punkte, auch wenn der Inhalt stimmt.",
      "Entscheidend sind drei Fragen: Wie nah trete ich an die Leserschaft heran? Wie stark darf ich Position beziehen? Wie streng muss der Aufbau sein?",
      "Aus diesen drei Fragen lässt sich jede Textsorte herleiten, ohne Merkmalslisten auswendig zu lernen."],
     mc("dt-c1", "Welche drei Fragen klären die Textsorte?",
       ["Länge, Titel, Absätze", "Nähe zur Leserschaft, erlaubte Positionierung, Strenge des Aufbaus",
        "Schriftart, Format, Datum", "Thema, Zeit, Ort"], 1,
       "Adressatennähe, Subjektivitätsgrad und Aufbaustrenge unterscheiden die Textsorten voneinander.")],

    ["Erörterung und Essay",
     ["Die <strong>Erörterung</strong> ist die strengste Form: sachlicher Ton, klarer Aufbau aus Einleitung, Argumentationsteil und Schluss, Distanz zur eigenen Meinung bis zum begründeten Schluss.",
      "Der <strong>Essay</strong> darf persönlich und gedanklich beweglich sein. Er entwickelt einen Gedanken, statt ihn zu beweisen, darf Fragen offenlassen und mit Bildern arbeiten.",
      "Der häufigste Fehler ist die Verwechslung: ein Essay, der wie eine Schulerörterung durchgegliedert ist, oder eine Erörterung, die in unbelegte Betrachtungen abgleitet. Prüfe deshalb bei jedem Absatz, ob der Ton zur verlangten Sorte passt."],
     mc("dt-c2", "Was unterscheidet den Essay von der Erörterung?",
       ["die Länge", "der Essay darf persönlich und gedanklich beweglich sein, die Erörterung ist sachlich und streng gegliedert",
        "der Essay braucht keine Beispiele", "die Erörterung hat keinen Schluss"], 1,
       "Der Essay entwickelt einen Gedanken, die Erörterung prüft Argumente systematisch.")],

    ["Kommentar, Rede, Brief",
     ["Der <strong>Kommentar</strong> bezieht von Anfang an Position und darf zuspitzen. Er ist kurz, pointiert und endet mit einer klaren Folgerung.",
      "Die <strong>Rede</strong> ist für das Ohr gebaut: direkte Anrede, kurze Sätze, Wiederholungen als Strukturmittel, konkrete Bilder. Was beim Vorlesen stolpert, ist zu kompliziert geschrieben.",
      "Der <strong>Brief</strong> braucht Anrede, Bezug auf einen Anlass und eine Grussformel. Entscheidend ist die Frage, ob das Verhältnis formell oder persönlich ist. Das bestimmt Anrede, Wortwahl und Satzbau."],
     mc("dt-c3", "Welches Merkmal ist für eine Rede entscheidend?",
       ["viele Fremdwörter", "sie muss beim Hören verständlich sein, also kurze Sätze und direkte Anrede",
        "möglichst lange Sätze", "eine Quellenliste"], 1,
       "Eine Rede wird gehört, nicht gelesen. Was beim Vorlesen stolpert, ist zu verschachtelt.")],

    ["Einleitung und Schluss bauen",
     ["Eine Einleitung leistet drei Dinge: Sie weckt Interesse, führt zum Thema hin und nennt die Frage oder die These. Geeignete Einstiege sind ein konkreter Fall, eine überraschende Zahl oder ein aktueller Bezug.",
      "Vermeide leere Formeln wie «Seit Jahrtausenden beschäftigt die Menschheit die Frage». Solche Sätze sagen nichts und kosten Wirkung.",
      "Der Schluss wiederholt nicht, sondern bündelt. Er beantwortet die Ausgangsfrage, benennt die entscheidende Abwägung und kann einen Ausblick geben: Unter welchen Bedingungen würde ich meine Einschätzung ändern?"],
     tf("dt-c4", "Ein guter Schluss fasst nochmals alle Argumente zusammen.", false,
       "Ein Schluss bündelt und beantwortet die Ausgangsfrage. Eine blosse Wiederholung verschenkt die wirksamste Stelle des Textes.")],
  ]);

  body("de-language-editing", [
    ["Überarbeiten in getrennten Durchgängen",
     ["Wer gleichzeitig auf Inhalt, Aufbau, Grammatik und Kommasetzung achtet, übersieht alles. Deshalb lohnen sich getrennte Durchgänge mit je einem Fokus.",
      "Erster Durchgang Inhalt: Beantwortet der Text die Frage? Fehlt ein wichtiges Argument? Zweiter Durchgang Aufbau: Hat jeder Absatz genau ein Thema? Stimmen die Übergänge?",
      "Dritter Durchgang Sprache: Satzbau, Wortwiederholungen, Zeitformen. Vierter Durchgang Rechtschreibung. In dieser Reihenfolge, weil es sinnlos ist, Kommas in einem Absatz zu setzen, den man anschliessend streicht."],
     mc("dl-c1", "Warum überarbeitet man in getrennten Durchgängen?",
       ["das dauert weniger lang", "weil gleichzeitige Aufmerksamkeit auf alle Ebenen dazu führt, dass man alles übersieht",
        "weil es Vorschrift ist", "damit der Text länger wird"], 1,
       "Ein Fokus pro Durchgang erhöht die Trefferquote deutlich. Inhalt vor Form, weil Gestrichenes nicht korrigiert werden muss.")],

    ["Kohärenz und Kohäsion",
     ["<strong>Kohärenz</strong> ist der inhaltliche Zusammenhang: Die Gedanken folgen logisch aufeinander. <strong>Kohäsion</strong> ist die sprachliche Verknüpfung, die diesen Zusammenhang sichtbar macht.",
      "Werkzeuge der Kohäsion sind Konnektoren wie deshalb, obwohl, hingegen, folglich, sowie Rückverweise durch Pronomen und die Wiederaufnahme von Begriffen.",
      "Ein Text kann kohärent gedacht und trotzdem schlecht lesbar sein, weil die Verknüpfungen fehlen. Prüfe deshalb bei jedem Absatzanfang: Ist erkennbar, in welchem Verhältnis dieser Absatz zum vorherigen steht?"],
     mc("dl-c2", "Was leisten Konnektoren wie «hingegen» oder «folglich»?",
       ["sie verlängern den Text", "sie machen das logische Verhältnis zwischen Aussagen sichtbar",
        "sie ersetzen Argumente", "sie sind Füllwörter"], 1,
       "Konnektoren zeigen an, ob ein Gegensatz, eine Folge oder eine Einschränkung folgt. Sie tragen die Kohäsion.")],

    ["Stilfehler, die Punkte kosten",
     ["Der <strong>Nominalstil</strong> stopft Handlungen in Substantive: «Die Durchführung einer Überprüfung der Massnahmen erfolgte» statt «Die Massnahmen wurden überprüft». Verben machen Texte lesbarer.",
      "<strong>Füllwörter</strong> wie eigentlich, irgendwie, ja, wohl schwächen Aussagen, ohne etwas hinzuzufügen. Streiche sie und prüfe, ob der Satz verliert. Meist gewinnt er.",
      "<strong>Wortwiederholungen</strong> fallen auf, besonders bei Verben wie sein, haben, machen. Und <strong>Schachtelsätze</strong> mit drei Nebensätzen verlieren die Leserschaft. Faustregel: Ein Gedanke, ein Satz."],
     mc("dl-c3", "Was kennzeichnet den Nominalstil?",
       ["viele Verben", "Handlungen werden in Substantive verpackt, was den Text schwerfällig macht",
        "kurze Sätze", "viele Adjektive"], 1,
       "Substantivierungen wie Durchführung, Überprüfung, Erfolgung machen Texte umständlich. Verben sind klarer.")],

    ["Die häufigsten Fehlerquellen gezielt prüfen",
     ["<strong>Das oder dass</strong>: Lässt sich dieses, jenes oder welches einsetzen, schreibst du das mit einem s. Sonst dass.",
      "<strong>Kommas</strong> vor Nebensätzen, zwischen Hauptsätzen und bei Einschüben. Bei erweiterten Infinitiven mit um, ohne, statt steht ein Komma.",
      "<strong>Zeitformen</strong> konsistent halten, in der Literaturanalyse durchgehend Präsens. <strong>Gross- und Kleinschreibung</strong> bei Substantivierungen wie das Wichtigste, im Allgemeinen. Diese vier Punkte decken den grössten Teil der typischen Fehler ab."],
     mc("dl-c4", "Welche Zeitform verwendest du in der Literaturanalyse?",
       ["Präteritum", "Präsens", "Perfekt", "Futur"], 1,
       "Handlungen in literarischen Werken werden im Präsens beschrieben, durchgehend und konsistent.")],
  ]);

  body("de-oral-method", [
    ["Was in der mündlichen Prüfung tatsächlich verlangt wird",
     ["Du erhältst einen Textausschnitt aus einem der vorbereiteten Werke. Verlangt sind drei Leistungen: den Ausschnitt <strong>einordnen</strong>, ihn <strong>analysieren</strong> und die Deutung mit <strong>Textstellen belegen</strong>.",
      "Nacherzählen ist keine dieser drei Leistungen. Wer die Handlung wiedergibt, zeigt nur, dass er das Buch gelesen hat, nicht dass er es verstanden hat.",
      "Einordnen heisst: An welcher Stelle des Werks steht die Passage, was ist vorher geschehen, welche Bedeutung hat sie für den weiteren Verlauf?"],
     mc("do-c1", "Was ist in der mündlichen Prüfung keine verlangte Leistung?",
       ["Einordnen", "Analysieren", "Nacherzählen der Handlung", "Belegen mit Textstellen"], 2,
       "Nacherzählung zeigt nur Kenntnis. Gefragt sind Einordnung, Analyse und Beleg.")],

    ["Ein Antwortmuster, das immer trägt",
     ["Baue jede Antwort in vier Schritten: <strong>Befund</strong>, <strong>Beleg</strong>, <strong>Deutung</strong>, <strong>Einordnung</strong>.",
      "Befund: Was fällt auf? Beleg: Wo genau im Text steht das? Deutung: Was bewirkt es? Einordnung: Was bedeutet das für Figur, Thema oder Werk insgesamt?",
      "Beispiel in der Struktur: «Auffällig ist der Wechsel der Erzählperspektive in dieser Passage. Der Erzähler tritt hier zurück und überlässt der Figur das Wort. Dadurch wirkt ihre Rechtfertigung unmittelbarer und der Leser verliert die wertende Distanz. Für das Werk ist das zentral, weil die Schuldfrage dadurch offen bleibt.»"],
     mc("do-c2", "Wie lautet das empfohlene Antwortmuster?",
       ["Meinung, Beispiel, Schluss", "Befund, Beleg, Deutung, Einordnung",
        "Inhalt, Autor, Epoche", "Frage, Antwort, Wiederholung"], 1,
       "Diese vier Schritte funktionieren bei jeder Textstelle und jeder Frage.")],

    ["Grundbegriffe, die du sicher brauchen wirst",
     ["<strong>Erzählperspektive</strong>: auktorial mit überblickendem Erzähler, personal aus Sicht einer Figur, Ich-Erzählung. Jede Wahl steuert, wie viel die Leserschaft weiss und wem sie glaubt.",
      "<strong>Figurenkonstellation</strong>: Wer steht zu wem in welchem Verhältnis, wo verlaufen die Konfliktlinien? <strong>Motiv</strong>: ein wiederkehrendes inhaltliches Element, etwa Wasser, Geld, Schweigen.",
      "<strong>Symbol</strong>: ein konkretes Ding mit übertragener Bedeutung. Der Unterschied zum Motiv liegt darin, dass ein Symbol für etwas anderes steht, während ein Motiv einfach wiederkehrt."],
     mc("do-c3", "Worin unterscheidet sich ein Symbol von einem Motiv?",
       ["Symbole sind länger", "ein Symbol steht für etwas anderes, ein Motiv kehrt einfach wieder",
        "es gibt keinen Unterschied", "Motive kommen nur in Gedichten vor"], 1,
       "Ein Motiv ist ein wiederkehrendes Element, ein Symbol trägt zusätzlich eine übertragene Bedeutung.")],

    ["Vorbereitung: eine Seite pro Werk",
     ["Lerne nicht ganze Bücher auswendig, sondern lege pro Werk eine Übersichtsseite an: Handlungsbogen in fünf Sätzen, Hauptfiguren mit Motiven, drei bis vier Themen, Erzählform, Entstehungszeit.",
      "Dazu wählst du fünf Schlüsselstellen mit Seitenzahl. Fünf gut durchdachte Stellen lassen sich auf sehr viele Fragen anwenden, weil sie meist mehrere Themen gleichzeitig berühren.",
      "Trainiere laut. Der häufigste Grund für eine schwache mündliche Note ist nicht fehlendes Wissen, sondern dass die Formulierung zum ersten Mal in der Prüfung geschieht."],
     tf("do-c4", "Für die mündliche Prüfung ist es sinnvoll, ganze Passagen auswendig zu lernen.", false,
       "Besser sind wenige gut durchdachte Schlüsselstellen und lautes Üben der Formulierung. Auswendiglernen macht unflexibel.")],
  ]);

  body("de-buehler", [
    ["Einordnung des Werks",
     ["Mariann Bühlers «Verschiebung im Gestein» ist der Gegenwartstext der Pflichtliste für die Wintersession 2027. Der Roman erschien 2024 und stand auf der Shortlist des Schweizer Buchpreises.",
      "Er spielt in einem Schweizer Dorf und erzählt in verknüpften Episoden aus dem Leben mehrerer Figuren über einen Zeitraum von mehreren Jahrzehnten.",
      "Weil der Text neu ist, gibt es dazu kaum Schulinterpretationen. Das ist kein Nachteil: Es bedeutet, dass eigene, sauber belegte Beobachtungen besonders zählen."],
     mc("db-c1", "Wie ist der Roman erzählerisch aufgebaut?",
       ["als durchgehende Chronik einer Figur", "in verknüpften Episoden aus dem Leben mehrerer Figuren",
        "als Briefroman", "als Drama in fünf Akten"], 1,
       "Die Episodenstruktur mit wechselnden Figuren ist das auffälligste Formmerkmal und ein naheliegender Prüfungsgegenstand.")],

    ["Der Titel als Deutungsschlüssel",
     ["Eine <strong>Verschiebung im Gestein</strong> ist ein geologischer Vorgang: langsam, unsichtbar, aber mit erheblichen Folgen an der Oberfläche.",
      "Genau so verhalten sich die Veränderungen im Roman. Nichts geschieht plötzlich, aber über die Jahre verschieben sich Verhältnisse, Rollen und Gewissheiten.",
      "Ein Titel, der ein Bild anbietet, ist fast immer ein Angebot zur Deutung. In der Prüfung lohnt es sich, diesen Zusammenhang ausdrücklich herzustellen, statt nur die Handlung zu referieren."],
     mc("db-c2", "Was legt der Titel für die Deutung nahe?",
       ["dass der Roman von Bergbau handelt", "dass Veränderungen langsam und zunächst unsichtbar geschehen, aber Folgen haben",
        "dass es um ein Erdbeben geht", "dass die Figuren verreisen"], 1,
       "Das geologische Bild überträgt sich auf das langsame Verschieben sozialer Verhältnisse.")],

    ["Themen, die sich belegen lassen",
     ["<strong>Ländliche Enge und soziale Kontrolle</strong>: Im Dorf weiss man voneinander, und dieses Wissen wirkt zugleich als Halt und als Zwang.",
      "<strong>Sprachlosigkeit</strong>: Vieles wird nicht ausgesprochen. Das Nichtgesagte ist im Roman oft bedeutsamer als der Dialog. Achte in einer Passage darauf, was eine Figur gerade nicht sagt.",
      "<strong>Wandel und Beharren</strong>: Lebensformen verändern sich über die Jahrzehnte, während Strukturen und Erwartungen länger bestehen bleiben. <strong>Zugehörigkeit</strong>: Wer gehört dazu, wer bleibt aussen?"],
     mc("db-c3", "Worauf solltest du bei einer Textstelle dieses Romans besonders achten?",
       ["auf die Zahl der Figuren", "auf das, was nicht ausgesprochen wird",
        "auf die Kapitellänge", "auf historische Daten"], 1,
       "Sprachlosigkeit und Verschweigen sind zentrale Verfahren des Textes.")],

    ["Wie du die Episodenform analysierst",
     ["Frage bei jeder Passage: Aus wessen Sicht wird hier erzählt, und was weiss diese Figur nicht, was die Leserschaft aus anderen Episoden bereits weiss?",
      "Dieses Wissensgefälle erzeugt einen grossen Teil der Wirkung. Die Leserschaft sieht Zusammenhänge, die den Figuren verborgen bleiben.",
      "Frage zweitens: Welche Motive tauchen in mehreren Episoden auf und verbinden sie? Und drittens: Welche Zeitspanne liegt zwischen den Episoden, und was ist in dieser Lücke geschehen? Die Auslassungen sind gestaltete Leerstellen, keine Zufälle."],
     tf("db-c4", "Die Wissensunterschiede zwischen Figuren und Leserschaft sind ein wichtiges Wirkungsmittel des Romans.", true,
       "Weil die Leserschaft mehrere Episoden kennt, sieht sie Zusammenhänge, die den einzelnen Figuren verborgen bleiben.")],
  ]);

  body("de-duerrenmatt", [
    ["Handlung und Grundsituation",
     ["Güllen ist verarmt. Die Milliardärin Claire Zachanassian, einst als junges Mädchen aus dem Ort vertrieben, kehrt zurück und bietet der Stadt eine Milliarde.",
      "Die Bedingung: jemand muss Alfred Ill töten, den Mann, der sie damals geschwängert, verleugnet und mit falschen Zeugen ruiniert hat.",
      "Die Bürger lehnen empört ab. Dann kaufen sie auf Kredit. Die Schulden steigen, die Erwartung wächst, und am Ende vollstreckt die Gemeinschaft das Urteil und nennt es Gerechtigkeit."],
     mc("dd-c1", "Welche Bedingung stellt Claire Zachanassian?",
       ["den Wiederaufbau der Fabrik", "die Tötung Alfred Ills",
        "die Wahl zur Bürgermeisterin", "die Rückgabe ihres Hauses"], 1,
       "Ihr Angebot einer Milliarde ist an die Tötung Ills gebunden, den sie für ihr zerstörtes Leben verantwortlich macht.")],

    ["Warum Dürrenmatt es tragische Komödie nennt",
     ["Das Stück ist komisch gebaut: groteske Figuren, absurde Details, Eunuchen und ein Panther, Übertreibung bis zur Karikatur.",
      "Der Inhalt ist tragisch: Ein Mensch wird von seiner Gemeinschaft getötet, und diese redet sich die Tat als Gerechtigkeit zurecht.",
      "Dürrenmatt argumentierte, die moderne Welt lasse sich nicht mehr als klassische Tragödie darstellen, weil niemand mehr allein verantwortlich sei. Schuld verteilt sich auf alle, und niemand fühlt sich zuständig. Diese Diffusion lässt sich nur als Groteske zeigen."],
     mc("dd-c2", "Warum wählt Dürrenmatt die Form der tragischen Komödie?",
       ["weil das Publikum lachen soll", "weil sich in der modernen Welt Schuld auf viele verteilt und niemand mehr allein verantwortlich erscheint",
        "weil Tragödien verboten waren", "weil es kürzer ist"], 1,
       "Die Groteske zeigt gerade die Diffusion der Verantwortung, die eine klassische Tragödie nicht abbilden könnte.")],

    ["Die Figuren und ihre Doppeldeutigkeit",
     ["<strong>Ill</strong> ist Opfer und Täter zugleich. Sein früheres Verhalten war eine Gemeinheit, seine Hinrichtung ist ein Mord. Beides gilt gleichzeitig, und darin liegt die Schärfe des Stücks.",
      "<strong>Claire</strong> ist Rächerin und selbst ein Produkt dessen, was ihr angetan wurde. Ihre Prothesen zeigen, dass auch sie beschädigt ist. Mit ihrem Geld kauft sie die Gerechtigkeit, die ihr das Gericht damals verweigerte.",
      "Die <strong>Güllener</strong> sind die eigentliche Hauptfigur. Der Lehrer sieht das Unrecht und schweigt, der Pfarrer weicht aus, der Bürgermeister organisiert. Ihre Selbsttäuschung ist präziser beobachtet als jede Einzelfigur."],
     mc("dd-c3", "Warum ist Ill keine reine Opferfigur?",
       ["weil er reich ist", "weil er Claire früher selbst schweres Unrecht zugefügt hat",
        "weil er die Stadt verlässt", "weil er zustimmt"], 1,
       "Die Doppeldeutigkeit ist gewollt: Seine frühere Tat rechtfertigt den Mord nicht, macht ihn aber zum ambivalenten Opfer.")],

    ["Die Kernfrage: wie Moral käuflich wird",
     ["Die Stärke des Stücks liegt darin, dass niemand einfach bestochen wird. Alle behalten ihre moralischen Überzeugungen bei und passen nur ihre Wahrnehmung an.",
      "Aus «wir töten für Geld» wird «wir stellen Gerechtigkeit her». Die Tat wird nicht geleugnet, sondern umgedeutet. Der Kredit auf gelbe Schuhe kommt vor der Entscheidung, nicht danach.",
      "Für die Prüfung: Zeige diesen Mechanismus der schleichenden Umdeutung an einer konkreten Stelle. Das ist überzeugender als die allgemeine Aussage, Geld verderbe den Charakter."],
     tf("dd-c4", "Die Güllener geben ihre moralischen Überzeugungen auf, um das Geld zu erhalten.", false,
       "Sie behalten ihre Überzeugungen und deuten die Tat um. Aus Mord wird in ihrer Wahrnehmung Gerechtigkeit. Genau darin liegt die Schärfe.")],
  ]);

  body("de-storm", [
    ["Die doppelte Rahmenerzählung",
     ["Der Text ist mehrfach gerahmt. Ein Ich-Erzähler berichtet, in einer Zeitschrift eine Geschichte gelesen zu haben. Darin erzählt ein Reisender, wie ihm ein Schulmeister die Geschichte Hauke Haiens berichtet.",
      "Diese Konstruktion ist kein Schmuck. Sie stellt die Zuverlässigkeit der Erzählung selbst zur Debatte: Was wir erfahren, ist mehrfach weitergegeben und gefiltert.",
      "Deshalb bleibt offen, ob der Schimmelreiter tatsächlich als Gespenst erscheint oder ob es sich um Aberglauben handelt. Diese Offenheit ist kein Mangel des Textes, sondern seine Pointe."],
     mc("ds-c1", "Welche Funktion hat die Rahmenerzählung im Schimmelreiter?",
       ["sie verlängert den Text", "sie stellt die Zuverlässigkeit des Berichteten zur Debatte und hält die Deutung offen",
        "sie erklärt die Deichtechnik", "sie nennt die Quellen"], 1,
       "Die mehrfache Weitergabe macht unentscheidbar, ob der Spuk real oder Aberglaube ist.")],

    ["Hauke Haien zwischen Fortschritt und Gemeinschaft",
     ["Hauke steigt durch Können auf: Er rechnet, misst und entwirft einen Deich mit flacherem Profil, der den Wellen weniger Angriffsfläche bietet. Sachlich hat er recht.",
      "Sozial scheitert er. Er ist überheblich gegenüber den Bauern, missachtet ihre Traditionen und ihren Aberglauben und macht sich damit die Gemeinschaft zum Gegner.",
      "Die Novelle stellt damit eine Frage, die nichts an Aktualität verloren hat: Genügt es, sachlich im Recht zu sein? Der Text antwortet mit Nein. Ohne die Gemeinschaft scheitert auch die richtige Idee."],
     mc("ds-c2", "Woran scheitert Hauke Haien letztlich?",
       ["an seiner falschen Deichkonstruktion", "an seinem Verhältnis zur Gemeinschaft, nicht an seiner Technik",
        "an seiner mangelnden Bildung", "am Wetter allein"], 1,
       "Seine Technik ist überlegen. Sein Umgang mit Menschen, Traditionen und Aberglauben führt zur Isolation und zum Scheitern.")],

    ["Der Schimmel als ambivalentes Symbol",
     ["Hauke kauft ein abgemagertes Pferd von einem Händler. Zur selben Zeit verschwindet ein Gerippe auf einer nahen Hallig. Die Dorfbewohner ziehen daraus ihre eigenen Schlüsse.",
      "Der Text bestätigt den Aberglauben nicht und widerlegt ihn auch nicht. Er zeigt nur, wie eine Gemeinschaft Ereignisse deutet, die sie nicht erklären kann.",
      "Für die Analyse ist entscheidend: Beschreibe die Ambivalenz, statt dich auf eine Deutung festzulegen. Ein Text, der eine Frage offenlässt, verlangt keine Entscheidung, sondern die Beschreibung der Offenheit."],
     tf("ds-c3", "Die Novelle klärt eindeutig, ob der Schimmelreiter ein Gespenst ist.", false,
       "Der Text lässt die Frage bewusst offen. Die Rahmenkonstruktion verhindert eine eindeutige Entscheidung.")],

    ["Natur, Deich und die Schlusskatastrophe",
     ["Das Meer ist im Text kein Hintergrund, sondern eine handelnde Kraft. Der Deich ist der Ort, an dem menschliche Ordnung und Naturgewalt aufeinandertreffen.",
      "Die Katastrophe entsteht nicht durch Haukes Fehler, sondern durch die unterlassene Instandhaltung am alten Deichstück, das er nicht durchsetzen konnte.",
      "Hauke stürzt sich mit dem Pferd in den Bruch. Diese Selbstaufopferung lässt sich als Schuldübernahme lesen, als Verzweiflungstat oder als Rückkehr zur Gemeinschaft im Tod. Alle drei Deutungen sind am Text belegbar, und genau das solltest du in der Prüfung zeigen."],
     mc("ds-c4", "Was löst die Katastrophe am Ende aus?",
       ["ein Konstruktionsfehler in Haukes neuem Deich", "die vernachlässigte Instandhaltung am alten Deichabschnitt",
        "ein Erdbeben", "Haukes Abwesenheit"], 1,
       "Der neue Deich hält. Es bricht die alte Stelle, deren Sanierung Hauke gegen die Gemeinschaft nicht durchsetzen konnte.")],
  ]);

  body("de-burkart", [
    ["Warum Lyrik anders analysiert wird",
     ["Ein Gedicht ist kurz, also trägt jedes Wort mehr Gewicht. Was in einem Roman ein Detail wäre, ist hier eine Entscheidung.",
      "Deshalb führt der Weg immer von der <strong>Form</strong> zur <strong>Deutung</strong>, nie umgekehrt. Zuerst beobachten, was da steht, dann deuten, was es bewirkt.",
      "Die zehn vorgegebenen Gedichte von Erika Burkart sind für die mündliche Prüfung vollständig vorzubereiten. Die Texte selbst sind urheberrechtlich geschützt und deshalb hier nicht abgedruckt. Du brauchst die Originalausgabe."],
     mc("dbu-c1", "In welcher Reihenfolge analysierst du ein Gedicht?",
       ["zuerst die Deutung, dann die Form", "zuerst die Formbeobachtung, daraus die Deutung",
        "zuerst die Biografie der Autorin", "zuerst die Epoche"], 1,
       "Beobachtung vor Interpretation. Eine Deutung ohne Formbefund bleibt Behauptung.")],

    ["Was du an jedem Gedicht beobachten kannst",
     ["<strong>Äussere Form</strong>: Anzahl Strophen und Verse, Reim oder reimlos, Versmass oder freier Rhythmus, Länge der Zeilen.",
      "<strong>Zeilenbau</strong>: Fällt das Satzende mit dem Versende zusammen oder läuft der Satz über die Zeilengrenze weiter? Ein solches <strong>Enjambement</strong> erzeugt Spannung, Bewegung oder Stocken.",
      "<strong>Bildebene</strong>: Welche Bilder, Vergleiche und Metaphern kommen vor, aus welchem Bereich stammen sie? <strong>Klang</strong>: Häufen sich harte oder weiche Laute? <strong>Sprecher</strong>: Gibt es ein lyrisches Ich, und wie tritt es auf?"],
     mc("dbu-c2", "Was bewirkt ein Enjambement?",
       ["es erzeugt einen Reim", "der Satz läuft über die Verszeile hinaus, was Bewegung, Spannung oder Stocken erzeugt",
        "es verkürzt das Gedicht", "es markiert eine Strophe"], 1,
       "Die Spannung zwischen Satzgrenze und Versgrenze ist ein wichtiges Gestaltungsmittel.")],

    ["Burkarts thematische Schwerpunkte",
     ["Erika Burkart, 1922 bis 2010, lebte im aargauischen Aristau. Ihre Lyrik ist stark von Natur- und Landschaftserfahrung geprägt, aber sie ist keine idyllische Naturdichtung.",
      "Die Natur ist bei ihr Trägerin existenzieller Fragen: Vergänglichkeit, Erinnerung, Stille, das Verhältnis von Ich und Welt, das Verschwinden vertrauter Räume.",
      "Wenn du eine Passage vorgelegt bekommst, frage deshalb nicht nur, welches Naturbild erscheint, sondern wofür es steht. Ein Baum, ein Fenster, eine Allee sind bei ihr fast nie nur Baum, Fenster und Allee."],
     mc("dbu-c3", "Wie ist Burkarts Naturdarstellung zu verstehen?",
       ["als idyllische Landschaftsbeschreibung", "als Trägerin existenzieller Themen wie Vergänglichkeit und Erinnerung",
        "als botanische Beschreibung", "als politische Allegorie"], 1,
       "Die Naturbilder tragen bei ihr existenzielle Bedeutung, sie sind keine blosse Beschreibung.")],

    ["Vorbereitung der zehn Titel",
     ["Die Pflichtauswahl umfasst: Die Moorschenke, Weiss, Hochland, Weg, Am Fenster abends, Die Stille, Ballmoos, November-Allee, Auf einen Nussbaum, Steckbrief.",
      "Lege für jedes Gedicht eine kurze Karte an: Form in zwei Zeilen, zentrale Bilder, Grundstimmung, Thema in einem Satz, eine auffällige sprachliche Besonderheit.",
      "Suche danach Querverbindungen. Welche Gedichte teilen ein Motiv, welche stehen einander gegenüber? Vergleichsfragen sind in der mündlichen Prüfung häufig, und wer die Gedichte nur einzeln kennt, hat darauf keine Antwort."],
     tf("dbu-c4", "Für die mündliche Prüfung genügt es, die Gedichte einzeln zu kennen.", false,
       "Vergleichsfragen sind häufig. Du solltest Motive und Gegensätze zwischen den zehn Titeln benennen können.")],
  ]);

  /* ======================= ENGLISCH ======================= */

  body("en-vocabulary-grammar", [
    ["Wortschatz wächst durch Wiederholung, nicht durch Menge",
     ["Verlangt sind rund 3000 bis 4000 aktiv verfügbare Wörter. Aktiv heisst: selbst verwenden können, nicht nur wiedererkennen.",
      "Der Unterschied ist gross. Passiv versteht man ein Vielfaches dessen, was man aktiv produziert. Für die Prüfung zählt die aktive Seite.",
      "Wirksam ist verteiltes Wiederholen über Wochen, nicht Massenlernen am Vorabend. Zwanzig Wörter täglich über ein halbes Jahr ergeben mehr als dreitausend, und sie bleiben."],
     mc("ev-c1", "Was bedeutet aktiver Wortschatz?",
       ["Wörter, die man im Text erkennt", "Wörter, die man selbst verwenden kann",
        "Wörter aus dem Wörterbuch", "Fachbegriffe"], 1,
       "Erkennen ist passiv. Für Schreiben und Sprechen zählt nur, was aktiv abrufbar ist.")],

    ["Collocations statt Einzelwörter lernen",
     ["Englisch funktioniert stark über feste Wortverbindungen. Man sagt <em>make a decision</em>, nicht <em>do a decision</em>. Man sagt <em>heavy rain</em>, nicht <em>strong rain</em>.",
      "Diese Verbindungen folgen keiner Regel, sie sind Konvention. Wer Einzelwörter lernt und selbst kombiniert, produziert grammatisch korrekte, aber unenglische Sätze.",
      "Deshalb lohnt es sich, Vokabeln immer im Satz oder mindestens in der Wortverbindung zu lernen. Das kostet kaum mehr Zeit und verbessert die Ausdrucksnote deutlich."],
     mc("ev-c2", "Warum sollte man Collocations statt Einzelwörter lernen?",
       ["sie sind kürzer", "weil feste Wortverbindungen Konvention sind und selbst kombinierte Varianten unenglisch klingen",
        "sie stehen im Wörterbuch", "sie sind leichter"], 1,
       "Make a decision, take a risk, pay attention: Diese Verbindungen lassen sich nicht ableiten, nur lernen.")],

    ["Die Zeitformen, die tatsächlich Punkte kosten",
     ["Der Unterschied zwischen <strong>present perfect</strong> und <strong>simple past</strong> ist der häufigste Fehler deutschsprachiger Lernender. Das Deutsche unterscheidet hier nicht gleich.",
      "Faustregel: Simple past bei abgeschlossener Zeit mit Zeitangabe, etwa <em>I went there in 2020</em>. Present perfect bei Verbindung zur Gegenwart, etwa <em>I have lived here for ten years</em>, mit for und since.",
      "Zweiter Dauerbrenner sind die <strong>conditionals</strong>. Typ 1 für Reales, Typ 2 für Unwahrscheinliches mit <em>would</em>, Typ 3 für Vergangenes und nicht mehr Änderbares. In Erörterungen brauchst du vor allem Typ 2."],
     mc("ev-c3", "Welche Zeitform passt zu «I ... here since 2019»?",
       ["simple past: lived", "present perfect: have lived", "present simple: live", "future: will live"], 1,
       "Since und for markieren eine bis in die Gegenwart reichende Zeitspanne, also present perfect.")],

    ["Register: formell oder informell",
     ["Für schriftliche Aufgaben ist meist ein formelles Register verlangt. Das heisst: keine Kurzformen wie <em>don't</em>, keine umgangssprachlichen Wendungen, vollständige Sätze.",
      "Formell heisst aber nicht kompliziert. Kurze, klare Sätze sind besser als verschachtelte, in denen die Grammatik entgleist.",
      "Für die mündliche Prüfung gilt ein mittleres Register. Zu formelles Sprechen wirkt auswendig gelernt, zu lockeres wirkt unangemessen. Die Faustregel lautet: so, wie man mit einer respektierten Lehrperson spricht."],
     tf("ev-c4", "Formelles Englisch bedeutet, möglichst lange und komplexe Sätze zu schreiben.", false,
       "Formell heisst korrekt und angemessen, nicht kompliziert. Klare kurze Sätze sind besser als fehlerhafte lange.")],
  ]);

  body("en-reading", [
    ["Zwei Lesetechniken, zwei Zwecke",
     ["<strong>Skimming</strong> heisst überfliegen. Du liest Titel, erste und letzte Absätze und den Anfang jedes Absatzes, um Thema, Aufbau und Haltung des Textes zu erfassen. Das dauert zwei bis drei Minuten.",
      "<strong>Scanning</strong> heisst gezielt suchen. Du weisst, was du brauchst, und suchst nur danach: eine Jahreszahl, einen Namen, eine Begründung.",
      "Die Reihenfolge ist wichtig: erst skimmen, dann die Fragen lesen, dann für jede Frage gezielt scannen. Wer den Text vollständig linear liest, verliert Zeit, die am Schluss beim Schreiben fehlt."],
     mc("er-c1", "In welcher Reihenfolge gehst du im Leseteil vor?",
       ["Text vollständig lesen, dann Fragen", "skimmen, Fragen lesen, gezielt scannen",
        "nur die Fragen lesen", "Text rückwärts lesen"], 1,
       "Überblick verschaffen, dann wissen, wonach zu suchen ist, dann gezielt suchen. Das spart erheblich Zeit.")],

    ["Jede Antwort braucht eine Textstelle",
     ["Die häufigste Fehlerquelle ist Antworten aus dem Allgemeinwissen statt aus dem Text. Gefragt ist immer, was <em>dieser</em> Text sagt.",
      "Markiere deshalb für jede Antwort die Zeile, aus der sie stammt. Findest du keine, ist die Antwort vermutlich falsch, auch wenn sie inhaltlich plausibel klingt.",
      "Formuliere die Antwort in eigenen Worten. Wortwörtliches Abschreiben ganzer Passagen wird oft nicht gewertet, weil es kein Verständnis zeigt."],
     mc("er-c2", "Was tust du, wenn du für eine Antwort keine Textstelle findest?",
       ["aus dem Allgemeinwissen antworten", "die Antwort überprüfen, denn ohne Textbeleg ist sie vermutlich falsch",
        "die Frage überspringen", "raten"], 1,
       "Im Leseteil zählt nur, was im Text steht. Ohne Beleg stimmt die Antwort meist nicht.")],

    ["Inference: was nicht dasteht, aber folgt",
     ["Manche Fragen zielen nicht auf eine Textstelle, sondern auf einen Schluss daraus. Das ist <strong>inference</strong>.",
      "Beispiel: Wenn im Text steht, dass eine Figur die Einladung dreimal ausschlug und beim vierten Mal einen Termin erfand, ist der Schluss, dass sie nicht hingehen will, auch wenn das nirgends steht.",
      "Wichtig ist die Grenze: Ein Schluss muss aus dem Text folgen, nicht bloss dazu passen. Was du dir zusätzlich ausdenkst, ist keine Inferenz, sondern Erfindung."],
     mc("er-c3", "Was kennzeichnet eine zulässige Inferenz?",
       ["sie klingt plausibel", "sie folgt zwingend aus Angaben im Text, auch wenn sie dort nicht ausgesprochen wird",
        "sie stammt aus dem Allgemeinwissen", "sie ist eine Meinung"], 1,
       "Plausibilität genügt nicht. Der Schluss muss sich aus dem Text ableiten lassen.")],

    ["Unbekannte Wörter erschliessen",
     ["In der Prüfung ist kein Wörterbuch zugelassen. Unbekannte Wörter sind also normal und kein Grund zur Panik.",
      "Nutze drei Hilfen: den <strong>Kontext</strong>, also was an dieser Stelle inhaltlich passen muss. Die <strong>Wortform</strong>, also Vor- und Nachsilben wie un-, -less, -ful, -tion. Und <strong>Ähnlichkeiten</strong> zu Deutsch oder Französisch, mit Vorsicht vor falschen Freunden.",
      "Oft genügt es, die ungefähre Bedeutung und die Wortart zu erfassen. Für das Textverständnis musst du nicht jedes Wort übersetzen können."],
     tf("er-c4", "Für ein gutes Textverständnis musst du jedes Wort kennen.", false,
       "Kontext, Wortbildung und Sprachvergleich erlauben es, unbekannte Wörter ausreichend genau zu erschliessen.")],
  ]);

  body("en-analysis", [
    ["Analyse ist nicht Zusammenfassung",
     ["Eine Zusammenfassung sagt, <em>was</em> im Text steht. Eine Analyse sagt, <em>wie</em> der Text wirkt und <em>warum</em> er so gebaut ist.",
      "Der häufigste Fehler in Prüfungen ist die getarnte Nacherzählung: Der Text wird mit anderen Worten wiederholt, und am Schluss steht ein Wertungssatz.",
      "Ein einfacher Test: Enthält dein Absatz ein Wort wie <em>emphasises</em>, <em>suggests</em>, <em>creates</em>, <em>contrasts</em>? Wenn nicht, hast du wahrscheinlich zusammengefasst statt analysiert."],
     mc("ea-c1", "Woran erkennst du, dass du zusammenfasst statt analysierst?",
       ["der Absatz ist kurz", "es fehlen Wirkungsverben wie suggests, emphasises oder creates",
        "es fehlen Zitate", "der Absatz beginnt mit The author"], 1,
       "Analyse beschreibt Wirkung. Fehlen die Wirkungsverben, wird meist nur wiedergegeben.")],

    ["Point, Evidence, Explanation",
     ["Baue jeden Analyseabsatz nach diesem Dreischritt. <strong>Point</strong>: die Behauptung über den Text. <strong>Evidence</strong>: eine kurze Textstelle als Beleg. <strong>Explanation</strong>: warum diese Stelle die Behauptung stützt.",
      "Die Erklärung ist der Teil, der am häufigsten fehlt. Ein Zitat spricht nicht für sich selbst, es muss ausgewertet werden.",
      "Halte Zitate kurz, wenige Wörter genügen. Ein langes Zitat frisst Platz und zeigt weniger Verständnis als ein präzise gewähltes Detail."],
     mc("ea-c2", "Welcher Teil von Point, Evidence, Explanation fehlt am häufigsten?",
       ["Point", "Evidence", "Explanation", "keiner"], 2,
       "Belege werden oft genannt, aber nicht ausgewertet. Die Erklärung der Wirkung macht den Unterschied.")],

    ["Die Werkzeuge der Analyse",
     ["<strong>Tone</strong>: Ist der Text ironisch, sachlich, drängend, resigniert? Der Ton verrät die Haltung zum Gegenstand.",
      "<strong>Narrator</strong>: Wer erzählt, und ist diese Instanz verlässlich? Ein unzuverlässiger Erzähler verändert die gesamte Deutung.",
      "<strong>Structure</strong>: Was steht am Anfang, was am Schluss, wo liegt der Wendepunkt? <strong>Imagery</strong>: Aus welchem Bereich stammen die Bilder, etwa Krieg, Natur, Krankheit? Das ist selten Zufall."],
     mc("ea-c3", "Warum ist die Frage nach dem narrator so wichtig?",
       ["um den Autor zu nennen", "weil die Verlässlichkeit der Erzählinstanz die gesamte Deutung verändert",
        "um die Epoche zu bestimmen", "um die Länge zu erklären"], 1,
       "Ein unzuverlässiger Erzähler zwingt die Leserschaft, gegen den Text zu lesen.")],

    ["Nützliche Formulierungen",
     ["Für Behauptungen: <em>The text suggests that …</em>, <em>The author emphasises …</em>, <em>This creates a sense of …</em>.",
      "Für Belege: <em>This is evident when …</em>, <em>as shown in the phrase …</em>. Für Einschränkungen: <em>However, this reading is complicated by …</em>, <em>Although …, the text also …</em>.",
      "Lerne acht bis zehn solcher Wendungen aktiv. Sie kosten in der Prüfung keine Denkzeit mehr und heben das sprachliche Niveau spürbar."],
     tf("ea-c4", "Feste Analysewendungen sollte man aktiv beherrschen.", true,
       "Sie sparen Denkzeit in der Prüfung und heben das sprachliche Niveau, weil sie idiomatisch korrekt sind.")],
  ]);

  body("en-writing", [
    ["200 bis 300 Wörter sind eine echte Einschränkung",
     ["In diesem Umfang passen eine Einleitung, zwei bis drei Argumente und ein Schluss. Mehr nicht. Wer vier Argumente unterbringen will, kann keines ausführen.",
      "Deshalb ist Auswahl wichtiger als Fülle. Zwei gut entwickelte Argumente bringen mehr Punkte als vier angerissene.",
      "Die Wortzahl wird bewertet. Deutlich zu kurze Texte verlieren Punkte für Inhalt, deutlich zu lange für Sprachkontrolle, weil dort mehr Fehler entstehen."],
     mc("ew-c1", "Was ist bei 200 bis 300 Wörtern die richtige Strategie?",
       ["möglichst viele Argumente nennen", "zwei bis drei Argumente auswählen und sauber entwickeln",
        "nur eine Meinung äussern", "möglichst viele Beispiele"], 1,
       "Der Umfang lässt nur wenige Argumente zu. Entwicklung schlägt Aufzählung.")],

    ["Struktur: thesis statement und topic sentences",
     ["Die Einleitung endet mit dem <strong>thesis statement</strong>, einem Satz, der deine Position festlegt. Er ist der Kompass für den ganzen Text.",
      "Jeder Absatz beginnt mit einem <strong>topic sentence</strong>, der sein Thema nennt. Wer nur die Absatzanfänge liest, sollte den Argumentationsgang bereits verstehen.",
      "Das ist im englischen Schreiben stärker normiert als im Deutschen. Ein Absatz ohne erkennbaren topic sentence gilt als schlecht gebaut, auch wenn der Inhalt stimmt."],
     mc("ew-c2", "Welche Funktion hat der topic sentence?",
       ["er nennt den Autor", "er nennt am Absatzanfang das Thema des Absatzes",
        "er fasst den Text zusammen", "er steht am Schluss"], 1,
       "Wer nur die topic sentences liest, sollte dem Argumentationsgang folgen können.")],

    ["Planen, schreiben, prüfen",
     ["Für dreissig Minuten Schreibzeit bewährt sich: fünf Minuten planen, zwanzig schreiben, fünf prüfen.",
      "In der Planung notierst du das thesis statement und pro Absatz ein Stichwort. Das genügt. Eine ausformulierte Gliederung kostet zu viel Zeit.",
      "In der Prüfphase gehst du gezielt vor: Zeitformen konsistent, Subjekt-Verb-Kongruenz mit dem dritten s, Artikel, Plural-s, Wortzahl. Fünf konkrete Prüfpunkte finden mehr Fehler als unspezifisches Durchlesen."],
     mc("ew-c3", "Wie prüfst du am Schluss am wirksamsten?",
       ["den Text nochmals durchlesen", "gezielt fünf konkrete Fehlerarten abfragen, etwa Zeitformen, Kongruenz und Artikel",
        "die Einleitung neu schreiben", "die Länge verdoppeln"], 1,
       "Unspezifisches Lesen übersieht viel. Eine kurze Fehlerliste findet mehr.")],

    ["Die Gegenposition gehört dazu",
     ["Auch in einem kurzen Text solltest du mindestens einen Einwand nennen und entkräften. Das zeigt Urteilsfähigkeit und wird ausdrücklich bewertet.",
      "Nützliche Formulierungen: <em>Admittedly, …</em>, <em>It could be argued that …, however …</em>, <em>While X is true, Y carries more weight because …</em>.",
      "Ein Text, der nur eine Seite kennt, wirkt unreflektiert. Ein Text, der die Gegenseite fair darstellt und dann begründet zurückweist, wirkt deutlich stärker."],
     tf("ew-c4", "In einem kurzen Text kann man die Gegenposition weglassen.", false,
       "Auch bei 200 bis 300 Wörtern wird Urteilsfähigkeit bewertet. Ein Satz Einwand und ein Satz Entkräftung genügen dafür.")],
  ]);

  body("en-speaking", [
    ["Ein Muster für jede Antwort",
     ["Vier Schritte tragen fast jede mündliche Antwort: <strong>Answer</strong>, <strong>Reason</strong>, <strong>Example</strong>, <strong>Qualification</strong>.",
      "Antworte zuerst direkt auf die Frage. Nenne dann den Grund. Führe ein konkretes Beispiel an. Schränke zum Schluss ein oder differenziere.",
      "Der letzte Schritt hebt das Niveau am deutlichsten. <em>However, this depends on …</em> oder <em>That said, the opposite can also be true when …</em> zeigt, dass du nicht nur eine Meinung hast, sondern sie einordnen kannst."],
     mc("es-c1", "Welcher Schritt hebt das Niveau einer mündlichen Antwort am meisten?",
       ["die direkte Antwort", "das Beispiel", "die Einschränkung oder Differenzierung", "die Begründung"], 2,
       "Wer einschränkt und differenziert, zeigt Urteilsfähigkeit statt blosser Meinung.")],

    ["Fluency ist nicht Tempo",
     ["Schnelles Sprechen wird oft mit Sprachkompetenz verwechselt. Tatsächlich bewertet wird, ob du verständlich, zusammenhängend und ohne ständiges Stocken sprichst.",
      "Eine kurze Pause zum Denken ist völlig in Ordnung und wirkt souveräner als ein Satz voller Füllgeräusche.",
      "Nützlich sind Überbrückungsformeln: <em>That's an interesting question.</em> <em>Let me think about that for a second.</em> Sie geben dir zwei Sekunden Denkzeit und klingen dabei kompetent."],
     tf("es-c2", "Schnelles Sprechen wird in der mündlichen Prüfung besser bewertet.", false,
       "Bewertet werden Verständlichkeit und Zusammenhang. Zu schnelles Sprechen verschlechtert beides.")],

    ["Reparieren statt steckenbleiben",
     ["Es wird passieren, dass dir ein Wort fehlt. Entscheidend ist, was du dann tust. Abbrechen und schweigen ist das Schlechteste.",
      "<strong>Paraphrasieren</strong> ist die Lösung: Beschreibe das Wort, das dir fehlt. <em>the thing you use to …</em>, <em>a person who …</em>, <em>something similar to …</em>.",
      "Das kostet keine Punkte, im Gegenteil. Die Fähigkeit, eine Lücke sprachlich zu überbrücken, ist selbst eine bewertete Kompetenz und heisst in den Kriterien <em>communication strategies</em>."],
     mc("es-c3", "Was tust du, wenn dir ein Wort fehlt?",
       ["auf Deutsch wechseln", "das Wort umschreiben, etwa mit the thing you use to …",
        "den Satz abbrechen", "schweigen und warten"], 1,
       "Paraphrasieren hält das Gespräch am Laufen und wird als Kommunikationsstrategie positiv bewertet.")],

    ["Interaktion heisst zuhören",
     ["Die mündliche Prüfung ist ein Gespräch. Bewertet wird auch, ob du auf das Gegenüber eingehst, nachfragst und an Gesagtes anknüpfst.",
      "Nützlich: <em>You mentioned earlier that …</em>, <em>Could you clarify what you mean by …?</em>, <em>I see your point, but …</em>.",
      "Ein auswendig gelernter Monolog erfüllt dieses Kriterium nicht, auch wenn er sprachlich fehlerfrei ist. Bereite deshalb Inhalte vor, keine fertigen Texte."],
     mc("es-c4", "Warum ist ein auswendig gelernter Monolog problematisch?",
       ["er ist zu lang", "er erfüllt das Bewertungskriterium der Interaktion nicht",
        "er enthält Fehler", "er ist zu formell"], 1,
       "Interaktion wird getrennt bewertet. Wer nur einen vorbereiteten Text abspult, geht nicht auf das Gegenüber ein.")],
  ]);

  body("en-literature", [
    ["Drei Werke, drei Autorinnen oder Autoren",
     ["Für die mündliche Prüfung wählst du drei ungekürzte Werke von drei verschiedenen Autorinnen oder Autoren aus der verbindlichen Liste.",
      "Ungekürzt heisst: keine vereinfachten Ausgaben, keine Zusammenfassungen. Die Prüfenden merken sehr schnell, ob ein Werk gelesen wurde.",
      "Wähle klug. Drei sehr ähnliche Werke erschweren Vergleiche. Eine Mischung aus verschiedenen Gattungen, Zeiten oder Erzählformen gibt dir mehr Vergleichsmöglichkeiten."],
     mc("el-c1", "Worauf solltest du bei der Werkauswahl achten?",
       ["möglichst kurze Bücher", "eine Mischung, die Vergleiche zwischen Gattung, Zeit oder Erzählform ermöglicht",
        "alle vom selben Autor", "möglichst bekannte Titel"], 1,
       "Vergleichsfragen sind fester Bestandteil. Ähnliche Werke lassen sich schlechter gegenüberstellen.")],

    ["Ein Portfolio pro Werk",
     ["Lege für jedes Werk eine Seite an mit: Handlungsbogen in fünf Sätzen, Hauptfiguren mit Motiven und Entwicklung, drei Themen als Aussagesätze, Erzählform, Entstehungszeit und Kontext.",
      "Wichtig ist die Formulierung der Themen. <em>Freedom</em> ist kein Thema, sondern ein Wort. <em>The novel questions whether freedom is possible within a rigid social order</em> ist ein Thema, weil es eine Aussage enthält.",
      "Dazu wählst du fünf Schlüsselstellen mit Seitenzahl. Sie sollten möglichst mehrere Themen gleichzeitig berühren, dann decken sie viele Fragen ab."],
     mc("el-c2", "Wie formulierst du ein Thema richtig?",
       ["als einzelnes Wort wie freedom", "als Aussagesatz, der eine These über das Werk enthält",
        "als Frage", "als Zitat"], 1,
       "Ein Thema ist eine Aussage über das Werk, kein Stichwort.")],

    ["Vergleichen braucht ein gemeinsames Kriterium",
     ["Zwei Zusammenfassungen nebeneinander sind kein Vergleich. Ein Vergleich braucht ein <strong>Kriterium</strong>, unter dem beide Werke betrachtet werden.",
      "Geeignete Kriterien: Umgang mit Macht, Rolle der Erzählinstanz, Konstruktion von Identität, Verhältnis von Individuum und Gesellschaft, Verlässlichkeit der Wahrnehmung.",
      "Die Struktur einer guten Vergleichsantwort: Kriterium nennen, Werk A darunter beschreiben, Werk B darunter beschreiben, Unterschied benennen und erklären, warum er bedeutsam ist."],
     mc("el-c3", "Was macht aus zwei Beschreibungen einen Vergleich?",
       ["die Länge", "ein gemeinsames Kriterium, unter dem beide betrachtet werden",
        "die Reihenfolge", "dass beide Werke gleich alt sind"], 1,
       "Ohne gemeinsames Kriterium bleiben es zwei getrennte Zusammenfassungen.")],

    ["Textstellen ohne Auswendiglernen belegen",
     ["Du musst keine langen Passagen zitieren können. Es genügt, eine Stelle präzise zu beschreiben und einzuordnen.",
      "Formulierungen dafür: <em>In the scene where …</em>, <em>At the point when the narrator …</em>, <em>Towards the end, the author shows …</em>.",
      "Wichtiger als der Wortlaut ist, dass du sagen kannst, warum genau diese Stelle deine Behauptung stützt. Präzision im Verweis schlägt Vollständigkeit im Zitat."],
     tf("el-c4", "Für die Literaturprüfung musst du längere Passagen wörtlich auswendig können.", false,
       "Eine präzise Beschreibung der Stelle und ihrer Funktion genügt. Der Wortlaut ist zweitrangig.")],
  ]);

  body("en-exam-strategy", [
    ["Die Prüfung besteht aus mehreren Teilen mit unterschiedlichem Ertrag",
     ["Drei Stunden, mehrere Aufgabenblöcke: Textverständnis, Sprachaufgaben, freies Schreiben. Nicht jeder Teil bringt pro Minute gleich viele Punkte.",
      "Gebundene Aufgaben wie Lückentexte und Verständnisfragen sind schnell und sicher zu punkten. Der Schreibteil braucht Zeit und ist fehleranfälliger.",
      "Strategisch folgt daraus: Sichere zuerst die gebundenen Punkte, dann folgt der Schreibteil mit dem verbleibenden, aber ausreichend bemessenen Zeitbudget."],
     mc("ex-c1", "Welche Aufgaben bearbeitest du strategisch zuerst?",
       ["den Schreibteil", "die gebundenen Aufgaben, weil sie schnell sichere Punkte bringen",
        "die schwierigste Aufgabe", "in der gedruckten Reihenfolge"], 1,
       "Sichere Punkte zuerst. So geht kein leicht erreichbarer Punkt wegen Zeitmangel verloren.")],

    ["Ein Zeitbudget mit Uhrzeiten",
     ["Rechne dir zu Beginn aus, wann du in welchem Teil sein musst, und notiere die Uhrzeiten auf dem Blatt.",
      "Ein Beispiel für drei Stunden: Lesen und Verständnis bis 60 Minuten, Sprachaufgaben bis 95 Minuten, Schreiben bis 160 Minuten, Korrektur bis 180.",
      "Halte diese Marken auch dann ein, wenn ein Teil noch nicht fertig ist. Eine unvollständige Aufgabe kostet weniger als eine gar nicht begonnene."],
     mc("ex-c2", "Was tust du, wenn ein Prüfungsteil länger dauert als geplant?",
       ["dranbleiben bis fertig", "zur nächsten Aufgabe wechseln und später zurückkehren",
        "die Aufgabe streichen", "schneller schreiben"], 1,
       "Eine nicht begonnene Aufgabe bringt null Punkte. Weitergehen und später zurückkehren ist immer besser.")],

    ["Das Aufgabenverb bestimmt den Umfang",
     ["<em>List</em> verlangt Stichworte, <em>Describe</em> verlangt Sätze, <em>Explain</em> verlangt Gründe, <em>Discuss</em> verlangt mehrere Positionen.",
      "Zusammen mit der Punktzahl ergibt sich der angemessene Umfang. Zwei Punkte bedeuten meist zwei Aussagen, nicht einen Absatz.",
      "Zu lange Antworten auf kleine Fragen sind ein typischer Zeitfresser. Sie bringen keine zusätzlichen Punkte, kosten aber Zeit, die im Schreibteil fehlt."],
     mc("ex-c3", "Woran erkennst du den angemessenen Umfang einer Antwort?",
       ["an der Zeilenzahl im Heft", "am Aufgabenverb zusammen mit der Punktzahl",
        "am eigenen Gefühl", "an der Textlänge"], 1,
       "Operator und Punktzahl signalisieren gemeinsam, wie ausführlich geantwortet werden soll.")],

    ["Vollständige Simulationen trainieren etwas anderes als Übungen",
     ["Einzelne Übungsaufgaben trainieren Sprache. Eine vollständige Simulation unter Zeitdruck trainiert Ausdauer, Zeitgefühl und Entscheidungsfähigkeit.",
      "Beides ist nötig, aber nur das zweite bereitet auf den tatsächlichen Prüfungstag vor. Drei Stunden Konzentration sind eine körperliche Leistung, die geübt sein will.",
      "Führe nach jeder Simulation ein <strong>Fehlerprotokoll</strong>: Welche Fehlerart kam vor, wie oft, in welchem Teil? Nach drei Durchgängen kennst du deine zwei bis drei Hauptfehlerquellen und kannst gezielt daran arbeiten."],
     tf("ex-c4", "Einzelne Übungsaufgaben bereiten genauso gut auf die Prüfung vor wie vollständige Simulationen.", false,
       "Übungen trainieren Sprache, Simulationen zusätzlich Ausdauer, Zeiteinteilung und Entscheidungsfähigkeit unter Druck.")],
  ]);
})();

/* Einführungsebene, Teil A: Mathematik und Physik.
   Jede Einführung startet bei null: Alltagsbild, Zweck, Voraussetzung,
   Kernsatz und die Grundbegriffe, bevor irgendein Fachtext beginnt. */
(function () {
  "use strict";
  var M = window.MNEMIKA;
  function I(id, lead, why, prereq, core, terms) {
    var c = M.chapter(id);
    if (!c) return;
    c.intro = { lead: lead, why: why, prereq: prereq, core: core, terms: terms || [] };
  }
  M.introCount = (M.introCount || 0);

  /* ---------------- Mathematik ---------------- */
  I("math-algebra",
    "Algebra ist die Sprache, in der du eine Bedingung aufschreibst, deren Antwort du noch nicht kennst. Statt «eine Zahl, die mal drei plus sieben zweiundzwanzig ergibt» schreibst du 3x + 7 = 22 und rechnest die Antwort heraus.",
    "Fast jede Aufgabe in Mathematik, Physik und Chemie endet damit, dass du eine Gleichung nach einer Grösse auflösen musst. Wer hier unsicher ist, verliert Punkte in Fächern, die er inhaltlich eigentlich beherrscht.",
    "Du brauchst die vier Grundrechenarten, Bruchrechnen und das Rechnen mit negativen Zahlen.",
    "Eine Gleichung ist eine Behauptung über Zahlen, und Umformen heisst, diese Behauptung zu vereinfachen, ohne ihren Wahrheitsgehalt zu verändern.",
    [["Term", "Rechenausdruck ohne Gleichheitszeichen, zum Beispiel 3x + 7."],
     ["Gleichung", "Behauptung, dass zwei Terme denselben Wert haben."],
     ["Lösungsmenge", "Alle Zahlen, für die die Behauptung wahr ist."],
     ["Definitionsmenge", "Alle Zahlen, die überhaupt eingesetzt werden dürfen."],
     ["Äquivalenzumformung", "Umformung, welche die Lösungsmenge nicht verändert."]]);

  I("math-systems-quadratics",
    "Manchmal muss eine Zahl nicht eine, sondern zwei Bedingungen gleichzeitig erfüllen. Und manchmal kommt die Unbekannte im Quadrat vor, dann kann es plötzlich zwei richtige Antworten geben, eine oder gar keine.",
    "Textaufgaben mit zwei Unbekannten und quadratische Ansätze aus Flächen-, Wurf- oder Gewinnproblemen sind schriftliche Standardaufgaben.",
    "Du solltest lineare Gleichungen sicher nach einer Variablen auflösen können.",
    "Ein Gleichungssystem sucht Werte, die alle Bedingungen zugleich erfüllen, eine quadratische Gleichung kann null, eine oder zwei reelle Lösungen haben.",
    [["Gleichungssystem", "Mehrere Gleichungen, die gleichzeitig gelten müssen."],
     ["Elimination", "Verfahren, das durch Addieren eine Variable verschwinden lässt."],
     ["Nullform", "Die Schreibweise ax² + bx + c = 0, Voraussetzung für jede Formel."],
     ["Diskriminante", "Der Ausdruck b² − 4ac, er zählt die reellen Lösungen."]]);

  I("math-functions-basic",
    "Eine Funktion ist eine Maschine: du steckst eine Zahl hinein, genau eine Zahl kommt heraus. Der Graph ist nur das Bild davon, welche Zahl bei welcher Eingabe herauskommt.",
    "Funktionen sind die Grundsprache von Analysis, Physik und Wirtschaft. Ohne sie lassen sich Ableitung und Integral nicht verstehen.",
    "Du brauchst Koordinatensystem, Terme einsetzen und das Lösen linearer und quadratischer Gleichungen.",
    "Term, Wertetabelle und Graph sind drei Ansichten derselben Zuordnung.",
    [["Funktion", "Zuordnung, die jedem erlaubten x genau ein y gibt."],
     ["Nullstelle", "x-Wert, an dem f(x) = 0 ist."],
     ["y-Achsenabschnitt", "Der Funktionswert f(0)."],
     ["Steigung", "Änderung von y pro einem Schritt nach rechts."],
     ["Scheitelpunkt", "Höchster oder tiefster Punkt einer Parabel."]]);

  I("math-functions-advanced",
    "Nicht jede Veränderung läuft gleichmässig. Ein Kapital mit Zins, eine zerfallende Substanz oder eine wachsende Bakterienkultur ändern sich pro Schritt um einen festen Faktor, nicht um einen festen Betrag.",
    "Halbwertszeit, Verdopplungszeit, Zinseszins und pH-Wert beruhen alle auf diesen Funktionen. Sie kommen in Mathematik, Chemie und Physik vor.",
    "Du solltest Potenzgesetze kennen und lineare Funktionen sicher lesen können.",
    "Multiplizieren statt addieren erzeugt exponentielles Wachstum, und der Logarithmus ist das Werkzeug, das den Exponenten wieder herausholt.",
    [["Wachstumsfaktor", "Zahl b, mit der pro Zeitschritt multipliziert wird."],
     ["Exponentielles Wachstum", "Veränderung um einen festen Prozentsatz pro Schritt."],
     ["Logarithmus", "Antwort auf die Frage: welcher Exponent führt zu diesem Wert?"],
     ["Definitionsbereich", "Die erlaubten x-Werte, bei Wurzel und Logarithmus eingeschränkt."],
     ["Betrag", "Abstand einer Zahl zu null, nie negativ."]]);

  I("math-limits",
    "Manche Fragen lassen sich nicht durch Einsetzen beantworten, weil an genau dieser Stelle nichts definiert ist. Der Grenzwert fragt deshalb nicht «was ist dort», sondern «worauf läuft es zu, wenn ich mich annähere».",
    "Ohne Grenzwert lässt sich die Ableitung nicht definieren. Ausserdem brauchst du ihn für Asymptoten und für das Verhalten im Unendlichen.",
    "Du brauchst Faktorisieren, Kürzen und den Umgang mit rationalen Funktionen.",
    "Der Grenzwert beschreibt die Annäherung an eine Stelle, nicht den Wert an dieser Stelle.",
    [["Grenzwert", "Wert, dem f(x) beliebig nahekommt, wenn x gegen a strebt."],
     ["Unbestimmte Form", "Ausdruck wie 0/0, der erst nach Umformen auswertbar ist."],
     ["Stetigkeit", "Funktionswert und Grenzwert stimmen an der Stelle überein."],
     ["Asymptote", "Gerade, der sich ein Graph unbegrenzt annähert."]]);

  I("math-derivatives",
    "Die Steigung einer Geraden ist einfach: Höhe durch Breite. Bei einer Kurve ändert sich die Steigung ständig. Die Ableitung beantwortet, wie steil die Kurve an genau einem Punkt ist.",
    "Ableitungen sind das Herz der Analysis. Kurvendiskussion, Extremalprobleme, Geschwindigkeit und Beschleunigung bauen alle darauf auf.",
    "Du brauchst Grenzwerte, Potenzgesetze und den Funktionsbegriff.",
    "Die Ableitung ist die Steigung der Tangente und damit die momentane Änderungsrate.",
    [["Sekante", "Gerade durch zwei Punkte eines Graphen."],
     ["Tangente", "Gerade, die den Graphen in einem Punkt berührt."],
     ["Differenzenquotient", "Der Bruch (f(x+h) − f(x)) / h, die mittlere Steigung."],
     ["Ableitung", "Grenzwert des Differenzenquotienten für h gegen null."],
     ["Innere Ableitung", "Der Faktor aus der Kettenregel, der am häufigsten vergessen wird."]]);

  I("math-curve-optimisation",
    "Wenn du wissen willst, wo etwas am grössten oder am kleinsten wird, suchst du die Stelle, an der die Kurve waagrecht verläuft. Genau dort ist die Steigung null.",
    "Extremalprobleme sind ein fester Bestandteil der schriftlichen Prüfung: maximale Fläche, minimale Kosten, optimale Masse.",
    "Du musst Ableitungen sicher bilden und Gleichungen lösen können.",
    "f' sagt, wo es bergauf oder bergab geht, f'' sagt, ob es sich dabei nach oben oder unten krümmt.",
    [["Extremstelle", "Stelle mit lokalem Hoch- oder Tiefpunkt."],
     ["Notwendige Bedingung", "f'(x) = 0, Kandidat für ein Extremum."],
     ["Hinreichende Bedingung", "Vorzeichenwechsel von f' oder Test mit f''."],
     ["Wendepunkt", "Stelle, an der die Krümmung wechselt."],
     ["Zielfunktion", "Die Grösse, die maximiert oder minimiert werden soll."]]);

  I("math-integrals",
    "Wenn die Ableitung Steigung misst, dann misst das Integral Fläche. Man zerlegt die Fläche unter einem Graphen in immer schmalere Rechtecke und lässt ihre Breite gegen null gehen.",
    "Integrale liefern Flächen, Volumen, zurückgelegte Wege aus Geschwindigkeiten und Arbeit aus Kräften.",
    "Du brauchst die Ableitungsregeln, denn Integrieren ist deren Umkehrung.",
    "Integrieren heisst, eine Funktion zu suchen, deren Ableitung der Integrand ist.",
    [["Stammfunktion", "Funktion F mit F' = f."],
     ["Bestimmtes Integral", "F(b) − F(a), eine Zahl mit Vorzeichen."],
     ["Integrand", "Die Funktion unter dem Integralzeichen."],
     ["Orientierte Fläche", "Flächen unter der x-Achse zählen negativ."]]);

  I("math-trigonometry",
    "In jedem rechtwinkligen Dreieck stehen die Seitenverhältnisse fest, sobald ein Winkel bekannt ist. Sinus, Cosinus und Tangens sind nichts anderes als Namen für diese drei Verhältnisse.",
    "Du brauchst sie für Dreiecksberechnungen, für Kräftezerlegung in der Physik und für alles Periodische wie Schwingungen und Wellen.",
    "Der Satz des Pythagoras und die Winkelsumme im Dreieck müssen sitzen.",
    "Im Dreieck sind es Seitenverhältnisse, im Einheitskreis sind es Koordinaten eines Punktes.",
    [["Hypotenuse", "Die längste Seite, gegenüber dem rechten Winkel."],
     ["Gegenkathete", "Die Seite gegenüber dem betrachteten Winkel."],
     ["Ankathete", "Die Seite, die am betrachteten Winkel anliegt."],
     ["Einheitskreis", "Kreis mit Radius eins um den Ursprung."],
     ["Bogenmass", "Winkelmass, bei dem π dem gestreckten Winkel entspricht."]]);

  I("math-vectors",
    "Ein Vektor ist ein Pfeil: er hat eine Richtung und eine Länge, aber keinen festen Ort. Damit lassen sich Verschiebungen, Kräfte und Geschwindigkeiten rechnen statt zeichnen.",
    "Vektorgeometrie ist ein eigener Prüfungsblock und zugleich die Grundlage für Kräfte in der Physik.",
    "Du brauchst Koordinaten, Pythagoras und Grundrechenarten.",
    "Ein Vektor beschreibt eine gerichtete Verschiebung, seine Komponenten sind die Änderung je Koordinatenrichtung.",
    [["Betrag", "Die Länge eines Vektors, über Pythagoras berechnet."],
     ["Skalarprodukt", "Rechnung, die eine Zahl liefert und den Winkel kennt."],
     ["Orthogonal", "Senkrecht, erkennbar am Skalarprodukt null."],
     ["Vektorprodukt", "Rechnung, die einen senkrechten Vektor liefert."]]);

  I("math-analytic-geometry",
    "Geraden, Ebenen und Kreise lassen sich als Gleichungen schreiben. Dann wird aus einer geometrischen Frage wie «schneiden die sich» eine reine Rechenfrage.",
    "Lage-, Schnitt-, Abstands- und Winkelaufgaben gehören zum festen Bestand der schriftlichen Prüfung.",
    "Du musst mit Vektoren rechnen und Gleichungssysteme lösen können.",
    "Geometrie wird zur Algebra, sobald jedes Objekt eine Gleichung hat.",
    [["Stützvektor", "Ein bekannter Punkt auf dem Objekt."],
     ["Richtungsvektor", "Die Richtung, in die eine Gerade verläuft."],
     ["Normalenvektor", "Vektor, der senkrecht auf einer Ebene steht."],
     ["Parameterform", "Darstellung r = a + t·u mit frei wählbarem t."]]);

  I("math-probability",
    "Zufall heisst nicht Beliebigkeit. Wenn du weisst, welche Ergebnisse möglich sind und wie oft sie langfristig auftreten, lässt sich mit Zufall rechnen wie mit jeder anderen Grösse.",
    "Stochastik ist ein eigener Prüfungsteil und begegnet dir später in fast jedem Studienfach.",
    "Du brauchst Bruch- und Prozentrechnen.",
    "Entlang eines Pfades wird multipliziert, über alternative Pfade wird addiert.",
    [["Ergebnismenge", "Alle möglichen Ausgänge eines Zufallsversuchs."],
     ["Ereignis", "Eine Teilmenge der Ergebnismenge."],
     ["Baumdiagramm", "Darstellung mehrstufiger Versuche mit Pfadregeln."],
     ["Bedingte Wahrscheinlichkeit", "Wahrscheinlichkeit von A, wenn B schon eingetreten ist."],
     ["Unabhängigkeit", "Liegt vor, wenn P(A∩B) = P(A)·P(B) gilt."]]);

  /* ---------------- Physik ---------------- */
  I("phys-kinematics",
    "Kinematik beschreibt Bewegung, ohne nach der Ursache zu fragen. Sie beantwortet nur: wo ist ein Körper, wie schnell und wie stark ändert sich diese Geschwindigkeit.",
    "Fast jede Mechanikaufgabe beginnt damit, dass du Weg, Zeit, Geschwindigkeit und Beschleunigung korrekt auseinanderhältst.",
    "Du brauchst Einheitenumrechnung und das Umstellen einfacher Formeln.",
    "Geschwindigkeit ist die Änderung des Ortes pro Zeit, Beschleunigung die Änderung der Geschwindigkeit pro Zeit.",
    [["Weg s", "Zurückgelegte Strecke, in Metern."],
     ["Geschwindigkeit v", "Weg pro Zeit, in m/s."],
     ["Beschleunigung a", "Geschwindigkeitsänderung pro Zeit, in m/s²."],
     ["Gleichförmig", "Konstante Geschwindigkeit, a = 0."],
     ["s-t-Diagramm", "Weg über Zeit, die Steigung ist die Geschwindigkeit."]]);

  I("phys-fall-throw",
    "Lässt man einen Körper los, zieht ihn die Erde mit stets derselben Beschleunigung nach unten. Ob ein Stein oder eine Kugel fällt, spielt ohne Luftwiderstand keine Rolle.",
    "Fall- und Wurfaufgaben sind Standard und prüfen, ob du Vorzeichen und Anfangsbedingungen sauber setzt.",
    "Du brauchst die Formeln der gleichmässig beschleunigten Bewegung.",
    "Freier Fall ist eine gleichmässig beschleunigte Bewegung mit a = g ≈ 9,81 m/s².",
    [["Fallbeschleunigung g", "Rund 9,81 m/s² an der Erdoberfläche."],
     ["Freier Fall", "Bewegung ohne Anfangsgeschwindigkeit und ohne Luftwiderstand."],
     ["Steigzeit", "Zeit bis zum höchsten Punkt beim senkrechten Wurf."],
     ["Vorzeichenwahl", "Festlegung, welche Richtung positiv gezählt wird."]]);

  I("phys-newton-forces",
    "Eine Kraft ist die Ursache dafür, dass sich ein Bewegungszustand ändert. Ohne Kraft bleibt ein Körper in Ruhe oder fährt gleichförmig weiter, auch wenn das dem Alltagsgefühl widerspricht.",
    "Die newtonschen Gesetze sind das Fundament der ganzen Mechanik. Ohne sie bleiben Reibung, Arbeit und Energie unverständlich.",
    "Du brauchst Kinematik und den Vektorbegriff.",
    "Beschleunigung entsteht nur, wenn die Summe aller Kräfte nicht null ist.",
    [["Kraft F", "Ursache einer Bewegungsänderung, in Newton."],
     ["Masse m", "Mass für die Trägheit eines Körpers, in Kilogramm."],
     ["Dichte ρ", "Masse pro Volumen."],
     ["Resultierende", "Vektorsumme aller angreifenden Kräfte."],
     ["Wechselwirkung", "Zu jeder Kraft gehört eine gleich grosse Gegenkraft."]]);

  I("phys-friction-statics",
    "Reibung ist keine Störung, sondern der Grund, warum du überhaupt gehen und bremsen kannst. In der Statik geht es darum, wann sich gar nichts bewegt.",
    "Schiefe Ebene, Haftreibung und Drehmoment sind wiederkehrende Prüfungsaufgaben.",
    "Du brauchst Kräftezerlegung und Trigonometrie.",
    "Ein Körper ruht, wenn sowohl die Summe der Kräfte als auch die Summe der Drehmomente null ist.",
    [["Haftreibung", "Verhindert den Beginn einer Bewegung."],
     ["Gleitreibung", "Wirkt während der Bewegung, meist kleiner als Haftreibung."],
     ["Reibungszahl μ", "Materialabhängiger Faktor ohne Einheit."],
     ["Drehmoment", "Kraft mal Hebelarm, Ursache einer Drehung."],
     ["Gleichgewicht", "Kräfte- und Drehmomentsumme sind beide null."]]);

  I("phys-work-power",
    "Arbeit im physikalischen Sinn wird nur verrichtet, wenn eine Kraft etwas verschiebt. Ein schweres Paket zu halten ist anstrengend, aber physikalisch keine Arbeit.",
    "Arbeit, Leistung und Wirkungsgrad verbinden Mechanik mit Energie und Technik, ein häufiger Prüfungsschwerpunkt.",
    "Du brauchst den Kraftbegriff und Einheitenrechnung.",
    "Arbeit ist Kraft mal Weg in Kraftrichtung, Leistung ist Arbeit pro Zeit.",
    [["Arbeit W", "Kraft mal Weg in Kraftrichtung, in Joule."],
     ["Leistung P", "Arbeit pro Zeit, in Watt."],
     ["Wirkungsgrad η", "Nutzen geteilt durch Aufwand, stets kleiner als eins."],
     ["Joule", "Einheit von Arbeit und Energie, 1 J = 1 N·m."]]);

  I("phys-energy",
    "Energie verschwindet nie, sie wechselt nur die Form. Ein hochgehobener Körper besitzt Lageenergie, beim Fallen wird daraus Bewegungsenergie, beim Aufprall Wärme.",
    "Der Energieerhaltungssatz löst viele Aufgaben schneller als jede Bewegungsgleichung.",
    "Du brauchst Arbeit, Kraft und die Fallgesetze.",
    "In einem abgeschlossenen System bleibt die Gesamtenergie konstant.",
    [["Kinetische Energie", "Energie der Bewegung, ½mv²."],
     ["Potentielle Energie", "Energie der Lage, m·g·h."],
     ["Energieerhaltung", "Summe aller Energieformen bleibt konstant."],
     ["Dissipation", "Umwandlung geordneter Energie in Wärme."]]);

  I("phys-pressure-hydro",
    "Druck ist Kraft, verteilt auf eine Fläche. Ein spitzer Nagel dringt ein, weil dieselbe Kraft auf winziger Fläche wirkt, nicht weil sie grösser wäre.",
    "Hydrostatik und Auftrieb erklären Schwimmen, Tauchen, Blutdruck und hydraulische Anlagen.",
    "Du brauchst Kraft, Dichte und Flächenberechnung.",
    "Der Druck in einer Flüssigkeit hängt nur von Tiefe und Dichte ab, nicht von der Gefässform.",
    [["Druck p", "Kraft pro Fläche, in Pascal."],
     ["Schweredruck", "Druck durch die Flüssigkeitssäule, ρ·g·h."],
     ["Auftrieb", "Kraft nach oben, so gross wie das Gewicht der verdrängten Flüssigkeit."],
     ["Hydraulik", "Kraftübersetzung über unterschiedlich grosse Kolbenflächen."]]);

  I("phys-temperature-expansion",
    "Temperatur misst nicht Wärmemenge, sondern wie heftig sich die Teilchen bewegen. Deshalb ist ein Funke sehr heiss und trotzdem ungefährlich.",
    "Kelvin, Ausdehnung und Temperaturdifferenzen brauchst du in Physik und Chemie ständig.",
    "Du brauchst Prozentrechnen und Einheitenumgang.",
    "Temperatur ist ein Mass für die mittlere Bewegungsenergie der Teilchen.",
    [["Kelvin", "Absolute Temperaturskala, 0 K ist der absolute Nullpunkt."],
     ["Temperaturdifferenz", "In Kelvin und Grad Celsius zahlenmässig gleich."],
     ["Längenausdehnung", "Zunahme der Länge bei Erwärmung."],
     ["Anomalie des Wassers", "Wasser hat bei 4 °C die grösste Dichte."]]);

  I("phys-heat-thermo",
    "Wärme ist Energie, die wegen eines Temperaturunterschieds fliesst, immer von warm nach kalt. Wie viel Energie ein Stoff dabei aufnimmt, hängt vom Material ab.",
    "Mischungsaufgaben und Energiebilanzen sind typische Rechenaufgaben der schriftlichen Prüfung.",
    "Du brauchst Energie, Temperatur und Gleichungsumformung.",
    "Zugeführte Wärme ist gleich abgegebene Wärme, wenn das System abgeschlossen ist.",
    [["Wärme Q", "Übertragene thermische Energie, in Joule."],
     ["Spezifische Wärmekapazität c", "Energie je Kilogramm und Kelvin."],
     ["Erster Hauptsatz", "Energie kann weder erzeugt noch vernichtet werden."],
     ["Zweiter Hauptsatz", "Wärme fliesst von selbst nur von warm nach kalt."]]);

  I("phys-states",
    "Beim Schmelzen und Verdampfen steigt die Temperatur nicht, obwohl du weiter heizt. Die Energie geht in das Auflösen der Bindungen zwischen den Teilchen.",
    "Diagramme mit Haltepunkten und Aufgaben zu Schmelz- und Verdampfungswärme kommen regelmässig vor.",
    "Du brauchst Wärme und Wärmekapazität.",
    "Während eines Phasenübergangs bleibt die Temperatur konstant, obwohl Energie zugeführt wird.",
    [["Aggregatzustand", "Fest, flüssig oder gasförmig."],
     ["Schmelzwärme", "Energie für den Übergang fest zu flüssig."],
     ["Verdampfungswärme", "Energie für den Übergang flüssig zu gasförmig."],
     ["Haltepunkt", "Waagrechter Abschnitt im Temperatur-Zeit-Diagramm."]]);

  I("phys-electric-basics",
    "Strom ist bewegte Ladung, Spannung ist der Antrieb dafür und Widerstand die Bremse. Das Bild eines Wasserkreislaufs trägt erstaunlich weit: Pumpe, Fluss und Engstelle.",
    "Ohne diese drei Grössen ist keine Schaltungsaufgabe lösbar, und Elektrizität ist ein grosser Prüfungsblock.",
    "Du brauchst Bruchrechnen und das Umstellen von Formeln.",
    "Spannung treibt, Widerstand bremst, Strom ist das Ergebnis.",
    [["Ladung Q", "Grundgrösse der Elektrizität, in Coulomb."],
     ["Stromstärke I", "Ladung pro Zeit, in Ampere."],
     ["Spannung U", "Energie pro Ladung, in Volt."],
     ["Widerstand R", "Verhältnis U zu I, in Ohm."],
     ["Ohmsches Gesetz", "U = R · I bei konstantem Widerstand."]]);

  I("phys-circuits-power",
    "Ob Bauteile hintereinander oder nebeneinander hängen, ändert alles: was sich aufteilt, der Strom oder die Spannung, und wie sich der Gesamtwiderstand verhält.",
    "Schaltungsaufgaben mit Leistungsberechnung und Sicherungsfragen sind Prüfungsklassiker.",
    "Du brauchst das ohmsche Gesetz und Bruchrechnen.",
    "In der Reihe teilt sich die Spannung, parallel teilt sich der Strom.",
    [["Reihenschaltung", "Ein Weg, gleicher Strom, Widerstände addieren sich."],
     ["Parallelschaltung", "Mehrere Wege, gleiche Spannung, Kehrwerte addieren sich."],
     ["Elektrische Leistung", "P = U · I, in Watt."],
     ["Kilowattstunde", "Energieeinheit der Stromrechnung, 1 kWh = 3,6 MJ."]]);

  I("phys-magnetism",
    "Ein Magnetfeld entsteht überall dort, wo Ladung fliesst. Der Magnet am Kühlschrank und die Spule im Elektromotor beruhen auf demselben Effekt.",
    "Magnetismus verbindet Elektrizität mit Bewegung und erklärt Motor, Generator und Transformator.",
    "Du brauchst den Strombegriff und ein räumliches Vorstellungsvermögen.",
    "Jeder elektrische Strom erzeugt ein Magnetfeld, und ein sich änderndes Magnetfeld erzeugt Spannung.",
    [["Magnetfeld", "Raum, in dem magnetische Kräfte wirken."],
     ["Feldlinien", "Darstellung von Richtung und Stärke des Feldes."],
     ["Elektromagnet", "Spule, deren Feld sich ein- und ausschalten lässt."],
     ["Induktion", "Spannungserzeugung durch Feldänderung."]]);

  I("phys-optics",
    "Licht breitet sich geradlinig aus, bis es auf eine Grenzfläche trifft. Dort wird es zurückgeworfen oder geknickt, und aus diesen zwei Regeln folgt die gesamte Optik.",
    "Spiegel, Linsen, Brechung und Auge sind ein eigener Prüfungsblock mit Zeichnungen und Rechnungen.",
    "Du brauchst Winkel, Strahlensätze und Trigonometrie.",
    "Reflexion wirft Licht zurück, Brechung knickt es beim Übergang in ein anderes Medium.",
    [["Reflexionsgesetz", "Einfallswinkel gleich Ausfallswinkel."],
     ["Brechung", "Richtungsänderung beim Medienwechsel."],
     ["Brennpunkt", "Punkt, in dem achsenparallele Strahlen gesammelt werden."],
     ["Brennweite f", "Abstand vom Linsenmittelpunkt zum Brennpunkt."],
     ["Totalreflexion", "Vollständige Rückwerfung ab dem Grenzwinkel."]]);
})();

/* Einführungsebene, Teil B: Chemie und Biologie. */
(function () {
  "use strict";
  var M = window.MNEMIKA;
  function I(id, lead, why, prereq, core, terms) {
    var c = M.chapter(id);
    if (!c) return;
    c.intro = { lead: lead, why: why, prereq: prereq, core: core, terms: terms || [] };
  }

  /* ---------------- Chemie ---------------- */
  I("chem-substances",
    "Bevor man Reaktionen versteht, muss klar sein, womit man es überhaupt zu tun hat. Luft, Salzwasser und Milch sehen einheitlich aus, sind aber Gemische, die sich wieder trennen lassen.",
    "Die Einteilung der Stoffe und die Trennverfahren sind die Grundlage jeder weiteren Chemie und werden in Materialaufgaben geprüft.",
    "Du brauchst keine Vorkenntnisse, nur Alltagsbeobachtungen wie Kochen, Filtern und Verdunsten.",
    "Ein Reinstoff hat feste Eigenschaften, ein Gemisch lässt sich mit physikalischen Verfahren wieder trennen.",
    [["Reinstoff", "Stoff mit einheitlicher Zusammensetzung und festen Kennwerten."],
     ["Element", "Reinstoff aus nur einer Atomsorte."],
     ["Verbindung", "Reinstoff aus mehreren Elementen in festem Verhältnis."],
     ["Gemisch", "Mehrere Reinstoffe nebeneinander, trennbar."],
     ["Destillation", "Trennung über unterschiedliche Siedepunkte."]]);

  I("chem-atoms-pse",
    "Alles besteht aus Atomen, und Atome bestehen aus einem winzigen Kern mit Protonen und Neutronen sowie einer Hülle aus Elektronen. Welches Element vorliegt, entscheidet allein die Protonenzahl.",
    "Das Periodensystem ist dein wichtigstes Hilfsmittel. Wer es lesen kann, leitet Bindungsverhalten und Reaktionen daraus ab, statt sie auswendig zu lernen.",
    "Du brauchst Grundrechnen und die Stoffbegriffe aus dem ersten Kapitel.",
    "Die Protonenzahl bestimmt das Element, die Aussenelektronen bestimmen das chemische Verhalten.",
    [["Proton", "Positiv geladenes Kernteilchen, seine Zahl definiert das Element."],
     ["Neutron", "Ungeladenes Kernteilchen, bestimmt das Isotop."],
     ["Elektron", "Negativ geladenes Hüllenteilchen."],
     ["Ordnungszahl", "Anzahl Protonen, Position im Periodensystem."],
     ["Isotop", "Gleiches Element, andere Neutronenzahl."]]);

  I("chem-shell-lewis",
    "Nicht alle Elektronen sind gleich wichtig. Nur die äussersten entscheiden, ob und wie ein Atom Bindungen eingeht. Die Lewis-Schreibweise macht genau diese sichtbar.",
    "Ohne Valenzelektronen lässt sich keine Formel begründen. Fast jede Bindungsaufgabe beginnt damit.",
    "Du brauchst Atombau und den Umgang mit dem Periodensystem.",
    "Atome streben eine volle Aussenschale an, meist acht Elektronen.",
    [["Valenzelektron", "Elektron der äussersten Schale."],
     ["Oktettregel", "Streben nach acht Aussenelektronen."],
     ["Lewis-Formel", "Schreibweise mit Punkten und Strichen für Elektronenpaare."],
     ["Bindendes Paar", "Elektronenpaar zwischen zwei Atomen."],
     ["Freies Paar", "Elektronenpaar, das an keiner Bindung beteiligt ist."]]);

  I("chem-covalent",
    "Wenn sich zwei Atome Elektronen teilen, entsteht eine gemeinsame Wolke, die beide zusammenhält. So entstehen Moleküle wie Wasser, Sauerstoff und Zucker.",
    "Molekülbau und Strukturformeln sind Voraussetzung für organische Chemie und für alle Fragen zur Stoffeigenschaft.",
    "Du brauchst Valenzelektronen und die Lewis-Schreibweise.",
    "Eine kovalente Bindung ist ein gemeinsam genutztes Elektronenpaar.",
    [["Kovalente Bindung", "Bindung durch gemeinsame Elektronenpaare."],
     ["Molekül", "Einheit aus kovalent gebundenen Atomen."],
     ["Doppelbindung", "Zwei gemeinsame Elektronenpaare."],
     ["Strukturformel", "Darstellung, welche Atome wie verbunden sind."],
     ["Skelettformel", "Vereinfachte Schreibweise der organischen Chemie."]]);

  I("chem-polarity-forces",
    "Nicht jedes Atom zieht gleich stark an gemeinsamen Elektronen. Aus diesem Ungleichgewicht entstehen Teilladungen, und daraus wiederum erklären sich Siedepunkte, Löslichkeit und warum Öl nicht mit Wasser mischt.",
    "Polarität erklärt mehr Alltagschemie als jedes andere Thema und ist deshalb ein beliebter Prüfungsgegenstand.",
    "Du brauchst kovalente Bindungen und das Periodensystem.",
    "Gleiches löst sich in Gleichem, weil polare Teilchen polare Nachbarn bevorzugen.",
    [["Elektronegativität", "Mass für die Anziehungskraft auf Bindungselektronen."],
     ["Dipol", "Molekül mit räumlich getrennten Teilladungen."],
     ["Wasserstoffbrücke", "Besonders starke Anziehung zwischen polaren Molekülen."],
     ["Van-der-Waals-Kraft", "Schwache Anziehung zwischen allen Teilchen."],
     ["Hydrophob", "Wassermeidend, typisch für unpolare Stoffe."]]);

  I("chem-ionic-metallic",
    "Manche Atome geben Elektronen ganz ab, andere nehmen sie auf. Es entstehen geladene Teilchen, die sich gegenseitig anziehen und ein starres Gitter bilden. Genau so ist Kochsalz aufgebaut.",
    "Salze, Metalle und ihre Eigenschaften wie Leitfähigkeit und Schmelzpunkt sind wiederkehrende Prüfungsfragen.",
    "Du brauchst Valenzelektronen und Elektronegativität.",
    "Grosse Elektronegativitätsunterschiede führen zur Ionenbindung, geringe bei Metallen zum Elektronengas.",
    [["Ion", "Geladenes Teilchen durch Abgabe oder Aufnahme von Elektronen."],
     ["Kation", "Positiv geladenes Ion."],
     ["Anion", "Negativ geladenes Ion."],
     ["Ionengitter", "Regelmässige Anordnung von Kationen und Anionen."],
     ["Elektronengas", "Frei bewegliche Elektronen im Metall."]]);

  I("chem-equations-mole",
    "Atome verschwinden bei einer Reaktion nicht, sie ordnen sich nur neu. Deshalb muss links und rechts der Gleichung von jeder Sorte gleich viel stehen. Das Mol ist dabei nur eine sehr grosse Stückzahl.",
    "Ohne Reaktionsgleichung und Mol lässt sich keine Chemieaufgabe rechnen. Das ist der zentrale Rechenblock des Fachs.",
    "Du brauchst Formelschreibweise und Dreisatz.",
    "Eine Reaktionsgleichung ist eine Bilanz: was hineingeht, muss herauskommen.",
    [["Stoffmenge n", "Anzahl Teilchen in Mol."],
     ["Molmasse M", "Masse eines Mols in g/mol."],
     ["Avogadro-Zahl", "Rund 6,022 · 10²³ Teilchen pro Mol."],
     ["Koeffizient", "Zahl vor der Formel beim Ausgleichen."],
     ["Massenerhaltung", "Gesamtmasse bleibt bei jeder Reaktion gleich."]]);

  I("chem-concentration-stoich",
    "Wenn du weisst, wie viel von einem Stoff reagiert, kannst du ausrechnen, wie viel Produkt entsteht. Die Koeffizienten der Gleichung sind dabei das Umrechnungsverhältnis.",
    "Stöchiometrie ist der rechnerische Kern der Chemieprüfung, oft kombiniert mit Konzentrationsangaben.",
    "Du brauchst Mol, Molmasse und Reaktionsgleichungen.",
    "Die Koeffizienten geben das Verhältnis der Stoffmengen an, nicht der Massen.",
    [["Konzentration c", "Stoffmenge pro Volumen in mol/l."],
     ["Stöchiometrie", "Mengenrechnung anhand der Reaktionsgleichung."],
     ["Limitierender Stoff", "Der Ausgangsstoff, der zuerst aufgebraucht ist."],
     ["Ausbeute", "Tatsächlich erhaltene Menge im Verhältnis zur theoretischen."]]);

  I("chem-energetics",
    "Jede Reaktion braucht zuerst Energie, um alte Bindungen zu lösen, und gibt Energie frei, wenn neue entstehen. Die Differenz entscheidet, ob es warm oder kalt wird.",
    "Energiediagramme lesen und Katalyse erklären sind typische Verständnisaufgaben.",
    "Du brauchst den Bindungsbegriff und Grundwissen zu Energie.",
    "Exotherm heisst, dass mehr Energie frei wird, als zum Start nötig war.",
    [["Exotherm", "Reaktion gibt Energie ab, Umgebung erwärmt sich."],
     ["Endotherm", "Reaktion nimmt Energie auf, Umgebung kühlt ab."],
     ["Aktivierungsenergie", "Energieschwelle, die zum Start überwunden werden muss."],
     ["Katalysator", "Senkt die Aktivierungsenergie, wird nicht verbraucht."]]);

  I("chem-acid-base",
    "Säuren geben Protonen ab, Basen nehmen sie auf. Der pH-Wert ist nur eine handliche Zahl dafür, wie viele freie Protonen in einer Lösung schwimmen.",
    "pH-Rechnungen, Neutralisation und Titration sind fester Prüfungsbestand und wichtig für Biologie und Alltag.",
    "Du brauchst Ionen, Konzentration und Logarithmen.",
    "Eine Säure ist ein Protonendonator, eine Base ein Protonenakzeptor.",
    [["Brønsted-Säure", "Teilchen, das ein Proton abgibt."],
     ["Brønsted-Base", "Teilchen, das ein Proton aufnimmt."],
     ["pH-Wert", "Negativer Zehnerlogarithmus der Oxoniumkonzentration."],
     ["Neutralisation", "Reaktion von Säure und Base zu Salz und Wasser."],
     ["Indikator", "Farbstoff, der den pH-Bereich anzeigt."]]);

  I("chem-redox",
    "Bei vielen Reaktionen werden nicht Protonen, sondern Elektronen übertragen. Rosten, Verbrennen und die Batterie im Handy sind alle derselbe Vorgang in verschiedenen Kleidern.",
    "Oxidationszahlen bestimmen und Redoxgleichungen ausgleichen sind anspruchsvolle, aber gut trainierbare Prüfungsaufgaben.",
    "Du brauchst Ionen, Ladungen und Reaktionsgleichungen.",
    "Oxidation ist Elektronenabgabe, Reduktion ist Elektronenaufnahme, beides passiert immer zusammen.",
    [["Oxidation", "Abgabe von Elektronen, Oxidationszahl steigt."],
     ["Reduktion", "Aufnahme von Elektronen, Oxidationszahl sinkt."],
     ["Oxidationsmittel", "Nimmt Elektronen auf und wird dabei reduziert."],
     ["Oxidationszahl", "Rechnerische Ladung eines Atoms in einer Verbindung."],
     ["Redoxpaar", "Zusammengehörige oxidierte und reduzierte Form."]]);

  I("chem-organic-groups",
    "Kohlenstoff kann vier Bindungen eingehen und mit sich selbst Ketten und Ringe bilden. Daraus entsteht die riesige Vielfalt organischer Stoffe, von Benzin bis zu deinem eigenen Erbgut.",
    "Stoffklassen erkennen und Eigenschaften daraus ableiten wird in fast jeder Chemieprüfung verlangt.",
    "Du brauchst kovalente Bindungen und Polarität.",
    "Die funktionelle Gruppe bestimmt die Eigenschaften, das Kohlenstoffgerüst nur die Grösse.",
    [["Funktionelle Gruppe", "Atomgruppe, die das chemische Verhalten prägt."],
     ["Alkan", "Gesättigter Kohlenwasserstoff, nur Einfachbindungen."],
     ["Alkohol", "Verbindung mit einer OH-Gruppe."],
     ["Carbonsäure", "Verbindung mit einer COOH-Gruppe."],
     ["Isomerie", "Gleiche Summenformel, unterschiedlicher Bau."]]);

  I("chem-organic-naming",
    "Damit weltweit dieselbe Substanz gemeint ist, gibt es feste Benennungsregeln. Der Name verrät dir Kettenlänge, Bindungsart und funktionelle Gruppe.",
    "Benennen und Strukturformeln zeichnen sind punktesichere Aufgaben, wenn die Regeln sitzen.",
    "Du brauchst Stoffklassen und Strukturformeln.",
    "Der Name folgt immer demselben Aufbau: Vorsilbe, Stammkette, Endung.",
    [["IUPAC", "Internationale Nomenklaturregeln."],
     ["Hauptkette", "Längste zusammenhängende Kohlenstoffkette."],
     ["Substituent", "Seitengruppe an der Hauptkette."],
     ["Endung", "Zeigt die funktionelle Gruppe an, etwa -ol oder -säure."]]);

  /* ---------------- Biologie ---------------- */
  I("bio-biomolecules",
    "Lebewesen bestehen im Wesentlichen aus vier Stoffklassen. Wer ihre Bausteine und Aufgaben kennt, versteht Ernährung, Zellbau und Vererbung als einen Zusammenhang statt als drei Themen.",
    "Diese Stoffklassen tauchen in jedem weiteren Biologiekapitel wieder auf.",
    "Du brauchst chemische Grundbegriffe wie Molekül und Bindung.",
    "Struktur bestimmt Funktion: der Bau eines Biomoleküls erklärt, wozu es dient.",
    [["Kohlenhydrat", "Energielieferant und Speicherstoff, Baustein Monosaccharid."],
     ["Lipid", "Fett, Energiespeicher und Membranbaustein."],
     ["Protein", "Kette aus Aminosäuren, wirkt als Enzym oder Baustoff."],
     ["Nukleinsäure", "DNA und RNA, Träger der Erbinformation."],
     ["Monomer", "Einzelbaustein eines grösseren Moleküls."]]);

  I("bio-enzymes",
    "Ohne Hilfe würden die meisten Reaktionen im Körper viel zu langsam ablaufen. Enzyme sind Proteine, die eine Reaktion beschleunigen, ohne sich selbst zu verbrauchen.",
    "Enzymdiagramme auswerten und Einflussfaktoren erklären sind klassische Prüfungsaufgaben.",
    "Du brauchst Proteine und Grundwissen zu Aktivierungsenergie.",
    "Enzyme senken die Aktivierungsenergie, verändern aber die Energiebilanz nicht.",
    [["Enzym", "Biologischer Katalysator aus Protein."],
     ["Substrat", "Stoff, an dem das Enzym arbeitet."],
     ["Aktives Zentrum", "Passgenaue Stelle, an der das Substrat bindet."],
     ["Denaturierung", "Zerstörung der räumlichen Struktur, meist durch Hitze oder pH."],
     ["Optimum", "Temperatur oder pH mit höchster Aktivität."]]);

  I("bio-cells",
    "Die Zelle ist die kleinste Einheit, die alle Merkmale des Lebens zeigt. In ihr sind Aufgaben auf Organellen verteilt wie Abteilungen in einem Betrieb.",
    "Organellen benennen genügt nicht, du musst ihre Funktion erklären. Genau das wird geprüft.",
    "Du brauchst die Biomoleküle aus dem vorherigen Kapitel.",
    "Jedes Organell hat eine Aufgabe, und die Aufgabe folgt aus seinem Bau.",
    [["Zellmembran", "Grenze der Zelle, steuert den Stoffaustausch."],
     ["Zellkern", "Enthält die DNA und steuert die Genaktivität."],
     ["Mitochondrium", "Ort der Zellatmung, liefert ATP."],
     ["Chloroplast", "Ort der Photosynthese, nur in Pflanzenzellen."],
     ["Ribosom", "Ort der Proteinherstellung."]]);

  I("bio-energy",
    "Pflanzen speichern Sonnenenergie in Zucker, alle anderen holen sie wieder heraus. Photosynthese und Zellatmung sind fast dieselbe Gleichung, nur in entgegengesetzter Richtung.",
    "Die beiden Wortgleichungen und ihre Orte in der Zelle werden fast sicher geprüft.",
    "Du brauchst Zellorganellen und den Energiebegriff.",
    "Photosynthese speichert Energie in Glucose, Zellatmung macht sie als ATP verfügbar.",
    [["Photosynthese", "CO₂ + Wasser + Licht ergibt Glucose + Sauerstoff."],
     ["Zellatmung", "Glucose + Sauerstoff ergibt CO₂ + Wasser + Energie."],
     ["ATP", "Universeller Energieträger der Zelle."],
     ["Chlorophyll", "Farbstoff, der Lichtenergie aufnimmt."],
     ["Calvin-Zyklus", "Einbau von CO₂ in energiereiche Verbindungen."]]);

  I("bio-membrane-transport",
    "Teilchen bewegen sich von selbst dorthin, wo weniger von ihnen sind. Will eine Zelle etwas in die andere Richtung transportieren, muss sie Energie aufwenden.",
    "Osmoseaufgaben mit Zellen in Salz- oder Süsswasser sind Standardprüfungsstoff.",
    "Du brauchst die Zellmembran und den Konzentrationsbegriff.",
    "Passiver Transport folgt dem Gefälle, aktiver Transport arbeitet dagegen und kostet ATP.",
    [["Diffusion", "Netto-Bewegung von hoher zu tiefer Konzentration."],
     ["Osmose", "Diffusion von Wasser durch eine selektiv durchlässige Membran."],
     ["Aktiver Transport", "Transport gegen das Gefälle, benötigt Energie."],
     ["Selektiv permeabel", "Nur für bestimmte Stoffe durchlässig."],
     ["Turgor", "Innendruck einer prall gefüllten Pflanzenzelle."]]);

  I("bio-cell-cycle-mitosis",
    "Damit aus einer Zelle zwei gleiche werden, muss zuerst die gesamte Erbinformation kopiert und danach exakt halbiert verteilt werden. Genau das leistet die Mitose.",
    "Phasen erkennen und den Unterschied zur Meiose erklären sind sichere Prüfungspunkte.",
    "Du brauchst den Zellkern und den DNA-Begriff.",
    "Mitose erzeugt zwei genetisch gleiche Tochterzellen.",
    [["Zellzyklus", "Abfolge aus G1, S, G2 und Teilung."],
     ["S-Phase", "Phase, in der die DNA verdoppelt wird."],
     ["Chromatid", "Eine der beiden identischen Hälften eines Chromosoms."],
     ["Mitose", "Kernteilung mit gleichen Tochterkernen."],
     ["Cytokinese", "Teilung des Zellplasmas."]]);

  I("bio-meiosis-karyotype",
    "Für die Fortpflanzung braucht es Zellen mit halbem Chromosomensatz, sonst würde sich die Erbinformation bei jeder Generation verdoppeln. Die Meiose leistet diese Halbierung und mischt dabei neu.",
    "Der Vergleich Mitose gegen Meiose und das Lesen eines Karyogramms sind häufige Aufgaben.",
    "Du brauchst Mitose und den Chromosomenbegriff.",
    "Meiose halbiert den Chromosomensatz und erzeugt genetische Vielfalt.",
    [["Haploid", "Einfacher Chromosomensatz, wie in Keimzellen."],
     ["Diploid", "Doppelter Chromosomensatz, wie in Körperzellen."],
     ["Homologe Chromosomen", "Paar aus mütterlichem und väterlichem Chromosom."],
     ["Crossing-over", "Austausch von Abschnitten zwischen homologen Chromosomen."],
     ["Karyogramm", "Geordnete Darstellung aller Chromosomen."]]);

  I("bio-mendel",
    "Lange bevor jemand DNA kannte, erkannte Mendel an Erbsen feste Zahlenverhältnisse in der Vererbung. Diese Verhältnisse gelten bis heute und lassen sich vorhersagen.",
    "Kreuzungsschemata und Verhältnisse berechnen gehören zum sicheren Prüfungsrepertoire.",
    "Du brauchst Meiose und Wahrscheinlichkeitsgrundlagen.",
    "Jedes Merkmal wird von zwei Allelen bestimmt, die bei der Keimzellbildung getrennt werden.",
    [["Gen", "Abschnitt der DNA mit einer Bauanleitung."],
     ["Allel", "Eine Variante eines Gens."],
     ["Genotyp", "Die vorhandene Allelkombination."],
     ["Phänotyp", "Das sichtbare Erscheinungsbild."],
     ["Dominant", "Allel, das sich im Phänotyp durchsetzt."]]);

  I("bio-dihybrid-sexlinked",
    "Sobald zwei Merkmale gleichzeitig betrachtet werden oder ein Gen auf dem X-Chromosom liegt, ändern sich die Verhältnisse. Söhne und Töchter sind dann unterschiedlich betroffen.",
    "Stammbaumanalysen und geschlechtsgekoppelte Erbgänge sind anspruchsvolle, aber lernbare Prüfungsaufgaben.",
    "Du brauchst die mendelschen Regeln.",
    "Auf dem X-Chromosom liegende Gene treffen Männer häufiger, weil ihnen das zweite X fehlt.",
    [["Dihybrid", "Kreuzung mit zwei betrachteten Merkmalen."],
     ["Gonosom", "Geschlechtschromosom X oder Y."],
     ["Konduktorin", "Trägerin eines rezessiven Allels ohne eigene Erkrankung."],
     ["Stammbaum", "Darstellung der Vererbung über mehrere Generationen."]]);

  I("bio-dna-replication",
    "Die DNA ist eine verdrillte Leiter, deren Sprossen immer nach demselben Muster gepaart sind. Genau deshalb lässt sie sich exakt kopieren: jede Hälfte enthält die vollständige Information.",
    "Aufbau und Replikation der DNA sind Voraussetzung für Proteinbiosynthese und Gentechnik.",
    "Du brauchst Nukleinsäuren und den Zellzyklus.",
    "Komplementäre Basenpaarung macht eine fehlerarme Verdopplung überhaupt erst möglich.",
    [["Nukleotid", "Baustein aus Zucker, Phosphat und Base."],
     ["Basenpaarung", "A zu T und G zu C."],
     ["Doppelhelix", "Verdrillte Doppelstrangstruktur der DNA."],
     ["Semikonservativ", "Jeder neue Doppelstrang enthält einen alten Strang."],
     ["Polymerase", "Enzym, das den neuen Strang aufbaut."]]);

  I("bio-protein-synthesis",
    "Die DNA bleibt im Zellkern, gebaut wird aber draussen. Also wird eine Arbeitskopie geschrieben, nach draussen gebracht und dort Wort für Wort in eine Aminosäurekette übersetzt.",
    "Transkription, Translation und das Lesen der Codesonne sind sichere Prüfungsinhalte.",
    "Du brauchst DNA-Aufbau und Proteine.",
    "Drei Basen codieren eine Aminosäure, und aus der Kette entsteht das fertige Protein.",
    [["Transkription", "Abschreiben eines DNA-Abschnitts in mRNA."],
     ["Translation", "Übersetzen der mRNA in eine Aminosäurekette."],
     ["Codon", "Basentriplett, das für eine Aminosäure steht."],
     ["tRNA", "Transportmolekül, bringt die passende Aminosäure."],
     ["Mutation", "Veränderung der DNA-Sequenz."]]);

  I("bio-digestion",
    "Nahrung ist zu gross, um direkt ins Blut zu gelangen. Verdauung heisst deshalb: mechanisch zerkleinern, chemisch zerlegen und erst dann aufnehmen.",
    "Der Weg der Nährstoffe und die zuständigen Enzyme werden regelmässig abgefragt.",
    "Du brauchst Biomoleküle und Enzyme.",
    "Jede Nährstoffklasse wird von eigenen Enzymen an einem bestimmten Ort zerlegt.",
    [["Enzymatische Spaltung", "Chemisches Zerlegen der Nährstoffe."],
     ["Zwölffingerdarm", "Erster Dünndarmabschnitt, Ort vieler Enzyme."],
     ["Zotten", "Ausstülpungen, die die Aufnahmefläche vergrössern."],
     ["Resorption", "Aufnahme der Bausteine ins Blut oder in die Lymphe."],
     ["Galle", "Emulgiert Fette, enthält aber keine Enzyme."]]);

  I("bio-respiration-circulation",
    "Sauerstoff muss zu jeder Zelle gelangen und Kohlenstoffdioxid wieder weg. Lunge und Kreislauf sind dafür ein einziges, aufeinander abgestimmtes Transportsystem.",
    "Bau und Funktion von Herz, Lunge und Blut sind fester Prüfungsstoff.",
    "Du brauchst Zellatmung und Diffusion.",
    "Der Gasaustausch beruht auf Diffusion über eine sehr grosse, sehr dünne Fläche.",
    [["Alveole", "Lungenbläschen, Ort des Gasaustauschs."],
     ["Hämoglobin", "Roter Blutfarbstoff, bindet Sauerstoff."],
     ["Lungenkreislauf", "Weg vom Herz zur Lunge und zurück."],
     ["Körperkreislauf", "Weg vom Herz zum Gewebe und zurück."],
     ["Arterie", "Gefäss, das vom Herzen wegführt."]]);

  I("bio-nervous-system",
    "Reize werden in elektrische Signale übersetzt, weitergeleitet und an Kontaktstellen chemisch übertragen. So wird aus einer Berührung eine Reaktion.",
    "Neuron, Synapse und Reflexbogen sind Standardstoff mit Zeichnungen und Erklärungsaufgaben.",
    "Du brauchst Zellbau und Membrantransport.",
    "Im Neuron ist das Signal elektrisch, an der Synapse wird es chemisch.",
    [["Neuron", "Nervenzelle mit Dendriten, Zellkörper und Axon."],
     ["Aktionspotential", "Kurzer elektrischer Impuls entlang des Axons."],
     ["Synapse", "Kontaktstelle zwischen zwei Nervenzellen."],
     ["Neurotransmitter", "Botenstoff, der das Signal chemisch überträgt."],
     ["Reflexbogen", "Schnelle Verschaltung ohne Umweg über das Gehirn."]]);

  I("bio-eye",
    "Das Auge ist eine Kamera aus biologischem Material: Linse, Blende und lichtempfindliche Schicht. Der eigentliche Seheindruck entsteht aber erst im Gehirn.",
    "Bau des Auges, Akkommodation und Fehlsichtigkeit verbinden Biologie mit Optik.",
    "Du brauchst Linsen und Brechung aus der Physik.",
    "Die Linse bündelt das Licht auf die Netzhaut, wo Sinneszellen es in Nervensignale umwandeln.",
    [["Netzhaut", "Schicht mit Stäbchen und Zapfen."],
     ["Akkommodation", "Anpassung der Linsenkrümmung an die Entfernung."],
     ["Stäbchen", "Sinneszellen für Helligkeit."],
     ["Zapfen", "Sinneszellen für Farbe."],
     ["Kurzsichtigkeit", "Bild entsteht vor der Netzhaut."]]);

  I("bio-ecology",
    "Kein Lebewesen existiert für sich. Ein Ökosystem ist ein Netz aus Organismen und Umweltbedingungen, in dem Stoffe kreisen und Energie hindurchfliesst.",
    "Nahrungsnetze, Stoffkreisläufe und Eingriffe des Menschen sind typische Materialaufgaben.",
    "Du brauchst Photosynthese und Zellatmung.",
    "Energie fliesst einmal hindurch und geht als Wärme verloren, Stoffe dagegen kreisen.",
    [["Biotop", "Der unbelebte Lebensraum."],
     ["Biozönose", "Die Lebensgemeinschaft darin."],
     ["Produzent", "Organismus, der Biomasse aus Licht aufbaut."],
     ["Destruent", "Organismus, der Totes zersetzt."],
     ["Trophieebene", "Stufe in der Nahrungskette."]]);

  I("bio-evolution",
    "Arten sind nicht unveränderlich. Innerhalb einer Population gibt es Unterschiede, und wer besser zur Umwelt passt, hinterlässt im Schnitt mehr Nachkommen. Über viele Generationen verändert das die Art.",
    "Der Vergleich Darwin gegen Lamarck und die Belege der Evolution werden fast immer geprüft.",
    "Du brauchst Genetik und Mutation.",
    "Variation entsteht zufällig, Selektion wirkt gerichtet.",
    [["Variation", "Natürliche Unterschiede innerhalb einer Population."],
     ["Selektion", "Ungleiche Fortpflanzungschancen je nach Merkmal."],
     ["Anpassung", "Merkmal, das den Fortpflanzungserfolg erhöht."],
     ["Homologie", "Ähnlichkeit durch gemeinsame Abstammung."],
     ["Analogie", "Ähnlichkeit durch gleiche Funktion ohne Verwandtschaft."]]);
})();