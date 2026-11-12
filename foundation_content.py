"""Original r179 foundation authoring. No scraped or licensed course text.
AI-assisted authoring; not independent expert approval or a CEFR certificate.
Columns: German support text, EN, FR, IT, ES, PT-PT, NL, SV, NB.
All examples are fictional. They are language examples, not live prices/timetables.
"""
LANGS=['en','fr','it','es']
NAMES={'en':'Englisch','fr':'Franz\u00f6sisch','it':'Italienisch','es':'Spanisch','pt':'Portugiesisch (Portugal)','nl':'Niederl\u00e4ndisch','sv':'Schwedisch','nb':'Norwegisch (Bokm\u00e5l)'}
TOPICS=[('greetings','Begr\u00fcssen und vorstellen'),('people','Menschen kennenlernen'),('numbers','Zahlen und Mengen'),('time','Zeit und Verabredungen'),('food','Im Caf\u00e9 bestellen'),('travel','Am Bahnhof'),('city','Den Weg finden'),('shopping','Im Gesch\u00e4ft'),('home','Zu Hause'),('school','Im Unterricht'),('work','Bei der Arbeit'),('feelings','Befinden und Bed\u00fcrfnisse')]
VOCAB='''
Hallo|hello|bonjour|ciao|hola|ol\u00e1|hallo|hej|hei
Auf Wiedersehen|goodbye|au revoir|arrivederci|adi\u00f3s|adeus|tot ziens|hej d\u00e5|ha det
bitte|please|s'il vous pla\u00eet|per favore|por favor|por favor|alstublieft|sn\u00e4lla|v\u00e6r s\u00e5 snill
danke|thank you|merci|grazie|gracias|obrigado / obrigada|dank je|tack|takk
ja|yes|oui|s\u00ec|s\u00ed|sim|ja|ja|ja
nein|no|non|no|no|n\u00e3o|nee|nej|nei
Entschuldigen Sie|excuse me|excusez-moi|mi scusi|disculpe|desculpe|pardon|urs\u00e4kta|unnskyld
Es tut mir leid|I am sorry|je suis d\u00e9sol\u00e9 / je suis d\u00e9sol\u00e9e|mi dispiace|lo siento|lamento|het spijt me|jag \u00e4r ledsen|jeg er lei for det
ich|I|je|io|yo|eu|ik|jag|jeg
du|you|tu|tu|t\u00fa|tu|jij|du|du
er|he|il|lui|\u00e9l|ele|hij|han|han
sie (Einzahl)|she|elle|lei|ella|ela|zij|hon|hun
wir|we|nous|noi|nosotros / nosotras|n\u00f3s|wij|vi|vi
sie (Mehrzahl)|they|ils / elles|loro|ellos / ellas|eles / elas|zij|de|de
der Freund|the friend|l'ami|l'amico|el amigo|o amigo|de vriend|v\u00e4nnen|vennen
die Person|the person|la personne|la persona|la persona|a pessoa|de persoon|personen|personen
eins|one|un|uno|uno|um|een|ett|ett
zwei|two|deux|due|dos|dois|twee|tv\u00e5|to
drei|three|trois|tre|tres|tr\u00eas|drie|tre|tre
vier|four|quatre|quattro|cuatro|quatro|vier|fyra|fire
f\u00fcnf|five|cinq|cinque|cinco|cinco|vijf|fem|fem
sechs|six|six|sei|seis|seis|zes|sex|seks
sieben|seven|sept|sette|siete|sete|zeven|sju|sju
acht|eight|huit|otto|ocho|oito|acht|\u00e5tta|\u00e5tte
heute|today|aujourd'hui|oggi|hoy|hoje|vandaag|i dag|i dag
morgen|tomorrow|demain|domani|ma\u00f1ana|amanh\u00e3|morgen|i morgon|i morgen
gestern|yesterday|hier|ieri|ayer|ontem|gisteren|i g\u00e5r|i g\u00e5r
jetzt|now|maintenant|adesso|ahora|agora|nu|nu|n\u00e5
der Morgen|the morning|le matin|la mattina|la ma\u00f1ana|a manh\u00e3|de ochtend|morgonen|morgenen
der Abend|the evening|le soir|la sera|la tarde|a noite|de avond|kv\u00e4llen|kvelden
der Tag|the day|le jour|il giorno|el d\u00eda|o dia|de dag|dagen|dagen
die Woche|the week|la semaine|la settimana|la semana|a semana|de week|veckan|uken
das Wasser|the water|l'eau|l'acqua|el agua|a \u00e1gua|het water|vattnet|vannet
das Brot|the bread|le pain|il pane|el pan|o p\u00e3o|het brood|br\u00f6det|br\u00f8det
die Milch|the milk|le lait|il latte|la leche|o leite|de melk|mj\u00f6lken|melken
der Kaffee|the coffee|le caf\u00e9|il caff\u00e8|el caf\u00e9|o caf\u00e9|de koffie|kaffet|kaffen
der Tee|the tea|le th\u00e9|il t\u00e8|el t\u00e9|o ch\u00e1|de thee|teet|teen
der Apfel|the apple|la pomme|la mela|la manzana|a ma\u00e7\u00e3|de appel|\u00e4pplet|eplet
der K\u00e4se|the cheese|le fromage|il formaggio|el queso|o queijo|de kaas|osten|osten
die Speisekarte|the menu|la carte|il men\u00f9|la carta|a ementa|de menukaart|menyn|menyen
der Zug|the train|le train|il treno|el tren|o comboio|de trein|t\u00e5get|toget
der Bus|the bus|le bus|l'autobus|el autob\u00fas|o autocarro|de bus|bussen|bussen
das Billett|the ticket|le billet|il biglietto|el billete|o bilhete|het kaartje|biljetten|billetten
der Bahnhof|the station|la gare|la stazione|la estaci\u00f3n|a esta\u00e7\u00e3o|het station|stationen|stasjonen
der Flughafen|the airport|l'a\u00e9roport|l'aeroporto|el aeropuerto|o aeroporto|de luchthaven|flygplatsen|flyplassen
das Gleis|the platform|la voie|il binario|la v\u00eda|a linha|het spoor|sp\u00e5ret|sporet
der Stadtplan|the street map|le plan de la ville|la pianta della citt\u00e0|el plano de la ciudad|o mapa da cidade|de stadsplattegrond|stadskartan|bykartet
der Koffer|the suitcase|la valise|la valigia|la maleta|a mala|de koffer|resv\u00e4skan|kofferten
links|left|\u00e0 gauche|a sinistra|a la izquierda|\u00e0 esquerda|links|till v\u00e4nster|til venstre
rechts|right|\u00e0 droite|a destra|a la derecha|\u00e0 direita|rechts|till h\u00f6ger|til h\u00f8yre
geradeaus|straight ahead|tout droit|dritto|todo recto|em frente|rechtdoor|rakt fram|rett frem
die Strasse|the street|la rue|la strada|la calle|a rua|de straat|gatan|gaten
die Bank (Geldinstitut)|the bank|la banque|la banca|el banco|o banco|de bank|banken|banken
das Museum|the museum|le mus\u00e9e|il museo|el museo|o museu|het museum|museet|museet
der Park|the park|le parc|il parco|el parque|o parque|het park|parken|parken
die Toilette|the toilet|les toilettes|il bagno|el ba\u00f1o|a casa de banho|het toilet|toaletten|toalettet
der Preis|the price|le prix|il prezzo|el precio|o pre\u00e7o|de prijs|priset|prisen
das Geld|the money|l'argent|il denaro|el dinero|o dinheiro|het geld|pengarna|pengene
die Quittung|the receipt|le re\u00e7u|la ricevuta|el recibo|o recibo|de kassabon|kvittot|kvitteringen
die Bankkarte|the bank card|la carte bancaire|la carta bancaria|la tarjeta bancaria|o cart\u00e3o banc\u00e1rio|de bankpas|bankkortet|bankkortet
Bargeld|cash|les esp\u00e8ces|i contanti|el efectivo|dinheiro|contant geld|kontanter|kontanter
die Gr\u00f6sse|the size|la taille|la taglia|la talla|o tamanho|de maat|storleken|st\u00f8rrelsen
die Tasche|the bag|le sac|la borsa|la bolsa|o saco|de tas|v\u00e4skan|vesken
das Gesch\u00e4ft|the shop|le magasin|il negozio|la tienda|a loja|de winkel|butiken|butikken
das Haus|the house|la maison|la casa|la casa|a casa|het huis|huset|huset
das Zimmer|the room|la chambre|la stanza|la habitaci\u00f3n|o quarto|de kamer|rummet|rommet
die T\u00fcr|the door|la porte|la porta|la puerta|a porta|de deur|d\u00f6rren|d\u00f8ren
das Fenster|the window|la fen\u00eatre|la finestra|la ventana|a janela|het raam|f\u00f6nstret|vinduet
der Tisch|the table|la table|il tavolo|la mesa|a mesa|de tafel|bordet|bordet
der Stuhl|the chair|la chaise|la sedia|la silla|a cadeira|de stoel|stolen|stolen
der Schl\u00fcssel|the key|la cl\u00e9|la chiave|la llave|a chave|de sleutel|nyckeln|n\u00f8kkelen
die K\u00fcche|the kitchen|la cuisine|la cucina|la cocina|a cozinha|de keuken|k\u00f6ket|kj\u00f8kkenet
das Buch|the book|le livre|il libro|el libro|o livro|het boek|boken|boken
der Kugelschreiber|the pen|le stylo|la penna|el bol\u00edgrafo|a caneta|de pen|pennan|pennen
die Frage|the question|la question|la domanda|la pregunta|a pergunta|de vraag|fr\u00e5gan|sp\u00f8rsm\u00e5let
die Antwort|the answer|la r\u00e9ponse|la risposta|la respuesta|a resposta|het antwoord|svaret|svaret
die Lehrperson|the teacher|le professeur|l'insegnante|el docente|o docente|de docent|l\u00e4raren|l\u00e6reren
der Sch\u00fcler|the pupil|l'\u00e9l\u00e8ve|l'alunno|el alumno|o aluno|de leerling|eleven|eleven
die Lektion|the lesson|la le\u00e7on|la lezione|la lecci\u00f3n|a aula|de les|lektionen|timen
die Sprache|the language|la langue|la lingua|el idioma|a l\u00edngua|de taal|spr\u00e5ket|spr\u00e5ket
die Arbeit|the work|le travail|il lavoro|el trabajo|o trabalho|het werk|arbetet|arbeidet
die Besprechung|the meeting|la r\u00e9union|la riunione|la reuni\u00f3n|a reuni\u00e3o|de vergadering|m\u00f6tet|m\u00f8tet
der Kollege|the colleague|le coll\u00e8gue|il collega|el compa\u00f1ero|o colega|de collega|kollegan|kollegaen
das B\u00fcro|the office|le bureau|l'ufficio|la oficina|o escrit\u00f3rio|het kantoor|kontoret|kontoret
die E-Mail|the email|le courriel|l'email|el correo electr\u00f3nico|o correio eletr\u00f3nico|de e-mail|e-postmeddelandet|e-posten
der Termin|the appointment|le rendez-vous|l'appuntamento|la cita|a marca\u00e7\u00e3o|de afspraak|den bokade tiden|avtalen
die Pause|the break|la pause|la pausa|la pausa|a pausa|de pauze|pausen|pausen
die Hilfe|the help|l'aide|l'aiuto|la ayuda|a ajuda|de hulp|hj\u00e4lpen|hjelpen
gl\u00fccklich|happy|heureux / heureuse|felice|feliz|feliz|gelukkig|glad|glad
traurig|sad|triste|triste|triste|triste|verdrietig|ledsen|trist
m\u00fcde|tired|fatigu\u00e9 / fatigu\u00e9e|stanco / stanca|cansado / cansada|cansado / cansada|moe|tr\u00f6tt|tr\u00f8tt
hungrig|hungry|avoir faim|avere fame|tener hambre|ter fome|hongerig|hungrig|sulten
durstig|thirsty|avoir soif|avere sete|tener sed|ter sede|dorstig|t\u00f6rstig|t\u00f8rst
bereit|ready|pr\u00eat / pr\u00eate|pronto / pronta|listo / lista|pronto / pronta|klaar|redo|klar
einfach (nicht schwierig)|easy|facile|facile|f\u00e1cil|f\u00e1cil|makkelijk|l\u00e4tt|lett
schwierig|difficult|difficile|difficile|dif\u00edcil|dif\u00edcil|moeilijk|sv\u00e5r|vanskelig
'''
# Four authored lines per situation; also used as sentence practice and dialogue.
SENTENCES='''
Hallo, ich heisse Anna.|Hello, my name is Anna.|Bonjour, je m'appelle Anna.|Ciao, mi chiamo Anna.|Hola, me llamo Anna.|Ol\u00e1, chamo-me Anna.|Hallo, ik heet Anna.|Hej, jag heter Anna.|Hei, jeg heter Anna.
Hallo, ich heisse Sam.|Hello, my name is Sam.|Bonjour, je m'appelle Sam.|Ciao, mi chiamo Sam.|Hola, me llamo Sam.|Ol\u00e1, chamo-me Sam.|Hallo, ik heet Sam.|Hej, jag heter Sam.|Hei, jeg heter Sam.
Freut mich, dich kennenzulernen.|Nice to meet you.|C'est un plaisir de faire ta connaissance.|Piacere di conoscerti.|Es un placer conocerte.|Prazer em conhecer-te.|Leuk je te ontmoeten.|Trevligt att tr\u00e4ffas.|Hyggelig \u00e5 m\u00f8te deg.
Mich freut es auch.|Nice to meet you too.|Moi aussi, je suis enchant\u00e9.|Anche per me \u00e8 un piacere.|Yo tambi\u00e9n estoy encantado.|O prazer \u00e9 meu.|Ik vind het ook leuk.|Detsamma.|I like m\u00e5te.
Wer ist das?|Who is this?|Qui est-ce ?|Chi \u00e8?|\u00bfQui\u00e9n es?|Quem \u00e9?|Wie is dit?|Vem \u00e4r det h\u00e4r?|Hvem er dette?
Das ist meine Freundin.|This is my friend.|C'est mon amie.|Questa \u00e8 la mia amica.|Esta es mi amiga.|Esta \u00e9 a minha amiga.|Dit is mijn vriendin.|Det h\u00e4r \u00e4r min v\u00e4n.|Dette er vennen min.
Ist sie Lehrerin?|Is she a teacher?|Est-elle professeure ?|\u00c8 un'insegnante?|\u00bfEs profesora?|Ela \u00e9 professora?|Is zij lerares?|\u00c4r hon l\u00e4rare?|Er hun l\u00e6rer?
Ja, sie ist Lehrerin.|Yes, she is a teacher.|Oui, elle est professeure.|S\u00ec, \u00e8 un'insegnante.|S\u00ed, es profesora.|Sim, ela \u00e9 professora.|Ja, zij is lerares.|Ja, hon \u00e4r l\u00e4rare.|Ja, hun er l\u00e6rer.
Wie viele Billette brauchst du?|How many tickets do you need?|De combien de billets as-tu besoin ?|Di quanti biglietti hai bisogno?|\u00bfCu\u00e1ntos billetes necesitas?|De quantos bilhetes precisas?|Hoeveel kaartjes heb je nodig?|Hur m\u00e5nga biljetter beh\u00f6ver du?|Hvor mange billetter trenger du?
Zwei Billette, bitte.|Two tickets, please.|Deux billets, s'il vous pla\u00eet.|Due biglietti, per favore.|Dos billetes, por favor.|Dois bilhetes, por favor.|Twee kaartjes, alstublieft.|Tv\u00e5 biljetter, tack.|To billetter, takk.
Zwei Billette kosten acht Euro.|Two tickets cost eight euros.|Deux billets co\u00fbtent huit euros.|Due biglietti costano otto euro.|Dos billetes cuestan ocho euros.|Dois bilhetes custam oito euros.|Twee kaartjes kosten acht euro.|Tv\u00e5 biljetter kostar \u00e5tta euro.|To billetter koster \u00e5tte euro.
Hier sind acht Euro.|Here are eight euros.|Voici huit euros.|Ecco otto euro.|Aqu\u00ed tiene ocho euros.|Aqui tem oito euros.|Hier is acht euro.|H\u00e4r \u00e4r \u00e5tta euro.|Her er \u00e5tte euro.
Ist die Lektion heute?|Is the lesson today?|Le cours est-il aujourd'hui ?|La lezione \u00e8 oggi?|\u00bfLa clase es hoy?|A aula \u00e9 hoje?|Is de les vandaag?|\u00c4r lektionen i dag?|Er timen i dag?
Nein, die Lektion ist morgen.|No, the lesson is tomorrow.|Non, le cours est demain.|No, la lezione \u00e8 domani.|No, la clase es ma\u00f1ana.|N\u00e3o, a aula \u00e9 amanh\u00e3.|Nee, de les is morgen.|Nej, lektionen \u00e4r i morgon.|Nei, timen er i morgen.
Am Morgen?|In the morning?|Le matin ?|La mattina?|\u00bfPor la ma\u00f1ana?|De manh\u00e3?|In de ochtend?|P\u00e5 morgonen?|Om morgenen?
Ja, um neun Uhr morgens.|Yes, at nine in the morning.|Oui, \u00e0 neuf heures du matin.|S\u00ec, alle nove del mattino.|S\u00ed, a las nueve de la ma\u00f1ana.|Sim, \u00e0s nove da manh\u00e3.|Ja, om negen uur 's ochtends.|Ja, klockan nio p\u00e5 morgonen.|Ja, klokken ni om morgenen.
Was m\u00f6chten Sie?|What would you like?|Que souhaitez-vous ?|Che cosa desidera?|\u00bfQu\u00e9 desea?|O que deseja?|Wat wilt u graag?|Vad vill du ha?|Hva vil du ha?
Brot und Wasser, bitte.|Bread and water, please.|Du pain et de l'eau, s'il vous pla\u00eet.|Pane e acqua, per favore.|Pan y agua, por favor.|P\u00e3o e \u00e1gua, por favor.|Brood en water, alstublieft.|Br\u00f6d och vatten, tack.|Br\u00f8d og vann, takk.
M\u00f6chten Sie auch Tee?|Would you like tea too?|Souhaitez-vous aussi du th\u00e9 ?|Desidera anche del t\u00e8?|\u00bfDesea tambi\u00e9n t\u00e9?|Tamb\u00e9m deseja ch\u00e1?|Wilt u ook thee?|Vill du ocks\u00e5 ha te?|Vil du ogs\u00e5 ha te?
Nein, danke.|No, thank you.|Non, merci.|No, grazie.|No, gracias.|N\u00e3o, obrigado.|Nee, dank u.|Nej, tack.|Nei, takk.
Wo ist der Zug?|Where is the train?|O\u00f9 est le train ?|Dov'\u00e8 il treno?|\u00bfD\u00f3nde est\u00e1 el tren?|Onde est\u00e1 o comboio?|Waar is de trein?|Var \u00e4r t\u00e5get?|Hvor er toget?
Auf Gleis drei.|At platform three.|Voie trois.|Al binario tre.|En la v\u00eda tres.|Na linha tr\u00eas.|Op spoor drie.|P\u00e5 sp\u00e5r tre.|P\u00e5 spor tre.
Ist das mein Billett?|Is this my ticket?|Est-ce mon billet ?|\u00c8 il mio biglietto?|\u00bfEs este mi billete?|Este \u00e9 o meu bilhete?|Is dit mijn kaartje?|\u00c4r det h\u00e4r min biljett?|Er dette billetten min?
Ja, das ist Ihr Billett.|Yes, this is your ticket.|Oui, c'est votre billet.|S\u00ec, \u00e8 il suo biglietto.|S\u00ed, este es su billete.|Sim, este \u00e9 o seu bilhete.|Ja, dit is uw kaartje.|Ja, det h\u00e4r \u00e4r din biljett.|Ja, dette er billetten din.
Wo ist das Museum?|Where is the museum?|O\u00f9 est le mus\u00e9e ?|Dov'\u00e8 il museo?|\u00bfD\u00f3nde est\u00e1 el museo?|Onde fica o museu?|Waar is het museum?|Var ligger museet?|Hvor ligger museet?
Gehen Sie geradeaus.|Go straight ahead.|Allez tout droit.|Vada dritto.|Siga todo recto.|Siga em frente.|Ga rechtdoor.|G\u00e5 rakt fram.|G\u00e5 rett frem.
Dann links?|Then left?|Puis \u00e0 gauche ?|Poi a sinistra?|\u00bfLuego a la izquierda?|Depois \u00e0 esquerda?|Dan links?|Sedan till v\u00e4nster?|S\u00e5 til venstre?
Ja, biegen Sie dann links ab.|Yes, then turn left.|Oui, puis tournez \u00e0 gauche.|S\u00ec, poi giri a sinistra.|S\u00ed, luego gire a la izquierda.|Sim, depois vire \u00e0 esquerda.|Ja, sla dan linksaf.|Ja, sv\u00e4ng sedan till v\u00e4nster.|Ja, ta s\u00e5 til venstre.
Wie viel kostet diese Tasche?|How much is this bag?|Combien co\u00fbte ce sac ?|Quanto costa questa borsa?|\u00bfCu\u00e1nto cuesta esta bolsa?|Quanto custa este saco?|Hoeveel kost deze tas?|Hur mycket kostar den h\u00e4r v\u00e4skan?|Hvor mye koster denne vesken?
Sie kostet f\u00fcnf Euro.|It costs five euros.|Il co\u00fbte cinq euros.|Costa cinque euro.|Cuesta cinco euros.|Custa cinco euros.|Hij kost vijf euro.|Den kostar fem euro.|Den koster fem euro.
Kann ich mit Karte bezahlen?|Can I pay by card?|Puis-je payer par carte ?|Posso pagare con la carta?|\u00bfPuedo pagar con tarjeta?|Posso pagar com cart\u00e3o?|Kan ik met de kaart betalen?|Kan jag betala med kort?|Kan jeg betale med kort?
Ja, Sie k\u00f6nnen mit Karte bezahlen.|Yes, you can pay by card.|Oui, vous pouvez payer par carte.|S\u00ec, pu\u00f2 pagare con la carta.|S\u00ed, puede pagar con tarjeta.|Sim, pode pagar com cart\u00e3o.|Ja, u kunt met de kaart betalen.|Ja, du kan betala med kort.|Ja, du kan betale med kort.
Wo ist der Schl\u00fcssel?|Where is the key?|O\u00f9 est la cl\u00e9 ?|Dov'\u00e8 la chiave?|\u00bfD\u00f3nde est\u00e1 la llave?|Onde est\u00e1 a chave?|Waar is de sleutel?|Var \u00e4r nyckeln?|Hvor er n\u00f8kkelen?
Der Schl\u00fcssel liegt auf dem Tisch.|The key is on the table.|La cl\u00e9 est sur la table.|La chiave \u00e8 sul tavolo.|La llave est\u00e1 en la mesa.|A chave est\u00e1 em cima da mesa.|De sleutel ligt op de tafel.|Nyckeln ligger p\u00e5 bordet.|N\u00f8kkelen ligger p\u00e5 bordet.
In der K\u00fcche?|In the kitchen?|Dans la cuisine ?|In cucina?|\u00bfEn la cocina?|Na cozinha?|In de keuken?|I k\u00f6ket?|P\u00e5 kj\u00f8kkenet?
Ja, in der K\u00fcche.|Yes, in the kitchen.|Oui, dans la cuisine.|S\u00ec, in cucina.|S\u00ed, en la cocina.|Sim, na cozinha.|Ja, in de keuken.|Ja, i k\u00f6ket.|Ja, p\u00e5 kj\u00f8kkenet.
Ich habe eine Frage.|I have a question.|J'ai une question.|Ho una domanda.|Tengo una pregunta.|Tenho uma pergunta.|Ik heb een vraag.|Jag har en fr\u00e5ga.|Jeg har et sp\u00f8rsm\u00e5l.
Bitte lies den Satz.|Please read the sentence.|Lis la phrase, s'il te pla\u00eet.|Leggi la frase, per favore.|Lee la frase, por favor.|L\u00ea a frase, por favor.|Lees de zin, alsjeblieft.|L\u00e4s meningen, tack.|Les setningen, er du snill.
Was bedeutet dieses Wort?|What does this word mean?|Que signifie ce mot ?|Che cosa significa questa parola?|\u00bfQu\u00e9 significa esta palabra?|O que significa esta palavra?|Wat betekent dit woord?|Vad betyder det h\u00e4r ordet?|Hva betyr dette ordet?
Es bedeutet Buch.|It means book.|Il signifie livre.|Significa libro.|Significa libro.|Significa livro.|Het betekent boek.|Det betyder bok.|Det betyr bok.
Wann ist die Besprechung?|When is the meeting?|Quand a lieu la r\u00e9union ?|Quando \u00e8 la riunione?|\u00bfCu\u00e1ndo es la reuni\u00f3n?|Quando \u00e9 a reuni\u00e3o?|Wanneer is de vergadering?|N\u00e4r \u00e4r m\u00f6tet?|N\u00e5r er m\u00f8tet?
Die Besprechung ist um zehn.|The meeting is at ten.|La r\u00e9union est \u00e0 dix heures.|La riunione \u00e8 alle dieci.|La reuni\u00f3n es a las diez.|A reuni\u00e3o \u00e9 \u00e0s dez.|De vergadering is om tien uur.|M\u00f6tet \u00e4r klockan tio.|M\u00f8tet er klokken ti.
Im B\u00fcro?|In the office?|Au bureau ?|In ufficio?|\u00bfEn la oficina?|No escrit\u00f3rio?|Op kantoor?|P\u00e5 kontoret?|P\u00e5 kontoret?
Ja, im B\u00fcro.|Yes, in the office.|Oui, au bureau.|S\u00ec, in ufficio.|S\u00ed, en la oficina.|Sim, no escrit\u00f3rio.|Ja, op kantoor.|Ja, p\u00e5 kontoret.|Ja, p\u00e5 kontoret.
Wie geht es dir?|How are you?|Comment vas-tu ?|Come stai?|\u00bfC\u00f3mo est\u00e1s?|Como est\u00e1s?|Hoe gaat het met je?|Hur m\u00e5r du?|Hvordan har du det?
Ich bin m\u00fcde und habe Durst.|I am tired and thirsty.|Je suis fatigu\u00e9 et j'ai soif.|Sono stanco e ho sete.|Estoy cansado y tengo sed.|Estou cansado e tenho sede.|Ik ben moe en ik heb dorst.|Jag \u00e4r tr\u00f6tt och t\u00f6rstig.|Jeg er tr\u00f8tt og t\u00f8rst.
M\u00f6chtest du Wasser?|Would you like water?|Veux-tu de l'eau ?|Vuoi dell'acqua?|\u00bfQuieres agua?|Queres \u00e1gua?|Wil je water?|Vill du ha vatten?|Vil du ha vann?
Ja, bitte.|Yes, please.|Oui, s'il te pla\u00eet.|S\u00ec, per favore.|S\u00ed, por favor.|Sim, por favor.|Ja, graag.|Ja, tack.|Ja, takk.
'''
# prompt, accepted model form, German explanation. Explicit, strict targets.
GRAMMAR={
'en':[
('I ___ Anna.','am','Bei I lautet die Form von be: am.'),('She ___ a teacher.','is','Bei she lautet die Form von be: is.'),('Two tickets ___ eight euros.','cost','Das Subjekt two tickets steht im Plural: cost.'),('The lesson ___ tomorrow.','is','The lesson ist Einzahl: is.'),('I would ___ water.','like','Die Wendung would like dr\u00fcckt einen Wunsch aus.'),('Where ___ the train?','is','The train ist Einzahl: Where is ...?'),('___ straight ahead.','Go','Die Aufforderung lautet Go straight ahead.'),('Can I ___ by card?','pay','Nach can steht die Grundform pay.'),('The key is ___ the table.','on','Auf einer Oberfl\u00e4che: on the table.'),('I ___ a question.','have','Bei I steht have.'),('The meeting is ___ ten.','at','Bei einer Uhrzeit steht at.'),('I am tired ___ thirsty.','and','And verbindet die beiden Eigenschaften.')],
'fr':[
('Je ___ Anna. (se nommer: s\u2019appeler)','m\u2019appelle','Je m\u2019appelle ist die Form f\u00fcr ich heisse.'),('Elle ___ professeure.','est','Bei elle lautet die Form von \u00eatre: est.'),('Deux billets ___ huit euros. (co\u00fbter)','co\u00fbtent','Bei einem Pluralsubjekt lautet die Form co\u00fbtent.'),('Le cours ___ demain. (\u00eatre)','est','Le cours ist Einzahl: est.'),('Je voudrais ___ eau. (de + article)','de l\u2019','Vor eau lautet der Teilungsartikel de l\u2019.'),('O\u00f9 ___ le train ? (\u00eatre)','est','Le train steht in der Einzahl.'),('Tournez ___ gauche.','\u00e0','Die feste Wendung lautet \u00e0 gauche.'),('Puis-je payer ___ carte ?','par','Mit Karte bezahlen: payer par carte.'),('La cl\u00e9 est ___ la table. (auf)','sur','Sur bedeutet hier auf.'),('J\u2019___ une question. (avoir)','ai','J\u2019ai bedeutet ich habe.'),('La r\u00e9union est ___ dix heures.','\u00e0','Bei der Uhrzeit steht \u00e0.'),('J\u2019ai ___. (Durst)','soif','Im Franz\u00f6sischen lautet die Wendung avoir soif.')],
'it':[
('Mi ___ Anna. (chiamarsi)','chiamo','Mi chiamo bedeutet ich heisse.'),('Lei ___ insegnante. (essere)','\u00e8','Die dritte Person von essere lautet \u00e8.'),('Due biglietti ___ otto euro. (costare)','costano','Bei due biglietti steht die Pluralform costano.'),('La lezione ___ domani. (essere)','\u00e8','La lezione ist Einzahl.'),('Pane ___ acqua, per favore. (und)','e','E ohne Akzent bedeutet und; \u00e8 mit Akzent bedeutet ist.'),('Dov\u2019___ il treno? (essere)','\u00e8','Dov\u2019\u00e8 bedeutet wo ist.'),('Giri a ___. (links)','sinistra','A sinistra bedeutet nach links.'),('Posso ___ con la carta? (pagare)','pagare','Nach posso steht der Infinitiv pagare.'),('La chiave \u00e8 ___ tavolo. (su + il)','sul','Su und il verschmelzen zu sul.'),('___ una domanda. (io, avere)','Ho','Die erste Person von avere lautet ho.'),('La riunione \u00e8 ___ dieci.','alle','Bei dieser Uhrzeit steht alle.'),('Ho ___. (Durst)','sete','Avere sete bedeutet Durst haben.')],
'es':[
('Me ___ Anna. (llamarse)','llamo','Me llamo bedeutet ich heisse.'),('Ella ___ profesora. (ser)','es','Bei ella lautet die Form von ser: es.'),('Dos billetes ___ ocho euros. (costar)','cuestan','Bei dos billetes steht die Pluralform cuestan.'),('La clase es ___. (morgen)','ma\u00f1ana','Ma\u00f1ana ohne Artikel bedeutet hier morgen.'),('Pan ___ agua, por favor. (und)','y','Y verbindet die beiden W\u00f6rter.'),('\u00bfD\u00f3nde ___ el tren? (estar)','est\u00e1','Bei einer Ortsangabe steht hier estar: est\u00e1.'),('Gire a la ___. (links)','izquierda','A la izquierda bedeutet nach links.'),('\u00bfPuedo ___ con tarjeta? (pagar)','pagar','Nach puedo steht der Infinitiv pagar.'),('La llave est\u00e1 ___ la mesa. (auf)','en','En la mesa bedeutet hier auf dem Tisch.'),('___ una pregunta. (yo, tener)','Tengo','Die erste Person von tener lautet tengo.'),('La reuni\u00f3n es ___ las diez.','a','Bei dieser Uhrzeit steht a las.'),('Tengo ___. (Durst)','sed','Tener sed bedeutet Durst haben.')],
'pt':[
('___ Anna. (eu, chamar-se)','Chamo-me','Chamo-me ist eine europ\u00e4isch-portugiesische Form f\u00fcr ich heisse.'),('Ela ___ professora. (ser)','\u00e9','Bei ela lautet die Form von ser: \u00e9.'),('Dois bilhetes ___ oito euros. (custar)','custam','Dois bilhetes verlangt die Pluralform custam.'),('A aula \u00e9 ___. (morgen)','amanh\u00e3','Amanh\u00e3 bedeutet morgen.'),('P\u00e3o ___ \u00e1gua. (und)','e','E bedeutet und; \u00e9 bedeutet ist.'),('Onde ___ o comboio? (estar)','est\u00e1','Hier wird nach einem Standort gefragt: est\u00e1.'),('Vire \u00e0 ___. (links)','esquerda','\u00c0 esquerda bedeutet nach links.'),('Posso ___ com cart\u00e3o? (pagar)','pagar','Nach posso steht der Infinitiv pagar.'),('A chave est\u00e1 em cima ___ mesa. (de + a)','da','De und a verschmelzen zu da.'),('___ uma pergunta. (eu, ter)','Tenho','Die erste Person von ter lautet tenho.'),('A reuni\u00e3o \u00e9 ___ dez.','\u00e0s','Bei dieser Uhrzeit steht \u00e0s.'),('Tenho ___. (Durst)','sede','Ter sede bedeutet Durst haben.')],
'nl':[
('Ik ___ Anna. (heten)','heet','Bei ik lautet die Form von heten: heet.'),('Zij ___ lerares. (zijn)','is','Bei zij in der Einzahl lautet die Form is.'),('Twee kaartjes ___ acht euro. (kosten)','kosten','Twee kaartjes ist Plural: kosten.'),('De les is ___. (morgen)','morgen','Morgen bedeutet hier morgen.'),('Brood ___ water. (und)','en','En verbindet die beiden W\u00f6rter.'),('Waar ___ de trein? (zijn)','is','De trein ist Einzahl: is.'),('Ga ___. (geradeaus)','rechtdoor','Ga rechtdoor bedeutet geh geradeaus.'),('Kan ik met de kaart ___? (bezahlen)','betalen','Nach kan steht der Infinitiv hier am Satzende.'),('De sleutel ligt ___ de tafel. (auf)','op','Op de tafel bedeutet auf dem Tisch.'),('Ik ___ een vraag. (hebben)','heb','Bei ik steht heb.'),('De vergadering is ___ tien uur.','om','Bei dieser Uhrzeit steht om.'),('Ik heb ___. (Durst)','dorst','Dorst hebben bedeutet Durst haben.')],
'sv':[
('Jag ___ Anna. (heissen)','heter','Jag heter bedeutet ich heisse.'),('Hon ___ l\u00e4rare. (sein)','\u00e4r','\u00c4r ist die Pr\u00e4sensform von vara.'),('Tv\u00e5 biljetter ___ \u00e5tta euro. (kosten)','kostar','Kostar ist die Pr\u00e4sensform; sie \u00e4ndert sich nicht mit der Person.'),('Lektionen \u00e4r i ___. (morgen)','morgon','I morgon bedeutet morgen.'),('Br\u00f6d ___ vatten. (und)','och','Och bedeutet und.'),('Var ___ t\u00e5get? (sein)','\u00e4r','Var \u00e4r ...? fragt nach dem Ort.'),('G\u00e5 rakt ___. (geradeaus)','fram','Rakt fram bedeutet geradeaus.'),('Kan jag ___ med kort? (bezahlen)','betala','Nach kan steht der Infinitiv betala.'),('Nyckeln ligger ___ bordet. (auf)','p\u00e5','P\u00e5 bordet bedeutet auf dem Tisch.'),('Jag ___ en fr\u00e5ga. (haben)','har','Har ist die Pr\u00e4sensform von ha.'),('M\u00f6tet \u00e4r ___ tio. (Uhr)','klockan','Klockan tio bedeutet um zehn Uhr.'),('Jag \u00e4r ___. (durstig)','t\u00f6rstig','T\u00f6rstig bedeutet durstig.')],
'nb':[
('Jeg ___ Anna. (heissen)','heter','Jeg heter bedeutet ich heisse.'),('Hun ___ l\u00e6rer. (sein)','er','Er ist die Pr\u00e4sensform von v\u00e6re.'),('To billetter ___ \u00e5tte euro. (kosten)','koster','Koster ist die Pr\u00e4sensform und bleibt bei allen Personen gleich.'),('Timen er i ___. (morgen)','morgen','I morgen bedeutet morgen.'),('Br\u00f8d ___ vann. (und)','og','Og bedeutet und.'),('Hvor ___ toget? (sein)','er','Hvor er ...? fragt nach dem Ort.'),('G\u00e5 rett ___. (geradeaus)','frem','Rett frem bedeutet geradeaus; fram ist ebenfalls gebr\u00e4uchlich.'),('Kan jeg ___ med kort? (bezahlen)','betale','Nach kan steht der Infinitiv betale.'),('N\u00f8kkelen ligger ___ bordet. (auf)','p\u00e5','P\u00e5 bordet bedeutet auf dem Tisch.'),('Jeg ___ et sp\u00f8rsm\u00e5l. (haben)','har','Har ist die Pr\u00e4sensform von ha.'),('M\u00f8tet er ___ ti. (Uhr)','klokken','Klokken ti bedeutet um zehn Uhr; klokka ist ebenfalls gebr\u00e4uchlich.'),('Jeg er ___. (durstig)','t\u00f8rst','T\u00f8rst bedeutet durstig.')]
}
# Exact context questions for the dialogues. No fabricated speech recognition.
QUESTIONS=[
('Wie heisst die erste Person?','Anna.',['Sam.','Alex.'],'Die erste Zeile nennt Anna.'),
('Welchen Beruf hat die Freundin?','Lehrerin.',['Pilotin.','Verk\u00e4uferin.'],'Der Dialog sagt ausdr\u00fccklich Lehrerin.'),
('Wie viele Billette werden bestellt?','Zwei.',['Drei.','Acht.'],'Zwei Billette, nicht acht; acht ist der Beispielpreis.'),
('Wann findet die Lektion statt?','Morgen um neun.',['Heute um neun.','Morgen um zehn.'],'Die Antworten nennen morgen und neun Uhr.'),
('Was wird bestellt?','Brot und Wasser.',['Brot und Tee.','Kaffee und Milch.'],'Tee wird ausdr\u00fccklich abgelehnt.'),
('Auf welchem Gleis steht der Zug?','Gleis drei.',['Gleis zwei.','Gleis acht.'],'Die Antwort nennt Gleis drei.'),
('Wie geht es zum Museum?','Geradeaus, dann links.',['Geradeaus, dann rechts.','Direkt nach rechts.'],'Im Dialog folgen geradeaus und links aufeinander.'),
('Wie kann die Person bezahlen?','Mit Karte.',['Nur bar.','Nur per Rechnung.'],'Kartenzahlung wird ausdr\u00fccklich erlaubt.'),
('Wo liegt der Schl\u00fcssel?','Auf dem Tisch in der K\u00fcche.',['Auf dem Stuhl im B\u00fcro.','Neben der T\u00fcr.'],'Der Dialog nennt Tisch und K\u00fcche.'),
('Was bedeutet das gesuchte Wort?','Buch.',['Frage.','Antwort.'],'Die letzte Zeile nennt die Bedeutung Buch.'),
('Wann ist die Besprechung?','Um zehn.',['Um neun.','Um acht.'],'Die Besprechung ist im Beispiel um zehn.'),
('Wie f\u00fchlt sich die zweite Person?','M\u00fcde und durstig.',['Traurig und hungrig.','Bereit und gl\u00fccklich.'],'Die Person nennt M\u00fcdigkeit und Durst.')]

