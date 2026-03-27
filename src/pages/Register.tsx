import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  User, Mail, Lock, ArrowRight, Eye, EyeOff, AlertCircle, Mail as MailIcon,
} from "lucide-react";
import logo from "@/assets/logo.png";

type Screen = "form" | "verify";

export default function Register() {
  const navigate = useNavigate();
  const [screen,       setScreen]      = useState<Screen>("form");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm,  setShowConfirm]  = useState(false);
  const [isLoading,    setIsLoading]    = useState(false);
  const [error,        setError]        = useState("");
  const [resendSent,   setResendSent]   = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    email:    "",
    password: "",
    confirm:  "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (error) setError("");
  };

  // ── Register & go to verify screen ────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirm) {
      setError("Passwords do not match.");
      return;
    }
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_NODE_API_URL}/api/sch-register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.username.trim(),
          email:    formData.email.trim().toLowerCase(),
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Registration failed. Please try again.");
        setIsLoading(false);
        return;
      }

      localStorage.setItem("as_token", data.token);
      localStorage.setItem("as_user",  JSON.stringify(data.user));

      setScreen("verify");

    } catch {
      setError("Unable to connect to the server. Please try again.");
      setIsLoading(false);
    }
  };

  // ── Resend verification email ──────────────────────────────────────────────
  const handleResend = async () => {
    setResendSent(false);
    try {
      await fetch(`${import.meta.env.VITE_NODE_API_URL}/api/resend-verification`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email.trim().toLowerCase() }),
      });
    } catch { /* silent */ }
    setResendSent(true);
    setTimeout(() => setResendSent(false), 4000);
  };

  // ── Skip verification → go straight to onboarding ─────────────────────────
  const handleContinue = () => navigate("/onboarding");

  // ══════════════════════════════════════════════════════════════════════════════
  // VERIFY SCREEN
  // ══════════════════════════════════════════════════════════════════════════════
  if (screen === "verify") {
    return (
      <div style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        background: "var(--background)", padding: "2rem 1rem",
      }}>
        {/* Brand name */}
        <Link to="/" style={{ textDecoration: "none", marginBottom: "2rem" }}>
          <span style={{ fontSize: "1.5rem", fontWeight: 800, letterSpacing: "-0.02em" }}>
            <span style={{ color: "var(--accent)" }}>Afrika</span>
            <span style={{ color: "var(--foreground)" }}>scholar</span>
          </span>
        </Link>

        {/* Card */}
        <div style={{
          width: "100%", maxWidth: 460,
          background: "var(--card, #fff)", border: "1px solid var(--border, #e5e7eb)",
          borderRadius: 20, padding: "2.5rem 2rem",
          boxShadow: "0 8px 40px rgba(0,0,0,0.08)", textAlign: "center",
        }}>
          {/* Icon */}
          <div style={{
            width: 68, height: 68, borderRadius: "50%",
            background: "rgba(234,88,12,0.08)",
            display: "flex", alignItems: "center", justifyContent: "center",
            margin: "0 auto 1.5rem",
          }}>
            <MailIcon size={30} style={{ color: "var(--accent, #ea580c)" }} />
          </div>

          <h2 style={{
            fontSize: "1.5rem", fontWeight: 800,
            fontFamily: "Georgia, serif", color: "var(--foreground)",
            margin: "0 0 0.6rem",
          }}>
            Check Your Email
          </h2>
          <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", margin: "0 0 1.75rem", lineHeight: 1.6 }}>
            We've sent a verification link to{" "}
            <strong style={{ color: "var(--foreground)" }}>
              {formData.email || "your email address"}
            </strong>
            . Click the link to verify your account.
          </p>

          {/* Resend */}
          <button
            onClick={handleResend}
            style={{
              width: "100%", padding: "0.8rem",
              borderRadius: 10, border: "2px solid var(--accent, #ea580c)",
              background: "transparent", color: "var(--accent, #ea580c)",
              fontSize: "0.9rem", fontWeight: 700, cursor: "pointer",
              marginBottom: "0.75rem", transition: "all 0.15s",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(234,88,12,0.06)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
          >
            {resendSent ? "✓ Email Sent!" : "Resend Verification Email"}
          </button>

          {/* Change email — goes back to form */}
          <button
            onClick={() => { setScreen("form"); setError(""); }}
            style={{
              width: "100%", padding: "0.8rem",
              borderRadius: 10, border: "none",
              background: "transparent", color: "var(--foreground)",
              fontSize: "0.875rem", fontWeight: 600, cursor: "pointer",
              marginBottom: "1.5rem",
            }}
          >
            Change Email Address
          </button>

          {/* Divider */}
          <div style={{ height: 1, background: "var(--border, #e5e7eb)", marginBottom: "1.5rem" }} />

          {/* Continue without verifying */}
          <button
            onClick={handleContinue}
            style={{
              width: "100%", padding: "0.85rem",
              borderRadius: 10, border: "none",
              background: "#381b92", color: "#fff",
              fontSize: "0.95rem", fontWeight: 700, cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              gap: "0.5rem", transition: "opacity 0.15s",
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = "0.88"; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = "1"; }}
          >
            Continue <ArrowRight size={17} />
          </button>

          <p style={{ fontSize: "0.75rem", color: "var(--muted-foreground)", marginTop: "0.75rem" }}>
            You can verify your email later from your profile settings.
          </p>
        </div>
      </div>
    );
  }

  // ══════════════════════════════════════════════════════════════════════════════
  // REGISTER FORM
  // ══════════════════════════════════════════════════════════════════════════════
  return (
    <div>
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
          width: "100%", maxWidth: 480,
          background: "var(--card, #fff)", border: "1px solid var(--border, #e5e7eb)",
          borderRadius: 20, padding: "2.5rem 2rem",
          boxShadow: "0 8px 40px rgba(0,0,0,0.08)", position: "relative", zIndex: 1,
        }}>

          {/* Logo + heading */}
          <div style={{ textAlign: "center", marginBottom: "1.75rem" }}>
            <Link to="/">
              <img src={logo} alt="Afrika Scholar" style={{ height: 44, margin: "0 auto 1rem", display: "block" }} />
            </Link>
            <h1 style={{ fontSize: "1.6rem", fontWeight: 800, fontFamily: "Georgia, serif", color: "var(--foreground)", margin: "0 0 0.3rem" }}>
              Create your <span style={{ color: "var(--accent)" }}>Account</span>
            </h1>
            <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", margin: 0 }}>
              Join Afrika Scholar Today
            </p>
          </div>

          {/* Error */}
          {error && (
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.25)", borderRadius: 8, padding: "0.75rem 1rem", marginBottom: "1.25rem" }}>
              <AlertCircle size={15} style={{ color: "#ef4444", flexShrink: 0 }} />
              <span style={{ fontSize: "0.83rem", color: "#ef4444" }}>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

            {/* Full Name */}
            <div>
              <label style={labelStyle}>FULL NAME</label>
              <div style={inputWrap}>
                <User size={15} style={iconStyle} />
                <input
                  type="text" placeholder="Your full name"
                  value={formData.username}
                  onChange={e => handleChange("username", e.target.value)}
                  required minLength={3} style={inputInner}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label style={labelStyle}>EMAIL ADDRESS</label>
              <div style={inputWrap}>
                <Mail size={15} style={iconStyle} />
                <input
                  type="email" placeholder="you@example.com"
                  value={formData.email}
                  onChange={e => handleChange("email", e.target.value)}
                  required style={inputInner}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label style={labelStyle}>
                PASSWORD{" "}
                <span style={{ fontWeight: 400, color: "var(--muted-foreground)", textTransform: "none", fontSize: "0.7rem" }}>
                  (min. 6 characters)
                </span>
              </label>
              <div style={inputWrap}>
                <Lock size={15} style={iconStyle} />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={e => handleChange("password", e.target.value)}
                  required minLength={6}
                  style={{ ...inputInner, paddingRight: "2.5rem" }}
                />
                <button type="button" onClick={() => setShowPassword(v => !v)} style={eyeBtn}>
                  {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label style={labelStyle}>CONFIRM PASSWORD</label>
              <div style={inputWrap}>
                <Lock size={15} style={iconStyle} />
                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Repeat your password"
                  value={formData.confirm}
                  onChange={e => handleChange("confirm", e.target.value)}
                  required minLength={6}
                  style={{ ...inputInner, paddingRight: "2.5rem" }}
                />
                <button type="button" onClick={() => setShowConfirm(v => !v)} style={eyeBtn}>
                  {showConfirm ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            {/* Terms */}
            <label style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", cursor: "pointer" }}>
              <input type="checkbox" required style={{ marginTop: 3, width: 15, height: 15, accentColor: "var(--accent)", flexShrink: 0 }} />
              <span style={{ fontSize: "0.8rem", color: "var(--muted-foreground)", lineHeight: 1.5 }}>
                I agree to the{" "}
                <Link to="/terms" style={{ color: "var(--accent)", textDecoration: "none", fontWeight: 600 }}>Terms of Service</Link>
                {" "}and{" "}
                <Link to="/privacy" style={{ color: "var(--accent)", textDecoration: "none", fontWeight: 600 }}>Privacy Policy</Link>
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              style={{
                marginTop: "0.25rem", width: "100%", padding: "0.85rem",
                borderRadius: 10, border: "none", color: "#fff",
                fontSize: "0.95rem", fontWeight: 700,
                cursor: isLoading ? "not-allowed" : "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                gap: "0.5rem", background: "#381b92",
                opacity: isLoading ? 0.7 : 1, transition: "opacity 0.15s",
              }}
              onMouseEnter={e => { if (!isLoading) e.currentTarget.style.opacity = "0.88"; }}
              onMouseLeave={e => { if (!isLoading) e.currentTarget.style.opacity = "1"; }}
            >
              {isLoading ? (
                <>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"
                    style={{ animation: "spin 0.8s linear infinite" }}>
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  </svg>
                  Creating Account...
                </>
              ) : (
                <>Create Account <ArrowRight size={17} /></>
              )}
            </button>
          </form>

          {/* Sign in link */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", margin: "1.25rem 0 1rem" }}>
            <div style={{ flex: 1, height: 1, background: "var(--border, #e5e7eb)" }} />
            <span style={{ fontSize: "0.75rem", color: "var(--muted-foreground)", whiteSpace: "nowrap" }}>Already have an account?</span>
            <div style={{ flex: 1, height: 1, background: "var(--border, #e5e7eb)" }} />
          </div>
          <Link
            to="/login"
            style={{ display: "block", textAlign: "center", padding: "0.75rem", borderRadius: 10, border: "1.5px solid var(--border, #e5e7eb)", fontSize: "0.875rem", fontWeight: 600, color: "var(--foreground)", textDecoration: "none", transition: "border-color 0.15s" }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--accent)")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border, #e5e7eb)")}
          >
            Sign In Instead
          </Link>
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
  border: "1px solid black",
  background: "var(--background, #fff)",
  padding: "0.75rem 0.875rem 0.75rem 2.5rem",
  fontSize: "0.875rem", color: "var(--foreground)",
  outline: "none", fontFamily: "inherit",
  boxSizing: "border-box", transition: "border-color 0.15s",
};
const eyeBtn: React.CSSProperties = {
  position: "absolute", right: "0.875rem",
  background: "none", border: "none", cursor: "pointer",
  color: "var(--muted-foreground)", padding: 0,
  display: "flex", alignItems: "center",
};