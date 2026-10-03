# Application PWA « De la création à l'héritage »
Fichiers : index.html (app), content.js (contenus), config.js, sw.js, manifest.webmanifest, icônes, admin.html (fiches participants), supabase.sql.

## 1. Base de données (gratuit)
1. Créer un projet sur supabase.com. 2. SQL Editor : coller supabase.sql (changer CHANGE_MOI par votre clé admin) puis Run.
3. Project Settings > API : copier « Project URL » et la clé « anon public » dans config.js.

## 2. Hébergement HTTPS (gratuit)
Netlify Drop (app.netlify.com/drop : glisser le dossier), Cloudflare Pages ou GitHub Pages. HTTPS est obligatoire pour une PWA.

## 3. Utilisation
- Participants : ouvrir l'URL > « Ajouter à l'écran d'accueil » (Chrome propose aussi « Installer »).
- Vous : ouvrir /admin.html, saisir la clé admin.
- Groupes : renseigner les liens dans l'objet GROUPS de index.html.

## Règle éditoriale biblique
Tous les contenus de l'application doivent respecter une convention typographique uniforme : DIEU, YESHUA’H et les pronoms faisant référence à DIEU (IL, LUI, SON, SA, SES, TOI, TE…) sont écrits en majuscules ; Saint-Esprit s'écrit SAINT-ESPRIT et Père (désignant DIEU) PÈRE. « Jésus », « Jésus-Christ » et « Christ » s'écrivent YESHUA’H : le mot CHRIST n'est plus utilisé dans l'application (décision v32). Cette règle s'applique à l'ensemble des contenus présents et futurs, sans exception.

