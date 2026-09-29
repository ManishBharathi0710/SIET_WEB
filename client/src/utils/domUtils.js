export const $ = (selector, root = document) => root?.querySelector?.(selector) || null;

export const $$ = (selector, root = document) => root?.querySelectorAll ? [...root.querySelectorAll(selector)] : [];

export const titleCase = (s) => (s ? s.replace(/\b\w/g, (c) => c.toUpperCase()) : '');

export const slugify = (s) =>
  s ? s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') : '';

export const counter = (to, suffix = '') =>
  `<span class="js-counter" data-to="${to}" data-suffix="${suffix}">0${suffix}</span>`;

export function animateCounter(el) {
  const to = Number(el.dataset.to);
  const suffix = el.dataset.suffix || '';
  const start = performance.now();
  const duration = 1500;

  function tick(now) {
    const p = Math.min((now - start) / duration, 1);
    const v = Math.round(to * (1 - (1 - p) ** 3));
    el.textContent = v.toLocaleString('en-IN') + suffix;
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

export function observe() {
  const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        if (entry.target.classList.contains('js-counter')) animateCounter(entry.target);
        observer.unobserve(entry.target);
      }),
    { threshold: 0.18 }
  );

  $$('.reveal,.js-counter').forEach((el) => {
    if (reduce) {
      el.classList.add('is-visible');
      if (el.classList.contains('js-counter')) animateCounter(el);
    } else {
      observer.observe(el);
    }
  });
}
