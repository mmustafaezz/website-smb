// ---------- CONFIG ----------
const PHONE = '60139835152';
const BRAND = 'SMB Ventures';

// Map product / category names → detail page filenames
const PRODUCT_PAGES = {
  // Main featured products
  'Kopiah & Headwear':              'kopiah.html',
  'Jubah':                          'jubah.html',
  'Kain Pelikat':                   'pelikat.html',
  'Tudung':                         'tudung.html',
  'Set Solat':                      'set-solat.html',
  'Baju Kedah':                     'baju-kedah.html',
  'Baju Melayu dan Kurta':          'baju-melayu.html',
  'Kelengkapan Haji & Umrah':       'haji-umrah.html',
  // Catalog (Lagi Koleksi Pilihan)
  'Beg & Aksesori Travel Umrah':    'beg-travel.html',
  'Wangian Attar':                  'wangian-attar.html',
  'Inner & Anak Tudung':            'inner-tudung.html',
  'Barangan Muslim Harian':         'barangan-harian.html',
  'Gift Set Islamik':               'gift-set.html',
  'Aksesori Ibadah Essential':      'aksesori-ibadah.html',
  'Travel Muslim Lifestyle':        'travel-muslim.html',
  'Produk Muslim Seisi Keluarga':   'produk-keluarga.html'
};
// ---------- FOOTER: inject "Available On" as a column inside footer-grid ----------
(function() {
  const STORES = {
    tiktok: 'https://www.tiktok.com/@smbventures',
    shopee: 'https://shopee.com.my/smbventures',
    lazada: 'https://www.lazada.com.my/shop/smbventures'
  };
  const ICONS = {
    tiktok: '<svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" style="flex-shrink:0"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.59a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.02z"/></svg>',
    shopee: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="14" height="14" style="flex-shrink:0"><path d="M5 7h14l-1 13H6L5 7z"/><path d="M9 7V5a3 3 0 0 1 6 0v2"/><circle cx="12" cy="13" r="1" fill="currentColor" stroke="none"/></svg>',
    lazada:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="14" height="14" style="flex-shrink:0"><path d="M3 7l9-4 9 4-9 4-9-4z"/><path d="M3 12l9 4 9-4"/><path d="M3 17l9 4 9-4"/></svg>'
  };
  document.querySelectorAll('footer').forEach(footer => {
    if (footer.querySelector('.footer-marketplaces-col')) return;
    const grid = footer.querySelector('.footer-grid');
    if (!grid) return;
    const footerCols = grid.querySelectorAll('.footer-col');
    if (footerCols.length < 2) return;

    const col = document.createElement('div');
    col.className = 'footer-col footer-marketplaces-col';
    col.innerHTML =
      '<h4>Available On</h4>' +
      '<ul>' +
        '<li><a href="' + STORES.tiktok + '" target="_blank" rel="noopener">' + ICONS.tiktok + 'TikTok Shop</a></li>' +
        '<li><a href="' + STORES.shopee + '" target="_blank" rel="noopener">' + ICONS.shopee + 'Shopee</a></li>' +
        '<li><a href="' + STORES.lazada + '" target="_blank" rel="noopener">' + ICONS.lazada + 'Lazada</a></li>' +
      '</ul>';

    // Insert between Navigasi (footerCols[0]) and Hubungi (footerCols[1])
    grid.insertBefore(col, footerCols[1]);
  });
})();

// ---------- FOOTER: inject "Ikuti Kami" social media row ----------
(function() {
  // ── Update these URLs with your actual social media pages ──
  const SOCIAL = {
    facebook:  'https://www.facebook.com/smbventures',
    instagram: 'https://www.instagram.com/smbventures',
    tiktok:    'https://www.tiktok.com/@smbventures',
    whatsapp:  'https://wa.me/60139835152'
  };
  const ICONS = {
    facebook:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
        '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>' +
      '</svg>',
    instagram:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">' +
        '<rect x="2" y="2" width="20" height="20" rx="5"/>' +
        '<circle cx="12" cy="12" r="4"/>' +
        '<circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>' +
      '</svg>',
    tiktok:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
        '<path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.32-4.64 2.93 2.93 0 0 1 .88-.13V9.4a6.84 6.84 0 0 0-1 .05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.59a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.02z"/>' +
      '</svg>',
    whatsapp:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
        '<path d="M20.5 3.5A11 11 0 0 0 3.2 17.3L2 22l4.8-1.3A11 11 0 1 0 20.5 3.5zm-8.5 17a9 9 0 0 1-4.6-1.3l-.3-.2-2.9.8.8-2.8-.2-.3a9 9 0 1 1 7.2 3.8zM17 14.3c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.6-1.6-1.9-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.2-.5s-.7-1.6-.9-2.2c-.2-.6-.5-.5-.7-.5h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3 4.8 4.2 1.7.7 2.3.8 3.1.6.5-.1 1.7-.7 1.9-1.3.3-.6.3-1.2.2-1.3z"/>' +
      '</svg>'
  };

  document.querySelectorAll('footer').forEach(footer => {
    if (footer.querySelector('.footer-social')) return;
    const brand = footer.querySelector('.footer-brand');
    if (!brand) return;

    const row = document.createElement('div');
    row.className = 'footer-social';
    row.innerHTML =
      '<span class="footer-social-heading">Ikuti Kami</span>' +
      '<div class="footer-social-icons">' +
        '<a href="' + SOCIAL.facebook  + '" class="social-icon" target="_blank" rel="noopener" aria-label="Facebook">'  + ICONS.facebook  + '</a>' +
        '<a href="' + SOCIAL.instagram + '" class="social-icon" target="_blank" rel="noopener" aria-label="Instagram">' + ICONS.instagram + '</a>' +
        '<a href="' + SOCIAL.tiktok    + '" class="social-icon" target="_blank" rel="noopener" aria-label="TikTok">'    + ICONS.tiktok    + '</a>' +
        '<a href="' + SOCIAL.whatsapp  + '" class="social-icon" target="_blank" rel="noopener" aria-label="WhatsApp">'  + ICONS.whatsapp  + '</a>' +
      '</div>';
    brand.appendChild(row);
  });
})();

// ---------- LOGO: inject "SMB Ventures" text beside the image ----------
document.querySelectorAll('.logo').forEach(logo => {
  if (logo.querySelector('.logo-text')) return;
  const img = logo.querySelector('.logo-img');
  if (!img) return;
  const text = document.createElement('span');
  text.className = 'logo-text';
  text.innerHTML = 'SMB <em>Ventures</em>';
  img.insertAdjacentElement('afterend', text);
  // If image fails to load, the fallback handles branding — hide the extra text
  const hideText = () => { text.style.display = 'none'; };
  if (img.complete && img.naturalWidth === 0) hideText();
  img.addEventListener('error', hideText);
});

// ---------- NAV SCROLL EFFECT ----------
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  });
}

// ---------- MOBILE MENU ----------
const toggle = document.getElementById('menuToggle');
const navMobile = document.getElementById('navMobile');
if (toggle && navMobile) {
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    navMobile.classList.toggle('open');
  });
  navMobile.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('open');
      navMobile.classList.remove('open');
    });
  });
}

// ---------- REVEAL ON SCROLL ----------
const revealEls = document.querySelectorAll('.reveal, .product-card, .category-tile, .variant-card');
if (revealEls.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach((el, i) => {
    if (el.classList.contains('product-card') || el.classList.contains('category-tile') || el.classList.contains('variant-card')) {
      el.style.transitionDelay = (i * 0.06) + 's';
    }
    io.observe(el);
  });

  // Hard fallback — make everything visible after 1.5s no matter what
  setTimeout(function() {
    revealEls.forEach(function(el) { el.classList.add('visible'); });
  }, 1500);
}

