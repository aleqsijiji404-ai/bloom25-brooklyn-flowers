window.CartDrawer = function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQty,
  onRemoveItem,
  lang,
  t,
  onCompleteOrder
}) {
  if (!isOpen) return null;

  const [address, setAddress] = React.useState('25th Ave, Brooklyn, NY');
  const [zipCode, setZipCode] = React.useState('11214');
  const [deliveryDate, setDeliveryDate] = React.useState(new Date().toISOString().split('T')[0]);
  const [deliveryTime, setDeliveryTime] = React.useState('Today 2-Hour Express (Before 6 PM)');
  const [cardMsg, setCardMsg] = React.useState('');
  const [senderName, setSenderName] = React.useState('');
  const [recipientName, setRecipientName] = React.useState('');
  const [phone, setPhone] = React.useState('');

  // Delivery calculation based on Zip
  const deliveryFee = zipCode.trim() === '11214' ? 0 : zipCode.startsWith('112') ? 12 : 20;

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const total = subtotal + (cartItems.length > 0 ? deliveryFee : 0);

  const handleCheckout = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) return;

    const orderData = {
      orderId: 'B25-' + Math.floor(100000 + Math.random() * 900000),
      items: cartItems,
      subtotal,
      deliveryFee,
      total,
      recipientName: recipientName || 'Valued Client',
      senderName: senderName || 'Anonymous',
      address: `${address}, Zip: ${zipCode}`,
      phone: phone || '+1 (718) 555-0199',
      deliveryDate,
      deliveryTime,
      cardMsg,
      createdAt: new Date().toLocaleString()
    };

    onCompleteOrder(orderData);
  };

  return (
    <>
      <div className="drawer-overlay" onClick={onClose} />
      <div className="drawer-content">
        {/* Drawer Header */}
        <div style={{
          padding: '20px 24px',
          borderBottom: '1px solid var(--border-color)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'rgba(0,0,0,0.2)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '1.4rem' }}>🛒</span>
            <h3 style={{ fontSize: '1.2rem', margin: 0 }}>
              {t.yourCart} ({cartItems.reduce((acc, i) => acc + i.quantity, 0)})
            </h3>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'none', border: 'none', color: 'var(--text-secondary)',
              fontSize: '1.4rem', cursor: 'pointer'
            }}
          >
            ✕
          </button>
        </div>

        {/* Drawer Scrollable Body */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
          {cartItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-secondary)' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🌸</div>
              <h4>{t.cartEmptyTitle}</h4>
              <p style={{ fontSize: '0.85rem', marginTop: '6px' }}>{t.cartEmptyDesc}</p>
            </div>
          ) : (
            <div>
              {/* Item List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                {cartItems.map((item, idx) => {
                  const name = lang === 'ka' ? item.nameKa : item.nameEn;
                  return (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        gap: '14px',
                        padding: '12px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid var(--border-color)'
                      }}
                    >
                      <img
                        src={item.image}
                        alt={name}
                        style={{ width: '70px', height: '70px', borderRadius: '8px', objectFit: 'cover' }}
                      />
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                          <h4 style={{ fontSize: '0.95rem', fontWeight: '700', margin: 0 }}>{name}</h4>
                          <button
                            onClick={() => onRemoveItem(idx)}
                            style={{ background: 'none', border: 'none', color: '#FF5555', cursor: 'pointer', fontSize: '0.9rem' }}
                          >
                            🗑️
                          </button>
                        </div>

                        {item.size && (
                          <div style={{ fontSize: '0.75rem', color: 'var(--accent-gold)', margin: '2px 0' }}>
                            Size: {item.size.toUpperCase()}
                          </div>
                        )}

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <button
                              onClick={() => onUpdateQty(idx, item.quantity - 1)}
                              style={{ width: '24px', height: '24px', background: 'rgba(255,255,255,0.1)', border: 'none', color: '#FFF', borderRadius: '4px', cursor: 'pointer' }}
                            >-</button>
                            <span style={{ fontSize: '0.85rem', fontWeight: '700' }}>{item.quantity}</span>
                            <button
                              onClick={() => onUpdateQty(idx, item.quantity + 1)}
                              style={{ width: '24px', height: '24px', background: 'rgba(255,255,255,0.1)', border: 'none', color: '#FFF', borderRadius: '4px', cursor: 'pointer' }}
                            >+</button>
                          </div>
                          <span style={{ fontWeight: '700', color: 'var(--accent-gold)' }}>
                            ${item.price * item.quantity}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Delivery Details Form */}
              <form onSubmit={handleCheckout} style={{ borderTop: '1px solid var(--border-color)', paddingTop: '24px' }}>
                <h4 style={{ fontSize: '1rem', color: 'var(--accent-gold)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span>📍</span> {t.deliveryDetailsTitle}
                </h4>

                {/* Recipient Name */}
                <div style={{ marginBottom: '12px' }}>
                  <label style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '4px' }}>
                    {t.recipientName}:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Connor"
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                    style={{
                      width: '100%', padding: '10px 14px', background: 'rgba(0,0,0,0.3)',
                      border: '1px solid var(--border-color)', color: '#FFF', borderRadius: '8px', fontSize: '0.88rem'
                    }}
                  />
                </div>

                {/* Brooklyn Address & Zip */}
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '10px', marginBottom: '12px' }}>
                  <div>
                    <label style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '4px' }}>
                      {t.streetAddress}:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 25th Ave, Apt 4B"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      style={{
                        width: '100%', padding: '10px 14px', background: 'rgba(0,0,0,0.3)',
                        border: '1px solid var(--border-color)', color: '#FFF', borderRadius: '8px', fontSize: '0.88rem'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '4px' }}>
                      Zip Code:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="11214"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      style={{
                        width: '100%', padding: '10px 14px', background: 'rgba(0,0,0,0.3)',
                        border: '1px solid var(--border-color)', color: '#FFF', borderRadius: '8px', fontSize: '0.88rem'
                      }}
                    />
                  </div>
                </div>

                {/* Delivery Time Window */}
                <div style={{ marginBottom: '12px' }}>
                  <label style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '4px' }}>
                    {t.deliveryTimeWindow}:
                  </label>
                  <select
                    value={deliveryTime}
                    onChange={(e) => setDeliveryTime(e.target.value)}
                    style={{
                      width: '100%', padding: '10px 14px', background: 'rgba(0,0,0,0.4)',
                      border: '1px solid var(--border-color)', color: '#FFF', borderRadius: '8px', fontSize: '0.88rem'
                    }}
                  >
                    <option value="Today 2-Hour Express (Before 6 PM)">⚡ Today Express (Within 2 Hours)</option>
                    <option value="Tomorrow Morning (9 AM - 12 PM)">🌅 Tomorrow Morning (9 AM - 12 PM)</option>
                    <option value="Tomorrow Evening (4 PM - 8 PM)">🌆 Tomorrow Evening (4 PM - 8 PM)</option>
                  </select>
                </div>

                {/* Greeting Card Note */}
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '4px' }}>
                    💌 {t.giftNoteLabel}:
                  </label>
                  <textarea
                    placeholder="Write a loving card message..."
                    value={cardMsg}
                    onChange={(e) => setCardMsg(e.target.value)}
                    rows={3}
                    style={{
                      width: '100%', padding: '10px 14px', background: 'rgba(0,0,0,0.3)',
                      border: '1px solid var(--border-color)', color: '#FFF', borderRadius: '8px', fontSize: '0.88rem',
                      fontFamily: 'var(--font-editorial)', resize: 'none'
                    }}
                  />
                </div>

                {/* Cost Breakdown */}
                <div style={{ background: 'rgba(0,0,0,0.4)', padding: '16px', borderRadius: 'var(--radius-sm)', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '6px' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>{t.subtotal}:</span>
                    <span>${subtotal}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '8px' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>{t.deliveryFee} (Brooklyn):</span>
                    <span style={{ color: deliveryFee === 0 ? '#8FFFE1' : '#FFF' }}>
                      {deliveryFee === 0 ? 'FREE (25th Ave Special)' : `$${deliveryFee}`}
                    </span>
                  </div>
                  <div style={{
                    display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem',
                    fontWeight: '800', borderTop: '1px solid var(--border-color)', paddingTop: '10px'
                  }}>
                    <span>{t.total}:</span>
                    <span style={{ color: 'var(--accent-gold)' }}>${total}</span>
                  </div>
                </div>

                {/* Checkout Submit */}
                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center', padding: '16px', fontSize: '1rem' }}
                >
                  💳 {t.placeOrderBtn} (${total})
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
