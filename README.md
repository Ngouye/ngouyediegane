# Portfolio — Ngouye Diegane Gning

Portfolio personnel : analyste SOC, administrateur système & cloud AWS, DevSecOps et IA.

Site statique en **React 19 + Vite**, déployé sur **Vercel**.

## Démarrer

```bash
npm install
npm run dev       # serveur de développement
npm run build     # build de production dans dist/
npm run preview   # prévisualiser le build
npm run lint      # oxlint
```

## Modifier le contenu

Tout le contenu est centralisé dans [`src/data/portfolioData.js`](src/data/portfolioData.js) :

| Export | Section |
|---|---|
| `profile` | En-tête, À propos, Contact, pied de page |
| `expertise` | Expertise |
| `workflow` | Workflow DevSecOps (À propos) |
| `skills`, `skillGroups` | Compétences |
| `projects` | Projets |
| `experiences`, `educations` | Parcours |
| `cybersecurityCertifications` | Certifications (images dans `public/certs/`) |

**CV :** déposer le fichier dans `public/` (ex. `public/cv-ngouye-gning.pdf`) et renseigner
`cvUrl: "/cv-ngouye-gning.pdf"` : le bouton « Télécharger le CV » apparaît automatiquement.

## Formulaire de contact

Le site n'a pas de backend : à l'envoi, le formulaire ouvre la messagerie du visiteur avec le
message pré-rempli à destination de `profile.email`.
