const $ = (selector, root = document) => root?.querySelector?.(selector) || null;
const $$ = (selector, root = document) => root?.querySelectorAll ? [...root.querySelectorAll(selector)] : [];
let appRoot;
const icon = (name) => {
  if (name === 'menu') return `<svg class="ui-icon-svg menu-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="3.5" y1="6" x2="20.5" y2="6"></line><line x1="3.5" y1="12" x2="20.5" y2="12"></line><line x1="3.5" y1="18" x2="20.5" y2="18"></line></svg>`;
  if (name === 'close') return `<svg class="ui-icon-svg close-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
  if (name === 'crown' || name === 'trophy') return `<svg class="ui-icon-svg crown-svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 18.5h18v2.5H3zm2.5-4L2 6.5l5.5 3 4.5-6.5 4.5 6.5 5.5-3-3.5 8h-13z"/></svg>`;
  if (name === 'users') return `<svg class="ui-icon-svg users-svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 3s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>`;
  if (name === 'trend' || name === 'arrow-up-right') return `<svg class="ui-icon-svg trend-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>`;
  if (name === 'chart') return `<svg class="ui-icon-svg chart-svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="3" y="12" width="4.5" height="9" rx="1.2"/><rect x="9.75" y="7" width="4.5" height="14" rx="1.2"/><rect x="16.5" y="3" width="4.5" height="18" rx="1.2"/></svg>`;
  if (name === 'grad') return `<svg class="ui-icon-svg grad-svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/></svg>`;
  if (name === 'connect') return `<svg class="ui-icon-svg connect-svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`;
  if (name === 'star') return `<svg class="ui-icon-svg star-svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
  if (name === 'home') return `<svg class="ui-icon-svg home-svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>`;
  if (name === 'play') return `<svg class="ui-icon-svg play-svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="5 3 19 12 5 21 5 3"/></svg>`;
  if (name === 'arrow') return `<svg class="ui-icon-svg arrow-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`;
  if (name === 'down') return `<svg class="ui-icon-svg down-svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg>`;
  if (name === 'runner') return `<svg class="ui-icon-svg runner-svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="14" cy="3.5" r="2.5"/><path d="M19.5 9.5l-3.5 3.5-2.5-2.5 1-4-4.5 2-2 4.5 1.5 1 1.5-3 2.5 2.5-3 5.5-4.5-2-.5 2 5.5 2.5 3.5-6.5 3 2.5 2-3.5-1.5-1z"/></svg>`;
  if (name === 'bulb') return `<svg class="ui-icon-svg bulb-svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 2.6 1.4 4.8 3.5 6v2a1.5 1.5 0 0 0 1.5 1.5h4a1.5 1.5 0 0 0 1.5-1.5v-2c2.1-1.2 3.5-3.4 3.5-6a7 7 0 0 0-7-7zm-2 19a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5v-.5h-4v.5z"/></svg>`;
  if (name === 'masks') return `<svg class="ui-icon-svg masks-svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M10.5 3.5C5.8 3.5 2 6.8 2 11c0 3.8 3.1 7 7.2 7.4-.2.8-.7 1.6-1.5 2.2 1.8 0 3.5-.8 4.6-2.1 4.5-.4 7.7-3.8 7.7-7.5 0-4.2-3.8-7.5-8.5-7.5zm-3.5 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm7 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-3.5 5.5c-2 0-3.3-1-3.5-1.2l.8-1.2c.1.1 1.1.9 2.7.9s2.6-.8 2.7-.9l.8 1.2c-.2.2-1.5 1.2-3.5 1.2z"/></svg>`;
  if (name === 'leaf') return `<svg class="ui-icon-svg leaf-svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/></svg>`;
  if (name === 'cup' || name === 'trophy-cup') return `<svg class="ui-icon-svg cup-svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 4h-2V3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v1H5a3 3 0 0 0-3 3v2a4 4 0 0 0 4 4h.6A6 6 0 0 0 11 16.9V19H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2h-3v-2.1a6 6 0 0 0 4.4-3.9H18a4 4 0 0 0 4-4V7a3 3 0 0 0-3-3zM4 9V7a1 1 0 0 1 1-1h2v4.8A2 2 0 0 1 4 9zm16 0a2 2 0 0 1-3 1.8V6h2a1 1 0 0 1 1 1z"/></svg>`;
  if (name === 'flask') return `<svg class="ui-icon-svg flask-svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 20L14 11V5H15V3H9V5H10V11L5 20C4.2 21.3 5.2 23 6.7 23H17.3C18.8 23 19.8 21.3 19 20ZM7.5 19L11 12.7V5H13V12.7L16.5 19H7.5Z"/></svg>`;
  if (name === 'chip' || name === 'cpu') return `<svg class="ui-icon-svg chip-svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm3 4v8h6V8H9zm-5 2H2v2h2v-2zm0 4H2v2h2v-2zm16-4h2v2h-2v-2zm0 4h2v2h-2v-2zm-8-12V2h2v2h-2zm-4 0V2h2v2H8zm8 0V2h2v2h-2zm-8 16v2h2v-2H8zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2z"/></svg>`;
  if (name === 'cloud') return `<svg class="ui-icon-svg cloud-svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/></svg>`;
  if (name === 'gear') return `<svg class="ui-icon-svg gear-svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.48.48 0 0 0-.48-.41h-3.84c-.24 0-.45.17-.48.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.49.49 0 0 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>`;
  if (name === 'wifi') return `<svg class="ui-icon-svg wifi-svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 4C7.31 4 3.07 5.9 0 8.98L12 21 24 8.98A16.88 16.88 0 0 0 12 4zm0 4.5c3.27 0 6.27 1.24 8.54 3.29L12 20.3 3.46 11.79C5.73 9.74 8.73 8.5 12 8.5z"/></svg>`;
  if (name === 'vr') return `<svg class="ui-icon-svg vr-svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 5H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h4.5l2-2h3l2 2H20c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-12 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm8 0c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/></svg>`;
  if (name === 'soldering' || name === 'tools') return `<svg class="ui-icon-svg soldering-svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>`;
  if (name === 'bot' || name === 'robot') return `<svg class="ui-icon-svg bot-svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h4a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3h4V5.73A2 2 0 0 1 10 4a2 2 0 0 1 2-2zm-3 8a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm6 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-6 6h6v-1.5H9V16z"/></svg>`;
  if (name === 'prev') return `<svg class="ui-icon-svg prev-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>`;
  if (name === 'next') return `<svg class="ui-icon-svg next-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`;
  if (name === 'industry') return `<svg class="ui-icon-svg industry-svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 14H7v-2h4v2zm0-4H7v-2h4v2zm0-4H7V7h4v2zm6 8h-4v-2h4v2zm0-4h-4v-2h4v2zm0-4h-4V7h4v2z"/></svg>`;
  if (name === 'calendar' || name === 'event') return `<svg class="ui-icon-svg calendar-svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM5 8V6h14v2H5zm2 4h5v5H7v-5z"/></svg>`;
  if (name === 'pin' || name === 'location') return `<svg class="ui-icon-svg pin-svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>`;
  if (name === 'clock' || name === 'time') return `<svg class="ui-icon-svg clock-svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>`;
  if (name === 'grid' || name === 'all-apps') return `<svg class="ui-icon-svg grid-svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>`;
  if (name === 'ps-trophy-laurel') return `<svg class="ui-icon-svg ps-trophy-svg" width="66" height="66" viewBox="0 0 72 72" fill="none" aria-hidden="true"><path d="M22 49C17.5 42 16 33 18.5 22C19.5 26.5 22.5 30 26 31M19 25C17 18.5 20.5 13.5 26.5 11C25.5 16 28 20 31 22M21 37C17 32.5 17 26.5 21 21C23 25 26 27 29.5 28M24 45C20.5 41 20 35 24 30C27 34 29.5 36.5 33.5 37.5" stroke="#f6ce62" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/><path d="M50 49C54.5 42 56 33 53.5 22C52.5 26.5 49.5 30 46 31M53 25C55 18.5 51.5 13.5 45.5 11C46.5 16 44 20 41 22M51 37C55 32.5 55 26.5 51 21C49 25 46 27 42.5 28M48 45C51.5 41 52 35 48 30C45 34 42.5 36.5 38.5 37.5" stroke="#f6ce62" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/><rect x="29" y="52" width="14" height="4.5" rx="1.5" fill="#f8d675"/><path d="M32.5 44H39.5V52H32.5V44Z" fill="#e5af30"/><path d="M26 19H46V31C46 36.5 41.5 41 36 41C30.5 41 26 36.5 26 31V19Z" fill="url(#trophyCupGold)"/><path d="M26 22C21.5 22 19 25.5 19 29.5C19 33.5 22.5 36 26 36M46 22C50.5 22 53 25.5 53 29.5C53 33.5 49.5 36 46 36" stroke="#f6ce62" stroke-width="2.6" stroke-linecap="round"/><path d="M36 23.5L37.4 26.3L40.5 26.7L38.2 28.9L38.8 32L36 30.5L33.2 32L33.8 28.9L31.5 26.7L34.6 26.3L36 23.5Z" fill="#01331f"/><defs><linearGradient id="trophyCupGold" x1="26" y1="19" x2="46" y2="41" gradientUnits="userSpaceOnUse"><stop stop-color="#fff4b8"/><stop offset="0.35" stop-color="#f8cf5d"/><stop offset="1" stop-color="#cc8f1a"/></linearGradient></defs></svg>`;
  if (name === 'ps-users') return `<svg class="ui-icon-svg ps-card-icon-svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="7" r="3.2"/><path d="M12 11.6C9.1 11.6 6.5 13.1 6.5 15.6V17.5H17.5V15.6C17.5 13.1 14.9 11.6 12 11.6Z"/><circle cx="6" cy="9.2" r="2.3"/><path d="M6 12.6C4.8 12.6 3 13.6 3 15.1V16.6H5.2V15.3C5.4 14.3 6.1 13.4 7.2 12.8C6.8 12.7 6.4 12.6 6 12.6Z"/><circle cx="18" cy="9.2" r="2.3"/><path d="M18 12.6C17.6 12.6 17.2 12.7 16.8 12.8C17.9 13.4 18.6 14.3 18.8 15.3V16.6H21V15.1C21 13.6 19.2 12.6 18 12.6Z"/></svg>`;
  if (name === 'ps-chart') return `<svg class="ui-icon-svg ps-card-icon-svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="3" y="14" width="4.4" height="7.2" rx="1.2"/><rect x="9.8" y="10" width="4.4" height="11.2" rx="1.2"/><rect x="16.6" y="6" width="4.4" height="15.2" rx="1.2"/><path d="M4.5 10.5L14 3M14 3H9M14 3V8" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>`;
  if (name === 'ps-diploma') return `<svg class="ui-icon-svg ps-card-icon-svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 3.5C4 2.7 4.7 2 5.5 2H18.5C19.3 2 20 2.7 20 3.5V16.5C20 17.3 19.3 18 18.5 18H5.5C4.7 18 4 17.3 4 16.5V3.5Z" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><line x1="7.5" y1="6.5" x2="16.5" y2="6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="7.5" y1="10.2" x2="13.5" y2="10.2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="7.5" y1="13.8" x2="11.5" y2="13.8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="16.5" cy="15.5" r="3.2" fill="currentColor"/><path d="M15 18L14 22L16.5 20.5L19 22L18 18" fill="currentColor"/></svg>`;
  if (name === 'ps-briefcase') return `<svg class="ui-icon-svg ps-card-icon-svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9 4.5V3C9 2.45 9.45 2 10 2H14C14.55 2 15 2.45 15 3V4.5H20C21.1 4.5 22 5.4 22 6.5V11H2V6.5C2 5.4 2.9 4.5 4 4.5H9ZM10.8 3.8H13.2V4.5H10.8V3.8ZM2 12.8V18.5C2 19.6 2.9 20.5 4 20.5H20C21.1 20.5 22 19.6 22 18.5V12.8H13.5V14.5C13.5 14.9 13.1 15.2 12.8 15.2H11.2C10.9 15.2 10.5 14.9 10.5 14.5V12.8H2Z"/></svg>`;
  if (name === 'ps-building') return `<svg class="ui-icon-svg ps-bar-icon-svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2L2 7V9H22V7L12 2ZM4 11V19H7V11H4ZM9.5 11V19H12.5V11H9.5ZM15 11V19H18V11H15ZM2 21V23H22V21H2Z"/></svg>`;
  if (name === 'ps-support') return `<svg class="ui-icon-svg ps-bar-icon-svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.5 13C17.9 13 21 13.7 21 15.2V17H12V15.2C12 13.7 15.1 13 16.5 13ZM16.5 11.5C15.1 11.5 14 10.4 14 9C14 7.6 15.1 6.5 16.5 6.5C17.9 6.5 19 7.6 19 9C19 10.4 17.9 11.5 16.5 11.5ZM7.5 12C9.4 12 13 13 13 15V17H2V15C2 13 5.6 12 7.5 12ZM7.5 10.5C5.8 10.5 4.5 9.2 4.5 7.5C4.5 5.8 5.8 4.5 7.5 4.5C9.2 4.5 10.5 5.8 10.5 7.5C10.5 9.2 9.2 10.5 7.5 10.5Z"/></svg>`;
  if (name === 'ps-bulb') return `<svg class="ui-icon-svg ps-bar-icon-svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C8.1 2 5 5.1 5 9C5 11.4 6.2 13.5 8 14.7V17C8 17.6 8.4 18 9 18H15C15.6 18 16 17.6 16 17V14.7C17.8 13.5 19 11.4 19 9C19 5.1 15.9 2 12 2ZM9 20C9 20.6 9.4 21 10 21H14C14.6 21 15 20.6 15 20V19H9V20Z"/></svg>`;
  if (name === 'ps-handshake') return `<svg class="ui-icon-svg ps-bar-icon-svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.8 4.2C17.4 3.8 16.7 3.8 16.3 4.2L12.5 8L11.7 7.2C11.5 7 11.2 6.9 10.9 6.9C10.6 6.9 10.3 7 10.1 7.2L6.2 11.1C6 11.3 5.9 11.6 5.9 11.9C5.9 12.2 6 12.5 6.2 12.7L7.6 14.1L3.2 18.5C2.8 18.9 2.8 19.6 3.2 20C3.6 20.4 4.3 20.4 4.7 20L9.1 15.6L10.5 17C10.7 17.2 11 17.3 11.3 17.3C11.6 17.3 11.9 17.2 12.1 17L19.8 9.3C20.2 8.9 20.2 8.2 19.8 7.8L17.8 4.2ZM15.5 11.8L14.1 13.2L12.7 11.8L14.1 10.4L15.5 11.8Z"/></svg>`;
  return `<span class="ui-icon" aria-hidden="true">${({ book: '▤', building: '▥', quality: '✓', brief: '▣', compass: '◉', phone: '☎', gift: '◇' }[name] || '◆')}</span>`;
};

