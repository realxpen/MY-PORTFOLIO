import React, { useState } from 'react';
import { 
  Code2, 
  Database, 
  BarChart3, 
  Bot, 
  Layers3, 
  Sparkles, 
  CheckCircle2, 
  Terminal,
  Cpu,
  Info
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { SkillCategory } from '../types';
import { useTheme } from '../context/ThemeContext';

export const SkillsMatrix: React.FC = () => {
  const { currentThemeInfo } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<string>(SKILL_CATEGORIES[0].id);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'software-dev': return Code2;
      case 'backend-infra': return Database;
      case 'data-analytics': return BarChart3;
      case 'ai-intelligent': return Bot;
      case 'product-systems': return Layers3;
      default: return Terminal;
    }
  };

  const activeCategoryData = SKILL_CATEGORIES.find(c => c.id === selectedCategory) || SKILL_CATEGORIES[0];

  return (
    <section 
      id="skills" 
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
              <Cpu className="w-3.5 h-3.5" />
              <span>CODEX // 04 · CAPABILITY MATRIX</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-serif-mythic font-bold tracking-tight uppercase" style={{ color: 'var(--text-title)' }}>
              SYSTEMS <span style={{ color: 'var(--accent)' }}>COMPETENCY</span>
            </h2>
            
            <p className="text-xs sm:text-sm font-mono tracking-wider mt-2 max-w-2xl" style={{ color: 'var(--text-body)' }}>
              ENGINEERING RIGOR ACROSS FRONTEND APPS, MICROSERVICES, VECTOR DATA VAULTS, AND AI WORKFLOWS
            </p>
          </div>

          <div 
            className="text-[10px] font-mono uppercase tracking-wider px-4 py-2 rounded-full border self-start md:self-auto cyber-plate"
            style={{ color: 'var(--text-title)', borderColor: 'var(--border-subtle)' }}
          >
            DOMAIN STATUS: <strong style={{ color: 'var(--accent-gold)' }}>5/5 VERIFIED</strong>
          </div>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {SKILL_CATEGORIES.map((cat) => {
            const Icon = getCategoryIcon(cat.id);
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`skill-cat-btn-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-2.5 whitespace-nowrap cyber-plate cursor-pointer ${
                  isSelected ? 'shadow-lg text-white' : 'opacity-70 hover:opacity-100'
                }`}
                style={{
                  background: isSelected ? 'linear-gradient(135deg, var(--accent), var(--accent-secondary))' : 'var(--bg-card)',
                  borderColor: isSelected ? 'transparent' : 'var(--border-subtle)',
                  color: isSelected ? '#FFFFFF' : 'var(--text-body)'
                }}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display Plate */}
        <div 
          className="p-8 sm:p-10 rounded-3xl border corner-bracket cyber-plate relative overflow-hidden"
          style={{
            borderColor: 'var(--border-active)',
            backgroundColor: 'var(--bg-card)'
          }}
        >
          {/* Header of Active Category */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b mb-8 gap-4" style={{ borderColor: 'var(--border-subtle)' }}>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest font-bold block mb-1" style={{ color: 'var(--accent)' }}>
                ACTIVE PROTOCOL SPECIFICATION: {activeCategoryData.tagline}
              </span>
              <h3 className="text-2xl font-serif-mythic font-bold" style={{ color: 'var(--text-title)' }}>
                {activeCategoryData.name}
              </h3>
            </div>

            <p className="text-xs sm:text-sm max-w-lg leading-relaxed" style={{ color: 'var(--text-body)' }}>
              {activeCategoryData.description}
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {activeCategoryData.skills.map((skill) => (
              <div 
                key={skill.name}
                className="p-4 rounded-2xl border flex flex-col justify-between cyber-plate group"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  borderColor: 'var(--border-subtle)'
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-serif-mythic font-bold group-hover:text-[var(--accent)] transition-colors" style={{ color: 'var(--text-title)' }}>
                      {skill.name}
                    </span>
                    <span 
                      className="px-2 py-0.5 rounded text-[8px] font-mono uppercase tracking-wider font-semibold border"
                      style={{
                        backgroundColor: 'var(--bg-card)',
                        borderColor: 'var(--border-subtle)',
                        color: 'var(--accent-gold)'
                      }}
                    >
                      VERIFIED
                    </span>
                  </div>

                  <p className="text-[11px] leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {skill.context || skill.description}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t flex items-center justify-between text-[8px] font-mono opacity-60" style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-muted)' }}>
                  <span>STATUS</span>
                  <span style={{ color: 'var(--accent)' }}>PRODUCTION_READY</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
