"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { MessageCircle, X, Minus, Send, Loader2 } from "lucide-react";

type Msg = { role: "user" | "assistant"; content: string };

type ChatWidgetProps = {
  apiBase?: string;         // Defaults to same-origin /api/chat
  title?: string;
  widthClass?: string;      // e.g., "w-96"
  heightClass?: string;     // e.g., "h-[28rem]"
  position?: "bottom-right" | "bottom-left";
  placeholder?: string;
};

export default function ChatWidget({
  apiBase,
  title = "Ask about our website",
  widthClass = "w-96",
  heightClass = "h-[28rem]",
  position = "bottom-right",
  placeholder = "Type a question…",
}: ChatWidgetProps) {
  const API_BASE = useMemo(
    () =>
    (apiBase ??
      process.env.NEXT_PUBLIC_CHAT_API?.replace(/\/$/, "") ??
      ""),
    [apiBase]
  );

  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    { role: "assistant", content: "Hi! I can answer questions about our company and services." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false); // sending state
  const [unread, setUnread] = useState(false);

  const scrollerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    scrollerRef.current?.scrollTo({ top: scrollerRef.current.scrollHeight });
    if (!open) setUnread(true);
  }, [messages, open, loading]);

  // ESC to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape" && open) setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Autosize composer textarea
  useEffect(() => {
    const el = inputRef.current;
    if (!el) return;
    el.style.height = "0px";
    el.style.height = Math.min(el.scrollHeight, 120) + "px";
  }, [input]);

  async function send() {
    const q = input.trim();
    if (!q || loading) return;

    // push user message
    setMessages((m) => [...m, { role: "user", content: q }]);
    setInput("");
    setLoading(true);

    try {
      const url = "api/chat"
      const res = await fetch(`/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: q }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data: { reply?: string; error?: string } = await res.json();

      setMessages((m) => [
        ...m,
        { role: "assistant", content: (data.reply ?? "Sorry, I couldn’t generate a response.").trim() },
      ]);
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content:
            "Hmm, I couldn’t reach the chat service. Make sure the API is running and accessible.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  const cornerClasses = position === "bottom-left" ? "left-6 bottom-6" : "right-6 bottom-6";

  return (
    <>
      {/* Launcher */}
      {!open && (
        <button
          onClick={() => { setOpen(true); setUnread(false); }}
          aria-label="Open chat"
          className={`fixed ${cornerClasses} z-50 flex items-center gap-2 rounded-full bg-[#0c693c] px-4 py-3 text-white shadow-lg`}
        >
          <MessageCircle className="h-5 w-5" />
          <span className="text-sm font-semibold">Chat</span>
          {unread && <span className="ml-1 inline-block h-2 w-2 rounded-full bg-white" />}
        </button>
      )}

      {/* Panel */}
      {open && (
        <div
          className={`fixed ${cornerClasses} z-50 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl ${widthClass}`}
          role="dialog"
          aria-label="Website chat"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b px-3 py-2">
            <div className="text-sm font-semibold">{title}</div>
            <div className="flex items-center gap-1">
              <button
                aria-label={minimized ? "Restore chat" : "Minimize chat"}
                className="rounded p-1 hover:bg-slate-100"
                onClick={() => setMinimized((m) => !m)}
              >
                {minimized ? <MessageCircle className="h-4 w-4" /> : <Minus className="h-4 w-4" />}
              </button>
              <button
                aria-label="Close chat"
                className="rounded p-1 hover:bg-slate-100"
                onClick={() => setOpen(false)}
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Body */}
          {!minimized && (
            <>
              <div
                ref={scrollerRef}
                className={`px-3 py-3 pr-1 text-sm ${heightClass} max-h-[70vh] overflow-y-auto space-y-3`}
              >
                {messages.map((m, i) => (
                  <div key={i} className={m.role === "user" ? "text-right" : ""}>
                    {/* Bubble styling: assistant uses your green bubble; user uses soft gray */}
                    <div
                      className={`chat-bubble-base ${m.role === "assistant" ? "chat-bubble-assistant" : "chat-bubble-user"
                        }`}
                    >
                      <div className="content-wrap">{m.content}</div>
                    </div>
                  </div>
                ))}

                {/* Typing bubble while waiting for response */}
                {loading && (
                  <div className="text-left">
                    <div className="chat-bubble-base chat-bubble-assistant">
                      <div className="typing">
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Composer */}
              <div className="flex items-end gap-2 border-t p-2">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      send();
                    }
                  }}
                  placeholder={placeholder}
                  className="max-h-[120px] min-h-[40px] flex-1 resize-none rounded-md border border-slate-300 px-3 py-2 text-sm outline-none"
                />
                <button
                  onClick={send}
                  disabled={loading || !input.trim()}
                  className="inline-flex items-center gap-2 rounded-md bg-[#0c693c] px-3 py-2 text-sm font-medium text-white disabled:opacity-60"
                  aria-label="Send message"
                >
                  {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                  <span className="hidden sm:inline">Send</span>
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* Your typing/bubble CSS, scoped with styled-jsx */}
      <style jsx>{`
        /* Shared bubble base: wrap long words, keep line breaks */
        .chat-bubble-base {
          display: inline-block;
          max-width: 85%;
          padding: 16px 28px;
          border-radius: 20px;
          white-space: pre-wrap;
          word-break: break-word;
          overflow-wrap: anywhere;
        }

        /* Assistant bubble (matches your design) */
        .chat-bubble-assistant {
          background-color: #e6f8f1;
          border-bottom-left-radius: 2px;
        }

        /* User bubble (simple neutral style) */
        .chat-bubble-user {
          background-color: #f2f4f7;
          color: #0f172a;
          border-bottom-right-radius: 2px;
        }

        .content-wrap {
          /* just to keep content spacing consistent if needed */
        }

        /* Typing indicator */
        .typing {
          display: flex;
          align-items: center;
          height: 17px;
        }
        .typing .dot {
          display: inline-block;
          width: 7px;
          height: 7px;
          margin-right: 4px;
          border-radius: 50%;
          background-color: #6cad96;
          animation: mercuryTypingAnimation 1.8s infinite ease-in-out;
        }
        .typing .dot:nth-child(1) {
          animation-delay: 200ms;
        }
        .typing .dot:nth-child(2) {
          animation-delay: 300ms;
        }
        .typing .dot:nth-child(3) {
          animation-delay: 400ms;
          margin-right: 0;
        }

        @keyframes mercuryTypingAnimation {
          0% {
            transform: translateY(0);
            background-color: #6cad96;
          }
          28% {
            transform: translateY(-7px);
            background-color: #9ecab9;
          }
          44% {
            transform: translateY(0);
            background-color: #b5d9cb;
          }
        }
      `}</style>
    </>
  );
}
