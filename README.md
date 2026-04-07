# INK TONE – Printer Cartridges UAE
## Website Package

### How to Use
1. Extract the ZIP file
2. Open `index.html` in any web browser — no server needed!
3. All pages (Home, Products, About, Contact) are in a single file with smooth navigation.

### Customization Guide

#### Update WhatsApp Number
In `js/main.js`, line 1:
```
const WA_NUMBER = '971561926510';
```
Replace with your actual number (country code + number, no + or spaces).

Also update all `href="https://wa.me/971561926510..."` links in `index.html`.

#### Add / Edit Products
In `js/main.js`, find the `products` array and add/edit entries:
```js
{
  id: 13, emoji: '🖨️',
  model: 'HP 304 Black',
  brand: 'HP',
  badge: 'New',         // or '' for no badge
  desc: 'Your description here.',
  compat: ['DeskJet 3750', 'DeskJet 3760'],
  category: 'hp'        // hp | canon | epson | brother | samsung
}
```

#### Update Business Hours
In `index.html`, find the `hours-card` section in the Contact page.

#### Update Contact Details
- Email: Search for `inktone.ae@gmail.com` and replace
- Phone: Search for `971561926510` and replace

### Files Structure
```
inktone/
├── index.html       ← Main website (all 4 pages)
├── css/
│   └── style.css    ← All styles
├── js/
│   └── main.js      ← Products data + navigation
└── README.md        ← This file
```

### Features
- ✅ 4 pages: Home, Products, About, Contact
- ✅ 12 sample products with WhatsApp order buttons
- ✅ Brand filter (HP, Canon, Epson, Brother, Samsung)
- ✅ Floating WhatsApp button on all pages
- ✅ Mobile responsive design
- ✅ SEO meta tags included
- ✅ Fast loading (no framework dependencies)
- ✅ Google Fonts (Syne + DM Sans)

### SEO Tips
- Upload to a domain like `inktone.ae` or `inktone.com`
- Add your Google Business listing with the same contact details
- Add product images to replace emoji icons for better SEO

---
Built for INK TONE, UAE 🇦🇪
