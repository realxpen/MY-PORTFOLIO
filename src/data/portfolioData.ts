import { 
  Project, 
  SkillCategory, 
  JourneyMilestone, 
  CurrentlyBuildingItem, 
  ThinkingArticle, 
  SocialLinks,
  PresentationTalk
} from '../types';

export const PERSONAL_INFO = {
  name: 'Ayomide David Oladeji',
  firstName: 'Ayomide',
  initials: 'ADO',
  role: 'Computer Scientist · Product Builder · Entrepreneur',
  tagline: 'I build software, products, and systems that turn ambitious ideas into useful experiences.',
  bioSummary: 'A Nigerian Computer Science graduate and product builder operating at the intersection of software engineering, artificial intelligence, data systems, and digital entrepreneurship.',
  location: 'Nigeria · Global Remote',
  availability: 'Open to ambitious product builds, venture collaborations & technical engineering roles',
};

// Social links configuration with clear placeholder identifiers
export const SOCIAL_LINKS: SocialLinks = {
  email: 'realxpens@gmail.com',
  github: 'https://github.com/ayomidedavid', // Replace with your exact GitHub profile
  linkedin: 'https://linkedin.com/in/ayomide-david-oladeji', // Replace with your exact LinkedIn profile
  twitter: 'https://twitter.com/ayomidedavid', // Replace with your Twitter/X handle if applicable
  location: 'Lagos & Abuja, Nigeria',
  availabilityStatus: 'Available for high-impact product engineering & venture building',
};

// Flagship Hustle Ecosystem Data
export const HUSTLE_PROJECT = {
  id: 'hustle',
  title: 'Hustle',
  subtitle: 'A Decentralized Commerce & Talent Ecosystem for Skilled African Workers',
  tagline: 'Bridging the trust and capability gap between high-skilled talent and global clients.',
  overview: 'Hustle is not just a freelance job board; it is an integrated economic operating system designed around verified skill proof, escrow-secured digital commerce, intelligent matchmaking, and career mobility.',
  problem: 'In emerging African digital economies, skilled professionals face fragmented trust networks, payment volatility, and predatory marketplace fees, while clients struggle to verify authentic capability beyond embellished resumes.',
  idea: 'Create an all-in-one ecosystem where skill discovery, cryptographic/verified capability portfolios, milestone-based escrow contracts, and AI-driven matchmaker agents work together seamlessly.',
  productBreakdown: [
    {
      title: 'Skill Discovery & Capability Proof',
      desc: 'Dynamic interactive portfolios and verified skill challenges that prove technical competence with demonstrable artifact evidence rather than simple self-written claims.',
      icon: 'BadgeCheck'
    },
    {
      title: 'Escrow & Milestone Commerce',
      desc: 'Financial rail with multi-currency milestone vaults, automated stage release, dispute arbitration mechanisms, and transparent fee architecture.',
      icon: 'ShieldCheck'
    },
    {
      title: 'AI Matchmaking & Discovery Engine',
      desc: 'Semantic matching that pairs complex project requirements with talent based on verified past output, domain relevance, and delivery reliability.',
      icon: 'Sparkles'
    },
    {
      title: 'Real-Time Collaboration & Messaging',
      desc: 'Low-latency communication channel equipped with in-chat contract revisions, file transfers, milestone check-ins, and structured project briefs.',
      icon: 'MessageSquare'
    },
    {
      title: 'Reputation & Trust Graph',
      desc: 'Multi-dimensional trust score derived from verified contract completions, client ratings, punctual delivery records, and dispute-free history.',
      icon: 'Network'
    },
    {
      title: 'Agent Network & Micro-Learning',
      desc: 'Integrated ecosystem layer offering bite-sized technical upskilling and AI-assisted workflow agents to help builders scale their output.',
      icon: 'Cpu'
    }
  ],
  techStack: [
    'React Native',
    'Expo',
    'TypeScript',
    'Node.js',
    'NestJS',
    'PostgreSQL',
    'Supabase',
    'Redis',
    'Prisma ORM',
    'WebSockets',
    'AI / LLM APIs'
  ],
  architectureLayers: [
    {
      layer: 'Client Experience',
      tech: 'React Native + Expo (Mobile iOS/Android) & React (Web Dashboard)',
      role: 'Fluid, cross-platform interface optimized for quick talent discovery, booking, and real-time project management.'
    },
    {
      layer: 'Application & Business Logic',
      tech: 'Node.js & NestJS modular microservices architecture',
      role: 'Handles identity, escrow contract state machines, dispute lifecycles, and real-time chat gateway.'
    },
    {
      layer: 'Data & State Caching',
      tech: 'PostgreSQL (Primary Relational Store) + Supabase + Redis Cache',
      role: 'ACID-compliant transaction handling for funds, rapid cache layer for live matching and active sessions.'
    },
    {
      layer: 'Intelligence & Trust Engine',
      tech: 'AI Semantic Indexing & Vector Embeddings',
      role: 'Analyzes project specifications and talent capability vectors for high-precision matchmaking.'
    }
  ],
  vision: 'To build the foundational digital infrastructure that empowers hundreds of thousands of African technical and creative talents to earn, transact securely, and establish verified global reputation without geographical borders.'
};

