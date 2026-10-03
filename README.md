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

## ORIGINE : 5 marches (v28)
Le niveau Origine suit désormais **5 marches de 2 minutes**, définies dans `content.js` (constante `OJ`). Règle : une idée forte → une Parole → une question → une action → une célébration.
- Marches : SOURCE · IDENTITÉ · RESPONSABILITÉ · MISSION · RETOUR À LA SOURCE, précédées d'un écran de départ et suivies de « Mon ORIGINE » (les 5 vérités, la phrase ORIGINE, les 5 actions, transition vers RELATION).
- Chaque marche : écran `idee` (idée + « À comprendre » + 1 ou 2 versets) → `qr` (une question de vie ; la réponse révèle « À retenir ») → `bl` (une action à compléter) → `cel` (feu d'artifice, « Marche n sur 5 franchie », ce que tu retiens, puis « Continuer vers la marche n+1 » ou « Faire une pause »). La marche 5 se termine directement par la grande célébration (`fin`).
- Pause : l'apprenant voit « Ta marche t'attend. Retiens simplement : … » et reprend au début de la marche suivante (progression `jp`).
- Supprimés : le quiz de 6 questions (donc plus de score), l'écran « Situations », les écrans de réflexion libre. `S.p[niveau].s` reçoit la phrase ORIGINE (`l.s`) et `S.p[niveau].e` les 5 actions, donc synthèse, admin et export CSV restent compatibles.
- La progression enregistrée avec l'ancien parcours (v27) est réinitialisée automatiquement (`jv` = 2) ; les niveaux déjà terminés restent marqués comme terminés.
- Pour modifier un texte : `content.js` (pas depuis l'admin).
