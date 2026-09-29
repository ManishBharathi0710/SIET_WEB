import { sietHudHeader } from '../../components/ui/PageHeader.js';

export const libIcons = {
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
  book: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`,
  monitor: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
  users: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
  research: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
  link: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`,
  globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
  document: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>`,
  star: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
  phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`
};

export const libModalData = {
  catalogue: {
    title: 'Online Public Access Catalogue (OPAC)',
    content: `
      <p>Search and explore over <b>45,000+ print volumes</b>, <b>12,000+ distinct titles</b>, project theses, and reference volumes indexed through the automated KOHA library system.</p>
      <h4>Catalogue Search Categories</h4>
      <ul>
        <li><span class="siet-lib-resource-badge">Engineering</span> Computer Science, AI &amp; Data Science, Cybersecurity, VLSI &amp; Embedded Systems</li>
        <li><span class="siet-lib-resource-badge">Emerging Tech</span> Biomedical Engineering, Biotechnology, Food Technology &amp; Agricultural Engg</li>
        <li><span class="siet-lib-resource-badge">Core Disciplines</span> Mechanical, Civil, Electrical &amp; Electronics Engineering</li>
        <li><span class="siet-lib-resource-badge">Reference Works</span> International Standard Codes, Handbooks, Technical Dictionaries, Encyclopedias</li>
      </ul>
      <h4>How to Reserve &amp; Borrow</h4>
      <p>Students and faculty can check stack availability in real time and place holds using their SIET Smart ID card number at the circulation desk.</p>
    `
  },
  journals: {
    title: 'E-Journals & Online Databases',
    content: `
      <p>The Central Library subscribes to leading peer-reviewed digital libraries and indexing networks with seamless campus-wide IP-based access:</p>
      <table>
        <thead>
          <tr><th>Resource</th><th>Coverage</th><th>Access Mode</th></tr>
        </thead>
        <tbody>
          <tr><td><b>IEEE Xplore (ASPP)</b></td><td>Electronics, Electrical, AI, CS &amp; Communications</td><td>Campus IP + Remote VPN</td></tr>
          <tr><td><b>ScienceDirect (Elsevier)</b></td><td>Applied Sciences, Material Engineering &amp; Computing</td><td>Campus IP</td></tr>
          <tr><td><b>SpringerLink</b></td><td>1,700+ Peer-Reviewed Journals &amp; Technical Series</td><td>IP / Institutional SSO</td></tr>
          <tr><td><b>DELNET</b></td><td>3 Crore+ Inter-Library Union Catalogues &amp; Interloans</td><td>Institutional Membership</td></tr>
          <tr><td><b>NPTEL / SWAYAM</b></td><td>Video Lectures, Course Materials &amp; Certifications</td><td>Open Campus Hub</td></tr>
          <tr><td><b>National Digital Library (NDLI)</b></td><td>E-Textbooks, Monographs, Lab Simulations &amp; Papers</td><td>Registered Account</td></tr>
        </tbody>
      </table>
      <p>For off-campus login credentials or research publication download assistance, contact <a href="mailto:library@siet.ac.in">library@siet.ac.in</a>.</p>
    `
  },
  rules: {
    title: 'Library Rules & Regulations',
    content: `
      <h4>Working Hours</h4>
      <ul>
        <li><b>Monday to Saturday:</b> 8:00 AM – 8:00 PM (Issue &amp; Return: 8:30 AM – 6:30 PM)</li>
        <li><b>Sundays &amp; Holidays:</b> 9:00 AM – 4:00 PM (Reading Room &amp; Digital Lab)</li>
        <li><b>Exam Season:</b> Extended timings till 10:00 PM</li>
      </ul>
      <h4>Borrowing Entitlements</h4>
      <table>
        <thead><tr><th>User Category</th><th>Book Limit</th><th>Loan Period</th></tr></thead>
        <tbody>
          <tr><td>Undergraduate Students (B.E / B.Tech)</td><td>4 Books</td><td>14 Days</td></tr>
          <tr><td>Postgraduate Students (M.E / M.Tech)</td><td>6 Books</td><td>28 Days</td></tr>
          <tr><td>Faculty &amp; Research Scholars</td><td>8 Books</td><td>90 Days</td></tr>
        </tbody>
      </table>
      <h4>Code of Conduct</h4>
      <ul>
        <li>Strict silence must be maintained in all reading and reference halls.</li>
        <li>Institutional Smart ID card is mandatory for entry registration and library transactions.</li>
        <li>Mobile phones must be kept in silent mode; calls are strictly prohibited inside the library.</li>
        <li>Books must be handled with utmost care. Highlighting, pencil markings, or folding pages is prohibited.</li>
      </ul>
    `
  },
  arrivals: {
    title: 'New Arrivals — 2026 Academic Year',
    content: `
      <p>Latest textbook additions, international conference proceedings, and technical monographs added to our collection:</p>
      <ul>
        <li><b>Artificial Intelligence: A Modern Approach (4th Edition)</b> — Stuart Russell &amp; Peter Norvig</li>
        <li><b>Deep Learning with Python &amp; PyTorch (Latest Release)</b> — François Chollet</li>
        <li><b>Modern VLSI Design: IP-Based System Design</b> — Wayne Wolf</li>
        <li><b>Renewable Energy Systems: Technology &amp; Economics</b> — Z. Sen</li>
        <li><b>Agricultural IoT &amp; Precision Farming Engineering</b> — Springer Nature</li>
        <li><b>Biomedical Instrumentation &amp; Clinical Measurement</b> — R. S. Khandpur</li>
      </ul>
      <p>Visit the <i>New Arrivals Display Showcase</i> on the ground floor to browse these copies before they enter regular shelf circulation.</p>
    `
  },
  'about-details': {
    title: 'About SIET Central Library',
    content: `
      <p>The Central Library of Sri Shakthi Institute of Engineering and Technology is an architecturally designed, fully air-conditioned academic knowledge center spread across three spacious floors with seating capacity for over <b>400+ students and researchers</b>.</p>
      <h4>Key Infrastructure</h4>
      <ul>
        <li><b>Automated RFID Gates &amp; Self-Service Circulation</b> for quick book issue and return.</li>
        <li><b>Digital Library Wing:</b> 60 high-performance computer terminals connected with dedicated 1 Gbps high-speed internet.</li>
        <li><b>Reprography &amp; Document Scanning:</b> Printing, scanning, and photocopying facility for academic work.</li>
        <li><b>Group Discussion Rooms:</b> Acoustic-treated spaces for team projects and academic seminars.</li>
        <li><b>Multimedia &amp; NPTEL Viewing Section:</b> Fully set up for MOOC courses and lecture viewing.</li>
      </ul>
      <h4>Contact Information</h4>
      <p><b>Chief Librarian:</b> Dr. K. Radhakrishnan, M.L.I.S., Ph.D.<br>
      <b>Direct Phone:</b> +91 422 2369900 (Ext. 240)<br>
      <b>Email:</b> <a href="mailto:library@siet.ac.in">library@siet.ac.in</a></p>
    `
  }
};

