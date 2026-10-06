import {
  higherEducationStats,
  destinationsData,
  examCardsData,
  choosePathData
} from '../../data/higherEducationData.js';
import './HigherEducation.css';

// 6 Inline SVG Country Flags (Module 3.2 - 22x16px rounded)
function renderFlagSvg(flagKey) {
  switch (flagKey) {
    case 'us':
      return `
        <svg class="hea-flag-svg" width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="United States Flag">
          <rect width="22" height="16" rx="2.5" fill="#FFFFFF"/>
          <path d="M0 1.23h22v1.23H0zM0 3.69h22v1.23H0zM0 6.15h22v1.23H0zM0 8.61h22v1.23H0zM0 11.07h22v1.23H0zM0 13.53h22v1.23H0z" fill="#B22234"/>
          <rect width="9" height="8.6" rx="1.5" fill="#3C3B6E"/>
          <g fill="#FFFFFF">
            <circle cx="2" cy="2" r="0.6"/><circle cx="4.5" cy="2" r="0.6"/><circle cx="7" cy="2" r="0.6"/>
            <circle cx="3.25" cy="3.5" r="0.6"/><circle cx="5.75" cy="3.5" r="0.6"/>
            <circle cx="2" cy="5" r="0.6"/><circle cx="4.5" cy="5" r="0.6"/><circle cx="7" cy="5" r="0.6"/>
            <circle cx="3.25" cy="6.5" r="0.6"/><circle cx="5.75" cy="6.5" r="0.6"/>
          </g>
        </svg>
      `;
    case 'uk':
      return `
        <svg class="hea-flag-svg" width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="United Kingdom Flag">
          <rect width="22" height="16" rx="2.5" fill="#012169"/>
          <!-- Diagonal White Cross -->
          <path d="M0 0 L22 16 M22 0 L0 16" stroke="#FFFFFF" stroke-width="3.2" stroke-linecap="square"/>
          <!-- Diagonal Red Cross -->
          <path d="M0 0 L22 16 M22 0 L0 16" stroke="#C8102E" stroke-width="1.8" stroke-linecap="square"/>
          <!-- Straight White Cross -->
          <path d="M11 0 V16 M0 8 H22" stroke="#FFFFFF" stroke-width="5"/>
          <!-- Straight Red Cross -->
          <path d="M11 0 V16 M0 8 H22" stroke="#C8102E" stroke-width="3"/>
        </svg>
      `;
    case 'ca':
      return `
        <svg class="hea-flag-svg" width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Canada Flag">
          <rect width="22" height="16" rx="2.5" fill="#FFFFFF"/>
          <rect width="5.5" height="16" rx="2.5" fill="#D80027"/>
          <rect x="16.5" width="5.5" height="16" rx="2.5" fill="#D80027"/>
          <!-- Canadian Maple Leaf -->
          <path d="M11 3.2 L11.7 5.5 L13.5 5.2 L12.5 6.8 L14.2 8.2 L12.2 8.8 L12.6 11 L11.3 10.2 L11 12.8 L10.7 10.2 L9.4 11 L9.8 8.8 L7.8 8.2 L9.5 6.8 L8.5 5.2 L10.3 5.5 Z" fill="#D80027"/>
        </svg>
      `;
    case 'au':
      return `
        <svg class="hea-flag-svg" width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Australia Flag">
          <rect width="22" height="16" rx="2.5" fill="#00008B"/>
          <!-- Mini Canton Union Jack -->
          <g transform="scale(0.42)">
            <rect width="22" height="16" fill="#012169"/>
            <path d="M0 0 L22 16 M22 0 L0 16" stroke="#FFFFFF" stroke-width="3.2"/>
            <path d="M0 0 L22 16 M22 0 L0 16" stroke="#C8102E" stroke-width="1.8"/>
            <path d="M11 0 V16 M0 8 H22" stroke="#FFFFFF" stroke-width="5"/>
            <path d="M11 0 V16 M0 8 H22" stroke="#C8102E" stroke-width="3"/>
          </g>
          <!-- Commonwealth Star -->
          <circle cx="5" cy="11.5" r="1.5" fill="#FFFFFF"/>
          <!-- Southern Cross Constellation -->
          <circle cx="16.5" cy="3.5" r="0.7" fill="#FFFFFF"/>
          <circle cx="19" cy="6.2" r="0.7" fill="#FFFFFF"/>
          <circle cx="16.5" cy="12.5" r="0.7" fill="#FFFFFF"/>
          <circle cx="14" cy="7.5" r="0.7" fill="#FFFFFF"/>
          <circle cx="17.8" cy="9.2" r="0.5" fill="#FFFFFF"/>
        </svg>
      `;
    case 'de':
      return `
        <svg class="hea-flag-svg" width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Germany Flag">
          <rect width="22" height="16" rx="2.5" fill="#FFCE00"/>
          <rect width="22" height="10.6" rx="2.5" fill="#DD0000"/>
          <rect width="22" height="5.3" rx="2.5" fill="#000000"/>
        </svg>
      `;
    case 'sg':
      return `
        <svg class="hea-flag-svg" width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Singapore Flag">
          <rect width="22" height="16" rx="2.5" fill="#FFFFFF"/>
          <rect width="22" height="8" rx="2.5" fill="#ED2939"/>
          <!-- White Crescent & 5 Stars in canton -->
          <circle cx="4.5" cy="4" r="2.2" fill="#FFFFFF"/>
          <circle cx="5.2" cy="4" r="1.8" fill="#ED2939"/>
          <circle cx="6.5" cy="2.8" r="0.4" fill="#FFFFFF"/>
          <circle cx="7.4" cy="3.8" r="0.4" fill="#FFFFFF"/>
          <circle cx="7" cy="5" r="0.4" fill="#FFFFFF"/>
          <circle cx="5.8" cy="5" r="0.4" fill="#FFFFFF"/>
          <circle cx="5.6" cy="3.2" r="0.4" fill="#FFFFFF"/>
        </svg>
      `;
    default:
      return `<span class="hea-flag-fallback">🌐</span>`;
  }
}