// Projects Catalog
export const PROJECTS_DATA: Project[] = [
  {
    id: 'hustle',
    title: 'Hustle Ecosystem',
    tagline: 'Flagship talent marketplace & capability verification ecosystem for skilled workers.',
    description: 'An end-to-end digital ecosystem combining skill verification, escrow commerce, in-app messaging, and AI matchmaking.',
    problemSolved: 'Eliminates trust friction and payment risk for skilled workers and clients in emerging digital economies.',
    role: 'Founder, Product Architect & Lead Full-Stack Engineer',
    category: 'Product',
    status: 'In Active Development',
    technologies: ['React Native', 'Expo', 'NestJS', 'PostgreSQL', 'Supabase', 'Redis', 'TypeScript', 'AI APIs'],
    featured: true,
    caseStudyAvailable: true,
  },
  {
    id: 'market-intel-scraper',
    title: 'Marketplace Intelligence & Data Pipeline',
    tagline: 'Automated web intelligence system for regional pricing and skill demand analytics.',
    description: 'High-throughput data extraction and cleaning engine capturing market trends, pricing benchmarks, and service demand patterns across African tech hubs.',
    problemSolved: 'Transforms fragmented, unstructured web data across various platforms into actionable pricing and demand insights for digital services.',
    role: 'Data Engineer & System Designer',
    category: 'Data',
    status: 'Production Prototype',
    technologies: ['Python', 'BeautifulSoup', 'Selenium', 'Pandas', 'PostgreSQL', 'Power BI'],
    featured: false,
    caseStudyAvailable: true,
    caseStudyDetails: {
      overview: 'Engineered a resilient distributed scraping pipeline designed to handle rate-limiting, dynamic JavaScript rendering, and unstructured data streams.',
      challenge: 'Extracting clean, normalized data from varied regional portals without triggering IP blocks or getting stalled on AJAX-heavy SPAs.',
      solution: 'Built headless worker pools with proxy rotation, robust retry queues, and automated schema normalization pipelines.',
      architecture: ['Python Web Scraper Workers', 'Redis Task Queue', 'PostgreSQL Staging DB', 'Power BI Analytical Dashboards'],
      keyFeatures: [
        'Automated scheduled crawls with exponential backoff',
        'Duplicate elimination and text entity normalization',
        'Interactive Power BI report generation on wage distribution'
      ],
      learnings: 'Deepened understanding of data pipeline robustness, rate-limit choreography, and turning raw scraped tables into clear executive dashboards.'
    }
  },
  {
    id: 'ai-talent-matcher',
    title: 'Semantic Capability & Project Matching Engine',
    tagline: 'AI-assisted vector search aligning unstructured job requirements with candidate proof-of-work.',
    description: 'Intelligent prototype matching algorithm using embeddings and prompt engineering to evaluate candidates based on functional artifacts rather than keyword stuffing.',
    problemSolved: 'Traditional keyword search misses qualified talent whose profile uses different phrasing than the job posting.',
    role: 'AI & Full-Stack Developer',
    category: 'AI',
    status: 'Research & Lab',
    technologies: ['TypeScript', 'Python', 'Vector Search', 'Node.js', 'LLM Embeddings', 'Supabase Vector'],
    featured: false,
    caseStudyAvailable: true,
    caseStudyDetails: {
      overview: 'Exploration into semantic talent matching to automate the discovery phase of Hustle.',
      challenge: 'Raw text resumes are often inaccurate reflections of technical ability; code samples and past project descriptions need semantic vector comparison.',
      solution: 'Created an embedding pipeline that ingests project briefs and extracts skill clusters to match against verified builder capability vectors.',
      architecture: ['Embedding Generation Worker', 'Supabase pgvector Extension', 'FastAPI Semantic Query Router'],
      keyFeatures: [
        'Multi-vector scoring (domain relevance + delivery reliability + capability match)',
        'Explainable match breakdown highlighting why a builder fits the brief',
        'Real-time prompt refinement for complex multi-disciplinary projects'
      ],
      learnings: 'Practical insights into grounding AI recommendations with hard factual constraints to avoid hallucinated matches.'
    }
  },
  {
    id: 'fintech-escrow-engine',
    title: 'Multi-Milestone Digital Escrow Vault',
    tagline: 'State-machine driven transaction engine for milestone-based service delivery.',
    description: 'A resilient transactional backend module managing the lifecycle of project funds from deposit to verification, release, and automated dispute escrow.',
    problemSolved: 'Protects both buyers and sellers from payment default, unfinished scope, and unverified deliverable handoffs.',
    role: 'Backend Architect & Systems Engineer',
    category: 'Software',
    status: 'Production Prototype',
    technologies: ['Node.js', 'NestJS', 'Prisma', 'PostgreSQL', 'Redis', 'Payment Gateways'],
    featured: false,
    caseStudyAvailable: true,
  },
  {
    id: 'dynamic-portfolio-engine',
    title: 'Modular Capability Artifact Showcase',
    tagline: 'Component-based interactive system allowing builders to embed live working widgets.',
    description: 'An experimental UI framework that lets software and digital creators showcase interactive live prototypes directly within their portfolio profile cards.',
    problemSolved: 'Replaces static PDF resumes and dead screenshots with live, verifiable, interactive software snippets.',
    role: 'Frontend & UX Engineer',
    category: 'Experiments',
    status: 'Research & Lab',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Web Containers', 'Vite'],
    featured: false,
    caseStudyAvailable: true,
  },
  {
    id: 'analytics-dash-suite',
    title: 'E-Commerce & Service Metrics Dashboard',
    tagline: 'Comprehensive business intelligence toolkit for tracking transaction velocity and retention.',
    description: 'Data analytics platform providing cohort retention analysis, customer lifetime value modeling, and transaction funnel insights for digital commerce.',
    problemSolved: 'Enables operators to spot churn bottlenecks and identify high-value service categories instantly.',
    role: 'Data Analyst & Full-Stack Developer',
    category: 'Data',
    status: 'Concept Architecture',
    technologies: ['Python', 'Power BI', 'Google Sheets API', 'Excel Advanced Modeling', 'PostgreSQL'],
    featured: false,
    caseStudyAvailable: false,
  }
];

