/* Stoffknacker Schule fuers Leben 6.0.0. Original educational code. No network or academic-state access. */
(function(root,factory){var api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.MnemikaLifeCore=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){'use strict';
 const VERSION='6.0.0', KEY='mnemika-life-v2', BAD=new Set(['__proto__','constructor','prototype']);
 const clone=x=>JSON.parse(JSON.stringify(x));
 function finite(n,name,min=0,max=1e9){if(typeof n!=='number'||!Number.isFinite(n)||n<min||n>max)throw new RangeError(name+' is outside the supported range');return n;}
 function integer(n,name,min,max){finite(n,name,min,max);if(!Number.isInteger(n))throw new RangeError(name+' must be an integer');return n;}
 function money(n){return Math.round((n+Number.EPSILON)*100)/100;}
 function parseNumber(value){if(typeof value==='number')return Number.isFinite(value)?value:null;if(typeof value!=='string')return null;let s=value.trim().replace(/^CHF\s*/i,'').replace(/\s*CHF$/i,'');if(!s)return null;
  if(!/^[+-]?(?:\d+|\d{1,3}(?:['\u2019\u0020\u00a0]\d{3})+)(?:[.,]\d+)?$/.test(s))return null;
  const n=Number(s.replace(/['\u2019\u0020\u00a0]/g,'').replace(',','.'));return Number.isFinite(n)?n:null;}
 function evaluate(q,answer){if(!q||typeof q!=='object')throw new TypeError('Question missing');let correct=false;
  if(answer==null||answer===''||(Array.isArray(answer)&&!answer.length))return {status:'unanswered',correct:false};
  if(q.type==='numeric'){let n=parseNumber(answer);if(n===null)return {status:'invalid',correct:false};correct=Math.abs(n-q.answer)<=(q.tolerance??0.01)+1e-9;}
  else if(q.type==='mc'){if(!Number.isInteger(answer)||answer<0||answer>=q.options.length)return {status:'invalid',correct:false};correct=answer===q.answer;}
  else if(q.type==='selection'){if(!Array.isArray(answer)||answer.some(x=>!Number.isInteger(x)||x<0||x>=q.options.length)||new Set(answer).size!==answer.length)return {status:'invalid',correct:false};correct=answer.length===q.answers.length&&answer.every(x=>q.answers.includes(x));}
  else if(q.type==='order'){if(answer&&answer.kind==='order_positions'){const ps=answer.positions;if(!Array.isArray(ps)||ps.length!==q.items.length)return {status:'invalid',correct:false};if(ps.some(x=>x===null))return {status:'unanswered',correct:false};if(ps.some(x=>!Number.isInteger(x)||x<0||x>=ps.length)||new Set(ps).size!==ps.length)return {status:'invalid',correct:false};answer=ps.map((_,i)=>ps.indexOf(i));}if(!Array.isArray(answer)||answer.length!==q.items.length||new Set(answer).size!==answer.length||answer.some(x=>!Number.isInteger(x)||x<0||x>=q.items.length))return {status:'invalid',correct:false};correct=answer.every((x,i)=>x===q.answer[i]);}
  else throw new TypeError('Unsupported question type '+q.type);
  return {status:correct?'correct':'incorrect',correct};
 }
 function budget(income,expenses,reserves){[income,expenses,reserves].forEach((n,i)=>finite(n,['income','expenses','reserves'][i]));return {income,expenses,reserves,free:money(income-expenses-reserves),note:'Allocation model, not an additional expense when a reserved bill is paid.'};}
 function provision(total,saved,months){finite(total,'total');finite(saved,'saved');integer(months,'months',1,120);return money(Math.max(0,total-saved)/months);}
 function cashCalendar(opening,rows){finite(opening,'opening');if(!Array.isArray(rows)||rows.length!==12)throw new RangeError('Exactly twelve months required');let balance=opening,min=opening;const out=rows.map((r,i)=>{finite(r.income,'income');finite(r.payments,'payments');balance=money(balance+r.income-r.payments);min=Math.min(min,balance);return {month:i+1,income:r.income,payments:r.payments,balance};});return {months:out,closing:balance,minimum:min,shortfall:money(Math.max(0,-min))};}
 function annualPay(monthly,payments){finite(monthly,'monthly');integer(payments,'payments',1,24);return money(monthly*payments);}
 function salaryExample(gross,pk,accident){finite(gross,'gross',0,10000);finite(pk,'pk');finite(accident,'accident');const ahv=money(gross*.053),alv=money(gross*.011);return {gross,ahv,alv,pk,accident,net:money(gross-ahv-alv-pk-accident),assumptions:'2026 ordinary adult example below ALV ceiling; PK/NBU supplied assumptions, no withholding tax/other deductions.'};}
 function health(cost,deductible,premium=0){finite(cost,'cost',0,1e7);finite(premium,'premium',0,1e6);if(![300,500,1000,1500,2000,2500].includes(deductible))throw new RangeError('Supported adult deductibles only');const franchise=Math.min(cost,deductible),copay=Math.min(Math.max(0,cost-deductible)*.10,700);return {franchise:money(franchise),copay:money(copay),own:money(franchise+copay),total:money(premium+franchise+copay),excludes:'Hospital daily contribution, medicine exceptions, maternity/other exemptions and uncovered services.'};}
 function wealth(start,monthly,years,annualReturn,annualFee,inflation){finite(start,'start');finite(monthly,'monthly');integer(years,'years',1,60);finite(annualReturn,'return',-.95,1);finite(annualFee,'fee',0,.2);finite(inflation,'inflation',-.2,.5);const rate=Math.pow((1+annualReturn)*(1-annualFee),1/12)-1;let balance=start;const rows=[{year:0,contributions:start,nominal:money(start),real:money(start)}];for(let y=1;y<=years;y++){for(let m=0;m<12;m++)balance=balance*(1+rate)+monthly;rows.push({year:y,contributions:money(start+monthly*12*y),nominal:money(balance),real:money(balance/Math.pow(1+inflation,y))});}return {rows,last:rows.at(-1),assumptions:'Constant hypothetical total return; fee applied as annual factor; end-month contributions; no taxes or additional transaction costs; no forecast or risk bounds.'};}
 function brokerCost(amount,fixed,fx){finite(amount,'amount');finite(fixed,'fixed');finite(fx,'fx',0,1);const cost=money(fixed+amount*fx);return {cost,percent:amount?cost/amount*100:null,excludes:'Custody, bid-ask spread, tax/stamp duty and other charges not included.'};}
 function orderCost(units,price,fee){integer(units,'units',1,100000);finite(price,'price',0.01,1e6);finite(fee,'fee',0,1e6);return {value:money(units*price),total:money(units*price+fee),executed:false};}
 function benefit(rules,caseId,paidDays){integer(paidDays,'paidDays',0,23);const c=rules.alv_teaching.cases.find(x=>x.id===caseId);if(!c)throw new RangeError('Unknown fixed teaching case');return {...clone(c),paidDays,gross:money(c.insured_monthly/rules.alv_teaching.average_workdays*c.rate*paidDays),fullWeekEquivalent:c.maximum_days/5,decision:false,excludes:'All other entitlement conditions assumed; no waiting/suspension days, contribution exemptions, deductions, extensions or net-payment guarantee.'};}
 function taxProfile(data,canton,year){if(!/^[A-Z]{2}$/.test(canton)||!Number.isInteger(year))return null;return data.tax_profiles[canton+'-'+year]||null;}
 function createStore(storage,validQuestionIds,validLessonIds){const qs=new Set(validQuestionIds),ls=new Set(validLessonIds);let state=fresh(),durable=true,lastError='',recoveryRaw=null,writesBlocked=false,lastPersistedRaw=null,conflict=false;function fresh(){return {schema:2,domain:'life_skills',records:{},drafts:{},visited:{},teacherSelection:[],labDrafts:{},lastLesson:null,settings:{canton:'ZH',taxYear:2025},updated:null};}
  function validate(raw){if(!raw||raw.schema!==2||raw.domain!=='life_skills')throw new Error('Not a Schule fuers Leben v2 backup');let s=fresh();const objects=['records','drafts','visited'];for(const k of objects)if(raw[k]!=null&&(typeof raw[k]!=='object'||Array.isArray(raw[k])))throw new Error('Invalid '+k);
   for(const [id,v] of Object.entries(raw.visited||{})){if(BAD.has(id)||!ls.has(id)||typeof v!=='boolean')throw new Error('Invalid lesson record');s.visited[id]=v;}
   for(const [id,v] of Object.entries(raw.records||{})){if(!qs.has(id)||BAD.has(id)||!Array.isArray(v)||v.length>200)throw new Error('Invalid question history');s.records[id]=v.map(r=>{if(!r||!Number.isInteger(r.attempt)||r.attempt<1||!['correct','incorrect'].includes(r.status)||typeof r.correct!=='boolean'||r.correct!==(r.status==='correct')||typeof r.assisted!=='boolean'||typeof r.at!=='string'||r.at.length>40)throw new Error('Invalid attempt');return {attempt:r.attempt,status:r.status,correct:r.correct,assisted:r.assisted,at:r.at};});}
   for(const [id,v] of Object.entries(raw.drafts||{})){if(!qs.has(id)||BAD.has(id)||!v||!['draft','feedback','skipped'].includes(v.phase)||!Number.isInteger(v.attempt)||v.attempt<1)throw new Error('Invalid draft');let a=v.answer;if(!(a==null||typeof a==='number'&&Number.isFinite(a)||typeof a==='string'&&a.length<10000||Array.isArray(a)&&a.length<100&&a.every(Number.isInteger)||a&&a.kind==='order_positions'&&Object.keys(a).length===2&&Array.isArray(a.positions)&&a.positions.length<100&&a.positions.every(x=>x===null||Number.isInteger(x)&&x>=0&&x<100)))throw new Error('Invalid answer');s.drafts[id]={answer:a,phase:v.phase,attempt:v.attempt,assisted:!!v.assisted,result:v.phase==='feedback'&&['correct','incorrect'].includes(v.result)?v.result:null};if(v.phase==='feedback'&&!s.drafts[id].result)throw new Error('Missing committed result');}
   s.teacherSelection=Array.isArray(raw.teacherSelection)?[...new Set(raw.teacherSelection.filter(x=>typeof x==='string'&&ls.has(x)))].slice(0,ls.size):[];
   for(const [k,v] of Object.entries(raw.labDrafts||{})){if(BAD.has(k)||!/^[a-z-]{1,30}$/.test(k)||!v||typeof v!=='object'||Array.isArray(v))throw new Error('Invalid workshop');s.labDrafts[k]={};for(const [f,a] of Object.entries(v)){if(BAD.has(f)||!/^[a-zA-Z0-9_-]{1,40}$/.test(f)||typeof a!=='string'||a.length>200)throw new Error('Invalid workshop input');s.labDrafts[k][f]=a;}}s.lastLesson=ls.has(raw.lastLesson)?raw.lastLesson:null;if(raw.settings&&/^[A-Z]{2}$/.test(raw.settings.canton))s.settings.canton=raw.settings.canton;if(raw.settings&&Number.isInteger(raw.settings.taxYear)&&raw.settings.taxYear>=2020&&raw.settings.taxYear<=2040)s.settings.taxYear=raw.settings.taxYear;return s;
  }
  try{const r=storage&&storage.getItem(KEY);lastPersistedRaw=r??null;if(r){recoveryRaw=r;state=validate(JSON.parse(r));recoveryRaw=null;}if(!storage)durable=false;}catch(e){lastError=String(e.message);durable=false;writesBlocked=true;}
  function save(){
   state.updated=new Date().toISOString();
   if(writesBlocked){durable=false;return false;}
   try{
    if(!storage)throw new Error('Storage unavailable');
    const current=storage.getItem(KEY)??null;
    if(current!==lastPersistedRaw){conflict=true;writesBlocked=true;recoveryRaw=current;throw new Error('A different tab or process changed this saved record. Export this session before reloading; the other record was not overwritten.');}
    const next=JSON.stringify(state);storage.setItem(KEY,next);lastPersistedRaw=next;
    durable=true;lastError='';
   }catch(e){durable=false;lastError=String(e.message);}
   return durable;
  }
  function draft(qid,answer){if(!qs.has(qid))throw new Error('Unknown question');if(!validDraftValue(answer))throw new RangeError('Antwort ist zu lang oder hat ein ungueltiges Format. Der bisherige Stand bleibt unveraendert.');let d=state.drafts[qid];if(d&&d.phase==='feedback')return clone(d);state.drafts[qid]={answer,phase:'draft',attempt:d?.attempt||1,assisted:d?.assisted||false,result:null};save();return clone(state.drafts[qid]);}
  return {key:KEY,get:()=>clone(state),status:()=>({durable,error:lastError,writesBlocked,recoverable:recoveryRaw!==null,conflict}),recovery:()=>recoveryRaw,save,
   draft, hint(qid){if(!qs.has(qid))throw new Error('Unknown question');if(state.drafts[qid]?.phase==='feedback')return;if(!state.drafts[qid])draft(qid,null);state.drafts[qid].assisted=true;save();},
   submit(q,answer){if(!qs.has(q.id))throw new Error('Unknown question');if(!validDraftValue(answer))throw new RangeError('Answer too large or unsupported; previous state preserved');let d=state.drafts[q.id];if(d?.phase==='feedback')return {status:d.result,correct:d.result==='correct',duplicate:true,assisted:d.assisted};const r=evaluate(q,answer);if(r.status==='invalid'||r.status==='unanswered')return r;d={answer,phase:'feedback',attempt:d?.attempt||1,assisted:d?.assisted||false,result:r.status};state.drafts[q.id]=d;state.records[q.id]=state.records[q.id]||[];if(!state.records[q.id].some(x=>x.attempt===d.attempt)){state.records[q.id].push({attempt:d.attempt,status:r.status,correct:r.correct,assisted:d.assisted,at:new Date().toISOString()});state.records[q.id]=state.records[q.id].slice(-200);}save();return {...r,duplicate:false,assisted:d.assisted};},
   retry(qid){if(!qs.has(qid))throw new Error('Unknown question');let n=state.drafts[qid]?.attempt||0;state.drafts[qid]={answer:null,phase:'draft',attempt:n+1,assisted:false,result:null};save();},
   skip(qid){if(!qs.has(qid))throw new Error('Unknown question');if(state.drafts[qid]?.phase==='feedback')return;state.drafts[qid]={answer:null,phase:'skipped',attempt:state.drafts[qid]?.attempt||1,assisted:state.drafts[qid]?.assisted||false,result:null};save();},
   visit(id){if(!ls.has(id))throw new Error('Unknown lesson');state.visited[id]=true;state.lastLesson=id;save();},
   lab(id,values){if(BAD.has(id)||!/^[a-z-]{1,30}$/.test(id))throw new Error('Invalid workshop');const v={};for(const [k,a] of Object.entries(values)){if(BAD.has(k)||!/^[a-zA-Z0-9_-]{1,40}$/.test(k)||typeof a!=='string'||a.length>200)throw new Error('Invalid workshop input');v[k]=a;}state.labDrafts[id]=v;save();},
   teacher(ids){if(!Array.isArray(ids)||ids.some(x=>!ls.has(x)))throw new Error('Unknown lesson');state.teacherSelection=[...new Set(ids)];save();},
   settings(canton,year){if(!/^[A-Z]{2}$/.test(canton)||!Number.isInteger(year)||year<2020||year>2040)throw new Error('Invalid context');state.settings={canton,taxYear:year};save();},
   export:()=>JSON.stringify(state,null,2),
   import(text,options={}){if(typeof text!=='string'||text.length>2e6)throw new Error('Backup too large');const s=validate(JSON.parse(text));if(writesBlocked&&!options.replaceBlocked)throw new Error('Existing saved data is protected. Export the original before explicit replacement.');state=s;writesBlocked=false;conflict=false;try{lastPersistedRaw=storage?.getItem(KEY)??null;}catch(e){writesBlocked=true;}const saved=save();if(saved)recoveryRaw=null;return {accepted:true,durable:saved};},
   previewImport(text){if(typeof text!=='string'||text.length>2e6)throw new Error('Backup too large');const s=validate(JSON.parse(text));return {lessons:Object.keys(s.visited).length,questions:Object.keys(s.records).length};},
   reset(options={}){if(writesBlocked&&!options.discardRecovery)throw new Error('Existing saved data is protected. Explicit confirmation required.');state=fresh();writesBlocked=false;conflict=false;try{lastPersistedRaw=storage?.getItem(KEY)??null;}catch(e){writesBlocked=true;}const saved=save();if(saved)recoveryRaw=null;return saved;},
   summary(){let records=Object.values(state.records),attempts=records.flat();return {lessonsRead:Object.values(state.visited).filter(Boolean).length,questionsPractised:records.length,attempts:attempts.length,independentCorrect:records.filter(v=>v.some(r=>r.attempt===1&&r.correct&&!r.assisted)).length,assistedAttempts:attempts.filter(r=>r.assisted).length,repeatCorrect:attempts.filter(r=>r.attempt>1&&r.correct).length,academicImpact:0};}
  };
 }
 function normalizedChapter(lesson,questions){return {id:lesson.id,domain:'life_skills',curriculum_role:'extracurricular',countsTowardExamReadiness:false,title:lesson.title,subject:'life-skills',minutes:lesson.minutes,hook:lesson.opening,objectives:[lesson.objective],blocks:lesson.body.map((text,i)=>({id:lesson.id+'-b'+(i+1),label:'Verstehen '+(i+1),text,html:'<p>'+escape(text)+'</p>'})),models:[],examples:[{task:lesson.practice_prompt,solution:lesson.worked_example}],points:lesson.recap,mistake:lesson.dont,questions:questions.filter(q=>q.lesson_id===lesson.id),resources:lesson.source_refs,review_status:lesson.review_status};}
 function reviewState(policy,today=new Date().toISOString().slice(0,10)){return {checkedOn:policy.source_date,reviewDue:policy.review_due,overdue:typeof today==='string'&&today>policy.review_due,historicalExamplesRemainHistorical:true,legalClearance:false};}
 function educationGuard(operation){return {allowed:['explain','calculate_example','compare_fictional','check_learning_answer','refer_official'].includes(operation),mode:'EDUCATION_ONLY',reason:'No personal recommendations, eligibility decisions, real transactions, document upload or tax filing.'};}
 function presentationOrder(id,n,attempt=1){integer(n,'option count',1,100);let seed=2166136261;for(const c of String(id)+':'+attempt){seed^=c.charCodeAt(0);seed=Math.imul(seed,16777619)>>>0;}const out=Array.from({length:n},(_,i)=>i);for(let i=n-1;i>0;i--){seed=(Math.imul(seed,1664525)+1013904223)>>>0;const j=seed%(i+1);[out[i],out[j]]=[out[j],out[i]];}return out;}

 // Retrieval practice is local, transparent and never evidence of official readiness.
 function practiceSelection(questions,state,limit=3){
  integer(limit,'practice length',1,20);
  const scored=questions.filter(q=>q.type!=='order').map(q=>{
   const rec=(state.records||{})[q.id]||[],last=rec.at(-1);
   return {q,rank:!last?1:last.correct?2:0,at:last?.at||'',count:rec.length};
  });
  scored.sort((a,b)=>a.rank-b.rank||a.at.localeCompare(b.at)||a.count-b.count||a.q.id.localeCompare(b.q.id));
  const picked=[],modules=new Set();
  for(const x of scored){const key=x.q.lesson_id?.split('-').slice(0,2).join('-')||x.q.id;
   if(!modules.has(key)){picked.push(x.q.id);modules.add(key);}if(picked.length===limit)break;}
  for(const x of scored){if(picked.length===limit)break;if(!picked.includes(x.q.id))picked.push(x.q.id);}
  return picked;
 }
 function safeSourceUrl(value){try{const u=new URL(String(value));return u.protocol==='https:'&&!u.username&&!u.password?u.href:null;}catch(e){return null;}}
 function searchText(value){return String(value??'').toLocaleLowerCase('de-CH').replace(/ß/g,'ss').normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9]+/g,' ').trim();}
 function matchesSearch(haystack,query){const h=searchText(haystack),tokens=searchText(query).split(' ').filter(Boolean);return tokens.every(t=>h.includes(t));}
 function escape(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}

 // Shared admission rule: reject input before it can make this app's own backup unreadable.
 function validDraftValue(a){return a==null||typeof a==='number'&&Number.isFinite(a)||typeof a==='string'&&a.length<10000||Array.isArray(a)&&a.length<100&&a.every(Number.isInteger)||!!(a&&a.kind==='order_positions'&&Object.keys(a).length===2&&Array.isArray(a.positions)&&a.positions.length<100&&a.positions.every(x=>x===null||Number.isInteger(x)&&x>=0&&x<100));}

 // A revision detector, not a cryptographic signature or protection against malicious edits.
 // Bind a saved check to its actual rendered/evaluated bank, not only a manually maintained label.
 function assessmentFingerprint(paper,bank){
  if(!paper||!Array.isArray(paper.question_ids)||!Array.isArray(bank))throw new TypeError('Self-check blueprint and actual question bank required');
  const byId=new Map(bank.map(q=>[q.id,q]));
  const payload=paper.question_ids.map(id=>{const q=byId.get(id);if(!q)throw new Error('Missing self-check question '+id);return ['id','revision','type','prompt','context','options','items','answer','answers','tolerance','unit','explanation'].map(k=>q[k]??null);});
  const text=JSON.stringify(payload);let a=2166136261,b=5381;
  for(let i=0;i<text.length;i++){a=Math.imul(a^text.charCodeAt(i),16777619)>>>0;b=(Math.imul(b,33)^text.charCodeAt(i))>>>0;}
  return 'bank-v1-'+a.toString(16).padStart(8,'0')+b.toString(16).padStart(8,'0')+'-'+text.length;
 }
 function startCheck(paper,bank){if(!paper||!paper.id||!paper.signature||!Array.isArray(paper.question_ids)||paper.question_ids.length<1||paper.question_ids.length>30)throw new Error('Invalid self-check blueprint');return {paper:paper.id,signature:paper.signature,bankFingerprint:assessmentFingerprint(paper,bank),phase:'draft',index:'0'};}
 function checkState(paper,bank,draft){
  if(!paper||!draft||draft.paper!==paper.id||draft.signature!==paper.signature||draft.bankFingerprint!==assessmentFingerprint(paper,bank))throw new Error('Die gespeicherte Runde passt nicht zu dieser Aufgabenfassung. Zuerst sichern; keine automatische Neubewertung.');
  if(!['draft','submitted'].includes(draft.phase)||!/^\d+$/.test(draft.index)||Number(draft.index)>=paper.question_ids.length)throw new Error('Invalid self-check state');
  const ids=paper.question_ids;if(new Set(ids).size!==ids.length)throw new Error('Duplicate self-check question');
  const byId=new Map(bank.map(q=>[q.id,q]));const allowed=new Set(['paper','signature','bankFingerprint','phase','index']);
  const items=ids.map((id,i)=>{const q=byId.get(id);if(!q||!q.context||!['numeric','mc','selection'].includes(q.type))throw new Error('Incomplete self-check question');allowed.add('answer'+i);allowed.add('flag'+i);let answer=null;if(draft['answer'+i]!=null){if(typeof draft['answer'+i]!=='string'||draft['answer'+i].length>200)throw new Error('Invalid self-check answer');try{answer=JSON.parse(draft['answer'+i]);}catch(e){throw new Error('Invalid saved self-check answer');}if(!validDraftValue(answer))throw new Error('Unsupported self-check answer');}if(draft['flag'+i]!=null&&!['0','1'].includes(draft['flag'+i]))throw new Error('Invalid self-check flag');const result=evaluate(q,answer);return {id,index:i,answer,flagged:draft['flag'+i]==='1',status:result.status,correct:result.correct};});
  for(const key of Object.keys(draft))if(!allowed.has(key))throw new Error('Unknown self-check field');
  return {paper:paper.id,phase:draft.phase,index:Number(draft.index),items,total:items.length,answered:items.filter(x=>['correct','incorrect'].includes(x.status)).length,unanswered:items.filter(x=>x.status==='unanswered').length,invalid:items.filter(x=>x.status==='invalid').length,correct:items.filter(x=>x.correct).length,flagged:items.filter(x=>x.flagged).length,academicImpact:0,certification:false};
 }
 function finishCheck(paper,bank,draft){const status=checkState(paper,bank,draft);if(status.invalid)throw new Error('Bitte ungueltige Eingaben korrigieren. Unbeantwortete Aufgaben duerfen offen bleiben.');return {...draft,phase:'submitted'};}


 // Fixed teaching inputs in the UI. This arithmetic never determines affordability or legal priority.
 function debtSchedule(principal,monthlyRate,payment,months=24){
  finite(principal,'principal',0,100000);finite(monthlyRate,'monthlyRate',0,.05);finite(payment,'payment',0,100000);integer(months,'months',1,60);
  let balance=money(principal),interestTotal=0,paidTotal=0;const rows=[];
  for(let month=1;month<=months&&balance>0;month++){
   const opening=balance,interest=money(opening*monthlyRate),paid=money(Math.min(opening+interest,payment));balance=money(opening+interest-paid);interestTotal=money(interestTotal+interest);paidTotal=money(paidTotal+paid);
   rows.push({month,opening,interest,payment:paid,principalReduction:money(paid-interest),balance});
  }
  return {rows,closing:balance,interestTotal,paidTotal,repaid:balance===0,monthsShown:rows.length,personalRecommendation:false,assumptions:'Fictional monthly interest before payment; cent rounding; no fees or new borrowing; not a legal interest rate or personal debt plan.'};
 }
 return {assessmentFingerprint,debtSchedule,validDraftValue,startCheck,checkState,finishCheck,VERSION,KEY,parseNumber,evaluate,budget,provision,cashCalendar,annualPay,salaryExample,health,wealth,brokerCost,orderCost,benefit,taxProfile,createStore,normalizedChapter,educationGuard,reviewState,presentationOrder,practiceSelection,safeSourceUrl,searchText,matchesSearch,escape};
});
