// ── INK TONE - Main JavaScript ──

const WA_NUMBER = '971561926510';
const WA_BASE = `https://wa.me/${WA_NUMBER}`;

// ── Navigation ──
function navigate(page) {
  document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));

  const section = document.getElementById(page);
  if (section) section.classList.add('active');

  const navLink = document.querySelector(`.nav-links a[data-page="${page}"]`);
  if (navLink) navLink.classList.add('active');

  closeMobileMenu();
  window.scrollTo({ top: 0, behavior: 'smooth' });

  history.pushState({ page }, '', `#${page}`);
}

function closeMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) menu.style.display = 'none';
}

function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (!menu) return;
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

// ── WhatsApp order ──
function orderOnWhatsApp(productName) {
  const msg = encodeURIComponent(`Hello, I want to order ${productName}`);
  window.open(`${WA_BASE}?text=${msg}`, '_blank');
}

function openWhatsApp(msg) {
  const text = msg ? encodeURIComponent(msg) : encodeURIComponent('Hello, I need help with printer cartridges.');
  window.open(`${WA_BASE}?text=${text}`, '_blank');
}

// ── Products Data ──
const products = [
  {
    id: 1, emoji: '🖨️',
    model: 'HP 678 Black',
    brand: 'HP',
    badge: 'Bestseller',
    desc: 'High-yield black ink cartridge for HP DeskJet and Ink Advantage series printers.',
    compat: ['DeskJet 1515', 'IA 2515', 'IA 3545'],
    category: 'hp'
  },
  {
    id: 2, emoji: '🎨',
    model: 'HP 678 Color',
    brand: 'HP',
    badge: 'Popular',
    desc: 'Vivid tri-color ink cartridge delivering sharp graphics and bright photos.',
    compat: ['DeskJet 1515', 'IA 2515', 'IA 3515'],
    category: 'hp'
  },
  {
    id: 3, emoji: '🖨️',
    model: 'Canon PG-745',
    brand: 'Canon',
    badge: 'New',
    desc: 'Pigment black ink for crisp, smear-resistant text printing on Canon PIXMA.',
    compat: ['MG2570S', 'MG3070S', 'TR4570S'],
    category: 'canon'
  },
  {
    id: 4, emoji: '🎨',
    model: 'Canon CL-746',
    brand: 'Canon',
    badge: '',
    desc: 'Color ink cartridge producing vivid images and natural-looking photos.',
    compat: ['MG2570S', 'MG3070S', 'MX497'],
    category: 'canon'
  },
  {
    id: 5, emoji: '🖨️',
    model: 'Epson T664 Black',
    brand: 'Epson',
    badge: 'Value Pack',
    desc: 'Economy black ink bottle for ultra-high page yield EcoTank printers.',
    compat: ['L130', 'L220', 'L360', 'L380'],
    category: 'epson'
  },
  {
    id: 6, emoji: '🎨',
    model: 'Epson T664 Color Set',
    brand: 'Epson',
    badge: '',
    desc: 'Cyan, Magenta & Yellow ink set for EcoTank continuous ink tank printers.',
    compat: ['L130', 'L220', 'L360', 'L565'],
    category: 'epson'
  },
  {
    id: 7, emoji: '🖨️',
    model: 'Brother TN-2280',
    brand: 'Brother',
    badge: 'High Yield',
    desc: 'High-capacity black toner cartridge for Brother laser printers and MFPs.',
    compat: ['HL-2240D', 'MFC-7360N', 'DCP-7060D'],
    category: 'brother'
  },
  {
    id: 8, emoji: '🖨️',
    model: 'Samsung MLT-D101S',
    brand: 'Samsung',
    badge: '',
    desc: 'Genuine black toner cartridge for Samsung ML and SCX series laser printers.',
    compat: ['ML-2160', 'SCX-3400', 'SCX-3405F'],
    category: 'samsung'
  },
  {
    id: 9, emoji: '🎨',
    model: 'HP 803 Combo Pack',
    brand: 'HP',
    badge: 'Combo',
    desc: 'Black + Color ink cartridge combo pack for everyday home and office printing.',
    compat: ['DeskJet 1112', 'IA 1115', 'IA 2135'],
    category: 'hp'
  },
  {
    id: 10, emoji: '🖨️',
    model: 'Canon 325 Toner',
    brand: 'Canon',
    badge: '',
    desc: 'Standard black toner cartridge for Canon LBP series laser printers.',
    compat: ['LBP6000', 'LBP6030', 'MF3010'],
    category: 'canon'
  },
  {
    id: 11, emoji: '🖨️',
    model: 'Epson 008 Black',
    brand: 'Epson',
    badge: 'New',
    desc: 'High-capacity black ink cartridge for Epson EcoTank ET-16150 series.',
    compat: ['ET-16150', 'ET-5170', 'ET-5150'],
    category: 'epson'
  },
  {
    id: 12, emoji: '🎨',
    model: 'Brother LC3617 Color',
    brand: 'Brother',
    badge: '',
    desc: 'High-yield color ink cartridge set for Brother MFC inkjet printers.',
    compat: ['MFC-J3930DW', 'MFC-J3530DW'],
    category: 'brother'
  },
];

let currentFilter = 'all';

function renderProducts(filter = 'all') {
  currentFilter = filter;
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);

  grid.innerHTML = filtered.map(p => `
    <div class="product-card" data-aos>
      <div class="product-img">
        <span style="font-size:5rem; position:relative; z-index:1;">${p.emoji}</span>
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
      </div>
      <div class="product-body">
        <span class="product-brand">${p.brand}</span>
        <div class="product-model">${p.model}</div>
        <p class="product-desc">${p.desc}</p>
        <div class="product-compat">
          ${p.compat.map(c => `<span class="compat-tag">${c}</span>`).join('')}
        </div>
        <a href="javascript:void(0)" class="product-wa-btn" onclick="orderOnWhatsApp('${p.model}')">
          <span>📱</span> Order on WhatsApp
        </a>
      </div>
    </div>
  `).join('');

  // Update filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === filter);
  });
}

// ── Animate on scroll ──
function initAnimations() {
  const cards = document.querySelectorAll('.feature-card, .brand-card, .why-card, .product-card, .about-stat-card');
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    cards.forEach(c => {
      c.style.opacity = '0';
      c.style.transform = 'translateY(24px)';
      c.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(c);
    });
  }
}

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  // Handle hash on load
  const hash = window.location.hash.replace('#', '') || 'home';
  navigate(hash);

  // Render initial products
  renderProducts('all');

  // Setup nav links
  document.querySelectorAll('[data-page]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      navigate(link.dataset.page);
    });
  });

  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => renderProducts(btn.dataset.filter));
  });

  // Mobile menu
  const hamburger = document.getElementById('hamburger');
  if (hamburger) hamburger.addEventListener('click', toggleMobileMenu);

  // Animate after nav
  setTimeout(initAnimations, 100);
});

window.addEventListener('popstate', (e) => {
  if (e.state?.page) navigate(e.state.page);
});
