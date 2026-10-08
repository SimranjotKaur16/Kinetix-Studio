# ⚡ Kinetix Studio — Next-Gen Kinetic Digital Experience

[![Next.js](https://img.shields.io/badge/Next.js-15.2.8-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![GSAP](https://img.shields.io/badge/GSAP-3.12.5-88CE02?style=for-the-badge&logo=greensock)](https://greensock.com/gsap/)
[![Lenis](https://img.shields.io/badge/Lenis-Smooth_Scroll-FF5C00?style=for-the-badge)](https://lenis.darkroom.engineering/)
[![CSS](https://img.shields.io/badge/CSS-Modular_Design_System-264DE4?style=for-the-badge&logo=css3)](https://developer.mozilla.org/en-US/docs/Web/CSS)

> **Kinetix Studio** is an award-caliber, motion-first creative studio showcase engineered with **Next.js 15**, **React 19**, and advanced **GSAP physics**. Featuring fluid inertia interactions, kinetic typography, elastic physics, dynamic cursor tracking, and seamless scroll orchestration, Kinetix transforms modern web design into a playful, high-performance interactive playground.

---

## 📸 Visual Showcase

<table>
  <tr>
    <td align="center"><b>Hero Header & Dynamic Navigation</b><br/><img width="100%" alt="Header Section" src="https://github.com/user-attachments/assets/195d1543-3e28-4678-8545-567ca9b08767" /></td>
    <td align="center"><b>Kinetic Horizontal Scroller</b><br/><img width="100%" alt="HorizontalWords Section" src="https://github.com/user-attachments/assets/fd76c800-fe37-48a3-a5bc-728aa5cdf5ef" /></td>
  </tr>
  <tr>
    <td align="center"><b>Physics Motion Cards</b><br/><img width="100%" alt="MotionCard Section" src="https://github.com/user-attachments/assets/14d46fcf-f5d4-4b32-ac8e-e99eef1e964f" /></td>
    <td align="center"><b>Elastic Service Cards</b><br/><img width="100%" alt="Service Card Section" src="https://github.com/user-attachments/assets/cb80f406-998e-4853-9ea5-7dec87952117" /></td>
  </tr>
  <tr>
    <td align="center"><b>Dual-Track Infinite Marquee</b><br/><img width="100%" alt="Double Marquee Section" src="https://github.com/user-attachments/assets/9ca5af12-5e0b-4b81-954c-1dcb484c671a" /></td>
    <td align="center"><b>Interactive Kinetic Footer</b><br/><img width="100%" alt="Footer Section" src="https://github.com/user-attachments/assets/1f0c8b9c-50c7-452e-af4c-23cadcdb58c0" /></td>
  </tr>
</table>

---

## 🌟 Key Highlights & Innovations

### 🎯 Motion & Physics Engineering
- **GSAP Inertia & Fling Physics**: Interactive motion cards and floating badges calculate mouse velocity in real time; elements fling organically upon release and snap back with tuned damping.
- **Full-Screen Scribble Page Mask**: Dynamic multi-color SVG scribble mask transitions across the viewport with procedural color selection and smooth scroll resets.
- **Elastic Card Interactions**: Service cards fan out horizontally with spring-physics elasticity on hover, accompanied by scale transitions and responsive stacked mobile reveals.
- **Scroll-Triggered SVG Vector Paths**: Hand-drawn vectors and underline callouts dynamically construct their geometry (`stroke-dasharray`) as they enter the viewport.
- **Proximity-Reactive Stickers**: Floating sticker elements detect pointer speed and trajectory, reacting with directional deflection before springing back into equilibrium.
- **Contextual Magnetic Cursor Blob**: Physics-accelerated fluid cursor bubble that smoothly snaps to interactive surfaces, adapting its shape and labeling on hover.
- **Dual-Track Constraint Marquee**: Infinite marquee powered by a seam-aware Fisher-Yates randomization algorithm that guarantees no duplicate logos or adjacent color collisions across loop boundaries.
- **Lenis Smooth Scroll Engine**: Silky smooth momentum-based scrolling synced directly with GSAP's central animation ticker.

### 🏛️ Architecture & Clean Code
- **Modern Next.js 15 App Router**: Component-driven architecture utilizing React 19 hooks and strict boundary isolation.
- **Zero-Dependency Styling System**: Custom modular CSS architecture with 11 specialized partials driven by CSS custom properties—zero Tailwind bloat.
- **Self-Contained Vector Pipeline**: Multi-tier SVG strategy leveraging symbol definitions (`<use>`), standalone assets, and reactive inline SVG strokes.
- **Centralized Motion Configuration**: Single-source tuning for animation timing, wiggle amplitudes, and brand datasets via `lib/data.js`.

---

## 🛠️ Technology Stack

| Layer | Tooling | Highlights |
|---|---|---|
| **Framework** | Next.js 15 (App Router) | High-performance React framework with optimized asset pipelines |
| **UI Library** | React 19 | Declarative UI state management and modular component lifecycle |
| **Animation Engine** | GSAP 3 + ScrollTrigger + Inertia | Industry-standard timeline sequencing and physics computations |
| **Scroll Engine** | Lenis | Hardware-accelerated smooth scrolling with ticker integration |
| **Design System** | Pure CSS Variables | Bespoke tokenized theming and responsive grid layouts |

---

## 📂 Project Architecture

```text
kinetix-studio/
├── app/
│   ├── styles/                  # Modular CSS design system partials
│   │   ├── base.css             # Typography tokens, CSS variables, resets
│   │   ├── navbar.css           # Navigation styling, state colors, popouts
│   │   ├── hero.css             # Main hero section & animated callouts
│   │   ├── vimeo-hero.css       # Video player container & controls
│   │   ├── motion-cards.css     # Physics-enabled motion card layouts
│   │   ├── showreel.css         # Media showcase styling
│   │   ├── cards.css            # Elastic service cards & overlays
│   │   ├── marquee.css          # Dual-track marquee keyframes
│   │   ├── footer.css           # Dynamic footer, sticker physics, credits
│   │   ├── cursor.css           # Contextual cursor bubble & scribble overlay
│   │   ├── horizontal-words.css # Pinned kinetic typography layouts
│   │   └── responsive.css       # Cross-device breakpoints (tablet/mobile)
│   ├── globals.css              # Root stylesheet aggregator
│   ├── layout.jsx               # Root layout, metadata, font imports
│   └── page.jsx                 # Page composition & component assembly
│
├── components/
│   ├── CursorBubble.jsx         # Velocity-following interactive cursor blob
│   ├── DoubleMarquee.jsx        # Non-repeating brand marquee scroller
│   ├── Footer.jsx               # Interactive footer with proximity stickers
│   ├── HorizontalWords.jsx      # Pinned kinetic text scroller with letter bounce
│   ├── MotionCards.jsx          # Inertia-fling interactive showcase cards
│   ├── Navbar.jsx               # Adaptive navbar with dynamic scroll theming
│   ├── ServiceCards.jsx         # Elastic spread cards with hover spring
│   ├── Showreel.jsx             # Video reel preview module
│   ├── SmoothScroll.jsx         # Lenis momentum scroller + GSAP ticker hook
│   ├── SvgSymbols.jsx           # Reusable SVG symbol registry
│   ├── TransitionScribble.jsx   # Generative SVG scribble transition mask
│   └── VimeoHero.jsx            # Video showcase module with mute tracker
│
├── lib/
│   └── data.js                  # Centralized content, branding, & physics configs
│
├── public/
│   ├── assets/                  # Brand vectors, SVG stickers, illustrations
│   └── fonts/                   # Self-hosted variable typography (DM Sans, Epilogue)
│
├── jsconfig.json                # Absolute import aliases (@/*)
├── next.config.mjs              # Next.js build configuration
└── package.json                 # Dependency manifests
```

---

## 🎬 Animation & Interaction Matrix

| Interaction | Target Component | Core Mechanism |
|---|---|---|
| **Inertia Fling & Snap** | `MotionCards` | `GSAP InertiaPlugin` + velocity tracking |
| **Scribble Mask Transition** | `TransitionScribble` | `GSAP Timeline` + SVG stroke manipulation |
| **Elastic Fan-Out** | `ServiceCards` | `GSAP Elastic.easeOut` spring physics |
| **Dynamic Underline Draw** | `ServiceCards` / `Hero` | SVG `stroke-dasharray` scroll interpolation |
| **Dual-Track Infinite Marquee**| `DoubleMarquee` | Continuous CSS transforms + boundary shuffle |
| **Sticker Proximity Push** | `Footer` | Radial distance calculations + elastic damping |
| **Credits Popout Box** | `Footer` | Dimensional clip-path expansion & text stagger |
| **Contextual Bubble Follow** | `CursorBubble` | `GSAP quickTo` pointer interpolation |
| **Kinetic Letter Bounce** | `HorizontalWords` | ScrollTrigger pinning + staggered spring bounce |
| **Momentum Scroll Sync** | `SmoothScroll` | Lenis scroll engine tied to GSAP requestAnimationFrame |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17+ or higher
- npm, pnpm, or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/SimranjotKaur16/Kinetix-Studio.git
   cd Kinetix-Studio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Launch the development environment**:
   ```bash
   npm run dev
   ```

4. **Access the application**:
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚡ Build & Production

To generate an optimized production build:

```bash
npm run build
npm run start
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
