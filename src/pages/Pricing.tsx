// // import { Link } from "react-router-dom";
// // import { Button } from "@/components/ui/button";
// // import { CheckCircle2, ArrowRight } from "lucide-react";
// // import { Layout } from "@/components/layout";

// // const plans = [
// //   {
// //     name: "Individual Basic",
// //     price: "₦10,000",
// //     period: "/ month",
// //     yearly: "₦60,000 yearly (Save ₦60,000)",
// //     totalCredits: "Total Monthly Credits: 20",
// //     creditBreakdown: ["5 Paper", "5 Dataset", "10 Analysis"],
// //     features: [
// //       "Limited Intelligence",
// //       "Limited Journal Recommender",
// //       "Word Export",
// //       "Library",
// //       "Community",
// //     ],
// //     cta: "Start 3-Day Pro Trial",
// //     ctaLink: "/auth/signup?plan=basic",
// //     popular: false,
// //     border: "border-border",
// //   },
// //   {
// //     name: "Individual Pro",
// //     price: "₦25,000",
// //     period: "/ month",
// //     yearly: "₦250,000 yearly (Save ₦50,000)",
// //     totalCredits: "Total Monthly Credits: 85+",
// //     creditBreakdown: ["25+ Paper", "25 Dataset", "35 Analysis"],
// //     features: [
// //       "Full Intelligence Hub",
// //       "Full Journal Recommender",
// //       "Conference Alerts",
// //       "Stakeholder Mapping",
// //       "Research Gap Signals",
// //       "Research App Builder",
// //       "Unlimited Word Export",
// //     ],
// //     cta: "Start 3-Day Pro Trial",
// //     ctaLink: "/auth/signup?plan=pro",
// //     popular: true,
// //     border: "border-afrika-orange border-2",
// //   },
// //   {
// //     name: "Enterprise",
// //     price: "₦500,000 –",
// //     priceSecond: "₦1,000,000",
// //     period: "/ month",
// //     yearly: "Custom pricing",
// //     totalCredits: "Total Monthly Credits: Unlimited",
// //     creditBreakdown: ["Unlimited Paper", "Unlimited Dataset", "Unlimited Analysis"],
// //     features: [
// //       "Seat Management",
// //       "Usage Analytics",
// //       "Publication Tracking",
// //       "Journal Heat Mapping",
// //       "Funding Signals",
// //       "Shared Dataset Vault",
// //       "Guardrails",
// //       "Accreditation Reports",
// //       "Branding",
// //       "Priority Support",
// //     ],
// //     cta: "Request Enterprise Access",
// //     ctaLink: "/publeesh/institutional-demo",
// //     popular: false,
// //     border: "border-border",
// //   },
// // ];

// // const creditPacks = [
// //   { name: "+5 Paper Credits", price: "₦7,500" },
// //   { name: "+10 Dataset Credits", price: "₦5,000" },
// //   { name: "+5 Analysis Credits", price: "₦6,000" },
// // ];

// // const PricingPage = () => {
// //   return (
// //     <Layout>
// //       {/* Header Banner — same pattern as PublicationsPage */}
// //       <section className="relative overflow-hidden min-h-[400px]">
// //         <div className="absolute inset-0 bg-primary" />
// //         <div className="absolute inset-0 opacity-10">
// //           <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
// //             <defs>
// //               <pattern id="pricing-grid" width="8" height="8" patternUnits="userSpaceOnUse">
// //                 <circle cx="1" cy="1" r="0.4" fill="currentColor" className="text-primary-foreground" />
// //               </pattern>
// //             </defs>
// //             <rect width="100" height="100" fill="url(#pricing-grid)" />
// //           </svg>
// //         </div>
// //         <div className="container-section relative section-padding">
// //           <div className="max-w-3xl mx-auto text-center text-primary-foreground">
// //             <p className="text-sm uppercase tracking-wider text-accent font-semibold mb-4">
// //               Publeesh by Afrika Scholar
// //             </p>
// //             <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
// //               Pricing
// //             </h1>
// //             <p className="text-xl text-primary-foreground/80">
// //               Choose the plan that fits your research needs. Start with a 3-day Pro trial — no credit card required.
// //             </p>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Plans */}
// //       <section className="py-16 bg-background">
// //         <div className="container-section">
// //           <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
// //             {plans.map((plan) => (
// //               <div
// //                 key={plan.name}
// //                 className={`bg-card rounded-2xl p-7 border ${plan.border} relative card-hover`}
// //               >
// //                 {plan.popular && (
// //                   <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold">
// //                     MOST POPULAR
// //                   </span>
// //                 )}
// //                 <h3 className="font-bold text-lg text-primary">{plan.name}</h3>
// //                 <div className="mt-3">
// //                   <span className="text-2xl font-bold text-accent">{plan.price}</span>
// //                   {plan.priceSecond && (
// //                     <>
// //                       <br />
// //                       <span className="text-2xl font-bold text-accent">{plan.priceSecond}</span>
// //                     </>
// //                   )}
// //                   <span className="text-sm text-muted-foreground ml-1">{plan.period}</span>
// //                 </div>
// //                 <p className="text-xs text-muted-foreground mt-1">{plan.yearly}</p>

