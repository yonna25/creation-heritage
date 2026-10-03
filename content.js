// ===== ORIGINE : module 1 = 5 niveaux (v29) =====
// Règle : une idée forte → une Parole → une question → une action → une célébration.
// Chaque niveau = 1 chapitre ; types d'écrans : in, idee, qr, bl, cel (fin de niveau), fin (finale du module).
const OTR={t:"Si DIEU est mon Créateur et que ma vie vient de LUI, une nouvelle question se pose :",h:"❤️ Quelle relation suis-je appelé à avoir avec LUI ?",b:"Voir ma synthèse →"};
const ORV=["Je viens de DIEU.","Mon identité commence par ce qu'IL dit de moi.","Ce que j'ai m'est confié.","Ma vie a une direction.","Je ne suis pas ma propre source."];
const mkO=(n,id,ic,t,q,v,r,ch)=>({id:id,ic:ic,n:t,q:q,p:v,s:r,jy:{rv:ORV,tr:OTR,ch:[{id:'c'+n,ic:ic,t:t,s:ch}]}});
const OL=[
mkO(1,"origine-1","🌱","Source","Ma vie vient de DIEU.",[["Genèse 2.7","L'Éternel DIEU forma l'homme de la poussière de la terre, IL souffla dans ses narines un souffle de vie, et l'homme devint un être vivant."]],"Ce que DIEU crée, IL lui donne aussi un sens.",[
 {t:"in",ic:"🚶",h:"5 niveaux, 2 minutes chacun",tx:"Chaque niveau : une idée, une Parole, une question, une action.\nTu avances à ton rythme et tu peux t'arrêter à la fin de chaque niveau.",chn:["SOURCE","IDENTITÉ","RESPONSABILITÉ","MISSION","RETOUR À LA SOURCE"],b:"Commencer →"},
 {t:"idee",big:"Ma vie vient de DIEU.",tx:"DIEU m'a créé. Ma vie ne commence donc pas avec mes propres choix : elle commence avec LUI.",v:[["Genèse 2.7","L'Éternel DIEU forma l'homme de la poussière de la terre, IL souffla dans ses narines un souffle de vie, et l'homme devint un être vivant."]]},
 {t:"qr",k:"q1",q:"Si ma vie vient de DIEU, est-ce que je peux décider seul de son sens ?",o:[["Oui, c'est ma vie : je décide seul","C'est une réaction courante. Mais une vie que je n'ai pas choisie de recevoir peut-elle avoir un sens que je me donne seul ?",0],["Non : DIEU a créé ma vie, IL lui donne aussi un sens","Oui. Ce qui est reçu porte déjà une intention.",1],["Je ne sais pas encore","C'est un très bon point de départ : la suite va t'aider.",2]],r:"Ce que DIEU crée, IL lui donne aussi un sens."},
 {t:"bl",k:"a1",free:1,h:"✋ Mon action",pre:"Merci DIEU pour",post:".",ph:"ma santé, ma famille…"},
 {t:"cel",r:"Ce que DIEU crée, IL lui donne aussi un sens."}]),
mkO(2,"origine-2","🪞","Identité","Mon identité commence par ce que DIEU dit de moi.",[["Genèse 1.27","DIEU créa l'homme à SON image, IL le créa à l'image de DIEU, IL créa l'homme et la femme."]],"Un regard peut m'évaluer, seul DIEU me définit.",[
 {t:"idee",big:"Mon identité commence par ce que DIEU dit de moi.",tx:"J'ai été créé à SON image.\nMa valeur ne naît ni du regard des autres, ni de mes résultats.",v:[["Genèse 1.27","DIEU créa l'homme à SON image, IL le créa à l'image de DIEU, IL créa l'homme et la femme."]]},
 {t:"qr",k:"q2",tx:"Quelqu'un te dit :",th:"« Tu es nul. »",q:"Qui décide de ce que tu vaux ?",o:[["Cette personne, si elle le pense vraiment","Une opinion, même sincère, reste une opinion.",0],["Mes résultats","Une valeur qui dépend des résultats monte et descend avec eux.",0],["DIEU, qui m'a créé","Oui. Voilà une base qui ne bouge pas.",1]],r:"Un regard peut m'évaluer, seul DIEU me définit."},
 {t:"bl",k:"a2",free:1,h:"✋ Mon action",pre:"Quand je pense « je suis nul », je me rappelle :",post:"",ph:"j'ai été créé à SON image"},
 {t:"cel",r:"Un regard peut m'évaluer, seul DIEU me définit."}]),
mkO(3,"origine-3","🎒","Responsabilité","Ce que j'ai m'est confié.",[["Genèse 2.15","L'Éternel DIEU prit l'homme, et le plaça dans le jardin d'Éden pour le cultiver et pour le garder."]],"Je ne possède pas, je gère.",[
 {t:"idee",big:"Ce que j'ai m'est confié.",tx:"DIEU ne m'a pas seulement donné la vie : IL m'a confié des choses à cultiver et à garder.",v:[["Genèse 2.15","L'Éternel DIEU prit l'homme, et le plaça dans le jardin d'Éden pour le cultiver et pour le garder."]]},
 {t:"qr",k:"q3",tx:"Tu reçois beaucoup d'argent.",q:"Est-ce « mon argent » ou « ce qui m'est confié » ?",o:[["C'est mon argent, j'en fais ce que je veux","Tenir quelque chose en main ne veut pas dire en être le propriétaire.",0],["Cela m'est confié : j'en prends soin","Exactement. Recevoir en confiance, ce n'est pas posséder.",1]],r:"Je ne possède pas, je gère."},
 {t:"bl",k:"a3",free:1,h:"✋ Mon action",pre:"Cette semaine, je prends mieux soin de",post:".",ph:"mon temps, mon corps…"},
 {t:"cel",r:"Je ne possède pas, je gère."}]),
mkO(4,"origine-4","🧭","Mission","Ma vie a une direction.",[["Genèse 1.28","DIEU les bénit, et DIEU leur dit : Soyez féconds, multipliez, remplissez la terre, et l'assujettissez ; dominez sur les poissons de la mer, sur les oiseaux du ciel, et sur tout animal qui se meut sur la terre."]],"DIEU ne donne pas seulement la vie : IL confie quelque chose à accomplir.",[
 {t:"idee",big:"Ma vie a une direction.",tx:"Dès le commencement, DIEU bénit l'homme et lui parle d'avancer, de porter du fruit.",v:[["Genèse 1.28","DIEU les bénit, et DIEU leur dit : Soyez féconds, multipliez, remplissez la terre, et l'assujettissez ; dominez sur les poissons de la mer, sur les oiseaux du ciel, et sur tout animal qui se meut sur la terre."]]},
 {t:"qr",k:"q4",tx:"Deux personnes partent marcher.\nLa première avance sans savoir où elle va.\nLa seconde connaît sa destination.",q:"Laquelle sait où elle va ?",o:[["La première","Elle avance, mais marcher n'est pas la même chose que se diriger.",0],["La seconde","Oui : chacun de ses pas a un sens.",1]],r:"DIEU ne donne pas seulement la vie : IL confie quelque chose à accomplir."},
 {t:"bl",k:"a4",free:1,h:"✋ Mon action",pre:"Une décision qui va dans cette direction :",post:"",ph:"je décide de…"},
 {t:"cel",r:"DIEU ne donne pas seulement la vie : IL confie quelque chose à accomplir."}]),
mkO(5,"origine-5","🔄","Retour à la source","Quand je décide seul de ce qui est bon, j'oublie d'où je viens.",[["Genèse 3.1","Il dit à la femme : DIEU a-t-IL réellement dit : Vous ne mangerez pas de tous les arbres du jardin ?"],["Genèse 3.5","Mais DIEU sait que, le jour où vous en mangerez, vos yeux s'ouvriront, et que vous serez comme des dieux, connaissant le bien et le mal."]],"Je ne suis pas ma propre source.",[
 {t:"idee",big:"Quand je décide seul de ce qui est bon, j'oublie d'où je viens.",tx:"Le serpent sème d'abord un doute sur la Parole de DIEU, puis propose : décide toi-même de ce qui est bon.",v:[["Genèse 3.1","Il dit à la femme : DIEU a-t-IL réellement dit : Vous ne mangerez pas de tous les arbres du jardin ?"],["Genèse 3.5","Mais DIEU sait que, le jour où vous en mangerez, vos yeux s'ouvriront, et que vous serez comme des dieux, connaissant le bien et le mal."]]},
 {t:"qr",k:"q5",q:"Dans quel domaine est-ce que je vis comme si j'étais ma propre origine ?",o:[["Mon identité"],["Mes choix"],["Mon argent"],["Mes relations"],["Mon avenir"],["Mes réactions"]],fb:"Merci pour ta franchise : tu n'as pas à tout changer aujourd'hui, un premier pas suffit.",r:"Je ne suis pas ma propre source."},
 {t:"bl",k:"a5",free:1,h:"✋ Mon action",pre:"Quand",post:", je me rappelle : je viens de DIEU.",ph:"je décide seul…"},
 {t:"fin"}])
];

