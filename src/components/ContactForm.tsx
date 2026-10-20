import { useState, useRef, useEffect, useId } from 'react';
import { t } from '../i18n/ui';
import { localizeHref, type Locale } from '../i18n/routes';

export type ContactInterest = '' | 'miete' | 'kauf' | 'labtogo' | 'offen';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  interest: ContactInterest;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export default function ContactForm({
  locale = 'de',
  defaultInterest = '',
}: {
  locale?: Locale;
  defaultInterest?: ContactInterest;
}) {
  const copy = t(locale);
  const uid = useId();
  const fieldId = (name: string) => `contact-${name}-${uid}`;
  const emptyForm: FormData = {
    name: '',
    email: '',
    company: '',
    phone: '',
    interest: defaultInterest,
    subject: '',
    message: '',
  };
  const [formData, setFormData] = useState<FormData>(emptyForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [website, setWebsite] = useState('');
  const renderedAtRef = useRef<number>(0);

  useEffect(() => {
    renderedAtRef.current = Date.now();
  }, []);

  function validate(): boolean {
    const newErrors: FormErrors = {};
    if (formData.name.trim().length < 2) newErrors.name = copy.form.nameError;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) newErrors.email = copy.form.emailError;
    if (formData.subject.trim().length < 5) newErrors.subject = copy.form.subjectError;
    if (formData.message.trim().length < 10) newErrors.message = copy.form.messageError;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          locale,
          website,
          elapsedMs: Date.now() - renderedAtRef.current,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        try {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: 'anfrage_gesendet',
            anfrage_anliegen: formData.interest || 'keine_angabe',
            anfrage_seite: window.location.pathname,
          });
        } catch {
          // Messung darf das Formular nie blockieren.
        }
        setFormData(emptyForm);
        setWebsite('');
        setErrors({});
      } else {
        throw new Error('send-failed');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleChange(field: keyof FormData, value: string) {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (field in errors && errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  }

  const inputClass =
    'w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors';
  const labelClass = 'block text-sm font-medium text-slate-700 mb-2';
  const errorClass = 'text-red-700 text-sm mt-1';

  return (
    <div className="bg-white border border-gray-200 p-6 md:p-8 rounded-2xl shadow-lg shadow-gray-100">
      <h3 className="text-2xl font-bold mb-8 text-slate-900">{copy.form.title}</h3>

      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800" role="status">
          {copy.form.success}
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800" role="alert">
          {copy.form.error}
        </div>
      )}

      {/* method/action: Falls vor dem Laden von React abgeschickt wird, landen keine Daten in der URL (POST, Server leitet zurück). */}
      <form onSubmit={handleSubmit} method="post" action="/api/contact" className="space-y-6" noValidate>
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: '-9999px',
            top: 'auto',
            width: '1px',
            height: '1px',
            overflow: 'hidden',
          }}
        >
          <label htmlFor={fieldId('website')}>{copy.form.honeypot}</label>
          <input
            type="text"
            id={fieldId('website')}
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor={fieldId('name')} className={labelClass}>{copy.form.name}</label>
            <input
              type="text"
              id={fieldId('name')}
              name="name"
              autoComplete="name"
              required
              aria-invalid={errors.name ? true : undefined}
              aria-describedby={errors.name ? fieldId('name-error') : undefined}
              placeholder={copy.form.namePlaceholder}
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className={inputClass}
              data-testid="input-name"
            />
            {errors.name && <p id={fieldId('name-error')} className={errorClass}>{errors.name}</p>}
          </div>
          <div>
            <label htmlFor={fieldId('email')} className={labelClass}>{copy.form.email}</label>
            <input
              type="email"
              id={fieldId('email')}
              name="email"
              autoComplete="email"
              inputMode="email"
              required
              aria-invalid={errors.email ? true : undefined}
              aria-describedby={errors.email ? fieldId('email-error') : undefined}
              placeholder={copy.form.emailPlaceholder}
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className={inputClass}
              data-testid="input-email"
            />
            {errors.email && <p id={fieldId('email-error')} className={errorClass}>{errors.email}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor={fieldId('company')} className={labelClass}>{copy.form.company}</label>
            <input
              type="text"
              id={fieldId('company')}
              name="company"
              autoComplete="organization"
              value={formData.company}
              onChange={(e) => handleChange('company', e.target.value)}
              className={inputClass}
              data-testid="input-company"
            />
          </div>
          <div>
            <label htmlFor={fieldId('phone')} className={labelClass}>{copy.form.phone}</label>
            <input
              type="tel"
              id={fieldId('phone')}
              name="phone"
              autoComplete="tel"
              inputMode="tel"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              className={inputClass}
              data-testid="input-phone"
            />
          </div>
        </div>

        <div>
          <label htmlFor={fieldId('interest')} className={labelClass}>{copy.form.interest}</label>
          <select
            id={fieldId('interest')}
            name="interest"
            value={formData.interest}
            onChange={(e) => handleChange('interest', e.target.value)}
            className={inputClass}
            data-testid="select-interest"
          >
            <option value="">{copy.form.interestOptions.none}</option>
            <option value="miete">{copy.form.interestOptions.miete}</option>
            <option value="kauf">{copy.form.interestOptions.kauf}</option>
            <option value="labtogo">{copy.form.interestOptions.labtogo}</option>
            <option value="offen">{copy.form.interestOptions.offen}</option>
          </select>
        </div>

        <div>
          <label htmlFor={fieldId('subject')} className={labelClass}>{copy.form.subject}</label>
          <input
            type="text"
            id={fieldId('subject')}
            name="subject"
            required
            aria-invalid={errors.subject ? true : undefined}
            aria-describedby={errors.subject ? fieldId('subject-error') : undefined}
            placeholder={copy.form.subjectPlaceholder}
            value={formData.subject}
            onChange={(e) => handleChange('subject', e.target.value)}
            className={inputClass}
            data-testid="input-subject"
          />
          {errors.subject && <p id={fieldId('subject-error')} className={errorClass}>{errors.subject}</p>}
        </div>

        <div>
          <label htmlFor={fieldId('message')} className={labelClass}>{copy.form.message}</label>
          <textarea
            id={fieldId('message')}
            name="message"
            required
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? fieldId('message-error') : undefined}
            placeholder={copy.form.messagePlaceholder}
            value={formData.message}
            onChange={(e) => handleChange('message', e.target.value)}
            rows={6}
            className={`${inputClass} resize-vertical`}
            data-testid="input-message"
          />
          {errors.message && <p id={fieldId('message-error')} className={errorClass}>{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary text-slate-900 font-bold hover:bg-primary/90 min-h-12 py-3 text-lg shadow-md shadow-primary/20 disabled:opacity-50 rounded-lg flex items-center justify-center gap-2 transition-colors"
          data-testid="button-submit"
        >
          {isSubmitting ? (
            <>
              <svg className="w-5 h-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {copy.form.sending}
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              {copy.form.send}
            </>
          )}
        </button>

        <p className="text-sm text-gray-600 leading-relaxed">
          {copy.form.privacyBefore}{' '}
          <a href={localizeHref('/datenschutz', locale)} className="underline text-slate-900 hover:text-[#7a9900]">
            {copy.form.privacyLink}
          </a>
          {copy.form.privacyAfter}
        </p>
      </form>
    </div>
  );
}
