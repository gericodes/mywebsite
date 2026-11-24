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
    city: 'ASENOVGRAD',
    cityLabel: 'АСЕНОВГРАД',
    type: 'shop',
    typeLabel: '🏢 Кафене/магазин',
    price: '500',
    priceUnit: '€ / месец',
    priceRaw: 500,
    size: 60,
    isNew: true,
    featured: false,
    title: 'Под наем! Напълно обзаведено!',
    location: '📍 стадиона, Асеновград',
    img: 'https://github.com/gericodes/mywebsite/blob/main/1/1.jpg?raw=true',
    feats: ['☕ 🥐 🍰 🧁 🍩 зала', '🚻 1 ', '📐 60 м²', '🔑 възможност за наемане'],
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
    feats: ['🛏 3 стаи', '📐 72 м²', '🏢 Етаж 1/3', '🧱 Стара тухла'],
    href: 'listing.html?id=2'
  },
  {
    id: 3,
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
    title: 'Къща в с.Нови извор, Пловдив',
    location: '📍 с.Нови извор, Пловдив',
    img: 'https://github.com/gericodes/mywebsite/blob/main/3/1.jpg?raw=true',
    feats: ['🛏 3 стаи', '🚿 1 баня', '📐 190 м²', '🌳 Двор'],
    href: 'listing.html?id=3'
  },
  {
    id: 5,
    deal: 'sell',
    city: 'asenovgrad',
    cityLabel: 'Асеновград',
    type: 'apartment',
    typeLabel: '🏢 Апартамент',
    price: '117 000',
    priceUnit: '€',
    priceRaw: 117000,
    size: 84,
    isNew: false,
    featured: false,
    title: 'Нов тристаен апартамент',
    location: '📍 Асеновград',
    img: 'https://github.com/gericodes/mywebsite/blob/main/5/1.jpg?raw=true',
    feats: ['🛏 3 стаи', '📐 84 м²'],
    href: 'listing.html?id=5'
  },
  {
    id: 6,
    deal: 'sell',
    city: 'drugi',
    cityLabel: 'Белащица',
    type: 'apartment',
    typeLabel: '🏢 Апартамент',
    price: '81 060',
    priceUnit: '€',
    priceRaw: 81060,
    size: 68,
    isNew: false,
    featured: false,
    title: 'Апартамент в Белащица',
    location: '📍 с. Белащица, Родопи',
    img: 'https://github.com/gericodes/mywebsite/blob/main/6/1.jpg?raw=true',
    feats: ['🛏 2 стаи', '📐 68 м²'],
    href: 'listing.html?id=6'
  },
  {
    id: 7,
    deal: 'sell',
    city: 'asenovgrad',
    cityLabel: 'Асеновград',
    type: 'apartment',
    typeLabel: '🏢 Апартамент',
    price: '73 500',
    priceUnit: '€',
    priceRaw: 73500,
    size: 70,
    isNew: true,
    featured: false,
    title: 'Продажба 2-стаен гр. Асеновград 70m²',
    location: '📍 кв. Запад, Асеновград',
    img: 'https://github.com/gericodes/mywebsite/blob/main/7/1.jpg?raw=true',
    feats: ['🛏 2 стаи', '📐 70 м²', '🏗 В строеж'],
    href: 'listing.html?id=7'
  },
  {
    id: 8,
    deal: 'sell',
    city: 'asenovgrad',
    cityLabel: 'Асеновград',
    type: 'apartment',
    typeLabel: '🏢 Апартамент',
    price: '73 000',
    priceUnit: '€',
    priceRaw: 73000,
    size: 73,
    isNew: true,
    featured: false,
    title: 'Продажба 2-стаен гр. Асеновград 73m²',
    location: '📍 Асеновград',
    img: 'https://github.com/gericodes/mywebsite/blob/main/8/1.jpg?raw=true',
    feats: ['🛏 2 стаи', '📐 73 м²', '🏗 В строеж'],
    href: 'listing.html?id=8'
  },
  {
    id: 9,
    deal: 'sell',
    city: 'asenovgrad',
    cityLabel: 'Асеновград',
    type: 'apartment',
    typeLabel: '🏢 Апартамент',
    price: '100 000',
    priceUnit: '€',
    priceRaw: 100000,
    size: 91,
    isNew: true,
    featured: false,
    title: 'Продажба 2-стаен гр. Асеновград 91m²',
    location: '📍 Асеновград',
    img: 'https://github.com/gericodes/mywebsite/blob/main/9/1.jpg?raw=true',
    feats: ['🛏 2 стаи', '📐 91 м²', '🏗 В строеж'],
    href: 'listing.html?id=9'
  },
  {
    id: 10,
    deal: 'sell',
    city: 'asenovgrad',
    cityLabel: 'Асеновград',
    type: 'apartment',
    typeLabel: '🏢 Апартамент',
    price: '65 340',
    priceUnit: '€',
    priceRaw: 65340,
    size: 66,
    isNew: true,
    featured: false,
    title: 'Продажба 2-стаен гр. Асеновград 66m²',
    location: '📍 Асеновград',
    img: 'https://github.com/gericodes/mywebsite/blob/main/10/1.jpg?raw=true',
    feats: ['🛏 2 стаи', '📐 66 м²', '🏗 В строеж'],
    href: 'listing.html?id=10'
  },
  {
    id: 11,
    deal: 'sell',
    city: 'asenovgrad',
    cityLabel: 'Асеновград',
    type: 'apartment',
    typeLabel: '🏢 Апартамент',
    price: '92 070',
    priceUnit: '€',
    priceRaw: 92070,
    size: 93,
    isNew: false,
    featured: false,
    title: 'Продажба 3-стаен гр. Асеновград 93m²',
    location: '📍 Асеновград',
    img: 'https://github.com/gericodes/mywebsite/blob/main/11/1.jpg?raw=true',
    feats: ['🛏 3 стаи', '📐 93 м²'],
    href: 'listing.html?id=11'
  },
  {
    id: 12,
    deal: 'sell',
    city: 'asenovgrad',
    cityLabel: 'Асеновград',
    type: 'apartment',
    typeLabel: '🏢 Апартамент',
    price: '110 000',
    priceUnit: '€',
    priceRaw: 110000,
    size: 100,
    isNew: false,
    featured: false,
    title: 'Продажба 3-стаен гр. Асеновград 100m²',
    location: '📍 Асеновград',
    img: 'https://github.com/gericodes/mywebsite/blob/main/12/1.jpg?raw=true',
    feats: ['🛏 3 стаи', '📐 100 м²'],
    href: 'listing.html?id=12'
  },
  {
    id: 13,
    deal: 'sell',
    city: 'drugi',
    cityLabel: 'с. Катуница',
    type: 'parcel',
    typeLabel: '🌍 Парцел',
    price: '31 642',
    priceUnit: '€',
    priceRaw: 31642,
    size: 4219,
    isNew: false,
    featured: false,
    title: 'Имот до с.Катуница',
    location: '📍 с. Катуница, Садово',
    img: 'https://github.com/gericodes/mywebsite/blob/main/13/1.jpg?raw=true',
    feats: ['🌍 Земя за инвестиция', '📐 4219 м²'],
    href: 'listing.html?id=13'
  },
  {
    id: 14,
    deal: 'sell',
    city: 'asenovgrad',
    cityLabel: 'Асеновград',
    type: 'apartment',
    typeLabel: '🏢 Апартамент',
    price: '80 000',
    priceUnit: '€',
    priceRaw: 80000,
    size: 80,
    isNew: false,
    featured: false,
    title: 'Компактен тристаен апартамент',
    location: '📍 Асеновград',
    img: 'https://github.com/gericodes/mywebsite/blob/main/14/1.jpg?raw=true',
    feats: ['🛏 3 стаи', '📐 80 м²'],
    href: 'listing.html?id=14'
  },
  {
    id: 15,
    deal: 'sell',
    city: 'asenovgrad',
    cityLabel: 'Асеновград',
    type: 'apartment',
    typeLabel: '🏢 Апартамент',
    price: '90 000',
    priceUnit: '€',
    priceRaw: 90000,
    size: 90,
    isNew: false,
    featured: false,
    title: 'Продажба 3-стаен гр. Асеновград 90m²',
    location: '📍 Асеновград',
    img: 'https://github.com/gericodes/mywebsite/blob/main/15/1.jpg?raw=true',
    feats: ['🛏 3 стаи', '📐 90 м²'],
    href: 'listing.html?id=15'
  },
  {
    id: 16,
    deal: 'sell',
    city: 'asenovgrad',
    cityLabel: 'Асеновград',
    type: 'apartment',
    typeLabel: '🏢 Апартамент',
    price: '84 700',
    priceUnit: '€',
    priceRaw: 84700,
    size: 71,
    isNew: false,
    featured: false,
    title: 'Продажба 2-стаен гр. Асеновград 71m²',
    location: '📍 Асеновград',
    img: 'https://github.com/gericodes/mywebsite/blob/main/16/1.jpg?raw=true',
    feats: ['🛏 2 стаи', '📐 71 м²', '🌳 Двор'],
    href: 'listing.html?id=16'
  },
  {
    id: 17,
    deal: 'sell',
    city: 'asenovgrad',
    cityLabel: 'Асеновград',
    type: 'parcel',
    typeLabel: '🌍 Парцел',
    price: '73 700',
    priceUnit: '€',
    priceRaw: 73700,
    size: 1440,
    isNew: false,
    featured: false,
    title: 'Продажба Парцел гр. Асеновград 1440m²',
    location: '📍 Асеновград',
    img: 'https://github.com/gericodes/mywebsite/blob/main/17/1.jpg?raw=true',
    feats: ['🌍 Парцел', '📐 1440 м²'],
    href: 'listing.html?id=17'
  },
  {
    id: 18,
    deal: 'sell',
    city: 'drugi',
    cityLabel: 'с. Крушово',
    type: 'house',
    typeLabel: '🏡 Къща',
    price: '39 900',
    priceUnit: '€',
    priceRaw: 39900,
    size: 189,
    isNew: false,
    featured: false,
    title: 'Продажба Къща гр. Лъки - с. Крушово 189m²',
    location: '📍 с. Крушово, гр. Лъки',
    img: 'https://github.com/gericodes/mywebsite/blob/main/18/1.jpg?raw=true',
    feats: ['🏡 Къща', '📐 189 м²'],
    href: 'listing.html?id=18'
  },
  {
    id: 19,
    deal: 'sell',
    city: 'drugi',
    cityLabel: 'с. Павелско',
    type: 'house',
    typeLabel: '🏡 Къща',
    price: '409 000',
    priceUnit: '€',
    priceRaw: 409000,
    size: 460,
    isNew: false,
    featured: false,
    title: 'Продажба Къща гр. Чепеларе - с. Павелско 460m²',
    location: '📍 с. Павелско, Чепеларе',
    img: 'https://github.com/gericodes/mywebsite/blob/main/19/1.jpg?raw=true',
    feats: ['🛏 8 стаи', '📐 460 м²'],
    href: 'listing.html?id=19'
  },
  {
    id: 20,
    deal: 'sell',
    city: 'drugi',
    cityLabel: 'гр. Куклен',
    type: 'parcel',
    typeLabel: '🌍 Парцел',
    price: '45 000',
    priceUnit: '€',
    priceRaw: 45000,
    size: 3998,
    isNew: false,
    featured: false,
    title: 'Земя подходяща за производство',
    location: '📍 гр. Куклен, Пловдив',
    img: 'https://github.com/gericodes/mywebsite/blob/main/20/1.jpg?raw=true',
    feats: ['🌍 Земя за производство', '📐 3998 м²'],
    href: 'listing.html?id=20'
  },
  {
    id: 21,
    deal: 'sell',
    city: 'asenovgrad',
    cityLabel: 'Асеновград',
    type: 'parcel',
    typeLabel: '🌍 Парцел',
    price: '126 000',
    priceUnit: '€',
    priceRaw: 126000,
    size: 6301,
    isNew: false,
    featured: false,
    title: 'Земя подходяща за промяна на статут',
    location: '📍 кв. Долни Воден, Асеновград',
    img: 'https://github.com/gericodes/mywebsite/blob/main/21/1.jpg?raw=true',
    feats: ['🌍 Земя за промяна на статут', '📐 6301 м²'],
    href: 'listing.html?id=21'
  },
  {
    id: 22,
    deal: 'sell',
    city: 'patriarh evtimovo',
    cityLabel: 'Патриарх Евтимово',
    type: 'house',
    typeLabel: '🏡 Къща',
    price: '60 000',
    priceUnit: '€',
    priceRaw: 60000,
    size: 1092,
    isNew: false,
    featured: false,
    title: 'Къща с голям двор',
    location: '📍 с. Патриарх Евтимово, Асеновград',
    img: 'https://github.com/gericodes/mywebsite/blob/main/22/1.jpg?raw=true',
    feats: ['🛏 5 стаи', '🏡 Къща', '🌳 Двор', '📐 1092 м²'],
    href: 'listing.html?id=22'
  },
  {
    id: 23,
    deal: 'sell',
    city: 'drugi',
    cityLabel: 'с. Милево',
    type: 'parcel',
    typeLabel: '🌍 Парцел',
    price: '110 000',
    priceUnit: '€',
    priceRaw: 110000,
    size: 10746,
    isNew: false,
    featured: false,
    title: 'Имот с голям потенциал на брега на река Марица',
    location: '📍 с. Милево, Садово',
    img: 'https://github.com/gericodes/mywebsite/blob/main/23/1.jpg?raw=true',
    feats: ['🌍 Земя за инвестиция', '💧 Бряг на Марица', '📐 10746 м²'],
    href: 'listing.html?id=23'
  },
  {
    id: 24,
    deal: 'rent',
    city: 'asenovgrad',
    cityLabel: 'Асеновград',
    type: 'drugi',
    typeLabel: '🏢 Други',
    price: '900',
    priceUnit: '€ / месец',
    priceRaw: 900,
    size: 300,
    isNew: false,
    featured: false,
    title: 'Магазин / Склад',
    location: '📍 Асеновград',
    img: 'https://github.com/gericodes/mywebsite/blob/main/24/1.jpg?raw=true',
    feats: ['🏪 Магазин / Склад', '📐 300 м²'],
    href: 'listing.html?id=24'
  },
  {
    id: 25,
    deal: 'sell',
    city: 'plovdiv',
    cityLabel: 'Пловдив',
    type: 'house',
    typeLabel: '🏡 Къща',
    price: '325 000',
    priceUnit: '€',
    priceRaw: 325000,
    size: 500,
    isNew: false,
    featured: false,
    title: 'Продажба Къща гр. Пловдив - Коматево 500m²',
    location: '📍 Коматево, Пловдив',
    img: 'https://github.com/gericodes/mywebsite/blob/main/25/1.jpg?raw=true',
    feats: ['🛏 4 стаи', '📐 500 м²'],
    href: 'listing.html?id=25'
  },
  {
    id: 26,
    deal: 'sell',
    city: 'asenovgrad',
    cityLabel: 'Асеновград',
    type: 'apartment',
    typeLabel: '🏢 Апартамент',
    price: '98 000',
    priceUnit: '€',
    priceRaw: 98000,
    size: 98,
    isNew: false,
    featured: false,
    title: 'Ново строителство двустаен апартамент с голяма тераса',
    location: '📍 Асеновград',
    img: 'https://github.com/gericodes/mywebsite/blob/main/26/1.jpg?raw=true',
    feats: ['🛏 2 стаи', '📐 98 м²', '🌿 Голяма тераса'],
    href: 'listing.html?id=26'
  },
  {
    id: 27,
    deal: 'sell',
    city: 'drugi',
    cityLabel: 'Белащица',
    type: 'apartment',
    typeLabel: '🏢 Апартамент',
    price: '141 000',
    priceUnit: '€',
    priceRaw: 141000,
    size: 117.67,
    isNew: false,
    featured: false,
    title: 'Продажба 3-стаен с. Белащица',
    location: '📍 с. Белащица, Родопи',
    img: 'https://github.com/gericodes/mywebsite/blob/main/27/1.jpg?raw=true',
    feats: ['🛏 3 стаи', '📐 117.67 м²'],
    href: 'listing.html?id=27'
  },
  {
    id: 28,
    deal: 'rent',
    city: 'plovdiv',
    cityLabel: 'Пловдив',
    type: 'drugi',
    typeLabel: '🅿️ Гараж',
    price: '80',
    priceUnit: '€ / месец',
    priceRaw: 80,
    size: 20,
    isNew: false,
    featured: false,
    title: 'Дава под наем гр. Пловдив 20m² (гараж)',
    location: '📍 Пловдив',
    img: 'https://github.com/gericodes/mywebsite/blob/main/28/1.jpg?raw=true',
    feats: ['🅿️ Гараж / Паркомясто', '📐 20 м²'],
    href: 'listing.html?id=28'
  },
  {
    id: 29,
    deal: 'rent',
    city: 'plovdiv',
    cityLabel: 'Пловдив',
    type: 'drugi',
    typeLabel: '🅿️ Гараж',
    price: '51.13',
    priceUnit: '€ / месец',
    priceRaw: 51.13,
    size: 20,
    isNew: false,
    featured: false,
    title: 'Дава под наем гр. Пловдив 20m² (2)',
    location: '📍 Пловдив',
    img: 'https://github.com/gericodes/mywebsite/blob/main/29/1.jpg?raw=true',
    feats: ['🅿️ Гараж / Паркомясто', '📐 20 м²'],
    href: 'listing.html?id=29'
  },
  {
    id: 30,
    deal: 'sell',
    city: 'asenovgrad',
    cityLabel: 'Асеновград',
    type: 'apartment',
    typeLabel: '🏢 Апартамент',
    price: '114 000',
    priceUnit: '€',
    priceRaw: 114000,
    size: 120,
    isNew: false,
    featured: false,
    title: 'Продажба 3-стаен гр. Асеновград 110m²',
    location: '📍 Асеновград',
    img: 'https://github.com/gericodes/mywebsite/blob/main/30/1.jpg?raw=true',
    feats: ['🛏 3 стаи', '📐 120 м²'],
    href: 'listing.html?id=30'
  },
  {
    id: 31,
    deal: 'sell',
    city: 'drugi',
    cityLabel: 'Белащица',
    type: 'apartment',
    typeLabel: '🏢 Апартамент',
    price: '88 680',
    priceUnit: '€',
    priceRaw: 88680,
    size: 73.9,
    isNew: false,
    featured: false,
    title: 'Продажба 2-стаен с. Белащица',
    location: '📍 с. Белащица, Родопи',
    img: 'https://github.com/gericodes/mywebsite/blob/main/31/1.jpg?raw=true',
    feats: ['🛏 2 стаи', '📐 74 м²'],
    href: 'listing.html?id=31'
  },
  {
    id: 32,
    deal: 'sell',
    city: 'asenovgrad',
    cityLabel: 'Асеновград',
    type: 'house',
    typeLabel: '🏡 Къща',
    price: '120 000',
    priceUnit: '€',
    priceRaw: 120000,
    size: 162,
    isNew: false,
    featured: false,
    title: 'Продажба Етаж от къща гр. Асеновград 162m²',
    location: '📍 Асеновград',
    img: 'https://github.com/gericodes/mywebsite/blob/main/32/1.jpg?raw=true',
    feats: ['🏡 Етаж от къща','🛏 3 стаи',  '📐 162 м²'],
    href: 'listing.html?id=32'
  },
  {
    id: 33,
    deal: 'sell',
    city: 'asenovgrad',
    cityLabel: 'Асеновград',
    type: 'parcel',
    typeLabel: '🌍 Парцел',
    price: '47 856.92',
    priceUnit: '€',
    priceRaw: 47856.92,
    size: 1560,
    isNew: false,
    featured: false,
    title: 'Продажба Парцел гр. Асеновград 1560m²',
    location: '📍 Асеновград',
    img: 'https://github.com/gericodes/mywebsite/blob/main/33/1.jpg?raw=true',
    feats: ['🌍 Парцел', '📐 1560 м²'],
    href: 'listing.html?id=33'
  },
  {
    id: 35,
    deal: 'sell',
    city: 'asenovgrad',
    cityLabel: 'Асеновград',
    type: 'parcel',
    typeLabel: '🌍 Парцел',
    price: '3 067.75',
    priceUnit: '€',
    priceRaw: 3067.75,
    size: 1152,
    isNew: false,
    featured: false,
    title: 'Продажба Земеделска земя гр. Асеновград 1152m²',
    location: '📍 Асеновград',
    img: 'https://github.com/gericodes/mywebsite/blob/main/35/1.jpg?raw=true',
    feats: ['🌍 Земеделска земя', '📐 1152 м²'],
    href: 'listing.html?id=35'
  },
  {
    id: 36,
    deal: 'sell',
    city: 'asenovgrad',
    cityLabel: 'Асеновград',
    type: 'parcel',
    typeLabel: '🌍 Парцел',
    price: '55 000',
    priceUnit: '€',
    priceRaw: 55000,
    size: 992,
    isNew: false,
    featured: false,
    title: 'Продажба Парцел гр. Асеновград 992m²',
    location: '📍 Асеновград',
    img: 'https://github.com/gericodes/mywebsite/blob/main/36/1.jpg?raw=true',
    feats: ['🌍 Парцел', '📐 992 м²'],
    href: 'listing.html?id=36'
  },
  {
    id: 37,
    deal: 'sell',
    city: 'asenovgrad',
    cityLabel: 'Асеновград',
    type: 'apartment',
    typeLabel: '🏢 Апартамент',
    price: '80 000',
    priceUnit: '€',
    priceRaw: 80000,
    size: 56,
    isNew: true,
    featured: true,
    title: 'Продажба 2-стаен вкв. Изток, гр. Асеновград',
    location: '📍 Асеновград',
    img: 'https://github.com/gericodes/mywebsite/blob/main/37/1.jpg?raw=true',
    feats: ['🛏 3 стаи', '📐 56 м²', '🏢 Таван и изба'],
    href: 'listing.html?id=37'
  },
  {
    id: 38,
    deal: 'sell',
    city: 'drugi',
    cityLabel: 'Нареченски бани',
    type: 'parcel',
    typeLabel: '🌍 Парцел',
    price: '20 452',
    priceUnit: '€',
    priceRaw: 20452,
    size: 327,
    isNew: false,
    featured: false,
    title: 'Продажба Парцел община Родопи - с. Нареченски бани 327m²',
    location: '📍 с. Нареченски бани, Родопи',
    img: 'https://github.com/gericodes/mywebsite/blob/main/38/1.jpg?raw=true',
    feats: ['🌍 Парцел', '📐 327 м²'],
    href: 'listing.html?id=38'
  },
  {
    id: 39,
    deal: 'sell',
    city: 'asenovgrad',
    cityLabel: 'Асеновград',
    type: 'parcel',
    typeLabel: '🌍 Парцел',
    price: '12 782.3',
    priceUnit: '€',
    priceRaw: 12782.3,
    size: 1319,
    isNew: false,
    featured: false,
    title: 'Продажба Парцел гр. Асеновград 1319m²',
    location: '📍 Асеновград',
    img: 'https://github.com/gericodes/mywebsite/blob/main/39/1.jpg?raw=true',
    feats: ['🌍 Парцел', '📐 1319 м²'],
    href: 'listing.html?id=39'
  },
  {
    id: 40,
    deal: 'sell',
    city: 'drugi',
    cityLabel: 'с. Милево',
    type: 'parcel',
    typeLabel: '🌍 Парцел',
    price: '102 000',
    priceUnit: '€',
    priceRaw: 102000,
    size: 4071,
    isNew: false,
    featured: false,
    title: 'Продажба Парцел община Родопи с. Милево 4071m²',
    location: '📍 с. Милево, Родопи',
    img: 'https://github.com/gericodes/mywebsite/blob/main/40/1.jpg?raw=true',
    feats: ['🌍 Парцел', '📐 4071 м²'],
    href: 'listing.html?id=40'
  },
  {
    id: 41,
    deal: 'sell',
    city: 'drugi',
    cityLabel: 'с. Поройна',
    type: 'house',
    typeLabel: '🏡 Къща',
    price: '75 000',
    priceUnit: '€',
    priceRaw: 75000,
    size: 130,
    isNew: false,
    featured: false,
    title: 'Продажба Къща с. Поройна 130m²',
    location: '📍 с. Поройна, Родопи',
    img: 'https://github.com/gericodes/mywebsite/blob/main/41/1.jpg?raw=true',
    feats: ['🏡 Къща', '📐 130 м²'],
    href: 'listing.html?id=41'
  },
  {
    id: 42,
    deal: 'sell',
    city: 'asenovgrad',
    cityLabel: 'Асеновград',
    type: 'house',
    typeLabel: '🏡 Къща',
    price: '51 000',
    priceUnit: '€',
    priceRaw: 51000,
    size: 64,
    isNew: false,
    featured: false,
    title: 'Продажба Къща гр. Асеновград 64m²',
    location: '📍 Асеновград',
    img: 'https://github.com/gericodes/mywebsite/blob/main/42/1.jpg?raw=true',
    feats: ['🏡 Къща', '📐 64 м²', '🌳 Двор'],
    href: 'listing.html?id=42'
  },
  {
    id: 43,
    deal: 'sell',
    city: 'drugi',
    cityLabel: 'с. Руен',
    type: 'parcel',
    typeLabel: '🌍 Парцел',
    price: '15 000',
    priceUnit: '€',
    priceRaw: 15000,
    size: 760,
    isNew: false,
    featured: false,
    title: 'Продажба Парцел община Родопи с. Руен 760m²',
    location: '📍 с. Руен, Родопи',
    img: 'https://github.com/gericodes/mywebsite/blob/main/43/1.jpg?raw=true',
    feats: ['🌍 Парцел', '📐 760 м²', '🌳 Двор'],
    href: 'listing.html?id=43'
  },
  {
    id: 44,
    deal: 'sell',
    city: 'asenovgrad',
    cityLabel: 'Асеновград',
    type: 'parcel',
    typeLabel: '🌍 Парцел',
    price: '25 565',
    priceUnit: '€',
    priceRaw: 25565,
    size: 980,
    isNew: false,
    featured: false,
    title: 'Продажба Парцел община Родопи с. Конуш 980m²',
    location: '📍 с. Конуш, Асеновград',
    img: 'https://github.com/gericodes/mywebsite/blob/main/44/1.jpg?raw=true',
    feats: ['🌍 Парцел', '📐 980 м²'],
    href: 'listing.html?id=44'
  },
  {
    id: 45,
    deal: 'sell',
    city: 'asenovgrad',
    cityLabel: 'Асеновград',
    type: 'parcel',
    typeLabel: '🌍 Парцел',
    price: '30 000',
    priceUnit: '€',
    priceRaw: 30000,
    size: 887,
    isNew: false,
    featured: false,
    title: 'Продажба Парцел община Родопи с. Сини връх 887m²',
    location: '📍 с. Сини връх, Асеновград',
    img: 'https://github.com/gericodes/mywebsite/blob/main/45/1.jpg?raw=true',
    feats: ['🌍 Парцел', '📐 887 м²'],
    href: 'listing.html?id=45'
  },
  {
    id: 46,
    deal: 'sell',
    city: 'asenovgrad',
    cityLabel: 'Асеновград',
    type: 'parcel',
    typeLabel: '🌍 Парцел',
    price: '92 033',
    priceUnit: '€',
    priceRaw: 92033,
    size: 1800,
    isNew: false,
    featured: false,
    title: 'Продажба Парцел гр. Асеновград 1800m²',
    location: '📍 Асеновград',
    img: 'https://github.com/gericodes/mywebsite/blob/main/46/1.jpg?raw=true',
    feats: ['🌍 Парцел', '📐 1800 м²'],
    href: 'listing.html?id=46'
  },
  {
    id: 48,
    deal: 'sell',
    city: 'asenovgrad',
    cityLabel: 'Асеновград',
    type: 'parcel',
    typeLabel: '🌍 Парцел',
    price: '69 025',
    priceUnit: '€',
    priceRaw: 69025,
    size: 9000,
    isNew: false,
    featured: false,
    title: 'Продажба Парцел гр. Асеновград 9000m²',
    location: '📍 с. Мулдава, Асеновград',
    img: 'https://github.com/gericodes/mywebsite/blob/main/48/1.jpg?raw=true',
    feats: ['🌍 Парцел', '📐 9000 м²'],
    href: 'listing.html?id=48'
  },
  {
    id: 49,
    deal: 'sell',
    city: 'asenovgrad',
    cityLabel: 'Асеновград',
    type: 'drugi',
    typeLabel: '🏢 Други',
    price: '580 000',
    priceUnit: '€',
    priceRaw: 580000,
    size: 927,
    isNew: false,
    featured: false,
    title: 'Цех за мебели в гр. Асеновград',
    location: '📍 Асеновград',
    img: 'https://github.com/gericodes/mywebsite/blob/main/49/1.jpg?raw=true',
    feats: ['🏭 Производствен цех','📐 927 м²'],
    href: 'listing.html?id=49'
  },  
  {
    id: 51,
    deal: 'sell',
    city: 'belashtitsa',
    cityLabel: 'БЕЛАЩИЦА',
    type: 'apartment',
    typeLabel: '🏢 Апартамент',
    price: '92 375',
    priceUnit: '€',
    priceRaw: 92375,
    size: 74,
    isNew: true,
    featured: true,
    title: 'Двустаен апартамент в нова сграда – Акт 14',
    location: '📍 с. Белащица',
    img: 'https://github.com/gericodes/mywebsite/blob/main/51/1.jpg?raw=true',
    feats: ['🛏 2 стаи', '📐 73,90 м²', '🏢 Етаж 2/3', '🏗 Акт 14'],
    href: 'listing.html?id=51'
  },
  {
    id: 52,
    deal: 'sell',
    city: 'borovo',
    cityLabel: 'БОРОВО',
    type: 'house',
    typeLabel: '🏡 Къща',
    price: '45 000',
    priceUnit: '€',
    priceRaw: 45000,
    size: 130,
    isNew: true,
    featured: false,
    title: 'Двуетажна къща в с. Борово до Кръстова гора',
    location: '📍 с. Борово, Асеновград',
    img: 'https://imotstatic4.focus.bg/imot/photosimotbg/1/247//big1/1j179544668354247_Ii.jpg',
    feats: ['🏡 Къща', '📐 130 м²', '🌳 Двор 200 м²', '🌲 До Кръстова гора'],
    href: 'listing.html?id=52'                                           
  }                          
  

];

