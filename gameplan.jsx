import { useState } from "react";

const phases = [
  {
    id: 0,
    label: "BOARDS",
    period: "NOW → 28th March",
    status: "active",
    goal: "Score high. Buy full freedom.",
    color: "#FFD700",
    tasks: [
      { text: "Focus 100% on CBSE boards", done: false },
      { text: "Passively watch markets daily (no trading)", done: false },
      { text: "Read Zero to One by Peter Thiel", done: false },
      { text: "Lurk on Fintwit — absorb the language", done: false },
    ],
  },
  {
    id: 1,
    label: "BUILD",
    period: "28th March → 18th Birthday",
    status: "locked",
    goal: "Ship MVP. Attempt funded account challenge.",
    color: "#00FF94",
    tasks: [
      { text: "Open Claude Code — start PMS dashboard MVP", done: false },
      { text: "Stack: Next.js + Supabase + Vercel", done: false },
      { text: "Build: Portfolio tracker, client view, P&L engine", done: false },
      { text: "Research & attempt FundedStock.io challenge", done: false },
      { text: "Research Dubai prop firms (FTMO etc.)", done: false },
      { text: "Create Twitter/X — post market analysis weekly", done: false },
      { text: "Pass NISM Series XV exam", done: false },
    ],
  },
  {
    id: 2,
    label: "LAUNCH",
    period: "18th Birthday → Year 1",
    status: "locked",
    goal: "Go legal. Get funded. First clients.",
    color: "#FF6B35",
    tasks: [
      { text: "Register Private Limited Company", done: false },
      { text: "Apply SEBI Research Analyst License", done: false },
      { text: "Open personal Zerodha trading account", done: false },
      { text: "Integrate Zerodha Kite API into platform", done: false },
      { text: "Scale prop firm account to $50K+", done: false },
      { text: "Get first 3 PMS clients (family network)", done: false },
      { text: "Target AUM: ₹2-5 Crore", done: false },
    ],
  },
  {
    id: 3,
    label: "SCALE",
    period: "Year 2 → Year 3",
    status: "locked",
    goal: "₹25Cr AUM. License platform. Go multi-asset.",
    color: "#A78BFA",
    tasks: [
      { text: "Apply for SEBI PMS License", done: false },
      { text: "Add FX + Indices + Commodities to platform", done: false },
      { text: "License platform to other PMS managers (SaaS)", done: false },
      { text: "Build 50K+ Fintwit/YouTube following", done: false },
      { text: "Target AUM: ₹25 Crore", done: false },
      { text: "Hire: 1 analyst, 1 compliance officer", done: false },
    ],
  },
  {
    id: 4,
    label: "DOMINATE",
    period: "Year 4 → Year 5",
    status: "locked",
    goal: "India's first multi-asset PMS. GIFT City. Forbes.",
    color: "#FF2D78",
    tasks: [
      { text: "Convert to AIF Category 3 (Hedge Fund)", done: false },
      { text: "Open GIFT City entity for international capital", done: false },
      { text: "Raise from NRI family offices & diaspora", done: false },
      { text: "Target AUM: ₹100 Crore+", done: false },
      { text: "Platform = India's VISE — license to 50+ PMS firms", done: false },
      { text: "Forbes 30 Under 30 India nomination", done: false },
    ],
  },
];

const finalGoal = "India's only multi-asset PMS platform — NSE, BSE, FX, Indices & Commodities — powered by proprietary AI tech. Forbes 30 Under 30 before 25.";

