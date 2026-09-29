import { icon } from '../../utils/icons.js';
import { counter } from '../../utils/domUtils.js';
import './EventsSection.css';

export function EventsSection() {
  return `<section class="news-events-section" id="news-events">
    <div class="events-arc-circle arc-1" aria-hidden="true"></div>

    <div class="events-container">
      <div class="events-hero-row">
        <div class="events-left-col reveal">
          <div class="events-eyebrow">
            <span class="eyebrow-num">05</span>
            <span class="eyebrow-dash">—</span>
            <span class="eyebrow-text">NEWS &amp; EVENTS</span>
          </div>
          <h2 class="events-heading">
            What's<br>
            Happening<br>
            <em>at Sri Shakthi.</em>
          </h2>
          <p class="events-desc">
            Stay updated with the latest events, achievements and opportunities across our campus community.
          </p>

          <a href="#/campus-life" class="events-btn-primary">View All Events →</a>

          <div class="events-community-pill">
            <div class="community-avatars">
              <img src="/brand/campus-life/student-life.png" alt="Student" class="avatar-circle">
              <img src="/brand/campus-life/placements.png" alt="Student" class="avatar-circle">
              <img src="/brand/campus-life/learning-growth.png" alt="Student" class="avatar-circle">
              <span class="avatar-plus">+</span>
            </div>
            <div class="community-text">
              <strong>A vibrant campus.</strong>
              <span>A happening community.</span>
            </div>
          </div>
        </div>

        <div class="events-featured-card reveal">
          <div class="featured-bg-photo" style="background-image: url('/brand/events/featured-technovate.jpg');"></div>
          <div class="featured-overlay-content">
            <div class="featured-left-info">
              <span class="featured-gold-badge">★ Featured Event</span>
              <h3 class="featured-title">TechNovate 2026</h3>
              <span class="featured-sub-tag">TECHNICAL SYMPOSIUM</span>
              <p class="featured-summary">
                A platform to ideate, innovate and build solutions for a better tomorrow. Join us for a day of learning, networking and inspiration.
              </p>

              <div class="featured-meta-list">
                <div class="featured-meta-row">
                  <span class="meta-icon">${icon('calendar')}</span>
                  <span>28 Aug 2026</span>
                </div>
                <div class="featured-meta-row">
                  <span class="meta-icon">${icon('pin')}</span>
                  <span>Main Auditorium</span>
                </div>
                <div class="featured-meta-row">
                  <span class="meta-icon">${icon('clock')}</span>
                  <span>09:00 AM - 05:00 PM</span>
                </div>
              </div>

              <a href="#/campus-life" class="featured-know-more-btn">Know More →</a>
            </div>

            <div class="featured-nav-controls" aria-hidden="true">
              <button type="button" class="featured-arrow-btn prev-feat" aria-label="Previous featured event">${icon('prev')}</button>
              <span class="featured-counter">01 / 03</span>
              <button type="button" class="featured-arrow-btn next-feat" aria-label="Next featured event">${icon('next')}</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Category Filter Tabs -->
      <div class="events-filter-bar reveal" role="tablist" aria-label="Event categories">
        <button class="event-filter-pill active" type="button" data-cat="all">${icon('grid')} All</button>
        <button class="event-filter-pill" type="button" data-cat="technical">${icon('gear')} Technical</button>
        <button class="event-filter-pill" type="button" data-cat="cultural">${icon('music')} Cultural</button>
        <button class="event-filter-pill" type="button" data-cat="workshops">${icon('users')} Workshops</button>
        <button class="event-filter-pill" type="button" data-cat="sports">${icon('cup')} Sports</button>
        <button class="event-filter-pill" type="button" data-cat="others">••• Others</button>
      </div>

      <!-- 3-Card Event Grid -->
      <div class="events-cards-grid">
        <article class="event-item-card reveal" role="button" tabindex="0" data-cat="cultural others">
          <div class="event-card-media">
            <div class="event-date-badge">
              <strong class="date-num">15</strong>
              <span class="date-month">SEP</span>
            </div>
            <img src="/brand/events/event-sangamam.jpg" alt="Sangamam 2026 Cultural Event" loading="lazy">
          </div>
          <div class="event-card-body">
            <span class="event-cat-tag tag-orange">CULTURAL EVENT</span>
            <h4 class="event-card-title">Sangamam 2026</h4>
            <p class="event-card-desc">Celebrating talent, tradition and togetherness.</p>
            <div class="event-card-footer">
              <div class="event-meta-info">
                <div class="meta-item"><span class="meta-ico">${icon('pin')}</span><span>Open Air Theatre</span></div>
                <div class="meta-item"><span class="meta-ico">${icon('clock')}</span><span>04:00 PM - 10:00 PM</span></div>
              </div>
              <span class="event-circle-arrow">→</span>
            </div>
          </div>
        </article>

        <article class="event-item-card reveal" role="button" tabindex="0" data-cat="technical workshops">
          <div class="event-card-media">
            <div class="event-date-badge">
              <strong class="date-num">22</strong>
              <span class="date-month">SEP</span>
            </div>
            <img src="/brand/events/event-industry-connect.jpg" alt="Industry Connect & Career Day" loading="lazy">
          </div>
          <div class="event-card-body">
            <span class="event-cat-tag tag-gold">CAREER EVENT</span>
            <h4 class="event-card-title">Industry Connect &amp; Career Day</h4>
            <p class="event-card-desc">Meet industry leaders, explore opportunities and shape your future.</p>
            <div class="event-card-footer">
              <div class="event-meta-info">
                <div class="meta-item"><span class="meta-ico">${icon('pin')}</span><span>Convention Centre</span></div>
                <div class="meta-item"><span class="meta-ico">${icon('clock')}</span><span>10:00 AM - 04:00 PM</span></div>
              </div>
              <span class="event-circle-arrow">→</span>
            </div>
          </div>
        </article>

        <article class="event-item-card reveal" role="button" tabindex="0" data-cat="sports others">
          <div class="event-card-media">
            <div class="event-date-badge">
              <strong class="date-num">03</strong>
              <span class="date-month">OCT</span>
            </div>
            <img src="/brand/events/event-sports-meet.jpg" alt="Inter-Department Sports Meet" loading="lazy">
          </div>
          <div class="event-card-body">
            <span class="event-cat-tag tag-orange">SPORTS EVENT</span>
            <h4 class="event-card-title">Inter-Department Sports Meet</h4>
            <p class="event-card-desc">Play. Compete. Build stronger bonds.</p>
            <div class="event-card-footer">
              <div class="event-meta-info">
                <div class="meta-item"><span class="meta-ico">${icon('pin')}</span><span>Sports Complex</span></div>
                <div class="meta-item"><span class="meta-ico">${icon('clock')}</span><span>08:00 AM - 06:00 PM</span></div>
              </div>
              <span class="event-circle-arrow">→</span>
            </div>
          </div>
        </article>
      </div>

      <!-- Bottom Floating Stats Row & CTA Banner -->
      <div class="events-bottom-row reveal">
        <div class="events-stats-pill">
          <div class="ev-stat-item">
            <span class="ev-stat-icon badge-cal">${icon('calendar')}</span>
            <div class="ev-stat-text">
              <strong>${counter(50, '+')}</strong>
              <small>Events Every Year</small>
            </div>
          </div>
          <span class="stats-item-divider" aria-hidden="true"></span>
          <div class="ev-stat-item">
            <span class="ev-stat-icon badge-users">${icon('users')}</span>
            <div class="ev-stat-text">
              <strong>${counter(8, 'K+')}</strong>
              <small>Student Participation</small>
            </div>
          </div>
          <span class="stats-item-divider" aria-hidden="true"></span>
          <div class="ev-stat-item">
            <span class="ev-stat-icon badge-cup">${icon('cup')}</span>
            <div class="ev-stat-text">
              <strong>${counter(25, '+')}</strong>
              <small>Clubs &amp; Communities</small>
            </div>
          </div>
          <span class="stats-item-divider" aria-hidden="true"></span>
          <div class="ev-stat-item">
            <span class="ev-stat-icon badge-star">${icon('star')}</span>
            <div class="ev-stat-text">
              <strong>${counter(100, '+')}</strong>
              <small>Achievements &amp; Recognitions</small>
            </div>
          </div>
        </div>

        <a href="#/campus-life" class="events-cta-banner" aria-label="Be part of what's next">
          <div class="events-banner-copy">
            <strong>Be Part</strong>
            <span>of What's Next.</span>
          </div>
          <span class="events-banner-arrow" aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  </section>`;
}
