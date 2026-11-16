
// ===== APP.JS — Fonctions partagées sur toutes les pages =====

// Images par défaut
const DEFAULT_IMAGES = {
  airpods: "https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?w=500&q=80",
  batterie: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&q=80",
  accessoire: "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?w=500&q=80",
  gadget: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80",
  hero: "https://images.unsplash.com/photo-1588423771073-b8903fead714?w=600&q=80",
  collection: "https://images.unsplash.com/photo-1601524909162-ae8725290836?w=400&q=80",
};

function getImage(src, category) {
  if (src && src.trim() !== "") return src;
  return DEFAULT_IMAGES[category] || DEFAULT_IMAGES.collection;
}

// ===== INIT HEADER =====
document.addEventListener('DOMContentLoaded', () => {
  const logoWrap = document.getElementById('logoWrap');

  if (logoWrap) {
    if (STORE_CONFIG.logo && STORE_CONFIG.logo.trim() !== "") {
      logoWrap.innerHTML = `
        <img src="${STORE_CONFIG.logo}"
             alt="${STORE_CONFIG.name}"
             class="logo-img"/>
      `;
    } else {
      logoWrap.innerHTML = `
        <div class="logo-icon">C</div>
        <div class="logo-text">
          <span class="logo-name">${STORE_CONFIG.name}</span>
          <span class="logo-tagline">${STORE_CONFIG.tagline}</span>
        </div>
      `;
    }
  }

  // Scroll header
  window.addEventListener('scroll', () => {
    document.getElementById('header')
      ?.classList.toggle('scrolled', window.scrollY > 20);
  });

  // Active nav link
  const currentPage =
    window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.mobile-menu a').forEach(a => {
    if (a.getAttribute('href') === currentPage) {
      a.classList.add('active-link');
    }
  });

  updateCartUI();
});

// ===== PANIER =====
let cart = JSON.parse(localStorage.getItem('cistech-cart') || '[]');

// Identifiant unique d'une combinaison produit + modèle + couleur
function getCartKey(item) {
  return [
    item.id,
    item.selectedModel || '',
    item.selectedColor || ''
  ].join('::');
}

function updateCartUI() {
  const total = cart.reduce((s, x) => s + x.qty, 0);

  document.querySelectorAll('#cartCount').forEach(el => {
    el.textContent = total;
  });
}

// Ajouter rapidement au panier
function addToCart(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;

  // Les produits personnalisables passent par la fenêtre de sélection
  if (p.models?.length || p.variants?.length) {
    openModal(id);
    return;
  }

  addToCartItem({ ...p });
}

// Supprimer un article du panier
function removeFromCart(cartKey) {
  cart = cart.filter(item => getCartKey(item) !== cartKey);

  saveCart();
  updateCartUI();
  renderCartItems();
}

// Modifier la quantité
function changeQty(cartKey, delta) {
  const item = cart.find(x => getCartKey(x) === cartKey);
  if (!item) return;

  item.qty += delta;

  if (item.qty <= 0) {
    removeFromCart(cartKey);
  } else {
    saveCart();
    updateCartUI();
    renderCartItems();
  }
}

// Sauvegarder le panier
function saveCart() {
  localStorage.setItem('cistech-cart', JSON.stringify(cart));
}

// Afficher les articles du panier
function renderCartItems() {
  const container = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');

  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML =
      '<p class="cart-empty">Votre panier est vide</p>';

    if (footer) footer.style.display = 'none';

    const totalEl = document.getElementById('cartTotal');
    if (totalEl) totalEl.textContent = 'CFA0';

    return;
  }

  if (footer) footer.style.display = 'block';

  container.innerHTML = cart.map(item => {
    const cartKey = getCartKey(item);

    return `
      <div class="cart-item">

        <img
          src="${getImage(item.image, item.category)}"
          alt="${item.name}"
        />

        <div class="cart-item-info">

          <p class="cart-item-name">${item.name}</p>

          ${item.selectedModel ? `
            <p class="cart-item-detail">
              Modèle : ${item.selectedModel}
            </p>
          ` : ''}

          ${item.selectedColor ? `
            <p class="cart-item-detail">
              Couleur : ${item.selectedColor}
            </p>
          ` : ''}

          <p class="cart-item-price">
            CFA${(item.price * item.qty).toLocaleString('fr-FR')}
          </p>

          <div class="cart-item-qty">

            <button
              class="qty-btn"
              onclick='changeQty(${JSON.stringify(cartKey)}, -1)'
            >−</button>

            <span class="qty-num">${item.qty}</span>

            <button
              class="qty-btn"
              onclick='changeQty(${JSON.stringify(cartKey)}, 1)'
            >+</button>

          </div>
        </div>

        <button
          class="remove-item"
          onclick='removeFromCart(${JSON.stringify(cartKey)})'
        >🗑</button>

      </div>
    `;
  }).join('');

  const total = cart.reduce(
    (s, x) => s + x.price * x.qty,
    0
  );

  const totalEl = document.getElementById('cartTotal');

  if (totalEl) {
    totalEl.textContent = `CFA${total.toLocaleString('fr-FR')}`;
  }
}

