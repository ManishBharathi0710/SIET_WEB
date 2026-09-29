const fs = require('fs');
const path = require('path');

// Test importing our modular pages using dynamic import in Node
async function runRouteTests() {
  console.log('=== ROUTE RENDERING TEST SUITE ===');

  const { HomePage } = await import('../client/src/pages/HomePage.js');
  const { VisionMissionPage } = await import('../client/src/pages/about/VisionMissionPage.js');
  const { ChairmanPage } = await import('../client/src/pages/about/ChairmanPage.js');
  const { PrincipalPage } = await import('../client/src/pages/about/PrincipalPage.js');
  const { CoreBeliefsPage } = await import('../client/src/pages/about/CoreBeliefsPage.js');
  const { programOutcomesPage, coreValuesPage, philosophyPage } = await import('../client/src/pages/about/OtherAboutPages.js');
  const { ProgrammesPage } = await import('../client/src/pages/admissions/ProgrammesPage.js');
  const { EnquiryPage } = await import('../client/src/pages/admissions/EnquiryPage.js');
  const { ReferralPage } = await import('../client/src/pages/admissions/ReferralPage.js');
  const { DepartmentsPage } = await import('../client/src/pages/academics/DepartmentsPage.js');
  const { DepartmentDetailPage } = await import('../client/src/pages/academics/DepartmentDetailPage.js');
  const { CurriculumPage } = await import('../client/src/pages/academics/CurriculumPage.js');
  const { AcademicCalendarPage } = await import('../client/src/pages/academics/AcademicCalendarPage.js');
  const { LibraryPage } = await import('../client/src/pages/academics/LibraryPage.js');
  const { careersPage } = await import('../client/src/pages/common/CareersPage.js');
  const { entrepreneurshipPage } = await import('../client/src/pages/placements/EntrepreneurshipPage.js');
  const { placementsDashboardPage } = await import('../client/src/pages/placements/PlacementsDashboardPage.js');
  const { internalPage } = await import('../client/src/pages/common/InternalPage.js');
  const { Header } = await import('../client/src/components/layout/Header.js');
  const { Footer } = await import('../client/src/components/layout/Footer.js');
  const { VideoModal } = await import('../client/src/components/common/VideoModal.js');
  const { placementDetailsModal } = await import('../client/src/components/common/PlacementModal.js');

  const routesToTest = [
    { name: 'Header', fn: () => Header() },
    { name: 'Footer', fn: () => Footer() },
    { name: 'VideoModal', fn: () => VideoModal() },
    { name: 'PlacementModal (10 LPA)', fn: () => placementDetailsModal('10') },
    { name: 'PlacementModal (33 LPA)', fn: () => placementDetailsModal('33') },
    { name: 'Home Page', fn: () => HomePage() },
    { name: 'Vision & Mission', fn: () => VisionMissionPage() },
    { name: 'Chairman Desk', fn: () => ChairmanPage() },
    { name: 'Principal Desk', fn: () => PrincipalPage() },
    { name: 'Core Beliefs', fn: () => CoreBeliefsPage() },
    { name: 'Program Outcomes', fn: () => programOutcomesPage() },
    { name: 'Core Values', fn: () => coreValuesPage() },
    { name: 'Philosophy', fn: () => philosophyPage() },
    { name: 'Programmes', fn: () => ProgrammesPage() },
    { name: 'Admission Enquiry', fn: () => EnquiryPage(false) },
    { name: 'Apply', fn: () => EnquiryPage(true) },
    { name: 'Referral', fn: () => ReferralPage() },
    { name: 'Departments Index', fn: () => DepartmentsPage() },
    { name: 'Curriculum', fn: () => CurriculumPage() },
    { name: 'Academic Calendar', fn: () => AcademicCalendarPage() },
    { name: 'Central Library', fn: () => LibraryPage() },
    { name: 'Careers', fn: () => careersPage() },
    { name: 'Entrepreneurship', fn: () => entrepreneurshipPage() },
    { name: 'Placements Dashboard', fn: () => placementsDashboardPage('placements') },
    { name: 'Placements Higher Ed', fn: () => placementsDashboardPage('placements/higher-education') },
    { name: 'Placements Gov Services', fn: () => placementsDashboardPage('placements/government-services') },
    { name: 'Campus Life (Internal)', fn: () => internalPage('campus-life') },
    { name: 'Facilities (Internal)', fn: () => internalPage('facilities') },
    { name: 'Hostel (Internal)', fn: () => internalPage('hostel') },
    { name: 'Transport (Internal)', fn: () => internalPage('transport') },
    { name: 'Sports (Internal)', fn: () => internalPage('sports') },
    { name: 'Clubs (Internal)', fn: () => internalPage('clubs') },
    { name: 'NCC (Internal)', fn: () => internalPage('ncc') },
    { name: 'Centres of Excellence (Internal)', fn: () => internalPage('centres-of-excellence') },
    { name: 'Accreditations (Internal)', fn: () => internalPage('accreditations') },
    { name: 'IQAC (Internal)', fn: () => internalPage('iqac') },
    { name: 'Contact (Internal)', fn: () => internalPage('contact') },
    { name: 'Department: Computer Science & Engineering', fn: () => DepartmentDetailPage('Computer Science & Engineering') },
    { name: 'Department: Artificial Intelligence & Data Science', fn: () => DepartmentDetailPage('Artificial Intelligence & Data Science') },
    { name: 'Department: Biomedical Engineering', fn: () => DepartmentDetailPage('Biomedical Engineering') },
    { name: 'Department: Biotechnology', fn: () => DepartmentDetailPage('Biotechnology') },
    { name: 'Department: Mechanical Engineering', fn: () => DepartmentDetailPage('Mechanical Engineering') },
    { name: 'Department: Agricultural Engineering', fn: () => DepartmentDetailPage('Agricultural Engineering') }
  ];

  let passed = 0;
  let failed = 0;

  for (const t of routesToTest) {
    try {
      const html = t.fn();
      if (typeof html !== 'string' || html.length < 50) {
        throw new Error(`Output too short or invalid type: length=${html ? html.length : 0}`);
      }
      console.log(`✓ [PASS] ${t.name} (rendered ${html.length.toLocaleString()} chars)`);
      passed++;
    } catch (err) {
      console.error(`✕ [FAIL] ${t.name}:`, err.message);
      failed++;
    }
  }

  console.log(`\n=== RESULTS: ${passed} passed, ${failed} failed ===`);
  if (failed > 0) process.exit(1);
}

runRouteTests().catch(err => {
  console.error('Test execution failed:', err);
  process.exit(1);
});
