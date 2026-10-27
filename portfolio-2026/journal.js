// Journal search, accessible category filters and shareable deep links.
// The content remains accessible without JavaScript.
(() => {
  const entries = [...document.querySelectorAll('.journal-entry')];
  const buttons = [...document.querySelectorAll('.journal-filter-btn')];
  const search = document.getElementById('journal-search');
  const empty = document.getElementById('journal-no-results');
  const status = document.getElementById('journal-status');
  const progress = document.getElementById('reading-progress');
  const header = document.querySelector('.journal-header');
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
  let selected = 'all';
  function update() {
    const query = search.value.trim().toLowerCase();
    let count = 0;
    entries.forEach(entry => {
      const match = (selected === 'all' || entry.dataset.topic === selected) &&
        (!query || entry.dataset.search.includes(query));
      entry.hidden = !match;
      if (match) count += 1;
    });
    buttons.forEach(button => {
      const active = button.dataset.topic === selected;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    empty.hidden = count !== 0;
    status.textContent = count === 1 ? 'Showing 1 note' : 'Showing ' + count + ' notes';
  }
  buttons.forEach(button => button.addEventListener('click', () => {
    selected = button.dataset.topic; update();
  }));
  search.addEventListener('input', update);
  document.getElementById('journal-clear').addEventListener('click', () => {
    selected='all';search.value='';update();search.focus();
  });
  function openLinkedNote() {
    let id;
    try { id = decodeURIComponent(location.hash.slice(1)); } catch { return; }
    const target = document.getElementById(id);
    if (target?.matches('.journal-entry')) {
      selected='all';search.value='';update();
      target.open = true;
      // The desktop workspace shows the entry in a dedicated reading pane.
      // Only scroll an opened accordion into view on the mobile layout.
      if (!document.body.classList.contains('os-experience') || matchMedia('(max-width:900px)').matches) {
        requestAnimationFrame(() => target.scrollIntoView({block:'start'}));
      }
    }
  }
  addEventListener('hashchange', openLinkedNote);
  openLinkedNote();
  let queued = false;
  function scrollUpdate() {
    const total = document.documentElement.scrollHeight - innerHeight;
    progress.style.transform = 'scaleX(' + (total > 0 ? Math.max(0, Math.min(1,scrollY/total)) : 0) + ')';
    header.classList.toggle('scrolled',scrollY > 36);
    queued=false;
  }
  addEventListener('scroll', () => {if(!queued){queued=true;requestAnimationFrame(scrollUpdate);}}, {passive:true});
  scrollUpdate();
})();
