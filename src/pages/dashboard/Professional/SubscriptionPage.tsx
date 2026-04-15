// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// import DashboardLayout from "@/pages/DashboardLayout";


// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
// import { Check, Star, Building2, Sparkles, CreditCard, Landmark, Smartphone } from "lucide-react";

// import { supabase } from "@/integrations/supabase/client";
// import { toast } from "sonner";

// import { useAuth } from "@/context/AuthContext";
// import { useSubscriptionContext } from "../SubscriptionContext";

// const plans = [
//   {
//     name: "Starter",
//     price: "Free",
//     period: "7-day trial",
//     description: "Get started with limited access to research tools.",
//     features: [
//       "5 Paper Credits",
//       "5 Dataset Credits",
//       "5 Analysis Credits",
//       "Basic AI drafting",
//       "Community access",
//     ],
//     cta: "Start Free Trial",
//     planKey: "starter",
//     highlight: false,
//   },
//   {
//     name: "Professional",
//     price: "₦25,000",
//     period: "/month",
//     description: "Full research tools for individual researchers.",
//     features: [
//       "25 Paper Credits",
//       "25 Dataset Credits",
//       "35 Analysis Credits",
//       "AI-powered drafting",
//       "Dataset access & analysis",
//       "Research intelligence",
//       "Priority support",
//     ],
//     cta: "Subscribe Now",
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
//     planKey: "institutional",
//     highlight: false,
//   },
// ];

// export default function SubscriptionPages() {
//    const { user }              = useAuth();
// const role = (user?.role as "researcher" | "academic" | "professional") ?? "academic";

//   const { subscription, refetch } = useSubscriptionContext();
//   const navigate = useNavigate();
//   const [showPayment, setShowPayment] = useState(false);
//   const [selectedPlan, setSelectedPlan] = useState<typeof plans[0] | null>(null);
//   const [processing, setProcessing] = useState(false);

//   const handleSelectPlan = (plan: typeof plans[0]) => {
//     if (plan.planKey === "institutional") {
//       navigate("/publeesh/institutional-demo");
//       return;
//     }
//     setSelectedPlan(plan);
//     setShowPayment(true);
//   };

//   const handlePayment = async (method: string) => {
//     if (!user || !selectedPlan) return;
//     setProcessing(true);
//     try {
//       const isStarter = selectedPlan.planKey === "starter";
//       const now = new Date();
//       const periodEnd = new Date(now);
//       periodEnd.setDate(periodEnd.getDate() + (isStarter ? 7 : 30));

//       const subData = {
//         user_id: user.id,
//         plan: selectedPlan.planKey,
//         status: isStarter ? "trialing" : "active",
//         paper_credits_used: 0,
//         paper_credits_total: isStarter ? 5000 : 25000,
//         dataset_credits_used: 0,
//         dataset_credits_total: isStarter ? 5000 : 25000,
//         analysis_credits_used: 0,
//         analysis_credits_total: isStarter ? 5000 : 35000,
//         billing_cycle: "monthly",
//         current_period_start: now.toISOString(),
//         current_period_end: periodEnd.toISOString(),
//         paystack_reference: `ref_${Date.now()}`,
//       };

//       if (subscription) {
//         await supabase.from("subscriptions").update(subData).eq("user_id", user.id);
//       } else {
//         await supabase.from("subscriptions").insert(subData);
//       }

//       await refetch();
//       setShowPayment(false);
//       navigate("/publeesh/payment-success");
//     } catch (err) {
//       toast.error("Payment failed. Please try again.");
//     } finally {
//       setProcessing(false);
//     }
//   };

//   return (
//     <DashboardLayout role={role}>
//       <div className="max-w-5xl mx-auto space-y-8 px-4 py-8">

//         {/* Header */}
//         <div className="text-center space-y-2">
//           <h1 className="text-2xl font-bold text-foreground">Choose Your Publeesh Plan</h1>
//           <p className="text-sm text-muted-foreground">
//             Unlock AI-powered research drafting, datasets, and analytics.
//           </p>
//         </div>

