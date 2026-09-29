import { vmIcon, AboutSidebar } from './VisionMissionPage.js';

export const programmeOutcomes = [
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

export function programOutcomesPage() {
  return `<main class="siet-vm-page siet-po-page">
    <section class="siet-vm-hero siet-po-hero">
      <div class="siet-vm-hero-grid"></div>
      <div class="siet-vm-hero-orb orb-one"></div>
      <div class="siet-vm-hero-orb orb-two"></div>
      <div class="siet-vm-shell siet-vm-hero-content reveal">
        <p class="siet-vm-kicker"><i></i> OUTCOME-BASED EDUCATION</p>
        <h1>Program <em>Outcomes</em></h1>
        <p class="siet-vm-intro">Building engineering graduates with the knowledge, mindset and responsibility to create meaningful impact.</p>
      </div>
    </section>
    <section class="siet-vm-content">
      <div class="siet-vm-shell siet-vm-layout">
        ${AboutSidebar('program-outcomes')}
        <div class="siet-vm-main">
          <div class="siet-vm-section-intro reveal">
            <p>THE SIET GRADUATE</p>
            <h2>Ready to think.<br><em>Ready to build.</em></h2>
            <span>Our programme outcomes define the capabilities every SIET graduate develops through rigorous learning, real-world practice and a commitment to responsible innovation.</span>
          </div>
          <div class="siet-po-grid">
            ${programmeOutcomes
              .map(
                ([number, title, copy], index) => `
              <article class="siet-po-card reveal">
                <span class="siet-po-index">${String(index + 1).padStart(2, '0')}</span>
                <span class="siet-po-code">${number}</span>
                <span class="siet-po-icon">${vmIcon(index % 3 === 0 ? 'target' : index % 3 === 1 ? 'spark' : 'compass')}</span>
                <h3>${title}</h3>
                <p>${copy}</p>
                <span class="siet-po-line"></span>
              </article>
            `
              )
              .join('')}
          </div>
        </div>
      </div>
    </section>
  </main>`;
}

export const coreValues = [
  ['01', 'Excellence', 'We pursue high standards in learning, research and every contribution we make.', 'target'],
  ['02', 'Integrity', 'We act with honesty, accountability and respect in every decision and relationship.', 'compass'],
  ['03', 'Innovation', 'We nurture curiosity and the courage to turn ideas into meaningful solutions.', 'spark'],
  ['04', 'Inclusivity', 'We create a welcoming community where every learner can contribute and thrive.', 'eye'],
  ['05', 'Collaboration', 'We grow through shared knowledge, multidisciplinary teamwork and industry connection.', 'education'],
  ['06', 'Social responsibility', 'We use engineering knowledge to serve people, society and the planet.', 'target']
];

export function coreValuesPage() {
  return `<main class="siet-vm-page siet-cv-page">
    <section class="siet-vm-hero siet-cv-hero">
      <div class="siet-vm-hero-grid"></div>
      <div class="siet-vm-hero-orb orb-one"></div>
      <div class="siet-vm-hero-orb orb-two"></div>
      <div class="siet-vm-shell siet-vm-hero-content reveal">
        <p class="siet-vm-kicker"><i></i> THE SIET WAY</p>
        <h1>Core <em>Values</em></h1>
        <p class="siet-vm-intro">The shared principles that guide how we learn, lead, innovate and contribute to the world around us.</p>
      </div>
    </section>
    <section class="siet-vm-content">
      <div class="siet-vm-shell siet-vm-layout">
        ${AboutSidebar('core-values')}
        <div class="siet-vm-main">
          <div class="siet-vm-section-intro reveal">
            <p>OUR COMMON COMPASS</p>
            <h2>Values that shape<br><em>every possibility.</em></h2>
            <span>At SIET, technical mastery is strengthened by character. These values create an environment where ambition is grounded in purpose.</span>
          </div>
          <div class="siet-cv-grid">
            ${coreValues
              .map(
                ([number, title, copy, iconName]) => `
              <article class="siet-cv-card reveal">
                <span class="siet-cv-number">${number}</span>
                <span class="siet-cv-icon">${vmIcon(iconName)}</span>
                <h3>${title}</h3>
                <p>${copy}</p>
                <span class="siet-cv-corner"></span>
              </article>
            `
              )
              .join('')}
          </div>
        </div>
      </div>
    </section>
  </main>`;
}

export function philosophyPage() {
  const principles = [
    ['Learn by doing', 'Learning becomes lasting when ideas are tested, made and improved through purposeful practice.', '01'],
    ['Think beyond disciplines', 'The most valuable solutions emerge when engineering connects with people, society and the wider world.', '02'],
    ['Grow with responsibility', 'Knowledge carries purpose. We prepare students to use it ethically, sustainably and for public good.', '03']
  ];
  return `<main class="siet-vm-page siet-ph-page">
    <section class="siet-vm-hero siet-ph-hero">
      <div class="siet-vm-hero-grid"></div>
      <div class="siet-vm-hero-orb orb-one"></div>
      <div class="siet-vm-hero-orb orb-two"></div>
      <div class="siet-vm-shell siet-vm-hero-content reveal">
        <p class="siet-vm-kicker"><i></i> OUR EDUCATIONAL BELIEF</p>
        <h1>Learning with <em>purpose.</em></h1>
        <p class="siet-vm-intro">An education that builds confident thinkers, capable creators and responsible citizens for a changing world.</p>
      </div>
    </section>
    <section class="siet-vm-content">
      <div class="siet-vm-shell siet-vm-layout">
        ${AboutSidebar('philosophy')}
        <div class="siet-vm-main">
          <article class="siet-ph-statement reveal">
            <span class="siet-ph-quote">“</span>
            <p>We believe education should do more than prepare students for a profession. It should inspire them to question, create, collaborate and use their capabilities to make a meaningful difference.</p>
            <span class="siet-ph-mark"><i></i> SRI SHAKTHI PHILOSOPHY</span>
          </article>
          <div class="siet-ph-principles">
            ${principles
              .map(
                ([title, copy, number], index) => `
              <article class="siet-ph-principle reveal">
                <span class="siet-ph-principle-no">${number}</span>
                <span class="siet-ph-principle-icon">${vmIcon(index === 0 ? 'education' : index === 1 ? 'spark' : 'compass')}</span>
                <div>
                  <h3>${title}</h3>
                  <p>${copy}</p>
                </div>
              </article>
            `
              )
              .join('')}
          </div>
          <div class="siet-ph-closing reveal">
            <div>
              <p>OUR PROMISE</p>
              <h2>Knowledge in action.<br><em>Character in leadership.</em></h2>
            </div>
            <span>Every SIET experience is designed to turn potential into a positive force for the future.</span>
          </div>
        </div>
      </div>
    </section>
  </main>`;
}
