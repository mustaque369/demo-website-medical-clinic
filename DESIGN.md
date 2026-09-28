# Design System Specification: Dr. Rajib Das, MBBS, MD (Neurology) Clinic

## 1. Brand Identity & Vision
- **Clinic Name:** Dr. Rajib Das Neurological Clinic & Brain Center
- **Doctor:** Dr. Rajib Das, MBBS, MD (Neurology)
- **Specialty:** Consultant Neurologist & Clinical Neurophysiologist
- **Character:** Calm clinical authority, precision diagnostic focus, warm patient reassurance.
- **Palette Identity:** Neutral Warm Hospital Teal & Sage, clinical crisp white, warm slate text.

---

## 2. Color Palette & Tokens
Configured via Tailwind CSS v4 `@theme` in `src/styles/global.css`:

```css
@theme {
  --color-medical-teal: #0f766e;        /* Deep Hospital Teal / Sage primary */
  --color-medical-teal-dark: #115e59;   /* Hover teal */
  --color-medical-teal-light: #f0fdfa;  /* Subtle tinted teal surface */
  --color-medical-navy: #0f172a;        /* High-contrast headings */
  --color-medical-slate: #334155;       /* Refined text */
  --color-medical-bg: #f8fafc;          /* Ultra clean clinical light */
  --color-medical-card: #ffffff;        /* Crisp card */
  --color-medical-border: #e2e8f0;      /* Subtle border */
  --color-whatsapp: #25D366;
  --color-whatsapp-hover: #1ebe5d;
}
```

---

## 3. Typography
- **Editorial Display Serif:** `Spectral`, Georgia, Cambria, serif — calm, screen-tuned editorial serif. Headings use weights **400-500 only** (never black) with negative tracking so they read sophisticated rather than oversized.
- **Body, Navigation & UI:** `Plus Jakarta Sans`, system-ui, sans-serif — clean, modern, accessible interface typography for body copy, navigation, buttons, labels and form controls.
- **Editorial Type Scale** (defined in `src/styles/global.css` via `@theme` tokens + `.text-*` utilities):
  - Hero display: `.text-display` — clamp(2.5rem to 3.875rem) · weight 400 · tracking -0.022em · leading 1.08
  - Page h1: `.text-h1` — clamp(2.125rem to 3.125rem) · leading 1.14 · tracking -0.02em
  - Section h2: `.text-h2` — clamp(1.75rem to 2.375rem) · weight 400 · tracking -0.016em · leading 1.22
  - Sub-headings / card titles: `.text-h3` · `.text-h4` · `.text-h5` — serif weight 500, leading 1.32-1.45
  - Body copy: `.text-lead` (17-19px) · `.text-body` (16-17px, leading 1.75) · `.text-body-sm` (15px) · `.text-caption` (13px)
  - Labels / eyebrows: `.text-label` (uppercase, 12px, 600, tracking 0.16em) · `.text-form-label` (13px, 600, sentence case)
  - Navigation / buttons: `.text-nav` (15px, 500) · `.text-btn` (15px, 600, tracking 0.012em)
  - Brand lockup / metrics: `.text-brand` (serif 500) · `.text-stat` (serif 400, tabular figures)
  - Tailwind size defaults are overridden in `@theme` for calmer small text: `text-xs` 13px, `text-sm` 15px, `text-base` 16px, each with a matched line-height.

---

## 4. UI Components Architecture
1. **Top Emergency & Contact Bar:**
   - Accepting New Patients badge with live pulse indicator
   - OPD schedule: `Mon – Sat: 9:00 AM – 7:00 PM`
   - Direct phone link + matched WhatsApp button with official green badge
2. **Sticky Main Navigation:**
   - Doctor credentials badge (`MBBS, MD`)
   - Accessible hamburger drawer with `aria-expanded` and `aria-controls`
   - Desktop sticky contact cluster (Phone + WhatsApp + Book Appointment) that persists after the top bar scrolls away
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
   - Compact, auto-scrolling marquee with pause on `:hover` and `:focus-within`
   - Exact mathematical loop seam (`calc(-50% - 0.5rem)`)
   - Duplicate set marked with `aria-hidden="true"`
   - Completely stopped under `prefers-reduced-motion`
6. **Location & Transit Map Card:**
   - Branded card header with clinic address and "Get Directions" link
   - Accessible iframe with descriptive `title`
7. **Appointment Modal:**
   - Full `role="dialog"` and `aria-modal="true"` semantics
   - Escape-key close handler
   - Tab focus-trap within the modal
   - Body scroll locking (`overflow: hidden`)
   - Returns focus to trigger button on close
