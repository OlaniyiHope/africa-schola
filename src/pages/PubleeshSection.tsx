import { Link } from "react-router-dom";
import {
  FileText,
  BookOpen,
  Globe,
  BarChart3,
  Lightbulb,
  Cpu,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { icon: FileText, label: "Structured Drafting" },
  { icon: BookOpen, label: "Citation Guidance" },
  { icon: Globe, label: "Global Datasets" },
  { icon: BarChart3, label: "Comparative Tools" },
  { icon: Lightbulb, label: "Thesis Frameworks" },
  { icon: Cpu, label: "AI-Powered Insights" },
];

export function PubleeshSection() {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container-section">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

          {/* Left — Text */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">
              Research Intelligence
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-5">
              Research Intelligence,{" "}
              <span className="text-primary">Powered by Responsible AI</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Integrated within Afrika Scholar, Publeesh AI enhances research workflows through
              structured drafting support, citation guidance, and global dataset access that
              empowers scholars while preserving academic integrity.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2" asChild>
                <Link to="/publeesh">
                  Explore Research Intelligence <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              {/* <Button variant="outline" className="border-foreground/20 text-foreground hover:bg-secondary" asChild>
                <Link to="/publeesh/access">Access Research Intelligence</Link>
              </Button> */}
              <Button variant="outline" className="border-foreground/20 text-foreground hover:bg-secondary" asChild>
                <Link to="/publeesh/pricing">View Subscription Plans</Link>
              </Button>
            </div>
          </div>

          {/* Right — Feature Grid */}
          <div className="grid grid-cols-2 gap-4">
            {features.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border bg-background hover:shadow-md hover:border-accent/40 transition-all group cursor-default"
              >
                <Icon className="h-7 w-7 text-accent group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-foreground text-center">{label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
