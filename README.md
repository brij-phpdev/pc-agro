# PC AGRO — Solar Energy Solutions

> **Solar Energy. Built on Experience.**  
> Powering Progress. Harnessing the Sun.

Modern, responsive web platform and technical showcase for **PC AGRO** (Business roots dating back to 1978; solar solutions since 2015–16). Built with **React 18**, **TypeScript**, **Vite**, and **Tailwind CSS**, featuring an editorial Digital Moss design system, multi-tier solar solutions discovery, interactive solar savings calculator, project showcases, and full Lovable integration readiness.

---

## 🎨 Design System & Palette (Digital Moss)

- **Moss Ink (`#17251F`):** Deep editorial base for navigation, headers, and footer.
- **Fog (`#E8E7E1`):** Primary calm, modern content background.
- **Moss Green (`#587C60`):** Brand primary accent for call-to-actions, active links, and highlights.
- **Pistachio (`#C0D3B9`):** Soft secondary panels, badges, and subtle focal points.
- **Mist Grey (`#B4B7AE`):** Refined structural dividers and border lines.

---

## 🚀 Key Features

1. **MegaMenu & Dedicated Landing Pages:**
   - Residential Solar (`/solutions/residential`)
   - Commercial Solar (`/solutions/commercial`)
   - Industrial Solar (`/solutions/industrial`)
   - Institutional Solar (`/solutions/institutional`)
   - System Types (`/solutions/system-types`)
2. **Interactive Solar Calculator:**
   - Featured prominently on the Homepage (`/#calculator`) with dynamic estimations for rooftop capacity, annual generation (kWh), cost savings (₹/yr), and carbon offset.
3. **Projects Showcase:**
   - Real-world industrial, commercial, and institutional solar applications (`/projects`).
4. **Heritage & Company Profile:**
   - PC Agro's legacy from 1978 trading roots to solar leadership (`/about`).
5. **Technical Resources & Inquiries:**
   - Solar documentation, technical resources, consultation request forms, and contact portal (`/contact`).

---

## 🛠️ Tech Stack

- **Frontend:** React 18, TypeScript 5.7, Vite 6
- **Routing:** React Router DOM v6
- **Styling:** Tailwind CSS, PostCSS, Autoprefixer
- **Icons:** Lucide React
- **Compatibility:** Lovable, Vercel, Netlify, Cloudflare Pages, Docker, Nginx

---

## 💻 Development & Build

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```

### Production Build
```bash
npm run build
```
Compiled production files are generated in `dist/`.

### Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deployment (Lovable / Vercel / Netlify)

- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **SPA Rewrites:** All routes redirect to `/index.html` (configured for client-side routing).
