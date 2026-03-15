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
  { name: "Batterie externe & lampe selfie", category: "batterie", image: "Images/WhatsApp Image 2026-02-03 at 23.57.08.jpeg" },
 // { name: "Divers", category: "divers", image: "Images/divers.jpeg" },
  //{ name: "Accessoires", category: "accessoire", image: "Images/ventouse tel.jpg" }
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
    name: "AirPods 3ème génération",
    price: 8000,
    category: "airpods",
    image: "Images/pod 3 face.jpg",
    description: [
      "AirPods 3ème génération.",
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
    //price: 13000,
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
    price: 9000,
    category: "batterie",
    image: "Images/lampe led 1.jpg",
    description: [
      "Ring Light LED — Éclairage professionnel portable.",
      "• Plusieurs modes de lumière",
      "• Intensité réglable selon tes besoins",
      "• Idéale selfies, TikTok, lives & vidéos",
      "• Compacte, pliable & rechargeable",
      "Ton studio d'éclairage partout avec toi !"
    ]
  },

  // ➕ Pour ajouter un nouveau produit, copie ce bloc :
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
  //     "Phrase finale mémorable."
  //   ]
  // },
];
