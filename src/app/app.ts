import { renderHeader, setupNavigation } from '../components/header';
import { getRoute } from '../router/router';

export const createApp = (root: HTMLElement): void => {
  const render = (): void => {
    const route = getRoute();

    root.innerHTML = `
      ${renderHeader()}
      ${route.render()}
    `;
  };

  window.addEventListener('popstate', render);

  setupNavigation();
  render();
};
