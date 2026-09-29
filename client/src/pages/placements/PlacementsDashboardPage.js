import { placementDataYears, allTopRecruiters, allSuperstarsData } from '../../data/placementsData.js';
import { renderRecruiterCard, getSuperstarMarqueeHtml, renderSuperstarCard } from '../../components/ui/SuperstarCard.js';
import { vmIcon } from '../about/VisionMissionPage.js';
import { entrepreneurshipPage } from './EntrepreneurshipPage.js';
import { animateCounter } from '../../utils/domUtils.js';
import { icon } from '../../utils/icons.js';
import './Placements.css';

export function placementsDashboardPage(route) {
  const activeRoute = route || 'placements';
  const isEnt = activeRoute.includes('entrepreneurship');
  const isHigh = activeRoute.includes('higher-education');
  const isGov = activeRoute.includes('government-services');

  // Subpage: Entrepreneurship
  if (isEnt) {
    return entrepreneurshipPage();
  }

  // Subpage: Higher Education
  if (isHigh) {
    return `
      <main class="siet-vm-page">
        <section class="siet-vm-hero">
          <div class="siet-vm-hero-grid"></div>
          <div class="siet-vm-hero-orb orb-one"></div>
          <div class="siet-vm-hero-orb orb-two"></div>
          <div class="siet-vm-shell siet-vm-hero-content reveal">
            <p class="siet-vm-kicker"><i></i> HIGHER EDUCATION</p>
            <h1>Higher Education <em>&amp; Admissions</em></h1>
            <p class="siet-vm-intro">Guiding graduates towards post-graduate admissions at premier international universities and Indian institutes.</p>
          </div>
        </section>

        <div class="siet-sp-lower-shell">
          <div class="siet-tmpl-sub-grid">
            <article class="siet-vm-card siet-vm-card-vision reveal" style="min-height:240px;padding:22px;">
              <div class="siet-vm-card-pattern"></div>
              <div class="siet-vm-card-top"><span class="siet-vm-card-icon">${vmIcon('education')}</span><span class="siet-vm-card-number">01 / ENTRANCE</span></div>
              <div class="siet-vm-card-copy"><p class="siet-vm-card-label">IN-HOUSE COACHING</p><h2>GATE, GRE, CAT &amp; IELTS</h2><p>Structured preparation integrated into student schedules with faculty mentors and external trainers for national and global exams.</p></div>
              <div class="siet-vm-card-footer"><span>Comprehensive Exam Training</span><i></i></div>
            </article>
            <article class="siet-vm-card siet-vm-card-mission reveal" style="min-height:240px;padding:22px;">
              <div class="siet-vm-mission-lines"></div>
              <div class="siet-vm-card-top"><span class="siet-vm-card-icon">${vmIcon('target')}</span><span class="siet-vm-card-number">02 / PREMIER INSTITUTES</span></div>
              <div class="siet-vm-card-copy"><p class="siet-vm-card-label">INDIAN EXCELLENCE</p><h2>IISc, IITs, NITs &amp; IIMs</h2><p>Our students consistently qualify GATE and CAT to enter M.Tech, MS, and MBA programs at IISc Bangalore, IIT Madras, and top NITs.</p></div>
              <div class="siet-vm-card-footer"><span>National Top-Rankers</span><i></i></div>
            </article>

            <!-- INTERNATIONAL EDUCATION CARDS -->
            <article class="siet-vm-card siet-vm-card-vision reveal" style="min-height:240px;padding:22px;">
              <div class="siet-vm-card-pattern"></div>
              <div class="siet-vm-card-top"><span class="siet-vm-card-icon">${vmIcon('compass')}</span><span class="siet-vm-card-number">03 / USA</span></div>
              <div class="siet-vm-card-copy"><p class="siet-vm-card-label">POST GRADUATE COURSES</p><h2>United States</h2><p>Counselling provided for post graduate courses in Ivy League &amp; Top Tech Institutes.</p></div>
              <div class="siet-vm-card-footer"><span>Global Exposure</span><i></i></div>
            </article>

            <article class="siet-vm-card siet-vm-card-mission reveal" style="min-height:240px;padding:22px;">
              <div class="siet-vm-mission-lines"></div>
              <div class="siet-vm-card-top"><span class="siet-vm-card-icon">${vmIcon('compass')}</span><span class="siet-vm-card-number">04 / UK</span></div>
              <div class="siet-vm-card-copy"><p class="siet-vm-card-label">POST GRADUATE COURSES</p><h2>United Kingdom</h2><p>Counselling provided for post graduate courses in Russell Group Universities.</p></div>
              <div class="siet-vm-card-footer"><span>Global Exposure</span><i></i></div>
            </article>

            <article class="siet-vm-card siet-vm-card-vision reveal" style="min-height:240px;padding:22px;">
              <div class="siet-vm-card-pattern"></div>
              <div class="siet-vm-card-top"><span class="siet-vm-card-icon">${vmIcon('compass')}</span><span class="siet-vm-card-number">05 / CANADA</span></div>
              <div class="siet-vm-card-copy"><p class="siet-vm-card-label">POST GRADUATE COURSES</p><h2>Canada</h2><p>Counselling provided for post graduate courses in Leading Research Academies.</p></div>
              <div class="siet-vm-card-footer"><span>Global Exposure</span><i></i></div>
            </article>

            <article class="siet-vm-card siet-vm-card-mission reveal" style="min-height:240px;padding:22px;">
              <div class="siet-vm-mission-lines"></div>
              <div class="siet-vm-card-top"><span class="siet-vm-card-icon">${vmIcon('compass')}</span><span class="siet-vm-card-number">06 / AUSTRALIA</span></div>
              <div class="siet-vm-card-copy"><p class="siet-vm-card-label">POST GRADUATE COURSES</p><h2>Australia</h2><p>Counselling provided for post graduate courses in Group of Eight (Go8) Universities.</p></div>
              <div class="siet-vm-card-footer"><span>Global Exposure</span><i></i></div>
            </article>

            <article class="siet-vm-card siet-vm-card-vision reveal" style="min-height:240px;padding:22px;">
              <div class="siet-vm-card-pattern"></div>
              <div class="siet-vm-card-top"><span class="siet-vm-card-icon">${vmIcon('compass')}</span><span class="siet-vm-card-number">07 / GERMANY</span></div>
              <div class="siet-vm-card-copy"><p class="siet-vm-card-label">POST GRADUATE COURSES</p><h2>Germany</h2><p>Counselling provided for post graduate courses in TU9 Engineering Excellence institutes.</p></div>
              <div class="siet-vm-card-footer"><span>Global Exposure</span><i></i></div>
            </article>
          </div>
        </div>
      </main>
    `;
  }

  // Subpage: Government Services
  if (isGov) {
    return `
      <main class="siet-vm-page">
        <section class="siet-vm-hero">
          <div class="siet-vm-hero-grid"></div>
          <div class="siet-vm-hero-orb orb-one"></div>
          <div class="siet-vm-hero-orb orb-two"></div>
          <div class="siet-vm-shell siet-vm-hero-content reveal">
            <p class="siet-vm-kicker"><i></i> GOVERNMENT SERVICES</p>
            <h1>Civil Services <em>&amp; Public Sector</em></h1>
            <p class="siet-vm-intro">Mentoring disciplined graduates for careers in Indian administrative services, defense research, and public enterprises.</p>
          </div>
        </section>

        <!-- NEW ALS IAS COACHING SECTION -->
        <section class="siet-he-intl-section reveal" style="background:#fff; border-bottom:1px solid #eef5f0; padding:60px 20px;">
          <div class="siet-he-intl-container" style="max-width: 1000px; text-align: center; margin: 0 auto;">
            <h2 class="siet-he-quote-text" style="color:#138a36; margin-bottom:40px; font-size:22px; font-weight:800; text-transform:uppercase; letter-spacing:0.5px;">
              COACHING FOR CIVIL SERVICES EXAMINATIONS PROVIDED IN PARTNERSHIP WITH ALS
            </h2>
            
            <div style="background:#fff; border-radius:12px; box-shadow: 0 10px 40px rgba(0,0,0,0.1); overflow:hidden; border:2px solid #e5001a;">
              <div style="background:#e5001a; color:#fff; padding:12px 24px; text-align:left; font-weight:bold; font-size:18px;">
                Top IAS Coaching in Delhi
              </div>
              <div style="display:flex; align-items:center; padding:30px; flex-wrap:wrap; gap:20px;">
                <div style="flex:1; min-width:150px; border-right:2px solid #eee; padding-right:20px; text-align:center;">
                  <span style="display:block; color:#0033a0; font-size:24px; font-weight:bold; font-style:italic;">Rank</span>
                  <span style="display:block; font-size:80px; font-weight:900; line-height:1; color:#0033a0; text-shadow:2px 2px 0px #fff, 4px 4px 0px rgba(0,51,160,0.1);">5</span>
                </div>
                <div style="flex:3; min-width:300px; padding:0 30px; text-align:center;">
                  <div style="background:#e5001a; display:inline-block; padding:20px 40px;">
                    <span style="display:block; font-family:Georgia, serif; font-size:80px; color:#fff; font-weight:bold; line-height:1;">ALS</span>
                    <span style="display:block; color:#fff; font-size:16px; margin-top:10px; border-top:1px solid rgba(255,255,255,0.5); padding-top:10px;">Training Steel pillars For the Nation</span>
                  </div>
                </div>
                <div style="flex:2; min-width:200px; text-align:left; padding-left:20px;">
                  <span style="display:block; color:#0033a0; font-size:24px; font-weight:bold; margin-bottom:8px;">ALS IAS Academy</span>
                  <a href="http://www.alsias.net" target="_blank" rel="noopener" style="color:#0033a0; font-size:18px; font-weight:bold; text-decoration:none;">www.alsias.net</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="siet-sp-lower-shell">
          <div class="siet-tmpl-sub-grid">
            <article class="siet-vm-card siet-vm-card-vision reveal" style="min-height:240px;padding:22px;">
              <div class="siet-vm-card-pattern"></div>
              <div class="siet-vm-card-top"><span class="siet-vm-card-icon">${vmIcon('target')}</span><span class="siet-vm-card-number">01 / ACADEMY</span></div>
              <div class="siet-vm-card-copy"><p class="siet-vm-card-label">CIVIL SERVICES WING</p><h2>Sri Shakthi IAS Academy</h2><p>Foundation batches for UPSC Civil Services, TNPSC Group 1 &amp; 2, with regular mock test series and guest lectures by serving officers.</p></div>
              <div class="siet-vm-card-footer"><span>Officers in the Making</span><i></i></div>
            </article>
            <article class="siet-vm-card siet-vm-card-mission reveal" style="min-height:240px;padding:22px;">
              <div class="siet-vm-mission-lines"></div>
              <div class="siet-vm-card-top"><span class="siet-vm-card-icon">${vmIcon('education')}</span><span class="siet-vm-card-number">02 / ENGINEERING</span></div>
              <div class="siet-vm-card-copy"><p class="siet-vm-card-label">TECHNICAL SERVICES</p><h2>Indian Engineering Services (IES)</h2><p>Intensive coaching in core engineering disciplines for UPSC ESE, preparing graduates for central government engineering executive roles.</p></div>
              <div class="siet-vm-card-footer"><span>Technical Civil Services</span><i></i></div>
            </article>
          </div>
        </div>
      </main>
    `;
  }

  // 1. Top Recruiters Marquee Cards (Single Continuous Line)
  const marqueeSingleHtml = allTopRecruiters.map(renderRecruiterCard).join('');

  // 2. Year Tabs
  const tabsHtml = Object.keys(placementDataYears).map((year, i) => `
    <button type="button" class="siet-tmpl-ytab ${i === 0 ? 'is-active' : ''}" data-year="${year}">
      ${i === 0 ? '<span class="siet-tmpl-ytab-dot"></span>' : ''}
      ${year}
    </button>
  `).join('');

  // 3. Superstars Running Single Slide Marquee HTML
  const initialSuperstarsMarqueeHtml = getSuperstarMarqueeHtml('all');

  return `
    <main class="siet-pe-page">

      <!-- ══════════════════════════════════════════════════════════
           1. SUPERSTARS OF PLACEMENT SEASON 2025 - 2026 (Official Banner Data)
           ══════════════════════════════════════════════════════════ -->
      <!-- Institutional Placement Hero Header (Matching About Design Language) -->
      <section class="siet-sp-hero">
        <div class="siet-sp-hero-grid"></div>
        <div class="siet-sp-hero-orb orb-one"></div>
        <div class="siet-sp-hero-orb orb-two"></div>
        <div class="siet-sp-hero-rings" aria-hidden="true"></div>
        <div class="siet-sp-hero-inner">
          <div class="siet-sp-hero-top-row">
            <p class="siet-sp-kicker"><i></i> SRI SHAKTHI PRIDE · TNEA CODE 2727 · CLASS OF 2026</p>
            <div class="siet-sp-tag-badge">
              <span class="siet-sp-tag-dot"></span>
              <span>663 OFFERS · 213 COMPANIES · ₹33 LPA PEAK</span>
            </div>
          </div>
          <h1 class="siet-sp-hero-title">Placement <em>Superstars</em> &amp; Career Milestones</h1>
          <p class="siet-sp-hero-intro">Celebrating 663 campus offers and peak compensation of ₹33 LPA secured by our graduating engineering cohort across leading multinational technology corporations and product innovators.</p>
        </div>
      </section>

      <!-- 1. SUPERSTARS OF PLACEMENT SEASON 2025 - 2026 (Official Banner Data) -->
      <section class="siet-sp-section">
        <div class="siet-sp-shell">

          <!-- 1. SUPERSTARS RUNNING SHOWCASE (Single Continuous Slide) -->
          <div class="siet-sp-gallery-controls">
            <div class="siet-sp-gallery-title-group">
              <span class="siet-sp-gallery-kicker"><i></i> INDIVIDUAL STUDENT RECRUITMENT RECORDS</span>
              <h2 class="siet-sp-gallery-title">Meet Our <em>43 Placement Superstars</em></h2>
            </div>
            <div class="siet-sp-filter-tabs" id="siet-sp-tier-filters">
              <button type="button" class="siet-sp-filter-tab is-active" data-tier="all">
                <span class="siet-sp-ftab-dot"></span> All Superstars (43)
              </button>
              <button type="button" class="siet-sp-filter-tab" data-tier="33">₹33 LPA · Trilogy (2)</button>
              <button type="button" class="siet-sp-filter-tab" data-tier="22">₹22 LPA · Increff (5)</button>
              <button type="button" class="siet-sp-filter-tab" data-tier="13-12">₹13–12 LPA (3)</button>
              <button type="button" class="siet-sp-filter-tab" data-tier="10">₹10 LPA (16)</button>
              <button type="button" class="siet-sp-filter-tab" data-tier="9">₹9 LPA (17)</button>
            </div>
          </div>

          <!-- Single Slide Running Track (Continuous Marquee with Image Hover & Pause) -->
          <div class="siet-sp-marquee-wrapper" id="siet-sp-marquee-wrapper">
            <div class="siet-sp-marquee-track" id="siet-sp-cards-track">
              ${initialSuperstarsMarqueeHtml}
            </div>
          </div>

          <!-- Official Placement Key Metrics Grid (Matching Home/About Stat Grid) -->
          <div class="siet-sp-stats-wrapper" id="siet-kpi-interactive-area">
            <div class="siet-sp-stats-grid">
              
              <!-- 01. Campus Offers -->
              <article class="siet-sp-stat-box js-kpi-card" data-kpi="offers" data-filter="all" title="Click to view all campus offers" tabindex="0">
                
                <span class="stat-icon" aria-hidden="true">${icon('chart')}</span>
                <h3><span class="js-counter" data-to="663" data-suffix="+">0+</span></h3>
                <p>Campus Offers</p>
                <span class="stat-subtitle">Class of 2026 Cohort</span>
                <span class="stat-bottom-line" aria-hidden="true"></span>
              </article>

              <!-- 02. Recruiting Companies -->
              <article class="siet-sp-stat-box js-kpi-card" data-kpi="companies" data-filter="all" title="Click to inspect recruiter partnerships" tabindex="0">
                
                <span class="stat-icon" aria-hidden="true">${icon('industry')}</span>
                <h3><span class="js-counter" data-to="213" data-suffix="+">0+</span></h3>
                <p>Recruiting Companies</p>
                <span class="stat-subtitle">Tier-1 &amp; Core Partners</span>
                <span class="stat-bottom-line" aria-hidden="true"></span>
              </article>

              <!-- 03. Highest CTC -->
              <article class="siet-sp-stat-box js-kpi-card is-highlight" data-kpi="highest" data-filter="33" title="Click to filter ₹33 LPA superstars" tabindex="0">
                
                <span class="stat-icon" aria-hidden="true">${icon('trophy')}</span>
                <h3 class="highlight-val"><span class="js-counter" data-prefix="₹" data-to="33" data-suffix=" LPA">₹0 LPA</span></h3>
                <p>Highest CTC (Trilogy)</p>
                <span class="stat-subtitle">Marquee Peak Package</span>
                <span class="stat-bottom-line" aria-hidden="true"></span>
              </article>

              <!-- 04. Prime Platinum -->
              <article class="siet-sp-stat-box js-kpi-card" data-kpi="platinum" data-filter="22" title="Click to filter ₹10–33 LPA offers" tabindex="0">
                
                <span class="stat-icon" aria-hidden="true">${icon('crown')}</span>
                <h3><span class="js-counter" data-to="26">0</span></h3>
                <p>Prime Platinum</p>
                <span class="stat-subtitle">₹10 – ₹33 LPA Super Dream</span>
                <span class="stat-bottom-line" aria-hidden="true"></span>
              </article>

              <!-- 05. Dazzling Diamond -->
              <article class="siet-sp-stat-box js-kpi-card" data-kpi="diamond" data-filter="10" title="Click to filter ₹6–10 LPA offers" tabindex="0">
                
                <span class="stat-icon" aria-hidden="true">${icon('chip')}</span>
                <h3><span class="js-counter" data-to="98">0</span></h3>
                <p>Dazzling Diamond</p>
                <span class="stat-subtitle">₹6 – ₹10 LPA Product Tier</span>
                <span class="stat-bottom-line" aria-hidden="true"></span>
              </article>

              <!-- 06. Precious Pearl -->
              <article class="siet-sp-stat-box js-kpi-card" data-kpi="pearl" data-filter="9" title="Click to filter ₹4–6 LPA offers" tabindex="0">
                
                <span class="stat-icon" aria-hidden="true">${icon('connect')}</span>
                <h3><span class="js-counter" data-to="272">0</span></h3>
                <p>Precious Pearl</p>
                <span class="stat-subtitle">₹4 – ₹6 LPA Core IT Tier</span>
                <span class="stat-bottom-line" aria-hidden="true"></span>
              </article>

            </div>
            <div class="bottom-gold-line" aria-hidden="true"></div>
          </div>
        </div>
      </section>

      <!-- ══════════════════════════════════════════════════════════
           2. YEAR-WISE HIGHLIGHTS & GROWTH RECORD (Sri Shakthi Theme)
           ══════════════════════════════════════════════════════════ -->
      <section class="siet-yw-section">
        <div class="siet-sp-lower-shell">
          <!-- Section Header (Matching About / Vision & Mission Intro) -->
          <div class="siet-vm-section-intro reveal" style="text-align:center;max-width:800px;margin:0 auto 36px;">
            <p style="color:#00854a;font-weight:800;letter-spacing:0.18em;margin-bottom:8px;font-size:12px;">ANNUAL PLACEMENT RECORD</p>
            <h2 style="font:800 clamp(28px,3.2vw,44px)/1.15 'Plus Jakarta Sans',sans-serif;color:#00281b;letter-spacing:-0.03em;margin:0 0 10px;">Year-Wise <em style="font-family:'Playfair Display',Georgia,serif;font-weight:600;font-style:italic;color:#00854a;">Highlights &amp; Growth</em></h2>
            <span style="font-size:15px;color:#507060;line-height:1.6;font-weight:500;">Consistent multi-year placement performance, expanding top-tier recruiter partnerships, and escalating package milestones.</span>
          </div>

          <div class="siet-vm-card-grid siet-yw-vm-grid">

            <!-- Card 1: Cohort Performance Highlights (Vision Card Template) -->
            <article class="siet-vm-card siet-vm-card-vision siet-yw-card-audit reveal">
              <div class="siet-vm-card-pattern"></div>
              <div class="siet-vm-card-top">
                <span class="siet-vm-card-icon">${vmIcon('eye')}</span>
                <div class="siet-yw-card-top-right">
                  <span class="siet-tmpl-verified-tag">✓ NIRF &amp; NBA Verified</span>
                  <span class="siet-vm-card-number">01 / HIGHLIGHTS</span>
                </div>
              </div>
              <div class="siet-vm-card-copy siet-yw-copy">
                <p class="siet-vm-card-label">COHORT PERFORMANCE AUDIT</p>
                <h2>Validated Campus <em>Milestones.</em></h2>
                <p class="siet-yw-card-desc">Annual audited metrics verified by the Training &amp; Placement Cell across all eligible departments.</p>

                <!-- Year Tabs -->
                <div class="siet-tmpl-year-tabs">
                  ${tabsHtml}
                </div>

                <!-- 6-Metric Stat Tiles Grid -->
                <div class="siet-tmpl-stats-grid">
                  <!-- Item 1: Students Placed / Total Offers -->
                  <div class="siet-tmpl-stat-card">
                    <div class="siet-tmpl-sc-header">
                      <div class="siet-tmpl-sitem-icon">
                        <svg viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 3s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
                      </div>
                      <span class="siet-tmpl-trend-pill is-green" id="tmpl-tag-placed">663 Campus Offers</span>
                    </div>
                    <div class="siet-tmpl-sc-content">
                      <span class="siet-tmpl-sitem-lbl">Total Campus Offers</span>
                      <span class="siet-tmpl-sitem-val" id="tmpl-val-placed">663</span>
                    </div>
                  </div>

                  <!-- Item 2: Companies Visited -->
                  <div class="siet-tmpl-stat-card">
                    <div class="siet-tmpl-sc-header">
                      <div class="siet-tmpl-sitem-icon">
                        <svg viewBox="0 0 24 24"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/></svg>
                      </div>
                      <span class="siet-tmpl-trend-pill is-gold" id="tmpl-tag-companies">213 Visited</span>
                    </div>
                    <div class="siet-tmpl-sc-content">
                      <span class="siet-tmpl-sitem-lbl">Companies Visited</span>
                      <span class="siet-tmpl-sitem-val" id="tmpl-val-companies">213</span>
                    </div>
                  </div>

                  <!-- Item 3: Highest Package -->
                  <div class="siet-tmpl-stat-card is-highlight">
                    <div class="siet-tmpl-sc-header">
                      <div class="siet-tmpl-sitem-icon" style="background:#fff8e1;color:#b87e00;">
                        <svg viewBox="0 0 24 24"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>
                      </div>
                      <span class="siet-tmpl-trend-pill is-gold" id="tmpl-tag-highest">Trilogy Record</span>
                    </div>
                    <div class="siet-tmpl-sc-content">
                      <span class="siet-tmpl-sitem-lbl">Highest Package</span>
                      <span class="siet-tmpl-sitem-val" id="tmpl-val-highest" style="color:#005a39;">₹33 LPA</span>
                    </div>
                  </div>

                  <!-- Item 4: Average Package -->
                  <div class="siet-tmpl-stat-card">
                    <div class="siet-tmpl-sc-header">
                      <div class="siet-tmpl-sitem-icon">
                        <svg viewBox="0 0 24 24"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>
                      </div>
                      <span class="siet-tmpl-trend-pill is-green" id="tmpl-tag-average">Core &amp; IT Mix</span>
                    </div>
                    <div class="siet-tmpl-sc-content">
                      <span class="siet-tmpl-sitem-lbl">Average Package</span>
                      <span class="siet-tmpl-sitem-val" id="tmpl-val-average">₹6.8 LPA</span>
                    </div>
                  </div>

                  <!-- Item 5: Multiple Offers -->
                  <div class="siet-tmpl-stat-card">
                    <div class="siet-tmpl-sc-header">
                      <div class="siet-tmpl-sitem-icon">
                        <svg viewBox="0 0 24 24"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>
                      </div>
                      <span class="siet-tmpl-trend-pill is-blue" id="tmpl-tag-multiple">Prime &amp; Dual</span>
                    </div>
                    <div class="siet-tmpl-sc-content">
                      <span class="siet-tmpl-sitem-lbl">Multiple Offers</span>
                      <span class="siet-tmpl-sitem-val" id="tmpl-val-multiple">185</span>
                    </div>
                  </div>

                  <!-- Item 6: Placement Rate -->
                  <div class="siet-tmpl-stat-card">
                    <div class="siet-tmpl-sc-header">
                      <div class="siet-tmpl-sitem-icon">
                        <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                      </div>
                      <span class="siet-tmpl-trend-pill is-green" id="tmpl-tag-rate">Eligible Cohort</span>
                    </div>
                    <div class="siet-tmpl-sc-content">
                      <span class="siet-tmpl-sitem-lbl">Placement Rate</span>
                      <span class="siet-tmpl-sitem-val" id="tmpl-val-rate">98%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="siet-vm-card-footer" style="padding-top: 15px; border-top: none;">
                <button type="button" class="siet-tmpl-btn-gold js-open-records-sheet" data-sheet="0" style="margin-top:0;">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5-7l-3 3.72L9 13l-3 4h12l-4-5z"/></svg>
                  <span>View Full Placement Records →</span>
                </button>
              </div>
            </article>

            <!-- Card 2: Placement Growth Chart (Mission Card Template) -->
            <article class="siet-vm-card siet-vm-card-mission siet-yw-card-growth reveal">
              <div class="siet-vm-mission-lines"></div>
              <div class="siet-vm-card-top">
                <span class="siet-vm-card-icon siet-yw-gold-icon">${vmIcon('spark')}</span>
                <div class="siet-yw-card-top-right">
                  <span class="siet-chart-growth-pill">↑ +70.0% Surge</span>
                  <span class="siet-vm-card-number siet-yw-gold-num">02 / GROWTH</span>
                </div>
              </div>
              <div class="siet-vm-card-copy siet-yw-copy">
                <p class="siet-vm-card-label">TREND ANALYSIS (LAST 4 YEARS)</p>
                <h2 style="color:#ffffff;">Placement Growth <em>&amp; Trajectory.</em></h2>
                <p class="siet-yw-card-desc" style="color:rgba(255,255,255,0.85);">Sustained upward progression in multi-tier recruiting partnerships and offer volumes.</p>

                <!-- Legend Bar -->
                <div class="siet-tmpl-chart-legend siet-yw-chart-legend">
                  <span class="siet-legend-item"><i style="background:linear-gradient(180deg,#00e676,#00854a)"></i> Campus Offers</span>
                  <span class="siet-legend-item"><i style="background:linear-gradient(180deg,#ffd54f,#f59e0b)"></i> Companies Visited</span>
                  <span class="siet-legend-item"><i style="background:#69f0ae;height:3px;border-radius:2px;"></i> Growth Spline</span>
                </div>

                <!-- High-Resolution Enhanced SVG Bar & Spline Chart -->
                <div class="siet-chart-svg-wrap">
                  <svg viewBox="0 0 500 220" class="siet-chart-svg" preserveAspectRatio="xMidYMid meet" aria-label="Placement Growth Chart">
                    <defs>
                      <linearGradient id="sietBarGreenGradDark" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#00e676"/>
                        <stop offset="100%" stop-color="#00854a"/>
                      </linearGradient>
                      <linearGradient id="sietBarActiveGreenGradDark" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#69f0ae"/>
                        <stop offset="100%" stop-color="#00b364"/>
                      </linearGradient>
                      <linearGradient id="sietBarGoldGradDark" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#ffd54f"/>
                        <stop offset="100%" stop-color="#f59e0b"/>
                      </linearGradient>
                      <linearGradient id="chartSplineGradDark" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stop-color="#00e676"/>
                        <stop offset="65%" stop-color="#69f0ae"/>
                        <stop offset="100%" stop-color="#f3c515"/>
                      </linearGradient>
                      <filter id="sietGlowDark" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.35"/>
                      </filter>
                      <filter id="sietSplineGlowDark" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#69f0ae" flood-opacity="0.7"/>
                      </filter>
                    </defs>

                    <!-- Y-Axis Grid Lines and Reference Labels -->
                    <text x="32" y="19" font-size="9" fill="#a3d9b5" text-anchor="end" font-family="'Plus Jakarta Sans',sans-serif" font-weight="600">700</text>
                    <line x1="42" y1="15" x2="480" y2="15" stroke="rgba(255,255,255,0.14)" stroke-width="1" stroke-dasharray="3,3"/>

                    <text x="32" y="59" font-size="9" fill="#a3d9b5" text-anchor="end" font-family="'Plus Jakarta Sans',sans-serif" font-weight="600">500</text>
                    <line x1="42" y1="55" x2="480" y2="55" stroke="rgba(255,255,255,0.14)" stroke-width="1" stroke-dasharray="3,3"/>

                    <text x="32" y="99" font-size="9" fill="#a3d9b5" text-anchor="end" font-family="'Plus Jakarta Sans',sans-serif" font-weight="600">300</text>
                    <line x1="42" y1="95" x2="480" y2="95" stroke="rgba(255,255,255,0.14)" stroke-width="1" stroke-dasharray="3,3"/>

                    <text x="32" y="139" font-size="9" fill="#a3d9b5" text-anchor="end" font-family="'Plus Jakarta Sans',sans-serif" font-weight="600">100</text>
                    <line x1="42" y1="135" x2="480" y2="135" stroke="rgba(255,255,255,0.14)" stroke-width="1" stroke-dasharray="3,3"/>

                    <!-- Base Line -->
                    <line x1="42" y1="175" x2="480" y2="175" stroke="rgba(255,255,255,0.25)" stroke-width="1.5"/>

                    <!-- ── YEAR 1: 2022 - 23 (Center x = 100) ── -->
                    <g class="siet-chart-col-group" data-year="2022 - 23" cursor="pointer">
                      <rect class="siet-chart-col-bg" x="54" y="15" width="92" height="185" rx="8" fill="transparent"/>
                      <!-- Student Bar: 390 -->
                      <rect x="68" y="100" width="26" height="75" fill="url(#sietBarGreenGradDark)" rx="4" filter="url(#sietGlowDark)" class="siet-cbar-student"/>
                      <!-- Company Bar: 140 -->
                      <rect x="100" y="145" width="26" height="30" fill="url(#sietBarGoldGradDark)" rx="4" class="siet-cbar-company"/>
                      <!-- Val Labels -->
                      <text x="81" y="92" font-size="10" fill="#a7f3d0" text-anchor="middle" font-weight="800" font-family="'Plus Jakarta Sans',sans-serif">390</text>
                      <text x="113" y="139" font-size="9.5" fill="#fde047" text-anchor="middle" font-weight="800" font-family="'Plus Jakarta Sans',sans-serif">140</text>
                      <!-- Year Label -->
                      <text x="97" y="196" font-size="10.5" fill="rgba(255,255,255,0.8)" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="700">2022 - 23</text>
                    </g>

                    <!-- ── YEAR 2: 2023 - 24 (Center x = 205) ── -->
                    <g class="siet-chart-col-group" data-year="2023 - 24" cursor="pointer">
                      <rect class="siet-chart-col-bg" x="159" y="15" width="92" height="185" rx="8" fill="transparent"/>
                      <!-- Student Bar: 460 -->
                      <rect x="173" y="85" width="26" height="90" fill="url(#sietBarGreenGradDark)" rx="4" filter="url(#sietGlowDark)" class="siet-cbar-student"/>
                      <!-- Company Bar: 165 -->
                      <rect x="205" y="138" width="26" height="37" fill="url(#sietBarGoldGradDark)" rx="4" class="siet-cbar-company"/>
                      <!-- Val Labels -->
                      <text x="186" y="77" font-size="10" fill="#a7f3d0" text-anchor="middle" font-weight="800" font-family="'Plus Jakarta Sans',sans-serif">460</text>
                      <text x="218" y="132" font-size="9.5" fill="#fde047" text-anchor="middle" font-weight="800" font-family="'Plus Jakarta Sans',sans-serif">165</text>
                      <!-- Year Label -->
                      <text x="202" y="196" font-size="10.5" fill="rgba(255,255,255,0.8)" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="700">2023 - 24</text>
                    </g>

                    <!-- ── YEAR 3: 2024 - 25 (Center x = 310) ── -->
                    <g class="siet-chart-col-group" data-year="2024 - 25" cursor="pointer">
                      <rect class="siet-chart-col-bg" x="264" y="15" width="92" height="185" rx="8" fill="transparent"/>
                      <!-- Student Bar: 580 -->
                      <rect x="278" y="62" width="26" height="113" fill="url(#sietBarGreenGradDark)" rx="4" filter="url(#sietGlowDark)" class="siet-cbar-student"/>
                      <!-- Company Bar: 190 -->
                      <rect x="310" y="132" width="26" height="43" fill="url(#sietBarGoldGradDark)" rx="4" class="siet-cbar-company"/>
                      <!-- Val Labels -->
                      <text x="291" y="54" font-size="10" fill="#a7f3d0" text-anchor="middle" font-weight="800" font-family="'Plus Jakarta Sans',sans-serif">580</text>
                      <text x="323" y="126" font-size="9.5" fill="#fde047" text-anchor="middle" font-weight="800" font-family="'Plus Jakarta Sans',sans-serif">190</text>
                      <!-- Year Label -->
                      <text x="307" y="196" font-size="10.5" fill="rgba(255,255,255,0.8)" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="700">2024 - 25</text>
                    </g>

                    <!-- ── YEAR 4: 2025 - 26 (Center x = 415) ACTIVE/CURRENT ── -->
                    <g class="siet-chart-col-group is-active" data-year="2025 - 26" cursor="pointer">
                      <rect class="siet-chart-col-bg" x="369" y="15" width="92" height="185" rx="8" fill="rgba(255,255,255,0.12)" stroke="rgba(243,197,21,0.5)" stroke-width="1.5"/>
                      <!-- Student Bar: 663 -->
                      <rect x="383" y="38" width="26" height="137" fill="url(#sietBarActiveGreenGradDark)" rx="4" filter="url(#sietGlowDark)" class="siet-cbar-student"/>
                      <!-- Company Bar: 213 -->
                      <rect x="415" y="126" width="26" height="49" fill="url(#sietBarGoldGradDark)" rx="4" class="siet-cbar-company"/>
                      <!-- Val Labels -->
                      <text x="396" y="30" font-size="11" fill="#ffffff" text-anchor="middle" font-weight="900" font-family="'Plus Jakarta Sans',sans-serif">663</text>
                      <text x="428" y="120" font-size="10" fill="#f3c515" text-anchor="middle" font-weight="800" font-family="'Plus Jakarta Sans',sans-serif">213</text>
                      <!-- Year Label -->
                      <text x="412" y="196" font-size="11" fill="#ffffff" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="800">2025 - 26 ★</text>
                    </g>

                    <!-- ── Growth Spline Connecting Placement Peaks ── -->
                    <path d="M 81 100 C 133 94, 134 85, 186 85 C 238 85, 239 62, 291 62 C 343 62, 344 38, 396 38" fill="none" stroke="url(#chartSplineGradDark)" stroke-width="3.5" stroke-linecap="round" filter="url(#sietSplineGlowDark)"/>

                    <!-- Spline Vertex Dots -->
                    <circle cx="81" cy="100" r="4.5" fill="#ffffff" stroke="#00b364" stroke-width="2.5"/>
                    <circle cx="186" cy="85" r="4.5" fill="#ffffff" stroke="#00b364" stroke-width="2.5"/>
                    <circle cx="291" cy="62" r="4.5" fill="#ffffff" stroke="#00b364" stroke-width="2.5"/>
                    <circle cx="396" cy="38" r="6.5" fill="#f3c515" stroke="#ffffff" stroke-width="2.5"/>
                  </svg>
                </div>

                <!-- Bottom Highlights Strip -->
                <div class="siet-chart-kpi-ribbon siet-yw-kpi-ribbon">
                  <div class="siet-chart-kpi-chip">
                    <span class="siet-chart-kpi-dot" style="background:#55eb99;"></span>
                    <span class="siet-chart-kpi-lbl">Highest CTC:</span>
                    <strong class="siet-chart-kpi-val">₹33 LPA</strong>
                  </div>
                  <div class="siet-chart-kpi-chip">
                    <span class="siet-chart-kpi-dot" style="background:#f3c515;"></span>
                    <span class="siet-chart-kpi-lbl">Recruiter Partners:</span>
                    <strong class="siet-chart-kpi-val">213 Visited</strong>
                  </div>
                  <div class="siet-chart-kpi-chip">
                    <span class="siet-chart-kpi-dot" style="background:#69f0ae;"></span>
                    <span class="siet-chart-kpi-lbl">Total Campus Offers:</span>
                    <strong class="siet-chart-kpi-val">663 Offers</strong>
                  </div>
                </div>
              </div>
              <div class="siet-vm-card-footer">
                <span>Escalating multi-year institutional recruitment milestones.</span>
                <i></i>
              </div>
            </article>

          </div>
        </div>
      </section>

      <!-- ══════════════════════════════════════════════════════════
           3. TOP RECRUITERS & INDUSTRY PARTNERS (Interactive Showcase)
           ══════════════════════════════════════════════════════════ -->
      <section class="siet-tr-section">
        <div class="siet-tr-shell">
          <!-- Header -->
          <div class="siet-tr-header-box">
            <div class="siet-tr-kicker"><i></i> VALUED CORPORATE NETWORK</div>
            <h2 class="siet-tr-title">Top <em>Recruiters &amp; Industry Partners</em></h2>
            <p class="siet-tr-subtitle">Over 213+ multinational corporations, product engineering giants, and global IT consulting firms recruit every year from Sri Shakthi.</p>
          </div>

          <!-- Institutional Milestone Strip -->
          <div class="siet-tr-stats-bar">
            <div class="siet-tr-sbar-item">
              <span class="siet-tr-sbar-num">213</span>
              <span class="siet-tr-sbar-lbl">Recruiter Partners</span>
            </div>
            <div class="siet-tr-sbar-sep"></div>
            <div class="siet-tr-sbar-item">
              <span class="siet-tr-sbar-num">15+</span>
              <span class="siet-tr-sbar-lbl">Fortune 500 MNCs</span>
            </div>
            <div class="siet-tr-sbar-sep"></div>
            <div class="siet-tr-sbar-item">
              <span class="siet-tr-sbar-num">₹33 LPA</span>
              <span class="siet-tr-sbar-lbl">Marquee CTC</span>
            </div>
            <div class="siet-tr-sbar-sep"></div>
            <div class="siet-tr-sbar-item">
              <span class="siet-tr-sbar-num">663</span>
              <span class="siet-tr-sbar-lbl">Campus Offers</span>
            </div>
          </div>

          <!-- Single Marquee Track with Hover Pause & Card Lift -->
          <div class="siet-tr-marquee-container">
            <div class="siet-tr-marquee-wrap" aria-label="Top Placement Recruiters Showcase">
              <div class="siet-tr-track">
                ${marqueeSingleHtml}
                ${marqueeSingleHtml}
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- ══════════════════════════════════════════════════════════
           4. THE PLACEMENT JOURNEY (Structured Career Roadmap)
           ══════════════════════════════════════════════════════════ -->
      <section class="siet-pj-hero-section">
        <div class="siet-pj-hero-grid"></div>
        <div class="siet-pj-hero-orb-1"></div>
        <div class="siet-pj-hero-orb-2"></div>
        <div class="siet-pj-shell">
          <div class="siet-pj-head">
            <div class="siet-pj-kicker"><i></i> STRUCTURED CAREER ROADMAP</div>
            <h2 class="siet-pj-title">The Placement <em>Journey</em></h2>
            <p class="siet-pj-subtitle">Transforming raw potential into industry-ready leaders through our comprehensive 6-stage training and recruitment pipeline.</p>
          </div>

          <!-- 6-Stage Journey Cards Grid -->
          <div class="siet-pj-steps-grid">
            <div class="siet-pj-card">
              <span class="siet-pj-step-num">01</span>
              <div class="siet-pj-icon">
                <svg viewBox="0 0 24 24"><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/></svg>
              </div>
              <h3 class="siet-pj-card-title">Training &amp; Skills</h3>
              <p class="siet-pj-card-desc">Domain foundations, core engineering concepts &amp; hands-on technical labs.</p>
              <span class="siet-pj-pill">Semester 3–4</span>
            </div>

            <div class="siet-pj-card">
              <span class="siet-pj-step-num">02</span>
              <div class="siet-pj-icon">
                <svg viewBox="0 0 24 24"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
              </div>
              <h3 class="siet-pj-card-title">Aptitude Prep</h3>
              <p class="siet-pj-card-desc">Quantitative problem solving, logical reasoning &amp; soft skills mastery.</p>
              <span class="siet-pj-pill">Semester 5</span>
            </div>

            <div class="siet-pj-card">
              <span class="siet-pj-step-num">03</span>
              <div class="siet-pj-icon">
                <svg viewBox="0 0 24 24"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>
              </div>
              <h3 class="siet-pj-card-title">Technical Mastery</h3>
              <p class="siet-pj-card-desc">Advanced algorithms, system design, coding sprints &amp; project bootcamps.</p>
              <span class="siet-pj-pill">Semester 6</span>
            </div>

            <div class="siet-pj-card">
              <span class="siet-pj-step-num">04</span>
              <div class="siet-pj-icon">
                <svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
              </div>
              <h3 class="siet-pj-card-title">Mock Interviews</h3>
              <p class="siet-pj-card-desc">Simulated technical panels, HR rounds and individual feedback from industry leaders.</p>
              <span class="siet-pj-pill">Semester 6–7</span>
            </div>

            <div class="siet-pj-card">
              <span class="siet-pj-step-num">05</span>
              <div class="siet-pj-icon">
                <svg viewBox="0 0 24 24"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/></svg>
              </div>
              <h3 class="siet-pj-card-title">Company Drives</h3>
              <p class="siet-pj-card-desc">On-campus recruitment drives by Fortune 500 &amp; top product tech companies.</p>
              <span class="siet-pj-pill">Semester 7</span>
            </div>

            <div class="siet-pj-card is-final">
              <span class="siet-pj-step-num">06</span>
              <div class="siet-pj-icon" style="background:#f3c515;color:#00281b;">
                <svg viewBox="0 0 24 24"><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/></svg>
              </div>
              <h3 class="siet-pj-card-title">Career Success</h3>
              <p class="siet-pj-card-desc">Offer rollouts, marquee salary packages &amp; global career journeys launched.</p>
              <span class="siet-pj-pill" style="background:#f3c515;color:#00281b;font-weight:800;">Offer Rolled Out</span>
            </div>
          </div>

          <!-- Bottom Action Buttons -->
          <div class="siet-pj-actions">
            <a href="mailto:placements@siet.ac.in" class="siet-tmpl-btn-outline">Contact Placement Cell</a>
          </div>
        </div>
      </section>     <!-- Interactive Lightbox Modal for All 5 Placement Record Sheets -->
      <div class="siet-records-modal" id="siet-records-modal" style="display:none;" role="dialog" aria-modal="true">
        <div class="siet-records-modal-backdrop js-close-records-modal"></div>
        <div class="siet-records-modal-dialog">
          <div class="siet-records-modal-header">
            <div class="siet-records-modal-title-box">
              <span class="siet-records-modal-sub">SRI SHAKTHI INSTITUTE OF ENGINEERING &amp; TECHNOLOGY (TNEA CODE 2727)</span>
              <h3 id="siet-modal-sheet-title">Sheet 1: Prime Platinum &amp; High Diamond Offers (₹10 – ₹33 LPA)</h3>
            </div>
            <div class="siet-records-modal-actions">
              <a href="/brand/placement-records/sheet-1-prime-offers-10-33-lpa.jpg" id="siet-modal-open-newtab" target="_blank" rel="noopener noreferrer" class="siet-records-modal-action-btn" title="Open full-resolution image in new tab">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>
                <span>Full Resolution</span>
              </a>
              <button type="button" class="siet-records-modal-close js-close-records-modal" aria-label="Close modal">✕</button>
            </div>
          </div>

          <!-- Sheet Switcher Tabs -->
          <div class="siet-records-modal-nav">
            <button type="button" class="siet-records-modal-tab is-active" data-sheet-idx="0">Sheet 1 (₹10–33L)</button>
            <button type="button" class="siet-records-modal-tab" data-sheet-idx="1">Sheet 2 (₹6–10L)</button>
            <button type="button" class="siet-records-modal-tab" data-sheet-idx="2">Sheet 3 (₹4–6L Pt.1)</button>
            <button type="button" class="siet-records-modal-tab" data-sheet-idx="3">Sheet 4 (₹4–6L Pt.2)</button>
            <button type="button" class="siet-records-modal-tab" data-sheet-idx="4">Sheet 5 (213 Companies)</button>
          </div>

          <!-- Modal Image Body with Prev/Next Controls -->
          <div class="siet-records-modal-body">
            <button type="button" class="siet-records-nav-btn is-prev" id="siet-modal-prev-btn" aria-label="Previous Sheet">‹</button>
            <div class="siet-records-img-container">
              <img id="siet-modal-active-img" src="/brand/placement-records/sheet-1-prime-offers-10-33-lpa.jpg" alt="Official Placement Record Sheet">
            </div>
            <button type="button" class="siet-records-nav-btn is-next" id="siet-modal-next-btn" aria-label="Next Sheet">›</button>
          </div>

          <!-- Modal Footer Meta -->
          <div class="siet-records-modal-footer">
            <p id="siet-modal-sheet-desc">Contains S.No 1 to 62: Gowtham G (Trilogy ₹33L), Siv Raam Krishnan (Trilogy ₹33L), Increff (₹22L · 5 Offers), Presidio, Zenx AI, Hyperverge, TCS, Aivar Innovation, Mr. Cooper, Reltio, Linarc, Centillion Labs, etc.</p>
            <span class="siet-records-counter" id="siet-modal-sheet-counter">Sheet 1 of 5</span>
          </div>
        </div>
      </div>
      </main>
  `;
}

