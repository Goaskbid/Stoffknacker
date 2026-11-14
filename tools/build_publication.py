#!/usr/bin/env python3
"""Rebuild r179 language/quality/legal reading pages and publication manifest.
Academic HTML stays an explicit, versioned source artifact; this builder never
claims a domain expert or rights owner has approved it. Preview fails closed.
"""
from pathlib import Path
import json,re,hashlib,html,xml.etree.ElementTree as ET,argparse
from bs4 import BeautifulSoup
import sys
sys.dont_write_bytecode=True
from foundation_content import LANGS,NAMES,TOPICS
D='https://stoffknacker.com'
def E(x):return html.escape(str(x),quote=True)
def decode(s):
 for k,v in {'@ue@':252,'@ae@':228,'@oe@':246,'@Ue@':220,'@Oe@':214,'@Ae@':196}.items():s=s.replace(k,chr(v))
 return s

def main(root,out,preview=False):
 sources=json.loads((root/'tools/source/legal-source.json').read_text());manifest=json.loads((root/'assets/content/manifest.json').read_text());cat=json.loads((root/'assets/content/language-catalog.json').read_text());made=[]
 def page(path,title,description,body,crumb='Sprachen',ld=None):
  canonical=D+'/'+path.strip('/')+'/' if path else D+'/'
  data={'@context':'https://schema.org','@type':'LearningResource','name':title,'description':description,'url':canonical,'inLanguage':'de','learningResourceType':'Leseseite'}
  if ld:data.update(ld)
  if path in ['impressum','datenschutz','nutzungsbedingungen','barrierefreiheit','lernqualitaet']:data['@type']='WebPage';data.pop('learningResourceType',None)
  markup='<!doctype html><html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="'+('noindex,follow' if preview else 'index,follow')+'"><meta name="description" content="'+E(description)+'"><meta name="referrer" content="strict-origin-when-cross-origin"><title>'+E(title)+' | Stoffknacker</title><link rel="canonical" href="'+canonical+'"><link rel="stylesheet" href="/assets/css/publication179.css"><script type="application/ld+json">'+json.dumps(data,ensure_ascii=False).replace('<','\\u003c')+'</script></head><body><a class="skip" href="#inhalt">Zum Inhalt</a><header class="sitebar"><a class="brand" href="/">STOFFKNACKER<span>Verstehen. Selbst k@oe@nnen.</span></a><nav aria-label="Hauptnavigation"><a href="/lernen/">Schulstoff</a><a href="/sprachtrainer/">Sprachen</a><a href="/schule-fuers-leben/">Alltag</a><a href="/#home">App @oe@ffnen</a></nav></header><main id="inhalt"><nav class="crumb" aria-label="Pfad"><a href="/">Start</a> / <a href="/sprachtrainer/">'+E(crumb)+'</a></nav><article><h1>'+E(title)+'</h1><p class="lead">'+E(description)+'</p>'+body+'</article></main><footer><strong>Stoffknacker</strong><p>Privates Lernangebot. Kein amtlicher Abschluss und keine Pr@ue@fungsgarantie.</p><nav aria-label="Information"><a href="/impressum/">Impressum</a><a href="/datenschutz/">Datenschutz</a><a href="/nutzungsbedingungen/">Nutzungsbedingungen</a><a href="/barrierefreiheit/">Barrierefreiheit</a><a href="/lernqualitaet/">Lernqualit@ae@t</a><button type="button" data-sk-privacy>Datenschutz-Einstellungen</button></nav><noscript>JavaScript ist ausgeschaltet. Lesen bleibt m@oe@glich; optionale Dienste werden nicht geladen.</noscript></footer><script defer src="/assets/js/site-config.js"></script><script defer src="/assets/js/analytics.js"></script></body></html>'
  p=root/path/'index.html';p.parent.mkdir(parents=True,exist_ok=True);p.write_text(decode(markup));made.append(path)
 def launch(l,unit=None):return '/?kurs='+l+('&amp;lektion='+E(unit) if unit else '')+'#home'
 def langcards():return '<div class="cards">'+''.join('<a class="card" href="/sprachen/'+l+'/"><span class="code">'+l.upper()+'</span><h2>'+E(NAMES[l])+'</h2><p>'+str(cat[l]['units'])+' Einheiten. '+('Grundlagen und vorhandenes A2-, B1- und B2-Material.' if l in ['en','fr','it','es'] else 'Neues Grundlagenpaket mit zw@oe@lf Alltagssituationen.')+'</p><span>Sprachweg ansehen &#8594;</span></a>' for l in LANGS)+'</div>'
 introduction='<section class="note"><h2>Erst verstehen, dann selbst versuchen</h2><p>W@oe@rter, S@ae@tze, Grammatik und Dialoge verbinden sich in kurzen Einheiten. Im interaktiven Trainer kommen bis zu acht Aufgaben pro Runde. L@ae@ngere Einheiten laufen in mehreren Runden weiter, bis jeder Eintrag versucht wurde. Bearbeitet bedeutet nicht beherrscht.</p><p>Ohne Konto. Dein Stand bleibt im Browser. Analysen und Werbung sind f@ue@r Lernen nicht erforderlich.</p></section>'
 reviews='<section class="review"><h2>Was die Stufen bedeuten</h2><p>Die neuen Grundlagen wurden KI-unterst@ue@tzt verfasst. Sie sind noch nicht unabh@ae@ngig fachlich freigegeben. Vorhandene A2-, B1- und B2-Bezeichnungen stammen aus dem bestehenden Material. Keine Stufe ist ein Zertifikat oder ein gemessenes Niveau. Das Angebot umfasst Englisch, Franz@oe@sisch, Italienisch und Spanisch. Materialstufen belegen keine vollst@ae@ndige Lehrplanabdeckung.</p><a href="/lernqualitaet/">Pr@ue@fstatus und Korrekturweg</a></section>'
 page('sprachtrainer','Vier Fremdsprachen. Ein klarer Lernweg.','Kurze Lektionen, ein durchsuchbares W@oe@rterbuch und Dialoge f@ue@r Alltag, Schule und Beruf.',introduction+langcards()+reviews)
 page('sprachen','Sprachen zum Lesen und @Ue@ben','W@ae@hle eine Sprache. Erkl@ae@rungen und Alltagssituationen sind auch ohne JavaScript lesbar.',langcards()+reviews)
 for l in LANGS:
  pay=json.loads((root/manifest['languages'][l]['file']).read_text());B=next(x['value'] for x in pay['pools'] if x['path']==[l]);units=pay['courseUnits']
  cards='<div class="cards">'+''.join('<a class="card" href="/sprachen/'+l+'/'+topic+'/"><span class="code">'+str(i+1).zfill(2)+'</span><h2>'+E(label)+'</h2><p>Acht W@oe@rter, vier Modells@ae@tze, eine Grammatikfrage und ein Gespr@ae@ch.</p></a>' for i,(topic,label) in enumerate(TOPICS))+'</div>'
  body='<a class="button" href="'+launch(l)+'">'+E(NAMES[l])+' interaktiv @ue@ben</a>'+introduction+'<h2>Zw@oe@lf Einstiegssituationen</h2>'+cards+'<section><h2>Der gesamte Sprachraum</h2><p>'+str(len(B['v']))+' Wortschatzeintr@ae@ge, '+str(len(B['s']))+' S@ae@tze, '+str(len(B['g']))+' Grammatikaufgaben und '+str(len(B['d']))+' Dialoge sind im Trainer erreichbar. Du kannst nach Thema und Materialstufe suchen oder das W@oe@rterbuch und Dialogstudio nutzen.</p></section>'+reviews
  page('sprachen/'+l,NAMES[l]+' lernen','Erkl@ae@rungen auf Deutsch, Beispiele in '+NAMES[l]+'. '+('Neue Grundlagen plus vorhandene Vertiefung.' if l in ['en','fr','it','es'] else 'Ein neu verfasstes Einstiegspaket.'),body,ld={'inLanguage':['de',l]})
  for topic,label in TOPICS:
   sel=lambda k:[x for x in B[k] if '-r179-' in x['id'] and x.get('topic')==topic]
   v,s,g,d=[sel(k) for k in 'vsgd'];u=next(u for u in units if u['id']==l+'-r179-a1-'+topic+'-use')
   body='<p class="eyebrow">Grundlagen / '+E(NAMES[l])+' / '+E(label)+'</p><section><h2>W@oe@rter f@ue@r diese Situation</h2><dl class="words">'+''.join('<div><dt lang="'+l+'">'+E(x['w'])+'</dt><dd>'+E(x['de'])+'</dd></div>' for x in v)+'</dl></section><section><h2>Vier S@ae@tze im Zusammenhang</h2>'+''.join('<div class="model"><p lang="'+l+'">'+E(x['s'])+'</p><p>'+E(x['de'])+'</p></div>' for x in s)+'</section><section><h2>Die Form selbst finden</h2>'+''.join('<p lang="'+l+'">'+E(x['prompt'])+'</p><details><summary>Modell und Erkl@ae@rung</summary><p lang="'+l+'">'+E(x['answer'])+'</p><p>'+E(x['why'])+'</p></details>' for x in g)+'</section><section><h2>Im Gespr@ae@ch</h2>'+''.join('<p>'+E(x.get('situation_de',''))+'</p><div class="dialog">'+''.join('<div class="turn '+E(t['who'])+'"><b>'+E(t['who'])+'</b><p lang="'+l+'">'+E(t['s'])+'</p><p>'+E(t.get('de',''))+'</p></div>' for t in x['turns'])+'</div>' for x in d)+'</section><section class="note"><h2>Jetzt ohne Vorlage versuchen</h2><p>@Ue@bernimm im Gespr@ae@ch die Rolle B. Formuliere deine Antwort zuerst selbst. Vergleiche sie danach mit dem Modell. Die Sprechprobe ist unbewertet und zeichnet nichts auf.</p><a class="button" href="'+launch(l,u['id'])+'">Passende Lektion @oe@ffnen</a></section><p class="review">Originales, KI-unterst@ue@tztes @Ue@bungsmaterial. Unabh@ae@ngige Fachpr@ue@fung ausstehend. Namen, Uhrzeiten und Betr@ae@ge sind fiktive Beispiele. <a href="/lernqualitaet/">Korrektur melden und Pr@ue@fstatus verstehen</a>.</p><p><a href="/sprachen/'+l+'/">Alle Situationen auf '+E(NAMES[l])+'</a></p>'
   page('sprachen/'+l+'/'+topic,NAMES[l]+': '+label,'W@oe@rter, S@ae@tze, Grammatik und ein Dialog zur Situation '+label+'.',body,ld={'inLanguage':['de',l]})
 quality='''<section><h2>Vier verschiedene Aussagen</h2><dl><dt>Verf@ue@gbar</dt><dd>Die Erkl@ae@rung oder Aufgabe ist im Angebot erreichbar.</dd><dt>Technisch gepr@ue@ft</dt><dd>Automatische Tests pr@ue@fen Struktur, Links oder festgelegte Bewertungsf@ae@lle. Das ist keine fachliche Freigabe.</dd><dt>Fachlich gepr@ue@ft</dt><dd>Eine benannte, qualifizierte Person hat die konkrete Fassung gepr@ue@ft. Ohne dokumentierten Nachweis verwenden wir diese Kennzeichnung nicht.</dd><dt>Bearbeitet oder erinnert</dt><dd>Die Anzeige beschreibt deine Versuche in der App. Sie ist kein Abschluss, keine Diagnose und keine Pr@ue@fungsgarantie.</dd></dl></section><section><h2>Neue Sprachgrundlagen</h2><p>Die neuen Originaltexte wurden KI-unterst@ue@tzt erstellt. Ein technischer Test kann nicht sicherstellen, dass jede Formulierung nat@ue@rlich ist oder jede Alternative erfasst wurde. Die unabh@ae@ngige Fachpr@ue@fung steht aus. Auch der vorhandene Bestand ist nicht pauschal fachlich zertifiziert.</p><p>Material mit A1-, A2-, B1- oder B2-Bezeichnung orientiert die Auswahl. Die Sprachgrundlagen decken je zw@oe@lf Situationen ab. Es fehlt unter anderem eine unabh@ae@ngige Pr@ue@fung der gesamten Kompetenzabdeckung und der freien schriftlichen und m@ue@ndlichen Produktion.</p></section><section><h2>Reihenfolgefragen und zur@ue@ckgehaltene Bewertungen</h2><p>Aufgaben ohne abgesicherte eindeutige Reihenfolge d@ue@rfen als unbewertete Anleitung erscheinen. Sie d@ue@rfen keine gepr@ue@fte Beherrschung oder Pr@ue@fungsbereitschaft vort@ae@uschen. Fehlerhafte Aufgaben sollen gemeldet und bis zur Kl@ae@rung aus der Bewertung genommen werden.</p></section><section><h2>Fehler melden</h2><p>Schicke den Link zur Seite, die Aufgabe und eine kurze Begr@ue@ndung an <a href="mailto:torsten.sauter@icloud.com?subject=Stoffknacker%20Inhaltskorrektur">torsten.sauter@icloud.com</a>. Bitte sende keine fremden Personendaten, Zeugnisse oder privaten Backups. Eine Korrektur wird erst nach Pr@ue@fung als erledigt bezeichnet.</p></section><section><h2>Quellen und Rechte</h2><p>Quellenangaben bedeuten nicht automatisch eine Nutzungsfreigabe. F@ue@r Bilder, Zitate und fremde Materialien gelten die jeweils angegebenen Rechte. Die neuen Sprachtexte kopieren keine fremden Lehrwerke. Eine offene Weiterverwendungslizenz f@ue@r den gesamten Altbestand wird damit nicht behauptet.</p></section>'''
 page('lernqualitaet','Lernqualit@ae@t und Pr@ue@fstatus','Was technisch gepr@ue@ft, fachlich freigegeben und noch offen ist.',quality,crumb='Lernqualit@ae@t')
 # Source the one current notice rather than concatenating four aliases.
 privacy=sources['privacy_html'];soup=BeautifulSoup(privacy,'html.parser');soup.find('h1').decompose()
 for p in soup.find_all('p'):
  if p.get_text().startswith('Vorlesen nutzt'):
   p.string=decode('Im Sprachtrainer verwendet die optionale Sprachausgabe nur Stimmen, die der Browser als lokal ausweist. Ohne passende lokale Stimme gibt es keine Sprachausgabe. Andere Vorlesefunktionen der App nutzen die ausgew@ae@hlte Browser- oder Betriebssystemstimme; deren Verarbeitung h@ae@ngt vom Ger@ae@t und Anbieter ab. Es wird kein Mikrofon im Sprachtrainer verwendet.')
 privacy=str(soup);page('datenschutz','Datenschutzerkl@ae@rung','Fassung 14. November 2026. Lernen ohne Konto, ohne Werbung, Analyse nur mit Zustimmung.',privacy,crumb='Datenschutz')
 # One accessible notice is reused in the app. Other tabs link, rather than repeat it in full.
 js="(function(){var M=window.MNEMIKA;if(!M||!M.LEGAL)return;var text="+json.dumps('<h1>Datenschutzerkl'+chr(228)+'rung</h1>'+privacy,ensure_ascii=False)+";M.LEGAL.privacy=()=>text;M.LEGAL.cookies=()=>'<p>Die aktuellen Angaben zu Cookies und optionalen Diensten stehen in der <a href=\"/datenschutz/\">Datenschutzerkl'+String.fromCharCode(228)+'rung</a>.</p>';M.LEGAL.minors=()=>'<p>Lernen ist ohne Altersangabe m'+String.fromCharCode(246)+'glich. Analyse und Werbung erfordern eine freiwillige 18+-Angabe und getrennte Zustimmung. <a href=\"/datenschutz/\">Details</a>.</p>';M.LEGAL.youth=M.LEGAL.minors;})();"
 (root/'assets/runtime/legal-ready.js').write_text(js)
 # Preserve operator details and existing liability language, separate unrelated accessibility sections.
 old=BeautifulSoup(sources['terms_html'],'lxml');main=old.select_one('main');container=main.find('h3').parent if main and main.find('h3') else main
 chunks=[];access=[];mode='terms'
 if main:
  for e in list(main.descendants):
   if getattr(e,'name',None) not in ['h2','h3','p','ul']:continue
   if e.find_parent(['p','ul']):continue
   if e.get_text(strip=True)=='Anspruch':mode='access'
   if mode=='terms':
    if e.name=='p' and ('Eigene Inhalte:' in e.get_text()):
     e.clear();e.append(decode('Stoffknacker enth@ae@lt eigene, teilweise KI-unterst@ue@tzt erstellte Erkl@ae@rungen, Beispiele und Aufgaben. Amtliche Vorgaben werden als Quellen f@ue@r Umfang und Pr@ue@fungsform verwendet. Fremde Materialien bleiben ihren jeweiligen Rechten und Lizenzen unterstellt. Eine pauschale Rechtefreigabe oder fachliche Pr@ue@fung des gesamten Bestands wird nicht behauptet.'))
    if e.name=='p' and ('Zum Zeitpunkt der Verlinkung' in e.get_text()):
     e.clear();e.append('Externe Links dienen als Quellen oder weiterfuehrende Hinweise. Fuer ihre Inhalte sind die jeweiligen Betreiber verantwortlich. Bitte melde problematische Verweise ueber das Impressum.')
    chunks.append(str(e))
   else:access.append(str(e))
 terms=''.join(chunks)
 # Remove publication-wrapper meta copy and ensure no date/address is invented.
 terms=re.sub(r'<p[^>]*>Fassung 2026-.*?</p>','',terms,flags=re.S)
 page('nutzungsbedingungen','Nutzungsbedingungen','Fassung 9. November 2026. Privates Lernangebot. Massgebend bleiben die amtlichen Vorgaben und zwingendes Recht.',terms,crumb='Nutzungsbedingungen')
 runtime=root/'assets/runtime/legal-ready.js';rt=runtime.read_text();rt=rt.replace('})();', 'M.LEGAL.terms=()=>'+json.dumps('<h1>Nutzungsbedingungen</h1>'+terms,ensure_ascii=False)+';})();');runtime.write_text(rt)
 acc='''<h2>Ziel und aktueller Stand</h2><p>Stoffknacker strebt WCAG 2.2 AA an. Eine vollst@ae@ndige Konformit@ae@tspr@ue@fung liegt nicht vor. Automatisierte Browserchecks ersetzen keine Pr@ue@fung mit assistiven Technologien.</p><h2>Umsetzung</h2><p>Tastaturfokus, beschriftete Bedienelemente, skalierende Ansichten und reduzierte Bewegung werden ber@ue@cksichtigt. Der Sprachtrainer hat eine geschlossene Fokusfolge und gibt den Fokus beim Schliessen zur@ue@ck. Statische Lernseiten bleiben ohne JavaScript lesbar.</p><h2>Noch nicht unabh@ae@ngig best@ae@tigt</h2><p>VoiceOver, TalkBack und NVDA auf echten Ger@ae@ten, Safari und Firefox, alle Zoom- und Kontrastf@ae@lle sowie s@ae@mtliche Grafikalternativen. Einige anspruchsvolle Diagramme brauchen weitere textliche Alternativen.</p><h2>Barriere melden</h2><p>Beschreibe die Seite, das Ger@ae@t und den betroffenen Schritt an <a href="mailto:torsten.sauter@icloud.com">torsten.sauter@icloud.com</a>. Sende keine privaten Lernstanddateien.</p>'''
 page('barrierefreiheit','Barrierefreiheit','Was umgesetzt ist und welche Pr@ue@fungen noch ausstehen.',acc,crumb='Barrierefreiheit')
 # Snapshot registry hashes are not approvals. Preserve all original sitemap locations.
 ns={'s':'http://www.sitemaps.org/schemas/sitemap/0.9'}
 urls=set()
 for p in root.glob('sitemap-*.xml'):
  for e in ET.parse(p).findall('.//s:url/s:loc',ns):urls.add(e.text)
 for path in made:urls.add(D+'/'+path.strip('/')+'/')
 newurls=sorted(D+'/'+p+'/' for p in made if p not in ['sprachtrainer','datenschutz','nutzungsbedingungen'])
 xml=lambda u:'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+''.join('<url><loc>'+E(x)+'</loc></url>' for x in u)+'</urlset>\n'
 (root/'sitemap-languages.xml').write_text(xml(newurls));maps=sorted(x.name for x in root.glob('sitemap-*.xml'));(root/'sitemap.xml').write_text('<?xml version="1.0" encoding="UTF-8"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+''.join('<sitemap><loc>'+D+'/'+x+'</loc></sitemap>' for x in maps)+'</sitemapindex>')
 rows=[]
 for url in sorted(urls):
  path=url.removeprefix(D).lstrip('/');f=root/path/'index.html' if not path.endswith('.html') else root/path
  if not f.exists():raise RuntimeError('Missing sitemap page '+url)
  ss=BeautifulSoup(f.read_text(),'lxml');rows.append({'url':url,'path':str(f.relative_to(root)),'sha256':hashlib.sha256(f.read_bytes()).hexdigest(),'title':ss.title.get_text() if ss.title else '', 'technical_status':'generated-pending-test','content_approval':'pending','rights_approval':'pending','approved_by':None,'approved_revision_sha256':None})
 out.mkdir(parents=True,exist_ok=True);(out/'publication-manifest.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2));(out/'publication-build.json').write_text(json.dumps({'generated_pages':len(made),'sitemap_urls':len(rows),'paths':made,'preview':preview},indent=2));print('Generated',len(made),'pages; registered',len(rows),'sitemap URLs')
if __name__=='__main__':
 p=argparse.ArgumentParser();p.add_argument('root',type=Path);p.add_argument('out',type=Path);p.add_argument('--preview',action='store_true');a=p.parse_args();main(a.root,a.out,a.preview)
