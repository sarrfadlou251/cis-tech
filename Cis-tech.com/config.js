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
  { name: "Batterie externe ", category: "batterie", image: "Images/WhatsApp Image 2026-02-03 at 23.57.08.jpeg" },
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
      "Livraison gratuite à Dakar"
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
      "Livraison gratuite à Dakar"
    ]
  },
  {
    id: 3,
    name: "AirPods Max",
    price: 12000,
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
      "Livraison gratuite à Dakar"
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
    name: "Power Bank 20000mAh",
    price: 10000,
    category: "batterie",
    image: "Images/WhatsApp Image 2026-02-03 at 23.57.08.jpeg",
    description: [
      "Power Bank 20000mAh — Charge rapide 20W.",
      "• 2 ports USB + 1 port USB-C",
      "• Recharge plusieurs appareils simultanément",
      "• Indicateur de niveau de batterie LED",
      "• Ultra compact & léger",
      "Plus jamais en panne de batterie !"
    ]
  },
  //{
    //id: 7,
    //name: "Power Bank MagSafe 15000mAh",
    //price: 12000,
    //category: "batterie",
    //image: "Images/power bank magsafe set.jpeg",
    //description: [
     // "Power Bank MagSafe 15000mAh.",
     // "• Charge magnétique sans fil 15W",
    //  "• Compatible iPhone MagSafe",
    //  "• Port USB-C supplémentaire",
      //"• Design premium ultra fin",
      //"• S'attache directement à ton iPhone",
    //  "La charge la plus intelligente du marché."
   // ]
//  },
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
         "Phrase finale mémorable."
        ]
  },
  
{
  id: 11,
  name: "Coque Protection — AirPods 4",
  price: 2000,
  category: "accessoire",
  image: "Images/coque-ap4-black.jpg",
  variants: [
    { label: "Noir",          image: "Images/coque-ap4-black.jpg",        color: "#1a1a1a" },
    { label: "Rose",          image: "Images/coque-ap4-pink.jpg",         color: "#f48fb1" },
    { label: "Violet",        image: "Images/coque-ap4-purple.jpg",       color: "#9c27b0" },
    { label: "Bleu foncé",    image: "Images/coque-ap4-darkblue.jpg",     color: "#1a237e" },
    { label: "Blanc",         image: "Images/coque-ap4-white.jpg",        color: "#f5f5f5" },
    { label: "Gris lavande",  image: "Images/coque-ap4-lavandergray.jpg", color: "#b0a8c8" },
    { label: "Bleu clair",    image: "Images/coque-ap4-lightblue.jpg",    color: "#90caf9" },
  ],
  description: [
    "Protège ton étui AirPods 4 avec style.",
    "• Compatible AirPods 4ème génération uniquement",
    "• Silicone souple anti-choc & anti-rayures",
    "• Accès total au port de charge",
    "• Grip antidérapant — plus de chutes",
    "• 7 couleurs disponibles au choix",
    "La protection qui ne compromet pas le style !",
    "Livraison gratuite à Dakar"
  ]
},

{
  id: 12,
  name: "Coque Protection — AirPods Pro 2",
  price: 2000,
  category: "accessoire",
  image: "Images/coque-pro2-black.jpg",
  variants: [
    { label: "Noir",         image: "Images/coque-pro2-black.jpg",       color: "#1a1a1a" },
    { label: "Rose",         image: "Images/coque-pro2-pink.jpg",        color: "#f48fb1" },
    { label: "Violet",       image: "Images/coque-pro2-purple.jpg",      color: "#9c27b0" },
    { label: "Bleu foncé",   image: "Images/coque-pro2-darkblue.jpg",    color: "#1a237e" },
    { label: "Blanc",        image: "Images/coque-pro2-white.jpg",       color: "#f5f5f5" },
    { label: "Gris lavande", image: "Images/coque-pro2-lavendergray.jpg",color: "#b0a8c8" },
    { label: "Gris foncé",   image: "Images/coque-pro2-darkgray.jpg",    color: "#424242" },
    { label: "Beige",        image: "Images/coque-pro2-beige.jpg",       color: "#d7c4a3" },
    { label: "Bordeaux",     image: "Images/coque-pro2-wine.jpg",        color: "#7b1c2e" },
  ],
  description: [
    "Protège ton étui AirPods Pro 2 avec style.",
    "• Compatible AirPods Pro 2ème génération uniquement",
    "• Silicone souple anti-choc & anti-rayures",
    "• Accès total au port de charge MagSafe",
    "• Grip antidérapant — plus de chutes",
    "• 9 couleurs disponibles au choix",
    "La protection qui ne compromet pas le style !",
    "Livraison gratuite à Dakar"
  ]
},

{
  id: 13,
  name: "Coque Protection — AirPods 3",
  price: 2000,
  category: "accessoire",
  image: "Images/coque-ap3-black.jpg",
  variants: [
    { label: "Noir",         image: "Images/coque-ap3-black.jpg",       color: "#1a1a1a" },
    { label: "Rose",         image: "Images/coque-ap3-pink.jpg",        color: "#f48fb1" },
    { label: "Violet",       image: "Images/coque-ap3-purple.jpg",      color: "#9c27b0" },
    { label: "Bleu foncé",   image: "Images/coque-ap3-darkblue.jpg",    color: "#1a237e" },
    { label: "Blanc",        image: "Images/coque-ap3-white.jpg",       color: "#f5f5f5" },
    { label: "Gris lavande", image: "Images/coque-ap3-lavendergray.jpg",color: "#b0a8c8" },
    { label: "Bleu clair",   image: "Images/coque-ap3-lightblue.jpg",   color: "#90caf9" },
  ],
  description: [
    "Protège ton étui AirPods 3 avec style.",
    "• Compatible AirPods 3ème génération uniquement",
    "• Silicone souple anti-choc & anti-rayures",
    "• Accès total au port de charge",
    "• Grip antidérapant — plus de chutes",
    "• 7 couleurs disponibles au choix",
    "La protection qui ne compromet pas le style !",
    "Livraison gratuite à Dakar"
  ]
},
*/  
  /* {
  //   id: 11,
  //   name: "Nom du produit",
  //   price: 5000,
  //   category: "airpods",   // airpods | batterie | accessoire | divers
  //   image: "Images/monfichier.jpg",
  //   description: [
  //     "Phrase d'accroche principale.",
  //     "• Point 1",
  //     "• Point 2",
       "• Point 3",
]
 },
*/
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