// Ouvrir / fermer le panier
function toggleCart() {
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('cartOverlay');

  if (!sidebar || !overlay) return;

  const isOpen = sidebar.classList.contains('open');

  if (!isOpen) {
    renderCartItems();
    sidebar.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  } else {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// ===== COMMANDE WHATSAPP =====
function commanderWhatsApp() {
  if (cart.length === 0) return;

  const total = cart.reduce(
    (s, x) => s + x.price * x.qty,
    0
  );

  let msg = "Bonjour CIS-TECH !\n\n";
  msg += "Je souhaite commander :\n\n";

  cart.forEach(item => {
    msg += `• ${item.name}\n`;

    if (item.selectedModel) {
      msg += `  Modèle : ${item.selectedModel}\n`;
    }

    if (item.selectedColor) {
      msg += `  Couleur : ${item.selectedColor}\n`;
    }

    msg += `  Quantité : ${item.qty}\n`;
    msg += `  Prix : CFA${(item.price * item.qty).toLocaleString('fr-FR')}\n\n`;
  });

  msg += `*TOTAL : CFA${total.toLocaleString('fr-FR')}*\n\n`;
  msg += "Merci de me confirmer la disponibilité et la livraison !";

  window.open(
    `https://wa.me/${STORE_CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`,
    '_blank'
  );
}

// ===== MENU MOBILE =====
function toggleMenu() {
  document.getElementById('mobileMenu')?.classList.toggle('open');
  document.getElementById('menuOverlay')?.classList.toggle('open');
}

// ===== CARTES PRODUITS =====
function renderProductCards(list, containerId) {
  const grid = document.getElementById(containerId);
  if (!grid) return;

  grid.innerHTML = list.map((p, i) => `
    <div
      class="product-card"
      style="animation-delay:${i * 0.06}s"
      onclick="openModal(${p.id})"
    >

      <div class="product-img-wrap">

        <img
          src="${getImage(p.image, p.category)}"
          alt="${p.name}"
          loading="lazy"
        />

        <button
          class="add-to-cart-quick"
          onclick="event.stopPropagation(); addToCart(${p.id})"
          title="Ajouter"
        >🛒</button>

      </div>

      <div class="product-info">

        <p class="product-category">
          ${getCategoryLabel(p.category)}
        </p>

        <p class="product-name">${p.name}</p>

        <p class="product-price">
          CFA${p.price.toLocaleString('fr-FR')}
        </p>

      </div>
    </div>
  `).join('');
}

function getCategoryLabel(cat) {
  const labels = {
    airpods: '🎧 AirPods & Audio',
    batterie: '🔋 Batterie & LED',
    accessoire: '📦 Accessoire',
    gadget: '⚡ Gadget'
  };

  return labels[cat] || cat;
}

// ===== FENÊTRE PRODUIT =====
function openModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;

  const modal = document.getElementById('productModal');
  const modalContent = document.getElementById('modalContent');

  if (!modal || !modalContent) return;

  // Réinitialiser les sélections à chaque ouverture
  modal.dataset.selectedVariant = p.variants?.length ? '0' : '';
  modal.dataset.selectedModel = '';

  // Description
  const descHTML = Array.isArray(p.description)
    ? p.description.map(line =>
        line.startsWith('•')
          ? `<span class="desc-bullet">${line}</span>`
          : `<span class="desc-line">${line}</span>`
      ).join('')
    : `<span class="desc-line">${p.description || ''}</span>`;

  // Sélection du modèle
  const modelsHTML = p.models?.length ? `
    <div class="models-wrap">

      <p class="variants-label">
        Modèle : <strong id="selectedModelLabel">Choisir un modèle</strong>
      </p>

      <div class="models-btns">

        ${p.models.map((model, i) => `
          <button
            type="button"
            class="model-btn"
            onclick="selectModel(${id}, ${i}, this)"
          >
            ${model}
          </button>
        `).join('')}

      </div>
    </div>
  ` : '';

  // Sélection de la couleur
  const variantsHTML = p.variants?.length ? `
    <div class="variants-wrap">

      <p class="variants-label">
        Couleur :
        <strong id="selectedVariantLabel">
          ${p.variants[0].label}
        </strong>
      </p>

      <div class="variants-btns">

        ${p.variants.map((v, i) => `
          <button
            type="button"
            class="variant-btn ${i === 0 ? 'active' : ''}"
            style="background:${v.color || '#cccccc'}"
            title="${v.label}"
            onclick="selectVariant(${id}, ${i}, this)"
          ></button>
        `).join('')}

      </div>
    </div>
  ` : '';

  // Image initiale
  const initialImage = p.variants?.[0]?.image || p.image;

  modalContent.innerHTML = `
    <img
      id="modalImg"
      src="${getImage(initialImage, p.category)}"
      alt="${p.name}"
    />

    <h3>${p.name}</h3>

    <p class="modal-price">
      CFA${p.price.toLocaleString('fr-FR')}
    </p>

    ${modelsHTML}

    ${variantsHTML}

    <div class="modal-desc">
      ${descHTML}
    </div>

    <button
      class="modal-add-btn"
      onclick="addToCartFromModal(${p.id})"
    >
      🛒 Ajouter au panier
    </button>
  `;

  document.getElementById('modalOverlay')?.classList.add('open');
  modal.classList.add('open');

  document.body.style.overflow = 'hidden';
}

// ===== SÉLECTION DU MODÈLE =====
function selectModel(productId, modelIndex, btn) {
  const p = PRODUCTS.find(x => x.id === productId);

  if (!p || !p.models) return;

  const selectedModel = p.models[modelIndex];
  const modal = document.getElementById('productModal');

  if (!selectedModel || !modal) return;

  // Enregistrer le modèle choisi
  modal.dataset.selectedModel = selectedModel;

  // Mettre à jour le texte
  const label = document.getElementById('selectedModelLabel');

  if (label) {
    label.textContent = selectedModel;
  }

  // Mettre à jour le bouton actif
  document.querySelectorAll('.model-btn').forEach(button => {
    button.classList.remove('active');
  });

  btn.classList.add('active');
}

// ===== SÉLECTION DE LA COULEUR =====
function selectVariant(productId, variantIndex, btn) {
  const p = PRODUCTS.find(x => x.id === productId);

  if (!p || !p.variants) return;

  const v = p.variants[variantIndex];

  if (!v) return;

  const modal = document.getElementById('productModal');

  // Enregistrer la couleur choisie
  modal.dataset.selectedVariant = variantIndex;

  // Mettre à jour l'image
  const modalImg = document.getElementById('modalImg');

  if (modalImg) {
    modalImg.src = getImage(v.image, p.category);
  }

  // Mettre à jour le nom de la couleur
  const label = document.getElementById('selectedVariantLabel');

  if (label) {
    label.textContent = v.label;
  }

  // Mettre à jour le bouton actif
  document.querySelectorAll('.variant-btn').forEach(button => {
    button.classList.remove('active');
  });

  btn.classList.add('active');
}

// ===== AJOUT AU PANIER DEPUIS LA FENÊTRE =====
function addToCartFromModal(id) {
  const p = PRODUCTS.find(x => x.id === id);

  if (!p) return;

  const modal = document.getElementById('productModal');

  // Vérifier que le modèle est choisi
  if (p.models?.length && !modal.dataset.selectedModel) {
    showToast('⚠️ Veuillez choisir un modèle');
    return;
  }

  let selectedVariant = null;

  // Récupérer la couleur choisie
  if (p.variants?.length) {
    const variantIndex = Number(modal.dataset.selectedVariant || 0);
    selectedVariant = p.variants[variantIndex];
  }

  const selectedModel = modal.dataset.selectedModel || '';
  const selectedColor = selectedVariant?.label || '';

  // Construire l'article
  const itemToAdd = {
    ...p,

    // Conserver le nom original
    name: p.name,

    // Enregistrer les choix
    selectedModel,
    selectedColor,

    // Utiliser l'image de la couleur choisie
    image: selectedVariant?.image || p.image,

    // Quantité initiale
    qty: 1
  };

  addToCartItem(itemToAdd);
  closeModal();
}

// ===== AJOUT ET FUSION DES ARTICLES =====
function addToCartItem(item) {
  const cartKey = getCartKey(item);

  const existing = cart.find(x => getCartKey(x) === cartKey);

  if (existing) {
    existing.qty++;
  } else {
    cart.push({
      ...item,
      qty: 1
    });
  }

  saveCart();
  updateCartUI();

  showToast(`✅ ${item.name} ajouté au panier`);
}

// ===== FERMER LA FENÊTRE =====
function closeModal() {
  document.getElementById('modalOverlay')?.classList.remove('open');
  document.getElementById('productModal')?.classList.remove('open');

  document.body.style.overflow = '';
}

// ===== TOAST / NOTIFICATION =====
function showToast(msg) {
  document.querySelectorAll('.toast').forEach(t => t.remove());

  const toast = document.createElement('div');

  toast.className = 'toast';
  toast.textContent = msg;

  document.body.appendChild(toast);

  setTimeout(() => toast.remove(), 2500);
}
