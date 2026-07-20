import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Daily Ping — Stay Connected. Stay Safe.",
  description:
    "Daily Ping is a simple check-in app that keeps your loved ones informed that you're okay — and alerts them automatically when you're not.",
};

const steps = [
  {
    num: "01",
    title: "Set your check-in interval",
    desc: "Choose how often you want to check in — every 24 hours, 48 hours, or a custom window that fits your life.",
  },
  {
    num: "02",
    title: "Add your emergency contacts",
    desc: "Add the people you trust — family, friends, or anyone who should know if you go quiet.",
  },
  {
    num: "03",
    title: "Ping daily",
    desc: "Open the app and tap once. That's it. If you miss your window, Daily Ping emails your contacts so they can reach out.",
  },
];

const features = [
  {
    title: "One-tap check-in",
    desc: "Checking in takes under a second. No forms, no friction — just a single tap.",
  },
  {
    title: "Smart reminders",
    desc: "Push notifications remind you before your window closes so you never accidentally trigger a false alert.",
  },
  {
    title: "Automatic email alerts",
    desc: "If you miss your deadline, your contacts receive a clear, calm email with your last check-in time.",
  },
  {
    title: "Multiple contacts",
    desc: "Add family, friends, or colleagues. Categorise them by relationship so alerts reach the right people.",
  },
  {
    title: "Private by default",
    desc: "Your contacts are stored on your device. No data is sold or shared with third parties.",
  },
  {
    title: "Check-in history",
    desc: "Review your past check-ins and alert history in one clean timeline view.",
  },
];

export default function DailyPingPage() {
  return (
    <div className="min-h-screen" style={{ background: "#0A0F1E", color: "#F1F5F9" }}>
      {/* Nav */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1.25rem 2rem",
          borderBottom: "1px solid #1E293B",
          position: "sticky",
          top: 0,
          background: "#0A0F1E",
          zIndex: 10,
        }}
      >
        <span style={{ fontSize: "1.25rem", fontWeight: 700, color: "#22C55E", letterSpacing: "-0.02em" }}>
          Daily<span style={{ color: "#F97316" }}>Ping</span>
        </span>
        <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
          <a href="#how-it-works" style={{ color: "#94A3B8", fontSize: "0.9rem" }}>
            How it works
          </a>
          <Link
            href="/"
            style={{
              color: "#94A3B8",
              fontSize: "0.9rem",
              borderLeft: "1px solid #1E293B",
              paddingLeft: "1.5rem",
            }}
          >
            Back to portfolio
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <header
        style={{
          textAlign: "center",
          padding: "6rem 1.5rem 4rem",
          maxWidth: "720px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "inline-block",
            background: "rgba(34,197,94,0.12)",
            color: "#22C55E",
            border: "1px solid rgba(34,197,94,0.3)",
            borderRadius: "999px",
            padding: "0.3rem 1rem",
            fontSize: "0.8rem",
            fontWeight: 600,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
          }}
        >
          Safety Check-In App
        </div>
        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3.25rem)",
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
            marginBottom: "1.25rem",
          }}
        >
          Stay Connected.{" "}
          <span style={{ color: "#22C55E" }}>Stay Safe.</span>
        </h1>
        <p
          style={{
            fontSize: "1.1rem",
            color: "#94A3B8",
            maxWidth: "520px",
            margin: "0 auto 2.5rem",
          }}
        >
          Daily Ping sends a quiet daily reminder to check in. Miss it, and your trusted contacts are
          automatically notified — so the people who care about you always know you&apos;re okay.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="#"
            style={{
              display: "inline-block",
              padding: "0.75rem 1.75rem",
              borderRadius: "0.5rem",
              fontSize: "0.95rem",
              fontWeight: 600,
              background: "#22C55E",
              color: "#fff",
            }}
          >
            Download on iOS
          </a>
          <a
            href="#how-it-works"
            style={{
              display: "inline-block",
              padding: "0.75rem 1.75rem",
              borderRadius: "0.5rem",
              fontSize: "0.95rem",
              fontWeight: 600,
              background: "#131929",
              color: "#F1F5F9",
              border: "1px solid #1E293B",
            }}
          >
            Learn More
          </a>
        </div>
      </header>

      <hr style={{ border: "none", borderTop: "1px solid #1E293B", maxWidth: "900px", margin: "0 auto" }} />

      {/* How it works */}
      <section
        id="how-it-works"
        style={{ padding: "5rem 1.5rem", maxWidth: "900px", margin: "0 auto" }}
      >
        <p
          style={{
            fontSize: "0.8rem",
            fontWeight: 600,
            color: "#F97316",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "0.5rem",
          }}
        >
          How it works
        </p>
        <h2
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            fontWeight: 700,
            marginBottom: "1rem",
            letterSpacing: "-0.02em",
          }}
        >
          Three simple steps
        </h2>
        <p style={{ color: "#94A3B8", maxWidth: "540px", marginBottom: "3rem" }}>
          No complicated setup. Daily Ping is designed to feel effortless so you actually use it every day.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {steps.map((s) => (
            <div
              key={s.num}
              style={{
                background: "#131929",
                border: "1px solid #1E293B",
                borderRadius: "1rem",
                padding: "1.75rem 1.5rem",
              }}
            >
              <div
                style={{
                  width: "2.25rem",
                  height: "2.25rem",
                  borderRadius: "50%",
                  background: "rgba(34,197,94,0.12)",
                  border: "1px solid rgba(34,197,94,0.3)",
                  color: "#22C55E",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem",
                }}
              >
                {s.num}
              </div>
              <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "0.4rem" }}>{s.title}</h3>
              <p style={{ fontSize: "0.9rem", color: "#94A3B8" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid #1E293B", maxWidth: "900px", margin: "0 auto" }} />

      {/* Features */}
      <section style={{ padding: "5rem 1.5rem", maxWidth: "900px", margin: "0 auto" }}>
        <p
          style={{
            fontSize: "0.8rem",
            fontWeight: 600,
            color: "#F97316",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "0.5rem",
          }}
        >
          Features
        </p>
        <h2
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            fontWeight: 700,
            marginBottom: "1rem",
            letterSpacing: "-0.02em",
          }}
        >
          Built for peace of mind
        </h2>
        <p style={{ color: "#94A3B8", maxWidth: "540px", marginBottom: "3rem" }}>
          Simple by design. Powerful when it counts.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {features.map((f) => (
            <div
              key={f.title}
              style={{
                background: "#131929",
                border: "1px solid #1E293B",
                borderRadius: "1rem",
                padding: "1.5rem",
              }}
            >
              <h3 style={{ fontSize: "0.95rem", fontWeight: 600, marginBottom: "0.35rem" }}>{f.title}</h3>
              <p style={{ fontSize: "0.875rem", color: "#94A3B8" }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid #1E293B", maxWidth: "900px", margin: "0 auto" }} />

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "2.5rem 1.5rem", color: "#94A3B8", fontSize: "0.85rem" }}>
        <p>&copy; 2025 Daily Ping. All rights reserved.</p>
        <p style={{ marginTop: "0.5rem" }}>
          <a href="#" style={{ color: "#94A3B8", textDecoration: "underline" }}>Privacy Policy</a>
          &nbsp;&middot;&nbsp;
          <a href="#" style={{ color: "#94A3B8", textDecoration: "underline" }}>Terms of Use</a>
          &nbsp;&middot;&nbsp;
          <a href="mailto:support@dailyping.app" style={{ color: "#94A3B8", textDecoration: "underline" }}>Contact</a>
        </p>
      </footer>
    </div>
  );
}
