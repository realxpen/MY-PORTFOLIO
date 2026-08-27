import React from 'react';
import { 
  Activity, 
  ArrowRight, 
  Clock, 
  Layers, 
  Sparkles, 
  GitPullRequest 
} from 'lucide-react';
import { CURRENTLY_BUILDING } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface CurrentlyBuildingProps {
  onOpenHustleModal: () => void;
  onOpenScraperProject: () => void;
  onOpenLabNote: () => void;
}

export const CurrentlyBuilding: React.FC<CurrentlyBuildingProps> = ({
  onOpenHustleModal,
  onOpenScraperProject,
  onOpenLabNote
}) => {
  const { currentThemeInfo } = useTheme();

  const handleAction = (action?: string) => {
    if (action === 'open-hustle') onOpenHustleModal();
    else if (action === 'open-project-scraper') onOpenScraperProject();
    else if (action === 'open-lab') onOpenLabNote();
  };

  return (
    <section 
      id="currently-building" 
      className="py-28 relative border-t transition-colors duration-500"
      style={{
        backgroundColor: 'var(--bg-main)',
        borderColor: 'var(--border-subtle)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div 
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest font-semibold mb-3 border cyber-plate"
              style={{
                color: 'var(--accent)',
                borderColor: 'var(--border-active)'
              }}
            >
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              <span>CODEX // 09 · ACTIVE TELEMETRY WORKBENCH</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-serif-mythic font-bold tracking-tight uppercase" style={{ color: 'var(--text-title)' }}>
              ACTIVE <span style={{ color: 'var(--accent)' }}>FORGES</span>
            </h2>
            
            <p className="text-xs sm:text-sm font-mono tracking-wider mt-2 max-w-2xl" style={{ color: 'var(--text-body)' }}>
              LIVE PROTOTYPES, IN-PROGRESS SYSTEM SPECIFICATIONS, AND IN-FLIGHT ARCHITECTURAL EXPERIMENTS
            </p>
          </div>

          <div 
            className="text-[10px] font-mono uppercase tracking-wider px-4 py-2 rounded-full border self-start md:self-auto cyber-plate"
            style={{ color: 'var(--text-title)', borderColor: 'var(--border-subtle)' }}
          >
            ACTIVE FORGES: <strong style={{ color: 'var(--accent-gold)' }}>{CURRENTLY_BUILDING.length} IN FLIGHT</strong>
          </div>
        </div>

        {/* Currently Building Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CURRENTLY_BUILDING.map((item, idx) => {
            const progress = item.progressPercentage || 65;
            return (
              <div
                key={item.title}
                className="p-7 rounded-3xl border corner-bracket flex flex-col justify-between cyber-plate group transition-all duration-300 relative overflow-hidden"
                style={{
                  borderColor: 'var(--border-subtle)',
                  backgroundColor: 'var(--bg-card)'
                }}
              >
                {/* Top Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'linear-gradient(90deg, var(--accent), var(--accent-secondary))' }} />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span 
                      className="px-2.5 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-widest font-bold border"
                      style={{
                        backgroundColor: 'var(--bg-surface)',
                        borderColor: 'var(--border-active)',
                        color: 'var(--accent)'
                      }}
                    >
                      {item.status}
                    </span>
                    <span className="text-[9px] font-mono opacity-50" style={{ color: 'var(--text-muted)' }}>
                      FORGE 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-serif-mythic mb-2 group-hover:text-[var(--accent)] transition-colors" style={{ color: 'var(--text-title)' }}>
                    {item.title}
                  </h3>

                  <p className="text-xs leading-relaxed mb-6" style={{ color: 'var(--text-body)' }}>
                    {item.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between text-[9px] font-mono mb-1.5" style={{ color: 'var(--text-muted)' }}>
                      <span>PHASE PROGRESS</span>
                      <span style={{ color: 'var(--accent-gold)' }}>{progress}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--bg-surface)' }}>
                      <div 
                        className="h-full rounded-full transition-all duration-500" 
                        style={{ 
                          width: `${progress}%`,
                          background: 'linear-gradient(90deg, var(--accent), var(--accent-secondary))'
                        }}
                      />
                    </div>
                  </div>

                  {/* Current Focus Tag */}
                  <div className="p-3 rounded-xl border mb-6 text-xs font-mono" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)', color: 'var(--accent-gold)' }}>
                    <span className="opacity-60 block text-[8px] uppercase">Immediate Focus Area:</span>
                    {item.focusArea}
                  </div>
                </div>

                <div className="pt-4 border-t flex items-center justify-between" style={{ borderColor: 'var(--border-subtle)' }}>
                  <span className="text-[9px] font-mono" style={{ color: 'var(--text-muted)' }}>
                    NEXT: {item.nextMilestone}
                  </span>

                  {item.linkAction && (
                    <button
                      onClick={() => handleAction(item.linkAction)}
                      className="font-mono text-xs font-bold flex items-center gap-1.5 group-hover:translate-x-1 transition-transform cursor-pointer"
                      style={{ color: 'var(--accent)' }}
                    >
                      <span>{item.linkText || 'Inspect'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
