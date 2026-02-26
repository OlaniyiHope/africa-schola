import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { 
  Search, Clock, DollarSign, CheckCircle, Mail, Phone, 
  Globe, ArrowRight, FileText, AlertCircle, Building2,
  ChevronRight, Filter, MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Layout } from "@/components/layout";
import { 
  universities, 
  transcriptSteps, 
  commonChallenges, 
  requiredDocuments,
  type University 
} from "@/data/universities";

  import transcriptHero from "@/assets/about-conference.jpg";

export default function TranscriptAdvisoryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [stateFilter, setStateFilter] = useState<string>("all");
  const [typeFilter, setTypeFilter] = useState<string>("all");

  const states = useMemo(() => {
    const uniqueStates = [...new Set(universities.map((u) => u.state))].sort();
    return uniqueStates;
  }, []);

  const filteredUniversities = useMemo(() => {
    let filtered = [...universities];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (u) =>
          u.name.toLowerCase().includes(query) ||
          u.shortName.toLowerCase().includes(query) ||
          u.location.toLowerCase().includes(query)
      );
    }

    if (stateFilter !== "all") {
      filtered = filtered.filter((u) => u.state === stateFilter);
    }

    if (typeFilter !== "all") {
      filtered = filtered.filter((u) => u.type === typeFilter);
    }

    return filtered;
  }, [searchQuery, stateFilter, typeFilter]);

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-secondary/30 border-b">
        <div className="container-section py-3">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/advisory" className="hover:text-foreground">Advisory</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Transcript Advisory</span>
          </nav>
        </div>
      </div>


{/* Hero Section */}
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
         Transcript Advisory
      </p>
      <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
             Transcript Advisory
      </h1>
      <p className="text-xl text-primary-foreground/80">
           Navigate the transcript request process at Nigerian universities with our
        comprehensive guide and institution-specific information.
      </p>
    </div>
  </div>
</section>
      {/* Process Steps */}
      <section className="section-padding">
        <div className="container-section">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The 8-Step Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A general guide to obtaining transcripts from Nigerian universities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {transcriptSteps.map((step) => (
              <Card key={step.step} className="card-hover relative">
                <div className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm">
                  {step.step}
                </div>
                <CardHeader className="pt-6">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* University Database */}
      <section className="section-padding bg-secondary/30" id="universities">
        <div className="container-section">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">University Database</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find transcript processing information for Nigerian universities
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search universities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={stateFilter} onValueChange={setStateFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="State" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All States</SelectItem>
                {states.map((state) => (
                  <SelectItem key={state} value={state}>{state}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="federal">Federal</SelectItem>
                <SelectItem value="state">State</SelectItem>
                <SelectItem value="private">Private</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Results Count */}
          <p className="text-sm text-muted-foreground mb-6">
            Showing {filteredUniversities.length} of {universities.length} universities
          </p>

          {/* University Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredUniversities.map((university) => (
              <UniversityCard key={university.id} university={university} />
            ))}
          </div>

          {filteredUniversities.length === 0 && (
            <Card className="text-center py-12">
              <CardContent>
                <Building2 className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">No universities found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filters</p>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Required Documents */}
      <section className="section-padding">
        <div className="container-section">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Required Documents</h2>
              <p className="text-muted-foreground">
                Prepare these documents before starting your transcript request
              </p>
            </div>

            <Tabs defaultValue="mandatory" className="w-full">
              <TabsList className="w-full justify-start mb-6">
                <TabsTrigger value="mandatory">Mandatory</TabsTrigger>
                <TabsTrigger value="conditional">Conditional</TabsTrigger>
                <TabsTrigger value="international">International</TabsTrigger>
              </TabsList>

              <TabsContent value="mandatory">
                <Card>
                  <CardContent className="pt-6">
                    <ul className="space-y-3">
                      {requiredDocuments.mandatory.map((doc, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="conditional">
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-sm text-muted-foreground mb-4">
                      These documents may be required depending on your specific situation:
                    </p>
                    <ul className="space-y-3">
                      {requiredDocuments.conditional.map((doc, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="international">
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-sm text-muted-foreground mb-4">
                      Additional documents for international transcript requests:
                    </p>
                    <ul className="space-y-3">
                      {requiredDocuments.international.map((doc, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Globe className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Common Challenges */}
      <section className="section-padding bg-secondary/30">
        <div className="container-section">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Common Challenges & Solutions</h2>
              <p className="text-muted-foreground">
                Prepared responses to typical issues you might encounter
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {commonChallenges.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-3">
                      <AlertCircle className="h-5 w-5 text-amber-600 shrink-0" />
                      <span>{item.challenge}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-8">
                    <p className="text-muted-foreground mb-3">{item.description}</p>
                    <div className="flex items-start gap-2 text-green-600">
                      <CheckCircle className="h-4 w-4 shrink-0 mt-1" />
                      <p className="text-sm">{item.solution}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-section">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Personalized Help?</h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              If you're facing specific challenges or need guidance tailored to your 
              situation, request our advisory support.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
              <Link to="/advisory/request">
                Request Advisory Support
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function UniversityCard({ university }: { university: University }) {
  const typeColors = {
    federal: "bg-blue-500/10 text-blue-600",
    state: "bg-green-500/10 text-green-600",
    private: "bg-purple-500/10 text-purple-600",
  };

  return (
    <Card className="card-hover">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl mb-1">{university.name}</CardTitle>
            <CardDescription className="flex items-center gap-2">
              <MapPin className="h-3 w-3" />
              {university.location}, {university.state}
            </CardDescription>
          </div>
          <Badge className={typeColors[university.type]}>
            {university.type.charAt(0).toUpperCase() + university.type.slice(1)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-xs text-muted-foreground">Processing Time</p>
              <p className="text-sm font-medium">{university.transcriptInfo.processingTime}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-xs text-muted-foreground">Success Rate</p>
              <p className="text-sm font-medium">{university.transcriptInfo.successRate}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-xs text-muted-foreground">Local Fee</p>
              <p className="text-sm font-medium">{university.transcriptInfo.fees.local}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-xs text-muted-foreground">Int'l Fee</p>
              <p className="text-sm font-medium">{university.transcriptInfo.fees.international}</p>
            </div>
          </div>
        </div>

        <div className="space-y-2 text-sm mb-4">
          <div className="flex items-start gap-2">
            <FileText className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
            <span><strong>Method:</strong> {university.transcriptInfo.applicationMethod}</span>
          </div>
          <div className="flex items-start gap-2">
            <Mail className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
            <span><strong>Delivery:</strong> {university.transcriptInfo.deliveryMethod}</span>
          </div>
          {university.transcriptInfo.additionalNotes && (
            <div className="flex items-start gap-2 text-accent">
              <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
              <span className="text-xs">{university.transcriptInfo.additionalNotes}</span>
            </div>
          )}
        </div>

        <div className="flex gap-2 pt-4 border-t">
          <Button size="sm" variant="outline" asChild className="flex-1">
            <a href={`mailto:${university.transcriptInfo.contactEmail}`}>
              <Mail className="h-4 w-4 mr-1" />
              Email
            </a>
          </Button>
          <Button size="sm" variant="outline" asChild className="flex-1">
            <a href={`tel:${university.transcriptInfo.contactPhone}`}>
              <Phone className="h-4 w-4 mr-1" />
              Call
            </a>
          </Button>
          <Button size="sm" asChild className="flex-1">
            <a href={university.transcriptInfo.website} target="_blank" rel="noopener noreferrer">
              <Globe className="h-4 w-4 mr-1" />
              Website
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
