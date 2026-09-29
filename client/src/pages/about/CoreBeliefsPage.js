import { icon } from '../../utils/icons.js';
import { AboutSidebar } from './VisionMissionPage.js';

export const coreBeliefs = [
  [
    '01',
    'GATEWAY',
    'Achieving 100% academic success pass for our students is only the <mark class="siet-cb-highlight">GATEWAY</mark> to success',
    'Academic excellence is the threshold. We empower every student with deep subject mastery and strong conceptual foundations.',
    'ACADEMIC FOUNDATION'
  ],
  [
    '02',
    'MILESTONE',
    'Breeding 100% employable and entrepreneurial engineers is the first <mark class="siet-cb-highlight">MILESTONE</mark>',
    'Bridging the gap between academia and industry through hands-on practice, multidisciplinary projects, and entrepreneurial mindsets.',
    'PROFESSIONAL READINESS'
  ],
  [
    '03',
    'DESTINATION',
    'Creating 100% confident citizens who will uphold the pride and cultural ethos of our great nation is our <mark class="siet-cb-highlight">DESTINATION</mark>',
    'Nurturing grounded character, cultural values, integrity, and a lifelong commitment to societal contribution.',
    'NATION BUILDING'
  ],
  [
    '04',
    'WILLPOWER',
    'Discipline is the bridge between goals and accomplishment as it provides all the necessary <mark class="siet-cb-highlight">WILLPOWER</mark>',
    'Cultivating focus, resilience, and personal responsibility as the fundamental driving forces behind lasting achievement.',
    'CHARACTER & DRIVE'
  ],
  [
    '05',
    'CHANGE THE WORLD',
    'Education is the most powerful weapon to <mark class="siet-cb-highlight">CHANGE THE WORLD</mark>',
    'Leveraging technology, innovation, and ethical engineering to create transformative, human-centric impact across the globe.',
    'GLOBAL IMPACT'
  ]
];

export function CoreBeliefsPage() {
  return `<main class="siet-vm-page siet-cb-page">
  <section class="siet-vm-hero siet-cb-hero">
    <div class="siet-vm-hero-grid"></div>
    <div class="siet-vm-hero-orb orb-one"></div>
    <div class="siet-vm-hero-orb orb-two"></div>
    <div class="siet-vm-shell siet-vm-hero-content reveal">
      <div class="siet-cb-breadcrumbs"><a href="#/">Home</a><span>/</span><b>Core Beliefs</b></div>
      <p class="siet-vm-kicker"><i></i> INSTITUTIONAL PHILOSOPHY</p>
      <h1>Core <em>Beliefs</em></h1>
      <p class="siet-vm-intro">The foundational convictions that guide our culture, inspire student excellence, and power our enduring commitment to the nation.</p>
    </div>
  </section>
  <section class="siet-vm-content">
    <div class="siet-vm-shell siet-vm-layout">
      ${AboutSidebar('core-beliefs')}
      <div class="siet-vm-main">
        <div class="siet-vm-section-intro reveal">
          <p>WHAT WE BELIEVE</p>
          <h2>CORE <em>BELIEFS</em></h2>
          <span>Our educational philosophy is anchored in five essential convictions — from gateway academic success to world-changing leadership.</span>
        </div>
        <div class="siet-cb-list">
          ${coreBeliefs
            .map(
              ([num, tag, text, desc, kicker], index) => `
            <article class="siet-cb-card reveal" style="transition-delay:${index * 0.08}s">
              <span class="siet-cb-accent-bar"></span>
              <div class="siet-cb-indicator">
                <div class="siet-cb-circle" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></svg>
                </div>
                <span class="siet-cb-num">${num}</span>
              </div>
              <div class="siet-cb-body">
                <div class="siet-cb-meta">
                  <span class="siet-cb-kicker">${kicker}</span>
                  <span class="siet-cb-tag">${tag}</span>
                </div>
                <p class="siet-cb-text">${text}</p>
                <p class="siet-cb-desc">${desc}</p>
              </div>
            </article>
          `
            )
            .join('')}
        </div>
        <div class="siet-cb-closing reveal">
          <div class="siet-cb-closing-text">
            <h3>Powering the Youth, Empowering the Nation</h3>
            <p>At Sri Shakthi, these beliefs are practiced every day across our classrooms, research laboratories, innovation centres, and community initiatives.</p>
          </div>
          <a class="siet-cb-closing-cta" href="#/admission-enquiry">Explore Admissions ${icon('arrow')}</a>
        </div>
      </div>
    </div>
  </section>
 </main>`;
}