// ---------- WHATSAPP HELPERS ----------
const openWhatsApp = (productName) => {
  const msg = encodeURIComponent(
    `Assalamualaikum ${BRAND} 🌙\n\nSaya berminat dengan *${productName}*. Boleh share lebih maklumat?`
  );
  window.open(`https://wa.me/${PHONE}?text=${msg}`, '_blank');
};

// ---------- PRODUCT CARD (produk.html) -> NAVIGATE TO DETAIL ----------
document.querySelectorAll('.product-card').forEach(card => {
  const productName = card.dataset.product;
  if (!productName) return;
  const targetPage = PRODUCT_PAGES[productName];
  const handler = (e) => {
    e.preventDefault();
    if (targetPage) {
      window.location.href = targetPage;
    } else {
      openWhatsApp(productName);
    }
  };
  card.addEventListener('click', handler);
  const cta = card.querySelector('.product-cta');
  if (cta) cta.addEventListener('click', handler);
});

// ---------- CATEGORY TILE (produk.html catalog) -> NAVIGATE TO DETAIL ----------
document.querySelectorAll('.category-tile').forEach(tile => {
  const productName = tile.dataset.product;
  if (!productName) return;
  const targetPage = PRODUCT_PAGES[productName];
  tile.addEventListener('click', (e) => {
    e.preventDefault();
    if (targetPage) {
      window.location.href = targetPage;
    } else {
      openWhatsApp(productName);
    }
  });
});

// ---------- MARKETPLACE MODAL ----------
// Shared modal injected once into <body>. Variant card clicks open it
// with the product + variant + price filled in; user picks where to buy.
const MARKETPLACE_STORES = {
  // Placeholder URLs — replace with real shop pages when ready
  tiktok: 'https://www.tiktok.com/@smbventures',
  shopee: 'https://shopee.com.my/smbventures',
  lazada: 'https://www.lazada.com.my/shop/smbventures'
};

(function() {
  const ICONS = {
    tiktok:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
        '<path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.59a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.02z"/>' +
      '</svg>',
    shopee:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">' +
        '<path d="M5 7h14l-1 13H6L5 7z"/>' +
        '<path d="M9 7V5a3 3 0 0 1 6 0v2"/>' +
        '<circle cx="12" cy="13" r="1" fill="currentColor" stroke="none"/>' +
      '</svg>',
    lazada:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">' +
        '<path d="M3 7l9-4 9 4-9 4-9-4z"/>' +
        '<path d="M3 12l9 4 9-4"/>' +
        '<path d="M3 17l9 4 9-4"/>' +
      '</svg>'
  };

  function ensureModal() {
    let modal = document.getElementById('marketplaceModal');
    if (modal) return modal;
    modal = document.createElement('div');
    modal.id = 'marketplaceModal';
    modal.className = 'marketplace-modal';
    modal.innerHTML =
      '<div class="mm-backdrop" data-mm-close></div>' +
      '<div class="mm-card" role="dialog" aria-modal="true" aria-labelledby="mmTitle">' +
        '<button class="mm-close" data-mm-close aria-label="Tutup">&times;</button>' +
        '<div class="mm-eyebrow">Pilih Marketplace</div>' +
        '<h2 class="mm-title" id="mmTitle">Beli melalui platform <em>pilihan anda</em></h2>' +
        '<p class="mm-subtitle" id="mmSubtitle"></p>' +
        '<div class="mm-options">' +
          '<a href="' + MARKETPLACE_STORES.tiktok + '" class="mm-option" data-platform="tiktok" target="_blank" rel="noopener">' +
            '<span class="mm-option-icon">' + ICONS.tiktok + '</span>' +
            '<span class="mm-option-name">TikTok Shop</span>' +
            '<span class="mm-option-arrow">→</span>' +
          '</a>' +
          '<a href="' + MARKETPLACE_STORES.shopee + '" class="mm-option" data-platform="shopee" target="_blank" rel="noopener">' +
            '<span class="mm-option-icon">' + ICONS.shopee + '</span>' +
            '<span class="mm-option-name">Shopee</span>' +
            '<span class="mm-option-arrow">→</span>' +
          '</a>' +
          '<a href="' + MARKETPLACE_STORES.lazada + '" class="mm-option" data-platform="lazada" target="_blank" rel="noopener">' +
            '<span class="mm-option-icon">' + ICONS.lazada + '</span>' +
            '<span class="mm-option-name">Lazada</span>' +
            '<span class="mm-option-arrow">→</span>' +
          '</a>' +
        '</div>' +
      '</div>';
    document.body.appendChild(modal);

    // Close handlers
    modal.querySelectorAll('[data-mm-close]').forEach(el => {
      el.addEventListener('click', closeMarketplaceModal);
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMarketplaceModal();
    });
    return modal;
  }

  function openMarketplaceModal(productName, variant, price) {
    const modal = ensureModal();
    const sub = modal.querySelector('#mmSubtitle');
    let line = '';
    if (productName) line += productName;
    if (variant) line += (line ? ' — ' : '') + '<strong>' + variant + '</strong>';
    if (price) line += ' &middot; ' + price;
    sub.innerHTML = line || 'Pilih platform untuk membuat tempahan.';
    modal.classList.add('open');
    document.body.classList.add('modal-open');
  }

  function closeMarketplaceModal() {
    const modal = document.getElementById('marketplaceModal');
    if (!modal) return;
    modal.classList.remove('open');
    document.body.classList.remove('modal-open');
  }

  // Expose for the variant card handler below
  window.openMarketplaceModal = openMarketplaceModal;
  window.closeMarketplaceModal = closeMarketplaceModal;
})();

// ---------- NAV CTA (Buy Now) -> MARKETPLACE MODAL ----------
document.querySelectorAll('.nav-cta').forEach(cta => {
  cta.addEventListener('click', (e) => {
    e.preventDefault();
    if (typeof window.openMarketplaceModal === 'function') {
      window.openMarketplaceModal('', '', '');
    }
  });
});

// ---------- VARIANT CARD (detail pages) -> PRODUCT QUICK-VIEW MODAL ----------
document.querySelectorAll('.variant-card').forEach(card => {
  const variantName = card.dataset.variant || '';
  if (!variantName) return;

  // Swap button label to "Lihat Warna"
  const cta = card.querySelector('.variant-cta');
  if (cta) {
    cta.innerHTML =
      'Lihat Warna ' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink:0"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>';
  }

  const handler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Resolve full product data at click-time (ALL_PRODUCTS is loaded by then)
    const imgSrc = (card.querySelector('.variant-img') || {}).getAttribute
      ? card.querySelector('.variant-img').getAttribute('src') || ''
      : '';
    const match = (window.ALL_PRODUCTS || []).find(p => p.name === variantName);
    const product = match || {
      cat:     card.dataset.product || '',
      name:    variantName,
      price:   0,
      display: card.dataset.price || '',
      img:     imgSrc,
      desc:    (card.querySelector('.variant-desc') || {}).textContent || ''
    };
    // Prefer the card's own image (fresher path) over the ALL_PRODUCTS entry
    if (imgSrc && match) product.img = imgSrc;
    if (window.openProductModal) window.openProductModal(product);
  };

  card.addEventListener('click', handler);
  if (cta) cta.addEventListener('click', handler);
});

