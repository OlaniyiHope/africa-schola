
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BookOpen, Globe, Users, CheckCircle, ArrowRight,
  MapPin, School,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import type { UserRole } from "@/context/AuthContext";

type Intent = "publeesh" | "publish" | "network" | null;
type OnboardingData = { intent: Intent; country: string; institution: string; disciplines: string[]; };

const INTENTS = [
  { value: "publeesh" as Intent, icon: BookOpen, label: "Researcher",    desc: "Conduct Research, Publish Paper, and collaborate academically",        route: "/dashboard/researcher",
    benefits: ["Conduct Research, Publish Paper, and collaborate academically", "Smart literature discovery & summaries", "Personalised research feed & alerts"] },
  { value: "publish"  as Intent, icon: Globe,    label: "Academic / Lecturer",    desc: "Teach, Supervise Research and participate in scholarly publishing",   route: "/dashboard/academic",
    benefits: ["Submit manuscripts to peer-reviewed journals", "Track submission status in real-time", "Manage revisions and reviewer feedback"] },
  { value: "network"  as Intent, icon: Users,    label: "Professional",     desc: "Apply research knowledge within industry, policy or professional environment",  route: "/dashboard/professional",
    benefits: ["Discover researchers across African institutions", "Collaborate on research projects", "Find co-authors and mentors in your field"] },
];

const DISCIPLINES = [
  "Social Sciences","Health Sciences","Engineering","Arts & Humanities","Law & Policy",
  "Agriculture","Business & Economics","Education","Computer Science","Environmental Science",
  "Medicine","Mathematics","Physics","Chemistry","Philosophy",
];

const AFRICAN_COUNTRIES = [
  "Nigeria","Kenya","South Africa","Ghana","Ethiopia","Tanzania","Uganda","Rwanda",
  "Senegal","Côte d'Ivoire","Cameroon","Zimbabwe","Zambia","Mozambique","Angola",
  "Sudan","Egypt","Morocco","Tunisia","Algeria","Botswana","Namibia","Malawi",
  "Mali","Niger","Burkina Faso","Guinea","Benin","Togo","Sierra Leone","Other",
];

const intentToRole: Record<string, UserRole> = {
  publeesh: "researcher",
  publish:  "academic",
  network:  "professional",
};

const routeMap: Record<string, string> = {
  researcher:   "/dashboard/researcher",
  academic:     "/dashboard/academic",
  professional: "/dashboard/professional",
};

