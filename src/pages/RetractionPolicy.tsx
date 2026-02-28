import { Link } from "react-router-dom";
import {
  CheckCircle2,
  AlertTriangle,
  FileX,
  Search,
  Bell,
  Archive,
  ChevronRight,
  ArrowLeft,
  Download,
  XCircle,
  AlertCircle,
  FileEdit,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout";

const sections = [
  { id: "grounds", label: "Grounds for Retraction", icon: FileX },
  { id: "correction-vs-retraction", label: "Correction vs Retraction", icon: FileEdit },
  { id: "investigation", label: "Investigation Procedure", icon: Search },
  { id: "notification", label: "Public Notification Format", icon: Bell },
  { id: "transparency", label: "Transparency Standards", icon: CheckCircle2 },
  { id: "preservation", label: "Record Preservation", icon: Archive },
];

const retractionGrounds = [
  "Clear evidence that findings are unreliable — whether due to honest error or misconduct (data fabrication, falsification, or manipulation)",
  "Plagiarism — the manuscript substantially reproduces work previously published by others without appropriate acknowledgement or permission",
  "Redundant publication — reporting the same findings as a previously published article without appropriate disclosure or justification",
  "Research conducted without required ethical approvals, or participant consent not obtained as required",
  "The article contains material that is defamatory, infringes legal rights, or is otherwise illegal",
  "Authorship disputed in a manner that cannot be resolved, or clear evidence of gift or ghost authorship",
  "A significant undisclosed conflict of interest that would have materially affected the editorial decision",
];

const notRetracted = [
  "Minor errors not affecting conclusions",
  "Disputes about interpretation",
  "Differences of opinion regarding methodology",
  "Situations where underlying data and conclusions remain valid",
];

const investigationSteps = [
  {
    number: "01",
    icon: Search,
    title: "Initial Assessment",
    desc: "The Editor-in-Chief reviews the evidence and determines whether a formal investigation is warranted.",
    timeline: "Immediate",
  },
  {
    number: "02",
    icon: Bell,
    title: "Author Notification",
    desc: "The corresponding author is notified of the concerns and given an opportunity to respond within 14 days.",
    timeline: "14 days to respond",
  },
  {
    number: "03",
    icon: FileX,
    title: "Evidence Review",
    desc: "The Editor-in-Chief and, where appropriate, editorial board members or external experts review all available evidence, including the author's response.",
    timeline: "As required",
  },
  {
    number: "04",
    icon: AlertTriangle,
    title: "Institutional Consultation",
    desc: "Where misconduct is suspected, the authors' institution(s) may be contacted to request an independent investigation.",
    timeline: "As required",
  },
  {
    number: "05",
    icon: CheckCircle2,
    title: "Decision",
    desc: "Based on the evidence, a decision is made to issue a correction, expression of concern, or retraction. The decision is documented with clear reasoning.",
    timeline: "30–90 days total",
  },
  {
    number: "06",
    icon: Bell,
    title: "Publication",
    desc: "The appropriate notice is published and linked to the original article. Distributed to all indexing services and databases.",
    timeline: "Promptly after decision",
  },
];

const noticeIncludes = [
  "A clear title identifying the notice as a retraction",
  "Full bibliographic details of the retracted article",
  "A statement of who is issuing the retraction (editors, authors, or publisher)",
  "The reason(s) for the retraction, described in sufficient detail",
  "A reference to the COPE retraction guidelines",
];

const noticeDistribution = [
  "Published as a separate, citable article linked to the original",
  "Freely accessible to all readers",
  "Distributed to indexing services, databases, and aggregators",
  "Prominently displayed to anyone accessing the original article",
];

export default function RetractionPolicyPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[320px] bg-primary">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="retraction-grid" width="8" height="8" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="0.4" fill="white" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#retraction-grid)" />
          </svg>
        </div>
        <div className="container-section relative section-padding text-primary-foreground">
          <Link
            to="/framework/standards"
            className="inline-flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-accent mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Publishing Standards
          </Link>
          <p className="text-sm uppercase tracking-wider text-accent font-semibold mb-4">
            Publishing Framework
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-up max-w-3xl">
            Retraction & Correction Policy
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mb-8">
            Transparent procedures for corrections, retractions, and expressions of concern — fully compliant with COPE retraction guidelines.
          </p>
          <Button variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2">
            <Download className="h-4 w-4" /> Download PDF
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-section py-12">
        <div className="grid lg:grid-cols-[260px_1fr] gap-12 max-w-6xl mx-auto">

          {/* Sticky Sidebar */}
          <aside className="hidden lg:block">
            <nav className="sticky top-24 space-y-1 border rounded-xl p-4 bg-secondary/30">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 px-3">
                Contents
              </p>
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
                >
                  <s.icon className="h-4 w-4 shrink-0" />
                  {s.label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <div className="space-y-16 min-w-0">

            {/* 1. Grounds */}
            <section id="grounds">
              <SectionHeader number="1" title="Grounds for Retraction" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Retraction is a mechanism for correcting the scholarly record when published research is found to be fundamentally flawed or untrustworthy. Afrika Scholar follows COPE retraction guidelines and considers retraction appropriate in the following circumstances:
                </p>
                <div className="space-y-2">
                  {retractionGrounds.map((item) => (
                    <div key={item} className="flex items-start gap-3 p-3 rounded-lg bg-red-500/5 border border-red-500/20">
                      <XCircle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-secondary/50 rounded-xl p-5 border-l-4 border-accent mt-4">
                  <p className="text-sm font-medium text-foreground mb-3">Retraction is NOT used for:</p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {notRetracted.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">In these cases, corrections, responses, or letters to the editor are the appropriate mechanisms.</p>
                </div>
              </div>
            </section>

            {/* 2. Correction vs Retraction */}
            <section id="correction-vs-retraction">
              <SectionHeader number="2" title="Correction vs Retraction" />
              <p className="text-muted-foreground mb-6">
                Not all post-publication issues require retraction. Afrika Scholar distinguishes between three mechanisms based on the severity and nature of the issue:
              </p>
              <div className="space-y-4">
                {/* Corrections */}
                <div className="rounded-xl border-2 border-accent/40 p-5 bg-card hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-9 w-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <FileEdit className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Corrections (Errata / Corrigenda)</h3>
                      <span className="text-xs font-medium text-accent">Minor — findings remain valid</span>
                    </div>
                  </div>
                  <div className="space-y-3 pl-12">
                    <div className="p-3 rounded-lg bg-secondary/40 border">
                      <p className="text-sm font-semibold text-foreground mb-1">Errata</p>
                      <p className="text-sm text-muted-foreground">Errors introduced during production (e.g., typesetting, formatting) that do not affect the scientific content or conclusions.</p>
                    </div>
                    <div className="p-3 rounded-lg bg-secondary/40 border">
                      <p className="text-sm font-semibold text-foreground mb-1">Corrigenda</p>
                      <p className="text-sm text-muted-foreground">Errors identified by authors that are significant enough to warrant public notice but do not fundamentally undermine the findings. Examples: incorrect statistical values, mislabelled figures, errors in supplementary data.</p>
                    </div>
                    <p className="text-xs text-muted-foreground italic">The original article remains in the published record with a note indicating a correction has been issued.</p>
                  </div>
                </div>

                {/* Expressions of Concern */}
                <div className="rounded-xl border-2 border-amber-500/40 p-5 bg-card hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-9 w-9 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
                      <AlertCircle className="h-4 w-4 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Expression of Concern</h3>
                      <span className="text-xs font-medium text-amber-600 dark:text-amber-400">Interim — investigation ongoing</span>
                    </div>
                  </div>
                  <div className="pl-12 space-y-2">
                    <p className="text-sm text-muted-foreground">Published when:</p>
                    {[
                      "There are grounds for concern but evidence is not yet conclusive",
                      "An investigation is ongoing and a final determination has not been reached",
                      "The author's institution has not responded to inquiries about alleged misconduct",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <ChevronRight className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Retraction */}
                <div className="rounded-xl border-2 border-red-500/40 p-5 bg-card hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-9 w-9 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0">
                      <XCircle className="h-4 w-4 text-red-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Retraction</h3>
                      <span className="text-xs font-medium text-red-600 dark:text-red-400">Severe — integrity fundamentally compromised</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground pl-12">
                    Reserved for situations where the integrity of the published work is fundamentally compromised and corrections cannot adequately address the problem. Indicates the research should not be relied upon and the scholarly record must be corrected.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. Investigation */}
            <section id="investigation">
              <SectionHeader number="3" title="Investigation Procedure" />
              <p className="text-muted-foreground mb-6">
                When a potential retraction is being considered, Afrika Scholar follows a structured investigation procedure. The process typically takes 30–90 days, depending on complexity and responsiveness of the parties involved.
              </p>
              <div className="space-y-3">
                {investigationSteps.map((step) => (
                  <div key={step.number} className="flex gap-4 p-4 rounded-lg bg-secondary/30 border">
                    <div className="flex flex-col items-center gap-1 shrink-0">
                      <div className="h-8 w-8 rounded-lg bg-accent flex items-center justify-center text-accent-foreground font-bold text-xs">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-3 flex-wrap mb-1">
                        <div className="flex items-center gap-2">
                          <step.icon className="h-4 w-4 text-accent" />
                          <p className="font-semibold text-foreground text-sm">{step.title}</p>
                        </div>
                        <span className="text-xs font-medium bg-accent/10 text-accent px-2.5 py-0.5 rounded-full shrink-0">
                          {step.timeline}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. Notification */}
            <section id="notification">
              <SectionHeader number="4" title="Public Notification Format" />
              <p className="text-muted-foreground mb-6">
                Retraction notices published by Afrika Scholar are comprehensive and standardised to ensure clarity for readers and indexing services.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-xl border p-5 bg-card">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <FileX className="h-4 w-4 text-accent" /> Each notice includes
                  </h3>
                  <ul className="space-y-2">
                    {noticeIncludes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border p-5 bg-card">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Bell className="h-4 w-4 text-accent" /> How notices are distributed
                  </h3>
                  <ul className="space-y-2">
                    {noticeDistribution.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* 5. Transparency */}
            <section id="transparency">
              <SectionHeader number="5" title="Transparency Standards" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Afrika Scholar is committed to full transparency in its correction and retraction processes. We believe that transparent handling of post-publication issues strengthens rather than undermines public trust in scholarly publishing.
                </p>
                <div className="bg-secondary/50 rounded-xl p-5 border-l-4 border-accent">
                  <p className="text-sm font-medium text-foreground">No vague language.</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    We avoid notices such as "this article has been retracted at the request of the authors" without further explanation. Where legal constraints prevent full disclosure, we state this clearly and provide as much information as legally permissible.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="p-4 rounded-xl border bg-card">
                    <p className="text-sm font-semibold text-foreground mb-1">Retraction decisions are final</p>
                    <p className="text-sm text-muted-foreground">Retraction decisions are not subject to appeal.</p>
                  </div>
                  <div className="p-4 rounded-xl border bg-card">
                    <p className="text-sm font-semibold text-foreground mb-1">Author responses considered</p>
                    <p className="text-sm text-muted-foreground">Authors may submit a response or commentary which may be published alongside the retraction if it provides substantive additional information.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 6. Preservation */}
            <section id="preservation">
              <SectionHeader number="6" title="Record Preservation" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Retracted articles are not deleted from the published record. They are preserved in their original form with clear, prominent markings indicating retraction.
                </p>
                <div className="space-y-3">
                  {[
                    { icon: Archive, title: "Scholarly record remains complete", desc: "The retraction and its reasons are permanently documented for the benefit of future researchers." },
                    { icon: AlertTriangle, title: "Visible watermarking", desc: "Retracted articles are clearly watermarked or annotated with \"RETRACTED\" across each page. The retraction notice is displayed prominently whenever the article is accessed." },
                    { icon: CheckCircle2, title: "Metadata updated everywhere", desc: "The article's metadata is updated in all indexing services and databases to reflect the retraction, so citing researchers can identify it." },
                    { icon: Archive, title: "Permanent archives maintained", desc: "Afrika Scholar maintains permanent archives of all published content, including retracted articles and associated notices, preserved in compliance with digital preservation standards." },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4 p-4 rounded-lg bg-secondary/30 border">
                      <div className="h-9 w-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                        <item.icon className="h-4 w-4 text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm mb-1">{item.title}</p>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA */}
            <div className="rounded-2xl bg-primary p-8 text-primary-foreground text-center">
              <h3 className="text-xl font-bold mb-2">Questions About a Published Article?</h3>
              <p className="text-primary-foreground/80 mb-6">
                Contact the editorial team or submit your manuscript knowing our correction and retraction standards are among the most transparent in African academic publishing.
              </p>
              <Button className="bg-accent hover:bg-accent/90" asChild>
                <Link to="/publishing/submit">
                  Submit a Manuscript <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
}

function SectionHeader({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="h-9 w-9 rounded-lg bg-accent flex items-center justify-center text-accent-foreground font-bold text-sm shrink-0">
        {number}
      </div>
      <h2 className="text-2xl font-bold text-foreground">{title}</h2>
    </div>
  );
}
