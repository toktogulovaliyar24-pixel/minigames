import './styles/main.scss';
import { createApp } from './app/app';

function createRoot(): HTMLElement {
  const root = document.createElement('div');
  root.id = 'app';
  document.body.append(root);
  return root;
}

const root = createRoot();
createApp(root);
