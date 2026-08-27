import { useState, useRef, useEffect, useCallback } from 'react';
import { findAnswer } from '../data/knowledgeBase';

const PROFILE_IMAGE_URL = 'https://avatars.githubusercontent.com/u/229573311?v=4';

const SUGGESTED_QUESTIONS = [
  'Who is Satyam?',
  'What is Savify?',
  'What are his skills?',
  'Tell me about C++',
  'What projects has he built?',
  'How to contact Satyam?',
];

const API_TIMEOUT_MS = 15000;

/**
 * Renders markdown-like text (bold, bullet points, numbered lists, links, line breaks)
 * into React elements for rich chat display.
 */
function renderMarkdown(text) {
  if (!text) return null;

  const lines = text.split('\n');
  const elements = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Empty line -> spacer
    if (line.trim() === '') {
      elements.push(<div key={`sp-${i}`} style={{ height: '6px' }} />);
      continue;
    }

    // Bullet point lines
    const bulletMatch = line.match(/^(\s*)[•\-*]\s+(.+)/);
    if (bulletMatch) {
      elements.push(
        <div key={`li-${i}`} style={{ display: 'flex', gap: '8px', marginLeft: bulletMatch[1].length > 0 ? '14px' : '2px', marginTop: '3px', marginBottom: '3px' }}>
          <span style={{ flexShrink: 0, color: 'var(--color-accent-primary, #3B2FE0)', fontWeight: 700 }}>•</span>
          <span style={{ flex: 1 }}>{renderInlineMarkdown(bulletMatch[2])}</span>
        </div>
      );
      continue;
    }

    // Numbered list lines
    const numberedMatch = line.match(/^(\d+)\.\s+(.+)/);
    if (numberedMatch) {
      elements.push(
        <div key={`ol-${i}`} style={{ display: 'flex', gap: '8px', marginTop: '3px', marginBottom: '3px' }}>
          <span style={{ flexShrink: 0, fontWeight: 700, color: 'var(--color-accent-primary, #3B2FE0)' }}>{numberedMatch[1]}.</span>
          <span style={{ flex: 1 }}>{renderInlineMarkdown(numberedMatch[2])}</span>
        </div>
      );
      continue;
    }

    // Regular text line
    elements.push(
      <div key={`txt-${i}`} style={{ marginTop: i > 0 && lines[i - 1].trim() === '' ? '4px' : '1px' }}>
        {renderInlineMarkdown(line)}
      </div>
    );
  }

  return elements;
}

/**
 * Handle inline markdown: **bold**, links (http/https), and emails
 */
function renderInlineMarkdown(text) {
  if (!text) return text;

  // Split by bold patterns first
  const parts = [];
  const boldRegex = /\*\*(.+?)\*\*/g;
  let lastIdx = 0;
  let match;

  while ((match = boldRegex.exec(text)) !== null) {
    if (match.index > lastIdx) {
      parts.push(renderLinksAndText(text.substring(lastIdx, match.index), `txt-${lastIdx}`));
    }
    parts.push(
      <strong key={`b-${match.index}`} style={{ fontWeight: 600, color: 'inherit' }}>
        {match[1]}
      </strong>
    );
    lastIdx = match.index + match[0].length;
  }

  if (lastIdx < text.length) {
    parts.push(renderLinksAndText(text.substring(lastIdx), `txt-${lastIdx}`));
  }

  return parts.length > 0 ? parts : text;
}

