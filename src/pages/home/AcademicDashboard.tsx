// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import {
//   FileText, BookOpen, Users2, ArrowRight, ClipboardList, Clock,
//   CheckCircle, Send, BarChart3, Building2, Handshake, MessageCircle, TrendingUp,
// } from "lucide-react";
// import CommunityPreview from "./CommunityPreview";

// const editorialTasks = [
//   { text: "3 manuscripts awaiting editorial decision", link: "/dashboard/publishing/workflow" },
//   { text: "2 reviewer assignments pending", link: "/dashboard/publishing/reviewer-assignment" },
//   { text: "1 revision approval needed", link: "/dashboard/publishing/workflow" },
// ];

// const peerReviewAssignments = [
//   { title: "Impact of Mobile Learning in Rural Kenya", due: "Mar 12, 2026", status: "In Progress" },
//   { title: "Renewable Energy Policy in Southern Africa", due: "Mar 18, 2026", status: "Pending" },
//   { title: "Gender Equity in STEM Higher Education", due: "Mar 25, 2026", status: "Pending" },
// ];

// const recentPublications = [
//   { title: "AI Ethics in African Education Systems", status: "Published", journal: "African Journal of Science" },
//   { title: "Sustainable Agriculture Practices in West Africa", status: "Submitted", journal: "Pan-African Review" },
// ];

// const collaborations = [
//   { title: "Cross-Border Climate Research Initiative", partner: "University of Cape Town", status: "Active" },
//   { title: "EdTech Innovation Partnership", partner: "Lagos Business School", status: "Active" },
// ];

// const metrics = [
//   { label: "Total Publications", count: 14, icon: FileText },
//   { label: "Peer Reviews", count: 23, icon: ClipboardList },
//   { label: "Citations", count: 87, icon: TrendingUp },
// ];

// const statusColors: Record<string, string> = {
//   "In Progress": "bg-primary/10 text-primary",
//   Pending: "bg-muted text-muted-foreground",
//   Active: "bg-afrika-green/10 text-afrika-green",
//   Published: "bg-afrika-green/10 text-afrika-green",
//   Submitted: "bg-primary/10 text-primary",
// };

// export default function AcademicDashboard() {
//   return (
//     <div className="space-y-8">
//       {/* Academic Metrics */}
//       <div>
//         <h2 className="text-lg font-bold text-foreground mb-4">Academic Metrics</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
//           {metrics.map((m) => (
//             <div key={m.label} className="bg-card rounded-xl border border-border p-4">
//               <div className="h-9 w-9 rounded-lg bg-secondary flex items-center justify-center mb-3">
//                 <m.icon className="h-4 w-4 text-accent" />
//               </div>
//               <p className="text-2xl font-bold text-foreground">{m.count}</p>
//               <p className="text-xs text-muted-foreground mt-0.5">{m.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Editorial Tasks */}
//       <div>
//         <h2 className="text-lg font-bold text-foreground mb-4">Editorial Tasks</h2>
//         <div className="bg-card rounded-xl border border-border divide-y divide-border">
//           {editorialTasks.map((task, i) => (
//             <Link key={i} to={task.link} className="flex items-center justify-between px-5 py-3.5 hover:bg-secondary/50 transition-colors">
//               <p className="text-sm text-foreground">{task.text}</p>
//               <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0 ml-4" />
//             </Link>
//           ))}
//         </div>
//       </div>

//       {/* Peer Review Assignments */}
//       <div>
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-lg font-bold text-foreground">Peer Review Assignments</h2>
//           <Link to="/dashboard/publishing/reviews">
//             <Button variant="ghost" size="sm" className="text-xs gap-1">View All <ArrowRight className="h-3 w-3" /></Button>
//           </Link>
//         </div>
//         <div className="space-y-3">
//           {peerReviewAssignments.map((r, i) => (
//             <Link key={i} to="/dashboard/publishing/reviews" className="bg-card rounded-xl border border-border p-4 flex items-center justify-between hover:shadow-sm transition-shadow block">
//               <div className="flex-1 min-w-0">
//                 <h3 className="text-sm font-semibold text-foreground truncate">{r.title}</h3>
//                 <div className="flex items-center gap-3 mt-1">
//                   <Badge className={`text-[10px] ${statusColors[r.status]}`}>{r.status}</Badge>
//                   <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="h-3 w-3" /> Due: {r.due}</span>
//                 </div>
//               </div>
//               <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0 ml-4" />
//             </Link>
//           ))}
//         </div>
//       </div>

//       {/* Recent Publications + Academic Collaboration */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <div>
//           <h2 className="text-lg font-bold text-foreground mb-4">Recent Publications</h2>
//           <div className="bg-card rounded-xl border border-border divide-y divide-border">
//             {recentPublications.map((p, i) => (
//               <Link key={i} to="/dashboard/my-papers" className="flex items-center justify-between px-5 py-3.5 hover:bg-secondary/50 transition-colors">
//                 <div className="flex-1 min-w-0">
//                   <p className="text-sm font-medium text-foreground truncate">{p.title}</p>
//                   <div className="flex items-center gap-2 mt-0.5">
//                     <Badge className={`text-[10px] ${statusColors[p.status]}`}>{p.status}</Badge>
//                     <span className="text-xs text-muted-foreground">{p.journal}</span>
//                   </div>
//                 </div>
//                 <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0 ml-4" />
//               </Link>
//             ))}
//           </div>
//         </div>

//         <div>
//           <h2 className="text-lg font-bold text-foreground mb-4">Academic Collaboration</h2>
//           <div className="bg-card rounded-xl border border-border divide-y divide-border">
//             {collaborations.map((c, i) => (
//               <Link key={i} to="/dashboard/network/engagements" className="flex items-center justify-between px-5 py-3.5 hover:bg-secondary/50 transition-colors">
//                 <div className="flex-1 min-w-0">
//                   <p className="text-sm font-medium text-foreground truncate">{c.title}</p>
//                   <div className="flex items-center gap-2 mt-0.5">
//                     <Badge className={`text-[10px] ${statusColors[c.status]}`}>{c.status}</Badge>
//                     <span className="text-xs text-muted-foreground">{c.partner}</span>
//                   </div>
//                 </div>
//                 <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0 ml-4" />
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Institutional Activity */}
//       <div>
//         <h2 className="text-lg font-bold text-foreground mb-4">Institutional Activity</h2>
//         <div className="bg-card rounded-xl border border-border p-5 space-y-3">
//           <div className="flex items-start gap-3">
//             <Building2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
//             <div>
//               <p className="text-xs text-muted-foreground">Institution Projects</p>
//               <p className="text-sm font-medium text-foreground">3 active faculty research projects</p>
//             </div>
//           </div>
//           <div className="flex items-start gap-3">
//             <Handshake className="h-4 w-4 text-accent mt-0.5 shrink-0" />
//             <div>
//               <p className="text-xs text-muted-foreground">Faculty Collaborations</p>
//               <p className="text-sm font-medium text-foreground">2 cross-department partnerships</p>
//             </div>
//           </div>
//           <Link to="/dashboard/institutional">
//             <Button  size="sm" className="w-full mt-2 text-xs">View Institutional Overview</Button>
//           </Link>
//         </div>
//       </div>

//       {/* Community Highlights */}
//       <CommunityPreview />
//     </div>
//   );
// }

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
              <Badge className="text-[10px] bg-orange-100 text-orange-700">Academic</Badge>
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
        <h2 className="text-lg font-bold text-foreground mb-4">Academic Metrics</h2>
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