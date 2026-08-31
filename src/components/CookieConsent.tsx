import { useEffect, useState } from 'react';
import {
  CONSENT_OPEN_EVENT,
  hasConsentChoice,
  loadConsent,
  saveConsent,
} from '../lib/consent';
import { t } from '../i18n/ui';
import { localizeHref, type Locale } from '../i18n/routes';

export default function CookieConsent({ locale = 'de' }: { locale?: Locale }) {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const copy = t(locale);
  const privacyHref = localizeHref('/datenschutz', locale);

  useEffect(() => {
    if (!hasConsentChoice()) {
      setVisible(true);
      return;
    }

    const saved = loadConsent();
    if (saved) {
      setAnalytics(saved.analytics);
      setMarketing(saved.marketing);
    }
  }, []);

  useEffect(() => {
    const openSettings = () => {
      const saved = loadConsent();
      if (saved) {
        setAnalytics(saved.analytics);
        setMarketing(saved.marketing);
      }
      setShowSettings(true);
      setVisible(true);
    };

    window.addEventListener(CONSENT_OPEN_EVENT, openSettings);
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, openSettings);
  }, []);

  const close = () => {
    setVisible(false);
    setShowSettings(false);
  };

  const acceptAll = () => {
    saveConsent({ analytics: true, marketing: true });
    close();
  };

  const rejectAll = () => {
    saveConsent({ analytics: false, marketing: false });
    close();
  };

  const saveSettings = () => {
    saveConsent({ analytics, marketing });
    close();
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[100] p-4 md:p-6"
      role="dialog"
      aria-label={copy.cookies.aria}
    >
      <div className="mx-auto max-w-4xl rounded-xl border border-slate-700 bg-slate-900 p-6 shadow-2xl">
        <h2 className="font-heading text-lg font-bold text-white mb-2">
          {copy.cookies.title}
        </h2>

        {!showSettings ? (
          <>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {copy.cookies.intro}{' '}
              <a href={privacyHref} className="text-primary hover:underline">
                {copy.cookies.privacyLink}
              </a>
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={acceptAll}
                className="bg-primary text-slate-900 font-bold px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                {copy.cookies.acceptAll}
              </button>
              <button
                type="button"
                onClick={rejectAll}
                className="border border-slate-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors"
              >
                {copy.cookies.necessaryOnly}
              </button>
              <button
                type="button"
                onClick={() => setShowSettings(true)}
                className="text-slate-300 font-medium px-6 py-3 rounded-lg hover:text-white transition-colors"
              >
                {copy.cookies.settings}
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="space-y-4 mb-6">
              <div className="flex items-start justify-between gap-4 rounded-lg bg-slate-800/50 p-4">
                <div>
                  <p className="font-semibold text-white text-sm">{copy.cookies.necessary}</p>
                  <p className="text-slate-400 text-sm mt-1">
                    {copy.cookies.necessaryDesc}
                  </p>
                </div>
                <span className="text-xs font-medium text-slate-400 shrink-0 mt-1">{copy.cookies.active}</span>
              </div>

              <label className="flex items-start justify-between gap-4 rounded-lg bg-slate-800/50 p-4 cursor-pointer">
                <div>
                  <p className="font-semibold text-white text-sm">{copy.cookies.analytics}</p>
                  <p className="text-slate-400 text-sm mt-1">
                    {copy.cookies.analyticsDesc}
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                  className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-700 text-primary focus:ring-primary"
                />
              </label>

              <label className="flex items-start justify-between gap-4 rounded-lg bg-slate-800/50 p-4 cursor-pointer">
                <div>
                  <p className="font-semibold text-white text-sm">{copy.cookies.marketing}</p>
                  <p className="text-slate-400 text-sm mt-1">
                    {copy.cookies.marketingDesc}
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={(e) => setMarketing(e.target.checked)}
                  className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-700 text-primary focus:ring-primary"
                />
              </label>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={saveSettings}
                className="bg-primary text-slate-900 font-bold px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                {copy.cookies.save}
              </button>
              <button
                type="button"
                onClick={() => setShowSettings(false)}
                className="text-slate-300 font-medium px-6 py-3 rounded-lg hover:text-white transition-colors"
              >
                {copy.cookies.back}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
