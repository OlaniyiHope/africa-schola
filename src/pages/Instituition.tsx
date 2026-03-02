import { Link } from "react-router-dom";
import {
  Users, BookOpen, Search, FileEdit, GraduationCap, Award,
  Globe, ArrowRight, CheckCircle, Briefcase, Shield, FileText,
  Star, Scale, Building, ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout";
import networkImage from "@/assets/network-collaboration.jpg";
import { useState } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const painPoints = [
  "Accreditation requirements demanding qualified lecturers",
  "Urgent program expansion without faculty capacity",
  "EdTech licensing needing named academic leads",
  "Inconsistent teaching quality across modules",
  "Research capacity gaps",
  "Curriculum requiring validation or redesign",
];

const serviceBlocks = [
  {
    icon: GraduationCap,
    title: "Teaching & Academy Delivery",
    items: [
      "Part-time or short-term teaching",
      "Online and blended delivery for EdTech platforms",
      "Guest lectures and masterclasses",
      "Specialist module instruction",
      "Academic supervision and mentoring",
    ],
    ctaLabel: "Request Teaching Support",
    formValue: "Teaching & Faculty Deployment",
  },
  {
    icon: Search,
    title: "Research & Scholarly Engagement",
    items: [
      "Institutional and industry-linked research",
      "Policy and applied research development",
      "Cross-institutional research collaborations",
      "Research advisory and validation roles",
      "Subject-matter expert consultations",
    ],
    ctaLabel: "Request Research Support",
    formValue: "Research & Scholarly Engagement",
  },
  {
    icon: Award,
    title: "Peer Review & Academic Validation",
    items: [
      "Journal peer review support",
      "Editorial advisory services",
      "Academic quality assurance",
      "Independent research validation",
      "Content verification and review",
    ],
    ctaLabel: "Request Validation Support",
    formValue: "Academic Validation / Quality Assurance",
  },
  {
    icon: BookOpen,
    title: "Curriculum & Content Development",
    items: [
      "Curriculum design and academic review",
      "Development of structured learning materials",
      "Knowledge translation from academia to industry",
      "Accreditation-aligned program structuring",
      "Academic governance alignment",
    ],
    ctaLabel: "Request Curriculum Support",
    formValue: "Curriculum & Program Development",
  },
];

const differentiators = [
  {
    icon: Shield,
    label: "Verified Academic Credentials",
    sub: "All lecturers and researchers are vetted and verified before inclusion in the network.",
  },
  {
    icon: Briefcase,
    label: "Structured Academic Deployment",
    sub: "We do not simply connect — we coordinate, structure, and align engagements.",
  },
  {
    icon: Scale,
    label: "Governance & Compliance Alignment",
    sub: "Our model supports accreditation, licensing, and academic integrity requirements.",
  },
  {
    icon: Building,
    label: "Pan-African Reach",
    sub: "Access expertise across disciplines and countries within Africa.",
  },
  {
    icon: Globe,
    label: "Ethical & Professional Framework",
    sub: "We protect both institutions and academics through structured engagement protocols.",
  },
];
const engagementSteps = [
  "Submit Your Academic Requirement",
  "Define Scope, Duration & Expertise Needed",
  "We Match Verified Academic Partners",
  "Structured Coordination & Engagement",
  "Ongoing Oversight & Quality Assurance",
];

const audiences = [
  "Universities and Higher Education Institutions",
  "EdTech Platforms & Online Universities",
  "Professional & Certification Bodies",
  "Research & Policy Organizations",
  "International Institutions operating in Africa"
];

const orgTypes = [
  "University", "EdTech Platform", "Online University",
  "Professional/Certification Body", "Research Organization",
  "Corporate Training Division", "Policy/Government Institution", "Other",
];

const supportTypes = [
  "Teaching & Faculty Deployment",     "Online / Blended Teaching Support",
  "Short-Term Academic Delivery",       "Research & Scholarly Engagement",
  "Peer Review & Editorial Support",    "Academic Validation / Quality Assurance",
  "Curriculum & Program Development",   "Accreditation / Licensing Support",
  "Ongoing Academic Advisory",          "Other (Specify)",
];

const expertiseLevels = [
  "Lecturer", "Senior Lecturer", "Associate Professor", "Professor",
  "Research Fellow", "Subject-Matter Expert", "Multiple Levels Required",
];

const academicsNeeded = ["1", "2–3", "4–6", "7+"];

const engagementTypes = [
  "Short-Term (<3 months)", "Part-Time (Ongoing)", "Project-Based",
  "Advisory/Validation Only", "Long-Term Structured Engagement",
];

const engagementModes = ["Fully Remote", "Hybrid", "In-Person", "Flexible"];

const budgetRanges = ["Under $500", "$500–$2,000", "$2,000–$5,000", "$5,000+", "Prefer to discuss"];

const nextSteps = [
  "Schedule Introductory Call", "Receive Proposal via Email", "Urgent—Contact Immediately",
];

const countries = [
  "South Africa", "Nigeria", "Kenya", "Ghana", "Rwanda", "Ethiopia",
  "Tanzania", "Uganda", "Egypt", "Morocco", "Senegal", "Cameroon",
  "Botswana", "Mozambique", "Zambia", "Zimbabwe", "Côte d'Ivoire",
  "DR Congo", "Angola", "Other",
];

const demoData = {
  orgName: "Pan-African Digital University",
  orgType: "Online University",
  country: "Kenya",
  website: "https://www.padu.ac.ke",
  contactPerson: "Dr. Amara Okonkwo",
  title: "Vice Chancellor — Academic Affairs",
  email: "a.okonkwo@padu.ac.ke",
  phone: "+254 700 123 456",
  supportTypes: ["Teaching & Faculty Deployment", "Curriculum & Program Development"],
  discipline: "Data Science & Artificial Intelligence",
  expertiseLevel: "Senior Lecturer",
  academicsNeeded: "2–3",
  engagementType: "Part-Time (Ongoing)",
  engagementMode: "Fully Remote",
  startDate: "2026-04-15",
  duration: "6 months (renewable)",
  accreditationLinked: "Yes",
  regulatoryBody: "Commission for University Education (CUE)",
  namedLeads: "Yes",
  backgroundDocs: "Yes",
  description:
    "We are launching a new BSc in Data Science and require two senior lecturers to deliver core modules in machine learning and statistical analysis. The program must meet CUE accreditation standards and includes a blended delivery model.",
  budget: "$2,000–$5,000",
  nextStep: "Schedule Introductory Call",
  hearAbout: "Referred by the Association of African Universities",
};

// ─── SHARED FIELD STYLES ─────────────────────────────────────────────────────

const inputCls =
  "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40";
const labelCls = "block text-sm font-semibold text-foreground mb-1.5";

const inputStyle: React.CSSProperties = {
  width: "100%",
  borderRadius: "8px",
  border: "1.5px solid var(--border, #e5e7eb)",
  background: "var(--background, #fff)",
  padding: "0.65rem 0.875rem",
  fontSize: "0.875rem",
  color: "var(--foreground)",
  outline: "none",
  fontFamily: "inherit",
  boxSizing: "border-box",
  appearance: "auto",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.8rem",
  fontWeight: "600",
  color: "var(--foreground)",
  marginBottom: "0.375rem",
};

// ─── FORM SECTION WRAPPER ────────────────────────────────────────────────────

function FormSection({
  num, title, children,
}: { num: number; title: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        background: "var(--card, #ffffff)",
        border: "1px solid var(--border, #e5e7eb)",
        borderRadius: "12px",
        padding: "1.5rem",
        marginBottom: "0",
      }}
    >
      {/* Section header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          marginBottom: "1.25rem",
          paddingBottom: "1rem",
          borderBottom: "1px solid var(--border, #e5e7eb)",
        }}
      >
        <span
          style={{
            display: "inline-flex",
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            backgroundColor: "var(--accent)",
            color: "var(--accent-foreground, #fff)",
            fontSize: "0.75rem",
            fontWeight: "700",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {num}
        </span>
        <h3
          style={{
            fontSize: "1rem",
            fontWeight: "700",
            color: "var(--foreground)",
            margin: 0,
          }}
        >
          {title}
        </h3>
      </div>
      {children}
    </div>
  );
}

// Responsive 2-column grid that collapses to 1 column below 600px
function FGrid({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
      gap: "1rem",
    }}>
      {children}
    </div>
  );
}

// Individual field with label
function FField({ label, required, span2, children }: {
  label: string; required?: boolean; span2?: boolean; children: React.ReactNode
}) {
  return (
    <div style={span2 ? { gridColumn: "1 / -1" } : {}}>
      <label style={{
        display: "block", fontSize: "0.8rem", fontWeight: "600",
        color: "var(--foreground)", marginBottom: "0.375rem",
      }}>
        {label}
        {required && <span style={{ color: "var(--accent)", marginLeft: "2px" }}>*</span>}
      </label>
      {children}
    </div>
  );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

export default function Institution() {
  const [autoFill, setAutoFill] = useState(true);
  const [formData, setFormData] = useState<Record<string, any>>(
    autoFill ? { ...demoData } : {}
  );
  const [selectedSupport, setSelectedSupport] = useState<string[]>(
    autoFill ? demoData.supportTypes : []
  );

  const handleAutoFillToggle = () => {
    const next = !autoFill;
    setAutoFill(next);
    if (next) { setFormData({ ...demoData }); setSelectedSupport(demoData.supportTypes); }
    else      { setFormData({});              setSelectedSupport([]); }
  };

  const handleChange = (field: string, value: string) =>
    setFormData(prev => ({ ...prev, [field]: value }));

  const toggleSupport = (val: string) =>
    setSelectedSupport(prev =>
      prev.includes(val) ? prev.filter(v => v !== val) : [...prev, val]
    );

  const scrollToForm = (prefill?: string) => {
    if (prefill)
      setSelectedSupport(prev => prev.includes(prefill) ? prev : [...prev, prefill]);
    document.getElementById("request-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
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
              Institution Enablement
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
           ACADEMIC DEPLOYMENT & INSTITUTIONAL PARTNERSHIPS
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-4 max-w-2xl">
            Empowering institutions, EdTech platforms, research organizations, and professional bodies with verified academic talent, structured deployment, and governance-aligned academic support
            </p>
            <p className="text-sm text-primary-foreground/60 italic mb-8">
              We are not a staffing agency. We are an academic coordination and deployment infrastructure.
            </p>
            <div className="flex flex-row flex-wrap gap-3 items-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90" onClick={() => scrollToForm()}>
                Request Academic Support <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
          
      
                          <Button
                                size="lg"
                                variant="default"
                                className="border border-white hover:border-accent hover:bg-primary-foreground/10 text-primary-foreground"
                                asChild
                              >
                                <Link to="/publeesh">  Become an Institutional Partner </Link>
                              </Button><br></br>
          
            </div>
          </div>
        </div>
      </section>

      {/* ── B) WHY INSTITUTIONS CHOOSE ────────────────────────────────────── */}
      <section className="section-padding">
        <div className="section-container">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest font-semibold text-accent mb-3">
              Challenges We Solve
            </p>
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-foreground mb-4">
 Why Instituition Partners with Afrika Scholar
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm">
              Common institutional challenges our deployment infrastructure is built to address.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-10">
            {painPoints.map((point, i) => (
              <div key={i} className="governance-card flex items-start gap-3 py-4 px-5">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground font-medium">{point}</span>
              </div>
            ))}
          </div>

         <div className="text-center mt-8">
            <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
              <Link to="/network/apply">
              Request Support Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
{/* ── C) WHAT YOU CAN ACCESS ────────────────────────────────────────── */}
<section className="section-alt-bg section-padding">
  <div className="section-container max-w-5xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-2xl md:text-3xl font-bold font-serif text-foreground mb-4">
        What You Can Access Through Our Network
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
        Structured academic services designed for institutional deployment.
      </p>
    </div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {serviceBlocks.map((block, i) => (
    <div
      key={i}
      className="flex flex-col bg-white p-6"
      style={{
        borderRadius: "16px",
        boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
        border: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      {/* Large bare icon */}
      <block.icon className="w-10 h-10 text-accent mb-4" />

      {/* Title */}
      <h3 className="text-lg font-bold font-serif text-foreground mb-4">
        {block.title}
      </h3>

      {/* Items list */}
      <ul className="space-y-2 mb-6 flex-1">
        {block.items.map((item, j) => (
          <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>

      {/* CTA — smaller button */}
      <Button
        size="sm"
        className="bg-accent hover:bg-accent/90 text-white w-full flex items-center justify-center gap-2 text-xs py-2"
        asChild
        onClick={() => scrollToForm(block.formValue)}
      >
        <Link to="/network/apply">
          {block.ctaLabel} <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </Button>
    </div>
  ))}
</div>
  </div>
</section>
      {/* ── D) DIFFERENTIATORS ────────────────────────────────────────────── */}
   {/* ── D) DIFFERENTIATORS ────────────────────────────────────────────── */}
<section className="section-padding">
<div className="section-container max-w-4xl mx-auto">
    <div className="text-center mb-12">
      <p className="text-xs uppercase tracking-widest font-semibold text-accent mb-3">
        Our Difference
      </p>
      <h2 className="text-2xl md:text-3xl font-bold font-serif text-foreground">
        What Makes Afrika Scholar Different
      </h2>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
      {differentiators.map((d, i) => (
        <div
          key={i}
          className="flex flex-col items-center text-center p-6 gap-3"
          style={{
            borderRadius: "12px",
            border: "1px solid rgba(0,0,0,0.08)",
            boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
            background: "#fff",
          }}
        >
          {/* Bare icon — no background circle, matches screenshot */}
          <d.icon className="w-8 h-8 text-accent mb-1" />

          {/* Label */}
          <span className="text-sm font-semibold text-foreground leading-snug">
            {d.label}
          </span>

          {/* Subtext */}
          <span className="text-xs text-muted-foreground leading-relaxed">
            {d.sub}
          </span>
        </div>
      ))}
    </div>



 <div className="text-center">
  <Button
    size="lg"
    className="bg-accent hover:bg-accent/90"
    onClick={() => document.getElementById("how-engagement")?.scrollIntoView({ behavior: "smooth" })}
  >
    See How Engagement Works
    <ArrowRight className="ml-2 h-5 w-5" />
  </Button>

    </div>
  </div>
</section>
      {/* ── E) HOW ENGAGEMENT WORKS ───────────────────────────────────────── */}
      <section id="how-engagement" className="section-alt-bg section-padding">
<div className="section-container max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-widest font-semibold text-accent mb-3">
              Process
            </p>
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-foreground mb-4">
         How the Partnership Works
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm">
              A transparent, structured process from first contact to active deployment.
            </p>
          </div>

          {/* Steps with connector line */}
          <div className="relative mb-12">
            {/* Horizontal connector — desktop only */}
            <div className="hidden md:block absolute top-7 left-[calc(10%+28px)] right-[calc(10%+28px)] h-px bg-accent/30 z-0" />

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 relative z-10">
              {engagementSteps.map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-xl shadow-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-sm font-semibold text-foreground leading-snug">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
           <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
              <Link to="/network/apply">
            Start Request
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── F) WHO WE WORK WITH ───────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="section-container">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-widest font-semibold text-accent mb-3">
              Our Partners
            </p>
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-foreground">
              Who this is For
            </h2>
          </div>

          <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
            {audiences.map((a, i) => (
              <span
                key={i}
                className="bg-accent/10 text-accent border border-accent/20 font-semibold text-sm px-5 py-2 rounded-full"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── G) REQUEST FORM ───────────────────────────────────────────────── */}
      <section id="request-form" className="section-alt-bg section-padding">
        <div className="section-container">
          {/* Constrained centered wrapper */}
          <div style={{ maxWidth: "720px", margin: "0 auto" }}>

          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-widest font-semibold text-accent mb-3">
              Get Started
            </p>
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-foreground mb-3">
              Request Academic Deployment
            </h2>
            <p className="text-muted-foreground text-sm max-w-lg mx-auto">
           If you require lecturers, researchers, reviewers, or academic validation support, complete the request form below.

            </p>
          </div>

          {/* Auto-fill toggle */}
        <div
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.75rem",
    background: "var(--card, #fff)",
    border: "1px solid var(--border, #e5e7eb)",
    borderRadius: "10px",
    padding: "0.75rem 1.25rem",
    maxWidth: "280px",
    margin: "0 auto 2rem",
  }}
>
  <span className="text-sm font-semibold text-foreground">Auto-fill demo data</span>
  <button
    type="button"
    onClick={handleAutoFillToggle}
    style={{
      position: "relative",
      display: "inline-flex",
      height: "24px",
      width: "44px",
      alignItems: "center",
      borderRadius: "9999px",
      border: "none",
      cursor: "pointer",
      flexShrink: 0,
      backgroundColor: autoFill ? "#ea580c" : "#d1d5db",
      transition: "background-color 0.2s",
    }}
  >
    <span
      style={{
        display: "inline-block",
        height: "16px",
        width: "16px",
        borderRadius: "50%",
        backgroundColor: "#fff",
        boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
        transform: autoFill ? "translateX(22px)" : "translateX(4px)",
        transition: "transform 0.2s",
      }}
    />
  </button>
  <span className="text-xs text-muted-foreground">{autoFill ? "On" : "Off"}</span>
</div>

          <form
            onSubmit={(e) => { e.preventDefault(); window.location.href = "/university-enablement/request-submitted"; }}
            style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
          >

            {/* 1 — Organization Information */}
            <FormSection num={1} title="Organization Information">
              <FGrid>
                <FField label="Organization Name" required>
                  <input style={inputStyle} value={formData.orgName || ""} onChange={e => handleChange("orgName", e.target.value)} required placeholder="e.g. University of Lagos" />
                </FField>
                <FField label="Organization Type" required>
                  <select style={inputStyle} value={formData.orgType || ""} onChange={e => handleChange("orgType", e.target.value)} required>
                    <option value="">Select type...</option>
                    {orgTypes.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </FField>
                <FField label="Country of Operation" required>
                  <select style={inputStyle} value={formData.country || ""} onChange={e => handleChange("country", e.target.value)} required>
                    <option value="">Select country...</option>
                    {countries.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </FField>
                <FField label="Organization Website">
                  <input style={inputStyle} type="url" value={formData.website || ""} onChange={e => handleChange("website", e.target.value)} placeholder="https://..." />
                </FField>
                <FField label="Contact Person Name" required>
                  <input style={inputStyle} value={formData.contactPerson || ""} onChange={e => handleChange("contactPerson", e.target.value)} required placeholder="Full name" />
                </FField>
                <FField label="Title / Position">
                  <input style={inputStyle} value={formData.title || ""} onChange={e => handleChange("title", e.target.value)} placeholder="e.g. Academic Registrar" />
                </FField>
                <FField label="Official Email Address" required>
                  <input style={inputStyle} type="email" value={formData.email || ""} onChange={e => handleChange("email", e.target.value)} required placeholder="you@institution.ac" />
                </FField>
                <FField label="Phone Number">
                  <input style={inputStyle} type="tel" value={formData.phone || ""} onChange={e => handleChange("phone", e.target.value)} placeholder="+234 800 000 0000" />
                </FField>
              </FGrid>
            </FormSection>

            {/* 2 — Type of Support Required */}
            <FormSection num={2} title="Type of Support Required">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.625rem" }}>
                {supportTypes.map(s => (
                  <label
                    key={s}
                    style={{
                      display: "flex", alignItems: "center", gap: "0.625rem",
                      background: selectedSupport.includes(s) ? "var(--accent-light, rgba(234,88,12,0.06))" : "var(--background, #fff)",
                      border: `1.5px solid ${selectedSupport.includes(s) ? "var(--accent)" : "var(--border, #e5e7eb)"}`,
                      borderRadius: "8px", padding: "0.75rem", cursor: "pointer",
                      transition: "border-color 0.15s, background 0.15s",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={selectedSupport.includes(s)}
                      onChange={() => toggleSupport(s)}
                      style={{ width: "16px", height: "16px", flexShrink: 0, accentColor: "var(--accent)" }}
                    />
                    <span style={{ fontSize: "0.8rem", color: "var(--foreground)" }}>{s}</span>
                  </label>
                ))}
              </div>
            </FormSection>

            {/* 3 — Discipline & Expertise */}
            <FormSection num={3} title="Discipline & Expertise Requirements">
              <FGrid>
                <FField label="Primary Discipline / Field Required" span2>
                  <input style={inputStyle} value={formData.discipline || ""} onChange={e => handleChange("discipline", e.target.value)} placeholder="e.g. Data Science, Public Health, Law" />
                </FField>
                <FField label="Level of Expertise Required">
                  <select style={inputStyle} value={formData.expertiseLevel || ""} onChange={e => handleChange("expertiseLevel", e.target.value)}>
                    <option value="">Select level...</option>
                    {expertiseLevels.map(l => <option key={l} value={l}>{l}</option>)}
                  </select>
                </FField>
                <FField label="Number of Academics Required">
                  <select style={inputStyle} value={formData.academicsNeeded || ""} onChange={e => handleChange("academicsNeeded", e.target.value)}>
                    <option value="">Select range...</option>
                    {academicsNeeded.map(n => <option key={n} value={n}>{n}</option>)}
                  </select>
                </FField>
              </FGrid>
            </FormSection>

            {/* 4 — Engagement Structure */}
            <FormSection num={4} title="Engagement Structure">
              <FGrid>
                <FField label="Engagement Type">
                  <select style={inputStyle} value={formData.engagementType || ""} onChange={e => handleChange("engagementType", e.target.value)}>
                    <option value="">Select type...</option>
                    {engagementTypes.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </FField>
                <FField label="Mode of Engagement">
                  <select style={inputStyle} value={formData.engagementMode || ""} onChange={e => handleChange("engagementMode", e.target.value)}>
                    <option value="">Select mode...</option>
                    {engagementModes.map(m => <option key={m} value={m}>{m}</option>)}
                  </select>
                </FField>
                <FField label="Expected Start Date">
                  <input style={inputStyle} type="date" value={formData.startDate || ""} onChange={e => handleChange("startDate", e.target.value)} />
                </FField>
                <FField label="Estimated Duration">
                  <input style={inputStyle} value={formData.duration || ""} onChange={e => handleChange("duration", e.target.value)} placeholder="e.g. 6 months" />
                </FField>
              </FGrid>
            </FormSection>

            {/* 5 — Governance & Compliance */}
            <FormSection num={5} title="Governance & Compliance Context">
              <FGrid>
                <FField label="Linked to accreditation/licensing?">
                  <select style={inputStyle} value={formData.accreditationLinked || ""} onChange={e => handleChange("accreditationLinked", e.target.value)}>
                    <option value="">Select...</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </FField>
                <FField label="Regulatory Body">
                  <input style={inputStyle} value={formData.regulatoryBody || ""} onChange={e => handleChange("regulatoryBody", e.target.value)} placeholder="e.g. NUC, CUE, HEQSF" />
                </FField>
                <FField label="Named academic leads required?">
                  <select style={inputStyle} value={formData.namedLeads || ""} onChange={e => handleChange("namedLeads", e.target.value)}>
                    <option value="">Select...</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="Unsure">Unsure</option>
                  </select>
                </FField>
                <FField label="Background verification docs required?">
                  <select style={inputStyle} value={formData.backgroundDocs || ""} onChange={e => handleChange("backgroundDocs", e.target.value)}>
                    <option value="">Select...</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </FField>
              </FGrid>
            </FormSection>

            {/* 6 — Scope & Budget */}
            <FormSection num={6} title="Scope & Budget Context">
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <FField label="Brief Description of Requirements">
                  <textarea
                    style={{ ...inputStyle, minHeight: "120px", resize: "vertical" }}
                    rows={5}
                    value={formData.description || ""}
                    onChange={e => handleChange("description", e.target.value)}
                    placeholder="Describe the academic need, program context, expected outcomes, and any constraints..."
                  />
                </FField>
                <FField label="Budget Range">
                  <select style={inputStyle} value={formData.budget || ""} onChange={e => handleChange("budget", e.target.value)}>
                    <option value="">Select budget range...</option>
                    {budgetRanges.map(b => <option key={b} value={b}>{b}</option>)}
                  </select>
                </FField>
              </div>
            </FormSection>

            {/* 7 — Next Steps */}
            <FormSection num={7} title="Next Steps">
              <FGrid>
                <FField label="Preferred Next Step">
                  <select style={inputStyle} value={formData.nextStep || ""} onChange={e => handleChange("nextStep", e.target.value)}>
                    <option value="">Select...</option>
                    {nextSteps.map(n => <option key={n} value={n}>{n}</option>)}
                  </select>
                </FField>
                <FField label="How did you hear about Afrika Scholar?">
                  <input style={inputStyle} value={formData.hearAbout || ""} onChange={e => handleChange("hearAbout", e.target.value)} placeholder="Referral, event, search..." />
                </FField>
              </FGrid>

              {/* Declarations */}
              <div style={{ marginTop: "1.25rem", paddingTop: "1.25rem", borderTop: "1px solid var(--border, #e5e7eb)", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <p style={{ fontSize: "0.7rem", fontWeight: "700", color: "var(--muted-foreground)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.25rem" }}>
                  Declarations
                </p>
                {[
                  "I confirm the information provided is accurate and complete.",
                  "I understand availability is not guaranteed until engagement is formally confirmed.",
                  "I consent to being contacted by the Afrika Scholar coordination team.",
                ].map((text, i) => (
                  <label key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", cursor: "pointer" }}>
                    <input
                      type="checkbox"
                      required
                      style={{ width: "16px", height: "16px", marginTop: "2px", flexShrink: 0, accentColor: "var(--accent)" }}
                    />
                    <span style={{ fontSize: "0.875rem", color: "var(--muted-foreground)" }}>{text}</span>
                  </label>
                ))}
              </div>
            </FormSection>

            {/* Submit */}
            <div style={{ textAlign: "center", paddingTop: "1rem" }}>

                      <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
              <Link to="/network/apply">
               Submit Academic Deployment Request 
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
           
              <p style={{ fontSize: "0.75rem", color: "var(--muted-foreground)", marginTop: "0.75rem" }}>
                Our coordination team will respond within 24–48 hours.
              </p>
            </div>

          </form>
          </div>{/* end centered wrapper */}
        </div>
      </section>

    </Layout>
  );
}