// ── Помощни функции за визията на картите ──────────────────────────────────
const GH_RAW = /^https:\/\/github\.com\/gericodes\/mywebsite\/blob\/main\/([^?]+)\?raw=true$/;

// Снимките се зареждат директно от сайта (по-бързо), а за картите се
// използва компресирана .w.webp версия, ако има такава.
function localImg(url) {
  const m = GH_RAW.exec(url || '');
  return m ? '/' + m[1] : url;
}
function cardImg(listing) {
  if (listing.thumb) return listing.thumb;
  const m = GH_RAW.exec(listing.img || '');
  if (!m) return listing.img;
  return '/' + m[1].replace(/\.(jpe?g|png)$/i, '.w.webp');
}

const ICONS = {
  bed:   '<path d="M3 18v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6M3 18h18M3 18v2M21 18v2M6 10V7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"/>',
  area:  '<path d="M4 4h16v16H4z"/><path d="M4 9h3M4 14h3M9 4v3M14 4v3"/>',
  bath:  '<path d="M4 12h16v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-3zM6 12V6a2 2 0 0 1 4 0M7 19l-1 2M17 19l1 2"/>',
  tree:  '<path d="M12 22v-6M12 2l6 9h-3l4 5H5l4-5H6z"/>',
  crane: '<path d="M6 21V4l12 3M6 7h14M16 7v5M4 21h6"/>',
  park:  '<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M10 16V8h3a2.5 2.5 0 0 1 0 5h-3"/>',
  floor: '<path d="M4 21V5l8-3 8 3v16M4 21h16M9 9h2M13 9h2M9 13h2M13 13h2M10 21v-4h4v4"/>',
  land:  '<path d="M3 20l5-9 4 6 3-4 6 7z"/><circle cx="17" cy="6" r="2"/>',
  house: '<path d="M3 11l9-7 9 7M5 9.5V20h14V9.5M10 20v-5h4v5"/>',
  pin:   '<path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
  shop:  '<path d="M4 9l1.5-5h13L20 9M4 9h16M4 9v11h16V9M9 20v-6h6v6"/>',
  check: '<path d="M5 12l4 4 10-10"/>'
};
function icon(name) {
  return `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ICONS.check}</svg>`;
}
const EMOJI_ICON = [
  [/🛏/, 'bed'], [/📐/, 'area'], [/🚿|🛁|🚻/, 'bath'], [/🌳|🌲|🌿/, 'tree'],
  [/🏗/, 'crane'], [/🅿/, 'park'], [/🏢|🏬/, 'floor'], [/🌍|🌾/, 'land'],
  [/🏡|🏠/, 'house'], [/📍/, 'pin'], [/☕|🍰|🥐/, 'shop']
];
const EMOJI_RE = /[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}️‍]/gu;
// Превръща "🛏 3 стаи" в икона + текст
function featParts(text) {
  const t = String(text || '');
  let name = null;
  for (const [re, n] of EMOJI_ICON) { if (re.test(t)) { name = n; break; } }
  const clean = t.replace(EMOJI_RE, '').replace(/\s+/g, ' ').trim();
  return { name, clean };
}
function iconText(text, fallback) {
  const { name, clean } = featParts(text);
  if (!clean) return '';
  return `${icon(name || fallback || 'check')}<span>${clean}</span>`;
}
// "130000" -> "130 000"
function fmtPrice(p) {
  const s = String(p).replace(/\s/g, '');
  return /^\d+$/.test(s) ? s.replace(/\B(?=(\d{3})+(?!\d))/g, ' ') : p;
}
// Заглавия, изписани изцяло с главни букви, се показват нормално
function niceTitle(t) {
  t = String(t || '').trim();
  const letters = t.replace(/[^A-Za-zА-Яа-я]/g, '');
  if (letters.length > 6 && letters === letters.toUpperCase()) {
    t = t.toLowerCase();
    t = t.charAt(0).toUpperCase() + t.slice(1);
  }
  return t.replace(/(\d+)\s?m²/g, '$1 м²').replace(/(\d+)m2/g, '$1 м²');
}