// //                 <div className="mt-4 p-3 bg-secondary rounded-lg">
// //                   <p className="text-sm font-bold text-primary">{plan.totalCredits}</p>
// //                   <ul className="mt-2 space-y-1">
// //                     {plan.creditBreakdown.map((c) => (
// //                       <li key={c} className="text-xs text-muted-foreground">• {c}</li>
// //                     ))}
// //                   </ul>
// //                 </div>

// //                 <ul className="mt-5 space-y-2">
// //                   {plan.features.map((f) => (
// //                     <li key={f} className="flex items-center gap-2 text-sm">
// //                       <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
// //                       {f}
// //                     </li>
// //                   ))}
// //                 </ul>

// //                 <Link to={plan.ctaLink} className="mt-6 block">
// //                   <Button
// //                     className={`w-full ${plan.popular ? "bg-accent hover:bg-accent/90" : ""}`}
// //                     variant={plan.popular ? "default" : "outline"}
// //                   >
// //                     {plan.cta} <ArrowRight className="h-3 w-3 ml-1" />
// //                   </Button>
// //                 </Link>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Credit Packs */}
// //       <section className="py-16 bg-secondary/30">
// //         <div className="container-section text-center">
// //           <h2 className="text-2xl font-bold text-primary">Credit Packs (Add-Ons)</h2>
// //           <div className="mt-8 grid grid-cols-3 gap-4 max-w-lg mx-auto">
// //             {creditPacks.map((pack) => (
// //               <div
// //                 key={pack.name}
// //                 className="bg-card rounded-xl p-5 border border-border card-hover text-center"
// //               >
// //                 <p className="text-sm font-semibold text-primary">{pack.name}</p>
// //                 <p className="text-lg font-bold text-accent mt-2">{pack.price}</p>
// //                 <Link to="/auth/login" className="mt-3 block">
// //                   <Button size="sm" variant="outline" className="w-full text-xs">
// //                     Purchase
// //                   </Button>
// //                 </Link>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Bottom CTA — same pattern as PublicationsPage */}
// //       <section className="relative overflow-hidden section-padding">
// //         <div className="absolute inset-0 bg-primary" />
// //         <div className="absolute inset-0 opacity-10">
// //           <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
// //             <defs>
// //               <pattern id="pricing-cta" width="5" height="5" patternUnits="userSpaceOnUse">
// //                 <circle cx="2.5" cy="2.5" r="0.5" fill="currentColor" className="text-primary-foreground" />
// //               </pattern>
// //             </defs>
// //             <rect width="100" height="100" fill="url(#pricing-cta)" />
// //           </svg>
// //         </div>
// //         <div className="container-section relative text-primary-foreground text-center">
// //           <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Elevate Your Research?</h2>
// //           <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
// //             Start your 3-day Pro trial today — no credit card required.
// //           </p>
// //           <div className="flex flex-wrap justify-center gap-4">
// //             <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
// //               <Link to="/auth/signup?intent=trial">
// //                 Get Started <ArrowRight className="ml-2 h-4 w-4" />
// //               </Link>
// //             </Button>
// //             <Button size="lg" variant="outline" className="border-primary-foreground/30 text-accent hover:bg-primary-foreground/10" asChild>
// //               <Link to="/publeesh/institutional-demo">Request Enterprise Access</Link>
// //             </Button>
// //           </div>
// //         </div>
// //       </section>
// //     </Layout>
// //   );
// // };

// // export default PricingPage;

// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
// import { Check, Star, Building2, Sparkles, ArrowRight } from "lucide-react";
// import { Layout } from "@/components/layout";

// const plans = [
//   {
//     name: "Starter",
//     price: "Free",
//     period: "7-day trial",
//     description: "Get started with limited access to research tools.",
//     features: [
//       "500 Paper Credits",
//       "500 Dataset Credits",
//       "500 Analysis Credits",
//       "Basic AI drafting",
//       "Community access",
//     ],
//     cta: "Start Free Trial",
//     ctaLink: "/auth/signup?plan=starter",
//     planKey: "starter",
//     highlight: false,
//   },
//   {
//     name: "Researcher",
//     price: "₦25,000",
//     period: "/month",
//     description: "Full research tools for individual researchers.",
//     features: [
//       "2500 Paper Credits",
//       "2500 Dataset Credits",
//       "3500 Analysis Credits",
//       "AI-powered drafting",
//       "Dataset access & analysis",
//       "Research intelligence",
//       "Priority support",
//     ],
//     cta: "Subscribe Now",
//     ctaLink: "/auth/signup?plan=researcher",
//     planKey: "researcher",
//     highlight: true,
//   },
//   {
//     name: "Institutional",
//     price: "Custom",
//     period: "",
//     description: "Multi-user access for universities and research orgs.",
//     features: [
//       "Unlimited credits",
//       "Multi-user dashboards",
//       "Institution analytics",
//       "Research collaboration",
//       "Dedicated support",
//       "Custom integrations",
//     ],
//     cta: "Request Demo",
//     ctaLink: "/publeesh/institutional-demo",
//     planKey: "institutional",
//     highlight: false,
//   },
// ];

// const creditPacks = [
//   { name: "+500 Paper Credits", price: "₦7,500" },
//   { name: "+1000 Dataset Credits", price: "₦5,000" },
//   { name: "+500 Analysis Credits", price: "₦6,000" },
// ];

// const PricingPage = () => {
//   return (
//     <Layout>
//       {/* Header Banner */}
//       <section className="relative overflow-hidden min-h-[400px]">
//         <div className="absolute inset-0 bg-primary" />
//         <div className="absolute inset-0 opacity-10">
//           <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
//             <defs>
//               <pattern id="pricing-grid" width="8" height="8" patternUnits="userSpaceOnUse">
//                 <circle cx="1" cy="1" r="0.4" fill="currentColor" className="text-primary-foreground" />
//               </pattern>
//             </defs>
//             <rect width="100" height="100" fill="url(#pricing-grid)" />
//           </svg>
//         </div>
//         <div className="container-section relative section-padding">
//           <div className="max-w-3xl mx-auto text-center text-primary-foreground">
//             <p className="text-sm uppercase tracking-wider text-accent font-semibold mb-4">
//               Publeesh by Afrika Scholar
//             </p>
//             <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
//               Pricing
//             </h1>
//             <p className="text-xl text-primary-foreground/80">
//               Unlock AI-powered research drafting, datasets, and analytics.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Plans */}
//       <section className="py-16 bg-background">
//         <div className="container-section">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
//             {plans.map((plan) => (
//               <Card
//                 key={plan.planKey}
//                 className={`relative flex flex-col ${
//                   plan.highlight
//                     ? "border-accent shadow-lg ring-2 ring-accent/20"
//                     : "border-border"
//                 }`}
//               >
//                 {plan.highlight && (
//                   <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs px-3">
//                     <Star className="h-3 w-3 mr-1" /> Recommended
//                   </Badge>
//                 )}

//                 <CardHeader className="pb-4">
//                   <div className="flex items-center gap-2">
//                     {plan.planKey === "institutional" ? (
//                       <Building2 className="h-5 w-5 text-accent" />
//                     ) : (
//                       <Sparkles className="h-5 w-5 text-accent" />
//                     )}
//                     <CardTitle className="text-lg">{plan.name}</CardTitle>
//                   </div>
//                   <div className="flex items-baseline gap-1 mt-2">
//                     <span className="text-3xl font-bold text-foreground">{plan.price}</span>
//                     {plan.period && (
//                       <span className="text-sm text-muted-foreground">{plan.period}</span>
//                     )}
//                   </div>
//                   <CardDescription className="mt-1">{plan.description}</CardDescription>
//                 </CardHeader>

