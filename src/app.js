// -------------------------------------------------------------
// BLOOM 25 - BROOKLYN FLORAL ATELIER (NATIVE REACT APP - NO BABEL NEEDED)
// -------------------------------------------------------------

const e = React.createElement;

// TRANSLATIONS DICTIONARY
const translations = {
  ka: {
    topBanner: "ექსპრეს მიწოდება ბრუკლინში (25th Ave Studio) • 2 საათში",
    navCatalog: "კატალოგი", navCollections: "კოლექციები", navBuilder: "ატელიე", navLocation: "მისამართი",
    adminBtn: "მართვა", cart: "კალათა",
    heroLocationTag: "25-ე ავენიუ • ბრუკლინი, ნიუ-იორკი",
    heroTitlePart1: "ექსკლუზიური ყვავილების", heroTitlePart2: "ატელიე ბრუკლინში",
    heroSubtitle: "პრემიუმ ხარისხის ახალი ყვავილები, ავტორული თაიგულები და სწრაფი მიწოდება ნიუ-იორკში.",
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

// INITIAL PRODUCTS DATA
const initialProductsData = [
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

// HEADER
function Header({ lang, setLang, theme, setTheme, cartCount, onOpenCart, onOpenAdmin, t }) {
  return e('header', { className: 'glass-header', style: { position: 'sticky', top: 0, zIndex: 100 } },
    e('div', { style: { background: 'linear-gradient(90deg, #1B4D3E 0%, #0D261F 50%, #1B4D3E 100%)', color: '#8FFFE1', fontSize: '0.8rem', padding: '6px 16px', textAlign: 'center', fontWeight: '600', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' } },
      e('span', null, '🌸'),
      e('span', null, t.topBanner),
      e('span', { style: { background: 'rgba(255, 255, 255, 0.15)', padding: '2px 8px', borderRadius: '12px', fontSize: '0.75rem' } }, '25th Ave, Brooklyn NY 11214')
    ),
    e('div', { style: { maxWidth: '1320px', margin: '0 auto', padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' } },
      e('a', { href: '#', style: { textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' } },
        e('div', { style: { width: '42px', height: '42px', borderRadius: '50%', background: 'linear-gradient(135deg, #D4AF37 0%, #8C6F12 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', boxShadow: '0 0 15px rgba(212, 175, 55, 0.3)' } }, '🌸'),
        e('div', null,
          e('div', { style: { fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: '700', color: 'var(--text-primary)', letterSpacing: '0.05em' } }, 'BLOOM 25'),
          e('div', { style: { fontSize: '0.7rem', color: 'var(--accent-gold)', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: '600' } }, 'Brooklyn • New York')
        )
      ),
      e('div', { style: { display: 'flex', alignItems: 'center', gap: '12px' } },
        e('button', { onClick: onOpenAdmin, className: 'btn-admin', title: 'Manage Flowers' }, e('span', null, '⚙️ '), e('span', null, t.adminBtn)),
        e('button', { onClick: () => setLang(lang === 'ka' ? 'en' : 'ka'), style: { background: 'rgba(255,255,255,0.06)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', borderRadius: 'var(--radius-full)', padding: '6px 12px', fontSize: '0.85rem', fontWeight: '600', cursor: 'pointer' } }, lang === 'ka' ? '🇬🇪 KA' : '🇺🇸 EN'),
        e('button', { onClick: () => setTheme(theme === 'dark' ? 'light' : 'dark'), style: { background: 'rgba(255,255,255,0.06)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', borderRadius: '50%', width: '38px', height: '38px', cursor: 'pointer' } }, theme === 'dark' ? '🌙' : '☀️'),
        e('button', { onClick: onOpenCart, style: { background: 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)', border: 'none', color: '#000', padding: '8px 18px', borderRadius: 'var(--radius-full)', fontWeight: '700', fontSize: '0.9rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' } },
          e('span', null, '🛒 '),
          e('span', null, t.cart),
          cartCount > 0 ? e('span', { style: { background: '#000', color: '#FFF', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem' } }, cartCount) : null
        )
      )
    )
  );
}

// HERO
function Hero({ t, onScrollToCatalog, onScrollToBuilder }) {
  return e('section', { style: { position: 'relative', minHeight: '75vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '80px 24px 60px', background: 'radial-gradient(circle at 50% 20%, rgba(27, 77, 62, 0.25) 0%, rgba(11, 13, 16, 0.95) 70%)' } },
    e('div', { style: { maxWidth: '1000px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 } },
      e('div', { style: { display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 20px', borderRadius: 'var(--radius-full)', background: 'rgba(212, 175, 55, 0.12)', border: '1px solid var(--border-gold)', color: 'var(--accent-gold)', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '24px' } }, '📍 ' + t.heroLocationTag),
      e('h1', { style: { fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1.1, marginBottom: '20px', fontWeight: 700 } }, t.heroTitlePart1 + ' ', e('span', { className: 'gold-gradient-text', style: { fontStyle: 'italic', fontFamily: 'var(--font-editorial)' } }, t.heroTitlePart2)),
      e('p', { style: { fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'var(--text-secondary)', maxWidth: '720px', margin: '0 auto 36px' } }, t.heroSubtitle),
      e('div', { style: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '40px' } },
        e('button', { onClick: onScrollToCatalog, className: 'btn-primary' }, '🌸 ' + t.heroCtaPrimary),
        e('button', { onClick: onScrollToBuilder, className: 'btn-secondary' }, '🎨 ' + t.heroCtaSecondary)
      )
    )
  );
}

// BENTO GRID
function BentoGrid({ t, onSelectCategory }) {
  return e('section', { id: 'bento', style: { padding: '60px 24px', maxWidth: '1320px', margin: '0 auto' } },
    e('div', { style: { textAlign: 'center', marginBottom: '40px' } },
      e('div', { style: { color: 'var(--accent-gold)', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '8px' } }, t.bentoSub),
      e('h2', { style: { fontSize: 'clamp(2rem, 4vw, 3rem)' } }, t.bentoTitle)
    ),
    e('div', { className: 'bento-grid' },
      e('div', { className: 'bento-item bento-large glass-panel', onClick: () => onSelectCategory('Everyday Luxury'), style: { cursor: 'pointer', minHeight: '340px' } },
        e('img', { src: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1200&q=80', style: { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(65%)' } }),
        e('div', { style: { position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(11,13,16,0.95) 0%, rgba(11,13,16,0.2) 60%)', padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' } },
          e('span', { className: 'badge-tag', style: { width: 'fit-content', marginBottom: '10px' } }, '🔥 2026 Trend'),
          e('h3', { style: { fontSize: '1.8rem', color: '#FFF', marginBottom: '6px' } }, t.bento1Title),
          e('p', { style: { color: 'var(--text-secondary)', fontSize: '0.9rem' } }, t.bento1Desc)
        )
      ),
      e('div', { className: 'bento-item bento-medium glass-panel', onClick: () => onSelectCategory('Romance'), style: { cursor: 'pointer', minHeight: '340px' } },
        e('img', { src: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80', style: { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(65%)' } }),
        e('div', { style: { position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(11,13,16,0.95) 0%, rgba(11,13,16,0.1) 60%)', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' } },
          e('h3', { style: { fontSize: '1.4rem', color: '#FFF', marginBottom: '4px' } }, t.bento2Title),
          e('p', { style: { color: 'var(--text-secondary)', fontSize: '0.85rem' } }, t.bento2Desc)
        )
      )
    )
  );
}

// CATALOG
function Catalog({ products, lang, t, onAddToCart, onSelectProduct, activeCategory, setActiveCategory }) {
  const [search, setSearch] = React.useState('');
  const categories = ['All', 'Romance', 'Everyday Luxury', 'Weddings & Events', 'Dried Botanical'];

  const filtered = products.filter(p => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory;
    const name = lang === 'ka' ? p.nameKa : p.nameEn;
    return matchCat && name.toLowerCase().includes(search.toLowerCase());
  });

  return e('section', { id: 'catalog', style: { padding: '60px 24px 100px', maxWidth: '1320px', margin: '0 auto' } },
    e('div', { style: { textAlign: 'center', marginBottom: '32px' } },
      e('div', { style: { color: 'var(--accent-gold)', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '8px' } }, t.catalogSub),
      e('h2', { style: { fontSize: 'clamp(2rem, 4vw, 3rem)' } }, t.catalogTitle)
    ),
    e('div', { style: { display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '32px' } },
      categories.map(cat => e('button', {
        key: cat,
        onClick: () => setActiveCategory(cat),
        style: {
          background: activeCategory === cat ? 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)' : 'rgba(255, 255, 255, 0.05)',
          color: activeCategory === cat ? '#000' : 'var(--text-primary)',
          border: activeCategory === cat ? 'none' : '1px solid var(--border-color)',
          padding: '10px 20px', borderRadius: 'var(--radius-full)', fontWeight: '700', fontSize: '0.85rem', cursor: 'pointer'
        }
      }, cat === 'All' ? (lang === 'ka' ? 'ყველა თაიგული' : 'All Collections') : cat))
    ),
    e('div', { className: 'product-grid' },
      filtered.map(p => {
        const name = lang === 'ka' ? p.nameKa : p.nameEn;
        const desc = lang === 'ka' ? p.descriptionKa : p.descriptionEn;

        return e('div', { key: p.id, className: 'product-card' },
          e('div', { className: 'product-card-img-container', onClick: () => onSelectProduct(p), style: { cursor: 'pointer' } },
            e('img', { src: p.image, alt: name, className: 'product-card-img' }),
            p.tag ? e('span', { className: 'badge-tag' }, p.tag) : null
          ),
          e('div', { style: { padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 } },
            e('div', { style: { display: 'flex', justifyContent: 'space-between', marginBottom: '8px' } },
              e('span', { style: { fontSize: '0.75rem', color: 'var(--accent-gold)', fontWeight: '700' } }, p.category),
              e('span', { style: { fontSize: '0.85rem', color: '#FFD700' } }, '★ ' + p.rating)
            ),
            e('h3', { style: { fontSize: '1.2rem', fontWeight: '700', marginBottom: '8px' } }, name),
            e('p', { style: { fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '16px' } }, desc),
            e('div', { style: { marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', borderTop: '1px solid var(--border-color)' } },
              e('span', { style: { fontSize: '1.4rem', fontWeight: '800', color: 'var(--accent-gold)' } }, '$' + p.price),
              e('button', { onClick: () => onAddToCart(p), className: 'btn-primary', style: { padding: '10px 18px', fontSize: '0.85rem' } }, '🛒 ' + t.addToCart)
            )
          )
        );
      })
    )
  );
}

// CART DRAWER
function CartDrawer({ isOpen, onClose, cartItems, onRemoveItem, lang, t, onCompleteOrder }) {
  if (!isOpen) return null;
  const [address, setAddress] = React.useState('25th Ave, Brooklyn, NY');
  const [recipientName, setRecipientName] = React.useState('');

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleCheckout = (ev) => {
    ev.preventDefault();
    onCompleteOrder({
      orderId: 'B25-' + Math.floor(100000 + Math.random() * 900000),
      items: cartItems,
      total: subtotal,
      recipientName: recipientName || 'Client',
      address,
      createdAt: new Date().toLocaleString()
    });
  };

  return e('div', null,
    e('div', { className: 'drawer-overlay', onClick: onClose }),
    e('div', { className: 'drawer-content' },
      e('div', { style: { padding: '20px', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' } },
        e('h3', { style: { margin: 0 } }, '🛒 ' + t.yourCart + ' (' + cartItems.length + ')'),
        e('button', { onClick: onClose, style: { background: 'none', border: 'none', color: '#FFF', fontSize: '1.4rem', cursor: 'pointer' } }, '✕')
      ),
      e('div', { style: { padding: '24px', flex: 1, overflowY: 'auto' } },
        cartItems.length === 0 ? e('p', { style: { textAlign: 'center', color: 'var(--text-secondary)' } }, t.cartEmptyTitle) :
        e('form', { onSubmit: handleCheckout },
          cartItems.map((item, idx) => e('div', { key: idx, style: { display: 'flex', justifyContent: 'space-between', marginBottom: '12px', padding: '10px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px' } },
            e('span', null, lang === 'ka' ? item.nameKa : item.nameEn),
            e('span', { style: { fontWeight: '700', color: 'var(--accent-gold)' } }, '$' + item.price)
          )),
          e('div', { style: { marginTop: '20px' } },
            e('input', { type: 'text', placeholder: t.recipientName, required: true, value: recipientName, onChange: (ev) => setRecipientName(ev.target.value), style: { width: '100%', padding: '10px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-color)', color: '#FFF', borderRadius: '8px', marginBottom: '10px' } }),
            e('input', { type: 'text', placeholder: 'Address', required: true, value: address, onChange: (ev) => setAddress(ev.target.value), style: { width: '100%', padding: '10px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-color)', color: '#FFF', borderRadius: '8px', marginBottom: '16px' } }),
            e('button', { type: 'submit', className: 'btn-primary', style: { width: '100%', justifyContent: 'center', padding: '14px' } }, '💳 ' + t.placeOrderBtn + ' ($' + subtotal + ')')
          )
        )
      )
    )
  );
}

// ADMIN MODAL
function AdminModal({ isOpen, onClose, products, onAddProduct, onDeleteProduct, lang, t }) {
  if (!isOpen) return null;
  const [nameKa, setNameKa] = React.useState('');
  const [nameEn, setNameEn] = React.useState('');
  const [price, setPrice] = React.useState('');

  const handleSubmit = (ev) => {
    ev.preventDefault();
    onAddProduct({
      id: 'fl-' + Date.now(),
      nameKa: nameKa || 'ახალი ყვავილი',
      nameEn: nameEn || 'New Flower',
      price: parseFloat(price) || 120,
      category: 'Romance',
      image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=1000&q=80',
      rating: 5.0,
      descriptionKa: 'ახალი ყვავილები',
      descriptionEn: 'Freshly cut flowers'
    });
    setNameKa(''); setNameEn(''); setPrice('');
  };

  return e('div', { className: 'modal-overlay', onClick: onClose },
    e('div', { className: 'glass-panel', onClick: (ev) => ev.stopPropagation(), style: { maxWidth: '800px', width: '100%', maxHeight: '90vh', overflowY: 'auto', padding: '32px' } },
      e('div', { style: { display: 'flex', justifyContent: 'space-between', marginBottom: '24px' } },
        e('h2', null, '🌸 ' + (lang === 'ka' ? 'პროდუქტების მართვა' : 'Flower CMS')),
        e('button', { onClick: onClose, style: { background: 'none', border: 'none', color: '#FFF', fontSize: '1.4rem', cursor: 'pointer' } }, '✕')
      ),
      e('form', { onSubmit: handleSubmit, style: { display: 'grid', gap: '12px', marginBottom: '32px' } },
        e('input', { type: 'text', placeholder: 'სახელი (ქართულად)', required: true, value: nameKa, onChange: (ev) => setNameKa(ev.target.value), style: { padding: '10px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-color)', color: '#FFF', borderRadius: '8px' } }),
        e('input', { type: 'text', placeholder: 'Name (English)', required: true, value: nameEn, onChange: (ev) => setNameEn(ev.target.value), style: { padding: '10px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-color)', color: '#FFF', borderRadius: '8px' } }),
        e('input', { type: 'number', placeholder: 'ფასი ($ USD)', required: true, value: price, onChange: (ev) => setPrice(ev.target.value), style: { padding: '10px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-color)', color: '#FFF', borderRadius: '8px' } }),
        e('button', { type: 'submit', className: 'btn-primary', style: { padding: '12px', justifyContent: 'center' } }, '➕ ' + (lang === 'ka' ? 'დამატება' : 'Add Flower'))
      ),
      e('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '12px' } },
        products.map(p => e('div', { key: p.id, style: { background: 'rgba(0,0,0,0.4)', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-color)' } },
          e('div', { style: { fontWeight: '700' } }, lang === 'ka' ? p.nameKa : p.nameEn),
          e('div', { style: { color: 'var(--accent-gold)' } }, '$' + p.price),
          e('button', { onClick: () => onDeleteProduct(p.id), style: { marginTop: '8px', padding: '4px 10px', background: 'rgba(255,85,85,0.2)', border: '1px solid #FF5555', color: '#FF5555', borderRadius: '4px', cursor: 'pointer' } }, '🗑️')
        ))
      )
    )
  );
}

// RECEIPT MODAL
function OrderReceiptModal({ order, onClose, lang, t }) {
  if (!order) return null;
  return e('div', { className: 'modal-overlay', onClick: onClose },
    e('div', { className: 'glass-panel', onClick: (ev) => ev.stopPropagation(), style: { maxWidth: '500px', width: '100%', padding: '32px', textAlign: 'center' } },
      e('div', { style: { fontSize: '2rem', marginBottom: '8px' } }, '🎉'),
      e('h2', null, t.orderSuccessTitle),
      e('p', { style: { color: 'var(--text-secondary)', margin: '8px 0 20px' } }, '#' + order.orderId),
      e('div', { style: { background: 'rgba(0,0,0,0.4)', padding: '16px', borderRadius: '8px', textAlign: 'left', marginBottom: '20px' } },
        e('div', null, 'Recipient: ' + order.recipientName),
        e('div', null, 'Address: ' + order.address),
        e('div', { style: { fontWeight: '800', color: 'var(--accent-gold)', marginTop: '8px' } }, 'Total: $' + order.total)
      ),
      e('button', { onClick: onClose, className: 'btn-primary', style: { width: '100%', justifyContent: 'center' } }, '✓ ' + t.done)
    )
  );
}

// FOOTER
function Footer({ lang, t }) {
  return e('footer', { id: 'location', style: { background: '#07080A', borderTop: '1px solid var(--border-color)', padding: '60px 24px', textAlign: 'center', color: 'var(--text-secondary)' } },
    e('h3', { style: { color: '#FFF', marginBottom: '8px' } }, 'BLOOM 25 FLORAL ATELIER'),
    e('p', null, '📍 25th Ave, Brooklyn, NY 11214 • Phone: +1 (718) 555-BLOOM')
  );
}

// MAIN APP
function App() {
  const [lang, setLang] = React.useState('ka');
  const [theme, setTheme] = React.useState('dark');
  const [products, setProducts] = React.useState(initialProductsData);
  const [cartItems, setCartItems] = React.useState([]);
  const [activeCategory, setActiveCategory] = React.useState('All');
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [isAdminOpen, setIsAdminOpen] = React.useState(false);
  const [completedOrder, setCompletedOrder] = React.useState(null);

  const t = translations[lang];

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  React.useEffect(() => {
    const saved = localStorage.getItem('bloom25_products');
    if (saved) {
      try { setProducts(JSON.parse(saved)); } catch (err) {}
    }
  }, []);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
    setIsCartOpen(true);
  };

  const handleAddProduct = (newP) => {
    const updated = [newP, ...products];
    setProducts(updated);
    localStorage.setItem('bloom25_products', JSON.stringify(updated));
  };

  const handleDeleteProduct = (id) => {
    const updated = products.filter(p => p.id !== id);
    setProducts(updated);
    localStorage.setItem('bloom25_products', JSON.stringify(updated));
  };

  return e('div', { style: { minHeight: '100vh', display: 'flex', flexDirection: 'column' } },
    e(Header, { lang, setLang, theme, setTheme, cartCount: cartItems.length, onOpenCart: () => setIsCartOpen(true), onOpenAdmin: () => setIsAdminOpen(true), t }),
    e('main', { style: { flex: 1 } },
      e(Hero, { t, onScrollToCatalog: () => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' }), onScrollToBuilder: () => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' }) }),
      e(BentoGrid, { t, onSelectCategory: (cat) => setActiveCategory(cat) }),
      e(Catalog, { products, lang, t, onAddToCart: handleAddToCart, onSelectProduct: (p) => setSelectedProduct(p), activeCategory, setActiveCategory })
    ),
    e(Footer, { lang, t }),
    e(CartDrawer, { isOpen: isCartOpen, onClose: () => setIsCartOpen(false), cartItems, onRemoveItem: (idx) => setCartItems(cartItems.filter((_, i) => i !== idx)), lang, t, onCompleteOrder: (o) => { setCompletedOrder(o); setCartItems([]); setIsCartOpen(false); } }),
    e(AdminModal, { isOpen: isAdminOpen, onClose: () => setIsAdminOpen(false), products, onAddProduct: handleAddProduct, onDeleteProduct: handleDeleteProduct, lang, t }),
    completedOrder ? e(OrderReceiptModal, { order: completedOrder, onClose: () => setCompletedOrder(null), lang, t }) : null
  );
}

// MOUNT APP TO DOM
const container = document.getElementById('root');
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(e(App));
}