def rows(text,n):
    a=[x.split('|') for x in text.strip().splitlines()]
    assert len(a)==n,(len(a),n)
    assert all(len(x)==9 for x in a)
    return a

def authored():
    vv,ss=rows(VOCAB,96),rows(SENTENCES,48)
    out={}
    for ci,l in enumerate(LANGS,1):
        bank={k:[] for k in 'vsgd'}; units=[]
        for ti,(topic,title) in enumerate(TOPICS):
            base=f'{l}-r179-a1-{topic}'; vids=[];sids=[]
            prov={'kind':'original-ai-assisted','revision':'r179','humanReview':'pending','licence':'operator-authored-review-required','source':'foundation_content.py','exampleOnly':True}
            for j,row in enumerate(vv[ti*8:ti*8+8]):
                q={'id':f'{l}-v-r179-{ti:02d}-{j}','w':row[ci],'de':row[0],'lvl':'A1','topic':topic,'provenance':prov}
                # Explicit accepted surface forms rather than a slash string as the sole answer.
                q['accept']=[x.strip() for x in q['w'].split(' / ')]
                if l=='fr' and q['w']=="l'ami":q['accept'].append('ami')
                bank['v'].append(q);vids.append(q['id'])
            turns=[]
            for j,row in enumerate(ss[ti*4:ti*4+4]):
                q={'id':f'{l}-s-r179-{ti:02d}-{j}','s':row[ci],'de':row[0],'lvl':'A1','topic':topic,'provenance':prov}
                bank['s'].append(q);sids.append(q['id']);turns.append({'who':'A' if j%2==0 else 'B','s':row[ci],'de':row[0]})
            prompt,answer,why=GRAMMAR[l][ti];g={'id':f'{l}-g-r179-{ti:02d}','type':'gap','prompt':prompt,'answer':answer,'accept':[answer.replace('\u2019',"'")],'why':why,'lvl':'A1','topic':topic,'provenance':prov}
            if l=='nb' and ti==6:g['accept'].append('fram')
            if l=='nb' and ti==10:g['accept'].append('klokka')
            bank['g'].append(g)
            qp,ans,distr,why=QUESTIONS[ti]
            # Rotate the key deterministically; no always-first correct answer.
            opts=distr[:];key=(ti+ci)%3;opts.insert(key,ans)
            q={'prompt':qp,'options':opts,'answer':ans,'answer_index':key,'why':[why if o==ans else 'Pr\u00fcfe die genannten Angaben im Dialog.' for o in opts]}
            d={'id':f'{l}-d-r179-{ti:02d}','title_de':title,'situation_de':'Ein erfundenes Alltagsgespr\u00e4ch zum Mitlesen und selbst Sprechen. Zahlen und Preise sind nur Beispiele.','turns':turns,'questions':[q],'lvl':'A1','topic':topic,'provenance':prov}
            bank['d'].append(d)
            units.extend([
              {'id':base+'-words','level':'A1','topic':topic,'title':title+': W\u00f6rter','ziel':'Die acht W\u00f6rter in beide Richtungen verstehen und die Schreibweise \u00fcben.','ids':vids,'skills':['vocabulary','recall'],'track':'foundation','review':'original-ai-assisted','order':ti*2},
              {'id':base+'-use','level':'A1','topic':topic,'title':title+': anwenden','ziel':'Vier Modells\u00e4tze verstehen, eine Form einsetzen und das Gespr\u00e4ch selbst sprechen.','ids':sids+[g['id'],d['id']],'skills':['sentences','grammar','dialogue','listening'],'track':'foundation','review':'original-ai-assisted','order':ti*2+1}
            ])
        out[l]={'bank':bank,'units':units}
    return out
if __name__=='__main__':
    import json
    a=authored();print(json.dumps({l:{'records':sum(map(len,x['bank'].values())),'units':len(x['units'])} for l,x in a.items()},indent=2))