// Custom SVGs and Icons
function heaIcon(name) {
  switch (name) {
    case 'globe':
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`;
    case 'grad':
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>`;
    case 'book':
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`;
    case 'infinity':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M18.178 8c5.096 0 5.096 8 0 8-2.67 0-4.807-2.667-6.178-5-1.37-2.333-3.508-5-6.178-5-5.096 0-5.096 8 0 8 2.67 0 4.808-2.667 6.178-5 1.37-2.333 3.508-5 6.178-5z"></path></svg>`;
    case 'search':
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`;
    case 'plane':
    case 'airplane':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3.5c-.5-.5-2.5 0-4 1.5L13.5 8.5 5.3 6.7c-.8-.2-1.5.2-1.8.9l-.5 1.2 5.5 3.5-3.5 3.5-2.2-.5c-.5-.1-1 .1-1.3.5l-.5.7 3.2 2.2 2.2 3.2.7-.5c.4-.3.6-.8.5-1.3l-.5-2.2 3.5-3.5 3.5 5.5 1.2-.5c.7-.3 1.1-1 .9-1.8z"></path></svg>`;
    case 'document':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line><path d="M18 16l-4 4"></path></svg>`;
    case 'gear':
      return `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`;
    case 'headphones':
      return `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>`;
    case 'translate':
      return `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 8 6 6"></path><path d="m4 14 6-6 2-3"></path><path d="M2 5h12"></path><path d="M7 2h1"></path><path d="m22 22-5-10-5 10"></path><path d="M14 18h6"></path></svg>`;
    case 'chart':
      return `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line><line x1="3" y1="20" x2="21" y2="20"></line><path d="M3 12l6-6 4 4 8-8"></path><polyline points="17 2 21 2 21 6"></polyline></svg>`;
    case 'briefcase-solid':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="#F4C400"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>`;
    case 'briefcase':
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`;
    case 'arrow-right':
      return `<svg class="hea-arrow-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`;
    case 'phone':
      return `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`;
    case 'mail':
      return `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`;
    case 'pin':
      return `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`;
    case 'facebook':
      return `<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`;
    case 'instagram':
      return `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>`;
    case 'twitter-x':
      return `<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`;
    case 'linkedin':
      return `<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>`;
    default:
      return ``;
  }
}