const L=[
{id:"relation",
 ic:"❤️",
 n:"Relation",
 q:"Qui est DIEU pour moi ?",
 p:[["Jean 17.3", "Or, la vie éternelle, c'est qu'ils TE connaissent, TOI, le seul vrai DIEU, et celui que TU as envoyé, YESHUA’H."], ["Psaume 23.1", "L'Éternel est mon berger : je ne manquerai de rien."]],
 r:"Si DIEU désire être connu et établir une relation avec toi, comment cela change-t-il ta manière de LE considérer ?",
 d:["Est-ce que je connais réellement DIEU ou seulement ce que j'ai entendu dire de LUI ?", "Quelle image de DIEU influence ma manière de m'approcher de LUI ?", "Peut-on entretenir une relation avec quelqu'un que l'on ne cherche pas à connaître ?"],
 rl:"À la lumière de ces questions, comment décrirais-tu aujourd'hui ta relation avec DIEU ?",
 z:[["Selon Jean 17.3, la vie éternelle, c'est…", ["accumuler des connaissances", "connaître DIEU et YESHUA’H", "respecter des règles"], 1], ["Vrai ou faux : DIEU est décrit comme un berger qui prend soin de moi.", ["Vrai", "Faux"], 0], ["Tu traverses un manque. Comment le Psaume 23 t'invite-t-il à regarder DIEU ?", ["Comme un juge distant", "Comme un berger qui pourvoit", "Comme une idée abstraite"], 1]],
 s:"DIEU n'est pas lointain : IL désire une relation personnelle avec moi."},
{id:"identite",
 ic:"🪞",
 n:"Identité",
 q:"Qui suis-je ?",
 p:[["Éphésiens 2.10", "Car nous sommes SON ouvrage, ayant été créés en YESHUA’H pour de bonnes œuvres."], ["1 Pierre 2.9", "Vous, au contraire, vous êtes une race élue, un sacerdoce royal, une nation sainte, un peuple acquis."]],
 r:"Si ton identité se découvre en CHRIST, qu'est-ce que cela change dans la manière dont tu te définis ?",
 d:["Qui suis-je lorsque je ne me définis plus par mes réussites ou mes échecs ?", "Les regards des autres déterminent-ils réellement mon identité ?", "Qu'est-ce que DIEU dit de moi que je n'ai peut-être jamais considéré ?"],
 rl:"À la lumière de ce que tu découvres en CHRIST, comment te définirais-tu désormais ?",
 z:[["Éphésiens 2.10 dit que nous sommes…", ["SON ouvrage", "un accident", "des spectateurs"], 0], ["Vrai ou faux : mon identité se construit d'abord par le regard des autres.", ["Vrai", "Faux"], 1], ["Après un échec, tu te dis « je suis nul ». Que fais-tu ?", ["Je confronte cette pensée à ce que DIEU dit de moi", "Je l'accepte", "Je l'ignore"], 0]],
 s:"Mon identité est reçue de DIEU, elle ne se gagne pas."},
{id:"statut",
 ic:"📜",
 n:"Statut",
 q:"Quelle est ma condition devant DIEU ?",
 p:[["Romains 3.23", "Car tous ont péché et sont privés de la gloire de DIEU."], ["Romains 5.8", "Mais DIEU prouve SON amour envers nous, en ce que, lorsque nous étions encore des pécheurs, CHRIST est mort pour nous."]],
 r:"Si tous ont péché et que CHRIST est mort pour nous alors que nous étions encore pécheurs, qu'est-ce que cela révèle sur ta condition et sur l'amour de DIEU ?",
 d:["Est-ce que mes bonnes actions peuvent, à elles seules, me rendre juste devant DIEU ?", "Pourquoi ai-je besoin de la grâce de DIEU ?", "Qu'est-ce que la grâce de DIEU change dans ma relation avec LUI ?"],
 rl:"Comment la grâce de DIEU change-t-elle ta compréhension de ta condition devant LUI ?",
 z:[["Selon Romains 3.23, qui a péché ?", ["Seulement les autres", "Tous", "Personne"], 1], ["Vrai ou faux : CHRIST est mort pour nous après que nous nous sommes améliorés.", ["Vrai", "Faux"], 1], ["Pourquoi Romains 5.8 est-il une bonne nouvelle ?", ["L'amour de DIEU précède mon mérite", "Je dois d'abord me corriger", "Le péché n'existe pas"], 0]],
 s:"J'ai besoin de grâce, et DIEU me l'a donnée avant que je la mérite."},
{id:"position",
 ic:"👑",
 n:"Position",
 q:"Quelle place ai-je en CHRIST ?",
 p:[["Romains 8.1", "Il n'y a donc maintenant aucune condamnation pour ceux qui sont en YESHUA’H."], ["Éphésiens 2.6", "IL nous a ressuscités ensemble, et nous a fait asseoir ensemble dans les lieux célestes en YESHUA’H."]],
 r:"Si tu es en CHRIST, comment cela change-t-il ta manière de te considérer devant DIEU ?",
 d:["Ma place devant DIEU dépend-elle de mes performances quotidiennes ?", "Quelle différence y a-t-il entre me sentir condamné et être sans condamnation en CHRIST ?", "Comment la place que DIEU m'a donnée influence-t-elle ma manière de m'approcher de LUI ?"],
 rl:"Si DIEU t'a donné une position en CHRIST, comment cela devrait-il influencer ta manière de vivre et de t'approcher de LUI ?",
 z:[["Romains 8.1 déclare…", ["aucune condamnation en CHRIST", "une condamnation permanente", "une condamnation partielle"], 0], ["Vrai ou faux : ma position en CHRIST dépend de mes performances du jour.", ["Vrai", "Faux"], 1], ["Tu te sens indigne de prier. Que rappelles-tu ?", ["Je suis en CHRIST, j'ai accès à DIEU", "Je prierai quand je serai meilleur", "DIEU est fâché"], 0]],
 s:"Je suis en CHRIST : accepté, sans condamnation, à la place qu'IL m'a donnée."},
{id:"heritage",
 ic:"🎁",
 n:"Héritage",
 q:"Qu'est-ce qui m'est donné et réservé en CHRIST ?",
 p:[["Romains 8.17", "Et si nous sommes enfants, nous sommes aussi héritiers : héritiers de DIEU, et cohéritiers de CHRIST."], ["1 Pierre 1.4", "Pour un héritage qui ne peut ni se corrompre, ni se souiller, ni se flétrir, réservé dans les cieux pour vous."]],
 r:"Si tu es enfant de DIEU et héritier avec CHRIST, comment cette vérité change-t-elle ta manière de vivre aujourd'hui ?",
 d:["Quelle différence y a-t-il entre travailler pour obtenir une place et vivre à partir d'une place reçue ?", "Mon avenir est-il uniquement déterminé par ce que je possède aujourd'hui ?", "Comment l'espérance de mon héritage influence-t-elle mes choix présents ?"],
 rl:"Sachant ce qui t'est donné et réservé en CHRIST, qu'est-ce que cela change dans ta manière de vivre aujourd'hui ?",
 z:[["Selon Romains 8.17, nous sommes…", ["des serviteurs sans droits", "héritiers avec CHRIST", "des invités temporaires"], 1], ["Vrai ou faux : l'héritage décrit en 1 Pierre 1.4 peut se corrompre.", ["Vrai", "Faux"], 1], ["Face à une épreuve, comment l'héritage t'aide-t-il ?", ["Il donne une espérance solide", "Il supprime toute difficulté", "Il est sans rapport avec ma vie"], 0]],
 s:"Ce que DIEU me réserve en CHRIST est sûr et durable : je vis avec espérance."}
];