// Builds a card element from a listing object.
// mode: 'index' (simpler, click whole card) | 'obiavi' (with footer, filters)
function buildListingCard(listing, mode) {
  const dealLabel = listing.deal === 'rent' ? 'Под наем' : 'Продажба';
  const dealClass = listing.deal === 'rent' ? 'badge-rent' : 'badge-sell';
  const newBadge = listing.isNew ? '<span class="badge-new">Ново</span>' : '';
  const featsHtml = (listing.feats || []).map(f => {
    const html = iconText(f);
    return html ? `<span class="feat">${html}</span>` : '';
  }).join('');
  const typeHtml = iconText(listing.typeLabel, 'house');
  const locHtml = iconText(listing.location, 'pin');
  const title = niceTitle(listing.title);

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

  const thumb = cardImg(listing);
  const full = localImg(listing.img);

  card.innerHTML = `
    <div class="card-img">
      <img class="card-photo" src="${thumb}" alt="${title.replace(/"/g, '&quot;')}" loading="lazy" decoding="async"
           onerror="if(this.src.indexOf('.w.webp')>-1){this.src='${full}'}else{this.parentNode.classList.add('no-photo')}">
      <div class="card-img-overlay"></div>
      <span class="card-type-badge ${dealClass}">${dealLabel}</span>
      ${newBadge}
    </div>
    <div class="card-body">
      <div class="card-top">
        <div>
          <div class="card-price">${fmtPrice(listing.price)} <span class="card-price-unit">${listing.priceUnit}</span></div>
        </div>
        <span class="card-city-tag">${listing.cityLabel}</span>
      </div>
      <div class="card-title">${title}</div>
      <div class="card-location">${locHtml}</div>
      <div class="card-features">${featsHtml}</div>
    </div>
    <div class="card-footer">
      <span class="card-prop-type">${typeHtml}</span>
      <a href="${listing.href}" class="card-cta">Детайли →</a>
    </div>`;

  card.style.cursor = 'pointer';
  card.addEventListener('click', e => {
    if (!e.target.closest('a')) window.location.href = listing.href;
  });

  return card;
}
