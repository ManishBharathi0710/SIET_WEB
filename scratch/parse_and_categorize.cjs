const fs = require('fs');
const postcss = require('postcss');

console.log('Loading CSS file...');
const rawCss = fs.readFileSync('client/src/styles/index.css', 'utf8');

console.log('Parsing CSS with PostCSS...');
const root = postcss.parse(rawCss);

console.log(`Total root child nodes: ${root.nodes.length}`);

let ruleCount = 0;
let atRuleCount = 0;
let commentCount = 0;

root.nodes.forEach(node => {
  if (node.type === 'rule') ruleCount++;
  else if (node.type === 'atrule') atRuleCount++;
  else if (node.type === 'comment') commentCount++;
});

console.log(`Rules: ${ruleCount}, AtRules: ${atRuleCount}, Comments: ${commentCount}`);

// Inspect unique variable names
const variables = new Map();
root.walkDecls(decl => {
  if (decl.prop.startsWith('--')) {
    variables.set(decl.prop, decl.value);
  }
});
console.log(`Unique CSS custom properties defined: ${variables.size}`);
console.log('Sample variables:');
let count = 0;
for (const [prop, val] of variables.entries()) {
  if (count++ < 20) console.log(`  ${prop}: ${val};`);
}