//                 <CardContent className="flex-1 flex flex-col">
//                   <ul className="space-y-2 flex-1">
//                     {plan.features.map((f) => (
//                       <li key={f} className="flex items-center gap-2 text-sm text-foreground">
//                         <Check className="h-4 w-4 text-accent shrink-0" />
//                         {f}
//                       </li>
//                     ))}
//                   </ul>

//                   <Link to={plan.ctaLink} className="mt-6 block">
//                     <Button
//                       className={`w-full ${plan.highlight ? "bg-accent hover:bg-accent/90" : ""}`}
//                       variant={plan.highlight ? "default" : "outline"}
//                     >
//                       {plan.cta} <ArrowRight className="h-3 w-3 ml-2" />
//                     </Button>
//                   </Link>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Credit Packs */}
//       <section className="py-16 bg-secondary/30">
//         <div className="container-section text-center">
//           <h2 className="text-2xl font-bold text-primary">Credit Packs (Add-Ons)</h2>
//           <div className="mt-8 grid grid-cols-3 gap-4 max-w-lg mx-auto">
//             {creditPacks.map((pack) => (
//               <Card key={pack.name} className="card-hover border-border text-center">
//                 <CardContent className="p-5">
//                   <p className="text-sm font-semibold text-primary">{pack.name}</p>
//                   <p className="text-lg font-bold text-accent mt-2">{pack.price}</p>
//                   <Link to="/auth/login" className="mt-3 block">
//                     <Button size="sm" variant="outline" className="w-full text-xs">
//                       Purchase
//                     </Button>
//                   </Link>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Bottom CTA */}
//       <section className="relative overflow-hidden section-padding">
//         <div className="absolute inset-0 bg-primary" />
//         <div className="absolute inset-0 opacity-10">
//           <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
//             <defs>
//               <pattern id="pricing-cta" width="5" height="5" patternUnits="userSpaceOnUse">
//                 <circle cx="2.5" cy="2.5" r="0.5" fill="currentColor" className="text-primary-foreground" />
//               </pattern>
//             </defs>
//             <rect width="100" height="100" fill="url(#pricing-cta)" />
//           </svg>
//         </div>
//         <div className="container-section relative text-primary-foreground text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Elevate Your Research?</h2>
//           <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
//             Start your 7-day free trial today — no credit card required.
//           </p>
//           <div className="flex flex-wrap justify-center gap-4">
//             <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
//               <Link to="/auth/signup?plan=starter">
//                 Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
//               </Link>
//             </Button>
//             <Button size="lg" variant="outline" className="border-primary-foreground/30 text-accent hover:bg-primary-foreground/10" asChild>
//               <Link to="/publeesh/institutional-demo">Request Demo</Link>
//             </Button>
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// };

// export default PricingPage;
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Check, Star, Building2, Sparkles, ArrowRight, CreditCard, Landmark, Smartphone, Loader2, Lock } from "lucide-react";
import { Layout } from "@/components/layout";
import { toast } from "sonner";

const PAYSTACK_PUBLIC_KEY = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;

function loadPaystack(): Promise<void> {
  return new Promise((resolve, reject) => {
    if ((window as any).PaystackPop) { resolve(); return; }
    if (document.getElementById("paystack-js")) { resolve(); return; }
    const s = document.createElement("script");
    s.id = "paystack-js";
    s.src = "https://js.paystack.co/v1/inline.js";
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("Could not load Paystack"));
    document.body.appendChild(s);
  });
}

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "7-day trial",
    description: "Get started with limited access to research tools.",
    features: [
      "500 Paper Credits",
      "500 Dataset Credits",
      "500 Analysis Credits",
      "Basic AI drafting",
      "Community access",
    ],
    cta: "Start Free Trial",
    ctaLink: "/auth/signup?plan=starter",
    planKey: "starter",
    amountKobo: 0,
    highlight: false,
  },
  {
    name: "Researcher",
    price: "₦100",
    period: "/month",
    description: "Full research tools for individual researchers.",
    features: [
      "2500 Paper Credits",
      "2500 Dataset Credits",
      "3500 Analysis Credits",
      "AI-powered drafting",
      "Dataset access & analysis",
      "Research intelligence",
      "Priority support",
    ],
    cta: "Subscribe Now",
    ctaLink: "/auth/signup?plan=researcher",
    planKey: "researcher",
    amountKobo: 10000, // ₦100 in kobo
    highlight: true,
  },
  {
    name: "Institutional",
    price: "Custom",
    period: "",
    description: "Multi-user access for universities and research orgs.",
    features: [
      "Unlimited credits",
      "Multi-user dashboards",
      "Institution analytics",
      "Research collaboration",
      "Dedicated support",
      "Custom integrations",
    ],
    cta: "Request Demo",
    ctaLink: "/publeesh/institutional-demo",
    planKey: "institutional",
    amountKobo: 0,
    highlight: false,
  },
];