// ---------- PARALLAX HERO CARDS (home page only) ----------
const visual = document.querySelector('.hero-visual');
if (visual && window.matchMedia('(min-width: 968px)').matches) {
  document.addEventListener('mousemove', (e) => {
    const cards = visual.querySelectorAll('.hero-card');
    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;
    cards.forEach((card, i) => {
      const depth = (i + 1) * 0.3;
      card.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
    });
  });
}

// ---------- ALL PRODUCTS — full product data (64 items across 16 categories) ----------
var ALL_PRODUCTS = [
  // Kopiah & Headwear
  { cat:'Kopiah & Headwear', page:'kopiah.html', name:'Kopiah Putih Klasik',       price:45,  display:'RM 45',  img:'kopiah-v1.jpg',      desc:'Kopiah putih dengan jahitan kemas, sesuai untuk kegunaan harian dan ibadah.' },
  { cat:'Kopiah & Headwear', page:'kopiah.html', name:'Kopiah Hitam Velvet',        price:75,  display:'RM 75',  img:'kopiah-v2.jpg',      desc:'Velvet hitam premium dengan pelapik lembut di dalam — selesa dan elegan.' },
  { cat:'Kopiah & Headwear', page:'kopiah.html', name:'Kopiah Corak Tradisional',   price:65,  display:'RM 65',  img:'kopiah-v3.jpg',      desc:'Pelbagai corak warisan dengan sulaman emas — pilihan untuk majlis dan hari raya.' },
  { cat:'Kopiah & Headwear', page:'kopiah.html', name:'Songkok Kanak-Kanak',        price:35,  display:'RM 35',  img:'kopiah-v4.jpg',      desc:'Saiz khas untuk anak lelaki — padanan kemas dengan kopiah ayah.' },
  // Jubah
  { cat:'Jubah', page:'jubah.html', name:'Jubah Klasik Putih',        price:180, display:'RM 180', img:'jubah-v1.jpg',       desc:'Jubah putih moden bahan polyester premium yang lembut dan tahan lama.' },
  { cat:'Jubah', page:'jubah.html', name:'Jubah Hitam Elegan',        price:220, display:'RM 220', img:'jubah-v2.jpg',       desc:'Jubah hitam dengan sulaman halus di dada — pilihan elegan untuk majlis.' },
  { cat:'Jubah', page:'jubah.html', name:'Jubah Sutera Eksklusif',    price:320, display:'RM 320', img:'jubah-v3.jpg',       desc:'Bahan sutera lembut untuk majlis rasmi yang istimewa dan hari raya.' },
  { cat:'Jubah', page:'jubah.html', name:'Set Jubah Anak',            price:120, display:'RM 120', img:'jubah-v4.jpg',       desc:'Jubah anak lelaki padanan keluarga — moment istimewa untuk seisi keluarga.' },
  // Kain Pelikat
  { cat:'Kain Pelikat', page:'pelikat.html', name:'Pelikat Instant Bergetah',  price:75,  display:'RM 75',  img:'pelikat-v1.jpg',     desc:'Pinggang bergetah, mudah dipakai sekejap — sesuai untuk solat dan harian.' },
  { cat:'Kain Pelikat', page:'pelikat.html', name:'Pelikat Songket Premium',   price:145, display:'RM 145', img:'pelikat-v2.jpg',     desc:'Songket tradisional dengan benang emas — untuk majlis istimewa.' },
  { cat:'Kain Pelikat', page:'pelikat.html', name:'Pelikat Cotton Lembut',     price:65,  display:'RM 65',  img:'pelikat-v3.jpg',     desc:'Cotton 100% untuk keselesaan harian — lembut di kulit dan tahan lama.' },
  { cat:'Kain Pelikat', page:'pelikat.html', name:'Pelikat Pelancong',         price:85,  display:'RM 85',  img:'pelikat-v4.jpg',     desc:'Padat dan ringan untuk perjalanan — sesuai untuk umrah dan travel.' },
  // Tudung
  { cat:'Tudung', page:'tudung.html', name:'Tudung Bawal Klasik',     price:35,  display:'RM 35',  img:'tudung-v1.jpg',      desc:'Saiz besar dengan jahitan kemas dan kain ringan — selesa sepanjang hari.' },
  { cat:'Tudung', page:'tudung.html', name:'Tudung Sarung Premium',   price:55,  display:'RM 55',  img:'tudung-v2.jpg',      desc:'Bahan lembut, mudah dipakai dalam beberapa saat — tanpa lipatan.' },
  { cat:'Tudung', page:'tudung.html', name:'Tudung Shawl Moden',      price:65,  display:'RM 65',  img:'tudung-v3.jpg',      desc:'Pelbagai warna pastel untuk gaya harian — boleh padan dengan banyak baju.' },
  { cat:'Tudung', page:'tudung.html', name:'Set Travel 3 Helai',      price:95,  display:'RM 95',  img:'tudung-v4.jpg',      desc:'Set 3 tudung dalam beg travel kemas — sesuai untuk umrah dan perjalanan.' },
  // Set Solat
  { cat:'Set Solat', page:'set-solat.html', name:'Set Solat Lengkap Premium', price:180, display:'RM 180', img:'set-solat-v1.jpg',   desc:'Sejadah + telekung + tasbih dalam beg eksklusif — pilihan utama keluarga.' },
  { cat:'Set Solat', page:'set-solat.html', name:'Set Solat Travel',          price:120, display:'RM 120', img:'set-solat-v2.jpg',   desc:'Padat untuk perjalanan dengan beg ringan — selesa untuk umrah dan travel.' },
  { cat:'Set Solat', page:'set-solat.html', name:'Set Solat Hadiah',          price:240, display:'RM 240', img:'set-solat-v3.jpg',   desc:'Gift box eksklusif untuk hadiah istimewa — sempena hari raya, kahwin atau majlis.' },
  { cat:'Set Solat', page:'set-solat.html', name:'Set Solat Kanak-Kanak',     price:95,  display:'RM 95',  img:'set-solat-v4.jpg',   desc:'Saiz khas untuk anak-anak belajar solat — set lengkap dan menarik.' },
  // Baju Kedah
  { cat:'Baju Kedah', page:'baju-kedah.html', name:'Baju Kedah Putih Klasik',  price:150, display:'RM 150', img:'baju-kedah-v1.jpg',  desc:'Baju Kedah putih klasik dengan jahitan kemas — pilihan untuk solat dan hari raya.' },
  { cat:'Baju Kedah', page:'baju-kedah.html', name:'Baju Kedah Cekak Musang',  price:175, display:'RM 175', img:'baju-kedah-v2.jpg',  desc:'Kolar cekak musang tradisional yang elegan dengan pelbagai pilihan warna.' },
  { cat:'Baju Kedah', page:'baju-kedah.html', name:'Set Baju Kedah Lengkap',   price:280, display:'RM 280', img:'baju-kedah-v3.jpg',  desc:'Dengan kain pelikat dan songkok padanan — set lengkap untuk majlis.' },
  { cat:'Baju Kedah', page:'baju-kedah.html', name:'Baju Kedah Anak',          price:95,  display:'RM 95',  img:'baju-kedah-v4.jpg',  desc:'Padanan keluarga untuk anak lelaki — moment istimewa untuk hari raya.' },
  // Baju Melayu dan Kurta
  { cat:'Baju Melayu dan Kurta', page:'baju-melayu.html', name:'Baju Melayu Cekak Musang',  price:220, display:'RM 220', img:'baju-melayu-v1.jpg', desc:'Klasik dengan kolar cekak musang tradisional — pilihan utama untuk hari raya.' },
  { cat:'Baju Melayu dan Kurta', page:'baju-melayu.html', name:'Baju Melayu Teluk Belanga', price:240, display:'RM 240', img:'baju-melayu-v2.jpg', desc:'Gaya Johor tradisional dengan kolar bulat — kemas dan elegan.' },
  { cat:'Baju Melayu dan Kurta', page:'baju-melayu.html', name:'Kurta Pakistan Premium',    price:195, display:'RM 195', img:'baju-melayu-v3.jpg', desc:'Kurta dengan sulaman halus dari Pakistan — bahan import berkualiti tinggi.' },
  { cat:'Baju Melayu dan Kurta', page:'baju-melayu.html', name:'Set Padanan Keluarga',      price:480, display:'RM 480', img:'baju-melayu-v4.jpg', desc:'Padanan ayah dan anak dalam satu pakej — moment penuh keberkatan.' },
  // Kelengkapan Haji & Umrah
  { cat:'Kelengkapan Haji & Umrah', page:'haji-umrah.html', name:'Ihram Lelaki Premium',  price:145, display:'RM 145', img:'haji-v1.jpg',        desc:'2 helai ihram dengan tuala lembut yang berkualiti — selesa untuk tawaf.' },
  { cat:'Kelengkapan Haji & Umrah', page:'haji-umrah.html', name:'Beg Mutawif Pintar',    price:185, display:'RM 185', img:'haji-v2.jpg',        desc:'Beg mutawif dengan compartment khas dan ringan — pilihan jemaah haji.' },
  { cat:'Kelengkapan Haji & Umrah', page:'haji-umrah.html', name:'Mukena Putih Wanita',   price:165, display:'RM 165', img:'haji-v3.jpg',        desc:'Telekung khas untuk haji dan umrah — ringan dan cepat kering.' },
  { cat:'Kelengkapan Haji & Umrah', page:'haji-umrah.html', name:'Set Lengkap Haji',      price:580, display:'RM 580', img:'haji-v4.jpg',        desc:'Semua keperluan dalam satu pakej premium — ihram, beg, mukena dan aksesori.' },
  // Beg & Aksesori Travel Umrah
  { cat:'Beg & Aksesori Travel Umrah', page:'beg-travel.html', name:'Beg Mutawif Standard', price:145, display:'RM 145', img:'beg-v1.jpg',        desc:'Beg ringan untuk umrah dengan compartment khas untuk pasport dan keperluan ibadah.' },
  { cat:'Beg & Aksesori Travel Umrah', page:'beg-travel.html', name:'Beg Travel Premium',   price:195, display:'RM 195', img:'beg-v2.jpg',        desc:'Material kalis air dengan padding tebal — selesa dijinjing sepanjang perjalanan.' },
  { cat:'Beg & Aksesori Travel Umrah', page:'beg-travel.html', name:'Pouch Aksesori Umrah', price:65,  display:'RM 65',  img:'beg-v3.jpg',        desc:'Pouch kecil untuk pasport, duit dan barang penting — selamat dan kemas.' },
  { cat:'Beg & Aksesori Travel Umrah', page:'beg-travel.html', name:'Set Travel Lengkap',   price:280, display:'RM 280', img:'beg-v4.jpg',        desc:'Beg utama + pouch + aksesori dalam satu pakej — semua keperluan umrah.' },
  // Wangian Attar
  { cat:'Wangian Attar', page:'wangian-attar.html', name:'Attar Oud Royal',        price:85,  display:'RM 85',  img:'attar-v1.jpg',       desc:'Aroma oud klasik yang mewah dan tahan lama — pilihan untuk hari rasmi.' },
  { cat:'Wangian Attar', page:'wangian-attar.html', name:'Attar Musk Al-Madinah', price:75,  display:'RM 75',  img:'attar-v2.jpg',       desc:'Musk lembut dengan sentuhan rose — sesuai untuk kegunaan harian.' },
  { cat:'Wangian Attar', page:'wangian-attar.html', name:'Attar Amber Gold',       price:95,  display:'RM 95',  img:'attar-v3.jpg',       desc:'Amber hangat dengan vanilla — wangi premium untuk majlis istimewa.' },
  { cat:'Wangian Attar', page:'wangian-attar.html', name:'Set Attar 5 Botol',      price:320, display:'RM 320', img:'attar-v4.jpg',       desc:'Koleksi 5 wangian dalam set hadiah eksklusif — pelbagai mood dan suasana.' },
  // Inner & Anak Tudung
  { cat:'Inner & Anak Tudung', page:'inner-tudung.html', name:'Inner Tudung Klasik', price:18,  display:'RM 18',  img:'inner-v1.jpg',       desc:'Inner asas dengan bahan kapas lembut — selesa untuk kegunaan harian.' },
  { cat:'Inner & Anak Tudung', page:'inner-tudung.html', name:'Inner Hijab Sport',   price:25,  display:'RM 25',  img:'inner-v2.jpg',       desc:'Bahan menyerap peluh untuk aktif — sesuai untuk senaman dan aktiviti luar.' },
  { cat:'Inner & Anak Tudung', page:'inner-tudung.html', name:'Anak Tudung Mini',    price:12,  display:'RM 12',  img:'inner-v3.jpg',       desc:'Saiz kecil untuk awning rambut — kemas dan tersembunyi di bawah tudung.' },
  { cat:'Inner & Anak Tudung', page:'inner-tudung.html', name:'Set Inner 5 Helai',   price:80,  display:'RM 80',  img:'inner-v4.jpg',       desc:'Bundle 5 inner dalam pelbagai warna — jimat dan praktikal.' },
  // Barangan Muslim Harian
  { cat:'Barangan Muslim Harian', page:'barangan-harian.html', name:'Misvak Premium',           price:15,  display:'RM 15',  img:'barangan-v1.jpg',    desc:'Pembersih gigi tradisional dari kayu siwak — sunnah dan menyegarkan.' },
  { cat:'Barangan Muslim Harian', page:'barangan-harian.html', name:'Buku Yassin Mini',         price:35,  display:'RM 35',  img:'barangan-v2.jpg',    desc:'Yassin saiz poket dengan kulit kemas — mudah dibawa ke mana-mana.' },
  { cat:'Barangan Muslim Harian', page:'barangan-harian.html', name:'Pengasah Pisau Sembelih',  price:45,  display:'RM 45',  img:'barangan-v3.jpg',    desc:'Pengasah berkualiti untuk sembelihan halal — tajam dan tahan lama.' },
  { cat:'Barangan Muslim Harian', page:'barangan-harian.html', name:'Set Barangan Harian',      price:95,  display:'RM 95',  img:'barangan-v4.jpg',    desc:'Bundle barangan keperluan harian Muslim dalam satu pakej eksklusif.' },
  // Gift Set Islamik
  { cat:'Gift Set Islamik', page:'gift-set.html', name:'Gift Set Perkahwinan', price:280, display:'RM 280', img:'gift-v1.jpg',        desc:'Set hadiah pengantin Muslim premium — sejadah, tasbih, attar dan banyak lagi.' },
  { cat:'Gift Set Islamik', page:'gift-set.html', name:'Gift Set Hari Raya',   price:220, display:'RM 220', img:'gift-v2.jpg',        desc:'Bundle hari raya untuk keluarga — hadiah penuh kasih sayang.' },
  { cat:'Gift Set Islamik', page:'gift-set.html', name:'Gift Set Korporat',    price:180, display:'RM 180', img:'gift-v3.jpg',        desc:'Hadiah korporat yang boleh dipersonalisasi dengan logo syarikat anda.' },
  { cat:'Gift Set Islamik', page:'gift-set.html', name:'Gift Set Umrah',       price:350, display:'RM 350', img:'gift-v4.jpg',        desc:'Hadiah untuk jemaah pulang umrah — kemas, eksklusif dan penuh makna.' },
  // Aksesori Ibadah Essential
  { cat:'Aksesori Ibadah Essential', page:'aksesori-ibadah.html', name:'Tasbih Digital',       price:35,  display:'RM 35',  img:'aksesori-v1.jpg',    desc:'Tasbih elektronik dengan kira automatik — mudah dan praktikal untuk zikir.' },
  { cat:'Aksesori Ibadah Essential', page:'aksesori-ibadah.html', name:'Compass Kiblat',       price:45,  display:'RM 45',  img:'aksesori-v2.jpg',    desc:'Compass digital untuk arah kiblat — tepat dan mudah digunakan di mana sahaja.' },
  { cat:'Aksesori Ibadah Essential', page:'aksesori-ibadah.html', name:'Al-Quran Digital',     price:180, display:'RM 180', img:'aksesori-v3.jpg',    desc:'Pembaca Al-Quran portable dengan terjemahan — sesuai untuk pelajar tahfiz.' },
  { cat:'Aksesori Ibadah Essential', page:'aksesori-ibadah.html', name:'Set Aksesori Lengkap', price:280, display:'RM 280', img:'aksesori-v4.jpg',    desc:'Bundle aksesori ibadah lengkap — tasbih, compass dan Al-Quran digital.' },
  // Travel Muslim Lifestyle
  { cat:'Travel Muslim Lifestyle', page:'travel-muslim.html', name:'Sejadah Travel Lipat',   price:55,  display:'RM 55',  img:'travel-v1.jpg',      desc:'Sejadah lipat saiz poket — mudah disimpan dalam beg dan ringan dibawa.' },
  { cat:'Travel Muslim Lifestyle', page:'travel-muslim.html', name:'Botol Wuduk Travel',     price:35,  display:'RM 35',  img:'travel-v2.jpg',      desc:'Botol khas untuk berwuduk dalam perjalanan — kemas dan menjimatkan air.' },
  { cat:'Travel Muslim Lifestyle', page:'travel-muslim.html', name:'Penutup Telinga Solat',  price:25,  display:'RM 25',  img:'travel-v3.jpg',      desc:'Supaya tidak terdengar bunyi luar semasa solat di tempat awam.' },
  { cat:'Travel Muslim Lifestyle', page:'travel-muslim.html', name:'Set Travel Premium',     price:165, display:'RM 165', img:'travel-v4.jpg',      desc:'Bundle lengkap untuk Muslim travel — sejadah, botol wuduk dan aksesori.' },
  // Produk Muslim Seisi Keluarga
  { cat:'Produk Muslim Seisi Keluarga', page:'produk-keluarga.html', name:'Set Hari Raya Keluarga', price:580, display:'RM 580', img:'keluarga-v1.jpg',    desc:'Padanan baju 4 ahli keluarga — kemas, sopan dan penuh keserasian.' },
  { cat:'Produk Muslim Seisi Keluarga', page:'produk-keluarga.html', name:'Set Ibadah Keluarga',    price:420, display:'RM 420', img:'keluarga-v2.jpg',    desc:'Sejadah + telekung + kopiah untuk seisi keluarga — solat berjemaah bersama.' },
  { cat:'Produk Muslim Seisi Keluarga', page:'produk-keluarga.html', name:'Set Tudung Ibu & Anak',  price:95,  display:'RM 95',  img:'keluarga-v3.jpg',    desc:'Tudung padanan untuk ibu dan anak perempuan — comel dan kemas.' },
  { cat:'Produk Muslim Seisi Keluarga', page:'produk-keluarga.html', name:'Set Travel Keluarga',    price:380, display:'RM 380', img:'keluarga-v4.jpg',    desc:'Beg + aksesori untuk perjalanan keluarga — semua keperluan dalam satu pakej.' }
];

