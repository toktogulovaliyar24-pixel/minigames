import { navigate } from '../router/router';

export const renderHeader = (): string => `
  <header>
    <nav class="container">
      <a href="/" data-link>Home</a>
      <a href="/games" data-link>Games</a>
    </nav>
  </header>
`;

export const setupNavigation = (): void => {
  document.addEventListener('click', (event) => {
    const target = event.target;

    if (!(target instanceof HTMLAnchorElement)) {
      return;
    }

    const href = target.getAttribute('href');

    if (!href || !href.startsWith('/')) {
      return;
    }

    event.preventDefault();
    navigate(href);
  });
};
