"""r202: /lehrpersonen/ (Klassenlinks, Ergebnis-Codes) and the SBFI past-paper box on exam-path pages. Deterministic."""
import re,sys,html,json
from pathlib import Path
R=Path(sys.argv[1]);E=html.escape
subj={}
for f in ['app-03.js','app-10.js']:
    s=(R/'assets/runtime'/f).read_text()
    for k,l in re.findall(r'\b([a-z][a-z-]*)\s*:\s*\{\s*label:\s*"([^"]+)"',s):subj.setdefault(k,l)
    i=s.find('SUBJECTS={')
    if i>=0:
        d=0
        for j in range(i+9,len(s)):
            d+=s[j]=='{';d-=s[j]=='}'
            if d==0:break
        for k,v in json.loads(s[i+9:j+1]).items():subj.setdefault(k,v['label'])
subj.pop('passing',None)
assert 'math' in subj and len(subj)>=15,subj
tpl=(R/'lernqualitaet/index.html').read_text()
head,rest=tpl.split('<main',1);foot=rest[rest.index('</main>'):]
T='Für Lehrpersonen: Klassenlinks und Ergebnis-Codes';D='Übungslinks für die Klasse erstellen und Ergebnisse ohne Konto und ohne Datenspeicherung auswerten.'
head=re.sub(r'<title>.*?</title>','<title>'+E(T)+' | Stoffknacker</title>',head)
head=re.sub(r'(<meta name="description" content=")[^"]*','\\g<1>'+E(D),head)
head=head.replace('https://stoffknacker.com/lernqualitaet/','https://stoffknacker.com/lehrpersonen/')
head=re.sub(r'("name": ")[^"]*(", "description": ")[^"]*',lambda m:m.group(1)+T+m.group(2)+D,head)
head=re.sub(r'(og:title" content=")[^"]*','\\g<1>'+E(T)+' | Stoffknacker',head)
head=re.sub(r'(og:description" content=")[^"]*','\\g<1>'+E(D),head)
opts=''.join('<option value="%s">%s</option>'%(E(k),E(v)) for k,v in sorted(subj.items(),key=lambda x:x[1]))
SBFI=[('Ergänzungsprüfung Passerelle','https://www.sbfi.admin.ch/de/antragsformular-fuer-den-zugang-zu-frueheren-aufgaben-der-ergaenzungspruefung-passerelle'),
 ('Schweizerische Maturitätsprüfung','https://www.sbfi.admin.ch/de/antragsformular-fuer-den-zugang-zu-frueheren-aufgaben-der-schweizerischen-maturitaetspruefung'),
 ('Eidgenössische Berufsmaturitätsprüfung','https://www.sbfi.admin.ch/de/antragsformular-fuer-den-zugang-zu-frueheren-aufgaben-der-eidgenoessischen-berufsmaturitaetspruefung')]
