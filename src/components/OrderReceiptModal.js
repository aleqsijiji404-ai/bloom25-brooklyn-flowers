window.OrderReceiptModal = function OrderReceiptModal({ order, onClose, lang, t }) {
  if (!order) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="glass-panel"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '650px',
          width: '100%',
          padding: '36px',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-lg)',
          position: 'relative'
        }}
      >
        {/* Success Header */}
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div style={{
            width: '64px', height: '64px', borderRadius: '50%',
            background: 'linear-gradient(135deg, #1B4D3E 0%, #0D261F 100%)',
            border: '2px solid #8FFFE1',
            color: '#8FFFE1',
            fontSize: '2rem',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 16px',
            boxShadow: '0 0 20px rgba(143, 255, 225, 0.3)'
          }}>
            ✓
          </div>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '4px' }}>
            {t.orderSuccessTitle}
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            {t.orderSuccessSub} #{order.orderId}
          </p>
        </div>

        {/* Printable Order Receipt Box */}
        <div style={{
          background: 'rgba(0,0,0,0.5)',
          border: '1px solid var(--border-gold)',
          borderRadius: 'var(--radius-md)',
          padding: '24px',
          marginBottom: '24px'
        }}>
          {/* Header info */}
          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px', marginBottom: '16px' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: '700', color: 'var(--accent-gold)' }}>
                BLOOM 25 FLORAL ATELIER
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                25th Ave, Brooklyn, NY 11214
              </div>
            </div>
            <div style={{ textAlign: 'right', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              <div>{order.createdAt}</div>
              <div style={{ color: '#8FFFE1', fontWeight: '600' }}>Status: Confirmed</div>
            </div>
          </div>

          {/* Delivery Details */}
          <div style={{ fontSize: '0.85rem', marginBottom: '16px' }}>
            <div><strong>Recipient:</strong> {order.recipientName}</div>
            <div><strong>Address:</strong> {order.address}</div>
            <div><strong>Delivery Slot:</strong> {order.deliveryTime}</div>
            {order.cardMsg && (
              <div style={{
                marginTop: '8px', padding: '10px', background: 'rgba(212,175,55,0.08)',
                borderLeft: '3px solid var(--accent-gold)', fontStyle: 'italic'
              }}>
                " {order.cardMsg} "
              </div>
            )}
          </div>

          {/* Items Table */}
          <div style={{ borderTop: '1px dashed var(--border-color)', paddingTop: '12px', marginBottom: '16px' }}>
            {order.items.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '6px' }}>
                <span>{item.quantity}x {lang === 'ka' ? item.nameKa : item.nameEn}</span>
                <span style={{ fontWeight: '600' }}>${item.price * item.quantity}</span>
              </div>
            ))}
          </div>

          {/* Total Breakdown */}
          <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '12px', fontSize: '0.9rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px', color: 'var(--text-secondary)' }}>
              <span>Subtotal:</span>
              <span>${order.subtotal}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', color: 'var(--text-secondary)' }}>
              <span>Delivery (Brooklyn):</span>
              <span>{order.deliveryFee === 0 ? 'FREE' : `$${order.deliveryFee}`}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', fontWeight: '800', color: 'var(--accent-gold)' }}>
              <span>Total Paid:</span>
              <span>${order.total}</span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '12px' }}>
          <button
            onClick={() => window.print()}
            className="btn-secondary"
            style={{ flex: 1, justifyContent: 'center' }}
          >
            🖨️ {t.printReceipt}
          </button>
          <button
            onClick={onClose}
            className="btn-primary"
            style={{ flex: 1, justifyContent: 'center' }}
          >
            ✓ {t.done}
          </button>
        </div>
      </div>
    </div>
  );
};
