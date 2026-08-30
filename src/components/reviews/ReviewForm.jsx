"use client";

import { useState, useRef, useEffect } from "react";

const QUESTIONS = [
  { id: "q1", label: "How easy was it to install and set up TokenCap?" },
  { id: "q2", label: "How useful is the AI context that TokenCap generates?" },
  { id: "q3", label: "How accurate are the token counts?" },
  { id: "q4", label: "How would you rate the docs and guides?" },
  { id: "q5", label: "Would you recommend TokenCap to others?" },
];

const RATINGS = ["Very Good", "Good", "Okay", "Needs Improvement"];
const TOTAL_STEPS = 7;

/* ─── Slide transition ────────────────────────────────────── */
function Slide({ children, direction, stepKey }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const from = direction === "forward" ? "translateX(40px)" : "translateX(-40px)";
    el.style.cssText = `transform:${from};opacity:0;transition:none`;
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        el.style.cssText =
          "transform:translateX(0);opacity:1;transition:transform 0.32s cubic-bezier(0.16,1,0.3,1),opacity 0.24s ease";
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stepKey]);

  return <div ref={ref} className="w-full">{children}</div>;
}

/* ─── Main form ───────────────────────────────────────────── */
export function ReviewForm() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState("forward");
  const [form, setForm] = useState({
    name: "", email: "", role: "",
    q1: "", q2: "", q3: "", q4: "", q5: "",
    suggestion: "",
  });
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});

  function go(next) {
    setDirection(next > step ? "forward" : "back");
    setStep(next);
  }

  function handleIdentityNext() {
    const e = {};
    if (!form.name.trim()) e.name = true;
    if (!form.email.trim()) e.email = true;
    if (Object.keys(e).length) { setErrors(e); return; }
    setErrors({});
    go(1);
  }

  function handleAnswer(qId, val) {
    setForm(p => ({ ...p, [qId]: val }));
    setTimeout(() => {
      const idx = QUESTIONS.findIndex(q => q.id === qId);
      go(idx + 2);
    }, 240);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch (err) {
      console.error("Review submit error:", err);
      setStatus("error");
    }
  }

  /* ── Success ── */
  if (status === "success") {
    return (
      <div className="min-h-[380px] flex flex-col items-start justify-center space-y-6">
        <div className="space-y-2">
          <p className="text-[10px] font-mono text-muted uppercase tracking-[0.2em]">Done</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Thank you,<br />{form.name.split(" ")[0]}.
          </h2>
        </div>
        <button
          onClick={() => { setStep(0); setStatus("idle"); setForm({ name: "", email: "", role: "", q1: "", q2: "", q3: "", q4: "", q5: "", suggestion: "" }); }}
          className="text-xs font-mono text-muted hover:text-foreground transition-colors cursor-pointer underline underline-offset-4"
        >
          Submit another
        </button>
      </div>
    );
  }

  const questionStep = step >= 1 && step <= 5;
  const currentQ = questionStep ? QUESTIONS[step - 1] : null;
  const pct = Math.round((step / (TOTAL_STEPS - 1)) * 100);

  return (
    <div className="space-y-8">

      {/* ── Progress ── */}
      <div className="flex items-center gap-4">
        <div className="flex-1 h-[1.5px] bg-card-border relative overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 bg-foreground transition-all duration-500 ease-out"
            style={{ width: `${pct}%` }}
          />
        </div>
        <span className="text-[10px] font-mono text-muted tabular-nums shrink-0">{pct}%</span>
      </div>

      {/* ── Content area ── */}
      <div className="overflow-hidden min-h-[340px] relative">

        {/* Ambient step watermark */}
        {questionStep && (
          <div
            aria-hidden
            className="pointer-events-none absolute -right-2 -top-4 font-mono font-black text-[120px] leading-none select-none"
            style={{ color: "rgba(255,255,255,0.03)" }}
          >
            {String(step).padStart(2, "0")}
          </div>
        )}

        {/* Step 0 — Identity */}
        {step === 0 && (
          <Slide direction={direction} stepKey="identity">
            <div className="space-y-8">
              <div className="space-y-1">
                <p className="text-[10px] font-mono text-muted uppercase tracking-[0.2em]">Step 1 of 7</p>
                <h2 className="text-3xl font-bold tracking-tight text-foreground">
                  Who are you?
                </h2>
              </div>

              <div className="space-y-5">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-[11px] font-mono text-muted uppercase tracking-[0.12em]">
                    Name <span className="text-foreground">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    autoFocus
                    onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                    onKeyDown={e => e.key === "Enter" && handleIdentityNext()}
                    className={`w-full bg-transparent border-b text-lg text-foreground placeholder:text-muted/30 focus:outline-none pb-2 transition-colors ${errors.name ? "border-red-500/60" : "border-card-border focus:border-foreground"}`}
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-[11px] font-mono text-muted uppercase tracking-[0.12em]">
                    Email <span className="text-foreground">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                    onKeyDown={e => e.key === "Enter" && handleIdentityNext()}
                    className={`w-full bg-transparent border-b text-lg text-foreground placeholder:text-muted/30 focus:outline-none pb-2 transition-colors ${errors.email ? "border-red-500/60" : "border-card-border focus:border-foreground"}`}
                  />
                </div>

                {/* Role */}
                <div className="space-y-2">
                  <label className="text-[11px] font-mono text-muted uppercase tracking-[0.12em]">
                    Role <span className="text-muted/50 normal-case tracking-normal">— optional</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Full-stack Dev, Indie Hacker"
                    value={form.role}
                    onChange={e => setForm(p => ({ ...p, role: e.target.value }))}
                    onKeyDown={e => e.key === "Enter" && handleIdentityNext()}
                    className="w-full bg-transparent border-b border-card-border focus:border-foreground text-lg text-foreground placeholder:text-muted/30 focus:outline-none pb-2 transition-colors"
                  />
                </div>
              </div>

              <button
                onClick={handleIdentityNext}
                className="group flex items-center gap-3 px-6 py-3 bg-foreground text-background text-sm font-semibold tracking-tight transition-all duration-150 active:scale-[0.97] cursor-pointer hover:opacity-90"
              >
                Continue
                <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
              </button>
            </div>
          </Slide>
        )}

        {/* Steps 1–5 — Questions */}
        {questionStep && (
          <Slide direction={direction} stepKey={`q${step}`}>
            <div className="space-y-8">
              <div className="space-y-3">
                <p className="text-[10px] font-mono text-muted uppercase tracking-[0.2em]">
                  Question {step} of 5
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground leading-tight">
                  {currentQ.label}
                </h2>
              </div>

              {/* Rating chips — horizontal wrap */}
              <div className="flex flex-wrap gap-2">
                {RATINGS.map(rating => {
                  const isSelected = form[currentQ.id] === rating;
                  return (
                    <button
                      key={rating}
                      type="button"
                      onClick={() => handleAnswer(currentQ.id, rating)}
                      className={`
                        px-4 py-2 text-sm tracking-tight transition-all duration-150 cursor-pointer
                        active:scale-[0.96]
                        ${isSelected
                          ? "bg-foreground text-background font-semibold"
                          : "border border-card-border text-foreground hover:border-foreground/40 bg-transparent"
                        }
                      `}
                    >
                      {rating}
                    </button>
                  );
                })}
              </div>
            </div>
          </Slide>
        )}

        {/* Step 6 — Suggestion + Submit */}
        {step === 6 && (
          <Slide direction={direction} stepKey="suggestion">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-3">
                <p className="text-[10px] font-mono text-muted uppercase tracking-[0.2em]">Final step</p>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                  Any suggestions?
                </h2>
              </div>

              <textarea
                rows={5}
                autoFocus
                placeholder="What would make TokenCap better? (optional)"
                value={form.suggestion}
                onChange={e => setForm(p => ({ ...p, suggestion: e.target.value }))}
                className="w-full bg-transparent border-b border-card-border focus:border-foreground text-base text-foreground placeholder:text-muted/30 focus:outline-none pb-2 transition-colors resize-none leading-relaxed"
              />

              {status === "error" && (
                <p className="text-xs font-mono text-red-400">Something went wrong — please try again.</p>
              )}

              <div className="flex items-center gap-6">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="group flex items-center gap-3 px-6 py-3 bg-foreground text-background text-sm font-semibold tracking-tight transition-all duration-150 active:scale-[0.97] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer hover:opacity-90"
                >
                  {status === "submitting" ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Review
                      <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                    </>
                  )}
                </button>
                <p className="text-[10px] font-mono text-muted/50">
                  Email stays private.
                </p>
              </div>
            </form>
          </Slide>
        )}
      </div>

      {/* Back */}
      {step > 0 && status !== "submitting" && (
        <button
          onClick={() => go(step - 1)}
          className="text-[11px] font-mono text-muted hover:text-foreground transition-colors cursor-pointer"
        >
          ← Back
        </button>
      )}
    </div>
  );
}
