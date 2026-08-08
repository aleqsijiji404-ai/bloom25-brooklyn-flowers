window.Footer = function Footer({ lang, t }) {
  return (
    <footer id="location" style={{
      background: '#07080A',
      borderTop: '1px solid var(--border-color)',
      padding: '80px 24px 40px',
      color: 'var(--text-secondary)'
    }}>
      <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '40px',
          marginBottom: '60px'
        }}>
          {/* Col 1: Studio Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: '36px', height: '36px', borderRadius: '50%',
                background: 'linear-gradient(135deg, #D4AF37 0%, #8C6F12 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem'
              }}>
                🌸
              </div>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', color: '#FFF', fontWeight: '700' }}>
                BLOOM 25
              </span>
            </div>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '20px' }}>
              {t.footerBrandDesc}
            </p>
            <div style={{ color: 'var(--accent-gold)', fontSize: '0.85rem', fontWeight: '600' }}>
              📍 25th Ave, Brooklyn, NY 11214
            </div>
          </div>

          {/* Col 2: Studio Hours */}
          <div>
            <h4 style={{ color: '#FFF', fontSize: '1rem', fontFamily: 'var(--font-heading)', marginBottom: '16px' }}>
              🕒 {t.hoursTitle}
            </h4>
            <ul style={{ listStyle: 'none', fontSize: '0.88rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><strong>Monday - Saturday:</strong> 8:00 AM - 8:00 PM</li>
              <li><strong>Sunday:</strong> 9:00 AM - 6:00 PM</li>
              <li style={{ color: '#8FFFE1', marginTop: '6px' }}>
                ⚡ Same-Day Delivery Orders accepted until 5:00 PM daily.
              </li>
            </ul>
          </div>

          {/* Col 3: Delivery Neighborhoods */}
          <div>
            <h4 style={{ color: '#FFF', fontSize: '1rem', fontFamily: 'var(--font-heading)', marginBottom: '16px' }}>
              🚚 {t.deliveryZonesTitle}
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['25th Ave (Studio)', 'Park Slope', 'Brooklyn Heights', 'DUMBO', 'Williamsburg', 'Bay Ridge', 'Coney Island', 'Bensonhurst'].map(zone => (
                <span
                  key={zone}
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid var(--border-color)',
                    padding: '4px 10px',
                    borderRadius: '12px',
                    fontSize: '0.78rem',
                    color: 'var(--text-primary)'
                  }}
                >
                  {zone}
                </span>
              ))}
            </div>
          </div>

          {/* Col 4: Contact & Social */}
          <div>
            <h4 style={{ color: '#FFF', fontSize: '1rem', fontFamily: 'var(--font-heading)', marginBottom: '16px' }}>
              📞 {t.contactTitle}
            </h4>
            <ul style={{ listStyle: 'none', fontSize: '0.88rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>📱 <strong>Phone / WhatsApp:</strong> +1 (718) 555-BLOOM</li>
              <li>✉️ <strong>Email:</strong> hello@bloom25brooklyn.com</li>
              <li>📷 <strong>Instagram:</strong> @bloom25_brooklyn</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid var(--border-color)',
          paddingTop: '24px',
          display: 'flex',
          justify: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '0.8rem'
        }}>
          <div>
            © {new Date().getFullYear()} Bloom 25 Atelier • Brooklyn, NY. {t.allRightsReserved}
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <span>Crafted with ❤️ for Brooklyn Floral Lovers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