const creditPacks = [
  { name: "+500 Paper Credits", price: "₦7,500" },
  { name: "+1000 Dataset Credits", price: "₦5,000" },
  { name: "+500 Analysis Credits", price: "₦6,000" },
];

const PricingPage = () => {
  const navigate = useNavigate();
  const [showPayment, setShowPayment] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<typeof plans[0] | null>(null);
  const [processing, setProcessing] = useState(false);

  const handleSelectPlan = (plan: typeof plans[0]) => {
    if (plan.planKey === "institutional") {
      navigate("/publeesh/institutional-demo");
      return;
    }
    if (plan.planKey === "starter") {
      navigate("/auth/signup?plan=starter");
      return;
    }
    setSelectedPlan(plan);
    setShowPayment(true);
  };

  const handlePaystackPayment = async () => {
    if (!selectedPlan) return;

    // If user is not logged in, redirect to signup first
    const storedUser = localStorage.getItem("as_user");
    if (!storedUser) {
      navigate(`/auth/signup?plan=${selectedPlan.planKey}`);
      return;
    }

    const user = JSON.parse(storedUser);
    setProcessing(true);
    const planKey = selectedPlan.planKey;

    try {
      await loadPaystack();
      const reference = `sub_${user.id}_${Date.now()}`;

      const handler = (window as any).PaystackPop.setup({
        key: PAYSTACK_PUBLIC_KEY,
        email: user.email,
        amount: selectedPlan.amountKobo,
        currency: "NGN",
        ref: reference,
        metadata: {
          user_id: user.id,
          plan: planKey,
          custom_fields: [
            { display_name: "Plan", variable_name: "plan", value: selectedPlan.name },
            { display_name: "User ID", variable_name: "user_id", value: user.id },
          ],
        },
        onClose: () => {
          setProcessing(false);
          toast.info("Payment window closed.");
        },
      callback: (response: { reference: string }) => {
  fetch(`${import.meta.env.VITE_NODE_API_URL}/api/subscription/initialize`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("as_token")}`,
    },
    body: JSON.stringify({
      email: user.email,
      userId: user.id,
      plan: planKey,
    }),
  })
    .then((res) => {
      if (!res.ok) throw new Error("Activation failed");
      user.is_subscribed = true;
      user.plan = planKey;
      localStorage.setItem("as_user", JSON.stringify(user));
      setShowPayment(false);
      setProcessing(false);
      toast.success("Subscription activated! Welcome to Publeesh.");
      navigate(`/dashboard/${user.role ?? "researcher"}`);
    })
    .catch(() => {
      setProcessing(false);
      toast.error("Payment received but activation failed. Contact support.");
    });
},
      });

      setShowPayment(false);
      setTimeout(() => handler.openIframe(), 300);
    } catch (e: any) {
      setProcessing(false);
      toast.error(e.message || "Could not open payment. Try again.");
    }
  };

  return (
    <Layout>
      {/* Header Banner */}
      <section className="relative overflow-hidden min-h-[400px]">
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="pricing-grid" width="8" height="8" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="0.4" fill="currentColor" className="text-primary-foreground" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#pricing-grid)" />
          </svg>
        </div>
        <div className="container-section relative section-padding">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <p className="text-sm uppercase tracking-wider text-accent font-semibold mb-4">
              Publeesh by Afrika Scholar
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
              Pricing
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Unlock AI-powered research drafting, datasets, and analytics.
            </p>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16 bg-background">
        <div className="container-section">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <Card
                key={plan.planKey}
                className={`relative flex flex-col ${
                  plan.highlight
                    ? "border-accent shadow-lg ring-2 ring-accent/20"
                    : "border-border"
                }`}
              >
                {plan.highlight && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs px-3">
                    <Star className="h-3 w-3 mr-1" /> Recommended
                  </Badge>
                )}

                <CardHeader className="pb-4">
                  <div className="flex items-center gap-2">
                    {plan.planKey === "institutional" ? (
                      <Building2 className="h-5 w-5 text-accent" />
                    ) : (
                      <Sparkles className="h-5 w-5 text-accent" />
                    )}
                    <CardTitle className="text-lg">{plan.name}</CardTitle>
                  </div>
                  <div className="flex items-baseline gap-1 mt-2">
                    <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                    {plan.period && (
                      <span className="text-sm text-muted-foreground">{plan.period}</span>
                    )}
                  </div>
                  <CardDescription className="mt-1">{plan.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-2 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                        <Check className="h-4 w-4 text-accent shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full mt-6 ${plan.highlight ? "bg-accent hover:bg-accent/90" : ""}`}
                    variant={plan.highlight ? "default" : "outline"}
                    onClick={() => handleSelectPlan(plan)}
                  >
                    {plan.cta} <ArrowRight className="h-3 w-3 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Credit Packs */}
      <section className="py-16 bg-secondary/30">
        <div className="container-section text-center">
          <h2 className="text-2xl font-bold text-primary">Credit Packs (Add-Ons)</h2>
          <div className="mt-8 grid grid-cols-3 gap-4 max-w-lg mx-auto">
            {creditPacks.map((pack) => (
              <Card key={pack.name} className="card-hover border-border text-center">
                <CardContent className="p-5">
                  <p className="text-sm font-semibold text-primary">{pack.name}</p>
                  <p className="text-lg font-bold text-accent mt-2">{pack.price}</p>
                  <Link to="/auth/login" className="mt-3 block">
                    <Button size="sm" variant="outline" className="w-full text-xs">
                      Purchase
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden section-padding">
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="pricing-cta" width="5" height="5" patternUnits="userSpaceOnUse">
                <circle cx="2.5" cy="2.5" r="0.5" fill="currentColor" className="text-primary-foreground" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#pricing-cta)" />
          </svg>
        </div>
        <div className="container-section relative text-primary-foreground text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Elevate Your Research?</h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Start your 7-day free trial today — no credit card required.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
              <Link to="/auth/signup?plan=starter">
                Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-accent hover:bg-primary-foreground/10" asChild>
              <Link to="/publeesh/institutional-demo">Request Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Payment Modal */}
      <Dialog open={showPayment} onOpenChange={(open) => { if (!processing) setShowPayment(open); }}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Complete Payment</DialogTitle>
          </DialogHeader>

          {selectedPlan && (
            <div className="space-y-4">
              {/* Summary */}
              <div className="bg-secondary rounded-lg p-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Plan</span>
                  <span className="font-medium text-foreground">{selectedPlan.name}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Billing</span>
                  <span className="font-medium text-foreground">Monthly</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Price</span>
                  <span className="font-medium text-foreground">
                    {selectedPlan.price}{selectedPlan.period}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">VAT (0%)</span>
                  <span className="font-medium text-foreground">₦0.00</span>
                </div>
                <div className="border-t border-border pt-2 flex justify-between text-sm font-bold">
                  <span>Total</span>
                  <span className="text-foreground">{selectedPlan.price}/mo</span>
                </div>
              </div>

              {/* Payment */}
              <div className="space-y-3">
                <p className="text-sm font-medium text-foreground">Payment Method</p>

                <Button
                  className="w-full bg-accent hover:bg-accent/90 gap-2"
                  onClick={handlePaystackPayment}
                  disabled={processing}
                >
                  {processing ? (
                    <><Loader2 className="h-4 w-4 animate-spin" /> Opening secure payment...</>
                  ) : (
                    <><Lock className="h-4 w-4" /> Pay {selectedPlan.price} Securely</>
                  )}
                </Button>

                <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground">
                  {[
                    { icon: CreditCard, label: "Card" },
                    { icon: Landmark, label: "Bank Transfer" },
                    { icon: Smartphone, label: "Mobile Money" },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex flex-col items-center gap-1 border border-border rounded-lg p-2">
                      <Icon className="h-4 w-4 text-accent" />
                      <span>{label}</span>
                    </div>
                  ))}
                </div>

                <p className="text-[10px] text-muted-foreground text-center">
                  <Lock className="h-3 w-3 inline mr-1" />
                  256-bit SSL encryption · Secured by Paystack
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default PricingPage;
