import { getRecruiterSvg } from '../../utils/recruiterLogos.js';
import { allSuperstarsData } from '../../data/placementsData.js';
import './SuperstarCard.css';

export function renderStudentCompanyBadge(name) {
  if (name === 'Centillion Labs' || name === 'Centillion') {
    return `<span class="siet-co-icon" style="display:inline-block;width:12px;height:12px;border-radius:3px;background:#00854a;flex-shrink:0;"></span><span class="siet-co-text" style="font-weight:800;font-size:13px;letter-spacing:0.04em;color:#003824;">CENTILLION</span>`;
  }
  if (name === 'Trilogy') {
    return `<span class="siet-co-icon" style="color:#0d1b2a;font-size:11px;line-height:1;margin-right:2px;">▲</span><span class="siet-co-text" style="font-weight:900;font-size:13.5px;letter-spacing:0.08em;color:#0d1b2a;">TRILOGY</span>`;
  }
  if (name === 'Increff') {
    return `<span class="siet-co-icon" style="display:inline-flex;align-items:center;justify-content:center;width:15px;height:15px;border-radius:50%;background:#e63946;color:#fff;font-size:9.5px;font-weight:900;line-height:1;flex-shrink:0;">i</span><span class="siet-co-text" style="font-weight:800;font-size:13.5px;letter-spacing:0.04em;color:#e63946;">INCREFF</span>`;
  }
  if (name === 'Tiger Analytics') {
    return `<span class="siet-co-text" style="font-weight:800;font-size:12.5px;letter-spacing:0.04em;color:#d9480f;">TIGER ANALYTICS</span>`;
  }
  if (name === 'Hyperverge') {
    return `<span class="siet-co-text" style="font-weight:800;font-size:13px;letter-spacing:0.05em;color:#4361ee;">HYPERVERGE</span>`;
  }
  if (name === 'Presidio') {
    return `<span class="siet-co-text" style="font-weight:800;font-size:13.5px;letter-spacing:0.06em;color:#0077b6;">PRESIDIO</span>`;
  }
  if (name === 'Zenx AI' || name === 'Hasura') {
    return `<span class="siet-co-text" style="font-weight:800;font-size:13.5px;letter-spacing:0.05em;color:#3a0ca3;">ZENX AI</span>`;
  }
  if (name === 'Reltio') {
    return `<span class="siet-co-text" style="font-weight:800;font-size:14px;letter-spacing:0.03em;color:#168aad;">Reltio</span>`;
  }
  if (name === 'Mr. Cooper' || name === 'Cooper') {
    return `<span class="siet-co-text" style="font-weight:700;font-size:11px;color:#005a39;margin-right:2px;">mr.</span><span class="siet-co-text" style="font-weight:900;font-size:14px;color:#00b4d8;">cooper</span>`;
  }
  if (name === 'InCorp') {
    return `<span class="siet-co-text" style="font-weight:800;font-size:14px;letter-spacing:0.03em;color:#2b2d42;">In.Corp</span>`;
  }
  if (name === 'Aansena') {
    return `<span class="siet-co-text" style="font-weight:800;font-size:13.5px;letter-spacing:0.04em;color:#0077b6;">AANSENA</span>`;
  }
  if (name === 'CTS' || name === 'Cognizant') {
    return `<span class="siet-co-text" style="font-weight:800;font-size:13.5px;color:#003580;">Cognizant</span>`;
  }
  if (name === 'TCS') {
    return `<span class="siet-co-text" style="font-weight:900;font-size:14px;color:#e61c24;">tcs</span><span class="siet-co-text" style="font-weight:700;font-size:10.5px;color:#1f4277;margin-left:3px;letter-spacing:0.04em;">CONSULTANCY</span>`;
  }
  return `<span class="siet-co-text" style="font-weight:800;font-size:13px;color:#005a39;">${name}</span>`;
}

export function renderSuperstarCard(s) {
  let tierBadge = '';
  if (s.tier === '33') {
    tierBadge = '<span class="siet-sp-tier-pill is-33">Highest Record</span>';
  } else if (s.tier === '22') {
    tierBadge = '<span class="siet-sp-tier-pill is-22">Super Dream</span>';
  } else if (s.tier === '13-12') {
    tierBadge = '<span class="siet-sp-tier-pill is-12">Product Tier</span>';
  } else if (s.tier === '10') {
    tierBadge = '<span class="siet-sp-tier-pill is-10">Prime Platinum</span>';
  } else {
    tierBadge = '<span class="siet-sp-tier-pill is-9">DeepTech Tier</span>';
  }

  const ribbonClass = s.top ? 'is-marquee' : s.tier === '22' ? 'is-superdream' : '';

  return `
    <div class="siet-sp-card ${s.top ? 'is-top' : ''}" data-tier="${s.tier}">
      <div class="siet-sp-ctc-wrap">
        <div class="siet-sp-ctc-top-row">
          <span class="siet-sp-ctc-lbl">${s.top ? 'MARQUEE RECORD' : s.tier === '22' ? 'SUPER DREAM' : 'ANNUAL PACKAGE'}</span>
          ${tierBadge}
        </div>
        <div class="siet-sp-ctc-ribbon ${ribbonClass}">${s.ctc}</div>
      </div>
      <div style="width: 100%; height: 180px; margin: 16px 0; border-radius: 8px; overflow: hidden; background: #eef5f0; box-shadow: inset 0 2px 8px rgba(0,0,0,0.05);">
        <img src="${s.img}" alt="${s.name}" style="width: 100%; height: 100%; object-fit: cover; object-position: center 10%; display: block;">
      </div>
      <div style="text-align: center; margin-bottom: 16px;">
        <h3 class="siet-sp-name" style="margin:0; font-size: 18px; font-weight: 800; color: #003d29; line-height: 1.2;">${s.name}</h3>
        <p class="siet-sp-dept" style="margin:6px 0 0; font-size: 13px; color: #355343; font-weight: 600;">${s.dept}</p>
      </div>
      <div class="siet-sp-company-box">
        ${renderStudentCompanyBadge(s.company)}
      </div>
      <span class="siet-sp-batch">${s.batch}</span>
    </div>
  `;
}

export function renderRecruiterCard(r) {
  let logoContent = '';
  if (r.type === 'img') {
    logoContent = `<img src="${r.src}" alt="${r.name} logo" loading="lazy">`;
  } else if (r.type === 'custom') {
    logoContent = `<svg viewBox="0 0 140 32" xmlns="http://www.w3.org/2000/svg">${r.html}</svg>`;
  } else {
    logoContent = `<svg viewBox="0 0 130 32" xmlns="http://www.w3.org/2000/svg">${getRecruiterSvg(r.name)}</svg>`;
  }
  return `
    <div class="siet-tr-logo-card" title="${r.name} · ${r.category}">
      <span class="siet-tr-cat-tag">${r.category}</span>
      <div class="siet-tr-logo-inner">
        ${logoContent}
      </div>
      <div class="siet-tr-hover-bar">
        <span class="siet-tr-dot"></span>
        <span class="siet-tr-co-name">${r.name}</span>
      </div>
    </div>
  `;
}

export function getSuperstarMarqueeHtml(filter = 'all') {
  const filtered = filter === 'all' ? allSuperstarsData : allSuperstarsData.filter((s) => s.tier === filter);

  let baseList = [...filtered];
  while (baseList.length < 10) {
    baseList = baseList.concat(filtered);
  }
  const doubleList = baseList.concat(baseList);
  return doubleList.map(renderSuperstarCard).join('');
}