// ---------- PRODUCT VARIANTS: sizes & colours per category ----------
var CATEGORY_VARIANTS = {
  'Kopiah & Headwear': {
    sizes:  ['S / 56cm', 'M / 58cm', 'L / 60cm', 'XL / 62cm'],
    colors: [{label:'Putih',  hex:'#f5f5f0'},{label:'Hitam',  hex:'#2a2a2a'},
             {label:'Krem',   hex:'#e8d5a3'},{label:'Coklat', hex:'#7b4f2e'}]
  },
  'Jubah': {
    sizes:  ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [{label:'Putih',  hex:'#f8f8f5'},{label:'Hitam',  hex:'#2a2a2a'},
             {label:'Kelabu', hex:'#909090'},{label:'Navy',   hex:'#0d2340'}]
  },
  'Kain Pelikat': {
    sizes:  ['Standard / 42"', 'Panjang / 44"'],
    colors: [{label:'Biru Tua',   hex:'#1e3f6b'},{label:'Hijau',      hex:'#2d5a3d'},
             {label:'Merah Wain', hex:'#6b1a2a'},{label:'Hitam',      hex:'#2a2a2a'},
             {label:'Coklat',     hex:'#7b4f2e'}]
  },
  'Tudung': {
    sizes:  ['45×45"', '50×50"', '60×60"'],
    colors: [{label:'Hitam',      hex:'#2a2a2a'},{label:'Putih',       hex:'#f8f8f5'},
             {label:'Krem',       hex:'#e8d5a3'},{label:'Abu-abu',     hex:'#b0b0b0'},
             {label:'Navy',       hex:'#0d2340'},{label:'Biru Langit', hex:'#7ab8d4'},
             {label:'Ros',        hex:'#d4a0b0'},{label:'Sage',        hex:'#7a9a7a'}]
  },
  'Set Solat': {
    sizes:  ['Standard', 'Travel (Compact)'],
    colors: [{label:'Hijau',      hex:'#2d5a3d'},{label:'Biru',        hex:'#1a3055'},
             {label:'Ungu',       hex:'#5a3f7a'},{label:'Ros Muda',    hex:'#b87890'},
             {label:'Hitam',      hex:'#2a2a2a'}]
  },
  'Baju Kedah': {
    sizes:  ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [{label:'Putih',  hex:'#f8f8f5'},{label:'Krem',   hex:'#e8d5a3'},
             {label:'Biru',   hex:'#3a6fa8'},{label:'Hijau',  hex:'#4a7c59'},
             {label:'Kelabu', hex:'#808080'}]
  },
  'Baju Melayu dan Kurta': {
    sizes:  ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [{label:'Putih',      hex:'#f8f8f5'},{label:'Biru Awan',   hex:'#a0b8d8'},
             {label:'Krem',       hex:'#e8d5a3'},{label:'Hijau Teal',  hex:'#2d7d6f'},
             {label:'Kelabu',     hex:'#808080'},{label:'Hitam',       hex:'#2a2a2a'}]
  },
  'Kelengkapan Haji & Umrah': {
    sizes:  ['S / M', 'L / XL', 'XXL / XXXL'],
    colors: [{label:'Putih', hex:'#f8f8f5'}]
  },
  'Beg & Aksesori Travel Umrah': {
    sizes:  ['Kecil', 'Sederhana', 'Besar'],
    colors: [{label:'Hitam',  hex:'#2a2a2a'},{label:'Navy',   hex:'#0d2340'},
             {label:'Coklat', hex:'#7b4f2e'},{label:'Zaitun', hex:'#6b7c45'}]
  },
  'Wangian Attar': {
    sizes:  ['3ml', '6ml', '12ml', '30ml'],
    colors: [{label:'Oud Royal',  hex:'#4a2c0a'},{label:'Musk Putih', hex:'#f0ead8'},
             {label:'Rose',       hex:'#c05070'},{label:'Amber Gold', hex:'#c8862a'}]
  },
  'Inner & Anak Tudung': {
    sizes:  ['S / 50cm', 'M / 55cm', 'L / 60cm'],
    colors: [{label:'Hitam', hex:'#2a2a2a'},{label:'Putih',  hex:'#f8f8f5'},
             {label:'Krem',  hex:'#e8d5a3'},{label:'Kelabu', hex:'#b0b0b0'},
             {label:'Navy',  hex:'#0d2340'},{label:'Coklat', hex:'#7b4f2e'}]
  },
  'Barangan Muslim Harian': {
    sizes:  ['Standard'],
    colors: [{label:'Semulajadi', hex:'#c8a878'},{label:'Premium', hex:'#c9a96e'}]
  },
  'Gift Set Islamik': {
    sizes:  ['Standard', 'Premium', 'Eksklusif'],
    colors: [{label:'Krem & Emas',  hex:'#e8d5a3'},{label:'Navy & Emas',  hex:'#0d2340'},
             {label:'Merah & Emas', hex:'#6b1a2a'},{label:'Hitam & Emas', hex:'#2a2a2a'}]
  },
  'Aksesori Ibadah Essential': {
    sizes:  ['Standard'],
    colors: [{label:'Hitam',  hex:'#2a2a2a'},{label:'Silver', hex:'#b8b8c0'},
             {label:'Emas',   hex:'#c9a96e'}]
  },
  'Travel Muslim Lifestyle': {
    sizes:  ['Standard', 'Compact'],
    colors: [{label:'Hijau', hex:'#2d5a3d'},{label:'Navy',  hex:'#0d2340'},
             {label:'Hitam', hex:'#2a2a2a'},{label:'Krem',  hex:'#e8d5a3'}]
  },
  'Produk Muslim Seisi Keluarga': {
    sizes:  ['Set 2 Orang', 'Set 3 Orang', 'Set 4 Orang', 'Set 5 Orang'],
    colors: [{label:'Biru Awan', hex:'#a0b8d8'},{label:'Sage',    hex:'#8fbc8b'},
             {label:'Krem',      hex:'#e8d5a3'},{label:'Kelabu',  hex:'#a0a8b8'}]
  }
};