// Meaningful Skill Matrix Categories
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'software-dev',
    name: 'Software Development',
    tagline: 'Modern frontend, mobile, and full-stack engineering',
    description: 'Building responsive, high-performance web applications and cross-platform mobile apps with clean architectural patterns.',
    skills: [
      { name: 'JavaScript (ES6+)', context: 'Asynchronous event loops, functional patterns, modern ECMAScript standards.' },
      { name: 'TypeScript', context: 'Strict static typing, interfaces, generic utilities, type-safe full-stack contracts.' },
      { name: 'React', context: 'Component composition, custom hooks, reactive state machines, performant render cycles.' },
      { name: 'React Native', context: 'Cross-platform mobile applications, native modules, responsive touch interfaces.' },
      { name: 'Expo', context: 'Ecosystem development, managed workflows, OTA updates, push notifications.' },
      { name: 'Node.js', context: 'High-throughput event-driven microservices, REST APIs, asynchronous worker pools.' },
      { name: 'NestJS', context: 'Modular enterprise architecture, dependency injection, DTO validation, clean architecture.' },
      { name: 'FlutterFlow', context: 'Rapid visual mobile prototyping, backend integrations, and workflow orchestrations.' }
    ]
  },
  {
    id: 'backend-infra',
    name: 'Backend & Infrastructure',
    tagline: 'Reliable databases, caching, security, and payment rails',
    description: 'Architecting robust server environments, relational and document data storage, caching layers, and secure transaction workflows.',
    skills: [
      { name: 'PostgreSQL', context: 'Relational schema design, complex joins, indexing strategies, ACID guarantees.' },
      { name: 'Supabase', context: 'Managed PostgreSQL, Row-Level Security (RLS), real-time database listeners, vector search.' },
      { name: 'Firebase', context: 'Firestore NoSQL documents, Authentication, Cloud Functions, real-time sync.' },
      { name: 'Redis', context: 'In-memory caching, pub/sub messaging, session stores, rate-limiting counters.' },
      { name: 'Prisma ORM', context: 'Type-safe database queries, schema migrations, relation modeling.' },
      { name: 'REST & WebSockets', context: 'Clean API contract design, versioning, bi-directional real-time communication.' },
      { name: 'Auth & Security', context: 'JWT lifecycles, OAuth2 integration, RBAC authorization, token rotation.' },
      { name: 'Payments & Escrow', context: 'Payment gateway integration, webhook verification, multi-stage funds escrow.' }
    ]
  },
  {
    id: 'data-analytics',
    name: 'Data & Analytics',
    tagline: 'Automated data extraction, transformation, and business intelligence',
    description: 'Harvesting unstructured web data, engineering resilient pipelines, and crafting actionable analytics models to guide business decisions.',
    skills: [
      { name: 'Python', context: 'Data wrangling, script automation, analytical modeling, backend microservices.' },
      { name: 'Web Scraping', context: 'Headless automation, CAPTCHA resilience, proxy rotation, HTML structure parsing.' },
      { name: 'BeautifulSoup & Selenium', context: 'Dynamic JavaScript DOM rendering, XPath extraction, browser automation.' },
      { name: 'Power BI', context: 'Interactive visual reports, DAX calculations, executive dashboards, data modeling.' },
      { name: 'Excel & Google Sheets', context: 'Financial modeling, pivot tables, lookup formulas, data cleaning scripts.' },
      { name: 'Data Normalization', context: 'Transforming noisy heterogeneous inputs into structured relational tables.' }
    ]
  },
  {
    id: 'ai-intelligent',
    name: 'AI & Intelligent Systems',
    tagline: 'Pragmatic AI integration and autonomous workflow building',
    description: 'Actively exploring and deploying AI technologies to augment software, enhance user discovery, and build intelligent product workflows.',
    skills: [
      { name: 'LLM APIs & Prompt Design', context: 'Structured JSON outputs, few-shot prompting, constraint-guided generation.' },
      { name: 'Vector Embeddings & Search', context: 'Semantic similarity matching, vector indexing with pgvector, document retrieval.' },
      { name: 'AI Agent Workflows', context: 'Task chaining, tool calling, autonomous multi-step reasoning systems.' },
      { name: 'AI-Enabled Product Design', context: 'Integrating generative features naturally into user journeys without gimmickry.' }
    ]
  },
  {
    id: 'product-systems',
    name: 'Product & Systems Design',
    tagline: 'Ecosystem thinking, marketplace dynamics, and user empathy',
    description: 'Viewing software not as isolated code files, but as living socioeconomic systems that solve problems and align user incentives.',
    skills: [
      { name: 'Product Development', context: 'Problem discovery, user persona mapping, MVP scoping, rapid iteration.' },
      { name: 'System Architecture', context: 'Modular services, state machine lifecycles, decoupling concerns.' },
      { name: 'Marketplace Dynamics', context: 'Two-sided network effects, liquidity management, trust & safety mechanisms.' },
      { name: 'UX & Interaction Design', context: 'Information hierarchy, cognitive load reduction, purposeful design systems.' },
      { name: 'Business Modeling', context: 'Unit economics, pricing tier structures, value capture mechanisms.' },
      { name: 'Adaptive Ecosystems (AED)', context: 'Building modular software capable of evolving dynamically alongside user feedback.' }
    ]
  }
];

