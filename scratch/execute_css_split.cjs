const fs = require('fs');
const path = require('path');
const postcss = require('postcss');

console.log('Reading index.css...');
const rawCss = fs.readFileSync('client/src/styles/index.css', 'utf8');
const root = postcss.parse(rawCss);

// Helper to categorize every selector
function getCategory(selector) {
  const sel = selector.toLowerCase();

  // Root variables
  if (sel === ':root') return 'variables';

  // 1. Modals
  if (sel.includes('.video-modal') || sel.includes('.video-shell') || sel.includes('.video-frame') || sel.includes('.video-close')) {
    return 'videoModal';
  }
  if (
    sel.includes('.placement-modal') ||
    sel.includes('.pm-') ||
    sel.includes('.siet-records-modal') ||
    sel.includes('.siet-banner-modal')
  ) {
    return 'placementModal';
  }

  // 2. Header
  if (
    sel.includes('.notice') ||
    sel.includes('header') ||
    sel.includes('navbar') ||
    sel.includes('.institution-') ||
    sel.includes('.mobile-nav') ||
    sel.includes('.counselling-code') ||
    sel.includes('.nav-group')
  ) {
    return 'header';
  }

  // 3. Footer
  if (
    sel.includes('footer') ||
    sel.includes('.legal') ||
    sel.includes('.mark')
  ) {
    return 'footer';
  }

  // 4. UI Primitives
  if (
    sel.includes('.page-hero') ||
    sel.includes('.enhanced-page-hero') ||
    sel.includes('.siet-hud-header') ||
    sel.includes('.department-detail-header') ||
    sel.includes('.hud-') ||
    sel.includes('.hero-backdrop') ||
    sel.includes('.hero-radial-glow') ||
    sel.includes('.hero-inner-container') ||
    sel.includes('.hero-breadcrumbs') ||
    sel.includes('.hero-gold-trim-bar') ||
    sel.includes('.page-crest') ||
    sel.includes('.bc-')
  ) {
    return 'pageHeader';
  }

  if (
    sel.includes('.siet-sp-card') ||
    sel.includes('.siet-sp-ctc') ||
    sel.includes('.siet-sp-tier') ||
    sel.includes('.siet-sp-name') ||
    sel.includes('.siet-sp-dept') ||
    sel.includes('.siet-sp-company') ||
    sel.includes('.siet-co-') ||
    sel.includes('.siet-tr-') ||
    sel.includes('.siet-sp-batch')
  ) {
    return 'superstarCard';
  }

  // 5. Careers
  if (
    sel.includes('career')
  ) {
    return 'careers';
  }

  // 6. Placements & Startups
  if (
    sel.includes('.siet-pe-page') ||
    sel.includes('.siet-sp-') ||
    sel.includes('.siet-yw-') ||
    sel.includes('.siet-tmpl-') ||
    sel.includes('.siet-chart-') ||
    sel.includes('.siet-pj-') ||
    sel.includes('.siet-he-intl') ||
    sel.includes('.siet-als-') ||
    sel.includes('.edc-') ||
    sel.includes('.siet-edc-') ||
    sel.includes('.startup') ||
    sel.includes('.st-modal') ||
    sel.includes('.salary-grid') ||
    sel.includes('.dashboard-head') ||
    sel.includes('.subheading-gold-line') ||
    sel.includes('.subheading-batch')
  ) {
    return 'placements';
  }

  // 7. Campus Experience (Chronicles, Atlas, Residence, Transit, Sports, Clubs, NCC/NSS)
  if (
    sel.includes('.campus-experience') ||
    sel.includes('.campus-life-editorial') ||
    sel.includes('.facilities-architecture') ||
    sel.includes('.hostel-residence') ||
    sel.includes('.transport-network') ||
    sel.includes('.sports-performance') ||
    sel.includes('.clubs-directory') ||
    sel.includes('.service-command') ||
    sel.includes('.ce-') ||
    sel.includes('.sft-') ||
    sel.includes('.st-') ||
    sel.includes('.club-detail')
  ) {
    return 'campus';
  }

  // 8. Academics (Departments, DepartmentDetail, Curriculum, AcademicCalendar, Library)
  if (
    sel.includes('.departments-page') ||
    sel.includes('.departments-index-page') ||
    sel.includes('.dept-') ||
    sel.includes('.department-') ||
    sel.includes('.siet-curr-') ||
    sel.includes('.curr-') ||
    sel.includes('.js-curr-') ||
    sel.includes('.siet-calendar-') ||
    sel.includes('.cal-') ||
    sel.includes('.siet-library-') ||
    sel.includes('.siet-lib-') ||
    sel.includes('.js-lib-')
  ) {
    return 'academics';
  }

  // 9. Admissions (Programmes page, Enquiry, Referral)
  if (
    sel.includes('.siet-programmes-page') ||
    sel.includes('.siet-prog-') ||
    sel.includes('.enquiry-') ||
    sel.includes('.referral-') ||
    sel.includes('.siet-referral') ||
    sel.includes('.support-card-v3') ||
    sel.includes('.quick-facts-v3') ||
    sel.includes('.need-help-')
  ) {
    return 'admissions';
  }

  // 10. About (Vision & Mission, Chairman, Principal, Core Beliefs, Values)
  if (
    sel.includes('.siet-vm-') ||
    sel.includes('.siet-cd-') ||
    sel.includes('chairman') ||
    sel.includes('principal') ||
    sel.includes('.vision-') ||
    sel.includes('.siet-cb-') ||
    sel.includes('.siet-po-') ||
    sel.includes('.siet-cv-')
  ) {
    return 'about';
  }

  // 11. Home Sections
  if (
    sel.includes('programme') ||
    sel.includes('.prog-') ||
    sel.includes('.bottom-banner') ||
    sel.includes('.feature-') ||
    sel.includes('.watermark-script')
  ) {
    return 'programmesSection';
  }

  if (
    sel.includes('.editorial-lead-section') ||
    sel.includes('.who-we-are-section') ||
    sel.includes('.about-grid') ||
    sel.includes('.about-col') ||
    sel.includes('.about-premium') ||
    sel.includes('.stat-card-v2') ||
    sel.includes('.stat-main') ||
    sel.includes('.stat-extra') ||
    sel.includes('.stat-box') ||
    sel.includes('.signature-badge')
  ) {
    return 'aboutSection';
  }

  if (
    sel.includes('campus-gallery') ||
    sel.includes('campus-life') ||
    sel.includes('.campus-section') ||
    sel.includes('.campus-container') ||
    sel.includes('.campus-left') ||
    sel.includes('.campus-description') ||
    sel.includes('.campus-stat-card') ||
    sel.includes('.campus-content') ||
    sel.includes('.life-') ||
    sel.includes('.story-') ||
    sel.includes('instagram') ||
    sel.includes('.social-') ||
    sel.includes('.youtube-btn') ||
    sel.includes('.gallery-') ||
    sel.includes('.card-top') ||
    sel.includes('.card-content') ||
    sel.includes('.card-arrow') ||
    sel.includes('.card-icon')
  ) {
    return 'campusLifeSection';
  }

  if (
    sel.includes('lab')
  ) {
    return 'specialLabsSection';
  }

  if (
    sel.includes('event') ||
    sel.includes('.featured-')
  ) {
    return 'eventsSection';
  }

  if (
    sel.includes('placement-marquee')
  ) {
    return 'placementMarqueeSection';
  }

  if (
    sel.includes('placement') ||
    sel.includes('.ps-') ||
    sel.includes('hero') ||
    sel.includes('home')
  ) {
    return 'homeHero';
  }

  // 12. Internal Page template
  if (
    sel.includes('.internal-page') ||
    sel.includes('.enhanced-template-page') ||
    sel.includes('.enhanced-page-content') ||
    sel.includes('.template-') ||
    sel.includes('.t-hero') ||
    sel.includes('.thv-') ||
    sel.includes('.pillar-') ||
    sel.includes('.bento-') ||
    sel.includes('.running-gallery') ||
    sel.includes('.rg-') ||
    sel.includes('.hdc-') ||
    sel.includes('.faq-') ||
    sel.includes('.cta-') ||
    sel.includes('.contact-detail') ||
    sel.includes('.flip-card')
  ) {
    return 'internalPage';
  }

  // 13. Common utilities
  if (
    sel.includes('.button') ||
    sel.includes('.btn') ||
    sel.includes('.count-pill') ||
    sel.includes('.status') ||
    sel.includes('.is-visible') ||
    sel.includes('.reveal') ||
    sel.includes('.js-counter') ||
    sel.includes('.section-tag-pill') ||
    sel.includes('.tag-dot') ||
    sel.includes('.ui-icon') ||
    sel.includes('.compact') ||
    sel.includes('.sr-only') ||
    sel.includes('.visually-hidden')
  ) {
    return 'utilities';
  }

  // 14. Global rules
  if (
    sel === 'html' ||
    sel === 'body' ||
    sel === '#root' ||
    sel.includes('html, body') ||
    sel.includes('body, #root') ||
    sel === '*' ||
    sel === '*:before' ||
    sel === '*:after' ||
    sel === '*::before' ||
    sel === '*::after' ||
    sel.includes('box-sizing') ||
    sel.startsWith('h1') ||
    sel.startsWith('h2') ||
    sel.startsWith('h3') ||
    sel.startsWith('h4') ||
    sel.startsWith('h5') ||
    sel.startsWith('h6') ||
    sel.startsWith('p') ||
    sel.startsWith('a') ||
    sel.startsWith('img') ||
    sel.startsWith('video') ||
    sel.startsWith('iframe') ||
    sel.startsWith('svg') ||
    sel.startsWith('button') ||
    sel.startsWith('input') ||
    sel.startsWith('select') ||
    sel.startsWith('textarea') ||
    sel.includes('site-application')
  ) {
    return 'global';
  }

  return 'global';
}

