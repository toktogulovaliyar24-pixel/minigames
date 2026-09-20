import { createSiteHeader } from './site-header';
import { createSiteFooter } from './site-footer';

export function createAppLayout(content: HTMLElement): HTMLElement {
  const layout = document.createElement('div');
  layout.classList.add('wrapper');

  layout.append(createSiteHeader(), content, createSiteFooter());

  return layout;
}