// 1. HERO SECTION (Module 5)
function renderHeroSection() {
  return `
    <section class="hea-hero-section" id="hero">
      <!-- Vision & Mission Style Background Grid & Layered Orbs -->
      <div class="hea-hero-grid" aria-hidden="true"></div>
      <div class="hea-hero-orb orb-one" aria-hidden="true"></div>
      <div class="hea-hero-orb orb-two" aria-hidden="true"></div>

      <div class="hea-shell hea-hero-layout">
        <!-- Left Hero Content -->
        <div class="hea-hero-left">
          <div class="hea-eyebrow">
            <span class="hea-eyebrow-line"></span>
            <span class="hea-eyebrow-text">EXPLORE YOUR FUTURE</span>
          </div>

          <h1 class="hea-hero-title">
            <span class="hea-title-white">Higher Education &amp;</span>
            <span class="hea-title-gold">Admissions</span>
          </h1>

          <p class="hea-hero-desc">Discover opportunities beyond borders.</p>

          <a href="#hea-destinations" class="hea-destination-badge">
            <svg class="dest-badge-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            <span>Explore 10+ Destinations</span>
          </a>
        </div>
      </div>

      <!-- Right Hero Globe with Canvas & Animated SVG Flight Overlay -->
      <div class="hea-hero-globe-wrap" aria-hidden="true">
        <canvas id="globe"></canvas>

        <svg class="hea-globe-overlay-svg" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <path id="flightTrajectory" d="M 170 380 C 230 190, 390 100, 520 180" />
          </defs>

          <!-- Trajectory Arcs -->
          <path d="M 170 380 C 230 190, 390 100, 520 180" stroke="#f5b800" stroke-width="1.5" stroke-dasharray="3 5" fill="none" />
          <path d="M 370 210 Q 480 300 500 420" stroke="#f5b800" stroke-width="1.5" stroke-dasharray="3 5" fill="none" opacity="0.85" />

          <!-- Top-Right Pin Marker with Pulsing Soft Glow -->
          <g transform="translate(520, 180)">
            <circle class="hea-pin-glow-pulse" cx="0" cy="0" r="14" fill="#f5b800" />
            <path d="M0 -15 C -4.5 -15 -7.5 -11.5 -7.5 -7.5 C -7.5 0 0 7.5 0 7.5 C 0 7.5 7.5 0 7.5 -7.5 C 7.5 -11.5 4.5 -15 0 -15 Z" fill="#f5b800" />
            <circle cx="0" cy="-7.5" r="2.5" fill="#05382a" />
          </g>

          <!-- Lower-Right Pin Marker with Pulsing Soft Glow -->
          <g transform="translate(500, 420)">
            <circle class="hea-pin-glow-pulse" cx="0" cy="0" r="14" fill="#f5b800" />
            <path d="M0 -15 C -4.5 -15 -7.5 -11.5 -7.5 -7.5 C -7.5 0 0 7.5 0 7.5 C 0 7.5 7.5 0 7.5 -7.5 C 7.5 -11.5 4.5 -15 0 -15 Z" fill="#f5b800" />
            <circle cx="0" cy="-7.5" r="2.5" fill="#05382a" />
          </g>

          <!-- Animated Gold Airplane traversing trajectory -->
          <g class="hea-animated-flight-plane">
            <path d="M 0,-14 L 3.5,-3 L 13,2 L 13,4.5 L 2.5,3 L 2,9 L 5.5,12 L 5.5,14 L 0,12.5 L -5.5,14 L -5.5,12 L -2,9 L -2.5,3 L -13,4.5 L -13,2 L -3.5,-3 Z" fill="#f5b800" />
            <animateMotion 
              dur="8s" 
              repeatCount="indefinite" 
              rotate="auto" 
              keyPoints="0;1" 
              keyTimes="0;1" 
              calcMode="linear"
            >
              <mpath href="#flightTrajectory"/>
            </animateMotion>
          </g>
        </svg>
      </div>
    </section>
  `;
}

