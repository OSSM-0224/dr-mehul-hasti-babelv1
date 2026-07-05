# Unique Dental Care — Luxury & Cosmetic Dentistry Platform

Unique Dental Care is a high-end, patient-centric full-stack web application developed for Dr. Mehul Hasti Babel's premium clinics in Chembur and Mankhurd, Mumbai. The platform combines exquisite design with high-performance scheduling, medical tourism guides, interactive treatment directories, and real-time clinical dashboards.

---

## 🛠️ Tech Stack Overview

### Frontend
- **Framework & Tooling**: React (v19), Vite, TypeScript, Redux Toolkit, Tailwind CSS
- **Animations & Interaction**: Framer Motion (`framer-motion`), Embla Carousel (`embla-carousel-react`)
- **Icons & Assets**: Phosphor Icons (`@phosphor-icons/react`), Lucide React (`lucide-react`)
- **Form Handling & Validation**: React Hook Form (`react-hook-form`), Zod (`zod`)

### Backend
- **Server Framework**: Express.js
- **Runtime Tooling**: `tsx` (TypeScript Execution), `esbuild` (Production bundling)
- **Database / Persistence**: Flat-file JSON database for robust local storage (`appointments.json` & `messages.json`)

---

## 📂 Project Structure

The project is organized as a monorepo splitting client and server architectures.

```
root/
├── client/                      # Frontend Vite React App
│   ├── public/                  # Public static assets & brand logos
│   ├── src/                     # Core React codebase
│   │   ├── app/                 # Application entry, state store, & providers
│   │   ├── components/          # Global UI components
│   │   ├── config/              # Constant configurations
│   │   ├── features/            # Feature-based modular architecture
│   │   │   ├── about/           # Profile & clinic philosophies
│   │   │   ├── appointments/    # Form & active appointment queues
│   │   │   ├── contact/         # Branch contacts, maps, and inquiries
│   │   │   ├── dental-tourism/  # Overseas traveler support guides
│   │   │   ├── faq/             # Diagnostic/dental Q&As
│   │   │   ├── footer/          # Editorial navigation elements
│   │   │   ├── gallery/         # Before-and-after smile transformations
│   │   │   ├── header/          # Desktop & mobile responsive navigation
│   │   │   ├── hero/            # Atmospheric intro banner & main CTAs
│   │   │   ├── locations/       # Physical clinic configurations & directions
│   │   │   ├── shared/          # Central tailwind/color styles & helpers
│   │   │   ├── statistics/      # Quality metrics and clinic milestones
│   │   │   ├── team/            # Dental experts & postgraduate specialists
│   │   │   ├── tech/            # High-tech scanners & clinical equipment
│   │   │   ├── testimonials/    # Patient reviews and testimonials
│   │   │   └── whatsapp-chat/   # Simulating assistant live chats
│   │   ├── hooks/               # State/Action wrapper hooks
│   │   ├── services/            # Client-side API request proxies
│   │   ├── types/               # Project-wide types
│   │   ├── utils/               # Tailored styling & cn utilities
│   │   ├── index.css            # Global Tailwind stylesheet
│   │   └── main.tsx             # React DOM bootstrap entry
│   ├── package.json             # Frontend packages
│   ├── tsconfig.json            # Frontend TypeScript config
│   ├── vite.config.ts           # Vite Bundling config
│   └── index.html               # Main index file
├── server/                      # Backend Express App
│   ├── server.ts                # Server entry point
│   └── src/                     # Core Express codebase
│       ├── app.ts               # Express configuration & Vite dev integrations
│       ├── config/              # Server configuration (port, env)
│       ├── controllers/         # Endpoint request handlers
│       ├── database/            # Local flat-file JSON tables
│       ├── repositories/        # File-system data access logic
│       ├── routes/              # Modularized API routing
│       ├── services/            # Business validation & notifications
│       ├── types/               # Shared backend types
│       └── validators/          # Schemas for incoming payload checks
├── appointments.json            # Flat storage of patient schedules
├── messages.json                # Flat storage of contact inquiries
├── metadata.json                # Google AI Studio cloud parameters
└── package.json                 # Master dependency and execution scripts
```

