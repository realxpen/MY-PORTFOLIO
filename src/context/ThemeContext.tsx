import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemePreset = 'terracotta' | 'solar' | 'codex' | 'ivory';

export interface ThemeInfo {
  id: ThemePreset;
  name: string;
  subtitle: string;
  accentColor: string;
  glowColor: string;
  badge: string;
  isDark: boolean;
  bgClass: string;
}

export const THEME_PRESETS: ThemeInfo[] = [
  {
    id: 'terracotta',
    name: 'Cyber Terracotta',
    subtitle: 'Ancient Rose Clay · Glowing Crimson Circuits · Chrome Armor',
    accentColor: '#C86D51',
    glowColor: 'rgba(225, 29, 72, 0.4)',
    badge: '🏺 MASTER AFROFUTURISM',
    isDark: true,
    bgClass: 'bg-[#080607]',
  },
  {
    id: 'solar',
    name: 'Solar Ochre & Magma',
    subtitle: 'Marigold Ceremonial Halo · Volcanic Basalt · Molten Amber',
    accentColor: '#F59E0B',
    glowColor: 'rgba(245, 158, 11, 0.4)',
    badge: '☀️ SOLAR HALO MONOLITH',
    isDark: true,
    bgClass: 'bg-[#080605]',
  },
  {
    id: 'codex',
    name: 'Obsidian & Gold Codex',
    subtitle: 'Matte Onyx Tome · Metallic Gold Calligraphy · Totemic Glyphs',
    accentColor: '#DFB15B',
    glowColor: 'rgba(223, 177, 91, 0.4)',
    badge: '📜 GOLD FOIL ARCHIVE',
    isDark: true,
    bgClass: 'bg-[#050507]',
  },
  {
    id: 'ivory',
    name: 'Ivory & Chrome Relic',
    subtitle: 'Sculptural Totem Cowl · Polished Platinum · Editorial Parchment',
    accentColor: '#B85D43',
    glowColor: 'rgba(184, 93, 67, 0.25)',
    badge: '🏛️ HIGH-FASHION SCULPTURAL',
    isDark: false,
    bgClass: 'bg-[#FCFAF7]',
  },
];

interface ThemeContextType {
  theme: ThemePreset;
  currentThemeInfo: ThemeInfo;
  isDark: boolean;
  setTheme: (preset: ThemePreset) => void;
  cycleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemePreset>(() => {
    const saved = localStorage.getItem('ayomide_portfolio_theme_preset') as ThemePreset | null;
    if (saved && THEME_PRESETS.some(t => t.id === saved)) {
      return saved;
    }
    return 'terracotta'; // Default to Cyber Terracotta (Images 1 & 5)
  });

  const currentThemeInfo = THEME_PRESETS.find(t => t.id === theme) || THEME_PRESETS[0];

  useEffect(() => {
    const root = document.documentElement;
    
    // Remove all previous theme classes
    THEME_PRESETS.forEach(t => {
      root.classList.remove(`theme-${t.id}`);
    });
    root.classList.remove('dark', 'light');

    // Apply current theme class and dark/light mode
    root.classList.add(`theme-${theme}`);
    if (currentThemeInfo.isDark) {
      root.classList.add('dark');
    } else {
      root.classList.add('light');
    }

    localStorage.setItem('ayomide_portfolio_theme_preset', theme);
  }, [theme, currentThemeInfo.isDark]);

  const cycleTheme = () => {
    const currentIndex = THEME_PRESETS.findIndex(t => t.id === theme);
    const nextIndex = (currentIndex + 1) % THEME_PRESETS.length;
    setThemeState(THEME_PRESETS[nextIndex].id);
  };

  const setTheme = (preset: ThemePreset) => {
    setThemeState(preset);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        currentThemeInfo,
        isDark: currentThemeInfo.isDark,
        setTheme,
        cycleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
