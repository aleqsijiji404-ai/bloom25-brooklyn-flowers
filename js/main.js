// =====================================================
//  BLOOM & CO — Main JavaScript
// =====================================================

document.addEventListener('DOMContentLoaded', () => {

  // ---- Page Loader ----
  const loader = document.querySelector('.page-loader');
  if (loader) {
    setTimeout(() => {
      loader.classList.add('hide');
      setTimeout(() => loader.remove(), 500);
    }, 1200);
  }

  // ---- Hero Animation ----
  const hero = document.querySelector('.hero');
  if (hero) {
    setTimeout(() => hero.classList.add('loaded'), 100);
  }

  // ---- Navbar Scroll ----
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const handleScroll = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // ---- Mobile Menu ----
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileClose = document.querySelector('.mobile-menu-close');
  const mobileOverlay = document.querySelector('.mobile-menu-overlay');

  if (hamburger && mobileMenu) {
    const toggleMenu = (open) => {
      mobileMenu.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    };
    hamburger.addEventListener('click', () => toggleMenu(true));
    if (mobileClose) mobileClose.addEventListener('click', () => toggleMenu(false));
    if (mobileOverlay) mobileOverlay.addEventListener('click', () => toggleMenu(false));
  }

  // ---- Active Nav Link ----
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ---- Scroll Reveal ----
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // ---- Cart Sidebar ----
  const cartOverlay = document.querySelector('.cart-overlay');
  const cartSidebar = document.querySelector('.cart-sidebar');
  const cartClose = document.querySelector('.cart-close');

  const openCart = () => {
    if (cartOverlay && cartSidebar) {
      cartOverlay.classList.add('open');
      cartSidebar.classList.add('open');
      document.body.style.overflow = 'hidden';
      renderCart();
    }
  };

  const closeCart = () => {
    if (cartOverlay && cartSidebar) {
      cartOverlay.classList.remove('open');
      cartSidebar.classList.remove('open');
      document.body.style.overflow = '';
    }
  };

  document.querySelectorAll('.cart-btn, [data-cart-open]').forEach(btn => {
    btn.addEventListener('click', openCart);
  });

  if (cartClose) cartClose.addEventListener('click', closeCart);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeCart(); });

  // ---- Render Cart ----
  function renderCart() {
    const cartItems = document.querySelector('.cart-items');
    if (!cartItems) return;
    const cart = CartStore.getAll();

    if (cart.length === 0) {
      cartItems.innerHTML = `
        <div class="cart-empty">
          <div class="cart-empty-icon">🌸</div>
          <p>Your cart is empty</p>
          <a href="shop.html" class="btn btn-secondary btn-sm" style="margin-top:16px;">Browse Flowers</a>
        </div>`;
    } else {
      cartItems.innerHTML = cart.map(item => `
        <div class="cart-item" data-key="${item.key}">
          <img src="${item.image}" alt="${item.name}" class="cart-item-img" onerror="this.src='images/roses.jpg'">
          <div class="cart-item-info">
            <div class="cart-item-name">${item.name}</div>
            ${item.size ? `<div style="font-size:0.78rem;color:var(--text-muted);margin-bottom:2px;">${item.size}</div>` : ''}
            <div class="cart-item-price">$${item.price}</div>
            <div class="cart-item-controls">
              <button class="qty-btn" data-action="dec" data-key="${item.key}">−</button>
              <span class="qty-num">${item.quantity}</span>
              <button class="qty-btn" data-action="inc" data-key="${item.key}">+</button>
              <button class="cart-item-remove" data-key="${item.key}">Remove</button>
            </div>
          </div>
        </div>`).join('');
    }

    // Update totals
    const subtotal = CartStore.getTotal();
    const delivery = subtotal > 0 ? 15 : 0;
    const total = subtotal + delivery;
    const subtotalEl = document.querySelector('.cart-subtotal');
    const deliveryEl = document.querySelector('.cart-delivery');
    const totalEl = document.querySelector('.cart-total');
    if (subtotalEl) subtotalEl.textContent = `$${subtotal}`;
    if (deliveryEl) deliveryEl.textContent = delivery > 0 ? `$${delivery}` : 'Free';
    if (totalEl) totalEl.textContent = `$${total}`;

    // Qty controls
    cartItems.querySelectorAll('.qty-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const key = btn.dataset.key;
        const item = CartStore.getAll().find(i => i.key === key);
        if (!item) return;
        const newQty = btn.dataset.action === 'inc' ? item.quantity + 1 : item.quantity - 1;
        CartStore.updateQty(key, newQty);
        renderCart();
      });
    });

    cartItems.querySelectorAll('.cart-item-remove').forEach(btn => {
      btn.addEventListener('click', () => {
        CartStore.remove(btn.dataset.key);
        renderCart();
        showToast('Item removed from cart');
      });
    });
  }

  // Checkout button
  const checkoutBtn = document.querySelector('.cart-checkout');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (CartStore.getCount() === 0) {
        showToast('Your cart is empty!', 'error');
        return;
      }
      showToast('Thank you! We\'ll contact you shortly to confirm your order. 🌸');
      setTimeout(() => { CartStore.clear(); renderCart(); }, 1500);
    });
  }

  // ---- Cart event listener ----
  document.addEventListener('cartUpdated', () => {
    CartStore.updateBadge();
    if (document.querySelector('.cart-sidebar.open')) renderCart();
  });

  // ---- Initial badge ----
  CartStore.updateBadge();

  // ---- Featured Products on Home Page ----
  const featuredGrid = document.querySelector('.featured-products-grid');
  if (featuredGrid) {
    renderProducts(featuredGrid, ProductsStore.getFeatured().slice(0, 4));
  }

  // ---- Toast Notification ----
  window.showToast = function(msg, type = 'success') {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `<span class="toast-icon"></span><span>${msg}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
      toast.classList.add('removing');
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  };

  // ---- Render Product Cards ----
  window.renderProducts = function(container, products) {
    if (!container) return;
    if (products.length === 0) {
      container.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:60px 0;color:var(--text-muted)">No flowers found for this selection. 🌸</div>';
      return;
    }
    container.innerHTML = products.map(p => `
      <div class="product-card reveal" data-id="${p.id}">
        <div class="product-img-wrap">
          ${p.badge ? `<div class="product-badge"><span class="tag tag-${p.badgeType || 'cream'}">${p.badge}</span></div>` : ''}
          <button class="product-wishlist ${WishlistStore.has(p.id) ? 'active' : ''}" data-id="${p.id}" aria-label="Add to wishlist">
            ${WishlistStore.has(p.id) ? '❤️' : '🤍'}
          </button>
          <img src="${p.image}" alt="${p.name}" class="product-img" loading="lazy"
               onerror="this.src='images/roses.jpg'">
          <div class="product-actions">
            <button class="btn btn-primary btn-sm add-to-cart-btn" data-id="${p.id}">
              🛒 Add to Cart
            </button>
          </div>
        </div>
        <div class="product-info">
          <div class="product-category">${p.category} · ${p.occasion}</div>
          <div class="product-name">${p.name}</div>
          <div class="product-footer">
            <div>
              <span class="product-price">$${p.price}</span>
              ${p.oldPrice ? `<span class="product-price-old">$${p.oldPrice}</span>` : ''}
            </div>
            <div class="product-stars">${'★'.repeat(p.stars)}${'☆'.repeat(5 - p.stars)}</div>
          </div>
        </div>
      </div>`).join('');

    // Wishlist
    container.querySelectorAll('.product-wishlist').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.id;
        const added = WishlistStore.toggle(id);
        btn.innerHTML = added ? '❤️' : '🤍';
        btn.classList.toggle('active', added);
        showToast(added ? 'Added to wishlist 🌸' : 'Removed from wishlist');
      });
    });

    // Add to cart
    container.querySelectorAll('.add-to-cart-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.id;
        CartStore.add(id);
        showToast('Added to cart! 🌸');
        btn.textContent = '✓ Added!';
        btn.style.background = 'var(--sage)';
        setTimeout(() => {
          btn.innerHTML = '🛒 Add to Cart';
          btn.style.background = '';
        }, 1500);
      });
    });

    // Click → product page
    container.querySelectorAll('.product-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('button')) return;
        window.location.href = `product.html?id=${card.dataset.id}`;
      });
    });

    // Re-run reveal observer
    container.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
  };

  // ---- Occasion Cards ----
  document.querySelectorAll('.bento-card[data-occasion]').forEach(card => {
    card.addEventListener('click', () => {
      const occ = card.dataset.occasion;
      window.location.href = `shop.html?occasion=${occ}`;
    });
  });

  // ---- Floating Petals ----
  function spawnPetal() {
    const petals = ['🌸', '🌺', '🌹', '🌷', '🪷'];
    const petal = document.createElement('div');
    petal.className = 'petal';
    petal.textContent = petals[Math.floor(Math.random() * petals.length)];
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.fontSize = (0.8 + Math.random() * 0.8) + 'rem';
    const duration = 4000 + Math.random() * 4000;
    petal.style.animationDuration = duration + 'ms';
    document.body.appendChild(petal);
    setTimeout(() => petal.remove(), duration);
  }
  setInterval(spawnPetal, 3000);

  // ---- Newsletter ----
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', e => {
      e.preventDefault();
      const email = newsletterForm.querySelector('input').value;
      if (email) {
        showToast('Thank you for subscribing! 🌸');
        newsletterForm.reset();
      }
    });
  }

  // ---- Contact Form ----
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      showToast('Message sent! We\'ll get back to you soon. 🌸');
      contactForm.reset();
    });
  }

  // ---- Parallax on hero ----
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      heroBg.style.transform = `scale(1) translateY(${y * 0.3}px)`;
    }, { passive: true });
  }

});
