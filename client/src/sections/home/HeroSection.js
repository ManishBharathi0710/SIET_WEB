import { icon } from '../../utils/icons.js';
import { counter } from '../../utils/domUtils.js';
import './HeroSection.css';

export function placementHighlightsCardInner() {
  return `
    <!-- Centered Heading Group -->
    <div class="placement-heading-group">
      <h2 class="placement-main-heading">
        <span class="heading-green">Placement</span> <span class="heading-gold">Highlights</span>
      </h2>
      <div class="placement-subheading-row">
        <span class="subheading-gold-line" aria-hidden="true"></span>
        <span class="subheading-batch">2025 – 2026</span>
        <span class="subheading-batch-tag">( BATCH 2025–2026 )</span>
        <span class="subheading-gold-line" aria-hidden="true"></span>
      </div>
      <div class="placement-heading-motto">TODAY. IMPACT TOMORROW.</div>
    </div>

    <!-- 4 Standalone Interactive Statistic Cards in one row -->
    <div class="ps-standalone-cards-row" role="region" aria-label="Placement statistics by salary tier">
      <!-- Card 01 -->
      <article class="ps-stat-card" role="button" tabindex="0" data-tier="10" aria-haspopup="dialog" aria-label="₹10 LPA+ Tier: 18 Students Placed. Click to explore offers and recruiters">
        <div class="ps-stat-card-glow" aria-hidden="true"></div>
        <div class="ps-stat-icon-circle">
          ${icon('ps-users')}
        </div>
        <div class="ps-stat-pill">₹10 LPA+</div>
        <strong class="ps-stat-count">${counter(18)}</strong>
        <span class="ps-stat-label">STUDENTS PLACED</span>
        <span class="ps-stat-action">
          <span>Explore Tier</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
        </span>
      </article>

      <!-- Card 02 -->
      <article class="ps-stat-card" role="button" tabindex="0" data-tier="8" aria-haspopup="dialog" aria-label="₹8 LPA+ Tier: 42 Students Placed. Click to explore offers and recruiters">
        <div class="ps-stat-card-glow" aria-hidden="true"></div>
        <div class="ps-stat-icon-circle">
          ${icon('ps-chart')}
        </div>
        <div class="ps-stat-pill">₹8 LPA+</div>
        <strong class="ps-stat-count">${counter(42)}</strong>
        <span class="ps-stat-label">STUDENTS PLACED</span>
        <span class="ps-stat-action">
          <span>Explore Tier</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
        </span>
      </article>

      <!-- Card 03 -->
      <article class="ps-stat-card" role="button" tabindex="0" data-tier="6" aria-haspopup="dialog" aria-label="₹6 LPA+ Tier: 76 Students Placed. Click to explore offers and recruiters">
        <div class="ps-stat-card-glow" aria-hidden="true"></div>
        <div class="ps-stat-icon-circle">
          ${icon('ps-diploma')}
        </div>
        <div class="ps-stat-pill">₹6 LPA+</div>
        <strong class="ps-stat-count">${counter(76)}</strong>
        <span class="ps-stat-label">STUDENTS PLACED</span>
        <span class="ps-stat-action">
          <span>Explore Tier</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
        </span>
      </article>

      <!-- Card 04 -->
      <article class="ps-stat-card" role="button" tabindex="0" data-tier="4" aria-haspopup="dialog" aria-label="₹4 LPA+ Tier: 128 Students Placed. Click to explore offers and recruiters">
        <div class="ps-stat-card-glow" aria-hidden="true"></div>
        <div class="ps-stat-icon-circle">
          ${icon('ps-briefcase')}
        </div>
        <div class="ps-stat-pill">₹4 LPA+</div>
        <strong class="ps-stat-count">${counter(128)}</strong>
        <span class="ps-stat-label">STUDENTS PLACED</span>
        <span class="ps-stat-action">
          <span>Explore Tier</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
        </span>
      </article>
    </div>

    <!-- Centered Text Below Cards -->
    <div class="placement-cards-footer-text">
      <span>SAME PEOPLE</span>
      <span class="footer-sep" aria-hidden="true">|</span>
      <span>BRIGHTER OPPORTUNITIES</span>
      <span class="footer-sep" aria-hidden="true">|</span>
      <span>A STRONGER TOMORROW</span>
    </div>
  `;
}

export function HeroSection() {
  return `<section class="placement-stage placement-stage-v2">
    <div class="placement-v2-hero">
      <div class="placement-v2-backdrop" aria-hidden="true">
        <div class="placement-v2-building-photo"></div>
        <div class="placement-v2-photo-overlay"></div>
        <svg class="placement-hero-wave-svg" viewBox="0 0 1000 800" preserveAspectRatio="none" fill="none" aria-hidden="true">
          <path d="M0 0H740C790 140 690 260 670 360C640 460 760 520 840 590C920 660 920 740 820 800H0V0Z" fill="url(#heroYellowWaveGrad)"/>
          <defs>
            <linearGradient id="heroYellowWaveGrad" x1="0" y1="0" x2="800" y2="800" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#ffcd29"/>
              <stop offset="55%" stop-color="#fbbd18"/>
              <stop offset="100%" stop-color="#f5a60e"/>
            </linearGradient>
          </defs>
        </svg>
        <div class="placement-hero-top-mint-arc"></div>
      </div>
      <div class="placement-v2-container">
        <div class="placement-v2-copy reveal">
          <div class="placement-v2-kicker">PLACEMENT EXCELLENCE</div>
          <div class="placement-v2-pill">CLASS OF 2027</div>
          <h1 class="placement-v2-title">
            <span>POWERING</span>
            <span>THE YOUTH</span>
            <span class="title-second-part">EMPOWERING</span>
            <span class="title-second-part">THE NATION</span>
          </h1>
          <p class="placement-v2-desc">Industry-aligned training, hands-on learning and a <br> vibrant placement ecosystem that transforms engineering potential into meaningful careers.</p>
          <div class="placement-v2-actions-area">
            <div class="placement-v2-actions">
              <button type="button" class="placement-v2-btn primary js-explore-placements">Explore Placements ${icon('arrow')}</button>
              <button type="button" class="placement-v2-btn secondary js-video">${icon('play')} Watch Placement Journey</button>
            </div>
          </div>
        </div>
        <div class="placement-right-section reveal" id="placement-highlights">
          ${placementHighlightsCardInner()}
        </div>
      </div>
      <div class="placement-hero-bottom-strip reveal">
        <div class="placement-bottom-features">
          <div class="bottom-feature-item">
            <span class="feature-icon">${icon('ps-building')}</span>
            <span>Industry Ready Workforce</span>
          </div>
          <span class="feature-bar-divider" aria-hidden="true"></span>
          <div class="bottom-feature-item">
            <span class="feature-icon">${icon('star')}</span>
            <span>Strong Corporate Connect</span>
          </div>
          <span class="feature-bar-divider" aria-hidden="true"></span>
          <div class="bottom-feature-item">
            <span class="feature-icon">${icon('chart')}</span>
            <span>Consistent Placement Growth</span>
          </div>
        </div>
        <div class="placement-bottom-script" aria-hidden="true">
          <span>Empower</span>
          <span>Change</span>
          <span>Lead</span>
        </div>
      </div>
    </div>
  </section>`;
}
