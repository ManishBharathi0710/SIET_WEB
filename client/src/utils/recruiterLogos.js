export function getRecruiterSvg(name) {
  if (name === 'Trilogy') {
    return `<text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="900" font-size="19" letter-spacing="1.5" fill="#0d1b2a">▲ TRILOGY</text>`;
  }
  if (name === 'Increff') {
    return `<circle cx="16" cy="14" r="6" fill="#e63946"/><text x="16" y="17" text-anchor="middle" font-size="9" font-weight="900" fill="#fff">i</text><text x="64%" y="58%" dominant-baseline="middle" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="800" font-size="17" fill="#e63946">INCREFF</text>`;
  }
  if (name === 'Presidio') {
    return `<text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="800" font-size="18" letter-spacing="1" fill="#0077b6">PRESIDIO</text>`;
  }
  if (name === 'Zenx AI' || name === 'Hasura') {
    return `<text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="800" font-size="18" fill="#3a0ca3">ZENX AI</text>`;
  }
  if (name === 'Hyperverge') {
    return `<text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="800" font-size="16" letter-spacing="0.5" fill="#4361ee">HYPERVERGE</text>`;
  }
  if (name === 'Tiger Analytics') {
    return `<text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="800" font-size="14.5" letter-spacing="0.5" fill="#d9480f">TIGER ANALYTICS</text>`;
  }
  if (name === 'Reltio') {
    return `<text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="800" font-size="18" fill="#168aad">Reltio</text>`;
  }
  if (name === 'Mr. Cooper' || name === 'Cooper') {
    return `<text x="50%" y="42%" dominant-baseline="middle" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-size="9" fill="#005a39" font-weight="700">mr.</text><text x="50%" y="72%" dominant-baseline="middle" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="900" font-size="19" fill="#00b4d8">cooper</text>`;
  }
  if (name === 'InCorp') {
    return `<text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="800" font-size="18" fill="#2b2d42">In.Corp</text>`;
  }
  if (name === 'Aansena') {
    return `<text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="800" font-size="17" fill="#0077b6">AANSENA</text>`;
  }
  if (name === 'CTS' || name === 'Cognizant') {
    return `<text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="800" font-size="18" fill="#003580">Cognizant</text>`;
  }
  if (name === 'Centillion Labs' || name === 'Centillion') {
    return `<rect x="10" y="6" width="16" height="16" rx="3" fill="#00854a"/><text x="64%" y="58%" dominant-baseline="middle" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="800" font-size="14" fill="#003824">CENTILLION</text>`;
  }
  if (name === 'TCS') {
    return `<text x="50%" y="42%" dominant-baseline="middle" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="900" font-size="19" fill="#e61c24">tcs </text><text x="50%" y="78%" dominant-baseline="middle" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="800" font-size="10.5" fill="#1f4277">CONSULTANCY</text>`;
  }
  if (name === 'Infosys') {
    return `<text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="800" font-size="23" fill="#007cc3">Infosys</text>`;
  }
  if (name === 'wipro') {
    return `<circle cx="22" cy="15" r="6" fill="#f3c515"/><circle cx="32" cy="15" r="4.2" fill="#e61c24"/><text x="64%" y="58%" dominant-baseline="middle" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="800" font-size="22" fill="#341f97">wipro</text>`;
  }
  if (name === 'accenture') {
    return `<text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="800" font-size="21" fill="#000000">accenture<tspan fill="#a100ff" font-weight="900">&gt;</tspan></text>`;
  }
  if (name === 'ZOHO') {
    return `<text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="900" font-size="24" letter-spacing="2" fill="#cc2427">ZO<tspan fill="#00854a">H</tspan><tspan fill="#f3c515">O</tspan></text>`;
  }
  if (name === 'amazon') {
    return `<text x="50%" y="46%" dominant-baseline="middle" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="800" font-size="22" fill="#232f3e">amazon</text><path d="M 20 22 Q 55 31 90 22" stroke="#ff9900" stroke-width="2.5" fill="none"/>`;
  }
  return `<text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="800" font-size="21" fill="#005a39">${name}</text>`;
}