function renderLinksAndText(str, keyPrefix) {
  // Check for URLs or domain patterns like savify.money or github.com/...
  const urlRegex = /(https?:\/\/[^\s]+|github\.com\/[^\s]+|linkedin\.com\/in\/[^\s]+|leetcode\.com\/[^\s]+|hackerrank\.com\/[^\s]+|codechef\.com\/[^\s]+|savify\.money)/g;
  const subParts = [];
  let last = 0;
  let m;

  while ((m = urlRegex.exec(str)) !== null) {
    if (m.index > last) {
      subParts.push(str.substring(last, m.index));
    }
    const rawUrl = m[0];
    const href = rawUrl.startsWith('http') ? rawUrl : `https://${rawUrl}`;
    subParts.push(
      <a
        key={`${keyPrefix}-link-${m.index}`}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: 'var(--color-accent-primary, #3B2FE0)',
          textDecoration: 'underline',
          textUnderlineOffset: '2px',
          fontWeight: 500,
        }}
      >
        {rawUrl}
      </a>
    );
    last = m.index + m[0].length;
  }

  if (last < str.length) {
    subParts.push(str.substring(last));
  }

  return subParts.length === 1 ? subParts[0] : subParts;
}

function TypingIndicator() {
  return (
    <div className="chat-typing" aria-label="AI is thinking...">
      <span /><span /><span />
    </div>
  );
}

