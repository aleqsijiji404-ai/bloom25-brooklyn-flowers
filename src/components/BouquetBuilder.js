window.BouquetBuilder = function BouquetBuilder({ t, lang, onAddToCart }) {
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
      if (selectedFlowers.length > 1) {
        setSelectedFlowers(selectedFlowers.filter(f => f !== name));
      }
    } else {
      setSelectedFlowers([...selectedFlowers, name]);
    }
  };

  // Base $30 + flowers sum + foliage + vase
  const flowersPrice = selectedFlowers.reduce((acc, name) => {
    const item = flowersList.find(f => f.name === name);
    return acc + (item ? item.price : 0);
  }, 0);

  const foliagePrice = (foliageList.find(f => f.name === selectedFoliage) || { price: 0 }).price;
  const vasePrice = (vaseList.find(v => v.name === selectedVase) || { price: 0 }).price;
  const totalBuilderPrice = flowersPrice + foliagePrice + vasePrice;

  const handleAddCustomToCart = () => {
    const customItem = {
      id: 'custom-' + Date.now(),
      nameEn: `Custom Atelier Arrangement (${selectedFlowers.join(', ')})`,
      nameKa: `ინდივიდუალური ატელიეს თაიგული (${selectedFlowers.join(', ')})`,
      price: totalBuilderPrice,
      category: 'Custom Atelier',
      image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80',
      customNote: customNote,
      details: `${selectedFoliage} • ${selectedVase}`
    };

    onAddToCart(customItem, 'custom', 1);
  };

  return (
    <section id="builder" style={{ padding: '80px 24px', maxWidth: '1100px', margin: '0 auto' }}>
      <div className="glass-panel" style={{ padding: '40px 32px', position: 'relative', overflow: 'hidden' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <div style={{
            color: 'var(--accent-gold)',
            fontSize: '0.85rem',
            fontWeight: '700',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '8px'
          }}>
            🎨 {t.builderSub}
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
            {t.builderTitle}
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '8px auto 0' }}>
            {t.builderDesc}
          </p>
        </div>

        {/* Step Indicator */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          marginBottom: '40px',
          flexWrap: 'wrap'
        }}>
          {[1, 2, 3, 4].map(s => (
            <div
              key={s}
              onClick={() => setStep(s)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 18px',
                borderRadius: 'var(--radius-full)',
                background: step === s ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)',
                color: step === s ? '#000' : 'var(--text-secondary)',
                fontWeight: '700',
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'var(--transition)'
              }}
            >
              <span>{s}.</span>
              <span>
                {s === 1 ? t.step1Title : s === 2 ? t.step2Title : s === 3 ? t.step3Title : t.step4Title}
              </span>
            </div>
          ))}
        </div>

        {/* Step 1: Select Main Flowers */}
        {step === 1 && (
          <div>
            <h3 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '1.2rem' }}>
              {t.step1Sub}
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
              {flowersList.map(item => {
                const isSelected = selectedFlowers.includes(item.name);
                return (
                  <div
                    key={item.name}
                    onClick={() => toggleFlower(item.name)}
                    style={{
                      background: isSelected ? 'var(--accent-glow)' : 'rgba(0,0,0,0.3)',
                      border: isSelected ? '2px solid var(--accent-gold)' : '1px solid var(--border-color)',
                      padding: '24px',
                      borderRadius: 'var(--radius-md)',
                      textAlign: 'center',
                      cursor: 'pointer',
                      transition: 'var(--transition)'
                    }}
                  >
                    <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>{item.icon}</div>
                    <div style={{ fontWeight: '700', color: 'var(--text-primary)' }}>{item.name}</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--accent-gold)', marginTop: '4px' }}>
                      +${item.price}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 2: Select Foliage */}
        {step === 2 && (
          <div>
            <h3 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '1.2rem' }}>
              {t.step2Sub}
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
              {foliageList.map(item => {
                const isSelected = selectedFoliage === item.name;
                return (
                  <div
                    key={item.name}
                    onClick={() => setSelectedFoliage(item.name)}
                    style={{
                      background: isSelected ? 'var(--accent-glow)' : 'rgba(0,0,0,0.3)',
                      border: isSelected ? '2px solid var(--accent-gold)' : '1px solid var(--border-color)',
                      padding: '24px',
                      borderRadius: 'var(--radius-md)',
                      textAlign: 'center',
                      cursor: 'pointer',
                      transition: 'var(--transition)'
                    }}
                  >
                    <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>{item.icon}</div>
                    <div style={{ fontWeight: '700', color: 'var(--text-primary)' }}>{item.name}</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--accent-gold)', marginTop: '4px' }}>
                      +${item.price}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 3: Select Vase / Wrap */}
        {step === 3 && (
          <div>
            <h3 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '1.2rem' }}>
              {t.step3Sub}
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
              {vaseList.map(item => {
                const isSelected = selectedVase === item.name;
                return (
                  <div
                    key={item.name}
                    onClick={() => setSelectedVase(item.name)}
                    style={{
                      background: isSelected ? 'var(--accent-glow)' : 'rgba(0,0,0,0.3)',
                      border: isSelected ? '2px solid var(--accent-gold)' : '1px solid var(--border-color)',
                      padding: '24px',
                      borderRadius: 'var(--radius-md)',
                      textAlign: 'center',
                      cursor: 'pointer',
                      transition: 'var(--transition)'
                    }}
                  >
                    <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>{item.icon}</div>
                    <div style={{ fontWeight: '700', color: 'var(--text-primary)' }}>{item.name}</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--accent-gold)', marginTop: '4px' }}>
                      +${item.price}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 4: Card Message & Final Preview */}
        {step === 4 && (
          <div>
            <h3 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '1.2rem' }}>
              💌 {t.step4Sub}
            </h3>
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
              <textarea
                placeholder={t.cardNotePlaceholder}
                value={customNote}
                onChange={(e) => setCustomNote(e.target.value)}
                rows={4}
                style={{
                  width: '100%',
                  background: 'rgba(0,0,0,0.4)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-primary)',
                  padding: '16px',
                  borderRadius: 'var(--radius-md)',
                  fontFamily: 'var(--font-editorial)',
                  fontSize: '1.1rem',
                  outline: 'none',
                  resize: 'none',
                  marginBottom: '20px'
                }}
              />
            </div>
          </div>
        )}

        {/* Controls Footer */}
        <div style={{
          marginTop: '40px',
          paddingTop: '24px',
          borderTop: '1px solid var(--border-color)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block' }}>
              {t.customPriceTotal}:
            </span>
            <span style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--accent-gold)', fontFamily: 'var(--font-heading)' }}>
              ${totalBuilderPrice}
            </span>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            {step > 1 && (
              <button onClick={() => setStep(step - 1)} className="btn-secondary">
                ← {t.back}
              </button>
            )}

            {step < 4 ? (
              <button onClick={() => setStep(step + 1)} className="btn-primary">
                {t.nextStep} →
              </button>
            ) : (
              <button onClick={handleAddCustomToCart} className="btn-primary">
                ✨ {t.addCustomToCart}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
