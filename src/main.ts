import './styles/main.scss';

import { createApp } from './app/app';

const root = document.querySelector<HTMLElement>('#app');

if (!root) {
  throw new Error('App root element not found');
}

createApp(root);