//         {/* Plan Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {plans.map((plan) => (
//             <Card
//               key={plan.planKey}
//               className={`relative flex flex-col ${
//                 plan.highlight
//                   ? "border-accent shadow-lg ring-2 ring-accent/20"
//                   : "border-border"
//               }`}
//             >
//               {plan.highlight && (
//                 <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs px-3">
//                   <Star className="h-3 w-3 mr-1" /> Recommended
//                 </Badge>
//               )}

//               <CardHeader className="pb-4">
//                 <div className="flex items-center gap-2">
//                   {plan.planKey === "institutional" ? (
//                     <Building2 className="h-5 w-5 text-accent" />
//                   ) : (
//                     <Sparkles className="h-5 w-5 text-accent" />
//                   )}
//                   <CardTitle className="text-lg">{plan.name}</CardTitle>
//                 </div>
//                 <div className="flex items-baseline gap-1 mt-2">
//                   <span className="text-3xl font-bold text-foreground">{plan.price}</span>
//                   {plan.period && (
//                     <span className="text-sm text-muted-foreground">{plan.period}</span>
//                   )}
//                 </div>
//                 <CardDescription className="mt-1">{plan.description}</CardDescription>
//               </CardHeader>

//               <CardContent className="flex-1 flex flex-col">
//                 <ul className="space-y-2 flex-1">
//                   {plan.features.map((f) => (
//                     <li key={f} className="flex items-center gap-2 text-sm text-foreground">
//                       <Check className="h-4 w-4 text-accent shrink-0" />
//                       {f}
//                     </li>
//                   ))}
//                 </ul>
//                 <Button
//                   className={`w-full mt-6 ${plan.highlight ? "bg-accent hover:bg-accent/90" : ""}`}
//                   variant={plan.highlight ? "default" : "outline"}
//                   onClick={() => handleSelectPlan(plan)}
//                 >
//                   {plan.cta}
//                 </Button>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* Current plan notice */}
//         {subscription && (
//           <div className="bg-secondary rounded-lg p-4 text-center text-sm text-muted-foreground">
//             You are currently on the{" "}
//             <span className="font-semibold text-foreground capitalize">{subscription.plan}</span> plan.
//           </div>
//         )}
//       </div>

//       {/* Payment Modal */}
//       <Dialog open={showPayment} onOpenChange={setShowPayment}>
//         <DialogContent className="max-w-md">
//           <DialogHeader>
//             <DialogTitle>Complete Payment</DialogTitle>
//           </DialogHeader>

//           {selectedPlan && (
//             <div className="space-y-4">
//               {/* Summary */}
//               <div className="bg-secondary rounded-lg p-4 space-y-2">
//                 <div className="flex justify-between text-sm">
//                   <span className="text-muted-foreground">Plan</span>
//                   <span className="font-medium text-foreground">{selectedPlan.name}</span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span className="text-muted-foreground">Billing</span>
//                   <span className="font-medium text-foreground">Monthly</span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span className="text-muted-foreground">Price</span>
//                   <span className="font-medium text-foreground">
//                     {selectedPlan.price}{selectedPlan.period}
//                   </span>
//                 </div>
//                 {selectedPlan.planKey !== "starter" && (
//                   <>
//                     <div className="flex justify-between text-sm">
//                       <span className="text-muted-foreground">VAT (0%)</span>
//                       <span className="font-medium text-foreground">₦0.00</span>
//                     </div>
//                     <div className="border-t border-border pt-2 flex justify-between text-sm font-bold">
//                       <span>Total</span>
//                       <span className="text-foreground">{selectedPlan.price}/mo</span>
//                     </div>
//                   </>
//                 )}
//               </div>

//               {/* Payment Methods */}
//               <div className="space-y-2">
//                 <p className="text-sm font-medium text-foreground">Payment Method</p>