const pageGroups = [
  { label: 'About', icon: 'users', items: [['vision-mission', 'Vision And Mission'], ['chairman', "The Chairman's desk"], ['principal', "From the Principal"]] },
  { label: 'Academics', icon: 'book', items: [['academics', 'Academic Overview'], ['departments', 'Departments'], ['curriculum', 'Curriculum'], ['academic-calendar', 'Academic Calendar'], ['library', 'Library']] },
  { label: 'Admissions', icon: 'grad', items: [['programmes', 'UG & PG Programmes'], ['eligibility', 'Eligibility'], ['scholarships', 'Scholarships'], ['fees', 'Fee Information'], ['admission-enquiry', 'Admission Enquiry']] },
  { label: 'Campus', icon: 'building', items: [['campus-life', 'Campus Life'], ['facilities', 'Facilities'], ['hostel', 'Hostel'], ['transport', 'Transport'], ['sports', 'Sports'], ['clubs', 'Student Clubs'], ['ncc', 'NCC & NSS']] },
  { label: 'Quality & Excellence', icon: 'quality', items: [['centres-of-excellence', 'Centres of Excellence'], ['accreditations', 'NBA & NAAC'], ['examinations', 'Examinations'], ['iqac', 'IQAC']] },
  { label: 'Explore', icon: 'compass', items: [['training', 'Career Development'], ['research', 'Research & Development'], ['innovation', 'Innovation & Incubation'], ['alumni', 'Alumni'], ['contact', 'Contact Us']] }
];
const pageCopy = {
  'core-beliefs': ['Core Beliefs', 'Enduring principles that guide our mission.', 'Achieving academic success is our gateway, employability is our milestone, confident citizenship is our destination, discipline provides willpower, and education is our weapon to change the world.'],
  academics: ['Academic Overview', 'Knowledge designed for application.', 'Flexible learning, strong fundamentals, laboratories, projects and industry exposure form the core of the Sri Shakthi academic experience.'], departments: ['Departments', 'Ten disciplines. One culture of discovery.', 'Explore engineering and technology departments offering focused learning, laboratories, research and industry engagement.'], curriculum: ['Curriculum', 'Current, connected and outcome-driven.', 'The curriculum combines disciplinary depth, professional skills, multidisciplinary electives, projects and experiential learning.'], 'academic-calendar': ['Academic Calendar', 'Plan the academic year.', 'Semester schedules bring together instruction, assessment, events, examinations and academic milestones.'], library: ['Central Library', 'A connected knowledge centre.', 'Print and digital resources, journals, databases and focused study environments support teaching, learning and research.'], examinations: ['Examinations', 'Clear processes. Fair assessment.', 'The Controller of Examinations coordinates schedules, evaluation, results and academic records for autonomous programmes.'], programmes: ['UG & PG Programmes', 'Choose the field you want to shape.', 'Undergraduate and postgraduate pathways connect engineering foundations with emerging technologies and real-world practice.'], eligibility: ['Eligibility', 'Your pathway to Sri Shakthi.', 'Admission eligibility follows applicable Government of Tamil Nadu, AICTE and Anna University norms.'], scholarships: ['Scholarships', 'Talent deserves opportunity.', 'Merit and need-based scholarship pathways help ambitious learners access high-quality engineering education.'], fees: ['Fee Information', 'Clear guidance for applicants.', 'Contact the admissions office for programme-specific fee structure, counselling and scholarship guidance.'], 'campus-life': ['Campus Life', 'Learn. Build. Belong.', 'A vibrant 45-acre eco-friendly campus brings together academics, culture, sport, entrepreneurship and community.'], facilities: ['Facilities', 'Spaces made for exploration.', 'Advanced laboratories, collaborative classrooms, seminar halls, digital infrastructure and student support facilities.'], hostel: ['Hostel', 'A welcoming campus home.', 'Student residences support safe, comfortable living, shared learning and a strong sense of community.'], transport: ['Transport', 'Connected to Coimbatore.', 'College transport supports convenient travel across major routes in and around the city.'], sports: ['Sports', 'Energy beyond academics.', 'With 26+ activities and a proud competitive record, sport is central to student wellbeing and leadership.'], clubs: ['Student Clubs', 'Find your people. Build your voice.', 'Technical, cultural, social and professional clubs turn interests into projects, events and leadership experience.'], ncc: ['NCC & NSS', 'Unity, discipline and service.', 'Student service programmes develop character, citizenship, teamwork and responsibility.'], placements: ['Placements', 'Preparing talent for meaningful careers.', 'Career readiness spans aptitude, communication, technical training, internships, industry interaction and recruitment.'], training: ['Career Development', 'Skills that move careers forward.', 'Dedicated training helps students build technical confidence, professional communication and placement readiness.'], research: ['Research & Development', 'Ideas engineered into impact.', 'Faculty and students pursue applied research, publications, prototypes, consultancy and interdisciplinary collaboration.'], innovation: ['Innovation & Incubation', 'From problem to prototype.', 'Mentoring, maker culture and entrepreneurial support help student ideas grow into useful solutions and ventures.'], 'centres-of-excellence': ['Centres of Excellence', 'Advanced tools. Industry contexts.', 'Specialist centres connect learners with contemporary platforms, domain expertise and practical challenges.'], accreditations: ['Approvals & Accreditations', 'Quality recognised. Standards sustained.', 'An autonomous institution approved by AICTE, affiliated to Anna University, accredited by NAAC and with eligible programmes accredited by NBA.'], alumni: ['Alumni', 'Shakthians around the world.', 'A growing network of 10,273+ alumni strengthens mentorship, opportunity and lifelong institutional connection.'], iqac: ['IQAC & NAAC', 'Quality as a continuous practice.', 'The Internal Quality Assurance Cell supports evidence-led improvement across academics, governance and student experience.'], contact: ['Contact Us', 'We are here to help.', 'Visit the campus, speak with admissions, or connect with the institute office using the details below.']
};
const deptIcon = (k) => {
  const s = {
    agri: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-9"/><path d="M12 13c0-4.97 4.03-9 9-9 0 4.97-4.03 9-9 9Z"/><path d="M12 13C12 8.03 7.97 4 3 4c0 4.97 4.03 9 9 9Z"/></svg>`,
    biomed: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H7l2-4 3 8 2-4h6.78"/></svg>`,
    biotech: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 8 8 8"/><path d="m9 5 10 10"/><path d="m5 9 10 10"/><circle cx="6" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="6" cy="18" r="2"/><path d="m16 8-8 8"/></svg>`,
    civil: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16"/><path d="M6 18v-8"/><path d="M10 18v-8"/><path d="M14 18v-8"/><path d="M18 18v-8"/><path d="m3 10 9-7 9 7"/><path d="M2 22h20"/></svg>`,
    cse: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="12" x="3" y="4" rx="2"/><line x1="2" x2="22" y1="20" y2="20"/></svg>`,
    eee: `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2 3 14h8l-1 8 11-12h-8l1-8Z"/></svg>`,
    ece: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.93 19.07a10 10 0 0 1 0-14.14"/><path d="M7.76 16.24a6 6 0 0 1 0-8.48"/><circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 0 1 0 8.48"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>`,
    food: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 22 16 8"/><path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"/><path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"/><path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"/><path d="M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"/></svg>`,
    it: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    mech: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
    aids: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>`,
    aiml: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="5" y="5" rx="2"/><path d="M9 9h6v6H9z"/><path d="M9 1v4"/><path d="M15 1v4"/><path d="M9 19v4"/><path d="M15 19v4"/><path d="M1 9h4"/><path d="M1 15h4"/><path d="M19 9h4"/><path d="M19 15h4"/></svg>`,
    cyber: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><rect width="6" height="5" x="9" y="10" rx="1"/><path d="M10 10V8a2 2 0 0 1 4 0v2"/></svg>`,
    vlsi: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><circle cx="9" cy="9" r="1" fill="currentColor"/><circle cx="15" cy="9" r="1" fill="currentColor"/><circle cx="9" cy="15" r="1" fill="currentColor"/><circle cx="15" cy="15" r="1" fill="currentColor"/><path d="M4 9H2"/><path d="M4 15H2"/><path d="M22 9h-2"/><path d="M22 15h-2"/><path d="M9 4V2"/><path d="M15 4V2"/><path d="M9 22v-2"/><path d="M15 22v-2"/></svg>`,
    lightning: `<svg width="18" height="18" viewBox="0 0 24 24" fill="#003c24"><path d="M13 2 3 14h8l-1 8 11-12h-8l1-8Z"/></svg>`,
    chart: `<svg width="20" height="20" viewBox="0 0 24 24" fill="#cca01d"><rect x="3" y="12" width="4" height="8" rx="1"/><rect x="10" y="7" width="4" height="13" rx="1"/><rect x="17" y="3" width="4" height="17" rx="1"/></svg>`,
    grad: `<svg width="26" height="26" viewBox="0 0 24 24" fill="#00472b"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`
  };
  return s[k] || `<span>◆</span>`;
};

const ugPrograms = [
  ['Agricultural Engineering', 'Sustainable solutions for a better tomorrow', 'agri'],
  ['Artificial Intelligence & Data Science', 'From data to real-world impact', 'aids'],
  ['Artificial Intelligence & Machine Learning', 'Building intelligent systems', 'aiml'],
  ['Biomedical Engineering', 'Technology for healthier lives', 'biomed'],
  ['Biotechnology', 'Innovating for a brighter future', 'biotech'],
  ['Civil Engineering', 'Building resilient infrastructure', 'civil'],
  ['Computer Science & Engineering', 'Driving the digital transformation', 'cse'],
  ['CSE (Cyber Security)', 'Securing the digital tomorrow', 'cyber'],
  ['Electrical & Electronics', 'Powering the future', 'eee'],
  ['Electronics & Communication', 'Connecting ideas to possibilities', 'ece'],
  ['Food Technology', 'Innovating for healthy tomorrow', 'food'],
  ['Information Technology', 'Shaping a smarter world', 'it'],
  ['Mechanical Engineering', 'Engineering what moves the world', 'mech'],
  ['VLSI Design', 'Designing the next generation', 'vlsi']
];
const pgPrograms = [
  ['M.E. CAD / CAM', 'Automated digital manufacturing & robotics', 'mech'],
  ['M.E. Computer Science & Engineering', 'Advanced computing & machine intelligence', 'cse'],
  ['M.E. Embedded Systems', 'Smart edge devices & connected IoT', 'aiml'],
  ['M.E. Structural Engineering', 'Resilient modern infrastructure design', 'civil'],
  ['M.E. VLSI Design', 'Next-generation semiconductor architectures', 'vlsi'],
  ['Master of Business Administration (MBA)', 'Strategic leadership & global enterprise management', 'aids'],
  ['Master of Computer Applications (MCA)', 'Enterprise software architecture & development', 'it']
];
const programs = ugPrograms;

const bottomBannerHtml = `<div class="programme-bottom-banner reveal"><div class="bottom-banner-cap">${deptIcon('grad')}</div><div class="bottom-banner-text"><h4>Choose a programme.</h4><p>Shape a better tomorrow.</p></div><div class="bottom-banner-line"></div><div class="bottom-banner-script">Engineers for a Better Tomorrow</div></div>`;


function header() {
  return `<div class="notice"><div class="notice-track"><span><b>ADMISSIONS 2026–27 NOW OPEN</b><i></i> Applications are invited for undergraduate and postgraduate engineering programmes <i></i> Begin your journey at Sri Shakthi <i></i> TNEA Counselling Code: 2727</span><span aria-hidden="true"><b>ADMISSIONS 2026–27 NOW OPEN</b><i></i> Applications are invited for undergraduate and postgraduate engineering programmes <i></i> Begin your journey at Sri Shakthi <i></i> TNEA Counselling Code: 2727</span></div></div>
<header class="institution-header-v4 exact-image-header"><div class="institution-header-shell"><a class="siet-header-image" href="#/" aria-label="Sri Shakthi Institute of Engineering and Technology home"><img src="/brand/siet-exact-header.png" alt="Sri Shakthi Institute of Engineering and Technology — NBA accredited, NAAC A grade, counselling code 2727" width="2048" height="256"></a><nav class="institution-navbar" aria-label="Main navigation"><button class="institution-mobile-toggle" aria-label="Open navigation menu" type="button">${icon('menu')}</button><a class="institution-mobile-logo" href="#/" aria-label="Sri Shakthi Home"><img src="/brand/siet-logo.png" alt="Sri Shakthi" class="mobile-logo-img"><span class="mobile-logo-text"><b>SRI SHAKTHI</b><small>Autonomous Institution</small></span></a><a class="institution-home" href="#/" aria-label="Home">${icon('home')}</a><div class="institution-menu">${pageGroups.map((g, i) => `${i === 5 ? '<a class="institution-nav-link" href="#/placements">Placements</a>' : ''}<div class="institution-nav-group"><button type="button">${g.label}${icon('down')}</button><div>${g.items.map(([s, n]) => `<a href="#/${s}">${n}</a>`).join('')}</div></div>`).join('')}<a class="institution-nav-link" href="#/careers">Careers</a></div><a class="institution-nav-apply" href="#/apply">Apply Now ${icon('arrow')}</a></nav></div></header>
<div class="mobile-nav-backdrop"></div>
<aside class="mobile-nav" aria-label="Mobile Navigation"><div class="mobile-nav-header"><a href="#/" class="mobile-nav-brand"><img src="/brand/siet-logo.png" alt="Sri Shakthi"><div><strong>SRI SHAKTHI</strong><small>Autonomous Institution</small></div></a><button class="mobile-nav-close" aria-label="Close menu">${icon('close')}</button></div><div class="mobile-nav-body"><a href="#/" class="mobile-nav-link mobile-nav-home">${icon('home')} Home</a><div class="mobile-nav-accordion">${pageGroups.map((g, i) => `${i === 5 ? '<a class="mobile-nav-link" href="#/placements">Placements</a>' : ''}<div class="mobile-nav-group"><button type="button" class="mobile-nav-group-toggle" aria-expanded="false"><span>${g.label}</span>${icon('down')}</button><div class="mobile-nav-subitems">${g.items.map(([s, n]) => `<a href="#/${s}" class="mobile-nav-sublink">${n}</a>`).join('')}</div></div>`).join('')}<a class="mobile-nav-link" href="#/careers">Careers @ SIET</a></div></div><div class="mobile-nav-footer"><a class="mobile-apply-link" href="#/apply">Apply Now ${icon('arrow')}</a></div></aside>`
}