// "How I Build" progression steps
export const HOW_I_BUILD_STEPS = [
  {
    step: '01',
    phase: 'Understand',
    tagline: 'Deep Problem Discovery',
    description: 'Before writing a single line of code, I deconstruct the root problem, identify the humans who feel the pain, and map out the economic and emotional incentives at play.',
    keyActions: [
      'Conduct stakeholder & user journey inquiries',
      'Identify core friction points & existing workarounds',
      'Define clear metrics for what "solved" actually looks like'
    ]
  },
  {
    step: '02',
    phase: 'Design',
    tagline: 'Systems & Architecture Mapping',
    description: 'I design products as coherent ecosystems rather than disjointed feature buckets. This includes information architecture, state lifecycles, and database schemas.',
    keyActions: [
      'Map entity-relationship models and data lifecycles',
      'Design clean UI flows that reduce cognitive friction',
      'Architect modular backend services for future scalability'
    ]
  },
  {
    step: '03',
    phase: 'Build',
    tagline: 'Disciplined & Craft-Driven Engineering',
    description: 'Implementation with strong typography, type safety, modular component systems, clean separation of concerns, and resilient error handling.',
    keyActions: [
      'Write type-safe, maintainable TypeScript / Python code',
      'Implement defensive API error states & robust caching',
      'Ensure fluid responsive performance across all form factors'
    ]
  },
  {
    step: '04',
    phase: 'Test',
    tagline: 'Stress-Testing & Edge Validation',
    description: 'Subjecting systems to real-world edge cases: slow networks, unexpected inputs, payment race conditions, and UX ambiguities.',
    keyActions: [
      'Validate transactions across edge failure modes',
      'Audit accessibility, touch targets, and mobile ergonomics',
      'Verify zero-data states and informative error messaging'
    ]
  },
  {
    step: '05',
    phase: 'Learn',
    tagline: 'Empirical Feedback Gathering',
    description: 'Observing how real users interact with the working system, analyzing behavioral data, and distinguishing between expressed wishes and actual behavior.',
    keyActions: [
      'Track funnel conversion drops and user friction logs',
      'Gather qualitative feedback from early adopters',
      'Measure performance bottlenecks under real network conditions'
    ]
  },
  {
    step: '06',
    phase: 'Improve',
    tagline: 'Iterative Ecosystem Evolution',
    description: 'Refining the product continuously through Adaptive Ecosystem Development (AED)—polishing mechanics, streamlining flows, and scaling what works.',
    keyActions: [
      'Ship rapid micro-enhancements to high-leverage bottlenecks',
      'Deepen automation and AI assistance where manual labor lingers',
      'Evolve system architecture to support growing transaction volumes'
    ]
  }
];

