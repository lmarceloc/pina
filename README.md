# Pina Beauty Concept - Version B Implementation

A luxury beauty salon website featuring an elegant warm aesthetic designed for women aged 25-45 in the upper-middle-class market.

## 🎨 Design System

### Color Palette
- **Background (Dark)**: `#1a0f0a` - Deep dark brown
- **Background (Light)**: `#F4EDE4` - Champagne/nude
- **Accent**: `#D4A574` - Gold bronze
- **Secondary Accent**: `#B8895A` - Warm bronze

### Typography
- **Display**: Cormorant Garamond (serif) - Light 300 weight
- **Body**: DM Sans, Jost, or Inter (sans-serif) - Light 300 weight
- **All fonts** support italic styling for emphasis

### Key Features
✨ Smooth reveal animations on scroll
✨ Fixed navigation with scroll-triggered transparency changes
✨ Fully responsive mobile design
✨ WhatsApp integration (fixed floating button + multiple CTAs)
✨ Social media links (Instagram, Facebook)
✨ Professional grid layouts with hover effects
✨ Smooth scrolling navigation

## 📱 Sections

1. **Hero** - Fullscreen introduction with "Diva" watermark and key statistics
2. **Philosophy** - Brand values and mission statement
3. **Atelier** - 5 service cards + special offerings
4. **Team** - 4 team members with professional placeholders
5. **Gallery** - 8-item Instagram feed grid with hover overlays
6. **Visit** - Contact information with address, phone, hours, and office image
7. **Footer** - Brand quote, social links, location

## 📋 Contact Information

**Phone**: (42) 3323-4294 / (42) 99814-4294  
**WhatsApp**: +55 42 9814-4294  
**Address**: Rua Raul Pompeia, 31, Jardim Carvalho, Ponta Grossa, PR  
**Hours**: Ter–Sex 10h–18h | Sábado 9h–18h

## 🚀 Getting Started

Simply open `index.html` in a modern web browser. No build process, no dependencies.

```bash
# Direct file access
open index.html

# Or serve locally
python3 -m http.server 8000
# Then visit http://localhost:8000
```

## 📸 Placeholder Images

The design includes placeholder areas for:
- Team member professional portraits (4 positions)
- Instagram feed items (8 gallery positions)
- Studio/salon facade image

Replace the placeholder styling with actual images by adding `background-image` or `<img>` tags to:
- `.team-photo` - Team member images
- `.gallery-item` - Feed images
- `.visit-image` - Studio facade

## 📱 Responsive Breakpoints

- **Desktop**: 1400px max-width containers
- **Tablet** (≤900px): Single-column layouts, hidden desktop nav
- **Mobile** (≤600px): Stacked buttons, simplified grid layouts

## ✅ Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- All modern mobile browsers

## 🎯 Key Implementation Details

### Animations
- **Reveal**: 1.3s cubic-bezier easing on scroll (threshold 12%)
- **Navbar**: 500ms transition on scroll change
- **Hover**: 400-500ms transitions on interactive elements

### Accessibility
- Semantic HTML structure
- Proper heading hierarchy (h1, h2)
- Sufficient color contrast (WCAG AA)
- All links have clear focus states
- Mobile-friendly touch targets (44px minimum)

### Performance
- Single-file implementation (no external dependencies)
- Optimized Google Fonts loading
- Smooth scroll behavior with passive event listeners
- CSS Grid and Flexbox for efficient layouts

## 🔗 External Links

All services integrate directly with WhatsApp at: `https://wa.me/5542998144294`

Social media links:
- Instagram: `https://www.instagram.com/pinabeautyconcept/`
- Facebook: `https://www.facebook.com/pinabeautconcep/`

## 📝 Customization

To modify colors, fonts, or content:

1. **Colors**: Update CSS variables in the `<style>` section (search for `#1a0f0a`, `#F4EDE4`, `#D4A574`)
2. **Fonts**: Google Fonts are preloaded; adjust in `<link>` tag and CSS rules
3. **Content**: Edit text directly in HTML sections
4. **Images**: Replace placeholder styling with image URLs or `<img>` tags

## 🎬 Animation Timing

- Reveal animations trigger at 12% viewport visibility
- Smooth scroll with native CSS `scroll-behavior: smooth`
- All transitions use cubic-bezier curves for natural motion
- Mobile-optimized with `passive: true` event listeners

---

**Created**: April 28, 2026  
**Design Version**: B - Luxo Quente  
**Status**: Production Ready ✅
