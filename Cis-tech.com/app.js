// ===== APP.JS — Fonctions partagées sur toutes les pages =====

// Images par défaut si l'utilisateur n'a pas encore mis les siennes
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

// ===== INIT HEADER (logo) sur chaque page =====
document.addEventListener('DOMContentLoaded', () => {
  const logoWrap = document.getElementById('logoWrap');
  if (logoWrap) {
    if (STORE_CONFIG.logo && STORE_CONFIG.logo.trim() !== "") {
      logoWrap.innerHTML = `<img src="${STORE_CONFIG.logo}" alt="${STORE_CONFIG.name}" class="logo-img"/>`;
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
    document.getElementById('header')?.classList.toggle('scrolled', window.scrollY > 20);
  });

  // Active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.mobile-menu a').forEach(a => {
    if (a.getAttribute('href') === currentPage) a.classList.add('active-link');
  });
});

// ===== PANIER =====
let cart = JSON.parse(localStorage.getItem('cistech-cart') || '[]');

function updateCartUI() {
  const total = cart.reduce((s, x) => s + x.qty, 0);
  document.querySelectorAll('#cartCount').forEach(el => el.textContent = total);
}

function addToCart(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const existing = cart.find(x => x.id === id);
  if (existing) existing.qty++;
  else cart.push({ ...p, qty: 1 });
  saveCart();
  updateCartUI();
  showToast(`✅ ${p.name} ajouté au panier`);
}

function removeFromCart(id) {
  cart = cart.filter(x => x.id !== id);
  saveCart();
  updateCartUI();
  renderCartItems();
}

function changeQty(id, delta) {
  const item = cart.find(x => x.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  else { saveCart(); updateCartUI(); renderCartItems(); }
}

function saveCart() {
  localStorage.setItem('cistech-cart', JSON.stringify(cart));
}

function renderCartItems() {
  const container = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = '<p class="cart-empty">Votre panier est vide</p>';
    if (footer) footer.style.display = 'none';
    return;
  }

  if (footer) footer.style.display = 'block';

  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${getImage(item.image, item.category)}" alt="${item.name}"/>
      <div class="cart-item-info">
        <p class="cart-item-name">${item.name}</p>
        <p class="cart-item-price">CFA${(item.price * item.qty).toLocaleString('fr-FR')}</p>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
        </div>
      </div>
      <button class="remove-item" onclick="removeFromCart(${item.id})">🗑</button>
    </div>
  `).join('');

  const total = cart.reduce((s, x) => s + x.price * x.qty, 0);
  const totalEl = document.getElementById('cartTotal');
  if (totalEl) totalEl.textContent = `CFA${total.toLocaleString('fr-FR')}`;
}

function toggleCart() {
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('cartOverlay');
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

function commanderWhatsApp() {
  if (cart.length === 0) return;
  const total = cart.reduce((s, x) => s + x.price * x.qty, 0);
  let msg = "Bonjour CIS-TECH ! \n\nJe souhaite commander :\n\n";
  cart.forEach(item => {
    msg += `• ${item.name} x${item.qty} = CFA${(item.price * item.qty).toLocaleString('fr-FR')}\n`;
  });
  msg += `\n *TOTAL : CFA${total.toLocaleString('fr-FR')}*\n\n`;
  msg += " Merci de me confirmer la disponibilité et la livraison !";
  window.open(`https://wa.me/${STORE_CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
}

// ===== MENU MOBILE =====
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
  document.getElementById('menuOverlay').classList.toggle('open');
}

// ===== PRODUIT CARDS (réutilisable) =====
function renderProductCards(list, containerId) {
  const grid = document.getElementById(containerId);
  if (!grid) return;
  grid.innerHTML = list.map((p, i) => `
    <div class="product-card" style="animation-delay:${i * 0.06}s" onclick="openModal(${p.id})">
      <div class="product-img-wrap">
        <img src="${getImage(p.image, p.category)}" alt="${p.name}" loading="lazy"/>
        <button class="add-to-cart-quick" onclick="event.stopPropagation(); addToCart(${p.id})" title="Ajouter">🛒</button>
      </div>
      <div class="product-info">
        <p class="product-category">${getCategoryLabel(p.category)}</p>
        <p class="product-name">${p.name}</p>
        <p class="product-price">CFA${p.price.toLocaleString('fr-FR')}</p>
      </div>
    </div>
  `).join('');
}

