import '../styles/components/developer-cta.scss';

export function createDeveloperCta(): HTMLElement {
  const cta = document.createElement('section');

  cta.classList.add('cta-section');

  cta.innerHTML = `
    <div class="container">
      <div class="cta-illustration">
        <img src="/illustration-side.png" alt="Illustration of a developer desk" />
      </div>

      <div class="cta-card">
        <h2 class="cta-title">Are You a Game Developer?</h2>
        <p class="cta-description">Want to see your game on MiniGames? We're always looking for fun,
        engaging mini games to add to our platform. Submit your game
        and reach thousands of players!</p>
        <button class="cta-button">
        <span class="cta-button-icon">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M12 16V4M12 4L7 9M12 4L17 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M4 16V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  </svg>
        </span>
        <span class="cta-button-text">
          Submit Form
        </span>
        </button>
        <p class="cta-contact">or contact us at developers@minigames.com</p>
      </div>
    
    </div>
  `;

  return cta;
}
