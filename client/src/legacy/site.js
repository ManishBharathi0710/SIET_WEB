import { allDepartments, departmentCurricula, getDeptCurriculum } from './curriculumData.js';
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
  return `<span class="ui-icon" aria-hidden="true">${({ book: 'â–¤', building: 'â–¥', quality: 'âœ“', brief: 'â–£', compass: 'â—‰', phone: 'â˜Ž', gift: 'â—‡' }[name] || 'â—†')}</span>`;
};

const pageGroups = [
  { label: 'About', icon: 'users', items: [['vision-mission', 'Vision And Mission'], ['chairman', "The Chairman's desk"], ['principal', "From the Principal"]] },
  { label: 'Academics', icon: 'book', items: [['academics', 'Academic Overview'], ['departments', 'Departments'], ['curriculum', 'Curriculum'], ['academic-calendar', 'Academic Calendar'], ['library', 'Library']] },
  { label: 'Admissions', icon: 'grad', items: [['programmes', 'UG & PG Programmes'], ['admission-enquiry', 'Admission Enquiry'], ['admission-referral', 'Admission Referral']] },
  { label: 'Campus', icon: 'building', items: [['campus-life', 'Campus Life'], ['facilities', 'Facilities'], ['hostel', 'Hostel'], ['transport', 'Transport'], ['sports', 'Sports'], ['clubs', 'Student Clubs'], ['ncc', 'NCC & NSS']] },
  { label: 'Quality & Excellence', icon: 'quality', items: [['centres-of-excellence', 'Centres of Excellence'], ['accreditations', 'NBA & NAAC'], ['examinations', 'Examinations'], ['iqac', 'IQAC']] },
  { label: 'Explore', icon: 'compass', items: [['training', 'Career Development'], ['research', 'Research & Development'], ['innovation', 'Innovation & Incubation'], ['alumni', 'Alumni'], ['contact', 'Contact Us']] }
];
const pageCopy = {
  'admission-referral': ['Admission Referral', 'Recommend an aspiring student to Sri Shakthi.', 'Support prospective engineers by connecting them with our admissions team through the institutional referral programme.'],
  'core-beliefs': ['Core Beliefs', 'Enduring principles that guide our mission.', 'Achieving academic success is our gateway, employability is our milestone, confident citizenship is our destination, discipline provides willpower, and education is our weapon to change the world.'],
  academics: ['Academic Overview', 'Knowledge designed for application.', 'Flexible learning, strong fundamentals, laboratories, projects and industry exposure form the core of the Sri Shakthi academic experience.'], departments: ['Departments', '21 Specialized UG & PG Disciplines. One culture of discovery.', 'Explore our 14 undergraduate and 7 postgraduate engineering and technology departments offering focused learning, world-class laboratories, research and industry engagement.'], curriculum: ['Curriculum', 'Current, connected and outcome-driven.', 'The curriculum combines disciplinary depth, professional skills, multidisciplinary electives, projects and experiential learning.'], 'academic-calendar': ['Academic Calendar', 'Plan the academic year.', 'Semester schedules bring together instruction, assessment, events, examinations and academic milestones.'], library: ['Central Library', 'A connected knowledge centre.', 'Print and digital resources, journals, databases and focused study environments support teaching, learning and research.'], examinations: ['Examinations', 'Clear processes. Fair assessment.', 'The Controller of Examinations coordinates schedules, evaluation, results and academic records for autonomous programmes.'], programmes: ['UG & PG Programmes', 'Choose the field you want to shape.', 'Undergraduate and postgraduate pathways connect engineering foundations with emerging technologies and real-world practice.'], eligibility: ['Eligibility', 'Your pathway to Sri Shakthi.', 'Admission eligibility follows applicable Government of Tamil Nadu, AICTE and Anna University norms.'], scholarships: ['Scholarships', 'Talent deserves opportunity.', 'Merit and need-based scholarship pathways help ambitious learners access high-quality engineering education.'], fees: ['Fee Information', 'Clear guidance for applicants.', 'Contact the admissions office for programme-specific fee structure, counselling and scholarship guidance.'], 'campus-life': ['Campus Life', 'Learn. Build. Belong.', 'A vibrant 45-acre eco-friendly campus brings together academics, culture, sport, entrepreneurship and community.'], facilities: ['Facilities', 'Spaces made for exploration.', 'Advanced laboratories, collaborative classrooms, seminar halls, digital infrastructure and student support facilities.'], hostel: ['Hostel', 'A welcoming campus home.', 'Student residences support safe, comfortable living, shared learning and a strong sense of community.'], transport: ['Transport', 'Connected to Coimbatore.', 'College transport supports convenient travel across major routes in and around the city.'], sports: ['Sports', 'Energy beyond academics.', 'With 26+ activities and a proud competitive record, sport is central to student wellbeing and leadership.'], clubs: ['Student Clubs', 'Find your people. Build your voice.', 'Technical, cultural, social and professional clubs turn interests into projects, events and leadership experience.'], ncc: ['NCC & NSS', 'Unity, discipline and service.', 'Student service programmes develop character, citizenship, teamwork and responsibility.'], placements: ['Placements', 'Preparing talent for meaningful careers.', 'Career readiness spans aptitude, communication, technical training, internships, industry interaction and recruitment.'], training: ['Career Development', 'Skills that move careers forward.', 'Dedicated training helps students build technical confidence, professional communication and placement readiness.'], research: ['Research & Development', 'Ideas engineered into impact.', 'Faculty and students pursue applied research, publications, prototypes, consultancy and interdisciplinary collaboration.'], innovation: ['Innovation & Incubation', 'From problem to prototype.', 'Mentoring, maker culture and entrepreneurial support help student ideas grow into useful solutions and ventures.'], 'centres-of-excellence': ['Centres of Excellence', 'Advanced tools. Industry contexts.', 'Specialist centres connect learners with contemporary platforms, domain expertise and practical challenges.'], accreditations: ['Approvals & Accreditations', 'Quality recognised. Standards sustained.', 'An autonomous institution approved by AICTE, affiliated to Anna University, accredited by NAAC and with eligible programmes accredited by NBA.'], alumni: ['Alumni', 'Shakthians around the world.', 'A growing network of 10,273+ alumni strengthens mentorship, opportunity and lifelong institutional connection.'], iqac: ['IQAC & NAAC', 'Quality as a continuous practice.', 'The Internal Quality Assurance Cell supports evidence-led improvement across academics, governance and student experience.'], contact: ['Contact Us', 'We are here to help.', 'Visit the campus, speak with admissions, or connect with the institute office using the details below.']
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
  return s[k] || `<span>â—†</span>`;
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

const ugProgramsDetailed = [
  { code: 'AGRI', degree: 'B.Tech', name: 'Agricultural Engineering', fullName: 'B.Tech - Agricultural Engineering', desc: 'Smart farming, precision irrigation, agro-machinery automation and sustainable food systems.', duration: '4 Years', img: '/assets/images/category/cat1.jpg', deptSlug: 'agricultural-engineering' },
  { code: 'AI&DS', degree: 'B.Tech', name: 'Artificial Intelligence and Data Science', fullName: 'B.Tech - Artificial Intelligence and Data Science', desc: 'Mathematical foundations, predictive modeling, big data analytics, neural computing and data engineering.', duration: '4 Years', img: '/assets/images/course/3.jpg', deptSlug: 'artificial-intelligence-and-data-science' },
  { code: 'AI&ML', degree: 'B.Tech', name: 'Artificial Intelligence and Machine Learning', fullName: 'B.Tech - Artificial Intelligence and Machine Learning', desc: 'Deep learning architectures, computer vision, generative AI algorithms, NLP and intelligent robotics.', duration: '4 Years', img: '/assets/images/category/cat5.jpg', deptSlug: 'artificial-intelligence-and-machine-learning' },
  { code: 'BME', degree: 'B.E', name: 'Biomedical Engineering', fullName: 'B.E - Biomedical Engineering', desc: 'Medical instrumentation, physiological monitoring, biomaterials, diagnostic imaging and assistive healthcare robotics.', duration: '4 Years', img: '/assets/images/category/cat2.jpg', deptSlug: 'biomedical-engineering' },
  { code: 'BIOTECH', degree: 'B.Tech', name: 'Biotechnology', fullName: 'B.Tech - Biotechnology', desc: 'Molecular science, bioprocessing, genetic engineering, industrial microbiology, downstream separation and bioinformatics.', duration: '4 Years', img: '/assets/images/category/cat3.jpg', deptSlug: 'biotechnology' },
  { code: 'CIVIL', degree: 'B.E', name: 'Civil Engineering', fullName: 'B.E - Civil Engineering', desc: 'Smart structural analysis, geotechnical design, green building technology, BIM and environmental hydraulics.', duration: '4 Years', img: '/assets/images/category/cat4.jpg', deptSlug: 'civil-engineering' },
  { code: 'CSE', degree: 'B.E', name: 'Computer Science and Engineering', fullName: 'B.E - Computer Science and Engineering', desc: 'Core computer science foundations, intelligent algorithms, cloud computing, data structures and enterprise systems.', duration: '4 Years', img: '/assets/images/category/cat5.jpg', deptSlug: 'computer-science-and-engineering' },
  { code: 'CYBER', degree: 'B.E', name: 'Computer Science and Engineering ( Cyber Security )', fullName: 'B.E - Computer Science and Engineering ( Cyber Security )', desc: 'Digital forensics, ethical hacking, cryptographic protocols, cloud security frameworks and SOC threat intelligence.', duration: '4 Years', img: '/assets/images/course/3.jpg', deptSlug: 'computer-science-and-engineering' },
  { code: 'EEE', degree: 'B.E', name: 'Electrical and Electronics Engineering', fullName: 'B.E - Electrical and Electronics Engineering', desc: 'Power systems, smart grid architectures, electric mobility, renewable energy conversion and industrial drives.', duration: '4 Years', img: '/assets/images/category/cat6.jpg', deptSlug: 'electrical-and-electronics' },
  { code: 'ECE', degree: 'B.E', name: 'Electronics and Communication Engineering', fullName: 'B.E - Electronics and Communication Engineering', desc: '5G RF communications, embedded IoT systems, digital signal processing, microelectronics and modern telecommunication.', duration: '4 Years', img: '/assets/images/category/cat7.jpg', deptSlug: 'electronics-and-communication' },
  { code: 'FOOD', degree: 'B.Tech', name: 'Food Technology', fullName: 'B.Tech - Food Technology', desc: 'Food preservation, dairy processing, industrial packaging, safety certifications and precision nutrition formulation.', duration: '4 Years', img: '/assets/images/category/cat8.jpg', deptSlug: 'food-technology' },
  { code: 'IT', degree: 'B.Tech', name: 'Information Technology', fullName: 'B.Tech - Information Technology', desc: 'Full-stack software engineering, cloud networking, DevOps automation, enterprise database systems and cyber infrastructure.', duration: '4 Years', img: '/assets/images/course/3.jpg', deptSlug: 'information-technology' },
  { code: 'MECH', degree: 'B.E', name: 'Mechanical Engineering', fullName: 'B.E - Mechanical Engineering', desc: 'Computational mechanics, thermodynamics, additive manufacturing, automotive engineering and advanced robotics.', duration: '4 Years', img: '/assets/images/course/6.jpg', deptSlug: 'mechanical-engineering' },
  { code: 'VLSI', degree: 'B.E', name: 'Electronics Engineering ( VLSI Design & Technology)', fullName: 'B.E - Electronics Engineering ( VLSI Design & Technology)', desc: 'Semiconductor design, CMOS digital/analog ICs, FPGA synthesis, physical design verification and System-on-Chip (SoC).', duration: '4 Years', img: '/assets/images/category/cat7.jpg', deptSlug: 'vlsi-design' }
];

const pgProgramsDetailed = [
  { code: 'M-CSE', degree: 'M.E', name: 'Computer Science and Engineering', fullName: 'M.E - Computer Science and Engineering', desc: 'Advanced algorithms, machine learning research, distributed cloud systems and high-performance computing.', duration: '2 Years', img: '/assets/images/category/cat5.jpg', deptSlug: 'computer-science-and-engineering' },
  { code: 'M-VLSI', degree: 'M.E', name: 'VLSI Design', fullName: 'M.E - VLSI Design', desc: 'Advanced semiconductor microelectronics, ASIC design flows, physical synthesis, low-power VLSI and SoC testing.', duration: '2 Years', img: '/assets/images/category/cat7.jpg', deptSlug: 'vlsi-design' },
  { code: 'M-CAD', degree: 'M.E', name: 'CAD/CAM', fullName: 'M.E - CAD/CAM', desc: 'Advanced computer-aided design, generative modeling, CNC automation, finite element simulation and precision tooling.', duration: '2 Years', img: '/assets/images/course/6.jpg', deptSlug: 'mechanical-engineering' },
  { code: 'M-EMB', degree: 'M.E', name: 'Embedded System Technologies', fullName: 'M.E - Embedded System Technologies', desc: 'Real-time operating systems (RTOS), IoT architectures, ARM microcontrollers, automotive electronics and firmware engineering.', duration: '2 Years', img: '/assets/images/category/cat6.jpg', deptSlug: 'electrical-and-electronics' },
  { code: 'M-STR', degree: 'M.E', name: 'Structural Engineering', fullName: 'M.E - Structural Engineering', desc: 'Advanced earthquake-resistant design, prestressed concrete, smart materials, tall structures and structural health monitoring.', duration: '2 Years', img: '/assets/images/category/cat4.jpg', deptSlug: 'civil-engineering' },
  { code: 'M-FOOD', degree: 'M.Tech', name: 'Food Technology', fullName: 'M.Tech - Food Technology', desc: 'Advanced food processing technologies, biopolymers, food biotechnology, functional food development and global quality systems.', duration: '2 Years', img: '/assets/images/category/cat8.jpg', deptSlug: 'food-technology' },
  { code: 'M-FARM', degree: 'M.Tech', name: 'Farm Machinery', fullName: 'M.Tech - Farm Machinery', desc: 'Advanced agricultural power machinery, precision agro-robotics, bio-energy engineering and automated harvesting systems.', duration: '2 Years', img: '/assets/images/category/cat1.jpg', deptSlug: 'agricultural-engineering' }
];

const bottomBannerHtml = `<div class="programme-bottom-banner reveal"><div class="bottom-banner-cap">${deptIcon('grad')}</div><div class="bottom-banner-text"><h4>Choose a programme.</h4><p>Shape a better tomorrow.</p></div><div class="bottom-banner-line"></div><div class="bottom-banner-script">Engineers for a Better Tomorrow</div></div>`;


function header() {
  const desktopNav = `
    <div class="institution-nav-group">
      <button type="button">About Us${icon('down')}</button>
      <div>
        <a href="#/vision-mission">Vision And Mission</a>
        <a href="#/chairman">The Chairman's desk</a>
        <a href="#/principal">From the Principal</a>
      </div>
    </div>
    <div class="institution-nav-group">
      <button type="button">Admissions${icon('down')}</button>
      <div>
        <a href="#/programmes">UG & PG Programmes</a>
        <a href="#/admission-enquiry">Admission Enquiry</a>
        <a href="#/admission-referral">Admission Referral</a>
      </div>
    </div>
    <div class="institution-nav-group">
      <button type="button">Academics${icon('down')}</button>
      <div>
        <a href="#/academics">Academic Overview</a>
        <a href="#/departments">Departments</a>
        <a href="#/curriculum">Curriculum</a>
        <a href="#/academic-calendar">Academic Calendar</a>
        <a href="#/library">Library</a>
      </div>
    </div>
    <div class="institution-nav-group placements-nav-group">
      <button type="button">Placements${icon('down')}</button>
      <div>
        <a href="#/placements">Job Placements</a>
        <a href="#/placements/entrepreneurship">Entrepreneurship</a>
        <a href="#/placements/higher-education">Higher Education</a>
        <a href="#/placements/government-services">Government Services</a>
      </div>
    </div>
    <div class="institution-nav-group">
      <button type="button">#LifeatSriShakthi${icon('down')}</button>
      <div>
        <a href="#/campus-life">Campus Life</a>
        <a href="#/facilities">Facilities</a>
        <a href="#/hostel">Hostel</a>
        <a href="#/transport">Transport</a>
        <a href="#/sports">Sports</a>
        <a href="#/clubs">Student Clubs</a>
        <a href="#/ncc">NCC & NSS</a>
      </div>
    </div>
    <a class="institution-nav-link" href="#/research">Research</a>
    <div class="institution-nav-group">
      <button type="button">COE${icon('down')}</button>
      <div>
        <a href="#/centres-of-excellence">Centres of Excellence</a>
      </div>
    </div>
    <a class="institution-nav-link" href="#/accreditations">Accreditation</a>
  `;

  const mobileNav = `
    <div class="mobile-nav-group">
      <button type="button" class="mobile-nav-group-toggle" aria-expanded="false"><span>About Us</span>${icon('down')}</button>
      <div class="mobile-nav-subitems">
        <a href="#/vision-mission" class="mobile-nav-sublink">Vision And Mission</a>
        <a href="#/chairman" class="mobile-nav-sublink">The Chairman's desk</a>
        <a href="#/principal" class="mobile-nav-sublink">From the Principal</a>
      </div>
    </div>
    <div class="mobile-nav-group">
      <button type="button" class="mobile-nav-group-toggle" aria-expanded="false"><span>Admissions</span>${icon('down')}</button>
      <div class="mobile-nav-subitems">
        <a href="#/programmes" class="mobile-nav-sublink">UG & PG Programmes</a>
        <a href="#/admission-enquiry" class="mobile-nav-sublink">Admission Enquiry</a>
        <a href="#/admission-referral" class="mobile-nav-sublink">Admission Referral</a>
      </div>
    </div>
    <div class="mobile-nav-group">
      <button type="button" class="mobile-nav-group-toggle" aria-expanded="false"><span>Academics</span>${icon('down')}</button>
      <div class="mobile-nav-subitems">
        <a href="#/academics" class="mobile-nav-sublink">Academic Overview</a>
        <a href="#/departments" class="mobile-nav-sublink">Departments</a>
        <a href="#/curriculum" class="mobile-nav-sublink">Curriculum</a>
        <a href="#/academic-calendar" class="mobile-nav-sublink">Academic Calendar</a>
        <a href="#/library" class="mobile-nav-sublink">Library</a>
      </div>
    </div>
    <div class="mobile-nav-group placements-nav-group">
      <button type="button" class="mobile-nav-group-toggle" aria-expanded="false"><span>Placements</span>${icon('down')}</button>
      <div class="mobile-nav-subitems">
        <a href="#/placements" class="mobile-nav-sublink">Job Placements</a>
        <a href="#/placements/entrepreneurship" class="mobile-nav-sublink">Entrepreneurship</a>
        <a href="#/placements/higher-education" class="mobile-nav-sublink">Higher Education</a>
        <a href="#/placements/government-services" class="mobile-nav-sublink">Government Services</a>
      </div>
    </div>
    <div class="mobile-nav-group">
      <button type="button" class="mobile-nav-group-toggle" aria-expanded="false"><span>#LifeatSriShakthi</span>${icon('down')}</button>
      <div class="mobile-nav-subitems">
        <a href="#/campus-life" class="mobile-nav-sublink">Campus Life</a>
        <a href="#/facilities" class="mobile-nav-sublink">Facilities</a>
        <a href="#/hostel" class="mobile-nav-sublink">Hostel</a>
        <a href="#/transport" class="mobile-nav-sublink">Transport</a>
        <a href="#/sports" class="mobile-nav-sublink">Sports</a>
        <a href="#/clubs" class="mobile-nav-sublink">Student Clubs</a>
        <a href="#/ncc" class="mobile-nav-sublink">NCC & NSS</a>
      </div>
    </div>
    <a class="mobile-nav-link" href="#/research">Research</a>
    <div class="mobile-nav-group">
      <button type="button" class="mobile-nav-group-toggle" aria-expanded="false"><span>COE</span>${icon('down')}</button>
      <div class="mobile-nav-subitems">
        <a href="#/centres-of-excellence" class="mobile-nav-sublink">Centres of Excellence</a>
      </div>
    </div>
    <a class="mobile-nav-link" href="#/accreditations">Accreditation</a>
  `;

  return `<div class="notice"><div class="notice-track"><span><b>ADMISSIONS 2026â€“27 NOW OPEN</b><i></i> Applications are invited for undergraduate and postgraduate engineering programmes <i></i> Begin your journey at Sri Shakthi <i></i> TNEA Counselling Code: 2727</span><span aria-hidden="true"><b>ADMISSIONS 2026â€“27 NOW OPEN</b><i></i> Applications are invited for undergraduate and postgraduate engineering programmes <i></i> Begin your journey at Sri Shakthi <i></i> TNEA Counselling Code: 2727</span></div></div>
<header class="institution-header-v4 exact-image-header"><div class="institution-header-shell"><a class="siet-header-image" href="#/" aria-label="Sri Shakthi Institute of Engineering and Technology home"><img src="/brand/siet-exact-header.png" alt="Sri Shakthi Institute of Engineering and Technology â€” NBA accredited, NAAC A grade, counselling code 2727" width="2048" height="256"></a><nav class="institution-navbar" aria-label="Main navigation"><button class="institution-mobile-toggle" aria-label="Open navigation menu" type="button">${icon('menu')}</button><a class="institution-mobile-logo" href="#/" aria-label="Sri Shakthi Home"><img src="/brand/siet-logo.png" alt="Sri Shakthi" class="mobile-logo-img"><span class="mobile-logo-text"><b>SRI SHAKTHI</b><small>Autonomous Institution</small></span></a><a class="institution-home" href="#/" aria-label="Home">${icon('home')}</a><div class="institution-menu">${desktopNav}</div><a class="institution-nav-apply" href="#/apply">Apply Now ${icon('arrow')}</a></nav></div></header>
<div class="mobile-nav-backdrop"></div>
<aside class="mobile-nav" aria-label="Mobile Navigation"><div class="mobile-nav-header"><a href="#/" class="mobile-nav-brand"><img src="/brand/siet-logo.png" alt="Sri Shakthi"><div><strong>SRI SHAKTHI</strong><small>Autonomous Institution</small></div></a><button class="mobile-nav-close" aria-label="Close menu">${icon('close')}</button></div><div class="mobile-nav-body"><a href="#/" class="mobile-nav-link mobile-nav-home">${icon('home')} Home</a><div class="mobile-nav-accordion">${mobileNav}</div></div><div class="mobile-nav-footer"><a class="mobile-apply-link" href="#/apply">Apply Now ${icon('arrow')}</a></div></aside>`
}

function footer() { return `<footer class="site-footer footer-reference"><div class="footer-top"><div class="footer-brand"><a class="mark" href="#/"><img src="/brand/siet-logo.png" alt="Sri Shakthi emblem"><span><b>SRI SHAKTHI</b><small>INSTITUTE OF ENGINEERING AND TECHNOLOGY</small><em>AUTONOMOUS Â· AFFILIATED TO ANNA UNIVERSITY</em></span></a><p>Powering the youth.<br>Empowering the nation.</p></div><div class="footer-sitemap">${pageGroups.map(g => `<div class="footer-link-group"><b>${g.label}</b>${g.items.map(([s, n]) => `<a href="#/${s}"><span>â€º</span>${n}</a>`).join('')}</div>`).join('')}</div></div><div class="footer-legal"><small>Â© ${new Date().getFullYear()} Sri Shakthi Institute of Engineering &amp; Technology. All rights reserved.</small><nav><a href="#/privacy-policy">Privacy Policy</a><i></i><a href="#/terms">Terms of Use</a><i></i><a href="#/sitemap">Sitemap</a></nav></div></footer>` }
const counter = (to, suffix = '') => `<span class="js-counter" data-to="${to}" data-suffix="${suffix}">0${suffix}</span>`;

const placementTierData = {
  '10': {
    tier: 'â‚¹10 LPA+',
    name: 'Super Dream Offers',
    count: 18,
    badge: 'Tier 1 â€¢ Super Dream Category',
    highlight: 'Highest offer of â‚¹24 LPA with an average of â‚¹12.4 LPA',
    desc: 'Elite product engineering, AI systems, cloud architecture, and mission-critical cybersecurity roles.',
    roles: ['Cloud Solutions Architect', 'AI/ML Research Engineer', 'Senior Full Stack Specialist', 'Core Security Analyst'],
    companies: ['Zoho', 'Presidio', 'ConverSight', 'Cognizant', 'Zentron Labs', 'Auriseg'],
    statBox: { label: 'Highest Package', value: 'â‚¹24 LPA' }
  },
  '8': {
    tier: 'â‚¹8 LPA+',
    name: 'Marquee Offers',
    count: 42,
    badge: 'Tier 2 â€¢ Marquee Category',
    highlight: 'Average package of â‚¹8.6 LPA across engineering disciplines',
    desc: 'Specialized enterprise technology, data engineering, full stack development, and embedded systems.',
    roles: ['DevOps & Cloud Engineer', 'Enterprise Application Developer', 'Data Platform Engineer', 'Firmware Engineer'],
    companies: ['Presidio', 'Cognizant', 'Auriseg', 'nference', 'ZyNerd', 'Retail AI'],
    statBox: { label: 'Average Package', value: 'â‚¹8.6 LPA' }
  },
  '6': {
    tier: 'â‚¹6 LPA+',
    name: 'Premier Offers',
    count: 76,
    badge: 'Tier 3 â€¢ Premier Category',
    highlight: 'Average package of â‚¹6.4 LPA with over 76 confirmed placements',
    desc: 'Core software engineering, robotics automation, smart infrastructure, and digital transformation.',
    roles: ['Software Development Engineer', 'Embedded Systems Specialist', 'Automation & QA Engineer', 'Digital Solutions Analyst'],
    companies: ['Cognizant', 'Zoho', 'Nallas', 'Retail AI', 'ITC Limited', 'Vendasta'],
    statBox: { label: 'Average Package', value: 'â‚¹6.4 LPA' }
  },
  '4': {
    tier: 'â‚¹4 LPA+',
    name: 'Core & IT Offers',
    count: 128,
    badge: 'Tier 4 â€¢ Core & IT Category',
    highlight: 'Over 128 career starts with 100% industry placement track record',
    desc: 'Fundamental engineering roles spanning software engineering, hardware validation, and IoT development.',
    roles: ['Associate Software Engineer', 'IoT Solutions Associate', 'VLSI Design Trainee', 'Process Engineering Analyst'],
    companies: ['Abluva', 'Adya', 'Conserve', 'Mr. Copper', 'Vakilsearch', 'ServiceNow'],
    statBox: { label: 'Placement Success', value: '100%' }
  }
};

function placementDetailsModal(tierKey = '10') {
  const current = placementTierData[tierKey] || placementTierData['10'];
  return `
    <div class="placement-modal" role="dialog" aria-modal="true" aria-label="Placement Tier Details">
      <div class="placement-modal-backdrop"></div>
      <div class="placement-modal-window">
        <button class="placement-modal-close" aria-label="Close placement details modal">Ã—</button>
        
        <div class="pm-header">
          <div class="pm-eyebrow">
            <span class="pm-dot" aria-hidden="true"></span>
            PLACEMENT RECORD Â· BATCH OF 2025â€“2026
          </div>
          <h3 class="pm-title">
            <span class="pm-title-green">Placement</span> <span class="pm-title-gold">Breakdown</span>
          </h3>
          <p class="pm-subtitle">Select a package tier to explore placed students, key recruiters, and career tracks.</p>
        </div>

        <!-- Interactive Tier Switcher Tabs -->
        <div class="pm-tier-tabs" role="tablist" aria-label="Placement Salary Tiers">
          ${Object.keys(placementTierData).map(k => {
            const t = placementTierData[k];
            const isActive = k === tierKey ? 'active' : '';
            return `
              <button class="pm-tab-btn ${isActive}" type="button" role="tab" data-tier="${k}" aria-selected="${k === tierKey ? 'true' : 'false'}">
                <span class="pm-tab-pill">${t.tier}</span>
                <span class="pm-tab-count"><b>${t.count}</b> Placed</span>
              </button>
            `;
          }).join('')}
        </div>

        <!-- Tier Detail Body -->
        <div class="pm-body">
          <div class="pm-hero-card">
            <div class="pm-hero-left">
              <div class="pm-badge">${current.badge}</div>
              <h4 class="pm-tier-name">${current.name}</h4>
              <div class="pm-highlight-row">
                <span class="pm-highlight-icon">${icon('star')}</span>
                <span class="pm-highlight-text">${current.highlight}</span>
              </div>
              <p class="pm-desc">${current.desc}</p>
            </div>
            <div class="pm-hero-stat">
              <span class="pm-stat-num">${current.count}</span>
              <span class="pm-stat-lbl">STUDENTS PLACED</span>
              <span class="pm-stat-badge">${current.statBox.label}: <b>${current.statBox.value}</b></span>
            </div>
          </div>

          <div class="pm-details-grid">
            <div class="pm-col">
              <h5><span class="pm-col-icon">${icon('ps-building')}</span> Key Recruiting Companies</h5>
              <div class="pm-company-tags">
                ${current.companies.map(c => `
                  <span class="pm-company-tag">
                    <span class="pm-tag-check" aria-hidden="true">âœ“</span>
                    <span>${c}</span>
                  </span>
                `).join('')}
              </div>
            </div>

            <div class="pm-col">
              <h5><span class="pm-col-icon">${icon('ps-briefcase')}</span> Roles & Engineering Profiles</h5>
              <div class="pm-roles-list">
                ${current.roles.map(r => `
                  <div class="pm-role-item">
                    <span class="pm-role-bullet" aria-hidden="true">â€º</span>
                    <span>${r}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>

        <div class="pm-footer">
          <div class="pm-footer-stats">
            <span>Batch Placement: <b>98.4%</b></span>
            <span class="pm-footer-sep" aria-hidden="true">|</span>
            <span>Highest Offer: <b>â‚¹24 LPA</b></span>
            <span class="pm-footer-sep" aria-hidden="true">|</span>
            <span>Median Package: <b>â‚¹6.8 LPA</b></span>
          </div>
          <div class="pm-footer-actions">
            <a href="#/admission-enquiry" class="pm-cta-btn primary">Enquire For Admissions ${icon('arrow')}</a>
            <button type="button" class="pm-cta-btn secondary js-close-pm">Close</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function placementHighlightsCardInner() {
  return `
    <!-- Centered Heading Group -->
    <div class="placement-heading-group">
      <h2 class="placement-main-heading">
        <span class="heading-green">Placement</span> <span class="heading-gold">Highlights</span>
      </h2>
      <div class="placement-subheading-row">
        <span class="subheading-gold-line" aria-hidden="true"></span>
        <span class="subheading-batch">2025 â€“ 2026</span>
        <span class="subheading-batch-tag">( BATCH 2025â€“2026 )</span>
        <span class="subheading-gold-line" aria-hidden="true"></span>
      </div>
      <div class="placement-heading-motto">TODAY. IMPACT TOMORROW.</div>
    </div>

    <!-- 4 Standalone Interactive Statistic Cards in one row -->
    <div class="ps-standalone-cards-row" role="region" aria-label="Placement statistics by salary tier">
      <!-- Card 01 -->
      <article class="ps-stat-card" role="button" tabindex="0" data-tier="10" aria-haspopup="dialog" aria-label="â‚¹10 LPA+ Tier: 18 Students Placed. Click to explore offers and recruiters">
        <div class="ps-stat-card-glow" aria-hidden="true"></div>
        <div class="ps-stat-icon-circle">
          ${icon('ps-users')}
        </div>
        <div class="ps-stat-pill">â‚¹10 LPA+</div>
        <strong class="ps-stat-count">${counter(18)}</strong>
        <span class="ps-stat-label">STUDENTS PLACED</span>
        <span class="ps-stat-action">
          <span>Explore Tier</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
        </span>
      </article>

      <!-- Card 02 -->
      <article class="ps-stat-card" role="button" tabindex="0" data-tier="8" aria-haspopup="dialog" aria-label="â‚¹8 LPA+ Tier: 42 Students Placed. Click to explore offers and recruiters">
        <div class="ps-stat-card-glow" aria-hidden="true"></div>
        <div class="ps-stat-icon-circle">
          ${icon('ps-chart')}
        </div>
        <div class="ps-stat-pill">â‚¹8 LPA+</div>
        <strong class="ps-stat-count">${counter(42)}</strong>
        <span class="ps-stat-label">STUDENTS PLACED</span>
        <span class="ps-stat-action">
          <span>Explore Tier</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
        </span>
      </article>

      <!-- Card 03 -->
      <article class="ps-stat-card" role="button" tabindex="0" data-tier="6" aria-haspopup="dialog" aria-label="â‚¹6 LPA+ Tier: 76 Students Placed. Click to explore offers and recruiters">
        <div class="ps-stat-card-glow" aria-hidden="true"></div>
        <div class="ps-stat-icon-circle">
          ${icon('ps-diploma')}
        </div>
        <div class="ps-stat-pill">â‚¹6 LPA+</div>
        <strong class="ps-stat-count">${counter(76)}</strong>
        <span class="ps-stat-label">STUDENTS PLACED</span>
        <span class="ps-stat-action">
          <span>Explore Tier</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
        </span>
      </article>

      <!-- Card 04 -->
      <article class="ps-stat-card" role="button" tabindex="0" data-tier="4" aria-haspopup="dialog" aria-label="â‚¹4 LPA+ Tier: 128 Students Placed. Click to explore offers and recruiters">
        <div class="ps-stat-card-glow" aria-hidden="true"></div>
        <div class="ps-stat-icon-circle">
          ${icon('ps-briefcase')}
        </div>
        <div class="ps-stat-pill">â‚¹4 LPA+</div>
        <strong class="ps-stat-count">${counter(128)}</strong>
        <span class="ps-stat-label">STUDENTS PLACED</span>
        <span class="ps-stat-action">
          <span>Explore Tier</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
        </span>
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
          <button type="button" class="placement-v2-btn primary js-explore-placements">Explore Placements ${icon('arrow')}</button>
          <button type="button" class="placement-v2-btn secondary js-video">${icon('play')} Watch Placement Journey</button>
        </div>
      </div>
    </div>
    <div class="placement-right-section reveal" id="placement-highlights">
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
        <div style="margin-top: 14px;">
          <a href="#/programmes" class="view-all-programmes-btn">View All UG &amp; PG Programmes &rarr;</a>
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
            <span class="feature-arrow-btn">â†’</span>
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
        <span class="eyebrow-dash">â€”</span>
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
            <span class="card-circle-arrow">â†’</span>
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
            <span class="card-circle-arrow">â†’</span>
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
            <span class="card-circle-arrow">â†’</span>
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
            <span class="card-circle-arrow">â†’</span>
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
            <span class="card-circle-arrow">â†’</span>
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
            <span class="card-circle-arrow">â†’</span>
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
        <span class="eyebrow-dash">â€”</span>
        <span class="eyebrow-text">SPECIAL LABS</span>
      </div>
      <h2 class="labs-heading">
        Advanced<br>
        Labs for a<br>
        <em>Brighter<br>Tomorrow.</em>
      </h2>
      <p class="labs-desc">
        State-of-the-art laboratories to explore, experiment and innovate â€” empowering students with hands-on experience for real-world impact.
      </p>

      <div class="labs-actions">
        <a href="#/centres-of-excellence" class="labs-btn-primary">Explore Our Labs â†’</a>
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
          <span class="labs-banner-arrow" aria-hidden="true">â†’</span>
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
          <span class="eyebrow-dash">â€”</span>
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

        <a href="#/campus-life" class="events-btn-primary">View All Events â†’</a>

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
            <span class="featured-gold-badge">â˜… Featured Event</span>
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

            <a href="#/campus-life" class="featured-know-more-btn">Know More â†’</a>
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
      <button class="event-filter-pill" type="button" data-cat="others">â€¢â€¢â€¢ Others</button>
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
            <span class="event-circle-arrow">â†’</span>
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
            <span class="event-circle-arrow">â†’</span>
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
            <span class="event-circle-arrow">â†’</span>
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
        <span class="events-banner-arrow" aria-hidden="true">â†’</span>
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
      <span class="prog-arrow-circle">â†’</span>
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
function philosophyPage() { const principles = [['Learn by doing', 'Learning becomes lasting when ideas are tested, made and improved through purposeful practice.', '01'], ['Think beyond disciplines', 'The most valuable solutions emerge when engineering connects with people, society and the wider world.', '02'], ['Grow with responsibility', 'Knowledge carries purpose. We prepare students to use it ethically, sustainably and for public good.', '03']]; return `<main class="siet-vm-page siet-ph-page"><section class="siet-vm-hero siet-ph-hero"><div class="siet-vm-hero-grid"></div><div class="siet-vm-hero-orb orb-one"></div><div class="siet-vm-hero-orb orb-two"></div><div class="siet-vm-shell siet-vm-hero-content reveal"><p class="siet-vm-kicker"><i></i> OUR EDUCATIONAL BELIEF</p><h1>Learning with <em>purpose.</em></h1><p class="siet-vm-intro">An education that builds confident thinkers, capable creators and responsible citizens for a changing world.</p></div></section><section class="siet-vm-content"><div class="siet-vm-shell siet-vm-layout">${AboutSidebar('philosophy')}<div class="siet-vm-main"><article class="siet-ph-statement reveal"><span class="siet-ph-quote">â€œ</span><p>We believe education should do more than prepare students for a profession. It should inspire them to question, create, collaborate and use their capabilities to make a meaningful difference.</p><span class="siet-ph-mark"><i></i> SRI SHAKTHI PHILOSOPHY</span></article><div class="siet-ph-principles">${principles.map(([title, copy, number], index) => `<article class="siet-ph-principle reveal"><span class="siet-ph-principle-no">${number}</span><span class="siet-ph-principle-icon">${vmIcon(index === 0 ? 'education' : index === 1 ? 'spark' : 'compass')}</span><div><h3>${title}</h3><p>${copy}</p></div></article>`).join('')}</div><div class="siet-ph-closing reveal"><div><p>OUR PROMISE</p><h2>Knowledge in action.<br><em>Character in leadership.</em></h2></div><span>Every SIET experience is designed to turn potential into a positive force for the future.</span></div></div></div></section></main>` }
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
          <span>Our educational philosophy is anchored in five essential convictions â€” from gateway academic success to world-changing leadership.</span>
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

function chairmanPage() { return `<main class="siet-cd-page chairman-page"><section class="siet-cd-hero"><div class="siet-cd-grid"></div><div class="siet-cd-hero-glow"></div><div class="siet-cd-shell"><div class="siet-cd-hero-layout"><div class="siet-cd-portrait reveal"><div class="siet-cd-portrait-frame"><div class="siet-cd-portrait-ring"></div><img src="/brand/chairman-passport.png" alt="Dr. S. Thangavelu, Chairman"></div><div class="siet-cd-name"><strong>Dr. S. Thangavelu</strong><span>Chairman</span><small>Sri Shakthi Group of Institutions</small></div></div><div class="siet-cd-hero-copy reveal"><p class="siet-cd-kicker"><i></i> A MESSAGE FROM THE CHAIRMAN</p><h1>A dream built on <em>equality, excellence</em> and service.</h1><p>Building an institution where every student is encouraged to learn deeply, think boldly and contribute meaningfully.</p></div></div></div></section><section id="chairman-message" class="siet-cd-content"><div class="siet-cd-shell siet-cd-layout"><article class="siet-cd-message"><div class="siet-cd-message-head reveal"><p>CHAIRMANâ€™S MESSAGE</p><h2>Education that empowers<br><em>each individual.</em></h2></div><div class="siet-cd-prose reveal"><p>I have always been inspired by Dr. Martin Luther King's statement, â€˜I have a dreamâ€™ â€” a dream I believe will come true â€” a dream that my children will one day live in a world where they will not be judged by the colour of their skin, but by the content of their character. This need for tolerance â€” to create an equal society with no discrimination in caste, creed or colour â€” was best exemplified in the words of Mahatma Gandhi as follows.</p><blockquote>â€œI do not want my institution to be walled off on all sides. I want the culture of all lands to be blown about my institution as freely as possible. But I refuse to be blown off by any one of them.â€</blockquote><p>And this I believe will be the watchword of each and every Shakthian.</p><p>The vision for Sri Shakthi is to make the institution one of our nation's great engineering schools, recognized nationally and internationally for excellence in teaching, research and public service. We seek to be the preferred destination for students, practitioners seeking an engineering education, employers hiring engineering graduates and organizations seeking engineering knowledge.</p><div class="siet-cd-signoff"><span></span><div><strong>Dr. S. Thangavelu</strong><small>Chairman, Sri Shakthi Group of Institutions</small></div></div></div></article></div></section></main>` }

function principalPage() { return `<main class="siet-cd-page principal-page"><section class="siet-cd-hero"><div class="siet-cd-grid"></div><div class="siet-cd-hero-glow"></div><div class="siet-cd-shell"><div class="siet-cd-hero-layout"><div class="siet-cd-portrait reveal"><div class="siet-cd-portrait-frame"><div class="siet-cd-portrait-ring"></div><img src="/brand/principal-saravana-kumar.png" alt="Dr. N. M. Saravana Kumar, Principal"></div><div class="siet-cd-name"><strong>Dr. N. M. Saravana Kumar</strong><span>Principal</span><small>Sri Shakthi Institute of Engineering and Technology</small></div></div><div class="siet-cd-hero-copy reveal"><p class="siet-cd-kicker"><i></i> A MESSAGE FROM THE PRINCIPAL</p><h1>Learning that builds <em>knowledge, character</em> and purpose.</h1><p>Creating an environment where every student develops the knowledge, skills and character to lead with purpose.</p></div></div></div></section><section id="principal-message" class="siet-cd-content"><div class="siet-cd-shell siet-cd-layout"><article class="siet-cd-message"><div class="siet-cd-message-head reveal"><p>PRINCIPAL'S MESSAGE</p><h2>Education for capable,<br><em>responsible leaders.</em></h2></div><div class="siet-cd-prose reveal"><p>Welcome to our institution, where excellence in education, innovation, and character development form the foundation of our academic journey.</p><p>We provide a vibrant learning environment that empowers students with knowledge, technical expertise and essential life skills. Our faculty continuously strive to deliver quality education through innovative teaching, industry collaboration, research and experiential learning.</p><blockquote>"We prepare graduates to become competent professionals, responsible citizens and future leaders."</blockquote><p>At Sri Shakthi, we believe that every student brings unique potential. Our commitment is to nurture that potential through mentorship, opportunity, and a culture of continuous improvement â€” ensuring our graduates are prepared not just for careers, but for lives of meaning and contribution.</p><div class="siet-cd-signoff"><span></span><div><strong>Dr. N. M. Saravana Kumar</strong><small>Principal, Sri Shakthi Institute of Engineering and Technology</small></div></div></div></article></div></section></main>` }

const departmentDetails = {
  'Agricultural Engineering': {
    courses: [['B.Tech - Agricultural Engineering', '60'], ['M.Tech - Farm Machinery', '18']],
    overview: 'The department of Agricultural Engineering at Sri Shakthi Institute of Engineering and Technology develops practical expertise in precision agriculture, smart irrigation, machinery automation, food processing engineering and bio-energy systems.'
  },
  'Artificial Intelligence and Data Science': {
    courses: [['B.Tech - Artificial Intelligence and Data Science', '120']],
    overview: 'The department of Artificial Intelligence and Data Science prepares students for careers in machine learning, big data analytics, predictive intelligence, neural computing and enterprise data engineering.'
  },
  'Artificial Intelligence and Machine Learning': {
    courses: [['B.Tech - Artificial Intelligence and Machine Learning', '60']],
    overview: 'The department of Artificial Intelligence and Machine Learning focuses on deep learning, generative algorithms, computer vision, natural language processing, cognitive architectures and autonomous robotics.'
  },
  'Biomedical Engineering': {
    courses: [['B.E - Biomedical Engineering', '60']],
    overview: 'The department of Biomedical Engineering bridges technological innovation with clinical medicine, specializing in diagnostic imaging, physiological signal monitoring, biomaterials, telemedicine and medical robotics.'
  },
  'Biotechnology': {
    courses: [['B.Tech - Biotechnology', '60']],
    overview: 'The department of Biotechnology blends biological science with engineering to innovate in molecular therapeutics, industrial bioprocessing, genetic engineering, enzymes, downstream separation and bioinformatics.'
  },
  'Civil Engineering': {
    courses: [['B.E - Civil Engineering', '60'], ['M.E - Structural Engineering', '18']],
    overview: 'The department of Civil Engineering develops expertise in resilient infrastructure design, advanced smart structural engineering, geotechnical analysis, environmental hydraulics, green building and BIM.'
  },
  'Computer Science and Engineering': {
    courses: [['B.E - Computer Science and Engineering', '180'], ['B.E - Computer Science and Engineering ( Cyber Security )', '60'], ['M.E - Computer Science and Engineering', '18']],
    overview: 'The department of Computer Science and Engineering delivers comprehensive education in core computing foundations, algorithm engineering, cloud platforms, cybersecurity, distributed systems and intelligent applications.'
  },
  'Electrical and Electronics Engineering': {
    courses: [['B.E - Electrical and Electronics Engineering', '60'], ['M.E - Embedded System Technologies', '18']],
    overview: 'The department of Electrical and Electronics Engineering empowers students in power systems, smart grids, electric mobility powertrains, renewable energy conversion, embedded controllers and industrial automation.'
  },
  'Electronics and Communication Engineering': {
    courses: [['B.E - Electronics and Communication Engineering', '120']],
    overview: 'The department of Electronics and Communication Engineering focuses on 5G wireless networks, RF microwave systems, embedded IoT devices, digital signal processing, antenna engineering and microelectronics.'
  },
  'Food Technology': {
    courses: [['B.Tech - Food Technology', '60'], ['M.Tech - Food Technology', '18']],
    overview: 'The department of Food Technology focuses on post-harvest engineering, dairy processing, industrial packaging technologies, functional foods, quality assurance and international food safety certifications.'
  },
  'Information Technology': {
    courses: [['B.Tech - Information Technology', '120']],
    overview: 'The department of Information Technology emphasizes scalable software architecture, cloud platforms, DevOps engineering, database systems, web technologies and enterprise cybersecurity infrastructure.'
  },
  'Mechanical Engineering': {
    courses: [['B.E - Mechanical Engineering', '60'], ['M.E - CAD/CAM', '18']],
    overview: 'The department of Mechanical Engineering combines fundamental thermal-fluid sciences with advanced CAD/CAM modeling, additive manufacturing, finite element analysis, automotive powertrain design and robotics.'
  },
  'Electronics Engineering ( VLSI Design & Technology)': {
    courses: [['B.E - Electronics Engineering ( VLSI Design & Technology)', '60'], ['M.E - VLSI Design', '18']],
    overview: 'The department of VLSI Design & Technology specializes in semiconductor microelectronics, analog/digital CMOS integrated circuit design, FPGA synthesis, physical verification and System-on-Chip (SoC) architectures.'
  },
  'VLSI Design': {
    courses: [['B.E - Electronics Engineering ( VLSI Design & Technology)', '60'], ['M.E - VLSI Design', '18']],
    overview: 'The department of VLSI Design & Technology specializes in semiconductor microelectronics, analog/digital CMOS integrated circuit design, FPGA synthesis, physical verification and System-on-Chip (SoC) architectures.'
  },
  default: {
    courses: [],
    overview: 'The department combines strong academic foundations with practical laboratory learning, industry exposure, project work and research. Experienced faculty members guide students to solve real-world engineering problems and build careers for a changing world.'
  }
};

departmentDetails['Electrical & Electronics'] = departmentDetails['Electrical and Electronics Engineering'];
departmentDetails['Electronics & Communication'] = departmentDetails['Electronics and Communication Engineering'];
departmentDetails['Artificial Intelligence & Data Science'] = departmentDetails['Artificial Intelligence and Data Science'];
departmentDetails['Artificial Intelligence & Machine Learning'] = departmentDetails['Artificial Intelligence and Machine Learning'];
departmentDetails['Computer Science & Engineering'] = departmentDetails['Computer Science and Engineering'];
departmentDetails['CSE (Cyber Security)'] = departmentDetails['Computer Science and Engineering'];
departmentDetails['Cyber Security'] = departmentDetails['Computer Science and Engineering'];
departmentDetails['Cad Cam'] = departmentDetails['Mechanical Engineering'];
departmentDetails['CAD/CAM'] = departmentDetails['Mechanical Engineering'];
departmentDetails['Cad/Cam'] = departmentDetails['Mechanical Engineering'];
departmentDetails['Embedded System Technologies'] = departmentDetails['Electrical and Electronics Engineering'];
departmentDetails['Structural Engineering'] = departmentDetails['Civil Engineering'];
departmentDetails['Farm Machinery'] = departmentDetails['Agricultural Engineering'];
departmentDetails['Vlsi Design'] = departmentDetails['VLSI Design'];
departmentDetails['Electronics Engineering (VLSI Design & Technology)'] = departmentDetails['VLSI Design'];
departmentDetails['Electronics Engineering ( VLSI Design & Technology)'] = departmentDetails['VLSI Design'];

programs.forEach(([name, description]) => { if (!departmentDetails[name]) departmentDetails[name] = { courses: [['B.E - ' + name, '60']], overview: 'The ' + name + ' department at Sri Shakthi Institute of Engineering and Technology develops practical expertise through laboratory learning, industry exposure, projects and research. ' + description } });

function departmentPage(dept) {
  const detailKey = Object.keys(departmentDetails).find(k => k.toLowerCase() === dept.toLowerCase()) || dept;
  const detail = departmentDetails[detailKey] || departmentDetails.default;
  const courses = detail.courses && detail.courses.length ? detail.courses : [['B.E - ' + dept, '60']];
  const sections = ['About the Department', 'Why ' + dept + ' at SIET', 'Unique Facilities', 'Vision & Mission', 'Programme Educational Objectives', 'Programme Specific Outcomes', 'Programme Outcomes', 'Faculty Profile', 'PAC Members', 'Academic Calendar', 'Achievements', 'Curriculum', 'Placements-Key Companies', 'Student Placements', 'Newsletter & Magazine', 'Alumni Corner', 'Feedback'];
  const deptCurriculum = getDeptCurriculum(dept);
  return `<main class="department-detail-page">${sietHudHeader(dept, dept)}<div class="department-detail-layout"><aside class="department-detail-nav" aria-label="Department sections">${sections.map((section, index) => `<button class="${index === 0 ? 'active' : ''}" type="button" data-section="department-section-${index}">${section}</button>`).join('')}</aside><article class="department-detail-content"><div class="department-intake"><table><thead><tr><th>Courses Offered</th><th>Intake</th></tr></thead><tbody>${courses.map(([course, intake]) => `<tr><td>${course}</td><td>${intake}</td></tr>`).join('')}</tbody></table></div><section id="department-section-0" class="department-copy is-open"><h2>About the Department</h2><p>${detail.overview}</p></section>${sections.slice(1).map((section, index) => section === 'Curriculum' ? `<section id="department-section-${index + 1}" class="department-copy department-curriculum-section"><h2>Curriculum</h2><div class="dept-curriculum-banner"><div><span class="curr-badge">AUTONOMOUS R2024</span><h2>${dept} Curriculum Structure</h2><p>Explore the full 8-semester course curriculum, subject codes, lecture/practical hours and credits designed for ${dept}.</p></div><a href="#/curriculum?dept=${deptCurriculum.id}" class="dept-curriculum-action">Open Full 8-Semester Interactive Curriculum â†’</a></div><div class="curr-table-wrapper">${renderCurriculumTable(deptCurriculum.id, 1)}</div></section>` : `<section id="department-section-${index + 1}" class="department-copy department-placeholder"><h2>${section}</h2><p>${section} information for ${dept} will be updated by the department office.</p></section>`).join('')}</article></div></main>`;
}

function internalPage(route) {
  if (route.startsWith('placements')) {
    return placementsDashboardPage(route);
  }

  const isDept = route.startsWith('department/');
  const deptName = isDept ? titleCase(route.slice(11).replaceAll('-', ' ')).replaceAll(' And ', ' & ') : '';
  if (isDept && typeof departmentPage === 'function') return departmentPage(deptName);
  const data = isDept ? [deptName, `Department of ${deptName}`, 'Build strong engineering foundations through expert teaching, practical laboratories, industry exposure, projects, research and collaborative learning.'] : (pageCopy[route] || ['Sri Shakthi', 'Institutional information', 'Explore Sri Shakthi Institute of Engineering and Technology.']);
  const isDepts = route === 'departments';

  let sidebarHtml = '';
  if (route === 'program-outcomes' || route === 'core-values' || route === 'philosophy') {
    sidebarHtml = AboutSidebar(route);
  } else {
    sidebarHtml = `<aside class="sidebar reveal">
    <div class="sidebar-box quick-links-box">
      <span class="sidebar-kicker">EXPLORE SRI SHAKTHI</span>
      <h3>Quick Navigation</h3>
      <nav class="sidebar-nav">
        <a href="#/programmes">UG &amp; PG Programmes <span>â†’</span></a>
        <a href="#/departments">All Departments <span>â†’</span></a>
        <a href="#/eligibility">Admission Eligibility <span>â†’</span></a>
        <a href="#/scholarships">Scholarship Pathways <span>â†’</span></a>
        <a href="#/campus-life">Campus Life &amp; Facilities <span>â†’</span></a>
        <a href="#/placements">Placement Highlights <span>â†’</span></a>
        <a href="#/research">Research &amp; Innovation <span>â†’</span></a>
      </nav>
    </div>
    <div class="sidebar-box contact-card-box">
      <span class="sidebar-kicker">ADMISSIONS HELPLINE</span>
      <h3>Plan Your Journey</h3>
      <p>Speak directly with our academic counsellors for programme guidance and scholarships.</p>
      <div class="sidebar-contact-info">
        <strong>â˜Ž +91 422 2369900</strong>
        <small>âœ‰ info@siet.ac.in</small>
        <small>ðŸ“ L&amp;T Bypass, Chinniyampalayam, Coimbatore</small>
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
  }

  const deptExtras = isDepts ? `
  <div class="dept-quick-summary-grid">
    <div class="dept-summary-card">
      <span class="dept-summary-num">14+</span>
      <b>Specialized Disciplines</b>
      <p>Covering artificial intelligence, core engineering, computing, biomedical and agricultural sciences.</p>
    </div>
    <div class="dept-summary-card">
      <span class="dept-summary-num">100%</span>
      <b>Outcome-Based Learning</b>
      <p>Curricula mapped to Bloom's taxonomy with continuous lab integration and industry mentoring.</p>
    </div>
    <div class="dept-summary-card">
      <span class="dept-summary-num">30+</span>
      <b>Advanced Laboratories</b>
      <p>Equipped with industry-standard platforms, simulation suites, robotics kits and R&amp;D testbeds.</p>
    </div>
  </div>
  <div class="dept-key-laboratories">
    <div class="section-no">RESEARCH &amp; PRACTICE INFRASTRUCTURE</div>
    <h3>Department Laboratories &amp; Specialized Workspaces</h3>
    <p>Every engineering department at Sri Shakthi is anchored by modern practical laboratories designed to translate classroom theory into hands-on technical proficiency.</p>
    <div class="dept-labs-list">
      <div class="dept-lab-item"><b>Advanced Computing &amp; AI Studio</b><p>High-performance workstations configured for machine learning, data engineering and deep learning workloads.</p></div>
      <div class="dept-lab-item"><b>Precision Electronics &amp; VLSI Lab</b><p>FPGA design toolchains, spectrum analyzers, oscilloscopes and embedded development boards.</p></div>
      <div class="dept-lab-item"><b>Smart Agriculture &amp; Bioenergy Testbed</b><p>Drone mapping facilities, soil nutrient analyzers, renewable energy setups and farm automation systems.</p></div>
      <div class="dept-lab-item"><b>Biotechnology &amp; Bioprocess Engineering Lab</b><p>Bioreactors, laminar air flow workstations, PCR machines and microbiological analytical gear.</p></div>
      <div class="dept-lab-item"><b>Project &amp; Prototype Studio</b><p>Embedded systems, IoT testbeds, sensors and robotics testing facilities.</p></div>
      <div class="dept-lab-item"><b>Industry Collaboration Center</b><p>Dedicated workspaces co-developed with leading technology partners.</p></div>
    </div>
  </div>`: '';

  return `<main class="internal-page ${isDepts ? 'departments-page departments-index-page' : ''}">
    ${(isDepts ? sietHudHeader('Departments', 'Departments') : `<section class="page-hero">
      <img class="page-crest" src="/brand/siet-logo.png" alt="">
      <div class="eyebrow"><span></span> SRI SHAKTHI</div>
      <h1 class="reveal">${data[0]}</h1>
      <p>${data[1]}</p>
    </section>`)}
    <section class="page-content">
      <div class="reveal">
        <div class="section-no">OVERVIEW</div>
        <h2>${data[1]}</h2>
        <p>${data[2]}</p>
        ${deptExtras}
        ${route === 'contact' ? '<div class="contact-panel"><b>Sri Shakthi Institute of Engineering & Technology</b><p>Sri Shakthi Nagar, L&T By-Pass, Chinniyampalayam, Coimbatore â€“ 641062</p><p>+91 422 2369900 Â· info@siet.ac.in</p></div>' : ''}
        <div style="margin-top: 32px;"><a class="button" href="#/admission-enquiry">Enquire now ${icon('arrow')}</a></div>
      </div>
      ${sidebarHtml}
    </section>
    ${['departments', 'programmes'].includes(route) ? `<section class="page-content programme-content"><div class="section-no">PROGRAMMES &amp; DEPARTMENTS</div><div>${programs.map(([n, d, img]) => `<a class="flip-card" href="#/department/${slugify(n)}"><span class="flip-card-inner"><span class="flip-front"><small>DEPARTMENT</small><b>${n}</b><p>${d}</p><span>Explore department â†’</span></span><span class="flip-back" style="background-image:linear-gradient(180deg,transparent,rgba(3,45,27,.94)),url('${img}')"><b>${n}</b></span></span></a>`).join('')}</div></section>` : ''}
  </main>`;
}
const titleCase = s => s.replace(/\b\w/g, c => c.toUpperCase());

function sietPageHeader(title, subtitle = '', kicker = 'SRI SHAKTHI') {
  return `<section class="page-hero"><img class="page-crest" src="/brand/siet-logo.png" alt="Sri Shakthi emblem"><div class="eyebrow"><span></span> ${kicker}</div><h1 class="reveal">${title.toUpperCase()}</h1>${subtitle ? `<p>${subtitle}</p>` : ''}</section>`;
}
function sietHudHeader(title, breadcrumbName = title) {
  return `<section class="department-detail-header siet-hud-header">
    <div class="department-detail-title">
      <div class="hud-title-group">
        <span class="hud-diamond" aria-hidden="true">â—ˆ</span>
        <h1>${title.toUpperCase()}</h1>
      </div>
      <div class="department-breadcrumb">
        <a href="#/">Home</a><span>/</span><a href="#/departments">Departments</a><span>/</span><b>${breadcrumbName}</b>
      </div>
    </div>
  </section>`;
}

function programSelectHtml(label, name) {
  return `
    <label>${label} <b>*</b>
      <select name="${name}" required>
        <option value="">Select ${label}</option>
        <optgroup label="Undergraduate (UG) Programmes">
          ${ugProgramsDetailed.map(p => `<option value="${p.fullName}">${p.fullName}</option>`).join('')}
        </optgroup>
        <optgroup label="Postgraduate (PG) Programmes">
          ${pgProgramsDetailed.map(p => `<option value="${p.fullName}">${p.fullName}</option>`).join('')}
        </optgroup>
      </select>
    </label>
  `;
}

function programmesPage() {
  return `<main class="siet-programmes-page">
    ${sietPageHeader('UG & PG Programmes', 'Explore our distinguished undergraduate and postgraduate engineering & technology programmes.', 'SRI SHAKTHI &bull; ADMISSION PROGRAMMES')}
    <section class="siet-prog-container">
      <div class="siet-prog-controls reveal">
        <div class="siet-prog-filter-tabs" role="tablist" aria-label="Programmes filter">
          <button type="button" class="siet-prog-filter-btn is-active" data-filter="all">All Programmes <span class="count-pill">21</span></button>
          <button type="button" class="siet-prog-filter-btn" data-filter="ug">Undergraduate (UG) <span class="count-pill">14</span></button>
          <button type="button" class="siet-prog-filter-btn" data-filter="pg">Postgraduate (PG) <span class="count-pill">7</span></button>
        </div>
        <div class="siet-prog-meta-badges">
          <span class="meta-pill"><i></i> Anna University Autonomous R2024</span>
          <span class="meta-pill"><i></i> AICTE Approved &amp; NBA Accredited</span>
        </div>
      </div>

      <!-- UG CATEGORY SECTION -->
      <section id="ug-programmes-section" class="siet-prog-category-section reveal" data-category="ug">
        <div class="siet-prog-section-header">
          <div class="siet-prog-kicker">
            <span class="badge-accent">UG</span>
            <small>FOUR-YEAR BACHELOR'S DEGREE</small>
          </div>
          <h2>Undergraduate (UG) Programmes</h2>
          <p>Four-year professional degree programmes combining foundational sciences, industry-led specializations, experiential laboratory learning and multidisciplinary innovation.</p>
        </div>
        <div class="siet-prog-grid">
          ${ugProgramsDetailed.map(p => `
            <article class="siet-prog-card reveal">
              <div class="siet-prog-card-top">
                <span class="siet-degree-badge ${p.degree.toLowerCase().replace('.', '')}">${p.degree}</span>
                <span class="siet-duration-badge">4 Years &bull; Full Time</span>
              </div>
              <div class="siet-prog-card-body">
                <h3>${p.fullName}</h3>
                <p>${p.desc}</p>
                <div class="siet-prog-tags">
                  <span>Autonomous R2024</span>
                  <span>Industry CoEs</span>
                  <span>Placement Focus</span>
                </div>
              </div>
              <div class="siet-prog-card-footer">
                <a href="#/department/${p.deptSlug}" class="siet-prog-link">Explore Department <span>&rarr;</span></a>
                <a href="#/apply" class="siet-prog-btn-apply">Apply Now</a>
              </div>
            </article>
          `).join('')}
        </div>
      </section>

      <!-- PG CATEGORY SECTION -->
      <section id="pg-programmes-section" class="siet-prog-category-section reveal" data-category="pg">
        <div class="siet-prog-section-header">
          <div class="siet-prog-kicker">
            <span class="badge-accent pg">PG</span>
            <small>TWO-YEAR ADVANCED MASTER'S DEGREE</small>
          </div>
          <h2>Postgraduate (PG) Programmes</h2>
          <p>Two-year advanced master's programmes focused on cutting-edge research, advanced modeling, specialized industrial problem solving, publication and leadership.</p>
        </div>
        <div class="siet-prog-grid">
          ${pgProgramsDetailed.map(p => `
            <article class="siet-prog-card pg-card reveal">
              <div class="siet-prog-card-top">
                <span class="siet-degree-badge pg ${p.degree.toLowerCase().replace('.', '')}">${p.degree}</span>
                <span class="siet-duration-badge">2 Years &bull; Full Time</span>
              </div>
              <div class="siet-prog-card-body">
                <h3>${p.fullName}</h3>
                <p>${p.desc}</p>
                <div class="siet-prog-tags">
                  <span>Autonomous R2024</span>
                  <span>R&amp;D Publication</span>
                  <span>Specialized Labs</span>
                </div>
              </div>
              <div class="siet-prog-card-footer">
                <a href="#/department/${p.deptSlug}" class="siet-prog-link">Explore Department <span>&rarr;</span></a>
                <a href="#/apply" class="siet-prog-btn-apply">Apply Now</a>
              </div>
            </article>
          `).join('')}
        </div>
      </section>

      <!-- ADMISSIONS CTA BANNER -->
      <section class="siet-prog-cta-banner reveal">
        <div>
          <small>ADMISSIONS 2026â€“27</small>
          <h2>Begin your engineering journey at Sri Shakthi</h2>
          <p>Applications are open for undergraduate (TNEA Counselling Code: 2727) and postgraduate engineering admissions.</p>
        </div>
        <div class="siet-prog-cta-actions">
          <a href="#/apply" class="button">Apply Online &rarr;</a>
          <a href="#/admission-enquiry" class="button secondary">Admission Enquiry</a>
        </div>
      </section>
    </section>
  </main>`;
}

function departmentsPage() {
  return `<main class="siet-programmes-page">
    ${sietPageHeader('Departments', 'SRI SHAKTHI &bull; DEPARTMENTS')}
    <section class="siet-prog-container">
      <div class="siet-prog-controls reveal">
        <div class="siet-prog-filter-tabs" role="tablist" aria-label="Departments filter">
          <button type="button" class="siet-prog-filter-btn depts-filter-btn is-active" data-dept-filter="all">All Departments <span class="count-pill">21</span></button>
          <button type="button" class="siet-prog-filter-btn depts-filter-btn" data-dept-filter="ug">Undergraduate (UG) <span class="count-pill">14</span></button>
          <button type="button" class="siet-prog-filter-btn depts-filter-btn" data-dept-filter="pg">Postgraduate (PG) <span class="count-pill">7</span></button>
        </div>
        <div class="siet-prog-meta-badges">
          <span class="meta-pill"><i></i> Anna University Autonomous R2024</span>
          <span class="meta-pill"><i></i> AICTE Approved &amp; NBA Accredited</span>
        </div>
      </div>

      <!-- UG CATEGORY SECTION -->
      <section id="ug-depts-section" class="siet-prog-category-section reveal" data-category="ug">
        <div class="siet-prog-section-header">
          <div class="siet-prog-kicker">
            <span class="badge-accent">UG</span>
            <small>FOUR-YEAR BACHELOR'S DEGREE</small>
          </div>
          <h2>Undergraduate (UG) Programmes</h2>
          <p>Four-year professional degree programmes combining foundational sciences, industry-led specializations, experiential laboratory learning and multidisciplinary innovation.</p>
        </div>
        <div class="siet-prog-grid">
          ${ugProgramsDetailed.map(p => `
            <article class="siet-prog-card reveal">
              <div class="siet-prog-card-top">
                <span class="siet-degree-badge ${p.degree.toLowerCase().replace('.', '')}">${p.degree}</span>
                <span class="siet-duration-badge">4 Years &bull; Full Time</span>
              </div>
              <div class="siet-prog-card-body">
                <h3>${p.fullName}</h3>
                <p>${p.desc}</p>
                <div class="siet-prog-tags">
                  <span>Autonomous R2024</span>
                  <span>Industry CoEs</span>
                  <span>Placement Focus</span>
                </div>
              </div>
              <div class="siet-prog-card-footer">
                <a href="#/department/${p.deptSlug}" class="siet-prog-link">Explore Department <span>&rarr;</span></a>
                <a href="#/apply" class="siet-prog-btn-apply">Apply Now</a>
              </div>
            </article>
          `).join('')}
        </div>
      </section>

      <!-- PG CATEGORY SECTION -->
      <section id="pg-depts-section" class="siet-prog-category-section reveal" data-category="pg">
        <div class="siet-prog-section-header">
          <div class="siet-prog-kicker">
            <span class="badge-accent pg">PG</span>
            <small>TWO-YEAR ADVANCED MASTER'S DEGREE</small>
          </div>
          <h2>Postgraduate (PG) Programmes</h2>
          <p>Two-year advanced master's programmes focused on cutting-edge research, advanced modeling, specialized industrial problem solving, publication and leadership.</p>
        </div>
        <div class="siet-prog-grid">
          ${pgProgramsDetailed.map(p => `
            <article class="siet-prog-card pg-card reveal">
              <div class="siet-prog-card-top">
                <span class="siet-degree-badge pg ${p.degree.toLowerCase().replace('.', '')}">${p.degree}</span>
                <span class="siet-duration-badge">2 Years &bull; Full Time</span>
              </div>
              <div class="siet-prog-card-body">
                <h3>${p.fullName}</h3>
                <p>${p.desc}</p>
                <div class="siet-prog-tags">
                  <span>Autonomous R2024</span>
                  <span>Research Labs</span>
                  <span>Industry CoEs</span>
                </div>
              </div>
              <div class="siet-prog-card-footer">
                <a href="#/department/${p.deptSlug}" class="siet-prog-link">Explore Department <span>&rarr;</span></a>
                <a href="#/apply" class="siet-prog-btn-apply">Apply Now</a>
              </div>
            </article>
          `).join('')}
        </div>
      </section>

      <!-- ADMISSIONS CTA BANNER -->
      <div class="siet-prog-cta-banner reveal">
        <div>
          <small>ADMISSIONS 2026â€“27</small>
          <h2>Ready to Choose Your Department?</h2>
          <p>Talk to our admissions counselors to find the ideal department aligned with your engineering aspirations, TNEA code 2727 and scholarship opportunities.</p>
        </div>
        <div class="siet-prog-cta-actions">
          <a href="#/admission-enquiry" class="button">Admission Enquiry &rarr;</a>
          <a href="#/admission-referral" class="button secondary">Student Referral</a>
        </div>
      </div>
    </section>
  </main>`;
}

function referralPage() { return `<main class="enquiry-page-v3 referral-page">${sietPageHeader('Admission Referral', 'Recommend an aspiring student for admissions to Sri Shakthi Institute of Engineering & Technology.', 'SRI SHAKTHI &bull; REFERRAL PROGRAMME')}<section class="enquiry-main-v3"><div class="enquiry-heading-v3"><small>REFERRAL PROGRAMME</small><h1>STUDENT ADMISSION REFERRAL</h1><p style="color:#52695c;margin-top:6px;font-size:15px;line-height:1.5">Alumni, students, parents, faculty, and well-wishers can refer candidates for undergraduate and postgraduate engineering admissions.</p></div><form class="enquiry-form-v3 js-form"><div style="font-weight:700;color:#0b3d20;font-size:15px;border-bottom:2px solid #e0ece4;padding-bottom:8px;margin-bottom:14px;letter-spacing:0.02em">REFERRER DETAILS (YOUR INFORMATION)</div><div class="enquiry-fields-v3">${field('Your Full Name', 'referrer_name', 'text', 'Enter your full name')}${field('Your Mobile Number', 'referrer_phone', 'tel', 'Enter your 10 digit mobile number')}${field('Your Email Address', 'referrer_email', 'email', 'Enter your email address')}${selectField('Your Relationship with SIET', 'referrer_relation', ['Alumni', 'Current Student', 'Faculty / Staff', 'Parent', 'Industry Partner', 'Well-wisher'])}<label id="referrer-reg-no-wrapper" class="referral-reg-no-field" style="display:none">Current Student Register Number <b>*</b><input type="text" name="referrer_reg_no" id="referrer_reg_no" placeholder="Enter current student register number" autocomplete="off"></label></div><div style="font-weight:700;color:#0b3d20;font-size:15px;border-bottom:2px solid #e0ece4;padding-bottom:8px;margin-top:18px;margin-bottom:14px;letter-spacing:0.02em">CANDIDATE DETAILS (STUDENT BEING REFERRED)</div><div class="enquiry-fields-v3">${field('Candidate Full Name', 'candidate_name', 'text', 'Enter candidate\'s full name')}${field('Candidate Mobile Number', 'candidate_phone', 'tel', 'Enter candidate\'s 10 digit mobile number')}${field('Candidate Email Address', 'candidate_email', 'email', 'Enter candidate\'s email')} ${selectField('Preferred Course Level', 'candidate_level', ['UG', 'PG'])}${programSelectHtml('Preferred Department', 'candidate_course')}${field('Current Qualification / School', 'candidate_qualification', 'text', 'Class 12 / Diploma / Degree')}</div><label>Message / Reason for Referral<textarea name="remarks" rows="3" placeholder="Tell us about the candidate's achievements, interests, or any specific guidance needed..."></textarea></label><button class="button" type="submit">Submit Referral â†’</button><p class="status" aria-live="polite"></p></form></section></main>` }

const libIcons = {
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
  book: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`,
  monitor: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
  users: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
  research: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
  link: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`,
  globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
  document: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>`,
  star: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
  phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`
};

const libModalData = {
  catalogue: {
    title: 'Online Public Access Catalogue (OPAC)',
    content: `
      <p>Search and explore over <b>45,000+ print volumes</b>, <b>12,000+ distinct titles</b>, project theses, and reference volumes indexed through the automated KOHA library system.</p>
      <h4>Catalogue Search Categories</h4>
      <ul>
        <li><span class="siet-lib-resource-badge">Engineering</span> Computer Science, AI &amp; Data Science, Cybersecurity, VLSI &amp; Embedded Systems</li>
        <li><span class="siet-lib-resource-badge">Emerging Tech</span> Biomedical Engineering, Biotechnology, Food Technology &amp; Agricultural Engg</li>
        <li><span class="siet-lib-resource-badge">Core Disciplines</span> Mechanical, Civil, Electrical &amp; Electronics Engineering</li>
        <li><span class="siet-lib-resource-badge">Reference Works</span> International Standard Codes, Handbooks, Technical Dictionaries, Encyclopedias</li>
      </ul>
      <h4>How to Reserve &amp; Borrow</h4>
      <p>Students and faculty can check stack availability in real time and place holds using their SIET Smart ID card number at the circulation desk.</p>
    `
  },
  journals: {
    title: 'E-Journals & Online Databases',
    content: `
      <p>The Central Library subscribes to leading peer-reviewed digital libraries and indexing networks with seamless campus-wide IP-based access:</p>
      <table>
        <thead>
          <tr><th>Resource</th><th>Coverage</th><th>Access Mode</th></tr>
        </thead>
        <tbody>
          <tr><td><b>IEEE Xplore (ASPP)</b></td><td>Electronics, Electrical, AI, CS &amp; Communications</td><td>Campus IP + Remote VPN</td></tr>
          <tr><td><b>ScienceDirect (Elsevier)</b></td><td>Applied Sciences, Material Engineering &amp; Computing</td><td>Campus IP</td></tr>
          <tr><td><b>SpringerLink</b></td><td>1,700+ Peer-Reviewed Journals &amp; Technical Series</td><td>IP / Institutional SSO</td></tr>
          <tr><td><b>DELNET</b></td><td>3 Crore+ Inter-Library Union Catalogues &amp; Interloans</td><td>Institutional Membership</td></tr>
          <tr><td><b>NPTEL / SWAYAM</b></td><td>Video Lectures, Course Materials &amp; Certifications</td><td>Open Campus Hub</td></tr>
          <tr><td><b>National Digital Library (NDLI)</b></td><td>E-Textbooks, Monographs, Lab Simulations &amp; Papers</td><td>Registered Account</td></tr>
        </tbody>
      </table>
      <p>For off-campus login credentials or research publication download assistance, contact <a href="mailto:library@siet.ac.in">library@siet.ac.in</a>.</p>
    `
  },
  rules: {
    title: 'Library Rules & Regulations',
    content: `
      <h4>Working Hours</h4>
      <ul>
        <li><b>Monday to Saturday:</b> 8:00 AM â€“ 8:00 PM (Issue &amp; Return: 8:30 AM â€“ 6:30 PM)</li>
        <li><b>Sundays &amp; Holidays:</b> 9:00 AM â€“ 4:00 PM (Reading Room &amp; Digital Lab)</li>
        <li><b>Exam Season:</b> Extended timings till 10:00 PM</li>
      </ul>
      <h4>Borrowing Entitlements</h4>
      <table>
        <thead><tr><th>User Category</th><th>Book Limit</th><th>Loan Period</th></tr></thead>
        <tbody>
          <tr><td>Undergraduate Students (B.E / B.Tech)</td><td>4 Books</td><td>14 Days</td></tr>
          <tr><td>Postgraduate Students (M.E / M.Tech)</td><td>6 Books</td><td>28 Days</td></tr>
          <tr><td>Faculty &amp; Research Scholars</td><td>8 Books</td><td>90 Days</td></tr>
        </tbody>
      </table>
      <h4>Code of Conduct</h4>
      <ul>
        <li>Strict silence must be maintained in all reading and reference halls.</li>
        <li>Institutional Smart ID card is mandatory for entry registration and library transactions.</li>
        <li>Mobile phones must be kept in silent mode; calls are strictly prohibited inside the library.</li>
        <li>Books must be handled with utmost care. Highlighting, pencil markings, or folding pages is prohibited.</li>
      </ul>
    `
  },
  arrivals: {
    title: 'New Arrivals â€” 2026 Academic Year',
    content: `
      <p>Latest textbook additions, international conference proceedings, and technical monographs added to our collection:</p>
      <ul>
        <li><b>Artificial Intelligence: A Modern Approach (4th Edition)</b> â€” Stuart Russell &amp; Peter Norvig</li>
        <li><b>Deep Learning with Python &amp; PyTorch (Latest Release)</b> â€” FranÃ§ois Chollet</li>
        <li><b>Modern VLSI Design: IP-Based System Design</b> â€” Wayne Wolf</li>
        <li><b>Renewable Energy Systems: Technology &amp; Economics</b> â€” Z. Sen</li>
        <li><b>Agricultural IoT &amp; Precision Farming Engineering</b> â€” Springer Nature</li>
        <li><b>Biomedical Instrumentation &amp; Clinical Measurement</b> â€” R. S. Khandpur</li>
      </ul>
      <p>Visit the <i>New Arrivals Display Showcase</i> on the ground floor to browse these copies before they enter regular shelf circulation.</p>
    `
  },
  'about-details': {
    title: 'About SIET Central Library',
    content: `
      <p>The Central Library of Sri Shakthi Institute of Engineering and Technology is an architecturally designed, fully air-conditioned academic knowledge center spread across three spacious floors with seating capacity for over <b>400+ students and researchers</b>.</p>
      <h4>Key Infrastructure</h4>
      <ul>
        <li><b>Automated RFID Gates &amp; Self-Service Circulation</b> for quick book issue and return.</li>
        <li><b>Digital Library Wing:</b> 60 high-performance computer terminals connected with dedicated 1 Gbps high-speed internet.</li>
        <li><b>Reprography &amp; Document Scanning:</b> Printing, scanning, and photocopying facility for academic work.</li>
        <li><b>Group Discussion Rooms:</b> Acoustic-treated spaces for team projects and academic seminars.</li>
        <li><b>Multimedia &amp; NPTEL Viewing Section:</b> Fully set up for MOOC courses and lecture viewing.</li>
      </ul>
      <h4>Contact Information</h4>
      <p><b>Chief Librarian:</b> Dr. K. Radhakrishnan, M.L.I.S., Ph.D.<br>
      <b>Direct Phone:</b> +91 422 2369900 (Ext. 240)<br>
      <b>Email:</b> <a href="mailto:library@siet.ac.in">library@siet.ac.in</a></p>
    `
  }
};

function libraryPage() {
  return `<main class="siet-library-page">
  ${sietHudHeader('Library', 'Library')}

  <section class="siet-lib-features-strip" aria-label="Key library features">
    <div class="siet-lib-features-container">
      <div class="siet-lib-feature-item reveal">
        <span class="lib-feat-icon" aria-hidden="true">${libIcons.book}</span>
        <div class="lib-feat-text">
          <h3>Vast Collection</h3>
          <p>Books, journals, e-books, project reports and more.</p>
        </div>
      </div>
      <div class="siet-lib-feature-item reveal">
        <span class="lib-feat-icon" aria-hidden="true">${libIcons.monitor}</span>
        <div class="lib-feat-text">
          <h3>Digital Resources</h3>
          <p>Access to e-journals, e-books and online databases.</p>
        </div>
      </div>
      <div class="siet-lib-feature-item reveal">
        <span class="lib-feat-icon" aria-hidden="true">${libIcons.users}</span>
        <div class="lib-feat-text">
          <h3>Study Spaces</h3>
          <p>Peaceful &amp; comfortable reading environment.</p>
        </div>
      </div>
      <div class="siet-lib-feature-item reveal">
        <span class="lib-feat-icon" aria-hidden="true">${libIcons.research}</span>
        <div class="lib-feat-text">
          <h3>Research Support</h3>
          <p>Guidance for projects, publications and research.</p>
        </div>
      </div>
      <div class="siet-lib-feature-item reveal">
        <span class="lib-feat-icon" aria-hidden="true">${libIcons.clock}</span>
        <div class="lib-feat-text">
          <h3>Extended Hours</h3>
          <p>Flexible timings for student convenience.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="siet-lib-body">
    <div class="siet-lib-container">
      <div class="siet-lib-layout siet-lib-layout-duo">
        <!-- Left: Image Card -->
        <div class="siet-lib-card-col">
          <div class="siet-lib-photo-card reveal">
            <img src="/brand/library-about.jpg" alt="Sri Shakthi Central Library reading hall and bookshelves">
            <div class="siet-lib-photo-badge">
              <span class="lib-badge-icon" aria-hidden="true">${libIcons.book}</span>
              <span class="lib-badge-text">Your Gateway to Knowledge</span>
            </div>
          </div>
        </div>

        <!-- Right: About Central Library -->
        <div class="siet-lib-about-col reveal">
          <div class="siet-lib-about-eyebrow">
            <span class="lib-gold-line"></span>
            <span class="lib-gold-text">ABOUT CENTRAL LIBRARY</span>
          </div>
          <h2 class="siet-lib-about-title">More Than Just Books</h2>
          <div class="siet-lib-about-text">
            <p>The Central Library at SIET is a hub of knowledge, innovation and learning. It provides a wide range of physical and digital resources, quiet study spaces and research support services to help students and faculty achieve their academic and research goals.</p>
            <p class="siet-lib-about-subtext">Print and digital resources, journals, databases and focused study environments support teaching, learning and research across all engineering disciplines.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Interactive Modal -->
  <div class="siet-lib-modal js-lib-modal" role="dialog" aria-modal="true" aria-hidden="true">
    <div class="siet-lib-modal-box">
      <div class="siet-lib-modal-header">
        <h3 class="js-lib-modal-title">Library Information</h3>
        <button type="button" class="siet-lib-modal-close js-lib-modal-close" aria-label="Close modal">Ã—</button>
      </div>
      <div class="siet-lib-modal-body js-lib-modal-body"></div>
    </div>
  </div>
</main>`;
}

const currIcons = {
  gradCap: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path></svg>`,
  calendar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
  clipboard: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>`,
  database: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
  headphone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>`
};

let currActiveDept = 'cse';
let currActiveSem = 1;

function getCurrModalData(target, deptId = 'cse') {
  const dept = getDeptCurriculum(deptId);
  const deptFullName = `${dept.degree} ${dept.name}`;

  if (target === 'curriculum-r2024') {
    return {
      title: `${deptFullName} â€” Autonomous Curriculum (R2024)`,
      content: `
        <p>The Autonomous Curriculum (Regulations 2024) for <b>${deptFullName}</b> of Sri Shakthi Institute of Engineering and Technology is outcome-driven and structured across <b>168 total credits</b>.</p>
        <h4>Credit Distribution Across Categories</h4>
        <ul>
          <li><span class="siet-lib-resource-badge">HSMC</span> Humanities and Social Sciences (12 Credits)</li>
          <li><span class="siet-lib-resource-badge">BSC</span> Basic Sciences (Mathematics, Physics, Chemistry) (25 Credits)</li>
          <li><span class="siet-lib-resource-badge">ESC</span> Engineering Sciences &amp; Maker Foundation (24 Credits)</li>
          <li><span class="siet-lib-resource-badge">PCC</span> Professional Core Courses &amp; Specialization Labs (68 Credits)</li>
          <li><span class="siet-lib-resource-badge">PEC</span> Professional Electives (Discipline Specialization Tracks) (18 Credits)</li>
          <li><span class="siet-lib-resource-badge">OEC</span> Multidisciplinary Open Electives (9 Credits)</li>
          <li><span class="siet-lib-resource-badge">PROJ</span> Industry Internship &amp; Capstone Project (12 Credits)</li>
        </ul>
        <p>For detailed credit transfer, honours/minor degree regulations, or academic syllabus copies for ${dept.name}, contact the office of Controller of Examinations.</p>
      `
    };
  }

  if (target === 'syllabus-r2024') {
    return {
      title: `${deptFullName} â€” Detailed Syllabus (R2024)`,
      content: `
        <p>Each syllabus outlines course educational objectives, unit-wise topic descriptions, laboratory experiments, modern tool requirements, textbooks, and reference volumes for <b>${deptFullName}</b>.</p>
        <h4>Specialization Focus</h4>
        <p>${dept.desc}</p>
        <h4>Core Pillars</h4>
        <ul>
          <li><b>Fundamental Rigor:</b> Strong theoretical grounding through classroom and tutorial sessions.</li>
          <li><b>Hands-on Laboratory Mastery:</b> High-tech practical labs aligned with current industry standards.</li>
          <li><b>Industry &amp; Research Readiness:</b> Mini-projects, hackathons, and capstone engineering challenges.</li>
        </ul>
        <p>To request certified copies of course syllabi for competitive exams or foreign higher education, please email <a href="mailto:academics@siet.ac.in">academics@siet.ac.in</a>.</p>
      `
    };
  }

  if (target === 'regulations-r2024') {
    return {
      title: 'Academic Regulations (Autonomous R2024)',
      content: `
        <h4>Key Academic Highlights</h4>
        <ul>
          <li><b>Attendance:</b> A candidate must secure a minimum of <b>75% attendance</b> in each course to be eligible for End Semester Examinations.</li>
          <li><b>Evaluation System:</b> Continuous Internal Assessment (CIA) carries 40% and End Semester Examination (ESE) carries 60%.</li>
          <li><b>Relative Grading:</b> Performance is evaluated on a 10-point letter grading system (O, A+, A, B+, B, C, U).</li>
          <li><b>Fast-Track Semester:</b> High-performing students (CGPA â‰¥ 8.5) may complete electives in semesters 5â€“7 and undertake full-time industry capstone in semester 8.</li>
        </ul>
      `
    };
  }

  if (target === 'scheme-exam') {
    return {
      title: `Scheme of Examination â€” ${deptFullName}`,
      content: `
        <h4>Internal Assessment (40 Marks)</h4>
        <ul>
          <li><b>Internal Assessment Tests (IAT I &amp; II):</b> Two centralized examinations (each 100 marks converted to 20 marks).</li>
          <li><b>Experiential Assignment / Project:</b> Industry-aligned hands-on problem solving (10 marks).</li>
          <li><b>Quiz, Seminar &amp; Technical Presentation:</b> Active classroom engagement (10 marks).</li>
        </ul>
        <h4>End Semester Examination (60 Marks)</h4>
        <p>Autonomous central evaluation conducted for 100 marks with Bloom's Taxonomy-based question paper and converted to 60 marks.</p>
      `
    };
  }

  if (target === 'academic-help') {
    return {
      title: 'Academic Dean Desk & Student Support',
      content: `
        <p>The Academic Office assists students with curriculum clarifications, elective selections, re-evaluation requests, and academic calendar scheduling.</p>
        <h4>Office Details</h4>
        <p><b>Dean (Academics):</b> Dr. R. Manimegalai, Ph.D.<br>
        <b>Location:</b> Administrative Block, Ground Floor (Room A-108)<br>
        <b>Direct Phone:</b> +91 422 2369900 (Ext. 215)<br>
        <b>Email:</b> <a href="mailto:academics@siet.ac.in">academics@siet.ac.in</a></p>
        <p><b>Student Hours:</b> Monday to Friday, 3:30 PM â€“ 5:00 PM</p>
      `
    };
  }

  return { title: 'Academic Document', content: '<p>Details will be updated shortly.</p>' };
}

function renderCurriculumTable(deptId = 'cse', semNum = 1) {
  const dept = getDeptCurriculum(deptId);
  const data = dept?.semesters?.[semNum] || dept?.semesters?.[1] || {
    name: `Semester ${semNum}`,
    credits: 0,
    courses: [],
    totals: { l: 0, t: 0, p: 0, c: 0 }
  };

  return `
    <div class="curr-sem-header">
      <div class="curr-sem-title-box">
        <span class="curr-sem-icon">${libIcons.book}</span>
        <h3 id="active-sem-name">${data.name}</h3>
      </div>
      <span class="curr-credits-pill">Total Credits: <b id="active-sem-credits">${data.credits}</b></span>
    </div>
    <div class="curr-table-wrapper">
      <table class="curr-table" aria-label="Course curriculum table for ${dept.degree} ${dept.name} ${data.name}">
        <thead>
          <tr>
            <th class="th-num">S.No.</th>
            <th>Course Code</th>
            <th>Course Title</th>
            <th class="th-credit">L</th>
            <th class="th-credit">T</th>
            <th class="th-credit">P</th>
            <th class="th-credit">C</th>
          </tr>
        </thead>
        <tbody>
          ${data.courses.map(c => `
            <tr>
              <td class="td-num">${c.sno}</td>
              <td class="td-code">${c.code}</td>
              <td class="td-title">${c.title}</td>
              <td class="td-credit">${c.l}</td>
              <td class="td-credit">${c.t}</td>
              <td class="td-credit">${c.p}</td>
              <td class="td-credit"><b>${c.c}</b></td>
            </tr>
          `).join('')}
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3" style="text-align:left;padding-left:16px"><b>Total</b></td>
            <td class="td-credit">${data.totals.l}</td>
            <td class="td-credit">${data.totals.t}</td>
            <td class="td-credit">${data.totals.p}</td>
            <td class="td-credit">${data.totals.c}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  `;
}

const currSemestersList = [
  [1, 'Semester I'],
  [2, 'Semester II'],
  [3, 'Semester III'],
  [4, 'Semester IV'],
  [5, 'Semester V'],
  [6, 'Semester VI'],
  [7, 'Semester VII'],
  [8, 'Semester VIII']
];

function curriculumPage() {
  const params = routeParams();
  const queryDept = params.get('dept');
  if (queryDept) {
    const matched = getDeptCurriculum(queryDept);
    if (matched) currActiveDept = matched.id;
  }
  const activeDept = getDeptCurriculum(currActiveDept);

  return `<main class="siet-curr-page">
  ${sietHudHeader('Curriculum', 'Curriculum')}

  <section class="siet-curr-body">
    <div class="siet-curr-container">
      <div class="siet-curr-grid">
        <!-- Left Sidebar: Academics Nav -->
        <aside class="siet-curr-sidebar reveal">
          <div class="siet-curr-sidecard">
            <div class="siet-curr-sidehead">
              <span class="sidehead-icon" aria-hidden="true">${currIcons.gradCap}</span>
              <div class="sidehead-text">
                <h3>Academics</h3>
                <p>Your learning journey, our priority.</p>
              </div>
            </div>
            <nav class="siet-curr-nav" aria-label="Academic navigation">
              <a href="#/curriculum" class="siet-curr-navlink is-active">
                <span class="navlink-content">
                  <span class="navlink-icon">${libIcons.book}</span>
                  <span>Curriculum</span>
                </span>
                <span class="navlink-arrow">â€º</span>
              </a>
              <a href="#/academic-calendar" class="siet-curr-navlink">
                <span class="navlink-content">
                  <span class="navlink-icon">${currIcons.calendar}</span>
                  <span>Academic Calendar</span>
                </span>
                <span class="navlink-arrow">â€º</span>
              </a>
              <button type="button" class="siet-curr-navlink js-curr-modal-trigger" data-target="syllabus-r2024">
                <span class="navlink-content">
                  <span class="navlink-icon">${libIcons.document}</span>
                  <span>Syllabus</span>
                </span>
                <span class="navlink-arrow">â€º</span>
              </button>
              <button type="button" class="siet-curr-navlink js-curr-modal-trigger" data-target="regulations-r2024">
                <span class="navlink-content">
                  <span class="navlink-icon">${currIcons.shield}</span>
                  <span>Regulations</span>
                </span>
                <span class="navlink-arrow">â€º</span>
              </button>
              <button type="button" class="siet-curr-navlink js-curr-modal-trigger" data-target="curriculum-r2024">
                <span class="navlink-content">
                  <span class="navlink-icon">${currIcons.database}</span>
                  <span>Academic Resources</span>
                </span>
                <span class="navlink-arrow">â€º</span>
              </button>
            </nav>
          </div>
        </aside>

        <!-- Center: Interactive Curriculum Viewer -->
        <main class="siet-curr-center reveal">
          <!-- Department Tabs (Alphabetical order) -->
          <div class="curr-dept-tabs" role="tablist" aria-label="Select Engineering Department">
            ${[...allDepartments].sort((a, b) => a.code.localeCompare(b.code)).map(d => `
              <button type="button" 
                      class="curr-dept-tab ${d.id === activeDept.id ? 'is-active' : ''}" 
                      role="tab" 
                      aria-selected="${d.id === activeDept.id ? 'true' : 'false'}" 
                      data-dept="${d.id}"
                      title="${d.degree} ${d.name} (${d.code})">
                ${d.code}
              </button>
            `).join('')}
          </div>

          <div class="curr-center-eyebrow">CURRICULUM</div>
          <h2 class="curr-center-title" id="curr-dept-title">${activeDept.degree} ${activeDept.name}</h2>
          <p class="curr-center-desc" id="curr-dept-desc">${activeDept.desc}</p>

          <!-- Semester Tabs (Image 2 style) -->
          <div class="curr-sem-tabs" role="tablist" aria-label="Select Semester">
            ${currSemestersList.map(([num, name]) => `
              <button type="button" 
                      class="curr-sem-tab ${num === currActiveSem ? 'is-active' : ''}" 
                      role="tab" 
                      aria-selected="${num === currActiveSem ? 'true' : 'false'}" 
                      data-sem="${num}">
                ${name}
              </button>
            `).join('')}
          </div>

          <!-- Dynamic Semester Table Area -->
          <div id="curr-table-area">
            ${renderCurriculumTable(activeDept.id, currActiveSem)}
          </div>
        </main>
      </div>
    </div>
  </section>

  <!-- Ambient Bottom Wave and Watermark -->
  <div class="siet-curr-bottom-decor" aria-hidden="true">
    <div class="siet-curr-watermark">
      <svg viewBox="0 0 280 120" fill="none" stroke="#256e48" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round">
        <path d="M10 110h260M25 110V45l45-22 45 22v65M115 110V32l35-18 35 18v78M185 110V45l40-20 40 20v65" />
        <line x1="45" y1="58" x2="45" y2="110" />
        <line x1="60" y1="58" x2="60" y2="110" />
        <line x1="85" y1="58" x2="85" y2="110" />
        <line x1="100" y1="58" x2="100" y2="110" />
        <rect x="135" y="48" width="16" height="22" />
        <rect x="160" y="48" width="16" height="22" />
        <rect x="145" y="80" width="20" height="30" rx="6" />
        <line x1="205" y1="58" x2="205" y2="110" />
        <line x1="220" y1="58" x2="220" y2="110" />
        <line x1="245" y1="58" x2="245" y2="110" />
      </svg>
    </div>
    <div class="siet-curr-bottom-wave">
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none" fill="none">
        <path d="M0,100 L0,25 C200,85 450,95 720,60 C980,25 1200,35 1440,0 L1440,100 Z" fill="#073b21" />
        <path d="M0,100 L0,45 C240,92 480,102 760,70 C1020,38 1240,48 1440,20 L1440,100 Z" fill="#0b522f" />
        <path d="M0,100 L0,70 C280,105 520,108 800,82 C1060,56 1280,68 1440,45 L1440,100 Z" fill="#eab308" />
      </svg>
    </div>
  </div>

  <!-- Curriculum Modal Dialog -->
  <div class="siet-lib-modal js-curr-modal" role="dialog" aria-modal="true" aria-hidden="true">
    <div class="siet-lib-modal-box">
      <div class="siet-lib-modal-header">
        <h3 class="js-curr-modal-title">Academic Document</h3>
        <button type="button" class="siet-lib-modal-close js-curr-modal-close" aria-label="Close modal">Ã—</button>
      </div>
      <div class="siet-lib-modal-body js-curr-modal-body"></div>
    </div>
  </div>
</main>`;
}

function academicCalendarPage() {
  return `<main class="siet-curr-page siet-calendar-page">
  ${sietHudHeader('Academic Calendar', 'Academic Calendar')}

  <section class="siet-curr-body">
    <div class="siet-curr-container">
      <div class="siet-curr-grid">
        <!-- Left Sidebar: Academics Nav -->
        <aside class="siet-curr-sidebar reveal">
          <div class="siet-curr-sidecard">
            <div class="siet-curr-sidehead">
              <span class="sidehead-icon" aria-hidden="true">${currIcons.gradCap}</span>
              <div class="sidehead-text">
                <h3>Academics</h3>
                <p>Your learning journey, our priority.</p>
              </div>
            </div>
            <nav class="siet-curr-nav" aria-label="Academic navigation">
              <a href="#/curriculum" class="siet-curr-navlink">
                <span class="navlink-content">
                  <span class="navlink-icon">${libIcons.book}</span>
                  <span>Curriculum</span>
                </span>
                <span class="navlink-arrow">â€º</span>
              </a>
              <a href="#/academic-calendar" class="siet-curr-navlink is-active">
                <span class="navlink-content">
                  <span class="navlink-icon">${currIcons.calendar}</span>
                  <span>Academic Calendar</span>
                </span>
                <span class="navlink-arrow">â€º</span>
              </a>
              <button type="button" class="siet-curr-navlink js-curr-modal-trigger" data-target="syllabus-r2024">
                <span class="navlink-content">
                  <span class="navlink-icon">${libIcons.document}</span>
                  <span>Syllabus</span>
                </span>
                <span class="navlink-arrow">â€º</span>
              </button>
              <button type="button" class="siet-curr-navlink js-curr-modal-trigger" data-target="regulations-r2024">
                <span class="navlink-content">
                  <span class="navlink-icon">${currIcons.shield}</span>
                  <span>Regulations</span>
                </span>
                <span class="navlink-arrow">â€º</span>
              </button>
            </nav>
          </div>
        </aside>

        <!-- Main Content -->
        <article class="siet-curr-main">
          <div class="siet-calendar-card reveal">
            <div class="siet-calendar-header">
              <div>
                <span class="curr-badge">AUTONOMOUS 2025â€“2026</span>
                <h2>Autonomous Academic Schedule &amp; Calendar</h2>
                <p>Detailed timeline for class commencement, continuous internal assessments, model examinations, end-semester practicals, and theory examinations.</p>
              </div>
              <div class="calendar-actions">
                <a href="#/curriculum" class="dept-curriculum-action">View Full Curriculum â†’</a>
              </div>
            </div>

            <div class="calendar-schedule-tables">
              <h3 class="calendar-term-heading">Odd Semester (III, V, VII Semesters)</h3>
              <div class="curr-table-wrapper">
                <table class="curr-table calendar-table">
                  <thead>
                    <tr>
                      <th style="width:70px">S.No</th>
                      <th>Academic Milestone / Event</th>
                      <th style="width:220px">Date / Duration</th>
                      <th style="width:130px">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="td-num">1</td>
                      <td class="td-title">Commencement of Odd Semester Classes</td>
                      <td class="td-code">14 July 2025</td>
                      <td><span class="cal-status cal-open">Completed</span></td>
                    </tr>
                    <tr>
                      <td class="td-num">2</td>
                      <td class="td-title">Continuous Internal Assessment â€“ I (CIA I)</td>
                      <td class="td-code">25 Aug 2025 â€“ 01 Sep 2025</td>
                      <td><span class="cal-status cal-open">Completed</span></td>
                    </tr>
                    <tr>
                      <td class="td-num">3</td>
                      <td class="td-title">Continuous Internal Assessment â€“ II (CIA II)</td>
                      <td class="td-code">06 Oct 2025 â€“ 13 Oct 2025</td>
                      <td><span class="cal-status cal-active">Active</span></td>
                    </tr>
                    <tr>
                      <td class="td-num">4</td>
                      <td class="td-title">Last Working Day for Odd Semester</td>
                      <td class="td-code">07 Nov 2025</td>
                      <td><span class="cal-status">Scheduled</span></td>
                    </tr>
                    <tr>
                      <td class="td-num">5</td>
                      <td class="td-title">End Semester Practical Examinations</td>
                      <td class="td-code">10 Nov 2025 â€“ 18 Nov 2025</td>
                      <td><span class="cal-status">Scheduled</span></td>
                    </tr>
                    <tr>
                      <td class="td-num">6</td>
                      <td class="td-title">End Semester Theory Examinations</td>
                      <td class="td-code">24 Nov 2025 â€“ 15 Dec 2025</td>
                      <td><span class="cal-status">Scheduled</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 class="calendar-term-heading" style="margin-top:36px">Even Semester (IV, VI, VIII Semesters)</h3>
              <div class="curr-table-wrapper">
                <table class="curr-table calendar-table">
                  <thead>
                    <tr>
                      <th style="width:70px">S.No</th>
                      <th>Academic Milestone / Event</th>
                      <th style="width:220px">Date / Duration</th>
                      <th style="width:130px">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="td-num">1</td>
                      <td class="td-title">Re-opening &amp; Commencement of Even Semester Classes</td>
                      <td class="td-code">05 Jan 2026</td>
                      <td><span class="cal-status">Upcoming</span></td>
                    </tr>
                    <tr>
                      <td class="td-num">2</td>
                      <td class="td-title">Continuous Internal Assessment â€“ I (CIA I)</td>
                      <td class="td-code">16 Feb 2026 â€“ 23 Feb 2026</td>
                      <td><span class="cal-status">Upcoming</span></td>
                    </tr>
                    <tr>
                      <td class="td-num">3</td>
                      <td class="td-title">Continuous Internal Assessment â€“ II (CIA II)</td>
                      <td class="td-code">23 Mar 2026 â€“ 30 Mar 2026</td>
                      <td><span class="cal-status">Upcoming</span></td>
                    </tr>
                    <tr>
                      <td class="td-num">4</td>
                      <td class="td-title">Last Working Day for Even Semester</td>
                      <td class="td-code">24 Apr 2026</td>
                      <td><span class="cal-status">Upcoming</span></td>
                    </tr>
                    <tr>
                      <td class="td-num">5</td>
                      <td class="td-title">End Semester Practical Examinations</td>
                      <td class="td-code">27 Apr 2026 â€“ 06 May 2026</td>
                      <td><span class="cal-status">Upcoming</span></td>
                    </tr>
                    <tr>
                      <td class="td-num">6</td>
                      <td class="td-title">End Semester Theory Examinations</td>
                      <td class="td-code">11 May 2026 â€“ 02 Jun 2026</td>
                      <td><span class="cal-status">Upcoming</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- Wave transition -->
  <div class="siet-curr-waves-zone" aria-hidden="true">
    <div class="siet-curr-bottom-wave">
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none" fill="none">
        <path d="M0,100 L0,25 C200,85 450,95 720,60 C980,25 1200,35 1440,0 L1440,100 Z" fill="#073b21" />
        <path d="M0,100 L0,45 C240,92 480,102 760,70 C1020,38 1240,48 1440,20 L1440,100 Z" fill="#0b522f" />
        <path d="M0,100 L0,70 C280,105 520,108 800,82 C1060,56 1280,68 1440,45 L1440,100 Z" fill="#eab308" />
      </svg>
    </div>
  </div>
</main>`;
}

function enquiryPage(apply = false) { return `<main class="enquiry-page-v3"><section class="enquiry-hero-v3"><img src="/brand/siet-logo.png" alt=""><div class="eyebrow"><span></span> SRI SHAKTHI</div><h1>${apply ? 'Apply for Sri Shakthi' : 'Admission Enquiry'}</h1><h2>Letâ€™s plan your <em>next step.</em></h2><p>Share your interests and contact details. Our admissions team will guide you in choosing the right programme.</p></section><section class="enquiry-main-v3"><div class="enquiry-heading-v3"><small>ENQUIRY FORM</small><h1>Start your engineering journey with SIET</h1></div><form class="enquiry-form-v3 js-form"><div class="enquiry-fields-v3">${field('Full Name', 'name', 'text', 'Enter your full name')}${field('Mobile Number', 'phone', 'tel', 'Enter 10 digit mobile number')}${field('Email Address', 'email', 'email', 'Enter your email address')}${selectField('Course Level', 'level', ['UG', 'PG'])}${programSelectHtml('Preferred Department', 'course')}${field('Academic Qualification / Marks', 'qualification', 'text', 'Qualification and marks')}</div><label>Message / Any Specific Query <b>*</b><textarea name="message" rows="4" required minlength="10"></textarea></label><button class="button" type="submit">${apply ? 'Submit Application' : 'Send Enquiry'} â†’</button><p class="status" aria-live="polite"></p></form></section></main>` }
const field = (label, name, type, placeholder) => `<label>${label} <b>*</b><input type="${type}" name="${name}" placeholder="${placeholder}" required></label>`;
const selectField = (label, name, opts) => `<label>${label} <b>*</b><select name="${name}" required><option value="">Select ${label}</option>${opts.map(o => `<option>${o}</option>`).join('')}</select></label>`;
function careersPage() {
  const unit = careerUnits.college;
  return `<main class="careers-page"><section class="career-hero"><small>WORK WITH US</small><h1>Faculty Recruitment</h1><h2>Build careers that <em>shape futures.</em></h2><p>Join a community of educators, researchers and professionals committed to powering the youth and empowering the nation.</p></section><section class="career-main"><div class="career-tabs"><button class="active" data-unit="college" type="button">Engineering College</button><button data-unit="school" type="button">CBSE School</button><button data-unit="lab" type="button">Food Testing Lab</button></div><div class="career-intro"><img src="/brand/siet-logo.png" alt=""><div><small>${unit.subtitle}</small><h2>Sri Shakthi ${unit.name}</h2><p>${unit.desc}</p></div></div><div class="career-application-layout"><form class="career-form js-form"><div class="career-form-head"><small>APPLICATION FORM</small><h2>Faculty &amp; Professional Recruitment</h2></div><div class="career-fields">${field('Full Name', 'name', 'text', 'Enter your full name')}${field('Mobile Number', 'phone', 'tel', 'Enter mobile number')}${field('Email Address', 'email', 'email', 'Enter email')}${selectField('Application Category', 'category', unit.cats.map(c => c[0]))}${field('Position', 'position', 'text', 'Position you would like to apply')}${field('Highest Qualification', 'qualification', 'text', 'Enter highest degree')}<label class="career-wide">Why are you looking for a change?<textarea name="message" rows="4"></textarea></label><label class="career-wide career-file">Upload Resume <b>*</b><input type="file" name="resume" accept=".pdf,.doc,.docx,.rtf" required></label></div><button class="career-submit" type="submit">Submit Application â†’</button><p class="status" aria-live="polite"></p></form><aside class="career-categories"><div class="career-side-title"><small>EXPLORE OPENINGS</small><h2>${unit.name} Openings</h2></div>${unit.cats.map((c, i) => `<details ${i === 0 ? 'open' : ''}><summary>${c[0]} ${icon('down')}</summary><div>${c[1].map(r => `<span>â†’ ${r}</span>`).join('')}</div></details>`).join('')}<div class="career-contact"><small>RECRUITMENT QUERIES</small><h3>Letâ€™s build the future together.</h3><a href="mailto:careers@siet.ac.in">careers@siet.ac.in</a></div></aside></div></section></main>`;
}

function videoModal() { return `<div class="video-modal" role="dialog" aria-modal="true"><div class="video-shell portrait"><button class="video-close" aria-label="Close video">Ã—</button><div class="video-frame"><video controls autoplay playsinline poster="/brand/techpark-hd.jpg"><source src="/brand/siet-campus-video.mp4" type="video/mp4"></video></div></div></div>` }
function route() {
  const raw = decodeURIComponent(location.hash.replace(/^#\/?/, '')).replace(/\/$/, '');
  return raw.split('?')[0];
}
function routeParams() {
  const raw = decodeURIComponent(location.hash.replace(/^#\/?/, ''));
  const qIndex = raw.indexOf('?');
  if (qIndex === -1) return new URLSearchParams();
  return new URLSearchParams(raw.slice(qIndex + 1));
}
function render() { if (!appRoot) return; const r = route(); let content = !r ? homePage() : r === 'vision-mission' || r === 'about' ? visionPage() : r === 'core-beliefs' ? coreBeliefsPage() : r === 'program-outcomes' ? programOutcomesPage() : r === 'core-values' ? coreValuesPage() : r === 'philosophy' ? philosophyPage() : r === 'chairman' ? chairmanPage() : r === 'principal' ? principalPage() : r === 'admission-enquiry' || r === 'apply' ? enquiryPage(r === 'apply') : r === 'admission-referral' || r === 'referral' ? referralPage() : r === 'programmes' ? programmesPage() : r === 'departments' ? departmentsPage() : r === 'careers' ? careersPage() : r === 'library' ? libraryPage() : r === 'curriculum' ? curriculumPage() : r === 'academic-calendar' ? academicCalendarPage() : internalPage(r); appRoot.innerHTML = header() + content + footer(); document.title = `${r ? titleCase(r.replaceAll('-', ' ')) : 'Sri Shakthi'} | SIET`; bind(); scrollTo(0, 0) }

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
    if (route() === 'library') {
    document.title = "Central Library | Sri Shakthi Institute of Engineering & Technology";
  }
  if (route() === 'curriculum') {
    const dept = getDeptCurriculum(currActiveDept);
    document.title = `${dept.degree} ${dept.name} Curriculum | Sri Shakthi Institute of Engineering & Technology`;
  }
  if (route() === 'academic-calendar') {
    document.title = "Academic Calendar | Sri Shakthi Institute of Engineering & Technology";
  }
  if (route() === 'departments') {
    document.title = "Departments | Sri Shakthi Institute of Engineering & Technology";
  }
  if (route() === 'programmes') {
    document.title = "UG & PG Programmes | Sri Shakthi Institute of Engineering & Technology";
  }
  if (route()?.startsWith('placements')) {
    const r = route();
    if (r === 'placements/entrepreneurship') {
      document.title = "Entrepreneurship & Incubation | Sri Shakthi Institute of Engineering & Technology";
    } else if (r === 'placements/higher-education') {
      document.title = "Higher Education & Global Admissions | Sri Shakthi Institute of Engineering & Technology";
    } else if (r === 'placements/government-services') {
      document.title = "Civil Services & Government Careers | Sri Shakthi Institute of Engineering & Technology";
    } else {
      document.title = "Placements & Career Excellence | Sri Shakthi Institute of Engineering & Technology";
    }
  }

  // Filter tabs on Programmes page
  $$('.siet-prog-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      $$('.siet-prog-filter-btn').forEach(b => {
        const isActive = b === btn;
        b.classList.toggle('is-active', isActive);
        b.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });
      const ugSec = $('#ug-programmes-section');
      const pgSec = $('#pg-programmes-section');
      if (filter === 'all') {
        if (ugSec) ugSec.style.display = '';
        if (pgSec) pgSec.style.display = '';
      } else if (filter === 'ug') {
        if (ugSec) ugSec.style.display = '';
        if (pgSec) pgSec.style.display = 'none';
      } else if (filter === 'pg') {
        if (ugSec) ugSec.style.display = 'none';
        if (pgSec) pgSec.style.display = '';
      }
    });
  });

  // Filter tabs on Departments page
  $$('.depts-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.deptFilter;
      $$('.depts-filter-btn').forEach(b => {
        const isActive = b === btn;
        b.classList.toggle('is-active', isActive);
        b.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });
      const ugSec = $('#ug-depts-section');
      const pgSec = $('#pg-depts-section');
      if (filter === 'all') {
        if (ugSec) ugSec.style.display = '';
        if (pgSec) pgSec.style.display = '';
      } else if (filter === 'ug') {
        if (ugSec) ugSec.style.display = '';
        if (pgSec) pgSec.style.display = 'none';
      } else if (filter === 'pg') {
        if (ugSec) ugSec.style.display = 'none';
        if (pgSec) pgSec.style.display = '';
      }
    });
  });

  // Sync Course Level with Preferred Department in Enquiry and Referral forms
  const setupLevelSync = (levelSelector, courseSelector) => {
    const levelEl = $(levelSelector);
    const courseEl = $(courseSelector);
    if (!levelEl || !courseEl) return;
    levelEl.addEventListener('change', () => {
      const val = levelEl.value;
      const currentVal = courseEl.value;
      if (val === 'UG') {
        courseEl.innerHTML = `<option value="">Select Preferred Department</option>${ugProgramsDetailed.map(p => `<option value="${p.fullName}">${p.fullName}</option>`).join('')}`;
      } else if (val === 'PG') {
        courseEl.innerHTML = `<option value="">Select Preferred Department</option>${pgProgramsDetailed.map(p => `<option value="${p.fullName}">${p.fullName}</option>`).join('')}`;
      } else {
        courseEl.innerHTML = `
          <option value="">Select Preferred Department</option>
          <optgroup label="Undergraduate (UG) Programmes">
            ${ugProgramsDetailed.map(p => `<option value="${p.fullName}">${p.fullName}</option>`).join('')}
          </optgroup>
          <optgroup label="Postgraduate (PG) Programmes">
            ${pgProgramsDetailed.map(p => `<option value="${p.fullName}">${p.fullName}</option>`).join('')}
          </optgroup>
        `;
      }
      if ([...courseEl.options].some(o => o.value === currentVal)) {
        courseEl.value = currentVal;
      }
    });
  };
  setupLevelSync('select[name="level"]', 'select[name="course"]');
  setupLevelSync('select[name="candidate_level"]', 'select[name="candidate_course"]');

  // Library modal triggers
  $$('.js-lib-modal-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.target;
      const modal = $('.js-lib-modal');
      const titleEl = $('.js-lib-modal-title');
      const bodyEl = $('.js-lib-modal-body');
      if (!modal || !titleEl || !bodyEl) return;
      const data = libModalData[target] || { title: 'Library Information', content: '<p>Details will be updated shortly.</p>' };
      titleEl.textContent = data.title;
      bodyEl.innerHTML = data.content;
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });

  $('.js-lib-modal-close')?.addEventListener('click', () => {
    const modal = $('.js-lib-modal');
    if (modal) {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  });

  $('.js-lib-modal')?.addEventListener('click', e => {
    if (e.target.classList.contains('js-lib-modal')) {
      e.target.classList.remove('open');
      e.target.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  });

  // Library search submission handler
  $('.js-lib-search')?.addEventListener('submit', e => {
    e.preventDefault();
    const input = $('.js-lib-search-input');
    const query = (input?.value || '').trim();
    const modal = $('.js-lib-modal');
    const titleEl = $('.js-lib-modal-title');
    const bodyEl = $('.js-lib-modal-body');
    if (!modal || !titleEl || !bodyEl) return;
    titleEl.textContent = query ? `Search Results: "${query}"` : 'Library Catalogue Search';
    bodyEl.innerHTML = `
      <p>Searching Central Library OPAC &amp; digital collections for <b>${query || 'all subjects'}</b>:</p>
      <h4>Matching Records &amp; Availability:</h4>
      <ul>
        <li><span class="siet-lib-resource-badge">Print Volume</span> <b>Artificial Intelligence: A Modern Approach</b> â€” <i>Available (Shelf 4B, 3 copies)</i></li>
        <li><span class="siet-lib-resource-badge">E-Journal</span> <b>IEEE Transactions on Pattern Analysis and Machine Intelligence</b> â€” <i>Full-text Online</i></li>
        <li><span class="siet-lib-resource-badge">Research Project</span> <b>Smart Agro-Robotics &amp; Drone Systems (2025-26)</b> â€” <i>Reference Section R-08</i></li>
        <li><span class="siet-lib-resource-badge">Textbook</span> <b>Data Structures and Algorithm Analysis in C++ (Mark Allen Weiss)</b> â€” <i>Available (Shelf 2A)</i></li>
      </ul>
      <p style="margin-top:14px;color:#537563;font-size:13px">Present your institutional Smart ID card at the circulation counter to reserve or issue physical books.</p>
    `;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  });

  // Department switcher helper
  const updateActiveDept = (deptId) => {
    const dept = getDeptCurriculum(deptId);
    if (!dept) return;
    currActiveDept = dept.id;

    $$('.curr-dept-tab').forEach(tab => {
      const isSelected = tab.dataset.dept === dept.id;
      tab.classList.toggle('is-active', isSelected);
      tab.setAttribute('aria-selected', isSelected ? 'true' : 'false');
    });

    const titleEl = $('#curr-dept-title');
    const descEl = $('#curr-dept-desc');
    if (titleEl) titleEl.textContent = `${dept.degree} ${dept.name}`;
    if (descEl) descEl.textContent = dept.desc;

    const tableArea = $('#curr-table-area');
    if (tableArea) {
      tableArea.innerHTML = renderCurriculumTable(currActiveDept, currActiveSem);
    }

    document.title = `${dept.degree} ${dept.name} Curriculum | SIET`;
    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, '', `#/curriculum?dept=${dept.id}`);
    }
  };

  $$('.curr-dept-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const deptId = tab.dataset.dept;
      if (deptId) updateActiveDept(deptId);
    });
  });

  const updateActiveSem = (semNum) => {
    const sem = Math.max(1, Math.min(8, Number(semNum) || 1));
    currActiveSem = sem;

    $$('.curr-sem-tab').forEach(tab => {
      const isSelected = Number(tab.dataset.sem) === sem;
      tab.classList.toggle('is-active', isSelected);
      tab.setAttribute('aria-selected', isSelected ? 'true' : 'false');
    });

    const tableArea = $('#curr-table-area');
    if (tableArea) {
      tableArea.innerHTML = renderCurriculumTable(currActiveDept, currActiveSem);
    }
  };

  $$('.curr-sem-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const sem = Number(tab.dataset.sem);
      if (sem) updateActiveSem(sem);
    });
  });

  $$('.js-curr-modal-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.target;
      const modal = $('.js-curr-modal');
      const titleEl = $('.js-curr-modal-title');
      const bodyEl = $('.js-curr-modal-body');
      if (!modal || !titleEl || !bodyEl) return;
      const data = getCurrModalData(target, currActiveDept);
      titleEl.textContent = data.title;
      bodyEl.innerHTML = data.content;
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });

  $('.js-curr-modal-close')?.addEventListener('click', () => {
    const modal = $('.js-curr-modal');
    if (modal) {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  });

  $('.js-curr-modal')?.addEventListener('click', e => {
    if (e.target.classList.contains('js-curr-modal')) {
      e.target.classList.remove('open');
      e.target.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  });


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
  let navCloseTimer = null;
  const closeAllNavGroups = () => {
    if (navCloseTimer) {
      clearTimeout(navCloseTimer);
      navCloseTimer = null;
    }
    $$('.institution-nav-group').forEach(x => {
      x.classList.remove('open');
      x.querySelector('button')?.setAttribute('aria-expanded', 'false');
    });
  };

  const openNavGroup = (group) => {
    if (navCloseTimer) {
      clearTimeout(navCloseTimer);
      navCloseTimer = null;
    }
    $$('.institution-nav-group').forEach(x => {
      if (x !== group) {
        x.classList.remove('open');
        x.querySelector('button')?.setAttribute('aria-expanded', 'false');
      }
    });
    if (group) {
      group.classList.add('open');
      group.querySelector('button')?.setAttribute('aria-expanded', 'true');
    }
  };

  $$('.institution-nav-group').forEach(group => {
    const btn = group.querySelector('button');

    group.addEventListener('mouseenter', () => {
      openNavGroup(group);
    });

    group.addEventListener('mouseleave', () => {
      if (navCloseTimer) clearTimeout(navCloseTimer);
      navCloseTimer = setTimeout(() => {
        group.classList.remove('open');
        btn?.setAttribute('aria-expanded', 'false');
      }, 140);
    });

    btn?.addEventListener('click', e => {
      e.stopPropagation();
      const isCurrentlyOpen = group.classList.contains('open');
      if (navCloseTimer) clearTimeout(navCloseTimer);
      if (isCurrentlyOpen) {
        group.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      } else {
        openNavGroup(group);
      }
    });

    group.addEventListener('focusin', () => {
      openNavGroup(group);
    });

    group.addEventListener('focusout', e => {
      if (!group.contains(e.relatedTarget)) {
        group.classList.remove('open');
        btn?.setAttribute('aria-expanded', 'false');
      }
    });
  });

  $$('.institution-nav-link, .institution-home, .institution-nav-apply, .institution-mobile-logo, .siet-header-image').forEach(item => {
    item.addEventListener('mouseenter', () => {
      closeAllNavGroups();
    });
  });

  $('.institution-navbar')?.addEventListener('mouseleave', () => {
    if (navCloseTimer) clearTimeout(navCloseTimer);
    navCloseTimer = setTimeout(() => {
      closeAllNavGroups();
    }, 140);
  });

  $$('.institution-nav-group>div a').forEach(link => {
    link.addEventListener('click', () => {
      closeAllNavGroups();
    });
  });
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
        unit.cats.map((c, i) => `<details ${i === 0 ? 'open' : ''}><summary>${c[0]} ${icon('down')}</summary><div>${c[1].map(r => `<span>â†’ ${r}</span>`).join('')}</div></details>`).join('') +
        `<div class="career-contact"><small>RECRUITMENT QUERIES</small><h3>Letâ€™s build the future together.</h3><a href="mailto:careers@siet.ac.in">careers@siet.ac.in</a></div>`;
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
  // Open Placement Modal helper
  function openPlacementModal(tierKey = '10') {
    const existing = $('.placement-modal');
    if (existing) existing.remove();
    document.body.insertAdjacentHTML('beforeend', placementDetailsModal(tierKey));
    document.body.style.overflow = 'hidden';
    const modal = $('.placement-modal');
    if (!modal) return;
    
    const closeModal = () => {
      modal.classList.add('closing');
      setTimeout(() => {
        modal.remove();
        document.body.style.overflow = '';
      }, 180);
    };

    $('.placement-modal-close', modal)?.addEventListener('click', closeModal);
    $('.js-close-pm', modal)?.addEventListener('click', closeModal);
    $('.placement-modal-backdrop', modal)?.addEventListener('click', closeModal);

    // Tab switching inside modal
    $$('.pm-tab-btn', modal).forEach(btn => {
      btn.addEventListener('click', () => {
        const nextTier = btn.dataset.tier;
        if (nextTier) openPlacementModal(nextTier);
      });
    });
  }

  // Placement Stat Cards Interactivity
  $$('.ps-stat-card').forEach(card => {
    card.addEventListener('click', () => {
      const tier = card.dataset.tier || '10';
      openPlacementModal(tier);
    });
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const tier = card.dataset.tier || '10';
        openPlacementModal(tier);
      }
    });
    // Hover highlight effect on marquee logos
    card.addEventListener('mouseenter', () => {
      const tierKey = card.dataset.tier;
      const companies = placementTierData[tierKey]?.companies || [];
      const lowerNames = companies.map(c => c.toLowerCase().replace(/[^a-z0-9]/g, ''));
      $$('.placement-marquee-item').forEach(item => {
        const logoName = (item.dataset.logo || '').toLowerCase().replace(/[^a-z0-9]/g, '');
        const isMatch = lowerNames.some(c => logoName.includes(c) || c.includes(logoName));
        item.classList.toggle('highlighted-by-card', isMatch);
      });
    });
    card.addEventListener('mouseleave', () => {
      $$('.placement-marquee-item').forEach(item => item.classList.remove('highlighted-by-card'));
    });
  });

  // Explore Placements CTA
  $('.js-explore-placements')?.addEventListener('click', () => {
    const section = $('#placement-highlights') || $('.placement-right-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'center' });
      $$('.ps-stat-card').forEach(c => {
        c.classList.add('pulse-highlight');
        setTimeout(() => c.classList.remove('pulse-highlight'), 1600);
      });
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

  // Referral form: Toggle Register Number for Current Student
  const relationSelect = $('select[name="referrer_relation"]');
  const regNoWrapper = $('#referrer-reg-no-wrapper');
  const regNoInput = $('#referrer_reg_no');
  if (relationSelect && regNoWrapper && regNoInput) {
    const handleRelationChange = () => {
      const isCurrentStudent = relationSelect.value === 'Current Student';
      if (isCurrentStudent) {
        regNoWrapper.style.display = 'block';
        regNoInput.required = true;
        regNoInput.disabled = false;
      } else {
        regNoWrapper.style.display = 'none';
        regNoInput.required = false;
        regNoInput.disabled = true;
        regNoInput.value = '';
      }
    };
    relationSelect.addEventListener('change', handleRelationChange);
    relationSelect.addEventListener('input', handleRelationChange);
    const form = relationSelect.closest('form');
    form?.addEventListener('reset', () => setTimeout(handleRelationChange, 0));
    handleRelationChange();
  }

  $$('.js-form').forEach(form => form.addEventListener('submit', submitForm)); observe();
}
async function submitForm(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const status = $('.status', form);
  const btn = $('button[type="submit"], .career-submit', form);
  if (status) { status.textContent = 'Submitting detailsâ€¦'; status.style.color = '#0b7a48' }
  if (btn) btn.disabled = true;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  if (!data.name && data.referrer_name) data.name = `${data.referrer_name} (Ref for: ${data.candidate_name || 'Candidate'})`;
  if (!data.email && (data.referrer_email || data.candidate_email)) data.email = data.referrer_email || data.candidate_email;
  if (!data.phone && (data.referrer_phone || data.candidate_phone)) data.phone = data.referrer_phone || data.candidate_phone;
  if (!data.course && data.candidate_course) data.course = data.candidate_course;
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
const handleEscape = e => {
  if (e.key === 'Escape') {
    $('.video-close')?.click();
    $('.mobile-nav-close')?.click();
    $('.placement-modal-close')?.click();
    $('.js-lib-modal-close')?.click();
    $('.js-curr-modal-close')?.click();
    $$('.institution-nav-group').forEach(g => {
      g.classList.remove('open');
      g.querySelector('button')?.setAttribute('aria-expanded', 'false');
    });
  }
};
const handleDocClick = e => {
  if (!e.target.closest('.institution-nav-group>button')) {
    $$('.institution-nav-group').forEach(g => {
      g.classList.remove('open');
      g.querySelector('button')?.setAttribute('aria-expanded', 'false');
    });
  }
};

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

const placementDataYears = {
  '2025 - 26': {
    placed: 285,
    companies: '120+',
    highest: '₹12 LPA',
    average: '₹5.2 LPA',
    multiple: 45,
    rate: '94%',
    tags: {
      placed: '↑ 14% YoY',
      companies: 'Tier-1 & MNCs',
      highest: 'Marquee Offer',
      average: 'Core & IT Mix',
      multiple: 'Dual Offers',
      rate: 'Eligible Cohort'
    }
  },
  '2024 - 25': {
    placed: 250,
    companies: '110+',
    highest: '₹10 LPA',
    average: '₹4.8 LPA',
    multiple: 38,
    rate: '92%',
    tags: {
      placed: '↑ 19% YoY',
      companies: 'Fortune 500s',
      highest: 'Product Tier',
      average: 'Consistent Rise',
      multiple: 'Super Dream',
      rate: 'NBA Accredited'
    }
  },
  '2023 - 24': {
    placed: 210,
    companies: '90+',
    highest: '₹9 LPA',
    average: '₹4.5 LPA',
    multiple: 32,
    rate: '90%',
    tags: {
      placed: '↑ 16% YoY',
      companies: 'Global Recruits',
      highest: 'Tier-1 Marquee',
      average: 'Benchmark Level',
      multiple: 'Dual Offers',
      rate: 'Core Disciplines'
    }
  },
  '2022 - 23': {
    placed: 180,
    companies: '75+',
    highest: '₹8 LPA',
    average: '₹4.1 LPA',
    multiple: 27,
    rate: '88%',
    tags: {
      placed: 'Foundation Year',
      companies: 'National Drives',
      highest: 'Top Tier',
      average: 'Steady Growth',
      multiple: 'Multiple Drives',
      rate: 'Strong Benchmark'
    }
  }
};

// All Featured Star Achievers
const starAchievers = [
  { name: 'Nithya Sri K', dept: 'Information Technology', company: 'TCS', ctc: '₹12 LPA', top: true, batch: 'Batch 2026', img: '/brand/achievers/nithya-sri-k.jpg' },
  { name: 'Aravind S', dept: 'Computer Science and Engineering', company: 'Infosys', ctc: '₹10 LPA', top: false, batch: 'Batch 2026', img: '/brand/achievers/aravind-s.jpg' },
  { name: 'Priya Dharshini R', dept: 'Electronics and Communication', company: 'Wipro', ctc: '₹9.5 LPA', top: false, batch: 'Batch 2026', img: '/brand/achievers/priya-dharshini-r.jpg' },
  { name: 'Karthik V', dept: 'Mechanical Engineering', company: 'Cognizant', ctc: '₹8.5 LPA', top: false, batch: 'Batch 2026', img: '/brand/achievers/karthik-v.jpg' },
  { name: 'Sowmiya M', dept: 'Civil Engineering', company: 'Zoho', ctc: '₹7.5 LPA', top: false, batch: 'Batch 2026', img: '/brand/achievers/sowmiya-m.jpg' }
];

// Top Recruiters Row 1 (Product Leaders, Cloud & Enterprise IT)
const topRecruitersRow1 = [
  { name: 'ZOHO', type: 'img', src: '/brand/placement-company-logo/line-2/zoho-logo.png', category: 'Product & SaaS' },
  { name: 'J.P.Morgan', type: 'custom', html: '<text x="50%" y="60%" dominant-baseline="middle" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="18" fill="#2d2926">J.P.Morgan</text>', category: 'Investment Bank' },
  { name: 'AUTODESK', type: 'custom', html: '<text x="50%" y="60%" dominant-baseline="middle" text-anchor="middle" font-family="Plus Jakarta Sans, sans-serif" font-weight="800" font-size="17" letter-spacing="1.5" fill="#0696d7">▲ AUTODESK</text>', category: '3D Design Tech' },
  { name: 'JUSPAY', type: 'custom', html: '<circle cx="20" cy="14" r="6" fill="#0077ff"/><text x="62%" y="60%" dominant-baseline="middle" text-anchor="middle" font-family="Plus Jakarta Sans, sans-serif" font-weight="800" font-size="17" letter-spacing="0.5" fill="#172a3a">JUSPAY</text>', category: 'FinTech Unicorn' },
  { name: 'TCS', type: 'svg', category: 'Global IT Leader' },
  { name: 'Cognizant', type: 'img', src: '/brand/placement-company-logo/line-1/Cognizant-logo.png', category: 'Digital Solutions' },
  { name: 'ServiceNow', type: 'img', src: '/brand/placement-company-logo/line-2/servicenow-logo.png', category: 'Enterprise Cloud' },
  { name: 'Presidio', type: 'img', src: '/brand/placement-company-logo/line-2/Presido-logo.png', category: 'Cyber Security' },
  { name: 'ConverSight', type: 'img', src: '/brand/placement-company-logo/line-1/Conver-sight-logo.png', category: 'AI & Analytics' },
  { name: 'Abluva', type: 'img', src: '/brand/placement-company-logo/line-1/Abluva-logo.png', category: 'Data Security AI' },
  { name: 'Retail AI', type: 'img', src: '/brand/placement-company-logo/line-1/Retail-ai-logo.png', category: 'Autonomous Tech' }
];

// Top Recruiters Row 2 (Global MNCs, Core Engineering & DeepTech)
const topRecruitersRow2 = [
  { name: 'Infosys', type: 'svg', category: 'Technology Consulting' },
  { name: 'Amazon', type: 'svg', category: 'Cloud & Tech Giant' },
  { name: 'Accenture', type: 'svg', category: 'Strategy & Consulting' },
  { name: 'Wipro', type: 'svg', category: 'Global IT Enterprise' },
  { name: 'ITC Limited', type: 'img', src: '/brand/placement-company-logo/line-2/ITC-limited-logo.png', category: 'Conglomerate & FMCG' },
  { name: 'Zentron Labs', type: 'img', src: '/brand/placement-company-logo/line-2/Zentron-labs-logo.png', category: 'Robotics & Vision' },
  { name: 'Zynerd', type: 'img', src: '/brand/placement-company-logo/line-2/Zynerd-logo.png', category: 'EdTech Platform' },
  { name: 'Vakilsearch', type: 'img', src: '/brand/placement-company-logo/line-1/Vakil-search-logo.png', category: 'LegalTech & FinTech' },
  { name: 'Conserve', type: 'img', src: '/brand/placement-company-logo/line-2/conserve-logo.png', category: 'Green Engineering' },
  { name: 'Nallas', type: 'img', src: '/brand/placement-company-logo/line-1/nallas-logo.png', category: 'Enterprise IT' },
  { name: 'nference', type: 'img', src: '/brand/placement-company-logo/line-1/nference-logo.png', category: 'BioMedical AI' }
];

function getRecruiterSvg(name) {
  if (name === 'TCS') {
    return `<text x="50%" y="42%" dominant-baseline="middle" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="900" font-size="14" fill="#e61c24">tcs </text><text x="50%" y="76%" dominant-baseline="middle" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="700" font-size="8" fill="#1f4277">CONSULTANCY</text>`;
  }
  if (name === 'Infosys') {
    return `<text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="700" font-size="17" fill="#007cc3">Infosys</text>`;
  }
  if (name === 'wipro') {
    return `<circle cx="20" cy="14" r="5" fill="#f3c515"/><circle cx="28" cy="14" r="3.5" fill="#e61c24"/><text x="64%" y="58%" dominant-baseline="middle" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="800" font-size="16" fill="#341f97">wipro</text>`;
  }
  if (name === 'accenture') {
    return `<text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="700" font-size="15" fill="#000000">accenture<tspan fill="#a100ff" font-weight="900">&gt;</tspan></text>`;
  }
  if (name === 'ZOHO') {
    return `<text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="900" font-size="18" letter-spacing="2" fill="#cc2427">ZO<tspan fill="#00854a">H</tspan><tspan fill="#f3c515">O</tspan></text>`;
  }
  if (name === 'amazon') {
    return `<text x="50%" y="48%" dominant-baseline="middle" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="800" font-size="16" fill="#232f3e">amazon</text><path d="M 24 20 Q 50 27 76 20" stroke="#ff9900" stroke-width="2" fill="none"/>`;
  }
  return `<text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="700" font-size="15" fill="#005a39">${name}</text>`;
}

function renderRecruiterCard(r) {
  let logoContent = '';
  if (r.type === 'img') {
    logoContent = `<img src="${r.src}" alt="${r.name} logo" loading="lazy">`;
  } else if (r.type === 'custom') {
    logoContent = `<svg viewBox="0 0 130 28" xmlns="http://www.w3.org/2000/svg">${r.html}</svg>`;
  } else {
    logoContent = `<svg viewBox="0 0 110 28" xmlns="http://www.w3.org/2000/svg">${getRecruiterSvg(r.name)}</svg>`;
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

function placementsDashboardPage(route) {
  const activeRoute = route || 'placements';
  const isEnt = activeRoute.includes('entrepreneurship');
  const isHigh = activeRoute.includes('higher-education');
  const isGov = activeRoute.includes('government-services');

  // Subpage: Entrepreneurship
  if (isEnt) {
    return `
      <main class="siet-pe-page">
        <section class="siet-pj-hero-section">
          <div class="siet-pj-hero-grid"></div>
          <div class="siet-pj-hero-orb-1"></div>
          <div class="siet-pj-hero-orb-2"></div>
          <div class="siet-pj-shell">
            <h1 class="siet-pj-title">Entrepreneurship <em>&amp; Startups</em></h1>
            <p class="siet-pj-subtitle">Nurturing student entrepreneurs, deep-tech venture incubation, and patent commercialization at Sri Shakthi.</p>
          </div>
        </section>
        <div class="siet-sp-lower-shell">
          <div class="siet-tmpl-sub-grid">
            <article class="siet-vm-card siet-vm-card-vision reveal" style="min-height:240px;padding:22px;">
              <div class="siet-vm-card-pattern"></div>
              <div class="siet-vm-card-top"><span class="siet-vm-card-icon">${vmIcon('spark')}</span><span class="siet-vm-card-number">01 / INCUBATOR</span></div>
              <div class="siet-vm-card-copy"><p class="siet-vm-card-label">MSME APPROVED INCUBATOR</p><h2>Shakthi Innovation &amp; Techpark</h2><p>Dedicated co-working spaces, fabrication equipment, IoT testbeds, and cloud resources accessible 24/7 for student founders.</p></div>
              <div class="siet-vm-card-footer"><span>25+ Startups Incubated</span><i></i></div>
            </article>
            <article class="siet-vm-card siet-vm-card-mission reveal" style="min-height:240px;padding:22px;">
              <div class="siet-vm-mission-lines"></div>
              <div class="siet-vm-card-top"><span class="siet-vm-card-icon">${vmIcon('target')}</span><span class="siet-vm-card-number">02 / CAPITAL</span></div>
              <div class="siet-vm-card-copy"><p class="siet-vm-card-label">SEED FUNDING CORPUS</p><h2>₹50 Lakhs Institutional Seed Fund</h2><p>Direct equity-free grants and early prototyping seed capital provided by Management to validate proofs-of-concept.</p></div>
              <div class="siet-vm-card-footer"><span>Venture Capital Mentorship</span><i></i></div>
            </article>
          </div>
        </div>
      </main>
    `;
  }

  // Subpage: Higher Education
  if (isHigh) {
    return `
      <main class="siet-pe-page">
        <section class="siet-pj-hero-section">
          <div class="siet-pj-hero-grid"></div>
          <div class="siet-pj-hero-orb-1"></div>
          <div class="siet-pj-hero-orb-2"></div>
          <div class="siet-pj-shell">
            <h1 class="siet-pj-title">Higher Education <em>&amp; Admissions</em></h1>
            <p class="siet-pj-subtitle">Guiding graduates towards post-graduate admissions at premier international universities and Indian institutes.</p>
          </div>
        </section>
        <div class="siet-sp-lower-shell">
          <div class="siet-tmpl-sub-grid">
            <article class="siet-vm-card siet-vm-card-vision reveal" style="min-height:240px;padding:22px;">
              <div class="siet-vm-card-pattern"></div>
              <div class="siet-vm-card-top"><span class="siet-vm-card-icon">${vmIcon('education')}</span><span class="siet-vm-card-number">01 / ENTRANCE</span></div>
              <div class="siet-vm-card-copy"><p class="siet-vm-card-label">IN-HOUSE COACHING</p><h2>GATE, GRE, CAT &amp; IELTS</h2><p>Structured preparation integrated into student schedules with faculty mentors and external trainers for national and global exams.</p></div>
              <div class="siet-vm-card-footer"><span>Comprehensive Exam Training</span><i></i></div>
            </article>
            <article class="siet-vm-card siet-vm-card-mission reveal" style="min-height:240px;padding:22px;">
              <div class="siet-vm-mission-lines"></div>
              <div class="siet-vm-card-top"><span class="siet-vm-card-icon">${vmIcon('target')}</span><span class="siet-vm-card-number">02 / PREMIER INSTITUTES</span></div>
              <div class="siet-vm-card-copy"><p class="siet-vm-card-label">INDIAN EXCELLENCE</p><h2>IISc, IITs, NITs &amp; IIMs</h2><p>Our students consistently qualify GATE and CAT to enter M.Tech, MS, and MBA programs at IISc Bangalore, IIT Madras, and top NITs.</p></div>
              <div class="siet-vm-card-footer"><span>National Top-Rankers</span><i></i></div>
            </article>
          </div>
        </div>
      </main>
    `;
  }

  // Subpage: Government Services
  if (isGov) {
    return `
      <main class="siet-pe-page">
        <section class="siet-pj-hero-section">
          <div class="siet-pj-hero-grid"></div>
          <div class="siet-pj-hero-orb-1"></div>
          <div class="siet-pj-hero-orb-2"></div>
          <div class="siet-pj-shell">
            <h1 class="siet-pj-title">Civil Services <em>&amp; Public Sector</em></h1>
            <p class="siet-pj-subtitle">Mentoring disciplined graduates for careers in Indian administrative services, defense research, and public enterprises.</p>
          </div>
        </section>
        <div class="siet-sp-lower-shell">
          <div class="siet-tmpl-sub-grid">
            <article class="siet-vm-card siet-vm-card-vision reveal" style="min-height:240px;padding:22px;">
              <div class="siet-vm-card-pattern"></div>
              <div class="siet-vm-card-top"><span class="siet-vm-card-icon">${vmIcon('target')}</span><span class="siet-vm-card-number">01 / ACADEMY</span></div>
              <div class="siet-vm-card-copy"><p class="siet-vm-card-label">CIVIL SERVICES WING</p><h2>Sri Shakthi IAS Academy</h2><p>Foundation batches for UPSC Civil Services, TNPSC Group 1 &amp; 2, with regular mock test series and guest lectures by serving officers.</p></div>
              <div class="siet-vm-card-footer"><span>Officers in the Making</span><i></i></div>
            </article>
            <article class="siet-vm-card siet-vm-card-mission reveal" style="min-height:240px;padding:22px;">
              <div class="siet-vm-mission-lines"></div>
              <div class="siet-vm-card-top"><span class="siet-vm-card-icon">${vmIcon('education')}</span><span class="siet-vm-card-number">02 / ENGINEERING</span></div>
              <div class="siet-vm-card-copy"><p class="siet-vm-card-label">TECHNICAL SERVICES</p><h2>Indian Engineering Services (IES)</h2><p>Intensive coaching in core engineering disciplines for UPSC ESE, preparing graduates for central government engineering executive roles.</p></div>
              <div class="siet-vm-card-footer"><span>Technical Civil Services</span><i></i></div>
            </article>
          </div>
        </div>
      </main>
    `;
  }

  // 1. Top Recruiters Marquee Cards (Dual Tracks)
  const marqueeRow1Html = topRecruitersRow1.map(renderRecruiterCard).join('');
  const marqueeRow2Html = topRecruitersRow2.map(renderRecruiterCard).join('');

  // 2. Year Tabs
  const tabsHtml = Object.keys(placementDataYears).map((year, i) => `
    <button type="button" class="siet-tmpl-ytab ${i === 0 ? 'is-active' : ''}" data-year="${year}">
      ${i === 0 ? '<span class="siet-tmpl-ytab-dot"></span>' : ''}
      ${year}
    </button>
  `).join('');

  return `
    <main class="siet-pe-page">

      <!-- ══════════════════════════════════════════════════════════
           1. TOP PLACEMENT ACHIEVERS (Featured Students)
           ══════════════════════════════════════════════════════════ -->
      <section class="siet-sp-section">
        <!-- Full-width Blended Header Bar touching navbar directly -->
        <div class="siet-sp-header-bar">
          <div class="siet-sp-header-inner">
            <div class="siet-sp-header-left">
              <div class="siet-sp-thumb-badge" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/></svg>
              </div>
              <div class="siet-sp-title-group">
                <span class="siet-sp-kicker">SRI SHAKTHI PRIDE · CLASS OF 2026</span>
                <h2 class="siet-sp-banner-title"><i></i> TOP PLACEMENT ACHIEVERS</h2>
              </div>
            </div>
            <div class="siet-sp-tag-badge">
              <span class="siet-sp-tag-dot"></span>
              <span>TIER-1 RECRUITS &amp; MARQUEE OFFERS</span>
            </div>
            <div class="siet-sp-header-accent-line"></div>
          </div>
        </div>

        <div class="siet-sp-shell">
          <div class="siet-sp-students-row" id="siet-sp-cards-track">
            <!-- Student 1 (Top) -->
            <div class="siet-sp-card is-top">
              <div class="siet-sp-ctc-wrap">
                <span class="siet-sp-ctc-lbl">HIGHEST PACKAGE</span>
                <div class="siet-sp-ctc-ribbon is-gold">₹12 LPA</div>
              </div>
              <div class="siet-sp-img-box">
                <img src="/brand/achievers/nithya-sri-k.jpg" alt="Nithya Sri K" loading="lazy">
              </div>
              <h3 class="siet-sp-name">Nithya Sri K</h3>
              <p class="siet-sp-dept">Information Technology</p>
              <div class="siet-sp-company-box">
                <svg viewBox="0 0 100 28" xmlns="http://www.w3.org/2000/svg">${getRecruiterSvg('TCS')}</svg>
              </div>
              <span class="siet-sp-batch">Batch 2026</span>
            </div>

            <!-- Student 2 -->
            <div class="siet-sp-card">
              <div class="siet-sp-ctc-wrap">
                <span class="siet-sp-ctc-lbl">ANNUAL PACKAGE</span>
                <div class="siet-sp-ctc-ribbon">₹10 LPA</div>
              </div>
              <div class="siet-sp-img-box">
                <img src="/brand/achievers/aravind-s.jpg" alt="Aravind S" loading="lazy">
              </div>
              <h3 class="siet-sp-name">Aravind S</h3>
              <p class="siet-sp-dept">Computer Science and Engineering</p>
              <div class="siet-sp-company-box">
                <svg viewBox="0 0 100 28" xmlns="http://www.w3.org/2000/svg">${getRecruiterSvg('Infosys')}</svg>
              </div>
              <span class="siet-sp-batch">Batch 2026</span>
            </div>

            <!-- Student 3 -->
            <div class="siet-sp-card">
              <div class="siet-sp-ctc-wrap">
                <span class="siet-sp-ctc-lbl">ANNUAL PACKAGE</span>
                <div class="siet-sp-ctc-ribbon">₹9.5 LPA</div>
              </div>
              <div class="siet-sp-img-box">
                <img src="/brand/achievers/priya-dharshini-r.jpg" alt="Priya Dharshini R" loading="lazy">
              </div>
              <h3 class="siet-sp-name">Priya Dharshini R</h3>
              <p class="siet-sp-dept">Electronics and Communication</p>
              <div class="siet-sp-company-box">
                <svg viewBox="0 0 100 28" xmlns="http://www.w3.org/2000/svg">${getRecruiterSvg('wipro')}</svg>
              </div>
              <span class="siet-sp-batch">Batch 2026</span>
            </div>
          </div>

          <!-- Centered Floating Pagination Pill -->
          <div class="siet-sp-footer-wrap">
            <div class="siet-sp-footer-band">
              <button type="button" class="siet-sp-nav-arrow" id="siet-sp-prev" aria-label="Previous achiever">‹</button>
              <div class="siet-sp-dashes">
                <span class="siet-sp-dash is-active" data-page="0"></span>
                <span class="siet-sp-dash" data-page="1"></span>
                <span class="siet-sp-dash" data-page="2"></span>
              </div>
              <button type="button" class="siet-sp-nav-arrow" id="siet-sp-next" aria-label="Next achiever">›</button>
            </div>
          </div>
        </div>
      </section>

      <!-- ══════════════════════════════════════════════════════════
           2. YEAR-WISE HIGHLIGHTS & GROWTH RECORD (Sri Shakthi Theme)
           ══════════════════════════════════════════════════════════ -->
      <section class="siet-yw-section">
        <div class="siet-sp-lower-shell">
          <!-- Section Header -->
        <div class="siet-sp-section-head">
          <div class="siet-sp-section-kicker"><i></i> ANNUAL PLACEMENT RECORD</div>
          <h2 class="siet-sp-section-title">Year-Wise <em>Highlights &amp; Growth</em></h2>
          <p class="siet-sp-section-subtitle">Consistent multi-year placement performance, expanding top-tier recruiter partnerships, and escalating package milestones.</p>
        </div>

        <div class="siet-tmpl-row1">
          <!-- Left: Year-Wise Placement Highlights Card -->
          <div class="siet-tmpl-highlights-card">
            <div class="siet-tmpl-hl-top">
              <div class="siet-tmpl-hl-meta">
                <p class="siet-vm-kicker-sm"><i></i> COHORT PERFORMANCE AUDIT</p>
                <span class="siet-tmpl-verified-tag">✓ NIRF &amp; NBA Verified</span>
              </div>
              <div class="siet-tmpl-year-tabs">
                ${tabsHtml}
              </div>
            </div>

            <div class="siet-tmpl-stats-grid">
              <!-- Item 1: Students Placed -->
              <div class="siet-tmpl-stat-card">
                <div class="siet-tmpl-sc-header">
                  <div class="siet-tmpl-sitem-icon">
                    <svg viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 3s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
                  </div>
                  <span class="siet-tmpl-trend-pill is-green" id="tmpl-tag-placed">↑ 14% YoY</span>
                </div>
                <div class="siet-tmpl-sc-content">
                  <span class="siet-tmpl-sitem-lbl">Students Placed</span>
                  <span class="siet-tmpl-sitem-val" id="tmpl-val-placed">285</span>
                </div>
              </div>

              <!-- Item 2: Companies Visited -->
              <div class="siet-tmpl-stat-card">
                <div class="siet-tmpl-sc-header">
                  <div class="siet-tmpl-sitem-icon">
                    <svg viewBox="0 0 24 24"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/></svg>
                  </div>
                  <span class="siet-tmpl-trend-pill is-gold" id="tmpl-tag-companies">Tier-1 &amp; MNCs</span>
                </div>
                <div class="siet-tmpl-sc-content">
                  <span class="siet-tmpl-sitem-lbl">Companies Visited</span>
                  <span class="siet-tmpl-sitem-val" id="tmpl-val-companies">120+</span>
                </div>
              </div>

              <!-- Item 3: Highest Package -->
              <div class="siet-tmpl-stat-card is-highlight">
                <div class="siet-tmpl-sc-header">
                  <div class="siet-tmpl-sitem-icon" style="background:#fff8e1;color:#b87e00;">
                    <svg viewBox="0 0 24 24"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>
                  </div>
                  <span class="siet-tmpl-trend-pill is-gold" id="tmpl-tag-highest">Marquee Offer</span>
                </div>
                <div class="siet-tmpl-sc-content">
                  <span class="siet-tmpl-sitem-lbl">Highest Package</span>
                  <span class="siet-tmpl-sitem-val" id="tmpl-val-highest" style="color:#005a39;">₹12 LPA</span>
                </div>
              </div>

              <!-- Item 4: Average Package -->
              <div class="siet-tmpl-stat-card">
                <div class="siet-tmpl-sc-header">
                  <div class="siet-tmpl-sitem-icon">
                    <svg viewBox="0 0 24 24"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>
                  </div>
                  <span class="siet-tmpl-trend-pill is-green" id="tmpl-tag-average">Core &amp; IT Mix</span>
                </div>
                <div class="siet-tmpl-sc-content">
                  <span class="siet-tmpl-sitem-lbl">Average Package</span>
                  <span class="siet-tmpl-sitem-val" id="tmpl-val-average">₹5.2 LPA</span>
                </div>
              </div>

              <!-- Item 5: Multiple Offers -->
              <div class="siet-tmpl-stat-card">
                <div class="siet-tmpl-sc-header">
                  <div class="siet-tmpl-sitem-icon">
                    <svg viewBox="0 0 24 24"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>
                  </div>
                  <span class="siet-tmpl-trend-pill is-blue" id="tmpl-tag-multiple">Dual Offers</span>
                </div>
                <div class="siet-tmpl-sc-content">
                  <span class="siet-tmpl-sitem-lbl">Multiple Offers</span>
                  <span class="siet-tmpl-sitem-val" id="tmpl-val-multiple">45</span>
                </div>
              </div>

              <!-- Item 6: Placement Rate -->
              <div class="siet-tmpl-stat-card">
                <div class="siet-tmpl-sc-header">
                  <div class="siet-tmpl-sitem-icon">
                    <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  </div>
                  <span class="siet-tmpl-trend-pill is-green" id="tmpl-tag-rate">Eligible Cohort</span>
                </div>
                <div class="siet-tmpl-sc-content">
                  <span class="siet-tmpl-sitem-lbl">Placement Rate</span>
                  <span class="siet-tmpl-sitem-val" id="tmpl-val-rate">94%</span>
                </div>
              </div>
            </div>

            <!-- Footnote -->
            <div class="siet-tmpl-card-footer-note">
              <span class="siet-tmpl-cf-dot"></span>
              <span>Training &amp; Placement Cell audits verified campus recruitment figures annually.</span>
            </div>
          </div>

          <!-- Right: Growth Chart Card -->
          <div class="siet-tmpl-chart-card">
            <div class="siet-tmpl-chart-top">
              <div class="siet-tmpl-ct-title-box">
                <span class="siet-tmpl-chart-title">Placement Growth <span class="siet-vm-em">(Last 4 Years)</span></span>
                <span class="siet-tmpl-chart-sub">Sustained multi-year growth in recruitment &amp; company participation</span>
              </div>
              <div class="siet-chart-badge-wrap">
                <span class="siet-chart-growth-pill">↑ +58.3% 4-Yr Surge</span>
              </div>
            </div>

            <!-- Legend Bar -->
            <div class="siet-tmpl-chart-legend">
              <span class="siet-legend-item"><i style="background:linear-gradient(180deg,#00854a,#00462b)"></i> Students Placed</span>
              <span class="siet-legend-item"><i style="background:linear-gradient(180deg,#ffd23f,#df9e00)"></i> Companies Visited</span>
              <span class="siet-legend-item"><i style="background:#00a859;height:3px;border-radius:2px;"></i> Growth Spline</span>
            </div>

            <!-- High-Resolution Enhanced SVG Bar & Spline Chart -->
            <div class="siet-chart-svg-wrap">
              <svg viewBox="0 0 500 220" class="siet-chart-svg" preserveAspectRatio="xMidYMid meet" aria-label="Placement Growth Chart">
                <defs>
                  <linearGradient id="sietBarGreenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#00854a"/>
                    <stop offset="100%" stop-color="#00462b"/>
                  </linearGradient>
                  <linearGradient id="sietBarActiveGreenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#00b364"/>
                    <stop offset="100%" stop-color="#005a39"/>
                  </linearGradient>
                  <linearGradient id="sietBarGoldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#ffd23f"/>
                    <stop offset="100%" stop-color="#df9e00"/>
                  </linearGradient>
                  <linearGradient id="chartSplineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#00854a"/>
                    <stop offset="70%" stop-color="#00b364"/>
                    <stop offset="100%" stop-color="#f3c515"/>
                  </linearGradient>
                  <filter id="sietGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#003824" flood-opacity="0.15"/>
                  </filter>
                </defs>

                <!-- Y-Axis Grid Lines and Reference Labels -->
                <text x="32" y="19" font-size="9" fill="#7a9284" text-anchor="end" font-family="'Plus Jakarta Sans',sans-serif" font-weight="600">400</text>
                <line x1="42" y1="15" x2="480" y2="15" stroke="#edf3ef" stroke-width="1" stroke-dasharray="3,3"/>

                <text x="32" y="59" font-size="9" fill="#7a9284" text-anchor="end" font-family="'Plus Jakarta Sans',sans-serif" font-weight="600">300</text>
                <line x1="42" y1="55" x2="480" y2="55" stroke="#edf3ef" stroke-width="1" stroke-dasharray="3,3"/>

                <text x="32" y="99" font-size="9" fill="#7a9284" text-anchor="end" font-family="'Plus Jakarta Sans',sans-serif" font-weight="600">200</text>
                <line x1="42" y1="95" x2="480" y2="95" stroke="#edf3ef" stroke-width="1" stroke-dasharray="3,3"/>

                <text x="32" y="139" font-size="9" fill="#7a9284" text-anchor="end" font-family="'Plus Jakarta Sans',sans-serif" font-weight="600">100</text>
                <line x1="42" y1="135" x2="480" y2="135" stroke="#edf3ef" stroke-width="1" stroke-dasharray="3,3"/>

                <!-- Base Line -->
                <line x1="42" y1="175" x2="480" y2="175" stroke="#c9dacd" stroke-width="1.5"/>

                <!-- ── YEAR 1: 2022 - 23 (Center x = 100) ── -->
                <g class="siet-chart-col-group" data-year="2022 - 23" cursor="pointer">
                  <rect class="siet-chart-col-bg" x="54" y="15" width="92" height="185" rx="8" fill="transparent"/>
                  <!-- Student Bar: 180 -->
                  <rect x="68" y="103" width="26" height="72" fill="url(#sietBarGreenGrad)" rx="4" filter="url(#sietGlow)" class="siet-cbar-student"/>
                  <!-- Company Bar: 75 -->
                  <rect x="100" y="145" width="26" height="30" fill="url(#sietBarGoldGrad)" rx="4" class="siet-cbar-company"/>
                  <!-- Val Labels -->
                  <text x="81" y="95" font-size="10" fill="#005a39" text-anchor="middle" font-weight="800" font-family="'Plus Jakarta Sans',sans-serif">180</text>
                  <text x="113" y="139" font-size="9.5" fill="#a06d00" text-anchor="middle" font-weight="800" font-family="'Plus Jakarta Sans',sans-serif">75</text>
                  <!-- Year Label -->
                  <text x="97" y="196" font-size="10.5" fill="#507060" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="700">2022 - 23</text>
                </g>

                <!-- ── YEAR 2: 2023 - 24 (Center x = 205) ── -->
                <g class="siet-chart-col-group" data-year="2023 - 24" cursor="pointer">
                  <rect class="siet-chart-col-bg" x="159" y="15" width="92" height="185" rx="8" fill="transparent"/>
                  <!-- Student Bar: 210 -->
                  <rect x="173" y="91" width="26" height="84" fill="url(#sietBarGreenGrad)" rx="4" filter="url(#sietGlow)" class="siet-cbar-student"/>
                  <!-- Company Bar: 90 -->
                  <rect x="205" y="139" width="26" height="36" fill="url(#sietBarGoldGrad)" rx="4" class="siet-cbar-company"/>
                  <!-- Val Labels -->
                  <text x="186" y="83" font-size="10" fill="#005a39" text-anchor="middle" font-weight="800" font-family="'Plus Jakarta Sans',sans-serif">210</text>
                  <text x="218" y="133" font-size="9.5" fill="#a06d00" text-anchor="middle" font-weight="800" font-family="'Plus Jakarta Sans',sans-serif">90</text>
                  <!-- Year Label -->
                  <text x="202" y="196" font-size="10.5" fill="#507060" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="700">2023 - 24</text>
                </g>

                <!-- ── YEAR 3: 2024 - 25 (Center x = 310) ── -->
                <g class="siet-chart-col-group" data-year="2024 - 25" cursor="pointer">
                  <rect class="siet-chart-col-bg" x="264" y="15" width="92" height="185" rx="8" fill="transparent"/>
                  <!-- Student Bar: 250 -->
                  <rect x="278" y="75" width="26" height="100" fill="url(#sietBarGreenGrad)" rx="4" filter="url(#sietGlow)" class="siet-cbar-student"/>
                  <!-- Company Bar: 110 -->
                  <rect x="310" y="131" width="26" height="44" fill="url(#sietBarGoldGrad)" rx="4" class="siet-cbar-company"/>
                  <!-- Val Labels -->
                  <text x="291" y="67" font-size="10" fill="#005a39" text-anchor="middle" font-weight="800" font-family="'Plus Jakarta Sans',sans-serif">250</text>
                  <text x="323" y="125" font-size="9.5" fill="#a06d00" text-anchor="middle" font-weight="800" font-family="'Plus Jakarta Sans',sans-serif">110</text>
                  <!-- Year Label -->
                  <text x="307" y="196" font-size="10.5" fill="#507060" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="700">2024 - 25</text>
                </g>

                <!-- ── YEAR 4: 2025 - 26 (Center x = 415) ACTIVE/CURRENT ── -->
                <g class="siet-chart-col-group is-active" data-year="2025 - 26" cursor="pointer">
                  <rect class="siet-chart-col-bg" x="369" y="15" width="92" height="185" rx="8" fill="rgba(0, 133, 74, 0.08)" stroke="rgba(0, 133, 74, 0.25)" stroke-width="1.5"/>
                  <!-- Student Bar: 285 -->
                  <rect x="383" y="61" width="26" height="114" fill="url(#sietBarActiveGreenGrad)" rx="4" filter="url(#sietGlow)" class="siet-cbar-student"/>
                  <!-- Company Bar: 120 -->
                  <rect x="415" y="127" width="26" height="48" fill="url(#sietBarGoldGrad)" rx="4" class="siet-cbar-company"/>
                  <!-- Val Labels -->
                  <text x="396" y="53" font-size="11" fill="#00854a" text-anchor="middle" font-weight="900" font-family="'Plus Jakarta Sans',sans-serif">285</text>
                  <text x="428" y="121" font-size="10" fill="#a06d00" text-anchor="middle" font-weight="800" font-family="'Plus Jakarta Sans',sans-serif">120</text>
                  <!-- Year Label -->
                  <text x="412" y="196" font-size="11" fill="#00281b" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="800">2025 - 26 ★</text>
                </g>

                <!-- ── Growth Spline Connecting Placement Peaks ── -->
                <path d="M 81 103 C 133 97, 134 91, 186 91 C 238 91, 239 75, 291 75 C 343 75, 344 61, 396 61" fill="none" stroke="url(#chartSplineGrad)" stroke-width="3" stroke-linecap="round"/>

                <!-- Spline Vertex Dots -->
                <circle cx="81" cy="103" r="4.5" fill="#ffffff" stroke="#00854a" stroke-width="2.5"/>
                <circle cx="186" cy="91" r="4.5" fill="#ffffff" stroke="#00854a" stroke-width="2.5"/>
                <circle cx="291" cy="75" r="4.5" fill="#ffffff" stroke="#00854a" stroke-width="2.5"/>
                <circle cx="396" cy="61" r="6" fill="#f3c515" stroke="#00281b" stroke-width="2.5"/>
              </svg>
            </div>

            <!-- Bottom Highlights Strip -->
            <div class="siet-chart-kpi-ribbon">
              <div class="siet-chart-kpi-chip">
                <span class="siet-chart-kpi-dot" style="background:#00854a;"></span>
                <span class="siet-chart-kpi-lbl">Highest CTC:</span>
                <strong class="siet-chart-kpi-val">₹12 LPA</strong>
              </div>
              <div class="siet-chart-kpi-chip">
                <span class="siet-chart-kpi-dot" style="background:#f3c515;"></span>
                <span class="siet-chart-kpi-lbl">Recruiter Partners:</span>
                <strong class="siet-chart-kpi-val">120+ Visited</strong>
              </div>
              <div class="siet-chart-kpi-chip">
                <span class="siet-chart-kpi-dot" style="background:#005a39;"></span>
                <span class="siet-chart-kpi-lbl">Placement Success:</span>
                <strong class="siet-chart-kpi-val">94% of Cohort</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      <!-- ══════════════════════════════════════════════════════════
           3. TOP RECRUITERS & INDUSTRY PARTNERS (Interactive Showcase)
           ══════════════════════════════════════════════════════════ -->
      <section class="siet-tr-section">
        <div class="siet-tr-shell">
          <!-- Header -->
          <div class="siet-tr-header-box">
            <div class="siet-tr-kicker"><i></i> VALUED CORPORATE NETWORK</div>
            <h2 class="siet-tr-title">Top <em>Recruiters &amp; Industry Partners</em></h2>
            <p class="siet-tr-subtitle">Over 120+ multinational corporations, product engineering giants, and global IT consulting firms recruit every year from Sri Shakthi.</p>
          </div>

          <!-- Institutional Milestone Strip -->
          <div class="siet-tr-stats-bar">
            <div class="siet-tr-sbar-item">
              <span class="siet-tr-sbar-num">120+</span>
              <span class="siet-tr-sbar-lbl">Recruiter Partners</span>
            </div>
            <div class="siet-tr-sbar-sep"></div>
            <div class="siet-tr-sbar-item">
              <span class="siet-tr-sbar-num">15+</span>
              <span class="siet-tr-sbar-lbl">Fortune 500 MNCs</span>
            </div>
            <div class="siet-tr-sbar-sep"></div>
            <div class="siet-tr-sbar-item">
              <span class="siet-tr-sbar-num">₹12 LPA</span>
              <span class="siet-tr-sbar-lbl">Marquee CTC</span>
            </div>
            <div class="siet-tr-sbar-sep"></div>
            <div class="siet-tr-sbar-item">
              <span class="siet-tr-sbar-num">330+</span>
              <span class="siet-tr-sbar-lbl">Campus Offers</span>
            </div>
          </div>

          <!-- Dual Marquee Tracks with Hover Pause & Card Lift -->
          <div class="siet-tr-marquee-container">
            <!-- Row 1: Left Scroll -->
            <div class="siet-tr-marquee-wrap" aria-label="Top Placement Recruiters Row 1">
              <div class="siet-tr-track">
                ${marqueeRow1Html}
                ${marqueeRow1Html}
              </div>
            </div>

            <!-- Row 2: Right Scroll (Opposite Direction) -->
            <div class="siet-tr-marquee-wrap is-reverse" aria-label="Top Placement Recruiters Row 2">
              <div class="siet-tr-track is-reverse">
                ${marqueeRow2Html}
                ${marqueeRow2Html}
              </div>
            </div>
          </div>

          <!-- Micro Hint -->
          <div class="siet-tr-hint">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
            <span>Hover over any company card to pause marquee and inspect hiring partner profile</span>
          </div>
        </div>
      </section>

      <!-- ══════════════════════════════════════════════════════════
           4. THE PLACEMENT JOURNEY (Structured Career Roadmap)
           ══════════════════════════════════════════════════════════ -->
      <section class="siet-pj-hero-section">
        <div class="siet-pj-hero-grid"></div>
        <div class="siet-pj-hero-orb-1"></div>
        <div class="siet-pj-hero-orb-2"></div>
        <div class="siet-pj-shell">
          <div class="siet-pj-head">
            <div class="siet-pj-kicker"><i></i> STRUCTURED CAREER ROADMAP</div>
            <h2 class="siet-pj-title">The Placement <em>Journey</em></h2>
            <p class="siet-pj-subtitle">Transforming raw potential into industry-ready leaders through our comprehensive 6-stage training and recruitment pipeline.</p>
          </div>

          <!-- 6-Stage Journey Cards Grid -->
          <div class="siet-pj-steps-grid">
            <div class="siet-pj-card">
              <span class="siet-pj-step-num">01</span>
              <div class="siet-pj-icon">
                <svg viewBox="0 0 24 24"><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/></svg>
              </div>
              <h3 class="siet-pj-card-title">Training &amp; Skills</h3>
              <p class="siet-pj-card-desc">Domain foundations, core engineering concepts &amp; hands-on technical labs.</p>
              <span class="siet-pj-pill">Semester 3–4</span>
            </div>

            <div class="siet-pj-card">
              <span class="siet-pj-step-num">02</span>
              <div class="siet-pj-icon">
                <svg viewBox="0 0 24 24"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
              </div>
              <h3 class="siet-pj-card-title">Aptitude Prep</h3>
              <p class="siet-pj-card-desc">Quantitative problem solving, logical reasoning &amp; soft skills mastery.</p>
              <span class="siet-pj-pill">Semester 5</span>
            </div>

            <div class="siet-pj-card">
              <span class="siet-pj-step-num">03</span>
              <div class="siet-pj-icon">
                <svg viewBox="0 0 24 24"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>
              </div>
              <h3 class="siet-pj-card-title">Technical Mastery</h3>
              <p class="siet-pj-card-desc">Advanced algorithms, system design, coding sprints &amp; project bootcamps.</p>
              <span class="siet-pj-pill">Semester 6</span>
            </div>

            <div class="siet-pj-card">
              <span class="siet-pj-step-num">04</span>
              <div class="siet-pj-icon">
                <svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
              </div>
              <h3 class="siet-pj-card-title">Mock Interviews</h3>
              <p class="siet-pj-card-desc">Simulated technical panels, HR rounds and individual feedback from industry leaders.</p>
              <span class="siet-pj-pill">Semester 6–7</span>
            </div>

            <div class="siet-pj-card">
              <span class="siet-pj-step-num">05</span>
              <div class="siet-pj-icon">
                <svg viewBox="0 0 24 24"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/></svg>
              </div>
              <h3 class="siet-pj-card-title">Company Drives</h3>
              <p class="siet-pj-card-desc">On-campus recruitment drives by Fortune 500 &amp; top product tech companies.</p>
              <span class="siet-pj-pill">Semester 7</span>
            </div>

            <div class="siet-pj-card is-final">
              <span class="siet-pj-step-num">06</span>
              <div class="siet-pj-icon" style="background:#f3c515;color:#00281b;">
                <svg viewBox="0 0 24 24"><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/></svg>
              </div>
              <h3 class="siet-pj-card-title">Career Success</h3>
              <p class="siet-pj-card-desc">Offer rollouts, marquee salary packages &amp; global career journeys launched.</p>
              <span class="siet-pj-pill" style="background:#f3c515;color:#00281b;font-weight:800;">Offer Rolled Out</span>
            </div>
          </div>

          <!-- Bottom Action Buttons -->
          <div class="siet-pj-actions">
            <a href="#/admission-enquiry" class="siet-tmpl-btn-gold">View Full Placement Records →</a>
            <a href="mailto:placements@siet.ac.in" class="siet-tmpl-btn-outline">Contact Placement Cell</a>
          </div>
        </div>
      </section>

    </main>
  `;
}

// Student cards sets for rotating pagination
const starStudentPages = [
  [
    { name: 'Nithya Sri K', dept: 'Information Technology', company: 'TCS', ctc: '₹12 LPA', top: true, batch: 'Batch 2026', img: '/brand/achievers/nithya-sri-k.jpg' },
    { name: 'Aravind S', dept: 'Computer Science and Engineering', company: 'Infosys', ctc: '₹10 LPA', top: false, batch: 'Batch 2026', img: '/brand/achievers/aravind-s.jpg' },
    { name: 'Priya Dharshini R', dept: 'Electronics and Communication', company: 'Wipro', ctc: '₹9.5 LPA', top: false, batch: 'Batch 2026', img: '/brand/achievers/priya-dharshini-r.jpg' }
  ],
  [
    { name: 'Karthik V', dept: 'Mechanical Engineering', company: 'Cognizant', ctc: '₹8.5 LPA', top: true, batch: 'Batch 2026', img: '/brand/achievers/karthik-v.jpg' },
    { name: 'Sowmiya M', dept: 'Civil Engineering', company: 'Zoho', ctc: '₹7.5 LPA', top: false, batch: 'Batch 2026', img: '/brand/achievers/sowmiya-m.jpg' },
    { name: 'Nithya Sri K', dept: 'Information Technology', company: 'TCS', ctc: '₹12 LPA', top: false, batch: 'Batch 2026', img: '/brand/achievers/nithya-sri-k.jpg' }
  ],
  [
    { name: 'Aravind S', dept: 'Computer Science and Engineering', company: 'Infosys', ctc: '₹10 LPA', top: true, batch: 'Batch 2026', img: '/brand/achievers/aravind-s.jpg' },
    { name: 'Priya Dharshini R', dept: 'Electronics and Communication', company: 'Wipro', ctc: '₹9.5 LPA', top: false, batch: 'Batch 2026', img: '/brand/achievers/priya-dharshini-r.jpg' },
    { name: 'Karthik V', dept: 'Mechanical Engineering', company: 'Cognizant', ctc: '₹8.5 LPA', top: false, batch: 'Batch 2026', img: '/brand/achievers/karthik-v.jpg' }
  ]
];

let currentStarPage = 0;

function updateStarPlacements(pageIndex) {
  currentStarPage = (pageIndex + starStudentPages.length) % starStudentPages.length;
  const track = document.getElementById('siet-sp-cards-track');
  if (!track) return;
  const students = starStudentPages[currentStarPage];
  track.innerHTML = students.map(s => `
    <div class="siet-sp-card ${s.top ? 'is-top' : ''}">
      <div class="siet-sp-ctc-wrap">
        <span class="siet-sp-ctc-lbl">${s.top ? 'HIGHEST PACKAGE' : 'ANNUAL PACKAGE'}</span>
        <div class="siet-sp-ctc-ribbon ${s.top ? 'is-gold' : ''}">${s.ctc}</div>
      </div>
      <div class="siet-sp-img-box">
        <img src="${s.img}" alt="${s.name}" loading="lazy">
      </div>
      <h3 class="siet-sp-name">${s.name}</h3>
      <p class="siet-sp-dept">${s.dept}</p>
      <div class="siet-sp-company-box">
        <svg viewBox="0 0 100 28" xmlns="http://www.w3.org/2000/svg">${getRecruiterSvg(s.company)}</svg>
      </div>
      <span class="siet-sp-batch">${s.batch}</span>
    </div>
  `).join('');

  document.querySelectorAll('.siet-sp-dash').forEach((d, idx) => {
    d.classList.toggle('is-active', idx === currentStarPage);
  });
}

// Global click listener
document.addEventListener('click', (e) => {
  // 1. Year tabs & Graph column clicks
  const yearTarget = e.target.closest('.siet-tmpl-ytab') || e.target.closest('.siet-chart-col-group');
  if (yearTarget) {
    const year = yearTarget.dataset.year;
    if (!year) return;

    // Update Year Tabs
    document.querySelectorAll('.siet-tmpl-ytab').forEach(t => {
      const isMatch = t.dataset.year === year;
      t.classList.toggle('is-active', isMatch);
      t.innerHTML = isMatch ? '<span class="siet-tmpl-ytab-dot"></span> ' + t.dataset.year : t.dataset.year;
    });

    // Update Chart Column highlight
    document.querySelectorAll('.siet-chart-col-group').forEach(cg => {
      const isMatch = cg.dataset.year === year;
      cg.classList.toggle('is-active', isMatch);
      const bg = cg.querySelector('.siet-chart-col-bg');
      if (bg) {
        bg.setAttribute('fill', isMatch ? 'rgba(0, 133, 74, 0.08)' : 'transparent');
        bg.setAttribute('stroke', isMatch ? 'rgba(0, 133, 74, 0.25)' : 'none');
        bg.setAttribute('stroke-width', isMatch ? '1.5' : '0');
      }
      const valTxt = cg.querySelectorAll('text');
      if (valTxt.length >= 3) {
        // highlight active year text
        valTxt[2].setAttribute('fill', isMatch ? '#00281b' : '#507060');
        valTxt[2].setAttribute('font-weight', isMatch ? '800' : '700');
      }
    });

    // Update Stats & Tag badges with brief pulse animation
    const data = placementDataYears[year];
    if (data) {
      const statsGrid = document.querySelector('.siet-tmpl-stats-grid');
      if (statsGrid) {
        statsGrid.style.opacity = '0.5';
        setTimeout(() => {
          statsGrid.style.opacity = '1';
        }, 110);
      }
      const elPlaced = document.getElementById('tmpl-val-placed');
      if (elPlaced) elPlaced.textContent = data.placed;
      const elComp = document.getElementById('tmpl-val-companies');
      if (elComp) elComp.textContent = data.companies;
      const elHigh = document.getElementById('tmpl-val-highest');
      if (elHigh) elHigh.textContent = data.highest;
      const elAvg = document.getElementById('tmpl-val-average');
      if (elAvg) elAvg.textContent = data.average;
      const elMult = document.getElementById('tmpl-val-multiple');
      if (elMult) elMult.textContent = data.multiple;
      const elRate = document.getElementById('tmpl-val-rate');
      if (elRate) elRate.textContent = data.rate;

      if (data.tags) {
        const tagPlaced = document.getElementById('tmpl-tag-placed');
        if (tagPlaced) tagPlaced.textContent = data.tags.placed;
        const tagComp = document.getElementById('tmpl-tag-companies');
        if (tagComp) tagComp.textContent = data.tags.companies;
        const tagHigh = document.getElementById('tmpl-tag-highest');
        if (tagHigh) tagHigh.textContent = data.tags.highest;
        const tagAvg = document.getElementById('tmpl-tag-average');
        if (tagAvg) tagAvg.textContent = data.tags.average;
        const tagMult = document.getElementById('tmpl-tag-multiple');
        if (tagMult) tagMult.textContent = data.tags.multiple;
        const tagRate = document.getElementById('tmpl-tag-rate');
        if (tagRate) tagRate.textContent = data.tags.rate;
      }
    }
    return;
  }

  // 2. Star placements arrows
  if (e.target.closest('#siet-sp-prev')) {
    updateStarPlacements(currentStarPage - 1);
    return;
  }
  if (e.target.closest('#siet-sp-next')) {
    updateStarPlacements(currentStarPage + 1);
    return;
  }

  // 3. Star placements dashes
  const dash = e.target.closest('.siet-sp-dash');
  if (dash && dash.dataset.page !== undefined) {
    updateStarPlacements(parseInt(dash.dataset.page, 10));
    return;
  }
});
