# SIET MERN Website

A modern, highly performant MERN website for Sri Shakthi Institute of Engineering & Technology (SIET), Coimbatore.

## Project Structure

The project adheres to a clean, scalable, modular, and componentized architecture:

```text
SIET_WEB/
├── client/                     # React + Vite frontend
│   ├── public/                 # Brand assets, high-res photos, records, and media
│   └── src/
│       ├── components/         # Reusable UI & layout elements
│       │   ├── common/         # Modals (VideoModal, PlacementModal)
│       │   ├── layout/         # Application shell (Header, Footer)
│       │   └── ui/             # Reusable UI cards & headers (PageHeader, SuperstarCard)
│       ├── data/               # Structured data & content records
│       │   ├── departmentsData.js   # Complete 21-discipline academic curriculum & labs
│       │   ├── curriculumData.js    # Autonomous syllabus regulations & credit tables
│       │   ├── placementsData.js    # Official verified placement records & superstar batch
│       │   ├── programmesData.js    # UG & PG degrees, specifications & details
│       │   ├── navigationData.js    # Site menus, dropdowns & sitemap structure
│       │   ├── internalPageData.js  # Campus facilities, sports, hostels, & clubs
│       │   ├── careersData.js       # Institutional recruitment units & requirements
│       │   └── pageCopyData.js      # Page metadata, descriptions & titles
│       ├── layouts/            # Page templates and wrapper layouts
│       ├── pages/              # Clean, modular page components
│       │   ├── about/          # VisionMission, Chairman, Principal, CoreBeliefs, Values
│       │   ├── academics/      # Departments, DepartmentDetail, Curriculum, Calendar, Library
│       │   ├── admissions/     # Programmes, Enquiry, Referral
│       │   ├── campus/         # CampusLife, Facilities, Hostels, Transport, Sports, NCC/NSS
│       │   ├── common/         # Careers, Dynamic Internal Templates
│       │   └── placements/     # PlacementsDashboard, Entrepreneurship & Startups
│       ├── router/             # Modular router, page renderer & event binding
│       │   └── index.js        # Route dispatcher, modal managers & form handlers
│       ├── sections/           # High-impact page section components
│       │   ├── home/           # HeroSection, AboutSection, ProgrammesSection, etc.
│       │   └── placements/     # PlacementMarqueeSection
│       ├── styles/             # Organized design system & stylesheets
│       │   └── index.css       # Design tokens, responsive grids, and animations
│       ├── utils/              # Pure utilities & SVG dictionaries
│       │   ├── domUtils.js     # DOM helpers, animated counters & scroll observers
│       │   ├── icons.js        # Core system SVG icons
│       │   ├── deptIcons.js    # Department & branch SVG iconography
│       │   └── recruiterLogos.js # Verified corporate recruiter logos
│       ├── App.jsx             # Top-level React mount & lifetime binding
│       └── main.jsx            # React root initialization
├── server/                     # Node.js + Express API
│   ├── config/                 # MongoDB database configuration
│   ├── controllers/            # Request handlers & enquiry processor
│   ├── middleware/             # Security, logging & validation middleware
│   ├── models/                 # Mongoose models for enquiries
│   └── routes/                 # Express API routes
└── package.json                # Workspace orchestration
```

## Run Locally

Requires Node.js 18 or newer.

```bash
npm install
npm run install:all
cp .env.example .env
npm run dev
```

The React/Vite client runs on `http://127.0.0.1:5173` (or `5174` if port is in use) and proxies `/api` to the Express API on port `5050`. Port 5050 avoids common system-service conflicts. Add `MONGODB_URI` to persist admission enquiries. Without MongoDB, the UI remains fully usable and the API returns demo-mode status.

## Production Build

```bash
npm run build
NODE_ENV=production npm start
```

## Vercel Deployment

The repository is configured as an npm workspace. Vercel installs dependencies from the root lockfile, builds the client, publishes `client/dist`, and exposes the Express app through serverless handlers. Add `MONGODB_URI` and `CLIENT_URL` in the Vercel project environment settings when persistent enquiry submissions are required.
