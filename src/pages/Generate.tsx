import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight, Lightbulb, ArrowRight, Info,
  Sparkles, FileText, BookOpen, BarChart2,
  Code2, PieChart, Download, Loader2,
} from "lucide-react";
import { Layout } from "@/components/layout";

// ─── Constants ────────────────────────────────────────────────────────────────

const FEATURE_TAGS = [
  { label: "Harvard / MIT Standard", active: false },
  { label: "APA 7th Edition",        active: true  },
  { label: "IMRAD Structure",        active: true  },
  { label: "25+ Citations",          active: true  },
  { label: "Statistical Analysis",   active: false },
  { label: "SPSS / STATA / R Code",  active: false },
  { label: "Power Analysis",         active: false },
  { label: "Word Export",            active: false },
];

const PAPER_TYPES = [
  "Research Article",
  "Literature Review",
  "Systematic Review / Meta-Analysis",
  "Case Study",
  "Conference Paper",
  "Thesis / Dissertation Chapter",
  "Policy Brief",
  "Technical Report",
];

const TARGET_LENGTHS = [
  "Short (1,000 – 2,500 words)",
  "Medium (2,500 – 5,000 words)",
  "Long (5,000 – 8,000 words)",
  "Extended (8,000+ words)",
];

const AUDIENCES = [
  "Academic / Peer Reviewers",
  "University Students",
  "Policy Makers",
  "General Public",
  "Industry Professionals",
];

const CITATION_STYLES = ["APA 7th Edition", "MLA 9th Edition", "Harvard", "Chicago 17th", "Vancouver", "IEEE"];

