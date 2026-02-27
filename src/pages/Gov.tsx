import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Layout } from "@/components/layout";
import {
  GraduationCap, Users, BookOpen, FileEdit,
  Server, GitBranch, Shield, Search, Archive, UserCheck, Briefcase, FileDown
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
const required = [
  { icon: UserCheck, title: "Editor-in-Chief", desc: "The lead editor responsible for editorial direction and final decisions." },
  { icon: Users, title: "Associate / Section Editors", desc: "Editors managing specific disciplines or article types within the journal." },
  { icon: GitBranch, title: "Reviewer Pool", desc: "A growing pool of qualified peer reviewers. Can be built over time with Afrika Scholar tools." },
];

const support = [
  { icon: Briefcase, title: "Editorial role definitions", desc: "Clear templates for all editorial positions." },
  { icon: GitBranch, title: "Peer review workflow templates", desc: "Pre-built workflows for single-blind and double-blind review." },
  { icon: Shield, title: "Conflict-of-interest policies", desc: "Ready-to-adopt COI declaration forms and policies." },
  { icon: Users, title: "Reviewer management tools", desc: "Tools to invite, track, and manage your reviewer pool." },
];
export default function Gov() {
  const { setState } = useJournal();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleContinue = () => {
    setState(prev => ({ ...prev, governanceComplete: true }));
    navigate("/policies");
  };

  const handleDownload = () => {
    toast({ title: "Download started", description: "Editorial Guidelines PDF is being prepared." });
  };

  return (
    <Layout>
  <div className="py-8">
        <StepIndicator current={2} />
        <div className="mx-auto max-w-3xl space-y-8 px-4">
          <div className="text-center">
            <h1 className="font-serif text-3xl font-bold text-primary">Editorial Governance & Peer Review Structure</h1>
            <p className="mt-2 text-muted-foreground">Ensure academic credibility with a robust editorial framework.</p>
          </div>

          <Card>
            <CardHeader><CardTitle className="text-xl">Required Editorial Components</CardTitle></CardHeader>
            <CardContent className="space-y-6">
              {required.map(r => (
                <div key={r.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <r.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{r.title}</h3>
                    <p className="text-sm text-muted-foreground">{r.desc}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle className="text-xl">Afrika Scholar Support</CardTitle></CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-2">
              {support.map(s => (
                <div key={s.title} className="flex gap-3">
                  <s.icon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <h4 className="text-sm font-semibold">{s.title}</h4>
                    <p className="text-xs text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="flex flex-wrap gap-4 justify-end">
            <Button variant="outline" onClick={handleDownload}>
              <FileDown className="mr-2 h-4 w-4" /> Download Editorial Guidelines
            </Button>
            <Button onClick={handleContinue} className="bg-accent text-accent-foreground hover:bg-accent/90 px-8">
              Continue Setup
            </Button>
          </div>
        </div>
      </div>
      
    </Layout>
  );
}
