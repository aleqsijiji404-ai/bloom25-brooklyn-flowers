/* -------------------------------------------------------------
   BLOOM 25 - BROOKLYN FLORAL ATELIER (PURE VANILLA JS ENGINE)
   ------------------------------------------------------------- */

(function () {
  // State
  let lang = 'ka';
  let theme = 'dark';
  let activeCategory = 'All';
  let colorFilter = 'All';
  let search = '';
  let expressOnly = false;
  let cart = [];
  let selectedProduct = null;
  let isCartOpen = false;
  let isAdminOpen = false;
  let completedOrder = null;

  // Initial Dataset
  const defaultProducts = [
    {
      id: "fl-001",
      nameEn: "Brooklyn Velvet Rose Symphony",
      nameKa: "ბრუკლინ ველვეტ ვარდების სიმფონია",
      price: 145,
      category: "Romance",
      color: "Blush Pink",
      image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=1000&q=80",
      tag: "Best Seller",
      isExpress: true,
      rating: 4.9,
      reviewsCount: 48,
      descriptionEn: "An exquisite arrangement of 24 hand-selected blush garden roses wrapped in luxury matte parchment.",
      descriptionKa: "24 სპეციალურად შერჩეული ვარდისფერი ბაღის ვარდი ელეგანტურ შეფუთვაში."
    },
    {
      id: "fl-002",
      nameEn: "25th Avenue Sunset Dahlias",
      nameKa: "25-ე ავენიუს მზისჩასვლის დალიები",
      price: 165,
      category: "Everyday Luxury",
      color: "Vibrant Sunset",
      image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1000&q=80",
      tag: "2026 Trend",
      isExpress: true,
      rating: 5.0,
      reviewsCount: 32,
      descriptionEn: "Vibrant coral dahlias and peach spray roses inspired by warm Brooklyn golden hour light.",
      descriptionKa: "კაშკაშა მარჯნისფერი დალიები და ატმისფერი ვარდები."
    },
    {
      id: "fl-003",
      nameEn: "White Peony & Silk Eucalyptus",
      nameKa: "თეთრი პიონი და აბრეშუმის ევკალიპტი",
      price: 195,
      category: "Weddings & Events",
      color: "Cream White",
      image: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=1000&q=80",
      tag: "Luxury Signature",
      isExpress: true,
      rating: 4.9,
      reviewsCount: 64,
      descriptionEn: "Pure white double peonies paired with silver dollar eucalyptus in a French glass vase.",
      descriptionKa: "უწმინდესი თეთრი პიონები და ვერცხლისფერი ევკალიპტი."
    },
    {
      id: "fl-004",
      nameEn: "Midnight Orchid Velvet Box",
      nameKa: "შუაღამის ორქიდეა ველვეტის ყუთში",
      price: 220,
      category: "Weddings & Events",
      color: "Deep Red",
      image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=1000&q=80",
      tag: "Exclusive",
      isExpress: false,
      rating: 4.8,
      reviewsCount: 19,
      descriptionEn: "Deep magenta Phalaenopsis orchids in a custom black suede bloom box.",
      descriptionKa: "მუქი მაგენტას ორქიდეები შავ ველვეტის ყუთში."
    },
    {
      id: "fl-005",
      nameEn: "Parisian Meadow Ranunculus",
      nameKa: "პარიზული მდელოს რანუნკულუსი",
      price: 130,
      category: "Everyday Luxury",
      color: "Blush Pink",
      image: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&w=1000&q=80",
      tag: "Seasonal",
      isExpress: true,
      rating: 4.7,
      reviewsCount: 27,
      descriptionEn: "Layers of delicate pink ranunculus and sweet peas.",
      descriptionKa: "ნაზი ვარდისფერი რანუნკულუსის ფენები."
    },
    {
      id: "fl-006",
      nameEn: "Everlasting Botanical Pampas",
      nameKa: "მარადიული ბოტანიკური პამპასი",
      price: 115,
      category: "Dried Botanical",
      color: "Cream White",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80",
      tag: "Long Lasting",
      isExpress: true,
      rating: 4.9,
      reviewsCount: 51,
      descriptionEn: "Naturally dried fluffy pampas grass and preserved hydrangeas.",
      descriptionKa: "ნატურალურად გამხმარი პამპასის ბალახი."
    }
  ];

  let products = [...defaultProducts];
  const saved = localStorage.getItem('bloom25_products');
  if (saved) {
    try { products = JSON.parse(saved); } catch (e) {}
  }

  // Translations Dictionary
  const translations = {
    ka: {
      topBanner: "ექსპრეს მიწოდება ბრუკლინში (25th Ave Studio) • 2 საათში",
      navCatalog: "კატალოგი", navCollections: "კოლექციები", navBuilder: "ატელიე", navLocation: "მისამართი",
      adminBtn: "მართვა", cart: "კალათა",
      heroLocationTag: "25-ე ავენიუ • ბრუკლინი, ნიუ-იორკი",
      heroTitlePart1: "ექსკლუზიური ყვავილების", heroTitlePart2: "ატელიე ბრუკლინში",
      heroSubtitle: "პრემიუმ ხარისხის ახალი ყვავილები, ავტორული თაიგულები და სწრაფი მიწოდება ნიუ-იორკში. შექმნილია სიყვარულით 25-ე ავენიუზე.",
      heroCtaPrimary: "თაიგულის არჩევა", heroCtaSecondary: "ინდივიდუალური აწყობა",
      feat1Title: "2 საათიანი მიწოდება", feat1Desc: "ბრუკლინში და NYC-ში",
      feat2Title: "100% ახალი ყვავილები", feat2Desc: "ყოველდღიური ნაკადი",
      feat3Title: "სასაჩუქრე ბარათი", feat3Desc: "უფასო მილოცვით",
      bentoSub: "2026 წლის ტრენდები", bentoTitle: "რჩეული კოლექციები",
      bento1Title: "Dopamine Blooms", bento1Desc: "კაშკაშა ყვავილების კომპოზიციები",
      bento2Title: "პარიზული ვარდები", bento2Desc: "მარადიული კლასიკა",
      bento3Title: "ბრუკლინ ველვეტის ყუთი", bento3Desc: "ექსკლუზიური შეფუთვა",
      bento4Title: "მარადიული პამპასი", bento4Desc: "მშრალი ბოტანიკური თაიგულები",
      catalogSub: "ჩვენი კოლექცია", catalogTitle: "აირჩიეთ იდეალური თაიგული",
      searchPlaceholder: "ძებნა ყვავილების მიხედვით...", colorFilter: "ფერის პალიტრა", expressOnly: "მხოლოდ ექსპრეს მიწოდება",
      priceFrom: "ფასი", addToCart: "კალათაში დამატება", chooseSize: "აირჩიეთ ზომა",
      sizeStandard: "სტანდარტული", sizeDeluxe: "დელუქსი (+50%)", sizeGrand: "გრანდი (ორმაგი)", total: "სულ",
      builderSub: "ინდივიდუალური ატელიე", builderTitle: "ააწყვეთ თქვენი უნიკალური თაიგული",
      builderDesc: "აირჩიეთ სასურველი ყვავილები, მწვანე აქცენტები და შეფუთვა.",
      step1Title: "ყვავილები", step2Title: "მწვანე", step3Title: "შეფუთვა", step4Title: "ბარათი",
      cardNotePlaceholder: "ჩაწერეთ მილოცვის ტექსტი...", addCustomToCart: "კალათაში დამატება", back: "უკან", nextStep: "შემდეგი",
      yourCart: "თქვენი კალათა", cartEmptyTitle: "კალათა ცარიელია", deliveryDetailsTitle: "მიწოდების მონაცემები",
      recipientName: "მიმღების სახელი", placeOrderBtn: "შეკვეთის გაფორმება", orderSuccessTitle: "შეკვეთა მიღებულია!", done: "დასრულება", hoursTitle: "სამუშაო საათები"
    },
    en: {
      topBanner: "Express Delivery in Brooklyn (25th Ave Studio) • Within 2 Hours",
      navCatalog: "Catalog", navCollections: "Collections", navBuilder: "Custom Builder", navLocation: "Location",
      adminBtn: "Admin", cart: "Cart",
      heroLocationTag: "25th Avenue • Brooklyn, New York",
      heroTitlePart1: "Exquisite Floral", heroTitlePart2: "Atelier in Brooklyn",
      heroSubtitle: "Handcrafted luxury arrangements, farm-fresh blooms, and rapid delivery across NYC.",
      heroCtaPrimary: "Shop Bouquets", heroCtaSecondary: "Custom Builder",
      feat1Title: "2-Hour Delivery", feat1Desc: "Across Brooklyn & NYC",
      feat2Title: "100% Farm Fresh", feat2Desc: "Daily fresh floral arrivals",
      feat3Title: "Complimentary Card", feat3Desc: "Handwritten note included",
      bentoSub: "2026 Floral Trends", bentoTitle: "Curated Collections",
      bento1Title: "Dopamine Blooms", bento1Desc: "Vibrant statement arrangements",
      bento2Title: "Parisian Roses", bento2Desc: "Timeless monochrome roses",
      bento3Title: "Brooklyn Box", bento3Desc: "Custom suede hatbox",
      bento4Title: "Everlasting Pampas", bento4Desc: "Eco-friendly dried botanicals",
      catalogSub: "Our Collection", catalogTitle: "Find Your Ideal Bouquet",
      searchPlaceholder: "Search flowers...", colorFilter: "Color Palette", expressOnly: "Express Delivery Only",
      priceFrom: "From", addToCart: "Add to Cart", chooseSize: "Select Size",
      sizeStandard: "Standard", sizeDeluxe: "Deluxe (+50%)", sizeGrand: "Grand (Double)", total: "Total",
      builderSub: "Custom Atelier", builderTitle: "Design Your Unique Arrangement",
      builderDesc: "Choose your favorite blooms, greenery accents, and signature wrap.",
      step1Title: "Blooms", step2Title: "Greenery", step3Title: "Wrap", step4Title: "Card",
      cardNotePlaceholder: "Write your custom note...", addCustomToCart: "Add Custom Creation to Cart", back: "Back", nextStep: "Next",
      yourCart: "Your Cart", cartEmptyTitle: "Your cart is empty", deliveryDetailsTitle: "Delivery Information",
      recipientName: "Recipient Name", placeOrderBtn: "Place Order Now", orderSuccessTitle: "Order Confirmed!", done: "Done", hoursTitle: "Studio Hours"
    }
  };

  function renderApp() {
    const t = translations[lang];
    document.documentElement.setAttribute('data-theme', theme);

    const root = document.getElementById('root');
    if (!root) return;

    // Filter Products
    const filteredProducts = products.filter(p => {
      const matchCat = activeCategory === 'All' || p.category === activeCategory;
      const matchColor = colorFilter === 'All' || p.color === colorFilter;
      const matchExpress = !expressOnly || p.isExpress;
      const name = lang === 'ka' ? p.nameKa : p.nameEn;
      const matchSearch = name.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchColor && matchExpress && matchSearch;
    });

    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    root.innerHTML = `
      <div style="min-height: 100vh; display: flex; flex-direction: column;">
        <!-- HEADER -->
        <header class="glass-header" style="position: sticky; top: 0; z-index: 100;">
          <div style="background: linear-gradient(90deg, #1B4D3E 0%, #0D261F 50%, #1B4D3E 100%); color: #8FFFE1; font-size: 0.8rem; padding: 6px 16px; text-align: center; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 8px;">
            <span>🌸</span>
            <span>${t.topBanner}</span>
            <span style="background: rgba(255, 255, 255, 0.15); padding: 2px 8px; border-radius: 12px; font-size: 0.75rem;">25th Ave, Brooklyn NY 11214</span>
          </div>

          <div style="max-width: 1320px; margin: 0 auto; padding: 14px 24px; display: flex; align-items: center; justify-content: space-between; gap: 16px;">
            <a href="#" style="text-decoration: none; display: flex; align-items: center; gap: 12px;">
              <div style="width: 42px; height: 42px; border-radius: 50%; background: linear-gradient(135deg, #D4AF37 0%, #8C6F12 100%); display: flex; align-items: center; justify-content: center; font-size: 1.4rem; box-shadow: 0 0 15px rgba(212, 175, 55, 0.3);">🌸</div>
              <div>
                <div style="font-family: var(--font-heading); font-size: 1.4rem; font-weight: 700; color: var(--text-primary); letter-spacing: 0.05em;">BLOOM 25</div>
                <div style="font-size: 0.7rem; color: var(--accent-gold); letter-spacing: 0.25em; text-transform: uppercase; font-weight: 600;">Brooklyn • New York</div>
              </div>
            </a>

            <div style="display: flex; align-items: center; gap: 12px;">
              <button id="btn-admin-toggle" class="btn-admin">⚙️ ${t.adminBtn}</button>
              <button id="btn-lang-toggle" style="background: rgba(255,255,255,0.06); border: 1px solid var(--border-color); color: var(--text-primary); border-radius: var(--radius-full); padding: 6px 12px; font-size: 0.85rem; font-weight: 600; cursor: pointer;">${lang === 'ka' ? '🇬🇪 KA' : '🇺🇸 EN'}</button>
              <button id="btn-theme-toggle" style="background: rgba(255,255,255,0.06); border: 1px solid var(--border-color); color: var(--text-primary); border-radius: 50%; width: 38px; height: 38px; cursor: pointer;">${theme === 'dark' ? '🌙' : '☀️'}</button>
              <button id="btn-cart-toggle" style="background: linear-gradient(135deg, #D4AF37 0%, #B8860B 100%); border: none; color: #000; padding: 8px 18px; border-radius: var(--radius-full); font-weight: 700; font-size: 0.9rem; cursor: pointer; display: flex; align-items: center; gap: 8px;">
                <span>🛒</span>
                <span>${t.cart}</span>
                ${cartCount > 0 ? `<span style="background: #000; color: #FFF; border-radius: 50%; width: 22px; height: 22px; display: flex; align-items: center; justify-content: center; font-size: 0.75rem;">${cartCount}</span>` : ''}
              </button>
            </div>
          </div>
        </header>

        <!-- MAIN -->
        <main style="flex: 1;">
          <!-- HERO -->
          <section style="position: relative; min-height: 75vh; display: flex; align-items: center; justify-content: center; overflow: hidden; padding: 80px 24px 60px; background: radial-gradient(circle at 50% 20%, rgba(27, 77, 62, 0.25) 0%, rgba(11, 13, 16, 0.95) 70%);">
            <div style="max-width: 1000px; margin: 0 auto; text-align: center; position: relative; z-index: 2;">
              <div style="display: inline-flex; align-items: center; gap: 8px; padding: 8px 20px; border-radius: var(--radius-full); background: rgba(212, 175, 55, 0.12); border: 1px solid var(--border-gold); color: var(--accent-gold); font-size: 0.85rem; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 24px;">📍 ${t.heroLocationTag}</div>
              <h1 style="font-size: clamp(2.5rem, 6vw, 4.5rem); line-height: 1.1; margin-bottom: 20px; font-weight: 700;">
                ${t.heroTitlePart1} <br />
                <span class="gold-gradient-text" style="font-style: italic; font-family: var(--font-editorial);">${t.heroTitlePart2}</span>
              </h1>
              <p style="font-size: clamp(1rem, 2vw, 1.25rem); color: var(--text-secondary); max-width: 720px; margin: 0 auto 36px;">${t.heroSubtitle}</p>
              <div style="display: flex; align-items: center; justify-content: center; gap: 16px; flex-wrap: wrap; margin-bottom: 40px;">
                <a href="#catalog" class="btn-primary">🌸 ${t.heroCtaPrimary}</a>
                <a href="#bento" class="btn-secondary">🎨 ${t.heroCtaSecondary}</a>
              </div>
            </div>
          </section>

          <!-- BENTO -->
          <section id="bento" style="padding: 60px 24px; max-width: 1320px; margin: 0 auto;">
            <div style="text-align: center; margin-bottom: 40px;">
              <div style="color: var(--accent-gold); font-size: 0.85rem; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 8px;">${t.bentoSub}</div>
              <h2 style="font-size: clamp(2rem, 4vw, 3rem);">${t.bentoTitle}</h2>
            </div>
            <div class="bento-grid">
              <div class="bento-item bento-large glass-panel bento-card-click" data-cat="Everyday Luxury" style="cursor: pointer; min-height: 340px; position: relative;">
                <img src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1200&q=80" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; filter: brightness(65%);" />
                <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(11,13,16,0.95) 0%, rgba(11,13,16,0.2) 60%); padding: 30px; display: flex; flex-direction: column; justify-content: flex-end;">
                  <span class="badge-tag" style="width: fit-content; margin-bottom: 10px;">🔥 2026 Trend</span>
                  <h3 style="font-size: 1.8rem; color: #FFF; margin-bottom: 6px;">${t.bento1Title}</h3>
                  <p style="color: var(--text-secondary); font-size: 0.9rem;">${t.bento1Desc}</p>
                </div>
              </div>
              <div class="bento-item bento-medium glass-panel bento-card-click" data-cat="Romance" style="cursor: pointer; min-height: 340px; position: relative;">
                <img src="https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; filter: brightness(65%);" />
                <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(11,13,16,0.95) 0%, rgba(11,13,16,0.1) 60%); padding: 24px; display: flex; flex-direction: column; justify-content: flex-end;">
                  <h3 style="font-size: 1.4rem; color: #FFF; margin-bottom: 4px;">${t.bento2Title}</h3>
                  <p style="color: var(--text-secondary); font-size: 0.85rem;">${t.bento2Desc}</p>
                </div>
              </div>
            </div>
          </section>

          <!-- CATALOG -->
          <section id="catalog" style="padding: 60px 24px 100px; max-width: 1320px; margin: 0 auto;">
            <div style="text-align: center; margin-bottom: 32px;">
              <div style="color: var(--accent-gold); font-size: 0.85rem; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 8px;">${t.catalogSub}</div>
              <h2 style="font-size: clamp(2rem, 4vw, 3rem);">${t.catalogTitle}</h2>
            </div>

            <!-- Categories -->
            <div style="display: flex; justify-content: center; gap: 10px; flex-wrap: wrap; margin-bottom: 32px;">
              ${['All', 'Romance', 'Everyday Luxury', 'Weddings & Events', 'Dried Botanical'].map(cat => `
                <button class="cat-btn" data-cat="${cat}" style="background: ${activeCategory === cat ? 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)' : 'rgba(255, 255, 255, 0.05)'}; color: ${activeCategory === cat ? '#000' : 'var(--text-primary)'}; border: ${activeCategory === cat ? 'none' : '1px solid var(--border-color)'}; padding: 10px 20px; border-radius: var(--radius-full); font-weight: 700; font-size: 0.85rem; cursor: pointer;">
                  ${cat === 'All' ? (lang === 'ka' ? 'ყველა თაიგული' : 'All Collections') : cat}
                </button>
              `).join('')}
            </div>

            <!-- Product Grid -->
            <div class="product-grid">
              ${filteredProducts.map(p => {
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
                        <button class="btn-primary add-cart-btn" data-id="${p.id}" style="padding: 10px 18px; font-size: 0.85rem;">🛒 ${t.addToCart}</button>
                      </div>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </section>
        </main>

        <!-- FOOTER -->
        <footer id="location" style="background: #07080A; border-top: 1px solid var(--border-color); padding: 60px 24px; text-align: center; color: var(--text-secondary);">
          <h3 style="color: #FFF; margin-bottom: 8px;">BLOOM 25 FLORAL ATELIER</h3>
          <p style="font-size: 0.85rem;">📍 25th Ave, Brooklyn, NY 11214 • Phone: +1 (718) 555-BLOOM</p>
        </footer>

        <!-- CART DRAWER -->
        ${isCartOpen ? `
          <div class="drawer-overlay" id="close-cart-overlay"></div>
          <div class="drawer-content">
            <div style="padding: 20px; border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center;">
              <h3 style="margin: 0;">🛒 ${t.yourCart} (${cartCount})</h3>
              <button id="close-cart-btn" style="background: none; border: none; color: #FFF; font-size: 1.4rem; cursor: pointer;">✕</button>
            </div>
            <div style="padding: 24px; flex: 1; overflow-y: auto;">
              ${cart.length === 0 ? `<p style="text-align: center; color: var(--text-secondary);">${t.cartEmptyTitle}</p>` : `
                <form id="checkout-form">
                  ${cart.map((item, idx) => `
                    <div style="display: flex; justify-content: space-between; margin-bottom: 12px; padding: 10px; background: rgba(255,255,255,0.03); border: 1px solid var(--border-color); border-radius: 8px;">
                      <span>${lang === 'ka' ? item.nameKa : item.nameEn} (x${item.quantity})</span>
                      <span style="font-weight: 700; color: var(--accent-gold);">$${item.price * item.quantity}</span>
                    </div>
                  `).join('')}
                  <div style="margin-top: 20px;">
                    <input type="text" id="rec-name" placeholder="${t.recipientName}" required style="width: 100%; padding: 10px; background: rgba(0,0,0,0.3); border: 1px solid var(--border-color); color: #FFF; border-radius: 8px; margin-bottom: 10px;" />
                    <input type="text" id="rec-addr" placeholder="Address (25th Ave Brooklyn)" required value="25th Ave, Brooklyn, NY" style="width: 100%; padding: 10px; background: rgba(0,0,0,0.3); border: 1px solid var(--border-color); color: #FFF; border-radius: 8px; margin-bottom: 16px;" />
                    <button type="submit" class="btn-primary" style="width: 100%; justify-content: center; padding: 14px;">💳 ${t.placeOrderBtn}</button>
                  </div>
                </form>
              `}
            </div>
          </div>
        ` : ''}

        <!-- ADMIN MODAL -->
        ${isAdminOpen ? `
          <div class="modal-overlay" id="close-admin-overlay">
            <div class="glass-panel" onclick="event.stopPropagation()" style="max-width: 800px; width: 100%; max-height: 90vh; overflow-y: auto; padding: 32px;">
              <div style="display: flex; justify-content: space-between; margin-bottom: 24px;">
                <h2>🌸 ${lang === 'ka' ? 'პროდუქტების მართვა' : 'Flower CMS'}</h2>
                <button id="close-admin-btn" style="background: none; border: none; color: #FFF; font-size: 1.4rem; cursor: pointer;">✕</button>
              </div>

              <form id="admin-add-form" style="display: grid; gap: 12px; margin-bottom: 32px;">
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
                    <button class="del-prod-btn" data-id="${p.id}" style="margin-top: 8px; padding: 4px 10px; background: rgba(255,85,85,0.2); border: 1px solid #FF5555; color: #FF5555; border-radius: 4px; cursor: pointer;">🗑️</button>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        ` : ''}

        <!-- ORDER RECEIPT MODAL -->
        ${completedOrder ? `
          <div class="modal-overlay" id="close-receipt-overlay">
            <div class="glass-panel" onclick="event.stopPropagation()" style="max-width: 500px; width: 100%; padding: 32px; text-align: center;">
              <div style="font-size: 2.5rem; margin-bottom: 8px;">🎉</div>
              <h2>${t.orderSuccessTitle}</h2>
              <p style="color: var(--text-secondary); margin: 8px 0 20px;">#${completedOrder.orderId}</p>
              <div style="background: rgba(0,0,0,0.4); padding: 16px; border-radius: 8px; text-align: left; margin-bottom: 20px;">
                <div>Recipient: ${completedOrder.recipientName}</div>
                <div>Address: ${completedOrder.address}</div>
                <div style="font-weight: 800; color: var(--accent-gold); margin-top: 8px;">Total: $${completedOrder.total}</div>
              </div>
              <button id="close-receipt-btn" class="btn-primary" style="width: 100%; justify-content: center;">✓ ${t.done}</button>
            </div>
          </div>
        ` : ''}
      </div>
    `;

    // Attach Event Listeners
    document.getElementById('btn-lang-toggle')?.addEventListener('click', () => { lang = lang === 'ka' ? 'en' : 'ka'; renderApp(); });
    document.getElementById('btn-theme-toggle')?.addEventListener('click', () => { theme = theme === 'dark' ? 'light' : 'dark'; renderApp(); });
    document.getElementById('btn-cart-toggle')?.addEventListener('click', () => { isCartOpen = true; renderApp(); });
    document.getElementById('btn-admin-toggle')?.addEventListener('click', () => { isAdminOpen = true; renderApp(); });

    document.getElementById('close-cart-btn')?.addEventListener('click', () => { isCartOpen = false; renderApp(); });
    document.getElementById('close-cart-overlay')?.addEventListener('click', () => { isCartOpen = false; renderApp(); });
    document.getElementById('close-admin-btn')?.addEventListener('click', () => { isAdminOpen = false; renderApp(); });
    document.getElementById('close-admin-overlay')?.addEventListener('click', () => { isAdminOpen = false; renderApp(); });
    document.getElementById('close-receipt-btn')?.addEventListener('click', () => { completedOrder = null; renderApp(); });
    document.getElementById('close-receipt-overlay')?.addEventListener('click', () => { completedOrder = null; renderApp(); });

    // Category Buttons
    document.querySelectorAll('.cat-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        activeCategory = e.currentTarget.getAttribute('data-cat');
        renderApp();
      });
    });

    // Bento Cards
    document.querySelectorAll('.bento-card-click').forEach(card => {
      card.addEventListener('click', (e) => {
        activeCategory = e.currentTarget.getAttribute('data-cat');
        renderApp();
        document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
      });
    });

    // Add to Cart Buttons
    document.querySelectorAll('.add-cart-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        const prod = products.find(p => p.id === id);
        if (prod) {
          const existing = cart.find(i => i.id === id);
          if (existing) existing.quantity++;
          else cart.push({ ...prod, quantity: 1 });
          isCartOpen = true;
          renderApp();
        }
      });
    });

    // Admin Add Form
    document.getElementById('admin-add-form')?.addEventListener('submit', (e) => {
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
      renderApp();
    });

    // Admin Delete Buttons
    document.querySelectorAll('.del-prod-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        products = products.filter(p => p.id !== id);
        localStorage.setItem('bloom25_products', JSON.stringify(products));
        renderApp();
      });
    });

    // Checkout Form
    document.getElementById('checkout-form')?.addEventListener('submit', (e) => {
      e.preventDefault();
      completedOrder = {
        orderId: 'B25-' + Math.floor(100000 + Math.random() * 900000),
        recipientName: document.getElementById('rec-name').value || 'Client',
        address: document.getElementById('rec-addr').value || '25th Ave Brooklyn',
        total: cart.reduce((s, i) => s + (i.price * i.quantity), 0)
      };
      cart = [];
      isCartOpen = false;
      renderApp();
    });
  }

  // Initial Render
  document.addEventListener('DOMContentLoaded', renderApp);
  renderApp();
})();
