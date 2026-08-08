// -------------------------------------------------------------
// BLOOM 25 - BROOKLYN FLORAL ATELIER (UNIFIED REACT APP)
// -------------------------------------------------------------

// 1. HEADER COMPONENT
function Header({ lang, setLang, theme, setTheme, cartCount, onOpenCart, onOpenAdmin, t }) {
  return (
    <header className="glass-header sticky-top" style={{ position: 'sticky', top: 0, zIndex: 100 }}>
      <div style={{
        background: 'linear-gradient(90deg, #1B4D3E 0%, #0D261F 50%, #1B4D3E 100%)',
        color: '#8FFFE1',
        fontSize: '0.8rem',
        padding: '6px 16px',
        textAlign: 'center',
        fontWeight: '600',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        borderBottom: '1px solid rgba(143, 255, 225, 0.2)'
      }}>
        <span>🌸</span>
        <span>{t.topBanner}</span>
        <span style={{
          background: 'rgba(255, 255, 255, 0.15)',
          padding: '2px 8px',
          borderRadius: '12px',
          fontSize: '0.75rem'
        }}>
          25th Ave, Brooklyn NY 11214
        </span>
      </div>

      <div style={{
        maxWidth: '1320px',
        margin: '0 auto',
        padding: '14px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px'
      }}>
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #D4AF37 0%, #8C6F12 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.4rem',
            boxShadow: '0 0 15px rgba(212, 175, 55, 0.3)'
          }}>
            🌸
          </div>
          <div>
            <div style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.4rem',
              fontWeight: '700',
              color: 'var(--text-primary)',
              letterSpacing: '0.05em',
              lineHeight: 1.1
            }}>
              BLOOM 25
            </div>
            <div style={{
              fontSize: '0.7rem',
              color: 'var(--accent-gold)',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              fontWeight: '600'
            }}>
              Brooklyn • New York
            </div>
          </div>
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={onOpenAdmin}
            className="btn-admin"
            title="Manage Inventory"
          >
            <span>⚙️</span>
            <span>{t.adminBtn}</span>
          </button>

          <button
            onClick={() => setLang(lang === 'ka' ? 'en' : 'ka')}
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-primary)',
              borderRadius: 'var(--radius-full)',
              padding: '6px 12px',
              fontSize: '0.85rem',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <span>{lang === 'ka' ? '🇬🇪 KA' : '🇺🇸 EN'}</span>
          </button>

          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-primary)',
              borderRadius: '50%',
              width: '38px',
              height: '38px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1rem'
            }}
          >
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>

          <button
            onClick={onOpenCart}
            style={{
              background: 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)',
              border: 'none',
              color: '#000000',
              padding: '8px 18px',
              borderRadius: 'var(--radius-full)',
              fontWeight: '700',
              fontSize: '0.9rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)'
            }}
          >
            <span>🛒</span>
            <span>{t.cart}</span>
            {cartCount > 0 && (
              <span style={{
                background: '#000000',
                color: '#FFFFFF',
                borderRadius: '50%',
                width: '22px',
                height: '22px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.75rem',
                fontWeight: '800'
              }}>
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

// 2. HERO COMPONENT
function Hero({ t, onScrollToCatalog, onScrollToBuilder }) {
  return (
    <section style={{
      position: 'relative',
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      padding: '80px 24px 60px',
      background: 'radial-gradient(circle at 50% 20%, rgba(27, 77, 62, 0.25) 0%, rgba(11, 13, 16, 0.95) 70%)'
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url("https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=1800&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.15,
        filter: 'grayscale(30%) blur(2px)',
        zIndex: 0
      }} />

      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 20px',
          borderRadius: 'var(--radius-full)',
          background: 'rgba(212, 175, 55, 0.12)',
          border: '1px solid var(--border-gold)',
          color: 'var(--accent-gold)',
          fontSize: '0.85rem',
          fontWeight: '700',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          marginBottom: '24px'
        }}>
          <span>📍</span>
          <span>{t.heroLocationTag}</span>
        </div>

        <h1 style={{
          fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
          lineHeight: 1.1,
          marginBottom: '20px',
          fontWeight: 700
        }}>
          {t.heroTitlePart1} <br />
          <span className="gold-gradient-text" style={{ fontStyle: 'italic', fontFamily: 'var(--font-editorial)' }}>
            {t.heroTitlePart2}
          </span>
        </h1>

        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          color: 'var(--text-secondary)',
          maxWidth: '720px',
          margin: '0 auto 36px'
        }}>
          {t.heroSubtitle}
        </p>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          flexWrap: 'wrap',
          marginBottom: '40px'
        }}>
          <button onClick={onScrollToCatalog} className="btn-primary">
            <span>🌸</span>
            <span>{t.heroCtaPrimary}</span>
          </button>
          <button onClick={onScrollToBuilder} className="btn-secondary">
            <span>🎨</span>
            <span>{t.heroCtaSecondary}</span>
          </button>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px'
        }}>
          <div className="glass-panel" style={{ padding: '20px', textAlign: 'center' }}>
            <div style={{ fontSize: '1.8rem', marginBottom: '8px' }}>🚀</div>
            <div style={{ fontWeight: '700', fontSize: '0.95rem' }}>{t.feat1Title}</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{t.feat1Desc}</div>
          </div>

          <div className="glass-panel" style={{ padding: '20px', textAlign: 'center' }}>
            <div style={{ fontSize: '1.8rem', marginBottom: '8px' }}>🌿</div>
            <div style={{ fontWeight: '700', fontSize: '0.95rem' }}>{t.feat2Title}</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{t.feat2Desc}</div>
          </div>

          <div className="glass-panel" style={{ padding: '20px', textAlign: 'center' }}>
            <div style={{ fontSize: '1.8rem', marginBottom: '8px' }}>💌</div>
            <div style={{ fontWeight: '700', fontSize: '0.95rem' }}>{t.feat3Title}</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{t.feat3Desc}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 3. BENTO GRID COMPONENT
