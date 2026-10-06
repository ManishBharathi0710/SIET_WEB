import { Header } from '../components/layout/Header.js';
import { Footer } from '../components/layout/Footer.js';
import { VideoModal } from '../components/common/VideoModal.js';
import { placementDetailsModal } from '../components/common/PlacementModal.js';

import { HomePage } from '../pages/HomePage.js';
import { VisionMissionPage } from '../pages/about/VisionMissionPage.js';
import { ChairmanPage } from '../pages/about/ChairmanPage.js';
import { PrincipalPage } from '../pages/about/PrincipalPage.js';
import { CoreBeliefsPage } from '../pages/about/CoreBeliefsPage.js';
import { programOutcomesPage, coreValuesPage, philosophyPage } from '../pages/about/OtherAboutPages.js';

import { ProgrammesPage } from '../pages/admissions/ProgrammesPage.js';
import { EnquiryPage } from '../pages/admissions/EnquiryPage.js';
import { ReferralPage } from '../pages/admissions/ReferralPage.js';

import { DepartmentsPage } from '../pages/academics/DepartmentsPage.js';
import { DepartmentDetailPage } from '../pages/academics/DepartmentDetailPage.js';
import {
  CurriculumPage,
  currActiveDept,
  currActiveSem,
  setCurrActiveDept,
  setCurrActiveSem,
  renderCurriculumTable,
  getCurrModalData
} from '../pages/academics/CurriculumPage.js';
import { AcademicCalendarPage } from '../pages/academics/AcademicCalendarPage.js';
import { LibraryPage, libModalData } from '../pages/academics/LibraryPage.js';

import { careersPage } from '../pages/common/CareersPage.js';
import { entrepreneurshipPage, initEntrepreneurshipEvents } from '../pages/placements/EntrepreneurshipPage.js';
import { placementsDashboardPage, initPlacementsDynamicKpi } from '../pages/placements/PlacementsDashboardPage.js';
import { HigherEducationPage, initHigherEducation } from '../pages/admissions/HigherEducationPage.js';
import { internalPage } from '../pages/common/InternalPage.js';
import { initTransportCreativePage, initNccNssCreativePage } from '../pages/campus/creativeCampusPages.js';

import { ugPrograms, pgPrograms, ugProgramsDetailed, pgProgramsDetailed, bottomBannerHtml } from '../data/programmesData.js';
import { programmeCards } from '../sections/home/ProgrammesSection.js';
import { placementTierData } from '../data/placementsData.js';
import { getDeptCurriculum } from '../data/curriculumData.js';
import { careerUnits } from '../data/careersData.js';
import { icon } from '../utils/icons.js';
import { $, $$, titleCase, observe, animateCounter } from '../utils/domUtils.js';

let appRoot = null;

