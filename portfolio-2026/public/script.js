// Portfolio content lives in this one array. Add projects, tags and links here.
const projects = [
  {
    id: 'hustle', number: '01', name: 'Hustle', subtitle: 'The Economy of You',
    description: 'Hustle is a content-first marketplace connecting skilled workers with people who need their services. Current development includes social discovery, service previews, consultation-to-booking workflows, adaptive scheduling, and payment-safety foundations. The platform remains in development, with staging and production-readiness checks ongoing.',
    tags: ['React Native', 'NestJS', 'PostgreSQL', 'Product Strategy'], categories: ['products'], status: 'In development',
    role: 'Founder · Product & engineering', repo: 'https://github.com/realxpen/hustle-economy-of-you',
    demo: '', wide: true, art: 'hustle'
  },
  {
    id: 'aeon', number: '02', name: 'AEON', subtitle: 'Autonomous commerce. Human controlled.',
    description: 'An AI commerce agent that understands a shopping mission, compares options, explores negotiation, and preserves a hard human-approval boundary before consequential action.',
    tags: ['WebMCP', 'React', 'TypeScript', 'AI Agents'], categories: ['agents', 'products'], status: 'Public prototype',
    role: 'OpenAI WebMCP Challenge', repo: 'https://github.com/realxpen/-aeon', demo: 'https://aeon-swifnatechnologyltd.vercel.app/',
    wide: true, art: 'aeon'
  },
  {
    id: 'rewind', number: '03', name: 'REWIND', subtitle: 'Ctrl+Z for reality.',
    description: 'Spatial AI for saving checkpoints of physical spaces, identifying what changed, generating restoration steps, and checking whether the space was actually restored.',
    tags: ['Amazon Nova', 'Spatial AI', 'Computer Vision'], categories: ['agents', 'research'], status: 'Public demo',
    role: 'Amazon Developer Hackathon', repo: 'https://github.com/realxpen/rewind', demo: 'https://rewind-rho-dun.vercel.app/',
    wide: false, art: 'rewind'
  },
  {
    id: 'sentinel-memory', number: '04', name: 'SENTINEL', subtitle: 'A memory for the physical world.',
    description: 'An evidence-first system that remembers environmental observations, detects meaningful changes between snapshots, and supports a rescan-and-verify workflow.',
    tags: ['AI', 'PostgreSQL', 'Computer Vision'], categories: ['agents', 'research'], status: 'Public demo link',
    role: 'Nebius × NVIDIA AI Hackathon', repo: 'https://github.com/realxpen/sentinel-physical-memory', demo: 'https://sentinel-physical-memory.vercel.app/',
    wide: false, art: 'sentinel'
  },
  {
    id: 'swifna', number: '05', name: 'SWIFNA', subtitle: 'Everyday payments, made simpler.',
    description: 'A Nigerian VTU and utility-payment experience combining airtime, data, bills, wallet flows, transaction history and provider integrations in one user-facing product.',
    tags: ['React', 'TypeScript', 'Supabase', 'Payments'], categories: ['products', 'fintech'], status: 'Web app',
    role: 'Independent product', repo: '', demo: 'https://swifna-liart.vercel.app/',
    wide: false, art: 'swifna'
  },
  {
    id: 'sabi', number: '06', name: 'SABI', subtitle: 'An AI agent for the informal economy.',
    description: 'A field-agent prototype that takes a real-world request, searches for providers, structures quotes and recommendations, and asks for human approval before action.',
    tags: ['Next.js', 'TypeScript', 'Agent Workflows'], categories: ['agents', 'research'], status: 'Hackathon prototype',
    role: 'Lagos Agentic AI Hack Night', repo: 'https://github.com/realxpen/sabi', demo: '',
    wide: false, art: 'sabi'
  },
  {
    id: 'moniflow', number: '07', name: 'MONIFlow', subtitle: 'From money intentions to safe actions.',
    description: 'MONIFlow is a mobile-first financial assistant exploring how people can turn financial intentions into reviewable actions. Its prototype includes authenticated account experiences, persistent simulated financial activity, wallet-readiness checks, and explicit approval boundaries. Real financial operations remain disabled pending independent verification.',
    tags: ['Expo', 'React Native', 'Fastify', 'BMONI'], categories: ['fintech', 'agents'], status: 'Prototype',
    role: 'BMONI Embedded Hackathon', repo: 'https://github.com/realxpen/moniflow', demo: '',
    wide: false, art: 'moniflow'
  },
  {
    id: 'agentcommerce', number: '08', name: 'AgentCommerce', subtitle: 'A marketplace for AI-delivered work.',
    description: 'A service-first marketplace experiment connecting AI-agent discovery, structured briefs, escrow-oriented checkout, AI fulfillment and deliverable review.',
    tags: ['Initia', 'Next.js', 'AI', 'Web3'], categories: ['products', 'agents'], status: 'Hackathon build',
    role: 'Initia Hackathon', repo: 'https://github.com/realxpen/Agent-Commerce', demo: 'https://main.d1kz6c4m7fkyqg.amplifyapp.com/',
    wide: false, art: 'agentcommerce'
  },
  {
    id: 'novapilot', number: '09', name: 'NovaPilot', subtitle: 'Better product research with AI.',
    description: 'A shopping comparison assistant pairing a web interface with a Python API to interpret shopping needs, collect options and return reasoned recommendations.',
    tags: ['Next.js', 'FastAPI', 'Amazon Nova'], categories: ['agents', 'products'], status: 'Hackathon build',
    role: 'Amazon Nova Hackathon', repo: 'https://github.com/realxpen/Novapilot', demo: '',
    wide: false, art: 'novapilot'
  },
  {
    id: 'weavedirector', number: '10', name: 'WeaveDirector', subtitle: 'Creative ideas, orchestrated by AI.',
    description: 'An AI-assisted creative generation experiment using streaming output, persistent sessions and a full-stack app architecture for campaign creation.',
    tags: ['Next.js', 'FastAPI', 'Gemini', 'Firestore'], categories: ['agents', 'research'], status: 'Prototype',
    role: 'Google Gemini Hackathon', repo: 'https://github.com/realxpen/WeaveDirector-AI', demo: '',
    wide: false, art: 'weave'
  },
  {
    id: 'sentinel-safety', number: '11', name: 'Sentinel AI', subtitle: 'Real-time safety awareness.',
    description: 'A multimodal safety-agent build that combines live video, helmet and phone detection, sound-level analysis and an incident dashboard.',
    tags: ['Python', 'Roboflow', 'React', 'Realtime AI'], categories: ['agents', 'research'], status: 'Hackathon build',
    role: 'Vision Agents Challenge', repo: 'https://github.com/realxpen/Sentinel_AI', demo: '',
    wide: false, art: 'safety'
  },
  {
    id: 'fintech-redesign', number: '12', name: 'Fintech UI Lab', subtitle: 'Exploring better money interfaces.',
    description: 'A fintech interface redesign exploring approachable dashboards, information hierarchy, reusable components and product polish.',
    tags: ['UI/UX', 'React', 'Figma'], categories: ['fintech', 'research'], status: 'Design exploration',
    role: 'Independent design experiment', repo: 'https://github.com/realxpen/Fintechappredesign', demo: '',
    wide: false, art: 'fintech-design'
  }
];

