const fs = require('fs');
const postcss = require('postcss');

const rawCss = fs.readFileSync('client/src/styles/index.css', 'utf8');
const lines = rawCss.split('\n');

const firstHalf = lines.slice(0, 54749).join('\n');
const secondHalf = lines.slice(54749).join('\n');

const r1 = postcss.parse(firstHalf);
const r2 = postcss.parse(secondHalf);

const r1Rules = new Set();
r1.nodes.forEach(n => {
  if (n.type === 'rule') r1Rules.add(n.selector.trim());
  if (n.type === 'atrule') r1Rules.add(`@${n.name} ${n.params.trim()}`);
});

const r2Rules = new Set();
r2.nodes.forEach(n => {
  if (n.type === 'rule') r2Rules.add(n.selector.trim());
  if (n.type === 'atrule') r2Rules.add(`@${n.name} ${n.params.trim()}`);
});

console.log('Unique selector keys in first half:', r1Rules.size);
console.log('Unique selector keys in second half:', r2Rules.size);

let onlyIn1 = 0;
let onlyIn2 = 0;
r1Rules.forEach(k => {
  if (!r2Rules.has(k)) onlyIn1++;
});
r2Rules.forEach(k => {
  if (!r1Rules.has(k)) onlyIn2++;
});

console.log('Keys only in first half:', onlyIn1);
console.log('Keys only in second half:', onlyIn2);

// Check sample of keys only in first half
const sample1 = [];
r1Rules.forEach(k => {
  if (!r2Rules.has(k) && sample1.length < 15) sample1.push(k);
});
console.log('Sample keys only in first half:', sample1);

// Check sample of keys only in second half
const sample2 = [];
r2Rules.forEach(k => {
  if (!r1Rules.has(k) && sample2.length < 15) sample2.push(k);
});
console.log('Sample keys only in second half:', sample2);
