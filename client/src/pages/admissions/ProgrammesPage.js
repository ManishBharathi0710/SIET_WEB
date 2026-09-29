import { sietHudHeader } from '../../components/ui/PageHeader.js';
import { ugProgramsDetailed, pgProgramsDetailed } from '../../data/programmesData.js';
import './Admissions.css';

export function programSelectHtml(label, name) {
  return `
    <label>${label} <b>*</b>
      <select name="${name}" required>
        <option value="">Select ${label}</option>
        <optgroup label="Undergraduate (UG) Programmes">
          ${ugProgramsDetailed.map((p) => `<option value="${p.fullName}">${p.fullName}</option>`).join('')}
        </optgroup>
        <optgroup label="Postgraduate (PG) Programmes">
          ${pgProgramsDetailed.map((p) => `<option value="${p.fullName}">${p.fullName}</option>`).join('')}
        </optgroup>
      </select>
    </label>
  `;
}

export function ProgrammesPage() {
  return `<main class="siet-programmes-page">
    ${sietHudHeader(
      'UG & PG Programmes',
      'Programmes',
      'Admissions',
      '#/programmes',
      'SYSTEM ONLINE / ADMISSION PROFILE / SIET-OS'
    )}
    <section class="siet-prog-container">
      <div class="siet-prog-controls reveal">
        <div class="siet-prog-filter-tabs" role="tablist" aria-label="Programmes filter">
          <button type="button" class="siet-prog-filter-btn is-active" data-filter="all">All Programmes <span class="count-pill">20</span></button>
          <button type="button" class="siet-prog-filter-btn" data-filter="ug">Undergraduate (UG) <span class="count-pill">13</span></button>
          <button type="button" class="siet-prog-filter-btn" data-filter="pg">Postgraduate (PG) <span class="count-pill">7</span></button>
        </div>
        <div class="siet-prog-meta-badges">
          <span class="meta-pill"><i></i> Anna University Autonomous R2024</span>
          <span class="meta-pill"><i></i> AICTE Approved &amp; NBA Accredited</span>
        </div>
      </div>

      <!-- UG CATEGORY SECTION -->
      <section id="ug-programmes-section" class="siet-prog-category-section reveal" data-category="ug">
        <div class="siet-prog-section-header">
          <div class="siet-prog-kicker">
            <span class="badge-accent">UG</span>
            <small>FOUR-YEAR BACHELOR'S DEGREE</small>
          </div>
          <h2>Undergraduate (UG) Programmes</h2>
          <p>Four-year professional degree programmes combining foundational sciences, industry-led specializations, experiential laboratory learning and multidisciplinary innovation.</p>
        </div>
        <div class="siet-prog-grid">
          ${ugProgramsDetailed
            .map(
              (p) => `
            <article class="siet-prog-card reveal">
              <div class="siet-prog-card-top">
                <span class="siet-degree-badge ${p.degree.toLowerCase().replace('.', '')}">${p.degree}</span>
                <span class="siet-duration-badge">4 Years &bull; Full Time</span>
              </div>
              <div class="siet-prog-card-body">
                <h3>${p.fullName}</h3>
                <p>${p.desc}</p>
                <div class="siet-prog-tags">
                  <span>Autonomous R2024</span>
                  <span>Industry CoEs</span>
                  <span>Placement Focus</span>
                </div>
              </div>
              <div class="siet-prog-card-footer">
                <a href="#/department/${p.deptSlug}" class="siet-prog-link">Explore Department <span>&rarr;</span></a>
                <a href="#/apply" class="siet-prog-btn-apply">Apply Now</a>
              </div>
            </article>
          `
            )
            .join('')}
        </div>
      </section>

      <!-- PG CATEGORY SECTION -->
      <section id="pg-programmes-section" class="siet-prog-category-section reveal" data-category="pg">
        <div class="siet-prog-section-header">
          <div class="siet-prog-kicker">
            <span class="badge-accent pg">PG</span>
            <small>TWO-YEAR ADVANCED MASTER'S DEGREE</small>
          </div>
          <h2>Postgraduate (PG) Programmes</h2>
          <p>Two-year advanced master's programmes focused on cutting-edge research, advanced modeling, specialized industrial problem solving, publication and leadership.</p>
        </div>
        <div class="siet-prog-grid">
          ${pgProgramsDetailed
            .map(
              (p) => `
            <article class="siet-prog-card pg-card reveal">
              <div class="siet-prog-card-top">
                <span class="siet-degree-badge pg ${p.degree.toLowerCase().replace('.', '')}">${p.degree}</span>
                <span class="siet-duration-badge">2 Years &bull; Full Time</span>
              </div>
              <div class="siet-prog-card-body">
                <h3>${p.fullName}</h3>
                <p>${p.desc}</p>
                <div class="siet-prog-tags">
                  <span>Autonomous R2024</span>
                  <span>R&amp;D Publication</span>
                  <span>Specialized Labs</span>
                </div>
              </div>
              <div class="siet-prog-card-footer">
                <a href="#/department/${p.deptSlug}" class="siet-prog-link">Explore Department <span>&rarr;</span></a>
                <a href="#/apply" class="siet-prog-btn-apply">Apply Now</a>
              </div>
            </article>
          `
            )
            .join('')}
        </div>
      </section>

      <!-- ADMISSIONS CTA BANNER -->
      <section class="siet-prog-cta-banner reveal">
        <div>
          <small>ADMISSIONS 2026–27</small>
          <h2>Begin your engineering journey at Sri Shakthi</h2>
          <p>Applications are open for undergraduate (TNEA Counselling Code: 2727) and postgraduate engineering admissions.</p>
        </div>
        <div class="siet-prog-cta-actions">
          <a href="#/apply" class="button">Apply Online &rarr;</a>
          <a href="#/admission-enquiry" class="button secondary">Admission Enquiry</a>
        </div>
      </section>
    </section>
  </main>`;
}
