# DesignMonks Marketing Homepage

A premium marketing homepage for DesignMonks — a product & design studio.

## Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Sticky navigation header
│   ├── HeroSection.tsx     # Full-bleed dark hero with mockups
│   ├── ServicesCards.tsx   # Colorful pastel service cards
│   ├── TrustTeamRow.tsx    # Team member avatars + testimonials
│   ├── KpiBand.tsx         # Dark KPI metrics band
│   ├── PortfolioMosaic.tsx # Case study tiles
│   ├── ProductTiles.tsx    # Product/deliverable grid
│   ├── BenefitsSection.tsx # Benefits feature list
│   ├── PricingSection.tsx  # Pricing plans (dark)
│   ├── FaqSection.tsx      # FAQ accordion
│   ├── FooterCta.tsx       # Contact form + CTA
│   └── GlobalFooter.tsx    # Site footer
├── index.css               # Design system tokens & styles
└── pages/
    └── Index.tsx           # Main page assembling all sections
```

## Editing Content

### Hero Section (`src/components/HeroSection.tsx`)
- **Headline**: Edit the `<h1>` text
- **Subhead**: Edit the `<p>` below headline
- **Trust badges**: Modify the `trustBadges` array
- **Images**: Replace device mockup content in the "Right - Device Mockups" section

### Services (`src/components/ServicesCards.tsx`)
- Edit the `services` array to change titles, descriptions, colors, and icons
- Available colors: `card-coral`, `card-blue`, `card-yellow`, `card-teal`, `card-purple`

### Team (`src/components/TrustTeamRow.tsx`)
- Edit the `teamMembers` array with names, roles, testimonials, and colors

### KPIs (`src/components/KpiBand.tsx`)
- Edit the `kpis` array for metrics values and labels

### Portfolio (`src/components/PortfolioMosaic.tsx`)
- Edit the `portfolioItems` array for case studies
- To add images: replace the decorative shapes with actual `<img>` tags

### Pricing (`src/components/PricingSection.tsx`)
- Edit the `plans` array for pricing tiers, features, and CTAs
- Set `popular: true` on the featured plan

### FAQ (`src/components/FaqSection.tsx`)
- Edit the `faqs` array for questions and answers

### Contact (`src/components/FooterCta.tsx`)
- Edit email, phone, and social links
- Form is non-functional; integrate with your backend as needed

## Design System

Design tokens are defined in:
- `src/index.css` — CSS custom properties (colors, spacing)
- `tailwind.config.ts` — Extended Tailwind theme

### Key Colors
- Primary dark: `hsl(240 20% 3%)` — #07070A
- Accent violet: `hsl(250 100% 65%)` — #6A4BFF
- Green accent: `hsl(155 100% 50%)` — #00FFA5
- Pastel cards: coral, blue, yellow, teal, purple

### Typography
- Display font: Plus Jakarta Sans
- Body font: Inter

## Adding Images

Replace placeholder mockups with actual images:

1. Add images to `src/assets/` folder
2. Import in component: `import heroMockup from '@/assets/hero-mockup.png'`
3. Use in JSX: `<img src={heroMockup} alt="Product dashboard mockup" />`

For portfolio tiles, add images to the `portfolioItems` array and render them in the component.

## Responsive Breakpoints
- Mobile: < 768px (single column)
- Tablet: 768px - 1024px (2-column grid)
- Desktop: > 1024px (full layout)

## Accessibility
- All images should have descriptive `alt` text
- Interactive elements have focus states (`.focus-ring`)
- Color contrast meets WCAG AA standards
- Accordion uses `aria-expanded` automatically via Radix UI
