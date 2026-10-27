/* XPEN Studio / responsive, keyboard-first website navigation.
   Workspace command search and journals remain handled by workspace.js. */
(() => {
  const toggle = document.getElementById('studio-menu-toggle');
  const navigation = document.getElementById('studio-navigation');
  if (!toggle || !navigation) return;
  const mobile = window.matchMedia('(max-width:760px)');
  const links = [...navigation.querySelectorAll('a[href]')];
  const isOpen = () => mobile.matches && toggle.getAttribute('aria-expanded') === 'true';
  let beforeOpen = null;

  function closeMenu(restore = false) {
    if (!isOpen()) return;
    navigation.classList.remove('open');
    toggle.setAttribute('aria-expanded','false');
    toggle.setAttribute('aria-label','Open menu');
    document.body.classList.remove('studio-menu-open');
    if (restore) (beforeOpen && beforeOpen.isConnected ? beforeOpen : toggle).focus();
  }

  toggle.addEventListener('click', () => {
    if (isOpen()) {closeMenu(true);return;}
    beforeOpen = document.activeElement;
    navigation.classList.add('open');
    toggle.setAttribute('aria-expanded','true');
    toggle.setAttribute('aria-label','Close menu');
    document.body.classList.add('studio-menu-open');
    links[0]?.focus();
  });
  links.forEach(link => link.addEventListener('click',() => closeMenu()));
  document.addEventListener('keydown', event => {
    if (!isOpen()) return;
    if (event.key === 'Escape') {event.preventDefault();closeMenu(true);return;}
    if (event.key !== 'Tab' || !links.length) return;
    const last = links[links.length-1];
    const first = links[0];
    if (event.shiftKey && document.activeElement === first) {event.preventDefault();toggle.focus();}
    else if (!event.shiftKey && document.activeElement === toggle) {event.preventDefault();first.focus();}
    else if (!event.shiftKey && document.activeElement === last) {event.preventDefault();toggle.focus();}
    else if (event.shiftKey && document.activeElement === toggle) {event.preventDefault();last.focus();}
  });
  document.addEventListener('pointerdown',event => {
    if (isOpen() && !navigation.contains(event.target) && !toggle.contains(event.target))closeMenu();
  });
  mobile.addEventListener('change',() => closeMenu());
})();
