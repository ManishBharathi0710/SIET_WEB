import { icon } from '../../utils/icons.js';
import { careerUnits } from '../../data/careersData.js';
import './Careers.css';

const field = (label, name, type, placeholder) =>
  `<label>${label} <b>*</b><input type="${type}" name="${name}" placeholder="${placeholder}" required></label>`;

const selectField = (label, name, opts) =>
  `<label>${label} <b>*</b><select name="${name}" required><option value="">Select ${label}</option>${opts.map(o => `<option>${o}</option>`).join('')}</select></label>`;

export function careersPage() {
  const unit = careerUnits.college;
  return `<main class="careers-page">
    <section class="career-hero">
      <small>WORK WITH US</small>
      <h1>Faculty Recruitment</h1>
      <h2>Build careers that <em>shape futures.</em></h2>
      <p>Join a community of educators, researchers and professionals committed to powering the youth and empowering the nation.</p>
    </section>
    <section class="career-main">
      <div class="career-tabs">
        <button class="active" data-unit="college" type="button">Engineering College</button>
        <button data-unit="school" type="button">CBSE School</button>
        <button data-unit="lab" type="button">Food Testing Lab</button>
      </div>
      <div class="career-intro">
        <img src="/brand/siet-logo.png" alt="Sri Shakthi Emblem">
        <div>
          <small>${unit.subtitle}</small>
          <h2>Sri Shakthi ${unit.name}</h2>
          <p>${unit.desc}</p>
        </div>
      </div>
      <div class="career-application-layout">
        <form class="career-form js-form">
          <div class="career-form-head">
            <small>APPLICATION FORM</small>
            <h2>Faculty &amp; Professional Recruitment</h2>
          </div>
          <div class="career-fields">
            ${field('Full Name', 'name', 'text', 'Enter your full name')}
            ${field('Mobile Number', 'phone', 'tel', 'Enter mobile number')}
            ${field('Email Address', 'email', 'email', 'Enter email')}
            ${selectField('Application Category', 'category', unit.cats.map(c => c[0]))}
            ${field('Position', 'position', 'text', 'Position you would like to apply')}
            ${field('Highest Qualification', 'qualification', 'text', 'Enter highest degree')}
            <label class="career-wide">Why are you looking for a change?<textarea name="message" rows="4"></textarea></label>
            <label class="career-wide career-file">Upload Resume <b>*</b><input type="file" name="resume" accept=".pdf,.doc,.docx,.rtf" required></label>
          </div>
          <button class="career-submit" type="submit">Submit Application →</button>
          <p class="status" aria-live="polite"></p>
        </form>
        <aside class="career-categories">
          <div class="career-side-title">
            <small>EXPLORE OPENINGS</small>
            <h2>${unit.name} Openings</h2>
          </div>
          ${unit.cats.map((c, i) => `
            <details ${i === 0 ? 'open' : ''}>
              <summary>${c[0]} ${icon('down')}</summary>
              <div>${c[1].map(r => `<span>→ ${r}</span>`).join('')}</div>
            </details>
          `).join('')}
          <div class="career-contact">
            <small>RECRUITMENT QUERIES</small>
            <h3>Let’s build the future together.</h3>
            <a href="mailto:careers@siet.ac.in">careers@siet.ac.in</a>
          </div>
        </aside>
      </div>
    </section>
  </main>`;
}
