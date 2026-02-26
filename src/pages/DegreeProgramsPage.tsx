import { Link } from "react-router-dom";
import { 
  GraduationCap, Clock, Building2, ArrowRight, CheckCircle, 
  BookOpen, Users, Briefcase, ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Layout } from "@/components/layout";

const pathways = [
  {
    title: "Part-Time Undergraduate Programs",
    description: "Earn your bachelor's degree while maintaining your career. Flexible schedules designed for working professionals.",
    duration: "4-6 years",
    format: "Evening & Weekend Classes",
    features: [
      "Flexible class schedules",
      "Same qualification as full-time programs",
      "Career-compatible timing",
      "Practical project-based learning",
    ],
  },
  {
    title: "Master's Programs",
    description: "Advance your expertise with postgraduate education. Specialized programs across disciplines.",
    duration: "18-24 months",
    format: "Full-time, Part-time, or Hybrid",
    features: [
      "Research and coursework options",
      "Industry-relevant specializations",
      "Thesis or project-based completion",
      "Networking with professionals",
    ],
  },
  {
    title: "Doctoral Programs (PhD)",
    description: "Contribute original research to your field. Join the academic community as a researcher and educator.",
    duration: "3-5 years",
    format: "Research-focused",
    features: [
      "Original research contribution",
      "Publication opportunities",
      "Academic mentorship",
      "Conference participation",
    ],
  },
];

const supportAreas = [
  "Program selection guidance",
  "Admission requirements clarification",
  "Application process support",
  "Institution comparison insights",
  "Scholarship and funding information",
  "Timeline and planning assistance",
];

export default function DegreeProgramsPage() {
  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-secondary/30 border-b">
        <div className="container-section py-3">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/advisory" className="hover:text-foreground">Advisory</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Degree Programs</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-12">
        <div className="container-section">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Degree Programs</h1>
            <p className="text-xl text-primary-foreground/80">
              Navigate pathways to part-time undergraduate, Master's, and Doctoral programs 
              at African universities.
            </p>
          </div>
        </div>
      </section>

      {/* Pathway Cards */}
      <section className="section-padding">
        <div className="container-section">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Academic Pathways</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore degree options that fit your career stage and goals
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pathways.map((pathway, index) => (
              <Card key={pathway.title} className="card-hover flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <GraduationCap className="h-5 w-5 text-accent" />
                    </div>
                    <div className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{pathway.title}</CardTitle>
                  <CardDescription>{pathway.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-xs text-muted-foreground">Duration</p>
                        <p className="text-sm font-medium">{pathway.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-xs text-muted-foreground">Format</p>
                        <p className="text-sm font-medium">{pathway.format}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-auto">
                    <h4 className="text-sm font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {pathway.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Support */}
      <section className="section-padding bg-secondary/30">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Comprehensive Pathway Support
              </h2>
              <p className="text-muted-foreground mb-8">
                Afrika Scholar provides guidance throughout your academic journey—from 
                program selection to application completion. We help you make informed 
                decisions about your educational future.
              </p>
              <ul className="space-y-3">
                {supportAreas.map((area) => (
                  <li key={area} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center">
                <CardContent className="p-6">
                  <BookOpen className="h-8 w-8 mx-auto mb-3 text-accent" />
                  <div className="text-2xl font-bold mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">Programs Covered</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Building2 className="h-8 w-8 mx-auto mb-3 text-accent" />
                  <div className="text-2xl font-bold mb-1">20+</div>
                  <div className="text-sm text-muted-foreground">Partner Universities</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Users className="h-8 w-8 mx-auto mb-3 text-accent" />
                  <div className="text-2xl font-bold mb-1">500+</div>
                  <div className="text-sm text-muted-foreground">Students Guided</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Briefcase className="h-8 w-8 mx-auto mb-3 text-accent" />
                  <div className="text-2xl font-bold mb-1">85%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Positioning Notice */}
      <section className="section-padding">
        <div className="container-section">
          <div className="max-w-3xl mx-auto">
            <Alert>
              <Building2 className="h-4 w-4" />
              <AlertTitle>Our Position</AlertTitle>
              <AlertDescription>
                Afrika Scholar provides advisory services only. We do not:
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Guarantee admission to any program</li>
                  <li>Act as admission agents for universities</li>
                  <li>Process applications on your behalf</li>
                  <li>Charge for university-related fees</li>
                </ul>
                All formal applications must be submitted directly to the institution.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-section">
          <div className="max-w-3xl mx-auto text-center">
            <GraduationCap className="h-12 w-12 mx-auto mb-6 text-accent" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Journey</h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Ready to explore degree options? Request a consultation to discuss your 
              academic goals and find the right pathway.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
              <Link to="/advisory/request">
                Request Degree Advisory
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
