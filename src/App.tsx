/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { FeaturedHustle } from './components/FeaturedHustle';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { SkillsMatrix } from './components/SkillsMatrix';
import { HowIBuild } from './components/HowIBuild';
import { JourneyTimeline } from './components/JourneyTimeline';
import { PresentationsSection } from './components/PresentationsSection';
import { CurrentlyBuilding } from './components/CurrentlyBuilding';
import { ThinkingLab } from './components/ThinkingLab';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { HustleCaseStudyModal } from './components/HustleCaseStudyModal';
import { ProjectModal } from './components/ProjectModal';
import { PresentationModal } from './components/PresentationModal';
import { Project, PresentationTalk } from './types';
import { PROJECTS_DATA } from './data/portfolioData';
import { ThemeProvider, useTheme } from './context/ThemeContext';

function PortfolioContent() {
  const { isDark } = useTheme();
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isHustleModalOpen, setIsHustleModalOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedTalk, setSelectedTalk] = useState<PresentationTalk | null>(null);

  // Scroll spy for active navbar section
  useEffect(() => {
    const sectionIds = [
      'hero',
      'about',
      'hustle',
      'work',
      'skills',
      'how-i-build',
      'journey',
      'presentations',
      'currently-building',
      'thinking',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenScraperProject = () => {
    const scraperProj = PROJECTS_DATA.find(p => p.id === 'market-intel-scraper');
    if (scraperProj) {
      setSelectedProject(scraperProj);
    }
  };

  const handleOpenLabNote = () => {
    const thinkingEl = document.getElementById('thinking');
    if (thinkingEl) {
      thinkingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-[#050508] text-[#F8FAFC]' : 'bg-[#F8FAFC] text-[#0F172A]'
    } selection:bg-blue-600/30 selection:text-blue-500 relative overflow-x-hidden`}>
      {/* Background Luxury Dot Overlay */}
      <div 
        className={`fixed inset-0 pointer-events-none z-0 ${isDark ? 'opacity-[0.035]' : 'opacity-[0.045]'}`}
        style={{ backgroundImage: 'radial-gradient(#2563eb 0.75px, transparent 0.75px)', backgroundSize: '24px 24px' }}
      />

      {/* Sticky Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero 
          onOpenHustleModal={() => setIsHustleModalOpen(true)} 
        />

        <AboutSection />

        <FeaturedHustle 
          onOpenCaseStudy={() => setIsHustleModalOpen(true)} 
        />

        <ProjectsShowcase 
          onSelectProject={(proj) => setSelectedProject(proj)}
          onOpenHustleModal={() => setIsHustleModalOpen(true)}
        />

        <SkillsMatrix />

        <HowIBuild />

        <JourneyTimeline />

        <PresentationsSection 
          onSelectTalk={(talk) => setSelectedTalk(talk)}
        />

        <CurrentlyBuilding 
          onOpenHustleModal={() => setIsHustleModalOpen(true)}
          onOpenScraperProject={handleOpenScraperProject}
          onOpenLabNote={handleOpenLabNote}
        />

        <ThinkingLab />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <HustleCaseStudyModal 
        isOpen={isHustleModalOpen}
        onClose={() => setIsHustleModalOpen(false)}
      />

      <ProjectModal 
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <PresentationModal 
        talk={selectedTalk}
        onClose={() => setSelectedTalk(null)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}

