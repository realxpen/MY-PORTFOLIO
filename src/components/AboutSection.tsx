import React, { useState } from 'react';
import { 
  Wrench, 
  BookOpen, 
  Lightbulb, 
  BrainCircuit, 
  Compass, 
  Sparkles,
  ShieldCheck,
  Cpu,
  Globe2,
  Layers,
  ArrowRight
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const AboutSection: React.FC = () => {
  const { currentThemeInfo } = useTheme();
  const [activeTab, setActiveTab] = useState<'philosophy' | 'evolution'>('philosophy');

  const coreValues = [
    {
      title: 'Build',
      glyph: '01 // ARCHITECTURE',
      action: 'Carving resilient digital software & sovereign products.',
      description: 'Beyond mere syntax, engineering durable, high-throughput systems that function reliably across variable network conditions and real-world African infrastructure.',
      icon: Wrench,
    },
    {
      title: 'Learn',
      glyph: '02 // REASONING',
      action: 'Voracious exploration of distributed fundamentals.',
      description: 'Mastering deep computer science theory, discrete mathematics, ACID transaction consensus, and frontier vector intelligence to architect timeless tech.',
      icon: BookOpen,
    },
    {
      title: 'Solve',
      glyph: '03 // SYNTHESIS',
      action: 'Translating ambiguous economic friction into clean software rails.',
      description: 'Deconstructing fragmented trust networks and predatory marketplace fees into mathematical escrow state machines, verified capability proofs, and liquidity.',
      icon: Lightbulb,
    },
    {
      title: 'Think',
      glyph: '04 // ECOSYSTEM',
      action: 'Synthesizing market incentives, human psychology, and technology.',
      description: 'Viewing software not as isolated applications, but as interconnected socio-economic ecosystems that create generational leverage for skilled builders.',
      icon: BrainCircuit,
    }
  ];

  const evolutionSteps = [
    {
      stage: 'I',
      glyph: 'GENESIS // 2020',
      title: 'Computer Science Rigor',
      subtitle: 'Algorithmic Foundations & Operating Systems',
      description: 'Studying Computer Science in Nigeria, mastering algorithms, memory registers, network socket lifecycles, and computational complexity.',
      tag: 'Theoretical Core'
    },
    {
      stage: 'II',
      glyph: 'HARVEST // 2022',
      title: 'Data Systems & Automation',
      subtitle: 'Extracting Signals from Market Chaos',
      description: 'Architecting distributed web crawlers in Python, building ETL pipelines, and delivering business intelligence dashboards for enterprise analytics.',
      tag: 'Data Engineering'
    },
    {
      stage: 'III',
      glyph: 'FABRICATION // 2024',
      title: 'Full-Stack & Mobile Ecosystems',
      subtitle: 'Cross-Platform Mobile & Microservices',
      description: 'Engineering high-performance React Native & Expo mobile suites, coupled with NestJS microservices, Redis caching tiers, and ACID databases.',
      tag: 'Full-Stack Execution'
    },
    {
      stage: 'IV',
      glyph: 'SOVEREIGNTY // 2026',
      title: 'Hustle & Sovereign Tech',
      subtitle: 'Decentralized Trust & Economic Empowerment',
      description: 'Founding Hustle to unlock high-skilled African talent through verifiable cryptographic capability proof, escrow vaults, and intelligent matchmaking.',
      tag: 'Ecosystem Architecture'
    }
  ];

  return (
    <section 
      id="about" 
      className="py-28 relative border-t transition-colors duration-500"
      style={{
        backgroundColor: 'var(--bg-main)',
        borderColor: 'var(--border-subtle)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div 
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest font-semibold mb-3 border cyber-plate"
              style={{
                color: 'var(--accent)',
                borderColor: 'var(--border-active)'
              }}
            >
              <Compass className="w-3 h-3" />
              <span>CODEX // 01 · IDENTITY & MANIFESTO</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-serif-mythic font-bold tracking-tight uppercase" style={{ color: 'var(--text-title)' }}>
              THE SOVEREIGN <span style={{ color: 'var(--accent)' }}>BUILDER</span>
            </h2>
            
            <p className="text-xs sm:text-sm font-mono tracking-wider mt-2" style={{ color: 'var(--text-muted)' }}>
              WHERE ANCIENT AFRICAN ARCHITECTURAL PHILOSOPHY MEETS MODERN COMPUTATION
            </p>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex p-1.5 rounded-full border cyber-plate" style={{ borderColor: 'var(--border-subtle)' }}>
            <button
              onClick={() => setActiveTab('philosophy')}
              className={`px-5 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                activeTab === 'philosophy' ? 'shadow-md text-white' : 'opacity-60'
              }`}
              style={{
                background: activeTab === 'philosophy' ? 'linear-gradient(135deg, var(--accent), var(--accent-secondary))' : 'transparent',
                color: activeTab === 'philosophy' ? '#FFFFFF' : 'var(--text-body)'
              }}
            >
              Four Pillars
            </button>
            <button
              onClick={() => setActiveTab('evolution')}
              className={`px-5 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                activeTab === 'evolution' ? 'shadow-md text-white' : 'opacity-60'
              }`}
              style={{
                background: activeTab === 'evolution' ? 'linear-gradient(135deg, var(--accent), var(--accent-secondary))' : 'transparent',
                color: activeTab === 'evolution' ? '#FFFFFF' : 'var(--text-body)'
              }}
            >
              Chronicle & Evolution
            </button>
          </div>
        </div>

        {/* Tab 1: Four Pillars Philosophy */}
        {activeTab === 'philosophy' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeIn">
            {coreValues.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={pillar.title}
                  className="rounded-3xl border p-6 sm:p-7 corner-bracket flex flex-col justify-between cyber-plate group relative overflow-hidden"
                  style={{
                    borderColor: 'var(--border-subtle)',
                    backgroundColor: 'var(--bg-card)'
                  }}
                >
                  {/* Subtle top glow bar */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'linear-gradient(90deg, var(--accent), var(--accent-secondary))' }} />

                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div 
                        className="w-12 h-12 rounded-2xl flex items-center justify-center border transition-transform group-hover:scale-110"
                        style={{
                          backgroundColor: 'var(--bg-surface)',
                          borderColor: 'var(--border-subtle)',
                          color: 'var(--accent)'
                        }}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[9px] font-mono tracking-widest opacity-60" style={{ color: 'var(--accent-gold)' }}>
                        {pillar.glyph}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold font-serif-mythic mb-2" style={{ color: 'var(--text-title)' }}>
                      {pillar.title}
                    </h3>
                    
                    <p className="text-xs font-semibold mb-3 leading-relaxed" style={{ color: 'var(--accent)' }}>
                      {pillar.action}
                    </p>

                    <p className="text-xs leading-relaxed" style={{ color: 'var(--text-body)' }}>
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t flex items-center justify-between text-[9px] font-mono" style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-muted)' }}>
                    <span>STATUS: ACTIVE</span>
                    <span style={{ color: 'var(--accent)' }}>PROTOCOL // VERIFIED</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: Chronicle & Evolution */}
        {activeTab === 'evolution' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeIn">
            {evolutionSteps.map((step) => (
              <div 
                key={step.stage}
                className="rounded-3xl border p-6 sm:p-7 corner-bracket flex flex-col justify-between cyber-plate group"
                style={{
                  borderColor: 'var(--border-subtle)',
                  backgroundColor: 'var(--bg-card)'
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span 
                      className="w-8 h-8 rounded-full flex items-center justify-center font-serif-mythic font-bold text-xs border"
                      style={{
                        backgroundColor: 'var(--bg-surface)',
                        borderColor: 'var(--border-active)',
                        color: 'var(--accent)'
                      }}
                    >
                      {step.stage}
                    </span>
                    <span className="text-[9px] font-mono tracking-widest uppercase px-2 py-0.5 rounded border" style={{ color: 'var(--accent-gold)', borderColor: 'var(--border-subtle)' }}>
                      {step.glyph}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-serif-mythic mb-1" style={{ color: 'var(--text-title)' }}>
                    {step.title}
                  </h3>
                  <p className="text-xs font-semibold mb-3" style={{ color: 'var(--accent)' }}>
                    {step.subtitle}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--text-body)' }}>
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t flex items-center justify-between text-[9px] font-mono" style={{ borderColor: 'var(--border-subtle)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>PHASE</span>
                  <span className="font-bold px-2 py-0.5 rounded" style={{ backgroundColor: 'var(--bg-surface)', color: 'var(--accent)' }}>
                    {step.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Sovereign Bio Callout Card */}
        <div 
          className="mt-12 p-8 sm:p-10 rounded-3xl border corner-bracket relative overflow-hidden cyber-plate"
          style={{
            borderColor: 'var(--border-subtle)',
            backgroundColor: 'var(--bg-card)'
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2">
                <Globe2 className="w-4 h-4" style={{ color: 'var(--accent)' }} />
                <span className="text-[10px] font-mono uppercase tracking-widest font-bold" style={{ color: 'var(--accent-gold)' }}>
                  AFRICAN TECHNOLOGICAL SOVEREIGNTY
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif-mythic font-bold" style={{ color: 'var(--text-title)' }}>
                Building For The Next 1 Billion Global Builders
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
                {PERSONAL_INFO.bioSummary} My mission is to architect resilient digital commerce, distributed trust primitives, and high-impact applications that eliminate geographic barriers for African software engineering, design, and product leadership.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <div className="p-4 rounded-2xl border" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}>
                <span className="text-[9px] font-mono uppercase tracking-widest block mb-1" style={{ color: 'var(--text-muted)' }}>
                  CURRENT AVAILABILITY
                </span>
                <p className="text-xs font-semibold" style={{ color: 'var(--accent)' }}>
                  {PERSONAL_INFO.availability}
                </p>
              </div>

              <a
                href="#hustle"
                className="w-full py-3 px-5 rounded-xl font-mono text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 transition-all text-white shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-secondary) 100%)',
                }}
              >
                <span>Inspect Flagship Ecosystem</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
