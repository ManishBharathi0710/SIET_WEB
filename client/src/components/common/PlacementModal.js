import { icon } from '../../utils/icons.js';
import { placementTierData } from '../../data/placementsData.js';
import './PlacementModal.css';

export function placementDetailsModal(tierKey = '10') {
  const current = placementTierData[tierKey] || placementTierData['10'];
  return `
    <div class="placement-modal" role="dialog" aria-modal="true" aria-label="Placement Tier Details">
      <div class="placement-modal-backdrop"></div>
      <div class="placement-modal-window">
        <button class="placement-modal-close" aria-label="Close placement details modal">×</button>
        
        <div class="pm-header">
          <div class="pm-eyebrow">
            <span class="pm-dot" aria-hidden="true"></span>
            PLACEMENT RECORD · BATCH OF 2025–2026
          </div>
          <h3 class="pm-title">
            <span class="pm-title-green">Placement</span> <span class="pm-title-gold">Breakdown</span>
          </h3>
          <p class="pm-subtitle">Select a package tier to explore placed students, key recruiters, and career tracks.</p>
        </div>

        <!-- Interactive Tier Switcher Tabs -->
        <div class="pm-tier-tabs" role="tablist" aria-label="Placement Salary Tiers">
          ${Object.keys(placementTierData)
            .map((k) => {
              const t = placementTierData[k];
              const isActive = k === tierKey ? 'active' : '';
              return `
              <button class="pm-tab-btn ${isActive}" type="button" role="tab" data-tier="${k}" aria-selected="${
                k === tierKey ? 'true' : 'false'
              }">
                <span class="pm-tab-pill">${t.tier}</span>
                <span class="pm-tab-count"><b>${t.count}</b> Placed</span>
              </button>
            `;
            })
            .join('')}
        </div>

        <!-- Tier Detail Body -->
        <div class="pm-body">
          <div class="pm-hero-card">
            <div class="pm-hero-left">
              <div class="pm-badge">${current.badge}</div>
              <h4 class="pm-tier-name">${current.name}</h4>
              <div class="pm-highlight-row">
                <span class="pm-highlight-icon">${icon('star')}</span>
                <span class="pm-highlight-text">${current.highlight}</span>
              </div>
              <p class="pm-desc">${current.desc}</p>
            </div>
            <div class="pm-hero-stat">
              <span class="pm-stat-num">${current.count}</span>
              <span class="pm-stat-lbl">STUDENTS PLACED</span>
              <span class="pm-stat-badge">${current.statBox.label}: <b>${current.statBox.value}</b></span>
            </div>
          </div>

          <div class="pm-details-grid">
            <div class="pm-col">
              <h5><span class="pm-col-icon">${icon('ps-building')}</span> Key Recruiting Companies</h5>
              <div class="pm-company-tags">
                ${current.companies
                  .map(
                    (c) => `
                  <span class="pm-company-tag">
                    <span class="pm-tag-check" aria-hidden="true">✓</span>
                    <span>${c}</span>
                  </span>
                `
                  )
                  .join('')}
              </div>
            </div>

            <div class="pm-col">
              <h5><span class="pm-col-icon">${icon('ps-briefcase')}</span> Roles & Engineering Profiles</h5>
              <div class="pm-roles-list">
                ${current.roles
                  .map(
                    (r) => `
                  <div class="pm-role-item">
                    <span class="pm-role-bullet" aria-hidden="true">›</span>
                    <span>${r}</span>
                  </div>
                `
                  )
                  .join('')}
              </div>
            </div>
          </div>
        </div>

        <div class="pm-footer">
          <div class="pm-footer-stats">
            <span>Batch Placement: <b>98.4%</b></span>
            <span class="pm-footer-sep" aria-hidden="true">|</span>
            <span>Highest Offer: <b>₹24 LPA</b></span>
            <span class="pm-footer-sep" aria-hidden="true">|</span>
            <span>Median Package: <b>₹6.8 LPA</b></span>
          </div>
          <div class="pm-footer-actions">
            <a href="#/admission-enquiry" class="pm-cta-btn primary">Enquire For Admissions ${icon('arrow')}</a>
            <button type="button" class="pm-cta-btn secondary js-close-pm">Close</button>
          </div>
        </div>
      </div>
    </div>
  `;
}