// 2. STATISTICS STRIP (Module 6 - Flat Row, No Card)
function renderStatsSection() {
  return `
    <section class="hea-stats-section" id="hea-stats-section">
      <div class="hea-shell">
        <div class="hea-stats-strip">
          <!-- Stat 1: 07+ Countries -->
          <div class="hea-stat-item">
            <div class="hea-stat-icon-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
            <div class="hea-stat-text-col">
              <div class="hea-stat-num js-hea-counter" data-num="7" data-prefix="0" data-suffix="+">07+</div>
              <div class="hea-stat-label">Countries</div>
            </div>
          </div>

          <!-- Stat 2: 15+ Exams -->
          <div class="hea-stat-item">
            <div class="hea-stat-icon-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f5b800" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
            </div>
            <div class="hea-stat-text-col">
              <div class="hea-stat-num js-hea-counter" data-num="15" data-suffix="+">15+</div>
              <div class="hea-stat-label">Exams</div>
            </div>
          </div>

          <!-- Stat 3: 25+ Programs -->
          <div class="hea-stat-item">
            <div class="hea-stat-icon-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
            </div>
            <div class="hea-stat-text-col">
              <div class="hea-stat-num js-hea-counter" data-num="25" data-suffix="+">25+</div>
              <div class="hea-stat-label">Programs</div>
            </div>
          </div>

          <!-- Stat 4: ∞ Possibilities -->
          <div class="hea-stat-item">
            <div class="hea-stat-icon-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f5b800" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18.178 8c5.096 0 5.096 8 0 8-2.67 0-4.807-2.667-6.178-5-1.37-2.333-3.508-5-6.178-5-5.096 0-5.096 8 0 8 2.67 0 4.808-2.667 6.178-5 1.37-2.333 3.508-5 6.178-5z"></path>
              </svg>
            </div>
            <div class="hea-stat-text-col">
              <div class="hea-stat-num hea-stat-infinity">∞</div>
              <div class="hea-stat-label">Possibilities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// 3. GLOBAL OPPORTUNITIES SECTION (Module 7)
function renderGlobalOpportunitiesSection() {
  return `
    <section class="hea-opportunities-section" id="hea-opportunities">
      <div class="hea-shell">
        <div class="hea-opportunities-grid">
          <!-- Left Large Featured Card -->
          <article class="hea-card-featured-admissions">
            <div class="hea-featured-card-content">
              <span class="hea-card-eyebrow">GLOBAL OPPORTUNITIES</span>
              <h2 class="hea-featured-card-title">
                International<br><span class="hea-gold-word">Admissions</span>
              </h2>
              <p class="hea-featured-card-desc">
                Study at world-class universities across top destinations.
              </p>
              <a href="#/admission-enquiry?program=international" class="hea-btn-yellow hea-featured-cta">
                <span>Explore Now</span>
                ${heaIcon('arrow-right')}
              </a>
            </div>
            
            <!-- High-Detail Clock Tower Architectural Illustration -->
            <img src="/higher-ed/clock-tower-art.jpg" alt="University Campus Architecture" class="hea-clocktower-art-img" aria-hidden="true" />
          </article>

          <!-- Right Column: 2 Stacked Cream/White Cards -->
          <div class="hea-opportunities-right-stack">
            <!-- Card 1: Admission Exams -->
            <article class="hea-card-opp-item">
              <div class="hea-card-icon-tile">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="8" y1="13" x2="13" y2="13"></line>
                  <line x1="8" y1="17" x2="16" y2="17"></line>
                  <path d="M18 13.5l2.5-2.5a1 1 0 0 0 0-1.4l-1.6-1.6a1 1 0 0 0-1.4 0L15 10.5l3 3z"></path>
                </svg>
              </div>
              <div class="hea-card-body">
                <h3 class="hea-card-title">Admission Exams</h3>
                <p class="hea-card-desc">
                  GATE, GRE, CAT, IELTS, TOEFL and more.
                </p>
                <a href="#hea-exams" class="hea-card-link js-smooth-scroll" data-target="hea-exams">
                  <span>Explore Exams</span>
                  ${heaIcon('arrow-right')}
                </a>
              </div>
              <!-- dot-pattern.svg in top-right corner -->
              <img src="/higher-ed/dot-pattern.svg" alt="" class="hea-card-dot-img" aria-hidden="true" />
            </article>

            <!-- Card 2: Study Abroad -->
            <article class="hea-card-opp-item">
              <div class="hea-card-icon-tile">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3.5c-.5-.5-2.5 0-4 1.5L13.5 8.5 5.3 6.7c-.8-.2-1.5.2-1.8.9l-.5 1.2 5.5 3.5-3.5 3.5-2.2-.5c-.5-.1-1 .1-1.3.5l-.5.7 3.2 2.2 2.2 3.2.7-.5c.4-.3.6-.8.5-1.3l-.5-2.2 3.5-3.5 3.5 5.5 1.2-.5c.7-.3 1.1-1 .9-1.8z"></path>
                </svg>
              </div>
              <div class="hea-card-body">
                <h3 class="hea-card-title">Study Abroad</h3>
                <p class="hea-card-desc">
                  Explore universities, scholarships and admissions worldwide.
                </p>
                <a href="#hea-destinations" class="hea-card-link js-smooth-scroll" data-target="hea-destinations">
                  <span>Discover More</span>
                  ${heaIcon('arrow-right')}
                </a>
              </div>
              <!-- mini-globe.svg on the right side -->
              <img src="/higher-ed/mini-globe.svg" alt="" class="hea-card-mini-globe-img" aria-hidden="true" />
            </article>
          </div>
        </div>
      </div>
    </section>
  `;
}

// 4. POPULAR STUDY DESTINATIONS SECTION (Module 8 - 6 Columns on Desktop)
function renderStudyDestinationsSection() {
  const filterTabs = ['All', 'Asia', 'Europe', 'North America', 'Oceania'];

  return `
    <section class="hea-destinations-section" id="hea-destinations">
      <div class="hea-shell">
        <div class="hea-destinations-header">
          <div class="hea-dest-header-left">
            <span class="hea-section-eyebrow">EXPLORE STUDY DESTINATIONS</span>
            <h2 class="hea-section-heading">Popular Study Destinations</h2>
          </div>

          <!-- Filter Chips -->
          <div class="hea-filter-chips" role="tablist" aria-label="Destination region filters">
            ${filterTabs.map((tab, i) => `
              <button 
                type="button" 
                class="hea-filter-chip ${i === 0 ? 'is-active' : ''}" 
                data-region="${tab}"
                role="tab"
                aria-selected="${i === 0 ? 'true' : 'false'}"
              >
                ${tab}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- 6 Destination Cards Grid -->
        <div class="hea-destinations-grid" id="hea-destinations-grid">
          ${destinationsData.map(dest => `
            <article 
              class="hea-dest-card" 
              data-region="${dest.region}" 
              data-country="${dest.country.toLowerCase()}"
              data-courses="${dest.courses.toLowerCase()}"
            >
              <!-- 4:3 Cropped Real Photograph -->
              <div class="hea-dest-media">
                <img 
                  src="${dest.image}" 
                  alt="${dest.country} premier universities" 
                  class="hea-dest-img" 
                  loading="lazy" 
                />
              </div>

              <div class="hea-dest-body">
                <!-- Inline SVG Flag + Country Name -->
                <div class="hea-dest-flag-name">
                  ${renderFlagSvg(dest.flagKey)}
                  <h3 class="hea-dest-name">${dest.country}</h3>
                </div>

                <!-- Top Universities Count Row with subtle pill badge -->
                <div class="hea-dest-meta-row">
                  <span class="hea-dest-meta-lbl">Top Universities</span>
                  <span class="hea-dest-count-pill">${dest.universities}</span>
                </div>

                <!-- Popular Courses -->
                <div class="hea-dest-courses-wrap">
                  <span class="hea-dest-courses-lbl">Popular Courses</span>
                  <span class="hea-dest-courses-val">${dest.courses}</span>
                </div>

                <!-- Explore Link -->
                <a href="${dest.link}" class="hea-dest-explore-link">
                  <span>Explore</span>
                  ${heaIcon('arrow-right')}
                </a>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

// 5. ADMISSION EXAMS SECTION (Module 9 - 28% Left Overview + 72% Right 5 Equal Cards)
function renderAdmissionExamsSection() {
  return `
    <section class="hea-exams-section" id="hea-exams">
      <div class="hea-shell hea-exams-layout">
        <!-- Left Overview Column (~28%) -->
        <div class="hea-exams-left-col">
          <span class="hea-section-eyebrow">ADMISSION EXAMS</span>
          <h2 class="hea-section-heading">Prepare for<br>Global Exams</h2>
          <p class="hea-exams-intro-p">
            Everything you need to know about eligibility, syllabus, preparation and top institutions.
          </p>
          <a href="#/admission-enquiry?category=exams" class="hea-btn-yellow hea-exams-cta-btn">
            <span>View All Exams</span>
            ${heaIcon('arrow-right')}
          </a>
        </div>

        <!-- Right 5 Equal Height Exam Cards (~72%) -->
        <div class="hea-exams-cards-grid">
          ${examCardsData.map(exam => `
            <article class="hea-exam-card" data-exam="${exam.name.toLowerCase()}">
              <div class="hea-exam-icon-wrap">
                ${heaIcon(exam.icon)}
              </div>
              <h3 class="hea-exam-card-title">${exam.name}</h3>
              <p class="hea-exam-card-desc">${exam.desc}</p>
              <a href="${exam.link}" class="hea-exam-card-link">
                <span>Explore</span>
                ${heaIcon('arrow-right')}
              </a>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

// 6. CHOOSE YOUR PATH SECTION (Module 10 - 4 Horizontal Cards in 1 Row)
function renderChoosePathSection() {
  return `
    <section class="hea-path-section" id="hea-path">
      <div class="hea-shell">
        <div class="hea-path-header">
          <h2 class="hea-path-heading">CHOOSE YOUR PATH</h2>
          <div class="hea-path-line" aria-hidden="true"></div>
        </div>

        <div class="hea-path-cards-grid">
          ${choosePathData.map(path => `
            <article class="hea-path-card ${path.isYellow ? 'hea-path-card-yellow-icon' : ''}">
              <div class="hea-path-circle-icon">
                ${heaIcon(path.icon)}
              </div>
              <div class="hea-path-card-body">
                <h3 class="hea-path-card-title">${path.title}</h3>
                <p class="hea-path-card-desc">${path.desc}</p>
                <a href="${path.link}" class="hea-path-card-link">
                  <span>Explore</span>
                  ${heaIcon('arrow-right')}
                </a>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

// 7. FINAL FULL-WIDTH CTA SECTION (Module 11)
function renderFinalCtaSection() {
  return `
    <section class="hea-cta-section">
      <!-- cta-building.svg on Left -->
      <img src="/higher-ed/cta-building.svg" alt="" class="hea-cta-building-img" aria-hidden="true" />
      <!-- cta-route.svg on Right -->
      <img src="/higher-ed/cta-route.svg" alt="" class="hea-cta-route-img" aria-hidden="true" />

      <div class="hea-shell hea-cta-content">
        <h2 class="hea-cta-title">Your Next Opportunity Starts Here</h2>
        <p class="hea-cta-subtitle">Explore courses, exams and destinations. The world is waiting for you.</p>
        <a href="#/admission-enquiry" class="hea-btn-yellow hea-cta-primary-btn">
          <span>Start Exploring</span>
          ${heaIcon('arrow-right')}
        </a>
      </div>
    </section>
  `;
}

// 8. THEMED FOOTER (Module 12)
export function renderHigherEducationFooter() {
  const currentYear = new Date().getFullYear();

  return `
    <footer class="hea-footer-section">
      <!-- footer-art.svg in Background -->
      <img src="/higher-ed/footer-art.svg" alt="" class="hea-footer-art-bg" aria-hidden="true" />

      <div class="hea-shell hea-footer-columns">
        <!-- Col 1: About Us -->
        <div class="hea-footer-col hea-footer-col-about">
          <h4 class="hea-footer-col-title">About Us</h4>
          <p class="hea-footer-about-text">
            Empowering students to explore global education opportunities and achieve their dreams.
          </p>
          <div class="hea-footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="hea-social-btn">
              ${heaIcon('facebook')}
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="hea-social-btn">
              ${heaIcon('instagram')}
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X" class="hea-social-btn">
              ${heaIcon('twitter-x')}
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="hea-social-btn">
              ${heaIcon('linkedin')}
            </a>
          </div>
        </div>

        <!-- Col 2: Admissions -->
        <div class="hea-footer-col">
          <h4 class="hea-footer-col-title">Admissions</h4>
          <ul class="hea-footer-nav-list">
            <li><a href="#/programmes">UG Admissions</a></li>
            <li><a href="#/programmes">PG Admissions</a></li>
            <li><a href="#/admission-enquiry?type=international">International Admissions</a></li>
            <li><a href="#/admission-enquiry?type=scholarships">Scholarships</a></li>
          </ul>
        </div>

        <!-- Col 3: Campus -->
        <div class="hea-footer-col">
          <h4 class="hea-footer-col-title">Campus</h4>
          <ul class="hea-footer-nav-list">
            <li><a href="#/vision-mission">About SIET</a></li>
            <li><a href="#/departments">Departments</a></li>
            <li><a href="#/facilities">Facilities</a></li>
            <li><a href="#/campus-life">Student Life</a></li>
          </ul>
        </div>

        <!-- Col 4: Resources -->
        <div class="hea-footer-col">
          <h4 class="hea-footer-col-title">Resources</h4>
          <ul class="hea-footer-nav-list">
            <li><a href="#hea-exams">Exams</a></li>
            <li><a href="#/campus-life">Blogs</a></li>
            <li><a href="#/curriculum">Guides</a></li>
            <li><a href="#/contact">FAQs</a></li>
          </ul>
        </div>

        <!-- Col 5: Contact Us -->
        <div class="hea-footer-col hea-footer-col-contact">
          <h4 class="hea-footer-col-title">Contact Us</h4>
          <ul class="hea-footer-contact-list">
            <li>
              <span class="hea-f-icon">${heaIcon('phone')}</span>
              <a href="tel:+919876543210">+91 98765 43210</a>
            </li>
            <li>
              <span class="hea-f-icon">${heaIcon('mail')}</span>
              <a href="mailto:admissions@siet.edu.in">admissions@siet.edu.in</a>
            </li>
            <li>
              <span class="hea-f-icon">${heaIcon('pin')}</span>
              <span>SIET Campus, Chennai, India</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="hea-shell hea-footer-bottom-bar">
        <span class="hea-footer-copy">
          &copy; 2024 SIET. All rights reserved.
        </span>
        <div class="hea-footer-legal-links">
          <a href="#/privacy-policy">Privacy Policy</a>
          <span class="hea-f-sep">|</span>
          <a href="#/terms">Terms of Use</a>
          <span class="hea-f-sep">|</span>
          <a href="#/disclaimer">Disclaimer</a>
        </div>
      </div>
    </footer>
  `;
}

// MAIN HIGHER EDUCATION PAGE COMPONENT
export function HigherEducationPage() {
  return `
    <main class="hea-page-wrapper">
      ${renderHeroSection()}
      ${renderStatsSection()}
      ${renderGlobalOpportunitiesSection()}
      ${renderStudyDestinationsSection()}
      ${renderAdmissionExamsSection()}
      ${renderChoosePathSection()}
      ${renderFinalCtaSection()}
      ${renderHigherEducationFooter()}
    </main>
  `;
}

// INTERACTIVE BEHAVIORS & EVENT BINDINGS
export function initHigherEducation() {
  // 0. DOTTED GLOBE CANVAS INITIALIZATION
  const canvas = document.getElementById('globe');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;
    let projection;
    let landPoints = [];
    let rotation = [-15, -18, 12];
    let animationFrameId = null;
    let isVisible = true;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function resizeCanvas() {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      width = rect.width;
      height = rect.height;

      if (width === 0 || height === 0) return;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      const radius = width / 2;
      if (window.d3) {
        projection = window.d3.geoOrthographic()
          .scale(radius * 0.95)
          .translate([width / 2, height / 2])
          .rotate(rotation)
          .clipAngle(90);
      }

      drawGlobe();
    }

    let resizeTimer = null;
    function debouncedResize() {
      if (resizeTimer) cancelAnimationFrame(resizeTimer);
      resizeTimer = requestAnimationFrame(() => {
        resizeCanvas();
      });
    }

    function generateLandPoints(landGeoJson) {
      const points = [];
      const step = 2.0; // Optimized grid density for instant response
      for (let lat = -80; lat <= 80; lat += step) {
        for (let lon = -180; lon <= 180; lon += step) {
          if (window.d3 && window.d3.geoContains(landGeoJson, [lon, lat])) {
            points.push([lon, lat]);
          }
        }
      }
      return points;
    }

    function generateFallbackLandPoints() {
      const points = [];
      const continents = [
        { minLat: -35, maxLat: 38, minLon: -18, maxLon: 52 },
        { minLat: 36, maxLat: 70, minLon: -10, maxLon: 45 },
        { minLat: 5, maxLat: 72, minLon: 45, maxLon: 145 },
        { minLat: 15, maxLat: 72, minLon: -168, maxLon: -55 },
        { minLat: -55, maxLat: 12, minLon: -82, maxLon: -34 },
        { minLat: -42, maxLat: -11, minLon: 112, maxLon: 154 }
      ];
      const step = 2.0;
      continents.forEach(c => {
        for (let lat = c.minLat; lat <= c.maxLat; lat += step) {
          for (let lon = c.minLon; lon <= c.maxLon; lon += step) {
            if (Math.sin(lat * 0.1) + Math.cos(lon * 0.1) > -0.6) {
              points.push([lon, lat]);
            }
          }
        }
      });
      return points;
    }

    function drawGlobe() {
      if (!ctx || !projection || width === 0) return;
      const cx = width / 2;
      const cy = height / 2;
      const radius = (width / 2) * 0.95;

      ctx.clearRect(0, 0, width, height);

      // Atmosphere Base Radial Shading
      const bgGradient = ctx.createRadialGradient(cx, cy, radius * 0.05, cx, cy, radius);
      bgGradient.addColorStop(0, 'rgba(15, 120, 75, 0.45)');
      bgGradient.addColorStop(0.5, 'rgba(5, 60, 42, 0.25)');
      bgGradient.addColorStop(0.85, 'rgba(3, 35, 25, 0.1)');
      bgGradient.addColorStop(1, 'rgba(3, 25, 18, 0)');

      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fillStyle = bgGradient;
      ctx.fill();

      // Planetary Grid Arcs for 3D depth
      if (window.d3) {
        ctx.save();
        ctx.strokeStyle = 'rgba(74, 222, 128, 0.12)';
        ctx.lineWidth = 0.8;
        const graticule = window.d3.geoGraticule().step([20, 20]);
        const pathGen = window.d3.geoPath(projection, ctx);
        ctx.beginPath();
        pathGen(graticule());
        ctx.stroke();
        ctx.restore();
      }

      // Globe Outer Glowing Rim
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.lineWidth = 1.2;
      ctx.strokeStyle = 'rgba(245, 184, 0, 0.35)';
      ctx.shadowColor = 'rgba(74, 222, 128, 0.6)';
      ctx.shadowBlur = 14;
      ctx.stroke();
      ctx.restore();

      const dpr = window.devicePixelRatio || 1;
      const dotRadius = dpr > 1 ? 1.5 : 1.25;

      for (let i = 0; i < landPoints.length; i++) {
        const coords = landPoints[i];
        const proj = projection(coords);
        if (proj) {
          const px = proj[0];
          const py = proj[1];
          const dx = px - cx;
          const dy = py - cy;
          const distFromCenter = Math.sqrt(dx * dx + dy * dy) / radius;
          const diagFactor = (px / width) * 0.4 + (py / height) * 0.6;
          const alpha = Math.min(0.98, Math.max(0.3, (1 - distFromCenter * 0.3) * diagFactor + 0.25));

          ctx.beginPath();
          ctx.arc(px, py, dotRadius, 0, Math.PI * 2);
          if (diagFactor > 0.55 && (i % 3 === 0)) {
            ctx.fillStyle = `rgba(255, 215, 64, ${alpha})`;
          } else if (diagFactor > 0.4) {
            ctx.fillStyle = `rgba(214, 195, 70, ${alpha})`;
          } else {
            ctx.fillStyle = `rgba(74, 222, 128, ${alpha * 0.85})`;
          }
          ctx.fill();
        }
      }
    }

    function animate() {
      if (!prefersReducedMotion && isVisible) {
        rotation[0] += 0.04;
        if (projection) {
          projection.rotate(rotation);
          drawGlobe();
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    }

    document.addEventListener('visibilitychange', () => {
      isVisible = !document.hidden;
    });

    // 1. Instantly render fallback continents matrix (0ms delay - no network wait)
    landPoints = generateFallbackLandPoints();
    resizeCanvas();
    if (!animationFrameId) animate();

    // 2. Background enhancement with TopoJSON if available
    if (window.topojson) {
      fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json')
        .then(res => res.json())
        .then(worldData => {
          const land = window.topojson.feature(worldData, worldData.objects.land);
          landPoints = generateLandPoints(land);
          drawGlobe();
        })
        .catch(() => {
          // Keep existing land points
        });
    }

    window.addEventListener('resize', debouncedResize, { passive: true });
  }

  // 1. Counter Animation (Instant display with subtle smooth count-up)
  const statsSection = document.getElementById('hea-stats-section');
  if (statsSection) {
    let animated = false;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            animated = true;
            const counters = statsSection.querySelectorAll('.js-hea-counter');
            counters.forEach((el) => {
              const display = el.getAttribute('data-display');
              if (display) {
                el.textContent = display;
                el.classList.add('is-revealed');
                return;
              }

              const targetNum = parseInt(el.getAttribute('data-num'), 10) || 0;
              const prefix = el.getAttribute('data-prefix') || '';
              const suffix = el.getAttribute('data-suffix') || '+';
              let count = 0;
              const duration = 400; // Ultra-fast 400ms count-up
              const stepTime = Math.max(16, Math.floor(duration / (targetNum + 1)));

              const timer = setInterval(() => {
                count++;
                const formatted = count < 10 && prefix ? `${prefix}${count}` : `${count}`;
                el.textContent = `${formatted}${suffix}`;
                if (count >= targetNum) {
                  clearInterval(timer);
                }
              }, stepTime);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(statsSection);
  }

  // 2. Popular Destinations Region Filter Chips
  const filterChips = document.querySelectorAll('.hea-filter-chip');
  const destCards = document.querySelectorAll('.hea-dest-card');

  filterChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      const selectedRegion = chip.getAttribute('data-region');

      filterChips.forEach((c) => {
        const isActive = c === chip;
        c.classList.toggle('is-active', isActive);
        c.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });

      destCards.forEach((card) => {
        const cardRegion = card.getAttribute('data-region');
        if (selectedRegion === 'All' || cardRegion === selectedRegion) {
          card.style.display = '';
          card.style.opacity = '1';
          card.style.transform = 'scale(1)';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 3. Live Search Input
  const searchInput = document.getElementById('hea-search-input');
  const searchForm = document.getElementById('hea-search-form');

  const executeSearch = () => {
    const query = (searchInput?.value || '').trim().toLowerCase();
    if (!query) {
      const activeChip = document.querySelector('.hea-filter-chip.is-active');
      const activeRegion = activeChip?.getAttribute('data-region') || 'All';
      destCards.forEach((card) => {
        const cardRegion = card.getAttribute('data-region');
        card.style.display = (activeRegion === 'All' || cardRegion === activeRegion) ? '' : 'none';
      });
      return;
    }

    const destSection = document.getElementById('hea-destinations');
    if (destSection && window.scrollY < destSection.offsetTop - 200) {
      destSection.scrollIntoView({ behavior: 'smooth' });
    }

    destCards.forEach((card) => {
      const country = card.getAttribute('data-country') || '';
      const courses = card.getAttribute('data-courses') || '';
      const region = (card.getAttribute('data-region') || '').toLowerCase();
      const matches = country.includes(query) || courses.includes(query) || region.includes(query);
      card.style.display = matches ? '' : 'none';
    });
  };

  searchInput?.addEventListener('input', executeSearch);
  searchForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    executeSearch();
  });

  // 4. Smooth Anchor Scrolling
  document.querySelectorAll('.js-smooth-scroll').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('data-target');
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}
