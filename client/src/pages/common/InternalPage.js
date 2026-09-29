import { icon } from '../../utils/icons.js';
import { titleCase, slugify } from '../../utils/domUtils.js';
import { pageCopy } from '../../data/pageCopyData.js';
import { internalPageData, campusMarqueeItems, getInternalPageMeta } from '../../data/internalPageData.js';
import { ugPrograms } from '../../data/programmesData.js';
import { departmentPage } from '../academics/DepartmentDetailPage.js';
import { campusExperiencePage } from '../campus/CampusExperiencePage.js';
import { renderTransportCreativePage, renderNccNssCreativePage } from '../campus/creativeCampusPages.js';
import { sietHudHeader } from '../../components/ui/PageHeader.js';
import { placementHighlightsCardInner } from '../../sections/home/HeroSection.js';
import { placementMarqueeSection } from '../../sections/placements/PlacementMarqueeSection.js';
import { placementsDashboardPage } from '../placements/PlacementsDashboardPage.js';
import './InternalPage.css';

const programs = ugPrograms;

export function internalPage(route) {
  if (route.startsWith('placements')) {
    return placementsDashboardPage(route);
  }
  if (route.startsWith('club/')) {
    const clubSlug = route.slice(5);
    const club = (internalPageData.clubs.pillars || []).find(item => slugify(item.title) === clubSlug) || internalPageData.clubs.pillars[0];
    const isNcc = clubSlug === 'national-cadet-corps';
    const clubSections = isNcc ? ['NCC - Achievements', 'National Cadet Corps at SIET'] : ['Overview', 'What We Do', 'How to Join', 'Club Benefits'];
    return `<main class="club-detail-page"><div class="club-detail-shell"><a class="club-detail-back" href="#/clubs">&larr; Back to Student Clubs</a><div class="club-detail-header"><div><span class="ce-kicker">STUDENT CLUB / ${club.tag}</span><h1>${club.title}</h1><p>${club.desc}</p></div></div><div class="club-detail-layout"><aside class="club-detail-nav" aria-label="Club sections">${clubSections.map((section, index) => `<button class="${index === 0 ? 'active' : ''}" type="button" data-section="club-section-${index}">${section}</button>`).join('')}</aside><article class="club-detail-content"><section id="club-section-0" class="is-open"><span>01 / ${isNcc ? 'ACHIEVEMENTS' : 'OVERVIEW'}</span><h2>${isNcc ? 'NCC - Achievements' : 'A place to contribute, connect, and grow.'}</h2><p>${isNcc ? 'NCC cadets build discipline, leadership, teamwork, and service through camps, ceremonial training, drills, and community initiatives.' : `${club.desc} At Sri Shakthi, student clubs turn interests into practical experiences, shared projects, and leadership opportunities.`}</p></section><section id="club-section-1"><span>02 / ${isNcc ? 'NCC AT SIET' : 'WHAT WE DO'}</span><h2>${isNcc ? 'National Cadet Corps at SIET' : 'Learning happens by doing.'}</h2><p>${isNcc ? 'The NCC Army Wing at Sri Shakthi gives students a structured platform to develop confidence, responsibility, fitness, and a spirit of national service.' : "Members collaborate on events, workshops, showcases, peer learning, and community initiatives shaped around the club's purpose."}</p></section>${isNcc ? '' : `<section id="club-section-2"><span>03 / HOW TO JOIN</span><h2>Start with curiosity.</h2><p>Meet the club during induction week, attend an open session, and speak with the student coordinators or faculty mentor.</p></section><section id="club-section-3"><span>04 / CLUB BENEFITS</span><h2>Build a stronger campus voice.</h2><p>Participation develops communication, teamwork, confidence, and a portfolio of meaningful work beyond the classroom.</p></section>`}</article></div></div></main>`;
  }
  const isDept = route.startsWith('department/');
  const deptName = isDept ? titleCase(route.slice(11).replaceAll('-', ' ')).replaceAll(' And ', ' & ') : '';
  if (isDept && typeof departmentPage === 'function') return departmentPage(deptName);
  const data = isDept ? [deptName, `Department of ${deptName}`, 'Build strong engineering foundations through expert teaching, practical laboratories, industry exposure, projects, research and collaborative learning.'] : (pageCopy[route] || ['Sri Shakthi', 'Institutional information', 'Explore Sri Shakthi Institute of Engineering and Technology.']);
  const isDepts = route === 'departments';
  const isCampus = ['campus-life', 'facilities', 'hostel', 'transport', 'sports', 'clubs', 'ncc'].includes(route);
  const isAcademics = ['academics', 'departments', 'curriculum', 'academic-calendar', 'library'].includes(route);
  const isAdmissions = ['programmes', 'admission-enquiry', 'apply', 'admission-referral', 'referral', 'eligibility', 'scholarships', 'fees'].includes(route);
  const pageMeta = getInternalPageMeta(route, data);

  if (isCampus && internalPageData[route]) {
    if (route === 'transport') {
      return `<main class="internal-page campus-template-page campus-template-transport siet-fullwidth-template">${sietHudHeader('Transport Fleet & Mobility Network', 'Transport', 'Campus', '#/campus-life', 'SYSTEM ONLINE / LOGISTICS & MOBILITY / SIET-TRANSIT')}${renderTransportCreativePage(internalPageData[route], data[0])}</main>`;
    }
    if (route === 'ncc') {
      return `<main class="internal-page campus-template-page campus-template-ncc siet-fullwidth-template">${sietHudHeader('NCC Army Wing & NSS Corps', 'NCC & NSS', 'Campus', '#/campus-life', 'SYSTEM ONLINE / NATIONAL SERVICE & DEFENCE / SIET-REGIMENTAL')}${renderNccNssCreativePage(internalPageData[route], data[0])}</main>`;
    }
    return `<main class="internal-page campus-template-page campus-template-${route}">${sietHudHeader(data[0], data[0], 'Campus', '#/campus-life', 'SYSTEM ONLINE / CAMPUS PROFILE / SIET-OS')}${campusExperiencePage(route, internalPageData[route], data[0])}</main>`;
  }

  const deptExtras = isDepts ? `
  <div class="dept-quick-summary-grid">
    <div class="dept-summary-card">
      <span class="dept-summary-num">14+</span>
      <b>Specialized Disciplines</b>
      <p>Covering artificial intelligence, core engineering, computing, biomedical and agricultural sciences.</p>
    </div>
    <div class="dept-summary-card">
      <span class="dept-summary-num">100%</span>
      <b>Outcome-Based Learning</b>
      <p>Curricula mapped to Bloom's taxonomy with continuous lab integration and industry mentoring.</p>
    </div>
    <div class="dept-summary-card">
      <span class="dept-summary-num">30+</span>
      <b>Advanced Laboratories</b>
      <p>Equipped with industry-standard platforms, simulation suites, robotics kits and R&amp;D testbeds.</p>
    </div>
  </div>
  <div class="dept-key-laboratories">
    <div class="section-no">RESEARCH &amp; PRACTICE INFRASTRUCTURE</div>
    <h3>Department Laboratories &amp; Specialized Workspaces</h3>
    <p>Every engineering department at Sri Shakthi is anchored by modern practical laboratories designed to translate classroom theory into hands-on technical proficiency.</p>
    <div class="dept-labs-list">
      <div class="dept-lab-item"><b>Advanced Computing &amp; AI Studio</b><p>High-performance workstations configured for machine learning, data engineering and deep learning workloads.</p></div>
      <div class="dept-lab-item"><b>Precision Electronics &amp; VLSI Lab</b><p>FPGA design toolchains, spectrum analyzers, oscilloscopes and embedded development boards.</p></div>
      <div class="dept-lab-item"><b>Smart Agriculture &amp; Bioenergy Testbed</b><p>Drone mapping facilities, soil nutrient analyzers, renewable energy setups and farm automation systems.</p></div>
      <div class="dept-lab-item"><b>Biotechnology &amp; Bioprocess Engineering Lab</b><p>Bioreactors, laminar air flow workstations, PCR machines and microbiological analytical gear.</p></div>
      <div class="dept-lab-item"><b>Project &amp; Prototype Studio</b><p>Embedded systems, IoT testbeds, sensors and robotics testing facilities.</p></div>
      <div class="dept-lab-item"><b>Industry Collaboration Center</b><p>Dedicated workspaces co-developed with leading technology partners.</p></div>
    </div>
  </div>` : '';

  function getPageHeaderHtml() {
    if (route === 'placements') {
      return `<section class="placement-showcase-section" style="padding: 24px 20px 0;"><div class="ps-shell"><div class="placement-v2-panel ps-right-card reveal" style="max-width: 1180px; margin: 0 auto;">${placementHighlightsCardInner()}</div></div></section>${placementMarqueeSection()}`;
    }
    if (isAcademics) {
      return sietHudHeader(data[0], data[0], 'Academics', '#/academics', 'SYSTEM ONLINE / ACADEMIC PROFILE / SIET-OS');
    }
    if (isAdmissions) {
      return sietHudHeader(data[0], data[0], 'Admissions', '#/programmes', 'SYSTEM ONLINE / ADMISSION PROFILE / SIET-OS');
    }
    if (isCampus) {
      return sietHudHeader(data[0], data[0], 'Campus', '#/campus-life', 'SYSTEM ONLINE / CAMPUS PROFILE / SIET-OS');
    }
    return `
      <section class="page-hero enhanced-page-hero">
        <div class="hero-backdrop-pattern" aria-hidden="true"></div>
        <div class="hero-radial-glow" aria-hidden="true"></div>
        
        <div class="hero-inner-container">
          <img class="page-crest" src="/brand/siet-logo.png" alt="Sri Shakthi Emblem" width="320" height="320">
          <nav class="hero-breadcrumbs" aria-label="Breadcrumb">
            <a href="#/">Home</a>
            <span class="bc-sep">/</span>
            <span>${pageMeta.category}</span>
            <span class="bc-sep">/</span>
            <strong class="bc-current">${data[0]}</strong>
          </nav>

          <div class="eyebrow enhanced-eyebrow">
            <span class="eyebrow-accent-line"></span>
            <span class="eyebrow-tag">SRI SHAKTHI</span>
            <span class="eyebrow-bullet">•</span>
            <span class="eyebrow-kicker">${pageMeta.category.toUpperCase()}</span>
          </div>

          <h1 class="page-hero-title reveal">${data[0].toUpperCase()}</h1>
          <p class="page-hero-subtitle">${data[1]}</p>

          <div class="hero-pills-row reveal">
            ${(pageMeta.heroPills || []).map(p => `
              <div class="hero-pill-badge">
                <span class="pill-icon">${icon(p.icon || 'leaf')}</span>
                <span class="pill-text">${p.label}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
      <div class="hero-gold-trim-bar" aria-hidden="true"></div>
    `;
  }

  return `<main class="internal-page enhanced-template-page ${isDepts ? 'departments-page departments-index-page' : ''}">
    ${getPageHeaderHtml()}

    <section class="page-content enhanced-page-content">
      <div class="template-main-column reveal">
        
        <!-- 1. Interactive Split Overview Hero (Narrative + Visual Showcase Card) -->
        <article class="template-card template-overview-card template-split-hero">
          <div class="t-hero-narrative">
            <div class="section-tag-pill">
              <span class="tag-dot"></span>
              <span>${pageMeta.category ? pageMeta.category.toUpperCase() : 'OVERVIEW'}</span>
            </div>
            <h2 class="overview-heading">${pageMeta.title || data[1]}</h2>
            <p class="overview-highlight-text">${pageMeta.subtitle || data[2]}</p>
            <p class="overview-narrative-text">${pageMeta.overviewLead}</p>
            <div class="template-pills-row">
              ${(pageMeta.heroPills || []).map(p => `
                <span class="template-pill-chip">
                  <span class="pill-chip-icon">${icon(p.icon || 'star')}</span>
                  <span>${p.label}</span>
                </span>
              `).join('')}
            </div>
          </div>

          <div class="t-hero-visual-col">
            <div class="thv-card">
              <img src="${pageMeta.featuredImage || '/brand/campus-arch.jpg'}" alt="${data[0]}" class="thv-img" loading="eager" onerror="this.src='/brand/campus-arch.jpg'" />
              <div class="thv-overlay"></div>
              <div class="thv-floating-badge">
                <span class="thv-pulse-dot"></span>
                <span>${pageMeta.featuredBadge || 'Autonomous Excellence'}</span>
              </div>
              <div class="thv-bottom-ribbon">
                <span class="thv-ribbon-icon">${icon('crown')}</span>
                <div class="thv-ribbon-text">
                  <strong>${pageMeta.featuredStat || 'SIET Campus Standard'}</strong>
                  <small>Excellence in Engineering &amp; Innovation</small>
                </div>
              </div>
            </div>
          </div>
        </article>

        <!-- 2. Core Pillars (4 Feature Cards Grid) -->
        <div class="template-section-block">
          <div class="section-tag-pill">
            <span class="tag-dot"></span>
            <span>KEY HIGHLIGHTS &amp; PILLARS</span>
          </div>
          <h3 class="section-subheading">What Distinguishes Sri Shakthi</h3>
          <div class="template-pillars-grid">
            ${pageMeta.pillars.map((pil, idx) => `
              <div class="pillar-card">
                <span class="pillar-watermark">0${idx + 1}</span>
                <div class="pillar-top">
                  <span class="pillar-icon-wrap">${icon(pil.icon || 'star')}</span>
                  <span class="pillar-badge">${pil.tag}</span>
                </div>
                <h4 class="pillar-title">${pil.title}</h4>
                <p class="pillar-desc">${pil.desc}</p>
                <div class="pillar-accent-line"></div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 3. Photo Showcase Bento Grid -->
        ${pageMeta.gallery && pageMeta.gallery.length ? `
          <div class="template-section-block">
            <div class="gallery-section-header">
              <div>
                <div class="section-tag-pill">
                  <span class="tag-dot"></span>
                  <span>PHOTO TOUR &amp; CAMPUS SPACES</span>
                </div>
                <h3 class="section-subheading">Visual Showcase &amp; Environment</h3>
              </div>
              <span class="gallery-badge-count">Verified Campus Spaces</span>
            </div>
            <div class="template-bento-gallery">
              ${pageMeta.gallery.map((g, idx) => `
                <div class="bento-photo-card bento-card-${idx + 1}">
                  <div class="bento-media">
                    <img src="${g.img}" alt="${g.title}" loading="lazy" onerror="this.src='/brand/campus-arch.jpg'">
                    <span class="bento-tag">${pageMeta.category || 'Campus'}</span>
                  </div>
                  <div class="bento-info">
                    <span class="bento-index">0${idx + 1}</span>
                    <div class="bento-details">
                      <h5>${g.title}</h5>
                      <p>${g.caption}</p>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- 3.5. Running Live Campus Photo Marquee -->
        <div class="template-running-gallery-block">
          <div class="running-gallery-header-row">
            <div class="section-tag-pill">
              <span class="tag-dot"></span>
              <span>LIVE CAMPUS SNAPSHOTS</span>
            </div>
            <span class="running-gallery-badge">
              <span class="rg-badge-pulse"></span>
              <span>45-Acre Smart Eco Campus &bull; Autonomous Hub</span>
            </span>
          </div>
          <div class="running-gallery-viewport">
            <div class="running-gallery-track">
              <div class="running-gallery-group">
                ${campusMarqueeItems.map(item => `
                  <div class="running-gallery-card">
                    <div class="rg-image-box">
                      <img src="${item.img}" alt="${item.title}" loading="lazy" onerror="this.src='/brand/campus-arch.jpg'">
                      <div class="rg-card-overlay"></div>
                      <span class="rg-pill-tag">${item.tag}</span>
                      <div class="rg-card-meta">
                        <h5 class="rg-card-title">${item.title}</h5>
                        <p class="rg-card-desc">${item.desc}</p>
                      </div>
                    </div>
                  </div>
                `).join('')}
              </div>
              <div class="running-gallery-group" aria-hidden="true">
                ${campusMarqueeItems.map(item => `
                  <div class="running-gallery-card">
                    <div class="rg-image-box">
                      <img src="${item.img}" alt="${item.title}" loading="lazy" onerror="this.src='/brand/campus-arch.jpg'">
                      <div class="rg-card-overlay"></div>
                      <span class="rg-pill-tag">${item.tag}</span>
                      <div class="rg-card-meta">
                        <h5 class="rg-card-title">${item.title}</h5>
                        <p class="rg-card-desc">${item.desc}</p>
                      </div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>

        <!-- 4. Key Metrics Strip -->
        <div class="template-section-block">
          <div class="template-stats-strip">
            ${pageMeta.metrics.map(m => `
              <div class="template-stat-item">
                <div class="stat-number-wrap">
                  <span class="stat-val">${m.val}</span>
                  <span class="stat-sfx">${m.suffix}</span>
                </div>
                <span class="stat-lbl">${m.label}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 5. Highlights Grid -->
        ${pageMeta.highlights && pageMeta.highlights.length ? `
          <div class="template-section-block">
            <div class="section-tag-pill">
              <span class="tag-dot"></span>
              <span>SPECIAL HIGHLIGHTS</span>
            </div>
            <h3 class="section-subheading">What Sets Our Experience Apart</h3>
            <div class="template-highlights-grid">
              ${pageMeta.highlights.map(h => `
                <div class="highlight-detail-card">
                  <div class="hdc-top">
                    <span class="hdc-icon-wrap">${icon('check')}</span>
                    <h4 class="hdc-title">${h.title}</h4>
                  </div>
                  <p class="hdc-desc">${h.desc}</p>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- 6. Interactive FAQs -->
        ${pageMeta.faqs && pageMeta.faqs.length ? `
          <div class="template-section-block">
            <div class="section-tag-pill">
              <span class="tag-dot"></span>
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h3 class="section-subheading">Common Inquiries</h3>
            <div class="template-faq-list">
              ${pageMeta.faqs.map((faq, i) => `
                <details class="template-faq-item" ${i === 0 ? 'open' : ''}>
                  <summary class="faq-summary">
                    <span class="faq-question">${faq.q}</span>
                    <span class="faq-toggle-icon" aria-hidden="true">+</span>
                  </summary>
                  <div class="faq-answer">
                    <p>${faq.a}</p>
                  </div>
                </details>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- 7. Department Extras if departments route -->
        ${deptExtras}

        <!-- 8. Contact Panel if contact route -->
        ${route === 'contact' ? `
          <div class="contact-details-grid">
            <div class="contact-detail-card">
              <span class="cd-icon">${icon('pin')}</span>
              <b>Campus Address</b>
              <p>Sri Shakthi Nagar, L&amp;T By-Pass, Chinniyampalayam, Coimbatore – 641062, Tamil Nadu, India</p>
            </div>
            <div class="contact-detail-card">
              <span class="cd-icon">${icon('connect')}</span>
              <b>Helpline &amp; Email</b>
              <p>Phone: +91 422 2369900<br>Mobile: +91 73737 44444<br>Email: info@siet.ac.in</p>
            </div>
            <div class="contact-detail-card">
              <span class="cd-icon">${icon('clock')}</span>
              <b>Office Working Hours</b>
              <p>Monday to Saturday: 8:30 AM – 5:00 PM<br>Admissions Desk open on all working days.</p>
            </div>
          </div>
        ` : ''}

        <!-- 9. Bottom CTA Banner -->
        <div class="template-cta-banner">
          <div class="cta-inner-glow"></div>
          <span class="cta-kicker">JOIN OUR COMMUNITY</span>
          <h3>${pageMeta.ctaTitle || 'Ready to Experience Sri Shakthi?'}</h3>
          <p>${pageMeta.ctaSubtitle || 'Explore admission pathways, merit scholarships, and autonomous engineering curriculum designed for real-world impact.'}</p>
          <div class="cta-btn-group">
            <a href="#/admission-enquiry" class="button cta-primary-btn">Enquire for Admission ${icon('arrow')}</a>
            <a href="#/programmes" class="button cta-secondary-btn">Explore Programmes ↗</a>
          </div>
        </div>

      </div>
    </section>

    ${['departments', 'programmes'].includes(route) ? `<section class="page-content programme-content"><div class="section-no">PROGRAMMES &amp; DEPARTMENTS</div><div>${programs.map(([n, d, img]) => `<a class="flip-card" href="#/department/${slugify(n)}"><span class="flip-card-inner"><span class="flip-front"><small>DEPARTMENT</small><b>${n}</b><p>${d}</p><span>Explore department →</span></span><span class="flip-back" style="background-image:linear-gradient(180deg,transparent,rgba(3,45,27,.94)),url('${img}')"><b>${n}</b></span></span></a>`).join('')}</div></section>` : ''}
  </main>`;
}