function BentoGrid({ t, onSelectCategory }) {
  return (
    <section id="bento" style={{ padding: '80px 24px', maxWidth: '1320px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <div style={{ color: 'var(--accent-gold)', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '8px' }}>
          {t.bentoSub}
        </div>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
          {t.bentoTitle}
        </h2>
      </div>

      <div className="bento-grid">
        <div className="bento-item bento-large glass-panel" onClick={() => onSelectCategory('Everyday Luxury')} style={{ cursor: 'pointer', minHeight: '360px' }}>
          <img src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1200&q=80" alt="Dopamine Blooms" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(70%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(11,13,16,0.95) 0%, rgba(11,13,16,0.2) 60%)', padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
            <span className="badge-tag" style={{ width: 'fit-content', marginBottom: '12px' }}>🔥 2026 Trend</span>
            <h3 style={{ fontSize: '1.8rem', color: '#FFF', marginBottom: '8px' }}>{t.bento1Title}</h3>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '480px', fontSize: '0.95rem' }}>{t.bento1Desc}</p>
          </div>
        </div>

        <div className="bento-item bento-medium glass-panel" onClick={() => onSelectCategory('Romance')} style={{ cursor: 'pointer', minHeight: '360px' }}>
          <img src="https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80" alt="Parisian Roses" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(65%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(11,13,16,0.95) 0%, rgba(11,13,16,0.1) 60%)', padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
            <span className="badge-tag" style={{ width: 'fit-content', marginBottom: '12px' }}>🌹 Timeless</span>
            <h3 style={{ fontSize: '1.5rem', color: '#FFF', marginBottom: '6px' }}>{t.bento2Title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{t.bento2Desc}</p>
          </div>
        </div>

        <div className="bento-item bento-small glass-panel" onClick={() => onSelectCategory('Weddings & Events')} style={{ cursor: 'pointer' }}>
          <img src="https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=800&q=80" alt="Brooklyn Box" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(65%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(11,13,16,0.95) 0%, rgba(11,13,16,0.1) 60%)', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
            <h3 style={{ fontSize: '1.3rem', color: '#FFF', marginBottom: '4px' }}>{t.bento3Title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{t.bento3Desc}</p>
          </div>
        </div>

        <div className="bento-item bento-small glass-panel" onClick={() => onSelectCategory('Dried Botanical')} style={{ cursor: 'pointer' }}>
          <img src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80" alt="Dried Botanical" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(65%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(11,13,16,0.95) 0%, rgba(11,13,16,0.1) 60%)', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
            <h3 style={{ fontSize: '1.3rem', color: '#FFF', marginBottom: '4px' }}>{t.bento4Title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{t.bento4Desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// 4. CATALOG COMPONENT
function Catalog({ products, lang, t, onAddToCart, onSelectProduct, activeCategory, setActiveCategory }) {
  const [search, setSearch] = React.useState('');
  const [colorFilter, setColorFilter] = React.useState('All');
  const [expressOnly, setExpressOnly] = React.useState(false);

  const categories = ['All', 'Romance', 'Everyday Luxury', 'Weddings & Events', 'Dried Botanical'];

  const filteredProducts = products.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesColor = colorFilter === 'All' || p.color === colorFilter;
    const matchesExpress = !expressOnly || p.isExpress;
    const name = lang === 'ka' ? p.nameKa : p.nameEn;
    const matchesSearch = name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesColor && matchesExpress && matchesSearch;
  });

  return (
    <section id="catalog" style={{ padding: '60px 24px 100px', maxWidth: '1320px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div style={{ color: 'var(--accent-gold)', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '8px' }}>
          {t.catalogSub}
        </div>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
          {t.catalogTitle}
        </h2>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '32px' }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              background: activeCategory === cat ? 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)' : 'rgba(255, 255, 255, 0.05)',
              color: activeCategory === cat ? '#000' : 'var(--text-primary)',
              border: activeCategory === cat ? 'none' : '1px solid var(--border-color)',
              padding: '10px 22px', borderRadius: 'var(--radius-full)', fontWeight: '700', fontSize: '0.88rem', cursor: 'pointer'
            }}
          >
            {cat === 'All' ? (lang === 'ka' ? 'ყველა თაიგული' : 'All Collections') : cat}
          </button>
        ))}
      </div>

      <div className="glass-panel" style={{ padding: '18px 24px', marginBottom: '40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
        <div style={{ flex: '1', minWidth: '220px', position: 'relative' }}>
          <input
            type="text"
            placeholder={t.searchPlaceholder}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ width: '100%', background: 'rgba(0, 0, 0, 0.3)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', padding: '10px 16px 10px 40px', borderRadius: 'var(--radius-full)', fontSize: '0.9rem', outline: 'none' }}
          />
          <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', opacity: 0.6 }}>🔍</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>🎨 {t.colorFilter}:</span>
          <select
            value={colorFilter}
            onChange={(e) => setColorFilter(e.target.value)}
            style={{ background: 'rgba(0, 0, 0, 0.4)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', padding: '8px 14px', borderRadius: 'var(--radius-full)', fontSize: '0.85rem', outline: 'none' }}
          >
            <option value="All">{lang === 'ka' ? 'ყველა ფერი' : 'All Colors'}</option>
            <option value="Blush Pink">Blush Pink / ვარდისფერი</option>
            <option value="Cream White">Cream White / თეთრი</option>
            <option value="Deep Red">Deep Red / წითელი</option>
            <option value="Vibrant Sunset">Vibrant Sunset / მზისჩასვლა</option>
          </select>
        </div>

        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '0.85rem', fontWeight: '600' }}>
          <input type="checkbox" checked={expressOnly} onChange={(e) => setExpressOnly(e.target.checked)} style={{ accentColor: 'var(--accent-gold)' }} />
          <span>⚡ {t.expressOnly}</span>
        </label>
      </div>

      <div className="product-grid">
        {filteredProducts.map(product => {
          const name = lang === 'ka' ? product.nameKa : product.nameEn;
          const desc = lang === 'ka' ? product.descriptionKa : product.descriptionEn;

          return (
            <div key={product.id} className="product-card">
              <div className="product-card-img-container" onClick={() => onSelectProduct(product)} style={{ cursor: 'pointer' }}>
                <img src={product.image} alt={name} className="product-card-img" />
                {product.tag && <span className="badge-tag">{product.tag}</span>}
                {product.isExpress && <span className="badge-express">⚡ Brooklyn Express</span>}
              </div>

              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--accent-gold)', fontWeight: '700', textTransform: 'uppercase' }}>{product.category}</span>
                  <span style={{ fontSize: '0.85rem', color: '#FFD700' }}>★ {product.rating}</span>
                </div>

                <h3 onClick={() => onSelectProduct(product)} style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '8px', cursor: 'pointer' }}>
                  {name}
                </h3>

                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '16px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {desc}
                </p>

                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', borderTop: '1px solid var(--border-color)' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>{t.priceFrom}</span>
                    <span style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--accent-gold)', fontFamily: 'var(--font-heading)' }}>${product.price}</span>
                  </div>

                  <button onClick={() => onAddToCart(product)} className="btn-primary" style={{ padding: '10px 18px', fontSize: '0.85rem' }}>
                    <span>🛒</span>
                    <span>{t.addToCart}</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// 5. PRODUCT QUICK VIEW MODAL