// Professional & Learning Journey
export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    id: 'cs-foundation',
    period: 'Computer Science Education',
    title: 'Computer Science Degree Foundations',
    subtitle: 'Nigeria · Academic & Theoretical Grounding',
    category: 'Education',
    description: 'Gained rigorous grounding in core computer science principles: discrete mathematics, algorithm analysis, object-oriented design, operating systems, and database management systems.',
    highlights: [
      'Deepened mastery of data structures, computational complexity, and systems programming',
      'Built strong habits in algorithmic problem-solving and clean software architecture',
      'Collaborated on technical projects and developed foundational programming discipline'
    ],
    skillsGained: ['Algorithms', 'Data Structures', 'Database Systems', 'Software Engineering Principles', 'Object-Oriented Design']
  },
  {
    id: 'data-scraping-analytics',
    period: 'Data & Analytics Deep Dive',
    title: 'Data Extraction, Pipelines & Business Intelligence',
    subtitle: 'Applied Engineering & Market Intelligence',
    category: 'Data & Analytics',
    description: 'Expanded technical range into automated data collection and business analytics. Wrote resilient web scraping scripts in Python and modeled multi-dimensional business datasets in Power BI and Excel.',
    highlights: [
      'Engineered automated web scrapers utilizing BeautifulSoup and Selenium for market intelligence',
      'Built clean ETL pipelines transforming raw unstructured web feeds into relational database models',
      'Created interactive Power BI dashboards providing clear visibility into complex business metrics'
    ],
    skillsGained: ['Python', 'BeautifulSoup', 'Selenium', 'Power BI', 'ETL Pipelines', 'Excel Modeling']
  },
  {
    id: 'fullstack-mobile-mastery',
    period: 'Full-Stack & Mobile Development',
    title: 'Building Modern Web & Cross-Platform Applications',
    subtitle: 'Frontend, Mobile & Backend Systems',
    category: 'Software Engineering',
    description: 'Transitioned from standalone scripts to architecting full-stack web and mobile applications using React, React Native, Expo, Node.js, NestJS, and cloud databases like PostgreSQL, Supabase, and Firebase.',
    highlights: [
      'Developed responsive, accessible web applications in React and TypeScript',
      'Built cross-platform mobile apps with Expo and React Native featuring real-time state sync',
      'Implemented robust REST APIs, authentication security protocols, and state machine workflows'
    ],
    skillsGained: ['React', 'React Native', 'Expo', 'TypeScript', 'Node.js', 'NestJS', 'PostgreSQL', 'Supabase', 'Firebase']
  },
  {
    id: 'product-hustle-venture',
    period: 'Entrepreneurship & Ecosystem Building',
    title: 'Founding & Architecting Hustle Ecosystem',
    subtitle: 'From Concept to Product Architecture',
    category: 'Product & Entrepreneurship',
    description: 'Synthesizing software engineering, data systems, and product thinking into building Hustle—a comprehensive digital marketplace and capability verification ecosystem for skilled workers in Africa.',
    highlights: [
      'Formulated product vision, marketplace dynamics, and economic incentive structures',
      'Architected multi-layered system: capability verification, escrow vaults, and AI-assisted matching',
      'Designed user journeys tailored to low-bandwidth environments and high trust requirements'
    ],
    skillsGained: ['Product Strategy', 'Marketplace Architecture', 'Escrow Mechanics', 'AI Matchmaking', 'System Design']
  }
];

// Currently Building Items
export const CURRENTLY_BUILDING: CurrentlyBuildingItem[] = [
  {
    id: 'hustle-alpha',
    title: 'Hustle Ecosystem (Alpha Architecture)',
    status: 'Active Development',
    category: 'Flagship Product',
    description: 'Refining the core React Native/Expo mobile client and NestJS backend services. Polishing the escrow state machine and capability verification protocol.',
    focusArea: 'Escrow contract safety, real-time messaging latency, and mobile UI polish',
    nextMilestone: 'Alpha test with initial cohort of verified skilled creators and clients',
    progressPercentage: 72,
    tags: ['React Native', 'Expo', 'NestJS', 'Supabase', 'Escrow'],
    linkText: 'Explore Hustle Case Study',
    linkAction: 'open-hustle'
  },
  {
    id: 'ai-agents-lab',
    title: 'AI Capability Vectoring & Matchmaker',
    status: 'Research & Experimentation',
    category: 'AI & Systems',
    description: 'Prototyping vector embedding search to match complex client project briefs with builder portfolios based on technical artifact semantics.',
    focusArea: 'High-precision semantic recall and reducing prompt token overhead',
    nextMilestone: 'Benchmark matching accuracy against traditional keyword filtering',
    progressPercentage: 55,
    tags: ['Python', 'Vector DB', 'pgvector', 'Prompt Design'],
    linkText: 'View Lab Notes',
    linkAction: 'open-lab'
  },
  {
    id: 'data-scraper-suite',
    title: 'Regional Talent & Pricing Indexer',
    status: 'Active Pipeline',
    category: 'Data Engineering',
    description: 'Maintaining automated web crawlers that collect skill demand data across African tech ecosystems to inform Hustle pricing benchmarks.',
    focusArea: 'Automated anomaly detection in wage distribution feeds',
    nextMilestone: 'Export quarterly regional skill index summary report',
    progressPercentage: 85,
    tags: ['Python', 'Selenium', 'PostgreSQL', 'Power BI'],
    linkText: 'Inspect Pipeline',
    linkAction: 'open-project-scraper'
  }
];

