import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, Mail, Phone, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout";

const labelCls = "block text-sm font-semibold text-foreground mb-1.5";
const inputStyle: React.CSSProperties = {
  width: "100%",
  borderRadius: "8px",
  border: "1.5px solid #d1d5db",
  background: "#ffffff",
  padding: "0.65rem 0.875rem",
  fontSize: "0.875rem",
  color: "#111827",
  outline: "none",
  fontFamily: "inherit",
  boxSizing: "border-box",
};

export default function Schedule() {
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
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
            style={{ backgroundColor: "rgba(234,88,12,0.15)", border: "2px solid #ea580c" }}
          >
            <Calendar className="w-10 h-10 text-accent" />
          </div>
          <p className="text-xs uppercase tracking-widest font-semibold text-accent mb-3">
            Partnership
          </p>
          <h1 className="text-3xl md:text-4xl font-bold font-serif mb-4">
            Schedule a Strategic Partnership Call
          </h1>
          <p className="text-primary-foreground/75 max-w-xl text-sm leading-relaxed">
            Book a call with our Academic Coordination Team to discuss your institutional needs,
            deployment timelines, and partnership opportunities.
          </p>
        </div>
      </section>

      {/* ── FORM + SIDEBAR ────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="section-container max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Left — info sidebar */}
            <div className="flex flex-col gap-5">
              <div>
                <h3 className="text-base font-bold font-serif text-foreground mb-1">
                  What to expect
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A focused 30-minute call with a member of our coordination team to understand
                  your needs and explore how we can support you.
                </p>
              </div>

              {[
                { icon: Clock,  label: "30-minute session" },
                { icon: Users,  label: "Academic Coordination Team" },
                { icon: Mail,   label: "Confirmation sent by email" },
                { icon: Phone,  label: "Video or phone — your choice" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(234,88,12,0.1)" }}
                  >
                    <item.icon className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-sm text-foreground font-medium">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Right — form */}
            <div
              className="lg:col-span-2 bg-white p-8"
              style={{
                borderRadius: "16px",
                border: "1px solid #e5e7eb",
                boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
              }}
            >
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  window.location.href = "/schedule-a-call/confirm";
                }}
                style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
              >
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label className={labelCls}>Full Name *</label>
                    <input style={inputStyle} required defaultValue="Dr. Amara Okonkwo" />
                  </div>
                  <div>
                    <label className={labelCls}>Email Address *</label>
                    <input style={inputStyle} type="email" required defaultValue="a.okonkwo@padu.ac.ke" />
                  </div>
                </div>

                <div>
                  <label className={labelCls}>Organization</label>
                  <input style={inputStyle} defaultValue="Pan-African Digital University" />
                </div>

                <div>
                  <label className={labelCls}>Job Title / Role</label>
                  <input style={inputStyle} placeholder="e.g. Vice Chancellor, Academic Registrar" />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label className={labelCls}>Preferred Date</label>
                    <input style={inputStyle} type="date" defaultValue="2026-04-01" />
                  </div>
                  <div>
                    <label className={labelCls}>Preferred Time</label>
                    <input style={inputStyle} type="time" defaultValue="10:00" />
                  </div>
                </div>

                <div>
                  <label className={labelCls}>Message / Context</label>
                  <textarea
                    style={{ ...inputStyle, minHeight: "110px", resize: "vertical" }}
                    rows={4}
                    defaultValue="We would like to discuss deploying 3 senior lecturers for our new Data Science program launching in Q2 2026."
                  />
                </div>

         <Button
  type="submit"
  size="lg"
  className="bg-accent hover:bg-accent/90 w-full flex items-center justify-center gap-2"
  onClick={() => window.location.href = "/schedule-call/confirm"}
>
  <Calendar className="w-4 h-4" /> Confirm Call Request
</Button>

                <p style={{ fontSize: "0.75rem", color: "#9ca3af", textAlign: "center" }}>
                  We'll confirm your booking within 24 hours.
                </p>
              </form>
            </div>

          </div>
        </div>
      </section>

    </Layout>
  );
}