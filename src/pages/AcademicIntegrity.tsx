import { Link } from "react-router-dom";
import {
  Brain,
  PenLine,
  BookMarked,
  BarChart3,
  FolderSearch,
  ShieldCheck,
  Users,
  Scale,
  Database,
  Building2,
  ChevronRight,
  ArrowLeft,
  XCircle,
  CheckCircle2,
  Globe,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout";

const sections = [
  { id: "structural-support", label: "AI as Structural Support", icon: Brain },
  { id: "peer-review", label: "No Bypass of Peer Review", icon: ShieldCheck },
  { id: "author-responsibility", label: "Author Responsibility", icon: PenLine },
  { id: "dataset-transparency", label: "Dataset Transparency", icon: Database },
  { id: "institutional-alignment", label: "Institutional Alignment", icon: Building2 },
  { id: "declaration", label: "Declaration", icon: Scale },
];

const aiSupports = [
  { icon: FolderSearch, label: "Research outlining" },
  { icon: PenLine, label: "Structural drafting" },
  { icon: BookMarked, label: "Citation formatting" },
  { icon: Database, label: "Dataset organisation" },
  { icon: BarChart3, label: "Comparative research insights" },
];

const noPeerBypass = [
  "Guarantee publication",
  "Expedite peer review decisions",
  "Influence editorial outcomes",
  "Override journal governance",
];

const authorResponsibilities = [
  "Accuracy of claims",
  "Proper citation of sources",
  "Ethical data usage",
  "Compliance with university integrity policies",
  "Alignment with journal submission standards",
];

const datasets = [
  { name: "World Health Organization (WHO)", abbr: "WHO" },
  { name: "World Bank", abbr: "WB" },
  { name: "International Monetary Fund (IMF)", abbr: "IMF" },
  { name: "UNESCO", abbr: "UNESCO" },
  { name: "OECD", abbr: "OECD" },
  { name: "Food and Agriculture Organization (FAO)", abbr: "FAO" },
];

const dataResponsibilities = [
  "Verifying relevance to research context",
  "Ensuring contextual interpretation",
  "Applying appropriate methodological frameworks",
];

const institutionalRespects = [
  "University academic integrity policies",
  "Institutional research ethics frameworks",
  "Supervisory oversight structures",
  "International publishing standards",
];

export default function AcademicIntegrityPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[320px] bg-primary">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="ai-grid" width="8" height="8" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="0.4" fill="white" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#ai-grid)" />
          </svg>
        </div>
        <div className="container-section relative section-padding text-primary-foreground">
          <Link
            to="/compliance"
            className="inline-flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-accent mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Compliance & Governance
          </Link>
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            <Brain className="h-3.5 w-3.5" /> Publeesh AI
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-up max-w-3xl leading-tight">
            Responsible AI & Research Integrity
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mb-6 leading-relaxed">
            Afrika Scholar integrates AI-powered research intelligence through Publeesh to enhance scholarly productivity while preserving academic rigour. Our AI systems are designed to support structure, clarity, and research efficiency — not to replace independent scholarship, peer review, or institutional supervision.
          </p>
          <p className="text-sm font-semibold text-accent">
            Responsible AI usage is a core principle of our governance model.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-section py-12">
        <div className="grid lg:grid-cols-[260px_1fr] gap-12 max-w-6xl mx-auto">

          {/* Sidebar */}
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

            {/* 1. Structural Support */}
            <section id="structural-support">
              <SectionHeader number="1" title="AI as Structural Support — Not Intellectual Substitution" />
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  AI tools within Afrika Scholar assist researchers with improving productivity and organisation. They are built as productivity layers — not as engines of original thought.
                </p>

                {/* What AI assists with */}
                <div>
                  <p className="text-sm font-semibold text-foreground mb-3">AI tools assist with:</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {aiSupports.map(({ icon: Icon, label }) => (
                      <div key={label} className="flex items-center gap-3 p-3 rounded-lg bg-accent/5 border border-accent/20">
                        <Icon className="h-4 w-4 text-accent shrink-0" />
                        <span className="text-sm font-medium text-foreground">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* What AI does not do */}
                <div className="bg-secondary/50 rounded-xl p-5 border-l-4 border-accent">
                  <p className="text-sm font-semibold text-foreground mb-2">
                    Intellectual originality, argument development, interpretation, and final scholarly responsibility remain entirely with the author.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    AI does not generate publish-ready scholarship without human refinement.
                  </p>
                </div>
              </div>
            </section>

            {/* 2. Peer Review */}
            <section id="peer-review">
              <SectionHeader number="2" title="No Bypass of Peer Review" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Use of Research Intelligence tools does not alter or accelerate the standard academic publishing process in any way. The following are explicitly not affected by AI tool usage:
                </p>
                <div className="space-y-2">
                  {noPeerBypass.map((item) => (
                    <div key={item} className="flex items-start gap-3 p-3 rounded-lg bg-red-500/5 border border-red-500/20">
                      <XCircle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-secondary/50 rounded-xl p-5 border-l-4 border-accent">
                  <p className="text-sm font-medium text-foreground">
                    All manuscripts undergo standard peer review processes in accordance with journal policies — regardless of whether Publeesh tools were used in preparation.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. Author Responsibility */}
            <section id="author-responsibility">
              <SectionHeader number="3" title="Author Responsibility & Citation Accountability" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The use of AI-assisted tools does not transfer any portion of scholarly responsibility away from the author. Authors remain fully responsible for:
                </p>
                <div className="space-y-2">
                  {authorResponsibilities.map((item) => (
                    <div key={item} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30 border">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-accent/10 border border-accent/20 rounded-xl p-5">
                  <p className="text-sm font-semibold text-foreground">
                    AI-assisted outputs must be reviewed, validated, and refined before submission.
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Submitting AI-generated content without critical human review and refinement constitutes a breach of Afrika Scholar's academic integrity standards.
                  </p>
                </div>
              </div>
            </section>

            {/* 4. Dataset Transparency */}
            <section id="dataset-transparency">
              <SectionHeader number="4" title="Dataset Transparency & Responsible Data Usage" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Publeesh provides structured access to institutional datasets from globally recognised organisations. These datasets are intended to support comparative research and structured analysis within scholarly workflows.
                </p>

                <div className="overflow-hidden rounded-xl border">
                  <table className="w-full text-sm">
                    <thead className="bg-primary text-primary-foreground">
                      <tr>
                        <th className="text-left px-5 py-3 font-semibold">Organisation</th>
                        <th className="text-left px-5 py-3 font-semibold">Abbreviation</th>
                      </tr>
                    </thead>
                    <tbody>
                      {datasets.map((d, i) => (
                        <tr key={d.abbr} className={i % 2 === 0 ? "bg-background" : "bg-secondary/30"}>
                          <td className="px-5 py-3 font-medium text-foreground">{d.name}</td>
                          <td className="px-5 py-3 text-muted-foreground">{d.abbr}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-sm font-semibold text-foreground">Researchers are responsible for:</p>
                <div className="space-y-2">
                  {dataResponsibilities.map((item) => (
                    <div key={item} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30 border">
                      <Globe className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-secondary/50 rounded-xl p-5 border-l-4 border-accent">
                  <p className="text-sm font-medium text-foreground">
                    Data retrieval does not replace critical analysis.
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Structured dataset access is a starting point for rigorous research — not a substitute for independent methodological reasoning and interpretation.
                  </p>
                </div>
              </div>
            </section>

            {/* 5. Institutional Alignment */}
            <section id="institutional-alignment">
              <SectionHeader number="5" title="Institutional Supervision Alignment" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Afrika Scholar operates as a complement to — not a replacement for — institutional academic supervision and regulatory frameworks. We respect and uphold:
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {institutionalRespects.map((item) => (
                    <div key={item} className="flex items-start gap-3 p-4 rounded-xl border bg-card hover:shadow-sm transition-shadow">
                      <Building2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <p>
                  Users are expected to ensure their usage of Publeesh AI tools aligns fully with the academic integrity policies and regulatory environments of their institutions. Afrika Scholar does not assume liability for misuse of AI tools in breach of institutional regulations.
                </p>
              </div>
            </section>

            {/* 6. Declaration */}
            <section id="declaration">
              <SectionHeader number="6" title="Declaration" />
              <div className="rounded-2xl bg-primary p-8 text-primary-foreground">
                <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                  <Brain className="h-3.5 w-3.5" /> Afrika Scholar Position
                </div>
                <blockquote className="text-lg font-semibold mb-6 leading-relaxed">
                  "Afrika Scholar promotes AI as a productivity and intelligence layer — not a shortcut to scholarship."
                </blockquote>
                <div className="space-y-3 mb-8">
                  {[
                    { icon: CheckCircle2, text: "AI enhances research workflows." },
                    { icon: Users, text: "It does not replace human reasoning or academic mentorship." },
                    { icon: ShieldCheck, text: "It does not compromise peer review integrity." },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-3 text-primary-foreground/90">
                      <Icon className="h-4 w-4 text-accent shrink-0" />
                      <span className="text-sm font-medium">{text}</span>
                    </div>
                  ))}
                </div>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2" asChild>
                  <Link to="/publeesh">
                    Explore Research Intelligence <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </section>

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
