import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Lock, Eye, EyeOff, ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import logo from "@/assets/logo.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ResetPassword() {
  const navigate       = useNavigate();
  const [params]       = useSearchParams();
  const token          = params.get("token")  || "";
  const email          = params.get("email")  || "";

  const [password,        setPassword]        = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword,    setShowPassword]    = useState(false);
  const [showConfirm,     setShowConfirm]     = useState(false);
  const [isLoading,       setIsLoading]       = useState(false);
  const [done,            setDone]            = useState(false);

  // ── Guard: no token/email in URL ─────────────────────────────────────────────
  if (!token || !email) {
    return (
      <div style={{ minHeight: "calc(100vh - 80px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
        <div style={{ textAlign: "center", maxWidth: 400 }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "1.5rem", color: "var(--foreground)", marginBottom: "0.75rem" }}>
            Invalid Reset Link
          </h2>
          <p style={{ color: "var(--muted-foreground)", fontSize: "0.875rem", marginBottom: "1.5rem" }}>
            This password reset link is missing or malformed. Please request a new one.
          </p>
          <Link to="/forgot-password" style={{ color: "var(--accent)", fontWeight: 700, textDecoration: "none" }}>
            Request a new link →
          </Link>
        </div>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      toast.error("Both fields are required.");
      return;
    }

    if (password.length < 8) {
      toast.error("Password must be at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_NODE_API_URL}/api/sch-reset-password`, {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ token, email, newPassword: password }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Something went wrong. Please try again.");
        return;
      }

      setDone(true);
      setTimeout(() => navigate("/login", { replace: true }), 3000);

    } catch {
      toast.error("Unable to connect to the server. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Password strength indicator
  const getStrength = (pw: string) => {
    if (pw.length === 0) return { level: 0, label: "", color: "transparent" };
    if (pw.length < 6)   return { level: 1, label: "Too short",  color: "#ef4444" };
    if (pw.length < 8)   return { level: 2, label: "Weak",       color: "#f97316" };
    const hasUpper  = /[A-Z]/.test(pw);
    const hasNum    = /[0-9]/.test(pw);
    const hasSymbol = /[^A-Za-z0-9]/.test(pw);
    const score = [hasUpper, hasNum, hasSymbol].filter(Boolean).length;
    if (score === 0) return { level: 2, label: "Weak",   color: "#f97316" };
    if (score === 1) return { level: 3, label: "Fair",   color: "#eab308" };
    if (score === 2) return { level: 4, label: "Good",   color: "#22c55e" };
    return              { level: 5, label: "Strong", color: "#16a34a" };
  };
  const strength = getStrength(password);

  return (
    <div>
      <ToastContainer position="top-right" autoClose={4000} hideProgressBar={false} newestOnTop closeOnClick pauseOnHover theme="colored" />

      <div style={{
        minHeight: "calc(100vh - 80px)", display: "flex", alignItems: "center",
        justifyContent: "center", padding: "2rem 1rem",
        background: "var(--background)", position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: "-120px", right: "-120px", width: 400, height: 400, borderRadius: "50%", background: "var(--accent)", opacity: 0.04, pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-80px", left: "-80px", width: 300, height: 300, borderRadius: "50%", background: "var(--primary)", opacity: 0.06, pointerEvents: "none" }} />

        <div style={{
          width: "100%", maxWidth: 460,
          background: "var(--card, #fff)", border: "1px solid var(--border, #e5e7eb)",
          borderRadius: 20, padding: "2.5rem 2rem",
          boxShadow: "0 8px 40px rgba(0,0,0,0.08)", position: "relative", zIndex: 1,
        }}>

          {done ? (
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
                Password <span style={{ color: "var(--accent)" }}>Reset!</span>
              </h1>
              <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", lineHeight: 1.7, margin: "0 0 1.75rem" }}>
                Your password has been updated successfully. Redirecting you to sign in...
              </p>
              <Link
                to="/login"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.4rem",
                  color: "var(--accent)", fontWeight: 700, textDecoration: "none", fontSize: "0.875rem",
                }}
              >
                Go to Sign In <ArrowRight size={15} />
              </Link>
            </div>

          ) : (
            /* ── FORM STATE ── */
            <>
              <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                <Link to="/">
                  <img src={logo} alt="Afrika Scholar" style={{ height: 44, margin: "0 auto 1.25rem", display: "block" }} />
                </Link>
                <h1 style={{ fontSize: "1.75rem", fontWeight: 800, fontFamily: "Georgia, serif", color: "var(--foreground)", margin: "0 0 0.35rem" }}>
                  Reset <span style={{ color: "var(--accent)" }}>Password</span>
                </h1>
                <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", margin: 0 }}>
                  Choose a strong new password for your account.
                </p>
              </div>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>

                {/* New Password */}
                <div>
                  <label style={labelStyle}>NEW PASSWORD</label>
                  <div style={inputWrap}>
                    <Lock size={15} style={iconStyle} />
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Min. 8 characters"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      required
                      disabled={isLoading}
                      style={{ ...inputInner, paddingRight: "2.5rem" }}
                      autoFocus
                    />
                    <button type="button" onClick={() => setShowPassword(v => !v)} style={eyeBtn}>
                      {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                    </button>
                  </div>

                  {/* Strength bar */}
                  {password.length > 0 && (
                    <div style={{ marginTop: "0.5rem" }}>
                      <div style={{ display: "flex", gap: 4, marginBottom: 4 }}>
                        {[1, 2, 3, 4, 5].map(i => (
                          <div key={i} style={{
                            flex: 1, height: 4, borderRadius: 99,
                            background: i <= strength.level ? strength.color : "#e5e7eb",
                            transition: "background 0.25s",
                          }} />
                        ))}
                      </div>
                      <p style={{ fontSize: "0.72rem", color: strength.color, margin: 0, fontWeight: 600 }}>
                        {strength.label}
                      </p>
                    </div>
                  )}
                </div>

                {/* Confirm Password */}
                <div>
                  <label style={labelStyle}>CONFIRM PASSWORD</label>
                  <div style={inputWrap}>
                    <Lock size={15} style={iconStyle} />
                    <input
                      type={showConfirm ? "text" : "password"}
                      placeholder="Repeat your new password"
                      value={confirmPassword}
                      onChange={e => setConfirmPassword(e.target.value)}
                      required
                      disabled={isLoading}
                      style={{
                        ...inputInner,
                        paddingRight: "2.5rem",
                        borderColor: confirmPassword && confirmPassword !== password ? "#ef4444" : undefined,
                      }}
                    />
                    <button type="button" onClick={() => setShowConfirm(v => !v)} style={eyeBtn}>
                      {showConfirm ? <EyeOff size={15} /> : <Eye size={15} />}
                    </button>
                  </div>
                  {confirmPassword && confirmPassword !== password && (
                    <p style={{ fontSize: "0.75rem", color: "#ef4444", margin: "0.35rem 0 0", fontWeight: 600 }}>
                      Passwords don't match
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  style={{
                    marginTop: "0.5rem", width: "100%", padding: "0.85rem",
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
                      Resetting...
                    </>
                  ) : (
                    <>Reset Password <ArrowRight size={17} /></>
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

const eyeBtn: React.CSSProperties = {
  position: "absolute", right: "0.875rem",
  background: "none", border: "none", cursor: "pointer",
  color: "var(--muted-foreground)", padding: 0,
  display: "flex", alignItems: "center",
};