function getNodeCategory(node) {
  if (node.type === 'comment') return null;

  if (node.type === 'atrule') {
    if (node.name === 'import') return 'global';
    if (node.name === 'keyframes') {
      const kf = node.params.toLowerCase();
      if (kf.includes('marquee') || kf.includes('superstar') || kf.includes('recruiter')) return 'placements';
      if (kf.includes('prog')) return 'programmesSection';
      if (kf.includes('radar') || kf.includes('signal') || kf.includes('scan') || kf.includes('orbit')) return 'campus';
      if (kf.includes('chart') || kf.includes('counter')) return 'utilities';
      return 'global';
    }
    if (node.name === 'media' || node.name === 'supports') {
      const childCategories = {};
      node.walkRules(r => {
        const cat = getCategory(r.selector);
        childCategories[cat] = (childCategories[cat] || 0) + 1;
      });
      let bestCat = 'global';
      let bestCount = 0;
      for (const [c, cnt] of Object.entries(childCategories)) {
        if (cnt > bestCount) {
          bestCount = cnt;
          bestCat = c;
        }
      }
      return bestCat;
    }
  }

  if (node.type === 'rule') {
    return getCategory(node.selector);
  }

  return 'global';
}

// Target file definitions
const fileMap = {
  variables: 'client/src/styles/variables.css',
  global: 'client/src/styles/global.css',
  utilities: 'client/src/styles/utilities.css',
  header: 'client/src/components/layout/Header.css',
  footer: 'client/src/components/layout/Footer.css',
  videoModal: 'client/src/components/common/VideoModal.css',
  placementModal: 'client/src/components/common/PlacementModal.css',
  pageHeader: 'client/src/components/ui/PageHeader.css',
  superstarCard: 'client/src/components/ui/SuperstarCard.css',
  homeHero: 'client/src/sections/home/HeroSection.css',
  programmesSection: 'client/src/sections/home/ProgrammesSection.css',
  aboutSection: 'client/src/sections/home/AboutSection.css',
  campusLifeSection: 'client/src/sections/home/CampusLifeSection.css',
  specialLabsSection: 'client/src/sections/home/SpecialLabsSection.css',
  eventsSection: 'client/src/sections/home/EventsSection.css',
  placementMarqueeSection: 'client/src/sections/placements/PlacementMarqueeSection.css',
  about: 'client/src/pages/about/About.css',
  academics: 'client/src/pages/academics/Academics.css',
  admissions: 'client/src/pages/admissions/Admissions.css',
  campus: 'client/src/pages/campus/Campus.css',
  placements: 'client/src/pages/placements/Placements.css',
  careers: 'client/src/pages/common/Careers.css',
  internalPage: 'client/src/pages/common/InternalPage.css'
};

