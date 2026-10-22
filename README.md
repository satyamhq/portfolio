# Satyam Kumar — Personal Link Hub

Official personal link hub and profile website for **Satyam Kumar** ([@satyamhq](https://github.com/satyamhq)), Founder & CEO of [Hackerzone](https://hackerzone.in/), deployed at [https://satyam.hackerzone.in/](https://satyam.hackerzone.in/).

Built to Hackerzone's design system, visual standards, and engineering architecture.

---

## 🚀 Features

- **Hackerzone Brand Identity**: Direct reuse of authentic Hackerzone typography, monochrome color palette, CSS variables, logo assets, and favicon family.
- **Verified Link Cards**:
  - Instagram (`@satyamkr.31`)
  - WhatsApp (`+91 6205844155`)
  - LinkedIn (`satyamhq`)
  - GitHub (`satyamhq`)
  - Email (`satyam@hackerzone.in`)
  - Visit Hackerzone (`hackerzone.in`)
- **Flagship Announcement Card**: "Hackerzone S1 Flagship Season" featured announcement card matching Hackerzone's official announcements.
- **Interactive Capabilities**:
  - One-click copy profile link with clipboard feedback toast
  - Native Web Share API integration with automatic clipboard fallback
  - Clean Minimalist Light Theme: Signature clean light aesthetic with persistent `#0a0a0a` Hackerzone dark footer
- **Responsive Layout**: Designed and tested across 320px, 375px, 768px, 1024px, and 1440px viewport widths.
- **Production Performance & SEO / AEO**:
  - Lightweight Vite + React build (< 76 kB gzip bundle)
  - Full Open Graph, Twitter/X cards, and rich Schema.org JSON-LD @graph (ProfilePage, Person, Organization, ItemList, FAQPage)
  - Full AEO/GEO support with `/llms.txt` and permissive AI robots.txt
  - Canonical URL targeting `https://satyam.hackerzone.in/`

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with custom Hackerzone design tokens
- **Icons**: Authentic brand and UI vector SVGs
- **Deployment**: Vercel / Cloudflare Pages / Netlify

---

## 📦 Getting Started

### Prerequisites

- Node.js >= 18 (Tested on v24.13.0)
- npm >= 9

### Installation

```bash
git clone https://github.com/satyamhq/portfolio.git
cd portfolio
npm install
```

### Development Server

```bash
npm run dev
```

### Production Build & Preview

```bash
npm run build
npm run preview
```

---

## 🌐 Subdomain & DNS Deployment (`satyam.hackerzone.in`)

To route `satyam.hackerzone.in` to this application:

### Option A: Vercel (Recommended)
1. Import repository `satyamhq/portfolio` into Vercel.
2. In project settings -> **Domains**, add `satyam.hackerzone.in`.
3. In your DNS provider (Cloudflare, Namecheap, GoDaddy, etc.) managing `hackerzone.in`:
   - **Type**: `CNAME`
   - **Name / Host**: `satyam`
   - **Target / Value**: `cname.vercel-dns.com`
   - **Proxy**: DNS only (or Cloudflare Proxied with SSL mode "Full / Strict")
4. Vercel automatically issues an SSL certificate for HTTPS.

### Option B: Cloudflare Pages
1. Connect repo to Cloudflare Pages.
2. Build command: `npm run build` | Output directory: `dist`.
3. Set custom domain: `satyam.hackerzone.in`.
4. Cloudflare automatically configures the CNAME and HTTPS.

---

## 📄 License

© 2026 Satyam Kumar. All rights reserved.
