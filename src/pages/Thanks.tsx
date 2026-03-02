import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Calendar, Mail, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout";

export default function Thanks() {
  return (
    <Layout>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[320px]">
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="net-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="0.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#net-grid)" />
          </svg>
        </div>
        <div className="relative flex flex-col items-center justify-center text-center py-20 px-6 text-primary-foreground">
          {/* Big animated checkmark */}
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
            style={{ backgroundColor: "rgba(234,88,12,0.15)", border: "2px solid #ea580c" }}
          >
            <CheckCircle className="w-10 h-10 text-accent" />
          </div>

          <p className="text-xs uppercase tracking-widest font-semibold text-accent mb-3">
            Request Received
          </p>
          <h1 className="text-3xl md:text-4xl font-bold font-serif mb-4">
            Thank You for Your Request
          </h1>
          <p className="text-primary-foreground/75 max-w-xl text-sm leading-relaxed">
            Our Academic Coordination Team will review your submission and respond within
            2–3 working days. You will receive a confirmation email with your reference number.
          </p>
        </div>
      </section>

      {/* ── WHAT HAPPENS NEXT ─────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="section-container max-w-2xl mx-auto text-center">

          <h2 className="text-2xl font-bold font-serif text-foreground mb-2">
            What Happens Next?
          </h2>
          <p className="text-muted-foreground text-sm mb-10">
            Here's what to expect from our coordination process.
          </p>

          {/* Steps */}
          <ul className="space-y-4 text-left max-w-lg mx-auto mb-12">
            {[
              { icon: Mail,   text: "You receive a confirmation email with your reference number" },
              { icon: Users,  text: "Your request is assigned to a coordination specialist" },
              { icon: CheckCircle, text: "We match your requirements with verified academics" },
              { icon: Clock,  text: "You receive a structured proposal within 3 working days" },
              { icon: ArrowRight, text: "Engagement is formalized upon your approval" },
            ].map((s, i) => (
              <li
                key={i}
                className="flex items-start gap-4 p-4 rounded-xl bg-white"
                style={{ border: "1px solid #e5e7eb", boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(234,88,12,0.1)" }}
                >
                  <s.icon className="w-4 h-4 text-accent" />
                </div>
                <span className="text-sm text-foreground pt-1">{s.text}</span>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 justify-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 flex items-center gap-2"
              asChild
            >
              <Link to="/schedule-call">
                <Calendar className="w-4 h-4" /> Schedule a Call Now
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="flex items-center gap-2" asChild>
              <Link to="/">
                Back to Home <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

        </div>
      </section>

    </Layout>
  );
}