const buckets = {};
Object.keys(fileMap).forEach(k => buckets[k] = []);

// Deduplicate identical rules, keeping the later occurrence (cascade order preserved)
const seen = new Set();
const deduped = [];

for (let i = root.nodes.length - 1; i >= 0; i--) {
  const node = root.nodes[i];
  if (node.type === 'rule') {
    const key = `${node.selector.trim()}@@${node.nodes.map(n => n.toString()).sort().join(';')}`;
    if (seen.has(key)) continue;
    seen.add(key);
    deduped.unshift(node);
  } else if (node.type === 'atrule') {
    const key = `@${node.name} ${node.params.trim()}@@${node.nodes ? node.nodes.map(n => n.toString()).sort().join(';') : ''}`;
    if (seen.has(key)) continue;
    seen.add(key);
    deduped.unshift(node);
  }
}

console.log(`Deduplicated nodes: ${deduped.length}`);

// Distribute into buckets
deduped.forEach(node => {
  const cat = getNodeCategory(node);
  if (cat && buckets[cat]) {
    buckets[cat].push(node.toString());
  }
});

// Also create centralized variables.css with comprehensive design tokens
const variablesCss = `/* ==========================================================================
   Sri Shakthi Institute of Engineering & Technology (SIET)
   Centralized Design System Tokens & Custom Properties
   ========================================================================== */

:root {
  /* Brand Primary Colors */
  --primary-color: #00643e;
  --primary-dark: #003f2a;
  --primary-deep: #00281b;
  --primary-light: #075b36;
  --primary-soft: #edf6e9;
  --primary-muted: rgba(0, 100, 62, 0.08);

  /* Accent & Gold Tones */
  --accent-gold: #cca01d;
  --accent-gold-light: #f3c515;
  --accent-gold-soft: #fdf6d8;
  --accent-yellow: #f4c400;
  --accent-cream: #fbf8e8;

  /* Neutral & Canvas Tones */
  --bg-main: #fbfcf9;
  --bg-card: #ffffff;
  --bg-alt: #f4f7f2;
  --bg-dark: #07291a;
  --border-color: rgba(0, 100, 62, 0.12);
  --border-gold: rgba(204, 160, 29, 0.35);

  /* Typography Colors */
  --text-primary: #123324;
  --text-secondary: #355343;
  --text-muted: #5d7469;
  --text-soft: #6e887a;
  --text-inverse: #ffffff;

  /* Typography Font Stacks */
  --font-sans: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  --font-heading: 'Plus Jakarta Sans', sans-serif;
  --font-serif: 'Playfair Display', Georgia, serif;
  --font-script: 'Playfair Display', Georgia, cursive, serif;

  /* Border Radii */
  --radius-xs: 4px;
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 18px;
  --radius-xl: 24px;
  --radius-pill: 9999px;

  /* Shadows */
  --shadow-sm: 0 2px 8px rgba(0, 40, 27, 0.04);
  --shadow-md: 0 8px 24px rgba(0, 40, 27, 0.07);
  --shadow-lg: 0 16px 40px rgba(0, 40, 27, 0.10);
  --shadow-gold: 0 10px 30px rgba(204, 160, 29, 0.20);

  /* Layout & Containers */
  --container-max-width: 1540px;
  --container-content-width: 1200px;
  --header-height: 84px;

  /* Transitions */
  --transition-fast: 0.18s cubic-bezier(0.16, 1, 0.3, 1);
  --transition-smooth: 0.32s cubic-bezier(0.16, 1, 0.3, 1);
  --transition-slow: 0.5s cubic-bezier(0.16, 1, 0.3, 1);

  /* Backward Compatibility Aliases */
  --green: var(--primary-color);
  --dark-green: var(--primary-dark);
  --yellow: var(--accent-yellow);
  --gold: var(--accent-gold);
  --cream: var(--accent-cream);
  --green-dark: var(--primary-dark);
  --green-soft: var(--primary-soft);
  --card: rgba(255, 255, 255, 0.9);
  --campus-green: var(--primary-color);
  --campus-dark: var(--primary-dark);
  --campus-yellow: var(--accent-yellow);
  --campus-gold: var(--accent-gold);
  --campus-soft: var(--text-muted);
  --s-green: var(--primary-light);
  --s-dark: var(--primary-dark);
  --s-gold: var(--accent-gold);
  --s-yellow: var(--accent-yellow);
  --deep: var(--primary-deep);
}
`;

