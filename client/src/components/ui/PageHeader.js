import './PageHeader.css';

export function sietPageHeader(title, subtitle = '', kicker = 'SRI SHAKTHI') {
  return `<section class="page-hero enhanced-page-hero">
    <div class="hero-backdrop-pattern" aria-hidden="true"></div>
    <div class="hero-radial-glow" aria-hidden="true"></div>
    <div class="hero-inner-container">
      <img class="page-crest" src="/brand/siet-logo.png" alt="Sri Shakthi emblem" width="320" height="320">
      <div class="eyebrow enhanced-eyebrow">
        <span class="eyebrow-accent-line"></span>
        <span class="eyebrow-tag">${kicker}</span>
      </div>
      <h1 class="page-hero-title reveal">${title.toUpperCase()}</h1>
      ${subtitle ? `<p class="page-hero-subtitle">${subtitle}</p>` : ''}
    </div>
  </section>
  <div class="hero-gold-trim-bar" aria-hidden="true"></div>`;
}

export function sietHudHeader(
  title,
  breadcrumbName = title,
  section = 'Departments',
  sectionHref = '#/departments',
  kicker = ''
) {
  if (!kicker) {
    if (section === 'Admissions') kicker = 'SYSTEM ONLINE / ADMISSION PROFILE / SIET-OS';
    else if (section === 'Campus') kicker = 'SYSTEM ONLINE / CAMPUS PROFILE / SIET-OS';
    else kicker = 'SYSTEM ONLINE / ACADEMIC PROFILE / SIET-OS';
  }
  const kickerAttr = ` data-kicker="${kicker}"`;
  return `<section class="department-detail-header siet-hud-header"${kickerAttr}>
    <div class="department-detail-title">
      <div class="hud-title-group">
        <span class="hud-diamond" aria-hidden="true">◈</span>
        <h1>${title.toUpperCase()}</h1>
      </div>
      <div class="department-breadcrumb">
        <a href="#/">Home</a><span>/</span><a href="${sectionHref}">${section}</a><span>/</span><b>${breadcrumbName}</b>
      </div>
    </div>
  </section>`;
}
