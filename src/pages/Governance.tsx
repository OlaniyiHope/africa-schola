import { Link } from "react-router-dom";
import {
  Building2,
  Scale,
  Eye,
  BadgeCheck,
  AlertTriangle,
  DollarSign,
  MessageSquare,
  ShieldCheck,
  ChevronRight,
  ArrowLeft,
  CheckCircle2,
  XCircle,
  Flag,
  PhoneCall,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout";

const sections = [
  { id: "editorial-financial", label: "Editorial & Financial Separation", icon: Scale },
  { id: "editorial-independence", label: "Editorial Independence", icon: Eye },
  { id: "indexing", label: "Indexing Readiness & Quality", icon: BadgeCheck },
  { id: "conflict", label: "Conflict of Interest Policy", icon: AlertTriangle },
  { id: "revenue", label: "Revenue Transparency", icon: DollarSign },
  { id: "appeals", label: "Appeals & Complaints", icon: MessageSquare },
  { id: "oversight", label: "Oversight Structure", icon: ShieldCheck },
];

const separatedFrom = [
  "Subscription payments",
  "Institutional licensing agreements",
  "Publishing service purchases",
  "Platform transactions",
];

const editorialStandards = [
  "Conflict of interest disclosure requirements",
  "Ethical review standards",
  "Independent decision-making authority",
  "Transparent reporting structures",
];

const indexingCriteria = [
  "Transparent peer review models",
  "Clear governance documentation",
  "Defined editorial boards",
  "Ethical publication policies",
  "Structured archiving processes",
];

const conflictDisclosures = [
  "Financial relationships",
  "Institutional affiliations",
  "Personal conflicts",
  "Competing academic interests",
];

const revenueStreams = [
  { label: "Research Intelligence subscriptions", note: "Publeesh platform access tiers" },
  { label: "Institutional licensing", note: "Journal hosting & network memberships" },
  { label: "Optional premium publishing features", note: "Enhanced visibility & formatting" },
  { label: "Network coordination fees", note: "Partner institution onboarding" },
];

const appealActions = [
  "Appeal editorial decisions",
  "Report misconduct",
  "Raise governance concerns",
  "Request clarification of process",
];

const oversightGoals = [
  { icon: Eye, label: "Protect editorial neutrality" },
  { icon: ShieldCheck, label: "Prevent ethical breaches" },
  { icon: Building2, label: "Maintain institutional credibility" },
  { icon: CheckCircle2, label: "Ensure platform-wide accountability" },
];

export default function GovernancePage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[320px] bg-primary">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="gov-grid" width="8" height="8" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="0.4" fill="white" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#gov-grid)" />
          </svg>
        </div>
        <div className="container-section relative section-padding text-primary-foreground">
          <Link
            to="/compliance"
            className="inline-flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-accent mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Compliance & Governance
          </Link>
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 text-accent px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            <Building2 className="h-3.5 w-3.5" /> Governance Framework
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-up max-w-3xl leading-tight">
            Institutional & Operational Governance
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mb-4 leading-relaxed">
            Afrika Scholar operates as a structured academic infrastructure platform. Governance mechanisms ensure separation between editorial decisions, financial transactions, institutional partnerships, and operational functions.
          </p>
          <p className="text-sm font-semibold text-accent">
            Our governance framework protects academic credibility while enabling scalable institutional collaboration.
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

            {/* 1. Editorial & Financial Separation */}
            <section id="editorial-financial">
              <SectionHeader number="1" title="Separation of Editorial & Financial Decisions" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Editorial decisions at Afrika Scholar are structurally isolated from all financial activity on the platform. No form of financial participation — at any level — influences the peer review or publication process.
                </p>
                <p className="text-sm font-semibold text-foreground">Editorial decisions are made independently of:</p>
                <div className="space-y-2">
                  {separatedFrom.map((item) => (
                    <div key={item} className="flex items-start gap-3 p-3 rounded-lg bg-red-500/5 border border-red-500/20">
                      <XCircle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="grid sm:grid-cols-2 gap-3 mt-2">
                  <div className="bg-secondary/50 rounded-xl p-5 border-l-4 border-accent">
                    <p className="text-sm font-semibold text-foreground">Not pay-to-publish.</p>
                    <p className="text-sm text-muted-foreground mt-1">Afrika Scholar does not operate on a pay-to-publish model under any circumstances.</p>
                  </div>
                  <div className="bg-secondary/50 rounded-xl p-5 border-l-4 border-primary">
                    <p className="text-sm font-semibold text-foreground">Financial participation ≠ peer review outcome.</p>
                    <p className="text-sm text-muted-foreground mt-1">No payment or partnership influences journal acceptance decisions.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. Editorial Independence */}
            <section id="editorial-independence">
              <SectionHeader number="2" title="Editorial Independence" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  All editors and reviewers across Afrika Scholar journals operate under a framework that preserves their full decision-making autonomy. Commercial considerations have no place in the editorial process.
                </p>
                <p className="text-sm font-semibold text-foreground">Editors and reviewers operate under:</p>
                <div className="space-y-2">
                  {editorialStandards.map((item) => (
                    <div key={item} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30 border">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-accent/10 border border-accent/20 rounded-xl p-5">
                  <p className="text-sm font-semibold text-foreground">
                    Editorial autonomy is protected from commercial influence.
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    For full details see our{" "}
                    <Link to="/framework/editorial-independence" className="text-accent hover:underline">
                      Editorial Independence Framework →
                    </Link>
                  </p>
                </div>
              </div>
            </section>

            {/* 3. Indexing Readiness */}
            <section id="indexing">
              <SectionHeader number="3" title="Indexing Readiness & Quality Standards" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  All journals hosted on Afrika Scholar are structured to meet the indexing requirements of major academic databases from their inception — not retrofitted after growth. Quality is built in, not bolted on.
                </p>
                <p className="text-sm font-semibold text-foreground">Indexing readiness includes:</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {indexingCriteria.map((item) => (
                    <div key={item} className="flex items-start gap-3 p-4 rounded-xl border bg-card hover:shadow-sm transition-shadow">
                      <BadgeCheck className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-secondary/50 rounded-xl p-5 border-l-4 border-accent">
                  <p className="text-sm font-semibold text-foreground">Quality precedes scale.</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Afrika Scholar prioritises indexing-ready governance structures — including DOAJ, AJOL, Scopus, and Web of Science criteria — before expanding journal capacity.
                  </p>
                </div>
              </div>
            </section>

            {/* 4. Conflict of Interest */}
            <section id="conflict">
              <SectionHeader number="4" title="Conflict of Interest Policy" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  All individuals involved in editorial, review, or governance functions at Afrika Scholar are required to proactively disclose any interests that could — or could be perceived to — compromise their impartiality.
                </p>
                <p className="text-sm font-semibold text-foreground">Editors, reviewers, and contributors must disclose:</p>
                <div className="space-y-2">
                  {conflictDisclosures.map((item) => (
                    <div key={item} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30 border">
                      <AlertTriangle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <p>
                  Conflict disclosures are evaluated to maintain integrity in review and publication processes. Individuals with identified conflicts must recuse themselves from relevant editorial decisions and are replaced by unconnected alternates.
                </p>
                <Button size="sm" variant="outline" className="gap-2 border-accent/30 text-accent hover:bg-accent/5" asChild>
                  <Link to="/framework/editorial-independence#conflict">
                    View Full Conflict of Interest Policy <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                </Button>
              </div>
            </section>

            {/* 5. Revenue Transparency */}
            <section id="revenue">
              <SectionHeader number="5" title="Revenue Transparency Model" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Afrika Scholar maintains clear, publicly disclosed revenue channels. All revenue streams are operationally and structurally separated from editorial governance to prevent any financial interest from influencing academic decision-making.
                </p>
                <div className="overflow-hidden rounded-xl border">
                  <table className="w-full text-sm">
                    <thead className="bg-primary text-primary-foreground">
                      <tr>
                        <th className="text-left px-5 py-3 font-semibold">Revenue Stream</th>
                        <th className="text-left px-5 py-3 font-semibold">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {revenueStreams.map((r, i) => (
                        <tr key={r.label} className={i % 2 === 0 ? "bg-background" : "bg-secondary/30"}>
                          <td className="px-5 py-3 font-medium text-foreground">{r.label}</td>
                          <td className="px-5 py-3 text-muted-foreground">{r.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="bg-secondary/50 rounded-xl p-5 border-l-4 border-accent">
                    <p className="text-sm font-semibold text-foreground">Revenue separated from governance.</p>
                    <p className="text-sm text-muted-foreground mt-1">Financial operations are managed entirely independently of editorial systems and staff.</p>
                  </div>
                  <div className="bg-secondary/50 rounded-xl p-5 border-l-4 border-primary">
                    <p className="text-sm font-semibold text-foreground">Transparency protects trust.</p>
                    <p className="text-sm text-muted-foreground mt-1">Revenue sources are disclosed to partners and audited regularly to maintain institutional confidence.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 6. Appeals */}
            <section id="appeals">
              <SectionHeader number="6" title="Appeals & Complaint Mechanism" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Afrika Scholar provides structured, accessible channels for authors, reviewers, and institutional partners to raise concerns or initiate formal processes. All submissions are reviewed under defined oversight procedures.
                </p>
                <p className="text-sm font-semibold text-foreground">Authors, reviewers, and institutional partners may:</p>
                <div className="space-y-2">
                  {appealActions.map((item) => (
                    <div key={item} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30 border">
                      <ChevronRight className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <p>All appeals are reviewed under structured oversight procedures with acknowledgement within 5 business days.</p>
                <div className="flex flex-wrap gap-3 mt-2">
                  <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2" asChild>
                    <Link to="/appeals">
                      <MessageSquare className="h-3.5 w-3.5" /> Appeal a Decision
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline" className="gap-2 border-foreground/20" asChild>
                    <Link to="/report-misconduct">
                      <Flag className="h-3.5 w-3.5" /> Report Misconduct
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline" className="gap-2 border-foreground/20" asChild>
                    <Link to="/contact">
                      <PhoneCall className="h-3.5 w-3.5" /> Contact Governance Team
                    </Link>
                  </Button>
                </div>
              </div>
            </section>

            {/* 7. Oversight Structure */}
            <section id="oversight">
              <SectionHeader number="7" title="Oversight Structure" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Afrika Scholar governance operates under defined oversight protocols applied consistently across all journals, institutional partnerships, and platform operations.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {oversightGoals.map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-3 p-4 rounded-xl border bg-card hover:shadow-md transition-shadow">
                      <div className="h-9 w-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                        <Icon className="h-4 w-4 text-accent" />
                      </div>
                      <span className="text-sm font-semibold text-foreground">{label}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-secondary/50 rounded-xl p-5 border-l-4 border-accent">
                  <p className="text-sm font-semibold text-foreground">Governance is proactive, not reactive.</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Afrika Scholar embeds governance structures before scaling operations — ensuring that accountability mechanisms are in place as the platform grows, not introduced in response to failures.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <div className="rounded-2xl bg-primary p-8 text-primary-foreground text-center">
              <h3 className="text-xl font-bold mb-2">Full Publishing Governance</h3>
              <p className="text-primary-foreground/80 mb-6">
                Explore the complete publishing standards framework — covering peer review, editorial independence, ethics, retraction, and open access policies.
              </p>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2" asChild>
                <Link to="/publishing-standards">
                  View Publishing Standards <ChevronRight className="h-4 w-4" />
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
