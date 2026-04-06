
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  FileText, Database, BarChart3, Send, Wrench, Compass,
  ArrowRight, Eye, PlusCircle, Upload, CreditCard,
  Clock, CheckCircle, MessageCircle, TrendingUp,
  Lock, Sparkles, Search, User,
} from "lucide-react";

import CommunityPreview from "./CommunityPreview";
import { useSubscriptionContext } from "@/context/SubscriptionContext";
import { useModuleUnlocksContext } from "@/context/ModuleUnlocksContext";
import ResearchActivitySection from "../dashboard/ResearchActivitySection";

const quickActions = [
  { icon: FileText, title: "Generate Paper", desc: "Start writing", link: "/dashboard/researcher/intelligence/generate-pape" },
  { icon: Upload, title: "Upload Dataset", desc: "Add data", link: "/dashboard/researcher/intelligence/explorer" },
  { icon: PlusCircle, title: "Create Instrument", desc: "Build tools", link: "/dashboard/researcher/instrument-studio/create" },
];

const researchTools = [
  { icon: FileText, title: "Generate Paper", link: "/dashboard/generate-paper" },
  { icon: Database, title: "Explore Datasets", link: "/dashboard/data/explorer" },
  { icon: BarChart3, title: "Analyze Data", link: "/dashboard/analyze" },
  { icon: Wrench, title: "Build Instrument", link: "/dashboard/instrument-studio" },
  { icon: Compass, title: "Intelligence Insights", link: "/dashboard/intelligence" },
];

const recentPapers = [
  { id: 1, title: "AI-Driven Health Diagnostics in Sub-Saharan Africa", status: "Draft", views: 0 },
  { id: 2, title: "Digital Financial Inclusion in East Africa", status: "Submitted", views: 34 },
  { id: 3, title: "Climate Change & Agricultural Productivity in West Africa", status: "Published", views: 128 },
];

const statusColors: Record<string, string> = {
  Draft: "bg-muted text-muted-foreground",
  Submitted: "bg-primary/10 text-primary",
  Published: "bg-afrika-green/10 text-afrika-green",
};

const peerReviews = [
  { title: "Machine Learning in African Education Systems", deadline: "Mar 15, 2026" },
  { title: "Water Scarcity and Urban Planning in Lagos", deadline: "Mar 22, 2026" },
];

const intelligenceActivity = [
  { label: "Datasets Analyzed", count: 5, icon: Database },
  { label: "Papers Generated", count: 8, icon: FileText },
  { label: "Instruments Used", count: 2, icon: Wrench },
];

