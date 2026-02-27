import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Layout } from "@/components/layout";
import {
  GraduationCap, Users, BookOpen, FileEdit,
  Server, GitBranch, Shield, Search, Archive
} from "lucide-react";

const audiences = [
  { icon: GraduationCap, title: "Universities & Research Institutions", desc: "Launch institutional journals that showcase faculty research and elevate your academic profile." },
  { icon: Users, title: "Academic Societies & Professional Bodies", desc: "Publish society journals that advance disciplinary knowledge and serve your members." },
  { icon: BookOpen, title: "Editorial Teams & Senior Scholars", desc: "Lead a journal with full editorial infrastructure and peer review support." },
  { icon: FileEdit, title: "Special Issue & Thematic Editors", desc: "Curate focused issues around conferences, themes, or institutional projects." },
];

const features = [
  { icon: Server, title: "Publishing Infrastructure", desc: "Complete hosting, submission system, and journal management platform." },
  { icon: GitBranch, title: "Peer Review System", desc: "Structured workflows for reviewer assignment, tracking, and editorial decisions." },
  { icon: Shield, title: "Editorial Governance Support", desc: "Role templates, conflict-of-interest policies, and best-practice frameworks." },
  { icon: Search, title: "Indexing Readiness", desc: "Built to meet criteria for DOAJ, Scopus, and other major indexes from day one." },
  { icon: Archive, title: "Long-term Archiving", desc: "Secure backups and digital preservation for your published content." },
];

export default function Start() {
  return (
    <Layout>
     {/* Hero */}
      <section className="relative overflow-hidden bg-[#2A3792] py-24 text-primary-foreground">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(24_95%_53%/0.15),transparent_60%)]" />
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <h1 className="font-serif text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Start a Peer-Reviewed Academic Journal
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80">
            Launch a credible, open-access academic journal aligned with global publishing
            standards and African research priorities.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8">
              <Link to="/propose">Propose a Journal</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-accent hover:bg-primary-foreground/10">
              <Link to="/standards">View Publishing Standards</Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-primary-foreground/70 border border-accent hover:text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/existing-journals">Existing Journals</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center font-serif text-3xl font-bold text-primary">Who This Is For</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map(a => (
              <Card key={a.title} className="border-none bg-card shadow-md transition-shadow hover:shadow-lg">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                    <a.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-foreground">{a.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{a.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Afrika Scholar Provides */}
      <section className="bg-muted/50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center font-serif text-3xl font-bold text-primary">What Afrika Scholar Provides</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(f => (
              <div key={f.title} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{f.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-primary">Ready to publish a credible academic journal?</h2>
          <div className="mt-6 space-y-2 text-muted-foreground">
            <p>Afrika Scholar is <strong className="text-foreground">journal-first</strong> — not pay-to-publish.</p>
            <p>We <strong className="text-foreground">never compromise peer review</strong>.</p>
            <p>We support <strong className="text-foreground">Africa-centric, globally credible</strong> scholarship.</p>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8">
              <Link to="/propose">Propose a Journal</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/standards">View Publishing Standards</Link>
            </Button>
          </div>
        </div>
      </section>

    </Layout>
  );
}
