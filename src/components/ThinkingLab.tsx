import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  X, 
  Share2, 
  Copy, 
  Check,
  Feather,
  Bookmark
} from 'lucide-react';
import { THINKING_ARTICLES } from '../data/portfolioData';
import { ThinkingArticle } from '../types';
import { useTheme } from '../context/ThemeContext';

interface ThinkingLabProps {
  initialOpenArticleId?: string | null;
}

export const ThinkingLab: React.FC<ThinkingLabProps> = ({ initialOpenArticleId }) => {
  const { currentThemeInfo } = useTheme();
  const [selectedArticle, setSelectedArticle] = useState<ThinkingArticle | null>(
    initialOpenArticleId 
      ? THINKING_ARTICLES.find(a => a.id === initialOpenArticleId) || null 
      : null
  );
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section 
      id="thinking" 
      className="py-28 relative border-t transition-colors duration-500"
      style={{
        backgroundColor: 'var(--bg-main)',
        borderColor: 'var(--border-subtle)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div 
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest font-semibold mb-3 border cyber-plate"
              style={{
                color: 'var(--accent)',
                borderColor: 'var(--border-active)'
              }}
            >
              <Feather className="w-3.5 h-3.5" />
              <span>CODEX // 07 · GOLD FOIL ESSAYS & ARCHIVES</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-serif-mythic font-bold tracking-tight uppercase" style={{ color: 'var(--text-title)' }}>
              THE SOVEREIGN <span className="text-gold-foil">CODEX</span>
            </h2>
            
            <p className="text-xs sm:text-sm font-mono tracking-wider mt-2 max-w-2xl" style={{ color: 'var(--text-body)' }}>
              ENGINEERING PHILOSOPHY, MARKETPLACE INCENTIVES, AND DISTRIBUTED TRUST MECHANICS
            </p>
          </div>

          <div 
            className="text-[10px] font-mono uppercase tracking-wider px-4 py-2 rounded-full border self-start md:self-auto cyber-plate"
            style={{ color: 'var(--text-title)', borderColor: 'var(--border-subtle)' }}
          >
            VOLUMES IN ARCHIVE: <strong style={{ color: 'var(--accent-gold)' }}>{THINKING_ARTICLES.length}</strong>
          </div>
        </div>

        {/* Highlight Quote Box (Directly honoring Image 4) */}
        <div 
          className="mb-12 p-8 sm:p-10 rounded-3xl border corner-bracket relative overflow-hidden text-center cyber-plate"
          style={{
            borderColor: 'var(--border-subtle)',
            backgroundColor: 'var(--bg-card)'
          }}
        >
          <span className="text-[9px] font-mono uppercase tracking-[0.3em] block mb-3 opacity-60" style={{ color: 'var(--accent-gold)' }}>
            INSCRIPTION // PAGE 48
          </span>
          <p className="font-script-gold text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-3xl mx-auto" style={{ color: 'var(--accent-gold)' }}>
            "Maybe we'll never build the same thing twice, but to architect systems that endure — that is the true art."
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="w-8 h-[1px]" style={{ backgroundColor: 'var(--accent-gold)' }} />
            <span className="text-[10px] font-serif-mythic tracking-widest uppercase" style={{ color: 'var(--text-title)' }}>
              AYOMIDE DAVID OLADEJI · ARCHIVE NOTE
            </span>
            <span className="w-8 h-[1px]" style={{ backgroundColor: 'var(--accent-gold)' }} />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {THINKING_ARTICLES.map((article, index) => (
            <div
              key={article.id}
              id={`article-card-${article.id}`}
              onClick={() => setSelectedArticle(article)}
              className="rounded-3xl p-7 border corner-bracket flex flex-col justify-between cyber-plate group cursor-pointer transition-all duration-300 relative overflow-hidden"
              style={{
                borderColor: 'var(--border-subtle)',
                backgroundColor: 'var(--bg-card)'
              }}
            >
              {/* Top Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'linear-gradient(90deg, var(--accent-gold), var(--accent))' }} />

              <div>
                <div className="flex items-center justify-between mb-4 text-[9px] font-mono uppercase tracking-wider">
                  <span 
                    className="px-2.5 py-0.5 rounded-full border font-semibold"
                    style={{
                      backgroundColor: 'var(--bg-surface)',
                      borderColor: 'var(--border-active)',
                      color: 'var(--accent-gold)'
                    }}
                  >
                    {article.topic}
                  </span>
                  <span className="flex items-center gap-1 opacity-60" style={{ color: 'var(--text-muted)' }}>
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>

                <span className="text-[10px] font-mono tracking-widest block mb-1 opacity-50" style={{ color: 'var(--accent)' }}>
                  CODEX ENTRY 0{index + 1}
                </span>

                <h3 className="text-xl font-bold font-serif-mythic mb-3 group-hover:text-[var(--accent-gold)] transition-colors" style={{ color: 'var(--text-title)' }}>
                  {article.title}
                </h3>

                <p className="text-xs leading-relaxed mb-6" style={{ color: 'var(--text-body)' }}>
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 border-t flex items-center justify-between" style={{ borderColor: 'var(--border-subtle)' }}>
                <span className="text-[9px] font-mono" style={{ color: 'var(--text-muted)' }}>
                  {article.date}
                </span>
                
                <span className="font-mono text-xs font-bold flex items-center gap-1.5 group-hover:translate-x-1 transition-transform" style={{ color: 'var(--accent-gold)' }}>
                  <span>Read Codex</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
          <div 
            className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl border p-6 sm:p-10 corner-bracket cyber-plate"
            style={{
              backgroundColor: 'var(--bg-surface)',
              borderColor: 'var(--border-active)',
              color: 'var(--text-title)'
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 p-2 rounded-full border transition-colors"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-subtle)',
                color: 'var(--text-body)'
              }}
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="pr-12 mb-6">
              <div className="flex items-center gap-2 mb-2 text-[10px] font-mono uppercase tracking-wider">
                <span className="px-2.5 py-0.5 rounded-full border" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-active)', color: 'var(--accent-gold)' }}>
                  {selectedArticle.topic}
                </span>
                <span style={{ color: 'var(--text-muted)' }}>· {selectedArticle.date}</span>
                <span style={{ color: 'var(--text-muted)' }}>· {selectedArticle.readTime}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif-mythic font-bold" style={{ color: 'var(--text-title)' }}>
                {selectedArticle.title}
              </h2>
            </div>

            {/* Article Content */}
            <div className="space-y-4 text-xs sm:text-sm leading-relaxed mb-8" style={{ color: 'var(--text-body)' }}>
              {selectedArticle.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {/* Takeaways Box */}
            <div className="p-5 rounded-2xl border mb-8" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}>
              <span className="text-[10px] font-mono uppercase tracking-widest font-bold block mb-3" style={{ color: 'var(--accent-gold)' }}>
                KEY ARCHITECTURAL TAKEAWAYS:
              </span>
              <ul className="space-y-2">
                {selectedArticle.keyTakeaways.map((takeaway, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs font-mono" style={{ color: 'var(--text-body)' }}>
                    <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: 'var(--accent-gold)' }} />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t flex items-center justify-between" style={{ borderColor: 'var(--border-subtle)' }}>
              <button
                onClick={handleCopyLink}
                className="flex items-center gap-2 text-xs font-mono transition-colors"
                style={{ color: 'var(--accent)' }}
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Link Copied' : 'Copy Reference'}</span>
              </button>

              <button
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-white"
                style={{
                  background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-secondary) 100%)'
                }}
              >
                Close Codex Entry
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