main='''<style>#inhalt form p,#inhalt section p{max-width:44rem}#inhalt input,#inhalt select,#inhalt textarea{font:inherit;padding:10px 12px;border:1px solid #8a94a3;border-radius:10px;width:100%;max-width:32rem;box-sizing:border-box;background:transparent;color:inherit}#inhalt textarea{max-width:100%}#inhalt button{font:inherit;font-weight:700;padding:11px 16px;border-radius:12px;border:0;background:#1f6feb;color:#fff;cursor:pointer}#inhalt button:focus-visible,#inhalt input:focus-visible,#inhalt select:focus-visible,#inhalt textarea:focus-visible{outline:3px solid #f2b705;outline-offset:2px}#skl-link{display:block;word-break:break-all;padding:10px 12px;border:1px dashed #8a94a3;border-radius:10px}#skl-link:empty{display:none}#skl-fehler{color:#c8102e;font-weight:600}#skl-tabelle table{border-collapse:collapse;min-width:520px}#skl-tabelle th,#skl-tabelle td{padding:8px 10px;border-bottom:1px solid #c9d0d8;text-align:left}#skl-tabelle td:nth-child(4){font-variant-numeric:tabular-nums;font-weight:700}</style><main id="inhalt"><nav class="crumb" aria-label="Pfad"><a href="/">Start</a> / <a href="/lehrpersonen/">Für Lehrpersonen</a></nav><article><h1>Für Lehrpersonen</h1>
<p class="lead">Übungen für die Klasse verlinken und die Ergebnisse einsammeln, ohne Konten, ohne Anmeldung und ohne dass Stoffknacker Daten der Lernenden speichert.</p>
<section><h2>So funktioniert es</h2><ol><li>Sie erstellen unten einen Link mit dem Namen Ihrer Klasse und senden ihn der Klasse.</li><li>Die Lernenden üben. Am Ende zeigt ihr Gerät einen Ergebnis-Code, den sie selbst kopieren und Ihnen schicken, zum Beispiel per Mail oder Klassenchat.</li><li>Sie fügen die Codes unten ein und sehen die Ergebnisse als Tabelle. Die Auswertung läuft nur in Ihrem Browser.</li></ol>
<p>Der Code enthält Klasse, Aufgabe, Ergebnis in Prozent, Datum und, wenn die lernende Person es eintippt, einen Vornamen oder ein Kürzel. Es sind Übungsresultate, keine amtlichen Noten.</p></section>
<section><h2>1. Link für die Klasse</h2><form id="skl-form" novalidate>
<p><label for="skl-klasse">Klasse oder Gruppe</label><br><input id="skl-klasse" maxlength="40" placeholder="z. B. BM1 3a Mathe" required></p>
<p><label for="skl-art">Übung</label><br><select id="skl-art"><option value="pruefung">Prüfungsvorbereitung: 15 Aufgaben aus einem Fach</option><option value="uebung">Kapitel üben: Aufgaben aus einem Kapitel</option><option value="chaptertest">Kapiteltest</option></select></p>
<p id="skl-fach-p"><label for="skl-fach">Fach</label><br><select id="skl-fach">'''+opts+'''</select></p>
<p id="skl-kap-p" hidden><label for="skl-kap">Kapitel: Adresse der Kapitelseite oder Kapitel-ID</label><br><input id="skl-kap" placeholder="https://stoffknacker.com/lernen/biologie/bio-cells/"></p>
<p id="skl-n-p" hidden><label for="skl-n">Anzahl Aufgaben (1 bis 30)</label><br><input id="skl-n" type="number" min="1" max="30" value="10"></p>
<p><button type="submit">Link erstellen</button></p><p id="skl-fehler" role="alert"></p>
<p><output id="skl-link" for="skl-klasse skl-art skl-fach skl-kap skl-n"></output></p><p><button type="button" id="skl-copy" hidden>Link kopieren</button> <span id="skl-ok" aria-live="polite"></span></p></form></section>
<section><h2>2. Ergebnis-Codes auswerten</h2><p><label for="skl-codes">Codes einfügen, einer pro Zeile oder beliebig getrennt</label><br><textarea id="skl-codes" rows="6" style="width:100%"></textarea></p>
<p><button type="button" id="skl-auswerten">Auswerten</button> <button type="button" id="skl-tsv" hidden>Tabelle kopieren</button> <span id="skl-tok" aria-live="polite"></span></p><div id="skl-tabelle" style="overflow-x:auto"></div></section>
<section><h2>Frühere Prüfungsaufgaben</h2><p>Das SBFI gibt frühere Aufgaben der eidgenössischen Prüfungen auf Antrag an Lehrpersonen, Schulen und Kandidierende ab. Sie sind urheberrechtlich geschützt und passwortgeschützt; Stoffknacker veröffentlicht sie deshalb nicht.</p><ul>'''+''.join('<li><a href="%s" rel="noopener">%s: Zugang beim SBFI beantragen</a></li>'%(u,E(n)) for n,u in SBFI)+'''</ul></section>
<section><h2>Weitere Links</h2><p>Auf jeder Kapitelseite in der App führt «Link für Lehrpersonen» zu Lektion, Übung und Kapiteltest. Fehler im Inhalt melden Sie über die Angaben im <a href="/impressum/">Impressum</a>; nennen Sie dabei die Kapitel-ID.</p></section>
</article></main>'''
js='''<script>
(function(){"use strict";var $=function(i){return document.getElementById(i);};
function clean(s,n){return String(s||"").replace(/[<>"'`\\\\]/g,"").replace(/\\s+/g," ").trim().slice(0,n);}
function art(){var a=$("skl-art").value;$("skl-fach-p").hidden=a!=="pruefung";$("skl-kap-p").hidden=a==="pruefung";$("skl-n-p").hidden=a!=="uebung";}
$("skl-art").addEventListener("change",art);art();
function kap(v){v=String(v||"").trim();var m=v.match(/lernen\\/[^\\/]+\\/([A-Za-z0-9._-]+)/);if(m)return m[1];m=v.match(/^[A-Za-z0-9._-]+$/);return m?v:"";}
$("skl-form").addEventListener("submit",function(e){e.preventDefault();var k=clean($("skl-klasse").value,40),a=$("skl-art").value,f=$("skl-fehler"),h;f.textContent="";
 if(!k){f.textContent="Bitte einen Klassennamen eingeben.";$("skl-klasse").focus();return;}
 if(a==="pruefung")h="pruefung/"+encodeURIComponent($("skl-fach").value);else{var c=kap($("skl-kap").value);if(!c){f.textContent="Bitte die Adresse einer Kapitelseite oder eine Kapitel-ID eingeben.";$("skl-kap").focus();return;}
  h=a==="uebung"?"uebung/"+encodeURIComponent(c)+"/"+Math.min(30,Math.max(1,parseInt($("skl-n").value,10)||10)):"chaptertest/"+encodeURIComponent(c);}
 var u="https://stoffknacker.com/?klasse="+encodeURIComponent(k)+"#"+h;$("skl-link").textContent=u;$("skl-copy").hidden=false;$("skl-ok").textContent="";});
function kopie(t,el,msg){if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(t).then(function(){el.textContent=msg;},function(){el.textContent="Bitte markieren und von Hand kopieren.";});else el.textContent="Bitte markieren und von Hand kopieren.";}
$("skl-copy").addEventListener("click",function(){kopie($("skl-link").textContent,$("skl-ok"),"Kopiert.");});
function pruef(s){var h=7;for(var i=0;i<s.length;i++)h=(h*31+s.charCodeAt(i))%1679616;return h.toString(36).toUpperCase();}
function lies(c){var m=c.match(/^SK1-([A-Za-z0-9_-]+)-([0-9A-Z]+)$/);if(!m||pruef(m[1])!==m[2])return null;try{var b=m[1].replace(/-/g,"+").replace(/_/g,"/");while(b.length%4)b+="=";var d=JSON.parse(decodeURIComponent(escape(atob(b))));return d&&d.v===1?d:null;}catch(e){return null;}}
var FACH='''+json.dumps(subj,ensure_ascii=False)+''';function uebung(l){var x=String(l||'').split('/');if(x[0]==='pruefung')return 'Prüfungsvorbereitung '+(FACH[x[1]]||x[1]||'');if(x[0]==='uebung')return 'Kapitel '+(x[1]||'')+(x[2]?', '+x[2]+' Aufgaben':'');if(x[0]==='chaptertest')return 'Kapiteltest '+(x[1]||'');return l||'Freie Übung';}
var zeilen=[];
$("skl-auswerten").addEventListener("click",function(){var roh=$("skl-codes").value.match(/SK1-[A-Za-z0-9_-]+-[0-9A-Z]+/g)||[],ok=[],bad=0,seen={};
 roh.forEach(function(c){if(seen[c])return;seen[c]=1;var d=lies(c);if(d)ok.push(d);else bad++;});
 var t=$("skl-tabelle");t.textContent="";zeilen=[["Name","Klasse","Übung","Ergebnis %","Datum"]];
 if(!ok.length){t.textContent=roh.length?"Kein gültiger Code gefunden. Prüfen Sie, ob die Codes vollständig kopiert wurden.":"Noch keine Codes eingefügt.";$("skl-tsv").hidden=true;return;}
 ok.sort(function(a,b){return String(a.n).localeCompare(String(b.n),"de");});
 var tb=document.createElement("table"),th=document.createElement("thead"),bd=document.createElement("tbody");
 function row(p,cells,tag){var tr=document.createElement("tr");cells.forEach(function(x){var c=document.createElement(tag);c.textContent=x;tr.appendChild(c);});p.appendChild(tr);}
 row(th,zeilen[0],"th");var sum=0;
 ok.forEach(function(d){var z=[clean(d.n,30)||"(ohne Namen)",clean(d.k,40),uebung(clean(d.l,120)),String(Math.max(0,Math.min(100,+d.p||0))),clean(d.d,10)];zeilen.push(z);row(bd,z,"td");sum+=+z[3];});
 tb.appendChild(th);tb.appendChild(bd);t.appendChild(tb);
 var p=document.createElement("p");p.textContent=ok.length+" gültige Codes, Durchschnitt "+Math.round(sum/ok.length)+" %"+(bad?". "+bad+" Code(s) ungültig oder unvollständig.":".");t.appendChild(p);$("skl-tsv").hidden=false;});
$("skl-tsv").addEventListener("click",function(){kopie(zeilen.map(function(z){return z.join("\\t");}).join("\\n"),$("skl-tok"),"Tabelle kopiert. In Excel oder Numbers einfügen.");});
})();
</script>'''
out=R/'lehrpersonen/index.html';out.parent.mkdir(exist_ok=True)
foot2=foot.replace('</body>',js+'</body>',1)
out.write_text(head+main+foot2)
# SBFI box + teacher link on exam-path pages
BOX={'passerelle/index.html':0,'smp/index.html':1,'ebmp/index.html':2}
n=0
for p,i in BOX.items():
    f=R/p
    if not f.exists():continue
    s=f.read_text();s=re.sub(r'<aside class="sk-alt">.*?</aside>','',s,flags=re.S)
    name,u=SBFI[i]
    box='<aside class="sk-alt"><h2>Frühere Prüfungsaufgaben</h2><p>Das SBFI gibt frühere Aufgaben der '+E(name)+' auf Antrag an Kandidierende und Lehrpersonen ab. Sie sind urheberrechtlich geschützt, deshalb verlinken wir nur den offiziellen Zugang: <a href="'+u+'" rel="noopener">Zugang beim SBFI beantragen</a>. Lehrpersonen finden Klassenlinks und Ergebnis-Codes unter <a href="/lehrpersonen/">Für Lehrpersonen</a>.</p></aside>'
    s=s.replace('</main>',box+'</main>',1);f.write_text(s);n+=1
