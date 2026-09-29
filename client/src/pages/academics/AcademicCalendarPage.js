import { sietHudHeader } from '../../components/ui/PageHeader.js';
import { libIcons } from './LibraryPage.js';

export const currIcons = {
  gradCap: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path></svg>`,
  calendar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
  clipboard: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>`,
  database: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
  headphone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>`
};

export function AcademicCalendarPage() {
  return `<main class="siet-curr-page siet-calendar-page">
  ${sietHudHeader('Academic Calendar', 'Academic Calendar', 'Academics', '#/academics', 'SYSTEM ONLINE / ACADEMIC PROFILE / SIET-OS')}

  <section class="siet-curr-body">
    <div class="siet-curr-container">
      <div class="siet-curr-grid">
        <!-- Left Sidebar: Academics Nav -->
        <aside class="siet-curr-sidebar reveal">
          <div class="siet-curr-sidecard">
            <div class="siet-curr-sidehead">
              <span class="sidehead-icon" aria-hidden="true">${currIcons.gradCap}</span>
              <div class="sidehead-text">
                <h3>Academics</h3>
                <p>Your learning journey, our priority.</p>
              </div>
            </div>
            <nav class="siet-curr-nav" aria-label="Academic navigation">
              <a href="#/curriculum" class="siet-curr-navlink">
                <span class="navlink-content">
                  <span class="navlink-icon">${libIcons.book}</span>
                  <span>Curriculum</span>
                </span>
                <span class="navlink-arrow">›</span>
              </a>
              <a href="#/academic-calendar" class="siet-curr-navlink is-active">
                <span class="navlink-content">
                  <span class="navlink-icon">${currIcons.calendar}</span>
                  <span>Academic Calendar</span>
                </span>
                <span class="navlink-arrow">›</span>
              </a>
            </nav>
          </div>
        </aside>

        <!-- Main Content -->
        <article class="siet-curr-main">
          <div class="siet-calendar-card reveal">
            <div class="siet-calendar-header">
              <div>
                <span class="curr-badge">AUTONOMOUS 2025–2026</span>
                <h2>Autonomous Academic Schedule &amp; Calendar</h2>
                <p>Detailed timeline for class commencement, continuous internal assessments, model examinations, end-semester practicals, and theory examinations.</p>
              </div>
              <div class="calendar-actions">
                <a href="#/curriculum" class="dept-curriculum-action">View Full Curriculum →</a>
              </div>
            </div>

            <div class="calendar-schedule-tables">
              <h3 class="calendar-term-heading">Odd Semester (III, V, VII Semesters)</h3>
              <div class="curr-table-wrapper">
                <table class="curr-table calendar-table">
                  <thead>
                    <tr>
                      <th style="width:70px">S.No</th>
                      <th>Academic Milestone / Event</th>
                      <th style="width:220px">Date / Duration</th>
                      <th style="width:130px">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="td-num">1</td>
                      <td class="td-title">Commencement of Odd Semester Classes</td>
                      <td class="td-code">14 July 2025</td>
                      <td><span class="cal-status cal-open">Completed</span></td>
                    </tr>
                    <tr>
                      <td class="td-num">2</td>
                      <td class="td-title">Continuous Internal Assessment – I (CIA I)</td>
                      <td class="td-code">25 Aug 2025 – 01 Sep 2025</td>
                      <td><span class="cal-status cal-open">Completed</span></td>
                    </tr>
                    <tr>
                      <td class="td-num">3</td>
                      <td class="td-title">Continuous Internal Assessment – II (CIA II)</td>
                      <td class="td-code">06 Oct 2025 – 13 Oct 2025</td>
                      <td><span class="cal-status cal-active">Active</span></td>
                    </tr>
                    <tr>
                      <td class="td-num">4</td>
                      <td class="td-title">Last Working Day for Odd Semester</td>
                      <td class="td-code">07 Nov 2025</td>
                      <td><span class="cal-status">Scheduled</span></td>
                    </tr>
                    <tr>
                      <td class="td-num">5</td>
                      <td class="td-title">End Semester Practical Examinations</td>
                      <td class="td-code">10 Nov 2025 – 18 Nov 2025</td>
                      <td><span class="cal-status">Scheduled</span></td>
                    </tr>
                    <tr>
                      <td class="td-num">6</td>
                      <td class="td-title">End Semester Theory Examinations</td>
                      <td class="td-code">24 Nov 2025 – 15 Dec 2025</td>
                      <td><span class="cal-status">Scheduled</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 class="calendar-term-heading" style="margin-top:36px">Even Semester (IV, VI, VIII Semesters)</h3>
              <div class="curr-table-wrapper">
                <table class="curr-table calendar-table">
                  <thead>
                    <tr>
                      <th style="width:70px">S.No</th>
                      <th>Academic Milestone / Event</th>
                      <th style="width:220px">Date / Duration</th>
                      <th style="width:130px">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="td-num">1</td>
                      <td class="td-title">Re-opening &amp; Commencement of Even Semester Classes</td>
                      <td class="td-code">05 Jan 2026</td>
                      <td><span class="cal-status">Upcoming</span></td>
                    </tr>
                    <tr>
                      <td class="td-num">2</td>
                      <td class="td-title">Continuous Internal Assessment – I (CIA I)</td>
                      <td class="td-code">16 Feb 2026 – 23 Feb 2026</td>
                      <td><span class="cal-status">Upcoming</span></td>
                    </tr>
                    <tr>
                      <td class="td-num">3</td>
                      <td class="td-title">Continuous Internal Assessment – II (CIA II)</td>
                      <td class="td-code">23 Mar 2026 – 30 Mar 2026</td>
                      <td><span class="cal-status">Upcoming</span></td>
                    </tr>
                    <tr>
                      <td class="td-num">4</td>
                      <td class="td-title">Last Working Day for Even Semester</td>
                      <td class="td-code">24 Apr 2026</td>
                      <td><span class="cal-status">Upcoming</span></td>
                    </tr>
                    <tr>
                      <td class="td-num">5</td>
                      <td class="td-title">End Semester Practical Examinations</td>
                      <td class="td-code">27 Apr 2026 – 06 May 2026</td>
                      <td><span class="cal-status">Upcoming</span></td>
                    </tr>
                    <tr>
                      <td class="td-num">6</td>
                      <td class="td-title">End Semester Theory Examinations</td>
                      <td class="td-code">11 May 2026 – 02 Jun 2026</td>
                      <td><span class="cal-status">Upcoming</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- Wave transition -->
  <div class="siet-curr-waves-zone" aria-hidden="true">
    <div class="siet-curr-bottom-wave">
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none" fill="none">
        <path d="M0,100 L0,25 C200,85 450,95 720,60 C980,25 1200,35 1440,0 L1440,100 Z" fill="#073b21" />
        <path d="M0,100 L0,45 C240,92 480,102 760,70 C1020,38 1240,48 1440,20 L1440,100 Z" fill="#0b522f" />
        <path d="M0,100 L0,70 C280,105 520,108 800,82 C1060,56 1280,68 1440,45 L1440,100 Z" fill="#eab308" />
      </svg>
    </div>
  </div>
</main>`;
}
