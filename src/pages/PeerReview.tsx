import { Link } from "react-router-dom";
import {
  Eye,
  EyeOff,
  Users,
  ClipboardList,
  ShieldCheck,
  AlertTriangle,
  RotateCcw,
  Scale,
  ChevronRight,
  ArrowLeft,
  Download,
  HelpCircle,
  CheckCircle2,
  FileSearch,
  UserCheck,
  GitBranch,
  MessageSquare,
  RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout";

const sections = [
  { id: "philosophy", label: "Purpose & Philosophy", icon: ClipboardList },
  { id: "integrity", label: "Academic Integrity", icon: ShieldCheck },
  { id: "review-types", label: "Types of Peer Review", icon: Eye },
  { id: "reviewer-selection", label: "Reviewer Selection", icon: UserCheck },
  { id: "conflict-of-interest", label: "Conflict of Interest", icon: Scale },
  { id: "workflow", label: "Review Workflow", icon: GitBranch },
  { id: "decisions", label: "Decision Categories", icon: CheckCircle2 },
  { id: "timelines", label: "Revision Timelines", icon: RefreshCw },
  { id: "ethics", label: "Ethical Oversight", icon: ShieldCheck },
  { id: "appeals", label: "Appeals Process", icon: MessageSquare },
  { id: "responsibilities", label: "Responsibilities", icon: Users },
  { id: "misconduct", label: "Handling Misconduct", icon: AlertTriangle },
  { id: "corrections", label: "Corrections & Retractions", icon: RotateCcw },
  { id: "faq", label: "FAQs", icon: HelpCircle },
];

const reviewTypes = [
  {
    icon: EyeOff,
    title: "Single-Blind Review",
    subtitle: "Most common model",
    desc: "Reviewer identities are concealed from authors, but reviewers know who the authors are. Allows reviewers to provide candid feedback while enabling them to consider the authors' institutional context and track record.",
    suitable: "Established fields where author identity may provide relevant context for evaluating significance and feasibility.",
    note: "Editors are trained to mitigate potential biases related to author reputation or institutional prestige.",
  },
  {
    icon: Eye,
    title: "Double-Blind Review",
    subtitle: "Recommended for bias minimisation",
    desc: "Neither authors nor reviewers know each other's identities. Manuscripts are evaluated purely on their academic merits. Authors must prepare manuscripts for anonymous review, removing identifying information from text, acknowledgements, and metadata.",
    suitable: "Journals where author identity might significantly influence reviewer assessments, or where emerging scholars may face disadvantages.",
    note: "Afrika Scholar provides detailed guidelines for manuscript anonymisation.",
  },
  {
    icon: Users,
    title: "Open Review",
    subtitle: "Opt-in basis",
    desc: "Identities of both authors and reviewers are disclosed, and review reports may be published alongside the accepted article. Promotes transparency and accountability, encouraging more constructive and respectful reviewer feedback.",
    suitable: "Journals that wish to promote full transparency and where disciplinary norms support open review.",
    note: "Currently offered on an opt-in basis. May not be appropriate where significant power imbalances exist between authors and reviewers.",
  },
];

const workflowSteps = [
  {
    number: "01",
    icon: FileSearch,
    title: "Initial Submission",
    desc: "Authors submit through the journal's online system. Automatic checks for completeness — manuscript, abstract, keywords, author info, and supplementary files. Confirmation receipt is issued automatically.",
  },
  {
    number: "02",
    icon: Eye,
    title: "Editorial Screening",
    desc: "Editor-in-Chief or handling editor assesses fit with journal scope, quality, formatting compliance, plagiarism screening, and obvious methodological or ethical concerns. Desk rejections issued within 5–7 business days.",
  },
  {
    number: "03",
    icon: UserCheck,
    title: "Reviewer Assignment",
    desc: "At least two independent reviewers with relevant expertise are identified and invited. Reviewer invitations include the abstract and expected timeline. Invited reviewers have 5 business days to accept or decline.",
  },
  {
    number: "04",
    icon: ClipboardList,
    title: "Peer Review",
    desc: "Reviewers are given 3–4 weeks to complete their review using a structured form covering originality, methodology, data quality, writing clarity, conclusions, references, and ethical compliance.",
  },
  {
    number: "05",
    icon: Scale,
    title: "Editorial Decision",
    desc: "Handling editor evaluates all reviewer reports and makes a recommendation, reviewed by the Editor-in-Chief before the final decision is communicated to the authors.",
  },
  {
    number: "06",
    icon: MessageSquare,
    title: "Author Notification",
    desc: "Authors receive a detailed decision letter including the decision, anonymised reviewer reports, guidance on required revisions, and the resubmission timeline if applicable.",
  },
  {
    number: "07",
    icon: RefreshCw,
    title: "Revision & Resubmission",
    desc: "Authors address all reviewer and editor comments, submitting a detailed response letter explaining each change with specific references to the revised manuscript. Additional review rounds may follow.",
  },
];

const decisionTypes = [
  {
    label: "Accept",
    color: "bg-green-500/10 border-green-500/30 text-green-700 dark:text-green-400",
    dot: "bg-green-500",
    desc: "Manuscript accepted in current form or with minor editorial corrections. Proceeds directly to copyediting and production.",
  },
  {
    label: "Minor Revision",
    color: "bg-accent/10 border-accent/30 text-accent",
    dot: "bg-accent",
    desc: "Minor modifications needed — clarifications, additional references, small corrections, or minor restructuring. Authors given 2–3 weeks. Revised manuscripts reviewed only by the handling editor.",
  },
  {
    label: "Major Revision",
    color: "bg-orange-500/10 border-orange-500/30 text-orange-700 dark:text-orange-400",
    dot: "bg-orange-500",
    desc: "Substantial modifications required — additional analyses, restructured arguments, expanded discussion, or methodological adjustments. Authors given 6–8 weeks. Returned to original reviewers.",
  },
  {
    label: "Reject",
    color: "bg-red-500/10 border-red-500/30 text-red-700 dark:text-red-400",
    dot: "bg-red-500",
    desc: "Manuscript not suitable for publication due to fundamental flaws, lack of originality, poor journal fit, or significant quality concerns. Decisions are final for the current submission.",
  },
];

const faqs = [
  {
    q: "How long does peer review take?",
    a: "Typical timeline from submission to first decision is 6–10 weeks: 1–2 weeks for editorial screening, 3–4 weeks for peer review, and 1–2 weeks for editorial deliberation. Complex manuscripts may take longer.",
  },
  {
    q: "How are reviewers selected?",
    a: "Reviewers are selected based on subject expertise, track record of thorough and timely reviews, and absence of conflicts of interest. We aim for geographic and demographic diversity, with emphasis on African institutions.",
  },
  {
    q: "Can I suggest or exclude reviewers?",
    a: "Authors may suggest potential reviewers and request exclusions. The editor will consider these suggestions but is not bound by them. Suggested reviewers must not have conflicts of interest with the authors.",
  },
  {
    q: "What happens if reviewers disagree?",
    a: "When reviewers provide conflicting recommendations, the handling editor may seek an additional review. The final decision rests with the editor, who considers all reviewer feedback alongside their own assessment.",
  },
  {
    q: "Is there a fee for peer review?",
    a: "No. Afrika Scholar does not charge any fees for peer review. The process is entirely free for authors. We are committed to ensuring financial barriers do not prevent quality research from being published.",
  },
];

export default function PeerReviewPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[320px] bg-primary">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="peer-grid" width="8" height="8" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="0.4" fill="white" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#peer-grid)" />
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
            Peer Review Policy
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mb-8">
            Afrika Scholar's comprehensive peer review framework — designed to uphold rigour, fairness, and transparency across all journals.
          </p>
          <Button variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 gap-2">
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

            {/* 1. Philosophy */}
            <section id="philosophy">
              <SectionHeader number="1" title="Purpose & Editorial Philosophy" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The peer review process is the cornerstone of academic publishing at Afrika Scholar. It serves as the primary mechanism for ensuring the quality, validity, and significance of published research. Our peer review system is designed to uphold the highest standards of academic rigour while remaining fair, transparent, and constructive.
                </p>
                <p>
                  Afrika Scholar believes that peer review should be a collaborative process that improves research quality rather than merely serving as a gatekeeping mechanism. We are committed to fostering an environment where reviewers provide constructive, actionable feedback that helps authors strengthen their work, regardless of the final editorial decision.
                </p>
                <p>
                  Our editorial philosophy is rooted in the conviction that credible academic publishing must be accessible, equitable, and free from commercial pressures. We reject pay-to-publish models and ensure that editorial decisions are based exclusively on academic merit, methodological soundness, and contribution to knowledge.
                </p>
                <div className="bg-secondary/50 rounded-xl p-5 border-l-4 border-accent">
                  <p className="text-sm font-medium text-foreground">
                    We recognise the unique challenges and opportunities in African scholarship and are committed to ensuring our peer review processes are culturally sensitive, contextually aware, and supportive of research that addresses African priorities while maintaining global relevance and standards.
                  </p>
                </div>
              </div>
            </section>

            {/* 2. Integrity */}
            <section id="integrity">
              <SectionHeader number="2" title="Commitment to Academic Integrity" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Academic integrity is non-negotiable at Afrika Scholar. Every manuscript submitted undergoes rigorous scrutiny for originality, ethical compliance, and scholarly merit through multiple layers of integrity checks throughout the peer review process.
                </p>
                <p>
                  All submissions are screened using industry-standard plagiarism detection software before being sent for peer review. Manuscripts showing evidence of plagiarism, data fabrication, data falsification, or other forms of research misconduct are immediately flagged for investigation. We maintain a zero-tolerance policy for deliberate academic dishonesty.
                </p>
                <div className="grid sm:grid-cols-2 gap-3 mt-4">
                  {[
                    "Inappropriate citation practices",
                    "Salami slicing (unjustified division of studies)",
                    "Duplicate or redundant publication",
                    "Undisclosed conflicts of interest",
                    "Data fabrication or falsification",
                    "Plagiarism in any form",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 p-3 rounded-lg bg-red-500/5 border border-red-500/20">
                      <AlertTriangle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <p>
                  Afrika Scholar follows established procedures aligned with COPE (Committee on Publication Ethics) guidelines when integrity concerns arise. We regularly audit our review processes and welcome feedback from authors, reviewers, and readers on any concerns.
                </p>
              </div>
            </section>

            {/* 3. Review Types */}
            <section id="review-types">
              <SectionHeader number="3" title="Types of Peer Review" />
              <p className="text-muted-foreground mb-6">
                Afrika Scholar supports multiple peer review models, allowing individual journals to adopt the approach best suited to their disciplinary norms and editorial needs.
              </p>
              <div className="space-y-4">
                {reviewTypes.map((r) => (
                  <div key={r.title} className="rounded-xl border p-5 bg-card hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                        <r.icon className="h-5 w-5 text-accent" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 flex-wrap mb-1">
                          <h3 className="font-semibold text-foreground">{r.title}</h3>
                          <span className="text-xs font-medium bg-accent/10 text-accent px-3 py-1 rounded-full">{r.subtitle}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{r.desc}</p>
                        <div className="space-y-1.5">
                          <p className="text-xs text-muted-foreground"><span className="font-semibold text-foreground">Best for: </span>{r.suitable}</p>
                          <p className="text-xs text-muted-foreground/70 italic">{r.note}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. Reviewer Selection */}
            <section id="reviewer-selection">
              <SectionHeader number="4" title="Reviewer Selection Criteria" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The selection of appropriate peer reviewers is critical to the quality and credibility of the review process. Reviewers must possess demonstrable expertise in the subject area of the manuscript.
                </p>
                <p>This typically includes a doctoral degree or equivalent research experience in the relevant field, a track record of published research in the topic area, and recognition by peers as a knowledgeable authority in the subject matter.</p>
                <div className="bg-secondary/50 rounded-xl p-5 border-l-4 border-accent">
                  <p className="text-sm font-medium text-foreground mb-3">We prioritise diversity in our reviewer pools across:</p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {[
                      "Geographic representation (emphasis on African institutions)",
                      "Career stage (senior experts and emerging scholars)",
                      "Gender balance",
                      "Methodological expertise",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <p>
                  Before inviting a reviewer, editors must verify that no conflicts of interest exist. Potential reviewers who have collaborated with the authors within the past three years, who are from the same institution, or who have any other relationship that might compromise objectivity must be excluded.
                </p>
              </div>
            </section>

            {/* 5. Conflict of Interest */}
            <section id="conflict-of-interest">
              <SectionHeader number="5" title="Conflict of Interest Policy" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Afrika Scholar maintains a comprehensive conflict of interest (COI) policy that applies to all participants — authors, reviewers, and editors. A conflict of interest exists when an individual's judgment regarding a manuscript could be, or could be perceived to be, influenced by a competing interest.
                </p>
                <p>Conflicts of interest may be financial, professional, personal, or intellectual. Examples include:</p>
                <div className="space-y-2">
                  {[
                    "Direct financial interest in the research outcomes",
                    "Current or recent collaboration with the authors",
                    "Personal relationships with the authors",
                    "Competitive relationships with the authors",
                    "Institutional affiliations that create loyalty conflicts",
                    "Previous involvement with the manuscript (e.g., as a supervisor)",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30">
                      <Scale className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <p>
                  All reviewers are required to declare any potential conflicts before accepting a review invitation. Editors who have conflicts of interest with a submission must recuse themselves, with an alternate editor assigned. Authors must disclose all potential conflicts in their manuscripts.
                </p>
              </div>
            </section>

            {/* 6. Workflow */}
            <section id="workflow">
              <SectionHeader number="6" title="Review Process Workflow" />
              <p className="text-muted-foreground mb-6">
                The peer review process follows a structured workflow designed to ensure thorough, timely, and fair evaluation of all submissions.
              </p>
              <div className="space-y-3">
                {workflowSteps.map((step) => (
                  <div key={step.number} className="flex gap-4 p-4 rounded-lg bg-secondary/30 border">
                    <div className="shrink-0 flex flex-col items-center gap-2">
                      <div className="h-9 w-9 rounded-lg bg-accent flex items-center justify-center text-accent-foreground font-bold text-xs">
                        {step.number}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <step.icon className="h-4 w-4 text-accent" />
                        <span className="font-semibold text-foreground text-sm">{step.title}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 7. Decisions */}
            <section id="decisions">
              <SectionHeader number="7" title="Decision Categories" />
              <p className="text-muted-foreground mb-6">
                Editorial decisions fall into four categories, each with specific implications for the manuscript and clear guidance for authors.
              </p>
              <div className="space-y-3">
                {decisionTypes.map((d) => (
                  <div key={d.label} className={`rounded-xl border p-5 ${d.color}`}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`h-2.5 w-2.5 rounded-full ${d.dot}`} />
                      <span className="font-semibold">{d.label}</span>
                    </div>
                    <p className="text-sm opacity-80">{d.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 8. Timelines */}
            <section id="timelines">
              <SectionHeader number="8" title="Revision Timelines" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Afrika Scholar maintains clear timelines for each stage of the revision process to ensure efficient handling while allowing adequate time for thorough revisions.</p>
                <div className="overflow-hidden rounded-xl border">
                  <table className="w-full text-sm">
                    <thead className="bg-primary text-primary-foreground">
                      <tr>
                        <th className="text-left px-5 py-3 font-semibold">Revision Type</th>
                        <th className="text-left px-5 py-3 font-semibold">Timeline</th>
                        <th className="text-left px-5 py-3 font-semibold">Extension Available</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { type: "Minor Revision", timeline: "2–3 weeks", ext: "Up to 2 weeks" },
                        { type: "Major Revision", timeline: "6–8 weeks", ext: "Up to 4 weeks" },
                      ].map((row, i) => (
                        <tr key={row.type} className={i % 2 === 0 ? "bg-background" : "bg-secondary/30"}>
                          <td className="px-5 py-3 font-medium text-foreground">{row.type}</td>
                          <td className="px-5 py-3 text-muted-foreground">{row.timeline}</td>
                          <td className="px-5 py-3 text-muted-foreground">{row.ext}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p>
                  If authors fail to submit within the specified timeline, the manuscript will be treated as withdrawn. Authors who anticipate difficulty meeting deadlines should contact the handling editor as early as possible.
                </p>
              </div>
            </section>

            {/* 9. Ethical Oversight */}
            <section id="ethics">
              <SectionHeader number="9" title="Ethical Oversight" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Afrika Scholar integrates ethical oversight throughout the peer review process. All manuscripts are evaluated for compliance with research ethics standards, including:</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Informed consent procedures",
                    "IRB or ethics committee approval",
                    "Humane treatment of animal subjects",
                    "Data protection and privacy compliance",
                    "Responsible conduct of research",
                    "Appropriate acknowledgement of funding sources",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30 border">
                      <ShieldCheck className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <p>Afrika Scholar follows COPE guidelines for handling ethical concerns that arise during or after the review process. We are committed to investigating all allegations of misconduct thoroughly and transparently.</p>
              </div>
            </section>

            {/* 10. Appeals */}
            <section id="appeals">
              <SectionHeader number="10" title="Appeals Process" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Authors who believe an editorial decision was made in error may submit a formal appeal within 30 days of the decision notification. Appeals must include:</p>
                <div className="space-y-2">
                  {[
                    "A clear statement of the grounds for appeal",
                    "Specific responses to the concerns raised by reviewers and editors",
                    "Any new information or data that supports the appeal",
                    "A revised manuscript (if applicable)",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30">
                      <ChevronRight className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <p>Appeals are reviewed by the Editor-in-Chief (who was not the handling editor for the original submission). The appeal decision is final and communicated within 30 business days.</p>
                <div className="bg-secondary/50 rounded-xl p-5 border-l-4 border-accent">
                  <p className="text-sm font-medium text-foreground mb-2">Valid grounds for appeal include:</p>
                  <p className="text-sm text-muted-foreground">Demonstrable factual errors in reviewer assessments; evidence of reviewer bias or conflict of interest; procedural irregularities; or significant new evidence addressing the concerns raised. Disagreement with editorial judgment alone does not constitute valid grounds.</p>
                </div>
              </div>
            </section>

            {/* 11. Responsibilities */}
            <section id="responsibilities">
              <SectionHeader number="11" title="Reviewer & Author Responsibilities" />
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-xl border p-5 bg-card">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <UserCheck className="h-4 w-4 text-accent" /> Reviewer Responsibilities
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Provide timely reviews or communicate promptly if unable to meet the deadline",
                      "Evaluate manuscripts objectively and constructively",
                      "Provide detailed, specific feedback — even when recommending rejection",
                      "Identify relevant published work the authors may have overlooked",
                      "Alert the editor to ethical concerns or suspicions of misconduct",
                      "Maintain strict confidentiality regarding the manuscript",
                      "Decline invitations when conflicts of interest exist",
                      "Refrain from contacting authors directly about manuscripts under review",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border p-5 bg-card">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Users className="h-4 w-4 text-accent" /> Author Responsibilities
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Submit only original work not published elsewhere or under consideration by another journal",
                      "Ensure all co-authors have contributed substantially and approved the submission",
                      "Provide accurate and complete information including data, references, and declarations",
                      "Respond to reviewer and editor comments thoroughly and in good faith",
                      "Disclose all potential conflicts of interest, funding sources, and affiliations",
                      "Comply with all ethical requirements including approvals and consents",
                      "Cooperate with any investigations into alleged misconduct",
                      "Notify the editor promptly if errors in submitted or published work are discovered",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* 12. Misconduct */}
            <section id="misconduct">
              <SectionHeader number="12" title="Handling Misconduct" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Afrika Scholar takes allegations of misconduct in the peer review process extremely seriously. Misconduct includes plagiarism, data fabrication or falsification, reviewer manipulation, breach of confidentiality, failure to disclose conflicts of interest, and abuse of the peer review system.</p>
                <p>When misconduct is suspected, the Editor-in-Chief initiates an investigation following COPE guidelines. Sanctions for confirmed misconduct may include:</p>
                <div className="space-y-2">
                  {[
                    "Rejection or retraction of the manuscript",
                    "Banning the individual from submitting to or reviewing for Afrika Scholar journals",
                    "Notification of the individual's institution",
                    "Public notice of the misconduct (in serious cases)",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 p-3 rounded-lg bg-red-500/5 border border-red-500/20">
                      <AlertTriangle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm">The severity of sanctions is proportionate to the severity of the misconduct.</p>
              </div>
            </section>

            {/* 13. Corrections */}
            <section id="corrections">
              <SectionHeader number="13" title="Corrections, Retractions & Expressions of Concern" />
              <p className="text-muted-foreground mb-6">Afrika Scholar is committed to maintaining the accuracy and integrity of the published record. When errors or issues are identified in published articles, we take appropriate corrective action.</p>
              <div className="space-y-4">
                {[
                  { title: "Corrections (Errata)", desc: "Published when honest errors are identified that do not fundamentally affect the conclusions of the research. Corrections are published as separate notices linked to the original article.", color: "border-accent" },
                  { title: "Retractions", desc: "Published when findings are unreliable due to misconduct or honest error, when the work is plagiarised, or when the article reports unethical research. Retracted articles remain available but are clearly marked as retracted.", color: "border-red-500" },
                  { title: "Expressions of Concern", desc: "Published when there is inconclusive evidence of misconduct or when an investigation is ongoing. They alert readers to potential issues while the investigation is completed.", color: "border-orange-500" },
                ].map((item) => (
                  <div key={item.title} className={`rounded-xl border-l-4 ${item.color} bg-secondary/30 p-5`}>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 14. FAQ */}
            <section id="faq">
              <SectionHeader number="14" title="Frequently Asked Questions" />
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.q} className="rounded-xl border p-5 bg-card hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-3">
                      <HelpCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground mb-2">{faq.q}</p>
                        <p className="text-sm text-muted-foreground">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <div className="rounded-2xl bg-primary p-8 text-primary-foreground text-center">
              <h3 className="text-xl font-bold mb-2">Ready to Submit Your Research?</h3>
              <p className="text-primary-foreground/80 mb-6">
                Your work will be reviewed with rigour, fairness, and respect for African scholarship.
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
      <div className="h-9 w-9 rounded-lg bg-accent flex items-center justify-center text-accent-foreground font-bold text-sm shrink-box-0">
        {number}
      </div>
      <h2 className="text-2xl font-bold text-foreground">{title}</h2>
    </div>
  );
}
