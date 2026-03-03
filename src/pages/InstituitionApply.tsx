import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, ChevronRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/layout";
import StepIndicator from "@/components/StepIndicator";
import transcriptHero from "@/assets/about-conference.jpg";

// ─── DATA ────────────────────────────────────────────────────────────────────

const orgTypes = [
  "University", "EdTech Platform", "Online University",
  "Professional/Certification Body", "Research Organization",
  "Corporate Training Division", "Policy/Government Institution", "Other",
];

const supportTypes = [
  "Teaching & Academic Delivery",     "Online / Blended Teaching Support",
  "Short-Term Academic Delivery",       "Research & Scholarly Engagement",
  "Peer Review & Editorial Support",    "Academic Validation / Quality Assurance",
  "Curriculum & Content Development",   "Accreditation / Licensing Support",
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

const budgetRanges = ["Under ₦500", "₦500–₦2,000", "₦2,000–₦5,000", "₦5,000+", "Prefer to discuss"];

const nextSteps = [
  "Schedule Introductory Call", "Receive Proposal via Email", "Urgent—Contact Immediately",
];

const countries = [
  "Nigeria", "Ghana", "Kenya", "South Africa", "Egypt", "Morocco",
  "Tanzania", "Uganda", "Rwanda", "Ethiopia", "Cameroon", "Senegal", "Other",
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
  supportTypes: ["Teaching & Academic Delivery", "Online / Blended Teaching Support"],
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
    "We are launching a new BSc in Data Science and require two senior lecturers to deliver core modules in machine learning and statistical analysis.",
  budget: "₦2,000–₦5,000",
  nextStep: "Schedule Introductory Call",
  hearAbout: "Referred by the Association of African Universities",
};

// ─── STYLES ──────────────────────────────────────────────────────────────────

const inputStyle: React.CSSProperties = {
  width: "100%",
  borderRadius: "8px",
  border: "1.5px solid #d1d5db",
  background: "#ffffff",
  padding: "0.65rem 0.875rem",
  fontSize: "0.875rem",
  color: "var(--foreground)",
  outline: "none",
  fontFamily: "inherit",
  boxSizing: "border-box",
};

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function FormSection({ num, title, children }: { num: number; title: string; children: React.ReactNode }) {
  return (
    <div style={{ background: "var(--card,#fff)", border: "1px solid var(--border,#e5e7eb)", borderRadius: "12px", padding: "1.5rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem", paddingBottom: "1rem", borderBottom: "1px solid var(--border,#e5e7eb)" }}>
        <span style={{ display: "inline-flex", width: 28, height: 28, borderRadius: "50%", backgroundColor: "var(--accent)", color: "var(--accent-foreground,#fff)", fontSize: "0.75rem", fontWeight: 700, alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{num}</span>
        <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--foreground)", margin: 0 }}>{title}</h3>
      </div>
      {children}
    </div>
  );
}

function FGrid({ children }: { children: React.ReactNode }) {
  return <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,280px),1fr))", gap: "1rem" }}>{children}</div>;
}

function FField({ label, required, span2, children }: { label: string; required?: boolean; span2?: boolean; children: React.ReactNode }) {
  return (
    <div style={span2 ? { gridColumn: "1 / -1" } : {}}>
      <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--foreground)", marginBottom: "0.375rem" }}>
        {label}{required && <span style={{ color: "var(--accent)", marginLeft: 2 }}>*</span>}
      </label>
      {children}
    </div>
  );
}

// ─── STEP DEFINITIONS ────────────────────────────────────────────────────────
// Matches the pattern used in Propose.tsx — StepIndicator receives `current` (1-based)

const STEPS = [
  { id: 1, label: "Organisation"   },
  { id: 2, label: "Support Type"  },
  { id: 3, label: "Expertise"     },
  { id: 4, label: "Engagement"    },
];

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function InstituitionApply() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted]   = useState(false);
  const [formData, setFormData]         = useState<Record<string, any>>({ ...demoData });
  const [selectedSupport, setSelectedSupport] = useState<string[]>(demoData.supportTypes);
  const [declarations, setDeclarations] = useState([false, false, false]);

  const handleChange = (field: string, value: string) =>
    setFormData(prev => ({ ...prev, [field]: value }));

  const toggleSupport = (val: string) =>
    setSelectedSupport(prev => prev.includes(val) ? prev.filter(v => v !== val) : [...prev, val]);

  const toggleDeclaration = (i: number) =>
    setDeclarations(prev => prev.map((v, idx) => idx === i ? !v : v));

