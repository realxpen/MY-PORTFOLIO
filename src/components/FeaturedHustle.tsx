import React, { useState } from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  BadgeCheck, 
  MessageSquare, 
  Network, 
  Cpu, 
  ArrowRight, 
  CheckCircle2,
  Lock,
  Workflow,
  Search,
  Zap,
  TrendingUp,
  Layers,
  Radio,
  Key
} from 'lucide-react';
import { HUSTLE_PROJECT } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface FeaturedHustleProps {
  onOpenCaseStudy: () => void;
}

export const FeaturedHustle: React.FC<FeaturedHustleProps> = ({ onOpenCaseStudy }) => {
  const { currentThemeInfo } = useTheme();
  const [activeTab, setActiveTab] = useState<'architecture' | 'workflow' | 'ecosystem'>('architecture');
  const [activeWorkflowStep, setActiveWorkflowStep] = useState<number>(0);

  const workflowSteps = [
    {
      step: '01',
      title: 'Capability Verification & Proof-of-Work',
      actor: 'Skilled African Builder',
      desc: 'Talent generates verifiable interactive capability artifacts rather than embellishing static text resumes. Verified code benchmarks and design tokens establish instant credibility.',
      detail: 'Cryptographic proof eliminates credential fraud across international borders.',
      icon: BadgeCheck
    },
    {
      step: '02',
      title: 'AI Semantic Discovery & Scoping',
      actor: 'Client / Global Enterprise',
      desc: 'Clients formulate project objectives in unstructured natural language. Vector embedding matchmakers pair requirements with verified builder capability profiles.',
      detail: 'Reduces scoping ambiguity before contracts are cryptographically committed.',
      icon: Search
    },
    {
      step: '03',
      title: 'Deterministic Escrow Vault Locking',
      actor: 'Financial Subsystem Rail',
      desc: 'Funds are securely locked into multi-stage milestone vaults. The builder commences work with 100% mathematical certainty of payout upon milestone delivery.',
      detail: 'Eliminates payment withholding and speculative currency volatility.',
      icon: Lock
    },
    {
      step: '04',
      title: 'Delivery Verification & Trust Graph Mutation',
      actor: 'Ecosystem Core Matrix',
      desc: 'Deliverables pass automated or peer review validation. Instant vault unlock triggers an immutable trust score increase across the builder’s global profile.',
      detail: 'Transforms successful deliverable output into permanent reputational equity.',
      icon: TrendingUp
    }
  ];

  return (
    <section 
      id="hustle" 
      className="py-28 relative border-t overflow-hidden transition-colors duration-500"
      style={{
        backgroundColor: 'var(--bg-main)',
        borderColor: 'var(--border-subtle)'
      }}
    >
      {/* Background Solar Flare & Glowing Conduit */}
      <div 
        className="absolute top-10 right-10 w-[600px] h-[500px] rounded-full pointer-events-none opacity-20 blur-[130px]"
        style={{ background: 'radial-gradient(circle, var(--glow-accent) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Flagship Header Banner */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div>
            <div 
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest font-semibold mb-3.5 border cyber-plate"
              style={{
                color: 'var(--accent)',
                borderColor: 'var(--border-active)'
              }}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>FLAGSHIP VENTURE // PROTOCOL 02</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-serif-mythic font-bold tracking-tight uppercase" style={{ color: 'var(--text-title)' }}>
              HUSTLE <span style={{ color: 'var(--accent)' }}>ECOSYSTEM</span>
            </h2>
            
            <p className="text-xs sm:text-sm font-mono tracking-wider mt-2 max-w-3xl" style={{ color: 'var(--text-body)' }}>
              {HUSTLE_PROJECT.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenCaseStudy}
              className="px-6 py-3 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2.5 shadow-xl text-white group cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-secondary) 100%)',
                boxShadow: '0 0 25px -4px var(--glow-accent)'
              }}
            >
              <span>Inspect Deep Case Study</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Problem vs Innovation Dual Monoliths */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          
          {/* The African Market Friction */}
          <div 
            className="p-7 sm:p-8 rounded-3xl border corner-bracket cyber-plate relative overflow-hidden"
            style={{
              borderColor: 'var(--border-subtle)',
              backgroundColor: 'var(--bg-card)'
            }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent-secondary)' }} />
              <span className="text-[10px] font-mono uppercase tracking-widest font-bold" style={{ color: 'var(--accent-secondary)' }}>
                THE CORE FRICTION // MARKET DILEMMA
              </span>
            </div>
            <h3 className="text-xl font-bold font-serif-mythic mb-3" style={{ color: 'var(--text-title)' }}>
              Fragmented Trust & Predatory Gatekeepers
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
              {HUSTLE_PROJECT.problem} High-skilled African talent is chronically under-monetized due to unverified resumes and payment friction, while global clients hesitate without guaranteed deliverable escrow.
            </p>
          </div>

          {/* The Architectural Solution */}
          <div 
            className="p-7 sm:p-8 rounded-3xl border corner-bracket cyber-plate relative overflow-hidden"
            style={{
              borderColor: 'var(--border-active)',
              backgroundColor: 'var(--bg-card)'
            }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent)' }} />
              <span className="text-[10px] font-mono uppercase tracking-widest font-bold" style={{ color: 'var(--accent-gold)' }}>
                THE SOVEREIGN SOLUTION // PROTOCOL CORE
              </span>
            </div>
            <h3 className="text-xl font-bold font-serif-mythic mb-3" style={{ color: 'var(--text-title)' }}>
              Proof-of-Capability + Escrow Commerce
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
              {HUSTLE_PROJECT.idea} Hustle unifies verified technical artifacts, deterministic multi-currency escrow vaults, real-time WebSockets collaboration, and semantic AI matchmaker agents into a singular sovereign rail.
            </p>
          </div>

        </div>

        {/* Interactive Mode Tabs */}
        <div className="flex items-center justify-between border-b pb-4 mb-8" style={{ borderColor: 'var(--border-subtle)' }}>
          <div className="flex gap-2">
            {[
              { id: 'architecture', label: 'Engineering Stack & Layers' },
              { id: 'workflow', label: 'Interactive Transaction Cycle' },
              { id: 'ecosystem', label: 'Six Capability Pillars' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold uppercase tracking-wider transition-all ${
                  activeTab === tab.id ? 'shadow-md text-white' : 'opacity-60'
                }`}
                style={{
                  background: activeTab === tab.id ? 'linear-gradient(135deg, var(--accent), var(--accent-secondary))' : 'transparent',
                  color: activeTab === tab.id ? '#FFFFFF' : 'var(--text-body)',
                  border: activeTab === tab.id ? 'none' : '1px solid var(--border-subtle)'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <span className="hidden sm:inline-block text-[10px] font-mono tracking-widest uppercase" style={{ color: 'var(--accent-gold)' }}>
            STATE: ACTIVE // PRODUCTION
          </span>
        </div>

        {/* Tab 1: Engineering Architecture Layers */}
        {activeTab === 'architecture' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
            {HUSTLE_PROJECT.architectureLayers.map((layer, idx) => (
              <div 
                key={layer.layer}
                className="p-6 rounded-3xl border corner-bracket cyber-plate flex flex-col justify-between"
                style={{
                  borderColor: 'var(--border-subtle)',
                  backgroundColor: 'var(--bg-card)'
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest font-bold" style={{ color: 'var(--accent)' }}>
                      0{idx + 1} // LAYER
                    </span>
                    <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded border" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)', color: 'var(--text-muted)' }}>
                      ENTERPRISE SPEC
                    </span>
                  </div>

                  <h4 className="text-base font-bold font-serif-mythic mb-1" style={{ color: 'var(--text-title)' }}>
                    {layer.layer}
                  </h4>
                  <p className="text-xs font-mono font-semibold mb-3" style={{ color: 'var(--accent-gold)' }}>
                    {layer.tech}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--text-body)' }}>
                    {layer.role}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t flex items-center justify-between text-[9px] font-mono" style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-muted)' }}>
                  <span>FAULT TOLERANCE: MAXIMUM</span>
                  <span style={{ color: 'var(--accent)' }}>VALIDATED</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Interactive Transaction Cycle */}
        {activeTab === 'workflow' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {workflowSteps.map((ws, i) => {
                const isCurrent = activeWorkflowStep === i;
                const Icon = ws.icon;
                return (
                  <button
                    key={ws.step}
                    onClick={() => setActiveWorkflowStep(i)}
                    className="p-5 rounded-2xl border text-left transition-all cyber-plate"
                    style={{
                      borderColor: isCurrent ? 'var(--border-active)' : 'var(--border-subtle)',
                      backgroundColor: isCurrent ? 'var(--bg-card-hover)' : 'var(--bg-card)',
                      boxShadow: isCurrent ? '0 0 20px -4px var(--glow-accent)' : 'none'
                    }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-serif-mythic font-bold" style={{ color: isCurrent ? 'var(--accent-secondary)' : 'var(--text-muted)' }}>
                        STAGE {ws.step}
                      </span>
                      <Icon className="w-4 h-4" style={{ color: isCurrent ? 'var(--accent)' : 'var(--text-muted)' }} />
                    </div>
                    <h5 className="text-xs font-bold font-serif-mythic mb-1 line-clamp-2" style={{ color: 'var(--text-title)' }}>
                      {ws.title}
                    </h5>
                    <span className="text-[9px] font-mono block opacity-70" style={{ color: 'var(--accent-gold)' }}>
                      {ws.actor}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Selected Workflow Deep Dive */}
            <div 
              className="p-7 sm:p-8 rounded-3xl border corner-bracket cyber-plate"
              style={{
                borderColor: 'var(--border-active)',
                backgroundColor: 'var(--bg-card)'
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-mono uppercase tracking-widest font-bold" style={{ color: 'var(--accent)' }}>
                  STAGE {workflowSteps[activeWorkflowStep].step} PROTOCOL SPECIFICATION
                </span>
              </div>
              <h4 className="text-xl sm:text-2xl font-serif-mythic font-bold mb-2" style={{ color: 'var(--text-title)' }}>
                {workflowSteps[activeWorkflowStep].title}
              </h4>
              <p className="text-xs sm:text-sm leading-relaxed mb-4" style={{ color: 'var(--text-body)' }}>
                {workflowSteps[activeWorkflowStep].desc}
              </p>
              <div className="p-3.5 rounded-xl border flex items-center gap-3 text-xs font-mono" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)', color: 'var(--accent-gold)' }}>
                <Key className="w-4 h-4 shrink-0" />
                <span>TECHNICAL IMPACT: {workflowSteps[activeWorkflowStep].detail}</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Six Capability Pillars */}
        {activeTab === 'ecosystem' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
            {HUSTLE_PROJECT.productBreakdown.map((item, idx) => (
              <div 
                key={item.title}
                className="p-6 rounded-3xl border corner-bracket cyber-plate flex flex-col justify-between"
                style={{
                  borderColor: 'var(--border-subtle)',
                  backgroundColor: 'var(--bg-card)'
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono tracking-widest" style={{ color: 'var(--accent)' }}>
                      0{idx + 1} // PILLAR
                    </span>
                    <ShieldCheck className="w-4 h-4" style={{ color: 'var(--accent-gold)' }} />
                  </div>
                  <h4 className="text-base font-bold font-serif-mythic mb-2" style={{ color: 'var(--text-title)' }}>
                    {item.title}
                  </h4>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--text-body)' }}>
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t flex items-center justify-between text-[9px] font-mono" style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-muted)' }}>
                  <span>PROTOCOL STATUS</span>
                  <span style={{ color: 'var(--accent)' }}>LIVE</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack Banner */}
        <div className="mt-12 p-6 rounded-3xl border cyber-plate" style={{ borderColor: 'var(--border-subtle)' }}>
          <span className="text-[10px] font-mono uppercase tracking-widest block mb-3 font-bold" style={{ color: 'var(--accent)' }}>
            HUSTLE PROTOCOL TECH STACK MATRIX:
          </span>
          <div className="flex flex-wrap gap-2">
            {HUSTLE_PROJECT.techStack.map((tech) => (
              <span 
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-mono border"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  borderColor: 'var(--border-subtle)',
                  color: 'var(--text-title)'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
