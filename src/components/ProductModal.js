window.ProductModal = function ProductModal({ product, lang, t, onClose, onAddToCart }) {
  if (!product) return null;

  const [stemSize, setStemSize] = React.useState('standard'); // 'standard' | 'deluxe' | 'grand'
  const [qty, setQty] = React.useState(1);

  const extraPrice = stemSize === 'deluxe' ? 35 : stemSize === 'grand' ? 70 : 0;
  const totalPrice = (product.price + extraPrice) * qty;

  const name = lang === 'ka' ? product.nameKa : product.nameEn;
  const desc = lang === 'ka' ? product.descriptionKa : product.descriptionEn;

  const handleAdd = () => {
    onAddToCart(product, stemSize, qty);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="glass-panel"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '850px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '0',
          position: 'relative',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-lg)'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'rgba(0,0,0,0.6)',
            border: '1px solid var(--border-color)',
            color: '#FFF',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            cursor: 'pointer',
            zIndex: 10,
            fontSize: '1.1rem'
          }}
        >
          ✕
        </button>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {/* Left Photo */}
          <div style={{ position: 'relative', minHeight: '360px', background: '#000' }}>
            <img
              src={product.image}
              alt={name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            {product.tag && <span className="badge-tag">{product.tag}</span>}
          </div>

          {/* Right Content */}
          <div style={{ padding: '32px', display: 'flex', flexDirection: 'column' }}>
            <span style={{
              fontSize: '0.8rem',
              color: 'var(--accent-gold)',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '6px'
            }}>
              {product.category} • {product.color}
            </span>

            <h2 style={{ fontSize: '1.8rem', marginBottom: '12px' }}>
              {name}
            </h2>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '24px' }}>
              {desc}
            </p>

            {/* Stem Size Options */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{
                display: 'block',
                fontSize: '0.85rem',
                fontWeight: '700',
                color: 'var(--text-primary)',
                marginBottom: '10px'
              }}>
                {t.chooseSize}:
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
                <button
                  type="button"
                  onClick={() => setStemSize('standard')}
                  style={{
                    background: stemSize === 'standard' ? 'var(--accent-glow)' : 'rgba(0,0,0,0.3)',
                    border: stemSize === 'standard' ? '2px solid var(--accent-gold)' : '1px solid var(--border-color)',
                    color: 'var(--text-primary)',
                    padding: '10px 8px',
                    borderRadius: 'var(--radius-sm)',
                    cursor: 'pointer',
                    textAlign: 'center'
                  }}
                >
                  <div style={{ fontWeight: '700', fontSize: '0.85rem' }}>{t.sizeStandard}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>${product.price}</div>
                </button>

                <button
                  type="button"
                  onClick={() => setStemSize('deluxe')}
                  style={{
                    background: stemSize === 'deluxe' ? 'var(--accent-glow)' : 'rgba(0,0,0,0.3)',
                    border: stemSize === 'deluxe' ? '2px solid var(--accent-gold)' : '1px solid var(--border-color)',
                    color: 'var(--text-primary)',
                    padding: '10px 8px',
                    borderRadius: 'var(--radius-sm)',
                    cursor: 'pointer',
                    textAlign: 'center'
                  }}
                >
                  <div style={{ fontWeight: '700', fontSize: '0.85rem' }}>{t.sizeDeluxe}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--accent-gold)' }}>+ $35</div>
                </button>

                <button
                  type="button"
                  onClick={() => setStemSize('grand')}
                  style={{
                    background: stemSize === 'grand' ? 'var(--accent-glow)' : 'rgba(0,0,0,0.3)',
                    border: stemSize === 'grand' ? '2px solid var(--accent-gold)' : '1px solid var(--border-color)',
                    color: 'var(--text-primary)',
                    padding: '10px 8px',
                    borderRadius: 'var(--radius-sm)',
                    cursor: 'pointer',
                    textAlign: 'center'
                  }}
                >
                  <div style={{ fontWeight: '700', fontSize: '0.85rem' }}>{t.sizeGrand}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--accent-gold)' }}>+ $70</div>
                </button>
              </div>
            </div>

            {/* Quantity Selector & Price */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '24px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <button
                  type="button"
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  style={{
                    width: '32px', height: '32px', borderRadius: '50%',
                    background: 'rgba(255,255,255,0.1)', border: 'none',
                    color: '#FFF', fontSize: '1.1rem', cursor: 'pointer'
                  }}
                >-</button>
                <span style={{ fontWeight: '700', width: '24px', textAlign: 'center' }}>{qty}</span>
                <button
                  type="button"
                  onClick={() => setQty(qty + 1)}
                  style={{
                    width: '32px', height: '32px', borderRadius: '50%',
                    background: 'rgba(255,255,255,0.1)', border: 'none',
                    color: '#FFF', fontSize: '1.1rem', cursor: 'pointer'
                  }}
                >+</button>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{t.total}</div>
                <div style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--accent-gold)' }}>
                  ${totalPrice}
                </div>
              </div>
            </div>

            {/* Care Guide Note */}
            <div style={{
              background: 'rgba(27, 77, 62, 0.2)',
              border: '1px solid rgba(143, 255, 225, 0.2)',
              padding: '12px 16px',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.8rem',
              color: '#8FFFE1',
              marginBottom: '24px'
            }}>
              🌿 <strong>{t.careGuideTitle}:</strong> {t.careGuideDesc}
            </div>

            {/* Add to Cart CTA */}
            <button
              onClick={handleAdd}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', padding: '16px' }}
            >
              <span>🛒</span>
              <span>{t.addToCart} (${totalPrice})</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
