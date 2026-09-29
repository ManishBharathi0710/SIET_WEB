import { pageGroups } from '../../data/navigationData.js';
import './Footer.css';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return `<footer class="site-footer footer-reference">
    <div class="footer-top">
      <div class="footer-brand">
        <a class="mark" href="#/">
          <img src="/brand/siet-logo.png" alt="Sri Shakthi emblem">
          <span>
            <b>SRI SHAKTHI</b>
            <small>INSTITUTE OF ENGINEERING AND TECHNOLOGY</small>
            <em>AUTONOMOUS · AFFILIATED TO ANNA UNIVERSITY</em>
          </span>
        </a>
        <p>Powering the youth.<br>Empowering the nation.</p>
      </div>
      <div class="footer-sitemap">
        ${pageGroups
          .map(
            (g) =>
              `<div class="footer-link-group"><b>${g.label}</b>${g.items.map(([s, n]) => `<a href="#/${s}"><span>›</span>${n}</a>`).join('')}</div>`
          )
          .join('')}
      </div>
    </div>
    <div class="footer-legal">
      <small>© ${currentYear} Sri Shakthi Institute of Engineering &amp; Technology. All rights reserved.</small>
      <nav>
        <a href="#/privacy-policy">Privacy Policy</a>
        <i></i>
        <a href="#/terms">Terms of Use</a>
        <i></i>
        <a href="#/sitemap">Sitemap</a>
      </nav>
    </div>
  </footer>`;
}
