import { initializeApp, getApps, getApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider, 
  onAuthStateChanged, 
  User, 
  signOut as firebaseSignOut 
} from 'firebase/auth';
import firebaseConfig from '../../firebase-applet-config.json';

// Define OAuth Scopes for Google Calendar
export const CALENDAR_SCOPES = [
  'https://www.googleapis.com/auth/calendar',
  'https://www.googleapis.com/auth/calendar.events'
];

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();
CALENDAR_SCOPES.forEach((scope) => {
  provider.addScope(scope);
});
provider.setCustomParameters({
  prompt: 'select_account'
});

let isSigningIn = false;
let cachedAccessToken: string | null = null;

export interface CalendarEventItem {
  id: string;
  summary: string;
  description?: string;
  location?: string;
  htmlLink?: string;
  start: {
    dateTime?: string;
    date?: string;
    timeZone?: string;
  };
  end: {
    dateTime?: string;
    date?: string;
    timeZone?: string;
  };
  attendees?: Array<{
    email: string;
    displayName?: string;
    responseStatus?: string;
  }>;
  hangoutLink?: string;
  status?: string;
}

export interface CreateEventParams {
  summary: string;
  description: string;
  startDateTime: string; // ISO String
  endDateTime: string;   // ISO String
  attendeeEmail?: string;
  location?: string;
  meetLink?: boolean;
}

// Initialize Auth listener
export const initAuth = (
  onAuthSuccess?: (user: User, token: string) => void,
  onAuthFailure?: () => void
) => {
  return onAuthStateChanged(auth, async (user: User | null) => {
    if (user) {
      if (cachedAccessToken) {
        if (onAuthSuccess) onAuthSuccess(user, cachedAccessToken);
      } else if (!isSigningIn) {
        cachedAccessToken = null;
        if (onAuthFailure) onAuthFailure();
      }
    } else {
      cachedAccessToken = null;
      if (onAuthFailure) onAuthFailure();
    }
  });
};

// Sign in with Google Popup
export const signInWithGoogleCalendar = async (): Promise<{ user: User; accessToken: string } | null> => {
  try {
    isSigningIn = true;
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    if (!credential?.accessToken) {
      throw new Error('Could not obtain Google OAuth access token.');
    }

    cachedAccessToken = credential.accessToken;
    return { user: result.user, accessToken: cachedAccessToken };
  } catch (error: any) {
    console.error('Google Calendar Sign In Error:', error);
    throw error;
  } finally {
    isSigningIn = false;
  }
};

// Sign out
export const signOutCalendar = async (): Promise<void> => {
  await firebaseSignOut(auth);
  cachedAccessToken = null;
};

// Get current in-memory token
export const getCalendarAccessToken = (): string | null => {
  return cachedAccessToken;
};

// Set in-memory token (e.g. from sign in callback)
export const setCalendarAccessToken = (token: string | null) => {
  cachedAccessToken = token;
};

// Fetch upcoming calendar events
export const fetchUpcomingCalendarEvents = async (
  token: string,
  maxResults: number = 10
): Promise<CalendarEventItem[]> => {
  const nowIso = new Date().toISOString();
  const params = new URLSearchParams({
    timeMin: nowIso,
    maxResults: String(maxResults),
    singleEvents: 'true',
    orderBy: 'startTime'
  });

  const response = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/primary/events?${params.toString()}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }
  );

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.error?.message || `Failed to fetch events: ${response.status} ${response.statusText}`
    );
  }

  const data = await response.json();
  return data.items || [];
};

// Create a new calendar event (e.g. Schedule Session)
export const createCalendarEvent = async (
  token: string,
  params: CreateEventParams
): Promise<CalendarEventItem> => {
  const eventPayload: any = {
    summary: params.summary,
    description: params.description,
    start: {
      dateTime: params.startDateTime,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
    },
    end: {
      dateTime: params.endDateTime,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
    },
    reminders: {
      useDefault: true
    }
  };

  if (params.location) {
    eventPayload.location = params.location;
  }

  if (params.attendeeEmail) {
    eventPayload.attendees = [{ email: params.attendeeEmail }];
  }

  if (params.meetLink) {
    eventPayload.conferenceData = {
      createRequest: {
        requestId: `meet-${Date.now()}`,
        conferenceSolutionKey: {
          type: 'hangoutsMeet'
        }
      }
    };
  }

  const queryParams = params.meetLink ? '?conferenceDataVersion=1' : '';

  const response = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/primary/events${queryParams}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(eventPayload)
    }
  );

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.error?.message || `Failed to schedule event: ${response.status} ${response.statusText}`
    );
  }

  return await response.json();
};

// Delete a calendar event
export const deleteCalendarEvent = async (
  token: string,
  eventId: string
): Promise<void> => {
  const response = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/primary/events/${eventId}`,
    {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  if (!response.ok && response.status !== 404 && response.status !== 204) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.error?.message || `Failed to cancel event: ${response.status}`
    );
  }
};
