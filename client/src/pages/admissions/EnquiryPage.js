import { sietHudHeader } from '../../components/ui/PageHeader.js';
import { programSelectHtml } from './ProgrammesPage.js';

export const field = (label, name, type, placeholder) =>
  `<label>${label} <b>*</b><input type="${type}" name="${name}" placeholder="${placeholder}" required></label>`;

export const selectField = (label, name, opts) =>
  `<label>${label} <b>*</b><select name="${name}" required><option value="">Select ${label}</option>${opts
    .map((o) => `<option>${o}</option>`)
    .join('')}</select></label>`;

export function EnquiryPage(apply = false) {
  const pageTitle = apply ? 'Apply for Sri Shakthi' : 'Admission Enquiry';
  const pageBreadcrumb = apply ? 'Apply' : 'Enquiry';
  return `<main class="enquiry-page-v3">
    ${sietHudHeader(
      pageTitle,
      pageBreadcrumb,
      'Admissions',
      '#/admission-enquiry',
      'SYSTEM ONLINE / ADMISSION PROFILE / SIET-OS'
    )}
    <section class="enquiry-main-v3">
      <div class="enquiry-heading-v3">
        <small>ENQUIRY FORM</small>
        <h1>Start your engineering journey with SIET</h1>
      </div>
      <form class="enquiry-form-v3 js-form">
        <div class="enquiry-fields-v3">${field('Full Name', 'name', 'text', 'Enter your full name')}${field(
    'Mobile Number',
    'phone',
    'tel',
    'Enter 10 digit mobile number'
  )}${field('Email Address', 'email', 'email', 'Enter your email address')}${selectField('Course Level', 'level', [
    'UG',
    'PG'
  ])}${programSelectHtml('Preferred Department', 'course')}${field(
    'Academic Qualification / Marks',
    'qualification',
    'text',
    'Qualification and marks'
  )}</div>
        <label>Message / Any Specific Query <b>*</b><textarea name="message" rows="4" required minlength="10"></textarea></label>
        <button class="button" type="submit">${apply ? 'Submit Application' : 'Send Enquiry'} →</button>
        <p class="status" aria-live="polite"></p>
      </form>
    </section>
  </main>`;
}
