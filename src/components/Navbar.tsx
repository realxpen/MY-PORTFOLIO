import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, ChevronDown, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useTheme, THEME_PRESETS, ThemePreset } from '../context/ThemeContext';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themePickerOpen, setThemePickerOpen] = useState(false);
  const { theme, currentThemeInfo, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', glyph: '01' },
    { name: 'Hustle', href: '#hustle', highlight: true, glyph: '02' },
    { name: 'Work', href: '#work', glyph: '03' },
    { name: 'Skills', href: '#skills', glyph: '04' },
    { name: 'How I Build', href: '#how-i-build', glyph: '05' },
    { name: 'Talks', href: '#presentations', glyph: '06' },
    { name: 'Codex', href: '#thinking', glyph: '07' },
    { name: 'Calendar', href: '#calendar', glyph: '08' },
    { name: 'Contact', href: '#contact', glyph: '09' },
  ];

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'backdrop-blur-xl border-b py-3 shadow-2xl' 
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
      style={{
        backgroundColor: isScrolled ? 'var(--bg-card)' : 'transparent',
        borderColor: isScrolled ? 'var(--border-subtle)' : 'transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Monogram & Telemetry */}
          <a 
            href="#hero" 
            id="nav-logo"
            className="flex items-center gap-3.5 group focus:outline-none"
          >
            <div 
              className="relative w-9 h-9 rounded-lg flex items-center justify-center font-bold text-xs tracking-tighter transition-all duration-300 group-hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-secondary) 100%)',
                color: '#FFFFFF',
                boxShadow: `0 0 20px -2px var(--glow-accent)`
              }}
            >
              <span className="font-serif-mythic font-bold">{PERSONAL_INFO.initials}</span>
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: 'var(--accent-gold)' }} />
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent-gold)' }} />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-serif-mythic text-xs sm:text-sm font-bold tracking-[0.2em] uppercase" style={{ color: 'var(--text-title)' }}>
                  OLADEJI
                </span>
                <span className="hidden sm:inline-block text-[9px] font-mono tracking-widest px-1.5 py-0.5 rounded border" style={{ color: 'var(--accent)', borderColor: 'var(--border-subtle)', background: 'var(--bg-surface)' }}>
                  AFRO-FUTURISM
                </span>
              </div>
              <span className="text-[9px] font-mono tracking-wider opacity-60 flex items-center gap-1.5" style={{ color: 'var(--text-muted)' }}>
                <span className="w-1.5 h-1.5 rounded-full inline-block animate-pulse" style={{ backgroundColor: 'var(--accent)' }} />
                ORIGIN // LAGOS · ABUJA · GLOBAL
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-6 text-[11px] font-medium tracking-[0.2em] uppercase">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="transition-all py-1 relative flex items-center gap-1 group"
                  style={{
                    color: isActive ? 'var(--accent)' : 'var(--text-body)',
                    fontWeight: isActive ? 700 : 500
                  }}
                >
                  <span className="text-[8px] font-mono opacity-40 group-hover:opacity-100 transition-opacity" style={{ color: 'var(--accent)' }}>
                    {link.glyph}
                  </span>
                  {link.highlight && (
                    <span className="inline-block w-1.5 h-1.5 rounded-full mr-1 animate-pulse" style={{ backgroundColor: 'var(--accent-secondary)' }} />
                  )}
                  <span className="group-hover:text-[var(--text-title)] transition-colors">
                    {link.name}
                  </span>
                  {isActive && (
                    <span 
                      className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full" 
                      style={{ background: 'linear-gradient(90deg, var(--accent), var(--accent-secondary))' }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Controls: Theme Preset Selector & Transmission Action */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Theme Preset Selector Dropdown */}
            <div className="relative">
              <button
                id="theme-preset-picker-btn"
                onClick={() => setThemePickerOpen(!themePickerOpen)}
                className="px-3 py-1.5 rounded-full border transition-all flex items-center gap-2 text-xs font-mono cyber-plate"
                style={{
                  color: 'var(--text-title)',
                  borderColor: 'var(--border-subtle)',
                }}
                title="Select Afrofuturistic Theme Preset"
                aria-label="Select Afrofuturistic Theme Preset"
              >
                <span className="w-2.5 h-2.5 rounded-full shadow-sm" style={{ backgroundColor: currentThemeInfo.accentColor }} />
                <span className="text-[10px] uppercase font-bold tracking-wider hidden md:inline">
                  {currentThemeInfo.name.split(' ')[0]}
                </span>
                <ChevronDown className={`w-3.5 h-3.5 opacity-60 transition-transform ${themePickerOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Theme Dropdown Menu */}
              {themePickerOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setThemePickerOpen(false)}
                  />
                  <div 
                    className="absolute right-0 mt-2 w-72 rounded-2xl border shadow-2xl p-2 z-50 animate-fadeIn"
                    style={{
                      background: 'var(--bg-surface)',
                      borderColor: 'var(--border-active)',
                      backdropFilter: 'blur(20px)',
                    }}
                  >
                    <div className="px-3 py-2 border-b mb-1 flex items-center justify-between" style={{ borderColor: 'var(--border-subtle)' }}>
                      <span className="text-[9px] font-mono tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>
                        AESTHETIC MOOD // THEMES
                      </span>
                      <Sparkles className="w-3 h-3" style={{ color: 'var(--accent)' }} />
                    </div>

                    <div className="space-y-1">
                      {THEME_PRESETS.map((preset) => {
                        const isSelected = theme === preset.id;
                        return (
                          <button
                            key={preset.id}
                            onClick={() => {
                              setTheme(preset.id as ThemePreset);
                              setThemePickerOpen(false);
                            }}
                            className="w-full text-left p-2.5 rounded-xl transition-all flex items-start gap-3 group"
                            style={{
                              backgroundColor: isSelected ? 'var(--bg-card)' : 'transparent',
                              border: isSelected ? `1px solid var(--border-active)` : '1px solid transparent',
                            }}
                          >
                            <div 
                              className="w-4 h-4 rounded-full mt-0.5 shrink-0 flex items-center justify-center border"
                              style={{ 
                                backgroundColor: preset.accentColor,
                                borderColor: 'rgba(255,255,255,0.2)' 
                              }}
                            >
                              {isSelected && <Check className="w-2.5 h-2.5 text-white" />}
                            </div>

                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <span 
                                  className="text-xs font-semibold tracking-wide"
                                  style={{ color: isSelected ? 'var(--text-title)' : 'var(--text-body)' }}
                                >
                                  {preset.name}
                                </span>
                                <span className="text-[8px] font-mono uppercase px-1.5 py-0.2 rounded" style={{ color: preset.accentColor, background: 'rgba(0,0,0,0.3)' }}>
                                  {preset.isDark ? 'Dark' : 'Light'}
                                </span>
                              </div>
                              <p className="text-[10px] truncate opacity-70 mt-0.5" style={{ color: 'var(--text-muted)' }}>
                                {preset.subtitle}
                              </p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Transmit CTA */}
            <div className="hidden sm:flex items-center">
              <a
                href="#contact"
                id="nav-cta-talk"
                className="px-4 py-1.5 text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 flex items-center gap-1.5 shadow-lg group relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-secondary) 100%)',
                  color: '#FFFFFF',
                  boxShadow: `0 0 20px -5px var(--glow-accent)`
                }}
              >
                <span className="relative z-10">Initiate Protocol</span>
                <ArrowUpRight className="w-3.5 h-3.5 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-full border transition-colors cyber-plate"
              style={{
                color: 'var(--text-title)',
                borderColor: 'var(--border-subtle)',
              }}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          id="mobile-menu-dropdown"
          className="xl:hidden border-b px-6 py-6 shadow-2xl transition-all animate-fadeIn"
          style={{
            background: 'var(--bg-surface)',
            borderColor: 'var(--border-subtle)',
          }}
        >
          <div className="flex flex-col gap-2">
            <div className="px-3 py-2 text-[10px] font-mono tracking-widest uppercase border-b mb-2 flex items-center justify-between" style={{ color: 'var(--text-muted)', borderColor: 'var(--border-subtle)' }}>
              <span>SYSTEM DIRECTORY</span>
              <span style={{ color: 'var(--accent)' }} className="font-semibold">{currentThemeInfo.name}</span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-xs font-medium uppercase tracking-wider transition-colors flex items-center justify-between cyber-plate"
                style={{ color: 'var(--text-body)' }}
              >
                <span className="flex items-center gap-2">
                  <span className="text-[9px] font-mono" style={{ color: 'var(--accent)' }}>{link.glyph}</span>
                  {link.highlight && <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent-secondary)' }} />}
                  <span style={{ color: 'var(--text-title)' }}>{link.name}</span>
                </span>
                <span className="text-xs font-mono" style={{ color: 'var(--accent)' }}>→</span>
              </a>
            ))}

            <div className="pt-4 mt-2 border-t flex flex-col gap-2.5" style={{ borderColor: 'var(--border-subtle)' }}>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full font-bold text-xs uppercase tracking-widest shadow-md transition-all text-white"
                style={{
                  background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-secondary) 100%)',
                }}
              >
                <span>Initiate Transmission</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
