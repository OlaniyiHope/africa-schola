import { useState, useEffect } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import { Lock, ArrowLeft, CreditCard, BookOpen, Loader2, CheckCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Layout } from "@/components/layout";
import { publications } from "@/data/publications";
import { useAuth } from "@/context/AuthContext";

export default function ArticlePreviewPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  const pubId = searchParams.get("id");
  const publication = publications.find((p) => p.id === pubId) || publications[0];

  const [hasAccess,     setHasAccess]     = useState(false);
  const [accessLoading, setAccessLoading] = useState(true);

  // On mount: check if this user already has paid access
// Replace your existing useEffect with this:
useEffect(() => {
  if (!publication?.id) {
    setAccessLoading(false);
    return;
  }

  // 1. Check localStorage first (instant — set by PublicationsAccess page after payment)
  const localKey = `article_access_${publication.id}`;
  const localAccess = localStorage.getItem(localKey);
  if (localAccess) {
    setHasAccess(true);
    setAccessLoading(false);
    return;
  }

  // 2. No local cache → check backend (for returning users on a new device/browser)
  if (!user?.email) {
    setAccessLoading(false);
    return;
  }

  fetch(
    `${import.meta.env.VITE_NODE_API_URL}/api/sch/access?email=${encodeURIComponent(user.email)}&articleId=${publication.id}`
  )
    .then(r => r.json())
    .then(data => {
      if (data.hasAccess) {
        setHasAccess(true);
        // Cache it so future visits are instant
        localStorage.setItem(localKey, JSON.stringify({ grantedAt: data.grantedAt }));
      }
    })
    .catch(() => {})
    .finally(() => setAccessLoading(false));

}, [user?.email, publication?.id]);
  const handlePurchaseClick = () => {
    if (!user) {
      // Not logged in → redirect to login, come back after
      navigate(`/login?redirect=${encodeURIComponent(`/article-preview?id=${pubId}`)}`);
    } else {
      // Logged in → go to dedicated checkout page
      navigate(`/checkout?id=${pubId}`);
    }
  };

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-section max-w-4xl">
          <Button variant="ghost" className="mb-6" asChild>
            <Link to="/publications">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Publications
            </Link>
          </Button>

          {/* Article meta */}
          <div className="mb-8">
            <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
              {publication.discipline}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-4">{publication.title}</h1>
            <p className="text-muted-foreground mb-2">
              {publication.authors.join(", ")} • {publication.year}
            </p>
            <p className="text-sm text-muted-foreground">
              {publication.journal} • DOI: {publication.doi || "N/A"}
            </p>
          </div>

          {/* Abstract — always free */}
          <Card className="mb-8">
            <CardHeader><CardTitle className="text-xl">Abstract</CardTitle></CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{publication.abstract}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {publication.keywords.map((kw) => (
                  <span key={kw} className="text-xs bg-secondary px-3 py-1 rounded-full">{kw}</span>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Full article body */}
          <div className="relative">
            <div className={hasAccess ? "" : "blur-sm select-none pointer-events-none"}>
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground mb-6">
                The growing need for comprehensive research frameworks in {publication.discipline.toLowerCase()} across the African continent has been widely acknowledged in recent academic discourse. This study builds upon existing literature while introducing novel methodological approaches that address the unique socio-economic and cultural contexts present in African research environments...
              </p>
              <h2 className="text-2xl font-bold mb-4">2. Literature Review</h2>
              <p className="text-muted-foreground mb-6">
                Previous studies have explored various dimensions of this topic, including cross-institutional collaboration frameworks and evidence-based policy recommendations. However, significant gaps remain in understanding the practical implementation challenges faced by researchers and institutions across the continent...
              </p>
              <h2 className="text-2xl font-bold mb-4">3. Methodology</h2>
              <p className="text-muted-foreground">
                This research employs a mixed-methods approach combining quantitative survey data from over 500 participants with qualitative interviews conducted across multiple institutions. The sampling strategy was designed to ensure geographic and institutional diversity...
              </p>
            </div>

            {/* Payment overlay */}
            {!hasAccess && !accessLoading && (
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-transparent flex items-center justify-center">
                <Card className="max-w-md w-full shadow-2xl border-accent/20">
                  <CardContent className="p-8 text-center">
                    <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <Lock className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Full Article Access</h3>
                    <p className="text-muted-foreground mb-6">
                      Purchase access to read the complete article including methodology, results, and discussion.
                    </p>
                    <div className="text-3xl font-bold text-accent mb-2">₦100</div>
                    <p className="text-xs text-muted-foreground mb-6">
                      One-time payment · Instant access · PDF download included
                    </p>

                    <Button
                      size="lg"
                      className="w-full bg-accent hover:bg-accent/90 mb-4"
                      onClick={handlePurchaseClick}
                    >
                      <CreditCard className="mr-2 h-5 w-5" />
                      {user ? "Proceed to Checkout" : "Sign In to Purchase"}
                    </Button>

                    <div style={{ display: "flex", justifyContent: "center", gap: "1.25rem" }}>
                      {[
                        { icon: ShieldCheck, label: "Secure payment" },
                        { icon: BookOpen,    label: "Instant access"  },
                      ].map(({ icon: Icon, label }) => (
                        <span key={label} style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.72rem", color: "#6b7280" }}>
                          <Icon size={13} /> {label}
                        </span>
                      ))}
                    </div>

                    {!user && (
                      <p className="text-xs text-muted-foreground mt-4">
                        Don't have an account?{" "}
                        <Link
                          to={`/register?redirect=${encodeURIComponent(`/article-preview?id=${pubId}`)}`}
                          className="text-accent underline font-semibold"
                        >
                          Create one free
                        </Link>
                      </p>
                    )}
                  </CardContent>
                </Card>
              </div>
            )}

            {accessLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-accent" />
              </div>
            )}
          </div>

          {/* Access granted banner */}
          {hasAccess && (
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 12, padding: "1rem 1.25rem", marginTop: "2rem" }}>
              <CheckCircle size={20} style={{ color: "#16a34a", flexShrink: 0 }} />
              <div>
                <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "#15803d", margin: 0 }}>Full access granted</p>
                <p style={{ fontSize: "0.78rem", color: "#16a34a", margin: 0 }}>You have purchased access to this article.</p>
              </div>
              <a
                href={`/publications/${publication.id}.pdf`}
                style={{ marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: "0.4rem", fontSize: "0.8rem", fontWeight: 700, color: "#15803d", textDecoration: "none", background: "#dcfce7", borderRadius: 8, padding: "0.45rem 0.875rem", border: "1px solid #bbf7d0" }}
              >
                <BookOpen size={14} /> Download PDF
              </a>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
