import React from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, ExternalLink, Github, Layers } from 'lucide-react';
import { Project } from '../types';
import { useTheme } from '../context/ThemeContext';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { currentThemeInfo } = useTheme();

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl border shadow-2xl p-6 sm:p-8 corner-bracket cyber-plate"
        style={{
          backgroundColor: 'var(--bg-surface)',
          borderColor: 'var(--border-active)',
          color: 'var(--text-title)'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full border transition-colors cursor-pointer"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border-subtle)',
            color: 'var(--text-body)'
          }}
          aria-label="Close Project Details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="pr-10 space-y-2 mb-6">
          <div className="flex items-center gap-2">
            <span 
              className="px-2.5 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-wider font-semibold border"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-active)',
                color: 'var(--accent)'
              }}
            >
              {project.category}
            </span>
            <span className="text-[10px] font-mono uppercase tracking-wider opacity-60" style={{ color: 'var(--text-muted)' }}>
              STATUS: {project.status}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif-mythic font-bold" style={{ color: 'var(--text-title)' }}>
            {project.title}
          </h2>

          <p className="text-xs sm:text-sm font-mono" style={{ color: 'var(--accent-gold)' }}>
            {project.tagline}
          </p>
        </div>

        {/* Problem Solved Monolith */}
        <div 
          className="p-4 sm:p-5 rounded-2xl border mb-6"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border-subtle)'
          }}
        >
          <span className="text-[10px] font-mono uppercase tracking-widest font-bold block mb-1.5" style={{ color: 'var(--accent)' }}>
            ARCHITECTURAL PROBLEM SOLVED:
          </span>
          <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
            {project.problemSolved}
          </p>
        </div>

        {/* Deep Description */}
        <div className="space-y-4 mb-6 text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
          <p>{project.description}</p>
        </div>

        {/* Highlights List */}
        <div className="space-y-2.5 mb-6">
          <span className="text-[10px] font-mono uppercase tracking-widest font-bold block" style={{ color: 'var(--accent-gold)' }}>
            SYSTEM HIGHLIGHTS & DELIVERABLES:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.highlights.map((highlight, i) => (
              <div 
                key={i}
                className="p-3 rounded-xl border flex items-start gap-2 text-xs font-mono"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-subtle)',
                  color: 'var(--text-body)'
                }}
              >
                <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: 'var(--accent)' }} />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Matrix */}
        <div className="mb-8">
          <span className="text-[10px] font-mono uppercase tracking-widest font-bold block mb-2" style={{ color: 'var(--text-muted)' }}>
            TECHNOLOGIES EMPLOYED:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded text-xs font-mono border"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-subtle)',
                  color: 'var(--text-title)'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-5 border-t flex flex-wrap items-center justify-between gap-4" style={{ borderColor: 'var(--border-subtle)' }}>
          <div className="flex items-center gap-3">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono px-4 py-2 rounded-full border transition-all hover:scale-105"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-subtle)',
                  color: 'var(--text-title)'
                }}
              >
                <Github className="w-4 h-4" style={{ color: 'var(--accent)' }} />
                <span>Repository</span>
              </a>
            )}

            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono px-4 py-2 rounded-full font-bold transition-all text-white hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-secondary) 100%)'
                }}
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Transmission</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-white"
            style={{
              background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-secondary) 100%)'
            }}
          >
            Close Specification
          </button>
        </div>

      </div>
    </div>
  );
};