function ProductModal({ product, lang, t, onClose, onAddToCart }) {
  if (!product) return null;
  const [stemSize, setStemSize] = React.useState('standard');
  const [qty, setQty] = React.useState(1);

  const extraPrice = stemSize === 'deluxe' ? 35 : stemSize === 'grand' ? 70 : 0;
  const totalPrice = (product.price + extraPrice) * qty;

  const name = lang === 'ka' ? product.nameKa : product.nameEn;
  const desc = lang === 'ka' ? product.descriptionKa : product.descriptionEn;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="glass-panel" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '850px', width: '100%', maxHeight: '90vh', overflowY: 'auto', padding: '0', position: 'relative' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(0,0,0,0.6)', border: '1px solid var(--border-color)', color: '#FFF', width: '36px', height: '36px', borderRadius: '50%', cursor: 'pointer', zIndex: 10 }}>✕</button>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          <div style={{ position: 'relative', minHeight: '360px', background: '#000' }}>
            <img src={product.image} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          <div style={{ padding: '32px', display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', fontWeight: '700', textTransform: 'uppercase', marginBottom: '6px' }}>{product.category} • {product.color}</span>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '12px' }}>{name}</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '24px' }}>{desc}</p>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', marginBottom: '10px' }}>{t.chooseSize}:</label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
                <button type="button" onClick={() => setStemSize('standard')} style={{ background: stemSize === 'standard' ? 'var(--accent-glow)' : 'rgba(0,0,0,0.3)', border: stemSize === 'standard' ? '2px solid var(--accent-gold)' : '1px solid var(--border-color)', color: '#FFF', padding: '10px', borderRadius: '8px', cursor: 'pointer' }}>
                  <div style={{ fontWeight: '700', fontSize: '0.85rem' }}>{t.sizeStandard}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>${product.price}</div>
                </button>
                <button type="button" onClick={() => setStemSize('deluxe')} style={{ background: stemSize === 'deluxe' ? 'var(--accent-glow)' : 'rgba(0,0,0,0.3)', border: stemSize === 'deluxe' ? '2px solid var(--accent-gold)' : '1px solid var(--border-color)', color: '#FFF', padding: '10px', borderRadius: '8px', cursor: 'pointer' }}>
                  <div style={{ fontWeight: '700', fontSize: '0.85rem' }}>{t.sizeDeluxe}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--accent-gold)' }}>+ $35</div>
                </button>
                <button type="button" onClick={() => setStemSize('grand')} style={{ background: stemSize === 'grand' ? 'var(--accent-glow)' : 'rgba(0,0,0,0.3)', border: stemSize === 'grand' ? '2px solid var(--accent-gold)' : '1px solid var(--border-color)', color: '#FFF', padding: '10px', borderRadius: '8px', cursor: 'pointer' }}>
                  <div style={{ fontWeight: '700', fontSize: '0.85rem' }}>{t.sizeGrand}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--accent-gold)' }}>+ $70</div>
                </button>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <button type="button" onClick={() => setQty(Math.max(1, qty - 1))} style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', border: 'none', color: '#FFF', cursor: 'pointer' }}>-</button>
                <span style={{ fontWeight: '700', width: '24px', textAlign: 'center' }}>{qty}</span>
                <button type="button" onClick={() => setQty(qty + 1)} style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', border: 'none', color: '#FFF', cursor: 'pointer' }}>+</button>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{t.total}</div>
                <div style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--accent-gold)' }}>${totalPrice}</div>
              </div>
            </div>

            <button onClick={() => { onAddToCart(product, stemSize, qty); onClose(); }} className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '16px' }}>
              <span>🛒</span>
              <span>{t.addToCart} (${totalPrice})</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// 6. BOUQUET BUILDER COMPONENT