function getCategoryLabel(cat) {
  const labels = { airpods: '🎧 AirPods & Audio', batterie: '🔋 Batterie & LED', accessoire: '📦 Accessoire', gadget: '⚡ Gadget' };
  return labels[cat] || cat;
}

// ===== MODAL =====
function openModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;

  // Description : tableau de lignes → HTML propre
  const descHTML = Array.isArray(p.description)
    ? p.description.map(line =>
      line.startsWith('•')
        ? `<span class="desc-bullet">${line}</span>`
        : `<span class="desc-line">${line}</span>`
    ).join('')
    : `<span class="desc-line">${p.description}</span>`;

  // Variantes de couleurs (si le produit en a)
  const variantsHTML = p.variants ? `
    <div class="variants-wrap">
      <p class="variants-label">Couleur : <strong id="selectedVariantLabel">${p.variants[0].label}</strong></p>
      <div class="variants-btns">
        ${p.variants.map((v, i) => `
          <button
            class="variant-btn ${i === 0 ? 'active' : ''}"
            style="background:${v.color}"
            title="${v.label}"
            onclick="selectVariant(${id}, ${i}, this)"
          ></button>
        `).join('')}
      </div>
    </div>
  ` : '';

  document.getElementById('modalContent').innerHTML = `
    <img id="modalImg" src="${getImage(p.image, p.category)}" alt="${p.name}"/>
    <h3>${p.name}</h3>
    <p class="modal-price">CFA${p.price.toLocaleString('fr-FR')}</p>
    ${variantsHTML}
    <div class="modal-desc">${descHTML}</div>
    <button class="modal-add-btn" onclick="addToCartFromModal(${p.id})">🛒 Ajouter au panier</button>
  `;

  document.getElementById('modalOverlay').classList.add('open');
  document.getElementById('productModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

// Sélectionner une variante de couleur
function selectVariant(productId, variantIndex, btn) {
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p || !p.variants) return;
  const v = p.variants[variantIndex];

  // Mettre à jour l'image
  document.getElementById('modalImg').src = v.image;

  // Mettre à jour le label de couleur
  const labelEl = document.getElementById('selectedVariantLabel');
  if (labelEl) labelEl.textContent = v.label;

  // Mettre à jour le bouton actif
  document.querySelectorAll('.variant-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  // Sauvegarder la variante choisie pour l'ajout au panier
  btn.closest('.modal').dataset.selectedVariant = variantIndex;
}

// Ajouter au panier depuis la modal (avec variante si applicable)
function addToCartFromModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;

  let itemToAdd = { ...p };

  // Si variante sélectionnée, l'inclure dans le nom et l'image
  const modal = document.getElementById('productModal');
  const variantIndex = modal.dataset.selectedVariant;
  if (p.variants && variantIndex !== undefined) {
    const v = p.variants[variantIndex];
    itemToAdd = { ...p, name: `${p.name} — ${v.label}`, image: v.image, id: p.id };
  }

  addToCartItem(itemToAdd);
  closeModal();
}

function addToCartItem(item) {
  const existing = cart.find(x => x.id === item.id && x.name === item.name);
  if (existing) existing.qty++;
  else cart.push({ ...item, qty: 1 });
  saveCart();
  updateCartUI();
  showToast(`✅ ${item.name} ajouté au panier`);
}

function closeModal() {
  document.getElementById('modalOverlay')?.classList.remove('open');
  document.getElementById('productModal')?.classList.remove('open');
  document.body.style.overflow = '';
}

// ===== TOAST =====
function showToast(msg) {
  document.querySelectorAll('.toast').forEach(t => t.remove());
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2500);
}