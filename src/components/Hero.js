window.Hero = function Hero({ t, onScrollToCatalog, onScrollToBuilder }) {
  return (
    <section style={{
      position: 'relative',
      minHeight: '85vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      padding: '80px 24px 60px',
      background: 'radial-gradient(circle at 50% 20%, rgba(27, 77, 62, 0.25) 0%, rgba(11, 13, 16, 0.95) 70%)'
    }}>
      {/* Background Subtle Floral Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url("https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=1800&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.15,
        filter: 'grayscale(30%) blur(2px)',
        zIndex: 0
      }} />

      {/* Decorative Glow */}
      <div style={{
        position: 'absolute',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, rgba(0,0,0,0) 70%)',
        top: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        pointerEvents: 'none',
        zIndex: 1
      }} />

      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative',
        zIndex: 2
      }}>
        {/* Brooklyn Studio Tag */}
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

        {/* Hero Title */}
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

        {/* Subtitle */}
        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          color: 'var(--text-secondary)',
          maxWidth: '720px',
          margin: '0 auto 36px',
          fontWeight: 400
        }}>
          {t.heroSubtitle}
        </p>

        {/* CTA Buttons */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          flexWrap: 'wrap',
          marginBottom: '50px'
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

        {/* Feature Highlights Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          marginTop: '40px'
        }}>
          <div className="glass-panel" style={{ padding: '20px', textAlign: 'center' }}>
            <div style={{ fontSize: '1.8rem', marginBottom: '8px' }}>🚀</div>
            <div style={{ fontWeight: '700', fontSize: '0.95rem', color: 'var(--text-primary)' }}>
              {t.feat1Title}
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
              {t.feat1Desc}
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '20px', textAlign: 'center' }}>
            <div style={{ fontSize: '1.8rem', marginBottom: '8px' }}>🌿</div>
            <div style={{ fontWeight: '700', fontSize: '0.95rem', color: 'var(--text-primary)' }}>
              {t.feat2Title}
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
              {t.feat2Desc}
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '20px', textAlign: 'center' }}>
            <div style={{ fontSize: '1.8rem', marginBottom: '8px' }}>💌</div>
            <div style={{ fontWeight: '700', fontSize: '0.95rem', color: 'var(--text-primary)' }}>
              {t.feat3Title}
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
              {t.feat3Desc}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