//                 {selectedPlan.planKey === "starter" ? (
//                   <Button
//                     className="w-full bg-accent hover:bg-accent/90"
//                     onClick={() => handlePayment("trial")}
//                     disabled={processing}
//                   >
//                     {processing ? "Activating..." : "Start Free Trial"}
//                   </Button>
//                 ) : (
//                   <div className="space-y-2">
//                     {[
//                       { method: "card",   label: "Debit / Credit Card", icon: CreditCard },
//                       { method: "bank",   label: "Bank Transfer",        icon: Landmark },
//                       { method: "mobile", label: "Mobile Money",         icon: Smartphone },
//                     ].map((pm) => (
//                       <Button
//                         key={pm.method}
//                         variant="outline"
//                         className="w-full justify-start gap-3"
//                         onClick={() => handlePayment(pm.method)}
//                         disabled={processing}
//                       >
//                         <pm.icon className="h-4 w-4 text-accent" />
//                         {processing ? "Processing..." : pm.label}
//                       </Button>
//                     ))}
//                     <p className="text-[10px] text-muted-foreground text-center mt-2">
//                       Secured by Paystack. You'll be redirected to complete payment.
//                     </p>
//                   </div>
//                 )}
//               </div>
//             </div>
//           )}
//         </DialogContent>
//       </Dialog>
//     </DashboardLayout>
//   );
// }
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import DashboardLayout from "@/pages/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Check, Star, Building2, Sparkles, CreditCard, Landmark, Smartphone, Loader2, Lock } from "lucide-react";

import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useAuth } from "@/context/AuthContext";
import { useSubscriptionContext } from "../SubscriptionContext";

// ─── Load Paystack inline script ──────────────────────────────────────────────
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

const PAYSTACK_PUBLIC_KEY = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;
const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "7-day trial",
    description: "Get started with limited access to research tools.",
    features: [
      "5 Paper Credits",
      "5 Dataset Credits",
      "5 Analysis Credits",
      "Basic AI drafting",
      "Community access",
    ],
    cta: "Start Free Trial",
    planKey: "starter",
    amountKobo: 0,
    highlight: false,
  },
  {
    name: "Profesional",
    price: "₦100",
    period: "/month",
    description: "Full professional tools for individual professional.",
    features: [
      "25 Paper Credits",
      "25 Dataset Credits",
      "35 Analysis Credits",
      "AI-powered drafting",
      "Dataset access & analysis",
      "Research intelligence",
      "Priority support",
    ],
    cta: "Subscribe Now",
    planKey: "professional",
    amountKobo: 10000, // ₦25,000 in kobo
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
    planKey: "institutional",
    amountKobo: 0,
    highlight: false,
  },
];

