const fs = require('fs');
const postcss = require('postcss');

const rawCss = fs.readFileSync('client/src/styles/index.css', 'utf8');
const root = postcss.parse(rawCss);

console.log('Total input nodes:', root.nodes.length);

// Deduplicate identical rules while preserving the later occurrence (cascade)
// In CSS, when identical rules appear, the later one wins.
// If two rules have identical selector and identical declaration block, keep only the later one.

const seenRules = new Map();
const dedupedNodes = [];

for (let i = root.nodes.length - 1; i >= 0; i--) {
  const node = root.nodes[i];
  if (node.type === 'rule') {
    const key = `${node.selector.trim()}@@${node.nodes.map(n => n.toString()).sort().join(';')}`;
    if (seenRules.has(key)) {
      // duplicate, skip
      continue;
    }
    seenRules.set(key, true);
    dedupedNodes.unshift(node);
  } else if (node.type === 'atrule') {
    const key = `@${node.name} ${node.params.trim()}@@${node.nodes ? node.nodes.map(n => n.toString()).sort().join(';') : ''}`;
    if (seenRules.has(key)) {
      continue;
    }
    seenRules.set(key, true);
    dedupedNodes.unshift(node);
  } else if (node.type === 'comment') {
    dedupedNodes.unshift(node);
  }
}

console.log(`Deduplicated nodes from ${root.nodes.length} to ${dedupedNodes.length}`);

