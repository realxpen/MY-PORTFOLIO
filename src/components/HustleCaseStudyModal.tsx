import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  ShieldCheck, 
  Cpu, 
  Database, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  ExternalLink, 
  Code2, 
  Workflow, 
  Lock, 
  Network 
} from 'lucide-react';
import { HUSTLE_PROJECT, SOCIAL_LINKS } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface HustleCaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HustleCaseStudyModal: React.FC<HustleCaseStudyModalProps> = ({ isOpen, onClose }) => {
  const { currentThemeInfo } = useTheme();
  const [activeTab, setActiveTab] = useState<'architecture' | 'trust' | 'vision'>('architecture');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border shadow-2xl p-6 sm:p-10 corner-bracket cyber-plate"
        style={{
          backgroundColor: 'var(--bg-surface)',
          borderColor: 'var(--border-active)',
          color: 'var(--text-title)'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          id="close-hustle-modal-btn"
          className="absolute top-6 right-6 p-2.5 rounded-full border transition-colors cursor-pointer"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border-subtle)',
            color: 'var(--text-body)'
          }}
          aria-label="Close Case Study"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Banner */}
        <div className="pr-12 space-y-2 mb-8">
          <div 
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest font-semibold border"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-active)',
              color: 'var(--accent)'
            }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>FLAGSHIP ARCHITECTURAL CASE STUDY // PROTOCOL 02</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-serif-mythic font-bold" style={{ color: 'var(--text-title)' }}>
            Hustle Ecosystem: Sovereign Trust & Distributed Escrow
          </h2>

          <p className="text-xs sm:text-sm font-mono" style={{ color: 'var(--accent-gold)' }}>
            {HUSTLE_PROJECT.subtitle}
          </p>
        </div>

        {/* Tabs Bar */}
        <div className="flex border-b mb-8 gap-2" style={{ borderColor: 'var(--border-subtle)' }}>
          {[
            { id: 'architecture', label: 'Stack Architecture' },
            { id: 'trust', label: 'Escrow & Six Pillars' },
            { id: 'vision', label: 'Ecosystem Vision' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-all border-b-2 -mb-[2px] cursor-pointer ${
                activeTab === tab.id ? 'border-[var(--accent)] text-[var(--accent)]' : 'border-transparent opacity-60'
              }`}
              style={{
                color: activeTab === tab.id ? 'var(--accent)' : 'var(--text-body)'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Stack Architecture */}
        {activeTab === 'architecture' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="p-6 rounded-2xl border" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}>
              <span className="text-[10px] font-mono uppercase tracking-widest font-bold block mb-2" style={{ color: 'var(--accent)' }}>
                THE SYSTEM ARCHITECTURE OVERVIEW:
              </span>
              <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
                {HUSTLE_PROJECT.overview}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {HUSTLE_PROJECT.architectureLayers.map((layer, i) => (
                <div 
                  key={i} 
                  className="p-4 rounded-xl border flex flex-col justify-between text-xs"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border-subtle)',
                    color: 'var(--text-body)'
                  }}
                >
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase block mb-1" style={{ color: 'var(--accent)' }}>
                      {layer.layer}
                    </span>
                    <h5 className="font-bold text-xs mb-1" style={{ color: 'var(--text-title)' }}>
                      {layer.tech}
                    </h5>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--text-body)' }}>
                      {layer.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Escrow & Six Pillars */}
        {activeTab === 'trust' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="p-6 rounded-2xl border" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}>
              <span className="text-[10px] font-mono uppercase tracking-widest font-bold block mb-2" style={{ color: 'var(--accent-gold)' }}>
                CORE MARKET PROBLEM & SOLUTION:
              </span>
              <p className="text-xs sm:text-sm leading-relaxed mb-3" style={{ color: 'var(--text-body)' }}>
                <strong>Problem:</strong> {HUSTLE_PROJECT.problem}
              </p>
              <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
                <strong>Solution:</strong> {HUSTLE_PROJECT.idea}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {HUSTLE_PROJECT.productBreakdown.map((item, idx) => (
                <div 
                  key={item.title} 
                  className="p-4 rounded-xl border"
                  style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}
                >
                  <span className="text-[10px] font-mono font-bold block mb-1" style={{ color: 'var(--accent)' }}>
                    0{idx + 1} // {item.title}
                  </span>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--text-body)' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Ecosystem Vision */}
        {activeTab === 'vision' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="p-6 rounded-2xl border" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}>
              <span className="text-[10px] font-mono uppercase tracking-widest font-bold block mb-2" style={{ color: 'var(--accent-gold)' }}>
                LONG-TERM SOVEREIGN VISION:
              </span>
              <p className="text-xs sm:text-base leading-relaxed font-serif-mythic" style={{ color: 'var(--text-title)' }}>
                "{HUSTLE_PROJECT.vision}"
              </p>
            </div>

            <div className="p-5 rounded-2xl border" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}>
              <span className="text-[10px] font-mono uppercase tracking-widest font-bold block mb-3" style={{ color: 'var(--accent)' }}>
                VERIFIED TECH STACK REPERTOIRE:
              </span>
              <div className="flex flex-wrap gap-2">
                {HUSTLE_PROJECT.techStack.map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-lg text-xs font-mono border" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)', color: 'var(--text-title)' }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Modal Footer */}
        <div className="mt-8 pt-6 border-t flex items-center justify-between" style={{ borderColor: 'var(--border-subtle)' }}>
          <a
            href={`mailto:${SOCIAL_LINKS.email}?subject=Hustle Ecosystem Inquiry`}
            className="px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-white cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-secondary) 100%)'
            }}
          >
            Inquire on Venture Collaboration
          </a>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider border cursor-pointer"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-subtle)',
              color: 'var(--text-title)'
            }}
          >
            Dismiss
          </button>
        </div>

      </div>
    </div>
  );
};
