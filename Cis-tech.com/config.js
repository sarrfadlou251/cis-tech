// ============================================================
//  ⚙️  FICHIER DE CONFIGURATION — CIS-TECH
// ============================================================

const STORE_CONFIG = {
  name: "CIS-TECH",
  tagline: "La Technologie à portée de main",
  whatsapp: "221764448100",
  logo: "Images/logo.jpeg",
  heroImage: "Images/image acceuil.jpg"

};

// ─────────────────────────────────────────
// 2. COLLECTIONS
// ─────────────────────────────────────────
const COLLECTIONS = [
  { name: "AirPods & casque", category: "airpods", image: "Images/airpods pro2 face.jpg" },
  { name: "Batterie externe et Chargeurs", category: "batterie externe et chargeurs", image: "Images/WhatsApp Image 2026-02-03 at 23.57.08.jpeg" },
  { name: "lampe selfie", category: "led", image: "Images/led verticale.png" },
  { name: "Accessoires", category: "accessoire", image: "Images/ac noir.jpeg" }
];

// ─────────────────────────────────────────
// 3. PRODUITS
// ─────────────────────────────────────────
// ✅ Les descriptions sont maintenant des tableaux de lignes
//    → Pas de bug d'affichage, chaque ligne s'affiche proprement
// ─────────────────────────────────────────

