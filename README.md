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
