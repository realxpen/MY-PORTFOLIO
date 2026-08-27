import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Copy, 
  Check, 
  Send, 
  Sparkles, 
  Radio,
  ExternalLink,
  ShieldAlert,
  Compass
} from 'lucide-react';
import { SOCIAL_LINKS, PERSONAL_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const ContactSection: React.FC = () => {
  const { currentThemeInfo } = useTheme();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [subjectType, setSubjectType] = useState('Product Build / Venture Collaboration');
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [senderMessage, setSenderMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SOCIAL_LINKS.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderMessage.trim()) return;

    const subject = encodeURIComponent(`[${subjectType}] From ${senderName || 'Visitor'}`);
    const body = encodeURIComponent(
      `Greetings Ayomide,\n\nName: ${senderName}\nEmail: ${senderEmail}\nTransmission Topic: ${subjectType}\n\nMessage:\n${senderMessage}\n\nTransmitted via your Afrofuturist Codex.`
    );
    window.location.href = `mailto:${SOCIAL_LINKS.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section 
      id="contact" 
      className="py-28 relative border-t transition-colors duration-500 overflow-hidden"
      style={{
        backgroundColor: 'var(--bg-main)',
        borderColor: 'var(--border-subtle)'
      }}
    >
      {/* Background Solar Halo */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full pointer-events-none opacity-20 blur-[140px]"
        style={{ background: 'radial-gradient(circle, var(--glow-accent) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div 
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest font-semibold border cyber-plate"
            style={{
              color: 'var(--accent)',
              borderColor: 'var(--border-active)'
            }}
          >
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>CODEX // 10 · DIRECT TRANSMISSION BEACON</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-serif-mythic font-bold tracking-tight uppercase" style={{ color: 'var(--text-title)' }}>
            COMMENCE <span style={{ color: 'var(--accent)' }}>TRANSMISSION</span>
          </h2>
          
          <p className="text-xs sm:text-sm font-mono tracking-wider max-w-2xl mx-auto" style={{ color: 'var(--text-body)' }}>
            AVAILABLE FOR VENTURE ARCHITECTURE, DISTRIBUTED SYSTEMS ENGINEERING, AND ADVISORY ROLES
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Inscription & Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            
            <div 
              className="p-8 rounded-3xl border corner-bracket cyber-plate"
              style={{
                borderColor: 'var(--border-subtle)',
                backgroundColor: 'var(--bg-card)'
              }}
            >
              <span className="text-[10px] font-mono uppercase tracking-widest block mb-2 font-bold" style={{ color: 'var(--accent)' }}>
                DIRECT DISPATCH LINK
              </span>
              
              <h3 className="text-2xl font-serif-mythic font-bold mb-4" style={{ color: 'var(--text-title)' }}>
                Let's Build Sovereign Software.
              </h3>
              
              <p className="text-xs sm:text-sm leading-relaxed mb-6" style={{ color: 'var(--text-body)' }}>
                Whether you're exploring a scalable venture, architecting distributed trust rails, seeking a technical speaker, or deploying high-performance data systems, my frequency is open.
              </p>

              {/* Copyable Email Pill */}
              <div 
                className="p-3.5 rounded-2xl border flex items-center justify-between gap-3 mb-6 cyber-plate"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  borderColor: 'var(--border-subtle)'
                }}
              >
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="w-4 h-4 shrink-0" style={{ color: 'var(--accent)' }} />
                  <span className="text-xs font-mono truncate" style={{ color: 'var(--text-title)' }}>
                    {SOCIAL_LINKS.email}
                  </span>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1 transition-all border"
                  style={{
                    backgroundColor: copiedEmail ? 'var(--accent)' : 'var(--bg-card)',
                    borderColor: 'var(--border-active)',
                    color: copiedEmail ? '#FFFFFF' : 'var(--accent)'
                  }}
                >
                  {copiedEmail ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Origin Coordinates */}
              <div className="p-4 rounded-2xl border text-xs font-mono space-y-1.5" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}>
                <div className="flex justify-between">
                  <span style={{ color: 'var(--text-muted)' }}>ORIGIN:</span>
                  <span style={{ color: 'var(--text-title)' }}>NIGERIA (UTC+1)</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: 'var(--text-muted)' }}>COORDINATES:</span>
                  <span style={{ color: 'var(--accent-gold)' }}>09°04'N 07°29'E</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: 'var(--text-muted)' }}>TRANSMISSION TIME:</span>
                  <span style={{ color: 'var(--accent)' }}>&lt; 24 HOURS</span>
                </div>
              </div>
            </div>

            {/* Social Channels Plate */}
            <div 
              className="p-6 rounded-3xl border cyber-plate flex items-center justify-around"
              style={{
                borderColor: 'var(--border-subtle)',
                backgroundColor: 'var(--bg-card)'
              }}
            >
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono transition-transform hover:scale-105"
                style={{ color: 'var(--text-title)' }}
              >
                <Github className="w-4 h-4" style={{ color: 'var(--accent)' }} />
                <span>GITHUB</span>
              </a>

              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono transition-transform hover:scale-105"
                style={{ color: 'var(--text-title)' }}
              >
                <Linkedin className="w-4 h-4" style={{ color: 'var(--accent)' }} />
                <span>LINKEDIN</span>
              </a>

              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="flex items-center gap-2 text-xs font-mono transition-transform hover:scale-105"
                style={{ color: 'var(--text-title)' }}
              >
                <Mail className="w-4 h-4" style={{ color: 'var(--accent)' }} />
                <span>DIRECT EMAIL</span>
              </a>
            </div>

          </div>

          {/* Right Column: Transmission Dispatch Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-8 sm:p-10 rounded-3xl border corner-bracket cyber-plate space-y-6"
              style={{
                borderColor: 'var(--border-active)',
                backgroundColor: 'var(--bg-card)'
              }}
            >
              <div className="flex items-center justify-between pb-3 border-b" style={{ borderColor: 'var(--border-subtle)' }}>
                <span className="text-[10px] font-mono uppercase tracking-widest font-bold" style={{ color: 'var(--accent)' }}>
                  ENCRYPTED TRANSMISSION FORM
                </span>
                <span className="text-[9px] font-mono" style={{ color: 'var(--accent-gold)' }}>
                  DIRECT BEACON
                </span>
              </div>

              {/* Topic Selector */}
              <div>
                <label className="text-[10px] font-mono uppercase tracking-widest block mb-2" style={{ color: 'var(--text-muted)' }}>
                  TRANSMISSION REASON / DOMAIN
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    'Product Build / Venture Collaboration',
                    'Distributed Systems Engineering',
                    'Speaking / Keynote Transmission',
                    'Advisory / General Inquiry'
                  ].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setSubjectType(type)}
                      className="p-3 rounded-xl text-left text-xs font-mono transition-all border"
                      style={{
                        backgroundColor: subjectType === type ? 'var(--bg-card-hover)' : 'var(--bg-surface)',
                        borderColor: subjectType === type ? 'var(--border-active)' : 'var(--border-subtle)',
                        color: subjectType === type ? 'var(--accent)' : 'var(--text-body)'
                      }}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-mono uppercase tracking-widest block mb-1.5" style={{ color: 'var(--text-muted)' }}>
                    YOUR IDENTITY / NAME
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Kwame Mensah"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl text-xs font-mono focus:outline-none transition-colors border"
                    style={{
                      backgroundColor: 'var(--bg-surface)',
                      borderColor: 'var(--border-subtle)',
                      color: 'var(--text-title)'
                    }}
                  />
                </div>

                <div>
                  <label className="text-[10px] font-mono uppercase tracking-widest block mb-1.5" style={{ color: 'var(--text-muted)' }}>
                    YOUR TRANSMISSION ADDRESS (EMAIL)
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. kwame@frontier.io"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl text-xs font-mono focus:outline-none transition-colors border"
                    style={{
                      backgroundColor: 'var(--bg-surface)',
                      borderColor: 'var(--border-subtle)',
                      color: 'var(--text-title)'
                    }}
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label className="text-[10px] font-mono uppercase tracking-widest block mb-1.5" style={{ color: 'var(--text-muted)' }}>
                  MESSAGE CONTENT / SPECIFICATION
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Outline your architectural challenge, product vision, or speaking event..."
                  value={senderMessage}
                  onChange={(e) => setSenderMessage(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl text-xs font-mono focus:outline-none transition-colors border"
                  style={{
                    backgroundColor: 'var(--bg-surface)',
                    borderColor: 'var(--border-subtle)',
                    color: 'var(--text-title)'
                  }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl text-xs font-mono font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all text-white shadow-xl group cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-secondary) 100%)',
                  boxShadow: '0 0 25px -4px var(--glow-accent)'
                }}
              >
                <span>Dispatch Transmission</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {submitted && (
                <p className="text-center text-xs font-mono" style={{ color: 'var(--accent-gold)' }}>
                  Transmission window opened. Looking forward to our architectural dialogue.
                </p>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
