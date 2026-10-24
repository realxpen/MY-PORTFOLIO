/* Shared journal/projects mobile navigation. Homepage already has its own menu controller. */
(()=>{
  const button=document.getElementById('menu-toggle');
  const menu=document.getElementById('primary-nav');
  if(!button||!menu)return;
  const close=()=>{
    menu.classList.remove('open');
    button.classList.remove('open');
    button.setAttribute('aria-expanded','false');
    button.setAttribute('aria-label','Open navigation');
    document.body.classList.remove('menu-open');
  };
  button.addEventListener('click',()=>{
    const open=!menu.classList.contains('open');
    menu.classList.toggle('open',open);
    button.classList.toggle('open',open);
    button.setAttribute('aria-expanded',String(open));
    button.setAttribute('aria-label',open?'Close navigation':'Open navigation');
    document.body.classList.toggle('menu-open',open);
  });
  menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',close));
  document.addEventListener('keydown',event=>{if(event.key==='Escape')close();});
  document.addEventListener('pointerdown',event=>{
    if(menu.classList.contains('open')&&!menu.contains(event.target)&&!button.contains(event.target))close();
  });
  window.addEventListener('resize',()=>{if(window.innerWidth>720)close();});
})();