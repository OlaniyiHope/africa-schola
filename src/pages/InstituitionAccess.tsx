import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import {
  ChevronRight, CheckCircle, Building2, FlaskConical,
  Laptop, Landmark, Lightbulb, ArrowRight, AlertCircle,
} from "lucide-react";
import networkImage from "@/assets/network-collaboration.jpg";
// ─── Types ────────────────────────────────────────────────────────────────────

interface FormData {
  orgName: string;
  orgType: string;
  country: string;
  website: string;
  fullName: string;
  role: string;
  email: string;
  phone: string;
  userCount: string;
  useCases: string[];
  accessTier: string;
  timeline: string;
  notes: string;
  compliance: boolean;
}

interface FormErrors {
  [key: string]: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const orgTypes = [
  "University", "Research Institute", "EdTech", "Government Agency",
  "Innovation Hub", "NGO", "Corporate R&D", "Other",
];

const countries = [
  "Nigeria", "Ghana", "Kenya", "South Africa", "Egypt", "Morocco",
  "Tanzania", "Uganda", "Rwanda", "Ethiopia", "Cameroon", "Senegal",
  "Zimbabwe", "Zambia", "Côte d'Ivoire", "Other",
];

const userCounts = ["1–10", "11–50", "51–200", "200+"];

const useCaseOptions = [
  "Research drafting & structuring",
  "Citation & referencing",
  "Dataset exploration & analysis",
  "Research instrument studio (surveys/analytics)",
  "Institutional research dashboards",
  "Student thesis/dissertation support",
  "Policy & comparative intelligence",
];

const accessTiers = [
  { value: "standard", label: "Standard Institutional", desc: "Drafting + Citations" },
  { value: "research", label: "Research Intelligence", desc: "Includes datasets + intelligence hub" },
  { value: "full", label: "Full Suite", desc: "Instrument studio + analytics + advanced tools" },
];

const timelines = ["Immediately", "1–2 weeks", "1 month", "2–3 months", "Not sure"];

const audienceCards = [
  { icon: Building2,   label: "Universities & Higher Education Institutions" },
  { icon: FlaskConical, label: "Research Institutes & Think Tanks" },
  { icon: Laptop,      label: "EdTech & Online Universities" },
  { icon: Landmark,    label: "Government Research / Innovation Agencies" },
  { icon: Lightbulb,   label: "Innovation & Venture Labs" },
  { icon: Building2,   label: "NGOs & Policy Organizations" },
];

// ─── Shared Styles ────────────────────────────────────────────────────────────

const inputStyle: React.CSSProperties = {
  width: "100%",
  borderRadius: 8,
  border: "1.5px solid #d1d5db",
  background: "#fff",
  padding: "0.65rem 0.875rem",
  fontSize: "0.875rem",
  color: "#111827",
  fontFamily: "inherit",
  outline: "none",
  boxSizing: "border-box",
  transition: "border-color 0.15s",
};

const inputErrorStyle: React.CSSProperties = {
  ...inputStyle,
  borderColor: "#ef4444",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.8rem",
  fontWeight: 700,
  color: "#374151",
  marginBottom: "0.375rem",
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionHeading({ num, title }: { num: number; title: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem", paddingBottom: "0.875rem", borderBottom: "1px solid #e5e7eb" }}>
      <span style={{ display: "inline-flex", width: 28, height: 28, borderRadius: "50%", background: "var(--accent)", color: "#fff", fontSize: "0.75rem", fontWeight: 700, alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        {num}
      </span>
      <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#111827", margin: 0 }}>{title}</h3>
    </div>
  );
}

function FieldCard({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: "1.5rem", marginBottom: "1.25rem" }}>
      {children}
    </div>
  );
}

function FGrid({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 260px), 1fr))", gap: "1rem" }}>
      {children}
    </div>
  );
}

