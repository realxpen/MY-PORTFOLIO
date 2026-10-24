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


/* Xpen / Project explorer — static authored data, accessible client-side filtering. */
const grid=document.getElementById('project-grid');
const filters=[...document.querySelectorAll('[data-filter]')];
const search=document.getElementById('project-search');
const status=document.getElementById('filter-status');
const empty=document.getElementById('empty-projects');
let selected='all';
const escapeHTML=v=>String(v||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
const safeUrl=u=>/^https:\/\/[a-z0-9.-]+\//i.test(u||'')?u:'#work';
function render(){
  const q=search.value.trim().toLowerCase();
  const found=projects.filter(p=>(selected==='all'||p.categories.includes(selected))&&(!q||[p.name,p.subtitle,p.description,p.role,...p.tags].join(' ').toLowerCase().includes(q)));
  filters.forEach(btn=>{const active=btn.dataset.filter===selected;btn.classList.toggle('active',active);btn.setAttribute('aria-pressed',String(active));});
  grid.innerHTML=found.map((p,i)=>'<article class="project-card" data-project="'+escapeHTML(p.id)+'">'
    +'<div class="project-visual" aria-hidden="true"><div class="art-'+escapeHTML(p.art)+'"></div></div>'
    +'<div class="project-content"><div class="project-overline"><span>'+escapeHTML(p.number)+' / '+escapeHTML(p.role)+'</span><span class="project-status"><i></i>'+escapeHTML(p.status)+'</span></div>'
    +'<div class="project-title-row"><div><h3>'+escapeHTML(p.name)+'<span class="project-heading-star">✳</span></h3><p class="project-subtitle">'+escapeHTML(p.subtitle)+'</p></div>'
    +(p.demo||p.repo?'<a class="project-arrow" target="_blank" rel="noopener noreferrer" href="'+escapeHTML(safeUrl(p.demo||p.repo))+'" aria-label="Open '+escapeHTML(p.name)+' project">↗</a>':'')+'</div>'
    +'<p class="project-description">'+escapeHTML(p.description)+'</p>'
    +'<div class="project-bottom"><div class="project-tags">'+p.tags.map(t=>'<span>'+escapeHTML(t)+'</span>').join('')+'</div><div class="project-links">'
    +(p.demo?'<a class="project-link" target="_blank" rel="noopener noreferrer" href="'+escapeHTML(safeUrl(p.demo))+'">Live demo ↗</a>':'')
    +(p.repo?'<a class="project-link" target="_blank" rel="noopener noreferrer" href="'+escapeHTML(safeUrl(p.repo))+'">Source code ↗</a>':'')
    +'</div></div></div></article>').join('');
  empty.hidden=found.length!==0;
  status.textContent='Showing '+found.length+' of '+projects.length+' projects';
}
filters.forEach(btn=>btn.addEventListener('click',()=>{selected=btn.dataset.filter;render();}));
search.addEventListener('input',render);
document.getElementById('clear-projects').addEventListener('click',()=>{search.value='';selected='all';render();search.focus();});
document.addEventListener('keydown',e=>{if(e.key==='/'&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&!['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName)){e.preventDefault();search.focus();}});
document.getElementById('year').textContent=new Date().getFullYear();
render();
