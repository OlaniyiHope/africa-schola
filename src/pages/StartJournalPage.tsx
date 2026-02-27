import { Link } from "react-router-dom";
import {
  BookOpen,
  Users,
  Settings,
  ArrowRight,
  CheckCircle,
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
  "Journal Identity & Scope",
  "Sponsoring Entity",
  "Editorial Leadership",
  "Policies & Processes",
  "Technical Setup",
  "Review & Launch",
];

export default function StartJournalPage() {
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
Start a Journal
      </p>
      <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
Start a Journal
      </h1>
      <p className="text-xl text-primary-foreground/80">
Launch a peer-reviewed academic journal with Afrika Scholar's publishing infrastructure.
      </p>
    </div>
  </div>
</section>
      <section className="section-padding">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6">What You'll Get</h2>
              <ul className="space-y-4">
                {[
                  "Professional journal hosting",
                  "Peer review management system",
                  "DOI registration",
                  "Indexing support",
                  "Editorial dashboard",
                  "Author submission portal",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Journal Proposal Process</CardTitle>
                <CardDescription>6-step guided wizard</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3">
                  {steps.map((step, index) => (
                    <li key={step} className="flex items-center gap-3">
                      <div className="h-6 w-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </div>
                      <span className="text-sm">{step}</span>
                    </li>
                  ))}
                </ol>
                <Button
                  className="w-full mt-6 bg-accent hover:bg-accent/90"
                  asChild
                >
                  <a
                    href="/start-publishing"
               
                    rel="noopener noreferrer"
                  >
                    Start Proposal
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
