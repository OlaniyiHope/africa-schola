import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout";

export default function Confirm() {
  return (
    <Layout>
      <section className="section-padding">
        <div className="section-container max-w-2xl mx-auto text-center">

          <Calendar className="w-16 h-16 text-accent mx-auto mb-6" />

          <h2 className="text-2xl font-bold font-serif text-foreground mb-3">
            Call Request Received
          </h2>

          <p className="text-muted-foreground text-sm mb-10 max-w-md mx-auto">
            You will receive a calendar invitation with meeting details at the email address you provided.
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 flex items-center gap-2" asChild>
              <Link to="/">
                Go to Dashboard <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="flex items-center gap-2" asChild>
              <Link to="/university-enablement">
                Back to Enablement
              </Link>
            </Button>
          </div>

        </div>
      </section>
    </Layout>
  );
}