const illustrations = {
  hustle: `<div class="art-hustle"><div class="hustle-glow"></div><div class="mock-phone"><div class="phone-top"><span>hustle<span style="color:#c9ff72">.</span></span><span>☷</span></div><div class="phone-cats"><span class="selected">For You</span><span>Nearby</span><span>Explore</span></div><div class="phone-shot"><div class="photo-sun"></div><div class="photo-hill"></div><div class="phone-shot-overlay"><div class="avatar-mini"></div><span>Made by people.<br><b>Found by you.</b></span></div></div><div class="phone-bottom"><span>⌂</span><span>⌕</span><span>＋</span><span>♡</span><span>◉</span></div></div><div class="float-chip float-chip-a"><span>✳</span> Skills meet opportunity</div><div class="float-chip float-chip-b">DISCOVER <strong>→</strong> CONNECT <strong>→</strong> GROW</div></div>`,
  aeon: `<div class="art-aeon"><div class="aeon-top"><span>AEON <small>/ MISSION CONTROL</small></span><div><i></i><i></i><i></i></div></div><div class="aeon-terminal"><div class="aeon-meta">ACTIVE MISSION · #001</div><div class="aeon-prompt">Find me a smartphone under <em>₦500,000.</em><br>Ask before purchasing<span class="cursor-block">▍</span></div><div class="aeon-flow"><span>SEARCH ✓</span><span>EVALUATE ✓</span><span>NEGOTIATE ✓</span><span class="current">APPROVAL ↗</span></div><div class="aeon-approve"><span>◈</span><div><strong>Human approval required</strong><small>The final decision is always yours.</small></div><span class="approval-circle">↗</span></div></div><div class="aeon-grid"></div></div>`,
  rewind: `<div class="art-rewind"><div class="rewind-brand">REWIND <span>↶</span></div><div class="rewind-state"><div class="rewind-room"><div class="rewind-window"></div><div class="rewind-sofa"></div><div class="rewind-table"></div><span>CHECKPOINT A</span></div><span class="rewind-arrow">→</span><div class="rewind-room room-shift"><div class="rewind-window"></div><div class="rewind-sofa"></div><div class="rewind-table"></div><span>STATE B</span></div></div><div class="rewind-progress"><span>SAVE</span><b>→</b><span>DIFF</span><b>→</b><span>REWIND</span><b>→</b><span class="green-step">VERIFY</span></div></div>`,
  sentinel: `<div class="art-sentinel"><div class="sentinel-grid"><span class="crosshair ch1">+</span><span class="crosshair ch2">+</span><span class="crosshair ch3">+</span><span class="crosshair ch4">+</span><div class="scan-outline"><span>OBJECT 01</span></div><div class="scan-point sp1"></div><div class="scan-point sp2"></div><div class="scan-point sp3"></div><div class="scan-line"></div></div><div class="sentinel-foot"><span>ENVIRONMENT MEMORY</span><span>STATE A ↔ STATE B</span></div></div>`,
  swifna: `<div class="art-swifna"><div class="swifna-title">swifna<span>.</span></div><div class="swifna-app"><small>EVERYDAY UTILITIES</small><strong>One place.<br>Every payment.</strong><div class="swifna-services"><span>✦<small>Airtime</small></span><span>◈<small>Data</small></span><span>⌁<small>Electricity</small></span><span>◉<small>TV</small></span></div></div><div class="swifna-ring"></div></div>`,
  sabi: `<div class="art-sabi"><div class="sabi-header"><span class="sabi-orbit">✳</span> SABI <span>INTELLIGENCE WORKFLOW</span></div><div class="sabi-quote">“I need 20 yards of black Ankara delivered tomorrow.”</div><div class="sabi-stages"><div><i>01</i> Understand request <b>✓</b></div><div><i>02</i> Find providers <b>✓</b></div><div><i>03</i> Compare quotes <b>✓</b></div><div class="sabi-active"><i>04</i> Ask for approval <b>→</b></div></div></div>`,
  moniflow: `<div class="art-moniflow"><div class="moni-circle"></div><div class="moni-panel"><div class="moni-top">MONI<span>FLOW</span><span class="moni-safe">MONI GUARD ✓</span></div><div class="moni-chat">Save ₦20,000 for my laptop.</div><div class="moni-plan"><small>YOUR PLAN</small><strong>Review before you move money.</strong><span>Human approval required <b>↗</b></span></div></div></div>`,
  agentcommerce: `<div class="art-agentcommerce"><div class="ac-circle ac-one"></div><div class="ac-circle ac-two"></div><div class="ac-panel"><div class="ac-title">AGENT<span>COMMERCE</span></div><div class="ac-small">AI SERVICES MARKETPLACE</div><div class="ac-pills"><span>RESEARCH</span><span>DESIGN</span><span>CONTENT</span></div><div class="ac-footer">BRIEF → ESCROW → DELIVER</div></div></div>`,
  novapilot: `<div class="art-nova"><span class="nova-logo">NOVA / PILOT</span><div class="nova-search">⌕ <span>Find my next device...</span><b>↗</b></div><div class="nova-products"><div><span class="nova-shape s-one"></span><small>OPTION A</small><b>94% MATCH</b></div><div><span class="nova-shape s-two"></span><small>OPTION B</small><b>88% MATCH</b></div><div><span class="nova-shape s-three"></span><small>OPTION C</small><b>81% MATCH</b></div></div></div>`,
  weave: `<div class="art-weave"><div class="weave-aura"></div><div class="weave-symbol">✳</div><div class="weave-label">WEAVEDIRECTOR</div><div class="weave-thread"><i></i><i></i><i></i><i></i><i></i></div><span class="weave-foot">CREATIVE SYSTEMS, REIMAGINED</span></div>`,
  safety: `<div class="art-safety"><div class="safety-cam"><div class="safety-person"><div class="helmet"></div><div class="head"></div><div class="body"></div></div><div class="detection-box"><span>HELMET · DETECTED</span></div><div class="safety-rec">● REC</div><div class="safety-bottom">VISION AGENT / LIVE SCAN</div></div><div class="safety-alert">SAFETY STATUS <strong>MONITORING</strong></div></div>`,
  'fintech-design': `<div class="art-fintech"><div class="fintech-blob"></div><div class="fintech-surface"><span>GOOD MORNING ✳</span><strong>Money should<br>make sense.</strong><div class="fintech-bars"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></div></div>`
};