// Acquisition des six notions : nt = notion, sq = question simple, vq = question de vérification, df = définition de référence, sm = à retenir
const N={
relation:{nt:"RELATION",sq:"Avec QUI suis-je en relation ?",vq:"Avec tes propres mots, qu'est-ce qu'une relation avec DIEU ?",df:"Une relation avec DIEU, c'est vivre en lien avec LUI, apprendre à LE connaître, L'écouter, LUI parler et marcher avec LUI.",sm:"DIEU désire que je LE connaisse personnellement."},
identite:{nt:"IDENTITÉ",sq:"Qui suis-je ?",vq:"Avec tes propres mots, qu'est-ce que signifie « IDENTITÉ » ?",df:"Mon identité, c'est qui je suis. Elle ne dépend pas seulement de ce que je fais ou de ce que les autres pensent de moi.",sm:"En CHRIST, DIEU me dit qui je suis."},
statut:{nt:"STATUT",sq:"Quelle est ma condition devant DIEU ?",vq:"Avec tes propres mots, qu'est-ce que signifie « STATUT » devant DIEU ?",df:"Mon statut, c'est la condition et la place que j'ai devant DIEU. En CHRIST, DIEU me donne une nouvelle condition et une nouvelle relation avec LUI.",sm:"Par la grâce, DIEU change ma condition devant LUI."},
position:{nt:"POSITION",sq:"Quelle place DIEU m'a-t-IL donnée ?",vq:"Avec tes propres mots, qu'est-ce que signifie « POSITION » en CHRIST ?",df:"Ma position, c'est la place que DIEU m'a donnée. En CHRIST, je dois comprendre la place que DIEU m'a donnée en LUI et vivre à partir de cette place.",sm:"Ma place en CHRIST est reçue, elle ne dépend pas de mes performances."},
heritage:{nt:"HÉRITAGE",sq:"Qu'est-ce que DIEU me donne et me réserve comme héritier ?",vq:"Avec tes propres mots, qu'est-ce que signifie « HÉRITAGE » en CHRIST ?",df:"Mon héritage, c'est ce que DIEU donne à SES enfants et ce qu'IL leur réserve. En CHRIST, l'enfant de DIEU est aussi héritier avec CHRIST.",sm:"Je vis aujourd'hui à partir de ce que DIEU me donne et me réserve."}
};
L.forEach(l=>Object.assign(l,N[l.id]));

