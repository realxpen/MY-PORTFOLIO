/* XPEN workspace interface — accessible shortcuts, search, notes and project inspector.
   Static, user-authored data only. No telemetry and no backend calls. */
(() => {
  document.documentElement.classList.add('os-js');
  const SEARCH_INDEX=[{"type":"Page","title":"Overview","subtitle":"A home for the work, the learning and the process.","url":"/"},{"type":"Page","title":"Work","subtitle":"Browse all projects, prototypes, and experiments.","url":"/projects/"},{"type":"Page","title":"Journal","subtitle":"Founder notes and engineering reflections.","url":"/journal/"},{"type":"Page","title":"Now","subtitle":"Current focus and things I'm learning.","url":"/now/"},{"type":"Page","title":"About","subtitle":"The human behind the work.","url":"/about/"},{"type":"Project","title":"Hustle","subtitle":"The Economy of You","url":"/projects/#inspect-hustle"},{"type":"Project","title":"AEON","subtitle":"Autonomous commerce. Human controlled.","url":"/projects/#inspect-aeon"},{"type":"Project","title":"REWIND","subtitle":"Ctrl+Z for reality.","url":"/projects/#inspect-rewind"},{"type":"Project","title":"SENTINEL","subtitle":"A memory for the physical world.","url":"/projects/#inspect-sentinel-memory"},{"type":"Project","title":"SWIFNA","subtitle":"Everyday payments, made simpler.","url":"/projects/#inspect-swifna"},{"type":"Project","title":"SABI","subtitle":"An AI agent for the informal economy.","url":"/projects/#inspect-sabi"},{"type":"Project","title":"MONIFlow","subtitle":"From money intentions to safe actions.","url":"/projects/#inspect-moniflow"},{"type":"Project","title":"AgentCommerce","subtitle":"A marketplace for AI-delivered work.","url":"/projects/#inspect-agentcommerce"},{"type":"Project","title":"NovaPilot","subtitle":"Better product research with AI.","url":"/projects/#inspect-novapilot"},{"type":"Project","title":"WeaveDirector","subtitle":"Creative ideas, orchestrated by AI.","url":"/projects/#inspect-weavedirector"},{"type":"Project","title":"Sentinel AI","subtitle":"Real-time safety awareness.","url":"/projects/#inspect-sentinel-safety"},{"type":"Project","title":"Fintech UI Lab","subtitle":"Exploring better money interfaces.","url":"/projects/#inspect-fintech-redesign"},{"type":"Journal","title":"Three different meanings of shipped.","subtitle":"What I am learning about the difference between merged, deployed and verified.","url":"/journal/#three-different-meanings-of-shipped"},{"type":"Journal","title":"Money has a price, and its value can change.","subtitle":"Day 18 — inflation, interest rates, exchange rates and founder decisions.","url":"/journal/#day-18-inflation-interest-exchange"},{"type":"Journal","title":"Growth is more than working harder.","subtitle":"Day 17 — productivity, economic institutions and the conditions for development.","url":"/journal/#day-17-productivity-development"},{"type":"Journal","title":"Owning a company is not owning its wallet.","subtitle":"Day 16 — separate legal identity, shares, dilution, vesting and control.","url":"/journal/#day-16-company-ownership"},{"type":"Journal","title":"Building the feature is only half the work.","subtitle":"What this week taught me about shipping, reliability and the last mile.","url":"/journal/#building-is-half-the-work"},{"type":"Journal","title":"A marketplace is more than a list of services.","subtitle":"What building Hustle is teaching me about trust, discovery and real opportunity.","url":"/journal/#marketplace-is-trust"},{"type":"Journal","title":"A good AI agent should know when to ask.","subtitle":"From AEON to SABI and MONIFlow, autonomy means little without clear boundaries.","url":"/journal/#agents-and-approval"},{"type":"Journal","title":"Building something isn't the same as shipping it.","subtitle":"Hackathons, CI failures and deployment fixes are teaching me to care about the last mile.","url":"/journal/#ship-vs-build"},{"type":"Journal","title":"What if physical spaces had version history?","subtitle":"REWIND and SENTINEL are experiments in remembering, comparing and verifying the real world.","url":"/journal/#physical-world-memory"},{"type":"Journal","title":"In fintech, reliability is part of the interface.","subtitle":"SWIFNA and MONIFlow are reminding me that the invisible systems matter most.","url":"/journal/#money-is-trust"},{"type":"Journal","title":"I'm trying to become better than my next build.","subtitle":"A note on learning, communication, consistency and growing outside engineering.","url":"/journal/#growth-beyond-code"},{"type":"Journal","title":"Why I'm developing my own way of building.","subtitle":"Adaptive Ecosystem Development is my evolving attempt to connect experience, systems and feedback.","url":"/journal/#ecosystem-development"}];
  const command = document.getElementById('os-command');
  const trigger = document.getElementById('os-search-trigger');
  const input = document.getElementById('os-search-input');
  const results = document.getElementById('os-search-results');
  const closeSearch = document.getElementById('os-search-close');

  const openCommand = () => {
    if (!command || !command.showModal) return;
    if (!command.open) command.showModal();
    input.value = '';
    renderSearch();
    input.focus();
  };
  const renderSearch = () => {
    if (!results) return;
    const query = (input.value || '').trim().toLocaleLowerCase();
    const matches = (query
      ? SEARCH_INDEX.filter(item => (item.title + ' ' + item.subtitle + ' ' + item.type).toLocaleLowerCase().includes(query))
      : SEARCH_INDEX.filter(item => item.type === 'Page')).slice(0,13);
    results.replaceChildren();
    if (!matches.length) {
      const empty = document.createElement('p');
      empty.className = 'os-command-empty';
      empty.textContent = 'Nothing matched. Try a project name, topic or page.';
      results.appendChild(empty);
      return;
    }
    const group = document.createDocumentFragment();
    matches.forEach(item => {
      const link = document.createElement('a');
      link.className = 'os-search-result';
      link.href = item.url;
      link.addEventListener('click',() => {if (command?.open) command.close();});
      const details = document.createElement('span');
      const kind = document.createElement('span');
      kind.className = 'os-result-type';
      kind.textContent = item.type;
      const name = document.createElement('strong');
      name.textContent = item.title;
      const sub = document.createElement('small');
      sub.textContent = item.subtitle;
      details.append(kind,name,sub);
      const arrow = document.createElement('span');
      arrow.textContent = '↗';
      arrow.setAttribute('aria-hidden','true');
      link.append(details,arrow);
      group.appendChild(link);
    });
    results.appendChild(group);
  };
  trigger?.addEventListener('click',openCommand);
  input?.addEventListener('input',renderSearch);
  closeSearch?.addEventListener('click',() => command.close());
  command?.addEventListener('click',e => {if(e.target === command)command.close();});
  document.addEventListener('keydown',e => {
    const typing=['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName) || document.activeElement?.isContentEditable;
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      openCommand();
    } else if(e.key === '/' && !typing && !e.defaultPrevented && !e.altKey && !e.ctrlKey && !e.metaKey) {
      e.preventDefault();
      openCommand();
    } else if(e.key === 'ArrowDown' && command?.open && document.activeElement === input) {
      const first = results?.querySelector('a');
      if(first){e.preventDefault();first.focus();}
    } else if (command?.open && results?.contains(document.activeElement) && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
      const links=[...results.querySelectorAll('a')];
      const current=links.indexOf(document.activeElement);
      if (current!==-1) {
        e.preventDefault();
        const next=current+(e.key==='ArrowDown'?1:-1);
        if(next<0)input?.focus();else links[Math.min(next,links.length-1)]?.focus();
      }
    }
  });

  // Native project gallery still performs its own searching and filtering.
  // We add an inspect action so visitors can actually explore each project.
  const grid = document.getElementById('project-grid');
  const inspector = document.getElementById('os-inspector');
  const inspectClose = document.getElementById('os-inspect-close');
  const getProject = id => typeof projects !== 'undefined' ? projects.find(p => p.id === id) : null;
  const inspect = (id, updateLocation = true) => {
    const item = getProject(id);
    if (!item || !inspector) return;
    const byId = id => inspector.querySelector('#'+id);
    byId('os-inspect-name').textContent = item.name;
    byId('os-inspect-status').textContent = item.status;
    byId('os-inspect-subtitle').textContent = item.subtitle;
    byId('os-inspect-role').textContent = item.role;
    byId('os-inspect-description').textContent = item.description;
    const tags = byId('os-inspect-tags');
    tags.replaceChildren();
    item.tags.forEach(tag => {
      const el = document.createElement('span');
      el.textContent = tag;
      tags.appendChild(el);
    });
    const links = byId('os-inspect-links');
    links.replaceChildren();
    [['Open source',item.repo],['Visit demo',item.demo]].forEach(([label,url])=>{
      if (!/^https:\/\//.test(url||'')) return;
      const anchor = document.createElement('a');
      anchor.href = url;
      anchor.target = '_blank';
      anchor.rel = 'noopener noreferrer';
      anchor.className = 'os-button'+(label==='Visit demo'?' primary':'');
      anchor.textContent = label+' ↗';
      links.appendChild(anchor);
    });
    if(!inspector.open)inspector.showModal();
    if(updateLocation)history.replaceState(null,'','#inspect-'+item.id);
  };
  grid?.addEventListener('click',e => {
    const btn=e.target.closest('.inspect-project');
    if (!btn) return;
    inspect(btn.dataset.projectId);
  });
  inspectClose?.addEventListener('click',()=>inspector.close());
  inspector?.addEventListener('click',e=>{if(e.target===inspector)inspector.close();});
  inspector?.addEventListener('close',()=>{
    if(location.hash.startsWith('#inspect-'))history.replaceState(null,'',location.pathname+location.search);
  });
  const readInspectHash = () => {
    if(grid && location.hash.startsWith('#inspect-')) {
      const id = decodeURIComponent(location.hash.slice('#inspect-'.length));
      requestAnimationFrame(()=>{if(!inspector?.open)inspect(id,false);});
    }
  };
  readInspectHash();
  addEventListener('hashchange',readInspectHash);

  // Desktop journal: a note index on the left and a genuine reading pane.
  // On mobile the original native details/summary entries remain available.
  const noteEntries=[...document.querySelectorAll('.journal-entry')];
  const noteList=document.getElementById('os-note-catalog');
  const reader=document.getElementById('os-reader-text');
  let selectedNote='';
  if(noteList && reader && noteEntries.length){
    const chooseNote = (id,writeHash=false) => {
      const note=noteEntries.find(n=>n.id===id&&!n.hidden);
      if(!note)return;
      selectedNote=id;
      const title=note.querySelector('.journal-entry-heading strong')?.textContent||'Note';
      const category=note.querySelector('.journal-entry-category')?.textContent?.replace(/\s+/g,' ').trim()||'Journal';
      const intro=note.querySelector('.journal-entry-intro')?.textContent||'';
      const originalBody=note.querySelector('.journal-entry-body');
      if(!originalBody)return;
      const clone=originalBody.cloneNode(true);
      clone.className='os-reader-body';
      clone.querySelectorAll('.journal-back').forEach(node=>node.remove());
      reader.replaceChildren();
      const meta=document.createElement('p');
      meta.className='meta';meta.textContent=category;
      const heading=document.createElement('h2');
      heading.textContent=title;
      heading.tabIndex=-1;
      const description=document.createElement('p');
      description.className='intro';description.textContent=intro;
      reader.append(meta,heading,description,clone);
      [...noteList.querySelectorAll('.os-catalog-item')].forEach(button=>{
        const active=button.dataset.noteId===id;
        button.setAttribute('aria-current',String(active));
      });
      if(writeHash)history.replaceState(null,'','#'+encodeURIComponent(id));
    };
    const syncList = () => {
      const available=noteEntries.filter(note=>!note.hidden);
      noteList.replaceChildren();
      for(const note of available){
        const button=document.createElement('button');
        button.type='button';
        button.className='os-catalog-item';
        button.dataset.noteId=note.id;
        const metadata=document.createElement('span');
        metadata.className='meta';
        metadata.textContent=note.querySelector('.journal-entry-category')?.textContent.replace(/\s+/g,' ').trim()||'Journal';
        const title=document.createElement('strong');
        title.textContent=note.querySelector('.journal-entry-heading strong')?.textContent||'';
        const preview=document.createElement('span');
        preview.className='preview';
        preview.textContent=note.querySelector('.journal-entry-intro')?.textContent||'';
        button.append(metadata,title,preview);
        button.addEventListener('click',()=>{chooseNote(note.id,true);reader.querySelector('h2')?.focus({preventScroll:true});});
        noteList.appendChild(button);
      }
      if(available.length)chooseNote(available.some(n=>n.id===selectedNote)?selectedNote:available[0].id,false);
      else {
        selectedNote='';
        reader.replaceChildren();
        const empty=document.createElement('div');
        empty.className='os-reader-blank';
        const title=document.createElement('strong');
        title.textContent='No matching notes';
        const body=document.createElement('p');
        body.textContent='Clear the search or switch the journal topic.';
        empty.append(title,body);
        reader.appendChild(empty);
      }
    };
    const selectedHash=decodeURIComponent(location.hash.slice(1));
    if(noteEntries.some(n=>n.id===selectedHash))selectedNote=selectedHash;
    syncList();
    document.querySelectorAll('.journal-filter-btn').forEach(button=>button.addEventListener('click',syncList));
    document.getElementById('journal-search')?.addEventListener('input',syncList);
    document.getElementById('journal-clear')?.addEventListener('click',syncList);
    addEventListener('hashchange',()=>{
      const hash=decodeURIComponent(location.hash.slice(1));
      if(noteEntries.some(n=>n.id===hash)){chooseNote(hash);}
    });
  }

  const year=document.getElementById('os-year') || document.getElementById('year');
  if(year)year.textContent=new Date().getFullYear();
})();