function safeLink(href, label, className='project-link') {
  return `<a class="${className}" href="${href}" target="_blank" rel="noopener noreferrer">${label} <span aria-hidden="true">↗</span></a>`;
}

const grid = document.getElementById('project-grid');
const buttons = [...document.querySelectorAll('.filter-btn')];
const search = document.getElementById('work-search');
const moreButton = document.getElementById('work-more');
const moreWrap = document.getElementById('work-more-wrap');
const moreCount = document.getElementById('remaining-count');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const INITIAL_PROJECTS = 6;
const homePriority = ['hustle','aeon','rewind','moniflow','sabi','swifna'];
let selectedFilter = 'all';
let showEverything = false;
let searchTerm = '';
let searchDebounce;

document.getElementById('all-count').textContent = projects.length;

const normalized = value => value.toLocaleLowerCase().trim();
function matchesProject(project) {
  return (selectedFilter === 'all' || project.categories.includes(selectedFilter)) &&
    (!searchTerm || normalized([project.name, project.subtitle, project.description, project.role, ...project.tags, ...project.categories].join(' ')).includes(searchTerm));
}

function projectMarkup(project, index) {
  // All content comes from a locally authored, trusted project list.
  return `<article class="project-card ${project.id === 'hustle' && selectedFilter === 'all' && !searchTerm ? 'project-wide' : ''}" style="--card-order:${index}" data-project="${project.id}">
      <div class="project-visual" role="img" aria-label="Stylized conceptual illustration for ${project.name}">${illustrations[project.art]}</div>
      <div class="project-content">
        <div class="project-overline"><span>${project.number} / ${project.role}</span><span class="project-status"><i></i>${project.status}</span></div>
        <div class="project-title-row"><div><h3>${project.name}<span class="project-heading-star">✳</span></h3><p class="project-subtitle">${project.subtitle}</p></div>${project.demo || project.repo ? `<a class="project-arrow" href="${project.demo || project.repo}" target="_blank" rel="noopener noreferrer" aria-label="Open ${project.name} ${project.demo ? 'demo' : 'repository'}">↗</a>` : ''}</div>
        <p class="project-description">${project.description}</p>
        <div class="project-bottom"><div class="project-tags">${project.tags.map(tag => `<span>${tag}</span>`).join('')}</div><div class="project-links">${project.demo ? safeLink(project.demo, 'Live demo') : ''}${project.repo ? safeLink(project.repo, 'Source code') : ''}</div></div>
      </div>
    </article>`;
}

