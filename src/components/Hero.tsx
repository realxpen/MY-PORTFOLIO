import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Github, 
  Linkedin, 
  Mail, 
  Cpu, 
  Database, 
  ShieldCheck, 
  Smartphone,
  ExternalLink,
  Layers,
  Terminal,
  Activity,
  Compass,
  Radio
} from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface HeroProps {
  onOpenHustleModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenHustleModal }) => {
  const { currentThemeInfo, theme } = useTheme();
  const [activeLayer, setActiveLayer] = useState<number>(0);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const architectureLayers = [
    {
      id: 0,
      title: 'Neural Experience & Mobile',
      tag: '01 // INTERACTION LAYER',
      icon: Smartphone,
      description: 'Cross-platform mobile applications (React Native, Expo) & responsive web frontends built with tactile haptic feedback and instantaneous interaction loops.',
      technologies: ['React Native', 'Expo', 'TypeScript', 'Tailwind', 'Motion UI'],
      telemetry: 'RENDER: 120FPS · LATENCY: <8ms'
    },
    {
      id: 1,
      title: 'Autonomous State Core',
      tag: '02 // COMPUTATION LAYER',
      icon: Cpu,
      description: 'Modular enterprise backends (NestJS, Node.js) orchestrating distributed state machines, bi-directional WebSockets, and ACID-compliant transaction engines.',
      technologies: ['NestJS', 'Node.js', 'WebSockets', 'Prisma', 'Event Streams'],
      telemetry: 'THROUGHPUT: 18k OPS/SEC · FAULT-TOLERANT'
    },
    {
      id: 2,
      title: 'Vector Vault & Cache Matrix',
      tag: '03 // DATA ARCHIVE LAYER',
      icon: Database,
      description: 'ACID relational infrastructure (PostgreSQL, Supabase) paired with ultra-low latency Redis memory caches and vector embeddings for semantic intelligence.',
      technologies: ['PostgreSQL', 'Supabase', 'Redis', 'Vector Embeddings', 'SQL'],
      telemetry: 'RECALL: 99.4% · REPLICATION: ACTIVE'
    },
    {
      id: 3,
      title: 'Sovereign Trust & Escrow Vault',
      tag: '04 // INCENTIVE INFRASTRUCTURE',
      icon: ShieldCheck,
      description: 'Milestone escrow contract vaults, tamper-resistant skill verification graphs, and AI matchmaking agents that empower cross-border African commerce.',
      technologies: ['Escrow Vaults', 'Trust Graphs', 'AI Matchmakers', 'Arbitration'],
      telemetry: 'VAULT: ENCRYPTED · ZERO-TRUST'
    }
  ];

  const mapNodes = [
    { id: 'lagos', name: 'LAGOS', x: 220, y: 190, coords: '06°27\'N 03°23\'E', role: 'Commercial Grid Core' },
    { id: 'abuja', name: 'ABUJA', x: 250, y: 150, coords: '09°04\'N 07°29\'E', role: 'Sovereign Tech Origin' },
    { id: 'accra', name: 'ACCRA', x: 170, y: 200, coords: '05°36\'N 00°11\'W', role: 'West Atlantic Relay' },
    { id: 'nairobi', name: 'NAIROBI', x: 380, y: 220, coords: '01°17\'S 36°49\'E', role: 'East African Silicon Hub' },
    { id: 'kigali', name: 'KIGALI', x: 340, y: 240, coords: '01°57\'S 30°03\'E', role: 'Innovation Crucible' },
    { id: 'london', name: 'LONDON', x: 230, y: 60, coords: '51°30\'N 00°07\'W', role: 'Global Capital Link' },
    { id: 'sf', name: 'SAN FRANCISCO', x: 70, y: 90, coords: '37°46\'N 122°25\'W', role: 'Frontier AI Nexus' },
  ];

  return (
    <section 
      id="hero" 
      className="relative min-h-[96vh] pt-32 sm:pt-36 pb-20 flex items-center justify-center overflow-hidden transition-colors duration-500 bg-topo-pattern"
      style={{ backgroundColor: 'var(--bg-main)' }}
    >
      {/* Dynamic Ceremonial Solar Halo Disc (Inspired by Image 2) */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[700px] sm:h-[900px] rounded-full pointer-events-none opacity-40 blur-3xl"
        style={{
          background: `radial-gradient(circle, var(--glow-accent) 0%, transparent 70%)`
        }}
      />

      {/* Rotating Totemic Halo Rings */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-20 hidden md:block">
        <div className="w-full h-full rounded-full border border-dashed animate-spin-slow" style={{ borderColor: 'var(--accent)' }} />
        <div className="absolute inset-8 rounded-full border border-dotted animate-spin-reverse-slow" style={{ borderColor: 'var(--accent-secondary)' }} />
        <div className="absolute inset-20 rounded-full border border-dashed opacity-50" style={{ borderColor: 'var(--accent-gold)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: The Sovereign Architect Identity */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Origin Telemetry Banner */}
            <div className="flex flex-wrap items-center gap-2">
              <div 
                className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full text-[10px] uppercase font-mono tracking-widest font-semibold border cyber-plate"
                style={{
                  color: 'var(--accent)',
                  borderColor: 'var(--border-active)',
                }}
              >
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: 'var(--accent)' }}></span>
                  <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: 'var(--accent-secondary)' }}></span>
                </span>
                <span>ORIGIN // NIGERIA · GLOBAL SOVEREIGNTY</span>
                <span className="opacity-40">·</span>
                <span style={{ color: 'var(--text-title)' }}>09°04'N 07°29'E</span>
              </div>

              <div 
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-mono uppercase tracking-wider border"
                style={{
                  color: 'var(--accent-gold)',
                  borderColor: 'var(--border-subtle)',
                  background: 'var(--bg-card)'
                }}
              >
                <Radio className="w-3 h-3 animate-pulse" />
                <span>AFROFUTURIST TECH MATRIX</span>
              </div>
            </div>

            {/* Monumental Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif-mythic font-bold tracking-tight leading-[0.95] uppercase">
                <span style={{ color: 'var(--text-title)' }}>AYOMIDE</span><br />
                <span className={theme === 'solar' ? 'text-solar-magma' : theme === 'codex' ? 'text-gold-foil' : 'text-terracotta-flame'}>
                  DAVID
                </span><br />
                <span style={{ color: 'var(--text-title)' }}>OLADEJI</span>
              </h1>
              
              <p className="text-xs sm:text-sm font-mono tracking-[0.28em] uppercase pt-2 flex items-center gap-2" style={{ color: 'var(--accent)' }}>
                <span className="w-4 h-[1px]" style={{ backgroundColor: 'var(--accent)' }}></span>
                Computer Scientist · Product Builder · Systems Architect
              </p>
            </div>

            {/* Poetic Inscription (Directly inspired by Image 4 Gold Script) */}
            <div 
              className="p-4 sm:p-5 rounded-2xl border corner-bracket relative cyber-plate"
              style={{
                borderColor: 'var(--border-subtle)',
                backgroundColor: 'var(--bg-card)'
              }}
            >
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-12 rounded-full shrink-0" style={{ background: 'linear-gradient(to bottom, var(--accent), var(--accent-secondary))' }} />
                <div>
                  <p className="font-script-gold text-2xl sm:text-3xl leading-snug tracking-wide" style={{ color: 'var(--accent-gold)' }}>
                    "The words I never got to say — and the digital infrastructure engineered to say them."
                  </p>
                  <p className="text-xs sm:text-sm mt-1.5 leading-relaxed font-normal" style={{ color: 'var(--text-body)' }}>
                    {PERSONAL_INFO.bioSummary}
                  </p>
                </div>
              </div>
            </div>

            {/* Core Capability Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                'Distributed Systems',
                'Hustle Ecosystem Lead',
                'Decentralized Trust & Escrow',
                'AI Agent Networks',
                'Vector Intelligence',
                'Full-Stack Architecture'
              ].map((domain) => (
                <span 
                  key={domain}
                  className="px-3 py-1 rounded-lg text-[10px] font-mono uppercase tracking-wider border transition-all duration-300 hover:scale-105 cyber-plate"
                  style={{
                    color: 'var(--text-body)',
                    borderColor: 'var(--border-subtle)',
                  }}
                >
                  <span className="opacity-50 mr-1" style={{ color: 'var(--accent)' }}>+</span>
                  {domain}
                </span>
              ))}
            </div>

            {/* Action Triggers */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                id="hero-hustle-cta"
                onClick={onOpenHustleModal}
                className="px-6 py-3.5 text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 flex items-center gap-3 shadow-xl group cursor-pointer text-white relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-secondary) 100%)',
                  boxShadow: '0 0 25px -4px var(--glow-accent)'
                }}
              >
                <Sparkles className="w-4 h-4 text-white animate-spin-slow" />
                <span>Explore Hustle Ecosystem</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#work"
                id="hero-work-cta"
                className="px-6 py-3.5 text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 flex items-center gap-2 border cyber-plate"
                style={{
                  color: 'var(--text-title)',
                  borderColor: 'var(--border-subtle)',
                }}
              >
                <span>View System Codex</span>
                <span className="text-xs" style={{ color: 'var(--accent)' }}>↓</span>
              </a>

              {/* Quick Transmission Links */}
              <div className="flex items-center gap-2 pl-2">
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border transition-all hover:scale-110 cyber-plate"
                  style={{ color: 'var(--text-body)', borderColor: 'var(--border-subtle)' }}
                  aria-label="GitHub Repository"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border transition-all hover:scale-110 cyber-plate"
                  style={{ color: 'var(--text-body)', borderColor: 'var(--border-subtle)' }}
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${SOCIAL_LINKS.email}`}
                  className="p-3 rounded-full border transition-all hover:scale-110 cyber-plate"
                  style={{ color: 'var(--text-body)', borderColor: 'var(--border-subtle)' }}
                  aria-label="Send Direct Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Afrofuturist Topographic Map & Cybernetic Engine */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Interactive Topographic Circuit Cartography Box (Inspired by Image 1) */}
            <div 
              className="rounded-3xl border p-5 sm:p-6 corner-bracket relative overflow-hidden cyber-plate"
              style={{
                borderColor: 'var(--border-subtle)',
                backgroundColor: 'var(--bg-card)'
              }}
            >
              {/* Header Telemetry */}
              <div className="flex items-center justify-between pb-3 border-b mb-4" style={{ borderColor: 'var(--border-subtle)' }}>
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 animate-spin-slow" style={{ color: 'var(--accent)' }} />
                  <span className="text-[10px] font-mono uppercase tracking-widest font-bold" style={{ color: 'var(--text-title)' }}>
                    CARTOGRAPHY // SOVEREIGN GRID
                  </span>
                </div>
                <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded" style={{ backgroundColor: 'var(--bg-surface)', color: 'var(--accent-gold)' }}>
                  LIVE MATRIX
                </span>
              </div>

              {/* Glowing Topographic Map Canvas */}
              <div className="relative w-full h-52 sm:h-56 rounded-2xl overflow-hidden border mb-4" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}>
                
                {/* SVG Topographic Contours & Circuit Traces */}
                <svg className="w-full h-full absolute inset-0 opacity-70" viewBox="0 0 450 300">
                  <defs>
                    <linearGradient id="topoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="var(--accent-secondary)" stopOpacity="0.3" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Topographic elevation curves */}
                  <path d="M 20,80 Q 90,30 180,60 T 320,50 T 430,90" fill="none" stroke="var(--border-subtle)" strokeWidth="1" />
                  <path d="M 10,130 Q 110,90 220,120 T 360,110 T 440,140" fill="none" stroke="var(--border-subtle)" strokeWidth="1.2" />
                  <path d="M 30,180 Q 140,150 250,180 T 380,170 T 440,200" fill="none" stroke="var(--border-subtle)" strokeWidth="1" />
                  <path d="M 20,240 Q 120,210 240,240 T 360,230 T 430,260" fill="none" stroke="var(--border-subtle)" strokeWidth="0.8" />

                  {/* Circuit highway conduits connecting cities */}
                  <path d="M 70,90 L 230,60 L 250,150 L 220,190 L 170,200" fill="none" stroke="url(#topoGradient)" strokeWidth="1.8" strokeDasharray="4 2" />
                  <path d="M 250,150 L 380,220 L 340,240 L 220,190" fill="none" stroke="url(#topoGradient)" strokeWidth="1.8" strokeDasharray="3 3" />
                  
                  {/* Nodes */}
                  {mapNodes.map((node) => (
                    <g 
                      key={node.id} 
                      className="cursor-pointer transition-transform hover:scale-125"
                      onMouseEnter={() => setHoveredNode(node.name)}
                      onMouseLeave={() => setHoveredNode(null)}
                    >
                      <circle cx={node.x} cy={node.y} r="5" fill="var(--accent)" filter="url(#glow)" />
                      <circle cx={node.x} cy={node.y} r="2" fill="#FFFFFF" />
                      <circle cx={node.x} cy={node.y} r="10" fill="none" stroke="var(--accent)" strokeWidth="0.8" opacity="0.6" className="animate-ping" />
                      <text x={node.x + 8} y={node.y + 3} fill="var(--text-title)" fontSize="8" fontFamily="var(--font-mono)" fontWeight="bold">
                        {node.name}
                      </text>
                    </g>
                  ))}
                </svg>

                {/* Node telemetry tooltip */}
                <div className="absolute bottom-2 left-2 right-2 p-2 rounded-lg backdrop-blur-md border flex items-center justify-between text-[9px] font-mono" style={{ backgroundColor: 'rgba(0,0,0,0.6)', borderColor: 'var(--border-subtle)', color: 'var(--text-title)' }}>
                  <span>ACTIVE NODE: <strong style={{ color: 'var(--accent)' }}>{hoveredNode || 'LAGOS // CORE'}</strong></span>
                  <span style={{ color: 'var(--accent-gold)' }}>LATENCY: 12ms</span>
                </div>
              </div>

              {/* Architecture Layer Switcher */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                    ACTIVE ARCHITECTURE STACK
                  </span>
                  <span className="text-[9px] font-mono" style={{ color: 'var(--accent)' }}>
                    [{activeLayer + 1} / {architectureLayers.length}]
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-1.5 p-1 rounded-xl border" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}>
                  {architectureLayers.map((layer, idx) => {
                    const Icon = layer.icon;
                    const isSelected = activeLayer === idx;
                    return (
                      <button
                        key={layer.id}
                        onClick={() => setActiveLayer(idx)}
                        className={`p-2 rounded-lg flex flex-col items-center gap-1 transition-all ${
                          isSelected ? 'shadow-md' : 'opacity-60 hover:opacity-100'
                        }`}
                        style={{
                          backgroundColor: isSelected ? 'var(--bg-card-hover)' : 'transparent',
                          border: isSelected ? '1px solid var(--border-active)' : '1px solid transparent',
                          color: isSelected ? 'var(--accent)' : 'var(--text-body)'
                        }}
                      >
                        <Icon className="w-4 h-4" />
                        <span className="text-[8px] font-mono font-bold">0{idx + 1}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Selected Layer Details */}
                <div className="p-3 rounded-xl border cyber-plate" style={{ borderColor: 'var(--border-subtle)' }}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[9px] font-mono uppercase font-bold" style={{ color: 'var(--accent)' }}>
                      {architectureLayers[activeLayer].tag}
                    </span>
                    <span className="text-[8px] font-mono px-1.5 py-0.5 rounded" style={{ backgroundColor: 'var(--bg-surface)', color: 'var(--accent-gold)' }}>
                      {architectureLayers[activeLayer].telemetry}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold font-serif-mythic mb-1" style={{ color: 'var(--text-title)' }}>
                    {architectureLayers[activeLayer].title}
                  </h4>
                  <p className="text-[11px] leading-relaxed mb-2" style={{ color: 'var(--text-body)' }}>
                    {architectureLayers[activeLayer].description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {architectureLayers[activeLayer].technologies.map((tech) => (
                      <span key={tech} className="text-[9px] font-mono px-2 py-0.5 rounded border" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)', color: 'var(--text-muted)' }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Quick Ecosystem Metric Pill */}
            <div className="p-3.5 rounded-2xl border flex items-center justify-between text-xs font-mono cyber-plate" style={{ borderColor: 'var(--border-subtle)' }}>
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 animate-pulse" style={{ color: 'var(--accent)' }} />
                <span style={{ color: 'var(--text-title)' }}>SYSTEM INTEGRITY: 100% NOMINAL</span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: 'var(--accent-gold)' }}>
                VERIFIED ARCHITECT
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
