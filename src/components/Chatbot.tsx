import { useState, useRef, useEffect, useCallback } from 'react';

// ─── System prompt ────────────────────────────────────────────────────────────
const SYSTEM_PROMPT = `You are வழிகாட்டி (Vazhikaatti), an expert AI study guide for Tamil Nadu students. You know everything about:
- Tamil Nadu school groups after 10th (Biology, Computer Science, Commerce, Arts, Vocational)
- All competitive exams: NEET, JEE Main & Advanced, TNEA, CA Foundation, CLAT, TNPSC Group 1/2/4, UPSC CSE, SSC CGL/CHSL, IBPS PO/Clerk, NDA, CDS, GATE, CAT, GRE, GMAT
- Complete syllabus, exam patterns, eligibility for each exam
- Best books and study materials for each exam
- Career paths, college options, cutoffs in Tamil Nadu
- Study strategies, time management, motivation
- After degree options and timelines

You respond in English but understand Tamil. You are friendly, encouraging, and speak like a knowledgeable elder brother/sister (anna/akka). Keep responses concise and actionable. Use bullet points for clarity. Always end with an encouraging note.`;

// ─── Types ────────────────────────────────────────────────────────────────────
interface Message {
  role: 'user' | 'assistant';
  content: string;
  id: number;
}

// ─── Quick chips ─────────────────────────────────────────────────────────────
const QUICK_CHIPS = [
  'Which group should I pick after 10th?',
  'NEET syllabus and best books',
  'How to prepare for TNPSC?',
  'Best books for JEE preparation',
  'TNEA cutoff — how is it calculated?',
  'UPSC vs TNPSC — which is better?',
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
let idCounter = 0;
const nextId = () => ++idCounter;

/** Render message text: handle **bold**, bullet lines, paragraph breaks */
function renderContent(text: string) {
  const paragraphs = text.split(/\n{2,}/);
  return paragraphs.map((para, pi) => {
    const lines = para.split('\n');
    const isBulkBullet = lines.every((l) => /^[-•*]\s/.test(l.trim()) || l.trim() === '');
    if (isBulkBullet) {
      return (
        <ul key={pi} className="space-y-1 my-1 pl-1">
          {lines.filter((l) => l.trim()).map((line, li) => (
            <li key={li} className="flex items-start gap-2">
              <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-current opacity-60" />
              <span>{inlineBold(line.replace(/^[-•*]\s+/, ''))}</span>
            </li>
          ))}
        </ul>
      );
    }
    return (
      <p key={pi} className={pi > 0 ? 'mt-2' : ''}>
        {lines.map((line, li) => (
          <span key={li}>
            {inlineBold(line)}
            {li < lines.length - 1 && <br />}
          </span>
        ))}
      </p>
    );
  });
}

function inlineBold(text: string): React.ReactNode {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((p, i) => (i % 2 === 1 ? <strong key={i}>{p}</strong> : p));
}

// ─── Typing indicator ────────────────────────────────────────────────────────
function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-1 py-0.5">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="w-2 h-2 rounded-full"
          style={{
            background: '#c0392b',
            opacity: 0.7,
            animation: 'chatDot 1.2s ease-in-out infinite',
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}
    </div>
  );
}

