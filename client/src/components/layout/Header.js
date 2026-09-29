import { icon } from '../../utils/icons.js';
import { pageGroups } from '../../data/navigationData.js';
import './Header.css';

export function Header() {
  return `<div class="notice">
    <div class="notice-track">
      <span><b>ADMISSIONS 2026–27 NOW OPEN</b><i></i> Applications are invited for undergraduate and postgraduate engineering programmes <i></i> Begin your journey at Sri Shakthi <i></i> TNEA Counselling Code: 2727</span>
      <span aria-hidden="true"><b>ADMISSIONS 2026–27 NOW OPEN</b><i></i> Applications are invited for undergraduate and postgraduate engineering programmes <i></i> Begin your journey at Sri Shakthi <i></i> TNEA Counselling Code: 2727</span>
    </div>
  </div>
  <header class="institution-header-v4 exact-image-header">
    <div class="institution-header-shell">
      <a class="siet-header-image" href="#/" aria-label="Sri Shakthi Institute of Engineering and Technology home">
        <img src="/brand/siet-exact-header.png" alt="Sri Shakthi Institute of Engineering and Technology — NBA accredited, NAAC A grade, counselling code 2727" width="2048" height="256">
      </a>
      <nav class="institution-navbar" aria-label="Main navigation">
        <button class="institution-mobile-toggle" aria-label="Open navigation menu" type="button">${icon('menu')}</button>
        <a class="institution-mobile-logo" href="#/" aria-label="Sri Shakthi Home">
          <img src="/brand/siet-logo.png" alt="Sri Shakthi" class="mobile-logo-img">
          <span class="mobile-logo-text"><b>SRI SHAKTHI</b><small>Autonomous Institution</small></span>
        </a>
        <a class="institution-home" href="#/" aria-label="Home">${icon('home')}</a>
        <div class="institution-menu">
          ${pageGroups
            .map(
              (g, i) =>
                `${i === 5 ? '<a class="institution-nav-link" href="#/placements">Placements</a>' : ''}<div class="institution-nav-group"><button type="button">${g.label}${icon('down')}</button><div>${g.items.map(([s, n]) => `<a href="#/${s}">${n}</a>`).join('')}</div></div>`
            )
            .join('')}
          <a class="institution-nav-link" href="#/careers">Careers</a>
        </div>
        <a class="institution-nav-apply" href="#/apply">Apply Now ${icon('arrow')}</a>
      </nav>
    </div>
  </header>
  <div class="mobile-nav-backdrop"></div>
  <aside class="mobile-nav" aria-label="Mobile Navigation">
    <div class="mobile-nav-header">
      <a href="#/" class="mobile-nav-brand">
        <img src="/brand/siet-logo.png" alt="Sri Shakthi">
        <div><strong>SRI SHAKTHI</strong><small>Autonomous Institution</small></div>
      </a>
      <button class="mobile-nav-close" aria-label="Close menu">${icon('close')}</button>
    </div>
    <div class="mobile-nav-body">
      <a href="#/" class="mobile-nav-link mobile-nav-home">${icon('home')} Home</a>
      <div class="mobile-nav-accordion">
        ${pageGroups
          .map(
            (g, i) =>
              `${i === 5 ? '<a class="mobile-nav-link" href="#/placements">Placements</a>' : ''}<div class="mobile-nav-group"><button type="button" class="mobile-nav-group-toggle" aria-expanded="false"><span>${g.label}</span>${icon('down')}</button><div class="mobile-nav-subitems">${g.items.map(([s, n]) => `<a href="#/${s}" class="mobile-nav-sublink">${n}</a>`).join('')}</div></div>`
          )
          .join('')}
        <a class="mobile-nav-link" href="#/careers">Careers @ SIET</a>
      </div>
    </div>
    <div class="mobile-nav-footer">
      <a class="mobile-apply-link" href="#/apply">Apply Now ${icon('arrow')}</a>
    </div>
  </aside>`;
}
