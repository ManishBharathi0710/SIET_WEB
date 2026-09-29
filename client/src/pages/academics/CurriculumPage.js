import { sietHudHeader } from '../../components/ui/PageHeader.js';
import { allDepartments, getDeptCurriculum } from '../../data/curriculumData.js';
import { libIcons } from './LibraryPage.js';
import { currIcons } from './AcademicCalendarPage.js';

export let currActiveDept = 'cse';
export let currActiveSem = 1;

export function setCurrActiveDept(dept) {
  currActiveDept = dept;
}

export function setCurrActiveSem(sem) {
  currActiveSem = sem;
}

export function getCurrModalData(target, deptId = 'cse') {
  const dept = getDeptCurriculum(deptId);
  const deptFullName = `${dept.degree} ${dept.name}`;

  if (target === 'curriculum-r2024') {
    return {
      title: `${deptFullName} — Autonomous Curriculum (R2024)`,
      content: `
        <p>The Autonomous Curriculum (Regulations 2024) for <b>${deptFullName}</b> of Sri Shakthi Institute of Engineering and Technology is outcome-driven and structured across <b>168 total credits</b>.</p>
        <h4>Credit Distribution Across Categories</h4>
        <ul>
          <li><span class="siet-lib-resource-badge">HSMC</span> Humanities and Social Sciences (12 Credits)</li>
          <li><span class="siet-lib-resource-badge">BSC</span> Basic Sciences (Mathematics, Physics, Chemistry) (25 Credits)</li>
          <li><span class="siet-lib-resource-badge">ESC</span> Engineering Sciences &amp; Maker Foundation (24 Credits)</li>
          <li><span class="siet-lib-resource-badge">PCC</span> Professional Core Courses &amp; Specialization Labs (68 Credits)</li>
          <li><span class="siet-lib-resource-badge">PEC</span> Professional Electives (Discipline Specialization Tracks) (18 Credits)</li>
          <li><span class="siet-lib-resource-badge">OEC</span> Multidisciplinary Open Electives (9 Credits)</li>
          <li><span class="siet-lib-resource-badge">PROJ</span> Industry Internship &amp; Capstone Project (12 Credits)</li>
        </ul>
        <p>For detailed credit transfer, honours/minor degree regulations, or academic syllabus copies for ${dept.name}, contact the office of Controller of Examinations.</p>
      `
    };
  }

  if (target === 'syllabus-r2024') {
    return {
      title: `${deptFullName} — Detailed Syllabus (R2024)`,
      content: `
        <p>Each syllabus outlines course educational objectives, unit-wise topic descriptions, laboratory experiments, modern tool requirements, textbooks, and reference volumes for <b>${deptFullName}</b>.</p>
        <h4>Specialization Focus</h4>
        <p>${dept.desc}</p>
        <h4>Core Pillars</h4>
        <ul>
          <li><b>Fundamental Rigor:</b> Strong theoretical grounding through classroom and tutorial sessions.</li>
          <li><b>Hands-on Laboratory Mastery:</b> High-tech practical labs aligned with current industry standards.</li>
          <li><b>Industry &amp; Research Readiness:</b> Mini-projects, hackathons, and capstone engineering challenges.</li>
        </ul>
        <p>To request certified copies of course syllabi for competitive exams or foreign higher education, please email <a href="mailto:academics@siet.ac.in">academics@siet.ac.in</a>.</p>
      `
    };
  }

  if (target === 'regulations-r2024') {
    return {
      title: 'Academic Regulations (Autonomous R2024)',
      content: `
        <h4>Key Academic Highlights</h4>
        <ul>
          <li><b>Attendance:</b> A candidate must secure a minimum of <b>75% attendance</b> in each course to be eligible for End Semester Examinations.</li>
          <li><b>Evaluation System:</b> Continuous Internal Assessment (CIA) carries 40% and End Semester Examination (ESE) carries 60%.</li>
          <li><b>Relative Grading:</b> Performance is evaluated on a 10-point letter grading system (O, A+, A, B+, B, C, U).</li>
          <li><b>Fast-Track Semester:</b> High-performing students (CGPA ≥ 8.5) may complete electives in semesters 5–7 and undertake full-time industry capstone in semester 8.</li>
        </ul>
      `
    };
  }

  if (target === 'scheme-exam') {
    return {
      title: `Scheme of Examination — ${deptFullName}`,
      content: `
        <h4>Internal Assessment (40 Marks)</h4>
        <ul>
          <li><b>Internal Assessment Tests (IAT I &amp; II):</b> Two centralized examinations (each 100 marks converted to 20 marks).</li>
          <li><b>Experiential Assignment / Project:</b> Industry-aligned hands-on problem solving (10 marks).</li>
          <li><b>Quiz, Seminar &amp; Technical Presentation:</b> Active classroom engagement (10 marks).</li>
        </ul>
        <h4>End Semester Examination (60 Marks)</h4>
        <p>Autonomous central evaluation conducted for 100 marks with Bloom's Taxonomy-based question paper and converted to 60 marks.</p>
      `
    };
  }

  if (target === 'academic-help') {
    return {
      title: 'Academic Dean Desk & Student Support',
      content: `
        <p>The Academic Office assists students with curriculum clarifications, elective selections, re-evaluation requests, and academic calendar scheduling.</p>
        <h4>Office Details</h4>
        <p><b>Dean (Academics):</b> Dr. R. Manimegalai, Ph.D.<br>
        <b>Location:</b> Administrative Block, Ground Floor (Room A-108)<br>
        <b>Direct Phone:</b> +91 422 2369900 (Ext. 215)<br>
        <b>Email:</b> <a href="mailto:academics@siet.ac.in">academics@siet.ac.in</a></p>
        <p><b>Student Hours:</b> Monday to Friday, 3:30 PM – 5:00 PM</p>
      `
    };
  }

  return { title: 'Academic Document', content: '<p>Details will be updated shortly.</p>' };
}