export function route() {
  const raw = decodeURIComponent(location.hash.replace(/^#\/?/, '')).replace(/\/$/, '');
  return raw.split('?')[0];
}

export function routeParams() {
  const raw = decodeURIComponent(location.hash.replace(/^#\/?/, ''));
  const qIndex = raw.indexOf('?');
  if (qIndex === -1) return new URLSearchParams();
  return new URLSearchParams(raw.slice(qIndex + 1));
}

export function render() {
  if (!appRoot) return;
  const r = route();
  let content = '';

  const isHigherEd = (
    r === 'higher-education' ||
    r === 'placements/higher-education' ||
    r === 'explore/higher-education' ||
    r === 'admissions/higher-education' ||
    r === 'explore-higher-education' ||
    r === 'explore'
  );

  if (!r) {
    content = HomePage();
  } else if (r === 'vision-mission' || r === 'about') {
    content = VisionMissionPage();
  } else if (r === 'core-beliefs') {
    content = CoreBeliefsPage();
  } else if (r === 'program-outcomes') {
    content = programOutcomesPage();
  } else if (r === 'core-values') {
    content = coreValuesPage();
  } else if (r === 'philosophy') {
    content = philosophyPage();
  } else if (r === 'chairman') {
    content = ChairmanPage();
  } else if (r === 'principal') {
    content = PrincipalPage();
  } else if (r === 'admission-enquiry' || r === 'apply') {
    content = EnquiryPage(r === 'apply');
  } else if (r === 'admission-referral' || r === 'referral') {
    content = ReferralPage();
  } else if (r === 'programmes') {
    content = ProgrammesPage();
  } else if (r === 'departments') {
    content = DepartmentsPage();
  } else if (r === 'careers') {
    content = careersPage();
  } else if (r === 'library') {
    content = LibraryPage();
  } else if (r === 'curriculum') {
    content = CurriculumPage();
  } else if (r === 'academic-calendar') {
    content = AcademicCalendarPage();
  } else if (r === 'entrepreneurship' || r === 'career-support/entrepreneurship' || r === 'placements/entrepreneurship') {
    content = entrepreneurshipPage();
  } else if (isHigherEd) {
    content = HigherEducationPage();
  } else {
    content = internalPage(r);
  }

  // If HigherEducationPage is rendered, it includes the exact reference design footer.
  // Standard site Header is always preserved at the top.
  appRoot.innerHTML = isHigherEd ? (Header() + content) : (Header() + content + Footer());
  document.title = isHigherEd 
    ? 'Higher Education & Admissions | Sri Shakthi Institute of Engineering & Technology'
    : `${r ? titleCase(r.replaceAll('-', ' ')) : 'Sri Shakthi'} | SIET`;
  bind();
  window.scrollTo(0, 0);
}

export function bind() {
  const r = route();

  const isHigherEd = (
    r === 'higher-education' ||
    r === 'placements/higher-education' ||
    r === 'explore/higher-education' ||
    r === 'admissions/higher-education' ||
    r === 'explore-higher-education' ||
    r === 'explore'
  );

  if (isHigherEd) {
    initHigherEducation();
  }

  if (r?.startsWith('placements') || r === 'entrepreneurship' || r === 'career-support/entrepreneurship') {
    if (r === 'placements/entrepreneurship' || r === 'entrepreneurship' || r === 'career-support/entrepreneurship') {
      document.title = 'Entrepreneurship & Incubation | Sri Shakthi Institute of Engineering & Technology';
      initEntrepreneurshipEvents();
    } else if (r === 'placements/higher-education') {
      document.title = 'Higher Education & Global Admissions | Sri Shakthi Institute of Engineering & Technology';
    } else if (r === 'placements/government-services') {
      document.title = 'Civil Services & Government Careers | Sri Shakthi Institute of Engineering & Technology';
    } else {
      document.title = 'Placements & Career Excellence | Sri Shakthi Institute of Engineering & Technology';
      initPlacementsDynamicKpi();
    }
  }

  if (r === 'chairman') {
    $('.siet-cd-kicker')?.replaceChildren("THE CHAIRMAN'S DESK");
    document.title = "The Chairman's Desk | SIET";
  }
  if (r === 'principal') {
    document.title = 'From the Principal | SIET';
  }
  if (r === 'core-beliefs') {
    document.title = 'Core Beliefs | SIET';
  }
  if (r === 'library') {
    document.title = 'Central Library | Sri Shakthi Institute of Engineering & Technology';
  }
  if (r === 'curriculum') {
    const dept = getDeptCurriculum(currActiveDept);
    if (dept) {
      document.title = `${dept.degree} ${dept.name} Curriculum | Sri Shakthi Institute of Engineering & Technology`;
    }
  }
  if (r === 'academic-calendar') {
    document.title = 'Academic Calendar | Sri Shakthi Institute of Engineering & Technology';
  }
  if (r === 'departments') {
    document.title = 'Departments | Sri Shakthi Institute of Engineering & Technology';
  }
  if (r === 'programmes') {
    document.title = 'UG & PG Programmes | Sri Shakthi Institute of Engineering & Technology';
  }
  if (r === 'transport') {
    document.title = 'Transport & Fleet Mobility Network | Sri Shakthi Institute of Engineering & Technology';
    initTransportCreativePage();
  }
  if (r === 'ncc') {
    document.title = 'NCC Army Wing & NSS National Service Corps | Sri Shakthi Institute of Engineering & Technology';
    initNccNssCreativePage();
  }

  // Filter tabs on Programmes page
  $$('.siet-prog-filter-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      $$('.siet-prog-filter-btn').forEach((b) => {
        b.classList.toggle('is-active', b === btn);
      });
      const grid = $('#programmes-cards-grid');
      const cards = $$('.siet-prog-card', grid);
      cards.forEach((card) => {
        const cat = card.dataset.category || '';
        const level = card.dataset.level || '';
        if (filter === 'all' || cat === filter || level === filter) {
          card.style.display = '';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Sync Course Level with Preferred Department in Enquiry and Referral forms
  const setupLevelSync = (levelSelector, courseSelector) => {
    const levelEl = $(levelSelector);
    const courseEl = $(courseSelector);
    if (!levelEl || !courseEl) return;
    levelEl.addEventListener('change', () => {
      const val = levelEl.value;
      const currentVal = courseEl.value;
      if (val === 'UG') {
        courseEl.innerHTML = `<option value="">Select Preferred Department</option>${ugProgramsDetailed
          .map((p) => `<option value="${p.fullName}">${p.fullName}</option>`)
          .join('')}`;
      } else if (val === 'PG') {
        courseEl.innerHTML = `<option value="">Select Preferred Department</option>${pgProgramsDetailed
          .map((p) => `<option value="${p.fullName}">${p.fullName}</option>`)
          .join('')}`;
      } else {
        courseEl.innerHTML = `
          <option value="">Select Preferred Department</option>
          <optgroup label="Undergraduate (UG) Programmes">
            ${ugProgramsDetailed.map((p) => `<option value="${p.fullName}">${p.fullName}</option>`).join('')}
          </optgroup>
          <optgroup label="Postgraduate (PG) Programmes">
            ${pgProgramsDetailed.map((p) => `<option value="${p.fullName}">${p.fullName}</option>`).join('')}
          </optgroup>
        `;
      }
      if ([...courseEl.options].some((o) => o.value === currentVal)) {
        courseEl.value = currentVal;
      }
    });
  };
  setupLevelSync('select[name="level"]', 'select[name="course"]');
  setupLevelSync('select[name="candidate_level"]', 'select[name="candidate_course"]');

  // Library modal triggers
  $$('.js-lib-modal-trigger').forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.target;
      const modal = $('.js-lib-modal');
      const titleEl = $('.js-lib-modal-title');
      const bodyEl = $('.js-lib-modal-body');
      if (!modal || !titleEl || !bodyEl) return;
      const data = libModalData[target] || {
        title: 'Library Information',
        content: '<p>Details will be updated shortly.</p>'
      };
      titleEl.textContent = data.title;
      bodyEl.innerHTML = data.content;
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });

  $('.js-lib-modal-close')?.addEventListener('click', () => {
    const modal = $('.js-lib-modal');
    if (modal) {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  });

  $('.js-lib-modal')?.addEventListener('click', (e) => {
    if (e.target.classList.contains('js-lib-modal')) {
      e.target.classList.remove('open');
      e.target.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  });

  // Library search submission handler
  $('.js-lib-search')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = $('.js-lib-search-input');
    const query = (input?.value || '').trim();
    const modal = $('.js-lib-modal');
    const titleEl = $('.js-lib-modal-title');
    const bodyEl = $('.js-lib-modal-body');
    if (!modal || !titleEl || !bodyEl) return;
    titleEl.textContent = query ? `Search Results: "${query}"` : 'Library Catalogue Search';
    bodyEl.innerHTML = `
      <p>Searching Central Library OPAC &amp; digital collections for <b>${query || 'all subjects'}</b>:</p>
      <h4>Matching Records &amp; Availability:</h4>
      <ul>
        <li><span class="siet-lib-resource-badge">Print Volume</span> <b>Artificial Intelligence: A Modern Approach</b> — <i>Available (Shelf 4B, 3 copies)</i></li>
        <li><span class="siet-lib-resource-badge">E-Journal</span> <b>IEEE Transactions on Pattern Analysis and Machine Intelligence</b> — <i>Full-text Online</i></li>
        <li><span class="siet-lib-resource-badge">Research Project</span> <b>Smart Agro-Robotics &amp; Drone Systems (2025-26)</b> — <i>Reference Section R-08</i></li>
        <li><span class="siet-lib-resource-badge">Textbook</span> <b>Data Structures and Algorithm Analysis in C++ (Mark Allen Weiss)</b> — <i>Available (Shelf 2A)</i></li>
      </ul>
      <p style="margin-top:14px;color:#537563;font-size:13px">Present your institutional Smart ID card at the circulation counter to reserve or issue physical books.</p>
    `;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  });

  // Department switcher helper for curriculum
  const updateActiveDept = (deptId) => {
    const dept = getDeptCurriculum(deptId);
    if (!dept) return;
    setCurrActiveDept(dept.id);

    $$('.curr-dept-tab').forEach((tab) => {
      const isSelected = tab.dataset.dept === dept.id;
      tab.classList.toggle('is-active', isSelected);
      tab.setAttribute('aria-selected', isSelected ? 'true' : 'false');
    });

    const titleEl = $('#curr-dept-title');
    const descEl = $('#curr-dept-desc');
    if (titleEl) titleEl.textContent = `${dept.degree} ${dept.name}`;
    if (descEl) descEl.textContent = dept.desc;

    const tableArea = $('#curr-table-area');
    if (tableArea) {
      tableArea.innerHTML = renderCurriculumTable(currActiveDept, currActiveSem);
    }

    document.title = `${dept.degree} ${dept.name} Curriculum | SIET`;
    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, '', `#/curriculum?dept=${dept.id}`);
    }
  };

  $$('.curr-dept-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      const deptId = tab.dataset.dept;
      if (deptId) updateActiveDept(deptId);
    });
  });

  const updateActiveSem = (semNum) => {
    const sem = Math.max(1, Math.min(8, Number(semNum) || 1));
    setCurrActiveSem(sem);

    $$('.curr-sem-tab').forEach((tab) => {
      const isSelected = Number(tab.dataset.sem) === sem;
      tab.classList.toggle('is-active', isSelected);
      tab.setAttribute('aria-selected', isSelected ? 'true' : 'false');
    });

    const tableArea = $('#curr-table-area');
    if (tableArea) {
      tableArea.innerHTML = renderCurriculumTable(currActiveDept, currActiveSem);
    }
  };

  $$('.curr-sem-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      const sem = Number(tab.dataset.sem);
      if (sem) updateActiveSem(sem);
    });
  });

  $$('.js-curr-modal-trigger').forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.target;
      const modal = $('.js-curr-modal');
      const titleEl = $('.js-curr-modal-title');
      const bodyEl = $('.js-curr-modal-body');
      if (!modal || !titleEl || !bodyEl) return;
      const data = getCurrModalData(target, currActiveDept);
      titleEl.textContent = data.title;
      bodyEl.innerHTML = data.content;
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });

  $('.js-curr-modal-close')?.addEventListener('click', () => {
    const modal = $('.js-curr-modal');
    if (modal) {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  });

  $('.js-curr-modal')?.addEventListener('click', (e) => {
    if (e.target.classList.contains('js-curr-modal')) {
      e.target.classList.remove('open');
      e.target.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  });

  // Mobile nav drawer
  const mobile = $('.mobile-nav');
  const backdrop = $('.mobile-nav-backdrop');
  const toggle = $('.institution-mobile-toggle');
  const closeBtn = $('.mobile-nav-close');

  const closeMenu = () => {
    mobile?.classList.remove('open');
    backdrop?.classList.remove('open');
    if (toggle) toggle.innerHTML = icon('menu');
    document.body.style.overflow = '';
  };
  const openMenu = () => {
    mobile?.classList.add('open');
    backdrop?.classList.add('open');
    if (toggle) toggle.innerHTML = icon('close');
    document.body.style.overflow = 'hidden';
  };

  toggle?.addEventListener('click', (e) => {
    e.stopPropagation();
    mobile?.classList.contains('open') ? closeMenu() : openMenu();
  });
  closeBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    closeMenu();
  });
  backdrop?.addEventListener('click', closeMenu);
  $$('.mobile-nav a').forEach((a) => a.addEventListener('click', closeMenu));
  $$('.mobile-nav-group-toggle').forEach((btn) =>
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const group = btn.closest('.mobile-nav-group');
      const wasOpen = group?.classList.contains('open');
      $$('.mobile-nav-group').forEach((g) => {
        g.classList.remove('open');
        g.querySelector('.mobile-nav-group-toggle')?.setAttribute('aria-expanded', 'false');
      });
      if (!wasOpen && group) {
        group.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    })
  );

  let navCloseTimer = null;
  const closeAllNavGroups = () => {
    $$('.institution-nav-group').forEach((g) => {
      g.classList.remove('open');
      g.querySelector('button')?.setAttribute('aria-expanded', 'false');
    });
  };

  $$('.institution-nav-group>button').forEach((btn) => {
    const group = btn.closest('.institution-nav-group');
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = group.classList.contains('open');
      closeAllNavGroups();
      if (!isOpen) {
        group.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });

    group.addEventListener('mouseenter', () => {
      if (navCloseTimer) clearTimeout(navCloseTimer);
      closeAllNavGroups();
      group.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    });

    group.addEventListener('mouseleave', () => {
      if (navCloseTimer) clearTimeout(navCloseTimer);
      navCloseTimer = setTimeout(() => {
        closeAllNavGroups();
      }, 180);
    });
  });

  $('.institution-navbar')?.addEventListener('mouseleave', () => {
    if (navCloseTimer) clearTimeout(navCloseTimer);
    navCloseTimer = setTimeout(() => {
      closeAllNavGroups();
    }, 140);
  });

  $$('.institution-nav-group>div a').forEach((link) => {
    link.addEventListener('click', () => {
      closeAllNavGroups();
    });
  });

  // Career Tabs
  $$('.career-tabs button').forEach((btn) =>
    btn.addEventListener('click', () => {
      $$('.career-tabs button').forEach((b) => b.classList.toggle('active', b === btn));
      const unitKey = btn.dataset.unit || 'college';
      const unit = careerUnits[unitKey] || careerUnits.college;
      const titleEl = $('.career-intro h2');
      if (titleEl) titleEl.textContent = 'Sri Shakthi ' + unit.name;
      const descEl = $('.career-intro p');
      if (descEl) descEl.textContent = unit.desc;
      const subEl = $('.career-intro small');
      if (subEl) subEl.textContent = unit.subtitle;
      const selectCat = $('select[name="category"]');
      if (selectCat) {
        selectCat.innerHTML =
          `<option value="">Select Application Category</option>` +
          unit.cats.map((c) => `<option>${c[0]}</option>`).join('');
      }
      const catAside = $('.career-categories');
      if (catAside) {
        catAside.innerHTML =
          `<div class="career-side-title"><small>EXPLORE OPENINGS</small><h2>${unit.name} Openings</h2></div>` +
          unit.cats
            .map(
              (c, i) =>
                `<details ${i === 0 ? 'open' : ''}><summary>${c[0]} ${icon('down')}</summary><div>${c[1]
                  .map((role) => `<span>→ ${role}</span>`)
                  .join('')}</div></details>`
            )
            .join('') +
          `<div class="career-contact"><small>RECRUITMENT QUERIES</small><h3>Let’s build the future together.</h3><a href="mailto:careers@siet.ac.in">careers@siet.ac.in</a></div>`;
      }
    })
  );

  // Video modal
  $$('.js-video').forEach((b) =>
    b.addEventListener('click', () => {
      document.body.insertAdjacentHTML('beforeend', VideoModal());
      document.body.style.overflow = 'hidden';
      const modal = $('.video-modal');
      const close = () => {
        modal?.remove();
        document.body.style.overflow = '';
      };
      modal?.addEventListener('click', (e) => e.target === modal && close());
      $('.video-close', modal)?.addEventListener('click', close);
    })
  );

  // Programmes level toggle button on homepage
  $$('.toggle-btn').forEach((b) =>
    b.addEventListener('click', () => {
      $$('.toggle-btn').forEach((x) => x.classList.toggle('active', x === b));
      const isUG = b.dataset.level === 'UG';
      const progGridEl = $('#programme-grid');
      if (progGridEl) {
        progGridEl.innerHTML = programmeCards(isUG ? ugPrograms : pgPrograms) + (isUG ? bottomBannerHtml : '');
      }
      const countBadge = $('#prog-count-badge');
      const levelBadge = $('#prog-level-badge');
      if (countBadge) countBadge.textContent = isUG ? '14+' : '7+';
      if (levelBadge) levelBadge.textContent = isUG ? 'UG Programmes' : 'PG Programmes';
      observe();
    })
  );

  const progGrid = $('#programme-grid');
  progGrid?.addEventListener('click', (e) => {
    const card = e.target.closest('.programme-card-v2, .programme-card');
    if (!card) return;
    location.hash = '#/admission-enquiry';
  });
  progGrid?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const card = e.target.closest('.programme-card-v2, .programme-card');
      if (card) {
        e.preventDefault();
        card.click();
      }
    }
  });

  // Open Placement Modal helper
  function openPlacementModal(tierKey = '10') {
    const existing = $('.placement-modal');
    if (existing) existing.remove();
    document.body.insertAdjacentHTML('beforeend', placementDetailsModal(tierKey));
    document.body.style.overflow = 'hidden';
    const modal = $('.placement-modal');
    if (!modal) return;

    const closeModal = () => {
      modal.classList.add('closing');
      setTimeout(() => {
        modal.remove();
        document.body.style.overflow = '';
      }, 180);
    };

    $('.placement-modal-close', modal)?.addEventListener('click', closeModal);
    $('.js-close-pm', modal)?.addEventListener('click', closeModal);
    $('.placement-modal-backdrop', modal)?.addEventListener('click', closeModal);

    // Tab switching inside modal
    $$('.pm-tab-btn', modal).forEach((btn) => {
      btn.addEventListener('click', () => {
        const nextTier = btn.dataset.tier;
        if (nextTier) openPlacementModal(nextTier);
      });
    });
  }

  // Placement Stat Cards Interactivity
  $$('.ps-stat-card').forEach((card) => {
    card.addEventListener('click', () => {
      const tier = card.dataset.tier || '10';
      openPlacementModal(tier);
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const tier = card.dataset.tier || '10';
        openPlacementModal(tier);
      }
    });
    // Hover highlight effect on marquee logos
    card.addEventListener('mouseenter', () => {
      const tierKey = card.dataset.tier;
      const companies = placementTierData[tierKey]?.companies || [];
      const lowerNames = companies.map((c) => c.toLowerCase().replace(/[^a-z0-9]/g, ''));
      $$('.placement-marquee-item').forEach((item) => {
        const logoName = (item.dataset.logo || '').toLowerCase().replace(/[^a-z0-9]/g, '');
        const isMatch = lowerNames.some((c) => logoName.includes(c) || c.includes(logoName));
        item.classList.toggle('highlighted-by-card', isMatch);
      });
    });
    card.addEventListener('mouseleave', () => {
      $$('.placement-marquee-item').forEach((item) => item.classList.remove('highlighted-by-card'));
    });
  });

  // Explore Placements CTA
  $('.js-explore-placements')?.addEventListener('click', () => {
    const section = $('#placement-highlights') || $('.placement-right-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'center' });
      $$('.ps-stat-card').forEach((c) => {
        c.classList.add('pulse-highlight');
        setTimeout(() => c.classList.remove('pulse-highlight'), 1600);
      });
    }
  });

  $('.js-scroll-programmes')?.addEventListener('click', () => {
    $('.programmes-section')?.scrollIntoView({ behavior: 'smooth' });
  });
  $('.js-discover-btn')?.addEventListener('click', () => {
    $('.programmes-section')?.scrollIntoView({ behavior: 'smooth' });
  });
  $('.js-explore-campus')?.addEventListener('click', () => {
    $('.campus-gallery')?.scrollIntoView({ behavior: 'smooth' });
  });
  $$('.campus-gallery .gallery-card').forEach((card) => {
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });

  $$('.vision-tab-btn').forEach((btn) =>
    btn.addEventListener('click', () => {
      $$('.vision-tab-btn').forEach((x) => x.classList.toggle('active', x === btn));
      $$('.vision-content-pane').forEach((pane) =>
        pane.classList.toggle('active', pane.dataset.pane === btn.dataset.tab)
      );
    })
  );

  $$('.lab-pill-btn').forEach((btn) =>
    btn.addEventListener('click', () => {
      $$('.lab-pill-btn').forEach((x) => x.classList.toggle('active', x === btn));
      const cat = btn.dataset.cat;
      $$('.lab-card').forEach((card) => {
        if (cat === 'all' || card.dataset.cat === cat) {
          card.style.display = '';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
        }
      });
    })
  );

  $$('.lab-card').forEach((card) => {
    card.addEventListener('click', () => {
      location.hash = '#/centres-of-excellence';
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        location.hash = '#/centres-of-excellence';
      }
    });
  });

  $('.labs-nav-arrows .prev-btn')?.addEventListener('click', () => {
    const active = $('.lab-pill-btn.active');
    const pills = $$('.lab-pill-btn');
    const idx = pills.indexOf(active);
    const prev = pills[(idx - 1 + pills.length) % pills.length];
    prev?.click();
  });
  $('.labs-nav-arrows .next-btn')?.addEventListener('click', () => {
    const active = $('.lab-pill-btn.active');
    const pills = $$('.lab-pill-btn');
    const idx = pills.indexOf(active);
    const next = pills[(idx + 1) % pills.length];
    next?.click();
  });

  $$('.event-filter-pill').forEach((btn) =>
    btn.addEventListener('click', () => {
      $$('.event-filter-pill').forEach((x) => x.classList.toggle('active', x === btn));
      const cat = btn.dataset.cat;
      $$('.event-item-card').forEach((card) => {
        const cats = (card.dataset.cat || '').split(' ');
        if (cat === 'all' || cats.includes(cat)) {
          card.style.display = '';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
        }
      });
    })
  );

  $$('.event-item-card').forEach((card) => {
    card.addEventListener('click', () => {
      location.hash = '#/campus-life';
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        location.hash = '#/campus-life';
      }
    });
  });

  const featuredSlides = [
    {
      title: 'TechNovate 2026',
      tag: 'TECHNICAL SYMPOSIUM',
      desc: 'A platform to ideate, innovate and build solutions for a better tomorrow. Join us for a day of learning, networking and inspiration.',
      date: '28 Aug 2026',
      loc: 'Main Auditorium',
      time: '09:00 AM - 05:00 PM',
      bg: '/brand/events/featured-technovate.jpg'
    },
    {
      title: 'Hack-A-Shakthi 2026',
      tag: 'NATIONAL HACKATHON',
      desc: '36 hours of continuous coding, product design, and real-world industrial challenges with mentorship from top tech leaders.',
      date: '14 Sep 2026',
      loc: 'Innovation Centre & Techpark',
      time: '08:30 AM - 08:30 PM',
      bg: '/brand/techpark-hd.jpg'
    },
    {
      title: 'Sangamam Gala Night',
      tag: 'CULTURAL EXTRAVAGANZA',
      desc: 'An electrifying evening of classical dance, fusion music, dramatic arts, and celebration of intercultural heritage.',
      date: '16 Sep 2026',
      loc: 'Open Air Theatre',
      time: '05:00 PM - 10:30 PM',
      bg: '/brand/events/event-sangamam.jpg'
    }
  ];
  let featIdx = 0;
  const updateFeatSlide = () => {
    const card = $('.events-featured-card');
    if (!card) return;
    const s = featuredSlides[featIdx];
    const bg = $('.featured-bg-photo', card);
    const title = $('.featured-title', card);
    const tag = $('.featured-sub-tag', card);
    const desc = $('.featured-summary', card);
    const counter = $('.featured-counter', card);
    const rows = $$('.featured-meta-row span:last-child', card);
    if (bg) bg.style.backgroundImage = `url('${s.bg}')`;
    if (title) title.textContent = s.title;
    if (tag) tag.textContent = s.tag;
    if (desc) desc.textContent = s.desc;
    if (counter) counter.textContent = `0${featIdx + 1} / 03`;
    if (rows[0]) rows[0].textContent = s.date;
    if (rows[1]) rows[1].textContent = s.loc;
    if (rows[2]) rows[2].textContent = s.time;
  };
  $('.prev-feat')?.addEventListener('click', (e) => {
    e.stopPropagation();
    featIdx = (featIdx - 1 + featuredSlides.length) % featuredSlides.length;
    updateFeatSlide();
  });
  $('.next-feat')?.addEventListener('click', (e) => {
    e.stopPropagation();
    featIdx = (featIdx + 1) % featuredSlides.length;
    updateFeatSlide();
  });

  $$('.department-detail-nav button').forEach((button) =>
    button.addEventListener('click', () => {
      const target = document.getElementById(button.dataset.section);
      if (!target) return;
      $$('.department-detail-nav button').forEach((item) => item.classList.toggle('active', item === button));
      $$('.department-copy').forEach((section) => section.classList.toggle('is-open', section === target));
    })
  );

  $$('.club-detail-nav button').forEach((button) =>
    button.addEventListener('click', () => {
      const target = document.getElementById(button.dataset.section);
      if (!target) return;
      $$('.club-detail-nav button').forEach((item) => item.classList.toggle('active', item === button));
      $$('.club-detail-content section').forEach((section) => section.classList.toggle('is-open', section === target));
    })
  );

  // Referral form: Toggle Register Number for Current Student
  const relationSelect = $('select[name="referrer_relation"]');
  const regNoWrapper = $('#referrer-reg-no-wrapper');
  const regNoInput = $('#referrer_reg_no');
  if (relationSelect && regNoWrapper && regNoInput) {
    const handleRelationChange = () => {
      const isCurrentStudent = relationSelect.value === 'Current Student';
      if (isCurrentStudent) {
        regNoWrapper.style.display = 'block';
        regNoInput.required = true;
        regNoInput.disabled = false;
      } else {
        regNoWrapper.style.display = 'none';
        regNoInput.required = false;
        regNoInput.disabled = true;
        regNoInput.value = '';
      }
    };
    relationSelect.addEventListener('change', handleRelationChange);
    relationSelect.addEventListener('input', handleRelationChange);
    const form = relationSelect.closest('form');
    form?.addEventListener('reset', () => setTimeout(handleRelationChange, 0));
    handleRelationChange();
  }

  $$('.js-form').forEach((form) => form.addEventListener('submit', submitForm));
  observe();
}

