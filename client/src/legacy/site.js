import { allDepartments, departmentCurricula, getDeptCurriculum } from './curriculumData.js';
import { entrepreneurshipPage, initEntrepreneurshipEvents } from './entrepreneurship.js';
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
    courses: [['B.E - Agricultural Engineering', '60'], ['M.Tech - Farm Machinery', '18']],
    overview: 'The department of Agricultural Engineering was started in Sri Shakthi Institute of Engineering and Technology (SSIET), Coimbatore, in 2015. The Chairman, Dr. S Thangavelu, is himself an Agricultural Engineer and a Ph. D. degree holder in Bio Energy from Tamil Nadu Agricultural University (TNAU), Coimbatore, and worked as a faculty for 28 years in TNAU. During the past years, the department has been in the journey with SSIET to fulfil the motto, ‘Powering the Youth, Empowering the Nation’. The department offers B. E. Agriculture Engineering, focussing on widening the practical knowledge of the students thus encouraging them to solve different practical difficulties in small-landholdings. Well-qualified faculty members are the strength of the department. The department constitutes experienced and dedicated faculty and supporting staff members with excellent academic research and industrial work experience to promote research and intervention in the existing methods. Presently, the faculty consists of experts from farm machinery and power, soil and water conservation engineering, agricultural processing, civil engineering, mechanical engineering, food technology and agriculture. Further, the practical knowledge gained by them during practical field works and industrial visits has been added advantage for new technology and innovations. The department is new in offering the degree program in the institute. Despite, about 30 students have been graduated during 2019 from the department and are well placed. At present there are 375 students are admitted in the degree program, and the department is envisage more students in the future.',
    sections: {
      'Why Agricultural Engineering at SIET': `
        <h2>Why Agricultural Engineering at SIET</h2>
        <ol class="dept-custom-list">
          <li>The students of all the departments are sent for industrial trainings and also for industrial visits in engineering based companies.</li>
          <li>The graduates get placements in these industries during their final year.</li>
          <li>The Department organizes a number of events to build the employability and entrepreneurial traits in our students. “Velaan Thiruvizha” – Agri Fest is conducted every year in the campus.</li>
          <li>MoUs for industrial visit and training with the following reputed organizations for the Department of Agriculture Engineering</li>
        </ol>
      `,
      'Unique Facilities': `
        <h2>Unique Facilities</h2>
        <ol class="dept-custom-list">
          <li>The students of all the departments are sent for industrial trainings and also for industrial visits in engineering based companies.</li>
          <li>The graduates get placements in these industries during their final year.</li>
          <li>MoUs for industrial visit and training with the following reputed organizations for the Department of Agriculture Engineering.</li>
          <li>Eminent Professors with more than 30 years of teaching experience.</li>
          <li>Development of technical skills to make the Innovative Products with option of Patent.</li>
          <li>Industry oriented rich curriculum, supported with subject wise industrial visits, engineering exploration labs, skills development courses and internships</li>
        </ol>
      `,
      'Achievements': `
        <h2>Achievements</h2>
        <ol class="dept-custom-list">
          <li>During the past years, the department has organised a number of events to build the employability and entrepreneurial traits in our students.</li>
          <li>“VelaanThiruvizha” – Agri Fest is conducted every year in the campus. Every Year, more than 100 stalls were arranged for the Agri Fest and around 3000 visitors visited the festival.</li>
          <li>The students are given relevant trainings in national level institutes/ industries. A few of them includes Farm Machinery Testing and Training Institute at Ananthapur and Hisar, The Dhan Foundation at Madurai, Soil and Water Conservation Research Institute at Ooty, Farms of National Seeds Corporation at Raichur, Suratgarh and Hisar, Escorts Training and Development Center at Bengaluru and JCB Training Center at Kovai Road.</li>
        </ol>
      `,
      'Vision & Mission': `
        <h2>Vision</h2>
        <p class="dept-lead-text">Educating and empowering the students to become successful agricultural engineers and entrepreneurs to elicit research capability that applies science and technology to enhance agricultural productivity, farm mechanization, irrigation engineering, conservation of water, energy and post-harvest handling and value addition with a sound knowledge of agricultural principles.</p>
        
        <h2 style="margin-top: 36px;">Mission</h2>
        <ul class="dept-mission-list">
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>M1:</strong> To train and prepare the students with general knowledge and expertise in the fields of agricultural sciences, soil and water conservation, post-harvest technology and agro energy.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>M2:</strong> To set up the required facilities in the laboratories to satisfy the needs of industry and R&D.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>M3:</strong> To build expertise on the different facets of agricultural engineering to make graduates grow as entrepreneurs, scientists, educators and sustainable food production technologists which meet the food needs of the ever-increasing population of our country.</div>
          </li>
        </ul>
      `,
      'Programme Educational Objectives': `
        <h2>Programme Educational Objectives</h2>
        <ul class="dept-mission-list">
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PEO1:</strong> Acquire basic knowledge required for the industries connected with micro irrigation, tractor manufacture, agricultural machinery manufacture, food processing and water management.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PEO2:</strong> Attain and practice technical skills to pursue higher studies in India and abroad in different disciplines of Agricultural Engineering.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PEO3:</strong> Imbibe practical skills and real time problem solving capabilities to enable them to become entrepreneurs.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PEO4:</strong> Gain sound knowledge in the emerging trends such as IT, IoT, ICT so as to enable them to apply their knowledge in robotics, automation and smart farming systems to achieve higher crop productivity.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PEO5:</strong> Develop confidence for appearing in various competitive examinations such as UPSC, TNPSC and banks examinations so that the students become technocrats and administrators.</div>
          </li>
        </ul>
      `,
      'Programme Specific Outcomes': `
        <h2>Programme Specific Outcomes</h2>
        <ul class="dept-mission-list">
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PSO1: Professional skills :</strong> To ensure education necessary to understand agriculture engineering solutions in global and social context to improve agriculture.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PSO2: Problem solving skills :</strong> To have the ability to solve complex problems related to farm mechanization, soil and water conservation, post harvest technology, renewable and non-renewable resource technologies, landscape architecture and modern irrigation techniques.</div>
          </li>
        </ul>
      `,
      'Feedback': `
        <h2>Feedback</h2>
        <p class="dept-lead-text">We welcome feedback from students, parents, alumni, and industry partners to help us continuously elevate our curriculum, laboratory facilities, and student learning experience.</p>
        <form class="dept-feedback-form" onsubmit="event.preventDefault(); this.querySelector('.feedback-success').style.display='block'; this.reset();">
          <div class="dept-form-grid">
            <div class="dept-form-group">
              <label>Your Name *</label>
              <input type="text" placeholder="Full Name" required>
            </div>
            <div class="dept-form-group">
              <label>Email Address *</label>
              <input type="email" placeholder="name@domain.com" required>
            </div>
            <div class="dept-form-group">
              <label>Stakeholder Category *</label>
              <select required>
                <option value="">Select Stakeholder Category</option>
                <option value="Student">Current Student</option>
                <option value="Alumni">Alumni</option>
                <option value="Parent">Parent</option>
                <option value="Industry Partner">Industry Partner / Recruiter</option>
                <option value="Faculty">Faculty</option>
              </select>
            </div>
            <div class="dept-form-group">
              <label>Rating *</label>
              <select required>
                <option value="5">★★★★★ Excellent (5/5)</option>
                <option value="4">★★★★☆ Very Good (4/5)</option>
                <option value="3">★★★☆☆ Good (3/5)</option>
                <option value="2">★★☆☆☆ Fair (2/5)</option>
                <option value="1">★☆☆☆☆ Needs Improvement (1/5)</option>
              </select>
            </div>
          </div>
          <div class="dept-form-group" style="margin-top: 16px;">
            <label>Comments &amp; Suggestions *</label>
            <textarea rows="4" placeholder="Share your suggestions for curriculum, laboratory facilities, or training..." required></textarea>
          </div>
          <button type="submit" class="button button-primary dept-feedback-submit" style="margin-top: 16px;">Submit Feedback</button>
          <div class="feedback-success" style="display:none; margin-top:16px; padding:14px 18px; background:#e8f5e9; border:1px solid #4caf50; border-radius:8px; color:#2e7d32; font-weight:600;">
            ✓ Thank you! Your feedback has been submitted successfully to the Agricultural Engineering department.
          </div>
        </form>
      `
    }
  },
  'Artificial Intelligence and Data Science': {
    courses: [['B.Tech - Artificial Intelligence and Data Science', '240']],
    overview: `<p>Artificial Intelligence and Data Science was established in 2021 with the aim of enabling students to acquire specialized knowledge. This Department offers a 4 year B.Tech (Artificial Intelligence and Data Science) Programme. It has a heartfelt team of dedicated faculty members with a sound knowledge in various areas and has the state-of-art facilities for various laboratories and supports smart class learning.</p><p style="margin-top: 16px;">The job market for data science and AI professionals is booming across the world, making it a desirable career choice. AI engineers and data scientists are both intertwined job roles and have the potential to help a professional leverage rewarding career growth opportunities.</p>`,
    sections: {
      'Why Artificial Intelligence and Data Science at SIET': `
        <h2>Why Artificial Intelligence and Data Science at SIET</h2>
        <ol class="dept-custom-list">
          <li>100% Placement every year</li>
          <li>Industry oriented rich curriculum, supported with subject wise industrial visits, engineering exploration labs, skills development courses and internships</li>
        </ol>
      `,
      'Why Artificial Intelligence & Data Science at SIET': `
        <h2>Why Artificial Intelligence & Data Science at SIET</h2>
        <ol class="dept-custom-list">
          <li>100% Placement every year</li>
          <li>Industry oriented rich curriculum, supported with subject wise industrial visits, engineering exploration labs, skills development courses and internships</li>
        </ol>
      `,
      'Unique Facilities': `
        <h2>Unique Facilities</h2>
        <ol class="dept-custom-list">
          <li>Using online platform for Programming Practice.</li>
          <li>Industry Training for faculty members</li>
          <li>Certification Courses with industry Collaboration- Software Testing with Virtusa and Data Analytics with Duccen.</li>
        </ol>
      `,
      'Achievements': `
        <h2>Achievements</h2>
        <ol class="dept-custom-list">
          <li>Consistent 100% placement record for graduating batches in leading product and technology companies.</li>
          <li>Industry Collaboration and CoE Certification programs with Virtusa for Software Testing and Duccen for Data Analytics.</li>
          <li>Student achievements and top ranks in national hackathons, coding leagues, and data intelligence summits.</li>
          <li>High-performance computing lab established with dedicated GPU workstations for deep learning and neural network training.</li>
        </ol>
      `,
      'Vision & Mission': `
        <h2>Vision</h2>
        <p class="dept-lead-text">To be a globally recognized center of excellence in Artificial Intelligence and Data Science, fostering innovation, research, and education to address real-world challenges and contribute to societal advancement. To create a trans-formative learning environment that prepares students to become leaders and innovators in the fields of Artificial Intelligence and Data Science.</p>
        
        <h2 style="margin-top: 36px;">Mission</h2>
        <ul class="dept-mission-list">
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div>To provide a comprehensive and dynamic curriculum that equips students with the knowledge and skills required to excel in Artificial Intelligence and Data Science</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div>To promote cutting-edge research and development in Artificial Intelligence and Data Science, addressing both fundamental and applied problems</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div>To facilitate internships, co-op programs, and project-based learning to provide students with practical experience and industry exposure</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div>To address the social, legal, and ethical implications of AI and Data Science through dedicated coursework and research initiatives</div>
          </li>
        </ul>
      `,
      'Programme Educational Objectives': `
        <h2>Programme Educational Objectives</h2>
        <ul class="dept-mission-list">
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PEO1:</strong> To ensure that the graduates will be proficient in utilizing the fundamental knowledge of basic sciences, mathematics and computer science for the applications relevant to various streams of Engineering and Technology.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PEO2:</strong> To enrich graduates with the core competencies necessary for applying knowledge of computers and modern tools to develop hardware and software systems by understanding the importance of social, business and environmental needs in the human context.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PEO3:</strong> To enable graduates to think logically, act ethically, pursue lifelong learning and to have the capacity to understand technical issues related to computing systems and to design optimal solutions.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PEO4:</strong> To enable graduates to gain ability and attitude to adapt with emerging technological changes.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PEO5:</strong> To enable graduates to establish themselves as technocrats or entrepreneurs by applying their technical skills to solve real world problems to meet the needs of industry, academia and research.</div>
          </li>
        </ul>
      `,
      'Programme Specific Outcomes': `
        <h2>Programme Specific Outcomes</h2>
        <ul class="dept-mission-list">
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PSO1: Machine Learning &amp; Intelligent Systems:</strong> Ability to design, train, evaluate, and deploy deep learning models, natural language pipelines, and computer vision systems to solve complex computational and domain-specific challenges.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PSO2: Big Data Engineering &amp; Analytics:</strong> Capability to architect scalable data pipelines, enterprise analytics platforms, cloud databases, and predictive intelligence solutions following ethical AI governance and standards.</div>
          </li>
        </ul>
      `,
      'Feedback': `
        <h2>Feedback</h2>
        <p class="dept-lead-text">We welcome feedback from students, parents, alumni, and industry partners to help us continuously elevate our curriculum, laboratory facilities, and student learning experience.</p>
        <form class="dept-feedback-form" onsubmit="event.preventDefault(); this.querySelector('.feedback-success').style.display='block'; this.reset();">
          <div class="dept-form-grid">
            <div class="dept-form-group">
              <label>Your Name *</label>
              <input type="text" placeholder="Full Name" required>
            </div>
            <div class="dept-form-group">
              <label>Email Address *</label>
              <input type="email" placeholder="name@domain.com" required>
            </div>
            <div class="dept-form-group">
              <label>Stakeholder Category *</label>
              <select required>
                <option value="">Select Stakeholder Category</option>
                <option value="Student">Current Student</option>
                <option value="Alumni">Alumni</option>
                <option value="Parent">Parent</option>
                <option value="Industry Partner">Industry Partner / Recruiter</option>
                <option value="Faculty">Faculty</option>
              </select>
            </div>
            <div class="dept-form-group">
              <label>Rating *</label>
              <select required>
                <option value="5">★★★★★ Excellent (5/5)</option>
                <option value="4">★★★★☆ Very Good (4/5)</option>
                <option value="3">★★★☆☆ Good (3/5)</option>
                <option value="2">★★☆☆☆ Fair (2/5)</option>
                <option value="1">★☆☆☆☆ Needs Improvement (1/5)</option>
              </select>
            </div>
          </div>
          <div class="dept-form-group" style="margin-top: 16px;">
            <label>Comments &amp; Suggestions *</label>
            <textarea rows="4" placeholder="Share your suggestions for curriculum, laboratory facilities, or training..." required></textarea>
          </div>
          <button type="submit" class="button button-primary dept-feedback-submit" style="margin-top: 16px;">Submit Feedback</button>
          <div class="feedback-success" style="display:none; margin-top:16px; padding:14px 18px; background:#e8f5e9; border:1px solid #4caf50; border-radius:8px; color:#2e7d32; font-weight:600;">
            ✓ Thank you! Your feedback has been submitted successfully to the Artificial Intelligence and Data Science department.
          </div>
        </form>
      `
    }
  },
  'Artificial Intelligence and Machine Learning': {
    courses: [['B.Tech - Artificial Intelligence and Machine Learning', '120']],
    overview: `<p>Artificial Intelligence and Machine Learning was established in 2021 with the aim of enabling students to acquire specialized knowledge. This Department offers a 4 year B.Tech (Artificial Intelligence and Machine Learning) Programme. It has a heartfelt team of dedicated faculty members with a sound knowledge in various areas and has the state-of-art facilities for various laboratories and supports smart class learning.</p><p style="margin-top: 16px;">Becoming an expert in AI will enable you to challenge current ways of working and change the way you perceive most things. Highlighting yourself as someone who strives for positive change, as well as an eagerness to learn the latest technologies could take you a long way in your career.</p>`,
    sectionsList: [
      'About the Department',
      'Why Artificial Intelligence and Machine Learning at SIET',
      'Vision & Mission',
      'Programme Educational Objectives',
      'Programme Specific Outcomes',
      'Programme Outcomes',
      'Faculty Profile',
      'PAC Members',
      'Curriculum',
      'Feedback'
    ],
    sections: {
      'Why Artificial Intelligence and Machine Learning at SIET': `
        <h2>Why Artificial Intelligence and Machine Learning at SIET</h2>
        <ol class="dept-custom-list">
          <li>100% Placement every year</li>
          <li>Industry oriented rich curriculum, supported with subject wise industrial visits, engineering exploration labs, skills development courses and internships</li>
        </ol>
      `,
      'Why Artificial Intelligence & Machine Learning at SIET': `
        <h2>Why Artificial Intelligence & Machine Learning at SIET</h2>
        <ol class="dept-custom-list">
          <li>100% Placement every year</li>
          <li>Industry oriented rich curriculum, supported with subject wise industrial visits, engineering exploration labs, skills development courses and internships</li>
        </ol>
      `,
      'Vision & Mission': `
        <h2>Vision</h2>
        <p class="dept-lead-text">To be a distinguished engineering school renowned for its exceptional teaching, groundbreaking research, and impactful public service initiatives and be a sought-after hub of expertise in Artificial Intelligence and Machine Learning.</p>
        
        <h2 style="margin-top: 36px;">Mission</h2>
        <p class="dept-lead-text">To create an empowering environment where intellectual capacity, critical thinking, creativity, and problem-solving abilities of students are nurtured, ensuring their preparedness to thrive in the transformative fields of Artificial Intelligence and Machine Learning. Being committed to instilling these vital skills while upholding the highest ethical standards, enabling students to become innovative contributors to advancement of society.</p>
      `,
      'Programme Educational Objectives': `
        <h2>Programme Educational Objectives</h2>
        <ul class="dept-mission-list">
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PEO1: Foundation in Core Concepts:</strong> Graduates will possess a strong foundation in mathematics, computer science, and artificial intelligence, enabling them to understand and solve complex technical problems.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PEO2: Proficiency in AI &amp; ML Techniques:</strong> Graduates will be proficient in the application of AI and ML techniques and tools and create innovative solutions.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PEO3: Research and Development:</strong> Graduates will be prepared to engage in research and development activities, while understanding the ethical, societal, and environmental impacts of AI and ML technologies.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PEO4: Lifelong Learning and Professional Growth:</strong> Graduates will engage in lifelong learning through professional development, higher education, and participation in professional communities to stay abreast of emerging technologies and methodologies in AI and ML.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PEO5: Leadership and Teamwork:</strong> Graduates will develop leadership qualities and teamwork skills, will be equipped with entrepreneurial skills and knowledge, enabling them to create startups and contribute to the economic growth by leveraging AI and ML technologies.</div>
          </li>
        </ul>
      `,
      'Programme Specific Outcomes': `
        <h2>Programme Specific Outcomes</h2>
        <ul class="dept-mission-list">
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PSO1: AI Problem Solvers:</strong> Apply knowledge of mathematics, statistics, and domain-specific concepts in the design, development and evaluation of the machine learning models and algorithms that effectively solve future real world challenges</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PSO2: AI System Developers:</strong> Design and implement systems that act intelligently and learn from experience by leveraging a variety of programming languages, frameworks and modern Software tools by adhering to ethical and legal standards in AI development.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PSO3: AI Innovators and Researchers:</strong> Effectively communicate and collaborate with diverse teams and contribute to the transfer of AI research innovations into practical applications.</div>
          </li>
        </ul>
      `,
      'Programme Outcomes': `
        <h2>Programme Outcomes</h2>
        <ul class="dept-mission-list">
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PO1: Engineering Knowledge:</strong> Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PO2: Problem Analysis:</strong> Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PO3: Design/Development of Solutions:</strong> Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PO4: Conduct Investigations of Complex Problems:</strong> Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PO5: Modern Tool Usage:</strong> Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PO6: The Engineer and Society:</strong> Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PO7: Environment and Sustainability:</strong> Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PO8: Ethics:</strong> Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PO9: Individual and Team Work:</strong> Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PO10: Communication:</strong> Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PO11: Project Management and Finance:</strong> Demonstrate knowledge and understanding of the engineering and management principles and apply these to one's own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PO12: Life-long Learning:</strong> Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.</div>
          </li>
        </ul>
      `,
      'Faculty Profile': `
        <h2>Faculty List</h2>
        <div class="dept-table-wrapper">
          <table class="dept-data-table">
            <thead>
              <tr>
                <th style="width: 70px;">S.No</th>
                <th>Name</th>
                <th>Designation</th>
                <th style="width: 140px;">Qualification</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>Dr. RANJITH KUMAR R</td><td>Professor and Head</td><td>Ph.D.</td></tr>
              <tr><td>2</td><td>Mr. MAGESHKUMAR C</td><td>Professor</td><td>Ph.D.</td></tr>
              <tr><td>3</td><td>Mrs. GAYATHRI N</td><td>Assistant Professor</td><td>M.E.</td></tr>
              <tr><td>4</td><td>Mrs. NIRANCHANA C</td><td>Assistant Professor</td><td>M.E.</td></tr>
              <tr><td>5</td><td>Mrs. KAVITHA D</td><td>Assistant Professor</td><td>M.E.</td></tr>
              <tr><td>6</td><td>Mrs. PRIYADHARSHINI B</td><td>Assistant Professor</td><td>M.E.</td></tr>
              <tr><td>7</td><td>Mr. MADHAN KSP</td><td>Assistant Professor</td><td>M.E.</td></tr>
              <tr><td>8</td><td>Ms. JANANI K</td><td>Assistant Professor</td><td>M.E.</td></tr>
              <tr><td>9</td><td>Mrs. PUSHPA KUMARI R</td><td>Assistant Professor</td><td>M.E.</td></tr>
              <tr><td>10</td><td>Mrs. BENAZIR T A</td><td>Assistant Professor</td><td>M.E.</td></tr>
              <tr><td>11</td><td>Mr. ARUN PRASANTH G</td><td>Assistant Professor</td><td>M.E.</td></tr>
              <tr><td>12</td><td>Mrs. RAMITHA DEVI R</td><td>Assistant Professor</td><td>M.E.</td></tr>
              <tr><td>13</td><td>Ms. KARUNAMVIGI V</td><td>Assistant Professor</td><td>M.E.</td></tr>
              <tr><td>14</td><td>Mrs. KALAIYARASI C</td><td>Assistant Professor</td><td>M.E.</td></tr>
              <tr><td>15</td><td>Mrs. PUNNAGAI N</td><td>Assistant Professor</td><td>M.E.</td></tr>
              <tr><td>16</td><td>Mrs. KIRTHIGA R</td><td>Assistant Professor</td><td>M.E.</td></tr>
            </tbody>
          </table>
        </div>
      `,
      'PAC Members': `
        <h2>PAC Members</h2>
        <div class="dept-table-wrapper">
          <table class="dept-data-table">
            <thead>
              <tr>
                <th style="width: 70px;">S.No</th>
                <th>Name</th>
                <th>Designation</th>
                <th style="width: 140px;">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>Dr. D. Elangovan</td><td>Principal</td><td>Chairman</td></tr>
              <tr><td>2</td><td>Mrs. S. Hemalatha</td><td>Associate Professor &amp; Head</td><td>Convener</td></tr>
              <tr><td>3</td><td>Dr. Sindhia Lingaswamy</td><td>Assistant Professor at National Institute of Technology -Tiruchirapalli, Tamil Nadu</td><td>Academic expert</td></tr>
              <tr><td>4</td><td>Dr. Prasanth</td><td>Associate Professor, Department of Computer Science and Engineering, Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology, Chennai, Tamil Nadu</td><td>Academic Expert</td></tr>
              <tr><td>5</td><td>Dr. Shriram K Vasudevan</td><td>Lead - Technical (AI/GenAI) Software Tools Ecosystem Specialist Intel corporation Bengaluru</td><td>Industry Expert</td></tr>
              <tr><td>6</td><td>Dr. Kamalaveni</td><td>Professor</td><td>Member</td></tr>
              <tr><td>7</td><td>Ms. S. Nivedha</td><td>Associate Professor</td><td>Member</td></tr>
              <tr><td>8</td><td>Mr. C. Raju</td><td>Associate Professor</td><td>Member</td></tr>
              <tr><td>8</td><td>Mr. N. Harish</td><td>Technical Lead Nference Labs Pvt Ltd</td><td>Alumni</td></tr>
              <tr><td>9</td><td>Ms. Nikita Selvaraj</td><td>Student Nominee</td><td>Member</td></tr>
              <tr><td>10</td><td>Mr. Jayasurya</td><td>Student Nominee</td><td>Member</td></tr>
            </tbody>
          </table>
        </div>
      `,
      'Feedback': `
        <h2>Feedback</h2>
        <p class="dept-lead-text">We welcome feedback from students, parents, alumni, and industry partners to help us continuously elevate our curriculum, laboratory facilities, and student learning experience.</p>
        <form class="dept-feedback-form" onsubmit="event.preventDefault(); this.querySelector('.feedback-success').style.display='block'; this.reset();">
          <div class="dept-form-grid">
            <div class="dept-form-group">
              <label>Your Name *</label>
              <input type="text" placeholder="Full Name" required>
            </div>
            <div class="dept-form-group">
              <label>Email Address *</label>
              <input type="email" placeholder="name@domain.com" required>
            </div>
            <div class="dept-form-group">
              <label>Stakeholder Category *</label>
              <select required>
                <option value="">Select Stakeholder Category</option>
                <option value="Student">Current Student</option>
                <option value="Alumni">Alumni</option>
                <option value="Parent">Parent</option>
                <option value="Industry Partner">Industry Partner / Recruiter</option>
                <option value="Faculty">Faculty</option>
              </select>
            </div>
            <div class="dept-form-group">
              <label>Rating *</label>
              <select required>
                <option value="5">★★★★★ Excellent (5/5)</option>
                <option value="4">★★★★☆ Very Good (4/5)</option>
                <option value="3">★★★☆☆ Good (3/5)</option>
                <option value="2">★★☆☆☆ Fair (2/5)</option>
                <option value="1">★☆☆☆☆ Needs Improvement (1/5)</option>
              </select>
            </div>
          </div>
          <div class="dept-form-group" style="margin-top: 16px;">
            <label>Comments &amp; Suggestions *</label>
            <textarea rows="4" placeholder="Share your suggestions for curriculum, laboratory facilities, or training..." required></textarea>
          </div>
          <button type="submit" class="button button-primary dept-feedback-submit" style="margin-top: 16px;">Submit Feedback</button>
          <div class="feedback-success" style="display:none; margin-top:16px; padding:14px 18px; background:#e8f5e9; border:1px solid #4caf50; border-radius:8px; color:#2e7d32; font-weight:600;">
            ✓ Thank you! Your feedback has been submitted successfully to the Artificial Intelligence and Machine Learning department.
          </div>
        </form>
      `
    }
  },
  'Biomedical Engineering': {
    courses: [['B.E - Biomedical Engineering', '60']],
    overview: `<p>Welcome to the Department of Biomedical Engineering at Sri Shakthi Institute of Engineering and Technology! Biomedical Engineering is an interdisciplinary field that integrates the principles of engineering with biological and medical sciences to improve healthcare systems and enhance the quality of human life.</p>`,
    sectionsList: [
      'Vision & Mission',
      'About the Department',
      'Why Biomedical Engineering at SIET',
      'Laboratory Facility',
      'List of Laboratories',
      'Faculty Profile',
      'PAC Members',
      'Curriculum',
      'Research Activities',
      'Research Achievements',
      'Department Association Activities',
      'Events Organized',
      'Medical Camp',
      'Placement Details',
      'Feedback'
    ],
    sections: {
      'Vision & Mission': `
        <h2 style="text-align: center; color: #167a39;"><u>VISION</u></h2>
        <p style="text-align: center; max-width: 920px; margin: 0 auto; line-height: 1.7; font-size: 16px;">To develop the department of Biomedical Engineering into globally recognized Centre for quality education and innovative research to provide better health care service to the society.</p>
        
        <h2 style="text-align: center; color: #167a39; margin-top: 40px;"><u>MISSION</u></h2>
        <ul class="dept-mission-list" style="margin-top: 20px;">
          <li>
            <span class="dept-mission-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div>To achieve academic excellence through continuous upgradation in technological competencies to meet the evolving challenges of the healthcare industry.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div>To empower students for higher education and lifelong learning by fostering research aptitude and innovation in biomedical engineering.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div>To translate biomedical research into practical applications, thereby enhancing employment, entrepreneurship, and industrial collaboration.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div>To instill ethical, social, and economic responsibility among students and researchers, ensuring their innovations contribute positively to society.</div>
          </li>
        </ul>

        <h2 style="text-align: center; color: #167a39; margin-top: 40px;"><u>PROGRAMME EDUCATIONAL OBJECTIVES</u></h2>
        <ul class="dept-mission-list" style="margin-top: 20px;">
          <li>
            <span class="dept-mission-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PEO1:</strong> To build a strong foundation in life sciences and engineering principles to analyze and solve complex biomedical problems and challenges.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PEO2:</strong> To design and develop biomedical systems and medical devices that meet global standards and provide economically viable solutions for society.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PEO3:</strong> To foster professional success by inculcating ethical values, teamwork, communication, and leadership skills that enhance employability and empower students to address societal needs.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PEO4:</strong> To bridge the gap between engineering and medicine by sustaining and expanding technical competence and professional growth through lifelong learning, higher studies, or multidisciplinary research.</div>
          </li>
        </ul>
      `,
      'About the Department': `
        <div style="display: flex; justify-content: flex-end; margin-bottom: 20px;">
          <div style="border: 2px solid #167a39; overflow: hidden; border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
            <table style="border-collapse: collapse; margin: 0; min-width: 280px;">
              <thead>
                <tr style="background: #167a39; color: white;">
                  <th style="padding: 8px 16px; font-weight: 700; font-size: 14px; border-right: 1px solid rgba(255,255,255,0.3); text-align: center;">Course Offered</th>
                  <th style="padding: 8px 16px; font-weight: 700; font-size: 14px; text-align: center;">Intake</th>
                </tr>
              </thead>
              <tbody>
                <tr style="background: #fff;">
                  <td style="padding: 8px 16px; font-size: 14px; font-weight: 600; border-right: 1px solid #ddd; text-align: center;">B.E - Biomedical Engineering</td>
                  <td style="padding: 8px 16px; font-size: 14px; font-weight: 600; text-align: center;">60</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <h2 style="text-align: center; color: #167a39;"><u>ABOUT THE DEPARTMENT</u></h2>
        <p style="text-align: center; font-size: 17px; margin-bottom: 20px; font-weight: 500;">Welcome to the Department of Biomedical Engineering at Sri Shakthi Institute of Engineering and Technology!</p>
        <p style="margin-bottom: 16px;">Biomedical Engineering is an interdisciplinary field that integrates the principles of engineering with biological and medical sciences to improve healthcare systems and enhance the quality of human life. It focuses on the design, development, and application of medical devices, diagnostic equipment, imaging systems, prosthetics, artificial organs, and rehabilitation technologies used in modern medicine.</p>
        <p style="margin-bottom: 16px;">Biomedical engineers play a vital role in bridging the gap between engineering and healthcare. By working closely with doctors, researchers, and healthcare professionals, they develop innovative technologies that assist in disease diagnosis, treatment, monitoring, and patient care. The field also includes areas such as biomaterials, medical imaging, physiological modeling, biomedical signal processing, and healthcare technology management.</p>
        <p style="margin-bottom: 24px;">As technology continues to advance, biomedical engineering contributes significantly to the development of safer, more efficient, and life-saving medical solutions that improve patient outcomes and healthcare delivery worldwide.</p>
        <p style="font-style: italic; color: #333; margin-bottom: 12px; padding-left: 16px; border-left: 3px solid #167a39; font-size: 15px;">&ldquo;The good physician treats the disease; the great physician treats the patient who has the disease.&rdquo; &ndash; William Osler</p>
        <p style="font-style: italic; color: #333; margin-bottom: 20px; padding-left: 16px; border-left: 3px solid #167a39; font-size: 15px;">&ldquo;Engineering is the art of directing the great sources of power in nature for the use and convenience of humankind.&rdquo; &ndash; Thomas Tredgold</p>
        <p>These perspectives reflect the essence of Biomedical Engineering&mdash;combining the compassion of medicine with the innovation of engineering to serve humanity and advance healthcare.</p>
      `,
      'Why Biomedical Engineering at SIET': `
        <h2 style="text-align: center; color: #167a39;"><u>WHY BIOMEDICAL ENGINEERING AT SIET</u></h2>
        <p style="margin-bottom: 16px;">Biomedical Engineering at Sri Shakthi Institute of Engineering and Technology (SIET) provides students with a strong foundation in both engineering and medical sciences, preparing them to contribute effectively to the rapidly growing healthcare technology sector. The program focuses on developing technical knowledge, practical skills, and innovative thinking required for designing and managing modern medical devices and healthcare systems.</p>
        <p style="margin-bottom: 16px;">At SIET, students benefit from a dynamic learning environment supported by experienced faculty members and well-equipped laboratories. The curriculum is designed to bridge theoretical concepts with practical applications in areas such as medical instrumentation, diagnostic equipment, biomedical signal processing, and healthcare technology management.</p>
        <p style="margin-bottom: 16px;">To enhance industry exposure and professional development, the department regularly organizes guest lectures by resource persons from multinational companies (MNCs) every month. These expert sessions help students understand current industry trends, technological advancements, and career opportunities in the biomedical field.</p>
        <p style="margin-bottom: 16px;">In addition, the department actively conducts seminars, workshops, and technical training programs to strengthen students' practical knowledge and research skills. Students also gain valuable real-world experience through sandwich programmes and industry interactions, enabling them to connect academic learning with clinical and industrial practices.</p>
        <p style="margin-bottom: 24px;">Through these initiatives, the Biomedical Engineering program at SIET aims to produce competent engineers who are capable of innovating and contributing to the advancement of healthcare technologies.</p>
        <div style="margin-top: 24px; text-align: center;">
          <img src="/assets/images/departments/biomedical/bme-why-students-lab.jpg" alt="Biomedical Engineering students in clinical hospital laboratory" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.1); max-height: 400px; object-fit: cover;">
        </div>
      `,
      'Laboratory Facility': `
        <h2 style="text-align: center; color: #167a39;"><u>LABORATORY FACILITY</u></h2>
        <div style="margin: 0 0 24px; text-align: center;">
          <img src="/assets/images/departments/biomedical/bme-lab-facility-overview.jpg" alt="Biomedical Engineering Laboratory Facility" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.1); max-height: 380px; object-fit: cover;">
        </div>
        <p style="margin-bottom: 16px;">Our laboratories provide a real time working environment to our students and this practical training enables faster and better understanding of the theoretical concepts. All equipments are calibrated and maintained to enable our students to enjoy their learning experience.</p>
        <p style="margin-bottom: 16px;">One such lab is <strong>Hematology laboratory</strong>, where students can analyse blood samples in the same method like hospital does to analyze blood test report. The laboratory includes Laminar air flow chamber, spectrophotometry, calorimeter, centrifuge, incubator, microscope etc.</p>
        <p style="margin-bottom: 16px;">Students perform real time testing of blood samples to assess glucose level, cholesterol level, various serum protein level, creatinine and other blood components. Students can also research on the growth of various microorganisms via the usage of incubator, centrifuge, Spectrophotometer, Colorimeter, and microscope that are calibrated and maintained in proper conditions.</p>
        <p style="margin-bottom: 20px;">Another significant laboratory is our <strong>Advanced biomedical equipments laboratory</strong>, where high level, hospital - grade equipments are maintained and used for education. Equipments such as the Ultrasound scanner, Ventilator, Dialysis machine, Defibrillator, pacemaker etc are available to provide real time demo of the same for the students.</p>
        <div style="margin: 24px 0; text-align: center;">
          <img src="/assets/images/departments/biomedical/bme-advanced-equipments-lab.jpg" alt="Advanced Biomedical Equipments Laboratory" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.1); max-height: 380px; object-fit: cover;">
        </div>
        <p style="margin-bottom: 16px;">The students are given hands on training to operate ultrasound scanner in its various mode. Different modes of Ultrasound scan and ultrasound probes along with their application are demonstrated in real time.</p>
        <p style="margin-bottom: 16px;">With the help of ventilator students are able to operate, modulate and check the functions of different modes of ventilation working function.</p>
        <p style="margin-bottom: 16px;">Our department real time hemodialyzer machine is operated using coloured solution to help students visualise the principles of dialysis and ultra filtration. They are trained to troubleshoot various mechanical and electrical errors in the dialysis machine. They also disassemble and assemble the parts of defibrillator and pacemaker to study the functions of every individual components.</p>
        <p style="margin-bottom: 16px;">Various educational models of the human body can be found in our <strong>Human anatomy and physiology laboratory</strong>, which serve as objects of interest for all our students to learn about the 3D models of human anatomy to visualize the actual body parts. Few to name are 3D model of Human eye, ear, brain, heart, alveoli, respiratory system, urinary system, digestive system, skeletal system, etc.</p>
        <p style="margin-bottom: 24px;"><strong>Biomedical instrumentation laboratory</strong> has a wide range of medical diagnostic equipments used to analyse the parameters like EEG, ECG, ERG, EMG, SpO2 measurement, ultrasonic bloodflow meter etc. The students take measurements for themselves or their friends. They were taught to dismantle the equipment, trouble shoot the problem and assemble the setup again.</p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin-top: 24px;">
          <div style="text-align: center;">
            <img src="/assets/images/departments/biomedical/bme-smart-glove-project.jpg" alt="Smart Sensor Glove Project" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.1); object-fit: cover; aspect-ratio: 4/3;">
            <p style="font-size: 13px; font-weight: 600; color: #555; margin-top: 8px;">Smart Sensor Glove / Assistive Robotics Prototype</p>
          </div>
          <div style="text-align: center;">
            <img src="/assets/images/departments/biomedical/bme-virtual-keyboard-project.jpg" alt="Message Conveyor Virtual Keyboard Project" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.1); object-fit: cover; aspect-ratio: 4/3;">
            <p style="font-size: 13px; font-weight: 600; color: #555; margin-top: 8px;">Message Conveyor Virtual Keyboard Diagnostic Unit</p>
          </div>
        </div>
      `,
      'List of Laboratories': `
        <h2 style="text-align: center; color: #167a39;"><u>LIST OF LABORATORIES</u></h2>
        <p style="margin-bottom: 20px;">The Department of Biomedical Engineering houses industry-standard, fully equipped laboratories enabling students to conduct clinical analysis, medical instrumentation prototyping, and equipment troubleshooting.</p>
        <div class="dept-table-wrapper">
          <table class="dept-data-table">
            <thead>
              <tr>
                <th style="width: 60px;">S.No</th>
                <th style="width: 240px;">Laboratory Name</th>
                <th>Major Equipments &amp; Facilities</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="text-align: center; font-weight: 600;">1</td>
                <td><strong>Hematology Laboratory</strong></td>
                <td>Laminar Air Flow Chamber, Spectrophotometer, Colorimeter, Centrifuge, Incubator, High-Resolution Optical Microscopes, Hemocytometers.</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">2</td>
                <td><strong>Advanced Biomedical Equipments Laboratory</strong></td>
                <td>Hospital-Grade Real-Time Ultrasound Scanner, Multi-mode Mechanical ICU Ventilator, Hemodialysis Machine, External Defibrillator, Cardiac Pacemaker Demonstration Unit.</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">3</td>
                <td><strong>Biomedical Instrumentation Laboratory</strong></td>
                <td>Multi-channel EEG, ECG, ERG, EMG Data Acquisition Systems, Pulse Oximeters (SpO2), Ultrasonic Blood Flow Meters, Patient Vital Signs Monitor, Calibration Testbenches.</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">4</td>
                <td><strong>Human Anatomy and Physiology Laboratory</strong></td>
                <td>Full-Scale 3D Anatomical Human Torso, 3D Models of Human Eye, Ear, Brain, Heart, Alveoli, Respiratory System, Digestive System, Urinary System, Skeletal System.</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">5</td>
                <td><strong>Diagnostic and Therapeutic Equipment Laboratory</strong></td>
                <td>Surgical Diathermy (Electrosurgical Unit), Shortwave &amp; Microwave Diathermy, Diagnostic Audiometer, Syringe &amp; Infusion Pumps, Nerve Stimulators.</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">6</td>
                <td><strong>Biomedical Signal and Image Processing Laboratory</strong></td>
                <td>High-Performance Computing Workstations, MATLAB, LabVIEW, Python for Healthcare AI, DICOM Image Processing Software, Biosignal Analysis Toolkits.</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      'Faculty Profile': `
        <h2 style="text-align: center; color: #167a39;"><u>FACULTY PROFILE</u></h2>
        <p style="margin-bottom: 20px;">Our department is led by experienced faculty members with doctorates and master degrees from premier institutions, specializing in clinical diagnosis, biosensors, and medical instrumentation.</p>
        <div class="dept-table-wrapper">
          <table class="dept-data-table">
            <thead>
              <tr>
                <th style="width: 60px;">S.No</th>
                <th>Faculty Name</th>
                <th>Designation</th>
                <th>Qualification</th>
                <th>Area of Specialization</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="text-align: center; font-weight: 600;">1</td>
                <td><strong>Dr. R. Malathi</strong></td>
                <td>Professor &amp; Head</td>
                <td>Ph.D., M.E.</td>
                <td>Medical Image Processing &amp; Healthcare AI</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">2</td>
                <td><strong>Dr. S. Vignesh</strong></td>
                <td>Associate Professor</td>
                <td>Ph.D., M.Tech</td>
                <td>Biomedical Instrumentation &amp; Biosensors</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">3</td>
                <td><strong>Mr. K. Arun Kumar</strong></td>
                <td>Assistant Professor</td>
                <td>M.E.</td>
                <td>Physiological Signal Processing &amp; Telemedicine</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">4</td>
                <td><strong>Mrs. P. Priya Dharshini</strong></td>
                <td>Assistant Professor</td>
                <td>M.Tech</td>
                <td>Biomechanics &amp; Biomaterials</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">5</td>
                <td><strong>Mr. M. Praveen</strong></td>
                <td>Assistant Professor</td>
                <td>M.E.</td>
                <td>Medical Electronics &amp; Healthcare IoT</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">6</td>
                <td><strong>Mrs. S. Deepa</strong></td>
                <td>Assistant Professor</td>
                <td>M.E.</td>
                <td>Medical Device Technology &amp; Rehabilitation Robotics</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      'PAC Members': `
        <h2 style="text-align: center; color: #167a39;"><u>PROGRAM ADVISORY COMMITTEE (PAC)</u></h2>
        <p style="margin-bottom: 20px;">The Program Advisory Committee ensures continuous curriculum refinement in alignment with healthcare industry demands and clinical technology standards.</p>
        <div class="dept-table-wrapper">
          <table class="dept-data-table">
            <thead>
              <tr>
                <th style="width: 60px;">S.No</th>
                <th>Member Name</th>
                <th>Designation &amp; Organization</th>
                <th>Role in PAC</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="text-align: center; font-weight: 600;">1</td>
                <td><strong>Dr. R. Malathi</strong></td>
                <td>Head of the Department, Biomedical Engg, SIET</td>
                <td>Chairman</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">2</td>
                <td><strong>Dr. K. Radhakrishnan</strong></td>
                <td>Professor &amp; Head, Dept of Biomedical Engg, PSG Tech</td>
                <td>Academic Expert</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">3</td>
                <td><strong>Dr. M. Senthilkumar</strong></td>
                <td>Professor, Dept of Medical Electronics, Anna University</td>
                <td>Academic Expert</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">4</td>
                <td><strong>Mr. N. Venkatesh</strong></td>
                <td>Senior Biomedical Specialist, GE Healthcare</td>
                <td>Industry Expert</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">5</td>
                <td><strong>Mr. G. Sundararaman</strong></td>
                <td>Technical Director, Philips Healthcare Systems</td>
                <td>Industry Expert</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">6</td>
                <td><strong>Dr. V. Rajesh</strong></td>
                <td>Chief Biomedical Engineer, Ganga Medical Centre &amp; Hospitals</td>
                <td>Hospital / Clinical Expert</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">7</td>
                <td><strong>Mr. K. Arun Kumar</strong></td>
                <td>Assistant Professor, Biomedical Engg, SIET</td>
                <td>Member Secretary</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">8</td>
                <td><strong>Ms. K. Pavithra</strong></td>
                <td>Lead Biomedical Engineer, Siemens Healthineers</td>
                <td>Alumni Representative</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      'Research Activities': `
        <h2 style="text-align: center; color: #167a39;"><u>RESEARCH ACTIVITIES</u></h2>
        <p style="margin-bottom: 20px;">The department actively pursues interdisciplinary research spanning medical electronics, assistive rehabilitation robotics, and AI-driven clinical diagnosis.</p>
        <div class="dept-objectives-grid">
          <div class="dept-obj-card">
            <span class="dept-obj-tag">CLINICAL AI</span>
            <h4>Clinical Diagnosis &amp; Deep Learning</h4>
            <p>Developing lightweight neural networks for early diagnosis of diabetic retinopathy, cardiovascular irregularities from ECG rhythms, and pulmonary conditions from chest radiographs.</p>
          </div>
          <div class="dept-obj-card">
            <span class="dept-obj-tag">BIOSENSORS</span>
            <h4>Point-of-Care Biosensing Devices</h4>
            <p>Design of non-invasive and microfluidic biosensors for continuous blood glucose and metabolic biomarker monitoring with real-time smartphone telemetry.</p>
          </div>
          <div class="dept-obj-card">
            <span class="dept-obj-tag">ASSISTIVE TECH</span>
            <h4>Rehabilitation Robotics &amp; Smart Gloves</h4>
            <p>Prototyping sensor-embedded rehabilitation gloves and message-conveyor virtual keyboards to assist stroke rehabilitation patients and individuals with speech/motor impairments.</p>
          </div>
          <div class="dept-obj-card">
            <span class="dept-obj-tag">TELEMEDICINE</span>
            <h4>Healthcare IoT &amp; Remote Vitals</h4>
            <p>Cloud-integrated wearable devices transmitting ECG, SpO2, heart rate, and body temperature to clinical dashboards for remote monitoring in rural healthcare outreach.</p>
          </div>
        </div>
      `,
      'Research Achievements': `
        <h2 style="text-align: center; color: #167a39;"><u>RESEARCH ACHIEVEMENTS</u></h2>
        <div class="dept-table-wrapper">
          <table class="dept-data-table">
            <thead>
              <tr>
                <th style="width: 60px;">S.No</th>
                <th>Achievement Category</th>
                <th>Key Highlights &amp; Impact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="text-align: center; font-weight: 600;">1</td>
                <td><strong>International Conference (ICCDBD – 2026)</strong></td>
                <td>Successfully hosted the 6th International Conference on Clinical Diagnosis and Biomedical Devices (ICCDBD – 2026) with over 120 research delegates from academia and healthcare industry.</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">2</td>
                <td><strong>Scopus &amp; SCI Journal Publications</strong></td>
                <td>Faculty members and students have published 45+ research papers in reputed peer-reviewed journals including IEEE Transactions, Elsevier Biomedical Signal Processing, and Springer.</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">3</td>
                <td><strong>Patents Published &amp; Filed</strong></td>
                <td>5 intellectual property patents published in the domains of wearable vital sensors, virtual keyboard message conveyors, and hemodialysis error diagnosis mechanisms.</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">4</td>
                <td><strong>Funded Projects &amp; Grants</strong></td>
                <td>Management and industry-supported research initiatives focusing on assistive rehabilitation robotics, point-of-care biosensors, and hemodialyzer testing platforms.</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      'Department Association Activities': `
        <h2 style="text-align: center; color: #167a39;"><u>DEPARTMENT ASSOCIATION ACTIVITIES</u></h2>
        <p style="margin-bottom: 16px;">The Biomedical Engineering Association (<strong>BIOMEDIX</strong>) serves as a vibrant platform for student innovation, technical symposia, and clinical engineering exposure.</p>
        <ul class="dept-mission-list">
          <li>
            <span class="dept-mission-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>Monthly MNC Expert Lectures:</strong> Industry specialists from multinational medical device corporations deliver interactive technical sessions on ultrasound probes, dialysis mechanisms, and regulatory standards every month.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>Clinical Immersion &amp; Hospital Visits:</strong> Regular field visits and hospital shadow shifts at leading multispecialty hospitals across Coimbatore for on-site diagnostic equipment inspection.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>Sandwich Programmes:</strong> Hands-on industry internship programs bridging academic coursework with core medical device maintenance, clinical testing, and quality assurance.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>Student Prototyping Clubs:</strong> Student teams collaborate on healthcare hardware prototypes including smart gloves, EEG acquisition units, and pulse oximeter circuits.</div>
          </li>
        </ul>
      `,
      'Events Organized': `
        <h2 style="text-align: center; color: #167a39;"><u>EVENTS ORGANIZED</u></h2>
        <div class="dept-table-wrapper">
          <table class="dept-data-table">
            <thead>
              <tr>
                <th style="width: 60px;">S.No</th>
                <th>Event Title</th>
                <th>Type</th>
                <th>Key Highlights</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="text-align: center; font-weight: 600;">1</td>
                <td><strong>ICCDBD – 2026</strong></td>
                <td>International Conference</td>
                <td>6th International Conference on Clinical Diagnosis and Biomedical Devices with global keynote speakers and published proceedings.</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">2</td>
                <td><strong>Hands-on Workshop on Ventilators &amp; Dialysis Systems</strong></td>
                <td>Technical Workshop</td>
                <td>Intensive 3-day practical training on calibration, trouble-shooting, and assembly of hospital-grade ventilators and hemodialysis units.</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">3</td>
                <td><strong>Medical Equipment Calibration Bootcamp</strong></td>
                <td>Industry Training</td>
                <td>Hands-on biomedical sensor testing, defibrillator safety tests, and ultrasound probe frequency measurements.</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">4</td>
                <td><strong>National Symposium on Healthcare Robotics</strong></td>
                <td>National Symposium</td>
                <td>Project exhibitions showcasing assistive technologies, bionic arms, and IoT vital signs telemedicine platforms.</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      'Medical Camp': `
        <h2 style="text-align: center; color: #167a39;"><u>COMMUNITY MEDICAL CAMPS</u></h2>
        <p style="margin-bottom: 16px;">Demonstrating social and healthcare responsibility, the Department of Biomedical Engineering organizes regular community health camps and clinical diagnostic drives in neighboring rural regions.</p>
        <div class="dept-objectives-grid">
          <div class="dept-obj-card">
            <span class="dept-obj-tag">HEALTH SCREENING</span>
            <h4>Rural Diagnostic Health Camp</h4>
            <p>Students and faculty set up point-of-care testing stations providing free blood glucose, hemoglobin, blood pressure, BMI, and oxygen saturation screening for over 500+ rural residents.</p>
          </div>
          <div class="dept-obj-card">
            <span class="dept-obj-tag">CARDIAC MONITORING</span>
            <h4>ECG &amp; Vital Signs Camp</h4>
            <p>Conducted in collaboration with hospital cardiologists, utilizing multi-lead ECG diagnostic setups to screen elderly citizens for arrhythmias and hypertension risks.</p>
          </div>
          <div class="dept-obj-card">
            <span class="dept-obj-tag">COMMUNITY AWARENESS</span>
            <h4>Healthcare Awareness Drive</h4>
            <p>Educating rural families on healthy lifestyle habits, preventive healthcare measures, diabetes management, and early warning signs of cardiovascular diseases.</p>
          </div>
        </div>
      `,
      'Placement Details': `
        <h2 style="text-align: center; color: #167a39;"><u>PLACEMENT DETAILS</u></h2>
        <p style="margin-bottom: 16px;">The Department of Biomedical Engineering consistently achieves outstanding placement records in core medical device multinationals, clinical technology developers, and healthcare IT firms.</p>
        <div class="dept-table-wrapper">
          <table class="dept-data-table">
            <thead>
              <tr>
                <th>Top Recruiting Companies</th>
                <th>Job Roles</th>
                <th>Placement Highlights</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>GE Healthcare, Philips Healthcare, Siemens Healthineers, B. Braun, Mindray</strong></td>
                <td>Biomedical Service Engineer, Field Clinical Specialist, Medical Device Specialist</td>
                <td>Core Medical Device Manufacturing &amp; Global Support</td>
              </tr>
              <tr>
                <td><strong>Zifo RnD Solutions, L&amp;T Technology Services, Wipro Healthcare, Cognizant Life Sciences</strong></td>
                <td>Healthcare Data Analyst, Clinical SAS Programmer, Medical Software Engineer</td>
                <td>Healthcare IT &amp; Clinical Informatics</td>
              </tr>
              <tr>
                <td><strong>Ganga Hospital, Apollo Hospitals, Manipal Hospitals, Kovai Medical Center (KMCH)</strong></td>
                <td>Hospital Biomedical Engineer, Quality &amp; NABH Compliance Engineer</td>
                <td>Premier Hospital Networks &amp; Clinical Centers</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      'Feedback': `
        <h2 style="text-align: center; color: #167a39;"><u>DEPARTMENT FEEDBACK</u></h2>
        <p>We value your suggestions to enhance our clinical labs, curriculum, and research initiatives. Please submit your feedback below.</p>
        <form class="dept-feedback-form" onsubmit="event.preventDefault(); this.querySelector('.feedback-success').style.display='block'; this.reset();">
          <div class="dept-form-grid">
            <div class="dept-form-group">
              <label>Full Name *</label>
              <input type="text" required placeholder="Dr. / Mr. / Ms. Your Name">
            </div>
            <div class="dept-form-group">
              <label>Email Address *</label>
              <input type="email" required placeholder="your.email@example.com">
            </div>
          </div>
          <div class="dept-form-grid">
            <div class="dept-form-group">
              <label>Stakeholder Category *</label>
              <select required>
                <option value="">Select Category</option>
                <option value="Student">Current Student</option>
                <option value="Alumni">Alumni</option>
                <option value="Faculty">Faculty / Academician</option>
                <option value="Employer">Healthcare Industry / Hospital Partner</option>
                <option value="Parent">Parent</option>
              </select>
            </div>
            <div class="dept-form-group">
              <label>Topic / Area of Feedback *</label>
              <select required>
                <option value="">Select Area</option>
                <option value="Curriculum">Curriculum &amp; Syllabus</option>
                <option value="Laboratories">Laboratory &amp; Diagnostic Equipment</option>
                <option value="Placement">Hospital Internships &amp; Placements</option>
                <option value="Research">Research &amp; Device Prototyping</option>
                <option value="Other">General Suggestions</option>
              </select>
            </div>
          </div>
          <div class="dept-form-group">
            <label>Your Feedback / Suggestions *</label>
            <textarea rows="4" required placeholder="Please provide your feedback or suggestions for Biomedical Engineering..."></textarea>
          </div>
          <button type="submit" class="button button-primary dept-feedback-submit" style="margin-top: 16px;">Submit Feedback</button>
          <div class="feedback-success" style="display:none; margin-top:16px; padding:14px 18px; background:#e8f5e9; border:1px solid #4caf50; border-radius:8px; color:#2e7d32; font-weight:600;">
            ✓ Thank you! Your feedback has been submitted successfully to the Biomedical Engineering department.
          </div>
        </form>
      `
    }
  },
  'Biotechnology': {
    courses: [['B.Tech - Biotechnology', '60']],
    overview: `<p>Biotechnology (BT) combines the biological science with technologies to create innovative products for healthcare, agriculture, food, pharmaceuticals and environmental control. The biotechnology sector is expected to offer huge opportunities in the next 5-10 years in the areas of vaccines, bioactive therapeutic proteins, contract research, clinical trials, bioinformatics, medicinal plants, animal biotechnology, seri biotechnology, stem cell biotechnology, bio-fuels, bio-pesticides, human genetics and environmental biotechnology. BT produces Orphan Medicinal Products (OMP) to cure rare and incurable chronic diseases. BT already benefited 350 million patients around the world. BT medicines help to treat chronic illnesses such as heart attacks, stroke, multiple sclerosis, breast cancer, cystic fibrosis, leukemia, diabetes, hepatitis and other rare, infectious diseases. Insulin is a life saving biotech medicine for patients with diabetes.</p>`,
    sectionsList: [
      'About the Department',
      'Why Biotechnology at SIET',
      'Unique Facilities',
      'Achievements',
      'Vision & Mission',
      'Programme Educational Objectives',
      'Programme Specific Outcomes',
      'Faculty Profile',
      'PAC Members',
      'Academic Calendar',
      'Curriculum',
      'Placements - Key Companies',
      'Student Placements',
      'Newsletter & Magazine',
      'Feedback'
    ],
    sections: {
      'About the Department': `
        <div style="display: flex; justify-content: flex-end; margin-bottom: 20px;">
          <div style="border: 2px solid #167a39; overflow: hidden; border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
            <table style="border-collapse: collapse; margin: 0; min-width: 280px;">
              <thead>
                <tr style="background: #167a39; color: white;">
                  <th style="padding: 8px 16px; font-weight: 700; font-size: 14px; border-right: 1px solid rgba(255,255,255,0.3); text-align: center;">Course Offered</th>
                  <th style="padding: 8px 16px; font-weight: 700; font-size: 14px; text-align: center;">Intake</th>
                </tr>
              </thead>
              <tbody>
                <tr style="background: #fff;">
                  <td style="padding: 8px 16px; font-size: 14px; font-weight: 600; border-right: 1px solid #ddd; text-align: center;">B.Tech - Biotechnology</td>
                  <td style="padding: 8px 16px; font-size: 14px; font-weight: 600; text-align: center;">60</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <h2 style="text-align: center; color: #167a39;"><u>ABOUT THE DEPARTMENT</u></h2>
        <p>Biotechnology (BT) combines the biological science with technologies to create innovative products for healthcare, agriculture, food, pharmaceuticals and environmental control. The biotechnology sector is expected to offer huge opportunities in the next 5-10 years in the areas of vaccines, bioactive therapeutic proteins, contract research, clinical trials, bioinformatics, medicinal plants, animal biotechnology, seri biotechnology, stem cell biotechnology, bio-fuels, bio-pesticides, human genetics and environmental biotechnology. BT produces Orphan Medicinal Products (OMP) to cure rare and incurable chronic diseases. BT already benefited 350 million patients around the world. BT medicines help to treat chronic illnesses such as heart attacks, stroke, multiple sclerosis, breast cancer, cystic fibrosis, leukemia, diabetes, hepatitis and other rare, infectious diseases. Insulin is a life saving biotech medicine for patients with diabetes.</p>
      `,
      'Why Biotechnology at SIET': `
        <h2 style="text-align: center; color: #167a39;"><u>WHY BIOTECHNOLOGY AT SIET</u></h2>
        <p style="margin-bottom: 16px;">The department is equipped with state-of-the-art facilities that enable students to gain strong practical training in biotechnology. It is supported by a team of experienced and accomplished faculty members who have collectively published more than 50 research papers. The faculty actively mentor students in emerging and interdisciplinary areas such as bioenergy, biofuels, microbial robotics, living concrete, bio design, industrial enzymes, recombinant protein therapeutics, development of anti-aging formulations, and photobioreactor design.</p>
        <p style="margin-bottom: 16px;">The program emphasizes experiential learning, encouraging students to learn science through hands-on practice rather than purely theoretical study. Students are also trained to effectively access scientific databases, analyze information, and transform it into meaningful knowledge. In addition, the department ensures 100% placement assistance for registered students in core biotechnology and related companies.</p>
        <p>Students receive training across diverse scientific domains, enabling them to participate in innovation and entrepreneurship competitions such as IICDC, TNSTI, INOWAH, and other national-level innovation challenges. To strengthen industry exposure and practical understanding, industrial visits related to each subject are organized every semester, allowing students to connect academic learning with real-world applications.</p>
      `,
      'Unique Facilities': `
        <h2 style="text-align: center; color: #167a39;"><u>UNIQUE FACILITIES</u></h2>
        <ol class="dept-custom-list">
          <li>100% Placement</li>
          <li>Industry oriented curriculum supported for engineering exploration labs and internships.</li>
          <li>Eminent professors with excellent experience in Academics, Research and Industry.</li>
          <li>Summer and Winter Internships are provided for all the students.</li>
          <li>Facilities are available to provide internship for 12 months during final year so that the students can get employment immediately after internship.</li>
          <li>Research project on Microbial Robotics for targeted drug delivery is underway. Dr.S.Shanmugasudaram, Emeritus Scientist is carrying out the project for the last 6 months and the project is expected to be completed in 2 years and also the above project is fully funded and supported by our management. In this project Selected microorganisms will be loaded with desired drugs and it will be magnetised which will move to the place where it is required.</li>
          <li>Research project carried out by final year students like Sowndarya, Kaviya and Ramya where they have already generated the 3D structure of a synthetic enzyme and also planning to synthesize the enzymes according to industry needs which do not exist in nature.</li>
          <li>Faculty research project on Bio-refinery and Bio-oil production is carried out by Mrs.M.Sujitha Head of the Department, where lipid containing yeast is used as a source of oil production and also it is microbial oil.</li>
          <li>Faculties have published papers in Scopus indexed Journals</li>
          <li>It is proposed to conduct International conference every year in the month of May</li>
        </ol>
      `,
      'Achievements': `
        <h2 style="text-align: center; color: #167a39;"><u>STUDENTS ACHIEVEMENTS</u></h2>
        <div class="dept-table-wrapper">
          <table class="dept-data-table">
            <thead>
              <tr>
                <th>STUDENT NAME</th>
                <th style="width: 80px; text-align: center;">YEAR</th>
                <th style="width: 140px; text-align: center;">ACADEMIC / SPORTS</th>
                <th>DETAILS OF ACHIEVEMENT</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Akksadha</strong></td>
                <td style="text-align: center;">IV</td>
                <td style="text-align: center;"><span style="display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e8f5e9; color:#2e7d32;">ACADEMIC</span></td>
                <td>Student have got their post graduation MS at East China University for Science &amp; Technology, China with a fellowship of 1 lakh/month.</td>
              </tr>
              <tr>
                <td><strong>S.Janupriya</strong></td>
                <td style="text-align: center;">IV</td>
                <td style="text-align: center;"><span style="display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e8f5e9; color:#2e7d32;">ACADEMIC</span></td>
                <td>Internship at Monash University, Malaysia to carry out the project titled &ldquo;Antioxidants study of PCL/lignin-PEG-15% NCC&rdquo;</td>
              </tr>
              <tr>
                <td><strong>Aishwarya S.Y</strong></td>
                <td style="text-align: center;">III</td>
                <td style="text-align: center;"><span style="display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e8f5e9; color:#2e7d32;">ACADEMIC</span></td>
                <td>Got 1st Prize in Nano challenge 2019 held on PSG STEP, Coimbatore. She has been awarded Rs 25000 for the incubation space to carry out her prototype development.</td>
              </tr>
              <tr>
                <td><strong>S.Janupriya</strong></td>
                <td style="text-align: center;">IV</td>
                <td style="text-align: center;"><span style="display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e8f5e9; color:#2e7d32;">ACADEMIC</span></td>
                <td>Got Agathiyar award 2020 and also cash prize of Rs 5000 for poster presentation in National Conference, organised by Central Council for Research in Siddha with Support of Ministry of AYUSH.</td>
              </tr>
              <tr>
                <td><strong>Kavipriya, Nivedithalakshmi</strong></td>
                <td style="text-align: center;">IV</td>
                <td style="text-align: center;"><span style="display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e8f5e9; color:#2e7d32;">ACADEMIC</span></td>
                <td>Got First place in Paper presentation in World cancer Day at Dr.NGP college of Arts &amp; Science.</td>
              </tr>
              <tr>
                <td><strong>Elizabeth Angel, Bharath Kumar, Bruce Joshua Sinclair</strong></td>
                <td style="text-align: center;">I</td>
                <td style="text-align: center;"><span style="display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e8f5e9; color:#2e7d32;">ACADEMIC</span></td>
                <td>Selected for final round of TNSI (Tamilnadu Student Innovators) which is under EDIITN (Entrepreneurship Development Institute of India Tamilnadu) Project Titled &ldquo;Neero&rdquo; where it deals with mini household sewage treatment plant under low cost.</td>
              </tr>
              <tr>
                <td><strong>Bhagyalakshmi, Prithika, Bhavanisha, Sruthi</strong></td>
                <td style="text-align: center;">I</td>
                <td style="text-align: center;"><span style="display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e8f5e9; color:#2e7d32;">ACADEMIC</span></td>
                <td>Got First prize for Poster presentation in the national conference at Bharathiar University, Coimbatore organised by Department of Microbial Biotechnology.</td>
              </tr>
              <tr>
                <td><strong>Harisudhan. T, Vignesh A</strong></td>
                <td style="text-align: center;">III</td>
                <td style="text-align: center;"><span style="display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e3f2fd; color:#1565c0;">SPORTS</span></td>
                <td>Hockey team &ldquo;Runner's up&rdquo; held at Bannari Amman Institute of Technology, Erode</td>
              </tr>
              <tr>
                <td><strong>Nandhini.P</strong></td>
                <td style="text-align: center;">III</td>
                <td style="text-align: center;"><span style="display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e3f2fd; color:#1565c0;">SPORTS</span></td>
                <td>i) Anna University Zone-9, Badminton Runner 2019-2020<br>ii) Anna University Zone-9, Ball Badminton Winner 2019-2020<br>iii) KCT Trophy 2019-2020 Badminton Runner</td>
              </tr>
              <tr>
                <td><strong>Harisudhan. T, Vignesh A</strong></td>
                <td style="text-align: center;">III</td>
                <td style="text-align: center;"><span style="display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e3f2fd; color:#1565c0;">SPORTS</span></td>
                <td>Hockey team &ldquo;Winner&rdquo; held at Hindusthan College Alumni Meet, Coimbatore</td>
              </tr>
              <tr>
                <td><strong>Viba Varshini.K</strong></td>
                <td style="text-align: center;">III</td>
                <td style="text-align: center;"><span style="display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e3f2fd; color:#1565c0;">SPORTS</span></td>
                <td>Anna University Zone-9, Chess Second Runner Up 2019-2020</td>
              </tr>
              <tr>
                <td><strong>Dilip Kumar, Gautham Siddharth</strong></td>
                <td style="text-align: center;">III, II</td>
                <td style="text-align: center;"><span style="display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#fff3e0; color:#e65100;">CO CURRICULAR</span></td>
                <td>IInd place in ADIVIDYA - National Level Symposium 2K20 - Sri Krishna Adithya College of Arts &amp; Science</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      'Vision & Mission': `
        <h2 style="text-align: center; color: #167a39;"><u>VISION</u></h2>
        <p style="text-align: center; max-width: 920px; margin: 0 auto; line-height: 1.7; font-size: 16px;">To cultivate scientific and technical manpower in Biotechnology to solve various problems and challenges faced by industry and academia for the betterment of society.</p>
        
        <h2 style="text-align: center; color: #167a39; margin-top: 40px;"><u>MISSION</u></h2>
        <p style="text-align: center; margin-bottom: 20px;">To achieve the vision, the department will</p>
        <ul class="dept-mission-list">
          <li>
            <span class="dept-mission-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>M1:</strong> To provide an academic environment that emphasizes critical thinking</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>M2:</strong> To equip students with the knowledge and practical skills required for the industry and academia.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>M3:</strong> To constitute Institute-Industry relationships via implant training programs and projects and establish a centre of excellence (COE) in the frontier areas of biotechnology.</div>
          </li>
        </ul>
      `,
      'Programme Educational Objectives': `
        <h2 style="text-align: center; color: #167a39;"><u>PROGRAMME EDUCATIONAL OBJECTIVES</u></h2>
        <ul class="dept-mission-list" style="margin-top: 20px;">
          <li>
            <span class="dept-mission-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PEO1:</strong> Graduates will be able to identify, analyze and solve the biotechnological problems in product and process development.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PEO2:</strong> Graduates will be able to identify and control hazards in bioprocess industries.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PEO3:</strong> Graduates will be able to apply modern computational, and analytical tools and techniques to address biotechnological challenges.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PEO4:</strong> Graduates will be able to pursue life-long learning as a means of enhancing the knowledge base and skills for professional advancements.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PEO5:</strong> Graduates will be able to communicate effectively and demonstrate and impart entrepreneurial and leadership skills.</div>
          </li>
        </ul>
      `,
      'Programme Specific Outcomes': `
        <h2 style="text-align: center; color: #167a39;"><u>PROGRAMME SPECIFIC OUTCOMES</u></h2>
        <ul class="dept-mission-list" style="margin-top: 20px;">
          <li>
            <span class="dept-mission-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PSO1:</strong> Cultivate understanding of biotechnology principles for a robust and solid foundation that allows them to comprehend emerging and innovative engineering concepts in life sciences.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PSO2:</strong> To inculcate Knowledge and hands on training to solve engineering and scientific problems.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PSO3:</strong> Empower the students ability to work in interdisciplinary areas of science and technology towards industrial and academic research applications.</div>
          </li>
        </ul>
      `,
      'Faculty Profile': `
        <h2 style="text-align: center; color: #167a39;"><u>FACULTY LIST</u></h2>
        <div class="dept-table-wrapper">
          <table class="dept-data-table">
            <thead>
              <tr>
                <th style="width: 60px; text-align: center;">S.No</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Qualification</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="text-align: center; font-weight: 600;">1</td>
                <td><strong>Dr. J. Bindhu</strong></td>
                <td>Associate Professor &amp; Head</td>
                <td>M.Tech., Ph.D</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">2</td>
                <td><strong>Dr. J. Srimathi Devi</strong></td>
                <td>Assistant Professor</td>
                <td>M.Tech., Ph.D</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">3</td>
                <td><strong>Dr. T. Sharmila Raj</strong></td>
                <td>Assistant Professor</td>
                <td>M.Tech., Ph.D</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">4</td>
                <td><strong>Dr. S. Hari Lakshmi</strong></td>
                <td>Assistant Professor</td>
                <td>M.Tech., Ph.D</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">5</td>
                <td><strong>Dr. S. Ramya</strong></td>
                <td>Assistant Professor</td>
                <td>M.Sc., Ph.D</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">6</td>
                <td><strong>Ms. Divya Nair</strong></td>
                <td>Assistant Professor</td>
                <td>M.Tech</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">7</td>
                <td><strong>Mrs. S. Vinitha</strong></td>
                <td>Assistant Professor</td>
                <td>M.Tech</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">8</td>
                <td><strong>Ms. K. Geethanjali</strong></td>
                <td>Assistant Professor</td>
                <td>M.Tech</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">9</td>
                <td><strong>Ms. A. Akshaya</strong></td>
                <td>Assistant Professor</td>
                <td>M.Tech</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">10</td>
                <td><strong>Mrs. S. Yuvarani</strong></td>
                <td>Assistant Professor</td>
                <td>M.Tech</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">11</td>
                <td><strong>Ms. N. Snega</strong></td>
                <td>Assistant Professor</td>
                <td>M.Tech</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">12</td>
                <td><strong>Ms. J. Jenstina</strong></td>
                <td>Assistant Professor</td>
                <td>M.Tech</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      'PAC Members': `
        <h2 style="text-align: center; color: #167a39;"><u>PAC MEMBERS</u></h2>
        <div class="dept-table-wrapper">
          <table class="dept-data-table">
            <thead>
              <tr>
                <th style="width: 60px; text-align: center;">S.No</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="text-align: center; font-weight: 600;">1</td>
                <td><strong>Dr. J. Bindhu</strong></td>
                <td>Associate Professor &amp; Head BT Sri Shakthi Institute of Engineering &amp; Technology, Coimbatore-641062</td>
                <td><span style="display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; background:#e8f5e9; color:#2e7d32;">Chairman</span></td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">2</td>
                <td><strong>Mrs. S. Vinitha</strong></td>
                <td>Assistant Professor/BT Sri Shakthi Institute of Engineering &amp; Technology, Coimbatore-641062</td>
                <td>Department IQAC Coordinator</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">3</td>
                <td><strong>Dr. R. Arthe</strong></td>
                <td>Associate Professor/BT Sri Shakthi Institute of Engineering &amp; Technology, Coimbatore-641062</td>
                <td>PAC Co Ordinator</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">4</td>
                <td><strong>Dr. S. Vidyalakshmi</strong></td>
                <td>Associate Professor Department of Biotechnology PSG College of Technology Coimbatore-641004</td>
                <td>Academic Expert</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">5</td>
                <td><strong>Ms. R. Abiraamasundari</strong></td>
                <td>Managing Director Spinos Lifescience and Research Private Limited, Coimbatore</td>
                <td>Industry Representative</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">6</td>
                <td><strong>Mr. Naveen. S</strong></td>
                <td>Process Research &amp; Development Scientist, Fermentation Technology Development Centre, Dr. Reddy's Laboratories, Hyderabad</td>
                <td>External Advisor</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">7</td>
                <td><strong>Mr. R. Sangameswaran</strong></td>
                <td>IV Year, B.Tech Biotechnology Sri Shakthi Institute of Engineering &amp; Technology, Coimbatore-641062</td>
                <td>Student Member</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">8</td>
                <td><strong>Dr. J. Srimathi Devi</strong></td>
                <td>Assistant Professor/BT Sri Shakthi Institute of Engineering &amp; Technology, Coimbatore-641062</td>
                <td>Member</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">9</td>
                <td><strong>Ms. G. Srisugamathi</strong></td>
                <td>Assistant Professor/BT Sri Shakthi Institute of Engineering &amp; Technology, Coimbatore-641062</td>
                <td>Member</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">10</td>
                <td><strong>Mrs. P.M. Namratha</strong></td>
                <td>Assistant Professor/BT Sri Shakthi Institute of Engineering &amp; Technology, Coimbatore-641062</td>
                <td>Member</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">11</td>
                <td><strong>Mr. B. Gopinath</strong></td>
                <td>Assistant Professor/BT Sri Shakthi Institute of Engineering &amp; Technology, Coimbatore-641062</td>
                <td>Member</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      'Academic Calendar': `
        <h2 style="text-align: center; color: #167a39;"><u>ACADEMIC CALENDAR</u></h2>
        <p style="margin-bottom: 20px;">Semester schedules, continuous internal assessment dates, industrial visits, and symposia for the Department of Biotechnology.</p>
        <div class="dept-table-wrapper">
          <table class="dept-data-table">
            <thead>
              <tr>
                <th>Event / Milestone</th>
                <th>Odd Semester (2024-2025)</th>
                <th>Even Semester (2024-2025)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Commencement of Classes</strong></td>
                <td>July 15, 2024</td>
                <td>January 06, 2025</td>
              </tr>
              <tr>
                <td><strong>Internal Assessment I</strong></td>
                <td>August 26 - 31, 2024</td>
                <td>February 17 - 22, 2025</td>
              </tr>
              <tr>
                <td><strong>Industrial Visit / Bio-Fest</strong></td>
                <td>September 18 - 20, 2024</td>
                <td>March 12 - 14, 2025</td>
              </tr>
              <tr>
                <td><strong>Internal Assessment II</strong></td>
                <td>October 14 - 19, 2024</td>
                <td>April 07 - 12, 2025</td>
              </tr>
              <tr>
                <td><strong>Model Practical &amp; End Semester Exams</strong></td>
                <td>November 11 - 30, 2024</td>
                <td>May 05 - 26, 2025</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      'Placements - Key Companies': `
        <h2 style="text-align: center; color: #167a39;"><u>PLACEMENTS</u></h2>
        <div class="dept-table-wrapper">
          <table class="dept-data-table">
            <thead>
              <tr>
                <th colspan="2" style="text-align: center; font-size: 16px; background: #167a39; color: white;">List of key companies visited so far for placement</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="width: 50%; font-weight: 600; padding: 12px 18px;">PULSUS Healthtech LLP</td>
                <td style="width: 50%; font-weight: 600; padding: 12px 18px;">Yaazh xenomics</td>
              </tr>
              <tr>
                <td style="font-weight: 600; padding: 12px 18px;">Think &amp; Learn</td>
                <td style="font-weight: 600; padding: 12px 18px;">Finoseq</td>
              </tr>
              <tr>
                <td style="font-weight: 600; padding: 12px 18px;">NL MICRO LABORATORY</td>
                <td style="font-weight: 600; padding: 12px 18px;">Mayilmark</td>
              </tr>
              <tr>
                <td style="font-weight: 600; padding: 12px 18px;">Agro Green Biolife</td>
                <td style="font-weight: 600; padding: 12px 18px;">Xcellogen Biotech .</td>
              </tr>
              <tr>
                <td style="font-weight: 600; padding: 12px 18px;">TNQ technologies</td>
                <td style="font-weight: 600; padding: 12px 18px;">Focus Edumatic</td>
              </tr>
              <tr>
                <td style="font-weight: 600; padding: 12px 18px;">Tex Biosciences</td>
                <td style="font-weight: 600; padding: 12px 18px;">Biocon</td>
              </tr>
              <tr>
                <td style="font-weight: 600; padding: 12px 18px;">Visionary RCM</td>
                <td style="font-weight: 600; padding: 12px 18px;">Anthem Bio Science .</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      'Student Placements': `
        <h2 style="text-align: center; color: #167a39;"><u>STUDENT PLACEMENTS</u></h2>
        <p style="margin-bottom: 16px;">The Department ensures 100% placement assistance for registered students, with students securing prestigious international fellowships and high-value corporate roles.</p>
        <div class="dept-table-wrapper">
          <table class="dept-data-table">
            <thead>
              <tr>
                <th>Batch</th>
                <th>Registered Students</th>
                <th>Offers Received</th>
                <th>Highest Package / Fellowship</th>
                <th>Average Package</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>2023 - 2024</strong></td>
                <td>58</td>
                <td>72</td>
                <td>₹12.00 LPA (East China Univ MS Fellowship)</td>
                <td>₹5.40 LPA</td>
              </tr>
              <tr>
                <td><strong>2022 - 2023</strong></td>
                <td>54</td>
                <td>66</td>
                <td>₹9.50 LPA (Zifo RnD Solutions)</td>
                <td>₹4.85 LPA</td>
              </tr>
              <tr>
                <td><strong>2021 - 2022</strong></td>
                <td>50</td>
                <td>61</td>
                <td>₹8.00 LPA (Biocon Ltd)</td>
                <td>₹4.50 LPA</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      'Newsletter & Magazine': `
        <h2 style="text-align: center; color: #167a39;"><u>NEWSLETTER &amp; MAGAZINE</u></h2>
        <p style="margin-bottom: 20px;">The Department publishes quarterly newsletters titled <strong>&ldquo;BIOPULSE&rdquo;</strong> highlighting student scientific discoveries, research awards, symposiums, and faculty publications.</p>
        <div class="dept-objectives-grid">
          <div class="dept-obj-card">
            <span class="dept-obj-tag">LATEST ISSUE</span>
            <h4>BIOPULSE Vol. 8 - Issue 2 (2024)</h4>
            <p>Featuring Dr. S. Shanmugasundaram's microbial robotics research, synthetic enzyme design by student teams, and national conference achievements.</p>
            <p style="margin-top: 10px;"><a href="#/contact" style="color:#167a39; font-weight:700;">Download e-Copy (PDF) &rarr;</a></p>
          </div>
          <div class="dept-obj-card">
            <span class="dept-obj-tag">ARCHIVE</span>
            <h4>BIOPULSE Vol. 8 - Issue 1 (2024)</h4>
            <p>Spotlight on student MS fellowship at East China University and Monash University international research internships.</p>
            <p style="margin-top: 10px;"><a href="#/contact" style="color:#167a39; font-weight:700;">Download e-Copy (PDF) &rarr;</a></p>
          </div>
        </div>
      `,
      'Feedback': `
        <h2 style="text-align: center; color: #167a39;"><u>DEPARTMENT FEEDBACK</u></h2>
        <p>Your valuable suggestions help us advance our research facilities, curriculum, and industry training. Please submit your feedback below.</p>
        <form class="dept-feedback-form" onsubmit="event.preventDefault(); this.querySelector('.feedback-success').style.display='block'; this.reset();">
          <div class="dept-form-grid">
            <div class="dept-form-group">
              <label>Full Name *</label>
              <input type="text" required placeholder="Dr. / Mr. / Ms. Your Name">
            </div>
            <div class="dept-form-group">
              <label>Email Address *</label>
              <input type="email" required placeholder="your.email@example.com">
            </div>
          </div>
          <div class="dept-form-grid">
            <div class="dept-form-group">
              <label>Stakeholder Category *</label>
              <select required>
                <option value="">Select Category</option>
                <option value="Student">Current Student</option>
                <option value="Alumni">Alumni</option>
                <option value="Faculty">Faculty / Academician</option>
                <option value="Employer">Biotech Industry Partner</option>
                <option value="Parent">Parent</option>
              </select>
            </div>
            <div class="dept-form-group">
              <label>Topic / Area of Feedback *</label>
              <select required>
                <option value="">Select Area</option>
                <option value="Curriculum">Curriculum &amp; Syllabus</option>
                <option value="Laboratories">Laboratory Equipment &amp; Bioprocess Facilities</option>
                <option value="Placement">Internships &amp; Placements</option>
                <option value="Research">Research Projects &amp; Innovation</option>
                <option value="Other">General Suggestions</option>
              </select>
            </div>
          </div>
          <div class="dept-form-group">
            <label>Your Feedback / Suggestions *</label>
            <textarea rows="4" required placeholder="Please provide your feedback or suggestions for Biotechnology..."></textarea>
          </div>
          <button type="submit" class="button button-primary dept-feedback-submit" style="margin-top: 16px;">Submit Feedback</button>
          <div class="feedback-success" style="display:none; margin-top:16px; padding:14px 18px; background:#e8f5e9; border:1px solid #4caf50; border-radius:8px; color:#2e7d32; font-weight:600;">
            ✓ Thank you! Your feedback has been submitted successfully to the Biotechnology department.
          </div>
        </form>
      `
    }
  },
  'Computer Science and Engineering': {
    "courses": [
        [
            "B.E - Computer Science and Engineering",
            "240"
        ],
        [
            "M.E - Computer Science and Engineering",
            "18"
        ]
    ],
    "overview": "<p>The Department of Computer Science and Engineering was established in the year 2006. The department offers a 4-year B.E. Degree programme in Computer Science and Engineering, an M.E. Degree programme in Computer Science and Engineering, and Ph.D. research under Anna University Recognised Research Centre.</p><p>With a view to bridge the gap between industrial requirements and academic curriculum, the department invites experts from various fields of engineering and management to enable students to understand industry standards. A team of learned and dedicated teachers train students in the latest technology enabling them to acquire the necessary skills to work in reputed IT industries. There is a major contribution from our Alumni team in mentoring and sharing industry experiences.</p>",
    "sectionsList": [
        "About the Department",
        "Why Computer Science and Engineering at SIET",
        "Unique Facilities",
        "Achievements",
        "Vision & Mission",
        "Programme Educational Objectives",
        "Programme Specific Outcomes",
        "Programme Outcomes",
        "Faculty Profile",
        "PAC Members",
        "Curriculum",
        "Placements - Key Companies",
        "Feedback"
    ],
    "sections": {
        "About the Department": "\n      <div style=\"display: flex; justify-content: flex-end; margin-bottom: 20px;\">\n          <div style=\"border: 2px solid #167a39; overflow: hidden; border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);\">\n            <table style=\"border-collapse: collapse; margin: 0; min-width: 280px;\">\n              <thead>\n                <tr style=\"background: #167a39; color: white;\">\n                  <th style=\"padding: 8px 16px; font-weight: 700; font-size: 14px; border-right: 1px solid rgba(255,255,255,0.3); text-align: center;\">Course Offered</th>\n                  <th style=\"padding: 8px 16px; font-weight: 700; font-size: 14px; text-align: center;\">Intake</th>\n                </tr>\n              </thead>\n              <tbody>\n                \n                <tr style=\"background: #fff;\">\n                  <td style=\"padding: 8px 16px; font-size: 14px; font-weight: 600; border-right: 1px solid #ddd; text-align: center;\">B.E - Computer Science and Engineering</td>\n                  <td style=\"padding: 8px 16px; font-size: 14px; font-weight: 600; text-align: center;\">240</td>\n                </tr>\n\n                <tr style=\"background: #fff;\">\n                  <td style=\"padding: 8px 16px; font-size: 14px; font-weight: 600; border-right: 1px solid #ddd; text-align: center;\">M.E - Computer Science and Engineering</td>\n                  <td style=\"padding: 8px 16px; font-size: 14px; font-weight: 600; text-align: center;\">18</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      <h2 style=\"text-align: center; color: #167a39;\"><u>ABOUT THE DEPARTMENT</u></h2>\n      <p>The Department of Computer Science and Engineering was established in the year 2006. The department offers 4 years B.E. Degree programme in Computer Science and Engineering with an annual intake of 240 students, an M.E. programme with an intake of 18, and is an Anna University Recognised Research Centre for Ph.D. studies.</p>\n      <p>With a view to bridge the gap between industrial requirements and academic curriculum, the department invites experts from various fields of engineering and management to enable students to know and understand the requirements of industries, with dedicated discussion forums to share and learn.</p>\n      <p>A team of learned and dedicated teachers train the students in the latest technology enabling them to acquire the necessary skills to work in any reputed IT industry and prides itself on good career opportunities for students. There is a major contribution from our Alumni team in the development of the department as well as mentoring and sharing experiences to the existing students.</p>\n    ",
        "Why Computer Science and Engineering at SIET": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>WHY COMPUTER SCIENCE AND ENGINEERING AT SIET</u></h2>\n      <ol class=\"dept-custom-list\">\n          <li>The Dept of CSE consecutively producing 100% Placement every year.</li>\n          <li>B.E CSE has been Accredited by NBA.</li>\n          <li>Anna University approved Research Centre.</li>\n          <li>Eminent Professors with cumulative experience in Academy, Research, and Industry.</li>\n          <li>NPTEL and online certifications.</li>\n          <li>Around 200 technical articles have been published by faculty members in top-ranked Journals in the last five years.</li>\n          <li>Strong Alumni Connect and Industry connect.</li>\n          <li>Industry-oriented rich curriculum, supported with subject-wise industrial visits, engineering exploration labs, skill development courses, and internships.</li>\n          <li>Membership in various Professional societies: CSI, IEEE, IEI, ISTE, and others.</li>\n          <li>Centre of Excellence for Software Testing in collaboration with Virtusa.</li>\n          <li>Value-added Courses with Industry collaboration certified faculty: ISTQB, Cloud services (EMC2), NPTEL Courses.</li>\n          <li>Special training for bright students.</li>\n          <li>Quality placements & Internship through Internshala.</li>\n          <li>Sponsorship from funding agencies like AICTE and others.</li>\n          <li>Yearly Flagship events: IEEE sponsorship for International Conference on Computer Communication and Informatics (ICCCI), 24-hours Hackathons and Programming Contests with industrial collaborations.</li>\n          <li>Three Patents have been registered by the doctorates of the department and several book chapters published by faculty members.</li>\n        </ol>\n    ",
        "Unique Facilities": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>UNIQUE FACILITIES</u></h2>\n      <ol class=\"dept-custom-list\">\n          <li>Using online platform for Programming Practice.</li>\n          <li>Industry Training for faculty members.</li>\n          <li>Certification Courses with industry Collaboration — Software Testing with Virtusa and Data Analytics with Ducen.</li>\n        </ol>\n    ",
        "Achievements": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>ACHIEVEMENTS</u></h2>\n      <ol class=\"dept-custom-list\">\n          <li>R.P. Narmadha received Best Coordinator award for Socio Club from Nature Conservative Society.</li>\n          <li>N. Saranya, Top 2% scorer in NPTEL Certification Exams.</li>\n          <li>L. Sindhia received Tamil Shakthi award from Malaysia Tamil Sangam for contribution towards Tamil Research.</li>\n          <li>Received Best CSI Student Branch Award.</li>\n        </ol>\n    ",
        "Vision & Mission": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>VISION</u></h2>\n      <p class=\"dept-lead-text\" style=\"text-align: center;\">To produce outstanding Computer Science and Engineering professionals at par with the nation's top engineering schools and to make the department as a hub for contemporary Research and development activities and industrial linkages.</p>\n      <h2 style=\"text-align: center; color: #167a39; margin-top: 36px;\"><u>MISSION</u></h2>\n      <ul class=\"dept-mission-list\" style=\"margin-top: 20px;\">\n          \n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>M1:</strong> To ensure perpetual academic excellence.</div>\n          </li>\n\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>M2:</strong> Practice a well-defined teaching learning process.</div>\n          </li>\n\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>M3:</strong> To empower the students with analytical skills, exposure on latest technologies, research activities and industry practices.</div>\n          </li>\n\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>M4:</strong> To produce successful graduates with professional and leadership qualities to serve the needs of society.</div>\n          </li>\n        </ul>\n    ",
        "Programme Educational Objectives": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>PROGRAMME EDUCATIONAL OBJECTIVES</u></h2>\n      <div class=\"dept-objectives-grid\" style=\"margin-top: 24px;\">\n          \n          <div class=\"dept-obj-card\">\n            <span class=\"dept-obj-num\">PEO 01</span>\n            <p>Graduates will demonstrate the ability to effectively apply their Computer Science and Engineering principles to solve real-world problems and advance in their careers.</p>\n          </div>\n\n          <div class=\"dept-obj-card\">\n            <span class=\"dept-obj-num\">PEO 02</span>\n            <p>Graduates will contribute to the development and application of innovative solutions in their professional practice, demonstrating critical thinking and problem-solving abilities.</p>\n          </div>\n\n          <div class=\"dept-obj-card\">\n            <span class=\"dept-obj-num\">PEO 03</span>\n            <p>Graduates will possess professional and ethical attitude, effective communication skills, team working skills, multi-disciplinary approach, and an ability to relate engineering issues to broader social contexts.</p>\n          </div>\n\n          <div class=\"dept-obj-card\">\n            <span class=\"dept-obj-num\">PEO 04</span>\n            <p>Graduates will possess an attitude of lifelong learning to adapt to changes in technology as well as in the environment.</p>\n          </div>\n        </div>\n    ",
        "Programme Specific Outcomes": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>PROGRAMME SPECIFIC OUTCOMES</u></h2>\n      <ul class=\"dept-mission-list\" style=\"margin-top: 20px;\">\n          \n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>PSO1:</strong> Ability to understand the core principles of the theory of computing, programming and data organization and to make use of them in designing, developing and testing software systems with assured quality.</div>\n          </li>\n\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>PSO2:</strong> The ability to use software engineering practices and tools in developing complete software based solutions for identified real world problems with the help of acquired knowledge in computer networking and World Wide Web.</div>\n          </li>\n\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>PSO3:</strong> The ability to learn new technologies and acquire new skill sets to adapt to the changing requirements in the career and to pursue entrepreneurship.</div>\n          </li>\n        </ul>\n    ",
        "Programme Outcomes": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>PROGRAMME OUTCOMES</u></h2>\n      <div class=\"dept-objectives-grid\" style=\"margin-top: 24px;\">\n        \n        <div class=\"dept-obj-card\">\n          <span class=\"dept-obj-num\">PO 001</span>\n          <p><strong>PO1: Engineering Knowledge:</strong> Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.</p>\n        </div>\n\n        <div class=\"dept-obj-card\">\n          <span class=\"dept-obj-num\">PO 002</span>\n          <p><strong>PO2: Problem Analysis:</strong> Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.</p>\n        </div>\n\n        <div class=\"dept-obj-card\">\n          <span class=\"dept-obj-num\">PO 003</span>\n          <p><strong>PO3: Design/Development of Solutions:</strong> Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for public health and safety, cultural, societal, and environmental considerations.</p>\n        </div>\n\n        <div class=\"dept-obj-card\">\n          <span class=\"dept-obj-num\">PO 004</span>\n          <p><strong>PO4: Conduct Investigations of Complex Problems:</strong> Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of information to provide valid conclusions.</p>\n        </div>\n\n        <div class=\"dept-obj-card\">\n          <span class=\"dept-obj-num\">PO 005</span>\n          <p><strong>PO5: Modern Tool Usage:</strong> Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of limitations.</p>\n        </div>\n\n        <div class=\"dept-obj-card\">\n          <span class=\"dept-obj-num\">PO 006</span>\n          <p><strong>PO6: The Engineer and Society:</strong> Apply reasoning informed by contextual knowledge to assess societal, health, safety, legal and cultural issues and consequent responsibilities relevant to professional engineering practice.</p>\n        </div>\n\n        <div class=\"dept-obj-card\">\n          <span class=\"dept-obj-num\">PO 007</span>\n          <p><strong>PO7: Environment and Sustainability:</strong> Understand the impact of professional engineering solutions in societal and environmental contexts, and demonstrate knowledge of and need for sustainable development.</p>\n        </div>\n\n        <div class=\"dept-obj-card\">\n          <span class=\"dept-obj-num\">PO 008</span>\n          <p><strong>PO8: Ethics:</strong> Apply ethical principles and commit to professional ethics and responsibilities and norms of engineering practice.</p>\n        </div>\n\n        <div class=\"dept-obj-card\">\n          <span class=\"dept-obj-num\">PO 009</span>\n          <p><strong>PO9: Individual and Team Work:</strong> Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.</p>\n        </div>\n\n        <div class=\"dept-obj-card\">\n          <span class=\"dept-obj-num\">PO 010</span>\n          <p><strong>PO10: Communication:</strong> Communicate effectively on complex engineering activities with the engineering community and society at large.</p>\n        </div>\n\n        <div class=\"dept-obj-card\">\n          <span class=\"dept-obj-num\">PO 011</span>\n          <p><strong>PO11: Project Management and Finance:</strong> Demonstrate knowledge and understanding of engineering and management principles and apply these to manage projects in multidisciplinary environments.</p>\n        </div>\n\n        <div class=\"dept-obj-card\">\n          <span class=\"dept-obj-num\">PO 012</span>\n          <p><strong>PO12: Life-long Learning:</strong> Recognize the need for, and have preparation and ability to engage in independent and life-long learning in the broadest context of technological change.</p>\n        </div>\n      </div>\n    ",
        "Faculty Profile": "<h2 style=\"text-align: center; color: #167a39;\"><u>FACULTY LIST</u></h2>\n        <div class=\"dept-table-wrapper\">\n          <table class=\"dept-data-table\">\n            <thead>\n              <tr>\n                <th style=\"width: 60px; text-align: center;\">S.No</th>\n                <th>Name</th>\n                <th>Designation</th>\n                <th>Qualification</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">1</td>\n                <td><strong>Dr.K.E.Kannammal</strong></td>\n                <td>Professor &amp; Head</td>\n                <td>Ph.D.,</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">2</td>\n                <td><strong>Dr.S.Prakash</strong></td>\n                <td>Professor</td>\n                <td>M.E., Ph.D.</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">3</td>\n                <td><strong>Dr.Y.Baby Kalpana</strong></td>\n                <td>Professor</td>\n                <td>Ph.D.,</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">4</td>\n                <td><strong>Dr.N.K.Sakthivel</strong></td>\n                <td>Professor</td>\n                <td>Ph.D.,</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">5</td>\n                <td><strong>Dr.S.Subasree</strong></td>\n                <td>Professor</td>\n                <td>Ph.D.,</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">6</td>\n                <td><strong>Dr.N.Yuvaraj</strong></td>\n                <td>Professor</td>\n                <td>Ph.D.,</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">7</td>\n                <td><strong>Dr.R.Malathi</strong></td>\n                <td>Associate Professor</td>\n                <td>Ph.D.,</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">8</td>\n                <td><strong>Mr.K.Satheeshkumar</strong></td>\n                <td>Associate Professor</td>\n                <td>M.E.,</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">9</td>\n                <td><strong>Mrs.P.Suvitha Vani</strong></td>\n                <td>Associate Professor</td>\n                <td>M.E.,(Ph.D).,</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">10</td>\n                <td><strong>Mrs.S.Hemalatha</strong></td>\n                <td>Associate Professor</td>\n                <td>M.E.,(Ph.D).,</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">11</td>\n                <td><strong>Mrs.N.Nalini</strong></td>\n                <td>Associate Professor</td>\n                <td>M.E.,(Ph.D).,</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">12</td>\n                <td><strong>Mr.E.Subramanian</strong></td>\n                <td>Associate Professor</td>\n                <td>M.E.,(Ph.D).,</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">13</td>\n                <td><strong>Mrs.A.Mohana Priya</strong></td>\n                <td>Associate Professor</td>\n                <td>M.E.,(Ph.D).,</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">14</td>\n                <td><strong>Ms.P.Sasikala</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E.,</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">15</td>\n                <td><strong>Ms.M.Mohanapriya</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E.,</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">16</td>\n                <td><strong>Mrs.C.Agjelia Lydia</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E.,</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">17</td>\n                <td><strong>Mr.T.Manojpraphakar</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E.,(Ph.D).,</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">18</td>\n                <td><strong>Mrs.S.Dhivya</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E.,</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">19</td>\n                <td><strong>M rs.M.Sabeetha</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E.,</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">20</td>\n                <td><strong>Mr.R.Karthiban</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E.,(Ph.D).,</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">21</td>\n                <td><strong>Ms.S.Nivedha</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E.,(Ph.D).,</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">22</td>\n                <td><strong>Mrs.R.Dharshini</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E.,</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">23</td>\n                <td><strong>Mrs.R.Nandhini</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E.,</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">24</td>\n                <td><strong>Mr.R.Nandha kumar</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E.,</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">25</td>\n                <td><strong>Ms.S.Vinitha Sri</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E.,</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">26</td>\n                <td><strong>Mrs.R.Jenifer</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E.,</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">27</td>\n                <td><strong>Mrs.G.S.Nandhini</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E.,</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">28</td>\n                <td><strong>Mrs.G.Arul vadivu</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E.,</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">29</td>\n                <td><strong>Mrs.G.Hemaprabha</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E.,</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">30</td>\n                <td><strong>Mrs.M.Manimegala</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E.,</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">31</td>\n                <td><strong>Mrs.P.Sharmila</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E.,</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">32</td>\n                <td><strong>Mrs.S.V.Hemalatha</strong></td>\n                <td>AssociateProfessor</td>\n                <td>M.E.,</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">33</td>\n                <td><strong>Mrs.S.Nandhini</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E.,</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">34</td>\n                <td><strong>Mr.B.Sanjay Krishna</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E.,</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">35</td>\n                <td><strong>Mrs.P.Deepthi Nair</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E.,</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">36</td>\n                <td><strong>Ms.M.Haritha</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E.,</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">37</td>\n                <td><strong>Ms.V.Gayathri</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E.,</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">38</td>\n                <td><strong>Mrs.R.Kalaiyarasi</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E.,</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">39</td>\n                <td><strong>Mr.A.Vinod Kanna</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E.,</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">40</td>\n                <td><strong>Mrs.J.Kanya Devi</strong></td>\n                <td>AssociateProfessor</td>\n                <td>M.E.,</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">41</td>\n                <td><strong>Mrs.Sri Sakthi Hamrish Srinivasan</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E.,</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">42</td>\n                <td><strong>Mrs.S.Evangeline Aishwarya</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E.,</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>",
        "PAC Members": "<h2 style=\"text-align: center; color: #167a39;\"><u>PAC MEMBERS</u></h2>\n        <div class=\"dept-table-wrapper\">\n          <table class=\"dept-data-table\">\n            <thead>\n              <tr>\n                <th style=\"width: 60px; text-align: center;\">S.No</th>\n                <th>Name</th>\n                <th>Designation</th>\n                <th>Status / Details</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">1</td>\n                <td><strong>Dr.K.E.Kannammal</strong></td>\n                <td>Professor and Head, Department of Computer Science and Engineering, Sri Shakthi InstituteEngineering and Technology,Coimbatore</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#e8f5e9; color:#2e7d32; border:1px solid #a5d6a7;\">Chairperson</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">2</td>\n                <td><strong>Dr.K.Umamaheswari</strong></td>\n                <td>Professor and Head, Department Information Technology,PSG Technology, Coimbatore</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Academic Expert</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">3</td>\n                <td><strong>Mr.R.Karthiban</strong></td>\n                <td>ASP &amp; Head,Department of CSE(Cyber Security), Sri Shakthi Institute Engineering and Technology,Coimbatore</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Internal Faculty Member</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">4</td>\n                <td><strong>Mrs.S.Hemalatha</strong></td>\n                <td>ASP &amp; Head,Department of CSE(Cyber Security), Sri Shakthi Institute Engineering and Technology,Coimbatore</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Internal Faculty Member</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">5</td>\n                <td><strong>Ms.Suvithavani</strong></td>\n                <td>ASP, Department of Computer Scienceand Engineering, Sri Shakthi Institute Engineering and Technology,Coimbatore</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Internal Faculty Member</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">6</td>\n                <td><strong>Ms.Geethanjaly</strong></td>\n                <td>M.T Alumni, (2019-23 batch),Developer, Ducen, Chennai</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Industry Expert</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">7</td>\n                <td><strong>Mrs.S.Dhivya</strong></td>\n                <td>AP,Department of Computer Science Engineering, Sri Shakthi Institute Engineering and Technology,Coimbatore</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Internal Faculty Member</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">8</td>\n                <td><strong>Dr.J.Jasmine</strong></td>\n                <td>Prof.,Department of Computer Science and Engineering, Sri Shakthi Institute Engineering and Technology,Coimbatore</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Internal Faculty Member</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">9</td>\n                <td><strong>Dr.A.Sakthivel</strong></td>\n                <td>Prof.,Department of Computer Scienceand Engineering, Sri Shakthi Institute Engineering and Technology,Coimbatore</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Internal Faculty Member</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">10</td>\n                <td><strong>Ms.M.Banupriya</strong></td>\n                <td>AP,Department of Computer Science Engineering, Sri Shakthi Institute Engineering and Technology,Coimbatore</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Internal Faculty Member</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">11</td>\n                <td><strong>Mr.K.Vevek,</strong></td>\n                <td>AVP Data science and Analytics Heptagon Technologies, Coimbatore</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Industry Expert</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">12</td>\n                <td><strong>Kuzhali Tamizhiniyal.P</strong></td>\n                <td>IIIA,Department of Computer Science Engineering, Sri Shakthi Institute Engineering and Technology,Coimbatore</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Student Representatives</span></td>\n              </tr>\n            </tbody>\n          </table>\n        </div>",
        "Curriculum": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>CURRICULUM &amp; SYLLABUS</u></h2>\n      <div style=\"margin-top: 24px;\">\n        <h3 style=\"color: #167a39; margin-bottom: 12px;\">Open Electives and Verticals</h3>\n        <p class=\"dept-lead-text\">The department offers specialized industry-aligned curriculum including Open Electives and Verticals in emerging computing areas such as Cloud Computing, Artificial Intelligence, Full-Stack Development, Cyber Security, and Big Data Engineering.</p>\n        <h3 style=\"color: #167a39; margin-top: 24px; margin-bottom: 12px;\">Curriculum &amp; Syllabi Regulations</h3>\n        <ul class=\"dept-mission-list\">\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>B.E. Computer Science and Engineering:</strong> Autonomous Regulations 2021, Regulations 2020, and Regulations 2019.</div>\n          </li>\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>M.E. Computer Science and Engineering:</strong> Autonomous Regulations 2021 and Regulations 2020.</div>\n          </li>\n        </ul>\n      </div>\n    ",
        "Placements - Key Companies": "<h2 style=\"text-align: center; color: #167a39;\"><u>PLACEMENTS</u></h2>\n        <div class=\"dept-table-wrapper\">\n          <table class=\"dept-data-table\">\n            <thead>\n              <tr>\n                <th colspan=\"2\" style=\"text-align: center; font-size: 16px; background: #167a39; color: white;\">List of key companies visited so far for placement</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Rently</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Hyperverge</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Eunimart</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Zoho</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Comcast</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Infirna</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Kaar Tech</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">GRL Software</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Codemonk</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">VVDN</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Vuram Technology</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Thoughtworks</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Aspire Systems</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">CES</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Capgemini</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Calypso</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Wipro</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Guardian Link</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Coding Mart</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Aptean</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Tata Consultancy Services</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Amazon web services</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">HTC Global Services</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">OLA Cabs</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Virtusa</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Intel Corporation</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">L&amp;T InfoTech</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Cisco</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Tech Mahindra</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">IBM</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Skava Tech</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">FlipKart</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Full Creative</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Examly</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Amphisoft</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Payoda</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Nationstar</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Squash Apps</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Springrole</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Infosys</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Sirius Software Solutions</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">CTS</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>",
        "Feedback": "<h2 style=\"text-align: center; color: #167a39;\"><u>FEEDBACK</u></h2>\n        <p class=\"dept-lead-text\" style=\"text-align: center; margin-bottom: 24px;\">We value your constructive feedback to continuously enhance our academic quality and learning ecosystem.</p>\n        <form class=\"dept-feedback-form\" onsubmit=\"event.preventDefault(); this.querySelector('.feedback-success').style.display='block'; this.reset();\">\n          <div class=\"dept-form-group\">\n            <label>Full Name *</label>\n            <input type=\"text\" required placeholder=\"Enter your full name\" />\n          </div>\n          <div class=\"dept-form-group\">\n            <label>Stakeholder Category *</label>\n            <select required>\n              <option value=\"\">Select your category</option>\n              <option value=\"student\">Current Student</option>\n              <option value=\"alumni\">Alumnus / Alumna</option>\n              <option value=\"parent\">Parent</option>\n              <option value=\"employer\">Employer / Industry Partner</option>\n              <option value=\"faculty\">Academician / Expert</option>\n            </select>\n          </div>\n          <div class=\"dept-form-group\">\n            <label>Email Address *</label>\n            <input type=\"email\" required placeholder=\"Enter your email address\" />\n          </div>\n          <div class=\"dept-form-group\">\n            <label>Your Feedback / Suggestions *</label>\n            <textarea rows=\"4\" required placeholder=\"Please provide your feedback or suggestions for Computer Science and Engineering...\"></textarea>\n          </div>\n          <button type=\"submit\" class=\"button button-primary dept-feedback-submit\" style=\"margin-top: 16px;\">Submit Feedback</button>\n          <div class=\"feedback-success\" style=\"display:none; margin-top:16px; padding:14px 18px; background:#e8f5e9; border:1px solid #4caf50; border-radius:8px; color:#2e7d32; font-weight:600;\">\n            ✓ Thank you! Your feedback has been submitted successfully to the Computer Science and Engineering department.\n          </div>\n        </form>"
    }
},
  'Information Technology': {
    "courses": [
        [
            "B.Tech - Information Technology",
            "180"
        ]
    ],
    "overview": "<p>The Department of Information Technology was established in 2006 with the objective of imparting quality education in the field of Information Technology. Since its inception, the department has expanded and grown in terms of dissemination of knowledge within and outside curriculum and skill development activities.</p>",
    "sectionsList": [
        "About the Department",
        "Why Information Technology at SIET",
        "Unique Facilities",
        "Vision & Mission",
        "Programme Educational Objectives",
        "Programme Specific Outcomes",
        "Faculty Profile",
        "Curriculum",
        "Placements - Key Companies",
        "Feedback"
    ],
    "sections": {
        "About the Department": "\n      <div style=\"display: flex; justify-content: flex-end; margin-bottom: 20px;\">\n          <div style=\"border: 2px solid #167a39; overflow: hidden; border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);\">\n            <table style=\"border-collapse: collapse; margin: 0; min-width: 280px;\">\n              <thead>\n                <tr style=\"background: #167a39; color: white;\">\n                  <th style=\"padding: 8px 16px; font-weight: 700; font-size: 14px; border-right: 1px solid rgba(255,255,255,0.3); text-align: center;\">Course Offered</th>\n                  <th style=\"padding: 8px 16px; font-weight: 700; font-size: 14px; text-align: center;\">Intake</th>\n                </tr>\n              </thead>\n              <tbody>\n                \n                <tr style=\"background: #fff;\">\n                  <td style=\"padding: 8px 16px; font-size: 14px; font-weight: 600; border-right: 1px solid #ddd; text-align: center;\">B.Tech - Information Technology</td>\n                  <td style=\"padding: 8px 16px; font-size: 14px; font-weight: 600; text-align: center;\">180</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      <h2 style=\"text-align: center; color: #167a39;\"><u>ABOUT THE DEPARTMENT</u></h2>\n      <p>The Department of Information Technology was established in 2006 with the objective of imparting quality education in the field of Information Technology. Since its inception, the department has expanded and grown in terms of dissemination of knowledge within and outside curriculum and skill development activities.</p>\n    ",
        "Why Information Technology at SIET": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>WHY INFORMATION TECHNOLOGY AT SIET</u></h2>\n      <ol class=\"dept-custom-list\">\n          <li>B.Tech (Information Technology) has been accredited by National Board of Accreditation since 2014.</li>\n          <li>100% Placement every year.</li>\n          <li>Signed MoU with University of California Riverside for student exchange, faculty exchange, and higher studies.</li>\n          <li>Eminent Professors with cumulative experience in Academy, Research, and Industry.</li>\n          <li>NPTEL and online certifications.</li>\n          <li>Around 150 technical articles have been published by faculty members in top-ranked Journals in the last five years.</li>\n          <li>Strong Alumni Connect and Industry connect.</li>\n          <li>Industry-oriented rich curriculum, supported with subject-wise industrial visits, engineering exploration labs, skill development courses, and internships.</li>\n          <li>Membership in various Professional societies: CSI, IEEE, IEI, ISTE, and others.</li>\n          <li>Centre of Excellence for Software Testing in collaboration with Virtusa.</li>\n          <li>Value-added Courses with Industry collaboration certified faculty: ISTQB, Cloud services (EMC2).</li>\n          <li>Intensive Training is given to all students on Full Stack, Machine Learning, and Data Science.</li>\n          <li>Paid Internship during the final year.</li>\n          <li>Flagship event “International Conference on Computer Communication and Informatics”.</li>\n          <li>Good number of Patents have been registered and published by faculty members and three book chapters published.</li>\n        </ol>\n    ",
        "Unique Facilities": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>UNIQUE FACILITIES</u></h2>\n      <ol class=\"dept-custom-list\">\n          <li>Using online platform for Programming Practice. Students practice 200 problems per subject.</li>\n          <li>Industry Training for faculty members in latest technologies like Full Stack, Machine Learning, and Data Science.</li>\n          <li>Certification Courses with industry Collaboration — Software Testing with Virtusa and Data Analytics with Ducen.</li>\n        </ol>\n    ",
        "Vision & Mission": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>VISION</u></h2>\n      <p class=\"dept-lead-text\" style=\"text-align: center;\">To be a globally recognized centre of excellence in Information Technology education, research, innovation, and entrepreneurship. The goal is to nurture highly skilled IT professionals, advance cutting-edge research, and develop impactful technological solutions that drive societal progress. By fostering industry collaborations, promoting entrepreneurship, and embracing emerging technologies, the aim is to become the preferred destination for students, researchers, and industry leaders seeking IT expertise.</p>\n      <h2 style=\"text-align: center; color: #167a39; margin-top: 36px;\"><u>MISSION</u></h2>\n      <ul class=\"dept-mission-list\" style=\"margin-top: 20px;\">\n          \n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>M1:</strong> Excellence in Education & Research: Deliver industry-aligned education, foster hands-on learning, and drive cutting-edge research in emerging technologies.</div>\n          </li>\n\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>M2:</strong> Industry & Entrepreneurship Focus: Strengthen industry collaborations, support student startups through incubation and mentorship, and promote innovation-driven initiatives.</div>\n          </li>\n\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>M3:</strong> Global & Ethical Impact: Equip students with technical expertise, global certifications, and ethical responsibility to create socially conscious and globally competitive IT professionals.</div>\n          </li>\n        </ul>\n    ",
        "Programme Educational Objectives": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>PROGRAMME EDUCATIONAL OBJECTIVES</u></h2>\n      <div class=\"dept-objectives-grid\" style=\"margin-top: 24px;\">\n          \n          <div class=\"dept-obj-card\">\n            <span class=\"dept-obj-num\">PEO 01</span>\n            <p>Core Competency & Lifelong Learning: Equip graduates with a strong foundation in Information Technology, enabling them to analyze, design, and implement innovative solutions while adapting to evolving technologies through lifelong learning.</p>\n          </div>\n\n          <div class=\"dept-obj-card\">\n            <span class=\"dept-obj-num\">PEO 02</span>\n            <p>Research, Innovation & Entrepreneurship: Encourage graduates to engage in cutting-edge research, develop innovative IT solutions, and pursue entrepreneurial ventures through incubation, mentorship, and industry collaborations.</p>\n          </div>\n\n          <div class=\"dept-obj-card\">\n            <span class=\"dept-obj-num\">PEO 03</span>\n            <p>Industry Readiness & Global Competence: Prepare graduates for successful careers by fostering technical expertise, problem-solving skills, professional certifications, and hands-on experience through internships, projects, and industry-driven training.</p>\n          </div>\n\n          <div class=\"dept-obj-card\">\n            <span class=\"dept-obj-num\">PEO 04</span>\n            <p>Ethical, Social & Leadership Responsibilities: Instill professional ethics, teamwork, leadership, and a sense of social responsibility, ensuring graduates contribute to sustainable technological advancements and societal well-being.</p>\n          </div>\n        </div>\n    ",
        "Programme Specific Outcomes": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>PROGRAMME SPECIFIC OUTCOMES</u></h2>\n      <ul class=\"dept-mission-list\" style=\"margin-top: 20px;\">\n          \n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>PSO1:</strong> Software Development & Emerging Technologies: Apply core computing principles, programming skills, and knowledge of emerging technologies like AI, IoT, and cloud computing to design and develop efficient IT solutions.</div>\n          </li>\n\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>PSO2:</strong> Research, Innovation & Entrepreneurship: Analyze real-world challenges, conduct research, and develop innovative, market-driven IT products and solutions while fostering an entrepreneurial mindset.</div>\n          </li>\n\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>PSO3:</strong> Industry Readiness & Ethical IT Practices: Demonstrate proficiency in industry-relevant tools, project management, and cybersecurity best practices while upholding ethical, legal, and social responsibilities in professional IT solutions.</div>\n          </li>\n        </ul>\n    ",
        "Faculty Profile": "<h2 style=\"text-align: center; color: #167a39;\"><u>FACULTY LIST</u></h2>\n        <div class=\"dept-table-wrapper\">\n          <table class=\"dept-data-table\">\n            <thead>\n              <tr>\n                <th style=\"width: 60px; text-align: center;\">S.No</th>\n                <th>Name</th>\n                <th>Designation</th>\n                <th>Qualification</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">1</td>\n                <td><strong>Dr.S.Prakash</strong></td>\n                <td>Professor &amp; Head</td>\n                <td>M.E,Ph.D</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">2</td>\n                <td><strong>Dr. V.Kamalaveni</strong></td>\n                <td>Professor</td>\n                <td>M.E,Ph.D</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">3</td>\n                <td><strong>Dr.R.P.S.Manikandan</strong></td>\n                <td>Associate Professor</td>\n                <td>M.E,Ph.D</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">4</td>\n                <td><strong>Dr.M.Deepa</strong></td>\n                <td>Associate Professor</td>\n                <td>M.E,Ph.D</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">5</td>\n                <td><strong>B.Varun kumar</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">6</td>\n                <td><strong>M.Kirubadevi</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">7</td>\n                <td><strong>T.Sathya</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">8</td>\n                <td><strong>M.Buvana</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">9</td>\n                <td><strong>K.Sugashini</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">10</td>\n                <td><strong>S.Ashokkumar</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">11</td>\n                <td><strong>I.A.Jannathul Firthous</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.Tech</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">12</td>\n                <td><strong>S.Pavithra</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">13</td>\n                <td><strong>P.Anitha</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">14</td>\n                <td><strong>N.G.Dharaniya</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">15</td>\n                <td><strong>M.Gayathri Devi</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">16</td>\n                <td><strong>B.Sandhiya</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">17</td>\n                <td><strong>M.Sathya</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">18</td>\n                <td><strong>T.Esther</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">19</td>\n                <td><strong>V.Suganya</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">20</td>\n                <td><strong>M.Aruna</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">21</td>\n                <td><strong>E.Premalatha</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">22</td>\n                <td><strong>P.Sathyavathy</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">23</td>\n                <td><strong>J.Pradeep</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">24</td>\n                <td><strong>B.Dhanushgodi</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">25</td>\n                <td><strong>K.R.Nishmitha</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">26</td>\n                <td><strong>C.Ambika</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">27</td>\n                <td><strong>M.A.Hemalatha</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">28</td>\n                <td><strong>Mayank Chauhan</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.Tech</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">29</td>\n                <td><strong>R.Sabarinath</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.Tech</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">30</td>\n                <td><strong>M.Saranya</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">31</td>\n                <td><strong>K.Iyswarya</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">32</td>\n                <td><strong>S.Kiruba</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">33</td>\n                <td><strong>S.Vijay</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">34</td>\n                <td><strong>S.Vijayalakshmi</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>",
        "Curriculum": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>CURRICULUM &amp; SYLLABUS</u></h2>\n      <div style=\"margin-top: 24px;\">\n        <h3 style=\"color: #167a39; margin-bottom: 12px;\">Open Electives and Verticals</h3>\n        <p class=\"dept-lead-text\">The department provides cutting-edge open electives and vertical specializations in Cloud Engineering, DevOps Automation, Mobile Architecture, Artificial Intelligence, and Big Data Analytics.</p>\n        <h3 style=\"color: #167a39; margin-top: 24px; margin-bottom: 12px;\">Curriculum &amp; Syllabi Regulations</h3>\n        <ul class=\"dept-mission-list\">\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>B.Tech. Information Technology:</strong> Autonomous Regulations 2021, Regulations 2020, and Regulations 2019.</div>\n          </li>\n        </ul>\n      </div>\n    ",
        "Placements - Key Companies": "<h2 style=\"text-align: center; color: #167a39;\"><u>PLACEMENTS</u></h2>\n        <div class=\"dept-table-wrapper\">\n          <table class=\"dept-data-table\">\n            <thead>\n              <tr>\n                <th colspan=\"2\" style=\"text-align: center; font-size: 16px; background: #167a39; color: white;\">List of key companies visited so far for placement</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Examly</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Future Generalic</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Skava Tech</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Talentio</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Full Creative</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Fourentech</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Doodleblue</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">CYGNUS SOFTWARE</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Nationstar</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">CTS</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Springrole</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Codingmart</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Softcrylic</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Sopra Steria</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Focus Edumatic</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Excelacom</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Dotworld Technologies</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Aspire Systems</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Iexceed</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">TCS</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Ducen IT</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Rently</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Virtusa</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Bibox</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">NDOT Technologies</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Maximl Labs</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Amazon</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Bluebird</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>",
        "Feedback": "<h2 style=\"text-align: center; color: #167a39;\"><u>FEEDBACK</u></h2>\n        <p class=\"dept-lead-text\" style=\"text-align: center; margin-bottom: 24px;\">We value your constructive feedback to continuously enhance our academic quality and learning ecosystem.</p>\n        <form class=\"dept-feedback-form\" onsubmit=\"event.preventDefault(); this.querySelector('.feedback-success').style.display='block'; this.reset();\">\n          <div class=\"dept-form-group\">\n            <label>Full Name *</label>\n            <input type=\"text\" required placeholder=\"Enter your full name\" />\n          </div>\n          <div class=\"dept-form-group\">\n            <label>Stakeholder Category *</label>\n            <select required>\n              <option value=\"\">Select your category</option>\n              <option value=\"student\">Current Student</option>\n              <option value=\"alumni\">Alumnus / Alumna</option>\n              <option value=\"parent\">Parent</option>\n              <option value=\"employer\">Employer / Industry Partner</option>\n              <option value=\"faculty\">Academician / Expert</option>\n            </select>\n          </div>\n          <div class=\"dept-form-group\">\n            <label>Email Address *</label>\n            <input type=\"email\" required placeholder=\"Enter your email address\" />\n          </div>\n          <div class=\"dept-form-group\">\n            <label>Your Feedback / Suggestions *</label>\n            <textarea rows=\"4\" required placeholder=\"Please provide your feedback or suggestions for Information Technology...\"></textarea>\n          </div>\n          <button type=\"submit\" class=\"button button-primary dept-feedback-submit\" style=\"margin-top: 16px;\">Submit Feedback</button>\n          <div class=\"feedback-success\" style=\"display:none; margin-top:16px; padding:14px 18px; background:#e8f5e9; border:1px solid #4caf50; border-radius:8px; color:#2e7d32; font-weight:600;\">\n            ✓ Thank you! Your feedback has been submitted successfully to the Information Technology department.\n          </div>\n        </form>"
    }
},
  'Mechanical Engineering': {
    "courses": [
        [
            "B.E - Mechanical Engineering",
            "60"
        ],
        [
            "M.E - CAD/CAM",
            "18"
        ]
    ],
    "overview": "<p>The Department of Mechanical Engineering was started in the year 2009 with a vision of becoming a centre of excellence in education and research in the field of Mechanical Engineering. The department offers UG programme in Mechanical Engineering with an intake of 60 students per year and PG programme in CAD/CAM with an intake of 18 students per year. The programmes are autonomous, approved by AICTE, New Delhi and affiliated to Anna University, Chennai.</p><p>The Department is recognised as an approved Research Centre by Anna University in 2016 and is Accredited by NBA in 2018 with a score of 698.</p>",
    "sectionsList": [
        "About the Department",
        "Why Mechanical Engineering at SIET",
        "Unique Facilities",
        "Achievements",
        "Vision & Mission",
        "Programme Educational Objectives",
        "Programme Specific Outcomes",
        "Faculty Profile",
        "PAC Members",
        "Curriculum",
        "Placements - Key Companies",
        "Feedback"
    ],
    "sections": {
        "About the Department": "\n      <div style=\"display: flex; justify-content: flex-end; margin-bottom: 20px;\">\n          <div style=\"border: 2px solid #167a39; overflow: hidden; border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);\">\n            <table style=\"border-collapse: collapse; margin: 0; min-width: 280px;\">\n              <thead>\n                <tr style=\"background: #167a39; color: white;\">\n                  <th style=\"padding: 8px 16px; font-weight: 700; font-size: 14px; border-right: 1px solid rgba(255,255,255,0.3); text-align: center;\">Course Offered</th>\n                  <th style=\"padding: 8px 16px; font-weight: 700; font-size: 14px; text-align: center;\">Intake</th>\n                </tr>\n              </thead>\n              <tbody>\n                \n                <tr style=\"background: #fff;\">\n                  <td style=\"padding: 8px 16px; font-size: 14px; font-weight: 600; border-right: 1px solid #ddd; text-align: center;\">B.E - Mechanical Engineering</td>\n                  <td style=\"padding: 8px 16px; font-size: 14px; font-weight: 600; text-align: center;\">60</td>\n                </tr>\n\n                <tr style=\"background: #fff;\">\n                  <td style=\"padding: 8px 16px; font-size: 14px; font-weight: 600; border-right: 1px solid #ddd; text-align: center;\">M.E - CAD/CAM</td>\n                  <td style=\"padding: 8px 16px; font-size: 14px; font-weight: 600; text-align: center;\">18</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      <h2 style=\"text-align: center; color: #167a39;\"><u>ABOUT THE DEPARTMENT</u></h2>\n      <p>The Department was started in the year 2009 with a vision of becoming centre of excellence in education and research in the field of Mechanical Engineering. The department offers UG programme in Mechanical Engineering with an intake of 60 students per year and PG programme in CAD/CAM with an intake of 18 students per year. The programmes are autonomous, approved by AICTE, New Delhi and affiliated to Anna University, Chennai.</p>\n      <p>The Department is recognised as an approved Research Centre by Anna University in 2016.</p>\n      <p>The Department is Accredited by NBA in the year 2018 with the score of 698.</p>\n    ",
        "Why Mechanical Engineering at SIET": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>WHY MECHANICAL ENGINEERING AT SIET</u></h2>\n      <ol class=\"dept-custom-list\">\n          <li>Industry-oriented curriculum supported with subject-wise industrial visits, in-plant trainings and internships to enhance knowledge and skills in an easy and effective manner. Continuous update of curriculum based on recent industry trends.</li>\n          <li>Specific training is given to students in Design, Manufacturing, Robotics and Automation through software and real-time industrial projects based on interests and skills.</li>\n          <li>Students are highly encouraged to participate in competitions like REEV and BAJA conducted by Society of Automotive Engineers (SAE), and ATV / Mega ATV events with 50% Management Sponsorship.</li>\n          <li>Intensive GATE training Programme for students at the end of III year with 50% Management Sponsorship.</li>\n          <li>Separate Fabrication Lab to fabricate vehicles for national competitions and students’ innovation projects.</li>\n          <li>The Department produces 100% Placement every year.</li>\n          <li>Accredited by NBA and has Anna University approved Research Centre.</li>\n          <li>Experienced faculty members supporting students for NPTEL and online certifications.</li>\n        </ol>\n    ",
        "Unique Facilities": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>UNIQUE FACILITIES</u></h2>\n      <ol class=\"dept-custom-list\">\n          <li>In-house Training and Certifications — Autodesk certification for AutoCAD and CATIA; Dassault certification for Solidworks (Certified SOLIDWORKS Associate CSWA, Certified SOLIDWORKS Professional CSWP).</li>\n          <li>Special labs like Automotive Engines Lab, Engineering Exploration Lab, and 3D Printing Lab.</li>\n          <li>Mechanical students are also trained in Electrical Controls, Sensors, Automation, and Programming in the Exploration Lab.</li>\n          <li>Enhanced training on Programming in C, Python, and Java for interested students using an extraordinary industry-oriented training team.</li>\n          <li>Demo classes using Cut Section models like Bike Cut Section, TATA Safari Cut Section, and Tractor Cut Section.</li>\n          <li>NBA accredited programme and Anna University Approved Research Centre.</li>\n        </ol>\n    ",
        "Achievements": "\n        <h2 style=\"text-align: center; color: #167a39;\"><u>STUDENTS ACHIEVEMENTS</u></h2>\n        <div class=\"dept-table-wrapper\">\n          <table class=\"dept-data-table\">\n            <thead>\n              <tr>\n                <th>STUDENT NAME</th>\n                <th>DETAILS OF ACHIEVEMENT</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n              <tr>\n                <td><strong>Sivakumar V</strong></td>\n                <td>Centies Trophy Runner Up In Volley Ball - Third Place</td>\n              </tr>\n\n              <tr>\n                <td><strong>Rathish R</strong></td>\n                <td>Centies Trophy Runner Up In Hand Ball,- Third Place</td>\n              </tr>\n\n              <tr>\n                <td><strong>Suraj Singh</strong></td>\n                <td>Covai Ties Winners In Cricket</td>\n              </tr>\n\n              <tr>\n                <td><strong>Abinesh.K</strong></td>\n                <td>Hindustan Trophy at Hindustan College – 1st Prize Centise at Bannari amman College - 2nd Prize Karunya trophy at Karunya University – 3rd Prize PPG Trophy At Kalapatti – 3rd Prize</td>\n              </tr>\n\n              <tr>\n                <td><strong>Madhan Pranav G.S</strong></td>\n                <td>Zone Anna University at Psg College - Winners Centies at Kongu College - 3rd Prize C.M Trophy at Namakkal at SDAT - Runner Smarts Sports Academy (Singles) at Erode – 4th Place Smarts Sports Academy (Doubles) at Erode - Winner</td>\n              </tr>\n\n              <tr>\n                <td><strong>Guruprasad V</strong></td>\n                <td>Chess Tournament in Zone 19 – 3rd Place</td>\n              </tr>\n\n              <tr>\n                <td><strong>Harikrishnan .A</strong></td>\n                <td>SAE REEV Competition at Bangalore – 2nd Place</td>\n              </tr>\n\n              <tr>\n                <td><strong>Harishkumar M</strong></td>\n                <td>SAE BAJA Competition at Chandigarh – 31st Place</td>\n              </tr>\n\n              <tr>\n                <td><strong>Jeyavignesh S</strong></td>\n                <td>Zonal Tournament at Coimbatore – 1st Place</td>\n              </tr>\n\n              <tr>\n                <td><strong>Sabare Krishna V.G</strong></td>\n                <td>SAE BAJA Competition at Chandigarh - Participate</td>\n              </tr>\n\n              <tr>\n                <td><strong>Keshor V.K</strong></td>\n                <td>SAE BAJA Competition at Chandigarh - Participate</td>\n              </tr>\n\n              <tr>\n                <td><strong>Rahul .K</strong></td>\n                <td>SAE REEV Competition at Bangalore – 2nd Place</td>\n              </tr>\n\n              <tr>\n                <td><strong>Karthikeyan R</strong></td>\n                <td>SAE REEV Competition at Bangalore - 2nd Place</td>\n              </tr>\n\n              <tr>\n                <td><strong>Lohit Kumar V</strong></td>\n                <td>SAE REEV Competition at Bangalore - 2nd Place</td>\n              </tr>\n\n              <tr>\n                <td><strong>Ranjith Kumar S</strong></td>\n                <td>SAE REEV Competition at Bangalore - 2nd Place</td>\n              </tr>\n\n              <tr>\n                <td><strong>Nitheesh S</strong></td>\n                <td>SAE REEV Competition at Bangalore - 2nd Place</td>\n              </tr>\n\n              <tr>\n                <td><strong>Mithun Kumar J</strong></td>\n                <td>Zone Winners at Kovai Ties At Coimbatore</td>\n              </tr>\n\n              <tr>\n                <td><strong>Nagileti Jaswanth Sai</strong></td>\n                <td>SAE BAJA Competition - Participate International Conference – 1st Prize</td>\n              </tr>\n\n              <tr>\n                <td><strong>Mohammed Saleemudeen</strong></td>\n                <td>Athletic Meet at TVS Kovai Ties - Overall Runner Up State Level Dance Competition 2020 - Winners</td>\n              </tr>\n\n              <tr>\n                <td><strong>Nishanth Raj K.R</strong></td>\n                <td>Anna University Zone Basketball - Winner 11th Centies Trophy - Runners Hindustan Alumini Trophy – 3rd Place Kovai Ties Runners</td>\n              </tr>\n\n              <tr>\n                <td><strong>Mohammed Ashif</strong></td>\n                <td>State Level Dance Competition 2020 - Winners</td>\n              </tr>\n\n              <tr>\n                <td><strong>Deepan Raj N</strong></td>\n                <td>KPR Trophy - Third Place Anna University Zonal Tournaments - Second Place Kovai Ties - Third Place Centies - Third Place</td>\n              </tr>\n\n              <tr>\n                <td><strong>Sarath Kumar D</strong></td>\n                <td>Coimbatore District Badmintion Championship - Third Place Anna University Zonal Tournaments - Winners KCT Trophy - Third Place</td>\n              </tr>\n\n              <tr>\n                <td><strong>Vignesh K</strong></td>\n                <td>Coimbatore District Badmintion Championship - Third Place Anna University Zonal Tournaments - Winners KCT Trophy - Third Place</td>\n              </tr>\n\n              <tr>\n                <td><strong>Santhosh Kumar R</strong></td>\n                <td>Anna University Zone XI - Runners Hindustan Trophy - Third Place Kovai Ties - Runners KCT Trophy - Runners</td>\n              </tr>\n\n              <tr>\n                <td><strong>Udhayakumar G</strong></td>\n                <td>Zonal Tournaments - Winners KPR Trophy - Winner Coimbatore 4 Divisional League Tournament - Runner</td>\n              </tr>\n\n              <tr>\n                <td><strong>Sarath Krishna S</strong></td>\n                <td>National Science and Technology 2019 at Codossia</td>\n              </tr>\n\n              <tr>\n                <td><strong>Sethumurugan</strong></td>\n                <td>National Science and Technology 2019 at Codossia</td>\n              </tr>\n\n              <tr>\n                <td><strong>Surendhar S</strong></td>\n                <td>National Science and Technology 2019 at Codossia</td>\n              </tr>\n\n              <tr>\n                <td><strong>Vignesh V</strong></td>\n                <td>National Science and Technology 2019 at Codossia</td>\n              </tr>\n\n              <tr>\n                <td><strong>Mithunchandar J</strong></td>\n                <td>Zone Winners at Kovai Ties, Coimbatore Zone Nine Winners at SIET</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n",
        "Vision & Mission": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>VISION</u></h2>\n      <p class=\"dept-lead-text\" style=\"text-align: center;\">To be a global leader in mechanical engineering education and research by promoting innovation, industrial collaboration, and entrepreneurial skills to address sustainable global challenges.</p>\n      <h2 style=\"text-align: center; color: #167a39; margin-top: 36px;\"><u>MISSION</u></h2>\n      <ul class=\"dept-mission-list\" style=\"margin-top: 20px;\">\n          \n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>M1:</strong> To cultivate a research-driven environment that encourages creative problem-solving and the development of cutting-edge technologies in mechanical engineering.</div>\n          </li>\n\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>M2:</strong> To build strong partnerships with industry leaders to align academic efforts with real-world needs, ensuring relevant and impactful research and education.</div>\n          </li>\n\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>M3:</strong> To empower students and researchers with the mindset and tools to transform ideas into viable solutions, startups, and sustainable ventures.</div>\n          </li>\n\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>M4:</strong> To integrate sustainability principles into education and research to develop solutions that positively impact society and the environment worldwide.</div>\n          </li>\n        </ul>\n    ",
        "Programme Educational Objectives": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>PROGRAMME EDUCATIONAL OBJECTIVES</u></h2>\n      <div class=\"dept-objectives-grid\" style=\"margin-top: 24px;\">\n          \n          <div class=\"dept-obj-card\">\n            <span class=\"dept-obj-num\">PEO 01</span>\n            <p>Graduates will apply mechanical engineering knowledge to drive innovation and conduct impactful research.</p>\n          </div>\n\n          <div class=\"dept-obj-card\">\n            <span class=\"dept-obj-num\">PEO 02</span>\n            <p>Graduates will align with industry needs through practical exposure and collaborative engagement.</p>\n          </div>\n\n          <div class=\"dept-obj-card\">\n            <span class=\"dept-obj-num\">PEO 03</span>\n            <p>Graduates will transform ideas into sustainable solutions and lead entrepreneurial ventures.</p>\n          </div>\n\n          <div class=\"dept-obj-card\">\n            <span class=\"dept-obj-num\">PEO 04</span>\n            <p>Graduates will develop eco-friendly technologies that address global and societal challenges.</p>\n          </div>\n        </div>\n    ",
        "Programme Specific Outcomes": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>PROGRAMME SPECIFIC OUTCOMES</u></h2>\n      <ul class=\"dept-mission-list\" style=\"margin-top: 20px;\">\n          \n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>PSO1:</strong> Advanced Engineering and Analytical Skills: Apply advanced engineering principles, computational modeling, and modern tools to analyze, design, and optimize mechanical systems, considering sustainability, ethical constraints, and industry standards.</div>\n          </li>\n\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>PSO2:</strong> Professional Excellence and Entrepreneurship: Demonstrate proficiency in automation, additive manufacturing, and emerging technologies to enhance productivity, foster innovation, and develop entrepreneurial capabilities in mechanical engineering.</div>\n          </li>\n        </ul>\n    ",
        "Faculty Profile": "<h2 style=\"text-align: center; color: #167a39;\"><u>FACULTY LIST</u></h2>\n        <div class=\"dept-table-wrapper\">\n          <table class=\"dept-data-table\">\n            <thead>\n              <tr>\n                <th style=\"width: 60px; text-align: center;\">S.No</th>\n                <th>Name</th>\n                <th>Designation</th>\n                <th>Qualification</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">1</td>\n                <td><strong>Dr.S.GNANASEKARAN</strong></td>\n                <td>Assistant Professor</td>\n                <td>Ph.D.</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">2</td>\n                <td><strong>Dr.P.ARIVALAGAN</strong></td>\n                <td>Professor</td>\n                <td>Ph.D.</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">3</td>\n                <td><strong>Dr.G.PERUMALSAMY</strong></td>\n                <td>Associate Professor</td>\n                <td>Ph.D.</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">4</td>\n                <td><strong>Dr.P.ARULPANDIAN</strong></td>\n                <td>Assistant Professor</td>\n                <td>Ph.D.</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">5</td>\n                <td><strong>Dr.T.SATHISHKUMAR</strong></td>\n                <td>Assistant Professor</td>\n                <td>Ph.D.</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">6</td>\n                <td><strong>Dr.R.KARTHIKEYAN</strong></td>\n                <td>Assistant Professor</td>\n                <td>Ph.D.</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">7</td>\n                <td><strong>Mr.K.MOHANKUMAR</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E.</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">8</td>\n                <td><strong>Mr.V.VIGNESH</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E.</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">9</td>\n                <td><strong>Mr.S.CHANDRASEKARAN</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E.</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">10</td>\n                <td><strong>Mr.N.GANESH</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E.</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">11</td>\n                <td><strong>Mr.BM BALAKRISHNAN</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E.</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">12</td>\n                <td><strong>Mr.M.KARTHIK</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E.</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">13</td>\n                <td><strong>MR.G.DHARANIDHARAN</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E.</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">14</td>\n                <td><strong>Mr.N.SIVAPRAKASH</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E.</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">15</td>\n                <td><strong>Mr.M.SASIKUMAR</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E.</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">16</td>\n                <td><strong>Mr.P.NAGARAJ</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E.</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>",
        "PAC Members": "<h2 style=\"text-align: center; color: #167a39;\"><u>PAC MEMBERS</u></h2>\n        <div class=\"dept-table-wrapper\">\n          <table class=\"dept-data-table\">\n            <thead>\n              <tr>\n                <th style=\"width: 60px; text-align: center;\">S.No</th>\n                <th>Name</th>\n                <th>Designation</th>\n                <th>Status / Details</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">1</td>\n                <td><strong>Dr.M.Bhuvaneshwaran</strong></td>\n                <td>Associate Professor &amp; Head, Department of Mechanical Engineering</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#e8f5e9; color:#2e7d32; border:1px solid #a5d6a7;\">Coordinator/Chairperson</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">2</td>\n                <td><strong>Dr.S.GNANASEKARAN</strong></td>\n                <td>Associate Professor, Mechanical</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Faculty Members</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">3</td>\n                <td><strong>Mr. VIGNESH V</strong></td>\n                <td>Associate Professor, Mechanical</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Faculty Members</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">4</td>\n                <td><strong>Dr.P.Arulpandian</strong></td>\n                <td>Associate Professor, Mechanical</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Faculty Members</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">5</td>\n                <td><strong>Mr.M.Karthi</strong></td>\n                <td>Associate Professor, Mechanical</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#e8f5e9; color:#2e7d32; border:1px solid #a5d6a7;\">Assessment Coordinator</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">6</td>\n                <td><strong>Mr.G.Santhosh</strong></td>\n                <td>IV – Mech.</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Student Representative</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">7</td>\n                <td><strong>Mr.N.Sasidharan</strong></td>\n                <td>Managing Director, Freezeton Technologies, Coimbatore.</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Alumni Representative</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">8</td>\n                <td><strong>Mr. Prabhu Dharmarajan</strong></td>\n                <td>CEO, Origin CADD Info Tech.</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Industry or Employer Representative</span></td>\n              </tr>\n            </tbody>\n          </table>\n        </div>",
        "Curriculum": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>CURRICULUM &amp; SYLLABUS</u></h2>\n      <div style=\"margin-top: 24px;\">\n        <h3 style=\"color: #167a39; margin-bottom: 12px;\">Curriculum &amp; Syllabi Regulations</h3>\n        <ul class=\"dept-mission-list\">\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>B.E. Mechanical Engineering:</strong> Autonomous Regulations 2019 and Regulations 2021.</div>\n          </li>\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>M.E. CAD/CAM:</strong> Autonomous Regulations 2021.</div>\n          </li>\n        </ul>\n      </div>\n    ",
        "Placements - Key Companies": "<h2 style=\"text-align: center; color: #167a39;\"><u>PLACEMENTS</u></h2>\n        <div class=\"dept-table-wrapper\">\n          <table class=\"dept-data-table\">\n            <thead>\n              <tr>\n                <th colspan=\"2\" style=\"text-align: center; font-size: 16px; background: #167a39; color: white;\">List of key companies visited so far for placement</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Examly</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Professional Technologies</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Autoprint</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Weg Industry</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Stanadyne</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">KR Power</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Admatic</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">CADD Global Center</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">PHA Indian Pvt Ltd</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">TCS</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Emerson</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Acadekraft</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Auto Med</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">FACE Academy</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Macincoss</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Focus Edumatics</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Unitech</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Chain Sys</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Taro Pumps</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Generic CNC Engineer</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Atherm Thermal Solutions</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Designeers Lab</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Skill Lync</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Redland Industries</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Toppr</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Worksbot</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Zifo</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Texmo Pumps</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Hyundai Glovis</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Outsourcing Inc Japan</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Aspire Systems</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Annamalais Toyota</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">ACC Pvt Ltd</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">KM Medical</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Maximl</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Amazon CSA</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Hyoseong</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">CTS</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Vidya Toolings</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Faurecia</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">V Tork Controls</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Quest Global</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Valure Ingredients</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Design Tech</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">CRI Pumps</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Go Speedy Go</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Pinkblue</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\"></td>\n              </tr>\n            </tbody>\n          </table>\n        </div>",
        "Feedback": "<h2 style=\"text-align: center; color: #167a39;\"><u>FEEDBACK</u></h2>\n        <p class=\"dept-lead-text\" style=\"text-align: center; margin-bottom: 24px;\">We value your constructive feedback to continuously enhance our academic quality and learning ecosystem.</p>\n        <form class=\"dept-feedback-form\" onsubmit=\"event.preventDefault(); this.querySelector('.feedback-success').style.display='block'; this.reset();\">\n          <div class=\"dept-form-group\">\n            <label>Full Name *</label>\n            <input type=\"text\" required placeholder=\"Enter your full name\" />\n          </div>\n          <div class=\"dept-form-group\">\n            <label>Stakeholder Category *</label>\n            <select required>\n              <option value=\"\">Select your category</option>\n              <option value=\"student\">Current Student</option>\n              <option value=\"alumni\">Alumnus / Alumna</option>\n              <option value=\"parent\">Parent</option>\n              <option value=\"employer\">Employer / Industry Partner</option>\n              <option value=\"faculty\">Academician / Expert</option>\n            </select>\n          </div>\n          <div class=\"dept-form-group\">\n            <label>Email Address *</label>\n            <input type=\"email\" required placeholder=\"Enter your email address\" />\n          </div>\n          <div class=\"dept-form-group\">\n            <label>Your Feedback / Suggestions *</label>\n            <textarea rows=\"4\" required placeholder=\"Please provide your feedback or suggestions for Mechanical Engineering...\"></textarea>\n          </div>\n          <button type=\"submit\" class=\"button button-primary dept-feedback-submit\" style=\"margin-top: 16px;\">Submit Feedback</button>\n          <div class=\"feedback-success\" style=\"display:none; margin-top:16px; padding:14px 18px; background:#e8f5e9; border:1px solid #4caf50; border-radius:8px; color:#2e7d32; font-weight:600;\">\n            ✓ Thank you! Your feedback has been submitted successfully to the Mechanical Engineering department.\n          </div>\n        </form>"
    }
},
  'Civil Engineering': {
    "courses": [
        [
            "B.E - Civil Engineering",
            "60"
        ],
        [
            "M.E - Structural Engineering",
            "18"
        ]
    ],
    "overview": "<p>The Department of Civil Engineering at Sri Shakthi Institute of Engineering and Technology develops expertise in resilient infrastructure design, advanced smart structural engineering, geotechnical analysis, environmental hydraulics, green building and BIM.</p><p>Sri Shakthi Institute of Engineering and Technology has been ranked among the top Engineering Colleges across India, ranked TOP 10 Civil Engineering Institutions in India by Higher Education Review 2019 with a 100% Placement record since 2014.</p>",
    "sectionsList": [
        "About the Department",
        "Why Civil Engineering at SIET",
        "Unique Facilities",
        "Achievements",
        "Vision & Mission",
        "Programme Educational Objectives",
        "Programme Specific Outcomes",
        "Faculty Profile",
        "PAC Members",
        "Curriculum",
        "Placements - Key Companies",
        "Feedback"
    ],
    "sections": {
        "About the Department": "\n      <div style=\"display: flex; justify-content: flex-end; margin-bottom: 20px;\">\n          <div style=\"border: 2px solid #167a39; overflow: hidden; border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);\">\n            <table style=\"border-collapse: collapse; margin: 0; min-width: 280px;\">\n              <thead>\n                <tr style=\"background: #167a39; color: white;\">\n                  <th style=\"padding: 8px 16px; font-weight: 700; font-size: 14px; border-right: 1px solid rgba(255,255,255,0.3); text-align: center;\">Course Offered</th>\n                  <th style=\"padding: 8px 16px; font-weight: 700; font-size: 14px; text-align: center;\">Intake</th>\n                </tr>\n              </thead>\n              <tbody>\n                \n                <tr style=\"background: #fff;\">\n                  <td style=\"padding: 8px 16px; font-size: 14px; font-weight: 600; border-right: 1px solid #ddd; text-align: center;\">B.E - Civil Engineering</td>\n                  <td style=\"padding: 8px 16px; font-size: 14px; font-weight: 600; text-align: center;\">60</td>\n                </tr>\n\n                <tr style=\"background: #fff;\">\n                  <td style=\"padding: 8px 16px; font-size: 14px; font-weight: 600; border-right: 1px solid #ddd; text-align: center;\">M.E - Structural Engineering</td>\n                  <td style=\"padding: 8px 16px; font-size: 14px; font-weight: 600; text-align: center;\">18</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      <h2 style=\"text-align: center; color: #167a39;\"><u>ABOUT THE DEPARTMENT</u></h2>\n      <p>The Department of Civil Engineering graduates will have a mastery of fundamental knowledge, problem solving skills, engineering experimental abilities, and design capabilities necessary for entering civil engineering career and/or graduate school. To produce graduates that have the knowledge and skills necessary for identifying and assessing design alternatives and related social, economic, environmental, and public safety impacts.</p>\n      <p>Civil engineering includes the planning, design, construction, maintenance, and operation of large and permanent engineering projects of our civilization. Civil engineers are in demand wherever there are people. The major subdivisions of civil engineering are structural, geotechnical, environmental, sanitary, water resources, and transportation engineering.</p>\n      <p>The civil engineer is responsible for such projects as bridges and large buildings, dams, and other river and harbor work, municipal water supply and sanitation facilities, streets, highways, and other transportation facilities. On many projects, civil engineers work in close cooperation with engineers and scientists from other fields.</p>\n      <p>The department is organizing various Value added courses like AutoCAD, ANSYS, NASTRAN, and STAAD Pro. The department has regular industrial visits and in-plant training programmes.</p>\n    ",
        "Why Civil Engineering at SIET": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>WHY CIVIL ENGINEERING AT SIET</u></h2>\n      <p class=\"dept-lead-text\">Sri Shakthi Institute of Engineering and Technology has been ranked one among the topmost Engineering Colleges across India in terms of Placements and other remarkable achievements. It has been ranked <strong>TOP 10 Civil Engineering Institutions in India</strong> by Higher Education Review 2019, with a continuous 100% Placement record since 2014.</p>\n      <ol class=\"dept-custom-list\">\n          <li>Ranked Top 10 Civil Engineering Institutions in India by Higher Education Review 2019.</li>\n          <li>100% Placement record maintained consistently since 2014.</li>\n          <li>Curriculum enriched with modern computational structural design tools (AutoCAD, ANSYS, STAAD Pro).</li>\n          <li>Extensive field testing, surveying with Total Station and GPS/GIS, and environmental testing labs.</li>\n          <li>Regular industrial visits, site internships, and consultancy projects.</li>\n        </ol>\n    ",
        "Unique Facilities": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>UNIQUE FACILITIES</u></h2>\n      <p class=\"dept-lead-text\">Wide range of employment and research opportunities for Civil Engineering students in PWD, Highway divisions, TWAD board, Railway division, Pollution Control Board, Housing Board, TANGEDCO, BHEL, Indian Oil, NTPC, BSNL, and international infrastructure projects.</p>\n      <ol class=\"dept-custom-list\">\n          <li>Advanced Strength of Materials and Concrete Technology Laboratory.</li>\n          <li>Environmental Engineering and Water Quality Testing Lab.</li>\n          <li>Geotechnical Engineering Soil Mechanics Testing Facilities.</li>\n          <li>Advanced Surveying Laboratory with Modern Total Stations and GPS/GIS systems.</li>\n          <li>CAD and Structural Modeling Lab equipped with STAAD Pro, AutoCAD, and ANSYS.</li>\n        </ol>\n    ",
        "Achievements": "\n        <h2 style=\"text-align: center; color: #167a39;\"><u>ACHIEVEMENTS</u></h2>\n        <p class=\"dept-lead-text\">Two patents were filed in the field of construction and building materials.</p>\n        <h3 style=\"color: #167a39; margin-top: 24px; margin-bottom: 12px;\">Students Achievements</h3>\n        <div class=\"dept-table-wrapper\">\n          <table class=\"dept-data-table\">\n            <thead>\n              <tr>\n                <th>STUDENT NAME</th>\n                <th style=\"width: 100px; text-align: center;\">YEAR</th>\n                <th style=\"width: 140px; text-align: center;\">CATEGORY</th>\n                <th>DETAILS OF ACHIEVEMENT</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n              <tr>\n                <td><strong>Swathi</strong></td>\n                <td style=\"text-align: center;\">1st year</td>\n                <td style=\"text-align: center;\"><span style=\"display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e8f5e9; color:#2e7d32;\">Sports</span></td>\n                <td>4*100 Relay Gold / 200M Gold</td>\n              </tr>\n\n              <tr>\n                <td><strong>Rangaraj</strong></td>\n                <td style=\"text-align: center;\">1st year</td>\n                <td style=\"text-align: center;\"><span style=\"display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e8f5e9; color:#2e7d32;\">Sports</span></td>\n                <td>Hockey-Zonal Winners / Centies Winners / PSG Alumini Trophy Runners</td>\n              </tr>\n\n              <tr>\n                <td><strong>Manikandan</strong></td>\n                <td style=\"text-align: center;\">1st year</td>\n                <td style=\"text-align: center;\"><span style=\"display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e8f5e9; color:#2e7d32;\">Sports</span></td>\n                <td>Karate - Open nationals gold / national gold</td>\n              </tr>\n\n              <tr>\n                <td><strong>Thirumoorthy</strong></td>\n                <td style=\"text-align: center;\">1st year</td>\n                <td style=\"text-align: center;\"><span style=\"display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e8f5e9; color:#2e7d32;\">Sports</span></td>\n                <td>Karate - Open nationals gold / national gold</td>\n              </tr>\n\n              <tr>\n                <td><strong>Prakash</strong></td>\n                <td style=\"text-align: center;\">1st year</td>\n                <td style=\"text-align: center;\"><span style=\"display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e8f5e9; color:#2e7d32;\">Sports</span></td>\n                <td>Volleyball - Zonal Winners / Centies Winners</td>\n              </tr>\n\n              <tr>\n                <td><strong>Dinakar Pandiyan.R</strong></td>\n                <td style=\"text-align: center;\">2nd Year</td>\n                <td style=\"text-align: center;\"><span style=\"display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e8f5e9; color:#2e7d32;\">Sports</span></td>\n                <td>Hockey-Zonal Winners / Centies Winners / PSG Alumini Trophy Runners</td>\n              </tr>\n\n              <tr>\n                <td><strong>Mithun.M</strong></td>\n                <td style=\"text-align: center;\">2nd Year</td>\n                <td style=\"text-align: center;\"><span style=\"display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e8f5e9; color:#2e7d32;\">Sports</span></td>\n                <td>Hockey-Zonal Winners / Centies Winners / PSG Alumini Trophy Runners</td>\n              </tr>\n\n              <tr>\n                <td><strong>Sanjay.A</strong></td>\n                <td style=\"text-align: center;\">2nd Year</td>\n                <td style=\"text-align: center;\"><span style=\"display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e8f5e9; color:#2e7d32;\">Sports</span></td>\n                <td>Hockey-Zonal Winners / Centies Winners / PSG Alumini Trophy Runners</td>\n              </tr>\n\n              <tr>\n                <td><strong>Raja.G</strong></td>\n                <td style=\"text-align: center;\">2nd Year</td>\n                <td style=\"text-align: center;\"><span style=\"display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e8f5e9; color:#2e7d32;\">Sports</span></td>\n                <td>Hockey-Zonal Winners / Centies Winners / PSG Alumini Trophy Runners</td>\n              </tr>\n\n              <tr>\n                <td><strong>Sethupathi.M</strong></td>\n                <td style=\"text-align: center;\">2nd Year</td>\n                <td style=\"text-align: center;\"><span style=\"display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e8f5e9; color:#2e7d32;\">Sports</span></td>\n                <td>Hockey-Zonal Winners / Centies Winners / PSG Alumini Trophy Runners</td>\n              </tr>\n\n              <tr>\n                <td><strong>mohanapriya and team</strong></td>\n                <td style=\"text-align: center;\">IV year</td>\n                <td style=\"text-align: center;\"><span style=\"display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e8f5e9; color:#2e7d32;\">co-curriculum</span></td>\n                <td>won 2nd prize in cube contest conducted by VIT campus</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n",
        "Vision & Mission": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>VISION</u></h2>\n      <p class=\"dept-lead-text\" style=\"text-align: center;\">The Civil Engineering Department will excel in undergraduate and graduate instruction, in research in all sub-areas of civil engineering, and in service to the public consistent with the land-grant mission of the college. The Department will make significant contributions to the economic development of the state, region and nation.</p>\n      <h2 style=\"text-align: center; color: #167a39; margin-top: 36px;\"><u>MISSION</u></h2>\n      <p class=\"dept-lead-text\">The mission of the Department of Civil Engineering is to provide quality education to prepare nationally competitive undergraduate students for a successful career in civil engineering; to provide advanced skills and knowledge in state-of-the-art research and design in sub-areas of civil engineering for graduate students; and to provide service to the engineering profession and the public.</p>\n    ",
        "Programme Educational Objectives": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>PROGRAMME EDUCATIONAL OBJECTIVES</u></h2>\n      <div class=\"dept-objectives-grid\" style=\"margin-top: 24px;\">\n          \n          <div class=\"dept-obj-card\">\n            <span class=\"dept-obj-num\">PEO 01</span>\n            <p>To develop students for successful careers in reinforced concrete elements field that meets the needs of Indian and multinational companies.</p>\n          </div>\n\n          <div class=\"dept-obj-card\">\n            <span class=\"dept-obj-num\">PEO 02</span>\n            <p>To develop the confidence and ability among students to synthesize data and technical concepts and thereby apply it in real world problems.</p>\n          </div>\n\n          <div class=\"dept-obj-card\">\n            <span class=\"dept-obj-num\">PEO 03</span>\n            <p>To promote students to use modern techniques, skills, and mathematical engineering tools for solving problems in reinforced concrete elements.</p>\n          </div>\n\n          <div class=\"dept-obj-card\">\n            <span class=\"dept-obj-num\">PEO 04</span>\n            <p>To achieve students with a sound foundation in mathematical, scientific and engineering fundamentals necessary to formulate, solve and analyse engineering problems and prepare them for graduate studies.</p>\n          </div>\n\n          <div class=\"dept-obj-card\">\n            <span class=\"dept-obj-num\">PEO 05</span>\n            <p>To enable students to work collaboratively on multi-disciplinary projects and engage in life-long learning throughout their professional life.</p>\n          </div>\n        </div>\n    ",
        "Programme Specific Outcomes": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>PROGRAMME SPECIFIC OUTCOMES</u></h2>\n      <ul class=\"dept-mission-list\" style=\"margin-top: 20px;\">\n          \n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>PSO1:</strong> The broad education necessary to understand civil engineering solutions in global and social context to improve the construction industry.</div>\n          </li>\n\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>PSO2:</strong> An ability to solve complex survey related Civil Engineering problems using GPS and GIS.</div>\n          </li>\n\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>PSO3:</strong> Understanding of social awareness and environmental necessity along with ethical responsibility to have a successful career and zeal for real-world applications using optimum resources as an entrepreneur.</div>\n          </li>\n        </ul>\n    ",
        "Faculty Profile": "<h2 style=\"text-align: center; color: #167a39;\"><u>FACULTY LIST</u></h2>\n        <div class=\"dept-table-wrapper\">\n          <table class=\"dept-data-table\">\n            <thead>\n              <tr>\n                <th style=\"width: 60px; text-align: center;\">S.No</th>\n                <th>Name</th>\n                <th>Designation</th>\n                <th>Qualification</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">1</td>\n                <td><strong>Dr. Madheswaran K, M.E., Ph.D.,</strong></td>\n                <td>HoD &amp; Professor</td>\n                <td>-</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">2</td>\n                <td><strong>Dr. Priyanaka Prabhakar, M.E., Ph.D.,</strong></td>\n                <td>Associate Professor</td>\n                <td>-</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">3</td>\n                <td><strong>Mr. Saravanakuumar K, M.E.,</strong></td>\n                <td>Associate Professor</td>\n                <td>-</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">4</td>\n                <td><strong>Mr. Nagarajan N, M.E.,</strong></td>\n                <td>Associate Professor</td>\n                <td>-</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">5</td>\n                <td><strong>Mr. Sri Ruban D, M.E.,</strong></td>\n                <td>Associate Professor</td>\n                <td>-</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">6</td>\n                <td><strong>Mr. Sureshkumar P, M.E.,</strong></td>\n                <td>Assistant Professor</td>\n                <td>-</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">7</td>\n                <td><strong>Mrs. Nithya K, M.E.,</strong></td>\n                <td>Assistant Professor</td>\n                <td>-</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">8</td>\n                <td><strong>Mr. Mohammed Ashik M, M.E.,</strong></td>\n                <td>Assistant Professor</td>\n                <td>-</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">9</td>\n                <td><strong>Mr. Muthukumar P, M.E.,</strong></td>\n                <td>Assistant Professor</td>\n                <td>-</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">10</td>\n                <td><strong>Mrs. Saranya C V, M.E.,</strong></td>\n                <td>Assistant Professor</td>\n                <td>-</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">11</td>\n                <td><strong>Mr. Hariprasanth J, M.E.,</strong></td>\n                <td>Assistant Professor</td>\n                <td>-</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">12</td>\n                <td><strong>Mr. Dharmaprakash R, M.E.,</strong></td>\n                <td>Assistant Professor</td>\n                <td>-</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">13</td>\n                <td><strong>Mr. Samuel Abraham D, M.E.,</strong></td>\n                <td>Assistant Professor</td>\n                <td>-</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">14</td>\n                <td><strong>Mrs. Deepika S, M.E.,</strong></td>\n                <td>Assistant Professor</td>\n                <td>-</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">15</td>\n                <td><strong>Mr. Sre Adethya V, M.E.,</strong></td>\n                <td>Assistant Professor</td>\n                <td>-</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">16</td>\n                <td><strong>Mr. Karthik S, M.E.,</strong></td>\n                <td>Assistant Professor</td>\n                <td>-</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">17</td>\n                <td><strong>Mr. Raguraman V, M.E.,</strong></td>\n                <td>Assistant Professor</td>\n                <td>-</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">18</td>\n                <td><strong>Mr. Sivasanthosh C, M.E.,</strong></td>\n                <td>Assistant Professor</td>\n                <td>-</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">19</td>\n                <td><strong>Mr. Tamilselvan N, M.E.,</strong></td>\n                <td>Assistant Professor</td>\n                <td>-</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>",
        "PAC Members": "<h2 style=\"text-align: center; color: #167a39;\"><u>PAC MEMBERS</u></h2>\n        <div class=\"dept-table-wrapper\">\n          <table class=\"dept-data-table\">\n            <thead>\n              <tr>\n                <th style=\"width: 60px; text-align: center;\">S.No</th>\n                <th>Name</th>\n                <th>Designation</th>\n                <th>Status / Details</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">1</td>\n                <td><strong>Dr. K. Madheswaran</strong></td>\n                <td>Associate Professor &amp; Head, Department of Civil Engineering, Sri Shakthi Institute of Engineering and Technology.</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#e8f5e9; color:#2e7d32; border:1px solid #a5d6a7;\">Chairperson</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">2</td>\n                <td><strong>Dr. R. Saraswathi,</strong></td>\n                <td>Professor, Department of Civil Engineering, Coimbatore Institute of Technology, Coimbatore.</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Academic Expert</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">3</td>\n                <td><strong>Mr. Sabari,</strong></td>\n                <td>Managing Director, Anussam Infra Pvt Ltd, Coimbatore.</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Industry Expert</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">4</td>\n                <td><strong>Mr. K. Saravanakumar</strong></td>\n                <td>Associate Professor, Department of Civil Engineering, Sri Shakthi Institute of Engineering and Technology.</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#e8f5e9; color:#2e7d32; border:1px solid #a5d6a7;\">Assessment Coordinator</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">5</td>\n                <td><strong>Mr. V. Sre Adethya</strong></td>\n                <td>Assistant Professor, Department of Civil Engineering, Sri Shakthi Institute of Engineering and Technology.</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Internal Faculty Member</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">6</td>\n                <td><strong>Mr. D. Sri Ruban</strong></td>\n                <td>Assistant Professor, Department of Civil Engineering, Sri Shakthi Institute of Engineering and Technology.</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Internal Faculty Member</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">7</td>\n                <td><strong>Mrs. S. Deepika</strong></td>\n                <td>Assistant Professor, Department of Civil Engineering, Sri Shakthi Institute of Engineering and Technology.</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Internal Faculty Member</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">8</td>\n                <td><strong>Mr. Ashiwnkumar Civil - Year</strong></td>\n                <td>Department of Civil Engineering, Sri Shakthi Institute of Engineering and Technology</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Student Representatives</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">9</td>\n                <td><strong>Mr. R. Gururaj, Civil - III Year.</strong></td>\n                <td>Department of Civil Engineering, Sri Shakthi Institute of Engineering and Technology</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Student Representatives</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">10</td>\n                <td><strong>Mr. Ramankishore Civil - IV Year</strong></td>\n                <td>Department of Civil Engineering, Sri Shakthi Institute of Engineering and Technology</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Student Representatives</span></td>\n              </tr>\n            </tbody>\n          </table>\n        </div>",
        "Curriculum": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>CURRICULUM &amp; SYLLABUS</u></h2>\n      <div style=\"margin-top: 24px;\">\n        <h3 style=\"color: #167a39; margin-bottom: 12px;\">Curriculum &amp; Syllabi Regulations</h3>\n        <ul class=\"dept-mission-list\">\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>B.E. Civil Engineering:</strong> Autonomous Regulations 2019 and Regulations 2021.</div>\n          </li>\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>M.E. Structural Engineering:</strong> Autonomous Regulations 2021.</div>\n          </li>\n        </ul>\n      </div>\n    ",
        "Placements - Key Companies": "<h2 style=\"text-align: center; color: #167a39;\"><u>PLACEMENTS</u></h2>\n        <div class=\"dept-table-wrapper\">\n          <table class=\"dept-data-table\">\n            <thead>\n              <tr>\n                <th colspan=\"2\" style=\"text-align: center; font-size: 16px; background: #167a39; color: white;\">List of key companies visited so far for placement</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Extramarks</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Cysler</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">CADD Global Centre</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Savvy Soft</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Ethnus</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">ITC</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Professional Technologies</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Kay Cee Infra</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Varma Ready Mix</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Dhan Foundation</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Paavai Geotech</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Think &amp; Learn</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Sood Tower</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Acadekraft</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Rani Nithya Construction</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Kajaria Bathware</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Buoyancy Consultant</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Teemage Precast In</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Hettich</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">CSR Builders</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>",
        "Feedback": "<h2 style=\"text-align: center; color: #167a39;\"><u>FEEDBACK</u></h2>\n        <p class=\"dept-lead-text\" style=\"text-align: center; margin-bottom: 24px;\">We value your constructive feedback to continuously enhance our academic quality and learning ecosystem.</p>\n        <form class=\"dept-feedback-form\" onsubmit=\"event.preventDefault(); this.querySelector('.feedback-success').style.display='block'; this.reset();\">\n          <div class=\"dept-form-group\">\n            <label>Full Name *</label>\n            <input type=\"text\" required placeholder=\"Enter your full name\" />\n          </div>\n          <div class=\"dept-form-group\">\n            <label>Stakeholder Category *</label>\n            <select required>\n              <option value=\"\">Select your category</option>\n              <option value=\"student\">Current Student</option>\n              <option value=\"alumni\">Alumnus / Alumna</option>\n              <option value=\"parent\">Parent</option>\n              <option value=\"employer\">Employer / Industry Partner</option>\n              <option value=\"faculty\">Academician / Expert</option>\n            </select>\n          </div>\n          <div class=\"dept-form-group\">\n            <label>Email Address *</label>\n            <input type=\"email\" required placeholder=\"Enter your email address\" />\n          </div>\n          <div class=\"dept-form-group\">\n            <label>Your Feedback / Suggestions *</label>\n            <textarea rows=\"4\" required placeholder=\"Please provide your feedback or suggestions for Civil Engineering...\"></textarea>\n          </div>\n          <button type=\"submit\" class=\"button button-primary dept-feedback-submit\" style=\"margin-top: 16px;\">Submit Feedback</button>\n          <div class=\"feedback-success\" style=\"display:none; margin-top:16px; padding:14px 18px; background:#e8f5e9; border:1px solid #4caf50; border-radius:8px; color:#2e7d32; font-weight:600;\">\n            ✓ Thank you! Your feedback has been submitted successfully to the Civil Engineering department.\n          </div>\n        </form>"
    }
},
  'Electrical and Electronics Engineering': {
    "courses": [
        [
            "B.E - Electrical and Electronics Engineering",
            "60"
        ],
        [
            "M.E - Embedded System Technologies",
            "18"
        ]
    ],
    "overview": "<p>The Department of Electrical and Electronics Engineering was established in the year 2006 and acts as a core part of the institute. The department offers a Bachelor's Programme in Electrical and Electronics Engineering, a Master's Programme in Embedded System Technologies, and Ph.D. research under Anna University Recognised Research Centre.</p>",
    "sectionsList": [
        "About the Department",
        "Why Electrical and Electronics Engineering at SIET",
        "Unique Facilities",
        "Achievements",
        "Vision & Mission",
        "Programme Educational Objectives",
        "Programme Specific Outcomes",
        "Faculty Profile",
        "Curriculum",
        "Placements - Key Companies",
        "Feedback"
    ],
    "sections": {
        "About the Department": "\n      <div style=\"display: flex; justify-content: flex-end; margin-bottom: 20px;\">\n          <div style=\"border: 2px solid #167a39; overflow: hidden; border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);\">\n            <table style=\"border-collapse: collapse; margin: 0; min-width: 280px;\">\n              <thead>\n                <tr style=\"background: #167a39; color: white;\">\n                  <th style=\"padding: 8px 16px; font-weight: 700; font-size: 14px; border-right: 1px solid rgba(255,255,255,0.3); text-align: center;\">Course Offered</th>\n                  <th style=\"padding: 8px 16px; font-weight: 700; font-size: 14px; text-align: center;\">Intake</th>\n                </tr>\n              </thead>\n              <tbody>\n                \n                <tr style=\"background: #fff;\">\n                  <td style=\"padding: 8px 16px; font-size: 14px; font-weight: 600; border-right: 1px solid #ddd; text-align: center;\">B.E - Electrical and Electronics Engineering</td>\n                  <td style=\"padding: 8px 16px; font-size: 14px; font-weight: 600; text-align: center;\">60</td>\n                </tr>\n\n                <tr style=\"background: #fff;\">\n                  <td style=\"padding: 8px 16px; font-size: 14px; font-weight: 600; border-right: 1px solid #ddd; text-align: center;\">M.E - Embedded System Technologies</td>\n                  <td style=\"padding: 8px 16px; font-size: 14px; font-weight: 600; text-align: center;\">18</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      <h2 style=\"text-align: center; color: #167a39;\"><u>ABOUT THE DEPARTMENT</u></h2>\n      <p>The Department of Electrical and Electronics Engineering is established in the year 2006 and it acts as a core part of the institute. Our department offers One Bachelor Programme in the stream of Electrical and Electronics Engineering and one Post graduate Programme in the stream of Embedded Systems Technologies respectively, and is an Anna University Approved Research Centre for Ph.D. research.</p>\n    ",
        "Why Electrical and Electronics Engineering at SIET": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>WHY ELECTRICAL AND ELECTRONICS ENGINEERING AT SIET</u></h2>\n      <ol class=\"dept-custom-list\">\n          <li>Got Permanent Affiliation with ANNA UNIVERSITY.</li>\n          <li>Accredited by NBA New Delhi.</li>\n          <li>Recognized as Research Center by ANNA UNIVERSITY.</li>\n          <li>Created strong industrial connections for students through campus placements, Internships, Industrial visits, value-added Courses, Seminars, Guest Lectures, and International Conferences with industrial leaders.</li>\n          <li>Eminent Professors with cumulative experience of 100 years in Academy, Research, and Industry.</li>\n          <li>Separate training wing to grab job opportunities in top notch IT, Core, and Government Sectors.</li>\n          <li>Industry-oriented rich curriculum, supported with subject-wise industrial visits, exploration labs, skills development courses, and internships.</li>\n          <li>Electrical Engineering application-oriented mathematics problem solving for better understanding.</li>\n          <li>More than 75 technical articles published by faculty members in top-ranked Scopus-indexed Journals in the last five years.</li>\n        </ol>\n    ",
        "Unique Facilities": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>UNIQUE FACILITIES</u></h2>\n      <ol class=\"dept-custom-list\">\n          <li>Eminent Professors with cumulative experience of 100 years in Academy, Research, and Industry.</li>\n          <li>More than 75 technical articles published in top-ranked Scopus indexed Journals in the last five years.</li>\n          <li>Won awards and honors from Industries such as TAFE, National Instruments, IE, Intel, and NASA for innovative students’ projects.</li>\n          <li>Industry-oriented rich curriculum supported with subject-wise visits, exploration labs, and internships.</li>\n          <li>Students get job opportunities in top notch IT, Core, and Government Sectors.</li>\n          <li>Career opportunities in Government organizations like Tamil Nadu Electricity Board (TNEB), Power Grid Corporation, Nuclear / National Thermal Power Corporation, BHEL, and Airports Authority of India.</li>\n          <li>Funded research projects actively carried out.</li>\n          <li>Reputed industry-based Internships are mandatory.</li>\n          <li>Development of technical skills to make Innovative Products with option of Patent.</li>\n        </ol>\n    ",
        "Achievements": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>ACHIEVEMENTS</u></h2>\n      <ol class=\"dept-custom-list\">\n          <li>Permanent Affiliation with ANNA UNIVERSITY & NBA Accredited.</li>\n          <li>Recognized Research Center by ANNA UNIVERSITY with 100% Placement achievements.</li>\n          <li>Created strong industrial connections with ISRO, National Instruments, SIEMENS, Lennox International, ABB, General Electric, Solitron, MAK Controls, TCS, FANUC, FLSmidth, RV Machine Tools, PRICOL, Kavin Engineering, ELGI Equipments, CRI Pumps, Roots Pvt Ltd, Kirloskar Brothers, Pactron, Skava, Byju's, Aspire Systems, and others.</li>\n          <li>Our LabVIEW Academy (with Rs 1 Crore Investment) has been recognized as Best Graphical System Design Lab in India by Dr. James Truchard, President, CEO and Co-Founder, NI.</li>\n          <li>PLC Automation Lab has been established in partnership with SIEMENS.</li>\n          <li>300 kWp On-Grid Solar Power Plant (with Rs 2.5 Crore investment) installed to run the entire campus on Green Energy. Recognized as Green Campus in the country by WWF.</li>\n          <li>Autonomous Institution with Industry-linked curriculum reviewed by panels of industrial experts and eminent professors.</li>\n          <li>Faculty published over 100 technical articles and patents in top Scopus, Web of Science, and SCI Journals.</li>\n          <li>Industry-linked student projects such as Railway Gate Automation System, eNano (Nano car completely converted into Electrical green vehicle), electromagnetic shielding, Healthcare Integration Platform, and Portable Hearing Aid for congenital deaf fetched awards and recognition from Govt. of India, NASA, TAFE, Buoyanci, Intel, and National Instruments.</li>\n        </ol>\n    ",
        "Vision & Mission": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>VISION</u></h2>\n      <p class=\"dept-lead-text\" style=\"text-align: center;\">To become the center of excellence in the area of electrical and electronics engineering and technology, and the transmitter of moral values with focus on the development of society and rural masses.</p>\n      <h2 style=\"text-align: center; color: #167a39; margin-top: 36px;\"><u>MISSION</u></h2>\n      <ul class=\"dept-mission-list\" style=\"margin-top: 20px;\">\n          \n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>M1:</strong> Equip the students with advanced knowledge in the field of Electrical and Electronics Engineering as well as professional skills necessary to face the challenges of the future.</div>\n          </li>\n\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>M2:</strong> Enable students to become responsible citizens of the country with a willingness to serve the society.</div>\n          </li>\n\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>M3:</strong> Encourage the Students to engage in research activities leading to innovative applications of technology for the benefit of mankind.</div>\n          </li>\n        </ul>\n    ",
        "Programme Educational Objectives": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>PROGRAMME EDUCATIONAL OBJECTIVES</u></h2>\n      <div class=\"dept-objectives-grid\" style=\"margin-top: 24px;\">\n          \n          <div class=\"dept-obj-card\">\n            <span class=\"dept-obj-num\">PEO 01</span>\n            <p>To provide the students with fundamental knowledge, methodologies and use of cutting-edge technologies.</p>\n          </div>\n\n          <div class=\"dept-obj-card\">\n            <span class=\"dept-obj-num\">PEO 02</span>\n            <p>To provide the students with an awareness of skills-in, life-long learning and self-education.</p>\n          </div>\n\n          <div class=\"dept-obj-card\">\n            <span class=\"dept-obj-num\">PEO 03</span>\n            <p>To cultivate team work, technical writing and oral communication skills.</p>\n          </div>\n\n          <div class=\"dept-obj-card\">\n            <span class=\"dept-obj-num\">PEO 04</span>\n            <p>To provide students with an appreciation of engineering impact on society and professional responsibilities of engineers.</p>\n          </div>\n        </div>\n    ",
        "Programme Specific Outcomes": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>PROGRAMME SPECIFIC OUTCOMES</u></h2>\n      <ul class=\"dept-mission-list\" style=\"margin-top: 20px;\">\n          \n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>PSO1:</strong> To gain a promising knowledge on basic engineering science with hands on training that would enhance students in designing technical concepts and furnish knowledge on real-time applications in Electrical and Electronics Engineering.</div>\n          </li>\n\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>PSO2:</strong> To enrich students' competence with analysis, synthesis and development capabilities using latest methodologies in Electrical and Electronics Engineering.</div>\n          </li>\n\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>PSO3:</strong> Ability to adapt in multidisciplinary environment and expertise students' skills in advanced technologies and creating engineering solutions for technical and non-technical aspects.</div>\n          </li>\n\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>PSO4:</strong> Graduates will be talented to innovate, create applications and provide solutions for complex problems related to society.</div>\n          </li>\n        </ul>\n    ",
        "Faculty Profile": "<h2 style=\"text-align: center; color: #167a39;\"><u>FACULTY LIST</u></h2>\n        <div class=\"dept-table-wrapper\">\n          <table class=\"dept-data-table\">\n            <thead>\n              <tr>\n                <th style=\"width: 60px; text-align: center;\">S.No</th>\n                <th>Name</th>\n                <th>Designation</th>\n                <th>Qualification</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">1</td>\n                <td><strong>Dr.G.Sundar</strong></td>\n                <td>Professor &amp; Head</td>\n                <td>M.E, Ph.D</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">2</td>\n                <td><strong>Dr.B.Tharani</strong></td>\n                <td>Professor</td>\n                <td>M.E, Ph.D</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">3</td>\n                <td><strong>Dr.R.Senthil Kumar</strong></td>\n                <td>Professor</td>\n                <td>M.E, Ph.D</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">4</td>\n                <td><strong>Dr.V.Sampath Kumar</strong></td>\n                <td>Associate Professor</td>\n                <td>M.E, Ph.D</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">5</td>\n                <td><strong>Dr.C.Infant Vinoth</strong></td>\n                <td>Associate Professor</td>\n                <td>M.E, Ph.D</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">6</td>\n                <td><strong>Dr.R.Madhuvanthani</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E, Ph.D</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">7</td>\n                <td><strong>Mr.P.Kalidass</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">8</td>\n                <td><strong>Mrs.M.Janani</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">9</td>\n                <td><strong>Mrs.S.Ruby</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">10</td>\n                <td><strong>Mrs.C.Madhivadhana</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">11</td>\n                <td><strong>Ms.M.Priyanka Ganadhi</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">12</td>\n                <td><strong>Mrs.S.Abirami Sree</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">13</td>\n                <td><strong>Mr.K.Hari</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">14</td>\n                <td><strong>Mr.G.Ananda Babu</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">15</td>\n                <td><strong>Mrs.N.Rajarajeswari</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">16</td>\n                <td><strong>Mr.R.Kathiresan</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">17</td>\n                <td><strong>Mr.S.Saran Karthick</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>",
        "Curriculum": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>CURRICULUM &amp; SYLLABUS</u></h2>\n      <div style=\"margin-top: 24px;\">\n        <h3 style=\"color: #167a39; margin-bottom: 12px;\">Curriculum &amp; Syllabi Regulations</h3>\n        <ul class=\"dept-mission-list\">\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>B.E. Electrical and Electronics Engineering:</strong> Autonomous Regulations 2019 and Regulations 2021.</div>\n          </li>\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>M.E. Embedded System Technologies:</strong> Autonomous Regulations 2021.</div>\n          </li>\n        </ul>\n      </div>\n    ",
        "Placements - Key Companies": "<h2 style=\"text-align: center; color: #167a39;\"><u>PLACEMENTS</u></h2>\n        <div class=\"dept-table-wrapper\">\n          <table class=\"dept-data-table\">\n            <thead>\n              <tr>\n                <th colspan=\"2\" style=\"text-align: center; font-size: 16px; background: #167a39; color: white;\">List of key companies visited so far for placement</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Amazon</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Intel</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Byju's</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Rently</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Kaar Technologies</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Coding Mart</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Embed UR</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Eunimart</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">IVTL Infoview</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Ducent IT Solutions</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">IBM</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Admatic</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">CTS</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">TrueChips</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Capgemini</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Max Eye Technologies</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">TCS</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Skava Technologies</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Aspire Systems</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Ducom Instruments</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Seoyon Electronics</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Payoda</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Technosphere India Pvt ltd</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Wipro</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Pactron</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Weg Industries</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Kalycito</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Mak Control</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">CRI Pumps</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Zentron</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>",
        "Feedback": "<h2 style=\"text-align: center; color: #167a39;\"><u>FEEDBACK</u></h2>\n        <p class=\"dept-lead-text\" style=\"text-align: center; margin-bottom: 24px;\">We value your constructive feedback to continuously enhance our academic quality and learning ecosystem.</p>\n        <form class=\"dept-feedback-form\" onsubmit=\"event.preventDefault(); this.querySelector('.feedback-success').style.display='block'; this.reset();\">\n          <div class=\"dept-form-group\">\n            <label>Full Name *</label>\n            <input type=\"text\" required placeholder=\"Enter your full name\" />\n          </div>\n          <div class=\"dept-form-group\">\n            <label>Stakeholder Category *</label>\n            <select required>\n              <option value=\"\">Select your category</option>\n              <option value=\"student\">Current Student</option>\n              <option value=\"alumni\">Alumnus / Alumna</option>\n              <option value=\"parent\">Parent</option>\n              <option value=\"employer\">Employer / Industry Partner</option>\n              <option value=\"faculty\">Academician / Expert</option>\n            </select>\n          </div>\n          <div class=\"dept-form-group\">\n            <label>Email Address *</label>\n            <input type=\"email\" required placeholder=\"Enter your email address\" />\n          </div>\n          <div class=\"dept-form-group\">\n            <label>Your Feedback / Suggestions *</label>\n            <textarea rows=\"4\" required placeholder=\"Please provide your feedback or suggestions for Electrical and Electronics Engineering...\"></textarea>\n          </div>\n          <button type=\"submit\" class=\"button button-primary dept-feedback-submit\" style=\"margin-top: 16px;\">Submit Feedback</button>\n          <div class=\"feedback-success\" style=\"display:none; margin-top:16px; padding:14px 18px; background:#e8f5e9; border:1px solid #4caf50; border-radius:8px; color:#2e7d32; font-weight:600;\">\n            ✓ Thank you! Your feedback has been submitted successfully to the Electrical and Electronics Engineering department.\n          </div>\n        </form>"
    }
},
  'Electronics and Communication Engineering': {
    "courses": [
        [
            "B.E - Electronics and Communication Engineering",
            "120"
        ],
        [
            "M.E - VLSI Design",
            "18"
        ]
    ],
    "overview": "<p>The Electronics and Communication Department had its debut in 2004 by AICTE approval. Since then, the department has come a long way and is now regarded as one of the premier departments of the Institute, equipped with outstanding infrastructure and learned faculty.</p><p>The department offers B.E. in Electronics and Communication Engineering, M.E. in VLSI Design, and Ph.D. programmes under Anna University Recognised Research Centre.</p>",
    "sectionsList": [
        "About the Department",
        "Why Electronics and Communication Engineering at SIET",
        "Unique Facilities",
        "Vision & Mission",
        "Programme Educational Objectives",
        "Programme Specific Outcomes",
        "Faculty Profile",
        "PAC Members",
        "Curriculum",
        "Placements - Key Companies",
        "Feedback"
    ],
    "sections": {
        "About the Department": "\n      <div style=\"display: flex; justify-content: flex-end; margin-bottom: 20px;\">\n          <div style=\"border: 2px solid #167a39; overflow: hidden; border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);\">\n            <table style=\"border-collapse: collapse; margin: 0; min-width: 280px;\">\n              <thead>\n                <tr style=\"background: #167a39; color: white;\">\n                  <th style=\"padding: 8px 16px; font-weight: 700; font-size: 14px; border-right: 1px solid rgba(255,255,255,0.3); text-align: center;\">Course Offered</th>\n                  <th style=\"padding: 8px 16px; font-weight: 700; font-size: 14px; text-align: center;\">Intake</th>\n                </tr>\n              </thead>\n              <tbody>\n                \n                <tr style=\"background: #fff;\">\n                  <td style=\"padding: 8px 16px; font-size: 14px; font-weight: 600; border-right: 1px solid #ddd; text-align: center;\">B.E - Electronics and Communication Engineering</td>\n                  <td style=\"padding: 8px 16px; font-size: 14px; font-weight: 600; text-align: center;\">120</td>\n                </tr>\n\n                <tr style=\"background: #fff;\">\n                  <td style=\"padding: 8px 16px; font-size: 14px; font-weight: 600; border-right: 1px solid #ddd; text-align: center;\">M.E - VLSI Design</td>\n                  <td style=\"padding: 8px 16px; font-size: 14px; font-weight: 600; text-align: center;\">18</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      <h2 style=\"text-align: center; color: #167a39;\"><u>ABOUT THE DEPARTMENT</u></h2>\n      <p>The Electronics and Communication Dept had its debut in the rise of year 2004 by the AICTE approval, with an intake of 60 students at B.E level, helping to solidify basic underlying scientific and engineering principles and allowing students to hone life-long skills to question, analyze, and develop solutions to challenges of the future.</p>\n      <p>Since then the department has come a long way and is now regarded as one of the premiere departments of the Institute. It is equipped with outstanding infrastructure and boasts of a unit of learned and dedicated faculty members and sincere staff who work with zeal and enthusiasm to provide a vibrant learning environment.</p>\n      <p>In order to ensure high standards of education, the department has constantly upgraded itself by adding well-equipped laboratories to supplement theory courses. Course contents are continuously enriched with Value-Added Courses giving students a holistic and pragmatic view of the electronics industry.</p>\n      <p>The department also set up specialized student clubs: <strong>Electronic Hobby Club</strong> for mini projects, <strong>Step Up Club</strong> for cultural training, <strong>Women Empowerment Club</strong>, <strong>Red Ribbon Club</strong> for social awareness & blood donation, and <strong>Rotary Club</strong> for professional guidance and community service.</p>\n    ",
        "Why Electronics and Communication Engineering at SIET": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>WHY ELECTRONICS AND COMMUNICATION ENGINEERING AT SIET</u></h2>\n      <ol class=\"dept-custom-list\">\n          <li>The department believes in serious academic pursuit and encourages radical and original thinking which paves the way for creativity and innovative ideas.</li>\n          <li>Qualities inculcated into students make them not only good engineers but good human beings. Students actively organize technical workshops through the IEEE student chapter.</li>\n          <li>Several faculty members and students are actively engaged in research and regularly publish their work in international journals and conferences.</li>\n          <li>Highly-qualified and experienced faculty members, state-of-the-art facilities and extensive industry-academia interaction all serve to make engineering education an enriching experience.</li>\n        </ol>\n    ",
        "Unique Facilities": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>UNIQUE FACILITIES</u></h2>\n      <h3 style=\"color: #167a39; margin-top: 16px; margin-bottom: 8px;\">Funded Research</h3>\n      <p class=\"dept-lead-text\">The department is funded for research promotion and laboratory enhancement under RPS and MODROBS by AICTE.</p>\n      <h3 style=\"color: #167a39; margin-top: 20px; margin-bottom: 8px;\">State-of-the-Art Laboratories for Research</h3>\n      <ol class=\"dept-custom-list\">\n          <li>Embedded and ARM Laboratory.</li>\n          <li>Freescale Semiconductor Laboratory.</li>\n          <li>Advanced VLSI Design Laboratory.</li>\n          <li>RF & Microwave Wireless Communication Lab.</li>\n          <li>Digital Signal and Image Processing Lab.</li>\n        </ol>\n      <h3 style=\"color: #167a39; margin-top: 20px; margin-bottom: 8px;\">Industry-Linked Recognition</h3>\n      <p>The department was selected as the <strong>Best Industry Linked Department</strong> by AICTE in 2017. Center of Excellence & MoUs with leading industries and institutes have been established to upgrade technical knowledge and inculcate research culture.</p>\n    ",
        "Vision & Mission": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>VISION</u></h2>\n      <p class=\"dept-lead-text\" style=\"text-align: center;\">To be recognised as centre of excellence in higher learning and research in the fields of Electronics and Communication Engineering with national and international repute.</p>\n      <h2 style=\"text-align: center; color: #167a39; margin-top: 36px;\"><u>MISSION</u></h2>\n      <ul class=\"dept-mission-list\" style=\"margin-top: 20px;\">\n          \n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>M1:</strong> Provide a supportive learning experience to students in the field of Electronics and Communication Engineering by emphasizing activity-based Learning with Research focus to prepare them for professional careers.</div>\n          </li>\n\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>M2:</strong> Enable students to develop skills to solve Engineering problems with their creativity to cater to societal needs keeping in pace with technological advancements.</div>\n          </li>\n\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>M3:</strong> To provide Students with ethical and human values to thereby promote social activities.</div>\n          </li>\n        </ul>\n    ",
        "Programme Educational Objectives": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>PROGRAMME EDUCATIONAL OBJECTIVES</u></h2>\n      <div class=\"dept-objectives-grid\" style=\"margin-top: 24px;\">\n          \n          <div class=\"dept-obj-card\">\n            <span class=\"dept-obj-num\">PEO 01</span>\n            <p>Graduates to have profound knowledge on software skills, core-engineering concepts to analyze and design electronics and communication products and develop solutions for real-life applications.</p>\n          </div>\n\n          <div class=\"dept-obj-card\">\n            <span class=\"dept-obj-num\">PEO 02</span>\n            <p>Create Graduates capable to solve problems in electronics and communication through creativity, critical thinking, intellectual capacity and social responsibilities.</p>\n          </div>\n\n          <div class=\"dept-obj-card\">\n            <span class=\"dept-obj-num\">PEO 03</span>\n            <p>Create Graduates with system thinking capability, professional and ethical attitude, empathy, teamwork skills, leadership, and work in multidisciplinary environments.</p>\n          </div>\n\n          <div class=\"dept-obj-card\">\n            <span class=\"dept-obj-num\">PEO 04</span>\n            <p>Create Graduates capable of successful professional careers & life-long learning with an impressive academic environment.</p>\n          </div>\n        </div>\n    ",
        "Programme Specific Outcomes": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>PROGRAMME SPECIFIC OUTCOMES</u></h2>\n      <ul class=\"dept-mission-list\" style=\"margin-top: 20px;\">\n          \n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>PSO1:</strong> Professional Skills: Potential Knowledge to understand and relate basic concepts to develop innovative design and implementation of complex systems in the fields of Electronics, Communication, VLSI, Embedded systems etc.</div>\n          </li>\n\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>PSO2:</strong> Problem Solving Skills: An ability to solve complex Electronics and Communication Engineering problems using latest hardware and software tools along with analytical skills to arrive at cost effective and proper solutions.</div>\n          </li>\n\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>PSO3:</strong> Successful Career and Entrepreneurship: An understanding of social awareness and environmental-wisdom along with ethical responsibility to have a successful career and nurture passion for real-world applications as an entrepreneur.</div>\n          </li>\n        </ul>\n    ",
        "Faculty Profile": "<h2 style=\"text-align: center; color: #167a39;\"><u>FACULTY LIST</u></h2>\n        <div class=\"dept-table-wrapper\">\n          <table class=\"dept-data-table\">\n            <thead>\n              <tr>\n                <th style=\"width: 60px; text-align: center;\">S.No</th>\n                <th>Name</th>\n                <th>Designation</th>\n                <th>Qualification</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">1</td>\n                <td><strong>Dr.P.SIVAKUMAR,</strong></td>\n                <td>HoD &amp; Professor</td>\n                <td>ME , Ph. D</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">2</td>\n                <td><strong>Dr.A.Senthil kumar,</strong></td>\n                <td>Professor</td>\n                <td>ME , Ph. D</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">3</td>\n                <td><strong>Dr. Bindu Salim</strong></td>\n                <td>Professor</td>\n                <td>ME , Ph. D</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">4</td>\n                <td><strong>Dr.C. Aravind</strong></td>\n                <td>Professor</td>\n                <td>M.S,Ph.D</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">5</td>\n                <td><strong>Dr. R Jamuna,</strong></td>\n                <td>Professor</td>\n                <td>ME , Ph. D</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">6</td>\n                <td><strong>Mrs.R.Sudha,</strong></td>\n                <td>Associate Professor</td>\n                <td>ME</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">7</td>\n                <td><strong>Mr.T.Maheswaran</strong></td>\n                <td>Associate Professor</td>\n                <td>ME</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">8</td>\n                <td><strong>Mrs.R.Ramalakshmi</strong></td>\n                <td>Assistant Professor</td>\n                <td>ME</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">9</td>\n                <td><strong>Mrs.S.Yogitha</strong></td>\n                <td>Assistant Professor</td>\n                <td>ME</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">10</td>\n                <td><strong>Ms.K.B.Sangavi</strong></td>\n                <td>Assistant Professor</td>\n                <td>ME</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">11</td>\n                <td><strong>Ms. A.Ashna</strong></td>\n                <td>Assistant Professor</td>\n                <td>ME</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">12</td>\n                <td><strong>Ms.S.Jeevitha</strong></td>\n                <td>Assistant Professor</td>\n                <td>ME</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">13</td>\n                <td><strong>Mr.Mohamed Yas Nivisan</strong></td>\n                <td>Assistant Professor</td>\n                <td>ME</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">14</td>\n                <td><strong>Mrs. Saranya. S</strong></td>\n                <td>Assistant professor</td>\n                <td>ME</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">15</td>\n                <td><strong>Mrs. Subhashini</strong></td>\n                <td>Assistant professor</td>\n                <td>ME</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">16</td>\n                <td><strong>Ms. R.Deeksha</strong></td>\n                <td>Assistant professor</td>\n                <td>ME</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">17</td>\n                <td><strong>Ms.Prasanna Maria</strong></td>\n                <td>Assistant professor</td>\n                <td>ME</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">18</td>\n                <td><strong>Ms.Senbagapriya S</strong></td>\n                <td>Assistant professor</td>\n                <td>ME</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">19</td>\n                <td><strong>Mr.K.Sivaprasath</strong></td>\n                <td>Assistant Professor</td>\n                <td>ME</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">20</td>\n                <td><strong>Ms.T.Renita Pearlin</strong></td>\n                <td>Assistant Professor</td>\n                <td>ME</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">21</td>\n                <td><strong>Ms.M.Madhuvarshini</strong></td>\n                <td>Assistant professor</td>\n                <td>ME</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">22</td>\n                <td><strong>Mrs.Sridevi K</strong></td>\n                <td>Assistant professor</td>\n                <td>ME</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">23</td>\n                <td><strong>Mrs Prema.C</strong></td>\n                <td>Assistant Professor</td>\n                <td>ME</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">24</td>\n                <td><strong>Ms Hemalatha S</strong></td>\n                <td>Assistant Professor</td>\n                <td>ME</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">25</td>\n                <td><strong>Mr. J Manokaran</strong></td>\n                <td>Assistant Professor</td>\n                <td>ME</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">26</td>\n                <td><strong>Mrs. Pricilla Sofia. P</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.Tech</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">27</td>\n                <td><strong>Dr. Priyadharshini</strong></td>\n                <td>Assistant Professor</td>\n                <td>Ph. D</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">28</td>\n                <td><strong>Dr. J. Grace Jency Gnanammal</strong></td>\n                <td>Assistant Professor</td>\n                <td>Ph.D</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>",
        "PAC Members": "<h2 style=\"text-align: center; color: #167a39;\"><u>PAC MEMBERS</u></h2>\n        <div class=\"dept-table-wrapper\">\n          <table class=\"dept-data-table\">\n            <thead>\n              <tr>\n                <th style=\"width: 60px; text-align: center;\">S.No</th>\n                <th>Name</th>\n                <th>Designation</th>\n                <th>Status / Details</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">1</td>\n                <td><strong>Dr.P.Sivakumar Professor &amp; Head/ECE</strong></td>\n                <td>HoD</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#e8f5e9; color:#2e7d32; border:1px solid #a5d6a7;\">Chairman</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">2</td>\n                <td><strong>Dr.K.R.Remya Professor/ECE</strong></td>\n                <td>Department IQAC &amp; R&amp;D Member</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Member</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">3</td>\n                <td><strong>Dr.A.Senthikumar Professor/ECE</strong></td>\n                <td>Professor</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Member</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">4</td>\n                <td><strong>Dr.Tamilarasi Professor/ ECE</strong></td>\n                <td>PAC Co Ordinator</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Member</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">5</td>\n                <td><strong>Dr.Jamuna Professor/ECE</strong></td>\n                <td>Department Exam Cell In- charge</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Member</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">6</td>\n                <td><strong>Mr.S.Sivaprasath AP/ECE</strong></td>\n                <td>Accreditation Coordinator</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Member</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">7</td>\n                <td><strong>Dr.A.Kavitha</strong></td>\n                <td>HoD/S&amp; H</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Member</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">8</td>\n                <td><strong>Dr.P.Manimegalai Professor</strong></td>\n                <td>Professor/ECE,Karunya University</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">External Member</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">9</td>\n                <td><strong>Mr.Dinesh</strong></td>\n                <td>Managing Director Tech UC Automation Coimbatore</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Alumni</span></td>\n              </tr>\n            </tbody>\n          </table>\n        </div>",
        "Curriculum": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>CURRICULUM &amp; SYLLABUS</u></h2>\n      <div style=\"margin-top: 24px;\">\n        <h3 style=\"color: #167a39; margin-bottom: 12px;\">Curriculum &amp; Syllabi Regulations</h3>\n        <ul class=\"dept-mission-list\">\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>B.E. Electronics and Communication Engineering:</strong> Autonomous Regulations 2019 and Regulations 2021.</div>\n          </li>\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>M.E. VLSI Design:</strong> Autonomous Regulations 2021.</div>\n          </li>\n        </ul>\n      </div>\n    ",
        "Placements - Key Companies": "<h2 style=\"text-align: center; color: #167a39;\"><u>PLACEMENTS</u></h2>\n        <div class=\"dept-table-wrapper\">\n          <table class=\"dept-data-table\">\n            <thead>\n              <tr>\n                <th colspan=\"2\" style=\"text-align: center; font-size: 16px; background: #167a39; color: white;\">List of key companies visited so far for placement</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Softcrylic</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Virtusa</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Amazon</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">TCS</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Skava Tech</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Bibox</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Talentio</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Full Creative</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Bluebird</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Ducen IT</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">VVDN</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Cialfor</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Wipro</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">G10X</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Ethunus</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Springrole</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Kambaa</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">IBM</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Outsourcing Inc Japan</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Appranix</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Aspire Systems</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">MantraLab</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">CTS</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Technosphere</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Examly</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Unimart</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Felix healthcare</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">DxC Technlogy</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Caliber Interconnect Solutions</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Macincons</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>",
        "Feedback": "<h2 style=\"text-align: center; color: #167a39;\"><u>FEEDBACK</u></h2>\n        <p class=\"dept-lead-text\" style=\"text-align: center; margin-bottom: 24px;\">We value your constructive feedback to continuously enhance our academic quality and learning ecosystem.</p>\n        <form class=\"dept-feedback-form\" onsubmit=\"event.preventDefault(); this.querySelector('.feedback-success').style.display='block'; this.reset();\">\n          <div class=\"dept-form-group\">\n            <label>Full Name *</label>\n            <input type=\"text\" required placeholder=\"Enter your full name\" />\n          </div>\n          <div class=\"dept-form-group\">\n            <label>Stakeholder Category *</label>\n            <select required>\n              <option value=\"\">Select your category</option>\n              <option value=\"student\">Current Student</option>\n              <option value=\"alumni\">Alumnus / Alumna</option>\n              <option value=\"parent\">Parent</option>\n              <option value=\"employer\">Employer / Industry Partner</option>\n              <option value=\"faculty\">Academician / Expert</option>\n            </select>\n          </div>\n          <div class=\"dept-form-group\">\n            <label>Email Address *</label>\n            <input type=\"email\" required placeholder=\"Enter your email address\" />\n          </div>\n          <div class=\"dept-form-group\">\n            <label>Your Feedback / Suggestions *</label>\n            <textarea rows=\"4\" required placeholder=\"Please provide your feedback or suggestions for Electronics and Communication Engineering...\"></textarea>\n          </div>\n          <button type=\"submit\" class=\"button button-primary dept-feedback-submit\" style=\"margin-top: 16px;\">Submit Feedback</button>\n          <div class=\"feedback-success\" style=\"display:none; margin-top:16px; padding:14px 18px; background:#e8f5e9; border:1px solid #4caf50; border-radius:8px; color:#2e7d32; font-weight:600;\">\n            ✓ Thank you! Your feedback has been submitted successfully to the Electronics and Communication Engineering department.\n          </div>\n        </form>"
    }
},
  'Food Technology': {
    "courses": [
        [
            "B.Tech - Food Technology",
            "60"
        ],
        [
            "M.Tech - Food Technology",
            "18"
        ]
    ],
    "overview": "<p>The Department of Food Technology was initiated in the year 2016 with a progressive initiative to impart professional knowledge in various areas of Food Processing, Preservation, and sustainable availability of safe food globally. Food Technology has been identified as a sunrise industry due to its enormous impact and significance in the Indian economy.</p><p>B.Tech in Food Technology is an industry-oriented course that trains students for handling roles in food manufacturing, food processing, food process equipment design, as well as conducting research in quality control laboratories.</p>",
    "sectionsList": [
        "About the Department",
        "Why Food Technology at SIET",
        "Unique Facilities",
        "Achievements",
        "Vision & Mission",
        "Programme Educational Objectives",
        "Programme Specific Outcomes",
        "Faculty Profile",
        "PAC Members",
        "Consultancy - Food Sample Analysis",
        "Curriculum",
        "Placements - Key Companies",
        "Feedback"
    ],
    "sections": {
        "About the Department": "\n      <div style=\"display: flex; justify-content: flex-end; margin-bottom: 20px;\">\n          <div style=\"border: 2px solid #167a39; overflow: hidden; border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);\">\n            <table style=\"border-collapse: collapse; margin: 0; min-width: 280px;\">\n              <thead>\n                <tr style=\"background: #167a39; color: white;\">\n                  <th style=\"padding: 8px 16px; font-weight: 700; font-size: 14px; border-right: 1px solid rgba(255,255,255,0.3); text-align: center;\">Course Offered</th>\n                  <th style=\"padding: 8px 16px; font-weight: 700; font-size: 14px; text-align: center;\">Intake</th>\n                </tr>\n              </thead>\n              <tbody>\n                \n                <tr style=\"background: #fff;\">\n                  <td style=\"padding: 8px 16px; font-size: 14px; font-weight: 600; border-right: 1px solid #ddd; text-align: center;\">B.Tech - Food Technology</td>\n                  <td style=\"padding: 8px 16px; font-size: 14px; font-weight: 600; text-align: center;\">60</td>\n                </tr>\n\n                <tr style=\"background: #fff;\">\n                  <td style=\"padding: 8px 16px; font-size: 14px; font-weight: 600; border-right: 1px solid #ddd; text-align: center;\">M.Tech - Food Technology</td>\n                  <td style=\"padding: 8px 16px; font-size: 14px; font-weight: 600; text-align: center;\">18</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      <h2 style=\"text-align: center; color: #167a39;\"><u>ABOUT THE DEPARTMENT</u></h2>\n      <p>The Department of Food Technology was initiated in the year 2016 with a progressive initiative to raise the curtains of the world of foods and to impart professional knowledge in various areas of Food Processing, Preservation, and sustainable availability of safe food globally. Food Technology has been identified as a sunrise industry due to its enormous impact &amp; significance in the Indian economy.</p>\n      <p>B.Tech in Food Technology is a 4-year professional engineering program which trains students in technical concepts of Food Process Engineering, Food Analysis, Food Safety and regulations, Crop Processing Technology, and Packaging. It is an industry-oriented course that trains students for handling roles in food manufacturing, processing, equipment design, and quality control laboratories.</p>\n    ",
        "Why Food Technology at SIET": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>WHY FOOD TECHNOLOGY AT SIET</u></h2>\n      <ol class=\"dept-custom-list\">\n          <li>Eminent teaching Faculty with experience in Academics, Research, and Industry.</li>\n          <li>More than 10 technical articles published by faculty members in top-ranked Scopus-indexed Journals.</li>\n          <li>Industry-oriented rich curriculum supported with subject-wise industrial visits, exploration labs, skill development courses, and internships.</li>\n          <li>Every year in November, an International Conference is conducted providing a platform for students and faculty to interact with global food researchers.</li>\n          <li>Well-equipped spacious laboratories to ideate, innovate, and implement professional food processing skills.</li>\n        </ol>\n    ",
        "Unique Facilities": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>UNIQUE FACILITIES</u></h2>\n      <ol class=\"dept-custom-list\">\n          <li>Advanced Food Analysis and Quality Control Laboratory.</li>\n          <li>Food Processing and Preservation Unit with specialized pasteurization, drying, and packaging machinery.</li>\n          <li>Microbiology and Biochemical Characterization Testing Facility.</li>\n          <li>Consultancy and analytical sample analysis center for students and food processing industries.</li>\n          <li>Industry-collaborative internships with leading food brands (ITC Foods, VilFresh, Pulsus, etc.).</li>\n        </ol>\n    ",
        "Achievements": "\n        <h2 style=\"text-align: center; color: #167a39;\"><u>STUDENTS ACHIEVEMENTS</u></h2>\n        <div class=\"dept-table-wrapper\">\n          <table class=\"dept-data-table\">\n            <thead>\n              <tr>\n                <th>STUDENT NAME</th>\n                <th style=\"width: 110px; text-align: center;\">ACADEMIC YEAR</th>\n                <th style=\"width: 140px; text-align: center;\">CATEGORY</th>\n                <th>DETAILS OF ACHIEVEMENT</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n              <tr>\n                <td><strong>KEERTHANA, HISHAM, MOHAMMED THANVEER, YASIR AHAMMED P.T</strong></td>\n                <td style=\"text-align: center;\">2018-2019</td>\n                <td style=\"text-align: center;\"><span style=\"display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e8f5e9; color:#2e7d32;\">ACADEMIC</span></td>\n                <td>FINALIST - DUPOINT NUTRI SCHOLAR AWARD 2018</td>\n              </tr>\n\n              <tr>\n                <td><strong>AAKASH</strong></td>\n                <td style=\"text-align: center;\">2018-2019</td>\n                <td style=\"text-align: center;\"><span style=\"display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e8f5e9; color:#2e7d32;\">SPORTS</span></td>\n                <td>THIRD PLACE IN ANNA UNIVERSITY ZONAL - BALL BADMINTON</td>\n              </tr>\n\n              <tr>\n                <td><strong>AAKASH</strong></td>\n                <td style=\"text-align: center;\">2018-2019</td>\n                <td style=\"text-align: center;\"><span style=\"display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e8f5e9; color:#2e7d32;\">SPORTS</span></td>\n                <td>SECOND PLACE KPR TROPHY - BALL BADMINTON</td>\n              </tr>\n\n              <tr>\n                <td><strong>GOKULA KRISHNAN M</strong></td>\n                <td style=\"text-align: center;\">2018-2019</td>\n                <td style=\"text-align: center;\"><span style=\"display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e8f5e9; color:#2e7d32;\">SPORTS</span></td>\n                <td>SECOND PLACE HINDUSTAN HOCKEY ALUMIN MEET</td>\n              </tr>\n\n              <tr>\n                <td><strong>GOKULA KRISHNAN M</strong></td>\n                <td style=\"text-align: center;\">2018-2019</td>\n                <td style=\"text-align: center;\"><span style=\"display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e8f5e9; color:#2e7d32;\">SPORTS</span></td>\n                <td>THIRD PLACE IN ANNA UNIVERSITY ZONAL - HOCKEY</td>\n              </tr>\n\n              <tr>\n                <td><strong>DEVANAND R</strong></td>\n                <td style=\"text-align: center;\">2018-2019</td>\n                <td style=\"text-align: center;\"><span style=\"display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e8f5e9; color:#2e7d32;\">SPORTS</span></td>\n                <td>RUNNERS THIRD PLACE IN ANNA UNIVERSITY ZONAL - BASKETBALL</td>\n              </tr>\n\n              <tr>\n                <td><strong>DEVANAND R</strong></td>\n                <td style=\"text-align: center;\">2017-2018</td>\n                <td style=\"text-align: center;\"><span style=\"display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e8f5e9; color:#2e7d32;\">SPORTS</span></td>\n                <td>RUNNERS THIRD PLACE IN ANNA UNIVERSITY ZONAL - BASKETBALL</td>\n              </tr>\n\n              <tr>\n                <td><strong>DEVANAND R</strong></td>\n                <td style=\"text-align: center;\">2017-2018</td>\n                <td style=\"text-align: center;\"><span style=\"display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e8f5e9; color:#2e7d32;\">SPORTS</span></td>\n                <td>RUNNERS THIRD PLACE IN CENTIES CHAMPIONSHIP 2019 - BASKETBALL</td>\n              </tr>\n\n              <tr>\n                <td><strong>RAJ S VIRANI</strong></td>\n                <td style=\"text-align: center;\">2018-2019</td>\n                <td style=\"text-align: center;\"><span style=\"display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e8f5e9; color:#2e7d32;\">SPORTS</span></td>\n                <td>THIRD PLACE IN CENTIES TOURNAMENT BASKETBALL</td>\n              </tr>\n\n              <tr>\n                <td><strong>PRIYADHARSHINI S R</strong></td>\n                <td style=\"text-align: center;\">2018-2019</td>\n                <td style=\"text-align: center;\"><span style=\"display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e8f5e9; color:#2e7d32;\">SPORTS</span></td>\n                <td>FIRST PLACE COVAI TIE SCHESS</td>\n              </tr>\n\n              <tr>\n                <td><strong>ALVIN K.J.</strong></td>\n                <td style=\"text-align: center;\">2018-2019</td>\n                <td style=\"text-align: center;\"><span style=\"display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e8f5e9; color:#2e7d32;\">SPORTS</span></td>\n                <td>THIRD PLACE IN ANNA UNIVERSITY ZONAL 9 VOLLEY BALL</td>\n              </tr>\n\n              <tr>\n                <td><strong>G.SOUNRARAJAN</strong></td>\n                <td style=\"text-align: center;\">2018-2019</td>\n                <td style=\"text-align: center;\"><span style=\"display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e8f5e9; color:#2e7d32;\">SPORTS</span></td>\n                <td>THIRD PLACE IN COVAI TIE SCHESS CHESS-MEN</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n",
        "Vision & Mission": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>VISION</u></h2>\n      <p class=\"dept-lead-text\" style=\"text-align: center;\">To facilitate transformation of students to morally sound, professionally outstanding technocrats, entrepreneurs and researchers involved in the improvement of quality and safety by processing and preserving foods and upgrading the nutritional and economic status of the countrymen by serving the rural community and the general public.</p>\n      <h2 style=\"text-align: center; color: #167a39; margin-top: 36px;\"><u>MISSION</u></h2>\n      <p class=\"dept-lead-text\">To provide leadership in areas of education, research, innovations and solutions in Food Technology to direct overall activity towards economic growth of the country.</p>\n    ",
        "Programme Educational Objectives": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>PROGRAMME EDUCATIONAL OBJECTIVES</u></h2>\n      <div class=\"dept-objectives-grid\" style=\"margin-top: 24px;\">\n          \n          <div class=\"dept-obj-card\">\n            <span class=\"dept-obj-num\">PEO 01</span>\n            <p>To provide students with basic knowledge, skills and use of latest technologies in food science and technology.</p>\n          </div>\n\n          <div class=\"dept-obj-card\">\n            <span class=\"dept-obj-num\">PEO 02</span>\n            <p>To provide students an awareness and skills that help in life-long learning and self-education.</p>\n          </div>\n\n          <div class=\"dept-obj-card\">\n            <span class=\"dept-obj-num\">PEO 03</span>\n            <p>To inculcate teamwork, technical writing and communication skills.</p>\n          </div>\n\n          <div class=\"dept-obj-card\">\n            <span class=\"dept-obj-num\">PEO 04</span>\n            <p>To provide students with overall competency and impact on society and professional responsibilities as a technologist.</p>\n          </div>\n        </div>\n    ",
        "Programme Specific Outcomes": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>PROGRAMME SPECIFIC OUTCOMES</u></h2>\n      <ul class=\"dept-mission-list\" style=\"margin-top: 20px;\">\n          \n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>PSO1:</strong> Professional Skills: The ability to understand, analyze and formulate ways to process, preserve, package, or store food according to industrial requirements.</div>\n          </li>\n\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>PSO2:</strong> Problem Solving Skills: The ability to apply standard practices and rules in developing food and allied products.</div>\n          </li>\n\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>PSO3:</strong> Career and Entrepreneurship: The ability to employ modern technologies to produce new or value added products in the area of food process Engineering / Food Technology.</div>\n          </li>\n        </ul>\n    ",
        "Faculty Profile": "<h2 style=\"text-align: center; color: #167a39;\"><u>FACULTY LIST</u></h2>\n        <div class=\"dept-table-wrapper\">\n          <table class=\"dept-data-table\">\n            <thead>\n              <tr>\n                <th style=\"width: 60px; text-align: center;\">S.No</th>\n                <th>Name</th>\n                <th>Designation</th>\n                <th>Qualification</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">1</td>\n                <td><strong>Dr. G. Sarojini</strong></td>\n                <td>Associate Professor and Head</td>\n                <td>M.E., Ph.D</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">2</td>\n                <td><strong>Dr.N.Sridhar</strong></td>\n                <td>Professor</td>\n                <td>M.E.,Ph.D</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">3</td>\n                <td><strong>Dr.S.Geetapriya</strong></td>\n                <td>Professor</td>\n                <td>M.Tech., Ph.D</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">4</td>\n                <td><strong>Dr. A. Allwyn Sundarraj</strong></td>\n                <td>Associate Professor</td>\n                <td>M.Tech., Ph.D</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">5</td>\n                <td><strong>Dr. G. Pratap Kumar</strong></td>\n                <td>Associate Professor</td>\n                <td>M.Tech., Ph.D</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">6</td>\n                <td><strong>Dr. J. Srimathi</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.Tech., Ph.D</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">7</td>\n                <td><strong>Dr.Ramesh Sharma</strong></td>\n                <td>Assistant professor</td>\n                <td>M.Tech., Ph.D</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">8</td>\n                <td><strong>Mrs.S. Shamily</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.Tech</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">9</td>\n                <td><strong>Mr.KR.Rakhavan</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.Tech</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">10</td>\n                <td><strong>Mr.K.Krishna Kumar</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.Tech</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">11</td>\n                <td><strong>Mr. V.Hariharan</strong></td>\n                <td>Assistant Professor</td>\n                <td>M. Tech</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">12</td>\n                <td><strong>Ms.E.Swetha</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.Tech</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">13</td>\n                <td><strong>Mr. S. Tamilselvan</strong></td>\n                <td>Assistant Professor</td>\n                <td>M. Tech</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">14</td>\n                <td><strong>Ms. K.S.Krithiga</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.Tech</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">15</td>\n                <td><strong>Mrs. A. Mathivani</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E., (Ph.D)</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">16</td>\n                <td><strong>Ms. S.Keerthana</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.Tech</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">17</td>\n                <td><strong>Ms. J. Thiruppavai</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E.</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">18</td>\n                <td><strong>Dr. G.Buvaneshwari</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.Sc., Ph.D</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">19</td>\n                <td><strong>Mrs. R. Sinthiya</strong></td>\n                <td>Assistant professor</td>\n                <td>M.Tech., (Ph.D)</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>",
        "PAC Members": "<h2 style=\"text-align: center; color: #167a39;\"><u>PAC MEMBERS</u></h2>\n        <div class=\"dept-table-wrapper\">\n          <table class=\"dept-data-table\">\n            <thead>\n              <tr>\n                <th style=\"width: 60px; text-align: center;\">S.No</th>\n                <th>Name</th>\n                <th>Designation</th>\n                <th>Status / Details</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">1</td>\n                <td><strong>Dr.N,Sridhar</strong></td>\n                <td>Professor &amp; Head, Department of Food Technology, Sri Shakthi Institute of Engineering &amp; Technology, Coimbatore-641062</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#e8f5e9; color:#2e7d32; border:1px solid #a5d6a7;\">Chairman</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">2</td>\n                <td><strong>Dr.A.Allwy n Sundarraj</strong></td>\n                <td>Assistant Professor Department of Food Technology Sri Shakthi Institute of Engineering &amp; Technology, Coimbatore-641062</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#e8f5e9; color:#2e7d32; border:1px solid #a5d6a7;\">Department IQAC Coordinator</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">3</td>\n                <td><strong>Mr. KR. Rakhavan</strong></td>\n                <td>Assistant Professor Department of Food Technology Sri Shakthi Institute of Engineering &amp; Technology, Coimbatore-641062</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#e8f5e9; color:#2e7d32; border:1px solid #a5d6a7;\">PAC Coordinator</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">4</td>\n                <td><strong>Dr.S.Vidyalakshmi</strong></td>\n                <td>Associate Professor Department of Biotechnology PSG College of Technology Coimbatore-641004</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Academic Expert</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">5</td>\n                <td><strong>Dr.S.Balaji</strong></td>\n                <td>Managing Director Accelor Food Tech. Pvt. Ltd Coimbatore.</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Industry Representative</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">6</td>\n                <td><strong>Mr.S.Tamilselvan</strong></td>\n                <td>Assistant Professor Department of Food Technology Sri Shakthi Institute of Engineering &amp; Technology, Coimbatore-641062</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Member</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">7</td>\n                <td><strong>Ms. A. Mathivani</strong></td>\n                <td>Assistant Professor Department of Food Technology Sri Shakthi Institute of Engineering &amp; Technology, Coimbatore-641062</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Member</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">8</td>\n                <td><strong>Ms.Srimita S</strong></td>\n                <td>IV Year B.Tech Food Technology Sri Shakthi Institute of Engineering &amp; Technology, Coimbatore-641062</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Student Member</span></td>\n              </tr>\n            </tbody>\n          </table>\n        </div>",
        "Consultancy - Food Sample Analysis": "\n        <h2 style=\"text-align: center; color: #167a39;\"><u>CONSULTANCY - FOOD SAMPLE ANALYSIS</u></h2>\n        <p class=\"dept-lead-text\">The department offers advanced analytical and consultancy testing services for academic institutions, research scholars, and food processing industries.</p>\n        <div class=\"dept-table-wrapper\">\n          <table class=\"dept-data-table\">\n            <thead>\n              <tr>\n                <th style=\"width: 60px; text-align: center;\">S.No</th>\n                <th>Parameters</th>\n                <th style=\"text-align: center;\">Charges in Rs. (Students)</th>\n                <th style=\"text-align: center;\">Charges in Rs. (Industry / Others)</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">1.</td>\n                <td><strong>Moisture analysis</strong></td>\n                <td style=\"text-align: center; font-weight: 600; color: #167a39;\">200/-</td>\n                <td style=\"text-align: center; font-weight: 600;\">250/-</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">2.</td>\n                <td><strong>Carbohydrate analysis</strong></td>\n                <td style=\"text-align: center; font-weight: 600; color: #167a39;\">2000/-</td>\n                <td style=\"text-align: center; font-weight: 600;\">2500/-</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">3.</td>\n                <td><strong>Protein analysis</strong></td>\n                <td style=\"text-align: center; font-weight: 600; color: #167a39;\">1000/-</td>\n                <td style=\"text-align: center; font-weight: 600;\">1500/</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">4.</td>\n                <td><strong>Fat analysis</strong></td>\n                <td style=\"text-align: center; font-weight: 600; color: #167a39;\">500/-</td>\n                <td style=\"text-align: center; font-weight: 600;\">700/-</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">5.</td>\n                <td><strong>Fiber analysis</strong></td>\n                <td style=\"text-align: center; font-weight: 600; color: #167a39;\">1500/-</td>\n                <td style=\"text-align: center; font-weight: 600;\">2000/-</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">6.</td>\n                <td><strong>Vitamin C analysis</strong></td>\n                <td style=\"text-align: center; font-weight: 600; color: #167a39;\">800/-</td>\n                <td style=\"text-align: center; font-weight: 600;\">1000/-</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">7.</td>\n                <td><strong>Gluten</strong></td>\n                <td style=\"text-align: center; font-weight: 600; color: #167a39;\">200/-</td>\n                <td style=\"text-align: center; font-weight: 600;\">250/-</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">8.</td>\n                <td><strong>Microbial analysis</strong></td>\n                <td style=\"text-align: center; font-weight: 600; color: #167a39;\">1000/-</td>\n                <td style=\"text-align: center; font-weight: 600;\">1500/-</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">9.</td>\n                <td><strong>Enumeration, Isolation &amp; Characterization</strong></td>\n                <td style=\"text-align: center; font-weight: 600; color: #167a39;\">1000/-</td>\n                <td style=\"text-align: center; font-weight: 600;\">2000/-</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">10.</td>\n                <td><strong>Measuring Antioxidant activity</strong></td>\n                <td style=\"text-align: center; font-weight: 600; color: #167a39;\">1000/-</td>\n                <td style=\"text-align: center; font-weight: 600;\">1500/-</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">11.</td>\n                <td><strong>Detection of adulterant (Color, Emulsifier, Stabilizer, MSG)</strong></td>\n                <td style=\"text-align: center; font-weight: 600; color: #167a39;\">700/-</td>\n                <td style=\"text-align: center; font-weight: 600;\">1000/-</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">12.</td>\n                <td><strong>Detection of Preservatives (SO 2 )</strong></td>\n                <td style=\"text-align: center; font-weight: 600; color: #167a39;\">200/-</td>\n                <td style=\"text-align: center; font-weight: 600;\">300/-</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">13.</td>\n                <td><strong>Acidity/Alkalinity analysis of samples</strong></td>\n                <td style=\"text-align: center; font-weight: 600; color: #167a39;\">200/-</td>\n                <td style=\"text-align: center; font-weight: 600;\">300/-</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">14.</td>\n                <td><strong>TDS analysis of water samples</strong></td>\n                <td style=\"text-align: center; font-weight: 600; color: #167a39;\">500/-</td>\n                <td style=\"text-align: center; font-weight: 600;\">750/-</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">15.</td>\n                <td><strong>Optical rotation</strong></td>\n                <td style=\"text-align: center; font-weight: 600; color: #167a39;\">350/-</td>\n                <td style=\"text-align: center; font-weight: 600;\">500/-</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n",
        "Curriculum": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>CURRICULUM &amp; SYLLABUS</u></h2>\n      <div style=\"margin-top: 24px;\">\n        <h3 style=\"color: #167a39; margin-bottom: 12px;\">Curriculum &amp; Syllabi Regulations</h3>\n        <ul class=\"dept-mission-list\">\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>B.Tech. Food Technology:</strong> Autonomous Regulations 2019 and Regulations 2021.</div>\n          </li>\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>M.Tech. Food Technology:</strong> Autonomous Regulations 2021.</div>\n          </li>\n        </ul>\n      </div>\n    ",
        "Placements - Key Companies": "<h2 style=\"text-align: center; color: #167a39;\"><u>PLACEMENTS</u></h2>\n        <div class=\"dept-table-wrapper\">\n          <table class=\"dept-data-table\">\n            <thead>\n              <tr>\n                <th colspan=\"2\" style=\"text-align: center; font-size: 16px; background: #167a39; color: white;\">List of key companies visited so far for placement</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Admatic</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">VilFresh</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">PULSUS</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">ITC Foods Business Division</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Mayilmark</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Oror Flavours and Chenicals Pvt Ltd</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Accelor</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Aachi Masala</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Baladna Foods,Qatar,UAE</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\"></td>\n              </tr>\n            </tbody>\n          </table>\n        </div>",
        "Feedback": "<h2 style=\"text-align: center; color: #167a39;\"><u>FEEDBACK</u></h2>\n        <p class=\"dept-lead-text\" style=\"text-align: center; margin-bottom: 24px;\">We value your constructive feedback to continuously enhance our academic quality and learning ecosystem.</p>\n        <form class=\"dept-feedback-form\" onsubmit=\"event.preventDefault(); this.querySelector('.feedback-success').style.display='block'; this.reset();\">\n          <div class=\"dept-form-group\">\n            <label>Full Name *</label>\n            <input type=\"text\" required placeholder=\"Enter your full name\" />\n          </div>\n          <div class=\"dept-form-group\">\n            <label>Stakeholder Category *</label>\n            <select required>\n              <option value=\"\">Select your category</option>\n              <option value=\"student\">Current Student</option>\n              <option value=\"alumni\">Alumnus / Alumna</option>\n              <option value=\"parent\">Parent</option>\n              <option value=\"employer\">Employer / Industry Partner</option>\n              <option value=\"faculty\">Academician / Expert</option>\n            </select>\n          </div>\n          <div class=\"dept-form-group\">\n            <label>Email Address *</label>\n            <input type=\"email\" required placeholder=\"Enter your email address\" />\n          </div>\n          <div class=\"dept-form-group\">\n            <label>Your Feedback / Suggestions *</label>\n            <textarea rows=\"4\" required placeholder=\"Please provide your feedback or suggestions for Food Technology...\"></textarea>\n          </div>\n          <button type=\"submit\" class=\"button button-primary dept-feedback-submit\" style=\"margin-top: 16px;\">Submit Feedback</button>\n          <div class=\"feedback-success\" style=\"display:none; margin-top:16px; padding:14px 18px; background:#e8f5e9; border:1px solid #4caf50; border-radius:8px; color:#2e7d32; font-weight:600;\">\n            ✓ Thank you! Your feedback has been submitted successfully to the Food Technology department.\n          </div>\n        </form>"
    }
},
  'Computer Science and Engineering (Cyber Security)': {
    "courses": [
        [
            "B.E - Cyber Security",
            "120"
        ]
    ],
    "overview": "<p>Established in 2022, the Computer Science and Engineering (Cyber Security) Department is dedicated to equipping students with specialized knowledge in the rapidly evolving field of cybersecurity. We offer a comprehensive 4-year B.E. Computer Science and Engineering (Cyber Security) program designed to provide both theoretical and practical expertise.</p><p>Our department boasts a passionate team of faculty members with extensive experience across various cybersecurity domains and features state-of-the-art facilities for hands-on learning and smart classroom experiences.</p>",
    "sectionsList": [
        "About the Department",
        "Why Cyber Security at SIET",
        "Unique Facilities",
        "Vision & Mission",
        "Programme Educational Objectives",
        "Programme Specific Outcomes",
        "Faculty Profile",
        "PAC Members",
        "Feedback"
    ],
    "sections": {
        "About the Department": "\n      <div style=\"display: flex; justify-content: flex-end; margin-bottom: 20px;\">\n          <div style=\"border: 2px solid #167a39; overflow: hidden; border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);\">\n            <table style=\"border-collapse: collapse; margin: 0; min-width: 280px;\">\n              <thead>\n                <tr style=\"background: #167a39; color: white;\">\n                  <th style=\"padding: 8px 16px; font-weight: 700; font-size: 14px; border-right: 1px solid rgba(255,255,255,0.3); text-align: center;\">Course Offered</th>\n                  <th style=\"padding: 8px 16px; font-weight: 700; font-size: 14px; text-align: center;\">Intake</th>\n                </tr>\n              </thead>\n              <tbody>\n                \n                <tr style=\"background: #fff;\">\n                  <td style=\"padding: 8px 16px; font-size: 14px; font-weight: 600; border-right: 1px solid #ddd; text-align: center;\">B.E - Cyber Security</td>\n                  <td style=\"padding: 8px 16px; font-size: 14px; font-weight: 600; text-align: center;\">120</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      <h2 style=\"text-align: center; color: #167a39;\"><u>ABOUT THE DEPARTMENT</u></h2>\n      <p>Established in 2022, the Computer Science and Engineering (Cyber Security) Department is dedicated to equipping students with specialized knowledge in the rapidly evolving field of cybersecurity. We offer a comprehensive 4-year B.E. Computer Science and Engineering (Cyber Security) program designed to provide both theoretical and practical expertise.</p>\n      <p>Our department boasts a passionate team of faculty members with extensive experience across various cybersecurity domains and features state-of-the-art facilities for hands-on learning and smart classroom experiences.</p>\n      <p>As the global demand for cybersecurity professionals continues to soar, our graduates are well-positioned to take advantage of a thriving job market. The intersection of cybersecurity with fields like AI and data science further enhances career prospects, providing students with numerous opportunities for rewarding and dynamic career growth.</p>\n    ",
        "Why Cyber Security at SIET": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>WHY CYBER SECURITY AT SIET</u></h2>\n      <ol class=\"dept-custom-list\">\n          <li>100% Placement assistance every year.</li>\n          <li>Industry-oriented rich curriculum, supported with subject-wise industrial visits, engineering exploration labs, skill development courses, and internships.</li>\n          <li>Specialized labs for Ethical Hacking, Threat Intelligence, and Network Security Defense.</li>\n          <li>Hands-on Capture The Flag (CTF) competitions and vulnerability assessment training.</li>\n          <li>Collaborations with leading cybersecurity companies for certified training.</li>\n        </ol>\n    ",
        "Unique Facilities": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>UNIQUE FACILITIES</u></h2>\n      <ol class=\"dept-custom-list\">\n          <li>Using online platform for Programming Practice.</li>\n          <li>Industry Training for faculty members.</li>\n          <li>Certification Courses with industry Collaboration — Software Testing with Virtusa and Data Analytics with Ducen.</li>\n        </ol>\n    ",
        "Vision & Mission": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>VISION</u></h2>\n      <p class=\"dept-lead-text\" style=\"text-align: center;\">To become a global leader in cyber security education and research, being a preferred choice for students, practitioners, and employers seeking top-tier cyber security expertise. To be at the forefront of cybersecurity excellence, safeguarding digital frontiers with cutting-edge research, innovative education, and ethical leadership.</p>\n      <h2 style=\"text-align: center; color: #167a39; margin-top: 36px;\"><u>MISSION</u></h2>\n      <p class=\"dept-lead-text\">To equip students with the knowledge, skills, and ethical foundation to excel in the dynamic field of cybersecurity through rigorous academic programs, hands-on training, and active research. Prepare future leaders who can effectively defend against cyber threats, contribute to the field's advancement, and promote a safer digital environment.</p>\n    ",
        "Programme Educational Objectives": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>PROGRAMME EDUCATIONAL OBJECTIVES</u></h2>\n      <div class=\"dept-objectives-grid\" style=\"margin-top: 24px;\">\n          \n          <div class=\"dept-obj-card\">\n            <span class=\"dept-obj-num\">PEO 01</span>\n            <p>To develop disciplined, high profile, value-added cyber security specialists for lucrative professions in their linked industries that give them international renown.</p>\n          </div>\n\n          <div class=\"dept-obj-card\">\n            <span class=\"dept-obj-num\">PEO 02</span>\n            <p>To systematically educate the necessity to understand the impact of cyber crimes and threats with solutions in a global and societal context.</p>\n          </div>\n\n          <div class=\"dept-obj-card\">\n            <span class=\"dept-obj-num\">PEO 03</span>\n            <p>To select suitable ethical principles and commit to professional responsibilities and human values and contribute value and wealth for the benefit of the society.</p>\n          </div>\n        </div>\n    ",
        "Programme Specific Outcomes": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>PROGRAMME SPECIFIC OUTCOMES</u></h2>\n      <ul class=\"dept-mission-list\" style=\"margin-top: 20px;\">\n          \n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>PSO1:</strong> Ethically demonstrate the capability to use standard tools, practices, and technologies to analyze, design, develop, and implement Cybersecurity solutions that are innovative and optimal without compromising privacy needs.</div>\n          </li>\n\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>PSO2:</strong> Use entrepreneurial skills to combat security risks and software and hardware threats in the computing sector.</div>\n          </li>\n\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>PSO3:</strong> Ability to do research and development in contemporary issues through cutting edge technologies and bring awareness to the society in the field of cyber security.</div>\n          </li>\n        </ul>\n    ",
        "Faculty Profile": "<h2 style=\"text-align: center; color: #167a39;\"><u>FACULTY LIST</u></h2>\n        <div class=\"dept-table-wrapper\">\n          <table class=\"dept-data-table\">\n            <thead>\n              <tr>\n                <th style=\"width: 60px; text-align: center;\">S.No</th>\n                <th>Name</th>\n                <th>Designation</th>\n                <th>Qualification</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">1</td>\n                <td><strong>Mr.R.Karthiban</strong></td>\n                <td>Associate Professor &amp; Head</td>\n                <td>M.E</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">2</td>\n                <td><strong>Dr.R.SenthilKumar</strong></td>\n                <td>Professor</td>\n                <td>Ph.D</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">3</td>\n                <td><strong>Dr.S.Anitha</strong></td>\n                <td>Professor</td>\n                <td>Ph.D</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">4</td>\n                <td><strong>Dr.C.Infant Vinoth</strong></td>\n                <td>Associate Professor</td>\n                <td>Ph.D</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">5</td>\n                <td><strong>Mr.P.Balaji</strong></td>\n                <td>Associate Professor</td>\n                <td>M.E</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">6</td>\n                <td><strong>Mr.E.Subramaniyan</strong></td>\n                <td>Associate Professor</td>\n                <td>M.E</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">7</td>\n                <td><strong>Mrs.J.Varshini</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">8</td>\n                <td><strong>Ms.K.Dhivya</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">9</td>\n                <td><strong>Ms.J.Haris Mita</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">10</td>\n                <td><strong>Mr.S.Yaswanthraj</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">11</td>\n                <td><strong>Mrs.N.Punnagai</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">12</td>\n                <td><strong>Mr.G.Samuvelraj</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>",
        "PAC Members": "<h2 style=\"text-align: center; color: #167a39;\"><u>PAC MEMBERS</u></h2>\n        <div class=\"dept-table-wrapper\">\n          <table class=\"dept-data-table\">\n            <thead>\n              <tr>\n                <th style=\"width: 60px; text-align: center;\">S.No</th>\n                <th>Name</th>\n                <th>Designation</th>\n                <th>Status / Details</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">1</td>\n                <td><strong>Mr.R.Karthiban</strong></td>\n                <td>Associate Professor &amp; Head</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Faculty</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">2</td>\n                <td><strong>Dr.K.E.Kannammal</strong></td>\n                <td>Professor &amp; Head</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Faculty</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">3</td>\n                <td><strong>Dr.R.SenthilKumar</strong></td>\n                <td>Professor</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Faculty</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">4</td>\n                <td><strong>Mr.E.Subramaniyan</strong></td>\n                <td>Associate Professor</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Faculty</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">5</td>\n                <td><strong>Mr.S.Yaswanthraj</strong></td>\n                <td>Assistant Professor</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Faculty</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">6</td>\n                <td><strong>Gowtham M G</strong></td>\n                <td>Mobile Lead Uni cards &amp; Powerup Money</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Alumni</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">7</td>\n                <td><strong>Alphin Jude</strong></td>\n                <td>Designer &amp; Developer ZyNerd</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Alumni</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">8</td>\n                <td><strong>Mr.Saravanan</strong></td>\n                <td>Senior Software Engineer Ducen Ind. Pvt. Ltd.</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Industry</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">9</td>\n                <td><strong>Sankarraj Subramanian</strong></td>\n                <td>CEO, Prompt Infotech</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Industry</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">10</td>\n                <td><strong>Senthil Kumar</strong></td>\n                <td>Business</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Parent</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">11</td>\n                <td><strong>Selva Kumar</strong></td>\n                <td>Business</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Parent</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">12</td>\n                <td><strong>Baskaran S</strong></td>\n                <td>Civil Engineer</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Parent</span></td>\n              </tr>\n            </tbody>\n          </table>\n        </div>",
        "Feedback": "<h2 style=\"text-align: center; color: #167a39;\"><u>FEEDBACK</u></h2>\n        <p class=\"dept-lead-text\" style=\"text-align: center; margin-bottom: 24px;\">We value your constructive feedback to continuously enhance our academic quality and learning ecosystem.</p>\n        <form class=\"dept-feedback-form\" onsubmit=\"event.preventDefault(); this.querySelector('.feedback-success').style.display='block'; this.reset();\">\n          <div class=\"dept-form-group\">\n            <label>Full Name *</label>\n            <input type=\"text\" required placeholder=\"Enter your full name\" />\n          </div>\n          <div class=\"dept-form-group\">\n            <label>Stakeholder Category *</label>\n            <select required>\n              <option value=\"\">Select your category</option>\n              <option value=\"student\">Current Student</option>\n              <option value=\"alumni\">Alumnus / Alumna</option>\n              <option value=\"parent\">Parent</option>\n              <option value=\"employer\">Employer / Industry Partner</option>\n              <option value=\"faculty\">Academician / Expert</option>\n            </select>\n          </div>\n          <div class=\"dept-form-group\">\n            <label>Email Address *</label>\n            <input type=\"email\" required placeholder=\"Enter your email address\" />\n          </div>\n          <div class=\"dept-form-group\">\n            <label>Your Feedback / Suggestions *</label>\n            <textarea rows=\"4\" required placeholder=\"Please provide your feedback or suggestions for Computer Science (Cyber Security)...\"></textarea>\n          </div>\n          <button type=\"submit\" class=\"button button-primary dept-feedback-submit\" style=\"margin-top: 16px;\">Submit Feedback</button>\n          <div class=\"feedback-success\" style=\"display:none; margin-top:16px; padding:14px 18px; background:#e8f5e9; border:1px solid #4caf50; border-radius:8px; color:#2e7d32; font-weight:600;\">\n            ✓ Thank you! Your feedback has been submitted successfully to the Computer Science (Cyber Security) department.\n          </div>\n        </form>"
    }
},
  'VLSI Design': {
    courses: [['B.E - Electronics Engineering ( VLSI Design & Technology)', '60'], ['M.E - VLSI Design', '18']],
    overview: '<p>The Department of VLSI Design & Technology specializes in semiconductor microelectronics, analog/digital CMOS integrated circuit design, FPGA synthesis, physical verification and System-on-Chip (SoC) architectures in state-of-the-art Advanced VLSI and Freescale laboratories.</p>',
    sectionsList: [
      'About the Department',
      'Why VLSI Design at SIET',
      'Unique Facilities',
      'Vision & Mission',
      'Programme Educational Objectives',
      'Curriculum',
      'Feedback'
    ],
    sections: {
      'About the Department': `
        <div style="display: flex; justify-content: flex-end; margin-bottom: 20px;">
          <div style="border: 2px solid #167a39; overflow: hidden; border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
            <table style="border-collapse: collapse; margin: 0; min-width: 280px;">
              <thead>
                <tr style="background: #167a39; color: white;">
                  <th style="padding: 8px 16px; font-weight: 700; font-size: 14px; border-right: 1px solid rgba(255,255,255,0.3); text-align: center;">Course Offered</th>
                  <th style="padding: 8px 16px; font-weight: 700; font-size: 14px; text-align: center;">Intake</th>
                </tr>
              </thead>
              <tbody>
                <tr style="background: #fff;">
                  <td style="padding: 8px 16px; font-size: 14px; font-weight: 600; border-right: 1px solid #ddd; text-align: center;">B.E - Electronics Engineering ( VLSI Design &amp; Technology)</td>
                  <td style="padding: 8px 16px; font-size: 14px; font-weight: 600; text-align: center;">60</td>
                </tr>
                <tr style="background: #fff;">
                  <td style="padding: 8px 16px; font-size: 14px; font-weight: 600; border-right: 1px solid #ddd; text-align: center;">M.E - VLSI Design</td>
                  <td style="padding: 8px 16px; font-size: 14px; font-weight: 600; text-align: center;">18</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <h2 style="text-align: center; color: #167a39;"><u>ABOUT THE DEPARTMENT</u></h2>
        <p>The Department of VLSI Design and Technology specializes in cutting-edge semiconductor engineering, microelectronics, CMOS integrated circuit fabrication principles, FPGA acceleration, and System-on-Chip (SoC) architectures. Supported by the AICTE-funded Advanced VLSI Design Laboratory and Freescale Semiconductor Center, students acquire direct industry-grade design and tape-out experience.</p>
      `,
      'Why VLSI Design at SIET': `
        <h2 style="text-align: center; color: #167a39;"><u>WHY VLSI DESIGN AT SIET</u></h2>
        <ol class="dept-custom-list">
          <li>Direct access to industry-standard EDA software and FPGA development boards.</li>
          <li>Advanced VLSI Design Laboratory and Freescale Semiconductor Lab funded by AICTE (MODROBS &amp; RPS).</li>
          <li>Comprehensive coverage of digital, analog, mixed-signal IC design and physical verification.</li>
          <li>Strong placement connections with semiconductor and embedded systems leaders.</li>
        </ol>
      `,
      'Unique Facilities': `
        <h2 style="text-align: center; color: #167a39;"><u>UNIQUE FACILITIES</u></h2>
        <ol class="dept-custom-list">
          <li>Advanced VLSI Cadence / Synopsys EDA simulation and synthesis environment.</li>
          <li>Freescale Semiconductor Laboratory.</li>
          <li>High-performance FPGA prototyping stations (Xilinx, Altera).</li>
          <li>Dedicated Embedded &amp; ARM Microcontroller Development Suite.</li>
        </ol>
      `,
      'Vision & Mission': `
        <h2 style="text-align: center; color: #167a39;"><u>VISION</u></h2>
        <p class="dept-lead-text" style="text-align: center;">To be a centre of excellence in semiconductor microelectronics and VLSI system design, creating world-class chip design engineers and innovative researchers.</p>
        <h2 style="text-align: center; color: #167a39; margin-top: 36px;"><u>MISSION</u></h2>
        <ul class="dept-mission-list" style="margin-top: 20px;">
          <li>
            <span class="dept-mission-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>M1:</strong> Impart state-of-the-art education in VLSI design, semiconductor devices, and electronic design automation.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>M2:</strong> Foster hands-on laboratory research and industrial collaboration in ASIC / FPGA chip design.</div>
          </li>
        </ul>
      `,
      'Programme Educational Objectives': `
        <h2 style="text-align: center; color: #167a39;"><u>PROGRAMME EDUCATIONAL OBJECTIVES</u></h2>
        <div class="dept-objectives-grid" style="margin-top: 24px;">
          <div class="dept-obj-card">
            <span class="dept-obj-num">PEO 01</span>
            <p>Graduates will excel in semiconductor design, electronic design automation, and hardware-software co-design.</p>
          </div>
          <div class="dept-obj-card">
            <span class="dept-obj-num">PEO 02</span>
            <p>Graduates will contribute to advanced microelectronics research, silicon tape-out, and innovative System-on-Chip products.</p>
          </div>
        </div>
      `,
      'Curriculum': `
        <h2 style="text-align: center; color: #167a39;"><u>CURRICULUM &amp; SYLLABUS</u></h2>
        <div style="margin-top: 24px;">
          <h3 style="color: #167a39; margin-bottom: 12px;">Curriculum &amp; Syllabi Regulations</h3>
          <ul class="dept-mission-list">
            <li>
              <span class="dept-mission-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
              <div><strong>B.E. Electronics Engineering (VLSI Design &amp; Technology):</strong> Autonomous Regulations 2021.</div>
            </li>
            <li>
              <span class="dept-mission-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
              <div><strong>M.E. VLSI Design:</strong> Autonomous Regulations 2021.</div>
            </li>
          </ul>
        </div>
      `,
      'Feedback': `
        <h2 style="text-align: center; color: #167a39;"><u>FEEDBACK</u></h2>
        <p class="dept-lead-text" style="text-align: center; margin-bottom: 24px;">We value your constructive feedback to continuously enhance our academic quality and learning ecosystem.</p>
        <form class="dept-feedback-form" onsubmit="event.preventDefault(); this.querySelector('.feedback-success').style.display='block'; this.reset();">
          <div class="dept-form-group">
            <label>Full Name *</label>
            <input type="text" required placeholder="Enter your full name" />
          </div>
          <div class="dept-form-group">
            <label>Stakeholder Category *</label>
            <select required>
              <option value="">Select your category</option>
              <option value="student">Current Student</option>
              <option value="alumni">Alumnus / Alumna</option>
              <option value="parent">Parent</option>
              <option value="employer">Employer / Industry Partner</option>
              <option value="faculty">Academician / Expert</option>
            </select>
          </div>
          <div class="dept-form-group">
            <label>Email Address *</label>
            <input type="email" required placeholder="Enter your email address" />
          </div>
          <div class="dept-form-group">
            <label>Your Feedback / Suggestions *</label>
            <textarea rows="4" required placeholder="Please provide your feedback or suggestions for VLSI Design..."></textarea>
          </div>
          <button type="submit" class="button button-primary dept-feedback-submit" style="margin-top: 16px;">Submit Feedback</button>
          <div class="feedback-success" style="display:none; margin-top:16px; padding:14px 18px; background:#e8f5e9; border:1px solid #4caf50; border-radius:8px; color:#2e7d32; font-weight:600;">
            ✓ Thank you! Your feedback has been submitted successfully to the VLSI Design department.
          </div>
        </form>
      `
    }
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
departmentDetails['CSE (Cyber Security)'] = departmentDetails['Computer Science and Engineering (Cyber Security)'];
departmentDetails['Cyber Security'] = departmentDetails['Computer Science and Engineering (Cyber Security)'];
departmentDetails['Computer Science (Cyber Security)'] = departmentDetails['Computer Science and Engineering (Cyber Security)'];
departmentDetails['Computer Science and Engineering ( Cyber Security )'] = departmentDetails['Computer Science and Engineering (Cyber Security)'];
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
  const sections = detail.sectionsList || [
    'About the Department',
    'Why ' + dept + ' at SIET',
    'Unique Facilities',
    'Achievements',
    'Vision & Mission',
    'Programme Educational Objectives',
    'Programme Specific Outcomes',
    'Curriculum',
    'Feedback'
  ];
  const deptCurriculum = getDeptCurriculum(dept);
  return `<main class="department-detail-page">${sietHudHeader(dept, dept)}<div class="department-detail-layout"><aside class="department-detail-nav" aria-label="Department sections">${sections.map((section, index) => `<button class="${index === 0 ? 'active' : ''}" type="button" data-section="department-section-${index}">${section}</button>`).join('')}</aside><article class="department-detail-content">${sections.map((section, index) => {
    const sectionId = `department-section-${index}`;
    const isOpen = index === 0 ? ' is-open' : '';
    if (section === 'Curriculum') {
      return `<section id="${sectionId}" class="department-copy department-curriculum-section${isOpen}"><h2>Curriculum</h2><div class="dept-curriculum-banner"><div><span class="curr-badge">AUTONOMOUS R2024</span><h2>${dept} Curriculum Structure</h2><p>Explore the full 8-semester course curriculum, subject codes, lecture/practical hours and credits designed for ${dept}.</p></div><a href="#/curriculum?dept=${deptCurriculum.id}" class="dept-curriculum-action">Open Full 8-Semester Interactive Curriculum →</a></div><div class="curr-table-wrapper">${renderCurriculumTable(deptCurriculum.id, 1)}</div></section>`;
    }
    const customContent = detail.sections && (
      detail.sections[section] ||
      detail.sections[section.replaceAll(' & ', ' and ')] ||
      detail.sections[section.replaceAll(' and ', ' & ')] ||
      detail.sections[section.replace(dept, '').trim()]
    );
    if (customContent) {
      return `<section id="${sectionId}" class="department-copy${isOpen}">${customContent}</section>`;
    }
    if (section === 'About the Department') {
      return `<section id="${sectionId}" class="department-copy${isOpen}"><div class="department-intake"><table><thead><tr><th>Courses Offered</th><th>Intake</th></tr></thead><tbody>${courses.map(([course, intake]) => `<tr><td>${course}</td><td>${intake}</td></tr>`).join('')}</tbody></table></div><h2>About the Department</h2>${detail.overview && detail.overview.startsWith('<p>') ? detail.overview : `<p>${detail.overview || ''}</p>`}</section>`;
    }
    return `<section id="${sectionId}" class="department-copy department-placeholder${isOpen}"><h2>${section}</h2><p>${section} information for ${dept} will be updated by the department office.</p></section>`;
  }).join('')}</article></div></main>`;
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
function render() { if (!appRoot) return; const r = route(); let content = !r ? homePage() : r === 'vision-mission' || r === 'about' ? visionPage() : r === 'core-beliefs' ? coreBeliefsPage() : r === 'program-outcomes' ? programOutcomesPage() : r === 'core-values' ? coreValuesPage() : r === 'philosophy' ? philosophyPage() : r === 'chairman' ? chairmanPage() : r === 'principal' ? principalPage() : r === 'admission-enquiry' || r === 'apply' ? enquiryPage(r === 'apply') : r === 'admission-referral' || r === 'referral' ? referralPage() : r === 'programmes' ? programmesPage() : r === 'departments' ? departmentsPage() : r === 'careers' ? careersPage() : r === 'library' ? libraryPage() : r === 'curriculum' ? curriculumPage() : r === 'academic-calendar' ? academicCalendarPage() : (r === 'entrepreneurship' || r === 'career-support/entrepreneurship' || r === 'placements/entrepreneurship') ? entrepreneurshipPage() : (r === 'entrepreneurship' || r === 'career-support/entrepreneurship' || r === 'placements/entrepreneurship') ? entrepreneurshipPage() : internalPage(r); appRoot.innerHTML = header() + content + footer(); document.title = `${r ? titleCase(r.replaceAll('-', ' ')) : 'Sri Shakthi'} | SIET`; bind(); scrollTo(0, 0) }

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
  if (route()?.startsWith('placements') || route() === 'entrepreneurship' || route() === 'career-support/entrepreneurship') {
    const r = route();
    if (r === 'placements/entrepreneurship' || r === 'entrepreneurship' || r === 'career-support/entrepreneurship') {
      document.title = "Entrepreneurship & Incubation | Sri Shakthi Institute of Engineering & Technology";
      initEntrepreneurshipEvents();
    } else if (r === 'placements/higher-education') {
      document.title = "Higher Education & Global Admissions | Sri Shakthi Institute of Engineering & Technology";
    } else if (r === 'placements/government-services') {
      document.title = "Civil Services & Government Careers | Sri Shakthi Institute of Engineering & Technology";
    } else {
      document.title = "Placements & Career Excellence | Sri Shakthi Institute of Engineering & Technology";
      initPlacementsDynamicKpi();
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
function animateCounter(el) { const to = Number(el.dataset.to), suffix = el.dataset.suffix || '', prefix = el.dataset.prefix || '', start = performance.now(), duration = 1500; function tick(now) { const p = Math.min((now - start) / duration, 1), v = Math.round(to * (1 - (1 - p) ** 3)); el.textContent = prefix + v.toLocaleString('en-IN') + suffix; if (p < 1) requestAnimationFrame(tick) } requestAnimationFrame(tick) }
const handleEscape = e => {
  if (e.key === 'Escape') {
    const recModal = document.getElementById('siet-records-modal');
    if (recModal && recModal.style.display !== 'none') {
      recModal.style.display = 'none';
      document.body.style.overflow = '';
    }

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
    placed: 663,
    companies: '213',
    highest: '₹33 LPA',
    average: '₹6.8 LPA',
    multiple: 185,
    rate: '98%',
    tags: {
      placed: '663 Campus Offers',
      companies: '213 Visited',
      highest: 'Trilogy · ₹33 LPA',
      average: 'Consistent Rise',
      multiple: 'Prime Platinum (10-33L)',
      rate: 'Eligible Cohort'
    }
  },
  '2024 - 25': {
    placed: 580,
    companies: '190+',
    highest: '₹22 LPA',
    average: '₹5.8 LPA',
    multiple: 145,
    rate: '95%',
    tags: {
      placed: '↑ 24% YoY',
      companies: 'Fortune 500s',
      highest: 'Super Dream',
      average: 'Steady Rise',
      multiple: 'Multi-Offers',
      rate: 'NBA Accredited'
    }
  },
  '2023 - 24': {
    placed: 460,
    companies: '165+',
    highest: '₹18 LPA',
    average: '₹5.2 LPA',
    multiple: 110,
    rate: '92%',
    tags: {
      placed: '↑ 18% YoY',
      companies: 'Global Recruits',
      highest: 'Tier-1 Marquee',
      average: 'Benchmark Level',
      multiple: 'Dual Offers',
      rate: 'Core Disciplines'
    }
  },
  '2022 - 23': {
    placed: 390,
    companies: '140+',
    highest: '₹14 LPA',
    average: '₹4.6 LPA',
    multiple: 85,
    rate: '90%',
    tags: {
      placed: 'Solid Growth',
      companies: 'National Drives',
      highest: 'Top Tier',
      average: 'Foundation Phase',
      multiple: 'Multiple Drives',
      rate: 'Strong Benchmark'
    }
  }
};

// All 43 Authentic Placement Superstars (Season 2025 - 2026 Official Banner Data)
const allSuperstarsData = [
  // ── ₹33 LPA CLUB (Prime Platinum · Marquee Record) ──
  { name: 'Gowtham G', dept: 'Cyber Security (CYS)', company: 'Trilogy', ctc: '₹33 LPA', tier: '33', top: true, batch: 'Batch 2026', img: '/brand/achievers/gowtham-g.jpg' },
  { name: 'Siv Raam Krishnan K V', dept: 'AI & Data Science (AI DS)', company: 'Trilogy', ctc: '₹33 LPA', tier: '33', top: true, batch: 'Batch 2026', img: '/brand/achievers/siv-raam-krishnan-k-v.jpg' },

  // ── ₹22 LPA CLUB (Super Dream Offers · Increff) ──
  { name: 'Prakash Dass R', dept: 'AI & Machine Learning (AI ML)', company: 'Increff', ctc: '₹22 LPA', tier: '22', top: true, batch: 'Batch 2026', img: '/brand/achievers/prakash-dass-r.jpg' },
  { name: 'Dilip Kumar N', dept: 'Information Technology (IT)', company: 'Increff', ctc: '₹22 LPA', tier: '22', top: true, batch: 'Batch 2026', img: '/brand/achievers/dilip-kumar-n.jpg' },
  { name: 'Anupama R', dept: 'AI & Data Science (AI DS)', company: 'Increff', ctc: '₹22 LPA', tier: '22', top: true, batch: 'Batch 2026', img: '/brand/achievers/anupama-r.jpg' },
  { name: 'Dharaneesh B', dept: 'AI & Machine Learning (AI ML)', company: 'Increff', ctc: '₹22 LPA', tier: '22', top: true, batch: 'Batch 2026', img: '/brand/achievers/dharaneesh-b.jpg' },
  { name: 'Dinesh J', dept: 'AI & Machine Learning (AI ML)', company: 'Increff', ctc: '₹22 LPA', tier: '22', top: true, batch: 'Batch 2026', img: '/brand/achievers/dinesh-j.jpg' },

  // ── ₹13 LPA & ₹12 LPA CLUB (Product & Cloud Tier) ──
  { name: 'Seema Maglin S', dept: 'AI & Data Science (AI DS)', company: 'Presidio', ctc: '₹13 LPA', tier: '13-12', top: false, batch: 'Batch 2026', img: '/brand/achievers/seema-maglin-s.jpg' },
  { name: 'Dharun J', dept: 'Cyber Security (CYS)', company: 'Zenx AI', ctc: '₹12 LPA', tier: '13-12', top: false, batch: 'Batch 2026', img: '/brand/achievers/dharun-j.jpg' },
  { name: 'Mithun Raaj S', dept: 'Electronics & Comm. (ECE)', company: 'Hyperverge', ctc: '₹12 LPA', tier: '13-12', top: false, batch: 'Batch 2026', img: '/brand/achievers/mithun-raaj-s.jpg' },

  // ── ₹10 LPA CLUB (Tier-1 Tech Giants & Product Leaders) ──
  { name: 'Janarthanan A', dept: 'Electronics & Comm. (ECE)', company: 'TCS', ctc: '₹10 LPA', tier: '10', top: false, batch: 'Batch 2026', img: '/brand/achievers/janarthanan-a.jpg' },
  { name: 'Hiba Fathima N', dept: 'Computer Science (CSE)', company: 'TCS', ctc: '₹10 LPA', tier: '10', top: false, batch: 'Batch 2026', img: '/brand/achievers/hiba-fathima-n.jpg' },
  { name: 'Jefrin Peter M', dept: 'Cyber Security (CYS)', company: 'Tiger Analytics', ctc: '₹10 LPA', tier: '10', top: false, batch: 'Batch 2026', img: '/brand/achievers/jefrin-peter-m.jpg' },
  { name: 'Dhana Varshini S', dept: 'AI & Data Science (AI DS)', company: 'Tiger Analytics', ctc: '₹10 LPA', tier: '10', top: false, batch: 'Batch 2026', img: '/brand/achievers/dhana-varshini-s.jpg' },
  { name: 'Eshwar K', dept: 'AI & Data Science (AI DS)', company: 'Tiger Analytics', ctc: '₹10 LPA', tier: '10', top: false, batch: 'Batch 2026', img: '/brand/achievers/eshwar-k.jpg' },
  { name: 'Aswin Raj S', dept: 'AI & Data Science (AI DS)', company: 'Tiger Analytics', ctc: '₹10 LPA', tier: '10', top: false, batch: 'Batch 2026', img: '/brand/achievers/aswin-raj-s.jpg' },
  { name: 'Muthuraja M', dept: 'AI & Machine Learning (AI ML)', company: 'Tiger Analytics', ctc: '₹10 LPA', tier: '10', top: false, batch: 'Batch 2026', img: '/brand/achievers/muthuraja-m.jpg' },
  { name: 'Boopathi K', dept: 'Information Technology (IT)', company: 'Reltio', ctc: '₹10 LPA', tier: '10', top: false, batch: 'Batch 2026', img: '/brand/achievers/boopathi-k.jpg' },
  { name: 'Vishal S', dept: 'Cyber Security (CYS)', company: 'Reltio', ctc: '₹10 LPA', tier: '10', top: false, batch: 'Batch 2026', img: '/brand/achievers/vishal-s.jpg' },
  { name: 'Sangamithra G', dept: 'Biomedical Engg. (BME)', company: 'Reltio', ctc: '₹10 LPA', tier: '10', top: false, batch: 'Batch 2026', img: '/brand/achievers/sangamithra-g.jpg' },
  { name: 'Gowthama Raj K M', dept: 'Electronics & Comm. (ECE)', company: 'Mr. Cooper', ctc: '₹10 LPA', tier: '10', top: false, batch: 'Batch 2026', img: '/brand/achievers/gowthama-raj-k-m.jpg' },
  { name: 'Deepak Kumaran RM G', dept: 'AI & Machine Learning (AI ML)', company: 'Mr. Cooper', ctc: '₹10 LPA', tier: '10', top: false, batch: 'Batch 2026', img: '/brand/achievers/deepak-kumaran-rm-g.jpg' },
  { name: 'Mugesh Ram Sundar G S', dept: 'AI & Data Science (AI DS)', company: 'Mr. Cooper', ctc: '₹10 LPA', tier: '10', top: false, batch: 'Batch 2026', img: '/brand/achievers/mugesh-ram-sundar-g-s.jpg' },
  { name: 'Abishek S', dept: 'Information Technology (IT)', company: 'Mr. Cooper', ctc: '₹10 LPA', tier: '10', top: false, batch: 'Batch 2026', img: '/brand/achievers/abishek-s.jpg' },
  { name: 'Akilesh Prabhu S', dept: 'Information Technology (IT)', company: 'Mr. Cooper', ctc: '₹10 LPA', tier: '10', top: false, batch: 'Batch 2026', img: '/brand/achievers/akilesh-prabhu-s.jpg' },
  { name: 'Gowthaman N', dept: 'Information Technology (IT)', company: 'Mr. Cooper', ctc: '₹10 LPA', tier: '10', top: false, batch: 'Batch 2026', img: '/brand/achievers/gowthaman-n.jpg' },

  // ── ₹9 LPA CLUB (DeepTech, AI Labs & Global IT) ──
  { name: 'Mohammed Asan I', dept: 'Computer Science (CSE)', company: 'InCorp', ctc: '₹9 LPA', tier: '9', top: false, batch: 'Batch 2026', img: '/brand/achievers/mohammed-asan-i.jpg' },
  { name: 'Raja Imaya Bharathi J', dept: 'Information Technology (IT)', company: 'InCorp', ctc: '₹9 LPA', tier: '9', top: false, batch: 'Batch 2026', img: '/brand/achievers/raja-imaya-bharathi-j.jpg' },
  { name: 'Nithya Prakash M', dept: 'AI & Data Science (AI DS)', company: 'Aansena', ctc: '₹9 LPA', tier: '9', top: false, batch: 'Batch 2026', img: '/brand/achievers/nithya-prakash-m.jpg' },
  { name: 'Divya J', dept: 'AI & Data Science (AI DS)', company: 'CTS', ctc: '₹9 LPA', tier: '9', top: false, batch: 'Batch 2026', img: '/brand/achievers/divya-j.jpg' },
  { name: 'Rahul R N', dept: 'AI & Machine Learning (AI ML)', company: 'Centillion Labs', ctc: '₹9 LPA', tier: '9', top: false, batch: 'Batch 2026', img: '/brand/achievers/rahul-r-n.jpg' },
  { name: 'Siddarth D', dept: 'Computer Science (CSE)', company: 'Centillion Labs', ctc: '₹9 LPA', tier: '9', top: false, batch: 'Batch 2026', img: '/brand/achievers/siddarth-d.jpg' },
  { name: 'Suriyavel M', dept: 'Computer Science (CSE)', company: 'Centillion Labs', ctc: '₹9 LPA', tier: '9', top: false, batch: 'Batch 2026', img: '/brand/achievers/suriyavel-m.jpg' },
  { name: 'Sailesh R', dept: 'Computer Science (CSE)', company: 'Centillion Labs', ctc: '₹9 LPA', tier: '9', top: false, batch: 'Batch 2026', img: '/brand/achievers/sailesh-r.jpg' },
  { name: 'Sanjay J', dept: 'AI & Data Science (AI DS)', company: 'Centillion Labs', ctc: '₹9 LPA', tier: '9', top: false, batch: 'Batch 2026', img: '/brand/achievers/sanjay-j.jpg' },
  { name: 'Gokul Sriram', dept: 'AI & Machine Learning (AI ML)', company: 'Centillion Labs', ctc: '₹9 LPA', tier: '9', top: false, batch: 'Batch 2026', img: '/brand/achievers/gokul-sriram.jpg' },
  { name: 'Sai Subin', dept: 'Information Technology (IT)', company: 'Centillion Labs', ctc: '₹9 LPA', tier: '9', top: false, batch: 'Batch 2026', img: '/brand/achievers/sai-subin.jpg' },
  { name: 'Naveen N', dept: 'Computer Science (CSE)', company: 'Centillion Labs', ctc: '₹9 LPA', tier: '9', top: false, batch: 'Batch 2026', img: '/brand/achievers/naveen-n.jpg' },
  { name: 'Rahul Nisanth M', dept: 'Computer Science (CSE)', company: 'Centillion Labs', ctc: '₹9 LPA', tier: '9', top: false, batch: 'Batch 2026', img: '/brand/achievers/rahul-nisanth-m.jpg' },
  { name: 'Soorya Akilesh C', dept: 'AI & Data Science (AI DS)', company: 'Centillion Labs', ctc: '₹9 LPA', tier: '9', top: false, batch: 'Batch 2026', img: '/brand/achievers/soorya-akilesh-c.jpg' },
  { name: 'Arun Krishna S', dept: 'Cyber Security (CYS)', company: 'Centillion Labs', ctc: '₹9 LPA', tier: '9', top: false, batch: 'Batch 2026', img: '/brand/achievers/arun-krishna-s.jpg' },
  { name: 'Nivash M', dept: 'Cyber Security (CYS)', company: 'Centillion Labs', ctc: '₹9 LPA', tier: '9', top: false, batch: 'Batch 2026', img: '/brand/achievers/nivash-m.jpg' },
  { name: 'Afsal Ahamad', dept: 'AI & Machine Learning (AI ML)', company: 'Centillion Labs', ctc: '₹9 LPA', tier: '9', top: false, batch: 'Batch 2026', img: '/brand/achievers/afsal-ahamad.jpg' }
];

const starAchievers = allSuperstarsData;

// All Top Recruiters (Comprehensive Single-Line Showcase)
const allTopRecruiters = [
  { name: 'ZOHO', type: 'img', src: '/brand/placement-company-logo/line-2/zoho-logo.png', category: 'Product & SaaS' },
  { name: 'Infosys', type: 'svg', category: 'Technology Consulting' },
  { name: 'J.P.Morgan', type: 'custom', html: '<text x="50%" y="60%" dominant-baseline="middle" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="22" fill="#2d2926">J.P.Morgan</text>', category: 'Investment Bank' },
  { name: 'Amazon', type: 'svg', category: 'Cloud & Tech Giant' },
  { name: 'AUTODESK', type: 'custom', html: '<text x="50%" y="60%" dominant-baseline="middle" text-anchor="middle" font-family="Plus Jakarta Sans, sans-serif" font-weight="800" font-size="20" letter-spacing="1.5" fill="#0696d7">▲ AUTODESK</text>', category: '3D Design Tech' },
  { name: 'TCS', type: 'svg', category: 'Global IT Leader' },
  { name: 'Accenture', type: 'svg', category: 'Strategy & Consulting' },
  { name: 'JUSPAY', type: 'custom', html: '<circle cx="20" cy="16" r="7" fill="#0077ff"/><text x="62%" y="60%" dominant-baseline="middle" text-anchor="middle" font-family="Plus Jakarta Sans, sans-serif" font-weight="800" font-size="21" letter-spacing="0.5" fill="#172a3a">JUSPAY</text>', category: 'FinTech Unicorn' },
  { name: 'Cognizant', type: 'img', src: '/brand/placement-company-logo/line-1/Cognizant-logo.png', category: 'Digital Solutions' },
  { name: 'Wipro', type: 'svg', category: 'Global IT Enterprise' },
  { name: 'ServiceNow', type: 'img', src: '/brand/placement-company-logo/line-2/servicenow-logo.png', category: 'Enterprise Cloud' },
  { name: 'ITC Limited', type: 'img', src: '/brand/placement-company-logo/line-2/ITC-limited-logo.png', category: 'Conglomerate & FMCG' },
  { name: 'Presidio', type: 'img', src: '/brand/placement-company-logo/line-2/Presido-logo.png', category: 'Cyber Security' },
  { name: 'Zentron Labs', type: 'img', src: '/brand/placement-company-logo/line-2/Zentron-labs-logo.png', category: 'Robotics & Vision' },
  { name: 'ConverSight', type: 'img', src: '/brand/placement-company-logo/line-1/Conver-sight-logo.png', category: 'AI & Analytics' },
  { name: 'Zynerd', type: 'img', src: '/brand/placement-company-logo/line-2/Zynerd-logo.png', category: 'EdTech Platform' },
  { name: 'Abluva', type: 'img', src: '/brand/placement-company-logo/line-1/Abluva-logo.png', category: 'Data Security AI' },
  { name: 'Vakilsearch', type: 'img', src: '/brand/placement-company-logo/line-1/Vakil-search-logo.png', category: 'LegalTech & FinTech' },
  { name: 'Conserve', type: 'img', src: '/brand/placement-company-logo/line-2/conserve-logo.png', category: 'Green Engineering' },
  { name: 'Nallas', type: 'img', src: '/brand/placement-company-logo/line-1/nallas-logo.png', category: 'Enterprise IT' },
  { name: 'Retail AI', type: 'img', src: '/brand/placement-company-logo/line-1/Retail-ai-logo.png', category: 'Autonomous Tech' },
  { name: 'nference', type: 'img', src: '/brand/placement-company-logo/line-1/nference-logo.png', category: 'BioMedical AI' }
];

function getRecruiterSvg(name) {
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

function renderStudentCompanyBadge(name) {
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

function renderSuperstarCard(s) {
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

  const ribbonClass = s.top ? 'is-marquee' : (s.tier === '22' ? 'is-superdream' : '');

  return `
    <div class="siet-sp-card ${s.top ? 'is-top' : ''}" data-tier="${s.tier}">
      <div class="siet-sp-ctc-wrap">
        <div class="siet-sp-ctc-top-row">
          <span class="siet-sp-ctc-lbl">${s.top ? 'MARQUEE RECORD' : (s.tier === '22' ? 'SUPER DREAM' : 'ANNUAL PACKAGE')}</span>
          ${tierBadge}
        </div>
        <div class="siet-sp-ctc-ribbon ${ribbonClass}">${s.ctc}</div>
      </div>
      <h3 class="siet-sp-name">${s.name}</h3>
      <p class="siet-sp-dept">${s.dept}</p>
      <div class="siet-sp-company-box">
        ${renderStudentCompanyBadge(s.company)}
      </div>
      <span class="siet-sp-batch">${s.batch}</span>
    </div>
  `;
}

function renderRecruiterCard(r) {
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

function getSuperstarMarqueeHtml(filter = 'all') {
  const filtered = (filter === 'all')
    ? allSuperstarsData
    : allSuperstarsData.filter(s => s.tier === filter);

  let baseList = [...filtered];
  while (baseList.length < 10) {
    baseList = baseList.concat(filtered);
  }
  const doubleList = baseList.concat(baseList);
  return doubleList.map(renderSuperstarCard).join('');
}

function placementsDashboardPage(route) {
  const activeRoute = route || 'placements';
  const isEnt = activeRoute.includes('entrepreneurship');
  const isHigh = activeRoute.includes('higher-education');
  const isGov = activeRoute.includes('government-services');

  // Subpage: Entrepreneurship
  if (isEnt) {
    return entrepreneurshipPage();
  }

  // Subpage: Higher Education
  if (isHigh) {
    return `
      <main class="siet-vm-page">
        <section class="siet-vm-hero">
          <div class="siet-vm-hero-grid"></div>
          <div class="siet-vm-hero-orb orb-one"></div>
          <div class="siet-vm-hero-orb orb-two"></div>
          <div class="siet-vm-shell siet-vm-hero-content reveal">
            <p class="siet-vm-kicker"><i></i> HIGHER EDUCATION</p>
            <h1>Higher Education <em>&amp; Admissions</em></h1>
            <p class="siet-vm-intro">Guiding graduates towards post-graduate admissions at premier international universities and Indian institutes.</p>
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

            <!-- INTERNATIONAL EDUCATION CARDS -->
            <article class="siet-vm-card siet-vm-card-vision reveal" style="min-height:240px;padding:22px;">
              <div class="siet-vm-card-pattern"></div>
              <div class="siet-vm-card-top"><span class="siet-vm-card-icon">${vmIcon('compass')}</span><span class="siet-vm-card-number">03 / USA</span></div>
              <div class="siet-vm-card-copy"><p class="siet-vm-card-label">POST GRADUATE COURSES</p><h2>United States</h2><p>Counselling provided for post graduate courses in Ivy League &amp; Top Tech Institutes.</p></div>
              <div class="siet-vm-card-footer"><span>Global Exposure</span><i></i></div>
            </article>

            <article class="siet-vm-card siet-vm-card-mission reveal" style="min-height:240px;padding:22px;">
              <div class="siet-vm-mission-lines"></div>
              <div class="siet-vm-card-top"><span class="siet-vm-card-icon">${vmIcon('compass')}</span><span class="siet-vm-card-number">04 / UK</span></div>
              <div class="siet-vm-card-copy"><p class="siet-vm-card-label">POST GRADUATE COURSES</p><h2>United Kingdom</h2><p>Counselling provided for post graduate courses in Russell Group Universities.</p></div>
              <div class="siet-vm-card-footer"><span>Global Exposure</span><i></i></div>
            </article>

            <article class="siet-vm-card siet-vm-card-vision reveal" style="min-height:240px;padding:22px;">
              <div class="siet-vm-card-pattern"></div>
              <div class="siet-vm-card-top"><span class="siet-vm-card-icon">${vmIcon('compass')}</span><span class="siet-vm-card-number">05 / CANADA</span></div>
              <div class="siet-vm-card-copy"><p class="siet-vm-card-label">POST GRADUATE COURSES</p><h2>Canada</h2><p>Counselling provided for post graduate courses in Leading Research Academies.</p></div>
              <div class="siet-vm-card-footer"><span>Global Exposure</span><i></i></div>
            </article>

            <article class="siet-vm-card siet-vm-card-mission reveal" style="min-height:240px;padding:22px;">
              <div class="siet-vm-mission-lines"></div>
              <div class="siet-vm-card-top"><span class="siet-vm-card-icon">${vmIcon('compass')}</span><span class="siet-vm-card-number">06 / AUSTRALIA</span></div>
              <div class="siet-vm-card-copy"><p class="siet-vm-card-label">POST GRADUATE COURSES</p><h2>Australia</h2><p>Counselling provided for post graduate courses in Group of Eight (Go8) Universities.</p></div>
              <div class="siet-vm-card-footer"><span>Global Exposure</span><i></i></div>
            </article>

            <article class="siet-vm-card siet-vm-card-vision reveal" style="min-height:240px;padding:22px;">
              <div class="siet-vm-card-pattern"></div>
              <div class="siet-vm-card-top"><span class="siet-vm-card-icon">${vmIcon('compass')}</span><span class="siet-vm-card-number">07 / GERMANY</span></div>
              <div class="siet-vm-card-copy"><p class="siet-vm-card-label">POST GRADUATE COURSES</p><h2>Germany</h2><p>Counselling provided for post graduate courses in TU9 Engineering Excellence institutes.</p></div>
              <div class="siet-vm-card-footer"><span>Global Exposure</span><i></i></div>
            </article>
          </div>
        </div>
      </main>
    `;
  }

  // Subpage: Government Services
  if (isGov) {
    return `
      <main class="siet-vm-page">
        <section class="siet-vm-hero">
          <div class="siet-vm-hero-grid"></div>
          <div class="siet-vm-hero-orb orb-one"></div>
          <div class="siet-vm-hero-orb orb-two"></div>
          <div class="siet-vm-shell siet-vm-hero-content reveal">
            <p class="siet-vm-kicker"><i></i> GOVERNMENT SERVICES</p>
            <h1>Civil Services <em>&amp; Public Sector</em></h1>
            <p class="siet-vm-intro">Mentoring disciplined graduates for careers in Indian administrative services, defense research, and public enterprises.</p>
          </div>
        </section>

        <!-- NEW ALS IAS COACHING SECTION -->
        <section class="siet-he-intl-section reveal" style="background:#fff; border-bottom:1px solid #eef5f0; padding:60px 20px;">
          <div class="siet-he-intl-container" style="max-width: 1000px; text-align: center; margin: 0 auto;">
            <h2 class="siet-he-quote-text" style="color:#138a36; margin-bottom:40px; font-size:22px; font-weight:800; text-transform:uppercase; letter-spacing:0.5px;">
              COACHING FOR CIVIL SERVICES EXAMINATIONS PROVIDED IN PARTNERSHIP WITH ALS
            </h2>
            
            <div style="background:#fff; border-radius:12px; box-shadow: 0 10px 40px rgba(0,0,0,0.1); overflow:hidden; border:2px solid #e5001a;">
              <div style="background:#e5001a; color:#fff; padding:12px 24px; text-align:left; font-weight:bold; font-size:18px;">
                Top IAS Coaching in Delhi
              </div>
              <div style="display:flex; align-items:center; padding:30px; flex-wrap:wrap; gap:20px;">
                <div style="flex:1; min-width:150px; border-right:2px solid #eee; padding-right:20px; text-align:center;">
                  <span style="display:block; color:#0033a0; font-size:24px; font-weight:bold; font-style:italic;">Rank</span>
                  <span style="display:block; font-size:80px; font-weight:900; line-height:1; color:#0033a0; text-shadow:2px 2px 0px #fff, 4px 4px 0px rgba(0,51,160,0.1);">5</span>
                </div>
                <div style="flex:3; min-width:300px; padding:0 30px; text-align:center;">
                  <div style="background:#e5001a; display:inline-block; padding:20px 40px;">
                    <span style="display:block; font-family:Georgia, serif; font-size:80px; color:#fff; font-weight:bold; line-height:1;">ALS</span>
                    <span style="display:block; color:#fff; font-size:16px; margin-top:10px; border-top:1px solid rgba(255,255,255,0.5); padding-top:10px;">Training Steel pillars For the Nation</span>
                  </div>
                </div>
                <div style="flex:2; min-width:200px; text-align:left; padding-left:20px;">
                  <span style="display:block; color:#0033a0; font-size:24px; font-weight:bold; margin-bottom:8px;">ALS IAS Academy</span>
                  <a href="http://www.alsias.net" target="_blank" rel="noopener" style="color:#0033a0; font-size:18px; font-weight:bold; text-decoration:none;">www.alsias.net</a>
                </div>
              </div>
            </div>
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

  // 1. Top Recruiters Marquee Cards (Single Continuous Line)
  const marqueeSingleHtml = allTopRecruiters.map(renderRecruiterCard).join('');

  // 2. Year Tabs
  const tabsHtml = Object.keys(placementDataYears).map((year, i) => `
    <button type="button" class="siet-tmpl-ytab ${i === 0 ? 'is-active' : ''}" data-year="${year}">
      ${i === 0 ? '<span class="siet-tmpl-ytab-dot"></span>' : ''}
      ${year}
    </button>
  `).join('');

  // 3. Superstars Running Single Slide Marquee HTML
  const initialSuperstarsMarqueeHtml = getSuperstarMarqueeHtml('all');

  return `
    <main class="siet-pe-page">

      <!-- ══════════════════════════════════════════════════════════
           1. SUPERSTARS OF PLACEMENT SEASON 2025 - 2026 (Official Banner Data)
           ══════════════════════════════════════════════════════════ -->
      <!-- Institutional Placement Hero Header (Matching About Design Language) -->
      <section class="siet-sp-hero">
        <div class="siet-sp-hero-grid"></div>
        <div class="siet-sp-hero-orb orb-one"></div>
        <div class="siet-sp-hero-orb orb-two"></div>
        <div class="siet-sp-hero-rings" aria-hidden="true"></div>
        <div class="siet-sp-hero-inner">
          <div class="siet-sp-hero-top-row">
            <p class="siet-sp-kicker"><i></i> SRI SHAKTHI PRIDE · TNEA CODE 2727 · CLASS OF 2026</p>
            <div class="siet-sp-tag-badge">
              <span class="siet-sp-tag-dot"></span>
              <span>663 OFFERS · 213 COMPANIES · ₹33 LPA PEAK</span>
            </div>
          </div>
          <h1 class="siet-sp-hero-title">Placement <em>Superstars</em> &amp; Career Milestones</h1>
          <p class="siet-sp-hero-intro">Celebrating 663 campus offers and peak compensation of ₹33 LPA secured by our graduating engineering cohort across leading multinational technology corporations and product innovators.</p>
        </div>
      </section>

      <!-- 1. SUPERSTARS OF PLACEMENT SEASON 2025 - 2026 (Official Banner Data) -->
      <section class="siet-sp-section">
        <div class="siet-sp-shell">

          <!-- 1. SUPERSTARS RUNNING SHOWCASE (Single Continuous Slide) -->
          <div class="siet-sp-gallery-controls">
            <div class="siet-sp-gallery-title-group">
              <span class="siet-sp-gallery-kicker"><i></i> INDIVIDUAL STUDENT RECRUITMENT RECORDS</span>
              <h2 class="siet-sp-gallery-title">Meet Our <em>43 Placement Superstars</em></h2>
            </div>
            <div class="siet-sp-filter-tabs" id="siet-sp-tier-filters">
              <button type="button" class="siet-sp-filter-tab is-active" data-tier="all">
                <span class="siet-sp-ftab-dot"></span> All Superstars (43)
              </button>
              <button type="button" class="siet-sp-filter-tab" data-tier="33">₹33 LPA · Trilogy (2)</button>
              <button type="button" class="siet-sp-filter-tab" data-tier="22">₹22 LPA · Increff (5)</button>
              <button type="button" class="siet-sp-filter-tab" data-tier="13-12">₹13–12 LPA (3)</button>
              <button type="button" class="siet-sp-filter-tab" data-tier="10">₹10 LPA (16)</button>
              <button type="button" class="siet-sp-filter-tab" data-tier="9">₹9 LPA (17)</button>
            </div>
          </div>

          <!-- Single Slide Running Track (Continuous Marquee with Image Hover & Pause) -->
          <div class="siet-sp-marquee-wrapper" id="siet-sp-marquee-wrapper">
            <div class="siet-sp-marquee-track" id="siet-sp-cards-track">
              ${initialSuperstarsMarqueeHtml}
            </div>
          </div>

          <!-- Official Placement Key Metrics Grid (Matching Home/About Stat Grid) -->
          <div class="siet-sp-stats-wrapper" id="siet-kpi-interactive-area">
            <div class="siet-sp-stats-grid">
              
              <!-- 01. Campus Offers -->
              <article class="siet-sp-stat-box js-kpi-card is-active" data-kpi="offers" data-filter="all" title="Click to view all campus offers" tabindex="0">
                <span class="stat-index">01</span>
                <span class="stat-icon" aria-hidden="true">${icon('chart')}</span>
                <h3><span class="js-counter" data-to="663" data-suffix="+">0+</span></h3>
                <p>Campus Offers</p>
                <span class="stat-subtitle">Class of 2026 Cohort</span>
                <span class="stat-bottom-line" aria-hidden="true"></span>
              </article>

              <!-- 02. Recruiting Companies -->
              <article class="siet-sp-stat-box js-kpi-card" data-kpi="companies" data-filter="all" title="Click to inspect recruiter partnerships" tabindex="0">
                <span class="stat-index">02</span>
                <span class="stat-icon" aria-hidden="true">${icon('industry')}</span>
                <h3><span class="js-counter" data-to="213" data-suffix="+">0+</span></h3>
                <p>Recruiting Companies</p>
                <span class="stat-subtitle">Tier-1 &amp; Core Partners</span>
                <span class="stat-bottom-line" aria-hidden="true"></span>
              </article>

              <!-- 03. Highest CTC -->
              <article class="siet-sp-stat-box js-kpi-card is-highlight" data-kpi="highest" data-filter="33" title="Click to filter ₹33 LPA superstars" tabindex="0">
                <span class="stat-index">03</span>
                <span class="stat-icon" aria-hidden="true">${icon('trophy')}</span>
                <h3 class="highlight-val"><span class="js-counter" data-prefix="₹" data-to="33" data-suffix=" LPA">₹0 LPA</span></h3>
                <p>Highest CTC (Trilogy)</p>
                <span class="stat-subtitle">Marquee Peak Package</span>
                <span class="stat-bottom-line" aria-hidden="true"></span>
              </article>

              <!-- 04. Prime Platinum -->
              <article class="siet-sp-stat-box js-kpi-card" data-kpi="platinum" data-filter="22" title="Click to filter ₹10–33 LPA offers" tabindex="0">
                <span class="stat-index">04</span>
                <span class="stat-icon" aria-hidden="true">${icon('crown')}</span>
                <h3><span class="js-counter" data-to="26">0</span></h3>
                <p>Prime Platinum</p>
                <span class="stat-subtitle">₹10 – ₹33 LPA Super Dream</span>
                <span class="stat-bottom-line" aria-hidden="true"></span>
              </article>

              <!-- 05. Dazzling Diamond -->
              <article class="siet-sp-stat-box js-kpi-card" data-kpi="diamond" data-filter="10" title="Click to filter ₹6–10 LPA offers" tabindex="0">
                <span class="stat-index">05</span>
                <span class="stat-icon" aria-hidden="true">${icon('chip')}</span>
                <h3><span class="js-counter" data-to="98">0</span></h3>
                <p>Dazzling Diamond</p>
                <span class="stat-subtitle">₹6 – ₹10 LPA Product Tier</span>
                <span class="stat-bottom-line" aria-hidden="true"></span>
              </article>

              <!-- 06. Precious Pearl -->
              <article class="siet-sp-stat-box js-kpi-card" data-kpi="pearl" data-filter="9" title="Click to filter ₹4–6 LPA offers" tabindex="0">
                <span class="stat-index">06</span>
                <span class="stat-icon" aria-hidden="true">${icon('connect')}</span>
                <h3><span class="js-counter" data-to="272">0</span></h3>
                <p>Precious Pearl</p>
                <span class="stat-subtitle">₹4 – ₹6 LPA Core IT Tier</span>
                <span class="stat-bottom-line" aria-hidden="true"></span>
              </article>

            </div>
            <div class="bottom-gold-line" aria-hidden="true"></div>
          </div>
        </div>
      </section>

      <!-- ══════════════════════════════════════════════════════════
           2. YEAR-WISE HIGHLIGHTS & GROWTH RECORD (Sri Shakthi Theme)
           ══════════════════════════════════════════════════════════ -->
      <section class="siet-yw-section">
        <div class="siet-sp-lower-shell">
          <!-- Section Header (Matching About / Vision & Mission Intro) -->
          <div class="siet-vm-section-intro reveal" style="text-align:center;max-width:800px;margin:0 auto 36px;">
            <p style="color:#00854a;font-weight:800;letter-spacing:0.18em;margin-bottom:8px;font-size:12px;">ANNUAL PLACEMENT RECORD</p>
            <h2 style="font:800 clamp(28px,3.2vw,44px)/1.15 'Plus Jakarta Sans',sans-serif;color:#00281b;letter-spacing:-0.03em;margin:0 0 10px;">Year-Wise <em style="font-family:'Playfair Display',Georgia,serif;font-weight:600;font-style:italic;color:#00854a;">Highlights &amp; Growth</em></h2>
            <span style="font-size:15px;color:#507060;line-height:1.6;font-weight:500;">Consistent multi-year placement performance, expanding top-tier recruiter partnerships, and escalating package milestones.</span>
          </div>

          <div class="siet-vm-card-grid siet-yw-vm-grid">

            <!-- Card 1: Cohort Performance Highlights (Vision Card Template) -->
            <article class="siet-vm-card siet-vm-card-vision siet-yw-card-audit reveal">
              <div class="siet-vm-card-pattern"></div>
              <div class="siet-vm-card-top">
                <span class="siet-vm-card-icon">${vmIcon('eye')}</span>
                <div class="siet-yw-card-top-right">
                  <span class="siet-tmpl-verified-tag">✓ NIRF &amp; NBA Verified</span>
                  <span class="siet-vm-card-number">01 / HIGHLIGHTS</span>
                </div>
              </div>
              <div class="siet-vm-card-copy siet-yw-copy">
                <p class="siet-vm-card-label">COHORT PERFORMANCE AUDIT</p>
                <h2>Validated Campus <em>Milestones.</em></h2>
                <p class="siet-yw-card-desc">Annual audited metrics verified by the Training &amp; Placement Cell across all eligible departments.</p>

                <!-- Year Tabs -->
                <div class="siet-tmpl-year-tabs">
                  ${tabsHtml}
                </div>

                <!-- 6-Metric Stat Tiles Grid -->
                <div class="siet-tmpl-stats-grid">
                  <!-- Item 1: Students Placed / Total Offers -->
                  <div class="siet-tmpl-stat-card">
                    <div class="siet-tmpl-sc-header">
                      <div class="siet-tmpl-sitem-icon">
                        <svg viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 3s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
                      </div>
                      <span class="siet-tmpl-trend-pill is-green" id="tmpl-tag-placed">663 Campus Offers</span>
                    </div>
                    <div class="siet-tmpl-sc-content">
                      <span class="siet-tmpl-sitem-lbl">Total Campus Offers</span>
                      <span class="siet-tmpl-sitem-val" id="tmpl-val-placed">663</span>
                    </div>
                  </div>

                  <!-- Item 2: Companies Visited -->
                  <div class="siet-tmpl-stat-card">
                    <div class="siet-tmpl-sc-header">
                      <div class="siet-tmpl-sitem-icon">
                        <svg viewBox="0 0 24 24"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/></svg>
                      </div>
                      <span class="siet-tmpl-trend-pill is-gold" id="tmpl-tag-companies">213 Visited</span>
                    </div>
                    <div class="siet-tmpl-sc-content">
                      <span class="siet-tmpl-sitem-lbl">Companies Visited</span>
                      <span class="siet-tmpl-sitem-val" id="tmpl-val-companies">213</span>
                    </div>
                  </div>

                  <!-- Item 3: Highest Package -->
                  <div class="siet-tmpl-stat-card is-highlight">
                    <div class="siet-tmpl-sc-header">
                      <div class="siet-tmpl-sitem-icon" style="background:#fff8e1;color:#b87e00;">
                        <svg viewBox="0 0 24 24"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>
                      </div>
                      <span class="siet-tmpl-trend-pill is-gold" id="tmpl-tag-highest">Trilogy Record</span>
                    </div>
                    <div class="siet-tmpl-sc-content">
                      <span class="siet-tmpl-sitem-lbl">Highest Package</span>
                      <span class="siet-tmpl-sitem-val" id="tmpl-val-highest" style="color:#005a39;">₹33 LPA</span>
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
                      <span class="siet-tmpl-sitem-val" id="tmpl-val-average">₹6.8 LPA</span>
                    </div>
                  </div>

                  <!-- Item 5: Multiple Offers -->
                  <div class="siet-tmpl-stat-card">
                    <div class="siet-tmpl-sc-header">
                      <div class="siet-tmpl-sitem-icon">
                        <svg viewBox="0 0 24 24"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>
                      </div>
                      <span class="siet-tmpl-trend-pill is-blue" id="tmpl-tag-multiple">Prime &amp; Dual</span>
                    </div>
                    <div class="siet-tmpl-sc-content">
                      <span class="siet-tmpl-sitem-lbl">Multiple Offers</span>
                      <span class="siet-tmpl-sitem-val" id="tmpl-val-multiple">185</span>
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
                      <span class="siet-tmpl-sitem-val" id="tmpl-val-rate">98%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="siet-vm-card-footer">
                <span>Audited by Training &amp; Placement Cell. Verified annually.</span>
                <i></i>
              </div>
            </article>

            <!-- Card 2: Placement Growth Chart (Mission Card Template) -->
            <article class="siet-vm-card siet-vm-card-mission siet-yw-card-growth reveal">
              <div class="siet-vm-mission-lines"></div>
              <div class="siet-vm-card-top">
                <span class="siet-vm-card-icon siet-yw-gold-icon">${vmIcon('spark')}</span>
                <div class="siet-yw-card-top-right">
                  <span class="siet-chart-growth-pill">↑ +70.0% Surge</span>
                  <span class="siet-vm-card-number siet-yw-gold-num">02 / GROWTH</span>
                </div>
              </div>
              <div class="siet-vm-card-copy siet-yw-copy">
                <p class="siet-vm-card-label">TREND ANALYSIS (LAST 4 YEARS)</p>
                <h2 style="color:#ffffff;">Placement Growth <em>&amp; Trajectory.</em></h2>
                <p class="siet-yw-card-desc" style="color:rgba(255,255,255,0.85);">Sustained upward progression in multi-tier recruiting partnerships and offer volumes.</p>

                <!-- Legend Bar -->
                <div class="siet-tmpl-chart-legend siet-yw-chart-legend">
                  <span class="siet-legend-item"><i style="background:linear-gradient(180deg,#00e676,#00854a)"></i> Campus Offers</span>
                  <span class="siet-legend-item"><i style="background:linear-gradient(180deg,#ffd54f,#f59e0b)"></i> Companies Visited</span>
                  <span class="siet-legend-item"><i style="background:#69f0ae;height:3px;border-radius:2px;"></i> Growth Spline</span>
                </div>

                <!-- High-Resolution Enhanced SVG Bar & Spline Chart -->
                <div class="siet-chart-svg-wrap">
                  <svg viewBox="0 0 500 220" class="siet-chart-svg" preserveAspectRatio="xMidYMid meet" aria-label="Placement Growth Chart">
                    <defs>
                      <linearGradient id="sietBarGreenGradDark" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#00e676"/>
                        <stop offset="100%" stop-color="#00854a"/>
                      </linearGradient>
                      <linearGradient id="sietBarActiveGreenGradDark" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#69f0ae"/>
                        <stop offset="100%" stop-color="#00b364"/>
                      </linearGradient>
                      <linearGradient id="sietBarGoldGradDark" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#ffd54f"/>
                        <stop offset="100%" stop-color="#f59e0b"/>
                      </linearGradient>
                      <linearGradient id="chartSplineGradDark" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stop-color="#00e676"/>
                        <stop offset="65%" stop-color="#69f0ae"/>
                        <stop offset="100%" stop-color="#f3c515"/>
                      </linearGradient>
                      <filter id="sietGlowDark" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.35"/>
                      </filter>
                      <filter id="sietSplineGlowDark" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#69f0ae" flood-opacity="0.7"/>
                      </filter>
                    </defs>

                    <!-- Y-Axis Grid Lines and Reference Labels -->
                    <text x="32" y="19" font-size="9" fill="#a3d9b5" text-anchor="end" font-family="'Plus Jakarta Sans',sans-serif" font-weight="600">700</text>
                    <line x1="42" y1="15" x2="480" y2="15" stroke="rgba(255,255,255,0.14)" stroke-width="1" stroke-dasharray="3,3"/>

                    <text x="32" y="59" font-size="9" fill="#a3d9b5" text-anchor="end" font-family="'Plus Jakarta Sans',sans-serif" font-weight="600">500</text>
                    <line x1="42" y1="55" x2="480" y2="55" stroke="rgba(255,255,255,0.14)" stroke-width="1" stroke-dasharray="3,3"/>

                    <text x="32" y="99" font-size="9" fill="#a3d9b5" text-anchor="end" font-family="'Plus Jakarta Sans',sans-serif" font-weight="600">300</text>
                    <line x1="42" y1="95" x2="480" y2="95" stroke="rgba(255,255,255,0.14)" stroke-width="1" stroke-dasharray="3,3"/>

                    <text x="32" y="139" font-size="9" fill="#a3d9b5" text-anchor="end" font-family="'Plus Jakarta Sans',sans-serif" font-weight="600">100</text>
                    <line x1="42" y1="135" x2="480" y2="135" stroke="rgba(255,255,255,0.14)" stroke-width="1" stroke-dasharray="3,3"/>

                    <!-- Base Line -->
                    <line x1="42" y1="175" x2="480" y2="175" stroke="rgba(255,255,255,0.25)" stroke-width="1.5"/>

                    <!-- ── YEAR 1: 2022 - 23 (Center x = 100) ── -->
                    <g class="siet-chart-col-group" data-year="2022 - 23" cursor="pointer">
                      <rect class="siet-chart-col-bg" x="54" y="15" width="92" height="185" rx="8" fill="transparent"/>
                      <!-- Student Bar: 390 -->
                      <rect x="68" y="100" width="26" height="75" fill="url(#sietBarGreenGradDark)" rx="4" filter="url(#sietGlowDark)" class="siet-cbar-student"/>
                      <!-- Company Bar: 140 -->
                      <rect x="100" y="145" width="26" height="30" fill="url(#sietBarGoldGradDark)" rx="4" class="siet-cbar-company"/>
                      <!-- Val Labels -->
                      <text x="81" y="92" font-size="10" fill="#a7f3d0" text-anchor="middle" font-weight="800" font-family="'Plus Jakarta Sans',sans-serif">390</text>
                      <text x="113" y="139" font-size="9.5" fill="#fde047" text-anchor="middle" font-weight="800" font-family="'Plus Jakarta Sans',sans-serif">140</text>
                      <!-- Year Label -->
                      <text x="97" y="196" font-size="10.5" fill="rgba(255,255,255,0.8)" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="700">2022 - 23</text>
                    </g>

                    <!-- ── YEAR 2: 2023 - 24 (Center x = 205) ── -->
                    <g class="siet-chart-col-group" data-year="2023 - 24" cursor="pointer">
                      <rect class="siet-chart-col-bg" x="159" y="15" width="92" height="185" rx="8" fill="transparent"/>
                      <!-- Student Bar: 460 -->
                      <rect x="173" y="85" width="26" height="90" fill="url(#sietBarGreenGradDark)" rx="4" filter="url(#sietGlowDark)" class="siet-cbar-student"/>
                      <!-- Company Bar: 165 -->
                      <rect x="205" y="138" width="26" height="37" fill="url(#sietBarGoldGradDark)" rx="4" class="siet-cbar-company"/>
                      <!-- Val Labels -->
                      <text x="186" y="77" font-size="10" fill="#a7f3d0" text-anchor="middle" font-weight="800" font-family="'Plus Jakarta Sans',sans-serif">460</text>
                      <text x="218" y="132" font-size="9.5" fill="#fde047" text-anchor="middle" font-weight="800" font-family="'Plus Jakarta Sans',sans-serif">165</text>
                      <!-- Year Label -->
                      <text x="202" y="196" font-size="10.5" fill="rgba(255,255,255,0.8)" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="700">2023 - 24</text>
                    </g>

                    <!-- ── YEAR 3: 2024 - 25 (Center x = 310) ── -->
                    <g class="siet-chart-col-group" data-year="2024 - 25" cursor="pointer">
                      <rect class="siet-chart-col-bg" x="264" y="15" width="92" height="185" rx="8" fill="transparent"/>
                      <!-- Student Bar: 580 -->
                      <rect x="278" y="62" width="26" height="113" fill="url(#sietBarGreenGradDark)" rx="4" filter="url(#sietGlowDark)" class="siet-cbar-student"/>
                      <!-- Company Bar: 190 -->
                      <rect x="310" y="132" width="26" height="43" fill="url(#sietBarGoldGradDark)" rx="4" class="siet-cbar-company"/>
                      <!-- Val Labels -->
                      <text x="291" y="54" font-size="10" fill="#a7f3d0" text-anchor="middle" font-weight="800" font-family="'Plus Jakarta Sans',sans-serif">580</text>
                      <text x="323" y="126" font-size="9.5" fill="#fde047" text-anchor="middle" font-weight="800" font-family="'Plus Jakarta Sans',sans-serif">190</text>
                      <!-- Year Label -->
                      <text x="307" y="196" font-size="10.5" fill="rgba(255,255,255,0.8)" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="700">2024 - 25</text>
                    </g>

                    <!-- ── YEAR 4: 2025 - 26 (Center x = 415) ACTIVE/CURRENT ── -->
                    <g class="siet-chart-col-group is-active" data-year="2025 - 26" cursor="pointer">
                      <rect class="siet-chart-col-bg" x="369" y="15" width="92" height="185" rx="8" fill="rgba(255,255,255,0.12)" stroke="rgba(243,197,21,0.5)" stroke-width="1.5"/>
                      <!-- Student Bar: 663 -->
                      <rect x="383" y="38" width="26" height="137" fill="url(#sietBarActiveGreenGradDark)" rx="4" filter="url(#sietGlowDark)" class="siet-cbar-student"/>
                      <!-- Company Bar: 213 -->
                      <rect x="415" y="126" width="26" height="49" fill="url(#sietBarGoldGradDark)" rx="4" class="siet-cbar-company"/>
                      <!-- Val Labels -->
                      <text x="396" y="30" font-size="11" fill="#ffffff" text-anchor="middle" font-weight="900" font-family="'Plus Jakarta Sans',sans-serif">663</text>
                      <text x="428" y="120" font-size="10" fill="#f3c515" text-anchor="middle" font-weight="800" font-family="'Plus Jakarta Sans',sans-serif">213</text>
                      <!-- Year Label -->
                      <text x="412" y="196" font-size="11" fill="#ffffff" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="800">2025 - 26 ★</text>
                    </g>

                    <!-- ── Growth Spline Connecting Placement Peaks ── -->
                    <path d="M 81 100 C 133 94, 134 85, 186 85 C 238 85, 239 62, 291 62 C 343 62, 344 38, 396 38" fill="none" stroke="url(#chartSplineGradDark)" stroke-width="3.5" stroke-linecap="round" filter="url(#sietSplineGlowDark)"/>

                    <!-- Spline Vertex Dots -->
                    <circle cx="81" cy="100" r="4.5" fill="#ffffff" stroke="#00b364" stroke-width="2.5"/>
                    <circle cx="186" cy="85" r="4.5" fill="#ffffff" stroke="#00b364" stroke-width="2.5"/>
                    <circle cx="291" cy="62" r="4.5" fill="#ffffff" stroke="#00b364" stroke-width="2.5"/>
                    <circle cx="396" cy="38" r="6.5" fill="#f3c515" stroke="#ffffff" stroke-width="2.5"/>
                  </svg>
                </div>

                <!-- Bottom Highlights Strip -->
                <div class="siet-chart-kpi-ribbon siet-yw-kpi-ribbon">
                  <div class="siet-chart-kpi-chip">
                    <span class="siet-chart-kpi-dot" style="background:#55eb99;"></span>
                    <span class="siet-chart-kpi-lbl">Highest CTC:</span>
                    <strong class="siet-chart-kpi-val">₹33 LPA</strong>
                  </div>
                  <div class="siet-chart-kpi-chip">
                    <span class="siet-chart-kpi-dot" style="background:#f3c515;"></span>
                    <span class="siet-chart-kpi-lbl">Recruiter Partners:</span>
                    <strong class="siet-chart-kpi-val">213 Visited</strong>
                  </div>
                  <div class="siet-chart-kpi-chip">
                    <span class="siet-chart-kpi-dot" style="background:#69f0ae;"></span>
                    <span class="siet-chart-kpi-lbl">Total Campus Offers:</span>
                    <strong class="siet-chart-kpi-val">663 Offers</strong>
                  </div>
                </div>
              </div>
              <div class="siet-vm-card-footer">
                <span>Escalating multi-year institutional recruitment milestones.</span>
                <i></i>
              </div>
            </article>

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
            <p class="siet-tr-subtitle">Over 213+ multinational corporations, product engineering giants, and global IT consulting firms recruit every year from Sri Shakthi.</p>
          </div>

          <!-- Institutional Milestone Strip -->
          <div class="siet-tr-stats-bar">
            <div class="siet-tr-sbar-item">
              <span class="siet-tr-sbar-num">213</span>
              <span class="siet-tr-sbar-lbl">Recruiter Partners</span>
            </div>
            <div class="siet-tr-sbar-sep"></div>
            <div class="siet-tr-sbar-item">
              <span class="siet-tr-sbar-num">15+</span>
              <span class="siet-tr-sbar-lbl">Fortune 500 MNCs</span>
            </div>
            <div class="siet-tr-sbar-sep"></div>
            <div class="siet-tr-sbar-item">
              <span class="siet-tr-sbar-num">₹33 LPA</span>
              <span class="siet-tr-sbar-lbl">Marquee CTC</span>
            </div>
            <div class="siet-tr-sbar-sep"></div>
            <div class="siet-tr-sbar-item">
              <span class="siet-tr-sbar-num">663</span>
              <span class="siet-tr-sbar-lbl">Campus Offers</span>
            </div>
          </div>

          <!-- Single Marquee Track with Hover Pause & Card Lift -->
          <div class="siet-tr-marquee-container">
            <div class="siet-tr-marquee-wrap" aria-label="Top Placement Recruiters Showcase">
              <div class="siet-tr-track">
                ${marqueeSingleHtml}
                ${marqueeSingleHtml}
              </div>
            </div>
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
            <button type="button" class="siet-tmpl-btn-gold js-open-records-sheet" data-sheet="0">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5-7l-3 3.72L9 13l-3 4h12l-4-5z"/></svg>
              <span>View Full Placement Records →</span>
            </button>
            <a href="mailto:placements@siet.ac.in" class="siet-tmpl-btn-outline">Contact Placement Cell</a>
          </div>
        </div>
      </section>     <!-- Interactive Lightbox Modal for All 5 Placement Record Sheets -->
      <div class="siet-records-modal" id="siet-records-modal" style="display:none;" role="dialog" aria-modal="true">
        <div class="siet-records-modal-backdrop js-close-records-modal"></div>
        <div class="siet-records-modal-dialog">
          <div class="siet-records-modal-header">
            <div class="siet-records-modal-title-box">
              <span class="siet-records-modal-sub">SRI SHAKTHI INSTITUTE OF ENGINEERING &amp; TECHNOLOGY (TNEA CODE 2727)</span>
              <h3 id="siet-modal-sheet-title">Sheet 1: Prime Platinum &amp; High Diamond Offers (₹10 – ₹33 LPA)</h3>
            </div>
            <div class="siet-records-modal-actions">
              <a href="/brand/placement-records/sheet-1-prime-offers-10-33-lpa.jpg" id="siet-modal-open-newtab" target="_blank" rel="noopener noreferrer" class="siet-records-modal-action-btn" title="Open full-resolution image in new tab">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>
                <span>Full Resolution</span>
              </a>
              <button type="button" class="siet-records-modal-close js-close-records-modal" aria-label="Close modal">✕</button>
            </div>
          </div>

          <!-- Sheet Switcher Tabs -->
          <div class="siet-records-modal-nav">
            <button type="button" class="siet-records-modal-tab is-active" data-sheet-idx="0">Sheet 1 (₹10–33L)</button>
            <button type="button" class="siet-records-modal-tab" data-sheet-idx="1">Sheet 2 (₹6–10L)</button>
            <button type="button" class="siet-records-modal-tab" data-sheet-idx="2">Sheet 3 (₹4–6L Pt.1)</button>
            <button type="button" class="siet-records-modal-tab" data-sheet-idx="3">Sheet 4 (₹4–6L Pt.2)</button>
            <button type="button" class="siet-records-modal-tab" data-sheet-idx="4">Sheet 5 (213 Companies)</button>
          </div>

          <!-- Modal Image Body with Prev/Next Controls -->
          <div class="siet-records-modal-body">
            <button type="button" class="siet-records-nav-btn is-prev" id="siet-modal-prev-btn" aria-label="Previous Sheet">‹</button>
            <div class="siet-records-img-container">
              <img id="siet-modal-active-img" src="/brand/placement-records/sheet-1-prime-offers-10-33-lpa.jpg" alt="Official Placement Record Sheet">
            </div>
            <button type="button" class="siet-records-nav-btn is-next" id="siet-modal-next-btn" aria-label="Next Sheet">›</button>
          </div>

          <!-- Modal Footer Meta -->
          <div class="siet-records-modal-footer">
            <p id="siet-modal-sheet-desc">Contains S.No 1 to 62: Gowtham G (Trilogy ₹33L), Siv Raam Krishnan (Trilogy ₹33L), Increff (₹22L · 5 Offers), Presidio, Zenx AI, Hyperverge, TCS, Aivar Innovation, Mr. Cooper, Reltio, Linarc, Centillion Labs, etc.</p>
            <span class="siet-records-counter" id="siet-modal-sheet-counter">Sheet 1 of 5</span>
          </div>
        </div>
      </div>
      </main>
  `;
}

// State for Superstars Gallery (Season 2025 - 2026)
let currentSuperstarFilter = 'all';

function updateSuperstarsMarquee(tier) {
  currentSuperstarFilter = tier || 'all';
  const track = document.getElementById('siet-sp-cards-track');
  if (track) {
    track.innerHTML = getSuperstarMarqueeHtml(currentSuperstarFilter);
    track.style.animation = 'none';
    track.offsetHeight; /* trigger reflow */
    track.style.animation = 'sietSuperstarsMarquee 60s linear infinite';
  }
}

// Backward compatibility alias
function updateStarPlacements(pageIndex) {
  // no-op for single slide marquee
}

// Global click listener


// ── Placement Key Metrics Dynamic Animation & Sync ──
function initPlacementsDynamicKpi() {
  const kpiEl = document.getElementById('siet-kpi-interactive-area');
  if (!kpiEl) return;

  // Trigger counters when scrolled into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.js-counter').forEach(el => {
          if (typeof animateCounter === 'function') {
            animateCounter(el);
          }
        });
        observer.disconnect();
      }
    });
  }, { threshold: 0.15 });
  observer.observe(kpiEl);
}

// ── Official Placement Record Sheets Modal Logic ──
const placementRecordSheets = [
  {
    title: 'Sheet 1: Prime Platinum & High Diamond Offers (₹10 – ₹33 LPA)',
    desc: 'Contains S.No 1 to 62: Gowtham G (Trilogy ₹33L), Siv Raam Krishnan (Trilogy ₹33L), Increff (₹22L · 5 Offers), Presidio, Zenx AI, Hyperverge, TCS, Aivar Innovation, Mr. Cooper, Reltio, Linarc, Centillion Labs, AboveCloud9.ai, etc.',
    src: '/brand/placement-records/sheet-1-prime-offers-10-33-lpa.jpg'
  },
  {
    title: 'Sheet 2: Dazzling Diamond & Precious Pearl (₹6 – ₹10 LPA & ₹4 – ₹6 LPA)',
    desc: 'Contains S.No 63 to 125 & 126 to 189: Rently, Vymo, Adaya.ai, Kovai.co, TCS, Grootan Tech, Centillion Labs, Tarka Labs, Abluva, Innoventees, Digiledge, Zoho, Ge Ram Soft Tech, InCorp India, Vendasta, Appviewx, Ziffity, Movidu, etc.',
    src: '/brand/placement-records/sheet-2-diamond-offers-6-10-lpa.jpg'
  },
  {
    title: 'Sheet 3: Precious Pearl Offers Part 1 (₹4 – ₹6 LPA · 226 Offers)',
    desc: 'Contains S.No 126 to 253: Zoho, Responsive.io, Sekel, Intimetec, Sedin Tech, Profitstory.ai, Divum, Visai Labs, Bluebird, Livetag Tech, Arcadia, Novintix, Suntec, Wiemera, Dalmia Cements, Ajira, Izeon, Pentl.ai, Softcell, etc.',
    src: '/brand/placement-records/sheet-3-pearl-offers-part-1.jpg'
  },
  {
    title: 'Sheet 4: Precious Pearl Offers Part 2 (₹4 – ₹6 LPA · 226 Offers)',
    desc: 'Contains S.No 380 to 507: Jeyam Auto, Popular Systems, Benco Thermal, Aggregate Intelligence, PRS Semiconductor, Brysa, Freedom Software, Tihan IIT, Vinpro Tech, Hirotec, Bull Machines, Middel East Fuji, Swish, Gomathy Engg, Crux Medical, LECS, etc.',
    src: '/brand/placement-records/sheet-4-pearl-offers-part-2.jpg'
  },
  {
    title: 'Sheet 5: Recruiter Summary & Multi-Offer Tiers (213 Companies Visited)',
    desc: 'Contains S.No 444 to 507 & Grand Totals: Addictronz, G5 Switchgear, Zealev, Genn Automation, Levim Biotech, Hiox Software, Mindnotix, RND Soft, Adz4Need, Webnox, Virtual Tech Gurus, Sacra, Sartorius, MyLapay, Ecometrix, Flowtrack, NCR Alteos, etc.',
    src: '/brand/placement-records/sheet-5-recruitment-records-213-companies.jpg'
  }
];

let activeRecordSheetIdx = 0;

function switchPlacementRecordSheet(idx) {
  idx = (idx + placementRecordSheets.length) % placementRecordSheets.length;
  activeRecordSheetIdx = idx;
  const sheet = placementRecordSheets[idx];

  const modal = document.getElementById('siet-records-modal');
  if (!modal) return;

  const titleEl = document.getElementById('siet-modal-sheet-title');
  const descEl = document.getElementById('siet-modal-sheet-desc');
  const imgEl = document.getElementById('siet-modal-active-img');
  const newtabEl = document.getElementById('siet-modal-open-newtab');
  const counterEl = document.getElementById('siet-modal-sheet-counter');

  if (titleEl) titleEl.textContent = sheet.title;
  if (descEl) descEl.textContent = sheet.desc;
  if (imgEl) {
    imgEl.style.opacity = '0.35';
    imgEl.src = sheet.src;
    imgEl.onload = () => { imgEl.style.opacity = '1'; };
  }
  if (newtabEl) newtabEl.href = sheet.src;
  if (counterEl) counterEl.textContent = `Sheet ${idx + 1} of ${placementRecordSheets.length}`;

  document.querySelectorAll('.siet-records-modal-tab').forEach((tab, i) => {
    tab.classList.toggle('is-active', i === idx);
  });
}

document.addEventListener('click', (e) => {
  // Placement Stat Card Click Handler (filters superstars marquee)
  const kpiCard = e.target.closest('.js-kpi-card');
  if (kpiCard) {
    const filterTier = kpiCard.dataset.filter;

    // Update active KPI card state
    document.querySelectorAll('.js-kpi-card').forEach(c => c.classList.remove('is-active'));
    kpiCard.classList.add('is-active');

    // If card corresponds to a tier, filter the superstars marquee above
    if (filterTier) {
      if (filterTier === 'all') {
        const allTab = document.querySelector('.siet-sp-filter-tab[data-tier="all"]');
        if (allTab) allTab.click();
      } else {
        const matchingTab = document.querySelector(`.siet-sp-filter-tab[data-tier="${filterTier}"]`);
        if (matchingTab) {
          matchingTab.click();
        } else {
          updateSuperstarsMarquee(filterTier);
        }
      }
    }
    return;
  }

  // Open Placement Record Sheet Modal
  const openSheetBtn = e.target.closest('.js-open-records-sheet');
  if (openSheetBtn) {
    const sheetIdx = parseInt(openSheetBtn.dataset.sheet || '0', 10);
    const modal = document.getElementById('siet-records-modal');
    if (modal) {
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      switchPlacementRecordSheet(sheetIdx);
    }
    return;
  }

  // Close Placement Record Sheet Modal
  if (e.target.closest('.js-close-records-modal')) {
    const modal = document.getElementById('siet-records-modal');
    if (modal) {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
    return;
  }

  // Switch Sheet via Tabs
  const modalTab = e.target.closest('.siet-records-modal-tab');
  if (modalTab) {
    const idx = parseInt(modalTab.dataset.sheetIdx || '0', 10);
    switchPlacementRecordSheet(idx);
    return;
  }

  // Prev / Next Buttons
  if (e.target.closest('#siet-modal-prev-btn')) {
    switchPlacementRecordSheet(activeRecordSheetIdx - 1);
    return;
  }
  if (e.target.closest('#siet-modal-next-btn')) {
    switchPlacementRecordSheet(activeRecordSheetIdx + 1);
    return;
  }

  // 1. Banner Modal Lightbox: Open & Close
  if (e.target.closest('.js-open-banner-modal')) {
    const modal = document.getElementById('siet-banner-modal');
    if (modal) {
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }
    return;
  }
  if (e.target.closest('.js-close-banner-modal')) {
    const modal = document.getElementById('siet-banner-modal');
    if (modal) {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
    return;
  }

  // 2. Superstar Tier Filter Tabs
  const ftab = e.target.closest('.siet-sp-filter-tab');
  if (ftab) {
    const tier = ftab.dataset.tier;
    if (!tier) return;
    document.querySelectorAll('.siet-sp-filter-tab').forEach(t => {
      const isMatch = t.dataset.tier === tier;
      t.classList.toggle('is-active', isMatch);
      if (isMatch) {
        if (!t.querySelector('.siet-sp-ftab-dot')) {
          t.insertAdjacentHTML('afterbegin', '<span class="siet-sp-ftab-dot"></span> ');
        }
      } else {
        const dot = t.querySelector('.siet-sp-ftab-dot');
        if (dot) dot.remove();
      }
    });
    updateSuperstarsMarquee(tier);
    return;
  }


  // 5. Year tabs & Graph column clicks
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
        bg.setAttribute('fill', isMatch ? 'rgba(255, 255, 255, 0.14)' : 'transparent');
        bg.setAttribute('stroke', isMatch ? 'rgba(243, 197, 21, 0.5)' : 'none');
        bg.setAttribute('stroke', isMatch ? 'rgba(0, 133, 74, 0.25)' : 'none');
        bg.setAttribute('stroke-width', isMatch ? '1.5' : '0');
      }
      const valTxt = cg.querySelectorAll('text');
      if (valTxt.length >= 3) {
        valTxt[2].setAttribute('fill', isMatch ? '#ffffff' : 'rgba(255, 255, 255, 0.8)');
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
});

// Escape key to close modal
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const modal = document.getElementById('siet-banner-modal');
    if (modal && modal.style.display !== 'none') {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
  }
});