// State for Superstars Gallery (Season 2025 - 2026)
let currentSuperstarFilter = 'all';

export function updateSuperstarsMarquee(tier) {
  currentSuperstarFilter = tier || 'all';
  const track = document.getElementById('siet-sp-cards-track');
  if (track) {
    track.innerHTML = getSuperstarMarqueeHtml(currentSuperstarFilter);
    track.style.animation = 'none';
    track.offsetHeight; /* trigger reflow */
    track.style.animation = 'sietSuperstarsMarquee 60s linear infinite';
  }
}

// Backward compatibility alias
function updateStarPlacements(pageIndex) {
  // no-op for single slide marquee
}

// Global click listener


// ── Placement Key Metrics Dynamic Animation & Sync ──
export function initPlacementsDynamicKpi() {
  const kpiEl = document.getElementById('siet-kpi-interactive-area');
  if (!kpiEl) return;

  // Trigger counters when scrolled into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.js-counter').forEach(el => {
          if (typeof animateCounter === 'function') {
            animateCounter(el);
          }
        });
        observer.disconnect();
      }
    });
  }, { threshold: 0.15 });
  observer.observe(kpiEl);
}

// ── Official Placement Record Sheets Modal Logic ──
const placementRecordSheets = [
  {
    title: 'Sheet 1: Prime Platinum & High Diamond Offers (₹10 – ₹33 LPA)',
    desc: 'Contains S.No 1 to 62: Gowtham G (Trilogy ₹33L), Siv Raam Krishnan (Trilogy ₹33L), Increff (₹22L · 5 Offers), Presidio, Zenx AI, Hyperverge, TCS, Aivar Innovation, Mr. Cooper, Reltio, Linarc, Centillion Labs, AboveCloud9.ai, etc.',
    src: '/brand/placement-records/sheet-1-prime-offers-10-33-lpa.jpg'
  },
  {
    title: 'Sheet 2: Dazzling Diamond & Precious Pearl (₹6 – ₹10 LPA & ₹4 – ₹6 LPA)',
    desc: 'Contains S.No 63 to 125 & 126 to 189: Rently, Vymo, Adaya.ai, Kovai.co, TCS, Grootan Tech, Centillion Labs, Tarka Labs, Abluva, Innoventees, Digiledge, Zoho, Ge Ram Soft Tech, InCorp India, Vendasta, Appviewx, Ziffity, Movidu, etc.',
    src: '/brand/placement-records/sheet-2-diamond-offers-6-10-lpa.jpg'
  },
  {
    title: 'Sheet 3: Precious Pearl Offers Part 1 (₹4 – ₹6 LPA · 226 Offers)',
    desc: 'Contains S.No 126 to 253: Zoho, Responsive.io, Sekel, Intimetec, Sedin Tech, Profitstory.ai, Divum, Visai Labs, Bluebird, Livetag Tech, Arcadia, Novintix, Suntec, Wiemera, Dalmia Cements, Ajira, Izeon, Pentl.ai, Softcell, etc.',
    src: '/brand/placement-records/sheet-3-pearl-offers-part-1.jpg'
  },
  {
    title: 'Sheet 4: Precious Pearl Offers Part 2 (₹4 – ₹6 LPA · 226 Offers)',
    desc: 'Contains S.No 380 to 507: Jeyam Auto, Popular Systems, Benco Thermal, Aggregate Intelligence, PRS Semiconductor, Brysa, Freedom Software, Tihan IIT, Vinpro Tech, Hirotec, Bull Machines, Middel East Fuji, Swish, Gomathy Engg, Crux Medical, LECS, etc.',
    src: '/brand/placement-records/sheet-4-pearl-offers-part-2.jpg'
  },
  {
    title: 'Sheet 5: Recruiter Summary & Multi-Offer Tiers (213 Companies Visited)',
    desc: 'Contains S.No 444 to 507 & Grand Totals: Addictronz, G5 Switchgear, Zealev, Genn Automation, Levim Biotech, Hiox Software, Mindnotix, RND Soft, Adz4Need, Webnox, Virtual Tech Gurus, Sacra, Sartorius, MyLapay, Ecometrix, Flowtrack, NCR Alteos, etc.',
    src: '/brand/placement-records/sheet-5-recruitment-records-213-companies.jpg'
  }
];

