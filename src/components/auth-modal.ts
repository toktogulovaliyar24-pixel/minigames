import '../styles/components/auth-modal.scss';
import { createLoginForm } from './login-form';
import { createRegisterForm } from './register-form';

export function createAuthModal(initialMode: 'login' | 'register' = 'login'): HTMLElement {
  const modal = document.createElement('div');
  modal.classList.add('auth-modal');

  modal.innerHTML = `
    <section class="auth-dialog" role="dialog" aria-modal="true" aria-labelledby="auth-title">
      <div class="auth-tabs" role="tablist" aria-label="Account access">
        <button class="auth-tabs__tab auth-tabs__tab--active" type="button" role="tab" aria-selected="true" data-auth-tab="login">Login</button>
        <button class="auth-tabs__tab" type="button" role="tab" aria-selected="false" data-auth-tab="register">Register</button>
      </div>

      <div class="auth-dialog__header">
        <h1 id="auth-title" data-auth-title>Welcome Back!</h1>
        <p data-auth-copy>Sign in to resume your games and progress.</p>
      </div>

      <div class="auth-form-slot"></div>

      <p class="auth-dialog__footer">
        <span data-footer-copy>Don't have an account?</span>
        <button type="button" data-footer-action>Register</button>
      </p>
    </section>
  `;

  const tabs = [...modal.querySelectorAll<HTMLButtonElement>('[data-auth-tab]')];
  const title = modal.querySelector<HTMLElement>('[data-auth-title]');
  const copy = modal.querySelector<HTMLElement>('[data-auth-copy]');
  const formSlot = modal.querySelector<HTMLElement>('.auth-form-slot');
  const footerCopy = modal.querySelector<HTMLElement>('[data-footer-copy]');
  const footerAction = modal.querySelector<HTMLButtonElement>('[data-footer-action]');

  const setMode = (mode: 'login' | 'register'): void => {
    const isLogin = mode === 'login';
    for (const tab of tabs) {
      const isActive = tab.dataset.authTab === mode;
      tab.classList.toggle('auth-tabs__tab--active', isActive);
      tab.setAttribute('aria-selected', String(isActive));
    }
    if (title) title.textContent = isLogin ? 'Welcome Back!' : 'Create Your Account';
    if (copy)
      copy.textContent = isLogin
        ? 'Sign in to resume your games and progress.'
        : 'Create an account to save your games and progress.';
    formSlot?.replaceChildren(isLogin ? createLoginForm() : createRegisterForm());
    if (footerCopy)
      footerCopy.textContent = isLogin ? "Don't have an account?" : 'Already have an account?';
    if (footerAction) footerAction.textContent = isLogin ? 'Register' : 'Login';
  };

  for (const tab of tabs) {
    tab.addEventListener('click', () => setMode(tab.dataset.authTab as 'login' | 'register'));
  }

  footerAction?.addEventListener('click', () =>
    setMode(footerAction.textContent === 'Register' ? 'register' : 'login'),
  );

  modal.addEventListener('click', (event) => {
    if (event.target === modal) modal.dispatchEvent(new Event('auth-modal-close'));
  });

  modal.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') modal.dispatchEvent(new Event('auth-modal-close'));
  });

  setMode(initialMode);

  return modal;
}
