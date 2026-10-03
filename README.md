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
Tous les contenus de l'application doivent respecter une convention typographique uniforme : DIEU, CHRIST, YESHUA’H et les pronoms faisant référence à DIEU (IL, LUI, SON, SA, SES, TOI, TE…) sont écrits en majuscules ; Saint-Esprit s'écrit SAINT-ESPRIT et Père (désignant DIEU) PÈRE. « Jésus » et « Jésus-Christ » s'écrivent YESHUA’H. Cette règle s'applique à l'ensemble des contenus présents et futurs, sans exception.

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
- Les anciens niveaux Relation, Identité, Statut, Position, Héritage (version 8 étapes) restent dans `content.js` mais ne sont plus affichés ; ils serviront de base pour les refondre.
- Typographie française : un script en fin d'`index.html` remplace l'espace avant `! ? : ; »` (et après `«`) par une espace insécable, pour que la ponctuation ne passe jamais seule à la ligne suivante.
- Écrans compacts (classe `.jz`) pour limiter le défilement.

## Module 2 RELATION et groupes par module (v30)
- **Relation = 5 niveaux** (`relation-1` à `relation-5`, constante `RL` dans `content.js`) : Initiative, Connaître, Écouter, Parler, Marcher. Même mécanique qu'Origine. La finale (`fin`) est paramétrée par `RX` (titre `ti`, vérités `rv`, phrase `ph`, transition `tr`) : tout nouveau module reprend le même schéma avec `mkO(…, X)`.
- La finale d'Origine mène maintenant à RELATION ; celle de RELATION annonce IDENTITÉ (module « à venir bientôt » : le bouton ouvre alors la synthèse).
- **Groupes par module** : les liens Telegram / WhatsApp se saisissent dans admin > Groupes, un lien par module (clés `m1` à `m6`). Le groupe s'ouvre quand tous les niveaux du module sont terminés : bouton sur la finale du module, et onglet « Groupes » listant les modules. Les anciens liens par niveau ne sont plus utilisés : il faut ressaisir les liens par module.
- `CAT_V` passe à 30 : les modules enregistrés dans l'admin avant cette version sont ignorés (retour à la structure du code).
