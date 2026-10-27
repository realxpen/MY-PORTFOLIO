/* Shared mobile menu keyboard behavior.
   Enhances existing menu controllers; deliberately does not replace their click/navigation logic. */
(() => {
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('primary-nav');
  if (!toggle || !menu) return;

  const isOpen = () => window.innerWidth <= 720 && toggle.getAttribute('aria-expanded') === 'true';
  const menuLinks = () => [...menu.querySelectorAll('a[href]')].filter(link => getComputedStyle(link).display !== 'none');

  const closeAndRestore = () => {
    menu.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
    document.body.classList.remove('menu-open');
    toggle.focus();
  };

  const observer = new MutationObserver(() => {
    if (isOpen()) menuLinks()[0]?.focus();
  });
  observer.observe(toggle, { attributes:true, attributeFilter:['aria-expanded'] });

  document.addEventListener('keydown', event => {
    if (!isOpen()) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      closeAndRestore();
      return;
    }
    if (event.key !== 'Tab') return;

    const links = menuLinks();
    if (!links.length) return;
    const first = links[0];
    const last = links[links.length - 1];
    if (event.shiftKey && (document.activeElement === first || !menu.contains(document.activeElement))) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && (document.activeElement === last || !menu.contains(document.activeElement))) {
      event.preventDefault();
      first.focus();
    }
  }, true);
})();