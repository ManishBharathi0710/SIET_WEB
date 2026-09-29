import { HeroSection } from '../sections/home/HeroSection.js';
import { placementMarqueeSection } from '../sections/placements/PlacementMarqueeSection.js';
import { AboutSection } from '../sections/home/AboutSection.js';
import { ProgrammesSection } from '../sections/home/ProgrammesSection.js';
import { CampusLifeSection } from '../sections/home/CampusLifeSection.js';
import { SpecialLabsSection } from '../sections/home/SpecialLabsSection.js';
import { EventsSection } from '../sections/home/EventsSection.js';
import './home/Home.css';

export function HomePage() {
  return `<main class="home-page">
    ${HeroSection()}
    ${placementMarqueeSection()}
    ${AboutSection()}
    ${ProgrammesSection()}
    ${CampusLifeSection()}
    ${SpecialLabsSection()}
    ${EventsSection()}
  </main>`;
}