// Write each target stylesheet
for (const [key, filePath] of Object.entries(fileMap)) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  let content = '';
  if (key === 'variables') {
    content = variablesCss + '\n' + buckets[key].join('\n\n');
  } else if (key === 'global') {
    content = `@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&family=DM+Sans:wght@400;500;600&family=League+Spartan:wght@700;800;900&family=Manrope:wght@400;500;600;700;800&family=Montserrat:wght@600;700;800;900&family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Playfair+Display:ital,wght@0,600;1,600&display=swap');\n\n` +
      buckets[key].join('\n\n');
  } else {
    content = `/* ==========================================================================\n   ${path.basename(filePath)} - Modular Stylesheet\n   ========================================================================== */\n\n` +
      buckets[key].join('\n\n');
  }

  fs.writeFileSync(filePath, content.trim() + '\n', 'utf8');
  console.log(`✓ Wrote ${filePath} (${(content.length / 1024).toFixed(1)} KB, ${buckets[key].length} rules)`);
}

// Create master client/src/styles/index.css
const masterIndexCss = `/* ==========================================================================
   Sri Shakthi Institute of Engineering & Technology (SIET)
   Master Modular Design System & Stylesheet Coordinator
   ========================================================================== */

/* 1. Core Tokens, Global Resets & Universal Utilities */
@import './variables.css';
@import './global.css';
@import './utilities.css';

/* 2. Reusable Layout & Component Styles */
@import '../components/layout/Header.css';
@import '../components/layout/Footer.css';
@import '../components/common/VideoModal.css';
@import '../components/common/PlacementModal.css';
@import '../components/ui/PageHeader.css';
@import '../components/ui/SuperstarCard.css';

/* 3. High-Impact Page Section Styles (Home) */
@import '../sections/home/HeroSection.css';
@import '../sections/home/ProgrammesSection.css';
@import '../sections/home/AboutSection.css';
@import '../sections/home/CampusLifeSection.css';
@import '../sections/home/SpecialLabsSection.css';
@import '../sections/home/EventsSection.css';
@import '../sections/placements/PlacementMarqueeSection.css';

/* 4. Modular Page Styles */
@import '../pages/about/About.css';
@import '../pages/academics/Academics.css';
@import '../pages/admissions/Admissions.css';
@import '../pages/campus/Campus.css';
@import '../pages/placements/Placements.css';
@import '../pages/common/Careers.css';
@import '../pages/common/InternalPage.css';
`;

fs.writeFileSync('client/src/styles/index.css', masterIndexCss, 'utf8');
console.log('✓ Wrote unified client/src/styles/index.css');

// Also create page Home.css forwarding its section styles
const homeCss = `/* ==========================================================================
   Home Page Modular Stylesheet
   Coordinates Hero, Programmes, About, Campus, Labs & Events sections
   ========================================================================== */

@import '../../sections/home/HeroSection.css';
@import '../../sections/home/ProgrammesSection.css';
@import '../../sections/home/AboutSection.css';
@import '../../sections/home/CampusLifeSection.css';
@import '../../sections/home/SpecialLabsSection.css';
@import '../../sections/home/EventsSection.css';
@import '../../sections/placements/PlacementMarqueeSection.css';
`;
const homeDir = 'client/src/pages/home';
if (!fs.existsSync(homeDir)) fs.mkdirSync(homeDir, { recursive: true });
fs.writeFileSync('client/src/pages/home/Home.css', homeCss, 'utf8');
console.log('✓ Wrote client/src/pages/home/Home.css');