async function submitForm(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const status = $('.status', form);
  const btn = $('button[type="submit"], .career-submit', form);
  if (status) {
    status.textContent = 'Submitting details…';
    status.style.color = '#0b7a48';
  }
  if (btn) btn.disabled = true;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  if (!data.name && data.referrer_name) data.name = `${data.referrer_name} (Ref for: ${data.candidate_name || 'Candidate'})`;
  if (!data.email && (data.referrer_email || data.candidate_email)) data.email = data.referrer_email || data.candidate_email;
  if (!data.phone && (data.referrer_phone || data.candidate_phone)) data.phone = data.referrer_phone || data.candidate_phone;
  if (!data.course && data.candidate_course) data.course = data.candidate_course;
  const fileInput = form.querySelector('input[type="file"]');
  if (fileInput?.files?.[0]) {
    data.fileName = fileInput.files[0].name;
    data.fileSize = `${Math.round(fileInput.files[0].size / 1024)} KB`;
  }
  try {
    const res = await fetch('/api/enquiries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const json = await res.json();
    if (status) {
      status.textContent = json.message || 'Thank you! Your details have been received.';
      status.style.color = res.ok ? '#075b36' : '#b3261e';
    }
    if (res.ok) form.reset();
  } catch (err) {
    if (status) {
      status.textContent = 'Thank you! Your details have been recorded.';
      status.style.color = '#075b36';
    }
    form.reset();
  } finally {
    if (btn) btn.disabled = false;
  }
}

const handleEscape = (e) => {
  if (e.key === 'Escape') {
    const recModal = document.getElementById('siet-records-modal');
    if (recModal && recModal.style.display !== 'none') {
      recModal.style.display = 'none';
      document.body.style.overflow = '';
    }
    $('.video-close')?.click();
    $('.mobile-nav-close')?.click();
    $('.placement-modal-close')?.click();
    $('.js-lib-modal-close')?.click();
    $('.js-curr-modal-close')?.click();
    $$('.institution-nav-group').forEach((g) => {
      g.classList.remove('open');
      g.querySelector('button')?.setAttribute('aria-expanded', 'false');
    });
  }
};

const handleDocClick = (e) => {
  if (!e.target.closest('.institution-nav-group>button')) {
    $$('.institution-nav-group').forEach((g) => {
      g.classList.remove('open');
      g.querySelector('button')?.setAttribute('aria-expanded', 'false');
    });
  }
};

export function mountSite(root) {
  appRoot = root;
  window.addEventListener('hashchange', render);
  window.addEventListener('keydown', handleEscape);
  document.addEventListener('click', handleDocClick);
  render();
  return () => {
    window.removeEventListener('hashchange', render);
    window.removeEventListener('keydown', handleEscape);
    document.removeEventListener('click', handleDocClick);
    document.body.style.overflow = '';
    appRoot = null;
  };
}
