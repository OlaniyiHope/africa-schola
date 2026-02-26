import { Link } from "react-router-dom";
import { 
  FileText, GraduationCap, Globe, Building2, ArrowRight, 
  AlertTriangle, Info, CheckCircle 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Layout } from "@/components/layout";

const advisoryAreas = [
  {
    icon: FileText,
    title: "Transcript Advisory",
    description: "Guidance on obtaining academic transcripts from Nigerian universities with step-by-step processes and institutional contacts.",
    link: "/advisory/transcripts",
    available: true,
  },
  {
    icon: GraduationCap,
    title: "Degree Programs",
    description: "Navigation support for part-time, Master's, and Doctoral programs at African universities.",
    link: "/advisory/degrees",
    available: true,
  },
  {
    icon: Globe,
    title: "Study in Africa",
    description: "Academic mobility support for studying across African countries.",
    link: "/advisory/study-in-africa",
    available: false,
    comingSoon: true,
  },
  {
    icon: Building2,
    title: "Institutional Liaison",
    description: "Facilitation of formal engagements between individuals and academic institutions.",
    link: "/advisory/institutional",
    available: false,
    comingSoon: true,
  },
];

export default function AdvisoryPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground section-padding">
        <div className="container-section">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Educational & University Advisory
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Expert guidance to navigate African university systems—transcripts, degrees, 
              mobility, and institutional engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding">
        <div className="container-section">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
            <p className="text-muted-foreground">
              Afrika Scholar's advisory services help you navigate the often complex processes 
              of African higher education systems. We provide guidance, resources, and support 
              to make your academic journey smoother.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {advisoryAreas.map((area) => (
              <Card 
                key={area.title} 
                className={`card-hover ${!area.available ? "opacity-75" : ""}`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <area.icon className="h-6 w-6 text-accent" />
                    </div>
                    {area.comingSoon && (
                      <span className="text-xs bg-secondary px-2 py-1 rounded-full">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  <CardTitle className="text-xl">{area.title}</CardTitle>
                  <CardDescription>{area.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {area.available ? (
                    <Button asChild>
                      <Link to={area.link}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  ) : (
                    <Button disabled variant="outline">
                      Coming Soon
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Positioning & Boundaries */}
      <section className="section-padding bg-secondary/30">
        <div className="container-section">
          <div className="max-w-3xl mx-auto">
            <Alert className="mb-8">
              <Info className="h-4 w-4" />
              <AlertTitle>Important Disclaimer</AlertTitle>
              <AlertDescription>
                Afrika Scholar provides advisory and guidance services only. We are not a recruitment 
                agency, degree mill, or credential verification authority. All formal processes must 
                be completed directly with the relevant institutions.
              </AlertDescription>
            </Alert>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    What We Do
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Provide accurate, up-to-date process information</li>
                    <li>• Share institutional contacts and requirements</li>
                    <li>• Offer guidance on documentation and timelines</li>
                    <li>• Connect you with relevant resources</li>
                    <li>• Support you through complex processes</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-amber-600" />
                    What We Don't Do
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Act as agents for universities</li>
                    <li>• Guarantee admission or transcript issuance</li>
                    <li>• Process applications on your behalf</li>
                    <li>• Issue or verify credentials</li>
                    <li>• Charge for third-party services</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Request Advisory */}
      <section className="section-padding">
        <div className="container-section">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Request Advisory Support</h2>
            <p className="text-muted-foreground mb-8">
              Need personalized guidance? Submit a request and our team will connect 
              you with the right resources and support for your specific situation.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
              <Link to="/advisory/request">
                Request Advisory
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