export default function ResearcherDashboard() {
  const { subscription, isActive } = useSubscriptionContext();
  const { isModuleUnlocked } = useModuleUnlocksContext();

  return (
    <div className="space-y-8">

      {/* Profile Card */}
      <div className="bg-card rounded-xl border border-border p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-full bg-orange-500 flex items-center justify-center text-white font-semibold text-base shrink-0">
            L
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-foreground">lekller</span>
              <Badge className="text-[10px] bg-orange-100 text-orange-700">Researcher</Badge>
            </div>
            <p className="text-xs text-muted-foreground mt-0.5">Not specified · Not specified</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          
<div className="flex items-center gap-2">
  <Link to="/dashboard/researcher/account/profile">
    <Button variant="outline" size="sm" className="text-xs gap-1">
      <Eye className="h-3 w-3" /> View
    </Button>
  </Link>
   <Link to="/dashboard/researcher/settings">
     <Button variant="outline" size="sm" className="text-xs">Edit</Button>
   </Link>

</div>
        
        </div>
      </div>

      {/* Upsell Banner */}
      {!isActive && (
        <div className="bg-card rounded-xl border border-border p-8 flex flex-col items-center text-center gap-3">
          <div className="h-11 w-11 rounded-full bg-orange-100 flex items-center justify-center">
            <Sparkles className="h-5 w-5 text-orange-500" />
          </div>
          <h3 className="text-base font-semibold text-foreground">Unlock AI-Powered Research Intelligence</h3>
          <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
            Access Afrika Scholar's Publeesh AI tools for structured research drafting, literature enhancement, global datasets, and analytics.
          </p>
          <div className="flex gap-3 mt-1">
            <Link to="/dashboard/researcher/publishing/subscription">
              <Button variant="outline" size="sm" className="text-xs border-orange-500 text-orange-500">View Plans</Button>
            </Link>
            <Link to="/dashboard/researcher/publishing/subscription">
              <Button size="sm" className="text-xs bg-orange-500 hover:bg-orange-600 text-white">Start Free Trial</Button>
            </Link>
          </div>
        </div>
      )}

      {/* Research Tools */}
      <div>
        <h2 className="text-lg font-bold text-foreground mb-4">Research Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {researchTools.map((tool) => (
            <div
              key={tool.title}
              className="bg-card rounded-xl border border-border p-4 flex items-center gap-3 opacity-60"
            >
              <div className="h-9 w-9 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                <tool.icon className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground">{tool.title}</p>
                <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                  <Lock className="h-3 w-3" /> Subscription required
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <Link to="/dashboard/researcher/publishing/subscription">
            <Button variant="outline" size="sm" className="text-xs border-orange-500 text-orange-500">
              View Subscription Plans
            </Button>
          </Link>
        </div>
      </div>

      {/* Research Activity */}
      <ResearchActivitySection visible={isModuleUnlocked("my_research")} />

      {/* My Papers */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-foreground">My Papers</h2>
          <Link to="/dashboard/researcher/research/papers">
            <Button variant="ghost" size="sm" className="text-xs gap-1">View All <ArrowRight className="h-3 w-3" /></Button>
          </Link>
        </div>
        <div className="space-y-3">
          {recentPapers.map((paper) => (
            <Link key={paper.id} to="/dashboard/researcher/research/papers" className="bg-card rounded-xl border border-border p-4 flex items-center justify-between hover:shadow-sm transition-shadow block">
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-foreground truncate">{paper.title}</h3>
                <div className="flex items-center gap-3 mt-1">
                  <Badge className={`text-[10px] ${statusColors[paper.status]}`}>{paper.status}</Badge>
                  <span className="text-xs text-muted-foreground flex items-center gap-1"><Eye className="h-3 w-3" /> {paper.views}</span>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0 ml-4" />
            </Link>
          ))}
        </div>
      </div>

      {/* Peer Review Requests */}
      <div>
        <h2 className="text-lg font-bold text-foreground mb-4">Peer Review Requests</h2>
        <div className="bg-card rounded-xl border border-border divide-y divide-border">
          {peerReviews.map((r, i) => (
            <Link key={i} to="/dashboard/researcher/publishing/reviews" className="flex items-center justify-between px-5 py-3.5 hover:bg-secondary/50 transition-colors">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">{r.title}</p>
                <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                  <Clock className="h-3 w-3" /> Due: {r.deadline}
                </p>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0 ml-4" />
            </Link>
          ))}
        </div>
      </div>

      {/* Research Intelligence Activity */}
      <div>
        <h2 className="text-lg font-bold text-foreground mb-4">Research Intelligence Activity</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {intelligenceActivity.map((item) => (
            <div key={item.label} className="bg-card rounded-xl border border-border p-4">
              <div className="h-9 w-9 rounded-lg bg-secondary flex items-center justify-center mb-3">
                <item.icon className="h-4 w-4 text-accent" />
              </div>
              <p className="text-2xl font-bold text-foreground">{item.count}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-lg font-bold text-foreground mb-4">Quick Research Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {quickActions.map((a) => (
            <Link key={a.title} to={a.link} className="bg-card rounded-xl p-5 border border-border flex items-center gap-4 hover:shadow-md transition-shadow group">
              <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                <a.icon className="h-5 w-5 text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground">{a.title}</p>
                <p className="text-xs text-muted-foreground flex items-center gap-1">{a.desc} <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" /></p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Community + Subscription */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <CommunityPreview />
        </div>
        <div>
          {isActive && subscription ? (
            <div className="bg-card rounded-xl border border-border p-4 space-y-3">
              <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
                <CreditCard className="h-4 w-4 text-accent" /> Subscription & Credits
              </h3>
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Plan</span>
                  <span className="font-medium text-foreground capitalize">{subscription.plan}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">AI Credits</span>
                  <span className="font-medium text-foreground">{(subscription.paper_credits_total - subscription.paper_credits_used).toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Dataset Credits</span>
                  <span className="font-medium text-foreground">{(subscription.dataset_credits_total - subscription.dataset_credits_used).toLocaleString()}</span>
                </div>
              </div>
              <Link to="/dashboard/billing">
                <Button size="sm" className="w-full text-xs">Manage Billing</Button>
              </Link>
            </div>
          ) : (
            <div className="bg-card rounded-xl border border-border p-4 space-y-3">
              <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
                <CreditCard className="h-4 w-4 text-accent" /> Subscription & Credits
              </h3>
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Plan</span>
                  <span className="font-medium text-foreground">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">AI Credits</span>
                  <span className="font-medium text-foreground">0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Dataset Credits</span>
                  <span className="font-medium text-foreground">0</span>
                </div>
              </div>
              <Link to="/dashboard/billing">
                <Button variant="outline" size="sm" className="w-full text-xs border-orange-500 text-orange-500">Manage Billing</Button>
              </Link>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}