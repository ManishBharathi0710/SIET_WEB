import mongoose from 'mongoose';
import Enquiry from '../models/Enquiry.js';
const demoSubmissions = [];

export async function createEnquiry(req,res,next) {
  try {
    const name = req.body.name || (req.body.referrer_name ? `${req.body.referrer_name} (Referral for ${req.body.candidate_name || 'Candidate'})` : req.body.candidate_name);
    const email = req.body.email || req.body.referrer_email || req.body.candidate_email;
    const phone = req.body.phone || req.body.referrer_phone || req.body.candidate_phone;
    const course = req.body.course || req.body.category || req.body.position || req.body.candidate_course;
    const message = req.body.message || req.body.remarks || (req.body.referrer_relation ? `Relationship: ${req.body.referrer_relation}${req.body.referrer_reg_no ? ` | Reg No: ${req.body.referrer_reg_no}` : ''}` : '');
    if(!name||!email||!phone||!course) return res.status(400).json({message:'Please complete all required fields.'});
    
    const enquiryType = req.body.referrer_name ? 'referral' : (req.body.category ? 'career' : 'admission');

    if(mongoose.connection.readyState!==1) {
      demoSubmissions.push({name,email,phone,course,message,enquiryType,createdAt:new Date()});
      return res.status(200).json({
        ok: true,
        message: req.body.referrer_name ? 'Thank you! The referral details have been received.' : 'Thank you! Your details have been received. Our admissions and outreach team will contact you shortly.',
        demo: true
      });
    }

    const enquiry=await Enquiry.create({name,email,phone,course,message,enquiryType});
    return res.status(201).json({ok: true, message:'Thank you! Your details have been received. Our team will contact you shortly.',id:enquiry.id});
  } catch(error) { return next(error); }
}
