import { Link } from "react-router-dom";
import {
  FileText,
  Upload,
  Users,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Clock,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Layout } from "@/components/layout";
import transcriptHero from "@/assets/about-conference.jpg";
const steps = [
  {
    icon: BookOpen,
    title: "Select Journal",
    description: "Choose the right journal for your research",
  },
  {
    icon: FileText,
    title: "Prepare Manuscript",
    description: "Format according to guidelines",
  },
  {
    icon: Upload,
    title: "Submit",
    description: "Upload your manuscript and files",
  },
  {
    icon: Users,
    title: "Peer Review",
    description: "Expert evaluation of your work",
  },
  {
    icon: CheckCircle,
    title: "Publication",
    description: "Get published and indexed",
  },
];

export default function SubmitManuscriptPage() {
  return (
    <Layout>
<section className="relative overflow-hidden min-h-[400px]">
  <div className="absolute inset-0">
    <img
      src={transcriptHero}
      alt="Transcript Advisory"
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
          id="transcript-grid"
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
      <rect width="100" height="100" fill="url(#transcript-grid)" />
    </svg>
  </div>
  <div className="container-section relative section-padding">
    <div className="max-w-3xl mx-auto text-center text-primary-foreground">
      <p className="text-sm uppercase tracking-wider text-accent font-semibold mb-4">
 Submit Your Manuscript
      </p>
      <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
      Submit Your Manuscript
      </h1>
      <p className="text-xl text-primary-foreground/80">
     Share your research with the world through Afrika Scholar's peer-reviewed journals.
      </p>
    </div>
  </div>
</section>

      <section className="section-padding">
        <div className="container-section">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Submission Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our streamlined 5-step process from submission to publication
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {steps.map((step, index) => (
              <div key={step.title} className="flex items-center">
                <Card className="w-48 text-center">
                  <CardContent className="p-4">
                    <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-2">
                      <step.icon className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="font-semibold text-sm">{step.title}</h3>
                    <p className="text-xs text-muted-foreground">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                {index < steps.length - 1 && (
                  <ArrowRight className="h-5 w-5 text-muted-foreground mx-2 hidden md:block" />
                )}
              </div>
            ))}
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle>Start Your Submission</CardTitle>
              <CardDescription>
                The full manuscript submission form will guide you through each
                step
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-secondary/50 rounded-lg">
                  <Clock className="h-6 w-6 mx-auto mb-2 text-accent" />
                  <p className="text-sm font-medium">4-6 Week Review</p>
                </div>
                <div className="p-4 bg-secondary/50 rounded-lg">
                  <Users className="h-6 w-6 mx-auto mb-2 text-accent" />
                  <p className="text-sm font-medium">Double-Blind Review</p>
                </div>
                <div className="p-4 bg-secondary/50 rounded-lg">
                  <Shield className="h-6 w-6 mx-auto mb-2 text-accent" />
                  <p className="text-sm font-medium">Open Access</p>
                </div>
              </div>
              <div className="text-center">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90"
                  asChild
                >
                  <Link
                    to="/submit-form"
    
                    rel="noopener noreferrer"
                  >
                    Begin Submission
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Need help?{" "}
                  <Link
                    to="/standards"
                    className="text-accent hover:underline"
                  >
                    View our submission guidelines
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