function renderProjects({ animate = true } = {}) {
  const matches = projects.filter(matchesProject).sort((a,b) => {
    const ia=homePriority.indexOf(a.id), ib=homePriority.indexOf(b.id);
    return (ia<0?100+Number(a.number):ia) - (ib<0?100+Number(b.number):ib);
  });
  const collapsed = selectedFilter === 'all' && !searchTerm && !showEverything;
  const visible = collapsed ? matches.slice(0, INITIAL_PROJECTS) : matches;
  const countLeft = Math.max(0, matches.length - INITIAL_PROJECTS);
  moreWrap.hidden = Boolean(searchTerm || selectedFilter !== 'all' || matches.length <= INITIAL_PROJECTS);
  moreButton.setAttribute('aria-expanded', String(showEverything));
  moreButton.innerHTML = showEverything
    ? 'Show featured projects <span class="more-chevron" aria-hidden="true">↑</span>'
    : `Explore all projects <span id="remaining-count">+${countLeft}</span> <span class="more-chevron" aria-hidden="true">↓</span>`;
  moreButton.setAttribute('aria-label', showEverything ? 'Show first six projects' : `Show all ${matches.length} projects`);

  const content = visible.length
    ? visible.map(projectMarkup).join('')
    : `<div class="empty-results"><span aria-hidden="true">✳</span><h3>No matching projects.</h3><p>Try a different technology or category.</p><button type="button" id="reset-filters" class="btn btn-solid">Clear filters <span aria-hidden="true">↗</span></button></div>`;
  const update = () => {grid.innerHTML = content;};
  if (animate && !prefersReducedMotion.matches && document.startViewTransition) {
    document.startViewTransition(update);
  } else { update(); }
  document.getElementById('filter-status').textContent = `Showing ${visible.length} of ${matches.length} matching project${matches.length === 1 ? '' : 's'}`;
  buttons.forEach(button => {
    const active = button.dataset.filter === selectedFilter;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  if (!prefersReducedMotion.matches && !document.startViewTransition && animate) {
    grid.querySelectorAll('.project-card').forEach((card, i) => {
      card.animate([{opacity:0, transform:'translateY(13px)'},{opacity:1,transform:'translateY(0)'}],
        {duration:320,delay:Math.min(180,i*25),fill:'both',easing:'cubic-bezier(.2,.7,.2,1)'});
    });
  }
  document.getElementById('reset-filters')?.addEventListener('click', () => {
    selectedFilter = 'all'; search.value = ''; searchTerm = ''; showEverything = false;
    renderProjects(); search.focus();
  });
}

buttons.forEach(button => button.addEventListener('click', () => {
  selectedFilter = button.dataset.filter;
  showEverything = selectedFilter !== 'all';
  renderProjects();
}));
moreButton.addEventListener('click', () => {
  if (showEverything) {
    showEverything = false;
    renderProjects();
    document.querySelector('#work-title').scrollIntoView({behavior:prefersReducedMotion.matches ? 'instant' : 'smooth',block:'start'});
  } else { showEverything = true; renderProjects(); }
});
search.addEventListener('input', () => {
  clearTimeout(searchDebounce);
  searchDebounce = setTimeout(() => {
    searchTerm = normalized(search.value);
    showEverything = Boolean(searchTerm);
    renderProjects();
  }, 100);
});
search.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    search.value = ''; searchTerm = ''; showEverything = false; renderProjects(); search.blur();
  }
});
document.addEventListener('keydown', event => {
  const focused = document.activeElement;
  if (event.key === '/' && !event.altKey && !event.ctrlKey && !event.metaKey &&
      !['INPUT','TEXTAREA','SELECT'].includes(focused?.tagName) && !focused?.isContentEditable) {
    event.preventDefault(); search.focus();
  }
});
renderProjects({animate:false});

