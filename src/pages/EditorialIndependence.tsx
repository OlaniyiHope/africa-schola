import { Link } from "react-router-dom";
import {
  Shield,
  Scale,
  Building2,
  Users,
  Lock,
  Eye,
  MessageSquare,
  ChevronRight,
  ArrowLeft,
  Download,
  CheckCircle2,
  AlertTriangle,
  Landmark,
  BadgeCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout";

const sections = [
  { id: "definition", label: "Definition", icon: Shield },
  { id: "financial", label: "Financial Separation", icon: Scale },
  { id: "governance", label: "Governance Structure", icon: Landmark },
  { id: "board-authority", label: "Editorial Board Authority", icon: Users },
  { id: "autonomy", label: "Decision Autonomy", icon: Lock },
  { id: "conflict", label: "Conflict of Interest", icon: AlertTriangle },
  { id: "transparency", label: "Transparency Commitments", icon: Eye },
  { id: "complaints", label: "Complaints & Appeals", icon: MessageSquare },
];

const financialSafeguards = [
  {
    title: "Article Processing Charges",
    desc: "APCs, where applicable, are never linked to editorial decisions. Editors are not informed of authors' payment status during the review process. Fee waivers do not affect editorial decisions.",
  },
  {
    title: "Advertising & Sponsorship Revenue",
    desc: "Commercial activities are managed entirely separately from editorial operations. Sales and marketing staff have no access to editorial systems and no influence over editorial decisions.",
  },
  {
    title: "Staff Compensation",
    desc: "Editorial staff are not evaluated or compensated based on the journal's commercial performance. Their sole accountability is to academic quality and integrity.",
  },
  {
    title: "Institutional Sponsors",
    desc: "Sponsors who support journal operations through financial contributions, facilities, or staff do not receive preferential treatment. Their manuscripts undergo the same rigorous peer review as all other submissions.",
  },
];

const governanceRoles = [
  {
    icon: BadgeCheck,
    role: "Editor-in-Chief",
    authority: "Ultimate authority",
    desc: "Has ultimate authority over all editorial decisions. Reports to the Editorial Advisory Board on matters of policy and quality, but retains sole decision-making authority over individual manuscripts.",
  },
  {
    icon: Users,
    role: "Editorial Advisory Board",
    authority: "Strategic guidance",
    desc: "Provides strategic guidance on journal scope, editorial policy, and quality standards. Selected for academic expertise and professional integrity. Does not intervene in decisions regarding individual manuscripts.",
  },
  {
    icon: Building2,
    role: "Afrika Scholar Management",
    authority: "Administrative support only",
    desc: "Provides administrative, technical, and financial support to journals but does not participate in or influence editorial decisions. Role is to ensure editors have the resources needed to perform their duties effectively.",
  },
];

const transparencyCommitments = [
  "Publishing clear and detailed editorial policies",
  "Disclosing the peer review model used by each journal",
  "Providing information about acceptance rates and review timelines",
  "Publishing the names and affiliations of editorial board members",
  "Disclosing any institutional or organisational sponsors of the journal",
  "Publishing clear notices when errors are identified in published articles",
  "Subject to regular external audit with results made available to stakeholders",
];

const conflictRegister = [
  "Editorial board members' institutional affiliations",
  "Consulting relationships",
  "Financial interests in companies or organisations that might benefit from published research",
  "Personal relationships with frequent authors or reviewers",
];

export default function EditorialIndependencePage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[320px] bg-primary">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="editorial-grid" width="8" height="8" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="0.4" fill="white" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#editorial-grid)" />
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
            Editorial Independence
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mb-8">
            Afrika Scholar's commitment to ensuring all editorial decisions are made solely on academic merit — free from financial, institutional, or external influence.
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

            {/* 1. Definition */}
            <section id="definition">
              <SectionHeader number="1" title="Definition of Editorial Independence" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Editorial independence at Afrika Scholar means that all decisions regarding the selection, peer review, and publication of manuscripts are made solely on the basis of academic merit, scientific validity, and relevance to the journal's scope. No external party — including funders, advertisers, institutional sponsors, or Afrika Scholar's own management — may influence editorial decisions.
                </p>
                <p>
                  This principle is fundamental to the credibility of academic publishing. Without genuine editorial independence, the scholarly record cannot be trusted, and the peer review process loses its meaning.
                </p>
                <div className="bg-secondary/50 rounded-xl p-5 border-l-4 border-accent">
                  <p className="text-sm font-medium text-foreground">
                    Afrika Scholar regards editorial independence as an inviolable principle that underpins every aspect of our publishing operations — including the selection of topics for special issues, appointment of guest editors, handling of correspondence and commentary, and implementation of corrections and retractions.
                  </p>
                </div>
                <p>
                  Editors have full authority to make these decisions based on their professional judgment, without interference from any internal or external stakeholder.
                </p>
              </div>
            </section>

            {/* 2. Financial Separation */}
            <section id="financial">
              <SectionHeader number="2" title="Separation from Financial Influence" />
              <p className="text-muted-foreground mb-6">
                Afrika Scholar maintains a strict separation between its financial operations and editorial decision-making. The following safeguards prevent financial considerations from influencing editorial decisions:
              </p>
              <div className="space-y-4">
                {financialSafeguards.map((item) => (
                  <div key={item.title} className="rounded-xl border p-5 bg-card hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="h-9 w-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                        <Scale className="h-4 w-4 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. Governance */}
            <section id="governance">
              <SectionHeader number="3" title="Governance Structure" />
              <p className="text-muted-foreground mb-6">
                Afrika Scholar's governance structure protects and reinforces editorial independence through clear separation of responsibilities and transparent accountability mechanisms.
              </p>
              <div className="space-y-4">
                {governanceRoles.map((g) => (
                  <div key={g.role} className="rounded-xl border p-5 bg-card hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                        <g.icon className="h-5 w-5 text-accent" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 flex-wrap mb-1">
                          <h3 className="font-semibold text-foreground">{g.role}</h3>
                          <span className="text-xs font-medium bg-accent/10 text-accent px-3 py-1 rounded-full shrink-0">
                            {g.authority}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{g.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. Board Authority */}
            <section id="board-authority">
              <SectionHeader number="4" title="Editorial Board Authority" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The editorial board of each Afrika Scholar journal holds significant authority in shaping the journal's direction and maintaining its quality standards. Board members contribute to setting editorial policy, defining journal scope, identifying emerging research areas, and recommending changes to review processes.
                </p>
                <p>
                  Board members may be called upon to handle manuscripts in their areas of expertise, to provide second opinions on controversial decisions, and to mediate disputes between reviewers. In all these roles, board members act independently and base their judgments solely on academic considerations.
                </p>
                <div className="grid sm:grid-cols-3 gap-3 mt-2">
                  {[
                    { label: "Recommend policy changes", icon: CheckCircle2 },
                    { label: "Request reviews of editorial practices", icon: CheckCircle2 },
                    { label: "Raise concerns about editorial independence", icon: CheckCircle2 },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-2 p-3 rounded-lg bg-secondary/30 border">
                      <item.icon className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm">{item.label}</span>
                    </div>
                  ))}
                </div>
                <p>
                  These recommendations are taken seriously by both the Editor-in-Chief and Afrika Scholar's management.
                </p>
              </div>
            </section>

            {/* 5. Autonomy */}
            <section id="autonomy">
              <SectionHeader number="5" title="Decision Autonomy" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Editors at all levels — from the Editor-in-Chief to handling editors and associate editors — have full autonomy to make editorial decisions within their areas of responsibility.
                </p>
                <div className="bg-secondary/50 rounded-xl p-5 border-l-4 border-accent">
                  <p className="text-sm font-medium text-foreground mb-3">Full autonomy includes the right to:</p>
                  <div className="space-y-2">
                    {[
                      "Accept or reject manuscripts",
                      "Request revisions",
                      "Select reviewers",
                      "Determine the priority and timing of publication",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <p>
                  No individual or organisation outside the editorial team may override, reverse, or unduly influence an editorial decision. If concerns about a specific decision arise, they must be addressed through the established appeals process rather than through direct pressure on editors.
                </p>
                <p>
                  Editors who consistently fail to meet quality standards may be replaced through the journal's governance procedures, but individual decisions may not be overridden by management.
                </p>
              </div>
            </section>

            {/* 6. Conflict of Interest */}
            <section id="conflict">
              <SectionHeader number="6" title="Conflict of Interest" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  All editors, board members, and staff involved in editorial operations must disclose any potential conflicts of interest that could affect their impartiality. Conflicts may arise from personal relationships, financial interests, institutional affiliations, intellectual commitments, or competitive interests.
                </p>
                <p>
                  When a conflict of interest is identified, the affected individual must recuse themselves from the editorial process for the relevant manuscript. An alternate editor with no conflicts is assigned to handle the submission. All conflict-of-interest declarations are documented and available for audit.
                </p>
                <div className="rounded-xl border p-5 bg-card">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-accent" /> Conflict of Interest Register
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Afrika Scholar maintains a register of editorial conflicts of interest, reviewed annually by the Editorial Advisory Board. This register includes:
                  </p>
                  <div className="space-y-2">
                    {conflictRegister.map((item) => (
                      <div key={item} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30">
                        <ChevronRight className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 7. Transparency */}
            <section id="transparency">
              <SectionHeader number="7" title="Transparency Commitments" />
              <p className="text-muted-foreground mb-6">
                Afrika Scholar is committed to transparency in all aspects of editorial operations. Our transparency commitments include:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {transparencyCommitments.map((item) => (
                  <div key={item} className="flex items-start gap-3 p-3 rounded-lg border bg-card hover:bg-secondary/30 transition-colors">
                    <Eye className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 8. Complaints */}
            <section id="complaints">
              <SectionHeader number="8" title="Complaint & Appeals Mechanism" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Afrika Scholar provides clear mechanisms for addressing complaints about editorial conduct, perceived violations of editorial independence, or concerns about the fairness of editorial decisions.
                </p>
                <div className="space-y-3">
                  {[
                    { label: "Submit complaint", desc: "Complaints may be submitted in writing to the Editor-in-Chief or, if the complaint involves the Editor-in-Chief, to the Chair of the Editorial Advisory Board." },
                    { label: "Acknowledgement", desc: "All complaints are acknowledged within 5 business days." },
                    { label: "Investigation", desc: "Complaints are investigated thoroughly within 30 business days. The process is fair, confidential, and complainants are protected from retaliation." },
                    { label: "Outcome & remediation", desc: "The outcome of investigations is communicated to all relevant parties. Where complaints are upheld, appropriate remedial actions are taken — including process changes, additional training, or disciplinary measures." },
                  ].map((step, i) => (
                    <div key={step.label} className="flex gap-4 p-4 rounded-lg bg-secondary/30 border">
                      <div className="h-8 w-8 rounded-lg bg-accent flex items-center justify-center text-accent-foreground font-bold text-xs shrink-0">
                        0{i + 1}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm mb-1">{step.label}</p>
                        <p className="text-sm text-muted-foreground">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA */}
            <div className="rounded-2xl bg-primary p-8 text-primary-foreground text-center">
              <h3 className="text-xl font-bold mb-2">Questions About Editorial Process?</h3>
              <p className="text-primary-foreground/80 mb-6">
                Reach out to the editorial team or submit your manuscript with confidence in our independent review process.
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
