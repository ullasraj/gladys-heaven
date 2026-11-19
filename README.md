# Dayoff Journeys - Curated Kerala & South India Tour Platform

A production-grade, highly responsive travel & tour operator web application built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**, designed and modeled after [Dayoff Journeys](https://www.dayoffjourneys.com/).

---

## 🌟 Overview & Core Offerings

**Dayoff Journeys** is a Kerala-based tour operator (headquartered at Chappanangadi, Kottakkal - Perinthalmanna Road, Malappuram) specializing in:
- **South India Paradise Circuits:** Signature tours covering Munnar's emerald tea hills, Ooty's Nilgiris, and Kodaikanal's serene lakes.
- **Kerala Backwaters & Serenity:** Munnar, Thekkady wildlife sanctuaries, and private overnight Alleppey houseboats (Kettuvallam).
- **India's Sacred Paths:** Dedicated spiritual vertical covering Kedarnath, Badrinath, Kashi Vishwanath, Madurai Meenakshi, Rameswaram, and Ajmer Sharif.
- **Dedicated Chauffeur & Fleet Rentals:** Toyota Innova Crysta, Maruti Dzire, Toyota Etios, Force Tempo Travellers, and Force Urbania luxury vans.
- **24/7 Ground Support & Transparent Pricing:** Zero hidden costs, local verified chauffeurs, and personalized travel concierges.

---

## 📂 Project Architecture & Folder Structure

```
├── public/                       # Static public assets (favicons, badges, media)
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── layout.tsx            # Global metadata, SEO tags, and root layout
│   │   ├── globals.css           # Tailwind CSS directives & custom travel themes
│   │   ├── page.tsx              # Comprehensive Home Page
│   │   ├── about/
│   │   │   └── page.tsx          # About Dayoff Journeys (Kerala roots, values)
│   │   ├── contact/
│   │   │   └── page.tsx          # Contact, instant quote, map info & FAQ accordion
│   │   ├── destinations/
│   │   │   ├── page.tsx          # Destinations directory (Munnar, Ooty, Kodai, etc.)
│   │   │   └── [slug]/
│   │   │       └── page.tsx      # Dynamic SSG destination detail page
│   │   ├── fleet/
│   │   │   └── page.tsx          # Transportation & Chauffeur fleet showcase
│   │   ├── packages/
│   │   │   ├── page.tsx          # Filterable catalog with search & sorting
│   │   │   └── [id]/
│   │   │       ├── page.tsx      # Dynamic SSG tour package page
│   │   │       └── PackageDetailClient.tsx # Day-by-day accordion & booking logic
│   │   ├── sacred-paths/
│   │   │   └── page.tsx          # India's Sacred Paths spiritual showcase
│   │   └── api/
│   │       └── inquiry/
│   │           └── route.ts      # API endpoint for handling quotation requests
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── TopBar.tsx        # Announcement, contact details, operating hours
│   │   │   ├── Navbar.tsx        # Sticky responsive navbar with mobile drawer
│   │   │   ├── Footer.tsx        # Comprehensive footer with address, links & trust badges
│   │   │   └── WhatsAppFloat.tsx # Floating WhatsApp conversion button with active ping
│   │   ├── home/
│   │   │   ├── HeroSection.tsx   # Atmospheric hero with backdrop & key metrics
│   │   │   ├── TripSearchWidget.tsx # Multi-factor trip search widget
│   │   │   ├── FeaturedPackages.tsx # Category-filtered package showcase
│   │   │   ├── DestinationsGrid.tsx # Top destination preview cards
│   │   │   ├── SacredPathsHighlight.tsx # India's Sacred Paths highlight section
│   │   │   ├── WhyChooseUs.tsx   # The 6 core Dayoff Journeys advantages
│   │   │   ├── FleetShowcase.tsx # Innova Crysta, Dzire, Tempo Traveller showcase
│   │   │   ├── HowItWorks.tsx    # 4-step seamless booking journey
│   │   │   ├── Testimonials.tsx  # Verified guest reviews & star ratings
│   │   │   └── QuickInquirySection.tsx # Direct interactive quotation form
│   │   ├── packages/
│   │   │   └── PackageCard.tsx   # Rich package card with pricing, duration & badges
│   │   ├── destinations/
│   │   │   └── DestinationCard.tsx # Image destination card with duration & tag
│   │   └── ui/
│   │       ├── BookingModal.tsx  # Universal modal with WhatsApp & form quotation
│   │       ├── SectionHeading.tsx# Reusable badge + title + subtitle component
│   │       ├── StarRating.tsx    # Accessible SVG star rating component
│   │       └── Badge.tsx         # Pill badges with multi-color variants
│   │
│   ├── data/                     # Single source of truth for realistic content
│   │   ├── destinations.ts       # Munnar, Ooty, Kodaikanal, Alleppey, Wayanad, Kedarnath, etc.
│   │   ├── packages.ts           # Complete itineraries, highlights, pricing, inclusions
│   │   ├── sacredPaths.ts        # Spiritual pilgrimage circuits and sacred shrines
│   │   ├── fleet.ts              # Vehicle capacities, luggage, features, day tariffs
│   │   ├── testimonials.ts       # Traveler reviews from families, couples & pilgrims
│   │   └── faqs.ts               # Frequently asked questions & transparent answers
│   │
│   ├── lib/
│   │   └── utils.ts              # INR formatting, WhatsApp link builder, classNames
│   └── types/
│       └── index.ts              # Strict TypeScript interfaces for all entities
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.18+ or 20+ (tested on Node v22.18.0)
- npm or pnpm

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to explore the website.

### Production Build
```bash
npm run build
npm start
```

---

## 🎨 Design & UX Features

- **Branding & Color Scheme:** Deep emerald greens (`#059669`, `#047857`), slate navy darks (`#0f172a`), warm amber gold accents (`#d97706`), reflecting Kerala's tea plantations and tropical serenity.
- **Conversion Optimization:**
  - One-click WhatsApp links (`wa.me/919633403404`) pre-filled with context from package titles and custom itineraries.
  - Interactive multi-step quotation request modals.
  - Floating WhatsApp action button with animated notification pulse.
- **Dynamic & Static Routes (SSG):** All 25 routes pre-rendered statically with `generateStaticParams` for instantaneous page loads and SEO scores.
- **Accessibility & Mobile Responsiveness:** Fully responsive across mobile, tablet, laptop, and ultra-wide screens.