function StepBar({ current, total }: { current: number; total: number }) {
  return (
    <div style={{ textAlign: "center", marginBottom: "1.75rem" }}>
      <p style={{ fontSize: "1.35rem", fontWeight: 800, color: "#1f2937", margin: "0 0 0.875rem", fontFamily: "Georgia, serif" }}>
        <span style={{ color: "#ea580c" }}>Afrika</span>scholar
      </p>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.375rem", marginBottom: "0.4rem" }}>
        {Array.from({ length: total }).map((_, i) => (
          <div key={i} style={{ height: 5, width: 72, borderRadius: 99, background: i < current ? "#ea580c" : "#e5e7eb", transition: "background 0.35s ease" }} />
        ))}
      </div>
      <p style={{ fontSize: "0.75rem", color: "#6b7280", margin: 0, fontWeight: 500 }}>Step {current} of {total}</p>
    </div>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 18, padding: "1.75rem", boxShadow: "0 4px 32px rgba(0,0,0,0.07)", width: "100%" }}>
      {children}
    </div>
  );
}
function CountrySearch({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [query,  setQuery]  = useState("");
  const [open,   setOpen]   = useState(false);

  const filtered = AFRICAN_COUNTRIES.filter(c =>
    c.toLowerCase().startsWith(query.toLowerCase())
  );

  const select = (country: string) => {
    onChange(country);
    setQuery(country);
    setOpen(false);
  };

  return (
    <div style={{ marginBottom: "1rem", position: "relative" }}>
      <label style={labelStyle}>
        <MapPin size={11} style={{ display: "inline", marginRight: 4 }} />
        Country <span style={{ color: "#ef4444" }}>*</span>
      </label>

      <input
        type="text"
        placeholder="Type to search country..."
        value={query}
        onChange={e => { setQuery(e.target.value); setOpen(true); onChange(""); }}
        onFocus={() => setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        style={{ ...inputStyle, borderColor: open ? "#ea580c" : "#e5e7eb" }}
      />

      {open && filtered.length > 0 && (
        <div style={{
          position: "absolute", top: "100%", left: 0, right: 0, zIndex: 50,
          background: "#fff", border: "1.5px solid #ea580c",
          borderTop: "none", borderRadius: "0 0 10px 10px",
          maxHeight: 200, overflowY: "auto",
          boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
        }}>
          {filtered.map(c => (
            <div
              key={c}
              onMouseDown={() => select(c)}
              style={{
                padding: "0.6rem 0.875rem",
                fontSize: "0.85rem",
                cursor: "pointer",
                color: c === value ? "#ea580c" : "#1f2937",
                fontWeight: c === value ? 700 : 400,
                background: c === value ? "rgba(234,88,12,0.06)" : "transparent",
                transition: "background 0.1s",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(234,88,12,0.06)")}
              onMouseLeave={e => (e.currentTarget.style.background = c === value ? "rgba(234,88,12,0.06)" : "transparent")}
            >
              {c}
            </div>
          ))}
        </div>
      )}

      {open && query.length > 0 && filtered.length === 0 && (
        <div style={{
          position: "absolute", top: "100%", left: 0, right: 0, zIndex: 50,
          background: "#fff", border: "1.5px solid #e5e7eb",
          borderTop: "none", borderRadius: "0 0 10px 10px",
          padding: "0.75rem", fontSize: "0.82rem", color: "#6b7280", textAlign: "center",
        }}>
          No country found for "{query}"
        </div>
      )}
    </div>
  );
}
export default function Onboarding() {
  const navigate = useNavigate();
  const { updateUser } = useAuth(); // ← pulls updateUser from context
  const [step, setStep] = useState(1);
  const [data, setData] = useState<OnboardingData>({ intent: null, country: "", institution: "", disciplines: [] });
  const [finishError, setFinishError] = useState("");

  const toggleDiscipline = (d: string) =>
    setData(prev => ({ ...prev, disciplines: prev.disciplines.includes(d) ? prev.disciplines.filter(x => x !== d) : [...prev.disciplines, d] }));

  const handleFinish = async () => {
    if (!canStep3) return;

    const token = localStorage.getItem("as_token");
    const role  = intentToRole[data.intent!];

    setFinishError("");

    try {
      const res = await fetch(`${import.meta.env.VITE_NODE_API_URL}/api/sch-onboarding`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          role,
          institution:  data.institution.trim(),
          fieldOfStudy: data.disciplines.join(", "),
          country:      data.country,
          interests:    data.disciplines,
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        setFinishError(result.message || "Onboarding failed. Please try again.");
        return;
      }

      // ✅ This updates BOTH the AuthContext state in memory AND localStorage
      // so PublicRoute immediately sees the correct role and profileComplete flag
      updateUser({ role, profileComplete: true });

      // Navigate to the correct dashboard
      navigate(routeMap[role] ?? "/dashboard");

    } catch (err) {
      console.error("Onboarding error:", err);
      setFinishError("Unable to connect. Please try again.");
    }
  };

  const canStep1 = data.intent !== null;
  const canStep3 = data.country.trim() !== "" && data.disciplines.length > 0;
  const selectedIntent = INTENTS.find(i => i.value === data.intent);

  const primaryBtnStyle = (active: boolean): React.CSSProperties => ({
    width: "100%", padding: "0.875rem", borderRadius: 10, border: "none",
    background: active ? "#ea580c" : "#e5e7eb",
    color: active ? "#fff" : "#9ca3af",
    fontSize: "0.95rem", fontWeight: 700,
    cursor: active ? "pointer" : "not-allowed",
    display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
    transition: "opacity 0.15s", marginBottom: "0.625rem",
  });

  const backBtnStyle: React.CSSProperties = {
    width: "100%", padding: "0.6rem", background: "none",
    border: "none", cursor: "pointer",
    fontSize: "0.85rem", fontWeight: 600, color: "#6b7280",
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "1.5rem 1rem", background: "#f9fafb", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "-100px", right: "-100px", width: 350, height: 350, borderRadius: "50%", background: "#ea580c", opacity: 0.04, pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-80px", left: "-80px", width: 280, height: 280, borderRadius: "50%", background: "#381b92", opacity: 0.05, pointerEvents: "none" }} />

      <div style={{ width: "100%", maxWidth: 480, position: "relative", zIndex: 1 }}>
        <StepBar current={step} total={3} />

        {/* ── STEP 1 ────────────────────────────────────────────────────── */}
        {step === 1 && (
          <Card>
            <h2 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#1f2937", textAlign: "center", margin: "0 0 1.25rem", fontFamily: "Georgia, serif" }}>
              Tell us about yourself
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem", marginBottom: "1.25rem" }}>
              {INTENTS.map(({ value, icon: Icon, label, desc }) => (
                <button key={value} onClick={() => setData(prev => ({ ...prev, intent: value }))}
                  style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "0.875rem 1rem", borderRadius: 12, cursor: "pointer", border: data.intent === value ? "2px solid #ea580c" : "2px solid #e5e7eb", background: data.intent === value ? "rgba(234,88,12,0.04)" : "#fff", textAlign: "left", transition: "all 0.15s", width: "100%" }}
                  onMouseEnter={e => { if (data.intent !== value) { e.currentTarget.style.borderColor = "rgba(234,88,12,0.35)"; e.currentTarget.style.background = "rgba(234,88,12,0.02)"; } }}
                  onMouseLeave={e => { if (data.intent !== value) { e.currentTarget.style.borderColor = "#e5e7eb"; e.currentTarget.style.background = "#fff"; } }}
                >
                  <div style={{ width: 42, height: 42, borderRadius: 10, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: data.intent === value ? "rgba(234,88,12,0.1)" : "#f3f4f6", transition: "background 0.15s" }}>
                    <Icon size={19} style={{ color: data.intent === value ? "#ea580c" : "#6b7280" }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: "0.88rem", fontWeight: 700, color: "#1f2937", margin: 0 }}>{label}</p>
                    <p style={{ fontSize: "0.76rem", color: "#6b7280", margin: "0.1rem 0 0" }}>{desc}</p>
                  </div>
                  {data.intent === value && <CheckCircle size={17} style={{ color: "#ea580c", flexShrink: 0 }} />}
                </button>
              ))}
            </div>
            <button onClick={() => canStep1 && setStep(2)} disabled={!canStep1} style={primaryBtnStyle(canStep1)}>
              Continue <ArrowRight size={16} />
            </button>
          </Card>
        )}

        {/* ── STEP 2 ────────────────────────────────────────────────────── */}
        {step === 2 && (
          <Card>
            <h2 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#1f2937", textAlign: "center", margin: "0 0 0.3rem", fontFamily: "Georgia, serif" }}>
              Tell Us More
            </h2>
            <p style={{ fontSize: "0.82rem", color: "#6b7280", textAlign: "center", margin: "0 0 1.1rem" }}>
              We'll personalise your experience.
            </p>

            <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 10, padding: "0.75rem", marginBottom: "1rem" }}>
              <p style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.07em", color: "#6b7280", margin: "0 0 0.6rem" }}>
                How will you use Afrika Scholar?
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                {INTENTS.map(({ value, icon: Icon, label }) => (
                  <div key={value} onClick={() => setData(prev => ({ ...prev, intent: value }))}
                    style={{ display: "flex", alignItems: "center", gap: "0.625rem", padding: "0.5rem 0.625rem", borderRadius: 8, cursor: "pointer", border: data.intent === value ? "1.5px solid #ea580c" : "1.5px solid transparent", background: data.intent === value ? "rgba(234,88,12,0.05)" : "transparent", transition: "all 0.15s" }}
                  >
                    <div style={{ width: 28, height: 28, borderRadius: 6, background: data.intent === value ? "rgba(234,88,12,0.1)" : "#f3f4f6", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={14} style={{ color: data.intent === value ? "#ea580c" : "#6b7280" }} />
                    </div>
                    <span style={{ fontSize: "0.83rem", fontWeight: data.intent === value ? 700 : 500, color: data.intent === value ? "#1f2937" : "#6b7280", flex: 1 }}>{label}</span>
                    {data.intent === value && <CheckCircle size={14} style={{ color: "#ea580c", flexShrink: 0 }} />}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: "rgba(56,27,146,0.04)", border: "1px solid rgba(56,27,146,0.12)", borderRadius: 10, padding: "0.875rem", marginBottom: "1.1rem" }}>
              <p style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.07em", color: "#381b92", margin: "0 0 0.5rem" }}>
                What you'll get
              </p>
              {selectedIntent ? (
                <ul style={{ margin: 0, padding: "0 0 0 1rem", display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                  {selectedIntent.benefits.map(t => <li key={t} style={{ fontSize: "0.79rem", color: "#374151" }}>{t}</li>)}
                </ul>
              ) : (
                <p style={{ fontSize: "0.79rem", color: "#6b7280", margin: 0 }}>Select an option above to see what you'll get.</p>
              )}
            </div>

            <button
              onClick={() => setStep(3)}
              style={{ width: "100%", padding: "0.875rem", borderRadius: 10, border: "none", background: "#ea580c", color: "#fff", fontSize: "0.95rem", fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", marginBottom: "0.625rem", transition: "opacity 0.15s" }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              Continue <ArrowRight size={16} />
            </button>
            <button onClick={() => setStep(1)} style={backBtnStyle}>Back</button>
          </Card>
        )}
{/* ── STEP 3 ────────────────────────────────────────────────────── */}
{step === 3 && (
  <Card>
    <h2 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#1f2937", textAlign: "center", margin: "0 0 0.3rem", fontFamily: "Georgia, serif" }}>
      Almost There!
    </h2>
    <p style={{ fontSize: "0.82rem", color: "#6b7280", textAlign: "center", margin: "0 0 1.25rem" }}>
      Help us show you the most relevant content.
    </p>

    {finishError && (
      <div style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.25)", borderRadius: 8, padding: "0.75rem 1rem", marginBottom: "1rem", fontSize: "0.83rem", color: "#ef4444" }}>
        {finishError}
      </div>
    )}

    {/* ── Country with search ── */}
    <CountrySearch
      value={data.country}
      onChange={country => setData(prev => ({ ...prev, country }))}
    />

    <div style={{ marginBottom: "1rem" }}>
      <label style={labelStyle}>
        <School size={11} style={{ display: "inline", marginRight: 4 }} />
        Institution{" "}
        <span style={{ fontSize: "0.69rem", fontWeight: 400, textTransform: "none", color: "#6b7280" }}>(Optional)</span>
      </label>
      <input type="text" placeholder="e.g. University of Lagos" value={data.institution}
        onChange={e => setData(prev => ({ ...prev, institution: e.target.value }))}
        style={inputStyle}
        onFocus={e => (e.target.style.borderColor = "#ea580c")}
        onBlur={e => (e.target.style.borderColor = "#e5e7eb")}
      />
    </div>

    <div style={{ marginBottom: "1.25rem" }}>
      <label style={{ ...labelStyle, marginBottom: "0.5rem" }}>
        Disciplines <span style={{ color: "#ef4444" }}>*</span>{" "}
        <span style={{ fontSize: "0.69rem", fontWeight: 400, textTransform: "none", color: "#6b7280" }}>(select all that apply)</span>
      </label>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
        {DISCIPLINES.map(d => {
          const sel = data.disciplines.includes(d);
          return (
            <button key={d} type="button" onClick={() => toggleDiscipline(d)}
              style={{ padding: "0.3rem 0.65rem", borderRadius: 999, cursor: "pointer", fontSize: "0.76rem", fontWeight: 600, border: sel ? "1.5px solid #ea580c" : "1.5px solid #e5e7eb", background: sel ? "rgba(234,88,12,0.08)" : "#fff", color: sel ? "#ea580c" : "#374151", transition: "all 0.15s" }}
            >{d}</button>
          );
        })}
      </div>
      {data.disciplines.length > 0 && (
        <p style={{ fontSize: "0.7rem", color: "#6b7280", margin: "0.4rem 0 0" }}>{data.disciplines.length} selected</p>
      )}
    </div>

    <button onClick={handleFinish} disabled={!canStep3} style={primaryBtnStyle(canStep3)}>
      Continue to Dashboard <ArrowRight size={16} />
    </button>
    <button onClick={() => setStep(2)} style={backBtnStyle}>Back</button>
  </Card>
)}
      </div>
    </div>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block", fontSize: "0.7rem", fontWeight: 700,
  letterSpacing: "0.06em", textTransform: "uppercase",
  color: "#6b7280", marginBottom: "0.35rem",
};

const inputStyle: React.CSSProperties = {
  width: "100%", borderRadius: 10, border: "1.5px solid #e5e7eb",
  background: "#fff", padding: "0.7rem 0.875rem", fontSize: "0.875rem",
  color: "#1f2937", outline: "none", fontFamily: "inherit",
  boxSizing: "border-box", transition: "border-color 0.15s",
};