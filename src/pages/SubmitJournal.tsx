import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowLeft, CheckCircle, BookOpen, Users, ShieldCheck,
  Scale, Globe, Eye, FileText, Send, RefreshCw,
  Building2, Mail, AlertCircle,
} from "lucide-react";
import { useJournal } from "@/context/JournalContext";
import StepIndicator from "@/components/StepIndicator";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function ReviewRow({ label, value }: { label: string; value?: string }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", padding: "0.6rem 0", borderBottom: "1px solid #f3f4f6" }}>
      <span style={{ fontSize: "0.8rem", color: "var(--muted-foreground)", fontWeight: 600, flexShrink: 0 }}>{label}</span>
      <span style={{ fontSize: "0.83rem", color: "var(--foreground)", textAlign: "right", fontWeight: 500 }}>{value || <span style={{ color: "#d1d5db" }}>Not set</span>}</span>
    </div>
  );
}

function SectionReview({ icon: Icon, title, children }: {
  icon: React.ElementType; title: string; children: React.ReactNode;
}) {
  return (
    <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, overflow: "hidden", marginBottom: "1rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "1rem 1.25rem", borderBottom: "1px solid #f3f4f6", background: "#f9fafb" }}>
        <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(234,88,12,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <Icon size={16} style={{ color: "var(--accent)" }} />
        </div>
        <span style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--foreground)" }}>{title}</span>
      </div>
      <div style={{ padding: "0.5rem 1.25rem 0.75rem" }}>{children}</div>
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function SubmitJournal() {
  const { state, setState } = useJournal();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [submissionId, setSubmissionId] = useState("");

  const handleSubmit = async () => {
    if (!agreed) return;
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1600));
    const id = "JNL-" + Math.random().toString(36).substring(2, 8).toUpperCase();
    setSubmissionId(id);
    setState(prev => ({ ...prev, submitted: true, submissionId: id }));
    setIsSubmitting(false);
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ── Success screen ────────────────────────────────────────────────────────
  if (isSubmitted) {
    return (
      <Layout>
        <div style={{ minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "4rem 1rem" }}>
          <div style={{ maxWidth: 540, width: "100%", background: "#fff", border: "1px solid #e5e7eb", borderRadius: 20, padding: "3rem 2.5rem", textAlign: "center", boxShadow: "0 8px 40px rgba(0,0,0,0.07)" }}>
            <div style={{ width: 72, height: 72, borderRadius: "50%", background: "rgba(34,197,94,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
              <CheckCircle size={36} style={{ color: "#22c55e" }} />
            </div>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 800, fontFamily: "Georgia, serif", color: "var(--foreground)", margin: "0 0 0.75rem" }}>
              Journal Submitted!
            </h2>
            <p style={{ fontSize: "0.95rem", color: "var(--muted-foreground)", lineHeight: 1.7, margin: "0 0 0.75rem" }}>
              Your journal proposal has been received by the Afrika Scholar editorial team. We'll review it and respond within <strong style={{ color: "var(--foreground)" }}>5–7 working days</strong>.
            </p>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 8, padding: "0.5rem 1rem", fontSize: "0.8rem", color: "var(--muted-foreground)", marginBottom: "2rem" }}>
              <FileText size={13} />
              Submission ID: <strong style={{ color: "var(--foreground)", fontFamily: "monospace" }}>{submissionId}</strong>
            </div>

            {/* What happens next */}
            <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 12, padding: "1.25rem", textAlign: "left", marginBottom: "2rem" }}>
              <p style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--muted-foreground)", marginBottom: "0.875rem" }}>
                What happens next
              </p>
              {[
                { icon: Mail,       text: "Confirmation email sent to your registered address" },
                { icon: Users,      text: "Editorial team reviews your governance & policies" },
                { icon: ShieldCheck, text: "Compliance check against Afrika Scholar standards" },
                { icon: BookOpen,   text: "Journal onboarding begins upon approval" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "0.625rem" }}>
                  <Icon size={14} style={{ color: "var(--accent)", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.82rem", color: "var(--muted-foreground)" }}>{text}</span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Button variant="outline" asChild>
                <Link to="/publishing">Back to Publishing</Link>
              </Button>
              <Button className="bg-accent hover:bg-accent/90" asChild>
                <Link to="/dashboard">Go to Dashboard</Link>
              </Button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  // ── Review & Submit ───────────────────────────────────────────────────────
  return (
    <Layout>
      <div className="py-8">
        <StepIndicator current={4} />

        <div className="mx-auto max-w-3xl space-y-6 px-4 mt-10">

          {/* Header */}
          <div className="text-center">
            <h1 className="font-serif text-3xl font-bold text-primary">
              Review & Submit
            </h1>
            <p className="mt-2 text-muted-foreground">
              Review your journal setup before submitting to the Afrika Scholar editorial team.
            </p>
          </div>

          {/* Review Cards */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <BookOpen className="h-5 w-5 text-accent" /> Journal Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <SectionReview icon={BookOpen} title="Journal Details">
                <ReviewRow label="Journal Name"       value={state?.journalName} />
                <ReviewRow label="Discipline"         value={state?.discipline} />
                <ReviewRow label="ISSN (if available)" value={state?.issn || "To be assigned"} />
                <ReviewRow label="Publisher"          value={state?.publisherName} />
                <ReviewRow label="Contact Email"      value={state?.contactEmail} />
              </SectionReview>

              <SectionReview icon={Users} title="Editorial Governance">
                <ReviewRow label="Editor-in-Chief"       value={state?.editorInChief} />
                <ReviewRow label="Governance Confirmed"  value={state?.governanceComplete ? "✓ Complete" : "Incomplete"} />
              </SectionReview>

              <SectionReview icon={ShieldCheck} title="Policies">
                <ReviewRow label="Peer Review Type"   value={state?.policies?.reviewType?.replace("-", " ").replace(/\b\w/g, c => c.toUpperCase())} />
                <ReviewRow label="Open Access License" value={state?.policies?.license?.toUpperCase()} />
                <ReviewRow label="Embargo Period"      value={state?.policies?.embargo} />
                <ReviewRow label="Referencing Style"   value={state?.policies?.refStyle} />
                <ReviewRow label="Plagiarism Screening" value={state?.policies?.plagiarismTool ? "Required" : "Optional"} />
                <ReviewRow label="AI Disclosure"       value={state?.policies?.aiDisclosure ? "Required" : "Optional"} />
              </SectionReview>
            </CardContent>
          </Card>

          {/* Checklist */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <CheckCircle className="h-5 w-5 text-accent" /> Submission Checklist
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                {[
                  { label: "Journal details completed",       done: !!state?.journalName },
                  { label: "Editorial governance confirmed",  done: !!state?.governanceComplete },
                  { label: "Journal policies defined",        done: !!state?.policiesComplete },
                  { label: "Contact email provided",          done: !!state?.contactEmail },
                ].map(({ label, done }) => (
                  <div key={label} style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.65rem 0.875rem", borderRadius: 8, background: done ? "rgba(34,197,94,0.05)" : "rgba(239,68,68,0.04)", border: `1px solid ${done ? "rgba(34,197,94,0.2)" : "rgba(239,68,68,0.15)"}` }}>
                    {done
                      ? <CheckCircle size={16} style={{ color: "#22c55e", flexShrink: 0 }} />
                      : <AlertCircle size={16} style={{ color: "#ef4444", flexShrink: 0 }} />
                    }
                    <span style={{ fontSize: "0.85rem", fontWeight: 600, color: done ? "var(--foreground)" : "#ef4444" }}>{label}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Declaration */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Scale className="h-5 w-5 text-accent" /> Declaration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  "The information provided in this journal proposal is accurate and complete.",
                  "The editorial board members listed have consented to their roles.",
                  "This journal will operate in compliance with Afrika Scholar's publishing standards and ethics policies.",
                  "I understand that Afrika Scholar reserves the right to approve or decline journal applications.",
                ].map((text, i) => (
                  <label key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 8, padding: "0.75rem 1rem", cursor: "pointer" }}>
                    <input type="checkbox" style={{ width: 15, height: 15, marginTop: 2, accentColor: "var(--accent)", flexShrink: 0 }} />
                    <span style={{ fontSize: "0.83rem", color: "var(--muted-foreground)", lineHeight: 1.55 }}>{text}</span>
                  </label>
                ))}

                {/* Main agreement */}
                <label style={{
                  display: "flex", alignItems: "flex-start", gap: "0.75rem", cursor: "pointer",
                  background: agreed ? "rgba(234,88,12,0.05)" : "#fff",
                  border: `1.5px solid ${agreed ? "var(--accent)" : "#d1d5db"}`,
                  borderRadius: 10, padding: "1rem", transition: "all 0.15s", marginTop: "0.25rem",
                }}>
                  <input type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)}
                    style={{ width: 16, height: 16, marginTop: 2, accentColor: "var(--accent)", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.875rem", color: "var(--foreground)", lineHeight: 1.6, fontWeight: 600 }}>
                    I confirm all declarations above and agree to Afrika Scholar's{" "}
                    <Link to="/terms" style={{ color: "var(--accent)", textDecoration: "none" }}>Terms of Service</Link>
                    {" "}and{" "}
                    <Link to="/publishing-standards" style={{ color: "var(--accent)", textDecoration: "none" }}>Publishing Standards</Link>.
                  </span>
                </label>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "0.5rem", paddingBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
            <Button variant="outline" onClick={() => { navigate("/policies"); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="px-6">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back
            </Button>

            <Button
              onClick={handleSubmit}
              disabled={!agreed || isSubmitting}
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-10"
              size="lg"
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
                  <Send size={16} /> Submit Journal Proposal
                </span>
              )}
            </Button>
          </div>

        </div>
      </div>

      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </Layout>
  );
}
