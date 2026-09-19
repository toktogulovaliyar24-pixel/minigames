import { renderGamesPage } from '../pages/games';
import { renderHomePage } from '../pages/home';
import { renderNotFoundPage } from '../pages/not-found';

export type Route = {
  path: string;
  render: () => string;
};

export const routes: Route[] = [
  {
    path: '/',
    render: renderHomePage,
  },
  {
    path: '/games',
    render: renderGamesPage,
  },
];

export const navigate = (path: string): void => {
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
};

export const getCurrentPath = (): string => window.location.pathname;

export const getRoute = (): Route => {
  return (
    routes.find((route) => route.path === getCurrentPath()) ?? {
      path: '*',
      render: renderNotFoundPage,
    }
  );
};
