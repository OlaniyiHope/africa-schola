import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { 
  Search, Filter, Grid, List, Download, FileText, Quote, 
  X, BookOpen, Calendar, MapPin, Building2, ArrowRight, CheckCircle, Star, Lock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import {
  Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger,
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Layout } from "@/components/layout";
import { publications, disciplines, regions, journals, type Publication } from "@/data/publications";
import { useToast } from "@/hooks/use-toast";
import pubImage from "@/assets/publications-journals.jpg";

type ViewMode = "grid" | "list";
type SortOption = "recent" | "relevant" | "alphabetical";

const whyPublish = [
  "Peer-reviewed, journal-first publishing",
  "Africa-focused, globally aligned standards",
  "Open-access visibility",
  "Ethical editorial governance",
  "Long-term archiving and citation readiness",
];

export default function PublicationsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [sortBy, setSortBy] = useState<SortOption>("recent");
  const [selectedDisciplines, setSelectedDisciplines] = useState<string[]>([]);
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [selectedYears, setSelectedYears] = useState<number[]>([]);
  const [selectedAccessType, setSelectedAccessType] = useState<string[]>([]);
  const [citeDialogOpen, setCiteDialogOpen] = useState(false);
  const [citationText, setCitationText] = useState("");
  const { toast } = useToast();

  const years = useMemo(() => {
    return [...new Set(publications.map((p) => p.year))].sort((a, b) => b - a);
  }, []);

  const filteredPublications = useMemo(() => {
    let filtered = [...publications];
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.authors.some((a) => a.toLowerCase().includes(query)) ||
          p.abstract.toLowerCase().includes(query) ||
          p.keywords.some((k) => k.toLowerCase().includes(query))
      );
    }
    if (selectedDisciplines.length > 0) filtered = filtered.filter((p) => selectedDisciplines.includes(p.discipline));
    if (selectedRegions.length > 0) filtered = filtered.filter((p) => selectedRegions.includes(p.region));
    if (selectedYears.length > 0) filtered = filtered.filter((p) => selectedYears.includes(p.year));
    if (selectedAccessType.length > 0) filtered = filtered.filter((p) => selectedAccessType.includes(p.accessType));
    switch (sortBy) {
      case "recent": filtered.sort((a, b) => b.year - a.year); break;
      case "alphabetical": filtered.sort((a, b) => a.title.localeCompare(b.title)); break;
      case "relevant": filtered.sort((a, b) => b.citations - a.citations); break;
    }
    return filtered;
  }, [searchQuery, selectedDisciplines, selectedRegions, selectedYears, selectedAccessType, sortBy]);

  const hasActiveFilters = selectedDisciplines.length > 0 || selectedRegions.length > 0 || selectedYears.length > 0 || selectedAccessType.length > 0;

  const clearFilters = () => {
    setSelectedDisciplines([]);
    setSelectedRegions([]);
    setSelectedYears([]);
    setSelectedAccessType([]);
  };

  const toggleFilter = (value: string | number, selected: (string | number)[], setSelected: React.Dispatch<React.SetStateAction<any[]>>) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((v) => v !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  const handleCite = (pub: Publication) => {
    const citation = `${pub.authors.join(", ")} (${pub.year}). ${pub.title}. ${pub.journal}. DOI: ${pub.doi || "N/A"}`;
    setCitationText(citation);
    setCiteDialogOpen(true);
  };

  const copyCitation = () => {
    navigator.clipboard.writeText(citationText);
    toast({ title: "Copied!", description: "Citation copied to clipboard." });
  };

  return (
    <Layout>
      {/* Citation Dialog */}
      <Dialog open={citeDialogOpen} onOpenChange={setCiteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Cite This Article</DialogTitle>
            <DialogDescription>APA Format Citation</DialogDescription>
          </DialogHeader>
          <div className="bg-secondary p-4 rounded-lg text-sm leading-relaxed font-mono">{citationText}</div>
          <div className="flex gap-3 justify-end">
            <Button variant="outline" onClick={() => setCiteDialogOpen(false)}>Close</Button>
            <Button className="bg-accent hover:bg-accent/90" onClick={copyCitation}>Copy Citation</Button>
          </div>
        </DialogContent>
      </Dialog>

 <section className="relative overflow-hidden min-h-[400px]">
  <div className="absolute inset-0">
    <img src={pubImage} alt="Academic journals" className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-primary/85" />
  </div>
  <div className="absolute inset-0 opacity-10">
    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      <defs>
        <pattern id="pub-grid" width="8" height="8" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.4" fill="currentColor" className="text-primary-foreground" />
        </pattern>
      </defs>
      <rect width="100" height="100" fill="url(#pub-grid)" />
    </svg>
  </div>
  <div className="container-section relative section-padding">
    <div className="max-w-3xl mx-auto text-center text-primary-foreground">
      <p className="text-sm uppercase tracking-wider text-accent font-semibold mb-4">
        Afrika Scholar
      </p>
      <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
        Publications
      </h1>
      <p className="text-xl text-primary-foreground/80">
        Explore peer-reviewed research from across Africa. Access open-access articles, journals, and special issues.
      </p>
    </div>
  </div>
</section>

      {/* Search & Filters */}
      <section className="sticky top-16 z-40 bg-background border-b py-4">
        <div className="container-section">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search publications, authors, keywords..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-10" />
            </div>
            <div className="flex items-center gap-2">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="lg:hidden">
                    <Filter className="h-4 w-4 mr-2" /> Filters
                    {hasActiveFilters && <Badge variant="secondary" className="ml-2">{selectedDisciplines.length + selectedRegions.length + selectedYears.length + selectedAccessType.length}</Badge>}
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80">
                  <SheetHeader><SheetTitle>Filters</SheetTitle><SheetDescription>Refine your search results</SheetDescription></SheetHeader>
                  <FilterPanel disciplines={disciplines} regions={regions} years={years} selectedDisciplines={selectedDisciplines} selectedRegions={selectedRegions} selectedYears={selectedYears} selectedAccessType={selectedAccessType} setSelectedDisciplines={setSelectedDisciplines} setSelectedRegions={setSelectedRegions} setSelectedYears={setSelectedYears} setSelectedAccessType={setSelectedAccessType} toggleFilter={toggleFilter} />
                </SheetContent>
              </Sheet>
              <Select value={sortBy} onValueChange={(v) => setSortBy(v as SortOption)}>
                <SelectTrigger className="w-[140px]"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="relevant">Most Cited</SelectItem>
                  <SelectItem value="alphabetical">A-Z</SelectItem>
                </SelectContent>
              </Select>
              <div className="hidden sm:flex border rounded-lg">
                <Button variant={viewMode === "grid" ? "secondary" : "ghost"} size="icon" onClick={() => setViewMode("grid")}><Grid className="h-4 w-4" /></Button>
                <Button variant={viewMode === "list" ? "secondary" : "ghost"} size="icon" onClick={() => setViewMode("list")}><List className="h-4 w-4" /></Button>
              </div>
            </div>
          </div>
          {hasActiveFilters && (
            <div className="flex flex-wrap items-center gap-2 mt-4">
              <span className="text-sm text-muted-foreground">Active filters:</span>
              {selectedDisciplines.map((d) => (<Badge key={d} variant="secondary" className="gap-1">{d}<X className="h-3 w-3 cursor-pointer" onClick={() => toggleFilter(d, selectedDisciplines, setSelectedDisciplines)} /></Badge>))}
              {selectedRegions.map((r) => (<Badge key={r} variant="secondary" className="gap-1">{r}<X className="h-3 w-3 cursor-pointer" onClick={() => toggleFilter(r, selectedRegions, setSelectedRegions)} /></Badge>))}
              {selectedYears.map((y) => (<Badge key={y} variant="secondary" className="gap-1">{y}<X className="h-3 w-3 cursor-pointer" onClick={() => toggleFilter(y, selectedYears, setSelectedYears)} /></Badge>))}
              {selectedAccessType.map((a) => (<Badge key={a} variant="secondary" className="gap-1">{a === "open" ? "Open Access" : "Restricted"}<X className="h-3 w-3 cursor-pointer" onClick={() => toggleFilter(a, selectedAccessType, setSelectedAccessType)} /></Badge>))}
              <Button variant="ghost" size="sm" onClick={clearFilters}>Clear all</Button>
            </div>
          )}
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-section">
          <div className="flex gap-8">
            <aside className="hidden lg:block w-64 shrink-0">
              <div className="sticky top-36">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Filters</h3>
                  {hasActiveFilters && <Button variant="ghost" size="sm" onClick={clearFilters}>Clear</Button>}
                </div>
                <FilterPanel disciplines={disciplines} regions={regions} years={years} selectedDisciplines={selectedDisciplines} selectedRegions={selectedRegions} selectedYears={selectedYears} selectedAccessType={selectedAccessType} setSelectedDisciplines={setSelectedDisciplines} setSelectedRegions={setSelectedRegions} setSelectedYears={setSelectedYears} setSelectedAccessType={setSelectedAccessType} toggleFilter={toggleFilter} />
              </div>
            </aside>
            <div className="flex-1">
              <div className="mb-6">
                <p className="text-muted-foreground">Showing <span className="font-medium text-foreground">{filteredPublications.length}</span> publications</p>
              </div>
              {filteredPublications.length === 0 ? (
                <Card className="text-center py-12">
                  <CardContent>
                    <BookOpen className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No publications found</h3>
                    <p className="text-muted-foreground mb-4">Try adjusting your search or filters</p>
                    <Button variant="outline" onClick={clearFilters}>Clear filters</Button>
                  </CardContent>
                </Card>
              ) : viewMode === "grid" ? (
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredPublications.map((pub) => (<PublicationGridCard key={pub.id} publication={pub} onCite={handleCite} />))}
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredPublications.map((pub) => (<PublicationListCard key={pub.id} publication={pub} onCite={handleCite} />))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Featured & Special Collections */}
      <section className="section-padding bg-secondary/30">
        <div className="container-section">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-wider text-accent font-semibold mb-2">Featured & Special Collections</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Publications</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Highlighted research selected by editors for quality, relevance, or impact.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Special Issues & Collections</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { title: "Thematic Research Collections", icon: BookOpen },
                { title: "Conference-Linked Publications", icon: Star },
                { title: "Policy-Relevant Research Series", icon: FileText },
              ].map((item) => (
                <Card key={item.title} className="card-hover text-center">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h4 className="font-semibold">{item.title}</h4>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Button variant="outline" asChild>
                <Link to="/publications">View Special Collections <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Publish */}
      <section className="section-padding">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <p className="text-sm uppercase tracking-wider text-accent font-semibold mb-2">Why Publish With Afrika Scholar</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Advancing African Scholarship</h2>
              <ul className="space-y-4">
                {whyPublish.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
                  <Link to="/publishing/submit">Publish With Afrika Scholar <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src={pubImage} alt="Academic journals" className="w-full h-[400px] object-cover" />
              </div>
              <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-2xl bg-accent/20 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* For Researchers & Institutions */}
      <section className="section-padding bg-secondary/30">
        <div className="container-section">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="card-hover border-l-4 border-l-accent">
              <CardHeader>
                <CardTitle className="text-xl">For Researchers & Academics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Afrika Scholar publications are:</p>
                <ul className="space-y-2 mb-6">
                  {["Discoverable", "Citable", "Institutionally credible", "Built for long-term academic value"].map((item) => (
                    <li key={item} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent" /><span>{item}</span></li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <Button size="sm" variant="outline" asChild><Link to="/publishing/submit">Author Guidelines</Link></Button>
                  <Button size="sm" variant="outline" asChild><Link to="/network/apply">Reviewer Guidelines</Link></Button>
                </div>
              </CardContent>
            </Card>
            <Card className="card-hover border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="text-xl">For Institutions & Libraries</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Afrika Scholar supports:</p>
                <ul className="space-y-2 mb-6">
                  {["Institutional research visibility", "Open-access dissemination", "Structured academic publishing"].map((item) => (
                    <li key={item} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /><span>{item}</span></li>
                  ))}
                </ul>
                <Button size="sm" variant="outline" asChild><Link to="/network">Institutional Partnerships</Link></Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden section-padding">
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="pub-cta" width="5" height="5" patternUnits="userSpaceOnUse">
                <circle cx="2.5" cy="2.5" r="0.5" fill="currentColor" className="text-primary-foreground" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#pub-cta)" />
          </svg>
        </div>
        <div className="container-section relative text-primary-foreground text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Advance African Scholarship</h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Discover, publish, and engage with research that matters.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
              <Link to="/publications">Explore Journals</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-accent hover:bg-primary-foreground/10" asChild>
              <Link to="/publishing/submit">Publish Your Research</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

// Filter Panel
interface FilterPanelProps {
  disciplines: string[]; regions: string[]; years: number[];
  selectedDisciplines: string[]; selectedRegions: string[]; selectedYears: number[]; selectedAccessType: string[];
  setSelectedDisciplines: React.Dispatch<React.SetStateAction<string[]>>;
  setSelectedRegions: React.Dispatch<React.SetStateAction<string[]>>;
  setSelectedYears: React.Dispatch<React.SetStateAction<number[]>>;
  setSelectedAccessType: React.Dispatch<React.SetStateAction<string[]>>;
  toggleFilter: (value: any, selected: any[], setSelected: React.Dispatch<React.SetStateAction<any[]>>) => void;
}

function FilterPanel({ disciplines, regions, years, selectedDisciplines, selectedRegions, selectedYears, selectedAccessType, setSelectedDisciplines, setSelectedRegions, setSelectedYears, setSelectedAccessType, toggleFilter }: FilterPanelProps) {
  return (
    <div className="space-y-6 mt-4">
         <div>
        <h4 className="font-medium mb-3">Year</h4>
        <div className="space-y-2">
          {years.map((y) => (
            <div key={y} className="flex items-center gap-2">
              <Checkbox id={`y-${y}`} checked={selectedYears.includes(y)} onCheckedChange={() => toggleFilter(y, selectedYears, setSelectedYears)} />
              <Label htmlFor={`y-${y}`} className="text-sm cursor-pointer">{y}</Label>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h4 className="font-medium mb-3">Discipline</h4>
        <div className="space-y-2">
          {disciplines.map((d) => (
            <div key={d} className="flex items-center gap-2">
              <Checkbox id={`d-${d}`} checked={selectedDisciplines.includes(d)} onCheckedChange={() => toggleFilter(d, selectedDisciplines, setSelectedDisciplines)} />
              <Label htmlFor={`d-${d}`} className="text-sm cursor-pointer">{d}</Label>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h4 className="font-medium mb-3">Region</h4>
        <div className="space-y-2">
          {regions.map((r) => (
            <div key={r} className="flex items-center gap-2">
              <Checkbox id={`r-${r}`} checked={selectedRegions.includes(r)} onCheckedChange={() => toggleFilter(r, selectedRegions, setSelectedRegions)} />
              <Label htmlFor={`r-${r}`} className="text-sm cursor-pointer">{r}</Label>
            </div>
          ))}
        </div>
      </div>
   
      <div>
        <h4 className="font-medium mb-3">Access Type</h4>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Checkbox id="a-open" checked={selectedAccessType.includes("open")} onCheckedChange={() => toggleFilter("open", selectedAccessType, setSelectedAccessType)} />
            <Label htmlFor="a-open" className="text-sm cursor-pointer">Open Access</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="a-restricted" checked={selectedAccessType.includes("restricted")} onCheckedChange={() => toggleFilter("restricted", selectedAccessType, setSelectedAccessType)} />
            <Label htmlFor="a-restricted" className="text-sm cursor-pointer">Restricted</Label>
          </div>
        </div>
      </div>
    </div>
  );
}

function PublicationGridCard({ publication, onCite }: { publication: Publication; onCite: (p: Publication) => void }) {
  return (
    <Card className="card-hover h-full flex flex-col group">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge variant="outline" className="text-xs">{publication.discipline}</Badge>
          {publication.accessType === "open" && <Badge className="bg-green-500/10 text-green-600 text-xs">Open Access</Badge>}
        </div>
        <CardTitle className="text-lg line-clamp-2 group-hover:text-accent transition-colors">{publication.title}</CardTitle>
        <CardDescription>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
            <span>{publication.authors.slice(0, 2).join(", ")}</span>
            {publication.authors.length > 2 && <span>+{publication.authors.length - 2} more</span>}
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{publication.abstract}</p>
        <div className="mt-auto space-y-3">
          <div className="flex flex-wrap gap-1">
            {publication.keywords.slice(0, 3).map((kw) => (<span key={kw} className="text-xs bg-secondary px-2 py-1 rounded">{kw}</span>))}
          </div>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-1"><BookOpen className="h-3 w-3" />{publication.journal}</div>
            <div className="flex items-center gap-1"><Calendar className="h-3 w-3" />{publication.year}</div>
          </div>
          <div className="flex gap-2 pt-2">
            <Button size="sm" variant="outline" className="flex-1" asChild>
              <Link to={`/article?id=${publication.id}`}><FileText className="h-4 w-4 mr-1" />Read <Lock className="h-3 w-3 ml-1" /></Link>
            </Button>
            <Button size="sm" variant="outline" className="flex-1" onClick={() => onCite(publication)}>
              <Quote className="h-4 w-4 mr-1" /> Cite
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function PublicationListCard({ publication, onCite }: { publication: Publication; onCite: (p: Publication) => void }) {
  return (
    <Card className="card-hover">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="text-xs">{publication.discipline}</Badge>
              {publication.accessType === "open" && <Badge className="bg-green-500/10 text-green-600 text-xs">Open Access</Badge>}
              <span className="text-xs text-muted-foreground">{publication.year}</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">{publication.title}</h3>
            <p className="text-sm text-muted-foreground mb-2">{publication.authors.join(", ")}</p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mb-3">
              <div className="flex items-center gap-1"><BookOpen className="h-3 w-3" />{publication.journal}</div>
              <div className="flex items-center gap-1"><Building2 className="h-3 w-3" />{publication.institution}</div>
              <div className="flex items-center gap-1"><MapPin className="h-3 w-3" />{publication.region}</div>
            </div>
            <p className="text-sm text-muted-foreground line-clamp-2">{publication.abstract}</p>
          </div>
          <div className="flex md:flex-col gap-2 md:w-32">
            <Button size="sm" variant="outline" className="flex-1" asChild>
              <Link to={`/article?id=${publication.id}`}><FileText className="h-4 w-4 md:mr-1" /><span className="hidden md:inline">Read</span></Link>
            </Button>
            <Button size="sm" variant="ghost" className="flex-1" onClick={() => onCite(publication)}>
              <Quote className="h-4 w-4 md:mr-1" /><span className="hidden md:inline">Cite</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
