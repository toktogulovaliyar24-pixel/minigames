import '../styles/components/hero-section.scss';

export function createHeroSection(): HTMLElement {
  const hero = document.createElement('section');

  hero.classList.add('hero-section');

  hero.innerHTML = `
    <div class="container">
      <div class="hero-card">
        <h1 class="hero-title">Take a Short Break & Have Fun</h1>
        <p class="hero-text">
          <span class="hero-text-full">
            Discover hundreds of curated casual mini-games. Play instantly in your browser — puzzle, match 3, farm, and board classics.
          </span>
          <span class="hero-text-short">
            Discover hundreds of curated casual mini-games right in your browser.
          </span>
        </p>
        <button class="hero-button">Browse Library</button>
      </div>
    </div>
  `;

  return hero;
}
