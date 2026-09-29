import './About.css';

export const vmIcon = (name) =>
  ({
    eye: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"/><circle cx="12" cy="12" r="2.7"/></svg>',
    target:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.2"/><path d="m15.5 8.5 5-5M16 3.5h4.5V8"/></svg>',
    spark:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2 1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2Z"/><path d="m19 16 .8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z"/></svg>',
    compass:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m15.8 8.2-2.3 5.3-5.3 2.3 2.3-5.3 5.3-2.3Z"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6"/></svg>',
    education:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 9 9-5 9 5-9 5-9-5Z"/><path d="M7 12.2V16c2.5 2.5 7.5 2.5 10 0v-3.8M21 10v6"/></svg>'
  }[name] || '');

export function AboutHero() {
  return `<section class="siet-vm-hero">
    <div class="siet-vm-hero-grid"></div>
    <div class="siet-vm-hero-orb orb-one"></div>
    <div class="siet-vm-hero-orb orb-two"></div>
    <div class="siet-vm-shell siet-vm-hero-content reveal">
      <p class="siet-vm-kicker"><i></i> OUR INSTITUTIONAL PURPOSE</p>
      <h1>Vision <em>&amp;</em> Mission</h1>
      <p class="siet-vm-intro">Shaping capable engineers through an enduring commitment to education, innovation, research and excellence.</p>
    </div>
  </section>`;
}

export function AboutSidebar(active = 'vision-mission') {
  const links = [
    ['vision-mission', 'Vision and Mission', 'eye'],
    ['core-beliefs', 'Core Beliefs', 'compass'],
    ['program-outcomes', 'Program Outcomes of the Institution', 'target'],
    ['core-values', 'Core Values of the Institution', 'spark'],
    ['philosophy', 'Philosophy', 'education']
  ];
  return `<aside class="siet-vm-sidebar reveal">
    <div class="siet-vm-sidebar-head">
      <span>VISION &amp; MISSION</span>
      <h2>Explore our<br>foundation.</h2>
    </div>
    <nav aria-label="Vision and Mission navigation">
      ${links
        .map(
          ([slug, label, iconName]) =>
            `<a class="${slug === active ? 'is-active' : ''}" href="#/${slug}" ${
              slug === active ? 'aria-current="page"' : `aria-label="Visit ${label}"`
            }><span class="siet-vm-nav-icon">${vmIcon(iconName)}</span><b>${label}</b><span class="siet-vm-nav-arrow">${vmIcon(
              'arrow'
            )}</span></a>`
        )
        .join('')}
    </nav>
    <div class="siet-vm-sidebar-note">
      <span>EST. 2006</span>
      <p>Learning with purpose. Leading with impact.</p>
    </div>
  </aside>`;
}

export function VisionCard() {
  return `<article class="siet-vm-card siet-vm-card-vision reveal">
    <div class="siet-vm-card-pattern"></div>
    <div class="siet-vm-card-top">
      <span class="siet-vm-card-icon">${vmIcon('eye')}</span>
      <span class="siet-vm-card-number">01 / VISION</span>
    </div>
    <div class="siet-vm-card-copy">
      <p class="siet-vm-card-label">OUR VISION</p>
      <h2>Engineering a future without limits.</h2>
      <p>To make the institution one of our nation's great engineering schools, recognized nationally and internationally for excellence in teaching, research and public service. We seek to be the preferred destination for students, practitioners seeking an engineering education, employers hiring engineering graduates and organizations seeking engineering knowledge.</p>
    </div>
    <div class="siet-vm-card-footer">
      <span>Nationally rooted. Globally respected.</span>
      <i></i>
    </div>
  </article>`;
}

export function MissionCard() {
  return `<article class="siet-vm-card siet-vm-card-mission reveal">
    <div class="siet-vm-mission-lines"></div>
    <div class="siet-vm-card-top">
      <span class="siet-vm-card-icon">${vmIcon('education')}</span>
      <span class="siet-vm-card-number">02 / MISSION</span>
    </div>
    <div class="siet-vm-card-copy">
      <p class="siet-vm-card-label">OUR MISSION</p>
      <h2>Inspiring minds to solve what matters.</h2>
      <p>To provide an encouraging environment to develop the intellectual capacity, critical thinking, creativity and problem solving ability of the students.</p>
    </div>
    <div class="siet-vm-card-footer">
      <span>Curiosity into capability.</span>
      <i></i>
    </div>
  </article>`;
}

export function VisionMissionPage() {
  return `<main class="siet-vm-page">
    ${AboutHero()}
    <section class="siet-vm-content">
      <div class="siet-vm-shell siet-vm-layout">
        ${AboutSidebar()}
        <div class="siet-vm-main">
          <div class="siet-vm-section-intro reveal">
            <p>WHAT GUIDES US</p>
            <h2>Purpose, made <em>practical.</em></h2>
            <span>Our vision sets the horizon. Our mission shapes the everyday learning experience that carries students towards it.</span>
          </div>
          <div class="siet-vm-card-grid">
            ${VisionCard()}
            ${MissionCard()}
          </div>
        </div>
      </div>
    </section>
  </main>`;
}
