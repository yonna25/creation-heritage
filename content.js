// ===== ORIGINE : module 1 = 5 niveaux (v29) =====
// Règle : une idée forte → une Parole → une question → une action → une célébration.
// Chaque niveau = 1 chapitre ; types d'écrans : in, idee, qr, bl, cel (fin de niveau), fin (finale du module).
const OTR={t:"Si DIEU est mon Créateur et que ma vie vient de LUI, une nouvelle question se pose :",h:"❤️ Qui est DIEU pour moi ?",b:"Découvrir RELATION →"};
const ORV=["Je viens de DIEU.","Je porte l'image de DIEU.","Ce que j'ai m'est confié.","Ma vie a une direction.","Je ne suis pas ma propre source."];
const OPH="Je ne suis pas ma propre source : ma vie vient de DIEU.";
const mkO=(n,id,ic,t,q,v,r,ch,X)=>({id:id,ic:ic,n:t,q:q,p:v,s:r,jy:Object.assign({rv:ORV,tr:OTR,ti:"🌱 ORIGINE",ph:OPH},X||{},{ch:[{id:'c'+id,ic:ic,t:t,s:ch}]})});
const OL=[
mkO(1,"origine-1","🌱","Source","Ma vie vient de DIEU.",[["Genèse 2.7","L'Éternel DIEU forma l'homme de la poussière de la terre, IL souffla dans ses narines un souffle de vie, et l'homme devint un être vivant."]],"Ce que DIEU crée, IL lui donne aussi un sens.",[
 {t:"in",ic:"🚶",h:"5 niveaux, 2 minutes chacun",tx:"Suis-je seulement le résultat de la vie biologique, ou ai-je été créé par DIEU ?\n\nChaque niveau : une idée, une Parole, une question, une action.\nTu avances à ton rythme et tu peux t'arrêter à la fin de chaque niveau.",chn:["SOURCE","IMAGE","RESPONSABILITÉ","MISSION","RETOUR À LA SOURCE"],b:"Commencer →"},
 {t:"idee",big:"Ma vie vient de DIEU.",tx:"DIEU m'a créé. Ma vie ne commence donc pas avec mes propres choix : elle commence avec LUI.",v:[["Genèse 2.7","L'Éternel DIEU forma l'homme de la poussière de la terre, IL souffla dans ses narines un souffle de vie, et l'homme devint un être vivant."]]},
 {t:"qr",k:"q1",q:"Si ma vie vient de DIEU, est-ce que je peux décider seul de son sens ?",o:[["Oui, c'est ma vie : je décide seul","C'est une réaction courante. Mais une vie que je n'ai pas choisie de recevoir peut-elle avoir un sens que je me donne seul ?",0],["Non : DIEU a créé ma vie, IL lui donne aussi un sens","Oui. Ce qui est reçu porte déjà une intention.",1],["Je ne sais pas encore","C'est un très bon point de départ : la suite va t'aider.",2]],r:"Ce que DIEU crée, IL lui donne aussi un sens."},
 {t:"bl",k:"a1",free:1,h:"✋ Mon action",pre:"Merci DIEU pour",post:".",ph:"ma santé, ma famille…"},
 {t:"cel",r:"Ce que DIEU crée, IL lui donne aussi un sens."}]),
mkO(2,"origine-2","🪞","Image","Je porte l'image de DIEU.",[["Genèse 1.27","DIEU créa l'homme à SON image, IL le créa à l'image de DIEU, IL créa l'homme et la femme."]],"Je porte l'image de DIEU : je ne suis pas un hasard.",[
 {t:"idee",big:"Je porte l'image de DIEU.",tx:"DIEU ne m'a pas seulement donné la vie : IL a mis SON image en moi. Je ne suis pas un produit du hasard.",v:[["Genèse 1.27","DIEU créa l'homme à SON image, IL le créa à l'image de DIEU, IL créa l'homme et la femme."]]},
 {t:"qr",k:"q2",q:"Si je porte l'image de DIEU, suis-je le fruit du hasard ?",o:[["Oui, ma vie est un hasard","Un hasard n'a pas d'intention. Genèse 1.27 parle de quelqu'un qui crée volontairement, à SON image.",0],["Non : DIEU m'a créé à SON image","Oui. Porter SON image, c'est venir de LUI, avec une intention.",1]],r:"Je porte l'image de DIEU : je ne suis pas un hasard."},
 {t:"bl",k:"a2",free:1,h:"✋ Mon action",pre:"DIEU, merci de m'avoir créé à SON image. Je veux TE dire :",post:"",ph:"merci, je suis là…"},
 {t:"cel",r:"Je porte l'image de DIEU : je ne suis pas un hasard."}]),
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


// ===== RELATION : module 2 = 5 niveaux (v30) =====
const RX={rv:["DIEU me cherche.","Je LE connais.","IL me parle.","Je LUI parle.","Je marche avec LUI."],tr:{t:"Si DIEU est mon Créateur et que je marche avec LUI, une nouvelle question se pose :",h:"🪞 Qui suis-je en DIEU ?",b:"Découvrir IDENTITÉ →"},ti:"❤️ RELATION",ph:"DIEU est proche de moi : IL désire que je LE connaisse personnellement."};
const V_G39=["Genèse 3.9","Mais l'Éternel DIEU appela l'homme, et lui dit : Où es-tu ?"],V_J173=["Jean 17.3","Or, la vie éternelle, c'est qu'ils TE connaissent, TOI, le seul vrai DIEU, et celui que TU as envoyé, YESHUA’H."],V_P231=["Psaume 23.1","L'Éternel est mon berger : je ne manquerai de rien."],V_J1027=["Jean 10.27","MES brebis entendent MA voix ; JE les connais, et elles ME suivent."],V_PH46=["Philippiens 4.6","Ne vous inquiétez de rien ; mais en toute chose faites connaître vos besoins à DIEU par des prières et des supplications, avec des actions de grâces."],V_G524=["Genèse 5.24","Hénoc marcha avec DIEU, puis il ne parut plus, parce que DIEU le prit."];
const RL=[
mkO(1,"relation-1","🤝","Initiative","DIEU est celui qui fait le premier pas vers moi.",[V_G39],"DIEU ne m'attend pas de loin : IL vient me chercher.",[
 {t:"in",ic:"🚶",h:"5 niveaux, 2 minutes chacun",tx:"Qui est DIEU pour moi ?\n\nChaque niveau : une idée, une Parole, une question, une action.\nTu avances à ton rythme et tu peux t'arrêter à la fin de chaque niveau.",chn:["INITIATIVE","CONNAÎTRE","ÉCOUTER","PARLER","MARCHER"],b:"Commencer →"},
 {t:"idee",big:"DIEU est celui qui fait le premier pas vers moi.",tx:"Après la faute, l'homme se cache. Mais DIEU ne reste pas à distance : IL appelle.",v:[V_G39]},
 {t:"qr",k:"r1",q:"Après la faute, l'homme se cache. Qui part à sa recherche ?",o:[["L'homme, qui revient vers DIEU","Dans le récit, c'est l'inverse : l'homme se cache, et c'est DIEU qui appelle en premier.",0],["Personne : DIEU laisse l'homme se débrouiller seul","Le texte montre le contraire : DIEU ne laisse pas l'homme dans sa cachette.",0],["DIEU, qui l'appelle : « Où es-tu ? »","Oui. Avant que l'homme ne bouge, DIEU a déjà fait le premier pas.",1]],r:"DIEU ne m'attend pas de loin : IL vient me chercher."},
 {t:"bl",k:"b1",free:1,h:"✋ Mon action",pre:"DIEU, je suis là. Je veux TE dire :",post:"",ph:"merci, pardon, j'ai besoin de TOI…"},
 {t:"cel",r:"DIEU ne m'attend pas de loin : IL vient me chercher."}]),
mkO(2,"relation-2","📖","Connaître","DIEU est celui que je peux connaître, pas seulement celui dont j'entends parler.",[V_J173,V_P231],"Connaître DIEU, c'est vivre en lien avec LUI.",[
 {t:"idee",big:"DIEU est celui que je peux connaître, pas seulement celui dont j'entends parler.",tx:"Connaître DIEU, ce n'est pas accumuler des informations sur LUI : c'est vivre en lien avec LUI, comme un berger avec ses brebis.",v:[V_J173,V_P231]},
 {t:"qr",k:"r2",q:"On peut connaître quelqu'un par ce que les autres en disent, ou en passant du temps avec lui. Comment connais-tu DIEU ?",o:[["Surtout par ce que j'ai entendu dire de LUI"],["Par ce que je vis avec LUI"],["Un peu des deux"]],fb:"Merci pour ta franchise : c'est ton point de départ, et il peut grandir.",r:"Connaître DIEU, c'est vivre en lien avec LUI."},
 {t:"bl",k:"b2",free:1,h:"✋ Mon action",pre:"Une chose que je sais de DIEU parce que je l'ai vécue :",post:"",ph:"IL m'a aidé quand…"},
 {t:"cel",r:"Connaître DIEU, c'est vivre en lien avec LUI."}]),
mkO(3,"relation-3","👂","Écouter","DIEU est celui qui me parle.",[V_J1027],"Une relation grandit quand j'écoute.",[
 {t:"idee",big:"DIEU est celui qui me parle.",tx:"Les brebis reconnaissent la voix de leur berger. DIEU parle, et je peux apprendre à L'entendre.",v:[V_J1027]},
 {t:"qr",k:"r3",q:"Ta journée est pleine de bruit. À quel moment laisses-tu de la place pour entendre DIEU ?",o:[["Le matin"],["Le soir"],["Pendant la journée"],["Je n'ai pas encore de moment"]],fb:"Merci pour ta franchise : l'important est de choisir un moment, même court.",r:"Une relation grandit quand j'écoute."},
 {t:"bl",k:"b3",free:1,h:"✋ Mon action",pre:"Je lis la Parole de DIEU à ce moment :",post:"",ph:"le matin avant de partir…"},
 {t:"cel",r:"Une relation grandit quand j'écoute."}]),
mkO(4,"relation-4","🙏","Parler","DIEU est un PÈRE à qui je peux parler.",[V_PH46],"Prier, c'est parler à quelqu'un qui m'écoute.",[
 {t:"idee",big:"DIEU est un PÈRE à qui je peux parler.",tx:"Pas besoin de belles phrases : DIEU m'invite à LUI présenter mes besoins, avec confiance.",v:[V_PH46]},
 {t:"qr",k:"r4",q:"Tu portes une inquiétude. À qui en parles-tu en premier ?",o:[["À personne : je garde tout pour moi","Garder tout pour soi pèse lourd. Le texte invite à une autre voie : tout faire connaître à DIEU.",0],["À mes proches d'abord","Parler à ses proches est précieux. Le texte ajoute : en toute chose, faire aussi connaître ses besoins à DIEU."],["À DIEU, par la prière","Oui. Prier, c'est faire connaître mes besoins à quelqu'un qui m'écoute.",1]],r:"Prier, c'est parler à quelqu'un qui m'écoute."},
 {t:"bl",k:"b4",free:1,h:"✋ Mon action",pre:"DIEU, aujourd'hui je TE confie :",post:"",ph:"mon inquiétude, ma journée…"},
 {t:"cel",r:"Prier, c'est parler à quelqu'un qui m'écoute."}]),
mkO(5,"relation-5","🚶","Marcher","DIEU est celui qui marche avec moi au quotidien.",[V_G524],"Une relation n'est pas une visite, c'est un chemin.",[
 {t:"idee",big:"DIEU est celui qui marche avec moi au quotidien.",tx:"Hénoc a marché avec DIEU : pas une visite de temps en temps, mais un chemin fait ensemble, jour après jour.",v:[V_G524]},
 {t:"qr",k:"r5",q:"Une rencontre par an ou un chemin fait ensemble : qu'est-ce qui construit une relation ?",o:[["Une rencontre par an, même très belle","Une belle rencontre compte, mais une relation se construit surtout dans la durée.",0],["Un chemin fait ensemble, jour après jour","Oui. C'est la présence régulière qui fait grandir une relation.",1]],r:"Une relation n'est pas une visite, c'est un chemin."},
 {t:"bl",k:"b5",free:1,h:"✋ Mon action",pre:"Chaque jour, je marche avec DIEU en",post:".",ph:"priant, lisant, remerciant…"},
 {t:"fin"}],RX)
];

// ===== IDENTITÉ : module 3 = 5 niveaux (v31) =====
const IX={rv:["DIEU m'a créé.","IL m'aime.","IL me pardonne.","Je suis SON enfant.","IL me renouvelle."],tr:{t:"Maintenant que je sais qui je suis, une nouvelle question se pose :",h:"📜 Quelle est ma condition devant DIEU ?",b:"Découvrir STATUT →"},ti:"🪞 IDENTITÉ",ph:"En YESHUA’H, je suis aimé, pardonné et enfant de DIEU."};
const V_P13914=["Psaume 139.14","Je TE loue de ce que je suis une créature si merveilleuse. TES œuvres sont admirables, et mon âme le reconnaît bien."],V_R58=["Romains 5.8","Mais DIEU prouve SON amour envers nous, en ce que, lorsque nous étions encore des pécheurs, YESHUA’H est mort pour nous."],V_1J19=["1 Jean 1.9","Si nous confessons nos péchés, IL est fidèle et juste pour nous les pardonner, et pour nous purifier de toute iniquité."],V_P10312=["Psaume 103.12","Autant l'orient est éloigné de l'occident, autant IL éloigne de nous nos transgressions."],V_J112=["Jean 1.12","Mais à tous ceux qui l'ont reçue, à ceux qui croient en SON nom, elle a donné le pouvoir de devenir enfants de DIEU."],V_2C517=["2 Corinthiens 5.17","Si quelqu'un est en YESHUA’H, il est une nouvelle créature. Les choses anciennes sont passées ; voici, toutes choses sont devenues nouvelles."];
const IL=[
mkO(1,"identite-1","🌟","Créé","Ma valeur ne dépend pas de ce que je fais.",[V_P13914],"Ma valeur vient de CELUI qui m'a fait.",[
 {t:"in",ic:"🚶",h:"5 niveaux, 2 minutes chacun",tx:"Qui suis-je en DIEU ?\n\nChaque niveau : une idée, une Parole, une question, une action.\nTu avances à ton rythme et tu peux t'arrêter à la fin de chaque niveau.",chn:["CRÉÉ","AIMÉ","PARDONNÉ","ENFANT","NOUVEAU"],b:"Commencer →"},
 {t:"idee",big:"Ma valeur ne dépend pas de ce que je fais.",tx:"DIEU m'a fait avec soin. Ma valeur ne vient ni de mes résultats, ni du regard des autres : elle vient de CELUI qui m'a fait.",v:[V_P13914]},
 {t:"qr",k:"i1",q:"Quand tu te regardes, qu'est-ce qui te vient en premier : ce que tu fais ou ce que tu vaux ?",o:[["Ce que je fais"],["Ce que je vaux"],["Cela dépend des jours"]],fb:"Merci pour ta franchise : DIEU te regarde d'abord comme SA création, pas comme la liste de tes résultats.",r:"Ma valeur vient de CELUI qui m'a fait."},
 {t:"bl",k:"d1",free:1,h:"✋ Mon action",pre:"Une qualité que DIEU a mise en moi :",post:"",ph:"ma patience, mon écoute…"},
 {t:"cel",r:"Ma valeur vient de CELUI qui m'a fait."}]),
mkO(2,"identite-2","❤️","Aimé","DIEU m'a aimé alors que j'étais encore pécheur.",[V_R58],"DIEU m'a aimé avant que je fasse quoi que ce soit.",[
 {t:"idee",big:"DIEU m'a aimé alors que j'étais encore pécheur.",tx:"DIEU n'a pas attendu que je sois meilleur : IL a montré SON amour en YESHUA’H, avant que je fasse quoi que ce soit.",v:[V_R58]},
 {t:"qr",k:"i2",q:"Un ami t'aime seulement quand tu réussis. Un autre t'aime même quand tu échoues. Lequel ressemble à DIEU ?",o:[["Celui qui m'aime quand je réussis","Cet amour dépend des résultats. Le verset montre un amour qui vient avant tout mérite.",0],["Celui qui m'aime même quand j'échoue","Oui. DIEU m'a aimé alors que j'étais encore pécheur : SON amour ne dépend pas de ma réussite.",1]],r:"DIEU m'a aimé avant que je fasse quoi que ce soit."},
 {t:"bl",k:"d2",free:1,h:"✋ Mon action",pre:"DIEU, merci de m'aimer. Je veux TE dire :",post:"",ph:"merci pour…"},
 {t:"cel",r:"DIEU m'a aimé avant que je fasse quoi que ce soit."}]),
mkO(3,"identite-3","🕊️","Pardonné","DIEU pardonne et me purifie.",[V_1J19,V_P10312],"Mon péché ne me définit plus.",[
 {t:"idee",big:"DIEU pardonne et me purifie.",tx:"Quand je confesse ma faute, DIEU pardonne et purifie. Ce que j'ai fait est réel, mais cela ne me définit plus.",v:[V_1J19,V_P10312]},
 {t:"qr",k:"i3",q:"Quel mot t'a-t-on collé après une erreur, ou t'es-tu collé toi-même ?",o:[["Un mot que les autres m'ont collé"],["Un mot que je me suis collé moi-même"],["Les deux"],["Aucun mot en particulier"]],fb:"Merci pour ta franchise : ce mot n'a pas le dernier mot. DIEU pardonne et purifie.",r:"Mon péché ne me définit plus."},
 {t:"bl",k:"d3",free:1,h:"✋ Mon action",pre:"DIEU, je TE confesse :",post:"",ph:"ce que j'ai fait, ce que je porte…"},
 {t:"cel",r:"Mon péché ne me définit plus."}]),
mkO(4,"identite-4","🏠","Enfant","En recevant YESHUA’H, je deviens enfant de DIEU.",[V_J112],"Créé par DIEU, je deviens SON enfant en recevant YESHUA’H.",[
 {t:"idee",big:"En recevant YESHUA’H, je deviens enfant de DIEU.",tx:"DIEU m'a créé, et IL m'ouvre aussi la porte de SA famille : en recevant YESHUA’H, je deviens SON enfant.",v:[V_J112]},
 {t:"qr",k:"i4",q:"Un invité attend qu'on l'accueille. Un enfant rentre chez lui. Où te situes-tu avec DIEU ?",o:[["Plutôt comme un invité"],["Comme un enfant chez lui"],["Je ne sais pas encore"]],fb:"Merci pour ta franchise : Jean 1.12 est clair, recevoir YESHUA’H, c'est entrer dans la famille de DIEU.",r:"Créé par DIEU, je deviens SON enfant en recevant YESHUA’H."},
 {t:"bl",k:"d4",free:1,h:"✋ Mon action",pre:"Je peux dire à DIEU « PÈRE » parce que",post:".",ph:"je suis SON enfant…"},
 {t:"cel",r:"Créé par DIEU, je deviens SON enfant en recevant YESHUA’H."}]),
mkO(5,"identite-5","✨","Nouveau","En YESHUA’H, je suis une nouvelle création.",[V_2C517],"DIEU ne me répare pas, IL me renouvelle.",[
 {t:"idee",big:"En YESHUA’H, je suis une nouvelle création.",tx:"Le verset parle d'une « nouvelle créature » : en YESHUA’H, les choses anciennes sont passées. DIEU ne se contente pas de me réparer : IL me renouvelle.",v:[V_2C517]},
 {t:"qr",k:"i5",q:"Tu peux changer de vêtements, mais peux-tu changer de cœur seul ? Qui le peut ?",o:[["Moi, avec de la volonté","La volonté aide, mais le verset parle d'une nouvelle créature : cela vient de DIEU, en YESHUA’H.",0],["DIEU, en YESHUA’H","Oui. Un cœur nouveau est un don de DIEU, pas un effort de ma part.",1]],r:"DIEU ne me répare pas, IL me renouvelle."},
 {t:"bl",k:"d5",free:1,h:"✋ Mon action",pre:"Avec DIEU, je laisse derrière moi :",post:".",ph:"ma honte, ma peur…"},
 {t:"fin"}],IX)
];

// ===== STATUT : module 4 = 5 niveaux (v33) =====
const SX={rv:["J'ai besoin de grâce.","La grâce est un don.","IL m'a racheté.","IL me déclare juste.","Je suis réconcilié."],tr:{t:"Si je suis réconcilié avec DIEU, une nouvelle question se pose :",h:"👑 Quelle place DIEU me donne-t-IL ?",b:"Découvrir POSITION →"},ti:"⚖️ STATUT",ph:"Par la grâce, je suis racheté, justifié et réconcilié avec DIEU."};
const V_R323=["Romains 3.23","Car tous ont péché et sont privés de la gloire de DIEU."],V_E28=["Éphésiens 2.8-9","Car c'est par la grâce que vous êtes sauvés, par le moyen de la foi. Et cela ne vient pas de vous, c'est le don de DIEU. Ce n'est point par les œuvres, afin que personne ne se glorifie."],V_R324=["Romains 3.24","Gratuitement justifiés par SA grâce, par le moyen de la rédemption qui est en YESHUA’H."],V_R51=["Romains 5.1","Étant donc justifiés par la foi, nous avons la paix avec DIEU par notre SEIGNEUR YESHUA’H."],V_2C518=["2 Corinthiens 5.18","Et tout cela vient de DIEU, qui nous a réconciliés avec LUI par YESHUA’H, et qui nous a confié le ministère de la réconciliation."];
const SL=[
mkO(1,"statut-1","🎯","Pécheur","Devant DIEU, j'ai besoin de grâce.",[V_R323],"Personne n'atteint seul la norme de DIEU.",[
 {t:"in",ic:"⚖️",h:"5 niveaux, 2 minutes chacun",tx:"Quelle est ma condition devant DIEU ?\n\nChaque niveau : une idée, une Parole, une question, une action.\nTu avances à ton rythme et tu peux t'arrêter à la fin de chaque niveau.",chn:["PÉCHEUR","GRÂCE","RACHETÉ","JUSTIFIÉ","RÉCONCILIÉ"],b:"Commencer →"},
 {t:"idee",big:"Devant DIEU, j'ai besoin de grâce.",tx:"La norme de DIEU, c'est SA perfection. Tous ont péché : personne ne l'atteint par ses propres forces.",v:[V_R323]},
 {t:"qr",k:"s1",q:"Deux élèves ont 12 et 15 sur 20, mais l'examen demande 20. Que change l'écart entre eux ?",o:[["L'un est presque arrivé, l'autre non","Il y a bien un écart entre eux, mais ni l'un ni l'autre n'atteint 20. Romains 3.23 dit : tous ont péché.",0],["Rien : aucun des deux n'atteint 20","Oui. Devant la norme de DIEU, personne n'arrive seul : c'est pourquoi j'ai besoin de grâce.",1]],r:"Personne n'atteint seul la norme de DIEU."},
 {t:"bl",k:"t1",free:1,h:"✋ Mon action",pre:"DIEU, je reconnais que j'ai besoin de TA grâce pour",post:".",ph:"ce que je n'arrive pas à faire seul…"},
 {t:"cel",r:"Personne n'atteint seul la norme de DIEU."}],SX),
mkO(2,"statut-2","🎁","Grâce","Mon salut est un don, pas un salaire.",[V_E28],"Je ne gagne pas le salut, je le reçois.",[
 {t:"idee",big:"Mon salut est un don, pas un salaire.",tx:"Je ne peux pas gagner mon salut par mes œuvres. DIEU me le donne par SA grâce, et je le reçois par la foi.",v:[V_E28]},
 {t:"qr",k:"s2",q:"Un salaire se mérite, un cadeau se reçoit. Dans ta relation avec DIEU, qu'essaies-tu de mériter ?",o:[["Son amour"],["Son pardon"],["Sa bénédiction"],["Rien : je reçois"]],fb:"Merci pour ta franchise : Éphésiens 2.8-9 est clair, le salut est un don, pas un salaire.",r:"Je ne gagne pas le salut, je le reçois."},
 {t:"bl",k:"t2",free:1,h:"✋ Mon action",pre:"DIEU, merci pour ce don que je ne méritais pas :",post:"",ph:"mon salut, ma vie…"},
 {t:"cel",r:"Je ne gagne pas le salut, je le reçois."}],SX),
mkO(3,"statut-3","🏷️","Racheté","Un prix a été payé pour moi.",[V_R324],"YESHUA’H a payé ce que je ne pouvais pas payer.",[
 {t:"idee",big:"Un prix a été payé pour moi.",tx:"La rédemption, c'est le prix payé pour me libérer. En YESHUA’H, ce que je ne pouvais pas payer l'a été.",v:[V_R324]},
 {t:"qr",k:"s3",q:"Tu dois une dette énorme. Quelqu'un la paie entièrement. Que te reste-t-il à payer ?",o:[["Une partie, pour me racheter moi aussi","Si la dette est payée entièrement, il n'y a plus rien à ajouter : c'est ce que dit la rédemption en YESHUA’H.",0],["Rien : elle est payée entièrement","Oui. YESHUA’H a payé ce que je ne pouvais pas payer.",1]],r:"YESHUA’H a payé ce que je ne pouvais pas payer."},
 {t:"bl",k:"t3",free:1,h:"✋ Mon action",pre:"Je ne porte plus seul :",post:"",ph:"ma dette, mon poids…"},
 {t:"cel",r:"YESHUA’H a payé ce que je ne pouvais pas payer."}],SX),
mkO(4,"statut-4","⚖️","Justifié","DIEU me déclare juste.",[V_R51],"Justifié, c'est être déclaré juste par DIEU.",[
 {t:"idee",big:"DIEU me déclare juste.",tx:"Être justifié, c'est être déclaré juste par DIEU. Ce n'est pas moi qui me rends juste : je le reçois par la foi.",v:[V_R51]},
 {t:"qr",k:"s4",q:"Un juge dit « non coupable » à un accusé dont un autre a payé la dette. Dans quel état entre-t-il dans la salle ? Dans quel état en sort-il ?",o:[["Il entre accusé et il sort toujours accusé","Si le juge déclare « non coupable » parce que la dette est payée, l'accusation tombe. C'est l'image de Romains 5.1.",0],["Il entre accusé, il sort libre et déclaré juste","Oui. Justifié, c'est être déclaré juste par DIEU.",1]],r:"Justifié, c'est être déclaré juste par DIEU."},
 {t:"bl",k:"t4",free:1,h:"✋ Mon action",pre:"DIEU, ce que TU dis de moi aujourd'hui :",post:"",ph:"je suis juste, libre…"},
 {t:"cel",r:"Justifié, c'est être déclaré juste par DIEU."}],SX),
mkO(5,"statut-5","🌅","Réconcilié","Je suis en paix avec DIEU.",[V_2C518],"Il n'y a plus de distance entre DIEU et moi.",[
 {t:"idee",big:"Je suis en paix avec DIEU.",tx:"Par YESHUA’H, DIEU m'a réconcilié avec LUI. Ce qui nous séparait est ôté : je suis en paix avec DIEU.",v:[V_2C518]},
 {t:"qr",k:"s5",q:"Deux amis brouillés se parlent à nouveau, sans reproche. Qu'est-ce qui change entre eux ?",o:[["Rien ne change vraiment","Une vraie réconciliation change la relation : la distance disparaît. C'est ce que fait DIEU par YESHUA’H.",0],["La distance et la crainte disparaissent","Oui. Il n'y a plus de distance entre DIEU et moi.",1]],r:"Il n'y a plus de distance entre DIEU et moi."},
 {t:"bl",k:"t5",free:1,h:"✋ Mon action",pre:"Je peux m'approcher de DIEU sans crainte, car",post:".",ph:"je suis réconcilié…"},
 {t:"fin"}],SX)
];

// ===== POSITION : module 5 = 5 niveaux (v34) =====
const PX={rv:["DIEU m'accueille.","Je suis uni à YESHUA’H.","IL m'a placé avec LUI.","Je fais partie de SON corps.","Je suis SON ambassadeur."],tr:{t:"Si DIEU m'a donné une place, une nouvelle question se pose :",h:"🎁 Qu'est-ce qui m'est réservé ?",b:"Découvrir HÉRITAGE →"},ti:"👑 POSITION",ph:"En YESHUA’H, j'ai une place auprès de DIEU et dans SON corps."};
const V_E16=["Éphésiens 1.6","À la louange de la gloire de SA grâce qu'IL nous a accordée en SON Bien-Aimé."],V_J155=["Jean 15.5","JE suis le cep, vous êtes les sarments. Celui qui demeure en MOI et en qui JE demeure porte beaucoup de fruit, car sans MOI vous ne pouvez rien faire."],V_E26=["Éphésiens 2.6","IL nous a ressuscités ensemble, et nous a fait asseoir ensemble dans les lieux célestes, en YESHUA’H."],V_1C1227=["1 Corinthiens 12.27","Vous êtes le corps de YESHUA’H, et vous êtes SES membres, chacun pour sa part."],V_2C520=["2 Corinthiens 5.20","Nous faisons donc les fonctions d'ambassadeurs pour YESHUA’H, comme si DIEU exhortait par nous ; nous vous en supplions au nom de YESHUA’H : Soyez réconciliés avec DIEU !"];
const PL=[
mkO(1,"position-1","🏛️","Accepté","DIEU m'accueille en SON Bien-Aimé.",[V_E16],"Je suis reçu à cause de YESHUA’H, pas à cause de moi.",[
 {t:"in",ic:"👑",h:"5 niveaux, 2 minutes chacun",tx:"Quelle place DIEU me donne-t-IL ?\n\nChaque niveau : une idée, une Parole, une question, une action.\nTu avances à ton rythme et tu peux t'arrêter à la fin de chaque niveau.",chn:["ACCEPTÉ","UNI","ASSIS","MEMBRE","ENVOYÉ"],b:"Commencer →"},
 {t:"idee",big:"DIEU m'accueille en SON Bien-Aimé.",tx:"DIEU ne me reçoit pas pour mes mérites : IL m'accueille en YESHUA’H, SON Bien-Aimé.",v:[V_E16]},
 {t:"qr",k:"p1",q:"Quelqu'un arrive au palais avec le fils du roi. Comment est-il reçu ?",o:[["Comme un inconnu qu'on examine","À cause de celui qui l'accompagne, l'accueil est tout autre. C'est ainsi que DIEU me reçoit en SON Bien-Aimé.",0],["Avec l'accueil réservé au fils du roi","Oui. Je suis reçu à cause de YESHUA’H, pas à cause de moi.",1]],r:"Je suis reçu à cause de YESHUA’H, pas à cause de moi."},
 {t:"bl",k:"u1",free:1,h:"✋ Mon action",pre:"Je peux entrer chez DIEU avec confiance, même quand :",post:"",ph:"je me sens indigne…"},
 {t:"cel",r:"Je suis reçu à cause de YESHUA’H, pas à cause de moi."}],PX),
mkO(2,"position-2","🍇","Uni","Je suis uni à YESHUA’H.",[V_J155],"Ma vie vient de mon union avec LUI.",[
 {t:"idee",big:"Je suis uni à YESHUA’H.",tx:"YESHUA’H est le cep, je suis un sarment. Ma vie et mon fruit viennent de mon union avec LUI.",v:[V_J155]},
 {t:"qr",k:"p2",q:"Un sarment coupé du cep peut-il porter du fruit ?",o:[["Oui, par ses propres forces","Jean 15.5 dit le contraire : sans YESHUA’H, nous ne pouvons rien faire.",0],["Non : sans le cep, il ne peut rien","Oui. Ma vie vient de mon union avec LUI.",1]],r:"Ma vie vient de mon union avec LUI."},
 {t:"bl",k:"u2",free:1,h:"✋ Mon action",pre:"Je reste uni à YESHUA’H en :",post:"",ph:"priant, lisant, Lui parlant…"},
 {t:"cel",r:"Ma vie vient de mon union avec LUI."}],PX),
mkO(3,"position-3","🪑","Assis","DIEU m'a placé avec YESHUA’H.",[V_E26],"Je ne monte pas pour mériter ma place : je pars d'elle.",[
 {t:"idee",big:"DIEU m'a placé avec YESHUA’H.",tx:"DIEU ne me demande pas de gagner ma place : IL m'a déjà fait asseoir avec YESHUA’H. Je pars d'une place reçue.",v:[V_E26]},
 {t:"qr",k:"p3",q:"Tu luttes pour gagner ta place, ou quelqu'un t'a déjà placé à côté de lui. Laquelle décrit ta vie avec DIEU ?",o:[["Je lutte pour gagner ma place"],["J'ai déjà été placé à côté de LUI"],["Un peu des deux"]],fb:"Merci pour ta franchise : Éphésiens 2.6 dit que DIEU nous a déjà fait asseoir avec YESHUA’H.",r:"Je ne monte pas pour mériter ma place : je pars d'elle."},
 {t:"bl",k:"u3",free:1,h:"✋ Mon action",pre:"Aujourd'hui, je me souviens que ma place est auprès de LUI, quand :",post:"",ph:"je doute, je me compare…"},
 {t:"cel",r:"Je ne monte pas pour mériter ma place : je pars d'elle."}],PX),
mkO(4,"position-4","🧩","Membre","Je fais partie du corps de YESHUA’H.",[V_1C1227],"Ma place est avec les autres, pas à l'écart.",[
 {t:"idee",big:"Je fais partie du corps de YESHUA’H.",tx:"Je ne suis pas un croyant isolé : je suis un membre du corps de YESHUA’H, avec les autres croyants.",v:[V_1C1227]},
 {t:"qr",k:"p4",q:"Un membre ne vit pas isolé du corps. Où est ta place parmi les croyants ?",o:[["Avec les autres, bien engagé"],["Plutôt à l'écart"],["Je cherche encore ma place"]],fb:"Merci pour ta franchise : 1 Corinthiens 12.27 dit que chacun a sa part dans le corps de YESHUA’H.",r:"Ma place est avec les autres, pas à l'écart."},
 {t:"bl",k:"u4",free:1,h:"✋ Mon action",pre:"Je prends ma place parmi les croyants en :",post:"",ph:"priant avec d'autres, servant…"},
 {t:"cel",r:"Ma place est avec les autres, pas à l'écart."}],PX),
mkO(5,"position-5","🌍","Envoyé","Je suis l'ambassadeur de YESHUA’H.",[V_2C520],"Ma place a une mission : représenter YESHUA’H.",[
 {t:"idee",big:"Je suis l'ambassadeur de YESHUA’H.",tx:"Ma place a une mission : comme un ambassadeur, je représente YESHUA’H autour de moi.",v:[V_2C520]},
 {t:"qr",k:"p5",q:"Un ambassadeur parle au nom de son pays. Au nom de qui parles-tu autour de toi ?",o:[["Au nom de YESHUA’H"],["Au nom de personne en particulier"],["Je n'ose pas encore"]],fb:"Merci pour ta franchise : 2 Corinthiens 5.20 appelle chacun à représenter YESHUA’H, simplement et pas à pas.",r:"Ma place a une mission : représenter YESHUA’H."},
 {t:"bl",k:"u5",free:1,h:"✋ Mon action",pre:"Autour de moi, je représente YESHUA’H en :",post:"",ph:"aidant, écoutant, parlant…"},
 {t:"fin"}],PX)
];

const L=[
{id:"heritage",
 ic:"🎁",
 n:"Héritage",
 q:"Qu'est-ce qui m'est réservé ?",
 p:[["Romains 8.17", "Et si nous sommes enfants, nous sommes aussi héritiers : héritiers de DIEU, et cohéritiers de YESHUA’H."], ["1 Pierre 1.4", "Pour un héritage qui ne peut ni se corrompre, ni se souiller, ni se flétrir, réservé dans les cieux pour vous."]],
 r:"Si tu es enfant de DIEU et héritier avec YESHUA’H, comment cette vérité change-t-elle ta manière de vivre aujourd'hui ?",
 d:["Quelle différence y a-t-il entre travailler pour obtenir une place et vivre à partir d'une place reçue ?", "Mon avenir est-il uniquement déterminé par ce que je possède aujourd'hui ?", "Comment l'espérance de mon héritage influence-t-elle mes choix présents ?"],
 rl:"Sachant ce qui t'est donné et réservé en YESHUA’H, qu'est-ce que cela change dans ta manière de vivre aujourd'hui ?",
 z:[["Selon Romains 8.17, nous sommes…", ["des serviteurs sans droits", "héritiers avec YESHUA’H", "des invités temporaires"], 1], ["Vrai ou faux : l'héritage décrit en 1 Pierre 1.4 peut se corrompre.", ["Vrai", "Faux"], 1], ["Face à une épreuve, comment l'héritage t'aide-t-il ?", ["Il donne une espérance solide", "Il supprime toute difficulté", "Il est sans rapport avec ma vie"], 0]],
 s:"Ce que DIEU me réserve en YESHUA’H est sûr et durable : je vis avec espérance."}
];

// Acquisition des six notions : nt = notion, sq = question simple, vq = question de vérification, df = définition de référence, sm = à retenir
const N={
heritage:{nt:"HÉRITAGE",sq:"Qu'est-ce qui m'est réservé ?",vq:"Avec tes propres mots, qu'est-ce que signifie « HÉRITAGE » en YESHUA’H ?",df:"Mon héritage, c'est ce que DIEU donne à SES enfants et ce qu'IL leur réserve. En YESHUA’H, l'enfant de DIEU est aussi héritier avec YESHUA’H.",sm:"Je vis aujourd'hui à partir de ce que DIEU me donne et me réserve."}
};
L.forEach(l=>Object.assign(l,N[l.id]));

// ===== MODULES (valeurs d'origine) =====
// Les modules et niveaux se gèrent ensuite dans le tableau de bord admin (onglet Modules) : pas besoin de modifier ce fichier.
// Niveaux à venir (titre + question clé, contenu à rédiger) : s'affichent « Bientôt disponible ».
// Pour en activer un : admin > Modules > ✏️ puis remplir le contenu.
const SOON=(pre,ic,a)=>a.map((x,i)=>({id:pre+(i+1),ic,n:x[0],q:x[1],soon:true}));
const X2=SOON("naitre-","🕊️",[["J’ai besoin d’être sauvé","Pourquoi ai-je besoin d’être sauvé ?"],["DIEU m’aime","Que révèle l’amour de DIEU pour moi ?"],["YESHUA’H est venu pour moi","Qui est-IL et qu’a-t-IL fait pour moi ?"],["Je crois en LUI","Que signifie croire en YESHUA’H ?"],["Je reçois une vie nouvelle","Qu’est-ce que naître de nouveau ?"],["Je deviens enfant de DIEU","Qu’est-ce qui change dans mon identité et ma relation avec DIEU ?"],["Je commence à marcher avec LUI","Comment vivre et grandir dans cette nouvelle vie ?"]]);
const X3=SOON("consecration-","🕯️",[["À QUI appartient réellement ma vie ?","Découvrir ce que change le fait de savoir d’où vient ma vie."],["Que signifie vraiment appartenir à DIEU ?","Comprendre ce que DIEU attend d’une vie qui LUI appartient."],["Que suis-je prêt à remettre entre les mains de DIEU ?","Découvrir ce que signifie réellement se donner à LUI."],["Qu’est-ce qui est consacré à DIEU ?","Apprendre à reconnaître et à respecter ce qui LUI appartient."],["Mes choix montrent-ils que je veux plaire à DIEU ?","Découvrir comment la consécration transforme mes décisions."],["Qu’est-ce qui peut me faire abandonner ma consécration ?","Comprendre comment demeurer fidèle à DIEU malgré les obstacles."],["Que peut faire DIEU avec une vie qui LUI est entièrement consacrée ?","Découvrir comment une vie donnée à DIEU peut devenir utile à SES desseins."]]);
const X4=SOON("enfant-","🌳",[["Devenir enfant de DIEU n’est que le commencement","Qu’est-ce que DIEU attend de SES enfants ?"],["Je découvre mon identité en LUI","Qui suis-je maintenant que je suis enfant de DIEU ?"],["Je grandis dans la connaissance de DIEU","Comment apprendre à connaître CELUI qui m’a donné la vie ?"],["Je deviens semblable à YESHUA’H","Qu’est-ce que DIEU veut former en moi ?"],["Je porte du fruit","Comment ma nouvelle vie devient-elle visible ?"],["Je sers les desseins de DIEU","À quoi ma vie peut-elle servir dans SON Royaume ?"]]);
const X5=SOON("renoncement-","🔥",[["Tout ce que je fais plaît-il à DIEU ?", "Comment reconnaître les œuvres mortes ?"], ["Pourquoi dois-je abandonner certaines pratiques ?", "Qu’est-ce qui m’empêche de vivre pleinement pour DIEU ?"], ["Je laisse derrière moi mon ancienne vie", "Comment vivre le changement que DIEU attend de moi ?"]]);
const X6=SOON("foi-","🛡️",[["Croire en DIEU, est-ce simplement croire qu’IL existe ?", "Que signifie réellement avoir foi en DIEU ?"], ["Sur quoi repose ma foi ?", "Comment reconnaître une foi fondée sur la Parole de DIEU ?"], ["Ma foi se voit-elle dans ma manière de vivre ?", "Comment la foi transforme-t-elle mes décisions et mes actions ?"]]);
const X7=SOON("baptemes-","💧",[["Pourquoi plusieurs baptêmes dans la Bible ?", "Quels sont les différents baptêmes mentionnés dans les Écritures ?"], ["Que signifie être baptisé ?", "Que se passe-t-il réellement à travers le baptême ?"], ["Quelle est ma relation avec le baptême ?", "Que révèle le baptême sur ma nouvelle vie en YESHUA’H ?"]]);
const X8=SOON("mains-","🙌",[["Pourquoi imposait-on les mains dans la Bible ?", "Que signifie ce geste dans la vie spirituelle ?"], ["Que peut-il se passer lorsqu'on impose les mains ?", "Quels sont les objectifs bibliques de l’imposition des mains ?"], ["Comment comprendre et pratiquer ce geste aujourd'hui ?", "Quelles sont les responsabilités et les précautions à connaître ?"]]);
const X9=SOON("resurrection-","🌅",[["La mort est-elle vraiment la fin ?", "Que révèle la Bible sur la mort et la résurrection ?"], ["Que se passera-t-il après la mort ?", "Quelle espérance DIEU donne-t-IL à ceux qui croient en LUI ?"], ["Quel corps aurons-nous à la résurrection ?", "Que signifie ressusciter pour la vie éternelle ?"]]);
const X10=SOON("jugement-","⚖️",[["Devant QUI devrai-je rendre compte de ma vie ?", "Pourquoi chaque être humain devra-t-il comparaître devant DIEU ?"], ["Que révèle le jugement de DIEU sur ma manière de vivre ?", "Quelle place occupent mes choix et mes œuvres ?"], ["Quelle sera ma destinée éternelle ?", "Que dit la Bible sur la vie éternelle et le jugement ?"]]);
const CAT_V=34;
const M0=[{n:"Module 1",t:"Origine",q:"Suis-je seulement le résultat de la vie biologique, ou ai-je été créé par DIEU ?",lv:OL.map(l=>l.id)},{n:"Module 2",t:"Relation",q:"Qui est DIEU pour moi ?",lv:RL.map(l=>l.id)},{n:"Module 3",t:"Identité",q:"Qui suis-je en DIEU ?",lv:IL.map(l=>l.id)},{n:"Module 4",t:"Statut",q:"Quelle est ma condition devant DIEU ?",lv:SL.map(l=>l.id)},{n:"Module 5",t:"Position",q:"Quelle place DIEU me donne-t-IL ?",lv:PL.map(l=>l.id)},{n:"Module 6",t:"Héritage",q:"Qu'est-ce qui m'est réservé ?",lv:[]}];
M0.forEach((m,i)=>m.id='m'+(i+1));
const VX=[];
const L0=OL.concat(RL,IL,SL,PL,L,X2,X3,X4,X5,X6,X7,X8,X9,X10),M=[];
function applyCatalog(c){
 const E=t=>String(t).replace(/[&<>"]/g,k=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[k])),
  D=x=>typeof x=='string'?E(x):Array.isArray(x)?x.map(D):x,
  base={};L0.forEach(l=>base[l.id]=l);
 const cl=(c&&c.levels)||{},mods=(c&&c.cv>=CAT_V&&Array.isArray(c.modules)&&c.modules.length)?c.modules:M0;
 L.length=0;M.length=0;
 VX.length=0;((c&&c.verses)||[]).forEach(v=>{if(v&&v.ref&&v.t&&v.mod)VX.push({id:String(v.id||'').replace(/[^a-zA-Z0-9_-]/g,''),ref:String(v.ref),t:String(v.t),ver:v.ver||'',mod:v.mod,e:v.e||'',k:Array.isArray(v.k)?v.k:[],on:v.on!==false})});
 mods.forEach((m,mi)=>{if(m.hide)return;const k=M.length;M.push({id:m.id||'m'+(mi+1),n:E(m.n||''),t:E(m.t||''),q:E(m.q||((M0.find(x=>x.id==m.id)||{}).q)||'')});let n=0;
  (m.lv||[]).forEach(id=>{const raw=cl[id]?Object.assign({},cl[id]):base[id];if(!raw)return;
   const l=cl[id]?Object.fromEntries(Object.entries(raw).map(([a,b])=>[a,D(b)])):Object.assign({},raw);
   if(cl[id]&&base[id]&&base[id].jy){l.jy=base[id].jy;l.z=base[id].z}l.id=String(id).replace(/[^a-zA-Z0-9_-]/g,'');l.m=k;if(l.d&&!l.rl)l.rl=l.r;L.push(l);n++});
  if(!n)L.push({id:"_bientot"+k,m:k,ic:"🕯️",n:E(m.t||''),soon:true})})}
applyCatalog(null);
