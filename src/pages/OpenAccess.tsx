import { Link } from "react-router-dom";
import {
  BookOpen,
  Globe,
  FileCheck,
  Users,
  DollarSign,
  Database,
  ChevronRight,
  ArrowLeft,
  Download,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout";

const sections = [
  { id: "philosophy", label: "Open Access Philosophy", icon: Globe },
  { id: "licensing", label: "Licensing Types", icon: FileCheck },
  { id: "author-rights", label: "Author Rights", icon: Users },
  { id: "reader-rights", label: "Reader Rights", icon: BookOpen },
  { id: "revenue", label: "Revenue Model", icon: DollarSign },
  { id: "doi-indexing", label: "DOI & Indexing", icon: Database },
];

const licenses = [
  {
    code: "CC BY 4.0",
    label: "Attribution",
    badge: "Default",
    badgeColor: "bg-accent text-accent-foreground",
    borderColor: "border-accent/40",
    desc: "The default license for Afrika Scholar publications. Anyone is free to share and adapt the work for any purpose — including commercial use — provided appropriate credit is given, a link to the license is provided, and changes are indicated.",
    allows: ["Share for any purpose", "Adapt and build upon", "Commercial use"],
    requires: ["Appropriate credit", "Link to license", "Indicate changes"],
  },
  {
    code: "CC BY-NC 4.0",
    label: "Attribution-NonCommercial",
    badge: "On request",
    badgeColor: "bg-secondary text-foreground",
    borderColor: "border-border",
    desc: "Allows sharing and adaptation for non-commercial purposes only, with appropriate attribution. May be requested by authors whose funding bodies require non-commercial restrictions.",
    allows: ["Share for non-commercial use", "Adapt and build upon"],
    requires: ["Appropriate credit", "Non-commercial use only"],
  },
  {
    code: "CC BY-SA 4.0",
    label: "Attribution-ShareAlike",
    badge: "Available",
    badgeColor: "bg-secondary text-foreground",
    borderColor: "border-border",
    desc: "Allows sharing and adaptation for any purpose, provided derivative works are distributed under the same or a compatible license. A \"copyleft\" approach that ensures open access principles are maintained in derivative works.",
    allows: ["Share for any purpose", "Adapt and build upon", "Commercial use"],
    requires: ["Appropriate credit", "Same license for derivatives"],
  },
  {
    code: "CC BY-NC-ND 4.0",
    label: "Attribution-NonCommercial-NoDerivatives",
    badge: "Exceptional only",
    badgeColor: "bg-muted text-muted-foreground",
    borderColor: "border-border",
    desc: "The most restrictive license option. Allows sharing for non-commercial purposes only, without modification, and with appropriate attribution. Used only in exceptional circumstances.",
    allows: ["Share for non-commercial use"],
    requires: ["Appropriate credit", "No modifications", "Non-commercial use only"],
  },
];

const authorRights = [
  "Deposit articles in institutional and subject repositories",
  "Share articles on personal or institutional websites",
  "Include articles in theses or dissertations",
  "Use articles for teaching purposes",
  "Adapt or translate articles, subject to the Creative Commons license terms",
];

const readerRights = [
  "Access all published articles freely and without charge",
  "Download, print, and save articles for personal use",
  "Share articles with others, with appropriate attribution",
  "Use articles for educational and research purposes",
  "Under CC BY — adapt, remix, and build upon for any purpose including commercial use",
];

const indexes = [
  { name: "Directory of Open Access Journals (DOAJ)", status: "Active" },
  { name: "African Journals Online (AJOL)", status: "Active" },
  { name: "Google Scholar", status: "Active" },
  { name: "CrossRef", status: "Active" },
  { name: "Scopus", status: "Pursuing" },
  { name: "Web of Science", status: "Pursuing" },
];

export default function OpenAccessPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[320px] bg-primary">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="oa-grid" width="8" height="8" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="0.4" fill="white" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#oa-grid)" />
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
            Open Access & Licensing
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mb-8">
            All Afrika Scholar journals publish under Creative Commons licensing — free to read, share, and build upon with proper attribution. No paywalls. No subscriptions.
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
              <SectionHeader number="1" title="Open Access Philosophy" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Afrika Scholar is firmly committed to the principles of open access publishing. We believe that research findings — particularly those relevant to African development and global challenges — should be freely available to all readers, regardless of their geographic location, institutional affiliation, or ability to pay.
                </p>
                <p>
                  Our open access model removes barriers to knowledge access that disproportionately affect researchers, students, and practitioners in low- and middle-income countries. By making research freely available, we contribute to a more equitable global knowledge ecosystem where ideas and evidence can flow without financial barriers.
                </p>
                <div className="bg-secondary/50 rounded-xl p-5 border-l-4 border-accent">
                  <p className="text-sm font-medium text-foreground">
                    Studies consistently show that open access articles receive more citations, more downloads, and broader engagement from both academic and non-academic audiences — benefiting authors, institutions, and the broader scholarly community.
                  </p>
                </div>
                <p>
                  Afrika Scholar's open access commitment extends beyond content access. We also support open data, open methods, and open peer review as elements of a broader open science agenda, encouraging authors to share research data, code, and materials to promote reproducibility and collaborative science.
                </p>
              </div>
            </section>

            {/* 2. Licensing */}
            <section id="licensing">
              <SectionHeader number="2" title="Licensing Types" />
              <p className="text-muted-foreground mb-6">
                Afrika Scholar journals use Creative Commons licenses to define the terms under which published content may be used, shared, and adapted.
              </p>
              <div className="space-y-4">
                {licenses.map((lic) => (
                  <div key={lic.code} className={`rounded-xl border-2 ${lic.borderColor} p-5 bg-card hover:shadow-md transition-shadow`}>
                    <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                      <div>
                        <div className="flex items-center gap-3 flex-wrap mb-1">
                          <span className="font-bold text-foreground">{lic.code}</span>
                          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${lic.badgeColor}`}>
                            {lic.badge}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground font-medium">{lic.label}</p>
                      </div>
                      <a
                        href={`https://creativecommons.org/licenses/${lic.code.replace("CC ", "").toLowerCase()}/`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-accent hover:underline shrink-0"
                      >
                        View license <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{lic.desc}</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div>
                        <p className="text-xs font-semibold text-foreground uppercase tracking-wide mb-2">Allows</p>
                        <ul className="space-y-1">
                          {lic.allows.map((item) => (
                            <li key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                              <CheckCircle2 className="h-3.5 w-3.5 text-green-500 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground uppercase tracking-wide mb-2">Requires</p>
                        <ul className="space-y-1">
                          {lic.requires.map((item) => (
                            <li key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                              <ChevronRight className="h-3.5 w-3.5 text-accent shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. Author Rights */}
            <section id="author-rights">
              <SectionHeader number="3" title="Author Rights" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Afrika Scholar does not require authors to transfer their copyright. Authors retain full copyright to their published works and grant Afrika Scholar a non-exclusive license to publish the article. Authors are free to:
                </p>
                <div className="space-y-2">
                  {authorRights.map((item) => (
                    <div key={item} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30 border">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-secondary/50 rounded-xl p-5 border-l-4 border-accent">
                  <p className="text-sm font-medium text-foreground">No embargo period.</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Authors may publish their work under their chosen Creative Commons license immediately. Published articles are immediately and permanently available in open access upon publication.
                  </p>
                </div>
              </div>
            </section>

            {/* 4. Reader Rights */}
            <section id="reader-rights">
              <SectionHeader number="4" title="Reader Rights" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Readers of Afrika Scholar publications have the following rights:</p>
                <div className="space-y-2">
                  {readerRights.map((item) => (
                    <div key={item} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30 border">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-accent/10 border border-accent/20 rounded-xl p-5">
                  <p className="text-sm font-medium text-foreground">These rights are permanent and irrevocable.</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Once an article is published under a Creative Commons license, the terms of that license cannot be revoked or altered — even if the article is later corrected or retracted.
                  </p>
                </div>
              </div>
            </section>

            {/* 5. Revenue */}
            <section id="revenue">
              <SectionHeader number="5" title="Revenue Model Transparency" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Afrika Scholar is committed to transparency in its financial operations. Our revenue model supports sustainable open access publishing without creating barriers to authorship or readership.
                </p>
                <div className="space-y-3">
                  {[
                    {
                      icon: BookOpen,
                      title: "No reader fees",
                      desc: "Afrika Scholar does not charge readers for access to any published content. All articles are freely available upon publication with no paywalls, subscription requirements, or access fees.",
                    },
                    {
                      icon: DollarSign,
                      title: "Article Processing Charges (APCs)",
                      desc: "Where APCs apply, these are clearly communicated to authors at the time of submission. APCs are never linked to editorial decisions, and fee waivers are available for authors who cannot afford charges. APC rates and waiver policies are published transparently on our website.",
                    },
                    {
                      icon: Globe,
                      title: "Institutional & grant support",
                      desc: "Afrika Scholar also receives support from institutional partnerships, grants, and in-kind contributions. These funding sources are disclosed publicly, and no funder has any influence over editorial decisions.",
                    },
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

            {/* 6. DOI & Indexing */}
            <section id="doi-indexing">
              <SectionHeader number="6" title="DOI & Indexing Policy" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  All articles published by Afrika Scholar receive a Digital Object Identifier (DOI) through CrossRef, ensuring permanent identification and discoverability. DOIs are assigned at the time of publication and included in all metadata records.
                </p>
                <div className="overflow-hidden rounded-xl border">
                  <table className="w-full text-sm">
                    <thead className="bg-primary text-primary-foreground">
                      <tr>
                        <th className="text-left px-5 py-3 font-semibold">Index / Database</th>
                        <th className="text-left px-5 py-3 font-semibold">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {indexes.map((idx, i) => (
                        <tr key={idx.name} className={i % 2 === 0 ? "bg-background" : "bg-secondary/30"}>
                          <td className="px-5 py-3 font-medium text-foreground">{idx.name}</td>
                          <td className="px-5 py-3">
                            <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${
                              idx.status === "Active"
                                ? "bg-green-500/10 text-green-700 dark:text-green-400"
                                : "bg-amber-500/10 text-amber-700 dark:text-amber-400"
                            }`}>
                              <span className={`h-1.5 w-1.5 rounded-full ${idx.status === "Active" ? "bg-green-500" : "bg-amber-500"}`} />
                              {idx.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p>
                  All published metadata is made available through open protocols (OAI-PMH) to facilitate harvesting by search engines, aggregators, and library systems — ensuring maximum discoverability and accessibility for published research.
                </p>
              </div>
            </section>

            {/* CTA */}
            <div className="rounded-2xl bg-primary p-8 text-primary-foreground text-center">
              <h3 className="text-xl font-bold mb-2">Publish Open Access with Afrika Scholar</h3>
              <p className="text-primary-foreground/80 mb-6">
                Reach a global audience with no paywalls, full author rights, and immediate open access upon publication.
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
