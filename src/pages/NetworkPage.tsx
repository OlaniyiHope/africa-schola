import { Link } from "react-router-dom";
import {
  Users,
  BookOpen,
  Search,
  FileEdit,
  GraduationCap,
  Award,
  Globe,
  ArrowRight,
  CheckCircle,
  Briefcase,
  Shield,
  FileText,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Layout } from "@/components/layout";
import { CountUpStats } from "@/components/home/CountUpStats";
import networkImage from "@/assets/network-collaboration.jpg";
import heroScholars from "@/assets/hero-scholars.jpg";

const engagementTypes = [
  {
    icon: GraduationCap,
    title: "Teaching & Academic Delivery",
    items: [
      "Part-time or short-term lecturing",
      "Online and blended teaching for EdTech platforms",
      "Guest lectures, masterclasses, and specialist modules",
      "Academic supervision and mentoring",
    ],
  },
  {
    icon: Search,
    title: "Research & Scholarly Engagement",
    items: [
      "Institutional and industry-linked research",
      "Policy, technical, and applied research",
      "Collaborative research across institutions",
      "Research advisory and validation roles",
    ],
  },
  {
    icon: FileEdit,
    title: "Peer Review & Editorial Roles",
    items: [
      "Peer review for Afrika Scholar journals",
      "Editorial and review support for partner publications",
      "Academic quality assurance and validation",
    ],
  },
  {
    icon: BookOpen,
    title: "Curriculum & Content Development",
    items: [
      "Curriculum design and academic review",
      "Development of learning materials and academic content",
      "Knowledge transfer from academia to industry-aligned programs",
    ],
  },
];

const whoCanJoin = [
  "University lecturers and professors",
  "Postdoctoral researchers and senior PhD holders",
  "Academics seeking project-based engagements",
  "Qualified professionals contributing to academic delivery",
];

const howToJoin = [
  "Submit an expression of interest",
  "Provide academic and professional credentials",
  "Indicate areas of expertise and engagement preferences",
];

