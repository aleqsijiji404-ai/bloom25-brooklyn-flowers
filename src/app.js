/* -------------------------------------------------------------
   BLOOM 25 - BROOKLYN FLORAL ATELIER (PURE INTERACTIVE JS)
   ------------------------------------------------------------- */

(function () {
  let lang = 'ka';
  let theme = 'dark';
  let activeCategory = 'All';
  let cart = [];
  let isAdminOpen = false;
  let isCartOpen = false;

  const defaultProducts = [
    {
      id: "fl-001",
      nameEn: "Brooklyn Velvet Rose Symphony",
      nameKa: "ბრუკლინ ველვეტ ვარდების სიმფონია",
      price: 145,
      category: "Romance",
      image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=1000&q=80",
      tag: "Best Seller",
      rating: 4.9,
      descriptionEn: "An exquisite arrangement of 24 hand-selected blush garden roses.",
      descriptionKa: "24 სპეციალურად შერჩეული ვარდისფერი ბაღის ვარდი."
    },
    {
      id: "fl-002",
      nameEn: "25th Avenue Sunset Dahlias",
      nameKa: "25-ე ავენიუს მზისჩასვლის დალიები",
      price: 165,
      category: "Everyday Luxury",
      image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1000&q=80",
      tag: "2026 Trend",
      rating: 5.0,
      descriptionEn: "Vibrant coral dahlias and peach spray roses.",
      descriptionKa: "კაშკაშა მარჯნისფერი დალიები და ატმისფერი ვარდები."
    },
    {
      id: "fl-003",
      nameEn: "White Peony & Silk Eucalyptus",
      nameKa: "თეთრი პიონი და აბრეშუმის ევკალიპტი",
      price: 195,
      category: "Weddings & Events",
      image: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=1000&q=80",
      tag: "Luxury Signature",
      rating: 4.9,
      descriptionEn: "Pure white double peonies paired with eucalyptus.",
      descriptionKa: "უწმინდესი თეთრი პიონები და ვერცხლისფერი ევკალიპტი."
    },
    {
      id: "fl-004",
      nameEn: "Midnight Orchid Velvet Box",
      nameKa: "შუაღამის ორქიდეა ველვეტის ყუთში",
      price: 220,
      category: "Weddings & Events",
      image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=1000&q=80",
      tag: "Exclusive",
      rating: 4.8,
      descriptionEn: "Deep magenta Phalaenopsis orchids in a suede box.",
      descriptionKa: "მუქი მაგენტას ორქიდეები შავ ველვეტის ყუთში."
    },
    {
      id: "fl-005",
      nameEn: "Parisian Meadow Ranunculus",
      nameKa: "პარიზული მდელოს რანუნკულუსი",
      price: 130,
      category: "Everyday Luxury",
      image: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&w=1000&q=80",
      tag: "Seasonal",
      rating: 4.7,
      descriptionEn: "Layers of delicate pink ranunculus.",
      descriptionKa: "ნაზი ვარდისფერი რანუნკულუსის ფენები."
    },
    {
      id: "fl-006",
      nameEn: "Everlasting Botanical Pampas",
      nameKa: "მარადიული ბოტანიკური პამპასი",
      price: 115,
      category: "Dried Botanical",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80",
      tag: "Long Lasting",
      rating: 4.9,
      descriptionEn: "Naturally dried fluffy pampas grass.",
      descriptionKa: "ნატურალურად გამხმარი პამპასის ბალახი."
    }
  ];

  let products = [...defaultProducts];
  const saved = localStorage.getItem('bloom25_products');
  if (saved) {
    try { products = JSON.parse(saved); } catch (e) {}
  }

  function renderCategoryTabs() {
    const container = document.getElementById('cat-tabs-container');
    if (!container) return;

    const categories = ['All', 'Romance', 'Everyday Luxury', 'Weddings & Events', 'Dried Botanical'];
    container.innerHTML = categories.map(cat => `
      <button class="cat-btn" data-cat="${cat}" style="background: ${activeCategory === cat ? 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)' : 'rgba(255, 255, 255, 0.05)'}; color: ${activeCategory === cat ? '#000' : 'var(--text-primary)'}; border: ${activeCategory === cat ? 'none' : '1px solid var(--border-color)'}; padding: 10px 22px; border-radius: var(--radius-full); font-weight: 700; font-size: 0.85rem; cursor: pointer;">
        ${cat === 'All' ? (lang === 'ka' ? 'ყველა თაიგული' : 'All Collections') : cat}
      </button>
    `).join('');

    container.querySelectorAll('.cat-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        activeCategory = e.currentTarget.getAttribute('data-cat');
        renderCategoryTabs();
        renderProductsGrid();
      });
    });
  }

  function renderProductsGrid() {
    const container = document.getElementById('products-grid-container');
    if (!container) return;

    const filtered = products.filter(p => activeCategory === 'All' || p.category === activeCategory);

    container.innerHTML = filtered.map(p => {
      const name = lang === 'ka' ? p.nameKa : p.nameEn;
      const desc = lang === 'ka' ? p.descriptionKa : p.descriptionEn;

      return `
        <div class="product-card">
          <div class="product-card-img-container">
            <img src="${p.image}" alt="${name}" class="product-card-img" />
            ${p.tag ? `<span class="badge-tag">${p.tag}</span>` : ''}
          </div>
          <div style="padding: 20px; display: flex; flex-direction: column; flex: 1;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
              <span style="font-size: 0.75rem; color: var(--accent-gold); font-weight: 700;">${p.category}</span>
              <span style="font-size: 0.85rem; color: #FFD700;">★ ${p.rating}</span>
            </div>
            <h3 style="font-size: 1.2rem; font-weight: 700; margin-bottom: 8px;">${name}</h3>
            <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 16px;">${desc}</p>
            <div style="margin-top: auto; display: flex; align-items: center; justify-content: space-between; padding-top: 16px; border-top: 1px solid var(--border-color);">
              <span style="font-size: 1.4rem; font-weight: 800; color: var(--accent-gold);">$${p.price}</span>
              <button class="btn-primary add-to-cart-btn" data-id="${p.id}" style="padding: 10px 18px; font-size: 0.85rem;">🛒 ${lang === 'ka' ? 'კალათაში' : 'Add to Cart'}</button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    container.querySelectorAll('.add-to-cart-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        const prod = products.find(p => p.id === id);
        if (prod) {
          const existing = cart.find(item => item.id === id);
          if (existing) existing.quantity++;
          else cart.push({ ...prod, quantity: 1 });
          updateCartBadge();
          openCartDrawer();
        }
      });
    });
  }

  function updateCartBadge() {
    const badge = document.getElementById('cart-badge');
    if (badge) {
      const count = cart.reduce((sum, item) => sum + item.quantity, 0);
      badge.textContent = count;
      badge.style.display = count > 0 ? 'flex' : 'none';
    }
  }

  function openCartDrawer() {
    isCartOpen = true;
    const container = document.getElementById('cart-drawer-container');
    if (!container) return;

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    container.innerHTML = `
      <div class="drawer-overlay" id="close-cart-bg"></div>
      <div class="drawer-content">
        <div style="padding: 20px; border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center;">
          <h3 style="margin: 0;">🛒 ${lang === 'ka' ? 'კალათა' : 'Cart'}</h3>
          <button id="close-cart-x" style="background: none; border: none; color: #FFF; font-size: 1.4rem; cursor: pointer;">✕</button>
        </div>
        <div style="padding: 24px; flex: 1; overflow-y: auto;">
          ${cart.length === 0 ? `<p style="text-align: center; color: var(--text-secondary);">${lang === 'ka' ? 'კალათა ცარიელია' : 'Cart is empty'}</p>` : `
            <form id="cart-checkout-form">
              ${cart.map((item, idx) => `
                <div style="display: flex; justify-content: space-between; margin-bottom: 12px; padding: 10px; background: rgba(255,255,255,0.03); border: 1px solid var(--border-color); border-radius: 8px;">
                  <div>
                    <div style="font-weight: 700; font-size: 0.9rem;">${lang === 'ka' ? item.nameKa : item.nameEn}</div>
                    <div style="font-size: 0.8rem; color: var(--accent-gold);">$${item.price} x ${item.quantity}</div>
                  </div>
                  <button type="button" class="cart-remove-item" data-idx="${idx}" style="background: none; border: none; color: #FF5555; cursor: pointer;">🗑️</button>
                </div>
              `).join('')}
              <div style="margin-top: 20px; border-top: 1px solid var(--border-color); padding-top: 16px;">
                <input type="text" id="chk-name" placeholder="${lang === 'ka' ? 'მიმღების სახელი' : 'Recipient Name'}" required style="width: 100%; padding: 10px; background: rgba(0,0,0,0.3); border: 1px solid var(--border-color); color: #FFF; border-radius: 8px; margin-bottom: 10px;" />
                <input type="text" id="chk-addr" placeholder="Address" required value="25th Ave, Brooklyn, NY" style="width: 100%; padding: 10px; background: rgba(0,0,0,0.3); border: 1px solid var(--border-color); color: #FFF; border-radius: 8px; margin-bottom: 16px;" />
                <button type="submit" class="btn-primary" style="width: 100%; justify-content: center; padding: 14px;">💳 ${lang === 'ka' ? 'შეკვეთა' : 'Place Order'} ($${subtotal})</button>
              </div>
            </form>
          `}
        </div>
      </div>
    `;

    document.getElementById('close-cart-bg')?.addEventListener('click', closeCartDrawer);
    document.getElementById('close-cart-x')?.addEventListener('click', closeCartDrawer);

    container.querySelectorAll('.cart-remove-item').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = parseInt(e.currentTarget.getAttribute('data-idx'));
        cart.splice(idx, 1);
        updateCartBadge();
        openCartDrawer();
      });
    });

    document.getElementById('cart-checkout-form')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const order = {
        orderId: 'B25-' + Math.floor(100000 + Math.random() * 900000),
        name: document.getElementById('chk-name').value,
        addr: document.getElementById('chk-addr').value,
        total: subtotal
      };
      cart = [];
      updateCartBadge();
      closeCartDrawer();
      openReceiptModal(order);
    });
  }

  function closeCartDrawer() {
    isCartOpen = false;
    const container = document.getElementById('cart-drawer-container');
    if (container) container.innerHTML = '';
  }

  function openReceiptModal(order) {
    const container = document.getElementById('receipt-modal-container');
    if (!container) return;

    container.innerHTML = `
      <div class="modal-overlay" id="close-receipt-bg">
        <div class="glass-panel" onclick="event.stopPropagation()" style="max-width: 500px; width: 100%; padding: 32px; text-align: center;">
          <div style="font-size: 2.5rem; margin-bottom: 8px;">🎉</div>
          <h2>${lang === 'ka' ? 'შეკვეთა მიღებულია!' : 'Order Confirmed!'}</h2>
          <p style="color: var(--text-secondary); margin: 8px 0 20px;">#${order.orderId}</p>
          <div style="background: rgba(0,0,0,0.4); padding: 16px; border-radius: 8px; text-align: left; margin-bottom: 20px;">
            <div><strong>Recipient:</strong> ${order.name}</div>
            <div><strong>Address:</strong> ${order.addr}</div>
            <div style="font-weight: 800; color: var(--accent-gold); margin-top: 8px;">Total: $${order.total}</div>
          </div>
          <button id="close-receipt-btn" class="btn-primary" style="width: 100%; justify-content: center;">✓ ${lang === 'ka' ? 'დასრულება' : 'Done'}</button>
        </div>
      </div>
    `;

    document.getElementById('close-receipt-bg')?.addEventListener('click', () => container.innerHTML = '');
    document.getElementById('close-receipt-btn')?.addEventListener('click', () => container.innerHTML = '');
  }

  function openAdminModal() {
    const container = document.getElementById('admin-modal-container');
    if (!container) return;

    container.innerHTML = `
      <div class="modal-overlay" id="close-admin-bg">
        <div class="glass-panel" onclick="event.stopPropagation()" style="max-width: 800px; width: 100%; max-height: 90vh; overflow-y: auto; padding: 32px;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 24px;">
            <h2>🌸 ${lang === 'ka' ? 'პროდუქტების მართვა' : 'Flower CMS'}</h2>
            <button id="close-admin-x" style="background: none; border: none; color: #FFF; font-size: 1.4rem; cursor: pointer;">✕</button>
          </div>

          <form id="adm-form" style="display: grid; gap: 12px; margin-bottom: 32px;">
            <input type="text" id="adm-ka" placeholder="სახელი (ქართულად)" required style="padding: 10px; background: rgba(0,0,0,0.3); border: 1px solid var(--border-color); color: #FFF; border-radius: 8px;" />
            <input type="text" id="adm-en" placeholder="Name (English)" required style="padding: 10px; background: rgba(0,0,0,0.3); border: 1px solid var(--border-color); color: #FFF; border-radius: 8px;" />
            <input type="number" id="adm-price" placeholder="ფასი ($ USD)" required style="padding: 10px; background: rgba(0,0,0,0.3); border: 1px solid var(--border-color); color: #FFF; border-radius: 8px;" />
            <button type="submit" class="btn-primary" style="padding: 12px; justify-content: center;">➕ ${lang === 'ka' ? 'დამატება' : 'Add Flower'}</button>
          </form>

          <h3>📋 ${lang === 'ka' ? 'არსებული ყვავილები' : 'Current Flowers'} (${products.length})</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 14px; margin-top: 16px;">
            ${products.map(p => `
              <div style="background: rgba(0,0,0,0.4); padding: 12px; border-radius: 8px; border: 1px solid var(--border-color);">
                <div style="font-weight: 700;">${lang === 'ka' ? p.nameKa : p.nameEn}</div>
                <div style="color: var(--accent-gold);">$${p.price}</div>
                <button class="adm-del-btn" data-id="${p.id}" style="margin-top: 8px; padding: 4px 10px; background: rgba(255,85,85,0.2); border: 1px solid #FF5555; color: #FF5555; border-radius: 4px; cursor: pointer;">🗑️</button>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    document.getElementById('close-admin-bg')?.addEventListener('click', () => container.innerHTML = '');
    document.getElementById('close-admin-x')?.addEventListener('click', () => container.innerHTML = '');

    document.getElementById('adm-form')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const newP = {
        id: 'fl-' + Date.now(),
        nameKa: document.getElementById('adm-ka').value || 'ახალი ყვავილი',
        nameEn: document.getElementById('adm-en').value || 'New Flower',
        price: parseFloat(document.getElementById('adm-price').value) || 120,
        category: 'Romance',
        image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=1000&q=80',
        rating: 5.0,
        descriptionKa: 'ახალი ყვავილები',
        descriptionEn: 'Freshly cut flowers'
      };
      products.unshift(newP);
      localStorage.setItem('bloom25_products', JSON.stringify(products));
      renderProductsGrid();
      openAdminModal();
    });

    container.querySelectorAll('.adm-del-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        products = products.filter(p => p.id !== id);
        localStorage.setItem('bloom25_products', JSON.stringify(products));
        renderProductsGrid();
        openAdminModal();
      });
    });
  }

  // Setup Initial UI Bindings
  document.addEventListener('DOMContentLoaded', () => {
    renderCategoryTabs();
    renderProductsGrid();
    updateCartBadge();

    document.getElementById('btn-cart-toggle')?.addEventListener('click', openCartDrawer);
    document.getElementById('btn-admin-toggle')?.addEventListener('click', openAdminModal);

    document.getElementById('btn-lang-toggle')?.addEventListener('click', (e) => {
      lang = lang === 'ka' ? 'en' : 'ka';
      e.currentTarget.textContent = lang === 'ka' ? '🇬🇪 KA' : '🇺🇸 EN';
      renderCategoryTabs();
      renderProductsGrid();
    });

    document.getElementById('btn-theme-toggle')?.addEventListener('click', (e) => {
      theme = theme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', theme);
      e.currentTarget.textContent = theme === 'dark' ? '🌙' : '☀️';
    });
  });

  // Fallback Immediate Invocation
  renderCategoryTabs();
  renderProductsGrid();
  updateCartBadge();
})();