## Approfondissement guidé (étape Réflexion)
Dans content.js, chaque niveau contient : r (question principale), d (2 à 3 questions d'approfondissement), rl (relance). Le bouton « Explorer » ouvre un panneau facultatif, sans rechargement ; la réponse saisie est conservée et rien ne bloque la progression. Les questions d'approfondissement ne sont pas stockées.

## Acquisition des six notions (v9)
Dans content.js, chaque niveau contient aussi : nt (notion), sq (question simple), vq (question de vérification), df (définition de référence), sm (à retenir). Dans index.html, l'étape 7 « Ce que je dois maintenant comprendre » affiche la question, l'espace de reformulation (enregistré dans la réponse du participant sous la clé u), puis la définition de référence. La synthèse finale présente les six notions et leur progression.

## Modules et niveaux (v17)
1. Dans Supabase > SQL Editor, exécuter une fois `supabase_v3.sql`.
2. Ouvrir `admin.html`, entrer la clé admin, onglet « 📚 Modules » : créer / renommer / réordonner / masquer des modules, ajouter ou modifier des niveaux, puis « Enregistrer ». Aucun redéploiement n'est nécessaire.
3. Dans l'application, l'onglet « Thèmes » liste les modules ; choisir un module affiche ses niveaux d'étude.

## Structure en 6 modules (v29, complétée en v30)
Les anciens modules 2 à 10 (Naître de nouveau, La consécration, etc.) sont supprimés. L'application compte désormais **6 modules** : Origine (module 1), Relation, Identité, Statut, Position, Héritage (modules 2 à 6, affichés « à venir bientôt » tant qu'ils n'ont pas de niveaux).
- Définition dans `content.js` : `M0` (modules) et `OL` (niveaux d'Origine). Pour activer un module : créer ses niveaux comme `OL` puis les lister dans `lv` du module.
- **Origine = 5 niveaux** (`origine-1` à `origine-5`) : Source, Identité, Responsabilité, Mission, Retour à la source. Chaque niveau : idée + Parole → question (« À retenir ») → action → célébration (feu d'artifice, « Continuer vers le niveau n+1 » ou « Faire une pause »). Le niveau 5 se termine par la finale (5 vérités, 5 actions, transition vers RELATION).
- Types d'écrans : `in`, `idee`, `qr`, `bl`, `cel` (fin de niveau), `fin` (finale du module). Les niveaux se débloquent dans l'ordre.
- `CAT_V` (content.js) : les modules enregistrés dans l'admin avant cette version sont ignorés (ils portaient l'ancienne liste). Les enregistrements faits depuis l'onglet Modules de l'admin portent `cv` et sont repris normalement.
- Les anciens niveaux Statut, Position, Héritage (version 8 étapes) restent dans `content.js` mais ne sont plus affichés ; ils serviront de base pour les refondre.
- Typographie française : un script en fin d'`index.html` remplace l'espace avant `! ? : ; »` (et après `«`) par une espace insécable, pour que la ponctuation ne passe jamais seule à la ligne suivante.
- Écrans compacts (classe `.jz`) pour limiter le défilement.

## Module 2 RELATION et groupes par module (v30)
- **Relation = 5 niveaux** (`relation-1` à `relation-5`, constante `RL` dans `content.js`) : Initiative, Connaître, Écouter, Parler, Marcher. Même mécanique qu'Origine. La finale (`fin`) est paramétrée par `RX` (titre `ti`, vérités `rv`, phrase `ph`, transition `tr`) : tout nouveau module reprend le même schéma avec `mkO(…, X)`.
- La finale d'Origine mène maintenant à RELATION ; celle de RELATION annonce IDENTITÉ (module « à venir bientôt » : le bouton ouvre alors la synthèse).
- **Groupes par module** : les liens Telegram / WhatsApp se saisissent dans admin > Groupes, un lien par module (clés `m1` à `m6`). Le groupe s'ouvre quand tous les niveaux du module sont terminés : bouton sur la finale du module, et onglet « Groupes » listant les modules. Les anciens liens par niveau ne sont plus utilisés : il faut ressaisir les liens par module.
- `CAT_V` passe à 30 : les modules enregistrés dans l'admin avant cette version sont ignorés (retour à la structure du code).

## Module 3 IDENTITÉ (v31)
- **Identité = 5 niveaux** (`identite-1` à `identite-5`, constante `IL` dans `content.js`) : Créé, Aimé, Pardonné, Enfant, Nouveau. Même mécanique que Relation ; la finale est paramétrée par `IX`.
- Phrase du module : « En YESHUA’H, je suis aimé, pardonné et enfant de DIEU. » Transition : « Pourquoi DIEU m'a-t-IL placé ici ? » (le module 4, encore « à venir bientôt », ouvre la synthèse).
- Le nom YESHUA’H est utilisé partout, y compris dans Romains 5.8 et 2 Corinthiens 5.17 (à la place de « Christ »).
- `CAT_V` passe à 31 et le cache du service worker à `ceh-v31`.

## Cohérence des 6 modules (v32)
- **Question de chaque module** (`q` dans `M0`, affichée sous le titre) : Origine « Suis-je seulement le résultat de la vie biologique, ou ai-je été créé par DIEU ? » · Relation « Qui est DIEU pour moi ? » · Identité « Qui suis-je en DIEU ? » · Statut « Quelle est ma condition devant DIEU ? » · Position « Quelle place DIEU me donne-t-IL ? » · Héritage « Qu'est-ce qui m'est réservé ? ». Les transitions entre finales reprennent ces mêmes questions.
- La question du module s'affiche sous le titre ; Origine 1 garde sa question d'origine (« décider seul du sens de ma vie »). Origine 2 devient **Image** (Genèse 1.27 : je porte l'image de DIEU) ; Identité 1 s'appuie sur le Psaume 139.14 (ma valeur). La finale d'Origine a maintenant sa phrase, et ses vérités sont courtes comme celles des autres modules.
- Les trois modules ont le même écran d'intro (« 5 niveaux, 2 minutes chacun »).
- Anciens niveaux `relation` et `identite` supprimés de `content.js` (remplacés par `RL` et `IL`).
- **Répartition à respecter pour Statut / Position** : Romains 5.8, le pardon et 1 Jean 1.9 sont déjà dans Identité (niveaux 2 et 3) ; Statut traite la condition (péché, grâce, justification) avec d'autres versets ; Position évite de redire « aucune condamnation ».
- `CAT_V` passe à 32, cache `ceh-v32`.
- Intro des 3 modules : la question du module s'affiche en première ligne. Relation 4 : le contexte (« Tu portes une inquiétude. ») est dans la question, comme dans les autres niveaux.
- Relation répond à sa question « Qui est DIEU pour moi ? » : chaque 💡 commence par « DIEU est… » (celui qui me cherche, que je peux connaître, qui me parle, un PÈRE, qui marche avec moi). Phrase du module : « DIEU est proche de moi : IL désire que je LE connaisse personnellement. »
- Identité : « TES œuvres » (Psaume 139.14) en majuscules comme les autres adresses à DIEU (TE, TOI, TU) ; vocabulaire « nouvelle créature » aligné sur le verset dans la réponse du niveau 5.

## Module 4 STATUT (v33)
- 5 niveaux `statut-1` à `statut-5` (constante `SL`) : Pécheur (Romains 3.23), Grâce (Éphésiens 2.8-9), Racheté (Romains 3.24), Justifié (Romains 5.1), Réconcilié (2 Corinthiens 5.18).
- Phrase : « Par la grâce, je suis racheté, justifié et réconcilié avec DIEU. » Transition : « Quelle place DIEU me donne-t-IL ? » vers Position.
- L'ancien Statut (8 étapes) est supprimé. `CAT_V` = 33, cache `ceh-v33`. Restent à refondre : Position (module 5), Héritage (module 6).

## Module 5 POSITION (v34)
- 5 niveaux `position-1` à `position-5` (constante `PL`) : Accepté (Éphésiens 1.6), Uni (Jean 15.5), Assis (Éphésiens 2.6), Membre (1 Corinthiens 12.27), Envoyé (2 Corinthiens 5.20).
- Phrase : « En YESHUA’H, j'ai une place auprès de DIEU et dans SON corps. » Transition : « Qu'est-ce qui m'est réservé ? » vers Héritage.
- L'ancien Position (8 étapes) est supprimé. `CAT_V` = 34, cache `ceh-v34`. Reste à refondre : Héritage (module 6).
