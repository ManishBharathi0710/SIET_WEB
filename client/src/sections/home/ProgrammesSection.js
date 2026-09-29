import { deptIcon } from '../../utils/deptIcons.js';
import { ugPrograms, bottomBannerHtml } from '../../data/programmesData.js';
import './ProgrammesSection.css';

export function programmeCards(list) {
  return list
    .map(
      ([n, d, ic]) => `
    <div class="programme-card-v2 reveal" role="button" tabindex="0" data-course="${n}">
      <div class="prog-icon-wrap">${deptIcon(ic)}</div>
      <div class="prog-info">
        <h4>${n}</h4>
        <p>${d}</p>
      </div>
      <span class="prog-arrow-circle">→</span>
    </div>
  `
    )
    .join('');
}

export function ProgrammesSection() {
  return `<section class="programmes-showcase programmes-section">
    <div class="watermark-script bottom-script" aria-hidden="true">Engineers for a Better Tomorrow</div>
    <div class="programmes-container">
      <div class="programmes-hero-v2">
        <div class="programmes-left-col reveal">
          <div class="section-kicker">
            <span>02</span>
            <i></i>
            <span>FIND YOUR FIELD</span>
          </div>
          <h2 class="programmes-main-title">
            Programmes<br>built for a <em>changing</em> world.
          </h2>
          <p class="programmes-subtitle">
            Foundational rigour, advanced technology labs, industry collaboration and project-led learning.
          </p>
          <div class="programme-toggle-pill">
            <button class="toggle-btn active" data-level="UG" type="button">UG Programmes</button>
            <button class="toggle-btn" data-level="PG" type="button">PG Programmes</button>
          </div>
          <div style="margin-top: 14px;">
            <a href="#/programmes" class="view-all-programmes-btn">View All UG &amp; PG Programmes &rarr;</a>
          </div>
        </div>
        <div class="programmes-feature-card reveal">
          <div class="feature-card-content">
            <span class="feature-icon-badge">${deptIcon('lightning')}</span>
            <h3 class="feature-card-title">Learn Today<br>Build Tomorrow</h3>
            <p class="feature-card-desc">
              Explore industry-relevant programmes designed to create future-ready engineers and innovators.
            </p>
            <button type="button" class="feature-action-btn js-scroll-programmes">
              <span class="feature-arrow-btn">→</span>
              <span>Discover Your Path</span>
            </button>
          </div>
          <div class="feature-card-visual">
            <div class="feature-arch-frame">
              <img src="/brand/techpark-local.png" alt="Sri Shakthi Tech Park" width="360" height="270" loading="lazy">
            </div>
            <div class="feature-stat-pill">
              <span class="stat-chart-icon">${deptIcon('chart')}</span>
              <div class="stat-pill-info">
                <strong id="prog-count-badge">14+</strong>
                <span id="prog-level-badge">UG Programmes</span>
                <small>Across Emerging Domains</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="programme-grid-container">
        <div id="programme-grid" class="programme-grid-v2">
          ${programmeCards(ugPrograms)}
          ${bottomBannerHtml}
        </div>
      </div>
    </div>
  </section>`;
}