// Thinking & Lab Notes
export const THINKING_ARTICLES: ThinkingArticle[] = [
  {
    id: 'marketplaces-trust-africa',
    title: 'Why Emerging Marketplaces Require Trust Infrastructure, Not Just Listings',
    tagline: 'Reflections on designing digital commerce systems where informal networks dominate.',
    date: '2025 / 2026',
    readTime: '4 min read',
    topic: 'Marketplace Economics',
    summary: 'A simple directory of phone numbers or portfolio links fails in emerging markets because trust is the primary bottleneck. Building real marketplace liquidity requires escrow, milestone verification, and verifiable proof of competence.',
    content: `When analyzing why so many freelance platforms and digital directories fail to gain sticky traction across African markets, one pattern becomes obvious: **trust deficit is far more expensive than discoverability deficit**.

In mature digital economies, platforms take baseline institutional trust for granted—strong legal recourse, reliable credit bureaus, and automated chargebacks. In emerging markets, transactions are traditionally negotiated through tight-knit word-of-mouth networks because people cannot afford to lose capital to phantom contractors or non-paying clients.

Therefore, an effective marketplace cannot just be a classified directory. It must function as an economic operating system:
1. **Verifiable Proof over Resumes**: Portfolios must showcase interactive artifacts and challenge outputs rather than self-proclaimed bullet points.
2. **Deterministic Escrow**: Funds must be locked in multi-stage vaults where neither party holds unilateral power to withhold or abscond.
3. **Reputation as Collateral**: Every successfully delivered milestone must feed a tamper-evident reputation graph that makes good actors more discoverable.

When software provides the trust infrastructure that society lacks, commerce can finally scale without friction.`,
    keyTakeaways: [
      'Trust friction, not discoverability, is the true bottleneck in emerging markets.',
      'Escrow state machines provide psychological safety for both sides of the transaction.',
      'Verifiable capability artifacts beat self-written resumes every time.'
    ]
  },
  {
    id: 'adaptive-ecosystems',
    title: 'Adaptive Ecosystem Development: Designing Systems That Evolve With Users',
    tagline: 'Moving past rigid feature specs toward modular, feedback-driven software loops.',
    date: '2025 / 2026',
    readTime: '5 min read',
    topic: 'System Architecture',
    summary: 'Great digital products cannot be conceived in a vacuum. By designing software as an adaptable ecosystem with modular boundaries, systems can naturally pivot and expand as user dynamics unfold.',
    content: `The traditional mindset in software development is often: *Gather requirements → Write code → Ship feature → Mark complete*. 

However, real-world user adoption is dynamic and non-linear. The moment real human beings start using a platform, they use it in ways you never predicted. 

**Adaptive Ecosystem Development (AED)** is an engineering and product philosophy built on three core pillars:

1. **Modular Boundaries**: Decouple authentication, data caching, payments, and messaging so any single sub-system can evolve or be swapped without collapsing the whole.
2. **Instrumentation from Day One**: You cannot adapt what you cannot see. Every transaction lifecycle, drop-off, and state transition should emit lightweight, observable telemetry.
3. **Incentive Alignment**: In multi-sided platforms, software rules must align the economic and operational interests of every participant (buyers, sellers, platform operators).

When you build products as adaptive systems, unexpected user behaviors become roadmap opportunities rather than technical debt.`,
    keyTakeaways: [
      'Decouple sub-systems early to facilitate rapid iteration without code fragility.',
      'Build observable telemetry into the state machine from the first sprint.',
      'Treat unexpected user behaviors as organic evolutionary signals.'
    ]
  },
  {
    id: 'pragmatic-ai-integration',
    title: 'Pragmatic AI in Production: Enhancing Workflows Without The Gimmicks',
    tagline: 'Practical lessons on applying LLMs and vector embeddings to real utility software.',
    date: '2025 / 2026',
    readTime: '4 min read',
    topic: 'AI & LLMs',
    summary: 'The goal of artificial intelligence in product development is not to slap a generic chat bubble in the corner, but to eliminate invisible friction and automate cognitive heavy-lifting in user journeys.',
    content: `There is a massive divide between AI research and practical, user-centric AI product engineering. 

Too many contemporary software applications treat AI as an afterthought—dropping an unconstrained chatbot into a sidebar and calling it "AI-powered". In real products, users do not want to chat with their database; they want their problems solved faster with less effort.

Where AI provides genuine 10x utility:
- **Semantic Translation of Ambiguous Queries**: When a non-technical client types "I need someone to make my store look like an Apple product page", vector search can map this intent to designers with minimalist e-commerce case studies.
- **Automated Requirement Scoping**: Guiding clients through conversational clarifying questions to produce a clean, structured project brief with milestones.
- **Artifact Verification**: Assisting in sanity-checking submitted deliverables against the original specification before milestone escrow release.

The best AI implementations are often invisible—they simply make the software feel remarkably intuitive and observant.`,
    keyTakeaways: [
      'Avoid superficial AI chat widgets; embed intelligence directly into existing action flows.',
      'Use vector search to bridge the vocabulary gap between clients and technical talent.',
      'Constrain AI outputs with strict JSON schemas and validation guards.'
    ]
  }
];