document.getElementById('year').textContent = new Date().getFullYear();
const menuButton = document.getElementById('menu-toggle');
const nav = document.getElementById('primary-nav');
function closeMenu(){nav.classList.remove('open');menuButton.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Open navigation');document.body.classList.remove('menu-open');}
menuButton.addEventListener('click',()=>{const open = nav.classList.toggle('open');menuButton.classList.toggle('open',open);menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Close navigation':'Open navigation');document.body.classList.toggle('menu-open',open);});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown', e=>{if(e.key==='Escape')closeMenu();});
document.addEventListener('click', e=>{if(!nav.contains(e.target) && !menuButton.contains(e.target)) closeMenu();});
window.addEventListener('resize',()=>{if(window.innerWidth>720) closeMenu();});

// Single passive scroll listener updates both a subtle progress line and floating affordances.
const header = document.querySelector('.site-header');
const progress = document.getElementById('reading-progress');
const backToTop = document.getElementById('back-to-top');
let pendingScroll = false;
function updateScrollUI(){
  const doc = document.documentElement;
  const total = doc.scrollHeight - innerHeight;
  progress.style.transform = `scaleX(${total > 0 ? Math.min(1, Math.max(0, scrollY / total)) : 0})`;
  header.classList.toggle('scrolled', scrollY > 36);
  backToTop.classList.toggle('visible', scrollY > 650);
  pendingScroll = false;
}
window.addEventListener('scroll', () => { if (!pendingScroll){pendingScroll=true;requestAnimationFrame(updateScrollUI);}}, {passive:true});
updateScrollUI();

// Give the current section a readable navigation state without hijacking scroll.
const links = [...nav.querySelectorAll('a[href^="#"]')];
if ('IntersectionObserver' in window) {
  const sectionSpy = new IntersectionObserver(entries => {
    const active = entries.filter(e => e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
    if (!active) return;
    links.forEach(link => {
      if (link.getAttribute('href') === `#${active.target.id}`) link.setAttribute('aria-current','location');
      else link.removeAttribute('aria-current');
    });
  }, {rootMargin:'-20% 0px -65% 0px'});
  ['work','notes','about','experience'].forEach(id=>sectionSpy.observe(document.getElementById(id)));
}

// Ambient hero motion only on fine pointers, with an explicit reduced-motion opt-out.
const heroArt = document.querySelector('.hero-art');
if (heroArt && matchMedia('(hover:hover) and (pointer:fine)').matches && !prefersReducedMotion.matches) {
  let px = 0, py = 0, raf = 0;
  function moveArt(){heroArt.style.setProperty('--pointer-x', `${px.toFixed(2)}px`);heroArt.style.setProperty('--pointer-y', `${py.toFixed(2)}px`);raf=0;}
  heroArt.addEventListener('pointermove', event => {
    const r = heroArt.getBoundingClientRect();
    px = ((event.clientX-r.left)/r.width-.5)*17;
    py = ((event.clientY-r.top)/r.height-.5)*17;
    if(!raf) raf=requestAnimationFrame(moveArt);
  },{passive:true});
  heroArt.addEventListener('pointerleave',()=>{px=0;py=0;if(!raf)raf=requestAnimationFrame(moveArt);});
}
const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  const observer = new IntersectionObserver(entries => {entries.forEach(entry => {if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}});}, {threshold:0.08,rootMargin:'0px 0px -26px 0px'});
  revealItems.forEach(el => observer.observe(el));
}else revealItems.forEach(el => el.classList.add('visible'));
