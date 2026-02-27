import { Link } from "react-router-dom";
import {
  FileText,
  Download,
  BookOpen,
  AlignLeft,
  Quote,
  ClipboardCheck,
  Database,
  ShieldCheck,
  Scale,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout";

const sections = [
  { id: "preparation", label: "Manuscript Preparation", icon: FileText },
  { id: "article-types", label: "Article Types", icon: BookOpen },
  { id: "formatting", label: "Formatting Requirements", icon: AlignLeft },
  { id: "citations", label: "Citation Styles", icon: Quote },
  { id: "checklist", label: "Submission Checklist", icon: ClipboardCheck },
  { id: "data-transparency", label: "Data Transparency", icon: Database },
  { id: "ethical-declarations", label: "Ethical Declarations", icon: ShieldCheck },
  { id: "licensing", label: "Licensing Options", icon: Scale },
];

const articleTypes = [
  { type: "Original Research Articles", desc: "Reports of original empirical, theoretical, or computational research. These typically include an abstract (250–300 words), introduction, methods, results, discussion, and conclusion.", words: "6,000–8,000 words" },
  { type: "Review Articles", desc: "Comprehensive surveys of a specific field or topic, providing critical analysis and synthesis of existing literature. Must include a methodology section describing search strategy and criteria.", words: "8,000–12,000 words" },
  { type: "Short Communications", desc: "Brief reports of significant preliminary findings, novel methodological developments, or important negative results.", words: "3,000–4,000 words" },
  { type: "Case Studies", desc: "Detailed analyses of specific cases, projects, or implementations that provide valuable insights for the field.", words: "4,000–6,000 words" },
  { type: "Commentary & Perspective", desc: "Opinion pieces on important issues in the field, responses to previously published articles, or policy analyses.", words: "2,000–4,000 words" },
];

const citationStyles = [
  { style: "APA 7th Edition", fields: "Social sciences, education, and psychology journals" },
  { style: "Harvard", fields: "Multidisciplinary journals and business/management fields" },
  { style: "Vancouver", fields: "Medical and health sciences journals" },
  { style: "IEEE", fields: "Engineering and technology journals" },
  { style: "Chicago (Author-Date)", fields: "Humanities and some social science journals" },
];

const checklistItems = [
  "Manuscript prepared according to journal formatting guidelines",
  "Title page with all required information",
  "Abstract within word limit",
  "Keywords provided (5–8)",
  "All figures and tables properly captioned",
  "References complete and correctly formatted",
  "All co-author approvals obtained",
  "Ethical declarations completed",
  "Conflicts of interest disclosed",
  "Data availability statement included",
  "Cover letter prepared",
  "Manuscript anonymised (for double-blind review journals)",
  "Supplementary materials uploaded (if applicable)",
  "Language quality checked",
];

export default function AuthorGuidelinesPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[320px] bg-primary">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="author-grid" width="8" height="8" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="0.4" fill="white" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#author-grid)" />
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
            Author Guidelines
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mb-8">
            Comprehensive guidance for authors preparing manuscripts for submission to Afrika Scholar journals.
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

            {/* 1. Manuscript Preparation */}
            <section id="preparation">
              <SectionHeader number="1" title="Manuscript Preparation Standards" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Manuscripts submitted to Afrika Scholar journals must be prepared according to the following standards to ensure consistency, clarity, and efficient processing.</p>
                <p>All manuscripts must be written in clear, grammatically correct English (or in the language specified by the journal). Non-native English speakers are encouraged to seek professional language editing before submission.</p>
                <p>Manuscripts should be submitted as Microsoft Word (.docx) or LaTeX files. PDF submissions are not accepted for initial review. All pages should be numbered consecutively with line numbers included.</p>
                <div className="bg-secondary/50 rounded-xl p-5 border-l-4 border-accent">
                  <p className="text-sm font-medium text-foreground">Formatting standard: 12-point font (Times New Roman or equivalent), double-spacing, and 2.5 cm / 1 inch margins on all sides.</p>
                </div>
              </div>
            </section>

            {/* 2. Article Types */}
            <section id="article-types">
              <SectionHeader number="2" title="Article Types" />
              <div className="space-y-4">
                {articleTypes.map((a) => (
                  <div key={a.type} className="rounded-xl border p-5 bg-card hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <h3 className="font-semibold text-foreground">{a.type}</h3>
                      <span className="text-xs font-medium bg-accent/10 text-accent px-3 py-1 rounded-full shrink-0">
                        {a.words}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{a.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. Formatting */}
            <section id="formatting">
              <SectionHeader number="3" title="Formatting Requirements" />
              <p className="text-muted-foreground mb-6">All manuscripts must follow a standard structure appropriate to the article type. Required sections include:</p>
              <div className="space-y-3">
                {[
                  { label: "Title page", desc: "Full title, running title (max 50 characters), author names and affiliations, corresponding author details, word count, and keywords (5–8)." },
                  { label: "Abstract", desc: "Structured or unstructured as appropriate, 250–300 words." },
                  { label: "Main text", desc: "Organised into appropriate sections with clear headings and subheadings." },
                  { label: "Acknowledgements", desc: "Including funding sources and contributors who do not meet authorship criteria." },
                  { label: "Declarations", desc: "Conflicts of interest, ethical approvals, consent, data availability." },
                  { label: "References", desc: "Formatted according to the journal's preferred citation style." },
                  { label: "Figures and Tables", desc: "Each on a separate page at the end. Figures provided as separate high-resolution files (minimum 300 dpi)." },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 p-4 rounded-lg bg-secondary/30 border">
                    <ChevronRight className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-foreground">{item.label}: </span>
                      <span className="text-sm text-muted-foreground">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. Citation Styles */}
            <section id="citations">
              <SectionHeader number="4" title="Citation Styles" />
              <p className="text-muted-foreground mb-6">Afrika Scholar journals accept manuscripts using the following citation styles depending on the journal's disciplinary norms:</p>
              <div className="overflow-hidden rounded-xl border">
                <table className="w-full text-sm">
                  <thead className="bg-primary text-primary-foreground">
                    <tr>
                      <th className="text-left px-5 py-3 font-semibold">Citation Style</th>
                      <th className="text-left px-5 py-3 font-semibold">Preferred Fields</th>
                    </tr>
                  </thead>
                  <tbody>
                    {citationStyles.map((c, i) => (
                      <tr key={c.style} className={i % 2 === 0 ? "bg-background" : "bg-secondary/30"}>
                        <td className="px-5 py-3 font-medium text-foreground">{c.style}</td>
                        <td className="px-5 py-3 text-muted-foreground">{c.fields}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">Use of reference management software (Zotero, Mendeley, EndNote) is strongly encouraged.</p>
            </section>

            {/* 5. Checklist */}
            <section id="checklist">
              <SectionHeader number="5" title="Submission Checklist" />
              <p className="text-muted-foreground mb-6">Before submitting, please ensure you have completed the following:</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {checklistItems.map((item) => (
                  <label key={item} className="flex items-start gap-3 p-3 rounded-lg border bg-card cursor-pointer hover:bg-secondary/30 transition-colors">
                    <input type="checkbox" className="mt-0.5 accent-accent shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </label>
                ))}
              </div>
            </section>

            {/* 6. Data Transparency */}
            <section id="data-transparency">
              <SectionHeader number="6" title="Data Transparency Requirements" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Afrika Scholar is committed to promoting open science and data transparency. Authors are expected to make their research data available to the fullest extent possible, consistent with ethical and legal constraints.</p>
                <p>All manuscripts must include a <strong className="text-foreground">Data Availability Statement</strong> that specifies where the data supporting the findings can be accessed, any access restrictions and reasons, and contact information for data requests.</p>
                <p>Where data cannot be shared due to ethical, legal, or privacy concerns, authors must explain these constraints clearly.</p>
              </div>
            </section>

            {/* 7. Ethical Declarations */}
            <section id="ethical-declarations">
              <SectionHeader number="7" title="Ethical Declarations" />
              <p className="text-muted-foreground mb-4">Authors must include the following declarations in their manuscripts:</p>
              <div className="space-y-2">
                {[
                  "Funding sources and grant numbers",
                  "Conflicts of interest (or a statement that none exist)",
                  "Ethical approval details (for research involving human or animal subjects)",
                  "Informed consent statement",
                  "Statement of author contributions describing each author's role",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30">
                    <ShieldCheck className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 8. Licensing */}
            <section id="licensing">
              <SectionHeader number="8" title="Licensing Options" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Afrika Scholar journals publish under Creative Commons licenses. The default license is <strong className="text-foreground">CC BY 4.0</strong>, which allows anyone to share and adapt the work for any purpose, provided appropriate credit is given.</p>
                <p>Authors may request alternative Creative Commons licenses (e.g., CC BY-NC 4.0, CC BY-NC-ND 4.0) if required by their funding body or institution.</p>
                <div className="bg-accent/10 border border-accent/20 rounded-xl p-5">
                  <p className="text-sm text-foreground font-medium">By submitting a manuscript, authors confirm they hold copyright to the work and agree to license it under the journal's specified Creative Commons license upon acceptance.</p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <div className="rounded-2xl bg-primary p-8 text-primary-foreground text-center">
              <h3 className="text-xl font-bold mb-2">Ready to Submit?</h3>
              <p className="text-primary-foreground/80 mb-6">Follow the guidelines above and submit your manuscript to an Afrika Scholar journal.</p>
              <Button className="bg-accent hover:bg-accent/90" asChild>
                <Link to="/publishing/submit">Submit a Manuscript <ChevronRight className="ml-2 h-4 w-4" /></Link>
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