function BouquetBuilder({ t, lang, onAddToCart }) {
  const [step, setStep] = React.useState(1);
  const [selectedFlowers, setSelectedFlowers] = React.useState(['Garden Roses']);
  const [selectedFoliage, setSelectedFoliage] = React.useState('Eucalyptus');
  const [selectedVase, setSelectedVase] = React.useState('Matte Parchment Wrap');
  const [customNote, setCustomNote] = React.useState('');

  const flowersList = [
    { name: 'Garden Roses', price: 65, icon: '🌹' },
    { name: 'White Peonies', price: 85, icon: '🌸' },
    { name: 'Sunset Dahlias', price: 70, icon: '🌺' },
    { name: 'French Tulips', price: 55, icon: '🌷' }
  ];

  const foliageList = [
    { name: 'Eucalyptus', price: 15, icon: '🌿' },
    { name: 'Pampas Grass', price: 20, icon: '🌾' },
    { name: 'Silver Ruscus', price: 18, icon: '🌱' }
  ];

  const vaseList = [
    { name: 'Matte Parchment Wrap', price: 10, icon: '📜' },
    { name: 'Crystal Glass Vase', price: 35, icon: '🏺' },
    { name: 'Suede Hatbox', price: 45, icon: '🎁' }
  ];

  const toggleFlower = (name) => {
    if (selectedFlowers.includes(name)) {
      if (selectedFlowers.length > 1) setSelectedFlowers(selectedFlowers.filter(f => f !== name));
    } else {
      setSelectedFlowers([...selectedFlowers, name]);
    }
  };

  const flowersPrice = selectedFlowers.reduce((acc, name) => acc + (flowersList.find(f => f.name === name)?.price || 0), 0);
  const foliagePrice = (foliageList.find(f => f.name === selectedFoliage) || { price: 0 }).price;
  const vasePrice = (vaseList.find(v => v.name === selectedVase) || { price: 0 }).price;
  const totalBuilderPrice = flowersPrice + foliagePrice + vasePrice;

  const handleAddCustom = () => {
    onAddToCart({
      id: 'custom-' + Date.now(),
      nameEn: `Custom Atelier Arrangement (${selectedFlowers.join(', ')})`,
      nameKa: `ინდივიდუალური ატელიეს თაიგული (${selectedFlowers.join(', ')})`,
      price: totalBuilderPrice,
      category: 'Custom Atelier',
      image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80'
    }, 'custom', 1);
  };

  return (
    <section id="builder" style={{ padding: '80px 24px', maxWidth: '1100px', margin: '0 auto' }}>
      <div className="glass-panel" style={{ padding: '40px 32px' }}>
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <div style={{ color: 'var(--accent-gold)', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '8px' }}>🎨 {t.builderSub}</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>{t.builderTitle}</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '8px auto 0' }}>{t.builderDesc}</p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '40px', flexWrap: 'wrap' }}>
          {[1, 2, 3, 4].map(s => (
            <div key={s} onClick={() => setStep(s)} style={{ padding: '8px 18px', borderRadius: 'var(--radius-full)', background: step === s ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)', color: step === s ? '#000' : 'var(--text-secondary)', fontWeight: '700', fontSize: '0.85rem', cursor: 'pointer' }}>
              {s}. {s === 1 ? t.step1Title : s === 2 ? t.step2Title : s === 3 ? t.step3Title : t.step4Title}
            </div>
          ))}
        </div>

        {step === 1 && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            {flowersList.map(item => (
              <div key={item.name} onClick={() => toggleFlower(item.name)} style={{ background: selectedFlowers.includes(item.name) ? 'var(--accent-glow)' : 'rgba(0,0,0,0.3)', border: selectedFlowers.includes(item.name) ? '2px solid var(--accent-gold)' : '1px solid var(--border-color)', padding: '24px', borderRadius: '16px', textAlign: 'center', cursor: 'pointer' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>{item.icon}</div>
                <div style={{ fontWeight: '700' }}>{item.name}</div>
                <div style={{ color: 'var(--accent-gold)', marginTop: '4px' }}>+${item.price}</div>
              </div>
            ))}
          </div>
        )}

        {step === 2 && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            {foliageList.map(item => (
              <div key={item.name} onClick={() => setSelectedFoliage(item.name)} style={{ background: selectedFoliage === item.name ? 'var(--accent-glow)' : 'rgba(0,0,0,0.3)', border: selectedFoliage === item.name ? '2px solid var(--accent-gold)' : '1px solid var(--border-color)', padding: '24px', borderRadius: '16px', textAlign: 'center', cursor: 'pointer' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>{item.icon}</div>
                <div style={{ fontWeight: '700' }}>{item.name}</div>
                <div style={{ color: 'var(--accent-gold)', marginTop: '4px' }}>+${item.price}</div>
              </div>
            ))}
          </div>
        )}

        {step === 3 && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            {vaseList.map(item => (
              <div key={item.name} onClick={() => setSelectedVase(item.name)} style={{ background: selectedVase === item.name ? 'var(--accent-glow)' : 'rgba(0,0,0,0.3)', border: selectedVase === item.name ? '2px solid var(--accent-gold)' : '1px solid var(--border-color)', padding: '24px', borderRadius: '16px', textAlign: 'center', cursor: 'pointer' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>{item.icon}</div>
                <div style={{ fontWeight: '700' }}>{item.name}</div>
                <div style={{ color: 'var(--accent-gold)', marginTop: '4px' }}>+${item.price}</div>
              </div>
            ))}
          </div>
        )}

        {step === 4 && (
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <textarea placeholder={t.cardNotePlaceholder} value={customNote} onChange={(e) => setCustomNote(e.target.value)} rows={4} style={{ width: '100%', background: 'rgba(0,0,0,0.4)', border: '1px solid var(--border-color)', color: '#FFF', padding: '16px', borderRadius: '12px', resize: 'none' }} />
          </div>
        )}

        <div style={{ marginTop: '40px', paddingTop: '24px', borderTop: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--accent-gold)' }}>${totalBuilderPrice}</div>
          <div style={{ display: 'flex', gap: '12px' }}>
            {step > 1 && <button onClick={() => setStep(step - 1)} className="btn-secondary">← {t.back}</button>}
            {step < 4 ? <button onClick={() => setStep(step + 1)} className="btn-primary">{t.nextStep} →</button> : <button onClick={handleAddCustom} className="btn-primary">✨ {t.addCustomToCart}</button>}
          </div>
        </div>
      </div>
    </section>
  );
}

// 7. CART DRAWER COMPONENT
function CartDrawer({ isOpen, onClose, cartItems, onUpdateQty, onRemoveItem, lang, t, onCompleteOrder }) {
  if (!isOpen) return null;
  const [address, setAddress] = React.useState('25th Ave, Brooklyn, NY');
  const [zipCode, setZipCode] = React.useState('11214');
  const [recipientName, setRecipientName] = React.useState('');
  const [cardMsg, setCardMsg] = React.useState('');

  const deliveryFee = zipCode.trim() === '11214' ? 0 : 12;
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const total = subtotal + (cartItems.length > 0 ? deliveryFee : 0);

  const handleCheckout = (e) => {
    e.preventDefault();
    onCompleteOrder({
      orderId: 'B25-' + Math.floor(100000 + Math.random() * 900000),
      items: cartItems,
      subtotal,
      deliveryFee,
      total,
      recipientName: recipientName || 'Client',
      address: `${address}, Zip: ${zipCode}`,
      deliveryTime: 'Today 2-Hour Express',
      cardMsg,
      createdAt: new Date().toLocaleString()
    });
  };

  return (
    <>
      <div className="drawer-overlay" onClick={onClose} />
      <div className="drawer-content">
        <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ margin: 0 }}>🛒 {t.yourCart} ({cartItems.reduce((acc, i) => acc + i.quantity, 0)})</h3>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#FFF', fontSize: '1.4rem', cursor: 'pointer' }}>✕</button>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
          {cartItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-secondary)' }}>
              <h4>{t.cartEmptyTitle}</h4>
            </div>
          ) : (
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                {cartItems.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '14px', padding: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
                    <img src={item.image} alt="" style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px' }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h4 style={{ margin: 0, fontSize: '0.95rem' }}>{lang === 'ka' ? item.nameKa : item.nameEn}</h4>
                        <button onClick={() => onRemoveItem(idx)} style={{ background: 'none', border: 'none', color: '#FF5555', cursor: 'pointer' }}>🗑️</button>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
                        <span>Qty: {item.quantity}</span>
                        <span style={{ fontWeight: '700', color: 'var(--accent-gold)' }}>${item.price * item.quantity}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <form onSubmit={handleCheckout} style={{ borderTop: '1px solid var(--border-color)', paddingTop: '24px' }}>
                <div style={{ marginBottom: '12px' }}>
                  <label style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{t.recipientName}:</label>
                  <input type="text" required value={recipientName} onChange={(e) => setRecipientName(e.target.value)} style={{ width: '100%', padding: '10px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-color)', color: '#FFF', borderRadius: '8px' }} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '10px', marginBottom: '12px' }}>
                  <input type="text" required value={address} onChange={(e) => setAddress(e.target.value)} style={{ padding: '10px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-color)', color: '#FFF', borderRadius: '8px' }} />
                  <input type="text" required value={zipCode} onChange={(e) => setZipCode(e.target.value)} style={{ padding: '10px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-color)', color: '#FFF', borderRadius: '8px' }} />
                </div>

                <div style={{ background: 'rgba(0,0,0,0.4)', padding: '16px', borderRadius: '8px', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}><span>Subtotal:</span><span>${subtotal}</span></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}><span>Delivery:</span><span>{deliveryFee === 0 ? 'FREE' : `$${deliveryFee}`}</span></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', fontWeight: '800', color: 'var(--accent-gold)' }}><span>Total:</span><span>${total}</span></div>
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '16px' }}>
                  💳 {t.placeOrderBtn} (${total})
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

