import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Layout } from "@/components/layout";
import {
  GraduationCap, Users, BookOpen, FileEdit,
  Server, GitBranch, Shield, Search, Archive
} from "lucide-react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";


import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { useToast } from "@/hooks/use-toast";
import { useJournal } from "@/context/JournalContext";
import StepIndicator from "@/components/StepIndicator";

export default function Propose() {
      const { state, updateProposal } = useJournal();
  const p = state.proposal;
  const navigate = useNavigate();
  const { toast } = useToast();

  const [boardMembers, setBoardMembers] = useState(p.boardMembers);

  const addBoardMember = () => {
    setBoardMembers(prev => [...prev, { name: "", title: "", affiliation: "" }]);
  };

  const updateBoard = (i: number, field: string, value: string) => {
    setBoardMembers(prev => prev.map((m, idx) => idx === i ? { ...m, [field]: value } : m));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!p.title || !p.discipline || !p.editorName || !p.contactEmail) {
      toast({ title: "Missing fields", description: "Please fill in all required fields.", variant: "destructive" });
      return;
    }
    if (!p.commitPeerReview || !p.commitEthics || !p.commitNoPredatory) {
      toast({ title: "Ethical commitment required", description: "Please accept all ethical commitments.", variant: "destructive" });
      return;
    }
    const filledMembers = boardMembers.filter(m => m.name.trim());
    if (filledMembers.length < 3) {
      toast({ title: "Editorial Board", description: "Please provide at least 3 board members.", variant: "destructive" });
      return;
    }
    updateProposal({ boardMembers: filledMembers });
    navigate("/governance");
  };
  return (
    <Layout>

        <div className="py-8">
        <StepIndicator current={1} />
        <form onSubmit={handleSubmit} className="mx-auto max-w-3xl mt-10 space-y-8 px-4">
          <div className="text-center">
            <h1 className="font-serif text-3xl  font-bold text-primary">Journal Proposal</h1>
            <p className="mt-2 text-muted-foreground">Capture your journal's intent and academic direction.</p>
          </div>

          {/* Journal Identity */}
          <Card>
            <CardHeader><CardTitle className="text-xl">A. Journal Identity</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Proposed Journal Title *</Label>
                <Input value={p.title} onChange={e => updateProposal({ title: e.target.value })} placeholder="e.g. African Journal of Applied Mathematics" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label>Discipline / Field *</Label>
                  <Input value={p.discipline} onChange={e => updateProposal({ discipline: e.target.value })} placeholder="e.g. Mathematics" />
                </div>
                <div>
                  <Label>Sub-discipline / Focus Area</Label>
                  <Input value={p.subDiscipline} onChange={e => updateProposal({ subDiscipline: e.target.value })} placeholder="e.g. Applied Mathematics" />
                </div>
              </div>
              <div>
                <Label>Journal Scope (500–700 words)</Label>
                <Textarea value={p.scope} onChange={e => updateProposal({ scope: e.target.value })} rows={8} placeholder="Describe the journal's scope, aims, and target audience..." />
              </div>
            </CardContent>
          </Card>

          {/* Sponsoring Entity */}
          <Card>
            <CardHeader><CardTitle className="text-xl">B. Sponsoring Entity</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Lead Institution / Society</Label>
                <Input value={p.institution} onChange={e => updateProposal({ institution: e.target.value })} />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label>Country</Label>
                  <Input value={p.country} onChange={e => updateProposal({ country: e.target.value })} />
                </div>
                <div>
                  <Label>Website</Label>
                  <Input value={p.website} onChange={e => updateProposal({ website: e.target.value })} placeholder="https://" />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Switch checked={p.institutionBacked} onCheckedChange={v => updateProposal({ institutionBacked: v })} />
                <Label>This journal is institution-backed</Label>
              </div>
            </CardContent>
          </Card>

          {/* Editorial Leadership */}
          <Card>
            <CardHeader><CardTitle className="text-xl">C. Editorial Leadership</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">Editor-in-Chief</p>
              <div className="grid gap-4 sm:grid-cols-3">
                <div><Label>Name *</Label><Input value={p.editorName} onChange={e => updateProposal({ editorName: e.target.value })} /></div>
                <div><Label>Title</Label><Input value={p.editorTitle} onChange={e => updateProposal({ editorTitle: e.target.value })} /></div>
                <div><Label>Affiliation</Label><Input value={p.editorAffiliation} onChange={e => updateProposal({ editorAffiliation: e.target.value })} /></div>
              </div>
              <div>
                <Label>Contact Email *</Label>
                <Input type="email" value={p.contactEmail} onChange={e => updateProposal({ contactEmail: e.target.value })} />
              </div>
              <p className="text-sm font-medium text-foreground">Editorial Board (minimum 3 members)</p>
              {boardMembers.map((m, i) => (
                <div key={i} className="grid gap-2 sm:grid-cols-3">
                  <Input placeholder="Name" value={m.name} onChange={e => updateBoard(i, "name", e.target.value)} />
                  <Input placeholder="Title" value={m.title} onChange={e => updateBoard(i, "title", e.target.value)} />
                  <Input placeholder="Affiliation" value={m.affiliation} onChange={e => updateBoard(i, "affiliation", e.target.value)} />
                </div>
              ))}
              <Button type="button" variant="outline" size="sm" onClick={addBoardMember}>+ Add Board Member</Button>
            </CardContent>
          </Card>

          {/* Publishing Model */}
          <Card>
            <CardHeader><CardTitle className="text-xl">D. Publishing Model</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-md bg-accent/10 p-3 text-sm text-foreground">
                <strong>Open Access</strong> is the default publishing model for all Afrika Scholar journals.
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label>Frequency</Label>
                  <Select value={p.frequency} onValueChange={v => updateProposal({ frequency: v })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="continuous">Continuous</SelectItem>
                      <SelectItem value="biannual">Biannual</SelectItem>
                      <SelectItem value="quarterly">Quarterly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Language(s) of Publication</Label>
                  <Input value={p.languages} onChange={e => updateProposal({ languages: e.target.value })} />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Ethical Commitment */}
          <Card>
            <CardHeader><CardTitle className="text-xl">E. Ethical Commitment</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Checkbox checked={p.commitPeerReview} onCheckedChange={v => updateProposal({ commitPeerReview: !!v })} />
                <Label>I commit to implementing rigorous peer review for all submissions</Label>
              </div>
              <div className="flex items-start gap-3">
                <Checkbox checked={p.commitEthics} onCheckedChange={v => updateProposal({ commitEthics: !!v })} />
                <Label>I commit to following ethical publishing standards (COPE guidelines)</Label>
              </div>
              <div className="flex items-start gap-3">
                <Checkbox checked={p.commitNoPredatory} onCheckedChange={v => updateProposal({ commitNoPredatory: !!v })} />
                <Label>I confirm this journal will not engage in predatory or pay-to-publish practices</Label>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button type="submit" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8">
              Submit Journal Proposal
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
