import { icon } from '../../utils/icons.js';
import { counter } from '../../utils/domUtils.js';
import './AboutSection.css';

export function AboutSection() {
  return `<section class="about-premium">
    <div class="about-glow glow-one" aria-hidden="true"></div>
    <div class="about-glow glow-two" aria-hidden="true"></div>
    <div class="about-container">
      <div class="about-label reveal">
        <span>01</span>
        <span class="line" aria-hidden="true"></span>
        <p>WHO WE ARE</p>
      </div>
      <div class="about-main">
        <div class="about-heading reveal">
          <h2>A campus where <span class="highlight-word">curiosity</span> becomes <span>capability.</span></h2>
        </div>
        <div class="about-content reveal">
          <span class="about-small-title">OUR PURPOSE</span>
          <p>Sri Shakthi Institute of Engineering and Technology is an autonomous institution in Coimbatore, approved by AICTE and affiliated to Anna University.</p>
          <p>Our industry-driven ecosystem brings engineering out of textbooks and into the real world.</p>
          <button type="button" class="discover-link js-discover-btn">
            <span>Discover our vision</span>
            <span class="arrow-circle">${icon('arrow')}</span>
          </button>
        </div>
      </div>
      <div class="stats-grid">
        ${[
          [4263, 'Job offers', 'Last 5 Years', 'chart'],
          [657, 'Offers in 2026', 'Growing Every Year', 'trend'],
          [10273, 'Alumni Worldwide', 'Connected Globally', 'connect'],
          [5984, 'Students on Campus', 'Learning & Innovating', 'grad']
        ]
          .map(
            ([n, t, s, ic], i) => `
          <article class="stat-box reveal">
            <span class="stat-index">0${i + 1}</span>
            <span class="stat-icon" aria-hidden="true">${icon(ic)}</span>
            <h3>${counter(n, '+')}</h3>
            <p>${t}</p>
            <span class="stat-subtitle">${s}</span>
            <span class="stat-bottom-line" aria-hidden="true"></span>
          </article>
        `
          )
          .join('')}
      </div>
    </div>
    <div class="bottom-gold-line" aria-hidden="true"></div>
  </section>`;
}
