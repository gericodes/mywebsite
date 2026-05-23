// ── LISTINGS DATA ──────────────────────────────────────────────────────────
// This is the single source of truth for all property listings.
// Both obiavi.html and index.html use this file.
//
// TO ADD A NEW LISTING: copy an existing entry, increment the id,
// fill in the details, and save. It will automatically appear on both pages.
// ───────────────────────────────────────────────────────────────────────────

const LISTINGS = [
  {
    id: 1,
    deal: 'rent',
    city: 'plovdiv',
    cityLabel: 'Пловдив',
    type: 'apartment',
    typeLabel: '🏢 Апартамент',
    price: '380',
    priceUnit: '€ / месец',
    priceRaw: 380,
    size: 50,
    isNew: true,
    featured: false,
    title: 'Под наем! Нов, напълно обзаведен!',
    location: '📍 Западен, Пловдив',
    img: 'https://github.com/gericodes/mywebsite/blob/main/1/1.jpg?raw=true',
    feats: ['🛏 1 стая', '🚿 1 баня', '📐 50 м²', '🅿️ възможност за наемане'],
    href: 'listing.html?id=1'
  },
  {
    id: 2,
    deal: 'sell',
    city: 'asenovgrad',
    cityLabel: 'Асеновград',
    type: 'apartment',
    typeLabel: '🏢 Апартамент',
    price: '70 000',
    priceUnit: '€',
    priceRaw: 70000,
    size: 72,
    isNew: false,
    featured: false,
    title: 'двустаен и магазин',
    location: '📍 Асеновград',
    img: 'https://github.com/gericodes/mywebsite/blob/main/2/1.jpg?raw=true',
    feats: ['🛏 3 стаи', '🚿 1 баня', '📐 72 м²'],
    href: 'listing.html?id=2'
  },
  {
    id: 3,
    deal: 'sell',
    city: 'drugi',
    cityLabel: 'Други',
    type: 'apartment',
    typeLabel: '🏢 Апартамент',
    price: '352 000',
    priceUnit: '€',
    priceRaw: 352000,
    size: 110,
    isNew: true,
    featured: true,
    title: 'Луксозен тристаен апартамент с морска гледка',
    location: '📍 Морска градина, Варна',
    img: 'https://images.unsplash.com/photo-1565183928294-7063f23ce0f8?w=700&q=80',
    feats: ['🛏 3 стаи', '🚿 2 бани', '📐 110 м²', '🌊 Море'],
    href: 'listing.html?id=3'
  },
  {
    id: 4,
    deal: 'sell',
    city: 'asenovgrad',
    cityLabel: 'Асеновград',
    type: 'house',
    typeLabel: '🏡 Къща',
    price: '333 000',
    priceUnit: '€',
    priceRaw: 333000,
    size: 180,
    isNew: false,
    featured: false,
    title: 'Самостоятелна къща с голям двор и гараж',
    location: '📍 Център, Асеновград',
    img: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=80',
    feats: ['🛏 4 стаи', '🚿 2 бани', '📐 180 м²', '🌳 Двор'],
    href: 'listing.html?id=4'
  },
  {
    id: 5,
    deal: 'sell',
    city: 'drugi',
    cityLabel: 'с. Нови извор',
    type: 'house',
    typeLabel: '🏡 Къща',
    price: '149 000',
    priceUnit: '€',
    priceRaw: 149000,
    size: 190,
    isNew: false,
    featured: true,
    title: 'Реновирана селска къща с просторен облагороден двор',
    location: '📍 с.Нови извор, Пловдив',
    img: 'https://github.com/gericodes/mywebsite/blob/main/5/1.jpg?raw=true',
    feats: ['🛏 3 стаи', '🚿 1 баня', '📐 190 м²', '🌳 Двор'],
    href: 'listing.html?id=5'
  },
];

// Builds a card element from a listing object.
// mode: 'index' (simpler, click whole card) | 'obiavi' (with footer, filters)
function buildListingCard(listing, mode) {
  const dealLabel = listing.deal === 'rent' ? 'Под наем' : 'Продажба';
  const dealClass = listing.deal === 'rent' ? 'badge-rent' : 'badge-sell';
  const newBadge = listing.isNew ? '<span class="badge-new">Ново</span>' : '';
  const featsHtml = listing.feats.map(f => `<span class="feat">${f}</span>`).join('');

  const card = document.createElement('div');
  card.id = `listing-card-${listing.id}`;
  card.className = 'listing-card';
  card.dataset.deal = listing.deal;
  card.dataset.city = listing.city;
  card.dataset.type = listing.type;
  card.dataset.price = listing.priceRaw;
  card.dataset.size = listing.size;
  card.dataset.newest = listing.id;
  card.dataset.featured = listing.featured ? 'true' : 'false';

  card.innerHTML = `
    <div class="card-img" style="background-image:url('${listing.img}')">
      <div class="card-img-overlay"></div>
      <span class="card-type-badge ${dealClass}">${dealLabel}</span>
      ${newBadge}
    </div>
    <div class="card-body">
      <div class="card-top">
        <div>
          <div class="card-price">${listing.price} <span class="card-price-unit">${listing.priceUnit}</span></div>
        </div>
        <span class="card-city-tag">${listing.cityLabel}</span>
      </div>
      <div class="card-title">${listing.title}</div>
      <div class="card-location">${listing.location}</div>
      <div class="card-features">${featsHtml}</div>
    </div>
    <div class="card-footer">
      <span class="card-prop-type">${listing.typeLabel}</span>
      <a href="${listing.href}" class="card-cta">Детайли →</a>
    </div>`;

  card.style.cursor = 'pointer';
  card.addEventListener('click', e => {
    if (!e.target.closest('a')) window.location.href = listing.href;
  });

  return card;
}