export function LibraryPage() {
  return `<main class="siet-library-page">
  ${sietHudHeader('Central Library', 'Library', 'Academics', '#/academics', 'SYSTEM ONLINE / ACADEMIC PROFILE / SIET-OS')}

  <section class="siet-lib-features-strip" aria-label="Key library features">
    <div class="siet-lib-features-container">
      <div class="siet-lib-feature-item reveal">
        <span class="lib-feat-icon" aria-hidden="true">${libIcons.book}</span>
        <div class="lib-feat-text">
          <h3>Vast Collection</h3>
          <p>Books, journals, e-books, project reports and more.</p>
        </div>
      </div>
      <div class="siet-lib-feature-item reveal">
        <span class="lib-feat-icon" aria-hidden="true">${libIcons.monitor}</span>
        <div class="lib-feat-text">
          <h3>Digital Resources</h3>
          <p>Access to e-journals, e-books and online databases.</p>
        </div>
      </div>
      <div class="siet-lib-feature-item reveal">
        <span class="lib-feat-icon" aria-hidden="true">${libIcons.users}</span>
        <div class="lib-feat-text">
          <h3>Study Spaces</h3>
          <p>Peaceful &amp; comfortable reading environment.</p>
        </div>
      </div>
      <div class="siet-lib-feature-item reveal">
        <span class="lib-feat-icon" aria-hidden="true">${libIcons.research}</span>
        <div class="lib-feat-text">
          <h3>Research Support</h3>
          <p>Guidance for projects, publications and research.</p>
        </div>
      </div>
      <div class="siet-lib-feature-item reveal">
        <span class="lib-feat-icon" aria-hidden="true">${libIcons.clock}</span>
        <div class="lib-feat-text">
          <h3>Extended Hours</h3>
          <p>Flexible timings for student convenience.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="siet-lib-body">
    <div class="siet-lib-container">
      <div class="siet-lib-layout siet-lib-layout-duo">
        <div class="siet-lib-card-col">
          <div class="siet-lib-photo-card reveal">
            <img src="/brand/library-about.jpg" alt="Sri Shakthi Central Library reading hall and bookshelves">
            <div class="siet-lib-photo-badge">
              <span class="lib-badge-icon" aria-hidden="true">${libIcons.book}</span>
              <span class="lib-badge-text">Your Gateway to Knowledge</span>
            </div>
          </div>
        </div>

        <div class="siet-lib-about-col reveal">
          <div class="siet-lib-about-eyebrow">
            <span class="lib-gold-line"></span>
            <span class="lib-gold-text">ABOUT CENTRAL LIBRARY</span>
          </div>
          <h2 class="siet-lib-about-title">More Than Just Books</h2>
          <div class="siet-lib-about-text">
            <p>The Central Library at SIET is a hub of knowledge, innovation and learning. It provides a wide range of physical and digital resources, quiet study spaces and research support services to help students and faculty achieve their academic and research goals.</p>
            <p class="siet-lib-about-subtext">Print and digital resources, journals, databases and focused study environments support teaching, learning and research across all engineering disciplines.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="siet-lib-modal js-lib-modal" role="dialog" aria-modal="true" aria-hidden="true">
    <div class="siet-lib-modal-box">
      <div class="siet-lib-modal-header">
        <h3 class="js-lib-modal-title">Library Information</h3>
        <button type="button" class="siet-lib-modal-close js-lib-modal-close" aria-label="Close modal">×</button>
      </div>
      <div class="siet-lib-modal-body js-lib-modal-body"></div>
    </div>
  </div>
</main>`;
}
