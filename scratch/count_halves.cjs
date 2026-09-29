const fs = require('fs');
const postcss = require('postcss');

const rawCss = fs.readFileSync('client/src/styles/index.css', 'utf8');
const lines = rawCss.split('\n');

const firstHalf = lines.slice(0, 54749).join('\n');
const secondHalf = lines.slice(54749).join('\n');

const r1 = postcss.parse(firstHalf);
const r2 = postcss.parse(secondHalf);

console.log('First half nodes:', r1.nodes.length);
console.log('Second half nodes:', r2.nodes.length);
