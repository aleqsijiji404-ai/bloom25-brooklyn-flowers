// =====================================================
//  BLOOM & CO — Products Data Store
//  Uses localStorage to persist products
// =====================================================

const DEFAULT_PRODUCTS = [
  {
    id: 'p1',
    name: 'Blush Garden Roses',
    category: 'Roses',
    occasion: 'Romance',
    price: 89,
    oldPrice: null,
    image: 'images/roses.jpg',
    description: 'A lush arrangement of garden roses in soft blush and cream tones, wrapped in natural linen. Perfect for anniversaries, proposals, or simply to say "I love you."',
    badge: 'Bestseller',
    badgeType: 'rose',
    stars: 5,
    reviews: 48,
    sizes: [
      { label: 'Small', stems: '12 stems', price: 69 },
      { label: 'Medium', stems: '20 stems', price: 89 },
      { label: 'Large', stems: '30 stems', price: 129 }
    ],
    featured: true,
    available: true,
    createdAt: '2026-01-01'
  },
  {
    id: 'p2',
    name: 'Golden Sunflower Bunch',
    category: 'Sunflowers',
    occasion: 'Birthday',
    price: 65,
    oldPrice: 80,
    image: 'images/sunflowers.jpg',
    description: 'Bright and cheerful sunflowers bundled with eucalyptus greenery and tied with a natural jute ribbon. Sunshine in a bouquet.',
    badge: 'Sale',
    badgeType: 'gold',
    stars: 5,
    reviews: 32,
    sizes: [
      { label: 'Small', stems: '6 stems', price: 45 },
      { label: 'Medium', stems: '10 stems', price: 65 },
      { label: 'Large', stems: '16 stems', price: 95 }
    ],
    featured: true,
    available: true,
    createdAt: '2026-01-05'
  },
  {
    id: 'p3',
    name: 'Lavender Dreams',
    category: 'Lavender',
    occasion: 'Sympathy',
    price: 75,
    oldPrice: null,
    image: 'images/lavender.jpg',
    description: 'Calming lavender sprigs combined with white waxflower and delicate silver eucalyptus. A serene and fragrant bouquet that soothes the soul.',
    badge: 'New',
    badgeType: 'sage',
    stars: 5,
    reviews: 19,
    sizes: [
      { label: 'Small', stems: '10 stems', price: 55 },
      { label: 'Medium', stems: '18 stems', price: 75 },
      { label: 'Large', stems: '28 stems', price: 110 }
    ],
    featured: true,
    available: true,
    createdAt: '2026-02-10'
  },
  {
    id: 'p4',
    name: 'Peony & Rose Bouquet',
    category: 'Mixed',
    occasion: 'Wedding',
    price: 145,
    oldPrice: null,
    image: 'images/mixed.jpg',
    description: 'The most romantic combination — lush peonies paired with garden roses, ranunculus, and cascading greenery. A bridal favorite.',
    badge: 'Premium',
    badgeType: 'rose',
    stars: 5,
    reviews: 67,
    sizes: [
      { label: 'Medium', stems: '25 stems', price: 145 },
      { label: 'Large', stems: '40 stems', price: 210 },
      { label: 'XL', stems: '60 stems', price: 295 }
    ],
    featured: true,
    available: true,
    createdAt: '2026-01-15'
  },
  {
    id: 'p5',
    name: 'Spring Tulip Mix',
    category: 'Tulips',
    occasion: 'Birthday',
    price: 55,
    oldPrice: null,
    image: 'images/tulips.jpg',
    description: 'Fresh seasonal tulips in vibrant red and pink, wrapped in elegant linen paper with a silk ribbon. Spring joy, delivered.',
    badge: 'Seasonal',
    badgeType: 'sage',
    stars: 4,
    reviews: 24,
    sizes: [
      { label: 'Small', stems: '10 stems', price: 45 },
      { label: 'Medium', stems: '20 stems', price: 55 },
      { label: 'Large', stems: '30 stems', price: 85 }
    ],
    featured: false,
    available: true,
    createdAt: '2026-03-01'
  }
];