// Categorization helper
function getCategory(node) {
  if (node.type === 'comment') return 'comment';
  if (node.type === 'atrule' && node.name === 'import') return 'global';

  // Check custom properties in :root
  if (node.type === 'rule' && node.selector.trim() === ':root') {
    return 'variables';
  }

  const str = node.toString();
  const sel = (node.type === 'rule' ? node.selector : node.params || '').toLowerCase();

  // 1. Header / Navigation
  if (
    sel.includes('.institution-header') ||
    sel.includes('.exact-image-header') ||
    sel.includes('.institution-navbar') ||
    sel.includes('.institution-menu') ||
    sel.includes('.institution-nav-') ||
    sel.includes('.mobile-nav') ||
    sel.includes('.notice') ||
    sel.includes('.institution-home')
  ) {
    return 'header';
  }

  // 2. Footer
  if (
    sel.includes('.site-footer') ||
    sel.includes('.footer-') ||
    sel.includes('.legal')
  ) {
    return 'footer';
  }

  // 3. Modals
  if (sel.includes('.video-modal') || sel.includes('.video-shell') || sel.includes('.video-frame')) {
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

  // 4. UI Primitives
  if (
    sel.includes('.page-hero') ||
    sel.includes('.enhanced-page-hero') ||
    sel.includes('.siet-hud-header') ||
    sel.includes('.department-detail-header') ||
    sel.includes('.hud-title-') ||
    sel.includes('.hero-backdrop-pattern') ||
    sel.includes('.hero-radial-glow') ||
    sel.includes('.hero-inner-container') ||
    sel.includes('.hero-breadcrumbs') ||
    sel.includes('.eyebrow') ||
    sel.includes('.hero-gold-trim-bar')
  ) {
    return 'pageHeader';
  }

  if (
    sel.includes('.siet-sp-card') ||
    sel.includes('.siet-sp-ctc') ||
    sel.includes('.siet-sp-tier') ||
    sel.includes('.siet-sp-name') ||
    sel.includes('.siet-sp-dept') ||
    sel.includes('.siet-sp-company-box') ||
    sel.includes('.siet-co-') ||
    sel.includes('.siet-tr-logo-card') ||
    sel.includes('.siet-tr-')
  ) {
    return 'superstarCard';
  }

  // 5. Careers
  if (
    sel.includes('.careers-page') ||
    sel.includes('.career-hero') ||
    sel.includes('.career-main') ||
    sel.includes('.career-tabs') ||
    sel.includes('.career-intro') ||
    sel.includes('.career-application-') ||
    sel.includes('.career-form') ||
    sel.includes('.career-fields') ||
    sel.includes('.career-categories') ||
    sel.includes('.career-contact') ||
    sel.includes('.career-submit') ||
    sel.includes('.career-')
  ) {
    return 'careers';
  }

  // 6. Placements & Entrepreneurship
  if (
    sel.includes('.siet-pe-page') ||
    sel.includes('.siet-sp-hero') ||
    sel.includes('.siet-yw-') ||
    sel.includes('.siet-tmpl-') ||
    sel.includes('.siet-chart-') ||
    sel.includes('.siet-pj-') ||
    sel.includes('.siet-he-intl-') ||
    sel.includes('.siet-als-') ||
    sel.includes('.edc-') ||
    sel.includes('.startup') ||
    sel.includes('.st-modal')
  ) {
    return 'placements';
  }

  // 7. Campus & creative transport / ncc
  if (
    sel.includes('.campus-experience') ||
    sel.includes('.campus-life-editorial') ||
    sel.includes('.facilities-architecture') ||
    sel.includes('.hostel-residence') ||
    sel.includes('.transport-network') ||
    sel.includes('.sports-performance') ||
    sel.includes('.clubs-directory') ||
    sel.includes('.service-command') ||
    sel.includes('.ce-campus-') ||
    sel.includes('.ce-atlas-') ||
    sel.includes('.ce-residence-') ||
    sel.includes('.ce-network-') ||
    sel.includes('.ce-performance-') ||
    sel.includes('.ce-clubs-') ||
    sel.includes('.ce-command-') ||
    sel.includes('.ce-') ||
    sel.includes('.sft-') ||
    sel.includes('.club-detail')
  ) {
    return 'campus';
  }

  // 8. Academics
  if (
    sel.includes('.departments-page') ||
    sel.includes('.departments-index-page') ||
    sel.includes('.dept-quick-summary') ||
    sel.includes('.dept-summary-card') ||
    sel.includes('.dept-key-laboratories') ||
    sel.includes('.dept-labs-list') ||
    sel.includes('.dept-lab-item') ||
    sel.includes('.department-detail') ||
    sel.includes('.department-copy') ||
    sel.includes('.department-table') ||
    sel.includes('.department-placeholder') ||
    sel.includes('.siet-curr-page') ||
    sel.includes('.siet-curr-body') ||
    sel.includes('.siet-curr-grid') ||
    sel.includes('.siet-curr-sidebar') ||
    sel.includes('.curr-dept-tab') ||
    sel.includes('.curr-sem-tab') ||
    sel.includes('.curr-table-') ||
    sel.includes('.siet-curr-table') ||
    sel.includes('.siet-curr-waves') ||
    sel.includes('.js-curr-modal') ||
    sel.includes('.siet-calendar-page') ||
    sel.includes('.cal-') ||
    sel.includes('.siet-library-page') ||
    sel.includes('.siet-lib-') ||
    sel.includes('.js-lib-modal')
  ) {
    return 'academics';
  }

  // 9. Admissions
  if (
    sel.includes('.siet-programmes-page') ||
    sel.includes('.siet-prog-container') ||
    sel.includes('.siet-prog-controls') ||
    sel.includes('.siet-prog-filter') ||
    sel.includes('.siet-prog-grid') ||
    sel.includes('.siet-prog-card') ||
    sel.includes('.enquiry-page-v3') ||
    sel.includes('.enquiry-main-v3') ||
    sel.includes('.enquiry-heading-v3') ||
    sel.includes('.enquiry-form-v3') ||
    sel.includes('.enquiry-fields-v3') ||
    sel.includes('.referral-page') ||
    sel.includes('.referral-form') ||
    sel.includes('.siet-referral')
  ) {
    return 'admissions';
  }

  // 10. About
  if (
    sel.includes('.siet-vm-') ||
    sel.includes('.siet-cd-') ||
    sel.includes('.chairman-page') ||
    sel.includes('.principal-page') ||
    sel.includes('.siet-cb-') ||
    sel.includes('.siet-po-') ||
    sel.includes('.siet-cv-')
  ) {
    return 'about';
  }

  // 11. Home Sections
  if (
    sel.includes('.programmes-showcase') ||
    sel.includes('.programmes-hero-v2') ||
    sel.includes('.programmes-left-col') ||
    sel.includes('.programme-toggle-pill') ||
    sel.includes('.programme-card') ||
    sel.includes('.programme-card-v2') ||
    sel.includes('.prog-icon-wrap') ||
    sel.includes('.prog-info') ||
    sel.includes('.prog-arrow-circle') ||
    sel.includes('.programme-bottom-banner') ||
    sel.includes('.feature-card-') ||
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
    sel.includes('.signature-badge')
  ) {
    return 'aboutSection';
  }

  if (
    sel.includes('.campus-gallery') ||
    sel.includes('.campus-life-showcase') ||
    sel.includes('.gallery-grid') ||
    sel.includes('.gallery-card')
  ) {
    return 'campusLifeSection';
  }

  if (
    sel.includes('.special-labs-section') ||
    sel.includes('.speciallabssection') ||
    sel.includes('.labs-filter-pills') ||
    sel.includes('.lab-pill-btn') ||
    sel.includes('.labs-grid') ||
    sel.includes('.lab-card')
  ) {
    return 'specialLabsSection';
  }

  if (
    sel.includes('.events-showcase') ||
    sel.includes('.events-featured-card') ||
    sel.includes('.events-filter-bar') ||
    sel.includes('.event-item-card')
  ) {
    return 'eventsSection';
  }

  if (
    sel.includes('.placement-marquee-section') ||
    sel.includes('.placement-marquee-shell') ||
    sel.includes('.placement-marquee-track') ||
    sel.includes('.placement-marquee-item') ||
    sel.includes('.placement-marquee-logo')
  ) {
    return 'placementMarqueeSection';
  }

  if (
    sel.includes('.placement-showcase-section') ||
    sel.includes('.ps-shell') ||
    sel.includes('.placement-v2-panel') ||
    sel.includes('.ps-right-card') ||
    sel.includes('.ps-stat-card') ||
    sel.includes('.home-hero') ||
    sel.includes('.home-page')
  ) {
    return 'homeHero';
  }

  // 12. Internal Page template
  if (
    sel.includes('.internal-page') ||
    sel.includes('.enhanced-template-page') ||
    sel.includes('.enhanced-page-content') ||
    sel.includes('.template-main-column') ||
    sel.includes('.template-card') ||
    sel.includes('.template-overview-card') ||
    sel.includes('.template-split-hero') ||
    sel.includes('.t-hero-') ||
    sel.includes('.thv-') ||
    sel.includes('.template-pillars-grid') ||
    sel.includes('.pillar-card') ||
    sel.includes('.pillar-') ||
    sel.includes('.template-bento-gallery') ||
    sel.includes('.bento-photo-card') ||
    sel.includes('.bento-') ||
    sel.includes('.template-running-gallery-block') ||
    sel.includes('.running-gallery-') ||
    sel.includes('.rg-') ||
    sel.includes('.template-stats-strip') ||
    sel.includes('.template-stat-item') ||
    sel.includes('.stat-number-wrap') ||
    sel.includes('.template-highlights-grid') ||
    sel.includes('.highlight-detail-card') ||
    sel.includes('.hdc-') ||
    sel.includes('.template-faq-list') ||
    sel.includes('.template-faq-item') ||
    sel.includes('.faq-summary') ||
    sel.includes('.faq-answer') ||
    sel.includes('.template-cta-banner') ||
    sel.includes('.cta-inner-glow') ||
    sel.includes('.cta-btn-group') ||
    sel.includes('.contact-details-grid') ||
    sel.includes('.contact-detail-card') ||
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
    sel.includes('.sr-only') ||
    sel.includes('.visually-hidden')
  ) {
    return 'utilities';
  }

  // 14. Global rules
  if (
    sel === 'html' ||
    sel === 'body' ||
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
    sel.startsWith('p') ||
    sel.startsWith('a') ||
    sel.startsWith('img') ||
    sel.startsWith('svg') ||
    sel.startsWith('button') ||
    sel.startsWith('input') ||
    sel.startsWith('select') ||
    sel.startsWith('textarea') ||
    sel.includes('site-application')
  ) {
    return 'global';
  }

  return 'other';
}

const buckets = {};
dedupedNodes.forEach(node => {
  const cat = getCategory(node);
  if (!buckets[cat]) buckets[cat] = [];
  buckets[cat].push(node);
});

console.log('\nDistribution by Category:');
Object.keys(buckets).sort().forEach(k => {
  console.log(`  ${k}: ${buckets[k].length} nodes`);
});