export function renderCurriculumTable(deptId = 'cse', semNum = 1) {
  const dept = getDeptCurriculum(deptId);
  const data = dept?.semesters?.[semNum] || dept?.semesters?.[1] || {
    name: `Semester ${semNum}`,
    credits: 0,
    courses: [],
    totals: { l: 0, t: 0, p: 0, c: 0 }
  };

  return `
    <div class="curr-sem-header">
      <div class="curr-sem-title-box">
        <span class="curr-sem-icon">${libIcons.book}</span>
        <h3 id="active-sem-name">${data.name}</h3>
      </div>
      <span class="curr-credits-pill">Total Credits: <b id="active-sem-credits">${data.credits}</b></span>
    </div>
    <div class="curr-table-wrapper">
      <table class="curr-table" aria-label="Course curriculum table for ${dept.degree} ${dept.name} ${data.name}">
        <thead>
          <tr>
            <th class="th-num">S.No.</th>
            <th>Course Code</th>
            <th>Course Title</th>
            <th class="th-credit">L</th>
            <th class="th-credit">T</th>
            <th class="th-credit">P</th>
            <th class="th-credit">C</th>
          </tr>
        </thead>
        <tbody>
          ${data.courses
            .map(
              (c) => `
            <tr>
              <td class="td-num">${c.sno}</td>
              <td class="td-code">${c.code}</td>
              <td class="td-title">${c.title}</td>
              <td class="td-credit">${c.l}</td>
              <td class="td-credit">${c.t}</td>
              <td class="td-credit">${c.p}</td>
              <td class="td-credit"><b>${c.c}</b></td>
            </tr>
          `
            )
            .join('')}
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3" style="text-align:left;padding-left:16px"><b>Total</b></td>
            <td class="td-credit">${data.totals.l}</td>
            <td class="td-credit">${data.totals.t}</td>
            <td class="td-credit">${data.totals.p}</td>
            <td class="td-credit">${data.totals.c}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  `;
}

export const currSemestersList = [
  [1, 'Semester I'],
  [2, 'Semester II'],
  [3, 'Semester III'],
  [4, 'Semester IV'],
  [5, 'Semester V'],
  [6, 'Semester VI'],
  [7, 'Semester VII'],
  [8, 'Semester VIII']
];

