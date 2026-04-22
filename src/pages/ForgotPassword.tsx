import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import logo from "@/assets/logo.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ForgotPassword() {
  const [email,     setEmail]     = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sent,      setSent]      = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Please enter your email address.");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_NODE_API_URL}/api/sch-forgot-password`, {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ email: email.trim().toLowerCase() }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Something went wrong. Please try again.");
        return;
      }

      // Always show success (backend never reveals if email exists)
      setSent(true);

    } catch {
      toast.error("Unable to connect to the server. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <ToastContainer position="top-right" autoClose={4000} hideProgressBar={false} newestOnTop closeOnClick pauseOnHover theme="colored" />

      <div style={{
        minHeight: "calc(100vh - 80px)", display: "flex", alignItems: "center",
        justifyContent: "center", padding: "2rem 1rem",
        background: "var(--background)", position: "relative", overflow: "hidden",
      }}>
        {/* Decorative circles */}
        <div style={{ position: "absolute", top: "-120px", right: "-120px", width: 400, height: 400, borderRadius: "50%", background: "var(--accent)", opacity: 0.04, pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-80px", left: "-80px", width: 300, height: 300, borderRadius: "50%", background: "var(--primary)", opacity: 0.06, pointerEvents: "none" }} />

        {/* Card */}
        <div style={{
          width: "100%", maxWidth: 460,
          background: "var(--card, #fff)", border: "1px solid var(--border, #e5e7eb)",
          borderRadius: 20, padding: "2.5rem 2rem",
          boxShadow: "0 8px 40px rgba(0,0,0,0.08)", position: "relative", zIndex: 1,
        }}>

          {sent ? (
            /* ── SUCCESS STATE ── */
            <div style={{ textAlign: "center" }}>
              <div style={{
                width: 64, height: 64, borderRadius: "50%",
                background: "rgba(34,197,94,0.1)", display: "flex",
                alignItems: "center", justifyContent: "center",
                margin: "0 auto 1.5rem",
              }}>
                <CheckCircle size={32} style={{ color: "#22c55e" }} />
              </div>

              <h1 style={{ fontSize: "1.6rem", fontWeight: 800, fontFamily: "Georgia, serif", color: "var(--foreground)", margin: "0 0 0.75rem" }}>
                Check Your <span style={{ color: "var(--accent)" }}>Email</span>
              </h1>
              <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", lineHeight: 1.7, margin: "0 0 0.5rem" }}>
                We've sent a password reset link to
              </p>
              <p style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--foreground)", margin: "0 0 1.75rem", wordBreak: "break-all" }}>
                {email}
              </p>
              <p style={{ fontSize: "0.8rem", color: "var(--muted-foreground)", lineHeight: 1.6, margin: "0 0 2rem" }}>
                The link expires in <strong>1 hour</strong>. If you don't see the email, check your spam folder.
              </p>

              <button
                onClick={() => { setSent(false); setEmail(""); }}
                style={{
                  width: "100%", padding: "0.75rem", borderRadius: 10,
                  border: "1.5px solid var(--border, #e5e7eb)", background: "none",
                  fontSize: "0.875rem", fontWeight: 600, color: "var(--foreground)",
                  cursor: "pointer", marginBottom: "1rem",
                }}
              >
                Try a different email
              </button>

              <Link
                to="/login"
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  gap: "0.4rem", fontSize: "0.83rem", color: "var(--accent)",
                  textDecoration: "none", fontWeight: 600,
                }}
              >
                <ArrowLeft size={14} /> Back to Sign In
              </Link>
            </div>

          ) : (
            /* ── FORM STATE ── */
            <>
              {/* Logo + heading */}
              <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                <Link to="/">
                  <img src={logo} alt="Afrika Scholar" style={{ height: 44, margin: "0 auto 1.25rem", display: "block" }} />
                </Link>
                <h1 style={{ fontSize: "1.75rem", fontWeight: 800, fontFamily: "Georgia, serif", color: "var(--foreground)", margin: "0 0 0.35rem" }}>
                  Forgot <span style={{ color: "var(--accent)" }}>Password?</span>
                </h1>
                <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", margin: 0, lineHeight: 1.6 }}>
                  Enter your email and we'll send you a link to reset your password.
                </p>
              </div>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div>
                  <label style={labelStyle}>EMAIL ADDRESS</label>
                  <div style={inputWrap}>
                    <Mail size={15} style={iconStyle} />
                    <input
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      required
                      disabled={isLoading}
                      style={inputInner}
                      autoFocus
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  style={{
                    width: "100%", padding: "0.85rem",
                    borderRadius: 10, border: "none", color: "#fff",
                    fontSize: "0.95rem", fontWeight: 700,
                    cursor: isLoading ? "not-allowed" : "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    gap: "0.5rem", opacity: isLoading ? 0.72 : 1, transition: "opacity 0.15s",
                  }}
                  onMouseEnter={e => { if (!isLoading) e.currentTarget.style.opacity = "0.88"; }}
                  onMouseLeave={e => { if (!isLoading) e.currentTarget.style.opacity = "1"; }}
                  className="bg-[#381b92]"
                >
                  {isLoading ? (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                        style={{ animation: "spin 0.8s linear infinite" }}>
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>Send Reset Link <ArrowRight size={17} /></>
                  )}
                </button>
              </form>

              <div style={{ textAlign: "center", marginTop: "1.75rem" }}>
                <Link
                  to="/login"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "0.4rem",
                    fontSize: "0.83rem", color: "var(--muted-foreground)",
                    textDecoration: "none", fontWeight: 600,
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--muted-foreground)")}
                >
                  <ArrowLeft size={14} /> Back to Sign In
                </Link>
              </div>
            </>
          )}
        </div>
      </div>

      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const labelStyle: React.CSSProperties = {
  display: "block", fontSize: "0.7rem", fontWeight: 700,
  letterSpacing: "0.08em", color: "var(--muted-foreground)",
  marginBottom: "0.4rem", textTransform: "uppercase",
};

const inputWrap: React.CSSProperties = {
  position: "relative", display: "flex", alignItems: "center",
};

const iconStyle: React.CSSProperties = {
  position: "absolute", left: "0.875rem",
  color: "var(--muted-foreground)", pointerEvents: "none", flexShrink: 0,
};

const inputInner: React.CSSProperties = {
  width: "100%", borderRadius: 10,
  border: "1px solid black", borderStyle: "solid",
  background: "var(--background, #fff)",
  padding: "0.75rem 0.875rem 0.75rem 2.5rem",
  fontSize: "0.875rem", color: "var(--foreground)",
  boxSizing: "border-box", transition: "border-color 0.15s",
};
