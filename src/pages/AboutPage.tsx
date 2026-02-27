import { Link } from "react-router-dom";
import {
  Target,
  Eye,
  BookOpen,
  Users,
  GraduationCap,
  Puzzle,
  Globe,
  Heart,
  Lightbulb,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Layout } from "@/components/layout";
import { CountUpStats } from "@/components/home/CountUpStats";
import aboutConference from "@/assets/about-conference.jpg";
import aboutCampus from "@/assets/about-campus.jpg";
import heroScholars from "@/assets/hero-scholars.jpg";
import networkCollab from "@/assets/network-collaboration.jpg";

const pillars = [
  {
    icon: BookOpen,
    title: "Academic Publishing",
    image: null,
    description:
      "Publishing is the foundation of Afrika Scholar. We publish peer-reviewed, open-access academic journals aligned with international editorial, ethical, and publishing standards.",
    details: [
      "Credible and rigorously reviewed",
      "Openly accessible without compromising quality",
      "Globally visible, index-ready, and citable",
      "Preserved as a long-term scholarly asset",
    ],
    link: "/publications",
  },
  {
    icon: Users,
    title: "Lecturer & Academic Partners Network",
    image: null,
    description:
      "A curated Academic Partners Network of lecturers, researchers, editors, reviewers, and academically qualified professionals.",
    details: [
      "Academics publish, review, and collaborate within Afrika Scholar",
      "Peer review and editorial capacity are strengthened",
      "Qualified academics gain visibility and recognition",
      "Structured, standards-aligned academic opportunities",
    ],
    link: "/network",
  },
  {
    icon: GraduationCap,
    title: "Educational & University Advisory",
    image: null,
    description:
      "Academic coordination layer delivered in partnership with universities and institutions.",
    details: [
      "Transcript facilitation and academic documentation coordination",
      "Academic pathway and progression guidance",
      "Liaison with partner universities across Africa",
      "Support for structured academic processes",
    ],
    link: "/advisory",
  },
  {
    icon: Puzzle,
    title: "Knowledge Enablement & Integration",
    image: null,
    description:
      "Enabling professionals, practitioners, institutions, and education platforms to engage academia credibly.",
    details: [
      "Applied and professional research publishing",
      "Collaboration between industry, policy, and academia",
      "Academic governance, validation, and compliance for EdTech platforms",
      "Curriculum, content, and research alignment to global standards",
    ],
    link: "/about#enablement",
  },
  {
    icon: Puzzle,
    title: "Publeesh(AI tool)",
    image: null,
    description:
      "AI-powered publishing/research tool to help with writing, research, data sets",
    details: [
      "Applied and professional research publishing",
      "Collaboration between industry, policy, and academia",
      "Academic governance, validation, and compliance for EdTech platforms",
      "Curriculum, content, and research alignment to global standards",
    ],
    link: "/about#enablement",
  },
];

const gaps = [
  "Limited access to credible publishing infrastructure",
  "Fragmented research dissemination systems",
  "Underutilised academic expertise",
  "Weak coordination between academia, institutions, industry, and education platforms",
];

const commitments = [
  "Academic integrity and rigorous peer review",
  "Institutional respect and collaboration",
  "Knowledge equity and open access",
  "Capacity building across Africa",
  "Responsible innovation and long-term impact",
];

const sdgs = [
  { number: 4, title: "Quality Education" },
  { number: 8, title: "Decent Work" },
  { number: 9, title: "Innovation" },
  { number: 17, title: "Partnerships" },
];

