"use client";

import { useEffect, useRef, useState } from "react";
import * as webllm from "@mlc-ai/web-llm";

const SYSTEM = `You are a helpful website assistant. Keep answers brief.`;

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);
  const [msg, setMsg] = useState("");
  const [log, setLog] = useState<{ role: "user" | "assistant"; content: string }[]>([
    { role: "assistant", content: "Hi! Ask me about our site." },
  ]);

  // ✅ Type the ref correctly:
  const engineRef = useRef<webllm.MLCEngineInterface | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        if (!("gpu" in navigator)) {
          setLog((l) => [...l, { role: "assistant", content: "WebGPU not supported. Try Chrome/Edge." }]);
          return;
        }
        const engine = await webllm.CreateMLCEngine(
          "Llama-3.2-3B-Instruct-q4f16_1", // or "Llama-3.2-1B-Instruct-q4f16_1"
          {
            initProgressCallback: (p) => p?.text && setLog((l) => [...l, { role: "assistant", content: p.text! }]),
          }
        );
        if (cancelled) return;
        engineRef.current = engine;     // ✅ now type-safe
        setReady(true);
      } catch (e) {
        setLog((l) => [...l, { role: "assistant", content: "Failed to load model. Refresh or try a different browser." }]);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  async function send() {
    const q = msg.trim();
    if (!q || !engineRef.current) return;

    setLog((l) => [...l, { role: "user", content: q }]);
    setMsg("");

    const reply = await engineRef.current.chat.completions.create({
      messages: [
        { role: "system", content: SYSTEM },
        ...log,
        { role: "user", content: q },
      ],
      temperature: 0.2,
      stream: false,
    });

    const text = reply?.choices?.[0]?.message?.content?.trim() || "Sorry, I couldn’t respond.";
    setLog((l) => [...l, { role: "assistant", content: text }]);
  }

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 rounded-full bg-[#0c693c] px-4 py-3 text-white shadow-lg"
      >
        {open ? "Close" : "Chat"}
      </button>

      {open && (
        <div className="fixed bottom-20 right-6 w-80 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl">
          <div className="border-b p-3 text-sm font-semibold">Ask about our website</div>
          <div className="max-h-80 space-y-3 overflow-y-auto p-3 text-sm">
            {log.map((m, i) => (
              <div key={i} className={m.role === "user" ? "text-right" : ""}>
                <div
                  className={`inline-block rounded-lg px-3 py-2 ${
                    m.role === "user" ? "bg-emerald-50 text-emerald-900" : "bg-slate-100 text-slate-800"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-2 border-t p-2">
            <input
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Type a question…"
              className="flex-1 rounded-md border border-slate-300 px-3 py-2 text-sm outline-none"
            />
            <button
              onClick={send}
              disabled={!ready}
              className="rounded-md bg-[#0c693c] px-3 py-2 text-sm text-white disabled:opacity-60"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
