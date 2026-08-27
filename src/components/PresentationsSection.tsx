import React, { useState } from 'react';
import { Mic, Calendar, MapPin, Users, ArrowRight, Filter, Sparkles, Radio } from 'lucide-react';
import { PRESENTATIONS_DATA } from '../data/portfolioData';
import { PresentationTalk, PresentationType } from '../types';
import { useTheme } from '../context/ThemeContext';

interface PresentationsSectionProps {
  onSelectTalk: (talk: PresentationTalk) => void;
}

export const PresentationsSection: React.FC<PresentationsSectionProps> = ({ onSelectTalk }) => {
  const { currentThemeInfo } = useTheme();
  const [selectedFilter, setSelectedFilter] = useState<PresentationType>('All');

  const filterCategories: PresentationType[] = [
    'All',
    'Keynote',
    'Technical Workshop',
    'Conference Talk',
    'Panel Discussion',
  ];

  const filteredTalks = selectedFilter === 'All'
    ? PRESENTATIONS_DATA
    : PRESENTATIONS_DATA.filter(t => t.type === selectedFilter);

  return (
    <section 
      id="presentations" 
      className="py-28 relative border-t transition-colors duration-500"
      style={{
        backgroundColor: 'var(--bg-main)',
        borderColor: 'var(--border-subtle)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div 
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest font-semibold mb-3 border cyber-plate"
              style={{
                color: 'var(--accent)',
                borderColor: 'var(--border-active)'
              }}
            >
              <Mic className="w-3.5 h-3.5" />
              <span>CODEX // 06 · KEYNOTES & DISCOURSE TRANSMISSIONS</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-serif-mythic font-bold tracking-tight uppercase" style={{ color: 'var(--text-title)' }}>
              TRANSMISSIONS & <span style={{ color: 'var(--accent)' }}>TALKS</span>
            </h2>
            
            <p className="text-xs sm:text-sm font-mono tracking-wider mt-2 max-w-2xl" style={{ color: 'var(--text-body)' }}>
              KEYNOTES, ARCHITECTURAL WORKSHOPS, AND DIALOGUES ON SOVEREIGN COMPUTATION & MARKETPLACES
            </p>
          </div>

          {/* Quick Stat Badges */}
          <div className="flex flex-wrap items-center gap-2 self-start md:self-auto">
            <div 
              className="text-[10px] font-mono uppercase tracking-wider px-4 py-2 rounded-full border cyber-plate"
              style={{ color: 'var(--text-title)', borderColor: 'var(--border-subtle)' }}
            >
              DELIVERED: <strong style={{ color: 'var(--accent)' }}>{PRESENTATIONS_DATA.length}+ TALKS</strong>
            </div>
            <div 
              className="text-[10px] font-mono uppercase tracking-wider px-4 py-2 rounded-full border cyber-plate"
              style={{ color: 'var(--text-title)', borderColor: 'var(--border-subtle)' }}
            >
              REACH: <strong style={{ color: 'var(--accent-gold)' }}>2,000+ AUDIENCE</strong>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <div className="flex items-center gap-1.5 text-xs font-mono mr-2" style={{ color: 'var(--text-muted)' }}>
            <Filter className="w-3.5 h-3.5" />
            <span className="text-[10px] uppercase tracking-wider">FORMAT:</span>
          </div>
          
          {filterCategories.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedFilter(type)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all cyber-plate cursor-pointer ${
                selectedFilter === type ? 'shadow-md text-white' : 'opacity-70 hover:opacity-100'
              }`}
              style={{
                background: selectedFilter === type ? 'linear-gradient(135deg, var(--accent), var(--accent-secondary))' : 'var(--bg-card)',
                borderColor: selectedFilter === type ? 'transparent' : 'var(--border-subtle)',
                color: selectedFilter === type ? '#FFFFFF' : 'var(--text-body)'
              }}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Presentations Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTalks.map((talk) => (
            <div
              key={talk.id}
              onClick={() => onSelectTalk(talk)}
              className="rounded-3xl p-6 sm:p-7 border corner-bracket flex flex-col justify-between cyber-plate group cursor-pointer transition-all duration-300 relative overflow-hidden"
              style={{
                borderColor: 'var(--border-subtle)',
                backgroundColor: 'var(--bg-card)'
              }}
            >
              {/* Top accent bar */}
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
                    {talk.type}
                  </span>
                  <span className="text-[9px] font-mono tracking-widest uppercase opacity-60" style={{ color: 'var(--text-muted)' }}>
                    {talk.date}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-serif-mythic mb-2 group-hover:text-[var(--accent)] transition-colors" style={{ color: 'var(--text-title)' }}>
                  {talk.title}
                </h3>

                <p className="text-xs font-mono mb-4" style={{ color: 'var(--accent-gold)' }}>
                  {talk.event} · {talk.location}
                </p>

                <p className="text-xs leading-relaxed mb-6 line-clamp-3" style={{ color: 'var(--text-body)' }}>
                  {talk.abstract}
                </p>
              </div>

              <div className="pt-4 border-t flex items-center justify-between" style={{ borderColor: 'var(--border-subtle)' }}>
                <span className="text-[9px] font-mono truncate max-w-[160px]" style={{ color: 'var(--text-muted)' }}>
                  {talk.audience}
                </span>

                <span className="font-mono text-xs font-bold flex items-center gap-1.5 group-hover:translate-x-1 transition-transform" style={{ color: 'var(--accent)' }}>
                  <span>Inspect Talk</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
