const fs = require('fs');
const postcss = require('postcss');

const rawCss = fs.readFileSync('client/src/styles/index.css', 'utf8');
const root = postcss.parse(rawCss);

const otherSelectors = new Set();
root.walkRules(rule => {
  const sel = rule.selector;
  if (
    !sel.includes('header') &&
    !sel.includes('footer') &&
    !sel.includes('modal') &&
    !sel.includes('nav') &&
    !sel.includes('programme') &&
    !sel.includes('campus') &&
    !sel.includes('lab') &&
    !sel.includes('event') &&
    !sel.includes('placement') &&
    !sel.includes('career') &&
    !sel.includes('dept') &&
    !sel.includes('department') &&
    !sel.includes('curr') &&
    !sel.includes('lib') &&
    !sel.includes('enquiry') &&
    !sel.includes('referral') &&
    !sel.includes('siet-') &&
    !sel.includes('ce-') &&
    !sel.includes('sft-') &&
    !sel.includes('template-') &&
    !sel.includes('feature-') &&
    !sel.includes('prog-') &&
    !sel.includes('bottom-banner') &&
    !sel.includes('life-')
  ) {
    otherSelectors.add(sel);
  }
});

console.log('Remaining unclassified selectors:', otherSelectors.size);
const arr = Array.from(otherSelectors);
console.log('Sample remaining selectors (slice 0 to 50):');
arr.slice(0, 50).forEach(s => console.log(' ', s));

console.log('Sample remaining selectors (slice 50 to 100):');
arr.slice(50, 100).forEach(s => console.log(' ', s));