export default function GamePlan() {
  const [active, setActive] = useState(0);
  const [checked, setChecked] = useState({});

  const toggle = (phaseId, taskIdx) => {
    const key = `${phaseId}-${taskIdx}`;
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const phase = phases[active];

  return (
    <div style={{
      minHeight: "100vh",
      background: "#060608",
      color: "#fff",
      fontFamily: "'Courier New', monospace",
      padding: "0",
      overflow: "hidden",
    }}>
      {/* Header */}
      <div style={{
        borderBottom: "1px solid #1a1a1a",
        padding: "24px 32px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <div>
          <div style={{ fontSize: 11, letterSpacing: 4, color: "#666", marginBottom: 4 }}>OPERATION</div>
          <div style={{ fontSize: 22, fontWeight: 900, letterSpacing: 2, color: "#fff" }}>FORBES 2029</div>
        </div>
        <div style={{
          fontSize: 11,
          letterSpacing: 2,
          color: "#FFD700",
          border: "1px solid #FFD700",
          padding: "6px 14px",
          borderRadius: 2,
        }}>AGE 17 → 22</div>
      </div>

      {/* Goal Banner */}
      <div style={{
        background: "#0d0d0d",
        borderBottom: "1px solid #1a1a1a",
        padding: "16px 32px",
        fontSize: 12,
        color: "#888",
        letterSpacing: 1,
        lineHeight: 1.7,
      }}>
        <span style={{ color: "#FF2D78", marginRight: 10 }}>◆ ENDGAME</span>
        {finalGoal}
      </div>

      <div style={{ display: "flex", height: "calc(100vh - 140px)" }}>
        {/* Phase Sidebar */}
        <div style={{
          width: 200,
          borderRight: "1px solid #1a1a1a",
          padding: "24px 0",
          flexShrink: 0,
          overflowY: "auto",
        }}>
          {phases.map((p, i) => (
            <div
              key={p.id}
              onClick={() => setActive(i)}
              style={{
                padding: "16px 24px",
                cursor: "pointer",
                borderLeft: active === i ? `3px solid ${p.color}` : "3px solid transparent",
                background: active === i ? "#0f0f0f" : "transparent",
                transition: "all 0.15s",
              }}
            >
              <div style={{
                fontSize: 10,
                letterSpacing: 3,
                color: active === i ? p.color : "#444",
                marginBottom: 4,
                fontWeight: 700,
              }}>0{i + 1}</div>
              <div style={{
                fontSize: 13,
                fontWeight: 900,
                color: active === i ? "#fff" : "#555",
                letterSpacing: 2,
              }}>{p.label}</div>
              <div style={{
                fontSize: 9,
                color: active === i ? "#666" : "#333",
                marginTop: 4,
                letterSpacing: 1,
              }}>{p.period}</div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, padding: "32px", overflowY: "auto" }}>
          {/* Phase Header */}
          <div style={{ marginBottom: 32 }}>
            <div style={{
              fontSize: 10,
              letterSpacing: 4,
              color: phase.color,
              marginBottom: 8,
            }}>PHASE 0{active + 1} — {phase.period}</div>
            <div style={{
              fontSize: 28,
              fontWeight: 900,
              letterSpacing: 3,
              color: "#fff",
              marginBottom: 12,
            }}>{phase.label}</div>
            <div style={{
              fontSize: 13,
              color: "#888",
              borderLeft: `2px solid ${phase.color}`,
              paddingLeft: 16,
              lineHeight: 1.6,
            }}>
              <span style={{ color: "#fff" }}>GOAL: </span>{phase.goal}
            </div>
          </div>

          {/* Tasks */}
          <div style={{ marginBottom: 40 }}>
            <div style={{
              fontSize: 10,
              letterSpacing: 3,
              color: "#444",
              marginBottom: 16,
            }}>MISSIONS</div>
            {phase.tasks.map((task, idx) => {
              const key = `${phase.id}-${idx}`;
              const done = checked[key];
              return (
                <div
                  key={idx}
                  onClick={() => toggle(phase.id, idx)}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 16,
                    padding: "14px 16px",
                    marginBottom: 8,
                    background: done ? "#0a0a0a" : "#0d0d0d",
                    border: `1px solid ${done ? phase.color + "44" : "#1a1a1a"}`,
                    borderRadius: 4,
                    cursor: "pointer",
                    transition: "all 0.15s",
                  }}
                >
                  <div style={{
                    width: 18,
                    height: 18,
                    border: `2px solid ${done ? phase.color : "#333"}`,
                    borderRadius: 2,
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 1,
                    background: done ? phase.color + "22" : "transparent",
                    transition: "all 0.15s",
                  }}>
                    {done && <span style={{ color: phase.color, fontSize: 12, fontWeight: 900 }}>✓</span>}
                  </div>
                  <div style={{
                    fontSize: 13,
                    color: done ? "#555" : "#ccc",
                    textDecoration: done ? "line-through" : "none",
                    lineHeight: 1.5,
                    letterSpacing: 0.5,
                  }}>{task.text}</div>
                </div>
              );
            })}
          </div>

          {/* Progress Bar */}
          <div>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 10,
              letterSpacing: 2,
              color: "#444",
              marginBottom: 8,
            }}>
              <span>PHASE PROGRESS</span>
              <span style={{ color: phase.color }}>
                {phase.tasks.filter((_, idx) => checked[`${phase.id}-${idx}`]).length}/{phase.tasks.length}
              </span>
            </div>
            <div style={{
              height: 3,
              background: "#1a1a1a",
              borderRadius: 2,
              overflow: "hidden",
            }}>
              <div style={{
                height: "100%",
                width: `${(phase.tasks.filter((_, idx) => checked[`${phase.id}-${idx}`]).length / phase.tasks.length) * 100}%`,
                background: phase.color,
                transition: "width 0.3s ease",
                borderRadius: 2,
              }} />
            </div>
          </div>
        </div>

        {/* Right Panel — Phase Map */}
        <div style={{
          width: 180,
          borderLeft: "1px solid #1a1a1a",
          padding: "24px 20px",
          flexShrink: 0,
        }}>
          <div style={{
            fontSize: 10,
            letterSpacing: 3,
            color: "#444",
            marginBottom: 20,
          }}>ROADMAP</div>
          {phases.map((p, i) => (
            <div key={i} style={{ marginBottom: 20 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: active === i ? p.color : active > i ? p.color + "88" : "#222",
                  flexShrink: 0,
                }} />
                <div style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: active === i ? p.color : active > i ? "#555" : "#333",
                  letterSpacing: 2,
                }}>{p.label}</div>
              </div>
              {i < phases.length - 1 && (
                <div style={{
                  width: 1,
                  height: 16,
                  background: "#1a1a1a",
                  marginLeft: 3.5,
                  marginTop: 4,
                }} />
              )}
            </div>
          ))}

          <div style={{
            marginTop: 32,
            padding: "12px",
            border: "1px solid #FF2D7833",
            borderRadius: 4,
            background: "#FF2D7811",
          }}>
            <div style={{ fontSize: 9, letterSpacing: 2, color: "#FF2D78", marginBottom: 6 }}>TARGET</div>
            <div style={{ fontSize: 11, color: "#fff", lineHeight: 1.5 }}>Forbes 30U30 India</div>
            <div style={{ fontSize: 10, color: "#666", marginTop: 4 }}>Before Age 25</div>
          </div>
        </div>
      </div>
    </div>
  );
}