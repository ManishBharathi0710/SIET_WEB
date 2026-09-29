const fs = require('fs');

const css = fs.readFileSync('client/src/styles/index.css', 'utf8');
const lines = css.split('\n');

const dupStart = 54749; // 0-indexed: 54749 (line 54750)
console.log('Total lines:', lines.length);

const firstHalf = lines.slice(0, dupStart).join('\n');
const secondHalf = lines.slice(dupStart).join('\n');

console.log('First half length:', firstHalf.length);
console.log('Second half length:', secondHalf.length);

// Let's check where the second half differs from the first half
const firstHalfLines = lines.slice(0, dupStart);
const secondHalfLines = lines.slice(dupStart);

let diffIndex = -1;
for (let i = 0; i < Math.min(firstHalfLines.length, secondHalfLines.length); i++) {
  if (firstHalfLines[i].trim() !== secondHalfLines[i].trim()) {
    diffIndex = i;
    break;
  }
}

console.log('First diff at relative line:', diffIndex);
if (diffIndex !== -1) {
  console.log('First half line:', firstHalfLines[diffIndex]);
  console.log('Second half line:', secondHalfLines[diffIndex]);
}

// Let's check what is at the end of the second half (beyond firstHalfLines.length)
if (secondHalfLines.length > firstHalfLines.length) {
  console.log('Second half has extra lines:', secondHalfLines.length - firstHalfLines.length);
  console.log('First 5 extra lines:');
  console.log(secondHalfLines.slice(firstHalfLines.length, firstHalfLines.length + 5).join('\n'));
} else {
  console.log('First half has extra lines:', firstHalfLines.length - secondHalfLines.length);
  console.log('First 5 extra lines in first half:');
  console.log(firstHalfLines.slice(secondHalfLines.length, secondHalfLines.length + 5).join('\n'));
}