let activeRecordSheetIdx = 0;

export function switchPlacementRecordSheet(idx) {
  idx = (idx + placementRecordSheets.length) % placementRecordSheets.length;
  activeRecordSheetIdx = idx;
  const sheet = placementRecordSheets[idx];

  const modal = document.getElementById('siet-records-modal');
  if (!modal) return;

  const titleEl = document.getElementById('siet-modal-sheet-title');
  const descEl = document.getElementById('siet-modal-sheet-desc');
  const imgEl = document.getElementById('siet-modal-active-img');
  const newtabEl = document.getElementById('siet-modal-open-newtab');
  const counterEl = document.getElementById('siet-modal-sheet-counter');

  if (titleEl) titleEl.textContent = sheet.title;
  if (descEl) descEl.textContent = sheet.desc;
  if (imgEl) {
    imgEl.style.opacity = '0.35';
    imgEl.src = sheet.src;
    imgEl.onload = () => { imgEl.style.opacity = '1'; };
  }
  if (newtabEl) newtabEl.href = sheet.src;
  if (counterEl) counterEl.textContent = `Sheet ${idx + 1} of ${placementRecordSheets.length}`;

  document.querySelectorAll('.siet-records-modal-tab').forEach((tab, i) => {
    tab.classList.toggle('is-active', i === idx);
  });
}

