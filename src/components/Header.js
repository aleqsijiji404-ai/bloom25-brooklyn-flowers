window.Header = function Header({
  lang,
  setLang,
  theme,
  setTheme,
  cartCount,
  onOpenCart,
  onOpenAdmin,
  t
}) {
  return (
    <header className="glass-header sticky-top" style={{ position: 'sticky', top: 0, zIndex: 100 }}>
      {/* Top Banner Notice */}
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

      {/* Main Navbar */}
      <div style={{
        maxWidth: '1320px',
        margin: '0 auto',
        padding: '14px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px'
      }}>
        {/* Logo */}
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

        {/* Center Nav Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '24px' }} className="d-none-mobile">
          <a href="#catalog" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: '500', fontSize: '0.9rem', transition: 'var(--transition)' }} className="nav-hover">
            {t.navCatalog}
          </a>
          <a href="#bento" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: '500', fontSize: '0.9rem', transition: 'var(--transition)' }} className="nav-hover">
            {t.navCollections}
          </a>
          <a href="#builder" style={{ color: 'var(--accent-gold)', textDecoration: 'none', fontWeight: '600', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
            ✨ {t.navBuilder}
          </a>
          <a href="#location" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: '500', fontSize: '0.9rem' }}>
            📍 {t.navLocation}
          </a>
        </nav>

        {/* Right Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Admin CMS Button */}
          <button
            onClick={onOpenAdmin}
            className="btn-admin"
            title="Manage Flower Inventory / პროდუქტების მართვა"
          >
            <span>⚙️</span>
            <span>{t.adminBtn}</span>
          </button>

          {/* Language Switcher */}
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

          {/* Theme Toggle */}
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
            title="Toggle Light / Dark Mode"
          >
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>

          {/* Cart Drawer Trigger */}
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
};
