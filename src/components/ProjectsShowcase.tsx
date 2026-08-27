import React, { useState } from 'react';
import { 
  FolderGit2, 
  Search, 
  ExternalLink, 
  Github, 
  Layers, 
  ArrowRight, 
  Sparkles,
  CheckCircle,
  Cpu,
  Database
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';
import { useTheme } from '../context/ThemeContext';

interface ProjectsShowcaseProps {
  onSelectProject: (project: Project) => void;
  onOpenHustleModal: () => void;
}

export const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({ 
  onSelectProject, 
  onOpenHustleModal 
}) => {
  const { currentThemeInfo } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories: ProjectCategory[] = ['All', 'Product', 'Software', 'AI', 'Data', 'Experiments'];

  const filteredProjects = PROJECTS_DATA.filter((proj) => {
    const matchesCategory = selectedCategory === 'All' || proj.category === selectedCategory;
    const matchesSearch = 
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.problemSolved.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section 
      id="work" 
      className="py-28 relative border-t transition-colors duration-500"
      style={{
        backgroundColor: 'var(--bg-main)',
        borderColor: 'var(--border-subtle)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div 
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest font-semibold mb-3 border cyber-plate"
              style={{
                color: 'var(--accent)',
                borderColor: 'var(--border-active)'
              }}
            >
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>CODEX // 03 · APPLIED SYSTEMS ARCHIVE</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-serif-mythic font-bold tracking-tight uppercase" style={{ color: 'var(--text-title)' }}>
              SYSTEMS & <span style={{ color: 'var(--accent)' }}>FABRICATIONS</span>
            </h2>
            
            <p className="text-xs sm:text-sm font-mono tracking-wider mt-2 max-w-2xl" style={{ color: 'var(--text-body)' }}>
              PRODUCTION SOFTWARE, HIGH-PERFORMANCE DATA PIPELINES, AND APPLIED AI AGENTS
            </p>
          </div>

          {/* Quick Counter */}
          <div 
            className="text-[10px] font-mono uppercase tracking-wider px-4 py-2 rounded-full border self-start md:self-auto cyber-plate"
            style={{ color: 'var(--text-title)', borderColor: 'var(--border-subtle)' }}
          >
            INDEX: <strong style={{ color: 'var(--accent)' }}>{filteredProjects.length}</strong> / {PROJECTS_DATA.length} SYSTEM ARTIFACTS
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 p-2.5 rounded-2xl sm:rounded-full border cyber-plate"
          style={{ borderColor: 'var(--border-subtle)' }}
        >
          {/* Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`filter-cat-${cat.toLowerCase()}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                  selectedCategory === cat ? 'shadow-md text-white' : 'opacity-70 hover:opacity-100'
                }`}
                style={{
                  background: selectedCategory === cat ? 'linear-gradient(135deg, var(--accent), var(--accent-secondary))' : 'transparent',
                  color: selectedCategory === cat ? '#FFFFFF' : 'var(--text-body)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 opacity-50" style={{ color: 'var(--accent)' }} />
            <input
              type="text"
              placeholder="Filter by keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 rounded-full text-xs font-mono focus:outline-none transition-colors border"
              style={{
                backgroundColor: 'var(--bg-surface)',
                borderColor: 'var(--border-subtle)',
                color: 'var(--text-title)'
              }}
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div 
            className="p-12 text-center rounded-3xl border corner-bracket cyber-plate"
            style={{ borderColor: 'var(--border-subtle)' }}
          >
            <p className="text-sm font-mono" style={{ color: 'var(--text-muted)' }}>
              No system artifacts found matching the query "{searchQuery}".
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, idx) => {
              const isHustle = project.id === 'hustle';
              return (
                <div
                  key={project.id}
                  id={`project-card-${project.id}`}
                  className="rounded-3xl border p-6 sm:p-7 corner-bracket flex flex-col justify-between cyber-plate group transition-all duration-300 relative overflow-hidden"
                  style={{
                    borderColor: 'var(--border-subtle)',
                    backgroundColor: 'var(--bg-card)'
                  }}
                >
                  {/* Subtle top indicator bar */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'linear-gradient(90deg, var(--accent), var(--accent-secondary))' }} />

                  <div>
                    {/* Category & Status */}
                    <div className="flex items-center justify-between mb-4">
                      <span 
                        className="px-2.5 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-widest font-bold border"
                        style={{
                          backgroundColor: 'var(--bg-surface)',
                          borderColor: 'var(--border-active)',
                          color: 'var(--accent)'
                        }}
                      >
                        {project.category}
                      </span>
                      <span className="text-[9px] font-mono tracking-widest uppercase opacity-60" style={{ color: 'var(--text-muted)' }}>
                        {project.status}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold font-serif-mythic mb-2 group-hover:text-[var(--accent)] transition-colors" style={{ color: 'var(--text-title)' }}>
                      {project.title}
                    </h3>

                    {/* Tagline */}
                    <p className="text-xs font-mono mb-4 line-clamp-2" style={{ color: 'var(--accent-gold)' }}>
                      {project.tagline}
                    </p>

                    {/* Problem Solved Snapshot */}
                    <div className="p-3.5 rounded-xl border mb-5 text-xs leading-relaxed" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)', color: 'var(--text-body)' }}>
                      <span className="text-[9px] font-mono uppercase tracking-widest block font-bold mb-1" style={{ color: 'var(--accent)' }}>
                        CORE PROBLEM RESOLVED:
                      </span>
                      {project.problemSolved}
                    </div>

                    {/* Technologies Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[9px] font-mono border"
                          style={{
                            backgroundColor: 'var(--bg-surface)',
                            borderColor: 'var(--border-subtle)',
                            color: 'var(--text-muted)'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-[9px] font-mono px-1.5 py-0.5 opacity-60" style={{ color: 'var(--text-muted)' }}>
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-4 border-t flex items-center justify-between" style={{ borderColor: 'var(--border-subtle)' }}>
                    <span className="text-[9px] font-mono" style={{ color: 'var(--text-muted)' }}>
                      ROLE: {project.role.split(',')[0]}
                    </span>
                    
                    <button
                      onClick={() => {
                        if (isHustle) {
                          onOpenHustleModal();
                        } else {
                          onSelectProject(project);
                        }
                      }}
                      className="px-3.5 py-1.5 rounded-full font-mono text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all text-white"
                      style={{
                        background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-secondary) 100%)',
                      }}
                    >
                      <span>Inspect</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
