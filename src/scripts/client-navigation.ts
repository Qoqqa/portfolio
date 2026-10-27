const welcomeScreen = document.querySelector<HTMLElement>('#welcome-screen');
const continueButton = document.querySelector<HTMLButtonElement>('#continue-button');
const playTrigger = document.querySelector<HTMLButtonElement>('#play-trigger');
const pageLinks = document.querySelectorAll<HTMLAnchorElement>('[data-page]');
const panels = document.querySelectorAll<HTMLElement>('[data-panel]');

pageLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const page = link.dataset.page;
    if (!page) return;

    pageLinks.forEach((item) => {
      const isActive = item.dataset.page === page;
      item.classList.toggle('active', isActive);
      if (isActive) item.setAttribute('aria-current', 'page');
      else item.removeAttribute('aria-current');
    });

    panels.forEach((panel) => {
      panel.toggleAttribute('hidden', panel.dataset.panel !== page);
    });
  });
});

playTrigger?.addEventListener('click', () => {
  welcomeScreen?.removeAttribute('hidden');
  window.requestAnimationFrame(() => welcomeScreen?.classList.remove('is-dismissed'));
});

continueButton?.addEventListener('click', () => {
  welcomeScreen?.classList.add('is-dismissed');
  window.setTimeout(() => {
    welcomeScreen?.setAttribute('hidden', '');
  }, 850);
});