//   const next = () => setCurrentStep(s => Math.min(s + 1, STEPS.length));
const next = () => {
  setCurrentStep(s => Math.min(s + 1, STEPS.length));
  window.scrollTo({ top: 0, behavior: "smooth" });
};
//   const prev = () => setCurrentStep(s => Math.max(s - 1, 1));
const prev = () => {
  setCurrentStep(s => Math.max(s - 1, 1));
  window.scrollTo({ top: 0, behavior: "smooth" });
};
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  // ── Success screen ──────────────────────────────────────────────────────────
  if (isSubmitted) {
    return (
      <Layout>
        <div className="container-section section-padding">
          <Card className="max-w-2xl mx-auto text-center">
            <CardContent className="py-12">
              <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-accent" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Request Submitted Successfully!</h2>
              <p className="text-muted-foreground mb-8">
                Our coordination team will review your request and respond within 24–48 hours.
              </p>
              <div className="flex justify-center gap-4">
                <Button variant="outline" asChild><Link to="/institution">Back</Link></Button>
                <Button asChild><Link to="/">Go to Home</Link></Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-secondary/30 border-b">
        <div className="container-section py-3">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/institution" className="hover:text-foreground">Institution</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Apply</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[320px]">
        <div className="absolute inset-0">
          <img src={transcriptHero} alt="Academic Deployment" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="container-section relative section-padding">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <p className="text-sm uppercase tracking-wider text-accent font-semibold mb-4">
              Request Academic Deployment
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Request Academic Deployment
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Complete the form below to request lecturers, researchers, reviewers, or academic validation support.
            </p>
          </div>
        </div>
      </section>

      {/* Step indicator — same pattern as Propose.tsx */}
      <div className="py-8">
        <StepIndicator current={currentStep} />

        <form onSubmit={handleSubmit} className="mx-auto max-w-3xl mt-10 space-y-8 px-4">

          {/* ── STEP 1: Organisation Information ───────────────────────────── */}
          {currentStep === 1 && (
            <>
              <div className="text-center">
                <h2 className="font-serif text-3xl font-bold text-primary">Organisation Information</h2>
                <p className="mt-2 text-muted-foreground">Tell us about your institution or organisation.</p>
              </div>

              <FormSection num={1} title="Organisation Details">
                <FGrid>
                  <FField label="Organisation Name" required>
                    <input style={inputStyle} value={formData.orgName || ""} onChange={e => handleChange("orgName", e.target.value)} placeholder="e.g. University of Lagos" />
                  </FField>
                  <FField label="Organisation Type" required>
                    <select style={inputStyle} value={formData.orgType || ""} onChange={e => handleChange("orgType", e.target.value)}>
                      <option value="">Select type...</option>
                      {orgTypes.map(t => <option key={t}>{t}</option>)}
                    </select>
                  </FField>
                  <FField label="Country of Operation" required>
                    <select style={inputStyle} value={formData.country || ""} onChange={e => handleChange("country", e.target.value)}>
                      <option value="">Select country...</option>
                      {countries.map(c => <option key={c}>{c}</option>)}
                    </select>
                  </FField>
                  <FField label="Organisation Website">
                    <input style={inputStyle} type="url" value={formData.website || ""} onChange={e => handleChange("website", e.target.value)} placeholder="https://..." />
                  </FField>
                  <FField label="Contact Person Name" required>
                    <input style={inputStyle} value={formData.contactPerson || ""} onChange={e => handleChange("contactPerson", e.target.value)} placeholder="Full name" />
                  </FField>
                  <FField label="Title / Position">
                    <input style={inputStyle} value={formData.title || ""} onChange={e => handleChange("title", e.target.value)} placeholder="e.g. Academic Registrar" />
                  </FField>
                  <FField label="Official Email" required>
                    <input style={inputStyle} type="email" value={formData.email || ""} onChange={e => handleChange("email", e.target.value)} placeholder="you@institution.ac" />
                  </FField>
                  <FField label="Phone Number">
                    <input style={inputStyle} type="tel" value={formData.phone || ""} onChange={e => handleChange("phone", e.target.value)} placeholder="+234 800 000 0000" />
                  </FField>
                </FGrid>
              </FormSection>
            </>
          )}

          {/* ── STEP 2: Support Type + Discipline ──────────────────────────── */}
          {currentStep === 2 && (
            <>
              <div className="text-center">
                <h2 className="font-serif text-3xl font-bold text-primary">Support Required</h2>
                <p className="mt-2 text-muted-foreground">Select the type of academic support your organisation needs.</p>
              </div>

              <FormSection num={2} title="Type of Support Required">
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.625rem" }}>
                  {supportTypes.map(s => (
                    <label key={s} style={{
                      display: "flex", alignItems: "center", gap: "0.625rem",
                      background: selectedSupport.includes(s) ? "rgba(234,88,12,0.06)" : "#fff",
                      border: `1.5px solid ${selectedSupport.includes(s) ? "var(--accent)" : "#e5e7eb"}`,
                      borderRadius: "8px", padding: "0.75rem", cursor: "pointer", transition: "border-color 0.15s",
                    }}>
                      <input type="checkbox" checked={selectedSupport.includes(s)} onChange={() => toggleSupport(s)}
                        style={{ width: 16, height: 16, flexShrink: 0, accentColor: "var(--accent)" }} />
                      <span style={{ fontSize: "0.8rem", color: "var(--foreground)" }}>{s}</span>
                    </label>
                  ))}
                </div>
              </FormSection>
            </>
          )}

          {/* ── STEP 3: Expertise + Engagement ─────────────────────────────── */}
          {currentStep === 3 && (
            <>
              <div className="text-center">
                <h2 className="font-serif text-3xl font-bold text-primary">Expertise & Engagement</h2>
                <p className="mt-2 text-muted-foreground">Define the academic profile and engagement structure you need.</p>
              </div>

              <FormSection num={3} title="Discipline & Expertise Requirements">
                <FGrid>
                  <FField label="Primary Discipline / Field" span2>
                    <input style={inputStyle} value={formData.discipline || ""} onChange={e => handleChange("discipline", e.target.value)} placeholder="e.g. Data Science, Public Health, Law" />
                  </FField>
                  <FField label="Level of Expertise Required">
                    <select style={inputStyle} value={formData.expertiseLevel || ""} onChange={e => handleChange("expertiseLevel", e.target.value)}>
                      <option value="">Select level...</option>
                      {expertiseLevels.map(l => <option key={l}>{l}</option>)}
                    </select>
                  </FField>
                  <FField label="Number of Academics Required">
                    <select style={inputStyle} value={formData.academicsNeeded || ""} onChange={e => handleChange("academicsNeeded", e.target.value)}>
                      <option value="">Select range...</option>
                      {academicsNeeded.map(n => <option key={n}>{n}</option>)}
                    </select>
                  </FField>
                </FGrid>
              </FormSection>

              <FormSection num={4} title="Engagement Structure">
                <FGrid>
                  <FField label="Engagement Type">
                    <select style={inputStyle} value={formData.engagementType || ""} onChange={e => handleChange("engagementType", e.target.value)}>
                      <option value="">Select type...</option>
                      {engagementTypes.map(t => <option key={t}>{t}</option>)}
                    </select>
                  </FField>
                  <FField label="Mode of Engagement">
                    <select style={inputStyle} value={formData.engagementMode || ""} onChange={e => handleChange("engagementMode", e.target.value)}>
                      <option value="">Select mode...</option>
                      {engagementModes.map(m => <option key={m}>{m}</option>)}
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
            </>
          )}

          {/* ── STEP 4: Governance + Scope + Next Steps ─────────────────────── */}
          {currentStep === 4 && (
            <>
              <div className="text-center">
                <h2 className="font-serif text-3xl font-bold text-primary">Scope & Submission</h2>
                <p className="mt-2 text-muted-foreground">Provide governance context, scope details, and confirm your submission.</p>
              </div>

              <FormSection num={5} title="Governance & Compliance Context">
                <FGrid>
                  <FField label="Linked to accreditation / licensing?">
                    <select style={inputStyle} value={formData.accreditationLinked || ""} onChange={e => handleChange("accreditationLinked", e.target.value)}>
                      <option value="">Select...</option>
                      <option>Yes</option><option>No</option>
                    </select>
                  </FField>
                  <FField label="Regulatory Body Involved?">
                    <input style={inputStyle} value={formData.regulatoryBody || ""} onChange={e => handleChange("regulatoryBody", e.target.value)} placeholder="e.g. NUC, CUE, HEQSF" />
                  </FField>
                  <FField label="Named academic leads required?">
                    <select style={inputStyle} value={formData.namedLeads || ""} onChange={e => handleChange("namedLeads", e.target.value)}>
                      <option value="">Select...</option>
                      <option>Yes</option><option>No</option><option>Unsure</option>
                    </select>
                  </FField>
                  <FField label="Background verification docs required?">
                    <select style={inputStyle} value={formData.backgroundDocs || ""} onChange={e => handleChange("backgroundDocs", e.target.value)}>
                      <option value="">Select...</option>
                      <option>Yes</option><option>No</option>
                    </select>
                  </FField>
                </FGrid>
              </FormSection>

              <FormSection num={6} title="Scope & Budget Context">
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <FField label="Brief Description of Requirements">
                    <textarea style={{ ...inputStyle, minHeight: 120, resize: "vertical" } as React.CSSProperties} rows={5}
                      value={formData.description || ""} onChange={e => handleChange("description", e.target.value)}
                      placeholder="Describe the academic need, program context, expected outcomes, and any constraints..." />
                  </FField>
                  <FField label="Budget Range">
                    <select style={inputStyle} value={formData.budget || ""} onChange={e => handleChange("budget", e.target.value)}>
                      <option value="">Select budget range...</option>
                      {budgetRanges.map(b => <option key={b}>{b}</option>)}
                    </select>
                  </FField>
                </div>
              </FormSection>

              <FormSection num={7} title="Next Steps">
                <FGrid>
                  <FField label="Preferred Next Step">
                    <select style={inputStyle} value={formData.nextStep || ""} onChange={e => handleChange("nextStep", e.target.value)}>
                      <option value="">Select...</option>
                      {nextSteps.map(n => <option key={n}>{n}</option>)}
                    </select>
                  </FField>
                  <FField label="How did you hear about Afrika Scholar?">
                    <input style={inputStyle} value={formData.hearAbout || ""} onChange={e => handleChange("hearAbout", e.target.value)} placeholder="Referral, event, search..." />
                  </FField>
                </FGrid>

                {/* Declarations */}
                <div style={{ marginTop: "1.25rem", paddingTop: "1.25rem", borderTop: "1px solid var(--border,#e5e7eb)", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  <p style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--muted-foreground)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.25rem" }}>
                    Declarations
                  </p>
                  {[
                    "I confirm the information provided is accurate and complete.",
                    "I understand availability is not guaranteed until engagement is formally confirmed.",
                    "I consent to being contacted by the Afrika Scholar coordination team.",
                  ].map((text, i) => (
                    <label key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", cursor: "pointer" }}>
                      <input type="checkbox" checked={declarations[i]} onChange={() => toggleDeclaration(i)} required
                        style={{ width: 16, height: 16, marginTop: 2, flexShrink: 0, accentColor: "var(--accent)" }} />
                      <span style={{ fontSize: "0.875rem", color: "var(--muted-foreground)" }}>{text}</span>
                    </label>
                  ))}
                </div>
              </FormSection>
            </>
          )}

          {/* ── Navigation buttons ─────────────────────────────────────────── */}
          <div className="flex justify-between items-center pt-2">
            {currentStep > 1 ? (
              <Button type="button" variant="outline" onClick={prev} className="px-6">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
            ) : <div />}

            {currentStep < STEPS.length ? (
              <Button type="button" onClick={next} className="bg-accent text-accent-foreground hover:bg-accent/90 px-8">
                Continue <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button type="submit" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8">
                Submit Academic Support Request <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            )}
          </div>

        </form>
      </div>
    </Layout>
  );
}