// ---------- PRODUCT QUICK-VIEW MODAL ----------
(function () {
  var currentProduct = null;
  var selectedSize   = null;
  var selectedColor  = null;
  var qty            = 1;

  function ensureProductModal() {
    var m = document.getElementById('productModal');
    if (m) return m;
    m = document.createElement('div');
    m.id = 'productModal';
    m.className = 'product-modal';
    m.innerHTML =
      '<div class="pm-backdrop" id="pmBackdrop"></div>' +
      '<div class="pm-sheet" role="dialog" aria-modal="true" aria-labelledby="pmName">' +
        '<button class="pm-close" id="pmClose" aria-label="Tutup">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>' +
        '</button>' +
        '<div class="pm-body">' +
          '<div class="pm-image-col">' +
            '<div class="pm-img-wrap">' +
              '<img id="pmImg" src="" alt="" class="pm-img">' +
              '<div class="pm-img-placeholder"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg></div>' +
            '</div>' +
          '</div>' +
          '<div class="pm-detail-col">' +
            '<div class="pm-cat"  id="pmCat"></div>' +
            '<h2 class="pm-name" id="pmName"></h2>' +
            '<p class="pm-desc"  id="pmDesc"></p>' +
            '<div class="pm-price-row"><div class="pm-price" id="pmPrice"></div></div>' +
            '<div class="pm-section" id="pmSizeSection">' +
              '<div class="pm-var-label">Saiz <span class="pm-selected-label" id="pmSizeLabel"></span></div>' +
              '<div class="pm-size-opts" id="pmSizes"></div>' +
            '</div>' +
            '<div class="pm-section" id="pmColorSection">' +
              '<div class="pm-var-label">Warna <span class="pm-selected-label" id="pmColorLabel"></span></div>' +
              '<div class="pm-color-opts" id="pmColors"></div>' +
            '</div>' +
            '<div class="pm-qty-row">' +
              '<div class="pm-var-label">Kuantiti</div>' +
              '<div class="pm-qty-ctrl">' +
                '<button class="pm-qty-btn" id="pmMinus" aria-label="Kurang">−</button>' +
                '<span class="pm-qty-val" id="pmQtyVal">1</span>' +
                '<button class="pm-qty-btn" id="pmPlus"  aria-label="Tambah">+</button>' +
              '</div>' +
            '</div>' +
            '<button class="pm-buy-btn btn btn-primary" id="pmBuy">' +
              'Beli Sekarang ' +
              '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>' +
            '</button>' +
          '</div>' +
        '</div>' +
      '</div>';
    document.body.appendChild(m);

    m.querySelector('#pmBackdrop').addEventListener('click', closeProductModal);
    m.querySelector('#pmClose').addEventListener('click', closeProductModal);
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && document.body.classList.contains('product-modal-open')) closeProductModal();
    });

    var qtyEl = m.querySelector('#pmQtyVal');
    m.querySelector('#pmMinus').addEventListener('click', function() { if (qty > 1)  { qty--; qtyEl.textContent = qty; } });
    m.querySelector('#pmPlus').addEventListener('click',  function() { if (qty < 99) { qty++; qtyEl.textContent = qty; } });

    m.querySelector('#pmBuy').addEventListener('click', function() {
      closeProductModal();
      if (!currentProduct) return;
      var variant = '';
      if (selectedColor) variant += selectedColor;
      if (selectedSize)  variant += (variant ? ' · ' : '') + selectedSize;
      if (qty > 1)       variant += ' (×' + qty + ')';
      if (window.openMarketplaceModal) {
        window.openMarketplaceModal(currentProduct.cat, currentProduct.name + (variant ? ' — ' + variant : ''), currentProduct.display);
      }
    });
    return m;
  }

  window.openProductModal = function(product) {
    var m = ensureProductModal();
    currentProduct = product;
    selectedSize   = null;
    selectedColor  = null;
    qty            = 1;

    var imgEl = m.querySelector('#pmImg');
    imgEl.src = product.img;
    imgEl.alt = product.name;
    imgEl.style.display = '';
    imgEl.onerror = function() { this.style.display = 'none'; };
    m.querySelector('#pmCat').textContent   = product.cat;
    m.querySelector('#pmName').textContent  = product.name;
    m.querySelector('#pmDesc').textContent  = product.desc;
    m.querySelector('#pmPrice').textContent = product.display;
    m.querySelector('#pmQtyVal').textContent      = '1';
    m.querySelector('#pmSizeLabel').textContent   = '';
    m.querySelector('#pmColorLabel').textContent  = '';

    var variants = CATEGORY_VARIANTS[product.cat] || { sizes: [], colors: [] };

    // Build size buttons
    var sizesEl = m.querySelector('#pmSizes');
    sizesEl.innerHTML = '';
    variants.sizes.forEach(function(s) {
      var btn = document.createElement('button');
      btn.className   = 'pm-size-btn';
      btn.textContent = s;
      btn.addEventListener('click', function() {
        selectedSize = s;
        m.querySelector('#pmSizeLabel').textContent = '— ' + s;
        sizesEl.querySelectorAll('.pm-size-btn').forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
      });
      sizesEl.appendChild(btn);
    });

    // Build colour swatches
    var colorsEl = m.querySelector('#pmColors');
    colorsEl.innerHTML = '';
    variants.colors.forEach(function(c) {
      var btn = document.createElement('button');
      btn.className = 'pm-color-btn';
      btn.title     = c.label;
      btn.setAttribute('aria-label', c.label);
      btn.innerHTML = '<span class="pm-swatch" style="background:' + c.hex + '"></span><span class="pm-color-name">' + c.label + '</span>';
      btn.addEventListener('click', function() {
        selectedColor = c.label;
        m.querySelector('#pmColorLabel').textContent = '— ' + c.label;
        colorsEl.querySelectorAll('.pm-color-btn').forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');

        // Build colour-specific image path: e.g. kopiah-v1.jpg → kopiah-v1-putih.jpg
        var imgEl = m.querySelector('#pmImg');
        var slug  = c.label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '');
        var baseImg = currentProduct.img || '';
        var dot   = baseImg.lastIndexOf('.');
        var colorSrc = dot > -1
          ? baseImg.slice(0, dot) + '-' + slug + baseImg.slice(dot)
          : baseImg + '-' + slug;

        // Fade-out → swap → fade-in
        imgEl.style.transition = 'opacity 0.18s ease, transform 0.18s ease';
        imgEl.style.opacity    = '0.3';
        imgEl.style.transform  = 'scale(0.96)';
        setTimeout(function() {
          imgEl.style.display = '';
          imgEl.src = colorSrc;
          imgEl.onerror = function() {
            this.src     = currentProduct.img;
            this.onerror = null;
            this.style.opacity   = '1';
            this.style.transform = '';
          };
          imgEl.onload = function() {
            this.style.opacity   = '1';
            this.style.transform = '';
            this.onerror = null;
          };
        }, 180);
      });
      colorsEl.appendChild(btn);
    });

    // Hide empty sections
    m.querySelector('#pmSizeSection').style.display  = variants.sizes.length  ? '' : 'none';
    m.querySelector('#pmColorSection').style.display = variants.colors.length ? '' : 'none';

    m.classList.add('open');
    document.body.classList.add('product-modal-open');
  };

  function closeProductModal() {
    var m = document.getElementById('productModal');
    if (!m) return;
    m.classList.remove('open');
    document.body.classList.remove('product-modal-open');
  }
  window.closeProductModal = closeProductModal;
})();

