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

export default function AdminPanel() {
  const [token, setToken] = useState<string | null>(null);
  const [password, setPassword] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  useEffect(() => {
    const saved = sessionStorage.getItem('admin_token');
    if (saved) {
      setToken(saved);
    }
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
      if (data.success) {
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
      if (res.status === 401) {
        setToken(null);
        sessionStorage.removeItem('admin_token');
        return;
      }
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
    if (selectedMessage?.id === msg.id) {
      setSelectedMessage({ ...msg, read: !msg.read });
    }
  }

  async function deleteMessage(id: number) {
    if (!token || !confirm('Nachricht wirklich löschen?')) return;
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
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md border border-gray-100">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
            </div>
            <h1 className="text-2xl font-bold text-slate-900">Admin-Bereich</h1>
            <p className="text-gray-500 mt-2">Planexus GmbH – Kontaktanfragen</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {loginError && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">{loginError}</div>
            )}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Passwort</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                placeholder="Admin-Passwort eingeben"
                data-testid="input-admin-password"
              />
            </div>
            <button
              type="submit"
              disabled={loading || !password}
              className="w-full bg-primary text-slate-900 font-bold py-3 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
              data-testid="button-admin-login"
            >
              {loading ? 'Wird geprüft...' : 'Anmelden'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold text-slate-900">Kontaktanfragen</h1>
            {unreadCount > 0 && (
              <span className="bg-primary text-slate-900 text-sm font-bold px-3 py-1 rounded-full">
                {unreadCount} neu
              </span>
            )}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={fetchMessages}
              className="p-2 text-gray-500 hover:text-primary transition-colors"
              title="Aktualisieren"
              data-testid="button-refresh"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/></svg>
            </button>
            <button
              onClick={logout}
              className="text-sm text-gray-500 hover:text-red-600 transition-colors font-medium"
              data-testid="button-logout"
            >
              Abmelden
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {loading && messages.length === 0 ? (
          <div className="text-center py-20 text-gray-500">Nachrichten werden geladen...</div>
        ) : messages.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/></svg>
            </div>
            <p className="text-gray-500 text-lg">Noch keine Nachrichten</p>
            <p className="text-gray-400 mt-1">Neue Anfragen vom Kontaktformular erscheinen hier.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 space-y-2">
              <p className="text-sm text-gray-500 mb-3 font-medium">{messages.length} Nachricht{messages.length !== 1 ? 'en' : ''}</p>
              {messages.map(msg => (
                <div
                  key={msg.id}
                  onClick={() => {
                    setSelectedMessage(msg);
                    if (!msg.read) toggleRead(msg);
                  }}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    selectedMessage?.id === msg.id
                      ? 'border-primary bg-primary/5 shadow-sm'
                      : msg.read
                        ? 'border-gray-100 bg-white hover:border-gray-200'
                        : 'border-primary/30 bg-primary/5 hover:border-primary/50'
                  }`}
                  data-testid={`message-item-${msg.id}`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        {!msg.read && <div className="w-2 h-2 bg-primary rounded-full shrink-0"></div>}
                        <span className={`font-medium text-sm truncate ${!msg.read ? 'text-slate-900' : 'text-gray-600'}`}>
                          {msg.name}
                        </span>
                      </div>
                      <p className={`text-sm truncate mt-1 ${!msg.read ? 'font-semibold text-slate-900' : 'text-gray-700'}`}>
                        {msg.subject}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">{formatDate(msg.createdAt)}</p>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      {msg.emailSent ? (
                        <span title="E-Mail versendet" className="text-green-500">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 12 2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
                        </span>
                      ) : (
                        <span title="E-Mail nicht versendet" className="text-amber-500">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-2">
              {selectedMessage ? (
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex items-start justify-between">
                      <div>
                        <h2 className="text-xl font-bold text-slate-900">{selectedMessage.subject}</h2>
                        <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                          <span className="font-medium text-slate-700">{selectedMessage.name}</span>
                          <a href={`mailto:${selectedMessage.email}`} className="text-primary hover:underline">{selectedMessage.email}</a>
                          <span>{formatDate(selectedMessage.createdAt)}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {selectedMessage.emailSent ? (
                          <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-50 text-green-700 text-xs rounded-full font-medium">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 12 2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
                            E-Mail versendet
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2 py-1 bg-amber-50 text-amber-700 text-xs rounded-full font-medium">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
                            Nur in DB
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="prose prose-sm max-w-none text-gray-700 whitespace-pre-wrap">{selectedMessage.message}</div>
                  </div>
                  <div className="p-6 border-t border-gray-100 flex items-center gap-3">
                    <a
                      href={`mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.subject}`}
                      className="bg-primary text-slate-900 font-bold px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center gap-2 text-sm"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 17 4 12 9 7"/><path d="M20 18v-2a4 4 0 0 0-4-4H4"/></svg>
                      Antworten
                    </a>
                    <button
                      onClick={() => toggleRead(selectedMessage)}
                      className="px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                      {selectedMessage.read ? 'Als ungelesen markieren' : 'Als gelesen markieren'}
                    </button>
                    <button
                      onClick={() => deleteMessage(selectedMessage.id)}
                      className="px-4 py-2 rounded-lg border border-red-200 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors ml-auto"
                      data-testid="button-delete-message"
                    >
                      Löschen
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-2xl border border-gray-100 flex items-center justify-center py-20">
                  <div className="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-gray-300 mx-auto mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    <p className="text-gray-400">Nachricht auswählen</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
