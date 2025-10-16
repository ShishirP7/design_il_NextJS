"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { MessageCircle, X, Minus, Send, Loader2 } from "lucide-react";

type Msg = { role: "user" | "assistant"; content: string };

type ChatWidgetProps = {
  /** Override API base. Defaults to NEXT_PUBLIC_CHAT_API or http://localhost:9001 */
  apiBase?: string;
  /** Panel title */
  title?: string;
  /** Width class e.g. w-80, w-96, w-[26rem] */
  widthClass?: string;
  /** Height class e.g. h-[22rem], h-[28rem] */
  heightClass?: string;
  /** “bottom-right” | “bottom-left” */
  position?: "bottom-right" | "bottom-left";
  /** Input placeholder */
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
  const API_BASE =
    useMemo(
      () =>
        (apiBase ??
          process.env.NEXT_PUBLIC_CHAT_API?.replace(/\/$/, "") ??
          "http://localhost:9001"),
      [apiBase]
    );

  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    { role: "assistant", content: "Hi! I can answer questions about our company and services." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [unread, setUnread] = useState(false);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // auto-scroll to bottom on new messages
  useEffect(() => {
    scrollerRef.current?.scrollTo({ top: scrollerRef.current.scrollHeight });
    if (!open) setUnread(true);
  }, [messages, open]);

  // close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // autosize textarea
  useEffect(() => {
    const el = inputRef.current;
    if (!el) return;
    el.style.height = "0px";
    el.style.height = Math.min(el.scrollHeight, 120) + "px";
  }, [input]);

  async function send() {
    const q = input.trim();
    if (!q || loading) return;

    setMessages((m) => [...m, { role: "user", content: q }, { role: "assistant", content: "…" }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(`/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: q }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data: { reply?: string; error?: string } = await res.json();

      setMessages((m) => {
        const next = [...m];
        next[next.length - 1] = {
          role: "assistant",
          content: (data.reply ?? "Sorry, I couldn’t generate a response.").trim(),
        };
        return next;
      });
    } catch {
      setMessages((m) => {
        const next = [...m];
        next[next.length - 1] = {
          role: "assistant",
          content:
            "Hmm, I couldn’t reach the chat service. Make sure the API at :9001 is running with CORS enabled.",
        };
        return next;
      });
    } finally {
      setLoading(false);
    }
  }

  const cornerClasses =
    position === "bottom-left"
      ? "left-6 bottom-6"
      : "right-6 bottom-6";

  return (
    <>
      {/* Launcher button */}
      {!open && (
        <button
          onClick={() => {
            setOpen(true);
            setUnread(false);
          }}
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
                className={`px-3 py-3 text-sm ${heightClass} overflow-y-auto space-y-3`}
              >
                {messages.map((m, i) => (
                  <div key={i} className={m.role === "user" ? "text-right" : ""}>
                    <div
                      className={`inline-block max-w-[85%] rounded-lg px-3 py-2 ${
                        m.role === "user"
                          ? "bg-emerald-50 text-emerald-900"
                          : "bg-slate-100 text-slate-800"
                      }`}
                    >
                      {m.content}
                    </div>
                  </div>
                ))}
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
    </>
  );
}
