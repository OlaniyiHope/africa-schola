
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Mail, Lock, ArrowRight, Eye, EyeOff, AlertCircle } from "lucide-react";
import logo from "@/assets/logo.png";
import { useAuth } from "@/context/AuthContext";
// Add these imports at the top
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Login() {
  const navigate          = useNavigate();
  const location          = useLocation();
  const from              = (location.state as any)?.from || "/onboarding";
  const { login }         = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading,    setIsLoading]    = useState(false);
  const [error,        setError]        = useState("");
  const [rememberMe,   setRememberMe]   = useState(false);
  const [formData,     setFormData]     = useState({ email: "", password: "" });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (error) setError("");
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setError("");

  //   if (!formData.email || !formData.password) {
  //     setError("Email and password are required.");
  //     return;
  //   }

  //   setIsLoading(true);

  //   try {
  //     const res = await fetch(`${import.meta.env.VITE_NODE_API_URL}/api/sch-login`, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         email:    formData.email.trim().toLowerCase(),
  //         password: formData.password,
  //       }),
  //     });

  //     const data = await res.json();

  //     if (!res.ok) {
  //       setError(data.message || "Invalid email or password.");
  //       return;
  //     }

  //     // ── Hand off to AuthContext ──────────────────────────────────────────
  //     await login({ email: formData.email, password: formData.password });

  //     // Also store token (AuthContext stores user; we keep token separately)
  //     localStorage.setItem("as_token", data.token);
  //     if (rememberMe) {
  //       localStorage.setItem("as_token", data.token);
  //     } else {
  //       sessionStorage.setItem("as_token", data.token);
  //     }

  //     navigate(from, { replace: true });

  //   } catch (err: any) {
  //     // If AuthContext threw, it already set its own error — mirror it here
  //     setError(err?.message || "Unable to connect to the server. Please try again.");
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };
// const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();
//   setError("");

//   if (!formData.email || !formData.password) {
//     setError("Email and password are required.");
//     return;
//   }

//   setIsLoading(true);

//   try {
//     const res = await fetch(`${import.meta.env.VITE_NODE_API_URL}/api/sch-login`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         email:    formData.email.trim().toLowerCase(),
//         password: formData.password,
//       }),
//     });

//     const data = await res.json();

//     if (!res.ok) {
//       setError(data.message || "Invalid email or password.");
//       setIsLoading(false);
//       return;
//     }

//     // Store token
//     if (rememberMe) {
//       localStorage.setItem("as_token", data.token);
//     } else {
//       sessionStorage.setItem("as_token", data.token);
//     }
//     localStorage.setItem("as_user", JSON.stringify(data.user));

//     // ── Route based on role & profile completion ──────────────────────────
//     const role            = data.user?.role;
//     const profileComplete = data.user?.profileComplete;

//     const roleDashboardMap: Record<string, string> = {
//       researcher:   "/dashboard/researcher",
//       academic:     "/dashboard/academic",
//       professional: "/dashboard/professional",
//     };

//     let destination: string;

//     if (!role || !profileComplete) {
//       // No role yet or onboarding not done → send to onboarding
//       destination = "/onboarding";
//     } else {
//       // Has a role → go to their specific dashboard
//       destination = roleDashboardMap[role] ?? "/dashboard/researcher";
//     }

//     // Respect redirect (e.g. from a protected route) only if it's a dashboard path
//     const intendedFrom = (location.state as any)?.from;
//     if (intendedFrom && intendedFrom !== "/onboarding") {
//       destination = intendedFrom;
//     }

//     navigate(destination, { replace: true });

//   } catch (err: any) {
//     setError(err?.message || "Unable to connect to the server. Please try again.");
//   } finally {
//     setIsLoading(false);
//   }
// };

// const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();
//   setError("");

//   if (!formData.email || !formData.password) {
//     setError("Email and password are required.");
//     return;
//   }

//   setIsLoading(true);

//   try {
//     // Use AuthContext login — it handles fetch + setUser + localStorage
//     await login({ email: formData.email, password: formData.password });

//     // Read user from localStorage (just set by AuthContext)
//     const stored = localStorage.getItem("as_user");
//     const userData = stored ? JSON.parse(stored) : null;

//     const roleDashboardMap: Record<string, string> = {
//       researcher:   "/dashboard/researcher",
//       academic:     "/dashboard/academic",
//       professional: "/dashboard/professional",
//       student:      "/dashboard/student",
//       institution:  "/dashboard/institution",
//     };

//     const intendedFrom = (location.state as any)?.from;
//     let destination = "/onboarding";

//     if (userData?.role && userData?.profileComplete) {
//       destination = roleDashboardMap[userData.role] ?? "/dashboard/researcher";
//     }

//     if (intendedFrom && intendedFrom !== "/onboarding") {
//       destination = intendedFrom;
//     }

//     navigate(destination, { replace: true });

//   } catch (err: any) {
//     setError(err?.message || "Unable to connect to the server. Please try again.");
//   } finally {
//     setIsLoading(false);
//   }
// };


