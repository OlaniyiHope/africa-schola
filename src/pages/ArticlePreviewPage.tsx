import { useSearchParams, Link } from "react-router-dom";
import { Lock, ArrowLeft, CreditCard, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Layout } from "@/components/layout";
import { publications } from "@/data/publications";

export default function ArticlePreviewPage() {
  const [searchParams] = useSearchParams();
  const pubId = searchParams.get("id");
  const publication = publications.find((p) => p.id === pubId) || publications[0];

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-section max-w-4xl">
          <Button variant="ghost" className="mb-6" asChild>
            <Link to="/publications">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Publications
            </Link>
          </Button>

          <div className="mb-8">
            <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
              {publication.discipline}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-4">{publication.title}</h1>
            <p className="text-muted-foreground mb-2">
              {publication.authors.join(", ")} • {publication.year}
            </p>
            <p className="text-sm text-muted-foreground">
              {publication.journal} • DOI: {publication.doi || "N/A"}
            </p>
          </div>

          {/* Abstract - Free Preview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl">Abstract</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{publication.abstract}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {publication.keywords.map((kw) => (
                  <span key={kw} className="text-xs bg-secondary px-3 py-1 rounded-full">
                    {kw}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Blurred preview content */}
          <div className="relative">
            <div className="blur-sm select-none pointer-events-none">
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground mb-4">
                The growing need for comprehensive research frameworks in {publication.discipline.toLowerCase()} across the African continent has been widely acknowledged in recent academic discourse. This study builds upon existing literature while introducing novel methodological approaches that address the unique socio-economic and cultural contexts present in African research environments...
              </p>
              <h2 className="text-2xl font-bold mb-4">2. Literature Review</h2>
              <p className="text-muted-foreground mb-4">
                Previous studies have explored various dimensions of this topic, including cross-institutional collaboration frameworks and evidence-based policy recommendations. However, significant gaps remain in understanding the practical implementation challenges faced by researchers and institutions across the continent...
              </p>
              <h2 className="text-2xl font-bold mb-4">3. Methodology</h2>
              <p className="text-muted-foreground">
                This research employs a mixed-methods approach combining quantitative survey data from over 500 participants with qualitative interviews conducted across multiple institutions. The sampling strategy was designed to ensure geographic and institutional diversity...
              </p>
            </div>

            {/* Payment overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-transparent flex items-center justify-center">
              <Card className="max-w-md w-full shadow-2xl border-accent/20">
                <CardContent className="p-8 text-center">
                  <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Lock className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Full Article Access</h3>
                  <p className="text-muted-foreground mb-6">
                    Purchase access to read the complete article including methodology, results, and discussion.
                  </p>
                  <div className="text-3xl font-bold text-accent mb-6">$9.99</div>
                  <Button size="lg" className="w-full bg-accent hover:bg-accent/90 mb-3">
                    <CreditCard className="mr-2 h-5 w-5" />
                    Purchase Full Access
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    One-time payment • Instant access • PDF download included
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
