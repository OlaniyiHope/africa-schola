import { Link } from "react-router-dom";
import { Globe, MapPin, ArrowRight, ChevronRight, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Layout } from "@/components/layout";

const upcomingFeatures = [
  "Cross-border student mobility programs",
  "University exchange partnerships",
  "Visa and documentation guidance",
  "Scholarship matching services",
  "Cultural orientation resources",
  "Alumni network connections",
];

export default function StudyInAfricaPage() {
  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-secondary/30 border-b">
        <div className="container-section py-3">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/advisory" className="hover:text-foreground">Advisory</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Study in Africa</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground section-padding">
        <div className="container-section">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Bell className="h-4 w-4" />
              Coming Soon
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Study in Africa</h1>
            <p className="text-xl text-primary-foreground/80">
              Explore academic opportunities across the African continent. Study abroad 
              without leaving Africa.
            </p>
          </div>
        </div>
      </section>

      {/* What's Coming */}
      <section className="section-padding">
        <div className="container-section">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What We're Building</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A comprehensive platform to support academic mobility across African 
                universities, making it easier to study in different African countries.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {upcomingFeatures.map((feature, index) => (
                <Card key={feature} className="card-hover">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <span className="text-accent font-bold">{index + 1}</span>
                    </div>
                    <span className="font-medium">{feature}</span>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Preview Map */}
            <Card className="overflow-hidden">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2">
                  <MapPin className="h-5 w-5 text-accent" />
                  Destination Countries
                </CardTitle>
                <CardDescription>
                  Partnering with universities across the continent
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="aspect-video bg-secondary/50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Globe className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">
                      Interactive map coming soon
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Register Interest */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-section">
          <div className="max-w-xl mx-auto text-center">
            <Globe className="h-12 w-12 mx-auto mb-6 text-accent" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Register Your Interest</h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Be the first to know when Study in Africa launches. Get early access 
              and exclusive updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 flex-1"
              />
              <Button type="submit" className="bg-accent hover:bg-accent/90">
                Notify Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