const ProductsStore = {
  STORAGE_KEY: 'bloom_products',

  getAll() {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      } else {
        this.saveAll(DEFAULT_PRODUCTS);
        return DEFAULT_PRODUCTS;
      }
    } catch {
      return DEFAULT_PRODUCTS;
    }
  },

  saveAll(products) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(products));
  },

  getById(id) {
    return this.getAll().find(p => p.id === id) || null;
  },

  add(product) {
    const products = this.getAll();
    const newProduct = {
      ...product,
      id: 'p' + Date.now(),
      createdAt: new Date().toISOString().split('T')[0],
      stars: 5,
      reviews: 0,
      badge: product.badge || null,
      badgeType: product.badgeType || 'cream',
      oldPrice: product.oldPrice || null,
      featured: product.featured || false,
      available: true
    };
    products.push(newProduct);
    this.saveAll(products);
    return newProduct;
  },

  update(id, updates) {
    const products = this.getAll();
    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
      products[index] = { ...products[index], ...updates };
      this.saveAll(products);
      return products[index];
    }
    return null;
  },

  delete(id) {
    const products = this.getAll().filter(p => p.id !== id);
    this.saveAll(products);
  },

  getFeatured() {
    return this.getAll().filter(p => p.featured && p.available);
  },

  getByOccasion(occasion) {
    if (!occasion || occasion === 'all') return this.getAll().filter(p => p.available);
    return this.getAll().filter(p => p.occasion === occasion && p.available);
  },

  getByCategory(category) {
    if (!category || category === 'all') return this.getAll().filter(p => p.available);
    return this.getAll().filter(p => p.category === category && p.available);
  },

  reset() {
    this.saveAll(DEFAULT_PRODUCTS);
    return DEFAULT_PRODUCTS;
  },

  export() {
    return JSON.stringify(this.getAll(), null, 2);
  },

  import(jsonStr) {
    try {
      const products = JSON.parse(jsonStr);
      this.saveAll(products);
      return true;
    } catch {
      return false;
    }
  }
};

// Cart Store
const CartStore = {
  STORAGE_KEY: 'bloom_cart',

  getAll() {
    try {
      return JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || [];
    } catch { return []; }
  },

  save(cart) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(cart));
    this.updateBadge();
    document.dispatchEvent(new CustomEvent('cartUpdated', { detail: { cart } }));
  },

  add(productId, quantity = 1, size = null) {
    const cart = this.getAll();
    const product = ProductsStore.getById(productId);
    if (!product) return;
    const key = size ? `${productId}_${size.label}` : productId;
    const existing = cart.find(item => item.key === key);
    if (existing) {
      existing.quantity += quantity;
    } else {
      const price = size ? size.price : product.price;
      cart.push({ key, productId, name: product.name, image: product.image, price, size: size ? size.label : null, quantity });
    }
    this.save(cart);
  },

  remove(key) {
    const cart = this.getAll().filter(item => item.key !== key);
    this.save(cart);
  },

  updateQty(key, qty) {
    const cart = this.getAll();
    const item = cart.find(i => i.key === key);
    if (item) {
      if (qty <= 0) return this.remove(key);
      item.quantity = qty;
      this.save(cart);
    }
  },

  getTotal() {
    return this.getAll().reduce((sum, item) => sum + item.price * item.quantity, 0);
  },

  getCount() {
    return this.getAll().reduce((sum, item) => sum + item.quantity, 0);
  },

  clear() {
    localStorage.removeItem(this.STORAGE_KEY);
    this.updateBadge();
    document.dispatchEvent(new CustomEvent('cartUpdated', { detail: { cart: [] } }));
  },

  updateBadge() {
    const badges = document.querySelectorAll('.cart-badge');
    const count = this.getCount();
    badges.forEach(b => {
      b.textContent = count;
      b.style.display = count > 0 ? 'flex' : 'none';
    });
  }
};

// Wishlist Store
const WishlistStore = {
  STORAGE_KEY: 'bloom_wishlist',
  getAll() { try { return JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || []; } catch { return []; } },
  save(list) { localStorage.setItem(this.STORAGE_KEY, JSON.stringify(list)); },
  toggle(id) {
    const list = this.getAll();
    const idx = list.indexOf(id);
    if (idx !== -1) list.splice(idx, 1);
    else list.push(id);
    this.save(list);
    return idx === -1;
  },
  has(id) { return this.getAll().includes(id); }
};
