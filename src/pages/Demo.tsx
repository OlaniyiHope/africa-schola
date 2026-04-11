import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout";

const Demo = () => {
  const [form, setForm] = useState({
    institutionName: "",
    contactName: "",
    email: "",
    seats: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      {/* Header Banner */}
      <section className="relative overflow-hidden min-h-[220px] flex items-center">
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="demo-grid" width="8" height="8" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="0.4" fill="currentColor" className="text-primary-foreground" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#demo-grid)" />
          </svg>
        </div>
        <div className="container-section relative section-padding w-full">
          <div className="max-w-2xl mx-auto text-center text-primary-foreground">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              Request Institutional Demo
            </h1>
            <p className="text-primary-foreground/80 text-base">
              See how Publeesh can empower your institution's research.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-background">
        <div className="container-section">
          <div className="max-w-lg mx-auto">
            {submitted ? (
              <div className="bg-card border border-border rounded-2xl p-10 text-center shadow-sm">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="h-6 w-6 text-accent" />
                </div>
                <h2 className="text-xl font-bold text-primary mb-2">Request Submitted!</h2>
                <p className="text-muted-foreground text-sm mb-6">
                  Thank you! Our team will reach out to you shortly to schedule your institutional demo.
                </p>
                <Link to="/">
                  <Button variant="outline" size="sm">Back to Home</Button>
                </Link>
              </div>
            ) : (
              <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Institution Name */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">
                      Institution Name
                    </label>
                    <input
                      name="institutionName"
                      value={form.institutionName}
                      onChange={handleChange}
                      required
                      placeholder="University of..."
                      className="w-full border border-border rounded-lg px-3 py-2.5 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition"
                    />
                  </div>

                  {/* Contact Name */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">
                      Contact Name
                    </label>
                    <input
                      name="contactName"
                      value={form.contactName}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full border border-border rounded-lg px-3 py-2.5 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@institution.edu"
                      className="w-full border border-border rounded-lg px-3 py-2.5 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition"
                    />
                  </div>

                  {/* Number of Seats */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">
                      Number of Seats Needed
                    </label>
                    <input
                      name="seats"
                      type="number"
                      min="1"
                      value={form.seats}
                      onChange={handleChange}
                      required
                      placeholder="e.g. 50"
                      className="w-full border border-border rounded-lg px-3 py-2.5 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-2.5 mt-2"
                  >
                    Submit Request <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Demo;
