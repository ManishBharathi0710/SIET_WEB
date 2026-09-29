const fs = require('fs');
const postcss = require('postcss');

const files = [
  'client/src/styles/variables.css',
  'client/src/styles/global.css',
  'client/src/styles/utilities.css',
  'client/src/components/layout/Header.css',
  'client/src/components/layout/Footer.css',
  'client/src/components/common/VideoModal.css',
  'client/src/components/common/PlacementModal.css',
  'client/src/components/ui/PageHeader.css',
  'client/src/components/ui/SuperstarCard.css',
  'client/src/sections/home/HeroSection.css',
  'client/src/sections/home/ProgrammesSection.css',
  'client/src/sections/home/AboutSection.css',
  'client/src/sections/home/CampusLifeSection.css',
  'client/src/sections/home/SpecialLabsSection.css',
  'client/src/sections/home/EventsSection.css',
  'client/src/sections/placements/PlacementMarqueeSection.css',
  'client/src/pages/about/About.css',
  'client/src/pages/academics/Academics.css',
  'client/src/pages/admissions/Admissions.css',
  'client/src/pages/campus/Campus.css',
  'client/src/pages/placements/Placements.css',
  'client/src/pages/common/Careers.css',
  'client/src/pages/common/InternalPage.css'
];

files.forEach(f => {
  try {
    const c = fs.readFileSync(f, 'utf8');
    postcss.parse(c);
  } catch (err) {
    console.error(`Error in ${f}:`, err.message);
  }
});
console.log('All files parsed with PostCSS check complete.');