export default function SubscriptionPages() {
  const { user } = useAuth();
  const role = (user?.role as "researcher" | "academic" | "professional") ?? "academic";
  const { subscription, refetch } = useSubscriptionContext();
  const navigate = useNavigate();

  const [showPayment, setShowPayment] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<typeof plans[0] | null>(null);
  const [processing, setProcessing] = useState(false);

  const handleSelectPlan = (plan: typeof plans[0]) => {
    if (plan.planKey === "institutional") {
      navigate("/publeesh/institutional-demo");
      return;
    }
    setSelectedPlan(plan);
    setShowPayment(true);
  };

  // ─── Activate subscription in Supabase after successful payment ──────────
  // const activateSubscription = async (planKey: string, isStarter: boolean) => {
  //   if (!user) return;
  //   const now = new Date();
  //   const periodEnd = new Date(now);
  //   periodEnd.setDate(periodEnd.getDate() + (isStarter ? 7 : 30));

  //   const subData = {
  //     user_id: user.id,
  //     plan: planKey,
  //     status: isStarter ? "trialing" : "active",
  //     paper_credits_used: 0,
  //     paper_credits_total: isStarter ? 5 : 25,
  //     dataset_credits_used: 0,
  //     dataset_credits_total: isStarter ? 5 : 25,
  //     analysis_credits_used: 0,
  //     analysis_credits_total: isStarter ? 5 : 35,
  //     billing_cycle: "monthly",
  //     current_period_start: now.toISOString(),
  //     current_period_end: periodEnd.toISOString(),
  //     paystack_reference: `ref_${Date.now()}`,
  //   };

  //   if (subscription) {
  //     await supabase.from("subscriptions").update(subData).eq("user_id", user.id);
  //   } else {
  //     await supabase.from("subscriptions").insert(subData);
  //   }

  //   await refetch();
  // };
const activateSubscription = async (planKey: string, isStarter: boolean, paystackRef?: string) => {
  if (!user) return;

  const response = await fetch(`${import.meta.env.VITE_NODE_API_URL}/api/subscription/initialize`, {
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
  });

  // ✅ Check FIRST before doing anything else
  if (!response.ok) throw new Error("Activation failed");

  // ✅ Update localStorage so nav unlocks immediately
  const stored = localStorage.getItem("as_user");
  if (stored) {
    const userData = JSON.parse(stored);
    userData.is_subscribed = true;
    userData.plan = planKey;
    localStorage.setItem("as_user", JSON.stringify(userData));
  }

  // ✅ Only refetch once, after everything is done
  await refetch();
};
  // ─── Starter: activate directly, no payment needed ───────────────────────
  const handleStarterActivate = async () => {
    if (!user || !selectedPlan) return;
    setProcessing(true);
    try {
      await activateSubscription("starter", true);
      setShowPayment(false);
      toast.success("Free trial activated!");
      navigate(`/dashboard/${role}/publishing/subscription`);
    } catch {
      toast.error("Could not activate trial. Please try again.");
    } finally {
      setProcessing(false);
    }
  };

const handlePaystackPayment = async () => {
  if (!user || !selectedPlan) return;
  setProcessing(true);

  // ✅ Capture these NOW before any state changes
  const planKey = selectedPlan.planKey;
  const planRole = role;

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
        activateSubscription(planKey, false)   // ✅ use captured variable
          .then(() => {
            setShowPayment(false);
            setProcessing(false);
            toast.success("Subscription activated! Welcome to Publeesh.");
            navigate(`/dashboard/${planRole}`); // ✅ use captured variable
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
    <DashboardLayout role={role}>
      <div className="max-w-5xl mx-auto space-y-8 px-4 py-8">

        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold text-foreground">Choose Your Publeesh Plan</h1>
          <p className="text-sm text-muted-foreground">
            Unlock AI-powered research drafting, datasets, and analytics.
          </p>
        </div>

        {/* Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Current plan notice */}
        {subscription && (
          <div className="bg-secondary rounded-lg p-4 text-center text-sm text-muted-foreground">
            You are currently on the{" "}
            <span className="font-semibold text-foreground capitalize">{subscription.plan}</span> plan.
          </div>
        )}
      </div>

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
                {selectedPlan.planKey !== "starter" && (
                  <>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">VAT (0%)</span>
                      <span className="font-medium text-foreground">₦0.00</span>
                    </div>
                    <div className="border-t border-border pt-2 flex justify-between text-sm font-bold">
                      <span>Total</span>
                      <span className="text-foreground">{selectedPlan.price}/mo</span>
                    </div>
                  </>
                )}
              </div>

              {/* Payment Methods */}
              <div className="space-y-2">
                <p className="text-sm font-medium text-foreground">Payment Method</p>

                {selectedPlan.planKey === "starter" ? (
                  <Button
                    className="w-full bg-accent hover:bg-accent/90"
                    onClick={handleStarterActivate}
                    disabled={processing}
                  >
                    {processing
                      ? <><Loader2 className="h-4 w-4 mr-2 animate-spin" /> Activating...</>
                      : "Start Free Trial"
                    }
                  </Button>
                ) : (
                  <div className="space-y-3">
                    <Button
                      className="w-full bg-accent hover:bg-accent/90 gap-2"
                      onClick={handlePaystackPayment}
                      disabled={processing}
                    >
                      {processing ? (
                        <><Loader2 className="h-4 w-4 animate-spin" /> Opening secure payment...</>
                      ) : (
                        <><Lock className="h-4 w-4" /> Pay ₦100 Securely</>
                      )}
                    </Button>

                    <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground">
                      {[
                        { icon: CreditCard, label: "Card" },
                        { icon: Landmark,   label: "Bank Transfer" },
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
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  );
}