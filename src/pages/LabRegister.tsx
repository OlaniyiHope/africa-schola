import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Mail, Lock, ArrowRight, Eye, EyeOff, AlertCircle,
  User, Phone, Globe, Building2, FileText,
} from "lucide-react";
import logo from "@/assets/logo.png";

const ROLES = [
  { value: "hospital_institution", label: "Hospital / Institution" },
  { value: "individual_lab",       label: "Individual Lab" },
  { value: "staff_internal",               label: "Staff" },
  { value: "research_center",      label: "Research Center" },
];

export default function LabRegister() {
  const navigate = useNavigate();

  const [showPassword,        setShowPassword]        = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading,           setIsLoading]           = useState(false);
  const [error,               setError]               = useState("");
  const [acceptedTerms,       setAcceptedTerms]       = useState(false);

  const [formData, setFormData] = useState({
    role:               "hospital_institution",
    first_name:         "",
    last_name:          "",
    email:              "",
    phone:              "",
    country:            "",
    organisation:       "",
    reason_for_access:  "",
    password:           "",
    confirm_password:   "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // ── Basic validation ──────────────────────────────────────────────────
    const required: (keyof typeof formData)[] = [
      "role", "first_name", "last_name", "email",
      "phone", "country", "organisation", "reason_for_access", "password",
    ];
    for (const field of required) {
      if (!formData[field].trim()) {
        setError(`Please fill in all required fields (missing: ${field.replace(/_/g, " ")}).`);
        return;
      }
    }

    if (formData.password !== formData.confirm_password) {
      setError("Passwords do not match.");
      return;
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    if (!acceptedTerms) {
      setError("You must accept the Terms of Service.");
      return;
    }

    setIsLoading(true);

    try {
      const payload = {
        role:              formData.role,
        first_name:        formData.first_name.trim(),
        last_name:         formData.last_name.trim(),
        email:             formData.email.trim().toLowerCase(),
        phone:             formData.phone.trim(),
        country:           formData.country.trim(),
        organisation:      formData.organisation.trim(),
        reason_for_access: formData.reason_for_access.trim(),
        password:          formData.password,
      };

      const res = await fetch("https://labman3.com/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // ── Safe JSON parse ───────────────────────────────────────────────
      let data: any = null;
      const contentType = res.headers.get("content-type") || "";
      if (contentType.includes("application/json")) {
        data = await res.json();
      } else {
        const text = await res.text();
        setError(`Server error: ${text.slice(0, 120)}`);
        setIsLoading(false);
        return;
      }

      if (!res.ok) {
        setError(data?.message || data?.error || "Registration failed. Please try again.");
        setIsLoading(false);
        return;
      }

      // ── Success ───────────────────────────────────────────────────────
      navigate("/login", {
        replace: true,
        state: { registered: true, email: formData.email },
      });

    } catch (err: any) {
      setError(err?.message || "Unable to connect to the server. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

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
          width: "100%", maxWidth: 500,
          background: "var(--card, #fff)", border: "1px solid var(--border, #e5e7eb)",
          borderRadius: 20, padding: "2.5rem 2rem",
          boxShadow: "0 8px 40px rgba(0,0,0,0.08)", position: "relative", zIndex: 1,
        }}>
          {/* Logo + heading */}
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <Link to="/">
              <img src={logo} alt="LabMan" style={{ height: 44, margin: "0 auto 1.25rem", display: "block" }} />
            </Link>
            <h1 style={{ fontSize: "1.75rem", fontWeight: 800, fontFamily: "Georgia, serif", color: "var(--foreground)", margin: "0 0 0.35rem" }}>
              Create Your <span style={{ color: "var(--accent)" }}>Account</span>
            </h1>
            <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", margin: 0 }}>
              Medical-grade security standards required
            </p>
          </div>

          {/* Error banner */}
          {error && (
            <div style={{
              display: "flex", alignItems: "flex-start", gap: "0.5rem",
              background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.25)",
              borderRadius: 8, padding: "0.75rem 1rem", marginBottom: "1.25rem",
            }}>
              <AlertCircle size={15} style={{ color: "#ef4444", flexShrink: 0, marginTop: 2 }} />
              <span style={{ fontSize: "0.83rem", color: "#ef4444" }}>{error}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>

            {/* Role */}
            <div>
              <label style={labelStyle}>ROLE / ACCOUNT TYPE</label>
              <div style={inputWrap}>
                <Building2 size={15} style={iconStyle} />
                <select
                  value={formData.role}
                  onChange={e => handleChange("role", e.target.value)}
                  disabled={isLoading}
                  style={{ ...inputInner, paddingLeft: "2.5rem", appearance: "none" }}
                >
                  {ROLES.map(r => (
                    <option key={r.value} value={r.value}>{r.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* First + Last name row */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
              <div>
                <label style={labelStyle}>FIRST NAME</label>
                <div style={inputWrap}>
                  <User size={15} style={iconStyle} />
                  <input
                    type="text" placeholder="John"
                    value={formData.first_name}
                    onChange={e => handleChange("first_name", e.target.value)}
                    required disabled={isLoading} style={inputInner}
                  />
                </div>
              </div>
              <div>
                <label style={labelStyle}>LAST NAME</label>
                <div style={inputWrap}>
                  <User size={15} style={iconStyle} />
                  <input
                    type="text" placeholder="Doe"
                    value={formData.last_name}
                    onChange={e => handleChange("last_name", e.target.value)}
                    required disabled={isLoading} style={inputInner}
                  />
                </div>
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
                  required disabled={isLoading} style={inputInner}
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label style={labelStyle}>PHONE NUMBER</label>
              <div style={inputWrap}>
                <Phone size={15} style={iconStyle} />
                <input
                  type="tel" placeholder="+2347038412641"
                  value={formData.phone}
                  onChange={e => handleChange("phone", e.target.value)}
                  required disabled={isLoading} style={inputInner}
                />
              </div>
            </div>

            {/* Country */}
            <div>
              <label style={labelStyle}>COUNTRY</label>
              <div style={inputWrap}>
                <Globe size={15} style={iconStyle} />
                <input
                  type="text" placeholder="Nigeria"
                  value={formData.country}
                  onChange={e => handleChange("country", e.target.value)}
                  required disabled={isLoading} style={inputInner}
                />
              </div>
            </div>

            {/* Organisation */}
            <div>
              <label style={labelStyle}>ORGANISATION / LAB NAME</label>
              <div style={inputWrap}>
                <Building2 size={15} style={iconStyle} />
                <input
                  type="text" placeholder="City General Hospital"
                  value={formData.organisation}
                  onChange={e => handleChange("organisation", e.target.value)}
                  required disabled={isLoading} style={inputInner}
                />
              </div>
            </div>

            {/* Reason for access */}
            <div>
              <label style={labelStyle}>REASON FOR ACCESS</label>
              <div style={{ position: "relative" }}>
                <FileText size={15} style={{ ...iconStyle, top: "0.85rem" }} />
                <textarea
                  placeholder="I refer patients for lab tests..."
                  value={formData.reason_for_access}
                  onChange={e => handleChange("reason_for_access", e.target.value)}
                  required disabled={isLoading}
                  rows={3}
                  style={{
                    ...inputInner,
                    resize: "vertical",
                    minHeight: 80,
                    paddingTop: "0.75rem",
                    lineHeight: 1.5,
                  }}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label style={labelStyle}>PASSWORD</label>
              <div style={inputWrap}>
                <Lock size={15} style={iconStyle} />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Min. 8 characters"
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

            {/* Confirm Password */}
            <div>
              <label style={labelStyle}>CONFIRM PASSWORD</label>
              <div style={inputWrap}>
                <Lock size={15} style={iconStyle} />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Re-enter your password"
                  value={formData.confirm_password}
                  onChange={e => handleChange("confirm_password", e.target.value)}
                  required disabled={isLoading}
                  style={{ ...inputInner, paddingRight: "2.5rem" }}
                />
                <button type="button" onClick={() => setShowConfirmPassword(v => !v)} style={eyeBtn}>
                  {showConfirmPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            {/* Terms */}
            <label style={{ display: "flex", alignItems: "center", gap: "0.625rem", cursor: "pointer" }}>
              <input
                type="checkbox" checked={acceptedTerms}
                onChange={e => setAcceptedTerms(e.target.checked)}
                style={{ width: 15, height: 15, accentColor: "var(--accent)", flexShrink: 0 }}
              />
              <span style={{ fontSize: "0.8rem", color: "var(--muted-foreground)" }}>
                I accept the{" "}
                <Link to="/terms" style={{ color: "var(--accent)", fontWeight: 600, textDecoration: "none" }}>
                  Terms of Service
                </Link>
              </span>
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
                  Creating Account...
                </>
              ) : (
                <>Create Account <ArrowRight size={17} /></>
              )}
            </button>
          </form>

          {/* Divider + login link */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", margin: "1.5rem 0 1rem" }}>
            <div style={{ flex: 1, height: 1, background: "var(--border, #e5e7eb)" }} />
            <span style={{ fontSize: "0.75rem", color: "var(--muted-foreground)", whiteSpace: "nowrap" }}>Already have an account?</span>
            <div style={{ flex: 1, height: 1, background: "var(--border, #e5e7eb)" }} />
          </div>

          <Link
            to="/login"
            style={{
              display: "block", textAlign: "center", padding: "0.75rem", borderRadius: 10,
              border: "1.5px solid var(--border, #e5e7eb)", fontSize: "0.875rem",
              fontWeight: 600, color: "var(--foreground)", textDecoration: "none",
              transition: "border-color 0.15s",
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--accent)")}
            onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border, #e5e7eb)")}
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
