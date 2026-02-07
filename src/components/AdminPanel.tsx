import { useState, useEffect } from 'react';

interface Message {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  emailSent: boolean;
  read: boolean;
  createdAt: string;
}

const GREEN = '#bbd700';
const DARK = '#0f172a';

export default function AdminPanel() {
  const [token, setToken] = useState<string | null>(null);
  const [password, setPassword] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  useEffect(() => {
    const saved = sessionStorage.getItem('admin_token');
    if (saved) setToken(saved);
  }, []);

  useEffect(() => {
    if (token) fetchMessages();
  }, [token]);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoginError('');
    setLoading(true);
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (data.success && data.token) {
        setToken(data.token);
        sessionStorage.setItem('admin_token', data.token);
        setPassword('');
      } else {
        setLoginError(data.error || 'Anmeldung fehlgeschlagen.');
      }
    } catch {
      setLoginError('Verbindungsfehler.');
    } finally {
      setLoading(false);
    }
  }

  async function fetchMessages() {
    if (!token) return;
    setLoading(true);
    try {
      const res = await fetch('/api/admin/messages', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.status === 401) { logout(); return; }
      const data = await res.json();
      setMessages(data);
    } catch {
      console.error('Fehler beim Laden');
    } finally {
      setLoading(false);
    }
  }

  async function toggleRead(msg: Message) {
    if (!token) return;
    await fetch('/api/admin/messages', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ id: msg.id, read: !msg.read }),
    });
    fetchMessages();
    if (selectedMessage?.id === msg.id) setSelectedMessage({ ...msg, read: !msg.read });
  }

  async function deleteMessage(id: number) {
    if (!token || !confirm('Nachricht wirklich loeschen?')) return;
    await fetch('/api/admin/messages', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ id }),
    });
    if (selectedMessage?.id === id) setSelectedMessage(null);
    fetchMessages();
  }

  function logout() {
    setToken(null);
    sessionStorage.removeItem('admin_token');
    setMessages([]);
    setSelectedMessage(null);
  }

  function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleString('de-DE', {
      day: '2-digit', month: '2-digit', year: 'numeric',
      hour: '2-digit', minute: '2-digit',
    });
  }

  const unreadCount = messages.filter(m => !m.read).length;

  if (!token) {
    return (
      <div style={{ minHeight: '100vh', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16, fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}>
        <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.08)', padding: 40, width: '100%', maxWidth: 420, border: '1px solid #f0f0f0' }}>
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <div style={{ width: 64, height: 64, background: 'rgba(187,215,0,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
            </div>
            <h1 style={{ fontSize: 24, fontWeight: 700, color: DARK, margin: 0 }}>Admin-Bereich</h1>
            <p style={{ color: '#64748b', marginTop: 8, fontSize: 14 }}>Planexus GmbH – Kontaktanfragen</p>
          </div>

          <form onSubmit={handleLogin}>
            {loginError && (
              <div style={{ padding: 12, background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 8, color: '#dc2626', fontSize: 14, marginBottom: 16 }}>{loginError}</div>
            )}
            <div style={{ marginBottom: 16 }}>
              <label style={{ display: 'block', fontSize: 14, fontWeight: 500, color: '#334155', marginBottom: 8 }}>Passwort</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Admin-Passwort eingeben"
                style={{ width: '100%', padding: '12px 16px', borderRadius: 8, border: '1px solid #e2e8f0', fontSize: 16, outline: 'none', boxSizing: 'border-box' }}
              />
            </div>
            <button
              type="submit"
              disabled={loading || !password}
              style={{ width: '100%', padding: '12px 16px', background: GREEN, color: DARK, border: 'none', borderRadius: 8, fontSize: 16, fontWeight: 700, cursor: loading || !password ? 'not-allowed' : 'pointer', opacity: loading || !password ? 0.5 : 1 }}
            >
              {loading ? 'Wird geprueft...' : 'Anmelden'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}>
      <header style={{ background: '#fff', borderBottom: '1px solid #e2e8f0', position: 'sticky', top: 0, zIndex: 10 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <h1 style={{ fontSize: 20, fontWeight: 700, color: DARK, margin: 0 }}>Kontaktanfragen</h1>
            {unreadCount > 0 && (
              <span style={{ background: GREEN, color: DARK, fontSize: 13, fontWeight: 700, padding: '2px 12px', borderRadius: 20 }}>
                {unreadCount} neu
              </span>
            )}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <button onClick={fetchMessages} style={{ padding: '8px 16px', background: '#f1f5f9', border: 'none', borderRadius: 8, cursor: 'pointer', fontSize: 14, fontWeight: 500 }}>
              Aktualisieren
            </button>
            <button onClick={logout} style={{ padding: '8px 16px', background: '#fef2f2', color: '#dc2626', border: 'none', borderRadius: 8, cursor: 'pointer', fontSize: 14, fontWeight: 500 }}>
              Abmelden
            </button>
          </div>
        </div>
      </header>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px 20px' }}>
        {loading && messages.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 0', color: '#64748b' }}>Nachrichten werden geladen...</div>
        ) : messages.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 0' }}>
            <div style={{ width: 64, height: 64, background: '#f1f5f9', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </div>
            <p style={{ color: '#64748b', fontSize: 18 }}>Noch keine Nachrichten</p>
            <p style={{ color: '#94a3b8', marginTop: 4 }}>Neue Anfragen vom Kontaktformular erscheinen hier.</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: selectedMessage ? '380px 1fr' : '1fr', gap: 24 }}>
            <div>
              <p style={{ fontSize: 13, color: '#64748b', marginBottom: 12, fontWeight: 500 }}>{messages.length} Nachricht{messages.length !== 1 ? 'en' : ''}</p>
              {messages.map(msg => (
                <div
                  key={msg.id}
                  onClick={() => { setSelectedMessage(msg); if (!msg.read) toggleRead(msg); }}
                  style={{
                    padding: 16, borderRadius: 12, border: selectedMessage?.id === msg.id ? `2px solid ${GREEN}` : msg.read ? '1px solid #f0f0f0' : `1px solid rgba(187,215,0,0.3)`,
                    background: msg.read ? '#fff' : 'rgba(187,215,0,0.05)', marginBottom: 8, cursor: 'pointer', transition: 'all 0.15s'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    {!msg.read && <div style={{ width: 8, height: 8, background: GREEN, borderRadius: '50%', flexShrink: 0 }}></div>}
                    <span style={{ fontWeight: msg.read ? 400 : 600, fontSize: 14, color: msg.read ? '#475569' : DARK }}>{msg.name}</span>
                  </div>
                  <p style={{ fontSize: 14, color: msg.read ? '#64748b' : DARK, fontWeight: msg.read ? 400 : 600, marginTop: 4, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{msg.subject}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 6 }}>
                    <span style={{ fontSize: 12, color: '#94a3b8' }}>{formatDate(msg.createdAt)}</span>
                    <span style={{ fontSize: 11, color: msg.emailSent ? '#16a34a' : '#d97706' }}>{msg.emailSent ? 'E-Mail versendet' : 'Nur in DB'}</span>
                  </div>
                </div>
              ))}
            </div>

            {selectedMessage && (
              <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #f0f0f0', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <div style={{ padding: 24, borderBottom: '1px solid #f0f0f0' }}>
                  <h2 style={{ fontSize: 20, fontWeight: 700, color: DARK, margin: 0 }}>{selectedMessage.subject}</h2>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 8, fontSize: 14, color: '#64748b', flexWrap: 'wrap' }}>
                    <span style={{ fontWeight: 600, color: '#334155' }}>{selectedMessage.name}</span>
                    <a href={`mailto:${selectedMessage.email}`} style={{ color: GREEN, textDecoration: 'none' }}>{selectedMessage.email}</a>
                    <span>{formatDate(selectedMessage.createdAt)}</span>
                    <span style={{ fontSize: 12, padding: '2px 8px', borderRadius: 12, background: selectedMessage.emailSent ? '#f0fdf4' : '#fffbeb', color: selectedMessage.emailSent ? '#16a34a' : '#d97706' }}>
                      {selectedMessage.emailSent ? 'E-Mail versendet' : 'Nur in DB'}
                    </span>
                  </div>
                </div>
                <div style={{ padding: 24 }}>
                  <div style={{ whiteSpace: 'pre-wrap', fontSize: 15, lineHeight: 1.7, color: '#334155' }}>{selectedMessage.message}</div>
                </div>
                <div style={{ padding: 24, borderTop: '1px solid #f0f0f0', display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                  <a
                    href={`mailto:${selectedMessage.email}?subject=Re: ${encodeURIComponent(selectedMessage.subject)}`}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 20px', background: GREEN, color: DARK, borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}
                  >
                    Antworten
                  </a>
                  <button
                    onClick={() => toggleRead(selectedMessage)}
                    style={{ padding: '8px 16px', borderRadius: 8, border: '1px solid #e2e8f0', background: '#fff', fontSize: 14, cursor: 'pointer', color: '#475569' }}
                  >
                    {selectedMessage.read ? 'Als ungelesen markieren' : 'Als gelesen markieren'}
                  </button>
                  <button
                    onClick={() => deleteMessage(selectedMessage.id)}
                    style={{ padding: '8px 16px', borderRadius: 8, border: '1px solid #fecaca', background: '#fff', fontSize: 14, cursor: 'pointer', color: '#dc2626', marginLeft: 'auto' }}
                  >
                    Loeschen
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