# teacher link on other path pages and the lernen index
for p in ['berufsmaturitaet/index.html','gymnasiale-maturitaet/index.html','fms/index.html','lernen/index.html']:
    f=R/p
    if not f.exists():continue
    s=f.read_text();s=re.sub(r'<aside class="sk-alt">.*?</aside>','',s,flags=re.S)
    s=s.replace('</main>','<aside class="sk-alt"><p>Für Lehrpersonen: <a href="/lehrpersonen/">Klassenlinks erstellen und Ergebnis-Codes auswerten</a>, ohne Konten und ohne Datenspeicherung.</p></aside></main>',1);f.write_text(s);n+=1
print('build_lehrpersonen: page with',len(subj),'subjects; boxes on',n,'pages')
# «Fehler melden» on every chapter page (contact from the Impressum, chapter ID named)
imp=(R/'impressum/index.html').read_text()
mail=sorted(set(m for m in re.findall(r'[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[a-z]{2,}',imp)))
assert len(mail)==1,mail
mail=mail[0];c=0
for f in sorted(R.glob('lernen/*/*/index.html')):
    cid=f.parent.name;s=f.read_text()
    s=re.sub(r'<aside class="sk-melden">.*?</aside>','',s,flags=re.S)
    a=('<aside class="sk-melden"><h2>Fehler entdeckt?</h2><p>Schreib an <a href="mailto:'+mail+'?subject='+E('Stoffknacker Fehler '+cid).replace(' ','%20')+'">'+E(mail)+'</a> und nenne die Kapitel-ID <code>'+E(cid)+'</code>. '
       'Jede Meldung wird geprüft; berechtigte Korrekturen erscheinen mit der nächsten Version.</p></aside>')
    s=s.replace('</main>',a+'</main>',1);f.write_text(s);c+=1
print('build_lehrpersonen: error-report box on',c,'chapter pages')
# the curriculum page is built from the passerelle page as template: keep it free of the path box (determinism)
lp=R/'passerelle/lehrplan/index.html'
if lp.exists():
    t=lp.read_text();t2=re.sub(r'<aside class="sk-alt">.*?</aside>','',t,flags=re.S)
    if t2!=t:lp.write_text(t2)
