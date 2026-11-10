# 🎬 Cinéfilo

**Cinéfilo** est un moteur de recherche de films qui permet de rechercher des titres, de découvrir leurs affiches et de parcourir les résultats grâce à une pagination.

Le projet utilise l'API [OMDb (The Open Movie Database)](https://www.omdbapi.com/) pour récupérer les informations des films.

[Visiter Cinéfilo](https://bloommethod.github.io/Moteur-de-recherche-de-films/)

## ✨ Fonctionnalités

- 🔎 Recherche de films par titre.
- ⌨️ Lancement d'une recherche avec la touche `Enter`.
- 🎞️ Affichage des affiches, des titres et des années de sortie.
- 📄 Pagination des résultats avec les boutons précédent et suivant.
- ⚠️ Gestion des recherches sans résultats.
- 🖼️ Gestion des affiches indisponibles.
- ✨ Animation d'apparition des cartes de films.
- 📱 Adaptation de l'interface aux petits écrans.

## 🛠️ Technologies utilisées

- **HTML5** – Structure de l'application.
- **CSS3 / SCSS** – Mise en page, design responsive et animations.
- **JavaScript (Vanilla JS)** – Gestion des événements, manipulation du DOM et appels API.
- **OMDb API** – Récupération des données des films.

## 📁 Structure du projet

```text
Cinéfilo/
│
├── index.html
│
├── css/
│   └── styles.css
│
├── js/
│   └── script-v1.js
│
├── img/
│   └── movies.jpg
│
└── README.md
```

## 🚀 Installation et utilisation

1. Clonez le dépôt :

   ```bash
   git clone URL_DU_DEPOT
   ```

2. Ouvrez le dossier du projet.

3. Vérifiez que votre clé API OMDb est correctement configurée dans `js/script-v1.js`.

4. Lancez le fichier `index.html` dans votre navigateur, ou utilisez l'extension Live Server de VS Code.

5. Saisissez le nom d'un film dans la barre de recherche et découvrez les résultats !

## 🔑 API

Ce projet utilise l'API OMDb.

Pour obtenir votre propre clé API :

1. Rendez-vous sur [www.omdbapi.com/apikey.aspx](https://www.omdbapi.com/apikey.aspx).
2. Demandez une clé API.
3. Remplacez la clé existante dans le fichier JavaScript par votre propre clé.

**Remarque :** la clé API utilisée côté navigateur est visible par les visiteurs. Pour un projet destiné à la production, il est préférable de passer par un serveur intermédiaire afin de protéger cette clé.

## 🎨 Design

Cinéfilo possède une interface sombre et minimaliste, avec des accents dorés, pensée pour offrir une expérience agréable aux amateurs de cinéma.

## 👨‍💻 Auteur

Projet personnel réalisé dans le cadre de mon apprentissage du développement web front-end.

---

*Fait avec passion pour les amoureux du cinéma. 🍿*