// In handleSubmit, replace setError(...) calls with toast.error(...)
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!formData.email || !formData.password) {
    toast.error("Email and password are required.");
    return;
  }

  setIsLoading(true);

  try {
    await login({ email: formData.email, password: formData.password });

    const stored = localStorage.getItem("as_user");
    const userData = stored ? JSON.parse(stored) : null;
  if (!userData) {
      toast.error("Login failed. Please try again.");
      return;
    }
    const roleDashboardMap: Record<string, string> = {
      researcher:   "/dashboard/researcher",
      academic:     "/dashboard/academic",
      professional: "/dashboard/professional",
      student:      "/dashboard/student",
      institution:  "/dashboard/institution",
    };

    const intendedFrom = (location.state as any)?.from;
    let destination = "/onboarding";

    if (userData?.role && userData?.profileComplete) {
      destination = roleDashboardMap[userData.role] ?? "/dashboard/researcher";
    }

    if (intendedFrom && intendedFrom !== "/onboarding") {
      destination = intendedFrom;
    }

    toast.success("Signed in successfully!");
    navigate(destination, { replace: true });

  } catch (err: any) {
    toast.error(err?.message || "Invalid email or password. Please try again.");
  } finally {
    setIsLoading(false);
  }
};

  return (
    <div>
         <ToastContainer
      position="top-right"
      autoClose={4000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      pauseOnHover
      theme="colored"
    />
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
          {/* Logo + heading */}
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <Link to="/">
              <img src={logo} alt="Afrika Scholar" style={{ height: 44, margin: "0 auto 1.25rem", display: "block" }} />
            </Link>
            <h1 style={{ fontSize: "1.75rem", fontWeight: 800, fontFamily: "Georgia, serif", color: "var(--foreground)", margin: "0 0 0.35rem" }}>
              Welcome <span style={{ color: "var(--accent)" }}>Back</span>
            </h1>
            <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", margin: 0 }}>
              Sign in to your Afrika Scholar account
            </p>
          </div>

          {/* Redirect notice */}
          {location.state?.from && (
            <div style={{
              display: "flex", alignItems: "center", gap: "0.5rem",
              background: "rgba(234,88,12,0.06)", border: "1px solid rgba(234,88,12,0.2)",
              borderRadius: 8, padding: "0.65rem 1rem", marginBottom: "1.25rem",
            }}>
              <Lock size={13} style={{ color: "var(--accent)", flexShrink: 0 }} />
              <span style={{ fontSize: "0.8rem", color: "var(--accent)", fontWeight: 600 }}>
                Please sign in to continue.
              </span>
            </div>
          )}

          {/* Error banner */}
          {error && (
            <div style={{
              display: "flex", alignItems: "center", gap: "0.5rem",
              background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.25)",
              borderRadius: 8, padding: "0.75rem 1rem", marginBottom: "1.25rem",
            }}>
              <AlertCircle size={15} style={{ color: "#ef4444", flexShrink: 0 }} />
              <span style={{ fontSize: "0.83rem", color: "#ef4444" }}>{error}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>

            {/* Email */}
            <div>
              <label style={labelStyle}>EMAIL ADDRESS</label>
              <div style={inputWrap}>
                <Mail size={15} style={iconStyle} />
                <input
                  type="email" placeholder="you@example.com"
                  value={formData.email}
                  onChange={e => handleChange("email", e.target.value)}
                  required disabled={isLoading} style={inputInner}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.4rem" }}>
                <label style={{ ...labelStyle, marginBottom: 0 }}>PASSWORD</label>
                <Link to="/forgot-password" style={{ fontSize: "0.75rem", color: "var(--accent)", textDecoration: "none", fontWeight: 600 }}>
                  Forgot password?
                </Link>
              </div>
              <div style={inputWrap}>
                <Lock size={15} style={iconStyle} />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={e => handleChange("password", e.target.value)}
                  required disabled={isLoading}
                  style={{ ...inputInner, paddingRight: "2.5rem" }}
                />
                <button type="button" onClick={() => setShowPassword(v => !v)} style={eyeBtn}>
                  {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            {/* Remember me */}
            <label style={{ display: "flex", alignItems: "center", gap: "0.625rem", cursor: "pointer" }}>
              <input
                type="checkbox" checked={rememberMe}
                onChange={e => setRememberMe(e.target.checked)}
                style={{ width: 15, height: 15, accentColor: "var(--accent)", flexShrink: 0 }}
              />
              <span style={{ fontSize: "0.8rem", color: "var(--muted-foreground)" }}>Remember me</span>
            </label>

            {/* Submit */}
            <button
              type="submit" disabled={isLoading}
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
                  Signing In...
                </>
              ) : (
                <>Sign In <ArrowRight size={17} /></>
              )}
            </button>
          </form>

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", margin: "1.5rem 0 1rem" }}>
            <div style={{ flex: 1, height: 1, background: "var(--border, #e5e7eb)" }} />
            <span style={{ fontSize: "0.75rem", color: "var(--muted-foreground)", whiteSpace: "nowrap" }}>Don't have an account?</span>
            <div style={{ flex: 1, height: 1, background: "var(--border, #e5e7eb)" }} />
          </div>

          <Link
            to="/register"
            style={{
              display: "block", textAlign: "center", padding: "0.75rem", borderRadius: 10,
              border: "1.5px solid var(--border, #e5e7eb)", fontSize: "0.875rem",
              fontWeight: 600, color: "var(--foreground)", textDecoration: "none",
              transition: "border-color 0.15s",
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--accent)")}
            onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border, #e5e7eb)")}
          >
            Create an Account
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
    borderStyle: "solid", 
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
