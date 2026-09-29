const fs = require('fs');
const postcss = require('postcss');

const rawCss = fs.readFileSync('client/src/styles/index.css', 'utf8');
const root = postcss.parse(rawCss);

function classifySelector(selector) {
  const sel = selector.toLowerCase();

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
    sel.includes('.counselling-code')
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

  // 6. Placements & Startups (Dashboard, KPI sheets, Marquee, Startups)
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
    sel.includes('.dashboard-head')
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
    sel.includes('.siet-referral')
  ) {
    return 'admissions';
  }

  // 10. About (Vision & Mission, Chairman, Principal, Core Beliefs, Values)
  if (
    sel.includes('.siet-vm-') ||
    sel.includes('.siet-cd-') ||
    sel.includes('chairman') ||
    sel.includes('principal') ||
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
    sel.includes('.stat-card-v2') ||
    sel.includes('.stat-main') ||
    sel.includes('.stat-extra') ||
    sel.includes('.signature-badge')
  ) {
    return 'aboutSection';
  }

  if (
    sel.includes('campus-gallery') ||
    sel.includes('campus-life') ||
    sel.includes('.life-') ||
    sel.includes('.story-') ||
    sel.includes('instagram') ||
    sel.includes('.social-') ||
    sel.includes('.gallery-')
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

  return 'unclassified';
}

function classifyNode(node) {
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
        const cat = classifySelector(r.selector);
        if (cat !== 'unclassified') {
          childCategories[cat] = (childCategories[cat] || 0) + 1;
        }
      });
      let bestCat = 'unclassified';
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
    return classifySelector(node.selector);
  }

  return 'global';
}

const classified = {};
let unclassCount = 0;
const unclassSels = [];

root.nodes.forEach(node => {
  const cat = classifyNode(node);
  if (!cat) return;
  if (cat === 'unclassified') {
    unclassCount++;
    if (unclassSels.length < 30) unclassSels.push(node.toString().slice(0, 70));
  }
  if (!classified[cat]) classified[cat] = [];
  classified[cat].push(node);
});

console.log('Classified categories:');
Object.keys(classified).sort().forEach(k => {
  console.log(`  ${k}: ${classified[k].length} nodes`);
});

console.log(`Total unclassified nodes: ${unclassCount}`);
if (unclassSels.length > 0) {
  console.log('First unclassified samples:');
  unclassSels.forEach(s => console.log(' ', s));
}