// 8. ADMIN CMS MODAL COMPONENT
function AdminModal({ isOpen, onClose, products, onAddProduct, onDeleteProduct, onResetProducts, lang, t }) {
  if (!isOpen) return null;
  const [nameEn, setNameEn] = React.useState('');
  const [nameKa, setNameKa] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [category, setCategory] = React.useState('Romance');
  const [image, setImage] = React.useState('https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=1000&q=80');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct({
      id: 'fl-' + Date.now(),
      nameEn: nameEn || 'New Flower',
      nameKa: nameKa || 'ახალი ყვავილი',
      price: parseFloat(price) || 120,
      category,
      color: 'Blush Pink',
      image,
      tag: 'New',
      isExpress: true,
      rating: 5.0,
      reviewsCount: 1,
      descriptionEn: 'Freshly arranged stems.',
      descriptionKa: 'ახალი ყვავილები.'
    });
    setNameEn(''); setNameKa(''); setPrice('');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="glass-panel" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '850px', width: '100%', maxHeight: '90vh', overflowY: 'auto', padding: '32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
          <h2>🌸 {lang === 'ka' ? 'პროდუქტების მართვა (Admin)' : 'Admin Inventory Manager'}</h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#FFF', fontSize: '1.4rem', cursor: 'pointer' }}>✕</button>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '16px', marginBottom: '40px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <input type="text" placeholder="სახელი (ქართულად)" required value={nameKa} onChange={(e) => setNameKa(e.target.value)} style={{ padding: '10px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-color)', color: '#FFF', borderRadius: '8px' }} />
            <input type="text" placeholder="Name (English)" required value={nameEn} onChange={(e) => setNameEn(e.target.value)} style={{ padding: '10px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-color)', color: '#FFF', borderRadius: '8px' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <input type="number" placeholder="ფასი ($ USD)" required value={price} onChange={(e) => setPrice(e.target.value)} style={{ padding: '10px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-color)', color: '#FFF', borderRadius: '8px' }} />
            <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} style={{ padding: '10px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-color)', color: '#FFF', borderRadius: '8px' }} />
          </div>
          <button type="submit" className="btn-primary" style={{ padding: '12px', justifyContent: 'center' }}>
            ➕ {lang === 'ka' ? 'ყვავილის დამატება' : 'Add Flower'}
          </button>
        </form>

        <h3>📋 {lang === 'ka' ? 'არსებული ყვავილები' : 'Current Flowers'} ({products.length})</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '14px', marginTop: '16px' }}>
          {products.map(p => (
            <div key={p.id} style={{ background: 'rgba(0,0,0,0.4)', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <img src={p.image} alt="" style={{ width: '100%', height: '110px', objectFit: 'cover', borderRadius: '6px', marginBottom: '8px' }} />
              <div style={{ fontWeight: '700', fontSize: '0.9rem' }}>{lang === 'ka' ? p.nameKa : p.nameEn}</div>
              <div style={{ color: 'var(--accent-gold)', fontSize: '0.85rem' }}>${p.price}</div>
              <button onClick={() => onDeleteProduct(p.id)} style={{ width: '100%', marginTop: '8px', padding: '6px', background: 'rgba(255,85,85,0.2)', border: '1px solid #FF5555', color: '#FF5555', borderRadius: '4px', cursor: 'pointer' }}>
                🗑️ {lang === 'ka' ? 'წაშლა' : 'Delete'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// 9. ORDER RECEIPT MODAL COMPONENT
function OrderReceiptModal({ order, onClose, lang, t }) {
  if (!order) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="glass-panel" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '600px', width: '100%', padding: '32px', position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#1B4D3E', color: '#8FFFE1', fontSize: '1.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>✓</div>
          <h2>{t.orderSuccessTitle}</h2>
          <p style={{ color: 'var(--text-secondary)' }}>#{order.orderId}</p>
        </div>

        <div style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid var(--border-gold)', padding: '20px', borderRadius: '12px', marginBottom: '20px' }}>
          <div style={{ fontWeight: '700', color: 'var(--accent-gold)', marginBottom: '8px' }}>BLOOM 25 FLORAL ATELIER</div>
          <div style={{ fontSize: '0.85rem', marginBottom: '12px' }}>Recipient: {order.recipientName}</div>
          <div style={{ fontSize: '0.85rem', marginBottom: '12px' }}>Address: {order.address}</div>
          <div style={{ borderTop: '1px dashed var(--border-color)', paddingTop: '8px' }}>
            {order.items.map((item, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '4px' }}>
                <span>{item.quantity}x {lang === 'ka' ? item.nameKa : item.nameEn}</span>
                <span>${item.price * item.quantity}</span>
              </div>
            ))}
          </div>
          <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '8px', marginTop: '8px', display: 'flex', justifyContent: 'space-between', fontWeight: '800', color: 'var(--accent-gold)' }}>
            <span>Total Paid:</span>
            <span>${order.total}</span>
          </div>
        </div>

        <button onClick={onClose} className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>✓ {t.done}</button>
      </div>
    </div>
  );
}

// 10. FOOTER COMPONENT
function Footer({ lang, t }) {
  return (
    <footer id="location" style={{ background: '#07080A', borderTop: '1px solid var(--border-color)', padding: '60px 24px 30px', color: 'var(--text-secondary)' }}>
      <div style={{ maxWidth: '1320px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '30px' }}>
        <div>
          <h3 style={{ color: '#FFF', marginBottom: '12px' }}>BLOOM 25</h3>
          <p style={{ fontSize: '0.85rem' }}>📍 25th Ave, Brooklyn, NY 11214</p>
        </div>
        <div>
          <h4 style={{ color: '#FFF', marginBottom: '12px' }}>🕒 {t.hoursTitle}</h4>
          <p style={{ fontSize: '0.85rem' }}>Mon - Sat: 8 AM - 8 PM<br />Sun: 9 AM - 6 PM</p>
        </div>
      </div>
    </footer>
  );
}

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

// 11. MAIN APP CONTAINER
function App() {
  const [lang, setLang] = React.useState('ka');
  const [theme, setTheme] = React.useState('dark');
  const [products, setProducts] = React.useState([]);
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
      try { setProducts(JSON.parse(saved)); } catch (e) {}
    } else {
      fetch('./src/data/products.json')
        .then(res => res.json())
        .then(data => { setProducts(data); localStorage.setItem('bloom25_products', JSON.stringify(data)); })
        .catch(err => console.error(err));
    }
  }, []);

  const handleAddToCart = (product, size = 'standard', qty = 1) => {
    const existingIndex = cartItems.findIndex(i => i.id === product.id && i.size === size);
    let updated = [...cartItems];
    if (existingIndex > -1) {
      updated[existingIndex].quantity += qty;
    } else {
      const extraPrice = size === 'deluxe' ? 35 : size === 'grand' ? 70 : 0;
      updated.push({ ...product, size, price: product.price + extraPrice, quantity: qty });
    }
    setCartItems(updated);
  };

  const handleAddProduct = (newProduct) => {
    const updated = [newProduct, ...products];
    setProducts(updated);
    localStorage.setItem('bloom25_products', JSON.stringify(updated));
  };

  const handleDeleteProduct = (id) => {
    const updated = products.filter(p => p.id !== id);
    setProducts(updated);
    localStorage.setItem('bloom25_products', JSON.stringify(updated));
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)} onOpenCart={() => setIsCartOpen(true)} onOpenAdmin={() => setIsAdminOpen(true)} t={t} />

      <main style={{ flex: 1 }}>
        <Hero t={t} onScrollToCatalog={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })} onScrollToBuilder={() => document.getElementById('builder')?.scrollIntoView({ behavior: 'smooth' })} />
        <BentoGrid t={t} onSelectCategory={(cat) => { setActiveCategory(cat); document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' }); }} />
        <Catalog products={products} lang={lang} t={t} onAddToCart={handleAddToCart} onSelectProduct={(p) => setSelectedProduct(p)} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        <BouquetBuilder t={t} lang={lang} onAddToCart={(customItem) => { handleAddToCart(customItem, 'custom', 1); setIsCartOpen(true); }} />
      </main>

      <Footer lang={lang} t={t} />

      {selectedProduct && <ProductModal product={selectedProduct} lang={lang} t={t} onClose={() => setSelectedProduct(null)} onAddToCart={handleAddToCart} />}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} cartItems={cartItems} onUpdateQty={(idx, q) => { const u = [...cartItems]; if(q<=0) u.splice(idx,1); else u[idx].quantity=q; setCartItems(u); }} onRemoveItem={(idx) => setCartItems(cartItems.filter((_, i) => i !== idx))} lang={lang} t={t} onCompleteOrder={(o) => { setCompletedOrder(o); setCartItems([]); setIsCartOpen(false); }} />
      <AdminModal isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} products={products} onAddProduct={handleAddProduct} onDeleteProduct={handleDeleteProduct} onResetProducts={() => {}} lang={lang} t={t} />
      {completedOrder && <OrderReceiptModal order={completedOrder} onClose={() => setCompletedOrder(null)} lang={lang} t={t} />}
    </div>
  );
}

// MOUNT REACT APP
const container = document.getElementById('root');
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(<App />);
}
