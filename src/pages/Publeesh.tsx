import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Users,
  GraduationCap,
  Puzzle,
  FileText,
  Star,
  Mail,
  Sparkles,
  Newspaper,
  Lock,
  PenLine,
  Quote,
  Database,
  BarChart2,
  Globe,
  Layers,
  ShieldCheck,
  X,
  CreditCard,
  LayoutDashboard,
  TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Layout } from "@/components/layout";
import { publications, disciplines } from "@/data/publications";
import { AnimatedHeroVisual } from "@/components/home/AnimatedHeroVisual";
import { CountUpStats } from "@/components/home/CountUpStats";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-scholars.jpg";

const pillars = [
  {
    icon: BookOpen,
    title: "Journal Publishing",
    description:
      "Peer-reviewed, open-access journals aligned with international publishing, ethical, and editorial standards.",
    linkLabel: "Publishing Standards",
    link: "/publications",
  },
  {
    icon: GraduationCap,
    title: "University & Academic Enablement",
    description:
      "University-led research dissemination, publishing support, and academic coordination.",
    linkLabel: "University Enablement",
    link: "/advisory",
  },
  {
    icon: Users,
    title: "Academic Engagement & Network",
    description:
      "Lecturers, researchers, and scholars publish, review, collaborate, and participate in a curated academic ecosystem.",
    linkLabel: "How Academics Engage",
    link: "/network",
  },
  {
    icon: Puzzle,
    title: "Academic Engagement Enablement & Integration",
    description:
      "APIs and tools enabling EdTech platforms and institutions to access verified African academic content.",
    linkLabel: "Learn More",
    link: "/about#enablement",
  },
];

