import { createAppLayout } from '../components/app-layout';
import { createHomePage } from '../pages/home-page';
import { createAuthModal } from '../components/auth-modal';

export const createApp = (root: HTMLElement): void => {
  const layout = createAppLayout(createHomePage());
  let authModal: HTMLElement | undefined;

  const closeAuthModal = (): void => {
    authModal?.remove();
    authModal = undefined;
    document.body.classList.remove('auth-modal-open');
  };

  document.addEventListener('keydown', (event) => {
    if (authModal && event.key === 'Escape') closeAuthModal();
  });

  const openAuthModal = (mode: 'login' | 'register' = 'login'): void => {
    if (authModal) return;
    authModal = createAuthModal(mode);
    layout.append(authModal);
    document.body.classList.add('auth-modal-open');
    authModal.addEventListener('auth-modal-close', closeAuthModal, { once: true });
  };

  globalThis.addEventListener('open-auth-modal', (event) => {
    const mode = (event as CustomEvent<'login' | 'register'>).detail;
    openAuthModal(mode);
  });

  root.replaceChildren(layout);
};
