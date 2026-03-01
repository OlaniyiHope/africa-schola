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
import { PubleeshSection } from "./PubleeshSection";

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

export default function HomePage() {
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
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6">
  Pan-African Academic Publishing, Research & University
  Enablement with AI-Powered Research Intelligence
</h1>
   <p className="text-base md:text-lg text-primary-foreground/80 mb-10 max-w-3xl">
  Afrika Scholar is a journal-first academic infrastructure platform designed to publish, validate, preserve, and amplify African scholarship to global standards. It is strengthened by responsible AI-powered research intelligence tools that enhance productivity without compromising academic integrity.
</p>
              <div className="flex md:flex-row flex-col  gap-4">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90"
                  asChild
                >
                  <Link to="/publications">
                    Explore Journals
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="default"
                  className=" bg-white text-accent hover:border-accent hover:bg-primary-foreground/10 border hover:border-white"
                  asChild
                >
                  <Link to="/publishing/submit">Publish With Us</Link>
                </Button>
                <Button
                  size="lg"
                  variant="default"
                  className="border border-white hover:border-accent hover:bg-primary-foreground/10 text-primary-foreground"
                  asChild
                >
                  <Link to="/publeesh">Explore Research Intelligence</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <AnimatedHeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Research - 3 Cards */}
      <section className="section-padding bg-secondary/30">
        <div className="container-section">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Research
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Highlighting impactful research from across the African continent
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {featuredPublications.map((pub) => (
              <Card key={pub.id} className="card-hover flex flex-col group">
                <CardHeader className="flex-1">
                  <div className="flex items-center gap-2 text-sm text-accent font-medium mb-2">
                    <FileText className="h-4 w-4" />
                    {pub.journal}
                  </div>
                  <CardTitle className="text-lg line-clamp-2 group-hover:text-accent transition-colors">
                    {pub.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-1">
                    {pub.authors.join(", ")} • {pub.year}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                    {pub.abstract}
                  </p>
                  <div className="flex gap-2">
                    <Button size="sm" asChild>
                      <Link to={`/article?id=${pub.id}`}>
                        Read Full Article
                      </Link>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleCite(pub)}
                    >
                      Cite
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
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
<PubleeshSection />
      {/* Counting Stats Section */}
      {/* <section className="py-16 bg-primary text-primary-foreground">
        <div className="container-section">
          <CountUpStats variant="dark" />
        </div>
      </section> */}
<section className="py-16 bg-background">
  <div className="container-section">
    <CountUpStats variant="light" />
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
