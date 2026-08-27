import React, { useState } from 'react';
import { 
  GitBranch, 
  Lightbulb, 
  Layers, 
  Code, 
  Activity, 
  RotateCw, 
  ArrowRight, 
  Sparkles, 
  Quote 
} from 'lucide-react';
import { HOW_I_BUILD_STEPS } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const HowIBuild: React.FC = () => {
  const { currentThemeInfo } = useTheme();
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activeStep = HOW_I_BUILD_STEPS[activeStepIndex];

  return (
    <section 
      id="how-i-build" 
      className="py-28 relative border-t transition-colors duration-500"
      style={{
        backgroundColor: 'var(--bg-main)',
        borderColor: 'var(--border-subtle)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div 
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest font-semibold border cyber-plate"
            style={{
              color: 'var(--accent)',
              borderColor: 'var(--border-active)'
            }}
          >
            <GitBranch className="w-3.5 h-3.5" />
            <span>CODEX // 05 · METHODOLOGY MATRIX</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-serif-mythic font-bold tracking-tight uppercase" style={{ color: 'var(--text-title)' }}>
            HOW I <span style={{ color: 'var(--accent)' }}>BUILD SYSTEMS</span>
          </h2>
          
          {/* Core Philosophy Statement */}
          <div 
            className="p-6 rounded-3xl border corner-bracket text-sm sm:text-base font-serif-mythic relative max-w-2xl mx-auto cyber-plate"
            style={{
              borderColor: 'var(--border-subtle)',
              backgroundColor: 'var(--bg-card)',
              color: 'var(--text-title)'
            }}
          >
            "Great software products are not assembled merely feature by feature. They are designed as living, resilient socio-economic systems that evolve with their builders."
          </div>
        </div>

        {/* 6-Step Interactive Progression */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {HOW_I_BUILD_STEPS.map((step, idx) => {
            const isSelected = activeStepIndex === idx;
            return (
              <button
                key={step.step}
                id={`how-step-btn-${idx}`}
                onClick={() => setActiveStepIndex(idx)}
                className="p-4 rounded-2xl border text-left transition-all flex flex-col justify-between cyber-plate group cursor-pointer"
                style={{
                  borderColor: isSelected ? 'var(--border-active)' : 'var(--border-subtle)',
                  backgroundColor: isSelected ? 'var(--bg-card-hover)' : 'var(--bg-card)',
                  boxShadow: isSelected ? '0 0 20px -4px var(--glow-accent)' : 'none'
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold" style={{ color: isSelected ? 'var(--accent-secondary)' : 'var(--text-muted)' }}>
                    PHASE 0{idx + 1}
                  </span>
                  <span className={`w-2 h-2 rounded-full ${isSelected ? 'animate-ping' : ''}`} style={{ backgroundColor: isSelected ? 'var(--accent)' : 'var(--border-subtle)' }} />
                </div>
                <h4 className="text-xs font-serif-mythic font-bold line-clamp-1" style={{ color: 'var(--text-title)' }}>
                  {step.phase}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Active Step Deep Dive Card */}
        <div 
          className="p-8 sm:p-10 rounded-3xl border corner-bracket cyber-plate relative overflow-hidden"
          style={{
            borderColor: 'var(--border-active)',
            backgroundColor: 'var(--bg-card)'
          }}
        >
          <div className="flex items-center justify-between pb-4 border-b mb-6" style={{ borderColor: 'var(--border-subtle)' }}>
            <span className="text-[10px] font-mono uppercase tracking-widest font-bold" style={{ color: 'var(--accent)' }}>
              PHASE 0{activeStepIndex + 1} // {activeStep.phase}
            </span>
            <span className="text-[9px] font-mono px-2 py-0.5 rounded border" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)', color: 'var(--accent-gold)' }}>
              {activeStep.tagline}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-serif-mythic font-bold mb-3" style={{ color: 'var(--text-title)' }}>
            {activeStep.phase}: {activeStep.tagline}
          </h3>

          <p className="text-xs sm:text-sm leading-relaxed mb-8 max-w-3xl" style={{ color: 'var(--text-body)' }}>
            {activeStep.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {activeStep.keyActions.map((action, i) => (
              <div 
                key={i} 
                className="p-4 rounded-xl border flex items-center gap-3 text-xs font-mono"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  borderColor: 'var(--border-subtle)',
                  color: 'var(--text-title)'
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: 'var(--accent)' }} />
                <span>{action}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
