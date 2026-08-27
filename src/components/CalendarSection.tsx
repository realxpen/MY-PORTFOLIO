import React, { useState, useEffect } from 'react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Video, 
  CheckCircle2, 
  Sparkles, 
  AlertCircle, 
  RefreshCw, 
  Trash2, 
  ExternalLink, 
  User as UserIcon, 
  LogOut, 
  Plus, 
  MapPin, 
  Layers, 
  ShieldCheck,
  Radio,
  ChevronRight
} from 'lucide-react';
import { User } from 'firebase/auth';
import { 
  initAuth, 
  signInWithGoogleCalendar, 
  signOutCalendar, 
  getCalendarAccessToken, 
  fetchUpcomingCalendarEvents, 
  createCalendarEvent, 
  deleteCalendarEvent, 
  CalendarEventItem,
  CreateEventParams,
  CALENDAR_SCOPES
} from '../services/googleCalendar';
import { SOCIAL_LINKS, PERSONAL_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const CalendarSection: React.FC = () => {
  const { currentThemeInfo } = useTheme();
  
  // Auth state
  const [user, setUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [authLoading, setAuthLoading] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  // Calendar events state
  const [events, setEvents] = useState<CalendarEventItem[]>([]);
  const [eventsLoading, setEventsLoading] = useState(false);
  const [eventsError, setEventsError] = useState<string | null>(null);

  // Event creation form state
  const [sessionType, setSessionType] = useState('Venture Architecture & Engineering Sync');
  const [bookingDate, setBookingDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [bookingTime, setBookingTime] = useState('14:00');
  const [durationMinutes, setDurationMinutes] = useState(45);
  const [attendeeEmail, setAttendeeEmail] = useState('');
  const [guestName, setGuestName] = useState('');
  const [meetingNotes, setMeetingNotes] = useState('');
  const [includeMeet, setIncludeMeet] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [scheduleSuccess, setScheduleSuccess] = useState<CalendarEventItem | null>(null);
  const [actionError, setActionError] = useState<string | null>(null);

  // Initialize Auth state listener
  useEffect(() => {
    const unsubscribe = initAuth(
      (authedUser, token) => {
        setUser(authedUser);
        setAccessToken(token);
        loadEvents(token);
      },
      () => {
        setUser(null);
        setAccessToken(null);
        setEvents([]);
      }
    );

    return () => {
      if (typeof unsubscribe === 'function') unsubscribe();
    };
  }, []);

  const loadEvents = async (token: string) => {
    setEventsLoading(true);
    setEventsError(null);
    try {
      const data = await fetchUpcomingCalendarEvents(token, 10);
      setEvents(data);
    } catch (err: any) {
      console.error('Failed to load events:', err);
      setEventsError(err.message || 'Could not retrieve calendar transmissions');
    } finally {
      setEventsLoading(false);
    }
  };

  const handleSignIn = async () => {
    setAuthLoading(true);
    setAuthError(null);
    try {
      const result = await signInWithGoogleCalendar();
      if (result) {
        setUser(result.user);
        setAccessToken(result.accessToken);
        await loadEvents(result.accessToken);
      }
    } catch (err: any) {
      console.error('Sign in failed:', err);
      setAuthError(err.message || 'Authentication with Google Calendar failed');
    } finally {
      setAuthLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOutCalendar();
      setUser(null);
      setAccessToken(null);
      setEvents([]);
      setScheduleSuccess(null);
    } catch (err: any) {
      console.error('Sign out failed:', err);
    }
  };

  const handleScheduleEvent = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!accessToken) {
      setActionError('Please connect with Google Calendar first.');
      return;
    }

    setIsSubmitting(true);
    setActionError(null);
    setScheduleSuccess(null);

    try {
      // Calculate ISO Start and End
      const startDateTime = new Date(`${bookingDate}T${bookingTime}:00`);
      const endDateTime = new Date(startDateTime.getTime() + durationMinutes * 60000);

      const summary = `[Codex Sync] ${sessionType} · ${guestName || 'Architect'}`;
      const description = `Session Type: ${sessionType}\nGuest Name: ${guestName}\nGuest Email: ${attendeeEmail}\nOrganizer: ${PERSONAL_INFO.name} (${SOCIAL_LINKS.email})\n\nAgenda / Objective:\n${meetingNotes || 'Architectural exploration & systems engineering dialogue.'}\n\nScheduled via Ayomide David Oladeji Afrofuturist Codex.`;

      const params: CreateEventParams = {
        summary,
        description,
        startDateTime: startDateTime.toISOString(),
        endDateTime: endDateTime.toISOString(),
        attendeeEmail: attendeeEmail.trim() || undefined,
        location: includeMeet ? 'Google Meet Video Broadcast' : 'Remote Dispatch',
        meetLink: includeMeet
      };

      const newEvent = await createCalendarEvent(accessToken, params);
      setScheduleSuccess(newEvent);
      
      // Reset form fields
      setMeetingNotes('');
      
      // Reload events
      await loadEvents(accessToken);
    } catch (err: any) {
      console.error('Schedule failed:', err);
      setActionError(err.message || 'Failed to dispatch calendar event.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteEvent = async (eventId: string) => {
    if (!accessToken) return;
    try {
      await deleteCalendarEvent(accessToken, eventId);
      setEvents(prev => prev.filter(ev => ev.id !== eventId));
    } catch (err: any) {
      console.error('Failed to delete event:', err);
      setActionError(err.message || 'Failed to remove calendar event.');
    }
  };

  const formatEventDate = (isoString?: string) => {
    if (!isoString) return 'TBD';
    const date = new Date(isoString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatEventTime = (startIso?: string, endIso?: string) => {
    if (!startIso) return 'All Day';
    const start = new Date(startIso);
    const timeStr = start.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
    if (!endIso) return timeStr;
    const end = new Date(endIso);
    const endStr = end.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
    return `${timeStr} – ${endStr}`;
  };

  return (
    <section 
      id="calendar" 
      className="py-28 relative border-t transition-colors duration-500 overflow-hidden"
      style={{
        backgroundColor: 'var(--bg-main)',
        borderColor: 'var(--border-subtle)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
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
              <CalendarIcon className="w-3.5 h-3.5" />
              <span>CODEX // 11 · GOOGLE CALENDAR SYNCHRONIZER</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-serif-mythic font-bold tracking-tight uppercase" style={{ color: 'var(--text-title)' }}>
              CALENDAR <span style={{ color: 'var(--accent)' }}>CONSOLES</span>
            </h2>
            
            <p className="text-xs sm:text-sm font-mono tracking-wider mt-2 max-w-2xl" style={{ color: 'var(--text-body)' }}>
              LIVE SCHEDULING, DIRECT GOOGLE MEET BROADCASTS, AND REAL-TIME TIME-SLOT TELEMETRY
            </p>
          </div>

          {/* User Status Bar */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            {user ? (
              <div 
                className="flex items-center gap-3 px-4 py-2 rounded-2xl border cyber-plate"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-active)'
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: 'var(--accent)' }} />
                  <span className="text-xs font-mono font-bold" style={{ color: 'var(--text-title)' }}>
                    {user.displayName || user.email}
                  </span>
                </div>

                <button
                  onClick={handleSignOut}
                  className="p-1.5 rounded-lg border text-xs font-mono transition-colors opacity-70 hover:opacity-100 cursor-pointer"
                  style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-muted)' }}
                  title="Disconnect Google Account"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <div 
                className="text-[10px] font-mono uppercase tracking-wider px-4 py-2 rounded-full border cyber-plate"
                style={{ color: 'var(--text-title)', borderColor: 'var(--border-subtle)' }}
              >
                STATUS: <strong style={{ color: 'var(--accent-gold)' }}>AWAITING GOOGLE AUTH</strong>
              </div>
            )}
          </div>
        </div>

        {/* Main Grid: Scheduler + Calendar Telemetry */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Booking & Event Creation Form */}
          <div className="lg:col-span-7 space-y-6">
            <div 
              className="p-8 sm:p-10 rounded-3xl border corner-bracket cyber-plate relative"
              style={{
                borderColor: 'var(--border-active)',
                backgroundColor: 'var(--bg-card)'
              }}
            >
              <div className="flex items-center justify-between pb-4 border-b mb-6" style={{ borderColor: 'var(--border-subtle)' }}>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest font-bold block" style={{ color: 'var(--accent)' }}>
                    DIRECT ARCHITECTURAL BOOKING
                  </span>
                  <h3 className="text-xl font-serif-mythic font-bold" style={{ color: 'var(--text-title)' }}>
                    Schedule Session on Google Calendar
                  </h3>
                </div>

                <span className="text-[9px] font-mono px-2 py-0.5 rounded border" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)', color: 'var(--accent-gold)' }}>
                  PRIMARY CALENDAR
                </span>
              </div>

              {!user ? (
                /* Google Sign In Call to Action */
                <div className="text-center py-10 space-y-5">
                  <div 
                    className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center border cyber-plate"
                    style={{
                      backgroundColor: 'var(--bg-surface)',
                      borderColor: 'var(--border-active)',
                      color: 'var(--accent)'
                    }}
                  >
                    <CalendarIcon className="w-7 h-7" />
                  </div>

                  <div className="max-w-md mx-auto space-y-2">
                    <h4 className="text-lg font-serif-mythic font-bold" style={{ color: 'var(--text-title)' }}>
                      Connect Google Calendar
                    </h4>
                    <p className="text-xs font-mono leading-relaxed" style={{ color: 'var(--text-body)' }}>
                      Sign in with Google to synchronize upcoming meetings, schedule advisory sessions, and generate instant Google Meet links directly in your calendar.
                    </p>
                  </div>

                  {/* Standard Sign In with Google Button */}
                  <div className="flex justify-center pt-2">
                    <button 
                      onClick={handleSignIn}
                      disabled={authLoading}
                      id="google-signin-calendar-btn"
                      className="gsi-material-button cyber-plate transition-all hover:scale-105 active:scale-95 cursor-pointer"
                      style={{
                        backgroundColor: '#131314',
                        borderColor: '#8e918f',
                        borderRadius: '24px',
                        padding: '12px 24px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '12px',
                        border: '1px solid var(--border-active)'
                      }}
                    >
                      <div className="gsi-material-button-icon">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" style={{ display: 'block', width: '20px', height: '20px' }}>
                          <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                          <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                          <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                          <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                          <path fill="none" d="M0 0h48v48H0z"></path>
                        </svg>
                      </div>
                      <span className="text-xs font-mono font-bold tracking-wider text-white">
                        {authLoading ? 'Connecting...' : 'Sign in with Google'}
                      </span>
                    </button>
                  </div>

                  {authError && (
                    <div className="p-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-mono text-rose-400" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'rgba(244,63,94,0.3)' }}>
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{authError}</span>
                    </div>
                  )}
                </div>
              ) : (
                /* Booking Form */
                <form onSubmit={handleScheduleEvent} className="space-y-5 animate-fadeIn">
                  
                  {/* Session Archetype Selection */}
                  <div>
                    <label className="text-[10px] font-mono uppercase tracking-widest block mb-2" style={{ color: 'var(--text-muted)' }}>
                      SESSION ARCHETYPE
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {[
                        'Venture Architecture & Engineering Sync',
                        'Distributed Systems & Escrow Advisory',
                        'Keynote & Discourse Preparation',
                        'Codebase Review & Technical Deep Dive'
                      ].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setSessionType(type)}
                          className="p-3 rounded-xl text-left text-xs font-mono transition-all border cursor-pointer"
                          style={{
                            backgroundColor: sessionType === type ? 'var(--bg-card-hover)' : 'var(--bg-surface)',
                            borderColor: sessionType === type ? 'var(--border-active)' : 'var(--border-subtle)',
                            color: sessionType === type ? 'var(--accent)' : 'var(--text-body)'
                          }}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name and Attendee Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-mono uppercase tracking-widest block mb-1.5" style={{ color: 'var(--text-muted)' }}>
                        YOUR NAME / IDENTITY
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alexis Vance"
                        value={guestName}
                        onChange={(e) => setGuestName(e.target.value)}
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
                        INVITEE EMAIL (INVITATION DISPATCH)
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. alexis@frontier.vc"
                        value={attendeeEmail}
                        onChange={(e) => setAttendeeEmail(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl text-xs font-mono focus:outline-none transition-colors border"
                        style={{
                          backgroundColor: 'var(--bg-surface)',
                          borderColor: 'var(--border-subtle)',
                          color: 'var(--text-title)'
                        }}
                      />
                    </div>
                  </div>

                  {/* Date, Time & Duration */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-[10px] font-mono uppercase tracking-widest block mb-1.5" style={{ color: 'var(--text-muted)' }}>
                        TRANSMISSION DATE
                      </label>
                      <input
                        type="date"
                        required
                        min={new Date().toISOString().split('T')[0]}
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
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
                        START TIME (LOCAL)
                      </label>
                      <input
                        type="time"
                        required
                        value={bookingTime}
                        onChange={(e) => setBookingTime(e.target.value)}
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
                        DURATION
                      </label>
                      <select
                        value={durationMinutes}
                        onChange={(e) => setDurationMinutes(Number(e.target.value))}
                        className="w-full px-4 py-2.5 rounded-xl text-xs font-mono focus:outline-none transition-colors border"
                        style={{
                          backgroundColor: 'var(--bg-surface)',
                          borderColor: 'var(--border-subtle)',
                          color: 'var(--text-title)'
                        }}
                      >
                        <option value={30}>30 Minutes</option>
                        <option value={45}>45 Minutes (Recommended)</option>
                        <option value={60}>60 Minutes (Deep Dive)</option>
                      </select>
                    </div>
                  </div>

                  {/* Google Meet Toggle */}
                  <div className="flex items-center justify-between p-3.5 rounded-2xl border" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}>
                    <div className="flex items-center gap-2.5">
                      <Video className="w-4 h-4" style={{ color: 'var(--accent)' }} />
                      <div>
                        <span className="text-xs font-mono font-bold block" style={{ color: 'var(--text-title)' }}>
                          Generate Google Meet Video Broadcast
                        </span>
                        <span className="text-[10px] opacity-60 font-mono" style={{ color: 'var(--text-muted)' }}>
                          Automatically inject video link into calendar invitation
                        </span>
                      </div>
                    </div>

                    <input
                      type="checkbox"
                      checked={includeMeet}
                      onChange={(e) => setIncludeMeet(e.target.checked)}
                      className="w-4 h-4 accent-[var(--accent)] cursor-pointer"
                    />
                  </div>

                  {/* Meeting Notes */}
                  <div>
                    <label className="text-[10px] font-mono uppercase tracking-widest block mb-1.5" style={{ color: 'var(--text-muted)' }}>
                      SPECIFICATIONS / TOPICS TO ADDRESS
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Detail the technical hurdles, architectural blueprint questions, or venture objectives..."
                      value={meetingNotes}
                      onChange={(e) => setMeetingNotes(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl text-xs font-mono focus:outline-none transition-colors border"
                      style={{
                        backgroundColor: 'var(--bg-surface)',
                        borderColor: 'var(--border-subtle)',
                        color: 'var(--text-title)'
                      }}
                    />
                  </div>

                  {/* Submit Action */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-2xl text-xs font-mono font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all text-white shadow-xl group cursor-pointer"
                    style={{
                      background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-secondary) 100%)',
                      boxShadow: '0 0 25px -4px var(--glow-accent)'
                    }}
                  >
                    <span>{isSubmitting ? 'Syncing to Google Calendar...' : 'Confirm & Inscribe in Google Calendar'}</span>
                    <CalendarIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </button>

                  {/* Success Feedback */}
                  {scheduleSuccess && (
                    <div 
                      className="p-4 rounded-2xl border space-y-2 animate-fadeIn"
                      style={{
                        backgroundColor: 'var(--bg-surface)',
                        borderColor: 'var(--border-active)'
                      }}
                    >
                      <div className="flex items-center gap-2 text-xs font-mono font-bold" style={{ color: 'var(--accent)' }}>
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>Event Inscribed in Google Calendar Successfully!</span>
                      </div>
                      <p className="text-xs font-mono" style={{ color: 'var(--text-body)' }}>
                        {scheduleSuccess.summary} scheduled for {formatEventDate(scheduleSuccess.start.dateTime)} at {formatEventTime(scheduleSuccess.start.dateTime, scheduleSuccess.end.dateTime)}.
                      </p>
                      {scheduleSuccess.hangoutLink && (
                        <div className="pt-2">
                          <a
                            href={scheduleSuccess.hangoutLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-1 rounded-full border text-white"
                            style={{
                              background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-secondary) 100%)'
                            }}
                          >
                            <Video className="w-3.5 h-3.5" />
                            <span>Join Google Meet Broadcast</span>
                            <ExternalLink className="w-3 h-3 ml-1" />
                          </a>
                        </div>
                      )}
                    </div>
                  )}

                  {actionError && (
                    <div className="p-3 rounded-xl border flex items-center gap-2 text-xs font-mono text-rose-400" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'rgba(244,63,94,0.3)' }}>
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{actionError}</span>
                    </div>
                  )}

                </form>
              )}

            </div>
          </div>

          {/* Right Column: Live Calendar Feed & Transmission Telemetry */}
          <div className="lg:col-span-5 space-y-6">
            <div 
              className="p-8 rounded-3xl border corner-bracket cyber-plate"
              style={{
                borderColor: 'var(--border-subtle)',
                backgroundColor: 'var(--bg-card)'
              }}
            >
              <div className="flex items-center justify-between pb-4 border-b mb-6" style={{ borderColor: 'var(--border-subtle)' }}>
                <div className="flex items-center gap-2">
                  <Radio className="w-4 h-4 animate-pulse" style={{ color: 'var(--accent)' }} />
                  <h3 className="text-lg font-serif-mythic font-bold" style={{ color: 'var(--text-title)' }}>
                    Upcoming Transmissions
                  </h3>
                </div>

                {accessToken && (
                  <button
                    onClick={() => loadEvents(accessToken)}
                    disabled={eventsLoading}
                    className="p-1.5 rounded-lg border text-xs font-mono transition-transform hover:rotate-180 duration-300 cursor-pointer"
                    style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-muted)' }}
                    title="Refresh Calendar Feed"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${eventsLoading ? 'animate-spin' : ''}`} />
                  </button>
                )}
              </div>

              {!user ? (
                <div className="text-center py-12 space-y-3" style={{ color: 'var(--text-muted)' }}>
                  <CalendarIcon className="w-8 h-8 mx-auto opacity-30" />
                  <p className="text-xs font-mono">
                    Connect your Google account to stream scheduled transmissions and upcoming meetings.
                  </p>
                </div>
              ) : eventsLoading ? (
                <div className="text-center py-12 space-y-3" style={{ color: 'var(--text-muted)' }}>
                  <RefreshCw className="w-6 h-6 mx-auto animate-spin" style={{ color: 'var(--accent)' }} />
                  <p className="text-xs font-mono">Querying Google Calendar API...</p>
                </div>
              ) : eventsError ? (
                <div className="p-4 rounded-2xl border text-xs font-mono space-y-2 text-rose-400" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'rgba(244,63,94,0.3)' }}>
                  <div className="flex items-center gap-2 font-bold">
                    <AlertCircle className="w-4 h-4" />
                    <span>Telemetry Error</span>
                  </div>
                  <p>{eventsError}</p>
                </div>
              ) : events.length === 0 ? (
                <div className="text-center py-10 space-y-2" style={{ color: 'var(--text-muted)' }}>
                  <CheckCircle2 className="w-8 h-8 mx-auto text-emerald-400 opacity-60" />
                  <p className="text-xs font-mono font-bold" style={{ color: 'var(--text-title)' }}>
                    No Upcoming Broadcasts
                  </p>
                  <p className="text-[11px] font-mono">
                    Schedule a session using the console to inscribe it directly into your calendar.
                  </p>
                </div>
              ) : (
                <div className="space-y-3 max-h-[460px] overflow-y-auto pr-1">
                  {events.map((ev) => (
                    <div 
                      key={ev.id}
                      className="p-4 rounded-2xl border transition-all cyber-plate group relative"
                      style={{
                        backgroundColor: 'var(--bg-surface)',
                        borderColor: 'var(--border-subtle)'
                      }}
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div>
                          <span className="text-[9px] font-mono uppercase tracking-wider font-bold block" style={{ color: 'var(--accent-gold)' }}>
                            {formatEventDate(ev.start.dateTime || ev.start.date)}
                          </span>
                          <h4 className="text-xs font-serif-mythic font-bold line-clamp-1 group-hover:text-[var(--accent)] transition-colors" style={{ color: 'var(--text-title)' }}>
                            {ev.summary || 'Scheduled Session'}
                          </h4>
                        </div>

                        <button
                          onClick={() => handleDeleteEvent(ev.id)}
                          className="p-1 rounded-md text-rose-400 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-rose-500/10 cursor-pointer"
                          title="Remove event from Google Calendar"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex items-center gap-3 text-[10px] font-mono mb-2" style={{ color: 'var(--text-muted)' }}>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" style={{ color: 'var(--accent)' }} />
                          {formatEventTime(ev.start.dateTime, ev.end.dateTime)}
                        </span>
                        {ev.location && (
                          <span className="flex items-center gap-1 truncate max-w-[140px]">
                            <MapPin className="w-3 h-3" />
                            {ev.location}
                          </span>
                        )}
                      </div>

                      {/* Links: Meet or Calendar */}
                      <div className="flex items-center gap-2 pt-2 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
                        {ev.hangoutLink && (
                          <a
                            href={ev.hangoutLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[10px] font-mono font-bold flex items-center gap-1 hover:underline"
                            style={{ color: 'var(--accent)' }}
                          >
                            <Video className="w-3 h-3" />
                            <span>Join Meet</span>
                          </a>
                        )}

                        {ev.htmlLink && (
                          <a
                            href={ev.htmlLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[10px] font-mono flex items-center gap-1 opacity-70 hover:opacity-100 ml-auto"
                            style={{ color: 'var(--text-muted)' }}
                          >
                            <span>Google Calendar</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Verified Integration Badge */}
              <div className="mt-6 pt-4 border-t flex items-center justify-between text-[9px] font-mono" style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-muted)' }}>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" style={{ color: 'var(--accent)' }} />
                  <span>OAUTH 2.0 VERIFIED</span>
                </span>
                <span>SCOPES: CALENDAR & EVENTS</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
