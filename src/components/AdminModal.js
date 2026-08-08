window.AdminModal = function AdminModal({
  isOpen,
  onClose,
  products,
  onAddProduct,
  onUpdateProduct,
  onDeleteProduct,
  onResetProducts,
  lang,
  t
}) {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = React.useState('list'); // 'list' | 'add' | 'export'
  const [editingId, setEditingId] = React.useState(null);

  // Form State
  const [nameEn, setNameEn] = React.useState('');
  const [nameKa, setNameKa] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [category, setCategory] = React.useState('Romance');
  const [color, setColor] = React.useState('Blush Pink');
  const [image, setImage] = React.useState('https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=1000&q=80');
  const [tag, setTag] = React.useState('New Bloom');
  const [isExpress, setIsExpress] = React.useState(true);
  const [descriptionEn, setDescriptionEn] = React.useState('');
  const [descriptionKa, setDescriptionKa] = React.useState('');

  const presetImages = [
    { label: 'Blush Roses', url: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=1000&q=80' },
    { label: 'Sunset Dahlias', url: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1000&q=80' },
    { label: 'White Peonies', url: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=1000&q=80' },
    { label: 'Midnight Orchids', url: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=1000&q=80' },
    { label: 'Pastel Meadow', url: 'https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&w=1000&q=80' },
    { label: 'Dried Pampas', url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80' }
  ];

  const handleEditClick = (p) => {
    setEditingId(p.id);
    setNameEn(p.nameEn);
    setNameKa(p.nameKa);
    setPrice(p.price);
    setCategory(p.category);
    setColor(p.color);
    setImage(p.image);
    setTag(p.tag || '');
    setIsExpress(p.isExpress);
    setDescriptionEn(p.descriptionEn);
    setDescriptionKa(p.descriptionKa);
    setActiveTab('add');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const productData = {
      id: editingId || ('fl-' + Date.now()),
      nameEn: nameEn || 'New Luxury Arrangement',
      nameKa: nameKa || 'ახალი ელეგანტური თაიგული',
      price: parseFloat(price) || 120,
      category,
      occasion: 'Anniversary',
      color,
      image: image || presetImages[0].url,
      tag,
      isExpress,
      rating: 5.0,
      reviewsCount: 1,
      descriptionEn: descriptionEn || 'Freshly cut stems arranged by master florists at 25th Ave studio.',
      descriptionKa: descriptionKa || 'ახალი ყვავილები დამზადებული ბრუკლინის ატელიეში.'
    };

    if (editingId) {
      onUpdateProduct(productData);
    } else {
      onAddProduct(productData);
    }

    // Reset Form
    setEditingId(null);
    setNameEn('');
    setNameKa('');
    setPrice('');
    setDescriptionEn('');
    setDescriptionKa('');
    setActiveTab('list');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="glass-panel"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '900px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '32px',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-lg)',
          position: 'relative'
        }}
      >
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '24px',
          paddingBottom: '16px',
          borderBottom: '1px solid var(--border-color)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '1.6rem' }}>🌸</span>
            <div>
              <h2 style={{ fontSize: '1.4rem', margin: 0, color: 'var(--accent-rose)' }}>
                {lang === 'ka' ? 'პროდუქტების მართვის პანელი' : 'Product Inventory CMS Manager'}
              </h2>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                {lang === 'ka' ? 'დაამატეთ ან შეცვალეთ ყვავილების კატალოგი' : 'Easily add, edit or remove flowers from store'}
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{ background: 'none', border: 'none', color: '#FFF', fontSize: '1.4rem', cursor: 'pointer' }}
          >
            ✕
          </button>
        </div>

        {/* Tab Controls */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '24px' }}>
          <button
            onClick={() => { setEditingId(null); setActiveTab('list'); }}
            style={{
              padding: '10px 20px', borderRadius: 'var(--radius-full)', fontWeight: '700', fontSize: '0.85rem', cursor: 'pointer',
              background: activeTab === 'list' ? 'var(--accent-rose)' : 'rgba(255,255,255,0.05)',
              color: activeTab === 'list' ? '#000' : 'var(--text-primary)', border: 'none'
            }}
          >
            📋 {lang === 'ka' ? 'არსებული ყვავილები' : 'All Flowers'} ({products.length})
          </button>

          <button
            onClick={() => { setEditingId(null); setActiveTab('add'); }}
            style={{
              padding: '10px 20px', borderRadius: 'var(--radius-full)', fontWeight: '700', fontSize: '0.85rem', cursor: 'pointer',
              background: activeTab === 'add' ? 'var(--accent-rose)' : 'rgba(255,255,255,0.05)',
              color: activeTab === 'add' ? '#000' : 'var(--text-primary)', border: 'none'
            }}
          >
            ➕ {lang === 'ka' ? 'ახალი ყვავილის დამატება' : 'Add New Flower'}
          </button>

          <button
            onClick={() => setActiveTab('export')}
            style={{
              padding: '10px 20px', borderRadius: 'var(--radius-full)', fontWeight: '700', fontSize: '0.85rem', cursor: 'pointer',
              background: activeTab === 'export' ? 'var(--accent-rose)' : 'rgba(255,255,255,0.05)',
              color: activeTab === 'export' ? '#000' : 'var(--text-primary)', border: 'none'
            }}
          >
            💾 {lang === 'ka' ? 'მონაცემების შენახვა / აღდგენა' : 'Export / Reset'}
          </button>
        </div>

        {/* TAB 1: PRODUCT LIST */}
        {activeTab === 'list' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '16px' }}>
            {products.map(p => (
              <div
                key={p.id}
                style={{
                  background: 'rgba(0,0,0,0.4)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                  padding: '14px',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <img
                  src={p.image}
                  alt={p.nameEn}
                  style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '8px', marginBottom: '10px' }}
                />
                <div style={{ fontWeight: '700', fontSize: '0.95rem', marginBottom: '4px' }}>
                  {lang === 'ka' ? p.nameKa : p.nameEn}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', fontWeight: '800', marginBottom: '10px' }}>
                  ${p.price} • {p.category}
                </div>

                <div style={{ marginTop: 'auto', display: 'flex', gap: '8px' }}>
                  <button
                    onClick={() => handleEditClick(p)}
                    style={{
                      flex: 1, padding: '6px', background: 'rgba(255,255,255,0.1)',
                      border: 'none', color: '#FFF', borderRadius: '4px', cursor: 'pointer', fontSize: '0.8rem'
                    }}
                  >
                    ✏️ {lang === 'ka' ? 'შეცვლა' : 'Edit'}
                  </button>
                  <button
                    onClick={() => onDeleteProduct(p.id)}
                    style={{
                      padding: '6px 12px', background: 'rgba(255,85,85,0.2)',
                      border: '1px solid #FF5555', color: '#FF5555', borderRadius: '4px', cursor: 'pointer', fontSize: '0.8rem'
                    }}
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: ADD / EDIT FORM */}
        {activeTab === 'add' && (
          <form onSubmit={handleFormSubmit} style={{ display: 'grid', gap: '16px' }}>
            <h3 style={{ fontSize: '1.1rem', color: 'var(--accent-gold)' }}>
              {editingId ? (lang === 'ka' ? 'ყვავილის რედაქტირება' : 'Edit Flower Product') : (lang === 'ka' ? 'ახალი ყვავილის დამატება' : 'Add New Flower Product')}
            </h3>

            {/* Names */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div>
                <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '4px' }}>
                  {lang === 'ka' ? 'სახელი (ქართულად):' : 'Name (Georgian):'}
                </label>
                <input
                  type="text"
                  required
                  placeholder="მაგ: ბრუკლინ ვარდების ნაკრები"
                  value={nameKa}
                  onChange={(e) => setNameKa(e.target.value)}
                  style={{
                    width: '100%', padding: '10px', background: 'rgba(0,0,0,0.3)',
                    border: '1px solid var(--border-color)', color: '#FFF', borderRadius: '8px'
                  }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '4px' }}>
                  {lang === 'ka' ? 'სახელი (ინგლისურად):' : 'Name (English):'}
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Brooklyn Velvet Rose Symphony"
                  value={nameEn}
                  onChange={(e) => setNameEn(e.target.value)}
                  style={{
                    width: '100%', padding: '10px', background: 'rgba(0,0,0,0.3)',
                    border: '1px solid var(--border-color)', color: '#FFF', borderRadius: '8px'
                  }}
                />
              </div>
            </div>

            {/* Price & Category */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
              <div>
                <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '4px' }}>
                  {lang === 'ka' ? 'ფასი ($ USD):' : 'Price ($ USD):'}
                </label>
                <input
                  type="number"
                  required
                  placeholder="145"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  style={{
                    width: '100%', padding: '10px', background: 'rgba(0,0,0,0.3)',
                    border: '1px solid var(--border-color)', color: '#FFF', borderRadius: '8px'
                  }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '4px' }}>
                  {lang === 'ka' ? 'კატეგორია:' : 'Category:'}
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  style={{
                    width: '100%', padding: '10px', background: 'rgba(0,0,0,0.4)',
                    border: '1px solid var(--border-color)', color: '#FFF', borderRadius: '8px'
                  }}
                >
                  <option value="Romance">Romance</option>
                  <option value="Everyday Luxury">Everyday Luxury</option>
                  <option value="Weddings & Events">Weddings & Events</option>
                  <option value="Dried Botanical">Dried Botanical</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '4px' }}>
                  {lang === 'ka' ? 'ფერი:' : 'Color Palette:'}
                </label>
                <select
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  style={{
                    width: '100%', padding: '10px', background: 'rgba(0,0,0,0.4)',
                    border: '1px solid var(--border-color)', color: '#FFF', borderRadius: '8px'
                  }}
                >
                  <option value="Blush Pink">Blush Pink</option>
                  <option value="Cream White">Cream White</option>
                  <option value="Deep Red">Deep Red</option>
                  <option value="Vibrant Sunset">Vibrant Sunset</option>
                </select>
              </div>
            </div>

            {/* Image URL & Presets */}
            <div>
              <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '4px' }}>
                {lang === 'ka' ? 'ფოტოს ბმული (Image URL):' : 'Image URL:'}
              </label>
              <input
                type="text"
                required
                value={image}
                onChange={(e) => setImage(e.target.value)}
                style={{
                  width: '100%', padding: '10px', background: 'rgba(0,0,0,0.3)',
                  border: '1px solid var(--border-color)', color: '#FFF', borderRadius: '8px', marginBottom: '8px'
                }}
              />

              {/* Quick Image Presets */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  {lang === 'ka' ? 'ან აირჩიეთ მზა ფოტო:' : 'Or choose preset photo:'}
                </span>
                {presetImages.map(p => (
                  <button
                    key={p.label}
                    type="button"
                    onClick={() => setImage(p.url)}
                    style={{
                      background: 'rgba(255,255,255,0.08)', border: '1px solid var(--border-color)',
                      color: 'var(--text-secondary)', padding: '4px 10px', borderRadius: '12px', fontSize: '0.75rem', cursor: 'pointer'
                    }}
                  >
                    🌸 {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tag & Express Checkbox */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '12px', alignItems: 'center' }}>
              <div>
                <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '4px' }}>
                  {lang === 'ka' ? 'თეგი / ბეჯი:' : 'Tag Badge:'}
                </label>
                <input
                  type="text"
                  placeholder="e.g. Best Seller, 2026 Trend, Limited"
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                  style={{
                    width: '100%', padding: '10px', background: 'rgba(0,0,0,0.3)',
                    border: '1px solid var(--border-color)', color: '#FFF', borderRadius: '8px'
                  }}
                />
              </div>

              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', marginTop: '16px' }}>
                <input
                  type="checkbox"
                  checked={isExpress}
                  onChange={(e) => setIsExpress(e.target.checked)}
                  style={{ accentColor: 'var(--accent-gold)' }}
                />
                <span style={{ fontSize: '0.85rem' }}>⚡ Express Brooklyn Delivery</span>
              </label>
            </div>

            {/* Descriptions */}
            <div>
              <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '4px' }}>
                {lang === 'ka' ? 'აღწერა (ქართულად):' : 'Description (Georgian):'}
              </label>
              <textarea
                rows={2}
                value={descriptionKa}
                onChange={(e) => setDescriptionKa(e.target.value)}
                style={{
                  width: '100%', padding: '10px', background: 'rgba(0,0,0,0.3)',
                  border: '1px solid var(--border-color)', color: '#FFF', borderRadius: '8px', resize: 'none'
                }}
              />
            </div>

            <div>
              <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '4px' }}>
                {lang === 'ka' ? 'აღწერა (ინგლისურად):' : 'Description (English):'}
              </label>
              <textarea
                rows={2}
                value={descriptionEn}
                onChange={(e) => setDescriptionEn(e.target.value)}
                style={{
                  width: '100%', padding: '10px', background: 'rgba(0,0,0,0.3)',
                  border: '1px solid var(--border-color)', color: '#FFF', borderRadius: '8px', resize: 'none'
                }}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn-primary"
              style={{ padding: '14px', justifyContent: 'center', fontSize: '1rem', marginTop: '8px' }}
            >
              💾 {editingId ? (lang === 'ka' ? 'ცვლილებების შენახვა' : 'Save Changes') : (lang === 'ka' ? 'პროდუქტის დამატება' : 'Add Product to Catalog')}
            </button>
          </form>
        )}

        {/* TAB 3: EXPORT & RESET */}
        {activeTab === 'export' && (
          <div style={{ textAlign: 'center', padding: '30px 20px' }}>
            <h3 style={{ marginBottom: '16px', color: 'var(--accent-gold)' }}>
              {lang === 'ka' ? 'მონაცემთა მართვა & სარეზერვო ასლი' : 'Backup & Reset Settings'}
            </h3>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto 24px', fontSize: '0.9rem' }}>
              {lang === 'ka'
                ? 'შეგიძლიათ ჩამოტვირთოთ ყვავილების სია JSON ფაილად ან აღადგინოთ თავდაპირველი კატალოგი.'
                : 'Download your active catalog as a JSON file or restore the original factory demo products.'}
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button
                onClick={() => {
                  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(products, null, 2));
                  const downloadAnchor = document.createElement('a');
                  downloadAnchor.setAttribute("href", dataStr);
                  downloadAnchor.setAttribute("download", "bloom25_products.json");
                  document.body.appendChild(downloadAnchor);
                  downloadAnchor.click();
                  downloadAnchor.remove();
                }}
                className="btn-primary"
              >
                📥 {lang === 'ka' ? 'JSON ფაილის გადმოწერა' : 'Export JSON Catalog'}
              </button>

              <button
                onClick={onResetProducts}
                style={{
                  padding: '12px 24px', borderRadius: 'var(--radius-full)', background: 'rgba(255,85,85,0.2)',
                  border: '1px solid #FF5555', color: '#FF5555', fontWeight: '700', cursor: 'pointer'
                }}
              >
                🔄 {lang === 'ka' ? 'თავდაპირველ სიაზე დაბრუნება' : 'Reset to Default Products'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
