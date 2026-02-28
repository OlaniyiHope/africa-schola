import { Link } from "react-router-dom";
import {
  Scale,
  ShieldAlert,
  FileX,
  Users,
  Copy,
  FlaskConical,
  Hospital,
  Building,
  Flag,
  Search,
  Gavel,
  ChevronRight,
  ArrowLeft,
  Download,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout";

const sections = [
  { id: "standards", label: "Research Ethics Standards", icon: Scale },
  { id: "plagiarism", label: "Plagiarism Policy", icon: FileX },
  { id: "fabrication", label: "Data Fabrication & Falsification", icon: ShieldAlert },
  { id: "authorship", label: "Authorship Criteria", icon: Users },
  { id: "duplicate", label: "Duplicate Submission", icon: Copy },
  { id: "human-animal", label: "Human & Animal Ethics", icon: FlaskConical },
  { id: "irb", label: "IRB Requirements", icon: Hospital },
  { id: "reporting", label: "Reporting Misconduct", icon: Flag },
  { id: "investigation", label: "Investigation Procedures", icon: Search },
  { id: "sanctions", label: "Sanctions", icon: Gavel },
];

const plagiarismTypes = [
  { label: "Verbatim copying without attribution" },
  { label: "Paraphrasing without attribution" },
  { label: "Self-plagiarism (reuse of own previously published work without disclosure)" },
  { label: "Mosaic plagiarism (combining phrases from different sources)" },
  { label: "Idea plagiarism (presenting another researcher's original concept as one's own)" },
];

const authorshipCriteria = [
  "Substantial contribution to the conception or design, or the acquisition, analysis, or interpretation of data",
  "Drafting the work or revising it critically for important intellectual content",
  "Final approval of the version to be published",
  "Agreement to be accountable for all aspects of the work",
];

const investigationSteps = [
  { number: "01", label: "Initial assessment", desc: "Assessment of the allegation to determine whether it warrants a full investigation." },
  { number: "02", label: "Evidence collection", desc: "Gathering of all relevant documentation, data, and correspondence related to the allegation." },
  { number: "03", label: "Notification & response", desc: "The accused party is notified and given a full opportunity to respond to the allegations." },
  { number: "04", label: "Expert consultation", desc: "Consultation with relevant experts or institutional officials as required." },
  { number: "05", label: "Deliberation & findings", desc: "Review of all evidence and responses to reach a determination of findings." },
  { number: "06", label: "Sanctions implementation", desc: "Implementation of appropriate actions proportionate to the severity of confirmed misconduct." },
];

const sanctions = [
  { label: "Formal warning", severity: "Low" },
  { label: "Rejection of the manuscript in question", severity: "Low" },
  { label: "Retraction of a published article", severity: "Medium" },
  { label: "Ban from submitting to or reviewing for Afrika Scholar journals", severity: "Medium" },
  { label: "Notification of the individual's institution and/or funding body", severity: "High" },
  { label: "Public notification of the misconduct", severity: "High" },
];

const severityColor: Record<string, string> = {
  Low: "bg-amber-500/10 border-amber-500/30 text-amber-700 dark:text-amber-400",
  Medium: "bg-orange-500/10 border-orange-500/30 text-orange-700 dark:text-orange-400",
  High: "bg-red-500/10 border-red-500/30 text-red-700 dark:text-red-400",
};

export default function EthicsPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[320px] bg-primary">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="ethics-grid" width="8" height="8" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="0.4" fill="white" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#ethics-grid)" />
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
            Ethics & Malpractice Policy
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mb-8">
            Afrika Scholar's comprehensive ethical standards — aligned with COPE guidelines and international frameworks, with zero tolerance for plagiarism, fabrication, and research misconduct.
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

            {/* 1. Research Ethics Standards */}
            <section id="standards">
              <SectionHeader number="1" title="Research Ethics Standards" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Afrika Scholar requires all published research to adhere to the highest ethical standards, informed by international frameworks including the Declaration of Helsinki, the Belmont Report, COPE guidelines, and applicable national and institutional regulations in the countries where research is conducted.
                </p>
                <p>
                  Authors are expected to conduct and report their research honestly and transparently. Research must be designed to minimise risk to participants, respect the rights and dignity of all individuals involved, and contribute meaningfully to knowledge. The ethical conduct of research is not merely a regulatory requirement but a fundamental professional obligation.
                </p>
                <div className="bg-secondary/50 rounded-xl p-5 border-l-4 border-accent">
                  <p className="text-sm font-medium text-foreground">
                    Afrika Scholar recognises the unique ethical considerations that arise in African research contexts — including community consent, cultural sensitivity, benefit-sharing with research communities, and the responsible use of indigenous knowledge. Researchers are encouraged to address these considerations explicitly in their manuscripts.
                  </p>
                </div>
              </div>
            </section>

            {/* 2. Plagiarism */}
            <section id="plagiarism">
              <SectionHeader number="2" title="Plagiarism Policy" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Plagiarism — the presentation of another person's ideas, words, or work as one's own without appropriate acknowledgement — is a serious violation of academic integrity. Afrika Scholar maintains a zero-tolerance policy for deliberate plagiarism.
                </p>
                <p>
                  All manuscripts are screened using plagiarism detection software. Manuscripts with significant textual overlap with previously published work (typically exceeding 15% similarity, excluding properly cited quotations and standard methodological descriptions) are flagged for investigation.
                </p>
                <div className="rounded-xl border p-5 bg-card">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-accent" /> Types of Plagiarism Monitored
                  </h3>
                  <div className="space-y-2">
                    {plagiarismTypes.map((item) => (
                      <div key={item.label} className="flex items-start gap-3 p-3 rounded-lg bg-red-500/5 border border-red-500/20">
                        <FileX className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                        <span className="text-sm">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <p>
                  When plagiarism is confirmed, the manuscript will be rejected. If detected after publication, the article will be retracted following COPE guidelines. Authors' institutions may be notified, and authors may be banned from submitting to Afrika Scholar journals.
                </p>
              </div>
            </section>

            {/* 3. Fabrication & Falsification */}
            <section id="fabrication">
              <SectionHeader number="3" title="Data Fabrication & Falsification" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Data fabrication (making up data or results) and data falsification (manipulating research materials, equipment, processes, or data to misrepresent results) are among the most serious forms of research misconduct.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="rounded-xl border p-5 bg-card">
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <ShieldAlert className="h-4 w-4 text-red-500" /> Fabrication
                    </h3>
                    <p className="text-sm text-muted-foreground">Making up data or results that were never observed or collected.</p>
                  </div>
                  <div className="rounded-xl border p-5 bg-card">
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <ShieldAlert className="h-4 w-4 text-orange-500" /> Falsification
                    </h3>
                    <p className="text-sm text-muted-foreground">Manipulating materials, equipment, or data to misrepresent research results.</p>
                  </div>
                </div>
                <p>
                  Authors must maintain accurate records of their research data and make data available for verification upon request. All statistical analyses must be reported accurately, including non-significant results.
                </p>
                <div className="bg-secondary/50 rounded-xl p-5 border-l-4 border-accent">
                  <p className="text-sm font-medium text-foreground">Image Manipulation Policy</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Image manipulation beyond standard adjustments (e.g., brightness, contrast) that affect data interpretation is considered falsification. Authors must disclose any image processing techniques used and must not manipulate images in ways that obscure, eliminate, or misrepresent any information present in the original.
                  </p>
                </div>
              </div>
            </section>

            {/* 4. Authorship */}
            <section id="authorship">
              <SectionHeader number="4" title="Authorship Criteria" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Afrika Scholar follows the International Committee of Medical Journal Editors (ICMJE) criteria for authorship. To qualify as an author, an individual must meet <strong className="text-foreground">all four</strong> of the following criteria:
                </p>
                <div className="space-y-3">
                  {authorshipCriteria.map((item, i) => (
                    <div key={item} className="flex gap-4 p-4 rounded-lg bg-secondary/30 border">
                      <div className="h-7 w-7 rounded-lg bg-accent flex items-center justify-center text-accent-foreground font-bold text-xs shrink-0">
                        {i + 1}
                      </div>
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <p>
                  Individuals who do not meet all four criteria but have contributed to the work should be acknowledged in the acknowledgements section.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-red-500/5 border border-red-500/20">
                    <AlertTriangle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">Gift Authorship</p>
                      <p className="text-xs text-muted-foreground">Listing individuals who have not made substantial contributions — a form of misconduct.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-red-500/5 border border-red-500/20">
                    <AlertTriangle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">Ghost Authorship</p>
                      <p className="text-xs text-muted-foreground">Omitting individuals who have made substantial contributions — also a form of misconduct.</p>
                    </div>
                  </div>
                </div>
                <p>
                  Any changes to the author list after submission require written consent from all affected parties and approval from the handling editor.
                </p>
              </div>
            </section>

            {/* 5. Duplicate Submission */}
            <section id="duplicate">
              <SectionHeader number="5" title="Duplicate Submission" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Manuscripts submitted to Afrika Scholar journals must not be simultaneously under consideration by any other journal. Duplicate submission wastes editorial and reviewer resources and may lead to redundant publication, which distorts the scholarly record.
                </p>
                <p>
                  Authors must confirm at the time of submission that the manuscript is not under consideration elsewhere. If a manuscript is discovered to be under simultaneous consideration, it will be rejected, and the authors may face sanctions including bans on future submissions.
                </p>
                <div className="bg-secondary/50 rounded-xl p-5 border-l-4 border-accent">
                  <p className="text-sm font-medium text-foreground mb-1">Previously Published Work</p>
                  <p className="text-sm text-muted-foreground">
                    Conference proceedings, preprints, and theses may be submitted if substantially expanded and revised, provided the original publication is cited and disclosed at the time of submission.
                  </p>
                </div>
              </div>
            </section>

            {/* 6. Human & Animal */}
            <section id="human-animal">
              <SectionHeader number="6" title="Human & Animal Research Ethics" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="rounded-xl border p-5 bg-card">
                    <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Users className="h-4 w-4 text-accent" /> Human Participants
                    </h3>
                    <ul className="space-y-2">
                      {[
                        "Comply with the Declaration of Helsinki",
                        "Obtain informed consent from all participants",
                        "Describe consent procedures in the methods section",
                        "Apply enhanced safeguards for vulnerable populations",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-xl border p-5 bg-card">
                    <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <FlaskConical className="h-4 w-4 text-accent" /> Animal Subjects
                    </h3>
                    <ul className="space-y-2">
                      {[
                        "Comply with international standards for humane treatment",
                        "Describe compliance with relevant regulations",
                        "Provide IACUC approval details where applicable",
                        "Report all procedures transparently in the methods section",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p>
                  Afrika Scholar is particularly attentive to ethical safeguards in research involving vulnerable populations and communities in low-resource settings, requiring independent ethical review and enhanced consent procedures.
                </p>
              </div>
            </section>

            {/* 7. IRB */}
            <section id="irb">
              <SectionHeader number="7" title="Institutional Review Board Requirements" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  All research involving human or animal subjects must receive approval from an appropriate institutional review board (IRB), ethics committee, or equivalent body before the research is conducted.
                </p>
                <div className="space-y-3">
                  <div className="flex gap-4 p-4 rounded-lg bg-secondary/30 border">
                    <Building className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground text-sm mb-1">Required in manuscript</p>
                      <p className="text-sm text-muted-foreground">The name of the approving body and the approval reference number must be provided in the manuscript.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 rounded-lg bg-secondary/30 border">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground text-sm mb-1">When IRB approval was not required</p>
                      <p className="text-sm text-muted-foreground">Authors must explain why approval was not necessary (e.g., research using publicly available, anonymised data) and provide a clear justification.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 8. Reporting */}
            <section id="reporting">
              <SectionHeader number="8" title="Reporting Misconduct" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Anyone who suspects research or publication misconduct in connection with an Afrika Scholar journal may report their concerns to the Editor-in-Chief or directly to Afrika Scholar's Publishing Ethics Committee. Reports may be made by authors, reviewers, readers, or any other interested party.
                </p>
                <div className="grid sm:grid-cols-3 gap-3">
                  {[
                    { label: "Treated confidentially", desc: "Reporter identity is protected at all times." },
                    { label: "No retaliation", desc: "Afrika Scholar prohibits retaliation against good-faith reporters." },
                    { label: "Anonymous reports accepted", desc: "May be more difficult to investigate but are accepted." },
                  ].map((item) => (
                    <div key={item.label} className="p-4 rounded-xl border bg-card text-center">
                      <CheckCircle2 className="h-6 w-6 text-accent mx-auto mb-2" />
                      <p className="font-semibold text-foreground text-sm mb-1">{item.label}</p>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 9. Investigation */}
            <section id="investigation">
              <SectionHeader number="9" title="Investigation Procedures" />
              <p className="text-muted-foreground mb-6">
                Afrika Scholar follows COPE flowcharts and guidelines for all misconduct investigations. All investigations are conducted promptly, fairly, and confidentially, typically completed within 90 days.
              </p>
              <div className="space-y-3">
                {investigationSteps.map((step) => (
                  <div key={step.number} className="flex gap-4 p-4 rounded-lg bg-secondary/30 border">
                    <div className="h-8 w-8 rounded-lg bg-accent flex items-center justify-center text-accent-foreground font-bold text-xs shrink-0">
                      {step.number}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm mb-1">{step.label}</p>
                      <p className="text-sm text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 10. Sanctions */}
            <section id="sanctions">
              <SectionHeader number="10" title="Sanctions" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  When misconduct is confirmed, Afrika Scholar may impose sanctions proportionate to the severity of the misconduct. The decision is made by the Editor-in-Chief in consultation with Afrika Scholar's Publishing Ethics Committee. All parties are notified of the outcome and reasons.
                </p>
                <div className="space-y-3">
                  {sanctions.map((item) => (
                    <div key={item.label} className={`flex items-center justify-between gap-4 rounded-xl border p-4 ${severityColor[item.severity]}`}>
                      <div className="flex items-center gap-3">
                        <Gavel className="h-4 w-4 shrink-0" />
                        <span className="text-sm font-medium">{item.label}</span>
                      </div>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-white/20 shrink-0">
                        {item.severity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA */}
            <div className="rounded-2xl bg-primary p-8 text-primary-foreground text-center">
              <h3 className="text-xl font-bold mb-2">Committed to Ethical Research</h3>
              <p className="text-primary-foreground/80 mb-6">
                Submit your manuscript knowing it will be evaluated with rigour, fairness, and the highest ethical standards.
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
