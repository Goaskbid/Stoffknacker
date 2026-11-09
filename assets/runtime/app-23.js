
(function(){"use strict";var M=window.MNEMIKA; if(!M||M.__frBreiteAngebunden) return; M.__frBreiteAngebunden=true;
/* Vier franzoesische Einheiten mit verfasstem Inhalt, Quelle und Fundstelle waren in keinem Plan
   eingetragen und darum fuer Lernende nicht erreichbar: Grammatik im Ueberblick, Leseverstehen,
   Schreiben sowie Sprechen und Literatur. Sie werden in denselben Plan aufgenommen wie die neun
   Grammatikeinheiten. Passerelle bleibt unberuehrt. */
var IDS=['fr-grammar-system','fr-reading-evidence','fr-writing-production','fr-speaking-literature'];
try{
 var plaene=(M.CURRICULUM_INGEST_V1&&M.CURRICULUM_INGEST_V1.resolvedPlans)||M.RESOLVED_PLANS||[];
 plaene.forEach(function(pl){
  if(pl.programmeId!=='gym-maturitaet-2024'||pl.configurationId!=='gym-national-core') return;
  IDS.forEach(function(id){
   if(!(M.chapters||[]).some(function(c){ return c.id===id; })) return;
   if(Array.isArray(pl.usableChapterIds)&&pl.usableChapterIds.indexOf(id)<0) pl.usableChapterIds.push(id);
   if(Array.isArray(pl.chapterIds)&&pl.chapterIds.indexOf(id)<0) pl.chapterIds.push(id);
  });
 });
}catch(e){}
/* Ihre Fragen ins Freigaberegister, damit der Kapiteltest sie ziehen kann. */
try{
 var R=M.QUESTION_REGISTRY_V1217||(M.QUESTION_REGISTRY_V1217={});
 IDS.forEach(function(id){
  var c=(M.chapters||[]).filter(function(x){ return x.id===id; })[0]; if(!c) return;
  (c.questions||[]).forEach(function(q){if(!q||!q.id)return;q.chapterId=id;R[q.id]=q;});
 });
}catch(e){}
})();
