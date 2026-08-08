window.BentoGrid = function BentoGrid({ t, onSelectCategory }) {
  return (
    <section id="bento" style={{ padding: '80px 24px', maxWidth: '1320px', margin: '0 auto' }}>
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <div style={{
          color: 'var(--accent-gold)',
          fontSize: '0.85rem',
          fontWeight: '700',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginBottom: '8px'
        }}>
          {t.bentoSub}
        </div>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
          {t.bentoTitle}
        </h2>
      </div>

      {/* Bento Grid */}
      <div className="bento-grid">
        {/* Card 1: Dopamine Blooms (Large) */}
        <div
          className="bento-item bento-large glass-panel"
          onClick={() => onSelectCategory('Everyday Luxury')}
          style={{ cursor: 'pointer', minHeight: '380px' }}
        >
          <img
            src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1200&q=80"
            alt="Dopamine Blooms"
            style={{
              position: 'absolute',
              top: 0, left: 0, width: '100%', height: '100%',
              objectFit: 'cover',
              filter: 'brightness(70%)'
            }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(11,13,16,0.95) 0%, rgba(11,13,16,0.2) 60%)',
            padding: '36px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end'
          }}>
            <span className="badge-tag" style={{ width: 'fit-content', marginBottom: '12px' }}>
              🔥 2026 Trend
            </span>
            <h3 style={{ fontSize: '1.8rem', color: '#FFF', marginBottom: '8px' }}>
              {t.bento1Title}
            </h3>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '480px', fontSize: '0.95rem' }}>
              {t.bento1Desc}
            </p>
          </div>
        </div>

        {/* Card 2: Minimalist Parisian Roses (Medium) */}
        <div
          className="bento-item bento-medium glass-panel"
          onClick={() => onSelectCategory('Romance')}
          style={{ cursor: 'pointer', minHeight: '380px' }}
        >
          <img
            src="https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80"
            alt="Parisian Roses"
            style={{
              position: 'absolute',
              top: 0, left: 0, width: '100%', height: '100%',
              objectFit: 'cover',
              filter: 'brightness(65%)'
            }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(11,13,16,0.95) 0%, rgba(11,13,16,0.1) 60%)',
            padding: '30px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end'
          }}>
            <span className="badge-tag" style={{ width: 'fit-content', marginBottom: '12px' }}>
              🌹 Timeless
            </span>
            <h3 style={{ fontSize: '1.5rem', color: '#FFF', marginBottom: '6px' }}>
              {t.bento2Title}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              {t.bento2Desc}
            </p>
          </div>
        </div>

        {/* Card 3: Brooklyn Box (Small) */}
        <div
          className="bento-item bento-small glass-panel"
          onClick={() => onSelectCategory('Weddings & Events')}
          style={{ cursor: 'pointer' }}
        >
          <img
            src="https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=800&q=80"
            alt="Brooklyn Velvet Box"
            style={{
              position: 'absolute',
              top: 0, left: 0, width: '100%', height: '100%',
              objectFit: 'cover',
              filter: 'brightness(65%)'
            }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(11,13,16,0.95) 0%, rgba(11,13,16,0.1) 60%)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end'
          }}>
            <h3 style={{ fontSize: '1.3rem', color: '#FFF', marginBottom: '4px' }}>
              {t.bento3Title}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
              {t.bento3Desc}
            </p>
          </div>
        </div>

        {/* Card 4: Dried Botanical (Small) */}
        <div
          className="bento-item bento-small glass-panel"
          onClick={() => onSelectCategory('Dried Botanical')}
          style={{ cursor: 'pointer' }}
        >
          <img
            src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80"
            alt="Dried Botanical"
            style={{
              position: 'absolute',
              top: 0, left: 0, width: '100%', height: '100%',
              objectFit: 'cover',
              filter: 'brightness(65%)'
            }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(11,13,16,0.95) 0%, rgba(11,13,16,0.1) 60%)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end'
          }}>
            <h3 style={{ fontSize: '1.3rem', color: '#FFF', marginBottom: '4px' }}>
              {t.bento4Title}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
              {t.bento4Desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