if (typeof document !== 'undefined') {
  document.addEventListener('click', (e) => {
  // Placement Stat Card Click Handler (filters superstars marquee)
  const kpiCard = e.target.closest('.js-kpi-card');
  if (kpiCard) {
    const filterTier = kpiCard.dataset.filter;

    // Update active KPI card state
    document.querySelectorAll('.js-kpi-card').forEach(c => c.classList.remove('is-active'));
    kpiCard.classList.add('is-active');

    // If card corresponds to a tier, filter the superstars marquee above
    if (filterTier) {
      if (filterTier === 'all') {
        const allTab = document.querySelector('.siet-sp-filter-tab[data-tier="all"]');
        if (allTab) allTab.click();
      } else {
        const matchingTab = document.querySelector(`.siet-sp-filter-tab[data-tier="${filterTier}"]`);
        if (matchingTab) {
          matchingTab.click();
        } else {
          updateSuperstarsMarquee(filterTier);
        }
      }
    }
    return;
  }

  // Open Placement Record Sheet Modal
  const openSheetBtn = e.target.closest('.js-open-records-sheet');
  if (openSheetBtn) {
    const sheetIdx = parseInt(openSheetBtn.dataset.sheet || '0', 10);
    const modal = document.getElementById('siet-records-modal');
    if (modal) {
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      switchPlacementRecordSheet(sheetIdx);
    }
    return;
  }

  // Close Placement Record Sheet Modal
  if (e.target.closest('.js-close-records-modal')) {
    const modal = document.getElementById('siet-records-modal');
    if (modal) {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
    return;
  }

  // Switch Sheet via Tabs
  const modalTab = e.target.closest('.siet-records-modal-tab');
  if (modalTab) {
    const idx = parseInt(modalTab.dataset.sheetIdx || '0', 10);
    switchPlacementRecordSheet(idx);
    return;
  }

  // Prev / Next Buttons
  if (e.target.closest('#siet-modal-prev-btn')) {
    switchPlacementRecordSheet(activeRecordSheetIdx - 1);
    return;
  }
  if (e.target.closest('#siet-modal-next-btn')) {
    switchPlacementRecordSheet(activeRecordSheetIdx + 1);
    return;
  }

  // 1. Banner Modal Lightbox: Open & Close
  if (e.target.closest('.js-open-banner-modal')) {
    const modal = document.getElementById('siet-banner-modal');
    if (modal) {
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }
    return;
  }
  if (e.target.closest('.js-close-banner-modal')) {
    const modal = document.getElementById('siet-banner-modal');
    if (modal) {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
    return;
  }

  // 2. Superstar Tier Filter Tabs
  const ftab = e.target.closest('.siet-sp-filter-tab');
  if (ftab) {
    const tier = ftab.dataset.tier;
    if (!tier) return;
    document.querySelectorAll('.siet-sp-filter-tab').forEach(t => {
      const isMatch = t.dataset.tier === tier;
      t.classList.toggle('is-active', isMatch);
      if (isMatch) {
        if (!t.querySelector('.siet-sp-ftab-dot')) {
          t.insertAdjacentHTML('afterbegin', '<span class="siet-sp-ftab-dot"></span> ');
        }
      } else {
        const dot = t.querySelector('.siet-sp-ftab-dot');
        if (dot) dot.remove();
      }
    });
    updateSuperstarsMarquee(tier);
    return;
  }


  // 5. Year tabs & Graph column clicks
  const yearTarget = e.target.closest('.siet-tmpl-ytab') || e.target.closest('.siet-chart-col-group');
  if (yearTarget) {
    const year = yearTarget.dataset.year;
    if (!year) return;

    // Update Year Tabs
    document.querySelectorAll('.siet-tmpl-ytab').forEach(t => {
      const isMatch = t.dataset.year === year;
      t.classList.toggle('is-active', isMatch);
      t.innerHTML = isMatch ? '<span class="siet-tmpl-ytab-dot"></span> ' + t.dataset.year : t.dataset.year;
    });

    // Update Chart Column highlight
    document.querySelectorAll('.siet-chart-col-group').forEach(cg => {
      const isMatch = cg.dataset.year === year;
      cg.classList.toggle('is-active', isMatch);
      const bg = cg.querySelector('.siet-chart-col-bg');
      if (bg) {
        bg.setAttribute('fill', isMatch ? 'rgba(255, 255, 255, 0.14)' : 'transparent');
        bg.setAttribute('stroke', isMatch ? 'rgba(243, 197, 21, 0.5)' : 'none');
        bg.setAttribute('stroke', isMatch ? 'rgba(0, 133, 74, 0.25)' : 'none');
        bg.setAttribute('stroke-width', isMatch ? '1.5' : '0');
      }
      const valTxt = cg.querySelectorAll('text');
      if (valTxt.length >= 3) {
        valTxt[2].setAttribute('fill', isMatch ? '#ffffff' : 'rgba(255, 255, 255, 0.8)');
        valTxt[2].setAttribute('font-weight', isMatch ? '800' : '700');
      }
    });

    // Update Stats & Tag badges with brief pulse animation
    const data = placementDataYears[year];
    if (data) {
      const statsGrid = document.querySelector('.siet-tmpl-stats-grid');
      if (statsGrid) {
        statsGrid.style.opacity = '0.5';
        setTimeout(() => {
          statsGrid.style.opacity = '1';
        }, 110);
      }
      const elPlaced = document.getElementById('tmpl-val-placed');
      if (elPlaced) elPlaced.textContent = data.placed;
      const elComp = document.getElementById('tmpl-val-companies');
      if (elComp) elComp.textContent = data.companies;
      const elHigh = document.getElementById('tmpl-val-highest');
      if (elHigh) elHigh.textContent = data.highest;
      const elAvg = document.getElementById('tmpl-val-average');
      if (elAvg) elAvg.textContent = data.average;
      const elMult = document.getElementById('tmpl-val-multiple');
      if (elMult) elMult.textContent = data.multiple;
      const elRate = document.getElementById('tmpl-val-rate');
      if (elRate) elRate.textContent = data.rate;

      if (data.tags) {
        const tagPlaced = document.getElementById('tmpl-tag-placed');
        if (tagPlaced) tagPlaced.textContent = data.tags.placed;
        const tagComp = document.getElementById('tmpl-tag-companies');
        if (tagComp) tagComp.textContent = data.tags.companies;
        const tagHigh = document.getElementById('tmpl-tag-highest');
        if (tagHigh) tagHigh.textContent = data.tags.highest;
        const tagAvg = document.getElementById('tmpl-tag-average');
        if (tagAvg) tagAvg.textContent = data.tags.average;
        const tagMult = document.getElementById('tmpl-tag-multiple');
        if (tagMult) tagMult.textContent = data.tags.multiple;
        const tagRate = document.getElementById('tmpl-tag-rate');
        if (tagRate) tagRate.textContent = data.tags.rate;
      }
    }
    return;
  }
});

// Escape key to close modal
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const modal = document.getElementById('siet-banner-modal');
    if (modal && modal.style.display !== 'none') {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
  }
});
}
