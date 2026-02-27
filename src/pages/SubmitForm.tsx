
import { Button } from "@/components/ui/button";

import { Layout } from "@/components/layout";
import transcriptHero from "@/assets/about-conference.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, FileText, Users, Upload, Shield, BookOpen, ArrowRight, ArrowLeft, Search, Plus, X } from "lucide-react";

const steps = [
  { label: "Before You Start", icon: BookOpen },
  { label: "Choose Journal", icon: Search },
  { label: "Manuscript Details", icon: FileText },
  { label: "Authors", icon: Users },
  { label: "Upload Files", icon: Upload },
  { label: "Ethics", icon: Shield },
  { label: "Confirmation", icon: CheckCircle },
];

const journals = [
  { id: 1, title: "African Journal of Social Sciences", discipline: "Social Sciences", scope: "Social dynamics, governance, and development" },
  { id: 2, title: "Journal of African Health Research", discipline: "Health Sciences", scope: "Public health, epidemiology, clinical research" },
  { id: 3, title: "African Economic Review", discipline: "Economics", scope: "Economic policy, development, trade" },
  { id: 4, title: "Journal of African Environmental Studies", discipline: "Environmental Science", scope: "Climate, biodiversity, sustainability" },
];

export default function SubmitForm() {
      const [step, setStep] = useState(0);
  const [selectedJournal, setSelectedJournal] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [coAuthors, setCoAuthors] = useState<{ name: string; email: string; institution: string; role: string }[]>([]);
  const [uploadedFiles, setUploadedFiles] = useState<Record<string, boolean>>({});
  const [declarations, setDeclarations] = useState<Record<string, boolean>>({});

  const progress = ((step + 1) / steps.length) * 100;
  const next = () => setStep(s => Math.min(s + 1, steps.length - 1));
  const prev = () => setStep(s => Math.max(s - 1, 0));

  const filteredJournals = journals.filter(j =>
    j.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    j.discipline.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
    <div className="py-8">
      <div className="container max-w-4xl">
        {/* Progress */}
        {step < 6 && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Step {step + 1} of {steps.length}</span>
              <span className="text-sm text-muted-foreground">{steps[step].label}</span>
            </div>
            <Progress value={progress} className="h-2" />
            <div className="flex justify-between mt-2">
              {steps.map((s, i) => (
                <div key={i} className={`flex flex-col items-center ${i <= step ? "text-primary" : "text-muted-foreground/40"}`}>
                  <s.icon className="h-4 w-4 hidden sm:block" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 0 — Before You Start */}
        {step === 0 && (
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-serif font-bold mb-3">Submit Your Manuscript</h1>
              <p className="text-muted-foreground max-w-2xl">
                Afrika Scholar is committed to advancing African scholarship through rigorous, open-access publishing. 
                Please review the following before submitting.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: CheckCircle, title: "Original Work", desc: "Your manuscript must be original and not under consideration elsewhere." },
                { icon: BookOpen, title: "Journal Scope", desc: "Ensure your research aligns with the scope of your chosen journal." },
                { icon: Shield, title: "Ethics Compliance", desc: "Research involving human subjects must have ethical approval." },
                { icon: FileText, title: "Author Guidelines", desc: "Follow formatting and citation guidelines for your target journal." },
              ].map((item, i) => (
                <Card key={i} className="border-l-4 border-l-primary">
                  <CardContent className="p-4 flex gap-3">
                    <item.icon className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-sm">{item.title}</h3>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Button onClick={next} size="lg" className="font-semibold">
              Submit Manuscript <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}

        {/* Step 1 — Choose Journal */}
        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-serif font-bold">Choose a Journal</h2>
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search by name or discipline..." className="pl-10" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
            </div>
            <div className="grid gap-4">
              {filteredJournals.map(j => (
                <Card
                  key={j.id}
                  className={`cursor-pointer transition-all ${selectedJournal === j.id ? "ring-2 ring-primary border-primary" : "hover:shadow-md"}`}
                  onClick={() => setSelectedJournal(j.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <Badge variant="secondary" className="mb-2 text-xs">{j.discipline}</Badge>
                        <h3 className="font-serif font-semibold">{j.title}</h3>
                        <p className="text-sm text-muted-foreground">{j.scope}</p>
                      </div>
                      {selectedJournal === j.id && <CheckCircle className="h-5 w-5 text-primary" />}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-between">
              <Button variant="outline" onClick={prev}><ArrowLeft className="mr-2 h-4 w-4" /> Back</Button>
              <Button onClick={next} disabled={!selectedJournal}>Continue Submission <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </div>
          </div>
        )}

        {/* Step 2 — Manuscript Details */}
        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-serif font-bold">Manuscript Details</h2>
            <div className="space-y-4">
              <div><Label>Article Title</Label><Input placeholder="Enter the full title of your manuscript" /></div>
              <div>
                <Label>Abstract (max 300 words)</Label>
                <Textarea placeholder="Enter your abstract..." className="min-h-[150px]" />
              </div>
              <div><Label>Keywords (comma-separated)</Label><Input placeholder="e.g., public health, governance, East Africa" /></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Article Type</Label>
                  <Select><SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="research">Research Article</SelectItem>
                      <SelectItem value="review">Review Article</SelectItem>
                      <SelectItem value="case">Case Study</SelectItem>
                      <SelectItem value="short">Short Communication</SelectItem>
                      <SelectItem value="policy">Policy Brief</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Discipline</Label>
                  <Select><SelectTrigger><SelectValue placeholder="Select discipline" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="social">Social Sciences</SelectItem>
                      <SelectItem value="health">Health Sciences</SelectItem>
                      <SelectItem value="economics">Economics</SelectItem>
                      <SelectItem value="env">Environmental Science</SelectItem>
                      <SelectItem value="humanities">Humanities</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Card className="bg-muted/50 border-none"><CardContent className="p-4 text-sm text-muted-foreground">
                💡 Accurate metadata improves discoverability. Use specific, descriptive keywords.
              </CardContent></Card>
            </div>
            <div className="flex justify-between">
              <Button variant="outline" onClick={prev}><ArrowLeft className="mr-2 h-4 w-4" /> Back</Button>
              <Button onClick={next}>Save & Continue <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </div>
          </div>
        )}

        {/* Step 3 — Author Details */}
        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-serif font-bold">Author & Co-Author Details</h2>
            <Card><CardContent className="p-6 space-y-4">
              <h3 className="font-semibold">Corresponding Author</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><Label>Full Name</Label><Input placeholder="Dr. Jane Doe" /></div>
                <div><Label>Email</Label><Input type="email" placeholder="jane@university.edu" /></div>
                <div><Label>Institution</Label><Input placeholder="University of Nairobi" /></div>
                <div><Label>Country</Label><Input placeholder="Kenya" /></div>
                <div className="md:col-span-2"><Label>ORCID ID (optional)</Label><Input placeholder="0000-0000-0000-0000" /></div>
              </div>
            </CardContent></Card>

            <Card><CardContent className="p-6 space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">Co-Authors</h3>
                <Button size="sm" variant="outline" onClick={() => setCoAuthors([...coAuthors, { name: "", email: "", institution: "", role: "" }])}>
                  <Plus className="h-4 w-4 mr-1" /> Add Co-Author
                </Button>
              </div>
              {coAuthors.map((_, i) => (
                <div key={i} className="border rounded-lg p-4 space-y-3 relative">
                  <button onClick={() => setCoAuthors(coAuthors.filter((_, j) => j !== i))} className="absolute top-2 right-2 text-muted-foreground hover:text-destructive">
                    <X className="h-4 w-4" />
                  </button>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div><Label>Name</Label><Input placeholder="Co-author name" /></div>
                    <div><Label>Email</Label><Input placeholder="Email" /></div>
                    <div><Label>Institution</Label><Input placeholder="Institution" /></div>
                    <div><Label>Contribution Role</Label>
                      <Select><SelectTrigger><SelectValue placeholder="Role" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="first">First Author</SelectItem>
                          <SelectItem value="contributing">Contributing Author</SelectItem>
                          <SelectItem value="senior">Senior Author</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              ))}
              {coAuthors.length === 0 && <p className="text-sm text-muted-foreground">No co-authors added yet.</p>}
            </CardContent></Card>

            <div className="flex items-start gap-2">
              <Checkbox id="author-approval" />
              <Label htmlFor="author-approval" className="text-sm">All listed authors have approved this submission and agree to be accountable for the work.</Label>
            </div>
            <div className="flex justify-between">
              <Button variant="outline" onClick={prev}><ArrowLeft className="mr-2 h-4 w-4" /> Back</Button>
              <Button onClick={next}>Continue <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </div>
          </div>
        )}

        {/* Step 4 — Upload Files */}
        {step === 4 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-serif font-bold">Upload Manuscript Files</h2>
            <div className="space-y-4">
              <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Required</h3>
              {["Main Manuscript", "Cover Letter", "Declaration of Originality"].map((f) => (
                <Card key={f} className={`${uploadedFiles[f] ? "border-primary/50 bg-primary/5" : ""}`}>
                  <CardContent className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <FileText className={`h-5 w-5 ${uploadedFiles[f] ? "text-primary" : "text-muted-foreground"}`} />
                      <div>
                        <p className="font-medium text-sm">{f}</p>
                        <p className="text-xs text-muted-foreground">.docx, .pdf — Max 10MB</p>
                      </div>
                    </div>
                    <Button size="sm" variant={uploadedFiles[f] ? "outline" : "default"} onClick={() => setUploadedFiles({ ...uploadedFiles, [f]: !uploadedFiles[f] })}>
                      {uploadedFiles[f] ? "✔ Uploaded" : "Upload"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
              <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground pt-4">Optional</h3>
              {["Figures/Tables", "Supplementary Data", "Ethics Approval"].map((f) => (
                <Card key={f} className={`${uploadedFiles[f] ? "border-primary/50 bg-primary/5" : ""}`}>
                  <CardContent className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <FileText className={`h-5 w-5 ${uploadedFiles[f] ? "text-primary" : "text-muted-foreground"}`} />
                      <div>
                        <p className="font-medium text-sm">{f}</p>
                        <p className="text-xs text-muted-foreground">Optional</p>
                      </div>
                    </div>
                    <Button size="sm" variant={uploadedFiles[f] ? "outline" : "secondary"} onClick={() => setUploadedFiles({ ...uploadedFiles, [f]: !uploadedFiles[f] })}>
                      {uploadedFiles[f] ? "✔ Uploaded" : "Upload"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-between">
              <Button variant="outline" onClick={prev}><ArrowLeft className="mr-2 h-4 w-4" /> Back</Button>
              <Button onClick={next}>Continue <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </div>
          </div>
        )}

        {/* Step 5 — Ethics */}
        {step === 5 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-serif font-bold">Ethical Declarations</h2>
            <Card><CardContent className="p-6 space-y-4">
              {[
                { id: "original", label: "This manuscript is original and has not been published or submitted elsewhere." },
                { id: "plagiarism", label: "The work is free from plagiarism and all sources have been properly cited." },
                { id: "ethics", label: "Ethical approval has been obtained for research involving human or animal subjects." },
                { id: "conflict", label: "All potential conflicts of interest have been disclosed." },
                { id: "data", label: "The data presented is accurate and has not been fabricated or manipulated." },
              ].map(d => (
                <div key={d.id} className="flex items-start gap-3">
                  <Checkbox id={d.id} checked={declarations[d.id] || false} onCheckedChange={(v) => setDeclarations({ ...declarations, [d.id]: !!v })} />
                  <Label htmlFor={d.id} className="text-sm leading-relaxed">{d.label}</Label>
                </div>
              ))}
            </CardContent></Card>
            <Card><CardContent className="p-6">
              <h3 className="font-semibold mb-3">License Selection</h3>
              <Select defaultValue="cc-by">
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="cc-by">Creative Commons CC BY 4.0 (Recommended)</SelectItem>
                  <SelectItem value="cc-by-nc">Creative Commons CC BY-NC 4.0</SelectItem>
                  <SelectItem value="cc-by-nd">Creative Commons CC BY-ND 4.0</SelectItem>
                </SelectContent>
              </Select>
            </CardContent></Card>
            <div className="flex justify-between">
              <Button variant="outline" onClick={prev}><ArrowLeft className="mr-2 h-4 w-4" /> Back</Button>
              <Button onClick={next} className="bg-primary font-semibold">Submit for Review <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </div>
          </div>
        )}

        {/* Step 6 — Confirmation */}
        {step === 6 && (
          <div className="text-center py-12 space-y-6">
            <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
              <CheckCircle className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-3xl font-serif font-bold">Submission Received!</h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Your manuscript has been submitted successfully. Here's what happens next:
            </p>
            <div className="max-w-md mx-auto text-left space-y-3">
              {[
                "Editorial team reviews your submission for completeness",
                "Manuscript is sent for double-blind peer review",
                "You'll receive status updates via email",
                "Decision communicated within 8-12 weeks",
              ].map((s, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-semibold shrink-0">{i + 1}</span>
                  <p className="text-sm">{s}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-4 pt-4">
              <Button asChild><Link to="/dashboard/author">View Submission Dashboard</Link></Button>
              <Button variant="outline" onClick={() => setStep(0)}>Submit Another Article</Button>
            </div>
          </div>
        )}
      </div>
    </div>
    </Layout>
  );
}
