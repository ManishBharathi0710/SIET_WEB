import { sietHudHeader } from '../../components/ui/PageHeader.js';
import { programSelectHtml } from './ProgrammesPage.js';
import { field, selectField } from './EnquiryPage.js';

export function ReferralPage() {
  return `<main class="enquiry-page-v3 referral-page">
    ${sietHudHeader(
      'Admission Referral',
      'Referral',
      'Admissions',
      '#/admission-referral',
      'SYSTEM ONLINE / ADMISSION PROFILE / SIET-OS'
    )}
    <section class="enquiry-main-v3">
      <div class="enquiry-heading-v3">
        <small>REFERRAL PROGRAMME</small>
        <h1>STUDENT ADMISSION REFERRAL</h1>
        <p style="color:#52695c;margin-top:6px;font-size:15px;line-height:1.5">Alumni, students, parents, faculty, and well-wishers can refer candidates for undergraduate and postgraduate engineering admissions.</p>
      </div>
      <form class="enquiry-form-v3 js-form">
        <div style="font-weight:700;color:#0b3d20;font-size:15px;border-bottom:2px solid #e0ece4;padding-bottom:8px;margin-bottom:14px;letter-spacing:0.02em">REFERRER DETAILS (YOUR INFORMATION)</div>
        <div class="enquiry-fields-v3">
          ${field('Your Full Name', 'referrer_name', 'text', 'Enter your full name')}
          ${field('Your Mobile Number', 'referrer_phone', 'tel', 'Enter your 10 digit mobile number')}
          ${field('Your Email Address', 'referrer_email', 'email', 'Enter your email address')}
          ${selectField('Your Relationship with SIET', 'referrer_relation', [
            'Alumni',
            'Current Student',
            'Faculty / Staff',
            'Parent',
            'Industry Partner',
            'Well-wisher'
          ])}
          <label id="referrer-reg-no-wrapper" class="referral-reg-no-field" style="display:none">
            Current Student Register Number <b>*</b>
            <input type="text" name="referrer_reg_no" id="referrer_reg_no" placeholder="Enter current student register number" autocomplete="off">
          </label>
        </div>
        <div style="font-weight:700;color:#0b3d20;font-size:15px;border-bottom:2px solid #e0ece4;padding-bottom:8px;margin-top:18px;margin-bottom:14px;letter-spacing:0.02em">CANDIDATE DETAILS (STUDENT BEING REFERRED)</div>
        <div class="enquiry-fields-v3">
          ${field('Candidate Full Name', 'candidate_name', 'text', "Enter candidate's full name")}
          ${field('Candidate Mobile Number', 'candidate_phone', 'tel', "Enter candidate's 10 digit mobile number")}
          ${field('Candidate Email Address', 'candidate_email', 'email', "Enter candidate's email")}
          ${selectField('Preferred Course Level', 'candidate_level', ['UG', 'PG'])}
          ${programSelectHtml('Preferred Department', 'candidate_course')}
          ${field('Current Qualification / School', 'candidate_qualification', 'text', 'Class 12 / Diploma / Degree')}
        </div>
        <label>Message / Reason for Referral
          <textarea name="remarks" rows="3" placeholder="Tell us about the candidate's achievements, interests, or any specific guidance needed..."></textarea>
        </label>
        <button class="button" type="submit">Submit Referral →</button>
        <p class="status" aria-live="polite"></p>
      </form>
    </section>
  </main>`;
}
