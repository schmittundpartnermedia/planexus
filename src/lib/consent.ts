export const CONSENT_STORAGE_KEY = 'planexus_consent';
export const CONSENT_OPEN_EVENT = 'planexus:open-cookie-settings';

export interface ConsentPreferences {
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
}

type ConsentValue = 'granted' | 'denied';

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

function ensureGtag() {
  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer.push(args as unknown as Record<string, unknown>);
    };
  }
}

export function applyConsent(preferences: Pick<ConsentPreferences, 'analytics' | 'marketing'>) {
  ensureGtag();

  const analytics: ConsentValue = preferences.analytics ? 'granted' : 'denied';
  const marketing: ConsentValue = preferences.marketing ? 'granted' : 'denied';

  window.gtag!('consent', 'update', {
    analytics_storage: analytics,
    ad_storage: marketing,
    ad_user_data: marketing,
    ad_personalization: marketing,
  });

  window.dataLayer.push({
    event: 'consent_update',
    analytics_storage: analytics,
    ad_storage: marketing,
    ad_user_data: marketing,
    ad_personalization: marketing,
  });
}

export function saveConsent(preferences: Pick<ConsentPreferences, 'analytics' | 'marketing'>) {
  const data: ConsentPreferences = {
    ...preferences,
    timestamp: Date.now(),
  };
  localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(data));
  applyConsent(preferences);
}

export function loadConsent(): ConsentPreferences | null {
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as ConsentPreferences;
  } catch {
    return null;
  }
}

export function hasConsentChoice(): boolean {
  return loadConsent() !== null;
}
