import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.resolve(__dirname, '../client/src/styles.css');
let content = fs.readFileSync(filePath, 'utf8');

const importStatement = "@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&family=DM+Sans:wght@400;500;600&family=League+Spartan:wght@700;800;900&family=Manrope:wght@400;500;600;700;800&family=Montserrat:wght@600;700;800;900&family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Playfair+Display:ital,wght@0,600;1,600&display=swap');\n\n";

// Fix top if needed
if (!content.startsWith('@import')) {
  if (content.startsWith('   PROGRAMMES SHOWCASE')) {
    content = importStatement + '/* ========================================================\n' + content;
  } else {
    content = importStatement + content;
  }
}

// Remove merge markers and duplicate @import inside body
const lines = content.split(/\r?\n/);
const filteredLines = [];
let firstImportFound = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.trim() === '=======' || line.startsWith('<<<<<<<') || line.startsWith('>>>>>>>')) {
    continue;
  }
  if (line.includes('@import url(')) {
    if (!firstImportFound) {
      firstImportFound = true;
      filteredLines.push(line);
    } else {
      // skip duplicate import in middle of css
      continue;
    }
  } else {
    filteredLines.push(line);
  }
}

fs.writeFileSync(filePath, filteredLines.join('\n'), 'utf8');
console.log('Successfully normalized styles.css. Total lines:', filteredLines.length);
