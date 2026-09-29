const fs = require('fs');

const css = fs.readFileSync('client/src/styles/index.css', 'utf8');
const lines = css.split('\n');

// Find major section markers
const majorHeaders = [];
let currentComment = [];
let insideComment = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.includes('/*')) insideComment = true;
  if (insideComment) {
    currentComment.push(line.trim());
    if (line.includes('*/')) {
      insideComment = false;
      const commentStr = currentComment.join(' ');
      if (commentStr.includes('===') || commentStr.includes('---') || commentStr.toUpperCase().includes('PAGE') || commentStr.toUpperCase().includes('SECTION') || commentStr.toUpperCase().includes('HEADER') || commentStr.toUpperCase().includes('NAVBAR') || commentStr.toUpperCase().includes('FOOTER') || commentStr.toUpperCase().includes('MODAL') || commentStr.toUpperCase().includes('DEPARTMENT') || commentStr.toUpperCase().includes('CURRICULUM') || commentStr.toUpperCase().includes('LIBRARY') || commentStr.toUpperCase().includes('ADMISSION') || commentStr.toUpperCase().includes('PLACEMENT') || commentStr.toUpperCase().includes('CAREER') || commentStr.toUpperCase().includes('CAMPUS')) {
        majorHeaders.push({ line: i + 1, text: commentStr.replace(/\/\*+|\*+\/|=+|-+/g, '').trim() });
      }
      currentComment = [];
    }
  }
}

console.log('Total major header markers found:', majorHeaders.length);
// Sample every few
for (let i = 0; i < majorHeaders.length; i += Math.max(1, Math.floor(majorHeaders.length / 40))) {
  console.log(`Line ${majorHeaders[i].line}: ${majorHeaders[i].text.slice(0, 80)}`);
}

// Let's also look for :root and CSS variables definitions
const rootMatches = [];
let inRoot = false;
lines.forEach((l, idx) => {
  if (l.trim().startsWith(':root')) {
    rootMatches.push(idx + 1);
  }
});
console.log('\n:root occurrences at lines:', rootMatches);
