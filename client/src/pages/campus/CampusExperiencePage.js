import { icon } from '../../utils/icons.js';
import { slugify } from '../../utils/domUtils.js';
import './Campus.css';

export function campusExperiencePage(route, meta, title) {
  const pills = (meta.heroPills || []).map(p => `<span>${icon(p.icon || 'star')} ${p.label}</span>`).join('');
  const metrics = (meta.metrics || []).map(m => `<div><b>${m.val}<sup>${m.suffix}</sup></b><small>${m.label}</small></div>`).join('');
  const features = (meta.pillars || []).map((p, i) => {
    const card = `<article>${p.image ? `<img class="ce-club-entry-image" src="${p.image}" alt="${p.title}" loading="lazy" onerror="this.style.display='none'">` : ''}<span class="ce-icon">${icon(p.icon || 'star')}</span><em>0${i + 1} · ${p.tag}</em><h3>${p.title}</h3><p>${p.desc}</p>${route === 'clubs' ? '<span class="ce-club-card-action">View club details <b>-&gt;</b></span>' : ''}</article>`;
    return route === 'clubs' ? `<a class="ce-club-card-link" href="#/club/${slugify(p.title)}">${card}</a>` : card;
  }).join('');
  const gallery = (meta.gallery || []).map((g, i) => `<figure><img src="${g.img}" alt="${g.title}" loading="lazy" onerror="this.src='/brand/campus-arch.jpg'"><figcaption><b>0${i + 1} / ${g.title}</b><span>${g.caption}</span></figcaption></figure>`).join('');
  const highlights = (meta.highlights || []).map((h, i) => `<li><span>0${i + 1}</span><div><b>${h.title}</b><p>${h.desc}</p></div></li>`).join('');
  const faqs = (meta.faqs || []).map((f, i) => `<details ${i === 0 ? 'open' : ''}><summary>${f.q}</summary><p>${f.a}</p></details>`).join('');
  const action = '';

  if (route === 'campus-life') return `<section class="campus-experience campus-life-editorial">
    <section class="ce-campus-hero">
      <div class="ce-campus-hero-copy">
        <span class="ce-kicker">01 / CAMPUS CHRONICLE</span>
        <h2>${meta.title}</h2>
        <p class="ce-lead">${meta.subtitle}</p>
        <p>${meta.overviewLead}</p>
        <div class="ce-chip-row">${pills}</div>
      </div>
      <div class="ce-campus-hero-panel">
        <div class="ce-campus-number">${meta.featuredStat}</div>
        <div class="ce-campus-tag">${meta.featuredBadge}</div>
        <p>From first-year lectures to final-year projects, every day on campus is shaped by ideas, friendships, and purpose.</p>
      </div>
    </section>

    <section class="ce-campus-story">
      <div class="ce-campus-intro">
        <span>THE RHYTHM OF CAMPUS</span>
        <h3>Every day has a different story.</h3>
      </div>
      <div class="ce-campus-columns">${features}</div>
    </section>

    <section class="ce-campus-visuals">
      ${(meta.gallery || []).slice(0, 3).map((g, i) => `
        <figure class="ce-campus-visual-card ${i === 1 ? 'is-featured' : ''}">
          <img src="${g.img}" alt="${g.title}" loading="lazy" onerror="this.src='/brand/campus-arch.jpg'">
          <figcaption>
            <span>${i + 1} / ${g.title}</span>
            <small>${g.caption}</small>
          </figcaption>
        </figure>
      `).join('')}
    </section>

    <section class="ce-campus-editorial">
      <div class="ce-campus-quote">
        <span>WHY STUDENTS STAY ENGAGED</span>
        <blockquote>“A student’s time at SIET is not only about classes; it is about finding a voice, a team, and a direction.”</blockquote>
      </div>
      <div class="ce-campus-list">
        <h3>Campus life in brief</h3>
        <ul>${(meta.highlights || []).slice(0, 4).map(h => `<li><strong>${h.title}</strong><p>${h.desc}</p></li>`).join('')}</ul>
      </div>
    </section>

    <section class="ce-campus-faq">
      <div class="ce-campus-metrics">${metrics}</div>
      <div class="ce-accordion"><span>QUICK QUESTIONS</span>${faqs}</div>
    </section>

  </section>`;

  if (route === 'facilities') return `<section class="campus-experience facilities-architecture">
    <section class="ce-atlas-hero">
      <div class="ce-atlas-index"><span>02</span><i></i><small>FACILITIES<br>ATLAS</small></div>
      <div class="ce-atlas-title"><span class="ce-kicker">RESEARCH / MAKING / MOMENTUM</span><h2>${meta.title}</h2><p>${meta.subtitle}</p></div>
      <div class="ce-atlas-hero-note"><strong>${meta.featuredStat}</strong><span>${meta.featuredBadge}</span><p>${meta.overviewLead}</p></div>
    </section>

    <section class="ce-atlas-capabilities">
      <div class="ce-atlas-section-label"><span>01</span><b>CAPABILITY MAP</b></div>
      <div><h3>Spaces that turn questions into working things.</h3><div class="ce-atlas-capability-grid">${features}</div></div>
    </section>

    <section class="ce-atlas-gallery">
      <div class="ce-atlas-gallery-heading"><span>02 / INSIDE THE SYSTEM</span><h3>See where ideas get their first physical shape.</h3></div>
      <div class="ce-atlas-image-grid">${(meta.gallery || []).slice(0, 4).map((g, i) => `<figure class="is-${i + 1}"><img src="${g.img}" alt="${g.title}" loading="lazy" onerror="this.src='/brand/campus-arch.jpg'"><figcaption><b>0${i + 1}</b><strong>${g.title}</strong><small>${g.caption}</small></figcaption></figure>`).join('')}</div>
    </section>

    <section class="ce-atlas-ledger">
      <div class="ce-atlas-ledger-intro"><span>03 / INFRASTRUCTURE LEDGER</span><h3>Built for the next attempt.</h3><p>Every facility is part of a larger learning loop: explore, test, collaborate, improve, and try again.</p></div>
      <div class="ce-atlas-ledger-data"><div class="ce-atlas-stat-grid">${metrics}</div><ol>${(meta.highlights || []).slice(0, 4).map((h, i) => `<li><span>0${i + 1}</span><div><strong>${h.title}</strong><p>${h.desc}</p></div></li>`).join('')}</ol></div>
    </section>

    <section class="ce-atlas-faq"><div class="ce-accordion"><span>ACCESS &amp; SUPPORT</span>${faqs}</div></section>

  </section>`;

  if (route === 'hostel') return `<section class="campus-experience hostel-residence">
    <section class="ce-residence-journal-hero">
      <div class="ce-journal-date"><span>03</span><small>RESIDENT<br>JOURNAL</small></div>
      <div class="ce-journal-title"><span class="ce-kicker">HOME / STUDY / BELONG</span><h2>${meta.title}</h2><p>${meta.subtitle}</p></div>
      <div class="ce-journal-photo"><img src="${meta.featuredImage}" alt="${title}" loading="lazy" onerror="this.src='/brand/campus-arch.jpg'"><div><strong>${meta.featuredStat}</strong><span>${meta.featuredBadge}</span></div></div>
    </section>

    <section class="ce-residence-rhythm">
      <div class="ce-rhythm-intro"><span>04:30 PM / THE DAILY RHYTHM</span><h3>A good day has room for everything.</h3><p>${meta.overviewLead}</p><div class="ce-chip-row">${pills}</div></div>
      <div class="ce-rhythm-line"><div><b>01</b><strong>Arrive &amp; reset</strong><p>Return to a calm, cared-for space after the academic day.</p></div><div><b>02</b><strong>Study &amp; focus</strong><p>Find quiet corners, resident lounges, and dependable routines.</p></div><div><b>03</b><strong>Eat &amp; connect</strong><p>Share meals, conversations, celebrations, and small wins.</p></div></div>
    </section>

    <section class="ce-residence-essentials-wall">
      <div class="ce-essentials-heading"><span>01 / RESIDENCE ESSENTIALS</span><h3>Designed around the everyday.</h3></div>
      <div class="ce-essentials-grid">${features}</div>
    </section>

    <section class="ce-residence-ledger">
      <div class="ce-residence-ledger-photo"><img src="${(meta.gallery || [])[0]?.img || meta.featuredImage}" alt="Residence life" loading="lazy" onerror="this.src='/brand/campus-arch.jpg'"><span>${(meta.gallery || [])[0]?.title || meta.featuredBadge}</span></div>
      <div class="ce-residence-ledger-copy"><span>02 / RESIDENT GUIDE</span><h3>The details that make a place feel like home.</h3><ol>${(meta.highlights || []).slice(0, 4).map((h, i) => `<li><b>0${i + 1}</b><div><strong>${h.title}</strong><p>${h.desc}</p></div></li>`).join('')}</ol></div>
      <div class="ce-residence-ledger-stats">${metrics}</div>
    </section>

    <section class="ce-residence-faq"><div class="ce-accordion"><span>HOSTEL GUIDE</span>${faqs}</div></section>
  </section>`;

  if (route === 'transport') return `<section class="campus-experience transport-network">
    <section class="ce-network-hero">
      <div class="ce-network-hero-copy">
        <span class="ce-kicker">04 / MOBILITY NETWORK</span>
        <h2>${meta.title}</h2>
        <p class="ce-lead">${meta.subtitle}</p>
        <p>${meta.overviewLead}</p>
        <div class="ce-chip-row">${pills}</div>
        ${action}
      </div>
      <div class="ce-network-map">
        <div class="ce-map-label"><span>LIVE NETWORK</span><strong>ALL ROUTES ACTIVE</strong></div>
        <div class="ce-map-lines" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div>
        <img src="${meta.featuredImage}" alt="${title}" loading="lazy" onerror="this.src='/brand/campus-life/transport-fleet.jpg'">
        <div class="ce-network-badge"><strong>${meta.featuredStat}</strong><span>${meta.featuredBadge}</span></div>
      </div>
    </section>

    <section class="ce-network-snapshot">
      <div class="ce-network-snapshot-heading"><span>AT A GLANCE</span><h3>Every journey starts with a clear plan.</h3></div>
      <div class="ce-network-metrics">${metrics}</div>
    </section>

    <section class="ce-network-services">
      <div class="ce-network-services-intro"><span>THE SERVICE STANDARD</span><h3>Reliable movement, thoughtfully managed.</h3><p>From the first pickup to the final arrival, our transport system is designed to make the daily commute calm, visible, and dependable.</p></div>
      <div class="ce-network-feature-list">${features}</div>
    </section>

    <section class="ce-network-routebook">
      <div class="ce-network-routebook-head"><span>ROUTEBOOK / FIELD NOTES</span><h3>Coverage that keeps the campus connected.</h3></div>
      <div class="ce-network-routebook-grid">
        <ol>${(meta.highlights || []).slice(0, 4).map(h => `<li><strong>${h.title}</strong><p>${h.desc}</p></li>`).join('')}</ol>
        <div class="ce-network-gallery">${(meta.gallery || []).slice(0, 2).map(g => `<figure><img src="${g.img}" alt="${g.title}" loading="lazy" onerror="this.src='/brand/campus-life/transport-fleet.jpg'"><figcaption><strong>${g.title}</strong><small>${g.caption}</small></figcaption></figure>`).join('')}</div>
      </div>
    </section>

    <section class="ce-network-faq"><div class="ce-accordion"><span>ROUTE DESK</span>${faqs}</div></section>
  </section>`;

  if (route === 'sports') return `<section class="campus-experience sports-performance">
    <section class="ce-performance-hero">
      <div class="ce-performance-hero-copy">
        <span class="ce-kicker">05 / PERFORMANCE JOURNAL</span>
        <h2>${meta.title}</h2>
        <p class="ce-lead">${meta.subtitle}</p>
        <p>${meta.overviewLead}</p>
        <div class="ce-chip-row">${pills}</div>
        ${action}
      </div>
      <div class="ce-performance-poster">
        <img src="${meta.featuredImage}" alt="${title}" loading="lazy" onerror="this.src='/brand/campus-life/student-life.png'">
        <div class="ce-performance-poster-label"><span>FIELD NOTE 05</span><strong>TRAIN<br>TOGETHER</strong></div>
      </div>
    </section>

    <section class="ce-performance-dashboard">
      <div class="ce-performance-dashboard-title"><span>ATHLETE PROFILE</span><h3>Discipline becomes a shared language.</h3></div>
      <div class="ce-performance-metrics">${metrics}</div>
    </section>

    <section class="ce-performance-disciplines">
      <div class="ce-performance-disciplines-intro"><span>THE TRAINING ROOM</span><h3>Build strength, confidence, and team instinct.</h3><p>Sport at SIET is a daily practice of focus and belonging. Every discipline creates room for students to challenge themselves, support one another, and discover what they can do under pressure.</p></div>
      <div class="ce-performance-feature-list">${features}</div>
    </section>

    <section class="ce-performance-season">
      <div class="ce-performance-season-head"><span>SEASON LOG / CAMPUS ADVANTAGES</span><h3>Progress is measured beyond the final score.</h3></div>
      <div class="ce-performance-season-grid">
        <ol>${(meta.highlights || []).slice(0, 4).map(h => `<li><strong>${h.title}</strong><p>${h.desc}</p></li>`).join('')}</ol>
        <div class="ce-performance-gallery">${(meta.gallery || []).slice(0, 2).map(g => `<figure><img src="${g.img}" alt="${g.title}" loading="lazy" onerror="this.src='/brand/campus-life/student-life.png'"><figcaption><strong>${g.title}</strong><small>${g.caption}</small></figcaption></figure>`).join('')}</div>
      </div>
    </section>

    <section class="ce-performance-faq"><div class="ce-accordion"><span>ATHLETE DESK</span>${faqs}</div></section>
  </section>`;

  if (route === 'clubs') return `<section class="campus-experience clubs-directory">
    <section class="ce-clubs-hero"><div class="ce-clubs-hero-copy"><span class="ce-kicker">06 / STUDENT COLLECTIVE</span><h2>${meta.title}</h2><p class="ce-lead">${meta.subtitle}</p><p>${meta.overviewLead}</p><div class="ce-chip-row">${pills}</div>${action}</div><div class="ce-clubs-index-card"><span>OPEN MEMBERSHIP INDEX</span><strong>Find<br>your<br>people.</strong><small>${meta.featuredBadge}</small></div></section>
    <section class="ce-clubs-pulse"><div class="ce-clubs-pulse-heading"><span>THE COLLECTIVE PULSE</span><h3>Many interests. One campus rhythm.</h3></div><div class="ce-clubs-metrics">${metrics}</div></section>
    <section class="ce-clubs-catalogue"><div class="ce-clubs-catalogue-intro"><span>THE CLUB DIRECTORY</span><h3>Choose a direction. Then make it yours.</h3><p>Clubs turn curiosity into practice. Join an existing community, build a new one, or find a team that gives your ideas somewhere to go.</p></div><div class="ce-clubs-list">${features}</div></section>
    <section class="ce-clubs-community"><div class="ce-clubs-community-copy"><span>MEMBERSHIP NOTES</span><h3>Participation is part of the education.</h3><p>From stagecraft and music to technology, service, and debate, every club offers a different way to lead, collaborate, and be seen.</p><ol>${(meta.highlights || []).slice(0, 4).map(h => `<li><strong>${h.title}</strong><p>${h.desc}</p></li>`).join('')}</ol></div><div class="ce-clubs-community-visual"><img src="${meta.featuredImage}" alt="${title}" loading="lazy" onerror="this.src='/brand/campus-life/student-life.png'"><div><strong>YOUR NEXT CIRCLE</strong><span>${meta.featuredStat}</span></div></div></section>
    <section class="ce-clubs-faq"><div class="ce-accordion"><span>CLUB DESK</span>${faqs}</div></section>
  </section>`;

  return `<section class="campus-experience service-command">
    <section class="ce-command-hero">
      <div class="ce-command-hero-copy">
        <span class="ce-kicker">07 / LEADERSHIP &amp; SERVICE</span>
        <h2>${meta.title}</h2>
        <p class="ce-lead">${meta.subtitle}</p>
        <p>${meta.overviewLead}</p>
        <div class="ce-chip-row">${pills}</div>
        ${action}
      </div>
      <div class="ce-command-panel">
        <div class="ce-command-panel-top"><span>FIELD BRIEF / 07</span><b>READY TO SERVE</b></div>
        <img src="${meta.featuredImage}" alt="${title}" loading="lazy" onerror="this.src='/brand/campus-arch.jpg'">
        <div class="ce-command-panel-bottom"><strong>${meta.featuredStat}</strong><span>${meta.featuredBadge}</span></div>
      </div>
    </section>

    <section class="ce-command-readout">
      <div class="ce-command-readout-title"><span>UNIT READOUT</span><h3>Character is built through responsibility.</h3></div>
      <div class="ce-command-metrics">${metrics}</div>
    </section>

    <section class="ce-command-programs">
      <div class="ce-command-programs-intro"><span>THE PROGRAMS</span><h3>Learn to lead when it matters.</h3><p>NCC and NSS create practical spaces for discipline, teamwork, civic responsibility, and service. The work is active, shared, and rooted in the communities around us.</p></div>
      <div class="ce-command-track-list">${features}</div>
    </section>

    <section class="ce-command-impact">
      <div class="ce-command-impact-head"><span>IMPACT LOG / FIELD NOTES</span><h3>Service turns intention into action.</h3></div>
      <div class="ce-command-impact-grid">
        <ol>${(meta.highlights || []).slice(0, 4).map(h => `<li><strong>${h.title}</strong><p>${h.desc}</p></li>`).join('')}</ol>
        <div class="ce-command-gallery">${(meta.gallery || []).slice(0, 2).map(g => `<figure><img src="${g.img}" alt="${g.title}" loading="lazy" onerror="this.src='/brand/campus-arch.jpg'"><figcaption><strong>${g.title}</strong><small>${g.caption}</small></figcaption></figure>`).join('')}</div>
      </div>
    </section>

    <section class="ce-command-faq"><div class="ce-accordion"><span>CADET &amp; VOLUNTEER DESK</span>${faqs}</div></section>
  </section>`;
}
