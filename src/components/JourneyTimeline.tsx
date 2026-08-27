import React, { useState } from 'react';
import { 
  Milestone, 
  GraduationCap, 
  Database, 
  Code2, 
  Rocket, 
  ArrowUpRight,
  Sparkles,
  Layers
} from 'lucide-react';
import { JOURNEY_MILESTONES } from '../data/portfolioData';
import { JourneyMilestone } from '../types';
import { useTheme } from '../context/ThemeContext';

export const JourneyTimeline: React.FC = () => {
  const { currentThemeInfo } = useTheme();
  const [selectedMilestoneId, setSelectedMilestoneId] = useState<string>(JOURNEY_MILESTONES[0].id);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Education': return GraduationCap;
      case 'Data & Analytics': return Database;
      case 'Software Engineering': return Code2;
      case 'Product & Entrepreneurship': return Rocket;
      default: return Milestone;
    }
  };

  const selectedMilestone = JOURNEY_MILESTONES.find(m => m.id === selectedMilestoneId) || JOURNEY_MILESTONES[0];

  return (
    <section 
      id="journey" 
      className="py-28 relative border-t transition-colors duration-500"
      style={{
        backgroundColor: 'var(--bg-main)',
        borderColor: 'var(--border-subtle)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
              <Milestone className="w-3.5 h-3.5" />
              <span>CODEX // 08 · THE CHRONOLOGICAL ODYSSEY</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-serif-mythic font-bold tracking-tight uppercase" style={{ color: 'var(--text-title)' }}>
              EVOLUTIONARY <span style={{ color: 'var(--accent)' }}>TIMELINE</span>
            </h2>
            
            <p className="text-xs sm:text-sm font-mono tracking-wider mt-2 max-w-2xl" style={{ color: 'var(--text-body)' }}>
              FROM ACADEMIC RIGOR IN NIGERIA TO DISTRIBUTED GLOBAL VENTURE ARCHITECTURE
            </p>
          </div>

          <div 
            className="text-[10px] font-mono uppercase tracking-wider px-4 py-2 rounded-full border self-start md:self-auto cyber-plate"
            style={{ color: 'var(--text-title)', borderColor: 'var(--border-subtle)' }}
          >
            EPOCHS: <strong style={{ color: 'var(--accent-gold)' }}>2020 – 2026+</strong>
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Milestone List Buttons */}
          <div className="lg:col-span-5 space-y-3">
            {JOURNEY_MILESTONES.map((milestone, idx) => {
              const isSelected = selectedMilestoneId === milestone.id;
              const Icon = getCategoryIcon(milestone.category);
              return (
                <button
                  key={milestone.id}
                  id={`milestone-btn-${milestone.id}`}
                  onClick={() => setSelectedMilestoneId(milestone.id)}
                  className="w-full p-5 rounded-2xl border text-left transition-all flex items-center justify-between cyber-plate group cursor-pointer"
                  style={{
                    borderColor: isSelected ? 'var(--border-active)' : 'var(--border-subtle)',
                    backgroundColor: isSelected ? 'var(--bg-card-hover)' : 'var(--bg-card)',
                    boxShadow: isSelected ? '0 0 20px -4px var(--glow-accent)' : 'none'
                  }}
                >
                  <div className="flex items-center gap-3.5">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center border shrink-0"
                      style={{
                        backgroundColor: 'var(--bg-surface)',
                        borderColor: isSelected ? 'var(--border-active)' : 'var(--border-subtle)',
                        color: isSelected ? 'var(--accent)' : 'var(--text-muted)'
                      }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono font-bold" style={{ color: 'var(--accent-gold)' }}>
                          {milestone.period}
                        </span>
                        <span className="text-[9px] font-mono opacity-50">· {milestone.category}</span>
                      </div>
                      <h4 className="text-sm font-bold font-serif-mythic line-clamp-1" style={{ color: 'var(--text-title)' }}>
                        {milestone.title}
                      </h4>
                    </div>
                  </div>

                  <span className={`w-2 h-2 rounded-full shrink-0 ${isSelected ? 'animate-ping' : ''}`} style={{ backgroundColor: isSelected ? 'var(--accent)' : 'var(--border-subtle)' }} />
                </button>
              );
            })}
          </div>

          {/* Milestone Details Card */}
          <div className="lg:col-span-7">
            <div 
              className="p-8 sm:p-10 rounded-3xl border corner-bracket cyber-plate relative overflow-hidden"
              style={{
                borderColor: 'var(--border-active)',
                backgroundColor: 'var(--bg-card)'
              }}
            >
              <div className="flex items-center justify-between pb-4 border-b mb-6" style={{ borderColor: 'var(--border-subtle)' }}>
                <span className="text-[10px] font-mono uppercase tracking-widest font-bold" style={{ color: 'var(--accent)' }}>
                  EPOCH: {selectedMilestone.period} // {selectedMilestone.category}
                </span>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded border" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)', color: 'var(--accent-gold)' }}>
                  VERIFIED CHRONICLE
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif-mythic font-bold mb-2" style={{ color: 'var(--text-title)' }}>
                {selectedMilestone.title}
              </h3>
              <p className="text-xs font-mono mb-4" style={{ color: 'var(--accent-gold)' }}>
                {selectedMilestone.subtitle}
              </p>

              <p className="text-xs sm:text-sm leading-relaxed mb-6" style={{ color: 'var(--text-body)' }}>
                {selectedMilestone.description}
              </p>

              {/* Highlights */}
              <div className="p-4 rounded-2xl border mb-6" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}>
                <span className="text-[10px] font-mono uppercase tracking-widest font-bold block mb-2" style={{ color: 'var(--accent-gold)' }}>
                  KEY SYSTEM ACHIEVEMENTS:
                </span>
                <ul className="space-y-2">
                  {selectedMilestone.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs" style={{ color: 'var(--text-body)' }}>
                      <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: 'var(--accent)' }} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills Gained */}
              <div>
                <span className="text-[9px] font-mono uppercase tracking-widest block mb-2 opacity-70" style={{ color: 'var(--text-muted)' }}>
                  CORE TOOLS & CONCEPTS FORGED:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedMilestone.skillsGained.map((skill) => (
                    <span 
                      key={skill}
                      className="px-2.5 py-1 rounded text-[10px] font-mono border"
                      style={{
                        backgroundColor: 'var(--bg-surface)',
                        borderColor: 'var(--border-subtle)',
                        color: 'var(--text-title)'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