const TOPIC_IDEAS = [
  "The effect of mobile money on financial inclusion in rural Nigeria",
  "Climate change adaptation strategies in sub-Saharan smallholder farming",
  "AI governance frameworks for African nations",
  "Mental health service delivery gaps in post-conflict East Africa",
  "The role of indigenous knowledge in sustainable land management",
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function GeneratePaper() {
  const [tags, setTags]             = useState<string[]>(["APA 7th Edition", "IMRAD Structure", "25+ Citations"]);
  const [topic, setTopic]           = useState("");
  const [paperType, setPaperType]   = useState("");
  const [length, setLength]         = useState("");
  const [discipline, setDiscipline] = useState("");
  const [audience, setAudience]     = useState("");
  const [citation, setCitation]     = useState("APA 7th Edition");
  const [keywords, setKeywords]     = useState("");
  const [showIdeas, setShowIdeas]   = useState(false);
  const [generating, setGenerating] = useState(false);

  const toggleTag = (label: string) =>
    setTags(prev => prev.includes(label) ? prev.filter(t => t !== label) : [...prev, label]);

  const handleGenerate = async () => {
    if (!topic.trim() || !paperType || !length) return;
    setGenerating(true);
    await new Promise(r => setTimeout(r, 2000));
    setGenerating(false);
    // TODO: navigate to result page
  };

  const canGenerate = topic.trim() && paperType && length;

  return (
    <Layout>
      <div style={{ minHeight: "calc(100vh - 64px)", background: "#f9fafb" }}>

        {/* ── Top breadcrumb bar ───────────────────────────────────────── */}
        <div style={{ background: "#fff", borderBottom: "1px solid #e5e7eb", padding: "0.75rem 2rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Link to="/dashboard" style={{ fontSize: "0.8rem", color: "#6b7280", textDecoration: "none", fontWeight: 500 }}>Dashboard</Link>
          <ChevronRight size={13} style={{ color: "#d1d5db" }} />
          <Link to="/dashboard/papers" style={{ fontSize: "0.8rem", color: "#6b7280", textDecoration: "none", fontWeight: 500 }}>My Research</Link>
          <ChevronRight size={13} style={{ color: "#d1d5db" }} />
          <span style={{ fontSize: "0.8rem", color: "#1f2937", fontWeight: 600 }}>Generate Paper</span>
        </div>

        <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1.5rem" }}>

          {/* ── Page header ─────────────────────────────────────────────── */}
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", marginBottom: "1.5rem" }}>
            <div>
              <h1 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#1f2937", fontFamily: "Georgia, serif", margin: "0 0 0.375rem" }}>
                Generate Research Paper
              </h1>
              <p style={{ fontSize: "0.875rem", color: "#6b7280", margin: 0 }}>
                Create structured academic manuscripts aligned with global publishing standards.
              </p>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1f2937" }}>
                Paper Credits: <span style={{ color: "#381b92", fontSize: "1.1rem" }}>20</span>
              </div>
              <button style={{ display: "flex", alignItems: "center", gap: "0.3rem", background: "none", border: "none", cursor: "pointer", fontSize: "0.75rem", color: "#6b7280", padding: 0, marginTop: "0.25rem" }}>
                <Info size={12} /> How credits work
              </button>
            </div>
          </div>

          {/* ── Feature tags ────────────────────────────────────────────── */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.75rem" }}>
            {FEATURE_TAGS.map(({ label }) => {
              const active = tags.includes(label);
              return (
                <button
                  key={label}
                  onClick={() => toggleTag(label)}
                  style={{
                    padding: "0.35rem 0.875rem", borderRadius: 999, cursor: "pointer",
                    fontSize: "0.78rem", fontWeight: 600,
                    border: active ? "none" : "1.5px solid #e5e7eb",
                    background: active ? "#ea580c" : "#fff",
                    color: active ? "#fff" : "#374151",
                    transition: "all 0.15s",
                  }}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* ── Main card ───────────────────────────────────────────────── */}
          <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 16, overflow: "hidden", marginBottom: "1.5rem" }}>

            {/* Card header */}
            <div style={{ padding: "1.25rem 1.5rem", borderBottom: "1px solid #f3f4f6", display: "flex", alignItems: "center", gap: "0.625rem" }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(56,27,146,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Sparkles size={16} style={{ color: "#381b92" }} />
              </div>
              <h2 style={{ fontSize: "1rem", fontWeight: 700, color: "#1f2937", margin: 0 }}>Research Configuration</h2>
            </div>

            <div style={{ padding: "1.5rem" }}>

              {/* Research Topic */}
              <div style={{ marginBottom: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <label style={labelStyle}>
                    Research Topic <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <button
                    onClick={() => setShowIdeas(v => !v)}
                    style={{ display: "flex", alignItems: "center", gap: "0.35rem", background: "none", border: "none", cursor: "pointer", fontSize: "0.78rem", fontWeight: 600, color: "#381b92", padding: 0 }}
                  >
                    <Lightbulb size={13} /> Get Ideas
                  </button>
                </div>

                {/* Topic ideas dropdown */}
                {showIdeas && (
                  <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 10, marginBottom: "0.625rem", overflow: "hidden" }}>
                    <p style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.07em", color: "#6b7280", padding: "0.625rem 1rem 0.375rem", margin: 0 }}>
                      Suggested topics for African research:
                    </p>
                    {TOPIC_IDEAS.map(idea => (
                      <button
                        key={idea}
                        onClick={() => { setTopic(idea); setShowIdeas(false); }}
                        style={{ display: "block", width: "100%", textAlign: "left", padding: "0.5rem 1rem", background: "none", border: "none", cursor: "pointer", fontSize: "0.82rem", color: "#374151", borderTop: "1px solid #f3f4f6", transition: "background 0.1s" }}
                        onMouseEnter={e => (e.currentTarget.style.background = "rgba(56,27,146,0.05)")}
                        onMouseLeave={e => (e.currentTarget.style.background = "none")}
                      >
                        {idea}
                      </button>
                    ))}
                  </div>
                )}

                <textarea
                  rows={3}
                  placeholder="e.g. The effect of mindfulness-based interventions on cortisol levels in adults with chronic stress"
                  value={topic}
                  onChange={e => setTopic(e.target.value)}
                  style={{ ...inputStyle, resize: "vertical", minHeight: 90 }}
                  onFocus={e => (e.target.style.borderColor = "#381b92")}
                  onBlur={e => (e.target.style.borderColor = "#e5e7eb")}
                />
              </div>

              {/* Paper Type + Target Length */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "1.25rem" }}>
                <div>
                  <label style={labelStyle}>Paper Type <span style={{ color: "#ef4444" }}>*</span></label>
                  <div style={{ position: "relative" }}>
                    <select
                      value={paperType}
                      onChange={e => setPaperType(e.target.value)}
                      style={{ ...inputStyle, cursor: "pointer", appearance: "none", paddingRight: "2.5rem" }}
                      onFocus={e => (e.target.style.borderColor = "#381b92")}
                      onBlur={e => (e.target.style.borderColor = "#e5e7eb")}
                    >
                      <option value="" disabled>Select type...</option>
                      {PAPER_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                    <ChevronRight size={14} style={{ position: "absolute", right: "0.875rem", top: "50%", transform: "translateY(-50%) rotate(90deg)", color: "#9ca3af", pointerEvents: "none" }} />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Target Length <span style={{ color: "#ef4444" }}>*</span></label>
                  <div style={{ position: "relative" }}>
                    <select
                      value={length}
                      onChange={e => setLength(e.target.value)}
                      style={{ ...inputStyle, cursor: "pointer", appearance: "none", paddingRight: "2.5rem" }}
                      onFocus={e => (e.target.style.borderColor = "#381b92")}
                      onBlur={e => (e.target.style.borderColor = "#e5e7eb")}
                    >
                      <option value="" disabled>Select length...</option>
                      {TARGET_LENGTHS.map(l => <option key={l} value={l}>{l}</option>)}
                    </select>
                    <ChevronRight size={14} style={{ position: "absolute", right: "0.875rem", top: "50%", transform: "translateY(-50%) rotate(90deg)", color: "#9ca3af", pointerEvents: "none" }} />
                  </div>
                </div>
              </div>

              {/* Academic Discipline + Intended Audience */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "1.25rem" }}>
                <div>
                  <label style={labelStyle}>Academic Discipline <span style={{ fontSize: "0.7rem", fontWeight: 400, textTransform: "none", color: "#9ca3af" }}>(optional)</span></label>
                  <input
                    type="text"
                    placeholder="e.g. Psychology, Public Health, Economics"
                    value={discipline}
                    onChange={e => setDiscipline(e.target.value)}
                    style={inputStyle}
                    onFocus={e => (e.target.style.borderColor = "#381b92")}
                    onBlur={e => (e.target.style.borderColor = "#e5e7eb")}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Intended Audience</label>
                  <div style={{ position: "relative" }}>
                    <select
                      value={audience}
                      onChange={e => setAudience(e.target.value)}
                      style={{ ...inputStyle, cursor: "pointer", appearance: "none", paddingRight: "2.5rem" }}
                      onFocus={e => (e.target.style.borderColor = "#381b92")}
                      onBlur={e => (e.target.style.borderColor = "#e5e7eb")}
                    >
                      <option value="">Select audience...</option>
                      {AUDIENCES.map(a => <option key={a} value={a}>{a}</option>)}
                    </select>
                    <ChevronRight size={14} style={{ position: "absolute", right: "0.875rem", top: "50%", transform: "translateY(-50%) rotate(90deg)", color: "#9ca3af", pointerEvents: "none" }} />
                  </div>
                </div>
              </div>

              {/* Citation Style + Keywords */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                <div>
                  <label style={labelStyle}>Citation Style</label>
                  <div style={{ position: "relative" }}>
                    <select
                      value={citation}
                      onChange={e => setCitation(e.target.value)}
                      style={{ ...inputStyle, cursor: "pointer", appearance: "none", paddingRight: "2.5rem" }}
                      onFocus={e => (e.target.style.borderColor = "#381b92")}
                      onBlur={e => (e.target.style.borderColor = "#e5e7eb")}
                    >
                      {CITATION_STYLES.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                    <ChevronRight size={14} style={{ position: "absolute", right: "0.875rem", top: "50%", transform: "translateY(-50%) rotate(90deg)", color: "#9ca3af", pointerEvents: "none" }} />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Keywords <span style={{ fontSize: "0.7rem", fontWeight: 400, textTransform: "none", color: "#9ca3af" }}>(optional)</span></label>
                  <input
                    type="text"
                    placeholder="e.g. fintech, financial inclusion, Africa"
                    value={keywords}
                    onChange={e => setKeywords(e.target.value)}
                    style={inputStyle}
                    onFocus={e => (e.target.style.borderColor = "#381b92")}
                    onBlur={e => (e.target.style.borderColor = "#e5e7eb")}
                  />
                </div>
              </div>

            </div>
          </div>

          {/* ── What's included info bar ─────────────────────────────────── */}
          <div style={{ background: "rgba(56,27,146,0.04)", border: "1px solid rgba(56,27,146,0.12)", borderRadius: 12, padding: "1rem 1.25rem", marginBottom: "1.5rem", display: "flex", alignItems: "center", flexWrap: "wrap", gap: "1.25rem" }}>
            <p style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.07em", color: "#381b92", margin: 0, flexShrink: 0 }}>
              What's included:
            </p>
            {[
              { icon: FileText,  label: "Full manuscript"       },
              { icon: BookOpen,  label: "References list"       },
              { icon: BarChart2, label: "Statistical framework" },
              { icon: Code2,     label: "Analysis code"         },
              { icon: Download,  label: "Word / PDF export"     },
            ].map(({ icon: Icon, label }) => (
              <span key={label} style={{ display: "flex", alignItems: "center", gap: "0.35rem", fontSize: "0.78rem", fontWeight: 600, color: "#374151" }}>
                <Icon size={13} style={{ color: "#381b92" }} /> {label}
              </span>
            ))}
          </div>

          {/* ── Generate button ──────────────────────────────────────────── */}
          <button
            onClick={handleGenerate}
            disabled={!canGenerate || generating}
            style={{
              width: "100%", padding: "1rem 1.5rem", borderRadius: 12, border: "none",
              background: canGenerate ? "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)" : "#e5e7eb",
              color: canGenerate ? "#fff" : "#9ca3af",
              fontSize: "1rem", fontWeight: 700,
              cursor: canGenerate && !generating ? "pointer" : "not-allowed",
              display: "flex", alignItems: "center", justifyContent: "center", gap: "0.625rem",
              transition: "opacity 0.15s, transform 0.15s",
              boxShadow: canGenerate ? "0 4px 20px rgba(234,88,12,0.35)" : "none",
            }}
            onMouseEnter={e => { if (canGenerate && !generating) { e.currentTarget.style.opacity = "0.92"; e.currentTarget.style.transform = "translateY(-1px)"; } }}
            onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "none"; }}
          >
            {generating ? (
              <>
                <Loader2 size={18} style={{ animation: "spin 0.8s linear infinite" }} />
                Generating your paper...
              </>
            ) : (
              <>
                Generate Research Paper <ArrowRight size={18} />
              </>
            )}
          </button>

          {!canGenerate && (
            <p style={{ textAlign: "center", fontSize: "0.75rem", color: "#9ca3af", marginTop: "0.625rem" }}>
              Fill in Research Topic, Paper Type and Target Length to continue
            </p>
          )}

          {/* ── Cost note ────────────────────────────────────────────────── */}
          <p style={{ textAlign: "center", fontSize: "0.75rem", color: "#9ca3af", marginTop: "0.875rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.35rem" }}>
            <Info size={12} /> This will use <strong style={{ color: "#374151" }}>1 Paper Credit</strong>. You have 20 remaining.
          </p>

        </div>
      </div>

      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </Layout>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const labelStyle: React.CSSProperties = {
  display: "block", fontSize: "0.8rem", fontWeight: 600,
  color: "#374151", marginBottom: "0.4rem",
};

const inputStyle: React.CSSProperties = {
  width: "100%", borderRadius: 10, border: "1.5px solid #e5e7eb",
  background: "#fff", padding: "0.7rem 0.875rem",
  fontSize: "0.875rem", color: "#1f2937",
  outline: "none", fontFamily: "inherit",
  boxSizing: "border-box", transition: "border-color 0.15s",
};