export default function NetworkPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[500px]">
        <div className="absolute inset-0">
          <img
            src={networkImage}
            alt="Academic collaboration"
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
                id="net-grid"
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
            <rect width="100" height="100" fill="url(#net-grid)" />
          </svg>
        </div>
        <div className="container-section relative py-24 md:py-32 text-primary-foreground">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
              Earn Beyond the Classroom. Work With Global Institutions. Extend
              Your Academic Impact.
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl">
              The Afrika Scholar Lecturer & Academic Partners Network is a
              curated academic collaboration program for lecturers, professors,
              researchers, and academically qualified professionals who want to
              extend their impact beyond their primary institutions.
            </p>
            <div className="flex flex-row flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90"
                asChild
              >
                <Link to="/network/apply">
                  Apply to Join the Network{" "}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Network Exists */}
      <section className="section-padding" id="why">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why This Network Exists
              </h2>
              <p className="text-muted-foreground mb-6">
                Across Africa, thousands of highly qualified academics possess
                deep expertise that is underutilised beyond their home
                institutions. At the same time, institutions struggle to access:
              </p>
              <ul className="space-y-3">
                {[
                  "Verified lecturers required for accreditation or licensing",
                  "Qualified academics for short-term or part-time teaching",
                  "Researchers for institutional, policy, or industry-linked projects",
                  "Peer reviewers and academic validators",
                  "Subject experts for curriculum and content development",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground mt-6 font-medium">
                The Network bridges this gap — unlocking opportunity for
                academics while providing institutions with trusted academic
                capacity.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={heroScholars}
                  alt="Scholars collaborating"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-2xl bg-accent/20 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* What Afrika Scholar Provides */}
      <section className="section-padding bg-secondary/30">
        <div className="container-section">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Afrika Scholar Provides
            </h2>
            <p className="text-muted-foreground">
              Afrika Scholar manages the Network as a curated academic
              ecosystem, not an open marketplace.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Shield, text: "Verify academic credentials" },
              { icon: Users, text: "Maintain structured academic profiles" },
              {
                icon: Search,
                text: "Match academics to relevant opportunities",
              },
              {
                icon: Briefcase,
                text: "Coordinate engagements professionally",
              },
              {
                icon: CheckCircle,
                text: "Enforce ethical and academic standards",
              },
              { icon: Star, text: "Protect both academic and institution" },
            ].map((item) => (
              <Card key={item.text} className="card-hover">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-accent" />
                  </div>
                  <span className="font-medium">{item.text}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Engagements */}
      <section className="section-padding" id="engagements">
        <div className="container-section">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Types of Engagements Available
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Approved Academic Partners may be engaged across four core areas
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {engagementTypes.map((engagement, index) => (
              <Card key={engagement.title} className="card-hover">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <engagement.icon className="h-5 w-5 text-accent" />
                    </div>
                    <CardTitle className="text-lg">
                      {index + 1}. {engagement.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {engagement.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
              <Link to="/network/apply">
                Apply to Explore the Network{" "}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How Value Is Created */}
      <section className="section-padding bg-secondary/30" id="institutions">
        <div className="container-section">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How Value Is Created
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Afrika Scholar operates a reciprocal value model.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-accent/20 card-hover">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <GraduationCap className="h-5 w-5 text-accent" />
                  </div>
                  <CardTitle>Academic Partners Receive</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Priority consideration for paid external engagements",
                    "Increased visibility across institutional and partner networks",
                    "Preferential access to Afrika Scholar services",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-1" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="border-primary/20 card-hover">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Partner Institutions Receive</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Access to verified, Africa-based academic talent",
                    "Structured academic deployment",
                    "Support for accreditation, licensing, and research needs",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-1" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who Can Join & How to Join */}
      <section className="section-padding" id="who-can-join"> 
        <div className="container-section">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6">Who Can Join</h2>
              <p className="text-muted-foreground mb-6">
                The Network is open to:
              </p>
              <ul className="space-y-3">
                {whoCanJoin.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground mt-4 italic">
                Participation is selective and subject to credential
                verification.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">How to Join</h2>
              <div className="space-y-4">
                {howToJoin.map((step, index) => (
                  <div
                    key={step}
                    className="flex items-start gap-4 p-4 bg-secondary/50 rounded-lg"
                  >
                    <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold shrink-0 text-sm">
                      {index + 1}
                    </div>
                    <span className="font-medium mt-1">{step}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Approved applicants are onboarded and contacted when relevant
                opportunities arise.
              </p>
              <Button className="mt-6 bg-accent hover:bg-accent/90" asChild>
                <Link to="/network/apply">
                  Apply to Join the Network{" "}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="py-12 bg-secondary/30">
        <div className="container-section">
          <Card className="max-w-4xl mx-auto border-accent/20">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <Shield className="h-8 w-8 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Important Note</h3>
                  <p className="text-muted-foreground">
                    Afrika Scholar is not an employer and does not replace a
                    lecturer's primary institution. We operate as an academic
                    coordination and enablement platform, ensuring all
                    engagements are ethical, compliant, and professionally
                    aligned.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stronger Ecosystem + CTA */}
      <section
        className="relative overflow-hidden section-padding"
        id="partnerships"
      >
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute inset-0 opacity-10">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="net-cta"
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
            <rect width="100" height="100" fill="url(#net-cta)" />
          </svg>
        </div>
        <div className="container-section relative text-primary-foreground">
          <div className="max-w-3xl mx-auto text-center">
            <Globe className="h-12 w-12 mx-auto mb-6 text-accent" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              A Stronger Academic Ecosystem
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-4">
              Through the Network, Afrika Scholar is:
            </p>
            <ul className="text-left max-w-xl mx-auto space-y-3 mb-8">
              {[
                "Creating structured income opportunities for African academics",
                "Supporting institutions with credible academic capacity",
                "Bridging teaching, research, and professional practice",
                "Ensuring African expertise plays a central role in global knowledge systems",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-accent font-semibold text-lg mb-8">
              Afrika Scholar — where African academic expertise meets global
              opportunity.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
              <Link to="/network/apply">
                Apply to Join Network <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