---

## 🏗️ Folder Structure Explanation

Below is a breakdown of the modular `client/src/features/*` subfolders:

| Feature Folder | Description |
| :--- | :--- |
| **about** | Displays biographies of Dr. Mehul Babel & co-founders, dual branch summaries, and core medical value propositions. |
| **appointments** | Implements the scheduling overlay dialogs, validation rules, and the clinical real-time patient queue dashboard. |
| **contact** | Renders location contact cards, physical phone endpoints, and the computerized digital inquiry submission form. |
| **dental-tourism** | Provides personalized itineraries, clinical guidance, and custom support packages for international patients. |
| **faq** | Contains lists of interactive drop-down Q&As answering cosmetic, restorative, and pediatric questions. |
| **footer** | Features the dual maps side-by-side, licensing summaries, and persistent legal navigation layouts. |
| **gallery** | Showcases rich slide visualizers containing high-resolution before-and-after photos of veneer and implant therapies. |
| **header** | Features the responsive sticky header that transitions gracefully between full-size desktop items and hamburger sliders. |
| **hero** | Establishes the visual identity through serif display headings, welcoming background visuals, and rapid actions. |
| **locations** | Manages coordinates, phone routes, Google Map iframe integration, and schedules for the Chembur and Mankhurd branches. |
| **shared** | Declares standard color definitions, brand constants, generic layouts, and fallback asset values. |
| **statistics** | Displays quality counts, dental treatments completed, and student-to-clinician specialization benchmarks. |
| **team** | Displays professional credentials, specialist titles, and licensing info for our clinical dental crew. |
| **tech** | Showcases our investment in dental technologies like computerized X-Rays, intraoral cameras, and modern autoclaves. |
| **testimonials** | Builds interactive carousels for verified patients to share their clinical recovery stories. |
| **treatments** | Compiles interactive catalogs of treatments including cosmetic smile design, implants, orthodontic, and pediatric. |
| **whatsapp-chat** | Provides simulated assistant chat bubbles with ready-to-use booking buttons for fast response. |

---

## ⚡ Getting Started & Local Setup

### 1. Prerequisites
Ensure you have **Node.js (v18 or higher)** installed on your system.

### 2. Installation
Install project dependencies from the repository root:
```bash
npm install
```
This command resolves both the backend development engines and triggers standard installations inside `/client`.

### 3. Environment Configuration
The application is pre-configured to read from `.env.example`. Duplicate this file to create your own configuration:
```bash
cp .env.example .env
```
Key parameters include:
- `PORT` (Defaults to `3000` for seamless reverse proxies)
- `NODE_ENV` (Set to `development` or `production`)

### 4. Running Development Servers
Start the unified full-stack server from the root directory:
```bash
npm run dev
```
In development mode, Express integrates **Vite Dev Middleware**, letting you edit both frontend React code and backend REST routes simultaneously with HMR.

---

## 📜 Master Script Glossary

Manage codebases using the following npm commands from the repository root:

| Command | Action |
| :--- | :--- |
| `npm run dev` | Spins up the backend Express engine on port `3000` with hot-reloading Vite server middleware active. |
| `npm run build` | Builds client static assets into `client/dist` and bundles the Express application into a single self-contained `dist/server.cjs` file. |
| `npm run start` | Runs the compiled server from `dist/server.cjs` in optimized production mode. |
| `npm run clean` | Cleans up the previous build caches in `dist/` and `client/dist/`. |
| `npm run lint` | Performs strict TypeScript checks on frontend configurations (`client/tsconfig.json`). |

---

## 🤝 Contribution Guidelines

- **Main Branch**: Houses stable production deployments. Do not commit failing builds to this branch.
- **Workflow**: Create a localized branch off `main` for individual features:
  ```bash
  git checkout -b feature/your-awesome-feature
  ```
- **Merge Rules**: Open a Pull Request pointing back to `main`. Ensure `npm run lint` passes before request validation.

---

## 📄 License
Proprietary. All rights reserved to Unique Dental Care & Dr. Mehul Hasti Babel, 2026.
