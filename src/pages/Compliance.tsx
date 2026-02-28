import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Shield,
  Scale,
  BookOpen,
  Brain,
  Building2,
  ChevronRight,
  ChevronDown,
  Download,
  FileText,
  Eye,
  ShieldCheck,
  RotateCcw,
  Users,
  AlertTriangle,
  Database,
  MessageSquare,
  Cpu,
  Flag,
  PhoneCall,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout";

// ─── Governance Cards ──────────────────────────────────────────────────────────

const governanceBlocks = [
  {
    icon: BookOpen,
    title: "Publishing Governance",
    color: "border-t-primary",
    iconBg: "bg-primary/10 text-primary",
    items: [
      "Peer Review Policy",
      "Editorial Independence",
      "Ethics & Malpractice",
      "Retraction Policy",
      "Open Access & Licensing",
    ],
    cta: "View Publishing Standards",
    ctaLink: "/standards",
  },
  {
    icon: Brain,
    title: "Responsible AI & Research Integrity",
    color: "border-t-accent",
    iconBg: "bg-accent/10 text-accent",
    items: [
      "AI usage limitations",
      "No academic substitution",
      "Citation accountability",
      "Dataset transparency",
      "Academic supervision responsibility",
    ],
    cta: "Read Responsible AI Policy",
    ctaLink: "/framework/academic-integrity",
  },
  {
    icon: Building2,
    title: "Institutional & Operational Governance",
    color: "border-t-primary",
    iconBg: "bg-primary/10 text-primary",
    items: [
      "Conflict of Interest Policy",
      "Revenue transparency",
      "Indexing readiness standards",
      "Appeals & complaints process",
      "Quality oversight",
    ],
    cta: "View Governance Details",
    ctaLink: "/framework/governance",
  },
];

// ─── Accordion Policies ────────────────────────────────────────────────────────

const policies = [
  {
    icon: Users,
    title: "Peer Review Governance",
    summary:
      "All Afrika Scholar journals operate under a rigorous peer review framework. Manuscripts are evaluated by at least two independent experts using single-blind, double-blind, or open review models as appropriate. Editorial decisions are based exclusively on academic merit, and no commercial or institutional pressure is permitted to influence outcomes.",
    link: "/framework/peer-review",
    linkLabel: "Read Full Peer Review Policy",
  },
  {
    icon: Eye,
    title: "Editorial Independence Framework",
    summary:
      "Editors at all levels retain full autonomy over publication decisions. No funder, advertiser, sponsor, or member of Afrika Scholar management may override or influence editorial judgments. A conflict of interest register is maintained and reviewed annually by the Editorial Advisory Board.",
    link: "/framework/editorial-independence",
    linkLabel: "Read Full Editorial Independence Policy",
  },
  {
    icon: ShieldCheck,
    title: "Research Ethics & Malpractice",
    summary:
      "Afrika Scholar maintains zero tolerance for plagiarism, data fabrication, falsification, gift authorship, and duplicate submission. All manuscripts are screened using plagiarism detection software, and confirmed misconduct is handled in accordance with COPE guidelines, including retraction and institutional notification where appropriate.",
    link: "/framework/ethics",
    linkLabel: "Read Full Ethics & Malpractice Policy",
  },
  {
    icon: Cpu,
    title: "Responsible AI Policy",
    summary:
      "Publeesh AI tools are designed to support and structure scholarly work — not to replace it. Authors remain fully responsible for the academic integrity of their submissions. AI-generated content must be reviewed, refined, and verified by human authors. Afrika Scholar does not guarantee publication outcomes based on AI tool usage.",
    link: "/framework/academic-integrity",
    linkLabel: "Read Full Responsible AI Policy",
  },
  {
    icon: Scale,
    title: "Conflict of Interest Policy",
    summary:
      "All editors, reviewers, board members, and staff are required to disclose any financial, professional, or personal interests that may affect their impartiality. Individuals with identified conflicts must recuse themselves from relevant editorial processes. Declarations are documented and subject to audit.",
    link: "/framework/editorial-independence#conflict",
    linkLabel: "Read Full Conflict of Interest Policy",
  },
  {
    icon: Database,
    title: "Data & Privacy Governance",
    summary:
      "Afrika Scholar is committed to responsible data management. Research data supporting published findings must be made available to the fullest extent consistent with ethical and legal constraints. A Data Availability Statement is required in all manuscripts. Personal data submitted through the platform is handled in accordance with applicable data protection regulations.",
    link: "/framework/peer-review#ethics",
    linkLabel: "Read Full Data & Privacy Policy",
  },
  {
    icon: MessageSquare,
    title: "Appeals & Complaints Procedure",
    summary:
      "Authors may formally appeal editorial decisions within 30 days of notification, on grounds of factual reviewer error, procedural irregularity, or demonstrable bias. Complaints about editorial conduct or policy violations may be submitted in writing to the Editor-in-Chief or, where the Editor-in-Chief is implicated, to the Chair of the Editorial Advisory Board. All complaints are acknowledged within 5 business days.",
    link: "/appeals",
    linkLabel: "Submit an Appeal",
  },
];