// ---------- ALL PRODUCTS PANEL (produk.html) ----------
(function () {
  var allCard     = document.getElementById('allProductsCard');
  var panel       = document.getElementById('allProductsPanel');
  var grid        = document.getElementById('allProductsGrid');
  var countEl     = document.getElementById('apCount');
  var searchEl    = document.getElementById('apSearch');
  var clearEl     = document.getElementById('apClear');
  var noResults   = document.getElementById('apNoResults');
  var clearFilter = document.getElementById('apClearFilter');
  var closeBtn    = document.getElementById('closePanelBtn');
  if (!allCard || !panel || !grid) return;

  var populated        = false;
  var activePriceRange = null;
  var activeCat        = '';   // '' = all categories

  /* ── Build one product card element from data ── */
  function makeCard(p) {
    var art = document.createElement('article');
    art.className = 'variant-card visible';
    art.dataset.cat      = p.cat;
    art.dataset.variant  = p.name;
    art.dataset.priceNum = p.price;
    art.innerHTML =
      '<div class="variant-image">' +
        '<img src="' + p.img + '" alt="' + p.name + '" class="variant-img" loading="lazy" onerror="this.style.display=\'none\'">' +
      '</div>' +
      '<div class="variant-info">' +
        '<div class="variant-cat-tag" style="font-size:0.7rem;text-transform:uppercase;letter-spacing:.06em;color:var(--gold,#c9a96e);margin-bottom:.25rem;opacity:.85;">' + p.cat + '</div>' +
        '<h3 class="variant-name">' + p.name + '</h3>' +
        '<p class="variant-desc">' + p.desc + '</p>' +
        '<div class="variant-price">' + p.display + '</div>' +
        '<button class="variant-cta">Lihat Warna ' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>' +
        '</button>' +
      '</div>';
    /* click anywhere on card or on button → product quick-view modal */
    var handler = function(e) {
      e.stopPropagation();
      if (window.openProductModal) window.openProductModal(p);
    };
    art.addEventListener('click', handler);
    art.querySelector('.variant-cta').addEventListener('click', handler);
    return art;
  }

  /* ── Populate grid with all 64 product cards ── */
  function populatePanel() {
    if (populated) return;
    ALL_PRODUCTS.forEach(function(p) { grid.appendChild(makeCard(p)); });
    populated = true;
    updateCount();
  }

  /* ── Filter grid cards ── */
  function filterPanel() {
    var query = searchEl ? searchEl.value.trim().toLowerCase() : '';
    var cards = grid.querySelectorAll('.variant-card');
    var visible = 0;
    cards.forEach(function(card) {
      var name  = (card.dataset.variant || '').toLowerCase();
      var cat   = (card.dataset.cat     || '').toLowerCase();
      var price = parseInt(card.dataset.priceNum) || 0;
      var okSearch = query === '' || name.includes(query) || cat.includes(query);
      var okCat    = activeCat === '' || card.dataset.cat === activeCat;
      var okPrice  = true;
      if (activePriceRange === '0-50')    okPrice = price < 50;
      else if (activePriceRange === '50-100') okPrice = price >= 50 && price <= 100;
      else if (activePriceRange === '100+')   okPrice = price > 100;
      var show = okSearch && okCat && okPrice;
      card.style.display = show ? '' : 'none';
      if (show) visible++;
    });
    if (countEl) countEl.textContent = visible;
    if (noResults) noResults.hidden = visible > 0;
  }

  function updateCount() {
    if (countEl) countEl.textContent = grid.querySelectorAll('.variant-card').length;
  }

  /* ── Open / close ── */
  function openPanel() {
    populatePanel();
    panel.hidden = false;
    panel.setAttribute('aria-hidden', 'false');
    allCard.setAttribute('aria-expanded', 'true');
    allCard.classList.add('open');
    filterPanel();
    setTimeout(function() {
      panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      if (searchEl) searchEl.focus();
    }, 80);
  }

  function closePanel() {
    panel.hidden = true;
    panel.setAttribute('aria-hidden', 'true');
    allCard.setAttribute('aria-expanded', 'false');
    allCard.classList.remove('open');
    if (searchEl) { searchEl.value = ''; }
    if (clearEl)  { clearEl.style.display = 'none'; }
    activePriceRange = null;
    activeCat = '';
    document.querySelectorAll('.price-pill[data-range]').forEach(function(p) { p.classList.remove('active'); });
    document.querySelectorAll('.cat-pill').forEach(function(p) {
      p.classList.toggle('active', p.dataset.cat === '');
    });
    if (clearFilter) clearFilter.style.display = 'none';
    filterPanel();
  }

  allCard.addEventListener('click', function() { panel.hidden ? openPanel() : closePanel(); });
  allCard.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); allCard.click(); }
  });
  if (closeBtn) closeBtn.addEventListener('click', closePanel);

  /* ── Search ── */
  if (searchEl) {
    searchEl.addEventListener('input', function() {
      if (clearEl) clearEl.style.display = this.value ? 'flex' : 'none';
      filterPanel();
    });
  }
  if (clearEl) {
    clearEl.addEventListener('click', function() {
      searchEl.value = '';
      clearEl.style.display = 'none';
      filterPanel();
    });
  }

  /* ── Price pills ── */
  document.querySelectorAll('.price-pill[data-range]').forEach(function(pill) {
    pill.addEventListener('click', function() {
      var range = this.dataset.range;
      if (activePriceRange === range) {
        activePriceRange = null;
        document.querySelectorAll('.price-pill[data-range]').forEach(function(p) { p.classList.remove('active'); });
        if (clearFilter) clearFilter.style.display = 'none';
      } else {
        activePriceRange = range;
        document.querySelectorAll('.price-pill[data-range]').forEach(function(p) { p.classList.remove('active'); });
        this.classList.add('active');
        if (clearFilter) clearFilter.style.display = '';
      }
      filterPanel();
    });
  });
  if (clearFilter) {
    clearFilter.addEventListener('click', function() {
      activePriceRange = null;
      document.querySelectorAll('.price-pill[data-range]').forEach(function(p) { p.classList.remove('active'); });
      clearFilter.style.display = 'none';
      filterPanel();
    });
  }

  /* ── Category pills ── */
  document.querySelectorAll('.cat-pill').forEach(function(pill) {
    pill.addEventListener('click', function() {
      activeCat = this.dataset.cat;
      document.querySelectorAll('.cat-pill').forEach(function(p) { p.classList.remove('active'); });
      this.classList.add('active');
      filterPanel();
    });
  });
})();

