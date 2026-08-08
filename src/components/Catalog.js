window.Catalog = function Catalog({
  products,
  lang,
  t,
  onAddToCart,
  onSelectProduct,
  activeCategory,
  setActiveCategory
}) {
  const [search, setSearch] = React.useState('');
  const [colorFilter, setColorFilter] = React.useState('All');
  const [expressOnly, setExpressOnly] = React.useState(false);
  const [priceMax, setPriceMax] = React.useState(300);

  const categories = ['All', 'Romance', 'Everyday Luxury', 'Weddings & Events', 'Dried Botanical'];
  const colors = ['All', 'Blush Pink', 'Cream White', 'Deep Red', 'Vibrant Sunset'];

  const filteredProducts = products.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesColor = colorFilter === 'All' || p.color === colorFilter;
    const matchesExpress = !expressOnly || p.isExpress;
    const matchesPrice = p.price <= priceMax;
    const name = lang === 'ka' ? p.nameKa : p.nameEn;
    const matchesSearch = name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesColor && matchesExpress && matchesPrice && matchesSearch;
  });

  return (
    <section id="catalog" style={{ padding: '60px 24px 100px', maxWidth: '1320px', margin: '0 auto' }}>
      {/* Section Title */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div style={{
          color: 'var(--accent-gold)',
          fontSize: '0.85rem',
          fontWeight: '700',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginBottom: '8px'
        }}>
          {t.catalogSub}
        </div>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
          {t.catalogTitle}
        </h2>
      </div>

      {/* Category Tabs */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        flexWrap: 'wrap',
        marginBottom: '32px'
      }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              background: activeCategory === cat
                ? 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)'
                : 'rgba(255, 255, 255, 0.05)',
              color: activeCategory === cat ? '#000' : 'var(--text-primary)',
              border: activeCategory === cat ? 'none' : '1px solid var(--border-color)',
              padding: '10px 22px',
              borderRadius: 'var(--radius-full)',
              fontWeight: '700',
              fontSize: '0.88rem',
              cursor: 'pointer',
              transition: 'var(--transition)'
            }}
          >
            {cat === 'All' ? (lang === 'ka' ? 'ყველა თაიგული' : 'All Collections') : cat}
          </button>
        ))}
      </div>

      {/* Filter Bar */}
      <div className="glass-panel" style={{
        padding: '18px 24px',
        marginBottom: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '20px',
        flexWrap: 'wrap'
      }}>
        {/* Search */}
        <div style={{ flex: '1', minWidth: '220px', position: 'relative' }}>
          <input
            type="text"
            placeholder={t.searchPlaceholder}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: '100%',
              background: 'rgba(0, 0, 0, 0.3)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-primary)',
              padding: '10px 16px 10px 40px',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.9rem',
              outline: 'none'
            }}
          />
          <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', opacity: 0.6 }}>🔍</span>
        </div>

        {/* Color Filter */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>🎨 {t.colorFilter}:</span>
          <select
            value={colorFilter}
            onChange={(e) => setColorFilter(e.target.value)}
            style={{
              background: 'rgba(0, 0, 0, 0.4)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-primary)',
              padding: '8px 14px',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.85rem',
              outline: 'none',
              cursor: 'pointer'
            }}
          >
            <option value="All">{lang === 'ka' ? 'ყველა ფერი' : 'All Colors'}</option>
            <option value="Blush Pink">Blush Pink / ვარდისფერი</option>
            <option value="Cream White">Cream White / თეთრი</option>
            <option value="Deep Red">Deep Red / წითელი</option>
            <option value="Vibrant Sunset">Vibrant Sunset / მზისჩასვლა</option>
          </select>
        </div>

        {/* Express Brooklyn Toggle */}
        <label style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer',
          fontSize: '0.85rem',
          fontWeight: '600',
          color: 'var(--text-primary)'
        }}>
          <input
            type="checkbox"
            checked={expressOnly}
            onChange={(e) => setExpressOnly(e.target.checked)}
            style={{ accentColor: 'var(--accent-gold)' }}
          />
          <span>⚡ {t.expressOnly}</span>
        </label>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-secondary)' }}>
          <div style={{ fontSize: '3rem', marginBottom: '12px' }}>🥀</div>
          <h3>{lang === 'ka' ? 'ყვავილები ვერ მოიძებნა' : 'No flowers matched your filters'}</h3>
          <p>{lang === 'ka' ? 'სცადეთ ფილტრის შეცვლა ან ძებნის გასუფთავება' : 'Try resetting your search or filters'}</p>
        </div>
      ) : (
        <div className="product-grid">
          {filteredProducts.map(product => {
            const name = lang === 'ka' ? product.nameKa : product.nameEn;
            const desc = lang === 'ka' ? product.descriptionKa : product.descriptionEn;

            return (
              <div key={product.id} className="product-card">
                {/* Image Container */}
                <div
                  className="product-card-img-container"
                  onClick={() => onSelectProduct(product)}
                  style={{ cursor: 'pointer' }}
                >
                  <img src={product.image} alt={name} className="product-card-img" />
                  {product.tag && <span className="badge-tag">{product.tag}</span>}
                  {product.isExpress && (
                    <span className="badge-express">
                      ⚡ Brooklyn Express
                    </span>
                  )}
                </div>

                {/* Card Content */}
                <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '8px'
                  }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--accent-gold)', fontWeight: '700', textTransform: 'uppercase' }}>
                      {product.category}
                    </span>
                    <span style={{ fontSize: '0.85rem', color: '#FFD700', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      ★ {product.rating} <span style={{ opacity: 0.5 }}>({product.reviewsCount})</span>
                    </span>
                  </div>

                  <h3
                    onClick={() => onSelectProduct(product)}
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: '700',
                      marginBottom: '8px',
                      cursor: 'pointer',
                      color: 'var(--text-primary)'
                    }}
                  >
                    {name}
                  </h3>

                  <p style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '16px',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {desc}
                  </p>

                  <div style={{
                    marginTop: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '16px',
                    borderTop: '1px solid var(--border-color)'
                  }}>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>
                        {t.priceFrom}
                      </span>
                      <span style={{
                        fontSize: '1.4rem',
                        fontWeight: '800',
                        color: 'var(--accent-gold)',
                        fontFamily: 'var(--font-heading)'
                      }}>
                        ${product.price}
                      </span>
                    </div>

                    <button
                      onClick={() => onAddToCart(product)}
                      className="btn-primary"
                      style={{ padding: '10px 18px', fontSize: '0.85rem' }}
                    >
                      <span>🛒</span>
                      <span>{t.addToCart}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
