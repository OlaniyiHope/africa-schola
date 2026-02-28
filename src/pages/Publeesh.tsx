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
  Globe
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
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="African scholars collaborating"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
        </div>
        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="hero-grid"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="1"
                  cy="1"
                  r="0.5"
                  fill="currentColor"
                  className="text-primary-foreground"
                />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#hero-grid)" />
          </svg>
        </div>
        <div className="container-section relative py-24 md:py-36">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up text-primary-foreground">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Research Intelligence, Powered by Responsible AI
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-xl">
Integrated within Afrika Scholar, Publeesh AI enhances research workflows through structured drafting support, citation guidance, and global dataset access that empowers scholars while preserving academic integrity.
              </p>
              <div className="flex md:flex-row flex-col  gap-4">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90"
                  asChild
                >
                  <Link to="/publications">
               Enhancing Research
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="default"
                  className=" bg-white text-accent hover:border-accent hover:bg-primary-foreground/10 border hover:border-white"
                  asChild
                >
                  <Link to="/publishing/submit">Strengthening Scholarship</Link>
                </Button>
                <Button
                  size="lg"
                  variant="default"
                  className="border border-white hover:border-accent hover:bg-primary-foreground/10 text-primary-foreground"
                  asChild
                >
                  <Link to="/network/apply">Preserving Integrity</Link>
                </Button>
              </div>
            </div>
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
            <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
              <Link to="/publications">
                Explore Publeesh
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>


      {/* What Afrika Scholar Enables */}
      <section className="section-padding">
        <div className="container-section">
          <div className="text-center mb-4">
            <p className="text-sm uppercase tracking-wider text-accent font-semibold mb-2">
              What Afrika Scholar Enables
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Academic Publishing, Research & Institutional Enablement <br></br>Built
              for Africa
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {pillars.map((pillar, index) => (
              <Card
                key={pillar.title}
                className="card-hover group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <pillar.icon className="h-6 w-6 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <CardTitle className="text-xl">{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {pillar.description}
                  </p>
                  <Link
                    to={pillar.link}
                    className="inline-flex items-center text-accent font-medium hover:underline"
                  >
                    {pillar.linkLabel}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Counting Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container-section">
          <CountUpStats variant="dark" />
        </div>
      </section>

      {/* Recent Publications with Tabs */}
      <section className="section-padding bg-secondary/30">
        <div className="container-section">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Recent Publications
              </h2>
              <p className="text-muted-foreground">
                Latest research across disciplines
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/publications">
                View All Publications
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-6 flex-wrap h-auto gap-2">
              <TabsTrigger value="all">All</TabsTrigger>
              {disciplines.slice(0, 5).map((discipline) => (
                <TabsTrigger key={discipline} value={discipline}>
                  {discipline}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="all">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentPublications.map((pub) => (
                  <PublicationCard
                    key={pub.id}
                    publication={pub}
                    onCite={handleCite}
                  />
                ))}
              </div>
            </TabsContent>

            {disciplines.slice(0, 5).map((discipline) => (
              <TabsContent key={discipline} value={discipline}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {publications
                    .filter((p) => p.discipline === discipline)
                    .slice(0, 6)
                    .map((pub) => (
                      <PublicationCard
                        key={pub.id}
                        publication={pub}
                        onCite={handleCite}
                      />
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute inset-0 opacity-10">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="involve-pattern"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M0 10 L10 0 L20 10 L10 20Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.3"
                  className="text-primary-foreground"
                />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#involve-pattern)" />
          </svg>
        </div>
        <div className="container-section relative text-primary-foreground">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Sparkles className="h-10 w-10 text-accent mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get Involved
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              Join Africa's growing academic community. Whether you're a
              researcher, educator, or institution, there's a place for you.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm card-hover">
              <CardContent className="p-6 text-center">
                <div className="h-14 w-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-primary-foreground mb-2">
                  Submit Research
                </h3>
                <p className="text-primary-foreground/70 text-sm mb-4">
                  Submit your research for peer-reviewed publication
                </p>
                <Button className="w-full bg-accent hover:bg-accent/90" asChild>
                  <Link to="/publishing/submit">Submit Manuscript</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm card-hover">
              <CardContent className="p-6 text-center">
                <div className="h-14 w-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-primary-foreground mb-2">
                  Join Reviewers Network
                </h3>
                <p className="text-primary-foreground/70 text-sm mb-4">
                  Join our network of academic reviewers
                </p>
                <Button className="w-full bg-accent hover:bg-accent/90" asChild>
                  <Link to="/network#who-can-join">Apply Now</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm card-hover">
              <CardContent className="p-6 text-center">
                <div className="h-14 w-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-primary-foreground mb-2">
                  Partner With Us
                </h3>
                <p className="text-primary-foreground/70 text-sm mb-4">
                  Partner with us to expand African scholarship
                </p>
                <Button className="w-full bg-accent hover:bg-accent/90" asChild>
                  <Link to="/network">Explore Partnership</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm card-hover">
              <CardContent className="p-6 text-center">
                <div className="h-14 w-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-primary-foreground mb-2">
            Request Advisory
                </h3>
                <p className="text-primary-foreground/70 text-sm mb-4">
                  Join us as professional and academic collaborator
                </p>
                <Button className="w-full bg-accent hover:bg-accent/90" asChild>
                  <Link to="/network">    Request Advisory</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog & Insights */}
      <section className="section-padding bg-secondary/30">
        <div className="container-section">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-wider text-accent font-semibold mb-2">
              Insights & Updates
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              From the Afrika Scholar Knowledge Desk
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title:
                  "Why Africa Needs Its Own Academic Publishing Infrastructure",
                excerpt:
                  "Exploring the critical need for localized publishing platforms to ensure African research is prioritized...",
                date: "May 15, 2024",
                slug: "africa-publishing",
              },
              {
                title: "Improving Global Visibility of African Research",
                excerpt:
                  "Strategies and tools for researchers to increase the impact and reach of their academic work...",
                date: "June 2, 2024",
                slug: "global-visibility",
              },
              {
                title: "Peer Review and Research Integrity in Africa",
                excerpt:
                  "Maintaining high ethical standards and robust peer-review processes in the evolving landscape...",
                date: "June 20, 2024",
                slug: "peer-review",
              },
            ].map((post) => (
              <Card
                key={post.slug}
                className="card-hover flex flex-col h-full bg-background border-border/50"
              >
                <CardHeader>
                  <div className="text-xs text-muted-foreground mb-2">
                    {post.date}
                  </div>
                  <CardTitle className="text-xl leading-tight">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog`}
                    className="text-accent font-medium text-sm hover:underline inline-flex items-center"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mb-16">
            <Button variant="outline" size="lg" asChild>
              <Link to="/blog">
                View All Insights <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground border-none">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Mail className="h-6 w-6 text-accent" />
                      <h3 className="text-2xl font-bold">Stay Updated</h3>
                    </div>
                    <p className="text-primary-foreground/80">
                      Get research insights, calls for papers, and platform
                      updates delivered to your inbox.
                    </p>
                  </div>
                  <form
                    onSubmit={handleSubscribe}
                    className="flex flex-col sm:flex-row gap-3"
                  >
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
                      Subscribe Now
                    </Button>
                  </form>
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
