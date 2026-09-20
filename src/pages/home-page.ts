import { createHeroSection } from '../components/hero-section';
import { createGamesSlider } from '../components/games-slider';
import { createLeaderboardTable } from '../components/leaderboard-table';
import { createDeveloperCta } from '../components/developer-cta';

export function createHomePage(): HTMLElement {
  const homePage = document.createElement('main');

  homePage.append(
    createHeroSection(),
    createGamesSlider(),
    createLeaderboardTable(),
    createDeveloperCta(),
  );

  return homePage;
}
