import './PlacementMarqueeSection.css';

const placementLogos = [
  { name: 'Cognizant', file: 'Cognizant-logo.png', line: 1 },
  { name: 'Zoho', file: 'zoho-logo.png', line: 2 },
  { name: 'ConverSight', file: 'Conver-sight-logo.png', line: 1 },
  { name: 'Presidio', file: 'Presido-logo.png', line: 2 },
  { name: 'ServiceNow', file: 'servicenow-logo.png', line: 2 },
  { name: 'Nallas', file: 'nallas-logo.png', line: 1 },
  { name: 'ITC Limited', file: 'ITC-limited-logo.png', line: 2 },
  { name: 'nference', file: 'nference-logo.png', line: 1 },
  { name: 'ZyNerd', file: 'Zynerd-logo.png', line: 2 },
  { name: 'Retail AI', file: 'Retail-ai-logo.png', line: 1 },
  { name: 'Mr. Copper', file: 'mr-copper-logo.png', line: 2 },
  { name: 'Vakilsearch', file: 'Vakil-search-logo.png', line: 1 },
  { name: 'Conserve', file: 'conserve-logo.png', line: 2 },
  { name: 'Vendasta', file: 'vendasta-logo.png', line: 2 },
  { name: 'Abluva', file: 'Abluva-logo.png', line: 1 },
  { name: 'Zentron Labs', file: 'Zentron-labs-logo.png', line: 2 },
  { name: 'Adya', file: 'Adya-logo.png', line: 1 },
  { name: 'Auriseg', file: 'Auriseg-logo.png', line: 1 }
];

export function placementMarqueeSection() {
  const renderLogos = (items) =>
    items
      .map(
        (item) => `
    <div class="placement-marquee-item" data-logo="${item.file.replace('-logo.png', '').toLowerCase()}">
      <img src="/brand/placement-company-logo/line-${item.line}/${item.file}" alt="${item.name} logo" class="placement-marquee-logo" loading="eager" decoding="async">
    </div>
  `
      )
      .join('');

  const logosHtml = renderLogos(placementLogos);

  return `
    <section class="placement-marquee-section" aria-label="Recruiting Partners and Placement Companies">
      <div class="placement-marquee-shell">
        <div class="placement-marquee-row placement-marquee-single-line" aria-label="Partner Companies">
          <div class="placement-marquee-track">
            <div class="placement-marquee-group">
              ${logosHtml}
            </div>
            <div class="placement-marquee-group" aria-hidden="true">
              ${logosHtml}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
