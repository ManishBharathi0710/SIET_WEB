import { sietHudHeader } from '../../components/ui/PageHeader.js';
import { departmentDetails } from '../../data/departmentsData.js';
import { getDeptCurriculum } from '../../data/curriculumData.js';
import { renderCurriculumTable } from './CurriculumPage.js';
import './Academics.css';

export function DepartmentDetailPage(dept) {
  const detailKey =
    Object.keys(departmentDetails).find((k) => k.toLowerCase() === dept.toLowerCase()) || dept;
  const detail = departmentDetails[detailKey] || departmentDetails.default || {};
  const courses = detail.courses && detail.courses.length ? detail.courses : [['B.E - ' + dept, '60']];
  const sections = detail.sectionsList || [
    'About the Department',
    'Why ' + dept + ' at SIET',
    'Unique Facilities',
    'Achievements',
    'Vision & Mission',
    'Programme Educational Objectives',
    'Programme Specific Outcomes',
    'Curriculum',
    'Feedback'
  ];
  const deptCurriculum = getDeptCurriculum(dept);

  return `<main class="department-detail-page">
    ${sietHudHeader(
      dept,
      dept,
      'Academics',
      '#/departments',
      'SYSTEM ONLINE / ACADEMIC PROFILE / SIET-OS'
    )}
    <div class="department-detail-layout">
      <aside class="department-detail-nav" aria-label="Department sections">
        ${sections
          .map(
            (section, index) =>
              `<button class="${index === 0 ? 'active' : ''}" type="button" data-section="department-section-${index}">${section}</button>`
          )
          .join('')}
      </aside>
      <article class="department-detail-content">
        ${sections
          .map((section, index) => {
            const sectionId = `department-section-${index}`;
            const isOpen = index === 0 ? ' is-open' : '';
            if (section === 'Curriculum') {
              return `<section id="${sectionId}" class="department-copy department-curriculum-section${isOpen}">
                <h2>Curriculum</h2>
                <div class="dept-curriculum-banner">
                  <div>
                    <span class="curr-badge">AUTONOMOUS R2024</span>
                    <h2>${dept} Curriculum Structure</h2>
                    <p>Explore the full 8-semester course curriculum, subject codes, lecture/practical hours and credits designed for ${dept}.</p>
                  </div>
                  <a href="#/curriculum?dept=${deptCurriculum.id}" class="dept-curriculum-action">Open Full 8-Semester Interactive Curriculum →</a>
                </div>
                <div class="curr-table-wrapper">${renderCurriculumTable(deptCurriculum.id, 1)}</div>
              </section>`;
            }
            const customContent =
              detail.sections &&
              (detail.sections[section] ||
                detail.sections[section.replaceAll(' & ', ' and ')] ||
                detail.sections[section.replaceAll(' and ', ' & ')] ||
                detail.sections[section.replace(dept, '').trim()]);
            if (customContent) {
              return `<section id="${sectionId}" class="department-copy${isOpen}">${customContent}</section>`;
            }
            if (section === 'About the Department') {
              return `<section id="${sectionId}" class="department-copy${isOpen}">
                <div class="department-intake">
                  <table>
                    <thead><tr><th>Courses Offered</th><th>Intake</th></tr></thead>
                    <tbody>${courses.map(([course, intake]) => `<tr><td>${course}</td><td>${intake}</td></tr>`).join('')}</tbody>
                  </table>
                </div>
                <h2>About the Department</h2>
                ${detail.overview && detail.overview.startsWith('<p>') ? detail.overview : `<p>${detail.overview || ''}</p>`}
              </section>`;
            }
            return `<section id="${sectionId}" class="department-copy department-placeholder${isOpen}">
              <h2>${section}</h2>
              <p>${section} information for ${dept} will be updated by the department office.</p>
            </section>`;
          })
          .join('')}
      </article>
    </div>
  </main>`;
}

export const departmentPage = DepartmentDetailPage;