export function CurriculumPage() {
  const hash = typeof location !== 'undefined' ? (location.hash || '') : '';
  const qIndex = hash.indexOf('?');
  if (qIndex !== -1) {
    const params = new URLSearchParams(hash.slice(qIndex + 1));
    const queryDept = params.get('dept');
    if (queryDept) {
      const matched = getDeptCurriculum(queryDept);
      if (matched) currActiveDept = matched.id;
    }
  }
  const activeDept = getDeptCurriculum(currActiveDept);

  return `<main class="siet-curr-page">
  ${sietHudHeader('Curriculum', 'Curriculum', 'Academics', '#/academics', 'SYSTEM ONLINE / ACADEMIC PROFILE / SIET-OS')}

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
              <a href="#/curriculum" class="siet-curr-navlink is-active">
                <span class="navlink-content">
                  <span class="navlink-icon">${libIcons.book}</span>
                  <span>Curriculum</span>
                </span>
                <span class="navlink-arrow">›</span>
              </a>
              <a href="#/academic-calendar" class="siet-curr-navlink">
                <span class="navlink-content">
                  <span class="navlink-icon">${currIcons.calendar}</span>
                  <span>Academic Calendar</span>
                </span>
                <span class="navlink-arrow">›</span>
              </a>
              <button type="button" class="siet-curr-navlink js-curr-modal-trigger" data-target="syllabus-r2024">
                <span class="navlink-content">
                  <span class="navlink-icon">${libIcons.document}</span>
                  <span>Syllabus</span>
                </span>
                <span class="navlink-arrow">›</span>
              </button>
              <button type="button" class="siet-curr-navlink js-curr-modal-trigger" data-target="regulations-r2024">
                <span class="navlink-content">
                  <span class="navlink-icon">${currIcons.shield}</span>
                  <span>Regulations</span>
                </span>
                <span class="navlink-arrow">›</span>
              </button>
              <button type="button" class="siet-curr-navlink js-curr-modal-trigger" data-target="curriculum-r2024">
                <span class="navlink-content">
                  <span class="navlink-icon">${currIcons.database}</span>
                  <span>Academic Resources</span>
                </span>
                <span class="navlink-arrow">›</span>
              </button>
            </nav>
          </div>
        </aside>

        <!-- Center: Interactive Curriculum Viewer -->
        <main class="siet-curr-center reveal">
          <!-- Department Tabs (Alphabetical order) -->
          <div class="curr-dept-tabs" role="tablist" aria-label="Select Engineering Department">
            ${[...allDepartments]
              .sort((a, b) => a.code.localeCompare(b.code))
              .map(
                (d) => `
              <button type="button" 
                      class="curr-dept-tab ${d.id === activeDept.id ? 'is-active' : ''}" 
                      role="tab" 
                      aria-selected="${d.id === activeDept.id ? 'true' : 'false'}" 
                      data-dept="${d.id}"
                      title="${d.degree} ${d.name} (${d.code})">
                ${d.code}
              </button>
            `
              )
              .join('')}
          </div>

          <div class="curr-center-eyebrow">CURRICULUM</div>
          <h2 class="curr-center-title" id="curr-dept-title">${activeDept.degree} ${activeDept.name}</h2>
          <p class="curr-center-desc" id="curr-dept-desc">${activeDept.desc}</p>

          <!-- Semester Tabs (Image 2 style) -->
          <div class="curr-sem-tabs" role="tablist" aria-label="Select Semester">
            ${currSemestersList
              .map(
                ([num, name]) => `
              <button type="button" 
                      class="curr-sem-tab ${num === currActiveSem ? 'is-active' : ''}" 
                      role="tab" 
                      aria-selected="${num === currActiveSem ? 'true' : 'false'}" 
                      data-sem="${num}">
                ${name}
              </button>
            `
              )
              .join('')}
          </div>

          <!-- Dynamic Semester Table Area -->
          <div id="curr-table-area">
            ${renderCurriculumTable(activeDept.id, currActiveSem)}
          </div>
        </main>
      </div>
    </div>
  </section>

  <!-- Ambient Bottom Wave and Watermark -->
  <div class="siet-curr-bottom-decor" aria-hidden="true">
    <div class="siet-curr-watermark">
      <svg viewBox="0 0 280 120" fill="none" stroke="#256e48" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round">
        <path d="M10 110h260M25 110V45l45-22 45 22v65M115 110V32l35-18 35 18v78M185 110V45l40-20 40 20v65" />
        <line x1="45" y1="58" x2="45" y2="110" />
        <line x1="60" y1="58" x2="60" y2="110" />
        <line x1="85" y1="58" x2="85" y2="110" />
        <line x1="100" y1="58" x2="100" y2="110" />
        <rect x="135" y="48" width="16" height="22" />
        <rect x="160" y="48" width="16" height="22" />
        <rect x="145" y="80" width="20" height="30" rx="6" />
        <line x1="205" y1="58" x2="205" y2="110" />
        <line x1="220" y1="58" x2="220" y2="110" />
        <line x1="245" y1="58" x2="245" y2="110" />
      </svg>
    </div>
    <div class="siet-curr-bottom-wave">
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none" fill="none">
        <path d="M0,100 L0,25 C200,85 450,95 720,60 C980,25 1200,35 1440,0 L1440,100 Z" fill="#073b21" />
        <path d="M0,100 L0,45 C240,92 480,102 760,70 C1020,38 1240,48 1440,20 L1440,100 Z" fill="#0b522f" />
        <path d="M0,100 L0,70 C280,105 520,108 800,82 C1060,56 1280,68 1440,45 L1440,100 Z" fill="#eab308" />
      </svg>
    </div>
  </div>

  <!-- Curriculum Modal Dialog -->
  <div class="siet-lib-modal js-curr-modal" role="dialog" aria-modal="true" aria-hidden="true">
    <div class="siet-lib-modal-box">
      <div class="siet-lib-modal-header">
        <h3 class="js-curr-modal-title">Academic Document</h3>
        <button type="button" class="siet-lib-modal-close js-curr-modal-close" aria-label="Close modal">×</button>
      </div>
      <div class="siet-lib-modal-body js-curr-modal-body"></div>
    </div>
  </div>
</main>`;
}
