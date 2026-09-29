import { icon } from '../../utils/icons.js';
import './CampusLifeSection.css';

export function CampusLifeSection() {
  return `<section class="campus-section">
    <div class="campus-container">
      <aside class="campus-left reveal">
        <div class="campus-eyebrow">
          <span class="eyebrow-num">03</span>
          <span class="eyebrow-dash">—</span>
          <span class="eyebrow-text">LIFE AT SRI SHAKTHI</span>
        </div>
        <h1 class="campus-heading">Campus<br>Moments.<br><em>Student stories.</em></h1>
        <p class="campus-desc">Explore learning, innovation, celebrations and everyday campus experiences from the Sri Shakthi community.</p>
        
        <div class="campus-actions">
          <button type="button" class="campus-btn-primary js-explore-campus">Explore campus ${icon('arrow')}</button>
          <button type="button" class="campus-video-btn js-video">
            <span class="video-circle-icon">${icon('play')}</span>
            <span class="video-label-text">Watch<br>our story</span>
          </button>
        </div>

        <div class="campus-bottom-sketch-wrap" aria-hidden="true">
          <div class="campus-sketch-graphic"></div>
          <div class="campus-people-footer">PEOPLE <i>|</i> IDEAS <i>|</i> IMPACT <span class="footer-gold-bar"></span></div>
        </div>
      </aside>

      <main class="campus-content">
        <div class="campus-gallery-v2">
          <!-- Card 01: Student Life -->
          <article class="campus-card-v2 card-01 reveal" role="button" tabindex="0">
            <span class="card-index">01</span>
            <span class="card-floating-badge badge-green">${icon('grad')}</span>
            <img src="/brand/campus-life/student-life.png" alt="Student Life at Sri Shakthi" loading="lazy">
            <div class="card-bottom-overlay">
              <div class="card-info-side">
                <div class="card-title-row">
                  <i class="cat-accent-bar bar-mint"></i>
                  <h4 class="card-title">Student Life</h4>
                </div>
                <p class="card-subtitle">A campus that inspires every day.</p>
              </div>
              <span class="card-circle-arrow">→</span>
            </div>
          </article>

          <!-- Card 02: Sports & Recreation -->
          <article class="campus-card-v2 card-02 reveal" role="button" tabindex="0">
            <span class="card-index">02</span>
            <span class="card-floating-badge badge-sand">${icon('runner')}</span>
            <img src="/brand/campus-life/sports.png" alt="Sports & Recreation" loading="lazy">
            <div class="card-bottom-overlay">
              <div class="card-info-side">
                <div class="card-title-row">
                  <i class="cat-accent-bar bar-gold"></i>
                  <h4 class="card-title">Sports & Recreation</h4>
                </div>
                <p class="card-subtitle">Victory is a habit here.</p>
              </div>
              <span class="card-circle-arrow">→</span>
            </div>
          </article>

          <!-- Card 03: Innovation -->
          <article class="campus-card-v2 card-03 reveal" role="button" tabindex="0">
            <span class="card-index">03</span>
            <span class="card-floating-badge badge-yellow">${icon('bulb')}</span>
            <img src="/brand/campus-life/innovation.png" alt="Innovation & Labs" loading="lazy">
            <div class="card-bottom-overlay">
              <div class="card-info-side">
                <div class="card-title-row">
                  <i class="cat-accent-bar bar-amber"></i>
                  <h4 class="card-title">Innovation</h4>
                </div>
                <p class="card-subtitle">Ideas that create impact.</p>
              </div>
              <span class="card-circle-arrow">→</span>
            </div>
          </article>

          <!-- Card 04: Culture & Arts -->
          <article class="campus-card-v2 card-04 reveal" role="button" tabindex="0">
            <span class="card-index">04</span>
            <span class="card-floating-badge badge-sand">${icon('masks')}</span>
            <img src="/brand/campus-life/cultural.png" alt="Culture & Arts" loading="lazy">
            <div class="card-bottom-overlay">
              <div class="card-info-side">
                <div class="card-title-row">
                  <i class="cat-accent-bar bar-orange"></i>
                  <h4 class="card-title">Culture & Arts</h4>
                </div>
                <p class="card-subtitle">Tradition. Creativity. Every performance.</p>
              </div>
              <span class="card-circle-arrow">→</span>
            </div>
          </article>

          <!-- Card 05: Learning & Growth -->
          <article class="campus-card-v2 card-05 reveal" role="button" tabindex="0">
            <span class="card-index">05</span>
            <span class="card-floating-badge badge-mint">${icon('users')}</span>
            <img src="/brand/campus-life/learning-growth.png" alt="Learning & Growth" loading="lazy">
            <div class="card-bottom-overlay">
              <div class="card-info-side">
                <div class="card-title-row">
                  <i class="cat-accent-bar bar-mint"></i>
                  <h4 class="card-title">Learning & Growth</h4>
                </div>
                <p class="card-subtitle">Today's learners. Tomorrow's leaders.</p>
              </div>
              <span class="card-circle-arrow">→</span>
            </div>
          </article>

          <!-- Card 06: Our Campus -->
          <article class="campus-card-v2 card-06 reveal" role="button" tabindex="0">
            <span class="card-index">06</span>
            <span class="card-floating-badge badge-leaf">${icon('leaf')}</span>
            <img src="/brand/techpark-local.png" alt="Sri Shakthi Tech Park & Campus" loading="lazy">
            <div class="card-bottom-overlay">
              <div class="card-info-side">
                <div class="card-title-row">
                  <i class="cat-accent-bar bar-green"></i>
                  <h4 class="card-title">Our Campus</h4>
                </div>
                <p class="card-subtitle">A greener, brighter tomorrow.</p>
              </div>
              <span class="card-circle-arrow">→</span>
            </div>
          </article>
        </div>
      </main>
    </div>
  </section>`;
}
