import { Link } from "react-router-dom";
import { 
  FileText, GraduationCap, Globe, Building2, ArrowRight, 
  AlertTriangle, Info, CheckCircle, CheckCircle2, Shield, BookOpen, Users,  Scale
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Layout } from "@/components/layout";
import advisoryHero from "@/assets/about-conference.jpg";

const standards = [
  { icon: Users, title: "Peer Review Policy", desc: "All submissions undergo rigorous single-blind or double-blind peer review by qualified experts. Minimum two independent reviewers per manuscript.", link: "/framework/peer-review" },
  { icon: Shield, title: "Editorial Independence", desc: "Editorial decisions are based solely on academic merit. No external influence from funders, advertisers, or institutional stakeholders.", link: "/framework/editorial-independence" },
  { icon: Scale, title: "Ethics & Malpractice Policy", desc: "Aligned with COPE (Committee on Publication Ethics) guidelines. Zero tolerance for plagiarism, fabrication, and duplicate submissions.", link: "/framework/ethics" },
  { icon: FileText, title: "Author Guidelines", desc: "Comprehensive submission guidelines including formatting, referencing standards, word limits, and supplementary material requirements.", link: "/framework/author-guidelines" },
  { icon: BookOpen, title: "Open Access & Licensing", desc: "All journals operate under Creative Commons licensing (CC BY 4.0). Free to read, share, and build upon with proper attribution.", link: "/framework/open-access" },
  { icon: CheckCircle2, title: "Retraction & Correction Policy", desc: "Transparent procedures for retractions, corrections, and expressions of concern. Compliant with COPE retraction guidelines.", link: "/framework/retraction-policy" },
];

export default function Standards() {
  return (
    <Layout>
      {/* Hero Section */}

      <div className="mx-auto max-w-4xl px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl font-bold text-primary">Publishing Standards & Ethics Framework</h1>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Afrika Scholar journals are built on the highest academic publishing standards, ensuring credibility, transparency, and indexing readiness from day one.
          </p>
        </div>

        <div className="space-y-6">
    {standards.map(s => (
  <Card key={s.title}>
    <CardContent className="flex gap-5 p-6">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
        <s.icon className="h-6 w-6 text-primary" />
      </div>
      <div>
        <h3 className="font-serif text-lg font-bold">{s.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
        <Link
          to={s.link}
          className="inline-block mt-2 text-sm text-accent hover:underline font-medium"
        >
          Read Full Policy →
        </Link>
      </div>
    </CardContent>
  </Card>
))}
        </div>

        <div className="mt-10 rounded-lg border-l-4 border-accent bg-accent/10 p-6">
          <h3 className="font-serif text-lg font-bold">Afrika Scholar Commitment</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>• We are <strong className="text-foreground">journal-first</strong> — not pay-to-publish</li>
            <li>• We <strong className="text-foreground">never compromise peer review</strong></li>
            <li>• We support <strong className="text-foreground">Africa-centric, globally credible</strong> scholarship</li>
            <li>• All journals are <strong className="text-foreground">indexing-ready from day one</strong></li>
          </ul>
        </div>

        <div className="mt-8 text-center">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8">
            <Link to="/propose">Propose a Journal</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
}
