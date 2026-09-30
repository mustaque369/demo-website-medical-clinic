# Design System Specification: Dr. Rajib Das, MBBS, MD (Neurology) Clinic

## 1. Brand Identity & Vision
- **Clinic Name:** Dr. Rajib Das Neurological Clinic & Brain Center
- **Doctor:** Dr. Rajib Das, MBBS, MD (Neurology)
- **Specialty:** Consultant Neurologist & Clinical Neurophysiologist
- **Character:** Calm clinical authority, precision diagnostic focus, warm patient reassurance.
- **Palette Identity:** Clinical blue (#0c4a8a brand) with cool neutrals and clinical white, slate text.

---

## 2. Color Palette & Tokens
Configured via Tailwind CSS v4 `@theme` in `src/styles/global.css`:

```css
@theme {
  --color-medical-teal: #0c4a8a;        /* Primary brand blue */
  --color-medical-teal-dark: #0a3d72;   /* Hover */
  --color-medical-teal-light: #eff6ff;  /* Subtle tinted surface */
  --color-medical-navy: #0f172a;        /* High-contrast headings */
  --color-medical-slate: #334155;       /* Refined text */
  --color-medical-bg: #ffffff;          /* Ultra clean clinical light */
  --color-medical-card: #ffffff;        /* Crisp card */
  --color-medical-border: #e2e8f0;      /* Subtle border */
  --color-whatsapp: #25D366;
  --color-whatsapp-hover: #1ebe5d;
}
```

---

## 3. Typography
- **Editorial Display Serif:** `Lora`, Georgia, Cambria, serif — calm, screen-tuned editorial serif. `.text-display/.text-h1/.text-h2` use weight **300**, `.text-h3/.text-h4` use **400**, card/body accents use **500** (never black), with negative tracking so they read sophisticated rather than oversized.
- **Body, Navigation & UI:** `Inter`, system-ui, sans-serif — clean, modern, accessible interface typography for body copy, navigation, buttons, labels and form controls.
- **Editorial Type Scale** (defined in `src/styles/global.css` via `@theme` tokens + `.text-*` utilities):
  - Hero display: `.text-display` — `clamp(2.25rem, 4vw + 1rem, 3.25rem)` · weight 300 · tracking -0.03em · leading 1.05
  - Page h1: `.text-h1` — `clamp(1.875rem, 3vw + 1rem, 2.75rem)` · leading 1.1 · tracking -0.025em
  - Section h2: `.text-h2` — `clamp(1.625rem, 2vw + 1rem, 2.25rem)` · weight 300 · tracking -0.015em · leading 1.2
  - Sub-headings / card titles: `.text-h3` · `.text-h4` · `.text-h5` — serif weight 400-500, leading 1.3-1.45
  - Body copy: `.text-lead` (18-20px) · `.text-body` (16-17px, leading 1.8) · `.text-body-sm` (15px) · `.text-caption` (13px)
  - Labels / eyebrows: `.text-label` (uppercase, 12px, 600, tracking 0.16em) · `.text-form-label` (13px, 600, sentence case)
  - Navigation / buttons: `.text-nav` (15px, 500) · `.text-btn` (15px, 600, tracking 0.012em)
  - Brand lockup / metrics: `.text-brand` (serif 500) · `.text-stat` (serif 400, tabular figures)
  - Tailwind size defaults are overridden in `@theme` for calmer small text: `text-xs` 13px, `text-sm` 15px, `text-base` 16px, each with a matched line-height.

---

## 4. UI Components Architecture
1. **Top Emergency & Contact Bar:**
   - Removed: emergency information now lives in the contact page's emergency protocol card and the booking modal footer.
2. **Sticky Main Navigation:**
   - Doctor brand lockup (`Dr. Rajib Das` · `Neurologist`)
   - Accessible hamburger panel below desktop widths (`aria-expanded`, `aria-controls`, Escape to close, closes on navigation and on resize past the breakpoint)
   - Desktop links appear from `xl` so the header can never overflow on tablets; a bordered "Book Consultation" pill shows from `sm`
3. **Full-Horizon Statistics Band:**
   - 4 key metrics with SVG icon anchors:
     - 15+ Years Clinical Practice
     - 12,500+ Patients Treated
     - 3,800+ EEG & EMG Diagnostics
     - 99% Patient Satisfaction
   - HTML renders final values by default (graceful degradation)
   - Single-run IntersectionObserver animation (skipped under `prefers-reduced-motion`)
4. **Clinical Services Cards (6 Pillars):**
   - Stroke & Cerebrovascular Care
   - Chronic Migraine & Headache
   - Epilepsy & Seizure Disorders
   - Parkinson's & Movement Care
   - Neuropathy & Sciatica Relief
   - Memory Loss & Dementia
5. **Patient Reviews Section:**
   - Compact paged carousel: 1 card on mobile, 2 on tablet, 3 on desktop
   - Prev/next buttons, generous touch-size page dots (`aria-current`), keyboard arrows, and touch swipe
   - Completely stopped under `prefers-reduced-motion`
6. **Location & Transit Map Card:**
   - Branded card header with clinic address and "Get Directions" link
   - Accessible iframe with descriptive `title`
7. **Appointment Modal:**
   - Full `role="dialog"` and `aria-modal="true"` semantics
   - Escape-key close handler
   - Tab focus-trap within the modal
   - Background scroll locking while open
   - Returns focus to the trigger button on close
   - Past dates blocked via `min` (today); form resets after submit
   - Numbers/links come from `src/constants/clinic.ts` — never hardcoded
8. **Persistent Mobile Bottom Bar:**
   - Fixed thumb-friendly action bar on phones (<768px): Call + WhatsApp + Book
   - Safe-area-aware bottom padding; page content reserves matching space

---

## 5. Information Architecture
- `/` — Home (Hero, Stats, Services, Clinical Philosophy, Reviews Marquee, Map Card, Bottom CTA)
- `/about` — About Dr. Rajib Das (Biography, Academic Pedigree, Facilities, Memberships, Reviews)
- `/services` — Neurological Services & Diagnostics (EEG, EMG/NCV, VEP/SSEP, Cognitive, Conditions, FAQ Accordion)
- `/contact` — Contact & Scheduling (Booking Form with noscript fallback, Transit Guide, Map Card)
- `/404` — Clean branded fallback page
- `/sitemap.xml` — Dynamically generated search engine sitemap
- `/robots.txt` — Crawler directives pointing to sitemap
---

## 6. Visual Design System (Premium Editorial)
Refined in `src/styles/global.css`. Tokens live in `@theme`; component classes live in `@layer utilities`.

### 6.1 Restrained palette (clinical blue/slate, no neon)
| Token | Value | Use |
|---|---|---|
| `--color-ivory` | `#ffffff` | Page base, hero wash |
| `--color-cream` | `#f5f9ff` | Alternating sections, marquee surface |
| `--color-beige` / `--color-beige-soft` | `#e2e8f0` / `#f0f4f8` | Hairlines, quiet buttons, image frames |
| `--color-white` (overridden) | `#ffffff` | Cards and panels |
| `--color-charcoal` / `--color-charcoal-soft` | `#0a1628` / `#132a4a` | Dark sections, footer, primary text anchors |
| `--color-ink` / `--color-graphite` / `--color-mist` | `#1a2332` / `#4a5568` / `#718096` | Body, secondary, muted text |
| `--color-teal-deep` (aka `teal-700`) | `#0c4a8a` | Brand actions, labels, focus rings |
| `--color-teal-800` / `teal-950` | `#1e40af` / `#172554` | Dark feature sections |
| `--color-sage` / `sage-soft` | `#60a5fa` / `#eff6ff` | Soft accent tints |
| `--color-emerald-*` | `#34d399` / `#10b981` / `#047857` | Verified/success accents |
| `--color-amber-*` | `#fffbeb`-`#fef3c7` tints → `#92400e` / `#78350f` | Emergency notice only |
| WhatsApp brand | `#1da851` / `#178f45` | Deepened from stock green to stay recognisable but not neon |

The Tailwind utility palette used across the markup (`slate-*`, `teal-*`, `emerald-*`, `amber-*`, `white`) is **remapped in `@theme`** to the cool values above, so the entire site re-skins from tokens without touching markup.

### 6.2 De-bubbled radii & quiet elevation
- `--radius-xl` `1rem` · `--radius-2xl` `1.25rem` · `--radius-3xl` `1.5rem` · `--radius-sm` `0.375rem` — crisp clinical corners.
- `--shadow-xs/sm/md/lg/xl` are cool (`rgba(15,23,42,…)`) and shallow: hairline separation, never floating glass panels.

### 6.3 Buttons (solid, calm, editorial)
`.btn` + variant `.btn-teal` · `.btn-charcoal` · `.btn-outline` · `.btn-quiet` · `.btn-whatsapp` · `.btn-light` · `.btn-outline-light`, with `.btn-sm` / `.btn-lg` sizes.
Flat fills, 1px borders, `radius-lg`, no glow shadows, no translate-on-hover, no backdrop blur. `box-shadow: none` is enforced so leftover utility shadows can never reintroduce glow. The legacy `btn-glass-*` names are kept as aliases so nothing breaks mid-migration.

### 6.4 Surfaces, cards & icon tiles
- `.surface` / `.medical-card-enhanced`: white, 1px `slate-200` hairline, 20px radius, no resting shadow; hover only deepens the hairline to `slate-300` + `shadow-sm`.
- `.icon-badge-*`: hairline outlined squares with a deep-teal glyph (replaces filled colour chips).
- Section headers use `.text-label` square tags (`rounded-sm`) instead of pill badges.

### 6.5 Image treatment
- `.img-frame`: hairline beige frame, 6px radius, ivory placeholder while loading.
- `.img-scrim`: one restrained bottom-up charcoal scrim for caption legibility (replaces per-image gradient stacks).
- Grade: `saturate(0.94) contrast(1.03)` applied only inside frames - cinematic, consistent, never washed out.
- `.marquee-fade-l/r`: edge fades locked to `--color-cream` so they match the section surface exactly.

### 6.6 Section rhythm & containers
- `.section` = `3.5rem` mobile / `4.5rem` md / `5.5rem` xl vertical padding; `.section-sm` = `3rem` / `4.5rem`.
- `.container-main` (78rem) and `.container-narrow` (46rem) replace ad-hoc `max-w-* px-*` combos for consistent gutters.
- Backgrounds alternate on purpose: white clinical hero → `teal-50` stats band → white services → `cream` doctor profile → `slate-50` reviews → white location/map → white booking CTA → charcoal footer.
- `.hero-wash`: one quiet blue radial over white - depth without a gradient stack.
- `.rule`: 1px `--color-beige` divider when a section needs separation without a surface change.

### 6.7 Deliberately avoided
Glassmorphism (`backdrop-filter`), purple/blue gradients, neon accents, giant glowing buttons, motion for its own sake (`animate-pulse` removed), pure-white surfaces, pill-shaped micro-badges, and decorative filled icon chips.