// ─── Message bubble ───────────────────────────────────────────────────────────
function MessageBubble({ msg }: { msg: Message }) {
  const isUser = msg.role === 'user';
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-3`}>
      {!isUser && (
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center text-xs flex-shrink-0 mr-2 mt-0.5"
          style={{ background: 'linear-gradient(135deg, #c0392b, #7a1f15)', color: 'white', fontSize: '14px' }}
        >
          ☭
        </div>
      )}
      <div
        style={{
          maxWidth: '80%',
          background: isUser
            ? 'linear-gradient(135deg, #c0392b, #962d22)'
            : 'rgba(255, 255, 255, 0.88)',
          backdropFilter: isUser ? undefined : 'blur(16px)',
          color: isUser ? 'white' : '#2c1810',
          borderRadius: isUser ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
          padding: '10px 14px',
          fontSize: '0.875rem',
          lineHeight: '1.5',
          fontFamily: '"Source Serif 4", Georgia, serif',
          boxShadow: isUser
            ? '0 2px 12px rgba(192,57,43,0.35)'
            : '0 2px 12px rgba(44,36,22,0.1)',
          border: isUser ? 'none' : '1px solid rgba(255,255,255,0.6)',
        }}
      >
        {renderContent(msg.content)}
      </div>
    </div>
  );
}

// ─── Main chatbot component ───────────────────────────────────────────────────
export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY as string | undefined;

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 200);
  }, [isOpen]);

  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || isLoading) return;

      if (!apiKey) {
        const errId = nextId();
        setMessages((prev) => [
          ...prev,
          { role: 'user', content: trimmed, id: nextId() },
          {
            role: 'assistant',
            content:
              '⚠️ API key not configured. Add your Anthropic API key to `.env.local` as:\n\nVITE_ANTHROPIC_API_KEY=sk-ant-...\n\nThen restart the dev server.',
            id: errId,
          },
        ]);
        setInput('');
        return;
      }

      const userMsg: Message = { role: 'user', content: trimmed, id: nextId() };
      setMessages((prev) => [...prev, userMsg]);
      setInput('');
      setIsLoading(true);

      // Build history for API (role + content only)
      const history = [...messages, userMsg].map(({ role, content }) => ({ role, content }));

      try {
        const response = await fetch('https://api.anthropic.com/v1/messages', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey,
            'anthropic-version': '2023-06-01',
            'anthropic-dangerous-direct-browser-access': 'true',
          },
          body: JSON.stringify({
            model: 'claude-sonnet-4-20250514',
            max_tokens: 1000,
            system: SYSTEM_PROMPT,
            messages: history,
          }),
        });

        if (!response.ok) {
          const errBody = await response.text();
          throw new Error(`${response.status}: ${errBody}`);
        }

        const data = await response.json();
        const replyText: string = data.content?.[0]?.text ?? 'Sorry, I got an empty response. Please try again!';

        setMessages((prev) => [...prev, { role: 'assistant', content: replyText, id: nextId() }]);
      } catch (err) {
        console.error('Chatbot error:', err);
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            content:
              'Sorry, I ran into a problem connecting to the AI. Please check your network or API key and try again. நான் மீண்டும் முயற்சிப்பேன்! 🙏',
            id: nextId(),
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    },
    [apiKey, isLoading, messages]
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const clearChat = () => setMessages([]);

  const isEmpty = messages.length === 0;

  return (
    <>
      {/* ── CSS for dot animation (injected once) ── */}
      <style>{`
        @keyframes chatDot {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
          40% { transform: scale(1); opacity: 1; }
        }
        @keyframes chatSlideUp {
          from { opacity: 0; transform: translateY(24px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>

      {/* ── Floating button ── */}
      <button
        onClick={() => setIsOpen((o) => !o)}
        style={{
          position: 'fixed',
          bottom: '1.5rem',
          right: '1.5rem',
          zIndex: 60,
          width: 56,
          height: 56,
          borderRadius: '50%',
          background: isOpen
            ? 'linear-gradient(135deg, #7a1f15, #962d22)'
            : 'linear-gradient(135deg, #c0392b, #7a1f15)',
          boxShadow: '0 4px 20px rgba(192,57,43,0.5)',
          border: '2px solid rgba(255,255,255,0.2)',
          color: 'white',
          fontSize: '1.5rem',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.25s ease',
        }}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? (
          <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <span style={{ lineHeight: 1 }}>💬</span>
        )}
      </button>

      {/* ── Backdrop (mobile only) ── */}
      {isOpen && (
        <div
          className="sm:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          onClick={() => setIsOpen(false)}
          style={{ zIndex: 55 }}
        />
      )}

      {/* ── Chat panel ── */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            zIndex: 60,
            animation: 'chatSlideUp 0.25s ease',
            // Mobile: full-width bottom sheet
            bottom: 0,
            left: 0,
            right: 0,
            // Desktop overrides via media query class
            background: 'rgba(245, 240, 232, 0.96)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(192,57,43,0.15)',
            boxShadow: '0 -8px 40px rgba(44,36,22,0.15), 0 0 0 1px rgba(255,255,255,0.4)',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '24px 24px 0 0',
            maxHeight: '85vh',
          }}
          className="sm:bottom-24 sm:right-6 sm:left-auto sm:w-[400px] sm:max-h-[600px] sm:rounded-2xl"
        >
          {/* Header */}
          <div
            style={{
              background: 'linear-gradient(135deg, #7a1f15 0%, #962d22 40%, #c0392b 100%)',
              borderRadius: 'inherit',
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              padding: '14px 16px 12px',
              flexShrink: 0,
            }}
          >
            {/* Drag handle for mobile */}
            <div className="flex justify-center mb-2 sm:hidden">
              <div className="w-10 h-1 rounded-full bg-white/30" />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full bg-white/15 border border-white/30 flex items-center justify-center"
                  style={{ fontSize: '1.1rem', color: '#f5c6c0' }}
                >
                  ☭
                </div>
                <div>
                  <div style={{ fontFamily: '"Playfair Display", Georgia, serif' }} className="text-white font-bold text-sm leading-tight">
                    வழிகாட்டி AI
                  </div>
                  <div style={{ fontFamily: '"IBM Plex Mono", monospace' }} className="text-red-200/80 text-[10px] tracking-widest uppercase">
                    Your Study Guide
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {messages.length > 0 && (
                  <button
                    onClick={clearChat}
                    style={{ fontFamily: '"IBM Plex Mono", monospace', minWidth: 36, minHeight: 36 }}
                    className="text-white/60 hover:text-white text-[10px] tracking-widest uppercase px-2 py-1 rounded hover:bg-white/10 transition-colors"
                    title="Clear chat"
                  >
                    Clear
                  </button>
                )}
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/70 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors"
                  style={{ minWidth: 36, minHeight: 36, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Online indicator */}
            <div className="flex items-center gap-1.5 mt-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" style={{ boxShadow: '0 0 6px #4ade80' }} />
              <span style={{ fontFamily: '"IBM Plex Mono", monospace' }} className="text-white/60 text-[10px]">
                Powered by Claude — Ask anything about Tamil Nadu education
              </span>
            </div>
          </div>

          {/* Messages area */}
          <div
            className="flex-1 overflow-y-auto px-4 py-4"
            style={{ minHeight: 0, scrollbarWidth: 'thin', scrollbarColor: 'rgba(192,57,43,0.2) transparent' }}
          >
            {/* Welcome state */}
            {isEmpty && (
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">🎓</div>
                <p style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#2c1810' }} className="text-base font-semibold mb-1">
                  வணக்கம்! I'm Vazhikaatti
                </p>
                <p style={{ fontFamily: '"Source Serif 4", Georgia, serif', color: '#6b5540' }} className="text-sm leading-relaxed">
                  Your expert guide for Tamil Nadu education — groups, exams, careers, and everything in between.
                </p>
              </div>
            )}

            {/* Quick chips — shown only on first open */}
            {isEmpty && (
              <div className="mb-4">
                <p style={{ fontFamily: '"IBM Plex Mono", monospace', color: '#c0392b' }} className="text-[9px] tracking-widest uppercase mb-2 text-center">
                  Quick questions
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {QUICK_CHIPS.map((chip) => (
                    <button
                      key={chip}
                      onClick={() => sendMessage(chip)}
                      style={{
                        fontFamily: '"Source Serif 4", Georgia, serif',
                        background: 'rgba(255,255,255,0.8)',
                        border: '1.5px solid rgba(192,57,43,0.25)',
                        color: '#3a2010',
                        backdropFilter: 'blur(8px)',
                        minHeight: 36,
                      }}
                      className="text-xs px-3 py-1.5 rounded-full hover:bg-white hover:border-red-400 transition-all text-left"
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Messages */}
            {messages.map((msg) => (
              <MessageBubble key={msg.id} msg={msg} />
            ))}

            {/* Typing indicator */}
            {isLoading && (
              <div className="flex justify-start mb-3">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs flex-shrink-0 mr-2 mt-0.5"
                  style={{ background: 'linear-gradient(135deg, #c0392b, #7a1f15)', color: 'white', fontSize: '14px' }}
                >
                  ☭
                </div>
                <div
                  style={{
                    background: 'rgba(255,255,255,0.88)',
                    backdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255,255,255,0.6)',
                    borderRadius: '18px 18px 18px 4px',
                    padding: '10px 14px',
                    boxShadow: '0 2px 12px rgba(44,36,22,0.1)',
                  }}
                >
                  <TypingDots />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input area */}
          <div
            style={{
              padding: '12px 16px 16px',
              borderTop: '1px solid rgba(192,57,43,0.12)',
              flexShrink: 0,
              background: 'rgba(255,255,255,0.5)',
              borderRadius: '0 0 0 0',
            }}
            className="sm:rounded-b-2xl"
          >
            <div
              style={{
                display: 'flex',
                gap: 8,
                background: 'rgba(255,255,255,0.9)',
                backdropFilter: 'blur(16px)',
                border: '1.5px solid rgba(192,57,43,0.2)',
                borderRadius: 14,
                padding: '6px 6px 6px 14px',
                boxShadow: '0 2px 8px rgba(44,36,22,0.06)',
              }}
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask me anything about exams, careers..."
                disabled={isLoading}
                style={{
                  flex: 1,
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  fontFamily: '"Source Serif 4", Georgia, serif',
                  fontSize: '0.875rem',
                  color: '#2c1810',
                  minHeight: 36,
                }}
                className="placeholder:text-stone-400"
              />
              <button
                onClick={() => sendMessage(input)}
                disabled={!input.trim() || isLoading}
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 10,
                  background:
                    input.trim() && !isLoading
                      ? 'linear-gradient(135deg, #c0392b, #962d22)'
                      : 'rgba(192,57,43,0.15)',
                  color: input.trim() && !isLoading ? 'white' : '#c0392b',
                  border: 'none',
                  cursor: input.trim() && !isLoading ? 'pointer' : 'not-allowed',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'all 0.2s ease',
                }}
              >
                <svg width="17" height="17" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <p style={{ fontFamily: '"IBM Plex Mono", monospace', color: '#b0a090' }} className="text-[9px] tracking-wide text-center mt-2">
              வழிகாட்டி AI · Powered by Anthropic Claude
            </p>
          </div>
        </div>
      )}
    </>
  );
}
