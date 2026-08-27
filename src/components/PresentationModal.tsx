import React, { useState } from 'react';
import { X, Mic, Calendar, MapPin, Users, Check, Copy, Sparkles, Layers } from 'lucide-react';
import { PresentationTalk } from '../types';
import { useTheme } from '../context/ThemeContext';

interface PresentationModalProps {
  talk: PresentationTalk | null;
  onClose: () => void;
}

export const PresentationModal: React.FC<PresentationModalProps> = ({ talk, onClose }) => {
  const { currentThemeInfo } = useTheme();
  const [copied, setCopied] = useState(false);

  if (!talk) return null;

  const handleCopyCitation = () => {
    const citation = `"${talk.title}" presented by Ayomide David Oladeji at ${talk.event} (${talk.date}, ${talk.location}).`;
    navigator.clipboard.writeText(citation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto rounded-3xl border shadow-2xl p-6 sm:p-9 corner-bracket cyber-plate"
        style={{
          backgroundColor: 'var(--bg-surface)',
          borderColor: 'var(--border-active)',
          color: 'var(--text-title)'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          id="close-presentation-modal-btn"
          className="absolute top-6 right-6 p-2.5 rounded-full border transition-all cursor-pointer"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border-subtle)',
            color: 'var(--text-body)'
          }}
          aria-label="Close Presentation Details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badges */}
        <div className="pr-12 space-y-2.5 mb-6">
          <div className="flex flex-wrap items-center gap-2">
            <span 
              className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider font-semibold border flex items-center gap-1.5"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-active)',
                color: 'var(--accent)'
              }}
            >
              <Mic className="w-3 h-3" />
              {talk.type}
            </span>
            <span className="text-[10px] font-mono uppercase tracking-wider flex items-center gap-1 opacity-70">
              <Calendar className="w-3 h-3" style={{ color: 'var(--accent)' }} />
              {talk.date}
            </span>
            <span className="text-[10px] font-mono uppercase tracking-wider flex items-center gap-1 opacity-70">
              <MapPin className="w-3 h-3" style={{ color: 'var(--accent)' }} />
              {talk.location}
            </span>
            <span className="text-[10px] font-mono uppercase tracking-wider flex items-center gap-1 opacity-70">
              <Users className="w-3 h-3" style={{ color: 'var(--accent-gold)' }} />
              {talk.audience}
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-serif-mythic font-bold" style={{ color: 'var(--text-title)' }}>
            {talk.title}
          </h2>

          <p className="text-xs sm:text-sm font-mono" style={{ color: 'var(--accent-gold)' }}>
            {talk.event}
          </p>
        </div>

        {/* Abstract Box */}
        <div className="p-5 rounded-2xl border mb-6" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}>
          <span className="text-[10px] font-mono uppercase tracking-widest font-bold block mb-1.5" style={{ color: 'var(--accent)' }}>
            TALK SUMMARY & ABSTRACT:
          </span>
          <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
            {talk.abstract}
          </p>
        </div>

        {/* Detailed Key Takeaways */}
        <div className="space-y-3 mb-6">
          <span className="text-[10px] font-mono uppercase tracking-widest font-bold block" style={{ color: 'var(--accent-gold)' }}>
            KEY ARCHITECTURAL TAKEAWAYS:
          </span>
          <div className="space-y-2">
            {talk.keyTakeaways.map((takeaway, i) => (
              <div 
                key={i} 
                className="p-3 rounded-xl border flex items-start gap-2.5 text-xs font-mono"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-subtle)',
                  color: 'var(--text-body)'
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: 'var(--accent)' }} />
                <span>{takeaway}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Deck Outline */}
        {talk.deckOutline && talk.deckOutline.length > 0 && (
          <div className="space-y-3 mb-6">
            <span className="text-[10px] font-mono uppercase tracking-widest font-bold block" style={{ color: 'var(--text-muted)' }}>
              PRESENTATION DECK OUTLINE:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {talk.deckOutline.map((slide) => (
                <div 
                  key={slide.slideNumber}
                  className="p-3 rounded-xl border"
                  style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}
                >
                  <span className="text-[9px] font-mono font-bold block mb-0.5" style={{ color: 'var(--accent-gold)' }}>
                    SLIDE 0{slide.slideNumber}: {slide.title}
                  </span>
                  <p className="text-[11px]" style={{ color: 'var(--text-muted)' }}>
                    {slide.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Citation & Action Bar */}
        <div className="pt-6 border-t flex flex-wrap items-center justify-between gap-4" style={{ borderColor: 'var(--border-subtle)' }}>
          <button
            onClick={handleCopyCitation}
            className="flex items-center gap-2 text-xs font-mono transition-colors cursor-pointer"
            style={{ color: 'var(--accent)' }}
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Citation Copied' : 'Copy Academic / Event Citation'}</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-white cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-secondary) 100%)'
            }}
          >
            Close Transmission Record
          </button>
        </div>

      </div>
    </div>
  );
};
