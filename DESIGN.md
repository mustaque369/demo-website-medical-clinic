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
- **Headings / Doctor Titles:** `Source Serif 4`, Georgia, Cambria, serif — authoritative, prestigious, globally recognized clinical editorial weight (loaded in weights 400–900).
- **Body & UI Controls:** `Plus Jakarta Sans`, system-ui, sans-serif — clean, modern, accessible medical interface typography.
- **Base Size Scale:**
  - Body: `text-sm` (14px) or `14.5px`
  - Subtext / Badges: `text-xs` (12px)
  - Microcopy minimum floor: 11px
  - H1 Headings: `text-3xl sm:text-4xl lg:text-5xl`
  - H2 Headings: `text-2xl sm:text-3xl`
  - H3 Card Titles: `text-base` to `text-xl`

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
