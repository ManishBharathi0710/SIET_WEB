import { icon } from '../../utils/icons.js';
import { counter } from '../../utils/domUtils.js';
import './SpecialLabsSection.css';

export function SpecialLabsSection() {
  return `<section class="special-labs-section" id="special-labs">
    <div class="labs-container">
      <aside class="labs-left reveal">
        <div class="labs-eyebrow">
          <span class="eyebrow-num">04</span>
          <span class="eyebrow-dash">—</span>
          <span class="eyebrow-text">SPECIAL LABS</span>
        </div>
        <h2 class="labs-heading">
          Advanced<br>
          Labs for a<br>
          <em>Brighter<br>Tomorrow.</em>
        </h2>
        <p class="labs-desc">
          State-of-the-art laboratories to explore, experiment and innovate — empowering students with hands-on experience for real-world impact.
        </p>

        <div class="labs-actions">
          <a href="#/centres-of-excellence" class="labs-btn-primary">Explore Our Labs →</a>
        </div>

        <div class="labs-script-watermark" aria-hidden="true">
          <span>Learn &#10003;</span>
          <span>Experiment</span>
          <span>Innovate</span>
          <svg class="script-curve-line" width="96" height="12" viewBox="0 0 96 12" fill="none">
            <path d="M2 10C32 3 70 2 94 8" stroke="#d4a300" stroke-width="2.5" stroke-linecap="round"/>
          </svg>
        </div>

        <div class="labs-bottom-sketch-wrap" aria-hidden="true">
          <div class="campus-people-footer">PEOPLE <i>|</i> IDEAS <i>|</i> IMPACT <span class="footer-gold-bar"></span></div>
        </div>
      </aside>

      <main class="labs-content">
        <div class="labs-gallery-grid">
          <article class="lab-card card-01 reveal" role="button" tabindex="0" data-cat="emerging" aria-label="01 AI Lab - Explore intelligent solutions for tomorrow.">
            <img src="/brand/special-labs/lab-ai-hd.jpg" alt="01 AI Lab" loading="lazy" decoding="async">
          </article>
          <article class="lab-card card-02 reveal" role="button" tabindex="0" data-cat="emerging" aria-label="02 Cyber & Cloud Lab - Secure today. Scale tomorrow.">
            <img src="/brand/special-labs/lab-cyber-cloud-hd.jpg" alt="02 Cyber & Cloud Lab" loading="lazy" decoding="async">
          </article>
          <article class="lab-card card-03 reveal" role="button" tabindex="0" data-cat="core" aria-label="03 VLSI Lab - Designing the next generation chips.">
            <img src="/brand/special-labs/lab-vlsi-hd.jpg" alt="03 VLSI Lab" loading="lazy" decoding="async">
          </article>
          <article class="lab-card card-04 reveal" role="button" tabindex="0" data-cat="core" aria-label="04 Embedded Systems Lab - Build. Integrate. Innovate.">
            <img src="/brand/special-labs/lab-embedded-hd.jpg" alt="04 Embedded Systems Lab" loading="lazy" decoding="async">
          </article>
          <article class="lab-card card-05 reveal" role="button" tabindex="0" data-cat="emerging" aria-label="05 IoT Lab - Connect ideas to a smarter world.">
            <img src="/brand/special-labs/lab-iot-hd.jpg" alt="05 IoT Lab" loading="lazy" decoding="async">
          </article>
          <article class="lab-card card-06 reveal" role="button" tabindex="0" data-cat="design" aria-label="06 AR & VR Lab - Experience. Create. Go Beyond.">
            <img src="/brand/special-labs/lab-ar-vr-hd.jpg" alt="06 AR & VR Lab" loading="lazy" decoding="async">
          </article>
          <article class="lab-card card-07 reveal" role="button" tabindex="0" data-cat="core" aria-label="07 PCB Design & Assembly Lab - From design to real-world prototypes.">
            <img src="/brand/special-labs/lab-pcb-hd.jpg" alt="07 PCB Design & Assembly Lab" loading="lazy" decoding="async">
          </article>
          <article class="lab-card card-08 reveal" role="button" tabindex="0" data-cat="design" aria-label="08 Robotics & Automation Lab - Ideate. Build. Automate.">
            <img src="/brand/special-labs/lab-robotics-hd.jpg" alt="08 Robotics & Automation Lab" loading="lazy" decoding="async">
          </article>
        </div>

        <div class="labs-bottom-row reveal">
          <div class="labs-stats-pill">
            <div class="lab-stat-item">
              <span class="lab-stat-icon badge-flask">${icon('flask')}</span>
              <div class="lab-stat-text">
                <strong>8</strong>
                <small>Specialized Labs</small>
              </div>
            </div>
            <span class="stats-item-divider" aria-hidden="true"></span>
            <div class="lab-stat-item">
              <span class="lab-stat-icon badge-users">${icon('users')}</span>
              <div class="lab-stat-text">
                <strong>${counter(500, '+')}</strong>
                <small>Students Trained</small>
              </div>
            </div>
            <span class="stats-item-divider" aria-hidden="true"></span>
            <div class="lab-stat-item">
              <span class="lab-stat-icon badge-bulb">${icon('bulb')}</span>
              <div class="lab-stat-text">
                <strong>${counter(100, '+')}</strong>
                <small>Projects & Innovations</small>
              </div>
            </div>
            <span class="stats-item-divider" aria-hidden="true"></span>
            <div class="lab-stat-item">
              <span class="lab-stat-icon badge-industry">${icon('industry')}</span>
              <div class="lab-stat-text">
                <strong>${counter(20, '+')}</strong>
                <small>Industry Collaborations</small>
              </div>
            </div>
          </div>

          <a href="#/centres-of-excellence" class="labs-cta-banner" aria-label="Explore labs and centres of excellence">
            <div class="labs-banner-copy">
              <strong>Labs Today.</strong>
              <span>Leaders Tomorrow.</span>
            </div>
            <span class="labs-banner-arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </main>
    </div>

    <div class="labs-section-footer" aria-hidden="true">
      <span>A STRONGER TOMORROW THROUGH INNOVATION</span>
      <span class="footer-gold-bar"></span>
    </div>
  </section>`;
}
