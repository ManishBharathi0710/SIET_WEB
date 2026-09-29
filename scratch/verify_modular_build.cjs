const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('=== STEP 1: Running client build ===');
try {
  const buildOut = execSync('npm run build --workspace client', { encoding: 'utf8' });
  console.log(buildOut);
  console.log('Build succeeded with 0 errors!\n');
} catch (err) {
  console.error('Build failed!', err.stdout || err.message);
  process.exit(1);
}

console.log('=== STEP 2: Verifying directory structure ===');
const expectedDirs = [
  'client/src/components',
  'client/src/components/common',
  'client/src/components/layout',
  'client/src/components/ui',
  'client/src/data',
  'client/src/layouts',
  'client/src/pages',
  'client/src/pages/about',
  'client/src/pages/academics',
  'client/src/pages/admissions',
  'client/src/pages/campus',
  'client/src/pages/common',
  'client/src/pages/placements',
  'client/src/router',
  'client/src/sections',
  'client/src/sections/home',
  'client/src/sections/placements',
  'client/src/styles',
  'client/src/utils'
];

let allDirsExist = true;
expectedDirs.forEach(d => {
  if (!fs.existsSync(d)) {
    console.error(`Missing directory: ${d}`);
    allDirsExist = false;
  } else {
    console.log(`✓ ${d}`);
  }
});

if (!allDirsExist) process.exit(1);

console.log('\n=== STEP 3: Checking image asset references ===');
function walkFiles(dir, exts = ['.js', '.jsx']) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat && stat.isDirectory()) {
      if (file !== 'legacy' && file !== 'node_modules' && file !== 'dist') {
        results = results.concat(walkFiles(full, exts));
      }
    } else if (exts.includes(path.extname(file))) {
      results.push(full);
    }
  });
  return results;
}

const activeSrcFiles = walkFiles('client/src');
console.log(`Scanning ${activeSrcFiles.length} active source files for media references...`);

const mediaRegex = /(?:src|href|poster)=["'](\/(?:brand|assets)\/[^"']+)["']|url\(["']?(\/(?:brand|assets)\/[^"')]+)["']?\)/g;
const missingMedia = new Set();
let totalFound = 0;

activeSrcFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = mediaRegex.exec(content)) !== null) {
    const mediaPath = match[1] || match[2];
    if (mediaPath.includes('${')) continue; // Skip dynamic template literal placeholders
    totalFound++;
    const diskPath = path.join('client/public', mediaPath);
    if (!fs.existsSync(diskPath)) {
      missingMedia.add(`${mediaPath} (referenced in ${file})`);
    }
  }
});

// Explicitly test placementLogos from PlacementMarqueeSection
const placementLogos = [
  { name: 'Cognizant', file: 'Cognizant-logo.png', line: 1 },
  { name: 'Zoho', file: 'zoho-logo.png', line: 2 },
  { name: 'ConverSight', file: 'Conver-sight-logo.png', line: 1 },
  { name: 'Presidio', file: 'Presido-logo.png', line: 2 },
  { name: 'ServiceNow', file: 'servicenow-logo.png', line: 2 },
  { name: 'Nallas', file: 'nallas-logo.png', line: 1 },
  { name: 'ITC Limited', file: 'ITC-limited-logo.png', line: 2 },
  { name: 'nference', file: 'nference-logo.png', line: 1 },
  { name: 'ZyNerd', file: 'Zynerd-logo.png', line: 2 },
  { name: 'Retail AI', file: 'Retail-ai-logo.png', line: 1 },
  { name: 'Mr. Copper', file: 'mr-copper-logo.png', line: 2 },
  { name: 'Vakilsearch', file: 'Vakil-search-logo.png', line: 1 },
  { name: 'Conserve', file: 'conserve-logo.png', line: 2 },
  { name: 'Vendasta', file: 'vendasta-logo.png', line: 2 },
  { name: 'Abluva', file: 'Abluva-logo.png', line: 1 },
  { name: 'Zentron Labs', file: 'Zentron-labs-logo.png', line: 2 },
  { name: 'Adya', file: 'Adya-logo.png', line: 1 },
  { name: 'Auriseg', file: 'Auriseg-logo.png', line: 1 }
];

placementLogos.forEach(item => {
  totalFound++;
  const logoPath = `client/public/brand/placement-company-logo/line-${item.line}/${item.file}`;
  if (!fs.existsSync(logoPath)) {
    missingMedia.add(logoPath);
  }
});

console.log(`Total media references checked: ${totalFound}`);
if (missingMedia.size > 0) {
  console.error(`Missing media files (${missingMedia.size}):`);
  missingMedia.forEach(m => console.error(`  ✕ ${m}`));
  process.exit(1);
} else {
  console.log('✓ All active media files verified on disk! Zero broken image references.');
}

console.log('\n=== ALL VERIFICATIONS PASSED SUCCESSFULLY ===');