function ChatMessage({ message }) {
  const isUser = message.role === 'user';
  return (
    <div className={`chat-msg ${isUser ? 'chat-msg--user' : 'chat-msg--bot'}`}>
      {!isUser && (
        <div className="chat-msg__avatar">
          <img
            src={PROFILE_IMAGE_URL}
            alt="Satyam Kumar"
            className="chat-msg__avatar-img"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
      )}
      <div className="chat-msg__bubble">
        <div className="chat-msg__content">{renderMarkdown(message.text)}</div>
        {message.source === 'local' && (
          <span className="chat-msg__badge" title="Instant response from verified knowledge base">
            ⚡ Instant Answer
          </span>
        )}
        {message.source === 'ai' && (
          <span className="chat-msg__badge chat-msg__badge--ai" title="Generated by Gemini AI">
            ✨ Gemini AI
          </span>
        )}
      </div>
    </div>
  );
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastFailedMessage, setLastFailedMessage] = useState(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const abortControllerRef = useRef(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, scrollToBottom]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Lock body scroll on mobile when chat panel is open
  useEffect(() => {
    if (isOpen && window.innerWidth < 640) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Cleanup abort controller on unmount
  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  /**
   * Fetches answer from Gemini API backend as fallback when local KB has no match.
   */
  const fetchGeminiResponse = async (text, history) => {
    abortControllerRef.current = new AbortController();
    const { signal } = abortControllerRef.current;

    const timeoutId = setTimeout(() => {
      abortControllerRef.current?.abort();
    }, API_TIMEOUT_MS);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, history }),
        signal,
      });

      clearTimeout(timeoutId);

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || `Server error (${res.status})`);
      }

      const data = await res.json();

      if (!data.reply || typeof data.reply !== 'string') {
        throw new Error('Invalid response from server.');
      }

      return { reply: data.reply, source: 'ai' };
    } catch (err) {
      clearTimeout(timeoutId);

      if (err.name === 'AbortError') {
        throw new Error('Request timed out. Please try again.');
      }
      throw err;
    } finally {
      abortControllerRef.current = null;
    }
  };

  const sendMessage = async (text) => {
    const trimmed = text?.trim();
    if (!trimmed || isLoading) return;

    const userMsg = { role: 'user', text: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setError(null);
    setLastFailedMessage(null);

    // 1. Try local knowledge base FIRST (instant response with 0ms latency)
    const localResult = findAnswer(trimmed);
    if (localResult) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'model',
          text: localResult.answer,
          source: 'local',
        },
      ]);
      return;
    }

    // 2. Fall back to Gemini AI backend
    setIsLoading(true);

    // Build history for Gemini
    const currentMessages = [...messages, userMsg];
    const history = currentMessages.slice(0, -1).map((m) => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.text }],
    }));

    try {
      const { reply, source } = await fetchGeminiResponse(trimmed, history);
      setMessages((prev) => [
        ...prev,
        { role: 'model', text: reply, source },
      ]);
    } catch (err) {
      console.warn('Gemini fallback triggered or failed:', err.message);
      const fallbackMsg =
        "I couldn't reach the AI service right now. However, you can ask me directly about Satyam's **projects, C++ skills, Savify, education, certifications**, or how to reach him!\n\nOr contact Satyam directly at **satyam31sk@gmail.com** 📧";
      
      setMessages((prev) => [
        ...prev,
        {
          role: 'model',
          text: fallbackMsg,
          source: 'fallback',
        },
      ]);
      setError(err.message || 'AI service temporarily unavailable.');
      setLastFailedMessage(trimmed);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRetry = () => {
    if (!lastFailedMessage) return;
    const msgToRetry = lastFailedMessage;
    // Remove the last model error/fallback message before retrying
    setMessages((prev) => {
      if (prev.length > 0 && prev[prev.length - 1].role === 'model') {
        return prev.slice(0, -1);
      }
      return prev;
    });
    setError(null);
    setLastFailedMessage(null);
    sendMessage(msgToRetry);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleSuggestion = (question) => {
    sendMessage(question);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const clearChat = () => {
    setMessages([]);
    setError(null);
    setLastFailedMessage(null);
    setInput('');
  };

  return (
    <>
      {/* Floating Chat Launcher Bubble */}
      <button
        className={`chat-bubble ${isOpen ? 'chat-bubble--hidden' : ''}`}
        onClick={() => setIsOpen(true)}
        aria-label="Open Ask Satyam AI chatbot"
        id="chat-open-button"
      >
        <div className="chat-bubble__avatar">
          <img
            src={PROFILE_IMAGE_URL}
            alt="Satyam Kumar"
            className="chat-bubble__avatar-img"
            loading="lazy"
          />
        </div>
        <span className="chat-bubble__label">Ask Satyam</span>
        <span className="chat-bubble__dot" />
      </button>

      {/* Main Chat Panel */}
      <div
        className={`chat-panel ${isOpen ? 'chat-panel--open' : ''}`}
        role="dialog"
        aria-label="Chat with Satyam's AI assistant"
        aria-modal="true"
        aria-hidden={!isOpen}
        id="chat-panel"
      >
        {/* Header */}
        <div className="chat-header">
          <div className="chat-header__info">
            <div className="chat-header__avatar">
              <img
                src={PROFILE_IMAGE_URL}
                alt="Satyam Kumar"
                className="chat-header__avatar-img"
                loading="lazy"
              />
            </div>
            <div>
              <div className="chat-header__title-row">
                <h3 className="chat-header__title">Ask Satyam</h3>
                <span className="chat-header__badge">AI</span>
              </div>
              <span className="chat-header__status">
                <span className="chat-header__dot" />
                Knows all about Satyam · Instant Q&A
              </span>
            </div>
          </div>
          <div className="chat-header__actions">
            {messages.length > 0 && (
              <button
                className="chat-header__action-btn"
                onClick={clearChat}
                aria-label="Clear chat messages"
                title="Clear chat"
                id="chat-clear-button"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                </svg>
              </button>
            )}
            <button
              className="chat-header__action-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              id="chat-close-button"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" /><path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Messages Body */}
        <div className="chat-messages" id="chat-messages">
          {messages.length === 0 && !isLoading && (
            <div className="chat-welcome">
              <div className="chat-welcome__avatar">
                <img
                  src={PROFILE_IMAGE_URL}
                  alt="Satyam Kumar"
                  className="chat-welcome__avatar-img"
                  loading="lazy"
                />
              </div>
              <p className="chat-welcome__title">Hi there! I'm Ask Satyam 👋</p>
              <p className="chat-welcome__text">
                Ask me anything about Satyam's skills, C++, AI projects, Savify startup, education, certifications, or how to connect!
              </p>
              <div className="chat-suggestions">
                {SUGGESTED_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    type="button"
                    className="chat-suggestion"
                    onClick={() => handleSuggestion(q)}
                    id={`chat-suggestion-${q.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((msg, i) => (
            <ChatMessage key={`${msg.role}-${i}`} message={msg} />
          ))}

          {isLoading && (
            <div className="chat-msg chat-msg--bot">
              <div className="chat-msg__avatar">
                <img
                  src={PROFILE_IMAGE_URL}
                  alt="Satyam Kumar"
                  className="chat-msg__avatar-img"
                  loading="lazy"
                />
              </div>
              <div className="chat-msg__bubble">
                <TypingIndicator />
              </div>
            </div>
          )}

          {error && lastFailedMessage && (
            <div className="chat-error">
              <span className="chat-error__text">Notice: {error}</span>
              <button
                type="button"
                className="chat-error__retry"
                onClick={handleRetry}
              >
                Retry
              </button>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <form className="chat-input-bar" onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about Satyam, C++, Savify, skills..."
            disabled={isLoading}
            maxLength={500}
            className="chat-input"
            aria-label="Type your question about Satyam"
            id="chat-input"
          />
          <button
            type="submit"
            className="chat-send"
            disabled={isLoading || !input.trim()}
            aria-label="Send message"
            id="chat-send-button"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" />
            </svg>
          </button>
        </form>
      </div>

      <style>{`
        /* ===== Chat Bubble Button ===== */
        .chat-bubble {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 9999;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 18px 8px 8px;
          border-radius: 100px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: linear-gradient(135deg, var(--color-accent-primary, #3B2FE0) 0%, #5E4BF5 100%);
          color: white;
          font-family: var(--font-body, system-ui);
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          box-shadow: 0 10px 32px rgba(59, 47, 224, 0.38), 0 2px 8px rgba(0, 0, 0, 0.1);
          transition: all 300ms cubic-bezier(0.22, 1, 0.36, 1);
          transform: scale(1);
        }

        .chat-bubble:hover {
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 14px 40px rgba(59, 47, 224, 0.5);
        }

        .chat-bubble--hidden {
          transform: scale(0);
          opacity: 0;
          pointer-events: none;
        }

        .chat-bubble__avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid white;
          flex-shrink: 0;
        }

        .chat-bubble__avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .chat-bubble__label {
          white-space: nowrap;
          letter-spacing: 0.01em;
        }

        .chat-bubble__dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #00E0A4;
          box-shadow: 0 0 8px #00E0A4;
        }

        /* ===== Chat Panel ===== */
        .chat-panel {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 10000;
          width: 400px;
          height: 580px;
          max-height: calc(100vh - 48px);
          border-radius: 24px;
          background: var(--color-bg-primary, #FFFFFF);
          border: 1px solid var(--color-border, #E5E4E0);
          box-shadow: 0 24px 80px rgba(0, 0, 0, 0.18), 0 4px 16px rgba(0, 0, 0, 0.06);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transform: scale(0.85) translateY(30px);
          opacity: 0;
          pointer-events: none;
          transition: all 350ms cubic-bezier(0.22, 1, 0.36, 1);
          transform-origin: bottom right;
        }

        .chat-panel--open {
          transform: scale(1) translateY(0);
          opacity: 1;
          pointer-events: auto;
        }

        /* ===== Header ===== */
        .chat-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 16px;
          border-bottom: 1px solid var(--color-border, #E5E4E0);
          background: var(--color-bg-primary, #FFFFFF);
          flex-shrink: 0;
        }

        .chat-header__info {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .chat-header__avatar {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          overflow: hidden;
          flex-shrink: 0;
          border: 2px solid rgba(59, 47, 224, 0.2);
          box-shadow: 0 2px 8px rgba(59, 47, 224, 0.15);
        }

        .chat-header__avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .chat-header__title-row {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .chat-header__title {
          font-family: var(--font-display, inherit);
          font-size: 0.9375rem;
          font-weight: 700;
          color: var(--color-text-primary, #111113);
          margin: 0;
        }

        .chat-header__badge {
          font-size: 0.625rem;
          font-weight: 700;
          text-transform: uppercase;
          background: rgba(59, 47, 224, 0.1);
          color: var(--color-accent-primary, #3B2FE0);
          padding: 2px 6px;
          border-radius: 4px;
        }

        .chat-header__status {
          font-size: 0.6875rem;
          color: var(--color-text-muted, #6B6B70);
          display: flex;
          align-items: center;
          gap: 5px;
          margin-top: 2px;
        }

        .chat-header__dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #00E0A4;
          animation: chatDotPulse 2s ease-in-out infinite;
        }

        @keyframes chatDotPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.2); }
        }

        .chat-header__actions {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .chat-header__action-btn {
          background: none;
          border: none;
          color: var(--color-text-muted, #6B6B70);
          cursor: pointer;
          padding: 6px;
          border-radius: 8px;
          transition: all 180ms ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .chat-header__action-btn:hover {
          background: rgba(0, 0, 0, 0.05);
          color: var(--color-text-primary, #111113);
        }

        /* ===== Messages Body ===== */
        .chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          background: var(--color-bg-primary, #FFFFFF);
        }

        .chat-messages::-webkit-scrollbar {
          width: 5px;
        }

        .chat-messages::-webkit-scrollbar-thumb {
          background: var(--color-border, #E5E4E0);
          border-radius: 4px;
        }

        /* Welcome view */
        .chat-welcome {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 20px 8px;
          gap: 8px;
        }

        .chat-welcome__avatar {
          width: 60px;
          height: 60px;
          border-radius: 18px;
          overflow: hidden;
          border: 3px solid rgba(59, 47, 224, 0.15);
          box-shadow: 0 6px 18px rgba(59, 47, 224, 0.18);
          margin-bottom: 4px;
        }

        .chat-welcome__avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .chat-welcome__title {
          font-family: var(--font-display, inherit);
          font-size: 1.0625rem;
          font-weight: 700;
          color: var(--color-text-primary, #111113);
          margin: 0;
        }

        .chat-welcome__text {
          font-size: 0.8125rem;
          color: var(--color-text-muted, #6B6B70);
          line-height: 1.5;
          max-width: 300px;
          margin: 0;
        }

        .chat-suggestions {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          justify-content: center;
          margin-top: 10px;
        }

        .chat-suggestion {
          font-family: var(--font-body, inherit);
          font-size: 0.75rem;
          font-weight: 500;
          padding: 6px 12px;
          border-radius: 100px;
          border: 1px solid var(--color-border, #E5E4E0);
          background: var(--color-bg-secondary, #F7F6F3);
          color: var(--color-text-primary, #111113);
          cursor: pointer;
          transition: all 200ms ease;
          white-space: nowrap;
        }

        .chat-suggestion:hover {
          border-color: var(--color-accent-primary, #3B2FE0);
          color: var(--color-accent-primary, #3B2FE0);
          background: rgba(59, 47, 224, 0.06);
          transform: translateY(-1px);
        }

        /* Message Bubbles */
        .chat-msg {
          display: flex;
          gap: 8px;
          align-items: flex-end;
          max-width: 90%;
        }

        .chat-msg--user {
          align-self: flex-end;
          flex-direction: row-reverse;
        }

        .chat-msg--bot {
          align-self: flex-start;
        }

        .chat-msg__avatar {
          width: 28px;
          height: 28px;
          min-width: 28px;
          border-radius: 8px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 1.5px solid rgba(59, 47, 224, 0.15);
        }

        .chat-msg__avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .chat-msg__bubble {
          padding: 10px 14px;
          border-radius: 18px;
          font-size: 0.8125rem;
          line-height: 1.55;
          animation: chatMsgAnim 250ms cubic-bezier(0.22, 1, 0.36, 1);
          position: relative;
        }

        @keyframes chatMsgAnim {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .chat-msg--user .chat-msg__bubble {
          background: var(--color-accent-primary, #3B2FE0);
          color: white;
          border-bottom-right-radius: 4px;
          box-shadow: 0 4px 14px rgba(59, 47, 224, 0.25);
        }

        .chat-msg--bot .chat-msg__bubble {
          background: var(--color-bg-secondary, #F7F6F3);
          color: var(--color-text-primary, #111113);
          border-bottom-left-radius: 4px;
          border: 1px solid var(--color-border, #E5E4E0);
        }

        .chat-msg__content {
          margin: 0;
          word-break: break-word;
        }

        .chat-msg__badge {
          display: inline-flex;
          align-items: center;
          font-size: 0.625rem;
          font-weight: 700;
          color: #00A876;
          margin-top: 6px;
          background: rgba(0, 224, 164, 0.12);
          padding: 2px 6px;
          border-radius: 4px;
        }

        .chat-msg__badge--ai {
          color: var(--color-accent-primary, #3B2FE0);
          background: rgba(59, 47, 224, 0.08);
        }

        /* Typing indicator */
        .chat-typing {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 4px 2px;
        }

        .chat-typing span {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--color-accent-primary, #3B2FE0);
          animation: typingDot 1.4s ease-in-out infinite;
        }

        .chat-typing span:nth-child(2) { animation-delay: 0.2s; }
        .chat-typing span:nth-child(3) { animation-delay: 0.4s; }

        @keyframes typingDot {
          0%, 60%, 100% { opacity: 0.3; transform: translateY(0); }
          30% { opacity: 1; transform: translateY(-4px); }
        }

        /* Error Notification */
        .chat-error {
          padding: 8px 12px;
          border-radius: 10px;
          background: rgba(255, 90, 60, 0.08);
          border: 1px solid rgba(255, 90, 60, 0.2);
          font-size: 0.75rem;
          color: #D32F2F;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        }

        .chat-error__text {
          flex: 1;
        }

        .chat-error__retry {
          font-family: var(--font-body, inherit);
          font-size: 0.6875rem;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 6px;
          border: 1px solid rgba(255, 90, 60, 0.3);
          background: rgba(255, 90, 60, 0.1);
          color: #D32F2F;
          cursor: pointer;
          transition: all 180ms ease;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .chat-error__retry:hover {
          background: rgba(255, 90, 60, 0.2);
        }

        /* ===== Input Bar ===== */
        .chat-input-bar {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 14px;
          border-top: 1px solid var(--color-border, #E5E4E0);
          background: var(--color-bg-primary, #FFFFFF);
          flex-shrink: 0;
        }

        .chat-input {
          flex: 1;
          font-family: var(--font-body, inherit);
          font-size: 0.8125rem;
          padding: 10px 14px;
          border-radius: 12px;
          border: 1.5px solid var(--color-border, #E5E4E0);
          background: var(--color-bg-secondary, #F7F6F3);
          color: var(--color-text-primary, #111113);
          outline: none;
          transition: all 200ms ease;
        }

        .chat-input::placeholder {
          color: var(--color-text-muted, #6B6B70);
          opacity: 0.75;
        }

        .chat-input:focus {
          border-color: var(--color-accent-primary, #3B2FE0);
          background: #FFFFFF;
          box-shadow: 0 0 0 3px rgba(59, 47, 224, 0.08);
        }

        .chat-input:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .chat-send {
          width: 38px;
          height: 38px;
          border-radius: 12px;
          border: none;
          background: var(--color-accent-primary, #3B2FE0);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 200ms cubic-bezier(0.22, 1, 0.36, 1);
          flex-shrink: 0;
        }

        .chat-send:hover:not(:disabled) {
          transform: scale(1.05);
          box-shadow: 0 4px 12px rgba(59, 47, 224, 0.35);
        }

        .chat-send:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        /* ===== Mobile Responsiveness ===== */
        @media (max-width: 640px) {
          .chat-bubble {
            bottom: 20px;
            right: 20px;
            padding: 8px 14px 8px 8px;
          }

          .chat-panel {
            bottom: 0;
            right: 0;
            width: 100vw;
            height: 100vh;
            max-height: 100vh;
            border-radius: 0;
            border: none;
            transform-origin: bottom center;
          }
        }
      `}</style>
    </>
  );
}