const engageLinks = [
  { label: "Publish with Afrika Scholar", link: "/publishing/submit" },
  { label: "Join the Academic Partners Network", link: "/network/apply" },
  { label: "Access Educational & University Advisory", link: "/advisory" },
  { label: "Partner for Enablement & Integration", link: "/network" },
];

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[400px]">
        <div className="absolute inset-0">
          <img
            src={aboutConference}
            alt="Academic conference"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="absolute inset-0 opacity-10">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="about-grid"
                width="8"
                height="8"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="1"
                  cy="1"
                  r="0.4"
                  fill="currentColor"
                  className="text-primary-foreground"
                />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#about-grid)" />
          </svg>
        </div>
        <div className="container-section relative section-padding">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <p className="text-sm uppercase tracking-wider text-accent font-semibold mb-4">
              About Afrika Scholar
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
              Pan-African Academic Publishing, Research & University Enablement
              Infrastructure
            </h1>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Who We Are
              </h2>
              <p className="text-muted-foreground text-lg mb-4">
                Afrika Scholar is a Pan-African Academic Publishing, Research &
                University Enablement Infrastructure built to strengthen
                Africa's role, visibility, and credibility within the global
                knowledge ecosystem.
              </p>
              <p className="text-muted-foreground text-lg mb-4">
                We operate as a journal-first platform and a broader academic
                infrastructure that enables scholars, institutions,
                professionals, and education platforms to publish, collaborate,
                coordinate, and advance knowledge responsibly.
              </p>
              <p className="text-muted-foreground text-lg italic border-l-4 border-accent pl-4">
                Afrika Scholar is designed as long-term academic infrastructure
                — not a media site, consultancy, or short-term EdTech product.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={heroScholars}
                  alt="African scholars collaborating"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-2xl bg-accent/20 -z-10" />
              <div className="absolute -top-4 -right-4 h-20 w-20 rounded-2xl bg-primary/20 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary/30" id="mission">
        <div className="container-section">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="card-hover border-l-4 border-l-primary">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To build and sustain African-owned academic infrastructure
                  that empowers scholars, strengthens institutions, and advances
                  global knowledge equity.
                </p>
              </CardContent>
            </Card>
            <Card className="card-hover border-l-4 border-l-accent">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A future where African scholarship is globally visible,
                  institutionally strong, ethically published, and preserved for
                  generations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container-section">
          <CountUpStats variant="dark" />
        </div>
      </section>

      {/* Why Afrika Scholar Exists */}
      <section className="section-padding" id="why">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={aboutCampus}
                  alt="African university campus"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 h-28 w-28 rounded-2xl bg-primary/10 -z-10" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Afrika Scholar Exists
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                African scholarship is rich, diverse, and impactful — yet often
                constrained by:
              </p>
              <div className="space-y-4">
                {gaps.map((gap, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50"
                  >
                    <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold shrink-0 text-sm">
                      {index + 1}
                    </div>
                    <p className="text-muted-foreground">{gap}</p>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground text-lg mt-8">
                Afrika Scholar was created to address these gaps systemically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Four Core Pillars */}
      <section className="section-padding bg-secondary/30" id="pillars">
        <div className="container-section">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Four Core Pillars
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Afrika Scholar is structured around four equally important
              pillars, each reinforcing the other.
            </p>
          </div>
          <Accordion type="single" collapsible className="max-w-4xl mx-auto">
            {pillars.map((pillar, index) => (
              <AccordionItem key={pillar.title} value={`item-${index}`}>
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-4 text-left">
                    <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <pillar.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">
                        {index + 1}. {pillar.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-16">
                  <ul className="space-y-2 mb-4">
                    {pillar.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" size="sm" asChild>
                    <Link to={pillar.link}>
                      Explore {pillar.title}{" "}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Commitments */}
      <section className="section-padding">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Commitments
              </h2>
              <ul className="space-y-3">
                {commitments.map((commitment) => (
                  <li key={commitment} className="flex items-center gap-3">
                    <Heart className="h-5 w-5 text-accent shrink-0" />
                    <span>{commitment}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground mt-6 text-sm">
                Our work aligns with the United Nations Sustainable Development
                Goals (SDGs).
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                {sdgs.map((sdg) => (
                  <div
                    key={sdg.number}
                    className="flex items-center gap-2 bg-accent/10 px-3 py-2 rounded-full text-sm"
                  >
                    <span className="font-bold text-accent">
                      SDG {sdg.number}
                    </span>
                    <span className="text-muted-foreground">{sdg.title}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={networkCollab}
                  alt="Research collaboration"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -top-4 -left-4 h-20 w-20 rounded-2xl bg-accent/15 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Powered by CycleBreeze */}
      <section className="section-padding bg-secondary/30">
        <div className="container-section">
          <div className="max-w-3xl mx-auto text-center">
            <Globe className="h-10 w-10 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground mb-2 text-sm">Powered by</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">CycleBreeze</h2>
            <p className="text-muted-foreground mb-8">
              Afrika Scholar is powered by CycleBreeze, a research and
              technology development company providing the secure digital
              infrastructure, publishing systems, and long-term technical
              support that enable Afrika Scholar to operate as a durable
              academic institution.
            </p>
            <Button variant="outline" asChild>
              <a
                href="https://cyclebreeze.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More About CycleBreeze{" "}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Engage CTA */}
      <section className="relative overflow-hidden section-padding">
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute inset-0 opacity-10">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="engage-dots"
                width="5"
                height="5"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="2.5"
                  cy="2.5"
                  r="0.5"
                  fill="currentColor"
                  className="text-primary-foreground"
                />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#engage-dots)" />
          </svg>
        </div>
        <div className="container-section relative text-primary-foreground">
          <div className="max-w-3xl mx-auto text-center">
            <Lightbulb className="h-12 w-12 mx-auto mb-6 text-accent" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Engage With Afrika Scholar
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {engageLinks.map((item) => (
                <Button
                  key={item.label}
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 text-accent hover:bg-primary-foreground/10"
                  asChild
                >
                  <Link to={item.link}>
                    {item.label} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              ))}
            </div>
            <div className="mt-8">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90"
                asChild
              >
                <Link to="/publishing/submit">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
