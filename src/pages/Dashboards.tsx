
import { Link } from "react-router-dom";
import DashboardLayout from "@/pages/DashboardLayout";
import { useAuth } from "@/context/AuthContext";
import { useSubscriptionContext } from "@/context/SubscriptionContext";
import { useModuleUnlocksContext } from "@/context/ModuleUnlocksContext";
import AcademicDashboard from "./home/AcademicDashboard";
import ProfessionalDashboard from "./home/ProfessionalDashboard";
import ResearcherDashboard from "./home/ResearcherDashboard";

const Dashboards = () => {

  const { subscription, isActive } = useSubscriptionContext();
  const { unlockedModules } = useModuleUnlocksContext();
const { user } = useAuth();
const displayName = user?.username || "Researcher";
  const role = (user?.role as "researcher" | "academic" | "professional") ?? "researcher";

  const currentUserType = role;

  const hasActivity = (unlockedModules && unlockedModules.size > 0) || isActive;

  const subtitleMap: Record<string, string> = {
    researcher: "Manage your research, publishing, and intelligence tools from one workspace.",
    academic: "Manage publishing, peer reviews, editorial tasks, and academic collaboration.",
    professional: "Discover research partnerships, consulting opportunities, and academic networks.",
  };

  const credits = isActive && subscription
    ? [
        { label: "Paper Credits",    used: subscription.paper_credits_used,    total: subscription.paper_credits_total,    color: "bg-accent" },
        { label: "Dataset Credits",  used: subscription.dataset_credits_used,  total: subscription.dataset_credits_total,  color: "bg-primary" },
        { label: "Analysis Credits", used: subscription.analysis_credits_used, total: subscription.analysis_credits_total, color: "bg-afrika-green" },
      ]
    : [];

  return (
    <DashboardLayout role={role}>
      <div className="max-w-6xl mx-auto space-y-8">

        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-foreground">Welcome back, {displayName} 👋</h1>
          <p className="text-sm text-muted-foreground mt-1">
            {subtitleMap[currentUserType] || subtitleMap.researcher}
          </p>
        </div>

        {/* Credit Cards — active subscribers only */}
        {isActive && credits.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {credits.map((c) => {
              const remaining = c.total - c.used;
              const isZero = remaining <= 0;
              return (
                <div key={c.label} className="bg-card rounded-xl p-5 border border-border">
                  <p className="text-xs text-muted-foreground">{c.label}</p>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className={`text-2xl font-bold ${isZero ? "text-destructive" : "text-foreground"}`}>
                      {remaining.toLocaleString()}
                    </span>
                    <span className="text-sm text-muted-foreground">/ {c.total.toLocaleString()}</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full mt-3">
                    <div
                      className={`h-full rounded-full ${isZero ? "bg-destructive" : c.color}`}
                      style={{ width: `${(c.used / c.total) * 100}%` }}
                    />
                  </div>
                  <p className="text-[10px] text-muted-foreground mt-1">{c.used} / {c.total} used</p>
                  {isZero && (
                    <div className="mt-2 p-2 bg-destructive/5 rounded-md">
                      <p className="text-[10px] text-destructive font-medium">You have used all credits this month.</p>
                      <div className="flex gap-2 mt-1">
                        <Link to={`/dashboard/${currentUserType}/billing/credits`} className="text-[10px] text-accent font-medium hover:underline">Buy Credits</Link>
                        <Link to={`/dashboard/${currentUserType}/billing`}         className="text-[10px] text-accent font-medium hover:underline">Upgrade Plan</Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Role-specific dashboard content */}
        {currentUserType === "academic"     && <AcademicDashboard />}
        {currentUserType === "professional" && <ProfessionalDashboard />}
        {currentUserType === "researcher"   && <ResearcherDashboard />}

      </div>
    </DashboardLayout>
  );
};

export default Dashboards;