// ---------- WHATSAPP CLICK TRACKING ----------
document.querySelectorAll('.whatsapp-float, .variant-cta, .nav-cta, .product-cta').forEach(btn => {
  btn.addEventListener('click', function() {
    const product = this.closest('[data-product]')?.dataset.product ||
                    this.closest('.product-card')?.dataset.product ||
                    'general';
    console.log('WhatsApp click: ' + product);
    if (typeof gtag !== 'undefined') gtag('event', 'whatsapp_click', { 'product': product });
  });
});

// ---------- LAZY LOAD FALLBACK ----------
document.querySelectorAll('img:not([loading])').forEach(img => img.setAttribute('loading', 'lazy'));


// ====================================================================
//  PREMIUM ENHANCEMENTS  –  SMB Ventures Homepage
//  Loaded only when GSAP + VanillaTilt + Typed.js are available
// ====================================================================

(function initPremium() {

  // ── Reduced-motion bail-out ──────────────────────────────────────
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ── 2. Canvas particle background (batik-inspired gold dots) ─────
  if (!reduceMotion) {
    const canvas = document.createElement('canvas');
    canvas.id = 'batikCanvas';
    Object.assign(canvas.style, {
      position: 'fixed', top: '0', left: '0',
      width: '100%', height: '100%',
      zIndex: '0', pointerEvents: 'none', opacity: '0.18'
    });
    document.body.insertBefore(canvas, document.body.firstChild);
    const ctx = canvas.getContext('2d');
    let particles = [];

    function resizeCanvas() {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    function spawnParticles() {
      particles = [];
      const count = Math.min(80, Math.floor(window.innerWidth * 0.07));
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 2.5 + 0.8,
          a: Math.random() * 0.45 + 0.15,
          vx: (Math.random() - 0.5) * 0.28,
          vy: (Math.random() - 0.5) * 0.18,
        });
      }
    }
    spawnParticles();
    window.addEventListener('resize', spawnParticles);

    // Gentle mouse-parallax nudge
    let mx = 0, my = 0;
    document.addEventListener('mousemove', (e) => {
      mx = (e.clientX / window.innerWidth  - 0.5) * 0.015;
      my = (e.clientY / window.innerHeight - 0.5) * 0.010;
    });

    (function tick() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.vx = Math.min(Math.max(p.vx + mx, -0.7), 0.7);
        p.vy = Math.min(Math.max(p.vy + my, -0.5), 0.5);
        p.x  = (p.x + p.vx + canvas.width)  % canvas.width;
        p.y  = (p.y + p.vy + canvas.height) % canvas.height;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,169,110,${p.a})`;
        ctx.fill();
      });
      requestAnimationFrame(tick);
    })();
  }

  // ── 3. GSAP scroll animations ──────���─────────────────────────────
  if (!reduceMotion && typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Staggered card reveals
    gsap.utils.toArray('.product-card, .category-tile').forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 88%',
          toggleActions: 'play none none reverse',
        },
        duration: 0.75,
        y: 60,
        rotation: i % 2 === 0 ? -1.5 : 1.5,
        scale: 0.92,
        opacity: 0,
        ease: 'back.out(1.4)',
        delay: (i % 4) * 0.07,
        clearProps: 'all',
      });
    });

    // Split-screen craft section
    const craft = document.querySelector('.craft');
    if (craft) {
      gsap.from('.craft-visual', {
        scrollTrigger: { trigger: '.craft', start: 'top 72%' },
        x: -140, opacity: 0, duration: 1,
        clipPath: 'inset(0 100% 0 0)', ease: 'power3.out',
      });
      gsap.from('.craft-text', {
        scrollTrigger: { trigger: '.craft', start: 'top 72%' },
        x: 140, opacity: 0, duration: 1, ease: 'power3.out',
      });
    }

    // Section headers fade-in
    gsap.utils.toArray('.section-header').forEach(el => {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: 'top 85%' },
        y: 40, opacity: 0, duration: 0.9, ease: 'power2.out',
      });
    });

    // Morphing gold hue on scroll depth
    ScrollTrigger.create({
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        const l = Math.round(45 + self.progress * 18);
        document.documentElement.style.setProperty('--gold', `hsl(42,68%,${l}%)`);
      },
    });
  }

  // ── 4. VanillaTilt 3-D on hero cards ──���──────────────────────────
  if (!reduceMotion && typeof VanillaTilt !== 'undefined') {
    VanillaTilt.init(document.querySelectorAll('.hero-card'), {
      max: 11, speed: 450, glare: true, 'max-glare': 0.25, scale: 1.03,
    });
  }

  // ── 5. Magnetic buttons ───────────────────────────────────────────
  if (!reduceMotion && window.matchMedia('(pointer: fine)').matches) {
    document.querySelectorAll('.btn, .nav-cta, .product-cta, .variant-cta').forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const r = btn.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width  / 2) * 0.22;
        const y = (e.clientY - r.top  - r.height / 2) * 0.22;
        btn.style.transform = `translate(${x}px,${y}px) scale(1.03)`;
      });
      btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
    });
  }

  console.log('✨ SMB Ventures — premium enhancements active');
})();

/* ── Typed.js hero headline ──────────────────────────────────────────────── */
(function initTypedHero() {
  var el = document.getElementById('hero-typed');
  if (!el || typeof Typed === 'undefined') return;

  // Wait for the hero fade-in animation before starting
  setTimeout(function () {
    // Wipe the seed text so Typed starts clean
    el.textContent = '';

    new Typed('#hero-typed', {
      strings   : ['Keindahan', 'Keselesaan'],
      typeSpeed : 75,
      backSpeed : 45,
      backDelay : 2400,
      startDelay: 200,
      loop      : true,
      showCursor: false,      // we handle the cursor ourselves in CSS
      fadeOut       : true,
      fadeOutClass  : 'typed-fade-out',
      fadeOutDelay  : 350,
      onStringTyped : function() {
        // keep aria-label in sync with current visible word
        el.setAttribute('aria-label', el.textContent.replace('|','').trim());
      }
    });
  }, 1400); // starts after hero h1 fadeInUp completes (0.35s delay + 0.9s anim)
})();