// ─── AI Declaration Points ─────────────────────────────────────────────────────

const aiDeclarations = [
  {
    icon: Brain,
    heading: "AI supports structure, not scholarship",
    desc: "Publeesh AI tools assist with drafting, referencing, and structuring research. They do not generate academic conclusions, fabricate data, or substitute original intellectual work.",
  },
  {
    icon: ShieldCheck,
    heading: "Users remain fully responsible",
    desc: "Every scholar, student, or researcher using Publeesh retains full responsibility for the academic integrity, accuracy, and originality of their submitted work.",
  },
  {
    icon: AlertTriangle,
    heading: "No guaranteed publication",
    desc: "Use of Publeesh AI tools does not confer any advantage in the peer review process or guarantee acceptance for publication in any Afrika Scholar journal.",
  },
  {
    icon: CheckCircle2,
    heading: "Human review is mandatory",
    desc: "All AI-assisted output must be reviewed, critically evaluated, and substantively refined by human authors before submission or use in any academic context.",
  },
];

// ─── Accordion Item ────────────────────────────────────────────────────────────

function AccordionItem({ policy }: { policy: typeof policies[0] }) {
  const [open, setOpen] = useState(false);
  const Icon = policy.icon;

  return (
    <div className={`border rounded-xl overflow-hidden transition-shadow ${open ? "shadow-md" : ""}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-secondary/30 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
            <Icon className="h-4 w-4 text-accent" />
          </div>
          <span className="font-semibold text-foreground">{policy.title}</span>
        </div>
        <ChevronDown
          className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 border-t bg-secondary/10">
          <p className="text-sm text-muted-foreground leading-relaxed mt-4 mb-4">
            {policy.summary}
          </p>
          <Button size="sm" variant="outline" className="gap-2 border-accent/30 text-accent hover:bg-accent/5" asChild>
            <Link to={policy.link}>
              {policy.linkLabel} <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function CompliancePage() {
  return (
    <Layout>

      {/* ── 1. Hero ── */}
      <section className="relative overflow-hidden bg-primary min-h-[340px]">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="compliance-grid" width="8" height="8" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="0.4" fill="white" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#compliance-grid)" />
          </svg>
        </div>
        <div className="container-section relative section-padding text-primary-foreground">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-5 w-5 text-accent" />
              <p className="text-xs font-bold uppercase tracking-widest text-accent">
                Governance & Compliance
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Compliance & Governance Framework
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mb-8 leading-relaxed">
              Afrika Scholar operates under structured academic governance principles designed to uphold peer review integrity, ethical publishing standards, responsible AI usage, and institutional transparency.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2">
                <Download className="h-4 w-4" /> Download Governance Overview
              </Button>
              <p className="text-xs text-primary-foreground/50">
                Last Updated: February 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Introduction ── */}
      <section className="container-section py-16 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-9 w-9 rounded-lg bg-accent flex items-center justify-center shrink-0">
            <FileText className="h-4 w-4 text-accent-foreground" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Our Commitment to Academic Integrity</h2>
        </div>
        <div className="pl-12 space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Afrika Scholar is built on the conviction that credible academic publishing must be free from commercial distortion. We are not a pay-to-publish platform. Editorial decisions are never influenced by whether an author has paid a processing charge, and fee waivers are always available to those who need them.
          </p>
          <p>
            Peer review is the cornerstone of our journals — never compromised, never accelerated for commercial reasons, and always conducted by qualified independent experts. Our multi-model review system (single-blind, double-blind, and open review) is designed to ensure that research is evaluated on merit alone.
          </p>
          <p>
            Artificial intelligence, through our Publeesh platform, enhances the research workflow — supporting structured drafting, citation guidance, and global data access. It does not replace scholarship, generate academic conclusions, or provide any advantage in the peer review process.
          </p>
          <p>
            Every Afrika Scholar journal is built to meet the indexing criteria of DOAJ, Scopus, Web of Science, and AJOL from inception. Governance is not an afterthought — it is central to how the platform operates.
          </p>
        </div>
      </section>

      {/* ── 3. Governance Cards ── */}
      <section className="bg-secondary/30 py-16">
        <div className="container-section">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Governance Structure</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Three interlocking governance frameworks underpin every aspect of Afrika Scholar's operations.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {governanceBlocks.map((block) => {
              const Icon = block.icon;
              return (
                <div
                  key={block.title}
                  className={`rounded-2xl border-t-4 ${block.color} bg-background p-6 flex flex-col hover:shadow-lg transition-shadow`}
                >
                  <div className={`h-11 w-11 rounded-xl ${block.iconBg} flex items-center justify-center mb-4`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-foreground text-lg mb-4">{block.title}</h3>
                  <ul className="space-y-2 flex-1 mb-6">
                    {block.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="gap-2 border-accent/30 text-accent hover:bg-accent/5 w-full justify-between" asChild>
                    <Link to={block.ctaLink}>
                      {block.cta} <ChevronRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. Expandable Policy Sections ── */}
      <section className="container-section py-16 max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Policy Reference</h2>
          <p className="text-muted-foreground">Expand any section for a summary and link to the full policy document.</p>
        </div>
        <div className="space-y-3">
          {policies.map((policy) => (
            <AccordionItem key={policy.title} policy={policy} />
          ))}
        </div>
      </section>

      {/* ── 5. Responsible AI Declaration ── */}
      <section className="bg-secondary/30 py-16">
        <div className="container-section max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              <Cpu className="h-3.5 w-3.5" /> Publeesh AI
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Responsible AI Declaration</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Afrika Scholar's AI tools are governed by strict principles that place scholarship first and technology second.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {aiDeclarations.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.heading} className="flex gap-4 p-5 rounded-xl border bg-background hover:shadow-md transition-shadow">
                  <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">{item.heading}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2" asChild>
              <Link to="/publeesh">
                Explore Research Intelligence <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── 6. Report / Appeal ── */}
      <section className="bg-primary py-16">
        <div className="container-section max-w-4xl mx-auto text-center text-primary-foreground">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 text-primary-foreground/70 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            <Flag className="h-3.5 w-3.5" /> Governance Actions
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Report a Concern or Appeal a Decision</h2>
          <p className="text-primary-foreground/75 max-w-xl mx-auto mb-10">
            Afrika Scholar takes all reports of misconduct and editorial grievances seriously. Use the appropriate channel below to raise a concern, submit a formal appeal, or contact the governance team directly.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2"
              asChild
            >
              <Link to="/report-misconduct">
                <Flag className="h-4 w-4" /> Report Misconduct
              </Link>
            </Button>
            <Button
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2"
              asChild
            >
              <Link to="/appeals">
                <MessageSquare className="h-4 w-4" /> Appeal Editorial Decision
              </Link>
            </Button>
            <Button
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2"
              asChild
            >
              <Link to="/contact">
                <PhoneCall className="h-4 w-4" /> Contact Governance Team
              </Link>
            </Button>
          </div>
        </div>
      </section>

    </Layout>
  );
}
