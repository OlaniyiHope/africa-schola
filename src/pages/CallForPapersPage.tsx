import { Link } from "react-router-dom";
import { 
  FileText, Calendar, ArrowRight, Tag, Users, Building2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layout } from "@/components/layout";
import { callsForPapers, journals } from "@/data/publications";

export default function CallForPapersPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-12">
        <div className="container-section">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Call for Papers</h1>
            <p className="text-xl text-primary-foreground/80">
              Contribute to the advancement of African scholarship. Submit your research 
              to our open calls and special issues.
            </p>
          </div>
        </div>
      </section>

      {/* Active Calls */}
      <section className="section-padding">
        <div className="container-section">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Calls</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Current opportunities to publish your research
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            {callsForPapers.map((call) => (
              <Card key={call.id} className="card-hover flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="h-5 w-5 text-accent" />
                    <span className="text-sm text-muted-foreground">{call.journal}</span>
                  </div>
                  <CardTitle className="text-xl">{call.title}</CardTitle>
                  <CardDescription>{call.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-sm mb-4">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>Deadline: <strong>{new Date(call.deadline).toLocaleDateString()}</strong></span>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-sm font-medium mb-2">Topics of Interest:</h4>
                    <div className="flex flex-wrap gap-2">
                      {call.topics.map((topic) => (
                        <Badge key={topic} variant="secondary" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button className="mt-auto" asChild>
                    <Link to="/publishing/submit">
                      Submit Paper
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Journals */}
      <section className="section-padding bg-secondary/30">
        <div className="container-section">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journals</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Peer-reviewed journals across disciplines accepting submissions year-round
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {journals.map((journal) => (
              <Card key={journal.id} className="card-hover">
                <CardHeader>
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{journal.name}</CardTitle>
                  <CardDescription>
                    <Badge variant="outline" className="mt-2">
                      {journal.discipline}
                    </Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">ISSN</span>
                      <span>{journal.issn}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Impact Factor</span>
                      <span>{journal.impactFactor}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Access</span>
                      <span>{journal.openAccess ? "Open Access" : "Subscription"}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-section">
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-4">Ready to Publish?</h2>
              <p className="text-primary-foreground/80 mb-6">
                Submit your manuscript through our streamlined submission process. 
                Our editorial team will guide you through peer review to publication.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
                  <Link to="/publishing/submit">
                    Submit Manuscript
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground/30 hover:bg-primary-foreground/10" asChild>
                  <Link to="/publishing/start-journal">
                    Start a Journal
                  </Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-primary-foreground/10 border-primary-foreground/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-accent mb-1">4-6</div>
                  <div className="text-sm text-primary-foreground/80">Week Review</div>
                </CardContent>
              </Card>
              <Card className="bg-primary-foreground/10 border-primary-foreground/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-accent mb-1">85%</div>
                  <div className="text-sm text-primary-foreground/80">Acceptance Rate</div>
                </CardContent>
              </Card>
              <Card className="bg-primary-foreground/10 border-primary-foreground/20">
                <CardContent className="p-6 text-center">
                  <Users className="h-6 w-6 mx-auto text-accent mb-2" />
                  <div className="text-sm text-primary-foreground/80">Expert Reviewers</div>
                </CardContent>
              </Card>
              <Card className="bg-primary-foreground/10 border-primary-foreground/20">
                <CardContent className="p-6 text-center">
                  <Building2 className="h-6 w-6 mx-auto text-accent mb-2" />
                  <div className="text-sm text-primary-foreground/80">DOI Assignment</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