export default function Publeesh() {
  const featuredPublications = publications.slice(0, 3);
  const recentPublications = publications.slice(0, 6);
  const [email, setEmail] = useState("");
  const [citeDialogOpen, setCiteDialogOpen] = useState(false);
  const [citationText, setCitationText] = useState("");
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Subscribed!",
        description: "You'll receive research insights and updates.",
      });
      setEmail("");
    }
  };

  const handleCite = (pub: (typeof publications)[0]) => {
    const citation = `${pub.authors.join(", ")} (${pub.year}). ${pub.title}. ${pub.journal}. DOI: ${pub.doi || "N/A"}`;
    setCitationText(citation);
    setCiteDialogOpen(true);
  };

  const copyCitation = () => {
    navigator.clipboard.writeText(citationText);
    toast({ title: "Copied!", description: "Citation copied to clipboard." });
  };

  return (
    <Layout>
      {/* Citation Dialog */}
      <Dialog open={citeDialogOpen} onOpenChange={setCiteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Cite This Article</DialogTitle>
            <DialogDescription>APA Format Citation</DialogDescription>
          </DialogHeader>
          <div className="bg-secondary p-4 rounded-lg text-sm leading-relaxed font-mono">
            {citationText}
          </div>
          <div className="flex gap-3 justify-end">
            <Button variant="outline" onClick={() => setCiteDialogOpen(false)}>
              Close
            </Button>
            <Button
              className="bg-accent hover:bg-accent/90"
              onClick={copyCitation}
            >
              Copy Citation
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Hero Section */}
   
    <section className="relative overflow-hidden min-h-[600px]">
      {/* Background image + overlays */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Publeesh AI Research Intelligence"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
      </div>

      {/* Dot grid overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="publeesh-hero-grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#publeesh-hero-grid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="container-section relative py-24 md:py-36">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — Text */}
          <div className="animate-fade-up text-primary-foreground">
            {/* Eyebrow */}
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
              Publeesh
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              AI-Powered Research Intelligence{" "}
              <span className="text-accent">by Afrika Scholar</span>
            </h1>

            <p className="text-lg text-primary-foreground/80 mb-4 max-w-xl leading-relaxed">
              <span className="font-semibold text-primary-foreground">
                Enhancing Research. Strengthening Scholarship. Preserving Integrity.
              </span>
            </p>

            <p className="text-base text-primary-foreground/75 mb-10 max-w-xl leading-relaxed">
              Publeesh is Afrika Scholar's AI-powered research intelligence platform, designed to
              support scholars, students, researchers, and institutions with structured research
              workflows, global data access, and responsible AI-assisted drafting tools.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2"
                asChild
              >
                <Link to="/publeesh/access">
                  Access Research Intelligence <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 text-primary-foreground hover:bg-primary-foreground/10 hover:border-white"
                asChild
              >
                <Link to="/publeesh/pricing" style={{color: "black"}}>View Subscription Plans</Link>
              </Button>
            </div>
          </div>

          {/* Right — Animated visual (keep existing) */}
          <div className="hidden lg:flex justify-center">
            <AnimatedHeroVisual />
          </div>

        </div>
      </div>
    </section>
          {/* What Is Publeesh Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-section">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What is Publeesh?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A research enablement tool integrated within Afrika Scholar's academic infrastructure — built for serious academic use, not automated academic substitution.
            </p>
          </div>

          {/* Intro Pillars */}
          <div className="grid md:grid-cols-5 gap-4 max-w-5xl mx-auto mb-20 text-center">
            {[
              { icon: PenLine, label: "Structured Drafting Assistance" },
              { icon: BookOpen, label: "Literature Review Organization" },
              { icon: Quote, label: "Citation Guidance & Formatting" },
              { icon: Database, label: "Global Institutional Dataset Access" },
              { icon: BarChart2, label: "Comparative Research Intelligence" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-3 p-5 rounded-xl bg-background border border-border hover:border-accent/50 transition-colors"
              >
                <div className="p-3 rounded-full bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-sm font-medium leading-snug">{label}</p>
              </div>
            ))}
          </div>

          {/* Feature Blocks */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

            {/* Block 1: Structured Drafting */}
            <Card className="flex flex-col border-border hover:border-accent/40 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent">
                    <PenLine className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Research Drafting</span>
                </div>
                <CardTitle className="text-xl">Structured Research Drafting Support</CardTitle>
                <CardDescription>
                  Help scholars think clearly, structure better, and refine faster.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2">
                  {[
                    "Research outlines",
                    "Thesis & dissertation frameworks",
                    "Literature review structures",
                    "Methodology templates",
                    "Research question refinements",
                    "Hypothesis framing assistance",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Block 2: Literature & Referencing */}
            <Card className="flex flex-col border-border hover:border-accent/40 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Literature & Referencing</span>
                </div>
                <CardTitle className="text-xl">Literature & Referencing Enhancement</CardTitle>
                <CardDescription>
                  Strengthen your academic credibility with properly structured referencing.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 mb-5">
                  {[
                    "Published research references",
                    "Citation-ready formatting support",
                    "Reference structuring tools",
                    "Bibliography compilation assistance",
                    "Source comparison insights",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {["APA", "MLA", "Chicago", "Harvard"].map((style) => (
                    <span
                      key={style}
                      className="px-2.5 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20"
                    >
                      {style}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Block 3: Global Data Access */}
            <Card className="flex flex-col border-border hover:border-accent/40 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent">
                    <Globe className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Global Intelligence</span>
                </div>
                <CardTitle className="text-xl">Global Research Data Access</CardTitle>
                <CardDescription>
                  Structured access to datasets from leading global institutions.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2 mb-5">
                  {["WHO", "World Bank", "IMF", "UNESCO", "OECD", "FAO"].map((org) => (
                    <span
                      key={org}
                      className="px-2.5 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground border border-border"
                    >
                      {org}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mb-3 font-medium uppercase tracking-wider">Comparative data across:</p>
                <ul className="space-y-2">
                  {[
                    "Public health & climate change",
                    "Economics & education",
                    "Infrastructure & agriculture",
                    "Development indicators",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-14">
            <p className="text-muted-foreground mb-5 max-w-xl mx-auto">
              Publeesh transforms the research process — from a writing assistant into a global research intelligence platform.
            </p>
          
          </div>
        </div>
      </section>


      {/* How Publeesh Fits Into Afrika Scholar */}
      <section className="section-padding">
        <div className="container-section">

          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-accent font-semibold mb-2">
              How Publeesh Fits Into Afrika Scholar
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pan-African Academic Publishing, Research &<br className="hidden md:block" /> University Enablement Infrastructure
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              with AI-Powered Research Intelligence. Publishing remains the primary pillar — Publeesh strengthens it.
            </p>
          </div>

          {/* Two-column: How Publeesh strengthens + Who it's for */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">

            {/* How Publeesh Strengthens Publishing */}
            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center gap-3 mb-1">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent">
                    <Layers className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-xl">Publeesh Strengthens Publishing</CardTitle>
                </div>
                <CardDescription>
                  AI enhances scholarship — it does not replace it.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Improving manuscript quality before submission",
                    "Supporting clearer structuring and argumentation",
                    "Enhancing data-backed research",
                    "Supporting academic productivity",
                    "Enabling comparative and cross-country scholarship",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Who Publeesh Is For */}
            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center gap-3 mb-1">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent">
                    <Users className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-xl">Who Publeesh Is For</CardTitle>
                </div>
                <CardDescription>
                  Designed for every stage of academic research.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    { emoji: "🎓", label: "Students", desc: "preparing research papers, dissertations, and theses" },
                    { emoji: "👩🏽‍🏫", label: "Academics", desc: "developing manuscripts for publication" },
                    { emoji: "📊", label: "Researchers", desc: "conducting comparative policy and data studies" },
                    { emoji: "🏛", label: "Institutions", desc: "seeking research productivity tools" },
                    { emoji: "🌍", label: "Professionals", desc: "translating practice into credible research output" },
                  ].map(({ emoji, label, desc }) => (
                    <li key={label} className="flex items-start gap-3 text-sm">
                      <span className="text-base leading-none mt-0.5">{emoji}</span>
                      <span className="text-muted-foreground">
                        <span className="font-semibold text-foreground">{label}</span> {desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Academic Integrity Banner */}
          <div className="max-w-5xl mx-auto rounded-2xl border border-border bg-secondary/40 p-8 md:p-10">
            <div className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-start">
              <div className="p-3 rounded-xl bg-accent/10 text-accent w-fit">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Academic Integrity & Responsible Use</h3>
                <p className="text-muted-foreground mb-5 text-sm">
                  Publeesh is designed as a research support system. Users are responsible for ensuring compliance with university academic integrity policies, journal submission standards, and ethical research guidelines.
                </p>

                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Publeesh does not:</p>
                    <ul className="space-y-2">
                      {[
                        "Replace independent scholarship",
                        "Guarantee publication",
                        "Substitute peer review",
                        "Bypass institutional supervision",
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="h-4 w-4 rounded-full border border-muted-foreground/40 flex items-center justify-center flex-shrink-0">
                            <X className="h-2.5 w-2.5" />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Users must comply with:</p>
                    <ul className="space-y-2">
                      {[
                        "University academic integrity policies",
                        "Journal submission standards",
                        "Ethical research guidelines",
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4">
                  Afrika Scholar promotes responsible AI usage aligned with global academic norms.
                </p>

                <Button variant="outline" size="sm" asChild>
                  <Link to="/about#integrity" className="inline-flex items-center gap-2">
                    Read Full Academic Integrity Policy
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* Counting Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container-section">
          <CountUpStats variant="dark" />
        </div>
      </section>

 
      {/* How It Works + Dashboard + Subscription + Why Publeesh */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="involve-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M0 10 L10 0 L20 10 L10 20Z" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-primary-foreground" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#involve-pattern)" />
          </svg>
        </div>

        <div className="container-section relative text-primary-foreground">

          {/* ── How It Works ── */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Sparkles className="h-10 w-10 text-accent mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-primary-foreground/80 text-lg">
              All within a unified academic dashboard.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <div className="grid md:grid-cols-5 gap-3">
              {[
                { step: "1", label: "Create or log in to your Afrika Scholar account" },
                { step: "2", label: "Subscribe to Research Intelligence Access" },
                { step: "3", label: "Start a Research Project Workspace" },
                { step: "4", label: "Generate structured drafts & retrieve global datasets" },
                { step: "5", label: "Export structured documents for refinement and supervision" },
              ].map(({ step, label }, i, arr) => (
                <div key={step} className="flex flex-col items-center text-center gap-3 relative">
                  <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-lg flex-shrink-0 z-10">
                    {step}
                  </div>
                  {i < arr.length - 1 && (
                    <div className="hidden md:block absolute top-6 left-[calc(50%+24px)] w-[calc(100%-48px)] h-px bg-primary-foreground/20" />
                  )}
                  <p className="text-primary-foreground/80 text-sm leading-snug">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Dashboard + Subscription ── */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">

            {/* Dashboard Features */}
            <Card className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-3 mb-1">
                  <div className="h-10 w-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <LayoutDashboard className="h-5 w-5 text-accent" />
                  </div>
                  <CardTitle className="text-primary-foreground text-xl">Publeesh Dashboard Features</CardTitle>
                </div>
                <CardDescription className="text-primary-foreground/60">
                  Designed for structured workflow, not chaos.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2.5">
                  {[
                    "Project Workspace Management",
                    "Structured Outline Generator",
                    "Literature Review Assistant",
                    "Citation Formatter",
                    "Global Dataset Explorer",
                    "Saved References Library",
                    "Comparative Analysis Builder",
                    "Export to Word / PDF",
                    "Academic Integrity Reminder",
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-primary-foreground/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Subscription Access */}
            <Card className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-3 mb-1">
                  <div className="h-10 w-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <CreditCard className="h-5 w-5 text-accent" />
                  </div>
                  <CardTitle className="text-primary-foreground text-xl">Subscription Access</CardTitle>
                </div>
                <CardDescription className="text-primary-foreground/60">
                  Research Intelligence access is available through subscription plans.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-primary-foreground/60 text-xs uppercase tracking-wider font-semibold mb-3">Plans may include:</p>
                <ul className="space-y-2.5 mb-8">
                  {[
                    "Writing & Structuring Access",
                    "Global Dataset Access",
                    "Advanced Comparative Intelligence",
                    "Institutional Licenses",
                  ].map((plan) => (
                    <li key={plan} className="flex items-center gap-3 text-sm text-primary-foreground/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                      {plan}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-3">
                  <Button className="w-full bg-accent hover:bg-accent/90" asChild>
                    <Link to="/publishing/subscribe">
                      View Subscription Plans
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                    asChild
                  >
                    <Link to="/advisory">
                      Request Institutional Access
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* ── Why Publeesh Matters ── */}
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">Why Publeesh Matters</h3>
              <p className="text-primary-foreground/70 max-w-xl mx-auto">
                Without compromising academic integrity.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Challenges */}
              <div className="rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/50 mb-4">African scholars often face:</p>
                <ul className="space-y-3">
                  {[
                    "Limited access to structured research tools",
                    "Difficulty accessing consolidated global datasets",
                    "Fragmented research workflow systems",
                    "Time inefficiencies in drafting and structuring",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-primary-foreground/75">
                      <span className="mt-1.5 h-4 w-4 rounded-full border border-primary-foreground/30 flex items-center justify-center flex-shrink-0">
                        <X className="h-2.5 w-2.5" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Empowerment */}
              <div className="rounded-xl bg-accent/10 border border-accent/30 p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">Publeesh empowers scholars to:</p>
                <ul className="space-y-3">
                  {[
                    { verb: "Work smarter", rest: "with structured AI-assisted workflows" },
                    { verb: "Structure better", rest: "through guided drafting and outlining" },
                    { verb: "Cite responsibly", rest: "with multi-format referencing tools" },
                    { verb: "Compare globally", rest: "using institutional datasets" },
                    { verb: "Publish confidently", rest: "with stronger, cleaner manuscripts" },
                  ].map(({ verb, rest }) => (
                    <li key={verb} className="flex items-start gap-3 text-sm text-primary-foreground/80">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                      <span>
                        <span className="font-semibold text-primary-foreground">{verb}</span>{" "}
                        <span className="text-primary-foreground/60">{rest}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* The Future of Research Intelligence + CTA */}
      <section className="section-padding bg-secondary/30">
        <div className="container-section">

          {/* Future Roadmap */}
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-wider text-accent font-semibold mb-2">
              What's Coming
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Future of Research Intelligence in Africa
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              As Afrika Scholar expands its publishing infrastructure and institutional partnerships, Publeesh will evolve.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
            {[
              {
                icon: LayoutDashboard,
                title: "Institutional Research Dashboards",
                desc: "University-level dashboards for tracking research output, productivity, and publication pipelines.",
              },
              {
                icon: Users,
                title: "Cross-Institutional Collaboration",
                desc: "Tools enabling structured academic partnerships and co-authorship coordination across institutions.",
              },
              {
                icon: TrendingUp,
                title: "Research Trend Analytics",
                desc: "Real-time analytics surfacing emerging research areas, citation trends, and knowledge gaps across Africa.",
              },
              {
                icon: BarChart2,
                title: "Impact Tracking Tools",
                desc: "Monitor research visibility, citations, and scholarly reach across global academic platforms.",
              },
              {
                icon: ShieldCheck,
                title: "AI-Assisted Peer Review Support",
                desc: "Ethical and structured assistance to improve review quality — not to replace reviewers.",
              },
              {
                icon: GraduationCap,
                title: "Research Supervision Assist",
                desc: "Modules supporting academic supervisors and postgraduate students through structured research workflows.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <Card key={title} className="card-hover flex flex-col group bg-background border-border/50">
                <CardHeader className="pb-3">
                  <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <Icon className="h-5 w-5 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <CardTitle className="text-base leading-snug">{title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Built for... tagline */}
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {["Built responsibly.", "Built institutionally.", "Built for long-term scholarly infrastructure."].map((tag) => (
              <span
                key={tag}
                className="px-5 py-2 rounded-full border border-accent/30 text-accent text-sm font-semibold bg-accent/5"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA Card */}
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground border-none overflow-hidden relative">
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <pattern id="cta-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                      <circle cx="1" cy="1" r="0.5" fill="currentColor" className="text-primary-foreground" />
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#cta-grid)" />
                </svg>
              </div>
              <CardContent className="p-8 md:p-12 relative">
                <div className="text-center mb-8">
                  <Sparkles className="h-9 w-9 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
                    Ready to Enhance Your Research Workflow?
                  </h3>
                  <p className="text-primary-foreground/70 max-w-lg mx-auto">
                    Join scholars and institutions already building smarter, more credible research with Publeesh.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                  <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
                    <Link to="/publications">
                      Access Research Intelligence
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                    asChild
                  >
                    <Link to="/publishing/subscribe">Subscribe to Publeesh</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                    asChild
                  >
                    <Link to="/advisory">Request Institutional Demo</Link>
                  </Button>
                </div>

                {/* Newsletter strip */}
                <div className="border-t border-primary-foreground/20 pt-8">
                  <div className="grid md:grid-cols-2 gap-6 items-center max-w-2xl mx-auto">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Mail className="h-5 w-5 text-accent" />
                        <h4 className="font-semibold text-primary-foreground">Stay Updated</h4>
                      </div>
                      <p className="text-primary-foreground/70 text-sm">
                        Research insights, calls for papers, and platform updates to your inbox.
                      </p>
                    </div>
                    <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      />
                      <Button
                        type="submit"
                        className="bg-accent hover:bg-accent/90 text-white border-none whitespace-nowrap"
                      >
                        Subscribe
                      </Button>
                    </form>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </section>

    </Layout>
  );
}

interface PublicationCardProps {
  publication: (typeof publications)[0];
  onCite: (pub: (typeof publications)[0]) => void;
}

function PublicationCard({ publication, onCite }: PublicationCardProps) {
  return (
    <Card className="card-hover h-full flex flex-col group">
      <CardHeader className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded">
            {publication.discipline}
          </span>
          <span className="text-xs text-muted-foreground">
            {publication.year}
          </span>
        </div>
        <CardTitle className="text-lg line-clamp-2 group-hover:text-accent transition-colors">
          {publication.title}
        </CardTitle>
        <CardDescription className="line-clamp-1">
          {publication.authors.join(", ")}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
          {publication.abstract}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">
            {publication.journal}
          </span>
          <Link
            to={`/article?id=${publication.id}`}
            className="text-sm text-accent font-medium hover:underline inline-flex items-center gap-1"
          >
            Read More <Lock className="h-3 w-3" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