function footer() { return `<footer class="site-footer footer-reference"><div class="footer-top"><div class="footer-brand"><a class="mark" href="#/"><img src="/brand/siet-logo.png" alt="Sri Shakthi emblem"><span><b>SRI SHAKTHI</b><small>INSTITUTE OF ENGINEERING AND TECHNOLOGY</small><em>AUTONOMOUS · AFFILIATED TO ANNA UNIVERSITY</em></span></a><p>Powering the youth.<br>Empowering the nation.</p></div><div class="footer-sitemap">${pageGroups.map(g => `<div class="footer-link-group"><b>${g.label}</b>${g.items.map(([s, n]) => `<a href="#/${s}"><span>›</span>${n}</a>`).join('')}</div>`).join('')}</div></div><div class="footer-legal"><small>© ${new Date().getFullYear()} Sri Shakthi Institute of Engineering &amp; Technology. All rights reserved.</small><nav><a href="#/privacy-policy">Privacy Policy</a><i></i><a href="#/terms">Terms of Use</a><i></i><a href="#/sitemap">Sitemap</a></nav></div></footer>` }
const counter = (to, suffix = '') => `<span class="js-counter" data-to="${to}" data-suffix="${suffix}">0${suffix}</span>`;

function placementHighlightsCardInner() {
  return `
    <!-- Top Script Flourish as in Reference Image 2 -->

    <!-- Centered Heading Group -->
    <div class="placement-heading-group">
      <h2 class="placement-main-heading">
        <span class="heading-green">Placement</span> <span class="heading-gold">Highlights</span>
      </h2>
      <div class="placement-subheading-row">
        <span class="subheading-gold-line" aria-hidden="true"></span>
        <span class="subheading-batch">2025 – 2026</span>
        <span class="subheading-batch-tag">( BATCH 2025–2026 )</span>
        <span class="subheading-gold-line" aria-hidden="true"></span>
      </div>
      <div class="placement-heading-motto">TODAY. IMPACT TOMORROW.</div>
    </div>

    <!-- 4 Standalone Statistic Cards in one row -->
    <div class="ps-standalone-cards-row">
      <!-- Card 01 -->
      <article class="ps-stat-card">
        <div class="ps-stat-icon-circle">
          ${icon('ps-users')}
        </div>
        <div class="ps-stat-pill">₹10 LPA+</div>
        <strong class="ps-stat-count">${counter(18)}</strong>
        <span class="ps-stat-label">STUDENTS PLACED</span>
      </article>

      <!-- Card 02 -->
      <article class="ps-stat-card">
        <div class="ps-stat-icon-circle">
          ${icon('ps-chart')}
        </div>
        <div class="ps-stat-pill">₹8 LPA+</div>
        <strong class="ps-stat-count">${counter(42)}</strong>
        <span class="ps-stat-label">STUDENTS PLACED</span>
      </article>

      <!-- Card 03 -->
      <article class="ps-stat-card">
        <div class="ps-stat-icon-circle">
          ${icon('ps-diploma')}
        </div>
        <div class="ps-stat-pill">₹6 LPA+</div>
        <strong class="ps-stat-count">${counter(76)}</strong>
        <span class="ps-stat-label">STUDENTS PLACED</span>
      </article>

      <!-- Card 04 -->
      <article class="ps-stat-card">
        <div class="ps-stat-icon-circle">
          ${icon('ps-briefcase')}
        </div>
        <div class="ps-stat-pill">₹4 LPA+</div>
        <strong class="ps-stat-count">${counter(128)}</strong>
        <span class="ps-stat-label">STUDENTS PLACED</span>
      </article>
    </div>

    <!-- Centered Text Below Cards -->
    <div class="placement-cards-footer-text">
      <span>SAME PEOPLE</span>
      <span class="footer-sep" aria-hidden="true">|</span>
      <span>BRIGHTER OPPORTUNITIES</span>
      <span class="footer-sep" aria-hidden="true">|</span>
      <span>A STRONGER TOMORROW</span>
    </div>
  `;
}

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

