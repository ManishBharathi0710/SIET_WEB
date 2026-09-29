const fs = require('fs');
const postcss = require('postcss');

const rawCss = fs.readFileSync('client/src/styles/index.css', 'utf8');
const root = postcss.parse(rawCss);

const remaining = new Set();
root.walkRules(rule => {
  const sel = rule.selector.toLowerCase();
  if (
    !sel.includes('header') &&
    !sel.includes('footer') &&
    !sel.includes('modal') &&
    !sel.includes('navbar') &&
    !sel.includes('institution') &&
    !sel.includes('mobile-nav') &&
    !sel.includes('programme') &&
    !sel.includes('prog-') &&
    !sel.includes('feature-') &&
    !sel.includes('watermark') &&
    !sel.includes('bottom-banner') &&
    !sel.includes('campus') &&
    !sel.includes('life-') &&
    !sel.includes('story-') &&
    !sel.includes('gallery') &&
    !sel.includes('instagram') &&
    !sel.includes('social-') &&
    !sel.includes('youtube') &&
    !sel.includes('card-top') &&
    !sel.includes('card-content') &&
    !sel.includes('card-arrow') &&
    !sel.includes('card-icon') &&
    !sel.includes('lab') &&
    !sel.includes('event') &&
    !sel.includes('placement') &&
    !sel.includes('ps-') &&
    !sel.includes('hero') &&
    !sel.includes('home') &&
    !sel.includes('career') &&
    !sel.includes('dept') &&
    !sel.includes('department') &&
    !sel.includes('curr') &&
    !sel.includes('lib') &&
    !sel.includes('cal-') &&
    !sel.includes('enquiry') &&
    !sel.includes('referral') &&
    !sel.includes('siet-') &&
    !sel.includes('ce-') &&
    !sel.includes('sft-') &&
    !sel.includes('st-') &&
    !sel.includes('template-') &&
    !sel.includes('t-hero') &&
    !sel.includes('thv-') &&
    !sel.includes('pillar') &&
    !sel.includes('bento') &&
    !sel.includes('running-gallery') &&
    !sel.includes('rg-') &&
    !sel.includes('hdc-') &&
    !sel.includes('faq') &&
    !sel.includes('cta') &&
    !sel.includes('contact') &&
    !sel.includes('flip-card') &&
    !sel.includes('chairman') &&
    !sel.includes('principal') &&
    !sel.includes('about') &&
    !sel.includes('who-we-are') &&
    !sel.includes('stat-') &&
    !sel.includes('signature') &&
    !sel.includes('editorial') &&
    !sel.includes('button') &&
    !sel.includes('btn') &&
    !sel.includes('pill') &&
    !sel.includes('status') &&
    !sel.includes('reveal') &&
    !sel.includes('counter') &&
    !sel.includes('tag') &&
    !sel.includes('html') &&
    !sel.includes('body') &&
    !sel.includes('#root') &&
    !sel.includes('notice') &&
    !sel.includes('legal') &&
    !sel.includes('mark') &&
    !sel.includes('counselling') &&
    !sel.includes('salary') &&
    !sel.includes('dashboard') &&
    !sel.includes('edc') &&
    !sel.includes('startup')
  ) {
    remaining.add(rule.selector);
  }
});

console.log('Deep remaining unclassified count:', remaining.size);
const arr = Array.from(remaining);
arr.slice(0, 40).forEach(s => console.log(' ', s));