function FField({ label, required, span2, error, children }: {
  label: string; required?: boolean; span2?: boolean; error?: string; children: React.ReactNode;
}) {
  return (
    <div style={span2 ? { gridColumn: "1 / -1" } : {}}>
      <label style={labelStyle}>
        {label}{required && <span style={{ color: "var(--accent)", marginLeft: 2 }}>*</span>}
      </label>
      {children}
      {error && (
        <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", marginTop: "0.3rem" }}>
          <AlertCircle size={12} style={{ color: "#ef4444", flexShrink: 0 }} />
          <span style={{ fontSize: "0.75rem", color: "#ef4444" }}>{error}</span>
        </div>
      )}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function InstitutionAccess() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const [formData, setFormData] = useState<FormData>({
    orgName: "", orgType: "", country: "", website: "",
    fullName: "", role: "", email: "", phone: "",
    userCount: "", useCases: [], accessTier: "", timeline: "",
    notes: "", compliance: false,
  });

  const set = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error on change
    if (errors[field]) setErrors(prev => { const e = { ...prev }; delete e[field]; return e; });
  };

  const toggleUseCase = (val: string) => {
    set("useCases", formData.useCases.includes(val)
      ? formData.useCases.filter(v => v !== val)
      : [...formData.useCases, val]
    );
    if (errors.useCases) setErrors(prev => { const e = { ...prev }; delete e.useCases; return e; });
  };

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!formData.orgName.trim())  e.orgName  = "Organisation name is required";
    if (!formData.orgType)         e.orgType  = "Please select an organisation type";
    if (!formData.country)         e.country  = "Please select a country";
    if (!formData.fullName.trim()) e.fullName = "Full name is required";
    if (!formData.role.trim())     e.role     = "Role / title is required";
    if (!formData.email.trim())    e.email    = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = "Please enter a valid email address";
    if (!formData.userCount)       e.userCount  = "Please select estimated users";
    if (formData.useCases.length === 0) e.useCases = "Please select at least one use case";
    if (!formData.accessTier)     e.accessTier = "Please select an access tier";
    if (!formData.compliance)     e.compliance = "You must confirm this to proceed";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1200));
    const id = "PUB-" + Math.random().toString(36).substring(2, 8).toUpperCase();
    setSubmissionId(id);
    setIsSubmitting(false);
    setIsSubmitted(true);
    // TODO: POST formData to your API endpoint here
  };

  // ── Success Screen ──────────────────────────────────────────────────────────
  if (isSubmitted) {
    return (
      <Layout>
        <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "4rem 1rem" }}>
          <div style={{ maxWidth: 520, width: "100%", background: "#fff", border: "1px solid #e5e7eb", borderRadius: 16, padding: "3rem 2.5rem", textAlign: "center", boxShadow: "0 8px 32px rgba(0,0,0,0.07)" }}>
            <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(34,197,94,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
              <CheckCircle size={32} style={{ color: "#22c55e" }} />
            </div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, fontFamily: "Georgia, serif", color: "#111827", margin: "0 0 0.75rem" }}>
              Request Received
            </h2>
            <p style={{ fontSize: "0.95rem", color: "#6b7280", margin: "0 0 0.5rem", lineHeight: 1.6 }}>
              We'll review your request and contact you within <strong style={{ color: "#111827" }}>2–3 working days</strong>.
            </p>
            <p style={{ fontSize: "0.8rem", color: "#9ca3af", margin: "0 0 2rem" }}>
              Submission ID: <strong style={{ color: "#374151", fontFamily: "monospace" }}>{submissionId}</strong>
            </p>
            <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Button variant="outline" asChild>
                <Link to="/publeesh">Back to Publeesh</Link>
              </Button>
              <Button className="bg-accent hover:bg-accent/90" asChild>
                <Link to="/publeesh/pricing">View Plans <ArrowRight size={15} style={{ marginLeft: 6 }} /></Link>
              </Button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  // ── Main Form ───────────────────────────────────────────────────────────────
  return (
    <Layout>
      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid #e5e7eb", background: "#f9fafb" }}>
        <div className="container-section" style={{ padding: "0.75rem var(--container-padding, 1.5rem)" }}>
          <nav style={{ display: "flex", alignItems: "center", gap: "0.35rem", fontSize: "0.82rem", color: "#6b7280" }}>
            <Link to="/" style={{ color: "#6b7280", textDecoration: "none" }} className="hover:text-foreground">Home</Link>
            <ChevronRight size={13} />
            <Link to="/publeesh" style={{ color: "#6b7280", textDecoration: "none" }} className="hover:text-foreground">Publeesh</Link>
            <ChevronRight size={13} />
            <span style={{ color: "#111827", fontWeight: 600 }}>Institutional Access</span>
          </nav>
        </div>
      </div>
      <section className="relative overflow-hidden min-h-[500px]">
        <div className="absolute inset-0">
          <img src={networkImage} alt="Academic collaboration" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="net-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="0.5" fill="currentColor" className="text-primary-foreground" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#net-grid)" />
          </svg>
        </div>
        <div className="container-section relative py-24 md:py-32 text-primary-foreground">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-wider text-accent font-semibold mb-4">
                  Publeesh for Institutions
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
                 Request Institutional Access
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-4 max-w-2xl">
              Publeesh Institutional Access provides organization-wide AI research intelligence tools including structured drafting support, citations, datasets, and research instrument tools — designed for responsible academic use.
            </p>
      
    
          </div>
        </div>
      </section>
      {/* Hero */}


      <div className="container-section" style={{ padding: "2.5rem var(--container-padding, 1.5rem)" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>

          {/* Who This Is For */}
          <div style={{ marginBottom: "2.5rem" }}>
            <h2 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#111827", marginBottom: "1rem", fontFamily: "Georgia, serif" }}>
              Who this is for
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 240px), 1fr))", gap: "0.75rem" }}>
              {audienceCards.map(({ icon: Icon, label }) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: "0.75rem", background: "#fff", border: "1px solid #e5e7eb", borderRadius: 10, padding: "0.875rem 1rem" }}>
                  <div style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(var(--accent-rgb, 234,88,12),0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={17} style={{ color: "var(--accent)" }} />
                  </div>
                  <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "#374151", lineHeight: 1.4 }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

            {/* Section 1 — Org Details */}
            <FieldCard>
              <SectionHeading num={1} title="Organisation Details" />
              <FGrid>
                <FField label="Organisation Name" required error={errors.orgName} span2>
                  <input
                    style={errors.orgName ? inputErrorStyle : inputStyle}
                    value={formData.orgName}
                    onChange={e => set("orgName", e.target.value)}
                    placeholder="e.g. University of Lagos"
                  />
                </FField>
                <FField label="Organisation Type" required error={errors.orgType}>
                  <select style={errors.orgType ? inputErrorStyle : inputStyle} value={formData.orgType} onChange={e => set("orgType", e.target.value)}>
                    <option value="">Select type...</option>
                    {orgTypes.map(t => <option key={t}>{t}</option>)}
                  </select>
                </FField>
                <FField label="Country" required error={errors.country}>
                  <select style={errors.country ? inputErrorStyle : inputStyle} value={formData.country} onChange={e => set("country", e.target.value)}>
                    <option value="">Select country...</option>
                    {countries.map(c => <option key={c}>{c}</option>)}
                  </select>
                </FField>
                <FField label="Website URL" span2>
                  <input style={inputStyle} type="url" value={formData.website} onChange={e => set("website", e.target.value)} placeholder="https://..." />
                </FField>
              </FGrid>
            </FieldCard>

            {/* Section 2 — Contact Person */}
            <FieldCard>
              <SectionHeading num={2} title="Contact Person" />
              <FGrid>
                <FField label="Full Name" required error={errors.fullName}>
                  <input style={errors.fullName ? inputErrorStyle : inputStyle} value={formData.fullName} onChange={e => set("fullName", e.target.value)} placeholder="Dr. Ada Okafor" />
                </FField>
                <FField label="Role / Title" required error={errors.role}>
                  <input style={errors.role ? inputErrorStyle : inputStyle} value={formData.role} onChange={e => set("role", e.target.value)} placeholder="e.g. Director of Research" />
                </FField>
                <FField label="Official Email Address" required error={errors.email}>
                  <input style={errors.email ? inputErrorStyle : inputStyle} type="email" value={formData.email} onChange={e => set("email", e.target.value)} placeholder="you@institution.ac" />
                </FField>
                <FField label="Phone Number" error={errors.phone}>
                  <input style={inputStyle} type="tel" value={formData.phone} onChange={e => set("phone", e.target.value)} placeholder="+234 800 000 0000" />
                </FField>
              </FGrid>
            </FieldCard>

            {/* Section 3 — Access Needs */}
            <FieldCard>
              <SectionHeading num={3} title="Access Needs" />
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

                {/* User count + timeline */}
                <FGrid>
                  <FField label="Estimated Number of Users" required error={errors.userCount}>
                    <select style={errors.userCount ? inputErrorStyle : inputStyle} value={formData.userCount} onChange={e => set("userCount", e.target.value)}>
                      <option value="">Select range...</option>
                      {userCounts.map(u => <option key={u}>{u}</option>)}
                    </select>
                  </FField>
                  <FField label="Timeline to Start">
                    <select style={inputStyle} value={formData.timeline} onChange={e => set("timeline", e.target.value)}>
                      <option value="">Select...</option>
                      {timelines.map(t => <option key={t}>{t}</option>)}
                    </select>
                  </FField>
                </FGrid>

                {/* Use Cases */}
                <div>
                  <label style={{ ...labelStyle, marginBottom: "0.625rem" }}>
                    Intended Use Cases <span style={{ color: "var(--accent)" }}>*</span>
                  </label>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))", gap: "0.5rem" }}>
                    {useCaseOptions.map(uc => {
                      const checked = formData.useCases.includes(uc);
                      return (
                        <label key={uc} style={{
                          display: "flex", alignItems: "center", gap: "0.625rem",
                          background: checked ? "rgba(234,88,12,0.05)" : "#fff",
                          border: `1.5px solid ${checked ? "var(--accent)" : "#d1d5db"}`,
                          borderRadius: 8, padding: "0.65rem 0.875rem", cursor: "pointer", transition: "all 0.15s",
                        }}>
                          <input type="checkbox" checked={checked} onChange={() => toggleUseCase(uc)}
                            style={{ width: 15, height: 15, accentColor: "var(--accent)", flexShrink: 0 }} />
                          <span style={{ fontSize: "0.8rem", color: "#374151", lineHeight: 1.4 }}>{uc}</span>
                        </label>
                      );
                    })}
                  </div>
                  {errors.useCases && (
                    <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", marginTop: "0.4rem" }}>
                      <AlertCircle size={12} style={{ color: "#ef4444" }} />
                      <span style={{ fontSize: "0.75rem", color: "#ef4444" }}>{errors.useCases}</span>
                    </div>
                  )}
                </div>

                {/* Access Tier */}
                <div>
                  <label style={{ ...labelStyle, marginBottom: "0.625rem" }}>
                    Required Access Tier <span style={{ color: "var(--accent)" }}>*</span>
                  </label>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {accessTiers.map(tier => {
                      const selected = formData.accessTier === tier.value;
                      return (
                        <label key={tier.value} style={{
                          display: "flex", alignItems: "center", gap: "0.875rem",
                          background: selected ? "rgba(234,88,12,0.05)" : "#fff",
                          border: `1.5px solid ${selected ? "var(--accent)" : "#d1d5db"}`,
                          borderRadius: 8, padding: "0.875rem 1rem", cursor: "pointer", transition: "all 0.15s",
                        }}>
                          <input type="radio" name="accessTier" value={tier.value} checked={selected}
                            onChange={() => { set("accessTier", tier.value); }}
                            style={{ accentColor: "var(--accent)", flexShrink: 0 }} />
                          <div>
                            <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "#111827" }}>{tier.label}</div>
                            <div style={{ fontSize: "0.78rem", color: "#6b7280", marginTop: 2 }}>{tier.desc}</div>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                  {errors.accessTier && (
                    <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", marginTop: "0.4rem" }}>
                      <AlertCircle size={12} style={{ color: "#ef4444" }} />
                      <span style={{ fontSize: "0.75rem", color: "#ef4444" }}>{errors.accessTier}</span>
                    </div>
                  )}
                </div>
              </div>
            </FieldCard>

            {/* Section 4 — Notes */}
            <FieldCard>
              <SectionHeading num={4} title="Additional Notes" />
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div>
                  <label style={labelStyle}>Additional Requirements / Notes</label>
                  <textarea
                    style={{ ...inputStyle, minHeight: 110, resize: "vertical" } as React.CSSProperties}
                    value={formData.notes}
                    onChange={e => set("notes", e.target.value)}
                    placeholder="Any specific requirements, existing tools integrations, compliance needs..."
                    rows={4}
                  />
                </div>

                {/* Compliance checkbox */}
                <label style={{
                  display: "flex", alignItems: "flex-start", gap: "0.75rem", cursor: "pointer",
                  background: errors.compliance ? "rgba(239,68,68,0.04)" : formData.compliance ? "rgba(34,197,94,0.04)" : "#f9fafb",
                  border: `1.5px solid ${errors.compliance ? "#ef4444" : formData.compliance ? "#22c55e" : "#e5e7eb"}`,
                  borderRadius: 8, padding: "0.875rem 1rem", transition: "all 0.15s",
                }}>
                  <input
                    type="checkbox"
                    checked={formData.compliance}
                    onChange={e => set("compliance", e.target.checked)}
                    style={{ width: 16, height: 16, marginTop: 2, accentColor: "var(--accent)", flexShrink: 0 }}
                  />
                  <span style={{ fontSize: "0.85rem", color: "#374151", lineHeight: 1.55 }}>
                    I understand Publeesh supports academic integrity and does not replace independent scholarship.
                  </span>
                </label>
                {errors.compliance && (
                  <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", marginTop: "-0.5rem" }}>
                    <AlertCircle size={12} style={{ color: "#ef4444" }} />
                    <span style={{ fontSize: "0.75rem", color: "#ef4444" }}>{errors.compliance}</span>
                  </div>
                )}
              </div>
            </FieldCard>

            {/* CTA Row */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", paddingTop: "0.5rem" }}>
              <Link to="/publeesh/pricing" style={{ fontSize: "0.875rem", color: "var(--accent)", fontWeight: 600, textDecoration: "none" }}>
                View Subscription Plans →
              </Link>
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="bg-accent hover:bg-accent/90 text-white px-8"
                style={{ minWidth: 260 }}
              >
                {isSubmitting ? (
                  <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ animation: "spin 0.8s linear infinite" }}>
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <CheckCircle size={17} />
                    Submit Institutional Access Request
                  </span>
                )}
              </Button>
            </div>

          </form>
        </div>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        input:focus, select:focus, textarea:focus { border-color: var(--accent) !important; box-shadow: 0 0 0 3px rgba(234,88,12,0.1); }
      `}</style>
    </Layout>
  );
}