const PRODUCTS = [
  {
    id: 1,
    name: "AirPods 4ème génération",
    price: 9000,
    category: "airpods",
    image: "Images/pro4.jpg",
    description: [
      "Écouteurs sans fil nouvelle génération.",
      "• Son spatial & audio adaptatif",
      "• Ajustement confortable & léger",
      "• Autonomie exceptionnelle",
      "• Résistance à la transpiration",
      "• Charge rapide & étui compact",
      "Qualité premium à prix accessible !",
      "Etuis AirPods de votre choix offert ."
    ]
  },
  {
    id: 2,
    name: "AirPods Pro 2",
    price: 8000,
    category: "airpods",
    image: "Images/airpods pro2 face.jpg",
    description: [
      "AirPods Pro 2ème génération.",
      "• Suppression de bruit active avancée",
      "• Son spatial immersif",
      "• Contrôles tactiles intuitifs",
      "• Étui avec charge MagSafe",
      "L'expérience audio ultime !",
      "Etuis AirPods de votre choix offert ."
    ]
  },
  {
    id: 3,
    name: "AirPods Max",
    price: 10000,
    category: "airpods",
    image: "https://i.pinimg.com/1200x/6f/0d/66/6f0d6654c60ec29794aec8a44e220595.jpg",   // image par défaut = première variante

    // ─────────────────────────────────────────────────────────
    // 🎨 VARIANTES DE COULEURS
    // label : texte affiché sur le bouton
    // image : fichier image de cette couleur
    // color : couleur du cercle de sélection (code hex)
    // ─────────────────────────────────────────────────────────
    variants: [
      { label: "Noir", image: "https://i.pinimg.com/1200x/6f/0d/66/6f0d6654c60ec29794aec8a44e220595.jpg", color: "#2c2c2e" },
      { label: "Gris", image: "https://i.pinimg.com/736x/16/b4/b6/16b4b66d3ebf09ee60041f809c623fb3.jpg", color: "#a0a0a5" },
      { label: "Violet", image: "Images/Airpods max violet.jpeg", color: "#7a5ea6" },
      { label: "Rose", image: "https://i.pinimg.com/736x/76/4a/d2/764ad27fb698f662742b93156faa93a5.jpg", color: "#e8a0b0" },
    ],
    description: [
      "Casque premium sans fil.",
      "• Basses puissantes & son immersif",
      "• Jusqu'à 30h d'autonomie",
      "• Confort optimal toute la journée",
      "• Annulation de bruit adaptative",
      "• Disponible en 4 couleurs au choix",
      "Le summum du son Apple."
    ]
  },
  {
    id: 4,
    name: "AirPods 3",
    price: 8000,
    category: "airpods",
    image: "Images/pod 3 face.jpg",
    description: [
      "AirPods 3.",
      "• Son haute définition",
      "• Micro intégré ultra clair",
      "• Basses riches & profondes",
      "• Design iconique Apple",
      "Le classique indémodable.",
      "Etuis AirPods de votre choix offert ."
    ]
  },
  {
    id: 5,
    name: "Casque Bose",
    price: 10000,
    category: "airpods",
    image: "Images/casque bose noir.jpg",
    description: [
      "Casque Bose premium.",
      "• Annulation de bruit de classe mondiale",
      "• Son riche & équilibré",
      "• Jusqu'à 24h d'autonomie",
      "• Micro HD pour appels crystal clear",
      "• Design élégant & confortable",
      "La référence en audio sans fil."
    ]
  },
  {
    id: 6,
    name: "Power Bank 10000mAh",
    price: 6000,
    category: "batterie externe et chargeurs",
    image: "Images/WhatsApp Image 2026-02-03 at 23.57.08.jpeg",
    description: [
      "Power Bank 10000mAh — Charge rapide 20W.",
      "• 2 ports USB + 1 port USB-C",
      "• Recharge plusieurs appareils simultanément",
      "• Indicateur de niveau de batterie LED",
      "• Ultra compact & léger",
      "Plus jamais en panne de batterie !"
    ]
  },
  {
    id: 7,
    name: "Power Bank 10000mAh",
    price: 8000,
    category: "batterie externe et chargeurs",
    image: "Images/powerbank 20000.png",
    description: [
     "Power Bank 10000mAh — Charge rapide 20W.",
      "• 2 ports USB + 1 port USB-C",
      "• Recharge plusieurs appareils simultanément",
      "• Indicateur de niveau de batterie LED",
      "• Ultra compact & léger",
      "Plus jamais en panne de batterie !"
    ]
 },
  {
    id: 8,
    name: "Lampe LED Selfie",
    price: 3500,
    category: "led",
    image: "Images/led horizontal .png",
    description: [
      "L’essentiel pour un bon éclairage.",
      "• 3 modes de lumière:blanc chaud, jaune, blanc, froid",
      "• Intensité réglable selon tes besoins",
      "• Idéale selfies, TikTok, lives & vidéos",
      "Ton studio d'éclairage partout avec toi !"
    ]
  },

    {
     id: 9,
     name: "Mini Lumière LED RGB avec Pince — Éclairage Portable",
     price: 5000,
     category: "led",   // airpods | batterie | accessoire | divers
     image: "Images/led verticale.png",
     description: [
       "Lumière LED compacte avec 7 couleurs disponibles : rose, violet, bleu clair, bleu foncé, rouge, beige et blanc. Parfaite pour photos, vidéos, selfies et streaming.",
       "• Pince universelle robuste",
       "• Rotule ajustable 360°",
       "• Design compact & léger",
       "• Effets lumineux - mode flash",
       "• Plusieurs couleurs disponibles",
       "L'éclairage créatif où que vous soyez !"
   ]
 },
  {
    id: 26,
    name: "Lampe LED Selfie Magnétique",
    price: 7000,
    category: "led",
    image: "Images/Lampe LED Selfie MagSafe noir.png",   // image par défaut = première variante

    // ─────────────────────────────────────────────────────────
    // 🎨 VARIANTES DE COULEURS
    // ─────────────────────────────────────────────────────────
    variants: [
      { label: "Blanc", image: "Images/Lampe LED Selfie MagSafe blanche.png", color: "#f5f5f0" },
      { label: "Noir",  image: "Images/Lampe LED Selfie MagSafe noir.png",  color: "#1c1c1e" },
    ],
    description: [
      "Lampe LED Selfie Magnétique — S'attache instantanément à votre iPhone.",
      "• 3 modes de lumière : blanc chaud, jaune & blanc froid",
      "• Intensité réglable selon vos besoins",
      "• Fixation magnétique  ultra rapide",
      "• Idéale selfies, TikTok, lives & vidéos",
      "• Disponible en blanc ou noir",
      "Ton studio d'éclairage, toujours avec toi !"
    ]
  },

 {
     id: 10,
     name: "Air Pods Pro 3",
     price: 10000,
     category: "airpods",   // airpods | batterie | accessoire | divers
     image: "Images/airpods pro3.png",
     description: [
        "Une expérience audio premium avec réduction de bruit avancée et confort optimal.",
    "• Réduction de bruit active pour une immersion totale",
    "• Mode transparence pour rester connecté à votre environnement",
    "• Autonomie longue durée avec boîtier de charge rapide",
    "• Qualité sonore haute définition avec basses puissantes",
         "Etuis AirPods de votre choix offert ."
        ]
  },
  
{
  id: 11,
  name: "Coque AirPods 4",
  price: 1500,
  category: "accessoire",
  image: "https://i.pinimg.com/1200x/08/59/6a/08596afcbb32f7f177c9ac07353d700e.jpg",
  variants: [
    { label: "Noir",          image: "https://i.pinimg.com/1200x/08/59/6a/08596afcbb32f7f177c9ac07353d700e.jpg",        color: "#1a1a1a" },
    { label: "Rose",          image: "https://i.pinimg.com/736x/a2/27/d0/a227d0ece58465a570feba7a901a0d68.jpg",         color: "#f48fb1" },
    { label: "Violet",        image: "https://i.pinimg.com/1200x/56/b1/2b/56b12bffdf942dde6b965b050d666153.jpg",       color: "#9c27b0" },
    { label: "Bleu foncé",    image: "https://i.pinimg.com/1200x/04/56/09/045609645ff8e98ea46e791342ad7085.jpg",     color: "#1a237e" },
    { label: "Blanc",         image: "https://i.pinimg.com/1200x/8b/36/46/8b36465511cffe018d0be25543d8294e.jpg",        color: "#f5f5f5" },
    { label: "Gris lavande",  image: "https://i.pinimg.com/1200x/19/94/6e/19946e508de2ce42909dc9908eb1728d.jpg", color: "#b0a8c8" },
    { label: "Bleu clair",    image: "https://i.pinimg.com/1200x/f4/2c/af/f42cafb29e4103fcc4f7572a2c854bef.jpg",    color: "#90caf9" },
  ],
  description: [
    "Protège ton étui AirPods 4 avec style.",
    "• Compatible AirPods 4ème génération uniquement",
    "• Silicone souple anti-choc & anti-rayures",
    "• Accès total au port de charge",
    "• Grip antidérapant plus de chutes",
    "• 7 couleurs disponibles au choix",
    "La protection qui ne compromet pas le style !",
    "Livraison gratuite à Dakar"
  ]
},

{
  id: 12,
  name: "Coque AirPods Pro 2",
  price: 1500,
  category: "accessoire",
  image: "https://i.pinimg.com/1200x/0f/da/8f/0fda8f86da584b503809569964a4a39d.jpg",
  variants: [
    { label: "Noir",         image: "https://www.pinterest.com/pin/1057220081251361712/",       color: "#1a1a1a" },
    { label: "Rose",         image: "https://i.pinimg.com/736x/a2/27/d0/a227d0ece58465a570feba7a901a0d68.jpg",        color: "#f48fb1" },
    { label: "Violet",       image: "https://i.pinimg.com/1200x/0f/da/8f/0fda8f86da584b503809569964a4a39d.jpg",      color: "#9c27b0" },
    { label: "Bleu foncé",   image: "https://i.pinimg.com/1200x/2f/83/d8/2f83d88940292c836cb3d436dbee1797.jpg",    color: "#1a237e" },
    { label: "Blanc",        image: "https://i.pinimg.com/736x/e1/3c/92/e13c924e556b1f7a46c239b22e6968e1.jpg",       color: "#f5f5f5" },
    { label: "Gris lavande", image: "https://i.pinimg.com/736x/c8/5e/ec/c85eec672b25ce61688dde370aadaf11.jpg",color: "#b0a8c8" },
    //{ label: "Gris foncé",   image: "Images/coque-pro2-darkgray.jpg",    color: "#424242" },
    { label: "Beige",        image: "https://i.pinimg.com/1200x/c1/49/c8/c149c8beaf8842a535de35e4e85ad5c7.jpg",       color: "#d7c4a3" },
    { label: "Bordeaux",     image: "https://i.pinimg.com/1200x/9e/9b/b3/9e9bb3401425e1178bda25dc0d55ebfa.jpg",        color: "#7b1c2e" },
  ],
  description: [
    "Protège ton étui AirPods Pro 2 avec style.",
    "• Compatible AirPods Pro 2ème génération uniquement",
    "• Silicone souple anti-choc & anti-rayures",
    "• Accès total au port de charge MagSafe",
    "• Grip antidérapant plus de chutes",
    "• 9 couleurs disponibles au choix",
    "La protection qui ne compromet pas le style !",
    "Livraison gratuite à Dakar"
  ]
},

{
  id: 13,
  name: "Coque AirPods 3",
  price: 1500,
  category: "accessoire",
  image: "https://i.pinimg.com/1200x/04/56/09/045609645ff8e98ea46e791342ad7085.jpg",
  variants: [
    { label: "Noir",         image: "https://i.pinimg.com/1200x/08/59/6a/08596afcbb32f7f177c9ac07353d700e.jpg",       color: "#1a1a1a" },
    { label: "Rose",         image: "https://i.pinimg.com/736x/a2/27/d0/a227d0ece58465a570feba7a901a0d68.jpg",        color: "#f48fb1" },
    { label: "Violet",       image: "https://i.pinimg.com/1200x/56/b1/2b/56b12bffdf942dde6b965b050d666153.jpg" },
    { label: "Bleu foncé",   image: "https://i.pinimg.com/1200x/04/56/09/045609645ff8e98ea46e791342ad7085.jpg",    color: "#1a237e" },
    { label: "Blanc",        image: "https://i.pinimg.com/1200x/8b/36/46/8b36465511cffe018d0be25543d8294e.jpg",       color: "#f5f5f5" },
    { label: "Gris lavande", image: "https://i.pinimg.com/1200x/19/94/6e/19946e508de2ce42909dc9908eb1728d.jpg",color: "#b0a8c8" },
    { label: "Bleu clair",   image: "https://i.pinimg.com/1200x/f4/2c/af/f42cafb29e4103fcc4f7572a2c854bef.jpg",   color: "#90caf9" },
  ],
  description: [
    "Protège ton étui AirPods 3 avec style.",
    "• Compatible AirPods 3ème génération uniquement",
    "• Silicone souple anti-choc & anti-rayures",
    "• Accès total au port de charge",
    "• Grip antidérapant  plus de chutes",
    "• 7 couleurs disponibles au choix",
    "La protection qui ne compromet pas le style !",
    "Livraison gratuite à Dakar"
  ]
},
   {
    id: 14,
    name: "Ventouse CIS-TECH",
    price: 1000,
    category: "accessoire",
    image: "Images/ventouse tel.jpg",   // image par défaut = première variante
 
    // ─────────────────────────────────────────────────────────
    // 🎨 VARIANTES DE COULEURS
    // label : texte affiché sur le bouton
    // image : fichier image de cette couleur
    // color : couleur du cercle de sélection (code hex)
    // ─────────────────────────────────────────────────────────
    variants: [
      { label: "Jaune",        image: "Images/ventouse jaune.png", color: "#FFD600" },
      { label: "Orange",       image: "Images/ventouse orange.png", color: "#FF6B00" },
      { label: "Bleu ciel",    image: "Images/ventouse bleu clair.png", color: "#87CEEB" },
      { label: "Bleu foncé",   image: "Images/ventouse bleu marine.png", color: "#1A3A6B" },
      { label: "Lac vert",     image: "Images/ventouse lac vert.png", color: "#3CB6A8" },
      { label: "Vert",         image: "Images/ventouse vert.png", color: "#2E8B57" },
      { label: "Rose clair",   image: "Images/rose clair.png", color: "#FFB6C1" },
      { label: "Rouge",        image: "Images/ventouse rouge.png", color: "#D32F2F" },
      { label: "Rose foncé",   image: "Images/ventouse rose foncé.png", color: "#C2185B" },
      { label: "Transparent",  image: "Images/ventouse transparent.png", color: "#E8F4F8", border: "#aaa" },
      { label: "Gris clair",   image: "Images/ventouse gris clair.png", color: "#BDBDBD" },
     // { label: "Gris foncé",   image: "Images/ventouse tel.jpg", color: "#424242" },
      { label: "Purple",       image: "Images/ventouse purple.png", color: "#7B1FA2" },
      { label: "Noir",         image: "Images/ventouse noir.png", color: "#111111" },
      { label: "Blanc",        image: "Images/ventouse blanc.png", color: "#F5F5F5", border: "#ccc" },
    ],
    description: [
      "Ventouse CIS-TECH — Support téléphone ultra-adhérent.",
      "• Compatible tous smartphones & coques",
      "• Fixation puissante sans abîmer l'écran",
      "• Idéale voiture, bureau, cuisine & salle de bain",
      "• Légère, compacte & réutilisable",
      "• Disponible en 16 couleurs au choix",
      "Le petit accessoire indispensable au quotidien !",
    //  "Livraison gratuite à Dakar"
    ]
  },
  {
  id: 15,
  name: "Support Téléphone Voiture",
  price: 3500,
  category: "accessoire",
  image: "Images/support telephone.png",
  description: [
    "Support téléphone universel pour voiture.",
    "• Compatible tous smartphones (jusqu'à 7 pouces)",
    "• Fixation ventouse ultra-stable sur pare-brise & tableau de bord",
    "• Rotation 360° pour orientation portrait ou paysage",
    "• Installation & retrait en 1 seconde",
    "• Bras articulé ajustable",
    "Navigue en toute sécurité, les mains libres !"
  ]
},
{
  id: 16,
  name: "Micro Cravate Sans Fil",
  price: 8000,
  category: "accessoire",
  image: "Images/micro cravate.jpg",
  description: [
    "Micro cravate sans fil — Son cristallin pour tes contenus.",
    "• Connexion sans fil stable jusqu'à 10 mètres",
    "• Compatible iPhone, Android & appareils photo",
    "• Clip discret & léger, s'attache en 2 secondes",
    "• Son HD sans bruit de fond",
    "• Idéal interviews, TikTok, YouTube & présentations",
    "Ta voix, amplifiée. Ton contenu, professionnel !"
  ]
},
 {
    id: 17,
    name: "Support Ordinateur ",
    price: 5000,
    category: "accessoire",
    image: "Images/support pc.png",
    description: [
      "Support ordinateur en métal robuste & élégant.",
      "• Hauteur réglable pour une posture parfaite",
      "• Compatible tous laptops jusqu'à 17 pouces",
      "• Matière aluminium premium ultra solide",
      "• Design épuré & pliable pour le transport",
      "• Ventilation optimale pour éviter la surchauffe",
      "Travaille mieux, partout.",
    
    ]
  },

  /* {
    id: 18,
    name: "Mini Ventilateur",
    price: 4000,
    category: "accessoire",
    image: "Images/ventillo noir.png",
 
    // ─────────────────────────────────────────────────────────
    // 🎨 VARIANTES DE COULEURS
    // ─────────────────────────────────────────────────────────
    variants: [
      { label: "Noir", image: "Images/ventillo noir.png", color: "#1a1a1a" },
      { label: "Rose", image: "Images/ventillo rose.png", color: "#f4a7b9" },
    ],
    description: [
      "Ventilateur portable compact & silencieux.",
      "• Ultra léger, parfait pour les déplacements",
      "• Rechargeable via USB-C",
      "• 3 vitesses réglables",
      "• Autonomie longue durée",
      "• Disponible en Noir et Rose",
      "La fraîcheur partout avec toi !"
    ]
  },
*/
  {
    id: 19,
    name: "Trépied Téléphone 1700mm",
    price: 8000, // ← mets le prix ici
    category: "accessoire",
    image: "Images/trepied tel.png", // ← mets le nom de ton image ici
    description: [
      "Trépied réglable jusqu'à 1700mm — idéal pour la photo & la vidéo.",
      "• Hauteur ajustable jusqu'à 170 cm",
      "• Tête rotative 360° & inclinable",
      "• Fixation téléphone universelle incluse",
      "• Pieds antidérapants ultra stables",
      "• Léger & pliable, facile à transporter",
      "Le compagnon parfait pour tes contenus !"
    ]
  },
  {
    id: 20,
    name: "Trépied Portable & Stabilisateur",
    price: 10000,
    category: "accessoire",
    image: "Images/trepied portable & stabilisateur.png",
    description: [
      "Trépied portable & stabilisateur universel.",
      "• Compatible smartphones & appareils photo",
      "• Hauteur réglable & pliable ultra compact",
      "• Tête rotative 360° pour tous les angles",
      "• Fixation universelle antidérapante",
      "• Léger, stable & facile à transporter",
      "Le compagnon idéal pour tes photos & vidéos !",
      "Livraison gratuite à Dakar"
    ]
  },
   {
     id: 21,
     name: "AirPods 2",
     price: 5000,
     category: "airpods",   // airpods | batterie | accessoire | divers
     image: "Images/airpod 2.png",
     description: [
        "AirPods 2.",
      "• Son haute définition",
      "• Micro intégré ultra clair",
      "• Basses riches & profondes",
      "• Design iconique Apple",
      "Le classique indémodable.",
   //   "Etuis AirPods de votre choix offert ."
]
 },
  
{
  id: 22,
  name: "Coque AirPods Dinosaure avec Porte-Clé",
  price: 2000,
  category: "accessoire",
  image: "Images/ap case noir.png",
  variants: [
    { label: "Vert matcha",   image: "Images/ap case vert.png",   color: "#a8c5a0" },
    { label: "Rose clair",    image: "Images/ap case rose.png",    color: "#f8bbd0" },
    { label: "Violet clair",  image: "Images/ap case violet.png",  color: "#ce93d8" },
    { label: "Gris foncé",    image: "Images/ap case noir.png",    color: "#546e7a" },
    { label: "Bleu clair",    image: "Images/ap case bleu.png",    color: "#90caf9" },
  ],
  description: [
    "Protège ton étui AirPods avec un motif dinosaure adorable.",
    "• Porte-clé intégré pour ne jamais le perdre",
    "• Silicone souple anti-choc & anti-rayures",
    "• Accès total au port de charge",
    "• 5 couleurs pastel disponibles au choix",
    "Mignon, pratique et stylé !",
   // "Livraison gratuite à Dakar"
  ]
},

{
  id: 23,
  name: "Coque AirPods fleurs avec Lanière",
  price: 2000,
  category: "accessoire",
  image: "Images/ap case bleu laniere.png",
  variants: [
    { label: "Vert matcha",   image: "Images/ap case vert laniere.png",   color: "#a8c5a0" },
    { label: "Rose clair",    image: "Images/ap case rose laniére.png",    color: "#f8bbd0" },
    { label: "Violet clair",  image: "Images/ap case violet laniere.png",  color: "#ce93d8" },
    { label: "Gris foncé",    image: "Images/ap case noir laniere.png",    color: "#546e7a" },
    { label: "Bleu clair",    image: "Images/ap case bleu laniere.png",    color: "#90caf9" },
  ],
  description: [
    "Protège ton étui AirPods avec un motif dinosaure adorable.",
    "• Lanière incluse pour le porter autour du cou ou du sac",
    "• Silicone souple anti-choc & anti-rayures",
    "• Accès total au port de charge",
    "• 5 couleurs pastel disponibles au choix",
    "Le combo style & praticité !",
    //"Livraison gratuite à Dakar"
  ]
},

{
  id: 24,
  name: "Coque AirPods PlayStation",
  price: 2000,
  category: "accessoire",
  image: "Images/ap case playstation noir.png",
  variants: [
    { label: "Gris foncé",    image: "Images/ap case playstation noir.png",    color: "#546e7a" },
    { label: "Blanc",         image: "Images/ap case playstation blanc.png",   color: "#f5f5f5" },
    { label: "Rose",          image: "Images/ap case playstation rose.png",    color: "#f48fb1" },
    { label: "Violet nuit",   image: "Images/ap case playstation violet.png",  color: "#4a148c" },
    //{ label: "Bleu foncé",    image: "Images/coque playstation bleu.jpg",    color: "#1a237e" },
  ],
  description: [
    "Pour les gamers qui veulent afficher leur passion partout.",
    "• Motif PlayStation iconique (△ ○ ✕ □)",
    "• Silicone souple anti-choc & anti-rayures",
    "• Accès total au port de charge",
    "• 4 coloris gaming disponibles",
    "Level up ton style !",
    //"Livraison gratuite à Dakar"
  ]
},
  
  {
    id: 25,
    name: "Chargeur iPhone Lightning",
    price: 5000,
    category: "batterie externe et chargeurs",
    image: "Images/chargeur lightning.png",
    description: [
      "Chargeur iPhone Lightning Compatible tous modèles.",
      "• Compatible iPhone 5 jusqu'à iPhone 14",
      "• Charge rapide & stable",
      "• Câble renforcé anti-arrachement",
      "• Longueur idéale pour une utilisation quotidienne",
      "• Léger & facile à transporter",
      "La recharge fiable pour votre iPhone !"
    ]
  },
  {
    id: 26,
    name: "Chargeur iPhone USB-C",
    price: 6000,
    category: "batterie externe et chargeurs",
    image: "Images/chargeur ubc.png",
    description: [
      "Chargeur iPhone USB-C  Pour les derniers modèles Apple.",
      "• Compatible iPhone 15 et modèles récents",
      "• Charge rapide jusqu'à 20W",
      "• Câble tressé ultra-résistant",
      "• Connecteur USB-C robuste & précis",
      "• Design épuré & compact",
      "La puissance de la charge rapide Apple !"
    ]
  },
  {
    "id": 27,
    "name": "Set Complet Magic Keyboard, Souris & Apple Pencil",
    "price": 50000,
    "category": "accessoire",
    "image": "Images/clavier noir.png",
    "variants": [
      { "label": "Noir",        "image": "Images/clavier noir.png", "color": "#111111" },
      { "label": "Blanc",       "image": "Images/clavier blanc.png", "color": "#F5F5F5", "border": "#ccc" }
    ],
    "description": [
      "Set complet Apple : Clavier, Souris et Apple Pencil.",
      "• Magic Keyboard : Frappe fluide, stable et réactive",
      "• Souris sans fil : Précision et navigation tactile intuitive",
      "• Apple Pencil : Créativité et précision au millimètre",
      "• Design minimaliste et connectivité Bluetooth fluide",
      "• Batterie rechargeable intégrée pour chaque accessoire",
      "• Compatible Mac, iPad et iPhone",
      "Le pack ultime pour optimiser votre productivité Apple !"
    ]
}
  {
    id: 28,
    name: "Coque iPhone Noire — Range Rover",
    price: 2000,
    category: "accessoire",
    image: "Images/coque range rover.jpeg",
    description: [
      "Coque noire élégante Range Rover.",
      "• Protection complète contre les chocs",
      "• Design sobre avec touche colorée",
      "• Accès facile aux boutons et ports",
      "• Compatible iPhone XR jusqu'à iPhone 17 Pro Max (précise ton modèle en commande)",
      "Le style discret qui fait la différence !"
    ]
  },
  {
    id: 29,
    name: "Coque iPhone Transparente — Porshe ",
    price: 2000,
    category: "accessoire",
    image: "Images/coque porche.jpeg",
    description: [
      "Coque transparente porshe.",
      "• Garde ton téléphone et ta carte au même endroit",
      "• Transparence qui laisse voir la couleur d'origine",
      "• Protection anti-choc renforcée aux angles",
      "• Compatible iPhone XR jusqu'à iPhone 17 Pro Max (précise ton modèle en commande)",
      "Pratique et discret au quotidien !"
    ]
  },
  {
    id: 30,
    name: "Coque iPhone Be You — Rose",
    price: 2000,
    category: "accessoire",
    image: "Images/coque be you rose.jpeg",
    description: [
      "Coque Rose avec motif kiss be you .",
      "• Design romantique et féminin",
      "• Finition douce au toucher",
      "• Protection complète des angles et coins",
      "• Compatible iPhone XR jusqu'à iPhone 17 Pro Max (précise ton modèle en commande)",
      "Un peu de douceur sur ton téléphone !"
    ]
  },
  {
    id: 30,
    name: "Coque iPhone Be You — Argentée",
    price: 2000,
    category: "accessoire",
    image: "Images/coque be you gris.jpeg",
    description: [
      "Coque argentée avec motif kiss be you .",
      "• Finition métallisée élégante",
      "• Motif kiss délicat et tendance",
      "• Protection complète des angles et coins",
      "• Compatible iPhone XR jusqu'à iPhone 17 Pro Max (précise ton modèle en commande)",
      "L'élégance qui brille discrètement !"
    ]
  },
  //
  // {
  //   id: 9,
  //   name: "Nom du produit",
  //   price: 5000,
  //   category: "airpods",   // airpods | batterie | accessoire | divers
  //   image: "Images/monfichier.jpg",
  //   description: [
  //     "Phrase d'accroche principale.",
  //     "• Point 1",
  //     "• Point 2",
  //     "• Point 3",

  // {
  //   id: 9,
  //   name: "Nom du produit",
  //   price: 5000,
  //   category: "airpods",   // airpods | batterie | accessoire | divers
  //   image: "Images/monfichier.jpg",
  //   description: [
  //     "Phrase d'accroche principale.",
  //     "• Point 1",
  //     "• Point 2",
  //     "• Point 3",

  // {
  //   id: 9,
  //   name: "Nom du produit",
  //   price: 5000,
  //   category: "airpods",   // airpods | batterie | accessoire | divers
  //   image: "Images/monfichier.jpg",
  //   description: [
  //     "Phrase d'accroche principale.",
  //     "• Point 1",
  //     "• Point 2",
  //     "• Point 3",

  // {
  //   id: 9,
  //   name: "Nom du produit",
  //   price: 5000,
  //   category: "airpods",   // airpods | batterie | accessoire | divers
  //   image: "Images/monfichier.jpg",
  //   description: [
  //     "Phrase d'accroche principale.",
  //     "• Point 1",
  //     "• Point 2",
  //     "• Point 3",

  // {
  //   id: 9,
  //   name: "Nom du produit",
  //   price: 5000,
  //   category: "airpods",   // airpods | batterie | accessoire | divers
  //   image: "Images/monfichier.jpg",
  //   description: [
  //     "Phrase d'accroche principale.",
  //     "• Point 1",
  //     "• Point 2",
  //     "• Point 3",


  
  /*➕ Pour ajouter un nouveau produit, copie ce bloc :
   {
     id: ,
     name: "Nom du produit",
     price: 5000,
     category: "airpods",   // airpods | batterie | accessoire | divers
     image: "Images/monfichier.jpg",
     description: [
       "Phrase d'accroche principale.",
       "• Point 1",
       "• Point 2",
     "• Point 3",
*/
//
]; // ← fermeture du tableau PRODUCTS