function placementMarqueeSection() {
  const renderLogos = (items) => items.map(item => `
    <div class="placement-marquee-item" data-logo="${item.file.replace('-logo.png', '').toLowerCase()}">
      <img src="/brand/placement-company-logo/line-${item.line}/${item.file}" alt="${item.name} logo" class="placement-marquee-logo" loading="eager" decoding="async">
    </div>
  `).join('');

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

function homePage() {
  return `<main class="home-page"><section class="placement-stage placement-stage-v2"><div class="placement-v2-hero">
  <div class="placement-v2-backdrop" aria-hidden="true">
    <div class="placement-v2-building-photo"></div>
    <div class="placement-v2-photo-overlay"></div>
    <svg class="placement-hero-wave-svg" viewBox="0 0 1000 800" preserveAspectRatio="none" fill="none" aria-hidden="true">
      <path d="M0 0H740C790 140 690 260 670 360C640 460 760 520 840 590C920 660 920 740 820 800H0V0Z" fill="url(#heroYellowWaveGrad)"/>
      <defs>
        <linearGradient id="heroYellowWaveGrad" x1="0" y1="0" x2="800" y2="800" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#ffcd29"/>
          <stop offset="55%" stop-color="#fbbd18"/>
          <stop offset="100%" stop-color="#f5a60e"/>
        </linearGradient>
      </defs>
    </svg>
    <div class="placement-hero-top-mint-arc"></div>
  </div>
  <div class="placement-v2-container">
    <div class="placement-v2-copy reveal">
      <div class="placement-v2-kicker">PLACEMENT EXCELLENCE</div>
      <div class="placement-v2-pill">CLASS OF 2027</div>
      <h1 class="placement-v2-title">
        <span>POWERING</span>
        <span>THE YOUTH</span>
        <span class="title-second-part">EMPOWERING</span>
        <span class="title-second-part">THE NATION</span>
      </h1>
      <p class="placement-v2-desc">Industry-aligned training, hands-on learning and a <br> vibrant placement ecosystem that transforms engineering potential into meaningful careers.</p>
      <div class="placement-v2-actions-area">
        <div class="placement-v2-actions">
          <button type="button" class="placement-v2-btn primary js-scroll-programmes">Explore Placements ${icon('arrow')}</button>
          <button type="button" class="placement-v2-btn secondary js-video">${icon('play')} Watch Placement Journey</button>
        </div>
      </div>
    </div>
    <div class="placement-right-section reveal">
      ${placementHighlightsCardInner()}
    </div>
  </div>
  <div class="placement-hero-bottom-strip reveal">
    <div class="placement-bottom-features">
      <div class="bottom-feature-item">
        <span class="feature-icon">${icon('ps-building')}</span>
        <span>Industry Ready Workforce</span>
      </div>
      <span class="feature-bar-divider" aria-hidden="true"></span>
      <div class="bottom-feature-item">
        <span class="feature-icon">${icon('star')}</span>
        <span>Strong Corporate Connect</span>
      </div>
      <span class="feature-bar-divider" aria-hidden="true"></span>
      <div class="bottom-feature-item">
        <span class="feature-icon">${icon('chart')}</span>
        <span>Consistent Placement Growth</span>
      </div>
    </div>
    <div class="placement-bottom-script" aria-hidden="true">
      <span>Empower</span>
      <span>Change</span>
      <span>Lead</span>
    </div>
  </div>
</div></section>
 ${placementMarqueeSection()}
<section class="about-premium">
  <div class="about-glow glow-one" aria-hidden="true"></div>
  <div class="about-glow glow-two" aria-hidden="true"></div>
  <div class="about-container">
    <div class="about-label reveal">
      <span>01</span>
      <span class="line" aria-hidden="true"></span>
      <p>WHO WE ARE</p>
    </div>
    <div class="about-main">
      <div class="about-heading reveal">
        <h2>A campus where <span class="highlight-word">curiosity</span> becomes <span>capability.</span></h2>
      </div>
      <div class="about-content reveal">
        <span class="about-small-title">OUR PURPOSE</span>
        <p>Sri Shakthi Institute of Engineering and Technology is an autonomous institution in Coimbatore, approved by AICTE and affiliated to Anna University.</p>
        <p>Our industry-driven ecosystem brings engineering out of textbooks and into the real world.</p>
        <button type="button" class="discover-link js-discover-btn">
          <span>Discover our vision</span>
          <span class="arrow-circle">${icon('arrow')}</span>
        </button>
      </div>
    </div>
    <div class="stats-grid">
      ${[[4263, 'Job offers', 'Last 5 Years', 'chart'], [657, 'Offers in 2026', 'Growing Every Year', 'trend'], [10273, 'Alumni Worldwide', 'Connected Globally', 'connect'], [5984, 'Students on Campus', 'Learning & Innovating', 'grad']].map(([n, t, s, ic], i) => `
        <article class="stat-box reveal">
          <span class="stat-index">0${i + 1}</span>
          <span class="stat-icon" aria-hidden="true">${icon(ic)}</span>
          <h3>${counter(n, '+')}</h3>
          <p>${t}</p>
          <span class="stat-subtitle">${s}</span>
          <span class="stat-bottom-line" aria-hidden="true"></span>
        </article>
      `).join('')}
    </div>
  </div>
  <div class="bottom-gold-line" aria-hidden="true"></div>
</section>
<section class="programmes-showcase programmes-section">
  <div class="watermark-script bottom-script" aria-hidden="true">Engineers for a Better Tomorrow</div>
  <div class="programmes-container">
    <div class="programmes-hero-v2">
      <div class="programmes-left-col reveal">
        <div class="section-kicker">
          <span>02</span>
          <i></i>
          <span>FIND YOUR FIELD</span>
        </div>
        <h2 class="programmes-main-title">
          Programmes<br>built for a <em>changing</em> world.
        </h2>
        <p class="programmes-subtitle">
          Foundational rigour, advanced technology labs, industry collaboration and project-led learning.
        </p>
        <div class="programme-toggle-pill">
          <button class="toggle-btn active" data-level="UG" type="button">UG Programmes</button>
          <button class="toggle-btn" data-level="PG" type="button">PG Programmes</button>
        </div>
      </div>
      <div class="programmes-feature-card reveal">
        <div class="feature-card-content">
          <span class="feature-icon-badge">${deptIcon('lightning')}</span>
          <h3 class="feature-card-title">Learn Today<br>Build Tomorrow</h3>
          <p class="feature-card-desc">
            Explore industry-relevant programmes designed to create future-ready engineers and innovators.
          </p>
          <button type="button" class="feature-action-btn js-scroll-programmes">
            <span class="feature-arrow-btn">→</span>
            <span>Discover Your Path</span>
          </button>
        </div>
        <div class="feature-card-visual">
          <div class="feature-arch-frame">
            <img src="/brand/techpark-local.png" alt="Sri Shakthi Tech Park" width="360" height="270" loading="lazy">
          </div>
          <div class="feature-stat-pill">
            <span class="stat-chart-icon">${deptIcon('chart')}</span>
            <div class="stat-pill-info">
              <strong id="prog-count-badge">14+</strong>
              <span id="prog-level-badge">UG Programmes</span>
              <small>Across Emerging Domains</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="programme-grid-container">
      <div id="programme-grid" class="programme-grid-v2">
        ${programmeCards(ugPrograms)}
        ${bottomBannerHtml}
      </div>
    </div>
  </div>
</section>
<section class="campus-section">
  <!-- Top-Right Background Accent -->

  <div class="campus-container">
    <aside class="campus-left reveal">
      <div class="campus-eyebrow">
        <span class="eyebrow-num">03</span>
        <span class="eyebrow-dash">—</span>
        <span class="eyebrow-text">LIFE AT SRI SHAKTHI</span>
      </div>
      <h1 class="campus-heading">Campus<br>Moments.<br><em>Student stories.</em></h1>
      <p class="campus-desc">Explore learning, innovation, celebrations and everyday campus experiences from the Sri Shakthi community.</p>
      
      <div class="campus-actions">
        <button type="button" class="campus-btn-primary js-explore-campus">Explore campus ${icon('arrow')}</button>
        <button type="button" class="campus-video-btn js-video">
          <span class="video-circle-icon">${icon('play')}</span>
          <span class="video-label-text">Watch<br>our story</span>
        </button>
      </div>

      <div class="campus-bottom-sketch-wrap" aria-hidden="true">
        <div class="campus-sketch-graphic"></div>
        <div class="campus-people-footer">PEOPLE <i>|</i> IDEAS <i>|</i> IMPACT <span class="footer-gold-bar"></span></div>
      </div>
    </aside>

    <main class="campus-content">
      <div class="campus-gallery-v2">
        <!-- Card 01: Student Life -->
        <article class="campus-card-v2 card-01 reveal" role="button" tabindex="0">
          <span class="card-index">01</span>
          <span class="card-floating-badge badge-green">${icon('grad')}</span>
          <img src="/brand/campus-life/student-life.png" alt="Student Life at Sri Shakthi" loading="lazy">
          <div class="card-bottom-overlay">
            <div class="card-info-side">
              <div class="card-title-row">
                <i class="cat-accent-bar bar-mint"></i>
                <h4 class="card-title">Student Life</h4>
              </div>
              <p class="card-subtitle">A campus that inspires every day.</p>
            </div>
            <span class="card-circle-arrow">→</span>
          </div>
        </article>

        <!-- Card 02: Sports & Recreation -->
        <article class="campus-card-v2 card-02 reveal" role="button" tabindex="0">
          <span class="card-index">02</span>
          <span class="card-floating-badge badge-sand">${icon('runner')}</span>
          <img src="/brand/campus-life/sports.png" alt="Sports & Recreation" loading="lazy">
          <div class="card-bottom-overlay">
            <div class="card-info-side">
              <div class="card-title-row">
                <i class="cat-accent-bar bar-gold"></i>
                <h4 class="card-title">Sports & Recreation</h4>
              </div>
              <p class="card-subtitle">Victory is a habit here.</p>
            </div>
            <span class="card-circle-arrow">→</span>
          </div>
        </article>

        <!-- Card 03: Innovation -->
        <article class="campus-card-v2 card-03 reveal" role="button" tabindex="0">
          <span class="card-index">03</span>
          <span class="card-floating-badge badge-yellow">${icon('bulb')}</span>
          <img src="/brand/campus-life/innovation.png" alt="Innovation & Labs" loading="lazy">
          <div class="card-bottom-overlay">
            <div class="card-info-side">
              <div class="card-title-row">
                <i class="cat-accent-bar bar-amber"></i>
                <h4 class="card-title">Innovation</h4>
              </div>
              <p class="card-subtitle">Ideas that create impact.</p>
            </div>
            <span class="card-circle-arrow">→</span>
          </div>
        </article>

        <!-- Card 04: Culture & Arts -->
        <article class="campus-card-v2 card-04 reveal" role="button" tabindex="0">
          <span class="card-index">04</span>
          <span class="card-floating-badge badge-sand">${icon('masks')}</span>
          <img src="/brand/campus-life/cultural.png" alt="Culture & Arts" loading="lazy">
          <div class="card-bottom-overlay">
            <div class="card-info-side">
              <div class="card-title-row">
                <i class="cat-accent-bar bar-orange"></i>
                <h4 class="card-title">Culture & Arts</h4>
              </div>
              <p class="card-subtitle">Tradition. Creativity. Every performance.</p>
            </div>
            <span class="card-circle-arrow">→</span>
          </div>
        </article>

        <!-- Card 05: Learning & Growth -->
        <article class="campus-card-v2 card-05 reveal" role="button" tabindex="0">
          <span class="card-index">05</span>
          <span class="card-floating-badge badge-mint">${icon('users')}</span>
          <img src="/brand/campus-life/learning-growth.png" alt="Learning & Growth" loading="lazy">
          <div class="card-bottom-overlay">
            <div class="card-info-side">
              <div class="card-title-row">
                <i class="cat-accent-bar bar-mint"></i>
                <h4 class="card-title">Learning & Growth</h4>
              </div>
              <p class="card-subtitle">Today's learners. Tomorrow's leaders.</p>
            </div>
            <span class="card-circle-arrow">→</span>
          </div>
        </article>

        <!-- Card 06: Our Campus -->
        <article class="campus-card-v2 card-06 reveal" role="button" tabindex="0">
          <span class="card-index">06</span>
          <span class="card-floating-badge badge-leaf">${icon('leaf')}</span>
          <img src="/brand/techpark-local.png" alt="Sri Shakthi Tech Park & Campus" loading="lazy">
          <div class="card-bottom-overlay">
            <div class="card-info-side">
              <div class="card-title-row">
                <i class="cat-accent-bar bar-green"></i>
                <h4 class="card-title">Our Campus</h4>
              </div>
              <p class="card-subtitle">A greener, brighter tomorrow.</p>
            </div>
            <span class="card-circle-arrow">→</span>
          </div>
        </article>
      </div>

    </main>
  </div>
</section>

<!-- Section 04: Special Labs (Advanced Labs for a Brighter Tomorrow) -->
<section class="special-labs-section" id="special-labs">

  <div class="labs-container">
    <!-- Left Column: Eyebrow, Heading, Description, CTA, Watermark, Footer -->
    <aside class="labs-left reveal">
      <div class="labs-eyebrow">
        <span class="eyebrow-num">04</span>
        <span class="eyebrow-dash">—</span>
        <span class="eyebrow-text">SPECIAL LABS</span>
      </div>
      <h2 class="labs-heading">
        Advanced<br>
        Labs for a<br>
        <em>Brighter<br>Tomorrow.</em>
      </h2>
      <p class="labs-desc">
        State-of-the-art laboratories to explore, experiment and innovate — empowering students with hands-on experience for real-world impact.
      </p>

      <div class="labs-actions">
        <a href="#/centres-of-excellence" class="labs-btn-primary">Explore Our Labs →</a>
      </div>

      <div class="labs-script-watermark" aria-hidden="true">
        <span>Learn &#10003;</span>
        <span>Experiment</span>
        <span>Innovate</span>
        <svg class="script-curve-line" width="96" height="12" viewBox="0 0 96 12" fill="none">
          <path d="M2 10C32 3 70 2 94 8" stroke="#d4a300" stroke-width="2.5" stroke-linecap="round"/>
        </svg>
      </div>

      <div class="labs-bottom-sketch-wrap" aria-hidden="true">
        <div class="campus-people-footer">PEOPLE <i>|</i> IDEAS <i>|</i> IMPACT <span class="footer-gold-bar"></span></div>
      </div>
    </aside>

    <!-- Right Column: Top Bar + 8-Card 4x2 Grid + Bottom Stats Row -->
    <main class="labs-content">
      <!-- 8-Card 4x2 Gallery Grid -->
      <div class="labs-gallery-grid">
        <!-- Card 01: AI Lab -->
        <article class="lab-card card-01 reveal" role="button" tabindex="0" data-cat="emerging" aria-label="01 AI Lab - Explore intelligent solutions for tomorrow.">
          <img src="/brand/special-labs/lab-ai-hd.jpg" alt="01 AI Lab" loading="lazy" decoding="async">
        </article>

        <!-- Card 02: Cyber & Cloud Lab -->
        <article class="lab-card card-02 reveal" role="button" tabindex="0" data-cat="emerging" aria-label="02 Cyber & Cloud Lab - Secure today. Scale tomorrow.">
          <img src="/brand/special-labs/lab-cyber-cloud-hd.jpg" alt="02 Cyber & Cloud Lab" loading="lazy" decoding="async">
        </article>

        <!-- Card 03: VLSI Lab -->
        <article class="lab-card card-03 reveal" role="button" tabindex="0" data-cat="core" aria-label="03 VLSI Lab - Designing the next generation chips.">
          <img src="/brand/special-labs/lab-vlsi-hd.jpg" alt="03 VLSI Lab" loading="lazy" decoding="async">
        </article>

        <!-- Card 04: Embedded Systems Lab -->
        <article class="lab-card card-04 reveal" role="button" tabindex="0" data-cat="core" aria-label="04 Embedded Systems Lab - Build. Integrate. Innovate.">
          <img src="/brand/special-labs/lab-embedded-hd.jpg" alt="04 Embedded Systems Lab" loading="lazy" decoding="async">
        </article>

        <!-- Card 05: IoT Lab -->
        <article class="lab-card card-05 reveal" role="button" tabindex="0" data-cat="emerging" aria-label="05 IoT Lab - Connect ideas to a smarter world.">
          <img src="/brand/special-labs/lab-iot-hd.jpg" alt="05 IoT Lab" loading="lazy" decoding="async">
        </article>

        <!-- Card 06: AR & VR Lab -->
        <article class="lab-card card-06 reveal" role="button" tabindex="0" data-cat="design" aria-label="06 AR & VR Lab - Experience. Create. Go Beyond.">
          <img src="/brand/special-labs/lab-ar-vr-hd.jpg" alt="06 AR & VR Lab" loading="lazy" decoding="async">
        </article>

        <!-- Card 07: PCB Design & Assembly Lab -->
        <article class="lab-card card-07 reveal" role="button" tabindex="0" data-cat="core" aria-label="07 PCB Design & Assembly Lab - From design to real-world prototypes.">
          <img src="/brand/special-labs/lab-pcb-hd.jpg" alt="07 PCB Design & Assembly Lab" loading="lazy" decoding="async">
        </article>

        <!-- Card 08: Robotics & Automation Lab -->
        <article class="lab-card card-08 reveal" role="button" tabindex="0" data-cat="design" aria-label="08 Robotics & Automation Lab - Ideate. Build. Automate.">
          <img src="/brand/special-labs/lab-robotics-hd.jpg" alt="08 Robotics & Automation Lab" loading="lazy" decoding="async">
        </article>
      </div>

      <!-- Bottom Floating Stats Row (Centered underneath the 4-column gallery) -->
      <div class="labs-bottom-row reveal">
        <div class="labs-stats-pill">
          <div class="lab-stat-item">
            <span class="lab-stat-icon badge-flask">${icon('flask')}</span>
            <div class="lab-stat-text">
              <strong>8</strong>
              <small>Specialized Labs</small>
            </div>
          </div>
          <span class="stats-item-divider" aria-hidden="true"></span>
          <div class="lab-stat-item">
            <span class="lab-stat-icon badge-users">${icon('users')}</span>
            <div class="lab-stat-text">
              <strong>${counter(500, '+')}</strong>
              <small>Students Trained</small>
            </div>
          </div>
          <span class="stats-item-divider" aria-hidden="true"></span>
          <div class="lab-stat-item">
            <span class="lab-stat-icon badge-bulb">${icon('bulb')}</span>
            <div class="lab-stat-text">
              <strong>${counter(100, '+')}</strong>
              <small>Projects & Innovations</small>
            </div>
          </div>
          <span class="stats-item-divider" aria-hidden="true"></span>
          <div class="lab-stat-item">
            <span class="lab-stat-icon badge-industry">${icon('industry')}</span>
            <div class="lab-stat-text">
              <strong>${counter(20, '+')}</strong>
              <small>Industry Collaborations</small>
            </div>
          </div>
        </div>

        <a href="#/centres-of-excellence" class="labs-cta-banner" aria-label="Explore labs and centres of excellence">
          <div class="labs-banner-copy">
            <strong>Labs Today.</strong>
            <span>Leaders Tomorrow.</span>
          </div>
          <span class="labs-banner-arrow" aria-hidden="true">→</span>
        </a>
      </div>
    </main>
  </div>

  <div class="labs-section-footer" aria-hidden="true">
    <span>A STRONGER TOMORROW THROUGH INNOVATION</span>
    <span class="footer-gold-bar"></span>
  </div>
</section>

<!-- Section 06: News & Events (What's Happening at Sri Shakthi) -->
<section class="news-events-section" id="news-events">
  <div class="events-arc-circle arc-1" aria-hidden="true"></div>

  <div class="events-container">
    <!-- Top Row: Left Heading & Right Featured Event Card -->
    <div class="events-hero-row">
      <!-- Left Column: Eyebrow, Heading, Desc, CTA, Avatars -->
      <div class="events-left-col reveal">
        <div class="events-eyebrow">
          <span class="eyebrow-num">05</span>
          <span class="eyebrow-dash">—</span>
          <span class="eyebrow-text">NEWS &amp; EVENTS</span>
        </div>
        <h2 class="events-heading">
          What's<br>
          Happening<br>
          <em>at Sri Shakthi.</em>
        </h2>
        <p class="events-desc">
          Stay updated with the latest events, achievements and opportunities across our campus community.
        </p>

        <a href="#/campus-life" class="events-btn-primary">View All Events →</a>

        <div class="events-community-pill">
          <div class="community-avatars">
            <img src="/brand/campus-life/student-life.png" alt="Student" class="avatar-circle">
            <img src="/brand/campus-life/placements.png" alt="Student" class="avatar-circle">
            <img src="/brand/campus-life/learning-growth.png" alt="Student" class="avatar-circle">
            <span class="avatar-plus">+</span>
          </div>
          <div class="community-text">
            <strong>A vibrant campus.</strong>
            <span>A happening community.</span>
          </div>
        </div>
      </div>

      <!-- Right Column: Large Featured Event Card -->
      <div class="events-featured-card reveal">
        <div class="featured-bg-photo" style="background-image: url('/brand/events/featured-technovate.jpg');"></div>
        <div class="featured-overlay-content">
          <div class="featured-left-info">
            <span class="featured-gold-badge">★ Featured Event</span>
            <h3 class="featured-title">TechNovate 2026</h3>
            <span class="featured-sub-tag">TECHNICAL SYMPOSIUM</span>
            <p class="featured-summary">
              A platform to ideate, innovate and build solutions for a better tomorrow. Join us for a day of learning, networking and inspiration.
            </p>

            <div class="featured-meta-list">
              <div class="featured-meta-row">
                <span class="meta-icon">${icon('calendar')}</span>
                <span>28 Aug 2026</span>
              </div>
              <div class="featured-meta-row">
                <span class="meta-icon">${icon('pin')}</span>
                <span>Main Auditorium</span>
              </div>
              <div class="featured-meta-row">
                <span class="meta-icon">${icon('clock')}</span>
                <span>09:00 AM - 05:00 PM</span>
              </div>
            </div>

            <a href="#/campus-life" class="featured-know-more-btn">Know More →</a>
          </div>

          <div class="featured-nav-controls" aria-hidden="true">
            <button type="button" class="featured-arrow-btn prev-feat" aria-label="Previous featured event">${icon('prev')}</button>
            <span class="featured-counter">01 / 03</span>
            <button type="button" class="featured-arrow-btn next-feat" aria-label="Next featured event">${icon('next')}</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Category Filter Tabs -->
    <div class="events-filter-bar reveal" role="tablist" aria-label="Event categories">
      <button class="event-filter-pill active" type="button" data-cat="all">${icon('grid')} All</button>
      <button class="event-filter-pill" type="button" data-cat="technical">${icon('gear')} Technical</button>
      <button class="event-filter-pill" type="button" data-cat="cultural">${icon('music')} Cultural</button>
      <button class="event-filter-pill" type="button" data-cat="workshops">${icon('users')} Workshops</button>
      <button class="event-filter-pill" type="button" data-cat="sports">${icon('cup')} Sports</button>
      <button class="event-filter-pill" type="button" data-cat="others">••• Others</button>
    </div>

    <!-- 3-Card Event Grid -->
    <div class="events-cards-grid">
      <!-- Card 1: Sangamam 2026 -->
      <article class="event-item-card reveal" role="button" tabindex="0" data-cat="cultural others">
        <div class="event-card-media">
          <div class="event-date-badge">
            <strong class="date-num">15</strong>
            <span class="date-month">SEP</span>
          </div>
          <img src="/brand/events/event-sangamam.jpg" alt="Sangamam 2026 Cultural Event" loading="lazy">
        </div>
        <div class="event-card-body">
          <span class="event-cat-tag tag-orange">CULTURAL EVENT</span>
          <h4 class="event-card-title">Sangamam 2026</h4>
          <p class="event-card-desc">Celebrating talent, tradition and togetherness.</p>
          <div class="event-card-footer">
            <div class="event-meta-info">
              <div class="meta-item"><span class="meta-ico">${icon('pin')}</span><span>Open Air Theatre</span></div>
              <div class="meta-item"><span class="meta-ico">${icon('clock')}</span><span>04:00 PM - 10:00 PM</span></div>
            </div>
            <span class="event-circle-arrow">→</span>
          </div>
        </div>
      </article>

      <!-- Card 2: Industry Connect & Career Day -->
      <article class="event-item-card reveal" role="button" tabindex="0" data-cat="technical workshops">
        <div class="event-card-media">
          <div class="event-date-badge">
            <strong class="date-num">22</strong>
            <span class="date-month">SEP</span>
          </div>
          <img src="/brand/events/event-industry-connect.jpg" alt="Industry Connect & Career Day" loading="lazy">
        </div>
        <div class="event-card-body">
          <span class="event-cat-tag tag-gold">CAREER EVENT</span>
          <h4 class="event-card-title">Industry Connect &amp; Career Day</h4>
          <p class="event-card-desc">Meet industry leaders, explore opportunities and shape your future.</p>
          <div class="event-card-footer">
            <div class="event-meta-info">
              <div class="meta-item"><span class="meta-ico">${icon('pin')}</span><span>Convention Centre</span></div>
              <div class="meta-item"><span class="meta-ico">${icon('clock')}</span><span>10:00 AM - 04:00 PM</span></div>
            </div>
            <span class="event-circle-arrow">→</span>
          </div>
        </div>
      </article>

      <!-- Card 3: Inter-Department Sports Meet -->
      <article class="event-item-card reveal" role="button" tabindex="0" data-cat="sports others">
        <div class="event-card-media">
          <div class="event-date-badge">
            <strong class="date-num">03</strong>
            <span class="date-month">OCT</span>
          </div>
          <img src="/brand/events/event-sports-meet.jpg" alt="Inter-Department Sports Meet" loading="lazy">
        </div>
        <div class="event-card-body">
          <span class="event-cat-tag tag-orange">SPORTS EVENT</span>
          <h4 class="event-card-title">Inter-Department Sports Meet</h4>
          <p class="event-card-desc">Play. Compete. Build stronger bonds.</p>
          <div class="event-card-footer">
            <div class="event-meta-info">
              <div class="meta-item"><span class="meta-ico">${icon('pin')}</span><span>Sports Complex</span></div>
              <div class="meta-item"><span class="meta-ico">${icon('clock')}</span><span>08:00 AM - 06:00 PM</span></div>
            </div>
            <span class="event-circle-arrow">→</span>
          </div>
        </div>
      </article>
    </div>

    <!-- Bottom Floating Stats Row & CTA Banner -->
    <div class="events-bottom-row reveal">

      <div class="events-stats-pill">
        <div class="ev-stat-item">
          <span class="ev-stat-icon badge-cal">${icon('calendar')}</span>
          <div class="ev-stat-text">
            <strong>${counter(50, '+')}</strong>
            <small>Events Every Year</small>
          </div>
        </div>
        <span class="stats-item-divider" aria-hidden="true"></span>
        <div class="ev-stat-item">
          <span class="ev-stat-icon badge-users">${icon('users')}</span>
          <div class="ev-stat-text">
            <strong>${counter(8, 'K+')}</strong>
            <small>Student Participation</small>
          </div>
        </div>
        <span class="stats-item-divider" aria-hidden="true"></span>
        <div class="ev-stat-item">
          <span class="ev-stat-icon badge-cup">${icon('cup')}</span>
          <div class="ev-stat-text">
            <strong>${counter(25, '+')}</strong>
            <small>Clubs &amp; Communities</small>
          </div>
        </div>
        <span class="stats-item-divider" aria-hidden="true"></span>
        <div class="ev-stat-item">
          <span class="ev-stat-icon badge-star">${icon('star')}</span>
          <div class="ev-stat-text">
            <strong>${counter(100, '+')}</strong>
            <small>Achievements &amp; Recognitions</small>
          </div>
        </div>
      </div>

      <a href="#/campus-life" class="events-cta-banner" aria-label="Be part of what's next">
        <div class="events-banner-copy">
          <strong>Be Part</strong>
          <span>of What's Next.</span>
        </div>
        <span class="events-banner-arrow" aria-hidden="true">→</span>
      </a>
    </div>
  </div>
</section>
</main>`}

function programmeCards(list) {
  return list.map(([n, d, ic]) => `
    <div class="programme-card-v2 reveal" role="button" tabindex="0" data-course="${n}">
      <div class="prog-icon-wrap">${deptIcon(ic)}</div>
      <div class="prog-info">
        <h4>${n}</h4>
        <p>${d}</p>
      </div>
      <span class="prog-arrow-circle">→</span>
    </div>
  `).join('');
}
const slugify = s => s.toLowerCase().replaceAll(' ', '-').replaceAll('&', 'and').replaceAll('/', '-');
const vmIcon = (name) => ({
  eye: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"/><circle cx="12" cy="12" r="2.7"/></svg>',
  target: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.2"/><path d="m15.5 8.5 5-5M16 3.5h4.5V8"/></svg>',
  spark: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2 1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2Z"/><path d="m19 16 .8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z"/></svg>',
  compass: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m15.8 8.2-2.3 5.3-5.3 2.3 2.3-5.3 5.3-2.3Z"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6"/></svg>',
  education: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 9 9-5 9 5-9 5-9-5Z"/><path d="M7 12.2V16c2.5 2.5 7.5 2.5 10 0v-3.8M21 10v6"/></svg>'
}[name] || '');

function AboutHero() { return `<section class="siet-vm-hero"><div class="siet-vm-hero-grid"></div><div class="siet-vm-hero-orb orb-one"></div><div class="siet-vm-hero-orb orb-two"></div><div class="siet-vm-shell siet-vm-hero-content reveal"><p class="siet-vm-kicker"><i></i> OUR INSTITUTIONAL PURPOSE</p><h1>Vision <em>&amp;</em> Mission</h1><p class="siet-vm-intro">Shaping capable engineers through an enduring commitment to education, innovation, research and excellence.</p></div></section>` }
function AboutSidebar(active = 'vision-mission') { const links = [['vision-mission', 'Vision and Mission', 'eye'], ['core-beliefs', 'Core Beliefs', 'compass'], ['program-outcomes', 'Program Outcomes of the Institution', 'target'], ['core-values', 'Core Values of the Institution', 'spark'], ['philosophy', 'Philosophy', 'education']]; return `<aside class="siet-vm-sidebar reveal"><div class="siet-vm-sidebar-head"><span>VISION &amp; MISSION</span><h2>Explore our<br>foundation.</h2></div><nav aria-label="Vision and Mission navigation">${links.map(([slug, label, iconName]) => `<a class="${slug === active ? 'is-active' : ''}" href="#/${slug}" ${slug === active ? 'aria-current="page"' : `aria-label="Visit ${label}"`}><span class="siet-vm-nav-icon">${vmIcon(iconName)}</span><b>${label}</b><span class="siet-vm-nav-arrow">${vmIcon('arrow')}</span></a>`).join('')}</nav><div class="siet-vm-sidebar-note"><span>EST. 2006</span><p>Learning with purpose. Leading with impact.</p></div></aside>` }
function VisionCard() { return `<article class="siet-vm-card siet-vm-card-vision reveal"><div class="siet-vm-card-pattern"></div><div class="siet-vm-card-top"><span class="siet-vm-card-icon">${vmIcon('eye')}</span><span class="siet-vm-card-number">01 / VISION</span></div><div class="siet-vm-card-copy"><p class="siet-vm-card-label">OUR VISION</p><h2>Engineering a future without limits.</h2><p>To make the institution one of our nation's great engineering schools, recognized nationally and internationally for excellence in teaching, research and public service. We seek to be the preferred destination for students, practitioners seeking an engineering education, employers hiring engineering graduates and organizations seeking engineering knowledge.</p></div><div class="siet-vm-card-footer"><span>Nationally rooted. Globally respected.</span><i></i></div></article>` }
function MissionCard() { return `<article class="siet-vm-card siet-vm-card-mission reveal"><div class="siet-vm-mission-lines"></div><div class="siet-vm-card-top"><span class="siet-vm-card-icon">${vmIcon('education')}</span><span class="siet-vm-card-number">02 / MISSION</span></div><div class="siet-vm-card-copy"><p class="siet-vm-card-label">OUR MISSION</p><h2>Inspiring minds to solve what matters.</h2><p>To provide an encouraging environment to develop the intellectual capacity, critical thinking, creativity and problem solving ability of the students.</p></div><div class="siet-vm-card-footer"><span>Curiosity into capability.</span><i></i></div></article>` }
function visionPage() { return `<main class="siet-vm-page">${AboutHero()}<section class="siet-vm-content"><div class="siet-vm-shell siet-vm-layout">${AboutSidebar()}<div class="siet-vm-main"><div class="siet-vm-section-intro reveal"><p>WHAT GUIDES US</p><h2>Purpose, made <em>practical.</em></h2><span>Our vision sets the horizon. Our mission shapes the everyday learning experience that carries students towards it.</span></div><div class="siet-vm-card-grid">${VisionCard()}${MissionCard()}</div></div></div></section></main>` }
const programmeOutcomes = [
  ['PO 01', 'Engineering knowledge', 'Apply mathematics, science and engineering fundamentals to solve complex engineering problems.'],
  ['PO 02', 'Problem analysis', 'Identify, formulate, review research literature and analyse complex engineering problems.'],
  ['PO 03', 'Design & development', 'Design solutions for complex problems with appropriate consideration for public health and safety.'],
  ['PO 04', 'Investigation', 'Use research-based knowledge, methods and data analysis to reach valid conclusions.'],
  ['PO 05', 'Modern tool usage', 'Select and apply appropriate techniques, resources and modern engineering tools.'],
  ['PO 06', 'Engineer & society', 'Assess societal, health, safety, legal and cultural responsibilities in engineering practice.'],
  ['PO 07', 'Environment & sustainability', 'Understand and evaluate the impact of engineering solutions in environmental contexts.'],
  ['PO 08', 'Ethics', 'Apply ethical principles and commit to professional responsibilities and norms.'],
  ['PO 09', 'Individual & team work', 'Function effectively as an individual and as a member or leader in diverse teams.'],
  ['PO 10', 'Communication', 'Communicate engineering activities effectively with the engineering community and society.'],
  ['PO 11', 'Project management & finance', 'Apply engineering and management principles to manage projects in multidisciplinary environments.'],
  ['PO 12', 'Life-long learning', 'Recognise the need for and engage in independent, life-long learning in a changing world.']
];
function programOutcomesPage() { return `<main class="siet-vm-page siet-po-page"><section class="siet-vm-hero siet-po-hero"><div class="siet-vm-hero-grid"></div><div class="siet-vm-hero-orb orb-one"></div><div class="siet-vm-hero-orb orb-two"></div><div class="siet-vm-shell siet-vm-hero-content reveal"><p class="siet-vm-kicker"><i></i> OUTCOME-BASED EDUCATION</p><h1>Program <em>Outcomes</em></h1><p class="siet-vm-intro">Building engineering graduates with the knowledge, mindset and responsibility to create meaningful impact.</p></div></section><section class="siet-vm-content"><div class="siet-vm-shell siet-vm-layout">${AboutSidebar('program-outcomes')}<div class="siet-vm-main"><div class="siet-vm-section-intro reveal"><p>THE SIET GRADUATE</p><h2>Ready to think.<br><em>Ready to build.</em></h2><span>Our programme outcomes define the capabilities every SIET graduate develops through rigorous learning, real-world practice and a commitment to responsible innovation.</span></div><div class="siet-po-grid">${programmeOutcomes.map(([number, title, copy], index) => `<article class="siet-po-card reveal"><span class="siet-po-index">${String(index + 1).padStart(2, '0')}</span><span class="siet-po-code">${number}</span><span class="siet-po-icon">${vmIcon(index % 3 === 0 ? 'target' : index % 3 === 1 ? 'spark' : 'compass')}</span><h3>${title}</h3><p>${copy}</p><span class="siet-po-line"></span></article>`).join('')}</div></div></div></section></main>` }
const coreValues = [
  ['01', 'Excellence', 'We pursue high standards in learning, research and every contribution we make.', 'target'],
  ['02', 'Integrity', 'We act with honesty, accountability and respect in every decision and relationship.', 'compass'],
  ['03', 'Innovation', 'We nurture curiosity and the courage to turn ideas into meaningful solutions.', 'spark'],
  ['04', 'Inclusivity', 'We create a welcoming community where every learner can contribute and thrive.', 'eye'],
  ['05', 'Collaboration', 'We grow through shared knowledge, multidisciplinary teamwork and industry connection.', 'education'],
  ['06', 'Social responsibility', 'We use engineering knowledge to serve people, society and the planet.', 'target']
];
function coreValuesPage() { return `<main class="siet-vm-page siet-cv-page"><section class="siet-vm-hero siet-cv-hero"><div class="siet-vm-hero-grid"></div><div class="siet-vm-hero-orb orb-one"></div><div class="siet-vm-hero-orb orb-two"></div><div class="siet-vm-shell siet-vm-hero-content reveal"><p class="siet-vm-kicker"><i></i> THE SIET WAY</p><h1>Core <em>Values</em></h1><p class="siet-vm-intro">The shared principles that guide how we learn, lead, innovate and contribute to the world around us.</p></div></section><section class="siet-vm-content"><div class="siet-vm-shell siet-vm-layout">${AboutSidebar('core-values')}<div class="siet-vm-main"><div class="siet-vm-section-intro reveal"><p>OUR COMMON COMPASS</p><h2>Values that shape<br><em>every possibility.</em></h2><span>At SIET, technical mastery is strengthened by character. These values create an environment where ambition is grounded in purpose.</span></div><div class="siet-cv-grid">${coreValues.map(([number, title, copy, iconName]) => `<article class="siet-cv-card reveal"><span class="siet-cv-number">${number}</span><span class="siet-cv-icon">${vmIcon(iconName)}</span><h3>${title}</h3><p>${copy}</p><span class="siet-cv-corner"></span></article>`).join('')}</div></div></div></section></main>` }
function philosophyPage() { const principles = [['Learn by doing', 'Learning becomes lasting when ideas are tested, made and improved through purposeful practice.', '01'], ['Think beyond disciplines', 'The most valuable solutions emerge when engineering connects with people, society and the wider world.', '02'], ['Grow with responsibility', 'Knowledge carries purpose. We prepare students to use it ethically, sustainably and for public good.', '03']]; return `<main class="siet-vm-page siet-ph-page"><section class="siet-vm-hero siet-ph-hero"><div class="siet-vm-hero-grid"></div><div class="siet-vm-hero-orb orb-one"></div><div class="siet-vm-hero-orb orb-two"></div><div class="siet-vm-shell siet-vm-hero-content reveal"><p class="siet-vm-kicker"><i></i> OUR EDUCATIONAL BELIEF</p><h1>Learning with <em>purpose.</em></h1><p class="siet-vm-intro">An education that builds confident thinkers, capable creators and responsible citizens for a changing world.</p></div></section><section class="siet-vm-content"><div class="siet-vm-shell siet-vm-layout">${AboutSidebar('philosophy')}<div class="siet-vm-main"><article class="siet-ph-statement reveal"><span class="siet-ph-quote">“</span><p>We believe education should do more than prepare students for a profession. It should inspire them to question, create, collaborate and use their capabilities to make a meaningful difference.</p><span class="siet-ph-mark"><i></i> SRI SHAKTHI PHILOSOPHY</span></article><div class="siet-ph-principles">${principles.map(([title, copy, number], index) => `<article class="siet-ph-principle reveal"><span class="siet-ph-principle-no">${number}</span><span class="siet-ph-principle-icon">${vmIcon(index === 0 ? 'education' : index === 1 ? 'spark' : 'compass')}</span><div><h3>${title}</h3><p>${copy}</p></div></article>`).join('')}</div><div class="siet-ph-closing reveal"><div><p>OUR PROMISE</p><h2>Knowledge in action.<br><em>Character in leadership.</em></h2></div><span>Every SIET experience is designed to turn potential into a positive force for the future.</span></div></div></div></section></main>` }
const coreBeliefs = [
  ['01', 'GATEWAY', 'Achieving 100% academic success pass for our students is only the <mark class="siet-cb-highlight">GATEWAY</mark> to success', 'Academic excellence is the threshold. We empower every student with deep subject mastery and strong conceptual foundations.', 'ACADEMIC FOUNDATION'],
  ['02', 'MILESTONE', 'Breeding 100% employable and entrepreneurial engineers is the first <mark class="siet-cb-highlight">MILESTONE</mark>', 'Bridging the gap between academia and industry through hands-on practice, multidisciplinary projects, and entrepreneurial mindsets.', 'PROFESSIONAL READINESS'],
  ['03', 'DESTINATION', 'Creating 100% confident citizens who will uphold the pride and cultural ethos of our great nation is our <mark class="siet-cb-highlight">DESTINATION</mark>', 'Nurturing grounded character, cultural values, integrity, and a lifelong commitment to societal contribution.', 'NATION BUILDING'],
  ['04', 'WILLPOWER', 'Discipline is the bridge between goals and accomplishment as it provides all the necessary <mark class="siet-cb-highlight">WILLPOWER</mark>', 'Cultivating focus, resilience, and personal responsibility as the fundamental driving forces behind lasting achievement.', 'CHARACTER & DRIVE'],
  ['05', 'CHANGE THE WORLD', 'Education is the most powerful weapon to <mark class="siet-cb-highlight">CHANGE THE WORLD</mark>', 'Leveraging technology, innovation, and ethical engineering to create transformative, human-centric impact across the globe.', 'GLOBAL IMPACT']
];
function coreBeliefsPage() {
  return `<main class="siet-vm-page siet-cb-page">
  <section class="siet-vm-hero siet-cb-hero">
    <div class="siet-vm-hero-grid"></div>
    <div class="siet-vm-hero-orb orb-one"></div>
    <div class="siet-vm-hero-orb orb-two"></div>
    <div class="siet-vm-shell siet-vm-hero-content reveal">
      <div class="siet-cb-breadcrumbs"><a href="#/">Home</a><span>/</span><b>Core Beliefs</b></div>
      <p class="siet-vm-kicker"><i></i> INSTITUTIONAL PHILOSOPHY</p>
      <h1>Core <em>Beliefs</em></h1>
      <p class="siet-vm-intro">The foundational convictions that guide our culture, inspire student excellence, and power our enduring commitment to the nation.</p>
    </div>
  </section>
  <section class="siet-vm-content">
    <div class="siet-vm-shell siet-vm-layout">
      ${AboutSidebar('core-beliefs')}
      <div class="siet-vm-main">
        <div class="siet-vm-section-intro reveal">
          <p>WHAT WE BELIEVE</p>
          <h2>CORE <em>BELIEFS</em></h2>
          <span>Our educational philosophy is anchored in five essential convictions — from gateway academic success to world-changing leadership.</span>
        </div>
        <div class="siet-cb-list">
          ${coreBeliefs.map(([num, tag, text, desc, kicker], index) => `
            <article class="siet-cb-card reveal" style="transition-delay:${index * 0.08}s">
              <span class="siet-cb-accent-bar"></span>
              <div class="siet-cb-indicator">
                <div class="siet-cb-circle" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></svg>
                </div>
                <span class="siet-cb-num">${num}</span>
              </div>
              <div class="siet-cb-body">
                <div class="siet-cb-meta">
                  <span class="siet-cb-kicker">${kicker}</span>
                  <span class="siet-cb-tag">${tag}</span>
                </div>
                <p class="siet-cb-text">${text}</p>
                <p class="siet-cb-desc">${desc}</p>
              </div>
            </article>
          `).join('')}
        </div>
        <div class="siet-cb-closing reveal">
          <div class="siet-cb-closing-text">
            <h3>Powering the Youth, Empowering the Nation</h3>
            <p>At Sri Shakthi, these beliefs are practiced every day across our classrooms, research laboratories, innovation centres, and community initiatives.</p>
          </div>
          <a class="siet-cb-closing-cta" href="#/admission-enquiry">Explore Admissions ${icon('arrow')}</a>
        </div>
      </div>
    </div>
  </section>
 </main>`;
}
function chairmanPage(){return `<main class="siet-cd-page chairman-page"><section class="siet-cd-hero"><div class="siet-cd-grid"></div><div class="siet-cd-hero-glow"></div><div class="siet-cd-shell"><div class="siet-cd-hero-layout"><div class="siet-cd-portrait reveal"><div class="siet-cd-portrait-frame"><div class="siet-cd-portrait-ring"></div><img src="/brand/chairman-passport.png" alt="Dr. S. Thangavelu, Chairman"></div><div class="siet-cd-name"><strong>Dr. S. Thangavelu</strong><span>Chairman</span><small>Sri Shakthi Group of Institutions</small></div></div><div class="siet-cd-hero-copy reveal"><p class="siet-cd-kicker"><i></i> A MESSAGE FROM THE CHAIRMAN</p><h1>A dream built on <em>equality, excellence</em> and service.</h1><p>Building an institution where every student is encouraged to learn deeply, think boldly and contribute meaningfully.</p></div></div></div></section><section id="chairman-message" class="siet-cd-content"><div class="siet-cd-shell siet-cd-layout"><article class="siet-cd-message"><div class="siet-cd-message-head reveal"><p>CHAIRMAN’S MESSAGE</p><h2>Education that empowers<br><em>each individual.</em></h2></div><div class="siet-cd-prose reveal"><p>I have always been inspired by Dr. Martin Luther King's statement, ‘I have a dream’ — a dream I believe will come true — a dream that my children will one day live in a world where they will not be judged by the colour of their skin, but by the content of their character. This need for tolerance — to create an equal society with no discrimination in caste, creed or colour — was best exemplified in the words of Mahatma Gandhi as follows.</p><blockquote>“I do not want my institution to be walled off on all sides. I want the culture of all lands to be blown about my institution as freely as possible. But I refuse to be blown off by any one of them.”</blockquote><p>And this I believe will be the watchword of each and every Shakthian.</p><p>The vision for Sri Shakthi is to make the institution one of our nation's great engineering schools, recognized nationally and internationally for excellence in teaching, research and public service. We seek to be the preferred destination for students, practitioners seeking an engineering education, employers hiring engineering graduates and organizations seeking engineering knowledge.</p><div class="siet-cd-signoff"><span></span><div><strong>Dr. S. Thangavelu</strong><small>Chairman, Sri Shakthi Group of Institutions</small></div></div></div></article></div></section></main>`}
function principalPage(){return `<main class="siet-cd-page principal-page"><section class="siet-cd-hero"><div class="siet-cd-grid"></div><div class="siet-cd-hero-glow"></div><div class="siet-cd-shell"><div class="siet-cd-hero-layout"><div class="siet-cd-portrait reveal"><div class="siet-cd-portrait-frame"><div class="siet-cd-portrait-ring"></div><img src="/brand/principal-saravana-kumar.png" alt="Dr. N. M. Saravana Kumar, Principal"></div><div class="siet-cd-name"><strong>Dr. N. M. Saravana Kumar</strong><span>Principal</span><small>Sri Shakthi Institute of Engineering and Technology</small></div></div><div class="siet-cd-hero-copy reveal"><p class="siet-cd-kicker"><i></i> A MESSAGE FROM THE PRINCIPAL</p><h1>Learning that builds <em>knowledge, character</em> and purpose.</h1><p>Creating an environment where every student develops the knowledge, skills and character to lead with purpose.</p></div></div></div></section><section id="principal-message" class="siet-cd-content"><div class="siet-cd-shell siet-cd-layout"><article class="siet-cd-message"><div class="siet-cd-message-head reveal"><p>PRINCIPAL'S MESSAGE</p><h2>Education for capable,<br><em>responsible leaders.</em></h2></div><div class="siet-cd-prose reveal"><p>Welcome to our institution, where excellence in education, innovation, and character development form the foundation of our academic journey.</p><p>We provide a vibrant learning environment that empowers students with knowledge, technical expertise and essential life skills. Our faculty continuously strive to deliver quality education through innovative teaching, industry collaboration, research and experiential learning.</p><blockquote>"We prepare graduates to become competent professionals, responsible citizens and future leaders."</blockquote><p>At Sri Shakthi, we believe that every student brings unique potential. Our commitment is to nurture that potential through mentorship, opportunity, and a culture of continuous improvement — ensuring our graduates are prepared not just for careers, but for lives of meaning and contribution.</p><div class="siet-cd-signoff"><span></span><div><strong>Dr. N. M. Saravana Kumar</strong><small>Principal, Sri Shakthi Institute of Engineering and Technology</small></div></div></div></article></div></section></main>`}

const departmentDetails = { 'Agricultural Engineering': { courses: [['B.E - Agricultural Engineering', '60'], ['M.Tech - Farm Machinery', '18']], overview: 'The department of Agricultural Engineering was started in Sri Shakthi Institute of Engineering and Technology (SSIET), Coimbatore, in 2015. The Chairman, Dr. S Thangavelu, is himself an Agricultural Engineer and a Ph. D. degree holder in Bio Energy from Tamil Nadu Agricultural University (TNAU), Coimbatore, and worked as a faculty for 28 years in TNAU. During the past years, the department has been in the journey with SSIET to fulfil the motto, “Powering the Youth, Empowering the Nation”. The department offers B. E. Agriculture Engineering, focussing on widening the practical knowledge of the students thus encouraging them to solve different practical difficulties in small-landholdings. Well-qualified faculty members are the strength of the department. The department constitutes experienced and dedicated faculty and supporting staff members with excellent academic research and industrial work experience to promote research and intervention in the existing methods. Presently, the faculty consists of experts from farm machinery and power, soil and water conservation engineering, agricultural processing, civil engineering, mechanical engineering, food technology and agriculture. Further, the practical knowledge gained by them during practical field works and industrial visits has been added advantage for new technology and innovations. The department is new in offering the degree program in the institute. Despite, about 30 students have been graduated during 2019 from the department and are well placed. At present there are 375 students are admitted in the degree program, and the department is envisage more students in the future.' }, default: { courses: [], overview: 'The department combines strong academic foundations with practical laboratory learning, industry exposure, project work and research. Experienced faculty members guide students to solve real-world engineering problems and build careers for a changing world.' } };
programs.forEach(([name, description]) => { if (!departmentDetails[name]) departmentDetails[name] = { courses: [['B.E - ' + name, '60']], overview: 'The ' + name + ' department at Sri Shakthi Institute of Engineering and Technology develops practical expertise through laboratory learning, industry exposure, projects and research. ' + description } });
function departmentPage(dept) { const detail = departmentDetails[dept] || departmentDetails.default; const courses = detail.courses.length ? detail.courses : [['B.E - ' + dept, '60']]; const sections = ['About the Department', 'Why ' + dept + ' at SIET', 'Unique Facilities', 'Vision & Mission', 'Programme Educational Objectives', 'Programme Specific Outcomes', 'Programme Outcomes', 'Faculty Profile', 'PAC Members', 'Academic Calendar', 'Achievements', 'Curriculum', 'Placements-Key Companies', 'Student Placements', 'Newsletter & Magazine', 'Alumni Corner', 'Feedback']; return `<main class="department-detail-page"><section class="department-detail-header"><div class="department-detail-title"><h1>${dept}</h1><div class="department-breadcrumb"><a href="#/">Home</a><span>/</span><a href="#/departments">Departments</a><span>/</span><b>${dept}</b></div></div></section><div class="department-detail-layout"><aside class="department-detail-nav" aria-label="Department sections">${sections.map((section, index) => `<button class="${index === 0 ? 'active' : ''}" type="button" data-section="department-section-${index}">${section}</button>`).join('')}</aside><article class="department-detail-content"><div class="department-intake"><table><thead><tr><th>Courses Offered</th><th>Intake</th></tr></thead><tbody>${courses.map(([course, intake]) => `<tr><td>${course}</td><td>${intake}</td></tr>`).join('')}</tbody></table></div><section id="department-section-0" class="department-copy is-open"><h2>About the Department</h2><p>${detail.overview}</p></section>${sections.slice(1).map((section, index) => `<section id="department-section-${index + 1}" class="department-copy department-placeholder"><h2>${section}</h2><p>${section} information for ${dept} will be updated by the department office.</p></section>`).join('')}</article></div></main>` }

const careerUnits = {
  college: {
    name: 'Engineering College',
    subtitle: 'Autonomous Institution · Affiliated to Anna University',
    desc: 'We invite passionate educators, researchers and industry professionals to join an institution focused on applied research, innovation and industry-relevant engineering education.',
    cats: [
      ['Leadership Positions', ['Principal / Dean', 'Head of Department', 'Academic Administrator']],
      ['College Teaching Positions', ['Professor', 'Associate Professor', 'Assistant Professor']],
      ['Career Oriented Specialists', ['Aptitude Trainer', 'Programming Trainer', 'Machine Learning Trainer']],
      ['Managerial Positions', ['HR and Administration', 'Admissions and Outreach']],
      ['Creative Positions', ['Content and Communications', 'Graphic Designer']]
    ]
  },
  school: {
    name: 'CBSE Senior Secondary School',
    subtitle: 'Affiliated to CBSE, New Delhi',
    desc: 'Join an inspiring school community committed to experiential holistic education, academic excellence, sporting achievement and character building.',
    cats: [
      ['School Leadership Positions', ['Principal / Vice Principal', 'Academic Coordinator', 'Section Head']],
      ['PGT & TGT Teachers', ['English', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science']],
      ['Primary & Kindergarten', ['PRT Teachers', 'Montessori / Kindergarten Educators', 'Language Specialists']],
      ['Sports & Extracurricular', ['Physical Education Director', 'Art & Craft Teacher', 'Music & Dance Instructor']]
    ]
  },
  lab: {
    name: 'Food & Environmental Testing Laboratory',
    subtitle: 'NABL Accredited Testing Facility',
    desc: 'Work in cutting-edge laboratory facilities conducting physical, chemical, and microbiological analyses for agricultural, food, and environmental sectors.',
    cats: [
      ['Quality & Laboratory Management', ['Quality Manager', 'Technical Manager', 'NABL Coordinator']],
      ['Analytical Specialists', ['Senior Food Analyst', 'Chemical Analyst', 'Residue Analysis Specialist']],
      ['Microbiology Specialists', ['Senior Microbiologist', 'Microbiology Analyst']],
      ['Technical Support', ['Laboratory Technician', 'Sample Management Assistant']]
    ]
  }
};

function internalPage(route) {
  const isDept = route.startsWith('department/');
  const deptName = isDept ? titleCase(route.slice(11).replaceAll('-', ' ')).replaceAll(' And ', ' & ') : '';
  if (isDept && typeof departmentPage === 'function') return departmentPage(deptName);
  const data = isDept ? [deptName, `Department of ${deptName}`, 'Build strong engineering foundations through expert teaching, practical laboratories, industry exposure, projects, research and collaborative learning.'] : (pageCopy[route] || ['Sri Shakthi', 'Institutional information', 'Explore Sri Shakthi Institute of Engineering and Technology.']);

  const sidebarHtml = `
  <aside class="internal-sidebar reveal">
    <div class="sidebar-box quick-links-box">
      <span class="sidebar-kicker">EXPLORE SRI SHAKTHI</span>
      <h3>Quick Navigation</h3>
      <nav class="sidebar-nav">
        <a href="#/programmes">UG &amp; PG Programmes <span>→</span></a>
        <a href="#/departments">All Departments <span>→</span></a>
        <a href="#/eligibility">Admission Eligibility <span>→</span></a>
        <a href="#/scholarships">Scholarship Pathways <span>→</span></a>
        <a href="#/campus-life">Campus Life &amp; Facilities <span>→</span></a>
        <a href="#/placements">Placement Highlights <span>→</span></a>
        <a href="#/research">Research &amp; Innovation <span>→</span></a>
      </nav>
    </div>
    <div class="sidebar-box contact-card-box">
      <span class="sidebar-kicker">ADMISSIONS HELPLINE</span>
      <h3>Plan Your Journey</h3>
      <p>Speak directly with our academic counsellors for programme guidance and scholarships.</p>
      <div class="sidebar-contact-info">
        <strong>☎ +91 422 2369900</strong>
        <small>✉ info@siet.ac.in</small>
        <small>📍 L&amp;T Bypass, Chinniyampalayam, Coimbatore</small>
      </div>
      <a href="#/admission-enquiry" class="button sidebar-btn">Enquire for Admission ${icon('arrow')}</a>
    </div>
    <div class="sidebar-box badges-card-box">
      <span class="sidebar-kicker">ACCREDITATIONS</span>
      <div class="sidebar-badges">
        <span>NBA Accredited</span>
        <span>NAAC 'A' Grade</span>
        <span>Autonomous</span>
        <span>AICTE Approved</span>
      </div>
    </div>
  </aside>`;

  const deptExtras = isDept ? `
  <div class="dept-highlights-grid">
    <div class="dept-stat-card"><span class="stat-num">96%</span><b>Placement Record</b><small>Top product &amp; core companies</small></div>
    <div class="dept-stat-card"><span class="stat-num">14+</span><b>Specialized Labs</b><small>State-of-the-art facilities</small></div>
    <div class="dept-stat-card"><span class="stat-num">1:15</span><b>Faculty-Student Ratio</b><small>Focused mentorship</small></div>
    <div class="dept-stat-card"><span class="stat-num">50+</span><b>Patents &amp; Projects</b><small>Applied research focus</small></div>
  </div>
  <div class="dept-section-block">
    <div class="section-no">CORE LABORATORIES &amp; FACILITIES</div>
    <div class="dept-labs-list">
      <div class="dept-lab-item"><b>Advanced Computing &amp; AI Lab</b><p>High-performance computing cluster, modern GPUs, and deep learning platforms.</p></div>
      <div class="dept-lab-item"><b>Project &amp; Prototype Studio</b><p>Embedded systems, IoT testbeds, sensors and robotics testing facilities.</p></div>
      <div class="dept-lab-item"><b>Industry Collaboration Center</b><p>Dedicated workspaces co-developed with leading technology partners.</p></div>
    </div>
  </div>`: '';

  return `<main class="internal-page">
    ${route === 'placements' ? `<section class="placement-showcase-section" style="padding: 24px 20px 0;"><div class="ps-shell"><div class="placement-v2-panel ps-right-card reveal" style="max-width: 1180px; margin: 0 auto;">${placementHighlightsCardInner()}</div></div></section>${placementMarqueeSection()}` : `<section class="page-hero">
      <img class="page-crest" src="/brand/siet-logo.png" alt="">
      <div class="eyebrow"><span></span> SRI SHAKTHI</div>
      <h1 class="reveal">${data[0]}</h1>
      <p>${data[1]}</p>
    </section>`}
    <section class="page-content">
      <div class="reveal">
        <div class="section-no">OVERVIEW</div>
        <h2>${data[1]}</h2>
        <p>${data[2]}</p>
        ${deptExtras}
        ${route === 'contact' ? '<div class="contact-panel"><b>Sri Shakthi Institute of Engineering & Technology</b><p>Sri Shakthi Nagar, L&T By-Pass, Chinniyampalayam, Coimbatore – 641062</p><p>+91 422 2369900 · info@siet.ac.in</p></div>' : ''}
        <div style="margin-top: 32px;"><a class="button" href="#/admission-enquiry">Enquire now ${icon('arrow')}</a></div>
      </div>
      ${sidebarHtml}
    </section>
    ${['departments', 'programmes'].includes(route) ? `<section class="page-content programme-content"><div class="section-no">PROGRAMMES &amp; DEPARTMENTS</div><div>${programs.map(([n, d, img]) => `<a class="flip-card" href="#/department/${slugify(n)}"><span class="flip-card-inner"><span class="flip-front"><small>DEPARTMENT</small><b>${n}</b><p>${d}</p><span>Explore department →</span></span><span class="flip-back" style="background-image:linear-gradient(180deg,transparent,rgba(3,45,27,.94)),url('${img}')"><b>${n}</b></span></span></a>`).join('')}</div></section>` : ''}
  </main>`;
}
const titleCase = s => s.replace(/\b\w/g, c => c.toUpperCase());

function enquiryPage(apply = false) { return `<main class="enquiry-page-v3"><section class="enquiry-hero-v3"><img src="/brand/siet-logo.png" alt=""><div class="eyebrow"><span></span> SRI SHAKTHI</div><h1>${apply ? 'Apply for Sri Shakthi' : 'Admission Enquiry'}</h1><h2>Let’s plan your <em>next step.</em></h2><p>Share your interests and contact details. Our admissions team will guide you in choosing the right programme.</p></section><section class="enquiry-main-v3"><div class="enquiry-heading-v3"><small>ENQUIRY FORM</small><h1>Start your engineering journey with SIET</h1></div><form class="enquiry-form-v3 js-form"><div class="enquiry-fields-v3">${field('Full Name', 'name', 'text', 'Enter your full name')}${field('Mobile Number', 'phone', 'tel', 'Enter 10 digit mobile number')}${field('Email Address', 'email', 'email', 'Enter your email address')}${selectField('Course Level', 'level', ['UG', 'PG'])}${selectField('Preferred Department', 'course', programs.map(p => p[0]))}${field('Academic Qualification / Marks', 'qualification', 'text', 'Qualification and marks')}</div><label>Message / Any Specific Query <b>*</b><textarea name="message" rows="4" required minlength="10"></textarea></label><button class="button" type="submit">${apply ? 'Submit Application' : 'Send Enquiry'} →</button><p class="status" aria-live="polite"></p></form></section></main>` }
const field = (label, name, type, placeholder) => `<label>${label} <b>*</b><input type="${type}" name="${name}" placeholder="${placeholder}" required></label>`;
const selectField = (label, name, opts) => `<label>${label} <b>*</b><select name="${name}" required><option value="">Select ${label}</option>${opts.map(o => `<option>${o}</option>`).join('')}</select></label>`;
function careersPage() {
  const unit = careerUnits.college;
  return `<main class="careers-page"><section class="career-hero"><small>WORK WITH US</small><h1>Faculty Recruitment</h1><h2>Build careers that <em>shape futures.</em></h2><p>Join a community of educators, researchers and professionals committed to powering the youth and empowering the nation.</p></section><section class="career-main"><div class="career-tabs"><button class="active" data-unit="college" type="button">Engineering College</button><button data-unit="school" type="button">CBSE School</button><button data-unit="lab" type="button">Food Testing Lab</button></div><div class="career-intro"><img src="/brand/siet-logo.png" alt=""><div><small>${unit.subtitle}</small><h2>Sri Shakthi ${unit.name}</h2><p>${unit.desc}</p></div></div><div class="career-application-layout"><form class="career-form js-form"><div class="career-form-head"><small>APPLICATION FORM</small><h2>Faculty &amp; Professional Recruitment</h2></div><div class="career-fields">${field('Full Name', 'name', 'text', 'Enter your full name')}${field('Mobile Number', 'phone', 'tel', 'Enter mobile number')}${field('Email Address', 'email', 'email', 'Enter email')}${selectField('Application Category', 'category', unit.cats.map(c => c[0]))}${field('Position', 'position', 'text', 'Position you would like to apply')}${field('Highest Qualification', 'qualification', 'text', 'Enter highest degree')}<label class="career-wide">Why are you looking for a change?<textarea name="message" rows="4"></textarea></label><label class="career-wide career-file">Upload Resume <b>*</b><input type="file" name="resume" accept=".pdf,.doc,.docx,.rtf" required></label></div><button class="career-submit" type="submit">Submit Application →</button><p class="status" aria-live="polite"></p></form><aside class="career-categories"><div class="career-side-title"><small>EXPLORE OPENINGS</small><h2>${unit.name} Openings</h2></div>${unit.cats.map((c, i) => `<details ${i === 0 ? 'open' : ''}><summary>${c[0]} ${icon('down')}</summary><div>${c[1].map(r => `<span>→ ${r}</span>`).join('')}</div></details>`).join('')}<div class="career-contact"><small>RECRUITMENT QUERIES</small><h3>Let’s build the future together.</h3><a href="mailto:careers@siet.ac.in">careers@siet.ac.in</a></div></aside></div></section></main>`;
}

function videoModal() { return `<div class="video-modal" role="dialog" aria-modal="true"><div class="video-shell portrait"><button class="video-close" aria-label="Close video">×</button><div class="video-frame"><video controls autoplay playsinline poster="/brand/techpark-hd.jpg"><source src="/brand/siet-campus-video.mp4" type="video/mp4"></video></div></div></div>` }
function route() { return decodeURIComponent(location.hash.replace(/^#\/?/, '')).replace(/\/$/, '') }
function render() { if (!appRoot) return; const r = route(); let content = !r ? homePage() : r === 'vision-mission' || r === 'about' ? visionPage() : r === 'core-beliefs' ? coreBeliefsPage() : r === 'program-outcomes' ? programOutcomesPage() : r === 'core-values' ? coreValuesPage() : r === 'philosophy' ? philosophyPage() : r === 'chairman' ? chairmanPage() : r === 'principal' ? principalPage() : r === 'admission-enquiry' || r === 'apply' ? enquiryPage(r === 'apply') : r === 'careers' ? careersPage() : internalPage(r); appRoot.innerHTML = header() + content + footer(); document.title = `${r ? titleCase(r.replaceAll('-', ' ')) : 'Sri Shakthi'} | SIET`; bind(); scrollTo(0, 0) }

function bind() {
  if (route() === 'chairman') {
    $('.siet-cd-kicker')?.replaceChildren("THE CHAIRMAN'S DESK");
    document.title = "The Chairman's Desk | SIET";
  }
  if (route() === 'principal') {
    document.title = "From the Principal | SIET";
  }
  if (route() === 'core-beliefs') {
    document.title = "Core Beliefs | SIET";
  }
  const mobile = $('.mobile-nav'), backdrop = $('.mobile-nav-backdrop'), toggle = $('.institution-mobile-toggle'), closeBtn = $('.mobile-nav-close');
  const closeMenu = () => { mobile?.classList.remove('open'); backdrop?.classList.remove('open'); if (toggle) toggle.innerHTML = icon('menu'); document.body.style.overflow = '' };
  const openMenu = () => { mobile?.classList.add('open'); backdrop?.classList.add('open'); if (toggle) toggle.innerHTML = icon('close'); document.body.style.overflow = 'hidden' };
  toggle?.addEventListener('click', e => { e.stopPropagation(); mobile?.classList.contains('open') ? closeMenu() : openMenu() });
  closeBtn?.addEventListener('click', e => { e.stopPropagation(); closeMenu() });
  backdrop?.addEventListener('click', closeMenu);
  $$('.mobile-nav a').forEach(a => a.addEventListener('click', closeMenu));
  $$('.mobile-nav-group-toggle').forEach(btn => btn.addEventListener('click', e => {
    e.stopPropagation();
    const group = btn.closest('.mobile-nav-group');
    const wasOpen = group?.classList.contains('open');
    $$('.mobile-nav-group').forEach(g => { g.classList.remove('open'); g.querySelector('.mobile-nav-group-toggle')?.setAttribute('aria-expanded', 'false') });
    if (!wasOpen && group) { group.classList.add('open'); btn.setAttribute('aria-expanded', 'true') }
  }));
  $$('.institution-nav-group>button').forEach(btn => btn.addEventListener('click', e => {
    e.stopPropagation();
    const group = btn.parentElement;
    const willOpen = !group?.classList.contains('open');
    $$('.institution-nav-group').forEach(x => {
      x.classList.remove('open');
      x.querySelector('button')?.setAttribute('aria-expanded', 'false');
    });
    if (willOpen && group) {
      group.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  }));
  $$('.career-tabs button').forEach(btn => btn.addEventListener('click', () => {
    $$('.career-tabs button').forEach(b => b.classList.toggle('active', b === btn));
    const unitKey = btn.dataset.unit || 'college';
    const unit = careerUnits[unitKey] || careerUnits.college;
    const titleEl = $('.career-intro h2'); if (titleEl) titleEl.textContent = 'Sri Shakthi ' + unit.name;
    const descEl = $('.career-intro p'); if (descEl) descEl.textContent = unit.desc;
    const subEl = $('.career-intro small'); if (subEl) subEl.textContent = unit.subtitle;
    const selectCat = $('select[name="category"]');
    if (selectCat) {
      selectCat.innerHTML = `<option value="">Select Application Category</option>` + unit.cats.map(c => `<option>${c[0]}</option>`).join('');
    }
    const catAside = $('.career-categories');
    if (catAside) {
      catAside.innerHTML = `<div class="career-side-title"><small>EXPLORE OPENINGS</small><h2>${unit.name} Openings</h2></div>` +
        unit.cats.map((c, i) => `<details ${i === 0 ? 'open' : ''}><summary>${c[0]} ${icon('down')}</summary><div>${c[1].map(r => `<span>→ ${r}</span>`).join('')}</div></details>`).join('') +
        `<div class="career-contact"><small>RECRUITMENT QUERIES</small><h3>Let’s build the future together.</h3><a href="mailto:careers@siet.ac.in">careers@siet.ac.in</a></div>`;
    }
  }));
  $$('.js-video').forEach(b => b.addEventListener('click', () => { document.body.insertAdjacentHTML('beforeend', videoModal()); document.body.style.overflow = 'hidden'; const modal = $('.video-modal'); const close = () => { modal?.remove(); document.body.style.overflow = '' }; modal?.addEventListener('click', e => e.target === modal && close()); $('.video-close', modal)?.addEventListener('click', close) }));
  $$('.toggle-btn').forEach(b => b.addEventListener('click', () => {
    $$('.toggle-btn').forEach(x => x.classList.toggle('active', x === b));
    const isUG = b.dataset.level === 'UG';
    const progGridEl = $('#programme-grid');
    if (progGridEl) {
      progGridEl.innerHTML = programmeCards(isUG ? ugPrograms : pgPrograms) + (isUG ? bottomBannerHtml : '');
    }
    const countBadge = $('#prog-count-badge');
    const levelBadge = $('#prog-level-badge');
    if (countBadge) countBadge.textContent = isUG ? '14+' : '7+';
    if (levelBadge) levelBadge.textContent = isUG ? 'UG Programmes' : 'PG Programmes';
    observe();
  }));
  const progGrid = $('#programme-grid');
  progGrid?.addEventListener('click', e => {
    const card = e.target.closest('.programme-card-v2, .programme-card');
    if (!card) return;
    const course = card.dataset.course;
    location.hash = '#/admission-enquiry';
  });
  progGrid?.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      const card = e.target.closest('.programme-card-v2, .programme-card');
      if (card) { e.preventDefault(); card.click() }
    }
  });
  $('.js-scroll-programmes')?.addEventListener('click', () => { $('.programmes-section')?.scrollIntoView({ behavior: 'smooth' }) });
  $('.js-discover-btn')?.addEventListener('click', () => { $('.programmes-section')?.scrollIntoView({ behavior: 'smooth' }) });
  $('.js-explore-campus')?.addEventListener('click', () => { $('.campus-gallery')?.scrollIntoView({ behavior: 'smooth' }) });
  $$('.campus-gallery .gallery-card').forEach(card => {
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); card.click() }
    })
  });
  $$('.vision-tab-btn').forEach(btn => btn.addEventListener('click', () => {
    $$('.vision-tab-btn').forEach(x => x.classList.toggle('active', x === btn));
    $$('.vision-content-pane').forEach(pane => pane.classList.toggle('active', pane.dataset.pane === btn.dataset.tab));
  }));
  $$('.lab-pill-btn').forEach(btn => btn.addEventListener('click', () => {
    $$('.lab-pill-btn').forEach(x => x.classList.toggle('active', x === btn));
    const cat = btn.dataset.cat;
    $$('.lab-card').forEach(card => {
      if (cat === 'all' || card.dataset.cat === cat) {
        card.style.display = '';
        card.style.opacity = '1';
      } else {
        card.style.display = 'none';
      }
    });
  }));
  $$('.lab-card').forEach(card => {
    card.addEventListener('click', () => { location.hash = '#/centres-of-excellence'; });
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); location.hash = '#/centres-of-excellence'; }
    });
  });
  $('.labs-nav-arrows .prev-btn')?.addEventListener('click', () => {
    const active = $('.lab-pill-btn.active');
    const pills = $$('.lab-pill-btn');
    const idx = pills.indexOf(active);
    const prev = pills[(idx - 1 + pills.length) % pills.length];
    prev?.click();
  });
  $('.labs-nav-arrows .next-btn')?.addEventListener('click', () => {
    const active = $('.lab-pill-btn.active');
    const pills = $$('.lab-pill-btn');
    const idx = pills.indexOf(active);
    const next = pills[(idx + 1) % pills.length];
    next?.click();
  });
  $$('.event-filter-pill').forEach(btn => btn.addEventListener('click', () => {
    $$('.event-filter-pill').forEach(x => x.classList.toggle('active', x === btn));
    const cat = btn.dataset.cat;
    $$('.event-item-card').forEach(card => {
      const cats = (card.dataset.cat || '').split(' ');
      if (cat === 'all' || cats.includes(cat)) {
        card.style.display = '';
        card.style.opacity = '1';
      } else {
        card.style.display = 'none';
      }
    });
  }));
  $$('.event-item-card').forEach(card => {
    card.addEventListener('click', () => { location.hash = '#/campus-life'; });
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); location.hash = '#/campus-life'; }
    });
  });
  const featuredSlides = [
    {
      title: 'TechNovate 2026',
      tag: 'TECHNICAL SYMPOSIUM',
      desc: 'A platform to ideate, innovate and build solutions for a better tomorrow. Join us for a day of learning, networking and inspiration.',
      date: '28 Aug 2026',
      loc: 'Main Auditorium',
      time: '09:00 AM - 05:00 PM',
      bg: '/brand/events/featured-technovate.jpg'
    },
    {
      title: 'Hack-A-Shakthi 2026',
      tag: 'NATIONAL HACKATHON',
      desc: '36 hours of continuous coding, product design, and real-world industrial challenges with mentorship from top tech leaders.',
      date: '14 Sep 2026',
      loc: 'Innovation Centre & Techpark',
      time: '08:30 AM - 08:30 PM',
      bg: '/brand/techpark-hd.jpg'
    },
    {
      title: 'Sangamam Gala Night',
      tag: 'CULTURAL EXTRAVAGANZA',
      desc: 'An electrifying evening of classical dance, fusion music, dramatic arts, and celebration of intercultural heritage.',
      date: '16 Sep 2026',
      loc: 'Open Air Theatre',
      time: '05:00 PM - 10:30 PM',
      bg: '/brand/events/event-sangamam.jpg'
    }
  ];
  let featIdx = 0;
  const updateFeatSlide = () => {
    const card = $('.events-featured-card');
    if (!card) return;
    const s = featuredSlides[featIdx];
    const bg = $('.featured-bg-photo', card);
    const title = $('.featured-title', card);
    const tag = $('.featured-sub-tag', card);
    const desc = $('.featured-summary', card);
    const counter = $('.featured-counter', card);
    const rows = $$('.featured-meta-row span:last-child', card);
    if (bg) bg.style.backgroundImage = `url('${s.bg}')`;
    if (title) title.textContent = s.title;
    if (tag) tag.textContent = s.tag;
    if (desc) desc.textContent = s.desc;
    if (counter) counter.textContent = `0${featIdx + 1} / 03`;
    if (rows[0]) rows[0].textContent = s.date;
    if (rows[1]) rows[1].textContent = s.loc;
    if (rows[2]) rows[2].textContent = s.time;
  };
  $('.prev-feat')?.addEventListener('click', (e) => {
    e.stopPropagation();
    featIdx = (featIdx - 1 + featuredSlides.length) % featuredSlides.length;
    updateFeatSlide();
  });
  $('.next-feat')?.addEventListener('click', (e) => {
    e.stopPropagation();
    featIdx = (featIdx + 1) % featuredSlides.length;
    updateFeatSlide();
  });

  $$('.department-detail-nav button').forEach(button => button.addEventListener('click', () => {
    const target = document.getElementById(button.dataset.section);
    if (!target) return;
    $$('.department-detail-nav button').forEach(item => item.classList.toggle('active', item === button));
    $$('.department-copy').forEach(section => section.classList.toggle('is-open', section === target));
  }));
  $$('.js-form').forEach(form => form.addEventListener('submit', submitForm)); observe();
}
async function submitForm(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const status = $('.status', form);
  const btn = $('button[type="submit"], .career-submit', form);
  if (status) { status.textContent = 'Submitting details…'; status.style.color = '#0b7a48' }
  if (btn) btn.disabled = true;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  const fileInput = form.querySelector('input[type="file"]');
  if (fileInput?.files?.[0]) {
    data.fileName = fileInput.files[0].name;
    data.fileSize = `${Math.round(fileInput.files[0].size / 1024)} KB`;
  }
  try {
    const res = await fetch('/api/enquiries', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
    const json = await res.json();
    if (status) {
      status.textContent = json.message || 'Thank you! Your details have been received.';
      status.style.color = res.ok ? '#075b36' : '#b3261e';
    }
    if (res.ok) form.reset();
  } catch (err) {
    if (status) {
      status.textContent = 'Thank you! Your details have been recorded.';
      status.style.color = '#075b36';
    }
    form.reset();
  } finally {
    if (btn) btn.disabled = false;
  }
}
function observe() { const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches; const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (!entry.isIntersecting) return; entry.target.classList.add('is-visible'); if (entry.target.classList.contains('js-counter')) animateCounter(entry.target); observer.unobserve(entry.target) }), { threshold: .18 }); $$('.reveal,.js-counter').forEach(el => reduce ? (el.classList.add('is-visible'), el.classList.contains('js-counter') && animateCounter(el)) : observer.observe(el)) }
function animateCounter(el) { const to = Number(el.dataset.to), suffix = el.dataset.suffix || '', start = performance.now(), duration = 1500; function tick(now) { const p = Math.min((now - start) / duration, 1), v = Math.round(to * (1 - (1 - p) ** 3)); el.textContent = v.toLocaleString('en-IN') + suffix; if (p < 1) requestAnimationFrame(tick) } requestAnimationFrame(tick) }
const handleEscape = e => { if (e.key === 'Escape') { $('.video-close')?.click(); $('.mobile-nav-close')?.click() } };
const handleDocClick = e => { if (!e.target.closest('.institution-nav-group')) { $$('.institution-nav-group').forEach(g => { g.classList.remove('open'); g.querySelector('button')?.setAttribute('aria-expanded', 'false') }) } };

export function mountSite(root) {
  appRoot = root;
  window.addEventListener('hashchange', render);
  window.addEventListener('keydown', handleEscape);
  document.addEventListener('click', handleDocClick);
  render();
  return () => {
    window.removeEventListener('hashchange', render);
    window.removeEventListener('keydown', handleEscape);
    document.removeEventListener('click', handleDocClick);
    document.body.style.overflow = '';
    appRoot = null;
  };
}
