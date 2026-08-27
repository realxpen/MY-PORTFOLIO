import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Radio } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Footer: React.FC = () => {
  const { currentThemeInfo, theme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      className="py-16 border-t transition-colors duration-500 text-xs relative"
      style={{
        backgroundColor: 'var(--bg-surface)',
        borderColor: 'var(--border-subtle)',
        color: 'var(--text-body)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b" style={{ borderColor: 'var(--border-subtle)' }}>
          
          {/* Brand Monogram */}
          <div className="flex items-center gap-3">
            <div 
              className="w-9 h-9 rounded-2xl flex items-center justify-center font-serif-mythic font-bold text-xs border cyber-plate"
              style={{
                background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-secondary) 100%)',
                color: '#FFFFFF'
              }}
            >
              {PERSONAL_INFO.initials}
            </div>
            <div>
              <span className="font-serif-mythic font-bold block text-sm tracking-wider uppercase" style={{ color: 'var(--text-title)' }}>
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[9px] font-mono tracking-widest uppercase block" style={{ color: 'var(--accent)' }}>
                AFROFUTURISTIC CODEX · ARCHITECT
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-[10px] font-mono uppercase tracking-widest font-semibold">
            <a href="#about" className="transition-colors hover:text-[var(--accent)]" style={{ color: 'var(--text-title)' }}>About</a>
            <a href="#hustle" className="transition-colors" style={{ color: 'var(--accent)' }}>Hustle</a>
            <a href="#work" className="transition-colors hover:text-[var(--accent)]" style={{ color: 'var(--text-title)' }}>Work</a>
            <a href="#presentations" className="transition-colors hover:text-[var(--accent)]" style={{ color: 'var(--text-title)' }}>Talks</a>
            <a href="#skills" className="transition-colors hover:text-[var(--accent)]" style={{ color: 'var(--text-title)' }}>Skills</a>
            <a href="#how-i-build" className="transition-colors hover:text-[var(--accent)]" style={{ color: 'var(--text-title)' }}>How I Build</a>
            <a href="#journey" className="transition-colors hover:text-[var(--accent)]" style={{ color: 'var(--text-title)' }}>Journey</a>
            <a href="#thinking" className="transition-colors hover:text-[var(--accent-gold)]" style={{ color: 'var(--accent-gold)' }}>Codex</a>
            <a href="#contact" className="transition-colors hover:text-[var(--accent)]" style={{ color: 'var(--text-title)' }}>Contact</a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full border uppercase tracking-wider text-[10px] font-mono font-bold transition-all cyber-plate"
            style={{
              borderColor: 'var(--border-subtle)',
              backgroundColor: 'var(--bg-card)',
              color: 'var(--text-title)'
            }}
          >
            <span>Top of Codex</span>
            <ArrowUp className="w-3.5 h-3.5" style={{ color: 'var(--accent)' }} />
          </button>
        </div>

        {/* Bottom Credits & Telemetry */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono" style={{ color: 'var(--text-muted)' }}>
          <div className="flex items-center gap-2">
            <Radio className="w-3 h-3 animate-pulse" style={{ color: 'var(--accent)' }} />
            <span>SOVEREIGN SYSTEM ARCHITECTURE // NIGERIA · {new Date().getFullYear()}</span>
          </div>

          <div className="flex items-center gap-4">
            <span>THEME: <strong style={{ color: 'var(--accent-gold)' }}>{currentThemeInfo.name}</strong></span>
            <span>·</span>
            <span>STATUS: NOMINAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