8. **Persistent Mobile Bottom Bar:**
   - Fixed thumb-friendly action bar on mobile with matched icon sizing (Call Doctor + WhatsApp)

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

### 6.1 Restrained palette (warm, clinical, no neon)
| Token | Value | Use |
|---|---|---|
| `--color-ivory` | `#faf7f1` | Page base, hero wash |
| `--color-cream` | `#f4efe6` | Alternating sections, marquee surface |
| `--color-beige` / `--color-beige-soft` | `#e8e0d3` / `#f0e9dd` | Hairlines, quiet buttons, image frames |
| `--color-white` (overridden) | `#fffdf9` | Cards and panels (warm white, never pure white) |
| `--color-charcoal` / `--color-charcoal-soft` | `#1b1f1d` / `#2b312d` | Dark sections, footer, primary text anchors |
| `--color-ink` / `--color-graphite` / `--color-mist` | `#2f3633` / `#555d58` / `#7c857f` | Body, secondary, muted text |
| `--color-teal-deep` (aka `teal-700`) | `#245046` | Brand actions, labels, focus rings |
| `--color-teal-800` / `teal-950` | `#1c4038` / `#0d201c` | Stats band, dark feature sections |
| `--color-sage` / `sage-soft` / `emerald-*` | `#8aa08a`, `#e9efe7`, `#8fae86`-`#4b6b46` | Availability & verified status (soft, not neon) |
| `--color-amber-*` | `#f8f1e3` → `#533b17` | Emergency notice only |
| WhatsApp brand | `#1da851` / `#178f45` | Deepened from stock green to stay recognisable but not neon |

The Tailwind utility palette used across the markup (`slate-*`, `teal-*`, `emerald-*`, `amber-*`, `white`) is **remapped in `@theme`** to the warm values above, so the entire site re-skins from tokens without touching markup.

### 6.2 De-bubbled radii & quiet elevation
- `--radius-xl` `0.3125rem` · `--radius-2xl` `0.375rem` · `--radius-3xl` `0.5rem` · `--radius-sm` `0.125rem` — crisp, print-like corners instead of 12-24px bubbles.
- `--shadow-xs/sm/md/lg/xl` are warm (`rgba(27,31,29,…)`) and shallow: hairline separation, never floating glass panels.

### 6.3 Buttons (solid, calm, editorial)
`.btn` + variant `.btn-teal` · `.btn-charcoal` · `.btn-outline` · `.btn-quiet` · `.btn-whatsapp`, with `.btn-sm` / `.btn-lg` sizes.
Flat fills, 1px borders, `radius-lg`, no glow shadows, no translate-on-hover, no backdrop blur. `box-shadow: none` is enforced so leftover utility shadows can never reintroduce glow. The legacy `btn-glass-*` names are kept as aliases so nothing breaks mid-migration.

### 6.4 Surfaces, cards & icon tiles
- `.surface` / `.medical-card-enhanced`: warm white, 1px `slate-200` hairline, 6px radius, no resting shadow; hover only deepens the hairline to `slate-300` + `shadow-sm`.
- `.icon-badge-*`: hairline outlined squares with a deep-teal glyph (replaces filled colour chips).
- Section headers use `.text-label` square tags (`rounded-sm`) instead of pill badges.

### 6.5 Image treatment
- `.img-frame`: hairline beige frame, 6px radius, ivory placeholder while loading.
- `.img-scrim`: one restrained bottom-up charcoal scrim for caption legibility (replaces per-image gradient stacks).
- Grade: `saturate(0.94) contrast(1.03)` applied only inside frames - cinematic, consistent, never washed out.
- `.marquee-fade-l/r`: edge fades locked to `--color-cream` so they match the section surface exactly.

### 6.6 Section rhythm & containers
- `.section` = `4.5rem` mobile / `6.5rem` md / `8rem` xl vertical padding; `.section-sm` = `3rem` / `4.5rem`.
- `.container-main` (78rem) and `.container-narrow` (46rem) replace ad-hoc `max-w-* px-*` combos for consistent gutters.
- Backgrounds alternate on purpose: ivory hero → deep teal stats → cream → warm white → cream → warm white → charcoal CTA.
- `.hero-wash`: single quiet radial over ivory - depth without a gradient stack.
- `.rule`: 1px `--color-beige` divider when a section needs separation without a surface change.

### 6.7 Deliberately avoided
Glassmorphism (`backdrop-filter`), purple/blue gradients, neon accents, giant glowing buttons, motion for its own sake (`animate-pulse` removed), pure-white surfaces, pill-shaped micro-badges, and decorative filled icon chips.