// Presentations & Talks Catalog
export const PRESENTATIONS_DATA: PresentationTalk[] = [
  {
    id: 'talk-escrow-trust',
    title: 'Engineering Trust: Deterministic Escrow State Machines in Emerging Markets',
    event: 'West Africa FinTech & Builders Summit',
    date: 'February 2026',
    location: 'Lagos, Nigeria (Hybrid)',
    type: 'Keynote',
    audience: '450+ Software Architects, Fintech Founders & Engineers',
    featured: true,
    abstract: 'In digital economies lacking universal institutional trust and credit bureaus, marketplace transactions suffer from extreme payment anxiety and abandonment. This keynote breaks down how deterministic finite state machines, multi-party cryptographic verification, and event-driven escrow vaults create mathematically enforceable trust boundaries that unlock cross-border commerce.',
    keyTakeaways: [
      'How to model multi-stage escrow transactions as mathematically proven deterministic finite state machines (FSM).',
      'Handling asynchronous webhook idempotency and race condition prevention during simultaneous milestone submissions.',
      'Cryptographic proof-of-work artifact hashing to resolve client-freelancer disputes objectively without manual arbitration bottlenecks.'
    ],
    tags: ['Fintech Systems', 'Escrow Architecture', 'State Machines', 'Distributed Trust', 'NestJS'],
    slidesUrl: '#',
    deckOutline: [
      { slideNumber: 1, title: 'The Anatomy of Payment Anxiety in African Digital Commerce', description: 'Examining why standard classifieds and payment links fail in high-risk environments.' },
      { slideNumber: 2, title: 'From Trust as an Emotion to Trust as an Invariant', description: 'Transforming qualitative human promises into mathematically enforced state conditions.' },
      { slideNumber: 3, title: 'State Transition Diagrams & Escrow Lifecycle', description: 'Deep dive into CREATED -> FUNDED -> IN_PROGRESS -> SUBMITTED -> VERIFIED -> SETTLED.' },
      { slideNumber: 4, title: 'Idempotency, Concurrency & Webhook Hardening', description: 'Guaranteeing zero double-spends and reliable payout triggers in unstable network conditions.' },
      { slideNumber: 5, title: 'Lessons from Hustle Escrow Engine v1', description: 'Production telemetry, failure mode recoveries, and future cryptographic escrow protocols.' }
    ]
  },
  {
    id: 'talk-ai-semantic-search',
    title: 'Beyond Keywords: Practical Vector Embeddings & Semantic Search in Production',
    event: 'Lagos Developer Community Tech Day',
    date: 'December 2025',
    location: 'Lagos, Nigeria',
    type: 'Technical Workshop',
    audience: '300+ Backend Engineers & Data Scientists',
    featured: true,
    abstract: 'A hands-on architectural workshop exploring why traditional lexical search (like SQL LIKE or inverted indexes) fails when matching complex, unstructured product briefs with candidate skills. Demonstrates how to build an end-to-end vector indexing and retrieval pipeline with pgvector, cosine similarity metrics, and prompt constraints.',
    keyTakeaways: [
      'Bridging the semantic vocabulary gap between non-technical buyers and specialized developers.',
      'Setting up PostgreSQL with pgvector for high-performance approximate nearest neighbor (HNSW) indexing.',
      'Grounding LLM scoring with hard structured constraints to eliminate hallucinated qualifications.'
    ],
    tags: ['AI & Vector Search', 'pgvector', 'PostgreSQL', 'NLP', 'System Design'],
    slidesUrl: '#',
    deckOutline: [
      { slideNumber: 1, title: 'Why Keyword Matching Breaks for Complex Tasks', description: 'Comparing lexical TF-IDF vs dense dimensional embeddings.' },
      { slideNumber: 2, title: 'Embedding Model Selection & Dimensionality Tradeoffs', description: 'Latency vs accuracy benchmarks for resource-constrained production workloads.' },
      { slideNumber: 3, title: 'Vector Indexing in PostgreSQL with pgvector', description: 'Practical HNSW vs IVFFlat index tuning and similarity thresholding.' },
      { slideNumber: 4, title: 'Hybrid Search Architecture', description: 'Combining exact metadata filters (budget, timezone, tech) with semantic vector rankers.' }
    ]
  },
  {
    id: 'talk-distributed-scraping',
    title: 'Harvesting the Unstructured Web: Resilient Scraping Pipelines at Scale',
    event: 'African Open Data & Analytics Forum',
    date: 'October 2025',
    location: 'Virtual / Global Stream',
    type: 'Conference Talk',
    audience: '600+ Global Attendees & Data Engineers',
    featured: false,
    abstract: 'A deep-dive technical presentation on architecting headless browser worker pools capable of extracting thousands of daily job listings and wage indicators across heterogeneous regional portals without getting throttled or crashing on dynamic SPAs.',
    keyTakeaways: [
      'Choreographing proxy rotation, exponential backoffs, and headless browser session recycling.',
      'ETL pipeline architecture using Python, Redis task queues, and automated schema normalization.',
      'Transforming raw extracted HTML into structured Power BI market intelligence dashboards.'
    ],
    tags: ['Data Engineering', 'Python', 'Web Automation', 'ETL Pipelines', 'Power BI'],
    slidesUrl: '#',
    deckOutline: [
      { slideNumber: 1, title: 'The Fragmented Landscape of African Tech Labor Data', description: 'Why reliable compensation data requires automated continuous web extraction.' },
      { slideNumber: 2, title: 'Surviving Defensive Anti-Bot Systems', description: 'Fingerprint randomization, header rotation, and DOM mutation observers.' },
      { slideNumber: 3, title: 'Queue Architecture with Celery & Redis', description: 'Fault-tolerant job scheduling and automated dead-letter queue retries.' },
      { slideNumber: 4, title: 'From Raw HTML to Relational Power BI Insights', description: 'Structuring wage distributions and skill demand indices for decision makers.' }
    ]
  },
  {
    id: 'talk-cs-product-ecosystems',
    title: 'Adaptive Ecosystem Development: Applying CS First Principles to Startups',
    event: 'University Tech Innovation & Venture Series',
    date: 'August 2025',
    location: 'Abuja Tech Hub',
    type: 'Keynote',
    audience: '400+ Students, Aspiring Founders & Engineers',
    featured: false,
    abstract: 'How foundational Computer Science concepts—such as modularity, graph theory, state machines, and algorithmic complexity—directly translate into building resilient digital startups that adapt smoothly to real-world user friction.',
    keyTakeaways: [
      'Applying the principle of separation of concerns to both code repositories and company business units.',
      'Why early-stage products should be built as modular ecosystems rather than monolithic feature wishlists.',
      'The journey of transitioning from computer science graduate to full-stack venture architect.'
    ],
    tags: ['Computer Science', 'Product Strategy', 'Entrepreneurship', 'System Architecture'],
    slidesUrl: '#',
    deckOutline: [
      { slideNumber: 1, title: 'The CS Graduate Dilemma: Syntax vs Systems', description: 'Why mastering mental models matters far more than memorizing framework APIs.' },
      { slideNumber: 2, title: 'Software as Socioeconomic Systems', description: 'How user incentives and technical invariants mirror distributed consensus.' },
      { slideNumber: 3, title: 'The 6-Phase Build Philosophy', description: 'Understand, Design, Build, Test, Learn, and Adaptively Improve.' }
    ]
  },
  {
    id: 'talk-mobile-offline-first',
    title: 'Building High-Performance Mobile Apps for Low-Bandwidth Networks',
    event: 'Cross-Platform Mobile Dev Meetup',
    date: 'May 2025',
    location: 'Virtual / Online Webinar',
    type: 'Panel Discussion',
    audience: '250+ React Native & Flutter Developers',
    featured: false,
    abstract: 'Panel discussion and technical overview exploring mobile UI/UX optimization, optimistic UI state updates, offline cache synchronization, and lightweight asset bundling in emerging market environments with intermittent 3G/4G connectivity.',
    keyTakeaways: [
      'Implementing optimistic local UI updates with automatic conflict resolution upon reconnection.',
      'Minimizing initial app bundle size and payload serialization overhead using Expo & hermes engine.',
      'Designing touch ergonomics and low-latency interaction feedback for mid-tier Android hardware.'
    ],
    tags: ['React Native', 'Expo', 'Mobile Optimization', 'Offline-First', 'Performance'],
    slidesUrl: '#',
    deckOutline: [
      { slideNumber: 1, title: 'Network Reality Check: 3G Latency & Packet Drops', description: 'Why web apps that feel fast on fiber fail in real-world African field tests.' },
      { slideNumber: 2, title: 'Optimistic State Reconciliation', description: 'Local-first stores, mutation queues, and background sync engines.' },
      { slideNumber: 3, title: 'Memory Footprint & Render Optimization', description: 'Virtual list virtualization, memoized selectors, and asset downsampling.' }
    ]
  }
];