// ===== MODULES (valeurs d'origine) =====
// Les modules et niveaux se gèrent ensuite dans le tableau de bord admin (onglet Modules) : pas besoin de modifier ce fichier.
// Niveaux à venir (titre + question clé, contenu à rédiger) : s'affichent « Bientôt disponible ».
// Pour en activer un : admin > Modules > ✏️ puis remplir le contenu.
const SOON=(pre,ic,a)=>a.map((x,i)=>({id:pre+(i+1),ic,n:x[0],q:x[1],soon:true}));
const X2=SOON("naitre-","🕊️",[["J’ai besoin d’être sauvé","Pourquoi ai-je besoin d’être sauvé ?"],["DIEU m’aime","Que révèle l’amour de DIEU pour moi ?"],["YESHUA’H est venu pour moi","Qui est-IL et qu’a-t-IL fait pour moi ?"],["Je crois en LUI","Que signifie croire en YESHUA’H ?"],["Je reçois une vie nouvelle","Qu’est-ce que naître de nouveau ?"],["Je deviens enfant de DIEU","Qu’est-ce qui change dans mon identité et ma relation avec DIEU ?"],["Je commence à marcher avec LUI","Comment vivre et grandir dans cette nouvelle vie ?"]]);
const X3=SOON("consecration-","🕯️",[["À QUI appartient réellement ma vie ?","Découvrir ce que change le fait de savoir d’où vient ma vie."],["Que signifie vraiment appartenir à DIEU ?","Comprendre ce que DIEU attend d’une vie qui LUI appartient."],["Que suis-je prêt à remettre entre les mains de DIEU ?","Découvrir ce que signifie réellement se donner à LUI."],["Qu’est-ce qui est consacré à DIEU ?","Apprendre à reconnaître et à respecter ce qui LUI appartient."],["Mes choix montrent-ils que je veux plaire à DIEU ?","Découvrir comment la consécration transforme mes décisions."],["Qu’est-ce qui peut me faire abandonner ma consécration ?","Comprendre comment demeurer fidèle à DIEU malgré les obstacles."],["Que peut faire DIEU avec une vie qui LUI est entièrement consacrée ?","Découvrir comment une vie donnée à DIEU peut devenir utile à SES desseins."]]);
const X4=SOON("enfant-","🌳",[["Devenir enfant de DIEU n’est que le commencement","Qu’est-ce que DIEU attend de SES enfants ?"],["Je découvre mon identité en LUI","Qui suis-je maintenant que je suis enfant de DIEU ?"],["Je grandis dans la connaissance de DIEU","Comment apprendre à connaître CELUI qui m’a donné la vie ?"],["Je deviens semblable à CHRIST","Qu’est-ce que DIEU veut former en moi ?"],["Je porte du fruit","Comment ma nouvelle vie devient-elle visible ?"],["Je sers les desseins de DIEU","À quoi ma vie peut-elle servir dans SON Royaume ?"]]);
const X5=SOON("renoncement-","🔥",[["Tout ce que je fais plaît-il à DIEU ?", "Comment reconnaître les œuvres mortes ?"], ["Pourquoi dois-je abandonner certaines pratiques ?", "Qu’est-ce qui m’empêche de vivre pleinement pour DIEU ?"], ["Je laisse derrière moi mon ancienne vie", "Comment vivre le changement que DIEU attend de moi ?"]]);
const X6=SOON("foi-","🛡️",[["Croire en DIEU, est-ce simplement croire qu’IL existe ?", "Que signifie réellement avoir foi en DIEU ?"], ["Sur quoi repose ma foi ?", "Comment reconnaître une foi fondée sur la Parole de DIEU ?"], ["Ma foi se voit-elle dans ma manière de vivre ?", "Comment la foi transforme-t-elle mes décisions et mes actions ?"]]);
const X7=SOON("baptemes-","💧",[["Pourquoi plusieurs baptêmes dans la Bible ?", "Quels sont les différents baptêmes mentionnés dans les Écritures ?"], ["Que signifie être baptisé ?", "Que se passe-t-il réellement à travers le baptême ?"], ["Quelle est ma relation avec le baptême ?", "Que révèle le baptême sur ma nouvelle vie en CHRIST ?"]]);
const X8=SOON("mains-","🙌",[["Pourquoi imposait-on les mains dans la Bible ?", "Que signifie ce geste dans la vie spirituelle ?"], ["Que peut-il se passer lorsqu'on impose les mains ?", "Quels sont les objectifs bibliques de l’imposition des mains ?"], ["Comment comprendre et pratiquer ce geste aujourd'hui ?", "Quelles sont les responsabilités et les précautions à connaître ?"]]);
const X9=SOON("resurrection-","🌅",[["La mort est-elle vraiment la fin ?", "Que révèle la Bible sur la mort et la résurrection ?"], ["Que se passera-t-il après la mort ?", "Quelle espérance DIEU donne-t-IL à ceux qui croient en LUI ?"], ["Quel corps aurons-nous à la résurrection ?", "Que signifie ressusciter pour la vie éternelle ?"]]);
const X10=SOON("jugement-","⚖️",[["Devant QUI devrai-je rendre compte de ma vie ?", "Pourquoi chaque être humain devra-t-il comparaître devant DIEU ?"], ["Que révèle le jugement de DIEU sur ma manière de vivre ?", "Quelle place occupent mes choix et mes œuvres ?"], ["Quelle sera ma destinée éternelle ?", "Que dit la Bible sur la vie éternelle et le jugement ?"]]);
const CAT_V=29;
const M0=[{n:"Module 1",t:"Origine",lv:OL.map(l=>l.id)},{n:"Module 2",t:"Relation",lv:[]},{n:"Module 3",t:"Identité",lv:[]},{n:"Module 4",t:"Statut",lv:[]},{n:"Module 5",t:"Position",lv:[]},{n:"Module 6",t:"Héritage",lv:[]}];
M0.forEach((m,i)=>m.id='m'+(i+1));
const VX=[];
const L0=OL.concat(L,X2,X3,X4,X5,X6,X7,X8,X9,X10),M=[];
function applyCatalog(c){
 const E=t=>String(t).replace(/[&<>"]/g,k=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[k])),
  D=x=>typeof x=='string'?E(x):Array.isArray(x)?x.map(D):x,
  base={};L0.forEach(l=>base[l.id]=l);
 const cl=(c&&c.levels)||{},mods=(c&&c.cv>=CAT_V&&Array.isArray(c.modules)&&c.modules.length)?c.modules:M0;
 L.length=0;M.length=0;
 VX.length=0;((c&&c.verses)||[]).forEach(v=>{if(v&&v.ref&&v.t&&v.mod)VX.push({id:String(v.id||'').replace(/[^a-zA-Z0-9_-]/g,''),ref:String(v.ref),t:String(v.t),ver:v.ver||'',mod:v.mod,e:v.e||'',k:Array.isArray(v.k)?v.k:[],on:v.on!==false})});
 mods.forEach((m,mi)=>{if(m.hide)return;const k=M.length;M.push({id:m.id||'m'+(mi+1),n:E(m.n||''),t:E(m.t||'')});let n=0;
  (m.lv||[]).forEach(id=>{const raw=cl[id]?Object.assign({},cl[id]):base[id];if(!raw)return;
   const l=cl[id]?Object.fromEntries(Object.entries(raw).map(([a,b])=>[a,D(b)])):Object.assign({},raw);
   if(cl[id]&&base[id]&&base[id].jy){l.jy=base[id].jy;l.z=base[id].z}l.id=String(id).replace(/[^a-zA-Z0-9_-]/g,'');l.m=k;if(l.d&&!l.rl)l.rl=l.r;L.push(l);n++});
  if(!n)L.push({id:"_bientot"+k,m:k,ic:"🕯️",n:E(m.t||''),soon:true})})}
applyCatalog(null);
